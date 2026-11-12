/* The Back Room: player accounts + global leaderboard.
   Talks to Supabase over plain REST (no library). The publishable key is meant to be public;
   row-level security only lets a signed-in player update their own row. */
window.Acct = (() => {
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
  const SKEY = 'br-acct', DOM = '@players.joshkoppanalil.com', CAP = 1e9;
    const q = s => document.querySelector(s), esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let S = null; try { S = JSON.parse(localStorage.getItem(SKEY) || 'null'); } catch (e) {}
  const save = () => { try { S ? localStorage.setItem(SKEY, JSON.stringify(S)) : localStorage.removeItem(SKEY); } catch (e) {} };

  async function req(path, { method = 'GET', body, tok, extra, keep } = {}) {
    const h = { apikey: PK, 'Content-Type': 'application/json', ...extra }; if (tok) h.Authorization = 'Bearer ' + tok;
    const r = await fetch(API + path, { method, headers: h, body: body ? JSON.stringify(body) : undefined, keepalive: !!keep });
    let j = null; try { j = await r.json(); } catch (e) {}
    if (!r.ok) { const e = new Error((j && (j.msg || j.message || j.error_description || j.error)) || 'HTTP ' + r.status); e.status = r.status; e.code = j && (j.error_code || j.code); throw e; }
    return j;
  }
  function setSession(j, name) {
    const best = S && S.best || 0;
    S = { at: j.access_token, rt: j.refresh_token, exp: Date.now() + (j.expires_in || 3600) * 1000, id: j.user.id,
      name: name || (j.user.user_metadata && j.user.user_metadata.username) || 'player', best }; save();
  }
  async function tok() {
    if (!S) return null; if (S.exp - Date.now() > 60000) return S.at;
    try { const j = await req('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: S.rt } }); setSession(j, S.name); return S.at; }
    catch (e) { if (e.status >= 400 && e.status < 500) { signOut(true); } return null; }
  }

  /* ------------------------------------------------ syncing the bankroll */
  let last = null, timer = 0, applying = false;
  function sync(bal) {
    if (!S || applying) return;
    last = Math.max(0, Math.min(Math.floor(bal), CAP)); if (last > S.best) { S.best = last; save(); }
    clearTimeout(timer); timer = setTimeout(flush, 2000);
  }
  async function flush(now) {
    clearTimeout(timer); if (!S || last == null) return;
    const t = now ? (S.exp > Date.now() ? S.at : null) : await tok(); if (!t) return;
    const body = { best: S.best, balance: last, updated_at: new Date().toISOString() };
    try { await req('/rest/v1/profiles?id=eq.' + S.id, { method: 'PATCH', tok: t, body, extra: { Prefer: 'return=minimal' }, keep: true }); if (!now) board(); } catch (e) {}
  }
  addEventListener('pagehide', () => flush(true)); document.addEventListener('visibilitychange', () => { if (document.hidden) flush(true); });

  async function pull() {
    const t = await tok(); if (!t) return;
    try {
      const p = (await req('/rest/v1/profiles?id=eq.' + S.id + '&select=username,best,balance', { tok: t }))[0]; if (!p) return;
      S.name = p.username;
      if (p.balance != null && Math.abs(p.balance - Bank.bal) >= 1) { applying = true; Bank.set(p.balance); applying = false; }
      S.best = Math.max(p.best || 0, Math.min(Math.floor(Bank.bal), CAP)); save(); paint(); sync(Bank.bal);
    } catch (e) {}
  }

  /* ------------------------------------------------ sign up / in / out */
  const nameOk = u => /^[A-Za-z0-9_]{3,16}$/.test(u);
  async function auth(mode, user, pass) {
    user = user.trim();
    if (!nameOk(user)) throw new Error('Username must be 3–16 letters, numbers or _.');
    if (pass.length < 6) throw new Error('Password must be at least 6 characters.');
    const email = user.toLowerCase() + DOM;
    try {
      if (mode === 'up') {
        const j = await req('/auth/v1/signup', { method: 'POST', body: { email, password: pass, data: { username: user } } });
        if (!j || !j.access_token) throw new Error('Account made, but sign-in is blocked: "Confirm email" is still on in Supabase.');
        setSession(j, user);
      } else {
        const j = await req('/auth/v1/token?grant_type=password', { method: 'POST', body: { email, password: pass } }); setSession(j);
      }
    } catch (e) {
      const m = (e.message || '').toLowerCase();
      if (/already|exists|registered/.test(m) || e.code === 'user_already_exists') throw new Error('That username is taken.');
      if (/invalid login|invalid_credentials|invalid grant/.test(m) || e.code === 'invalid_credentials') throw new Error('Wrong username or password.');
      if (e.status === 429) throw new Error('Too many tries. Wait a minute and try again.');
      if (e instanceof TypeError) throw new Error('Could not reach the server. Check your connection.');
      throw e;
    }
    await pull(); paint(); board();
  }
  function signOut(quiet) { flush(true); S = null; last = null; save(); paint(); board(); if (!quiet && typeof toast === 'function') toast('Signed out. Your chips stay on this device.'); }

  /* ------------------------------------------------ UI */
  const btn = document.createElement('button'); btn.className = 'acctb'; btn.id = 'acct';
  q('#refill').after(btn);
  const lb = document.createElement('section'); lb.className = 'lb'; lb.id = 'lb';
  lb.innerHTML = `<div class="lbh"><div><div class="lbk">Leaderboard</div><h2>High Rollers</h2></div><button class="lbr" id="lbr" aria-label="Refresh">↻</button></div>
    <ol class="lbl" id="lbl"><li class="lbmsg">Loading…</li></ol><div class="lbf" id="lbf"></div>`;
  q('.pstats').after(lb);
  const m = document.createElement('div'); m.className = 'amodal'; m.id = 'am'; m.hidden = true;
  m.innerHTML = `<div class="abox" role="dialog" aria-modal="true" aria-labelledby="amt">
    <button class="ax" id="amx" aria-label="Close">×</button>
    <div class="acoin">JK</div>
    <div id="amin"><h3 id="amt">Sign in</h3><p class="asub" id="ams">Your chips and best bankroll follow you to any device.</p>
      <div class="atabs"><button type="button" data-m="in" class="on">Sign in</button><button type="button" data-m="up">Create account</button></div>
      <form id="amf" autocomplete="on"><label>Username<input id="amu" name="username" autocomplete="username" maxlength="16" spellcheck="false" autocapitalize="off"></label>
        <label>Password<input id="amp" name="password" type="password" autocomplete="current-password"></label>
        <div class="aerr" id="ame"></div><button class="btn" id="amg" type="submit">Sign in</button>
        <p class="afine">Don't reuse a real password. Names are public on the board.</p></form></div>
    <div id="amout" hidden><h3>Signed in</h3><p class="asub">Playing as <b id="amn"></b></p>
      <div class="astats"><div><b id="amb"></b><span>Best bankroll</span></div><div><b id="amr">—</b><span>Rank</span></div></div>
      <button class="btn red sm" id="amso" type="button">Sign out</button></div></div>`;
  document.body.appendChild(m);
  let mode = 'in';
  function setMode(v) { mode = v; m.querySelectorAll('.atabs button').forEach(b => b.classList.toggle('on', b.dataset.m === v));
    q('#amt').textContent = v === 'up' ? 'Create account' : 'Sign in'; q('#amg').textContent = v === 'up' ? 'Create account' : 'Sign in';
    q('#amp').autocomplete = v === 'up' ? 'new-password' : 'current-password'; q('#ame').textContent = ''; }
  function open(v) { m.hidden = false; q('#amin').hidden = !!S; q('#amout').hidden = !S; if (!S) { setMode(v || 'in'); setTimeout(() => q('#amu').focus(), 50); } else paint(); }
  const close = () => { m.hidden = true; };
  m.addEventListener('click', e => { if (e.target === m) close(); }); q('#amx').onclick = close;
  addEventListener('keydown', e => { if (e.key === 'Escape' && !m.hidden) close(); });
  m.querySelectorAll('.atabs button').forEach(b => b.onclick = () => setMode(b.dataset.m));
  q('#amf').onsubmit = async e => {
    e.preventDefault(); const g = q('#amg'); g.disabled = true; q('#ame').textContent = '';
    try { await auth(mode, q('#amu').value, q('#amp').value); q('#amp').value = ''; close(); if (typeof toast === 'function') toast(`Welcome${mode === 'up' ? '' : ' back'}, ${S.name}!`); }
    catch (err) { q('#ame').textContent = err.message; } finally { g.disabled = false; }
  };
  q('#amso').onclick = () => { signOut(); close(); };
  btn.onclick = () => open(); q('#lbr').onclick = () => board();

  let rows = [];
  function paint() {
    btn.innerHTML = S ? `<i>♠</i><span>${esc(S.name)}</span>` : '<span>Sign in</span>'; btn.classList.toggle('in', !!S);
    if (S) { q('#amn').textContent = S.name; q('#amb').textContent = fmt(S.best); const r = rows.findIndex(x => x.username === S.name); q('#amr').textContent = r >= 0 ? '#' + (r + 1) : 'Top 10?'; }
    const f = q('#lbf');
    if (S) f.innerHTML = `<span class="lbnote">You: <b>${esc(S.name)}</b> · best <b>${fmt(S.best)}</b></span>`;
    else { f.innerHTML = '<button class="btn sm" id="lbjoin">Sign in to join the board</button>'; q('#lbjoin').onclick = () => open('up'); }
  }
  async function board() {
    const ol = q('#lbl');
    try {
      rows = await req('/rest/v1/profiles?select=username,best&best=gt.0&order=best.desc,updated_at.asc&limit=10');
      ol.innerHTML = rows.length ? rows.map((r, i) => `<li class="${S && r.username === S.name ? 'me' : ''} ${i < 3 ? 'p' + (i + 1) : ''}"><span class="rk">${i + 1}</span><span class="nm">${esc(r.username)}</span><b>${fmt(r.best)}</b></li>`).join('')
        : '<li class="lbmsg">No high rollers yet. Be the first.</li>';
    } catch (e) { ol.innerHTML = '<li class="lbmsg">Leaderboard is offline right now.</li>'; }
    paint();
  }
  paint(); board(); if (S) pull();
  setInterval(() => { if (!document.hidden && !q('#lobby').hidden) board(); }, 30000);
  q('#back').addEventListener('click', () => board());
  return { sync, board, get user() { return S && S.name; } };
})();
