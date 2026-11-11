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
function airframe(J) {
  const L = J.len, k = L / 15, P = { paint: [], dark: [], metal: [], glass: [], light: [], decal: [], pilot: [], sill: [], helm: [] }, sp = J.span, st = J.style, z = t => -L / 2 + t * L;
  let fus;
  if (st === 'viper') fus = [[0, .01, .01, .05, 2], [.025, .12, .12, .05, 2], [.07, .3, .27, .08, 2.1], [.15, .5, .45, .15, 2.3], [.25, .62, .58, .2, 2.4], [.36, .72, .64, .18, 2.6], [.5, .78, .62, .12, 2.8], [.66, .76, .6, .1, 2.8], [.8, .66, .56, .08, 2.6], [.92, .58, .52, .05, 2.4], [1, .55, .5, .05, 2.2]];
  else if (st === 'raptor') fus = [[0, .01, .01, 0, 2], [.03, .16, .1, 0, 2.2], [.09, .42, .24, .05, 2.6], [.18, .68, .4, .12, 3.2], [.28, .82, .52, .16, 3.4], [.4, 1.25, .54, .1, 3.6], [.55, 1.45, .52, .05, 3.6], [.7, 1.4, .5, .05, 3.4], [.84, 1.3, .44, .02, 3.2], [.94, 1.1, .4, 0, 3], [1, 1.02, .38, 0, 3]];
  else fus = [[0, .01, .01, .1, 2], [.03, .16, .15, .1, 2], [.09, .42, .4, .18, 2.1], [.18, .62, .58, .25, 2.3], [.28, .74, .66, .3, 2.4], [.4, 1.0, .6, .25, 2.8], [.55, 1.35, .55, .15, 3.2], [.7, 1.35, .52, .1, 3.2], [.84, 1.25, .48, .05, 3], [.95, 1.15, .45, 0, 2.8], [1, 1.1, .44, 0, 2.8]];
  P.paint.push(loft(scale5(fus, k), L, 48));
  const noseY = fus[1][3] * k;
  P.dark.push(place(new THREE.ConeGeometry(.12 * k, .5 * k, 12), 0, noseY, z(0) - .05, -Math.PI / 2));
  P.metal.push(place(new THREE.CylinderGeometry(.015, .015, 1.1 * k, 6), 0, noseY, z(0) - .6 * k, Math.PI / 2));
  // canopy
  const top = t => { for (let i = 0; i < fus.length - 1; i++) if (t >= fus[i][0] && t <= fus[i + 1][0]) { const a = (t - fus[i][0]) / (fus[i + 1][0] - fus[i][0]); return ((fus[i][3] + fus[i][2]) * (1 - a) + (fus[i + 1][3] + fus[i + 1][2]) * a) * k; } return 0; };
  const c0 = st === 'viper' ? .09 : .11, c1 = st === 'viper' ? .36 : .33;
  const cs = [[c0, .02, .02], [c0 + .04, .2, .16], [c0 + .1, .32, .3], [(c0 + c1) / 2 + .03, .34, .34], [c1 - .05, .28, .24], [c1, .1, .06]].map(([t, w, h]) => [t, w * k, h * k, top(t) - .06 * k, 2]);
  P.glass.push(loft(cs, L, 32));
  // canopy sill rails, ejection-seat headrest, helmet visor, spine antennas
  const sill = t => top(t) - .07 * k, cw = t => { for (let i = 0; i < cs.length - 1; i++) if (t >= cs[i][0] && t <= cs[i + 1][0]) { const a = (t - cs[i][0]) / (cs[i + 1][0] - cs[i][0]); return cs[i][1] * (1 - a) + cs[i + 1][1] * a; } return 0; };
  [-1, 1].forEach(sd => { const pts = []; for (let i = 0; i <= 14; i++) { const t = c0 + .03 + (c1 - c0 - .06) * i / 14; pts.push(new THREE.Vector3(sd * cw(t) * .97, sill(t) + .02 * k, z(t))); } P.sill.push(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 24, .035 * k, 6)); });
  P.dark.push(place(new THREE.BoxGeometry(.36 * k, .5 * k, .14 * k), 0, top(c0 + .2) + .1 * k, z(c0 + .2)));
  P.helm.push(place(new THREE.SphereGeometry(.165 * k, 14, 8, Math.PI * .25, Math.PI * .5, Math.PI * .3, Math.PI * .32), 0, top(c0 + .14) + .14 * k, z(c0 + .14), 0, Math.PI, 0));
  P.dark.push(place(new THREE.BoxGeometry(.03 * k, .26 * k, .32 * k), 0, top(.48) + .12 * k, z(.48), -.3), place(new THREE.BoxGeometry(.03 * k, .2 * k, .26 * k), 0, -.55 * k, z(.2), .3));
  P.light.push(place(new THREE.BoxGeometry(.04 * k, .5 * k, .05 * k), 0, top(.6) - .02 * k, z(.6)));
  { const tE = c0 + .15, ys = []; for (let t = c0 + .02; t <= c1 - .02; t += .01) ys.push(top(t)); P.cock = { eyeY: top(tE) + .13 * k, eyeZ: z(tE), z0: z(c0 + .025), z1: z(c1 - .025), w: Math.max(...cs.map(c => c[1])) * .9, y0: Math.min(...ys) - .8 * k, y1: Math.max(...ys) + .2 * k, k }; }
  const bowT = c0 + .15; P.paint.push(place(new THREE.TorusGeometry(.33 * k, .028 * k, 6, 20, Math.PI), 0, top(bowT) - .06 * k, z(bowT), 0, 0, 0, 1, 1.02, 1));
  P.pilot.push(place(new THREE.SphereGeometry(.16 * k, 12, 10), 0, top(c0 + .14) + .14 * k, z(c0 + .14)));
  // intakes
  if (st === 'viper') { P.paint.push(loft(scale5([[.33, .4, .26, -.62, 3], [.38, .5, .32, -.62, 3], [.55, .5, .32, -.55, 3], [.68, .4, .28, -.4, 3]], k), L, 20, false)); P.dark.push(place(new THREE.CircleGeometry(.44 * k, 16), 0, -.62 * k, z(.33) + .01, Math.PI, 0, 0, 1, .7, 1)); }
  else [-1, 1].forEach(s => { const w = st === 'raptor' ? .42 : .45, ox = (st === 'raptor' ? .95 : .98) * k; const ink = loft(scale5([[.3, w, .42, -.1, 4], [.36, w + .05, .46, -.12, 4], [.58, w, .44, -.1, 3.4], [.72, w * .6, .3, -.05, 3]], k), L, 18, false); ink.translate(s * ox, 0, 0); P.paint.push(ink);
    P.dark.push(place(new THREE.PlaneGeometry(1.6 * w * k, .84 * k), s * ox, -.11 * k, z(.3) - .01, 0, Math.PI, 0)); });
  if (st !== 'raptor') P.paint.push(loft(scale5([[.36, .02, .02, .55, 2], [.42, .32, .2, .62, 2.4], [.7, .3, .18, .55, 2.4], [.86, .02, .02, .45, 2]], k), L, 16));
  // wings
  const r0 = st === 'raptor' ? .3 : .38, r1 = st === 'raptor' ? .82 : .8, t0 = st === 'viper' ? .66 : .68, t1 = st === 'viper' ? .76 : .8, wy = st === 'viper' ? -.02 * k : 0, rx = (st === 'viper' ? .7 : 1.1) * k;
  [-1, 1].forEach(s => {
    const w = plate([[s * rx, z(r0)], [s * (rx + sp), z(t0)], [s * (rx + sp), z(t1)], [s * rx, z(r1)]], .12 * k, .06 * k); w.translate(0, wy, 0); P.paint.push(w);
    const lx = st === 'viper' ? .5 : .9; const lerx = plate([[s * lx * k * .4, z(.12)], [s * (rx + .4 * k), z(r0 + .02)], [s * rx, z(r0 + .08)], [s * lx * k * .5, z(.3)]], .06 * k, .04 * k); lerx.translate(0, wy + .06 * k, 0); P.paint.push(lerx);
    const hs = plate([[s * rx * .7, z(.84)], [s * (rx + sp * .5), z(.95)], [s * (rx + sp * .5), z(1.0)], [s * rx * .7, z(1.02)]], .08 * k, .04 * k); hs.translate(0, wy - .05 * k, 0); P.paint.push(hs);
    if (J.canard) { const cn = plate([[s * .9 * k, z(.2)], [s * 2.6 * k, z(.27)], [s * 2.6 * k, z(.3)], [s * .9 * k, z(.31)]], .06 * k, .03 * k); cn.translate(0, .3 * k, 0); P.paint.push(cn); }
    P.metal.push(place(new THREE.CylinderGeometry(.06 * k, .06 * k, (t1 - t0) * L * 1.1, 6), s * (rx + sp + .05 * k), wy, z((t0 + t1) / 2), Math.PI / 2));
    P.light.push(place(new THREE.SphereGeometry(.09 * k, 6, 5), s * (rx + sp + .06 * k), wy + .05, z(t1) + .1));
    P.decal.push(place(new THREE.PlaneGeometry(1.1 * k, 1.1 * k), s * (rx + sp * .55), wy + .13 * k, z((t0 + r1) / 2), -Math.PI / 2, 0, 0));
    P.dark.push(place(new THREE.BoxGeometry(.08 * k, .2 * k, 1.2 * k), s * (rx + sp * .55), wy - .14 * k, z(.64)));
  });
  // tails
  const th = (st === 'viper' ? 3.3 : 2.7) * k, tp = [[0, 0], [1.9 * k, th], [2.9 * k, th], [3.3 * k, 0]], tz = z(st === 'viper' ? .74 : .72);
  if (J.twinTail) [-1, 1].forEach(s => { const ox = (st === 'raptor' ? 1.15 : 1.1) * k, cant = st === 'raptor' ? .45 : .12; P.paint.push(place(fin(tp, .1 * k, .05 * k), s * ox, .3 * k, tz, 0, 0, -s * cant)); });
  else P.paint.push(place(fin(tp, .12 * k, .05 * k), 0, .5 * k, tz));
  // engines
  const ex = J.twinEngine ? [-(st === 'raptor' ? .55 : .62) * k, (st === 'raptor' ? .55 : .62) * k] : [0], nr = (J.twinEngine ? .46 : .5) * k, tailZ = L / 2;
  ex.forEach(x => {
    const noz = new THREE.LatheGeometry([[nr * 1.02, 0], [nr * 1.05, .2], [nr * .98, .7 * k], [nr * .86, 1.2 * k], [nr * .8, 1.25 * k], [nr * .72, 1.2 * k], [nr * .75, .3]].map(([a, b]) => new THREE.Vector2(a, b)), 20);
    P.metal.push(place(noz, x, 0, tailZ - .1, Math.PI / 2));
    P.dark.push(place(new THREE.CircleGeometry(nr * .72, 18), x, 0, tailZ + .2 * k));
    if (st === 'raptor') P.paint.push(place(new THREE.BoxGeometry(nr * 2.3, .06 * k, 1.1 * k), x, nr * .9, tailZ + .55 * k));
  });
  if (st === 'viper') { P.paint.push(place(new THREE.CapsuleGeometry(.32 * k, 2.4 * k, 6, 12), 0, -1.05 * k, z(.55), Math.PI / 2)); P.dark.push(place(new THREE.BoxGeometry(.08 * k, .3 * k, .8 * k), 0, -.78 * k, z(.55))); }
  P.dark.push(place(new THREE.BoxGeometry(.06 * k, .1 * k, .5 * k), .55 * k, .3 * k, z(.28)));
  P.dark.push(place(new THREE.BoxGeometry(.04 * k, .3 * k, .2 * k), 0, (st === 'raptor' ? .6 : .9) * k, z(.55)));
  const cock = P.cock; delete P.cock; return { P, ex, nr, tailZ, sp, rx, wy, L, k, cock };
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
    glass: new THREE.MeshPhysicalMaterial({ color: enemy ? '#5a3a10' : '#c9a24a', roughness: .04, metalness: .85, envMapIntensity: 2.2, clearcoat: 1, transparent: true, opacity: .82 }),
    light: new THREE.MeshBasicMaterial({ color: '#fff7e0' }),
    decal: new THREE.MeshStandardMaterial({ map: decal(enemy), transparent: true, roughness: .5, polygonOffset: true, polygonOffsetFactor: -2, depthWrite: false }),
    pilot: new THREE.MeshStandardMaterial({ color: '#e6e6e0', roughness: .4 }),
  };
  mats.sill = mats.dark; mats.helm = mats.dark;
  const geos = {}; for (const m in A.P) { const g = merge(A.P[m]); if (g) { g.computeBoundingSphere(); geos[m] = g; } }
  const pylons = [[A.rx + A.sp + .05 * A.k, A.wy - .2 * A.k, -A.L / 2 + .72 * A.L], [A.rx + A.sp * .55, A.wy - .4 * A.k, -A.L / 2 + .64 * A.L], [A.rx + A.sp * .3, A.wy - .4 * A.k, -A.L / 2 + .6 * A.L], [A.rx * .9, -.7 * A.k, -A.L / 2 + .52 * A.L], [A.rx + A.sp * .78, A.wy - .32 * A.k, -A.L / 2 + .68 * A.L], [.5 * A.k, -.75 * A.k, -A.L / 2 + .42 * A.L]];
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
    f.scale.setScalar(sc); c.scale.setScalar(sc); f.position.set(x, 0, A.tailZ + .9 * A.k); c.position.copy(f.position); s.position.set(x, 0, A.tailZ + .7 * A.k); s.scale.setScalar(A.nr * 4.5); body.add(f, c, s); flames.push(f, c); glows.push(s); });
  const strobe = new THREE.Sprite(B.sm || (B.sm = new THREE.SpriteMaterial({ map: glowTexture(), color: '#ffffff', blending: THREE.AdditiveBlending, depthWrite: false }))); strobe.scale.setScalar(2.4); strobe.position.set(0, -.5 * A.k, -A.L * .05); body.add(strobe);
  root.userData = { def: J, body, flames, glows, msls, strobe, len: A.L, flameMat: fm, coreMat: cm, glowMat: gm };
  return root;
}
let MG = null, MM = null;
function missileGeometry() {
  if (MG) return MG;
  const parts = [new THREE.CylinderGeometry(.11, .11, 2.9, 10).rotateX(Math.PI / 2), new THREE.ConeGeometry(.11, .45, 10).rotateX(-Math.PI / 2).translate(0, 0, -1.67)];
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2 + Math.PI / 4; parts.push(place(new THREE.BoxGeometry(.42, .02, .34), Math.cos(a) * .2, Math.sin(a) * .2, 1.25, 0, 0, a)); parts.push(place(new THREE.BoxGeometry(.24, .02, .2), Math.cos(a) * .14, Math.sin(a) * .14, -.9, 0, 0, a)); }
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
