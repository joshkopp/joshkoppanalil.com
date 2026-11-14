// JKML — room transport.
// Supabase Realtime is only used for presence (who's in the room), WebRTC signalling and a
// low-rate fallback. All game traffic and voice go peer-to-peer over WebRTC, which keeps the
// project far under Supabase's free-tier message limits even with 12 players.
const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
const ICE = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }, { urls: 'stun:stun.cloudflare.com:3478' }];
export const MAX_PLAYERS = 16;
export const newCode = () => Array.from({ length: 4 }, () => 'ABCDEFGHJKLMNPQRSTUVWXYZ'[Math.floor(Math.random() * 24)]).join('');

class Emitter {
  constructor() { this.h = {}; }
  on(t, fn) { (this.h[t] = this.h[t] || []).push(fn); }
  emit(t, ...a) { (this.h[t] || []).forEach(f => { try { f(...a); } catch (e) { console.error(e); } }); }
}

// ------------------------------------------------------------------ signalling backends
class SupaSignal {
  constructor() {
    if (!window.supabase || !window.supabase.createClient) throw new Error('Could not load the multiplayer library. Check your connection and reload.');
    this.sb = window.supabase.createClient(API, PK, { auth: { persistSession: false, autoRefreshToken: false }, realtime: { params: { eventsPerSecond: 20 } } });
  }
  async open(code, key, onMsg, onPresence) {
    const ch = this.sb.channel('jkml-' + code, { config: { broadcast: { self: false, ack: false }, presence: { key } } });
    this.ch = ch;
    let first, synced = new Promise(r => (first = r));
    ch.on('broadcast', { event: 'm' }, ({ payload }) => payload && onMsg(payload));
    ch.on('presence', { event: 'sync' }, () => { const st = ch.presenceState(), out = []; for (const k in st) { const m = st[k] && st[k][0]; if (m && m.id) out.push(m); } onPresence(out); first(); });
    const status = await new Promise(res => { const to = setTimeout(() => res('TIMED_OUT'), 9000); ch.subscribe(s => { if (['SUBSCRIBED', 'CHANNEL_ERROR', 'TIMED_OUT', 'CLOSED'].includes(s)) { clearTimeout(to); res(s); } }); });
    if (status !== 'SUBSCRIBED') { await this.close(); return status; }
    await Promise.race([synced, new Promise(r => setTimeout(r, 2500))]);
    return 'ok';
  }
  track(meta) { return this.ch ? this.ch.track(meta).catch(() => {}) : null; }
  send(p) { if (this.ch) this.ch.send({ type: 'broadcast', event: 'm', payload: p }).catch(() => {}); }
  async close() { const ch = this.ch; this.ch = null; if (ch) { try { await ch.untrack(); } catch (e) {} try { await this.sb.removeChannel(ch); } catch (e) {} } }
}
// BroadcastChannel stand-in for testing several tabs locally (?local)
class LocalSignal {
  async open(code, key, onMsg, onPresence) {
    this.bc = new BroadcastChannel('jkml-' + code); this.peers = new Map(); this.onPresence = onPresence;
    this.bc.onmessage = e => { const d = e.data;
      if (d.hello && this.meta) this.bc.postMessage({ pres: this.meta });
      else if (d.pres) { this.peers.set(d.pres.id, { m: d.pres, t: Date.now() }); this._re(); }
      else if (d.bye) { this.peers.delete(d.bye); this._re(); }
      else onMsg(d); };
    this.bc.postMessage({ hello: 1 }); await new Promise(r => setTimeout(r, 500)); this._re();
    this.beat = setInterval(() => { if (this.meta) this.bc.postMessage({ pres: this.meta }); const t = Date.now(); for (const [id, p] of this.peers) if (t - p.t > 3500) this.peers.delete(id); this._re(); }, 1000);
    return 'ok';
  }
  _re() { this.onPresence([...(this.meta ? [this.meta] : []), ...[...this.peers.values()].map(p => p.m)]); }
  track(meta) { this.meta = { ...meta }; this.bc.postMessage({ pres: this.meta }); this._re(); }
  send(p) { if (this.bc) this.bc.postMessage(p); }
  async close() { if (!this.bc) return; clearInterval(this.beat); if (this.meta) this.bc.postMessage({ bye: this.meta.id }); this.bc.close(); this.bc = null; this.meta = null; }
}

// ------------------------------------------------------------------ the mesh
export class Mesh extends Emitter {
  constructor(audio, local) {
    super();
    this.audio = audio; this.sig = local ? new LocalSignal() : new SupaSignal();
    this.peers = new Map(); this.list = []; this.meta = null; this.code = null;
    this.mic = null; this.micOn = false; this.micMuted = false; this.ptt = false; this.pttDown = false; this.deaf = false; this.level = 0;
    this.muted = new Set(); this.fbT = {};
    this.timer = setInterval(() => this._maintain(), 3000);
  }
  get id() { return this.meta && this.meta.id; }
  // mode 'create' | 'join'. Joining a game in progress is allowed (spectate / reconnect).
  async join(code, me, mode) {
    await this.leave();
    this.code = code; this.myId = me.id;
    const st = await this.sig.open(code, me.id, p => this._sig(p), list => this._presence(list));
    if (st !== 'ok') return { ok: false, err: 'Could not reach the game server (' + String(st).toLowerCase().replace('_', ' ') + ').' };
    const others = this.list.filter(p => p.id !== me.id);
    if (mode === 'create' && others.length) { await this.leave(); return { ok: false, err: 'taken' }; }
    if (mode === 'join' && !others.length) { await this.leave(); return { ok: false, err: 'Room not found. Check the code.' }; }
    if (others.length >= MAX_PLAYERS) { await this.leave(); return { ok: false, err: 'Room is full (16 players).' }; }
    const prev = others.length ? null : null;
    this.meta = { id: me.id, name: me.name, ready: false, joined: me.joined || Date.now() };
    await this.sig.track(this.meta);
    return { ok: true };
  }
  _presence(list) {
    const out = list.slice().sort((a, b) => a.joined - b.joined || (a.id < b.id ? -1 : 1));
    const before = new Set(this.list.map(p => p.id));
    this.list = out;
    const now = new Set(out.map(p => p.id));
    for (const id of before) if (!now.has(id)) this.emit('left', id);
    for (const id of now) if (!before.has(id) && id !== this.myId) this.emit('joined', id);
    this._maintain();
    this.emit('presence', out);
  }
  players() { return this.list; }
  hostId() { return this.list.length ? this.list[0].id : this.myId; }
  isHost() { return this.hostId() === this.myId; }
  setMeta(f) { if (!this.meta) return; Object.assign(this.meta, f); this.sig.track(this.meta); }
  async leave() {
    for (const id of [...this.peers.keys()]) this._drop(id);
    await this.sig.close(); this.meta = null; this.list = []; this.code = null;
  }

  // ---------------- messaging
  // reliable: ordered data channel (falls back to Supabase relay if the peer link is down)
  // unreliable: unordered, no retransmits (positions); fallback is rate-limited
  sendTo(id, msg, reliable = true) {
    if (id === this.myId) { this.emit(msg.t, msg, this.myId); return; }
    const p = this.peers.get(id), dc = p && (reliable ? p.r : p.u);
    if (dc && dc.readyState === 'open') { try { dc.send(JSON.stringify(msg)); return; } catch (e) {} }
    if (!reliable) { const k = id + msg.t, t = performance.now(); if (t - (this.fbT[k] || 0) < 333) return; this.fbT[k] = t; }
    this.sig.send({ t: 'relay', to: id, from: this.myId, m: msg });
  }
  sendAll(msg, reliable = true) { for (const p of this.list) if (p.id !== this.myId) this.sendTo(p.id, msg, reliable); }
  linked(id) { const p = this.peers.get(id); return !!(p && p.r && p.r.readyState === 'open'); }
  _recv(from, m) { if (m && m.t) this.emit(m.t, m, from); }
  _sig(p) {
    if (!this.myId) return;
    if (p.t === 'relay') { if (p.to === this.myId || p.to === '*') this._recv(p.from, p.m); return; }
    if (p.t === 'rtc' && p.to === this.myId) this._rtc(p).catch(e => console.warn('rtc', e));
  }

  // ---------------- peer connections (data + voice)
  _maintain() {
    if (!this.meta || !this.audio.ctx) return;
    const ids = this.list.map(p => p.id);
    for (const id of ids) if (id !== this.myId && !this.peers.has(id) && this.myId < id) this._connect(id);
    for (const [id, p] of [...this.peers]) if (!ids.includes(id) || (p.pc.connectionState !== 'connected' && Date.now() - p.t0 > 20000)) this._drop(id);
  }
  silentTrack() {
    if (!this._silent) { const c = this.audio.ctx, d = c.createMediaStreamDestination(), o = c.createConstantSource(); o.offset.value = 0; o.connect(d); o.start(); this._silent = d.stream.getAudioTracks()[0]; }
    return this._silent;
  }
  outTrack() { return this.mic && this.micOn ? this.mic.getAudioTracks()[0] : this.silentTrack(); }
  _make(id) {
    const pc = new RTCPeerConnection({ iceServers: ICE }), c = this.audio.ctx;
    const p = { id, pc, t0: Date.now(), cand: [], gain: c.createGain(), lp: c.createBiquadFilter(), pan: c.createPanner(), an: c.createAnalyser(), lvl: 0 };
    p.r = pc.createDataChannel('r', { negotiated: true, id: 0, ordered: true });
    p.u = pc.createDataChannel('u', { negotiated: true, id: 1, ordered: false, maxRetransmits: 0 });
    for (const dc of [p.r, p.u]) dc.onmessage = e => { try { this._recv(id, JSON.parse(e.data)); } catch (er) {} };
    p.r.onopen = () => this.emit('link', id);
    p.lp.type = 'lowpass'; p.lp.frequency.value = 9000;
    p.pan.panningModel = 'HRTF'; p.pan.distanceModel = 'linear'; p.pan.refDistance = 1; p.pan.maxDistance = 1e4; p.pan.rolloffFactor = 0;
    p.an.fftSize = 256; p.buf = new Float32Array(256);
    p.gain.connect(p.lp); p.lp.connect(p.pan); p.pan.connect(this.audio.voice);
    pc.onicecandidate = e => { if (e.candidate) this.sig.send({ t: 'rtc', to: id, from: this.myId, k: 'ice', d: e.candidate.toJSON() }); };
    pc.ontrack = e => {
      const stream = e.streams[0] || new MediaStream([e.track]);
      const el = new Audio(); el.muted = true; el.srcObject = stream; el.play().catch(() => {}); p.el = el; // Chrome needs this to feed WebAudio
      const src = c.createMediaStreamSource(stream); src.connect(p.gain); src.connect(p.an);
    };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') this._drop(id); };
    this.peers.set(id, p); return p;
  }
  async _connect(id) {
    const p = this._make(id);
    p.sender = p.pc.addTrack(this.outTrack(), new MediaStream());
    await p.pc.setLocalDescription(await p.pc.createOffer());
    this.sig.send({ t: 'rtc', to: id, from: this.myId, k: 'offer', d: p.pc.localDescription.toJSON() });
  }
  async _rtc(m) {
    let p = this.peers.get(m.from);
    if (m.k === 'offer') {
      if (p) this._drop(m.from);
      if (!this.audio.ctx) return;
      p = this._make(m.from);
      await p.pc.setRemoteDescription(m.d);
      p.sender = p.pc.addTrack(this.outTrack(), new MediaStream());
      await p.pc.setLocalDescription(await p.pc.createAnswer());
      this.sig.send({ t: 'rtc', to: m.from, from: this.myId, k: 'answer', d: p.pc.localDescription.toJSON() });
      for (const c of p.cand) await p.pc.addIceCandidate(c).catch(() => {}); p.cand = [];
    } else if (m.k === 'answer' && p) {
      await p.pc.setRemoteDescription(m.d);
      for (const c of p.cand) await p.pc.addIceCandidate(c).catch(() => {}); p.cand = [];
    } else if (m.k === 'ice' && p) {
      if (p.pc.remoteDescription) await p.pc.addIceCandidate(m.d).catch(() => {}); else p.cand.push(m.d);
    }
  }
  _drop(id) { const p = this.peers.get(id); if (!p) return; try { p.pc.close(); } catch (e) {} if (p.el) p.el.remove(); try { p.gain.disconnect(); } catch (e) {} this.peers.delete(id); }

  // ---------------- voice
  async enableMic() {
    if (!this.mic) {
      this.mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      const src = this.audio.ctx.createMediaStreamSource(this.mic); this.an = this.audio.ctx.createAnalyser(); this.an.fftSize = 512; src.connect(this.an); this.buf = new Float32Array(512);
    }
    this.micOn = true; this._gate(); this._swap();
  }
  disableMic() { this.micOn = false; this._swap(); }
  setMicMuted(v) { this.micMuted = v; this._gate(); }
  setPTT(v) { this.ptt = v; this._gate(); }
  setTalking(v) { this.pttDown = v; this._gate(); }
  setDeaf(v) { this.deaf = v; }
  mute(id, v) { if (v) this.muted.add(id); else this.muted.delete(id); }
  transmitting() { return !!(this.mic && this.micOn && !this.micMuted && (!this.ptt || this.pttDown)); }
  _gate() { if (this.mic) this.mic.getAudioTracks()[0].enabled = this.transmitting(); }
  _swap() { for (const p of this.peers.values()) if (p.sender) p.sender.replaceTrack(this.outTrack()).catch(() => {}); }
  micLevel() {
    if (!this.an || !this.transmitting()) return (this.level = 0);
    this.an.getFloatTimeDomainData(this.buf); let s = 0; for (const v of this.buf) s += v * v;
    return (this.level = Math.sqrt(s / this.buf.length));
  }
  // positions: id -> {x,y,z,muffled,gain}; null = everyone at full volume (lobby)
  updateVoice(listener, positions) {
    const t = this.audio.now;
    for (const [id, p] of this.peers) {
      let g = 1, lp = 9000, pos = listener;
      if (positions) {
        const q = positions[id];
        if (!q) g = 0;
        else {
          const d = Math.hypot(q.x - listener.x, q.y - listener.y, q.z - listener.z);
          g = Math.max(0, Math.min(1, 1 - (d - 2.5) / 24)); g = g * g * (q.gain == null ? 1 : q.gain);
          if (q.muffled) { g *= 0.5; lp = 800; }
          pos = q;
        }
      }
      if (this.deaf || this.muted.has(id)) g = 0;
      p.gain.gain.setTargetAtTime(g, t, 0.08); p.lp.frequency.setTargetAtTime(lp, t, 0.1);
      if (p.pan.positionX) { p.pan.positionX.value = pos.x; p.pan.positionY.value = pos.y; p.pan.positionZ.value = pos.z; }
      p.an.getFloatTimeDomainData(p.buf); let s = 0; for (const v of p.buf) s += v * v; p.lvl = Math.sqrt(s / p.buf.length);
    }
  }
  speaking(id) { if (id === this.myId) return this.level > 0.02; const p = this.peers.get(id); return p ? p.lvl > 0.02 : false; }
}
