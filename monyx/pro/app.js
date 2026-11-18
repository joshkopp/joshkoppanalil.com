(() => {
  'use strict';
  const METER = 'https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-market';
  // api.mainnet-beta refuses browser origins (403); PublicNode's free endpoint
  // allows CORS and parallel reads. The meter's /rpc relay is the fallback.
  const DEFAULT_RPC = { mainnet: 'https://solana-rpc.publicnode.com', devnet: 'https://api.devnet.solana.com' };
  const TREASURY = '4DJ1z4aUMe4VLg9qxaCHmfNhFKqyCaP7RC6dQBJFQvuw';
  const LAMPORTS = 1e9;
  const T = window.MonyxTrace;
  const W = () => window.solanaWeb3;

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const short = (a, n = 4) => (a ? `${a.slice(0, n)}…${a.slice(-n)}` : '');
  const name = (a) => T.label(a) || short(a);
  const fmtSol = (v, d = 4) => (v == null ? '–' : Number(v).toLocaleString('en-US', { minimumFractionDigits: Math.min(d, 2), maximumFractionDigits: d }));
  const fmtUsd = (v) => (v == null ? '–' : v.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: v < 1 ? 4 : 2 }));
  const ago = (t) => {
    if (!t) return '';
    const s = Math.max(0, Date.now() / 1000 - t);
    if (s < 60) return `${Math.floor(s)}s ago`; if (s < 3600) return `${Math.floor(s / 60)}m ago`;
    if (s < 86400) return `${Math.floor(s / 3600)}h ago`; return `${Math.floor(s / 86400)}d ago`;
  };
  const txUrl = (sig, net = 'devnet') => `https://explorer.solana.com/tx/${sig}${net === 'devnet' ? '?cluster=devnet' : ''}`;
  const addrUrl = (a, net = 'devnet') => `https://explorer.solana.com/address/${a}${net === 'devnet' ? '?cluster=devnet' : ''}`;
  const isAddr = (s) => /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s || '');
  const store = {
    get(k, d = null) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
    del(k) { try { localStorage.removeItem(k); } catch {} },
  };
  const rpcUrl = (net) => store.get(`monyx.pro.rpc.${net}`) || DEFAULT_RPC[net];
  const conn = () => new (W().Connection)(rpcUrl('devnet'), 'confirmed');

  function hl(obj) {
    const s = esc(JSON.stringify(obj, null, 2));
    return s.replace(/(&quot;(?:[^&]|&(?!quot;))*?&quot;)(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g, (m, str, colon, lit) => {
      if (str) return `<span class="${colon ? 'j-k' : 'j-s'}">${str}</span>${colon || ''}`;
      if (lit) return `<span class="j-b">${m}</span>`;
      return `<span class="j-n">${m}</span>`;
    });
  }
  // Errors: show our own messages, turn everything else into a plain sentence.
  // Server messages are already user-facing, so errors built from them are marked safe.
  const OWN = /^(Holds |The public RPC|This RPC refused|That is not|Pick a wallet|Agent wallet is short|Address copied|Transaction failed onchain|upstream kept failing)/;
  const safeErr = (m) => Object.assign(new Error(m), { safe: true });
  function msg(e) {
    const m = String((e && e.message) || '');
    if (e && e.safe) return m;
    if (/user rejected|rejected the request/i.test(m)) return 'Cancelled.';
    if (/failed to fetch|networkerror|load failed|aborted/i.test(m)) return "Can't reach the network right now. Try again in a moment.";
    if (OWN.test(m)) return m;
    console.error('[monyx pro]', e);
    return 'Something went wrong. Please try again.';
  }
  let toastT;
  function toast(html, err = false, ms = 3200) {
    const t = $('#toast'); t.innerHTML = html; t.className = 'toast' + (err ? ' err' : ''); t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), ms);
  }
  async function copy(text, what = 'Copied') {
    try { await navigator.clipboard.writeText(text); toast(what); } catch { toast('Copy failed', true); }
  }

  /* ───────────────────────── state ───────────────────────── */
  const S = { mode: null, kp: null, pubkey: null, phantom: null, bal: null, price: null, catalog: null, sel: null, agentKp: null, agentSpent: store.get('monyx.pro.agentSpent', 0) };

  /* ───────────────────────── signing ───────────────────────── */
  const phantom = () => (window.phantom && window.phantom.solana) || (window.solana && window.solana.isPhantom ? window.solana : null);

  function mainSigner() {
    if (!S.pubkey) throw new Error('Pick a wallet first.');
    return {
      pubkey: S.pubkey,
      async sign(tx) {
        if (S.mode === 'builtin') { tx.sign(S.kp); return tx; }
        return await S.phantom.signTransaction(tx);
      },
    };
  }
  const kpSigner = (kp) => ({ pubkey: kp.publicKey.toBase58(), async sign(tx) { tx.sign(kp); return tx; } });

  async function transfer(signer, to, lamports, reference) {
    const { PublicKey, Transaction, SystemProgram } = W();
    const c = conn();
    const from = new PublicKey(signer.pubkey);
    const have = await c.getBalance(from);
    if (have < lamports + 10000) throw new Error(`Holds ${(have / LAMPORTS).toFixed(5)} devnet SOL, needs ${((lamports + 10000) / LAMPORTS).toFixed(5)}. Get devnet SOL first.`);
    const ix = SystemProgram.transfer({ fromPubkey: from, toPubkey: new PublicKey(to), lamports });
    if (reference) ix.keys.push({ pubkey: new PublicKey(reference), isSigner: false, isWritable: false });
    const tx = new Transaction().add(ix);
    const { blockhash, lastValidBlockHeight } = await c.getLatestBlockhash('confirmed');
    tx.recentBlockhash = blockhash; tx.feePayer = from;
    const signed = await signer.sign(tx);
    const sig = await c.sendRawTransaction(signed.serialize(), { skipPreflight: false });
    const res = await c.confirmTransaction({ signature: sig, blockhash, lastValidBlockHeight }, 'confirmed');
    if (res.value && res.value.err) throw new Error('Transaction failed onchain');
    return sig;
  }

  // The devnet RPC faucet is closed (it answers 410), so devnet SOL comes from
  // the web faucet: copy the address and open it.
  async function airdrop(pubkey) {
    try { await navigator.clipboard.writeText(pubkey); } catch {}
    window.open('https://faucet.solana.com', '_blank', 'noopener');
    throw new Error('Address copied. Paste it into faucet.solana.com (opened in a new tab), then hit Refresh.');
  }

  /* ───────────────────────── wallet ───────────────────────── */
  function keypairFrom(arr) { return W().Keypair.fromSecretKey(Uint8Array.from(arr)); }

  function useBuiltin(kp) {
    S.mode = 'builtin'; S.kp = kp; S.pubkey = kp.publicKey.toBase58();
    store.set('monyx.pro.key', Array.from(kp.secretKey)); store.set('monyx.pro.mode', 'builtin');
    walletReady();
  }
  async function usePhantom(silent = false) {
    const p = phantom();
    if (!p) { if (!silent) { toast('Phantom not found. <a href="https://phantom.app" target="_blank" rel="noopener">Install it</a> or use a Monyx key.', true, 5000); } return; }
    try {
      const r = await p.connect(silent ? { onlyIfTrusted: true } : undefined);
      S.mode = 'phantom'; S.phantom = p; S.pubkey = r.publicKey.toString();
      store.set('monyx.pro.mode', 'phantom'); walletReady();
    } catch { if (!silent) toast('Connection cancelled.', true); }
  }
  function forget() {
    if (S.mode === 'phantom' && S.phantom) S.phantom.disconnect().catch(() => {});
    store.del('monyx.pro.mode');
    Object.assign(S, { mode: null, kp: null, pubkey: null, phantom: null, bal: null });
    paintWho(); $('#walletEmpty').hidden = false; $('#walletFull').hidden = true;
  }

  function walletReady() {
    paintWho();
    $('#walletEmpty').hidden = true; $('#walletFull').hidden = false;
    $('#myAddr').textContent = S.pubkey;
    $('#exportKey').hidden = S.mode !== 'builtin';
    $('#keyInfo').innerHTML = `<dt>type</dt><dd>${S.mode === 'builtin' ? 'Monyx key, stored in this browser' : 'Phantom extension'}</dd><dt>address</dt><dd>${esc(S.pubkey)}</dd><dt>network</dt><dd>devnet</dd>`;
    refreshBalance(); loadActivity(); loadHoldings(); paintSamples();
  }
  function paintWho() {
    $('#whoBtn').textContent = S.pubkey ? `${short(S.pubkey)} · ${S.bal == null ? '…' : fmtSol(S.bal, 3)} SOL` : 'No wallet';
    $('#whoDot').classList.toggle('live', !!S.pubkey);
  }
  async function refreshBalance() {
    if (!S.pubkey) return;
    try {
      S.bal = (await conn().getBalance(new (W().PublicKey)(S.pubkey))) / LAMPORTS;
      $('#balSol').textContent = fmtSol(S.bal, 4);
      $('#balUsd').textContent = S.price ? `≈ ${fmtUsd(S.bal * S.price)} at mainnet price` : '';
      paintWho();
    } catch {}
  }

  async function loadActivity() {
    const ol = $('#activity');
    if (!S.pubkey) return;
    ol.innerHTML = '<li class="muted">Reading devnet…</li>';
    try {
      const url = rpcUrl('devnet');
      const sigs = await T.rpc(url, 'getSignaturesForAddress', [S.pubkey, { limit: 12 }]);
      if (!sigs.length) { ol.innerHTML = '<li class="muted">Nothing yet. Hit Get SOL to fund it from the devnet faucet.</li>'; return; }
      const txs = await T.pool(sigs, 3, (s) => T.getTx(url, s.signature).catch(() => null));
      ol.innerHTML = sigs.map((s, i) => {
        const tx = txs[i];
        if (!tx) return `<li><span class="glyph">·</span><div><div class="what">Transaction</div><div class="when">${ago(s.blockTime)}</div></div><a class="amt" href="${txUrl(s.signature)}" target="_blank" rel="noopener">view</a></li>`;
        const f = T.flows(tx, S.pubkey);
        const d = f.solDelta / LAMPORTS;
        const out = f.sol.find((m) => m.from === S.pubkey && m.to !== S.pubkey);
        const inn = f.sol.find((m) => m.to === S.pubkey && m.from !== S.pubkey);
        const hasRef = out && out.to === TREASURY && tx.transaction.message.accountKeys.length > 3;
        let what = 'Contract call', g = '◇';
        if (hasRef) { what = 'API pull · Monyx market'; g = '⌁'; }
        else if (out) { what = `Sent to ${name(out.to)}`; g = '↗'; }
        else if (inn) { what = `Received from ${name(inn.from)}`; g = '↙'; }
        if (s.err) what += ' · failed';
        return `<li><span class="glyph">${g}</span><div><div class="what">${esc(what)}</div><div class="when"><a href="${txUrl(s.signature)}" target="_blank" rel="noopener">${short(s.signature, 6)}</a> · ${ago(s.blockTime)}</div></div><span class="amt ${d > 0 ? 'up' : d < 0 ? 'down' : ''}">${d > 0 ? '+' : ''}${fmtSol(d, 5)}</span></li>`;
      }).join('');
    } catch (e) { ol.innerHTML = `<li class="muted">${esc(msg(e))}</li>`; }
  }
  async function loadHoldings() {
    const ul = $('#holdings');
    ul.innerHTML = `<li><span>SOL</span><span>${S.bal == null ? '…' : fmtSol(S.bal, 5)}</span></li>`;
    try {
      const url = rpcUrl('devnet');
      const r = await T.rpc(url, 'getTokenAccountsByOwner', [S.pubkey, { programId: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA' }, { encoding: 'jsonParsed' }]);
      await refreshBalance();
      const rows = r.value.map((a) => a.account.data.parsed.info).filter((i) => Number(i.tokenAmount.uiAmount) > 0);
      ul.innerHTML = `<li><span>SOL</span><span>${fmtSol(S.bal, 5)}</span></li>` + rows.map((i) => `<li><span title="${esc(i.mint)}">${esc(name(i.mint))}</span><span>${i.tokenAmount.uiAmountString}</span></li>`).join('')
        + (rows.length ? '' : '<li class="muted"><span>No SPL tokens on devnet</span><span></span></li>');
    } catch {}
  }

  function drawer(kind) {
    const d = $('#drawer');
    if (d.dataset.kind === kind && !d.hidden) { d.hidden = true; d.dataset.kind = ''; return; }
    d.dataset.kind = kind; d.hidden = false;
    if (kind === 'send') {
      d.innerHTML = `<label>To<input id="sendTo" spellcheck="false" placeholder="address" style="width:380px"></label><label>Amount (SOL)<input id="sendAmt" type="number" min="0" step="0.001" placeholder="0.01" style="width:140px"></label><button class="primary" id="sendGo">Send</button>`;
      $('#sendGo').onclick = async () => {
        const to = $('#sendTo').value.trim(), amt = parseFloat($('#sendAmt').value);
        if (!isAddr(to)) return toast('That is not a Solana address.', true);
        if (!(amt > 0)) return toast('Enter an amount.', true);
        const b = $('#sendGo'); b.disabled = true; b.innerHTML = '<span class="spin"></span>Sending';
        try {
          const sig = await transfer(mainSigner(), to, Math.round(amt * LAMPORTS));
          toast(`Sent. <a href="${txUrl(sig)}" target="_blank" rel="noopener">View</a>`, false, 6000);
          d.hidden = true; refreshBalance(); loadActivity();
        } catch (e) { toast(esc(msg(e)), true, 6000); }
        finally { b.disabled = false; b.textContent = 'Send'; }
      };
    } else if (kind === 'receive') {
      const q = qrcode(0, 'M'); q.addData(S.pubkey); q.make();
      d.innerHTML = `<div class="qr">${q.createSvgTag({ cellSize: 4, margin: 0, scalable: true })}</div><div class="recv"><span class="label">Your devnet address</span>${esc(S.pubkey)}<div class="row gap"><button class="ghost tiny" id="recvCopy">Copy</button><a class="ghost tiny" href="${addrUrl(S.pubkey)}" target="_blank" rel="noopener">Explorer</a></div></div>`;
      $('#recvCopy').onclick = () => copy(S.pubkey, 'Address copied');
    }
  }

  /* ───────────────────────── tracer ───────────────────────── */
  const TR = { net: 'devnet', hops: [], report: null }; // devnet first: it's where Monyx lives
  function paintSamples() {
    const s = [['Monyx treasury', TREASURY, 'devnet']];
    if (S.pubkey) s.unshift(['My wallet', S.pubkey, 'devnet']);
    const recent = store.get('monyx.pro.recent', []);
    $('#traceSamples').innerHTML = '<span>Try</span>' + [...s, ...recent.slice(0, 3).map((r) => [name(r.a), r.a, r.n])]
      .map(([l, a, n]) => `<button data-a="${a}" data-n="${n}">${esc(l)}<span class="muted"> · ${n}</span></button>`).join('');
  }
  function setSeg(el, net) { $$('button', el).forEach((b) => b.classList.toggle('on', b.dataset.net === net)); }

  async function runTrace(address, net, { push = true } = {}) {
    if (!isAddr(address)) return status('That is not a Solana address.', true);
    TR.net = net; setSeg($('#traceNet'), net); $('#traceAddr').value = address;
    if (push) TR.hops.push({ a: address, n: net });
    paintHops();
    history.replaceState(null, '', `#trace/${address}/${net}`);
    const limit = +$('#traceLimit').value;
    status(`<span class="spin"></span>Reading ${limit} transactions from ${net}…<div class="progress"><i id="prog" style="width:0"></i></div>`);
    try {
      const rep = await T.trace(rpcUrl(net), address, limit, (d, n) => { const p = $('#prog'); if (p && n) p.style.width = `${(d / n) * 100}%`; });
      rep.network = net; TR.report = rep;
      const rec = store.get('monyx.pro.recent', []).filter((r) => r.a !== address);
      rec.unshift({ a: address, n: net }); store.set('monyx.pro.recent', rec.slice(0, 6));
      $('#traceOut').hidden = false;
      renderGraph(rep); renderStats(rep); renderRanks(rep); renderTimeline(rep);
      const miss = rep.timeline.filter((t) => !t.parsed).length;
      status(rep.scanned ? `${rep.scanned} transactions scanned${miss ? `, ${miss} could not be fetched (RPC limits)` : ''}. <a href="${addrUrl(address, net)}" target="_blank" rel="noopener">Explorer</a>` : 'No transactions found for this address on ' + net + '.');
      paintSamples();
    } catch (e) { status(esc(msg(e)), true); }
  }
  function status(html, err = false) { const s = $('#traceStatus'); s.innerHTML = html; s.className = 'status' + (err ? ' err' : ''); }
  function paintHops() {
    $('#hops').innerHTML = TR.hops.map((h, i) => `${i ? '<span class="arrow">→</span>' : ''}<button data-i="${i}" class="${i === TR.hops.length - 1 ? 'cur' : ''}">${esc(name(h.a))}</button>`).join('');
  }
  const colorOf = (c) => (c.netToTargetSol > 0 ? 'var(--in)' : c.netToTargetSol < 0 ? 'var(--sig)' : 'var(--tok)');

  function renderGraph(rep) {
    const svg = $('#graph'); const C = 320, R = 228;
    const cps = rep.counterparties.slice(0, 22);
    const vol = (c) => c.receivedSol + c.sentSol;
    const max = Math.max(1e-9, ...cps.map(vol));
    const N = cps.length;
    let html = `<g class="rings"><circle cx="${C}" cy="${C}" r="${R}" fill="none" stroke="var(--line)" stroke-dasharray="1 5"/></g>`;
    const nodes = cps.map((c, i) => {
      const ang = (i / Math.max(N, 1)) * Math.PI * 2 - Math.PI / 2;
      const k = vol(c) > 0 ? Math.sqrt(vol(c) / max) : 0;
      return { c, i, ang, x: C + Math.cos(ang) * R, y: C + Math.sin(ang) * R, r: 4 + k * 13, w: 0.8 + k * 6 };
    });
    html += nodes.map((n) => {
      const mx = (C + n.x) / 2, my = (C + n.y) / 2;
      const off = 26; const px = -Math.sin(n.ang) * off, py = Math.cos(n.ang) * off;
      const len = Math.hypot(n.x - C, n.y - C) + 20;
      return `<path class="edge" data-i="${n.i}" d="M${C},${C} Q${mx + px},${my + py} ${n.x},${n.y}" stroke="${colorOf(n.c)}" stroke-width="${n.w.toFixed(2)}" stroke-dasharray="${len}" stroke-dashoffset="${len}"><animate attributeName="stroke-dashoffset" to="0" dur=".7s" begin="${(n.i * 0.025).toFixed(3)}s" fill="freeze"/></path>`;
    }).join('');
    html += nodes.map((n) => {
      const cos = Math.cos(n.ang), sin = Math.sin(n.ang);
      const lx = n.x + cos * (n.r + 9), ly = n.y + sin * (n.r + 9) + 3;
      const anchor = cos > 0.2 ? 'start' : cos < -0.2 ? 'end' : 'middle';
      const lyy = Math.abs(cos) <= 0.2 ? n.y + sin * (n.r + 14) + 3 : ly;
      return `<g class="n" data-i="${n.i}"><circle cx="${n.x}" cy="${n.y}" r="${n.r.toFixed(1)}" fill="var(--ink)" stroke="${colorOf(n.c)}" stroke-width="1.3"/><circle cx="${n.x}" cy="${n.y}" r="${Math.max(1.5, n.r * 0.35).toFixed(1)}" fill="${colorOf(n.c)}"/><text x="${lx}" y="${lyy}" text-anchor="${anchor}">${esc(n.c.label || short(n.c.address))}</text></g>`;
    }).join('');
    html += `<g class="center"><circle cx="${C}" cy="${C}" r="30" fill="var(--bone)"/><circle cx="${C}" cy="${C}" r="38" fill="none" stroke="var(--line2)"/><text x="${C}" y="${C + 62}" text-anchor="middle">${esc(rep.label || short(rep.address, 5))}</text></g>`;
    if (!N) html += `<text x="${C}" y="${C - 60}" text-anchor="middle" fill="var(--mute)" style="font:400 11px var(--mono)">No direct SOL or token counterparties in this window</text>`;
    svg.innerHTML = html;
    svg._nodes = nodes;
  }
  function hot(i, on) {
    const svg = $('#graph');
    svg.classList.toggle('dim', on);
    $$('.edge', svg).forEach((e) => e.classList.toggle('hot', on && +e.dataset.i === i));
    $$('.n', svg).forEach((e) => e.classList.toggle('hot', on && +e.dataset.i === i));
    $$('#ranks li').forEach((e) => e.classList.toggle('hot', on && +e.dataset.i === i));
  }
  function tipFor(c) {
    const toks = Object.entries(c.tokens || {});
    return `<b>${esc(c.label || short(c.address, 8))}</b>${esc(short(c.address, 10))}<br>${c.txCount} tx · sent target ${fmtSol(c.sentSol)} · got ${fmtSol(c.receivedSol)} SOL${toks.length ? `<br>${toks.map(([m, d]) => `${esc(name(m))} ${d > 0 ? '+' : ''}${fmtSol(-d, 2)}`).join(' · ')}` : ''}`;
  }
  function renderStats(rep) {
    const times = rep.timeline.map((t) => t.time).filter(Boolean);
    const span = times.length > 1 ? (Math.max(...times) - Math.min(...times)) : 0;
    const spanTxt = span > 86400 ? `${(span / 86400).toFixed(1)}d` : span > 3600 ? `${(span / 3600).toFixed(1)}h` : `${Math.round(span / 60)}m`;
    const cells = [['Scanned', rep.scanned], ['SOL in', fmtSol(rep.totals.solIn, 3)], ['SOL out', fmtSol(rep.totals.solOut, 3)],
      ['Counterparties', rep.counterparties.length], ['Failed', rep.totals.failed], ['Window', times.length ? spanTxt : '–']];
    $('#traceStats').innerHTML = cells.map(([k, v]) => `<div class="stat"><span>${k}</span><b>${v}</b></div>`).join('');
  }
  function renderRanks(rep) {
    const max = Math.max(1e-9, ...rep.counterparties.map((c) => c.receivedSol + c.sentSol));
    $('#ranks').innerHTML = rep.counterparties.slice(0, 22).map((c, i) => {
      const v = c.receivedSol + c.sentSol;
      const toks = Object.keys(c.tokens || {}).length;
      return `<li data-i="${i}" data-a="${c.address}"><span class="i">${String(i + 1).padStart(2, '0')}</span><span class="a">${c.label ? `<em>${esc(c.label)}</em>` : ''}${esc(c.address)}</span><span class="v">${v ? fmtSol(v, 3) + ' SOL' : toks ? `${toks} token${toks > 1 ? 's' : ''}` : '–'} · ${c.txCount}tx</span><span class="bar"><i style="width:${(v / max) * 100}%;background:${colorOf(c)}"></i></span></li>`;
    }).join('') || '<li class="muted"><span></span><span>None in this window</span><span></span></li>';
  }
  function renderTimeline(rep) {
    const tl = [...rep.timeline].reverse();
    const svg = $('#timeline'); const H = 120, mid = 60, n = tl.length || 1, w = 1000 / n;
    const max = Math.max(1e-9, ...tl.map((t) => Math.abs(t.solDelta || 0)));
    svg.innerHTML = `<line x1="0" x2="1000" y1="${mid}" y2="${mid}" stroke="var(--line2)" vector-effect="non-scaling-stroke"/>` + tl.map((t, i) => {
      const h = t.solDelta ? Math.max(2, Math.sqrt(Math.abs(t.solDelta) / max) * (mid - 6)) : 2;
      const y = t.solDelta > 0 ? mid - h : mid;
      const fill = !t.ok ? 'var(--dim)' : t.solDelta > 0 ? 'var(--in)' : t.solDelta < 0 ? 'var(--sig)' : 'var(--line2)';
      return `<rect x="${i * w + w * 0.15}" y="${y}" width="${Math.max(1, w * 0.7)}" height="${h}" fill="${fill}" data-sig="${t.signature}"><title>${t.time ? new Date(t.time * 1000).toLocaleString() : ''} · ${t.solDelta > 0 ? '+' : ''}${t.solDelta} SOL${t.ok ? '' : ' · failed'}\n${(t.programs || []).join(', ')}</title></rect>`;
    }).join('');
    $('#tlNote').textContent = 'oldest → newest · bar height is SOL moved';
    $('#programs').innerHTML = rep.programs.slice(0, 12).map((p) => `<span>${esc(p.label || short(p.id))}<b>${p.count}</b></span>`).join('');
  }

  /* ───────────────────────── market ───────────────────────── */
  async function loadCatalog() {
    if (S.catalog) return S.catalog;
    const r = await fetch(`${METER}/catalog`);
    if (!r.ok) throw new Error(`Meter answered ${r.status}`);
    S.catalog = await r.json(); return S.catalog;
  }
  async function showMarket() {
    try {
      const cat = await loadCatalog();
      $('#catalog').innerHTML = cat.apis.map((a) => `<div class="api" data-name="${a.name}"><div><b>${esc(a.title)}</b> <span class="path">/api/${a.name}</span></div><span class="price">${a.priceSol} SOL</span><p>${esc(a.summary)}</p></div>`).join('');
      if (!S.sel) selectApi(cat.apis.find((a) => a.name === 'profile') || cat.apis[0]);
      else $$('.api').forEach((el) => el.classList.toggle('on', el.dataset.name === S.sel.name));
    } catch (e) {
      $('#catalog').innerHTML = `<div class="api"><p>Couldn't load the market. ${esc(msg(e))}</p></div>`;
    }
    loadKpis('#marketKpis');
  }
  async function loadKpis(sel) {
    try {
      const r = await fetch(`${METER}/ledger`); if (!r.ok) throw new Error('meter');
      const l = await r.json();
      l.pulls = Number(l.pulls) || 0; l.payers = Number(l.payers) || 0; l.earnedSol = Number(l.earnedSol) || 0;
      l.recent = Array.isArray(l.recent) ? l.recent : []; l.byApi = l.byApi && typeof l.byApi === 'object' ? l.byApi : {};
      $(sel).innerHTML = `<div><span>Pulls paid</span><b>${l.pulls.toLocaleString()}</b></div><div><span>SOL earned</span><b>${fmtSol(l.earnedSol, 4)}</b></div><div><span>Payers</span><b>${l.payers.toLocaleString()}</b></div>`;
      return l;
    } catch {
      $(sel).innerHTML = '<div><span>Pulls paid</span><b>–</b></div><div><span>SOL earned</span><b>–</b></div><div><span>Payers</span><b>–</b></div>';
      return null;
    }
  }
  function selectApi(a) {
    S.sel = a; const ce = $('#cEmpty'); if (ce) ce.hidden = true;
    $$('.api').forEach((el) => el.classList.toggle('on', el.dataset.name === a.name));
    $('#cTitle').textContent = `${a.title}`;
    $('#cPrice').innerHTML = `${a.priceSol} SOL<s>${a.priceLamports.toLocaleString()} lamports</s>`;
    const f = $('#cForm');
    f.innerHTML = Object.entries(a.params).map(([k, desc]) => k === 'net'
      ? `<label>${k}<select name="net"><option ${a.example.net !== 'mainnet' ? 'selected' : ''}>devnet</option><option ${a.example.net === 'mainnet' ? 'selected' : ''}>mainnet</option></select></label>`
      : `<label>${k} <small>${esc(desc)}</small><input name="${k}" spellcheck="false" value="${esc(a.example[k] || (k === 'address' && S.pubkey ? S.pubkey : ''))}"></label>`).join('')
      + `<div class="row"><button class="primary" type="submit" id="pullBtn">Pull for ${a.priceSol} SOL</button><button class="ghost tiny" type="button" id="curlBtn">Copy as curl</button></div>`;
    $('#exchange').innerHTML = '';
    if (a.name === 'tx' && !a.example.signature) {
      T.rpc(rpcUrl('devnet'), 'getSignaturesForAddress', [TREASURY, { limit: 1 }]).then((s) => {
        const i = $('#cForm input[name="signature"]'); if (i && !i.value && s[0]) i.value = s[0].signature;
        const n = $('#cForm select[name="net"]'); if (n) n.value = 'devnet';
      }).catch(() => {});
    }
  }
  const formParams = (f) => Object.fromEntries([...new FormData(f)].filter(([, v]) => String(v).trim()).map(([k, v]) => [k, String(v).trim()]));
  const apiUrl = (name, p) => `${METER}/api/${name}${Object.keys(p).length ? '?' + new URLSearchParams(p) : ''}`;

  // One full pay-per-pull exchange. `log(tag, html, json?)` narrates it.
  async function pull(api, params, signer, log) {
    const url = apiUrl(api, params);
    log('req', `GET /api/${api}${url.includes('?') ? '?' + url.split('?')[1] : ''}`);
    const r1 = await fetch(url);
    const q = await r1.json();
    if (r1.status !== 402) { log('bad', `${r1.status} ${esc(q.message || q.error)}`, q); throw safeErr(q.message || 'The market refused that request.'); }
    const acc = q.accepts[0];
    log('402', `402 Payment Required · ${acc.extra.sol} SOL to ${short(acc.payTo)} · ref ${short(acc.extra.reference)}`, q);
    const payLi = log('pay', `<span class="spin"></span>Signing transfer of ${acc.extra.sol} SOL with reference attached…`);
    let sig;
    try { sig = await transfer(signer, acc.payTo, acc.extra.lamports, acc.extra.reference); }
    catch (e) { payLi.querySelector('.line').innerHTML = esc(msg(e)); payLi.querySelector('.tag').className = 'tag bad'; throw e; }
    payLi.querySelector('.line').innerHTML = `Paid · <a href="${txUrl(sig)}" target="_blank" rel="noopener">${short(sig, 8)}</a> <span class="muted">confirmed on devnet</span>`;
    for (let attempt = 0; attempt < 3; attempt++) {
      const reqLi = log('req', `<span class="spin"></span>GET /api/${api} · X-PAYMENT: ${short(sig, 6)}`);
      const t0 = performance.now();
      const r2 = await fetch(url, { headers: { 'X-PAYMENT': sig } });
      const body = await r2.json();
      reqLi.querySelector('.line').innerHTML = `GET /api/${api} · X-PAYMENT: ${short(sig, 6)}`;
      if (r2.ok) { log('200', `200 OK · ${Math.round(performance.now() - t0)} ms · receipt ${short(body.receipt.transaction, 6)}`, body.data); return { ...body, sig }; }
      log('bad', `${r2.status} ${esc(body.message)}`, body);
      if (r2.status === 502 && body.retriesLeft > 0) { await new Promise((s) => setTimeout(s, 1500)); continue; }
      throw safeErr(body.message || 'The market refused that request.');
    }
    throw new Error('upstream kept failing');
  }
  function logger(ol) {
    return (tag, html, obj) => {
      const li = document.createElement('li');
      const cls = { req: 'req', '402': 'pay', pay: 'pay', '200': 'ok', bad: 'bad', plan: 'req', note: '' }[tag] || '';
      const label = { req: '→', '402': '402', pay: 'SOL', '200': '200', bad: 'ERR', plan: 'PLAN', note: '·' }[tag] || tag;
      li.innerHTML = `<span class="tag ${cls}">${label}</span><div class="line">${html}${obj ? `<details ${tag === '200' ? 'open' : ''}><summary class="muted">json</summary><pre>${hl(obj)}</pre></details>` : ''}</div>`;
      ol.appendChild(li); li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      return li;
    };
  }

  /* ───────────────────────── agent ───────────────────────── */
  function agentKp() {
    if (S.agentKp) return S.agentKp;
    const saved = store.get('monyx.pro.agent');
    S.agentKp = saved ? keypairFrom(saved) : W().Keypair.generate();
    if (!saved) store.set('monyx.pro.agent', Array.from(S.agentKp.secretKey));
    return S.agentKp;
  }
  async function paintAgent() {
    const kp = agentKp(); const a = kp.publicKey.toBase58();
    $('#agentAddr').innerHTML = `<a href="${addrUrl(a)}" target="_blank" rel="noopener">${short(a, 6)}</a>`;
    try {
      const b = (await conn().getBalance(kp.publicKey)) / LAMPORTS;
      $('#agentBal').textContent = `${fmtSol(b, 5)} SOL left`;
      $('#agentSpent').textContent = `spent ${fmtSol(S.agentSpent, 5)} on pulls`;
      const tot = b + S.agentSpent;
      $('#meterFill').style.width = tot ? `${(b / tot) * 100}%` : '0';
      return b;
    } catch { return 0; }
  }
  async function runAgent(target, net) {
    const ol = $('#agentLog'); ol.innerHTML = ''; const log = logger(ol);
    const btn = $('#agentRun'); btn.disabled = true;
    const signer = kpSigner(agentKp());
    try {
      const cat = await loadCatalog();
      const price = Object.fromEntries(cat.apis.map((a) => [a.name, a.priceLamports]));
      const plan = ['pulse', 'price', 'profile', 'trace'];
      const budget = plan.reduce((s, p) => s + price[p], 0) + plan.length * 5000;
      const bal = await paintAgent();
      log('plan', `Catalog has ${cat.apis.length} endpoints. To brief on ${esc(short(target, 6))} I need network state, a price, a profile and a trace. Worst case ${(budget / LAMPORTS).toFixed(5)} SOL with fees; I hold ${fmtSol(bal, 5)}.`);
      if (bal * LAMPORTS < budget) throw new Error('Agent wallet is short. Fund it from your wallet or from the devnet faucet.');
      const out = {};
      const spend = (name) => { S.agentSpent += price[name] / LAMPORTS; store.set('monyx.pro.agentSpent', S.agentSpent); paintAgent(); };
      out.pulse = await pull('pulse', { net }, signer, log); spend('pulse');
      out.price = await pull('price', {}, signer, log); spend('price');
      out.profile = await pull('profile', { address: target, net }, signer, log); spend('profile');
      if (!out.profile.data.activity.sampled) {
        log('note', `Profile shows no transactions on ${net}, so a trace would return nothing. Skipping it saves ${(price.trace / LAMPORTS)} SOL.`);
      } else {
        out.trace = await pull('trace', { address: target, net, limit: '25' }, signer, log); spend('trace');
      }
      writeBrief(target, net, out, price);
      log('note', 'Brief written.');
    } catch (e) { toast(esc(msg(e)), true, 6000); }
    finally { btn.disabled = false; paintAgent(); }
  }
  function writeBrief(target, net, o, price) {
    const p = o.profile.data, t = o.trace && o.trace.data, pr = o.price.data, pu = o.pulse.data;
    const srcs = []; const cite = (k) => { srcs.push(k); return `<sup><a href="${txUrl(o[k].sig)}" target="_blank" rel="noopener">${srcs.length}</a></sup>`; };
    const usd = p.sol * pr.price;
    const parts = [];
    parts.push(`<h4>${esc(p.label || short(target, 6))}</h4>`);
    parts.push(`<p>${p.exists ? '' : 'This address has no account on ' + net + ' yet. '}It holds <b>${fmtSol(p.sol, 4)} SOL</b>, about ${fmtUsd(usd)} at ${fmtUsd(pr.price)} a coin${cite('price')}, and ${p.tokenCount ? `${p.tokenCount} token${p.tokenCount > 1 ? 's' : ''}${p.tokens[0] ? `, the largest position being ${fmtSol(p.tokens[0].amount, 2)} ${esc(p.tokens[0].label || short(p.tokens[0].mint))}` : ''}` : 'no SPL tokens'}${cite('profile')}.${p.executable ? ` It is an executable program${p.ownerLabel ? ` owned by ${esc(p.ownerLabel)}` : ''}, not a person.` : ''}</p>`);
    if (t) {
      const top = t.counterparties[0];
      parts.push(`<p>Over its last ${t.scanned} transactions it took in ${fmtSol(t.totals.solIn, 4)} SOL and sent out ${fmtSol(t.totals.solOut, 4)} SOL across ${t.counterparties.length} counterpart${t.counterparties.length === 1 ? 'y' : 'ies'}${cite('trace')}.${top ? ` The heaviest is <b>${esc(top.label || short(top.address, 5))}</b>: ${top.txCount} transaction${top.txCount > 1 ? 's' : ''}, ${fmtSol(top.sentSol, 4)} SOL toward the target and ${fmtSol(top.receivedSol, 4)} back.` : ''}${t.programs[0] ? ` Most-touched program: ${esc(t.programs[0].label || short(t.programs[0].id))}.` : ''}</p>`);
    }
    const a = p.activity;
    parts.push(`<p>${a.sampled ? `Pace is ${a.txPerDay ?? '–'} transactions a day in the sampled window, with ${a.failureRatePct}% failing. Last seen ${a.newest ? new Date(a.newest).toLocaleString() : '–'}.` : 'No activity to speak of.'} ${net === 'mainnet' ? 'Mainnet' : 'Devnet'} was running ${pu.tps.toLocaleString()} TPS (${pu.nonVoteTps.toLocaleString()} non-vote) at slot ${pu.slot.toLocaleString()}${cite('pulse')}.</p>`);
    const total = srcs.reduce((s, k) => s + price[k], 0);
    parts.push(`<div class="src">${srcs.map((k, i) => `<span>[${i + 1}] /api/${k} · ${price[k] / LAMPORTS} SOL · <a href="${txUrl(o[k].sig)}" target="_blank" rel="noopener">${short(o[k].sig, 6)}</a></span>`).join('')}<span>Total paid: ${(total / LAMPORTS).toFixed(5)} SOL</span></div>`);
    $('#brief').innerHTML = parts.join('');
  }

  function paintDocs(kind = 'curl') {
    const base = `${METER}/api`;
    const D = {
      curl: `# 1. Ask. The meter answers 402 with a quote.
curl -s "${base}/profile?address=${TREASURY}&net=devnet"
#   -> { "accepts": [{ "payTo": "${TREASURY}",
#        "extra": { "lamports": 500000, "reference": "<one-time key>" } }] }

# 2. Pay: a devnet SOL transfer to payTo for >= lamports, with the
#    reference appended to the transfer instruction as a read-only key.

# 3. Ask again with the signature.
curl -s "${base}/profile?address=${TREASURY}&net=devnet" \\
  -H "X-PAYMENT: <transaction signature>"

# Free: catalog and public receipts
curl -s "${METER}/catalog"
curl -s "${METER}/ledger"`,
      js: `// npm i @solana/web3.js
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "@solana/web3.js";

const METER = "${base}";
const conn = new Connection("https://api.devnet.solana.com", "confirmed");
const agent = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(process.env.AGENT_KEY)));

export async function pull(api, params = {}) {
  const url = \`\${METER}/\${api}?\${new URLSearchParams(params)}\`;
  const quote = await fetch(url);
  if (quote.status !== 402) return quote.json();
  const { payTo, extra } = (await quote.json()).accepts[0];

  const ix = SystemProgram.transfer({ fromPubkey: agent.publicKey, toPubkey: new PublicKey(payTo), lamports: extra.lamports });
  ix.keys.push({ pubkey: new PublicKey(extra.reference), isSigner: false, isWritable: false });
  const sig = await sendAndConfirmTransaction(conn, new Transaction().add(ix), [agent], { commitment: "confirmed" });

  const res = await fetch(url, { headers: { "X-PAYMENT": sig } });
  return res.json();   // { api, receipt, data }
}

console.log(await pull("trace", { address: "${TREASURY}", net: "devnet", limit: 25 }));`,
      py: `# pip install solana solders requests
import json, os, requests
from solana.rpc.api import Client
from solders.keypair import Keypair
from solders.pubkey import Pubkey
from solders.instruction import Instruction, AccountMeta
from solders.system_program import transfer, TransferParams
from solders.message import Message
from solders.transaction import Transaction

METER = "${base}"
rpc = Client("https://api.devnet.solana.com")
agent = Keypair.from_bytes(bytes(json.loads(os.environ["AGENT_KEY"])))

def pull(api, **params):
    url = f"{METER}/{api}"
    q = requests.get(url, params=params)
    if q.status_code != 402:
        return q.json()
    acc = q.json()["accepts"][0]
    t = transfer(TransferParams(from_pubkey=agent.pubkey(), to_pubkey=Pubkey.from_string(acc["payTo"]),
                                lamports=acc["extra"]["lamports"]))
    ix = Instruction(t.program_id, t.data,
                     list(t.accounts) + [AccountMeta(Pubkey.from_string(acc["extra"]["reference"]), False, False)])
    bh = rpc.get_latest_blockhash().value.blockhash
    sig = rpc.send_transaction(Transaction([agent], Message([ix], agent.pubkey()), bh)).value
    rpc.confirm_transaction(sig, "confirmed")
    return requests.get(url, params=params, headers={"X-PAYMENT": str(sig)}).json()

print(pull("pulse", net="devnet"))`,
    };
    $('#docCode').textContent = D[kind];
    $$('#docTabs button').forEach((b) => b.classList.toggle('on', b.dataset.doc === kind));
    $('#catLink').href = `${METER}/catalog`;
  }

  /* ───────────────────────── ledger ───────────────────────── */
  async function showLedger() {
    const l = await loadKpis('#ledgerKpis');
    if (!l) {
      $('#ledgerTable').innerHTML = '<tr><td class="muted">The meter isn’t answering right now. Hit Refresh in a minute.</td></tr>';
      $('#ledgerBars').innerHTML = '<p class="empty-note">Pulls per endpoint show here once the meter answers.</p>';
      return;
    }
    $('#ledgerTable').innerHTML = '<tr><th>When</th><th>Endpoint</th><th>Payer</th><th>SOL</th><th>Tx</th></tr>' + (l.recent.length ? l.recent.map((r) =>
      `<tr><td class="muted">${ago(Date.parse(r.created_at) / 1000)}</td><td>/${esc(r.api)}${r.served ? '' : ' <span class="down">unserved</span>'}</td><td><a href="${addrUrl(r.payer)}" target="_blank" rel="noopener">${short(r.payer)}</a></td><td>${Number(r.lamports) / LAMPORTS}</td><td><a href="${txUrl(r.sig)}" target="_blank" rel="noopener">${short(r.sig, 5)}</a></td></tr>`).join('')
      : '<tr><td colspan="5" class="muted">No paid pulls yet. Be the first from the Market.</td></tr>');
    const max = Math.max(1, ...Object.values(l.byApi));
    const cat = S.catalog || (await loadCatalog().catch(() => null));
    const names = cat && Array.isArray(cat.apis) ? cat.apis.map((a) => a.name) : Object.keys(l.byApi);
    $('#ledgerBars').innerHTML = names.length ? names.map((n) => `<div><span>/${esc(n)}</span><i style="width:${((l.byApi[n] || 0) / max) * 100}%"></i><em>${l.byApi[n] || 0}</em></div>`).join('')
      : '<p class="empty-note">No endpoints have been paid for yet. Try one from the Market.</p>';
  }

  /* ───────────────────────── router ───────────────────────── */
  const TITLES = { wallet: 'Wallet', trace: 'Tracer', market: 'Market', agents: 'Agents', ledger: 'Ledger' };
  function route() {
    const [view, a, n] = (location.hash.slice(1) || 'wallet').split('/');
    const v = TITLES[view] ? view : 'wallet';
    $$('.view').forEach((s) => (s.hidden = s.id !== `v-${v}`));
    $$('#nav a').forEach((x) => x.classList.toggle('on', x.dataset.view === v));
    $('#crumb').textContent = TITLES[v];
    if (v === 'trace') { paintSamples(); if (a && isAddr(a) && (!TR.report || TR.report.address !== a)) { TR.hops = []; runTrace(a, n === 'mainnet' ? 'mainnet' : 'devnet'); } }
    if (v === 'market') showMarket();
    if (v === 'agents') { paintAgent(); paintDocs(); if (!$('#agentTarget').value) $('#agentTarget').value = S.pubkey || TREASURY; }
    if (v === 'ledger') showLedger();
    window.scrollTo(0, 0);
  }

  /* ───────────────────────── tickers ───────────────────────── */
  async function tickPrice() {
    try {
      const r = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true');
      const s = (await r.json()).solana; S.price = s.usd;
      $('#tickPrice').textContent = fmtUsd(s.usd);
      const c = $('#tickChg'); c.textContent = `${s.usd_24h_change >= 0 ? '+' : ''}${s.usd_24h_change.toFixed(2)}%`; c.className = s.usd_24h_change >= 0 ? 'up' : 'down';
      if (S.bal != null) $('#balUsd').textContent = `≈ ${fmtUsd(S.bal * S.price)} at mainnet price`;
    } catch {}
  }
  async function tickSlot() {
    try { $('#tickSlot').textContent = (await T.rpc(rpcUrl('devnet'), 'getSlot', [], 1)).toLocaleString(); } catch {}
  }

  function rpcDialog() {
    const d = $('#dlg');
    $('#dlgBody').innerHTML = `<h3>RPC endpoints</h3><p>The public endpoints rate-limit. Paste a Helius, Triton or QuickNode URL to trace faster. Stored only in this browser.</p>
      <label class="label">Mainnet</label><input id="rpcM" value="${esc(store.get('monyx.pro.rpc.mainnet') || '')}" placeholder="${DEFAULT_RPC.mainnet}">
      <label class="label" style="display:block;margin-top:12px">Devnet</label><input id="rpcD" value="${esc(store.get('monyx.pro.rpc.devnet') || '')}" placeholder="${DEFAULT_RPC.devnet}">
      <menu><button class="ghost" value="cancel">Cancel</button><button class="primary" value="ok" id="rpcSave">Save</button></menu>`;
    $('#rpcSave').onclick = () => {
      const m = $('#rpcM').value.trim(), dv = $('#rpcD').value.trim();
      m ? store.set('monyx.pro.rpc.mainnet', m) : store.del('monyx.pro.rpc.mainnet');
      dv ? store.set('monyx.pro.rpc.devnet', dv) : store.del('monyx.pro.rpc.devnet');
      toast('RPC saved');
    };
    d.showModal();
  }

  /* ───────────────────────── wire ───────────────────────── */
  function wire() {
    $('#useBuiltin').onclick = () => {
      if (typeof solanaWeb3 === 'undefined') return toast('Solana library failed to load. Refresh.', true);
      useBuiltin(W().Keypair.generate()); toast('Monyx key created. Hit Get SOL to fund it from the devnet faucet.', false, 4500);
    };
    $('#usePhantom').onclick = () => usePhantom(false);
    $('#importKey').addEventListener('click', (e) => e.stopPropagation());
    $('#importKey').addEventListener('change', (e) => {
      try { useBuiltin(keypairFrom(JSON.parse(e.target.value))); e.target.value = ''; toast('Key imported'); }
      catch { toast('Expected a JSON array of 64 numbers.', true); }
    });
    $('#forget').onclick = () => {
      if (S.mode === 'builtin' && !confirm('Disconnecting keeps the key in this browser only if you reconnect from the same device. Copy it first if it matters. Continue?')) return;
      if (S.mode === 'builtin') store.del('monyx.pro.key');
      forget();
    };
    $('#exportKey').onclick = () => {
      // Exporting a key is the one action that can lose someone everything, so make them mean it.
      if (!window.confirm('Copy your secret key?\n\nAnyone who has this key can take everything in this wallet. Monyx will never ask for it. Only paste it into a wallet you trust, and never into a website, chat or form.')) return;
      copy(JSON.stringify(Array.from(S.kp.secretKey)), 'Secret key copied. Keep it private.');
    };
    $('#myAddr').onclick = () => copy(S.pubkey, 'Address copied');
    $('#whoBtn').onclick = () => (location.hash = '#wallet');
    $('#refreshAct').onclick = () => { refreshBalance(); loadActivity(); };
    $$('.actions button').forEach((b) => (b.onclick = async () => {
      const act = b.dataset.act;
      if (act === 'send' || act === 'receive') return drawer(act);
      if (act === 'traceme') { TR.hops = []; location.hash = `#trace/${S.pubkey}/devnet`; return; }
      if (act === 'airdrop') {
        b.disabled = true; const t = b.innerHTML; b.innerHTML = '<span class="spin"></span>Requesting';
        try { await airdrop(S.pubkey); }
        catch (e) { toast(e.message, false, 8000); }
        finally { b.disabled = false; b.innerHTML = t; }
      }
    }));

    $('#traceForm').onsubmit = (e) => { e.preventDefault(); TR.hops = []; runTrace($('#traceAddr').value.trim(), TR.net); };
    $('#traceNet').onclick = (e) => { const b = e.target.closest('button'); if (b) { TR.net = b.dataset.net; setSeg($('#traceNet'), TR.net); } };
    $('#traceSamples').onclick = (e) => { const b = e.target.closest('button'); if (b) { TR.hops = []; runTrace(b.dataset.a, b.dataset.n); } };
    $('#hops').onclick = (e) => {
      const b = e.target.closest('button'); if (!b) return;
      const i = +b.dataset.i; const h = TR.hops[i]; TR.hops = TR.hops.slice(0, i + 1); runTrace(h.a, h.n, { push: false });
    };
    const follow = (i) => { const c = TR.report && TR.report.counterparties[i]; if (c) runTrace(c.address, TR.net); };
    const graph = $('#graph'), tip = $('#tip');
    graph.addEventListener('mousemove', (e) => {
      const g = e.target.closest('.n');
      if (!g) { tip.hidden = true; hot(-1, false); return; }
      const i = +g.dataset.i; hot(i, true);
      const box = graph.parentElement.getBoundingClientRect();
      tip.innerHTML = tipFor(TR.report.counterparties[i]); tip.hidden = false;
      const x = e.clientX - box.left + 14, y = e.clientY - box.top + 14;
      tip.style.left = `${Math.min(x, box.width - 230)}px`; tip.style.top = `${y}px`;
    });
    graph.addEventListener('mouseleave', () => { tip.hidden = true; hot(-1, false); });
    graph.addEventListener('click', (e) => { const g = e.target.closest('.n'); if (g) follow(+g.dataset.i); });
    $('#ranks').addEventListener('click', (e) => { const li = e.target.closest('li[data-i]'); if (li) follow(+li.dataset.i); });
    $('#ranks').addEventListener('mouseover', (e) => { const li = e.target.closest('li[data-i]'); hot(li ? +li.dataset.i : -1, !!li); });
    $('#ranks').addEventListener('mouseleave', () => hot(-1, false));
    $('#timeline').addEventListener('click', (e) => { const r = e.target.closest('rect'); if (r) window.open(txUrl(r.dataset.sig, TR.net), '_blank', 'noopener'); });

    $('#catalog').onclick = (e) => { const el = e.target.closest('.api'); if (el && S.catalog) selectApi(S.catalog.apis.find((a) => a.name === el.dataset.name)); };
    $('#cForm').onsubmit = async (e) => {
      e.preventDefault();
      if (!S.pubkey) { toast('Pick a wallet on the Wallet tab first, or let an agent pay on the Agents tab.', true, 5000); return; }
      const b = $('#pullBtn'); b.disabled = true;
      $('#exchange').innerHTML = '';
      try { await pull(S.sel.name, formParams(e.target), mainSigner(), logger($('#exchange'))); refreshBalance(); loadKpis('#marketKpis'); }
      catch {}
      finally { b.disabled = false; }
    };
    $('#cForm').addEventListener('click', (e) => {
      if (e.target.id !== 'curlBtn') return;
      copy(`curl -s "${apiUrl(S.sel.name, formParams($('#cForm')))}"`, 'curl copied');
    });

    $('#fundAgent').onclick = async (e) => {
      const b = e.target; b.disabled = true;
      try { const sig = await transfer(mainSigner(), agentKp().publicKey.toBase58(), 0.003 * LAMPORTS); toast(`Agent funded. <a href="${txUrl(sig)}" target="_blank" rel="noopener">View</a>`, false, 5000); paintAgent(); refreshBalance(); }
      catch (err) { toast(esc(msg(err)), true, 6000); }
      finally { b.disabled = false; }
    };
    $('#dropAgent').onclick = async (e) => {
      const b = e.target; b.disabled = true;
      try { await airdrop(agentKp().publicKey.toBase58()); }
      catch (err) { toast(err.message, false, 8000); }
      finally { b.disabled = false; }
    };
    let agentNet = 'devnet';
    $('#agentNet').onclick = (e) => { const b = e.target.closest('button'); if (b) { agentNet = b.dataset.net; setSeg($('#agentNet'), agentNet); } };
    $('#agentForm').onsubmit = (e) => {
      e.preventDefault();
      const t = $('#agentTarget').value.trim();
      if (!isAddr(t)) return toast('Give the agent a Solana address.', true);
      runAgent(t, agentNet);
    };
    $('#docTabs').onclick = (e) => { const b = e.target.closest('button'); if (b) paintDocs(b.dataset.doc); };
    $('#refreshLedger').onclick = showLedger;
    $('#rpcBtn').onclick = rpcDialog;

    document.addEventListener('keydown', (e) => {
      if (e.target.matches('input, textarea, select') || e.metaKey || e.ctrlKey || e.altKey) return;
      const v = ['wallet', 'trace', 'market', 'agents', 'ledger'][+e.key - 1];
      if (v) location.hash = '#' + v;
    });
    window.addEventListener('hashchange', route);
  }

  function boot() {
    wire();
    if (typeof solanaWeb3 !== 'undefined') {
      const mode = store.get('monyx.pro.mode'); const key = store.get('monyx.pro.key');
      if (mode === 'builtin' && key) { try { useBuiltin(keypairFrom(key)); } catch {} }
      else if (mode === 'phantom') setTimeout(() => usePhantom(true), 300);
    }
    route(); tickPrice(); tickSlot();
    setInterval(tickPrice, 60000); setInterval(tickSlot, 12000); setInterval(refreshBalance, 20000);
  }
  boot();
})();
