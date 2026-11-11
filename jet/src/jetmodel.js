// Procedural fighter jets. Forward is -Z, up is +Y, right is +X.
// Each jet is lofted from superellipse cross-sections, then merged into one mesh per material and cached,
// so a whole aircraft is ~7 draw calls and spawning another one costs almost nothing.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const JETS = {
  viper: { name: 'F-16 Viper', blurb: 'Light and twitchy. Turns on a dime.', len: 15, span: 4.7, twinTail: false, twinEngine: false, canard: false, hp: 90, agility: 1.22, speed: 1.0, missiles: 6, gun: 1, style: 'viper' },
  raptor: { name: 'F-22 Raptor', blurb: 'Stealthy all-rounder with thrust vectoring.', len: 18.5, span: 6.8, twinTail: true, twinEngine: true, canard: false, hp: 110, agility: 1.08, speed: 1.12, missiles: 8, gun: 1.1, style: 'raptor' },
  striker: { name: 'Su-35 Striker', blurb: 'Heavy hitter. Tough, loads of missiles.', len: 21, span: 7.4, twinTail: true, twinEngine: true, canard: true, hp: 150, agility: .9, speed: 1.0, missiles: 12, gun: 1.25, style: 'striker' },
};
export const PAINTS = {
  gray: ['#8d969e', '#6d7680', 'Air superiority', 'two'], desert: ['#b38f62', '#7a5c3b', 'Desert camo', 'camo'], black: ['#2b2e33', '#1c1e21', 'Night ops', 'two'],
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
  else { g.fillStyle = 'rgba(40,44,48,.85)'; g.beginPath(); g.arc(0, 0, 58, 0, 7); g.fill(); g.fillStyle = '#b8f36b'; g.beginPath(); g.arc(0, 0, 44, 0, 7); g.fill(); g.fillStyle = 'rgba(40,44,48,.95)'; g.font = '900 48px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('JK', 0, 3); }
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
// Smooth body of revolution-ish lofts. rows: [t, halfWidth, top, bottom, yChine, topExp, botExp] in metres (already scaled).
function body(tab, L, { rings = 64, seg = 40, x = 0, t0 = tab[0][0], t1 = tab[tab.length - 1][0], cap = false, bias = 1.2 } = {}) {
  const pos = [], uv = [];
  for (let r = 0; r <= rings; r++) {
    const t = t0 + (t1 - t0) * Math.pow(r / rings, bias), w = interp(tab, t, 1), tp = interp(tab, t, 2), bt = interp(tab, t, 3), yc = interp(tab, t, 4), nT = interp(tab, t, 5), nB = interp(tab, t, 6), zz = -L / 2 + t * L;
    for (let i = 0; i <= seg; i++) { const a = i / seg * Math.PI * 2, ca = Math.cos(a), sa = Math.sin(a), up = sa >= 0, e = 2 / (up ? nT : nB);
      pos.push(x + Math.sign(ca) * Math.pow(Math.abs(ca), e) * w, yc + Math.sign(sa) * Math.pow(Math.abs(sa), e) * (up ? tp : bt), zz); uv.push(i / seg * 3, zz / 8); }
  }
  const idx = []; for (let r = 0; r < rings; r++) for (let i = 0; i < seg; i++) { const a = r * (seg + 1) + i, b = a + seg + 1; idx.push(a, a + 1, b, b, a + 1, b + 1); }
  if (cap) { const c = pos.length / 3, zz = -L / 2 + t1 * L; pos.push(x, interp(tab, t1, 4), zz); uv.push(0, 0); const base = rings * (seg + 1); for (let i = 0; i < seg; i++) idx.push(base + i, base + i + 1, c); }
  return finish(pos, uv, idx);
}
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
// make every triangle face outward (signed volume test), then smooth normals
function orient(g) { const p = g.attributes.position, ix = g.index.array, A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(); let vol = 0;
  for (let i = 0; i < ix.length; i += 3) { A.fromBufferAttribute(p, ix[i]); B.fromBufferAttribute(p, ix[i + 1]); C.fromBufferAttribute(p, ix[i + 2]); vol += A.dot(B.cross(C)); }
  if (vol < 0) for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
  g.computeVertexNormals(); return g; }
function mirrorX(g) { const m = g.clone(); m.scale(-1, 1, 1); const ix = m.index.array; for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } m.computeVertexNormals(); return m; }
const both = (g, list) => { list.push(g, mirrorX(g)); };
// a fin built span-wise along +X, stood up; cant tilts its top outward (radians); positioned at (x,y)
function finGeo(secs, cant, x, y, opt) { const g = aero(secs, opt); g.rotateZ(Math.PI / 2 - cant); g.translate(x, y, 0); return g; }
function wingAt(W, f) { const [r, t] = [W[0], W[W.length - 1]], x = r[0] + (t[0] - r[0]) * f; let i = 0; while (i < W.length - 2 && x > W[i + 1][0]) i++; const a = (x - W[i][0]) / (W[i + 1][0] - W[i][0]);
  const s = W[i].map((v, q) => v * (1 - a) + W[i + 1][q] * a); return { x, y: s[1], le: s[2], te: s[3], tr: s[4], c: s[3] - s[2] }; }

function airframe(J) {
  const L = J.len, k = L / 15, P = { paint: [], dark: [], metal: [], glass: [], light: [], decal: [], pilot: [], sill: [], helm: [] }, sp = J.span, st = J.style, z = t => -L / 2 + t * L;
  const K = rows => rows.map(([t, w, a, b, y, n1, n2]) => [t, w * k, a * k, b * k, y * k, n1, n2]);
  let fus, W, HS, VT, ex, ey, nr, canopy;
  if (st === 'viper') {
    fus = K([[0, .004, .004, .004, -.06, 2, 2], [.015, .07, .07, .07, -.055, 2, 2], [.045, .17, .17, .17, -.04, 2, 2], [.09, .29, .29, .3, -.02, 2, 2], [.15, .4, .38, .4, 0, 2.1, 2.2], [.22, .5, .44, .46, 0, 2.2, 2.4], [.29, .58, .48, .5, -.02, 2.2, 2.6], [.36, .74, .54, .52, -.05, 2.2, 2.8],
      [.44, .92, .6, .52, -.06, 2.2, 3], [.55, .96, .62, .52, -.06, 2.2, 3], [.66, .88, .6, .52, -.05, 2.2, 2.9], [.76, .72, .55, .52, -.03, 2.2, 2.6], [.86, .58, .5, .5, 0, 2.1, 2.2], [.95, .51, .48, .48, 0, 2, 2], [1, .5, .47, .47, 0, 2, 2]]);
    W = [[.7, -.06 * k, z(.425), z(.765), .05], [2.4, -.06 * k, z(.53), z(.762), .045], [4.7, -.06 * k, z(.668), z(.755), .04]];
    HS = [[.4, -.05, z(.835), z(.995), .05], [2.75, -.32, z(.935), z(.99), .04]];
    VT = [{ secs: [[0, 0, z(.64), z(.935), .05], [.6 * k, 0, z(.7), z(.935), .05], [2.75 * k, 0, z(.85), z(.94), .045]], x: 0, y: .38 * k, cant: 0 }];
    ex = [0]; ey = 0; nr = .5 * k; canopy = [.085, .355];
  } else if (st === 'raptor') {
    fus = K([[0, .004, .004, .004, -.02, 1.6, 1.6], [.02, .09, .05, .05, -.02, 1.6, 1.6], [.06, .24, .14, .13, 0, 1.7, 1.7], [.11, .38, .25, .21, .02, 1.8, 1.8], [.17, .5, .36, .27, .04, 1.9, 1.9], [.23, .6, .44, .31, .05, 2, 2], [.29, .74, .48, .35, .05, 2.1, 2.2], [.36, 1.08, .5, .42, .02, 2.3, 2.6],
      [.44, 1.34, .5, .46, 0, 2.5, 3], [.56, 1.48, .5, .46, 0, 2.6, 3.2], [.68, 1.46, .48, .44, 0, 2.6, 3.2], [.8, 1.38, .44, .42, 0, 2.5, 3], [.9, 1.22, .4, .38, 0, 2.4, 2.8], [.97, 1.08, .36, .34, 0, 2.4, 2.6], [1, 1.04, .34, .33, 0, 2.4, 2.6]]);
    W = [[1.3 * k, 0, z(.38), z(.81), .045], [6.8, 0, z(.705), z(.772), .035]];
    HS = [[1.05 * k, 0, z(.8), z(1.0), .04], [3.7 * k * .8, 0, z(.935), z(.985), .035]];
    VT = [-1, 1].map(s => ({ secs: [[0, 0, z(.62), z(.86), .045], [2.35 * k, 0, z(.775), z(.885), .04]], x: s * 1.15 * k, y: .3 * k, cant: s * .47 }));
    ex = [-.56 * k, .56 * k]; ey = 0; nr = .44 * k; canopy = [.11, .33];
  } else {
    fus = K([[0, .004, .004, .004, -.14, 2, 2], [.018, .07, .07, .07, -.13, 2, 2], [.05, .18, .18, .18, -.09, 2, 2], [.1, .3, .3, .3, -.02, 2, 2], [.16, .38, .4, .38, .06, 2, 2.1], [.22, .44, .48, .4, .11, 2.1, 2.2], [.29, .52, .52, .38, .14, 2.2, 2.4], [.36, .66, .54, .34, .14, 2.3, 2.8],
      [.44, .94, .5, .28, .12, 2.5, 3.2], [.54, 1.16, .44, .24, .1, 2.8, 3.6], [.66, 1.14, .42, .22, .1, 2.8, 3.6], [.78, .92, .38, .2, .1, 2.6, 3.2], [.88, .5, .3, .18, .08, 2.3, 2.4], [.97, .24, .2, .15, .05, 2, 2], [1.05, .1, .1, .1, .02, 2, 2]]);
    W = [[1.0 * k, .08 * k, z(.445), z(.79), .045], [7.4, .02 * k, z(.715), z(.795), .035]];
    HS = [[1.2 * k, -.18 * k, z(.85), z(1.01), .04], [3.4 * k, -.2 * k, z(.955), z(1.005), .035]];
    VT = [-1, 1].map(s => ({ secs: [[0, 0, z(.655), z(.905), .045], [2.45 * k, 0, z(.85), z(.93), .04]], x: s * 1.18 * k, y: .1 * k, cant: s * .06 }));
    ex = [-.7 * k, .7 * k]; ey = -.25 * k; nr = .44 * k; canopy = [.11, .33];
  }
  const T = t => interp(fus, t, 4) + interp(fus, t, 2), top = t => T(t);
  P.paint.push(body(fus, L, { rings: 90, seg: 44 }));
  // radome tip, pitot, IRST / sensor ball
  P.metal.push(place(new THREE.CylinderGeometry(.01 * k, .018 * k, .6 * k, 8), 0, fus[0][4], z(0) - .27 * k, Math.PI / 2));
  if (st === 'striker') P.glass.push(place(new THREE.SphereGeometry(.12 * k, 14, 10), .18 * k, T(.1) + .02 * k, z(.1)));
  // ---- canopy (bubble), sills, seat, pilot
  const [c0, c1] = canopy;
  const cs = [[c0, .02, .02], [c0 + .03, .17, .16], [c0 + .08, .3, .34], [(c0 + c1) / 2 + .02, .35, .42], [c1 - .07, .3, .32], [c1 - .02, .16, .14], [c1, .04, .03]].map(([t, w, h]) => [t, w * k, h * k, top(t) - .08 * k, 2]);
  P.glass.push(body(cs.map(([t, w, h, y]) => [t, w, h, h * .3, y, 2.1, 2]), L, { rings: 40, seg: 36, bias: 1 }));
  const sill = t => top(t) - .07 * k, cw = t => interp(cs, t, 1);
  [-1, 1].forEach(sd => { const pts = []; for (let i = 0; i <= 14; i++) { const t = c0 + .03 + (c1 - c0 - .06) * i / 14; pts.push(new THREE.Vector3(sd * cw(t) * .97, sill(t) + .02 * k, z(t))); } P.sill.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, .035 * k, 6)); });
  P.dark.push(place(new THREE.CapsuleGeometry(.15 * k, .2 * k, 4, 10), 0, top(c0 + .2) + .02 * k, z(c0 + .2), 0, 0, 0, 1, 1, .45));
  P.helm.push(place(new THREE.SphereGeometry(.165 * k, 14, 8, Math.PI * .25, Math.PI * .5, Math.PI * .3, Math.PI * .32), 0, top(c0 + .14) + .14 * k, z(c0 + .14), 0, Math.PI, 0));
  { const tE = c0 + .15, ys = []; for (let t = c0 + .02; t <= c1 - .02; t += .01) ys.push(top(t)); P.cock = { eyeY: top(tE) + .13 * k, eyeZ: z(tE), z0: z(c0 + .025), z1: z(c1 - .025), w: Math.max(...cs.map(c => c[1])) * .9, y0: Math.min(...ys) - .8 * k, y1: Math.max(...ys) + .2 * k, k }; }
  if (st === 'striker') { const bowT = c0 + .075; P.dark.push(place(new THREE.TorusGeometry(.3 * k, .022 * k, 6, 24, Math.PI), 0, top(bowT) - .06 * k, z(bowT), -.5, 0, 0, 1, .9, 1)); }
  P.pilot.push(place(new THREE.SphereGeometry(.16 * k, 12, 10), 0, top(c0 + .14) + .14 * k, z(c0 + .14)));
  // ---- intakes
  const mouth = (x, y, w, h, t, n = 2.6) => { P.dark.push(place(new THREE.CircleGeometry(1, 28), x, y, z(t) + .18 * k, Math.PI, 0, 0, w * .9, h * .9, 1)); };
  if (st === 'viper') {
    const it = K([[.27, .5, .3, .36, -.68, 2.4, 2.4], [.3, .5, .32, .36, -.68, 2.4, 2.5], [.42, .5, .34, .34, -.62, 2.4, 2.6], [.56, .44, .32, .3, -.5, 2.4, 2.6], [.66, .2, .2, .18, -.38, 2.2, 2.2]]);
    P.paint.push(body(it, L, { rings: 24, seg: 36, bias: 1 })); mouth(0, -.68 * k, .48 * k, .32 * k, .27);
    P.paint.push(place(new THREE.TorusGeometry(1, .04, 6, 32), 0, -.68 * k, z(.27) + .02, 0, 0, 0, .49 * k, .33 * k, k));
  } else if (st === 'raptor') [-1, 1].forEach(s => {
    const it = K([[.26, .34, .44, .44, -.08, 1.7, 1.7], [.3, .38, .46, .46, -.08, 1.8, 1.8], [.4, .38, .46, .46, -.06, 2, 2], [.52, .3, .4, .4, -.04, 2.2, 2.2], [.6, .16, .3, .3, 0, 2.2, 2.2]]);
    const g = body(it, L, { rings: 22, seg: 32, bias: 1 }); g.translate(s * .98 * k, 0, 0); g.rotateZ(0); P.paint.push(g); mouth(s * .98 * k, -.08 * k, .32 * k, .42 * k, .26);
  });
  else [-1, 1].forEach(s => { // Su-style nacelles with square intakes under the LERX
    const nc = K([[.3, .4, .34, .42, -.48, 3.4, 3.6], [.34, .42, .36, .44, -.48, 3.4, 3.6], [.46, .44, .4, .44, -.42, 3, 3], [.6, .46, .42, .45, -.34, 2.6, 2.6], [.76, .46, .44, .45, -.27, 2.3, 2.3], [.9, .46, .46, .46, -.25, 2, 2], [1, .44, .44, .44, -.25, 2, 2]]);
    P.paint.push(body(nc, L, { rings: 50, seg: 36, x: s * .7 * k, bias: 1 })); mouth(s * .7 * k, -.52 * k, .38 * k, .36 * k, .3);
    // ventral fin under each nacelle
    P.paint.push(finGeo([[0, 0, z(.79), z(.88), .06], [.55 * k, 0, z(.84), z(.885), .05]], 0, 0, 0, { nC: 8 }).rotateZ(Math.PI).translate(s * .82 * k, -.62 * k, 0));
  });
  // ---- LERX / strakes blending into the wing root
  if (st === 'viper') both(aero([[.35, -.06 * k, z(.17), z(.47), .06], [.95, -.06 * k, z(.36), z(.48), .05], [1.2, -.06 * k, z(.425), z(.47), .05]], { nC: 12 }), P.paint);
  if (st === 'striker') both(aero([[.3 * k, .1 * k, z(.18), z(.48), .06], [.8 * k, .1 * k, z(.34), z(.5), .05], [1.3 * k, .08 * k, z(.44), z(.5), .05]], { nC: 12 }), P.paint);
  if (st === 'raptor') both(aero([[.5 * k, .02 * k, z(.12), z(.4), .05], [1.1 * k, .02 * k, z(.25), z(.42), .05], [1.4 * k, 0, z(.36), z(.42), .05]], { nC: 12 }), P.paint);
  // ---- wings, flaps hinge lines, tip rails, nav lights
  both(aero(W, { nC: 16, sub: 3 }), P.paint);
  const tip = W[W.length - 1], tipC = tip[3] - tip[2];
  [-1, 1].forEach(s => {
    P.metal.push(place(new THREE.CylinderGeometry(.07, .07, tipC * 1.05, 10), s * (tip[0] + .05), tip[1], (tip[2] + tip[3]) / 2, Math.PI / 2));
    P.light.push(place(new THREE.SphereGeometry(.07 * k, 8, 6), s * (tip[0] + .06), tip[1] + .06, tip[3] - .1));
    // control-surface hinge lines on top of the wing
    const hl = []; for (let f = .05; f <= .96; f += .9 / 12) { const a = wingAt(W, f); hl.push(new THREE.Vector3(s * a.x, a.y + .25 * a.tr * a.c + .004, a.te - a.c * .22)); }
    P.dark.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hl), 16, .008, 3));
    const d = wingAt(W, .58); P.decal.push(place(new THREE.PlaneGeometry(1.1 * k, 1.1 * k), s * d.x, d.y + .4 * d.tr * d.c + .01, (d.le + d.te) / 2 + .1 * d.c, -Math.PI / 2, 0, 0));
  });
  // ---- tails
  both(aero(HS, { nC: 12, sub: 2 }), P.paint);
  VT.forEach(v => { const g = finGeo(v.secs, Math.abs(v.cant), 0, 0, { nC: 14, sub: 2 }); if (v.x < 0) { g.rotateZ(0); P.paint.push(mirrorX(g).translate(v.x, v.y, 0)); } else P.paint.push(g.translate(v.x, v.y, 0)); });
  if (st === 'viper') { // ventral fins + dorsal antenna + tail fin cap
    [-1, 1].forEach(s => P.paint.push(finGeo([[0, 0, z(.79), z(.87), .06], [.55, 0, z(.83), z(.875), .05]], 0, 0, 0, { nC: 8 }).rotateZ(Math.PI + s * .5).translate(s * .45, -.38, 0)));
  }
  // ---- engines: afterburner cans with nozzle "turkey feathers"
  const tailZ = L / 2;
  ex.forEach(x => {
    if (st === 'raptor') { const nz = body([[.94, .5 * k, .34 * k, .34 * k, 0, 5, 5], [1, .46 * k, .3 * k, .3 * k, 0, 5, 5], [1.035, .4 * k, .2 * k, .2 * k, 0, 5, 5]], L, { rings: 8, seg: 32, x, bias: 1 }); P.metal.push(nz); P.dark.push(place(new THREE.PlaneGeometry(.7 * k, .32 * k), x, 0, z(1.03) + .02)); return; }
    const noz = new THREE.LatheGeometry([[nr * .98, 0], [nr * 1.02, .2], [nr * .97, .7 * k], [nr * .86, 1.15 * k], [nr * .82, 1.22 * k], [nr * .74, 1.18 * k], [nr * .76, .3]].map(([a, b]) => new THREE.Vector2(a, b)), 40);
    const pp = noz.attributes.position; for (let i = 0; i < pp.count; i++) { if (pp.getY(i) < .6 * k) continue; const a = Math.atan2(pp.getZ(i), pp.getX(i)), f = 1 + .035 * Math.max(0, Math.cos(a * 14)); pp.setX(i, pp.getX(i) * f); pp.setZ(i, pp.getZ(i) * f); } noz.computeVertexNormals();
    P.metal.push(place(noz, x, ey, tailZ - .25 * k, Math.PI / 2));
    P.dark.push(place(new THREE.CircleGeometry(nr * .74, 28), x, ey, tailZ + .2 * k));
    P.dark.push(place(new THREE.TorusGeometry(nr * .5, nr * .06, 6, 24), x, ey, tailZ + .15 * k)); // flame holder ring
  });
  // ---- antennas / small blades
  const blade = (x, y, t, h, down = false) => { const g = finGeo([[0, 0, z(t), z(t) + .4 * k, .1], [h, 0, z(t) + .16 * k, z(t) + .36 * k, .1]], 0, 0, 0, { nC: 6 }); if (down) g.rotateZ(Math.PI); P.dark.push(g.translate(x, y, 0)); };
  blade(0, T(.5) - .02, .5, .22 * k); blade(0, interp(fus, .22, 4) - interp(fus, .22, 3) + .02, .22, .2 * k, true);
  P.light.push(place(new THREE.BoxGeometry(.035 * k, .03 * k, .5 * k), 0, T(.62) + .005, z(.62)));
  // ---- pylons & missile stations: wingtip first, then outboard → inboard
  const py = [], drop = .32 * k;
  py.push([tip[0] + .05, tip[1] - .17, (tip[2] + tip[3]) / 2]);
  (st === 'striker' ? [.82, .62, .42, .22] : st === 'raptor' ? [.68, .4, .16] : [.72, .45, .2]).forEach(f => { const a = wingAt(W, f), zc = a.le + a.c * .48, by = a.y - .35 * a.tr * a.c;
    [-1, 1].forEach(s => P.paint.push(finGeo([[0, 0, zc - .8, zc + .8, .12], [drop, 0, zc - .6, zc + .7, .12]], 0, 0, 0, { nC: 8 }).rotateZ(Math.PI).translate(s * a.x, by + .02, 0)));
    py.push([a.x, by - drop - .1, zc]); });
  if (st === 'striker') py.push([.7 * k, -.9 * k, z(.55)]);
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
