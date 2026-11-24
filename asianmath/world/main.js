// The Back Room 3D: walk the casino floor, see who else is here, sit down at any game.
// The games themselves are the same ones as before (core.js + games-*.js); this file is the world around them.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildCasino, HALL, yawTo } from './scene.js';
import { makeAvatar, randomLook, OUTFITS, HATS, COLORS, SKINS, HAIRS, EMOTES, nameColor } from './avatar.js';
import { setGlowScale, carpetTex, canvasTex, rr, FONT, SERIF } from './tex.js';
import { createNet } from './net.js';

const Q = s => document.querySelector(s), QA = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clampN = (v, a, b) => Math.max(a, Math.min(b, v));
const TOUCH = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ICON = { bj: '🃏', bacc: '🎴', vpoker: '🂡', roul: '🎡', slots: '🎰', wheel: '☸', keno: '🔢', scratch: '🎟', crash: '🚀', dice: '🎲', coin: '🪙', plinko: '🔻', mines: '💎', tower: '🗼', derby: '🏇', __cashier: '💵' };

/* ================================================= settings */
const KEYDEF = { fwd: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD', run: 'ShiftLeft', jump: 'Space', use: 'KeyE', cam: 'KeyV', map: 'KeyM', emote: 'KeyG', chat: 'KeyT', players: 'Tab', help: 'KeyH', full: 'KeyF' };
const KEYNAMES = { fwd: 'Move forward', back: 'Move back', left: 'Strafe left', right: 'Strafe right', run: 'Run', jump: 'Jump', use: 'Play / interact', cam: 'Switch camera', map: 'Game directory', emote: 'Emote wheel', chat: 'Open chat', players: 'Who\'s here', help: 'Controls help', full: 'Fullscreen' };
const LAYOUTS = { wasd: ['WASD', { fwd: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD' }], esdf: ['ESDF', { fwd: 'KeyE', back: 'KeyD', left: 'KeyS', right: 'KeyF', use: 'KeyR', full: 'KeyJ' }], zqsd: ['ZQSD (AZERTY)', { fwd: 'KeyW', back: 'KeyS', left: 'KeyA', right: 'KeyD' }], ijkl: ['IJKL', { fwd: 'KeyI', back: 'KeyK', left: 'KeyJ', right: 'KeyL', use: 'KeyU', help: 'KeyY' }] };
const PRESETS = {
  potato: { name: 'Potato', cap: 1, scale: .5, shadows: 0, bloom: false, lights: 0, post: false, msaa: false, dist: 45 },
  low: { name: 'Low', cap: 1, scale: .75, shadows: 0, bloom: false, lights: 2, post: true, msaa: false, dist: 60 },
  medium: { name: 'Medium', cap: 1.25, scale: 1, shadows: 1, bloom: true, lights: 4, post: true, msaa: false, dist: 75 },
  high: { name: 'High', cap: 1.5, scale: 1, shadows: 2, bloom: true, lights: 7, post: true, msaa: false, dist: 90 },
  ultra: { name: 'Ultra', cap: 2, scale: 1, shadows: 3, bloom: true, lights: 10, post: true, msaa: true, dist: 120 },
};
const ORDER = ['potato', 'low', 'medium', 'high', 'ultra'];
const STYLES = {
  vegas: { name: 'Vegas Gold', desc: 'Warm brass, red velvet, chandeliers', sw: ['#e8c46a', '#7a0f1c', '#0d4a35'], hemi: [0xffe6c0, 0x2a0d08, .45], amb: .14, key: [0xffe2b8, .6], pt: 1, fog: [0x140906], glow: 1.35, bloom: [.7, .45, 1.55], exp: 1.2, g: { sat: 1.08, con: 1.05, bri: 1, sh: [1, .96, .92], hi: [1.04, 1, .94], vig: .35, grain: .025 }, carpet: ['#3a0b14', '#b8892e', '#0f5a4a', '#5a1420'] },
  neon: { name: 'Neon Nights', desc: 'Blacklight carpet, everything glows', sw: ['#ff2bd6', '#00e5ff', '#2a0a5a'], hemi: [0x6a5cff, 0x05030f, .32], amb: .06, key: [0x9a8cff, .4], pt: .9, ptTint: 0xc080ff, fog: [0x05030f], glow: 1.9, bloom: [.85, .45, .95], exp: 1, g: { sat: 1.3, con: 1.12, bri: 1, sh: [.85, .9, 1.2], hi: [1.1, .95, 1.15], vig: .5, grain: .02 }, carpet: ['#0b0620', '#ff2bd6', '#00e5ff', '#2a0a5a'] },
  noir: { name: 'Film Noir', desc: 'Black & white, grain, hard shadows', sw: ['#f2f2f2', '#777', '#111'], hemi: [0xffffff, 0x101010, .55], amb: .12, key: [0xffffff, 1.1], pt: .8, fog: [0x050505], glow: 1.3, bloom: [.5, .4, 1.5], exp: 1.05, g: { sat: 0, con: 1.38, bri: 1.05, sh: [1, 1, 1], hi: [1, 1, 1], vig: .8, grain: .11 }, carpet: ['#3a0b14', '#b8892e', '#0f5a4a', '#5a1420'] },
  retro: { name: 'Retro 8-Bit', desc: 'Chunky pixels, limited palette', sw: ['#ffd36b', '#ff4d6d', '#57c7ff'], hemi: [0xffe6c0, 0x2a0d08, .6], amb: .2, key: [0xffe2b8, .7], pt: 1, fog: [0x140906], glow: 1.35, bloom: [.35, .3, 1.5], exp: 1.15, g: { sat: 1.3, con: 1.15, bri: 1, sh: [1, 1, 1], hi: [1, 1, 1], post: 7, vig: .2 }, pixel: .3, carpet: ['#3a0b14', '#d8a93e', '#108a6a', '#6a1424'] },
  vapor: { name: 'Vaporwave', desc: 'Pink & teal, scanlines, 1986 forever', sw: ['#ff71ce', '#01cdfe', '#b967ff'], hemi: [0xff9ae0, 0x1a0040, .55], amb: .14, key: [0xffb0f0, .55], pt: .9, ptTint: 0xff8ae0, fog: [0x2a0a4a], glow: 1.6, bloom: [.9, .5, 1.3], exp: 1.08, g: { sat: 1.15, con: 1.05, bri: 1.02, sh: [.6, .95, 1.25], hi: [1.25, .8, 1.1], scan: .22, vig: .4, grain: .03 }, carpet: ['#2a0a4a', '#ff71ce', '#01cdfe', '#b967ff'] },
  day: { name: 'Daylight', desc: 'Bright and clear. Easiest to see', sw: ['#fff3c4', '#e8c46a', '#57c7ff'], hemi: [0xfff6e6, 0x8a6a5a, 1.7], amb: .7, key: [0xffffff, 1.6], pt: .7, fog: [0x4a3a30], glow: .8, bloom: [.25, .3, 1.4], exp: 1.4, g: { sat: 1.05, con: 1, bri: 1.05, sh: [1, 1, 1], hi: [1, 1, 1], vig: .1 }, carpet: ['#5a1a24', '#d8a93e', '#1a7a6a', '#7a2a34'] },
};
const DEF = {
  quality: 'auto', style: 'vegas', scale: 1, shadows: 2, bloom: true, lights: 7, fpsCap: 0, showFps: false, dist: 90, msaa: false,
  control: TOUCH ? 'drag' : 'mouse', cam: 'third', sens: 1, invertY: false, fov: 70, camDist: 4.2, run: 'hold', bob: !REDUCED, touch: 'auto', joySide: 'left', padSens: 1,
  keys: { ...KEYDEF }, arrows: true, layout: 'wasd',
  names: true, others: true, minimap: true, labels: true, hudScale: 1, look: null, lobby2d: false, seenHelp: false,
};
const S = (() => { let s = {}; try { s = JSON.parse(localStorage.getItem('br3d') || '{}'); } catch (e) {} return { ...DEF, ...s, keys: { ...KEYDEF, ...(s.keys || {}) } }; })();
if (!S.look) S.look = randomLook(Math.random());
const save = () => { try { localStorage.setItem('br3d', JSON.stringify(S)); } catch (e) {} };
let autoTier = TOUCH ? 'low' : 'high';
const tierName = () => S.quality === 'auto' ? autoTier : S.quality;

/* ================================================= bail out to the 2D lobby if 3D can't run */
function webglOK() { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch (e) { return false; } }
function classicButton() { if (Q('#to3d')) return; const b = document.createElement('button'); b.id = 'to3d'; b.className = 'to3d'; b.innerHTML = '<b>Enter the 3D casino</b><span>Walk the floor with other players</span>'; b.onclick = () => { S.lobby2d = false; save(); location.reload(); }; Q('#lobby').prepend(b); }
if (S.lobby2d || !webglOK()) { document.body.classList.remove('w-loading'); classicButton(); if (!webglOK()) Q('#to3d').hidden = true; throw new Error('3D floor disabled'); }
document.body.classList.add('world');

/* ================================================= renderer + scene */
const canvas = document.createElement('canvas'); canvas.id = 'w3d'; document.body.prepend(canvas);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !TOUCH, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, .05, 200);
{ const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(renderer), .04).texture; pm.dispose(); }
scene.environmentIntensity = .35;
const W = buildCasino(scene);
// keep image-based reflections subtle: metals shine, cloth and stone stay matte
scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => { if (m.isMeshStandardMaterial) m.envMapIntensity = m.metalness > .5 ? .55 : .2; }); });
const hemi = new THREE.HemisphereLight(0xffe6c0, 0x2a0d08, .5); scene.add(hemi);
const amb = new THREE.AmbientLight(0xffffff, .16); scene.add(amb);
const key = new THREE.DirectionalLight(0xffe2b8, .85); key.position.set(14, 26, 12); key.target.position.set(0, 0, 0); scene.add(key, key.target);
Object.assign(key.shadow.camera, { left: -33, right: 33, top: 26, bottom: -26, near: 2, far: 70 }); key.shadow.bias = -.0004; key.shadow.normalBias = .03;
const pointPool = []; for (let i = 0; i < 10; i++) { const p = new THREE.PointLight(0xffd59a, 0, 10, 2); p.visible = false; scene.add(p); pointPool.push(p); }
const spots = [...W.pointSpots].sort((a, b) => (b.i * b.d) - (a.i * a.d));

/* post */
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, sat: { value: 1 }, con: { value: 1 }, bri: { value: 1 }, sh: { value: new THREE.Vector3(1, 1, 1) }, hi: { value: new THREE.Vector3(1, 1, 1) }, post: { value: 0 }, grain: { value: 0 }, vig: { value: 0 }, scan: { value: 0 }, time: { value: 0 }, res: { value: new THREE.Vector2(1, 1) } },
  vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float sat,con,bri,post,grain,vig,scan,time;uniform vec3 sh,hi;uniform vec2 res;varying vec2 vUv;
  float hs(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
  void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,sat);c=(c-.5)*con+.5;c*=bri;c*=mix(sh,hi,smoothstep(.1,.9,l));
  if(post>0.)c=floor(c*post+.5)/post;if(scan>0.)c*=1.-scan*(.5+.5*sin(vUv.y*res.y*1.6));c+=(hs(floor(vUv*res)+fract(time))-.5)*grain;vec2 d=vUv-.5;c*=1.-vig*dot(d,d)*1.7;gl_FragColor=vec4(clamp(c,0.,1.),1.);}`,
};
let composer = null, bloom = null, grade = null, usePost = true, composerMsaa = null;
function buildComposer(msaa) {
  if (composer && composerMsaa === msaa) return; composerMsaa = msaa;
  if (composer) composer.dispose();
  const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: msaa ? 4 : 0 });
  composer = new EffectComposer(renderer, rt);
  composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth / 2, innerHeight / 2), .7, .45, .82); composer.addPass(bloom);
  composer.addPass(new OutputPass());
  grade = new ShaderPass(GradeShader); composer.addPass(grade);
}

/* ================================================= applying graphics settings */
let pixelRatio = 1;
function applyGraphics() {
  const t = tierName(), P = PRESETS[t] || PRESETS.high;
  if (S.quality !== 'custom') Object.assign(S, { scale: P.scale, shadows: P.shadows, bloom: P.bloom, lights: P.lights, dist: P.dist, msaa: P.msaa });
  const st = STYLES[S.style] || STYLES.vegas;
  usePost = S.quality === 'custom' ? true : P.post !== false;
  const cap = S.quality === 'custom' ? 2 : P.cap;
  pixelRatio = Math.min(devicePixelRatio || 1, cap) * S.scale * (st.pixel || 1);
  canvas.classList.toggle('px', !!st.pixel);
  renderer.setPixelRatio(pixelRatio);
  // shadows
  const sh = S.shadows | 0, had = renderer.shadowMap.enabled;
  renderer.shadowMap.enabled = sh > 0; key.castShadow = sh > 0;
  const ms = [0, 1024, 2048, 4096][sh];
  if (sh > 0 && key.shadow.mapSize.x !== ms) { key.shadow.mapSize.set(ms, ms); if (key.shadow.map) { key.shadow.map.dispose(); key.shadow.map = null; } }
  if (had !== renderer.shadowMap.enabled) scene.traverse(o => { if (o.material) [].concat(o.material).forEach(m => m.needsUpdate = true); });
  // lights
  const n = clampN(S.lights | 0, 0, 10), tint = st.ptTint ? new THREE.Color(st.ptTint) : null;
  pointPool.forEach((p, i) => { const s = spots[i]; p.visible = i < n && !!s; if (!s) return; p.position.set(s.x, s.y, s.z); p.color.setHex(s.c); if (tint) p.color.lerp(tint, .5); p.intensity = s.i * 2.2 * st.pt * (S.style === 'day' ? .6 : 1); p.distance = s.d * 1.6; p.decay = 1.6; });
  // style
  hemi.color.setHex(st.hemi[0]); hemi.groundColor.setHex(st.hemi[1]); hemi.intensity = st.hemi[2] + (n < 3 ? .25 : 0);
  amb.intensity = st.amb + (n < 3 ? .1 : 0); key.color.setHex(st.key[0]); key.intensity = st.key[1];
  scene.fog = new THREE.Fog(st.fog[0], S.dist * .35, S.dist); scene.background = new THREE.Color(st.fog[0]); camera.far = S.dist + 10; camera.updateProjectionMatrix();
  renderer.toneMappingExposure = st.exp;
  setGlowScale(st.glow, S.style === 'noir' ? null : null);
  if (W.carpetMat.userData.style !== S.style) { const old = W.carpetMat.map; W.carpetMat.map = carpetTex(st.carpet); W.carpetMat.map.anisotropy = renderer.capabilities.getMaxAnisotropy() > 8 ? 8 : 4; W.carpetMat.needsUpdate = true; W.carpetMat.userData.style = S.style; old && old.dispose(); }
  if (usePost) {
    buildComposer(!!S.msaa);
    bloom.enabled = !!S.bloom; bloom.strength = st.bloom[0]; bloom.radius = st.bloom[1]; bloom.threshold = st.bloom[2];
    const g = st.g, u = grade.uniforms; u.sat.value = g.sat ?? 1; u.con.value = g.con ?? 1; u.bri.value = g.bri ?? 1; u.sh.value.set(...(g.sh || [1, 1, 1])); u.hi.value.set(...(g.hi || [1, 1, 1])); u.post.value = g.post || 0; u.grain.value = g.grain || 0; u.vig.value = g.vig || 0; u.scan.value = g.scan || 0;
  }
  camera.fov = S.fov; camera.updateProjectionMatrix();
  resize(); hudRefresh();
}
function resize() {
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  if (composer) { composer.setPixelRatio(pixelRatio); composer.setSize(w, h); grade.uniforms.res.value.set(w * pixelRatio, h * pixelRatio); }
}
addEventListener('resize', resize);

/* ================================================= me */
const guestName = (() => { try { let g = localStorage.getItem('br3d-guest'); if (!g) { g = 'Guest' + (1000 + Math.floor(Math.random() * 9000)); localStorage.setItem('br3d-guest', g); } return g; } catch (e) { return 'Guest'; } })();
const myName = () => (window.Acct && Acct.user) || guestName;
const me = makeAvatar(S.look, { name: myName() }); scene.add(me.root);
const P = { x: 0, z: 18.5, y: 0, vy: 0, yaw: 0, face: 0, pitch: -.18, vx: 0, vz: 0, speed: 0, emote: 0, emoteT: 0, game: null, seat: -1, sit: false, auto: null, runToggle: false };
let camYaw = 0, camDist = S.camDist, camMode = S.cam;
me.root.position.set(P.x, 0, P.z);

/* ================================================= other players */
const others = new Map();
let netStatus = 'connecting', booted = false;
function addOther(m) {
  if (others.has(m.i)) return updOther(m);
  const av = makeAvatar(m.l || randomLook(m.i), { name: m.n || 'Player' }); av.setName(m.n || 'Player', m.g ? statusFor(m.g) : '', m.a, m.gu);
  const o = { av, meta: m, x: 0, z: 18, y: 0, r: 0, tx: 0, tz: 18, ty: 0, tr: 0, s: 0, e: 0, g: m.g || 0, st: -1, seen: performance.now(), fresh: true };
  scene.add(av.root); av.root.visible = S.others; others.set(m.i, o); refreshPlayers();
}
function updOther(m) { const o = others.get(m.i); if (!o) return addOther(m); o.meta = m; if (m.l) o.av.setLook(m.l); o.av.setName(m.n || 'Player', m.g ? statusFor(m.g) : '', m.a, m.gu); o.g = m.g || 0; refreshPlayers(); }
function dropOther(id) { const o = others.get(id); if (!o) return; scene.remove(o.av.root); o.av.dispose(); others.delete(id); refreshPlayers(); }
const statusFor = g => { const s = W.stations.find(x => x.id === g); return s ? (ICON[g] || '🎲') + ' ' + s.name : ''; };
const net = createNet({
  onJoin: m => { addOther(m); if (booted && m.n) toastW(`${m.n} walked in`); },
  onLeave: id => dropOther(id),
  onMeta: m => updOther(m),
  onPos: p => { let o = others.get(p.i); if (!o) return; o.tx = p.x; o.tz = p.z; o.ty = p.y; o.tr = p.r; o.s = p.s; o.seen = performance.now(); if (p.e !== o.e) { o.e = p.e; if (p.e) { const E = EMOTES[p.e - 1]; E && o.av.say(E[1], true); } } o.g = p.g || 0; o.st = p.st; if (o.fresh) { o.x = p.x; o.z = p.z; o.r = p.r; o.fresh = false; } },
  onFx: p => { const o = others.get(p.i); if (!o) return; coinBurst(o.av.root.position, Math.min(80, 20 + (p.m || 2) * 3)); o.av.say(`🎉 ${p.m >= 100 ? Math.round(p.m) : (+p.m).toFixed(1)}× · ${bigMoney(p.amt)}`); },
  onStatus: (s, n) => { netStatus = s; Q('#wcount') && (Q('#wcount').textContent = s === 'live' ? n : '–'); Q('#wnet') && Q('#wnet').classList.toggle('off', s !== 'live'); },
});
function myMeta() { return { n: myName(), l: S.look, g: P.game || 0, a: !!(window.Acct && Acct.admin), gu: !(window.Acct && Acct.user) }; }
function pushMeta() { net.setMeta(myMeta()); me.setName(myName(), P.game ? statusFor(P.game) : '', window.Acct && Acct.admin, !(window.Acct && Acct.user)); }
addEventListener('acct', pushMeta);
const bigMoney = n => { n = Number(n) || 0; const U = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi']; let i = 0; while (n >= 1000 && i < U.length - 1) { n /= 1000; i++; } return '$' + (i ? (n >= 100 ? n.toFixed(0) : n.toFixed(1)) : Math.round(n).toLocaleString()) + U[i]; };

/* ================================================= 3D coin bursts (wins) */
const COINS = 160, coinMesh = new THREE.InstancedMesh(new THREE.CylinderGeometry(.08, .08, .015, 14), new THREE.MeshStandardMaterial({ color: 0xe8c46a, metalness: 1, roughness: .25, emissive: 0x3a2400 }), COINS);
coinMesh.frustumCulled = false; scene.add(coinMesh);
const coinP = Array.from({ length: COINS }, () => ({ life: 0, p: new THREE.Vector3(0, -50, 0), v: new THREE.Vector3(), r: new THREE.Euler(), w: new THREE.Vector3() })); let coinI = 0;
const _o = new THREE.Object3D();
function coinBurst(at, n = 40) { for (let i = 0; i < n; i++) { const c = coinP[coinI++ % COINS]; c.life = 2 + Math.random(); c.p.set(at.x, 2.3 + (at.y || 0), at.z); c.v.set((Math.random() - .5) * 3, 4 + Math.random() * 4, (Math.random() - .5) * 3); c.w.set(Math.random() * 12, Math.random() * 12, 0); } }
function updCoins(dt) { for (let i = 0; i < COINS; i++) { const c = coinP[i]; if (c.life > 0) { c.life -= dt; c.v.y -= 12 * dt; c.p.addScaledVector(c.v, dt); if (c.p.y < .02) { c.p.y = .02; c.v.y *= -.35; c.v.x *= .6; c.v.z *= .6; } c.r.x += c.w.x * dt; c.r.y += c.w.y * dt; if (c.life <= 0) c.p.y = -50; } _o.position.copy(c.p); _o.rotation.copy(c.r); _o.updateMatrix(); coinMesh.setMatrixAt(i, _o.matrix); } coinMesh.instanceMatrix.needsUpdate = true; }

/* hook wins: my avatar celebrates for everyone else */
if (typeof window.settle === 'function') {
  const orig = window.settle;
  window.settle = function (bet, payout, ...rest) { const net_ = orig.call(this, bet, payout, ...rest); try { const m = bet ? payout / bet : 0; if (net_ > 0 && m >= 5) { net.fx({ m: Math.round(m * 10) / 10, amt: Math.round(payout), g: P.game || 0 }); coinBurst(me.root.position, 30); } } catch (e) {} return net_; };
}

/* ================================================= HUD */
const hud = document.createElement('div'); hud.id = 'whud';
hud.innerHTML = `
  <div class="wtl"><button class="wbtn" id="wplayers" title="Who's here (Tab)"><i id="wnet" class="wdot off"></i><b id="wcount">–</b><span>on the floor</span></button>
    <button class="wbtn ic" id="wmapb" title="Game directory (M)">🗺<span>Games</span></button><button class="wbtn ic" id="wlbb" title="Leaderboard">🏆<span>Board</span></button><button class="wbtn ic" id="wemb" title="Emotes (G)">😀<span>Emote</span></button><button class="wbtn ic" id="wsetb" title="Settings">⚙<span>Settings</span></button></div>
  <canvas id="wmini" width="240" height="176" title="Click to walk there"></canvas>
  <div class="wprompt" id="wprompt" hidden><div class="wpk" id="wpkey">E</div><div><b id="wpname"></b><small id="wpsub"></small></div></div>
  <div class="wcross" id="wcross"></div>
  <div class="wfps" id="wfps" hidden></div>
  <div class="wlock" id="wlock" hidden><b>Click to look around</b><span id="wlocks"></span></div>
  <div class="wfade" id="wfade"></div>
  <div class="wtoasts" id="wtoasts"></div>
  <div class="wwheel" id="wwheel" hidden></div>
  <div id="wtouch" hidden><div class="wjoy" id="wjoy"><i></i></div><div class="wtbtns"><button id="wtplay" class="tplay" hidden>PLAY</button><button id="wtjump">⤒</button><button id="wtemote">😀</button><button id="wtcam">🎥</button></div></div>`;
document.body.appendChild(hud);
const backB = Q('#back'); if (backB) backB.innerHTML = '‹ Casino floor';

// panels
const panel = document.createElement('div'); panel.id = 'wpanel'; panel.hidden = true; document.body.appendChild(panel);
let panelKind = null;
function openPanel(kind, html, cls = '') {
  panelKind = kind; panel.className = 'wp ' + cls; panel.innerHTML = `<div class="wpbox"><button class="wpx" aria-label="Close">×</button>${html}</div>`; panel.hidden = false;
  panel.querySelector('.wpx').onclick = closePanel; panel.onclick = e => { if (e.target === panel) closePanel(); };
  if (document.pointerLockElement) document.exitPointerLock();
}
function closePanel() { if (panelKind === 'lb') { const lb = Q('#lb'); if (lb) lbHome.append(lb); const ps = Q('.pstats'); if (ps) lbHome.prepend(ps); } panel.hidden = true; panelKind = null; panel.innerHTML = ''; previewCam = false; }
const lbHome = document.createElement('div'); lbHome.hidden = true; document.body.appendChild(lbHome);
setTimeout(() => { const lb = Q('#lb'); if (lb) lbHome.append(lb); const ps = Q('.pstats'); if (ps) lbHome.prepend(ps); }, 0);

function toastW(m) { const t = document.createElement('div'); t.className = 'wtoast'; t.textContent = m; Q('#wtoasts').appendChild(t); setTimeout(() => t.classList.add('out'), 3200); setTimeout(() => t.remove(), 3700); }

/* --- directory */
function openDirectory() {
  const cats = [['Table Games', ['bj', 'bacc', 'roul', 'vpoker']], ['Slots & Wheels', ['slots', 'wheel', 'keno', 'scratch']], ['The Arcade', ['crash', 'dice', 'coin', 'plinko', 'mines', 'tower', 'derby']]];
  const cnt = id => [...others.values()].filter(o => o.g === id).length;
  const html = `<h2>Game Directory</h2><p class="wpsub">Every game on the floor. <b>Walk</b> strolls you over, <b>Play</b> sits you straight down.</p>` + cats.map(([c, ids]) => `<h4>${c}</h4><div class="wdir">${ids.map(id => { const g = GAMES.find(x => x.id === id); if (!g) return ''; const n = cnt(id);
    return `<div class="wdc"><div class="wdi">${ICON[id]}</div><div class="wdt"><b>${esc(g.name)}</b><span>${esc(g.desc)}</span>${n ? `<em>${n} playing</em>` : ''}</div><div class="wdb"><button data-walk="${id}">Walk</button><button class="go" data-play="${id}">Play</button></div></div>`; }).join('')}</div>`).join('')
    + `<div class="wdc wcash"><div class="wdi">💵</div><div class="wdt"><b>Cashier</b><span>Your account, and a free $1,000 when you're broke.</span></div><div class="wdb"><button data-walk="__cashier">Walk</button></div></div>`;
  openPanel('dir', html, 'wide');
  panel.querySelectorAll('[data-walk]').forEach(b => b.onclick = () => { closePanel(); walkTo(nearestStation(b.dataset.walk)); });
  panel.querySelectorAll('[data-play]').forEach(b => b.onclick = () => { closePanel(); const st = nearestStation(b.dataset.play); teleport(st.x, st.z, () => play(st)); });
}
function nearestStation(id) { let best = null, bd = 1e9; for (const s of W.stations) if (s.id === id) { const d = (s.x - P.x) ** 2 + (s.z - P.z) ** 2; if (d < bd) { bd = d; best = s; } } return best; }

/* --- players */
function openPlayers() {
  const rows = [[myName() + ' (you)', P.game, S.look, true], ...[...others.values()].map(o => [o.meta.n || 'Player', o.g, o.meta.l, false, o])];
  openPanel('players', `<h2>On the floor <small>${rows.length}</small></h2><p class="wpsub">${netStatus === 'live' ? 'Everyone in every copy of the casino, live.' : 'Connecting to the floor… you might be the only one here for now.'}</p><ul class="wpl">${rows.map(([n, g, l, mine, o], i) => `<li><i style="background:${esc(l?.suit || '#333')}"></i><b style="color:${mine ? '#e8c46a' : nameColor(n)}">${esc(n)}</b><span>${g ? esc(statusFor(g)) : 'Walking around'}</span>${mine ? '' : `<button data-i="${i}">Go to</button>`}</li>`).join('')}</ul>`);
  panel.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { const o = rows[+b.dataset.i][4]; closePanel(); if (o) teleport(o.x + 1, o.z + 1); });
}
function refreshPlayers() { if (panelKind === 'players') openPlayers(); }

/* --- leaderboard (reuses account.js's board) */
function openBoard() { openPanel('lb', '<div id="wlbin"></div>'); const lb = Q('#lb'), ps = Q('.pstats'); const box = Q('#wlbin'); if (ps) box.append(ps); if (lb) box.append(lb); if (window.Acct) Acct.board(); }

/* --- emote wheel */
function openWheel() {
  const w = Q('#wwheel'); if (!w.hidden) { w.hidden = true; return; }
  w.innerHTML = EMOTES.map(([k, e, n], i) => { const a = i / EMOTES.length * Math.PI * 2 - Math.PI / 2; return `<button style="--x:${Math.cos(a) * 110}px;--y:${Math.sin(a) * 110}px" data-e="${i + 1}"><span>${e}</span><small>${n}<kbd>${i + 1}</kbd></small></button>`; }).join('') + '<div class="wwc">Emote</div>';
  w.hidden = false; if (document.pointerLockElement) document.exitPointerLock();
  w.querySelectorAll('button').forEach(b => b.onclick = () => { emote(+b.dataset.e); w.hidden = true; });
}
function emote(i) { if (P.game) return; P.emote = i; P.emoteT = EMOTES[i - 1][0] === 'dance' ? 12 : 3.2; me.say(EMOTES[i - 1][1], true); net.sendPos(posPacket(), true); }

/* ================================================= settings UI */
const seg = (name, opts, val) => `<div class="wseg" data-k="${name}">${opts.map(([v, l]) => `<button data-v="${v}" class="${String(val) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
const tog = (name, val) => `<button class="wtog ${val ? 'on' : ''}" data-tog="${name}"><i></i></button>`;
const rng = (name, min, max, step, val, fmt = v => v) => `<div class="wrng"><input type="range" data-r="${name}" min="${min}" max="${max}" step="${step}" value="${val}"><output>${fmt(val)}</output></div>`;
const row = (label, ctl, hint) => `<div class="wrow"><div><b>${label}</b>${hint ? `<small>${hint}</small>` : ''}</div>${ctl}</div>`;
const KL = { ShiftLeft: 'Shift', ShiftRight: 'R-Shift', ControlLeft: 'Ctrl', ControlRight: 'R-Ctrl', AltLeft: 'Alt', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Space: 'Space', Tab: 'Tab', Enter: 'Enter', Backquote: '`', Semicolon: ';', Comma: ',', Period: '.', Slash: '/' };
const keyLabel = c => !c ? '—' : KL[c] || c.replace(/^Key/, '').replace(/^Digit/, '').replace(/^Numpad/, 'Num ');
let setTab = 'graphics', previewCam = false, rebinding = null;
function openSettings(tab) {
  setTab = tab || setTab;
  const t = tierName(), tabs = [['graphics', '🖥 Graphics'], ['controls', '🎮 Controls'], ['keys', '⌨ Keys'], ['avatar', '🕴 Avatar'], ['display', '👁 Display']];
  let body = '';
  if (setTab === 'graphics') body = `
    <h4>Quality</h4>${seg('quality', [['auto', 'Auto'], ...ORDER.map(k => [k, PRESETS[k].name]), ['custom', 'Custom']], S.quality)}
    <p class="wnote">${S.quality === 'auto' ? `Auto picked <b>${PRESETS[t].name}</b> for this device and lowers it if things get choppy.` : S.quality === 'custom' ? 'Custom: tweak everything below.' : `${PRESETS[t].name} preset. Change anything below to go custom.`}</p>
    <h4>Visual style</h4><div class="wstyles">${Object.entries(STYLES).map(([k, s]) => `<button data-style="${k}" class="${S.style === k ? 'on' : ''}"><span class="sw">${s.sw.map(c => `<i style="background:${c}"></i>`).join('')}</span><b>${s.name}</b><small>${s.desc}</small></button>`).join('')}</div>
    <h4>Fine tuning</h4>
    ${row('Render scale', rng('scale', .3, 1.5, .05, S.scale, v => Math.round(v * 100) + '%'), 'Lower = faster, blurrier')}
    ${row('Shadows', seg('shadows', [[0, 'Off'], [1, 'Low'], [2, 'High'], [3, 'Ultra']], S.shadows))}
    ${row('Bloom glow', tog('bloom', S.bloom), 'Neon and lights bleed light')}
    ${row('Anti-aliasing', tog('msaa', S.msaa), 'Smoother edges (MSAA ×4)')}
    ${row('Dynamic lights', rng('lights', 0, 10, 1, S.lights), 'Chandelier and table lamps')}
    ${row('View distance', rng('dist', 30, 140, 5, S.dist, v => v + ' m'))}
    ${row('Frame cap', seg('fpsCap', [[0, 'Off'], [144, '144'], [60, '60'], [30, '30']], S.fpsCap))}
    ${row('Show FPS', tog('showFps', S.showFps))}`;
  if (setTab === 'controls') body = `
    <h4>Control scheme</h4>${seg('control', [['mouse', '🖱 Mouse look'], ['drag', '✋ Drag to look'], ['click', '👆 Point & click']], S.control)}
    <p class="wnote">${{ mouse: 'Click the floor to lock the mouse, WASD to move, E to play. Classic PC game style.', drag: 'Hold and drag to turn the camera, WASD or the joystick to move. Click a game to walk to it.', click: 'Click anywhere on the floor to walk there. Click a game to walk over and sit down. Right-drag turns the camera.' }[S.control]}</p>
    <h4>Camera</h4>${seg('cam', [['third', 'Third person'], ['first', 'First person'], ['top', 'Top-down']], camMode)}
    ${row('Mouse sensitivity', rng('sens', .2, 3, .05, S.sens, v => (+v).toFixed(2) + '×'))}
    ${row('Invert look Y', tog('invertY', S.invertY))}
    ${row('Field of view', rng('fov', 50, 110, 1, S.fov, v => v + '°'))}
    ${row('Camera distance', rng('camDist', 1.5, 10, .1, camDist, v => (+v).toFixed(1) + ' m'), 'Mouse wheel works too')}
    ${row('Running', seg('run', [['hold', 'Hold'], ['toggle', 'Toggle'], ['always', 'Always']], S.run))}
    ${row('Head bob', tog('bob', S.bob))}
    <h4>Touch &amp; controller</h4>
    ${row('Touch controls', seg('touch', [['auto', 'Auto'], ['on', 'On'], ['off', 'Off']], S.touch))}
    ${row('Joystick side', seg('joySide', [['left', 'Left'], ['right', 'Right']], S.joySide))}
    ${row('Controller look speed', rng('padSens', .3, 3, .05, S.padSens, v => (+v).toFixed(2) + '×'), 'Xbox / PlayStation pads work automatically')}`;
  if (setTab === 'keys') body = `
    <h4>Layout</h4>${seg('layout', Object.entries(LAYOUTS).map(([k, [n]]) => [k, n]), S.layout)}
    ${row('Arrow keys also move', tog('arrows', S.arrows))}
    <h4>Bindings <small>click one, then press a key</small></h4><div class="wkeys">${Object.keys(KEYDEF).map(k => `<button data-bind="${k}" class="${rebinding === k ? 'wait' : ''}"><span>${KEYNAMES[k]}</span><kbd>${rebinding === k ? 'press a key…' : esc(keyLabel(S.keys[k]))}</kbd></button>`).join('')}</div>
    <p class="wnote">Emotes are always <kbd>1</kbd>–<kbd>8</kbd>. <kbd>Esc</kbd> closes menus. <kbd>R</kbd> grabs a free refill when you're broke.</p>
    <button class="wbig" id="wkreset">Reset keys</button>`;
  if (setTab === 'avatar') { const L = S.look; body = `
    <p class="wnote">Everyone on the floor sees this. The camera spins round so you can check yourself out.</p>
    <h4>Outfit</h4>${seg('outfit', OUTFITS, L.outfit)}
    <h4>Color</h4><div class="wsw" data-l="suit">${COLORS.map(c => `<button style="background:${c}" data-v="${c}" class="${L.suit === c ? 'on' : ''}"></button>`).join('')}</div>
    <h4>Skin</h4><div class="wsw" data-l="skin">${SKINS.map(c => `<button style="background:${c}" data-v="${c}" class="${L.skin === c ? 'on' : ''}"></button>`).join('')}</div>
    <h4>Hair</h4><div class="wsw" data-l="hair">${HAIRS.map(c => `<button style="background:${c}" data-v="${c}" class="${L.hair === c ? 'on' : ''}"></button>`).join('')}</div>
    <h4>Hat</h4>${seg('hat', HATS, L.hat)}
    ${row('Sunglasses', tog('glasses', L.glasses))}
    <button class="wbig" id="wrandom">🎲 Randomize</button>`; previewCam = true; } else previewCam = false;
  if (setTab === 'display') body = `
    ${row('Name tags', tog('names', S.names))}
    ${row('Show other players', tog('others', S.others))}
    ${row('Game signs', tog('labels', S.labels))}
    ${row('Mini-map', tog('minimap', S.minimap))}
    ${row('HUD size', rng('hudScale', .75, 1.4, .05, S.hudScale, v => Math.round(v * 100) + '%'))}
    <h4>Other</h4>
    <div class="wbtns"><button class="wbig" id="whelp">⌨ Show controls</button><button class="wbig" id="wfull">⛶ Fullscreen</button><button class="wbig" id="w2d">▦ Classic 2D lobby</button></div>`;
  openPanel('settings', `<h2>Settings</h2><nav class="wtabs">${tabs.map(([k, l]) => `<button data-tab="${k}" class="${setTab === k ? 'on' : ''}">${l}</button>`).join('')}</nav><div class="wsbody">${body}</div>`, setTab === 'avatar' ? 'set side' : 'wide set');
  previewCam = setTab === 'avatar';
  panel.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { rebinding = null; openSettings(b.dataset.tab); });
  panel.querySelectorAll('.wseg').forEach(sg => sg.querySelectorAll('button').forEach(b => b.onclick = () => setOpt(sg.dataset.k, b.dataset.v)));
  panel.querySelectorAll('[data-style]').forEach(b => b.onclick = () => setOpt('style', b.dataset.style));
  panel.querySelectorAll('[data-tog]').forEach(b => b.onclick = () => setOpt(b.dataset.tog, !(b.dataset.tog === 'glasses' ? S.look.glasses : S[b.dataset.tog])));
  panel.querySelectorAll('[data-r]').forEach(r => { r.oninput = () => { setOpt(r.dataset.r, +r.value, true); const f = { scale: v => Math.round(v * 100) + '%', sens: v => (+v).toFixed(2) + '×', padSens: v => (+v).toFixed(2) + '×', fov: v => v + '°', camDist: v => (+v).toFixed(1) + ' m', dist: v => v + ' m', hudScale: v => Math.round(v * 100) + '%' }[r.dataset.r]; r.nextElementSibling.textContent = f ? f(+r.value) : r.value; }; });
  panel.querySelectorAll('.wsw').forEach(sw => sw.querySelectorAll('button').forEach(b => b.onclick = () => setOpt(sw.dataset.l, b.dataset.v)));
  panel.querySelectorAll('[data-bind]').forEach(b => b.onclick = () => { rebinding = b.dataset.bind; openSettings('keys'); });
  const on = (id, f) => { const e = Q('#' + id); if (e) e.onclick = f; };
  on('wkreset', () => { S.keys = { ...KEYDEF }; S.layout = 'wasd'; save(); openSettings('keys'); });
  on('wrandom', () => { S.look = randomLook(Math.random()); me.setLook(S.look); save(); pushMeta(); openSettings('avatar'); });
  on('whelp', () => { closePanel(); showHelp(); }); on('wfull', fullscreen); on('w2d', () => { S.lobby2d = true; save(); location.reload(); });
}
const GFX = ['scale', 'shadows', 'bloom', 'lights', 'dist', 'msaa'];
function setOpt(k, v, live) {
  const num = ['scale', 'shadows', 'lights', 'dist', 'fpsCap', 'sens', 'fov', 'camDist', 'padSens', 'hudScale'];
  if (num.includes(k)) v = +v;
  if (['outfit', 'suit', 'skin', 'hair', 'hat', 'glasses'].includes(k)) { S.look = { ...S.look, [k]: v }; me.setLook(S.look); save(); pushMeta(); if (!live) openSettings('avatar'); return; }
  if (k === 'layout') { S.layout = v; S.keys = { ...KEYDEF, ...LAYOUTS[v][1] }; save(); openSettings('keys'); return; }
  if (k === 'cam') { setCam(v); if (!live) openSettings(); return; }
  if (k === 'camDist') { camDist = v; S.camDist = v; save(); return; }
  if (GFX.includes(k)) { S[k] = v; S.quality = 'custom'; }
  else S[k] = v;
  save();
  if (k === 'quality' || k === 'style' || GFX.includes(k)) applyGraphics();
  if (k === 'fov') { camera.fov = v; camera.updateProjectionMatrix(); }
  if (k === 'others') others.forEach(o => o.av.root.visible = v);
  if (['names', 'labels', 'minimap', 'hudScale', 'showFps', 'touch', 'joySide', 'control'].includes(k)) hudRefresh();
  if (k === 'control' && document.pointerLockElement) document.exitPointerLock();
  if (!live) openSettings();
}
function setCam(v) { camMode = v; S.cam = v; save(); me.setVisible(v !== 'first'); hudRefresh(); if (v === 'top') P.pitch = -.9; else if (P.pitch < -.8) P.pitch = -.2; }
function fullscreen() { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen?.().catch(() => {}); }

function hudRefresh() {
  document.documentElement.style.setProperty('--hud', S.hudScale);
  Q('#wmini').hidden = !S.minimap; Q('#wfps').hidden = !S.showFps;
  const touchOn = S.touch === 'on' || (S.touch === 'auto' && TOUCH); Q('#wtouch').hidden = !touchOn; Q('#wtouch').classList.toggle('right', S.joySide === 'right'); document.body.classList.toggle('wtouchon', touchOn);
  W.stations.forEach(s => { if (s.label) s.label.visible = S.labels; });
  others.forEach(o => { o.av.tag.visible = S.names; }); me.tag.visible = S.names && camMode !== 'first';
  Q('#wcross').hidden = camMode !== 'first'; me.setVisible(camMode !== 'first');
  canvas.style.cursor = S.control === 'click' ? 'pointer' : '';
}
function showHelp() {
  const k = c => `<kbd>${esc(keyLabel(S.keys[c]))}</kbd>`;
  openPanel('help', `<h2>How to play the floor</h2><div class="whelp">
    <div><h4>Move</h4><p>${k('fwd')}${k('left')}${k('back')}${k('right')}${S.arrows ? ' or arrows' : ''} · hold ${k('run')} to run · ${k('jump')} to jump</p></div>
    <div><h4>Look</h4><p>${S.control === 'mouse' ? 'Click the floor to grab the mouse, move to look. <kbd>Esc</kbd> lets go.' : S.control === 'drag' ? 'Click and drag to turn.' : 'Right-drag to turn, click the floor to walk.'} Wheel zooms.</p></div>
    <div><h4>Play</h4><p>Walk up to any game and press ${k('use')} (or click it). ${k('map')} opens the game directory.</p></div>
    <div><h4>Be social</h4><p>${k('emote')} or <kbd>1</kbd>–<kbd>8</kbd> to emote · ${k('chat')} to chat (shows over your head) · ${k('players')} to see who's here</p></div>
    <div><h4>Camera</h4><p>${k('cam')} cycles third person → first person → top-down</p></div>
    <div><h4>Touch / controller</h4><p>Left stick moves, right side looks, tap a game to walk to it. Pads: A to play, Y camera, LB/RB emotes.</p></div>
  </div><p class="wnote">Change all of this (key bindings, graphics modes, visual styles, your outfit) in ⚙ Settings.</p><button class="wbig go" id="wgo">Enter the floor</button>`, 'wide');
  Q('#wgo').onclick = () => { closePanel(); S.seenHelp = true; save(); if (S.control === 'mouse' && !TOUCH) lockMouse(); };
}

/* ================================================= input */
const down = new Set();
let lookDX = 0, lookDY = 0, joy = { x: 0, y: 0 }, padState = { prev: [] };
const typing = e => { const t = e.target; return t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable); };
const inGame = () => document.body.classList.contains('ingame');
const modalOpen = () => !panel.hidden || !Q('#wwheel').hidden || (Q('#am') && !Q('#am').hidden) || (Q('#adm') && !Q('#adm').hidden) || !!Q('#bigwin');
function lockMouse() { if (S.control !== 'mouse' || inGame() || modalOpen()) return; canvas.requestPointerLock?.()?.catch?.(() => {}); }
let unlockedAt = 0;
document.addEventListener('pointerlockchange', () => { const l = document.pointerLockElement === canvas; if (!l) unlockedAt = performance.now(); Q('#wlock').hidden = l || S.control !== 'mouse' || inGame() || TOUCH || !booted || modalOpen(); });
addEventListener('keydown', e => {
  if (rebinding) { e.preventDefault(); if (e.code !== 'Escape') { S.keys[rebinding] = e.code; S.layout = 'custom'; save(); } rebinding = null; openSettings('keys'); return; }
  if (typing(e)) return;
  if (e.code === 'Escape') {
    if (document.pointerLockElement || performance.now() - unlockedAt < 250) return;
    if (!Q('#wwheel').hidden) { Q('#wwheel').hidden = true; return; }
    if (!panel.hidden) { closePanel(); return; }
    if (inGame() && !(Q('#am') && !Q('#am').hidden) && !(Q('#adm') && !Q('#adm').hidden) && !Q('#bigwin') && !document.body.classList.contains('chopen')) { openLobby(); return; }
    if (!inGame() && !modalOpen() && !document.body.classList.contains('chopen')) openSettings();
    return;
  }
  if (inGame() || modalOpen()) return;
  const K = S.keys, c = e.code;
  if (c === K.players) { e.preventDefault(); openPlayers(); return; }
  if (e.repeat) { if ([K.fwd, K.back, K.left, K.right].includes(c) || c.startsWith('Arrow')) e.preventDefault(); return; }
  down.add(c);
  if (c === K.use) interact();
  else if (c === K.jump) { e.preventDefault(); jump(); }
  else if (c === K.cam) setCam({ third: 'first', first: 'top', top: 'third' }[camMode]);
  else if (c === K.map) openDirectory();
  else if (c === K.emote) openWheel();
  else if (c === K.chat || c === 'Enter') { e.preventDefault(); if (document.pointerLockElement) document.exitPointerLock(); const f = Q('#chfab'); if (f && !document.body.classList.contains('chopen')) f.click(); }
  else if (c === K.help) showHelp();
  else if (c === K.full) fullscreen();
  else if (c === K.run && S.run === 'toggle') P.runToggle = !P.runToggle;
  else if (/^Digit[1-8]$/.test(c)) emote(+c.slice(5));
  if (c.startsWith('Arrow') && S.arrows) e.preventDefault();
});
addEventListener('keyup', e => down.delete(e.code));
addEventListener('blur', () => down.clear());

// mouse
canvas.addEventListener('contextmenu', e => e.preventDefault());
let drag = null;
canvas.addEventListener('pointerdown', e => {
  if (e.pointerType === 'touch') return;
  if (inGame()) return;
  if (S.control === 'mouse') { if (document.pointerLockElement !== canvas) { lockMouse(); } else if (e.button === 0) { if (near) interact(); } return; }
  drag = { x: e.clientX, y: e.clientY, b: e.button, moved: false }; canvas.setPointerCapture(e.pointerId);
});
canvas.addEventListener('pointermove', e => {
  if (e.pointerType === 'touch') return;
  if (document.pointerLockElement === canvas) { lookDX += e.movementX; lookDY += e.movementY; return; }
  if (!drag) { hoverStation = pickStation(e.clientX, e.clientY); canvas.classList.toggle('hov', !!hoverStation); return; }
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y; if (Math.abs(dx) + Math.abs(dy) > 4) drag.moved = true;
  if (drag.moved && (S.control === 'drag' || drag.b === 2 || drag.b === 1)) { lookDX += e.movementX; lookDY += e.movementY; }
});
canvas.addEventListener('pointerup', e => {
  if (e.pointerType === 'touch' || !drag) return; const d = drag; drag = null;
  if (!d.moved && d.b === 0) clickAt(e.clientX, e.clientY);
});
canvas.addEventListener('wheel', e => { if (inGame()) return; e.preventDefault(); if (camMode === 'first') { if (e.deltaY > 0) { setCam('third'); camDist = 2; } return; } camDist = clampN(camDist * (1 + Math.sign(e.deltaY) * .12), 1.2, 12); if (camDist <= 1.25 && e.deltaY < 0 && camMode === 'third') setCam('first'); S.camDist = camDist; }, { passive: false });
let hoverStation = null;
const _v = new THREE.Vector3();
function pickStation(cx, cy) { let best = null, bd = 70; for (const s of W.stations) { _v.set(s.x, 1, s.z).project(camera); if (_v.z > 1) continue; const sx = (_v.x + 1) / 2 * innerWidth, sy = (1 - _v.y) / 2 * innerHeight, d = Math.hypot(sx - cx, sy - cy); const dist = Math.hypot(s.x - camera.position.x, s.z - camera.position.z); if (d < bd && dist < 30) { bd = d; best = s; } } return best; }
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2(), floorPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
function clickAt(cx, cy) {
  const st = pickStation(cx, cy); if (st) { walkTo(st, true); return; }
  if (S.control !== 'click') return;
  ndc.set(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera); const hit = new THREE.Vector3(); if (ray.ray.intersectPlane(floorPlane, hit)) { P.auto = { x: hit.x, z: hit.z, t: 0, best: 1e9 }; marker(hit.x, hit.z); }
}
const mark = new THREE.Mesh(new THREE.RingGeometry(.25, .36, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(2, 1.6, .6), transparent: true, depthWrite: false, toneMapped: false })); mark.rotation.x = -Math.PI / 2; mark.visible = false; scene.add(mark);
function marker(x, z) { mark.position.set(x, .03, z); mark.visible = true; mark.userData.t = 1; }
function walkTo(st, play_) { if (!st) return; P.auto = { x: st.x, z: st.z, st, play: play_ !== false && st.id !== '__cashier' ? true : st.id === '__cashier', t: 0, best: 1e9 }; marker(st.x, st.z); }

// touch: joystick on one side, look on the other, tap a game to walk there
const tp = new Map(); const joyEl = Q('#wjoy');
function touchStart(e) {
  if (inGame()) return; const left = S.joySide === 'left' ? e.clientX < innerWidth * .45 : e.clientX > innerWidth * .55;
  if (left && ![...tp.values()].some(t => t.joy)) { tp.set(e.pointerId, { joy: true, x0: e.clientX, y0: e.clientY }); joyEl.style.left = e.clientX + 'px'; joyEl.style.top = e.clientY + 'px'; joyEl.classList.add('on'); }
  else tp.set(e.pointerId, { joy: false, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now() });
}
function touchMove(e) { const t = tp.get(e.pointerId); if (!t) return; if (t.joy) { let dx = e.clientX - t.x0, dy = e.clientY - t.y0; const m = Math.hypot(dx, dy), R = 55; if (m > R) { dx *= R / m; dy *= R / m; } joy.x = dx / R; joy.y = dy / R; joyEl.querySelector('i').style.transform = `translate(${dx}px,${dy}px)`; } else { lookDX += (e.clientX - t.x) * 1.4; lookDY += (e.clientY - t.y) * 1.4; t.x = e.clientX; t.y = e.clientY; } }
function touchEnd(e) { const t = tp.get(e.pointerId); if (!t) return; tp.delete(e.pointerId); if (t.joy) { joy.x = joy.y = 0; joyEl.classList.remove('on'); joyEl.querySelector('i').style.transform = ''; } else if (performance.now() - t.t < 260 && Math.hypot(e.clientX - t.sx, e.clientY - t.sy) < 12) { const st = pickStation(e.clientX, e.clientY); if (st) walkTo(st, true); } }
canvas.addEventListener('pointerdown', e => { if (e.pointerType === 'touch') { touchStart(e); canvas.setPointerCapture(e.pointerId); } });
canvas.addEventListener('pointermove', e => { if (e.pointerType === 'touch') touchMove(e); });
canvas.addEventListener('pointerup', e => { if (e.pointerType === 'touch') touchEnd(e); });
canvas.addEventListener('pointercancel', e => { if (e.pointerType === 'touch') touchEnd(e); });
Q('#wtplay').onclick = () => interact(); Q('#wtjump').onclick = () => jump(); Q('#wtemote').onclick = () => openWheel(); Q('#wtcam').onclick = () => setCam({ third: 'first', first: 'top', top: 'third' }[camMode]);
Q('#wplayers').onclick = openPlayers; Q('#wmapb').onclick = openDirectory; Q('#wlbb').onclick = openBoard; Q('#wemb').onclick = openWheel; Q('#wsetb').onclick = () => openSettings();
Q('#wlock').onclick = lockMouse;
Q('#wmini').onclick = e => { const r = e.target.getBoundingClientRect(), x = HALL.x0 + (e.clientX - r.left) / r.width * (HALL.x1 - HALL.x0), z = HALL.z0 + (e.clientY - r.top) / r.height * (HALL.z1 - HALL.z0); let st = null; for (const s of W.stations) if (Math.hypot(s.x - x, s.z - z) < 2.2) st = s; if (st) walkTo(st, false); else { P.auto = { x, z, t: 0, best: 1e9 }; marker(x, z); } };
addEventListener('gamepadconnected', e => toastW('🎮 Controller connected: ' + (e.gamepad.id.split('(')[0].trim() || 'gamepad')));

function pollPad(dt) {
  const pads = navigator.getGamepads ? navigator.getGamepads() : []; const gp = [...pads].find(p => p && p.connected); if (!gp) return null;
  const dz = v => Math.abs(v) < .16 ? 0 : (v - Math.sign(v) * .16) / .84, ax = gp.axes, b = gp.buttons.map(x => x.pressed), pr = padState.prev;
  const pressed = i => b[i] && !pr[i];
  if (!inGame() && !modalOpen()) {
    lookDX += dz(ax[2] || 0) * 900 * dt * S.padSens; lookDY += dz(ax[3] || 0) * 600 * dt * S.padSens;
    if (pressed(0)) interact(); if (pressed(1)) jump(); if (pressed(3)) setCam({ third: 'first', first: 'top', top: 'third' }[camMode]);
    if (pressed(4)) emote(((P.emote || 1) + EMOTES.length - 2) % EMOTES.length + 1); if (pressed(5)) emote((P.emote || 0) % EMOTES.length + 1);
    if (pressed(8) || pressed(12)) openDirectory(); if (pressed(9)) openSettings();
  } else if (inGame() && pressed(1)) openLobby();
  else if (modalOpen() && pressed(1)) closePanel();
  padState.prev = b;
  return { x: dz(ax[0] || 0), y: dz(ax[1] || 0), run: (gp.buttons[6] && gp.buttons[6].value > .3) || b[10] };
}

/* ================================================= interact + game hand-off */
let near = null;
function interact() {
  if (!near || inGame()) return;
  if (near.id === '__cashier') { cashier(); return; }
  play(near);
}
function cashier() {
  if (typeof Bank !== 'undefined' && Bank.bal < 1) { Bank.refill(); coinBurst(me.root.position, 40); return; }
  openPanel('cash', `<h2>💵 Cashier</h2><p class="wpsub">You've got <b>${esc(Q('#bal').textContent)}</b> in chips.</p><div class="wbtns"><button class="wbig go" id="wcacct">${window.Acct && Acct.user ? 'My account' : 'Sign in / create account'}</button><button class="wbig" id="wclb">🏆 Leaderboard</button></div><p class="wnote">Free $1,000 refills are handed out here (or press R) once you're completely broke and not mid-round.</p>`);
  Q('#wcacct').onclick = () => { closePanel(); window.Acct && Acct.open(); }; Q('#wclb').onclick = () => { closePanel(); openBoard(); };
}
function freeSeat(st) { const taken = new Set([...others.values()].filter(o => o.g === st.id && Math.hypot(o.tx - st.x, o.tz - st.z) < 6).map(o => o.st)); let i = st.seats.findIndex((_, k) => !taken.has(k)); return i < 0 ? 0 : i; }
let gameStation = null;
function play(st) {
  if (!st || st.id === '__cashier') return; if (document.pointerLockElement) document.exitPointerLock();
  gameStation = st; sitAt(st); if (typeof SFX !== 'undefined') SFX.chip();
  openGame(st.id);
}
function sitAt(st) { const i = freeSeat(st), s = st.seats[i]; P.seat = i; P.x = s.x; P.z = s.z; P.face = s.yaw; P.sit = s.sit; P.auto = null; P.speed = 0; P.emote = 0; camYaw = s.yaw; P.game = st.id; pushMeta(); net.sendPos(posPacket(), true); }
function standUp() { const st = gameStation; P.game = null; P.sit = false; P.seat = -1; if (st) { P.x = st.x; P.z = st.z; resolve(); P.face = st.seats[0].yaw; camYaw = P.face; P.pitch = -.18; } gameStation = null; pushMeta(); net.sendPos(posPacket(), true); }
new MutationObserver(() => {
  const ig = inGame();
  if (ig && !P.game) { const id = (typeof current !== 'undefined' && current) ? current.id : location.hash.slice(1); const st = (gameStation && gameStation.id === id) ? gameStation : nearestStation(id); if (st) { gameStation = st; sitAt(st); } down.clear(); if (document.pointerLockElement) document.exitPointerLock(); Q('#wlock').hidden = true; }
  if (!ig && P.game) { standUp(); if (S.control === 'mouse' && !TOUCH) Q('#wlock').hidden = false; }
}).observe(document.body, { attributes: true, attributeFilter: ['class'] });

function teleport(x, z, then) { const f = Q('#wfade'); f.classList.add('on'); if (typeof SFX !== 'undefined') SFX.whoosh(); setTimeout(() => { P.x = x; P.z = z; P.auto = null; resolve(); f.classList.remove('on'); then && then(); }, 280); }

/* ================================================= movement + collision */
const PR = .32;
function resolve() {
  for (let it = 0; it < 2; it++) for (const c of W.colliders) {
    if (c.t === 'c') { const dx = P.x - c.x, dz = P.z - c.z, d = Math.hypot(dx, dz), m = c.r + PR; if (d < m && d > 1e-4) { P.x = c.x + dx / d * m; P.z = c.z + dz / d * m; } }
    else { const ca = Math.cos(c.a), sa = Math.sin(c.a), dx = P.x - c.x, dz = P.z - c.z; let lx = dx * ca - dz * sa, lz = dx * sa + dz * ca;
      const cx = clampN(lx, -c.hw, c.hw), cz = clampN(lz, -c.hd, c.hd), ex = lx - cx, ez = lz - cz, d = Math.hypot(ex, ez);
      if (d < PR) { if (d > 1e-4) { lx = cx + ex / d * PR; lz = cz + ez / d * PR; } else { const px = c.hw - Math.abs(lx), pz = c.hd - Math.abs(lz); if (px < pz) lx = Math.sign(lx || 1) * (c.hw + PR); else lz = Math.sign(lz || 1) * (c.hd + PR); }
        P.x = c.x + lx * ca + lz * sa; P.z = c.z - lx * sa + lz * ca; } }
  }
  P.x = clampN(P.x, HALL.x0 + PR + .1, HALL.x1 - PR - .1); P.z = clampN(P.z, HALL.z0 + PR + .1, HALL.z1 - PR - .3);
}
function jump() { if (P.y <= 0 && !P.sit && !inGame()) { P.vy = 4.6; P.emote = 0; } }
const posPacket = () => ({ x: P.x, z: P.z, y: P.y, yaw: P.face, speed: P.speed, emote: P.emote, game: P.game, seat: P.seat });

function step(dt) {
  const pad = pollPad(dt);
  // look
  const sens = .0023 * S.sens;
  if (!inGame()) { camYaw -= lookDX * sens; P.pitch = clampN(P.pitch - lookDY * sens * (S.invertY ? -1 : 1), camMode === 'top' ? -1.35 : -1.25, camMode === 'top' ? -.45 : .9); }
  lookDX = lookDY = 0;
  if (inGame() || P.game) { P.speed = 0; return; }
  // move input
  const K = S.keys, k = c => down.has(c);
  let ix = 0, iy = 0;
  if (!modalOpen()) {
    if (k(K.fwd) || (S.arrows && k('ArrowUp'))) iy -= 1; if (k(K.back) || (S.arrows && k('ArrowDown'))) iy += 1;
    if (k(K.left) || (S.arrows && k('ArrowLeft'))) ix -= 1; if (k(K.right) || (S.arrows && k('ArrowRight'))) ix += 1;
    ix += joy.x; iy += joy.y; if (pad) { ix += pad.x; iy += pad.y; }
  }
  let run = S.run === 'always' ? true : S.run === 'toggle' ? P.runToggle : (k(K.run) || k('ShiftRight'));
  if (pad && pad.run) run = true; if (Math.hypot(joy.x, joy.y) > .95) run = true;
  const fx = -Math.sin(camYaw), fz = -Math.cos(camYaw), rx = Math.cos(camYaw), rz = -Math.sin(camYaw);
  let mx = rx * ix - fx * iy, mz = rz * ix - fz * iy; let mag = Math.hypot(mx, mz);
  if (mag > 0.01) P.auto = null;
  if (P.auto) { const a = P.auto, dx = a.x - P.x, dz = a.z - P.z, d = Math.hypot(dx, dz); a.t += dt;
    if (d < (a.st ? .5 : .25) || (a.st && d < a.st.r * .55)) { const st = a.st; P.auto = null; mark.visible = false; if (st && a.play) { if (st.id === '__cashier') cashier(); else play(st); } }
    else { mx = dx / d; mz = dz / d; mag = 1; run = d > 6 || run; if (d < a.best - .05) { a.best = d; a.t = 0; } if (a.t > 1.2) { P.auto = null; mark.visible = false; } } }
  if (mag > 1) { mx /= mag; mz /= mag; mag = 1; }
  const vmax = run ? 6.2 : 3.2, acc = Math.min(1, dt * (mag > .01 ? 10 : 14));
  P.vx += (mx * vmax - P.vx) * acc; P.vz += (mz * vmax - P.vz) * acc;
  P.x += P.vx * dt; P.z += P.vz * dt; resolve();
  P.speed = Math.hypot(P.vx, P.vz);
  if (P.speed > .3) { const want = Math.atan2(-P.vx, -P.vz); let d = want - P.face; d = Math.atan2(Math.sin(d), Math.cos(d)); P.face += d * Math.min(1, dt * 12); if (P.emote) P.emote = 0; }
  if (camMode === 'first') P.face = camYaw;
  // jump
  if (P.vy || P.y > 0) { P.vy -= 13 * dt; P.y = Math.max(0, P.y + P.vy * dt); if (P.y === 0) P.vy = 0; }
  if (P.emote) { P.emoteT -= dt; if (P.emoteT <= 0) P.emote = 0; }
}

/* ================================================= camera */
const camPos = new THREE.Vector3(0, 3, 26), camLook = new THREE.Vector3(0, 1.5, 0); let bobT = 0, introT = 1; const introStart = performance.now();
function camHit(x, y, z) {
  for (const c of W.colliders) { if (y > (c.h || 1.35)) continue;
    if (c.t === 'c') { if (Math.hypot(x - c.x, z - c.z) < c.r + .12) return true; }
    else { const ca = Math.cos(c.a), sa = Math.sin(c.a), dx = x - c.x, dz = z - c.z; if (Math.abs(dx * ca - dz * sa) < c.hw + .12 && Math.abs(dx * sa + dz * ca) < c.hd + .12) return true; } }
  return false;
}
function updCamera(dt, t) {
  const head = new THREE.Vector3(P.x, (P.sit ? 1.32 : 1.62) + P.y, P.z);
  let pos = new THREE.Vector3(), look = new THREE.Vector3();
  if (previewCam) { const a = P.face + Math.sin(t * .4) * .5, mob = innerWidth < 761; pos.set(P.x - Math.sin(a) * (mob ? 3.4 : 2.6), mob ? 1.2 : 1.45, P.z - Math.cos(a) * (mob ? 3.4 : 2.6)); look.set(P.x, mob ? .35 : 1.15, P.z); if (!mob) { look.x += -Math.cos(a) * .55; look.z += Math.sin(a) * .55; } }
  else if (camMode === 'first' && !inGame()) { const cp = Math.cos(P.pitch); pos.copy(head); if (S.bob && P.speed > .5 && P.y === 0) { bobT += dt * P.speed * 2.4; pos.y += Math.sin(bobT) * .035; } look.set(head.x - Math.sin(camYaw) * cp, head.y + Math.sin(P.pitch), head.z - Math.cos(camYaw) * cp); }
  else if (camMode === 'top' && !inGame()) { const d = camDist * 3 + 6, cp = Math.cos(P.pitch); pos.set(P.x + Math.sin(camYaw) * cp * d, -Math.sin(P.pitch) * d + 1, P.z + Math.cos(camYaw) * cp * d); look.set(P.x, .8, P.z); }
  else { const d = inGame() ? 3.4 : camDist, pitch = inGame() ? -.35 : P.pitch, cy = inGame() ? P.face : camYaw, cp = Math.cos(pitch);
    look.set(P.x, head.y - .1, P.z); pos.set(P.x + Math.sin(cy) * cp * d, head.y - .1 - Math.sin(pitch) * d, P.z + Math.cos(cy) * cp * d);
    if (S.bob && P.speed > .5 && P.y === 0) { bobT += dt * P.speed * 2.4; pos.y += Math.sin(bobT * 2) * .02; } }
  if ((camMode === 'third' || inGame()) && !previewCam) { // camera collision: slide in toward the head if a table or column is in the way
    const dx = pos.x - look.x, dy = pos.y - look.y, dz = pos.z - look.z, L = Math.hypot(dx, dy, dz);
    for (let d = .45; d < L; d += .18) { const x = look.x + dx * d / L, y = look.y + dy * d / L, z = look.z + dz * d / L; if (camHit(x, y, z)) { const k = Math.max(.35, d - .3) / L; pos.set(look.x + dx * k, look.y + dy * k, look.z + dz * k); break; } } }
  pos.x = clampN(pos.x, HALL.x0 + .3, HALL.x1 - .3); pos.z = clampN(pos.z, HALL.z0 + .3, HALL.z1 - .3); pos.y = clampN(pos.y, .3, HALL.h - .3);
  if (introT > 0) { introT = Math.max(0, 1 - (performance.now() - introStart) / 2600); const e = introT * introT * (3 - 2 * introT); pos.lerp(new THREE.Vector3(0, 6, 21.5), e); look.lerp(new THREE.Vector3(0, 3, -10), e); }
  const k = camMode === 'first' && !inGame() && !previewCam ? 1 : Math.min(1, dt * (previewCam ? 4 : 14));
  if (previewCam) { // orbit round the player instead of cutting through them
    const ca = Math.atan2(camPos.x - P.x, camPos.z - P.z), ta = Math.atan2(pos.x - P.x, pos.z - P.z), cr = Math.hypot(camPos.x - P.x, camPos.z - P.z), tr = Math.hypot(pos.x - P.x, pos.z - P.z);
    let da = ta - ca; da = Math.atan2(Math.sin(da), Math.cos(da)); const na = ca + da * k, nr = Math.max(1.6, cr + (tr - cr) * k);
    pos.set(P.x + Math.sin(na) * nr, camPos.y + (pos.y - camPos.y) * k, P.z + Math.cos(na) * nr); camPos.copy(pos);
  }
  camPos.lerp(pos, k); camLook.lerp(look, k); camera.position.copy(camPos); camera.lookAt(camLook);
}

/* ================================================= screens: leaderboard wall + win ticker */
let boardKey = '', tickerKey = '';
const wins = [];
function paintBoard() {
  const rows = QA('#lbl li').filter(li => li.querySelector('.nm')).map(li => [li.querySelector('.rk')?.textContent, li.querySelector('.nm')?.textContent, li.querySelector('b')?.textContent]);
  const k = JSON.stringify(rows); if (k === boardKey) return; boardKey = k;
  W.screens.board.redraw((g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#140c04'); gr.addColorStop(1, '#050302'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#e8c46a'; g.font = `900 66px ${SERIF}`; g.shadowColor = '#e8c46a'; g.shadowBlur = 20; g.fillText('HIGH ROLLERS', w / 2, 60); g.shadowBlur = 0;
    g.font = `700 22px ${FONT}`; g.fillStyle = 'rgba(255,240,210,.6)'; g.fillText('BEST BANKROLL · LIVE', w / 2, 104);
    if (!rows.length) { g.font = `700 36px ${FONT}`; g.fillStyle = '#c9b98f'; g.fillText('No high rollers yet. Be the first.', w / 2, h / 2); return; }
    rows.slice(0, 10).forEach(([rk, nm, amt], i) => { const y = 150 + i * 54; g.fillStyle = i % 2 ? 'rgba(255,255,255,.03)' : 'rgba(232,196,106,.06)'; rr(g, 60, y - 24, w - 120, 48, 12); g.fill();
      g.textAlign = 'left'; g.font = `900 30px ${SERIF}`; g.fillStyle = ['#ffd36b', '#d8d8e0', '#d08a4a'][i] || '#8a7b5a'; g.fillText(rk || i + 1, 86, y);
      g.font = `800 30px ${FONT}`; g.fillStyle = nameColor(nm); g.fillText(nm, 150, y); g.textAlign = 'right'; g.fillStyle = '#fff3c4'; g.fillText(amt, w - 90, y); });
  });
}
function paintTicker() {
  const items = ['★ WELCOME TO THE BACK ROOM', `★ ${GAMES.length} GAMES ON THE FLOOR`, '★ PLAY MONEY ONLY', ...wins.slice(-6).reverse().map(w => '🏆 ' + w)];
  const k = items.join('|'); if (k === tickerKey) return; tickerKey = k;
  W.screens.ticker.redraw((g, w, h) => { g.fillStyle = '#050200'; g.fillRect(0, 0, w, h); g.font = `800 64px ${FONT}`; g.textBaseline = 'middle';
    let x = 20; const txt = items.join('     '); for (const part of [txt]) { g.fillStyle = '#ffb347'; g.shadowColor = '#ff8a00'; g.shadowBlur = 14; g.fillText(part, x, h / 2 + 2, w - 40); }
    g.shadowBlur = 0; g.fillStyle = 'rgba(0,0,0,.35)'; for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 1); for (let xx = 0; xx < w; xx += 4) g.fillRect(xx, 0, 1, h); });
}

/* chat → speech bubbles over the right head */
const seenMsg = new Set(); let chatReady = false; setTimeout(() => { chatReady = true; }, 4500);
function watchChat() {
  const list = Q('#chl'); if (!list) return setTimeout(watchChat, 800);
  const scan = () => { for (const li of list.querySelectorAll('li.chm')) { const b = li.querySelector('b'), t = li.querySelector('.cht'), tm = li.querySelector('time'); if (!b || !t) continue;
    const name = [...b.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim(), text = t.textContent, key = name + '|' + text + '|' + (tm ? tm.textContent : '');
    if (seenMsg.has(key)) continue; seenMsg.add(key);
    if (li.classList.contains('win')) { wins.push(`${name} ${text}`); if (wins.length > 20) wins.shift(); }
    if (!chatReady) continue;
    if (li.classList.contains('win')) continue;
    if (name === myName()) me.say(text); else for (const o of others.values()) if ((o.meta.n || '') === name) o.av.say(text); } };
  scan(); new MutationObserver(scan).observe(list, { childList: true });
}

/* ================================================= minimap */
const mini = Q('#wmini'), mg = mini.getContext('2d');
const STC = { bj: '#5cff9d', bacc: '#ff6f7f', roul: '#ff4d6d', vpoker: '#57c7ff', slots: '#ffd36b', wheel: '#ffd36b', keno: '#57c7ff', scratch: '#ff6fb5', crash: '#57c7ff', dice: '#ff8aa0', coin: '#ffd36b', plinko: '#ff6fb5', mines: '#5cff9d', tower: '#b47cff', derby: '#ffe2b0', __cashier: '#5cff9d' };
function drawMini() {
  const w = mini.width, h = mini.height, sx = w / (HALL.x1 - HALL.x0), sz = h / (HALL.z1 - HALL.z0), X = x => (x - HALL.x0) * sx, Z = z => (z - HALL.z0) * sz;
  mg.clearRect(0, 0, w, h); mg.fillStyle = 'rgba(10,7,4,.78)'; rr(mg, 0, 0, w, h, 14); mg.fill(); mg.strokeStyle = 'rgba(232,196,106,.5)'; mg.lineWidth = 2; rr(mg, 1, 1, w - 2, h - 2, 13); mg.stroke();
  mg.fillStyle = 'rgba(232,196,106,.12)'; mg.beginPath(); mg.arc(X(0), Z(2), 3.4 * sx, 0, 7); mg.fill();
  const seen = new Set();
  for (const s of W.stations) { mg.fillStyle = STC[s.id] || '#fff'; mg.globalAlpha = near === s ? 1 : .75; mg.beginPath(); mg.arc(X(s.x), Z(s.z), near === s ? 4.5 : 3, 0, 7); mg.fill(); if (!seen.has(s.id) && s.id !== 'slots' && s.id !== 'vpoker') { seen.add(s.id); } }
  mg.globalAlpha = 1;
  for (const o of others.values()) { mg.fillStyle = nameColor(o.meta.n || ''); mg.beginPath(); mg.arc(X(o.x), Z(o.z), 3.5, 0, 7); mg.fill(); mg.strokeStyle = '#000'; mg.lineWidth = 1; mg.stroke(); }
  mg.save(); mg.translate(X(P.x), Z(P.z)); mg.rotate(-P.face); mg.fillStyle = '#fff'; mg.beginPath(); mg.moveTo(0, -8); mg.lineTo(5, 5); mg.lineTo(0, 2); mg.lineTo(-5, 5); mg.closePath(); mg.fill(); mg.restore();
  mg.save(); mg.translate(X(P.x), Z(P.z)); mg.rotate(-camYaw); mg.fillStyle = 'rgba(255,255,255,.12)'; mg.beginPath(); mg.moveTo(0, 0); mg.arc(0, 0, 34, -Math.PI / 2 - .5, -Math.PI / 2 + .5); mg.fill(); mg.restore();
}

/* ================================================= main loop */
const clock = new THREE.Clock(); let last = performance.now(), acc = 0, frames = 0, fpsT = 0, fpsNow = 60, slowT = 0, lastMini = 0, lastIG = 0, lastScreens = 0;
function frame(now) {
  requestAnimationFrame(frame);
  if (S.fpsCap && now - last < 1000 / S.fpsCap - 1) return;
  const ig = inGame();
  if (ig && now - lastIG < 180) { // the floor keeps living (dimly) behind the open game
    return; }
  lastIG = now;
  let dt = Math.min(.05, (now - last) / 1000); last = now; const t = now / 1000;
  frames++; fpsT += dt; if (fpsT >= .5) { fpsNow = frames / fpsT; frames = 0; fpsT = 0; if (S.showFps) Q('#wfps').textContent = Math.round(fpsNow) + ' fps · ' + PRESETS[tierName()]?.name + ' · ' + STYLES[S.style].name;
    if (S.quality === 'auto' && !ig && booted && !document.hidden) { if (fpsNow < 32) { slowT += .5; if (slowT > 3) { slowT = 0; const i = ORDER.indexOf(autoTier); if (i > 0) { autoTier = ORDER[i - 1]; applyGraphics(); toastW(`Graphics lowered to ${PRESETS[autoTier].name} to keep things smooth`); } } } else slowT = 0; } }
  if (ig) dt = .18;
  step(dt);
  W.update(dt, t); updCoins(dt);
  // me
  me.root.position.set(P.x, 0, P.z); let fd = P.face - me.root.rotation.y; fd = Math.atan2(Math.sin(fd), Math.cos(fd)); me.root.rotation.y += fd * Math.min(1, dt * 14);
  me.update(dt, { speed: P.speed, sit: P.sit, busy: !!P.game, emote: P.emote ? EMOTES[P.emote - 1][0] : null, air: P.y });
  // others
  for (const [id, o] of others) {
    const k = Math.min(1, dt * 10); if (Math.hypot(o.tx - o.x, o.tz - o.z) > 8) { o.x = o.tx; o.z = o.tz; } o.x += (o.tx - o.x) * k; o.z += (o.tz - o.z) * k; o.y += (o.ty - o.y) * Math.min(1, dt * 16);
    let d = o.tr - o.r; d = Math.atan2(Math.sin(d), Math.cos(d)); o.r += d * k;
    let sit = false; if (o.g && o.st >= 0) { const st = W.stations.filter(s => s.id === o.g).sort((a, b) => Math.hypot(a.x - o.x, a.z - o.z) - Math.hypot(b.x - o.x, b.z - o.z))[0]; const seat = st && st.seats[o.st]; if (seat && Math.hypot(seat.x - o.x, seat.z - o.z) < 1) sit = seat.sit; }
    o.av.root.position.set(o.x, 0, o.z); o.av.root.rotation.y = o.r;
    o.av.update(dt, { speed: o.s, sit, busy: !!o.g, emote: o.e ? (EMOTES[o.e - 1] || [])[0] : null, air: o.y });
    const dist = Math.hypot(o.x - camera.position.x, o.z - camera.position.z); o.av.tag.visible = S.names && dist < 28;
  }
  // nearest game
  let nb = null, nd = 1e9;
  if (!ig && !P.game) for (const s of W.stations) { const d = Math.hypot(s.x - P.x, s.z - P.z); if (d < s.r && d < nd) { nd = d; nb = s; } }
  if (nb !== near) { near = nb; const pr = Q('#wprompt'); pr.hidden = !near; Q('#wtplay').hidden = !near;
    if (near) { const n = [...others.values()].filter(o => o.g === near.id).length; Q('#wpkey').textContent = TOUCH && S.touch !== 'off' ? 'TAP' : keyLabel(S.keys.use); Q('#wpname').textContent = (near.id === '__cashier' ? 'Visit the ' : 'Play ') + near.name; Q('#wpsub').textContent = near.id === '__cashier' ? 'Account · leaderboard · refills' : (n ? `${n} playing now · ` : '') + (GAMES.find(g => g.id === near.id)?.desc || ''); Q('#wtplay').textContent = near.id === '__cashier' ? 'CASHIER' : 'PLAY'; if (typeof SFX !== 'undefined' && booted) SFX.tick(1.4); } }
  for (const s of W.stations) if (s.label && s.label.visible) { const hi = near && s.label === near.label; const sc = hi ? 1.12 : 1; s.label.scale.lerp(_v.set(2.6 * sc, .86 * sc, 1), Math.min(1, dt * 8)); s.label.position.y = s.baseY + (hi ? Math.sin(t * 3) * .06 + .1 : 0); const cd = s.label.position.distanceTo(camera.position); s.label.material.opacity = clampN((cd - 2.2) / 2, 0, 1); }
  if (mark.visible) { mark.userData.t -= dt * .5; mark.material.opacity = Math.max(0, mark.userData.t); mark.scale.setScalar(1 + (1 - mark.userData.t) * .6); if (mark.userData.t <= 0 && !P.auto) mark.visible = false; }
  me.tag.visible = S.names && camMode !== 'first' && !previewCam;
  updCamera(dt, t);
  net.sendPos(posPacket());
  if (S.minimap && now - lastMini > 100) { lastMini = now; drawMini(); }
  if (now - lastScreens > 2000) { lastScreens = now; paintBoard(); paintTicker(); }
  if (usePost && composer) { grade.uniforms.time.value = t; composer.render(dt); } else renderer.render(scene, camera);
}

/* ================================================= go */
applyGraphics(); setCam(camMode); pushMeta(); watchChat(); paintBoard(); paintTicker();
setTimeout(() => document.body.classList.remove('w-loading'), 300);
requestAnimationFrame(t => { last = t; frame(t); });
setTimeout(() => {
  booted = true;
  if (inGame()) { const id = current ? current.id : location.hash.slice(1); const st = nearestStation(id); if (st) { gameStation = st; sitAt(st); } }
  else if (!S.seenHelp) showHelp(); else if (S.control === 'mouse' && !TOUCH) Q('#wlock').hidden = false;
  Q('#wlocks').textContent = `${keyLabel(S.keys.fwd)}${keyLabel(S.keys.left)}${keyLabel(S.keys.back)}${keyLabel(S.keys.right)} to move · ${keyLabel(S.keys.use)} to play · ${keyLabel(S.keys.map)} for games`;
}, 2700);
window.BR3D = { debug: { join: addOther, pos: p => { const o = others.get(p.i); if (o) { Object.assign(o, { tx: p.x, tz: p.z, tr: p.r, s: p.s || 0, g: p.g || 0, st: p.st ?? -1, e: p.e || 0 }); } }, say: (id, t) => others.get(id)?.av.say(t), fx: (id, m) => { const o = others.get(id); o && coinBurst(o.av.root.position, 40); } }, S, applyGraphics, setOpt, P, W, others, teleport, openSettings, view(y, p) { camYaw = y; P.pitch = p; P.face = y; }, get near() { return near; } };
