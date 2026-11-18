// Monyx: the money app you can talk to. Pay anyone by voice or @username.
// Every account is a Solana devnet keypair held in this browser (or Phantom).
// Money is USDC (digital dollars), so $1 is always $1. The Monyx bank pays
// every network fee, so nobody needs SOL. Edge functions: "monyx" maps
// usernames to accounts and stores requests; "monyx-pay" co-signs payments
// as fee payer, hands out test dollars and runs claim links. Neither can move
// anyone's money.
(() => {
  'use strict';
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx';
  const VAPI = API + '-voice';
  const PAPI = API + '-pay';
  let RPC = 'https://api.devnet.solana.com'; // monyx-pay /info can point this at a faster endpoint (see loadInfo)
  const USDC = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU'; // Circle's devnet USDC
  const TOKEN = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
  const ATA_PROGRAM = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
  const MEMO = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr';
  const SITE = location.origin + location.pathname.replace(/index\.html$/, '');
  // The mark: a violet tile with a white "m". Simple enough to read at favicon size.
  const MARK = '<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="9"/><path d="M10 21v-7.2a3 3 0 0 1 6 0V21m0-7.2a3 3 0 0 1 6 0V21"/></svg>';
  const LOGO = `<span class="logo">${MARK}monyx</span>`;
  const U = 1e6; // USDC has 6 decimals
  const W = () => window.solanaWeb3;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const app = $('#app');
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const cleanAddr = (s) => String(s || '').replace(/^solana:/i, '').split('?')[0].replace(/[\s\u200b-\u200d\ufeff]/g, '');
  const isSelf = (p) => !!(p && S.acct && ((p.address && p.address === S.acct.address) || (p.handle && S.acct.user && p.handle === S.acct.user.handle)));
  const isAddr = (s) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s || '');
  const short = (a) => `${a.slice(0, 4)}…${a.slice(-4)}`;
  const store = {
    get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };
  const ICON = {
    bell: '<svg viewBox="0 0 24 24"><path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
    x: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>',
    scan: '<svg viewBox="0 0 24 24"><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M7 12h10"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
    key: '<svg viewBox="0 0 24 24"><circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l3 3"/></svg>',
    lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5"/></svg>',
    spark: '<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
    camera: '<svg viewBox="0 0 24 24"><path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1.5-2h6L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z"/><circle cx="12" cy="12.5" r="3.5"/></svg>',
    check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    book: '<svg viewBox="0 0 24 24"><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z"/></svg>',
    out: '<svg viewBox="0 0 24 24"><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 16l-4-4 4-4M6 12h10"/></svg>',
    tools: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg>',
    split: '<svg viewBox="0 0 24 24"><path d="M12 3v7M12 10 5 17M12 10l7 7M5 17v4M19 17v4"/></svg>',
    swap: '<svg viewBox="0 0 24 24"><path d="M7 4 3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>',
    mic: '<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/></svg>',
    speaker: '<svg viewBox="0 0 24 24"><path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  };

  /* ───────── money ───────── */
  const S = {
    acct: store.get('monyx.acct'),       // { mode, secret?, address, token, user }
    kp: null, cash: null,
    feed: [], people: store.get('monyx.people', {}), requests: { incoming: [], outgoing: [] },
    markets: store.get('monyx.markets', null), port: null, bankAddr: store.get('monyx.bank2', null),
    drafts: [], claims: [], inboxAt: Date.now(), lastMs: null,
    signup: null, timers: [],
    voice: { server: store.get('monyx.voiceServer', null), talk: store.get('monyx.talkback', true), announce: store.get('monyx.announce', true), feedSeen: false, reqSeen: null },
  };
  const usd = (units) => units / U;
  const toUnits = (dollars) => Math.round(dollars * U);
  const money = (v, sign = false) => {
    const s = Math.abs(v).toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
    return sign ? (v > 0 ? '+' : v < 0 ? '−' : '') + s : s;
  };
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
  const b64 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode(...u8.subarray(i, i + 0x8000)); return btoa(s); };
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
    try { r = await fetch(/^https:/.test(path) ? path : API + path, { method, headers, body: body ? JSON.stringify(body) : undefined }); }
    catch { throw userError(OFFLINE, { status: 0 }); }
    const j = await r.json().catch(() => ({}));
    if (!r.ok) {
      // The server only sends user-facing text; still, never show a 5xx's detail.
      const msg = r.status >= 500 && r.status !== 503 ? GENERIC : (j.message || GENERIC);
      throw userError(msg, { code: j.error, status: r.status });
    }
    return j;
  }
  // While S.holdKey is set (signup or login, before the passkey lock step) the
  // account lives only in memory: the raw key is never written to storage.
  function saveAcct() { if (S.holdKey) return; store.set('monyx.acct', S.acct); }

  /* ───────── chain ───────── */
  async function rpc(method, params, tries = 4) {
    for (let i = 0; i < tries; i++) {
      let j;
      try {
        const r = await fetch(RPC, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }) });
        if (r.status === 429 || r.status >= 500) throw new Error('busy');
        j = await r.json();
      } catch (e) { if (i === tries - 1) throw e; await new Promise((s) => setTimeout(s, 350 * 2 ** i)); continue; }
      if (j.error) throw Object.assign(new Error(j.error.message), { rpc: true }); // a real answer: don't retry
      return j.result;
    }
  }
  // Your dollars live in your USDC account, an address derived from your account number.
  function ataOf(owner) {
    const { PublicKey } = W();
    return PublicKey.findProgramAddressSync([new PublicKey(owner).toBuffer(), new PublicKey(TOKEN).toBuffer(), new PublicKey(USDC).toBuffer()], new PublicKey(ATA_PROGRAM))[0];
  }
  async function usdcOf(owner) {
    try { return Number((await rpc('getTokenAccountBalance', [ataOf(owner).toBase58()])).value.amount); }
    catch (e) { if (e.rpc) return 0; throw e; } // no USDC account yet = $0
  }
  async function refreshBalance() {
    if (!S.acct) return;
    try { S.cash = await usdcOf(S.acct.address); paintBalance(); } catch {}
  }
  async function loadInfo() {
    try {
      const i = await api(PAPI + '/info', { auth: false });
      S.bankAddr = i.bank; store.set('monyx.bank2', i.bank);
      if (i.rpc && /^https:\/\//.test(i.rpc)) { RPC = i.rpc; store.set('monyx.rpc', i.rpc); }
    } catch {}
  }
  async function bankAddr() {
    if (!S.bankAddr) await loadInfo();
    return S.bankAddr;
  }
  // Build "owner sends USDC to someone", sign it, and hand it to Monyx, which
  // checks it and adds its signature as the fee payer. Nobody needs SOL.
  async function usdcSend({ owner, signer, to, units, note, closeEscrow = false }) {
    const { PublicKey, Transaction, TransactionInstruction, SystemProgram } = W();
    const bank = new PublicKey(await bankAddr());
    const o = new PublicKey(owner), t = new PublicKey(to), mint = new PublicKey(USDC), tok = new PublicKey(TOKEN);
    const data = new Uint8Array(10); data[0] = 12; new DataView(data.buffer).setBigUint64(1, BigInt(units), true); data[9] = 6;
    const tx = new Transaction()
      .add(new TransactionInstruction({ programId: new PublicKey(ATA_PROGRAM), data: Buffer.from([1]), keys: [
        { pubkey: bank, isSigner: true, isWritable: true }, { pubkey: ataOf(to), isSigner: false, isWritable: true },
        { pubkey: t, isSigner: false, isWritable: false }, { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }, { pubkey: tok, isSigner: false, isWritable: false }] }))
      .add(new TransactionInstruction({ programId: tok, data: Buffer.from(data), keys: [
        { pubkey: ataOf(owner), isSigner: false, isWritable: true }, { pubkey: mint, isSigner: false, isWritable: false },
        { pubkey: ataOf(to), isSigner: false, isWritable: true }, { pubkey: o, isSigner: true, isWritable: false }] }));
    if (note) tx.add(new TransactionInstruction({ programId: new PublicKey(MEMO), keys: [], data: Buffer.from(note.slice(0, 80), 'utf8') }));
    if (closeEscrow) tx.add(new TransactionInstruction({ programId: tok, data: Buffer.from([9]), keys: [
      { pubkey: ataOf(owner), isSigner: false, isWritable: true }, { pubkey: bank, isSigner: false, isWritable: true }, { pubkey: o, isSigner: true, isWritable: false }] }));
    tx.recentBlockhash = (await rpc('getLatestBlockhash', [{ commitment: 'confirmed' }])).value.blockhash;
    tx.feePayer = bank;
    const signed = signer === 'phantom' ? await phantom().signTransaction(tx) : (tx.partialSign(signer), tx);
    const raw = signed.serialize({ requireAllSignatures: false, verifySignatures: false });
    return await api(PAPI + '/relay', { method: 'POST', body: { tx: b64(raw) }, auth: false });
  }
  async function send(toAddress, dollars, note) {
    const units = toUnits(dollars);
    try {
      const have = await usdcOf(S.acct.address);
      if (have < units) throw userError(`You have ${money(usd(have))}. Add money to send ${money(dollars)}.`);
      const r = await usdcSend({ owner: S.acct.address, signer: S.acct.mode === 'phantom' ? 'phantom' : S.kp, to: toAddress, units, note });
      if (r.pending) throw userError("The network is busy, so your payment is still landing. Check Activity in a minute before trying again.");
      S.lastMs = r.ms || null;
      S.cash = Math.max(0, have - units); paintBalance();
      return r.sig;
    } catch (e) {
      if (e.safe) throw e;
      console.error('[monyx] send:', e);
      if (/user rejected|rejected the request|declined/i.test(String(e.message))) throw userError('Payment cancelled.');
      if (/failed to fetch|network/i.test(String(e.message))) throw userError(OFFLINE);
      throw userError("The payment didn't go through. Nothing was sent.");
    }
  }

  // Activity: read recent USDC movements and turn them into "who, how much, why".
  async function loadFeed() {
    if (!S.acct) return;
    const me = S.acct.address;
    const cacheKey = `monyx.usdcfeed.${me}`;
    if (!S.feed.length) S.feed = store.get(cacheKey, []);
    try {
      const sigs = await rpc('getSignaturesForAddress', [ataOf(me).toBase58(), { limit: 25 }]);
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
      announceFeed([...got.values()].filter(Boolean));
    } catch { paintFeed(); }
  }
  function toEntry(tx, s, me) {
    // Who gained and who lost USDC in this transaction.
    const delta = new Map();
    for (const [list, sign] of [[tx.meta.preTokenBalances, -1], [tx.meta.postTokenBalances, 1]])
      for (const b of list || []) if (b.mint === USDC && b.owner) delta.set(b.owner, (delta.get(b.owner) || 0) + sign * Number(b.uiTokenAmount.amount));
    const mine = delta.get(me) || 0;
    if (!mine) return null;
    let withAddr = null, best = 0;
    for (const [o, d] of delta) if (o !== me && Math.sign(d) === -Math.sign(mine) && Math.abs(d) > best) { best = Math.abs(d); withAddr = o; }
    let note = '';
    const ix = [...tx.transaction.message.instructions];
    for (const inner of tx.meta.innerInstructions || []) ix.push(...inner.instructions);
    for (const x of ix) if (x.program === 'spl-memo' && typeof x.parsed === 'string') note = x.parsed;
    return { sig: s.signature, time: s.blockTime, ok: !s.err, with: withAddr, note, amount: mine };
  }
  async function resolvePeople(addresses) {
    if (store.get('monyx.peopleV') !== 2) { S.people = {}; store.set('monyx.people', {}); store.set('monyx.peopleAt', 0); store.set('monyx.peopleV', 2); }
    const b = S.bankAddr || store.get('monyx.bank2');
    if (b) S.people[b] = { handle: 'monyx', name: 'Monyx', address: b, bank: true };
    const fresh = Date.now() - store.get('monyx.peopleAt', 0) < 600_000;
    const need = [...new Set(addresses)].filter((a) => !(S.people[a] && S.people[a].link) && (!fresh || !S.people[a]));
    if (!need.length) return;
    if (!fresh) store.set('monyx.peopleAt', Date.now());
    try {
      const { users } = await api(`/resolve?a=${need.join(',')}`);
      for (const a of need) S.people[a] = users[a] || { address: a, unknown: true };
      store.set('monyx.people', S.people);
    } catch {}
  }
  async function loadRequests() {
    if (!S.acct || !S.acct.token) return;
    try { S.requests = await api('/requests'); paintRequests(); announceRequests(); }
    catch (e) { if (e.status === 401) relogin(); }
  }

  /* ───────── pieces ───────── */
  // Mid-tone colours that carry white initials in both light and dark mode.
  const PALETTE = ['#7c5cf5', '#14a37a', '#e0574f', '#2f80ed', '#d68a12', '#1aa0b8', '#c2507a', '#5f6b7d'];
  function avatar(p, size = '') {
    if (!p) return `<div class="av ${size} addr">?</div>`;
    if (p.bank) return `<div class="av ${size} bank">${MARK}</div>`;
    if (p.link && !p.handle) return `<div class="av ${size} linkav">${ICON.link}</div>`;
    if (p.unknown || !p.name) return `<div class="av ${size} addr">#</div>`;
    let h = 2166136261; for (const c of p.handle || p.name) h = Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0; // FNV-1a spreads similar names across colours
    const ini = p.name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
    const photo = p.avatar ? `<img src="${esc(p.avatar)}" alt="" loading="lazy" data-fallback>` : '';
    return `<div class="av ${size}" style="background:${PALETTE[h % PALETTE.length]}">${esc(ini)}${photo}</div>`;
  }
  const who = (p) => (p && !p.unknown ? (p.bank ? 'Monyx' : p.name) : (p ? short(p.address) : 'Someone'));
  // Full names in toasts, chips and receipts, so two people called Maya can't be confused.
  const first = (p) => who(p);
  function when(t) {
    if (!t) return 'Pending';
    const d = new Date(t * 1000), now = new Date();
    const s = (now - d) / 1000;
    if (s < 60) return 'Just now';
    if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400 && d.toDateString() === now.toDateString()) return `${Math.floor(s / 3600)}h ago`;
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
  function sheet(html, onMount, onClose) {
    const wrap = document.createElement('div');
    wrap.className = 'sheet-wrap';
    wrap.innerHTML = `<div class="sheet" role="dialog" aria-modal="true"><div class="grab"></div>${html}</div>`;
    let closed = false;
    const close = () => { if (closed) return; closed = true; wrap.remove(); document.removeEventListener('keydown', onKey); onClose && onClose(); };
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
  function show(html, { tabs = false, tab = '', pad = false } = {}) {
    document.querySelectorAll('.sheet-wrap').forEach((w) => w.remove()); // a new screen closes any open sheet
    if (S.padKey) { document.removeEventListener('keydown', S.padKey); S.padKey = null; }
    document.body.classList.toggle('has-tabs', !!tabs);
    document.body.classList.toggle('padmode', !!pad);
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
        <div class="bubble b2 say"><span class="mic">${ICON.mic}</span><div><b>“Pay Jordan 42.50 for tickets”</b><span>Ready to send · tap to confirm</span></div></div>
      </div></div>
      <h1>Just say<br>who to pay.</h1>
      <p class="sub">Tell Monyx “send Maya 20 for pizza” and it’s ready to go. Split dinner, ask for money back, hear when you get paid. No bank details, no fees.</p>
      ${banner || ''}
      <div class="cta">
        <button class="btn btn-dark" id="goSignup">Create your account</button>
        <button class="btn btn-text" id="goLogin">I already have an account</button>
      </div>
      <p class="fine">Monyx is in test mode: balances are test dollars with no real value. <a href="../documentation/">How it works</a> · <a href="../privacy/">Privacy</a> · <a href="../terms/">Terms</a></p>
    </section>`);
    $('#goSignup').onclick = () => startSignup();
    $('#goLogin').onclick = () => (location.hash = '#login');
  }

  function dots(n) { const tot = S.signup && S.signup.lockStep ? 4 : 3; return `<div class="dots">${Array.from({ length: tot }, (_, i) => i + 1).map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</div>`; }
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
      <label class="field" style="margin-top:22px"><input id="nm" autocomplete="name" placeholder="First and last name" value="${esc(su.name)}" maxlength="40" aria-describedby="hint"></label>
      <div class="hint" id="hint"></div>`,
      `<button class="btn btn-dark" id="next">Continue</button>`));
    const nm = $('#nm'), next = $('#next'), hint = $('#hint');
    nm.oninput = () => { hint.className = 'hint'; hint.textContent = nm.value.length >= 40 ? 'Names can be up to 40 characters.' : ''; };
    nm.focus();
    nm.onkeydown = (e) => { if (e.key === 'Enter') next.click(); };
    $('#back').onclick = () => { location.hash = ''; };
    next.onclick = () => {
      const v = nm.value.trim();
      if (v.length < 2) { hint.className = 'hint bad'; hint.textContent = 'Add your name so friends know it’s you.'; nm.focus(); return; }
      su.name = v; if (!su.handle) su.handle = suggest(su.name); stepHandle();
    };
  }
  const suggest = (name) => {
    const p = name.toLowerCase().normalize('NFD').replace(/[^a-z\s]/g, '').split(/\s+/).filter(Boolean);
    return ((p[0] || 'me') + (p[1] ? p[1][0] : '')).slice(0, 18);
  };
  function stepHandle() {
    const su = S.signup;
    show(stepShell(2, `<h2>Pick your @username</h2><p class="sub">People pay you with this. Short and easy to say out loud works best.</p>
      <label class="field prefix" style="margin-top:22px"><span>@</span><input id="hd" autocapitalize="off" autocorrect="off" spellcheck="false" maxlength="20" value="${esc(su.handle)}"></label>
      <div class="hint" id="hint" aria-live="polite"></div>`,
      `<button class="btn btn-dark" id="next">Create account</button>`));
    const hd = $('#hd'), hint = $('#hint'), next = $('#next');
    let t, seq = 0;
    const check = async () => {
      const v = hd.value.toLowerCase().replace(/[^a-z0-9_]/g, '');
      const stripped = v !== hd.value.toLowerCase();
      if (v !== hd.value) hd.value = v;
      if (stripped) { hint.className = 'hint bad'; hint.textContent = 'Usernames can only use letters, numbers and _.'; }
      su.handle = v; su.avail = false;
      if (v.length < 3) { hint.className = 'hint'; hint.textContent = 'At least 3 letters or numbers.'; return; }
      const my = ++seq;
      hint.className = 'hint'; hint.textContent = 'Checking…';
      try {
        const r = await api(`/check?handle=${encodeURIComponent(v)}`, { auth: false });
        if (my !== seq) return;
        su.avail = r.available;
        hint.className = 'hint ' + (r.available ? 'ok' : 'bad');
        hint.textContent = r.available ? `@${v} is yours if you want it.` : `${r.reason || 'Taken'}. Try @${v}${Math.floor(Math.random() * 90 + 10)}?`;
      } catch { hint.className = 'hint bad'; hint.textContent = "Couldn't check right now."; }
    };
    hd.oninput = () => { clearTimeout(t); t = setTimeout(check, 280); };
    hd.onkeydown = (e) => { if (e.key === 'Enter') next.click(); };
    check(); hd.focus();
    $('#back').onclick = stepName;
    next.onclick = async () => {
      if (!su.avail) {
        // Say why instead of a dead button.
        hint.className = 'hint bad';
        if (su.handle.length < 3) hint.textContent = 'Usernames need at least 3 letters or numbers.';
        else if (/^Checking/.test(hint.textContent)) hint.textContent = 'One sec, still checking that name.';
        else if (!/Try @/.test(hint.textContent)) hint.textContent = `@${su.handle} isn't available. Try another.`;
        hd.focus(); return;
      }
      next.disabled = true; next.innerHTML = '<span class="spin"></span>Setting things up';
      try {
        if (!su.kp) su.kp = W().Keypair.generate();
        S.kp = su.kp;
        const address = su.kp.publicKey.toBase58();
        S.acct = { mode: 'key', secret: Array.from(su.kp.secretKey), address, token: null, user: null };
        S.holdKey = passkeysPossible();   // key stays in memory until the passkey lock is on
        saveAcct();
        const p = await proof(address);
        const r = await api('/register', { method: 'POST', auth: false, body: { ...p, name: su.name, handle: su.handle, bonus: false } });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        // Welcome dollars arrive while they save their key.
        su.bonus = api(PAPI + '/topup', { method: 'POST' }).catch(() => null);
        // Passkey lock is the default: offer it before the backup key.
        if (passkeysPossible()) { su.lockStep = true; stepLock(); } else stepKey();
      } catch (e) {
        next.disabled = false; next.textContent = 'Create account';
        hint.className = 'hint bad'; hint.textContent = friendly(e);
        if (!e.safe && /Ed25519|not supported/i.test(String(e.message))) hint.textContent = 'This browser is too old to create a secure key. Try the latest Chrome, Safari or Firefox.';
      }
    };
  }
  function stepLock(login) {
    const body = `<div class="lockhero">${ICON.lock}</div>
      <h2>${login ? 'Lock Monyx on this device' : 'Lock it with Face ID or a fingerprint'}</h2>
      <p class="sub">Your account key is encrypted on this device and only opens with your face, fingerprint or device PIN. It's never saved in plain text.</p>
      <ul class="lockpts"><li>No password or seed phrase to memorize</li><li>Your key never leaves this device</li>${login ? '' : '<li>You also get a backup key, saved to your password manager</li>'}</ul>
      <div class="hint" id="hint" aria-live="polite"></div>
      <details class="adv" id="adv"><summary>Advanced</summary><p>Skipping stores your key unencrypted in this browser. Anyone with access to this device could copy it.</p><button class="btn btn-light btn-sm" id="skip">Skip and store it unencrypted</button></details>`;
    show(login ? `<section class="steps"><div class="topline"><span></span><span></span><span></span></div><div class="body">${body}</div><div class="foot"><button class="btn btn-dark" id="next">Turn on passkey lock</button></div></section>`
      : stepShell(3, body, `<button class="btn btn-dark" id="next">Turn on passkey lock</button>`, false));
    const next = $('#next'), hint = $('#hint');
    const after = () => {
      if (login) { location.hash = store.get('monyx.pending') || '#home'; store.del('monyx.pending'); route(); }
      else stepKey();
    };
    const fallback = () => { S.holdKey = false; saveAcct(); after(); };
    next.onclick = async () => {
      next.disabled = true; next.innerHTML = '<span class="spin"></span>Waiting for your passkey';
      try { await enablePasskeyLock(); if (S.signup) S.signup.locked = true; toast('Locked with your passkey'); after(); }
      catch (err) {
        next.disabled = false; next.textContent = 'Try again';
        hint.className = 'hint bad';
        if (err.safe && err.message === NO_PRF) {
          // This device can't do it: fall back to the backup key, stored the old way.
          hint.textContent = "This device's passkeys can't encrypt Monyx yet, so your key will be kept in this browser. Keep your backup key safe.";
          next.textContent = 'Continue'; next.onclick = fallback;
        } else hint.textContent = err.safe ? err.message : 'That didn’t work. Try again.';
      }
    };
    $('#skip').onclick = fallback;
  }
  function recoveryKey() { return b58enc(Uint8Array.from(S.acct.secret || S.secretMem)); }
  function stepKey() {
    const key = recoveryKey();
    const locked = S.signup && S.signup.locked;
    show(stepShell(S.signup && S.signup.lockStep ? 4 : 3, `${locked ? `<h2>Save a backup key</h2>
      <p class="sub">Your passkey opens Monyx on this device. This backup gets you in on a new phone or if you lose this one. We can't reset it for you.</p>` : `<h2>Save your recovery key</h2>
      <p class="sub">It's the only way back into your account if you switch phones or clear your browser. We can't reset it for you.</p>`}
      <div class="keybox" id="kb" title="Tap to reveal" role="button" tabindex="0">Tap to reveal</div>
      <button class="btn btn-dark btn-sm" id="pm" style="margin-top:10px;width:100%">Save to my password manager</button>
      <div class="btn-row" style="margin-top:8px"><button class="btn btn-light btn-sm" id="cp" style="width:100%">Copy</button><button class="btn btn-light btn-sm" id="dl" style="width:100%">Download</button></div>
      <div class="warn">${ICON.info.replace('<svg', '<svg width="18" height="18" style="flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.8"')}<span>Anyone with this key can spend your balance. Never share it, not even with Monyx.</span></div>
      <label class="check"><input type="checkbox" id="ok"><span>I saved my recovery key somewhere safe.</span></label>
      <div class="hint" id="hint" aria-live="polite"></div>`,
      `<button class="btn btn-dark" id="next">Continue</button>`, false));
    const kb = $('#kb');
    const reveal = (on) => { kb.classList.toggle('show', on); kb.textContent = on ? key : 'Tap to reveal'; };
    kb.onclick = () => reveal(!kb.classList.contains('show'));
    $('#cp').onclick = () => { reveal(true); copy(key, 'Recovery key copied'); };
    $('#pm').onclick = async () => { await saveToPasswordManager(key); };
    $('#dl').onclick = () => {
      const blob = new Blob([`Monyx recovery key for @${S.acct.user.handle}\n\n${key}\n\nKeep this private. Anyone with it can spend your balance.\nTo log in on a new device, open ${SITE} and choose "I already have an account".\n`], { type: 'text/plain' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `monyx-recovery-${S.acct.user.handle}.txt`; a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    };
    $('#ok').onchange = () => ($('#hint').textContent = '');
    $('#next').onclick = () => {
      if (!$('#ok').checked) { const h = $('#hint'); h.className = 'hint bad'; h.textContent = 'Save your key, then tick the box. You can’t get back in without it.'; return; }
      stepDone();
    };
  }
  async function stepDone() {
    const b = S.signup && (await S.signup.bonus);
    const got = b && b.status === 'sent';
    show(`<section class="steps"><div class="body" style="display:grid;place-items:center;text-align:center">
      <div><div class="tick"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <h2>You're in, ${esc(S.acct.user.name.split(' ')[0])}.</h2>
      <p class="sub">${got ? `We added <b style="color:var(--ink)">${money(b.usd)}</b> in test dollars so you can try it out.` : 'Add money from your home screen whenever you’re ready.'}</p>
      <p class="sub">Friends can pay you at <b style="color:var(--ink)">@${esc(S.acct.user.handle)}</b>.</p></div>
    </div><div class="foot"><button class="btn btn-dark" id="go">Go to Monyx</button>${S.acct.mode === 'key' && passkeysPossible() && !vault.get() && !(S.signup && S.signup.lockStep) ? '<button class="btn btn-text" id="pk">Lock Monyx with Face ID or a fingerprint</button>' : ''}</div></section>`);
    $('#go').onclick = () => { const p = store.get('monyx.pending'); store.del('monyx.pending'); location.hash = p || '#home'; };
    const pk = $('#pk');
    if (pk) pk.onclick = async () => {
      pk.disabled = true;
      try { await enablePasskeyLock(); pk.textContent = 'Locked with your passkey ✓'; }
      catch (err) { pk.disabled = false; showError(err, 6000); }
    };
    S.signup = null;
  }

  function screenLogin() {
    show(`<section class="steps">
      <div class="topline"><button class="back" id="back" aria-label="Back">${ICON.back}</button><span></span><span></span></div>
      <div class="body"><h2>Welcome back</h2><p class="sub">Paste the recovery key you saved when you signed up.</p>
        <form id="lf" autocomplete="on">
          <label class="field"><input name="username" id="lu" autocomplete="username" placeholder="@username (optional)" aria-label="Username, optional"></label>
          <label class="field" style="margin-top:12px"><input type="password" id="rk" name="password" autocomplete="current-password" spellcheck="false" autocapitalize="off" placeholder="Your recovery key" aria-label="Recovery key"><button type="button" class="showk" id="showk">Show</button></label>
        </form>
        <p class="fine" style="margin-top:8px">Saved it in a password manager? It can fill this in for you.</p>
        <div class="hint" id="hint"></div></div>
      <div class="foot"><button class="btn btn-dark" id="go" disabled>Log in</button>
        <button class="btn btn-text" id="ph">Use a Phantom wallet instead</button></div>
    </section>`);
    const rk = $('#rk'), go = $('#go'), hint = $('#hint');
    go.disabled = false;
    $('#lf').onsubmit = (e) => { e.preventDefault(); go.click(); };
    $('#showk').onclick = () => { const v = rk.type === 'password'; rk.type = v ? 'text' : 'password'; $('#showk').textContent = v ? 'Hide' : 'Show'; };
        // Chrome can hand over a saved Monyx key directly.
    if (window.PasswordCredential) navigator.credentials.get({ password: true, mediation: 'optional' }).then((c) => { if (c && c.password && !rk.value) { rk.value = c.password; if (c.id) $('#lu').value = c.id; } }).catch(() => {});
    rk.oninput = () => { hint.textContent = ''; };
    $('#back').onclick = () => (location.hash = '');
    go.onclick = async () => {
      let kp;
      if (!rk.value.trim()) { hint.className = 'hint bad'; hint.textContent = 'Paste the recovery key you saved when you signed up.'; rk.focus(); return; }
      if (rk.value.trim().length < 40) { hint.className = 'hint bad'; hint.textContent = 'That’s too short. A recovery key is about 88 letters and numbers.'; rk.focus(); return; }
      try { kp = parseRecovery(rk.value); } catch { hint.className = 'hint bad'; hint.textContent = "That doesn't look like a Monyx recovery key."; return; }
      go.disabled = true; go.innerHTML = '<span class="spin"></span>Logging in';
      S.kp = kp;
      S.acct = { mode: 'key', secret: Array.from(kp.secretKey), address: kp.publicKey.toBase58(), token: null, user: null };
      vault.del(); S.secretMem = null; S.holdKey = passkeysPossible();
      try {
        const r = await api('/login', { method: 'POST', auth: false, body: await proof(S.acct.address) });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        if (S.holdKey) { stepLock(true); return; }
        location.hash = store.get('monyx.pending') || '#home'; store.del('monyx.pending');
      } catch (e) {
        go.disabled = false; go.textContent = 'Log in';
        S.holdKey = false;
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
        const r = await api('/register', { method: 'POST', auth: false, body: { ...(await proof(address)), name: $('#nm').value, handle: $('#hd').value, bonus: false } });
        S.acct.token = r.token; S.acct.user = r.user; saveAcct();
        S.signup = { bonus: api(PAPI + '/topup', { method: 'POST' }).catch(() => null) }; stepDone();
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
    show(`<header class="top"><a class="me" href="#me">${avatar(u, 'sm')}<span>Hi, ${esc(u.name.split(' ')[0])}</span></a><span class="topr"><span class="pill"><i></i>Test mode</span><button class="bell" id="bell" aria-label="Notifications">${ICON.bell}<i id="bellN" hidden></i></button></span></header>
      <section class="balance">
        <div class="label"><span>Balance</span><span class="cur">USD</span></div>
        <div class="amount" id="bal"><div class="skeleton" style="width:60%;height:44px;border-radius:12px"></div></div>
        <a class="cryptorow" id="cryptoRow" href="#invest" hidden><span>Crypto</span><b id="cryptoVal"></b>${ICON.chev}</a>
        <div class="btn-row"><button class="btn btn-light" id="add">Add money</button><a class="btn btn-dark" href="#pay">Pay or request</a></div>
      </section>
      <button class="talkbar" id="talk"><span class="mic">${ICON.mic}</span><span class="mid"><b>Just say it</b><span>“${esc(sampleCmd())}”</span></span></button>
      <div id="start"></div>
      <div id="drafts"></div>
      <div id="reqs"></div>
      <div id="ppl"></div>
      <h3 class="hrow"><span>Activity</span><a href="#activity">See all</a></h3>
      <div class="list" id="feed" data-limit="6"><div class="item"><div class="mid"><div class="skeleton" style="width:70%"></div></div></div><div class="item"><div class="mid"><div class="skeleton" style="width:50%"></div></div></div></div>`, { tabs: true, tab: 'home' });
    $('#add').onclick = addMoney;
    $('#talk').onclick = talk;
    paintBalance(); paintRequests(); paintPeople(); if (S.feed.length) paintFeed();
    paintDrafts(); refreshBalance(); loadFeed(); loadRequests(); loadDrafts();
    loadPortfolio().then(paintCryptoRow);
  }
  function paintCryptoRow() {
    const r = $('#cryptoRow'); if (!r || !S.port) return;
    r.hidden = !(S.port.total > 0);
    $('#cryptoVal').textContent = money(S.port.total);
  }
  function paintBalance() {
    const el = $('#bal'); if (!el || S.cash == null) return;
    const v = usd(S.cash);
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
      { t: 'Add money', s: 'Get free test money to try things out', done: S.cash > 0, go: addMoney },
      { t: 'Send your first payment', s: 'Pay a friend by their @username', done: S.feed.some((f) => f.amount < 0 && f.with && !(S.people[f.with] || {}).bank), go: () => (location.hash = '#pay') },
      { t: 'Share your pay link', s: 'So friends can pay you', done: !!store.get('monyx.shared'), go: shareLink },
      { t: 'Add a profile photo', s: 'So friends know it’s really you', done: !!S.acct.user.avatar, go: () => { location.hash = '#me'; setTimeout(pickPhoto, 50); } },
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
      const incoming = f.amount > 0;
      const title = !f.with ? 'Account activity' : p && p.bank ? bankTitle(f, incoming) : incoming ? `<b>${esc(who(p))}</b> paid you` : `You paid <b>${esc(who(p))}</b>`;
      const sub = [f.note && !(p && p.bank) ? esc(f.note) : '', when(f.time)].filter(Boolean).join(' · ');
      return `<a class="item" href="#tx/${f.sig}">${avatar(p)}<div class="mid"><div class="t">${title}</div><div class="s">${sub}${f.ok ? '' : ' · Failed'}</div></div><div class="amt ${incoming ? 'in' : ''}">${money(usd(f.amount), true)}</div></a>`;
    }).join('');
  }
  function bankTitle(f, incoming) {
    const n = f.note || '';
    if (/welcome/i.test(n)) return '<b>Monyx</b> welcome dollars';
    if (/^Test money/.test(n)) return '<b>Monyx</b> test dollars';
    if (/^Sold /.test(n)) return `Sold <b>${esc(n.slice(5))}</b>`;
    if (/^Buy /.test(n)) return `Bought <b>${esc(n.slice(4))}</b>`;
    return incoming ? '<b>Monyx</b> paid you' : 'Paid <b>Monyx</b>';
  }
  // Activity shows the requests you've sent that are still open.
  function paintSentRequests() {
    const el = $('#sentreqs'); if (!el) return;
    const out = (S.requests && S.requests.outgoing) || [];
    el.innerHTML = out.length ? `<h3 style="margin-top:14px">Requests you sent</h3><div class="list">${out.map((r) => `<div class="item">${avatar(r.to, 'sm')}<div class="mid"><div class="t">You asked <b>${esc(who(r.to))}</b></div><div class="s">${esc(r.note || 'No note')} · ${when(Date.parse(r.created) / 1000)} · Waiting</div></div><div class="amt">${money(r.usd)}</div></div>`).join('')}</div><h3 style="margin-top:18px">Payments</h3>` : '';
  }
  // Bell: open requests for you + assistant drafts waiting for your OK.
  function paintBell() {
    const n = ((S.requests && S.requests.incoming) || []).length + ((S.drafts) || []).length;
    const b = $('#bellN'); if (!b) return;
    b.hidden = !n; b.textContent = n > 9 ? '9+' : String(n);
    $('#bell').setAttribute('aria-label', n ? `${n} notification${n > 1 ? 's' : ''}` : 'Notifications');
    $('#bell').onclick = () => {
      const t = $('#drafts') && S.drafts && S.drafts.length ? $('#drafts') : $('#reqs');
      if (n && t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else toast('You’re all caught up.');
    };
  }
  function paintRequests() {
    paintBell();
    const el = $('#reqs'); if (!el) return;
    const { incoming = [], outgoing = [] } = S.requests;
    if (!incoming.length && !outgoing.length) { el.innerHTML = ''; el.dataset.h = ''; return; }
    const html = (incoming.length ? `<h3>Requests for you</h3>` + incoming.map((r) => `<div class="req">
        <div class="row">${avatar(r.from)}<div><div class="t"><b>${esc(r.from.name)}</b> requests <b>${money(r.usd)}</b></div><div class="s">${esc(r.note || 'No note')} · ${when(Date.parse(r.created) / 1000)}</div></div></div>
        <div class="btn-row"><button class="btn btn-light btn-sm" data-dec="${r.id}" style="width:100%">Decline</button><button class="btn btn-dark btn-sm" data-pay="${r.id}" style="width:100%">Pay</button></div></div>`).join('') : '')
      + (outgoing.length ? `<h3>Waiting on</h3><div class="list">` + outgoing.map((r) => `<div class="item">${avatar(r.to, 'sm')}<div class="mid"><div class="t">${esc(r.to.name)} · ${money(r.usd)}</div><div class="s">${esc(r.note || 'No note')}</div></div><button class="btn btn-text btn-sm" data-can="${r.id}">Cancel</button></div>`).join('') + `</div>` : '');
    // Polling repaints this list; skip identical repaints so a tap never lands on a button that was just replaced.
    if (el.dataset.h === html) return;
    el.innerHTML = html; el.dataset.h = html;
    $$('[data-pay]', el).forEach((b) => (b.onclick = () => { const r = incoming.find((x) => x.id === b.dataset.pay); confirmPay(r.from, r.usd, r.note, r.id); }));
    $$('[data-dec]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; try { await api(`/requests/${b.dataset.dec}`, { method: 'POST', body: { action: 'decline' } }); toast('Request declined'); loadRequests(); } catch (e) { b.disabled = false; showError(e); } }));
    $$('[data-can]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; try { await api(`/requests/${b.dataset.can}`, { method: 'POST', body: { action: 'cancel' } }); toast('Request cancelled'); loadRequests(); } catch (e) { b.disabled = false; showError(e); } }));
  }

  function txDetail(sig) {
    const f = S.feed.find((x) => x.sig === sig);
    if (!f) { location.hash = '#home'; return; }
    const p = S.people[f.with] || (f.with ? { address: f.with, unknown: true } : null);
    sheet(`<div class="confirm">${avatar(p, 'lg')}<div class="sub">${f.amount > 0 ? 'From' : 'To'} ${esc(who(p))}${p && p.handle && !p.bank ? ` · @${esc(p.handle)}` : ''}</div>
      <div class="big">${money(usd(Math.abs(f.amount)))}</div><div class="note">${esc(f.note || '')}</div></div>
      <div class="ledger"><div><span>Status</span><b>${f.ok ? 'Completed' : 'Failed'}</b></div><div><span>Date</span><b>${f.time ? new Date(f.time * 1000).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : '–'}</b></div></div>
      ${p && p.handle && !p.bank ? `<button class="btn btn-dark" id="again">${f.amount > 0 ? 'Pay' : 'Pay again'} ${esc(first(p))}</button>` : ''}
      <p class="fine" style="margin-top:14px"><a href="https://explorer.solana.com/tx/${sig}?cluster=devnet" target="_blank" rel="noopener">View public receipt</a></p>`, (el, close) => {
      const a = $('#again', el); if (a) a.onclick = () => { close(); location.hash = `#pay/${p.handle}`; };
    });
    history.replaceState(null, '', '#home');
  }

  /* money pad: the Cash App-style keypad behind the $ tab */
  function screenPad() {
    let v = S.padV || '';
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del'];
    show(`<div class="pad">
      <div class="padtop"><button class="x mic" id="vmic" aria-label="Say who to pay instead">${ICON.mic}</button><span class="padcur">USD</span><span class="x" aria-hidden="true"></span></div>
      <div class="padmid"><div class="padamt" id="padamt" role="status" aria-live="polite" aria-label="Amount"><span class="d">$</span><span id="padv">0</span></div>
      <div class="padsub" id="padsub">&nbsp;</div><div class="padhint">Type an amount with your keyboard, then press Enter</div></div>
      <div class="keypad" role="group" aria-label="Keypad">${keys.map((k) => `<button class="key" data-k="${k}" aria-label="${k === 'del' ? 'Delete' : k === '.' ? 'Decimal point' : k}">${k === 'del' ? '<svg viewBox="0 0 24 24"><path d="M9 6h11v12H9l-5-6z"/><path d="M12.5 9.5l5 5M17.5 9.5l-5 5"/></svg>' : k}</button>`).join('')}</div>
      <div class="padact"><button class="btn padbtn" id="padreq">Request</button><button class="btn padbtn" id="padpay">Pay</button></div>
    </div>`, { tabs: true, tab: 'pay', pad: true });
    const amtEl = $('#padamt'), vEl = $('#padv'), sub = $('#padsub');
    const shake = () => { amtEl.classList.remove('shake'); void amtEl.offsetWidth; amtEl.classList.add('shake'); navigator.vibrate && navigator.vibrate(30); };
    let neg = false;   // a typed minus sign: shown, and nothing can be sent until it's cleared
    const paint = () => {
      const txt = v || '0';
      vEl.textContent = (neg ? '−' : '') + txt.replace(/^(\d+)/, (d) => Number(d).toLocaleString('en-US'));
      amtEl.classList.toggle('neg', neg);
      if (neg) { sub.textContent = 'Amounts can’t be negative. Press delete to clear it.'; sub.classList.add('bad'); S.padV = ''; return; }
      amtEl.dataset.len = Math.min(9, txt.length);
      amtEl.classList.toggle('zero', !v || +v === 0);
      S.padV = v;
      if (S.cash != null) {
        const have = usd(Math.max(0, S.cash)); const n = parseFloat(v) || 0;
        sub.textContent = n > have ? `You have ${money(have)}. You can still request it.` : `${money(have)} available`;
        sub.classList.toggle('bad', n > have);
      }
    };
    const press = (k) => {
      let next = v;
      if (k === '-') { neg = true; shake(); paint(); return; }
      if (k === 'del') { if (neg && !v) { neg = false; paint(); return; } next = v.slice(0, -1); if (neg && !next) { neg = false; } }
      else if (k === '.') { if (v.includes('.')) return shake(); next = (v || '0') + '.'; }
      else if (v === '0') next = k;
      else if (v.includes('.') && v.split('.')[1].length >= 2) return shake();
      else next = v + k;
      if (parseFloat(next) > 10000) { sub.textContent = 'You can send up to $10,000 at a time.'; sub.classList.add('bad'); return shake(); }
      v = next; paint();
    };
    const go = (mode) => {
      const n = parseFloat(v);
      if (neg || !(n > 0)) return shake();
      if (mode === 'pay' && S.cash != null && n > usd(S.cash)) { shake(); toast(`You have ${money(usd(Math.max(0, S.cash)))}. Add money first, or request it instead.`, true); return; }
      location.hash = `#send/${n.toFixed(2).replace(/\.00$/, '')}${mode === 'request' ? '/r' : ''}`;
    };
    $$('.key').forEach((b) => (b.onclick = () => { press(b.dataset.k); navigator.vibrate && navigator.vibrate(6); }));
    $('#padpay').onclick = () => go('pay');
    $('#padreq').onclick = () => go('request');
    $('#vmic').onclick = talk;
    S.padKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || document.querySelector('.sheet-wrap')) return;
      const t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
      let k = null;
      if (/^[0-9]$/.test(e.key)) k = e.key; else if (e.key === '.' || e.key === ',') k = '.'; else if (e.key === 'Backspace' || e.key === 'Delete') k = 'del'; else if (e.key === '-' || e.key === '−') k = '-';
      if (k) { e.preventDefault(); press(k); if (k === '-') return; const b = $(`.key[data-k="${k}"]`); if (b) { b.classList.add('down'); setTimeout(() => b.classList.remove('down'), 120); } return; }
      if (e.key === 'Enter') { e.preventDefault(); go(e.shiftKey ? 'request' : 'pay'); }
      if (e.key === 'Escape') { v = ''; neg = false; paint(); }
    };
    document.addEventListener('keydown', S.padKey);
    paint(); refreshBalance().then(paint);
  }

  /* pay / request */
  function screenPay(prefill = {}) {
    const st = { to: null, note: prefill.note || '' };
    show(`<div class="payhead"><button class="x" id="close" aria-label="Close">${ICON.x}</button><b>Pay or request</b><button class="x mic" id="vmic" aria-label="Say it instead">${ICON.mic}</button></div>
      <div class="amountin"><span>$</span><input id="amt" inputmode="decimal" autocomplete="off" placeholder="0" value="${prefill.amount || ''}" aria-label="Amount in dollars"></div>
      <div class="avail" id="avail"></div>
      <div class="to" id="toBox"></div>
      <label class="field" style="margin-top:10px"><input id="note" maxlength="80" placeholder="What's it for?" value="${esc(st.note)}"></label>
      <div class="emojis">${['🍕 Food', '🏠 Rent', '☕ Coffee', '🚗 Ride', '🎁 Gift', '🎟️ Tickets'].map((e) => `<button data-e="${e}">${e}</button>`).join('')}</div>
      <button class="splitlink" id="split">${ICON.split} Split a bill with friends</button>
      <button class="splitlink" id="vialink">${ICON.link} Send with a link, to anyone</button>
      <div class="payfoot"><div class="btn-row"><button class="btn btn-light" id="req" disabled>Request</button><button class="btn btn-dark" id="pay" disabled>Pay</button></div></div>`, { tabs: false });
    const amt = $('#amt'), note = $('#note');
    const size = () => { amt.style.width = Math.max(1, (amt.value || '0').length + 0.2) + 'ch'; };
    const valid = () => {
      const v = parseFloat(amt.value);
      const okAmt = v > 0 && v <= 10000;
      const av = $('#avail');
      if (S.cash != null) {
        const have = usd(Math.max(0, S.cash));
        av.textContent = okAmt && v > have ? `You have ${money(have)}. You can still request it.` : `${money(have)} available`;
        av.className = 'avail' + (okAmt && v > have ? ' bad' : '');
      }
      $('#pay').disabled = !(okAmt && st.to && !isSelf(st.to) && (S.cash == null || v <= usd(S.cash)));
      $('#req').disabled = !(okAmt && st.to && st.to.handle && !st.to.bank);
      $('#vialink').hidden = !!st.to;
    };
    amt.oninput = () => {
      const before = amt.value;
      let v = /-/.test(before) ? '' : amt.value.replace(/[^0-9.]/g, '');
      const parts = v.split('.'); if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
      if (v.includes('.')) v = v.split('.')[0] + '.' + v.split('.')[1].slice(0, 2);
      amt.value = v; size(); valid();
      const av = $('#avail');
      if (/-/.test(before)) { av.className = 'avail bad'; av.textContent = 'Amounts can’t be negative.'; }
      else if (/\.\d{3}/.test(before)) { av.className = 'avail bad'; av.textContent = 'Dollars only go to 2 decimal places (cents).'; }
    };
    note.oninput = () => { st.note = note.value; };
    $$('.emojis button').forEach((b) => (b.onclick = () => { note.value = b.dataset.e + (note.value && !note.value.startsWith(b.dataset.e) ? ' ' + note.value : ''); st.note = note.value; note.focus(); }));
    $('#close').onclick = () => (location.hash = prefill.fromPad ? '#pay' : '#home');
    if (prefill.mode === 'request') { $('#req').className = 'btn btn-dark'; $('#pay').className = 'btn btn-light'; $('#req').parentNode.append($('#req')); }
    $('#vmic').onclick = talk;
    size(); refreshBalance().then(valid);

    const renderTo = () => {
      const box = $('#toBox');
      if (isSelf(st.to)) { st.to = null; toast("That's your own account. You can't pay yourself.", true); }
      if (st.to) {
        const p = st.to;
        box.innerHTML = p.link
          ? `<div class="chip"><div class="av linkav">${ICON.link}</div><div class="mid"><div class="t">Pay link${p.name ? ` for ${esc(p.name)}` : ''}</div><div class="s">They don't need Monyx yet</div></div><button class="x" id="clr" aria-label="Change">${ICON.x}</button></div>`
          : `<div class="chip">${avatar(p)}<div class="mid"><div class="t">${esc(who(p))}</div><div class="s">${p.handle ? '@' + esc(p.handle) : 'Account ' + esc(short(p.address))}</div></div><button class="x" id="clr" aria-label="Change">${ICON.x}</button></div>`;
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
        let v = q.value.trim();
        if (!v) { paint(recent(), 'Recent'); return; }
        if (isAddr(cleanAddr(v))) v = cleanAddr(v);
        const cv = cleanAddr(v);
        if (cv.length >= 8 && S.acct.address.includes(cv)) { res.innerHTML = '<div class="empty">That’s part of your own account number. You can’t pay yourself.</div>'; valid(); return; }
        if (isAddr(v)) {
          if (v === S.acct.address) { res.innerHTML = '<div class="empty">That’s your own account number. You can’t pay yourself.</div>'; valid(); return; }
          st.to = S.people[v] && !S.people[v].unknown ? S.people[v] : { address: v, unknown: true }; renderTo(); valid(); return;
        }
        res.innerHTML = '<div class="empty searching"><span class="spin"></span>Searching…</div>';
        t = setTimeout(async () => {
          const my = ++seq;
          try {
            const { users } = await api(`/search?q=${encodeURIComponent(v)}`);
            if (my !== seq) return;
            const list = users.filter((u) => u.handle !== S.acct.user.handle);
            if (!list.length && users.some((u) => u.handle === S.acct.user.handle)) { res.innerHTML = '<div class="empty">That’s you! Share your pay link so friends can pay you.</div>'; return; }
            if (list.length) paint(list, 'People');
            else {
              res.innerHTML = `<div class="empty">No one called “${esc(v)}” on Monyx yet.<br><button class="btn btn-light btn-sm" id="nolink" style="margin-top:10px">Send ${esc(v)} a link instead</button></div>`;
              $('#nolink').onclick = () => { st.to = { link: true, name: v, address: '' }; renderTo(); };
            }
          } catch { if (my === seq) res.innerHTML = '<div class="empty">Couldn’t search right now. Try again.</div>'; }
        }, 220);
      };
      if (canScan) $('#scan').onclick = () => scanCode((txt) => {
        const m = txt.match(/#pay\/([a-z0-9_]{3,20})(?:\/([0-9.]+))?/i);
        if (m) { lookup(m[1]).then((u) => { if (u && isSelf(u)) { toast('That’s your own code. Share it so friends can pay you.', true); return; } if (u) { st.to = u; if (m[2] && !amt.value) { amt.value = m[2]; size(); } renderTo(); } }); return; }
        const a = cleanAddr(txt);
        if (a === S.acct.address) { toast('That’s your own code. Share it so friends can pay you.', true); return; }
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

    $('#pay').onclick = () => (st.to.link ? confirmLink(parseFloat(amt.value), note.value.trim(), st.to.name) : confirmPay(st.to, parseFloat(amt.value), note.value.trim()));
    $('#vialink').onclick = () => { st.to = { link: true, name: '', address: '' }; renderTo(); valid(); amt.focus(); };
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
    try { const { user } = await api(`/u/${encodeURIComponent(handle.replace(/^@/, ''))}`); if (user.address) S.people[user.address] = user; return user; } catch { return null; }
  }
  /* Risk check: a plain-language pause before money leaves. It only reads
     what the app already knows (your history, your contacts, the account's
     age, the address itself), so it runs instantly and offline. Informational,
     not a guarantee. */
  const editDist1 = (a, b) => {
    if (a === b || Math.abs(a.length - b.length) > 1) return false;
    let i = 0, j = 0, d = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++d > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return d + (a.length - i) + (b.length - j) <= 1;
  };
  function riskCheck(to, dollars) {
    const high = [], med = [], ok = [];
    const addr = to.address || '';
    const history = (S.feed || []).filter((e) => e && e.with === addr);
    const paidBefore = history.some((e) => e.amount < 0), heardFrom = history.length > 0;
    const known = new Map();
    for (const e of S.feed || []) if (e && e.with && e.with !== addr) known.set(e.with, S.people[e.with] || { address: e.with });
    for (const p of Object.values(S.people || {})) if (p && p.address && p.address !== addr) known.set(p.address, p);
    // 1. Address poisoning: same start and end as someone you know, different middle.
    for (const [a, p] of known) {
      if (a.slice(0, 4) === addr.slice(0, 4) && a.slice(-4) === addr.slice(-4)) {
        high.push(`This account number starts and ends like ${p.name ? esc(p.name) + '’s' : 'one in your history'}, but it isn’t the same account. That’s a common trick.`);
        break;
      }
    }
    // 2. Look-alike username: one letter away from someone you've paid.
    if (to.handle) {
      const twin = knownPeople().find((p) => p.handle !== to.handle && editDist1(p.handle.toLowerCase(), to.handle.toLowerCase()));
      if (twin && !paidBefore) high.push(`@${esc(to.handle)} is one letter off from @${esc(twin.handle)}, someone you already know.`);
    }
    if (isSelf(to)) high.push('This is your own account. Paying yourself does nothing.');
    else if (to.address && S.acct && to.address !== S.acct.address && to.address.slice(0, 4) === S.acct.address.slice(0, 4) && to.address.slice(-4) === S.acct.address.slice(-4)) high.push('This looks like your own account number but isn’t. Scammers copy the start and end.');
    // 3. Addresses no person can hold: programs, the USDC token itself.
    try {
      if (addr === USDC) high.push('That’s the address of the USDC token itself, not a person. Money sent there is gone.');
      else if (!solanaWeb3.PublicKey.isOnCurve(new solanaWeb3.PublicKey(addr).toBytes())) high.push('This address belongs to a program, not a person’s wallet. Money sent there can get stuck.');
    } catch { high.push('This doesn’t look like a valid account number.'); }
    // 4. Softer signals.
    if (to.bank) med.push('This is Monyx’s own account, not a person.');
    if (to.unknown) med.push('This account isn’t on Monyx, so we can’t show a name or photo.');
    if (!paidBefore) med.push(heardFrom ? `You’ve been paid by ${esc(first(to))}, but you’ve never paid them.` : `You’ve never paid ${esc(first(to))} before.`);
    const age = to.since ? (Date.now() - new Date(to.since).getTime()) / 864e5 : null;
    if (age != null && age < 1) med.push('This Monyx account was made in the last day.');
    if (S.cash != null && dollars > 0.5 * usd(S.cash) && !paidBefore && dollars >= 20) med.push('That’s more than half your balance, to someone new.');
    if (paidBefore) ok.push(`You’ve paid ${esc(first(to))} before.`);
    if (to.handle && !to.unknown) ok.push(`@${esc(to.handle)} is a Monyx account${to.name ? ` named ${esc(to.name)}` : ''}.`);
    // A single soft signal on its own (just "first time") is normal life, not a warning.
    const softOnly = med.length === 1 && !paidBefore && !to.unknown && !to.bank && (age == null || age >= 1);
    const tier = high.length ? 'high' : med.length && !softOnly ? 'medium' : 'normal';
    return { tier, reasons: tier === 'high' ? high.concat(med) : tier === 'medium' ? med : softOnly ? med.concat(ok) : ok };
  }
  function previewLine(to, dollars, note) {
    const name = to.unknown ? `the account ending ${esc(addrEnd(to.address))}` : esc(who(to));
    return `You’re sending <b>${spoken(dollars)}</b> to <b>${name}</b>${to.handle ? ` (@${esc(to.handle)})` : ''}${note ? ` for “${esc(plainNote(note))}”` : ''}.`;
  }
  const addrEnd = (a) => (a || '').slice(-4);
  const TIER = { high: 'High risk', medium: 'Medium risk', normal: 'Normal risk' };
  const TIER_HELP = { high: 'Pause here. Check with the person you’re paying before you send.', medium: 'Worth a second look. Not a hard stop.', normal: 'Nothing unusual jumped out. Still read the sentence above.' };
  function riskCard(to, dollars, note) {
    const r = riskCheck(to, dollars);
    return { r, html: `<div class="risk risk-${r.tier}" role="group" aria-label="Payment preview">
      <p class="risk-line">${previewLine(to, dollars, note)}</p>
      <div class="risk-tag"><span class="tier">${TIER[r.tier]}</span><span>${TIER_HELP[r.tier]}</span></div>
      ${r.reasons.length ? `<ul class="risk-why">${r.reasons.map((x) => `<li>${x}</li>`).join('')}</ul>` : ''}
      ${r.tier === 'high' ? `<label class="risk-ok"><input type="checkbox" id="riskok"> I checked this with ${esc(first(to))} and still want to send it</label>` : ''}
      <p class="risk-fine">Risk labels are informational, not a guarantee. <a href="../safety.html" target="_blank" rel="noopener">How the check works</a></p>
    </div>` };
  }

  function confirmPay(to, dollars, note, requestId, voiced = false, draftId = null) {
    if (isSelf(to)) { toast("That's your own account. You can't pay yourself.", true); return; }
    if (!(dollars > 0) || dollars > 10000) { toast('Enter an amount between $0.01 and $10,000.', true); return; }
    const after = S.cash != null ? usd(S.cash) - dollars : null;
    const short_ = after != null && after < -0.004;
    const rc = riskCard(to, dollars, note);
    sheet(`<div class="confirm">${avatar(to, 'lg')}<div class="sub">Pay ${esc(who(to))}${to.handle ? ` · @${esc(to.handle)}` : ''}</div>
      <div class="big">${money(dollars)}</div>${note ? `<div class="note">${esc(note)}</div>` : ''}</div>
      <div class="ledger"><div><span>From</span><b>Monyx balance</b></div>${after != null && after >= -0.004 ? `<div><span>Balance after</span><b>${money(Math.max(0, after))}</b></div>` : ''}<div><span>Network fee</span><b>Paid by Monyx</b></div></div>
      ${draftId ? `<div class="voiced">${ICON.spark}<span>Drafted by your assistant. Check it, then tap Pay.</span></div>` : ''}
      ${voiced ? `<div class="voiced">${ICON.mic}<span>Filled in by voice. Check it, then tap Pay.</span></div>` : ''}
      ${rc.html}
      ${short_ ? `<div class="warn">You have ${money(usd(S.cash))}. Add ${money(dollars - usd(S.cash))} more to pay this.</div><button class="btn btn-dark" id="addm">Add money</button>` : `<button class="btn btn-dark" id="go">Pay ${money(dollars)}</button>`}`, (el, close) => {
      if (short_) { $('#addm', el).onclick = () => { close(); addMoney(); }; return; }
      if (rc.r.tier === 'high') { const g = $('#go', el), c = $('#riskok', el); g.disabled = true; c.onchange = () => (g.disabled = !c.checked); }
      if (voiced && rc.r.tier !== 'normal') say(`${TIER[rc.r.tier]}. ${rc.r.tier === 'high' ? 'Please check before you send.' : 'Take a second look.'}`);
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Sending';
        try {
          const sig = await send(to.address, dollars, note);
          if (requestId) {
            if (S.requests && S.requests.incoming) S.requests.incoming = S.requests.incoming.filter((x) => x.id !== requestId);
            api(`/requests/${requestId}`, { method: 'POST', body: { action: 'paid', sig } }).catch(() => {}).then(loadRequests);
          }
          if (draftId) api(`${PAPI}/drafts/${draftId}`, { method: 'POST', body: { action: 'paid', sig } }).catch(() => {});
          close();
          S.feed.unshift({ sig, time: Math.floor(Date.now() / 1000), ok: true, with: to.address, note, amount: -toUnits(dollars) });
          S.people[to.address] = S.people[to.address] || to;
          success(`You paid ${esc(first(to))} ${money(dollars)}`, note, sig);
          if (voiced) say(`Done. You paid ${first(to)} ${spoken(dollars)}.`);
          refreshBalance();
        } catch (err) {
          b.disabled = false; b.textContent = `Pay ${money(dollars)}`;
          showError(err, 6000);
        }
      };
    });
  }
  function success(title, note, sig, extra, back = '#home') {
    S.padV = '';
    show(`<section class="steps"><div class="body" style="display:grid;place-items:center;text-align:center"><div class="done">
      <div class="tick"><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div>
      <h2>${title}</h2>${note ? `<p class="sub">${esc(note)}</p>` : ''}${extra ? `<p class="sub">${extra}</p>` : ''}
      ${sig && S.lastMs ? `<p class="speed">Arrived in ${(S.lastMs / 1000).toFixed(1)}s · no fee</p>` : ''}
      ${sig ? `<p class="receipt"><a href="https://explorer.solana.com/tx/${sig}?cluster=devnet" target="_blank" rel="noopener">View receipt</a></p>` : ''}
    </div></div><div class="foot"><button class="btn btn-dark" id="done">Done</button></div></section>`);
    $('#done').onclick = () => (location.hash = back);
    history.replaceState(null, '', '#done');
    S.lastMs = null;
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

  /* add money: test dollars straight from Monyx, no faucet needed */
  async function addMoney() {
    sheet(`<h2>Add money</h2><p class="sub">Monyx is in test mode, so dollars are free. They're test USDC with no real value.</p>
      <button class="btn btn-dark" id="topup" style="margin:18px 0 6px">Add free test dollars</button>
      <p class="fine" id="tnote" style="text-align:center">$5 the first time, then $2 a day.</p>
      <h3>Or get paid by a friend</h3>
      <button class="btn btn-light" id="share">Share my pay link</button>
      <details class="more"><summary>Need more for testing?</summary>
        <p class="sub" style="font-size:14px">Circle gives out free test USDC. Copy your account number, open the faucet, choose <b>Solana Devnet</b>, and paste it.</p>
        <div class="btn-row"><button class="btn btn-light btn-sm" id="cpa" style="width:100%">Copy account number</button><a class="btn btn-light btn-sm" style="width:100%" href="https://faucet.circle.com" target="_blank" rel="noopener">Open faucet</a></div>
      </details>`, (el, close) => {
      $('#cpa', el).onclick = () => copy(S.acct.address, 'Account number copied');
      $('#share', el).onclick = () => { close(); shareLink(); };
      const b = $('#topup', el), note = $('#tnote', el);
      b.onclick = async () => {
        b.disabled = true; b.innerHTML = '<span class="spin"></span>Adding';
        try {
          const r = await api(PAPI + '/topup', { method: 'POST' });
          if (r.status === 'sent') { close(); toast(`${money(r.usd)} added. Enjoy!`); say(`Added ${spoken(r.usd)}.`); refreshBalance(); loadFeed(); return; }
          b.disabled = false; b.textContent = 'Add free test dollars';
          note.textContent = r.status === 'wait' ? `You've had today's test dollars. More ${r.next ? `after ${new Date(r.next).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}` : 'tomorrow'}.`
            : r.status === 'bank_empty' ? 'Free dollars are paused while Monyx refills. Use the Circle faucet below.'
            : r.status === 'limit' ? 'That’s the limit for today on this network.' : 'That didn’t work. Try again in a minute.';
          note.style.color = 'var(--red)';
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
      <section class="profile"><button class="avedit" id="avEdit" aria-label="Change profile photo">${avatar(u, 'lg')}<span class="badge">${ICON.camera}</span></button><div class="name">${esc(u.name)}</div><div class="handle">@${esc(u.handle)}</div></section>
      <section class="qrcard"><div class="qr">${qrSvg(payLink(u.handle))}</div><p>Friends can scan this to pay you</p>
        <div class="btn-row"><button class="btn btn-dark btn-sm" id="share" style="width:100%">Share link</button><button class="btn btn-light btn-sm" id="copy" style="width:100%">Copy link</button></div></section>
      <h3>Voice</h3>
      <div class="list menu">
        <label class="item toggle"><span class="ico">${ICON.mic}</span><div class="mid"><div class="t">Monyx talks back</div><div class="s">Hear confirmations out loud</div></div><input type="checkbox" id="tTalk" ${S.voice.talk ? 'checked' : ''}><i class="sw"></i></label>
        <label class="item toggle"><span class="ico">${ICON.speaker}</span><div class="mid"><div class="t">Read payments aloud</div><div class="s">“${esc((knownPeople()[0] || { name: 'Alex' }).name.split(' ')[0])} sent you $14 for pizza”</div></div><input type="checkbox" id="tAnn" ${S.voice.announce ? 'checked' : ''}><i class="sw"></i></label>
      </div>
      <h3>Account</h3>
      <div class="list menu">
        ${row('add', ICON.plus, 'Add money', 'Free test dollars')}
        ${row('ai', ICON.spark, 'AI assistant', 'Connect Grok Bot to draft payments')}
        ${row('links', ICON.link, 'Pay links', 'Money you sent with a link')}
        ${S.acct.mode === 'key' ? row('key', ICON.key, 'Recovery key', 'Back up or move to a new device') : ''}
        ${S.acct.mode === 'key' && passkeysPossible() ? row('lock', ICON.lock, vault.get() ? 'Passkey lock is on' : 'Lock with a passkey', vault.get() ? 'Face ID or fingerprint opens Monyx' : 'Face ID or fingerprint to open Monyx') : ''}
        ${row('guide', ICON.book, 'How Monyx works', 'A plain-language guide')}
        ${row('details', ICON.info, 'Account details', 'For the curious')}
        ${row('pro', ICON.tools, 'Monyx Pro', 'Wallet tracer and developer tools')}
        ${row('out', ICON.out, 'Log out', '')}
      </div>
      <p class="fine" style="margin-top:22px">Monyx · <a href="../about.html">About</a> · <a href="../privacy/">Privacy</a> · <a href="../terms/">Terms</a></p>`, { tabs: true, tab: 'me' });
    $('#share').onclick = shareLink;
    $('#tTalk').onchange = (e) => { S.voice.talk = e.target.checked; store.set('monyx.talkback', S.voice.talk); if (S.voice.talk) say('Okay, I’ll talk back.'); else stopSpeaking(); };
    $('#tAnn').onchange = (e) => { S.voice.announce = e.target.checked; store.set('monyx.announce', S.voice.announce); if (S.voice.announce) say('I’ll read new payments out loud.', { force: true }); };
    $('#avEdit').onclick = () => (u.avatar ? photoMenu() : pickPhoto());
    $('#copy').onclick = () => { store.set('monyx.shared', true); copy(payLink(u.handle), 'Link copied'); };
    $('[data-r="add"]').onclick = addMoney;
    $('[data-r="ai"]').onclick = assistantSheet;
    $('[data-r="links"]').onclick = linksSheet;
    const k = $('[data-r="key"]'); if (k) k.onclick = showKey;
    const lk = $('[data-r="lock"]'); if (lk) lk.onclick = lockSheet;
    $('[data-r="details"]').onclick = details;
    $('[data-r="guide"]').onclick = () => (location.href = '../documentation/');
    $('[data-r="pro"]').onclick = () => (location.href = '../pro/');
    $('[data-r="out"]').onclick = logout;
  }
  function lockSheet() {
    const on = !!vault.get();
    sheet(`<h2>${on ? 'Passkey lock is on' : 'Lock with a passkey'}</h2>
      <p class="sub">${on ? 'Your account key is stored encrypted on this device. Monyx opens with Face ID, your fingerprint or your device PIN.' : 'Encrypt your account key on this device so Monyx only opens with Face ID, your fingerprint or your device PIN. Anyone who gets into your browser storage sees only scrambled data.'}</p>
      <p class="fine">Keep your recovery key saved too. It's how you get in on a new device.</p>
      <button class="btn btn-dark" id="lkgo" style="margin-top:14px">${on ? 'Turn off passkey lock' : 'Set up passkey'}</button>`, (el, close) => {
      $('#lkgo', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true;
        try {
          if (on) { disablePasskeyLock(); toast('Passkey lock turned off'); }
          else { await enablePasskeyLock(); toast('Locked. Monyx now opens with your passkey.'); }
          close(); screenMe();
        } catch (err) { b.disabled = false; showError(err, 6000); }
      };
    });
  }
  /* ───────── profile photo ───────── */
  function photoMenu() {
    sheet(`<h2>Profile photo</h2><p class="sub">Friends see it when they pay you.</p>
      <div style="display:grid;gap:10px;margin-top:18px"><button class="btn btn-dark" id="ph-new">Choose a new photo</button><button class="btn btn-light" id="ph-rm">Remove photo</button></div>`, (el, close) => {
      $('#ph-new', el).onclick = () => { close(); pickPhoto(); };
      $('#ph-rm', el).onclick = async (e) => {
        e.currentTarget.disabled = true;
        try { const r = await api('/avatar', { method: 'POST', body: { remove: true } }); S.acct.user = r.user; saveAcct(); close(); toast('Photo removed'); screenMe(); }
        catch (err) { e.currentTarget.disabled = false; showError(err); }
      };
    });
  }
  function pickPhoto() {
    const input = document.createElement('input');
    input.type = 'file'; input.accept = 'image/*';
    input.onchange = async () => {
      const f = input.files && input.files[0]; if (!f) return;
      try { previewPhoto(await squarePhoto(f)); } catch (e) { showError(e); }
    };
    input.click();
  }
  // Centre-crop to a 320px square JPEG on the device, so uploads are small (~25 KB)
  // and every photo looks the same in its circle.
  async function squarePhoto(file, size = 320) {
    let img;
    try { img = await createImageBitmap(file); }
    catch {
      img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = URL.createObjectURL(file); })
        .catch(() => { throw userError("That photo couldn't be opened. Try another one."); });
    }
    const w = img.width, h = img.height, side = Math.min(w, h);
    if (!side) throw userError("That photo couldn't be opened. Try another one.");
    const c = document.createElement('canvas'); c.width = c.height = size;
    const ctx = c.getContext('2d'); ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, (w - side) / 2, (h - side) / 2, side, side, 0, 0, size, size);
    const blob = await new Promise((r) => c.toBlob(r, 'image/jpeg', 0.86));
    if (!blob) throw userError("That photo couldn't be opened. Try another one.");
    return blob;
  }
  function previewPhoto(blob) {
    const url = URL.createObjectURL(blob);
    sheet(`<div class="confirm"><img class="avprev" src="${url}" alt="Your new profile photo"><h2 style="margin-top:14px">Looking good</h2><p class="sub">This is how friends will see you.</p></div>
      <div style="display:grid;gap:10px"><button class="btn btn-dark" id="ph-save">Use this photo</button><button class="btn btn-text" id="ph-again">Choose another</button></div>`, (el, close) => {
      $('#ph-again', el).onclick = () => { close(); pickPhoto(); };
      $('#ph-save', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Saving';
        try {
          const r = await api('/avatar', { method: 'POST', body: { image: b64(new Uint8Array(await blob.arrayBuffer())) } });
          S.acct.user = r.user; saveAcct(); URL.revokeObjectURL(url); close(); toast('Profile photo updated');
          if (location.hash === '#me') screenMe();
        } catch (err) { b.disabled = false; b.textContent = 'Use this photo'; showError(err); }
      };
    });
  }
  const row = (id, ico, t, s) => `<button class="item" data-r="${id}"><span class="ico">${ico}</span><div class="mid"><div class="t">${t}</div>${s ? `<div class="s">${s}</div>` : ''}</div>${ICON.chev}</button>`;
  function showKey() {
    const key = recoveryKey();
    sheet(`<h2>Recovery key</h2><p class="sub">Use this to log in on another device.</p>
      <div class="warn strong">${ICON.info.replace('<svg', '<svg width="18" height="18" style="flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.8"')}<span><b>Anyone who has this key can take all your money.</b> Monyx will never ask for it. Don't paste it into any website, chat or form, and don't screenshot it.</span></div>
      <div class="keybox" id="kb" role="button" tabindex="0">Tap to reveal</div>
      <button class="btn btn-dark" id="cp" style="margin-top:8px">Copy key</button>`, (el) => {
      const kb = $('#kb', el);
      kb.onclick = () => { const on = !kb.classList.contains('show'); kb.classList.toggle('show', on); kb.textContent = on ? key : 'Tap to reveal'; };
      $('#cp', el).onclick = () => copy(key, 'Recovery key copied');
    });
  }
  function details() {
    sheet(`<h2>Account details</h2><p class="sub">Monyx runs on Solana, a public payment network. You never need any of this, but it's here if you want it.</p>
      <div class="ledger">
        <div class="kv" style="display:block"><b>Account number</b>${esc(S.acct.address)}</div>
        <div><span>Network</span><b>Solana devnet (test)</b></div>
        <div><span>Held by</span><b>${S.acct.mode === 'phantom' ? 'Phantom wallet' : 'This browser'}</b></div>
        <div><span>Money</span><b>USDC (digital dollars)</b></div>
        <div><span>Network fees</span><b>Paid by Monyx</b></div>
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
        vault.del(); S.secretMem = null;
        S.acct = null; S.kp = null; S.feed = []; S.cash = null; S.requests = { incoming: [], outgoing: [] };
        close(); location.hash = '';
      };
    });
  }

  /* ───────── invest ───────── */
  async function loadMarkets() {
    try {
      const m = await api(PAPI + '/markets', { auth: false });
      S.markets = m; store.set('monyx.markets', m);
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
        try { await api(PAPI + '/trade/buy', { method: 'POST', body: { asset: p.asset, sig: p.sig } }); this.remove(p.sig); }
        catch (e) { if (['used', 'stale', 'mismatch'].includes(e.code) || Date.now() - p.t > 3600_000) this.remove(p.sig); }
      }
    },
  };
  async function loadPortfolio() {
    if (!S.acct || !S.acct.token) return null;
    if (pendingBuys.list().length) await pendingBuys.settle();
    try { S.port = await api(PAPI + '/portfolio'); } catch (e) { if (e.status === 401) relogin(); }
    return S.port;
  }
  const coin = (a, size = '') => `<div class="av coin ${size}" style="background:${esc(a.color)}">${esc(a.symbol.slice(0, 4))}</div>`;
  // The sparkline covers 7 days, so the % beside it must too.
  const chg7 = (arr) => (arr && arr.length > 1 && arr[0] ? ((arr[arr.length - 1] - arr[0]) / arr[0]) * 100 : null);
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
      // Everything on Invest uses the same 7-day window as the charts.
      const c7 = (h) => chg7(h.spark) ?? h.change24h;
      const day = S.port.holdings.reduce((a, h) => a + (c7(h) != null ? h.value - h.value / (1 + c7(h) / 100) : 0), 0);
      $('#pvchg').innerHTML = S.port.total > 0 ? `<span class="${day >= 0 ? 'up' : 'down'}">${day >= 0 ? '+' : '−'}${money(Math.abs(day))} past 7 days</span>` : '';
      $('#holdings').innerHTML = S.port.holdings.length ? `<h3>Your coins</h3><div class="list">${S.port.holdings.map((h) => `<button class="item" data-a="${esc(h.id)}">${coin(h)}<div class="mid"><div class="t">${esc(h.name)}</div><div class="s">${esc(fmtQty(h.qty, h.symbol))}</div></div><div style="text-align:right"><div class="amt">${money(h.value)}</div><div class="s ${c7(h) >= 0 ? 'up' : 'down'}">${pct(c7(h))} · 7d</div></div></button>`).join('')}</div>`
        : `<div class="hint" style="text-align:center;margin:14px 0 0">You don't own any crypto yet. Start with as little as $1.</div>`;
    }
    if (S.markets) {
      $('#mkts').innerHTML = S.markets.assets.map((a) => `<button class="item" data-a="${esc(a.id)}">${coin(a)}<div class="mid"><div class="t">${esc(a.name)}</div><div class="s">${esc(a.symbol)}</div></div>${spark(a.spark)}<div style="text-align:right;min-width:84px"><div class="amt">${fmtPrice(a.price)}</div><div class="s ${(chg7(a.spark) ?? a.change24h) >= 0 ? 'up' : 'down'}">${chg7(a.spark) != null ? pct(chg7(a.spark)) + ' · 7d' : pct(a.change24h) + ' · 24h'}</div></div></button>`).join('');
    }
    $$('[data-a]').forEach((b) => (b.onclick = () => assetSheet(assetById(b.dataset.a) || holdingOf(b.dataset.a))));
  }
  function assetSheet(a) {
    if (!a) return;
    const h = holdingOf(a.id);
    sheet(`<div class="assethead">${coin(a, 'md')}<div><div class="t">${esc(a.name)}</div><div class="s">${esc(a.symbol)}</div></div></div>
      <div class="big" style="font-size:40px;font-weight:600;letter-spacing:-.03em;margin-top:14px">${fmtPrice(a.price)}</div>
      <div class="${(chg7(a.spark) ?? a.change24h) >= 0 ? 'up' : 'down'}" style="font-size:14px;font-weight:500">${chg7(a.spark) != null ? `${pct(chg7(a.spark))} past 7 days` : `${pct(a.change24h)} today`}</div>
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
  function amountSheet({ title, sub, max, maxLabel, cta, preview, onGo, min = 1, belowMin = '' }) {
    sheet(`<h2>${title}</h2><p class="sub">${sub}</p>
      <div class="amountin" style="padding:14px 0 6px"><span>$</span><input id="amt" inputmode="decimal" autocomplete="off" placeholder="0"></div>
      <div class="avail" id="prev" style="margin:0 0 14px"></div>
      <div class="emojis" style="justify-content:center;margin-bottom:16px">${[5, 10, 25, 50, 100].filter((v) => v < max).slice(0, 4).map((v) => `<button data-v="${v}">$${v}</button>`).join('')}${max > 0 ? `<button data-v="max">${maxLabel}</button>` : ''}</div>
      <button class="btn btn-dark" id="go" disabled>${cta}</button>`, (el, close) => {
      const amt = $('#amt', el), go = $('#go', el), prev = $('#prev', el);
      let all = false;
      const upd = () => {
        const v = parseFloat(amt.value);
        amt.style.width = Math.max(1, (amt.value || '0').length + 0.2) + 'ch';
        const tooSmall = v > 0 && v < min && !all;
        const ok = (all ? max > 0 : v >= min) && v <= max + 0.005;
        go.disabled = !ok;
        prev.className = 'avail' + (v > max + 0.005 || tooSmall ? ' bad' : '');
        prev.textContent = v > max + 0.005 ? `You have ${money(max)} available`
          : tooSmall ? (belowMin || `The smallest amount is ${money(min)}.`)
          : v > 0 ? preview(v) : `${money(max)} available · ${money(min)} minimum`;
      };
      amt.oninput = () => {
        all = false;
        const before = amt.value;
        amt.value = /-/.test(before) ? '' : amt.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(\.\d\d).+/, '$1');
        upd();
        if (/-/.test(before)) { prev.className = 'avail bad'; prev.textContent = 'Amounts can’t be negative.'; }
        else if (/\.\d{3}/.test(before)) { prev.className = 'avail bad'; prev.textContent = 'Dollars only go to 2 decimal places (cents).'; }
      };
      $$('[data-v]', el).forEach((b) => (b.onclick = () => { all = b.dataset.v === 'max'; amt.value = all ? (Math.round(max * 100) / 100).toFixed(2) : b.dataset.v; upd(); if (all && !go.disabled) prev.textContent = `${maxLabel}: everything you have (${money(max)})`; }));
      upd(); amt.focus();
      go.onclick = async () => {
        go.disabled = true; go.innerHTML = '<span class="spin"></span>Working on it';
        try { await onGo(parseFloat(amt.value), all, close); }
        catch (e) { go.disabled = false; go.textContent = cta; showError(e, 6000); }
      };
    });
  }
  function buySheet(a) {
    const cash = S.cash != null ? Math.max(0, usd(S.cash)) : 0;
    amountSheet({
      title: `Buy ${esc(a.name)}`, sub: `Paid from your Monyx cash. 1 ${esc(a.symbol)} = ${fmtPrice(a.price)}`,
      max: cash, maxLabel: 'All cash', cta: `Buy ${esc(a.symbol)}`,
      preview: (v) => `You'll get about ${fmtQty(v / a.price, a.symbol)}`,
      async onGo(v, _all, close) {
        const g = document.querySelector('.sheet #go');
        if (g) g.innerHTML = '<span class="spin"></span>Paying';
        const sig = await send(await bankAddr(), v, `Buy ${a.symbol}`);
        if (g) g.innerHTML = `<span class="spin"></span>Adding your ${esc(a.symbol)}`;
        pendingBuys.add(a.id, sig);
        let r, tries = 0;
        while (!r) {
          try { r = await api(PAPI + '/trade/buy', { method: 'POST', body: { asset: a.id, sig } }); }
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
      max: h.value, maxLabel: 'Sell all', cta: `Sell ${esc(a.symbol)}`, min: 0.5,
      belowMin: 'The smallest sale is $0.50. Tap Sell all to cash out everything, however small.',
      preview: (v) => `You'll sell about ${fmtQty(v / a.price, a.symbol)}`,
      async onGo(v, all, close) {
        const r = await api(PAPI + '/trade/sell', { method: 'POST', body: { asset: a.id, usd: v, all } });
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
      amt.oninput = () => {
        all = false; const neg = /-/.test(amt.value);
        amt.value = neg ? '' : amt.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1').replace(/(\.\d\d).+/, '$1'); paint();
        if (neg) { prev.className = 'avail bad'; prev.textContent = 'Amounts can’t be negative.'; }
      };
      $$('[data-v]', el).forEach((b) => (b.onclick = () => { all = b.dataset.v === 'max'; amt.value = (all ? Math.round(st.from.value * 100) / 100 : Math.floor(st.from.value / 2 * 100) / 100).toFixed(2); paint(); if (all) prev.textContent = `All of it: ${fmtQty(st.from.qty, st.from.symbol)} → about ${fmtQty(st.from.value / st.to.price, st.to.symbol)}`; }));
      paint(); amt.focus();
      go.onclick = async () => {
        go.disabled = true; go.innerHTML = '<span class="spin"></span>Swapping';
        try {
          const r = await api(PAPI + '/trade/swap', { method: 'POST', body: { from: st.from.id, to: st.to.id, usd: parseFloat(amt.value), all } });
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
      ${tab === 'pay' ? '<div id="sentreqs"></div>' : ''}
      <div class="list" id="${tab === 'pay' ? 'feed' : 'trades'}" data-limit="100" style="margin-top:14px"><div class="item"><div class="mid"><div class="skeleton" style="width:60%"></div></div></div></div>`, { tabs: true, tab: 'activity' });
    $$('#seg button').forEach((b) => (b.onclick = () => screenActivity(b.dataset.t)));
    if (tab === 'pay') { if (S.feed.length) paintFeed(); loadFeed(); paintSentRequests(); loadRequests().then(paintSentRequests); }
    else Promise.all([loadMarkets(), loadPortfolio()]).then(paintTrades);
  }
  function paintTrades() {
    const el = $('#trades'); if (!el || !S.port) return;
    const name = (id) => (id === 'cash' ? 'cash' : (assetById(id) || { symbol: id }).symbol);
    const knownAsset = (id) => !S.markets || id === 'cash' || !!assetById(id);
    S.port.trades = S.port.trades.filter((t) => knownAsset(t.asset_from) && knownAsset(t.asset_to));
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
    const st = { people: (Array.isArray(preset) ? preset : [preset]).filter((p) => p && p.handle && !p.bank), me: true };
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
        $('#sum', el).innerHTML = `<div><span>Each person pays</span><b>${n ? money(share()) : '–'}</b></div><div><span>You collect</span><b>${n ? money(share() * n) : '–'}</b></div>`;
        const go = $('#go', el); go.disabled = !n; go.textContent = n ? `Request ${money(share())} from ${n} ${n === 1 ? 'person' : 'people'}` : 'Add people to split with';
      };
      $('#sme', el).onchange = (e) => { st.me = e.target.checked; paint(); };
      let t;
      $('#sq', el).oninput = (e) => {
        clearTimeout(t); const v = e.target.value.trim();
        if (!v) { $('#sres', el).innerHTML = ''; return; }
        t = setTimeout(async () => {
          try {
            const { users } = await api(`/search?q=${encodeURIComponent(v)}`);
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

  /* ───────── voice: talk to pay ─────────
     Tap the mic and say it: "send Maya 20 for pizza". ElevenLabs (through the
     monyx server, which holds the key) turns speech into text; voice-parse.js
     turns text into a payment; the normal confirm sheet still needs a tap.
     Without ElevenLabs we fall back to the browser's own speech recognition. */
  const BrowserSR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const canRecord = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder);
  const voiceMode = () => (S.voice.server && canRecord() ? 'eleven' : BrowserSR ? 'browser' : S.voice.server == null && canRecord() ? 'eleven' : null);
  async function checkVoice() {
    try { const { on } = await api(VAPI + '/status', { auth: false }); S.voice.server = !!on; store.set('monyx.voiceServer', S.voice.server); } catch {}
  }
  let audioEl = null; const sayCache = new Map();
  function stopSpeaking() {
    if (audioEl) { audioEl.pause(); audioEl = null; }
    if (window.speechSynthesis) speechSynthesis.cancel();
  }
  function browserSay(text) {
    if (!window.speechSynthesis) return;
    const u = new SpeechSynthesisUtterance(text); u.rate = 1.04; u.lang = 'en-US';
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  }
  // Read something aloud. Quietly does nothing if talk-back is off or audio is blocked.
  async function say(text, { force = false } = {}) {
    if (!text || (!S.voice.talk && !force)) return;
    stopSpeaking();
    if (S.voice.server && S.acct && S.acct.token) {
      try {
        let b64 = sayCache.get(text);
        if (!b64) { b64 = (await api(VAPI + '/say', { method: 'POST', body: { text } })).audio; if (sayCache.size > 30) sayCache.clear(); sayCache.set(text, b64); }
        audioEl = new Audio('data:audio/mpeg;base64,' + b64);
        await audioEl.play(); return;
      } catch (e) { if (e && e.code === 'voice_off') { S.voice.server = false; store.set('monyx.voiceServer', false); } }
    }
    try { browserSay(text); } catch {}
  }
  // Dollars said the way people say them: $20 → "20 dollars", $12.50 → "12 dollars and 50 cents".
  const spoken = (v) => {
    const d = Math.floor(v + 1e-9), c = Math.round((v - d) * 100);
    if (!d) return `${c} cents`;
    return `${d.toLocaleString('en-US')} dollar${d === 1 ? '' : 's'}${c ? ` and ${c} cents` : ''}`;
  };
  const plainNote = (n) => { const t = (n || '').replace(/^\p{Extended_Pictographic}\uFE0F?\s*/u, ''); return /^[A-Z][a-z]/.test(t) ? t[0].toLowerCase() + t.slice(1) : t; };
  const knownPeople = () => {
    const seen = new Set(); const list = [];
    for (const p of Object.values(S.people)) if (p && !p.unknown && !p.bank && p.handle && p.handle !== S.acct.user.handle && !seen.has(p.handle)) { seen.add(p.handle); list.push(p); }
    return list;
  };
  const norm = (x) => String(x || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  function near(a, b) { // edit distance ≤ 1, for "jordon" → "jordan"
    if (Math.abs(a.length - b.length) > 1 || a.length < 4) return a === b;
    let i = 0, j = 0, e = 0;
    while (i < a.length && j < b.length) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++e > 1) return false;
      if (a.length > b.length) i++; else if (b.length > a.length) j++; else { i++; j++; }
    }
    return e + (a.length - i) + (b.length - j) <= 1;
  }
  // Find who they meant: friends first (people you've paid or been paid by), then everyone on Monyx.
  async function findPerson(name) {
    const n = norm(name), first1 = norm(name.split(' ')[0]);
    const score = (p) => {
      const h = norm(p.handle), full = norm(p.name), f = norm(p.name.split(' ')[0]);
      if (h === n || full === n) return 3;
      if (f === n || (name.includes(' ') && f === first1 && full.startsWith(n.slice(0, f.length + 1)))) return 2;
      if (near(h, n) || near(f, n) || near(full, n)) return 1;
      return 0;
    };
    const mine = knownPeople().map((p) => [p, score(p)]).filter((x) => x[1]).sort((a, b) => b[1] - a[1]);
    if (mine.length && (mine.length === 1 || mine[0][1] > mine[1][1])) return { one: mine[0][0] };
    let others = [];
    try {
      const { users } = await api(`/search?q=${encodeURIComponent(name.replace(/\s+/g, ' ').slice(0, 30))}`);
      others = users.filter((u) => u.handle !== S.acct.user.handle);
    } catch {}
    const all = [...mine.map((x) => x[0])];
    for (const u of others) if (!all.some((p) => p.handle === u.handle)) all.push(u);
    const exact = all.filter((p) => norm(p.handle) === n || norm(p.name) === n);
    if (exact.length === 1) return { one: exact[0] };
    if (all.length === 1) return { one: all[0] };
    return { many: all.slice(0, 6) };
  }
  function choosePerson(name, list) {
    return new Promise((resolve) => {
      sheet(`<h2>Which ${esc(name.replace(/\b\w/g, (c) => c.toUpperCase()))}?</h2><p class="sub">A few people match. Pick the right one.</p>
        <div class="list" style="margin-top:12px">${list.map((u, i) => `<button class="item" data-i="${i}">${avatar(u)}<div class="mid"><div class="t">${esc(u.name)}</div><div class="s">@${esc(u.handle)}</div></div>${ICON.chev}</button>`).join('')}</div>`,
      (el, close) => $$('[data-i]', el).forEach((b) => (b.onclick = () => { const u = list[+b.dataset.i]; resolve(u); close(); })), () => resolve(null));
    });
  }
  async function personFor(name) {
    const r = await findPerson(name);
    if (r.one) return r.one;
    if (r.many && r.many.length) { say(`Which ${name}?`); return await choosePerson(name, r.many); }
    throw userError(`I couldn't find anyone called “${name}” on Monyx.`);
  }

  // Act on a sentence. Anything that moves money ends at a screen that needs a tap.
  async function doVoice(text, setStatus) {
    const v = window.MonyxVoice.parse(text);
    if (v.negative) throw userError('Amounts have to be more than $0. Try “send Jordan 5 for coffee”.');
    if (v.intent === 'topup') return { go: () => { addMoney(); } };
    if (v.intent === 'balance') {
      if (S.cash == null) await refreshBalance();
      if (!S.port) await loadPortfolio();
      const cash = S.cash != null ? usd(Math.max(0, S.cash)) : 0;
      const crypto = S.port ? S.port.total : 0;
      const line = `You have ${money(cash)}${crypto > 0 ? `, plus ${money(crypto)} in crypto` : ''}.`;
      setStatus({ big: money(cash), text: crypto > 0 ? `plus ${money(crypto)} in crypto` : 'in your Monyx balance' });
      say(`You have ${spoken(cash)}${crypto > 0 ? `, plus ${spoken(crypto)} in crypto` : ''}.`, { force: true });
      return line;
    }
    if (v.intent === 'activity') {
      if (!S.feed.length) await loadFeed();
      const recent = S.feed.filter((f) => f.ok && f.with).slice(0, 3);
      if (!recent.length) { setStatus({ text: 'No payments yet.' }); say('No payments yet.', { force: true }); return; }
      const lines = recent.map((f) => {
        const p = S.people[f.with]; const n = p && !p.unknown ? (p.bank ? 'Monyx' : first(p)) : 'Someone';
        const amt = usd(Math.abs(f.amount)); const note = p && p.bank ? '' : plainNote(f.note);
        return f.amount > 0 ? `${n} sent you ${spoken(amt)}${note ? ` for ${note}` : ''}` : `You paid ${n} ${spoken(amt)}${note ? ` for ${note}` : ''}`;
      });
      setStatus({ list: recent });
      say(lines.join('. ') + '.', { force: true });
      return;
    }
    if (v.intent === 'unknown' || (!v.people.length && v.intent !== 'unknown')) {
      if (v.intent !== 'unknown' && !v.people.length) throw userError(v.intent === 'split' ? 'Who should I split it with? Try “split 60 with” and their names.' : `Who should I ${v.intent === 'request' ? 'ask' : 'pay'}? Try saying their name.`);
      throw userError(`I can send, request, split, or check your balance. Try “${sampleCmd()}”.`);
    }
    if (v.intent === 'split') {
      if (!v.amount) throw userError('How much was it? Try “split 60 with” and their names.');
      setStatus({ text: 'Finding everyone…' });
      const ppl = [];
      for (const n of v.people) { const p = await personFor(n); if (!p) return 'cancel'; if (!ppl.some((x) => x.handle === p.handle)) ppl.push(p); }
      return { go: () => { splitSheet(v.amount, v.note, ppl); say(`Splitting ${spoken(v.amount)} with ${ppl.map(first).join(' and ')}. Check it, then tap send.`); } };
    }
    if (v.people.length > 1) throw userError(v.intent === 'request' ? 'To ask several people, try “split 60 between” and their names.' : 'One person at a time. Who should I pay first?');
    setStatus({ text: `Looking for ${v.people[0]}…` });
    let to;
    try { to = await personFor(v.people[0]); }
    catch (e) {
      // Not on Monyx? Paying them still works: send a link.
      if (v.intent === 'request' && /couldn't find/.test(e.message)) throw userError(`I couldn't find “${v.people[0]}” on Monyx. Check the spelling, or send them a pay link so they can join.`);
      if (v.intent === 'pay' && v.amount && /couldn't find/.test(e.message)) {
        const name = v.people[0].replace(/\b\w/g, (c) => c.toUpperCase());
        return { go: () => { confirmLink(v.amount, v.note, name); say(`${name} isn't on Monyx yet, so I'll make a link you can text them.`); } };
      }
      throw e;
    }
    if (!to) return 'cancel';
    if (v.intent === 'request') {
      if (!v.amount) return { go: () => { history.replaceState(null, '', '#pay'); screenPay({ to: to.handle, note: v.note }); toast(`How much should ${esc(first(to))} send you?`); } };
      return { go: () => { confirmRequest(to, v.amount, v.note); say(`Ask ${first(to)} for ${spoken(v.amount)}${v.note ? ` for ${plainNote(v.note)}` : ''}?`); } };
    }
    // pay
    if (!v.amount) return { go: () => { history.replaceState(null, '', '#pay'); screenPay({ to: to.handle, note: v.note }); say(`How much should I send ${first(to)}?`); } };
    if (v.amount > 10000) throw userError('That’s over the $10,000 limit for one payment.');
    return { go: () => { confirmPay(to, v.amount, v.note, null, true); say(`Pay ${first(to)} ${spoken(v.amount)}${v.note ? ` for ${plainNote(v.note)}` : ''}? Tap pay to send it.`); } };
  }
  function confirmRequest(to, dollars, note) {
    sheet(`<div class="confirm">${avatar(to, 'lg')}<div class="sub">Request from ${esc(who(to))} · @${esc(to.handle)}</div>
      <div class="big">${money(dollars)}</div>${note ? `<div class="note">${esc(note)}</div>` : ''}</div>
      <div class="voiced">${ICON.mic}<span>Filled in by voice. Check it, then tap to send.</span></div>
      <button class="btn btn-dark" id="go">Request ${money(dollars)}</button>`, (el, close) => {
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Sending';
        try {
          await api('/requests', { method: 'POST', body: { to: to.handle, usd: dollars, note } });
          close();
          success(`Requested ${money(dollars)} from ${esc(first(to))}`, note, null, `We'll let ${esc(first(to))} know next time they open Monyx.`);
          say(`Done. I asked ${first(to)} for ${spoken(dollars)}.`);
        } catch (err) { b.disabled = false; b.textContent = `Request ${money(dollars)}`; showError(err); }
      };
    });
  }

  const sampleCmd = () => { const f = knownPeople()[0]; return f ? `Send ${f.name.split(' ')[0]} $5 for coffee` : 'Send Mom $20 for her birthday'; };
  // Example commands use the person's real friends, so tapping one actually works.
  function examples() {
    const f = knownPeople().map((p) => p.name.split(' ')[0]);
    const a = f[0], b = f[1];
    return [
      a ? `Send ${a} $5 for coffee` : 'Send Mom $20 for her birthday',
      a && b ? `Split $30 with ${a} and ${b} for pizza` : a ? `Request $10 from ${a}` : 'Who paid me?',
      'What’s my balance?',
      a ? 'Who paid me?' : 'Add money',
    ];
  }
  function talk() {
    if (!S.acct || !S.acct.token) return;
    stopSpeaking();
    const mode = voiceMode();
    let rec = null, stream = null, ctx = null, raf = 0, sr = null, done = false, timer = 0;
    const cleanup = () => {
      done = true; cancelAnimationFrame(raf); clearTimeout(timer);
      try { rec && rec.state !== 'inactive' && rec.stop(); } catch {}
      try { sr && sr.abort(); } catch {}
      if (stream) stream.getTracks().forEach((t) => t.stop());
      if (ctx) ctx.close().catch(() => {});
    };
    sheet(`<div class="talk">
        <button class="orb" id="orb" aria-label="Start or stop listening">${ICON.mic}<i></i><i></i><i></i></button>
        <div class="heard" id="heard">${mode ? 'Tap the mic and say what you want to do' : 'Voice isn’t available in this browser. Type it below.'}</div>
        <div class="said" id="said"></div>
        <div class="vres" id="vres"></div>
      </div>
      <div class="tries" id="tries">${examples().map((x) => `<button>${esc(x)}</button>`).join('')}</div>
      <form class="field typeit" id="typeit"><input id="tq" placeholder="Or type it: ${esc(sampleCmd().replace('$', ''))}" autocomplete="off" enterkeyhint="go" aria-label="Type a command"><button class="go" aria-label="Go">${ICON.chev}</button></form>
      <p class="fine">You always tap to confirm before money moves.</p>`, (el, close) => {
      const orb = $('#orb', el), heard = $('#heard', el), said = $('#said', el), vres = $('#vres', el);
      const setState = (st) => { orb.className = 'orb ' + st; };
      const setStatus = (o) => {
        vres.innerHTML = o.big ? `<div class="big">${o.big}</div><div class="s">${esc(o.text || '')}</div>`
          : o.list ? `<div class="list">${o.list.map((f) => { const p = S.people[f.with] || { address: f.with, unknown: true }; const inc = f.amount > 0; return `<div class="item">${avatar(p, 'sm')}<div class="mid"><div class="t">${inc ? `${esc(who(p))} paid you` : `You paid ${esc(who(p))}`}</div><div class="s">${esc(f.note || when(f.time))}</div></div><span class="amt ${inc ? 'in' : ''}">${money(usd(f.amount), inc)}</span></div>`; }).join('')}</div>`
          : `<div class="s">${esc(o.text || '')}</div>`;
      };
      const run = async (text) => {
        cleanup(); setState('thinking');
        said.textContent = `“${text}”`; heard.textContent = 'Got it'; vres.innerHTML = '';
        $('#tries', el).hidden = true;
        try {
          const r = await doVoice(text, setStatus);
          setState('');
          if (r === 'cancel') { close(); return; }
          if (r && r.go) { close(); r.go(); return; }
          heard.textContent = typeof r === 'string' ? '' : 'Here you go';
        } catch (e) {
          setState('');
          heard.textContent = friendly(e);
          say(friendly(e).replace(/[“”]/g, ''));
          $('#tries', el).hidden = false;
        }
      };
      const fail = (msg) => { cleanup(); setState(''); heard.textContent = msg; $('#tries', el).hidden = false; };

      async function startEleven() {
        try { stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }); }
        catch { return fail('Monyx needs the microphone. Allow it in your browser, or type below.'); }
        if (done) return cleanup();
        const type = ['audio/webm;codecs=opus', 'audio/mp4', 'audio/webm', 'audio/ogg'].find((t) => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(t)) || '';
        rec = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
        const parts = [];
        rec.ondataavailable = (e) => e.data && e.data.size && parts.push(e.data);
        rec.onstop = async () => {
          if (stream) stream.getTracks().forEach((t) => t.stop());
          if (done) return; // closed, or they typed instead
          if (!heardSpeech) return fail('I didn’t hear anything. Tap the mic and try again.');
          setState('thinking'); heard.textContent = 'Listening back…';
          const blob = new Blob(parts, { type: rec.mimeType || type || 'audio/webm' });
          try {
            const hints = knownPeople().flatMap((p) => [p.name, p.handle]).slice(0, 50);
            const { text } = await api(VAPI + '/listen', { method: 'POST', body: { audio: b64(new Uint8Array(await blob.arrayBuffer())), mime: blob.type, hints } });
            if (!text) return fail('I didn’t catch that. Try again.');
            run(text);
          } catch (e) {
            if (e.code === 'voice_off') { S.voice.server = false; store.set('monyx.voiceServer', false); if (BrowserSR) { setState(''); heard.textContent = 'Tap the mic and try once more'; return; } }
            fail(friendly(e));
          }
        };
        // Stop by itself once they've said something and gone quiet.
        let heardSpeech = false, quietSince = 0; const t0 = performance.now();
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        const an = ctx.createAnalyser(); an.fftSize = 512; ctx.createMediaStreamSource(stream).connect(an);
        const buf = new Uint8Array(an.fftSize);
        const tick = () => {
          if (done || rec.state === 'inactive') return;
          an.getByteTimeDomainData(buf);
          let sum = 0; for (const x of buf) sum += (x - 128) ** 2;
          const level = Math.sqrt(sum / buf.length) / 128;
          orb.style.setProperty('--lv', Math.min(1, level * 6).toFixed(2));
          const now = performance.now();
          if (level > 0.035) { heardSpeech = true; quietSince = 0; } else if (heardSpeech && !quietSince) quietSince = now;
          if ((heardSpeech && quietSince && now - quietSince > 1300) || now - t0 > 12000 || (!heardSpeech && now - t0 > 7000)) { rec.stop(); return; }
          raf = requestAnimationFrame(tick);
        };
        rec.start(); setState('on'); heard.textContent = 'Listening… say it like you’d tell a friend';
        raf = requestAnimationFrame(tick);
      }
      function startBrowser() {
        sr = new BrowserSR(); sr.lang = 'en-US'; sr.interimResults = true; sr.maxAlternatives = 1;
        let final = '';
        sr.onresult = (e) => {
          let interim = ''; final = '';
          for (const r of e.results) (r.isFinal ? (final += r[0].transcript) : (interim += r[0].transcript));
          said.textContent = `“${(final + interim).trim()}”`;
        };
        sr.onerror = (e) => fail(e.error === 'not-allowed' || e.error === 'service-not-allowed' ? 'Monyx needs the microphone. Allow it in your browser, or type below.' : e.error === 'no-speech' ? 'I didn’t hear anything. Tap the mic and try again.' : 'I couldn’t hear that. Try again, or type it.');
        sr.onend = () => { if (done) return; const txt = final.trim() || said.textContent.replace(/[“”]/g, '').trim(); if (txt) run(txt); else fail('I didn’t hear anything. Tap the mic and try again.'); };
        try { sr.start(); setState('on'); heard.textContent = 'Listening… say it like you’d tell a friend'; } catch { fail('I couldn’t start the microphone. Type it below.'); }
      }
      const start = () => {
        done = false; said.textContent = ''; vres.innerHTML = ''; $('#tries', el).hidden = true;
        const m = voiceMode();
        if (m === 'eleven') startEleven(); else if (m === 'browser') startBrowser(); else fail('Voice isn’t available in this browser. Type it below.');
      };
      orb.onclick = () => {
        if (orb.classList.contains('on')) { if (rec && rec.state === 'recording') rec.stop(); else if (sr) sr.stop(); return; }
        if (orb.classList.contains('thinking')) return;
        start();
      };
      $$('#tries button', el).forEach((b) => (b.onclick = () => run(b.textContent.replace(/’/g, "'"))));
      $('#typeit', el).onsubmit = (e) => { e.preventDefault(); const v = $('#tq', el).value.trim(); if (v) run(v); };
      if (mode) start();
    }, cleanup);
  }

  // Receiving: read new money and new requests aloud as they arrive.
  function announceFeed(fresh) {
    if (!S.voice.feedSeen) { S.voice.feedSeen = true; return; }
    const now = Date.now() / 1000;
    const inc = fresh.filter((f) => f.ok && f.amount > 0 && f.with && now - (f.time || 0) < 900 && !announced.has(f.sig) && !(S.people[f.with] || {}).bank);
    inc.forEach((f) => announced.add(f.sig));
    if (!inc.length) return;
    const lines = inc.slice(0, 2).map((f) => {
      const p = S.people[f.with]; const n = p && !p.unknown ? (p.bank ? 'Monyx' : first(p)) : 'Someone';
      return { html: `<b>${esc(n)}</b> sent you <b>${money(usd(f.amount))}</b>${f.note ? ` · ${esc(f.note)}` : ''}`, text: `${n} sent you ${spoken(usd(f.amount))}${f.note ? ` for ${plainNote(f.note)}` : ''}.` };
    });
    toast(lines.map((l) => l.html).join('<br>'), false, 5000);
    if (S.voice.announce) say(lines.map((l) => l.text).join(' '));
  }
  function announceRequests() {
    const ids = new Set((S.requests.incoming || []).map((r) => r.id));
    if (S.voice.reqSeen === null) { S.voice.reqSeen = ids; return; }
    const fresh = (S.requests.incoming || []).filter((r) => !S.voice.reqSeen.has(r.id));
    S.voice.reqSeen = ids;
    if (!fresh.length || !S.voice.announce) return;
    const r = fresh[0];
    say(`${r.from.name.split(' ')[0]} is asking you for ${spoken(r.usd)}${r.note ? ` for ${plainNote(r.note)}` : ''}.`);
  }

  /* ───────── pay with a link: for people who aren't on Monyx ─────────
     The money moves into a brand-new one-off account. Its key goes into the
     link (after the #, so it never reaches any server). Whoever opens the
     link can move the money to their own Monyx account; until then the
     sender can cancel and get it back. */
  const links = {
    all: () => store.get('monyx.links', []),
    add(l) { store.set('monyx.links', [l, ...this.all()].slice(0, 50)); },
    get: (escrow) => store.get('monyx.links', []).find((l) => l.escrow === escrow),
  };
  const linkUrl = (secret) => `${SITE}#claim/${secret}`;
  function rememberLinkPeople() {
    for (const l of links.all()) S.people[l.escrow] = { address: l.escrow, name: l.label ? `Link for ${l.label}` : 'Pay link', link: true };
  }
  function confirmLink(dollars, note, label) {
    const after = S.cash != null ? usd(S.cash) - dollars : null;
    sheet(`<div class="confirm"><div class="av lg linkav">${ICON.link}</div><div class="sub">Send with a link${label ? ` · for ${esc(label)}` : ''}</div>
      <div class="big">${money(dollars)}</div>${note ? `<div class="note">${esc(note)}</div>` : ''}</div>
      <div class="ledger"><div><span>Who can claim it</span><b>Anyone with the link</b></div>${after != null ? `<div><span>Balance after</span><b>${money(Math.max(0, after))}</b></div>` : ''}<div><span>Network fee</span><b>Paid by Monyx</b></div></div>
      <p class="fine">They tap the link, make a free account, and the money is theirs. You can cancel any time before they claim it.</p>
      <button class="btn btn-dark" id="go">Create ${money(dollars)} link</button>`, (el, close) => {
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Creating link';
        try {
          const kp = W().Keypair.generate();
          const escrow = kp.publicKey.toBase58();
          const secret = b58enc(kp.secretKey);
          // Keep the key before any money moves, so it can always be cancelled.
          links.add({ escrow, secret, usd: dollars, note, label, t: Date.now() });
          const sig = await send(escrow, dollars, note || 'Monyx pay link');
          await api(PAPI + '/claims', { method: 'POST', body: { escrow, sig, note, label } }).catch(async (err) => {
            await new Promise((s) => setTimeout(s, 1500)); // the payment log can lag a moment
            return api(PAPI + '/claims', { method: 'POST', body: { escrow, sig, note, label } }).catch(() => { throw err; });
          });
          close(); rememberLinkPeople(); refreshBalance();
          linkReady(dollars, note, label, secret);
        } catch (err) { b.disabled = false; b.textContent = `Create ${money(dollars)} link`; showError(err, 6000); }
      };
    });
  }
  function linkReady(dollars, note, label, secret) {
    const url = linkUrl(secret);
    const text = `${S.acct.user.name.split(' ')[0]} sent you ${money(dollars)}${note ? ` for ${plainNote(note)}` : ''} on Monyx. Tap to claim it:`;
    show(`<section class="steps"><div class="body" style="display:grid;place-items:center;text-align:center"><div class="done">
      <div class="tick">${ICON.link}</div>
      <h2>Your ${money(dollars)} link is ready</h2>
      <p class="sub">Send it to ${label ? esc(label) : 'them'} however you like: text, email, chat. Treat it like cash: anyone who opens it can claim the money.</p>
      ${S.lastMs ? `<p class="speed">Money moved in ${(S.lastMs / 1000).toFixed(1)}s · no fee</p>` : ''}
    </div></div><div class="foot"><button class="btn btn-dark" id="sh">Share link</button><button class="btn btn-text" id="cp">Copy link</button><button class="btn btn-text" id="done">Done</button></div></section>`);
    $('#sh').onclick = async () => { if (navigator.share) { try { await navigator.share({ title: 'Monyx', text, url }); return; } catch {} } copy(`${text} ${url}`, 'Link copied'); };
    $('#cp').onclick = () => copy(url, 'Link copied');
    $('#done').onclick = () => (location.hash = '#home');
    history.replaceState(null, '', '#done');
  }
  function claimKey(secret) { try { const kp = keypairFrom(Array.from(b58dec(secret))); return kp; } catch { return null; } }
  async function claimInfo(escrow) { try { return await api(`${PAPI}/claims/${escrow}`, { auth: false }); } catch { return null; } }
  function linkIntro(info, signedIn) {
    // Someone opened a pay link before having an account.
    const f = info.from;
    show(`<section class="welcome intro">
      <div class="brand">${LOGO}</div>
      <div class="introcard">${avatar(f, 'lg')}
        <h1>${esc(f.name.split(' ')[0])} sent you ${money(info.usd)}</h1>
        ${info.note ? `<p class="note">${esc(info.note)}</p>` : ''}
        <p class="sub">Monyx is a free app for sending money to friends. Make an account in under a minute and it's yours.</p>
      </div>
      <div class="cta">
        <button class="btn btn-dark" id="goSignup">Create account &amp; claim</button>
        <button class="btn btn-text" id="goLogin">I already have an account</button>
      </div>
      <p class="fine">Monyx is in test mode: these are test dollars with no real value. <a href="../documentation/">How it works</a></p>
    </section>`);
    $('#goSignup').onclick = () => startSignup();
    $('#goLogin').onclick = () => (location.hash = '#login');
    void signedIn;
  }
  function payIntro(u, amount) {
    show(`<section class="welcome intro">
      <div class="brand">${LOGO}</div>
      <div class="introcard">${avatar(u, 'lg')}
        <h1>Pay ${esc(u.name)}${amount ? ` ${money(amount)}` : ''}</h1>
        <p class="sub">@${esc(u.handle)} uses Monyx to get paid. Create a free account or log in, and we'll bring you right back here to pay.</p>
      </div>
      <div class="cta">
        <button class="btn btn-dark" id="goSignup">Create account to pay</button>
        <button class="btn btn-text" id="goLogin">I already have an account</button>
      </div>
      <p class="fine">Monyx is in test mode: balances are test dollars with no real value. <a href="../documentation/">How it works</a></p>
    </section>`);
    $('#goSignup').onclick = () => startSignup();
    $('#goLogin').onclick = () => (location.hash = '#login');
  }
  async function claimLink(secret) {
    const kp = claimKey(secret);
    if (!kp) { toast('That link is broken. Ask them to send it again.', true); location.hash = '#home'; return; }
    const escrow = kp.publicKey.toBase58();
    if (!$('#feed')) screenHome();
    const info = await claimInfo(escrow);
    if (!info) { toast('That link isn’t valid.', true); history.replaceState(null, '', '#home'); return; }
    const mine = info.from.handle === S.acct.user.handle;
    if (info.status !== 'open') {
      sheet(`<h2>${info.status === 'returned' ? 'This link was cancelled' : 'Already claimed'}</h2><p class="sub">${info.status === 'returned' ? `${esc(info.from.name)} took this money back.` : 'Someone already claimed this link. If that wasn’t you, ask the sender.'}</p>`);
      history.replaceState(null, '', '#home'); return;
    }
    sheet(`<div class="confirm">${avatar(info.from, 'lg')}<div class="sub">${mine ? 'Your link' : `From ${esc(info.from.name)}`}</div>
      <div class="big">${money(info.usd)}</div>${info.note ? `<div class="note">${esc(info.note)}</div>` : ''}</div>
      <button class="btn btn-dark" id="go">${mine ? 'Cancel link and take it back' : `Claim ${money(info.usd)}`}</button>`, (el, close) => {
      $('#go', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true; b.innerHTML = '<span class="spin"></span>Moving the money';
        try {
          const units = await usdcOf(escrow);
          if (!units) throw userError('This link is empty. It may have just been claimed.');
          const r = await usdcSend({ owner: escrow, signer: kp, to: S.acct.address, units, note: mine ? 'Link cancelled' : (info.note || 'Claimed link'), closeEscrow: true });
          S.lastMs = r.ms || null;
          S.people[escrow] = { ...info.from, address: escrow, link: true, name: mine ? 'Cancelled link' : info.from.name };
          close(); refreshBalance(); store.del('monyx.pending');
          success(mine ? `${money(info.usd)} is back in your balance` : `${money(info.usd)} from ${esc(info.from.name.split(' ')[0])} is yours`, info.note, r.sig);
          if (!mine) say(`${info.from.name.split(' ')[0]} sent you ${spoken(info.usd)}. It's in your balance.`);
        } catch (err) { b.disabled = false; b.textContent = 'Try again'; showError(err, 6000); }
      };
    });
    history.replaceState(null, '', '#home');
  }
  async function linksSheet() {
    let server = [];
    try { server = (await api(PAPI + '/claims')).claims; } catch {}
    const local = new Map(links.all().map((l) => [l.escrow, l]));
    sheet(`<h2>Pay links</h2><p class="sub">Money you sent with a link. Open links can be cancelled from this device.</p>
      <div class="list" style="margin-top:12px">${server.length ? server.map((c) => `<div class="item"><div class="av sm linkav">${ICON.link}</div><div class="mid"><div class="t">${money(c.usd)}${c.label ? ` for ${esc(c.label)}` : ''}</div><div class="s">${c.status === 'open' ? 'Waiting to be claimed' : c.status === 'returned' ? 'Cancelled' : `Claimed${c.by ? ` by ${esc(c.by.name)}` : ''}`} · ${when(Date.parse(c.at) / 1000)}</div></div>${c.status === 'open' && local.has(c.escrow) ? `<button class="btn btn-text btn-sm" data-s="${esc(c.escrow)}">Share</button><button class="btn btn-text btn-sm" data-c="${esc(c.escrow)}">Cancel</button>` : ''}</div>`).join('') : '<div class="empty">No links yet. On the pay screen, tap “Send with a link”.</div>'}</div>`, (el, close) => {
      $$('[data-c]', el).forEach((b) => (b.onclick = () => { close(); claimLink(local.get(b.dataset.c).secret); }));
      $$('[data-s]', el).forEach((b) => (b.onclick = () => copy(linkUrl(local.get(b.dataset.s).secret), 'Link copied')));
    });
  }

  /* ───────── assistant drafts (Grok Bot) ─────────
     An assistant can draft a payment; it shows up here and only moves when you tap. */
  async function loadDrafts() {
    if (!S.acct || !S.acct.token) return;
    try { S.drafts = (await api(PAPI + '/drafts')).drafts; paintDrafts(); } catch {}
  }
  function paintDrafts() {
    const el = $('#drafts'); if (!el) return;
    paintBell();
    if (!S.drafts.length) { el.innerHTML = ''; return; }
    el.innerHTML = `<h3>Waiting for your OK</h3>` + S.drafts.map((d) => `<div class="req draft">
      <div class="row"><div class="av sm bot">${ICON.spark}</div><div><div class="t"><b>${esc(d.from)}</b> wants to pay <b>${esc(d.to ? d.to.name : 'someone')}</b> <b>${money(d.usd)}</b></div><div class="s">${esc(d.reason || d.note || 'No note')} · ${when(Date.parse(d.at) / 1000)}</div></div></div>
      <div class="btn-row"><button class="btn btn-light btn-sm" data-no="${d.id}" style="width:100%">Dismiss</button><button class="btn btn-dark btn-sm" data-ok="${d.id}" style="width:100%">Review</button></div></div>`).join('');
    $$('[data-ok]', el).forEach((b) => (b.onclick = () => { const d = S.drafts.find((x) => x.id === b.dataset.ok); confirmPay(d.to, d.usd, d.note || '', null, false, d.id); }));
    $$('[data-no]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; await api(`${PAPI}/drafts/${b.dataset.no}`, { method: 'POST', body: { action: 'dismiss' } }).catch(() => {}); loadDrafts(); }));
  }
  async function assistantSheet() {
    let keys = [];
    try { keys = (await api(PAPI + '/agent-keys')).keys; } catch {}
    sheet(`<h2>AI assistant</h2><p class="sub">Connect Grok Bot (or any AI assistant) to Monyx. It can check your balance and activity, ask friends for money, and <b>draft</b> payments. It can never send money: every draft waits for your tap here.</p>
      ${keys.length ? `<div class="list" style="margin-top:12px">${keys.map((k) => `<div class="item"><div class="av sm bot">${ICON.spark}</div><div class="mid"><div class="t">${esc(k.label)}</div><div class="s">Drafts up to ${money(Number(k.weekly_usd))}/week · ${k.last_used_at ? `used ${when(Date.parse(k.last_used_at) / 1000)}` : 'not used yet'}</div></div><button class="btn btn-text btn-sm" data-rv="${k.id}">Remove</button></div>`).join('')}</div>` : ''}
      <h3>Connect a new assistant</h3>
      <label class="field"><input id="lbl" maxlength="30" value="Grok Bot" aria-label="Assistant name"></label>
      <label class="field prefix" style="margin-top:8px"><span style="font-size:15px;white-space:nowrap">Per week $</span><input id="lim" inputmode="numeric" value="50" style="padding-left:6px" aria-label="Weekly draft limit in dollars"></label>
      <button class="btn btn-dark" id="mk" style="margin-top:12px">Create key</button>
      <div id="out"></div>
      <p class="fine" style="margin-top:12px"><a href="../grok-bot/" target="_blank" rel="noopener">How to set up Grok Bot</a></p>`, (el) => {
      $$('[data-rv]', el).forEach((b) => (b.onclick = async () => { b.disabled = true; await api(`${PAPI}/agent-keys/${b.dataset.rv}/revoke`, { method: 'POST' }).catch(() => {}); b.closest('.item').remove(); toast('Assistant removed'); }));
      $('#mk', el).onclick = async (e) => {
        const b = e.currentTarget; b.disabled = true;
        try {
          const r = await api(PAPI + '/agent-keys', { method: 'POST', body: { label: $('#lbl', el).value.trim() || 'Grok Bot', weekly_usd: parseInt($('#lim', el).value, 10) || 50 } });
          $('#out', el).innerHTML = `<div class="warn strong" style="margin-top:12px">${ICON.info.replace('<svg', '<svg width="18" height="18" style="flex-shrink:0;fill:none;stroke:currentColor;stroke-width:1.8"')}<span>Copy this key now; you won't see it again. Paste it only into your assistant's Monyx credential field. It can't send money, but it can see your activity.</span></div><div class="keybox show">${esc(r.key)}</div><button class="btn btn-light btn-sm" id="cpk" style="margin-top:8px;width:100%">Copy key</button>`;
          $('#cpk', el).onclick = () => copy(r.key, 'Assistant key copied');
          b.textContent = 'Key created';
        } catch (err) { b.disabled = false; showError(err); }
      };
    });
  }

  /* ───────── live "you got paid" ─────────
     Payments Monyx relays, and anything QuickNode Streams sees arrive from
     outside, show up in the inbox within a few seconds. */
  const announced = new Set();
  let inboxPrimed = false;
  async function pollInbox() {
    if (!S.acct || !S.acct.token || document.hidden) return;
    try {
      const r = await api(`${PAPI}/inbox?since=${S.inboxAt}`);
      const fresh = r.payments.filter((p) => !announced.has(p.sig));
      fresh.forEach((p) => announced.add(p.sig));
      if (fresh.length) S.inboxAt = Math.max(S.inboxAt, ...fresh.map((p) => p.at - 1));
      if (!inboxPrimed) { inboxPrimed = true; return; }
      const incoming = fresh.filter((p) => p.from !== S.acct.address);
      if (!incoming.length) return;
      await resolvePeople(incoming.map((p) => p.from).filter(Boolean));
      const lines = incoming.slice(0, 2).map((p) => {
        const who_ = S.people[p.from]; const n = who_ && !who_.unknown ? (who_.bank ? 'Monyx' : first(who_)) : 'Someone';
        return { html: `<b>${esc(n)}</b> sent you <b>${money(p.usd)}</b>${p.note && !(who_ && who_.bank) ? ` · ${esc(p.note)}` : ''}`, text: `${n} sent you ${spoken(p.usd)}${p.note && !(who_ && who_.bank) ? ` for ${plainNote(p.note)}` : ''}.`, bank: who_ && who_.bank };
      });
      const notable = lines.filter((l) => !l.bank);
      if (notable.length) { toast(notable.map((l) => l.html).join('<br>'), false, 5000); if (S.voice.announce) say(notable.map((l) => l.text).join(' ')); }
      refreshBalance(); if ($('#feed')) loadFeed();
    } catch (e) { if (e.status === 401) relogin(); }
  }

  /* ───────── protecting the key: passkey lock + password manager ─────────
     Turn on "Lock with a passkey" and the account key is encrypted (AES-GCM)
     with a key derived from the passkey's PRF output. Browser storage then
     holds only ciphertext; opening Monyx needs Face ID, a fingerprint or the
     device PIN. The recovery key always works as a way back in. */
  const b64d = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const vault = { get: () => store.get('monyx.vault'), set: (v) => store.set('monyx.vault', v), del: () => store.del('monyx.vault') };
  const passkeysPossible = () => !!(window.PublicKeyCredential && navigator.credentials && window.isSecureContext);
  const rand = (n) => crypto.getRandomValues(new Uint8Array(n));
  async function vaultKey(prf, salt) {
    const base = await crypto.subtle.importKey('raw', prf, 'HKDF', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'HKDF', hash: 'SHA-256', salt, info: new TextEncoder().encode('monyx vault v1') }, base, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }
  const NO_PRF = "This device's passkeys can't lock Monyx yet. Your recovery key still protects your account.";
  async function passkeyPrf(credId, salt) {
    const a = await navigator.credentials.get({ publicKey: { challenge: rand(32), allowCredentials: [{ type: 'public-key', id: credId }], userVerification: 'required', extensions: { prf: { eval: { first: salt } } } } });
    const r = a.getClientExtensionResults().prf;
    if (!r || !r.results || !r.results.first) throw userError(NO_PRF);
    return new Uint8Array(r.results.first);
  }
  async function enablePasskeyLock() {
    const secret = S.acct.secret || S.secretMem;
    if (!secret) throw userError('Unlock Monyx first.');
    const salt = rand(32), u = S.acct.user;
    let cred;
    try {
      cred = await navigator.credentials.create({ publicKey: {
        rp: { name: 'Monyx' }, user: { id: rand(16), name: `@${u.handle}`, displayName: u.name }, challenge: rand(32),
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
        authenticatorSelection: { residentKey: 'preferred', userVerification: 'required' },
        extensions: { prf: { eval: { first: salt } } } } });
    } catch (e) { if (/NotAllowed|abort/i.test(String(e.name || e))) throw userError('Passkey setup was cancelled.'); throw userError(NO_PRF); }
    const ext = cred.getClientExtensionResults().prf;
    if (!ext || ext.enabled === false) throw userError(NO_PRF);
    const id = new Uint8Array(cred.rawId);
    const prf = ext.results && ext.results.first ? new Uint8Array(ext.results.first) : await passkeyPrf(id, salt);
    const key = await vaultKey(prf, salt), iv = rand(12);
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, Uint8Array.from(secret)));
    // Prove we can decrypt before throwing away the plain copy.
    const back = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct));
    if (b58enc(back) !== b58enc(Uint8Array.from(secret))) throw userError(NO_PRF);
    vault.set({ id: b64(id), salt: b64(salt), iv: b64(iv), ct: b64(ct), address: S.acct.address });
    S.secretMem = Array.from(secret); delete S.acct.secret; S.holdKey = false; saveAcct();
  }
  function disablePasskeyLock() {
    if (!S.secretMem) return;
    S.acct.secret = S.secretMem; saveAcct(); vault.del();
  }
  async function unlockWithPasskey() {
    const v = vault.get();
    const salt = b64d(v.salt);
    const key = await vaultKey(await passkeyPrf(b64d(v.id), salt), salt);
    const secret = new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b64d(v.iv) }, key, b64d(v.ct)));
    S.secretMem = Array.from(secret); S.kp = keypairFrom(S.secretMem);
  }
  const isLocked = () => !!(S.acct && S.acct.mode === 'key' && !S.acct.secret && !S.kp && vault.get());
  function screenUnlock() {
    const u = S.acct.user || {};
    show(`<section class="welcome intro">
      <div class="brand">${LOGO}</div>
      <div class="introcard">${avatar(u, 'lg')}<h1>Welcome back${u.name ? `, ${esc(u.name.split(' ')[0])}` : ''}</h1>
        <p class="sub">Monyx is locked with your passkey. Unlock with Face ID, your fingerprint or your device PIN.</p></div>
      <div class="cta"><button class="btn btn-dark" id="un">Unlock</button>
        <button class="btn btn-text" id="rk">Use my recovery key instead</button></div>
      <p class="fine" id="uh"></p>
    </section>`);
    $('#un').onclick = async (e) => {
      const b = e.currentTarget; b.disabled = true;
      try { await unlockWithPasskey(); route(); }
      catch (err) { b.disabled = false; $('#uh').textContent = err.safe ? err.message : 'That didn’t unlock. Try again, or use your recovery key.'; }
    };
    $('#rk').onclick = () => { location.hash = '#login'; screenLogin(); };
  }
  // Save the recovery key in the browser's password manager (iCloud Keychain,
  // Google Password Manager, 1Password…), filed under @username.
  async function saveToPasswordManager(key) {
    const id = `@${S.acct.user.handle}`;
    if (window.PasswordCredential) {
      try { await navigator.credentials.store(new PasswordCredential({ id, password: key, name: `Monyx ${id}` })); toast('Saved to your password manager'); return true; } catch {}
    }
    // Safari and Firefox offer to save when a login form is submitted.
    const f = document.createElement('form');
    f.style.cssText = 'position:fixed;left:-9999px;top:0';
    f.innerHTML = '<input name="username" autocomplete="username"><input type="password" name="password" autocomplete="new-password"><button>Save</button>';
    f.elements.username.value = id; f.elements.password.value = key;
    f.onsubmit = (e) => { e.preventDefault(); setTimeout(() => f.remove(), 2000); };
    document.body.append(f); f.requestSubmit();
    toast('If your browser offers to save a password, tap Save.', false, 5000);
    return false;
  }

  /* ───────── routing ───────── */
  async function route() {
    const h = location.hash.slice(1);
    const [view, a, b, c] = h.split('/');
    const signedIn = !!(S.acct && S.acct.user && S.acct.token);
    if (signedIn && isLocked() && view !== 'login' && view !== 'claim') return screenUnlock();
    if (view === 'pay' && a && !signedIn) {
      store.set('monyx.pending', '#' + h);
      const u = await lookup(a);
      if (u) payIntro(u, b && parseFloat(b) > 0 ? parseFloat(b) : 0);
      else screenWelcome(`<div class="banner"><span>That pay link is for @${esc(a)}, who isn't on Monyx yet.</span></div>`);
      return;
    }
    if (view === 'claim' && a) {
      if (signedIn) return claimLink(a);
      store.set('monyx.pending', '#' + h);
      const kp = claimKey(a); const info = kp && (await claimInfo(kp.publicKey.toBase58()));
      if (info && info.status === 'open') return linkIntro(info);
      return screenWelcome(`<div class="banner"><span>${info ? 'That link was already claimed.' : 'That link isn’t valid.'}</span></div>`);
    }
    if (!signedIn) {
      if (view === 'login') return screenLogin();
      if (view === 'signup') { if (!S.signup) S.signup = { step: 1, name: '', handle: '', kp: null }; return S.signup.step === 1 ? stepName() : undefined; }
      return screenWelcome();
    }
    if (view === 'pay' && !a) return screenPad();
    if (view === 'send') return screenPay({ amount: a && parseFloat(a) > 0 ? a : '', mode: b === 'r' ? 'request' : 'pay', fromPad: true });
    if (view === 'pay') return screenPay({ to: a, amount: b && parseFloat(b) > 0 ? parseFloat(b).toFixed(2).replace(/\.00$/, '') : '', note: c ? decodeURIComponent(c) : '' });
    if (view === 'me') return screenMe();
    if (view === 'invest') return screenInvest();
    if (view === 'activity') return screenActivity();
    if (view === 'tx') { if (!$('#feed')) screenHome(); return txDetail(a); }
    if (view !== 'home') history.replaceState(null, '', '#home');
    screenHome();
  }

  function boot() {
    // Never run the pay screens inside someone else's page (clickjacking).
    if (window.top !== window.self) { document.body.innerHTML = '<p style="padding:24px;font:16px system-ui">Monyx can only be used at <a href="https://www.monyx.pro" target="_top">monyx.pro</a>.</p>'; return; }
    S.acct = S.acct || store.get('monyx.acct');
    if (S.acct && S.acct.mode === 'key' && S.acct.secret) { try { S.kp = keypairFrom(S.acct.secret); } catch { S.acct = null; } }
    if (S.acct && S.acct.mode === 'key' && !S.acct.secret && !vault.get()) S.acct.token = null; // no key anywhere: start over
    if (S.acct && !S.acct.token) { S.acct = null; S.kp = null; store.del('monyx.acct'); } // signup interrupted before the account existed
    window.addEventListener('hashchange', route);
    // Mid-signup the key exists only in memory; warn before it's lost.
    window.addEventListener('beforeunload', (e) => { if (S.holdKey && S.acct && S.acct.token) { e.preventDefault(); e.returnValue = ''; } });
    RPC = store.get('monyx.rpc', RPC);
    rememberLinkPeople();
    loadInfo();
    // Broken profile photos fall back to initials. (Delegated, so no inline handlers: the CSP forbids them.)
    document.addEventListener('error', (e) => { if (e.target && e.target.matches && e.target.matches('img[data-fallback]')) e.target.remove(); }, true);
    route();
    setInterval(() => { if (S.acct && S.acct.token && !document.hidden) { refreshBalance(); if ($('#feed')) { loadFeed(); loadRequests(); loadDrafts(); } } }, 20000);
    setInterval(pollInbox, 4000); pollInbox();
    setInterval(() => { if ($('#feed') && !document.hidden) paintFeed(); }, 60000); // keep "Just now" honest
    loadMarkets();
    checkVoice();
    if (S.acct && S.acct.token) api('/me').then((r) => { S.acct.user = r.user; saveAcct(); }).catch((e) => { if (e.status === 401) relogin(); });
  }
  boot();
})();
