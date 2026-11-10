// Circuits: spline centerline → samples, racing line, speed profile, DRS zones, and all the trackside scenery.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const TRACKS = {
  dune: { name: 'Dune Valley GP', blurb: 'Fast sweepers into a desert sunset', time: 'sunset', width: 15,
    pts: [[0, 0], [700, 0], [1050, 60], [1180, 300], [1050, 520], [760, 540], [600, 700], [700, 930], [560, 1120], [240, 1120], [60, 920], [-200, 880], [-380, 700], [-330, 450], [-500, 260], [-380, 30]] },
  harbor: { name: 'Harbor Night Circuit', blurb: 'Tight street circuit under the floodlights', time: 'night', width: 13,
    pts: [[0, 0], [760, 0], [880, 60], [870, 380], [700, 430], [680, 600], [880, 640], [920, 900], [540, 930], [470, 720], [220, 700], [170, 930], [-220, 940], [-250, 520], [-60, 470], [-130, 70]] },
  alpine: { name: 'Alpine Ring', blurb: 'Flowing climb through pine forest', time: 'day', width: 14,
    pts: [[0, 0], [520, -30], [900, 60], [1200, 320], [1160, 620], [900, 720], [700, 570], [470, 650], [390, 900], [110, 1010], [-200, 870], [-270, 570], [-110, 390], [-330, 210], [-270, 40]] },
};
export const TIMES = {
  day: { sky: ['#2f6fcf', '#9cc4ee', '#dde9f3'], fog: '#bcd2e6', sun: '#fff4e2', sunI: 3, hemi: ['#d6e8ff', '#5d6b45', 1.1], dir: [-.4, .75, -.5], exp: 1, lamps: 0, grass: '#4f7d36' },
  sunset: { sky: ['#2b3a78', '#e57b5a', '#ffc27a'], fog: '#e7a982', sun: '#ffb56b', sunI: 2.6, hemi: ['#ffc79a', '#4d4636', .75], dir: [-.85, .28, -.35], exp: 1.05, lamps: .4, grass: '#8a7a45' },
  night: { sky: ['#02040b', '#08142c', '#1b2d52'], fog: '#0e1830', sun: '#a8bdf0', sunI: .7, hemi: ['#5470b0', '#141414', .55], dir: [.3, .8, .4], exp: 1.15, lamps: 1, grass: '#2f4a2a' },
};
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function canvasTex(w, h, draw, rep, aniso = 8) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = aniso; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } return t; }

export class Track {
  constructor(id) {
    const D = TRACKS[id]; this.id = id; this.def = D; this.W = D.width;
    const curve = new THREE.CatmullRomCurve3(D.pts.map(([x, z]) => new THREE.Vector3(x, 0, z)), true, 'centripetal', .5);
    const L = curve.getLength(), N = Math.round(L / 2); this.L = L; this.N = N; this.ds = L / N;
    const X = new Float32Array(N), Z = new Float32Array(N), TX = new Float32Array(N), TZ = new Float32Array(N);
    const pts = curve.getSpacedPoints(N); for (let i = 0; i < N; i++) { X[i] = pts[i].x; Z[i] = pts[i].z; }
    for (let i = 0; i < N; i++) { const a = (i - 1 + N) % N, b = (i + 1) % N; let tx = X[b] - X[a], tz = Z[b] - Z[a]; const l = Math.hypot(tx, tz); TX[i] = tx / l; TZ[i] = tz / l; }
    const K = new Float32Array(N); for (let i = 0; i < N; i++) { const a = (i - 4 + N) % N, b = (i + 4) % N; const cross = TX[a] * TZ[b] - TZ[a] * TX[b], dot = TX[a] * TX[b] + TZ[a] * TZ[b]; K[i] = Math.atan2(cross, dot) / (8 * this.ds); }
    Object.assign(this, { X, Z, TX, TZ, K }); // normal (left) = (TZ, -TX)
    this.racingLine(); this.speedProfile(); this.zones();
  }
  nx(i) { return this.TZ[i]; } nz(i) { return -this.TX[i]; }
  idx(s) { const N = this.N; return ((Math.floor(s / this.ds) % N) + N) % N; }
  pos(s, lat, out) { const N = this.N, f = s / this.ds, i0 = ((Math.floor(f) % N) + N) % N, i1 = (i0 + 1) % N, t = f - Math.floor(f);
    const x = this.X[i0] + (this.X[i1] - this.X[i0]) * t, z = this.Z[i0] + (this.Z[i1] - this.Z[i0]) * t, tx = this.TX[i0] + (this.TX[i1] - this.TX[i0]) * t, tz = this.TZ[i0] + (this.TZ[i1] - this.TZ[i0]) * t, l = Math.hypot(tx, tz);
    out.x = x + (tz / l) * lat; out.z = z + (-tx / l) * lat; out.tx = tx / l; out.tz = tz / l; return out; }
  locate(x, z, hint = -1) {
    const N = this.N; let best = 0, bd = 1e18;
    if (hint < 0) { for (let i = 0; i < N; i += 3) { const d = (x - this.X[i]) ** 2 + (z - this.Z[i]) ** 2; if (d < bd) { bd = d; best = i; } } hint = best; }
    for (let k = -40; k <= 40; k++) { const i = (hint + k + N) % N, d = (x - this.X[i]) ** 2 + (z - this.Z[i]) ** 2; if (d < bd) { bd = d; best = i; } }
    const dx = x - this.X[best], dz = z - this.Z[best], along = dx * this.TX[best] + dz * this.TZ[best], lat = dx * this.nx(best) + dz * this.nz(best);
    return { i: best, s: ((best * this.ds + along) % this.L + this.L) % this.L, lat };
  }
  racingLine() {
    const N = this.N, lim = this.W / 2 - 1.6, o = new Float32Array(N), px = new Float32Array(N), pz = new Float32Array(N);
    for (let it = 0; it < 260; it++) {
      for (let i = 0; i < N; i++) { px[i] = this.X[i] + this.nx(i) * o[i]; pz[i] = this.Z[i] + this.nz(i) * o[i]; }
      const k = it < 120 ? 14 : 6;
      for (let i = 0; i < N; i++) { const a = (i - k + N) % N, b = (i + k) % N, mx = (px[a] + px[b]) / 2, mz = (pz[a] + pz[b]) / 2; const want = (mx - this.X[i]) * this.nx(i) + (mz - this.Z[i]) * this.nz(i); o[i] = Math.max(-lim, Math.min(lim, o[i] + (want - o[i]) * .5)); }
    }
    this.RL = o;
  }
  speedProfile() {
    const N = this.N, v = new Float32Array(N), ds = this.ds, rx = i => this.X[i] + this.nx(i) * this.RL[i], rz = i => this.Z[i] + this.nz(i) * this.RL[i];
    for (let i = 0; i < N; i++) { const a = (i - 8 + N) % N, b = (i + 8) % N, ax = rx(a), az = rz(a), bx = rx(i), bz = rz(i), cx = rx(b), cz = rz(b);
      const A = Math.hypot(bx - ax, bz - az), B = Math.hypot(cx - bx, cz - bz), C = Math.hypot(cx - ax, cz - az), area = Math.abs((bx - ax) * (cz - az) - (bz - az) * (cx - ax)) / 2;
      const R = area < 1e-3 ? 1e5 : (A * B * C) / (4 * area); v[i] = Math.min(92, Math.sqrt(30 * R)); }
    for (let pass = 0; pass < 2; pass++) for (let k = 0; k < N; k++) { const i = (N - 1 - k), j = (i + 1) % N; v[i] = Math.min(v[i], Math.sqrt(v[j] * v[j] + 2 * 36 * ds)); }
    for (let pass = 0; pass < 2; pass++) for (let i = 0; i < N; i++) { const j = (i + 1) % N, a = 12 * (1 - v[i] / 95) + 2; v[j] = Math.min(v[j], Math.sqrt(v[i] * v[i] + 2 * a * ds)); }
    this.VP = v;
  }
  zones() {
    const N = this.N, K = this.K; this.kerb = new Uint8Array(N); this.runoff = new Float32Array(N); this.drs = new Uint8Array(N);
    for (let i = 0; i < N; i++) { const k = Math.abs(K[i]); if (k > .0055) for (let j = -14; j <= 14; j++) this.kerb[(i + j + N) % N] = 1; }
    for (let i = 0; i < N; i++) { let m = 0; for (let j = -40; j <= 40; j += 4) m = Math.max(m, Math.abs(K[(i + j + N) % N])); this.runoff[i] = 9 + ss(.003, .014, m) * 16; }
    let start = -1, run = 0; const seg = [];
    for (let k = 0; k < N * 2; k++) { const i = k % N; if (Math.abs(K[i]) < .0022) { if (start < 0) start = k; run++; } else { if (run * this.ds > 380) seg.push([start, k]); start = -1; run = 0; } if (k > N && start < 0) break; }
    seg.forEach(([a, b]) => { for (let k = a + 25; k < b - 45; k++) this.drs[k % N] = 1; });
  }
  wall(i) { return this.W / 2 + this.runoff[i]; }

  /* ---------------------------------------------------------------- meshes */
  build(renderer) {
    const T = TIMES[this.def.time], g = new THREE.Group(), N = this.N, W = this.W, R = rng(this.id.length * 99 + 7);
    const ribbon = (inner, outer, y, mat, vScale = 10, uvAcross = 1, every = 1, cond) => {
      const pos = [], uv = [], idx = []; let vi = 0, open = false, vlen = 0;
      for (let k = 0; k <= N; k += every) { const i = k % N, ok = !cond || cond(i);
        if (!ok) { open = false; continue; }
        const a = typeof inner === 'function' ? inner(i) : inner, b = typeof outer === 'function' ? outer(i) : outer;
        pos.push(this.X[i] + this.nx(i) * a, y, this.Z[i] + this.nz(i) * a, this.X[i] + this.nx(i) * b, y, this.Z[i] + this.nz(i) * b); vlen = k * this.ds / vScale; uv.push(0, vlen, uvAcross, vlen);
        if (open) idx.push(vi - 2, vi, vi - 1, vi - 1, vi, vi + 1); vi += 2; open = true; }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setIndex(idx); geo.computeVertexNormals();
      const m = new THREE.Mesh(geo, mat); m.receiveShadow = true; g.add(m); return m;
    };
    // ground
    const grassT = canvasTex(256, 256, (c, w, h) => { c.fillStyle = T.grass; c.fillRect(0, 0, w, h); for (let k = 0; k < 3000; k++) { c.fillStyle = `rgba(${R() < .5 ? '255,255,220' : '0,20,0'},${.04 + R() * .05})`; c.fillRect(R() * w, R() * h, 2, 2 + R() * 3); } for (let k = 0; k < 6; k++) { c.fillStyle = 'rgba(0,0,0,.05)'; c.fillRect(0, k * 42, w, 21); } }, [300, 300]);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(6000, 6000), new THREE.MeshStandardMaterial({ map: grassT, roughness: 1 })); ground.rotation.x = -Math.PI / 2; ground.position.set(400, -.15, 500); ground.receiveShadow = true; g.add(ground);
    // asphalt with a darker rubbered racing line
    const asphaltT = canvasTex(512, 512, (c, w, h) => { c.fillStyle = '#3b3d42'; c.fillRect(0, 0, w, h); for (let k = 0; k < 26000; k++) { const v = R(); c.fillStyle = v < .5 ? `rgba(255,255,255,${.03 + R() * .05})` : `rgba(0,0,0,${.06 + R() * .1})`; c.fillRect(R() * w, R() * h, 1 + R() * 2, 1 + R() * 2); } }, [3, 1]);
    asphaltT.repeat.set(2, 1);
    const across = 10, pos = [], uv = [], col = [], idx = [];
    for (let k = 0; k <= N; k++) { const i = k % N; for (let a = 0; a <= across; a++) { const lat = -W / 2 + W * a / across, x = this.X[i] + this.nx(i) * lat, z = this.Z[i] + this.nz(i) * lat; pos.push(x, .02, z); uv.push(a / across * 2, k * this.ds / 12);
      const d = Math.abs(lat - this.RL[i]), rub = Math.max(0, 1 - d / 2.4) * .35, c = 1 - rub; col.push(c, c, c); }
      if (k < N) for (let a = 0; a < across; a++) { const p = k * (across + 1) + a, q = p + across + 1; idx.push(p, q, p + 1, q, q + 1, p + 1); } }
    const rg = new THREE.BufferGeometry(); rg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); rg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); rg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); rg.setIndex(idx); rg.computeVertexNormals();
    const road = new THREE.Mesh(rg, new THREE.MeshStandardMaterial({ map: asphaltT, vertexColors: true, roughness: .82, metalness: 0 })); road.receiveShadow = true; g.add(road);
    const white = new THREE.MeshStandardMaterial({ color: '#cfd0cc', roughness: .85 });
    ribbon(W / 2 - .45, W / 2 - .2, .05, white); ribbon(-W / 2 + .2, -W / 2 + .45, .05, white);
    // kerbs
    const kerbT = canvasTex(64, 256, (c, w, h) => { for (let k = 0; k < 8; k++) { c.fillStyle = k % 2 ? '#f4f4f0' : '#d4141f'; c.fillRect(0, k * 32, w, 32); } c.fillStyle = 'rgba(0,0,0,.15)'; c.fillRect(0, 0, 6, h); }, [1, 1]);
    const kerbM = new THREE.MeshStandardMaterial({ map: kerbT, roughness: .55 });
    ribbon(W / 2 - .2, W / 2 + 1.5, .075, kerbM, 8, 1, 1, i => this.kerb[i]); ribbon(-W / 2 - 1.5, -W / 2 + .2, .075, kerbM, 8, 1, 1, i => this.kerb[i]);
    // run-off: gravel traps at corners, painted asphalt elsewhere
    const gravT = canvasTex(256, 256, (c, w, h) => { c.fillStyle = '#c9b48a'; c.fillRect(0, 0, w, h); for (let k = 0; k < 9000; k++) { c.fillStyle = `rgba(${R() < .5 ? '255,250,230' : '90,70,40'},${.15 + R() * .2})`; c.fillRect(R() * w, R() * h, 2, 2); } }, [1, 1]);
    const gravM = new THREE.MeshStandardMaterial({ map: gravT, roughness: 1 }), runM = new THREE.MeshStandardMaterial({ color: '#4f6f8f', roughness: .85 });
    ribbon(W / 2 + 1.5, i => this.wall(i) - .5, .012, gravM, 10, 2, 1, i => this.runoff[i] > 13); ribbon(i => -this.wall(i) + .5, -W / 2 - 1.5, .012, gravM, 10, 2, 1, i => this.runoff[i] > 13);
    ribbon(W / 2 + 1.5, W / 2 + 4, .015, runM, 10, 1, 1, i => this.runoff[i] <= 13); ribbon(-W / 2 - 4, -W / 2 - 1.5, .015, runM, 10, 1, 1, i => this.runoff[i] <= 13);
    // barriers with sponsor boards
    const ads = ['JK RACING', 'KOPPA ENERGY', 'NOVA TYRES', 'APEX OIL', 'LIME TELECOM', 'ORBIT WATCHES', 'VELOCITY', 'SUMMIT AIR'];
    const adT = canvasTex(1024, 64, (c, w, h) => { ads.forEach((a, k) => { const x = k * w / ads.length; c.fillStyle = ['#111', '#b8f36b', '#14378a', '#d4141f', '#f4f4f0', '#ff8000', '#202020', '#00a0de'][k]; c.fillRect(x, 0, w / ads.length, h); c.fillStyle = ['#b8f36b', '#111', '#fff', '#fff', '#111', '#fff', '#ffd21f', '#fff'][k]; c.font = '900 30px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(a, x + w / ads.length / 2, h / 2 + 2); }); }, [1, 1]);
    adT.wrapS = THREE.RepeatWrapping;
    const wallM = new THREE.MeshStandardMaterial({ map: adT, roughness: .6, side: THREE.DoubleSide });
    const wallGeo = side => { const p = [], u = [], ix = []; let vi = 0; for (let k = 0; k <= N; k++) { const i = k % N, d = side * this.wall(i), x = this.X[i] + this.nx(i) * d, z = this.Z[i] + this.nz(i) * d; p.push(x, 0, z, x, 1.25, z); const v = side * k * this.ds / 64; u.push(v, 0, v, 1); if (k) ix.push(vi - 2, vi, vi - 1, vi - 1, vi, vi + 1); vi += 2; }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(u, 2)); geo.setIndex(ix); geo.computeVertexNormals(); return geo; };
    [1, -1].forEach(s => { const m = new THREE.Mesh(wallGeo(s), wallM); m.castShadow = m.receiveShadow = true; g.add(m); });
    // tyre stacks on the outside of big corners
    const tyreG = [], tg = new THREE.TorusGeometry(.38, .2, 6, 10).rotateX(Math.PI / 2);
    for (let i = 0; i < N; i += 3) { if (this.runoff[i] < 18) continue; const side = this.K[i] > 0 ? 1 : -1, d = side * (this.wall(i) - .45); for (let h = 0; h < 3; h++) tyreG.push(tg.clone().translate(this.X[i] + this.nx(i) * d, .2 + h * .38, this.Z[i] + this.nz(i) * d)); }
    if (tyreG.length) { const t = new THREE.Mesh(mergeGeometries(tyreG), new THREE.MeshStandardMaterial({ color: '#1b1c1e', roughness: .9 })); t.castShadow = true; g.add(t); }
    // start/finish line + grid boxes
    const sf = canvasTex(256, 32, (c, w, h) => { for (let x = 0; x < 32; x++) for (let y = 0; y < 4; y++) { c.fillStyle = (x + y) % 2 ? '#111' : '#f2f2f2'; c.fillRect(x * 8, y * 8, 8, 8); } });
    const sfm = new THREE.Mesh(new THREE.PlaneGeometry(W, 2), new THREE.MeshStandardMaterial({ map: sf, roughness: .7 })); sfm.rotation.x = -Math.PI / 2; sfm.rotation.z = Math.atan2(-this.TZ[0], this.TX[0]) + Math.PI / 2; sfm.position.set(this.X[0], .06, this.Z[0]); g.add(sfm);
    const grid = []; for (let k = 0; k < 10; k++) { const s = this.L - 12 - k * 9, lat = k % 2 ? -3 : 3, o = this.pos(s, lat, {}); const b = new THREE.PlaneGeometry(2.4, .25).rotateX(-Math.PI / 2).rotateY(Math.atan2(-o.tz, o.tx) + Math.PI / 2); b.translate(o.x + o.tx * 2.5, .06, o.z + o.tz * 2.5); grid.push(b); }
    g.add(new THREE.Mesh(mergeGeometries(grid), white));
    // gantry with start lights
    const o0 = this.pos(6, 0, {}), ang = Math.atan2(o0.tx, o0.tz), gant = new THREE.Group(); gant.position.set(o0.x, 0, o0.z); gant.rotation.y = ang;
    const steel = new THREE.MeshStandardMaterial({ color: '#2a2d33', roughness: .4, metalness: .7 });
    [-1, 1].forEach(s => { const p = new THREE.Mesh(new THREE.BoxGeometry(.6, 8, .6), steel); p.position.set(s * (W / 2 + 2), 4, 0); p.castShadow = true; gant.add(p); });
    const beam = new THREE.Mesh(new THREE.BoxGeometry(W + 5, 1.6, .8), steel); beam.position.y = 7.4; gant.add(beam);
    const lights = []; for (let k = 0; k < 5; k++) { const box = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.1, .3), new THREE.MeshStandardMaterial({ color: '#111' })); box.position.set((k - 2) * 1.5, 7.4, -.5); gant.add(box);
      const lm = new THREE.MeshStandardMaterial({ color: '#300', emissive: '#ff1a1a', emissiveIntensity: 0 }); [-.25, .25].forEach(y => { const l = new THREE.Mesh(new THREE.CircleGeometry(.22, 16), lm); l.position.set((k - 2) * 1.5, 7.4 + y, -.66); l.rotation.y = Math.PI; gant.add(l); }); lights.push(lm); }
    const banner = new THREE.Mesh(new THREE.PlaneGeometry(W + 4, 1.5), new THREE.MeshStandardMaterial({ map: canvasTex(512, 48, (c, w, h) => { c.fillStyle = '#b8f36b'; c.fillRect(0, 0, w, h); c.fillStyle = '#0c0d0c'; c.font = '900 34px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('JK GRAND PRIX', w / 2, h / 2 + 2); }), side: THREE.DoubleSide }));
    banner.position.set(0, 9.2, 0); gant.add(banner); g.add(gant); this.lights = lights;
    // pit building + grandstands along the main straight
    const crowdT = canvasTex(512, 128, (c, w, h) => { c.fillStyle = '#2a2c30'; c.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 8) { c.fillStyle = 'rgba(255,255,255,.06)'; c.fillRect(0, y, w, 1); for (let x = 0; x < w; x += 5) { c.fillStyle = `hsl(${R() * 360},${50 + R() * 40}%,${40 + R() * 40}%)`; c.fillRect(x + R() * 2, y + 2 + R() * 2, 3, 4); } } }, [6, 1]);
    const standM = new THREE.MeshStandardMaterial({ map: crowdT, roughness: .9 }), roofM = new THREE.MeshStandardMaterial({ color: '#d8dade', roughness: .5, metalness: .4 });
    const stand = (s0, s1, side, dist) => { const a = this.pos(s0, side * dist, {}), b = this.pos(s1, side * dist, {}), len = Math.hypot(b.x - a.x, b.z - a.z), mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2, rot = Math.atan2(b.x - a.x, b.z - a.z);
      const grp = new THREE.Group(); grp.position.set(mx, 0, mz); grp.rotation.y = rot;
      for (let r = 0; r < 6; r++) { const step = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1, len), standM); step.position.set(side * (r * 2.2), r * 1.1 + .5, 0); step.castShadow = step.receiveShadow = true; grp.add(step); }
      const roof = new THREE.Mesh(new THREE.BoxGeometry(15, .4, len + 2), roofM); roof.position.set(side * 5.5, 10, 0); roof.rotation.z = side * .08; roof.castShadow = true; grp.add(roof);
      for (let k = -1; k <= 1; k++) { const col = new THREE.Mesh(new THREE.CylinderGeometry(.25, .25, 10, 8), roofM); col.position.set(side * 12, 5, k * len * .4); grp.add(col); }
      g.add(grp); };
    stand(80, 330, -1, W / 2 + 13); stand(380, 620, -1, W / 2 + 13);
    const pitM = new THREE.MeshStandardMaterial({ color: '#e8e9ec', roughness: .5, metalness: .2 }), pa = this.pos(60, W / 2 + 26, {}), pb = this.pos(640, W / 2 + 26, {});
    const pit = new THREE.Mesh(new THREE.BoxGeometry(14, 9, Math.hypot(pb.x - pa.x, pb.z - pa.z)), pitM); pit.position.set((pa.x + pb.x) / 2, 4.5, (pa.z + pb.z) / 2); pit.rotation.y = Math.atan2(pb.x - pa.x, pb.z - pa.z); pit.castShadow = pit.receiveShadow = true; g.add(pit);
    const glass = new THREE.Mesh(new THREE.BoxGeometry(14.2, 2.2, pit.geometry.parameters.depth + .2), new THREE.MeshStandardMaterial({ color: '#203040', roughness: .1, metalness: .8, emissive: T.lamps ? '#4a6a90' : '#000', emissiveIntensity: .6 })); glass.position.copy(pit.position).setY(7); glass.rotation.copy(pit.rotation); g.add(glass);
    // trees (instanced) away from the circuit
    const trunkG = new THREE.CylinderGeometry(.25, .35, 3, 6).translate(0, 1.5, 0), crownG = this.def.time === 'day' ? new THREE.ConeGeometry(2.4, 7, 7).translate(0, 6, 0) : new THREE.IcosahedronGeometry(2.8, 0).translate(0, 4.5, 0);
    const keep = []; for (let s = 0; s < 760; s += 20) [-1, 1].forEach(side => { const o = this.pos(s, side * (W / 2 + 30), {}); keep.push([o.x, o.z]); });
    const spots = []; for (let t = 0; t < 2600 && spots.length < 900; t++) { const x = -900 + R() * 2700, z = -700 + R() * 2600; let ok = !keep.some(([a, b]) => (x - a) ** 2 + (z - b) ** 2 < 40 * 40); for (let i = 0; ok && i < N; i += 6) { if ((x - this.X[i]) ** 2 + (z - this.Z[i]) ** 2 < (this.wall(i) + 14) ** 2) { ok = false; break; } } if (ok) spots.push([x, z, .7 + R() * .7]); }
    const inst = (geo, mat) => { const im = new THREE.InstancedMesh(geo, mat, spots.length), o = new THREE.Object3D(); spots.forEach(([x, z, s], k) => { o.position.set(x, 0, z); o.scale.setScalar(s); o.rotation.y = s * 9; o.updateMatrix(); im.setMatrixAt(k, o.matrix); }); im.castShadow = true; g.add(im); };
    inst(trunkG, new THREE.MeshStandardMaterial({ color: '#5b4330', roughness: .95 })); inst(crownG, new THREE.MeshStandardMaterial({ color: this.def.time === 'sunset' ? '#5e6b2c' : '#2f5d2c', roughness: .9, flatShading: true }));
    // distant hills
    const hills = []; for (let k = 0; k < 40; k++) { const a = k / 40 * Math.PI * 2, r = 2600 + R() * 600, h = 120 + R() * 380; hills.push(new THREE.ConeGeometry(300 + R() * 300, h, 6).translate(400 + Math.cos(a) * r, h / 2 - 20, 500 + Math.sin(a) * r)); }
    g.add(new THREE.Mesh(mergeGeometries(hills), new THREE.MeshStandardMaterial({ color: this.def.time === 'sunset' ? '#9a6a4c' : this.def.time === 'night' ? '#141c2c' : '#5f7a8a', roughness: 1, flatShading: true, fog: true })));
    // floodlights / street lamps
    if (T.lamps) {
      const lampSpots = []; for (let i = 0; i < N; i += 24) { const side = (i / 24) % 2 ? 1 : -1, d = side * (this.wall(i) + 1.2); lampSpots.push([this.X[i] + this.nx(i) * d, this.Z[i] + this.nz(i) * d, Math.atan2(-this.nx(i) * side, -this.nz(i) * side)]); }
      const poleG = new THREE.CylinderGeometry(.12, .16, 12, 6).translate(0, 6, 0), headG = new THREE.BoxGeometry(.6, .3, 2.6).translate(0, 12, 1.1);
      const mk = (geo, mat) => { const im = new THREE.InstancedMesh(geo, mat, lampSpots.length), o = new THREE.Object3D(); lampSpots.forEach(([x, z, a], k) => { o.position.set(x, 0, z); o.rotation.y = a; o.updateMatrix(); im.setMatrixAt(k, o.matrix); }); g.add(im); };
      mk(poleG, steel); mk(headG, new THREE.MeshStandardMaterial({ color: '#fff', emissive: '#fff4d8', emissiveIntensity: 3 * T.lamps }));
      const poolT = canvasTex(128, 128, (c, w) => { const gr = c.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.5, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, w, w); });
      const pool = new THREE.InstancedMesh(new THREE.PlaneGeometry(26, 26).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: poolT, color: '#ffe6b8', transparent: true, opacity: .32 * T.lamps, blending: THREE.AdditiveBlending, depthWrite: false }), lampSpots.length), o = new THREE.Object3D();
      lampSpots.forEach(([x, z, a], k) => { o.position.set(x + Math.sin(a) * 4, .1, z + Math.cos(a) * 4); o.updateMatrix(); pool.setMatrixAt(k, o.matrix); }); g.add(pool);
    }
    // sky
    const sky = new THREE.Mesh(new THREE.SphereGeometry(5000, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { a: { value: new THREE.Color(T.sky[0]) }, b: { value: new THREE.Color(T.sky[1]) }, c: { value: new THREE.Color(T.sky[2]) }, sun: { value: new THREE.Vector3(...T.dir).normalize() }, night: { value: this.def.time === 'night' ? 1 : 0 } },
      vertexShader: 'varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
      fragmentShader: `uniform vec3 a,b,c,sun; uniform float night; varying vec3 vP; float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
        void main(){ float y=max(vP.y,0.); vec3 col=mix(c,b,smoothstep(0.,.25,y)); col=mix(col,a,smoothstep(.2,.9,y)); float s=max(dot(vP,sun),0.); col+=vec3(1.,.85,.6)*(pow(s,700.)*3.+pow(s,10.)*.3)*(1.-night*.8);
          if(night>.5){ vec3 q=floor(vP*400.); col+=vec3(step(.997,h(q)))*smoothstep(.05,.3,y); } gl_FragColor=vec4(col,1.); }` }));
    sky.renderOrder = -1; g.add(sky); g.userData.sky = sky;
    return g;
  }
  minimap(size = 220) {
    const c = document.createElement('canvas'); c.width = c.height = size; const gx = c.getContext('2d');
    let x0 = 1e9, x1 = -1e9, z0 = 1e9, z1 = -1e9; for (let i = 0; i < this.N; i++) { x0 = Math.min(x0, this.X[i]); x1 = Math.max(x1, this.X[i]); z0 = Math.min(z0, this.Z[i]); z1 = Math.max(z1, this.Z[i]); }
    const sc = (size - 30) / Math.max(x1 - x0, z1 - z0), ox = (size - (x1 - x0) * sc) / 2, oz = (size - (z1 - z0) * sc) / 2; this.mm = { sc, ox, oz, x0, z0 };
    const P = i => [ox + (this.X[i] - x0) * sc, oz + (this.Z[i] - z0) * sc];
    gx.lineJoin = 'round'; gx.lineCap = 'round';
    [[10, 'rgba(0,0,0,.6)'], [6, '#e8e8e8']].forEach(([w, col]) => { gx.strokeStyle = col; gx.lineWidth = w; gx.beginPath(); for (let i = 0; i <= this.N; i += 2) { const [x, y] = P(i % this.N); i ? gx.lineTo(x, y) : gx.moveTo(x, y); } gx.closePath(); gx.stroke(); });
    gx.strokeStyle = '#2ee66b'; gx.lineWidth = 6; for (let i = 0; i < this.N; i += 2) { if (!this.drs[i]) continue; const [x, y] = P(i), [x2, y2] = P((i + 2) % this.N); gx.beginPath(); gx.moveTo(x, y); gx.lineTo(x2, y2); gx.stroke(); }
    const [sx, sy] = P(0); gx.fillStyle = '#fff'; gx.fillRect(sx - 2, sy - 7, 4, 14);
    return c;
  }
  toMap(x, z) { const m = this.mm; return [m.ox + (x - m.x0) * m.sc, m.oz + (z - m.z0) * m.sc]; }
}
