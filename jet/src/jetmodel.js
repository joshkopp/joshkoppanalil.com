// Procedural fighter jets. Forward is -Z, up is +Y, right is +X.
// Each jet is lofted from superellipse cross-sections, then merged into one mesh per material and cached,
// so a whole aircraft is ~7 draw calls and spawning another one costs almost nothing.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const JETS = {
  raptor: { name: 'F-22 Raptor', blurb: 'Stealthy all-rounder with thrust vectoring.', len: 18.9, span: 6.78, twinTail: true, twinEngine: true, canard: false, hp: 110, agility: 1.08, speed: 1.12, missiles: 8, gun: 1.1, style: 'raptor' },
  viper: { name: 'F-35 Lightning II', blurb: 'Light and twitchy single-engine stealth jet.', len: 15.7, span: 5.35, twinTail: true, twinEngine: false, canard: false, hp: 90, agility: 1.22, speed: 1.0, missiles: 6, gun: 1, style: 'viper' },
  striker: { name: 'Su-57 Felon', blurb: 'Heavy hitter. Tough, loads of missiles.', len: 20.1, span: 7.0, twinTail: true, twinEngine: true, canard: false, hp: 150, agility: .9, speed: 1.0, missiles: 12, gun: 1.25, style: 'striker' },
};
export const PAINTS = {
  gray: ['#9ea5ad', '#737b84', 'Stealth gray', 'blob'], desert: ['#b38f62', '#7a5c3b', 'Desert camo', 'camo'], black: ['#2b2e33', '#1c1e21', 'Night ops', 'two'],
  navy: ['#4a6687', '#30455f', 'Navy blue', 'two'], red: ['#3a3d42', '#8f2a2f', 'Aggressor', 'splinter'],
};

/* ---------------------------------------------------------------- textures */
const texCache = {};
function skinTex(paint) {
  if (texCache[paint]) return texCache[paint];
  const [a, b, , pat] = PAINTS[paint], S = 1024, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d');
  let seed = paint.length * 977 + 13; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.fillStyle = a; g.fillRect(0, 0, S, S);
  if (pat === 'camo') for (let k = 0; k < 40; k++) { g.fillStyle = k % 3 ? b : '#9a7b50'; g.beginPath(); const x = r() * S, y = r() * S; g.moveTo(x, y); for (let q = 0; q < 9; q++) g.quadraticCurveTo(x + (r() - .5) * 260, y + (r() - .5) * 260, x + (r() - .5) * 220, y + (r() - .5) * 220); g.closePath(); g.fill(); }
  if (pat === 'splinter') for (let k = 0; k < 34; k++) { g.fillStyle = k % 2 ? b : '#24262a'; g.beginPath(); const x = r() * S, y = r() * S; g.moveTo(x, y); g.lineTo(x + (r() - .3) * 300, y + (r() - .5) * 120); g.lineTo(x + (r() - .5) * 200, y + (r() - .2) * 260); g.closePath(); g.fill(); }
  if (pat === 'blob') { g.filter = 'blur(10px)'; for (let k = 0; k < 26; k++) { g.fillStyle = b; g.globalAlpha = .55 + r() * .3; g.beginPath(); const x = r() * S, y = r() * S, R = 50 + r() * 120; for (let q = 0; q <= 10; q++) { const an = q / 10 * Math.PI * 2, rr = R * (.6 + r() * .6); g.lineTo(x + Math.cos(an) * rr * 1.4, y + Math.sin(an) * rr); } g.closePath(); g.fill(); } g.filter = 'none'; g.globalAlpha = 1; }
  if (pat === 'two') { const gr = g.createLinearGradient(0, 0, 0, S); gr.addColorStop(0, b); gr.addColorStop(.5, a); gr.addColorStop(1, b); g.globalAlpha = .55; g.fillStyle = gr; g.fillRect(0, 0, S, S); g.globalAlpha = 1; }
  for (let k = 0; k < 2200; k++) { g.fillStyle = `rgba(${r() < .5 ? '255,255,255' : '0,0,0'},${.015 + r() * .03})`; g.fillRect(r() * S, r() * S, 2 + r() * 14, 1 + r() * 3); }
  g.strokeStyle = 'rgba(0,0,0,.28)'; g.lineWidth = 2;
  for (let k = 0; k <= 8; k++) { g.beginPath(); g.moveTo(0, k * S / 8 + (k % 2) * 9); g.lineTo(S, k * S / 8 + (k % 2) * 9); g.stroke(); }
  for (let y = 0; y < 8; y++) for (let x = 0; x < 6; x++) { if (r() < .25) continue; const xx = (x + (y % 2) * .5) * S / 6; g.beginPath(); g.moveTo(xx, y * S / 8); g.lineTo(xx, (y + 1) * S / 8); g.stroke(); }
  for (let k = 0; k < 14; k++) { const x = r() * S, y = r() * S, w = 40 + r() * 90, h = 30 + r() * 60; g.strokeStyle = 'rgba(0,0,0,.22)'; g.strokeRect(x, y, w, h); }
  g.fillStyle = 'rgba(0,0,0,.25)'; for (let k = 0; k < 900; k++) g.fillRect(Math.floor(r() * 6) * S / 6 + (r() < .5 ? -4 : 4), r() * S, 1.5, 1.5);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return (texCache[paint] = t);
}
let bumpT = null;
function panelBump() { if (bumpT) return bumpT; const S = 1024, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'); let seed = 4242; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  g.fillStyle = '#808080'; g.fillRect(0, 0, S, S); g.strokeStyle = '#3c3c3c'; g.lineWidth = 2.5;
  for (let k = 0; k <= 8; k++) { g.beginPath(); g.moveTo(0, k * S / 8 + (k % 2) * 9); g.lineTo(S, k * S / 8 + (k % 2) * 9); g.stroke(); }
  for (let y = 0; y < 8; y++) for (let x = 0; x < 6; x++) { if (r() < .2) continue; const xx = (x + (y % 2) * .5) * S / 6; g.beginPath(); g.moveTo(xx, y * S / 8); g.lineTo(xx, (y + 1) * S / 8); g.stroke(); }
  g.lineWidth = 2; for (let k = 0; k < 22; k++) { const x = r() * S, y = r() * S, w = 30 + r() * 110, h = 24 + r() * 70; g.strokeStyle = '#4a4a4a'; g.strokeRect(x, y, w, h); g.fillStyle = '#5a5a5a'; for (let q = 0; q < w; q += 9) { g.fillRect(x + q, y - 4, 2, 2); g.fillRect(x + q, y + h + 3, 2, 2); } }
  g.fillStyle = '#5c5c5c'; for (let y = 0; y < 8; y++) for (let x = 0; x < S; x += 10) g.fillRect(x, y * S / 8 + 6 + (y % 2) * 9, 2, 2);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 4; return (bumpT = t); }
export function cockpitInfo(type, paint) { return getBuilt(JETS[type] ? type : 'viper', PAINTS[paint] ? paint : 'gray', false).A.cock; }
const decalTex = {};
function decal(enemy) {
  const key = enemy ? 'e' : 'p'; if (decalTex[key]) return decalTex[key];
  const c = document.createElement('canvas'); c.width = c.height = 128; const g = c.getContext('2d'); g.translate(64, 64);
  if (enemy) { g.fillStyle = '#c0262e'; g.beginPath(); for (let k = 0; k < 3; k++) { const a = k * 2.094 - 1.57; g.moveTo(0, 0); g.lineTo(Math.cos(a - .35) * 58, Math.sin(a - .35) * 58); g.lineTo(Math.cos(a + .35) * 58, Math.sin(a + .35) * 58); } g.fill(); g.fillStyle = '#16171a'; g.beginPath(); g.arc(0, 0, 18, 0, 7); g.fill(); }
  else { g.strokeStyle = 'rgba(70,76,84,.8)'; g.lineWidth = 6; g.beginPath(); g.arc(0, 0, 50, 0, 7); g.stroke(); g.fillStyle = 'rgba(70,76,84,.75)'; g.font = '900 46px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('JK', 0, 3); g.fillRect(-62, -5, 10, 10); g.fillRect(52, -5, 10, 10); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return (decalTex[key] = t);
}

/* ---------------------------------------------------------------- geometry helpers */
// loft along -Z (nose) .. +Z (tail). stations: [t (0..1 along length), halfWidth, halfHeight, yCenter, superellipse exponent]
function loft(stations, L, seg = 28, capEnd = true) {
  const pos = [], uv = [], idx = [], rings = stations.length;
  stations.forEach(([t, w, h, y, n]) => {
    const z = -L / 2 + t * L;
    for (let i = 0; i <= seg; i++) { const a = i / seg * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a), e = 2 / n;
      pos.push(Math.sign(ca) * Math.pow(Math.abs(ca), e) * w, y + Math.sign(sa) * Math.pow(Math.abs(sa), e) * h, z); uv.push(i / seg * 3, t * L / 8); }
  });
  for (let r = 0; r < rings - 1; r++) for (let i = 0; i < seg; i++) { const a = r * (seg + 1) + i, b = a + seg + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  if (capEnd) { const c = pos.length / 3, last = stations[rings - 1]; pos.push(0, last[3], -L / 2 + last[0] * L); uv.push(.5, .5); const base = (rings - 1) * (seg + 1); for (let i = 0; i < seg; i++) idx.push(base + i, base + i + 1, c); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
}
function plate(pts, thick, bevel = .05) { // planform (x, z) → thin beveled slab lying in the XZ plane
  const s = new THREE.Shape(); s.moveTo(pts[0][0], -pts[0][1]); pts.slice(1).forEach(([x, z]) => s.lineTo(x, -z)); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 6 });
  g.translate(0, 0, -thick / 2); g.rotateX(-Math.PI / 2); scaleUV(g, 1 / 8); return g;
}
function fin(pts, thick, bevel = .05) { // profile (z, y) → thin slab in the YZ plane
  const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(([z, y]) => s.lineTo(z, y)); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3 });
  g.translate(0, 0, -thick / 2); g.rotateY(-Math.PI / 2); scaleUV(g, 1 / 8); return g;
}
function scaleUV(g, k) { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * k, uv.getY(i) * k); }
const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), EU = new THREE.Euler(), SV = new THREE.Vector3(), SC = new THREE.Vector3();
function place(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) { M4.compose(SV.set(x, y, z), Q.setFromEuler(EU.set(rx, ry, rz)), SC.set(sx, sy, sz)); return g.clone().applyMatrix4(M4); }
function prep(g) { const n = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(n.attributes)) if (!['position', 'normal', 'uv'].includes(k)) n.deleteAttribute(k); if (!n.attributes.uv) n.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(n.attributes.position.count * 2), 2)); if (!n.attributes.normal) n.computeVertexNormals(); n.clearGroups(); return n; }
function merge(list) { return list.length ? mergeGeometries(list.map(prep), false) : null; }
const scale5 = (arr, k) => arr.map(([t, w, h, y, n]) => [t, w * k, h * k, y * k, n]);

/* ---------------------------------------------------------------- airframes */
// Monotone cubic interpolation of one column of a station table (no overshoot, so lofts stay smooth and tight).
function interp(tab, t, c) {
  const n = tab.length; if (t <= tab[0][0]) return tab[0][c]; if (t >= tab[n - 1][0]) return tab[n - 1][c];
  let i = 0; while (t > tab[i + 1][0]) i++;
  const sec = j => (tab[j + 1][c] - tab[j][c]) / (tab[j + 1][0] - tab[j][0]);
  const sl = j => { if (j === 0) return sec(0); if (j === n - 1) return sec(n - 2); const a = sec(j - 1), b = sec(j); return a * b <= 0 ? 0 : 2 / (1 / a + 1 / b); };
  const h = tab[i + 1][0] - tab[i][0], s = (t - tab[i][0]) / h, s2 = s * s, s3 = s2 * s;
  return (2 * s3 - 3 * s2 + 1) * tab[i][c] + (s3 - 2 * s2 + s) * h * sl(i) + (-2 * s3 + 3 * s2) * tab[i + 1][c] + (s3 - s2) * h * sl(i + 1);
}
// Smooth superellipse loft. rows: [t, halfWidth, top, bottom, yCentre, topExp, botExp] in metres.
function body(tab, L, { rings = 64, seg = 40, x = 0, t0 = tab[0][0], t1 = tab[tab.length - 1][0], bias = 1.2 } = {}) {
  const pos = [], uv = [];
  for (let r = 0; r <= rings; r++) {
    const t = t0 + (t1 - t0) * Math.pow(r / rings, bias), w = interp(tab, t, 1), tp = interp(tab, t, 2), bt = interp(tab, t, 3), yc = interp(tab, t, 4), nT = interp(tab, t, 5), nB = interp(tab, t, 6), zz = -L / 2 + t * L;
    for (let i = 0; i <= seg; i++) { const a = i / seg * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a), up = sa >= 0, e = 2 / (up ? nT : nB);
      pos.push(x + Math.sign(ca) * Math.pow(Math.abs(ca), e) * w, yc + Math.sign(sa) * Math.pow(Math.abs(sa), e) * (up ? tp : bt), zz); uv.push(i / seg * 3, zz / 8); }
  }
  const idx = []; for (let r = 0; r < rings; r++) for (let i = 0; i < seg; i++) { const a = r * (seg + 1) + i, b = a + seg + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  return finish(pos, uv, idx);
}
// Faceted stealth loft: every station is a polygon of control points (half-section from top centre to bottom centre when mirrored).
// Control points flagged sharp stay hard creases (chines, intake lips); the rest are rounded with Chaikin subdivision.
function chaikin(P, F) { const o = [], f = [], m = P.length; for (let i = 0; i < m; i++) { const p = P[i], a = P[(i + m - 1) % m], b = P[(i + 1) % m];
  if (F[i]) { o.push(p); f.push(true); } else { o.push([.75 * p[0] + .25 * a[0], .75 * p[1] + .25 * a[1]], [.75 * p[0] + .25 * b[0], .75 * p[1] + .25 * b[1]]); f.push(false, false); } } return [o, f]; }
function shell(st, L, { rings = 70, iters = 2, sharp = [], mirror = true, bias = 1.15 } = {}) {
  const n = st[0][1].length, cols = []; for (let j = 0; j < n; j++) cols.push(st.map(([t, p]) => [t, p[j][0], p[j][1]]));
  const loopOf = p => mirror ? [...p, ...p.slice(1, -1).reverse().map(([x, y]) => [-x, y])] : p;
  const flags0 = mirror ? [...Array(n).keys()].map(j => sharp.includes(j)).concat([...Array(n - 2).keys()].map(q => sharp.includes(n - 2 - q))) : [...Array(n).keys()].map(j => sharp.includes(j));
  const pos = [], uv = [], idx = [], rIn = [], rOut = [], seams = [], t0 = st[0][0], t1 = st[st.length - 1][0];
  for (let r = 0; r <= rings; r++) {
    const t = t0 + (t1 - t0) * Math.pow(r / rings, bias), zz = -L / 2 + t * L; let P = loopOf(cols.map(c => [interp(c, t, 1), interp(c, t, 2)])), F = flags0;
    for (let k = 0; k < iters; k++) [P, F] = chaikin(P, F);
    const m = P.length, I = [], O = []; let u = 0;
    for (let j = 0; j <= m; j++) { const p = P[j % m]; if (j) u += Math.hypot(p[0] - P[j - 1][0], p[1] - P[(j - 1) % m][1]);
      const v = () => { pos.push(p[0], p[1], zz); uv.push(u / 8, zz / 8); return pos.length / 3 - 1; };
      const a = v(), b = (F[j % m] && j > 0 && j < m) ? v() : a; I.push(a); O.push(b); }
    if (!F[0]) seams.push([O[0], I[m]]); rIn.push(I); rOut.push(O);
  }
  for (let r = 0; r < rings; r++) for (let j = 0; j < rIn[r].length - 1; j++) { const a = rOut[r][j], b = rIn[r][j + 1], c = rOut[r + 1][j], d = rIn[r + 1][j + 1]; idx.push(a, b, c, c, b, d); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  // outward check on a mid ring, then weld the uv seam normals
  const mr = rOut[rings >> 1], p = g.attributes.position, nn = g.attributes.normal; let cx = 0, cy = 0; mr.forEach(i => { cx += p.getX(i); cy += p.getY(i); }); cx /= mr.length; cy /= mr.length;
  const q = mr[Math.floor(mr.length / 4)]; if ((p.getX(q) - cx) * nn.getX(q) + (p.getY(q) - cy) * nn.getY(q) < 0) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const s = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = s; } g.computeVertexNormals(); }
  seams.forEach(([a, b]) => { if (a === b) return; const x = nn.getX(a) + nn.getX(b), y = nn.getY(a) + nn.getY(b), z = nn.getZ(a) + nn.getZ(b), l = Math.hypot(x, y, z) || 1; nn.setXYZ(a, x / l, y / l, z / l); nn.setXYZ(b, x / l, y / l, z / l); });
  return g;
}
// flat polygon facing -Z (into the airflow), e.g. a dark intake face
function face(pts, zz, inset = .9) { let cx = 0, cy = 0; pts.forEach(([x, y]) => { cx += x; cy += y; }); cx /= pts.length; cy /= pts.length;
  const pos = [cx, cy, zz], idx = []; pts.forEach(([x, y]) => pos.push(cx + (x - cx) * inset, cy + (y - cy) * inset, zz)); for (let i = 0; i < pts.length; i++) idx.push(0, 1 + i, 1 + (i + 1) % pts.length);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(new Array(pos.length / 3 * 2).fill(0), 2)); g.setIndex(idx); g.computeVertexNormals();
  if (g.attributes.normal.getZ(0) > 0) { const ix = g.index.array; for (let i = 0; i < ix.length; i += 3) { const s = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = s; } g.computeVertexNormals(); } return g; }
const oct = (x, y, w, h, c) => [[x + w - c, y + h], [x + w, y + h - c], [x + w, y - h + c], [x + w - c, y - h], [x - w + c, y - h], [x - w, y - h + c], [x - w, y + h - c], [x - w + c, y + h]];
// Lifting surface with a real airfoil: secs = [[spanX, y, zLE, zTE, thicknessRatio], ...] from root to tip.
function aero(secs, { nC = 14, sub = 1 } = {}) {
  const S = []; for (let i = 0; i < secs.length - 1; i++) for (let j = 0; j < sub; j++) { const a = j / sub; S.push(secs[i].map((v, q) => v * (1 - a) + secs[i + 1][q] * a)); } S.push(secs[secs.length - 1]);
  const pos = [], uv = [], idx = [], ring = 2 * nC;
  const yt = x => 5 * (.2969 * Math.sqrt(x) - .126 * x - .3516 * x * x + .2843 * x ** 3 - .1036 * x ** 4);
  S.forEach(([sx, y, le, te, tr]) => { const c = te - le;
    for (let i = 0; i < ring; i++) { const top = i <= nC, xi = top ? i : ring - i, xc = (1 - Math.cos(Math.PI * xi / nC)) / 2, h = Math.max(yt(xc) * tr * c, .004);
      pos.push(sx, y + (top ? h : -h), le + xc * c); uv.push(sx / 8, (le + xc * c) / 8); } });
  for (let r = 0; r < S.length - 1; r++) for (let i = 0; i < ring; i++) { const a = r * ring + i, a1 = r * ring + (i + 1) % ring, b = a + ring, b1 = a1 + ring; idx.push(a, b, a1, a1, b, b1); }
  [0, S.length - 1].forEach(r => { const c = pos.length / 3; let cx = 0, cy = 0, cz = 0; for (let i = 0; i < ring; i++) { cx += pos[(r * ring + i) * 3]; cy += pos[(r * ring + i) * 3 + 1]; cz += pos[(r * ring + i) * 3 + 2]; }
    pos.push(cx / ring, cy / ring, cz / ring); uv.push(0, 0); for (let i = 0; i < ring; i++) idx.push(r * ring + i, r * ring + (i + 1) % ring, c); });
  return finish(pos, uv, idx);
}
function finish(pos, uv, idx) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); return orient(g); }
// make every triangle face outward (signed volume test, closed meshes), then smooth normals
function orient(g) { const p = g.attributes.position, ix = g.index.array, A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(); let vol = 0;
  for (let i = 0; i < ix.length; i += 3) { A.fromBufferAttribute(p, ix[i]); B.fromBufferAttribute(p, ix[i + 1]); C.fromBufferAttribute(p, ix[i + 2]); vol += A.dot(B.cross(C)); }
  if (vol < 0) for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
  g.computeVertexNormals(); return g; }
function mirrorX(g) { const m = g.clone(); m.scale(-1, 1, 1); const ix = m.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } m.computeVertexNormals(); return m; }
const both = (g, list) => { list.push(g, mirrorX(g)); };
// a fin built span-wise along +X, stood up; cant tilts its top outward (radians)
function finGeo(secs, cant, x, y, opt) { const g = aero(secs, opt); g.rotateZ(Math.PI / 2 - cant); g.translate(x, y, 0); return g; }
function wingAt(W, f) { const [r, t] = [W[0], W[W.length - 1]], x = r[0] + (t[0] - r[0]) * f; let i = 0; while (i < W.length - 2 && x > W[i + 1][0]) i++; const a = (x - W[i][0]) / (W[i + 1][0] - W[i][0]);
  const s = W[i].map((v, q) => v * (1 - a) + W[i + 1][q] * a); return { x, y: s[1], le: s[2], te: s[3], tr: s[4], c: s[3] - s[2] }; }

// ------------------------------------------------ the three stealth fighters
// Half-sections: top centre → upper (hump) → upper side → CHINE (sharp, idx 3) → lower side → lower corner → bottom → bottom centre.
const DESIGNS = {
  raptor: { L0: 18.9, // F-22: diamond chined nose, twin engine humps with a valley between, caret intakes, 2D nozzles
    body: [[0, [[0, .006], [.003, .005], [.006, .002], [.008, 0], [.006, -.002], [.003, -.004], [.001, -.005], [0, -.005]]],
      [.04, [[0, .14], [.07, .12], [.14, .06], [.2, 0], [.15, -.06], [.08, -.11], [.03, -.13], [0, -.13]]],
      [.1, [[0, .36], [.18, .33], [.36, .17], [.48, 0], [.38, -.14], [.22, -.25], [.08, -.28], [0, -.29]]],
      [.18, [[0, .55], [.27, .5], [.52, .26], [.66, .02], [.55, -.2], [.36, -.36], [.12, -.41], [0, -.41]]],
      [.27, [[0, .64], [.32, .6], [.6, .34], [.76, .05], [.68, -.2], [.5, -.4], [.16, -.46], [0, -.46]]],
      [.36, [[0, .66], [.42, .64], [.86, .42], [1.2, .08], [1.12, -.14], [.95, -.4], [.3, -.48], [0, -.48]]],
      [.45, [[0, .6], [.56, .67], [1.08, .44], [1.66, .04], [1.52, -.14], [1.2, -.42], [.4, -.5], [0, -.5]]],
      [.58, [[0, .52], [.62, .66], [1.16, .44], [1.76, .03], [1.6, -.14], [1.25, -.42], [.4, -.48], [0, -.48]]],
      [.72, [[0, .46], [.6, .6], [1.1, .4], [1.6, .02], [1.48, -.13], [1.18, -.38], [.4, -.44], [0, -.44]]],
      [.85, [[0, .36], [.6, .52], [1.0, .34], [1.3, 0], [1.22, -.12], [1.0, -.32], [.4, -.38], [0, -.38]]],
      [.95, [[0, .26], [.56, .42], [.92, .28], [1.08, 0], [1.02, -.1], [.9, -.26], [.4, -.32], [0, -.32]]],
      [1, [[0, .24], [.55, .38], [.88, .26], [1.0, 0], [.95, -.1], [.85, -.24], [.4, -.3], [0, -.3]]]],
    intake: [[.25, [[.6, .32], [1.2, .06], [1.1, -.48], [.58, -.5]]], [.32, [[.62, .34], [1.27, .08], [1.15, -.5], [.58, -.52]]], [.42, [[.7, .38], [1.4, .1], [1.24, -.5], [.6, -.52]]], [.52, [[.82, .42], [1.5, .07], [1.3, -.46], [.7, -.5]]]],
    W: [[1.5, .03, z => z(.405), z => z(.79), .035], [6.78, -.22, z => z(.66), z => z(.752), .03]],
    HS: [[1.0, 0, z => z(.8), z => z(1.0), .035], [4.4, -.04, z => z(.955), z => z(1.02), .03]],
    VT: { x: 1.25, y: .26, cant: .49, secs: [[0, 0, z => z(.615), z => z(.865), .04], [2.65, 0, z => z(.755), z => z(.84), .035]] },
    ex: [-.55, .55], ey: 0, nr: .38, nozzle: '2d', canopy: [.09, .35], cw: 1.2, ch: 1.05, frame: false,
    pyl: [.78, .56, .34, .14],
  },
  viper: { L0: 15.7, // F-35: chunkier humped single-engine body, trapezoid wing, round sawtooth nozzle
    body: [[0, [[0, .006], [.003, .005], [.006, .002], [.008, 0], [.006, -.002], [.003, -.004], [.001, -.005], [0, -.005]]],
      [.04, [[0, .14], [.07, .12], [.15, .05], [.2, 0], [.15, -.06], [.08, -.11], [.03, -.13], [0, -.13]]],
      [.1, [[0, .38], [.2, .34], [.38, .18], [.5, 0], [.4, -.15], [.24, -.27], [.08, -.3], [0, -.31]]],
      [.19, [[0, .6], [.28, .55], [.55, .3], [.7, .02], [.6, -.22], [.4, -.4], [.14, -.46], [0, -.46]]],
      [.28, [[0, .74], [.36, .68], [.68, .4], [.86, .05], [.78, -.24], [.58, -.46], [.18, -.52], [0, -.52]]],
      [.38, [[0, .82], [.45, .76], [.9, .46], [1.3, .08], [1.22, -.2], [1.0, -.48], [.3, -.56], [0, -.56]]],
      [.5, [[0, .84], [.55, .78], [1.05, .48], [1.5, .06], [1.4, -.18], [1.1, -.48], [.35, -.58], [0, -.58]]],
      [.64, [[0, .78], [.55, .74], [1.0, .46], [1.45, .04], [1.35, -.16], [1.05, -.44], [.35, -.54], [0, -.54]]],
      [.78, [[0, .68], [.5, .64], [.88, .4], [1.2, .02], [1.12, -.14], [.9, -.38], [.35, -.48], [0, -.48]]],
      [.9, [[0, .58], [.42, .54], [.72, .34], [.92, 0], [.86, -.12], [.72, -.32], [.3, -.42], [0, -.42]]],
      [.97, [[0, .52], [.38, .48], [.62, .3], [.74, 0], [.7, -.12], [.6, -.28], [.3, -.38], [0, -.4]]],
      [1, [[0, .5], [.35, .46], [.58, .28], [.68, 0], [.65, -.12], [.56, -.26], [.28, -.36], [0, -.38]]]],
    intake: [[.26, [[.58, .42], [1.1, .2], [1.02, -.4], [.55, -.42]]], [.33, [[.6, .44], [1.16, .2], [1.06, -.42], [.55, -.44]]], [.43, [[.7, .46], [1.3, .18], [1.16, -.42], [.6, -.44]]], [.52, [[.82, .5], [1.4, .12], [1.22, -.42], [.7, -.46]]]],
    W: [[1.4, .04, z => z(.47), z => z(.83), .04], [5.35, -.1, z => z(.64), z => z(.73), .035]],
    HS: [[.7, .02, z => z(.84), z => z(1.03), .035], [3.45, 0, z => z(.99), z => z(1.045), .03]],
    VT: { x: .9, y: .46, cant: .44, secs: [[0, 0, z => z(.65), z => z(.865), .045], [2.15, 0, z => z(.79), z => z(.86), .04]] },
    ex: [0], ey: .05, nr: .52, nozzle: 'round', canopy: [.1, .34], cw: 1.05, ch: 1.0, frame: true,
    pyl: [.8, .55, .3],
  },
  striker: { L0: 20.1, // Su-57: long flat lifting body, LEVCONs, widely spaced underslung nacelles with a tunnel between, long stinger
    body: [[0, [[0, .006], [.003, .005], [.006, .002], [.008, 0], [.006, -.002], [.003, -.004], [.001, -.005], [0, -.005]]],
      [.03, [[0, .12], [.06, .1], [.12, .04], [.16, 0], [.12, -.05], [.06, -.1], [.02, -.11], [0, -.11]]],
      [.09, [[0, .36], [.18, .32], [.34, .16], [.44, 0], [.36, -.14], [.2, -.25], [.07, -.28], [0, -.29]]],
      [.18, [[0, .58], [.26, .52], [.5, .28], [.64, .02], [.54, -.18], [.36, -.34], [.12, -.4], [0, -.4]]],
      [.28, [[0, .64], [.3, .6], [.62, .34], [1.0, .06], [.86, -.12], [.5, -.3], [.15, -.36], [0, -.36]]],
      [.38, [[0, .6], [.4, .57], [1.1, .3], [1.95, .05], [1.75, -.08], [1.0, -.2], [.3, -.28], [0, -.28]]],
      [.5, [[0, .52], [.5, .5], [1.3, .27], [2.2, .04], [2.0, -.06], [1.2, -.15], [.3, -.21], [0, -.21]]],
      [.65, [[0, .46], [.5, .45], [1.3, .25], [2.05, .03], [1.85, -.05], [1.1, -.13], [.3, -.19], [0, -.19]]],
      [.8, [[0, .36], [.42, .34], [1.0, .2], [1.45, .02], [1.32, -.04], [.9, -.11], [.25, -.15], [0, -.15]]],
      [.92, [[0, .24], [.25, .22], [.45, .12], [.56, 0], [.5, -.06], [.4, -.1], [.15, -.12], [0, -.12]]],
      [1.06, [[0, .06], [.05, .05], [.1, .02], [.12, 0], [.1, -.02], [.06, -.04], [.02, -.05], [0, -.05]]]],
    nacelle: [[.3, .46, .3, .04], [.42, .47, .34, .1], [.62, .47, .42, .24], [.85, .46, .45, .28], [1.0, .44, .44, .27]], nx: 1.12, ny: -.4,
    W: [[1.9, .05, z => z(.47), z => z(.8), .035], [7.0, -.05, z => z(.745), z => z(.81), .03]],
    HS: [[1.55, -.12, z => z(.82), z => z(.995), .035], [4.0, -.14, z => z(.95), z => z(1.0), .03]],
    VT: { x: 1.4, y: .14, cant: .45, secs: [[0, 0, z => z(.7), z => z(.9), .04], [2.1, 0, z => z(.82), z => z(.905), .035]] },
    ex: [-1.12, 1.12], ey: -.4, nr: .42, nozzle: 'round', canopy: [.1, .31], cw: 1.0, ch: .95, frame: true, irst: true,
    pyl: [.84, .64, .44, .24],
  },
};

function airframe(J) {
  const L = J.len, P = { paint: [], dark: [], metal: [], glass: [], light: [], decal: [], pilot: [], sill: [], helm: [] }, st = J.style, D = DESIGNS[st], z = t => -L / 2 + t * L;
  const S = L / D.L0, k = L / 15; // design tables are drawn for the real jet's length L0 and scaled to the game length
  const sc = rows => rows.map(([t, pts]) => [t, pts.map(([x, y]) => [x * S, y * S])]);
  const fus = sc(D.body), topT = fus.map(([t, p]) => [t, p[0][1]]), botT = fus.map(([t, p]) => [t, p[p.length - 1][1]]);
  const top = t => interp(topT, t, 1), bot = t => interp(botT, t, 1);
  P.paint.push(shell(fus, L, { rings: 80, iters: 2, sharp: [3] }));
  { const [tl, pl] = fus[fus.length - 1]; P.dark.push(face([...pl, ...pl.slice(1, -1).reverse().map(([x, y]) => [-x, y])], z(tl) - .03, .99)); }
  // intakes / nacelles
  if (D.intake) { const it = sc(D.intake), g = shell(it, L, { rings: 16, iters: 1, mirror: false, sharp: [0, 1, 2, 3], bias: 1 }); both(g, P.paint); both(face(it[0][1], z(it[0][0]) + .08, .94), P.dark);
    // boundary-layer diverter slot between intake and forebody
    both(face([[it[0][1][0][0] - .05, it[0][1][0][1]], [it[0][1][0][0], it[0][1][0][1]], [it[0][1][3][0], it[0][1][3][1]], [it[0][1][3][0] - .05, it[0][1][3][1]]], z(it[0][0]) + .25, 1), P.dark); }
  if (D.nacelle) { const nx = D.nx * S, ny = D.ny * S; const nc = D.nacelle.map(([t, w, h, c]) => [t, oct(nx, ny, w * S, h * S, c * S)]); const g = shell(nc, L, { rings: 44, iters: 2, mirror: false, sharp: [], bias: 1 }); both(g, P.paint);
    both(face(oct(nx, ny, D.nacelle[0][1] * S, D.nacelle[0][2] * S, D.nacelle[0][3] * S), z(D.nacelle[0][0]) + .05, .92), P.dark); }
  // radome pitot (F-35/F-22 have none on the nose; Su-57 gets the IRST ball)
  if (D.irst) P.glass.push(place(new THREE.SphereGeometry(.13 * S, 14, 10), .2 * S, top(.1) + .03, z(.1)));
  // ---- canopy: one-piece bubble, gold-tinted
  const [c0, c1] = D.canopy;
  const cs = [[c0, .02, .02], [c0 + .03, .17, .16], [c0 + .08, .3, .34], [(c0 + c1) / 2 + .02, .35, .42], [c1 - .07, .3, .32], [c1 - .02, .16, .14], [c1, .04, .03]].map(([t, w, h]) => [t, w * k * D.cw, h * k * D.ch, top(t) - .08 * k, 2]);
  P.glass.push(body(cs.map(([t, w, h, y]) => [t, w, h, h * .3, y, 2.1, 2]), L, { rings: 40, seg: 36, bias: 1 }));
  const sill = t => top(t) - .07 * k, cw = t => interp(cs, t, 1);
  [-1, 1].forEach(sd => { const pts = []; for (let i = 0; i <= 14; i++) { const t = c0 + .03 + (c1 - c0 - .06) * i / 14; pts.push(new THREE.Vector3(sd * cw(t) * .97, sill(t) + .02 * k, z(t))); } P.sill.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, .035 * k, 6)); });
  P.dark.push(place(new THREE.CapsuleGeometry(.15 * k, .2 * k, 4, 10), 0, top(c0 + .2) + .02 * k, z(c0 + .2), 0, 0, 0, 1, 1, .45));
  P.helm.push(place(new THREE.SphereGeometry(.165 * k, 14, 8, Math.PI * .25, Math.PI * .5, Math.PI * .3, Math.PI * .32), 0, top(c0 + .14) + .14 * k, z(c0 + .14), 0, Math.PI, 0));
  { const tE = c0 + .15, ys = []; for (let t = c0 + .02; t <= c1 - .02; t += .01) ys.push(top(t)); P.cock = { eyeY: top(tE) + .13 * k, eyeZ: z(tE), z0: z(c0 + .025), z1: z(c1 - .025), w: Math.max(...cs.map(c => c[1])) * .9, y0: Math.min(...ys) - .8 * k, y1: Math.max(...ys) + .2 * k, k }; }
  if (D.frame) { const bowT = c0 + .2; P.dark.push(place(new THREE.TorusGeometry(1, .045, 6, 28, Math.PI), 0, top(bowT) - .08 * k, z(bowT), .25, 0, 0, cw(bowT) * 1.02, interp(cs, bowT, 2) * 1.02, .3 * k)); }
  P.pilot.push(place(new THREE.SphereGeometry(.16 * k, 12, 10), 0, top(c0 + .14) + .14 * k, z(c0 + .14)));
  // ---- wings, stabilators, canted twin tails (all clipped-tip, airfoil-section)
  const W = D.W.map(([x, y, le, te, tr]) => [x * S, y * S, le(z), te(z), tr]), HS = D.HS.map(([x, y, le, te, tr]) => [x * S, y * S, le(z), te(z), tr]);
  both(aero(W, { nC: 16, sub: 3 }), P.paint); both(aero(HS, { nC: 12, sub: 2 }), P.paint);
  { const v = D.VT, g = finGeo(v.secs.map(([x, y, le, te, tr]) => [x * S, y, le(z), te(z), tr]), v.cant, 0, 0, { nC: 14, sub: 2 }); g.translate(v.x * S, v.y * S, 0); both(g, P.paint); }
  const tip = W[W.length - 1];
  [-1, 1].forEach(s => {
    P.light.push(place(new THREE.SphereGeometry(.05 * k, 8, 6), s * (tip[0] - .05), tip[1] + .03, tip[3] - .15));
    const hl = []; for (let f = .04; f <= .97; f += .93 / 12) { const a = wingAt(W, f); hl.push(new THREE.Vector3(s * a.x, a.y + .25 * a.tr * a.c + .004, a.te - a.c * .2)); }
    P.dark.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hl), 16, .007, 3));
    const d = wingAt(W, .62); P.decal.push(place(new THREE.PlaneGeometry(1.0 * k, 1.0 * k), s * d.x, d.y + .4 * d.tr * d.c + .01, (d.le + d.te) / 2 + .1 * d.c, -Math.PI / 2, 0, 0));
  });
  // ---- engines
  const ex = D.ex.map(x => x * S), ey = D.ey * S, nr = D.nr * S, tailZ = z(1);
  ex.forEach(x => {
    if (D.nozzle === '2d') { // F-22 thrust-vectoring nozzle: rectangular can + upper/lower paddles
      P.metal.push(shell([[.955, oct(x, ey, .46 * S, .3 * S, .08 * S)], [1, oct(x, ey, .42 * S, .25 * S, .06 * S)]], L, { rings: 4, iters: 1, mirror: false, bias: 1 }));
      [1, -1].forEach(u => P.metal.push(aero([[x - .4 * S, ey + u * .23 * S, z(.998), z(1.045), .05], [x + .4 * S, ey + u * .2 * S, z(.998), z(1.035), .05]], { nC: 6 })));
      P.dark.push(face(oct(x, ey, .4 * S, .22 * S, .05 * S), z(1) - .05, 1)); return; }
    const noz = new THREE.LatheGeometry([[nr * .98, 0], [nr * 1.02, .2], [nr * .97, .7 * k], [nr * .86, 1.15 * k], [nr * .82, 1.22 * k], [nr * .74, 1.18 * k], [nr * .76, .3]].map(([a, b]) => new THREE.Vector2(a, b)), 40);
    const pp = noz.attributes.position; for (let i = 0; i < pp.count; i++) { if (pp.getY(i) < .6 * k) continue; const a = Math.atan2(pp.getZ(i), pp.getX(i)), f = 1 + .045 * Math.max(0, Math.cos(a * 14)); pp.setX(i, pp.getX(i) * f); pp.setZ(i, pp.getZ(i) * f); } noz.computeVertexNormals();
    P.metal.push(place(noz, x, ey, tailZ - .4 * k, Math.PI / 2));
    P.dark.push(place(new THREE.CircleGeometry(nr * .74, 28), x, ey, tailZ + .05 * k));
    P.dark.push(place(new THREE.TorusGeometry(nr * .5, nr * .06, 6, 24), x, ey, tailZ));
  });
  // ---- small details: blade antennas, formation light strips, refuelling door
  const blade = (x, y, t, h, down = false) => { const g = finGeo([[0, 0, z(t), z(t) + .35 * k, .1], [h, 0, z(t) + .14 * k, z(t) + .32 * k, .1]], 0, 0, 0, { nC: 6 }); if (down) g.rotateZ(Math.PI); P.dark.push(g.translate(x, y, 0)); };
  blade(0, top(.52) - .02, .52, .18 * k); blade(0, bot(.3) + .02, .3, .18 * k, true);
  P.light.push(place(new THREE.BoxGeometry(.03 * k, .02 * k, .45 * k), 0, top(.62) + .004, z(.62)));
  [-1, 1].forEach(s => P.light.push(place(new THREE.BoxGeometry(.02 * k, .02 * k, .5 * k), s * fus[4][1][2][0] * .9, interp(fus.map(([t, p]) => [t, p[2][1]]), .27, 1) + .01, z(.27), 0, s * .3, 0)));
  // ---- internal weapons bays: missiles ride inside the fuselage (stealth), staggered across the bay
  const py = [], bayY = (bot(.5) + .2 * k) * .5;
  for (let i = 0; i < 6; i++) py.push([(.28 + .19 * i) * k, bayY, z(.47 + (i % 2) * .05)]);
  while (py.length < 6) py.push(py[py.length - 1]);
  const cock = P.cock; delete P.cock;
  return { P, ex, ey, nr, tailZ, sp: tip[0] - W[0][0], rx: W[0][0], wy: W[0][1], L, k, cock, pylons: py };
}

/* ---------------------------------------------------------------- assembly + caching */
const built = {};
const flameGeo = new THREE.ConeGeometry(.5, 6, 16, 1, true).rotateX(Math.PI / 2).translate(0, 0, 3);
const coreGeo = new THREE.ConeGeometry(.3, 3.4, 12, 1, true).rotateX(Math.PI / 2).translate(0, 0, 1.7);
let glowTex = null;
export function glowTexture() { if (glowTex) return glowTex; const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.3, 'rgba(255,255,255,.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); glowTex = new THREE.CanvasTexture(c); return glowTex; }
function getBuilt(type, paint, enemy) {
  const key = type + '|' + paint + '|' + (enemy ? 1 : 0); if (built[key]) return built[key];
  const J = JETS[type], A = airframe(J);
  const mats = {
    paint: new THREE.MeshPhysicalMaterial({ map: skinTex(enemy ? 'red' : paint), bumpMap: panelBump(), bumpScale: 1.2, roughness: .46, metalness: .32, clearcoat: .3, clearcoatRoughness: .45, envMapIntensity: .9 }),
    dark: new THREE.MeshStandardMaterial({ color: '#25282d', roughness: .55, metalness: .45 }),
    metal: new THREE.MeshStandardMaterial({ color: '#6f7379', roughness: .32, metalness: .9, envMapIntensity: 1.2 }),
    glass: new THREE.MeshPhysicalMaterial({ color: enemy ? '#4a3418' : '#7d6a3e', roughness: .03, metalness: .55, envMapIntensity: 2.4, clearcoat: 1, clearcoatRoughness: .02, transparent: true, opacity: .78 }),
    light: new THREE.MeshBasicMaterial({ color: '#fff7e0' }),
    decal: new THREE.MeshStandardMaterial({ map: decal(enemy), transparent: true, roughness: .5, polygonOffset: true, polygonOffsetFactor: -2, depthWrite: false }),
    pilot: new THREE.MeshStandardMaterial({ color: '#e6e6e0', roughness: .4 }),
  };
  mats.sill = mats.dark; mats.helm = mats.dark;
  const geos = {}; for (const m in A.P) { const g = merge(A.P[m]); if (g) { g.computeBoundingSphere(); geos[m] = g; } }
  const pylons = A.pylons;
  return (built[key] = { J, A, mats, geos, pylons });
}
export function buildJet(type = 'viper', paint = 'gray', enemy = false) {
  if (!JETS[type]) type = 'viper'; if (!PAINTS[paint]) paint = 'gray';
  const B = getBuilt(type, paint, enemy), { J, A } = B, root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  for (const m in B.geos) { const mesh = new THREE.Mesh(B.geos[m], B.mats[m]); mesh.name = m; mesh.castShadow = m === 'paint' || m === 'dark' || m === 'metal'; mesh.receiveShadow = m === 'paint'; body.add(mesh); }
  const msls = []; for (let i = 0; i < Math.ceil(J.missiles / 2); i++) { const p = B.pylons[i % B.pylons.length]; [-1, 1].forEach(s => { const m = missileMesh(); m.position.set(s * p[0], p[1], p[2] + (i >= B.pylons.length ? 1.2 : 0)); m.castShadow = true; body.add(m); msls.push(m); }); }
  const mk = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, blending: THREE.AdditiveBlending, depthWrite: false });
  const fm = enemy ? (B.fm || (B.fm = mk('#ffa04a', .55))) : mk('#ffa04a', .6), cm = enemy ? (B.cm || (B.cm = mk('#a9e2ff', .8))) : mk('#a9e2ff', .85);
  const gm = enemy ? (B.gm || (B.gm = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffb066', opacity: .7, blending: THREE.AdditiveBlending, depthWrite: false }))) : new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffb066', opacity: .8, blending: THREE.AdditiveBlending, depthWrite: false });
  const flames = [], glows = [];
  A.ex.forEach(x => { const f = new THREE.Mesh(flameGeo, fm), c = new THREE.Mesh(coreGeo, cm), s = new THREE.Sprite(gm), sc = A.nr / .5;
    f.scale.setScalar(sc); c.scale.setScalar(sc); f.position.set(x, A.ey, A.tailZ + .9 * A.k); c.position.copy(f.position); s.position.set(x, A.ey, A.tailZ + .7 * A.k); s.scale.setScalar(A.nr * 4.5); body.add(f, c, s); flames.push(f, c); glows.push(s); });
  const strobe = new THREE.Sprite(B.sm || (B.sm = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffffff', blending: THREE.AdditiveBlending, depthWrite: false }))); strobe.scale.setScalar(2.4); strobe.position.set(0, -.5 * A.k, -A.L * .05); body.add(strobe);
  root.userData = { def: J, body, flames, glows, msls, strobe, len: A.L, flameMat: fm, coreMat: cm, glowMat: gm };
  return root;
}
let MG = null, MM = null;
function missileGeometry() {
  if (MG) return MG;
  const prof = [[0, -1.66], [.085, -1.66], [.11, -1.6], [.11, 1.15], [.1, 1.32], [.075, 1.5], [.04, 1.62], [0, 1.68]].map(([r, y]) => new THREE.Vector2(r, y));
  const parts = [new THREE.LatheGeometry(prof, 16).rotateX(-Math.PI / 2)];
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4;
    parts.push(aero([[.1, 0, 1.18, 1.62, .06], [.32, 0, 1.42, 1.62, .06]], { nC: 5 }).rotateZ(a), aero([[.1, 0, -1.0, -.72, .06], [.24, 0, -.9, -.76, .06]], { nC: 5 }).rotateZ(a)); }
  return (MG = merge(parts));
}
function missileMaterial() { if (MM) return MM; const c = document.createElement('canvas'); c.width = 64; c.height = 8; const g = c.getContext('2d'); g.fillStyle = '#ececec'; g.fillRect(0, 0, 64, 8); g.fillStyle = '#d9b43a'; g.fillRect(10, 0, 3, 8); g.fillStyle = '#5b5e63'; g.fillRect(0, 0, 6, 8);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return (MM = new THREE.MeshStandardMaterial({ map: t, roughness: .4, metalness: .2 })); }
export function missileMesh() { return new THREE.Mesh(missileGeometry(), missileMaterial()); }
export function warmUp() { Object.keys(JETS).forEach(t => getBuilt(t, 'red', true)); }

/* ---------------------------------------------------------------- bombers / boss gunship */
const bomberCache = {};
export function buildBomber(boss = false) {
  const key = boss ? 'boss' : 'bomber';
  if (!bomberCache[key]) {
    const L = boss ? 58 : 44, k = L / 44, P = { paint: [], dark: [], metal: [], glass: [], light: [] }, z = t => -L / 2 + t * L;
    P.paint.push(loft([[0, .05, .05, 0, 2], [.03, 1.2, 1.3, .1, 2], [.08, 2.1, 2.3, .3, 2.1], [.16, 2.5, 2.7, .3, 2.2], [.6, 2.5, 2.6, .3, 2.2], [.85, 1.8, 2.0, .8, 2.1], [1, .5, .6, 1.6, 2]].map(([t, w, h, y, n]) => [t, w * k, h * k, y * k, n]), L, 28));
    P.glass.push(loft([[.03, .3, .3, .9, 2], [.06, 1.3, .8, 1.4, 2.2], [.1, 1.4, .7, 1.7, 2.2], [.13, .4, .2, 1.9, 2]].map(([t, w, h, y, n]) => [t, w * k, h * k, y * k, n]), L, 18));
    const span = (boss ? 31 : 24) * k;
    [-1, 1].forEach(s => {
      const w = plate([[s * 2 * k, z(.33)], [s * span, z(.45)], [s * span, z(.5)], [s * 2 * k, z(.52)]], .5 * k, .15 * k); w.translate(0, 2.2 * k, 0); P.paint.push(w);
      [.35, .7].forEach(f => { const x = s * span * f, zz = z(.38 + f * .1); P.paint.push(place(new THREE.CylinderGeometry(.85 * k, .7 * k, 6 * k, 14), x, 1.1 * k, zz, Math.PI / 2)); P.dark.push(place(new THREE.CircleGeometry(.8 * k, 14), x, 1.1 * k, zz - 3 * k - .02, 0, Math.PI, 0)); P.metal.push(place(new THREE.CylinderGeometry(.6 * k, .55 * k, 1 * k, 12, 1, true), x, 1.1 * k, zz + 3.3 * k, Math.PI / 2)); });
      const hs = plate([[s * .3 * k, z(.88)], [s * 8 * k, z(.95)], [s * 8 * k, z(.98)], [s * .3 * k, z(1)]], .25 * k, .1 * k); hs.translate(0, 7.2 * k, 0); P.paint.push(hs);
      P.light.push(place(new THREE.SphereGeometry(.25 * k, 6, 5), s * span, 2.2 * k, z(.5)));
    });
    P.paint.push(place(fin([[0, 0], [4 * k, 6.5 * k], [6.5 * k, 6.5 * k], [6.8 * k, 0]], .35 * k, .12 * k), 0, 1.4 * k, z(.83)));
    // gun turrets
    [[0, 2.9, .3], [0, -2.4, .55], [0, 1.6, .98]].forEach(([x, y, t]) => { P.dark.push(place(new THREE.SphereGeometry(.7 * k, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), x, y * k, z(t), y < 0 ? Math.PI : 0)); P.metal.push(place(new THREE.CylinderGeometry(.08 * k, .08 * k, 2 * k, 6), x + .3 * k, y * k + (y < 0 ? -.4 : .4) * k, z(t) - 1 * k, Math.PI / 2)); });
    const mats = {
      paint: new THREE.MeshStandardMaterial({ map: skinTex('red'), roughness: .55, metalness: .3 }), dark: new THREE.MeshStandardMaterial({ color: '#25282d', roughness: .55, metalness: .45 }),
      metal: new THREE.MeshStandardMaterial({ color: '#6f7379', roughness: .32, metalness: .9 }), glass: new THREE.MeshPhysicalMaterial({ color: '#3a2a12', roughness: .05, metalness: .8, transparent: true, opacity: .85 }), light: new THREE.MeshBasicMaterial({ color: '#ff3a3a' }),
    };
    const geos = {}; for (const m in P) { const g = merge(P[m]); if (g) geos[m] = g; }
    const engines = []; [-1, 1].forEach(s => [.35, .7].forEach(f => engines.push([s * span * f, 1.1 * k, z(.38 + f * .1) + 3.6 * k])));
    bomberCache[key] = { geos, mats, L, k, engines };
  }
  const B = bomberCache[key], root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  for (const m in B.geos) { const mesh = new THREE.Mesh(B.geos[m], B.mats[m]); mesh.castShadow = m !== 'light' && m !== 'glass'; body.add(mesh); }
  const fm = B.fm || (B.fm = new THREE.MeshBasicMaterial({ color: '#ffa04a', transparent: true, opacity: .5, blending: THREE.AdditiveBlending, depthWrite: false }));
  const cm = B.cm || (B.cm = new THREE.MeshBasicMaterial({ color: '#a9e2ff', transparent: true, opacity: .7, blending: THREE.AdditiveBlending, depthWrite: false }));
  const gm = B.gm || (B.gm = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffb066', opacity: .7, blending: THREE.AdditiveBlending, depthWrite: false }));
  const flames = [], glows = [];
  B.engines.forEach(([x, y, zz]) => { const f = new THREE.Mesh(flameGeo, fm), c = new THREE.Mesh(coreGeo, cm), s = new THREE.Sprite(gm), sc = 1.2 * B.k; f.scale.setScalar(sc); c.scale.setScalar(sc); f.position.set(x, y, zz); c.position.set(x, y, zz); s.position.set(x, y, zz - .3); s.scale.setScalar(4 * B.k); body.add(f, c, s); flames.push(f, c); glows.push(s); });
  const strobe = new THREE.Sprite(B.sm || (B.sm = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ff4040', blending: THREE.AdditiveBlending, depthWrite: false }))); strobe.scale.setScalar(5); strobe.position.set(0, 9 * B.k, -B.L * .5 + .9 * B.L); body.add(strobe);
  root.userData = { def: { len: B.L, span: 24 }, body, flames, glows, msls: [], strobe, len: B.L, guns: [[0, 2.9 * B.k, -B.L / 2 + .3 * B.L], [0, -2.4 * B.k, -B.L / 2 + .55 * B.L], [0, 1.6 * B.k, -B.L / 2 + .98 * B.L]] };
  return root;
}
