// Procedural warships: lofted hull with boot-topping, deck, superstructure, funnels, masts and rotating turrets.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

// turrets: [z fraction of length (+ = bow), superfiring, facing (1 fore / -1 aft)]
export const CLASSES = {
  dd: { id: 'dd', name: 'Destroyer', L: 118, B: 12.5, F: 5.5, D: 4.2, speed: 19.5, accel: .85, turn: .07, hp: 2400, cal: 127, barrels: 1, v0: 800, range: 9500, reload: 3.4, dmg: 230, spread: .009, torp: 4, camDist: 120,
    turrets: [[.34, 0, 1], [.24, 1, 1], [-.27, 1, -1], [-.37, 0, -1]], desc: 'Fast and agile. Quick-firing 127 mm guns and torpedoes.' },
  ca: { id: 'ca', name: 'Heavy Cruiser', L: 186, B: 19, F: 7.5, D: 6.4, speed: 16.5, accel: .5, turn: .045, hp: 5600, cal: 203, barrels: 3, v0: 770, range: 13500, reload: 8.5, dmg: 620, spread: .008, torp: 3, camDist: 170,
    turrets: [[.33, 0, 1], [.24, 1, 1], [-.3, 0, -1]], desc: 'Balanced. Nine 203 mm guns, decent armour, torpedoes.' },
  bb: { id: 'bb', name: 'Battleship', L: 252, B: 33, F: 9.5, D: 10, speed: 13.5, accel: .3, turn: .03, hp: 12500, cal: 406, barrels: 3, v0: 790, range: 17500, reload: 22, dmg: 2250, spread: .0075, torp: 0, camDist: 230,
    turrets: [[.3, 0, 1], [.2, 1, 1], [-.28, 0, -1]], desc: 'Slow and enormous. 406 mm guns that can delete a cruiser.' },
};
// present-day ships for the cinematic (not playable)
export const MODERN = {
  ddg: { id: 'ddg', name: 'Guided-missile Destroyer', L: 155, B: 20, F: 7, D: 6.5, speed: 15, accel: .5, turn: .04, hp: 9000, cal: 127, barrels: 1, v0: 800, range: 14000, reload: 3, dmg: 300, spread: .008, torp: 0, camDist: 190, turrets: [[.35, 0, 1]], modern: true },
  ffg: { id: 'ffg', name: 'Missile Frigate', L: 128, B: 15.5, F: 6, D: 5, speed: 14, accel: .5, turn: .045, hp: 6000, cal: 100, barrels: 1, v0: 800, range: 12000, reload: 3, dmg: 200, spread: .008, torp: 0, camDist: 160, turrets: [[.36, 0, 1]], modern: true },
  cv: { id: 'cv', name: 'Aircraft Carrier', L: 320, B: 40, F: 15, D: 11, speed: 12, accel: .2, turn: .02, hp: 40000, cal: 127, barrels: 1, v0: 800, range: 1, reload: 99, dmg: 0, spread: .01, torp: 0, camDist: 420, turrets: [], modern: true, deckY: 22.4 },
};
Object.assign(CLASSES, MODERN);
const clean = g => { g = g.index ? g.toNonIndexed() : g; for (const n of Object.keys(g.attributes)) if (n !== 'position' && n !== 'normal') g.deleteAttribute(n); return g; };
export function halfBeam(C, u) { const b = C.B / 2; return u < .14 ? b * (.58 + .42 * Math.sqrt(u / .14)) : u > .6 ? b * Math.pow(Math.cos((u - .6) / .4 * Math.PI / 2), .85) : b; }
export function deckH(C, u) { return C.F * (1 + .4 * Math.max(0, (u - .72) / .28) ** 2); }
function hullGeo(C) {
  const S = 44, pos = [], col = [], idx = [], deck = [], didx = [];
  const CC = { g: [.3, .32, .35], k: [.06, .06, .07], r: [.42, .12, .1] }; let R = 0;
  for (let s = 0; s <= S; s++) { const u = s / S, z = (u - .5) * C.L, b = Math.max(.05, halfBeam(C, u)), F = deckH(C, u), D = C.D * (u > .9 ? 1 - (u - .9) / .1 * .65 : 1);
    const ring = [[b, F, 'g'], [b, F * .5, 'g'], [b * .995, .9, 'g'], [b * .99, .35, 'k'], [b * .985, -.3, 'r'], [b * .9, -.45 * D, 'r'], [b * .62, -.85 * D, 'r'], [0, -D, 'r']];
    const full = [...ring, ...ring.slice().reverse().map(([x, y, c]) => [-x, y, c])]; R = full.length;
    full.forEach(([x, y, c]) => { pos.push(x, y, z); col.push(...CC[c]); });
    deck.push(-b, F, z, b, F, z); }
  for (let s = 0; s < S; s++) for (let k = 0; k < R - 1; k++) { const a = s * R + k, b = a + 1, c = a + R, d = c + 1; idx.push(a, c, b, b, c, d); }
  // transom
  const t0 = pos.length / 3; pos.push(0, C.F * .4, -C.L / 2); col.push(...CC.g); for (let k = 0; k < R - 1; k++) idx.push(t0, k, k + 1);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx); g.computeVertexNormals();
  for (let s = 0; s < S; s++) { const a = s * 2; didx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
  const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.Float32BufferAttribute(deck, 3)); dg.setIndex(didx); dg.computeVertexNormals();
  return { hull: g, deck: dg };
}
const box = (w, h, d, x, y, z, ry = 0) => clean(new THREE.BoxGeometry(w, h, d).rotateY(ry).translate(x, y, z));
const cyl = (r1, r2, h, x, y, z, seg = 14, tilt = 0) => clean(new THREE.CylinderGeometry(r1, r2, h, seg).rotateX(tilt).translate(x, y, z));
function superGeo(C) {
  const L = C.L, B = C.B, F = C.F, gray = [], dark = [], glass = [], funnels = [];
  const dz = u => (u - .5) * L, deckAt = u => deckH(C, u);
  if (C.id === 'dd') {
    gray.push(box(B * .55, 5, 13, 0, F + 2.5, dz(.68)), box(B * .4, 3.2, 8, 0, F + 6.6, dz(.69)), box(B * .5, 3, 22, 0, F + 1.5, dz(.36)));
    glass.push(box(B * .41, .9, 8.1, 0, F + 7.4, dz(.69)));
    [.55, .45].forEach(u => { funnels.push([0, F + 9, dz(u)]); gray.push(cyl(1.9, 2.1, 7, 0, F + 4.2, dz(u), 16, -.08)); dark.push(cyl(1.95, 1.95, .8, 0, F + 7.9, dz(u) - .3, 16, -.08)); });
    gray.push(cyl(.35, .45, 16, 0, F + 12, dz(.63)), box(7, .3, .3, 0, F + 16, dz(.63))); dark.push(box(2.6, .9, .9, 0, F + 18.4, dz(.63)));
    [-1, 1].forEach(s => dark.push(...[0, 1, 2].map(k => cyl(.3, .3, 6, s * .8 + (k - 1) * .65, F + 1.2, dz(.5), 8, Math.PI / 2))));
  } else if (C.id === 'ca') {
    gray.push(box(B * .62, 6, 24, 0, F + 3, dz(.6)), box(B * .48, 5, 14, 0, F + 8.5, dz(.62)), box(B * .36, 4, 9, 0, F + 13, dz(.63)), box(B * .6, 5, 22, 0, F + 2.5, dz(.33)), box(B * .4, 4, 10, 0, F + 7, dz(.32)));
    glass.push(box(B * .37, 1, 9.1, 0, F + 13.8, dz(.63)));
    [.5, .43].forEach(u => { funnels.push([0, F + 15, dz(u)]); gray.push(cyl(2.8, 3.2, 11, 0, F + 7, dz(u), 18, -.06)); dark.push(cyl(2.85, 2.85, 1, 0, F + 12.5, dz(u) - .4, 18, -.06)); });
    gray.push(cyl(.5, .7, 22, 0, F + 20, dz(.57)), box(10, .4, .4, 0, F + 25, dz(.57))); dark.push(box(3.4, 1.2, 1.2, 0, F + 31.6, dz(.57)));
  } else {
    gray.push(box(B * .62, 7, 40, 0, F + 3.5, dz(.56)), box(B * .5, 7, 26, 0, F + 10.5, dz(.6)), box(B * .4, 7, 16, 0, F + 17.5, dz(.62)), box(B * .3, 6, 10, 0, F + 24, dz(.63)), box(B * .22, 5, 7, 0, F + 29.5, dz(.635)), box(B * .55, 6, 30, 0, F + 3, dz(.37)), box(B * .36, 5, 12, 0, F + 8.5, dz(.36)));
    glass.push(box(B * .31, 1.2, 10.1, 0, F + 25.5, dz(.63)), box(B * .23, 1, 7.1, 0, F + 30.5, dz(.635)));
    funnels.push([0, F + 22, dz(.47)]); gray.push(cyl(4.5, 5.2, 15, 0, F + 12, dz(.47), 20, -.05)); dark.push(cyl(4.55, 4.55, 1.4, 0, F + 19.4, dz(.47) - .4, 20, -.05));
    gray.push(cyl(.7, 1, 18, 0, F + 40, dz(.62)), box(12, .5, .5, 0, F + 44, dz(.62)));
    [-1, 1].forEach(s => [.6, .5, .4].forEach(u => { gray.push(cyl(2.2, 2.4, 1.4, s * B * .36, F + 7.7, dz(u), 12)); gray.push(box(3.2, 1.6, 3.6, s * B * .36, F + 9, dz(u))); dark.push(cyl(.18, .18, 6, s * B * .36, F + 9.2, dz(u) + 3, 6, Math.PI / 2)); }));
  }
  if (C.id === 'ddg') {
    gray.push(box(B * .72, 9, 30, 0, F + 4.5, dz(.62)), box(B * .5, 6, 18, 0, F + 12, dz(.63)), box(B * .3, 5, 8, 0, F + 17.5, dz(.62)), box(B * .62, 7, 30, 0, F + 3.5, dz(.27)), box(3.2, 6, 6, 0, F + 10, dz(.45)), box(3.2, 6, 6, 0, F + 9.5, dz(.36)));
    gray.push(cyl(.5, .9, 20, 0, F + 29, dz(.6)), box(9, .35, .35, 0, F + 34, dz(.6)), box(6, .3, .3, 0, F + 30, dz(.6)));
    dark.push(box(B * .5, .4, 9, 0, F + .2, dz(.77)), box(B * .5, .4, 8, 0, F + .2, dz(.12)), box(3.4, .6, 3.4, 0, F + 13.3, dz(.45)), box(3.4, .6, 3.4, 0, F + 12.8, dz(.36)));
    dark.push(box(.25, 4.2, 4.2, B * .36, F + 6, dz(.62), 0), box(.25, 4.2, 4.2, -B * .36, F + 6, dz(.62), 0), box(4.2, 4.2, .25, 0, F + 6.5, dz(.62) + 15.1));
    glass.push(box(B * .51, 1.1, .3, 0, F + 13.2, dz(.63) + 9));
    [[.3, F + 7.5], [.66, F + 9.6]].forEach(([u, y]) => { gray.push(cyl(1.3, 1.5, 2.2, 0, y, dz(u), 14)); gray.push(clean(new THREE.SphereGeometry(1.3, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).translate(0, y + 1.1, dz(u)))); });
    funnels.push([0, F + 13.5, dz(.45)], [0, F + 13, dz(.36)]);
  } else if (C.id === 'ffg') {
    gray.push(box(B * .7, 8, 34, 0, F + 4, dz(.55)), box(B * .45, 5, 14, 0, F + 10.5, dz(.6)), cyl(.01, 3.2, 14, 0, F + 20, dz(.58), 4), box(B * .55, 6, 20, 0, F + 3, dz(.24)));
    dark.push(box(B * .48, 1, 6, 0, F + 13.4, dz(.6)), cyl(.6, .6, 6, 0, F + 28, dz(.58), 8));
    glass.push(box(B * .46, 1, .3, 0, F + 11.6, dz(.6) + 7.1));
    [-1, 1].forEach(sd => [0, 1].forEach(k => dark.push(clean(new THREE.BoxGeometry(1.1, 1.1, 7).rotateX(-.35).translate(sd * (2 + k * 1.3), F + 1.6, dz(.42))))));
    funnels.push([0, F + 9, dz(.45)]); gray.push(box(4, 4, 5, 0, F + 7, dz(.45)));
  } else if (C.id === 'cv') {
    const iz = dz(.6); gray.push(box(11, 14, 34, B * .62, C.deckY + 7, iz), box(9, 8, 22, B * .62, C.deckY + 18, iz - 2), box(6, 5, 10, B * .62, C.deckY + 24.5, iz - 3), cyl(.6, .9, 18, B * .62, C.deckY + 34, iz - 3), box(10, .4, .4, B * .62, C.deckY + 38, iz - 3));
    glass.push(box(9.2, 1.2, 22.2, B * .62, C.deckY + 20.5, iz - 2)); dark.push(box(.3, 4, 4, B * .62 - 5.6, C.deckY + 16, iz), box(.3, 4, 4, B * .62 + 5.6, C.deckY + 16, iz), box(3.4, 3, 3.4, B * .62, C.deckY + 28.5, iz - 3));
    funnels.push([B * .62, C.deckY + 22, iz - 8]);
    gray.push(box(B * 1.55, C.deckY - F - 1, L * .86, -B * .05, (C.deckY + F) / 2 - .5, dz(.52)));
  }
  // rails/boats along the deck edges
  return { gray: mergeGeometries(gray), dark: mergeGeometries(dark), glass: mergeGeometries(glass), funnels };
}
function flightDeckTex() { const c = document.createElement('canvas'); c.width = 256; c.height = 1024; const x = c.getContext('2d'); x.fillStyle = '#3a3d40'; x.fillRect(0, 0, 256, 1024);
  for (let k = 0; k < 4000; k++) { x.fillStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '0,0,0'},.05)`; x.fillRect(Math.random() * 256, Math.random() * 1024, 2, 2); }
  x.strokeStyle = '#e8e8e2'; x.lineWidth = 3; x.strokeRect(6, 6, 244, 1012); x.setLineDash([22, 18]); x.beginPath(); x.moveTo(150, 1010); x.lineTo(150, 20); x.stroke();
  x.strokeStyle = '#f2c94c'; x.beginPath(); x.moveTo(40, 1010); x.lineTo(150, 520); x.stroke(); x.setLineDash([]); x.strokeStyle = '#e8e8e2'; x.beginPath(); x.moveTo(20, 980); x.lineTo(120, 500); x.stroke();
  x.fillStyle = '#e8e8e2'; x.font = '900 90px Arial'; x.textAlign = 'center'; x.save(); x.translate(128, 120); x.fillText('77', 0, 30); x.restore();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
const cache = {};
function geos(C) { if (cache[C.id]) return cache[C.id]; const h = hullGeo(C), s = superGeo(C); return cache[C.id] = { ...h, ...s }; }
function turretGeo(C) { const k = C.cal / 406, r = 2 + k * 5.4, len = (C.cal / 1000) * 46;
  const house = mergeGeometries([cyl(r * .95, r, 1.6, 0, .8, 0, 20), box(r * 1.9, r * .78, r * 2.1, 0, 1.6 + r * .39, -r * .1), box(r * 1.6, .3, r * 1.4, 0, 1.6 + r * .8, -r * .3)]);
  const bar = []; for (let b = 0; b < C.barrels; b++) { const x = (b - (C.barrels - 1) / 2) * r * .55; bar.push(cyl(.09 + k * .32, .12 + k * .42, len, x, 0, len / 2, 10, Math.PI / 2)); }
  return { house, bar: mergeGeometries(bar), r, len, by: 1.6 + r * .4, bz: r * .9 }; }
const tcache = {};
export function buildShip(cls, team) {
  const C = CLASSES[cls], G = geos(C), T = tcache[cls] || (tcache[cls] = turretGeo(C)), root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const tone = C.modern ? (team === 'enemy' ? '#5b6066' : '#8b949c') : team === 'enemy' ? '#585c62' : '#6f7884';
  const M = { hull: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .62, metalness: .25 }), deck: new THREE.MeshStandardMaterial({ color: team === 'enemy' ? '#4a4540' : '#5e5244', roughness: .9 }),
    gray: new THREE.MeshStandardMaterial({ color: tone, roughness: .55, metalness: .3 }), dark: new THREE.MeshStandardMaterial({ color: '#1f2226', roughness: .6, metalness: .4 }), glass: new THREE.MeshStandardMaterial({ color: '#0b0e12', roughness: .1, metalness: .6 }) };
  const add = (g, m) => { const me = new THREE.Mesh(g, m); me.castShadow = true; me.receiveShadow = true; body.add(me); return me; };
  add(G.hull, M.hull); add(G.deck, M.deck); add(G.gray, M.gray); add(G.dark, M.dark); add(G.glass, M.glass);
  if (C.id === 'cv') { const fd = new THREE.Mesh(new THREE.BoxGeometry(C.B * 1.75, 1.2, C.L * 1.03), [M.gray, M.gray, new THREE.MeshStandardMaterial({ map: flightDeckTex(), roughness: .8 }), M.gray, M.gray, M.gray]); fd.position.set(-C.B * .08, C.deckY - .6, C.L * .01); fd.castShadow = fd.receiveShadow = true; body.add(fd); }
  const turrets = C.turrets.map(([u, sup, face]) => { const z = u * C.L, y = deckH(C, u + .5) + (sup ? T.r * .9 + 1.4 : 0), g = new THREE.Group(); g.position.set(0, y, z); g.rotation.y = face > 0 ? 0 : Math.PI;
    const h = new THREE.Mesh(T.house, M.gray); h.castShadow = true; g.add(h); if (sup) { const ped = new THREE.Mesh(cyl(T.r * 1.05, T.r * 1.1, T.r * .9 + 1.4, 0, -(T.r * .9 + 1.4) / 2, 0, 20), M.gray); g.add(ped); }
    const piv = new THREE.Group(); piv.position.set(0, T.by, T.bz); const b = new THREE.Mesh(T.bar, M.dark); b.castShadow = true; piv.add(b); g.add(piv); body.add(g);
    return { g, piv, z, y, face, yaw: g.rotation.y, elev: 0, reload: 0, broken: 0, len: T.len }; });
  root.userData = { C, body, turrets, mats: M, funnels: G.funnels };
  return root;
}
// hull hit test in ship-local coordinates (x across, y up, z along)
export function insideHull(C, x, y, z) { const u = z / C.L + .5; if (u < 0 || u > 1) return false; const top = deckH(C, u) + (Math.abs(u - .5) < .2 ? C.F * 1.8 : 1); return y > -C.D && y < top && Math.abs(x) < halfBeam(C, u) + .4; }
