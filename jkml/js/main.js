// JKML · Word Bomb — multiplayer word party game.
// The host's browser is the referee: it owns turns, the hidden bomb timer, lives and the dictionary check.
import { Mesh, newCode, MAX_PLAYERS } from './mesh.js';

const $ = id => document.getElementById(id);
const Q = new URLSearchParams(location.search), LOCAL = Q.has('local');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const now = () => performance.now();
const store = { get(k, d) { try { const v = localStorage.getItem('jkml-' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }, set(k, v) { try { localStorage.setItem('jkml-' + k, JSON.stringify(v)); } catch (e) {} } };
const P = Object.assign({ name: '', vol: 0.7, emoji: '' }, store.get('prefs', {}));
let session = null; try { session = JSON.parse(sessionStorage.getItem('jkml-session') || 'null'); } catch (e) {}
const myId = (session && session.id) || Math.random().toString(36).slice(2, 10);
const BONUS = 'abcdefghijlmnopqrstuv'; // finish these letters → +1 life
const EMOJI = ['🦊', '🐸', '🐼', '🐙', '🦄', '🐯', '🐵', '🐧', '🦖', '🐨', '🦉', '🐷', '🐳', '🦁', '🐰', '🐻', '👽', '🤖', '👻', '🎃'];
const COLORS = ['#ff5d73', '#ffb547', '#ffe14f', '#5cf08a', '#4fd4ff', '#7c8bff', '#c77dff', '#ff7bd5', '#36e0c0', '#ff8f5c', '#a4f05c', '#5ca8ff', '#f05cc9', '#5cf0e0', '#ffd25c', '#c0c0ff'];
const DIFF = { easy: [1200, Infinity], normal: [400, 6000], hard: [120, 900], insane: [30, 220] };

// ================================================================== audio (synth)
const A = {
  init() { if (this.ctx) { this.ctx.resume(); return; } const c = this.ctx = new (window.AudioContext || window.webkitAudioContext)(); this.out = c.createGain(); this.out.gain.value = P.vol; this.out.connect(c.destination); this.voice = c.createGain(); this.voice.connect(c.destination); },
  get now() { return this.ctx ? this.ctx.currentTime : 0; },
  tone(f, d, v = 0.2, type = 'sine', when = 0, slide) { if (!this.ctx) return; const c = this.ctx, t = c.currentTime + when, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t + d); o.connect(g); g.connect(this.out); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.start(t); o.stop(t + d + 0.02); },
  noise(d, v, f = 800, type = 'lowpass') { if (!this.ctx) return; const c = this.ctx, n = c.sampleRate * d, b = c.createBuffer(1, n, c.sampleRate), x = b.getChannelData(0); for (let i = 0; i < n; i++) x[i] = (Math.random() * 2 - 1) * (1 - i / n) ** 2; const s = c.createBufferSource(), fl = c.createBiquadFilter(), g = c.createGain(); s.buffer = b; fl.type = type; fl.frequency.value = f; g.gain.value = v; s.connect(fl); fl.connect(g); g.connect(this.out); s.start(); },
  tick(fast) { this.tone(fast ? 1800 : 1400, 0.03, 0.06, 'square'); },
  ok() { this.tone(660, 0.1, 0.16, 'triangle'); this.tone(990, 0.16, 0.14, 'triangle', 0.07); },
  bad() { this.tone(220, 0.18, 0.14, 'square', 0, 140); },
  boom() { this.noise(0.9, 1.2, 600); this.tone(90, 0.6, 0.5, 'sine', 0, 30); },
  life() { [523, 659, 784, 1046].forEach((f, i) => this.tone(f, 0.2, 0.12, 'triangle', i * 0.07)); },
  turn() { this.tone(880, 0.08, 0.1, 'sine'); this.tone(1320, 0.12, 0.08, 'sine', 0.06); },
  win() { [523, 659, 784, 1046, 1318, 1568].forEach((f, i) => this.tone(f, 0.3, 0.12, 'triangle', i * 0.09)); },
  key() { this.tone(2200 + Math.random() * 400, 0.015, 0.025, 'square'); },
};

// ================================================================== dictionary + prompts
let WORDS = null, PROMPTS = null;
const dictReady = (async () => {
  const [w, p] = await Promise.all([fetch('words.txt').then(r => r.text()), fetch('prompts.json').then(r => r.json())]);
  WORDS = new Set(w.split('\n')); PROMPTS = p;
})();

// ================================================================== state
let mesh = null;
const G = { phase: 'menu', st: null, typing: {}, chatMuted: new Set(), lastTurn: null, tickT: 0, H: null, seenV: -1 };
const isHost = () => mesh && mesh.isHost();
const nameOf = id => { const p = G.st && G.st.players.find(q => q.id === id); return p ? p.name : ((mesh && mesh.players().find(q => q.id === id)) || {}).name || 'Player'; };
const seat = id => G.st && G.st.players.find(p => p.id === id);

// ================================================================== screens
function show(id) { for (const s of ['menu', 'room']) $(s).classList.toggle('hidden', s !== id); }
function toast(m, ms = 2600) { const d = document.createElement('div'); d.className = 'toast'; d.textContent = m; $('toasts').appendChild(d); setTimeout(() => d.classList.add('out'), ms); setTimeout(() => d.remove(), ms + 400); }
$('name').value = P.name || '';
const pickEmoji = () => { if (!P.emoji) { P.emoji = EMOJI[Math.floor(Math.random() * EMOJI.length)]; store.set('prefs', P); } $('emojiBtn').textContent = P.emoji; };
pickEmoji();
$('emojiBtn').onclick = () => { P.emoji = EMOJI[(EMOJI.indexOf(P.emoji) + 1) % EMOJI.length]; store.set('prefs', P); pickEmoji(); };
function needName() { P.name = $('name').value.trim().slice(0, 16); store.set('prefs', P); if (!P.name) { $('name').focus(); $('name').classList.add('shake'); setTimeout(() => $('name').classList.remove('shake'), 400); return true; } return false; }
$('bCreate').onclick = () => { A.init(); if (!needName()) enter('create'); };
$('bJoin').onclick = () => { A.init(); if (!needName()) enter('join', $('code').value.trim().toUpperCase()); };
$('code').oninput = () => { $('code').value = $('code').value.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4); };
$('code').onkeydown = e => { if (e.key === 'Enter') $('bJoin').click(); };
$('name').onkeydown = e => { if (e.key === 'Enter') ($('code').value.length === 4 ? $('bJoin') : $('bCreate')).click(); };
if (session && session.code) { $('bRejoin').classList.remove('hidden'); $('bRejoin').textContent = 'Rejoin room ' + session.code; }
$('bRejoin').onclick = () => { A.init(); $('name').value = session.name; if (!needName()) enter('join', session.code); };
{ const r = (Q.get('room') || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4); if (r) $('code').value = r; }
$('vol').value = P.vol; $('vol').oninput = () => { P.vol = +$('vol').value; store.set('prefs', P); if (A.out) A.out.gain.value = P.vol; };

async function enter(mode, code) {
  $('menuErr').textContent = mode === 'create' ? 'Creating room…' : 'Joining…';
  try {
    if (!mesh) { mesh = new Mesh(A, LOCAL); bind(); }
    let res;
    for (let i = 0; i < 4; i++) { const c = mode === 'create' ? newCode() : code; if (mode === 'join' && !/^[A-Z]{4}$/.test(c || '')) { res = { ok: false, err: 'Room codes are 4 letters.' }; break; } res = await mesh.join(c, { id: myId, name: P.name }, mode); code = c; if (res.ok || res.err !== 'taken') break; }
    if (!res.ok) { $('menuErr').textContent = res.err; return; }
    $('menuErr').textContent = '';
    session = { code, id: myId, name: P.name }; try { sessionStorage.setItem('jkml-session', JSON.stringify(session)); } catch (e) {}
    history.replaceState(null, '', location.pathname + '?' + (LOCAL ? 'local&' : '') + 'room=' + code);
    $('roomCode').textContent = code; $('chatLog').innerHTML = '';
    sys(mode === 'create' ? 'Room created! Share the code ' + code + ' with your friends.' : 'You joined room ' + code + '.');
    G.phase = 'room'; show('room');
    if (isHost()) hostInit(); else setTimeout(() => mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'hello', emoji: P.emoji }), 300);
    render();
  } catch (e) { $('menuErr').textContent = e.message || String(e); }
}
$('bLeave').onclick = async () => { if (mesh) await mesh.leave(); try { sessionStorage.removeItem('jkml-session'); } catch (e) {} session = null; G.st = null; G.H = null; G.phase = 'menu'; history.replaceState(null, '', location.pathname + (LOCAL ? '?local' : '')); $('bRejoin').classList.add('hidden'); show('menu'); };
$('bCopy').onclick = () => navigator.clipboard.writeText(location.origin + location.pathname + '?room=' + $('roomCode').textContent).then(() => toast('Invite link copied!')).catch(() => {});
$('bMic').onclick = async () => { A.init(); try { if (!mesh.micOn) await mesh.enableMic(); else mesh.setMicMuted(!mesh.micMuted); } catch (e) { toast('Microphone blocked'); } renderVoice(); };
$('bDeaf').onclick = () => { mesh.setDeaf(!mesh.deaf); renderVoice(); };
function renderVoice() { if (!mesh) return; $('bMic').textContent = !mesh.micOn ? '🎙 Voice off' : mesh.micMuted ? '🎙 Muted' : '🎙 Voice on'; $('bMic').classList.toggle('on', mesh.micOn && !mesh.micMuted); $('bDeaf').textContent = mesh.deaf ? '🔇' : '🔊'; }

// ================================================================== networking
function bind() {
  mesh.on('presence', () => { if (G.H) hostPresence(); else if (isHost() && G.phase === 'room') hostTakeover(); render(); });
  mesh.on('st', (m, from) => { if (from === mesh.hostId() || from === myId) applyState(m.s); });
  mesh.on('ev', (m, from) => { if (from === mesh.hostId() || from === myId) onEvent(m); });
  mesh.on('ty', (m, from) => { G.typing[from] = m.text; renderTyping(from); });
  mesh.on('chat', (m, from) => { if (!G.chatMuted.has(from)) chat(m.name, m.text, m.color); });
  mesh.on('rq', (m, from) => { if (G.H) hostReq(from, m); });
}
function sys(text) { const d = document.createElement('div'); d.className = 'msg sys'; d.textContent = text; $('chatLog').appendChild(d); $('chatLog').scrollTop = 1e9; }
function chat(name, text, color) { const d = document.createElement('div'); d.className = 'msg'; d.innerHTML = `<b style="color:${color || '#fff'}">${esc(name)}</b> ${esc(text)}`; $('chatLog').appendChild(d); while ($('chatLog').children.length > 120) $('chatLog').firstChild.remove(); $('chatLog').scrollTop = 1e9; }
$('chatIn').onkeydown = e => { if (e.key !== 'Enter') return; const t = $('chatIn').value.trim().slice(0, 200); if (!t) return; $('chatIn').value = ''; const me = seat(myId), m = { t: 'chat', name: P.name, text: t, color: me ? me.color : '#ddd' }; mesh.sendAll(m); chat(m.name, m.text, m.color); };

// ================================================================== host (referee)
function hostInit(from) {
  G.H = { st: from || { v: 0, ph: 'lobby', players: [], settings: { lives: 2, maxLives: 3, diff: 'normal', minTurn: 5 }, turn: null, prompt: '', used: [], round: 0, winner: null, recent: [] }, deadline: 0, timer: null };
  hostTimer(); hostCommit();
}
function hostTakeover() { // previous host left
  if (G.H) return; hostInit(G.st ? JSON.parse(JSON.stringify(G.st)) : null); sys('You are now the host.');
  if (G.H.st.ph === 'play') hostNewDeadline();
  hostPresence();
}
function hostCommit() { const H = G.H; H.st.v++; const m = { t: 'st', s: H.st }; mesh.sendAll(m); applyState(H.st); }
function hostEv(m) { m.t = 'ev'; mesh.sendAll(m); onEvent(m); }
function hostPresence() {
  const H = G.H, ids = new Set(mesh.players().map(p => p.id)); let ch = false;
  for (const p of H.st.players) { const c = ids.has(p.id); if (p.conn !== c) { p.conn = c; p.goneAt = c ? 0 : Date.now(); ch = true; } }
  if (H.st.ph !== 'play') { const n = H.st.players.length; H.st.players = H.st.players.filter(p => p.conn); if (H.st.players.length !== n) ch = true; }
  if (ch) hostCommit();
}
function hostReq(from, m) {
  const H = G.H, S = H.st, p = S.players.find(q => q.id === from);
  switch (m.k) {
    case 'hello': mesh.sendTo(from, { t: 'st', s: S }); break;
    case 'join': {
      if (S.ph === 'play' || p || S.players.length >= MAX_PLAYERS) return;
      const used = new Set(S.players.map(q => q.color));
      S.players.push({ id: from, name: (m.name || 'Player').slice(0, 16), emoji: m.emoji || '🙂', color: COLORS.find(c => !used.has(c)) || COLORS[0], lives: 0, alive: false, letters: '', words: 0, best: '', conn: true });
      hostCommit(); break;
    }
    case 'leaveSeat': if (S.ph !== 'play' && p) { S.players = S.players.filter(q => q !== p); hostCommit(); } break;
    case 'settings': if (from === mesh.hostId() && S.ph !== 'play') { Object.assign(S.settings, m.s); hostCommit(); } break;
    case 'start': {
      if (from !== mesh.hostId() || S.ph === 'play' || !S.players.length || !WORDS) return;
      for (let i = S.players.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [S.players[i], S.players[j]] = [S.players[j], S.players[i]]; }
      S.players.forEach(q => Object.assign(q, { lives: S.settings.lives, alive: true, letters: '', words: 0, best: '' }));
      Object.assign(S, { ph: 'play', used: [], round: S.round + 1, winner: null, recent: [], turnN: 0 });
      hostEv({ k: 'start' }); hostNextTurn(S.players[0].id); break;
    }
    case 'word': {
      if (S.ph !== 'play' || S.turn !== from || !p) return;
      const w = String(m.w || '').toLowerCase().replace(/[^a-z]/g, '');
      let why = null;
      if (!w.includes(S.prompt)) why = 'Missing ' + S.prompt.toUpperCase();
      else if (!WORDS.has(w)) why = 'Not in the dictionary';
      else if (S.used.includes(w)) why = 'Already used';
      if (why) { hostEv({ k: 'bad', id: from, w, why }); return; }
      S.used.push(w); p.words++; if (w.length > p.best.length) p.best = w;
      let life = false;
      for (const ch of w) if (BONUS.includes(ch) && !p.letters.includes(ch)) p.letters += ch;
      if (p.letters.length >= BONUS.length) { p.letters = ''; if (p.lives < S.settings.maxLives) { p.lives++; life = true; } }
      hostEv({ k: 'ok', id: from, w, life });
      hostNextTurn(nextAlive(from));
      break;
    }
  }
}
function nextAlive(id) { const S = G.H.st, n = S.players.length, i = S.players.findIndex(p => p.id === id); for (let k = 1; k <= n; k++) { const q = S.players[(i + k) % n]; if (q.alive) return q.id; } return id; }
function pickPrompt() {
  const S = G.H.st, [lo, hi] = DIFF[S.settings.diff] || DIFF.normal;
  // difficulty creeps up as the game goes on
  const ramp = Math.min(0.6, (S.turnN || 0) / 80), lo2 = Math.max(30, lo * (1 - ramp));
  const pool = PROMPTS.filter(([p, c]) => c >= lo2 && c <= hi && !S.recent.includes(p));
  const [p] = pool[Math.floor(Math.random() * pool.length)] || PROMPTS[Math.floor(Math.random() * 300)];
  S.recent.push(p); if (S.recent.length > 40) S.recent.shift();
  return p;
}
function hostNewDeadline() { const S = G.H.st; G.H.deadline = now() + (S.settings.minTurn + Math.random() * 9) * 1000; }
function hostNextTurn(id) {
  const S = G.H.st; S.turn = id; S.prompt = pickPrompt(); S.turnN = (S.turnN || 0) + 1; hostNewDeadline(); hostCommit();
}
function hostTimer() {
  clearInterval(G.H.timer);
  G.H.timer = setInterval(() => {
    const H = G.H; if (!H || H.st.ph !== 'play') return; const S = H.st;
    const cur = S.players.find(p => p.id === S.turn);
    // a disconnected player's bomb goes off quickly
    if (cur && !cur.conn && now() < H.deadline - 2500) H.deadline = now() + 2500;
    if (now() < H.deadline) return;
    if (cur) { cur.lives--; if (cur.lives <= 0) { cur.lives = 0; cur.alive = false; } }
    hostEv({ k: 'boom', id: S.turn, prompt: S.prompt, dead: cur && !cur.alive });
    const alive = S.players.filter(p => p.alive);
    if (alive.length <= (S.players.length > 1 ? 1 : 0)) { S.ph = 'over'; S.winner = alive[0] ? alive[0].id : (S.players.length === 1 ? S.players[0].id : null); S.turn = null; hostCommit(); hostEv({ k: 'over', winner: S.winner }); return; }
    hostNextTurn(cur && cur.alive ? nextAlive(cur.id) : nextAlive(S.turn));
  }, 100);
}

// ================================================================== client
function applyState(s) {
  if (!s || s.v <= G.seenV && !(G.H && s === G.H.st)) return;
  const prevTurn = G.st && G.st.turn, prevPh = G.st && G.st.ph; G.seenV = s.v;
  G.st = JSON.parse(JSON.stringify(s));
  if (G.st.turn !== prevTurn) { G.typing[G.st.turn] = ''; if (G.st.turn === myId) { A.turn(); setTimeout(() => $('word').focus(), 30); $('word').value = ''; } }
  if (prevPh !== 'play' && G.st.ph === 'play') { G.typing = {}; }
  render();
}
function onEvent(m) {
  const el = m.id ? document.querySelector(`.seat[data-id="${m.id}"]`) : null;
  switch (m.k) {
    case 'start': sys('New game! Type a word containing the letters on the bomb.'); A.turn(); break;
    case 'ok': A.ok(); if (m.life) { A.life(); toast(`${nameOf(m.id)} used every bonus letter: +1 ❤️`); } flashWord(m.id, m.w, 'good'); if (m.id === myId) $('word').value = ''; break;
    case 'bad': if (m.id === myId) { A.bad(); $('wordBox').classList.add('shake'); setTimeout(() => $('wordBox').classList.remove('shake'), 400); $('hint').textContent = m.why; $('hint').className = 'bad'; } if (el) { el.classList.add('wrong'); setTimeout(() => el.classList.remove('wrong'), 450); } break;
    case 'boom': A.boom(); $('bomb').classList.add('boom'); setTimeout(() => $('bomb').classList.remove('boom'), 700); if (el) { el.classList.add('hit'); setTimeout(() => el.classList.remove('hit'), 900); } sys(`💥 ${nameOf(m.id)} ${m.dead ? 'is out!' : 'lost a life.'} (${m.prompt.toUpperCase()}${exampleFor(m.prompt)})`); break;
    case 'over': if (m.winner === myId || !m.winner) A.win(); else A.ok(); sys(m.winner ? `🏆 ${nameOf(m.winner)} wins!` : 'Game over.'); break;
  }
}
function exampleFor(p) { if (!WORDS) return ''; let best = null; for (const w of WORDS) { if (w.length > 5 && w.length < 10 && w.includes(p)) { best = w; if (Math.random() < 0.02) break; } } return best ? ' — e.g. ' + best.toUpperCase() : ''; }
function flashWord(id, w, cls) { const el = document.querySelector(`.seat[data-id="${id}"] .typed`); if (el) { el.innerHTML = hl(w, G.st && G.st.prompt); el.className = 'typed ' + cls; setTimeout(() => { el.className = 'typed'; }, 900); } }
function hl(word, prompt) { const w = esc(word.toUpperCase()); if (!prompt) return w; const P2 = prompt.toUpperCase(), i = w.indexOf(P2); return i < 0 ? w : w.slice(0, i) + '<em>' + P2 + '</em>' + w.slice(i + P2.length); }
// typing: sent straight to everyone, cheap and unreliable
let tySent = '', tyT = 0;
$('word').oninput = () => {
  const v = $('word').value.toLowerCase().replace(/[^a-z]/g, '').slice(0, 30); if ($('word').value !== v) $('word').value = v;
  A.key(); G.typing[myId] = v; renderTyping(myId); $('hint').textContent = ''; $('hint').className = '';
  const t = now(); if (v !== tySent && t - tyT > 60) { tySent = v; tyT = t; mesh.sendAll({ t: 'ty', text: v }, false); }
};
$('word').onkeydown = e => { if (e.key === 'Enter') { const w = $('word').value.trim(); if (w && G.st && G.st.turn === myId) mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'word', w }); mesh.sendAll({ t: 'ty', text: w }, true); } };
$('bJoinGame').onclick = () => { A.init(); mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'join', name: P.name, emoji: P.emoji }); };
$('bLeaveSeat').onclick = () => mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'leaveSeat' });
$('bStart').onclick = () => mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'start' });
for (const id of ['sLives', 'sDiff', 'sTurn']) $(id).onchange = () => mesh.sendTo(mesh.hostId(), { t: 'rq', k: 'settings', s: { lives: +$('sLives').value, maxLives: Math.max(3, +$('sLives').value), diff: $('sDiff').value, minTurn: +$('sTurn').value } });

// ================================================================== render
function render() {
  if (G.phase !== 'room') return;
  const S = G.st, ps = mesh.players();
  $('pcount').textContent = `${ps.length} in room`;
  renderVoice();
  if (!S) return;
  const me = seat(myId), host = isHost(), play = S.ph === 'play';
  // controls
  $('bJoinGame').classList.toggle('hidden', play || !!me || S.players.length >= MAX_PLAYERS);
  $('bLeaveSeat').classList.toggle('hidden', play || !me);
  $('bStart').classList.toggle('hidden', !host || play);
  $('bStart').disabled = !S.players.length;
  $('bStart').textContent = S.players.length === 1 ? 'Start (practice)' : S.ph === 'over' ? 'Play again' : 'Start game';
  $('hostSet').classList.toggle('hidden', !host || play);
  $('sLives').value = S.settings.lives; $('sDiff').value = S.settings.diff; $('sTurn').value = S.settings.minTurn;
  $('status').innerHTML = play ? '' : S.ph === 'over' ? (S.winner ? `🏆 <b>${esc(nameOf(S.winner))}</b> wins!` : 'Game over') : S.players.length ? (host ? 'Press start when everyone has joined.' : 'Waiting for the host to start…') : 'Join the game to grab a seat!';
  // seats around the bomb
  const n = S.players.length, R = n <= 4 ? 38 : n <= 8 ? 41 : 43;
  $('seats').innerHTML = S.players.map((p, i) => {
    const a = -Math.PI / 2 + (i / Math.max(1, n)) * Math.PI * 2, x = 50 + Math.cos(a) * R, y = 50 + Math.sin(a) * (R * 0.92);
    const hearts = play || S.ph === 'over' ? '<span class="lives">' + '❤️'.repeat(Math.max(0, p.lives)) + (p.alive || !play ? '' : '💀') + '</span>' : '';
    return `<div class="seat ${S.turn === p.id ? 'cur' : ''} ${play && !p.alive ? 'dead' : ''} ${S.winner === p.id ? 'win' : ''} ${p.conn === false ? 'gone' : ''}" data-id="${p.id}" style="left:${x}%;top:${y}%;--c:${p.color}">
      <div class="av">${p.emoji}</div><div class="nm">${esc(p.name)}${p.id === myId ? ' <i>(you)</i>' : ''}</div>${hearts}<div class="typed">${hl(G.typing[p.id] || '', S.prompt)}</div></div>`;
  }).join('');
  // bomb + arrow
  $('prompt').textContent = play ? S.prompt.toUpperCase() : S.ph === 'over' ? '🏆' : '…';
  const ti = S.players.findIndex(p => p.id === S.turn);
  $('arrow').style.opacity = play && ti >= 0 ? 1 : 0;
  if (ti >= 0) $('arrow').style.transform = `rotate(${(ti / n) * 360}deg)`;
  $('bomb').classList.toggle('lit', play);
  // my input + bonus letters
  const myTurn = play && S.turn === myId;
  $('wordBox').classList.toggle('mine', myTurn); $('word').disabled = !myTurn;
  $('word').placeholder = !play ? '' : myTurn ? `Type a word containing ${S.prompt.toUpperCase()}…` : me && me.alive ? `${nameOf(S.turn)} is typing…` : 'Spectating';
  if (myTurn && document.activeElement !== $('word') && document.activeElement !== $('chatIn')) $('word').focus();
  $('letters').innerHTML = me && (play || S.ph === 'over') ? BONUS.split('').map(c => `<span class="${me.letters.includes(c) ? 'got' : ''}">${c.toUpperCase()}</span>`).join('') : '';
  $('used').textContent = play ? `${S.used.length} words used` : '';
  // scoreboard after a game
  $('results').classList.toggle('hidden', S.ph !== 'over');
  if (S.ph === 'over') $('results').innerHTML = `<h3>Round ${S.round} results</h3>` + S.players.slice().sort((a, b) => (b.alive - a.alive) || b.words - a.words).map(p => `<div><span style="color:${p.color}">${p.emoji} ${esc(p.name)}</span><span>${p.words} words${p.best ? ' · best: ' + p.best.toUpperCase() : ''}</span></div>`).join('');
  // room list w/ mute
  $('roster').innerHTML = ps.map(p => `<div class="rp"><span>${esc(p.name)}${p.id === mesh.hostId() ? ' 👑' : ''}${mesh.speaking(p.id) ? ' 🔊' : ''}</span>${p.id === myId ? '' : `<button data-m="${p.id}">${G.chatMuted.has(p.id) ? 'Unmute' : 'Mute'}</button>`}</div>`).join('');
  $('roster').querySelectorAll('[data-m]').forEach(b => b.onclick = () => { const id = b.dataset.m; if (G.chatMuted.has(id)) G.chatMuted.delete(id); else G.chatMuted.add(id); mesh.mute(id, G.chatMuted.has(id)); render(); });
}
function renderTyping(id) { const el = document.querySelector(`.seat[data-id="${id}"] .typed`); if (el && !el.classList.contains('good')) el.innerHTML = hl(G.typing[id] || '', G.st && G.st.prompt); }

// ticking + host promotion + voice loop
setInterval(() => {
  if (G.phase !== 'room' || !G.st) return;
  if (mesh && !G.H && isHost()) hostTakeover();
  if (mesh) { mesh.updateVoice({ x: 0, y: 0, z: 0 }, null); mesh.micLevel(); }
  if (G.st.ph === 'play') { G.tickT++; if (G.tickT % (G.st.turn === myId ? 4 : 6) === 0) A.tick(G.st.turn === myId); }
}, 100);
setInterval(() => { if (G.phase === 'room') render(); }, 1000);
if (LOCAL || Q.has('debug')) window.__j = { G, mesh: () => mesh, myId };
