// Procedural car bodies, wheels and parts.
import * as THREE from 'three';

export const BODIES = {
  coupe: { name: 'Coupe', blurb: 'Balanced sports car. Grippy and quick.', len: 4.4, w: 1.86, fx: 1.38, rx: -1.32, wr: 0.34, c: 0.26,
    top: [[-2.2, 0.32], [-2.24, 0.62], [-2.15, 0.86], [-1.5, 0.92], [-1.05, 0.9], [0.95, 0.86], [1.7, 0.74], [2.12, 0.62], [2.22, 0.42]],
    cab: [[-1.45, 0.9], [-0.95, 1.28], [0.1, 1.3], [0.98, 0.86]], stats: { top: 60, acc: 13.5, grip: 9.5, steer: 2.45, off: .55 } },
  muscle: { name: 'Muscle', blurb: 'Huge V8 shove. Loves to slide.', len: 4.8, w: 1.95, fx: 1.55, rx: -1.45, wr: 0.36, c: 0.28,
    top: [[-2.4, 0.36], [-2.42, 0.82], [-2.2, 0.94], [-1.3, 0.96], [-0.8, 0.94], [1.1, 0.94], [2.3, 0.9], [2.42, 0.78], [2.42, 0.4]],
    cab: [[-1.35, 0.94], [-0.85, 1.34], [0.3, 1.36], [1.0, 0.94]], stats: { top: 64, acc: 15.5, grip: 7.6, steer: 2.15, off: .55 } },
  hatch: { name: 'Rally Hatch', blurb: 'Short and nimble. Shrugs off grass.', len: 3.9, w: 1.8, fx: 1.25, rx: -1.2, wr: 0.34, c: 0.32,
    top: [[-1.95, 0.36], [-1.98, 0.95], [-1.85, 1.02], [-1.2, 1.0], [0.75, 0.94], [1.6, 0.84], [1.92, 0.7], [1.96, 0.42]],
    cab: [[-1.85, 1.0], [-1.7, 1.48], [0.15, 1.5], [0.95, 0.93]], stats: { top: 52, acc: 12.8, grip: 11, steer: 2.85, off: .88 } },
  truck: { name: 'Pickup', blurb: 'Lifted 4x4. Goes anywhere, lands anything.', len: 5.0, w: 2.0, fx: 1.7, rx: -1.5, wr: 0.46, c: 0.5,
    top: [[-2.5, 0.55], [-2.52, 1.2], [-0.5, 1.2], [-0.4, 1.24], [1.3, 1.22], [2.35, 1.14], [2.52, 0.96], [2.52, 0.6]],
    cab: [[-0.45, 1.22], [-0.38, 1.85], [0.65, 1.87], [1.25, 1.22]], bed: [-2.42, -0.5], stats: { top: 48, acc: 11.5, grip: 7.8, steer: 2.0, off: 1 } },
  hyper: { name: 'Hypercar', blurb: 'Wedge-shaped missile. Highest top speed.', len: 4.6, w: 2.0, fx: 1.45, rx: -1.4, wr: 0.35, c: 0.2,
    top: [[-2.3, 0.3], [-2.32, 0.7], [-2.1, 0.82], [-1.0, 0.8], [0.6, 0.72], [1.6, 0.56], [2.25, 0.42], [2.32, 0.3]],
    cab: [[-1.2, 0.8], [-0.65, 1.12], [0.35, 1.14], [1.1, 0.68]], stats: { top: 72, acc: 16.5, grip: 10, steer: 2.35, off: .42 } },
};
export const PAINTS = ['#e01b2e', '#ff6a13', '#ffd21f', '#b8f36b', '#16b85a', '#14b8c4', '#1f6fff', '#6b2bd8', '#ff3fa4', '#f4f4f2', '#9aa0a8', '#16171a'];
export const OPTIONS = {
  finish: [['gloss', 'Gloss'], ['metal', 'Metallic'], ['matte', 'Matte'], ['chrome', 'Chrome'], ['pearl', 'Pearl']],
  roof: [['body', 'Body color'], ['black', 'Black'], ['white', 'White'], ['carbon', 'Carbon']],
  wheel: [['sport', '5-Spoke'], ['mesh', 'Mesh'], ['dish', 'Deep Dish'], ['turbine', 'Turbine'], ['offroad', 'Off-road']],
  rim: [['#c9ced6', 'Silver'], ['#1a1a1d', 'Black'], ['#d8b24a', 'Gold'], ['#f4f4f2', 'White'], ['#e01b2e', 'Red'], ['#b8f36b', 'Lime']],
  caliper: [['#e01b2e', 'Red'], ['#ffd21f', 'Yellow'], ['#1f6fff', 'Blue'], ['#b8f36b', 'Lime'], ['#26272b', 'Black']],
  spoiler: [['none', 'None'], ['lip', 'Ducktail'], ['wing', 'GT Wing']],
  hood: [['stock', 'Stock'], ['scoop', 'Scoop'], ['vents', 'Vents']],
  stripes: [['none', 'None'], ['racing', 'Racing'], ['side', 'Side']],
  stripeColor: [['#f4f4f2', 'White'], ['#16171a', 'Black'], ['#ffd21f', 'Yellow'], ['#e01b2e', 'Red'], ['#b8f36b', 'Lime'], ['#1f6fff', 'Blue']],
  glow: [['none', 'Off'], ['#2de2ff', 'Cyan'], ['#ff3fa4', 'Pink'], ['#b8f36b', 'Lime'], ['#8b5cff', 'Purple'], ['#ff6a13', 'Orange']],
  lights: [['#fff6e0', 'Warm'], ['#dff0ff', 'Xenon'], ['#7fb6ff', 'Blue'], ['#ffd257', 'Yellow']],
  tint: [['light', 'Light'], ['dark', 'Dark'], ['limo', 'Limo']],
  height: [['low', 'Slammed'], ['stock', 'Stock'], ['lift', 'Lifted']],
  engine: [['stock', 'Stock'], ['street', 'Street'], ['race', 'Race'], ['rocket', 'Rocket']],
  tires: [['street', 'Street'], ['sport', 'Sport'], ['drift', 'Drift'], ['offroad', 'All-terrain']],
};
export const DEFAULT_CAR = { body: 'coupe', paint: '#e01b2e', finish: 'metal', roof: 'body', wheel: 'sport', rim: '#c9ced6', caliper: '#e01b2e', spoiler: 'lip', hood: 'stock', stripes: 'racing', stripeColor: '#f4f4f2', number: 7, glow: 'none', lights: '#fff6e0', tint: 'dark', height: 'stock', engine: 'street', tires: 'sport', name: 'My Ride' };

export function carStats(cfg) {
  const b = BODIES[cfg.body] || BODIES.coupe, s = { ...b.stats };
  const eng = { stock: [1, 1], street: [1.06, 1.1], race: [1.13, 1.22], rocket: [1.22, 1.38] }[cfg.engine] || [1, 1];
  s.top *= eng[0]; s.acc *= eng[1];
  const tire = { street: [1, 1, 1], sport: [1.12, .95, .9], drift: [.82, 1, 1.25], offroad: [.92, 1.45, 1] }[cfg.tires] || [1, 1, 1];
  s.grip *= tire[0]; s.off = Math.min(1, s.off * tire[1]); s.slide = tire[2];
  if (cfg.spoiler === 'wing') s.grip *= 1.06;
  if (cfg.height === 'low') { s.grip *= 1.05; s.off *= .85; } else if (cfg.height === 'lift') { s.grip *= .95; s.off = Math.min(1, s.off * 1.2); }
  return s;
}
export function statBars(cfg) { const s = carStats(cfg); return { Speed: (s.top - 40) / 50, Acceleration: (s.acc - 9) / 13, Handling: (s.grip * s.steer - 14) / 20, 'Off-road': s.off }; }

/* ---------- materials */
let ENV = null; export function setEnv(t) { ENV = t; }
function paintMat(color, finish) {
  const c = new THREE.Color(color);
  const base = { color: c, envMapIntensity: 1.1 };
  if (finish === 'matte') return new THREE.MeshStandardMaterial({ ...base, roughness: .78, metalness: .05 });
  if (finish === 'chrome') return new THREE.MeshPhysicalMaterial({ ...base, color: c.clone().lerp(new THREE.Color('#ffffff'), .35), roughness: .06, metalness: 1, clearcoat: 1, clearcoatRoughness: .02, envMapIntensity: 1.6 });
  if (finish === 'metal') return new THREE.MeshPhysicalMaterial({ ...base, roughness: .32, metalness: .65, clearcoat: 1, clearcoatRoughness: .08 });
  if (finish === 'pearl') return new THREE.MeshPhysicalMaterial({ ...base, roughness: .25, metalness: .3, clearcoat: 1, clearcoatRoughness: .05, iridescence: .9, iridescenceIOR: 1.5, sheen: .5, sheenColor: new THREE.Color('#ffffff') });
  return new THREE.MeshPhysicalMaterial({ ...base, roughness: .22, metalness: .08, clearcoat: 1, clearcoatRoughness: .04 });
}
let carbonTex = null;
function carbon() { if (carbonTex) return carbonTex; const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); g.fillStyle = '#1b1c1f'; g.fillRect(0, 0, 64, 64);
  for (let y = 0; y < 64; y += 8) for (let x = 0; x < 64; x += 8) { g.fillStyle = (x + y) / 8 % 2 ? '#2c2e33' : '#141518'; g.fillRect(x, y, 8, 4); g.fillStyle = (x + y) / 8 % 2 ? '#141518' : '#2c2e33'; g.fillRect(x, y + 4, 8, 4); }
  carbonTex = new THREE.CanvasTexture(c); carbonTex.wrapS = carbonTex.wrapT = THREE.RepeatWrapping; carbonTex.repeat.set(6, 3); carbonTex.colorSpace = THREE.SRGBColorSpace; return carbonTex; }
function numberTex(n, col) { const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.fillStyle = '#f4f4f2'; g.beginPath(); g.arc(64, 64, 60, 0, 7); g.fill(); g.lineWidth = 8; g.strokeStyle = col; g.stroke();
  g.fillStyle = '#111'; g.font = '900 72px "Space Grotesk",Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(String(n), 64, 70); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
const M = {
  black: () => new THREE.MeshStandardMaterial({ color: '#141518', roughness: .55, metalness: .2 }),
  trim: () => new THREE.MeshStandardMaterial({ color: '#0b0b0d', roughness: .4, metalness: .5 }),
  chrome: () => new THREE.MeshStandardMaterial({ color: '#e8eaee', roughness: .08, metalness: 1 }),
  tire: () => new THREE.MeshStandardMaterial({ color: '#17181a', roughness: .92 }),
};

function profileShape(b) {
  const s = new THREE.Shape(), [x0] = b.top[0], [x1] = b.top[b.top.length - 1], c = b.c, ar = b.wr + 0.09;
  s.moveTo(x0, c); b.top.forEach(([x, y]) => s.lineTo(x, y)); s.lineTo(x1, c);
  [b.fx, b.rx].forEach(wx => { const dy = Math.min(ar - 0.01, Math.max(0, c - b.wr)), a0 = Math.asin(dy / ar), dx = ar * Math.cos(a0); s.lineTo(wx + dx, c); s.absarc(wx, b.wr, ar, a0, Math.PI - a0, false); s.lineTo(wx - dx, c); });
  s.lineTo(x0, c); return s;
}
function extrude(shape, depth, bevel, mat) { const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 4, curveSegments: 18 }); g.translate(0, 0, -depth / 2); g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.castShadow = true; m.receiveShadow = true; return m; }
function poly(pts) { const s = new THREE.Shape(); s.moveTo(...pts[0]); pts.slice(1).forEach(p => s.lineTo(...p)); s.closePath(); return s; }
const topY = (b, x) => { const t = b.top; for (let k = 0; k < t.length - 1; k++) { const [a, ya] = t[k], [c, yc] = t[k + 1]; if (x >= a && x <= c && c > a) return ya + (yc - ya) * (x - a) / (c - a); } return t[0][1]; };

function buildWheel(cfg, b) {
  const g = new THREE.Group(), r = b.wr, tw = cfg.body === 'truck' ? .34 : .27, rimR = r * (cfg.wheel === 'offroad' ? .62 : .7);
  const pts = []; const n = 10; pts.push(new THREE.Vector2(rimR * .95, -tw / 2));
  for (let k = 0; k <= n; k++) { const a = -Math.PI / 2 + Math.PI * k / n; pts.push(new THREE.Vector2(r - .06 + Math.cos(a) * .06, Math.sin(a) * (tw / 2))); }
  pts.push(new THREE.Vector2(rimR * .95, tw / 2));
  const tire = new THREE.Mesh(new THREE.LatheGeometry(pts, 36), M.tire()); tire.rotation.x = Math.PI / 2; tire.castShadow = true; g.add(tire);
  if (cfg.wheel === 'offroad') for (let k = 0; k < 18; k++) { const lug = new THREE.Mesh(new THREE.BoxGeometry(.07, .05, tw * .9), M.tire()); const a = k / 18 * Math.PI * 2; lug.position.set(Math.cos(a) * (r - .01), Math.sin(a) * (r - .01), 0); lug.rotation.z = a; g.add(lug); }
  const rimM = new THREE.MeshStandardMaterial({ color: cfg.rim, roughness: .25, metalness: .9, envMapIntensity: 1.2 });
  const face = new THREE.Group(); face.position.z = tw / 2 - .02; g.add(face);
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(rimR, rimR, tw * .9, 28, 1, true), new THREE.MeshStandardMaterial({ color: '#3a3c42', roughness: .4, metalness: .8, side: THREE.DoubleSide })); barrel.rotation.x = Math.PI / 2; barrel.position.z = -tw / 2 + .02; face.add(barrel);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(rimR, .022, 8, 36), rimM); face.add(lip);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(rimR * .2, rimR * .24, .06, 16), rimM); hub.rotation.x = Math.PI / 2; face.add(hub);
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(rimR * .1, rimR * .1, .065, 12), M.chrome()); cap.rotation.x = Math.PI / 2; face.add(cap);
  const spoke = (len, w, a, depth = .04, tilt = 0) => { const s = new THREE.Mesh(new THREE.BoxGeometry(len, w, depth), rimM); s.position.set(Math.cos(a) * len / 2 + Math.cos(a) * rimR * .12, Math.sin(a) * len / 2 + Math.sin(a) * rimR * .12, -.01); s.rotation.z = a; s.rotation.x = tilt; face.add(s); };
  const L = rimR * .86;
  if (cfg.wheel === 'sport') for (let k = 0; k < 5; k++) { spoke(L, rimR * .22, k / 5 * Math.PI * 2); }
  else if (cfg.wheel === 'mesh') for (let k = 0; k < 10; k++) { spoke(L, rimR * .07, k / 10 * Math.PI * 2 + .18); spoke(L, rimR * .07, k / 10 * Math.PI * 2 - .18); }
  else if (cfg.wheel === 'turbine') for (let k = 0; k < 14; k++) spoke(L, rimR * .13, k / 14 * Math.PI * 2, .03, .5);
  else { const disc = new THREE.Mesh(new THREE.CylinderGeometry(rimR * .95, rimR * .95, .03, 32), rimM); disc.rotation.x = Math.PI / 2; disc.position.z = -.03; face.add(disc);
    const holes = cfg.wheel === 'offroad' ? 6 : 8; for (let k = 0; k < holes; k++) { const h = new THREE.Mesh(new THREE.CylinderGeometry(rimR * .14, rimR * .14, .035, 14), M.trim()); h.rotation.x = Math.PI / 2; const a = k / holes * Math.PI * 2; h.position.set(Math.cos(a) * rimR * .6, Math.sin(a) * rimR * .6, -.02); face.add(h); }
    if (cfg.wheel === 'offroad') { const ring = new THREE.Mesh(new THREE.TorusGeometry(rimR * .92, .04, 6, 24), M.trim()); face.add(ring); for (let k = 0; k < 16; k++) { const bolt = new THREE.Mesh(new THREE.SphereGeometry(.018, 6, 6), M.chrome()); const a = k / 16 * Math.PI * 2; bolt.position.set(Math.cos(a) * rimR * .92, Math.sin(a) * rimR * .92, .03); face.add(bolt); } } }
  for (let k = 0; k < 5; k++) { const nut = new THREE.Mesh(new THREE.CylinderGeometry(.02, .02, .05, 6), M.chrome()); nut.rotation.x = Math.PI / 2; const a = k / 5 * Math.PI * 2 + .3; nut.position.set(Math.cos(a) * rimR * .15, Math.sin(a) * rimR * .15, .02); face.add(nut); }
  const spin = new THREE.Group(); spin.add(g);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(rimR * .78, rimR * .78, .03, 24), new THREE.MeshStandardMaterial({ color: '#777b82', roughness: .35, metalness: .9 })); disc.rotation.x = Math.PI / 2; disc.position.z = tw / 2 - .12;
  const cal = new THREE.Mesh(new THREE.BoxGeometry(rimR * .5, rimR * .32, .09), new THREE.MeshStandardMaterial({ color: cfg.caliper, roughness: .35, metalness: .3 })); cal.position.set(rimR * .45, rimR * .45, tw / 2 - .11); cal.rotation.z = .8;
  const holder = new THREE.Group(); holder.add(spin, disc, cal); holder.userData.spin = spin; return holder;
}

export function buildCar(cfg) {
  const b = BODIES[cfg.body] || BODIES.coupe, car = new THREE.Group(), body = new THREE.Group(); car.add(body);
  const paint = paintMat(cfg.paint, cfg.finish), bev = .11, W = b.w;
  const lift = { low: -.07, stock: 0, lift: .16 }[cfg.height] || 0; body.position.y = lift;
  const shell = extrude(profileShape(b), W - 2 * bev, bev, paint); body.add(shell);
  // cabin glass + roof
  const tint = { light: ['#3b4a57', .55], dark: ['#11161c', .8], limo: ['#030405', .96] }[cfg.tint] || ['#11161c', .8];
  const glass = new THREE.MeshPhysicalMaterial({ color: tint[0], roughness: .05, metalness: .2, transmission: 0, transparent: true, opacity: tint[1], clearcoat: 1, envMapIntensity: 1.5 });
  const cw = W * .8; const cab = extrude(poly(b.cab), cw - .1, .05, glass); body.add(cab);
  const [p0, p1, p2, p3] = b.cab;
  const roofMat = cfg.roof === 'body' ? paint : cfg.roof === 'carbon' ? new THREE.MeshPhysicalMaterial({ map: carbon(), roughness: .3, metalness: .4, clearcoat: 1 }) : paintMat(cfg.roof === 'black' ? '#141518' : '#f2f2f0', 'gloss');
  const roof = extrude(poly([[p1[0] - .04, p1[1] - .06], [p1[0] - .02, p1[1] + .01], [p2[0] + .02, p2[1] + .01], [p2[0] + .05, p2[1] - .06]]), cw - .02, .04, roofMat); body.add(roof);
  const mid = (p1[0] + p2[0]) / 2 - .1; const bp = extrude(poly([[mid - .06, p0[1]], [mid - .06, p1[1]], [mid + .06, p1[1]], [mid + .06, p0[1]]]), cw - .02, .02, paint); body.add(bp);
  // A pillars
  [[p0, p1], [p3, p2]].forEach(([a, c]) => { const v = new THREE.Vector2(c[0] - a[0], c[1] - a[1]), n = new THREE.Vector2(-v.y, v.x).normalize().multiplyScalar(.035); const pl = extrude(poly([[a[0] - n.x, a[1] - n.y], [c[0] - n.x, c[1] - n.y], [c[0] + n.x, c[1] + n.y], [a[0] + n.x, a[1] + n.y]]), cw - .04, .015, paint); [-1, 1].forEach(s => { const q = pl.clone(); q.scale.z = .04 / (cw - .04); q.position.z = s * (cw / 2 - .03); body.add(q); }); });
  if (b.bed) { const bed = new THREE.Mesh(new THREE.BoxGeometry(b.bed[1] - b.bed[0], .05, W - .3), M.black()); bed.position.set((b.bed[0] + b.bed[1]) / 2, topY(b, b.bed[0] + .1) + .06, 0); body.add(bed); }
  const xF = b.top[b.top.length - 1][0], xR = b.top[0][0];
  // lights
  const hl = new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: cfg.lights, emissiveIntensity: 2.2, roughness: .1 });
  const tl = new THREE.MeshStandardMaterial({ color: '#550008', emissive: '#ff1026', emissiveIntensity: 1.6, roughness: .2 });
  const yH = topY(b, xF - .2) - .14, yT = topY(b, xR + .15) - .13;
  [-1, 1].forEach(s => {
    const h = new THREE.Mesh(new THREE.BoxGeometry(.06, .1, .42), hl); h.position.set(xF + bev - .01, yH, s * (W / 2 - .32)); body.add(h);
    const t = new THREE.Mesh(new THREE.BoxGeometry(.06, .1, .5), tl); t.position.set(xR - bev + .01, yT, s * (W / 2 - .34)); body.add(t);
    const m = new THREE.Mesh(new THREE.BoxGeometry(.18, .08, .1), paint); m.position.set(p3[0] - .12, p0[1] + .1, s * (cw / 2 + .06)); body.add(m); // mirrors
  });
  car.userData.tail = tl; car.userData.head = hl;
  const grille = new THREE.Mesh(new THREE.BoxGeometry(.05, .16, W * .45), M.trim()); grille.position.set(xF + bev - .005, b.c + .16, 0); body.add(grille);
  const diff = new THREE.Mesh(new THREE.BoxGeometry(.05, .12, W * .7), M.trim()); diff.position.set(xR - bev + .005, b.c + .1, 0); body.add(diff);
  const pipeM = M.chrome(); [-1, 1].forEach(s => { const p = new THREE.Mesh(new THREE.CylinderGeometry(.05, .055, .22, 12, 1, true), pipeM); p.rotation.z = Math.PI / 2; p.position.set(xR - bev - .03, b.c + .06, s * .42); body.add(p); });
  car.userData.exhaust = [new THREE.Vector3(xR - .25, b.c + .06 + lift, -.42), new THREE.Vector3(xR - .25, b.c + .06 + lift, .42)];
  // hood
  if (cfg.hood === 'scoop') { const x = (p3[0] + xF) / 2 - .1, y = topY(b, x) + bev; const sc = extrude(poly([[-.35, 0], [-.3, .14], [.2, .1], [.35, 0]]), .5, .03, paint); sc.position.set(x, y - .02, 0); body.add(sc); const mouth = new THREE.Mesh(new THREE.BoxGeometry(.02, .09, .44), M.trim()); mouth.position.set(x - .33, y + .07, 0); body.add(mouth); }
  if (cfg.hood === 'vents') { const x = (p3[0] + xF) / 2; for (let k = 0; k < 4; k++) [-1, 1].forEach(s => { const v = new THREE.Mesh(new THREE.BoxGeometry(.05, .02, .32), M.trim()); v.position.set(x - .2 + k * .12, topY(b, x) + bev + .005, s * .38); v.rotation.z = -Math.atan2(topY(b, x + .1) - topY(b, x - .1), .2); body.add(v); }); }
  // spoiler
  if (cfg.spoiler === 'lip') { const y = topY(b, xR + .12) + bev; const lp = extrude(poly([[0, 0], [.02, .1], [.22, .02], [.22, 0]]), W - .3, .02, paint); lp.position.set(xR + .02, y - .01, 0); body.add(lp); }
  if (cfg.spoiler === 'wing') { const y = topY(b, xR + .35) + bev; const wing = extrude(poly([[-.28, 0], [-.25, .05], [.18, .03], [.2, -.01]]), W - .1, .02, cfg.roof === 'carbon' ? roofMat : paint); wing.position.set(xR + .3, y + .38, 0); body.add(wing);
    [-1, 1].forEach(s => { const st = new THREE.Mesh(new THREE.BoxGeometry(.1, .4, .04), M.black()); st.position.set(xR + .32, y + .19, s * (W / 2 - .45)); body.add(st); const ep = new THREE.Mesh(new THREE.BoxGeometry(.5, .2, .025), M.black()); ep.position.set(xR + .28, y + .4, s * (W / 2 - .04)); body.add(ep); }); }
  // stripes
  const sc = cfg.stripeColor, stripeM = new THREE.MeshPhysicalMaterial({ color: sc, roughness: .25, clearcoat: 1, polygonOffset: true, polygonOffsetFactor: -2 });
  if (cfg.stripes === 'racing') {
    const xs = []; for (let x = xR + .02; x <= xF - .02; x += .05) xs.push(x);
    const top = xs.map(x => [x, topY(b, x) + bev + .006]), bot = xs.slice().reverse().map(x => [x, topY(b, x) + bev - .02]);
    [-1, 1].forEach(s => { const st = new THREE.Mesh(new THREE.ExtrudeGeometry(poly([...top, ...bot]), { depth: .2, bevelEnabled: false }), stripeM); st.position.z = s * .2 - .1; body.add(st);
      const rf = new THREE.Mesh(new THREE.ExtrudeGeometry(poly([[p1[0] - .02, p1[1] + .02], [p2[0] + .03, p2[1] + .02], [p2[0] + .03, p2[1] + .057], [p1[0] - .02, p1[1] + .057]]), { depth: .2, bevelEnabled: false }), stripeM); rf.position.z = s * .2 - .1; body.add(rf); });
  }
  if (cfg.stripes === 'side') [-1, 1].forEach(s => { const yy = (b.c + topY(b, 0)) / 2 + .06; const st = new THREE.Mesh(new THREE.BoxGeometry(b.len - .5, .07, .01), stripeM); st.position.set(0, yy, s * (W / 2 + .003)); body.add(st); const st2 = st.clone(); st2.scale.y = .45; st2.position.y = yy - .1; body.add(st2); });
  if (cfg.number !== '' && cfg.number != null && cfg.number >= 0) { const nm = new THREE.MeshStandardMaterial({ map: numberTex(cfg.number, cfg.stripeColor), transparent: true, roughness: .3, polygonOffset: true, polygonOffsetFactor: -2 });
    [-1, 1].forEach(s => { const d = new THREE.Mesh(new THREE.CircleGeometry(.24, 28), nm); d.position.set((b.fx + b.rx) / 2 - .1, (b.c + topY(b, 0)) / 2 + .12, s * (W / 2 + .006)); d.rotation.y = s > 0 ? 0 : Math.PI; body.add(d); }); }
  // underglow
  if (cfg.glow !== 'none') { const gm = new THREE.MeshBasicMaterial({ color: cfg.glow, transparent: true, opacity: .55, blending: THREE.AdditiveBlending, depthWrite: false });
    const tex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 4, 32, 32, 32); gr.addColorStop(0, '#fff'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
    gm.alphaMap = tex; const pl = new THREE.Mesh(new THREE.PlaneGeometry(b.len + 1.2, W + 1.4), gm); pl.rotation.x = -Math.PI / 2; pl.position.y = .03; car.add(pl); car.userData.glowPlane = pl;
    const strip = new THREE.Mesh(new THREE.BoxGeometry(b.len - 1, .03, W - .4), new THREE.MeshBasicMaterial({ color: cfg.glow })); strip.position.y = b.c + lift - .03; car.add(strip); }
  // wheels
  const wheels = [];
  [[b.fx, 1, true], [b.fx, -1, true], [b.rx, 1, false], [b.rx, -1, false]].forEach(([x, s, front]) => {
    const w = buildWheel(cfg, b); const holder = new THREE.Group(); holder.position.set(x, b.wr, s * (W / 2 - .12)); if (s < 0) w.rotation.y = Math.PI; holder.add(w); car.add(holder);
    wheels.push({ holder, spin: w.userData.spin, front, side: s });
  });
  const under = new THREE.Mesh(new THREE.BoxGeometry(b.len - .4, .08, W - .3), M.black()); under.position.y = b.c + lift + .02; car.add(under);
  car.userData.wheels = wheels; car.userData.body = body; car.userData.def = b; car.userData.lift = lift;
  car.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  return car;
}
