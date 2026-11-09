"""Train a small CNN on MNIST with pure NumPy, then export int8 weights for the browser.

Architecture (must match the JS in page.html):
  conv 5x5, 1->8, pad 2, ReLU, maxpool 2   -> 8x14x14
  conv 3x3, 8->16, pad 1, ReLU, maxpool 2  -> 16x7x7
  dense 784->64, ReLU (dropout in training)
  dense 64->10, softmax
usage: python3 train.py <mnist_dir> <out.json> [epochs]
"""
import base64, json, sys, time
import numpy as np
from numpy.lib.stride_tricks import sliding_window_view
from scipy import ndimage

DATA, OUT = sys.argv[1], sys.argv[2]
EPOCHS = int(sys.argv[3]) if len(sys.argv) > 3 else 8
MEAN, STD = 0.1307, 0.3081
rng = np.random.default_rng(7)


def idx(path):
    raw = open(path, "rb").read()
    if raw[2] == 8 and raw[3] == 3:
        n, h, w = np.frombuffer(raw[4:16], ">i4")
        return np.frombuffer(raw[16:], np.uint8).reshape(n, h, w)
    n = np.frombuffer(raw[4:8], ">i4")[0]
    return np.frombuffer(raw[8:], np.uint8)[:n]


Xtr, ytr = idx(f"{DATA}/train-images-idx3-ubyte"), idx(f"{DATA}/train-labels-idx1-ubyte")
Xte, yte = idx(f"{DATA}/t10k-images-idx3-ubyte"), idx(f"{DATA}/t10k-labels-idx1-ubyte")
print("data", Xtr.shape, Xte.shape, flush=True)


# ------------------------------------------------------------------ layers
def conv_fwd(x, w, b, p):
    N, C, H, W = x.shape
    O, _, k, _ = w.shape
    xp = np.pad(x, ((0, 0), (0, 0), (p, p), (p, p)))
    win = sliding_window_view(xp, (k, k), axis=(2, 3))          # N,C,H,W,k,k
    cols = win.transpose(0, 2, 3, 1, 4, 5).reshape(N * H * W, C * k * k)
    out = cols @ w.reshape(O, -1).T + b
    return out.reshape(N, H, W, O).transpose(0, 3, 1, 2), cols


def conv_bwd(dout, cols, x_shape, w, p):
    N, C, H, W = x_shape
    O, _, k, _ = w.shape
    d = dout.transpose(0, 2, 3, 1).reshape(-1, O)
    dw = (d.T @ cols).reshape(w.shape)
    db = d.sum(0)
    dcols = (d @ w.reshape(O, -1)).reshape(N, H, W, C, k, k)
    dxp = np.zeros((N, C, H + 2 * p, W + 2 * p), np.float32)
    for u in range(k):
        for v in range(k):
            dxp[:, :, u:u + H, v:v + W] += dcols[:, :, :, :, u, v].transpose(0, 3, 1, 2)
    return dxp[:, :, p:p + H, p:p + W], dw, db


def pool_fwd(x):
    N, C, H, W = x.shape
    r = x.reshape(N, C, H // 2, 2, W // 2, 2)
    out = r.max(axis=(3, 5))
    mask = (r == out[:, :, :, None, :, None])
    return out, mask


def pool_bwd(dout, mask):
    d = mask * dout[:, :, :, None, :, None]
    d = d / np.maximum(mask.sum(axis=(3, 5), keepdims=True), 1)
    N, C, h, _, w, _ = d.shape
    return d.reshape(N, C, h * 2, w * 2)


def he(shape, fan):
    return (rng.standard_normal(shape) * np.sqrt(2 / fan)).astype(np.float32)


P = {"c1w": he((8, 1, 5, 5), 25), "c1b": np.zeros(8, np.float32),
     "c2w": he((16, 8, 3, 3), 72), "c2b": np.zeros(16, np.float32),
     "f1w": he((64, 784), 784), "f1b": np.zeros(64, np.float32),
     "f2w": he((10, 64), 64), "f2b": np.zeros(10, np.float32)}


def forward(x, P, train=False):
    c = {}
    z1, c["cols1"] = conv_fwd(x, P["c1w"], P["c1b"], 2)
    a1 = np.maximum(z1, 0); c["a1"] = a1
    p1, c["m1"] = pool_fwd(a1)
    c["p1"] = p1
    z2, c["cols2"] = conv_fwd(p1, P["c2w"], P["c2b"], 1)
    a2 = np.maximum(z2, 0); c["a2"] = a2
    p2, c["m2"] = pool_fwd(a2)
    f = p2.reshape(len(x), -1); c["f"] = f
    h = np.maximum(f @ P["f1w"].T + P["f1b"], 0)
    if train:
        keep = (rng.random(h.shape) > 0.3).astype(np.float32) / 0.7
        h = h * keep; c["keep"] = keep
    c["h"] = h
    z = h @ P["f2w"].T + P["f2b"]
    return z, c


def backward(z, y, c, P, xs):
    N = len(y)
    pr = np.exp(z - z.max(1, keepdims=True)); pr /= pr.sum(1, keepdims=True)
    loss = -np.log(pr[np.arange(N), y] + 1e-9).mean()
    dz = pr; dz[np.arange(N), y] -= 1; dz /= N
    G = {"f2w": dz.T @ c["h"], "f2b": dz.sum(0)}
    dh = dz @ P["f2w"]
    if "keep" in c: dh *= c["keep"]
    dh *= (c["h"] > 0)
    G["f1w"], G["f1b"] = dh.T @ c["f"], dh.sum(0)
    df = (dh @ P["f1w"]).reshape(c["a2"].shape[0], 16, 7, 7)
    da2 = pool_bwd(df, c["m2"]) * (c["a2"] > 0)
    dp1, G["c2w"], G["c2b"] = conv_bwd(da2, c["cols2"], c["p1"].shape, P["c2w"], 1)
    da1 = pool_bwd(dp1, c["m1"]) * (c["a1"] > 0)
    _, G["c1w"], G["c1b"] = conv_bwd(da1, c["cols1"], xs, P["c1w"], 2)
    return loss, G


# ------------------------------------------------------------------ augmentation (makes it robust to mouse/finger drawings)
def augment(imgs):
    out = np.empty_like(imgs, dtype=np.float32)
    for i, im in enumerate(imgs.astype(np.float32) / 255):
        a = np.deg2rad(rng.uniform(-14, 14)); s = rng.uniform(.82, 1.12); sh = rng.uniform(-.18, .18)
        M = np.array([[np.cos(a), -np.sin(a)], [np.sin(a), np.cos(a)]]) @ np.array([[1, sh], [0, 1]]) / s
        ctr = np.array([13.5, 13.5])
        off = ctr - M @ ctr + rng.uniform(-2.2, 2.2, 2)
        t = ndimage.affine_transform(im, M, offset=off, order=1, mode="constant")
        r = rng.random()
        if r < .25: t = ndimage.grey_dilation(t, size=(2, 2))
        elif r < .35: t = ndimage.grey_erosion(t, size=(2, 2)) * 1.0 + t * 0.4
        out[i] = np.clip(t, 0, 1)
    return out


def norm(x01):
    return ((x01 - MEAN) / STD)[:, None].astype(np.float32)


def evaluate(P, X, Y, bs=1000):
    preds = []
    for i in range(0, len(X), bs):
        z, _ = forward(norm(X[i:i + bs].astype(np.float32) / 255), P)
        preds.append(z.argmax(1))
    p = np.concatenate(preds)
    return (p == Y).mean(), p


# ------------------------------------------------------------------ train (Adam + cosine LR)
M_ = {k: np.zeros_like(v) for k, v in P.items()}; V_ = {k: np.zeros_like(v) for k, v in P.items()}
BS, step = 128, 0
steps_total = EPOCHS * (len(Xtr) // BS)
for ep in range(EPOCHS):
    t0, perm, tl = time.time(), rng.permutation(len(Xtr)), 0
    for bi in range(len(Xtr) // BS):
        idb = perm[bi * BS:(bi + 1) * BS]
        x = norm(augment(Xtr[idb]))
        z, c = forward(x, P, train=True)
        loss, G = backward(z, ytr[idb], c, P, x.shape)
        tl += loss; step += 1
        lr = 1e-4 + (2e-3 - 1e-4) * 0.5 * (1 + np.cos(np.pi * step / steps_total))
        for k in P:
            g = G[k] + (1e-4 * P[k] if k.endswith("w") else 0)
            M_[k] = .9 * M_[k] + .1 * g; V_[k] = .999 * V_[k] + .001 * g * g
            mh, vh = M_[k] / (1 - .9 ** step), V_[k] / (1 - .999 ** step)
            P[k] -= (lr * mh / (np.sqrt(vh) + 1e-8)).astype(np.float32)
        if bi % 100 == 0:
            print(f"  ep{ep} b{bi} loss {tl / (bi + 1):.4f} {time.time() - t0:.0f}s", flush=True)
    acc, _ = evaluate(P, Xte, yte)
    print(f"epoch {ep + 1}/{EPOCHS} loss {tl / (bi + 1):.4f} test acc {acc:.4f} ({time.time() - t0:.0f}s)", flush=True)

# ------------------------------------------------------------------ quantize to int8 + re-evaluate exactly what the browser will run
Q, enc, size = {}, {}, 0
for k, v in P.items():
    s = float(np.abs(v).max() / 127) or 1e-8
    q = np.clip(np.round(v / s), -127, 127).astype(np.int8)
    Q[k] = (q.astype(np.float32) * s).reshape(v.shape)
    enc[k] = {"s": s, "d": base64.b64encode(q.tobytes()).decode()}
    size += q.size
acc, pred = evaluate(Q, Xte, yte)
cm = np.zeros((10, 10), int)
for t, p in zip(yte, pred): cm[t, p] += 1
print("quantized test acc", acc, "errors", int((pred != yte).sum()), "params", size, flush=True)

samples = []
for d in range(10):
    for i in np.where((yte == d) & (pred == d))[0][:4]:
        samples.append([int(d), base64.b64encode(Xte[i].tobytes()).decode()])
json.dump({"w": enc, "mean": MEAN, "std": STD, "acc": float(acc), "errors": int((pred != yte).sum()),
           "epochs": EPOCHS, "size": size, "cm": cm.tolist(), "samples": samples}, open(OUT, "w"))
# a few reference outputs to check the JS implementation against
ref = forward(norm(Xte[:5].astype(np.float32) / 255), Q)[0]
ref = np.exp(ref - ref.max(1, keepdims=True)); ref /= ref.sum(1, keepdims=True)
json.dump({"probs": ref.round(6).tolist(), "imgs": [base64.b64encode(Xte[i].tobytes()).decode() for i in range(5)]},
          open(OUT.replace(".json", "_ref.json"), "w"))
print("saved", OUT)
