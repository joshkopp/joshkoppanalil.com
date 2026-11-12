/* The Back Room: live table talk.
   Reads + realtime via supabase-js (loaded from a CDN, falls back to polling); posts over REST with the player's token.
   The database fills in who sent it, rate-limits to one message per 2 s and honours the "muted" flag. */
(() => {
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC', MAX = 80;
  const q = s => document.querySelector(s);
  const BAD = ['fuck', 'shit', 'bitch', 'cunt', 'nigger', 'nigga', 'faggot', 'retard', 'whore', 'slut', 'dick', 'pussy', 'asshole'];
  const badRe = new RegExp('(' + BAD.map(w => w.split('').join('[^a-z0-9]?')).join('|') + ')', 'gi');
  const clean = t => t.replace(badRe, m => m[0] + '*'.repeat(m.length - 1));

  /* ---------------- UI */
  const fab = document.createElement('button'); fab.className = 'chfab'; fab.id = 'chfab'; fab.setAttribute('aria-label', 'Open chat');
  fab.innerHTML = '<span class="chico">💬</span><span class="chlbl">Chat</span><b class="chbad" id="chbad" hidden>0</b>';
  const pn = document.createElement('aside'); pn.className = 'chp'; pn.id = 'chp'; pn.setAttribute('aria-label', 'Live chat');
  pn.innerHTML = `<header><div><div class="chk"><i class="chdot" id="chdot"></i><span id="chst">Connecting…</span></div><h3>Table Talk</h3></div><button class="chx" id="chx" aria-label="Close chat">×</button></header>
    <ol class="chl" id="chl"><li class="chsys">Loading…</li></ol><button class="chnew" id="chnew" hidden>New messages ↓</button>
    <form class="chf" id="chf"><input id="chi" maxlength="200" autocomplete="off" placeholder="Say something…" aria-label="Message"><button class="btn sm" id="chs" type="submit">Send</button></form>
    <div class="chout" id="chout"><button class="btn sm" id="chin" type="button">Sign in to chat</button></div>`;
  document.body.append(fab, pn);
  const list = q('#chl');
  let open = false, unread = 0, msgs = [], seen = new Set(), lastId = 0;
  const atBottom = () => list.scrollHeight - list.scrollTop - list.clientHeight < 40;
  const toBottom = () => { list.scrollTop = list.scrollHeight; q('#chnew').hidden = true; };
  function setOpen(v) { open = v; pn.classList.toggle('on', v); document.body.classList.toggle('chopen', v); fab.setAttribute('aria-expanded', v);
    if (v) { unread = 0; badge(); setTimeout(toBottom, 30); if (Acct.user) setTimeout(() => q('#chi').focus(), 250); } }
  const badge = () => { const b = q('#chbad'); b.hidden = !unread; b.textContent = unread > 9 ? '9+' : unread; };
  fab.onclick = () => setOpen(!open); q('#chx').onclick = () => setOpen(false);
  q('#chnew').onclick = toBottom; list.addEventListener('scroll', () => { if (atBottom()) q('#chnew').hidden = true; });
  q('#chin').onclick = () => Acct.open('in');
  addEventListener('keydown', e => { if (e.key === 'Escape' && open && document.activeElement === q('#chi')) setOpen(false); });
  // keep game hotkeys (space, R…) from firing while typing
  q('#chi').addEventListener('keydown', e => e.stopPropagation());
  function authUI() { const u = Acct.user; q('#chf').hidden = !u; q('#chout').hidden = !!u; paintAll(); }
  addEventListener('acct', authUI);

  const time = d => new Date(d).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  function row(m) {
    const li = document.createElement('li'); li.className = 'chm' + (m.kind === 'win' ? ' win' : '') + (Acct.user && m.username === Acct.user ? ' me' : '');
    const n = document.createElement('b'); n.textContent = m.username; n.style.color = `hsl(${[...m.username].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7)},70%,72%)`;
    const t = document.createElement('span'); t.className = 'cht'; t.textContent = clean(m.body);
    const tm = document.createElement('time'); tm.textContent = time(m.created_at);
    if (m.kind === 'win') { li.append('🏆 ', n, ' ', t, tm); } else li.append(n, t, tm);
    return li;
  }
  function paintAll() { if (!msgs.length) { list.innerHTML = '<li class="chsys">No messages yet. Say hi 👋</li>'; return; } list.replaceChildren(...msgs.map(row)); }
  function add(m, live) {
    if (seen.has(m.id)) return; seen.add(m.id); lastId = Math.max(lastId, m.id);
    const stick = atBottom(); msgs.push(m); msgs.sort((a, b) => a.id - b.id);
    if (msgs.length > MAX) { msgs.splice(0, msgs.length - MAX); }
    if (list.querySelector('.chsys') || msgs[msgs.length - 1] !== m || list.children.length >= MAX) paintAll(); else list.append(row(m));
    if (stick || (Acct.user && m.username === Acct.user)) toBottom(); else if (live) q('#chnew').hidden = false;
    if (live && !open && !(Acct.user && m.username === Acct.user)) { unread++; badge(); fab.classList.remove('ping'); void fab.offsetWidth; fab.classList.add('ping'); }
  }

  /* ---------------- data */
  const H = { apikey: PK };
  async function load(since) {
    const url = since ? `/rest/v1/messages?select=id,username,body,kind,created_at&id=gt.${since}&order=id.asc&limit=${MAX}`
      : `/rest/v1/messages?select=id,username,body,kind,created_at&order=id.desc&limit=${MAX}`;
    try { const r = await fetch(API + url, { headers: H }); if (!r.ok) throw 0; let rows = await r.json(); if (!since) rows.reverse();
      rows.forEach(m => add(m, !!since)); if (!since && !rows.length) paintAll(); return true; }
    catch (e) { if (!since) list.innerHTML = '<li class="chsys">Chat is offline right now.</li>'; return false; }
  }
  let live = false;
  function status(s) { live = s === 'live'; q('#chdot').className = 'chdot ' + s; q('#chst').textContent = s === 'live' ? 'Live' : s === 'poll' ? 'Online' : 'Connecting…'; }
  function realtime() {
    const sb = window.supabase; if (!sb || !sb.createClient) { status('poll'); return; }
    const c = sb.createClient(API, PK, { auth: { persistSession: false, autoRefreshToken: false } });
    c.channel('backroom-chat').on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, p => add(p.new, true))
      .subscribe(st => { if (st === 'SUBSCRIBED') { status('live'); load(lastId); } else if (st !== 'JOINING') status('poll'); });
  }
  // safety net: catch up every few seconds if realtime isn't connected, slowly otherwise
  let tick = 0; setInterval(() => { tick++; if (document.hidden) return; if (!live || tick % 6 === 0) load(lastId); }, 5000);

  async function send(text) {
    const t = await Acct.token(); if (!t) { Acct.open('in'); throw new Error('Sign in to chat.'); }
    const r = await fetch(API + '/rest/v1/messages?select=id,username,body,kind,created_at', { method: 'POST', headers: { ...H, Authorization: 'Bearer ' + t, 'Content-Type': 'application/json', Prefer: 'return=representation' }, body: JSON.stringify(text) });
    let j = null; try { j = await r.json(); } catch (e) {}
    if (!r.ok) { const m = (j && j.message) || ''; throw new Error(/slow down/.test(m) ? 'Slow down a little.' : /muted/.test(m) ? 'You are muted.' : 'Could not send. Try again.'); }
    if (j && j[0]) add(j[0], false);
  }
  q('#chf').onsubmit = async e => {
    e.preventDefault(); const i = q('#chi'), v = i.value.trim(); if (!v) return;
    q('#chs').disabled = true;
    try { await send({ body: v.slice(0, 200) }); i.value = ''; } catch (err) { if (typeof toast === 'function') toast(err.message); }
    finally { q('#chs').disabled = false; i.focus(); }
  };

  /* ---------------- big-win shout-outs (only for signed-in players) */
  if (typeof settle === 'function') {
    const orig = settle; let lastShout = 0;
    window.settle = function (bet, payout, ...rest) {
      const net = orig.call(this, bet, payout, ...rest);
      try { const m = bet ? payout / bet : 0;
        if (Acct.user && net >= 5000 && m >= 20 && Date.now() - lastShout > 15000) { lastShout = Date.now();
          const g = (typeof GAMES !== 'undefined' && GAMES.find(x => x.id === location.hash.slice(1))) || { name: 'the tables' };
          const fm = n => n >= 1e6 ? '$' + (n >= 1e12 ? (n / 1e12).toFixed(2) + 'T' : n >= 1e9 ? (n / 1e9).toFixed(2) + 'B' : (n / 1e6).toFixed(2) + 'M') : fmt(n);
          send({ kind: 'win', body: `hit ${m >= 100 ? Math.round(m) : m.toFixed(1)}× on ${g.name} for ${fm(payout)}` }).catch(() => {}); }
      } catch (e) {}
      return net;
    };
  }

  authUI(); load(0).then(realtime);
})();
