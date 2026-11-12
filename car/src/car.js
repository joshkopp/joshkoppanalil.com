// Procedural open-wheel race car. Shared geometry merged per material slot; each team gets its own materials.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const TEAMS = [
  { id: 'jk', name: 'JK Racing', driver: 'J. Koppanalil', code: 'JKO', num: 7, paint: '#0d0f0d', accent: '#b8f36b', helmet: '#b8f36b' },
  { id: 'rossa', name: 'Scuderia Rossa', driver: 'L. Ferraro', code: 'FER', num: 16, paint: '#c8102e', accent: '#f6d200', helmet: '#f6d200' },
  { id: 'silver', name: 'Silver Arrow', driver: 'H. Weber', code: 'WEB', num: 44, paint: '#b9c2c9', accent: '#00d2be', helmet: '#7a1fd0' },
  { id: 'bull', name: 'Blue Bull', driver: 'M. Vos', code: 'VOS', num: 1, paint: '#14214d', accent: '#ff2740', helmet: '#ffd21f' },
  { id: 'papaya', name: 'Papaya GP', driver: 'O. Prior', code: 'PRI', num: 81, paint: '#ff8000', accent: '#1e2a3a', helmet: '#ff8000' },
  { id: 'verde', name: 'Verde F1', driver: 'F. Alvarez', code: 'ALV', num: 14, paint: '#00594f', accent: '#cedc00', helmet: '#00a3e0' },
  { id: 'azure', name: 'Azure Alpine', driver: 'P. Garnier', code: 'GAR', num: 10, paint: '#1572d9', accent: '#ff87bc', helmet: '#ffffff' },
  { id: 'steel', name: 'Steel Works', driver: 'N. Holm', code: 'HOL', num: 27, paint: '#e8e8e8', accent: '#b6000e', helmet: '#222222' },
  { id: 'oxford', name: 'Oxford Racing', driver: 'A. Albion', code: 'ALB', num: 23, paint: '#0a1e6e', accent: '#e8e8e8', helmet: '#00a0de' },
  { id: 'neon', name: 'Neon Bulls', driver: 'Y. Tanaka', code: 'TAN', num: 22, paint: '#e8e8f8', accent: '#2b4bff', helmet: '#ff2740' },
];
const LIV = { jk: [0, '#ffffff', 'KOPPA ENERGY'], rossa: [2, '#ffffff', 'APEX OIL'], silver: [3, '#111111', 'HELIX'], bull: [1, '#ffd21f', 'ORBIT'], papaya: [1, '#00a0de', 'ZEPHYR'], verde: [0, '#ffffff', 'QUANTA'], azure: [1, '#ffffff', 'SUMMIT AIR'], steel: [3, '#111111', 'VELOCITY'], oxford: [2, '#d4141f', 'LIME TELECOM'], neon: [0, '#ff2740', 'NOVA'] };
TEAMS.forEach((t, k) => { const l = LIV[t.id]; t.pat = l[0]; t.third = l[1]; t.sponsor = l[2]; t.tcam = k % 2 ? '#ffe600' : '#0b0b0b'; });
export const COMPOUND = { soft: '#e8202a', medium: '#f3d11a', hard: '#f2f2f2' };

function loft(secs, M = 18, n = 2.5) {
  const pos = [], idx = [], S = secs.length;
  for (const s of secs) { const e = s.n || n; for (let k = 0; k < M; k++) { const a = k / M * Math.PI * 2, c = Math.cos(a), si = Math.sin(a);
    pos.push((s.x || 0) + Math.sign(c) * Math.abs(c) ** (2 / e) * s.w / 2, s.y + Math.sign(si) * Math.abs(si) ** (2 / e) * s.h / 2, s.z); } }
  for (let i = 0; i < S - 1; i++) for (let k = 0; k < M; k++) { const a = i * M + k, b = i * M + (k + 1) % M, c = a + M, d = b + M; idx.push(a, c, b, b, c, d); }
  const cap = (i, flip) => { const c = pos.length / 3, s = secs[i]; pos.push(s.x || 0, s.y, s.z); for (let k = 0; k < M; k++) { const a = i * M + k, b = i * M + (k + 1) % M; flip ? idx.push(c, b, a) : idx.push(c, a, b); } };
  cap(0, secs[0].z < secs[1].z); cap(S - 1, secs[S - 1].z > secs[S - 2].z);
  const sm = new THREE.BufferGeometry(); sm.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); sm.setIndex(idx); sm.computeVertexNormals(); return clean(sm);
}
function clean(g) { // mergeGeometries needs identical attribute sets
  const out = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(out.attributes)) if (k !== 'position' && k !== 'normal') out.deleteAttribute(k); if (!out.attributes.normal) out.computeVertexNormals(); return out; }
const box = (w, h, d, x, y, z, rx = 0, ry = 0, rz = 0) => clean(new THREE.BoxGeometry(w, h, d).rotateX(rx).rotateY(ry).rotateZ(rz).translate(x, y, z));
function rod(a, b, r = .018) { const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b), d = B.clone().sub(A), g = new THREE.CylinderGeometry(r, r, d.length(), 6);
  g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize())); g.translate((A.x + B.x) / 2, (A.y + B.y) / 2, (A.z + B.z) / 2); return clean(g); }
const mirrorX = g => { const m = g.clone().scale(-1, 1, 1); const p = m.attributes.position; for (let i = 0; i < p.count; i += 3) { // fix winding after mirror
  for (const a of ['position', 'normal']) { const at = m.attributes[a]; if (!at) continue; for (let c = 0; c < 3; c++) { const t = at.getComponent(i + 1, c); at.setComponent(i + 1, c, at.getComponent(i + 2, c)); at.setComponent(i + 2, c, t); } } } m.computeVertexNormals(); return m; };
const sym = g => [g, mirrorX(g)];

export const AX = { front: 1.85, rear: -1.75, r: .36 };
// airfoil loft spanning along X: secs = [x, y, zLE, chord, thick, pitch]; NACA-ish section, closed with tip caps
function foil(secs, nC = 10) {
  const yt = t => 5 * (.2969 * Math.sqrt(t) - .126 * t - .3516 * t * t + .2843 * t ** 3 - .1036 * t ** 4), ring = nC * 2, pos = [], idx = [];
  secs.forEach(([x, y, le, c, th, p = 0]) => { const cp = Math.cos(p), sp = Math.sin(p);
    for (let i = 0; i < ring; i++) { const top = i <= nC, xi = top ? i : ring - i, t = (1 - Math.cos(Math.PI * xi / nC)) / 2, h = Math.max(yt(t) * th * c, .003) * (top ? 1 : -1) + .05 * c * Math.sin(Math.PI * t) * .4;
      const dz = -t * c, dy = h; pos.push(x, y + dy * cp - dz * sp, le + dz * cp + dy * sp); } });
  for (let r = 0; r < secs.length - 1; r++) for (let i = 0; i < ring; i++) { const a = r * ring + i, a1 = r * ring + (i + 1) % ring, b = a + ring, b1 = a1 + ring; idx.push(a, b, a1, a1, b, b1); }
  [0, secs.length - 1].forEach((r, k) => { const c = pos.length / 3; let cx = 0, cy = 0, cz = 0; for (let i = 0; i < ring; i++) { cx += pos[(r * ring + i) * 3]; cy += pos[(r * ring + i) * 3 + 1]; cz += pos[(r * ring + i) * 3 + 2]; }
    pos.push(cx / ring, cy / ring, cz / ring); for (let i = 0; i < ring; i++) k ? idx.push(r * ring + i, c, r * ring + (i + 1) % ring) : idx.push(r * ring + i, r * ring + (i + 1) % ring, c); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  // make sure faces point outward
  const p = g.attributes.position, ix = g.index.array, A = new THREE.Vector3(), B = new THREE.Vector3(), C = new THREE.Vector3(); let vol = 0;
  for (let i = 0; i < ix.length; i += 3) { A.fromBufferAttribute(p, ix[i]); B.fromBufferAttribute(p, ix[i + 1]); C.fromBufferAttribute(p, ix[i + 2]); vol += A.dot(B.cross(C)); }
  if (vol < 0) { for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; } g.computeVertexNormals(); }
  return clean(g);
}
// a wing element that sweeps up toward the tips (front wing / rear wing "spoon")
function sweptFoil(half, y0, rise, le, c, th, p, n = 12, chordTip = 1, sweepZ = 0) { const S = []; for (let k = -n; k <= n; k++) { const u = k / n, a = Math.abs(u) ** 2.4; S.push([u * half, y0 + rise * a, le + sweepZ * a, c * (1 - (1 - chordTip) * a), th, p * (1 - .4 * a)]); } return foil(S); }
// flat plate from a 2D outline (in the Z-Y plane), thickness along X
function plate(pts, t, x) { const sh = new THREE.Shape(); pts.forEach(([z, y], i) => i ? sh.lineTo(z, y) : sh.moveTo(z, y)); sh.closePath();
  return clean(new THREE.ExtrudeGeometry(sh, { depth: t, bevelEnabled: true, bevelThickness: t * .3, bevelSize: t * .3, bevelSegments: 1, curveSegments: 6 }).rotateY(-Math.PI / 2).translate(x + t / 2, 0, 0)); }
let geoCache = null;
function bodyGeo() {
  if (geoCache) return geoCache;
  const B = { paint: [], accent: [], carbon: [], black: [], helmet: [], glow: [], chrome: [] }, FW = { paint: [], accent: [], carbon: [] }, RW = { paint: [], accent: [], carbon: [] };
  // ---- nose: long, slim, drooping onto the front wing
  B.paint.push(loft([{ z: 2.98, w: .12, h: .07, y: .2 }, { z: 2.9, w: .17, h: .11, y: .215 }, { z: 2.6, w: .24, h: .17, y: .26 }, { z: 2.2, w: .31, h: .23, y: .32 }, { z: 1.75, w: .38, h: .29, y: .38 }, { z: 1.3, w: .46, h: .34, y: .43 }, { z: .9, w: .56, h: .4, y: .47 }, { z: .5, w: .64, h: .44, y: .5 }, { z: .1, w: .7, h: .45, y: .505 }, { z: -.38, w: .72, h: .46, y: .505 }, { z: -.6, w: .7, h: .44, y: .5 }], 32, 2.3));
  B.accent.push(loft([{ z: 3.0, w: .08, h: .05, y: .2 }, { z: 2.97, w: .12, h: .075, y: .203 }, { z: 2.88, w: .175, h: .115, y: .217 }], 24, 2.3));
  // cockpit opening, padded surround
  B.black.push(clean(new THREE.CircleGeometry(.5, 32).scale(.42, .82, 1).rotateX(-Math.PI / 2).translate(0, .728, -.02)));
  B.carbon.push(clean(new THREE.TorusGeometry(.5, .028, 8, 36).scale(.44, .86, 1).rotateX(-Math.PI / 2).translate(0, .73, -.02)));
  // ---- engine cover with airbox, roll hoop and cannon taper
  B.paint.push(loft([{ z: -.28, w: .26, h: .05, y: .99 }, { z: -.3, w: .36, h: .36, y: .86 }, { z: -.42, w: .44, h: .5, y: .81 }, { z: -.7, w: .5, h: .54, y: .77 }, { z: -1.1, w: .46, h: .44, y: .71 }, { z: -1.55, w: .34, h: .34, y: .64 }, { z: -1.95, w: .24, h: .25, y: .58 }, { z: -2.3, w: .13, h: .14, y: .52 }, { z: -2.42, w: .06, h: .07, y: .5 }], 28, 2.4));
  B.black.push(clean(new THREE.CircleGeometry(.5, 24).scale(.17, .12, 1).translate(0, .945, -.275)));
  B.carbon.push(clean(new THREE.TorusGeometry(.5, .02, 6, 24).scale(.18, .13, 1).translate(0, .945, -.277)));
  // ---- sidepods: wide letterbox inlet, deep undercut, downwash ramp into the coke bottle
  [1, -1].forEach(s => { const sp = loft([{ z: .42, w: .42, h: .08, y: .52 }, { z: .4, w: .46, h: .32, y: .5 }, { z: .2, w: .5, h: .36, y: .5 }, { z: -.2, w: .48, h: .34, y: .5 }, { z: -.7, w: .42, h: .3, y: .49 }, { z: -1.2, w: .3, h: .24, y: .46 }, { z: -1.65, w: .16, h: .16, y: .42 }].map(q => ({ ...q, x: s * (.36 + q.w / 2 - .02) })), 28, 2.7); B.paint.push(sp);
    B.black.push(clean(new THREE.CircleGeometry(.5, 24).scale(.4, .26, 1).translate(s * .57, .5, .405)));
    // undercut panel (dark) beneath the sidepod
    B.carbon.push(loft([{ z: .38, w: .42, h: .06, y: .3 }, { z: -.4, w: .4, h: .06, y: .3 }, { z: -1.2, w: .26, h: .05, y: .3 }].map(q => ({ ...q, x: s * (.36 + q.w / 2) })), 12, 3)); });
  // engine cover coke-bottle strake + accent stripe
  [1, -1].forEach(s => B.accent.push(clean(new THREE.PlaneGeometry(.06, 1.5).rotateX(-Math.PI / 2).rotateZ(s * .12).translate(s * .58, .677, -.38))));
  // ---- floor: curved edge, edge wing, fences under the nose, big diffuser
  const fs = new THREE.Shape(); fs.moveTo(-.38, 1.05); fs.bezierCurveTo(-.7, .9, -.86, .55, -.86, .2); fs.lineTo(-.86, -1.1); fs.bezierCurveTo(-.86, -1.35, -.6, -1.45, -.56, -1.6); fs.lineTo(-.54, -2.2); fs.lineTo(.54, -2.2); fs.lineTo(.56, -1.6); fs.bezierCurveTo(.6, -1.45, .86, -1.35, .86, -1.1); fs.lineTo(.86, .2); fs.bezierCurveTo(.86, .55, .7, .9, .38, 1.05); fs.closePath();
  B.carbon.push(clean(new THREE.ExtrudeGeometry(fs, { depth: .025, bevelEnabled: false, curveSegments: 10 }).rotateX(Math.PI / 2).translate(0, .095, 0)));
  [1, -1].forEach(s => { B.accent.push(foil([[s * .83, .13, .5, .9, .06, -.05], [s * .88, .14, .4, .8, .06, -.05]].sort((p, q) => p[0] - q[0]), 6));
    for (let k = 0; k < 3; k++) B.carbon.push(plate([[1.0, .095], [.98, .2], [.55, .16], [.5, .095]], .012, s * (.18 + k * .07))); });
  B.carbon.push(foil([[-.52, .26, -2.18, .32, .05, -.55], [.52, .26, -2.18, .32, .05, -.55]], 8));
  for (let k = -2; k <= 2; k++) B.carbon.push(plate([[-2.0, .1], [-2.48, .28], [-2.48, .12], [-2.2, .095]], .012, k * .2));
  // rear crash structure + rain light
  B.carbon.push(loft([{ z: -2.2, w: .22, h: .14, y: .38 }, { z: -2.5, w: .14, h: .1, y: .38 }, { z: -2.56, w: .08, h: .06, y: .38 }], 12, 2.6));
  B.glow.push(box(.12, .05, .025, 0, .38, -2.565));
  // ---- shark fin
  const fin = new THREE.Shape(); fin.moveTo(-.55, .98); fin.bezierCurveTo(-1.2, .98, -1.9, .84, -2.2, .62); fin.lineTo(-2.26, 1.14); fin.bezierCurveTo(-1.8, 1.12, -1.2, 1.08, -.55, .98);
  B.paint.push(clean(new THREE.ExtrudeGeometry(fin, { depth: .012, bevelEnabled: false, curveSegments: 10 }).rotateY(-Math.PI / 2).translate(.006, 0, 0)));
  // ---- halo with fairing + mirrors on stalks
  const hp = [[-.29, .72, -.3], [-.31, .84, -.05], [-.22, .91, .24], [0, .93, .35], [.22, .91, .24], [.31, .84, -.05], [.29, .72, -.3]].map(p => new THREE.Vector3(...p));
  B.carbon.push(clean(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hp), 40, .033, 10)));
  B.paint.push(clean(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hp.slice(1, 6)), 24, .038, 10).scale(1, .9, 1).translate(0, -.004, 0)));
  B.carbon.push(rod([0, .93, .35], [0, .76, .55], .03));
  [1, -1].forEach(s => { B.paint.push(loft([{ z: .37, w: .16, h: .075, y: .845, x: s * .45 }, { z: .3, w: .17, h: .08, y: .845, x: s * .45 }, { z: .25, w: .15, h: .07, y: .845, x: s * .45 }], 16, 3));
    B.chrome.push(clean(new THREE.PlaneGeometry(.14, .06).rotateY(Math.PI).translate(s * .45, .845, .245))); B.carbon.push(rod([s * .3, .78, .3], [s * .44, .84, .3], .012)); });
  // ---- suspension: wishbones, push/pull rods, brake ducts
  const susp = (zc, xa, xb, za) => { [[.46, .3], [.31, .24]].forEach(([ya, yb]) => [1, -1].forEach(s => { B.carbon.push(foil([[s * xa, ya, za + .2, .05, .3], [s * xb, yb + .12, zc + .02, .05, .3]].sort((p, q) => p[0] - q[0]), 4)); B.carbon.push(foil([[s * xa, ya, za - .14, .05, .3], [s * xb, yb + .12, zc + .02, .05, .3]].sort((p, q) => p[0] - q[0]), 4)); }));
    [1, -1].forEach(s => B.carbon.push(rod([s * xa, .26, za], [s * xb, .5, zc - .02], .013))); };
  susp(AX.front, .2, .62, AX.front); susp(AX.rear, .3, .56, AX.rear + .05);
  [1, -1].forEach(s => { B.carbon.push(loft([{ z: AX.front + .2, w: .07, h: .16, y: .4, x: s * .6 }, { z: AX.front, w: .09, h: .2, y: .38, x: s * .62 }, { z: AX.front - .2, w: .07, h: .16, y: .38, x: s * .6 }], 12, 3));
    // 2022-style wheel-arch winglets over the front tyres
    B.carbon.push(foil([[s * .66, .76, AX.front + .18, .32, .06, .1], [s * .98, .74, AX.front + .14, .26, .06, .1]].sort((p, q) => p[0] - q[0]), 6)); });
  // helmet + visor + HANS
  B.helmet.push(clean(new THREE.SphereGeometry(.14, 24, 16).scale(1, 1.04, 1.13).translate(0, .84, -.07)));
  B.black.push(clean(new THREE.SphereGeometry(.142, 20, 8, Math.PI / 2 - .85, 1.7, 1.15, .45).scale(1, 1.04, 1.13).translate(0, .84, -.07)));
  B.black.push(clean(new THREE.CylinderGeometry(.08, .1, .1, 12).translate(0, .73, -.07)));
  // ---- FRONT WING (detachable): 4 elements sweeping up into shaped endplates
  FW.carbon.push(sweptFoil(.98, .085, .03, 3.0, .3, .06, -.04, 14, .9, -.06));
  [[2.74, .125, .1, .16, -.32, 'a'], [2.6, .17, .16, .13, -.5, 'a'], [2.49, .215, .2, .1, -.7, 'p']].forEach(([le, y, rise, c, p, m]) => (m === 'a' ? FW.accent : FW.paint).push(sweptFoil(.96, y, rise, le, c, .07, p, 14, .7, -.12)));
  [1, -1].forEach(s => { FW.carbon.push(plate([[3.04, .05], [3.04, .2], [2.86, .36], [2.5, .4], [2.38, .3], [2.38, .05]], .014, s * .975));
    FW.accent.push(plate([[3.0, .06], [3.0, .1], [2.42, .1], [2.42, .06]], .016, s * .975)); });
  [1, -1].forEach(s => FW.carbon.push(plate([[2.98, .1], [2.95, .23], [2.62, .26], [2.6, .1]], .012, s * .13)));
  // ---- REAR WING (detachable): spoon mainplane, DRS flap is separate, curved endplates, beam wing
  RW.paint.push(sweptFoil(.5, .86, .06, -2.08, .3, .09, .22, 12, .85, .04));
  RW.carbon.push(foil([[-.5, .44, -2.12, .2, .08, .3], [.5, .44, -2.12, .2, .08, .3]], 8));
  RW.carbon.push(foil([[-.5, .38, -2.24, .14, .08, .35], [.5, .38, -2.24, .14, .08, .35]], 8));
  [1, -1].forEach(s => { RW.carbon.push(plate([[-2.0, .36], [-1.98, .78], [-2.06, 1.02], [-2.2, 1.12], [-2.5, 1.1], [-2.6, .92], [-2.6, .36]], .018, s * .5));
    RW.accent.push(plate([[-2.06, 1.02], [-2.2, 1.12], [-2.5, 1.1], [-2.52, 1.06], [-2.2, 1.07], [-2.08, .98]], .02, s * .5)); });
  RW.carbon.push(plate([[-2.12, .45], [-2.14, .86], [-2.26, .86], [-2.26, .45]], .04, 0));
  const m = arr => arr.length ? mergeGeometries(arr.map(g => g.index ? g.toNonIndexed() : g)) : null;
  const pack = o => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, m(v)]).filter(([, v]) => v));
  geoCache = { ...pack(B), fw: pack(FW), rw: pack(RW) };
  return geoCache;
}

const wheelCache = {};
function wheelGeo(width, compound) {
  const key = width + compound; if (wheelCache[key]) return wheelCache[key];
  const R = AX.r, w = width, h = w / 2, prof = [[.229, -h], [.285, -h], [.29, -h - .001], [.312, -h - .001], [.318, -h], [.335, -h + .008], [.354, -h + .03], R, [.354, h - .03], [.335, h - .008], [.318, h], [.312, h + .001], [.29, h + .001], [.285, h], [.229, h]];
  const pts = []; prof.forEach(p => { if (p === R) { pts.push(new THREE.Vector2(R, -h + .065), new THREE.Vector2(R, h - .065)); } else pts.push(new THREE.Vector2(p[0], p[1])); });
  const tyre = new THREE.LatheGeometry(pts, 36).toNonIndexed();
  const col = [], tc = new THREE.Color('#141416'), sc = new THREE.Color(COMPOUND[compound]), P = tyre.attributes.position;
  for (let i = 0; i < P.count; i += 3) { let stripe = true; for (let k = 0; k < 3; k++) { const x = P.getX(i + k), z = P.getZ(i + k), r = Math.hypot(x, z), y = P.getY(i + k); if (!(r > .287 && r < .316 && Math.abs(y) > h - .002)) stripe = false; } const c = stripe ? sc : tc; for (let k = 0; k < 3; k++) col.push(c.r, c.g, c.b); }
  tyre.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const paintC = (g, c) => { g = g.index ? g.toNonIndexed() : g; for (const k of Object.keys(g.attributes)) if (k !== 'position' && k !== 'normal') g.deleteAttribute(k); const cc = new THREE.Color(c), a = []; for (let i = 0; i < g.attributes.position.count; i++) a.push(cc.r, cc.g, cc.b); g.setAttribute('color', new THREE.Float32BufferAttribute(a, 3)); return g; };
  for (const k of Object.keys(tyre.attributes)) if (!['position', 'normal', 'color'].includes(k)) tyre.deleteAttribute(k);
  const parts = [tyre, paintC(new THREE.CylinderGeometry(.228, .228, w - .03, 24, 1, true), '#26272b'), paintC(new THREE.CylinderGeometry(.2, .2, .01, 24).translate(0, h - .02, 0), '#18191c'), paintC(new THREE.CylinderGeometry(.2, .2, .01, 24).translate(0, -h + .02, 0), '#18191c')];
  for (let k = 0; k < 5; k++) [1, -1].forEach(s => parts.push(paintC(new THREE.BoxGeometry(.035, .012, .19).translate(0, s * (h - .012), .1).rotateY(k / 5 * Math.PI * 2), '#9a9ea6')));
  [1, -1].forEach(s => parts.push(paintC(new THREE.CylinderGeometry(.045, .045, .02, 12).translate(0, s * (h - .008), 0), '#d8b23a')));
  const g = mergeGeometries(parts).rotateZ(Math.PI / 2); wheelCache[key] = g; return g;
}

let carbonTex = null;
function carbonMap() { if (carbonTex) return carbonTex; const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d'); x.fillStyle = '#1a1b1e'; x.fillRect(0, 0, 64, 64);
  for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#24262a' : '#141518'; x.fillRect(i * 8, j * 8, 8, 4); x.fillStyle = (i + j) % 2 ? '#141518' : '#24262a'; x.fillRect(i * 8, j * 8 + 4, 8, 4); }
  carbonTex = new THREE.CanvasTexture(c); carbonTex.wrapS = carbonTex.wrapT = THREE.RepeatWrapping; carbonTex.colorSpace = THREE.SRGBColorSpace; return carbonTex; }
const shared = {};
function sharedMats() {
  if (shared.carbon) return shared;
  const cm = carbonMap(); cm.repeat.set(6, 6); shared.carbon = new THREE.MeshPhysicalMaterial({ color: '#3a3d42', map: cm, roughness: .38, metalness: .3, clearcoat: .6, clearcoatRoughness: .2 });
  shared.black = new THREE.MeshStandardMaterial({ color: '#060607', roughness: .25, metalness: .2 });
  shared.chrome = new THREE.MeshStandardMaterial({ color: '#cfd8e0', roughness: .05, metalness: 1 });
  shared.wheel = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .78, metalness: .1 });
  const sc = document.createElement('canvas'); sc.width = sc.height = 128; const x = sc.getContext('2d'), gr = x.createRadialGradient(64, 64, 4, 64, 64, 64); gr.addColorStop(0, 'rgba(0,0,0,.75)'); gr.addColorStop(.6, 'rgba(0,0,0,.4)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = gr; x.fillRect(0, 0, 128, 128);
  shared.blob = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
  shared.blobGeo = new THREE.PlaneGeometry(2.6, 6.4).rotateX(-Math.PI / 2);
  return shared;
}
function livery(team) {
  const m = new THREE.MeshPhysicalMaterial({ color: team.paint, roughness: .32, metalness: .12, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: .8 });
  const u = { uB: { value: new THREE.Color(team.accent) }, uC: { value: new THREE.Color(team.third) }, uPat: { value: team.pat } };
  m.onBeforeCompile = sh => { Object.assign(sh.uniforms, u);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP; uniform vec3 uB; uniform vec3 uC; uniform float uPat;').replace('#include <color_fragment>', `#include <color_fragment>
      { float y = vLP.y, z = vLP.z, x = abs(vLP.x), m = 0.;
        if (uPat < .5) m = 1. - smoothstep(.43 + z * .035, .45 + z * .035, y);
        else if (uPat < 1.5) m = 1. - smoothstep(.05, .065, abs(y - (.56 + z * .085)));
        else if (uPat < 2.5) m = smoothstep(1.5, 1.9, z) + (1. - smoothstep(-1.6, -1.15, z)) * step(.6, y);
        else m = 1. - smoothstep(.08, .095, x);
        float pin = (1. - smoothstep(.008, .014, abs(y - (.6 + z * .03)))) * step(-1.7, z) * step(z, 1.1) * step(.3, x);
        diffuseColor.rgb = mix(mix(diffuseColor.rgb, uB, clamp(m, 0., 1.)), uC, pin); }`); };
  m.customProgramCacheKey = () => 'livery'; return m;
}
function lum(hex) { const c = new THREE.Color(hex); return .3 * c.r + .59 * c.g + .11 * c.b; }
function sponsorTex(t) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 96; const x = c.getContext('2d'), light = lum(t.paint) > .45;
  x.font = '900 italic 64px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.lineWidth = 6; x.strokeStyle = light ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.5)'; x.strokeText(t.sponsor, 256, 50);
  x.fillStyle = light ? '#111' : '#fff'; x.fillText(t.sponsor, 256, 50);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; return tex;
}
const sideCache = {};
function sidewall(compound) {
  if (sideCache[compound]) return sideCache[compound];
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d'), sc = 128 / .335;
  x.strokeStyle = COMPOUND[compound]; x.lineWidth = 7; [0, Math.PI].forEach(a => { x.beginPath(); x.arc(128, 128, .301 * sc, a + .55, a + 2.6); x.stroke(); });
  x.fillStyle = '#f2f2f2'; x.font = 'bold 19px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle';
  [0, Math.PI].forEach(a0 => { const word = 'NOVA', r = .262 * sc; [...word].forEach((ch, k) => { const a = a0 - .32 + k * .21; x.save(); x.translate(128 + Math.cos(a - Math.PI / 2) * r, 128 + Math.sin(a - Math.PI / 2) * r); x.rotate(a); x.fillText(ch, 0, 0); x.restore(); }); });
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  return sideCache[compound] = new THREE.MeshStandardMaterial({ map: tex, transparent: true, alphaTest: .3, roughness: .7, polygonOffset: true, polygonOffsetFactor: -1 });
}
const ringCache = {};
function ringGeo(w) { if (ringCache[w]) return ringCache[w]; const h = w / 2 + .003; return ringCache[w] = mergeGeometries([new THREE.RingGeometry(.23, .335, 40).rotateY(Math.PI / 2).translate(h, 0, 0), new THREE.RingGeometry(.23, .335, 40).rotateY(-Math.PI / 2).translate(-h, 0, 0)]); }
function decalTex(t) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
  x.fillStyle = t.paint; x.fillRect(0, 0, 256, 64); x.fillStyle = t.accent; x.fillRect(0, 50, 256, 14);
  x.font = '900 italic 44px Arial'; x.textBaseline = 'middle'; x.fillStyle = '#fff'; x.strokeStyle = 'rgba(0,0,0,.55)'; x.lineWidth = 4; x.strokeText(String(t.num), 14, 28); x.fillText(String(t.num), 14, 28);
  x.font = '800 22px Arial'; x.fillStyle = t.accent; x.fillText(t.name.toUpperCase(), 90, 28);
  const tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; return tex;
}

// 18-inch wheel covers (flat disc with a team-colour ring), the tyre spins behind them
const coverCache = {}; function coverGeo() { return coverCache.g || (coverCache.g = new THREE.CircleGeometry(.226, 32)); }
function coverMat(team) { if (coverCache[team.id]) return coverCache[team.id]; const c = document.createElement('canvas'); c.width = c.height = 128; const x = c.getContext('2d');
  x.fillStyle = '#16171a'; x.beginPath(); x.arc(64, 64, 64, 0, 7); x.fill(); x.strokeStyle = team.accent; x.lineWidth = 7; x.beginPath(); x.arc(64, 64, 54, 0, 7); x.stroke();
  x.fillStyle = '#2b2d31'; x.beginPath(); x.arc(64, 64, 16, 0, 7); x.fill(); x.fillStyle = '#d8b23a'; x.beginPath(); x.arc(64, 64, 7, 0, 7); x.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return coverCache[team.id] = new THREE.MeshStandardMaterial({ map: t, roughness: .45, metalness: .5, polygonOffset: true, polygonOffsetFactor: -1 }); }
export function buildCar(team, compound = 'soft', opts = {}) {
  const G = bodyGeo(), S = sharedMats(), root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const phys = (c, r = .32) => new THREE.MeshPhysicalMaterial({ color: c, roughness: r, metalness: .12, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: .8 });
  const mats = { paint: livery(team), accent: phys(team.accent, .32), helmet: phys(team.helmet, .25), glow: new THREE.MeshStandardMaterial({ color: '#400', emissive: '#ff2020', emissiveIntensity: 1 }) };
  const add = (geo, mat) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; body.add(m); return m; };
  add(G.paint, mats.paint); add(G.accent, mats.accent); add(G.carbon, S.carbon); add(G.black, S.black); const helm = add(G.helmet, mats.helmet); add(G.glow, mats.glow); add(G.chrome, S.chrome);
  // detachable wings (realistic damage knocks them off)
  const part = (geos) => { const g = new THREE.Group(); [['paint', mats.paint], ['accent', mats.accent], ['carbon', S.carbon]].forEach(([k, mt]) => { if (!geos[k]) return; const me = new THREE.Mesh(geos[k], mt); me.castShadow = true; g.add(me); }); body.add(g); return g; };
  const fwing = part(G.fw), rwing = part(G.rw);
  // number decals on the fin and the nose
  const dm = new THREE.MeshStandardMaterial({ map: decalTex(team), roughness: .4, metalness: .2, polygonOffset: true, polygonOffsetFactor: -1 });
  [1, -1].forEach(s => { const p = new THREE.Mesh(new THREE.PlaneGeometry(.8, .1), dm); p.position.set(s * .008, .99, -1.55); p.rotation.y = s * Math.PI / 2; body.add(p); });
  const nose = new THREE.Mesh(new THREE.PlaneGeometry(.3, .075).rotateZ(Math.PI / 2).rotateX(-Math.PI / 2).rotateX(.15), dm); nose.position.set(0, .558, 1.6); body.add(nose);
  // sponsor decals: sidepods and rear wing
  const spm = new THREE.MeshStandardMaterial({ map: sponsorTex(team), alphaTest: .45, roughness: .35, metalness: .1, polygonOffset: true, polygonOffsetFactor: -2 });
  [1, -1].forEach(s => { const p = new THREE.Mesh(new THREE.PlaneGeometry(.8, .16), spm); p.position.set(s * .865, .5, -.2); p.rotation.y = s * (Math.PI / 2 + .1); body.add(p); });
  const rw = new THREE.Mesh(new THREE.PlaneGeometry(.9, .2).rotateZ(Math.PI).rotateX(-Math.PI / 2).rotateX(.22).translate(0, .905, -2.21), spm); rwing.add(rw);
  const tcam = new THREE.Mesh(new THREE.BoxGeometry(.1, .055, .15), new THREE.MeshStandardMaterial({ color: team.tcam, roughness: .4 })); tcam.position.set(0, 1.065, -.47); tcam.castShadow = true; body.add(tcam);
  // DRS flap
  const flap = new THREE.Group(); flap.position.set(0, .985, -2.36); const fm = new THREE.Mesh(foil([[-.49, 0, 0, .22, .1, 0], [.49, 0, 0, .22, .1, 0]], 8), mats.accent); fm.castShadow = true; flap.add(fm); flap.rotation.x = .55; rwing.add(flap);
  // wheels
  const wheels = [], steer = [];
  [[AX.front, .82, .3], [AX.rear, .78, .4]].forEach(([z, x, w], ax) => [1, -1].forEach(s => {
    const piv = new THREE.Group(); piv.position.set(s * x, AX.r, z); const wm = new THREE.Mesh(wheelGeo(w, compound), S.wheel); wm.castShadow = true; wm.add(new THREE.Mesh(ringGeo(w), sidewall(compound))); piv.add(wm); const wc = new THREE.Mesh(coverGeo(w), coverMat(team)); wc.position.x = s * (w / 2 + .004); wc.rotation.y = s > 0 ? Math.PI / 2 : -Math.PI / 2; piv.add(wc); root.add(piv); wheels.push(wm); if (!ax) steer.push(piv); }));
  // steering wheel (only shown in cockpit view)
  const sw = new THREE.Group(); sw.position.set(0, .7, .34); sw.rotation.x = -.5;
  const swb = new THREE.Mesh(new THREE.BoxGeometry(.3, .13, .04), S.carbon); sw.add(swb);
  [-1, 1].forEach(s => { const gp = new THREE.Mesh(new THREE.BoxGeometry(.06, .17, .06), S.black); gp.position.set(s * .15, -.01, 0); sw.add(gp); });
  const scr = document.createElement('canvas'); scr.width = 128; scr.height = 48; const scrTex = new THREE.CanvasTexture(scr); scrTex.colorSpace = THREE.SRGBColorSpace;
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(.13, .05), new THREE.MeshBasicMaterial({ map: scrTex, toneMapped: false })); screen.position.set(0, .01, .021); sw.add(screen);
  const ledM = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }), ledG = []; for (let k = 0; k < 10; k++) { const g = new THREE.BoxGeometry(.012, .01, .005).translate(-.055 + k * .0122, .05, .022); ledG.push(g); }
  const leds = new THREE.Mesh(mergeGeometries(ledG), ledM); const lc = new Float32Array(leds.geometry.attributes.position.count * 3); leds.geometry.setAttribute('color', new THREE.BufferAttribute(lc, 3)); sw.add(leds);
  sw.visible = false; body.add(sw);
  // contact shadow
  const blob = new THREE.Mesh(S.blobGeo, S.blob); blob.position.y = .03; blob.renderOrder = 1; root.add(blob);
  root.userData = { team, body, helm, wheels, steer, flap, fwing, rwing, mats, glow: mats.glow, sw, swCanvas: scr, swTex: scrTex, leds, blob };
  return root;
}
export function setLeds(car, frac, limiter) { const L = car.userData.leds, a = L.geometry.attributes.color, per = a.count / 10;
  for (let k = 0; k < 10; k++) { const on = frac * 10 > k, c = limiter ? [.2, .4, 1] : k < 4 ? [.1, 1, .2] : k < 7 ? [1, .1, .1] : [.4, .2, 1]; for (let v = 0; v < per; v++) a.setXYZ(k * per + v, ...(on ? c : [.05, .05, .05])); } a.needsUpdate = true; }
