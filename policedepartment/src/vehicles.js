// Procedural cars: extruded body + glass cabin + trim + lights. Police interceptor and taxi liveries.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const TYPES = {
  sedan: { w: 1.86, r: .34, wb: 1.42, body: [[-2.35, .3], [-2.42, .66], [-2.3, .93], [-1.15, .99], [1.1, .99], [2.2, .84], [2.42, .62], [2.34, .3]], cabin: [[-1.3, .97], [-.88, 1.43], [.5, 1.43], [1.18, .97]], mass: 1.5, top: 52, acc: 7.5 },
  sports: { w: 1.94, r: .35, wb: 1.38, body: [[-2.25, .3], [-2.32, .62], [-2.2, .86], [-1.0, .92], [1.0, .88], [2.25, .66], [2.36, .46], [2.28, .28]], cabin: [[-1.15, .9], [-.55, 1.24], [.3, 1.25], [1.15, .88]], mass: 1.4, top: 72, acc: 10 },
  suv: { w: 1.96, r: .4, wb: 1.5, body: [[-2.4, .4], [-2.45, .9], [-2.35, 1.12], [-1.4, 1.14], [1.2, 1.14], [2.25, 1.02], [2.45, .8], [2.4, .4]], cabin: [[-2.2, 1.12], [-2.05, 1.72], [.75, 1.74], [1.35, 1.12]], mass: 2, top: 46, acc: 6.5 },
  van: { w: 2.0, r: .38, wb: 1.7, body: [[-2.6, .38], [-2.65, 1.0], [-2.6, 1.2], [1.6, 1.2], [2.55, 1.0], [2.65, .7], [2.6, .38]], cabin: [[-2.55, 1.18], [-2.55, 2.15], [1.45, 2.15], [2.05, 1.18]], mass: 2.6, top: 40, acc: 5 },
};
export const PAINTS = ['#c7cbd1', '#1d1f24', '#7a0f14', '#1b3558', '#e8e8ea', '#4a4f57', '#2f4a32', '#8a6a3a', '#5a1f6a', '#b0b4ba', '#0f2a4a', '#a33b1a'];
const shared = {};
function mats() {
  if (shared.glass) return shared;
  shared.glass = new THREE.MeshPhysicalMaterial({ color: '#0a0d12', roughness: .05, metalness: .2, clearcoat: 1, envMapIntensity: 1.2 });
  shared.trim = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .6, metalness: .3 });
  shared.head = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  const c = document.createElement('canvas'); c.width = 64; c.height = 128; const x = c.getContext('2d'), gr = x.createRadialGradient(32, 18, 2, 32, 40, 70); gr.addColorStop(0, 'rgba(255,240,210,.9)'); gr.addColorStop(.5, 'rgba(255,240,210,.25)'); gr.addColorStop(1, 'rgba(255,240,210,0)'); x.fillStyle = gr; x.fillRect(0, 0, 64, 128);
  shared.beam = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(c), transparent: true, opacity: .55, blending: THREE.AdditiveBlending, depthWrite: false });
  shared.beamGeo = new THREE.PlaneGeometry(4.6, 12).rotateX(-Math.PI / 2).translate(0, .06, 8.2);
  const b = document.createElement('canvas'); b.width = b.height = 64; const y = b.getContext('2d'), g2 = y.createRadialGradient(32, 32, 2, 32, 32, 32); g2.addColorStop(0, 'rgba(0,0,0,.7)'); g2.addColorStop(1, 'rgba(0,0,0,0)'); y.fillStyle = g2; y.fillRect(0, 0, 64, 64);
  shared.blob = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(b), transparent: true, depthWrite: false }); shared.blobGeo = new THREE.PlaneGeometry(2.6, 5.6).rotateX(-Math.PI / 2).translate(0, .04, 0);
  return shared;
}
const col = (g, hex, k = 1) => { g = g.index ? g.toNonIndexed() : g; for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal') g.deleteAttribute(n); const c = new THREE.Color(hex).multiplyScalar(k), a = new Float32Array(g.attributes.position.count * 3); for (let i = 0; i < a.length; i += 3) { a[i] = c.r; a[i + 1] = c.g; a[i + 2] = c.b; } g.setAttribute('color', new THREE.BufferAttribute(a, 3)); return g; };
const clean = g => { g = g.index ? g.toNonIndexed() : g; for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal') g.deleteAttribute(n); return g; };
function extrude(pts, w, bevel = .06) { const s = new THREE.Shape(); pts.forEach(([x, y], k) => k ? s.lineTo(x, y) : s.moveTo(x, y)); s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth: w - bevel * 2, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 3, curveSegments: 4 }).rotateY(-Math.PI / 2).translate((w - bevel * 2) / 2, 0, 0); }
const cache = {};
function geos(type) {
  if (cache[type]) return cache[type]; const T = TYPES[type], w = T.w, front = Math.max(...T.body.map(p => p[0])), rear = Math.min(...T.body.map(p => p[0]));
  const body = clean(extrude(T.body, w, .08)); const cabin = clean(extrude(T.cabin, w - .2, .05));
  const top = T.cabin[1][1], roof = clean(new THREE.BoxGeometry(w - .34, .06, T.cabin[2][0] - T.cabin[1][0] + .1).translate(0, top + .02, (T.cabin[1][0] + T.cabin[2][0]) / 2));
  const trim = [], head = [];
  [T.wb, -T.wb].forEach(z => [1, -1].forEach(s => { trim.push(col(new THREE.CylinderGeometry(T.r, T.r, .26, 16).rotateZ(Math.PI / 2).translate(s * (w / 2 - .1), T.r, z), '#111214'), col(new THREE.CylinderGeometry(T.r * .62, T.r * .62, .27, 12).rotateZ(Math.PI / 2).translate(s * (w / 2 - .09), T.r, z), '#8c9097')); }));
  trim.push(col(new THREE.BoxGeometry(w + .02, .2, .14).translate(0, .38, front - .02), '#16171a'), col(new THREE.BoxGeometry(w + .02, .22, .14).translate(0, .38, rear + .02), '#16171a'), col(new THREE.BoxGeometry(w * .5, .14, .05).translate(0, .62, front + .01), '#08090a'));
  [1, -1].forEach(s => trim.push(col(new THREE.BoxGeometry(.18, .1, .12).translate(s * (w / 2 + .06), .98, T.cabin[0][0] + .35), '#16171a')));
  [1, -1].forEach(s => { head.push(col(new THREE.BoxGeometry(.42, .13, .06).translate(s * (w / 2 - .32), .74, front - .04), '#fff6e0', 2.4)); });
  const tail = [1, -1].map(s => clean(new THREE.BoxGeometry(.38, .12, .06).translate(s * (w / 2 - .28), .8, rear + .03)));
  return cache[type] = { body: mergeGeometries([body, roof]), cabin, trim: mergeGeometries(trim), head: mergeGeometries(head), tail: mergeGeometries(tail), front, rear };
}
function policeLivery(m) {
  m.onBeforeCompile = sh => { sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <color_fragment>', '#include <color_fragment>\nfloat dz = step(abs(vLP.z + .05), 1.15) * step(.36, vLP.y) * step(vLP.y, .94) * step(.5, abs(vLP.x));\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(.92), dz);'); };
  m.customProgramCacheKey = () => 'police'; return m;
}
function textTex(txt, color, bg) { const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d'); if (bg) { x.fillStyle = bg; x.fillRect(0, 0, 256, 64); } x.font = '900 40px Arial'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = color; x.fillText(txt, 128, 34); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; }
let policeDecal = null;

// kind: 'traffic' | 'police' | 'taxi' | 'hero'. Dynamic cars get separate spinning wheels.
export function buildCar(type, paint, kind = 'traffic') {
  const S = mats(), G = geos(type), T = TYPES[type], root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const pm = new THREE.MeshPhysicalMaterial({ color: kind === 'police' ? '#0c0d10' : kind === 'taxi' ? '#f2b705' : paint, roughness: .28, metalness: .5, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1 });
  if (kind === 'police') policeLivery(pm);
  const add = (geo, m, shadow = true) => { const me = new THREE.Mesh(geo, m); me.castShadow = shadow; body.add(me); return me; };
  add(G.body, pm); add(G.cabin, S.glass); add(G.trim, S.trim); add(G.head, S.head, false);
  const tailM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, .05, .04), toneMapped: false }); add(G.tail, tailM, false);
  const beam = new THREE.Mesh(S.beamGeo, S.beam); beam.renderOrder = 2; root.add(beam);
  const blob = new THREE.Mesh(S.blobGeo, S.blob); blob.renderOrder = 1; root.add(blob);
  const ud = { body, paint: pm, tailM, beam, type, T, front: G.front, rear: G.rear, wheels: [], steer: [] };
  if (kind === 'police') {
    if (!policeDecal) policeDecal = new THREE.MeshStandardMaterial({ map: textTex('POLICE', '#0c0d10'), transparent: true, alphaTest: .4, roughness: .4, polygonOffset: true, polygonOffsetFactor: -2 });
    [1, -1].forEach(s => { const d = new THREE.Mesh(new THREE.PlaneGeometry(1.5, .38), policeDecal); d.position.set(s * (T.w / 2 + .012), .68, 0); d.rotation.y = s * Math.PI / 2; body.add(d); });
    const bar = new THREE.Group(); bar.position.set(0, T.cabin[1][1] + .1, (T.cabin[1][0] + T.cabin[2][0]) / 2);
    bar.add(new THREE.Mesh(new THREE.BoxGeometry(1.25, .1, .3), S.trim));
    const red = new THREE.MeshBasicMaterial({ color: new THREE.Color(.25, 0, 0), toneMapped: false }), blue = new THREE.MeshBasicMaterial({ color: new THREE.Color(0, .03, .3), toneMapped: false });
    [[-1, red], [1, blue]].forEach(([s, m]) => { const l = new THREE.Mesh(new THREE.BoxGeometry(.55, .14, .26), m); l.position.set(s * .32, .1, 0); bar.add(l); });
    body.add(bar); ud.red = red; ud.blue = blue;
    const push = new THREE.Mesh(new THREE.BoxGeometry(1.2, .45, .12), S.trim); push.position.set(0, .55, G.front + .12); body.add(push);
  }
  if (kind === 'taxi') { const sign = new THREE.Mesh(new THREE.BoxGeometry(.7, .22, .28), new THREE.MeshBasicMaterial({ map: textTex('TAXI', '#111', '#ffe27a'), toneMapped: false })); sign.position.set(0, T.cabin[1][1] + .16, (T.cabin[1][0] + T.cabin[2][0]) / 2); body.add(sign); }
  return Object.assign(root, { userData: ud });
}
export function setLightbar(car, t, on) { const u = car.userData; if (!u.red) return; const a = on ? (Math.sin(t * 22) > 0 ? 1 : 0) * (Math.floor(t * 3) % 2 ? 1 : .2) : 0, b = on ? (Math.sin(t * 22 + Math.PI) > 0 ? 1 : 0) * (Math.floor(t * 3) % 2 ? .2 : 1) : 0;
  u.red.color.setRGB(.25 + a * 8, a * .3, a * .2); u.blue.color.setRGB(b * .2, .03 + b * 1.2, .3 + b * 9); return [a, b]; }
