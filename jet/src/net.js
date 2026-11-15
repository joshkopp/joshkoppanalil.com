// JK Strike multiplayer transport.
// Supabase Realtime is only used for presence (who's in the room) and WebRTC signalling.
// Game traffic goes peer-to-peer over WebRTC data channels (one reliable, one unreliable),
// so a match never gets near Supabase's free-tier message limits.
const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
const ICE = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }, { urls: 'stun:stun.cloudflare.com:3478' }];
export const MAX_PLAYERS = 8;
export const newCode = () => String(1000 + Math.floor(Math.random() * 9000));

class Emitter {
  constructor() { this.h = {}; }
  on(t, fn) { (this.h[t] = this.h[t] || []).push(fn); }
  emit(t, ...a) { (this.h[t] || []).forEach(f => { try { f(...a); } catch (e) { console.error(e); } }); }
}

class SupaSignal {
  constructor() {
    if (!window.supabase || !window.supabase.createClient) throw new Error('Could not load the multiplayer library. Check your connection and reload.');
    this.sb = window.supabase.createClient(API, PK, { auth: { persistSession: false, autoRefreshToken: false }, realtime: { params: { eventsPerSecond: 20 } } });
  }
  async open(code, key, onMsg, onPresence) {
    const ch = this.sb.channel('jkstrike-' + code, { config: { broadcast: { self: false, ack: false }, presence: { key } } });
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
// BroadcastChannel stand-in for testing several tabs on one machine (?local)
class LocalSignal {
  async open(code, key, onMsg, onPresence) {
    this.bc = new BroadcastChannel('jkstrike-' + code); this.peers = new Map(); this.onPresence = onPresence;
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

export class Net extends Emitter {
  constructor(local) {
    super();
    this.local = local; this.sig = local ? new LocalSignal() : new SupaSignal();
    this.peers = new Map(); this.list = []; this.meta = null; this.code = null; this.fbT = {};
    this.timer = setInterval(() => this._maintain(), 2000);
  }
  get id() { return this.myId; }
  async join(code, me, mode) {
    await this.leave();
    this.code = code; this.myId = me.id;
    const st = await this.sig.open(code, me.id, p => this._sig(p), list => this._presence(list));
    if (st !== 'ok') return { ok: false, err: 'Could not reach the game server (' + String(st).toLowerCase().replace('_', ' ') + ').' };
    const others = this.list.filter(p => p.id !== me.id);
    if (mode === 'create' && others.length) { await this.leave(); return { ok: false, err: 'taken' }; }
    if (mode === 'join' && !others.length) { await this.leave(); return { ok: false, err: 'Room not found. Check the code.' }; }
    if (others.length >= MAX_PLAYERS) { await this.leave(); return { ok: false, err: `Room is full (${MAX_PLAYERS} pilots).` }; }
    this.meta = { ...me, joined: Date.now() };
    await this.sig.track(this.meta);
    return { ok: true };
  }
  _presence(list) {
    const out = list.slice().sort((a, b) => a.joined - b.joined || (a.id < b.id ? -1 : 1));
    const before = new Set(this.list.map(p => p.id));
    this.list = out;
    const now = new Set(out.map(p => p.id));
    for (const id of before) if (!now.has(id)) { this._drop(id); this.emit('left', id); }
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
  sendTo(id, msg, reliable = true) {
    if (id === this.myId) { this.emit(msg.t, msg, this.myId); return; }
    const p = this.peers.get(id), dc = p && (reliable ? p.r : p.u);
    if (dc && dc.readyState === 'open') { try { dc.send(JSON.stringify(msg)); return; } catch (e) {} }
    if (!reliable) { const k = id + msg.t, t = performance.now(); if (t - (this.fbT[k] || 0) < 400) return; this.fbT[k] = t; }
    this.sig.send({ t: 'relay', to: id, from: this.myId, m: msg });
  }
  sendAll(msg, reliable = true) { for (const p of this.list) if (p.id !== this.myId) this.sendTo(p.id, msg, reliable); }
  linked(id) { const p = this.peers.get(id); return !!(p && p.r && p.r.readyState === 'open'); }
  _recv(from, m) { if (m && m.t) this.emit(m.t, m, from); }
  _sig(p) {
    if (!this.myId) return;
    if (p.t === 'relay') { if (p.to === this.myId) this._recv(p.from, p.m); return; }
    if (p.t === 'rtc' && p.to === this.myId) this._rtc(p).catch(e => console.warn('rtc', e));
  }
  _maintain() {
    if (!this.meta) return;
    const ids = this.list.map(p => p.id);
    for (const id of ids) if (id !== this.myId && !this.peers.has(id) && this.myId < id) this._connect(id);
    for (const [id, p] of [...this.peers]) if (!ids.includes(id) || (p.pc.connectionState !== 'connected' && Date.now() - p.t0 > 20000)) this._drop(id);
  }
  _make(id) {
    const pc = new RTCPeerConnection({ iceServers: ICE });
    const p = { id, pc, t0: Date.now(), cand: [] };
    p.r = pc.createDataChannel('r', { negotiated: true, id: 0, ordered: true });
    p.u = pc.createDataChannel('u', { negotiated: true, id: 1, ordered: false, maxRetransmits: 0 });
    for (const dc of [p.r, p.u]) dc.onmessage = e => { try { this._recv(id, JSON.parse(e.data)); } catch (er) {} };
    p.r.onopen = () => this.emit('link', id);
    pc.onicecandidate = e => { if (e.candidate) this.sig.send({ t: 'rtc', to: id, from: this.myId, k: 'ice', d: e.candidate.toJSON() }); };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') this._drop(id); };
    this.peers.set(id, p); return p;
  }
  async _connect(id) {
    const p = this._make(id);
    await p.pc.setLocalDescription(await p.pc.createOffer());
    this.sig.send({ t: 'rtc', to: id, from: this.myId, k: 'offer', d: p.pc.localDescription.toJSON() });
  }
  async _rtc(m) {
    let p = this.peers.get(m.from);
    if (m.k === 'offer') {
      if (p) this._drop(m.from);
      p = this._make(m.from);
      await p.pc.setRemoteDescription(m.d);
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
  _drop(id) { const p = this.peers.get(id); if (!p) return; try { p.pc.close(); } catch (e) {} this.peers.delete(id); }
}
