// Procedural fighter jets. Forward is -Z, up is +Y, right is +X.
import * as THREE from 'three';

export const JETS = {
  viper: { name: 'F-16 Viper', blurb: 'Light and twitchy. Turns on a dime.', len: 15, span: 7.6, twinTail: false, twinEngine: false, canard: false, hp: 90, agility: 1.22, speed: 1.0, missiles: 6, gun: 1 },
  raptor: { name: 'F-22 Raptor', blurb: 'Stealthy all-rounder with thrust vectoring.', len: 17, span: 8.4, twinTail: true, twinEngine: true, canard: false, hp: 110, agility: 1.08, speed: 1.12, missiles: 8, gun: 1.1 },
  striker: { name: 'Su-35 Striker', blurb: 'Heavy hitter. Tough, loads of missiles.', len: 19, span: 9.2, twinTail: true, twinEngine: true, canard: true, hp: 150, agility: .9, speed: 1.0, missiles: 12, gun: 1.25 },
};
export const PAINTS = { gray: ['#8e979f', '#6f7880', 'Air superiority'], desert: ['#c2a173', '#8a6b45', 'Desert camo'], black: ['#2a2d31', '#1a1c1f', 'Night ops'], navy: ['#3d5878', '#2a3f58', 'Navy blue'], red: ['#a8323a', '#3b2a2a', 'Aggressor'] };

function camo(a, b, seed) {
  const c = document.createElement('canvas'); c.width = c.height = 256; const g = c.getContext('2d'); g.fillStyle = a; g.fillRect(0, 0, 256, 256);
  let s = seed; const r = () => (s = (s * 16807) % 2147483647) / 2147483647;
  for (let k = 0; k < 26; k++) { g.fillStyle = b; g.beginPath(); const x = r() * 256, y = r() * 256; g.moveTo(x, y); for (let q = 0; q < 7; q++) g.lineTo(x + (r() - .5) * 90, y + (r() - .5) * 90); g.closePath(); g.fill(); }
  g.strokeStyle = 'rgba(0,0,0,.12)'; g.lineWidth = 1; for (let k = 0; k < 18; k++) { g.beginPath(); const y = r() * 256; g.moveTo(0, y); g.lineTo(256, y); g.stroke(); g.beginPath(); const x = r() * 256; g.moveTo(x, 0); g.lineTo(x, 256); g.stroke(); }
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; return t;
}
function slab(pts, depth, mat) { const s = new THREE.Shape(); s.moveTo(pts[0][0], pts[0][1]); pts.slice(1).forEach(p => s.lineTo(p[0], p[1])); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: depth * .3, bevelSize: Math.min(.12, depth * .5), bevelSegments: 2 }); g.translate(0, 0, -depth / 2); g.computeVertexNormals(); const m = new THREE.Mesh(g, mat); m.castShadow = true; return m; }

export function buildJet(type = 'viper', paint = 'gray', enemy = false) {
  const J = JETS[type] || JETS.viper, P = enemy ? PAINTS.red : (PAINTS[paint] || PAINTS.gray), L = J.len, root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const tex = camo(P[0], P[1], enemy ? 7 : type.length * 31 + paint.length); tex.repeat.set(2, 2);
  const skin = new THREE.MeshStandardMaterial({ map: tex, roughness: .55, metalness: .35 });
  const dark = new THREE.MeshStandardMaterial({ color: '#2b2e33', roughness: .6, metalness: .5 });
  const metal = new THREE.MeshStandardMaterial({ color: '#5d6066', roughness: .3, metalness: .9 });
  // fuselage
  const prof = [[0, 0], [.95, .05], [1.12, 1.5], [1.22, 4], [1.18, 8], [1.02, L * .7], [.72, L * .82], [.3, L * .95], [.04, L]].map(([r, y]) => new THREE.Vector2(r * (L / 15), y));
  const fg = new THREE.LatheGeometry(prof, 22); fg.rotateX(-Math.PI / 2); fg.translate(0, 0, L / 2); fg.scale(1.15, .82, 1);
  const fus = new THREE.Mesh(fg, skin); fus.castShadow = true; body.add(fus);
  // spine + intakes
  const spine = new THREE.Mesh(new THREE.BoxGeometry(.9, .7, L * .45), skin); spine.position.set(0, .7, L * .02); body.add(spine);
  [-1, 1].forEach(s => { const ib = new THREE.Mesh(new THREE.BoxGeometry(.9, 1.0, L * .38), skin); ib.position.set(s * 1.35, -.25, L * .02); body.add(ib); const mouth = new THREE.Mesh(new THREE.BoxGeometry(.8, .9, .1), dark); mouth.position.set(s * 1.35, -.25, -L * .17); body.add(mouth); });
  // canopy
  const glass = new THREE.MeshPhysicalMaterial({ color: enemy ? '#3a2a12' : '#1d2a33', roughness: .05, metalness: .3, clearcoat: 1, transparent: true, opacity: .85, envMapIntensity: 2 });
  const can = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), glass); can.scale.set(.62, .62, 2.3); can.position.set(0, .78, -L * .28); body.add(can);
  // wings
  const sp = J.span, wing = [[0, -L * .12], [sp, L * .2], [sp, L * .3], [0, L * .32]];
  [-1, 1].forEach(s => {
    const w = slab(wing.map(([x, z]) => [x * s, z]), .22, skin); w.rotation.x = Math.PI / 2; w.position.y = -.1; body.add(w);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(.16, 8, 6), new THREE.MeshBasicMaterial({ color: s < 0 ? '#ff2a2a' : '#2aff6a' })); tip.position.set(s * sp, -.1, L * .25); body.add(tip);
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, 3, 6), metal); rail.rotation.x = Math.PI / 2; rail.position.set(s * (sp + .05), -.1, L * .2); body.add(rail);
    const st = slab([[0, L * .36], [s * sp * .45, L * .47], [s * sp * .45, L * .52], [0, L * .5]], .14, skin); st.rotation.x = Math.PI / 2; st.position.y = -.05; body.add(st);
    if (J.canard) { const c = slab([[0, -L * .3], [s * 2.2, -L * .22], [s * 2.2, -L * .19], [0, -L * .2]], .1, skin); c.rotation.x = Math.PI / 2; c.position.y = .2; body.add(c); }
  });
  // tails
  const fin = [[0, 0], [2.3, 4.3], [3.4, 4.3], [3.5, 0]].map(([z, y]) => [z * (L / 15), y * (L / 15) * .9]);
  if (J.twinTail) [-1, 1].forEach(s => { const f = slab(fin.map(([z, y]) => [z, y]), .14, skin); f.rotation.y = -Math.PI / 2; f.position.set(s * 1.4, .4, L * .2); f.rotation.z = s * -.32; body.add(f); });
  else { const f = slab(fin, .16, skin); f.rotation.y = -Math.PI / 2; f.position.set(0, .7, L * .18); body.add(f); }
  // engines
  const nozzles = J.twinEngine ? [-.7, .7] : [0], flames = [];
  const flameMat = new THREE.MeshBasicMaterial({ color: '#ffb35a', transparent: true, opacity: .85, blending: THREE.AdditiveBlending, depthWrite: false });
  const coreMat = new THREE.MeshBasicMaterial({ color: '#9fdcff', transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false });
  nozzles.forEach(x => {
    const nz = new THREE.Mesh(new THREE.CylinderGeometry(.62, .52, 1.6, 16, 1, true), metal); nz.rotation.x = Math.PI / 2; nz.position.set(x, 0, L / 2 + .5); body.add(nz);
    const glow = new THREE.Mesh(new THREE.CircleGeometry(.5, 16), new THREE.MeshBasicMaterial({ color: '#ff8a3a' })); glow.position.set(x, 0, L / 2 + .2); glow.rotation.y = Math.PI; body.add(glow);
    const fl = new THREE.Mesh(new THREE.ConeGeometry(.5, 6, 14, 1, true), flameMat); fl.rotation.x = Math.PI / 2; fl.position.set(x, 0, L / 2 + 4); body.add(fl);
    const core = new THREE.Mesh(new THREE.ConeGeometry(.3, 3.2, 10, 1, true), coreMat); core.rotation.x = Math.PI / 2; core.position.set(x, 0, L / 2 + 2.6); body.add(core);
    flames.push(fl, core);
  });
  // missiles on rails / pylons
  const msls = [], mslMat = new THREE.MeshStandardMaterial({ color: '#e8e8e8', roughness: .4, metalness: .2 });
  const pylons = [[sp + .05, -.1], [sp * .62, -.45], [sp * .38, -.45]].slice(0, Math.ceil(J.missiles / 2 / 2));
  pylons.forEach(([x, y]) => [-1, 1].forEach(s => { const m = missileMesh(mslMat); m.position.set(s * x, y - .18, L * .17); body.add(m); msls.push(m); }));
  const strobe = new THREE.Mesh(new THREE.SphereGeometry(.18, 8, 6), new THREE.MeshBasicMaterial({ color: '#ffffff' })); strobe.position.set(0, J.twinTail ? .9 : 4.7 * (L / 15), L * .42); body.add(strobe);
  root.userData = { def: J, body, flames, msls, strobe, len: L };
  return root;
}
export function missileMesh(mat) {
  const g = new THREE.Group(), m = mat || new THREE.MeshStandardMaterial({ color: '#e8e8e8', roughness: .4, metalness: .2 });
  const b = new THREE.Mesh(new THREE.CylinderGeometry(.13, .13, 3, 8), m); b.rotation.x = Math.PI / 2; g.add(b);
  const n = new THREE.Mesh(new THREE.ConeGeometry(.13, .5, 8), new THREE.MeshStandardMaterial({ color: '#555', roughness: .5 })); n.rotation.x = -Math.PI / 2; n.position.z = -1.75; g.add(n);
  for (let k = 0; k < 4; k++) { const f = new THREE.Mesh(new THREE.BoxGeometry(.5, .03, .4), m); f.rotation.z = k * Math.PI / 2 + Math.PI / 4; f.position.z = 1.3; f.translateX(.22); g.add(f); }
  return g;
}
