// JK Iron Seas — long-range naval gunnery. Follow your shells to the target.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { buildOcean, buildSky, buildIslands, waveHeight, ISLANDS } from './ocean.js';
import { CLASSES, buildShip, insideHull, halfBeam } from './ships.js';
import { Audio } from './audio.js';
import { buildJet, glowTexture } from './jetmodel.js';

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t, rnd = (a, b) => a + Math.random() * (b - a);
const angD = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
const gauss = () => { let u = 0, v = 0; while (!u) u = Math.random(); v = Math.random(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
const isTouch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
const KN = 1.944, G = 9.81, ARENA = 12500;

/* ------------------------------------------------------------------ settings */
let S = { ship: 'ca', shellCam: true, quality: 'auto', sens: 1 }; try { Object.assign(S, JSON.parse(localStorage.getItem('jkn-settings') || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem('jkn-settings', JSON.stringify(S)); } catch (e) {} };
let best = 0; try { best = +localStorage.getItem('jkn-best') || 0; } catch (e) {}
const Q = S.quality === 'auto' ? (isTouch ? 'medium' : 'high') : S.quality;

/* ------------------------------------------------------------------ renderer + world */
const renderer = new THREE.WebGLRenderer({ canvas: $('gl'), antialias: Q !== 'low', powerPreference: 'high-performance', logarithmicDepthBuffer: false });
const basePR = Math.min(devicePixelRatio || 1, Q === 'high' ? 2 : Q === 'medium' ? 1.5 : 1); let prScale = 1;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .55; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = Q === 'high'; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 60000);
const { sky, sun } = buildSky(renderer, scene, 9, 205); scene.add(sky);
scene.fog = new THREE.Fog('#b9a993', 2500, 26000);
const sunL = new THREE.DirectionalLight('#ffd9a8', 2.1); sunL.position.copy(sun).multiplyScalar(1000); sunL.castShadow = Q === 'high'; sunL.shadow.mapSize.set(2048, 2048); Object.assign(sunL.shadow.camera, { left: -180, right: 180, top: 180, bottom: -180, near: 10, far: 3000 }); sunL.shadow.bias = -.0005; sunL.shadow.normalBias = .5; scene.add(sunL, sunL.target);
scene.add(new THREE.HemisphereLight('#bcd2ec', '#3a4650', .55));
const ocean = buildOcean(Q); scene.add(ocean); scene.add(buildIslands());
let composer = null, bloom = null;
if (Q !== 'low') { const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: Q === 'high' ? 4 : 0 }); rt.depthTexture = new THREE.DepthTexture(1, 1); rt.depthTexture.type = THREE.FloatType;
  composer = new EffectComposer(renderer, rt); composer.addPass(new RenderPass(scene, cam)); bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), .22, .25, 2.4); composer.addPass(bloom); composer.addPass(new OutputPass()); }
function resize() { const w = innerWidth, h = innerHeight; cam.aspect = w / h; cam.updateProjectionMatrix(); renderer.setPixelRatio(basePR * prScale); renderer.setSize(w, h, false); if (composer) { composer.setPixelRatio(basePR * prScale); composer.setSize(w, h); bloom.resolution.set(w / 2, h / 2); } }
addEventListener('resize', resize); resize();

/* ------------------------------------------------------------------ particles */
class Parts {
  constructor(max, additive, soft = true) {
    this.max = max; this.i = 0; this.p = new Float32Array(max * 3); this.v = new Float32Array(max * 3); this.c = new Float32Array(max * 3); this.sz = new Float32Array(max); this.al = new Float32Array(max);
    this.age = new Float32Array(max).fill(1e9); this.life = new Float32Array(max).fill(1); this.s0 = new Float32Array(max); this.gr = new Float32Array(max); this.a0 = new Float32Array(max); this.drag = new Float32Array(max); this.grav = new Float32Array(max);
    const g = new THREE.BufferGeometry(); for (const [n, a, k] of [['position', this.p, 3], ['color', this.c, 3], ['size', this.sz, 1], ['alpha', this.al, 1]]) g.setAttribute(n, new THREE.BufferAttribute(a, k).setUsage(THREE.DynamicDrawUsage)); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e7);
    this.mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, uniforms: { scale: { value: 500 } },
      vertexShader: 'attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vA=alpha*smoothstep(size*.6,size*2.5+8.,-mv.z); gl_PointSize=clamp(size*scale/-mv.z,1.5,500.); gl_Position=projectionMatrix*mv; }',
      fragmentShader: `varying vec3 vC; varying float vA; void main(){ vec2 q=gl_PointCoord-.5; float r=length(q); if(r>.5||vA<.004) discard; float n=fract(sin(dot(floor(gl_PointCoord*6.),vec2(12.9,78.2)))*43758.5); gl_FragColor=vec4(vC*(${soft ? '.85+.3*n' : '1.'}), vA*smoothstep(.5,.0,r)); }` });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 3; scene.add(this.pts); this.g = g;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, col, alpha, drag = 1, grav = 0) { const i = this.i; this.i = (i + 1) % this.max; this.p[i * 3] = x; this.p[i * 3 + 1] = y; this.p[i * 3 + 2] = z; this.v[i * 3] = vx; this.v[i * 3 + 1] = vy; this.v[i * 3 + 2] = vz;
    this.c[i * 3] = col[0]; this.c[i * 3 + 1] = col[1]; this.c[i * 3 + 2] = col[2]; this.age[i] = 0; this.life[i] = life; this.s0[i] = size; this.gr[i] = grow; this.a0[i] = alpha; this.drag[i] = drag; this.grav[i] = grav; }
  update(dt) { for (let i = 0; i < this.max; i++) { const a = this.age[i] += dt, L = this.life[i]; if (a > L) { this.al[i] = 0; continue; } const k = i * 3, d = Math.pow(this.drag[i], dt);
    this.v[k] *= d; this.v[k + 1] = this.v[k + 1] * d - this.grav[i] * dt; this.v[k + 2] *= d; this.p[k] += this.v[k] * dt; this.p[k + 1] += this.v[k + 1] * dt; this.p[k + 2] += this.v[k + 2] * dt;
    this.sz[i] = this.s0[i] * (1 + this.gr[i] * a); this.al[i] = this.a0[i] * (1 - a / L) * Math.min(1, a * 10); }
    for (const n of ['position', 'color', 'size', 'alpha']) this.g.attributes[n].needsUpdate = true; }
}
const water = new Parts(Q === 'low' ? 1500 : Q === 'medium' ? 2500 : 4000, false), smoke = new Parts(Q === 'low' ? 1200 : Q === 'medium' ? 2000 : 3000, false), fire = new Parts(1500, true, false), trail = new Parts(1500, false);
const WHITE = [.93, .95, .97], MIST = [.8, .85, .88], BLACK = [.1, .1, .11], GRAYS = [.42, .43, .45], ORANGE = [1, .55, .15], FLASH = [1, .8, .45], TRAIL = [.75, .75, .76];

/* ------------------------------------------------------------------ ballistics */
const BAL = {}, EMAX = 18 * Math.PI / 180; // arcade ballistics: heavier gravity + faster shells keep real-looking arcs but sane flight times
const TOFMAX = { dd: 9, ca: 12, bb: 15 };
for (const C of Object.values(CLASSES).filter(c => !c.modern)) { const y0 = C.F + 4, T = TOFMAX[C.id], k = 1.5e-5;
  const sim = (elev, g, v0) => { let x = 0, y = y0, vx = v0 * Math.cos(elev), vy = v0 * Math.sin(elev), t = 0; while (y > 0 && t < 60) { const v = Math.hypot(vx, vy); vx += -k * v * vx * .01; vy += (-k * v * vy - g) * .01; x += vx * .01; y += vy * .01; t += .01; } return [x, t]; };
  let g = C.range / (1.539 * T * T), v0 = g * T / .618; for (let it = 0; it < 25; it++) { const [r] = sim(EMAX, g, v0); g *= Math.sqrt(r / C.range) ** -1 * 1; v0 = g * T / .618; const [r2] = sim(EMAX, g, v0); if (Math.abs(r2 - C.range) < 5) break; }
  const tab = []; for (let e = 0; e <= 18.001; e += .1) { const [r, t] = sim(e * Math.PI / 180, g, v0); tab.push([e * Math.PI / 180, r, t]); } BAL[C.id] = { k, g, v0, tab, y0 }; }
function solve(C, D) { const tab = BAL[C.id].tab; if (D <= tab[0][1]) return { elev: tab[0][0], tof: tab[0][2] * D / Math.max(1, tab[0][1]), ok: true };
  for (let i = 1; i < tab.length; i++) if (tab[i][1] >= D) { const a = tab[i - 1], b = tab[i], f = (D - a[1]) / (b[1] - a[1]); return { elev: lerp(a[0], b[0], f), tof: lerp(a[2], b[2], f), ok: true }; }
  const l = tab[tab.length - 1]; return { elev: l[0], tof: l[2], ok: false }; }

/* ------------------------------------------------------------------ ships */
const ships = []; let player = null;
const TEL = [-.3, 0, .35, .7, 1], TELN = ['ASTERN', 'STOP', '⅓ AHEAD', '⅔ AHEAD', 'FULL AHEAD'];
const NAMES = { ally: ['Resolute', 'Valiant', 'Audacious', 'Tempest', 'Defiant', 'Sentinel', 'Intrepid'], enemy: ['Kaiser', 'Drakon', 'Varyag', 'Hydra', 'Basilisk', 'Gorgon', 'Leviathan', 'Kraken', 'Manticore'] };
function spawnShip(cls, team, x, z, h, hpMul = 1) {
  const mesh = buildShip(cls, team === 'enemy' ? 'enemy' : 'ally'); scene.add(mesh); const C = CLASSES[cls];
  const s = { cls, C, team, mesh, x, z, h, v: C.speed * .7, tel: 4, rudder: 0, rudderCmd: 0, yawRate: 0, hp: C.hp * hpMul, maxHp: C.hp * hpMul, alive: true, sinking: 0, fires: [], floods: [], dc: 0, torpCd: 0, roll: 0, pitch: 0, heave: 0,
    name: team === 'player' ? 'HMS Koppanalil' : (team === 'enemy' ? 'SMS ' : 'HMS ') + NAMES[team === 'enemy' ? 'enemy' : 'ally'][Math.floor(Math.random() * 7)], turrets: mesh.userData.turrets, ai: team === 'player' ? null : { ex: gauss(), ez: gauss(), zig: 0, side: Math.random() < .5 ? 1 : -1, err: 1, lastH: 0, tgt: null, fireCd: rnd(2, 6), dir: h },
    dealt: 0, kills: 0, wake: [], wakeT: 0, smokeT: 0, engine: 1, deto: false };
  s.turrets.forEach(t => { t.reload = rnd(0, C.reload * .5); t.tYaw = t.yaw; }); makeWake(s); ships.push(s); return s;
}
function removeShip(s) { scene.remove(s.mesh); scene.remove(s.wakeMesh); s.wakeMesh.geometry.dispose(); Object.values(s.mesh.userData.mats).forEach(m => m.dispose()); ships.splice(ships.indexOf(s), 1); }
const fwdOf = s => [Math.sin(s.h), Math.cos(s.h)];
function toLocal(s, x, y, z) { const dx = x - s.x, dz = z - s.z, c = Math.cos(s.h), sn = Math.sin(s.h); return [dx * c - dz * sn, y - s.heave, dx * sn + dz * c]; }
function toWorld(s, lx, ly, lz) { const c = Math.cos(s.h), sn = Math.sin(s.h); return [s.x + lx * c + lz * sn, ly + s.heave, s.z - lx * sn + lz * c]; }
// wake: a foam ribbon trailing each ship
const wakeTex = (() => { const c = document.createElement('canvas'); c.width = 64; c.height = 256; const x = c.getContext('2d'); for (let k = 0; k < 900; k++) { x.fillStyle = `rgba(255,255,255,${Math.random() * .5})`; x.fillRect(Math.random() * 64, Math.random() * 256, 2 + Math.random() * 4, 2 + Math.random() * 4); } const g = x.createLinearGradient(0, 0, 64, 0); g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(.25, 'rgba(0,0,0,0)'); g.addColorStop(.75, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,1)'); x.globalCompositeOperation = 'destination-out'; x.fillStyle = g; x.fillRect(0, 0, 64, 256); const t = new THREE.CanvasTexture(c); t.wrapT = THREE.RepeatWrapping; return t; })();
const wakeMat = new THREE.MeshBasicMaterial({ map: wakeTex, transparent: true, depthWrite: false, vertexColors: true, fog: true });
const WAKEN = 70;
function makeWake(s) { const g = new THREE.BufferGeometry(), P = new Float32Array(WAKEN * 2 * 3), Cc = new Float32Array(WAKEN * 2 * 3), U = new Float32Array(WAKEN * 2 * 2), I = []; for (let k = 0; k < WAKEN - 1; k++) { const a = k * 2; I.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  g.setAttribute('position', new THREE.BufferAttribute(P, 3)); g.setAttribute('color', new THREE.BufferAttribute(Cc, 3)); g.setAttribute('uv', new THREE.BufferAttribute(U, 2)); g.setIndex(I); const m = new THREE.Mesh(g, wakeMat); m.frustumCulled = false; m.renderOrder = 1; scene.add(m); s.wakeMesh = m; }
function updateWake(s, dt, t) {
  s.wakeT += dt; const f = fwdOf(s), sx = s.x - f[0] * s.C.L * .48, sz = s.z - f[1] * s.C.L * .48;
  if (s.wakeT > .5 || !s.wake.length) { s.wakeT = 0; s.wake.unshift({ x: sx, z: sz, rx: f[1], rz: -f[0], age: 0, v: Math.abs(s.v) }); if (s.wake.length > WAKEN) s.wake.pop(); }
  else { s.wake[0].x = sx; s.wake[0].z = sz; }
  const g = s.wakeMesh.geometry, P = g.attributes.position.array, Cc = g.attributes.color.array, U = g.attributes.uv.array;
  for (let k = 0; k < WAKEN; k++) { const w = s.wake[Math.min(k, s.wake.length - 1)]; if (k < s.wake.length) w.age += dt / Math.max(1, s.wake.length) * 0; const age = k * .5, half = s.C.B * .45 + age * 1.8, a = Math.max(0, 1 - age / 34) * Math.min(1, w.v / 6) * (k < s.wake.length ? 1 : 0);
    for (let sd = 0; sd < 2; sd++) { const o = (sd ? 1 : -1) * half, x = w.x + w.rx * o, z = w.z + w.rz * o, i = (k * 2 + sd) * 3; P[i] = x; P[i + 1] = waveHeight(x, z, t) + .35; P[i + 2] = z; Cc[i] = Cc[i + 1] = Cc[i + 2] = a * .85; U[(k * 2 + sd) * 2] = sd; U[(k * 2 + sd) * 2 + 1] = k * .25; } }
  g.attributes.position.needsUpdate = g.attributes.color.needsUpdate = g.attributes.uv.needsUpdate = true;
}

/* ------------------------------------------------------------------ shells, torpedoes */
const shells = [], torps = [];
const tracerM = new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 2.2, .8), toneMapped: false }), tracerG = new THREE.CapsuleGeometry(.4, 6, 2, 6).rotateX(Math.PI / 2);
const torpM = new THREE.MeshStandardMaterial({ color: '#1b1d20', roughness: .4 }), torpG = new THREE.CapsuleGeometry(.4, 6, 2, 8).rotateX(Math.PI / 2);
function fireTurret(s, t, aim, playerShot) {
  const C = s.C, ud = s.mesh.userData; t.reload = C.reload * (s.team === 'player' ? 1 : 1.3); ud.body.updateMatrixWorld(true); const out = [];
  const D = Math.hypot(aim[0] - s.x, aim[1] - s.z), sh = D * C.spread * .45, sr = D * C.spread * 1.1;
  for (let b = 0; b < C.barrels; b++) {
    const off = (b - (C.barrels - 1) / 2) * (2 + C.cal / 406 * 5.4) * .55, mz = new THREE.Vector3(off, 0, t.len).applyMatrix4(t.piv.matrixWorld);
    const dx = aim[0] - mz.x, dz = aim[1] - mz.z, d = Math.hypot(dx, dz), ux = dx / d, uz = dz / d, ax = aim[0] + uz * gauss() * sh + ux * gauss() * sr, az = aim[1] - ux * gauss() * sh + uz * gauss() * sr;
    const d2 = Math.hypot(ax - mz.x, az - mz.z), so = solve(C, d2), v0 = BAL[C.id].v0 * rnd(.997, 1.003), hx = (ax - mz.x) / d2, hz = (az - mz.z) / d2;
    const sl = { x: mz.x, y: mz.y, z: mz.z, vx: hx * v0 * Math.cos(so.elev), vy: v0 * Math.sin(so.elev), vz: hz * v0 * Math.cos(so.elev), k: BAL[C.id].k, g: BAL[C.id].g, C, owner: s, team: s.team === 'enemy' ? 'enemy' : 'ally', t: 0, mesh: null, cam: false, player: playerShot, whistled: false };
    const m = new THREE.Mesh(tracerG, tracerM); m.scale.setScalar(.6 + C.cal / 406 * 1.4); m.position.set(sl.x, sl.y, sl.z); scene.add(m); sl.mesh = m; shells.push(sl); out.push(sl);
    // muzzle blast
    const k = C.cal / 406; for (let n = 0; n < 6 + k * 14; n++) fire.emit(mz.x, mz.y, mz.z, hx * rnd(20, 70) * (1 + k) + rnd(-6, 6), rnd(-2, 8), hz * rnd(20, 70) * (1 + k) + rnd(-6, 6), .18 + k * .25, 4 + k * 12, 3, FLASH, 1, .05);
    for (let n = 0; n < 5 + k * 12; n++) smoke.emit(mz.x, mz.y, mz.z, hx * rnd(5, 25) * (1 + k), rnd(0, 6), hz * rnd(5, 25) * (1 + k), 3 + k * 5, 4 + k * 10, 1.5, GRAYS, .45, .5, -.6);
  }
  t.recoil = 1; const camD = cam.position.distanceTo(new THREE.Vector3(s.x, 10, s.z)); Audio.gun(C.cal, s === player ? 0 : camD);
  if (s === player) R.shake = Math.min(1.5, R.shake + .25 + C.cal / 406 * .8);
  return out;
}
function launchTorps(s, aimH) { const n = s.C.torp; if (!n || s.torpCd > 0) return false; s.torpCd = s.C.id === 'dd' ? 28 : 40; const f = fwdOf(s);
  const side = Math.sign(Math.sin(angD(aimH, s.h))) || 1;
  for (let k = 0; k < n; k++) { const h = aimH + (k - (n - 1) / 2) * .045, [x, , z] = toWorld(s, side * s.C.B * .5, 0, 0), m = new THREE.Mesh(torpG, torpM); scene.add(m); torps.push({ x, z, h, v: 24, left: 8000, owner: s, team: s.team === 'enemy' ? 'enemy' : 'ally', mesh: m, warned: false, arm: 1.2 }); }
  if (s === player) { Audio.torp(); ribbon('TORPEDOES AWAY', ''); } return true; }
const segBox = (p0, p1, lo, hi) => { let t0 = 0, t1 = 1; for (let a = 0; a < 3; a++) { const d = p1[a] - p0[a]; if (Math.abs(d) < 1e-9) { if (p0[a] < lo[a] || p0[a] > hi[a]) return -1; continue; } let ta = (lo[a] - p0[a]) / d, tb = (hi[a] - p0[a]) / d; if (ta > tb) [ta, tb] = [tb, ta]; t0 = Math.max(t0, ta); t1 = Math.min(t1, tb); if (t0 > t1) return -1; } return t0; };
function updateShells(dt, t) {
  for (let i = shells.length - 1; i >= 0; i--) { const sl = shells[i]; let rem = dt, done = false;
    while (rem > 0 && !done) { const h = Math.min(.01, rem); rem -= h; const v = Math.hypot(sl.vx, sl.vy, sl.vz), px = sl.x, py = sl.y, pz = sl.z;
      sl.vx += -sl.k * v * sl.vx * h; sl.vy += (-sl.k * v * sl.vy - sl.g) * h; sl.vz += -sl.k * v * sl.vz * h; sl.x += sl.vx * h; sl.y += sl.vy * h; sl.z += sl.vz * h; sl.t += h;
      // ships
      for (const s of ships) { if (!s.alive && s.sinking > 6) continue; if ((s.team === 'enemy') === (sl.team === 'enemy')) continue; const dx = sl.x - s.x, dz = sl.z - s.z; if (dx * dx + dz * dz > (s.C.L * .6 + 60) ** 2) continue;
        const a = toLocal(s, px, py, pz), b = toLocal(s, sl.x, sl.y, sl.z), C = s.C, tt = segBox(a, b, [-C.B / 2 - .5, -C.D, -C.L / 2], [C.B / 2 + .5, C.F * 3.4, C.L / 2]);
        if (tt >= 0) { for (let q = tt; q <= 1; q += .05) { const lx = lerp(a[0], b[0], q), ly = lerp(a[1], b[1], q), lz = lerp(a[2], b[2], q); if (insideHull(C, lx, ly, lz)) { const [wx, wy, wz] = toWorld(s, lx, ly, lz); sl.x = wx; sl.y = wy; sl.z = wz; shellHit(sl, s, lx, ly, lz); done = true; break; } } if (done) break; } }
      if (done) break;
      // islands
      for (const [ix, iz, ir, ih] of ISLANDS) { const d = Math.hypot(sl.x - ix, sl.z - iz); if (d < ir * 1.05 && sl.y < ih * Math.max(0, 1 - d / (ir * .95)) ** 1.2 + 2) { impactFX(sl.x, Math.max(sl.y, 1), sl.z, sl.C.cal, true); done = true; break; } }
      if (done) break;
      if (sl.y < waveHeight(sl.x, sl.z, t)) { splashFX(sl.x, sl.z, sl.C.cal, t); done = true; near(sl); break; } }
    if (!done && sl.t > 100) done = true;
    if (!done) { sl.mesh.position.set(sl.x, sl.y, sl.z); sl.mesh.lookAt(sl.x + sl.vx, sl.y + sl.vy, sl.z + sl.vz); if (Math.random() < .6) trail.emit(sl.x, sl.y, sl.z, 0, 0, 0, 1.4, 1.2 + sl.C.cal / 406 * 2, 2, TRAIL, .18, 1, 0);
      if (!sl.whistled && player && sl.team === 'enemy' && sl.vy < 0) { const d = Math.hypot(sl.x - player.x, sl.z - player.z); if (d < 600 && sl.y < 900) { sl.whistled = true; Audio.whistle(1 - d / 600); } } }
    else { scene.remove(sl.mesh); shells.splice(i, 1); if (sl.cam) { R.camImpact = { x: sl.x, y: Math.max(sl.y, 2), z: sl.z, t: 1.1 }; R.shellCam = null; R.slow = 1; } } }
}
function near(sl) { if (sl.player && R.target) { const d = Math.hypot(sl.x - R.target.x, sl.z - R.target.z); if (d < 120) R.straddle = (R.straddle || 0) + 1; } }
function splashFX(x, z, cal, t) { const k = cal / 406, y = waveHeight(x, z, t), n = 30 + k * 90, H = 22 + k * 70;
  for (let i = 0; i < n; i++) { const a = Math.random() * Math.PI * 2, r = Math.random() * (2 + k * 6); water.emit(x + Math.cos(a) * r, y, z + Math.sin(a) * r, Math.cos(a) * rnd(1, 6), Math.sqrt(2 * G * H) * rnd(.5, 1.05), Math.sin(a) * rnd(1, 6), rnd(2.5, 4) + k * 2, 3 + k * 7, .9, WHITE, .85, .8, G); }
  for (let i = 0; i < 12 + k * 20; i++) water.emit(x + rnd(-5, 5), y + rnd(0, H * .6), z + rnd(-5, 5), rnd(-4, 4), rnd(0, 4), rnd(-4, 4), rnd(4, 7), 10 + k * 24, 1.2, MIST, .3, .7, -.3);
  const dist = cam.position.distanceTo(new THREE.Vector3(x, 0, z)); Audio.splash(cal, dist); }
function impactFX(x, y, z, cal, ground) { const k = cal / 406;
  for (let i = 0; i < 30 + k * 60; i++) fire.emit(x, y, z, rnd(-1, 1) * (12 + k * 30), rnd(0, 1) * (12 + k * 30), rnd(-1, 1) * (12 + k * 30), rnd(.3, .9), 4 + k * 12, 2.5, ORANGE, 1, .2, 4);
  for (let i = 0; i < 20 + k * 40; i++) smoke.emit(x + rnd(-3, 3), y + rnd(0, 4), z + rnd(-3, 3), rnd(-4, 4), rnd(3, 10), rnd(-4, 4), rnd(4, 9), 8 + k * 16, 1, ground ? [.45, .4, .32] : BLACK, .65, .7, -.5);
  Audio.hit(cal, cam.position.distanceTo(new THREE.Vector3(x, y, z))); }
function shellHit(sl, s, lx, ly, lz) {
  const C = s.C, k = sl.C.cal / 406; impactFX(sl.x, sl.y, sl.z, sl.C.cal, false);
  let mult = rnd(.8, 1.2), tag = 'HIT'; if (Math.abs(lz) < C.L * .22 && ly < C.F * .45 && sl.C.cal >= 203) { mult *= 2.3; tag = 'CITADEL'; } if (sl.C.cal >= 300 && s.cls === 'dd') { mult *= .45; tag = 'OVER-PEN'; }
  const dmg = sl.C.dmg * mult * (s === player ? .65 : 1); damage(s, dmg, sl.owner, tag);
  if (s.alive && Math.random() < .1 + k * .06 && s.fires.length < 3) { s.fires.push({ lx: rnd(-C.B * .3, C.B * .3), lz: lz, t: 30 }); if (sl.owner === player) ribbon('FIRE STARTED', 'fire'); if (s === player) toast('FIRE ON BOARD — R for damage control'); }
  for (const t of s.turrets) if (Math.abs(t.z - lz) < 9 && Math.random() < .18 && !t.broken) { t.broken = 22; if (s === player) toast('TURRET KNOCKED OUT'); }
  if (s.alive && tag === 'CITADEL' && Math.random() < .035) { s.deto = true; damage(s, s.hp + 1, sl.owner, 'DETONATED'); }
}
function damage(s, dmg, by, tag) {
  if (!s.alive) return; s.hp -= dmg; if (by) { by.dealt += dmg; s.lastHit = by; }
  if (by === player && s.team === 'enemy') { R.dealt += dmg; ribbon(tag + ' ' + Math.round(dmg), tag === 'CITADEL' ? 'cit' : tag === 'DETONATED' ? 'kill' : ''); Audio.ding(); }
  if (s === player) { flashHit(); R.shake = Math.min(1.5, R.shake + .3); }
  if (s.hp <= 0) sink(s, by, tag === 'DETONATED');
}
function sink(s, by, deto) {
  s.alive = false; s.hp = 0; s.sinking = 0.001; s.rollTo = (Math.random() < .5 ? -1 : 1) * rnd(.25, .5); s.pitchTo = rnd(-.12, .12); s.tel = 1;
  if (by) by.kills++; if (by === player) { R.kills++; ribbon(deto ? 'DETONATION!' : 'SUNK', 'kill'); }
  feed(`${by ? by.name : 'The sea'} ${deto ? 'detonated' : 'sank'} ${s.name}`, s.team === 'enemy');
  if (deto) { const k = 1.5; for (let i = 0; i < 260; i++) fire.emit(s.x + rnd(-20, 20), rnd(2, 20), s.z + rnd(-20, 20), rnd(-1, 1) * 60 * k, rnd(10, 120), rnd(-1, 1) * 60 * k, rnd(.6, 2), 18, 3, ORANGE, 1, .25, 6); for (let i = 0; i < 160; i++) smoke.emit(s.x + rnd(-30, 30), rnd(5, 60), s.z + rnd(-30, 30), rnd(-10, 10), rnd(10, 40), rnd(-10, 10), rnd(8, 16), 30, 1.4, BLACK, .7, .6, -.2); Audio.boom(cam.position.distanceTo(new THREE.Vector3(s.x, 0, s.z))); }
  if (s === player) { R.camMode = 'death'; setTimeout(() => endBattle(false), 5500); }
  else if (R.phase === 'battle' && !ships.some(o => o.team === 'enemy' && o.alive)) setTimeout(() => endBattle(true), 3500);
}
function updateTorps(dt, t) {
  for (let i = torps.length - 1; i >= 0; i--) { const tp = torps[i]; tp.x += Math.sin(tp.h) * tp.v * dt; tp.z += Math.cos(tp.h) * tp.v * dt; tp.left -= tp.v * dt; tp.arm -= dt; let done = tp.left <= 0;
    tp.mesh.position.set(tp.x, waveHeight(tp.x, tp.z, t) - .6, tp.z); tp.mesh.rotation.y = tp.h; if (Math.random() < .7) water.emit(tp.x - Math.sin(tp.h) * 4, waveHeight(tp.x, tp.z, t) + .2, tp.z - Math.cos(tp.h) * 4, 0, .6, 0, 7, 2.5, .8, WHITE, .5, .5, 0);
    for (const s of ships) { if (done || !s.alive || (s.team === 'enemy') === (tp.team === 'enemy') || tp.arm > 0) continue; const [lx, , lz] = toLocal(s, tp.x, 0, tp.z); if (Math.abs(lz) < s.C.L / 2 && Math.abs(lx) < halfBeam(s.C, lz / s.C.L + .5) + 1) { done = true;
        for (let n = 0; n < 160; n++) water.emit(tp.x + rnd(-6, 6), 0, tp.z + rnd(-6, 6), rnd(-6, 6), rnd(20, 55), rnd(-6, 6), rnd(3, 5), 8, 1, WHITE, .9, .8, G); impactFX(tp.x, 2, tp.z, 406, false);
        damage(s, s.C.hp * .22 + 900, tp.owner, 'TORPEDO'); if (s.alive && Math.random() < .5) { s.floods.push({ t: 25 }); if (s === player) toast('FLOODING — R for damage control'); } } }
    for (const [ix, iz, ir] of ISLANDS) if (Math.hypot(tp.x - ix, tp.z - iz) < ir * 1.05) done = true;
    if (!done && player && player.alive && tp.team === 'enemy' && !tp.warned) { const d = Math.hypot(tp.x - player.x, tp.z - player.z); if (d < 1800) { tp.warned = true; R.torpWarn = 3; Audio.alarm(); } }
    if (done) { scene.remove(tp.mesh); torps.splice(i, 1); } }
}

/* ------------------------------------------------------------------ ship sim + AI */
function shipStep(s, dt, t) {
  const C = s.C, eng = s.engine * (s.floods.length ? .8 : 1);
  if (s.alive) { const tv = C.speed * TEL[s.tel] * eng; s.v += clamp(tv - s.v, -C.accel * 1.3 * dt, C.accel * dt);
    s.rudder += clamp(s.rudderCmd - s.rudder, -.7 * dt, .7 * dt); const yT = -s.rudder * C.turn * clamp(Math.abs(s.v) / C.speed, .3, 1) * Math.sign(s.v || 1); s.yawRate += (yT - s.yawRate) * Math.min(1, dt * .8); s.v *= 1 - Math.abs(s.rudder) * .03 * dt; }
  else { s.v *= 1 - .25 * dt; s.yawRate *= 1 - dt; s.sinking += dt; }
  s.h += s.yawRate * dt; const f = fwdOf(s); s.x += f[0] * s.v * dt; s.z += f[1] * s.v * dt;
  // islands & arena
  for (const [ix, iz, ir] of ISLANDS) { for (const o of [-.4, 0, .4]) { const px = s.x + f[0] * C.L * o, pz = s.z + f[1] * C.L * o, dx = px - ix, dz = pz - iz, d = Math.hypot(dx, dz), rr = ir * .95 + C.B / 2; if (d < rr) { s.x += dx / d * (rr - d); s.z += dz / d * (rr - d); if (Math.abs(s.v) > 3 && s.alive) { damage(s, Math.abs(s.v) * 8 * dt * 10, null, 'GROUNDED'); } s.v *= .9; } } }
  const r = Math.hypot(s.x, s.z); if (r > ARENA) { s.x *= ARENA / r; s.z *= ARENA / r; }
  // fires / floods
  if (s.alive) { for (const fi of s.fires) { fi.t -= dt; s.hp -= s.maxHp * .0016 * dt; } for (const fl of s.floods) { fl.t -= dt; s.hp -= s.maxHp * .0024 * dt; } s.fires = s.fires.filter(x => x.t > 0); s.floods = s.floods.filter(x => x.t > 0); if (s.dc > 0) s.dc -= dt; if (s.hp <= 0) sink(s, s.lastHit || null, false); }
  for (const tt of s.turrets) { if (tt.reload > 0) tt.reload -= dt; if (tt.broken > 0) tt.broken -= dt; if (tt.recoil > 0) tt.recoil = Math.max(0, tt.recoil - dt * 1.5); }
  if (s.torpCd > 0) s.torpCd -= dt;
  // buoyancy
  const L = C.L * .42, B = C.B * .45, hb = waveHeight(s.x + f[0] * L, s.z + f[1] * L, t), hs = waveHeight(s.x - f[0] * L, s.z - f[1] * L, t), hp = waveHeight(s.x - f[1] * B, s.z + f[0] * B, t), hsb = waveHeight(s.x + f[1] * B, s.z - f[0] * B, t);
  const sinkK = s.alive ? 0 : Math.min(1, s.sinking / (s.deto ? 9 : 24));
  s.heave = lerp(s.heave, (hb + hs + hp + hsb) / 4 * .8 - sinkK * (C.F + C.D) * 2.2, 1 - Math.exp(-dt * 2));
  s.pitch = lerp(s.pitch, Math.atan2(hb - hs, C.L * .84) * .9 + (s.pitchTo || 0) * sinkK * (s.deto ? 3 : 1), 1 - Math.exp(-dt * 1.5));
  s.roll = lerp(s.roll, Math.atan2(hp - hsb, C.B) * .6 + s.yawRate * s.v * .02 + (s.rollTo || 0) * sinkK + s.floods.length * .03, 1 - Math.exp(-dt * 1.2));
}
function collideShips() { for (let a = 0; a < ships.length; a++) for (let b = a + 1; b < ships.length; b++) { const A = ships[a], B = ships[b], fa = fwdOf(A), fb = fwdOf(B); if (Math.hypot(A.x - B.x, A.z - B.z) > (A.C.L + B.C.L) / 2 + 10) continue;
  for (const oa of [-.38, -.13, .13, .38]) for (const ob of [-.38, -.13, .13, .38]) { const ax = A.x + fa[0] * A.C.L * oa, az = A.z + fa[1] * A.C.L * oa, bx = B.x + fb[0] * B.C.L * ob, bz = B.z + fb[1] * B.C.L * ob, dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz), rr = (A.C.B + B.C.B) / 2; if (d >= rr || d < 1e-3) continue;
    const nx = dx / d, nz = dz / d, pen = rr - d, ma = A.C.hp, mb = B.C.hp; A.x += nx * pen * mb / (ma + mb); A.z += nz * pen * mb / (ma + mb); B.x -= nx * pen * ma / (ma + mb); B.z -= nz * pen * ma / (ma + mb);
    const rv = Math.abs(A.v - B.v) + 2; if (A.alive && B.alive && (!A.ramCd || A.ramCd < R.t)) { A.ramCd = R.t + 1; damage(A, rv * mb / 600, B, 'RAM'); damage(B, rv * ma / 600, A, 'RAM'); } A.v *= .97; B.v *= .97; } } }
function enemiesOf(s) { return ships.filter(o => o.alive && (o.team === 'enemy') !== (s.team === 'enemy')); }
function leadPoint(s, tg) { let px = tg.x, pz = tg.z, tof = 0; const tf = fwdOf(tg); for (let it = 0; it < 4; it++) { const d = Math.hypot(px - s.x, pz - s.z); tof = solve(s.C, d).tof; px = tg.x + tf[0] * tg.v * tof; pz = tg.z + tf[1] * tg.v * tof; } return [px, pz, tof]; }
function aiStep(s, dt) {
  const ai = s.ai, C = s.C; if (!s.alive) return;
  const foes = enemiesOf(s); if (!foes.length) { s.rudderCmd = 0; return; }
  if (!ai.tgt || !ai.tgt.alive || Math.random() < dt * .02) { let bd = 1e9; for (const o of foes) { const d = Math.hypot(o.x - s.x, o.z - s.z) * (o === player ? 1.05 : 1) * rnd(.85, 1.15); if (d < bd) { bd = d; ai.tgt = o; } } ai.err = 1; }
  const tg = ai.tgt, dx = tg.x - s.x, dz = tg.z - s.z, D = Math.hypot(dx, dz), brg = Math.atan2(dx, dz), want = C.range * (C.id === 'dd' ? .45 : .62);
  ai.zig -= dt; if (ai.zig <= 0) { ai.zig = rnd(18, 40); ai.zo = rnd(-.3, .3); if (Math.random() < .3) ai.side *= -1; }
  let dir = D > want + 1800 ? brg + ai.side * .35 : D < want - 1500 ? brg + Math.PI - ai.side * .5 : brg + ai.side * 1.25; dir += ai.zo || 0;
  // islands and arena edge
  const f = fwdOf(s); for (const [ix, iz, ir] of ISLANDS) { for (const look of [600, 1200]) { const px = s.x + f[0] * look, pz = s.z + f[1] * look; if (Math.hypot(px - ix, pz - iz) < ir + C.L * .6 + 200) { dir = Math.atan2(s.x - ix, s.z - iz) + ai.side * 1.2; } } }
  if (Math.hypot(s.x, s.z) > ARENA - 2500) dir = Math.atan2(-s.x, -s.z);
  s.rudderCmd = clamp(-angD(dir, s.h) * 2.2, -1, 1); s.tel = 4;
  // guns
  const [lx, lz] = leadPoint(s, tg); const h = Math.abs(angD(tg.h, ai.lastH)); if (h > .3) ai.err = Math.min(1, ai.err + .4);
  const e = ai.err * D * .05, aim = [lx + ai.ex * e, lz + ai.ez * e];
  aimTurrets(s, aim, dt);
  ai.fireCd -= dt; if (D < C.range * .98 && ai.fireCd <= 0) { let fired = false; for (const t of s.turrets) if (t.ready) { fireTurret(s, t, aim, false); fired = true; } if (fired) { ai.fireCd = rnd(.5, 2.5); ai.err = Math.max(.35, ai.err * .72); ai.lastH = tg.h; ai.ex = gauss(); ai.ez = gauss(); } }
  if (ai.ex === undefined) { ai.ex = gauss(); ai.ez = gauss(); }
  // torpedoes
  if (C.torp && s.torpCd <= 0 && D < 5500 && D > 900) { const tf = fwdOf(tg), tt = D / 24, px = tg.x + tf[0] * tg.v * tt, pz = tg.z + tf[1] * tg.v * tt, th = Math.atan2(px - s.x, pz - s.z); if (Math.abs(Math.abs(angD(th, s.h)) - Math.PI / 2) < .9) launchTorps(s, th); }
  if (s.fires.length >= 2 && s.dc <= 0) { s.fires = []; s.floods = []; s.dc = 60; }
}
function aimTurrets(s, aim, dt) {
  const C = s.C, trav = (C.id === 'dd' ? 28 : C.id === 'ca' ? 14 : 7) * Math.PI / 180, [ax, , az] = toLocal(s, aim[0], 0, aim[1]);
  for (const t of s.turrets) { const lx = ax, lz = az - t.z, want = Math.atan2(lx, lz), base = t.face > 0 ? 0 : Math.PI, rel = angD(want, base), canBear = Math.abs(rel) < 2.55;
    const tgtYaw = base + clamp(rel, -2.55, 2.55); t.yaw += clamp(angD(tgtYaw, t.yaw), -trav * dt, trav * dt); t.g.rotation.y = t.yaw;
    const D = Math.hypot(lx, lz), so = solve(C, D); t.elev = lerp(t.elev, so.elev, Math.min(1, dt * 3)); t.piv.rotation.x = -t.elev; t.piv.position.z = (t.piv.userData.z0 ?? (t.piv.userData.z0 = t.piv.position.z)) - (t.recoil || 0) * 1.4;
    t.canBear = canBear; t.aligned = Math.abs(angD(tgtYaw, t.yaw)) < .02; t.ready = canBear && t.aligned && t.reload <= 0 && !(t.broken > 0) && s.alive; }
}

/* ------------------------------------------------------------------ battle flow */
const R = { phase: 'menu', t: 0, battle: 1, kills: 0, dealt: 0, score: 0, shake: 0, camMode: 'orbit', camYaw: 0, camPitch: .18, camDist: 1, zoom: false, target: null, shellCam: null, camImpact: null, slow: 1, torpWarn: 0, paused: false, wins: 0 };
const WAVES = n => n === 1 ? ['dd', 'dd', 'ca'] : n === 2 ? ['ca', 'ca', 'dd', 'dd'] : n === 3 ? ['bb', 'ca', 'dd', 'dd'] : ['bb', 'bb', 'ca', 'ca', 'dd'];
function startBattle(n) {
  Audio.init(); save(); for (const s of ships.slice()) removeShip(s); shells.forEach(s => scene.remove(s.mesh)); shells.length = 0; torps.forEach(t => scene.remove(t.mesh)); torps.length = 0;
  Object.assign(R, { phase: 'battle', battle: n, t: 0, shellCam: null, camImpact: null, slow: 1, torpWarn: 0, camMode: 'orbit', target: null, paused: false, shake: 0 });
  player = spawnShip(S.ship, 'player', 0, -5200, 0); player.v = player.C.speed * .8;
  const allies = n >= 3 ? ['bb', 'ca'] : ['ca', 'dd']; allies.forEach((c, k) => spawnShip(c, 'ally', (k ? 1 : -1) * 900, -5600 - k * 300, 0));
  const hpMul = 1 + Math.max(0, n - 4) * .15; WAVES(n).forEach((c, k) => spawnShip(c, 'enemy', (k - (WAVES(n).length - 1) / 2) * 1100 + rnd(-200, 200), 5200 + rnd(-400, 400), Math.PI + rnd(-.2, .2), hpMul));
  R.camYaw = 0; R.camPitch = .12; document.body.className = 'playing' + (isTouch ? ' touch' : ''); $('menu').classList.remove('on'); $('over').classList.remove('on'); $('hud').classList.add('on'); buildTags();
  big('BATTLE ' + n, `${WAVES(n).length} enemy ships · ${CLASSES[S.ship].name}`, ''); feedClear(); last = performance.now();
}
function endBattle(won) {
  if (R.phase !== 'battle') return; R.phase = 'over'; const sc = Math.round(R.dealt + R.kills * 1500 + (won ? 3000 * R.battle : 0)); R.score += sc;
  if (won) { R.wins++; Audio.win(); } else Audio.lose(); const isBest = R.score > best; if (isBest) { best = R.score; try { localStorage.setItem('jkn-best', best); } catch (e) {} }
  $('ovT').textContent = won ? 'Victory' : 'Ship lost'; $('ovT').className = won ? 'good' : 'bad'; $('ovS').textContent = won ? `Battle ${R.battle} won — the enemy fleet is at the bottom of the sea.` : `Battle ${R.battle} — ${player.name} has been sunk.`;
  $('ovStats').innerHTML = [['Ships sunk', R.kills], ['Damage dealt', Math.round(R.dealt).toLocaleString()], ['Battles won', R.wins], ['Total score', R.score.toLocaleString()]].map(([a, b]) => `<div><span>${a}</span><b>${b}</b></div>`).join('') + (isBest ? '<p class="nb">New best!</p>' : `<p>Best ${best.toLocaleString()}</p>`);
  $('ovNext').style.display = won ? '' : 'none'; $('ovRetry').textContent = won ? 'Change ship' : 'Try again'; $('over').classList.add('on'); Audio.stopLoops(); if (document.pointerLockElement) document.exitPointerLock();
}
$('ovNext').onclick = () => { Audio.click(); startBattle(R.battle + 1); }; $('ovRetry').onclick = () => { Audio.click(); if ($('ovRetry').textContent === 'Try again') { R.score = 0; R.kills = 0; R.dealt = 0; R.wins = 0; startBattle(1); } else toMenu(); }; $('ovMenu').onclick = () => toMenu();

/* ------------------------------------------------------------------ input */
const keys = {}, touchK = {}; let mouseDown = false;
const canvas = $('gl');
function lockPointer() { if (isTouch || R.phase !== 'battle') return; try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
canvas.addEventListener('mousedown', e => { Audio.init(); if (R.phase !== 'battle' || R.paused) return; if (!document.pointerLockElement) { lockPointer(); return; } if (e.button === 0) playerFire(); if (e.button === 2) R.zoom = true; });
addEventListener('mouseup', e => { if (e.button === 2) R.zoom = false; }); canvas.addEventListener('contextmenu', e => e.preventDefault());
addEventListener('mousemove', e => { if (!document.pointerLockElement || R.phase !== 'battle') return; const k = .0024 * S.sens * (R.zoom ? .22 : 1); R.camYaw -= e.movementX * k; R.camPitch = clamp(R.camPitch + e.movementY * k, -.04, 1.25); });
addEventListener('wheel', e => { if (R.phase === 'battle') R.camDist = clamp(R.camDist * (e.deltaY > 0 ? 1.1 : .9), .45, 2.4); }, { passive: true });
document.addEventListener('pointerlockchange', () => { $('clickfly').classList.toggle('on', R.phase === 'battle' && !document.pointerLockElement && !isTouch && !R.paused); });
addEventListener('keydown', e => { keys[e.code] = true; Audio.init(); if (R.phase === 'cine') { if (e.code === 'Escape') toMenu(); if (e.code === 'Space' || e.code === 'ArrowRight') { e.preventDefault(); nextShot(); } if (e.code === 'KeyM') $('snd').textContent = Audio.toggle() ? '🔊' : '🔇'; return; } if (R.phase !== 'battle') return; const p = player;
  if (p && p.alive) { if (e.code === 'KeyW' || e.code === 'ArrowUp') { p.tel = Math.min(4, p.tel + 1); toast(TELN[p.tel]); } if (e.code === 'KeyS' || e.code === 'ArrowDown') { p.tel = Math.max(0, p.tel - 1); toast(TELN[p.tel]); }
    if (e.code === 'KeyT') playerTorps(); if (e.code === 'KeyR') damageControl(); }
  if (e.code === 'KeyF' || e.code === 'KeyV') { if (R.shellCam || R.camImpact) { R.shellCam = null; R.camImpact = null; } else { S.shellCam = !S.shellCam; save(); toast(S.shellCam ? 'SHELL CAM ON' : 'SHELL CAM OFF'); } }
  if (e.code === 'Space') { e.preventDefault(); if (R.shellCam || R.camImpact) { R.shellCam = null; R.camImpact = null; } else lockTarget(); }
  if (e.code === 'ShiftLeft') R.zoom = !R.zoom; if (e.code === 'KeyM') $('snd').textContent = Audio.toggle() ? '🔊' : '🔇'; if (e.code === 'Escape' || e.code === 'KeyP') togglePause(); });
addEventListener('keyup', e => { keys[e.code] = false; });
document.querySelectorAll('[data-k]').forEach(b => { const k = b.dataset.k;
  b.addEventListener('pointerdown', e => { e.preventDefault(); e.stopPropagation(); Audio.init(); touchK[k] = true; b.classList.add('on'); const p = player;
    if (k === 'fire') playerFire(); if (k === 'zoom') R.zoom = !R.zoom; if (k === 'torp') playerTorps(); if (k === 'dc') damageControl(); if (k === 'up' && p) { p.tel = Math.min(4, p.tel + 1); toast(TELN[p.tel]); } if (k === 'down' && p) { p.tel = Math.max(0, p.tel - 1); toast(TELN[p.tel]); }
    if (k === 'cam') { if (R.shellCam || R.camImpact) { R.shellCam = null; R.camImpact = null; } else { S.shellCam = !S.shellCam; save(); toast(S.shellCam ? 'SHELL CAM ON' : 'SHELL CAM OFF'); } } if (k === 'pause') togglePause(); });
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, () => { touchK[k] = false; b.classList.remove('on'); })); });
// touch: drag anywhere to look around
let tDrag = null; canvas.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') tDrag = { id: e.pointerId, x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointermove', e => { if (!tDrag || e.pointerId !== tDrag.id) return; const k = .005 * S.sens * (R.zoom ? .25 : 1); R.camYaw -= (e.clientX - tDrag.x) * k; R.camPitch = clamp(R.camPitch + (e.clientY - tDrag.y) * k, -.04, 1.25); tDrag.x = e.clientX; tDrag.y = e.clientY; });
['pointerup', 'pointercancel'].forEach(ev => canvas.addEventListener(ev, e => { if (tDrag && e.pointerId === tDrag.id) tDrag = null; }));
function togglePause(f) { if (R.phase !== 'battle') return; R.paused = f !== undefined ? f : !R.paused; $('pause').classList.toggle('on', R.paused); if (R.paused) { Audio.stopLoops(); if (document.pointerLockElement) document.exitPointerLock(); } else lockPointer(); last = performance.now(); }
document.addEventListener('visibilitychange', () => { if (document.hidden) togglePause(true); });
$('pResume').onclick = () => togglePause(false); $('pRestart').onclick = () => { R.score = 0; R.kills = 0; R.dealt = 0; startBattle(R.battle); }; $('pMenu').onclick = () => toMenu();
$('clickfly').onclick = () => lockPointer();
function playerFire() { const p = player; if (!p || !p.alive || R.phase !== 'battle') return; let shot = [];
  for (const t of p.turrets) if (t.ready) shot = shot.concat(fireTurret(p, t, R.aim, true));
  if (!shot.length) { const rl = Math.min(...p.turrets.filter(t => !(t.broken > 0)).map(t => Math.max(0, t.reload))); toast(p.turrets.every(t => !t.canBear) ? 'GUNS CAN\'T BEAR' : rl > 0 ? 'RELOADING ' + rl.toFixed(1) + 's' : 'TURRETS TRAVERSING'); return; }
  if (S.shellCam && !R.shellCam) { const sl = shot[Math.floor(shot.length / 2)]; sl.cam = true; R.shellCam = sl; R.camImpact = null; R.straddle = 0; } }
function playerTorps() { const p = player; if (!p || !p.alive || !p.C.torp) return; if (p.torpCd > 0) { toast('TORPEDOES RELOADING ' + Math.ceil(p.torpCd) + 's'); return; } const h = Math.atan2(R.aim[0] - p.x, R.aim[1] - p.z); if (Math.abs(Math.abs(angD(h, p.h)) - Math.PI / 2) > 1.1) { toast('TURN BROADSIDE TO FIRE TORPEDOES'); return; } launchTorps(p, h); }
function damageControl() { const p = player; if (!p || !p.alive) return; if (p.dc > 0) { toast('DAMAGE CONTROL READY IN ' + Math.ceil(p.dc) + 's'); return; } if (!p.fires.length && !p.floods.length) { toast('NO FIRES OR FLOODING'); return; } p.fires = []; p.floods = []; p.dc = 50; toast('DAMAGE CONTROL — FIRES OUT'); Audio.ding(); }
function lockTarget() { let bestS = null, bd = 1e9; for (const s of ships) { if (s.team !== 'enemy' || !s.alive) continue; v3.set(s.x, 15, s.z).project(cam); if (v3.z > 1) continue; const d = Math.hypot(v3.x, v3.y); if (d < bd) { bd = d; bestS = s; } } if (bestS) { R.target = bestS; R.manual = true; toast('TARGET: ' + bestS.name.toUpperCase()); } }

/* ------------------------------------------------------------------ step + camera */
const v3 = new THREE.Vector3(), ray = new THREE.Ray(), plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), hitP = new THREE.Vector3();
function step(dt) {
  R.t += dt; const t = R.t;
  if (player && player.alive) { const st = ((keys.KeyD || keys.ArrowRight || touchK.right) ? 1 : 0) - ((keys.KeyA || keys.ArrowLeft || touchK.left) ? 1 : 0); player.rudderCmd = st; }
  for (const s of ships) { if (s.ai) aiStep(s, dt); }
  if (player && R.aim) aimTurrets(player, R.aim, dt);
  for (const s of ships.slice()) { shipStep(s, dt, t); if (!s.alive && s.sinking > 32 && s !== player) removeShip(s); }
  collideShips(); updateShells(dt, t); updateTorps(dt, t);
}
function computeAim() {
  cam.updateMatrixWorld(); ray.origin.copy(cam.position); ray.direction.set(0, 0, -1).applyQuaternion(cam.quaternion);
  let pt = null; if (ray.intersectPlane(plane, hitP)) pt = [hitP.x, hitP.z];
  for (const s of ships) { if (s.team !== 'enemy' || !s.alive) continue; v3.set(s.x, 10, s.z); const d = ray.distanceToPoint(v3); if (d < s.C.L * .5) { const along = v3.sub(ray.origin).dot(ray.direction); if (along > 0) { const p = ray.at(along, new THREE.Vector3()); pt = [p.x, p.z]; } } }
  if (!pt) { const dx = ray.direction.x, dz = ray.direction.z, l = Math.hypot(dx, dz) || 1; pt = [player.x + dx / l * player.C.range * 1.05, player.z + dz / l * player.C.range * 1.05]; }
  // auto target: enemy closest to the crosshair
  if (!R.manual || !R.target || !R.target.alive) { R.manual = false; let bd = .35; R.target = null; for (const s of ships) { if (s.team !== 'enemy' || !s.alive) continue; v3.set(s.x, 12, s.z).project(cam); if (v3.z > 1) continue; const d = Math.hypot(v3.x, v3.y * innerHeight / innerWidth); if (d < bd) { bd = d; R.target = s; } } }
  // range assist: with a target near the crosshair, range comes from the target's lead point and the crosshair sets the bearing
  if (R.target && R.target.alive) { const [lx, lz] = leadPoint(player, R.target), dx = ray.direction.x, dz = ray.direction.z, l = Math.hypot(dx, dz) || 1, r = Math.hypot(lx - cam.position.x, lz - cam.position.z); pt = [cam.position.x + dx / l * r, cam.position.z + dz / l * r]; }
  R.aim = pt;
}
let camInit = false; const camLook = new THREE.Vector3(), camPos = new THREE.Vector3();
function updateCamera(dt) {
  const p = player; let fov = 55; const T = R.t; if (!p && R.phase !== 'cine') return;
  if (R.phase === 'cine') fov = cineCamera(dt);
  else if (R.phase === 'menu') { R.camYaw += dt * .04; const d = p.C.L * 1.5; cam.position.set(p.x + Math.sin(R.camYaw) * d, p.C.L * .22 + 10, p.z + Math.cos(R.camYaw) * d); cam.lookAt(p.x, p.C.F * 2, p.z); fov = 40; }
  else if (R.camMode === 'death') { R.camYaw += dt * .08; const d = p.C.L * 1.4; cam.position.set(p.x + Math.sin(R.camYaw) * d, 70, p.z + Math.cos(R.camYaw) * d); cam.lookAt(p.x, 0, p.z); fov = 50; }
  else if (R.shellCam) { const s = R.shellCam, v = Math.hypot(s.vx, s.vy, s.vz), ux = s.vx / v, uy = s.vy / v, uz = s.vz / v, back = 26 + s.C.cal / 406 * 30;
    const hl = Math.hypot(ux, uz) || 1; cam.position.set(s.x - ux * back - uz / hl * 4, s.y - uy * back + 6, s.z - uz * back + ux / hl * 4); camLook.set(s.x + ux * 220, s.y + uy * 220 - 10, s.z + uz * 220); if (!camInit) { R.camL = camLook.clone(); camInit = true; } R.camL.lerp(camLook, 1 - Math.exp(-dt * 6)); cam.lookAt(R.camL); fov = 46; s.mesh.scale.setScalar(3);
    const tgt = R.target; if (tgt) { const d = Math.hypot(s.x - tgt.x, s.z - tgt.z); R.slow = d < 700 && s.vy < 0 && s.y < 400 ? .35 : 1; } else R.slow = s.vy < 0 && s.y < 150 ? .4 : 1; }
  else if (R.camImpact) { const ci = R.camImpact; ci.t -= dt; R.slow = 1; const a = T * .25; camPos.set(ci.x + Math.sin(a) * 140, ci.y + 45, ci.z + Math.cos(a) * 140); cam.position.lerp(camPos, 1 - Math.exp(-dt * 3)); cam.lookAt(ci.x, ci.y + 8, ci.z); fov = 48; if (ci.t <= 0) { R.camImpact = null; camInit = false; } }
  else { R.slow = 1; camInit = false; const d = p.C.camDist * R.camDist, yaw = R.camYaw, pitch = R.camPitch, ty = p.C.F * 3 + 12 + p.C.L * .22 * R.camDist;
    const dir = new THREE.Vector3(Math.sin(yaw) * Math.cos(pitch), -Math.sin(pitch), Math.cos(yaw) * Math.cos(pitch));
    if (R.zoom) { cam.position.set(p.x, ty + p.C.F * 2 + 14, p.z); fov = 11; } else { cam.position.set(p.x, ty, p.z).addScaledVector(dir, -d); fov = 55; }
    cam.position.y = Math.max(cam.position.y, waveHeight(cam.position.x, cam.position.z, T) + 3); cam.lookAt(cam.position.clone().add(dir)); }
  if (R.shake > 0) { R.shake = Math.max(0, R.shake - dt * 2); const s = R.shake * .9; cam.position.x += (Math.random() - .5) * s; cam.position.y += (Math.random() - .5) * s; }
  cam.fov = R.zoom && !R.shellCam ? fov : clamp(lerp(cam.fov, fov, 1 - Math.exp(-dt * 6)), 8, 90); if (R.phase === 'menu' && innerWidth > 760) cam.setViewOffset(innerWidth, innerHeight, -innerWidth * .17, 0, innerWidth, innerHeight); else cam.clearViewOffset(); cam.updateProjectionMatrix();
  ocean.position.set(cam.position.x, 0, cam.position.z); sky.position.copy(cam.position);
  const sp = R.phase === 'cine' || !p ? new THREE.Vector3(cam.position.x, 0, cam.position.z) : R.shellCam ? new THREE.Vector3(R.shellCam.x, 0, R.shellCam.z) : new THREE.Vector3(p.x, 0, p.z); sunL.position.copy(sp).addScaledVector(sun, 1500); sunL.target.position.copy(sp);
  for (const ps of [water, smoke, fire, trail]) ps.mat.uniforms.scale.value = renderer.domElement.height / (2 * Math.tan(cam.fov * Math.PI / 360));
}

/* ------------------------------------------------------------------ visuals + HUD */
function updateVisuals(dt, t) {
  ocean.userData.uni.uT.value = t;
  for (const s of ships) { const m = s.mesh, u = m.userData; m.position.set(s.x, s.heave, s.z); m.rotation.set(0, s.h, 0); if (!s.broken) u.body.rotation.set(-s.pitch, 0, s.roll); updateWake(s, dt, t);
    const f = fwdOf(s), C = s.C;
    // bow spray, funnel smoke, fires
    if (s.v > 6 && Math.random() < s.v / 30) { const [bx, , bz] = toWorld(s, rnd(-1, 1) * 2, 0, C.L * .48); water.emit(bx, waveHeight(bx, bz, t) + 1, bz, f[1] * rnd(-3, 3) + f[0] * s.v * .5, rnd(2, 5), -f[0] * rnd(-3, 3) + f[1] * s.v * .5, 1.6, 3 + C.B * .2, 1.2, WHITE, .5, .7, G); }
    s.smokeT -= dt; if (s.smokeT <= 0 && s.alive) { s.smokeT = .12; for (const [fx, fy, fz] of u.funnels) { const [x, y, z] = toWorld(s, fx, fy + 2, fz); smoke.emit(x, y, z, -f[0] * s.v * .3 + 2, rnd(2, 4), -f[1] * s.v * .3 + 1, rnd(6, 10), 3 + C.B * .2, 1.6, [.22, .22, .24], .35, .8, -.4); } }
    for (const fi of s.fires.concat(s.alive ? [] : [{ lx: 0, lz: 0 }, { lx: 3, lz: C.L * .2 }, { lx: -3, lz: -C.L * .2 }])) { if (Math.random() < .6) { const [x, y, z] = toWorld(s, fi.lx, C.F + 1, fi.lz); fire.emit(x + rnd(-2, 2), y, z + rnd(-2, 2), rnd(-1, 1), rnd(3, 7), rnd(-1, 1), rnd(.5, 1), 4 + C.B * .15, 1.2, ORANGE, .9, .7, -2); smoke.emit(x, y + 3, z, rnd(-1, 1) + 2, rnd(4, 8), rnd(-1, 1) + 1, rnd(7, 12), 6 + C.B * .2, 1.6, BLACK, .5, .85, -.5); } } }
  for (const tp of torps) tp.mesh.visible = true;
}
const tags = new Map();
function buildTags() { const box = $('tags'); box.innerHTML = ''; tags.clear(); for (const s of ships) { if (s === player) continue; const d = document.createElement('div'); d.className = 'tag ' + (s.team === 'enemy' ? 'en' : 'al'); d.innerHTML = `<b>${s.name}</b><span>${s.C.name}</span><i><u></u></i><em></em>`; box.appendChild(d); tags.set(s, { d, u: d.querySelector('u'), em: d.querySelector('em') }); } }
function toast(t) { const n = $('toast'); n.textContent = t; n.classList.remove('on'); void n.offsetWidth; n.classList.add('on'); }
function ribbon(t, cls) { const r = $('ribbons'), d = document.createElement('div'); d.className = 'rb ' + (cls || ''); d.textContent = t; r.prepend(d); while (r.children.length > 4) r.lastChild.remove(); setTimeout(() => d.remove(), 2600); }
function big(t, s, cls) { $('bigT').textContent = t; $('bigS').textContent = s; const b = $('big'); b.className = 'on ' + (cls || ''); clearTimeout(big.tm); big.tm = setTimeout(() => b.className = '', 3200); }
function feed(t, good) { const f = $('feed'), d = document.createElement('div'); d.className = good ? 'g' : 'b'; d.textContent = t; f.prepend(d); while (f.children.length > 5) f.lastChild.remove(); setTimeout(() => d.remove(), 9000); }
function feedClear() { $('feed').innerHTML = ''; }
function flashHit() { const f = $('hitfx'); f.classList.remove('on'); void f.offsetWidth; f.classList.add('on'); }
const lastHud = {}; function setTxt(id, v) { if (lastHud[id] !== v) { lastHud[id] = v; $(id).textContent = v; } }
const radar = $('radar').getContext('2d');
function updateHUD(dt) {
  const p = player; if (!p || R.phase === 'menu') return; const W = innerWidth, H = innerHeight, C = p.C;
  // range readout and lead marker
  const D = Math.hypot(R.aim[0] - p.x, R.aim[1] - p.z), so = solve(C, D); setTxt('rng', (D / 1000).toFixed(2) + ' km'); setTxt('tof', so.ok ? so.tof.toFixed(1) + ' s' : 'OUT OF RANGE'); $('xh').classList.toggle('out', !so.ok);
  const tg = R.target, lead = $('lead'), tbox = $('tbox');
  if (tg && tg.alive && !R.shellCam && !R.camImpact) { const [lx, lz, tof] = leadPoint(p, tg); v3.set(lx, 6, lz).project(cam); const vis = v3.z < 1; lead.style.display = vis ? 'block' : 'none'; if (vis) lead.style.transform = `translate(${(v3.x * .5 + .5) * W}px,${(-v3.y * .5 + .5) * H}px)`;
    $('tinfo').style.display = 'block'; setTxt('tName', tg.name); setTxt('tCls', tg.C.name + ' · ' + (Math.hypot(tg.x - p.x, tg.z - p.z) / 1000).toFixed(1) + ' km'); $('tHp').style.width = (tg.hp / tg.maxHp * 100) + '%';
    v3.set(tg.x, tg.C.F * 2, tg.z).project(cam); tbox.style.display = v3.z < 1 ? 'block' : 'none'; tbox.style.transform = `translate(${(v3.x * .5 + .5) * W}px,${(-v3.y * .5 + .5) * H}px)`; }
  else { lead.style.display = 'none'; tbox.style.display = 'none'; $('tinfo').style.display = R.shellCam ? 'none' : (tg ? 'block' : 'none'); }
  $('xh').style.display = R.shellCam || R.camImpact || R.camMode === 'death' ? 'none' : 'block'; $('scam').style.display = R.shellCam || R.camImpact ? 'block' : 'none';
  if (R.shellCam) setTxt('scamT', 'SHELL CAM · ' + (R.shellCam.t).toFixed(1) + ' s · ' + Math.round(Math.hypot(R.shellCam.vx, R.shellCam.vy, R.shellCam.vz)) + ' m/s');
  // ship status
  $('hpBar').style.width = (p.hp / p.maxHp * 100) + '%'; setTxt('hpT', Math.max(0, Math.round(p.hp)).toLocaleString() + ' / ' + Math.round(p.maxHp).toLocaleString());
  setTxt('spd', Math.round(Math.abs(p.v) * KN) + ' kn'); setTxt('tel', TELN[p.tel]); $('rud').style.left = (50 + p.rudder * 45) + '%';
  setTxt('fires', p.fires.length ? '🔥 ' + p.fires.length : ''); setTxt('flood', p.floods.length ? '💧 ' + p.floods.length : ''); $('dcB').style.setProperty('--p', p.dc > 0 ? 1 - p.dc / 50 : 1); $('dcB').classList.toggle('ready', p.dc <= 0 && (p.fires.length + p.floods.length) > 0);
  const tu = $('turrets'); if (tu.children.length !== p.turrets.length) tu.innerHTML = p.turrets.map(() => '<i></i>').join('');
  p.turrets.forEach((t, k) => { const e = tu.children[k]; e.className = t.broken > 0 ? 'x' : !t.canBear ? 'n' : t.ready ? 'r' : 'l'; e.style.setProperty('--p', t.reload > 0 ? 1 - t.reload / C.reload : 1); });
  $('torpB').style.display = C.torp ? '' : 'none'; $('torpB').style.setProperty('--p', p.torpCd > 0 ? 1 - p.torpCd / (C.id === 'dd' ? 28 : 40) : 1); $('torpB').classList.toggle('ready', p.torpCd <= 0);
  const en = ships.filter(s => s.team === 'enemy'), al = ships.filter(s => s.team !== 'enemy'); setTxt('bInfoT', `BATTLE ${R.battle} · ENEMIES ${en.filter(s => s.alive).length} · ALLIES ${al.filter(s => s.alive).length}`); setTxt('score', (R.score + Math.round(R.dealt + R.kills * 1500)).toLocaleString());
  if (R.torpWarn > 0) { R.torpWarn -= dt; } $('torpW').classList.toggle('on', R.torpWarn > 0);
  // tags
  for (const [s, o] of tags) { if (!ships.includes(s) || !s.alive || R.shellCam) { o.d.style.display = 'none'; continue; } v3.set(s.x, s.C.F * 3 + 30, s.z).project(cam); if (v3.z > 1) { o.d.style.display = 'none'; continue; } const d = Math.hypot(s.x - p.x, s.z - p.z);
    o.d.style.display = 'block'; o.d.style.transform = `translate(${(v3.x * .5 + .5) * W}px,${(-v3.y * .5 + .5) * H}px)`; o.u.style.width = (s.hp / s.maxHp * 100) + '%'; o.em.textContent = (d / 1000).toFixed(1) + ' km'; o.d.classList.toggle('tg', s === R.target); }
  // radar
  const g = radar, Rr = 100, sc = Rr / 14000; g.clearRect(0, 0, 200, 200); g.save(); g.translate(100, 100);
  g.fillStyle = 'rgba(10,30,40,.75)'; g.beginPath(); g.arc(0, 0, Rr, 0, 7); g.fill(); g.strokeStyle = 'rgba(160,220,255,.18)'; [.33, .66, 1].forEach(k => { g.beginPath(); g.arc(0, 0, Rr * k, 0, 7); g.stroke(); });
  g.rotate(Math.PI - R.camYaw); g.strokeStyle = 'rgba(255,255,255,.25)'; g.beginPath(); g.arc(0, 0, C.range * sc, 0, 7); g.stroke();
  const P = (x, z) => [-(x - p.x) * sc, (z - p.z) * sc];
  g.fillStyle = 'rgba(190,170,120,.8)'; for (const [ix, iz, ir] of ISLANDS) { const [x, y] = P(ix, iz); g.beginPath(); g.arc(x, y, Math.max(2, ir * sc), 0, 7); g.fill(); }
  for (const s of ships) { if (!s.alive) continue; const [x, y] = P(s.x, s.z); g.save(); g.translate(x, y); g.rotate(s.h); g.fillStyle = s === p ? '#ffb547' : s.team === 'enemy' ? '#ff4d4d' : '#5fb3ff'; g.beginPath(); g.moveTo(0, 5); g.lineTo(3.5, -4); g.lineTo(-3.5, -4); g.closePath(); g.fill(); g.restore(); }
  g.fillStyle = 'rgba(255,255,255,.7)'; for (const sl of shells) { const [x, y] = P(sl.x, sl.z); g.fillRect(x - .8, y - .8, 1.6, 1.6); }
  g.restore(); g.strokeStyle = 'rgba(255,255,255,.5)'; g.beginPath(); g.moveTo(100, 100); g.lineTo(100 - 30, 30); g.moveTo(100, 100); g.lineTo(130, 30); g.stroke();
}

/* ------------------------------------------------------------------ cinematic: a scripted present-day battle */
const CINE = { ships: {}, jets: [], missiles: [], parked: [], shots: [], shotI: -1, shotT: 0, hold: 0, ciws: null, flash: null };
const UPV = new THREE.Vector3(0, 1, 0), ZV = new THREE.Vector3(), M4 = new THREE.Matrix4(), V1 = new THREE.Vector3(), V2 = new THREE.Vector3(), Q1 = new THREE.Quaternion();
const flareMat = new THREE.SpriteMaterial({ map: glowTexture(), color: new THREE.Color(5, 3, 1.4), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, toneMapped: false });
const missileGeo = (() => { const g = [new THREE.CylinderGeometry(.22, .22, 5.2, 10).rotateX(Math.PI / 2), new THREE.ConeGeometry(.22, .9, 10).rotateX(-Math.PI / 2).translate(0, 0, -3.05)];
  for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; g.push(new THREE.BoxGeometry(.04, .7, .6).translate(0, .45, 2.2).rotateZ(a)); } return mergeG(g); })();
function mergeG(arr) { const out = arr.map(x => { const y = x.index ? x.toNonIndexed() : x; for (const n of Object.keys(y.attributes)) if (n !== 'position' && n !== 'normal') y.deleteAttribute(n); return y; }); const pos = [], nor = []; out.forEach(o => { pos.push(...o.attributes.position.array); nor.push(...o.attributes.normal.array); }); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); return g; }
const missileMat = new THREE.MeshStandardMaterial({ color: '#e8e8e4', roughness: .45, metalness: .3 });
const flash = new THREE.PointLight('#ffb070', 0, 3000, 1.2); scene.add(flash);
function cineClear() { for (const s of ships.slice()) removeShip(s); for (const j of CINE.jets) scene.remove(j.mesh); for (const m of CINE.missiles) { scene.remove(m.mesh); } for (const p of CINE.parked) scene.remove(p.mesh); CINE.jets = []; CINE.missiles = []; CINE.parked = []; flash.intensity = 0; }
function cineStart() { Audio.init(); R.phase = 'cine'; R.paused = false; renderer.localClippingEnabled = true; document.body.className = 'cine' + (isTouch ? ' touch' : ''); $('menu').classList.remove('on'); $('hud').classList.remove('on'); cineReset(); }
function cineReset() {
  cineClear(); player = null; R.t = 0;
  const S1 = (cls, team, x, z, h, name, tel = 3) => { const s = spawnShip(cls, team, x, z, h); s.ai = null; s.tel = tel; s.name = name; s.v = s.C.speed * TEL[tel]; return s; };
  const c = CINE.ships = { cv: S1('cv', 'ally', 0, -2600, 0, 'USS Koppanalil (CVN-77)'), d1: S1('ddg', 'ally', -700, -1900, 0, 'USS Resolute (DDG-118)'), d2: S1('ddg', 'ally', 760, -2050, 0, 'USS Valiant (DDG-121)'),
    f1: S1('ffg', 'enemy', -500, 1900, Math.PI, 'Corvette Hydra'), f2: S1('ffg', 'enemy', 650, 2300, Math.PI, 'Frigate Basilisk'), e3: S1('ddg', 'enemy', 40, 3100, Math.PI, 'Destroyer Leviathan') };
  for (let k = 0; k < 6; k++) { const m = buildJet(k % 3 ? 'viper' : 'raptor', 'gray'); scene.add(m); CINE.parked.push({ mesh: m, lx: 10 + (k % 2) * 13, lz: -40 - Math.floor(k / 2) * 24, rot: Math.PI * .75 }); }
  CINE.shotI = -1; nextShot();
}
function cineJet(lx, lz, delay, type = 'viper') { const m = buildJet(type, 'gray'); scene.add(m); const j = { mesh: m, pos: new THREE.Vector3(), vel: new THREE.Vector3(), lx, lz, delay, phase: 'deck', dv: 0, goal: null, speed: 230, bank: 0, lastH: 0 }; CINE.jets.push(j); return j; }
function updateJet(j, dt) {
  const cv = CINE.ships.cv, f = fwdOf(cv);
  if (j.phase === 'deck') { if (j.delay > 0) j.delay -= dt; else { j.dv += 19 * dt; j.lz += j.dv * dt; if (Math.random() < .9) fire.emit(j.pos.x - f[0] * 9, j.pos.y + .4, j.pos.z - f[1] * 9, -f[0] * 30, 1, -f[1] * 30, .25, 3, 1, ORANGE, .8, .2); if (j.dv > 0 && !j.sound) { j.sound = 1; Audio.jet(cam.position.distanceTo(j.pos)); } }
    const [x, y, z] = toWorld(cv, j.lx, cv.C.deckY + 1.9, j.lz); j.pos.set(x, y, z); j.vel.set(f[0] * (j.dv + cv.v), 0, f[1] * (j.dv + cv.v)); if (j.lz > cv.C.L * .52) { j.phase = 'fly'; j.vel.y = 6; }
    M4.lookAt(ZV, V1.set(f[0], 0, f[1]), UPV); j.mesh.quaternion.setFromRotationMatrix(M4); j.mesh.position.copy(j.pos); return; }
  const goal = j.goal ? j.goal() : V2.copy(j.pos).addScaledVector(j.vel, 3); const want = V1.copy(goal).sub(j.pos); if (j.pos.y < 40) want.y = Math.max(want.y, want.length() * .2); want.normalize();
  const sp = j.vel.length(), dir = j.vel.clone().normalize(), ang = dir.angleTo(want), turn = Math.min(1, (.75 * dt) / Math.max(ang, 1e-4)); dir.lerp(want, turn).normalize();
  const ns = sp + clamp(j.speed - sp, -25 * dt, 22 * dt); j.vel.copy(dir).multiplyScalar(ns); j.pos.addScaledVector(j.vel, dt);
  const h = Math.atan2(dir.x, dir.z), rate = angD(h, j.lastH) / Math.max(dt, 1e-3); j.lastH = h; j.bank = lerp(j.bank, clamp(rate * 1.8, -1.2, 1.2), 1 - Math.exp(-dt * 3));
  M4.lookAt(ZV, dir, UPV); j.mesh.quaternion.setFromRotationMatrix(M4); j.mesh.rotateZ(j.bank); j.mesh.position.copy(j.pos);
  if (Math.random() < .7) trail.emit(j.pos.x - dir.x * 9, j.pos.y - dir.y * 9, j.pos.z - dir.z * 9, 0, 0, 0, 1.2, 1.2, 2.5, [.85, .85, .87], .14, 1, 0);
}
function launchMissile(from, target, vertical) {
  const m = new THREE.Mesh(missileGeo, missileMat); scene.add(m); const fl = new THREE.Sprite(flareMat); fl.scale.setScalar(2.2); m.add(fl); fl.position.z = 3.4; m.scale.setScalar(1.5);
  const pos = from.pos ? from.pos.clone().add(new THREE.Vector3(0, -2, 0)) : new THREE.Vector3(...toWorld(from, 0, from.C.F + 1, from.C.L * .27));
  const vel = from.vel ? from.vel.clone() : new THREE.Vector3(0, 40, 0);
  const ms = { mesh: m, pos, vel, speed: vel.length(), target, vertical, t: 0, dead: false, from, intercept: 0 }; CINE.missiles.push(ms);
  for (let k = 0; k < (vertical ? 60 : 16); k++) smoke.emit(pos.x + rnd(-3, 3), pos.y + rnd(0, 4), pos.z + rnd(-3, 3), rnd(-4, 4), rnd(2, 12), rnd(-4, 4), rnd(3, 6), 8, 1.6, [.85, .84, .82], .55, .7, -.3);
  Audio.launch(cam.position.distanceTo(pos)); return ms;
}
function updateMissile(m, dt, t) {
  if (m.dead) return; m.t += dt; const tg = m.target, tc = V2.set(tg.x, tg.C.F + 3 + tg.heave, tg.z);
  const dh = Math.hypot(tc.x - m.pos.x, tc.z - m.pos.z), aimY = dh > 1500 ? 24 : dh > 650 ? 170 : tc.y;
  let want; if (m.vertical && m.t < 1.1) want = V1.set(0, 1, 0); else { const step = Math.min(dh, dh > 650 ? 600 : dh); want = V1.set((tc.x - m.pos.x) / Math.max(dh, 1) * step, aimY - m.pos.y, (tc.z - m.pos.z) / Math.max(dh, 1) * step).normalize(); }
  const dir = m.vel.clone().normalize(), rate = m.vertical && m.t < 2 ? 1.8 : dh < 650 ? 3.2 : 1.3, ang = dir.angleTo(want); dir.lerp(want, Math.min(1, rate * dt / Math.max(ang, 1e-4))).normalize();
  m.speed = Math.min(330, m.speed + 160 * dt); m.vel.copy(dir).multiplyScalar(m.speed); m.pos.addScaledVector(m.vel, dt);
  M4.lookAt(ZV, dir, UPV); m.mesh.quaternion.setFromRotationMatrix(M4); m.mesh.position.copy(m.pos);
  smoke.emit(m.pos.x - dir.x * 4, m.pos.y - dir.y * 4, m.pos.z - dir.z * 4, rnd(-1, 1), rnd(0, 1.5), rnd(-1, 1), rnd(2.5, 4), 2.2, 2.4, [.86, .86, .85], .5, .9, -.2);
  if (m.intercept && m.from && Math.hypot(m.pos.x - m.intercept.x, m.pos.z - m.intercept.z) < m.intercept.r) { m.dead = true; airBurst(m.pos); return; }
  const [lx, ly, lz] = toLocal(tg, m.pos.x, m.pos.y, m.pos.z); if (insideHull(tg.C, lx, ly, lz) || (dh < tg.C.B && m.pos.y < tg.C.F * 2.5)) { m.dead = true; missileImpact(m); return; }
  if (m.pos.y < waveHeight(m.pos.x, m.pos.z, t)) { m.dead = true; splashFX(m.pos.x, m.pos.z, 406, t); }
}
function airBurst(p) { for (let i = 0; i < 90; i++) fire.emit(p.x, p.y, p.z, rnd(-1, 1) * 40, rnd(-1, 1) * 40, rnd(-1, 1) * 40, rnd(.3, .8), 7, 2.5, ORANGE, 1, .2, 3); for (let i = 0; i < 50; i++) smoke.emit(p.x + rnd(-4, 4), p.y + rnd(-4, 4), p.z + rnd(-4, 4), rnd(-6, 6), rnd(-3, 5), rnd(-6, 6), rnd(5, 9), 12, 1.4, BLACK, .55, .7, -.2);
  flash.position.copy(p); flash.intensity = 4e5; Audio.hit(406, cam.position.distanceTo(p)); R.shake = Math.min(1.5, R.shake + .6); }
function missileImpact(m) {
  const s = m.target, p = m.pos; for (let i = 0; i < 200; i++) fire.emit(p.x + rnd(-6, 6), p.y + rnd(0, 6), p.z + rnd(-6, 6), rnd(-1, 1) * 70, rnd(-.2, 1) * 90, rnd(-1, 1) * 70, rnd(.5, 1.6), rnd(8, 18), 2.2, Math.random() < .2 ? FLASH : [1, .42, .1], .55, .25, 5);
  for (let i = 0; i < 220; i++) smoke.emit(p.x + rnd(-20, 20), p.y + rnd(0, 40), p.z + rnd(-20, 20), rnd(-12, 12), rnd(8, 45), rnd(-12, 12), rnd(9, 18), rnd(18, 34), 1.3, BLACK, .7, .65, -.25);
  for (let i = 0; i < 160; i++) { const a = Math.random() * Math.PI * 2; water.emit(p.x + Math.cos(a) * 20, 0, p.z + Math.sin(a) * 20, Math.cos(a) * rnd(20, 60), rnd(10, 40), Math.sin(a) * rnd(20, 60), rnd(2, 4), 10, 1, WHITE, .8, .6, G); }
  flash.position.copy(p).setY(p.y + 20); flash.intensity = 6e5; Audio.boom(cam.position.distanceTo(p)); R.shake = 1.6; breakShip(s);
}
function breakShip(s) {
  if (s.broken) return; s.alive = false; s.sinking = .001; s.deto = false; s.v *= .3; const A = s.mesh.userData.body, B = A.clone(true); s.mesh.add(B);
  const pA = new THREE.Plane(), pB = new THREE.Plane(); A.traverse(o => { if (o.isMesh) [].concat(o.material).forEach(mt => { mt.clippingPlanes = [pA]; mt.clipShadows = true; }); });
  B.traverse(o => { if (o.isMesh) { o.material = Array.isArray(o.material) ? o.material.map(mt => { const c = mt.clone(); c.clippingPlanes = [pB]; return c; }) : Object.assign(o.material.clone(), { clippingPlanes: [pB] }); } });
  s.broken = { t: 0, A, B, pA, pB };
}
function updateBroken(s, dt) { const b = s.broken; b.t += dt; const tilt = Math.min(.42, b.t * .05), sep = Math.min(7, b.t * 1.4);
  b.A.rotation.set(-tilt, 0, s.roll * .5); b.A.position.set(0, 0, sep); b.B.rotation.set(tilt * .8, 0, -s.roll * .4); b.B.position.set(0, 0, -sep);
  s.mesh.updateMatrixWorld(true); for (const [g, pl, sg] of [[b.A, b.pA, 1], [b.B, b.pB, -1]]) { V1.set(0, 0, sg).transformDirection(g.matrixWorld); V2.setFromMatrixPosition(g.matrixWorld); pl.setFromNormalAndCoplanarPoint(V1, V2); }
  if (Math.random() < .8) { const [x, y, z] = toWorld(s, rnd(-4, 4), s.C.F, rnd(-8, 8)); fire.emit(x, y + 2, z, rnd(-2, 2), rnd(5, 12), rnd(-2, 2), rnd(.6, 1.2), 9, 1.3, ORANGE, .9, .7, -2); smoke.emit(x, y + 8, z, rnd(-2, 2) + 3, rnd(6, 12), rnd(-2, 2), rnd(10, 16), 14, 1.5, BLACK, .55, .85, -.4); } }
function ciwsFire(from, m, dt) { if (!m || m.dead) return; const [x, y, z] = toWorld(from, 0, from.C.F + 11, from.C.L * .16); for (let k = 0; k < 3; k++) { const d = V1.set(m.pos.x - x + rnd(-8, 8), m.pos.y - y + rnd(-8, 8), m.pos.z - z + rnd(-8, 8)).normalize(); fire.emit(x, y, z, d.x * 1100, d.y * 1100, d.z * 1100, .7, 1.4, 0, FLASH, 1, 1, 0); }
  CINE.ciwsT = (CINE.ciwsT || 0) - dt; if (CINE.ciwsT <= 0) { CINE.ciwsT = .35; Audio.ciws(cam.position.distanceTo(V2.set(x, y, z))); } }
// camera helpers
const cineCam = { pos: new THREE.Vector3(), look: new THREE.Vector3(), init: false };
function camTo(px, py, pz, lx, ly, lz, dt, k = 3, kl = 4) { if (!cineCam.init) { cineCam.pos.set(px, py, pz); cineCam.look.set(lx, ly, lz); cineCam.init = true; }
  cineCam.pos.lerp(V1.set(px, py, pz), k >= 99 ? 1 : 1 - Math.exp(-dt * k)); cineCam.look.lerp(V2.set(lx, ly, lz), kl >= 99 ? 1 : 1 - Math.exp(-dt * kl)); cam.position.copy(cineCam.pos); cam.position.y = Math.max(cam.position.y, waveHeight(cam.position.x, cam.position.z, R.t) + 2.5); cam.lookAt(cineCam.look); }
function orbit(s, r, h, sp, dt) { const a = CINE.shotT * sp + (CINE.orbitA || 0); camTo(s.x + Math.sin(a) * r, h, s.z + Math.cos(a) * r, s.x, s.C.F * 2, s.z, dt, 2.5, 4); }
function chase(o, back, up, dt, k = 99) { const d = o.vel.clone().normalize(); camTo(o.pos.x - d.x * back + d.z * back * .15, o.pos.y - d.y * back + up, o.pos.z - d.z * back - d.x * back * .15, o.pos.x + d.x * 80, o.pos.y + d.y * 80, o.pos.z + d.z * 80, dt, k, 6); }
const missileShot = (key, title, sub) => ({ title, sub, start() { CINE.mf = null; }, until: () => CINE[key] && CINE[key].dead, hold: 2.6, cam(dt) { const m = CINE[key]; if (!m) return; if (!m.dead) { chase(m, 16, 3.5, dt); const d = Math.hypot(m.pos.x - m.target.x, m.pos.z - m.target.z); R.slow = d < 380 ? .3 : 1; setTxt('cineS', sub + ' · ' + (d / 1000).toFixed(1) + ' km'); } else { R.slow = CINE.hold > 1.6 ? .35 : 1; const t = m.target; cam.lookAt(cineCam.look.lerp(V2.set(t.x, t.C.F * 2, t.z), .05)); } } });
CINE.shots = [
  { title: 'IRON SEAS', sub: 'Present day · a carrier strike group on patrol', dur: 9, start() { CINE.orbitA = 2.2; }, cam(dt) { orbit(CINE.ships.cv, 640, 170, .07, dt); } },
  { title: 'FLIGHT OPS', sub: 'Strike fighters launching from USS Koppanalil', start() { const cv = CINE.ships.cv; CINE.j1 = cineJet(-8, -110, .6); CINE.j2 = cineJet(8, -140, 3.2, 'raptor');
      const ahead = (dz, alt) => () => { const f = fwdOf(cv); return V2.set(cv.x + f[0] * dz, alt, cv.z + f[1] * dz); }; CINE.j1.goal = ahead(2600, 260); CINE.j2.goal = () => { const a = R.t * .12; return V2.set(cv.x + Math.sin(a) * 1500, 520, cv.z + 1600 + Math.cos(a) * 1500); }; },
    until: () => CINE.j1 && CINE.j1.phase === 'fly' && CINE.shotT > 6.2, hold: 1.4, cam(dt) { const cv = CINE.ships.cv, j = CINE.j1; const [px, py, pz] = toWorld(cv, -30, cv.C.deckY + 5, 95); camTo(px, py, pz, j.pos.x, j.pos.y + 1, j.pos.z, dt, 99, 7); } },
  { title: 'WEAPONS FREE', sub: 'Viper 1 inbound on Corvette Hydra', dur: 7, start() { const f1 = CINE.ships.f1; CINE.j1.goal = () => V2.set(f1.x, 140, f1.z); CINE.j1.speed = 260; },
    end() { CINE.m1 = launchMissile(CINE.j1, CINE.ships.f1, false); const cv = CINE.ships.cv; CINE.j1.goal = () => V2.set(cv.x - 1200, 400, cv.z); }, cam(dt) { chase(CINE.j1, 30, 7, dt, 6); } },
  missileShot('m1', 'MISSILE AWAY', 'Anti-ship missile, sea-skimming'),
  { title: 'DIRECT HIT', sub: 'Corvette Hydra breaks in two', dur: 7, start() { CINE.orbitA = 0; }, cam(dt) { orbit(CINE.ships.f1, 300, 70, .09, dt); } },
  { title: 'VERTICAL LAUNCH', sub: 'USS Resolute fires on Frigate Basilisk', start() { CINE.m2 = null; }, until: () => CINE.m2 && CINE.m2.t > 3, cam(dt) { const d = CINE.ships.d1; if (!CINE.m2 && CINE.shotT > 1.4) CINE.m2 = launchMissile(d, CINE.ships.f2, true);
      const [px, py, pz] = toWorld(d, 70, d.C.F + 22, d.C.L * .05), [lx, ly, lz] = toWorld(d, 0, d.C.F + 10, d.C.L * .27); if (CINE.m2) camTo(px, py, pz, CINE.m2.pos.x, CINE.m2.pos.y, CINE.m2.pos.z, dt, 99, 5); else camTo(px, py, pz, lx, ly, lz, dt, 99, 99); } },
  missileShot('m2', 'TRACKING', 'Missile on Frigate Basilisk'),
  { title: 'TARGET DESTROYED', sub: 'Frigate Basilisk is going down', dur: 6, start() { CINE.orbitA = 1.5; }, cam(dt) { orbit(CINE.ships.f2, 280, 60, -.1, dt); } },
  { title: 'INCOMING', sub: 'Destroyer Leviathan returns fire', dur: 5.5, start() { const e = CINE.ships.e3, d2 = CINE.ships.d2; const icpt = r => ({ get x() { return d2.x; }, get z() { return d2.z; }, r }); CINE.e1 = launchMissile(e, d2, true); CINE.e1.intercept = icpt(950); CINE.e2 = null; CINE.icpt = icpt; },
    cam(dt) { const e = CINE.ships.e3, d2 = CINE.ships.d2; if (!CINE.e2 && CINE.shotT > .9) { CINE.e2 = launchMissile(e, d2, true); CINE.e2.intercept = CINE.icpt(560); } if (CINE.e1 && !CINE.e1.dead) chase(CINE.e1, 18, 4, dt); } },
  { title: 'CIWS ENGAGING', sub: 'USS Valiant defends the fleet', start() {},
    until: () => (!CINE.e1 || CINE.e1.dead) && (!CINE.e2 || CINE.e2.dead), hold: 2.2, cam(dt) { const d = CINE.ships.d2, tg = [CINE.e1, CINE.e2].find(m => m && !m.dead) || CINE.e1, [px, py, pz] = toWorld(d, -12, d.C.F + 18, -10);
      if (tg) { camTo(px, py, pz, tg.pos.x, tg.pos.y, tg.pos.z, dt, 99, 3); if (!tg.dead && Math.hypot(tg.pos.x - d.x, tg.pos.z - d.z) < 2200) ciwsFire(d, tg, dt); } } },
  { title: 'FINAL STRIKE', sub: 'Raptor 2 on Destroyer Leviathan', dur: 7, start() { const e = CINE.ships.e3; CINE.j2.goal = () => V2.set(e.x, 160, e.z); CINE.j2.speed = 280; },
    end() { CINE.m3 = launchMissile(CINE.j2, CINE.ships.e3, false); const cv = CINE.ships.cv; CINE.j2.goal = () => V2.set(cv.x + 1200, 450, cv.z - 500); }, cam(dt) { chase(CINE.j2, 32, 8, dt, 6); } },
  missileShot('m3', 'IMPACT IMMINENT', 'Missile on Destroyer Leviathan'),
  { title: 'ENEMY FLEET DESTROYED', sub: 'Destroyer Leviathan is sinking', dur: 7, start() { CINE.orbitA = .6; }, cam(dt) { orbit(CINE.ships.e3, 340, 85, .08, dt); } },
  { title: 'THE SEA IS OURS', sub: 'Iron Seas · cinematic mode', dur: 9, start() { const cv = CINE.ships.cv; CINE.jets.forEach((j, k) => { j.speed = 210; j.goal = () => { const a = R.t * .25 + k * .6; return V2.set(cv.x + Math.sin(a) * 700, 220 + k * 30, cv.z + Math.cos(a) * 700); }; }); CINE.orbitA = 4; }, cam(dt) { orbit(CINE.ships.cv, 900, 120, .05, dt); } },
];
function nextShot() { const cur = CINE.shots[CINE.shotI]; if (cur && cur.end) cur.end(); CINE.shotI++; R.slow = 1; if (CINE.shotI >= CINE.shots.length) { cineReset(); return; } const sh = CINE.shots[CINE.shotI]; CINE.shotT = 0; CINE.hold = 0; cineCam.init = false; lastHud.cineS = null; sh.start && sh.start();
  $('cineT').textContent = sh.title; $('cineS').textContent = sh.sub; const L = $('lower'); L.classList.remove('on'); void L.offsetWidth; L.classList.add('on'); }
function cineUpdate(dt) {
  const t = R.t; for (const j of CINE.jets) updateJet(j, dt); for (const m of CINE.missiles) { updateMissile(m, dt, t); if (m.dead && m.mesh.parent) scene.remove(m.mesh); }
  const cv = CINE.ships.cv; for (const p of CINE.parked) { const [x, y, z] = toWorld(cv, p.lx, cv.C.deckY + 1.9, p.lz); p.mesh.position.set(x, y, z); p.mesh.rotation.set(0, cv.h + p.rot, 0); }
  for (const s of ships) if (s.broken) updateBroken(s, dt);
  flash.intensity *= Math.exp(-dt * 6);
  const sh = CINE.shots[CINE.shotI]; if (!sh) return; CINE.shotT += dt;
  if (sh.dur && CINE.shotT > sh.dur) nextShot(); else if (sh.until && sh.until()) { CINE.hold += dt / Math.max(R.slow, .3); if (CINE.hold > (sh.hold || 0)) nextShot(); }
}
function cineCamera(dt) { const sh = CINE.shots[CINE.shotI]; if (sh) sh.cam(dt); return 50; }

/* ------------------------------------------------------------------ menu + loop */
function paintMenu() {
  $('mShips').innerHTML = Object.values(CLASSES).filter(c => !c.modern).map(c => `<button class="scard${S.ship === c.id ? ' on' : ''}" data-id="${c.id}"><b>${c.name}</b><p>${c.desc}</p><div class="st"><span>SPEED <i style="--v:${c.speed / 20}"></i></span><span>GUNS <i style="--v:${c.cal / 406}"></i></span><span>HULL <i style="--v:${c.hp / 12500}"></i></span><span>RANGE <i style="--v:${c.range / 17500}"></i></span></div></button>`).join('');
  document.querySelectorAll('.scard').forEach(b => b.onclick = () => { Audio.init(); Audio.click(); S.ship = b.dataset.id; save(); paintMenu(); menuShip(); });
  const ch = (id, opts, key, after) => { const el = $(id); el.innerHTML = ''; opts.forEach(([v, l]) => { const b = document.createElement('button'); b.className = 'chip' + (S[key] === v ? ' on' : ''); b.textContent = l; b.onclick = () => { Audio.click(); S[key] = v; save(); paintMenu(); after && after(); }; el.appendChild(b); }); };
  ch('mCam', [[true, 'Follow shells'], [false, 'Stay on ship']], 'shellCam'); ch('mSens', [[.6, 'Low'], [1, 'Medium'], [1.6, 'High']], 'sens'); ch('mQual', [['auto', 'Auto'], ['high', 'High'], ['medium', 'Medium'], ['low', 'Low']], 'quality', () => location.reload());
  $('best').textContent = best.toLocaleString();
}
function menuShip() { for (const s of ships.slice()) removeShip(s); player = spawnShip(S.ship, 'player', 0, 0, .6); player.tel = 3; spawnShip('dd', 'ally', -600, -900, .6).tel = 3; }
function toMenu() { cineClear(); document.body.classList.remove('cine'); R.phase = 'menu'; R.paused = false; Audio.stopLoops(); shells.forEach(s => scene.remove(s.mesh)); shells.length = 0; torps.forEach(t => scene.remove(t.mesh)); torps.length = 0; R.score = 0; R.kills = 0; R.dealt = 0; R.wins = 0; R.shellCam = null; R.camImpact = null;
  document.body.className = isTouch ? 'touch' : ''; $('hud').classList.remove('on'); $('over').classList.remove('on'); $('pause').classList.remove('on'); $('menu').classList.add('on'); $('clickfly').classList.remove('on'); menuShip(); paintMenu(); if (document.pointerLockElement) document.exitPointerLock(); }
$('cineGo').onclick = () => { Audio.click(); cineStart(); }; $('cineX').onclick = () => toMenu(); $('cineN').onclick = () => nextShot();
$('go').onclick = () => { Audio.init(); Audio.click(); R.score = 0; R.kills = 0; R.dealt = 0; R.wins = 0; startBattle(1); lockPointer(); };
$('snd').onclick = () => { Audio.init(); $('snd').textContent = Audio.toggle() ? '🔊' : '🔇'; }; $('snd').textContent = Audio.on ? '🔊' : '🔇';

let last = performance.now(), fpsT = 0, fpsN = 0;
function frame(now) {
  requestAnimationFrame(frame); const dt = clamp((now - last) / 1000, 0, .05); last = Math.max(last, now);
  const sdt = dt * R.slow;
  if (!R.paused) { if (R.phase === 'battle' || R.phase === 'over' || R.phase === 'menu' || R.phase === 'cine') { if (R.phase === 'cine') cineUpdate(sdt); let r = sdt; while (r > 0) { const h = Math.min(1 / 60, r); step(h); r -= h; } }
    updateVisuals(sdt, R.t); for (const ps of [water, smoke, fire, trail]) ps.update(sdt); }
  updateCamera(dt); if (R.phase === 'battle' && player) { computeAim(); updateHUD(dt); }
  if (player && !R.paused) Audio.ambient(Math.abs(player.v), R.phase === 'battle');
  if (composer && !window.__direct) composer.render(); else renderer.render(scene, cam);
  fpsT += dt; fpsN++; if (fpsT > 2) { const fps = fpsN / fpsT; fpsT = 0; fpsN = 0; const ps = prScale; if (fps < 40 && prScale > .6) prScale = Math.max(.6, prScale - .1); else if (fps > 57 && prScale < 1) prScale = Math.min(1, prScale + .05); if (ps !== prScale) resize(); }
}
menuShip(); paintMenu(); renderer.compile(scene, cam); $('menu').classList.add('on'); $('loading').classList.remove('on'); requestAnimationFrame(frame);
window.__nv = { cineStep(h) { const sdt = h * R.slow; step(sdt); cineUpdate(sdt); updateVisuals(sdt, R.t); updateCamera(h); }, S, R, get ships() { return ships; }, get player() { return player; }, shells, torps, step, startBattle, toMenu, cam, renderer, playerFire, computeAim, solve, BAL };
