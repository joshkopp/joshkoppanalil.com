/* The Back Room: frozen chat + admin troll effects.
   Freeze state is one row everyone can read; trolls are rows only their target can see (RLS), picked up live or by polling. */
window.Fun = (() => {
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
  const q = s => document.querySelector(s), H = { apikey: PK };
  const KINDS = { fakewin: '💰 Fake big win', jumpscare: '👹 Jumpscare', fakeban: '🚫 Fake ban', fakebroke: '💸 Fake broke', flip: '🙃 Flip screen', shake: '🌋 Earthquake', spin: '🌀 Spin', glitch: '📺 Glitch', rain: '🪙 Coin storm' };

  /* ================================================= frozen chat */
  const pn = q('#chp'), fab = q('#chfab'), list = q('#chl');
  const ice = document.createElement('div'); ice.className = 'ice'; ice.setAttribute('aria-hidden', 'true');
  const crystal = (x, y, r, a) => `<g transform="translate(${x} ${y}) rotate(${a}) scale(${r})">${[0, 60, 120].map(d => `<g transform="rotate(${d})"><line x1="-10" y1="0" x2="10" y2="0"/><line x1="5" y1="0" x2="8" y2="-3"/><line x1="5" y1="0" x2="8" y2="3"/><line x1="-5" y1="0" x2="-8" y2="-3"/><line x1="-5" y1="0" x2="-8" y2="3"/></g>`).join('')}</g>`;
  let flakes = ''; for (let i = 0; i < 26; i++) flakes += crystal(Math.random() * 360, Math.random() * 760, .6 + Math.random() * 1.6, Math.random() * 60);
  let cracks = ''; for (let i = 0; i < 7; i++) { let x = 40 + Math.random() * 280, y = 60 + Math.random() * 600, d = `M${x} ${y}`; for (let k = 0; k < 5; k++) { x += (Math.random() - .5) * 90; y += (Math.random() - .5) * 90; d += ` L${x.toFixed(0)} ${y.toFixed(0)}`; } cracks += `<path d="${d}"/>`; }
  let icicles = ''; for (let x = 6; x < 360; x += 14 + Math.random() * 10) icicles += `<path d="M${x} 0 L${x + 5 + Math.random() * 5} 0 L${x + 4} ${14 + Math.random() * 34}Z"/>`;
  ice.innerHTML = `<svg class="icefx" viewBox="0 0 360 760" preserveAspectRatio="none"><g class="cr">${cracks}</g><g class="fl">${flakes}</g></svg>
    <svg class="icicles" viewBox="0 0 360 50" preserveAspectRatio="none">${icicles}</svg>
    <div class="icesign"><div class="cube">🧊</div><b>CHAT FROZEN</b><span id="icewho"></span></div>`;
  pn.appendChild(ice);
  let frozen = null, by = '';
  function setFrozen(v, who, live) {
    if (v === frozen) return; const first = frozen === null; frozen = v; by = who || '';
    q('#icewho').textContent = by ? `by ${by}` : '';
    pn.classList.toggle('frozen', v); fab.classList.toggle('frozen', v); pn.classList.remove('thaw');
    if (!v && !first) { pn.classList.add('thaw'); setTimeout(() => pn.classList.remove('thaw'), 1400); }
    const inp = q('#chi'); inp.disabled = v && !Acct.admin; inp.placeholder = v ? (Acct.admin ? 'Frozen — only admins can talk' : 'Chat is frozen ❄') : (Acct.admin ? 'Message, or /help for admin commands' : 'Say something…');
    q('#chs').disabled = v && !Acct.admin;
    if (live && !first) { v ? sfxFreeze() : sfxThaw(); if (typeof toast === 'function') toast(v ? `❄ ${by || 'An admin'} froze the chat` : '☀ Chat thawed'); }
  }
  addEventListener('acct', () => { const f = frozen; frozen = null; if (f !== null) setFrozen(f, by, false); });
  async function check() { try { const r = await fetch(API + '/rest/v1/chat_state?select=frozen,frozen_by&id=eq.1', { headers: H }); const [s] = await r.json(); if (s) setFrozen(s.frozen, s.frozen_by, true); } catch (e) {} }

  /* ================================================= sounds (own context so trolls play even with game sound off) */
  let ac = null; const A = () => { try { ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume(); } catch (e) {} return ac; };
  addEventListener('pointerdown', A, { once: true }); addEventListener('keydown', A, { once: true });
  function noise(dur, vol, filt, f0, f1) { const a = A(); if (!a) return; const n = a.createBufferSource(), b = a.createBuffer(1, a.sampleRate * dur, a.sampleRate), d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    n.buffer = b; const f = a.createBiquadFilter(); f.type = filt; f.frequency.setValueAtTime(f0, a.currentTime); f.frequency.exponentialRampToValueAtTime(f1, a.currentTime + dur);
    const g = a.createGain(); g.gain.setValueAtTime(vol, a.currentTime); g.gain.exponentialRampToValueAtTime(.001, a.currentTime + dur); n.connect(f).connect(g).connect(a.destination); n.start(); }
  function osc(type, f0, f1, dur, vol, when = 0) { const a = A(); if (!a) return; const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + when; o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur); }
  const sfxFreeze = () => { noise(.9, .35, 'highpass', 6000, 1500); [2400, 3100, 2800, 3600].forEach((f, i) => osc('sine', f, f * .7, .25, .08, .1 + i * .09)); };
  const sfxThaw = () => { [600, 500, 420, 360, 300].forEach((f, i) => osc('sine', f, f * 1.6, .12, .08, i * .13)); };
  const scream = () => { noise(1.4, .9, 'bandpass', 2600, 700); osc('sawtooth', 900, 120, 1.2, .35); osc('square', 1300, 200, 1.1, .2); osc('sawtooth', 70, 40, 1.3, .5); };

  /* ================================================= troll effects */
  const layer = (cls, html, ms) => { const d = document.createElement('div'); d.className = 'trl ' + cls; d.innerHTML = html; document.body.appendChild(d); if (ms) setTimeout(() => d.remove(), ms); return d; };
  const bodyFx = (cls, ms) => { document.documentElement.classList.add(cls); setTimeout(() => document.documentElement.classList.remove(cls), ms); };
  const FX_ = {
    fakewin(amt) { const m = 120 + Math.floor(Math.random() * 380), a = Number(amt) || Math.round(Math.max(Bank.bal, 1000) * (40 + Math.random() * 200)); if (typeof bigWin === 'function') bigWin(a, m); },
    jumpscare() {
      const d = layer('scare', `<svg viewBox="0 0 400 400"><defs><radialGradient id="sk" cx="50%" cy="40%"><stop offset="0" stop-color="#e9e4d6"/><stop offset=".7" stop-color="#9c9584"/><stop offset="1" stop-color="#2a2620"/></radialGradient></defs>
        <path d="M200 20C90 20 50 110 60 200c8 70 40 120 70 150 20 20 120 20 140 0 30-30 62-80 70-150C350 110 310 20 200 20Z" fill="url(#sk)"/>
        <ellipse cx="140" cy="175" rx="46" ry="58" fill="#000"/><ellipse cx="260" cy="175" rx="46" ry="58" fill="#000"/>
        <circle cx="146" cy="182" r="9" fill="#ff1a1a"/><circle cx="254" cy="182" r="9" fill="#ff1a1a"/><circle cx="146" cy="182" r="22" fill="#ff1a1a" opacity=".25"/><circle cx="254" cy="182" r="22" fill="#ff1a1a" opacity=".25"/>
        <path d="M188 230l12-30 12 30z" fill="#1a1612"/><path d="M110 270q90 120 180 0q-20 70-90 75q-70-5-90-75Z" fill="#000"/>
        ${[...Array(9)].map((_, i) => `<path d="M${122 + i * 19} 278l9 ${i % 2 ? 26 : 34} 9-${i % 2 ? 26 : 34}z" fill="#efe9da"/>`).join('')}</svg>`, 1700);
      scream(); bodyFx('trl-quake', 900); },
    fakeban() {
      const shown = q('#bal').textContent; q('#bal').textContent = '$0'; osc('square', 220, 110, .6, .25);
      const d = layer('ban', `<div class="banbox"><div class="banic">⛔</div><h3>Account Suspended</h3><p>Our systems flagged <b>${(Acct.user || 'this account').replace(/[<>&]/g, '')}</b> for suspicious betting patterns.</p><p class="bsm">All chips have been confiscated. Appeals: 0 days remaining.</p><div class="bbar"><i></i></div></div>`);
      setTimeout(() => { d.querySelector('.banbox').innerHTML = '<div class="banic">😈</div><h3>jk</h3><p>Love, the house.</p>'; Bank.paint(); }, 6500);
      setTimeout(() => { d.remove(); q('#bal').textContent = shown; Bank.paint(); }, 8500); },
    fakebroke() {
      const p = q('#purse'), b = q('#bal'); p.classList.add('dn', 'trl-red'); let v = Bank.bal; osc('sawtooth', 400, 60, 1.4, .25);
      const t = setInterval(() => { v *= .82; b.textContent = fmt(v); }, 60); setTimeout(() => { clearInterval(t); b.textContent = '$0'; }, 1600);
      if (typeof floater === 'function') { const r = p.getBoundingClientRect(); floater('-' + fmt(Bank.bal), r.left + r.width / 2, r.bottom + 22); }
      setTimeout(() => { p.classList.remove('trl-red'); Bank.paint(); }, 6000); },
    flip() { bodyFx('trl-flip', 9000); },
    shake() { bodyFx('trl-quake', 3200); noise(3, .5, 'lowpass', 120, 60); },
    spin() { bodyFx('trl-spin', 2600); },
    glitch() { bodyFx('trl-glitch', 3500); noise(.4, .3, 'highpass', 3000, 3000); setTimeout(() => noise(.3, .3, 'bandpass', 900, 900), 900); },
    rain() { if (typeof FX !== 'undefined') { for (let i = 0; i < 6; i++) setTimeout(() => FX.rain(140, i % 2 ? 'conf' : 'coin'), i * 450); } },
  };
  let busy = false; const queue = [];
  function play(t) { queue.push(t); if (!busy) next(); }
  function next() { const t = queue.shift(); if (!t) { busy = false; return; } busy = true; try { (FX_[t.kind] || (() => {}))(t.amount); } catch (e) {} setTimeout(next, t.kind === 'flip' ? 9500 : t.kind === 'fakeban' ? 9000 : 4200); }
  async function poll() {
    if (!Acct.user || document.hidden) return; const tok = await Acct.token(); if (!tok) return;
    try { const r = await fetch(API + '/rest/v1/trolls?select=id,kind,amount,created_at&order=id.asc', { headers: { ...H, Authorization: 'Bearer ' + tok } }); if (!r.ok) return;
      const rows = await r.json(); if (!rows.length) return;
      fetch(API + '/rest/v1/trolls?id=in.(' + rows.map(x => x.id).join(',') + ')', { method: 'DELETE', headers: { ...H, Authorization: 'Bearer ' + tok } }).catch(() => {});
      rows.filter(x => Date.now() - new Date(x.created_at) < 120000).forEach(play); } catch (e) {}
  }
  setInterval(poll, 3000); setTimeout(poll, 1500);

  /* ================================================= live freeze updates */
  check(); setInterval(() => { if (!document.hidden) check(); }, 8000);
  const hook = () => { const c = window.ChatSB; if (!c) return setTimeout(hook, 1500);
    c.channel('backroom-state').on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'chat_state' }, p => p.new && setFrozen(p.new.frozen, p.new.frozen_by, true)).subscribe(); };
  setTimeout(hook, 1200);
  return { KINDS, check, play, get frozen() { return frozen; } };
})();
