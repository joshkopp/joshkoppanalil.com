// The friendly airbase plus enemy ground units (SAM launchers, AA guns). Merged per material.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { BASE_H } from './terrain.js';

const M4 = new THREE.Matrix4(), Q = new THREE.Quaternion(), EU = new THREE.Euler(), V = new THREE.Vector3(), SC = new THREE.Vector3();
const put = (g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = [1, 1, 1]) => { M4.compose(V.set(x, y, z), Q.setFromEuler(EU.set(rx, ry, rz)), SC.set(...s)); const n = g.clone().applyMatrix4(M4); return n.index ? n.toNonIndexed() : n; };
const merge = l => { l.forEach(g => { for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); g.clearGroups(); }); return mergeGeometries(l, false); };
function tex(w, h, draw, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } return t; }

export function buildBase() {
  const g = new THREE.Group(), y = BASE_H + .3;
  const rw = tex(2048, 64, (c, w, h) => { c.fillStyle = '#3a3c40'; c.fillRect(0, 0, w, h); for (let i = 0; i < 4000; i++) { c.fillStyle = `rgba(${Math.random() < .5 ? 255 : 0},${Math.random() < .5 ? 255 : 0},${Math.random() < .5 ? 255 : 0},.05)`; c.fillRect(Math.random() * w, Math.random() * h, 2, 1); }
    c.fillStyle = '#e8e8e2'; for (let x = 120; x < w - 120; x += 46) c.fillRect(x, h / 2 - 1, 26, 2); [[10, 1], [w - 50, -1]].forEach(([x0]) => { for (let k = 0; k < 8; k++) c.fillRect(x0, 6 + k * 7, 40, 4); });
    c.fillRect(0, 3, w, 1.5); c.fillRect(0, h - 4.5, w, 1.5); c.fillStyle = 'rgba(20,20,20,.45)'; for (let k = 0; k < 30; k++) c.fillRect(150 + Math.random() * 300, h / 2 - 8 + Math.random() * 16, 60, 2); });
  const runway = new THREE.Mesh(new THREE.PlaneGeometry(2900, 60).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: rw, roughness: .9 })); runway.position.set(0, y, 0); runway.receiveShadow = true; g.add(runway);
  const apronM = new THREE.MeshStandardMaterial({ color: '#7f7a70', roughness: .95 });
  const apron = new THREE.Mesh(new THREE.PlaneGeometry(700, 160).rotateX(-Math.PI / 2), apronM); apron.position.set(-200, y - .05, 170); apron.receiveShadow = true; g.add(apron);
  const twy = new THREE.Mesh(new THREE.PlaneGeometry(26, 90).rotateX(-Math.PI / 2), apronM); twy.position.set(-200, y - .04, 70); g.add(twy);
  const paint = [], dark = [], metal = [], glow = [], white = [];
  for (let k = 0; k < 4; k++) { const hg = new THREE.CylinderGeometry(22, 22, 50, 20, 1, false, 0, Math.PI); paint.push(put(hg, -460 + k * 90, y, 210, 0, Math.PI / 2, Math.PI / 2)); dark.push(put(new THREE.PlaneGeometry(34, 18), -460 + k * 90, y + 9, 184.8, 0, Math.PI, 0)); }
  paint.push(put(new THREE.BoxGeometry(14, 30, 14), 160, y + 15, 210)); glow.push(put(new THREE.BoxGeometry(20, 7, 20), 160, y + 33, 210)); dark.push(put(new THREE.BoxGeometry(22, 1.2, 22), 160, y + 37, 210));
  for (let k = 0; k < 5; k++) white.push(put(new THREE.CylinderGeometry(9, 9, 12, 18), 300 + (k % 3) * 24, y + 6, 190 + Math.floor(k / 3) * 24));
  for (let k = 0; k < 40; k++) glow.push(put(new THREE.SphereGeometry(.9, 6, 4), -1440 + k * 74, y + .5, k % 2 ? 34 : -34));
  paint.push(put(new THREE.BoxGeometry(60, 10, 26), 40, y + 5, 230)); dark.push(put(new THREE.BoxGeometry(62, 1, 28), 40, y + 10.5, 230));
  const mats = { paint: new THREE.MeshStandardMaterial({ color: '#b9ad97', roughness: .8 }), dark: new THREE.MeshStandardMaterial({ color: '#2d3036', roughness: .7 }), metal: new THREE.MeshStandardMaterial({ color: '#8c9097', roughness: .35, metalness: .8 }),
    glow: new THREE.MeshStandardMaterial({ color: '#8fd0ff', emissive: '#4aa8ff', emissiveIntensity: .6, roughness: .2, metalness: .5 }), white: new THREE.MeshStandardMaterial({ color: '#e7e4dc', roughness: .5, metalness: .2 }) };
  for (const [k, l] of Object.entries({ paint, dark, metal, glow, white })) if (l.length) { const m = new THREE.Mesh(merge(l), mats[k]); m.castShadow = m.receiveShadow = true; g.add(m); }
  // radar dish that spins
  const radar = new THREE.Group(); radar.position.set(160, y + 38, 210); const dish = new THREE.Mesh(new THREE.BoxGeometry(14, 4, .8), mats.metal); dish.position.y = 3; radar.add(dish); g.add(radar);
  // flag of the base: a big lime "JK" circle painted on the apron
  const logo = new THREE.Mesh(new THREE.CircleGeometry(30, 40).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: tex(256, 256, (c) => { c.fillStyle = '#b8f36b'; c.beginPath(); c.arc(128, 128, 120, 0, 7); c.fill(); c.fillStyle = '#2b2e33'; c.font = '900 130px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('JK', 128, 136); }), transparent: true, roughness: .8 }));
  logo.position.set(-200, y, 170); g.add(logo);
  g.userData = { radar, center: new THREE.Vector3(0, y, 0), hits: [[-460, 210], [-280, 210], [160, 210], [320, 200], [40, 230], [-200, 170], [500, 0], [-700, 0]] };
  return g;
}
const unitCache = {};
function unit(kind) {
  if (unitCache[kind]) return unitCache[kind];
  const body = [], dark = [], metal = [];
  if (kind === 'sam') {
    body.push(put(new THREE.BoxGeometry(5, 2, 11), 0, 2.2, 0)); body.push(put(new THREE.BoxGeometry(4.6, 2.6, 3), 0, 3.6, -4)); dark.push(put(new THREE.BoxGeometry(4.7, 1.2, 2.6), 0, 4.3, -5.4));
    for (let i = 0; i < 6; i++) dark.push(put(new THREE.CylinderGeometry(.75, .75, 2.2, 10), (i % 2 - .5) * 2.4, 1.2, (Math.floor(i / 2) - 1) * 3.4, 0, 0, Math.PI / 2));
    for (let i = 0; i < 4; i++) metal.push(put(new THREE.CylinderGeometry(.5, .5, 7, 10), (i % 2 - .5) * 1.2, 5.4 + Math.floor(i / 2) * 1.1, 1.5, -.75));
    metal.push(put(new THREE.BoxGeometry(3.4, 2.2, .3), 0, 6.5, -1.5, .3));
  } else {
    body.push(put(new THREE.TorusGeometry(5, 1.4, 6, 18), 0, .8, 0, Math.PI / 2)); body.push(put(new THREE.CylinderGeometry(2.2, 2.6, 2, 14), 0, 1.6, 0));
    dark.push(put(new THREE.BoxGeometry(3, 1.8, 3), 0, 3.2, 0)); [-1, 1].forEach(s => metal.push(put(new THREE.CylinderGeometry(.18, .18, 6, 8), s * .7, 4.2, -3, -1.1)));
  }
  const mats = [new THREE.MeshStandardMaterial({ color: '#8a7a5a', roughness: .85 }), new THREE.MeshStandardMaterial({ color: '#3a3b36', roughness: .7 }), new THREE.MeshStandardMaterial({ color: '#5d6066', roughness: .4, metalness: .7 })];
  return (unitCache[kind] = [merge(body), merge(dark), merge(metal)].map((g, i) => [g, mats[i]]));
}
export function buildUnit(kind) { const g = new THREE.Group(); unit(kind).forEach(([geo, m]) => { const mesh = new THREE.Mesh(geo, m); mesh.castShadow = true; g.add(mesh); }); g.userData = { flames: [], glows: [], msls: [], body: g, strobe: { visible: false } }; return g; }
