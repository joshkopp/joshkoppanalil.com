// JK Police Pursuit — night city car chases. Pursuit: take the suspect down. Getaway: lose the cops.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { City, CELL, N, SIZE, rng } from './city.js';
import { buildCar, setLightbar, TYPES, PAINTS } from './vehicles.js';
import { Audio } from './audio.js';

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
const angD = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
const isTouch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
const MPH = 2.237;

/* ------------------------------------------------------------------ settings */
let S = { mode: 'pursuit', traffic: 'normal', cam: 'chase', quality: 'auto' }; try { Object.assign(S, JSON.parse(localStorage.getItem('jkpd-settings') || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem('jkpd-settings', JSON.stringify(S)); } catch (e) {} };
let best = { pursuit: 0, getaway: 0 }; try { Object.assign(best, JSON.parse(localStorage.getItem('jkpd-best') || '{}')); } catch (e) {}
const Q = S.quality === 'auto' ? (isTouch ? 'medium' : 'high') : S.quality;

/* ------------------------------------------------------------------ renderer */
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: Q !== 'low', powerPreference: 'high-performance' });
const basePR = Math.min(devicePixelRatio || 1, Q === 'high' ? 2 : Q === 'medium' ? 1.5 : 1); let prScale = 1;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = Q === 'high'; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, .2, 4000);
scene.fog = new THREE.FogExp2('#0b1020', .0032); scene.background = new THREE.Color('#0b1020');
const hemi = new THREE.HemisphereLight('#5a6c9a', '#1a1612', .55); scene.add(hemi);
const moon = new THREE.DirectionalLight('#9fb4ff', .55); moon.castShadow = Q === 'high'; moon.shadow.mapSize.set(2048, 2048); Object.assign(moon.shadow.camera, { left: -70, right: 70, top: 70, bottom: -70, near: 1, far: 600 }); moon.shadow.bias = -.0005; moon.shadow.normalBias = .04; scene.add(moon, moon.target);
const head = new THREE.SpotLight('#fff1d6', 90, 75, .55, .55, 1.6); scene.add(head, head.target);
const flash = [0, 1, 2].map(() => { const l = new THREE.PointLight('#f00', 0, 22, 1.6); scene.add(l); return l; });
let composer = null, bloom = null;
if (Q !== 'low') { const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: Q === 'high' ? 4 : 0 }); rt.depthTexture = new THREE.DepthTexture(1, 1); rt.depthTexture.type = THREE.FloatType;
  composer = new EffectComposer(renderer, rt); composer.addPass(new RenderPass(scene, cam)); bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .6, .45, .9); composer.addPass(bloom); composer.addPass(new OutputPass()); }
function resize() { const w = innerWidth, h = innerHeight; cam.aspect = w / h; cam.updateProjectionMatrix(); renderer.setPixelRatio(basePR * prScale); renderer.setSize(w, h, false); if (composer) { composer.setPixelRatio(basePR * prScale); composer.setSize(w, h); bloom.resolution.set(w / 2, h / 2); } }
addEventListener('resize', resize); resize();
// reflections: a night sky ringed with warm/cool city glow
{ const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene(); es.background = new THREE.Color('#05070d'); const R = rng(3);
  for (let k = 0; k < 70; k++) { const a = R() * Math.PI * 2, y = 1 + R() * 9, m = new THREE.Mesh(new THREE.BoxGeometry(2 + R() * 6, 1 + R() * 5, 1), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(R() < .7 ? .09 : .58, .7, .5).multiplyScalar(.5 + R() * 1.2) })); m.position.set(Math.cos(a) * 40, y, Math.sin(a) * 40); m.lookAt(0, y, 0); es.add(m); }
  const gnd = new THREE.Mesh(new THREE.CircleGeometry(60, 16).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#0b0c0f' })); gnd.position.y = -1; es.add(gnd);
  scene.environment = pm.fromScene(es, .03, .1, 200).texture; scene.environmentIntensity = .55; }

/* ------------------------------------------------------------------ city */
const city = new City(7), cityG = city.build(Q); scene.add(cityG);
const mmBase = city.minimap(220); $('mmBase').getContext('2d').drawImage(mmBase, 0, 0);
const mmS = city.mmScale, toMM = (x, z) => [(x + 11) * mmS, (z + 11) * mmS];

/* ------------------------------------------------------------------ particles */
class Parts {
  constructor(max, additive) {
    this.max = max; this.i = 0; this.p = new Float32Array(max * 3); this.v = new Float32Array(max * 3); this.c = new Float32Array(max * 3); this.sz = new Float32Array(max); this.al = new Float32Array(max);
    this.age = new Float32Array(max).fill(1e9); this.life = new Float32Array(max).fill(1); this.s0 = new Float32Array(max); this.gr = new Float32Array(max); this.a0 = new Float32Array(max); this.drag = new Float32Array(max); this.grav = new Float32Array(max);
    const g = new THREE.BufferGeometry(); for (const [n, a, k] of [['position', this.p, 3], ['color', this.c, 3], ['size', this.sz, 1], ['alpha', this.al, 1]]) g.setAttribute(n, new THREE.BufferAttribute(a, k).setUsage(THREE.DynamicDrawUsage)); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, uniforms: { scale: { value: 500 } },
      vertexShader: 'attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(size*scale/-mv.z,400.); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec3 vC; varying float vA; void main(){ float r=length(gl_PointCoord-.5); if(r>.5||vA<.004) discard; gl_FragColor=vec4(vC, vA*smoothstep(.5,.0,r)); }' });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 3; scene.add(this.pts); this.g = g;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, col, alpha, drag = 1, grav = 0) { const i = this.i; this.i = (i + 1) % this.max; this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z; this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.c[i * 3] = col[0]; this.c[i * 3 + 1] = col[1]; this.c[i * 3 + 2] = col[2]; this.age[i] = 0; this.life[i] = life; this.s0[i] = size; this.gr[i] = grow; this.a0[i] = alpha; this.drag[i] = drag; this.grav[i] = grav; }
  update(dt) { for (let i = 0; i < this.max; i++) { const a = this.age[i] += dt, L = this.life[i]; if (a > L) { this.al[i] = 0; continue; } const k = i * 3, d = Math.pow(this.drag[i], dt);
    this.v[k] *= d; this.v[k + 1] = this.v[k + 1] * d - this.grav[i] * dt; this.v[k + 2] *= d; this.p[k] += this.v[k] * dt; this.p[k + 1] += this.v[k + 1] * dt; this.p[k + 2] += this.v[k + 2] * dt; if (this.p[k + 1] < .05) { this.p[k + 1] = .05; this.v[k + 1] *= -.3; }
    this.sz[i] = this.s0[i] * (1 + this.gr[i] * a); this.al[i] = this.a0[i] * (1 - a / L) * Math.min(1, a * 12); }
    for (const n of ['position', 'color', 'size', 'alpha']) this.g.attributes[n].needsUpdate = true; }
}
const smoke = new Parts(Q === 'low' ? 500 : 1300, false), sparks = new Parts(600, true);
const SMOKE = [.55, .56, .6], DARK = [.12, .12, .13], SPARK = [1, .6, .2], FIRE = [1, .45, .1], GLASS = [.7, .8, .9];

/* ------------------------------------------------------------------ vehicles */
const cars = []; let player = null, suspect = null;
const node = (i, j) => [i * CELL, j * CELL];
const rightOf = d => [-d[1], d[0]];
function spawnCar(type, kind, x, z, h, opts = {}) {
  const mesh = buildCar(type, opts.paint || PAINTS[Math.floor(Math.random() * PAINTS.length)], kind === 'cop' || (kind === 'player' && S.mode === 'pursuit') ? 'police' : opts.taxi ? 'taxi' : 'traffic'); scene.add(mesh);
  const T = TYPES[type], c = { mesh, type, T, kind, x, z, h, vx: 0, vz: 0, w: 0, steer: 0, thr: 0, brk: 0, hb: 0, nitro: false, slip: 0, hp: opts.hp || 100, maxHp: opts.hp || 100, mass: T.mass * (opts.massMul || 1), top: (opts.top || T.top), acc: (opts.acc || T.acc), grip: opts.grip || 11, police: kind === 'cop' || (kind === 'player' && S.mode === 'pursuit'),
    ai: null, wreck: false, stuck: 0, rev: 0, dmgCd: 0, emp: 0, siren: kind === 'cop', sTime: Math.random() * 10, bump: 0 };
  c.r = [T.wb + .1, 0, -T.wb - .1]; cars.push(c); return c;
}
function removeCar(c) { scene.remove(c.mesh); c.mesh.userData.paint.dispose(); c.mesh.userData.tailM.dispose(); const i = cars.indexOf(c); if (i >= 0) cars.splice(i, 1); }
function speedOf(c) { return Math.hypot(c.vx, c.vz); }
function fwd(c) { return [Math.sin(c.h), Math.cos(c.h)]; }

/* ---- physics ---- */
const nearBuf = [];
function physics(c, dt) {
  const T = c.T; let fx = Math.sin(c.h), fz = Math.cos(c.h), rx = -fz, rz = fx;
  let vF = c.vx * fx + c.vz * fz, vL = c.vx * rx + c.vz * rz;
  const lot = city.lotAt(c.x, c.z), onGrass = lot && lot.type === 'park' && c.x > lot.x0 && c.x < lot.x1 && c.z > lot.z0 && c.z < lot.z1;
  const top = c.top * (c.nitro ? 1.28 : 1) * (c.emp > 0 ? .35 : 1) * (onGrass ? .6 : 1) * (c.wreck ? 0 : 1), thr = c.wreck ? 0 : c.thr;
  if (thr > 0 && vF > -1) vF += thr * c.acc * (c.nitro ? 1.7 : 1) * Math.max(0, 1 - (vF / top) ** 2) * dt;
  if (c.brk > 0) { if (vF > .6) vF -= c.brk * 15 * dt; else if (!c.wreck) vF = Math.max(-11, vF - c.brk * c.acc * .7 * dt); }
  if (thr > 0 && vF < -.5) vF += 15 * dt;
  if (c.hb) vF -= Math.sign(vF) * Math.min(Math.abs(vF), 5 * dt);
  if (!thr && !c.brk) vF -= Math.sign(vF) * Math.min(Math.abs(vF), (c.wreck ? 6 : 1.4) * dt);
  vF -= (vF * Math.abs(vF) * .00045 + vF * .02) * dt; if (onGrass) vF -= vF * .5 * dt;
  const sp = Math.abs(vF), L = T.wb * 2, ang = c.steer * .58 / (1 + sp * .05);
  const aLat = (c.hb ? 3.2 : c.grip) * (onGrass ? .6 : 1);
  let wT = -vF * Math.tan(ang) / L; if (!c.hb) wT = clamp(wT, -aLat * 1.25 / Math.max(sp, 3), aLat * 1.25 / Math.max(sp, 3));
  c.w += (wT - c.w) * Math.min(1, dt * (c.hb ? 2.5 : 8)); if (c.hb && sp > 4) c.w += -c.steer * 1.6 * dt * Math.sign(vF);
  c.h += c.w * dt;
  const wx = fx * vF + rx * vL, wz = fz * vF + rz * vL; fx = Math.sin(c.h); fz = Math.cos(c.h); rx = -fz; rz = fx;
  vF = wx * fx + wz * fz; vL = wx * rx + wz * rz; const dv = Math.min(Math.abs(vL), aLat * dt * (1 + Math.abs(vL) * .05)); vL -= Math.sign(vL) * dv; c.slip = Math.abs(vL);
  c.vx = fx * vF + rx * vL; c.vz = fz * vF + rz * vL; c.x += c.vx * dt; c.z += c.vz * dt; c.vF = vF;
  if (c.emp > 0) c.emp -= dt; if (c.dmgCd > 0) c.dmgCd -= dt;
  // world collisions (three circles along the body)
  for (const off of c.r) { const px = c.x + fx * off, pz = c.z + fz * off, hit = city.collide(px, pz, 1.0);
    if (hit) { c.x += hit.nx * hit.pen; c.z += hit.nz * hit.pen; const vn = c.vx * hit.nx + c.vz * hit.nz; if (vn < 0) { c.vx -= 1.3 * vn * hit.nx; c.vz -= 1.3 * vn * hit.nz; c.vx *= .94; c.vz *= .94; c.w += (off * (hit.nx * fz - hit.nz * fx)) * vn * .04; impact(c, -vn, px - hit.nx, pz - hit.nz, true); } }
    for (const o of city.near(px, pz, nearBuf)) { if (o.flying || o.dead) continue; const dx = px - o.x, dz = pz - o.z, d = Math.hypot(dx, dz), rr = o.r + 1.0; if (d >= rr) continue;
      if (o.solid) { const nx = dx / d, nz = dz / d; c.x += nx * (rr - d); c.z += nz * (rr - d); const vn = c.vx * nx + c.vz * nz; if (vn < 0) { c.vx -= 1.3 * vn * nx; c.vz -= 1.3 * vn * nz; impact(c, -vn, o.x, o.z, true); } }
      else if (o.type !== undefined) knockProp(o, c); } }
}
function impact(c, v, x, z, wall) {
  if (v < 2.5) return; R.dbg[(wall ? 'w' : 'c') + c.kind] = (R.dbg[(wall ? 'w' : 'c') + c.kind] || 0) + 1; const dmg = v * v * (wall ? .05 : .035) / (c.kind === 'player' ? 1.6 : 1); c.hp = Math.max(0, c.hp - dmg);
  for (let k = 0; k < Math.min(30, v * 2); k++) sparks.emit(x, .5 + Math.random() * .6, z, (Math.random() - .5) * v * .6, Math.random() * 4, (Math.random() - .5) * v * .6, .3 + Math.random() * .4, .09, 0, SPARK, 1, .2, 9);
  if (v > 9) for (let k = 0; k < 10; k++) sparks.emit(x, .9, z, (Math.random() - .5) * 6, 1 + Math.random() * 3, (Math.random() - .5) * 6, .7, .06, 0, GLASS, .9, .5, 9);
  const camD = Math.hypot(c.x - cam.position.x, c.z - cam.position.z); if (camD < 120 && c.dmgCd <= 0) { c.dmgCd = .25; Audio.crash(v * Math.max(.2, 1 - camD / 120)); }
  if (c === player) { R.shake = Math.min(1.4, R.shake + v * .05); if (v > 14) flashHit(); }
  if (c.hp <= 0 && !c.wreck) wreckCar(c);
}
function wreckCar(c) { c.wreck = true; c.siren = false; c.thr = 0; c.brk = 1; if (c === suspect) onSuspectWrecked(); else if (c === player) onPlayerWrecked(); else if (c.kind === 'cop' && S.mode === 'getaway') { R.score += 500; R.copsOut++; toast('COP DOWN +500'); } }
function knockProp(o, c) { const sp = speedOf(c); if (sp < 2) return; o.flying = 2.6; o.vx = c.vx * .8 + (Math.random() - .5) * 3; o.vz = c.vz * .8 + (Math.random() - .5) * 3; o.vy = 3 + sp * .15; o.spin = (Math.random() - .5) * 14; c.vx *= .97; c.vz *= .97;
  Audio.prop(); for (let k = 0; k < 8; k++) sparks.emit(o.x, .6, o.z, (Math.random() - .5) * 5, Math.random() * 4, (Math.random() - .5) * 5, .4, .07, 0, o.type === 0 ? [.6, .8, 1] : SPARK, 1, .3, 9);
  if (o.type === 0) for (let k = 0; k < 30; k++) smoke.emit(o.x, .5, o.z, (Math.random() - .5) * 2, 6 + Math.random() * 6, (Math.random() - .5) * 2, 1.6, .5, 1.5, [.75, .82, .9], .5, .6, 9);
  if (c === player || (c === suspect)) { R.damageCost += 150; } }
const m4 = new THREE.Matrix4(), q4 = new THREE.Quaternion(), e4 = new THREE.Euler(), s4 = new THREE.Vector3(1, 1, 1), p4 = new THREE.Vector3();
function updateProps(dt) { for (const o of city.props) { if (!o.flying) continue; o.flying -= dt; o.vy -= 18 * dt; o.x += o.vx * dt; o.z += o.vz * dt; o.y = Math.max(.16, (o.y || .16) + o.vy * dt); if (o.y <= .16) { o.vy *= -.3; o.vx *= .8; o.vz *= .8; }
  o.rx += o.spin * dt; o.rz += o.spin * .7 * dt; if (o.flying <= 0) { o.flying = 0; o.dead = true; }
  o.im.setMatrixAt(o.k, m4.compose(p4.set(o.x, o.y, o.z), q4.setFromEuler(e4.set(o.rx, o.ry, o.rz)), s4)); o.im.instanceMatrix.needsUpdate = true; } }
function carCollisions() {
  for (let a = 0; a < cars.length; a++) { const A = cars[a]; for (let b = a + 1; b < cars.length; b++) { const B = cars[b]; const dx0 = A.x - B.x, dz0 = A.z - B.z; if (dx0 * dx0 + dz0 * dz0 > 49) continue;
    const fa = fwd(A), fb = fwd(B); let hit = false;
    for (const oa of A.r) for (const ob of B.r) { const ax = A.x + fa[0] * oa, az = A.z + fa[1] * oa, bx = B.x + fb[0] * ob, bz = B.z + fb[1] * ob, dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz); if (d >= 1.95 || d < 1e-4) continue;
      const nx = dx / d, nz = dz / d, pen = 1.95 - d, mA = A.mass, mB = B.mass, tot = mA + mB; A.x += nx * pen * mB / tot; A.z += nz * pen * mB / tot; B.x -= nx * pen * mA / tot; B.z -= nz * pen * mA / tot;
      const vrel = (A.vx - B.vx) * nx + (A.vz - B.vz) * nz; if (vrel < 0) { const j = -(1.35 * vrel) / (1 / mA + 1 / mB); A.vx += j / mA * nx; A.vz += j / mA * nz; B.vx -= j / mB * nx; B.vz -= j / mB * nz;
        A.w += oa * (nx * fa[1] - nz * fa[0]) * j / mA * .025; B.w -= ob * (nx * fb[1] - nz * fb[0]) * j / mB * .025; if (!hit) { hit = true; const v = -vrel; impact(A, v * mB / tot * 1.4, bx + nx, bz + nz, false); impact(B, v * mA / tot * 1.4, bx + nx, bz + nz, false); carHit(A, B, v); } } } } }
}

/* ---- AI driving: lane following on the street grid ---- */
const DIRS = [[1, 0], [-1, 0], [0, 1], [0, -1]];
const inGrid = (i, j) => i >= 0 && j >= 0 && i <= N && j <= N;
function snapAI(c) { const f = fwd(c), d = Math.abs(f[0]) > Math.abs(f[1]) ? [Math.sign(f[0]), 0] : [0, Math.sign(f[1])];
  let i, j; if (d[0]) { j = clamp(Math.round(c.z / CELL), 0, N); i = d[0] > 0 ? Math.floor(c.x / CELL) : Math.ceil(c.x / CELL); } else { i = clamp(Math.round(c.x / CELL), 0, N); j = d[1] > 0 ? Math.floor(c.z / CELL) : Math.ceil(c.z / CELL); }
  i = clamp(i, 0, N); j = clamp(j, 0, N); if (!inGrid(i + d[0], j + d[1])) { d[0] = -d[0]; d[1] = -d[1]; i = clamp(i - d[0], 0, N); j = clamp(j - d[1], 0, N); }
  c.ai.A = [i, j]; c.ai.d = d; c.ai.next = chooseNext(c); }
function chooseNext(c) { const ai = c.ai, B = [ai.A[0] + ai.d[0], ai.A[1] + ai.d[1]]; let bestD = null, bestS = -1e9;
  for (const n of DIRS) { if (n[0] === -ai.d[0] && n[1] === -ai.d[1]) continue; const C = [B[0] + n[0], B[1] + n[1]]; if (!inGrid(C[0], C[1])) continue; let s = Math.random() * 30 + (n[0] === ai.d[0] && n[1] === ai.d[1] ? 25 : 0);
    if (ai.style === 'flee') { const [cx, cz] = node(C[0], C[1]); let md = 1e9; for (const o of cars) if (o.police && !o.wreck) md = Math.min(md, Math.hypot(o.x - cx, o.z - cz)); s += Math.min(md, 500) * .5 + Math.random() * 50; if (R.blocks.some(bk => bk.edgeKey === edgeKey(B, n))) s -= 400; }
    else if (ai.style === 'chase' && ai.goal) { const [gx, gz] = ai.goal, [cx, cz] = node(C[0], C[1]); s = -(Math.abs(gx - cx) + Math.abs(gz - cz)) + Math.random() * 40; }
    if (s > bestS) { bestS = s; bestD = n; } }
  return bestD || [-ai.d[0], -ai.d[1]]; }
const edgeKey = (A, d) => `${A[0]},${A[1]},${d[0]},${d[1]}`;
function signalFor(d) { const ns = d[1] !== 0, ph = R.sigPhase; return ns ? (ph === 2 ? 'g' : ph === 3 ? 'y' : 'r') : (ph === 0 ? 'g' : ph === 1 ? 'y' : 'r'); }
function lineOfSight(ax, az, bx, bz) { for (let k = 1; k < 8; k++) { const t = k / 8, x = lerp(ax, bx, t), z = lerp(az, bz, t), L = city.lotAt(x, z); if (L && L.type === 'bld' && x > L.x0 + 1 && x < L.x1 - 1 && z > L.z0 + 1 && z < L.z1 - 1) return false; } return true; }
function drive(c, dt, think) {
  const ai = c.ai; if (c.wreck) { c.thr = 0; c.brk = 1; c.steer = 0; return; }
  const sp = speedOf(c), vF = c.vF || 0, f = fwd(c);
  // stuck recovery
  if (c.thr > .5 && Math.abs(vF) < 1.2) c.stuck += dt; else c.stuck = Math.max(0, c.stuck - dt * 2);
  if (c.rev > 0) { c.rev -= dt; c.thr = 0; c.brk = 1; c.steer = -ai.revSteer; c.hb = 0; if (c.rev <= 0) snapAI(c); return; }
  if (c.stuck > 1.4) { c.stuck = 0; c.rev = 1.1; ai.revSteer = Math.random() < .5 ? 1 : -1; return; }
  let tx, tz, vt = ai.vmax, direct = false;
  if (ai.style === 'chase' && ai.target && !ai.target.wreck) { const t = ai.target, d = Math.hypot(t.x - c.x, t.z - c.z);
    if (think) { ai.los = d < 70 && lineOfSight(c.x, c.z, t.x, t.z); }
    if (ai.los) { direct = true; const lead = clamp(d / 30, 0, 1.2); tx = t.x + t.vx * lead; tz = t.z + t.vz * lead; vt = c.top; ai.directT = 1; } }
  if (!direct) {
    if (ai.directT) { ai.directT = 0; snapAI(c); }
    const [ax, az] = node(ai.A[0], ai.A[1]), d = ai.d, r = rightOf(d), t0 = (c.x - ax) * d[0] + (c.z - az) * d[1], rem = CELL - t0, n = ai.next, B = [ai.A[0] + d[0], ai.A[1] + d[1]], [bx, bz] = node(B[0], B[1]);
    const sNew = (c.x - bx) * n[0] + (c.z - bz) * n[1]; const turning = n[0] !== d[0] || n[1] !== d[1];
    if ((turning && sNew > -1.5 && rem < 14) || t0 > CELL + 2) { ai.A = B; ai.d = n; ai.next = chooseNext(c); return drive(c, dt, think); }
    if (t0 < -20 || t0 > CELL + 25 || Math.abs((c.x - ax) * r[0] + (c.z - az) * r[1]) > 16) { snapAI(c); return; }
    const LA = 6 + sp * .45, nr = rightOf(n);
    if (LA < rem - 6 || !turning) { const tt = t0 + LA; if (tt < CELL) { tx = ax + d[0] * tt + r[0] * ai.lane; tz = az + d[1] * tt + r[1] * ai.lane; } else { const e = tt - CELL; tx = bx + n[0] * e + nr[0] * ai.lane; tz = bz + n[1] * e + nr[1] * ai.lane; } }
    else { const e = Math.max(2, LA - rem); tx = bx + n[0] * e + nr[0] * ai.lane; tz = bz + n[1] * e + nr[1] * ai.lane; }
    if (turning) { const rt = n[0] === r[0] && n[1] === r[1], vTurn = (ai.style === 'traffic' ? 6 : ai.style === 'flee' ? 11 : 10.5) * (rt ? .85 : 1); vt = Math.min(vt, Math.sqrt(vTurn * vTurn + 2 * 6.5 * Math.max(0, rem - 12))); }
    if (ai.style === 'traffic') { const s = signalFor(d); if (s !== 'g' && rem > 12.5 && rem < 40) vt = Math.min(vt, Math.sqrt(2 * 5 * Math.max(0, rem - 13.2))); }
    // traffic ahead
    if (think) { ai.block = 1e9; ai.blockV = 0; for (const o of cars) { if (o === c) continue; const dx = o.x - c.x, dz = o.z - c.z, along = dx * f[0] + dz * f[1]; if (along < 1 || along > 30) continue; const lat = Math.abs(dx * f[1] - dz * f[0]); if (lat < 2.3 && along < ai.block) { ai.block = along; ai.blockV = o.vx * f[0] + o.vz * f[1]; } }
      if (ai.style !== 'traffic' && ai.block < 26) { ai.laneT = (ai.laneT || 0) + 1; if (ai.laneT > 2) { ai.laneT = 0; const opts = [-5.25, -1.75, 1.75, 5.25].filter(l => l !== ai.lane); ai.lane = opts[Math.floor(Math.random() * opts.length)]; } } }
    if (ai.block < 30) vt = Math.min(vt, Math.max(0, ai.blockV + (ai.block - (ai.style === 'traffic' ? 8 : 5)) * .9));
  }
  const dx = tx - c.x, dz = tz - c.z, lz = dx * f[0] + dz * f[1], lx = dx * -f[1] + dz * f[0], a = Math.atan2(-lx, lz);
  c.steer = clamp(-a * 2.4, -1, 1); c.hb = (ai.style !== 'traffic' && Math.abs(a) > .9 && sp > 14) ? 1 : 0;
  if (vF < vt - .8) { c.thr = 1; c.brk = 0; } else if (vF > vt + 1.2) { c.thr = 0; c.brk = clamp((vF - vt) / 5, .2, 1); } else { c.thr = .3; c.brk = 0; }
  c.nitro = ai.style !== 'traffic' && ai.nitro && sp > 15 && Math.abs(a) < .1;
}

/* ------------------------------------------------------------------ game state */
const R = { dbg: {}, phase: 'menu', t: 0, paused: false, score: 0, busts: 0, escapes: 0, strikes: 0, tier: 0, sigT: 0, sigPhase: 0, shake: 0, slow: 1, slowT: 0, blocks: [], damageCost: 0, copsOut: 0,
  bustMeter: 0, escapeT: 0, heat: 1, heatT: 0, cool: 0, nitro: 1, empCd: 0, empLock: 0, blockCd: 0, lost: 0, msgT: 0, result: null, camMode: 'orbit', orbit: 0, nextBackup: 0, helo: null };
const H = 1 / 120;
function tierSpec(t) { return { type: ['sedan', 'sports', 'sports', 'sports'][Math.min(3, t)], top: 50 + t * 5.5, acc: 8 + t * .9, hp: 90 + t * 30, grip: 10.5 + t * .4 }; }
function randomEdgeNear(x, z, rmin, rmax, avoid) { for (let k = 0; k < 60; k++) { const i = Math.floor(Math.random() * (N + 1)), j = Math.floor(Math.random() * (N + 1)), d = DIRS[Math.floor(Math.random() * 4)];
    if (!inGrid(i + d[0], j + d[1])) continue; const t = 20 + Math.random() * (CELL - 40), [ax, az] = node(i, j), px = ax + d[0] * t, pz = az + d[1] * t, dist = Math.hypot(px - x, pz - z); if (dist < rmin || dist > rmax) continue;
    if (avoid && cars.some(o => Math.hypot(o.x - px, o.z - pz) < 12)) continue; return { i, j, d, t, px, pz }; } return null; }
function placeOnEdge(c, e, lane) { const r = rightOf(e.d), [ax, az] = node(e.i, e.j); c.x = ax + e.d[0] * e.t + r[0] * lane; c.z = az + e.d[1] * e.t + r[1] * lane; c.h = Math.atan2(e.d[0], e.d[1]); }
function addAI(c, style, extra = {}) { c.ai = Object.assign({ style, lane: style === 'traffic' ? (Math.random() < .5 ? 1.75 : 5.25) : 1.75, vmax: style === 'traffic' ? 11 + Math.random() * 4 : c.top, block: 1e9 }, extra); snapAI(c); }
function spawnTraffic(near) { const e = randomEdgeNear(player.x, player.z, near ? 60 : 180, 380, true); if (!e) return; const types = ['sedan', 'sedan', 'sedan', 'suv', 'suv', 'van', 'sports'], type = types[Math.floor(Math.random() * types.length)];
  const c = spawnCar(type, 'traffic', 0, 0, 0, { taxi: Math.random() < .12 && type === 'sedan', top: TYPES[type].top * .8, grip: 9 }); addAI(c, 'traffic'); placeOnEdge(c, e, c.ai.lane); c.vx = Math.sin(c.h) * 10; c.vz = Math.cos(c.h) * 10; c.ai.A = [e.i, e.j]; c.ai.d = e.d; c.ai.next = chooseNext(c); }
const TRAFFIC = { light: 18, normal: 32, heavy: 48 };
function manageTraffic() { const want = Math.round(TRAFFIC[S.traffic] * (isTouch ? .65 : 1)); let n = 0;
  for (const c of cars.slice()) { if (c.kind !== 'traffic') continue; const d = Math.hypot(c.x - player.x, c.z - player.z); if (d > 430 || (c.wreck && d > 120 && !c.mesh.visible)) { removeCar(c); continue; } n++; }
  for (let k = 0; k < 3 && n < want; k++, n++) spawnTraffic(false); }

function startGame() {
  Audio.init(); save(); for (const c of cars.slice()) removeCar(c); R.blocks.forEach(b => scene.remove(b.g)); R.blocks = [];
  Object.assign(R, { phase: 'play', t: 0, paused: false, score: 0, busts: 0, escapes: 0, strikes: 0, tier: 0, shake: 0, slow: 1, slowT: 0, damageCost: 0, copsOut: 0, bustMeter: 0, escapeT: 0, heat: 1, heatT: 0, cool: 0, nitro: 1, empCd: 0, empLock: 0, blockCd: 0, lost: 0, result: null, camMode: S.cam, nextBackup: 25, endT: 0 });
  const e = { i: 4, j: 2, d: [0, 1], t: 30 };
  if (S.mode === 'pursuit') { player = spawnCar('sedan', 'player', 0, 0, 0, { top: 66, acc: 9.5, hp: 140, grip: 12, massMul: 1.25 }); placeOnEdge(player, e, 1.75); player.siren = true; newSuspect(true); }
  else { player = spawnCar('sports', 'player', 0, 0, 0, { paint: '#c41e2a', top: 70, acc: 10.5, hp: 120, grip: 12.2 }); placeOnEdge(player, e, 1.75); suspect = null; spawnCop(true); spawnCop(true); }
  for (let k = 0; k < TRAFFIC[S.traffic] * (isTouch ? .65 : 1); k++) spawnTraffic(true);
  document.body.className = 'playing ' + S.mode + (isTouch ? ' touch' : ''); $('menu').classList.remove('on'); $('over').classList.remove('on'); $('hud').classList.add('on'); camInit = false; last = performance.now();
  radio(S.mode === 'pursuit' ? 'Dispatch: All units, suspect vehicle fleeing on ' + streetOf(suspect) + '. Pursuit authorised.' : 'Dispatch: 211 in progress. Red coupe last seen on ' + streetOf(player) + '. All units respond.');
}
function streetOf(c) { const f = fwd(c); return city.streetAt(c.x, c.z, f[0], f[1]); }
function newSuspect(first) {
  const sp = tierSpec(R.tier), f = fwd(player); let e = null;
  for (let k = 0; k < 40 && !e; k++) { const c = randomEdgeNear(player.x + f[0] * 70, player.z + f[1] * 70, 20, 110, true); if (c && Math.hypot(c.px - player.x, c.pz - player.z) > 45 && lineOfSight(player.x, player.z, c.px, c.pz)) e = c; }
  e = e || randomEdgeNear(player.x, player.z, 60, 160, true);
  suspect = spawnCar(sp.type, 'suspect', 0, 0, 0, { paint: ['#111214', '#e9e9ea', '#c41e2a', '#1f7a3a'][R.tier % 4], top: sp.top, acc: sp.acc, hp: sp.hp, grip: sp.grip });
  addAI(suspect, 'flee', { vmax: sp.top, nitro: R.tier > 0 }); placeOnEdge(suspect, e, 1.75); suspect.ai.A = [e.i, e.j]; suspect.ai.d = e.d; suspect.ai.next = chooseNext(suspect); suspect.vx = Math.sin(suspect.h) * 20; suspect.vz = Math.cos(suspect.h) * 20;
  R.bustMeter = 0; R.escapeT = 0; R.empLock = 0; R.nextBackup = R.t + 22; R.suspT = R.t; if (!first) radio(`Dispatch: New suspect — ${sp.type === 'sports' ? 'sports car' : 'sedan'} heading down ${streetOf(suspect)}. Level ${R.tier + 1}.`);
}
function spawnCop(near, chaseTarget) { const tgt = chaseTarget || player, e = randomEdgeNear(tgt.x, tgt.z, near ? 80 : 120, near ? 170 : 260, true); if (!e) return null;
  const c = spawnCar(Math.random() < .25 ? 'suv' : 'sedan', 'cop', 0, 0, 0, { top: S.mode === 'getaway' ? 56 + R.heat * 3.5 : 60, acc: 8.5 + R.heat * .3, hp: 110, grip: 11.5, massMul: 1.2 });
  addAI(c, 'chase', { target: tgt, vmax: c.top }); placeOnEdge(c, e, 1.75); c.ai.A = [e.i, e.j]; c.ai.d = e.d; c.ai.goal = [tgt.x, tgt.z]; c.ai.next = chooseNext(c); c.siren = true; return c; }
function roadblock(forTarget) {
  const t = forTarget, ai = t.ai; let A, d;
  if (ai) { A = [ai.A[0] + ai.d[0], ai.A[1] + ai.d[1]]; d = ai.next; } else { const f = fwd(t); d = Math.abs(f[0]) > Math.abs(f[1]) ? [Math.sign(f[0]), 0] : [0, Math.sign(f[1])]; A = [clamp(Math.round(t.x / CELL) + d[0], 0, N), clamp(Math.round(t.z / CELL) + d[1], 0, N)]; }
  if (!inGrid(A[0] + d[0], A[1] + d[1])) return false; const [ax, az] = node(A[0], A[1]), cx = ax + d[0] * 55, cz = az + d[1] * 55; if (Math.hypot(cx - t.x, cz - t.z) < 40) return false;
  const g = new THREE.Group(), r = rightOf(d), ang = Math.atan2(d[0], d[1]); const blk = { g, i: A[0], edgeKey: edgeKey(A, d), x: cx, z: cz, cars: [], t: 30 };
  [-1, 1].forEach(s => { const c = spawnCar('sedan', 'cop', cx + r[0] * s * 3.3, cz + r[1] * s * 3.3, ang + Math.PI / 2 + s * .25, { hp: 90, massMul: 1.6 }); c.siren = true; c.parked = true; blk.cars.push(c); });
  const barM = new THREE.MeshStandardMaterial({ color: '#d9d9d9', roughness: .7 }), stripeM = new THREE.MeshStandardMaterial({ color: '#e33', emissive: '#e33', emissiveIntensity: .3 });
  [-6.2, 6.2].forEach(o => { const b = new THREE.Mesh(new THREE.BoxGeometry(2.4, .9, .5), [barM, barM, stripeM, barM, stripeM, stripeM]); b.position.set(cx + r[0] * o, .45, cz + r[1] * o); b.rotation.y = ang + Math.PI / 2; g.add(b); city.addObs({ x: b.position.x, z: b.position.z, r: 1.1, solid: true, block: blk }); });
  scene.add(g); R.blocks.push(blk); return true;
}
function carHit(A, B, v) {
  const pair = (p, q) => (A === p && B === q) || (A === q && B === p);
  if (S.mode === 'pursuit' && suspect && (A === suspect || B === suspect)) { const other = A === suspect ? B : A; if (other.police && v > 4) { const dmg = v * v * .09 + v; suspect.hp = Math.max(0, suspect.hp - dmg); if (other === player) { R.score += Math.round(v * 8); R.nitro = Math.min(1, R.nitro + .12); toast(`RAM +${Math.round(v * 8)}`); } if (suspect.hp <= 0 && !suspect.wreck) wreckCar(suspect); } }
  if (S.mode === 'getaway' && (A === player || B === player)) { const other = A === player ? B : A; if (other.police && v > 6) { R.heatT += 8; other.hp -= v * 1.5; if (other.hp <= 0 && !other.wreck) wreckCar(other); } }
}

/* ------------------------------------------------------------------ outcomes */
function onSuspectWrecked() { if (R.phase !== 'play') return; bustSuspect('TAKEDOWN'); }
function bustSuspect(how) {
  const timeBonus = Math.max(0, Math.round(1500 - (R.t - R.suspT) * 10)), pts = 1000 + R.tier * 500 + timeBonus; R.score += pts; R.busts++; R.tier++;
  Audio.bust(); big(how === 'TAKEDOWN' ? 'TAKEDOWN!' : 'BUSTED!', `+${pts} · suspect ${R.busts} in custody`, 'good'); radio(`Dispatch: Suspect in custody. Nice work, unit 7.`); R.slow = .25; R.slowT = 1.6; R.camMode = 'crash'; R.crashCar = suspect; R.crashT = 2.2;
  const s = suspect; s.siren = false; s.kind = 'traffic'; s.ai = null; s.thr = 0; s.brk = 1; suspect = null; setTimeout(() => { if (cars.includes(s)) { s.wreck = true; } }, 10);
  setTimeout(() => { if (R.phase === 'play' && S.mode === 'pursuit') { R.camMode = S.cam; newSuspect(false); } }, 2600);
}
function onPlayerWrecked() { if (R.phase !== 'play') return; if (S.mode === 'getaway') return endGame('busted', 'Your car is wrecked'); R.strikes++; big('UNIT DISABLED', 'Strike ' + R.strikes + ' of 3', 'bad'); Audio.fail(); if (R.strikes >= 3) return endGame('over', 'Your cruiser was wrecked');
  setTimeout(() => { if (R.phase !== 'play') return; player.hp = player.maxHp; player.wreck = false; player.brk = 0; }, 1800); }
function suspectEscaped() { R.strikes++; Audio.fail(); big('SUSPECT ESCAPED', 'Strike ' + R.strikes + ' of 3', 'bad'); radio('Dispatch: We lost visual. Suspect is gone.'); const s = suspect; suspect = null; if (s) removeCar(s); if (R.strikes >= 3) return endGame('over', 'Three suspects got away'); setTimeout(() => R.phase === 'play' && newSuspect(false), 1800); }
function endGame(kind, why) {
  R.phase = 'over'; R.result = kind; Audio.stopLoops(); const score = Math.round(R.score); const key = S.mode; const isBest = score > (best[key] || 0); if (isBest) { best[key] = score; try { localStorage.setItem('jkpd-best', JSON.stringify(best)); } catch (e) {} }
  const t = Math.floor(R.t), mm = Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
  $('ovT').textContent = kind === 'escaped' ? 'Escaped!' : kind === 'busted' ? 'Busted' : 'Shift over'; $('ovT').className = kind === 'escaped' ? 'good' : 'bad'; $('ovS').textContent = why;
  $('ovStats').innerHTML = (S.mode === 'pursuit' ? [['Suspects caught', R.busts], ['Time on patrol', mm], ['Score', score.toLocaleString()]] : [['Time evading', mm], ['Max heat', '★'.repeat(R.heat)], ['Cops wrecked', R.copsOut], ['Score', score.toLocaleString()]]).map(([a, b]) => `<div><span>${a}</span><b>${b}</b></div>`).join('') + (isBest ? '<p class="nb">New best!</p>' : `<p>Best: ${(best[key] || 0).toLocaleString()}</p>`);
  setTimeout(() => $('over').classList.add('on'), 1200);
}

/* ------------------------------------------------------------------ input */
const keys = {}, touchK = {};
addEventListener('keydown', e => { keys[e.code] = true; Audio.init(); if (R.phase === 'menu') { if (e.code === 'Enter') startGame(); return; }
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause(); if (e.code === 'KeyC') cycleCam(); if (e.code === 'KeyM') $('snd').textContent = Audio.toggle() ? '🔊' : '🔇';
  if (e.code === 'KeyH') { Audio.sirenMode(); Audio.horn(); } if (e.code === 'KeyQ') useBlock(); if (e.code === 'KeyR') resetCar(); if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault(); });
addEventListener('keyup', e => { keys[e.code] = false; }); addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
document.querySelectorAll('[data-k]').forEach(b => { const k = b.dataset.k;
  b.addEventListener('pointerdown', e => { e.preventDefault(); Audio.init(); touchK[k] = true; b.classList.add('on'); if (k === 'cam') cycleCam(); if (k === 'pause') togglePause(); if (k === 'block') useBlock(); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, e => { e.preventDefault(); touchK[k] = false; b.classList.remove('on'); })); });
function readInput() { let pad = null; const ps = navigator.getGamepads ? navigator.getGamepads() : []; for (const p of ps) if (p && p.connected) { pad = p; break; }
  let thr = (keys.KeyW || keys.ArrowUp || touchK.gas) ? 1 : 0, brk = (keys.KeyS || keys.ArrowDown || touchK.brake) ? 1 : 0, st = ((keys.KeyD || keys.ArrowRight || touchK.right) ? 1 : 0) - ((keys.KeyA || keys.ArrowLeft || touchK.left) ? 1 : 0), analog = false;
  let hb = keys.Space || touchK.hb, nitro = keys.ShiftLeft || keys.ShiftRight || touchK.nitro, emp = keys.KeyE || touchK.emp;
  if (pad) { const ax = pad.axes[0] || 0; if (Math.abs(ax) > .1) { st = Math.sign(ax) * ((Math.abs(ax) - .1) / .9) ** 1.3; analog = true; } const b = i => pad.buttons[i] ? pad.buttons[i].value : 0; thr = Math.max(thr, b(7)); brk = Math.max(brk, b(6)); hb = hb || b(0) > .5; nitro = nitro || b(1) > .5 || b(5) > .5; emp = emp || b(2) > .5; if (b(3) > .5 && !readInput.y) cycleCam(); readInput.y = b(3) > .5; }
  return { thr, brk, st, analog, hb: hb ? 1 : 0, nitro, emp }; }
function togglePause(f) { if (R.phase !== 'play') return; R.paused = f !== undefined ? f : !R.paused; $('pause').classList.toggle('on', R.paused); if (R.paused) Audio.stopLoops(); last = performance.now(); }
document.addEventListener('visibilitychange', () => { if (document.hidden) togglePause(true); });
function cycleCam() { if (R.phase !== 'play') return; const L = ['chase', 'far', 'hood']; S.cam = L[(L.indexOf(S.cam) + 1) % 3]; R.camMode = S.cam; save(); camInit = false; toast({ chase: 'CHASE CAM', far: 'FAR CAM', hood: 'HOOD CAM' }[S.cam]); }
function resetCar() { if (R.phase !== 'play' || player.wreck) return; const f = fwd(player), d = Math.abs(f[0]) > Math.abs(f[1]) ? [Math.sign(f[0]), 0] : [0, Math.sign(f[1])], r = rightOf(d);
  if (d[0]) { player.z = clamp(Math.round(player.z / CELL), 0, N) * CELL + r[1] * 1.75; player.x = clamp(player.x, 0, SIZE); } else { player.x = clamp(Math.round(player.x / CELL), 0, N) * CELL + r[0] * 1.75; player.z = clamp(player.z, 0, SIZE); }
  player.h = Math.atan2(d[0], d[1]); player.vx = player.vz = player.w = 0; R.score = Math.max(0, R.score - 100); toast('RESET −100'); }
function useBlock() { if (R.phase !== 'play' || S.mode !== 'pursuit' || !suspect || R.blockCd > 0) return; if (roadblock(suspect)) { R.blockCd = 35; Audio.radio(); radio('Unit 7: Requesting roadblock ahead of the suspect. — Copy, units deploying.'); toast('ROADBLOCK DEPLOYED'); } else toast('NO ROOM FOR A ROADBLOCK'); }

/* ------------------------------------------------------------------ step */
let thinkN = 0;
function step(h) {
  R.t += h; thinkN++; const think = thinkN % 4 === 0, inp = R.inp || { thr: 0, brk: 0, st: 0, hb: 0 };
  // signals: EW green 11s, yellow 2.5, NS green 11, yellow 2.5
  R.sigT += h; const ph = R.sigT % 27 < 11 ? 0 : R.sigT % 27 < 13.5 ? 1 : R.sigT % 27 < 24.5 ? 2 : 3; if (ph !== R.sigPhase) { R.sigPhase = ph; city.setSignals(ph); }
  // player controls
  const p = player;
  if (!p.wreck) { const kb = inp.analog ? 1 : 1 - Math.exp(-h * (inp.st ? 6 : 10)); p.steer = inp.analog ? inp.st : lerp(p.steer, inp.st, kb); p.thr = inp.thr; p.brk = inp.brk; p.hb = inp.hb;
    p.nitro = inp.nitro && R.nitro > 0 && inp.thr > 0; if (p.nitro) { R.nitro = Math.max(0, R.nitro - h * .22); if (!step.n2o) { Audio.nitro(); step.n2o = 1; } } else { step.n2o = 0; R.nitro = Math.min(1, R.nitro + h * .02); } }
  for (const c of cars) { if (c.ai && !c.parked) drive(c, h, think); if (c.parked) { c.thr = 0; c.brk = 1; } physics(c, h); }
  carCollisions();
  if (think && R.phase === 'play') mode(h * 4, inp);
}
function mode(dt, inp) {
  if (R.blockCd > 0) R.blockCd -= dt; if (R.empCd > 0) R.empCd -= dt;
  R.blocks = R.blocks.filter(b => { b.t -= dt; if (b.t > 0) return true; if (Math.hypot(b.x - player.x, b.z - player.z) < 150) { b.t = 2; return true; } scene.remove(b.g); b.cars.forEach(removeCar); for (const l of city.obs.values()) for (let k = l.length - 1; k >= 0; k--) if (l[k].block === b) l.splice(k, 1); return false; });
  if (S.mode === 'pursuit') {
    if (!suspect) return; const s = suspect, d = Math.hypot(s.x - player.x, s.z - player.z);
    // cops & helicopter know where the suspect is; backup units join
    for (const c of cars) if (c.kind === 'cop' && c.ai) { c.ai.target = s; c.ai.goal = [s.x + s.vx * 2, s.z + s.vz * 2]; }
    if (R.t > R.nextBackup && cars.filter(c => c.kind === 'cop' && !c.parked && !c.wreck).length < Math.min(3, 1 + R.tier)) { if (spawnCop(false, s)) radio('Unit ' + (12 + Math.floor(Math.random() * 40)) + ': Joining the pursuit on ' + streetOf(s) + '.'); R.nextBackup = R.t + 30; }
    // EMP lock: suspect in front, close
    const f = fwd(player), dx = s.x - player.x, dz = s.z - player.z, ahead = (dx * f[0] + dz * f[1]) / Math.max(d, 1);
    if (R.empCd <= 0 && d < 75 && ahead > .94 && lineOfSight(player.x, player.z, s.x, s.z)) { R.empLock = Math.min(1, R.empLock + dt / 1.6); if (R.empLock >= 1 && inp.emp) { s.emp = 3; s.hp = Math.max(0, s.hp - 18); R.empCd = 14; R.empLock = 0; Audio.emp(); toast('EMP HIT'); for (let k = 0; k < 40; k++) sparks.emit(s.x, 1, s.z, (Math.random() - .5) * 8, Math.random() * 6, (Math.random() - .5) * 8, .6, .12, 0, [.4, .7, 1], 1, .3, 4); if (s.hp <= 0 && !s.wreck) wreckCar(s); } }
    else R.empLock = Math.max(0, R.empLock - dt);
    // bust by boxing in
    const copsNear = cars.filter(c => c.police && !c.wreck && Math.hypot(c.x - s.x, c.z - s.z) < 11).length;
    if (speedOf(s) < 3.5 && copsNear > 0) { R.bustMeter += dt / (copsNear > 1 ? 1.4 : 2.4); if (R.bustMeter >= 1) bustSuspect('BUSTED'); } else R.bustMeter = Math.max(0, R.bustMeter - dt * .6);
    // escape
    if (d > 240) { R.escapeT += dt; if (R.escapeT > 14) suspectEscaped(); } else R.escapeT = Math.max(0, R.escapeT - dt * 2);
    R.score += dt * 2;
  } else {
    // getaway: heat climbs, more cops, roadblocks, helicopter
    R.heatT += dt; if (R.heatT > 32 && R.heat < 5) { R.heat++; R.heatT = 0; toast('HEAT LEVEL ' + R.heat); radio(['', '', 'Dispatch: Suspect is armed. Add more units.', 'Dispatch: Spike strips and roadblocks authorised.', 'Dispatch: Air support inbound.', 'Dispatch: All units, all units. Stop that car.'][R.heat]); }
    const cops = cars.filter(c => c.kind === 'cop' && !c.parked && !c.wreck);
    let seen = false; for (const c of cops) { const d = Math.hypot(c.x - player.x, c.z - player.z); const sees = d < 50 || (d < 160 && lineOfSight(c.x, c.z, player.x, player.z)); if (sees) { seen = true; c.ai.goal = [player.x + player.vx * 2, player.z + player.vz * 2]; c.ai.target = player; } else { c.ai.target = null; if (R.lost < 3) c.ai.goal = [player.x, player.z]; } }
    if (R.helo && R.heat >= 4) { const hd = Math.hypot(R.helo.x - player.x, R.helo.z - player.z); if (hd < 40) seen = true; }
    if (seen) { R.lost = 0; R.cool = 0; } else { R.lost += dt; R.cool += dt; if (R.cool > 9) { R.escapes++; const bonus = Math.round(1000 * R.heat); R.score += bonus; Audio.bust(); big('ESCAPED', `+${bonus} · cops lost you`, 'good'); radio('Dispatch: We lost him. All units, resume patrol.'); R.cool = 0; R.heat = Math.max(1, R.heat - 1); R.heatT = 0; cops.forEach(c => { c.siren = false; c.ai.style = 'traffic'; c.ai.vmax = 14; c.kind = 'traffic'; c.police = true; }); R.calm = 12; } }
    if (R.calm > 0) R.calm -= dt; else if (cops.length < 1 + R.heat) spawnCop(false, player);
    if (R.heat >= 3 && (!R.nextBlock || R.t > R.nextBlock) && speedOf(player) > 12) { if (roadblock(player)) radio('Dispatch: Roadblock set up ahead on ' + streetOf(player) + '.'); R.nextBlock = R.t + 28; }
    const near = cops.filter(c => Math.hypot(c.x - player.x, c.z - player.z) < 10).length;
    if (speedOf(player) < 4 && near > 0) { R.bustMeter += dt / (near > 1 ? 1.8 : 3); if (R.bustMeter >= 1) endGame('busted', 'Boxed in by ' + near + ' unit' + (near > 1 ? 's' : '')); } else R.bustMeter = Math.max(0, R.bustMeter - dt * .5);
    R.score += dt * (10 + R.heat * 6) * (seen ? 1 : .3);
  }
  manageTraffic();
}

/* ------------------------------------------------------------------ visuals */
const heloG = (() => { const g = new THREE.Group(); const cone = new THREE.Mesh(new THREE.ConeGeometry(9, 70, 24, 1, true).translate(0, -35, 0), new THREE.MeshBasicMaterial({ color: '#cfe2ff', transparent: true, opacity: .07, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
  const spot = new THREE.Mesh(new THREE.CircleGeometry(9, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: '#dfe9ff', transparent: true, opacity: .32, blending: THREE.AdditiveBlending, depthWrite: false })); spot.position.y = -69.9;
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(1.2, 3, 4, 8).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#111', roughness: .4 })), blink = new THREE.Mesh(new THREE.SphereGeometry(.25), new THREE.MeshBasicMaterial({ color: new THREE.Color(5, .2, .2), toneMapped: false })); blink.position.y = -1.3;
  g.add(cone, spot, body, blink); g.visible = false; scene.add(g); return { g, blink, x: 0, z: 0 }; })();
function updateVisuals(dt) {
  const t = performance.now() / 1000; let fi = 0; const near = cars.filter(c => c.siren && !c.wreck).sort((a, b) => Math.hypot(a.x - cam.position.x, a.z - cam.position.z) - Math.hypot(b.x - cam.position.x, b.z - cam.position.z));
  for (const c of cars) {
    const m = c.mesh, u = m.userData; m.position.set(c.x, 0, c.z); m.rotation.y = c.h; const sp = speedOf(c);
    const acc = dt > 0 ? ((c.vF || 0) - (c.lastV || 0)) / dt : 0; c.lastV = c.vF || 0;
    c.pitch = lerp(c.pitch || 0, clamp(-acc * .004, -.05, .05), 1 - Math.exp(-dt * 6)); c.roll = lerp(c.roll || 0, clamp(c.w * sp * .004, -.07, .07), 1 - Math.exp(-dt * 6));
    u.body.rotation.set(c.pitch, 0, c.roll); u.body.position.y = c.wreck ? -.05 : 0;
    u.tailM.color.setRGB(c.brk > .1 ? 5 : 1.4, .05, .04); u.beam.visible = !c.wreck;
    if (u.red) { const [a, b] = setLightbar(m, t + c.sTime, c.siren); if (fi < 3 && near.includes(c) && near.indexOf(c) < 3) { const l = flash[fi++]; l.position.set(c.x, 2.2, c.z); l.color.setRGB(a, 0, b); l.intensity = (a + b) * 16; } }
    if (c.slip > 3.5 && sp > 6 && Math.random() < .7) { const f = fwd(c); [1, -1].forEach(s => smoke.emit(c.x - f[0] * 1.6 + f[1] * .8 * s, .3, c.z - f[1] * 1.6 - f[0] * .8 * s, (Math.random() - .5) * 2, .5, (Math.random() - .5) * 2, 1.6, .9, 2.4, SMOKE, .22, .5)); }
    if (c.hp < c.maxHp * .35 && Math.random() < (c.wreck ? .5 : .2)) { const f = fwd(c); smoke.emit(c.x + f[0] * 1.6, 1.1, c.z + f[1] * 1.6, (Math.random() - .5), 2 + Math.random(), (Math.random() - .5), 2.2, .7, 1.6, c.wreck ? DARK : SMOKE, .45, .7); if (c.wreck && Math.random() < .5) sparks.emit(c.x + f[0] * 1.6, 1, c.z + f[1] * 1.6, (Math.random() - .5), 2 + Math.random() * 2, (Math.random() - .5), .5, .35, -.4, FIRE, .8, .6); }
    if (c.nitro && Math.random() < .9) { const f = fwd(c); sparks.emit(c.x - f[0] * 2.5, .45, c.z - f[1] * 2.5, -f[0] * 8, .2, -f[1] * 8, .18, .32, -1, [.4, .6, 1], .9, .2); }
  }
  for (; fi < 3; fi++) flash[fi].intensity = 0;
  // helicopter (pursuit: tracks the suspect after a while; getaway: heat 4+)
  const heloOn = R.phase === 'play' && ((S.mode === 'pursuit' && suspect && R.t - R.suspT > 30) || (S.mode === 'getaway' && R.heat >= 4)); heloG.g.visible = heloOn; R.helo = heloOn ? heloG : null;
  if (heloOn) { const tg = S.mode === 'pursuit' ? suspect : player, dx = tg.x - heloG.x, dz = tg.z - heloG.z, d = Math.hypot(dx, dz), sp = S.mode === 'pursuit' ? 80 : 34; if (d > 400) { heloG.x = tg.x - dx / d * 300; heloG.z = tg.z - dz / d * 300; } else { const k = Math.min(1, sp * dt / Math.max(d, 1)); heloG.x += dx * k; heloG.z += dz * k; } heloG.g.position.set(heloG.x, 70, heloG.z); heloG.blink.visible = Math.sin(t * 8) > 0; }
}
let camInit = false; const camPos = new THREE.Vector3(), lookP = new THREE.Vector3(); let camYaw = 0;
function updateCamera(dt) {
  const c = player; if (!c) return; let fov = 62;
  if (R.camMode === 'orbit') { R.orbit += dt * .13; const r = 8.4; cam.position.set(c.x + Math.sin(R.orbit) * r, 1.8 + Math.sin(R.orbit * .6) * .4, c.z + Math.cos(R.orbit) * r); cam.lookAt(c.x, .8, c.z); fov = 42; }
  else if (R.camMode === 'crash' && R.crashCar) { R.orbit += dt * .5; const s = R.crashCar; cam.position.lerp(camPos.set(s.x + Math.sin(R.orbit) * 9, 3.2, s.z + Math.cos(R.orbit) * 9), 1 - Math.exp(-dt * 3)); cam.lookAt(s.x, .8, s.z); fov = 52; }
  else if (R.camMode === 'hood') { const f = fwd(c); cam.position.set(c.x + f[0] * .6, 1.32, c.z + f[1] * .6); cam.lookAt(c.x + f[0] * 20, 1.1, c.z + f[1] * 20); fov = 70 + speedOf(c) * .18; }
  else { const far = R.camMode === 'far', sp = speedOf(c), vh = sp > 3 ? Math.atan2(c.vx, c.vz) : c.h, want = c.h + angD(vh, c.h) * .45;
    if (!camInit) { camYaw = want; camInit = true; } camYaw += angD(want, camYaw) * (1 - Math.exp(-dt * (far ? 3.5 : 5)));
    const dist = (far ? 10.5 : 6.8) + sp * .03, hgt = far ? 4 : 2.45, tx = c.x - Math.sin(camYaw) * dist, tz = c.z - Math.cos(camYaw) * dist;
    // keep the camera out of buildings
    let px = tx, pz = tz, up = 0; for (let k = 0; k < 3; k++) { const hit = city.collide(px, pz, .6); if (hit) { px += hit.nx * hit.pen; pz += hit.nz * hit.pen; up += hit.pen; } }
    R.camUp = lerp(R.camUp || 0, Math.min(5, up * 2), 1 - Math.exp(-dt * 4)); cam.position.set(px, hgt + R.camUp, pz); lookP.set(c.x + Math.sin(c.h) * 4, 1.1, c.z + Math.cos(c.h) * 4); cam.lookAt(lookP); fov = 60 + sp * .32 + (c.nitro ? 6 : 0); }
  if (R.shake > 0) { R.shake = Math.max(0, R.shake - dt * 2.5); const s = R.shake * .18; cam.position.x += (Math.random() - .5) * s; cam.position.y += (Math.random() - .5) * s; }
  cam.fov = clamp(lerp(cam.fov, fov, 1 - Math.exp(-dt * 4)), 30, 100); if (R.phase === 'menu' && innerWidth > 760) cam.setViewOffset(innerWidth, innerHeight, -innerWidth * .17, 0, innerWidth, innerHeight); else cam.clearViewOffset(); cam.updateProjectionMatrix();
  moon.position.set(c.x + 60, 160, c.z - 90); moon.target.position.set(c.x, 0, c.z);
  const f = fwd(c); head.position.set(c.x + f[0] * 2.3, .85, c.z + f[1] * 2.3); head.target.position.set(c.x + f[0] * 22, 0, c.z + f[1] * 22); head.intensity = c.wreck ? 0 : 90;
  cityG.userData.sky.position.set(cam.position.x, 0, cam.position.z);
  smoke.mat.uniforms.scale.value = sparks.mat.uniforms.scale.value = renderer.domElement.height / (2 * Math.tan(cam.fov * Math.PI / 360));
}

/* ------------------------------------------------------------------ HUD */
const lastHud = {}; function setTxt(id, v) { if (lastHud[id] !== v) { lastHud[id] = v; $(id).textContent = v; } }
function toast(t) { const n = $('toast'); n.textContent = t; n.classList.remove('on'); void n.offsetWidth; n.classList.add('on'); }
function big(t, s, cls) { $('bigT').textContent = t; $('bigS').textContent = s; const b = $('big'); b.className = 'on ' + (cls || ''); clearTimeout(big.tm); big.tm = setTimeout(() => b.className = '', 2800); }
function radio(t) { const r = $('radio'), d = document.createElement('div'); d.textContent = t; r.prepend(d); while (r.children.length > 3) r.lastChild.remove(); setTimeout(() => d.classList.add('old'), 7000); Audio.radio(); }
function flashHit() { const f = $('hitfx'); f.classList.remove('on'); void f.offsetWidth; f.classList.add('on'); }
const mmDots = $('mmDots').getContext('2d'), arrow = $('arrow'), v3 = new THREE.Vector3();
function updateHUD() {
  const p = player; if (!p || R.phase === 'menu') return;
  setTxt('spd', Math.round(speedOf(p) * MPH)); setTxt('score', Math.round(R.score).toLocaleString()); setTxt('street', streetOf(p));
  $('hpBar').style.width = (p.hp / p.maxHp * 100) + '%'; $('n2oBar').style.width = (R.nitro * 100) + '%';
  const tm = Math.floor(R.t); setTxt('clock', Math.floor(tm / 60) + ':' + String(tm % 60).padStart(2, '0'));
  if (S.mode === 'pursuit') {
    setTxt('lvl', 'SUSPECTS ' + R.busts + ' · STRIKES ' + '✕'.repeat(R.strikes) + '○'.repeat(3 - R.strikes));
    const s = suspect; $('obj').style.visibility = s ? 'visible' : 'hidden';
    if (s) { const d = Math.hypot(s.x - p.x, s.z - p.z); $('susBar').style.width = (s.hp / s.maxHp * 100) + '%'; setTxt('susD', Math.round(d * 1.094) + ' yd');
      setTxt('susS', R.escapeT > 0 ? 'SUSPECT GETTING AWAY ' + Math.ceil(14 - R.escapeT) + 's' : R.bustMeter > .05 ? 'ARRESTING…' : s.emp > 0 ? 'EMP — ENGINE DOWN' : 'IN PURSUIT · ' + streetOf(s).toUpperCase());
      $('susS').className = R.escapeT > 0 ? 'warn' : R.bustMeter > .05 ? 'good' : '';
      // off-screen arrow
      v3.set(s.x, 1, s.z).project(cam); const off = v3.z > 1 || Math.abs(v3.x) > .92 || Math.abs(v3.y) > .9; arrow.style.display = off ? 'block' : 'none';
      if (off) { let ax = v3.x, ay = v3.y; if (v3.z > 1) { ax = -ax; ay = -ay; } const a = Math.atan2(-ay, ax), r = Math.min(innerWidth, innerHeight) * .38; arrow.style.transform = `translate(${innerWidth / 2 + Math.cos(a) * r}px,${innerHeight / 2 + Math.sin(a) * r}px) rotate(${a}rad)`; } }
    else arrow.style.display = 'none';
    $('empBtn').style.setProperty('--p', R.empCd > 0 ? 1 - R.empCd / 14 : R.empLock); $('empBtn').classList.toggle('ready', R.empLock >= 1 && R.empCd <= 0);
    $('blkBtn').style.setProperty('--p', R.blockCd > 0 ? 1 - R.blockCd / 35 : 1); $('blkBtn').classList.toggle('ready', R.blockCd <= 0);
  } else {
    setTxt('lvl', 'HEAT ' + '★'.repeat(R.heat) + '☆'.repeat(5 - R.heat)); arrow.style.display = 'none';
    $('coolBar').style.width = (Math.min(1, R.cool / 9) * 100) + '%'; setTxt('coolS', R.lost > 0 ? 'OUT OF SIGHT — COOLING DOWN' : 'COPS HAVE EYES ON YOU'); $('coolS').className = R.lost > 0 ? 'good' : 'warn';
  }
  $('bustRing').style.setProperty('--p', R.bustMeter); $('bustRing').classList.toggle('on', R.bustMeter > .02);
  // minimap
  const g = mmDots; g.clearRect(0, 0, 220, 220);
  for (const b of R.blocks) { const [x, y] = toMM(b.x, b.z); g.fillStyle = '#ffcc33'; g.fillRect(x - 4, y - 4, 8, 8); }
  for (const c of cars) { if (c === p) continue; const [x, y] = toMM(c.x, c.z); if (c === suspect) { g.fillStyle = (performance.now() / 250 | 0) % 2 ? '#ff3344' : '#fff'; g.beginPath(); g.arc(x, y, 5, 0, 7); g.fill(); } else if (c.police && c.siren) { g.fillStyle = '#3d7bff'; g.beginPath(); g.arc(x, y, 3.6, 0, 7); g.fill(); } else if (Math.hypot(c.x - p.x, c.z - p.z) < 150) { g.fillStyle = 'rgba(255,255,255,.35)'; g.fillRect(x - 1.5, y - 1.5, 3, 3); } }
  const [px, py] = toMM(p.x, p.z); g.save(); g.translate(px, py); g.rotate(-p.h + Math.PI); g.fillStyle = '#b8f36b'; g.strokeStyle = '#000'; g.lineWidth = 2; g.beginPath(); g.moveTo(0, -7); g.lineTo(5, 5); g.lineTo(-5, 5); g.closePath(); g.fill(); g.stroke(); g.restore();
}

/* ------------------------------------------------------------------ menu + loop */
function chips(id, opts, key, after) { const el = $(id); el.innerHTML = ''; opts.forEach(([v, label]) => { const b = document.createElement('button'); b.className = 'chip' + (S[key] === v ? ' on' : ''); b.textContent = label; b.onclick = () => { Audio.init(); Audio.click(); S[key] = v; save(); [...el.children].forEach(x => x.classList.remove('on')); b.classList.add('on'); after && after(v); }; el.appendChild(b); }); }
function paintMenu() {
  document.querySelectorAll('.mcard').forEach(b => { b.classList.toggle('on', b.dataset.mode === S.mode); b.onclick = () => { Audio.init(); Audio.click(); S.mode = b.dataset.mode; save(); paintMenu(); menuCar(); }; });
  $('bestP').textContent = (best.pursuit || 0).toLocaleString(); $('bestG').textContent = (best.getaway || 0).toLocaleString();
  chips('mTraffic', [['light', 'Light'], ['normal', 'Normal'], ['heavy', 'Heavy']], 'traffic'); chips('mCam', [['chase', 'Chase'], ['far', 'Far'], ['hood', 'Hood']], 'cam'); chips('mQual', [['auto', 'Auto'], ['high', 'High'], ['medium', 'Medium'], ['low', 'Low']], 'quality', () => location.reload());
}
function menuCar() { for (const c of cars.slice()) removeCar(c); const e = { i: 4, j: 4, d: [1, 0], t: 70 }; player = spawnCar(S.mode === 'pursuit' ? 'sedan' : 'sports', 'player', 0, 0, 0, { paint: '#c41e2a' }); placeOnEdge(player, e, 1.75); player.siren = S.mode === 'pursuit'; suspect = null; R.camMode = 'orbit'; }
function toMenu() { R.phase = 'menu'; R.paused = false; Audio.stopLoops(); R.blocks.forEach(b => { scene.remove(b.g); b.cars.forEach(removeCar); }); R.blocks = []; document.body.className = isTouch ? 'touch' : ''; $('hud').classList.remove('on'); $('over').classList.remove('on'); $('pause').classList.remove('on'); $('menu').classList.add('on'); menuCar(); paintMenu(); }
$('go').onclick = () => { Audio.init(); Audio.click(); startGame(); }; $('ovAgain').onclick = () => startGame(); $('ovMenu').onclick = () => toMenu();
$('pResume').onclick = () => togglePause(false); $('pRestart').onclick = () => startGame(); $('pMenu').onclick = () => toMenu();
$('snd').onclick = () => { Audio.init(); $('snd').textContent = Audio.toggle() ? '🔊' : '🔇'; }; $('snd').textContent = Audio.on ? '🔊' : '🔇';

let last = performance.now(), acc = 0, fpsT = 0, fpsN = 0;
function frame(now) {
  requestAnimationFrame(frame); let dt = clamp((now - last) / 1000, 0, .05); last = Math.max(last, now);
  R.inp = readInput();
  if (R.slowT > 0) { R.slowT -= dt; if (R.slowT <= 0) R.slow = 1; }
  const sdt = dt * R.slow;
  if ((R.phase === 'play' || R.phase === 'over') && !R.paused) { acc += sdt; let n = 0; while (acc >= H && n < 10) { step(H); acc -= H; n++; } if (n >= 10) acc = 0; updateProps(sdt); }
  if (R.crashT > 0) { R.crashT -= dt; if (R.crashT <= 0 && R.camMode === 'crash') R.camMode = S.cam; }
  if (!R.paused) { updateVisuals(sdt); smoke.update(sdt); sparks.update(sdt); }
  updateCamera(dt); if (R.phase === 'play') updateHUD();
  if (player && !R.paused) { const sp = speedOf(player), play = R.phase === 'play' || R.phase === 'menu'; Audio.engine(900 + Math.min(1, sp / player.top) * 5200 + player.thr * 600, R.phase === 'menu' ? .1 : player.thr, play && R.phase !== 'menu');
    let sd = 1e9; for (const c of cars) if (c.siren && !c.wreck) sd = Math.min(sd, Math.hypot(c.x - player.x, c.z - player.z)); Audio.sirenTick(now / 1000, R.phase === 'play' && sd < 250, player.siren ? 0 : sd); Audio.surface(R.phase === 'play' ? player.slip : 0, sp); }
  if (composer && !window.__direct) composer.render(); else renderer.render(scene, cam);
  fpsT += dt; fpsN++; if (fpsT > 2) { const fps = fpsN / fpsT; fpsT = 0; fpsN = 0; const ps = prScale; if (fps < 40 && prScale > .6) prScale = Math.max(.6, prScale - .1); else if (fps > 57 && prScale < 1) prScale = Math.min(1, prScale + .05); if (ps !== prScale) resize(); }
}
menuCar(); paintMenu(); city.setSignals(0); renderer.compile(scene, cam); $('menu').classList.add('on'); $('loading').classList.remove('on'); requestAnimationFrame(frame);
window.__pd = { S, R, get cars() { return cars; }, get player() { return player; }, get suspect() { return suspect; }, city, step, startGame, toMenu, cam, renderer, keys, endGame };
