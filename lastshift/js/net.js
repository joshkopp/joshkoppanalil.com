// THE LAST SHIFT — rooms over Supabase Realtime (presence = who's here, broadcast = game traffic).
const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
const ALPHA = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const newCode = () => Array.from({ length: 6 }, () => ALPHA[Math.floor(Math.random() * ALPHA.length)]).join('');
export const MAX_PLAYERS = 4;

export class Net {
  constructor() {
    if (!window.supabase || !window.supabase.createClient) throw new Error('Could not load the multiplayer library. Check your connection and reload.');
    this.sb = window.supabase.createClient(API, PK, { auth: { persistSession: false, autoRefreshToken: false }, realtime: { params: { eventsPerSecond: 40 } } });
    this.h = {}; this.ch = null; this.meta = null; this.list = [];
  }
  on(t, fn) { (this.h[t] = this.h[t] || []).push(fn); }
  emit(t, ...a) { (this.h[t] || []).forEach(f => f(...a)); }

  // mode 'create' | 'join'. Resolves {ok} or {ok:false, err}
  async join(code, me, mode) {
    await this.leave();
    const ch = this.sb.channel('lastshift-' + code, { config: { broadcast: { self: false, ack: false }, presence: { key: me.id } } });
    this.ch = ch; this.code = code;
    let firstSync, synced = new Promise(r => (firstSync = r));
    ch.on('broadcast', { event: 'm' }, ({ payload }) => { if (!payload || !payload.t) return; if (payload._to && !payload._to.includes(me.id)) return; this.emit(payload.t, payload); });
    ch.on('presence', { event: 'sync' }, () => { this._read(); firstSync(); this.emit('presence', this.list); });
    ch.on('presence', { event: 'leave' }, ({ key }) => this.emit('left', key));
    const status = await new Promise(res => {
      const to = setTimeout(() => res('TIMED_OUT'), 9000);
      ch.subscribe(s => { if (s === 'SUBSCRIBED' || s === 'CHANNEL_ERROR' || s === 'TIMED_OUT' || s === 'CLOSED') { clearTimeout(to); res(s); } });
    });
    if (status !== 'SUBSCRIBED') { await this.leave(); return { ok: false, err: 'Could not reach the game server (' + status.toLowerCase().replace('_', ' ') + ').' }; }
    await Promise.race([synced, new Promise(r => setTimeout(r, 2500))]);
    const others = this.list.filter(p => p.id !== me.id);
    if (mode === 'create' && others.length) { await this.leave(); return { ok: false, err: 'taken' }; }
    if (mode === 'join') {
      if (!others.length) { await this.leave(); return { ok: false, err: 'Room not found. Check the code.' }; }
      if (others.some(p => p.phase !== 'lobby')) { await this.leave(); return { ok: false, err: 'That game has already started.' }; }
      if (others.length >= MAX_PLAYERS) { await this.leave(); return { ok: false, err: 'Room is full (4 players).' }; }
    }
    this.meta = { id: me.id, name: me.name, color: me.color, ready: false, phase: 'lobby', joined: Date.now() };
    await ch.track(this.meta);
    return { ok: true };
  }
  _read() {
    if (!this.ch) return;
    const st = this.ch.presenceState(), out = [];
    for (const k in st) { const m = st[k] && st[k][0]; if (m && m.id) out.push(m); }
    out.sort((a, b) => a.joined - b.joined || (a.id < b.id ? -1 : 1));
    this.list = out;
  }
  players() { return this.list; }
  hostId() { return this.list.length ? this.list[0].id : this.meta && this.meta.id; }
  async update(fields) { if (!this.ch || !this.meta) return; Object.assign(this.meta, fields); try { await this.ch.track(this.meta); } catch (e) {} }
  // Game traffic goes peer-to-peer over the voice connections' data channels; Supabase only
  // carries WebRTC signalling and a fallback for peers whose direct link isn't up (free-tier
  // Realtime allows ~100 msgs/s and counts every recipient, which 4 players would exceed).
  send(payload) {
    const v = this.voice, me = this.meta && this.meta.id;
    if (v && me && payload.t !== 'rtc') {
      const reliable = payload.t !== 'p', miss = [];
      for (const p of this.list) if (p.id !== me && !v.sendDC(p.id, payload, reliable)) miss.push(p.id);
      if (!miss.length) return;
      if (!reliable) { const t = performance.now(); if (t - (this._fb || 0) < 330) return; this._fb = t; }
      payload = { ...payload, _to: miss };
    }
    if (this.ch) this.ch.send({ type: 'broadcast', event: 'm', payload }).catch(() => {});
  }
  async leave() {
    const ch = this.ch; this.ch = null; this.meta = null; this.list = [];
    if (ch) { try { await ch.untrack(); } catch (e) {} try { await this.sb.removeChannel(ch); } catch (e) {} }
  }
}

// Offline single-player stand-in, only used for local testing with ?offline
export class LocalNet {
  constructor() { this.h = {}; this.list = []; }
  on(t, fn) { (this.h[t] = this.h[t] || []).push(fn); }
  emit(t, ...a) { (this.h[t] || []).forEach(f => f(...a)); }
  async join(code, me) { this.code = code; this.meta = { id: me.id, name: me.name, color: me.color, ready: false, phase: 'lobby', joined: Date.now() }; this.list = [this.meta]; setTimeout(() => this.emit('presence', this.list), 0); return { ok: true }; }
  players() { return this.list; }
  hostId() { return this.meta.id; }
  async update(f) { Object.assign(this.meta, f); this.emit('presence', this.list); }
  send() {}
  async leave() { this.list = []; }
}

// Two-tab local transport over BroadcastChannel, only for local testing with ?bc
export class BCNet {
  constructor() { this.h = {}; this.list = []; this.peers = new Map(); }
  on(t, fn) { (this.h[t] = this.h[t] || []).push(fn); }
  emit(t, ...a) { (this.h[t] || []).forEach(f => f(...a)); }
  async join(code, me, mode) {
    this.bc = new BroadcastChannel('ls-' + code); this.me = me;
    this.bc.onmessage = e => { const d = e.data;
      if (d.hello && this.meta) this.bc.postMessage({ pres: this.meta });
      else if (d.pres) { this.peers.set(d.pres.id, { meta: d.pres, t: Date.now() }); this._re(); }
      else if (d.bye) { this.peers.delete(d.bye); this.emit('left', d.bye); this._re(); }
      else if (d.t) this.emit(d.t, d); };
    this.bc.postMessage({ hello: 1 }); await new Promise(r => setTimeout(r, 500));
    const others = [...this.peers.values()].map(p => p.meta);
    if (mode === 'create' && others.length) return { ok: false, err: 'taken' };
    if (mode === 'join' && !others.length) return { ok: false, err: 'Room not found. Check the code.' };
    this.meta = { id: me.id, name: me.name, ready: false, phase: 'lobby', joined: Date.now() };
    this.beat = setInterval(() => { this.bc.postMessage({ pres: this.meta }); const t = Date.now(); for (const [id, p] of this.peers) if (t - p.t > 3500) { this.peers.delete(id); this.emit('left', id); } this._re(); }, 1000);
    this.bc.postMessage({ pres: this.meta }); this._re(); return { ok: true };
  }
  _re() { const out = [...(this.meta ? [this.meta] : []), ...[...this.peers.values()].map(p => p.meta)]; out.sort((a, b) => a.joined - b.joined || (a.id < b.id ? -1 : 1)); this.list = out; this.emit('presence', out); }
  players() { return this.list; }
  hostId() { return this.list.length ? this.list[0].id : this.meta && this.meta.id; }
  async update(f) { Object.assign(this.meta, f); this.bc.postMessage({ pres: this.meta }); this._re(); }
  send(p) { if (this.bc) this.bc.postMessage(p); }
  async leave() { if (!this.bc) return; clearInterval(this.beat); this.bc.postMessage({ bye: this.meta && this.meta.id }); this.bc.close(); this.bc = null; this.meta = null; this.list = []; this.peers.clear(); }
}
