// The Back Room 3D: who's on the floor. Supabase Realtime presence (who is here, what they look like, what they're playing)
// + broadcast (positions ~10×/s, emotes, big-win fireworks). Shared by every copy of the casino, like the chat.
const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';

export function createNet({ onJoin, onLeave, onMeta, onPos, onFx, onStatus }) {
  const id = (() => { try { let v = sessionStorage.getItem('br3d-id'); if (!v) { v = Math.random().toString(36).slice(2, 10); sessionStorage.setItem('br3d-id', v); } return v; } catch (e) { return Math.random().toString(36).slice(2, 10); } })();
  let ch = null, sb = null, meta = null, ready = false, known = new Map(), lastSent = 0, last = null, room = 'backroom-floor';

  function connect() {
    if (!window.supabase || !window.supabase.createClient) { onStatus && onStatus('offline'); return setTimeout(connect, 2500); }
    sb = sb || window.supabase.createClient(API, PK, { auth: { persistSession: false, autoRefreshToken: false }, realtime: { params: { eventsPerSecond: 20 } } });
    ch = sb.channel(room, { config: { broadcast: { self: false, ack: false }, presence: { key: id } } });
    ch.on('broadcast', { event: 'p' }, ({ payload: p }) => { if (p && p.i !== id) onPos(p); });
    ch.on('broadcast', { event: 'fx' }, ({ payload: p }) => { if (p && p.i !== id) onFx(p); });
    ch.on('presence', { event: 'sync' }, () => {
      const st = ch.presenceState(), now = new Map();
      for (const k in st) { const m = st[k] && st[k][0]; if (m && m.i && m.i !== id) now.set(m.i, m); }
      for (const [k, m] of now) { const old = known.get(k); if (!old) onJoin(m); else if (JSON.stringify(old) !== JSON.stringify(m)) onMeta(m); }
      for (const k of known.keys()) if (!now.has(k)) onLeave(k);
      known = now; onStatus && onStatus('live', known.size + 1);
    });
    ch.subscribe(async s => {
      if (s === 'SUBSCRIBED') { ready = true; onStatus && onStatus('live', known.size + 1); if (meta) await ch.track(meta).catch(() => {}); if (last) sendPos(last, true); }
      else if (s === 'CHANNEL_ERROR' || s === 'TIMED_OUT' || s === 'CLOSED') { ready = false; onStatus && onStatus('offline'); }
    });
  }
  function setMeta(m) {
    const nm = { i: id, ...m }; if (meta && JSON.stringify(meta) === JSON.stringify(nm)) return; meta = nm;
    if (ready && ch) ch.track(meta).catch(() => {});
  }
  const r2 = v => Math.round(v * 100) / 100;
  /** position packet; skips if nothing changed and we sent recently */
  function sendPos(p, force) {
    last = p; if (!ready || !ch) return; const now = performance.now();
    const pk = { i: id, x: r2(p.x), z: r2(p.z), y: r2(p.y || 0), r: r2(p.yaw), s: r2(p.speed || 0), e: p.emote || 0, g: p.game || 0, st: p.seat ?? -1 };
    const same = pk.x === sendPos.px && pk.z === sendPos.pz && pk.r === sendPos.pr && pk.e === sendPos.pe && pk.y === sendPos.py && pk.g === sendPos.pg;
    if (!force && ((same && now - lastSent < 1500) || now - lastSent < 90)) return;
    sendPos.px = pk.x; sendPos.pz = pk.z; sendPos.pr = pk.r; sendPos.pe = pk.e; sendPos.py = pk.y; sendPos.pg = pk.g; lastSent = now;
    ch.send({ type: 'broadcast', event: 'p', payload: pk }).catch(() => {});
  }
  function fx(payload) { if (ready && ch) ch.send({ type: 'broadcast', event: 'fx', payload: { i: id, ...payload } }).catch(() => {}); }
  connect();
  addEventListener('pagehide', () => { try { ch && ch.untrack(); } catch (e) {} });
  return { id, setMeta, sendPos, fx, get count() { return known.size + 1; }, get ready() { return ready; } };
}
