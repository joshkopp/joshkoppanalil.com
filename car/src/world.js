// Builds the 3D world for a Track: ground, roads, ramps, boost pads, buildings, trees, street lamps, sky.
import * as THREE from 'three';
import { N, CELL, HW, RAMP_H, ROAD, BUILDING, TREE, BOOST, RAMP0, isRoad, isRamp, rng, cellCenter, drawRoad, drawBoost, inShape } from './roads.js';

const roadTexCache = new Map();
export function roadMaterial(mask, renderer) {
  if (roadTexCache.has(mask)) return roadTexCache.get(mask);
  const S = 512, c = document.createElement('canvas'); c.width = c.height = S; drawRoad(c.getContext('2d'), mask, S, { seed: mask * 7 + 3 });
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const m = new THREE.MeshStandardMaterial({ map: t, roughness: .88, metalness: 0, alphaTest: .5, transparent: false, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 });
  roadTexCache.set(mask, m); return m;
}
function canvasTex(w, h, draw, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } return t; }
let grassTex = null;
function grass(renderer) {
  if (grassTex) return grassTex;
  grassTex = canvasTex(256, 256, (g, w, h) => { g.fillStyle = '#4c7a34'; g.fillRect(0, 0, w, h); const r = rng(4);
    for (let k = 0; k < 2600; k++) { const v = r(); g.fillStyle = v < .33 ? 'rgba(98,150,60,.55)' : v < .66 ? 'rgba(52,92,34,.55)' : 'rgba(120,160,70,.35)'; g.fillRect(r() * w, r() * h, 2, 2 + r() * 3); }
    for (let k = 0; k < 18; k++) { g.fillStyle = 'rgba(40,70,25,.18)'; g.beginPath(); g.arc(r() * w, r() * h, 10 + r() * 30, 0, 7); g.fill(); } }, [80, 80]);
  grassTex.anisotropy = renderer.capabilities.getMaxAnisotropy(); return grassTex;
}
const winCache = {};
function windowTex(style, lit) {
  const key = style + (lit ? 'L' : 'D'); if (winCache[key]) return winCache[key];
  const r = rng(style * 13 + (lit ? 1 : 0)); const pal = [['#c9c2b4', '#4b5560'], ['#8a5a44', '#2f3a44'], ['#dfe3e6', '#253445'], ['#58606b', '#1a2430'], ['#c7a37a', '#3b3226']][style];
  const t = canvasTex(128, 256, (g, w, h) => {
    g.fillStyle = lit ? '#000' : pal[0]; g.fillRect(0, 0, w, h);
    const cols = style === 2 ? 6 : 4, rows = 12, cw = w / cols, rh = h / rows;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      if (lit) { const on = r() < .45; g.fillStyle = on ? ['#ffd890', '#fff1c2', '#bfe3ff'][Math.floor(r() * 3)] : '#000'; }
      else g.fillStyle = r() < .15 ? '#6f8293' : pal[1];
      if (style === 2) g.fillRect(x * cw + 1, y * rh + 2, cw - 2, rh - 4); else g.fillRect(x * cw + cw * .2, y * rh + rh * .2, cw * .6, rh * .55);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping; winCache[key] = t; return t;
}
let hazTex = null;
const hazard = () => hazTex || (hazTex = canvasTex(128, 128, (g, w, h) => { g.fillStyle = '#5c6068'; g.fillRect(0, 0, w, h); g.fillStyle = '#f2c84b'; for (let k = -2; k < 6; k++) { g.beginPath(); g.moveTo(k * 32, 0); g.lineTo(k * 32 + 16, 0); g.lineTo(k * 32 + 16 + 64, h); g.lineTo(k * 32 + 64, h); g.closePath(); g.fill(); } g.fillStyle = 'rgba(0,0,0,.15)'; for (let k = 0; k < 300; k++) g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }, [1, 3]));
let glowTex = null;
export const radialTex = () => glowTex || (glowTex = canvasTex(128, 128, (g, w) => { const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.35, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, w, w); }));

export const TIMES = {
  day: { name: 'Day', top: '#2f72d6', mid: '#8dbcf0', hor: '#d9ecff', fog: '#cfe2f4', fogN: 120, fogF: 420, sun: '#fff1dc', sunI: 2.7, sunDir: [-.5, .8, -.35], hemiS: '#cfe7ff', hemiG: '#4d6a35', hemiI: .95, env: .7, win: 0, lamps: 0, exp: 1.0, head: 0 },
  sunset: { name: 'Sunset', top: '#1f2a66', mid: '#d86b6b', hor: '#ffb062', fog: '#e59a78', fogN: 90, fogF: 380, sun: '#ffb26b', sunI: 2.2, sunDir: [-.85, .25, -.4], hemiS: '#ffb38a', hemiG: '#3c3a30', hemiI: .55, env: .45, win: .55, lamps: .6, exp: 1.05, head: .6 },
  night: { name: 'Night', top: '#01030a', mid: '#06102a', hor: '#13284a', fog: '#0b1426', fogN: 60, fogF: 300, sun: '#8ea6e8', sunI: .45, sunDir: [.4, .7, .3], hemiS: '#2b3f73', hemiG: '#0c1010', hemiI: .28, env: .16, win: 1.2, lamps: 1, exp: 1.15, head: 1 },
};

export function buildWorld(track, renderer, timeKey = 'day') {
  const T = TIMES[timeKey] || TIMES.day, root = new THREE.Group(), half = N * CELL / 2;
  const colliders = { boxes: [], circles: [] }, anim = [];
  // sky dome
  const skyMat = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: { top: { value: new THREE.Color(T.top) }, mid: { value: new THREE.Color(T.mid) }, hor: { value: new THREE.Color(T.hor) }, sunDir: { value: new THREE.Vector3(...T.sunDir).normalize() }, sunCol: { value: new THREE.Color(T.sun) }, night: { value: timeKey === 'night' ? 1 : 0 } },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform vec3 top,mid,hor,sunCol,sunDir; uniform float night; varying vec3 vP;
      float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
      void main(){ float y=max(vP.y,0.); vec3 c=mix(hor,mid,smoothstep(0.,.25,y)); c=mix(c,top,smoothstep(.2,.9,y)); if(vP.y<0.) c=hor;
        float s=max(dot(vP,sunDir),0.); c+=sunCol*(pow(s,600.)*3.+pow(s,12.)*.35)*(1.-night*.7);
        if(night>.5){ vec3 q=floor(vP*420.); float st=step(.9975,h(q)); c+=vec3(st)*smoothstep(.05,.4,y); }
        gl_FragColor=vec4(c,1.); }` });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), skyMat); sky.renderOrder = -1; root.add(sky); root.userData.sky = sky;
  // ground
  const gm = new THREE.MeshStandardMaterial({ map: grass(renderer), roughness: 1, color: timeKey === 'night' ? '#9ab09a' : '#ffffff' });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), gm); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; root.add(ground);
  // boundary: low hedge wall around the playable square
  const hedgeM = new THREE.MeshStandardMaterial({ color: '#2f5a2a', roughness: .95 });
  [[0, -half - 1, N * CELL + 4, 2], [0, half + 1, N * CELL + 4, 2], [-half - 1, 0, 2, N * CELL + 4], [half + 1, 0, 2, N * CELL + 4]].forEach(([x, z, w, d]) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.6, d), hedgeM); m.position.set(x, .8, z); m.castShadow = m.receiveShadow = true; root.add(m); });
  // roads
  const plane = new THREE.PlaneGeometry(CELL, CELL); plane.rotateX(-Math.PI / 2);
  const boostCanvas = document.createElement('canvas'); boostCanvas.width = boostCanvas.height = 256; const boostTex = new THREE.CanvasTexture(boostCanvas); boostTex.colorSpace = THREE.SRGBColorSpace;
  const boostMat = new THREE.MeshBasicMaterial({ map: boostTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  anim.push(t => { const g = boostCanvas.getContext('2d'); g.clearRect(0, 0, 256, 256); drawBoost(g, 256, t * 1.6); boostTex.needsUpdate = true; });
  const rampTop = new THREE.MeshStandardMaterial({ map: hazard(), roughness: .7 }), rampSide = new THREE.MeshStandardMaterial({ color: '#8a8e96', roughness: .85 });
  const lampSpots = [];
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const c = track.get(i, j), [x, z] = cellCenter(i, j), r = rng(j * 131 + i * 17 + 5);
    if (isRoad(c)) {
      const m = track.mask(i, j), tile = new THREE.Mesh(plane, roadMaterial(m, renderer)); tile.position.set(x, .02, z); tile.receiveShadow = true; root.add(tile);
      if (c === BOOST) { const b = new THREE.Mesh(new THREE.PlaneGeometry(CELL * .62, CELL * .62), boostMat); b.rotation.x = -Math.PI / 2; const d = m & 5 && !(m & 10) ? 0 : (m & 10 && !(m & 5) ? 1 : 0); b.rotation.z = d ? -Math.PI / 2 : 0; b.position.set(x, .05, z); root.add(b); }
      if (isRamp(c)) {
        const d = c - RAMP0, L = CELL * .7, W = CELL * HW * 2 * .95;
        const shp = new THREE.Shape(); shp.moveTo(-L / 2, 0); shp.lineTo(L / 2, 0); shp.lineTo(L / 2, RAMP_H); shp.closePath();
        const geo = new THREE.ExtrudeGeometry(shp, { depth: W, bevelEnabled: false }); geo.translate(0, 0, -W / 2);
        const ramp = new THREE.Mesh(geo, [rampSide, rampTop]); ramp.rotation.y = [Math.PI / 2, 0, -Math.PI / 2, Math.PI][d]; ramp.position.set(x, .02, z); ramp.castShadow = ramp.receiveShadow = true; root.add(ramp);
      }
      // lamps on straight pieces, alternate sides
      if ((m === 5 || m === 10) && (i + j) % 2 === 0) { const side = (i * 3 + j) % 4 < 2 ? 1 : -1, off = (HW + .1) * CELL; lampSpots.push(m === 5 ? [x + side * off, z, side > 0 ? Math.PI : 0] : [x, z + side * off, side > 0 ? Math.PI / 2 : -Math.PI / 2]); }
    } else if (c === BUILDING) {
      const style = Math.floor(r() * 5), hgt = 8 + Math.floor(r() * 5) * 5 + (r() < .2 ? 18 : 0), fw = CELL * .8;
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(CELL * .96, .25, CELL * .96), new THREE.MeshStandardMaterial({ color: '#9a9ca0', roughness: .9 })); plinth.position.set(x, .12, z); plinth.receiveShadow = true; root.add(plinth);
      const tiers = hgt > 22 && r() < .6 ? 2 : 1; let y0 = .2, w = fw;
      for (let k = 0; k < tiers; k++) {
        const hh = tiers === 2 ? (k === 0 ? hgt * .65 : hgt * .35) : hgt;
        const map = windowTex(style, false).clone(); map.needsUpdate = true; map.repeat.set(w / 12, hh / 20);
        const em = windowTex(style, true).clone(); em.needsUpdate = true; em.repeat.copy(map.repeat);
        const side = new THREE.MeshStandardMaterial({ map, emissiveMap: em, emissive: new THREE.Color('#ffffff'), emissiveIntensity: T.win, roughness: .7, metalness: style === 2 ? .4 : .05 });
        const roofM = new THREE.MeshStandardMaterial({ color: '#4a4d52', roughness: .9 });
        const b = new THREE.Mesh(new THREE.BoxGeometry(w, hh, w), [side, side, roofM, roofM, side, side]); b.position.set(x, y0 + hh / 2, z); b.castShadow = b.receiveShadow = true; root.add(b);
        if (k === tiers - 1) for (let q = 0; q < 2 + Math.floor(r() * 3); q++) { const ac = new THREE.Mesh(new THREE.BoxGeometry(1 + r() * 1.5, .8 + r(), 1 + r() * 1.5), roofM); ac.position.set(x + (r() - .5) * w * .6, y0 + hh + .5, z + (r() - .5) * w * .6); ac.castShadow = true; root.add(ac); }
        y0 += hh; w *= .7;
      }
      colliders.boxes.push({ x, z, hx: fw / 2, hz: fw / 2, h: hgt });
    } else if (c === TREE) {
      const n = 2 + Math.floor(r() * 3);
      for (let k = 0; k < n; k++) { const tx = x + (r() - .5) * CELL * .7, tz = z + (r() - .5) * CELL * .7; colliders.circles.push({ x: tx, z: tz, r: .55, tree: { pine: r() < .5, s: .8 + r() * .7, rot: r() * 6 } }); }
    }
  }
  // instanced trees
  const trees = colliders.circles.filter(c => c.tree);
  const trunkG = new THREE.CylinderGeometry(.22, .32, 2.2, 7); trunkG.translate(0, 1.1, 0);
  const pineG = new THREE.ConeGeometry(1.7, 4.2, 8); pineG.translate(0, 3.9, 0); const pine2 = new THREE.ConeGeometry(1.25, 3.2, 8); pine2.translate(0, 5.6, 0);
  const roundG = new THREE.IcosahedronGeometry(2, 1); roundG.translate(0, 3.6, 0);
  const trunkM = new THREE.MeshStandardMaterial({ color: '#6b4a2f', roughness: .95 }), leafM = new THREE.MeshStandardMaterial({ color: '#2f6b2c', roughness: .85, flatShading: true }), leaf2 = new THREE.MeshStandardMaterial({ color: '#4f8a34', roughness: .85, flatShading: true });
  const inst = (geo, mat, list) => { if (!list.length) return; const im = new THREE.InstancedMesh(geo, mat, list.length); const o = new THREE.Object3D(); list.forEach((t, k) => { o.position.set(t.x, 0, t.z); o.rotation.y = t.tree.rot; o.scale.setScalar(t.tree.s); o.updateMatrix(); im.setMatrixAt(k, o.matrix); }); im.castShadow = true; im.receiveShadow = true; root.add(im); };
  inst(trunkG, trunkM, trees); inst(pineG, leafM, trees.filter(t => t.tree.pine)); inst(pine2, leafM, trees.filter(t => t.tree.pine)); inst(roundG, leaf2, trees.filter(t => !t.tree.pine));
  // lamps
  if (lampSpots.length) {
    const poleG = new THREE.CylinderGeometry(.09, .12, 6, 8); poleG.translate(0, 3, 0);
    const armG = new THREE.BoxGeometry(1.6, .1, .1); armG.translate(.8, 6, 0);
    const headG = new THREE.BoxGeometry(.7, .14, .34); headG.translate(1.5, 5.92, 0);
    const poleM = new THREE.MeshStandardMaterial({ color: '#3a3d43', roughness: .5, metalness: .6 });
    const headM = new THREE.MeshStandardMaterial({ color: '#fff3d0', emissive: '#ffd890', emissiveIntensity: T.lamps * 3 });
    const mk = (g, m) => { const im = new THREE.InstancedMesh(g, m, lampSpots.length); const o = new THREE.Object3D(); lampSpots.forEach(([x, z, a], k) => { o.position.set(x, 0, z); o.rotation.y = a; o.updateMatrix(); im.setMatrixAt(k, o.matrix); }); im.castShadow = true; root.add(im); return im; };
    mk(poleG, poleM); mk(armG, poleM); mk(headG, headM);
    lampSpots.forEach(([x, z]) => colliders.circles.push({ x, z, r: .3 }));
    if (T.lamps > 0) {
      const pool = new THREE.InstancedMesh(new THREE.PlaneGeometry(9, 9).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: radialTex(), color: '#ffc77a', transparent: true, opacity: .55 * T.lamps, blending: THREE.AdditiveBlending, depthWrite: false }), lampSpots.length);
      const halo = new THREE.InstancedMesh(new THREE.PlaneGeometry(2.4, 2.4), new THREE.MeshBasicMaterial({ map: radialTex(), color: '#ffdca0', transparent: true, opacity: .9 * T.lamps, blending: THREE.AdditiveBlending, depthWrite: false }), lampSpots.length);
      const o = new THREE.Object3D();
      lampSpots.forEach(([x, z, a], k) => { const hx = x + Math.cos(a) * 1.5, hz = z - Math.sin(a) * 1.5; o.position.set(hx, .06, hz); o.rotation.set(0, 0, 0); o.updateMatrix(); pool.setMatrixAt(k, o.matrix); o.position.set(hx, 5.8, hz); o.updateMatrix(); halo.setMatrixAt(k, o.matrix); });
      root.add(pool); root.add(halo); root.userData.halo = halo;
    }
  }
  return { root, colliders, anim, time: T };
}
// a coin marker
export function coinMesh() {
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ color: '#ffd24a', emissive: '#ff9d00', emissiveIntensity: .6, metalness: .9, roughness: .25 });
  const c = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, .22, 28), m); c.rotation.x = Math.PI / 2; g.add(c);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(1, .1, 8, 28), m); g.add(rim);
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(4, 4), new THREE.MeshBasicMaterial({ map: radialTex(), color: '#ffcc55', transparent: true, opacity: .5, blending: THREE.AdditiveBlending, depthWrite: false })); g.add(glow); g.userData.glow = glow;
  return g;
}
export function coinSpot(track, i, j) {
  const c = track.get(i, j), m = track.mask(i, j), [x, z] = cellCenter(i, j);
  const corners = { 3: [1, 0], 6: [1, 1], 12: [0, 1], 9: [0, 0] };
  if (corners[m]) { const [cx, cy] = corners[m], dx = .5 - cx, dy = .5 - cy, l = Math.hypot(dx, dy); return [x + (cx + dx / l * .5 - .5) * CELL, 1.6, z + (cy + dy / l * .5 - .5) * CELL]; }
  if (isRamp(c)) { const d = c - RAMP0, dir = [[0, -1], [1, 0], [0, 1], [-1, 0]][d];
    if (isRoad(track.get(i + dir[0], j + dir[1]))) return [x + dir[0] * CELL * .95, RAMP_H + 1.6, z + dir[1] * CELL * .95];
    return [x, RAMP_H / 2 + 1.6, z]; }
  return [x, 1.6, z];
}
export { inShape };
