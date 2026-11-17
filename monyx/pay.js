// Monyx: pay anyone by @username, and buy, sell and swap crypto.
// Every account is a Solana devnet keypair held in this browser (or Phantom).
// Amounts are shown in dollars, converted at the live SOL price. The keelpay
// edge function maps usernames to accounts and stores requests; it never
// holds anyone's money.
(() => {
  'use strict';
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/keelpay';
  const RPC = 'https://api.devnet.solana.com';
  const MEMO = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr';
  const SITE = location.origin + location.pathname.replace(/index\.html$/, '');
  // The mark: a violet tile with a white "m". Simple enough to read at favicon size.
  const MARK = '<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9"/><path d="M10 21v-7.2a3 3 0 0 1 6 0V21m0-7.2a3 3 0 0 1 6 0V21"/></svg>';
  const LOGO = `<span class="logo">${MARK}monyx</span>`;
  const L = 1e9;
  const FEE = 10_000;
  const W = () => window.solanaWeb3;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const app = $('#app');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isAddr = (s) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s || '');
  const short = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;
  const store = {
    get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };
  const ICON = {
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    scan: '<svg viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    key: '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l3 3"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
    out: '<svg viewBox="0 0 24 24"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 16l-4-4 4-4M6 12h10"/></svg>',
    tools: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg>',
    split: '<svg viewBox="0 0 24 24"><path d="M12 3v7M12 10 5 17M12 10l7 7M5 17v4M19 17v4"/></svg>',
    swap: '<svg viewBox="0 0 24 24"><path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>',
  };

  /* ───────── money ───────── */
  const S = {
    acct: store.get('monyx.acct'),       // { mode, secret?, address, token, user }
    kp: null, price: store.get('monyx.price', 150), lamports: null,
    feed: [], people: store.get('monyx.people', {}), requests: { incoming: [], outgoing: [] },
    markets: store.get('monyx.markets', null), port: null, bankAddr: store.get('monyx.bank', null),
    signup: null, timers: [],
  };
  const usd = (lamports) => (lamports / L) * S.price;
  const toLamports = (dollars) => Math.round((dollars / S.price) * L);
  const money = (v, sign = false) => {
    const s = Math.abs(v).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return sign ? (v > 0 ? '+' : v < 0 ? '−' : '') + s : s;
  };
  async function loadPrice() {
    try {
      const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
      const p = (await r.json()).solana.usd;
      if (p > 0) { S.price = p; store.set('monyx.price', p); }
    } catch {}
  }

  /* ───────── base58 / base64 ───────── */
  const ALPH = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
  function b58enc(bytes) {
    let n = 0n; for (const b of bytes) n = n * 256n + BigInt(b);
    let s = ''; while (n > 0n) { s = ALPH[Number(n % 58n)] + s; n /= 58n; }
    for (const b of bytes) { if (b === 0) s = '1' + s; else break; }
    return s;
  }
  function b58dec(s) {
    let n = 0n;
    for (const c of s) { const i = ALPH.indexOf(c); if (i < 0) throw new Error('bad'); n = n * 58n + BigInt(i); }
    const out = []; while (n > 0n) { out.unshift(Number(n % 256n)); n /= 256n; }
    for (const c of s) { if (c === '1') out.unshift(0); else break; }
    return Uint8Array.from(out);
  }
  const b64 = (u8) => btoa(String.fromCharCode(...u8));
  const b64url = (u8) => b64(u8).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

  /* ───────── keys & signing ───────── */
  const phantom = () => (window.phantom && window.phantom.solana) || (window.solana && window.solana.isPhantom ? window.solana : null);
  const keypairFrom = (secret) => W().Keypair.fromSecretKey(Uint8Array.from(secret));
  function parseRecovery(text) {
    const t = text.trim();
    let bytes;
    if (t.startsWith('[')) bytes = Uint8Array.from(JSON.parse(t));
    else bytes = b58dec(t.replace(/\s+/g, ''));
    if (bytes.length !== 64) throw new Error('len');
    return keypairFrom(bytes);
  }
  async function signText(text) {
    const msg = new TextEncoder().encode(text);
    if (S.acct && S.acct.mode === 'phantom') {
      const r = await phantom().signMessage(msg, 'utf8');
      return b64(r.signature || r);
    }
    const sk = S.kp.secretKey;
    const key = await crypto.subtle.importKey('jwk', { kty: 'OKP', crv: 'Ed25519', d: b64url(sk.slice(0, 32)), x: b64url(sk.slice(32)), ext: true }, { name: 'Ed25519' }, false, ['sign']);
    return b64(new Uint8Array(await crypto.subtle.sign({ name: 'Ed25519' }, key, msg)));
  }
  async function proof(address) {
    const ts = Date.now();
    const sig = await signText(`Sign in to Monyx\n\nAccount: ${address}\nTime: ${ts}`);
    return { address, ts, sig };
  }

  /* ───────── server ───────── */
  /* ───────── errors ─────────
     Users only ever see messages written for them. Anything else (network
     failures, wallet internals, blockchain errors) becomes one plain sentence. */
  const GENERIC = 'Something went wrong. Please try again.';
  const OFFLINE = "Can't reach Monyx right now. Check your connection and try again.";
  function userError(message, extra = {}) { const e = new Error(message); e.safe = true; return Object.assign(e, extra); }
  function friendly(e) {
    if (e && e.safe) return e.message;
    const m = String((e && e.message) || '');
    if (/user rejected|rejected the request|declined|cancel/i.test(m)) return 'Cancelled.';
    if (/failed to fetch|networkerror|load failed|network request/i.test(m)) return OFFLINE;
    return GENERIC;
  }
  const showError = (e, ms = 4500) => toast(esc(friendly(e)), true, ms);

  async function api(path, { method = 'GET', body, auth = true } = {}) {
    const headers = { 'content-type': 'application/json' };
    if (auth && S.acct && S.acct.token) headers.authorization = `Bearer ${S.acct.token}`;
    let r;
    try { r = await fetch(API + path, { method, headers, body: body ? JSON.stringify(body) : undefined }); }
    catch { throw userError(OFFLINE, { status: 0 }); }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      // The server only sends user-facing text; still, never show a 5xx's detail.
      const msg = r.status >= 500 && r.status !== 503 ? GENERIC : (j.message || GENERIC);
      throw userError(msg, { code: j.error, status: r.status });
    }
    return j;
  }
  function saveAcct() { store.set('monyx.acct', S.acct); }

  /* ───────── chain ───────── */
  async function rpc(method, params, tries = 4) {
    for (let i = 0; i < tries; i++) {
      try {
        const r = await fetch(RPC, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }) });
        if (r.status === 429 || r.status >= 500) throw new Error('busy');
        const j = await r.json(); if (j.error) throw new Error(j.error.message);
        return j.result;
      } catch (e) { if (i === tries - 1) throw e; await new Promise((s) => setTimeout(s, 350 * 2 ** i)); }
    }
  }
  async function refreshBalance() {
    if (!S.acct) return;
    try { S.lamports = (await rpc('getBalance', [S.acct.address])).value; paintBalance(); } catch {}
  }
  async function send(toAddress, dollars, note) {
    const { PublicKey, Transaction, SystemProgram, TransactionInstruction, Connection } = W();
    const conn = new Connection(RPC, 'confirmed');
    const from = new PublicKey(S.acct.address);
    const lamports = toLamports(dollars);
    let sig = null;
    try {
      const have = await conn.getBalance(from);
      if (have < lamports + FEE) throw userError(`You have ${money(usd(have))}. Add money to send ${money(dollars)}.`);
      const tx = new Transaction().add(SystemProgram.transfer({ fromPubkey: from, toPubkey: new PublicKey(toAddress), lamports }));
      if (note) tx.add(new TransactionInstruction({ programId: new PublicKey(MEMO), keys: [], data: Buffer.from(note.slice(0, 80), 'utf8') }));
      const { blockhash, lastValidBlockHeight } = await conn.getLatestBlockhash('confirmed');
      tx.recentBlockhash = blockhash; tx.feePayer = from;
      let signed;
      if (S.acct.mode === 'phantom') signed = await phantom().signTransaction(tx);
      else { tx.sign(S.kp); signed = tx; }
      sig = await conn.sendRawTransaction(signed.serialize());
      const res = await conn.confirmTransaction({ signature: sig, blockhash, lastValidBlockHeight }, 'confirmed');
      if (res.value && res.value.err) throw userError("The payment didn't go through. Nothing was sent.");
      return sig;
    } catch (e) {
      if (e.safe) throw e;
      console.error('[monyx] send:', e);
      if (/user rejected|rejected the request|declined/i.test(String(e.message))) throw userError('Payment cancelled.');
      // Once it's been broadcast we can't say "nothing was sent" for sure.
      if (sig) throw userError("We couldn't confirm the payment yet. Check your activity in a minute before trying again.");
      if (/failed to fetch|network/i.test(String(e.message))) throw userError(OFFLINE);
      throw userError("The payment didn't go through. Nothing was sent.");
    }
  }

  // Activity: read recent transactions and turn them into "who, how much, why".
  async function loadFeed() {
    if (!S.acct) return;
    const me = S.acct.address;
    const cacheKey = `monyx.feed.${me}`;
    if (!S.feed.length) S.feed = store.get(cacheKey, []);
    try {
      const sigs = await rpc('getSignaturesForAddress', [me, { limit: 25 }]);
      const known = new Map(S.feed.map((f) => [f.sig, f]));
      const todo = sigs.filter((s) => !known.has(s.signature));
      let i = 0; const got = new Map();
      await Promise.all([0, 1].map(async () => {
        while (i < todo.length) {
          const s = todo[i++];
          const tx = await rpc('getTransaction', [s.signature, { encoding: 'jsonParsed', maxSupportedTransactionVersion: 0, commitment: 'confirmed' }]).catch(() => null);
          if (tx) got.set(s.signature, toEntry(tx, s, me));
        }
      }));
      S.feed = sigs.map((s) => known.get(s.signature) || got.get(s.signature)).filter(Boolean);
      store.set(cacheKey, S.feed);
      await resolvePeople(S.feed.map((f) => f.with).filter(Boolean));
      paintFeed(); paintPeople();
    } catch { paintFeed(); }
  }
  function toEntry(tx, s, me) {
    const keys = tx.transaction.message.accountKeys.map((k) => k.pubkey || k);
    const ix = [...tx.transaction.message.instructions];
    for (const inner of tx.meta.innerInstructions || []) ix.push(...inner.instructions);
    let withAddr = null; let note = '';
    for (const x of ix) {
      if (x.program === 'system' && x.parsed && x.parsed.type === 'transfer') {
        const { source, destination } = x.parsed.info;
        if (source === me && destination !== me) withAddr = destination;
        else if (destination === me && source !== me) withAddr = source;
      }
      if (x.program === 'spl-memo' && typeof x.parsed === 'string') note = x.parsed;
    }
    const i = keys.indexOf(me);
    const delta = i >= 0 ? tx.meta.postBalances[i] - tx.meta.preBalances[i] : 0;
    // The sender also pays the network fee; show the amount the other person got.
    const fee = keys[0] === me ? tx.meta.fee : 0;
    return { sig: s.signature, time: s.blockTime, ok: !s.err, with: withAddr, note, lamports: delta + fee };
  }
  async function resolvePeople(addresses) {
    const need = [...new Set(addresses)].filter((a) => !S.people[a]);
    if (!need.length) return;
    try {
      const { users } = await api(`/resolve?a=${need.join(',')}`, { auth: false });
      for (const a of need) S.people[a] = users[a] || { address: a, unknown: true };
      store.set('monyx.people', S.people);
    } catch {}
  }
  async function loadRequests() {
    if (!S.acct || !S.acct.token) return;
    try { S.requests = await api('/requests'); paintRequests(); }
    catch (e) { if (e.status === 401) relogin(); }
  }

  /* ───────── pieces ───────── */
  // Mid-tone colours that carry white initials in both light and dark mode.
  const PALETTE = ['#7c5cf5', '#14a37a', '#e0574f', '#2f80ed', '#d68a12', '#1aa0b8', '#c2507a', '#5f6b7d'];
  function avatar(p, size = '') {
    if (!p) return `<div class="av ${size} addr">?</div>`;
    if (p.bank) return `<div class="av ${size} bank">${MARK}</div>`;
    if (p.unknown || !p.name) return `<div class="av ${size} addr">#</div>`;
    let h = 2166136261; for (const c of p.handle || p.name) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; // FNV-1a spreads similar names across colours
    const ini = p.name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
    return `<div class="av ${size}" style="background:${PALETTE[h % PALETTE.length]}">${esc(ini)}</div>`;
  }
  const who = (p) => (p && !p.unknown ? (p.bank ? 'Monyx' : p.name) : (p ? short(p.address) : 'Someone'));
  const first = (p) => (p && !p.unknown && !p.bank ? p.name.split(' ')[0] : who(p));
  function when(t) {
    if (!t) return 'Pending';
    const d = new Date(t * 1000), now = new Date();
    const s = (now - d) / 1000;
    if (s < 60) return 'Just now';
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (d.toDateString() === now.toDateString()) return d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
    const y = new Date(now); y.setDate(now.getDate() - 1);
    if (d.toDateString() === y.toDateString()) return 'Yesterday';
    return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
  }
  let toastT;
  function toast(html, bad = false, ms = 3200) {
    const t = $('#toast'); t.innerHTML = html; t.className = 'toast' + (bad ? ' bad' : ''); t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), ms);
  }
  async function copy(text, msg = 'Copied') { try { await navigator.clipboard.writeText(text); toast(msg); } catch { toast("Couldn't copy", true); } }
  function sheet(html, onMount) {
    const wrap = document.createElement('div');
    wrap.className = 'sheet-wrap';
    wrap.innerHTML = `<div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
    const close = () => { wrap.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    wrap.addEventListener('click', (e) => { if (e.target === wrap) close(); });
    document.addEventListener('keydown', onKey);
    document.body.appendChild(wrap);
    onMount && onMount($('.sheet', wrap), close);
    return close;
  }
  const payLink = (handle, amount) => `${SITE}#pay/${handle}${amount ? '/' + amount : ''}`;
  function qrSvg(text) { const q = qrcode(0, 'M'); q.addData(text); q.make(); return q.createSvgTag({ cellSize: 4, margin: 0, scalable: true }); }

  /* ───────── screens ───────── */
  function show(html, { tabs = false, tab = '' } = {}) {
    document.querySelectorAll('.sheet-wrap').forEach((w) => w.remove()); // a new screen closes any open sheet
    app.innerHTML = `<div class="screen">${html}</div>`;
    $('#tabbar').hidden = !tabs;
    $$('#tabbar a').forEach((a) => a.classList.toggle('on', a.dataset.tab === tab));
    window.scrollTo(0, 0);
  }

  function screenWelcome(banner) {
    show(`<section class="welcome">
      <div class="brand">${LOGO}</div>
      <div class="art"><div class="stage">
        <div class="bubble b1"><div class="av sm" style="background:#e0574f">MA</div><div><b>Maya paid you</b><span>🍕 Friday pizza</span></div><span class="amt in">+$14.00</span></div>
        <div class="bubble b2"><div class="av sm" style="background:#2f80ed">JR</div><div><b>You paid Jordan</b><span>🎟️ concert tickets</span></div><span class="amt">$42.50</span></div>
      </div></div>
      <h1>Pay anyone<br>by name.</h1>
      <p class="sub">Split dinner, pay back a friend, chip in for a gift. Type their @username and you're done. No bank details, no fees.</p>
      ${banner || ''}
      <div class="cta">
        <button class="btn btn-dark" id="goSignup">Create your account</button>
        <button class="btn btn-text" id="goLogin">I already have an account</button>
      </div>
      <p class="fine">Monyx is in test mode. Balances are play money with no real value. <a href="documentation/">How it works</a></p>
    </section>`);
    $('#goSignup').onclick = () => startSignup();
    $('#goLogin').onclick = () => (location.hash = '#login');
  }

  function dots(n) { return `<div class="dots">${[1, 2, 3].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`; }
  function stepShell(n, body, foot, back = true) {
    return `<section class="steps">
      <div class="topline">${back ? `<button class="back" id="back" aria-label="Back">${ICON.back}</button>` : '<span></span>'}${dots(n)}<span style="width:32px"></span></div>
      <div class="body">${body}</div>
      <div class="foot">${foot}</div>
    </section>`;
  }

  function startSignup(kp) {
    S.signup = { step: 1, name: '', handle: '', kp: kp || null, avail: false };
    location.hash = '#signup';
    stepName();
  }
  function stepName() {
    const su = S.signup;
    show(stepShell(1, `<h2>What's your name?</h2><p class="sub">This is how friends will find you. Use the name they'd recognize.</p>
      <label class="field" style="margin-top:22px"><input id="nm" autocomplete="name" placeholder="First and last name" value="${esc(su.name)}" maxlength="40"></label>`,
      `<button class="btn btn-dark" id="next" disabled>Continue</button>`));
    const nm = $('#nm'), next = $('#next');
    const upd = () => (next.disabled = !nm.value.trim());
    nm.oninput = upd; upd(); nm.focus();
    nm.onkeydown = (e) => { if (e.key === 'Enter' && !next.disabled) next.click(); };
    $('#back').onclick = () => { location.hash = ''; };
    next.onclick = () => { su.name = nm.value.trim(); if (!su.handle) su.handle = suggest(su.name); stepHandle(); };
  }
  const suggest = (name) => {
    const p = name.toLowerCase().normalize('NFD').replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    return ((p[0] || 'me') + (p[1] ? p[1][0] : '')).slice(0, 18);
  };
  function stepHandle() {
    const su = S.signup;
    show(stepShell(2, `<h2>Pick your @username</h2><p class="sub">People pay you with this. Short and easy to say out loud works best.</p>
      <label class="field prefix" style="margin-top:22px"><span>@</span><input id="hd" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="20" value="${esc(su.handle)}"></label>
      <div class="hint" id="hint"></div>`,
      `<button class="btn btn-dark" id="next" disabled>Create account</button>`));
    const hd = $('#hd'), hint = $('#hint'), next = $('#next');
    let t, seq = 0;
    const check = async () => {
      const v = hd.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
      if (v !== hd.value) hd.value = v;
      su.handle = v; su.avail = false; next.disabled = true;
      if (v.length < 3) { hint.className = 'hint'; hint.textContent = 'At least 3 letters or numbers.'; return; }
      const my = ++seq;
      hint.className = 'hint'; hint.textContent = 'Checking…';
      try {
        const r = await api(`/check?handle=${encodeURIComponent(v)}`, { auth: false });
        if (my !== seq) return;
        su.avail = r.available; next.disabled = !r.available;
        hint.className = 'hint ' + (r.available ? 'ok' : 'bad');
        hint.textContent = r.available ? `@${v} is yours if you want it.` : `${r.reason || 'Taken'}. Try @${v}${Math.floor(Math.random() * 90 + 10)}?`;
      } catch { hint.className = 'hint bad'; hint.textContent = "Couldn't check right now."; }
    };
    hd.oninput = () => { clearTimeout(t); t = setTimeout(check, 280); };
    hd.onkeydown = (e) => { if (e.key === 'Enter' && !next.disabled) next.click(); };
    check(); hd.focus();
    $('#back').onclick = stepName;
    next.onclick = async () => {
      next.disabled = true; next.innerHTML = '<span class="spin"></span>Setting things up';
      try {
        if (!su.kp) su.kp = W().Keypair.generate();
        S.kp = su.kp;
        const address = su.kp.publicKey.toBase58();
        S.acct = { mode: 'key', secret: Array.from(su.kp.secretKey), address, token: null, user: null };
        saveAcct();   // keep the key even if the next call fails
        const p = await proof(address);
        const r = await api('/register', { method: 'POST', auth: false, body: { ...p, name: su.name, handle: su.handle } });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        su.bonus = r.bonus;
        stepKey();
      } catch (e) {
        next.disabled = false; next.textContent = 'Create account';
        hint.className = 'hint bad'; hint.textContent = friendly(e);
        if (!e.safe && /Ed25519|not supported/i.test(String(e.message))) hint.textContent = 'This browser is too old to create a secure key. Try the latest Chrome, Safari or Firefox.';
      }
    };
  }
  function recoveryKey() { return b58enc(Uint8Array.from(S.acct.secret)); }
  function stepKey() {
    const key = recoveryKey();
    show(stepShell(3, `<h2>Save your recovery key</h2>
      <p class="sub">It's the only way back into your account if you switch phones or clear your browser. We can't reset it for you.</p>
      <div class="keybox" id="kb" title="Tap to reveal">${esc(key)}</div>
      <div class="btn-row" style="margin-top:10px"><button class="btn btn-light btn-sm" id="cp" style="width:100%">Copy</button><button class="btn btn-light btn-sm" id="dl" style="width:100%">Download</button></div>
      <div class="warn">${ICON.info.replace('<svg', '<svg width="18" height="18" style="flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.8"')}<span>Anyone with this key can spend your balance. Never share it, not even with Monyx.</span></div>
      <label class="check"><input type="checkbox" id="ok"><span>I saved my recovery key somewhere safe.</span></label>`,
      `<button class="btn btn-dark" id="next" disabled>Continue</button>`, false));
    $('#kb').onclick = (e) => e.currentTarget.classList.toggle('show');
    $('#cp').onclick = () => { $('#kb').classList.add('show'); copy(key, 'Recovery key copied'); };
    $('#dl').onclick = () => {
      const blob = new Blob([`Monyx recovery key for @${S.acct.user.handle}\n\n${key}\n\nKeep this private. Anyone with it can spend your balance.\nTo log in on a new device, open ${SITE} and choose "I already have an account".\n`], { type: 'text/plain' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `monyx-recovery-${S.acct.user.handle}.txt`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    $('#ok').onchange = (e) => ($('#next').disabled = !e.target.checked);
    $('#next').onclick = stepDone;
  }
  function stepDone() {
    const b = S.signup && S.signup.bonus;
    const got = b && b.status === 'sent';
    show(`<section class="steps"><div class="body" style="display:grid;place-items:center;text-align:center">
      <div><div class="tick"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <h2>You're in, ${esc(S.acct.user.name.split(' ')[0])}.</h2>
      <p class="sub">${got ? `We added <b style="color:var(--ink)">${money(usd(b.lamports))}</b> to your balance so you can try it out.` : 'Add money from your home screen whenever you’re ready.'}</p>
      <p class="sub">Friends can pay you at <b style="color:var(--ink)">@${esc(S.acct.user.handle)}</b>.</p></div>
    </div><div class="foot"><button class="btn btn-dark" id="go">Go to Monyx</button></div></section>`);
    $('#go').onclick = () => { const p = store.get('monyx.pending'); store.del('monyx.pending'); location.hash = p || '#home'; };
    S.signup = null;
  }

  function screenLogin() {
    show(`<section class="steps">
      <div class="topline"><button class="back" id="back" aria-label="Back">${ICON.back}</button><span></span><span></span></div>
      <div class="body"><h2>Welcome back</h2><p class="sub">Paste the recovery key you saved when you signed up.</p>
        <label class="field" style="margin-top:22px"><textarea id="rk" rows="3" spellcheck="false" autocapitalize="off" placeholder="Your recovery key"></textarea></label>
        <div class="hint" id="hint"></div></div>
      <div class="foot"><button class="btn btn-dark" id="go" disabled>Log in</button>
        <button class="btn btn-text" id="ph">Use a Phantom wallet instead</button></div>
    </section>`);
    const rk = $('#rk'), go = $('#go'), hint = $('#hint');
    rk.oninput = () => (go.disabled = rk.value.trim().length < 40);
    $('#back').onclick = () => (location.hash = '');
    go.onclick = async () => {
      let kp;
      try { kp = parseRecovery(rk.value); } catch { hint.className = 'hint bad'; hint.textContent = "That doesn't look like a Monyx recovery key."; return; }
      go.disabled = true; go.innerHTML = '<span class="spin"></span>Logging in';
      S.kp = kp;
      S.acct = { mode: 'key', secret: Array.from(kp.secretKey), address: kp.publicKey.toBase58(), token: null, user: null };
      try {
        const r = await api('/login', { method: 'POST', auth: false, body: await proof(S.acct.address) });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        location.hash = store.get('monyx.pending') || '#home'; store.del('monyx.pending');
      } catch (e) {
        go.disabled = false; go.textContent = 'Log in';
        if (e.code === 'no_account') { S.acct = null; toast('No account yet for that key. Let’s make one.'); startSignup(kp); return; }
        S.acct = null; hint.className = 'hint bad'; hint.textContent = e.status === 401 ? "That recovery key didn't work. Check it and try again." : friendly(e);
      }
    };
    $('#ph').onclick = loginPhantom;
  }
  async function loginPhantom() {
    const p = phantom();
    if (!p) { toast('Phantom isn’t installed in this browser.', true); return; }
    try {
      const r = await p.connect();
      const address = r.publicKey.toString();
      S.acct = { mode: 'phantom', address, token: null, user: null };
      try {
        const res = await api('/login', { method: 'POST', auth: false, body: await proof(address) });
        S.acct.token = res.token; S.acct.user = res.user; saveAcct(); location.hash = '#home';
      } catch (e) {
        if (e.code !== 'no_account') throw e;
        S.signup = { step: 1, name: '', handle: '', kp: null, phantom: true };
        // Phantom users skip the recovery step: their wallet already has one.
        phantomSignup(address);
      }
    } catch (e) { S.acct = null; showError(e); }
  }
  function phantomSignup(address) {
    show(stepShell(2, `<h2>Set up Monyx</h2><p class="sub">Your Phantom wallet will hold your balance. Pick a name and username.</p>
      <label class="field" style="margin-top:22px"><input id="nm" placeholder="First and last name" maxlength="40"></label>
      <label class="field prefix" style="margin-top:10px"><span>@</span><input id="hd" autocapitalize="off" spellcheck="false" maxlength="20" placeholder="username"></label>
      <div class="hint" id="hint"></div>`, `<button class="btn btn-dark" id="next">Create account</button>`));
    $('#back').onclick = () => { S.acct = null; location.hash = '#login'; screenLogin(); };
    $('#nm').oninput = (e) => { if (!$('#hd').dataset.touched) $('#hd').value = suggest(e.target.value); };
    $('#hd').oninput = (e) => { e.target.dataset.touched = 1; e.target.value = e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''); };
    $('#next').onclick = async () => {
      const hint = $('#hint');
      try {
        const r = await api('/register', { method: 'POST', auth: false, body: { ...(await proof(address)), name: $('#nm').value, handle: $('#hd').value } });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        S.signup = { bonus: r.bonus }; stepDone();
      } catch (e) { hint.className = 'hint bad'; hint.textContent = friendly(e); }
    };
  }
  async function relogin() {
    if (!S.acct) return;
    try {
      const r = await api('/login', { method: 'POST', auth: false, body: await proof(S.acct.address) });
      S.acct.token = r.token; S.acct.user = r.user; saveAcct();
    } catch {}
  }

  /* home */
  function screenHome() {
    const u = S.acct.user;
    show(`<header class="top"><a class="me" href="#me">${avatar(u, 'sm')}<span>Hi, ${esc(u.name.split(' ')[0])}</span></a><span class="pill"><i></i>Test mode</span></header>
      <section class="balance">
        <div class="label"><span>Balance</span><span class="cur">USD</span></div>
        <div class="amount" id="bal"><div class="skeleton" style="width:60%;height:44px;border-radius:12px"></div></div>
        <a class="cryptorow" id="cryptoRow" href="#invest" hidden><span>Crypto</span><b id="cryptoVal"></b>${ICON.chev}</a>
        <div class="btn-row"><button class="btn btn-light" id="add">Add money</button><a class="btn btn-dark" href="#pay">Pay or request</a></div>
      </section>
      <div id="start"></div>
      <div id="reqs"></div>
      <div id="ppl"></div>
      <h3 class="hrow"><span>Activity</span><a href="#activity">See all</a></h3>
      <div class="list" id="feed" data-limit="6"><div class="item"><div class="mid"><div class="skeleton" style="width:70%"></div></div></div><div class="item"><div class="mid"><div class="skeleton" style="width:50%"></div></div></div></div>`, { tabs: true, tab: 'home' });
    $('#add').onclick = addMoney;
    paintBalance(); paintRequests(); paintPeople(); if (S.feed.length) paintFeed();
    refreshBalance(); loadFeed(); loadRequests();
    loadPortfolio().then(paintCryptoRow);
  }
  function paintCryptoRow() {
    const r = $('#cryptoRow'); if (!r || !S.port) return;
    r.hidden = !(S.port.total > 0);
    $('#cryptoVal').textContent = money(S.port.total);
  }
  function paintBalance() {
    const el = $('#bal'); if (!el || S.lamports == null) return;
    const v = usd(S.lamports);
    const [d, c] = v.toFixed(2).split('.');
    el.innerHTML = `<small>$</small>${Number(d).toLocaleString('en-US')}<span class="cents">.${c}</span>`;
    paintStart();
  }
  // Get-started checklist: three first steps for a brand-new account.
  // Each one ticks itself off from real activity and the card hides once all
  // three are done, or when the person dismisses it.
  function paintStart() {
    const el = $('#start'); if (!el) return;
    if (store.get('monyx.startHidden')) { el.innerHTML = ''; return; }
    const steps = [
      { t: 'Add money', s: 'Get free test money to try things out', done: S.lamports > 0, go: addMoney },
      { t: 'Send your first payment', s: 'Pay a friend by their @username', done: S.feed.some((f) => f.lamports < 0 && f.with && !(S.people[f.with] || {}).bank), go: () => (location.hash = '#pay') },
      { t: 'Share your pay link', s: 'So friends can pay you', done: !!store.get('monyx.shared'), go: shareLink },
    ];
    const n = steps.filter((x) => x.done).length;
    if (n === steps.length) { store.set('monyx.startHidden', true); el.innerHTML = ''; return; }
    el.innerHTML = `<section class="start"><div class="start-h"><div><b>Get started</b><span>${n} of ${steps.length} done</span></div><button class="x" id="startX" aria-label="Hide">${ICON.x}</button></div>
      <div class="bar"><i style="width:${(n / steps.length) * 100}%"></i></div>
      ${steps.map((x, i) => `<button class="srow ${x.done ? 'ok' : ''}" data-i="${i}"><span class="ck">${x.done ? ICON.check : i + 1}</span><span class="mid"><b>${x.t}</b><span>${x.s}</span></span>${x.done ? '' : ICON.chev}</button>`).join('')}</section>`;
    $('#startX').onclick = () => { store.set('monyx.startHidden', true); el.innerHTML = ''; };
    $$('.srow', el).forEach((b) => (b.onclick = () => { const x = steps[+b.dataset.i]; if (!x.done) x.go(); }));
  }
  function paintPeople() {
    const el = $('#ppl'); if (!el) return;
    const seen = new Set(); const list = [];
    for (const f of S.feed) {
      const p = S.people[f.with];
      if (p && !p.unknown && !p.bank && !seen.has(p.handle)) { seen.add(p.handle); list.push(p); }
    }
    if (!list.length) { el.innerHTML = ''; return; }
    el.innerHTML = `<h3>People</h3><div class="people">${list.slice(0, 10).map((p) => `<button class="person" data-h="${esc(p.handle)}">${avatar(p, 'md')}<span>${esc(first(p))}</span></button>`).join('')}</div>`;
    $$('.person', el).forEach((b) => (b.onclick = () => (location.hash = `#pay/${b.dataset.h}`)));
  }
  function paintFeed() {
    paintStart();
    const el = $('#feed'); if (!el) return;
    if (!S.feed.length) { el.innerHTML = `<div class="empty">Nothing here yet.<br>Pay a friend, or share your link from the Me tab to get paid.</div>`; return; }
    el.innerHTML = S.feed.slice(0, +(el.dataset.limit || 100)).map((f) => {
      const p = S.people[f.with] || (f.with ? { address: f.with, unknown: true } : null);
      const incoming = f.lamports > 0;
      const title = !f.with ? 'Account activity' : p && p.bank ? bankTitle(f, incoming) : incoming ? `<b>${esc(who(p))}</b> paid you` : `You paid <b>${esc(who(p))}</b>`;
      const sub = [f.note && !(p && p.bank) ? esc(f.note) : '', when(f.time)].filter(Boolean).join(' · ');
      return `<a class="item" href="#tx/${f.sig}">${avatar(p)}<div class="mid"><div class="t">${title}</div><div class="s">${sub}${f.ok ? '' : ' · Failed'}</div></div><div class="amt ${incoming ? 'in' : ''}">${money(usd(f.lamports), true)}</div></a>`;
    }).join('');
  }
  function bankTitle(f, incoming) {
    const n = f.note || '';
    if (/welcome/i.test(n)) return '<b>Monyx</b> welcome bonus';
    if (/^Sold /.test(n)) return `Sold <b>${esc(n.slice(5))}</b>`;
    if (/^Buy /.test(n)) return `Bought <b>${esc(n.slice(4))}</b>`;
    return incoming ? '<b>Monyx</b> paid you' : 'Paid <b>Monyx</b>';
  }
  function paintRequests() {
    const el = $('#reqs'); if (!el) return;
    const { incoming = [], outgoing = [] } = S.requests;
    if (!incoming.length && !outgoing.length) { el.innerHTML = ''; return; }
    el.innerHTML = (incoming.length ? `<h3>Requests for you</h3>` + incoming.map((r) => `<div class="req">
        <div class="row">${avatar(r.from)}<div><div class="t"><b>${esc(r.from.name)}</b> requests <b>${money(r.usd)}</b></div><div class="s">${esc(r.note || 'No note')} · ${when(Date.parse(r.created) / 1000)}</div></div></div>
        <div class="btn-row"><button class="btn btn-light btn-sm" data-dec="${r.id}" style="width:100%">Decline</button><button class="btn btn-dark btn-sm" data-pay="${r.id}" style="width:100%">Pay</button></div></div>`).join('') : '')
      + (outgoing.length ? `<h3>Waiting on</h3><div class="list">` + outgoing.map((r) => `<div class="item">${avatar(r.to, 'sm')}<div class="mid"><div class="t">${esc(r.to.name)} · ${money(r.usd)}</div><div class="s">${esc(r.note || 'No note')}</div></div><button class="btn btn-text btn-sm" data-can="${r.id}">Cancel</button></div>`).join('') + `</div>` : '');
    $$('[data-pay]', el).forEach((b) => (b.onclick = () => { const r = incoming.find((x) => x.id === b.dataset.pay); confirmPay(r.from, r.usd, r.note, r.id); }));
    $$('[data-dec]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; try { await api(`/requests/${b.dataset.dec}`, { method: 'POST', body: { action: 'decline' } }); toast('Request declined'); loadRequests(); } catch (e) { b.disabled = false; showError(e); } }));
    $$('[data-can]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; try { await api(`/requests/${b.dataset.can}`, { method: 'POST', body: { action: 'cancel' } }); toast('Request cancelled'); loadRequests(); } catch (e) { b.disabled = false; showError(e); } }));
  }

  function txDetail(sig) {
    const f = S.feed.find((x) => x.sig === sig);
    if (!f) { location.hash = '#home'; return; }
    const p = S.people[f.with] || (f.with ? { address: f.with, unknown: true } : null);
    sheet(`<div class="confirm">${avatar(p, 'lg')}<div class="sub">${f.lamports > 0 ? 'From' : 'To'} ${esc(who(p))}${p && p.handle && !p.bank ? ` · @${esc(p.handle)}` : ''}</div>
      <div class="big">${money(usd(Math.abs(f.lamports)))}</div><div class="note">${esc(f.note || '')}</div></div>
      <div class="ledger"><div><span>Status</span><b>${f.ok ? 'Completed' : 'Failed'}</b></div><div><span>Date</span><b>${f.time ? new Date(f.time * 1000).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '—'}</b></div></div>
      ${p && p.handle && !p.bank ? `<button class="btn btn-dark" id="again">${f.lamports > 0 ? 'Pay' : 'Pay again'} ${esc(first(p))}</button>` : ''}
      <p class="fine" style="margin-top:14px"><a href="https://explorer.solana.com/tx/${sig}?cluster=devnet" target="_blank" rel="noopener">View public receipt</a></p>`, (el, close) => {
      const a = $('#again', el); if (a) a.onclick = () => { close(); location.hash = `#pay/${p.handle}`; };
    });
    history.replaceState(null, '', '#home');
  }

  /* pay / request */
  function screenPay(prefill = {}) {
    const st = { to: null, note: prefill.note || '' };
    show(`<div class="payhead"><button class="x" id="close" aria-label="Close">${ICON.x}</button><b>Pay or request</b><span style="width:32px"></span></div>
      <div class="amountin"><span>$</span><input id="amt" inputmode="decimal" autocomplete="off" placeholder="0" value="${prefill.amount || ''}" aria-label="Amount in dollars"></div>
      <div class="avail" id="avail"></div>
      <div class="to" id="toBox"></div>
      <label class="field" style="margin-top:10px"><input id="note" maxlength="80" placeholder="What's it for?" value="${esc(st.note)}"></label>
      <div class="emojis">${['🍕 Food', '🏠 Rent', '☕ Coffee', '🚗 Ride', '🎁 Gift', '🎟️ Tickets'].map((e) => `<button data-e="${e}">${e}</button>`).join('')}</div>
      <button class="splitlink" id="split">${ICON.split} Split a bill with friends</button>
      <div class="payfoot"><div class="btn-row"><button class="btn btn-light" id="req" disabled>Request</button><button class="btn btn-dark" id="pay" disabled>Pay</button></div></div>`, { tabs: false });
    const amt = $('#amt'), note = $('#note');
    const size = () => { amt.style.width = Math.max(1, (amt.value || '0').length + 0.2) + 'ch'; };
    const valid = () => {
      const v = parseFloat(amt.value);
      const okAmt = v > 0 && v <= 10000;
      const av = $('#avail');
      if (S.lamports != null) {
        const have = usd(Math.max(0, S.lamports - FEE));
        av.textContent = okAmt && v > have ? `You have ${money(have)}. You can still request it.` : `${money(have)} available`;
        av.className = 'avail' + (okAmt && v > have ? ' bad' : '');
      }
      $('#pay').disabled = !(okAmt && st.to && (S.lamports == null || v <= usd(S.lamports - FEE)));
      $('#req').disabled = !(okAmt && st.to && st.to.handle && !st.to.bank);
    };
    amt.oninput = () => {
      let v = amt.value.replace(/[^0-9.]/g, '');
      const parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
      if (v.includes('.')) v = v.split('.')[0] + '.' + v.split('.')[1].slice(0, 2);
      amt.value = v; size(); valid();
    };
    note.oninput = () => { st.note = note.value; };
    $$('.emojis button').forEach((b) => (b.onclick = () => { note.value = b.dataset.e + (note.value && !note.value.startsWith(b.dataset.e) ? ' ' + note.value : ''); st.note = note.value; note.focus(); }));
    $('#close').onclick = () => (location.hash = '#home');
    size(); refreshBalance().then(valid);

    const renderTo = () => {
      const box = $('#toBox');
      if (st.to) {
        const p = st.to;
        box.innerHTML = `<div class="chip">${avatar(p)}<div class="mid"><div class="t">${esc(who(p))}</div><div class="s">${p.handle ? '@' + esc(p.handle) : 'Account ' + esc(short(p.address))}</div></div><button class="x" id="clr" aria-label="Change">${ICON.x}</button></div>`;
        $('#clr').onclick = () => { st.to = null; renderTo(); valid(); $('#q').focus(); };
        valid(); return;
      }
      const canScan = 'BarcodeDetector' in window && navigator.mediaDevices;
      box.innerHTML = `<label class="field prefix"><span style="font-size:15px">To</span><input id="q" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="Name or @username" style="padding-left:8px">${canScan ? `<button class="scan" id="scan" aria-label="Scan a code">${ICON.scan}</button>` : ''}</label><div class="results" id="res"></div>`;
      const q = $('#q'), res = $('#res');
      const recent = () => {
        const seen = new Set(); const list = [];
        for (const f of S.feed) { const p = S.people[f.with]; if (p && !p.unknown && !p.bank && !seen.has(p.handle)) { seen.add(p.handle); list.push(p); } }
        return list.slice(0, 5);
      };
      const paint = (users, title) => {
        res.innerHTML = users.length ? `<h3 style="margin-top:14px">${title}</h3><div class="list">${users.map((u, i) => `<button class="item" data-i="${i}">${avatar(u)}<div class="mid"><div class="t">${esc(who(u))}</div><div class="s">${u.handle ? '@' + esc(u.handle) : 'Not on Monyx · ' + esc(short(u.address))}</div></div></button>`).join('')}</div>` : '';
        $$('.item', res).forEach((b) => (b.onclick = () => { st.to = users[+b.dataset.i]; renderTo(); }));
      };
      paint(recent(), 'Recent');
      let t, seq = 0;
      q.oninput = () => {
        clearTimeout(t);
        const v = q.value.trim();
        if (!v) { paint(recent(), 'Recent'); return; }
        if (isAddr(v)) { paint([S.people[v] && !S.people[v].unknown ? S.people[v] : { address: v, unknown: true }], 'Send to account'); return; }
        t = setTimeout(async () => {
          const my = ++seq;
          try {
            const { users } = await api(`/search?q=${encodeURIComponent(v)}`, { auth: false });
            if (my !== seq) return;
            const list = users.filter((u) => u.handle !== S.acct.user.handle);
            if (list.length) paint(list, 'People'); else res.innerHTML = `<div class="empty">No one called “${esc(v)}” yet.<br>Ask them to join, or paste their account number.</div>`;
          } catch {}
        }, 220);
      };
      if (canScan) $('#scan').onclick = () => scanCode((txt) => {
        const m = txt.match(/#pay\/([a-z0-9_]{3,20})(?:\/([0-9.]+))?/i);
        if (m) { lookup(m[1]).then((u) => { if (u) { st.to = u; if (m[2] && !amt.value) { amt.value = m[2]; size(); } renderTo(); } }); return; }
        const a = txt.replace(/^solana:/, '').split('?')[0];
        if (isAddr(a)) { st.to = S.people[a] && !S.people[a].unknown ? S.people[a] : { address: a, unknown: true }; renderTo(); return; }
        toast("That code isn't a Monyx link.", true);
      });
      if (!prefill.to) q.focus();
    };
    renderTo();
    if (prefill.to) lookup(prefill.to).then((u) => {
      if (!u) return toast(`No one has @${esc(prefill.to)}`, true);
      if (u.handle === S.acct.user.handle) return toast('That’s your own link. Share it so friends can pay you.');
      st.to = u; renderTo(); (amt.value ? note : amt).focus();
    });
    else if (!prefill.amount) amt.focus();

    $('#pay').onclick = () => confirmPay(st.to, parseFloat(amt.value), note.value.trim());
    $('#split').onclick = () => splitSheet(parseFloat(amt.value), note.value.trim(), st.to);
    $('#req').onclick = async () => {
      const b = $('#req'); b.disabled = true; b.innerHTML = '<span class="spin"></span>';
      try {
        await api('/requests', { method: 'POST', body: { to: st.to.handle, usd: parseFloat(amt.value), note: note.value.trim() } });
        success(`Requested ${money(parseFloat(amt.value))} from ${esc(first(st.to))}`, note.value.trim(), null, `We'll let ${esc(first(st.to))} know next time they open Monyx.`);
      } catch (e) { showError(e); b.disabled = false; b.textContent = 'Request'; }
    };
  }
  async function lookup(handle) {
    try { const { user } = await api(`/u/${encodeURIComponent(handle.replace(/^@/, ''))}`, { auth: false }); S.people[user.address] = user; return user; } catch { return null; }
  }
  function confirmPay(to, dollars, note, requestId) {
    if (to.handle && S.acct.user && to.handle === S.acct.user.handle) { toast("You can't pay yourself.", true); return; }
    const after = S.lamports != null ? usd(S.lamports) - dollars : null;
    sheet(`<div class="confirm">${avatar(to, 'lg')}<div class="sub">Pay ${esc(who(to))}${to.handle ? ` · @${esc(to.handle)}` : ''}</div>
      <div class="big">${money(dollars)}</div>${note ? `<div class="note">${esc(note)}</div>` : ''}</div>
      <div class="ledger"><div><span>From</span><b>Monyx balance</b></div>${after != null ? `<div><span>Balance after</span><b>${money(Math.max(0, after))}</b></div>` : ''}<div><span>Fee</span><b>Free</b></div></div>
      ${to.unknown ? `<div class="warn">${'This account isn’t on Monyx. Payments can’t be undone, so double-check the number.'}</div>` : ''}
      <button class="btn btn-dark" id="go">Pay ${money(dollars)}</button>`, (el, close) => {
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Sending';
        try {
          const sig = await send(to.address, dollars, note);
          if (requestId) api(`/requests/${requestId}`, { method: 'POST', body: { action: 'paid', sig } }).catch(() => {}).then(loadRequests);
          close();
          S.feed.unshift({ sig, time: Math.floor(Date.now() / 1000), ok: true, with: to.address, note, lamports: -toLamports(dollars) });
          S.people[to.address] = S.people[to.address] || to;
          success(`You paid ${esc(first(to))} ${money(dollars)}`, note, sig);
          refreshBalance();
        } catch (err) {
          b.disabled = false; b.textContent = `Pay ${money(dollars)}`;
          showError(err, 6000);
        }
      };
    });
  }
  function success(title, note, sig, extra, back = '#home') {
    show(`<section class="steps"><div class="body" style="display:grid;place-items:center;text-align:center"><div class="done">
      <div class="tick"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <h2>${title}</h2>${note ? `<p class="sub">${esc(note)}</p>` : ''}${extra ? `<p class="sub">${extra}</p>` : ''}
      ${sig ? `<p class="receipt"><a href="https://explorer.solana.com/tx/${sig}?cluster=devnet" target="_blank" rel="noopener">View receipt</a></p>` : ''}
    </div></div><div class="foot"><button class="btn btn-dark" id="done">Done</button></div></section>`);
    $('#done').onclick = () => (location.hash = back);
    history.replaceState(null, '', '#done');
  }

  function scanCode(onCode) {
    let stream, stop = false;
    const close = sheet(`<h2>Scan a Monyx code</h2><p class="sub">Point your camera at a friend's code from their Me tab.</p><div class="cam"><video id="vid" playsinline muted></video></div><button class="btn btn-text" id="cx" style="margin-top:10px">Cancel</button>`, async (el, cl) => {
      $('#cx', el).onclick = cl;
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        const v = $('#vid', el); v.srcObject = stream; await v.play();
        const det = new BarcodeDetector({ formats: ['qr_code'] });
        const tick = async () => {
          if (stop || !document.contains(v)) { stream.getTracks().forEach((t) => t.stop()); return; }
          try { const c = await det.detect(v); if (c[0]) { stop = true; stream.getTracks().forEach((t) => t.stop()); cl(); onCode(c[0].rawValue); return; } } catch {}
          requestAnimationFrame(tick);
        };
        tick();
      } catch { cl(); toast('Camera access was blocked.', true); }
    });
    return close;
  }

  /* add money */
  async function addMoney() {
    let claimed = true;
    try { claimed = (await api('/me')).bonusClaimed; } catch {}
    sheet(`<h2>Add money</h2><p class="sub">Monyx is in test mode, so money is free to add and has no real value.</p>
      ${claimed ? '' : `<button class="btn btn-dark" id="bonus" style="margin:16px 0 4px">Claim your welcome bonus</button>`}
      <h3>Get free test money</h3>
      <div class="steplist"><div>Copy your account number<button class="btn btn-light btn-sm" id="cpa">Copy</button></div>
      <div>Open the test-money site<a class="btn btn-light btn-sm" href="https://faucet.solana.com" target="_blank" rel="noopener">Open</a></div>
      <div>Paste it, pick Devnet, and request</div></div>
      <p class="sub" style="font-size:14px">It shows up here within a minute.</p>
      <h3>Or get paid by a friend</h3>
      <button class="btn btn-light" id="share">Share my pay link</button>`, (el, close) => {
      $('#cpa', el).onclick = () => copy(S.acct.address, 'Account number copied');
      $('#share', el).onclick = () => { close(); shareLink(); };
      const b = $('#bonus', el);
      if (b) b.onclick = async () => {
        b.disabled = true; b.innerHTML = '<span class="spin"></span>Claiming';
        try {
          const r = await api('/bonus', { method: 'POST' });
          if (r.status === 'sent') { close(); toast(`${money(usd(r.lamports))} added. Enjoy!`); refreshBalance(); loadFeed(); }
          else { b.textContent = r.status === 'bank_empty' ? 'Bonuses are paused right now' : r.status === 'limit' ? 'Bonus limit reached for today' : 'Already claimed'; }
        } catch (e) { b.disabled = false; b.textContent = 'Try again'; showError(e); }
      };
    });
  }
  async function shareLink() {
    store.set('monyx.shared', true);
    const url = payLink(S.acct.user.handle);
    const text = `Pay me on Monyx: @${S.acct.user.handle}`;
    if (navigator.share) { try { await navigator.share({ title: 'Monyx', text, url }); return; } catch {} }
    copy(url, 'Your pay link is copied');
  }

  /* me */
  function screenMe() {
    const u = S.acct.user;
    show(`<header class="top"><b>Me</b><span class="pill"><i></i>Test mode</span></header>
      <section class="profile">${avatar(u, 'lg')}<div class="name">${esc(u.name)}</div><div class="handle">@${esc(u.handle)}</div></section>
      <section class="qrcard"><div class="qr">${qrSvg(payLink(u.handle))}</div><p>Friends can scan this to pay you</p>
        <div class="btn-row"><button class="btn btn-dark btn-sm" id="share" style="width:100%">Share link</button><button class="btn btn-light btn-sm" id="copy" style="width:100%">Copy link</button></div></section>
      <h3>Account</h3>
      <div class="list menu">
        ${row('add', ICON.plus, 'Add money', 'Free test money')}
        ${S.acct.mode === 'key' ? row('key', ICON.key, 'Recovery key', 'Back up or move to a new device') : ''}
        ${row('guide', ICON.book, 'How Monyx works', 'A plain-language guide')}
        ${row('details', ICON.info, 'Account details', 'For the curious')}
        ${row('pro', ICON.tools, 'Monyx Pro', 'Wallet tracer and developer tools')}
        ${row('out', ICON.out, 'Log out', '')}
      </div>
      <p class="fine" style="margin-top:22px">Monyx · monyx.pro</p>`, { tabs: true, tab: 'me' });
    $('#share').onclick = shareLink;
    $('#copy').onclick = () => { store.set('monyx.shared', true); copy(payLink(u.handle), 'Link copied'); };
    $('[data-r="add"]').onclick = addMoney;
    const k = $('[data-r="key"]'); if (k) k.onclick = showKey;
    $('[data-r="details"]').onclick = details;
    $('[data-r="guide"]').onclick = () => (location.href = 'documentation/');
    $('[data-r="pro"]').onclick = () => (location.href = 'pro/');
    $('[data-r="out"]').onclick = logout;
  }
  const row = (id, ico, t, s) => `<button class="item" data-r="${id}"><span class="ico">${ico}</span><div class="mid"><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ''}</div>${ICON.chev}</button>`;
  function showKey() {
    const key = recoveryKey();
    sheet(`<h2>Recovery key</h2><p class="sub">Use this to log in on another device. Anyone who has it can spend your balance.</p>
      <div class="keybox" id="kb">${esc(key)}</div><p class="fine" style="margin-top:8px">Tap to reveal</p>
      <button class="btn btn-dark" id="cp" style="margin-top:8px">Copy key</button>`, (el) => {
      $('#kb', el).onclick = (e) => e.currentTarget.classList.toggle('show');
      $('#cp', el).onclick = () => copy(key, 'Recovery key copied');
    });
  }
  function details() {
    sheet(`<h2>Account details</h2><p class="sub">Monyx runs on Solana, a public payment network. You never need any of this, but it's here if you want it.</p>
      <div class="ledger">
        <div class="kv" style="display:block"><b>Account number</b>${esc(S.acct.address)}</div>
        <div><span>Network</span><b>Solana devnet (test)</b></div>
        <div><span>Held by</span><b>${S.acct.mode === 'phantom' ? 'Phantom wallet' : 'This browser'}</b></div>
        <div><span>Rate</span><b>1 SOL = ${money(S.price)}</b></div>
      </div>
      <div class="btn-row"><button class="btn btn-light btn-sm" id="cpa" style="width:100%">Copy number</button><a class="btn btn-light btn-sm" style="width:100%" href="https://explorer.solana.com/address/${S.acct.address}?cluster=devnet" target="_blank" rel="noopener">Explorer</a></div>`, (el) => {
      $('#cpa', el).onclick = () => copy(S.acct.address, 'Account number copied');
    });
  }
  function logout() {
    sheet(`<h2>Log out?</h2><p class="sub">${S.acct.mode === 'key' ? 'You’ll need your recovery key to get back in. Your money stays in your account.' : 'You can log back in with Phantom any time.'}</p>
      <div class="btn-row" style="margin-top:18px"><button class="btn btn-light" id="no">Cancel</button><button class="btn btn-dark" id="yes">Log out</button></div>`, (el, close) => {
      $('#no', el).onclick = close;
      $('#yes', el).onclick = async () => {
        api('/logout', { method: 'POST' }).catch(() => {});
        store.del(`monyx.feed.${S.acct.address}`); store.del('monyx.acct');
        S.acct = null; S.kp = null; S.feed = []; S.lamports = null; S.requests = { incoming: [], outgoing: [] };
        close(); location.hash = '';
      };
    });
  }

  /* ───────── invest ───────── */
  async function loadMarkets() {
    try {
      const m = await api('/markets', { auth: false });
      S.markets = m; store.set('monyx.markets', m);
      if (m.solPrice > 0) { S.price = m.solPrice; store.set('monyx.price', m.solPrice); }
    } catch {}
    return S.markets;
  }
  // A buy is a payment plus a server call. If the call fails after the
  // payment lands, the signature is kept here and finished on the next load.
  const pendingBuys = {
    list: () => store.get('monyx.pendingBuys', []),
    add(asset, sig) { store.set('monyx.pendingBuys', [...this.list(), { asset, sig, t: Date.now() }]); },
    remove(sig) { store.set('monyx.pendingBuys', this.list().filter((p) => p.sig !== sig)); },
    async settle() {
      for (const p of this.list()) {
        try { await api('/trade/buy', { method: 'POST', body: { asset: p.asset, sig: p.sig } }); this.remove(p.sig); }
        catch (e) { if (['used', 'stale', 'mismatch'].includes(e.code) || Date.now() - p.t > 3600_000) this.remove(p.sig); }
      }
    },
  };
  async function loadPortfolio() {
    if (!S.acct || !S.acct.token) return null;
    if (pendingBuys.list().length) await pendingBuys.settle();
    try { S.port = await api('/portfolio'); } catch (e) { if (e.status === 401) relogin(); }
    return S.port;
  }
  async function bankAddress() {
    if (S.bankAddr) return S.bankAddr;
    const b = await api('/bank', { auth: false });
    S.bankAddr = b.address; store.set('monyx.bank', b.address);
    return b.address;
  }
  const coin = (a, size = '') => `<div class="av coin ${size}" style="background:${esc(a.color)}">${esc(a.symbol.slice(0, 4))}</div>`;
  const pct = (v) => (v == null ? '' : `${v >= 0 ? '+' : '−'}${Math.abs(v).toFixed(2)}%`);
  const fmtPrice = (p) => (p >= 1 ? money(p) : '$' + Number(p).toPrecision(3));
  const fmtQty = (q, sym) => `${q >= 1 ? q.toLocaleString('en-US', { maximumFractionDigits: 4 }) : Number(q).toPrecision(4).replace(/0+$/, '').replace(/\.$/, '')} ${sym}`;
  function spark(arr, w = 72, h = 28, strokeW = 1.6) {
    if (!arr || arr.length < 2) return '';
    const min = Math.min(...arr), max = Math.max(...arr), span = max - min || 1;
    const pts = arr.map((v, i) => `${((i / (arr.length - 1)) * w).toFixed(1)},${(h - 2 - ((v - min) / span) * (h - 4)).toFixed(1)}`).join(' ');
    const up = arr[arr.length - 1] >= arr[0];
    return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" width="${w}" height="${h}" aria-hidden="true"><polyline fill="none" stroke="${up ? 'var(--green)' : 'var(--red)'}" stroke-width="${strokeW}" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke" points="${pts}"/></svg>`;
  }
  const holdingOf = (id) => (S.port && S.port.holdings.find((h) => h.id === id)) || null;
  const assetById = (id) => (S.markets && S.markets.assets.find((a) => a.id === id)) || null;

  function screenInvest() {
    show(`<header class="top"><b>Invest</b><span class="pill"><i></i>Test mode</span></header>
      <section class="balance">
        <div class="label"><span>Your crypto</span><span id="pvchg"></span></div>
        <div class="amount" id="pv"><div class="skeleton" style="width:50%;height:44px;border-radius:12px"></div></div>
        <div class="btn-row"><button class="btn btn-light" id="swapBtn">${ICON.swap.replace('<svg', '<svg width="18" height="18" style="fill:none;stroke:currentColor;stroke-width:1.8"')}Swap</button><button class="btn btn-dark" id="buyBtn">Buy crypto</button></div>
      </section>
      <div id="holdings"></div>
      <h3>Markets</h3>
      <div class="list" id="mkts">${'<div class="item"><div class="mid"><div class="skeleton" style="width:60%"></div></div></div>'.repeat(4)}</div>
      <p class="fine" style="margin-top:16px">Prices from CoinGecko, refreshed every minute.<br>Test mode: trades use play money.</p>`, { tabs: true, tab: 'invest' });
    $('#buyBtn').onclick = () => pickAsset('What do you want to buy?', null, buySheet);
    $('#swapBtn').onclick = () => swapSheet();
    paintInvest();
    Promise.all([loadMarkets(), loadPortfolio(), refreshBalance()]).then(paintInvest);
  }
  function paintInvest() {
    const pv = $('#pv'); if (!pv) return;
    if (S.port) {
      const [d, c] = S.port.total.toFixed(2).split('.');
      pv.innerHTML = `<small>$</small>${Number(d).toLocaleString('en-US')}<span class="cents">.${c}</span>`;
      const day = S.port.holdings.reduce((a, h) => a + (h.change24h != null ? h.value - h.value / (1 + h.change24h / 100) : 0), 0);
      $('#pvchg').innerHTML = S.port.total > 0 ? `<span class="${day >= 0 ? 'up' : 'down'}">${day >= 0 ? '+' : '−'}${money(Math.abs(day))} today</span>` : '';
      $('#holdings').innerHTML = S.port.holdings.length ? `<h3>Your coins</h3><div class="list">${S.port.holdings.map((h) => `<button class="item" data-a="${esc(h.id)}">${coin(h)}<div class="mid"><div class="t">${esc(h.name)}</div><div class="s">${esc(fmtQty(h.qty, h.symbol))}</div></div><div style="text-align:right"><div class="amt">${money(h.value)}</div><div class="s ${h.change24h >= 0 ? 'up' : 'down'}">${pct(h.change24h)}</div></div></button>`).join('')}</div>`
        : `<div class="hint" style="text-align:center;margin:14px 0 0">You don't own any crypto yet. Start with as little as $1.</div>`;
    }
    if (S.markets) {
      $('#mkts').innerHTML = S.markets.assets.map((a) => `<button class="item" data-a="${esc(a.id)}">${coin(a)}<div class="mid"><div class="t">${esc(a.name)}</div><div class="s">${esc(a.symbol)}</div></div>${spark(a.spark)}<div style="text-align:right;min-width:84px"><div class="amt">${fmtPrice(a.price)}</div><div class="s ${a.change24h >= 0 ? 'up' : 'down'}">${pct(a.change24h)}</div></div></button>`).join('');
    }
    $$('[data-a]').forEach((b) => (b.onclick = () => assetSheet(assetById(b.dataset.a) || holdingOf(b.dataset.a))));
  }
  function assetSheet(a) {
    if (!a) return;
    const h = holdingOf(a.id);
    sheet(`<div class="assethead">${coin(a, 'md')}<div><div class="t">${esc(a.name)}</div><div class="s">${esc(a.symbol)}</div></div></div>
      <div class="big" style="font-size:40px;font-weight:600;letter-spacing:-.03em;margin-top:14px">${fmtPrice(a.price)}</div>
      <div class="${a.change24h >= 0 ? 'up' : 'down'}" style="font-size:14px;font-weight:500">${pct(a.change24h)} today</div>
      <div class="bigspark">${spark(a.spark, 320, 110, 2.2)}</div><div class="fine" style="text-align:left;margin:-4px 0 14px">Past 7 days</div>
      ${h ? `<div class="ledger"><div><span>You own</span><b>${esc(fmtQty(h.qty, a.symbol))}</b></div><div><span>Worth</span><b>${money(h.value)}</b></div></div>` : ''}
      <div class="btn-row">${h ? `<button class="btn btn-light" id="sell">Sell</button>` : `<button class="btn btn-light" id="swap">Swap into ${esc(a.symbol)}</button>`}<button class="btn btn-dark" id="buy">Buy</button></div>
      ${h ? `<button class="btn btn-text" id="swap" style="margin-top:4px">Swap ${esc(a.symbol)} for another coin</button>` : ''}`, (el, close) => {
      $('#buy', el).onclick = () => { close(); buySheet(a); };
      const sl = $('#sell', el); if (sl) sl.onclick = () => { close(); sellSheet(a); };
      $('#swap', el).onclick = () => { close(); h ? swapSheet(a.id) : swapSheet(null, a.id); };
    });
  }
  function pickAsset(title, only, cb) {
    const list = only || (S.markets ? S.markets.assets : []);
    if (!list.length) { toast('Prices are still loading.', true); return; }
    sheet(`<h2>${title}</h2><div class="list" style="margin-top:14px">${list.map((a, i) => `<button class="item" data-i="${i}">${coin(a)}<div class="mid"><div class="t">${esc(a.name)}</div><div class="s">${a.qty != null ? esc(fmtQty(a.qty, a.symbol)) : esc(a.symbol)}</div></div><div class="amt">${a.value != null ? money(a.value) : fmtPrice(a.price)}</div></button>`).join('')}</div>`, (el, close) => {
      $$('[data-i]', el).forEach((b) => (b.onclick = () => { close(); cb(list[+b.dataset.i]); }));
    });
  }
  // Shared dollar-amount sheet for buy and sell.
  function amountSheet({ title, sub, max, maxLabel, cta, preview, onGo }) {
    sheet(`<h2>${title}</h2><p class="sub">${sub}</p>
      <div class="amountin" style="padding:14px 0 6px"><span>$</span><input id="amt" inputmode="decimal" autocomplete="off" placeholder="0"></div>
      <div class="avail" id="prev" style="margin:0 0 14px"></div>
      <div class="emojis" style="justify-content:center;margin-bottom:16px">${[10, 25, 50, 100].map((v) => `<button data-v="${v}">$${v}</button>`).join('')}${max > 0 ? `<button data-v="max">${maxLabel}</button>` : ''}</div>
      <button class="btn btn-dark" id="go" disabled>${cta}</button>`, (el, close) => {
      const amt = $('#amt', el), go = $('#go', el), prev = $('#prev', el);
      let all = false;
      const upd = () => {
        const v = parseFloat(amt.value);
        amt.style.width = Math.max(1, (amt.value || '0').length + 0.2) + 'ch';
        const ok = v >= 1 && v <= max + 0.005;
        go.disabled = !ok;
        prev.className = 'avail' + (v > max + 0.005 ? ' bad' : '');
        prev.textContent = v > max + 0.005 ? `You have ${money(max)} available` : v > 0 ? preview(v) : `${money(max)} available · $1 minimum`;
      };
      amt.oninput = () => { all = false; amt.value = amt.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(\.\d\d).+/, '$1'); upd(); };
      $$('[data-v]', el).forEach((b) => (b.onclick = () => { all = b.dataset.v === 'max'; amt.value = all ? (Math.floor(max * 100) / 100).toFixed(2) : b.dataset.v; upd(); }));
      upd(); amt.focus();
      go.onclick = async () => {
        go.disabled = true; go.innerHTML = '<span class="spin"></span>Working on it';
        try { await onGo(parseFloat(amt.value), all, close); }
        catch (e) { go.disabled = false; go.textContent = cta; showError(e, 6000); }
      };
    });
  }
  function buySheet(a) {
    const cash = S.lamports != null ? Math.max(0, usd(S.lamports - 20000)) : 0;
    amountSheet({
      title: `Buy ${esc(a.name)}`, sub: `Paid from your Monyx cash. 1 ${esc(a.symbol)} = ${fmtPrice(a.price)}`,
      max: cash, maxLabel: 'All cash', cta: `Buy ${esc(a.symbol)}`,
      preview: (v) => `You'll get about ${fmtQty(v / a.price, a.symbol)}`,
      async onGo(v, _all, close) {
        const sig = await send(await bankAddress(), v, `Buy ${a.symbol}`);
        pendingBuys.add(a.id, sig);
        let r, tries = 0;
        while (!r) {
          try { r = await api('/trade/buy', { method: 'POST', body: { asset: a.id, sig } }); }
          catch (e) {
            if (e.code === 'used') { pendingBuys.remove(sig); break; }
            if (++tries >= 3) { close(); toast("Your payment went through. We're still adding the coins and will finish next time you open Monyx.", false, 7000); return; }
            await new Promise((s) => setTimeout(s, 1500));
          }
        }
        pendingBuys.remove(sig);
        if (!r) { close(); loadPortfolio(); return; }
        close(); refreshBalance(); loadPortfolio(); S.feed = [];
        success(`You bought ${money(r.usd)} of ${esc(a.name)}`, fmtQty(r.qty, r.symbol), sig, null, '#invest');
      },
    });
  }
  function sellSheet(a) {
    const h = holdingOf(a.id); if (!h) return;
    amountSheet({
      title: `Sell ${esc(a.name)}`, sub: `Money goes back to your Monyx cash. You own ${esc(fmtQty(h.qty, a.symbol))}.`,
      max: h.value, maxLabel: 'Sell all', cta: `Sell ${esc(a.symbol)}`,
      preview: (v) => `You'll sell about ${fmtQty(v / a.price, a.symbol)}`,
      async onGo(v, all, close) {
        const r = await api('/trade/sell', { method: 'POST', body: { asset: a.id, usd: v, all } });
        close(); refreshBalance(); loadPortfolio(); S.feed = [];
        success(`You sold ${money(r.usd)} of ${esc(a.name)}`, 'The money is back in your balance.', r.signature, null, '#invest');
      },
    });
  }
  function swapSheet(fromId, toId) {
    const owned = S.port ? S.port.holdings : [];
    if (!owned.length) { toast('Buy some crypto first, then you can swap it.'); return; }
    const st = { from: owned.find((h) => h.id === fromId) || owned[0], to: null };
    st.to = assetById(toId) || (S.markets.assets.find((x) => x.id !== st.from.id && x.id === 'usd-coin') || S.markets.assets.find((x) => x.id !== st.from.id));
    if (st.to && st.to.id === st.from.id) st.to = S.markets.assets.find((x) => x.id !== st.from.id);
    sheet(`<h2>Swap</h2><p class="sub">Trade one coin for another at today's price. No fees.</p>
      <div class="swapbox"><button class="swaprow" id="sf"></button><button class="swapflip" id="flip" aria-label="Flip">${ICON.swap}</button><button class="swaprow" id="stt"></button></div>
      <div class="amountin" style="padding:14px 0 6px"><span>$</span><input id="amt" inputmode="decimal" autocomplete="off" placeholder="0"></div>
      <div class="avail" id="prev" style="margin:0 0 14px"></div>
      <div class="emojis" style="justify-content:center;margin-bottom:16px"><button data-v="half">Half</button><button data-v="max">All</button></div>
      <button class="btn btn-dark" id="go" disabled>Swap</button>`, (el, close) => {
      const amt = $('#amt', el), go = $('#go', el), prev = $('#prev', el);
      let all = false;
      const row = (a, label, sub) => `<span class="lbl">${label}</span>${coin(a, 'sm')}<span class="mid"><b>${esc(a.name)}</b><span class="s">${sub}</span></span>${ICON.chev}`;
      const paint = () => {
        $('#sf', el).innerHTML = row(st.from, 'From', `${money(st.from.value)} available`);
        $('#stt', el).innerHTML = row(st.to, 'To', fmtPrice(st.to.price));
        const v = parseFloat(amt.value);
        amt.style.width = Math.max(1, (amt.value || '0').length + 0.2) + 'ch';
        const ok = v > 0 && v <= st.from.value + 0.005;
        go.disabled = !ok;
        prev.className = 'avail' + (v > st.from.value + 0.005 ? ' bad' : '');
        prev.textContent = v > st.from.value + 0.005 ? `You have ${money(st.from.value)} of ${st.from.symbol}` : v > 0 ? `${fmtQty(v / st.from.price, st.from.symbol)} → about ${fmtQty(v / st.to.price, st.to.symbol)}` : ' ';
      };
      $('#sf', el).onclick = () => pickAsset('Swap from', owned, (h) => { st.from = h; if (st.to.id === h.id) st.to = S.markets.assets.find((x) => x.id !== h.id); amt.value = ''; paint(); });
      $('#stt', el).onclick = () => pickAsset('Swap to', S.markets.assets.filter((x) => x.id !== st.from.id), (x) => { st.to = x; paint(); });
      $('#flip', el).onclick = () => { const h = holdingOf(st.to.id); if (!h) { toast(`You don't own any ${st.to.symbol} yet.`); return; } const f = st.from; st.from = h; st.to = assetById(f.id) || f; amt.value = ''; paint(); };
      amt.oninput = () => { all = false; amt.value = amt.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(\.\d\d).+/, '$1'); paint(); };
      $$('[data-v]', el).forEach((b) => (b.onclick = () => { all = b.dataset.v === 'max'; amt.value = (Math.floor((all ? st.from.value : st.from.value / 2) * 100) / 100).toFixed(2); paint(); }));
      paint(); amt.focus();
      go.onclick = async () => {
        go.disabled = true; go.innerHTML = '<span class="spin"></span>Swapping';
        try {
          const r = await api('/trade/swap', { method: 'POST', body: { from: st.from.id, to: st.to.id, usd: parseFloat(amt.value), all } });
          close(); loadPortfolio();
          success(`Swapped ${money(r.usd)}`, `${fmtQty(r.qtyFrom, r.from)} → ${fmtQty(r.qtyTo, r.to)}`, null, null, '#invest');
        } catch (e) { go.disabled = false; go.textContent = 'Swap'; showError(e); }
      };
    });
  }

  /* ───────── activity ───────── */
  function screenActivity(tab = 'pay') {
    show(`<header class="top"><b>Activity</b><span class="pill"><i></i>Test mode</span></header>
      <div class="seg" id="seg"><button data-t="pay" class="${tab === 'pay' ? 'on' : ''}">Payments</button><button data-t="trade" class="${tab === 'trade' ? 'on' : ''}">Crypto</button></div>
      <div class="list" id="${tab === 'pay' ? 'feed' : 'trades'}" data-limit="100" style="margin-top:14px"><div class="item"><div class="mid"><div class="skeleton" style="width:60%"></div></div></div></div>`, { tabs: true, tab: 'activity' });
    $$('#seg button').forEach((b) => (b.onclick = () => screenActivity(b.dataset.t)));
    if (tab === 'pay') { if (S.feed.length) paintFeed(); loadFeed(); }
    else Promise.all([loadMarkets(), loadPortfolio()]).then(paintTrades);
  }
  function paintTrades() {
    const el = $('#trades'); if (!el || !S.port) return;
    const name = (id) => (id === 'cash' ? 'cash' : (assetById(id) || { symbol: id }).symbol);
    if (!S.port.trades.length) { el.innerHTML = `<div class="empty">No trades yet.<br><a href="#invest">Buy your first crypto</a></div>`; return; }
    el.innerHTML = S.port.trades.map((t) => {
      const a = assetById(t.kind === 'sell' ? t.asset_from : t.asset_to) || { symbol: '?', color: '#999' };
      const title = t.kind === 'buy' ? `Bought <b>${esc(name(t.asset_to))}</b>` : t.kind === 'sell' ? `Sold <b>${esc(name(t.asset_from))}</b>` : `Swapped <b>${esc(name(t.asset_from))}</b> for <b>${esc(name(t.asset_to))}</b>`;
      const sub = t.kind === 'sell' ? fmtQty(Number(t.qty_from), name(t.asset_from)) : fmtQty(Number(t.qty_to), name(t.asset_to));
      return `<div class="item">${coin(a)}<div class="mid"><div class="t">${title}</div><div class="s">${esc(sub)} · ${when(Date.parse(t.created_at) / 1000)}</div></div><div class="amt ${t.kind === 'sell' ? 'in' : ''}">${t.kind === 'swap' ? money(Number(t.usd)) : money(Number(t.usd) * (t.kind === 'sell' ? 1 : -1), true)}</div></div>`;
    }).join('');
  }

  /* ───────── split a bill ───────── */
  function splitSheet(total, note, preset) {
    if (!(total > 0)) { toast('Enter the total first, then split it.'); $('#amt') && $('#amt').focus(); return; }
    const st = { people: preset && preset.handle && !preset.bank ? [preset] : [], me: true };
    sheet(`<h2>Split ${money(total)}</h2><p class="sub">We'll send everyone a request for their share.</p>
      <label class="field prefix" style="margin-top:14px"><span style="font-size:15px">Add</span><input id="sq" autocapitalize="off" spellcheck="false" placeholder="Name or @username" style="padding-left:8px"></label>
      <div id="sres"></div><div class="list" id="sppl" style="margin-top:12px"></div>
      <label class="check" style="margin:14px 2px"><input type="checkbox" id="sme" checked><span>Include me in the split</span></label>
      <div class="ledger" id="sum"></div>
      <button class="btn btn-dark" id="go" disabled>Send requests</button>`, (el, close) => {
      const share = () => Math.round((total / (st.people.length + (st.me ? 1 : 0))) * 100) / 100;
      const paint = () => {
        $('#sppl', el).innerHTML = st.people.map((p, i) => `<div class="item">${avatar(p, 'sm')}<div class="mid"><div class="t">${esc(p.name)}</div><div class="s">@${esc(p.handle)}</div></div><span class="amt">${money(share())}</span><button class="x" data-rm="${i}" aria-label="Remove">${ICON.x}</button></div>`).join('');
        $('#sppl', el).style.display = st.people.length ? '' : 'none';
        $$('[data-rm]', el).forEach((b) => (b.onclick = () => { st.people.splice(+b.dataset.rm, 1); paint(); }));
        const n = st.people.length;
        $('#sum', el).innerHTML = `<div><span>Each person pays</span><b>${n ? money(share()) : '—'}</b></div><div><span>You collect</span><b>${n ? money(share() * n) : '—'}</b></div>`;
        const go = $('#go', el); go.disabled = !n; go.textContent = n ? `Request ${money(share())} from ${n} ${n === 1 ? 'person' : 'people'}` : 'Add people to split with';
      };
      $('#sme', el).onchange = (e) => { st.me = e.target.checked; paint(); };
      let t;
      $('#sq', el).oninput = (e) => {
        clearTimeout(t); const v = e.target.value.trim();
        if (!v) { $('#sres', el).innerHTML = ''; return; }
        t = setTimeout(async () => {
          try {
            const { users } = await api(`/search?q=${encodeURIComponent(v)}`, { auth: false });
            const list = users.filter((u) => u.handle !== S.acct.user.handle && !st.people.some((p) => p.handle === u.handle));
            $('#sres', el).innerHTML = list.length ? `<div class="list" style="margin-top:8px">${list.map((u, i) => `<button class="item" data-i="${i}">${avatar(u, 'sm')}<div class="mid"><div class="t">${esc(u.name)}</div><div class="s">@${esc(u.handle)}</div></div>${ICON.plus.replace('<svg', '<svg width="18" height="18" style="fill:none;stroke:currentColor;stroke-width:2"')}</button>`).join('')}</div>` : `<div class="hint">No one called “${esc(v)}” on Monyx yet.</div>`;
            $$('[data-i]', $('#sres', el)).forEach((b) => (b.onclick = () => { st.people.push(list[+b.dataset.i]); $('#sq', el).value = ''; $('#sres', el).innerHTML = ''; paint(); }));
          } catch {}
        }, 220);
      };
      paint();
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Sending';
        const each = share(); let sent = 0;
        for (const p of st.people) { try { await api('/requests', { method: 'POST', body: { to: p.handle, usd: each, note: note || 'Split' } }); sent++; } catch {} }
        close();
        success(`Split sent to ${sent} ${sent === 1 ? 'person' : 'people'}`, note, null, `Each owes you ${money(each)}. You'll see it here when they pay.`);
      };
    });
  }

  /* ───────── routing ───────── */
  async function route() {
    const h = location.hash.slice(1);
    const [view, a, b, c] = h.split('/');
    const signedIn = !!(S.acct && S.acct.user && S.acct.token);
    if (view === 'pay' && a && !signedIn) {
      store.set('monyx.pending', '#' + h);
      const u = await lookup(a);
      screenWelcome(u ? `<div class="banner">${avatar(u, 'sm')}<span>Create an account or log in to pay <b>${esc(u.name)}</b>${b ? ` ${money(parseFloat(b))}` : ''}.</span></div>` : '');
      return;
    }
    if (!signedIn) {
      if (view === 'login') return screenLogin();
      if (view === 'signup') { if (!S.signup) S.signup = { step: 1, name: '', handle: '', kp: null }; return S.signup.step === 1 ? stepName() : undefined; }
      return screenWelcome();
    }
    if (view === 'pay') return screenPay({ to: a, amount: b && parseFloat(b) > 0 ? parseFloat(b).toFixed(2).replace(/\.00$/, '') : '', note: c ? decodeURIComponent(c) : '' });
    if (view === 'me') return screenMe();
    if (view === 'invest') return screenInvest();
    if (view === 'activity') return screenActivity();
    if (view === 'tx') { if (!$('#feed')) screenHome(); return txDetail(a); }
    if (view !== 'home') history.replaceState(null, '', '#home');
    screenHome();
  }

  function boot() {
    try { for (const k of Object.keys(localStorage)) if (k.startsWith('keelpay.') && localStorage.getItem('monyx.' + k.slice(8)) == null) localStorage.setItem('monyx.' + k.slice(8), localStorage.getItem(k)); } catch {}
    S.acct = S.acct || store.get('monyx.acct');
    if (S.acct && S.acct.mode === 'key' && S.acct.secret) { try { S.kp = keypairFrom(S.acct.secret); } catch { S.acct = null; } }
    if (S.acct && !S.acct.token) { S.acct = null; S.kp = null; store.del('monyx.acct'); } // signup interrupted before the account existed
    window.addEventListener('hashchange', route);
    loadPrice().then(() => { paintBalance(); paintFeed(); });
    route();
    setInterval(() => { if (S.acct && S.acct.token && !document.hidden) { refreshBalance(); if ($('#feed')) { loadFeed(); loadRequests(); } } }, 20000);
    setInterval(loadPrice, 120000);
    loadMarkets();
  }
  boot();
})();
