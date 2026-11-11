// JK Grand Prix — race nine rivals around procedurally built circuits.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Track, TRACKS, TIMES, skyMesh } from './track.js';
import { TEAMS, buildCar, setLeds, AX } from './car.js';
import { Audio } from './audio.js';

const $ = id => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
const angD = (a, b) => { let d = a - b; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
const isTouch = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
const fmt = t => { if (!isFinite(t) || t <= 0) return '–:––.–––'; const m = Math.floor(t / 60), s = t - m * 60; return m + ':' + (s < 10 ? '0' : '') + s.toFixed(3); };
const fmtGap = t => (t >= 0 ? '+' : '−') + Math.abs(t).toFixed(3);

/* ------------------------------------------------------------------ settings */
const DEF = { track: 'dune', mode: 'race', laps: 3, diff: 'pro', team: 'jk', grid: 'mid', cam: 'chase', line: true, brake: isTouch, steer: isTouch, autoDrs: isTouch, quality: 'auto' };
let S = { ...DEF }; try { Object.assign(S, JSON.parse(localStorage.getItem('jkgp-settings') || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem('jkgp-settings', JSON.stringify(S)); } catch (e) {} };
let stats = { races: 0, wins: 0, podiums: 0 }; try { Object.assign(stats, JSON.parse(localStorage.getItem('jkgp-stats') || '{}')); } catch (e) {}
const bestOf = id => { try { return +localStorage.getItem('jkgp-best-' + id) || 0; } catch (e) { return 0; } };
const Q = S.quality === 'auto' ? (isTouch ? 'medium' : 'high') : S.quality;
const DIFF = { rookie: [.84, .89], pro: [.9, .945], legend: [.955, .995] };
const RATING = { bull: 1, rossa: .993, silver: .99, papaya: .988, jk: .985, verde: .978, neon: .975, azure: .972, steel: .968, oxford: .965 };
const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

/* ------------------------------------------------------------------ renderer */
const canvas = $('gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: Q !== 'low', powerPreference: 'high-performance' });
const basePR = Math.min(devicePixelRatio || 1, Q === 'high' ? 2 : Q === 'medium' ? 1.5 : 1); let prScale = 1;
renderer.setPixelRatio(basePR); renderer.setSize(innerWidth, innerHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = Q !== 'low'; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(), cam = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, .1, 7000);
const pmrem = new THREE.PMREMGenerator(renderer); const ENV = {}; // reflections come from each time-of-day's own sky over a dim ground; all baked up front
for (const [k, T] of Object.entries(TIMES)) { const es = new THREE.Scene(), sky = skyMesh(T, k === 'night'); sky.scale.setScalar(.01); es.add(sky);
  const gnd = new THREE.Mesh(new THREE.CircleGeometry(40, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(T.grass).multiplyScalar(.35) })); gnd.position.y = -2; es.add(gnd);
  ENV[k] = pmrem.fromScene(es, .02, .1, 200).texture; es.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); }
const hemi = new THREE.HemisphereLight('#fff', '#444', 1); scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff', 3); sun.castShadow = Q !== 'low'; const SH = Q === 'high' ? 2048 : 1024; sun.shadow.mapSize.set(SH, SH);
Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 45, bottom: -45, near: 1, far: 500 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03; scene.add(sun, sun.target);
const sunDir = new THREE.Vector3(0, 1, 0);
let composer = null, bloom = null;
if (Q === 'high') {
  const rt = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }); rt.depthTexture = new THREE.DepthTexture(1, 1); rt.depthTexture.type = THREE.FloatType;
  composer = new EffectComposer(renderer, rt); composer.addPass(new RenderPass(scene, cam));
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), .3, .55, .88); composer.addPass(bloom); composer.addPass(new OutputPass());
}
function resize() { const w = innerWidth, h = innerHeight; cam.aspect = w / h; cam.updateProjectionMatrix(); renderer.setPixelRatio(basePR * prScale); renderer.setSize(w, h, false); if (composer) { composer.setPixelRatio(basePR * prScale); composer.setSize(w, h); } }
addEventListener('resize', resize); resize();
function applyTime(T) {
  scene.fog = new THREE.Fog(T.fog, 450, 3400); scene.background = new THREE.Color(T.fog);
  hemi.color.set(T.hemi[0]); hemi.groundColor.set(T.hemi[1]); hemi.intensity = T.hemi[2];
  sun.color.set(T.sun); sun.intensity = T.sunI; sunDir.set(...T.dir).normalize(); renderer.toneMappingExposure = T.exp;
  scene.environmentIntensity = T.lamps >= 1 ? .9 : 1; if (bloom) { bloom.strength = T.lamps >= 1 ? .7 : T.lamps ? .3 : .22; bloom.threshold = T.lamps >= 1 ? .85 : 1.35; }
}
function disposeTree(o) { o.traverse(m => { if (m.geometry) m.geometry.dispose(); if (m.material) [].concat(m.material).forEach(mt => { if (mt.map) mt.map.dispose(); mt.dispose(); }); }); }

/* ------------------------------------------------------------------ particles */
class Parts {
  constructor(max, additive) {
    this.max = max; this.i = 0; this.p = new Float32Array(max * 3); this.v = new Float32Array(max * 3); this.c = new Float32Array(max * 3); this.sz = new Float32Array(max); this.al = new Float32Array(max);
    this.age = new Float32Array(max).fill(1e9); this.life = new Float32Array(max).fill(1); this.s0 = new Float32Array(max); this.gr = new Float32Array(max); this.a0 = new Float32Array(max); this.drag = new Float32Array(max); this.grav = new Float32Array(max);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(this.p, 3).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('color', new THREE.BufferAttribute(this.c, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.sz, 1).setUsage(THREE.DynamicDrawUsage)); g.setAttribute('alpha', new THREE.BufferAttribute(this.al, 1).setUsage(THREE.DynamicDrawUsage)); g.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.mat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending, uniforms: { scale: { value: 500 } },
      vertexShader: 'attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(size*scale/-mv.z,420.); gl_Position=projectionMatrix*mv; }',
      fragmentShader: 'varying vec3 vC; varying float vA; void main(){ float r=length(gl_PointCoord-.5); if(r>.5||vA<.004) discard; gl_FragColor=vec4(vC, vA*smoothstep(.5,.0,r)); }' });
    this.pts = new THREE.Points(g, this.mat); this.pts.frustumCulled = false; this.pts.renderOrder = 3; scene.add(this.pts); this.g = g;
  }
  emit(x, y, z, vx, vy, vz, life, size, grow, col, alpha, drag = 1, grav = 0) { const i = this.i; this.i = (i + 1) % this.max;
    this.p.set([x, y, z], i * 3); this.v.set([vx, vy, vz], i * 3); this.c.set(col, i * 3); this.age[i] = 0; this.life[i] = life; this.s0[i] = size; this.gr[i] = grow; this.a0[i] = alpha; this.drag[i] = drag; this.grav[i] = grav; }
  update(dt) { for (let i = 0; i < this.max; i++) { const a = this.age[i] += dt, L = this.life[i]; if (a > L) { this.al[i] = 0; continue; } const k = i * 3, d = Math.pow(this.drag[i], dt);
    this.v[k] *= d; this.v[k + 1] = this.v[k + 1] * d - this.grav[i] * dt; this.v[k + 2] *= d; this.p[k] += this.v[k] * dt; this.p[k + 1] += this.v[k + 1] * dt; this.p[k + 2] += this.v[k + 2] * dt; if (this.p[k + 1] < .02) { this.p[k + 1] = .02; this.v[k + 1] *= -.3; }
    const f = a / L; this.sz[i] = this.s0[i] * (1 + this.gr[i] * a); this.al[i] = this.a0[i] * (1 - f) * Math.min(1, a * 12); }
    for (const n of ['position', 'color', 'size', 'alpha']) this.g.attributes[n].needsUpdate = true; }
}
const smoke = new Parts(Q === 'low' ? 500 : 1400, false), sparks = new Parts(500, true);
const SMOKE = [.82, .82, .84], DUST = [.62, .52, .38], GRASS = [.4, .45, .28], SPARK = [1, .55, .15];

/* ------------------------------------------------------------------ track + cars */
let track = null, trackGroup = null, lineMesh = null; const trackCache = {};
function buildLine() {
  const N = track.N, pos = [], col = [], idx = [], w = .45;
  for (let k = 0; k <= N; k++) { const i = k % N, l = track.RL[i], x = track.X[i] + track.nx(i) * l, z = track.Z[i] + track.nz(i) * l;
    pos.push(x + track.nx(i) * w, .07, z + track.nz(i) * w, x - track.nx(i) * w, .07, z - track.nz(i) * w);
    const dv = track.VP[(i + 18) % N] - track.VP[i], c = dv < -3 ? [1, .15, .12] : track.VP[i] < 86 && dv < 3 ? [1, .8, .1] : [.2, 1, .35]; col.push(...c, ...c);
    if (k < N) { const a = k * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); } }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setIndex(idx);
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: .5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -3, fog: true })); m.renderOrder = 2; return m;
}
const mmBase = $('mmBase'), mmDots = $('mmDots');
function loadTrack(id) {
  if (track && track.id === id) return;
  if (trackGroup) { scene.remove(trackGroup); disposeTree(trackGroup); }
  track = trackCache[id] || (trackCache[id] = new Track(id)); trackGroup = track.build(renderer); scene.add(trackGroup); applyTime(TIMES[track.def.time]);
  scene.environment = ENV[track.def.time];
  lineMesh = buildLine(); trackGroup.add(lineMesh);
  const mm = track.minimap(200), x = mmBase.getContext('2d'); mmBase.width = mmBase.height = mmDots.width = mmDots.height = 200; x.clearRect(0, 0, 200, 200); x.drawImage(mm, 0, 0);
}
let cars = [], player = null, ghost = null;
function newCar(team, isPlayer) {
  const mesh = buildCar(team, isPlayer ? 'soft' : ['soft', 'medium', 'hard'][Math.floor(Math.random() * 3)]); scene.add(mesh);
  return { team, mesh, ai: !isPlayer, isPlayer, s: 0, lat: 0, v: 0, x: 0, z: 0, yaw: 0, idx: -1, lap: 0, prevS: 0, lapStart: 0, last: 0, best: 0, done: false, finishT: 0, cp: new Map(), cpK: -1, lane: 0, laneT: 0, laneTimer: 0,
    drsOpen: false, drsAvail: false, inDrs: false, ers: 1, ersOn: false, slip: false, mistake: 0, react: 0, steerA: 0, latV: 0, wheel: 0, gear: 1, rpm: 4000, pitch: 0, roll: 0, grip: 1, surface: 'road', slideAmt: 0, harvest: false, skill: 1, prog: 0, pos: 0, inval: false, wrong: 0 };
}
function placeCar(c, s, lat) { const o = track.pos(s, lat, {}); c.s = s; c.prevS = s; c.lat = lat; c.x = o.x; c.z = o.z; c.yaw = Math.atan2(o.tx, o.tz); c.idx = track.idx(s); c.v = 0; }
function clearCars() { cars.forEach(c => { scene.remove(c.mesh); c.mesh.traverse(o => { if (o.material && !o.material.vertexColors && o.material.map) o.material.map.dispose(); }); }); cars = []; if (ghost) { scene.remove(ghost.mesh); ghost = null; } }
function setupGrid(demo) {
  clearCars(); const me = TEAMS.find(t => t.id === S.team) || TEAMS[0];
  if (S.mode === 'tt' && !demo) { player = newCar(me, true); cars = [player]; placeCar(player, track.L - 170, track.RL[track.idx(track.L - 170)]); player.v = 55; setupGhost(me); return; }
  const rivals = TEAMS.filter(t => t !== me).map(t => ({ t, q: RATING[t.id] + (Math.random() - .5) * .02 })).sort((a, b) => b.q - a.q).map(o => o.t);
  const slot = demo ? 0 : { pole: 0, mid: 5, back: 9 }[S.grid]; rivals.splice(slot, 0, me);
  const [lo, hi] = DIFF[S.diff];
  rivals.forEach((t, k) => { const c = newCar(t, t === me); if (t === me) player = c;
    c.skill = lerp(lo, hi, (RATING[t.id] - .96) / .04) + (Math.random() - .5) * .01; c.react = .18 + Math.random() * (S.diff === 'rookie' ? .5 : .3);
    placeCar(c, track.L - 12 - k * 9, k % 2 ? -3 : 3); cars.push(c); });
}
function setupGhost(me) {
  ghost = { rec: [], best: null, t: 0, mesh: buildCar(me, 'soft') };
  ghost.mesh.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = .28; o.material.depthWrite = false; o.castShadow = false; } });
  ghost.mesh.visible = false; scene.add(ghost.mesh);
  try { const g = JSON.parse(localStorage.getItem('jkgp-ghost-' + track.id) || 'null'); if (g && g.length) ghost.best = g; } catch (e) {}
}

/* ------------------------------------------------------------------ input */
const keys = {}, touchK = {}; let pad = null;
addEventListener('keydown', e => { if (e.repeat && !['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) return; keys[e.code] = true; Audio.init();
  if (R.phase === 'menu') { if (e.code === 'Enter') startRace(); return; }
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
  if (e.code === 'KeyC') cycleCam(); if (e.code === 'KeyM') $('snd').textContent = Audio.toggle() ? '🔊' : '🔇';
  if (e.code === 'KeyR' && !R.paused && (R.phase === 'race')) respawn();
  if (e.code === 'KeyL') { S.line = !S.line; save(); lineMesh.visible = S.line; showMsg(S.line ? 'RACING LINE ON' : 'RACING LINE OFF', '', 1); }
  if (['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault(); });
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
document.querySelectorAll('[data-k]').forEach(b => { const k = b.dataset.k;
  const on = e => { e.preventDefault(); Audio.init(); touchK[k] = true; b.classList.add('on'); if (k === 'cam') cycleCam(); if (k === 'pause') togglePause(); };
  const off = e => { e.preventDefault(); touchK[k] = false; b.classList.remove('on'); };
  b.addEventListener('pointerdown', on); ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => b.addEventListener(ev, off)); });
function pollPad() { pad = null; const ps = navigator.getGamepads ? navigator.getGamepads() : []; for (const p of ps) if (p && p.connected) { pad = p; break; } }
let padPrev = {};
function readInput() {
  let thr = (keys.KeyW || keys.ArrowUp || touchK.gas) ? 1 : 0, brk = (keys.KeyS || keys.ArrowDown || touchK.brake) ? 1 : 0, st = ((keys.KeyD || keys.ArrowRight || touchK.right) ? 1 : 0) - ((keys.KeyA || keys.ArrowLeft || touchK.left) ? 1 : 0), analog = false;
  let drs = keys.Space || touchK.drs, ers = keys.ShiftLeft || keys.ShiftRight || keys.KeyE || touchK.ers;
  if (pad) { const ax = pad.axes[0] || 0; if (Math.abs(ax) > .08) { st = Math.sign(ax) * ((Math.abs(ax) - .08) / .92) ** 1.4; analog = true; }
    const b = i => pad.buttons[i] ? pad.buttons[i].value : 0; thr = Math.max(thr, b(7)); brk = Math.max(brk, b(6)); drs = drs || b(0) > .5; ers = ers || b(1) > .5 || b(5) > .5;
    const press = i => { const p = b(i) > .5, was = padPrev[i]; padPrev[i] = p; return p && !was; }; if (press(3)) cycleCam(); if (press(9)) togglePause(); }
  return { thr, brk, st, analog, drs, ers };
}

/* ------------------------------------------------------------------ race state */
const R = { phase: 'menu', paused: false, t: 0, lt: 0, lights: 0, hold: 0, order: [], fast: { t: 0, c: null }, finishAt: 0, resultsShown: false, camMode: 'orbit', orbitT: 0, shake: 0, laps: 3 };
const H = 1 / 120;
function dS(a, b) { const L = track.L; return ((b - a) % L + L * 1.5) % L - L / 2; }
function progress(c) { return (c.lap - 1) * track.L + c.s; }
const tmp = {};

function autoDrive(c, pace = 1) { // used for the AI-driven player car after the flag and for steering assist
  const la = c.s + 7 + c.v * .32, o = track.pos(la, track.RL[track.idx(la)] + (c.lane || 0), tmp), want = Math.atan2(o.x - c.x, o.z - c.z), d = angD(want, c.yaw);
  const vt = track.VP[track.idx(c.s + c.v * .22)] * pace; return { st: clamp(-d * 3.2, -1, 1), thr: c.v < vt ? 1 : 0, brk: c.v > vt + 1 ? clamp((c.v - vt) / 5, 0, 1) : 0 };
}
const GEARS = [0, 21, 32, 43, 53, 63, 72, 82, 95];
function stepPlayer(c, h, inp) {
  const i0 = c.idx, loc = track.locate(c.x, c.z, c.idx); c.idx = loc.i; c.s = loc.s; c.lat = loc.lat; const i = loc.i, half = track.W / 2, al = Math.abs(c.lat);
  let surf = 'road'; if (al > half + .3) { if (track.kerb[i] && al < half + 1.6) surf = 'kerb'; else if (track.runoff[i] > 13) surf = 'gravel'; else surf = al < half + 4 ? 'runoff' : 'grass'; }
  c.surface = surf; const gm = { road: 1, kerb: .93, runoff: .9, grass: .55, gravel: .5 }[surf];
  let { thr, brk, st } = inp;
  if (c.auto) { const a = autoDrive(c, c.done ? .82 : 1); thr = a.thr; brk = a.brk; st = a.st; }
  else {
    if (S.brake) { const vt = track.VP[track.idx(c.s + c.v * .18)]; if (c.v > vt * 1.03) { brk = Math.max(brk, clamp((c.v - vt) / 4, .3, 1)); thr = 0; } }
    if (S.steer) { const a = autoDrive(c); st = clamp(st + (a.st - st) * (inp.analog ? .3 : .5), -1, 1); }
  }
  if (R.phase === 'lights') { c.rpm = lerp(c.rpm, 4000 + thr * 8000, 1 - Math.exp(-h * 8)); c.thr = thr; return; }
  // DRS / ERS / slipstream
  c.inDrs = !!track.drs[i]; if (c.inDrs && !track.drs[i0]) c.drsAvail = S.mode === 'tt' || (c.lap >= 2 && gapAhead(c) < 1);
  if (!c.inDrs) c.drsAvail = false;
  if (c.drsAvail && (inp.drs || S.autoDrs || c.auto) && !c.drsOpen && brk < .1) { c.drsOpen = true; Audio.drs(); }
  if (c.drsOpen && (brk > .1 || !c.inDrs)) c.drsOpen = false;
  c.ersOn = !!(inp.ers && c.ers > 0 && thr > .5 && c.v > 8); c.ers = clamp(c.ers + (c.ersOn ? -.14 : 0) * h + (brk * .1 + (thr < .1 ? .025 : .006)) * h, 0, 1); c.harvest = brk > .2 || thr < .1;
  c.slip = slipstream(c);
  // longitudinal
  const vtop = 91 * (c.drsOpen ? 1.055 : 1) * (c.ersOn ? 1.03 : 1) * (c.slip ? 1.025 : 1);
  let a = thr * (14.5 * (1 - (Math.max(0, c.v) / vtop) ** 2) + (c.ersOn ? 2.5 : 0)) - (thr < .05 ? .9 + c.v * c.v * .0006 : 0);
  a -= brk * (18 + .26 * Math.abs(c.v)) * (surf === 'grass' || surf === 'gravel' ? .55 : 1) * Math.sign(c.v || 1);
  if (surf === 'grass') a -= (3 + .025 * c.v * c.v / 10) * Math.sign(c.v); if (surf === 'gravel') a -= (10 + .12 * c.v) * Math.sign(c.v);
  const oldV = c.v; c.v += a * h;
  if (oldV > 0 && c.v < 0 && !(brk && thr < .05 && oldV < .5)) c.v = 0;
  if (c.v <= .3 && brk > .5 && thr < .05) { c.rev = (c.rev || 0) + h; if (c.rev > .4) c.v = Math.max(-6, c.v - 6 * h); } else c.rev = 0;
  c.lockup = brk > .85 && c.v > 25 && !S.brake && Math.random() < .5;
  // steering + grip
  const kb = inp.analog || c.auto ? 1 : (st === 0 ? 9 : 5); c.steerA = c.auto || inp.analog ? st : lerp(c.steerA, st, 1 - Math.exp(-h * kb));
  const v = c.v, maxSt = .42 / (1 + Math.abs(v) / 22), delta = c.steerA * maxSt, want = v * Math.tan(delta) / 3.6, grip = (28 + .0011 * v * v) * gm, maxYaw = grip / Math.max(Math.abs(v), 2);
  const over = Math.abs(want) / maxYaw; c.slideAmt = Math.max(0, over - 1); const yr = clamp(want, -maxYaw * 1.08, maxYaw * 1.08);
  if (c.slideAmt > 0) c.v -= Math.min(c.slideAmt, 1.5) * 7 * h * Math.sign(v);
  c.yaw -= yr * h; c.yawRate = -yr;
  c.x += Math.sin(c.yaw) * c.v * h; c.z += Math.cos(c.yaw) * c.v * h;
  // walls
  const wl = track.wall(i) - 1.05, nx = track.nx(i), nz = track.nz(i);
  if (Math.abs(c.lat) > wl) { const sgn = Math.sign(c.lat), pen = Math.abs(c.lat) - wl; c.x -= nx * sgn * pen; c.z -= nz * sgn * pen;
    const vx = Math.sin(c.yaw) * c.v, vz = Math.cos(c.yaw) * c.v, vn = (vx * nx + vz * nz) * sgn;
    if (vn > 0) { const tx = vx - nx * sgn * vn * 1.3, tz = vz - nz * sgn * vn * 1.3, sp = Math.hypot(tx, tz); c.yaw = Math.atan2(tx, tz); c.v = sp * (vn > 20 ? .55 : .86) * Math.sign(c.v || 1);
      if (c.v < 0) c.yaw += Math.PI, c.v = -c.v;
      if (vn > 3) { hit(c, vn, c.x + nx * sgn, c.z + nz * sgn); } } }
  // gearbox
  const vv = Math.abs(c.v); let g = 1; while (g < 8 && vv > GEARS[g] * .985) g++;
  if (g !== c.gear) { Audio.shift(g > c.gear); c.gear = g; } const lo = GEARS[g - 1], hi = GEARS[g];
  c.rpm = vv < 2 ? 4000 + thr * 3000 : clamp(5200 + 7300 * (vv - lo * .85) / (hi - lo * .85), 4500, 12500); c.thr = thr; c.brk = brk;
  if (Math.abs(c.lat) > half + 2.2 && !c.done) { if (!c.offT) { c.offT = R.t; } if (S.mode === 'tt' && !c.inval && c.lap >= 1) { c.inval = true; showMsg('TRACK LIMITS', 'warn', 1.4, 'Lap invalidated'); } } else c.offT = 0;
  const fwdDot = Math.sin(c.yaw) * track.TX[i] + Math.cos(c.yaw) * track.TZ[i]; c.wrong = fwdDot < -.4 && c.v > 3 ? c.wrong + h : 0; if (c.wrong > 1.2 && !R.wrongShown) { R.wrongShown = true; showMsg('WRONG WAY', 'warn', 1.6, 'Press R to reset'); } if (!c.wrong) R.wrongShown = false;
}
function respawn() { const c = player; const s = c.s, l = track.RL[track.idx(s)]; placeCar(c, s, l); c.v = 0; c.steerA = 0; showMsg('RESET', '', .8); }
function hit(c, vn, x, z) { const big = vn > 14; for (let k = 0; k < (big ? 40 : 14); k++) sparks.emit(x, .3 + Math.random() * .4, z, (Math.random() - .5) * 10, Math.random() * 6, (Math.random() - .5) * 10, .4 + Math.random() * .4, .09, 0, SPARK, 1, .2, 9);
  if (c.isPlayer) { Audio.crash(vn); R.shake = Math.min(1.2, vn * .05); if (big) showMsg('CRASH!', 'warn', 1); } }
function gapAhead(c) { let best = 1e9; for (const o of cars) { if (o === c) continue; const d = progress(o) - progress(c); if (d > 0 && d < best) best = d; } return best / Math.max(c.v, 20); }
function slipstream(c) { if (c.v < 45) return false; for (const o of cars) { if (o === c) continue; const d = dS(c.s, o.s); if (d > 3 && d < 38 && Math.abs(o.lat - c.lat) < 2.2) return true; } return false; }

function stepAI(c, h) {
  if (R.phase === 'lights') { c.rpm = 5000 + Math.random() * 4000; return; }
  if (c.react > 0) { c.react -= h; return; }
  const i = track.idx(c.s); c.inDrs = !!track.drs[i];
  if (c.inDrs && !c.wasDrs) c.drsAvail = c.lap >= 2 && gapAhead(c) < 1; if (!c.inDrs) c.drsAvail = false; c.wasDrs = c.inDrs; c.drsOpen = c.drsAvail;
  c.slip = slipstream(c);
  let rub = 1; if (player && S.diff !== 'legend' && !player.done && S.mode !== 'tt') { const gap = progress(c) - progress(player), k = S.diff === 'rookie' ? 1 : .5; if (gap > 120) rub -= .025 * k; else if (gap < -160) rub += .02 * k; }
  let vt = track.VP[track.idx(c.s + c.v * .12)] * c.skill * rub * (c.drsOpen ? 1.05 : 1) * (c.slip ? 1.02 : 1);
  if (Math.abs(c.lane) > 1.2 && track.VP[i] < 75) vt *= .975;
  if (c.mistake > 0) { c.mistake -= h; vt *= .78; if (Math.random() < .3) smoke.emit(c.x, .25, c.z, 0, .5, 0, 1.2, .7, 2.2, SMOKE, .35, .5); }
  else if (Math.random() < h * (S.diff === 'rookie' ? .012 : S.diff === 'pro' ? .006 : .002) && track.VP[i] < 60 && c.v > 40) c.mistake = .8 + Math.random() * .8;
  // traffic: find nearest car ahead
  let ahead = null, ad = 1e9; for (const o of cars) { if (o === c) continue; const d = dS(c.s, o.s); if (d > 0 && d < ad && Math.abs(o.lat - c.lat) < 2.4) { ad = d; ahead = o; } }
  c.laneTimer -= h; if (c.laneTimer <= 0) { c.laneTimer = .3 + Math.random() * .3;
    if (ahead && ad < 26 && ahead.v < c.v + 2) { const rl = track.RL[i], side = ahead.lat - rl > 0 ? -1 : 1, room = side > 0 ? track.W / 2 - 1.2 - rl : track.W / 2 - 1.2 + rl; c.laneT = side * Math.min(3.4, room); }
    else if (!ahead || ad > 40) c.laneT = 0; }
  if (ahead && ad < 8.5) vt = Math.min(vt, ahead.v - (8.5 - ad) * .8);
  const acc = (13 * (1 - (c.v / 95) ** 2) + 1.5) * (c.skill * c.skill), v0 = c.v; c.v = c.v < vt ? Math.min(vt, c.v + acc * h) : Math.max(vt, c.v - 38 * h); c.v = Math.max(0, c.v);
  c.harvest = c.v < v0 - .01; c.lane += clamp(c.laneT - c.lane, -3.2 * h, 3.2 * h);
  const lim = track.W / 2 - 1.15, tl = clamp(track.RL[i] + c.lane, -lim, lim), ol = c.lat; c.lat += (tl - c.lat) * Math.min(1, h * 2.4); c.latV = (c.lat - ol) / h;
  c.s += c.v * h; if (c.s >= track.L) c.s -= track.L;
  track.pos(c.s, c.lat, tmp); c.x = tmp.x; c.z = tmp.z; c.yaw = Math.atan2(tmp.tx, tmp.tz) + Math.atan2(c.latV, Math.max(c.v, 3));
  c.yawRate = -track.K[i] * c.v; c.steerA = clamp(track.K[i] * 30, -1, 1);
  const vv = c.v; let g = 1; while (g < 8 && vv > GEARS[g] * .985) g++; c.gear = g; c.rpm = clamp(5200 + 7300 * (vv - GEARS[g - 1] * .85) / (GEARS[g] - GEARS[g - 1] * .85), 4500, 12500); c.thr = c.v >= v0 ? 1 : 0;
}
function collide() {
  for (let a = 0; a < cars.length; a++) for (let b = a + 1; b < cars.length; b++) {
    const A = cars[a], B = cars[b], ds = dS(A.s, B.s), dl = B.lat - A.lat; if (Math.abs(ds) > 5.3 || Math.abs(dl) > 1.95) continue;
    const pl = 1.95 - Math.abs(dl), ps = 5.3 - Math.abs(ds), front = ds > 0 ? B : A, back = ds > 0 ? A : B;
    if (pl < ps * .45) { const sg = Math.sign(dl) || 1; shiftLat(A, -sg * pl * .5); shiftLat(B, sg * pl * .5); A.v *= .999; B.v *= .999; if (A.isPlayer || B.isPlayer) { if (!R.touchCd) { Audio.touch(); R.touchCd = .4; R.shake = .25; } } }
    else { const rel = back.v - front.v; if (rel > 0) { back.v -= rel * .6; front.v += rel * .35; } shiftS(back, -ps * .6);
      if (rel > 4) { const x = (A.x + B.x) / 2, z = (A.z + B.z) / 2; for (let k = 0; k < 12; k++) sparks.emit(x, .3, z, (Math.random() - .5) * 8, Math.random() * 4, (Math.random() - .5) * 8, .5, .08, 0, SPARK, 1, .2, 9);
        if (A.isPlayer || B.isPlayer) { Audio.crash(rel); R.shake = Math.min(1, rel * .06); } if (rel > 12 && front.ai) front.mistake = 1.2; } }
  }
}
function shiftLat(c, d) { if (c.ai) { c.lat += d; return; } c.x += track.nx(c.idx) * d; c.z += track.nz(c.idx) * d; }
function shiftS(c, d) { if (c.ai) { c.s = (c.s + d + track.L) % track.L; return; } c.x += track.TX[c.idx] * d; c.z += track.TZ[c.idx] * d; }

function lapLogic(c) {
  const L = track.L, crossedF = c.prevS > L * .75 && c.s < L * .25, crossedB = c.prevS < L * .25 && c.s > L * .75; c.prevS = c.s;
  if (crossedB) { c.lap--; return; }
  if (crossedF) {
    if (c.lap >= 1 && !(c.isPlayer && c.lapsDeleted)) { const lt = R.t - c.lapStart; c.last = lt; const valid = !c.inval;
      if (valid && (!c.best || lt < c.best)) c.best = lt;
      if (valid && S.mode !== 'tt' && (!R.fast.t || lt < R.fast.t)) { R.fast = { t: lt, c }; if (c.isPlayer) { showMsg('FASTEST LAP', 'purple', 2, fmt(lt)); Audio.purple(); } else if (R.t > 5) note(`Fastest lap · ${c.team.code} ${fmt(lt)}`); }
      else if (c.isPlayer) { showMsg(valid ? 'LAP ' + c.lap : 'LAP DELETED', valid ? '' : 'warn', 1.6, fmt(lt)); Audio.lap(); }
      if (c.isPlayer && S.mode === 'tt' && valid) ttLap(lt); }
    c.lap++; c.lapStart = R.t; c.inval = false; c.cpK = -1;
    if (c.isPlayer && ghost) ghost.rec = [];
    if (S.mode !== 'tt' && c.lap > R.laps && !c.done) { c.done = true; c.finishT = R.t; if (c.isPlayer) playerFinish(); }
    else if (c.isPlayer && S.mode !== 'tt' && c.lap === R.laps && R.laps > 1) setTimeout(() => showMsg('FINAL LAP', 'final', 2), 1700);
  }
  if (c.lap >= 1) { const L3 = track.L / 3, sk = c.s < L3 ? 0 : c.s < 2 * L3 ? 1 : 2;
    if (c.sk === undefined) { c.sk = sk; c.secStart = R.t; } else if (sk !== c.sk) { if (sk === (c.sk + 1) % 3) sector(c, c.sk, R.t - c.secStart); c.sk = sk; c.secStart = R.t; } }
  if (c.lap >= 1) { const k = Math.floor(c.s / 100); if (k !== c.cpK) { c.cpK = k; c.cp.set(c.lap * 1000 + k, R.t); c.lastKey = c.lap * 1000 + k; } }
}
function sector(c, k, t) {
  c.bestSec = c.bestSec || []; let col = 'y';
  if (!R.bestSec[k] || t < R.bestSec[k]) { R.bestSec[k] = t; col = 'p'; } else if (!c.bestSec[k] || t < c.bestSec[k]) col = 'g';
  if (!c.bestSec[k] || t < c.bestSec[k]) c.bestSec[k] = t;
  if (c.isPlayer) { if (k === 0) R.sec = [null, null, null]; R.sec[k] = [col, t]; paintSectors(); }
}
function paintSectors() { for (let k = 0; k < 3; k++) { const e = $('s' + (k + 1)), v = R.sec[k]; e.className = v ? v[0] : ''; e.textContent = v ? v[1].toFixed(3) : 'S' + (k + 1); } }
function ttLap(lt) { const prev = bestOf(track.id); if (!prev || lt < prev) { try { localStorage.setItem('jkgp-best-' + track.id, lt.toFixed(3)); } catch (e) {} showMsg('NEW RECORD', 'purple', 2.2, fmt(lt)); Audio.purple();
  if (ghost && ghost.rec.length) { ghost.best = ghost.rec.slice(); try { localStorage.setItem('jkgp-ghost-' + track.id, JSON.stringify(ghost.best.map(v => Math.round(v * 100) / 100))); } catch (e) {} } } }

function step(h) {
  if (R.touchCd > 0) R.touchCd -= h;
  if (R.phase === 'lights') { R.lt += h; const n = Math.min(5, Math.floor(R.lt)); if (n > R.lights) { R.lights = n; Audio.light(); paintLights(); }
    if (R.lt >= 5 + R.hold) { R.phase = 'race'; R.lights = 0; paintLights(); Audio.go(); showMsg('LIGHTS OUT', 'go', 1.4, 'Go go go!'); cars.forEach(c => c.lapStart = 0); } }
  else R.t += h;
  const inp = R.inp || { thr: 0, brk: 0, st: 0 };
  for (const c of cars) { if (c.ai) stepAI(c, h); else stepPlayer(c, h, inp); }
  if (R.phase !== 'lights') { collide(); for (const c of cars) lapLogic(c); }
  if (ghost && R.phase === 'race' && player.lap >= 1) { if (ghost.rec.length === 0) ghost.t = 0; if (ghost.t++ % 6 === 0) ghost.rec.push(player.x, player.z, player.yaw); }
}

/* ------------------------------------------------------------------ flow */
function startRace() {
  Audio.init(); save(); loadTrack(S.track); R.laps = S.mode === 'tt' ? 999 : S.laps;
  setupGrid(false); Object.assign(R, { phase: S.mode === 'tt' ? 'race' : 'lights', paused: false, t: 0, lt: 0, lights: 0, hold: .4 + Math.random() * 1.6, bestSec: [], sec: [null, null, null], lastPos: 0, fast: { t: 0, c: null }, finishAt: 0, resultsShown: false, camMode: S.cam, shake: 0 });
  cars.forEach(c => { c.lap = 0; c.lapStart = 0; }); if (S.mode === 'tt') { player.lap = 0; }
  lineMesh.visible = S.line; buildTower(); document.body.className = 'playing' + (isTouch ? ' touch' : '') + (S.mode === 'tt' ? ' tt' : '');
  $('menu').classList.remove('on'); $('results').classList.remove('on'); $('pause').classList.remove('on'); $('hud').classList.add('on');
  $('lapsTot').textContent = S.mode === 'tt' ? '' : '/' + R.laps; camInit = false; setCockpit();
  if (S.mode === 'tt') showMsg('TIME TRIAL', '', 2, bestOf(track.id) ? 'Record ' + fmt(bestOf(track.id)) : 'Set a lap time'); else showMsg(track.def.name.toUpperCase(), '', 2.4, `${R.laps} lap${R.laps > 1 ? 's' : ''} · ${S.diff.toUpperCase()}`);
  paintLights(); paintSectors(); last = performance.now();
}
function playerFinish() {
  player.auto = true; const pos = order().indexOf(player) + 1; R.finishAt = R.t; stats.races++; if (pos === 1) stats.wins++; if (pos <= 3) stats.podiums++; try { localStorage.setItem('jkgp-stats', JSON.stringify(stats)); } catch (e) {}
  showMsg(pos === 1 ? 'VICTORY!' : 'P' + pos, pos === 1 ? 'purple' : pos <= 3 ? 'go' : '', 3, pos === 1 ? 'You win the ' + track.def.name : pos <= 3 ? 'Podium finish!' : 'Chequered flag'); if (pos <= 3) Audio.win(); else Audio.lap();
  setTimeout(() => { R.camMode = 'orbit'; showResults(); }, 3800);
}
function order() { return cars.slice().sort((a, b) => (a.done && b.done) ? a.finishT - b.finishT : a.done ? -1 : b.done ? 1 : progress(b) - progress(a)); }
function toMenu() {
  R.phase = 'menu'; R.paused = false; Audio.stopLoops(); document.body.className = isTouch ? 'touch' : ''; $('hud').classList.remove('on'); $('results').classList.remove('on'); $('pause').classList.remove('on'); $('menu').classList.add('on');
  loadTrack(S.track); setupGrid(true); R.camMode = 'orbit'; lineMesh.visible = false; setCockpit(); paintMenu();
}
function togglePause(force) { if (R.phase === 'menu' || R.resultsShown) return; R.paused = force !== undefined ? force : !R.paused; $('pause').classList.toggle('on', R.paused); if (R.paused) Audio.stopLoops(); last = performance.now(); }
document.addEventListener('visibilitychange', () => { if (document.hidden && R.phase !== 'menu') togglePause(true); });
function cycleCam() { if (R.phase === 'menu' || R.resultsShown) return; const L = ['chase', 'far', 'tcam', 'cockpit']; S.cam = L[(L.indexOf(S.cam) + 1) % L.length]; R.camMode = S.cam; save(); setCockpit(); camInit = false; showMsg({ chase: 'CHASE CAM', far: 'FAR CHASE', tcam: 'T-CAM', cockpit: 'COCKPIT' }[S.cam], '', .8); }
function setCockpit() { cars.forEach(c => { const u = c.mesh.userData, ck = c.isPlayer && R.camMode === 'cockpit'; u.sw.visible = ck; u.helm.visible = !ck; }); cam.near = R.camMode === 'cockpit' || R.camMode === 'tcam' ? .05 : .25; cam.updateProjectionMatrix(); }

/* ------------------------------------------------------------------ visuals */
const v3 = new THREE.Vector3(), q0 = new THREE.Quaternion();
function updateCars(dt) {
  for (const c of cars) {
    const m = c.mesh, u = m.userData; m.position.set(c.x, 0, c.z); m.rotation.y = c.yaw;
    const accel = c.lastV !== undefined ? (c.v - c.lastV) / Math.max(dt, 1e-3) : 0; c.lastV = c.v;
    c.pitch = lerp(c.pitch, clamp(-accel * .0012, -.025, .02), 1 - Math.exp(-dt * 6)); c.roll = lerp(c.roll, clamp((c.yawRate || 0) * c.v * .0007, -.03, .03), 1 - Math.exp(-dt * 6));
    const bump = c.surface === 'kerb' ? (Math.random() - .5) * .012 : c.surface === 'gravel' || c.surface === 'grass' ? (Math.random() - .5) * .02 : 0;
    u.body.rotation.set(c.pitch, 0, c.roll); u.body.position.y = bump - Math.min(.03, c.v * c.v * .000004);
    c.wheel += c.v * dt / AX.r; u.wheels.forEach(w => w.rotation.x = c.wheel); u.steer.forEach(p => p.rotation.y = -c.steerA * .3);
    u.flap.rotation.x = lerp(u.flap.rotation.x, c.drsOpen ? .06 : .55, 1 - Math.exp(-dt * 14));
    u.glow.emissiveIntensity = c.harvest && c.v > 15 ? (Math.sin(performance.now() * .025) > 0 ? 4 : .3) : .6;
    // effects
    const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), rx = c.x - fx * 1.8, rz = c.z - fz * 1.8;
    if (c.isPlayer) {
      const slide = c.slideAmt > .12 || c.lockup;
      if (slide && c.v > 8 && Math.random() < .9) [1, -1].forEach(s => smoke.emit(rx + fz * .8 * s, .3, rz - fx * .8 * s, (Math.random() - .5) * 2, .6, (Math.random() - .5) * 2, 1.4, .8, 2.4, SMOKE, .3, .5));
      if ((c.surface === 'gravel' || c.surface === 'grass') && c.v > 6) for (let k = 0; k < 2; k++) smoke.emit(rx + (Math.random() - .5) * 1.8, .3, rz, -fx * c.v * .15 + (Math.random() - .5) * 3, 1 + Math.random() * 2, -fz * c.v * .15 + (Math.random() - .5) * 3, 1.3, .9, 2, c.surface === 'gravel' ? DUST : GRASS, .45, .4, 2);
    }
    if (c.v > 72 && Math.random() < dt * (c.isPlayer ? 6 : 2) && Q !== 'low') for (let k = 0; k < 6; k++) sparks.emit(rx + (Math.random() - .5) * .8, .05, rz, -fx * c.v * .5 + (Math.random() - .5) * 4, Math.random() * 2.5, -fz * c.v * .5 + (Math.random() - .5) * 4, .25 + Math.random() * .25, .06, 0, SPARK, 1, .3, 9);
    u.blob.visible = true;
  }
  if (ghost) { const b = ghost.best, gm = ghost.mesh; if (b && R.phase === 'race' && player.lap >= 1 && S.mode === 'tt') { const f = (R.t - player.lapStart) / .05, k = Math.floor(f) * 3;
      if (k + 5 < b.length) { const t = f - Math.floor(f); gm.visible = true; gm.position.set(lerp(b[k], b[k + 3], t), 0, lerp(b[k + 1], b[k + 4], t)); gm.rotation.y = b[k + 2] + angD(b[k + 5], b[k + 2]) * t; if (gm.position.distanceToSquared(player.mesh.position) < 30) gm.visible = false; } else gm.visible = false; } else gm.visible = false; }
}
let camInit = false; const camPos = new THREE.Vector3(), camLook = new THREE.Vector3(); let camYaw = 0;
function updateCamera(dt) {
  const c = player; if (!c) return; let fov = 62;
  if (R.camMode === 'debug') { window.__dbg && window.__dbg(); return; }
  if (R.camMode === 'orbit') { R.orbitT += dt * .12; const r = R.phase === 'menu' ? 7.4 : 11, a = R.orbitT + (R.phase === 'menu' ? 2.4 : 0);
    const tx = c.x + Math.sin(a) * r, tz = c.z + Math.cos(a) * r; if (R.phase === 'menu') { cam.position.set(tx, 1.55 + Math.sin(R.orbitT * .7) * .3, tz); cam.lookAt(c.x, .55, c.z); } else { camPos.lerp(v3.set(tx, 3.2, tz), 1 - Math.exp(-dt * 2)); cam.position.copy(camPos); cam.lookAt(c.x, .6, c.z); } fov = R.phase === 'menu' ? 40 : 50; }
  else if (R.camMode === 'chase' || R.camMode === 'far') {
    const far = R.camMode === 'far', dist = (far ? 9.6 : 6.0) + c.v * .012, hgt = far ? 3.1 : 1.8;
    if (!camInit) { camYaw = c.yaw; camInit = true; } camYaw += angD(c.yaw, camYaw) * (1 - Math.exp(-dt * (far ? 5 : 7)));
    const fx = Math.sin(camYaw), fz = Math.cos(camYaw); cam.position.set(c.x - fx * dist, hgt, c.z - fz * dist); cam.lookAt(c.x + Math.sin(c.yaw) * 5, far ? 1 : .95, c.z + Math.cos(c.yaw) * 5);
    fov = 60 + Math.max(0, c.v) * .16 + (c.ersOn ? 2 : 0);
  } else { const ck = R.camMode === 'cockpit', m = c.mesh; m.updateMatrixWorld(true); const body = m.userData.body;
    v3.set(0, ck ? .9 : 1.22, ck ? -.08 : -.62); body.localToWorld(v3); cam.position.copy(v3); body.getWorldQuaternion(q0); cam.quaternion.copy(q0); cam.rotateY(Math.PI); cam.rotateX(ck ? -.06 : -.1);
    fov = (ck ? 70 : 66) + Math.max(0, c.v) * .1; }
  if (R.shake > 0) { R.shake = Math.max(0, R.shake - dt * 2); const s = R.shake * .12; cam.position.x += (Math.random() - .5) * s; cam.position.y += (Math.random() - .5) * s; }
  if (R.camMode !== 'orbit' && (c.surface === 'kerb' || c.surface === 'gravel') && c.v > 5) { cam.position.y += (Math.random() - .5) * .025; }
  cam.fov = clamp(lerp(cam.fov, fov, 1 - Math.exp(-dt * 4)), 30, 100); cam.updateProjectionMatrix();
  sun.position.set(c.x + sunDir.x * 200, sunDir.y * 200, c.z + sunDir.z * 200); sun.target.position.set(c.x, 0, c.z);
  if (trackGroup) trackGroup.userData.sky.position.set(cam.position.x, 0, cam.position.z);
  const sc = renderer.domElement.height / (2 * Math.tan(cam.fov * Math.PI / 360)); smoke.mat.uniforms.scale.value = sparks.mat.uniforms.scale.value = sc;
}

/* ------------------------------------------------------------------ HUD */
const towerRows = []; let towerT = 0;
function buildTower() { const el = $('tower'); el.innerHTML = ''; towerRows.length = 0;
  cars.forEach(c => { const d = document.createElement('div'); d.className = 'tr' + (c.isPlayer ? ' me' : ''); d.innerHTML = `<b></b><i style="background:${c.team.paint};box-shadow:inset -3px 0 ${c.team.accent}"></i><span>${c.team.code}</span><em></em>`; el.appendChild(d); towerRows.push({ c, d, b: d.children[0], em: d.children[3] }); });
  el.style.height = cars.length * 26 + 'px'; }
function updateTower() {
  const o = order(); R.order = o; const lead = o[0];
  if (player && S.mode !== 'tt' && R.phase === 'race' && R.t > 4 && !player.done) { const p = o.indexOf(player) + 1; if (R.lastPos && p !== R.lastPos) { const up = p < R.lastPos, pw = $('posW'); pw.classList.remove('up', 'dn'); void pw.offsetWidth; pw.classList.add(up ? 'up' : 'dn'); if (up) note('▲ Overtake · P' + p); } R.lastPos = p; }
  o.forEach((c, k) => { c.pos = k + 1; });
  towerRows.forEach(r => { const c = r.c, k = c.pos - 1; r.d.style.transform = `translateY(${k * 26}px)`; r.b.textContent = c.pos;
    let gap = ''; if (S.mode === 'tt') gap = c.best ? fmt(c.best) : '';
    else if (R.phase === 'lights' || R.t < 3) gap = '';
    else if (k === 0) gap = c.done ? 'FINISH' : 'LAP ' + Math.max(1, Math.min(c.lap, R.laps));
    else if (c.done && lead.done) gap = fmtGap(c.finishT - lead.finishT);
    else { const laps = Math.floor((progress(lead) - progress(c)) / track.L); if (laps >= 1) gap = '+' + laps + ' LAP'; else { const t0 = lead.cp.get(c.lastKey), t1 = c.cp.get(c.lastKey); gap = t0 !== undefined && t1 !== undefined ? fmtGap(t1 - t0) : ''; } }
    if (R.fast.c === c && S.mode !== 'tt') r.d.classList.add('fl'); else r.d.classList.remove('fl');
    r.em.textContent = gap; });
}
const rpmEls = [...document.querySelectorAll('#rpm i')]; let lastHud = {};
function setTxt(id, v) { if (lastHud[id] !== v) { lastHud[id] = v; $(id).textContent = v; } }
function updateHUD(dt) {
  const c = player; if (!c || R.phase === 'menu') return;
  towerT -= dt; if (towerT <= 0) { towerT = .2; updateTower(); }
  setTxt('spd', Math.round(Math.abs(c.v) * 3.6)); setTxt('gear', c.v < -.5 ? 'R' : R.phase === 'lights' ? 'N' : c.gear);
  const f = clamp((c.rpm - 5000) / 7300, 0, 1), lim = c.rpm > 12300; rpmEls.forEach((e, k) => { const on = f * rpmEls.length > k; e.className = on ? (lim ? 'b' : k < 5 ? 'g' : k < 10 ? 'r' : 'p') : ''; });
  setLeds(c.mesh, f, lim);
  const pos = c.pos || 1; setTxt('pos', S.mode === 'tt' ? 'TT' : 'P' + pos); setTxt('posOf', S.mode === 'tt' ? '' : '/' + cars.length);
  setTxt('lapN', Math.max(1, Math.min(c.lap, R.laps)));
  $('thrB').style.transform = `scaleY(${(c.thr || 0).toFixed(2)})`; $('brkB').style.transform = `scaleY(${(c.brk || 0).toFixed(2)})`; setTxt('tLap', 'LAP ' + Math.max(1, Math.min(c.lap, R.laps)) + (S.mode === 'tt' ? '' : ' / ' + R.laps));
  setTxt('tCur', c.lap >= 1 && R.phase !== 'lights' ? fmt(R.t - c.lapStart) : fmt(0)); setTxt('tLast', fmt(c.last)); setTxt('tBest', fmt(S.mode === 'tt' ? (bestOf(track.id) || c.best) : c.best));
  $('tCur').classList.toggle('inv', !!c.inval);
  // delta vs ghost (TT)
  if (S.mode === 'tt' && ghost && ghost.best && c.lap >= 1) { const b = ghost.best; let bi = 0, bd = 1e18; const lapT = R.t - c.lapStart, k0 = Math.max(0, Math.floor(lapT / .05) - 60);
    for (let k = k0; k < Math.min(b.length / 3, k0 + 140); k++) { const d = (b[k * 3] - c.x) ** 2 + (b[k * 3 + 1] - c.z) ** 2; if (d < bd) { bd = d; bi = k; } }
    const delta = lapT - bi * .05; setTxt('tDelta', fmtGap(delta)); $('tDelta').className = delta > 0 ? 'up' : 'dn'; } else setTxt('tDelta', '');
  const drsEl = $('drs'); drsEl.className = c.drsOpen ? 'open' : c.drsAvail ? 'avail' : '';
  $('ersBar').style.width = (c.ers * 100).toFixed(1) + '%'; $('ers').classList.toggle('on', c.ersOn); $('slip').classList.toggle('on', !!c.slip);
  $('vig').style.opacity = clamp((c.v - 55) / 50, 0, .9) + (c.ersOn ? .15 : 0);
  // minimap
  const g = mmDots.getContext('2d'); g.clearRect(0, 0, 200, 200);
  for (const o of cars) { if (o === c) continue; const [x, y] = track.toMap(o.x, o.z); g.fillStyle = o.team.paint; g.strokeStyle = o.team.accent; g.lineWidth = 2; g.beginPath(); g.arc(x, y, 4.2, 0, 7); g.fill(); g.stroke(); }
  if (ghost && ghost.mesh.visible) { const [x, y] = track.toMap(ghost.mesh.position.x, ghost.mesh.position.z); g.fillStyle = 'rgba(255,255,255,.45)'; g.beginPath(); g.arc(x, y, 4, 0, 7); g.fill(); }
  const [px, py] = track.toMap(c.x, c.z); g.fillStyle = '#b8f36b'; g.strokeStyle = '#000'; g.lineWidth = 2.5; g.beginPath(); g.arc(px, py, 6, 0, 7); g.fill(); g.stroke();
  // sound
  if (!R.paused && !R.resultsShown) { Audio.engine(c.rpm, c.thr || 0, true); let nd = 1e9, nc = null; for (const o of cars) { if (o === c) continue; const d = Math.hypot(o.x - c.x, o.z - c.z); if (d < nd) { nd = d; nc = o; } }
    if (nc) { const dx = nc.x - c.x, dz = nc.z - c.z, rel = ((c.v * Math.sin(c.yaw) - nc.v * Math.sin(nc.yaw)) * dx + (c.v * Math.cos(c.yaw) - nc.v * Math.cos(nc.yaw)) * dz) / Math.max(nd, 1), side = -(dx * Math.cos(c.yaw) - dz * Math.sin(c.yaw)) / Math.max(nd, 1); Audio.rivals(nd, rel, nc.rpm, side); }
    Audio.surface(c.slideAmt * 3 + (c.lockup ? 1.5 : 0), c.v, c.surface === 'kerb' && c.v > 5); }
}
function paintLights() { document.querySelectorAll('#lights i').forEach((e, k) => e.classList.toggle('on', R.lights > k)); $('lights').classList.toggle('on', R.phase === 'lights'); cars.length && track && track.lights.forEach((m, k) => m.emissiveIntensity = R.phase === 'lights' && R.lights > k ? 6 : 0); }
let msgTimer = 0;
function showMsg(t, cls, dur = 1.5, sub = '') { const m = $('msg'); m.className = 'on' + (cls ? ' m-' + cls : ''); $('msgT').textContent = t; $('msgS').textContent = sub; void m.offsetWidth; m.classList.add('pop'); msgTimer = dur; }
function note(t) { const n = $('note'); n.textContent = t; n.classList.add('on'); clearTimeout(note.tm); note.tm = setTimeout(() => n.classList.remove('on'), 2600); }
function showResults() {
  R.resultsShown = true; Audio.stopLoops(); const o = order(), lead = o[0], me = o.indexOf(player) + 1;
  $('resTitle').textContent = me === 1 ? 'Victory' : 'P' + me + (me <= 3 ? ' · Podium' : ''); $('resSub').textContent = `${track.def.name} · ${R.laps} lap${R.laps > 1 ? 's' : ''} · ${S.diff[0].toUpperCase() + S.diff.slice(1)}`;
  $('resRows').innerHTML = o.map((c, k) => { let t; if (k === 0) t = fmt(c.finishT); else if (c.done) t = fmtGap(c.finishT - lead.finishT); else { const laps = Math.floor((progress(lead) - progress(c)) / track.L + (lead.done ? 0 : 0)); t = laps >= 1 ? '+' + laps + ' lap' + (laps > 1 ? 's' : '') : 'on track'; }
    return `<div class="rr${c.isPlayer ? ' me' : ''}"><b>${k + 1}</b><i style="background:${c.team.paint};box-shadow:inset -4px 0 ${c.team.accent}"></i><span><strong>${c.team.driver}</strong><small>${c.team.name}</small></span><em>${t}</em><em class="${R.fast.c === c ? 'fl' : ''}">${fmt(c.best)}</em><u>${POINTS[k] || 0}</u></div>`; }).join('');
  $('results').classList.add('on');
}
$('resAgain').onclick = () => { Audio.click(); startRace(); }; $('resMenu').onclick = () => { Audio.click(); toMenu(); };
$('pResume').onclick = () => togglePause(false); $('pRestart').onclick = () => startRace(); $('pMenu').onclick = () => toMenu();
$('snd').onclick = () => { Audio.init(); $('snd').textContent = Audio.toggle() ? '🔊' : '🔇'; }; $('snd').textContent = Audio.on ? '🔊' : '🔇';

/* ------------------------------------------------------------------ menu */
function chips(id, opts, key, after) { const el = $(id); el.innerHTML = ''; opts.forEach(([v, label]) => { const b = document.createElement('button'); b.className = 'chip' + (S[key] === v ? ' on' : ''); b.textContent = label;
  b.onclick = () => { Audio.init(); Audio.click(); S[key] = v; save(); [...el.children].forEach(x => x.classList.remove('on')); b.classList.add('on'); after && after(v); }; el.appendChild(b); }); }
function toggles(id, opts) { const el = $(id); el.innerHTML = ''; opts.forEach(([k, label]) => { const b = document.createElement('button'); b.className = 'chip' + (S[k] ? ' on' : ''); b.textContent = label; b.onclick = () => { Audio.init(); Audio.click(); S[k] = !S[k]; save(); b.classList.toggle('on', S[k]); }; el.appendChild(b); }); }
function paintMenu() {
  const tl = $('mTracks'); tl.innerHTML = '';
  Object.entries(TRACKS).forEach(([id, d]) => { const b = document.createElement('button'); b.className = 'tcard' + (S.track === id ? ' on' : ''); const best = bestOf(id);
    b.innerHTML = `<canvas width="88" height="88"></canvas><div><b>${d.name}</b><small>${d.blurb}</small><span>${{ day: 'Day', sunset: 'Sunset', night: 'Night' }[d.time]} · ${best ? 'Record ' + fmt(best) : 'No record yet'}</span></div>`;
    const t = id === (track && track.id) ? track : (trackCache[id] || (trackCache[id] = new Track(id))); b.querySelector('canvas').getContext('2d').drawImage(t.minimap(88), 0, 0);
    b.onclick = () => { if (S.track === id) return; Audio.init(); Audio.click(); S.track = id; save(); $('loading').classList.add('on'); setTimeout(() => { loadTrack(id); setupGrid(true); setCockpit(); $('loading').classList.remove('on'); paintMenu(); }, 30); };
    tl.appendChild(b); });
  chips('mMode', [['race', 'Grand Prix'], ['tt', 'Time Trial']], 'mode', () => $('menu').classList.toggle('tt', S.mode === 'tt'));
  $('menu').classList.toggle('tt', S.mode === 'tt');
  chips('mLaps', [[1, '1'], [3, '3'], [5, '5'], [10, '10']], 'laps'); chips('mDiff', [['rookie', 'Rookie'], ['pro', 'Pro'], ['legend', 'Legend']], 'diff');
  chips('mGrid', [['pole', 'Pole'], ['mid', 'Midfield'], ['back', 'Back row']], 'grid');
  const tm = $('mTeams'); tm.innerHTML = ''; TEAMS.forEach(t => { const b = document.createElement('button'); b.className = 'sw' + (S.team === t.id ? ' on' : ''); b.title = t.name; b.style.background = `linear-gradient(135deg,${t.paint} 0 55%,${t.accent} 55%)`;
    b.onclick = () => { Audio.init(); Audio.click(); S.team = t.id; save(); [...tm.children].forEach(x => x.classList.remove('on')); b.classList.add('on'); paintTeam(); setupGrid(true); setCockpit(); }; tm.appendChild(b); }); paintTeam();
  toggles('mAssist', [['line', 'Racing line'], ['brake', 'Brake assist'], ['steer', 'Steer assist'], ['autoDrs', 'Auto DRS']]);
  chips('mCam', [['chase', 'Chase'], ['far', 'Far'], ['tcam', 'T-Cam'], ['cockpit', 'Cockpit']], 'cam');
  chips('mQual', [['auto', 'Auto'], ['high', 'High'], ['medium', 'Medium'], ['low', 'Low']], 'quality', () => location.reload());
  $('mStats').innerHTML = `<span>Races <b>${stats.races}</b></span><span>Wins <b>${stats.wins}</b></span><span>Podiums <b>${stats.podiums}</b></span>`;
}
function paintTeam() { const t = TEAMS.find(x => x.id === S.team) || TEAMS[0]; $('mTeamName').innerHTML = `<b>#${t.num} ${t.driver}</b> · ${t.name}`; }
$('go').onclick = () => { Audio.init(); Audio.click(); startRace(); };

/* ------------------------------------------------------------------ loop */
let last = performance.now(), acc = 0, fpsT = 0, fpsN = 0;
function frame(now) {
  requestAnimationFrame(frame); const dt = clamp((now - last) / 1000, 0, .05); last = Math.max(last, now);
  pollPad(); R.inp = readInput();
  if (R.phase !== 'menu' && !R.paused) { acc += dt; let n = 0; while (acc >= H && n < 12) { step(H); acc -= H; n++; } if (n >= 12) acc = 0; }
  if (R.phase === 'menu') { player && (player.v = 0); }
  if (!R.paused) { updateCars(R.phase === 'menu' ? 0 : dt); smoke.update(dt); sparks.update(dt); }
  updateCamera(dt); updateHUD(dt);
  if (msgTimer > 0) { msgTimer -= dt; if (msgTimer <= 0) $('msg').className = ''; }
  if (R.resultsShown && R.phase !== 'menu') { if (Math.random() < .05) showResultsLive(); }
  if (composer && !window.__direct) composer.render(); else renderer.render(scene, cam);
  // adaptive resolution
  fpsT += dt; fpsN++; if (fpsT > 2) { const fps = fpsN / fpsT; fpsT = 0; fpsN = 0; const ps = prScale; if (fps < 42 && prScale > .6) prScale = Math.max(.6, prScale - .1); else if (fps > 57 && prScale < 1) prScale = Math.min(1, prScale + .05); if (ps !== prScale) resize(); }
}
function showResultsLive() { if ($('results').classList.contains('on')) showResults(); }

// boot
loadTrack(S.track); setupGrid(true); setCockpit(); paintMenu(); R.camMode = 'orbit';
renderer.compile(scene, cam); $('menu').classList.add('on'); $('loading').classList.remove('on'); requestAnimationFrame(frame);
window.__gp = { S, R, get cars() { return cars; }, get player() { return player; }, get track() { return track; }, step, startRace, toMenu, cam, renderer, keys, order, showResults };
