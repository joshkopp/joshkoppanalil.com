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
let geoCache = null;
function bodyGeo() {
  if (geoCache) return geoCache;
  const paint = [], accent = [], carbon = [], black = [], helmet = [], glow = [], chrome = [];
  // nose + monocoque
  paint.push(loft([{ z: 3.0, w: .13, h: .09, y: .26 }, { z: 2.88, w: .2, h: .14, y: .27 }, { z: 2.5, w: .28, h: .2, y: .31 }, { z: 2.0, w: .37, h: .27, y: .37 }, { z: 1.5, w: .47, h: .33, y: .42 }, { z: 1.0, w: .57, h: .4, y: .47 }, { z: .5, w: .66, h: .44, y: .5 }, { z: .1, w: .7, h: .44, y: .5 }, { z: -.38, w: .72, h: .46, y: .5 }, { z: -.6, w: .7, h: .44, y: .5 }], 20, 2.4));
  accent.push(loft([{ z: 3.02, w: .1, h: .07, y: .26 }, { z: 2.95, w: .16, h: .12, y: .265 }, { z: 2.84, w: .215, h: .15, y: .272 }], 16, 2.4)); // nose tip
  // cockpit opening & surround
  black.push(clean(new THREE.CircleGeometry(.5, 24).scale(.42, .82, 1).rotateX(-Math.PI / 2).translate(0, .727, -.02)));
  carbon.push(clean(new THREE.TorusGeometry(.5, .025, 6, 28).scale(.44, .86, 1).rotateX(-Math.PI / 2).translate(0, .73, -.02)));
  // engine cover / airbox
  paint.push(loft([{ z: -.3, w: .3, h: .06, y: .95 }, { z: -.31, w: .42, h: .46, y: .8 }, { z: -.4, w: .44, h: .48, y: .8 }, { z: -.6, w: .5, h: .54, y: .77 }, { z: -1.1, w: .52, h: .44, y: .7 }, { z: -1.7, w: .36, h: .32, y: .62 }, { z: -2.2, w: .2, h: .2, y: .55 }, { z: -2.36, w: .1, h: .1, y: .5 }], 18, 2.6));
  black.push(clean(new THREE.CircleGeometry(.5, 18).scale(.2, .13, 1).translate(0, .955, -.295)));
  // sidepods
  paint.push(loft([{ z: .5, w: 1.3, h: .08, y: .46 }, { z: .47, w: 1.5, h: .4, y: .43 }, { z: .1, w: 1.56, h: .43, y: .42 }, { z: -.5, w: 1.44, h: .4, y: .41 }, { z: -1.1, w: 1.04, h: .34, y: .41 }, { z: -1.65, w: .62, h: .3, y: .43 }, { z: -2.1, w: .32, h: .22, y: .46 }], 22, 3.2));
  sym(box(.3, .17, .02, .55, .47, .495)).forEach(g => black.push(g));
  // accent stripe along the sidepod top
  sym(clean(new THREE.PlaneGeometry(.09, 1.7).rotateX(-Math.PI / 2).translate(.52, .64, -.45))).forEach(g => accent.push(g));
  // floor + diffuser + plank
  const fs = new THREE.Shape(); fs.moveTo(-.45, 1.0); fs.lineTo(-.8, .45); fs.lineTo(-.8, -1.3); fs.lineTo(-.52, -1.42); fs.lineTo(-.52, -2.15); fs.lineTo(.52, -2.15); fs.lineTo(.52, -1.42); fs.lineTo(.8, -1.3); fs.lineTo(.8, .45); fs.lineTo(.45, 1.0); fs.closePath();
  carbon.push(clean(new THREE.ExtrudeGeometry(fs, { depth: .03, bevelEnabled: false }).rotateX(Math.PI / 2).translate(0, .1, 0)));
  sym(box(.03, .1, 1.75, .8, .13, -.43)).forEach(g => accent.push(g)); // floor edge wings
  carbon.push(box(1.0, .02, .45, 0, .16, -2.3, -.35));
  for (let k = -2; k <= 2; k++) carbon.push(box(.015, .14, .4, k * .2, .15, -2.3, -.35));
  // front wing
  [[2.86, .085, .22, -.06, 'c'], [2.72, .12, .17, -.25, 'a'], [2.62, .165, .13, -.45, 'a']].forEach(([z, y, ch, r, m]) => (m === 'c' ? carbon : accent).push(box(1.94, .018, ch, 0, y, z, r)));
  sym(box(.016, .24, .52, .975, .15, 2.72)).forEach(g => carbon.push(g));
  sym(box(.012, .17, .28, .25, .17, 2.75)).forEach(g => carbon.push(g)); // pylons
  // rear wing
  sym(box(.02, .58, .62, .5, .83, -2.42)).forEach(g => carbon.push(g));
  paint.push(box(1.0, .025, .32, 0, .9, -2.4, .18));
  carbon.push(box(.9, .02, .14, 0, .45, -2.38, .25));
  carbon.push(box(.04, .46, .1, 0, .65, -2.26));
  glow.push(box(.12, .06, .03, 0, .38, -2.5));
  // shark fin
  const fin = new THREE.Shape(); fin.moveTo(-.6, .9); fin.lineTo(-2.2, .6); fin.lineTo(-2.3, 1.14); fin.lineTo(-1.25, 1.06); fin.closePath();
  paint.push(clean(new THREE.ExtrudeGeometry(fin, { depth: .012, bevelEnabled: false }).rotateY(-Math.PI / 2).translate(.006, 0, 0)));
  // halo
  const hp = [[-.29, .72, -.3], [-.31, .84, -.05], [-.22, .91, .24], [0, .93, .35], [.22, .91, .24], [.31, .84, -.05], [.29, .72, -.3]].map(p => new THREE.Vector3(...p));
  carbon.push(clean(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hp), 24, .032, 8)));
  carbon.push(rod([0, .93, .35], [0, .74, .55], .028));
  // mirrors
  sym(box(.15, .07, .045, .46, .83, .3)).forEach(g => paint.push(g)); sym(clean(new THREE.PlaneGeometry(.13, .055).rotateY(Math.PI).translate(.46, .83, .274))).forEach(g => chrome.push(g)); sym(rod([.34, .68, .28], [.44, .81, .3], .012)).forEach(g => carbon.push(g));
  // suspension
  const susp = (zc, xa, xb, za) => { [[.46, .3], [.31, .25]].forEach(([ya, yb]) => { sym(rod([xa, ya, za + .18], [xb, yb + .12, zc])).forEach(g => carbon.push(g)); sym(rod([xa, ya, za - .18], [xb, yb + .12, zc])).forEach(g => carbon.push(g)); }); sym(rod([xa, .42, za], [xb, .3, zc + .02], .012)).forEach(g => carbon.push(g)); };
  susp(AX.front, .22, .66, AX.front); susp(AX.rear, .3, .6, AX.rear + .05);
  // helmet + visor
  helmet.push(clean(new THREE.SphereGeometry(.14, 18, 12).scale(1, 1.04, 1.13).translate(0, .84, -.07)));
  black.push(clean(new THREE.SphereGeometry(.142, 16, 8, Math.PI / 2 - .85, 1.7, 1.15, .45).scale(1, 1.04, 1.13).translate(0, .84, -.07)));
  black.push(clean(new THREE.CylinderGeometry(.08, .1, .1, 10).translate(0, .73, -.07)));
  const m = arr => mergeGeometries(arr.map(g => g.index ? g.toNonIndexed() : g));
  geoCache = { paint: m(paint), accent: m(accent), carbon: m(carbon), black: m(black), helmet: m(helmet), glow: m(glow), chrome: m(chrome) };
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
  shared.carbon = new THREE.MeshStandardMaterial({ color: '#2a2c30', roughness: .42, metalness: .35 });
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

export function buildCar(team, compound = 'soft', opts = {}) {
  const G = bodyGeo(), S = sharedMats(), root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const phys = (c, r = .32) => new THREE.MeshPhysicalMaterial({ color: c, roughness: r, metalness: .12, clearcoat: 1, clearcoatRoughness: .06, envMapIntensity: .8 });
  const mats = { paint: livery(team), accent: phys(team.accent, .32), helmet: phys(team.helmet, .25), glow: new THREE.MeshStandardMaterial({ color: '#400', emissive: '#ff2020', emissiveIntensity: 1 }) };
  const add = (geo, mat) => { const m = new THREE.Mesh(geo, mat); m.castShadow = true; m.receiveShadow = true; body.add(m); return m; };
  add(G.paint, mats.paint); add(G.accent, mats.accent); add(G.carbon, S.carbon); add(G.black, S.black); const helm = add(G.helmet, mats.helmet); add(G.glow, mats.glow); add(G.chrome, S.chrome);
  // number decals on the fin and the nose
  const dm = new THREE.MeshStandardMaterial({ map: decalTex(team), roughness: .4, metalness: .2, polygonOffset: true, polygonOffsetFactor: -1 });
  [1, -1].forEach(s => { const p = new THREE.Mesh(new THREE.PlaneGeometry(.8, .1), dm); p.position.set(s * .008, 1.01, -1.6); p.rotation.y = s * Math.PI / 2; body.add(p); });
  const nose = new THREE.Mesh(new THREE.PlaneGeometry(.3, .075).rotateZ(Math.PI / 2).rotateX(-Math.PI / 2).rotateX(.16), dm); nose.position.set(0, .588, 1.6); body.add(nose);
  // sponsor decals: sidepods and rear wing
  const spm = new THREE.MeshStandardMaterial({ map: sponsorTex(team), alphaTest: .45, roughness: .35, metalness: .1, polygonOffset: true, polygonOffsetFactor: -2 });
  [1, -1].forEach(s => { const p = new THREE.Mesh(new THREE.PlaneGeometry(.95, .18), spm); p.position.set(s * .768, .47, -.22); p.rotation.y = s * (Math.PI / 2 + .08); body.add(p); });
  const rw = new THREE.Mesh(new THREE.PlaneGeometry(.94, .2).rotateZ(Math.PI).rotateX(-Math.PI / 2).rotateX(.18).translate(0, .914, -2.398), spm); body.add(rw);
  const tcam = new THREE.Mesh(new THREE.BoxGeometry(.1, .055, .15), new THREE.MeshStandardMaterial({ color: team.tcam, roughness: .4 })); tcam.position.set(0, 1.065, -.47); tcam.castShadow = true; body.add(tcam);
  // DRS flap
  const flap = new THREE.Group(); flap.position.set(0, 1.02, -2.28); const fm = new THREE.Mesh(new THREE.BoxGeometry(1.0, .022, .22).translate(0, 0, -.11), mats.accent); fm.castShadow = true; flap.add(fm); flap.rotation.x = .55; body.add(flap);
  // wheels
  const wheels = [], steer = [];
  [[AX.front, .82, .3], [AX.rear, .78, .4]].forEach(([z, x, w], ax) => [1, -1].forEach(s => {
    const piv = new THREE.Group(); piv.position.set(s * x, AX.r, z); const wm = new THREE.Mesh(wheelGeo(w, compound), S.wheel); wm.castShadow = true; wm.add(new THREE.Mesh(ringGeo(w), sidewall(compound))); piv.add(wm); root.add(piv); wheels.push(wm); if (!ax) steer.push(piv); }));
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
  root.userData = { team, body, helm, wheels, steer, flap, mats, glow: mats.glow, sw, swCanvas: scr, swTex: scrTex, leds, blob };
  return root;
}
export function setLeds(car, frac, limiter) { const L = car.userData.leds, a = L.geometry.attributes.color, per = a.count / 10;
  for (let k = 0; k < 10; k++) { const on = frac * 10 > k, c = limiter ? [.2, .4, 1] : k < 4 ? [.1, 1, .2] : k < 7 ? [1, .1, .1] : [.4, .2, 1]; for (let v = 0; v < per; v++) a.setXYZ(k * per + v, ...(on ? c : [.05, .05, .05])); } a.needsUpdate = true; }
