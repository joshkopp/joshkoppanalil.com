// RECESS — game client. One browser in the room (the host) runs the authoritative simulation:
// it validates movement, owns roles/timers, decides every tag and every find, and sends each
// player their own view of the world. Everyone predicts their own movement locally.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { buildSchool, buildComplex, VENT, RAMP, RHOLE, VENT_H } from './maps.js';
import { World, loadTextures } from './world.js';
import { Sfx } from './audio.js';
import { Mesh, newCode, MAX_PLAYERS } from './mesh.js';
import { makeAvatar, COLORS } from './avatar.js';

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search), LOCAL = Q.has('local'), NORENDER = Q.has('norender');
const store = { get(k, d) { try { const v = localStorage.getItem('recess-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('recess-' + k, JSON.stringify(v)); } catch (e) {} } };
const S = Object.assign({ vol: 0.8, voice: 1, music: 0.45, sens: 1, fov: 80, gfx: 'med', inv: false, mic: 'open', cam: 'first', name: '' }, store.get('settings', {}));
let session = null; try { session = JSON.parse(sessionStorage.getItem('recess-session') || 'null'); } catch (e) {}
const myId = (session && session.id) || Math.random().toString(36).slice(2, 10);
const now = () => performance.now();
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const lerpAng = (a, b, k) => { let d = b - a; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; return a + d * k; };
const EYE = 1.6, CEYE = 0.95, RAD = 0.32;
const MODES = { hide: { name: 'Hide & Seek', map: 'school' }, tag: { name: 'Tag', map: 'complex' } };
const sfx = new Sfx();
let mesh = null;

// ================================================================== rendering
const renderer = new THREE.WebGLRenderer({ antialias: S.gfx === 'high', powerPreference: 'high-performance' });
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.1;
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.prepend(renderer.domElement);
const camera = new THREE.PerspectiveCamera(S.fov, innerWidth / innerHeight, 0.05, 140);
const VIG = { uniforms: { tDiffuse: { value: null }, red: { value: 0 }, dark: { value: 0.35 }, t: { value: 0 } }, vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: 'uniform sampler2D tDiffuse;uniform float red,dark,t;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}void main(){vec3 c=texture2D(tDiffuse,vUv).rgb;vec2 d=vUv-.5;float v=dot(d,d);c*=1.-v*dark*2.;c=mix(c,vec3(1.,.1,.1),red*smoothstep(.12,.45,v));c+=(h(vUv*800.+t)-.5)*.025;gl_FragColor=vec4(c,1.);}' };
let composer, renderPass, bloom, vig;
function setupRender() {
  const pr = S.gfx === 'low' ? Math.min(devicePixelRatio, 0.85) : S.gfx === 'med' ? Math.min(devicePixelRatio, 1.25) : Math.min(devicePixelRatio, 1.75);
  renderer.setPixelRatio(pr); renderer.setSize(innerWidth, innerHeight);
  composer = new EffectComposer(renderer); renderPass = new RenderPass(new THREE.Scene(), camera); composer.addPass(renderPass);
  bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.35, 0.4, 0.92); bloom.enabled = S.gfx !== 'low'; composer.addPass(bloom);
  composer.addPass(new OutputPass()); vig = new ShaderPass(VIG); composer.addPass(vig);
  composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight);
}
setupRender();
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); });
const flash = new THREE.SpotLight(0xfff0d8, 0, 30, 0.5, 0.5, 1.6); flash.castShadow = true; flash.shadow.mapSize.set(1024, 1024); flash.shadow.bias = -0.0004; flash.shadow.normalBias = 0.03; flash.shadow.camera.near = 0.2;
const flashT = new THREE.Object3D(); flash.target = flashT;

// ================================================================== maps (built once, cached)
const MAPS = {};
function getMap(key) {
  if (MAPS[key]) return MAPS[key];
  const map = key === 'school' ? buildSchool() : buildComplex();
  const scene = new THREE.Scene();
  if (key === 'school') { scene.background = new THREE.Color(0x05070c); scene.fog = new THREE.FogExp2(0x070a12, 0.045); scene.add(new THREE.HemisphereLight(0x8094b8, 0x1a1410, 0.22)); }
  else { scene.background = new THREE.Color(0x9fd3ff); scene.fog = new THREE.Fog(0xcfe6ff, 45, 150); scene.add(new THREE.HemisphereLight(0xffffff, 0xb8a890, 0.62)); const d = new THREE.DirectionalLight(0xfff2e0, 0.5); d.position.set(30, 60, 20); scene.add(d); }
  const world = new World(scene, map, S.gfx);
  const spots = []; for (let i = 0; i < 3; i++) { const s = new THREE.SpotLight(0xfff0d8, 0, 24, 0.5, 0.5, 1.6); s.target = new THREE.Object3D(); scene.add(s, s.target); spots.push(s); }
  return (MAPS[key] = { key, map, scene, world, spots });
}

// ================================================================== UI helpers
const SCREENS = ['menu', 'play', 'lobby', 'settings', 'howto', 'pause', 'results'];
let backTo = 'menu';
function show(id) { SCREENS.forEach(s => $(s).classList.toggle('hidden', s !== id)); }
function toast(msg, ms = 3000) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = msg; $('toasts').appendChild(d); setTimeout(() => d.classList.add('out'), ms); setTimeout(() => d.remove(), ms + 500); while ($('toasts').children.length > 4) $('toasts').firstChild.remove(); }
let bigT = 0;
function big(text, sub = '', ms = 1800, cls = '') { const b = $('big'); b.className = 'on ' + cls; b.querySelector('b').textContent = text; b.querySelector('span').textContent = sub; clearTimeout(bigT); bigT = setTimeout(() => b.className = '', ms); }
function chatAdd(name, text, cls = '', color = '#ccc') {
  for (const box of [$('chatLog'), $('gameChatLog')]) {
    const d = document.createElement('div'); d.className = 'msg ' + cls;
    d.innerHTML = name ? `<b style="color:${color}">${esc(name)}</b> ${esc(text)}` : esc(text);
    box.appendChild(d); while (box.children.length > 60) box.firstChild.remove(); box.scrollTop = 1e9;
  }
  $('gameChat').classList.add('fresh'); clearTimeout(chatAdd.t); chatAdd.t = setTimeout(() => $('gameChat').classList.remove('fresh'), 6000);
}

// ================================================================== state
const G = {
  phase: 'boot', mapKey: null, M: null, lobby: { mode: 'hide' }, round: null, snapAt: 0,
  me: { x: 0, y: 0, z: 0, f: 0, vy: 0, yaw: 0, pitch: 0, vx: 0, vz: 0, crouch: false, ck: 0, sprint: false, sta: 100, staT: 0, air: false, spot: -1, flash: true, bob: 0, step: 0, speed: 0 },
  others: new Map(), keys: {}, colors: {}, names: {}, muted: new Set(), cam3: S.cam === 'third', spec: { i: 0, free: false, x: 0, y: 3, z: 0, yaw: 0, pitch: -0.2 },
  prompt: null, searchT: 0, sendAcc: 0, lastSeq: 0, H: null, tagFx: [], ready: false,
};
const nameOf = id => G.names[id] || (mesh && (mesh.players().find(p => p.id === id) || {}).name) || 'Player';
const colorOf = id => G.colors[id] || '#bbb';
const isHost = () => mesh && mesh.isHost();
function assignColors() { if (!mesh) return; mesh.players().forEach((p, i) => { if (!G.colors[p.id]) G.colors[p.id] = COLORS[Object.keys(G.colors).length % COLORS.length]; G.names[p.id] = p.name; }); }

// ================================================================== settings + menu
function bindSettings() {
  const fmt = { vol: v => Math.round(v * 100) + '%', voice: v => Math.round(v * 100) + '%', music: v => Math.round(v * 100) + '%', sens: v => (+v).toFixed(2), fov: v => v + '°' };
  [['sVol', 'vol'], ['sVoice', 'voice'], ['sMusic', 'music'], ['sSens', 'sens'], ['sFov', 'fov']].forEach(([el, k]) => { $(el).value = S[k]; $(el).nextElementSibling.textContent = fmt[k](S[k]); $(el).oninput = () => { S[k] = +$(el).value; $(el).nextElementSibling.textContent = fmt[k](S[k]); applySettings(); }; });
  $('sGfx').value = S.gfx; $('sGfx').onchange = () => { S.gfx = $('sGfx').value; applySettings(true); };
  $('sMic').value = S.mic; $('sMic').onchange = () => { S.mic = $('sMic').value; applyMic(); applySettings(); };
  $('sCam').value = S.cam; $('sCam').onchange = () => { S.cam = $('sCam').value; G.cam3 = S.cam === 'third'; applySettings(); };
  $('sInv').checked = S.inv; $('sInv').onchange = () => { S.inv = $('sInv').checked; applySettings(); };
}
function applySettings(gfx) {
  store.set('settings', S); sfx.setVolume(S.vol, S.voice, S.music); camera.fov = S.fov; camera.updateProjectionMatrix();
  if (gfx) { const pr = S.gfx === 'low' ? Math.min(devicePixelRatio, 0.85) : S.gfx === 'med' ? Math.min(devicePixelRatio, 1.25) : Math.min(devicePixelRatio, 1.75); renderer.setPixelRatio(pr); composer.setPixelRatio(pr); composer.setSize(innerWidth, innerHeight); bloom.enabled = S.gfx !== 'low'; }
}
async function applyMic() {
  if (!mesh) return renderVoice();
  try { if (S.mic === 'off') mesh.disableMic(); else { await mesh.enableMic(); mesh.setPTT(S.mic === 'ptt'); } }
  catch (e) { S.mic = 'off'; $('sMic').value = 'off'; toast('Microphone blocked: ' + (e.message || e.name)); }
  store.set('settings', S); renderVoice();
}
function renderVoice() {
  const on = S.mic !== 'off' && mesh && mesh.micOn;
  const label = !on ? 'Mic off' : mesh.micMuted ? 'Muted' : S.mic === 'ptt' ? 'Push to talk (V)' : 'Mic on';
  document.querySelectorAll('.vMic').forEach(b => { b.textContent = '🎙 ' + label; b.classList.toggle('off', !on || mesh.micMuted); });
  document.querySelectorAll('.vDeaf').forEach(b => { const d = mesh && mesh.deaf; b.textContent = d ? '🔇 Deafened' : '🔊 Sound on'; b.classList.toggle('off', !!d); });
  document.querySelectorAll('.vPtt').forEach(b => { b.textContent = S.mic === 'ptt' ? 'PTT: on' : 'PTT: off'; });
}
function micToggle() { ensureAudio(); if (S.mic === 'off') { S.mic = 'open'; $('sMic').value = 'open'; applyMic(); } else if (mesh) { mesh.setMicMuted(!mesh.micMuted); renderVoice(); } }
function deafToggle() { if (mesh) { mesh.setDeaf(!mesh.deaf); renderVoice(); } }
function pttToggle() { S.mic = S.mic === 'ptt' ? 'open' : 'ptt'; $('sMic').value = S.mic; applyMic(); }
document.querySelectorAll('.vMic').forEach(b => b.onclick = micToggle);
document.querySelectorAll('.vDeaf').forEach(b => b.onclick = deafToggle);
document.querySelectorAll('.vPtt').forEach(b => b.onclick = pttToggle);

function ensureAudio() { sfx.init(); sfx.setVolume(S.vol, S.voice, S.music); }
function saveName() { S.name = ($('name').value || '').trim().slice(0, 16); store.set('settings', S); }
const needName = () => { saveName(); if (!S.name) { $('name').focus(); $('name').classList.add('shake'); setTimeout(() => $('name').classList.remove('shake'), 500); return true; } return false; };
$('bPlay').onclick = () => { ensureAudio(); if (needName()) return; show('play'); sfx.click(); };
$('bCreate').onclick = $('bCreate2').onclick = () => { ensureAudio(); if (needName()) return; enterRoom('create'); };
$('bJoin').onclick = () => { ensureAudio(); if (needName()) return; show('play'); $('code').focus(); };
$('bJoin2').onclick = () => { ensureAudio(); if (needName()) return; enterRoom('join', $('code').value.trim()); };
$('code').oninput = () => { $('code').value = $('code').value.replace(/\D/g, '').slice(0, 6); };
$('code').onkeydown = e => { if (e.key === 'Enter') $('bJoin2').click(); };
$('bSettings').onclick = () => { ensureAudio(); backTo = 'menu'; show('settings'); };
$('bHow').onclick = () => { backTo = 'menu'; show('howto'); };
$('bSetBack').onclick = () => show(backTo); $('bHowBack').onclick = () => show(backTo); $('bBack1').onclick = () => show('menu');
$('bRejoin').onclick = () => { ensureAudio(); if (session) { $('name').value = session.name; saveName(); enterRoom('join', session.code); } };
$('bLobbySettings').onclick = () => { backTo = 'lobby'; show('settings'); };

async function enterRoom(mode, code) {
  $('playErr').textContent = mode === 'create' ? 'Creating room…' : 'Joining…'; show('play');
  [$('bCreate2'), $('bJoin2')].forEach(b => b.disabled = true);
  try {
    if (!mesh) { mesh = new Mesh(sfx, LOCAL); bindNet(); }
    let res;
    for (let i = 0; i < 4; i++) {
      const c = mode === 'create' ? newCode() : code;
      if (mode === 'join' && !/^\d{6}$/.test(c || '')) { res = { ok: false, err: 'Room codes are 6 digits.' }; break; }
      res = await mesh.join(c, { id: myId, name: S.name }, mode); code = c;
      if (res.ok || res.err !== 'taken') break;
    }
    if (!res.ok) { $('playErr').textContent = res.err; return; }
    $('playErr').textContent = '';
    session = { code, id: myId, name: S.name }; try { sessionStorage.setItem('recess-session', JSON.stringify(session)); } catch (e) {}
    history.replaceState(null, '', location.pathname + (LOCAL ? '?local' : '') + (LOCAL ? '&' : '?') + 'room=' + code);
    $('roomCode').textContent = code; $('chatLog').innerHTML = ''; $('gameChatLog').innerHTML = '';
    chatAdd(null, mode === 'create' ? 'Room created. Share the code with your friends.' : 'Joined room ' + code + '.', 'sys');
    G.phase = 'lobby'; G.ready = false; show('lobby'); assignColors(); renderLobby();
    applyMic();
    if (!isHost()) setTimeout(() => mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'hello' }), 400);
  } catch (e) { $('playErr').textContent = e.message || String(e); }
  finally { [$('bCreate2'), $('bJoin2')].forEach(b => b.disabled = false); }
}
async function leaveRoom() {
  endRound(); if (mesh) await mesh.leave();
  try { sessionStorage.removeItem('recess-session'); } catch (e) {} session = null;
  history.replaceState(null, '', location.pathname + (LOCAL ? '?local' : ''));
  G.phase = 'menu'; G.H = null; sfx.music(null); showMenuScene(); $('hud').classList.add('hidden'); if (document.pointerLockElement) document.exitPointerLock();
  $('bRejoin').classList.add('hidden'); show('menu');
}
$('bLeave').onclick = () => leaveRoom(); $('bQuit').onclick = () => leaveRoom();
$('bCopy').onclick = () => navigator.clipboard.writeText($('roomCode').textContent).then(() => { $('bCopy').textContent = 'Copied!'; setTimeout(() => $('bCopy').textContent = 'Copy', 1300); }).catch(() => {});
$('bLink').onclick = () => navigator.clipboard.writeText(location.origin + location.pathname + '?room=' + $('roomCode').textContent).then(() => { $('bLink').textContent = 'Copied!'; setTimeout(() => $('bLink').textContent = 'Invite link', 1300); }).catch(() => {});
$('bReady').onclick = () => { G.ready = !G.ready; mesh.setMeta({ ready: G.ready }); sfx.click(); renderLobby(); };
$('bStart').onclick = () => { if (isHost()) hostStartRound(); };
document.querySelectorAll('.mode').forEach(el => el.onclick = () => { if (!isHost()) return; G.lobby.mode = el.dataset.mode; mesh.sendAll({ t: 'lobby', l: G.lobby }); renderLobby(); sfx.click(); });
$('chatIn').onkeydown = e => { if (e.key === 'Enter') { const t = $('chatIn').value.trim(); if (t) sendChat(t); $('chatIn').value = ''; } };

function renderLobby() {
  if (!mesh || G.phase !== 'lobby') return;
  const ps = mesh.players(), host = mesh.hostId(); assignColors();
  $('plist').innerHTML = ps.map(p => {
    const me = p.id === myId, mu = G.muted.has(p.id);
    return `<div class="pl"><i style="background:${colorOf(p.id)}"></i><span class="nm">${esc(p.name)}${me ? ' <em>(you)</em>' : ''}</span>
      <span class="spk${mesh.speaking(p.id) ? ' on' : ''}" data-id="${p.id}">●</span>
      ${p.id === host ? '<span class="tagH">HOST</span>' : `<span class="rd ${p.ready ? 'ok' : ''}">${p.ready ? 'READY' : 'NOT READY'}</span>`}
      ${me ? '' : `<button class="mini" data-mute="${p.id}">${mu ? 'Unmute' : 'Mute'}</button><button class="mini" data-report="${p.id}">Report</button>`}</div>`;
  }).join('') + `<div class="count">${ps.length}/${MAX_PLAYERS} players</div>`;
  $('plist').querySelectorAll('[data-mute]').forEach(b => b.onclick = () => toggleMute(b.dataset.mute));
  $('plist').querySelectorAll('[data-report]').forEach(b => b.onclick = () => report(b.dataset.report));
  document.querySelectorAll('.mode').forEach(el => { el.classList.toggle('sel', el.dataset.mode === G.lobby.mode); el.classList.toggle('locked', host !== myId); });
  const amHost = host === myId, others = ps.filter(p => p.id !== host), allReady = others.every(p => p.ready);
  $('bStart').classList.toggle('hidden', !amHost); $('bReady').classList.toggle('hidden', amHost);
  $('bReady').textContent = G.ready ? 'Ready ✓' : 'Ready up'; $('bReady').classList.toggle('on', G.ready);
  const enough = ps.length >= 2 || LOCAL || Q.has('solo');
  $('bStart').disabled = !allReady || !enough;
  $('lobbyNote').textContent = !enough ? 'Need at least 2 players. Share the code!' : amHost ? (allReady ? 'Everyone is ready. Start when you like.' : 'Waiting for everyone to ready up…') : 'The host picks the mode and starts the game.';
}
function toggleMute(id) { if (G.muted.has(id)) G.muted.delete(id); else G.muted.add(id); mesh.mute(id, G.muted.has(id)); renderLobby(); renderScore(); toast(G.muted.has(id) ? `Muted ${nameOf(id)} (voice + chat)` : `Unmuted ${nameOf(id)}`); }
function report(id) { mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'report', id }); if (!G.muted.has(id)) toggleMute(id); toast(`Reported ${nameOf(id)}. They are muted for you and the host was told.`, 4000); }
function sendChat(text) { mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'chat', text: text.slice(0, 160) }); }

// ================================================================== networking
function bindNet() {
  mesh.on('presence', () => { assignColors(); renderLobby(); if (G.H) hostPresence(); if (G.phase === 'game' && isHost() && !G.H) becomeHost(); });
  mesh.on('left', id => { if (G.phase === 'game') { const o = G.others.get(id); if (o) { o.av.group.visible = false; } } });
  mesh.on('lobby', (m, from) => { if (from !== mesh.hostId()) return; G.lobby = m.l; renderLobby(); });
  mesh.on('ev', (m, from) => { if (from === mesh.hostId() || from === myId) onEvent(m); });
  mesh.on('sn', (m, from) => { if (from === mesh.hostId() && !G.H) onSnap(m); });
  mesh.on('corr', (m, from) => { if (from === mesh.hostId()) { Object.assign(G.me, { x: m.x, y: m.y, z: m.z, f: m.f, vx: 0, vz: 0, vy: 0 }); } });
  mesh.on('in', (m, from) => { if (G.H) hostInput(from, m); });
  mesh.on('rq', (m, from) => { if (mesh.isHost()) hostRequest(from, m); });
}

// ================================================================== round lifecycle (all clients)
function hostStartRound() { G.H = newHost(); hostBegin(); }
async function loadRound(m) { // m: {mode, roles, seed}
  G.phase = 'loading'; show(null); $('loading').classList.remove('hidden'); $('loadMsg').textContent = 'LOADING ' + MODES[m.mode].name.toUpperCase();
  await new Promise(r => setTimeout(r, 40));
  endRound(true);
  const M = G.M = getMap(MODES[m.mode].map); G.mapKey = M.key;
  M.map.doors.forEach(d => d.open = false);
  M.scene.add(flash, flashT);
  G.round = { mode: m.mode, ph: 'wait', tl: 0, sk: null, roles: m.roles || {}, ep: 0, stats: {}, tells: [], frozenUntil: 0 };
  G.others.clear();
  G.selfAv = makeAvatar(myId, S.name || 'You', colorOf(myId)); G.selfAv.tag.visible = false; M.scene.add(G.selfAv.group);
  const sp = spawnFor(m.mode, m.roles && m.roles[myId], m.spawnIx || 0);
  Object.assign(G.me, { x: sp.x, z: sp.z, f: sp.f, y: M.map.base(sp.f), vy: 0, vx: 0, vz: 0, yaw: sp.yaw || 0, pitch: 0, crouch: false, sta: 100, spot: -1, air: false });
  renderPass.scene = M.scene; if (!NORENDER) renderer.compile(M.scene, camera);
  $('loading').classList.add('hidden'); $('hud').classList.remove('hidden'); $('hud').className = 'mode-' + m.mode;
  G.phase = 'game'; sfx.music(m.mode === 'tag' ? 'tag' : 'hide');
  if (!document.pointerLockElement) $('clickIn').classList.remove('hidden');
  mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'loaded' });
}
function spawnFor(mode, role, ix) {
  const map = getMap(MODES[mode].map).map;
  if (mode === 'hide') { if (role === 's') return { ...map.spawns.seeker[0], yaw: 0 }; if (role === 'x') return { ...map.spawns.spec }; const s = map.spawns.hiders[ix % map.spawns.hiders.length]; return { ...s, yaw: Math.PI }; }
  const s = map.spawns.players[ix % map.spawns.players.length]; return { ...s };
}
function endRound(keepPhase) {
  for (const o of G.others.values()) if (G.M) G.M.scene.remove(o.av.group);
  G.others.clear(); if (G.selfAv && G.M) G.M.scene.remove(G.selfAv.group); G.selfAv = null;
  if (G.M) { G.M.scene.remove(flash, flashT); G.M.spots.forEach(s => s.intensity = 0); G.M.world.setTells([]); }
  G.tagFx.forEach(p => p.mesh.parent && p.mesh.parent.remove(p.mesh)); G.tagFx = [];
  if (!keepPhase) G.round = null;
  $('hidingOv').classList.add('hidden'); $('specBar').classList.add('hidden'); $('lockedOv').classList.add('hidden'); $('score').classList.add('hidden');
}
function backToLobby() {
  endRound(); G.phase = 'lobby'; G.ready = false; mesh && mesh.setMeta({ ready: false });
  showMenuScene(); $('hud').classList.add('hidden'); $('clickIn').classList.add('hidden'); if (document.pointerLockElement) document.exitPointerLock();
  sfx.music(null); show('lobby'); renderLobby();
}

// ================================================================== events from the host
function onEvent(m) {
  const R = G.round;
  switch (m.k) {
    case 'start': loadRound(m); break;
    case 'phase':
      if (!R) return; R.ph = m.ph; R.tl = m.tl; R.sk = m.sk ?? R.sk;
      if (m.roles) R.roles = m.roles;
      if (m.ph === 'count') { let n = 3; const tick = () => { if (!G.round || G.round.ph !== 'count') return; big(String(n), '', 900, 'count'); sfx.count(n); n--; if (n > 0) setTimeout(tick, 1000); }; tick(); }
      if (m.ph === 'hide') { sfx.count(0); sfx.whistle(); const role = R.roles[myId]; big(role === 's' ? 'YOU ARE THE SEEKER' : 'HIDE!', role === 's' ? 'You are locked in until the hiders are ready' : `${nameOf(R.sk)} is the seeker. You have ${m.tl}s`, 3200, role === 's' ? 'red' : ''); }
      if (m.ph === 'seek') { G.M.map.doors.forEach(d => d.open = true); sfx.whistle(); sfx.door({ x: 7 * 2 + 1, y: 1, z: 21 * 2 + 1 }, true); big(R.roles[myId] === 's' ? 'GO FIND THEM' : 'THE SEEKER IS OUT', '', 2500, 'red'); }
      if (m.ph === 'play') { sfx.count(0); sfx.whistle(); big(R.sk === myId ? 'YOU ARE IT' : 'RUN!', R.sk === myId ? 'Tag someone with E or click' : `${nameOf(R.sk)} is IT`, 2600, R.sk === myId ? 'red' : ''); }
      break;
    case 'tag': {
      if (!R) return; const prev = R.sk; R.sk = m.b; R.ep = m.ep; R.roles[m.a] = 'r'; R.roles[m.b] = 'i';
      const p = posOf(m.b); if (p) { spawnBurst(p.x, p.y + 1.1, p.z); sfx.zap(p); }
      if (m.b === myId) { big('YOU\'RE IT!', 'Frozen for a moment… then get them', 1800, 'red'); G.round.frozenUntil = now() + m.freeze; $('flashFx').className = 'red'; setTimeout(() => $('flashFx').className = '', 50); }
      else if (m.a === myId) { big('TAGGED!', `${nameOf(m.b)} is IT now`, 1400); }
      else toast(`${nameOf(m.a)} tagged ${nameOf(m.b)}`);
      break;
    }
    case 'found': {
      if (!R) return; R.roles[m.id] = 'x';
      if (m.id === myId) { G.me.spot = -1; $('hidingOv').classList.add('hidden'); big('FOUND!', `${nameOf(m.by)} found you · now spectating`, 2600, 'red'); sfx.found(); G.spec.i = 0; }
      else { toast(`${nameOf(m.by)} found ${nameOf(m.id)}${m.spot != null ? ' in a ' + (G.M.map.spots[m.spot] || {}).type : ''}!`); const p = posOf(m.id); if (p) sfx.found(); }
      if (m.spot != null) { const o = G.M.world.spotObjs[m.spot]; if (o) { o.tgt = 1; setTimeout(() => o.tgt = 0, 900); } }
      break;
    }
    case 'search': { const o = G.M && G.M.world.spotObjs[m.spot]; if (o) { o.tgt = 1; o.shake = 0.4; setTimeout(() => o.tgt = 0, 700); sfx.metal({ x: o.s.x, y: G.M.map.base(o.s.f) + 1, z: o.s.z }, 0.35); } break; }
    case 'hid': if (m.id === myId) { G.me.spot = m.spot; const s = G.M.map.spots[m.spot]; G.me.x = s.x; G.me.z = s.z; G.me.yaw = Math.atan2(-s.fx, -s.fz); G.me.pitch = 0; $('hidingOv').className = 'ov hide-' + s.type; $('hidingOv').querySelector('span').textContent = `HIDING IN ${s.type.toUpperCase()} · ${s.risk.toUpperCase()} SPOT · [E] LEAVE`; sfx.door({ x: s.x, y: 1, z: s.z }, false); } else spotAnim(m.spot); break;
    case 'unhid': if (m.id === myId) { G.me.spot = -1; G.me.x = m.x; G.me.z = m.z; $('hidingOv').className = 'ov hidden'; } spotAnim(m.spot); break;
    case 'deny': toast(m.msg, 2000); sfx.beep(false); break;
    case 'chat': if (!G.muted.has(m.from)) chatAdd(m.name, m.text, m.prox ? 'prox' : '', colorOf(m.from)); break;
    case 'sys': chatAdd(null, m.text, 'sys'); break;
    case 'end': showResults(m); break;
    case 'lobby': backToLobby(); break;
    case 'report': toast(`${m.by} reported ${m.who}`, 5000); break;
  }
}
function spotAnim(id) { const o = G.M && G.M.world.spotObjs[id]; if (o) { o.tgt = 1; setTimeout(() => o.tgt = 0, 450); } }
function posOf(id) { if (id === myId) return { x: G.me.x, y: G.me.y, z: G.me.z }; const o = G.others.get(id); return o ? { x: o.x, y: o.y, z: o.z } : null; }

// snapshots: [id,x,y,z,f,yaw,pitch,flags,role,spot]
function onSnap(m) {
  const R = G.round; if (!R || G.phase !== 'game') return;
  R.ph = m.ph; R.tl = m.tl; R.sk = m.sk; R.ep = m.ep; R.tells = m.tells || []; if (m.S) R.stats = m.S; if (m.door != null) G.M.map.doors.forEach(d => d.open = !!m.door);
  G.M.world.setTells(R.tells);
  const seen = new Set();
  for (const e of m.P) {
    const [id, x, y, z, f, yw, pt, fl, role, spot] = e; R.roles[id] = role; seen.add(id);
    if (id === myId) { if (spot >= 0 && G.me.spot < 0) { /* host put us in a spot (reconnect) */ G.me.spot = spot; } continue; }
    let o = G.others.get(id);
    if (!o) { o = { id, av: makeAvatar(id, nameOf(id), colorOf(id)), buf: [], x, y, z, f, yaw: yw, pitch: pt, speed: 0, step: 0 }; G.M.scene.add(o.av.group); G.others.set(id, o); }
    o.buf.push({ t: now(), x, y, z, f, yw, pt }); if (o.buf.length > 10) o.buf.shift();
    o.fl = fl; o.role = role; o.spot = spot; o.seen = now();
  }
  for (const [id, o] of G.others) if (!seen.has(id)) { if (now() - (o.seen || 0) > 400) o.av.group.visible = false; }
}

// ================================================================== host simulation
function newHost() { return { players: new Map(), ph: 'lobby', mode: G.lobby.mode, t: 0, tl: 0, sk: null, ep: 0, spots: {}, lastSeeker: G.H && G.H.lastSeeker, sendAcc: 0, statAcc: 0, loaded: new Set(), waitT: 0 }; }
function hostPlayer(id) {
  const H = G.H; let p = H.players.get(id);
  if (!p) { p = { id, x: 0, y: 0, z: 0, f: 0, yw: 0, pt: 0, fl: 0, role: 'x', spot: -1, conn: true, lastT: now(), hist: [], stats: { it: 0, tags: 0, tagged: 0 }, searchAt: 0, ix: H.players.size }; H.players.set(id, p); }
  return p;
}
function hostBegin() {
  const H = G.H, ps = mesh.players(), mode = G.lobby.mode; H.mode = mode; H.players.clear(); H.spots = {}; H.ep = 0;
  const ids = ps.map(p => p.id);
  let sk = ids[Math.floor(Math.random() * ids.length)];
  if (ids.length > 2 && sk === H.lastSeeker) sk = ids[(ids.indexOf(sk) + 1) % ids.length];
  H.sk = sk; H.lastSeeker = sk;
  const roles = {};
  ids.forEach((id, i) => { const p = hostPlayer(id); p.ix = i; p.role = mode === 'hide' ? (id === sk ? 's' : 'h') : (id === sk ? 'i' : 'r'); roles[id] = p.role; const s = spawnFor(mode, p.role, i); Object.assign(p, { x: s.x, z: s.z, f: s.f, y: getMap(MODES[mode].map).map.base(s.f), lastT: now() }); });
  H.ph = 'wait'; H.waitT = 0; H.loaded = new Set();
  H.itFrozenUntil = 0; H.prevIt = null; H.prevImmune = 0;
  const msg = { t: 'ev', k: 'start', mode, roles, seed: 1 };
  for (const id of ids) mesh.sendTo(id, { ...msg, spawnIx: H.players.get(id).ix });
}
function hostSetPhase(ph, tl) {
  const H = G.H; H.ph = ph; H.tl = tl;
  const roles = {}; for (const p of H.players.values()) roles[p.id] = p.role;
  mesh.sendAll({ t: 'ev', k: 'phase', ph, tl, sk: H.sk, roles }); onEvent({ k: 'phase', ph, tl, sk: H.sk, roles });
  const map = getMap(MODES[H.mode].map).map;
  if (ph === 'seek') map.doors.forEach(d => d.open = true);
}
function hostEv(m, to) { m.t = 'ev'; if (to) { mesh.sendTo(to, m); } else { mesh.sendAll(m); onEvent(m); } }
function hostPresence() {
  const H = G.H; if (!H) return; const ids = new Set(mesh.players().map(p => p.id));
  for (const p of H.players.values()) {
    const was = p.conn; p.conn = ids.has(p.id);
    if (was && !p.conn) { p.goneAt = now(); hostEv({ k: 'sys', text: `${nameOf(p.id)} disconnected (they can rejoin for 60s)` }); hostLeft(p); }
    if (!was && p.conn) hostEv({ k: 'sys', text: `${nameOf(p.id)} reconnected` });
  }
}
function hostLeft(p) {
  const H = G.H;
  if (p.spot >= 0) { delete H.spots[p.spot]; p.spot = -1; }
  if (H.mode === 'tag' && H.sk === p.id && (H.ph === 'play')) {
    const cand = [...H.players.values()].filter(q => q.conn && q.id !== p.id); if (cand.length) { const n = cand[Math.floor(Math.random() * cand.length)]; p.role = 'r'; n.role = 'i'; H.sk = n.id; H.ep++; hostEv({ k: 'tag', a: p.id, b: n.id, ep: H.ep, freeze: 2000 }); }
  }
  if (H.mode === 'hide' && H.sk === p.id && (H.ph === 'hide' || H.ph === 'seek')) hostEnd('hiders', 'The seeker left the game.');
}
function becomeHost() {
  // the old host left mid-round: rebuild the authoritative state from our latest snapshot
  const R = G.round; if (!R) return;
  if (R.mode === 'hide' && R.sk === myId && (R.ph === 'hide' || R.ph === 'seek')) { G.H = newHost(); G.H.mode = R.mode; hostEnd(null, 'The host left. Round cancelled.'); return; }
  const H = G.H = newHost(); H.mode = R.mode; H.ph = R.ph; H.tl = R.tl; H.sk = R.sk; H.ep = R.ep + 1;
  const ids = new Set(mesh.players().map(p => p.id));
  for (const [id, role] of Object.entries(R.roles)) { const p = hostPlayer(id); p.role = role; p.conn = ids.has(id); const o = id === myId ? G.me : G.others.get(id); if (o) Object.assign(p, { x: o.x, y: o.y, z: o.z, f: o.f || 0 }); if (o && o.spot >= 0) { p.spot = o.spot; H.spots[o.spot] = id; } if (R.stats[id]) p.stats = { ...R.stats[id] }; }
  if (G.me.spot >= 0) { H.spots[G.me.spot] = myId; hostPlayer(myId).spot = G.me.spot; }
  chatAdd(null, 'You are now the host.', 'sys');
  for (const p of H.players.values()) if (!p.conn) { p.goneAt = now(); hostLeft(p); }
}
const BASE_SPEED = { hide: { walk: 3.4, sprint: 5.6 }, tag: { walk: 4.2, sprint: 6.6 } };
function maxSpeed(mode, role) { return BASE_SPEED[mode].sprint * (role === 'i' ? 1.12 : 1); }
function hostInput(id, m) {
  const H = G.H; if (!H || H.ph === 'lobby') return;
  const p = hostPlayer(id), map = getMap(MODES[H.mode].map).map, t = now();
  if (m.s <= (p.seq || 0)) return; p.seq = m.s;
  p.yw = m.yw; p.pt = m.pt; p.fl = m.fl; p.conn = true;
  if (p.role === 'x' || id === myId) { Object.assign(p, { x: m.x, y: m.y, z: m.z, f: m.f }); p.lastT = t; return; }
  if (p.spot >= 0) { const s = map.spots[p.spot]; Object.assign(p, { x: s.x, z: s.z, f: s.f }); return; }
  const dt = Math.min(1.5, (t - p.lastT) / 1000), dist = Math.hypot(m.x - p.x, m.z - p.z);
  const allow = maxSpeed(H.mode, p.role) * 1.3 * dt + 1.2;
  let bad = dist > allow;
  if (!bad && map.inBlocked(m.f, m.x, m.z, true)) bad = true;
  if (!bad && m.f !== p.f) { const okStair = [p.f, m.f].some(f => { const [x, z] = map.cell(m.x, m.z); const tt = map.t(f, x, z); return tt === RAMP || tt === RHOLE; }) || [p.f, m.f].some(f => { const [x, z] = map.cell(p.x, p.z); const tt = map.t(f, x, z); return tt === RAMP || tt === RHOLE; }); if (!okStair || Math.abs(m.f - p.f) > 1) bad = true; }
  if (!bad && (H.ph === 'count' || H.ph === 'wait' || (H.mode === 'tag' && p.id === H.sk && t < H.itFrozenUntil)) && dist > 0.6) bad = true;
  if (!bad && H.mode === 'hide' && p.role === 's' && H.ph !== 'seek') { const zz = map.zoneAt(m.f, m.x, m.z); if (!zz || zz.kind !== 'principal') bad = true; }
  if (bad) { if (t - (p.corrAt || 0) > 250) { p.corrAt = t; mesh.sendTo(id, { t: 'corr', x: p.x, y: p.y, z: p.z, f: p.f }); } return; }
  Object.assign(p, { x: m.x, y: m.y, z: m.z, f: m.f }); p.lastT = t;
  p.hist.push({ t, x: m.x, z: m.z, f: m.f }); while (p.hist.length && t - p.hist[0].t > 600) p.hist.shift();
}
function nearHist(p, x, z, f, range) { // lag-compensated distance check
  const pts = [{ x: p.x, z: p.z, f: p.f }, ...p.hist.filter(h => now() - h.t < 300)];
  return pts.some(q => q.f === f && Math.hypot(q.x - x, q.z - z) <= range);
}
function hostRequest(id, m) {
  const H = G.H;
  if (m.k === 'chat') return hostChat(id, m.text);
  if (m.k === 'hello') { if (G.phase !== 'lobby') {} mesh.sendTo(id, { t: 'lobby', l: G.lobby }); if (H && H.ph !== 'lobby' && H.ph !== 'end') hostLateJoin(id); return; }
  if (m.k === 'report') { const by = nameOf(id), who = nameOf(m.id); if (id !== myId) onEvent({ k: 'report', by, who }); console.warn('[report]', by, '→', who); return; }
  if (!H) return;
  if (m.k === 'loaded') { H.loaded.add(id); return; }
  const p = H.players.get(id); if (!p) return;
  const map = getMap(MODES[H.mode].map).map, t = now();
  const deny = msg => mesh.sendTo(id, { t: 'ev', k: 'deny', msg });
  if (H.mode === 'hide') {
    if (m.k === 'hide') {
      if (p.role !== 'h' || p.spot >= 0 || !(H.ph === 'hide' || H.ph === 'seek')) return;
      const s = map.spots[m.spot]; if (!s) return;
      if (H.spots[m.spot]) return deny('Someone is already hiding there.');
      if (s.f !== p.f || Math.hypot(s.x - p.x, s.z - p.z) > 2.6) return deny('Too far away.');
      H.spots[m.spot] = id; p.spot = m.spot; p.x = s.x; p.z = s.z;
      mesh.sendTo(id, { t: 'ev', k: 'hid', id, spot: m.spot }); if (id === myId) onEvent({ k: 'hid', id, spot: m.spot });
      for (const q of H.players.values()) if (q.id !== id && q.role !== 's') mesh.sendTo(q.id, { t: 'ev', k: 'hid', id, spot: m.spot });
    } else if (m.k === 'unhide') {
      if (p.spot < 0) return; const s = map.spots[p.spot]; delete H.spots[p.spot]; const sp = p.spot; p.spot = -1; p.x = s.ex; p.z = s.ez; p.lastT = t; p.hist = [];
      hostEv({ k: 'unhid', id, spot: sp, x: s.ex, z: s.ez });
    } else if (m.k === 'search') {
      if (p.role !== 's' || H.ph !== 'seek' || t - p.searchAt < 650) return;
      const s = map.spots[m.spot]; if (!s || s.f !== p.f || Math.hypot(s.x - p.x, s.z - p.z) > 2.8) return;
      p.searchAt = t; hostEv({ k: 'search', spot: m.spot });
      const delay = { risky: 250, medium: 650, safe: 1100 }[s.risk];
      setTimeout(() => { const who = H.spots[m.spot]; if (who && G.H === H && H.ph === 'seek') { const q = H.players.get(who); delete H.spots[m.spot]; q.spot = -1; q.x = s.ex; q.z = s.ez; hostFound(who, id, m.spot); } }, delay);
    } else if (m.k === 'find') {
      if (p.role !== 's' || H.ph !== 'seek') return; const q = H.players.get(m.id); if (!q || q.role !== 'h' || q.spot >= 0) return;
      if (!nearHist(q, p.x, p.z, p.f, 2.7) || !map.los(p.f, p.x, p.z, q.x, q.z)) return deny('Too far — get closer!');
      hostFound(q.id, id, null);
    }
  } else if (m.k === 'tag') {
    if (H.ph !== 'play' || id !== H.sk || m.ep !== H.ep || t < H.itFrozenUntil) return;
    const q = H.players.get(m.id); if (!q || !q.conn || q.id === id) return;
    if (q.id === H.prevIt && t < H.prevImmune) return deny('No tag-backs! Find someone else.');
    if (!nearHist(q, p.x, p.z, p.f, 2.6) || !map.los(p.f, p.x, p.z, q.x, q.z)) return deny('Missed — too far!');
    H.ep++; p.role = 'r'; q.role = 'i'; H.sk = q.id; H.prevIt = id; H.prevImmune = t + 3500; H.itFrozenUntil = t + 2000;
    p.stats.tags++; q.stats.tagged++;
    hostEv({ k: 'tag', a: id, b: q.id, ep: H.ep, freeze: 2000 });
  }
}
function hostFound(id, by, spot) {
  const H = G.H, q = H.players.get(id); q.role = 'x';
  hostEv({ k: 'found', id, by, spot });
  const left = [...H.players.values()].filter(p => p.role === 'h' && p.conn);
  if (!left.length) hostEnd('seeker');
}
function hostLateJoin(id) {
  const H = G.H, p = hostPlayer(id);
  if (!p.role || (!p.conn && p.goneAt && now() - p.goneAt > 60000)) p.role = 'x';
  if (p.role === 'x' && H.mode === 'tag') p.role = 'r';
  p.conn = true;
  const roles = {}; for (const q of H.players.values()) roles[q.id] = q.role;
  mesh.sendTo(id, { t: 'ev', k: 'start', mode: H.mode, roles, seed: 1, spawnIx: p.ix });
  setTimeout(() => { mesh.sendTo(id, { t: 'ev', k: 'phase', ph: H.ph, tl: H.tl, sk: H.sk, roles }); if (p.spot >= 0) mesh.sendTo(id, { t: 'ev', k: 'hid', id, spot: p.spot }); }, 1500);
}
function hostChat(id, text) {
  const H = G.H, name = nameOf(id);
  if (!H || H.ph === 'lobby' || H.ph === 'end' || G.phase === 'lobby') { const m = { t: 'ev', k: 'chat', from: id, name, text }; mesh.sendAll(m); onEvent(m); return; }
  // in-game: proximity chat (spectators talk to spectators)
  const p = H.players.get(id); if (!p) return;
  for (const q of H.players.values()) {
    const spec = p.role === 'x', ok = spec ? q.role === 'x' : (q.role === 'x' || (q.f === p.f && Math.hypot(q.x - p.x, q.z - p.z) < 22) || Math.hypot(q.x - p.x, q.z - p.z, (q.y || 0) - (p.y || 0)) < 9);
    if (!ok) continue; const m = { t: 'ev', k: 'chat', from: id, name: spec ? name + ' (spectating)' : name, text, prox: true };
    if (q.id === myId) onEvent(m); else mesh.sendTo(q.id, m);
  }
}
function hostEnd(winner, note) {
  const H = G.H; if (!H || H.ph === 'end') return; H.ph = 'end';
  const stats = {}; for (const p of H.players.values()) stats[p.id] = { ...p.stats, role: p.role, name: nameOf(p.id) };
  const m = { k: 'end', mode: H.mode, winner, note, stats, sk: H.sk };
  hostEv(m);
  setTimeout(() => { if (G.H === H) { H.ph = 'lobby'; hostEv({ k: 'lobby' }); } }, 9000);
}
function hostTick() {
  const H = G.H; if (!H || H.ph === 'lobby' || H.ph === 'end') { if (H) H.lastTick = now(); return; }
  const t = now(), dt = Math.min(1, (t - (H.lastTick || t)) / 1000); H.lastTick = t; // wall-clock, not frame time
  // disconnected players get 60 s to come back
  for (const p of H.players.values()) if (!p.conn && p.goneAt && t - p.goneAt > 60000 && p.role !== 'x') { p.role = 'x'; if (H.mode === 'hide') { const left = [...H.players.values()].filter(q => q.role === 'h' && q.conn); if (!left.length && H.ph === 'seek') hostEnd('seeker'); } }
  if (H.ph === 'wait') { H.waitT += dt; const need = [...H.players.values()].filter(p => p.conn).length; if (H.loaded.size >= need || H.waitT > 10) hostSetPhase('count', 3); }
  else if (H.ph === 'count') { H.tl -= dt; if (H.tl <= 0) { if (H.mode === 'hide') hostSetPhase('hide', 20); else hostSetPhase('play', 240); } }
  else if (H.ph === 'hide') { H.tl -= dt; if (H.tl <= 0) { const hiders = [...H.players.values()].filter(p => p.role === 'h').length; hostSetPhase('seek', Math.min(300, 150 + 20 * hiders)); } }
  else if (H.ph === 'seek') { H.tl -= dt; if (H.tl <= 0) hostEnd('hiders'); }
  else if (H.ph === 'play') { H.tl -= dt; const it = H.players.get(H.sk); if (it) it.stats.it += dt; if (H.tl <= 0) hostEnd('tag'); }
  // snapshots, tailored per recipient
  H.sendAcc += dt; H.statAcc += dt;
  if (H.sendAcc >= 1 / 15) {
    H.sendAcc = 0;
    const map = getMap(MODES[H.mode].map).map;
    const tells = H.mode === 'hide' ? Object.keys(H.spots).map(Number).filter(s => map.spots[s].risk === 'risky') : [];
    const withStats = H.statAcc > 1; if (withStats) H.statAcc = 0;
    const S2 = withStats ? Object.fromEntries([...H.players.values()].map(p => [p.id, p.stats])) : null;
    const row = p => [p.id, +p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2), p.f, +p.yw.toFixed(2), +p.pt.toFixed(2), p.fl, p.role, p.spot];
    for (const q of H.players.values()) {
      if (!q.conn) continue;
      const seekerView = H.mode === 'hide' && q.role === 's';
      const P = [...H.players.values()].filter(p => p.conn && !(seekerView && p.spot >= 0)).map(p => { const r = row(p); if (seekerView) r[9] = -1; return r; });
      const msg = { t: 'sn', ph: H.ph, tl: Math.max(0, Math.ceil(H.tl)), sk: H.sk, ep: H.ep, P, tells, door: H.mode === 'hide' ? (H.ph === 'seek' ? 1 : 0) : null };
      if (S2) msg.S = S2;
      if (q.id === myId) onSnapLocal(msg); else mesh.sendTo(q.id, msg, false);
    }
  }
}
function onSnapLocal(m) { onSnap(m); }

// ================================================================== results / scoreboard
function showResults(m) {
  const R = G.round; if (R) R.ph = 'end';
  if (document.pointerLockElement) document.exitPointerLock();
  const rows = Object.entries(m.stats);
  let title, sub, body;
  if (m.mode === 'hide') {
    const surv = rows.filter(([, s]) => s.role === 'h').map(([, s]) => s.name);
    title = m.winner === 'seeker' ? 'SEEKER WINS' : m.winner === 'hiders' ? 'HIDERS WIN' : 'ROUND OVER';
    sub = m.note || (m.winner === 'seeker' ? `${nameOf(m.sk)} found everyone` : `Survivors: ${surv.join(', ') || '—'}`);
    body = rows.map(([id, s]) => `<tr><td><i style="background:${colorOf(id)}"></i>${esc(s.name)}</td><td>${s.role === 's' ? 'Seeker' : s.role === 'h' ? 'Survived' : 'Found'}</td></tr>`).join('');
    const iWon = (m.winner === 'seeker' && m.sk === myId) || (m.winner === 'hiders' && m.sk !== myId); iWon ? sfx.win() : sfx.lose();
  } else {
    rows.sort((a, b) => a[1].it - b[1].it);
    title = 'TAG — FINAL SCORES'; sub = m.note || `${rows[0] ? rows[0][1].name : ''} wins with the least time as IT`;
    body = '<tr><th>Player</th><th>Time IT</th><th>Tags</th><th>Tagged</th></tr>' + rows.map(([id, s], i) => `<tr class="${i === 0 ? 'win' : ''}"><td><i style="background:${colorOf(id)}"></i>${i === 0 ? '🏆 ' : ''}${esc(s.name)}</td><td>${s.it.toFixed(1)}s</td><td>${s.tags}</td><td>${s.tagged}</td></tr>`).join('');
    rows[0] && rows[0][0] === myId ? sfx.win() : sfx.lose();
  }
  $('resTitle').textContent = title; $('resSub').textContent = sub; $('resTable').innerHTML = body;
  show('results'); $('resNote').textContent = 'Back to the lobby in a few seconds…';
}
function renderScore() {
  const R = G.round; if (!R || $('score').classList.contains('hidden')) return;
  const ids = Object.keys(R.roles);
  const rows = ids.map(id => { const s = R.stats[id] || { it: 0, tags: 0, tagged: 0 }; return { id, s, role: R.roles[id] }; });
  if (R.mode === 'tag') rows.sort((a, b) => b.s.it - a.s.it);
  $('scoreBody').innerHTML = (R.mode === 'tag' ? '<tr><th>Player</th><th>Time IT</th><th>Tags</th><th>Tagged</th><th></th></tr>' : '<tr><th>Player</th><th>Status</th><th></th></tr>') +
    rows.map(r => `<tr class="${r.id === R.sk ? 'it' : ''}"><td><i style="background:${colorOf(r.id)}"></i>${esc(nameOf(r.id))}${r.id === myId ? ' (you)' : ''}${mesh.speaking(r.id) ? ' <span class="spk on">●</span>' : ''}</td>${R.mode === 'tag' ? `<td>${r.s.it.toFixed(1)}s</td><td>${r.s.tags}</td><td>${r.s.tagged}</td>` : `<td>${{ s: 'Seeker', h: 'Hiding', x: 'Found' }[r.role] || '—'}</td>`}<td>${r.id === myId ? '' : `<button class="mini" data-mute="${r.id}">${G.muted.has(r.id) ? 'Unmute' : 'Mute'}</button><button class="mini" data-report="${r.id}">Report</button>`}</td></tr>`).join('');
  $('scoreBody').querySelectorAll('[data-mute]').forEach(b => b.onclick = () => toggleMute(b.dataset.mute));
  $('scoreBody').querySelectorAll('[data-report]').forEach(b => b.onclick = () => report(b.dataset.report));
}

// ================================================================== local player
let mdx = 0, mdy = 0;
addEventListener('mousemove', e => { if (document.pointerLockElement === renderer.domElement) { mdx += e.movementX; mdy += e.movementY; } });
const key = c => !!G.keys[c];
function myRole() { return G.round && G.round.roles[myId]; }
function spectating() { return myRole() === 'x'; }
function frozen() {
  const R = G.round; if (!R) return true;
  if (R.ph === 'wait' || R.ph === 'count' || R.ph === 'end') return true;
  if (R.mode === 'tag' && R.sk === myId && now() < R.frozenUntil) return true;
  return false;
}
function updateMe(dt) {
  const me = G.me, map = G.M.map, R = G.round, sens = 0.0022 * S.sens;
  const locked = document.pointerLockElement === renderer.domElement || NORENDER;
  me.yaw -= mdx * sens; me.pitch = clamp(me.pitch - mdy * sens * (S.inv ? -1 : 1), -1.45, 1.45); mdx = mdy = 0;
  if (spectating()) return spectate(dt);
  if (me.spot >= 0) { // hiding
    const s = map.spots[me.spot], base = Math.atan2(-s.fx, -s.fz); let d = me.yaw - base; while (d > Math.PI) d -= 6.283; while (d < -Math.PI) d += 6.283; me.yaw = base + clamp(d, -0.7, 0.7); me.pitch = clamp(me.pitch, -0.5, 0.4);
    const low = { desk: 0.55, bed: 0.3, couch: 0.7, box: 0.75 }[s.type] ?? 1.45;
    camera.position.set(s.x + s.fx * 0.1, map.base(s.f) + low, s.z + s.fz * 0.1); camera.rotation.set(me.pitch, me.yaw, 0, 'YXZ');
    me.y = map.base(s.f); me.speed = 0; return;
  }
  const typing = document.activeElement === $('gameChatIn');
  let ix = 0, iz = 0;
  if (!typing && locked && !frozen()) { if (key('KeyW') || key('ArrowUp')) iz -= 1; if (key('KeyS') || key('ArrowDown')) iz += 1; if (key('KeyA') || key('ArrowLeft')) ix -= 1; if (key('KeyD') || key('ArrowRight')) ix += 1; }
  const moving = ix || iz;
  const [cx, cz] = map.cell(me.x, me.z), inVent = map.t(me.f, cx, cz) === VENT;
  if (inVent) me.crouch = true;
  const sp = BASE_SPEED[R.mode], mult = myRole() === 'i' ? 1.12 : 1;
  const wantSprint = moving && !typing && (key('ShiftLeft') || key('ShiftRight')) && !me.crouch && iz <= 0;
  me.sprint = wantSprint && me.sta > 0 && !me.exh;
  if (me.sprint) { me.sta -= dt * (R.mode === 'tag' ? 22 : 16); me.staT = 1; if (me.sta <= 0) { me.sta = 0; me.exh = true; sfx.breathe(0.3); } }
  else { me.staT -= dt; if (me.staT <= 0) me.sta = Math.min(100, me.sta + dt * (R.mode === 'tag' ? 18 : 12)); if (me.exh && me.sta > 30) me.exh = false; }
  const maxV = (me.crouch ? 1.8 : me.sprint ? sp.sprint : sp.walk) * mult;
  const l = Math.hypot(ix, iz) || 1, s = Math.sin(me.yaw), c = Math.cos(me.yaw);
  const tx = moving ? (ix * c + iz * s) / l * maxV : 0, tz = moving ? (-ix * s + iz * c) / l * maxV : 0;
  const acc = Math.min(1, dt * (me.air ? 3 : moving ? 14 : 12)); // snappy turns for juking
  me.vx += (tx - me.vx) * acc; me.vz += (tz - me.vz) * acc;
  const ox = me.x, oz = me.z;
  me.x += me.vx * dt; me.z += me.vz * dt; map.collide(me, RAD, me.crouch); map.updateFloor(me);
  me.speed = Math.hypot(me.x - ox, me.z - oz) / Math.max(dt, 1e-4);
  // vertical: jump + gravity
  const ground = map.heightAt(me.f, me.x, me.z);
  if (me.air) { me.vy -= 22 * dt; me.y += me.vy * dt; if (me.y <= ground) { me.y = ground; me.air = false; me.vy = 0; sfx.step({ x: me.x, y: me.y, z: me.z }, 0.4, false); } }
  else { me.y += (ground - me.y) * Math.min(1, dt * 18); if (Math.abs(ground - me.y) > 1.2) me.y = ground; }
  me.ck += ((me.crouch ? 1 : 0) - me.ck) * Math.min(1, dt * 10);
  // footsteps
  me.step += Math.hypot(me.x - ox, me.z - oz);
  const stride = me.crouch ? 1.1 : me.sprint ? 2.0 : 1.6;
  if (!me.air && me.step > stride) { me.step = 0; sfx.step({ x: me.x, y: me.y + 0.1, z: me.z }, me.crouch ? 0.08 : me.sprint ? 0.45 : 0.25, false); }
  const k = clamp(me.speed / 4, 0, 1.5); me.bob += dt * (me.sprint ? 13 : 9) * (k > 0.05 && !me.air ? 1 : 0);
  placeCamera(dt, Math.sin(me.bob * 2) * 0.035 * k);
}
function placeCamera(dt, bob) {
  const me = G.me, map = G.M.map, eye = me.y + EYE - (EYE - CEYE) * me.ck;
  if (!G.cam3) { camera.position.set(me.x, eye + bob, me.z); camera.rotation.set(me.pitch, me.yaw, 0, 'YXZ'); return; }
  // third person with collision against the grid
  const fwd = new THREE.Vector3(-Math.sin(me.yaw) * Math.cos(me.pitch), Math.sin(me.pitch), -Math.cos(me.yaw) * Math.cos(me.pitch));
  const head = new THREE.Vector3(me.x, eye + 0.15, me.z), right = new THREE.Vector3(Math.cos(me.yaw), 0, -Math.sin(me.yaw));
  const want = 3.4; let d = 0.3;
  const ceil = map.base(me.f) + map.FH - 0.35;
  for (; d < want; d += 0.15) { const p = head.clone().addScaledVector(fwd, -d).addScaledVector(right, 0.45 * d / want); if (map.inBlocked(me.f, p.x, p.z, true) || p.y > ceil || p.y < map.base(me.f) + 0.2) { d -= 0.3; break; } }
  d = Math.max(0.25, d);
  camera.position.copy(head).addScaledVector(fwd, -d).addScaledVector(right, 0.45 * d / want); camera.rotation.set(me.pitch, me.yaw, 0, 'YXZ');
}
function spectate(dt) {
  const sp = G.spec, me = G.me, map = G.M.map;
  const alive = [...G.others.values()].filter(o => o.av.group.visible && o.role !== 'x');
  $('specBar').classList.remove('hidden');
  if (sp.free || !alive.length) {
    sp.yaw = me.yaw; sp.pitch = me.pitch; const v = (key('ShiftLeft') ? 16 : 8) * dt;
    const f = new THREE.Vector3(-Math.sin(sp.yaw) * Math.cos(sp.pitch), Math.sin(sp.pitch), -Math.cos(sp.yaw) * Math.cos(sp.pitch)), r = new THREE.Vector3(Math.cos(sp.yaw), 0, -Math.sin(sp.yaw));
    if (key('KeyW')) { sp.x += f.x * v; sp.y += f.y * v; sp.z += f.z * v; } if (key('KeyS')) { sp.x -= f.x * v; sp.y -= f.y * v; sp.z -= f.z * v; }
    if (key('KeyD')) { sp.x += r.x * v; sp.z += r.z * v; } if (key('KeyA')) { sp.x -= r.x * v; sp.z -= r.z * v; } if (key('Space')) sp.y += v; if (key('KeyC')) sp.y -= v;
    camera.position.set(sp.x, sp.y, sp.z); camera.rotation.set(sp.pitch, sp.yaw, 0, 'YXZ');
    $('specName').textContent = 'FREE CAMERA'; me.x = sp.x; me.z = sp.z; me.y = sp.y - 1.6; me.f = clamp(Math.round(sp.y / map.FH - 0.3), 0, map.nf - 1);
    return;
  }
  const o = alive[((sp.i % alive.length) + alive.length) % alive.length];
  const back = 3.2, yaw = o.yaw, hx = o.x + Math.sin(yaw) * back, hz = o.z + Math.cos(yaw) * back;
  const p = { x: hx, z: hz, f: o.f }; map.collide(p, 0.2, true);
  camera.position.lerp(new THREE.Vector3(p.x, o.y + 2.3, p.z), Math.min(1, dt * 6)); camera.lookAt(o.x, o.y + 1.2, o.z);
  sp.x = camera.position.x; sp.y = camera.position.y; sp.z = camera.position.z;
  me.x = o.x; me.z = o.z; me.y = o.y; me.f = o.f;
  $('specName').textContent = 'SPECTATING ' + nameOf(o.id).toUpperCase();
}

// ================================================================== others
function updateOthers(dt) {
  const R = G.round;
  for (const o of G.others.values()) {
    const t = now() - 120, b = o.buf; if (!b.length) continue;
    let s = b[b.length - 1];
    for (let i = b.length - 1; i > 0; i--) if (t >= b[i - 1].t && t <= b[i].t) { const a = b[i - 1], c = b[i], k = (t - a.t) / Math.max(1, c.t - a.t); s = { x: a.x + (c.x - a.x) * k, y: a.y + (c.y - a.y) * k, z: a.z + (c.z - a.z) * k, f: c.f, yw: lerpAng(a.yw, c.yw, k), pt: a.pt + (c.pt - a.pt) * k }; break; }
    const px = o.x, pz = o.z; Object.assign(o, { x: s.x, y: s.y, z: s.z, f: s.f, yaw: s.yw, pitch: s.pt });
    const mv = Math.hypot(o.x - px, o.z - pz); o.speed += ((mv / Math.max(dt, 1e-4)) - o.speed) * Math.min(1, dt * 8); if (o.speed > 12) o.speed = 0;
    const hidden = o.spot >= 0, spec = o.role === 'x';
    o.av.group.visible = !hidden && !spec && now() - (o.seen || 0) < 450;
    o.av.group.position.set(o.x, o.y, o.z); o.av.group.rotation.y = o.yaw + Math.PI;
    const fl = o.fl || 0;
    o.av.update(dt, { speed: o.speed, crouch: !!(fl & 1), air: !!(fl & 4), it: o.role === 'i', seeker: o.role === 's', speaking: mesh.speaking(o.id), label: o.role === 'i' ? 'IT' : o.role === 's' ? 'SEEKER' : '', t: G.t, pitch: o.pitch, flash: R.mode === 'hide' && !!(fl & 8) });
    o.step += mv; if (o.av.group.visible && !(fl & 4) && o.step > ((fl & 1) ? 1.1 : o.speed > 4.5 ? 2.0 : 1.6)) { o.step = 0; const seeker = o.role === 's' || o.role === 'i'; const v = (fl & 1) ? 0.08 : o.speed > 4.5 ? 0.5 : 0.28; if (seeker && R.mode === 'hide') sfx.thud({ x: o.x, y: o.y, z: o.z }, 0.35 + v); else sfx.step({ x: o.x, y: o.y, z: o.z }, v, false); }
  }
  // remote flashlights (hide & seek)
  const M = G.M; if (R.mode === 'hide') {
    const lit = [...G.others.values()].filter(o => o.av.group.visible && (o.fl & 8)).sort((a, b) => Math.hypot(a.x - G.me.x, a.z - G.me.z) - Math.hypot(b.x - G.me.x, b.z - G.me.z));
    M.spots.forEach((s, i) => { const o = lit[i]; if (!o) { s.intensity = 0; return; } const eye = o.y + 1.35, dx = -Math.sin(o.yaw) * Math.cos(o.pitch), dy = Math.sin(o.pitch), dz = -Math.cos(o.yaw) * Math.cos(o.pitch); s.position.set(o.x, eye, o.z); s.target.position.set(o.x + dx * 5, eye + dy * 5, o.z + dz * 5); s.intensity = o.role === 's' ? 70 : 40; });
  } else M.spots.forEach(s => s.intensity = 0);
}

// ================================================================== interaction
function findTarget() {
  const R = G.round, me = G.me, map = G.M.map; if (!R || frozen() || spectating()) return null;
  if (me.spot >= 0) return { kind: 'unhide', text: 'Leave hiding spot' };
  const f = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(me.pitch, me.yaw, 0, 'YXZ'));
  const role = myRole(); let best = null, bs = 1e9;
  const consider = (x, y, z, maxD, minDot, o) => { const dx = x - me.x, dy = y - (me.y + 1.4), dz = z - me.z, d = Math.hypot(dx, dy, dz), dh = Math.hypot(dx, dz); if (dh > maxD) return; const dot = d > 0.01 ? (dx * f.x + dy * f.y + dz * f.z) / d : 1; if (dot < minDot) return; const sc = dh * (1.5 - dot); if (sc < bs) { bs = sc; best = o; } };
  if (R.mode === 'tag') {
    if (role !== 'i') return null;
    for (const o of G.others.values()) if (o.av.group.visible && o.f === me.f && o.role !== 'x') consider(o.x, o.y + 1, o.z, 2.6, 0.2, { kind: 'tag', id: o.id, text: 'TAG ' + nameOf(o.id) });
    return best;
  }
  if (role === 'h' && (R.ph === 'hide' || R.ph === 'seek')) for (const s of map.spots) if (s.f === me.f) consider(s.x, map.base(s.f) + 0.9, s.z, 2.3, 0.45, { kind: 'hide', spot: s.id, text: `Hide (${s.type}) · ${s.risk}` });
  if (role === 's' && R.ph === 'seek') {
    for (const s of map.spots) if (s.f === me.f) consider(s.x, map.base(s.f) + 0.9, s.z, 2.4, 0.45, { kind: 'search', spot: s.id, text: `Search the ${s.type}` });
    for (const o of G.others.values()) if (o.av.group.visible && o.role === 'h' && o.f === me.f) consider(o.x, o.y + 1, o.z, 2.6, 0.3, { kind: 'find', id: o.id, text: 'FOUND ' + nameOf(o.id) + '!' });
  }
  return best;
}
function act(t) {
  if (!t) return;
  const R = G.round, host = mesh.hostId();
  const rq = m => mesh.sendTo(host, { t: 'rq', ...m });
  if (t.kind === 'tag') { rq({ k: 'tag', id: t.id, ep: R.ep }); sfx.swish(); }
  else if (t.kind === 'hide') rq({ k: 'hide', spot: t.spot });
  else if (t.kind === 'unhide') rq({ k: 'unhide' });
  else if (t.kind === 'search') { rq({ k: 'search', spot: t.spot }); G.searchT = 0.65; }
  else if (t.kind === 'find') rq({ k: 'find', id: t.id });
}

// ================================================================== vfx
const sparkMat = new THREE.SpriteMaterial({ color: 0xffd84a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
function spawnBurst(x, y, z) {
  if (!G.M) return;
  for (let i = 0; i < 26; i++) { const s = new THREE.Sprite(sparkMat.clone()); s.material.color.setHSL(Math.random() * 0.15, 1, 0.6); s.scale.setScalar(0.25); s.position.set(x, y, z); G.M.scene.add(s); const a = Math.random() * 6.28, e = Math.random() * 1.2 - 0.2, v = 4 + Math.random() * 4; G.tagFx.push({ mesh: s, vx: Math.cos(a) * Math.cos(e) * v, vy: Math.sin(e) * v + 2, vz: Math.sin(a) * Math.cos(e) * v, life: 0.7 }); }
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.2, 0.35, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 1.2, 0.3), transparent: true, side: THREE.DoubleSide, depthWrite: false })); ring.rotation.x = -Math.PI / 2; ring.position.set(x, y - 1, z); G.M.scene.add(ring); G.tagFx.push({ mesh: ring, ring: true, life: 0.6 });
}
function updateFx(dt) {
  G.tagFx = G.tagFx.filter(p => {
    p.life -= dt; if (p.life <= 0) { p.mesh.parent && p.mesh.parent.remove(p.mesh); return false; }
    if (p.ring) { p.mesh.scale.setScalar(1 + (0.6 - p.life) * 14); p.mesh.material.opacity = p.life / 0.6; }
    else { p.vy -= 14 * dt; p.mesh.position.x += p.vx * dt; p.mesh.position.y += p.vy * dt; p.mesh.position.z += p.vz * dt; p.mesh.material.opacity = p.life / 0.7; }
    return true;
  });
}

// ================================================================== HUD
let hudT = 0;
function updateHUD(dt) {
  hudT -= dt; if (hudT > 0) return; hudT = 0.1;
  const R = G.round, me = G.me, role = myRole();
  const mm = Math.floor(R.tl / 60), ss = Math.floor(R.tl % 60);
  const phaseName = { wait: 'WAITING FOR PLAYERS', count: 'GET READY', hide: 'HIDING TIME', seek: 'SEEKING', play: 'TAG', end: 'ROUND OVER' }[R.ph] || '';
  $('timer').textContent = R.ph === 'wait' ? '--:--' : `${mm}:${String(ss).padStart(2, '0')}`;
  $('phase').textContent = phaseName;
  const ids = Object.keys(R.roles);
  if (R.mode === 'hide') {
    const left = ids.filter(id => R.roles[id] === 'h').length, total = ids.filter(id => R.roles[id] !== 's').length;
    $('who').innerHTML = `Seeker: <b style="color:${colorOf(R.sk)}">${esc(nameOf(R.sk))}</b>${R.sk === myId ? ' (you)' : ''}`;
    $('remain').textContent = `${left}/${total} hiders left`;
  } else {
    $('who').innerHTML = `IT: <b style="color:${colorOf(R.sk)}">${esc(nameOf(R.sk))}</b>${R.sk === myId ? ' (you!)' : ''}`;
    $('remain').textContent = `${ids.length} players`;
    const st = R.stats[myId]; $('myIt').textContent = st ? `Your time as IT: ${st.it.toFixed(1)}s` : '';
  }
  $('roleTag').textContent = { h: 'HIDER', s: 'SEEKER', x: 'SPECTATOR', i: 'YOU ARE IT', r: 'RUNNER' }[role] || '';
  $('roleTag').className = role === 'i' || role === 's' ? 'red' : '';
  $('staB').style.width = me.sta + '%'; $('sta').classList.toggle('low', me.sta < 25); $('sta').style.opacity = me.sta < 99.5 ? 1 : 0.35;
  const t = G.prompt; $('prompt').innerHTML = t ? `<kbd>E</kbd>${esc(t.text)}` : '';
  $('prompt').className = t && (t.kind === 'tag' || t.kind === 'find') ? 'hot' : '';
  $('lockedOv').classList.toggle('hidden', !(R.mode === 'hide' && role === 's' && R.ph === 'hide'));
  if (!$('lockedOv').classList.contains('hidden')) $('lockedT').textContent = Math.ceil(R.tl);
  $('specBar').classList.toggle('hidden', !spectating());
  const tx = mesh.transmitting() && mesh.level > 0.02;
  $('vInd').className = !mesh.micOn ? 'off' : mesh.micMuted ? 'muted' : tx ? 'talk' : '';
  $('vInd').textContent = !mesh.micOn ? '🎙 off' : mesh.micMuted ? '🎙 muted (M)' : S.mic === 'ptt' ? (mesh.pttDown ? '🎙 talking' : '🎙 hold V') : tx ? '🎙 talking' : '🎙 live';
  if (!$('score').classList.contains('hidden')) renderScore();
  // heartbeat / music intensity for hiders
  if (R.mode === 'hide') {
    let d = 99; const sk = G.others.get(R.sk); if (sk && role !== 's' && sk.f === me.f) d = Math.hypot(sk.x - me.x, sk.z - me.z);
    const inten = R.ph === 'seek' ? clamp(1 - d / 18, 0.15, 1) : 0.05; sfx.setIntensity(inten);
    G.hb = (G.hb || 0) - 0.1; if (d < 12 && role === 'h' && G.hb <= 0) { G.hb = 0.4 + d / 12 * 0.8; sfx.heartbeat(0.25 + (1 - d / 12) * 0.4); }
    vig.uniforms.dark.value = 0.9; vig.uniforms.red.value = role === 'h' && d < 8 ? (1 - d / 8) * 0.6 : 0;
  } else { vig.uniforms.dark.value = 0.25; vig.uniforms.red.value = role === 'i' && !G.noVig ? 0.3 : 0; }
}

// ================================================================== input
addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' && e.target.id !== 'gameChatIn') return;
  if (G.phase !== 'game') return;
  if (e.target.id === 'gameChatIn') {
    if (e.key === 'Enter') { const t = e.target.value.trim(); e.target.value = ''; e.target.blur(); $('gameChat').classList.remove('typing'); if (t) sendChat(t); lockPointer(); }
    else if (e.key === 'Escape') { e.target.blur(); $('gameChat').classList.remove('typing'); }
    return;
  }
  G.keys[e.code] = true;
  if (e.code === 'Tab') { e.preventDefault(); $('score').classList.remove('hidden'); renderScore(); }
  if (e.repeat) return;
  if (e.code === 'Enter') { e.preventDefault(); $('gameChat').classList.add('typing'); $('gameChatIn').focus(); return; }
  if (e.code === 'KeyE') act(G.prompt);
  if (e.code === 'KeyQ') { G.cam3 = !G.cam3; toast(G.cam3 ? 'Third person' : 'First person', 900); }
  if (e.code === 'KeyC' && !spectating()) { const [x, z] = G.M.map.cell(G.me.x, G.me.z); if (!(G.me.crouch && G.M.map.t(G.me.f, x, z) === VENT)) G.me.crouch = !G.me.crouch; }
  if (e.code === 'Space' && !spectating() && !G.me.air && G.me.spot < 0 && !frozen() && !G.me.crouch) { G.me.air = true; G.me.vy = 6.8; sfx.boing({ x: G.me.x, y: G.me.y, z: G.me.z }); }
  if (e.code === 'Space' && spectating()) { G.spec.free = !G.spec.free; }
  if (e.code === 'KeyF' && G.round && G.round.mode === 'hide') { G.me.flash = !G.me.flash; sfx.click(); }
  if (e.code === 'KeyV') mesh.setTalking(true);
  if (e.code === 'KeyM') micToggle();
  if (e.code === 'KeyN') deafToggle();
});
addEventListener('keyup', e => { G.keys[e.code] = false; if (e.code === 'Tab') $('score').classList.add('hidden'); if (e.code === 'KeyV' && mesh) mesh.setTalking(false); });
addEventListener('blur', () => { G.keys = {}; });
renderer.domElement.addEventListener('mousedown', e => {
  if (G.phase !== 'game') return;
  if (document.pointerLockElement !== renderer.domElement) { lockPointer(); return; }
  if (spectating()) { G.spec.i += e.button === 2 ? -1 : 1; G.spec.free = false; return; }
  if (e.button === 0 && G.prompt && (G.prompt.kind === 'tag' || G.prompt.kind === 'find')) act(G.prompt);
});
addEventListener('contextmenu', e => { if (G.phase === 'game') e.preventDefault(); });
function lockPointer() { if (G.phase !== 'game') return; const p = renderer.domElement.requestPointerLock({ unadjustedMovement: true }); if (p && p.catch) p.catch(() => renderer.domElement.requestPointerLock()); }
document.addEventListener('pointerlockchange', () => {
  const on = document.pointerLockElement === renderer.domElement;
  if (on) { $('clickIn').classList.add('hidden'); show(null); }
  else if (G.phase === 'game' && document.activeElement !== $('gameChatIn') && G.round && G.round.ph !== 'end') { backTo = 'pause'; show('pause'); }
});
$('clickIn').onclick = () => { ensureAudio(); lockPointer(); };
$('bResume').onclick = () => { show(null); lockPointer(); };
$('bPSettings').onclick = () => { backTo = 'pause'; show('settings'); };

// ================================================================== menu backdrop
let menuT = 0;
function showMenuScene() { const M = getMap('complex'); renderPass.scene = M.scene; }
function menuFrame(dt) {
  menuT += dt; const M = MAPS.complex; if (!M) return;
  const cx = 41.5 * 2, cz = 9.5 * 2, a = menuT * 0.06;
  camera.position.set(cx + Math.cos(a) * 9, 7.5 + Math.sin(menuT * 0.2) * 0.4, cz + Math.sin(a) * 9); camera.lookAt(cx, 4, cz);
  M.world.update({ t: menuT, dt, cam: camera.position });
  vig.uniforms.dark.value = 0.6; vig.uniforms.red.value = 0;
  if (G.phase === 'lobby' && mesh) { mesh.updateVoice(camera.position, null); mesh.micLevel(); if (Math.random() < 0.2) document.querySelectorAll('#plist .spk').forEach(s => s.classList.toggle('on', mesh.speaking(s.dataset.id))); }
  if (!NORENDER) composer.render(dt);
}

// ================================================================== main loop
let last = now(), lastRaf = 0;
G.t = 0;
function frame() { requestAnimationFrame(frame); lastRaf = now(); step(true); }
setInterval(() => { if (now() - lastRaf > 300) try { step(false); } catch (e) { console.error(e); } }, 100); // keep simulating in background tabs
function step(render) {
  const t = now(), dt = Math.min(render ? 0.05 : 0.12, (t - last) / 1000); last = t; G.t += dt;
  if (G.H) hostTick();
  if (G.phase !== 'game' || !G.M) { if (render) menuFrame(dt); return; }
  const M = G.M, R = G.round, me = G.me;
  updateMe(dt);
  updateOthers(dt);
  if (G.selfAv) { const sa = G.selfAv, show3 = G.cam3 && !spectating() && me.spot < 0; sa.group.visible = show3; if (show3) { sa.group.position.set(me.x, me.y, me.z); sa.group.rotation.y = me.yaw + Math.PI; sa.update(dt, { speed: me.speed, crouch: me.crouch, air: me.air, it: myRole() === 'i', seeker: myRole() === 's', speaking: false, label: '', t: G.t, pitch: me.pitch, flash: R.mode === 'hide' && me.flash }); } }
  updateFx(dt);
  G.prompt = findTarget();
  if (G.searchT > 0) G.searchT -= dt;
  // flashlight (school only)
  if (R.mode === 'hide' && !spectating() && me.spot < 0 && me.flash) {
    const dir = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation); flash.position.copy(camera.position).add(new THREE.Vector3(Math.cos(me.yaw) * 0.2, -0.2, -Math.sin(me.yaw) * 0.2)); flashT.position.copy(flash.position).addScaledVector(dir, 6);
    flash.intensity = myRole() === 's' ? 75 : 45; flash.castShadow = S.gfx !== 'low';
  } else flash.intensity = 0;
  M.world.update({ t: G.t, dt, cam: camera.position });
  updateHUD(dt);
  // send my state to the host
  G.sendAcc += dt;
  if (G.sendAcc >= 1 / 15) {
    G.sendAcc = 0;
    const fl = (me.crouch ? 1 : 0) | (me.sprint ? 2 : 0) | (me.air ? 4 : 0) | (me.flash && R.mode === 'hide' ? 8 : 0);
    const m = { t: 'in', s: ++G.lastSeq, x: +me.x.toFixed(2), y: +me.y.toFixed(2), z: +me.z.toFixed(2), f: me.f, yw: +me.yaw.toFixed(2), pt: +me.pitch.toFixed(2), fl };
    if (G.H) hostInput(myId, m); else mesh.sendTo(mesh.hostId(), m, false);
  }
  // audio listener + proximity voice
  const fw = new THREE.Vector3(0, 0, -1).applyEuler(camera.rotation); sfx.listener(camera.position, fw);
  const pos = {}, iSpec = spectating();
  for (const o of G.others.values()) {
    const theySpec = o.role === 'x';
    pos[o.id] = theySpec && !iSpec ? null : { x: o.x, y: o.y + 1.5, z: o.z, muffled: o.spot >= 0 || o.f !== me.f || !M.map.los(me.f, me.x, me.z, o.x, o.z), gain: theySpec ? 0.8 : 1 };
    if (theySpec && iSpec) pos[o.id] = { ...camera.position };
    if (!pos[o.id]) delete pos[o.id];
  }
  mesh.updateVoice(camera.position, R.ph === 'end' ? null : pos); mesh.micLevel();
  if (render && !NORENDER) { vig.uniforms.t.value = G.t; composer.render(dt); }
}

// ================================================================== boot
async function boot() {
  $('loadMsg').textContent = 'LOADING';
  await loadTextures('../fps/tex/');
  try { await document.fonts.ready; } catch (e) {}
  getMap('complex'); showMenuScene();
  setTimeout(() => getMap('school'), 300);
  $('loading').classList.add('hidden');
  $('name').value = S.name || '';
  const room = (Q.get('room') || '').replace(/\D/g, '').slice(0, 6);
  if (session && session.code) { $('bRejoin').classList.remove('hidden'); $('bRejoin').textContent = `Rejoin room ${session.code}`; }
  if (room && !(session && session.code === room)) { $('code').value = room; show('play'); } else show('menu');
  G.phase = 'menu';
  renderVoice();
}
bindSettings(); applySettings();
frame();
boot().catch(e => { $('loadMsg').textContent = 'FAILED TO LOAD · ' + (e.message || e); console.error(e); });
if (LOCAL || Q.has('debug')) window.__r = { G, mesh: () => mesh, hostRequest, myId, act, MAPS };
