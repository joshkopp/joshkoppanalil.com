// Procedural night city: street grid, sidewalks, towers with lit windows, parks, lamps, signals, neon and props.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

export const CELL = 110, N = 9, HW = 7, SW = 11, SIZE = N * CELL; // road centrelines on every grid line 0..N
export const AVES = ['Harbor Ave', '1st Ave', '2nd Ave', '3rd Ave', 'Lincoln Ave', '5th Ave', '6th Ave', 'Park Ave', '8th Ave', 'Bay Ave'];
export const STS = ['North St', 'Grand St', 'Cedar St', 'Union St', 'Market St', 'Elm St', 'Pine St', 'Oak St', 'Main St', 'Ocean St'];
export function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const GLSL_HASH = `float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }`;
function worldShader(m, frag, extraUniforms = {}) {
  m.onBeforeCompile = sh => { Object.assign(sh.uniforms, extraUniforms);
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP; varying vec3 vWN;').replace('#include <begin_vertex>', `#include <begin_vertex>
      #ifdef USE_INSTANCING
        vWP = (modelMatrix * instanceMatrix * vec4(position, 1.)).xyz; vWN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * normal);
      #else
        vWP = (modelMatrix * vec4(position, 1.)).xyz; vWN = normalize(mat3(modelMatrix) * normal);
      #endif`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vWP; varying vec3 vWN;\nuniform float uNight;\n' + GLSL_HASH);
    frag(sh); };
  extraUniforms.uNight = extraUniforms.uNight || { value: 1 }; return m;
}
function canvasTex(w, h, draw, rep) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; if (rep) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(...rep); } return t; }

export class City {
  constructor(seed = 7) {
    const R = rng(seed); this.R = R; this.lots = [];
    const c = (N - 1) / 2;
    for (let i = 0; i < N; i++) { this.lots[i] = []; for (let j = 0; j < N; j++) {
      const d = Math.hypot(i - c, j - c) / (c * 1.42), r = R();
      let type = 'bld'; if ((i === 2 && j === 6) || (i === 6 && j === 2) || (r < .07 && d > .25)) type = 'park'; else if (i === 4 && j === 4) type = 'plaza';
      this.lots[i][j] = { type, d, i, j, x0: i * CELL + SW, z0: j * CELL + SW, x1: (i + 1) * CELL - SW, z1: (j + 1) * CELL - SW, blds: [] }; } }
    this.obs = new Map(); this.props = []; // spatial hash of small obstacles
  }
  key(x, z) { return Math.floor(x / 20) * 1000 + Math.floor(z / 20); }
  addObs(o) { const k = this.key(o.x, o.z); if (!this.obs.has(k)) this.obs.set(k, []); this.obs.get(k).push(o); }
  near(x, z, out) { out.length = 0; const ix = Math.floor(x / 20), iz = Math.floor(z / 20); for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) { const l = this.obs.get((ix + a) * 1000 + iz + b); if (l) for (const o of l) out.push(o); } return out; }
  lotAt(x, z) { const i = Math.floor(x / CELL), j = Math.floor(z / CELL); return i >= 0 && j >= 0 && i < N && j < N ? this.lots[i][j] : null; }
  // circle vs solid world. Returns {nx, nz, pen} or null
  collide(x, z, r) {
    const lim0 = -SW + .2, lim1 = SIZE + SW - .2; let best = null;
    const push = (nx, nz, pen) => { if (pen > 0 && (!best || pen > best.pen)) best = { nx, nz, pen }; };
    push(1, 0, lim0 - (x - r)); push(-1, 0, (x + r) - lim1); push(0, 1, lim0 - (z - r)); push(0, -1, (z + r) - lim1);
    const L = this.lotAt(x, z);
    for (const lot of L ? [L] : []) { if (lot.type === 'bld') for (const b of lot.blds) { const cx = Math.max(b.x0, Math.min(x, b.x1)), cz = Math.max(b.z0, Math.min(z, b.z1)), dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz);
        if (d < r) { if (d > 1e-4) push(dx / d, dz / d, r - d); else { const e = [[x - b.x0, -1, 0], [b.x1 - x, 1, 0], [z - b.z0, 0, -1], [b.z1 - z, 0, 1]].sort((p, q) => p[0] - q[0])[0]; push(e[1], e[2], e[0] + r); } } }
      if (lot.type === 'plaza') { const cx = (lot.x0 + lot.x1) / 2, cz = (lot.z0 + lot.z1) / 2, dx = x - cx, dz = z - cz, d = Math.hypot(dx, dz); if (d < 9 + r) push(dx / (d || 1), dz / (d || 1), 9 + r - d); } }
    return best;
  }
  streetAt(x, z, hx, hz) { // name of the road a car is on (by heading)
    const gi = Math.round(x / CELL), gj = Math.round(z / CELL), ax = Math.abs(x - gi * CELL), az = Math.abs(z - gj * CELL);
    if (ax < 12 && az < 12) return Math.abs(hx) > Math.abs(hz) ? STS[clampI(gj)] : AVES[clampI(gi)];
    return ax < az ? AVES[clampI(gi)] : STS[clampI(gj)];
  }

  build(Q) {
    const g = new THREE.Group(), R = rng(99), T = { night: { value: 1 } };
    // ground: asphalt with procedural lane paint, crossings and puddles
    const gm = worldShader(new THREE.MeshStandardMaterial({ color: '#202227', roughness: .6, metalness: 0 }), sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        vec2 p = vWP.xz, m = mod(p + ${CELL}. * .5, ${CELL}.) - ${CELL}. * .5, a = abs(m);
        float n = vnoise(p * .9) * .5 + vnoise(p * 3.7) * .3 + vnoise(p * .07) * .6;
        float wet = smoothstep(.62, .8, vnoise(p * .045 + 3.) * .7 + vnoise(p * .21) * .3);
        diffuseColor.rgb *= .8 + n * .35; diffuseColor.rgb *= 1. - wet * .35;
        float paint = 0., yel = 0.;
        if (a.y < 7. && a.x > 7.2) { yel = step(.1, a.y) * step(a.y, .26); paint = step(3.4, a.y) * step(a.y, 3.56) * step(fract(p.x / 9.), .45) + step(6.5, a.y) * step(a.y, 6.66) + step(a.x, 11.6) * step(8.2, a.x) * step(fract(p.y / 1.2), .55) * step(a.y, 6.4) + step(12.2, a.x) * step(a.x, 12.7) * step(.4, a.y) * step(a.y, 6.4) * step(0., -m.y * sign(m.x)); }
        if (a.x < 7. && a.y > 7.2) { yel += step(.1, a.x) * step(a.x, .26); paint += step(3.4, a.x) * step(a.x, 3.56) * step(fract(p.y / 9.), .45) + step(6.5, a.x) * step(a.x, 6.66) + step(a.y, 11.6) * step(8.2, a.y) * step(fract(p.x / 1.2), .55) * step(a.x, 6.4) + step(12.2, a.y) * step(a.y, 12.7) * step(.4, a.x) * step(a.x, 6.4) * step(0., m.x * sign(m.y)); }
        float wear = .75 + .25 * vnoise(p * 1.3);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.78) * wear, clamp(paint, 0., 1.)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.85, .62, .12) * wear, clamp(yel, 0., 1.));`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(mix(.62, .5, n), .06, wet); roughnessFactor = mix(roughnessFactor, .55, clamp(paint + yel, 0., 1.));');
    }, T);
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(SIZE + 900, SIZE + 900).rotateX(-Math.PI / 2).translate(SIZE / 2, 0, SIZE / 2), gm); ground.receiveShadow = true; g.add(ground);
    // sidewalk slabs (one per lot) with tile joints and curb edges
    const swm = worldShader(new THREE.MeshStandardMaterial({ color: '#7c7f86', roughness: .8 }), sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        vec2 p = vWP.xz, m = mod(p + ${CELL}. * .5, ${CELL}.) - ${CELL}. * .5, a = abs(m); float e = min(a.x, a.y);
        vec2 t = fract(p / 1.6); float joint = 1. - step(.04, t.x) * step(.04, t.y);
        diffuseColor.rgb *= (.82 + vnoise(p * 2.) * .25) * (1. - joint * .25); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.62), step(e, 7.35) * step(.5, vWN.y));
        if (vWN.y < .5) diffuseColor.rgb *= .8;`);
    }, T);
    const slabs = []; for (let i = -1; i <= N; i++) for (let j = -1; j <= N; j++) { const out = i < 0 || j < 0 || i >= N || j >= N; slabs.push(new THREE.BoxGeometry(CELL - 14, out ? .3 : .16, CELL - 14).translate(i * CELL + CELL / 2, out ? .15 : .08, j * CELL + CELL / 2)); }
    const slab = new THREE.Mesh(mergeGeometries(slabs), swm); slab.receiveShadow = true; g.add(slab);
    // buildings: one instanced box mesh, procedural facades
    const fm = worldShader(new THREE.MeshStandardMaterial({ color: '#fff', roughness: .85, metalness: .05 }), sh => {
      sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', `#include <color_fragment>
        float wall = 1. - step(.5, abs(vWN.y));
        vec2 fu = abs(vWN.x) > .5 ? vec2(vWP.z, vWP.y) : vec2(vWP.x, vWP.y);
        float glassy = step(diffuseColor.r + .05, diffuseColor.b);
        vec2 cs = glassy > .5 ? vec2(2.2, 3.6) : vec2(3.2, 3.4);
        vec2 cid = floor(fu / cs), f = fract(fu / cs);
        float ground = step(fu.y, 4.4);
        float win = glassy > .5 ? step(.05, f.x) * step(f.x, .95) * step(.14, f.y) * step(f.y, .93) : step(.24, f.x) * step(f.x, .76) * step(.32, f.y) * step(f.y, .8);
        win *= wall * (1. - ground);
        float shop = wall * ground * step(.5, fu.y) * step(fu.y, 3.7) * step(.06, fract(fu.x / 7.)) * step(fract(fu.x / 7.), .94);
        float seed = h21(cid + floor(vWP.xz / 30.) * 7.13 + vWN.xz * 3.1);
        float lit = step(.68, seed) * win;
        vec3 warm = mix(vec3(1., .58, .26), vec3(.62, .76, 1.), step(.75, h21(cid * 1.7 + 3.)));
        vec3 winGlow = (lit * warm * (.04 + .26 * h21(cid + 9.) * h21(cid + 2.)) * mix(.45, 1., smoothstep(.2, .9, f.y)) * (1. - .55 * step(.7, h21(cid + 4.)) * step(f.x, .5)) + shop * mix(vec3(1., .72, .45), vec3(.75, .9, 1.), step(.6, h21(floor(fu / 7.) + 5.))) * (.05 + .2 * smoothstep(.5, 3.7, fu.y)) * step(.06, fract(fu.x / 1.75)) * step(.45, h21(floor(fu / 7.) + 2.))) * uNight;
        diffuseColor.rgb = mix(diffuseColor.rgb * (.85 + .15 * vnoise(fu * .7)), vec3(.03, .045, .06), max(win, shop));
        diffuseColor.rgb *= 1. - step(.5, vWN.y) * .6; diffuseColor.rgb *= .75 + .25 * smoothstep(0., 30., vWP.y);`)
      .replace('#include <roughnessmap_fragment>', '#include <roughnessmap_fragment>\nroughnessFactor = mix(roughnessFactor, .22, max(win, shop));')
      .replace('#include <metalnessmap_fragment>', '#include <metalnessmap_fragment>\nmetalnessFactor = mix(metalnessFactor, .6, max(win, shop) * glassy);')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += winGlow;');
    }, T);
    const boxes = [], cols = [], tones = ['#8d8f94', '#a39a8c', '#6f7480', '#9b7f6c', '#5d6a7a', '#b3aea4', '#4f5f74', '#7a6a5e', '#6e8098', '#8a8f9a'];
    const crown = [], lightsRed = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const L = this.lots[i][j]; if (L.type !== 'bld') continue;
      const tall = Math.max(0, 1 - L.d), H = () => 10 + (tall * tall * 150 + 6) * (.35 + R() * .9), split = tall > .7 ? (R() < .6 ? 1 : 2) : R() < .3 ? 2 : 4;
      const x0 = L.x0 + 1, z0 = L.z0 + 1, x1 = L.x1 - 1, z1 = L.z1 - 1, mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
      const parts = split === 1 ? [[x0, z0, x1, z1]] : split === 2 ? (R() < .5 ? [[x0, z0, mx - .5, z1], [mx + .5, z0, x1, z1]] : [[x0, z0, x1, mz - .5], [x0, mz + .5, x1, z1]]) : [[x0, z0, mx - .5, mz - .5], [mx + .5, z0, x1, mz - .5], [x0, mz + .5, mx - .5, z1], [mx + .5, mz + .5, x1, z1]];
      for (const [a, b, c, d] of parts) { const h = H(), col = tall > .55 && R() < .55 ? ['#3e5470', '#2f4660', '#55708f', '#46607a'][Math.floor(R() * 4)] : tones[Math.floor(R() * tones.length)];
        L.blds.push({ x0: a, z0: b, x1: c, z1: d, h }); boxes.push([(a + c) / 2, 0, (b + d) / 2, c - a, h, d - b]); cols.push(col);
        if (h > 50) { const s = .55 + R() * .25, ch = 4 + R() * 12; boxes.push([(a + c) / 2, h, (b + d) / 2, (c - a) * s, ch, (d - b) * s]); cols.push(col); if (h + ch > 70) lightsRed.push([(a + c) / 2, h + ch + .6, (b + d) / 2]); } } }
    // backdrop skyline around the city
    for (let k = 0; k < 90; k++) { const side = k % 4, t = R() * (SIZE + 400) - 200, off = SIZE / 2 + 160 + R() * 360, h = 20 + R() * 120, w = 30 + R() * 60;
      const x = side < 2 ? SIZE / 2 + (side ? off : -off) : t, z = side < 2 ? t : SIZE / 2 + (side === 2 ? off : -off); boxes.push([x, 0, z, w, h, w * (.6 + R() * .8)]); cols.push(tones[Math.floor(R() * tones.length)]); }
    const unit = new THREE.BoxGeometry(1, 1, 1).translate(0, .5, 0), bm = new THREE.InstancedMesh(unit, fm, boxes.length), o = new THREE.Object3D(), cc = new THREE.Color();
    boxes.forEach(([x, y, z, w, h, d], k) => { o.position.set(x, y, z); o.scale.set(w, h, d); o.updateMatrix(); bm.setMatrixAt(k, o.matrix); bm.setColorAt(k, cc.set(cols[k])); });
    bm.castShadow = Q !== 'low'; bm.receiveShadow = true; g.add(bm);
    if (lightsRed.length) g.add(new THREE.Mesh(mergeGeometries(lightsRed.map(([x, y, z]) => new THREE.BoxGeometry(.8, .8, .8).translate(x, y, z))), new THREE.MeshBasicMaterial({ color: new THREE.Color('#ff2a1a').multiplyScalar(4), toneMapped: false })));
    // parks + plaza
    const grassM = worldShader(new THREE.MeshStandardMaterial({ color: '#2d4a26', roughness: .95 }), sh => { sh.fragmentShader = sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= .7 + vnoise(vWP.xz * .4) * .5 + vnoise(vWP.xz * 3.) * .2;'); }, T);
    const trunks = [], crowns = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const L = this.lots[i][j]; if (L.type === 'bld') continue; const cx = (L.x0 + L.x1) / 2, cz = (L.z0 + L.z1) / 2;
      if (L.type === 'park') { const gp = new THREE.Mesh(new THREE.PlaneGeometry(L.x1 - L.x0 + 2, L.z1 - L.z0 + 2).rotateX(-Math.PI / 2), grassM); gp.position.set(cx, .17, cz); gp.receiveShadow = true; g.add(gp);
        for (let k = 0; k < 34; k++) { const x = L.x0 + 4 + R() * (L.x1 - L.x0 - 8), z = L.z0 + 4 + R() * (L.z1 - L.z0 - 8); if (Math.abs(x - cx) < 4 || Math.abs(z - cz) < 4) continue; trunks.push([x, z, .8 + R() * .6]); this.addObs({ x, z, r: .45, solid: true }); } }
      else { const f = new THREE.Mesh(new THREE.CylinderGeometry(9, 9.4, 1, 32), new THREE.MeshStandardMaterial({ color: '#9a968e', roughness: .7 })); f.position.set(cx, .5, cz); g.add(f);
        const w = new THREE.Mesh(new THREE.CircleGeometry(8.3, 32).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#0d2a3a', roughness: .05, metalness: .3 })); w.position.set(cx, 1.02, cz); g.add(w);
        const st = new THREE.Mesh(new THREE.CylinderGeometry(.8, 1.2, 6, 12), new THREE.MeshStandardMaterial({ color: '#6d6a62', roughness: .5, metalness: .4 })); st.position.set(cx, 3.5, cz); g.add(st); } }
    // sidewalk trees, lamps, hydrants & co
    const lamps = [], heads = [], pools = [], propList = [];
    for (let l = 0; l <= N; l++) for (let t = 6; t < SIZE; t += 37) { const lt = t % CELL; if (lt < 15 || lt > CELL - 15) continue;
      for (const side of [-1, 1]) { const off = l * CELL + side * 8.4, along = t;
        lamps.push([off, along, side, 0], [along, off, side, 1]); // N-S road at x=l*C, and E-W road at z=l*C
        if (R() < .55) { const tt = t + 18; if (tt % CELL > 14 && tt % CELL < CELL - 14) { const o2 = l * CELL + side * 9.6; trunks.push([o2, tt, .7], [tt, o2, .7]); this.addObs({ x: o2, z: tt, r: .35, solid: true }); this.addObs({ x: tt, z: o2, r: .35, solid: true }); } }
        if (R() < .5) { const tt = t + 9 + R() * 8, o2 = l * CELL + side * (7.9 + R() * 1.6), type = Math.floor(R() * 4); propList.push([o2, tt, type], [tt, o2, (type + 1) % 4]); } } }
    const L = lamps.length, poleG = mergeGeometries([new THREE.CylinderGeometry(.09, .13, 8.5, 6).translate(0, 4.25, 0), new THREE.BoxGeometry(.08, .08, 2.4).translate(0, 8.4, 1.1)]), headG = new THREE.BoxGeometry(.5, .16, .9).translate(0, 8.3, 2.1);
    const poleM = new THREE.MeshStandardMaterial({ color: '#2b2e33', roughness: .5, metalness: .7 }), headM = new THREE.MeshBasicMaterial({ color: new THREE.Color('#ffd9a0').multiplyScalar(3), toneMapped: false });
    const poles = new THREE.InstancedMesh(poleG, poleM, L), hm = new THREE.InstancedMesh(headG, headM, L);
    const poolT = canvasTex(128, 128, (c, w) => { const gr = c.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.45, 'rgba(255,255,255,.35)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, w, w); });
    const pm = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: poolT, color: '#ffcf8a', transparent: true, opacity: .55, blending: THREE.AdditiveBlending, depthWrite: false }), L);
    lamps.forEach(([a, b, side, ns], k) => { const x = ns ? a : a, z = ns ? b : b; o.position.set(x, 0, z); o.scale.set(1, 1, 1); o.rotation.set(0, ns ? (side > 0 ? Math.PI : 0) : (side > 0 ? -Math.PI / 2 : Math.PI / 2), 0); o.updateMatrix(); poles.setMatrixAt(k, o.matrix); hm.setMatrixAt(k, o.matrix);
      const fx = Math.sin(o.rotation.y), fz = Math.cos(o.rotation.y); o.position.set(x + fx * 2.6, .03, z + fz * 2.6); o.rotation.set(0, 0, 0); o.scale.set(16, 1, 16); o.updateMatrix(); pm.setMatrixAt(k, o.matrix); });
    pm.renderOrder = 1; g.add(poles, hm, pm);
    const trunkM = new THREE.MeshStandardMaterial({ color: '#3b2d22', roughness: .9 }), crownM = new THREE.MeshStandardMaterial({ color: '#1f3a1e', roughness: .9, flatShading: true });
    const tI = new THREE.InstancedMesh(new THREE.CylinderGeometry(.18, .26, 3, 6).translate(0, 1.5, 0), trunkM, trunks.length), cI = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(2.2, 1).translate(0, 4.6, 0), crownM, trunks.length);
    trunks.forEach(([x, z, s], k) => { o.position.set(x, .16, z); o.rotation.set(0, s * 7, 0); o.scale.setScalar(s); o.updateMatrix(); tI.setMatrixAt(k, o.matrix); cI.setMatrixAt(k, o.matrix); }); g.add(tI, cI);
    // knockable props: hydrant, trash can, newspaper box, bench
    const PG = [new THREE.CylinderGeometry(.18, .22, .8, 8).translate(0, .4, 0), new THREE.CylinderGeometry(.32, .28, 1, 10).translate(0, .5, 0), new THREE.BoxGeometry(.5, 1.1, .45).translate(0, .55, 0), new THREE.BoxGeometry(1.8, .5, .5).translate(0, .45, 0)];
    const PM = [new THREE.MeshStandardMaterial({ color: '#b3261e', roughness: .5 }), new THREE.MeshStandardMaterial({ color: '#2f4a3a', roughness: .6, metalness: .4 }), new THREE.MeshStandardMaterial({ color: '#1f4fa8', roughness: .4 }), new THREE.MeshStandardMaterial({ color: '#5a4030', roughness: .8 })];
    this.propMeshes = PG.map((geo, t) => { const list = propList.filter(p => p[2] === t), im = new THREE.InstancedMesh(geo, PM[t], list.length);
      list.forEach(([x, z], k) => { const pr = { x, z, r: t === 3 ? .9 : .4, type: t, k, im, alive: true, y: .16, vx: 0, vy: 0, vz: 0, rx: 0, rz: 0, ry: R() * 6, flying: 0 }; this.props.push(pr); this.addObs(pr); o.position.set(x, .16, z); o.rotation.set(0, pr.ry, 0); o.scale.setScalar(1); o.updateMatrix(); im.setMatrixAt(k, o.matrix); });
      im.castShadow = true; g.add(im); return im; });
    // traffic signals: one head per approach, coloured per phase
    const sig = []; for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) [[1, 1, 0], [-1, -1, 0], [1, -1, 1], [-1, 1, 1]].forEach(([sx, sz, ns]) => sig.push([i * CELL + sx * 8.6, j * CELL + sz * 8.6, ns]));
    const sp = new THREE.InstancedMesh(new THREE.CylinderGeometry(.1, .12, 5.2, 6).translate(0, 2.6, 0), poleM, sig.length), sh = new THREE.InstancedMesh(new THREE.BoxGeometry(.42, 1.1, .42).translate(0, 4.6, 0), new THREE.MeshBasicMaterial({ color: '#fff', toneMapped: false }), sig.length);
    sig.forEach(([x, z], k) => { o.position.set(x, 0, z); o.rotation.set(0, 0, 0); o.scale.setScalar(1); o.updateMatrix(); sp.setMatrixAt(k, o.matrix); sh.setMatrixAt(k, o.matrix); sh.setColorAt(k, cc.set('#300')); }); g.add(sp, sh); this.sigMesh = sh; this.sig = sig;
    // neon signs on shopfronts
    const names = [['HOTEL', '#ff3b6b'], ['BAR', '#36d6ff'], ['24/7', '#7cff5a'], ['PIZZA', '#ffb02e'], ['MOTEL', '#ff4ad8'], ['DINER', '#4affd2'], ['CLUB', '#b26bff'], ['PHARMACY', '#2eff7a']];
    const atlas = canvasTex(512, 256, (c, w, h) => { names.forEach(([t, col], k) => { const x = (k % 2) * 256, y = Math.floor(k / 2) * 64; c.font = '800 40px Arial'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.shadowColor = col; c.shadowBlur = 14; c.fillStyle = col; c.fillText(t, x + 128, y + 33); c.shadowBlur = 0; c.fillStyle = '#fff'; c.globalAlpha = .55; c.fillText(t, x + 128, y + 33); c.globalAlpha = 1; }); });
    const signs = [];
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const Lt = this.lots[i][j]; if (Lt.type !== 'bld') continue;
      for (const [nx, nz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { if (R() > .45) continue; const k = Math.floor(R() * 8), u = R();
        const x = nx ? (nx > 0 ? Lt.x1 - 1 + .08 : Lt.x0 + 1 - .08) : Lt.x0 + 8 + u * (Lt.x1 - Lt.x0 - 16), z = nz ? (nz > 0 ? Lt.z1 - 1 + .08 : Lt.z0 + 1 - .08) : Lt.z0 + 8 + u * (Lt.z1 - Lt.z0 - 16);
        const pg = new THREE.PlaneGeometry(6, 1.5), uv = pg.attributes.uv, u0 = (k % 2) / 2, v0 = 1 - (Math.floor(k / 2) + 1) / 4; for (let q = 0; q < uv.count; q++) uv.setXY(q, u0 + uv.getX(q) / 2, v0 + uv.getY(q) / 4);
        pg.rotateY(Math.atan2(nx, nz)).translate(x, 5.4, z); signs.push(pg); } }
    g.add(new THREE.Mesh(mergeGeometries(signs), new THREE.MeshBasicMaterial({ map: atlas, transparent: true, depthWrite: false, color: new THREE.Color(2.2, 2.2, 2.2), toneMapped: false })));
    // night sky with city glow
    const sky = new THREE.Mesh(new THREE.SphereGeometry(3000, 32, 16), new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false,
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
      fragmentShader: `varying vec3 vP; float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
        void main(){ float y = max(vP.y, 0.); vec3 c = mix(vec3(.16, .11, .16), vec3(.035, .045, .09), smoothstep(0., .35, y)); c = mix(c, vec3(.01, .015, .035), smoothstep(.3, 1., y));
          vec3 q = floor(vP * 300.); c += vec3(step(.998, h(q))) * smoothstep(.15, .5, y) * .8; vec3 md = normalize(vec3(.4, .5, -.7)); c += vec3(.9, .9, 1.) * pow(max(dot(vP, md), 0.), 2000.) * 6. + vec3(.2, .22, .3) * pow(max(dot(vP, md), 0.), 30.) * .4; gl_FragColor = vec4(c, 1.); }` }));
    sky.renderOrder = -1; g.add(sky); g.userData.sky = sky; this.uni = T;
    return g;
  }
  setSignals(phase) { // phase: 0 EW green, 1 EW yellow, 2 NS green, 3 NS yellow
    const c = new THREE.Color(), G = new THREE.Color(.1, 1.5, .5), Y = new THREE.Color(1.6, 1.1, .05), Rd = new THREE.Color(1.7, .06, .03);
    this.sig.forEach(([, , ns], k) => { const mine = ns ? phase >= 2 : phase < 2, y = phase % 2 === 1; this.sigMesh.setColorAt(k, c.copy(!mine ? Rd : y ? Y : G)); });
    this.sigMesh.instanceColor.needsUpdate = true;
  }
  minimap(size) { const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d'), s = size / (SIZE + 2 * SW);
    x.fillStyle = '#2c3038'; x.fillRect(0, 0, size, size);
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const L = this.lots[i][j]; x.fillStyle = L.type === 'park' ? '#1f3a24' : L.type === 'plaza' ? '#3a3a3a' : '#11141a'; x.fillRect((L.x0 - 4 + SW) * s, (L.z0 - 4 + SW) * s, (L.x1 - L.x0 + 8) * s, (L.z1 - L.z0 + 8) * s); }
    this.mmScale = s; return c; }
}
function clampI(i) { return Math.max(0, Math.min(N, i)); }
