// THE LAST SHIFT — game client. The host's browser runs the authoritative monster + world state;
// every client sends its own player state and requests, and renders what the host decides.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { buildMap, rng, C, WALL, SECRET } from './map.js';
import { World, loadTextures } from './world.js';
import { makeMonsterModel, MonsterAI } from './monster.js';
import { Sfx } from './audio.js';
import { Net, LocalNet, BCNet, newCode, MAX_PLAYERS } from './net.js';
import { Voice } from './voice.js';
import { makeAvatar, COLORS, VHSShader } from './players.js';

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search);
const OFFLINE = Q.has('offline'), BC = Q.has('bc'), NORENDER = Q.has('norender');
const store = { get(k, d) { try { const v = localStorage.getItem('lastshift-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('lastshift-' + k, JSON.stringify(v)); } catch (e) {} } };
const S = Object.assign({ vol: 0.85, voice: 1, sens: 1, fov: 78, gfx: 'med', inv: false, mic: 'off', name: '' }, store.get('settings', {}));
const myId = Math.random().toString(36).slice(2, 10);
const sfx = new Sfx();
let net = null, voice = null;
const now = () => performance.now();
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const EYE = 1.62, CROUCH_EYE = 0.98;

// ======================================================================== renderer
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);
const camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 90);
let composer, renderPass, bloom, vhs;
function setupRender() {
  const pr = S.gfx === 'low' ? Math.min(devicePixelRatio, 0.8) : S.gfx === 'med' ? Math.min(devicePixelRatio, 1.25) : Math.min(devicePixelRatio, 1.75);
  renderer.setPixelRatio(pr); renderer.setSize(innerWidth, innerHeight);
  composer = new EffectComposer(renderer);
  renderPass = new RenderPass(new THREE.Scene(), camera); composer.addPass(renderPass);
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.55, 0.5, 0.82); bloom.enabled = S.gfx !== 'low'; composer.addPass(bloom);
  composer.addPass(new OutputPass());
  vhs = new ShaderPass(VHSShader); composer.addPass(vhs);
  composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight);
}
setupRender();
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); });

// flashlight (shared by menu + game; re-parented into the active scene)
const flash = new THREE.SpotLight(0xfff1dc, 0, 34, 0.44, 0.55, 1.65);
flash.castShadow = true; flash.shadow.bias = -0.0004; flash.shadow.normalBias = 0.03; flash.shadow.camera.near = 0.2; flash.shadow.camera.far = 34;
const flashTgt = new THREE.Object3D(); flash.target = flashTgt;
const FLASH_I = 48;
function setShadowSize() { const s = S.gfx === 'low' ? 0 : S.gfx === 'med' ? 1024 : 2048; flash.castShadow = s > 0; if (s) { flash.shadow.mapSize.set(s, s); if (flash.shadow.map) { flash.shadow.map.dispose(); flash.shadow.map = null; } } }
setShadowSize();
const flashDir = new THREE.Vector3(0, 0, -1);
const beamGeo = new THREE.ConeGeometry(2.6, 9, 24, 1, true); beamGeo.translate(0, -4.5, 0); beamGeo.rotateX(-Math.PI / 2);
const beam = new THREE.Mesh(beamGeo, new THREE.ShaderMaterial({
  transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, uniforms: { uI: { value: 0 } },
  vertexShader: 'varying float vL;varying vec3 vN,vV;void main(){vL=clamp(position.z/9.,0.,1.);vec4 mv=modelViewMatrix*vec4(position,1.);vV=normalize(-mv.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*mv;}',
  fragmentShader: 'uniform float uI;varying float vL;varying vec3 vN,vV;void main(){float e=pow(abs(dot(vN,vV)),2.);float a=(1.-vL)*(1.-vL)*e*uI;gl_FragColor=vec4(vec3(1.,.95,.85)*a,1.);}',
}));
beam.frustumCulled = false; beam.visible = false;

// ======================================================================== UI helpers
const screens = ['menu', 'play', 'lobby', 'settings', 'credits', 'pause', 'end'];
let lastScreen = 'menu';
function show(id) { screens.forEach(s => $(s).classList.toggle('hidden', s !== id)); if (id && id !== 'settings') lastScreen = id; $('foot').classList.toggle('hidden', !(id === 'menu' || id === 'play')); }
function toast(msg, ms = 3500) { const d = document.createElement('div'); d.className = 't'; d.textContent = msg; $('toast').appendChild(d); setTimeout(() => d.style.opacity = 0, ms); setTimeout(() => d.remove(), ms + 700); while ($('toast').children.length > 4) $('toast').firstChild.remove(); }
let calloutT = 0;
function callout(big, small = '', ms = 3200) { const c = $('callout'); c.querySelector('b').textContent = big; c.querySelector('span').textContent = small; c.classList.add('on'); clearTimeout(calloutT); calloutT = setTimeout(() => c.classList.remove('on'), ms); }
function feed(msg, cls = '') { const d = document.createElement('div'); if (cls) d.className = cls; d.textContent = msg; $('feed').appendChild(d); setTimeout(() => d.style.opacity = 0, 9000); setTimeout(() => d.remove(), 10000); while ($('feed').children.length > 7) $('feed').firstChild.remove(); }
function chatLine(name, text, sys) { const d = document.createElement('div'); if (sys) { d.className = 'sys'; d.textContent = text; } else d.innerHTML = `<b style="color:${colorOf(name.id)}">${esc(name.n)}</b> ${esc(text)}`; $('chatLog').appendChild(d); $('chatLog').scrollTop = 1e6; }
const flashEl = $('flash');
function redFlash(v) { flashEl.style.transition = 'none'; flashEl.style.opacity = v; requestAnimationFrame(() => { flashEl.style.transition = 'opacity 1.2s'; flashEl.style.opacity = 0; }); }

// ======================================================================== state
const G = {
  phase: 'boot', map: null, world: null, scene: null, W: null, Wm: null, host: false, ai: null, roster: [], names: {}, colors: {}, seed: 0,
  me: { x: 0, y: 0, z: 0, fy: 0, yaw: 0, pitch: 0, vx: 0, vz: 0, crouch: false, ck: 0, flash: true, bat: 100, sta: 100, staT: 0, exh: false, hidden: -1, noise: 0, bob: 0, stepAcc: 0, speed: 0, sprint: false, flick: 0 },
  mon: { model: null, buf: [], x: 0, z: 0, y: -99, yaw: 0, st: 'roam', sp: 0, stepAcc: 0, seen: false },
  remotes: new Map(), keys: {}, t: 0, dirty: false, lastW: 0, lastSend: 0, powerT: 0, blackoutUntil: 0, shake: 0, glitch: 0, scareT: 160, apparT: 60,
  appar: null, interact: null, holdT: 0, spect: 0, ready: false, spots: [], dir: { doorT: 70, boT: 200 }, endShown: false, startAt: 0,
};
const colorOf = id => G.colors[id] || '#999';
const nameOf = id => G.names[id] || (net && net.players().find(p => p.id === id) || {}).name || 'Someone';
const isHost = () => net && net.hostId() === myId;

// ======================================================================== menu backdrop
let menuScene = null, menuWorld = null, menuMon = null;
async function boot() {
  $('loadMsg').textContent = 'LOADING TEXTURES';
  await loadTextures('../fps/tex/');
  try { await document.fonts.ready; } catch (e) {}
  menuScene = new THREE.Scene(); menuScene.fog = new THREE.FogExp2(0x030304, 0.07); menuScene.background = new THREE.Color(0x000000);
  menuScene.add(new THREE.HemisphereLight(0x6c7a8a, 0x100808, 0.05));
  const mm = buildMap(4242); menuWorld = new World(menuScene, mm, S.gfx); menuWorld.setPower(true);
  menuMon = makeMonsterModel(); menuMon.group.position.set(31.5 * C, 0, 10.6 * C); menuMon.group.rotation.y = -Math.PI / 2; menuScene.add(menuMon.group);
  renderPass.scene = menuScene;
  $('loading').classList.add('hidden');
  $('name').value = S.name || '';
  const room = (Q.get('room') || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
  if (room) { $('code').value = room; show('play'); } else show('menu');
  G.phase = 'menu';
}

// ======================================================================== settings UI
function bindSettings() {
  const fmt = { vol: v => Math.round(v * 100) + '%', voice: v => Math.round(v * 100) + '%', sens: v => (+v).toFixed(2), fov: v => v + '°' };
  [['sVol', 'vol', 'oVol'], ['sVoice', 'voice', 'oVoice'], ['sSens', 'sens', 'oSens'], ['sFov', 'fov', 'oFov']].forEach(([el, k, o]) => {
    $(el).value = S[k]; $(o).textContent = fmt[k](S[k]);
    $(el).oninput = () => { S[k] = +$(el).value; $(o).textContent = fmt[k](S[k]); applySettings(); };
  });
  $('sGfx').value = S.gfx; $('sGfx').onchange = () => { S.gfx = $('sGfx').value; applySettings(true); };
  $('sMic').value = S.mic; $('sMic').onchange = () => { S.mic = $('sMic').value; applyMic(); applySettings(); };
  $('sInv').checked = S.inv; $('sInv').onchange = () => { S.inv = $('sInv').checked; applySettings(); };
}
function applySettings(gfx) {
  store.set('settings', S);
  sfx.setVolume(S.vol, S.voice);
  camera.fov = S.fov; camera.updateProjectionMatrix();
  if (gfx) { const pr = S.gfx === 'low' ? Math.min(devicePixelRatio, 0.8) : S.gfx === 'med' ? Math.min(devicePixelRatio, 1.25) : Math.min(devicePixelRatio, 1.75); renderer.setPixelRatio(pr); composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight); bloom.enabled = S.gfx !== 'low'; setShadowSize(); }
}
async function applyMic() {
  $('bMic').textContent = 'Mic: ' + (S.mic === 'off' ? 'Off' : S.mic === 'open' ? 'On' : 'PTT (V)');
  if (!voice) return;
  try {
    if (S.mic === 'off') voice.disableMic();
    else { await voice.enableMic(); voice.setPTT(S.mic === 'ptt'); }
  } catch (e) { S.mic = 'off'; $('sMic').value = 'off'; $('bMic').textContent = 'Mic: Off'; toast('Microphone blocked: ' + (e.message || e.name)); }
  store.set('settings', S);
}

// ======================================================================== menu wiring
function ensureAudio() { sfx.init(); sfx.setVolume(S.vol, S.voice); }
function saveName() { S.name = ($('name').value || '').trim().slice(0, 14); store.set('settings', S); }
$('bPlay').onclick = () => { ensureAudio(); saveName(); if (!S.name) { $('name').focus(); $('name').placeholder = 'Enter a name first'; return; } show('play'); sfx.click(); };
$('bSettings').onclick = () => { ensureAudio(); show('settings'); sfx.click(); };
$('bCredits').onclick = () => { show('credits'); };
$('bSetBack').onclick = () => { show(G.phase === 'play' ? 'pause' : lastScreen === 'settings' ? 'menu' : lastScreen); };
$('bCredBack').onclick = () => show('menu');
$('bBack1').onclick = () => show('menu');
$('code').oninput = () => { $('code').value = $('code').value.toUpperCase().replace(/[^A-Z0-9]/g, ''); };
$('code').onkeydown = e => { if (e.key === 'Enter') $('bJoin').click(); };
$('bCreate').onclick = () => enterRoom('create');
$('bJoin').onclick = () => enterRoom('join');
async function enterRoom(mode) {
  ensureAudio(); saveName();
  if (!S.name) { S.name = 'Survivor' + Math.floor(Math.random() * 90 + 10); }
  $('playErr').textContent = mode === 'create' ? 'Creating room…' : 'Joining…';
  $('bCreate').disabled = $('bJoin').disabled = true;
  try {
    if (!net) { net = OFFLINE ? new LocalNet() : BC ? new BCNet() : new Net(); bindNet(); voice = new Voice(net, sfx, myId); }
    let res, code;
    for (let tries = 0; tries < 4; tries++) {
      code = mode === 'create' ? newCode() : $('code').value.trim();
      if (mode === 'join' && code.length !== 6) { res = { ok: false, err: 'Room codes are 6 characters.' }; break; }
      res = await net.join(code, { id: myId, name: S.name }, mode);
      if (res.ok || res.err !== 'taken') break;
    }
    if (!res.ok) { $('playErr').textContent = res.err; return; }
    $('playErr').textContent = '';
    $('roomCode').textContent = code; $('chatLog').innerHTML = '';
    chatLine(null, mode === 'create' ? 'Room created. Share the code with your friends.' : 'Joined room ' + code + '.', true);
    G.phase = 'lobby'; G.ready = false; show('lobby'); renderLobby();
    applyMic();
  } catch (e) { $('playErr').textContent = e.message || String(e); }
  finally { $('bCreate').disabled = $('bJoin').disabled = false; }
}
$('bCopy').onclick = () => { navigator.clipboard.writeText($('roomCode').textContent).then(() => { $('bCopy').textContent = 'Copied'; setTimeout(() => $('bCopy').textContent = 'Copy', 1400); }).catch(() => {}); };
$('bLink').onclick = () => { navigator.clipboard.writeText(location.origin + location.pathname + '?room=' + $('roomCode').textContent).then(() => { $('bLink').textContent = 'Copied'; setTimeout(() => $('bLink').textContent = 'Link', 1400); }).catch(() => {}); };
$('bReady').onclick = () => { G.ready = !G.ready; net.update({ ready: G.ready }); sfx.click(); renderLobby(); };
$('bMic').onclick = () => { S.mic = S.mic === 'off' ? 'open' : 'off'; $('sMic').value = S.mic; applyMic(); };
$('bStart').onclick = () => { if (!isHost()) return; hostStart(); };
$('bLeave').onclick = () => leaveRoom();
$('chatIn').onkeydown = e => { if (e.key === 'Enter') { const t = $('chatIn').value.trim(); if (!t) return; $('chatIn').value = ''; sendChat(t); } };
function sendChat(text) { net.send({ t: 'chat', from: myId, n: S.name, text }); onChat({ from: myId, n: S.name, text }); }
function onChat(m) {
  if (G.phase === 'lobby') chatLine({ id: m.from, n: m.n }, m.text);
  else feed(m.n + ': ' + m.text);
}
async function leaveRoom() {
  if (voice) voice.dropAll();
  endRound();
  if (net) await net.leave();
  G.phase = 'menu'; renderPass.scene = menuScene; $('hud').classList.add('hidden'); $('enter').classList.add('hidden'); sfx.stopAmbient();
  if (document.pointerLockElement) document.exitPointerLock();
  show('menu');
}

function renderLobby() {
  if (!net) return;
  const ps = net.players(), host = net.hostId();
  ps.forEach((p, i) => { G.colors[p.id] = COLORS[i % 4]; G.names[p.id] = p.name; });
  const rows = ps.map(p => `<div class="pl"><i style="background:${colorOf(p.id)}"></i><span class="nm">${esc(p.name)}${p.id === myId ? ' <span style="color:var(--dim)">(you)</span>' : ''}</span>${p.id === host ? '<span class="host">HOST</span>' : ''}<svg class="spk${(p.id === myId ? voice && voice.level > 0.02 : voice && voice.speaking(p.id)) ? ' on' : ''}" data-id="${p.id}" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-2.1A7 7 0 0 0 19 12z"/></svg>${p.id === host ? '' : `<span class="st ${p.ready ? 'ok' : ''}">${p.ready ? 'READY' : 'NOT READY'}</span>`}</div>`);
  for (let i = ps.length; i < MAX_PLAYERS; i++) rows.push('<div class="pl empty"><i style="background:#222"></i><span class="nm">Waiting for player…</span></div>');
  $('plist').innerHTML = rows.join('');
  const amHost = host === myId, others = ps.filter(p => p.id !== host), allReady = others.every(p => p.ready);
  $('bStart').classList.toggle('hidden', !amHost);
  $('bReady').classList.toggle('hidden', amHost);
  $('bReady').textContent = G.ready ? 'Ready ✓' : 'Ready';
  $('bStart').disabled = !allReady;
  $('bStart').textContent = ps.length === 1 ? 'Start solo' : 'Start game';
  $('lobbyNote').textContent = amHost ? (allReady ? (ps.length === 1 ? 'Waiting for friends? Share the code. Or go in alone.' : 'Everyone is ready.') : 'Waiting for everyone to ready up…') : 'Waiting for the host to start…';
}

// ======================================================================== networking
function bindNet() {
  net.on('presence', list => {
    if (G.phase === 'lobby') renderLobby();
    if (voice) voice.sync(list.map(p => p.id));
    const ids = new Set(list.map(p => p.id));
    // disconnects during a round
    if (G.phase === 'play' || G.phase === 'end') {
      for (const id of [...G.remotes.keys()]) if (!ids.has(id)) { feed(nameOf(id) + ' disconnected', 'sys'); removeRemote(id); }
      if (isHost() && !G.host) becomeHost();
      if (G.host && G.Wm) { let ch = false; for (const id of Object.keys(G.Wm.pl)) if (!ids.has(id)) { delete G.Wm.pl[id]; ch = true; } if (ch) commit(); }
    }
  });
  net.on('chat', onChat);
  net.on('start', m => { if (G.phase === 'lobby' && m.from === net.hostId()) beginRound(m); });
  net.on('p', onPlayerState);
  net.on('w', m => { if (m.from === net.hostId() && !G.host && G.phase !== 'lobby') applyWorld(m.w); });
  net.on('fx', m => { if (m.from === net.hostId() && !G.host) onFx(m); });
  net.on('req', m => { if (G.host) hostReq(m.r, m.from); });
  net.on('lobby', m => { if (m.from === net.hostId()) backToLobby(); });
}
function hostStart() {
  const ps = net.players();
  const m = { t: 'start', from: myId, seed: (Math.random() * 2 ** 31) | 0, roster: ps.map(p => p.id), names: Object.fromEntries(ps.map(p => [p.id, p.name])) };
  net.send(m); beginRound(m);
}

// ======================================================================== round lifecycle
async function beginRound(m) {
  G.phase = 'loading'; $('loading').classList.remove('hidden'); $('loadMsg').textContent = 'ENTERING ST. AGNES';
  show(null);
  await new Promise(r => setTimeout(r, 30));
  endRound();
  G.seed = m.seed; G.roster = m.roster; Object.assign(G.names, m.names);
  m.roster.forEach((id, i) => G.colors[id] = COLORS[i % 4]);
  const map = G.map = buildMap(m.seed);
  const scene = G.scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x020203, 0.062); scene.background = new THREE.Color(0x000000);
  scene.add(new THREE.HemisphereLight(0x5a6878, 0x0c0606, 0.075));
  G.world = new World(scene, map, S.gfx);
  scene.add(flash, flashTgt, beam);
  G.spots = []; for (let i = 0; i < 3; i++) { const s = new THREE.SpotLight(0xfff1dc, 0, 26, 0.44, 0.55, 1.65); const tg = new THREE.Object3D(); s.target = tg; scene.add(s, tg); G.spots.push(s); }
  G.mon.model = makeMonsterModel(); scene.add(G.mon.model.group);
  G.mon.x = map.monsterSpawn.x; G.mon.z = map.monsterSpawn.z; G.mon.y = map.floorH(G.mon.x, G.mon.z); G.mon.buf = []; G.mon.st = 'roam'; G.mon.sp = 0;
  const ap = makeMonsterModel(); ap.group.visible = false; scene.add(ap.group); G.appar = { model: ap, on: false };
  for (const id of m.roster) if (id !== myId) addRemote(id);
  const idx = Math.max(0, m.roster.indexOf(myId)), sp = map.spawns[idx % map.spawns.length];
  Object.assign(G.me, { x: sp.x, z: sp.z, fy: 0, y: EYE, yaw: sp.yaw, pitch: 0, vx: 0, vz: 0, crouch: false, ck: 0, flash: true, bat: 100, sta: 100, exh: false, hidden: -1, noise: 0, stepAcc: 0, speed: 0 });
  G.W = initWorld(map, m.roster); G.Wm = null; G.host = false; G.ai = null;
  applyWorld(G.W, true);
  if (isHost()) becomeHost(true);
  G.t = 0; G.powerT = 0; G.blackoutUntil = 0; G.scareT = 150 + Math.random() * 120; G.apparT = 50 + Math.random() * 60; G.dir = { doorT: 60 + Math.random() * 40, boT: 220 + Math.random() * 100 };
  G.endShown = false; G.startAt = now(); G.spect = 0;
  renderPass.scene = scene;
  net.update({ phase: 'game', ready: false });
  // warm up shaders
  if (!NORENDER) renderer.compile(scene, camera);
  $('loading').classList.add('hidden');
  G.phase = 'play';
  $('hud').classList.remove('hidden'); $('enter').classList.remove('hidden');
  ['lockerOv', 'downOv', 'escOv', 'specOv'].forEach(i => $(i).classList.add('hidden'));
  $('feed').innerHTML = ''; $('toast').innerHTML = '';
  sfx.resumeAmbient(); sfx.setHum(0);
  setTimeout(() => callout('ST. AGNES MEMORIAL', '2:13 AM · THE POWER IS OUT', 4200), 600);
  setTimeout(() => toast('Restore power. Find a way out. Stay together.', 5000), 5200);
}
function endRound() {
  if (G.world) { G.world.dispose(); G.world = null; }
  if (G.scene) { G.scene.remove(flash, flashTgt, beam); G.spots.forEach(s => G.scene.remove(s, s.target)); G.scene = null; }
  for (const id of [...G.remotes.keys()]) removeRemote(id);
  G.ai = null; G.host = false; G.map = null; G.appar = null;
}
function backToLobby() {
  endRound();
  G.phase = 'lobby'; G.ready = false; renderPass.scene = menuScene;
  $('hud').classList.add('hidden'); $('enter').classList.add('hidden'); ['keypad', 'monitor'].forEach(i => $(i).classList.add('hidden'));
  if (document.pointerLockElement) document.exitPointerLock();
  sfx.stopAmbient();
  net.update({ phase: 'lobby', ready: false });
  show('lobby'); renderLobby();
  chatLine(null, 'Back in the lobby.', true);
}
function initWorld(map, roster) {
  return {
    v: 0, t: 0, items: map.items.map(() => 0), inv: { fuse: 0, key: 0, cut: 0 }, fin: 0, power: 0, pAt: 0, valve: 0, code: 0, gate: 0, grate: 0,
    doors: map.doors.map((d, i) => [map.initialDoorsOpen[i], d.type === 'D' ? 0 : 1]), sec: map.secrets.map(() => 0),
    pl: Object.fromEntries(roster.map(id => [id, { dn: 0, da: 0, tk: 0, es: 0 }])), aggr: 1, stage: 0, phase: 'play', found: 0,
  };
}

// ======================================================================== host authority
function becomeHost(initial) {
  G.host = true;
  G.Wm = JSON.parse(JSON.stringify(G.W));
  const from = initial ? null : { x: G.mon.x, z: G.mon.z, yaw: G.mon.yaw };
  G.ai = new MonsterAI(G.map, rng(G.seed ^ 0x77 ^ (initial ? 0 : Date.now())), from);
  if (!initial) { for (const id of Object.keys(G.Wm.pl)) G.ai.ignore[id] = G.Wm.t + 6; feed('You are now the host', 'sys'); const ids = new Set(net.players().map(p => p.id)); for (const id of Object.keys(G.Wm.pl)) if (!ids.has(id)) delete G.Wm.pl[id]; commit(); }
}
function commit() { if (!G.host) return; G.Wm.v++; G.dirty = true; applyWorld(JSON.parse(JSON.stringify(G.Wm))); }
function fx(m) { if (!G.host) return; m.t = 'fx'; m.from = myId; net.send(m); onFx(m); }
function req(r) { if (G.host) hostReq(r, myId); else net.send({ t: 'req', from: myId, r }); }
function hostReq(r, from) {
  const W = G.Wm, map = G.map; if (!W || W.phase !== 'play') return;
  const P = W.pl[from]; if (!P || P.tk) return;
  if (P.dn && r.k !== 'noop') return;
  const deny = msg => fx({ k: 'deny', to: from, msg });
  switch (r.k) {
    case 'take': {
      if (W.items[r.i]) return; W.items[r.i] = 1; const it = map.items[r.i];
      if (it.type === 'fuse') W.inv.fuse++; else if (it.type === 'key') W.inv.key = 1; else if (it.type === 'cutters') W.inv.cut = 1;
      W.found++;
      fx({ k: 'pick', by: from, type: it.type, i: r.i, n: W.fin + W.inv.fuse }); commit(); break;
    }
    case 'door': {
      const d = map.doors[r.d], st = W.doors[r.d]; if (!d) return;
      if (d.type === 'D') { st[0] = st[0] ? 0 : 1; fx({ k: 'door', d: r.d }); commit(); }
      else if (d.type === 'R') {
        if (st[1]) { if (W.inv.key) { st[1] = 0; st[0] = 1; fx({ k: 'unlock', d: r.d }); commit(); } else deny('Locked. It needs a security keycard.'); }
        else { st[0] = st[0] ? 0 : 1; fx({ k: 'door', d: r.d }); commit(); }
      } else if (d.type === 'P') { if (!W.power) deny('Sealed. The doors have no power.'); }
      else if (d.type === 'C') {
        if (W.grate) return;
        if (!W.valve) deny('The tunnel is flooded past the grate. Drain it first.');
        else if (!W.inv.cut) deny('Chained shut. You need bolt cutters.');
        else { W.grate = 1; st[0] = 1; st[1] = 0; fx({ k: 'grate', d: r.d }); commit(); }
      }
      break;
    }
    case 'code': {
      if (!W.power || W.gate) return;
      if (r.c === map.code) { W.gate = 1; map.doors.forEach((d, i) => { if (d.type === 'G') { W.doors[i][0] = 1; W.doors[i][1] = 0; } }); fx({ k: 'gate' }); commit(); }
      else fx({ k: 'badcode', to: from });
      break;
    }
    case 'fuse': {
      if (W.inv.fuse <= 0 || W.fin >= 3) return;
      W.fin = Math.min(3, W.fin + W.inv.fuse); W.inv.fuse = 0;
      if (W.fin >= 3) { W.power = 1; W.pAt = W.t; map.doors.forEach((d, i) => { if (d.type === 'P') { W.doors[i][0] = 1; W.doors[i][1] = 0; } }); fx({ k: 'power' }); }
      else fx({ k: 'fuse', n: W.fin });
      commit(); break;
    }
    case 'valve': if (!W.power) deny('The valve won\'t budge. The pump has no power.'); else if (!W.valve) { W.valve = 1; fx({ k: 'valve' }); commit(); } break;
    case 'monitor': if (W.power && !W.code) { W.code = 1; fx({ k: 'code', by: from }); commit(); } break;
    case 'secret': if (!W.sec[r.s]) { W.sec[r.s] = 1; fx({ k: 'secret', s: r.s, by: from }); commit(); } break;
    case 'revive': { const T = W.pl[r.id]; if (T && T.dn && !T.tk) { T.dn = 0; if (G.ai) G.ai.ignore[r.id] = W.t + 8; fx({ k: 'revive', by: from, id: r.id }); commit(); } break; }
  }
}
function playerList() {
  // everyone the monster can act on, with the freshest positions the host has
  const W = G.Wm, out = [];
  for (const id of Object.keys(W.pl)) {
    const P = W.pl[id]; if (P.tk) continue;
    let s;
    if (id === myId) { const me = G.me; s = { x: me.x, y: me.fy, z: me.z, yaw: me.yaw, pitch: me.pitch, hidden: me.hidden >= 0, h: me.hidden, noise: me.noise, flash: me.flash && me.bat > 0, crouch: me.crouch }; }
    else { const r = G.remotes.get(id); if (!r || !r.last || now() - r.lastRecv > 10000) continue; const l = r.last; s = { x: l.x, y: l.y, z: l.z, yaw: l.yw, pitch: l.pt, hidden: l.h >= 0, h: l.h, noise: (l.n || 0) / 100, flash: !!l.f, crouch: !!l.c }; }
    if (s.hidden) { const lk = G.world.lockers[s.h]; if (lk) { s.hideX = lk.ex; s.hideZ = lk.ez; } }
    out.push(Object.assign(s, { id, alive: !P.dn, escaped: !!P.es }));
  }
  return out;
}
function hostUpdate(dt) {
  const W = G.Wm; if (!W || W.phase !== 'play') return;
  W.t += dt;
  W.aggr = 1 + Math.min(1.25, W.t / 60 * 0.09) + (W.power ? 0.3 : 0) + Object.values(W.pl).filter(p => p.dn).length * 0.1;
  const stage = Math.min(3, Math.floor(W.t / 170));
  if (stage > W.stage) { W.stage = stage; fx({ k: 'stage', n: stage }); }
  const players = playerList();
  const ev = G.ai.update(dt, players, { aggr: W.aggr, time: W.t });
  for (const e of ev) {
    if (e.k === 'catch') { const P = W.pl[e.id]; if (P && !P.dn) { P.dn = 1; P.da = W.t; fx({ k: 'down', id: e.id, locker: !!e.locker }); commit(); } }
    else if (e.k === 'door') { if (!W.doors[e.id][0]) { W.doors[e.id][0] = 1; fx({ k: 'door', d: e.id, slam: 1 }); commit(); } }
    else if (e.k === 'screech' || e.k === 'growl') fx({ k: 'roar', r: e.k });
  }
  // bleeding out
  for (const [id, P] of Object.entries(W.pl)) if (P.dn && !P.tk && W.t - P.da > 60) { P.tk = 1; fx({ k: 'taken', id }); commit(); }
  // escape state
  const exitOpen = { gate: !!W.gate, sewer: !!W.grate };
  for (const p of players) { const P = W.pl[p.id]; const ex = G.map.inExit(p.x, p.z); const es = ex && exitOpen[ex] && !P.dn ? 1 : 0; if (P.es !== es) { P.es = es; commit(); } }
  // win / lose
  const live = Object.entries(W.pl).filter(([id, P]) => !P.tk && (id === myId || (G.remotes.get(id) && now() - G.remotes.get(id).lastRecv < 10000)));
  if (live.length && live.every(([, P]) => P.es)) { W.phase = 'win'; commit(); }
  else if (!live.length || live.every(([, P]) => P.dn)) { W.phase = 'lose'; commit(); }
  // director: doors that move on their own, blackouts
  G.dir.doorT -= dt;
  if (G.dir.doorT <= 0) {
    G.dir.doorT = (50 + Math.random() * 60) / W.aggr;
    const al = players.filter(p => p.alive && !p.escaped);
    if (al.length) {
      const p = al[Math.floor(Math.random() * al.length)];
      const cands = G.map.doors.filter(d => d.type === 'D').filter(d => { const x = (d.x + 0.5) * C, z = (d.z + 0.5) * C, dd = Math.hypot(x - p.x, z - p.z); return dd > 5 && dd < 16 && Math.hypot(x - G.ai.x, z - G.ai.z) > 8; });
      if (cands.length) { const d = cands[Math.floor(Math.random() * cands.length)]; W.doors[d.id][0] = W.doors[d.id][0] ? 0 : 1; fx({ k: 'door', d: d.id, slam: Math.random() < 0.6 ? 1 : 0 }); commit(); }
    }
  }
  G.dir.boT -= dt;
  if (G.dir.boT <= 0) { G.dir.boT = (140 + Math.random() * 120) / W.aggr; if (W.power) fx({ k: 'blackout', dur: 4 + Math.random() * 4 }); }
  // replicate
  const t = now();
  if ((G.dirty && t - G.lastW > 90) || t - G.lastW > 2000) { G.dirty = false; G.lastW = t; net.send({ t: 'w', from: myId, w: G.Wm }); }
}

// ======================================================================== applying replicated state
function applyWorld(w, initial) {
  const old = G.W, map = G.map, world = G.world; if (!map || !world) return;
  if (!initial && old && w.v < old.v && !G.host) return;
  G.W = w;
  w.doors.forEach((st, i) => { map.doorOpen[i] = st[0]; world.doorObjs[i].tgt = st[0]; if (world.doorObjs[i].parts.length) world.doorObjs[i].parts.forEach(p => p.material.color.setRGB(st[1] ? 4 : 0.1, st[1] ? 0.1 : 3, 0.1)); });
  w.sec.forEach((o, i) => { map.secretOpen[i] = o; world.secretObjs[i].tgt = o; });
  w.items.forEach((g, i) => { const o = world.itemObjs[i]; if (g && !o.gone) { o.gone = true; o.g.visible = false; } });
  world.breaker && world.breaker.fuses.forEach((f, i) => { f.visible = i < w.fin; world.breaker.lights[i].color.setRGB(i < w.fin ? 0.1 : 3, i < w.fin ? 3 : 0.1, 0.05); });
  if (world.breaker) world.breaker.lever.rotation.x = w.power ? -0.6 : 0.6;
  if (w.power && (!old || !old.power || initial)) { world.setPower(true); G.powerT = initial ? 99 : 0; sfx.setHum(0.05); }
  if (w.valve) { world.waterT = -3.4 + 0.03; if (world.valve) world.valve.a = 6.28 * 2; }
  if (w.code && !world._code) { world._code = 1; world.setScreens(map.code); }
  const me = w.pl[myId], om = old && old.pl[myId];
  if (me && om && me.dn !== om.dn) { if (me.dn) onDowned(); else onRevived(); }
  if (me && om && me.tk && !om.tk) onTaken();
  if (w.phase !== 'play' && !G.endShown) showEnd(w);
}

// ======================================================================== fx from host
function posOf(id) { if (id === myId) return { x: G.me.x, y: G.me.fy + 1, z: G.me.z }; const r = G.remotes.get(id); return r ? { x: r.x, y: r.y + 1, z: r.z } : null; }
const itemName = { fuse: 'a fuse', key: 'the security keycard', cutters: 'bolt cutters', battery: 'a battery' };
function onFx(m) {
  const map = G.map; if (!map) return;
  const doorPos = i => { const d = map.doors[i]; return { x: (d.x + 0.5) * C, y: map.floorH((d.x + 0.5) * C, (d.z + 0.5) * C) + 1.2, z: (d.z + 0.5) * C }; };
  const who = id => id === myId ? 'You' : nameOf(id);
  switch (m.k) {
    case 'pick':
      if (m.by === myId) sfx.pickup();
      if (m.type === 'battery') { if (m.by === myId) { G.me.bat = Math.min(100, G.me.bat + 55); toast('Battery +55%'); } }
      else feed(`${who(m.by)} found ${itemName[m.type]}${m.type === 'fuse' ? ` (${m.n}/3)` : ''}`, 'sys');
      break;
    case 'door': sfx.door(doorPos(m.d), !!m.slam); break;
    case 'unlock': sfx.beep(true); sfx.door(doorPos(m.d)); feed('The security door is unlocked', 'sys'); break;
    case 'deny': if (m.to === myId) { sfx.beep(false); toast(m.msg); } break;
    case 'badcode': if (m.to === myId) { sfx.beep(false); const d = $('kpDisp'); d.textContent = 'DENIED'; d.classList.add('bad'); setTimeout(() => { d.classList.remove('bad'); kpCode = ''; d.textContent = ''; }, 900); } break;
    case 'fuse': sfx.metal(G.world.breaker, 0.5); feed(`Fuses installed (${m.n}/3)`, 'sys'); break;
    case 'power': sfx.powerOn(); callout('POWER RESTORED', 'SOMETHING STIRS BELOW', 4000); setTimeout(() => sfx.growl({ x: G.mon.x, y: G.mon.y + 2, z: G.mon.z }, 1.2, 2.2), 1800); break;
    case 'valve': sfx.metal(G.world.valve, 0.7); sfx.thud(G.world.valve, 0.8); feed('The tunnels are draining…', 'sys'); break;
    case 'code': feed(`${who(m.by)} found the exit code: ${map.code}`, 'sys'); break;
    case 'gate': sfx.beep(true); sfx.metal(doorPos(map.doors.findIndex(d => d.type === 'G')), 1); callout('THE GATE IS OPEN', 'GET EVERYONE TO THE COURTYARD', 4500); break;
    case 'grate': sfx.metal(doorPos(m.d), 1); callout('THE GRATE IS OPEN', 'GET EVERYONE TO THE SEWER OUTFALL', 4500); break;
    case 'secret': sfx.thud(posOf(m.by) || G.me, 0.6); feed(`${who(m.by)} found a hidden passage`, 'sys'); break;
    case 'down':
      if (m.id !== myId) { feed(`${nameOf(m.id)} is down! Revive them.`, 'sys'); const p = posOf(m.id); if (p) sfx.screech(p, 1, 1.4); }
      break;
    case 'revive': feed(`${who(m.by)} revived ${m.id === myId ? 'you' : nameOf(m.id)}`, 'sys'); break;
    case 'taken': feed(`${m.id === myId ? 'You were' : nameOf(m.id) + ' was'} taken.`, 'sys'); break;
    case 'roar': { const p = { x: G.mon.x, y: G.mon.y + 2.1, z: G.mon.z }; if (m.r === 'screech') sfx.screech(p, 1.1); else sfx.growl(p, 1); break; }
    case 'blackout': G.blackoutUntil = now() + m.dur * 1000; sfx.thud(null, 0.8); sfx.setHum(0); setTimeout(() => { if (G.W && G.W.power) sfx.setHum(0.05); }, m.dur * 1000); break;
    case 'stage': callout('', ['', 'IT IS GETTING RESTLESS', 'IT KNOWS YOU ARE HERE', 'IT IS HUNTING NOW'][m.n] || '', 3500); break;
  }
}

// ======================================================================== remote players
function addRemote(id) {
  if (G.remotes.has(id) || !G.scene) return;
  const av = makeAvatar(nameOf(id), colorOf(id)); G.scene.add(av.group);
  G.remotes.set(id, { id, av, buf: [], last: null, lastRecv: now(), x: 0, y: -99, z: 0, yaw: 0, pitch: 0, f: 0, c: 0, h: -1, speed: 0, stepAcc: 0, px: 0, pz: 0 });
}
function removeRemote(id) { const r = G.remotes.get(id); if (!r) return; if (G.scene) G.scene.remove(r.av.group); G.remotes.delete(id); }
function onPlayerState(m) {
  if (G.phase !== 'play' && G.phase !== 'end') return;
  if (m.id === myId) return;
  if (!G.remotes.has(m.id)) { if (!G.roster.includes(m.id)) return; addRemote(m.id); }
  const r = G.remotes.get(m.id); r.last = m; r.lastRecv = now();
  r.buf.push({ t: now(), x: m.x, y: m.y, z: m.z, yw: m.yw, pt: m.pt }); if (r.buf.length > 12) r.buf.shift();
  r.f = m.f; r.c = m.c; r.h = m.h; r.n = m.n;
  if (m.m && m.id === net.hostId() && !G.host) { G.mon.buf.push({ t: now(), ...m.m }); if (G.mon.buf.length > 12) G.mon.buf.shift(); G.mon.st = m.m.st; }
}
function interp(buf, delay) {
  const t = now() - delay; if (!buf.length) return null;
  if (buf.length === 1 || t <= buf[0].t) return buf[0];
  for (let i = buf.length - 1; i > 0; i--) {
    const a = buf[i - 1], b = buf[i];
    if (t >= a.t && t <= b.t) { const k = (t - a.t) / Math.max(1, b.t - a.t); const o = {}; for (const key in b) { if (typeof b[key] === 'number' && typeof a[key] === 'number') o[key] = key === 'yw' ? lerpAng(a[key], b[key], k) : a[key] + (b[key] - a[key]) * k; else o[key] = b[key]; } return o; }
  }
  return buf[buf.length - 1];
}
function lerpAng(a, b, k) { let d = b - a; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; return a + d * k; }
function updateRemotes(dt) {
  const W = G.W;
  for (const r of G.remotes.values()) {
    const s = interp(r.buf, 170); if (!s) { r.av.group.visible = false; continue; }
    const px = r.x, pz = r.z; r.x = s.x; r.y = s.y; r.z = s.z; r.yaw = s.yw; r.pitch = s.pt;
    const mv = Math.hypot(r.x - px, r.z - pz); r.speed += ((dt > 0 ? mv / dt : 0) - r.speed) * Math.min(1, dt * 8); if (r.speed > 9) r.speed = 0;
    const P = W && W.pl[r.id]; const down = P && P.dn, gone = P && P.tk, stale = now() - r.lastRecv > 10000;
    r.av.group.visible = !gone && r.h < 0 && !stale;
    r.av.group.position.set(r.x, r.y, r.z); r.av.group.rotation.y = r.yaw + Math.PI;
    r.av.update(dt, { speed: down ? 0 : r.speed, crouch: !!r.c, down, pitch: r.pitch, flash: !!r.f, t: G.t });
    r.av.tag.visible = !down || true;
    // footsteps
    if (!down && r.h < 0 && mv < 2) { r.stepAcc += mv; const stride = r.c ? 1.1 : r.speed > 4.2 ? 1.9 : 1.55; if (r.stepAcc > stride) { r.stepAcc = 0; sfx.step({ x: r.x, y: r.y + 0.1, z: r.z }, r.c ? 0.12 : r.speed > 4.2 ? 0.7 : 0.35, r.y < -1.7); } }
  }
  // remote flashlights: nearest three with lights on
  const lit = [...G.remotes.values()].filter(r => r.f && r.av.group.visible && !(W && W.pl[r.id] && W.pl[r.id].dn)).sort((a, b) => Math.hypot(a.x - G.me.x, a.z - G.me.z) - Math.hypot(b.x - G.me.x, b.z - G.me.z));
  G.spots.forEach((s, i) => {
    const r = lit[i]; if (!r) { s.intensity = 0; return; }
    const eye = r.y + (r.c ? CROUCH_EYE : EYE) - 0.3, dx = -Math.sin(r.yaw) * Math.cos(r.pitch), dy = Math.sin(r.pitch), dz = -Math.cos(r.yaw) * Math.cos(r.pitch);
    s.position.set(r.x + Math.cos(r.yaw) * 0.25, eye, r.z - Math.sin(r.yaw) * 0.25); s.target.position.set(s.position.x + dx * 5, eye + dy * 5, s.position.z + dz * 5); s.intensity = FLASH_I * 0.8;
  });
}

// ======================================================================== local player
const keyDown = c => !!G.keys[c];
let mouseDX = 0, mouseDY = 0;
addEventListener('mousemove', e => { if (document.pointerLockElement === renderer.domElement) { mouseDX += e.movementX; mouseDY += e.movementY; } });
function alive() { const P = G.W && G.W.pl[myId]; return P && !P.dn && !P.tk; }
function updateMe(dt) {
  const me = G.me, map = G.map, P = G.W.pl[myId] || {};
  const sens = 0.0021 * S.sens;
  if (!P.tk) { me.yaw -= mouseDX * sens; me.pitch = clamp(me.pitch - mouseDY * sens * (S.inv ? -1 : 1), -1.45, 1.45); }
  mouseDX = mouseDY = 0;
  if (P.tk) { spectate(dt); return; }
  if (P.dn) {
    me.vx = me.vz = 0; me.noise = Math.max(0, me.noise - dt);
    camera.position.set(me.x, me.fy + 0.35, me.z); camera.rotation.set(me.pitch * 0.5, me.yaw, 0.35, 'YXZ'); return;
  }
  if (me.hidden >= 0) {
    const lk = G.world.lockers[me.hidden];
    const base = Math.atan2(-lk.fx, -lk.fz);
    let d = me.yaw - base; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; me.yaw = base + clamp(d, -0.5, 0.5); me.pitch = clamp(me.pitch, -0.3, 0.25);
    camera.position.set(lk.x, lk.y + 1.55, lk.z); camera.rotation.set(me.pitch, me.yaw, 0, 'YXZ');
    me.noise = Math.max(0, me.noise - dt * 2); me.speed = 0; me.sta = Math.min(100, me.sta + dt * 15);
    return;
  }
  const typing = !$('gchat').classList.contains('hidden') || (!NORENDER && document.pointerLockElement !== renderer.domElement);
  let fx = 0, fz = 0;
  if (!typing) { if (keyDown('KeyW') || keyDown('ArrowUp')) fz -= 1; if (keyDown('KeyS') || keyDown('ArrowDown')) fz += 1; if (keyDown('KeyA') || keyDown('ArrowLeft')) fx -= 1; if (keyDown('KeyD') || keyDown('ArrowRight')) fx += 1; }
  const moving = fx || fz;
  const wantSprint = !typing && (keyDown('ShiftLeft') || keyDown('ShiftRight')) && moving && fz <= 0 && !me.crouch;
  me.sprint = wantSprint && !me.exh && me.sta > 0;
  if (me.sprint) { me.sta -= dt * 17; me.staT = 1.2; if (me.sta <= 0) { me.sta = 0; me.exh = true; sfx.breathe(0.35); } }
  else { me.staT -= dt; if (me.staT <= 0) me.sta = Math.min(100, me.sta + dt * 12); if (me.exh && me.sta > 35) me.exh = false; }
  if (me.exh && Math.random() < dt * 1.2) sfx.breathe(0.18);
  const maxV = me.crouch ? 1.55 : me.sprint ? 5.5 : 3.0;
  const l = Math.hypot(fx, fz) || 1, s = Math.sin(me.yaw), c = Math.cos(me.yaw);
  const tx = (fx * c + fz * s) / l * maxV * (moving ? 1 : 0), tz = (-fx * s + fz * c) / l * maxV * (moving ? 1 : 0);
  const acc = Math.min(1, dt * (moving ? 11 : 9));
  me.vx += (tx - me.vx) * acc; me.vz += (tz - me.vz) * acc;
  const ox = me.x, oz = me.z;
  me.x += me.vx * dt; me.z += me.vz * dt;
  map.collide(me, 0.3);
  const moved = Math.hypot(me.x - ox, me.z - oz); me.speed = dt > 0 ? moved / dt : 0;
  const fl = map.floorH(me.x, me.z); me.fy += (fl - me.fy) * Math.min(1, dt * 14);
  me.ck += ((me.crouch ? 1 : 0) - me.ck) * Math.min(1, dt * 9);
  // head bob + footsteps
  const k = clamp(me.speed / 3, 0, 1.6);
  me.bob += dt * (me.sprint ? 13 : me.crouch ? 6 : 9) * (k > 0.05 ? 1 : 0);
  const bobY = Math.sin(me.bob * 2) * 0.035 * k, bobX = Math.cos(me.bob) * 0.025 * k;
  me.stepAcc += moved;
  const stride = me.crouch ? 1.1 : me.sprint ? 1.9 : 1.55;
  if (me.stepAcc > stride) {
    me.stepAcc = 0;
    const v = me.crouch ? 0.1 : me.sprint ? 0.55 : 0.3; sfx.step({ x: me.x, y: me.fy + 0.1, z: me.z }, v, me.fy < -1.7);
    me.noise = Math.max(me.noise, me.crouch ? 0.06 : me.sprint ? 1 : 0.32);
  }
  me.noise = Math.max(0, me.noise - dt * 0.9);
  if (voice) { const lv = voice.micLevel(); if (lv > 0.02) me.noise = Math.max(me.noise, Math.min(0.9, lv * 9)); }
  const eye = me.fy + EYE - (EYE - CROUCH_EYE) * me.ck + bobY;
  const sh = G.shake; G.shake = Math.max(0, G.shake - dt * 2.5);
  camera.position.set(me.x + Math.cos(me.yaw) * bobX + (Math.random() - 0.5) * sh * 0.06, eye + (Math.random() - 0.5) * sh * 0.06, me.z - Math.sin(me.yaw) * bobX);
  camera.rotation.set(me.pitch + (Math.random() - 0.5) * sh * 0.01, me.yaw, -bobX * 0.3 - me.vx * 0 , 'YXZ');
  me.y = eye;
}
function spectate(dt) {
  const al = [...G.remotes.values()].filter(r => { const P = G.W.pl[r.id]; return P && !P.tk && r.av.group.visible; });
  $('specSub').textContent = al.length ? 'SPECTATING ' + nameOf(al[G.spect % al.length].id).toUpperCase() + ' · CLICK TO SWITCH' : 'NO ONE LEFT TO WATCH';
  if (!al.length) { camera.position.set(G.mon.x, G.mon.y + 3.5, G.mon.z + 3); camera.lookAt(G.mon.x, G.mon.y + 1.5, G.mon.z); return; }
  const r = al[G.spect % al.length];
  const P = G.W.pl[r.id];
  const bx = r.x + Math.sin(r.yaw) * 1.6, bz = r.z + Math.cos(r.yaw) * 1.6;
  const p = { x: bx, z: bz }; G.map.collide(p, 0.2);
  camera.position.set(p.x, r.y + (P.dn ? 1.2 : 2.0), p.z); camera.lookAt(r.x, r.y + (P.dn ? 0.3 : 1.4), r.z);
  G.me.x = r.x; G.me.z = r.z; G.me.fy = r.y;
}

// flashlight
function updateFlash(dt) {
  const me = G.me, P = G.W.pl[myId] || {};
  const on = me.flash && me.bat > 0 && !P.tk && me.hidden < 0;
  if (on) me.bat = Math.max(0, me.bat - dt * 100 / 270);
  let k = on ? 1 : 0;
  if (on && me.bat < 15 && Math.random() < 0.08) k = 0.1;
  if (me.flick > 0) { me.flick -= dt; k = me.flick > 0.15 ? 0 : k; }
  if (G.appar && G.appar.forceDark) k = 0;
  const dir = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation);
  flashDir.lerp(dir, Math.min(1, dt * 16)).normalize();
  const right = new THREE.Vector3(1, 0, 0).applyEuler(camera.rotation);
  flash.position.copy(camera.position).addScaledVector(right, 0.18).add(new THREE.Vector3(0, -0.16, 0));
  flashTgt.position.copy(flash.position).addScaledVector(flashDir, 6);
  flash.intensity = FLASH_I * k * (me.bat < 25 ? 0.6 + me.bat / 60 : 1);
  beam.position.copy(flash.position); beam.lookAt(flashTgt.position); beam.material.uniforms.uI.value = 0.022 * k;
  return { on: k > 0.5, pos: flash.position, dir: flashDir };
}

// ======================================================================== interaction
function findInteract() {
  const me = G.me, map = G.map, world = G.world, W = G.W;
  if (!alive() || me.hidden >= 0) return me.hidden >= 0 ? { kind: 'unhide', text: 'Leave hiding spot' } : null;
  const f = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation);
  let best = null, bs = 1e9;
  const consider = (x, y, z, maxD, minDot, o, noLos) => {
    const dx = x - camera.position.x, dy = y - camera.position.y, dz = z - camera.position.z, d = Math.hypot(dx, dy, dz), dh = Math.hypot(dx, dz);
    if (dh > maxD || Math.abs(y - me.fy) > 2.6) return;
    const dot = d > 0.01 ? (dx * f.x + dy * f.y + dz * f.z) / d : 1; if (dot < minDot) return;
    if (!noLos && dh > 1.0 && !map.los(me.x, me.z, x - dx / dh * 0.6, z - dz / dh * 0.6)) return;
    const sc = dh * (1.6 - dot); if (sc < bs) { bs = sc; best = o; }
  };
  world.itemObjs.forEach((o, i) => { if (!o.gone) consider(o.it.x, o.g.position.y, o.it.z, 2.2, 0.72, { kind: 'take', i, text: 'Pick up ' + { fuse: 'fuse', key: 'keycard', cutters: 'bolt cutters', battery: 'battery' }[o.it.type] }); });
  map.doors.forEach((d, i) => {
    const st = W.doors[i], x = (d.x + 0.5) * C, z = (d.z + 0.5) * C, y = map.floorH(x, z) + 1.2;
    let text, ok = true;
    if (d.type === 'D') text = st[0] ? 'Close door' : 'Open door';
    else if (d.type === 'R') text = st[1] ? (W.inv.key ? 'Swipe keycard' : (ok = false, 'Locked · Security keycard required')) : st[0] ? 'Close door' : 'Open door';
    else if (d.type === 'P') { if (st[0]) return; text = 'Sealed · No power'; ok = false; }
    else if (d.type === 'G') { if (W.gate) return; text = W.power ? 'Enter exit code' : 'Keypad is dead · No power'; ok = !!W.power; if (ok) return consider(x - C / 2, y, z, 2.4, 0.5, { kind: 'keypad', text }, true); }
    else if (d.type === 'C') { if (W.grate) return; text = !W.valve ? 'Flooded · Drain the tunnels' : W.inv.cut ? 'Cut the chains' : 'Chained · Bolt cutters required'; ok = !!(W.valve && W.inv.cut); }
    consider(x, y, z, 2.3, 0.45, { kind: ok ? 'door' : 'info', d: i, text, reqDoor: !ok }, true);
  });
  for (const lk of Object.values(world.lockers)) {
    const occupied = [...G.remotes.values()].some(r => r.h === lk.p.id);
    consider(lk.x, lk.y + 1.1, lk.z, 1.9, 0.6, occupied ? { kind: 'info', text: 'Someone is hiding in here' } : { kind: 'hide', id: lk.p.id, text: 'Hide in locker' });
  }
  if (world.breaker) { const b = world.breaker, y = map.floorH(b.x, b.z) + 1.3; consider(b.x, y, b.z, 2.1, 0.5, W.fin >= 3 ? { kind: 'info', text: 'Power restored' } : W.inv.fuse > 0 ? { kind: 'fuse', text: `Install fuses (${W.fin + W.inv.fuse}/3)` } : { kind: 'info', text: `Breaker · ${3 - W.fin} fuse${3 - W.fin === 1 ? '' : 's'} missing` }); }
  if (world.valve) { const v = world.valve, y = map.floorH(v.x, v.z) + 1.25; consider(v.x, y, v.z, 2.0, 0.5, W.valve ? { kind: 'info', text: 'Tunnels drained' } : W.power ? { kind: 'valve', text: 'Open drain valve' } : { kind: 'valve', text: 'Open drain valve' }); }
  if (world.monitor) { const m = world.monitor; consider(m.x, 1.0, m.z, 2.3, 0.45, W.power ? { kind: 'monitor', text: 'Check security monitor' } : { kind: 'info', text: 'The monitors are dead · No power' }); }
  map.secrets.forEach((s, i) => {
    if (W.sec[i]) return;
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { if (map.t(s.x + dx, s.z + dz) === WALL) continue; const x = (s.x + 0.5 + dx * 0.5) * C, z = (s.z + 0.5 + dz * 0.5) * C; consider(x, map.floorH(x + dx * 0.5, z + dz * 0.5) + 1.2, z, 1.7, 0.82, { kind: 'secret', s: i, text: 'Push the loose panel' }); }
  });
  for (const r of G.remotes.values()) { const P = W.pl[r.id]; if (P && P.dn && !P.tk) consider(r.x, r.y + 0.3, r.z, 2.2, 0.1, { kind: 'revive', id: r.id, text: 'Hold to revive ' + nameOf(r.id) }); }
  return best;
}
function interact(t) {
  const me = G.me;
  if (!t) return;
  switch (t.kind) {
    case 'take': req({ k: 'take', i: t.i }); break;
    case 'door': req({ k: 'door', d: t.d }); me.noise = Math.max(me.noise, 0.45); break;
    case 'info': if (t.reqDoor) req({ k: 'door', d: t.d }); else toast(t.text, 2200); break;
    case 'hide': {
      const lk = G.world.lockers[t.id]; me.hidden = t.id; me.yaw = Math.atan2(-lk.fx, -lk.fz); me.pitch = 0; me.vx = me.vz = 0;
      lk.tgt = 1; setTimeout(() => lk.tgt = 0, 450); sfx.metal(lk, 0.3); me.noise = Math.max(me.noise, 0.2); me.crouch = false;
      $('lockerOv').classList.remove('hidden'); break;
    }
    case 'unhide': unhide(); break;
    case 'fuse': req({ k: 'fuse' }); break;
    case 'valve': req({ k: 'valve' }); me.noise = Math.max(me.noise, 0.6); break;
    case 'monitor': req({ k: 'monitor' }); openMonitor(); break;
    case 'keypad': openKeypad(); break;
    case 'secret': req({ k: 'secret', s: t.s }); break;
  }
}
function unhide() {
  const me = G.me; if (me.hidden < 0) return;
  const lk = G.world.lockers[me.hidden]; me.hidden = -1; me.x = lk.ex; me.z = lk.ez; G.map.collide(me, 0.3);
  lk.tgt = 1; setTimeout(() => lk.tgt = 0, 450); sfx.metal(lk, 0.3); me.noise = Math.max(me.noise, 0.25);
  $('lockerOv').classList.add('hidden');
}
let kpCode = '';
function openKeypad() { if (document.pointerLockElement) document.exitPointerLock(); kpCode = ''; $('kpDisp').textContent = ''; $('keypad').classList.remove('hidden'); G.modal = 'keypad'; }
function closeModal() { $('keypad').classList.add('hidden'); $('monitor').classList.add('hidden'); G.modal = null; lockPointer(); }
function openMonitor() { if (document.pointerLockElement) document.exitPointerLock(); $('monCode').textContent = G.map.code; $('monitor').classList.remove('hidden'); G.modal = 'monitor'; sfx.tone(60, 0.4, 0.15, 'sawtooth'); }
document.querySelectorAll('.kpg button').forEach(b => b.onclick = () => kpPress(b.dataset.k || b.textContent));
function kpPress(k) {
  sfx.tone(1200, 0.05, 0.1, 'square');
  if (k === 'clr') kpCode = ''; else if (k === 'go') { if (kpCode.length === 4) req({ k: 'code', c: kpCode }); return; } else if (kpCode.length < 4) kpCode += k;
  $('kpDisp').textContent = kpCode;
}
$('kpClose').onclick = closeModal; $('monClose').onclick = closeModal;

// ======================================================================== downed / revived / taken / end
function onDowned() {
  const me = G.me;
  if (me.hidden >= 0) { me.hidden = -1; $('lockerOv').classList.add('hidden'); const lk = Object.values(G.world.lockers).find(l => Math.hypot(l.ex - me.x, l.ez - me.z) < 3); if (lk) { me.x = lk.ex; me.z = lk.ez; } }
  // the scare: snap to face it
  const dx = G.mon.x - me.x, dz = G.mon.z - me.z; me.yaw = Math.atan2(-dx, -dz); me.pitch = 0.25;
  sfx.stinger(1.1); G.glitch = 1.4; G.shake = 1.6; redFlash(0.9);
  if (G.mon.model) G.mon.model.setEyes(14);
  setTimeout(() => G.mon.model && G.mon.model.setEyes(5), 800);
  $('downOv').classList.remove('hidden');
}
function onRevived() { $('downOv').classList.add('hidden'); toast('You were revived. Get up and move.'); G.me.sta = 60; }
function onTaken() { $('downOv').classList.add('hidden'); $('specOv').classList.remove('hidden'); }
function showEnd(w) {
  G.endShown = true; G.phase = 'end';
  if (document.pointerLockElement) document.exitPointerLock();
  ['lockerOv', 'downOv', 'escOv', 'specOv', 'keypad', 'monitor', 'enter'].forEach(i => $(i).classList.add('hidden'));
  const win = w.phase === 'win';
  $('endTitle').textContent = win ? 'YOU ESCAPED' : 'NO ONE LEFT'; $('endTitle').className = win ? 'win' : 'lose';
  $('endSub').textContent = win ? 'ST. AGNES LETS YOU GO. THIS TIME.' : 'THE NIGHT SHIFT NEVER ENDS.';
  const mins = Math.floor(w.t / 60), secs = Math.floor(w.t % 60);
  const rows = Object.entries(w.pl).map(([id, P]) => `<span style="color:${colorOf(id)}">■</span> ${esc(nameOf(id))} — ${P.tk ? 'taken' : P.es ? 'escaped' : P.dn ? 'down' : 'survived'}`);
  $('endStats').innerHTML = `TIME ${mins}:${String(secs).padStart(2, '0')} · ITEMS FOUND ${w.found} · ${w.power ? 'POWER RESTORED' : 'POWER NEVER CAME BACK'}<br>${rows.join('<br>')}`;
  $('bEndLobby').textContent = isHost() ? 'Back to lobby' : 'Waiting for host…'; $('bEndLobby').disabled = !isHost();
  if (win) { sfx.tone(220, 2, 0.15, 'triangle'); sfx.tone(330, 2.5, 0.1, 'triangle', 0.4); } else { sfx.stinger(0.7); }
  setTimeout(() => { if (G.phase === 'end') show('end'); }, win ? 600 : 1800);
}
$('bEndLobby').onclick = () => { if (!isHost()) return; net.send({ t: 'lobby', from: myId }); backToLobby(); };
$('bEndMenu').onclick = () => leaveRoom();
$('bResume').onclick = () => { show(null); lockPointer(); };
$('bPSettings').onclick = () => show('settings');
$('bQuit').onclick = () => leaveRoom();
$('enter').onclick = () => { ensureAudio(); lockPointer(); };

function lockPointer() {
  if (G.phase !== 'play') return;
  const p = renderer.domElement.requestPointerLock({ unadjustedMovement: true });
  if (p && p.catch) p.catch(() => renderer.domElement.requestPointerLock());
}
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === renderer.domElement;
  if (locked) { $('enter').classList.add('hidden'); show(null); }
  else if (G.phase === 'play' && !G.modal && $('gchat').classList.contains('hidden')) { show('pause'); }
});
renderer.domElement.addEventListener('click', () => {
  if (G.phase !== 'play') return;
  if (document.pointerLockElement !== renderer.domElement) { lockPointer(); return; }
  const P = G.W && G.W.pl[myId]; if (P && P.tk) G.spect++;
});

// ======================================================================== input
addEventListener('keydown', e => {
  if (e.target && e.target.tagName === 'INPUT' && e.target.id !== 'gchat') return;
  if (G.modal === 'keypad') { if (/^\d$/.test(e.key)) kpPress(e.key); else if (e.key === 'Backspace') { kpCode = kpCode.slice(0, -1); $('kpDisp').textContent = kpCode; } else if (e.key === 'Enter') kpPress('go'); else if (e.key === 'Escape') closeModal(); return; }
  if (G.modal === 'monitor') { if (e.key === 'Escape' || e.code === 'KeyE') closeModal(); return; }
  if (G.phase !== 'play') return;
  if (e.target && e.target.id === 'gchat') {
    if (e.key === 'Enter') { const t = $('gchat').value.trim(); $('gchat').value = ''; $('gchat').classList.add('hidden'); $('gchat').blur(); if (t) sendChat(t); }
    if (e.key === 'Escape') { $('gchat').classList.add('hidden'); $('gchat').blur(); }
    return;
  }
  G.keys[e.code] = true;
  if (e.repeat) return;
  const P = G.W && G.W.pl[myId];
  if (e.code === 'KeyF' && alive()) { G.me.flash = !G.me.flash; sfx.click(); }
  if (e.code === 'KeyC' && alive() && G.me.hidden < 0) G.me.crouch = !G.me.crouch;
  if (e.code === 'KeyE') { const t = G.interact; if (t && t.kind !== 'revive') interact(t); }
  if (e.code === 'KeyT') { e.preventDefault(); $('gchat').classList.remove('hidden'); setTimeout(() => $('gchat').focus(), 0); }
  if (e.code === 'KeyV' && voice) voice.setTalking(true);
  if (e.code === 'Tab') e.preventDefault();
});
addEventListener('keyup', e => { G.keys[e.code] = false; if (e.code === 'KeyV' && voice) voice.setTalking(false); });
addEventListener('blur', () => { G.keys = {}; });

// ======================================================================== horror director (local, per player)
function director(dt, fl) {
  const me = G.me, map = G.map, P = G.W.pl[myId] || {};
  const md = Math.hypot(G.mon.x - me.x, G.mon.z - me.z), sameLv = Math.abs(G.mon.y - me.fy) < 2.2;
  const chasing = G.mon.st === 'chase' || G.mon.st === 'grab';
  // glitch + heartbeat
  let g = 0.02;
  if (sameLv && md < 14) g = Math.max(g, (chasing ? 0.5 : 0.18) * (1 - md / 14));
  G.glitch = Math.max(g, G.glitch - dt * 1.6);
  G.hb = (G.hb || 0) - dt;
  if (sameLv && md < 16 && !P.tk) { if (G.hb <= 0) { const rate = 0.9 + (1 - md / 16) * (chasing ? 1.8 : 0.8); G.hb = 1 / rate; sfx.heartbeat(0.25 + (1 - md / 16) * 0.5); } }
  sfx.tick(dt, { x: me.x, y: me.fy + 1.5, z: me.z }, me.fy < -1.7, 1 + (G.W.aggr - 1) * 0.6);
  if (P.dn || P.tk || me.hidden >= 0) return;
  // apparitions: it stands at the end of the hall, then it's gone
  const A = G.appar;
  if (A.on) {
    A.t += dt;
    const dx = A.x - camera.position.x, dz = A.z - camera.position.z, d = Math.hypot(dx, dz);
    const f = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation), dot = (dx * f.x + dz * f.z) / d;
    if (A.kind === 'jump') {
      if (A.t > 0.55 && !A.hit) { A.hit = true; A.forceDark = false; sfx.stinger(1); G.glitch = 1.3; G.shake = 1.2; redFlash(0.6); A.model.setEyes(12); }
      if (A.t > 0.95) { A.on = false; A.model.group.visible = false; G.glitch = 0.9; }
    } else {
      if (dot > 0.97) A.look += dt;
      if (A.look > 0.35 || A.t > 3) { A.on = false; A.model.group.visible = false; G.glitch = Math.max(G.glitch, 0.7); if (A.look > 0.35) sfx.whisper({ x: me.x, y: me.fy + 1.6, z: me.z }, 0.35); }
    }
    A.model.update(dt, 0, 'idle', G.t);
    return;
  }
  G.apparT -= dt; G.scareT -= dt;
  if (G.apparT <= 0 && md > 22) {
    G.apparT = (60 + Math.random() * 90) / G.W.aggr;
    // look straight down the hall for a long empty stretch
    const f = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation); f.y = 0; f.normalize();
    let d = 0; while (d < 28) { const x = me.x + f.x * d, z = me.z + f.z * d; if (map.blocksSight(...map.cell(x, z)) || Math.abs(map.floorH(x, z) - me.fy) > 0.6) break; d += 0.5; }
    if (d > 13) {
      const x = me.x + f.x * (d - 1.6), z = me.z + f.z * (d - 1.6);
      A.on = true; A.kind = 'far'; A.t = 0; A.look = 0; A.x = x; A.z = z;
      A.model.group.position.set(x, map.floorH(x, z), z); A.model.group.rotation.y = Math.atan2(me.x - x, me.z - z); A.model.group.visible = true; A.model.setEyes(7);
    } else G.apparT = 8;
  }
  if (G.scareT <= 0 && md > 18 && fl.on && me.bat > 10) {
    G.scareT = (200 + Math.random() * 220) / G.W.aggr;
    const f = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation); f.y = 0; f.normalize();
    const x = me.x + f.x * 1.5, z = me.z + f.z * 1.5;
    if (!map.blocksSight(...map.cell(x, z))) {
      A.on = true; A.kind = 'jump'; A.t = 0; A.hit = false; A.x = x; A.z = z; A.forceDark = true; me.flick = 0.55;
      A.model.group.position.set(x, map.floorH(x, z) - 0.2, z); A.model.group.rotation.y = Math.atan2(me.x - x, me.z - z); A.model.group.visible = true; A.model.setEyes(3);
    } else G.scareT = 20;
  }
}

// ======================================================================== monster visuals (all clients)
function updateMonster(dt) {
  const M = G.mon;
  if (G.host && G.ai) { M.x = G.ai.x; M.z = G.ai.z; M.yaw = G.ai.yaw; M.st = G.ai.st; M.sp = G.ai.spd; }
  else { const s = interp(M.buf, 170); if (s) { M.x = s.x; M.z = s.z; M.yaw = s.yw; M.sp = s.sp; } }
  M.y = G.map.floorH(M.x, M.z);
  const mdl = M.model; mdl.group.position.set(M.x, M.y, M.z); mdl.group.rotation.y = M.yaw;
  mdl.update(dt, M.sp, M.st, G.t);
  // heavy footfalls, positional
  M.stepAcc += M.sp * dt;
  if (M.stepAcc > (M.st === 'chase' ? 1.5 : 1.25)) {
    M.stepAcc = 0; const p = { x: M.x, y: M.y + 0.2, z: M.z };
    sfx.thud(p, M.st === 'chase' ? 1.15 : 0.75);
    const d = Math.hypot(M.x - G.me.x, M.z - G.me.z); if (d < 9 && Math.abs(M.y - G.me.fy) < 2.2) G.shake = Math.max(G.shake, (1 - d / 9) * 0.6);
  }
  sfx.monster({ x: M.x, y: M.y + 2.1, z: M.z }, M.st === 'chase');
}

// ======================================================================== HUD
let hudT = 0;
function updateHUD(dt) {
  const W = G.W, me = G.me, P = W.pl[myId] || {};
  hudT -= dt; if (hudT > 0) return; hudT = 0.12;
  // objectives
  const L = [];
  const ln = (done, t) => L.push(`<div class="${done ? 'done' : ''}">${done ? '■' : '□'} ${t}</div>`);
  ln(!!W.power, W.power ? 'Power restored' : `Restore power · fuses ${W.fin + W.inv.fuse}/3${W.inv.fuse && W.fin < 3 ? ' · install them at the Electrical breaker (basement)' : ''}`);
  if (!W.gate && !W.grate) {
    ln(false, `Main gate · ${W.code ? 'code <b class="mono">' + G.map.code + '</b>' : W.power ? 'find the exit code (Security monitor)' : 'needs power'}${!W.code && !W.inv.key && W.power ? ' · Security needs a keycard' : ''}`);
    ln(false, `Sewer · ${W.valve ? 'drained' : 'drain the tunnels (Boiler valve)'} · ${W.inv.cut ? 'cutters ✓' : 'find bolt cutters'}`);
  } else ln(false, `<span style="color:#ff5c66">ESCAPE TOGETHER</span> · ${W.gate ? 'Courtyard (main gate)' : ''}${W.gate && W.grate ? ' or ' : ''}${W.grate ? 'Sewer outfall' : ''}`);
  const inv = [W.inv.fuse ? `FUSES ×${W.inv.fuse}` : '', W.inv.key ? 'KEYCARD' : '', W.inv.cut ? 'CUTTERS' : ''].filter(Boolean).join(' · ');
  $('obj').innerHTML = '<div class="h">OBJECTIVES</div>' + L.join('') + (inv ? `<div class="inv">TEAM: ${inv}</div>` : '');
  // team
  $('team').innerHTML = G.roster.filter(id => W.pl[id]).map(id => {
    const Q = W.pl[id], r = G.remotes.get(id);
    let s = 'OK', cls = '';
    if (Q.tk) s = 'TAKEN'; else if (Q.dn) { s = 'DOWN ' + Math.max(0, Math.ceil(60 - (W.t - Q.da))) + 's'; cls = 'dn'; } else if (Q.es) { s = 'ESCAPED'; cls = 'es'; }
    else if (r && now() - r.lastRecv > 6000) s = 'NO SIGNAL';
    else if (id !== myId && r) s = Math.round(Math.hypot(r.x - me.x, r.z - me.z)) + 'm';
    const spk = id === myId ? voice && voice.level > 0.02 : voice && voice.speaking(id);
    return `<div class="tm"><i style="background:${colorOf(id)}"></i>${esc(nameOf(id))}${id === myId ? '' : ''} <span class="s ${cls}">${s}</span>${spk ? ' <span style="color:#6fe08a">◉</span>' : ''}</div>`;
  }).join('');
  $('batB').style.width = me.bat + '%'; $('batB').style.background = me.bat < 20 ? '#e01e2b' : '';
  $('staB').style.width = me.sta + '%'; $('sta').style.opacity = me.sta < 99 ? 1 : 0.25;
  if (P.dn && !P.tk) $('bleed').textContent = `BLEEDING OUT · ${Math.max(0, Math.ceil(60 - (W.t - P.da)))}s · A TEAMMATE CAN REVIVE YOU`;
  $('escOv').classList.toggle('hidden', !(P.es && !P.tk));
  if (P.es) { const live = Object.values(W.pl).filter(q => !q.tk); $('escSub').textContent = `WAITING FOR THE OTHERS · ${live.filter(q => q.es).length}/${live.length} OUT`; }
}
function updatePrompt(dt) {
  const t = G.interact = findInteract();
  const el = $('prompt');
  if (!t) { el.innerHTML = ''; G.holdT = 0; $('hold').classList.add('hidden'); return; }
  const actionable = t.kind !== 'info' || t.reqDoor;
  el.className = actionable ? '' : 'no';
  el.innerHTML = actionable ? `<kbd>E</kbd>${esc(t.text)}` : esc(t.text);
  if (t.kind === 'revive') {
    if (keyDown('KeyE')) { G.holdT += dt; G.me.noise = Math.max(G.me.noise, 0.25); } else G.holdT = 0;
    $('hold').classList.toggle('hidden', G.holdT <= 0); $('holdC').style.strokeDashoffset = 113 * (1 - Math.min(1, G.holdT / 3));
    if (G.holdT >= 3) { G.holdT = 0; req({ k: 'revive', id: t.id }); }
  } else { G.holdT = 0; $('hold').classList.add('hidden'); }
}

// ======================================================================== main loop
let last = now(), sendAcc = 0;
function frame() {
  requestAnimationFrame(frame);
  lastRaf = now(); step(true);
}
let lastRaf = 0;
// background tabs get no animation frames: keep simulating + syncing on a timer so an
// alt-tabbed host doesn't freeze the monster for everyone
setInterval(() => { if (now() - lastRaf > 300 && (G.phase === 'play' || G.phase === 'end')) { try { step(false); } catch (e) { (window.__errs = window.__errs || []).push(String(e.stack || e)); } } }, 100);
function step(render) {
  const t = now(), dt = Math.min(render ? 0.05 : 0.12, (t - last) / 1000); last = t;
  if (G.phase === 'menu' || G.phase === 'lobby' || G.phase === 'boot' || G.phase === 'loading') { if (render) menuFrame(dt); return; }
  if (!G.world) return;
  G.t += dt;
  if (G.host) hostUpdate(dt);
  updateMe(dt);
  const fl = updateFlash(dt);
  updateRemotes(dt);
  updateMonster(dt);
  if (G.phase === 'play') { director(dt, fl); updatePrompt(dt); updateHUD(dt); }
  G.powerT += dt;
  G.world.update({ t: G.t, dt, cam: camera.position, power: !!G.W.power, powerT: G.powerT, blackout: now() < G.blackoutUntil, mpos: { x: G.mon.x, z: G.mon.z }, flash: fl });
  // audio listener + voice
  const f = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation);
  sfx.listener(camera.position, f);
  if (voice) {
    const pos = {}; const W = G.W;
    for (const r of G.remotes.values()) { const P = W.pl[r.id]; pos[r.id] = { x: r.x, y: r.y + 1.5, z: r.z, muffled: !G.map.los(G.me.x, G.me.z, r.x, r.z), gain: P && P.tk && !(W.pl[myId] || {}).tk ? 0 : 1 }; }
    voice.update({ x: camera.position.x, y: camera.position.y, z: camera.position.z }, (W.pl[myId] || {}).tk ? null : pos);
  }
  // send my state
  sendAcc += dt;
  const moving = G.me.speed > 0.1 || Math.abs(mouseDX) > 0;
  if (sendAcc > (G.host ? 0.12 : moving ? 0.14 : 0.45)) {
    sendAcc = 0; const me = G.me;
    const m = { t: 'p', id: myId, x: +me.x.toFixed(2), y: +me.fy.toFixed(2), z: +me.z.toFixed(2), yw: +me.yaw.toFixed(2), pt: +me.pitch.toFixed(2), c: me.crouch ? 1 : 0, f: fl.on ? 1 : 0, h: me.hidden, n: Math.round(me.noise * 100) };
    if (G.host && G.ai) m.m = G.ai.snapshot();
    net.send(m);
  }
  vhs.uniforms.time.value = G.t; vhs.uniforms.glitch.value = Math.min(1, G.glitch);
  const P = G.W.pl[myId] || {}; vhs.uniforms.red.value = P.dn && !P.tk ? 0.55 : 0;
  vhs.uniforms.grain.value = S.gfx === 'low' ? 0.04 : 0.07;
  if (!NORENDER && render) composer.render(dt);
}
let menuT = 0;
function menuFrame(dt) {
  if (!menuWorld) return;
  menuT += dt;
  const x = 4.5 * C + Math.sin(menuT * 0.05) * 1.2, z = 10.75 * C + Math.sin(menuT * 0.13) * 0.15;
  camera.position.set(x, 1.6 + Math.sin(menuT * 0.7) * 0.02, z);
  camera.rotation.set(Math.sin(menuT * 0.11) * 0.03, -Math.PI / 2 + Math.sin(menuT * 0.07) * 0.12, Math.sin(menuT * 0.09) * 0.01, 'YXZ');
  if (!menuScene.children.includes(flash) && !G.scene) menuScene.add(flash, flashTgt);
  flash.intensity = 0;
  // the figure at the end of the hall is only there sometimes
  const vis = Math.sin(menuT * 0.31) > -0.2 && !(Math.sin(menuT * 3.1) > 0.97);
  menuMon.group.visible = vis; menuMon.update(dt, 0, 'idle', menuT);
  menuWorld.update({ t: menuT, dt, cam: camera.position, power: true, powerT: 99, blackout: Math.sin(menuT * 0.5) > 0.985, mpos: { x: 31.5 * C, z: 10.6 * C }, flash: { on: false, pos: camera.position, dir: new THREE.Vector3(1, 0, 0) } });
  if (voice && G.phase === 'lobby') { voice.update(camera.position, null); if (Math.random() < 0.15) document.querySelectorAll('.spk').forEach(s => { const id = s.dataset.id; s.classList.toggle('on', id === myId ? voice.micLevel() > 0.02 : voice.speaking(id)); }); }
  vhs.uniforms.time.value = menuT; vhs.uniforms.glitch.value = vis && Math.sin(menuT * 3.1) > 0.9 ? 0.5 : 0.04; vhs.uniforms.red.value = 0;
  if (!NORENDER) composer.render(dt);
}

// keep the voice mesh healthy (retries peers that never connected)
setInterval(() => { if (net && voice && net.players().length) voice.sync(net.players().map(p => p.id)); }, 4000);

bindSettings(); applySettings();
frame();
boot().catch(e => { $('loadMsg').textContent = 'FAILED TO LOAD · ' + (e.message || e); console.error(e); });

// test hooks (offline only)
if (OFFLINE || BC || Q.has('debug')) window.__ls = { G, net: () => net, camera, renderer, hostReq, commit, myId, interact, req };
