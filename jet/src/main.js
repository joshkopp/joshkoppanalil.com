import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Terrain, sky, clouds, ARENA } from './terrain.js';
import { JETS, PAINTS, buildJet, buildBomber, missileMesh, warmUp } from './jetmodel.js';
import { buildBase, buildUnit } from './ground.js';
import { Particles, Tracers, Sound } from './fx.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t, rand = (a, b) => a + Math.random() * (b - a), pick = a => a[Math.floor(Math.random() * a.length)];
const V = () => new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0);
const TOUCH = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window; if (TOUCH) document.body.classList.add('touchui');

/* ======================================================= renderer & world */
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
const S0 = store.get('jkstrike-set', {}), QUAL = { auto: { max: TOUCH ? 1.25 : 1.5, shadow: TOUCH ? 1024 : 2048, density: TOUCH ? .7 : 1 }, high: { max: 2, shadow: 2048, density: 1 }, medium: { max: 1.15, shadow: 1024, density: .8 }, low: { max: .8, shadow: 0, density: .55 } };
const Q0 = QUAL[S0.quality] || QUAL.auto; let PR = Math.min(devicePixelRatio || 1, Q0.max); renderer.setPixelRatio(PR);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05; renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.enabled = Q0.shadow > 0; renderer.shadowMap.type = THREE.PCFShadowMap;
const scene = new THREE.Scene(); const FOG = new THREE.Fog('#dcc8a6', 1800, 11000); scene.fog = FOG; scene.background = new THREE.Color('#dcc8a6');
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture; scene.environmentIntensity = .55;
const cam = new THREE.PerspectiveCamera(70, 1, .1, 30000); scene.add(cam);
const sunDir = new THREE.Vector3(-.55, .62, -.45).normalize();
const sun = new THREE.DirectionalLight('#fff0d8', 3.1); sun.castShadow = true; sun.shadow.mapSize.set(Q0.shadow || 512, Q0.shadow || 512);
Object.assign(sun.shadow.camera, { left: -120, right: 120, top: 120, bottom: -120, near: 10, far: 2400 }); sun.shadow.bias = -.0005; sun.shadow.normalBias = .5;
scene.add(sun, sun.target, new THREE.HemisphereLight('#bcd6f2', '#c79a68', 1.0));
const terrain = new Terrain(); scene.add(terrain.mesh(renderer)); scene.add(terrain.rocks());
const base = buildBase(); scene.add(base);
const skyDome = sky(sunDir); scene.add(skyDome); const cloudPts = clouds(); scene.add(cloudPts);
const smoke = new Particles(2200, false), fire = new Particles(1500, true), trails = new Particles(2400, false); scene.add(smoke.points, fire.points, trails.points);
[smoke, fire, trails].forEach(p => p.density = Q0.density);
const flashes = Array.from({ length: 3 }, () => { const l = new THREE.PointLight('#ffb060', 0, 900, 2); scene.add(l); return { l, t: 0 }; }); let flashI = 0;
const tracers = new Tracers(600); scene.add(tracers.mesh);

/* ======================================================= settings & state */
const S = { jet: 'viper', paint: 'gray', diff: 'normal', view: 'third', control: TOUCH ? 'stick' : 'aim', sens: 'mid', invert: false, assist: true, quality: 'auto', ...S0 };
if (!JETS[S.jet]) S.jet = 'viper'; if (TOUCH) S.control = 'stick';
const saveS = () => store.set('jkstrike-set', S);
const DIFF = { easy: { turn: .7, acc: .4, msl: 28, dmg: .55, name: 'Rookie' }, normal: { turn: .92, acc: .58, msl: 19, dmg: .9, name: 'Pilot' }, ace: { turn: 1.15, acc: .9, msl: 12, dmg: 1.3, name: 'Ace' } };
const KIND = {
  fighter: { hp: 100, pts: 100, label: '' }, ace: { hp: 190, pts: 250, label: 'ACE' }, bomber: { hp: 420, pts: 300, label: 'BOMBER' }, boss: { hp: 2200, pts: 1500, label: 'GUNSHIP' },
  sam: { hp: 160, pts: 150, label: 'SAM' }, aa: { hp: 90, pts: 100, label: 'AAA' },
};
const PERKS = [
  ['gun', '🔥', 'Heavy Rounds', '+30% gun damage'], ['lock', '🎯', 'Rapid Lock', 'Missile lock 45% faster'], ['pylon', '🚀', 'Extra Pylons', '+3 missiles and faster reloads'],
  ['hull', '🛡', 'Reinforced Hull', '+35 max hull, fully repaired'], ['flare', '✨', 'Flare Pods', '+6 flares, recharge twice as fast'], ['engine', '⚡', 'Hot Engines', '+12% top speed'],
  ['agile', '🌀', 'Tight Turns', '+15% turn rate'], ['cool', '❄️', 'Cooled Barrels', 'Gun heats 40% slower'], ['seeker', '🧠', 'Smart Seekers', 'Missiles turn 35% harder'],
  ['regen', '💚', 'Field Repair', 'Hull regenerates 3× faster'], ['scav', '🦅', 'Scavenger', 'Each kill repairs 8 hull'], ['salvo', '🎆', 'Salvo', 'Fire two missiles at once'],
];
let G = { mode: 'menu' }, P = null, enemies = [], missiles = [], flares = [], kills = [], events = [];
const C_FRIEND = new THREE.Color('#ffd27a'), C_FOE = new THREE.Color('#ff6a4a'), C_FLAK = new THREE.Color('#ff9c3a');

/* ======================================================= input */
const keys = {}, mouse = { x: 0, y: 0, l: false, moved: false }, touch = { x: 0, y: 0, gun: false, ab: false, brake: false };
const aim = { yaw: 0, pitch: 0, dir: new THREE.Vector3(0, 0, -1), locked: false };
const SENS = { low: .0014, mid: .0022, high: .0032 };
addEventListener('keydown', e => {
  if (e.target.matches('input')) return; keys[e.code] = true; Sound.init();
  if (G.mode === 'perk' && /Digit[123]/.test(e.code)) { choosePerk(+e.code.slice(5) - 1); return; }
  if (G.mode === 'play' || G.mode === 'paused') {
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    if (e.repeat) return;
    if (e.code === 'Escape' || e.code === 'KeyP') { if (G.mode === 'play' && !aim.locked) pause(); else if (G.mode === 'paused') pause(); return; }
    if (G.mode !== 'play') return;
    if (e.code === 'Space') fireMissile(); if (e.code === 'KeyF' || e.code === 'KeyX') dropFlares(); if (e.code === 'KeyV' || e.code === 'KeyC') toggleView(); if (e.code === 'KeyT') cycleTarget(); if (e.code === 'KeyM') muteT();
  }
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; mouse.l = false; });
addEventListener('mousemove', e => {
  mouse.x = (e.clientX / innerWidth - .5) * 2; mouse.y = (e.clientY / innerHeight - .5) * 2; mouse.moved = true;
  if (G.mode === 'play' && S.control === 'aim' && (aim.locked || document.pointerLockElement)) { const s = SENS[S.sens] || SENS.mid; aim.yaw -= e.movementX * s; aim.pitch = clamp(aim.pitch - e.movementY * s * (S.invert ? -1 : 1), -1.45, 1.45); }
});
canvas.addEventListener('mousedown', e => {
  Sound.init(); if (G.mode !== 'play') return;
  if (S.control === 'aim' && !document.pointerLockElement) { lockPointer(); return; }
  if (e.button === 0) mouse.l = true; if (e.button === 2) fireMissile();
});
addEventListener('mouseup', e => { if (e.button === 0) mouse.l = false; });
addEventListener('contextmenu', e => { if (G.mode === 'play') e.preventDefault(); });
function lockPointer() { try { const r = canvas.requestPointerLock({ unadjustedMovement: true }); if (r && r.catch) r.catch(() => { try { canvas.requestPointerLock(); } catch (e) {} }); } catch (e) { try { canvas.requestPointerLock(); } catch (e2) {} } }
document.addEventListener('pointerlockerror', () => { if (G.mode === 'play' && S.control === 'aim') $('#clickfly').classList.add('on'); });
document.addEventListener('pointerlockchange', () => { aim.locked = !!document.pointerLockElement; $('#clickfly').classList.toggle('on', G.mode === 'play' && S.control === 'aim' && !aim.locked); if (!aim.locked && G.mode === 'play' && S.control === 'aim') pause(); });
const k = (...c) => c.some(x => keys[x]);
function readInput() {
  const inv = S.invert ? -1 : 1;
  const kp = ((k('KeyS', 'ArrowDown') ? 1 : 0) - (k('KeyW', 'ArrowUp') ? 1 : 0)) * inv, kr = (k('KeyD', 'ArrowRight') ? 1 : 0) - (k('KeyA', 'ArrowLeft') ? 1 : 0), ky = (k('KeyQ') ? 1 : 0) - (k('KeyE') ? 1 : 0);
  let pitch = kp, roll = kr, yaw = ky, manual = !!(kp || kr || ky);
  if (TOUCH || S.control === 'stick') { if (TOUCH) { pitch += -touch.y * inv; roll += touch.x; manual = true; }
    else if (mouse.moved) { const dz = v => Math.abs(v) < .06 ? 0 : (v - Math.sign(v) * .06) / .94; pitch += clamp(-dz(mouse.y) * 1.9, -1, 1) * inv; roll += clamp(dz(mouse.x) * 1.9, -1, 1); manual = true; } }
  return { pitch: clamp(pitch, -1, 1), roll: clamp(roll, -1, 1), yaw, manual, gun: mouse.l || k('KeyJ', 'Enter') || touch.gun, ab: k('ShiftLeft', 'ShiftRight') || touch.ab, brake: k('KeyB') || touch.brake };
}
{
  const stick = $('#stick'), knob = $('#knob'); let sid = null, cx = 0, cy = 0;
  stick.addEventListener('pointerdown', e => { sid = e.pointerId; const r = stick.getBoundingClientRect(); cx = r.left + r.width / 2; cy = r.top + r.height / 2; stick.setPointerCapture(sid); mv(e); Sound.init(); });
  const mv = e => { if (e.pointerId !== sid) return; const R = 60; let dx = (e.clientX - cx) / R, dy = (e.clientY - cy) / R; const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; } touch.x = dx; touch.y = dy; knob.style.transform = `translate(${dx * R}px,${dy * R}px)`; };
  stick.addEventListener('pointermove', mv); const up = e => { if (e.pointerId !== sid) return; sid = null; touch.x = touch.y = 0; knob.style.transform = ''; };
  stick.addEventListener('pointerup', up); stick.addEventListener('pointercancel', up);
  $$('#touch [data-b]').forEach(b => { const n = b.dataset.b, set = v => e => { e.preventDefault(); b.classList.toggle('down', v); if (n === 'gun' || n === 'ab' || n === 'brake') touch[n] = v; else if (v) { Sound.init(); if (n === 'msl') fireMissile(); if (n === 'flr') dropFlares(); if (n === 'cam') toggleView(); } };
    b.addEventListener('pointerdown', set(true)); b.addEventListener('pointerup', set(false)); b.addEventListener('pointercancel', set(false)); b.addEventListener('pointerleave', set(false)); });
  $('#tPause').onclick = () => pause();
  $('#clickfly').onclick = () => { lockPointer(); };
}

/* ======================================================= cockpit */
const cockpit = new THREE.Group(); cam.add(cockpit); cockpit.visible = false;
{
  const frame = new THREE.MeshStandardMaterial({ color: '#202327', roughness: .6, metalness: .4 });
  const dash = new THREE.Mesh(new THREE.BoxGeometry(2.6, .62, .9), new THREE.MeshStandardMaterial({ color: '#1a1c1f', roughness: .85 })); dash.position.set(0, -.92, -1.25); cockpit.add(dash);
  const lip = new THREE.Mesh(new THREE.BoxGeometry(2.6, .05, .2), frame); lip.position.set(0, -.56, -.82); cockpit.add(lip);
  const mfd = x => { const c = document.createElement('canvas'); c.width = 128; c.height = 96; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(.42, .31), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.position.set(x, -.66, -.77); m.rotation.x = -.15; cockpit.add(m); return { c, g: c.getContext('2d'), t }; };
  cockpit.userData.mfds = [mfd(-.55), mfd(.55)];
  const comb = new THREE.Mesh(new THREE.PlaneGeometry(.5, .36), new THREE.MeshBasicMaterial({ color: '#b8f36b', transparent: true, opacity: .06, depthWrite: false })); comb.position.set(0, -.3, -.9); comb.rotation.x = -.2; cockpit.add(comb);
  const combF = new THREE.Mesh(new THREE.BoxGeometry(.52, .025, .025), frame); combF.position.set(0, -.49, -.88); cockpit.add(combF);
  [[-1.35, .1, -1.1, .08, 2.2, .1, .42], [1.35, .1, -1.1, .08, 2.2, .1, -.42]].forEach(([x, y, z, w, h, d, rz]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frame); b.position.set(x, y, z); b.rotation.z = rz; cockpit.add(b); });
  const stickM = new THREE.Mesh(new THREE.CylinderGeometry(.04, .05, .5, 8), frame); stickM.position.set(.32, -.98, -.55); stickM.rotation.x = .3; cockpit.add(stickM); cockpit.userData.stick = stickM;
}

/* ======================================================= player */
let menuJet = null;
const fwdOf = (q, out = V()) => out.set(0, 0, -1).applyQuaternion(q), upOf = (q, out = V()) => out.set(0, 1, 0).applyQuaternion(q), rightOf = (q, out = V()) => out.set(1, 0, 0).applyQuaternion(q);
function makePlayer() {
  if (P && P.obj) scene.remove(P.obj);
  const obj = buildJet(S.jet, S.paint); scene.add(obj); const J = JETS[S.jet];
  return { obj, J, pos: new THREE.Vector3(-2600, 700, 300), q: new THREE.Quaternion(), vel: V(), speed: 240, thr: .65, hp: J.hp, maxHp: J.hp, msl: J.missiles, mslMax: J.missiles, mslT: 0, mslCd: 0, side: 1,
    flares: 12, flareMax: 12, flareT: 0, flareCd: 0, heat: 0, over: false, gunCd: 0, gunSide: 1, rate: V(), alive: true, lock: { t: null, k: 0, locked: false, tick: 0 }, ab: false, hitFlash: 0, warnT: 0, pullT: 0, shake: 0,
    camQ: new THREE.Quaternion(), deadT: 0, lastHit: 0, perks: [], m: { gun: 1, lock: 1, reload: 1, flare: 1, speed: 1, agile: 1, heat: 1, seeker: 1, regen: 1, scav: 0, salvo: 1 } };
}
function syncAim() { const f = fwdOf(P.q); aim.pitch = Math.asin(clamp(f.y, -1, 1)); aim.yaw = Math.atan2(-f.x, -f.z); }
function aimDir() { const cp = Math.cos(aim.pitch); return aim.dir.set(-Math.sin(aim.yaw) * cp, Math.sin(aim.pitch), -Math.cos(aim.yaw) * cp); }

/* ======================================================= spawning */
function addEnemy(kind, pos, look) {
  const D = DIFF[S.diff], cyc = G.cycle, air = !['sam', 'aa'].includes(kind);
  const obj = kind === 'bomber' ? buildBomber(false) : kind === 'boss' ? buildBomber(true) : air ? buildJet(kind === 'ace' ? 'raptor' : pick(['viper', 'striker', 'viper']), 'red', true) : buildUnit(kind);
  scene.add(obj); obj.userData.msls.forEach(m => m.visible = false);
  const q = new THREE.Quaternion(); if (look) q.setFromRotationMatrix(new THREE.Matrix4().lookAt(pos, look, UP));
  const hp = KIND[kind].hp * (1 + cyc * .3) * (S.diff === 'easy' ? .8 : 1);
  const e = { kind, air, obj, pos: pos.clone(), q, vel: V(), speed: kind === 'boss' ? 150 : kind === 'bomber' ? 175 : 250, hp, maxHp: hp, state: kind === 'bomber' || kind === 'boss' ? 'run' : 'hunt', st: 0, gunCd: rand(1, 3), burst: 0,
    mslT: rand(6, D.msl) * (kind === 'ace' ? .6 : 1), cd: rand(3, 7), evadeDir: V(), dead: false, deadT: 0, spin: rand(-2, 2), id: Math.random(), hitT: 0, wp: V(), gunT: [0, 0, 0] };
  obj.position.copy(e.pos); obj.quaternion.copy(q); enemies.push(e); return e;
}
function ringPos(center, dmin, dmax, ymin, ymax) { const a = rand(0, Math.PI * 2), d = rand(dmin, dmax); const p = new THREE.Vector3(center.x + Math.cos(a) * d, 0, center.z + Math.sin(a) * d);
  p.x = clamp(p.x, -ARENA + 300, ARENA - 300); p.z = clamp(p.z, -ARENA + 300, ARENA - 300); p.y = Math.max(terrain.height(p.x, p.z) + 400, rand(ymin, ymax)); return p; }
function waveSpec(w) {
  const c = Math.floor((w - 1) / 5), m = (w - 1) % 5;
  return [
    { name: 'DOGFIGHT', obj: 'Clear the skies of enemy fighters', fighter: 2 + c * 2 + (w > 1 ? 1 : 0) },
    { name: 'INTERCEPT', obj: 'Bombers are heading for the base. Stop them!', bomber: 1 + c, fighter: 1 + c },
    { name: 'STRIKE', obj: 'Destroy the SAM site. Watch for flak and missiles', sam: 2 + c, aa: 2 + c, fighter: c + 1 },
    { name: 'ACE SQUADRON', obj: 'Elite pilots inbound. They fly better than you think', ace: 1 + c, fighter: 2 + c },
    { name: 'BOSS', obj: 'A heavy gunship is attacking. Bring it down!', boss: 1, fighter: 2 + c, ace: c },
  ][m];
}
function spawnWave(w) {
  G.cycle = Math.floor((w - 1) / 5); const sp = waveSpec(w); G.spec = sp; const fwd = fwdOf(P.q); fwd.y = 0; fwd.normalize();
  const ahead = P.pos.clone().addScaledVector(fwd, 3000);
  for (let i = 0; i < (sp.fighter || 0); i++) addEnemy('fighter', ringPos(ahead, 0, 900, 700, 1700), P.pos);
  for (let i = 0; i < (sp.ace || 0); i++) addEnemy('ace', ringPos(ahead, 300, 1200, 900, 1900), P.pos);
  for (let i = 0; i < (sp.bomber || 0); i++) { const p = ringPos(new THREE.Vector3(), 3900, 4300, 850, 950); p.y = Math.max(p.y, 850 + i * 60); addEnemy('bomber', p, new THREE.Vector3(0, p.y, 0)); }
  if (sp.boss) { const p = ringPos(new THREE.Vector3(), 3700, 4000, 1150, 1200); addEnemy('boss', p, new THREE.Vector3(0, p.y, 0)); }
  if (sp.sam || sp.aa) {
    const a = rand(0, Math.PI * 2), zone = new THREE.Vector3(Math.cos(a) * 2700, 0, Math.sin(a) * 2700); G.zone = zone;
    const place = kind => { const p = zone.clone().add(new THREE.Vector3(rand(-380, 380), 0, rand(-380, 380))); p.y = terrain.height(p.x, p.z) + .5; const e = addEnemy(kind, p); e.obj.rotation.y = rand(0, 6); e.q.copy(e.obj.quaternion); return e; };
    for (let i = 0; i < (sp.sam || 0); i++) place('sam'); for (let i = 0; i < (sp.aa || 0); i++) place('aa');
  } else G.zone = null;
}

/* ======================================================= AI */
const tq = new THREE.Quaternion(), tm = new THREE.Matrix4(), tv1 = V(), tv2 = V(), tv3 = V(), ZERO = V();
function steer(e, desired, turn, bankK = 2.5) { const f = fwdOf(e.q, tv1), side = tv2.copy(desired).addScaledVector(f, -desired.dot(f)), bankUp = tv3.copy(UP).addScaledVector(side, bankK).normalize();
  tq.setFromRotationMatrix(tm.lookAt(ZERO, desired, bankUp)); e.q.rotateTowards(tq, turn); }
function enemyAI(e, dt) {
  const D = DIFF[S.diff], toP = P.pos.clone().sub(e.pos), dist = toP.length(), cyc = G.cycle, acc = clamp(D.acc + cyc * .08 + (e.kind === 'ace' ? .2 : 0), 0, 1);
  e.hitT = Math.max(0, e.hitT - dt);
  if (e.dead) {
    if (!e.air) { e.remove = true; return; }
    e.deadT += dt; e.q.multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(-.5 * dt, 0, e.spin * dt))); e.speed = Math.min(320, e.speed + 30 * dt);
    e.pos.addScaledVector(fwdOf(e.q), e.speed * dt); e.pos.y -= (40 + e.deadT * 60) * dt;
    if (Math.random() < .9) { fire.emit(e.pos.x, e.pos.y, e.pos.z, { size: 9, life: .6, color: [1, .55, .2], alpha: .9, spread: 6, grow: 1 }); smoke.emit(e.pos.x, e.pos.y, e.pos.z, { size: 10, life: 4, color: [.18, .16, .15], alpha: .7, spread: 4, grow: 1.8, rise: 4 }); }
    if (e.pos.y < terrain.height(e.pos.x, e.pos.z) + 5 || e.deadT > 6) { explode(e.pos, e.kind === 'boss' ? 3 : e.kind === 'bomber' ? 2 : 1.4); e.remove = true; }
    return;
  }
  if (!e.air) return groundAI(e, dt, toP, dist, acc);
  if (e.kind === 'bomber' || e.kind === 'boss') return bomberAI(e, dt, toP, dist, acc);
  const f = fwdOf(e.q); let desired;
  const ahead = e.pos.clone().addScaledVector(f, 600), clear = Math.min(e.pos.y - terrain.height(e.pos.x, e.pos.z), ahead.y - terrain.height(ahead.x, ahead.z)), hz = Math.hypot(e.pos.x, e.pos.z);
  e.st -= dt;
  if (clear < 280) desired = f.clone().setY(0).normalize().setY(1.2).normalize();
  else if (hz > ARENA - 300) desired = new THREE.Vector3(-e.pos.x, 0, -e.pos.z).normalize().setY(.1).normalize();
  else if (e.state === 'evade' && e.st > 0) desired = e.evadeDir;
  else {
    e.state = 'hunt'; const lead = P.pos.clone().addScaledVector(P.vel, clamp(dist / 1100, 0, 2) * acc);
    desired = lead.sub(e.pos).normalize();
    if (dist < 220 && f.dot(toP) / dist > .3) { e.state = 'evade'; e.st = 2; e.evadeDir = new THREE.Vector3(rand(-1, 1), rand(.2, .6), rand(-1, 1)).normalize(); }
    if (dist > 2400) desired.y = clamp(desired.y, -.3, .4);
  }
  if (P.lock.locked && P.lock.t === e && e.state !== 'evade' && Math.random() < dt * (e.kind === 'ace' ? .7 : .25) * (S.diff === 'easy' ? .4 : 1)) { e.state = 'evade'; e.st = rand(1.6, 3); e.evadeDir = rightOf(e.q).multiplyScalar(Math.random() < .5 ? 1 : -1).addScaledVector(UP, rand(-.3, .4)).normalize(); }
  steer(e, desired, D.turn * (1 + cyc * .08) * (e.kind === 'ace' ? 1.25 : 1) * (e.state === 'evade' ? 1.3 : 1) * dt);
  const tvv = (dist > 1600 ? 300 : 245) * (e.state === 'evade' ? 1.15 : 1) * (e.kind === 'ace' ? 1.08 : 1); e.speed = lerp(e.speed, tvv, dt * .4);
  fwdOf(e.q, f); e.vel.copy(f).multiplyScalar(e.speed); e.pos.addScaledVector(e.vel, dt);
  if (e.hp < e.maxHp * .5 && Math.random() < .6) smoke.emit(e.pos.x, e.pos.y, e.pos.z, { size: 5, life: 2.5, color: [.25, .24, .23], alpha: .45, spread: 2, grow: 1.4 });
  e.gunCd -= dt; const ang = f.angleTo(toP);
  if (P.alive && dist < 1150 && ang < .05 + (1 - acc) * .04 && e.gunCd <= 0) { e.burst = 6 + Math.floor(Math.random() * 6); e.gunCd = rand(1.4, 2.8) / (1 + cyc * .1); }
  if (e.burst > 0 && (e.bt = (e.bt || 0) - dt) <= 0) { e.bt = .07; e.burst--; const sp = (1 - acc) * .05 + .006, d = f.clone().add(new THREE.Vector3(rand(-sp, sp), rand(-sp, sp), rand(-sp, sp))).normalize();
    tracers.add(e.pos.clone().addScaledVector(f, 10), d.multiplyScalar(1050).add(e.vel), 'e', 4 * D.dmg, C_FOE); if (dist < 1500) Sound.gun(); }
  e.mslT -= dt;
  if (P.alive && e.mslT <= 0 && dist > 600 && dist < 2800 && ang < .45 && enemyMissiles() < 2 + (S.diff === 'ace' ? 1 : 0)) { e.mslT = rand(D.msl * .8, D.msl * 1.3) / (1 + cyc * .1) * (e.kind === 'ace' ? .7 : 1); launch(e, P, 'e'); }
}
const enemyMissiles = () => missiles.filter(m => m.owner === 'e').length;
function bomberAI(e, dt, toP, dist, acc) {
  const D = DIFF[S.diff], boss = e.kind === 'boss', f = fwdOf(e.q), alt = boss ? 1150 : 880; let desired;
  e.st -= dt;
  if (e.state === 'run') { desired = new THREE.Vector3(-e.pos.x, (alt - e.pos.y) * .002, -e.pos.z).normalize(); if (Math.hypot(e.pos.x, e.pos.z) < 380) { bombRun(e); e.state = 'egress'; e.wp.copy(e.pos).addScaledVector(f.clone().setY(0).normalize(), 2600); e.wp.x = clamp(e.wp.x, -ARENA + 500, ARENA - 500); e.wp.z = clamp(e.wp.z, -ARENA + 500, ARENA - 500); e.st = 16; } }
  else { desired = new THREE.Vector3(e.wp.x - e.pos.x, (alt - e.pos.y) * .002, e.wp.z - e.pos.z).normalize(); if (e.st <= 0 || Math.hypot(e.wp.x - e.pos.x, e.wp.z - e.pos.z) < 400) e.state = 'run'; }
  steer(e, desired, (boss ? .28 : .34) * dt, 1.2); e.vel.copy(fwdOf(e.q, f)).multiplyScalar(e.speed); e.pos.addScaledVector(e.vel, dt);
  if (e.hp < e.maxHp * .5 && Math.random() < .8) smoke.emit(e.pos.x, e.pos.y, e.pos.z, { size: 9, life: 3, color: [.22, .2, .2], alpha: .5, spread: 4, grow: 1.6 });
  // defensive gunners
  if (P.alive && dist < (boss ? 1300 : 1000)) e.obj.userData.guns.forEach((g, i) => { e.gunT[i] -= dt; if (e.gunT[i] > 0) return; e.gunT[i] = rand(.09, .14) * (boss ? .8 : 1); if (Math.random() < .35) return;
    const o = tv1.set(...g).applyQuaternion(e.q).add(e.pos), lead = P.pos.clone().addScaledVector(P.vel, dist / 1000 * acc), sp = (1 - acc) * .06 + .015;
    const d = lead.sub(o).normalize().add(new THREE.Vector3(rand(-sp, sp), rand(-sp, sp), rand(-sp, sp))).normalize(); tracers.add(o.clone(), d.multiplyScalar(1000).add(e.vel), 'e', 3 * D.dmg, C_FOE); if (dist < 900 && Math.random() < .3) Sound.gun(); });
  if (boss) { e.mslT -= dt; if (P.alive && e.mslT <= 0 && dist < 3200 && enemyMissiles() < 3) { e.mslT = rand(7, 10); launch(e, P, 'e'); } }
}
function bombRun(e) {
  const boss = e.kind === 'boss', dmg = boss ? 28 : 17; G.baseHp = Math.max(0, G.baseHp - dmg); kill(boss ? 'GUNSHIP HIT THE BASE!' : 'BASE HIT BY BOMBER!', true); flashBase();
  base.userData.hits.slice().sort(() => Math.random() - .5).slice(0, boss ? 5 : 3).forEach(([x, z], i) => events.push({ t: .3 + i * .35, f: () => explode(new THREE.Vector3(x, terrain.height(x, z) + 4, z), 1.3) }));
  if (G.baseHp <= 0) events.push({ t: 2.2, f: () => gameOver('base') });
}
function groundAI(e, dt, toP, dist, acc) {
  const D = DIFF[S.diff]; e.cd -= dt;
  if (!P.alive) return;
  if (e.kind === 'sam' && dist < 3300 && e.cd <= 0 && enemyMissiles() < 3) { e.cd = rand(9, 13) / (1 + G.cycle * .12); e.q.setFromRotationMatrix(tm.lookAt(e.pos, P.pos, UP)); e.speed = 120; const m = launch(e, P, 'e', 34); m.pos.y += 6; smoke.emit(e.pos.x, e.pos.y + 4, e.pos.z, { size: 30, life: 4, color: [.85, .8, .72], alpha: .6, spread: 20, grow: 1.5, must: true }); }
  if (e.kind === 'aa' && dist < 1800) { if (e.cd <= 0) { e.cd = rand(2.2, 3.4); e.burst = 10; } if (e.burst > 0 && (e.bt = (e.bt || 0) - dt) <= 0) { e.bt = .09; e.burst--; const o = e.pos.clone().setY(e.pos.y + 5), lead = P.pos.clone().addScaledVector(P.vel, dist / 900 * acc), sp = (1 - acc) * .05 + .02;
      const d = lead.sub(o).normalize().add(new THREE.Vector3(rand(-sp, sp), rand(-sp, sp), rand(-sp, sp))).normalize(); tracers.add(o, d.multiplyScalar(900), 'e', 3.5 * D.dmg, C_FLAK); if (dist < 1200) Sound.gun(); } }
}

/* ======================================================= weapons */
function launch(from, target, owner, dmg) {
  const f = fwdOf(from.q), r = rightOf(from.q), mesh = missileMesh(); scene.add(mesh);
  const pos = from.pos.clone().addScaledVector(r, (from.side = -(from.side || 1)) * (from.air === false ? 1 : 3)).addScaledVector(upOf(from.q), -1.2);
  const m = { mesh, pos, dir: f.clone(), speed: from.speed, target, owner, life: owner === 'p' ? 8 : 9, armed: .25, dmg }; missiles.push(m);
  if (owner === 'p' || pos.distanceTo(P.pos) < 3000) Sound.launch();
  if (owner === 'e') kill('MISSILE INBOUND', true);
  return m;
}
function fireMissile() {
  if (G.mode !== 'play' || !P.alive) return;
  if (P.msl <= 0) { kill('NO MISSILES', true); return; } if (P.mslCd > 0) return;
  const t = P.lock.locked ? P.lock.t : null;
  for (let i = 0; i < P.m.salvo && P.msl > 0; i++) { P.msl--; launch(P, t, 'p'); G.shots++; }
  P.mslCd = .4; paintMsl(); if (!t) kill('NO LOCK — DUMBFIRE');
}
function dropFlares() {
  if (G.mode !== 'play' || !P.alive || P.flares <= 0 || P.flareCd > 0) return; P.flares--; P.flareCd = 1.2; Sound.flare();
  const f = fwdOf(P.q), r = rightOf(P.q), start = flares.length;
  for (let i = 0; i < 6; i++) flares.push({ pos: P.pos.clone(), vel: P.vel.clone().multiplyScalar(.6).addScaledVector(r, (i % 2 ? 1 : -1) * rand(30, 70)).addScaledVector(UP, rand(-40, 10)).addScaledVector(f, -40), life: 3.5 });
  missiles.forEach(m => { if (m.owner === 'e' && m.target === P && Math.random() < .85) m.target = flares[start + Math.floor(Math.random() * 6)]; });
}
function enemyFlares(e) { const r = rightOf(e.q); for (let i = 0; i < 4; i++) flares.push({ pos: e.pos.clone(), vel: e.vel.clone().multiplyScalar(.5).addScaledVector(r, (i % 2 ? 1 : -1) * 50).addScaledVector(UP, -20), life: 3 }); return flares[flares.length - 1]; }
function explode(pos, scale = 1, quiet) {
  for (let i = 0; i < 28 * scale; i++) fire.emit(pos.x, pos.y, pos.z, { size: rand(12, 26) * scale, life: rand(.5, 1.1), color: [1, rand(.45, .75), rand(.15, .3)], alpha: 1, spread: 120 * scale, drag: 3, grow: 1.2 });
  for (let i = 0; i < 6; i++) fire.emit(pos.x, pos.y, pos.z, { size: 50 * scale, life: .25, color: [1, .9, .7], alpha: 1, spread: 10, grow: 3, must: true });
  for (let i = 0; i < 26 * scale; i++) smoke.emit(pos.x, pos.y, pos.z, { size: rand(14, 28) * scale, life: rand(3, 6), color: [.2, .18, .17], alpha: .65, spread: 70 * scale, drag: 1.5, grow: 1.8, rise: 6 });
  for (let i = 0; i < 14 * scale; i++) { const v = new THREE.Vector3(rand(-1, 1), rand(-.2, 1), rand(-1, 1)).normalize().multiplyScalar(rand(80, 200)); fire.emit(pos.x, pos.y, pos.z, { size: 4, life: rand(1, 2), color: [1, .7, .3], alpha: 1, vx: v.x, vy: v.y, vz: v.z, drag: .4, grow: -.2 }); }
  const d = P ? pos.distanceTo(P.pos) : 1000; if (!quiet) Sound.boom(d); if (P && d < 600) P.shake = Math.max(P.shake, (1 - d / 600) * 1.2);
  const fl = flashes[flashI++ % flashes.length]; fl.l.position.copy(pos); fl.l.intensity = 4e5 * scale; fl.t = .6;
}
function damagePlayer(n) { if (!P.alive || G.mode !== 'play') return; P.hp -= n; P.lastHit = G.t; P.hitFlash = Math.min(1, P.hitFlash + n / 30); P.shake = Math.max(P.shake, .5); Sound.damage(); if (P.hp <= 0) playerDie(); }
function enemyHit(e, n, byMissile) {
  if (e.dead) return; e.hp -= n; e.hitT = .15; if (!byMissile) { G.hits++; Sound.hit(); hitMarker = .15; }
  if (e.hp > 0) return;
  e.dead = true; e.spin = rand(-3, 3); explode(e.pos, e.kind === 'boss' ? 2.4 : e.kind === 'bomber' ? 1.4 : e.air ? .8 : 1.2);
  if (!e.air) for (let i = 0; i < 20; i++) smoke.emit(e.pos.x, e.pos.y + 5, e.pos.z, { size: rand(20, 40), life: rand(6, 10), color: [.12, .11, .1], alpha: .6, spread: 20, grow: 1.5, rise: 12, must: true });
  G.comboT > 0 ? G.combo++ : (G.combo = 1); G.comboT = 6;
  const pts = KIND[e.kind].pts * G.combo; G.score += pts; G.kills++;
  G.multi = G.t - G.lastKill < 4 ? G.multi + 1 : 1; G.lastKill = G.t;
  const name = KIND[e.kind].label || 'BANDIT';
  kill(`${G.multi >= 2 ? ['', '', 'DOUBLE KILL! ', 'TRIPLE KILL! ', 'MULTI KILL! '][Math.min(4, G.multi)] : ''}${name} DOWN  +${pts}${G.combo > 1 ? '  ×' + G.combo : ''}`);
  if (P.m.scav) P.hp = Math.min(P.maxHp, P.hp + 8);
  if ((e.air && G.slowCd <= 0) || e.kind === 'boss' || G.multi >= 2) { G.slow = e.kind === 'boss' ? 1.4 : .5; G.slowCd = 7; }
  missiles.forEach(m => { if (m.target === e) m.target = null; });
}
let hitMarker = 0;
function kill(t, warn) { if (kills[0] && kills[0].t === t) { kills[0].life = 2.6; return; } kills.unshift({ t, life: 2.6, warn }); kills = kills.slice(0, 4); }

/* ======================================================= flight */
const tmpQ = new THREE.Quaternion(), tmpE = new THREE.Euler();
function flyPlayer(dt) {
  const I = readInput(), J = P.J, ag = J.agility * P.m.agile, f = fwdOf(P.q), r = rightOf(P.q);
  const bank = Math.asin(clamp(r.y, -1, 1)), nearVert = Math.abs(f.y) > .8;
  let pitch = I.pitch, roll = I.roll, yaw = I.yaw;
  // mouse-aim autopilot: the jet chases the point you're aiming at
  if (S.control === 'aim' && !TOUCH) {
    if (I.manual) syncAim();
    else { const d = aimDir(), loc = d.clone().applyQuaternion(tmpQ.copy(P.q).invert()), off = Math.acos(clamp(-loc.z, -1, 1));
      if (loc.z > .2) { pitch = 1; roll = Math.sign(loc.x || 1); }
      else { pitch = clamp(loc.y * 5, -1, 1); const aggressive = clamp(loc.x * 5, -1, 1), level = clamp(r.y * 2.2, -1, 1), inf = clamp(off / .2, 0, 1); roll = lerp(level, aggressive, inf); yaw = -clamp(loc.x * 3, -1, 1) * .6; } }
  }
  // ground-collision assist
  P.pullUp = false;
  const ahead = P.pos.clone().addScaledVector(P.vel, 2.2), gAhead = terrain.height(ahead.x, ahead.z), gNow = terrain.height(P.pos.x, P.pos.z);
  if ((ahead.y < gAhead + 60 || P.pos.y - gNow < 70) && P.vel.y < 5) { P.pullUp = true; if (S.assist) { pitch = 1; roll = clamp(r.y * 3, -1, 1); } }
  const tgt = new THREE.Vector3(pitch * 1.3 * ag, yaw * .5, roll * 2.7 * ag);
  if (S.assist && S.control !== 'aim' && Math.abs(roll) < .05 && !nearVert && Math.abs(bank) < 1.3) tgt.z += bank * 1.4;
  P.input = { ...I, pitch, roll };
  P.rate.lerp(tgt, Math.min(1, dt * 7));
  tmpQ.setFromEuler(tmpE.set(P.rate.x * dt, P.rate.y * dt, -P.rate.z * dt, 'XYZ')); P.q.multiply(tmpQ);
  if (!nearVert) { tmpQ.setFromAxisAngle(UP, -Math.sin(bank) * .38 * ag * dt * clamp(P.speed / 250, .6, 1.2)); P.q.premultiply(tmpQ); }
  const hz = Math.hypot(P.pos.x, P.pos.z); P.out = hz > ARENA;
  if (hz > ARENA + 400) { const want = new THREE.Vector3(-P.pos.x, 0, -P.pos.z).normalize(); P.q.rotateTowards(tq.setFromRotationMatrix(tm.lookAt(ZERO, want, UP)), .9 * dt); syncAim(); }
  if (P.pos.y > 4500) { P.q.rotateTowards(tq.setFromRotationMatrix(tm.lookAt(ZERO, f.clone().setY(-.4).normalize(), UP)), .5 * dt); }
  P.q.normalize(); fwdOf(P.q, f);
  P.ab = I.ab; const thrT = I.ab ? 1 : I.brake ? .15 : .62; P.thr = lerp(P.thr, thrT, dt * 1.6);
  const vmax = 330 * J.speed * P.m.speed * (I.ab ? 1.28 : 1), tvv = lerp(150, vmax, P.thr) * (I.brake ? .8 : 1);
  P.speed += (tvv - P.speed) * .45 * dt - f.y * 60 * dt; if (I.brake) P.speed -= 40 * dt; P.speed = clamp(P.speed, 95, 540);
  P.vel.copy(f).multiplyScalar(P.speed); P.pos.addScaledVector(P.vel, dt);
  const gh = terrain.height(P.pos.x, P.pos.z), alt = P.pos.y - gh; P.alt = alt;
  if (alt < 4) { P.pos.y = gh + 4; playerDie(true); return; }
  // weapons
  P.gunCd -= dt; P.mslCd -= dt; P.flareCd -= dt; P.heat = Math.max(0, P.heat - dt * .45); if (P.over && P.heat < .3) P.over = false;
  if (I.gun && !P.over && P.gunCd <= 0) { P.gunCd = 1 / 16; P.heat += .032 * P.m.heat; if (P.heat >= 1) { P.over = true; kill('GUN OVERHEAT', true); }
    P.gunSide *= -1; const sp = .0035, d = f.clone().add(new THREE.Vector3(rand(-sp, sp), rand(-sp, sp), rand(-sp, sp))).normalize();
    if (P.lead && f.angleTo(P.lead.clone().sub(P.pos)) < .085) d.lerp(P.lead.clone().sub(P.pos).normalize(), .9).normalize();
    tracers.add(P.pos.clone().addScaledVector(f, 9).addScaledVector(rightOf(P.q), P.gunSide * 1.2), d.multiplyScalar(1250).add(P.vel), 'p', 9 * J.gun * P.m.gun, C_FRIEND); G.shots++; Sound.gun(); }
  P.mslT += dt * P.m.reload; if (P.mslT > 6 && P.msl < P.mslMax) { P.mslT = 0; P.msl++; paintMsl(); }
  P.flareT += dt * P.m.flare; if (P.flareT > 9 && P.flares < P.flareMax) { P.flareT = 0; P.flares++; }
  if (G.t - P.lastHit > 5 && P.hp < P.maxHp) P.hp = Math.min(P.maxHp, P.hp + dt * 1.2 * P.m.regen);
  if (P.rate.length() > 1.1 && P.speed > 200) { const s = J.span; [-1, 1].forEach(si => { const p = P.pos.clone().addScaledVector(rightOf(P.q), si * (s + 1)).addScaledVector(f, J.len * .2); smoke.emit(p.x, p.y, p.z, { size: 1.6, life: .7, color: [1, 1, 1], alpha: .45, grow: 1.2, drag: 0 }); }); }
  if (P.hp < P.maxHp * .4 && Math.random() < .7) smoke.emit(P.pos.x, P.pos.y, P.pos.z, { size: 4, life: 2, color: [.2, .2, .2], alpha: .5, spread: 2, grow: 1.6 });
}
function playerDie(crash) {
  if (!P.alive) return; P.alive = false; P.hp = 0; explode(P.pos, 2); P.obj.visible = false; P.deadT = 0; Sound.silence(); kill(crash ? 'CRASHED' : 'SHOT DOWN', true); G.reason = crash ? 'crash' : 'shot';
  if (G.view === 'first') setView('third', true);
}
function updateLock(dt) {
  const L = P.lock, f = S.control === 'aim' && !TOUCH ? aimDir().clone() : fwdOf(P.q); let best = null, ba = .5;
  if (L.t && !L.t.dead && !L.t.remove) { const v = L.t.pos.clone().sub(P.pos), a = f.angleTo(v); if (a < .6 && v.length() < 3600) { best = L.t; ba = -1;
    for (const e of enemies) { if (e === L.t || e.dead) continue; const w = e.pos.clone().sub(P.pos), b = f.angleTo(w); if (w.length() < 3600 && b < .12 && b < a * .4) { best = e; break; } } } }
  if (!best) for (const e of enemies) { if (e.dead) continue; const v = e.pos.clone().sub(P.pos), d = v.length(), a = f.angleTo(v); if (d < 3600 && a < ba) { ba = a; best = e; } }
  if (best !== L.t) { L.t = best; L.k = 0; L.locked = false; }
  if (L.t) { const was = L.locked; L.k += dt * P.m.lock; L.locked = L.k > .7; L.tick -= dt; if (L.tick <= 0) { L.tick = L.locked ? .5 : .16; L.locked ? Sound.locked(true) : Sound.lockTick(); } if (!was && L.locked) kill('LOCKED — FIRE! [SPACE]'); }
  P.lead = null; let bestD = 1e9; const nose = fwdOf(P.q);
  for (const e of enemies) { if (e.dead) continue; const v = e.pos.clone().sub(P.pos), d = v.length(); if (d > 1600 || nose.angleTo(v) > .5) continue; if (d < bestD) { bestD = d; P.lead = e.pos.clone().addScaledVector(e.vel.clone().sub(P.vel), d / 1250); P.leadT = e; } }
}
function cycleTarget() { const f = fwdOf(P.q); const c = enemies.filter(e => !e.dead && f.angleTo(e.pos.clone().sub(P.pos)) < .6 && e.pos.distanceTo(P.pos) < 3600); if (!c.length) return; const i = c.indexOf(P.lock.t); P.lock.t = c[(i + 1) % c.length]; P.lock.k = 0; P.lock.locked = false; Sound.click(); }

/* ======================================================= sim step */
const segP = V(), segQ = V();
function distSeg(p, a, b) { segP.subVectors(b, a); const l2 = segP.lengthSq(); let t = l2 ? segQ.subVectors(p, a).dot(segP) / l2 : 0; t = clamp(t, 0, 1); return segQ.copy(a).addScaledVector(segP, t).distanceTo(p); }
const hitR = e => e.kind === 'boss' ? 34 : e.kind === 'bomber' ? 26 : e.air ? 16 : 10;
function step(dt) {
  G.t += dt;
  if (P.alive) { flyPlayer(dt); updateLock(dt); } else P.deadT += dt;
  enemies.forEach(e => enemyAI(e, dt));
  const next = V();
  tracers.list = tracers.list.filter(b => {
    b.life -= dt; if (b.life <= 0) return false; next.copy(b.p).addScaledVector(b.v, dt);
    if (b.owner === 'p') { for (const e of enemies) if (!e.dead && Math.abs(e.pos.x - b.p.x) < 260 && distSeg(e.pos, b.p, next) < hitR(e)) { enemyHit(e, b.dmg); fire.emit(next.x, next.y, next.z, { size: 6, life: .25, color: [1, .8, .4], alpha: 1, spread: 20 }); return false; } }
    else if (P.alive && distSeg(P.pos, b.p, next) < 9) { damagePlayer(b.dmg); return false; }
    if (next.y < terrain.height(next.x, next.z)) { smoke.emit(next.x, next.y + 2, next.z, { size: 6, life: 1.4, color: [.82, .66, .45], alpha: .6, spread: 6, grow: 1.5, vy: 8 }); return false; }
    b.p.copy(next); return true;
  });
  missiles = missiles.filter(m => {
    m.life -= dt; m.armed -= dt; m.speed = Math.min(m.owner === 'p' ? 780 : 560, m.speed + 420 * dt);
    const T = m.target; let tp = null;
    if (T && T.pos && !T.remove && (T.life === undefined || T.life > 0)) { tp = T.pos.clone(); if (T.vel) tp.addScaledVector(T.vel, clamp(tp.distanceTo(m.pos) / m.speed, 0, 2) * .6); }
    if (tp) { const want = tp.sub(m.pos).normalize(), ang = m.dir.angleTo(want), mx = (m.owner === 'p' ? 2.7 * P.m.seeker : 1.5) * dt; if (ang > 1e-4) m.dir.lerp(want, Math.min(1, mx / ang)).normalize(); }
    if (m.owner === 'p' && T && T.obj && T.air && !T.dead && !T.flared && m.pos.distanceTo(T.pos) < 900 && T.state === 'evade' && Math.random() < dt * .6) { m.target = enemyFlares(T); T.flared = true; }
    m.pos.addScaledVector(m.dir, m.speed * dt); m.mesh.position.copy(m.pos); m.mesh.quaternion.setFromRotationMatrix(tm.lookAt(ZERO, m.dir, UP));
    const tail = tv1.copy(m.pos).addScaledVector(m.dir, -2);
    fire.emit(tail.x, tail.y, tail.z, { size: 3.2, life: .12, color: [1, .75, .4], alpha: 1, grow: -2 }); smoke.emit(tail.x, tail.y, tail.z, { size: 2.6, life: 3.2, color: [.9, .9, .88], alpha: .5, spread: 1, grow: 1.5, drag: 1 });
    let boom = m.life <= 0 || m.pos.y < terrain.height(m.pos.x, m.pos.z);
    if (!boom && m.armed <= 0) {
      if (m.owner === 'p') { for (const e of enemies) if (!e.dead && e.pos.distanceTo(m.pos) < hitR(e) + 10) { enemyHit(e, e.kind === 'boss' ? 320 : e.kind === 'bomber' ? 260 : 999, true); boom = true; break; } }
      else if (P.alive && P.pos.distanceTo(m.pos) < 20) { damagePlayer((m.dmg || 42) * DIFF[S.diff].dmg); boom = true; }
      if (!boom && T && T.life !== undefined && T.pos.distanceTo(m.pos) < 15) boom = true;
    }
    if (boom) { explode(m.pos, .6); scene.remove(m.mesh); return false; } return true;
  });
  flares = flares.filter(fl => { fl.life -= dt; fl.vel.y -= 30 * dt; fl.vel.multiplyScalar(Math.exp(-.6 * dt)); fl.pos.addScaledVector(fl.vel, dt); fire.emit(fl.pos.x, fl.pos.y, fl.pos.z, { size: 7, life: .15, color: [1, .9, .7], alpha: 1, grow: -1 }); smoke.emit(fl.pos.x, fl.pos.y, fl.pos.z, { size: 3, life: 1.6, color: [.95, .95, .95], alpha: .35, grow: 1.4 }); return fl.life > 0; });
  enemies = enemies.filter(e => { if (e.remove) { scene.remove(e.obj); if (P.lock.t === e) P.lock.t = null; return false; } return true; });
  events = events.filter(ev => { ev.t -= dt; if (ev.t <= 0) { ev.f(); return false; } return true; });
  G.comboT -= dt;
  if (P.alive && !enemies.length && G.mode === 'play' && !G.clearing) waveClear();
  if (!P.alive && P.deadT > 3.2 && G.mode === 'play') gameOver(G.reason);
}
function waveClear() {
  G.clearing = true; const b = 250 * G.wave; G.score += b; banner(`WAVE ${G.wave} CLEAR`, `+${b} bonus`); Sound.win();
  P.hp = Math.min(P.maxHp, P.hp + P.maxHp * .35); P.msl = P.mslMax; P.flares = P.flareMax; paintMsl(); G.baseHp = Math.min(100, G.baseHp + 10);
  events.push({ t: 2.4, f: offerPerks });
}
function nextWave() { G.wave++; G.clearing = false; spawnWave(G.wave); const sp = G.spec; banner(`WAVE ${G.wave}: ${sp.name}`, sp.obj); $('#obj').textContent = sp.obj; }

/* ======================================================= perks */
let perkChoices = [];
function offerPerks() {
  if (!P.alive) return; G.mode = 'perk'; if (document.pointerLockElement) document.exitPointerLock(); Sound.silence(); document.body.classList.remove('playing');
  const pool = PERKS.filter(p => p[0] !== 'salvo' || P.m.salvo < 2); perkChoices = pool.sort(() => Math.random() - .5).slice(0, 3);
  $('#perkCards').innerHTML = perkChoices.map((p, i) => `<button class="pcard" data-i="${i}" style="--d:${i * .08}s"><i>${p[1]}</i><b>${p[2]}</b><span>${p[3]}</span><small>${i + 1}</small></button>`).join('');
  $('#perkWave').textContent = `Wave ${G.wave + 1}: ${waveSpec(G.wave + 1).name}`; $('#perk').classList.add('on');
}
function choosePerk(i) {
  const p = perkChoices[i]; if (!p || G.mode !== 'perk') return; Sound.click(); const m = P.m;
  ({ gun: () => m.gun *= 1.3, lock: () => m.lock *= 1.8, pylon: () => { P.mslMax += 3; P.msl = P.mslMax; m.reload *= 1.4; }, hull: () => { P.maxHp += 35; P.hp = P.maxHp; },
    flare: () => { P.flareMax += 6; P.flares = P.flareMax; m.flare *= 2; }, engine: () => m.speed *= 1.12, agile: () => m.agile *= 1.15, cool: () => m.heat *= .6, seeker: () => m.seeker *= 1.35,
    regen: () => m.regen *= 3, scav: () => m.scav = 1, salvo: () => m.salvo = 2 })[p[0]]();
  P.perks.push(p); paintMsl(); $('#perks').innerHTML = P.perks.map(x => `<i title="${x[2]}">${x[1]}</i>`).join('');
  $('#perk').classList.remove('on'); G.mode = 'play'; document.body.classList.add('playing'); if (S.control === 'aim' && !TOUCH) lockPointer();
  kill(p[2].toUpperCase() + ' EQUIPPED'); events.push({ t: 1.5, f: nextWave });
}
$('#perkCards').onclick = e => { const b = e.target.closest('.pcard'); if (b) choosePerk(+b.dataset.i); };

/* ======================================================= camera */
function setView(v, silent) { G.view = v; cockpit.visible = v === 'first' && P && P.alive; if (P) P.obj.visible = v !== 'first' && P.alive; if (!silent) { S.view = v; saveS(); } }
function toggleView() { setView(G.view === 'first' ? 'third' : 'first'); kill(G.view === 'first' ? 'COCKPIT VIEW' : 'CHASE VIEW'); }
function updateCamera(dt) { if (window.__camFreeze) return;
  if (G.mode === 'menu') { if (innerWidth <= 760) cam.setViewOffset(innerWidth, innerHeight, 0, innerHeight * .26, innerWidth, innerHeight); else cam.clearViewOffset(); const t = performance.now() / 1000 * .12, c = menuJet.position; cam.position.set(c.x + Math.sin(t) * 34, c.y + 7 + Math.sin(t * .7) * 3, c.z + Math.cos(t) * 34); cam.up.set(0, 1, 0); cam.lookAt(c.x + (innerWidth > 900 ? -6 : 0), c.y, c.z); cam.fov = innerWidth <= 760 ? 58 : 45; cam.updateProjectionMatrix(); return; }
  if (cam.view) cam.clearViewOffset();
  if (!P.alive) { const t = P.deadT * .4; cam.position.lerp(P.pos.clone().add(new THREE.Vector3(Math.sin(t) * 160, 70, Math.cos(t) * 160)), dt * 2); cam.up.set(0, 1, 0); cam.lookAt(P.pos); return; }
  const shake = P.shake * (G.view === 'first' ? .25 : .9); P.shake *= Math.exp(-dt * 4);
  const kd = clamp(1.1 / cam.aspect, 1, 1.7);
  if (G.view === 'first') { cam.position.copy(P.pos).add(new THREE.Vector3(0, 1.25, -P.J.len * .26).applyQuaternion(P.q)); cam.quaternion.copy(P.q); cam.fov = lerp(cam.fov, 74 + (P.ab ? 6 : 0), dt * 3); }
  else if (S.control === 'aim' && !TOUCH) { // camera rig follows your aim, horizon stays level
    const d = aimDir(); P.camQ.setFromRotationMatrix(tm.lookAt(ZERO, d, UP)); const off = new THREE.Vector3(0, (4.5 + P.J.len * .12) * kd, (19 + P.J.len * .6) * kd).applyQuaternion(P.camQ);
    cam.position.copy(P.pos).add(off); cam.quaternion.copy(P.camQ); cam.rotateX(-.05); cam.fov = lerp(cam.fov, 64 + clamp((P.speed - 250) * .05, 0, 12) + (P.ab ? 4 : 0), dt * 3); }
  else { P.camQ.slerp(P.q, Math.min(1, dt * 4.5)); const off = new THREE.Vector3(0, (5 + P.J.len * .12) * kd, (20 + P.J.len * .55) * kd).applyQuaternion(P.camQ); cam.position.copy(P.pos).add(off); cam.quaternion.copy(P.camQ); cam.rotateX(-.09); cam.fov = lerp(cam.fov, 66 + clamp((P.speed - 250) * .05, 0, 12) + (P.ab ? 4 : 0), dt * 3); }
  if (shake > .01) cam.position.add(new THREE.Vector3(rand(-1, 1), rand(-1, 1), rand(-1, 1)).multiplyScalar(shake));
  cam.updateProjectionMatrix();
}

/* ======================================================= HUD */
const hud = $('#hud'), hg = hud.getContext('2d'); let HW = 0, HH = 0, DPR = 1;
const ACC = '#b8f36b', RED = '#ff4f5e', AMB = '#ffcf4a', BLU = '#7fd0ff';
const proj = V(), invQ = new THREE.Quaternion();
function toScreen(p) { proj.copy(p).project(cam); return { x: (proj.x + 1) / 2 * HW, y: (1 - proj.y) / 2 * HH, front: proj.z < 1 }; }
function edgeArrow(g, p, col, R, sz = 1) { const v = p.clone().sub(cam.position).applyQuaternion(invQ.copy(cam.quaternion).invert()); const a = Math.atan2(-v.y, v.x), cx = HW / 2, cy = HH / 2; g.save(); g.translate(cx + Math.cos(a) * R, cy + Math.sin(a) * R); g.rotate(a); g.fillStyle = col; g.beginPath(); g.moveTo(12 * sz, 0); g.lineTo(-8 * sz, -8 * sz); g.lineTo(-8 * sz, 8 * sz); g.closePath(); g.fill(); g.restore(); }
function drawHUD(dt, time) {
  const g = hg; g.setTransform(DPR, 0, 0, DPR, 0, 0); g.clearRect(0, 0, HW, HH);
  if (G.mode !== 'play' && G.mode !== 'paused') return;
  g.lineWidth = 2; g.font = '600 12px "JetBrains Mono",monospace'; g.textBaseline = 'middle';
  const f = fwdOf(P.q), cx = HW / 2, cy = HH / 2, sm = Math.min(HW, HH);
  if (P.alive) {
    const bore = toScreen(P.pos.clone().addScaledVector(f, 700));
    if (bore.front) { g.strokeStyle = P.over ? RED : ACC; g.beginPath(); g.arc(bore.x, bore.y, 16, 0, 7); g.stroke(); g.beginPath(); for (const [a, b] of [[-28, -20], [20, 28]]) { g.moveTo(bore.x + a, bore.y); g.lineTo(bore.x + b, bore.y); g.moveTo(bore.x, bore.y + a); g.lineTo(bore.x, bore.y + b); } g.stroke(); g.fillStyle = g.strokeStyle; g.fillRect(bore.x - 1.5, bore.y - 1.5, 3, 3);
      if (hitMarker > 0) { g.strokeStyle = '#fff'; g.beginPath(); [[1, 1], [1, -1], [-1, 1], [-1, -1]].forEach(([a, b]) => { g.moveTo(bore.x + a * 8, bore.y + b * 8); g.lineTo(bore.x + a * 15, bore.y + b * 15); }); g.stroke(); } }
    if (S.control === 'aim' && !TOUCH) { const a = toScreen(P.pos.clone().addScaledVector(aimDir(), 2000)); if (a.front) { g.strokeStyle = 'rgba(255,255,255,.9)'; g.lineWidth = 1.5; g.beginPath(); g.arc(a.x, a.y, 7, 0, 7); g.stroke(); g.fillStyle = '#fff'; g.fillRect(a.x - 1, a.y - 1, 2, 2);
      if (bore.front && Math.hypot(a.x - bore.x, a.y - bore.y) > 24) { g.strokeStyle = 'rgba(255,255,255,.25)'; g.setLineDash([2, 6]); g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(bore.x, bore.y); g.stroke(); g.setLineDash([]); } } }
    else if (S.control === 'stick' && !TOUCH && mouse.moved) { const mx = cx + mouse.x * HW / 2, my = cy + mouse.y * HH / 2; g.strokeStyle = 'rgba(184,243,107,.5)'; g.beginPath(); g.arc(mx, my, 6, 0, 7); g.stroke(); }
    if (G.view === 'first') { const r = rightOf(P.q), roll = Math.atan2(-r.y, upOf(P.q).y), pitch = Math.asin(clamp(f.y, -1, 1)), ppd = HH / (cam.fov * Math.PI / 180);
      g.save(); g.translate(cx, cy); g.rotate(roll); g.strokeStyle = 'rgba(184,243,107,.75)'; g.fillStyle = 'rgba(184,243,107,.75)'; g.textAlign = 'left'; g.lineWidth = 1.5;
      for (let a = -60; a <= 60; a += 10) { const y = (pitch * 180 / Math.PI - a) * ppd * Math.PI / 180; if (Math.abs(y) > HH * .32) continue; const w = a === 0 ? 260 : 90; if (a < 0) g.setLineDash([8, 6]); g.beginPath(); g.moveTo(-w, y); g.lineTo(-40, y); g.moveTo(40, y); g.lineTo(w, y); g.stroke(); g.setLineDash([]); if (a) g.fillText(Math.abs(a), w + 6, y); }
      g.restore(); }
    // base marker
    const bc = base.userData.center, bs = toScreen(bc); if (bs.front && bs.x > 0 && bs.x < HW && bs.y > 0 && bs.y < HH) { g.strokeStyle = BLU; g.lineWidth = 1.5; g.strokeRect(bs.x - 10, bs.y - 10, 20, 20); g.fillStyle = BLU; g.textAlign = 'center'; g.fillText('BASE', bs.x, bs.y - 18); }
    enemies.forEach(e => {
      if (e.dead) return; const s = toScreen(e.pos), d = e.pos.distanceTo(P.pos), L = P.lock, isT = L.t === e, big = e.kind === 'bomber' || e.kind === 'boss';
      if (!s.front || s.x < 0 || s.y < 0 || s.x > HW || s.y > HH) { edgeArrow(g, e.pos, isT ? RED : big ? AMB : 'rgba(255,120,100,.8)', sm * .42, big ? 1.4 : 1); return; }
      const sz = clamp(1600 / d * 14 * (big ? 1.8 : 1), 12, big ? 60 : 36);
      g.strokeStyle = isT ? (L.locked ? RED : AMB) : e.air ? 'rgba(255,255,255,.85)' : 'rgba(255,190,120,.9)'; g.lineWidth = isT ? 2.5 : 1.6;
      if (isT && !L.locked) { g.save(); g.translate(s.x, s.y); g.rotate(time * 4); const k = 1.6 - Math.min(1, L.k / .7) * .6; g.strokeRect(-sz * k, -sz * k, sz * 2 * k, sz * 2 * k); g.restore(); }
      else if (isT) { g.beginPath(); g.moveTo(s.x, s.y - sz * 1.3); g.lineTo(s.x + sz * 1.3, s.y); g.lineTo(s.x, s.y + sz * 1.3); g.lineTo(s.x - sz * 1.3, s.y); g.closePath(); g.stroke(); g.fillStyle = RED; g.textAlign = 'center'; g.fillText('LOCK', s.x, s.y - sz * 1.3 - 12); }
      if (e.air) { g.beginPath(); for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) { g.moveTo(s.x + a * sz, s.y + b * sz * .45); g.lineTo(s.x + a * sz, s.y + b * sz); g.lineTo(s.x + a * sz * .45, s.y + b * sz); } g.stroke(); }
      else { g.beginPath(); g.moveTo(s.x, s.y - sz); g.lineTo(s.x + sz, s.y); g.lineTo(s.x, s.y + sz); g.lineTo(s.x - sz, s.y); g.closePath(); g.stroke(); }
      if (e.hitT > 0) { g.fillStyle = 'rgba(255,255,255,.5)'; g.fillRect(s.x - sz, s.y - sz, sz * 2, sz * 2); }
      g.fillStyle = 'rgba(255,255,255,.85)'; g.textAlign = 'left'; g.fillText((d / 1000).toFixed(1) + 'km', s.x + sz + 6, s.y + sz - 4);
      const lb = KIND[e.kind].label; if (lb) { g.fillStyle = big || e.kind === 'ace' ? AMB : 'rgba(255,190,120,.95)'; g.fillText(lb, s.x + sz + 6, s.y - sz + 6); }
      const hb = Math.max(0, e.hp) / e.maxHp; g.fillStyle = 'rgba(0,0,0,.4)'; g.fillRect(s.x - sz, s.y + sz + 5, sz * 2, 3); g.fillStyle = hb > .5 ? ACC : hb > .25 ? AMB : RED; g.fillRect(s.x - sz, s.y + sz + 5, sz * 2 * hb, 3);
    });
    if (P.lead) { const s = toScreen(P.lead); if (s.front) { g.strokeStyle = ACC; g.lineWidth = 2; g.beginPath(); g.arc(s.x, s.y, 9, 0, 7); g.stroke(); g.beginPath(); g.arc(s.x, s.y, 2, 0, 7); g.fillStyle = ACC; g.fill(); } }
    const inbound = missiles.filter(m => m.owner === 'e' && m.target === P);
    if (inbound.length) { P.warnT -= dt; if (P.warnT <= 0) { P.warnT = .55; Sound.warn(); } if (Math.floor(time * 4) % 2) { g.fillStyle = RED; g.font = '700 22px "Space Grotesk",sans-serif'; g.textAlign = 'center'; g.fillText(TOUCH ? '⚠ MISSILE — HIT FLR' : '⚠ MISSILE — PRESS F FOR FLARES', cx, HH * .26); }
      inbound.forEach(m => { const s = toScreen(m.pos); if (s.front && s.x > 0 && s.x < HW && s.y > 0 && s.y < HH) { g.strokeStyle = RED; g.lineWidth = 2; g.beginPath(); g.arc(s.x, s.y, 14, 0, 7); g.stroke(); } else edgeArrow(g, m.pos, RED, sm * .3, 1.4); }); }
    if (P.pullUp) { P.pullT -= dt; if (P.pullT <= 0) { P.pullT = .7; Sound.pullup(); } if (Math.floor(time * 3) % 2) { g.fillStyle = RED; g.font = '700 26px "Space Grotesk",sans-serif'; g.textAlign = 'center'; g.fillText(S.assist ? 'AUTO PULL-UP' : 'PULL UP', cx, HH * .68); } }
    if (P.out) { g.fillStyle = AMB; g.font = '700 18px "Space Grotesk",sans-serif'; g.textAlign = 'center'; g.fillText('LEAVING COMBAT AREA — TURN BACK', cx, HH * .2); }
    g.font = '600 12px "JetBrains Mono",monospace'; g.lineWidth = 1.5;
    const to = Math.min(340, HW * .5 - 92); tape(g, cx - to, cy, Math.round(P.speed * 1.94), 'KTS', -1); tape(g, cx + to, cy, Math.round(P.pos.y * 3.28), 'ALT', 1, `R ${Math.round(P.alt * 3.28)}`);
    if (!TOUCH || HW > 700) heading(g, cx, 74);
  }
  g.textAlign = 'center'; kills.forEach((k, i) => { k.life -= dt || .016; if (k.life <= 0) return; g.globalAlpha = Math.min(1, k.life * 2); g.fillStyle = k.warn ? RED : '#fff'; g.font = `700 ${i ? 15 : 20}px "Space Grotesk",sans-serif`; g.fillText(k.t, cx, HH * .36 - i * 24); }); g.globalAlpha = 1; kills = kills.filter(k => k.life > 0);
  if (P.hitFlash > 0) { P.hitFlash = Math.max(0, P.hitFlash - dt * 1.4); const gr = g.createRadialGradient(cx, cy, sm * .3, cx, cy, sm * .8); gr.addColorStop(0, 'rgba(255,40,40,0)'); gr.addColorStop(1, `rgba(255,40,40,${P.hitFlash * .55})`); g.fillStyle = gr; g.fillRect(0, 0, HW, HH); }
  if (G.slow > 0) { g.fillStyle = 'rgba(255,255,255,.04)'; g.fillRect(0, 0, HW, HH); }
  hitMarker = Math.max(0, hitMarker - dt);
  drawRadar(g); paintStatus();
}
function tape(g, x, y, v, label, side, sub) {
  const h = 220, w = 66; g.save(); g.translate(x, y); g.strokeStyle = 'rgba(184,243,107,.55)'; g.fillStyle = 'rgba(184,243,107,.85)'; g.textAlign = side < 0 ? 'right' : 'left';
  g.beginPath(); g.rect(side < 0 ? -w : 0, -h / 2, w, h); g.clip(); const st = label === 'ALT' ? 500 : 50, px = 44;
  for (let k = Math.floor(v / st) - 3; k <= Math.floor(v / st) + 3; k++) { const yy = (v - k * st) / st * px; if (k < 0) continue; g.beginPath(); g.moveTo(0, yy); g.lineTo(side * 12, yy); g.stroke(); g.fillText(k * st, side * 16, yy); }
  g.restore(); g.save(); g.translate(x, y); g.fillStyle = 'rgba(8,10,8,.75)'; g.strokeStyle = ACC; g.lineWidth = 1.5; const bx = side < 0 ? -w - 10 : 0; g.fillRect(bx, -14, w + 10, 28); g.strokeRect(bx, -14, w + 10, 28);
  g.fillStyle = '#fff'; g.font = '700 15px "JetBrains Mono",monospace'; g.textAlign = 'center'; g.fillText(v, bx + (w + 10) / 2, 0); g.fillStyle = ACC; g.font = '600 10px "JetBrains Mono",monospace'; g.fillText(label, bx + (w + 10) / 2, -h / 2 - 12); if (sub) g.fillText(sub, bx + (w + 10) / 2, h / 2 + 12); g.restore();
}
function heading(g, x, y) {
  const f = fwdOf(P.q), hd = (Math.atan2(f.x, -f.z) * 180 / Math.PI + 360) % 360, w = 300, pxd = 4; g.save(); g.translate(x, y); g.beginPath(); g.rect(-w / 2, -16, w, 40); g.clip();
  g.strokeStyle = 'rgba(184,243,107,.6)'; g.fillStyle = 'rgba(184,243,107,.85)'; g.textAlign = 'center'; g.lineWidth = 1.5;
  for (let a = Math.floor((hd - 40) / 5) * 5; a <= hd + 40; a += 5) { const xx = (a - hd) * pxd, n = (a + 360) % 360; g.beginPath(); g.moveTo(xx, 4); g.lineTo(xx, n % 10 ? 9 : 13); g.stroke(); if (n % 30 === 0) g.fillText({ 0: 'N', 90: 'E', 180: 'S', 270: 'W' }[n] || String(n / 10).padStart(2, '0'), xx, -6); }
  g.restore(); g.fillStyle = '#fff'; g.beginPath(); g.moveTo(x, y + 15); g.lineTo(x - 6, y + 24); g.lineTo(x + 6, y + 24); g.fill(); g.font = '700 12px "JetBrains Mono",monospace'; g.textAlign = 'center'; g.fillText(String(Math.round(hd)).padStart(3, '0') + '°', x, y + 34);
}
function drawRadar(g) {
  const R = TOUCH ? 52 : 74, x = HW - R - 18, y = TOUCH ? R + 70 : HH - R - 18, range = 5000, f = fwdOf(P.q), hd = Math.atan2(f.x, -f.z);
  g.save(); g.translate(x, y); g.fillStyle = 'rgba(8,12,8,.62)'; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill(); g.strokeStyle = 'rgba(184,243,107,.35)'; g.lineWidth = 1; [1, .66, .33].forEach(k => { g.beginPath(); g.arc(0, 0, R * k, 0, 7); g.stroke(); });
  g.beginPath(); g.moveTo(-R, 0); g.lineTo(R, 0); g.moveTo(0, -R); g.lineTo(0, R); g.stroke();
  const sw = (performance.now() / 1000 * 2) % (Math.PI * 2); if (g.createConicGradient) { const gr = g.createConicGradient(sw - .6, 0, 0); gr.addColorStop(0, 'rgba(184,243,107,0)'); gr.addColorStop(.1, 'rgba(184,243,107,.22)'); gr.addColorStop(.1001, 'rgba(184,243,107,0)'); g.fillStyle = gr; g.beginPath(); g.arc(0, 0, R, 0, 7); g.fill(); }
  const at = p => { const dx = p.x - P.pos.x, dz = p.z - P.pos.z, a = Math.atan2(dx, -dz) - hd, d = Math.min(1, Math.hypot(dx, dz) / range) * R; return [Math.sin(a) * d, -Math.cos(a) * d]; };
  const [bx, by] = at(base.userData.center); g.fillStyle = BLU; g.fillRect(bx - 4, by - 4, 8, 8);
  enemies.forEach(e => { if (e.dead) return; const [ex, ey] = at(e.pos); g.fillStyle = e === P.lock.t ? RED : e.air ? '#ff8a6a' : '#ffb070'; if (e.air) { g.beginPath(); g.arc(ex, ey, e.kind === 'boss' || e.kind === 'bomber' ? 5.5 : 3.5, 0, 7); g.fill(); } else g.fillRect(ex - 3, ey - 3, 6, 6); });
  missiles.forEach(m => { const [mx, my] = at(m.pos); g.fillStyle = m.owner === 'e' ? RED : AMB; g.beginPath(); g.arc(mx, my, 2, 0, 7); g.fill(); });
  g.fillStyle = ACC; g.beginPath(); g.moveTo(0, -7); g.lineTo(5, 6); g.lineTo(0, 3); g.lineTo(-5, 6); g.closePath(); g.fill(); g.restore();
}
let statusLast = 0;
function paintStatus() {
  const now = performance.now(); if (now - statusLast < 120) return; statusLast = now;
  $('#sScore').textContent = G.score.toLocaleString(); $('#sWave').textContent = G.wave; $('#sLeft').textContent = enemies.filter(e => !e.dead).length; $('#sCombo').textContent = G.combo > 1 && G.comboT > 0 ? '×' + G.combo : '';
  const hp = Math.max(0, P.hp / P.maxHp); $('#hpBar').style.width = hp * 100 + '%'; $('#hpBar').style.background = hp > .5 ? 'var(--acc)' : hp > .25 ? '#ffcf4a' : '#ff4f5e'; $('#hpTxt').textContent = Math.round(hp * 100) + '%';
  $('#heat').style.width = P.heat * 100 + '%'; $('#heat').style.background = P.over ? '#ff4f5e' : P.heat > .7 ? '#ffcf4a' : 'var(--acc)';
  $('#flr').textContent = P.flares; $('#thr').style.height = P.thr * 100 + '%'; $('#thr').classList.toggle('ab', !!P.ab);
  $('#baseBar').style.width = G.baseHp + '%'; $('#baseBar').style.background = G.baseHp > 50 ? '#7fd0ff' : G.baseHp > 25 ? '#ffcf4a' : '#ff4f5e'; $('#baseTxt').textContent = Math.round(G.baseHp) + '%';
}
function paintMsl() { $('#msl').innerHTML = Array.from({ length: P.mslMax }, (_, i) => `<i class="${i < P.msl ? 'on' : ''}"></i>`).join(''); P.obj.userData.msls.forEach((m, i) => m.visible = i < Math.min(P.msl, P.obj.userData.msls.length)); }
function flashBase() { const b = $('#baseWrap'); b.classList.remove('hit'); void b.offsetWidth; b.classList.add('hit'); }
function updateMFD(time) {
  if (!cockpit.visible || (time * 10 | 0) % 2) return; const [a, b] = cockpit.userData.mfds;
  let g = a.g; g.fillStyle = '#071007'; g.fillRect(0, 0, 128, 96); g.strokeStyle = '#3f7a2a'; g.beginPath(); g.arc(64, 54, 38, 0, 7); g.stroke(); g.fillStyle = '#b8f36b'; g.font = '10px monospace'; g.fillText('RDR', 6, 12);
  const f = fwdOf(P.q), hd = Math.atan2(f.x, -f.z); enemies.forEach(e => { if (e.dead) return; const dx = e.pos.x - P.pos.x, dz = e.pos.z - P.pos.z, an = Math.atan2(dx, -dz) - hd, d = Math.min(1, Math.hypot(dx, dz) / 4500) * 38; g.fillStyle = '#ff6a4a'; g.fillRect(64 + Math.sin(an) * d - 2, 54 - Math.cos(an) * d - 2, 4, 4); }); a.t.needsUpdate = true;
  g = b.g; g.fillStyle = '#071007'; g.fillRect(0, 0, 128, 96); g.fillStyle = '#b8f36b'; g.font = '11px monospace'; g.fillText('SMS', 6, 12); g.fillText(`MSL ${P.msl}/${P.mslMax}`, 10, 34); g.fillText(`FLR ${P.flares}`, 10, 50); g.fillText(`HULL ${Math.round(P.hp / P.maxHp * 100)}%`, 10, 66); g.fillStyle = P.over ? '#ff4f5e' : '#b8f36b'; g.fillRect(10, 76, 108 * P.heat, 6); b.t.needsUpdate = true;
  cockpit.userData.stick.rotation.z = -(P.input?.roll || 0) * .25; cockpit.userData.stick.rotation.x = .3 + (P.input?.pitch || 0) * .2;
}
function banner(t, s) { const b = $('#banner'); b.innerHTML = `<b>${t}</b><span>${s || ''}</span>`; b.classList.remove('on'); void b.offsetWidth; b.classList.add('on'); }

/* ======================================================= tutorial tips */
const TIPS_AIM = ['Move the mouse to aim. Your jet flies toward the white circle.', 'Hold LEFT CLICK to fire guns. Lead targets with the green pipper.', 'Keep a bandit near your aim until it says LOCK, then SPACE or RIGHT CLICK fires a missile.', 'Missile inbound? Press F to drop flares.', 'SHIFT is afterburner. V switches to the cockpit.', 'Defend the base in the middle of the map when bombers come.'];
const TIPS_TOUCH = ['Use the stick on the left to fly.', 'Hold GUN to shoot. Lead targets with the green pipper.', 'Keep a bandit in front until it says LOCK, then tap MSL.', 'Missile inbound? Tap FLR for flares.', 'Defend the base in the middle when bombers come.'];
let tipI = 0, tipT = 0;
function updateTips(dt) { if (!G.tips) return; tipT -= dt; if (tipT > 0) return; const list = TOUCH || S.control === 'stick' ? TIPS_TOUCH : TIPS_AIM; if (tipI >= list.length) { G.tips = false; $('#tip').classList.remove('on'); store.set('jkstrike-tut', 1); return; } $('#tip').textContent = list[tipI++]; $('#tip').classList.remove('on'); void $('#tip').offsetWidth; $('#tip').classList.add('on'); tipT = 6; }

/* ======================================================= game flow */
function startGame() {
  Sound.init(); if (menuJet) { scene.remove(menuJet); menuJet = null; }
  enemies.forEach(e => scene.remove(e.obj)); missiles.forEach(m => scene.remove(m.mesh)); enemies = []; missiles = []; flares = []; tracers.list = []; smoke.clear(); fire.clear(); trails.clear(); kills = []; events = [];
  P = makePlayer(); P.q.setFromRotationMatrix(tm.lookAt(P.pos, new THREE.Vector3(0, 800, 0), UP)); P.camQ.copy(P.q); syncAim();
  G = { mode: 'play', wave: 0, score: 0, kills: 0, shots: 0, hits: 0, combo: 0, comboT: 0, view: S.view, t: 0, baseHp: 100, cycle: 0, slow: 0, slowCd: 0, multi: 0, lastKill: -9, clearing: false, tips: !store.get('jkstrike-tut', 0) };
  setView(S.view, true); paintMsl(); $('#perks').innerHTML = ''; nextWave(); tipI = 0; tipT = 1.5;
  $$('.screen').forEach(e => e.classList.remove('on')); $('#play').classList.add('on'); document.body.classList.add('playing'); $('#help').style.opacity = 1; setTimeout(() => $('#help').style.opacity = 0, 9000);
  $('#clickfly').classList.remove('on'); if (S.control === 'aim' && !TOUCH) lockPointer();
}
function pause() {
  if (G.mode === 'play' && P.alive) { G.mode = 'paused'; $('#pause').classList.add('on'); Sound.silence(); document.body.classList.remove('playing'); $('#pView').textContent = G.view === 'first' ? 'Cockpit' : 'Chase'; if (document.pointerLockElement) document.exitPointerLock(); }
  else if (G.mode === 'paused') { G.mode = 'play'; $('#pause').classList.remove('on'); document.body.classList.add('playing'); if (S.control === 'aim' && !TOUCH) lockPointer(); }
}
function gameOver(reason) {
  if (G.mode === 'over') return; G.mode = 'over'; document.body.classList.remove('playing'); if (document.pointerLockElement) document.exitPointerLock(); Sound.silence();
  const best = store.get('jkstrike-best', 0), rec = G.score > best; if (rec) store.set('jkstrike-best', G.score);
  $('#oScore').textContent = G.score.toLocaleString(); $('#oTitle').textContent = rec && G.score > 0 ? 'New high score!' : reason === 'base' ? 'Base destroyed' : reason === 'crash' ? 'Crashed' : 'Shot down';
  $('#oStats').innerHTML = `<div><b>${G.wave}</b><span>Wave</span></div><div><b>${G.kills}</b><span>Kills</span></div><div><b>${G.shots ? Math.round(G.hits / G.shots * 100) : 0}%</b><span>Gun accuracy</span></div><div><b>${Math.max(best, G.score).toLocaleString()}</b><span>Best</span></div>`;
  $('#oPerks').innerHTML = P.perks.length ? P.perks.map(p => `<span>${p[1]} ${p[2]}</span>`).join('') : '';
  $('#over').classList.add('on');
}
function toMenu() { G = { mode: 'menu' }; enemies.forEach(e => scene.remove(e.obj)); missiles.forEach(m => scene.remove(m.mesh)); enemies = []; missiles = []; flares = []; tracers.list = []; events = []; if (P) { scene.remove(P.obj); P = null; } cockpit.visible = false; Sound.silence();
  $$('.modal').forEach(m => m.classList.remove('on')); $$('.screen').forEach(e => e.classList.remove('on')); $('#menu').classList.add('on'); document.body.classList.remove('playing'); $('#clickfly').classList.remove('on'); buildMenuJet(); renderMenu(); }
$('#pause').onclick = e => { const a = e.target.closest('[data-a]')?.dataset.a; if (!a) return; Sound.click(); if (a === 'resume') pause(); if (a === 'view') { toggleView(); $('#pView').textContent = G.view === 'first' ? 'Cockpit' : 'Chase'; } if (a === 'restart') { $('#pause').classList.remove('on'); startGame(); } if (a === 'menu') toMenu(); };
$('#over').onclick = e => { const a = e.target.closest('[data-a]')?.dataset.a; if (!a) return; Sound.click(); $('#over').classList.remove('on'); if (a === 'again') startGame(); else toMenu(); };
function muteT() { const on = Sound.toggle(); $('#snd').textContent = on ? '🔊' : '🔇'; }
$('#snd').onclick = () => { Sound.init(); muteT(); }; $('#snd').textContent = Sound.on ? '🔊' : '🔇';

/* ======================================================= menu */
function buildMenuJet() { if (menuJet) scene.remove(menuJet); menuJet = buildJet(S.jet, S.paint); menuJet.position.set(-900, 1150, 1800); menuJet.rotation.y = .6; scene.add(menuJet); menuJet.userData.msls.forEach(m => m.visible = true); }
function renderMenu() {
  $('#mJets').innerHTML = Object.entries(JETS).map(([k, j]) => `<button class="jcard ${S.jet === k ? 'on' : ''}" data-jet="${k}"><b>${j.name}</b><small>${j.blurb}</small>
    <div class="mini"><span>SPD</span><i style="--v:${j.speed * 80}%"></i><span>AGL</span><i style="--v:${j.agility * 75}%"></i><span>ARM</span><i style="--v:${j.hp / 1.6}%"></i><span>MSL</span><i style="--v:${j.missiles / .13}%"></i></div></button>`).join('');
  $('#mPaint').innerHTML = Object.entries(PAINTS).filter(([k]) => k !== 'red').map(([k, p]) => `<button class="sw ${S.paint === k ? 'on' : ''}" data-paint="${k}" title="${p[2]}" style="background:linear-gradient(135deg,${p[0]} 50%,${p[1]} 50%)"></button>`).join('');
  $('#mDiff').innerHTML = Object.entries(DIFF).map(([k, d]) => `<button class="chip ${S.diff === k ? 'on' : ''}" data-diff="${k}">${d.name}</button>`).join('');
  $('#mView').innerHTML = [['third', 'Chase'], ['first', 'Cockpit']].map(([k, n]) => `<button class="chip ${S.view === k ? 'on' : ''}" data-view="${k}">${n}</button>`).join('');
  $('#mCtrl').innerHTML = TOUCH ? '<span class="chip on">Touch stick</span>' : [['aim', 'Mouse aim (easiest)'], ['stick', 'Mouse joystick']].map(([k, n]) => `<button class="chip ${S.control === k ? 'on' : ''}" data-ctrl="${k}">${n}</button>`).join('') + [['low', 'Slow'], ['mid', 'Normal'], ['high', 'Fast']].map(([k, n]) => `<button class="chip ${S.sens === k ? 'on' : ''}" data-sens="${k}">${n}</button>`).join('');
  $('#mOpts').innerHTML = [['invert', 'Invert pitch'], ['assist', 'Flight assist + auto pull-up']].map(([k, n]) => `<button class="chip ${S[k] ? 'on' : ''}" data-opt="${k}">${S[k] ? '✓ ' : ''}${n}</button>`).join('');
  $('#mQual').innerHTML = [['auto', 'Auto'], ['high', 'High'], ['medium', 'Medium'], ['low', 'Low']].map(([k, n]) => `<button class="chip ${S.quality === k ? 'on' : ''}" data-qual="${k}">${n}</button>`).join('');
  $('#mBest').textContent = store.get('jkstrike-best', 0).toLocaleString();
}
$('#menu').onclick = e => { const b = e.target.closest('button'); if (!b) return; Sound.init(); Sound.click(); const d = b.dataset;
  if (d.jet) { S.jet = d.jet; buildMenuJet(); } if (d.paint) { S.paint = d.paint; buildMenuJet(); } if (d.diff) S.diff = d.diff; if (d.view) S.view = d.view; if (d.opt) S[d.opt] = !S[d.opt]; if (d.ctrl) S.control = d.ctrl; if (d.sens) S.sens = d.sens;
  if (d.qual) { S.quality = d.qual; saveS(); location.reload(); return; }
  if (b.id === 'mGo') { saveS(); startGame(); return; } saveS(); renderMenu(); };

/* ======================================================= loop */
function resize() { const w = innerWidth, h = innerHeight; renderer.setPixelRatio(PR); renderer.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); DPR = Math.min(devicePixelRatio || 1, 1.5); HW = w; HH = h; hud.width = w * DPR; hud.height = h * DPR; hud.style.width = w + 'px'; hud.style.height = h + 'px'; }
addEventListener('resize', resize); document.addEventListener('visibilitychange', () => { if (document.hidden && G.mode === 'play') pause(); });
function flameFx(o, k, ab) { const u = o.userData; if (!u.flames.length) return; if (u.flames[0].userData.b === undefined) u.flames.forEach(f => f.userData.b = f.scale.x);
  u.flames.forEach((f, i) => f.scale.set(f.userData.b, f.userData.b, f.userData.b * k * (i % 2 ? 1 : 1.12))); if (u.glowMat) u.glowMat.opacity = ab ? 1 : .6;
  if (u.flameMat && P && o === P.obj) { u.flameMat.opacity = ab ? .9 : .5; u.flameMat.color.set(ab ? '#ffb45e' : '#ff9a4a'); } }
let ftAvg = 16, adaptT = 0;
function adapt(dt) { if (S.quality !== 'auto') return; ftAvg = lerp(ftAvg, dt * 1000, .05); adaptT -= dt; if (adaptT > 0) return;
  const max = Math.min(devicePixelRatio || 1, QUAL.auto.max); let np = PR;
  if (ftAvg > 21 && PR > .6) np = Math.max(.6, PR - .15); else if (ftAvg < 14.5 && PR < max) np = Math.min(max, PR + .1);
  if (np !== PR) { PR = np; renderer.setPixelRatio(PR); renderer.setSize(innerWidth, innerHeight, false); adaptT = 2; } else adaptT = .5; }
const nzl = V(); let fxTick = 0;
function jetFx() { fxTick++;
  const trail = (o, pos, every) => { if (fxTick % every) return; o.userData.glows.forEach(gl => { nzl.copy(gl.position); o.userData.body.localToWorld(nzl); trails.emit(nzl.x, nzl.y, nzl.z, { size: 2.6, life: 5.5, color: [1, 1, 1], alpha: Math.min(.55, (pos.y - 1550) / 900), grow: 1.2, drag: 0 }); }); };
  if (P.alive && P.pos.y > 1600) trail(P.obj, P.pos, 1);
  enemies.forEach(e => { if (e.air && !e.dead && e.pos.y > 1600 && e.pos.distanceTo(P.pos) < 3500) trail(e.obj, e.pos, 2); });
  if (P.alive && P.alt < 90 && P.speed > 120 && fxTick % 2 === 0) { const f = fwdOf(P.q), x = P.pos.x - f.x * 25, z = P.pos.z - f.z * 25, y = terrain.height(x, z) + 3; smoke.emit(x, y, z, { size: 10 + Math.random() * 8, life: 2.6, color: [.86, .7, .5], alpha: .5 * (1 - P.alt / 90), spread: 14, grow: 1.4, vy: 10, drag: 1.2 }); }
}
let last = performance.now();
function frame(now) {
  requestAnimationFrame(frame); const rdt = (now - last) / 1000; let dt = Math.min(.05, rdt); last = now; const time = now / 1000; if (rdt < .2) adapt(rdt);
  if (G.mode === 'play') {
    if (G.slow > 0) { G.slow -= dt; dt *= .3; } G.slowCd -= dt;
    const n = Math.min(3, Math.ceil(dt * 60 - .01)); for (let i = 0; i < n; i++) step(dt / n); updateTips(dt);
  }
  if (G.mode === 'over' && P) P.deadT += dt;
  const focus = P ? P.pos : menuJet ? menuJet.position : V();
  if (P) { P.obj.position.copy(P.pos); P.obj.quaternion.copy(P.q); P.obj.userData.body.rotation.z = -(P.rate?.z || 0) * .04; flameFx(P.obj, P.ab ? 1.35 + Math.random() * .3 : .3 + P.thr * .45, P.ab); P.obj.userData.strobe.visible = (time * 1.4 % 1) < .08; }
  if (menuJet) { menuJet.position.y = 1150 + Math.sin(time * .8) * 2; menuJet.userData.body.rotation.z = Math.sin(time * .6) * .06; flameFx(menuJet, .45 + Math.random() * .08, false); }
  enemies.forEach(e => { e.obj.position.copy(e.pos); e.obj.quaternion.copy(e.q); if (e.air) { flameFx(e.obj, .55 + Math.random() * .15, false); e.obj.userData.strobe.visible = (time * 1.2 + e.id) % 1 < .08; } });
  base.userData.radar.rotation.y = time * 1.2;
  flashes.forEach(f => { if (f.t <= 0) return; f.t -= dt; f.l.intensity = f.t <= 0 ? 0 : f.l.intensity * Math.exp(-dt * 9); });
  updateCamera(dt);
  sun.position.copy(focus).addScaledVector(sunDir, 1200); sun.target.position.copy(focus); skyDome.position.copy(cam.position);
  const camH = renderer.domElement.height / (2 * Math.tan(cam.fov * Math.PI / 360)); smoke.update(dt, FOG, camH * 2); fire.update(dt, FOG, camH * 2); trails.update(dt, FOG, camH * 2); cloudPts.material.uniforms.scale.value = camH;
  if (G.mode === 'play') jetFx();
  tracers.draw();
  if (P && G.mode === 'play') Sound.engine(P.alive ? P.thr : 0, P.ab && P.alive, P.alive ? P.speed : 0, G.view === 'first');
  if (G.mode === 'play' && S.control === 'aim' && !TOUCH && (fxTick % 30 === 0)) $('#clickfly').classList.toggle('on', !document.pointerLockElement);
  if (G.mode === 'play' || G.mode === 'paused') { drawHUD(G.mode === 'play' ? dt : 0, time); updateMFD(time); } else hg.clearRect(0, 0, hud.width, hud.height);
  renderer.render(scene, cam);
}
resize(); toMenu();
warmUp(); { const tmp = ['viper', 'raptor', 'striker'].map(t => buildJet(t, 'red', true)).concat([buildBomber(false), buildBomber(true), buildUnit('sam'), buildUnit('aa')]), m = missileMesh(); tmp.forEach((o, i) => { o.position.set(i * 60, 1200, 0); scene.add(o); }); scene.add(m); fire.emit(0, 1200, 0, { must: true }); smoke.emit(0, 1200, 0, { must: true }); trails.emit(0, 1200, 0, { must: true });
  try { renderer.compile(scene, cam); } catch (e) {} tmp.forEach(o => scene.remove(o)); scene.remove(m); }
requestAnimationFrame(frame);
setTimeout(() => { const l = $('#loading'); l.style.opacity = 0; l.style.pointerEvents = 'none'; setTimeout(() => l.remove(), 600); }, 200);
window.__jet = { renderer, scene, cam, get menuJet() { return menuJet; }, get G() { return G; }, get P() { return P; }, get enemies() { return enemies; }, step, startGame, fireMissile, dropFlares, toggleView, choosePerk, S, keys, mouse, aim };
