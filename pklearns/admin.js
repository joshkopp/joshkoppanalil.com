/* The Back Room: admin console (only shown to accounts with is_admin; every action is re-checked by the database). */
(() => {
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
  const q = s => document.querySelector(s), esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const U = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc'];
  const money = n => { n = Number(n) || 0; if (n < 1e6) return fmt(n); let i = 0; while (n >= 1000 && i < U.length - 1) { n /= 1000; i++; } return '$' + (n >= 100 ? n.toFixed(0) : n.toFixed(2)) + U[i]; };
  const ago = d => { if (!d) return '—'; const s = (Date.now() - new Date(d)) / 1000; return s < 60 ? 'now' : s < 3600 ? Math.floor(s / 60) + 'm ago' : s < 86400 ? Math.floor(s / 3600) + 'h ago' : Math.floor(s / 86400) + 'd ago'; };
  async function call(path, opt = {}) {
    const t = await Acct.token(); if (!t) throw new Error('Sign in again.');
    const r = await fetch(API + path, { ...opt, headers: { apikey: PK, Authorization: 'Bearer ' + t, 'Content-Type': 'application/json', ...(opt.headers || {}) } });
    let j = null; try { j = await r.json(); } catch (e) {} if (!r.ok) throw new Error((j && j.message) || 'Request failed (' + r.status + ')'); return j;
  }
  const act = (action, target, amount) => call('/rest/v1/rpc/admin_action', { method: 'POST', body: JSON.stringify({ action, target: target ?? null, amount: amount ?? null }) });
  window.AdminAct = act;

  /* ---------------- shell */
  const btn = document.createElement('button'); btn.className = 'admb'; btn.id = 'admb'; btn.hidden = true; btn.title = 'Admin console'; btn.innerHTML = '<span>♛</span><em>Admin</em>';
  q('#acct').before(btn);
  const D = document.createElement('div'); D.className = 'adm'; D.id = 'adm'; D.hidden = true;
  D.innerHTML = `<div class="admbox" role="dialog" aria-modal="true" aria-label="Admin console">
    <header><div><div class="admk">The Back Room</div><h2>♛ Admin Console</h2></div><div class="admhb"><button class="admr" id="admr" title="Refresh">↻</button><button class="admx" id="admx" aria-label="Close">×</button></div></header>
    <div class="admstats" id="admstats"></div>
    <nav class="admtabs"><button data-t="players" class="on">Players</button><button data-t="chat">Chat</button><button data-t="fun">Fun 😈</button><button data-t="luck">Luck 🍀</button></nav>
    <div class="admpane" id="admp-players"><div class="admbar"><input id="admq" placeholder="Search players…" autocomplete="off"><select id="adms"><option value="best">Top best</option><option value="balance">Top balance</option><option value="recent">Recently active</option><option value="muted">Muted first</option><option value="flagged">⚠ Cheat flags</option></select></div><div class="admtbl" id="admpl"></div></div>
    <div class="admpane" id="admp-fun" hidden><div class="admfun">
      <section class="frz"><div><h4>❄ Freeze chat</h4><p>Turns the chat into an ice cube for everyone. Only admins can talk while it's frozen.</p></div><button class="btn" id="admfrz">Freeze</button></section>
      <section><h4>😈 Troll a player</h4><p>Only they see it. Nothing real changes — no chips are touched.</p>
        <div class="admbar tgt"><label>Target <select id="admtg"></select></label><label class="amt">Fake win amount <input id="admamt" placeholder="auto"></label></div>
        <div class="trgrid" id="admtr"></div></section></div></div>
    <div class="admpane" id="admp-luck" hidden><div class="admfun">
      <section><h4>🍀 Rig someone's luck</h4><p>Bends the real game results for that player. Blessed means they win way more, cursed means they keep losing.</p>
        <div class="admbar tgt"><label>Player <select id="lkt"></select></label></div>
        <div class="lkslide"><span>💀 Cursed</span><input type="range" id="lkv" min="-100" max="100" step="10" value="70"><span>Blessed 🍀</span><b id="lkvv">+70%</b></div>
        <div class="lkpre" id="lkpre"><button data-v="-100">💀 Doomed</button><button data-v="-60">😬 Cursed</button><button data-v="40">🙂 Lucky</button><button data-v="70">🍀 Very lucky</button><button data-v="100">👑 Rigged win</button></div>
        <div class="lkdur" id="lkdur"><button data-r="1" class="on">Next game</button><button data-r="5">5 games</button><button data-r="20">20 games</button><button data-m="10">10 min</button><button data-m="30">30 min</button><button data-m="60">1 hour</button></div>
        <label class="lkvis"><input type="checkbox" id="lkvis"> Let them know (shows a 🍀/💀 timer next to their chips)</label>
        <div class="lkgo"><button class="btn" id="lkgo">Apply</button><button class="btn red sm" id="lkclr">Reset to normal</button></div></section>
      <section><h4>Active boosts</h4><div id="lklist" class="lklist"></div></section></div></div>
    <div class="admpane" id="admp-chat" hidden><div class="admbar"><span class="admhint">Newest first · deletes are instant for everyone</span><button class="btn red sm" id="admclear">Clear all chat</button></div><ol class="admmsgs" id="admml"></ol></div>
  </div>`;
  document.body.appendChild(D);
  let tab = 'players', players = [], msgs = [];
  const open = () => { D.hidden = false; document.body.style.overflow = 'hidden'; refresh(); };
  const close = () => { D.hidden = true; document.body.style.overflow = ''; };
  btn.onclick = open; q('#admx').onclick = close; q('#admr').onclick = () => refresh();
  D.addEventListener('click', e => { if (e.target === D) close(); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && !D.hidden) close(); });
  D.querySelectorAll('.admtabs button').forEach(b => b.onclick = () => { tab = b.dataset.t; D.querySelectorAll('.admtabs button').forEach(x => x.classList.toggle('on', x === b));
    q('#admp-players').hidden = tab !== 'players'; q('#admp-chat').hidden = tab !== 'chat'; q('#admp-fun').hidden = tab !== 'fun'; q('#admp-luck').hidden = tab !== 'luck'; paintFun(); paintLuck(); });
  q('#admq').oninput = paintPlayers; q('#adms').onchange = paintPlayers;
  addEventListener('acct', () => { btn.hidden = !Acct.admin; if (!Acct.admin) close(); });

  /* ---------------- data */
  async function refresh() {
    q('#admr').classList.add('spin');
    try {
      const [st, pl, ms] = await Promise.all([call('/rest/v1/rpc/admin_stats', { method: 'POST', body: '{}' }),
        call('/rest/v1/profiles?select=id,username,best,balance,muted,is_admin,updated_at,flagged&order=best.desc&limit=500'),
        call('/rest/v1/messages?select=id,username,body,kind,admin,created_at&order=id.desc&limit=150')]);
      players = pl; msgs = ms; loadBoosts();
      q('#admstats').innerHTML = [['Players', st.players], ['Active (15m)', st.active], ['New today', st.today], ['Messages', st.messages], ['Muted', st.muted], ['Chips in play', money(st.chips)]]
        .map(([k, v]) => `<div><b>${typeof v === 'number' ? v.toLocaleString() : v}</b><span>${k}</span></div>`).join('');
      paintPlayers(); paintMsgs(); paintFun(); paintLuck();
    } catch (e) { toast(e.message); }
    q('#admr').classList.remove('spin');
  }
  function paintPlayers() {
    const f = q('#admq').value.trim().toLowerCase(), s = q('#adms').value;
    let list = players.filter(p => !f || p.username.toLowerCase().includes(f));
    const key = { best: p => -Number(p.best), balance: p => -Number(p.balance || 0), recent: p => -new Date(p.updated_at || 0), muted: p => (p.muted ? 0 : 1) * 1e30 - Number(p.best), flagged: p => -(p.flagged || 0) }[s];
    list = list.slice().sort((a, b) => key(a) - key(b));
    q('#admpl').innerHTML = list.length ? `<div class="admrow admhead"><span>Player</span><span>Best</span><span>Balance</span><span>Active</span><span></span></div>` + list.map(p => `
      <div class="admrow ${p.muted ? 'muted' : ''}" data-u="${esc(p.username)}">
        <span class="admname">${p.is_admin ? '<i class="tg a">ADMIN</i>' : ''}${p.muted ? '<i class="tg m">MUTED</i>' : ''}${p.flagged ? `<i class="tg f" title="Tried to save impossible balances">⚠ ${p.flagged}</i>` : ''}${esc(p.username)}</span>
        <span>${money(p.best)}</span><span>${p.balance == null ? '—' : money(p.balance)}</span><span>${ago(p.updated_at)}</span>
        <span class="admacts">${p.is_admin ? '' : `<button data-a="${p.muted ? 'unmute' : 'mute'}">${p.muted ? 'Unmute' : 'Mute'}</button>`}<button data-a="setbal">Set chips</button><button data-a="reset" class="dng">Reset</button><button data-a="purge" class="dng">Wipe msgs</button></span>
      </div>`).join('') : '<p class="admempty">No players match.</p>';
  }
  function paintMsgs() {
    q('#admml').innerHTML = msgs.length ? msgs.map(m => `<li data-id="${m.id}"><div><b>${m.admin ? '<i class="tg a">ADMIN</i>' : ''}${esc(m.username)}</b> <span class="t">${new Date(m.created_at).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span></div>
      <p class="${m.kind === 'win' ? 'w' : ''}">${m.kind === 'win' ? '🏆 ' : ''}${esc(m.body)}</p><span class="admacts"><button data-a="mutefrom" data-u="${esc(m.username)}">Mute</button><button data-a="del" class="dng">Delete</button></span></li>`).join('')
      : '<p class="admempty">Chat is empty.</p>';
  }
  q('#admpl').onclick = async e => {
    const b = e.target.closest('button[data-a]'); if (!b) return; const u = b.closest('.admrow').dataset.u, a = b.dataset.a; let amt = null;
    if (a === 'setbal') { const v = prompt(`Set ${u}'s chips to:`, '1000000'); if (v == null) return; amt = Number(String(v).replace(/[$,\s]/g, '').replace(/k$/i, 'e3').replace(/m$/i, 'e6').replace(/b$/i, 'e9').replace(/t$/i, 'e12')); if (!isFinite(amt) || amt < 0) { toast('Not a valid amount.'); return; } }
    if ((a === 'reset' || a === 'purge') && !confirm(a === 'reset' ? `Reset ${u} to $1,000 and remove them from the board?` : `Delete every message from ${u}?`)) return;
    b.disabled = true; try { toast(await act(a, u, amt)); await refresh(); Acct.board(); } catch (err) { toast(err.message); } b.disabled = false;
  };
  q('#admml').onclick = async e => {
    const b = e.target.closest('button[data-a]'); if (!b) return; const li = b.closest('li');
    b.disabled = true;
    try { if (b.dataset.a === 'del') { await act('delmsg', li.dataset.id); li.remove(); msgs = msgs.filter(m => m.id != li.dataset.id); }
      else toast(await act('mute', b.dataset.u)); window.ChatResync && ChatResync(); } catch (err) { toast(err.message); b.disabled = false; }
  };
  q('#admclear').onclick = async () => { if (!confirm('Delete every chat message for everyone?')) return; try { toast(await act('clear')); msgs = []; paintMsgs(); window.ChatResync && ChatResync(); } catch (e) { toast(e.message); } };
  function paintFun() {
    const sel = q('#admtg'), cur = sel.value;
    sel.innerHTML = '<option value="random">🎲 Random active player</option><option value="all">🌍 Everyone</option>' + players.filter(p => !p.is_admin).map(p => `<option value="${esc(p.username)}">${esc(p.username)}</option>`).join('');
    if (cur) sel.value = cur;
    q('#admtr').innerHTML = Object.entries(window.Fun ? Fun.KINDS : {}).map(([k, v]) => `<button data-k="${k}"><span>${v.split(' ')[0]}</span>${v.split(' ').slice(1).join(' ')}</button>`).join('');
    const f = window.Fun && Fun.frozen; q('#admfrz').textContent = f ? 'Thaw chat ☀' : 'Freeze chat ❄'; q('#admfrz').className = 'btn ' + (f ? 'red' : '');
  }
  q('#admfrz').onclick = async () => { try { toast(await call('/rest/v1/rpc/admin_freeze', { method: 'POST', body: JSON.stringify({ on_: !(window.Fun && Fun.frozen) }) })); await Fun.check(); paintFun(); } catch (e) { toast(e.message); } };
  q('#admtr').onclick = async e => { const b = e.target.closest('button[data-k]'); if (!b) return; const k = b.dataset.k, t = q('#admtg').value;
    if (t === 'all' && !confirm(`Send ${Fun.KINDS[k]} to every player?`)) return;
    let amt = null; if (k === 'fakewin' && q('#admamt').value.trim()) { amt = Number(q('#admamt').value.replace(/[$,\s]/g, '').replace(/k$/i, 'e3').replace(/m$/i, 'e6').replace(/b$/i, 'e9').replace(/t$/i, 'e12')); if (!isFinite(amt)) { toast('Bad amount'); return; } }
    b.disabled = true; try { toast(await call('/rest/v1/rpc/admin_troll', { method: 'POST', body: JSON.stringify({ kind: k, target: t, amount: amt }) })); } catch (err) { toast(err.message); } setTimeout(() => b.disabled = false, 800); };
  /* ---------------- luck */
  let lkDur = { r: 1 }, boosts = [];
  const lkLabel = v => (v > 0 ? '+' : '') + v + '%';
  q('#lkv').oninput = () => { const v = +q('#lkv').value; q('#lkvv').textContent = lkLabel(v); q('#lkvv').className = v > 0 ? 'g' : v < 0 ? 'b' : ''; };
  q('#lkpre').onclick = e => { const b = e.target.closest('button'); if (!b) return; q('#lkv').value = b.dataset.v; q('#lkv').oninput(); };
  q('#lkdur').onclick = e => { const b = e.target.closest('button'); if (!b) return; q('#lkdur').querySelectorAll('button').forEach(x => x.classList.toggle('on', x === b)); lkDur = b.dataset.r ? { r: +b.dataset.r } : { m: +b.dataset.m }; };
  const luckCall = (target, luck) => call('/rest/v1/rpc/admin_luck', { method: 'POST', body: JSON.stringify({ target, luck, minutes: lkDur.m ?? null, rounds: lkDur.r ?? null, visible: q('#lkvis').checked }) });
  q('#lkgo').onclick = async () => { const t = q('#lkt').value, v = +q('#lkv').value; if (t === 'all' && !confirm('Change luck for every player?')) return;
    try { toast(await luckCall(t, v)); loadBoosts(); } catch (e) { toast(e.message); } };
  q('#lkclr').onclick = async () => { try { toast(await luckCall(q('#lkt').value, 0)); loadBoosts(); } catch (e) { toast(e.message); } };
  async function loadBoosts() { try { boosts = await call('/rest/v1/boosts?select=target,luck,until,rounds,visible,set_by'); } catch (e) { boosts = []; } paintLuck(); }
  function paintLuck() {
    const sel = q('#lkt'), cur = sel.value;
    sel.innerHTML = '<option value="random">🎲 Random active player</option><option value="all">🌍 Everyone</option>' + players.filter(p => !p.is_admin).map(p => `<option value="${esc(p.username)}">${esc(p.username)}</option>`).join('');
    if (cur) sel.value = cur;
    const byId = Object.fromEntries(players.map(p => [p.id, p.username]));
    const live = boosts.filter(b => b.rounds != null ? b.rounds > 0 : new Date(b.until) > Date.now());
    q('#lklist').innerHTML = live.length ? live.map(b => { const v = Math.round(b.luck * 100), name = byId[b.target] || '?';
      const left = b.rounds != null ? `${b.rounds} game${b.rounds == 1 ? '' : 's'} left` : `${Math.max(1, Math.round((new Date(b.until) - Date.now()) / 60000))} min left`;
      return `<div class="lkrow"><b>${esc(name)}</b><span class="${v > 0 ? 'g' : 'b'}">${v > 0 ? '🍀' : '💀'} ${lkLabel(v)}</span><span>${left}</span><span>${b.visible ? '👁 visible' : '🤫 secret'}</span><button data-u="${esc(name)}">Stop</button></div>`; }).join('')
      : '<p class="admempty">Nobody is boosted or cursed right now.</p>';
  }
  q('#lklist').onclick = async e => { const b = e.target.closest('button[data-u]'); if (!b) return; try { toast(await call('/rest/v1/rpc/admin_luck', { method: 'POST', body: JSON.stringify({ target: b.dataset.u, luck: 0 }) })); loadBoosts(); } catch (err) { toast(err.message); } };
  btn.hidden = !Acct.admin;
})();
