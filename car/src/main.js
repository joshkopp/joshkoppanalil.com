import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import * as RD from './roads.js';
import { BODIES, PAINTS, OPTIONS, DEFAULT_CAR, buildCar, carStats, statBars } from './carmodel.js';
import { buildWorld, TIMES, coinMesh, coinSpot, radialTex } from './world.js';
import { Audio } from './audio.js';

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };
const clamp = (v, a, b) => Math.max(a, Math.min(b, v)), lerp = (a, b, t) => a + (b - a) * t;
const angDiff = (a, b) => { let d = (a - b) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };
const fmtT = ms => { const s = ms / 1000, m = Math.floor(s / 60); return `${String(m).padStart(2, '0')}:${(s - m * 60).toFixed(1).padStart(4, '0')}`; };
let toastT; function toast(t) { const e = $('#toast'); e.textContent = t; e.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => e.classList.remove('on'), 2200); }

/* ================================================================ renderer */
const MOBILE = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
if (MOBILE) document.body.classList.add('touchui');
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, MOBILE ? 1.5 : 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping; renderer.outputColorSpace = THREE.SRGBColorSpace;
const pmrem = new THREE.PMREMGenerator(renderer), envTex = pmrem.fromScene(new RoomEnvironment(), .04).texture;

/* ================================================================ state */
let cfg = { ...DEFAULT_CAR, ...store.get('jkdrive-car', {}) };
if (!BODIES[cfg.body]) cfg.body = 'coupe';
const settings = { mode: 'roam', time: 'day', cam: 0, ...store.get('jkdrive-set', {}) };
const saveSettings = () => store.set('jkdrive-set', { mode: settings.mode, time: settings.time, cam: settings.cam });
let myTracks = store.get('jkdrive-tracks', []);
let cur = { track: null, name: '', src: '' }, sharedOpen = false;
function loadCurrent() {
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get('t')) { const t = RD.decode(h.get('t')); if (t) { cur = { track: t, name: h.get('n') || 'Shared track', src: 'shared' }; sharedOpen = true; history.replaceState(null, '', location.pathname); return; } }
  const last = store.get('jkdrive-cur', null);
  if (last && last.code) { const t = RD.decode(last.code); if (t) { cur = { track: t, name: last.name || 'My track', src: last.src || 'mine' }; return; } }
  const p = RD.PRESETS[1]; cur = { track: p.make(), name: p.name, src: 'preset:' + p.id };
}
const saveCurrent = () => store.set('jkdrive-cur', { code: RD.encode(cur.track), name: cur.name, src: cur.src });
loadCurrent();

/* ================================================================ screens */
let screen = '';
function show(s) {
  if (s === screen) return;
  if (screen === 'drive') stopDrive();
  screen = s; $$('.screen').forEach(e => e.classList.toggle('on', e.id === s)); $$('#nav button').forEach(b => b.classList.toggle('on', b.dataset.s === s));
  if (s === 'garage') enterGarage(); if (s === 'tracks') enterTracks(); if (s === 'drive') startDrive();
}
$('#nav').onclick = e => { const b = e.target.closest('button'); if (b) { Audio.init(); Audio.click(); show(b.dataset.s); } };
$('#snd').onclick = () => { Audio.init(); const on = Audio.toggle(); $('#snd').textContent = on ? '🔊' : '🔇'; };
$('#snd').textContent = Audio.on ? '🔊' : '🔇';
addEventListener('pointerdown', () => Audio.init(), { once: true });

/* ================================================================ GARAGE */
const gScene = new THREE.Scene(); gScene.environment = envTex; gScene.environmentIntensity = .75; gScene.background = new THREE.Color('#090a09'); gScene.fog = new THREE.Fog('#090a09', 14, 30);
const gCam = new THREE.PerspectiveCamera(36, 1, .1, 100);
{
  const floor = new THREE.Mesh(new THREE.CircleGeometry(30, 64), new THREE.MeshStandardMaterial({ color: '#121413', roughness: .55, metalness: .25 })); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; gScene.add(floor);
  const table = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.7, .12, 64), new THREE.MeshStandardMaterial({ color: '#191b1a', roughness: .25, metalness: .7 })); table.position.y = .06; table.receiveShadow = true; gScene.add(table);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.66, .025, 8, 96), new THREE.MeshBasicMaterial({ color: '#b8f36b' })); ring.rotation.x = Math.PI / 2; ring.position.y = .12; gScene.add(ring);
  const ring2 = new THREE.Mesh(new THREE.TorusGeometry(5.5, .015, 8, 120), new THREE.MeshBasicMaterial({ color: '#2a3a1c' })); ring2.rotation.x = Math.PI / 2; ring2.position.y = .01; gScene.add(ring2);
  // light strips on a curved back wall
  const wc = document.createElement('canvas'); wc.width = 512; wc.height = 64; const g = wc.getContext('2d'); g.fillStyle = '#0b0c0b'; g.fillRect(0, 0, 512, 64); for (let k = 0; k < 16; k++) { g.fillStyle = k % 4 === 0 ? '#b8f36b' : '#e8ece4'; g.fillRect(k * 32 + 14, 0, 3, 64); }
  const wt = new THREE.CanvasTexture(wc); wt.colorSpace = THREE.SRGBColorSpace; wt.wrapS = THREE.RepeatWrapping; wt.repeat.set(3, 1);
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(16, 16, 9, 64, 1, true), new THREE.MeshBasicMaterial({ map: wt, side: THREE.BackSide, color: '#777' })); wall.position.y = 4.5; gScene.add(wall);
  const key = new THREE.SpotLight('#ffffff', 150, 30, .6, .7, 1.4); key.position.set(3, 9, 4); key.castShadow = true; key.shadow.mapSize.set(2048, 2048); key.shadow.bias = -.0003; gScene.add(key);
  const rimA = new THREE.PointLight('#b8f36b', 12, 14, 1.6); rimA.position.set(-5, 3.5, -4); gScene.add(rimA);
  const rimB = new THREE.PointLight('#2de2ff', 10, 14, 1.6); rimB.position.set(5, 3, -5); gScene.add(rimB);
  gScene.add(new THREE.HemisphereLight('#ffffff', '#202020', .5));
}
const turn = new THREE.Group(); turn.position.y = .12; gScene.add(turn);
let gCar = null, orbit = { az: .9, el: .28, dist: 9.5, drag: null, idle: 0 };
function disposeObj(o) { o.traverse(c => { if (c.geometry) c.geometry.dispose(); if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => { m.map && m.map !== envTex && m.map.dispose?.(); m.dispose(); }); }); }
let rebuildQ = false;
function rebuildCar() { if (rebuildQ) return; rebuildQ = true; requestAnimationFrame(() => { rebuildQ = false; if (gCar) { turn.remove(gCar); disposeObj(gCar); } gCar = buildCar(cfg); turn.add(gCar); gCar.scale.setScalar(.001); gCar.userData.pop = 0; paintGarageInfo(); }); }
function paintGarageInfo() {
  $('#gTitle').textContent = cfg.name || 'My Ride'; $('#gSub').textContent = `${BODIES[cfg.body].name} · ${OPTIONS.engine.find(o => o[0] === cfg.engine)[1]} engine · ${OPTIONS.tires.find(o => o[0] === cfg.tires)[1]} tires`;
  const s = statBars(cfg); $('#gStats').innerHTML = Object.entries(s).map(([k, v]) => `<div class="stat"><span>${k}</span><div class="bar"><i style="width:${Math.round(clamp(v, .05, 1) * 100)}%"></i></div></div>`).join('');
}
const setCfg = (k, v) => { cfg[k] = v; store.set('jkdrive-car', cfg); Audio.click(); rebuildCar(); renderOpts(); };
let gTab = 'body';
const chips = (k, list) => `<div class="chips">${list.map(([v, n]) => `<button class="chip ${cfg[k] === v ? 'on' : ''}" data-k="${k}" data-v="${v}">${n}</button>`).join('')}</div>`;
const swatches = (k, list, custom) => `<div class="chips">${list.map(([v, n]) => `<button class="sw ${cfg[k] === v ? 'on' : ''}" title="${n}" data-k="${k}" data-v="${v}" style="background:${v === 'none' ? 'repeating-linear-gradient(45deg,#333 0 4px,#222 4px 8px)' : v}"></button>`).join('')}${custom ? `<label class="sw pick ${list.some(x => x[0] === cfg[k]) ? '' : 'on'}" title="Custom"><input type="color" data-k="${k}" value="${/^#/.test(cfg[k]) ? cfg[k] : '#ffffff'}"></label>` : ''}</div>`;
const grp = (t, h) => `<div class="grp"><div class="lbl">${t}</div>${h}</div>`;
function renderOpts() {
  const O = OPTIONS; let h = '';
  if (gTab === 'body') h = grp('Body style', `<div class="bodies">${Object.entries(BODIES).map(([k, b]) => `<button class="bcard ${cfg.body === k ? 'on' : ''}" data-k="body" data-v="${k}"><b>${b.name}</b><small>${b.blurb}</small></button>`).join('')}</div>`)
    + grp('Ride height', chips('height', O.height)) + grp('Car name', `<input class="num" id="gNameIn" maxlength="20" value="${(cfg.name || '').replace(/"/g, '&quot;')}">`)
    + grp('Door number', `<input class="num" id="gNumIn" type="number" min="0" max="99" placeholder="none" value="${cfg.number ?? ''}">`)
    + `<button class="btn sm" id="gRand" style="width:100%">🎲 Randomize my build</button>`;
  if (gTab === 'paint') h = grp('Paint', swatches('paint', PAINTS.map(p => [p, p]), true)) + grp('Finish', chips('finish', O.finish)) + grp('Roof', chips('roof', O.roof)) + grp('Stripes', chips('stripes', O.stripes)) + grp('Stripe & number color', swatches('stripeColor', O.stripeColor, true));
  if (gTab === 'wheels') h = grp('Wheel style', chips('wheel', O.wheel)) + grp('Rim color', swatches('rim', O.rim, true)) + grp('Brake calipers', swatches('caliper', O.caliper));
  if (gTab === 'parts') h = grp('Spoiler', chips('spoiler', O.spoiler)) + grp('Hood', chips('hood', O.hood)) + grp('Underglow', swatches('glow', O.glow)) + grp('Headlights', swatches('lights', O.lights)) + grp('Window tint', chips('tint', O.tint));
  if (gTab === 'tune') h = grp('Engine', chips('engine', O.engine)) + `<p class="tip">More power raises acceleration and top speed.</p>` + grp('Tires', chips('tires', O.tires))
    + `<p class="tip">Sport tires grip harder. Drift tires slide longer and score bigger drifts. All-terrain tires barely slow down on grass.</p>` + `<p class="tip">A GT wing adds grip, lowering helps on the road, lifting helps off it.</p>`;
  $('#gOpts').innerHTML = h;
  $$('#gTabs button').forEach(b => b.classList.toggle('on', b.dataset.t === gTab));
  const ni = $('#gNameIn'); if (ni) ni.oninput = () => { cfg.name = ni.value; store.set('jkdrive-car', cfg); paintGarageInfo(); };
  const nu = $('#gNumIn'); if (nu) nu.onchange = () => { const v = nu.value === '' ? '' : clamp(Math.round(+nu.value), 0, 99); setCfg('number', v); };
  const gr = $('#gRand'); if (gr) gr.onclick = () => { const pick = a => a[Math.floor(Math.random() * a.length)]; Object.keys(OPTIONS).forEach(k => cfg[k] = pick(OPTIONS[k])[0]); cfg.body = pick(Object.keys(BODIES)); cfg.paint = pick(PAINTS); cfg.number = Math.floor(Math.random() * 99); setCfg('name', cfg.name); };
  $$('#gOpts input[type=color]').forEach(inp => inp.oninput = () => setCfg(inp.dataset.k, inp.value));
}
$('#gOpts').onclick = e => { const b = e.target.closest('[data-v]'); if (b) setCfg(b.dataset.k, b.dataset.v); };
$('#gTabs').onclick = e => { const b = e.target.closest('button'); if (b) { gTab = b.dataset.t; Audio.click(); renderOpts(); } };
$('#gNext').onclick = () => show('tracks');
function enterGarage() { renderOpts(); if (!gCar) rebuildCar(); else paintGarageInfo(); resize(); }
canvas.addEventListener('pointerdown', e => { if (screen !== 'garage') return; orbit.drag = { x: e.clientX, y: e.clientY, az: orbit.az, el: orbit.el }; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener('pointermove', e => { if (screen !== 'garage' || !orbit.drag) return; orbit.az = orbit.drag.az - (e.clientX - orbit.drag.x) * .008; orbit.el = clamp(orbit.drag.el + (e.clientY - orbit.drag.y) * .005, .04, 1.1); orbit.idle = 0; });
canvas.addEventListener('pointerup', () => { orbit.drag = null; });
canvas.addEventListener('wheel', e => { if (screen !== 'garage') return; orbit.dist = clamp(orbit.dist + e.deltaY * .01, 6, 16); }, { passive: true });
function updateGarage(dt) {
  if (!orbit.drag) { orbit.idle += dt; if (orbit.idle > 2.5) orbit.az += dt * .18; }
  if (gCar) { const p = gCar.userData.pop = Math.min(1, gCar.userData.pop + dt * 2.6); const s = p < 1 ? 1 + Math.sin(p * Math.PI) * .06 - (1 - p) * .9 : 1; gCar.scale.setScalar(Math.max(.01, s)); gCar.userData.wheels.forEach(w => w.spin.rotation.z -= w.side * dt * .4); }
  const narrow = innerWidth < 760, W = innerWidth, H = innerHeight;
  if (narrow) gCam.setViewOffset(W, H, 0, H * .17, W, H); else gCam.setViewOffset(W, H, 200, 0, W, H);
  const dd = orbit.dist * clamp(1.15 / (W / H), 1, 1.9);
  gCam.position.set(Math.sin(orbit.az) * Math.cos(orbit.el) * dd, Math.sin(orbit.el) * dd + .6, Math.cos(orbit.az) * Math.cos(orbit.el) * dd);
  gCam.lookAt(0, .75, 0); renderer.render(gScene, gCam);
}

/* ================================================================ TRACKS / EDITOR */
const ed = $('#ed'), eg = ed.getContext('2d');
const TOOLS = [['road', '🛣️', 'Road', 'Click and drag to paint roads. Curves and junctions shape themselves.'], ['ramp', '⛰️', 'Ramp', 'Click a straight road to add a jump ramp. Click it again to turn it around.'], ['boost', '⚡', 'Boost', 'Click a road to add a boost pad that launches you forward.'],
  ['building', '🏢', 'Building', 'Drag to place buildings. They are solid, so do not hit them.'], ['tree', '🌲', 'Trees', 'Drag to plant trees.'], ['start', '🏁', 'Start', 'Click a road to set the start. Click again to change direction.'], ['erase', '🧽', 'Erase', 'Drag to clear anything.'], ['fill', '🎨', 'Scenery', 'Drag to auto-fill empty land with buildings and trees.']];
let tool = 'road', undo = [], hoverC = null, painting = false, cs = 32, lastPaint = '';
function renderTools() {
  $('#tTools').innerHTML = TOOLS.map(([k, ic, n]) => `<button class="tool ${tool === k ? 'on' : ''}" data-t="${k}"><i>${ic}</i>${n}</button>`).join('');
  $('#tTip').textContent = TOOLS.find(t => t[0] === tool)[3];
  $('#tMode').innerHTML = [['roam', 'Free roam'], ['coins', 'Coin rush']].map(([k, n]) => `<button class="chip ${settings.mode === k ? 'on' : ''}" data-v="${k}">${n}</button>`).join('');
  $('#tTime').innerHTML = Object.entries(TIMES).map(([k, t]) => `<button class="chip ${settings.time === k ? 'on' : ''}" data-v="${k}">${t.name}</button>`).join('');
}
$('#tTools').onclick = e => { const b = e.target.closest('.tool'); if (b) { tool = b.dataset.t; Audio.click(); renderTools(); } };
$('#tMode').onclick = e => { const b = e.target.closest('[data-v]'); if (b) { settings.mode = b.dataset.v; saveSettings(); Audio.click(); renderTools(); } };
$('#tTime').onclick = e => { const b = e.target.closest('[data-v]'); if (b) { settings.time = b.dataset.v; saveSettings(); Audio.click(); renderTools(); } };
function renderLists() {
  $('#tPresets').innerHTML = RD.PRESETS.map(p => `<button class="tcard ${cur.src === 'preset:' + p.id ? 'on' : ''}" data-p="${p.id}"><b>${p.name}</b><small>${p.desc}</small></button>`).join('');
  $('#tMine').innerHTML = myTracks.length ? myTracks.map((t, k) => `<div class="tcard ${cur.src === 'mine:' + k ? 'on' : ''}" data-m="${k}"><b>${t.name.replace(/</g, '&lt;')}</b><small>${RD.decode(t.code)?.roads().length || 0} road tiles</small><button class="x" data-del="${k}" title="Delete">✕</button></div>`).join('') : '<p class="tip" style="margin:0 0 6px">Build something and hit Save to keep it here.</p>';
}
$('#tPresets').onclick = e => { const b = e.target.closest('[data-p]'); if (!b) return; const p = RD.PRESETS.find(x => x.id === b.dataset.p); setCur(p.make(), p.name, 'preset:' + p.id); };
$('#tMine').onclick = e => { const d = e.target.closest('[data-del]'); if (d) { e.stopPropagation(); const k = +d.dataset.del; if (confirm(`Delete "${myTracks[k].name}"?`)) { myTracks.splice(k, 1); store.set('jkdrive-tracks', myTracks); if (cur.src === 'mine:' + k) cur.src = 'edited'; renderLists(); } return; }
  const b = e.target.closest('[data-m]'); if (!b) return; const k = +b.dataset.m, t = RD.decode(myTracks[k].code); if (t) setCur(t, myTracks[k].name, 'mine:' + k); };
function setCur(t, name, src) { cur = { track: t, name, src }; undo = []; saveCurrent(); Audio.click(); renderLists(); $('#tName').value = name; drawEd(); }
$('#tNew').onclick = () => setCur(new RD.Track(), 'Blank track', 'edited');
$('#tRand').onclick = () => setCur(RD.randomCity(Date.now() & 0xffffff), 'Random city', 'edited');
$('#tScen').onclick = () => { pushUndo(); RD.scenery(cur.track, Date.now() & 0xffff, 1); edited(); };
$('#tClear').onclick = () => { pushUndo(); cur.track = new RD.Track(); edited(); };
$('#tUndo').onclick = () => { const u = undo.pop(); if (!u) return toast('Nothing to undo'); cur.track = u; edited(true); };
$('#tName').oninput = () => { cur.name = $('#tName').value || 'My track'; saveCurrent(); };
$('#tSave').onclick = () => {
  const code = RD.encode(cur.track), name = (cur.name || 'My track').trim(); let k = myTracks.findIndex(t => t.name === name);
  if (cur.src.startsWith('mine:') && myTracks[+cur.src.slice(5)]) k = +cur.src.slice(5);
  if (k >= 0) myTracks[k] = { name, code }; else { myTracks.unshift({ name, code }); k = 0; }
  store.set('jkdrive-tracks', myTracks); cur.src = 'mine:' + k; saveCurrent(); renderLists(); toast('Track saved'); Audio.beep(880);
};
$('#tShare').onclick = async () => { const url = `${location.origin}${location.pathname}#t=${RD.encode(cur.track)}&n=${encodeURIComponent(cur.name)}`; try { await navigator.clipboard.writeText(url); toast('Link copied. Anyone with it can drive your track.'); } catch (e) { prompt('Copy this link:', url); } };
$('#tDrive').onclick = () => show('drive');
function pushUndo() { undo.push(cur.track.clone()); if (undo.length > 60) undo.shift(); }
function edited(silent) { if (cur.src.startsWith('preset:')) cur.src = 'edited'; saveCurrent(); renderLists(); drawEd(); }
const roadImgs = new Map();
function roadImg(mask, s) { const k = mask + ':' + s; if (roadImgs.has(k)) return roadImgs.get(k); const c = document.createElement('canvas'); c.width = c.height = s; RD.drawRoad(c.getContext('2d'), mask, s, { detail: false }); roadImgs.set(k, c); return c; }
function sizeEd() {
  const wrap = $('.edwrap'), r = wrap.getBoundingClientRect(), narrow = innerWidth <= 1000;
  const avail = Math.min(r.width - 8, narrow ? innerWidth - 24 : r.height - 110, 720);
  cs = Math.max(14, Math.floor(avail / RD.N)); const S = cs * RD.N, d = Math.min(devicePixelRatio || 1, 2);
  ed.width = S * d; ed.height = S * d; ed.style.width = ed.style.height = S + 'px'; eg.setTransform(d, 0, 0, d, 0, 0); roadImgs.clear();
}
function drawCell(g, t, i, j, s, ox = 0, oy = 0) {
  const c = t.get(i, j), x = ox + i * s, y = oy + j * s;
  g.fillStyle = (i + j) % 2 ? '#3b6a2b' : '#3f702e'; g.fillRect(x, y, s, s);
  if (RD.isRoad(c)) {
    g.drawImage(roadImg(t.mask(i, j), s), x, y);
    if (RD.isRamp(c)) { const d = c - RD.RAMP0; g.save(); g.translate(x + s / 2, y + s / 2); g.rotate([-Math.PI / 2, 0, Math.PI / 2, Math.PI][d]);
      const gr = g.createLinearGradient(-s * .35, 0, s * .35, 0); gr.addColorStop(0, '#5c6068'); gr.addColorStop(1, '#f2c84b'); g.fillStyle = gr; g.fillRect(-s * .35, -s * .27, s * .7, s * .54);
      g.fillStyle = '#16171a'; g.beginPath(); g.moveTo(s * .22, 0); g.lineTo(-s * .05, -s * .17); g.lineTo(-s * .05, s * .17); g.closePath(); g.fill(); g.restore(); }
    if (c === RD.BOOST) { g.save(); g.translate(x, y); RD.drawBoost(g, s, .3); g.restore(); }
  } else if (c === RD.BUILDING) { const p = s * .1; g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(x + p + s * .06, y + p + s * .06, s - 2 * p, s - 2 * p); g.fillStyle = '#8b9099'; g.fillRect(x + p, y + p, s - 2 * p, s - 2 * p); g.fillStyle = '#a9aeb6'; g.fillRect(x + p, y + p, s - 2 * p, s * .14);
    g.fillStyle = '#5c6470'; for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) g.fillRect(x + p + s * (.12 + a * .24), y + p + s * (.24 + b * .2), s * .12, s * .1); }
  else if (c === RD.TREE) { const r = RD.rng(j * 131 + i * 17 + 5); for (let k = 0; k < 3; k++) { const tx = x + s * (.25 + r() * .5), ty = y + s * (.25 + r() * .5), rad = s * (.16 + r() * .1); g.fillStyle = 'rgba(0,0,0,.3)'; g.beginPath(); g.arc(tx + 2, ty + 2, rad, 0, 7); g.fill(); g.fillStyle = r() < .5 ? '#2f6b2c' : '#4f8a34'; g.beginPath(); g.arc(tx, ty, rad, 0, 7); g.fill(); } }
}
function drawEd() {
  const t = cur.track, S = cs * RD.N; eg.clearRect(0, 0, S, S);
  for (let j = 0; j < RD.N; j++) for (let i = 0; i < RD.N; i++) drawCell(eg, t, i, j, cs);
  // start marker
  const st = t.start; if (RD.isRoad(t.get(st.i, st.j))) { const [sx, , sz] = coinSpot(t, st.i, st.j), px = (sx / RD.CELL + RD.N / 2) * cs, py = (sz / RD.CELL + RD.N / 2) * cs;
    eg.save(); eg.translate(px, py); eg.rotate([-Math.PI / 2, 0, Math.PI / 2, Math.PI][st.d]);
    for (let k = 0; k < 4; k++) for (let q = 0; q < 2; q++) { eg.fillStyle = (k + q) % 2 ? '#111' : '#fff'; eg.fillRect(-cs * .38 + q * cs * .09, -cs * .3 + k * cs * .15, cs * .09, cs * .15); }
    eg.fillStyle = '#b8f36b'; eg.beginPath(); eg.moveTo(cs * .38, 0); eg.lineTo(cs * .02, -cs * .2); eg.lineTo(cs * .1, 0); eg.lineTo(cs * .02, cs * .2); eg.closePath(); eg.fill(); eg.restore(); }
  eg.strokeStyle = 'rgba(0,0,0,.18)'; eg.lineWidth = 1; for (let k = 1; k < RD.N; k++) { eg.beginPath(); eg.moveTo(k * cs + .5, 0); eg.lineTo(k * cs + .5, S); eg.moveTo(0, k * cs + .5); eg.lineTo(S, k * cs + .5); eg.stroke(); }
  if (hoverC) { eg.strokeStyle = '#b8f36b'; eg.lineWidth = 2; eg.strokeRect(hoverC[0] * cs + 1, hoverC[1] * cs + 1, cs - 2, cs - 2); }
}
function cellAt(e) { const r = ed.getBoundingClientRect(); const i = Math.floor((e.clientX - r.left) / cs), j = Math.floor((e.clientY - r.top) / cs); return i >= 0 && j >= 0 && i < RD.N && j < RD.N ? [i, j] : null; }
function applyTool(i, j, first) {
  const t = cur.track, c = t.get(i, j), key = i + ',' + j; if (!first && key === lastPaint) return; lastPaint = key;
  if (tool === 'road') { if (c !== RD.ROAD && !RD.isRoad(c)) t.set(i, j, RD.ROAD); else return; }
  else if (tool === 'building') { if (RD.isRoad(c) || c === RD.BUILDING) return; t.set(i, j, RD.BUILDING); }
  else if (tool === 'tree') { if (RD.isRoad(c) || c === RD.TREE) return; t.set(i, j, RD.TREE); }
  else if (tool === 'erase') { if (c === RD.E) return; t.set(i, j, RD.E); }
  else if (tool === 'fill') { if (c !== RD.E) return; const r = Math.random(), near = RD.DIRS.filter(([a, b]) => RD.isRoad(t.get(i + a, j + b))).length; t.set(i, j, near && r < .6 ? RD.BUILDING : RD.TREE); }
  else if (!first) return;
  else if (tool === 'ramp') { if (!RD.isRoad(c)) return toast('Ramps go on roads'); const m = t.mask(i, j);
    if (RD.isRamp(c)) { const d = c - RD.RAMP0; t.set(i, j, RD.RAMP0 + ((m & 10) && !(m & 5) ? (d === 1 ? 3 : 1) : (m & 5) && !(m & 10) ? (d === 0 ? 2 : 0) : (d + 1) % 4)); }
    else t.set(i, j, RD.RAMP0 + ((m & 10) && !(m & 5) ? 1 : 0)); }
  else if (tool === 'boost') { if (!RD.isRoad(c)) return toast('Boost pads go on roads'); t.set(i, j, c === RD.BOOST ? RD.ROAD : RD.BOOST); }
  else if (tool === 'start') { if (!RD.isRoad(c)) return toast('The start has to be on a road'); if (t.start.i === i && t.start.j === j) { const m = t.mask(i, j); let d = t.start.d; for (let k = 0; k < 4; k++) { d = (d + 1) % 4; if (!m || m & (1 << d)) break; } t.start.d = d; } else { t.start = { i, j, d: t.start.d }; t.fixStart(); } }
  Audio.click(); edited();
}
ed.addEventListener('pointerdown', e => { const c = cellAt(e); if (!c) return; Audio.init(); pushUndo(); painting = true; ed.setPointerCapture(e.pointerId); lastPaint = ''; applyTool(...c, true); });
ed.addEventListener('pointermove', e => { const c = cellAt(e); hoverC = c; if (painting && c) applyTool(...c, false); else drawEd(); });
ed.addEventListener('pointerup', () => { painting = false; }); ed.addEventListener('pointerleave', () => { hoverC = null; drawEd(); });
function enterTracks() { renderTools(); renderLists(); $('#tName').value = cur.name; requestAnimationFrame(() => { sizeEd(); drawEd(); }); }

/* ================================================================ DRIVE */
const keys = {}, touch = {};
const K = { gas: ['KeyW', 'ArrowUp'], brake: ['KeyS', 'ArrowDown'], left: ['KeyA', 'ArrowLeft'], right: ['KeyD', 'ArrowRight'], hand: ['Space'], nitro: ['ShiftLeft', 'ShiftRight'] };
const inp = k => K[k].some(c => keys[c]) || touch[k];
addEventListener('keydown', e => {
  if (e.target.matches('input')) return; keys[e.code] = true; Audio.init();
  if (screen !== 'drive') return;
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (e.repeat) return;
  if (e.code === 'KeyC') cycleCam(); if (e.code === 'KeyR') resetCar(); if (e.code === 'KeyH') Audio.horn();
  if (e.code === 'Escape' || e.code === 'KeyP') togglePause();
});
addEventListener('keyup', e => { keys[e.code] = false; });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; });
$$('#touch [data-k]').forEach(b => { const k = b.dataset.k, on = v => e => { e.preventDefault(); touch[k] = v; b.classList.toggle('down', v); if (v) Audio.init(); };
  b.addEventListener('pointerdown', on(true)); b.addEventListener('pointerup', on(false)); b.addEventListener('pointercancel', on(false)); b.addEventListener('pointerleave', on(false)); });
addEventListener('touchstart', () => document.body.classList.add('touchui'), { once: true, passive: true });

const CAMS = ['Chase', 'Far', 'Hood', 'Top'];
const D = { scene: null, cam: new THREE.PerspectiveCamera(62, 1, .1, 2000), world: null, car: null, P: null, running: false, paused: false };
function cycleCam() { settings.cam = (settings.cam + 1) % CAMS.length; saveSettings(); toast('Camera: ' + CAMS[settings.cam]); $('#pCam').textContent = CAMS[settings.cam]; }
$('#hCam').onclick = cycleCam; $('#hPause').onclick = () => togglePause();

function buildDriveScene() {
  if (D.scene) disposeObj(D.scene);
  const sc = new THREE.Scene(); D.scene = sc; sc.environment = envTex;
  D.world = buildWorld(cur.track, renderer, settings.time); sc.add(D.world.root); applyTime();
  // car
  D.car = buildCar(cfg); D.car.rotation.order = 'YZX'; sc.add(D.car);
  const head = []; [-1, 1].forEach(s => { const sp = new THREE.SpotLight('#fff3dc', 0, 70, .55, .55, 1.3); sp.position.set(D.car.userData.def.len / 2 - .2, .7, s * .6); sp.target.position.set(D.car.userData.def.len / 2 + 12, -.6, s * 1.2); D.car.add(sp, sp.target); head.push(sp); }); D.car.userData.spots = head;
  if (cfg.glow !== 'none') { const pl = new THREE.PointLight(cfg.glow, 6, 7, 1.5); pl.position.y = .3; D.car.add(pl); }
  D.fill = new THREE.PointLight('#cfd8ff', 0, 12, 1.4); D.fill.position.set(-3, 3.2, 0); D.car.add(D.fill);
  const flameM = new THREE.MeshBasicMaterial({ color: '#58d8ff', transparent: true, opacity: .85, blending: THREE.AdditiveBlending, depthWrite: false });
  D.flames = D.car.userData.exhaust.map(p => { const f = new THREE.Mesh(new THREE.ConeGeometry(.13, .9, 10, 1, true).rotateZ(Math.PI / 2).translate(-.45, 0, 0), flameM); f.position.copy(p); f.visible = false; D.car.add(f); return f; });
  // skid marks
  const MAX = 1400, pos = new Float32Array(MAX * 12), idx = []; for (let k = 0; k < MAX; k++) { const b = k * 4; idx.push(b, b + 1, b + 2, b + 2, b + 1, b + 3); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage)); sg.setIndex(idx); sg.setDrawRange(0, 0);
  const sm = new THREE.Mesh(sg, new THREE.MeshBasicMaterial({ color: '#0a0a0a', transparent: true, opacity: .55, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 })); sm.frustumCulled = false; sc.add(sm);
  D.skid = { pos, geo: sg, n: 0, MAX, last: [null, null] };
  // smoke particles
  D.parts = []; const ptex = radialTex();
  for (let k = 0; k < 90; k++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: ptex, color: '#d8d8d8', transparent: true, opacity: 0, depthWrite: false })); s.visible = false; sc.add(s); D.parts.push({ s, life: 0 }); }
  // coins
  D.coins = [];
  if (settings.mode === 'coins') {
    const roads = cur.track.roads().filter(([i, j]) => !(i === cur.track.start.i && j === cur.track.start.j));
    const r = RD.rng(roads.length * 977 + 3); for (let k = roads.length - 1; k > 0; k--) { const q = Math.floor(r() * (k + 1)); [roads[k], roads[q]] = [roads[q], roads[k]]; }
    roads.slice(0, Math.min(15, roads.length)).forEach(([i, j]) => { const m = coinMesh(), [x, y, z] = coinSpot(cur.track, i, j); m.position.set(x, y, z); sc.add(m); D.coins.push({ m, x, y, z, got: false }); });
  }
  drawMiniBase();
}
function applyTime() {
  const T = D.world.time, sc = D.scene; sc.fog = new THREE.Fog(T.fog, T.fogN, T.fogF); sc.background = new THREE.Color(T.fog); sc.environmentIntensity = T.env;
  if (D.lights) D.lights.forEach(l => sc.remove(l));
  const hemi = new THREE.HemisphereLight(T.hemiS, T.hemiG, T.hemiI);
  const sun = new THREE.DirectionalLight(T.sun, T.sunI); sun.castShadow = true; const sh = MOBILE ? 1024 : 2048; sun.shadow.mapSize.set(sh, sh);
  Object.assign(sun.shadow.camera, { left: -50, right: 50, top: 50, bottom: -50, near: 1, far: 260 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  sc.add(hemi, sun, sun.target); D.lights = [hemi, sun, sun.target]; D.sun = sun; D.sunDir = new THREE.Vector3(...T.sunDir).normalize();
  renderer.toneMappingExposure = T.exp;
  if (D.car) D.car.userData.spots.forEach(s => s.intensity = T.head * 160);
  if (D.fill) D.fill.intensity = T.head * 28;
}
function setTime(k) { settings.time = k; saveSettings(); const root = D.world.root; D.scene.remove(root); disposeObj(root); D.world = buildWorld(cur.track, renderer, k); D.scene.add(D.world.root); applyTime(); $('#pTime').textContent = TIMES[k].name; }
function spawnPose(t) { const { i, j, d } = t.start, [x, , z] = coinSpot(t, i, j); let h = [Math.PI / 2, 0, -Math.PI / 2, Math.PI][d];
  const m = t.mask(i, j), corners = { 3: 1, 6: 1, 12: 1, 9: 1 }; if (corners[m]) { /* face along the arc */ const [cx, cy] = { 3: [1, 0], 6: [1, 1], 12: [0, 1], 9: [0, 0] }[m]; const u = (x / RD.CELL + RD.N / 2) - i - cx, v = (z / RD.CELL + RD.N / 2) - j - cy; const tang = [-v, u]; const want = RD.DIRS[d]; if (tang[0] * want[0] + tang[1] * want[1] < 0) { tang[0] *= -1; tang[1] *= -1; } h = Math.atan2(-tang[1], tang[0]); }
  return { x, z, h };
}
function newState() { const s = spawnPose(cur.track); return { x: s.x, z: s.z, y: RD.groundH(cur.track, s.x, s.z), vy: 0, h: s.h, vx: 0, vz: 0, steer: 0, air: false, airT: 0, nitro: 1, boostT: 0, gear: 1, rpm: .2, shake: 0, pitch: 0, roll: 0, lean: 0, frozen: false,
  score: 0, drift: { on: false, pts: 0, mult: 1, t: 0, off: 0 }, top: 0, coinsGot: 0, t0: 0, tRun: 0, done: false, camYaw: s.h, camPos: null, gvy: 0 }; }
function startDrive() {
  if (!cur.track.fixStart()) { toast('Add some road first'); show('tracks'); return; }
  saveCurrent(); Audio.init(); buildDriveScene(); D.P = newState(); D.running = true; D.paused = false; D.stats = carStats(cfg);
  $('#pCam').textContent = CAMS[settings.cam]; $('#pTime').textContent = TIMES[settings.time].name; $('#keys').style.opacity = 1; setTimeout(() => $('#keys').style.opacity = .0, 9000);
  resize(); if (settings.mode === 'coins') countdown(); paintHud(true);
}
function stopDrive() { D.running = false; Audio.stopLoops(); $('#pause').classList.remove('on'); $('#finish').classList.remove('on'); }
function countdown() { const P = D.P; P.frozen = true; let n = 3; const c = $('#count'); const step = () => { c.innerHTML = `<b>${n || 'GO!'}</b>`; Audio.beep(n ? 520 : 1040); if (n === 0) { P.frozen = false; P.t0 = performance.now(); setTimeout(() => c.innerHTML = '', 900); return; } n--; setTimeout(step, 850); }; step(); }
function togglePause(force) { if (!D.running || D.P.done) return; D.paused = force ?? !D.paused; $('#pause').classList.toggle('on', D.paused); if (D.paused) { Audio.stopLoops(); $('#pInfo').textContent = `${cur.name} · ${settings.mode === 'coins' ? 'Coin rush' : 'Free roam'}`; } }
$('#pause').onclick = e => { const b = e.target.closest('[data-a]'); if (!b) return; Audio.click(); const a = b.dataset.a;
  if (a === 'resume') togglePause(false); if (a === 'restart') { togglePause(false); D.P = newState(); clearSkids(); D.coins.forEach(c => { c.got = false; c.m.visible = true; }); if (settings.mode === 'coins') countdown(); }
  if (a === 'cam') cycleCam(); if (a === 'time') { const ks = Object.keys(TIMES); setTime(ks[(ks.indexOf(settings.time) + 1) % ks.length]); }
  if (a === 'tracks') show('tracks'); if (a === 'garage') show('garage'); };
$('#finish').onclick = e => { const b = e.target.closest('[data-a]'); if (!b) return; const a = b.dataset.a; $('#finish').classList.remove('on');
  if (a === 'retry') { settings.mode = 'coins'; saveSettings(); startDrive(); } if (a === 'roam') { settings.mode = 'roam'; saveSettings(); startDrive(); } if (a === 'tracks') show('tracks'); };
function clearSkids() { D.skid.n = 0; D.skid.geo.setDrawRange(0, 0); D.skid.last = [null, null]; }
function resetCar() {
  const P = D.P; let best = null, bd = 1e9; cur.track.roads().forEach(([i, j]) => { const c = cur.track.get(i, j); if (RD.isRamp(c)) return; const [x, , z] = coinSpot(cur.track, i, j), d = (x - P.x) ** 2 + (z - P.z) ** 2; if (d < bd) { bd = d; best = [i, j, x, z]; } });
  if (!best) return; const [i, j, x, z] = best, m = cur.track.mask(i, j); let h = P.h; const dirs = [0, 1, 2, 3].filter(k => m & (1 << k)); if (dirs.length) { const hs = dirs.map(k => [Math.PI / 2, 0, -Math.PI / 2, Math.PI][k]); h = hs.reduce((a, b) => Math.abs(angDiff(b, P.h)) < Math.abs(angDiff(a, P.h)) ? b : a); }
  Object.assign(P, { x, z, y: 0, vy: 0, vx: 0, vz: 0, h, air: false, steer: 0 }); P.drift.on = false; $('#drift').classList.remove('on'); pop('Reset');
}
function pop(text, bad) { const e = document.createElement('div'); e.className = 'pop' + (bad ? ' bad' : ''); e.textContent = text; $('#pops').appendChild(e); setTimeout(() => e.remove(), 1400); }
function puff(x, y, z, n = 1, opt = {}) { for (let k = 0; k < n; k++) { const p = D.parts.find(q => q.life <= 0); if (!p) return; p.life = p.max = opt.life || 1.1 + Math.random() * .6; p.x = x + (Math.random() - .5) * .4; p.y = y; p.z = z + (Math.random() - .5) * .4; p.vx = (opt.vx || 0) + (Math.random() - .5) * 2; p.vy = (opt.vy ?? 1.2) + Math.random(); p.vz = (opt.vz || 0) + (Math.random() - .5) * 2; p.sz = opt.size || 1.2; p.s.material.color.set(opt.color || (settings.time === 'night' ? '#8f949c' : '#e2e2e2')); p.op = opt.op || .45; p.s.visible = true; } }
function addSkid(k, x, z) {
  const S = D.skid, last = S.last[k]; S.last[k] = [x, z]; if (!last) return; const dx = x - last[0], dz = z - last[1], l = Math.hypot(dx, dz); if (l < .05 || l > 3) return;
  const nx = -dz / l * .13, nz = dx / l * .13, b = (S.n % S.MAX) * 12, p = S.pos, y = .045;
  p.set([last[0] + nx, y, last[1] + nz, last[0] - nx, y, last[1] - nz, x + nx, y, z + nz, x - nx, y, z - nz], b);
  S.n++; const at = S.geo.attributes.position; at.needsUpdate = true; S.geo.setDrawRange(0, Math.min(S.n, S.MAX) * 6);
}
/* --------------- physics */
function collide(P) {
  const cr = 1.15, W = D.world.colliders, half = RD.N * RD.CELL / 2 - 1.2; let hit = 0;
  const push = (nx, nz, pen) => { P.x += nx * pen; P.z += nz * pen; const vn = P.vx * nx + P.vz * nz; if (vn < 0) { P.vx -= 1.3 * vn * nx; P.vz -= 1.3 * vn * nz; P.vx *= .8; P.vz *= .8; hit = Math.max(hit, -vn); } };
  if (P.x < -half) push(1, 0, -half - P.x); if (P.x > half) push(-1, 0, P.x - half); if (P.z < -half) push(0, 1, -half - P.z); if (P.z > half) push(0, -1, P.z - half);
  for (const b of W.boxes) { if (Math.abs(P.x - b.x) > b.hx + 3 || Math.abs(P.z - b.z) > b.hz + 3 || P.y > b.h) continue; const qx = clamp(P.x, b.x - b.hx, b.x + b.hx), qz = clamp(P.z, b.z - b.hz, b.z + b.hz); let dx = P.x - qx, dz = P.z - qz, d = Math.hypot(dx, dz);
    if (d < cr) { if (d < 1e-4) { dx = P.x - b.x; dz = P.z - b.z; d = Math.hypot(dx, dz) || 1; push(dx / d, dz / d, cr); } else push(dx / d, dz / d, cr - d); } }
  for (const c of W.circles) { const dx = P.x - c.x, dz = P.z - c.z; if (Math.abs(dx) > 3 || Math.abs(dz) > 3 || P.y > 5) continue; const d = Math.hypot(dx, dz), rr = cr * .8 + c.r; if (d < rr && d > 1e-4) push(dx / d, dz / d, rr - d); }
  return hit;
}
function step(dt) {
  const P = D.P, S = D.stats, t = cur.track; if (P.frozen) { P.vx = P.vz = 0; return; }
  const gas = inp('gas') ? 1 : 0, brk = inp('brake') ? 1 : 0, hand = inp('hand'), str = (inp('left') ? 1 : 0) - (inp('right') ? 1 : 0);
  const Fx = Math.cos(P.h), Fz = -Math.sin(P.h), Rx = Math.sin(P.h), Rz = Math.cos(P.h);
  let vF = P.vx * Fx + P.vz * Fz, vR = P.vx * Rx + P.vz * Rz;
  P.steer += (str - P.steer) * Math.min(1, dt * (str ? 7 : 10));
  const nitroOn = inp('nitro') && P.nitro > 0.01 && gas && !P.air; P.nitroOn = nitroOn;
  if (!P.air) {
    const road = RD.onRoad(t, P.x, P.z) || RD.groundH(t, P.x, P.z) > 0, surf = road ? 1 : .45 + .55 * S.off, roll = road ? .05 : .05 + (1 - S.off) * .9;
    const top = S.top * (nitroOn ? 1.28 : 1) * (P.boostT > 0 ? 1.3 : 1) * (road ? 1 : .55 + .45 * S.off), acc = S.acc * (nitroOn ? 1.7 : 1) * surf;
    if (gas) { if (vF < -.5) vF += 26 * dt; else vF += acc * Math.max(0, 1 - Math.max(0, vF) / top) * dt * (vF > top ? 0 : 1); }
    if (brk) { if (vF > .5) vF -= 30 * dt; else vF = Math.max(-S.top * .3, vF - acc * .55 * dt); }
    if (!gas && !brk) vF -= Math.sign(vF) * Math.min(Math.abs(vF), (1.6 + Math.abs(vF) * .02) * dt);
    if (hand) vF -= Math.sign(vF) * Math.min(Math.abs(vF), 4 * dt);
    vF -= vF * roll * dt; if (vF > top) vF = lerp(vF, top, dt * 1.5);
    const sp = Math.abs(vF), maxSt = 1 / (1 + sp / 28), yaw = P.steer * S.steer * clamp(vF / 7, -1, 1) * maxSt * (hand ? 1.45 : 1) * (Math.abs(vR) > 3 ? 1.15 : 1);
    P.h += yaw * dt;
    const grip = S.grip * surf * (hand ? .1 : 1) * (Math.abs(vR) > 4 ? 1 / S.slide : 1);
    vR *= Math.exp(-grip * dt);
    if (nitroOn) P.nitro = Math.max(0, P.nitro - dt * .32); else P.nitro = Math.min(1, P.nitro + dt * .035);
    if (RD.boostAt(t, P.x, P.z) && P.boostT <= 0) { P.boostT = 1.4; vF = Math.max(vF, 0) + 16; P.nitro = Math.min(1, P.nitro + .35); Audio.boost(); flash(.25); pop('BOOST!'); }
  } else { P.vy -= 26 * dt; vF -= vF * .02 * dt; P.h += P.steer * dt * .6; }
  P.boostT -= dt;
  P.vx = Fx * vF + Rx * vR; P.vz = Fz * vF + Rz * vR;
  const ox = P.x, oz = P.z; P.x += P.vx * dt; P.z += P.vz * dt;
  // ground
  const gh = RD.groundH(t, P.x, P.z);
  if (!P.air) {
    if (gh > P.y + .9) { P.x = ox; P.z = oz; const vF2 = P.vx * Fx + P.vz * Fz; P.vx -= Fx * vF2 * 1.4; P.vz -= Fz * vF2 * 1.4; crash(Math.abs(vF2)); }
    else if (gh < P.y - .3) { P.air = true; P.vy = Math.max(P.gvy, 0); P.airT = 0; }
    else { P.gvy = lerp(P.gvy, (gh - P.y) / dt, .5); P.y = gh; }
  } else {
    P.y += P.vy * dt; P.airT += dt;
    if (P.y <= gh) { const imp = -P.vy; P.y = gh; P.air = false; P.gvy = 0; P.vy = 0; if (imp > 5) { Audio.land(imp * .2); P.shake = Math.min(1.2, imp * .05); const d = D.car.userData.def; puff(P.x, .3, P.z, 10, { vy: .5, size: 2 }); P.lean = -.12; }
      if (P.airT > .55) { const pts = Math.round(P.airT * 400); P.score += pts; pop(`AIR ${P.airT.toFixed(1)}s  +${pts}`); } }
  }
  const hit = collide(P); if (hit > 3) crash(hit);
  // drift scoring
  const vF3 = P.vx * Fx + P.vz * Fz, vR3 = P.vx * Rx + P.vz * Rz, Dr = P.drift, sliding = !P.air && Math.abs(vR3) > 2.6 && Math.abs(vF3) > 8;
  if (sliding) { if (!Dr.on) { Dr.on = true; Dr.pts = 0; Dr.mult = 1; Dr.t = 0; } Dr.t += dt; Dr.off = 0; Dr.mult = Math.min(5, 1 + Math.floor(Dr.t / 1.4)); Dr.pts += Math.abs(vR3) * Math.abs(vF3) * dt * .35 * Dr.mult * S.slide; P.nitro = Math.min(1, P.nitro + dt * .08); }
  else if (Dr.on) { Dr.off += dt; if (Dr.off > .55) { Dr.on = false; const p = Math.round(Dr.pts); if (p > 30) { P.score += p; pop(`DRIFT +${p.toLocaleString()}`); const best = store.get('jkdrive-bestdrift', 0); if (p > best) { store.set('jkdrive-bestdrift', p); if (best) setTimeout(() => pop('New best drift!'), 500); } } } }
  P.slip = sliding ? Math.abs(vR3) : (brk && Math.abs(vF3) > 12 && !P.air ? 2 : 0) + (hand && Math.abs(vF3) > 6 ? 3 : 0);
  P.vF = vF3; P.vR = vR3; P.top = Math.max(P.top, Math.abs(vF3));
  // gears / rpm for sound
  const sp = Math.abs(vF3), gs = [0, .17, .33, .5, .7, .9, 2].map(k => k * S.top); let g = 1; while (g < 6 && sp > gs[g]) g++;
  if (g !== P.gear) { if (g > P.gear && gas) Audio.shift(); P.gear = g; }
  const lo = gs[g - 1], hi = gs[g]; P.rpm = lerp(P.rpm, clamp(.25 + .75 * (sp - lo) / Math.max(1, hi - lo), .2, 1.05) * (P.air && gas ? 1.1 : 1), dt * 10);
  P.gas = gas; P.rev = vF3 < -.5;
}
function crash(v) { const P = D.P; if (v < 3) return; Audio.crash(v); P.shake = Math.min(1, v * .045); if (P.drift.on && P.drift.pts > 30) { pop('Wiped out!', true); P.drift.on = false; P.drift.pts = 0; } if (v > 12) flash(.15); }
let flashT = 0; function flash(a) { flashT = a; }

/* --------------- HUD */
const mini = $('#mini'), mg = mini.getContext('2d'); let miniBase = null;
function drawMiniBase() { const S = 360, c = document.createElement('canvas'); c.width = c.height = S; const g = c.getContext('2d'), s = S / RD.N; g.fillStyle = '#20361a'; g.fillRect(0, 0, S, S);
  for (let j = 0; j < RD.N; j++) for (let i = 0; i < RD.N; i++) { const v = cur.track.get(i, j); if (RD.isRoad(v)) { const m = document.createElement('canvas'); m.width = m.height = Math.ceil(s); RD.drawRoad(m.getContext('2d'), cur.track.mask(i, j), Math.ceil(s), { detail: false }); g.drawImage(m, i * s, j * s); } else if (v === RD.BUILDING) { g.fillStyle = '#5b5f66'; g.fillRect(i * s + 2, j * s + 2, s - 4, s - 4); } else if (v === RD.TREE) { g.fillStyle = '#2c5a24'; g.beginPath(); g.arc(i * s + s / 2, j * s + s / 2, s * .32, 0, 7); g.fill(); } }
  miniBase = c; mini.width = mini.height = 360; mini.style.width = mini.style.height = '180px'; }
function drawMini() { const P = D.P, S = 360, k = S / (RD.N * RD.CELL); mg.save(); mg.clearRect(0, 0, S, S); mg.beginPath(); mg.roundRect(0, 0, S, S, 28); mg.clip(); mg.drawImage(miniBase, 0, 0); mg.fillStyle = 'rgba(0,0,0,.15)'; mg.fillRect(0, 0, S, S);
  D.coins.forEach(c => { if (c.got) return; mg.fillStyle = '#ffd24a'; mg.beginPath(); mg.arc((c.x + RD.N * RD.CELL / 2) * k, (c.z + RD.N * RD.CELL / 2) * k, 7, 0, 7); mg.fill(); });
  mg.translate((P.x + RD.N * RD.CELL / 2) * k, (P.z + RD.N * RD.CELL / 2) * k); mg.rotate(-P.h); mg.fillStyle = '#b8f36b'; mg.shadowColor = '#b8f36b'; mg.shadowBlur = 16; mg.beginPath(); mg.moveTo(16, 0); mg.lineTo(-10, -10); mg.lineTo(-5, 0); mg.lineTo(-10, 10); mg.closePath(); mg.fill(); mg.restore(); }
const gauge = $('#gauge'), gg = gauge.getContext('2d'); gauge.width = gauge.height = 440; gauge.style.width = gauge.style.height = '220px';
function drawGauge() {
  const P = D.P, S = 440, c = S / 2, R = 190, kmh = Math.abs(P.vF || 0) * 3.6, max = Math.ceil(D.stats.top * 3.6 * 1.35 / 40) * 40, a0 = Math.PI * .75, a1 = Math.PI * 2.25, A = v => a0 + (a1 - a0) * clamp(v / max, 0, 1);
  gg.clearRect(0, 0, S, S); gg.fillStyle = 'rgba(7,8,10,.62)'; gg.beginPath(); gg.arc(c, c, R + 18, 0, 7); gg.fill();
  gg.lineWidth = 14; gg.strokeStyle = 'rgba(255,255,255,.08)'; gg.beginPath(); gg.arc(c, c, R - 8, a0, a1); gg.stroke();
  const grad = gg.createLinearGradient(0, S, S, 0); grad.addColorStop(0, '#8fd14a'); grad.addColorStop(.7, '#b8f36b'); grad.addColorStop(1, '#ff4f6d'); gg.strokeStyle = grad; gg.beginPath(); gg.arc(c, c, R - 8, a0, A(kmh)); gg.stroke();
  gg.fillStyle = '#c7ccc2'; gg.font = '700 20px JetBrains Mono, monospace'; gg.textAlign = 'center'; gg.textBaseline = 'middle';
  for (let v = 0; v <= max; v += 20) { const a = A(v), big = v % 40 === 0; gg.strokeStyle = big ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.3)'; gg.lineWidth = big ? 4 : 2; gg.beginPath(); gg.moveTo(c + Math.cos(a) * (R - 26), c + Math.sin(a) * (R - 26)); gg.lineTo(c + Math.cos(a) * (R - (big ? 44 : 36)), c + Math.sin(a) * (R - (big ? 44 : 36))); gg.stroke();
    if (big) gg.fillText(v, c + Math.cos(a) * (R - 68), c + Math.sin(a) * (R - 68)); }
  const na = A(kmh); gg.strokeStyle = '#ff4f6d'; gg.lineWidth = 6; gg.shadowColor = '#ff4f6d'; gg.shadowBlur = 14; gg.beginPath(); gg.moveTo(c - Math.cos(na) * 20, c - Math.sin(na) * 20); gg.lineTo(c + Math.cos(na) * (R - 30), c + Math.sin(na) * (R - 30)); gg.stroke(); gg.shadowBlur = 0;
  gg.fillStyle = '#16181a'; gg.beginPath(); gg.arc(c, c, 16, 0, 7); gg.fill();
  gg.fillStyle = '#fff'; gg.font = '700 64px Space Grotesk, sans-serif'; gg.fillText(Math.round(kmh), c, c + 70); gg.fillStyle = '#7d8278'; gg.font = '700 17px JetBrains Mono, monospace'; gg.fillText('KM/H', c + 0, c + 112);
  gg.fillStyle = '#b8f36b'; gg.font = '700 30px JetBrains Mono, monospace'; gg.fillText(P.rev ? 'R' : Math.abs(P.vF) < .5 && !P.gas ? 'N' : P.gear, c, c - 62);
  // nitro arc
  gg.lineWidth = 10; gg.strokeStyle = 'rgba(45,226,255,.15)'; gg.beginPath(); gg.arc(c, c, R + 8, Math.PI * .8, Math.PI * .2, true); gg.stroke();
  gg.strokeStyle = P.nitroOn ? '#fff' : '#2de2ff'; gg.shadowColor = '#2de2ff'; gg.shadowBlur = P.nitroOn ? 20 : 8; gg.beginPath(); gg.arc(c, c, R + 8, Math.PI * .8, Math.PI * .8 - Math.PI * .6 * P.nitro, true); gg.stroke(); gg.shadowBlur = 0;
  gg.fillStyle = '#2de2ff'; gg.font = '700 15px JetBrains Mono, monospace'; gg.fillText('NOS', c, S - 18);
}
let hudLast = 0;
function paintHud(force) {
  const P = D.P, now = performance.now(); if (!force && now - hudLast < 100) return; hudLast = now;
  let h = '';
  if (settings.mode === 'coins') { const got = D.coins.filter(c => c.got).length, el = P.t0 ? (P.done ? P.tRun : now - P.t0) : 0, best = store.get('jkdrive-best', {})[RD.encode(cur.track)];
    h = `<div class="pill"><small>COINS</small>🪙 ${got}/${D.coins.length}</div><div class="pill"><small>TIME</small>${fmtT(el)}</div>${best ? `<div class="pill"><small>BEST</small>${fmtT(best)}</div>` : ''}`; }
  else h = `<div class="pill"><small>SCORE</small>${Math.round(P.score).toLocaleString()}</div><div class="pill"><small>TOP</small>${Math.round(P.top * 3.6)} km/h</div><div class="pill"><small>BEST DRIFT</small>${store.get('jkdrive-bestdrift', 0).toLocaleString()}</div>`;
  $('#hudTL').innerHTML = h;
  const Dr = P.drift; $('#drift').classList.toggle('on', Dr.on && Dr.pts > 20); if (Dr.on) { $('#driftP').textContent = Math.round(Dr.pts).toLocaleString(); $('#driftM').textContent = `DRIFT ×${Dr.mult}`; }
}
function finishRace() { const P = D.P; P.done = true; P.tRun = performance.now() - P.t0; const key = RD.encode(cur.track), all = store.get('jkdrive-best', {}), prev = all[key], rec = !prev || P.tRun < prev; if (rec) { all[key] = Math.round(P.tRun); store.set('jkdrive-best', all); }
  Audio.win(); $('#fTitle').textContent = rec ? (prev ? 'New record!' : 'Finished!') : 'Finished!'; $('#fTime').textContent = fmtT(P.tRun); $('#fInfo').textContent = rec && prev ? `Beat your old best of ${fmtT(prev)}` : prev ? `Best: ${fmtT(prev)}` : `All ${D.coins.length} coins on ${cur.name}`;
  setTimeout(() => $('#finish').classList.add('on'), 700); }

/* --------------- drive frame */
const tmpV = new THREE.Vector3(), tmpL = new THREE.Vector3();
function updateDrive(dt, time) {
  const P = D.P, car = D.car, def = car.userData.def;
  if (!D.paused) { const n = Math.ceil(dt / (1 / 120)); for (let k = 0; k < n; k++) step(dt / n); }
  // car visual
  car.position.set(P.x, P.y, P.z);
  const Fx = Math.cos(P.h), Fz = -Math.sin(P.h);
  let pitch; if (!P.air) { const hf = RD.groundH(cur.track, P.x + Fx * 1.6, P.z + Fz * 1.6), hb = RD.groundH(cur.track, P.x - Fx * 1.6, P.z - Fz * 1.6); pitch = Math.atan2(hf - hb, 3.2); car.position.y = Math.max(P.y, (hf + hb) / 2); }
  else pitch = clamp(Math.atan2(P.vy, Math.max(4, Math.abs(P.vF))) * .7, -.5, .5);
  P.pitch = lerp(P.pitch, pitch, Math.min(1, dt * (P.air ? 3 : 14)));
  car.rotation.set(0, P.h, P.pitch);
  const body = car.userData.body, accel = (P.gas ? -1 : 0) + (inp('brake') ? 1 : 0);
  P.roll = lerp(P.roll, clamp(-(P.vR || 0) * .012 - P.steer * Math.abs(P.vF || 0) * .0028, -.09, .09), dt * 6); P.lean = lerp(P.lean, accel * .025 * clamp(Math.abs(P.vF) / 10, 0, 1), dt * 5);
  body.rotation.x = P.roll; body.rotation.z = P.lean;
  car.userData.wheels.forEach(w => { if (w.front) w.holder.rotation.y = P.steer * .45; w.spin.rotation.z -= w.side * (P.vF || 0) * dt / def.wr; });
  D.car.userData.tail.emissiveIntensity = inp('brake') || P.rev ? 4 : 1.4;
  D.flames.forEach(f => { f.visible = !!P.nitroOn; if (P.nitroOn) f.scale.set(.8 + Math.random() * .6, 1, 1); });
  // particles: tire smoke, nitro
  if (!P.air && P.slip > 2.5 && Math.random() < dt * 30) { tmpV.set(def.rx, .2, (Math.random() < .5 ? -1 : 1) * def.w / 2); car.localToWorld(tmpV); puff(tmpV.x, tmpV.y, tmpV.z, 1, { size: 1.6, op: .4 }); }
  if (!P.air && (P.slip > 2.5 || (inp('hand') && Math.abs(P.vF) > 6))) [-1, 1].forEach((s, k) => { tmpV.set(def.rx, 0, s * (def.w / 2 - .12)); car.localToWorld(tmpV); addSkid(k, tmpV.x, tmpV.z); }); else D.skid.last = [null, null];
  if (!P.air && !RD.onRoad(cur.track, P.x, P.z) && RD.groundH(cur.track, P.x, P.z) === 0 && Math.abs(P.vF) > 8 && Math.random() < dt * 14) { tmpV.set(def.rx, .1, 0); car.localToWorld(tmpV); puff(tmpV.x, tmpV.y, tmpV.z, 1, { color: '#8a7a55', size: 1.4, op: .35 }); }
  D.parts.forEach(p => { if (p.life <= 0) return; p.life -= dt; const k = 1 - p.life / p.max; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt; p.vy *= .98; p.s.position.set(p.x, p.y, p.z); p.s.scale.setScalar(p.sz * (1 + k * 2.6)); p.s.material.opacity = p.op * (1 - k); if (p.life <= 0) p.s.visible = false; });
  // coins
  D.coins.forEach(c => { if (c.got) return; c.m.rotation.y = time * 2.2; c.m.position.y = c.y + Math.sin(time * 3 + c.x) * .25; c.m.userData.glow.lookAt(D.cam.position);
    if (!P.frozen && (P.x - c.x) ** 2 + (P.z - c.z) ** 2 + ((P.y + .8) - c.m.position.y) ** 2 < 2.7 ** 2) { c.got = true; c.m.visible = false; Audio.coin(); puff(c.x, c.y, c.z, 8, { color: '#ffd24a', vy: 3, size: .8, op: .9, life: .7 }); pop('+1 🪙'); if (D.coins.every(q => q.got)) finishRace(); } });
  D.world.anim.forEach(f => f(time));
  // sun follows car for crisp shadows
  D.sun.position.set(P.x + D.sunDir.x * 120, D.sunDir.y * 120, P.z + D.sunDir.z * 120); D.sun.target.position.set(P.x, 0, P.z); D.world.root.userData.sky.position.set(P.x, 0, P.z);
  if (D.world.root.userData.halo) D.world.root.userData.halo.quaternion.copy(D.cam.quaternion);
  // camera
  const cam = D.cam, sp = Math.abs(P.vF || 0), m = settings.cam;
  const velYaw = sp > 3 ? Math.atan2(-P.vz, P.vx) : P.h; const targetYaw = P.vF < -1 ? P.h : (Math.abs(angDiff(velYaw, P.h)) < 1.2 ? lerp(P.h, P.h + angDiff(velYaw, P.h), .35) : P.h);
  P.camYaw += angDiff(targetYaw, P.camYaw) * Math.min(1, dt * (m === 2 ? 20 : 4.5));
  const cx = Math.cos(P.camYaw), cz = -Math.sin(P.camYaw);
  let want, look;
  if (m === 0) { const d = 7.2 + sp * .05 + def.len * .25; want = tmpV.set(P.x - cx * d, P.y + 2.4 + sp * .012, P.z - cz * d); look = tmpL.set(P.x + cx * 3, P.y + 1.1, P.z + cz * 3); }
  else if (m === 1) { const d = 13 + sp * .06; want = tmpV.set(P.x - cx * d, P.y + 5.2, P.z - cz * d); look = tmpL.set(P.x + cx * 4, P.y + 1, P.z + cz * 4); }
  else if (m === 2) { const lift = def.c + .95 + car.userData.lift + (def === BODIES.truck ? .45 : 0); want = tmpV.set(P.x + Math.cos(P.h) * .2, P.y + lift, P.z - Math.sin(P.h) * .2); look = tmpL.set(P.x + Math.cos(P.h) * 20, P.y + lift - .4, P.z - Math.sin(P.h) * 20); }
  else { want = tmpV.set(P.x - cx * 6, 38, P.z - cz * 6); look = tmpL.set(P.x + cx * 4, 0, P.z + cz * 4); }
  if (!P.camPos || m === 2) P.camPos = want.clone(); else P.camPos.lerp(want, 1 - Math.exp(-dt * (m === 3 ? 4 : 7)));
  if (m === 0 || m === 1) { const g = RD.groundH(cur.track, P.camPos.x, P.camPos.z); if (P.camPos.y < g + 1) P.camPos.y = g + 1; }
  cam.position.copy(P.camPos); P.shake *= Math.exp(-dt * 5); if (P.shake > .01) cam.position.add(new THREE.Vector3((Math.random() - .5), (Math.random() - .5), (Math.random() - .5)).multiplyScalar(P.shake * .5));
  cam.lookAt(look); const fov = 60 + Math.min(16, sp * .2) + (P.nitroOn ? 8 : 0) + (P.boostT > 0 ? 6 : 0); cam.fov = lerp(cam.fov, m === 3 ? 50 : fov, dt * 4); cam.updateProjectionMatrix();
  // fx overlays + sound
  $('#speedfx').style.opacity = P.nitroOn || P.boostT > 0 ? 1 : clamp((sp / D.stats.top - .75) * 3, 0, .6);
  flashT = Math.max(0, flashT - dt); $('#flash').style.opacity = flashT;
  if (!D.paused) { Audio.engine(P.rpm, P.gas ? 1 : .15, false); Audio.tires(P.slip || 0, sp); }
  paintHud(); drawGauge(); drawMini();
  renderer.render(D.scene, cam);
}

/* ================================================================ loop + resize */
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); gCam.aspect = w / h; gCam.updateProjectionMatrix(); D.cam.aspect = w / h; D.cam.updateProjectionMatrix(); if (screen === 'tracks') { sizeEd(); drawEd(); } }
addEventListener('resize', resize);
let lastT = performance.now();
function frame(now) { requestAnimationFrame(frame); const dt = Math.min(.05, (now - lastT) / 1000); lastT = now; const time = now / 1000;
  if (screen === 'garage') updateGarage(dt); else if (screen === 'drive' && D.running) updateDrive(dt, time); }
document.addEventListener('visibilitychange', () => { if (document.hidden && screen === 'drive') { togglePause(true); } });
resize(); show(sharedOpen ? 'tracks' : 'garage');
requestAnimationFrame(frame);
setTimeout(() => { $('#loading').style.opacity = 0; $('#loading').style.pointerEvents = 'none'; setTimeout(() => $('#loading').remove(), 500); }, 250);
window.__drive = { D, settings, show, step, setTime, cfg: () => cfg, get cur() { return cur; }, keys, touch };
