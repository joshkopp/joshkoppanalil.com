/* Above Board — UI and Solana devnet wiring. Fairness maths lives in fairness.js. */
(() => {
  const $ = (id) => document.getElementById(id);
  const MEMO_PROGRAM = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr';
  const RPC = 'https://api.devnet.solana.com';
  const STORE = 'aboveboard.v1';
  const HOUSE = 'https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/aboveboard';
  const FAUCET = 'https://faucet.solana.com/';
  const START = 1000;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const S = {
    bal: START, nonce: 1, mode: 'under', chance: 50,
    serverSeed: '', commit: '', commitTx: null, houseMode: 'local', history: [], pubkey: null, busy: false
  };

  const fmt = (n) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
  const short = (s) => s.slice(0, 10) + '…' + s.slice(-8);
  const pad4 = (n) => String(n).padStart(4, '0');
  const round2 = (n) => Math.round(n * 100) / 100;
  const need = (mode, chance) => (mode === 'under' ? `under ${chance}` : `${100 - chance} or over`);

  function flash(msg, ms = 4000) {
    const f = $('flash');
    f.textContent = msg; f.style.display = 'block';
    clearTimeout(flash._t); flash._t = setTimeout(() => (f.style.display = 'none'), ms);
  }

  /* ── persistence (per browser, best effort) ── */
  function save() {
    try {
      localStorage.setItem(STORE, JSON.stringify({
        bal: S.bal, nonce: S.nonce, mode: S.mode, chance: S.chance,
        clientSeed: $('clientSeed').value, stake: $('bet').value,
        history: S.history.slice(0, 100)
      }));
    } catch {}
  }
  function load() {
    try {
      const d = JSON.parse(localStorage.getItem(STORE) || 'null');
      if (!d) return false;
      S.bal = Number.isFinite(d.bal) && d.bal >= 1 ? d.bal : START;
      S.nonce = Number.isInteger(d.nonce) && d.nonce > 0 ? d.nonce : 1;
      S.mode = d.mode === 'over' ? 'over' : 'under';
      S.chance = Math.min(98, Math.max(2, Math.round(d.chance) || 50));
      S.history = Array.isArray(d.history) ? d.history : [];
      if (d.clientSeed) $('clientSeed').value = d.clientSeed;
      if (d.stake) $('bet').value = d.stake;
      $('chance').value = S.chance;
      return true;
    } catch { return false; }
  }

  /* ── guilloche masthead ── */
  function drawGuilloche() {
    const W = 800, cy = 80;
    const bands = [
      { amp: 30, freq: 2.2, ripple: 9, waves: 17, w: .55, op: 1 },
      { amp: 24, freq: 3.1, ripple: 13, waves: 23, w: .45, op: .85 },
      { amp: 38, freq: 1.6, ripple: 6, waves: 11, w: .5, op: .7 }
    ];
    let out = '';
    for (const b of bands) for (let pass = 0; pass < 4; pass++) {
      const ph = (pass / 4) * Math.PI * 2;
      let d = '';
      for (let x = 0; x <= W; x += 2) {
        const t = (x / W) * Math.PI * 2;
        const y = cy + b.amp * Math.sin(t * b.freq + ph) + b.ripple * Math.sin(t * b.waves + ph * 2);
        d += (d ? 'L' : 'M') + x + ' ' + y.toFixed(1);
      }
      out += `<path d="${d}" fill="none" stroke="var(--guilloche)" stroke-width="${b.w}" opacity="${b.op}"/>`;
    }
    $('guilloche').innerHTML = out;
  }

  /* ── stake: whole chips only, never more than the balance ── */
  function stake() {
    const raw = Math.floor(Number($('bet').value));
    return Number.isFinite(raw) ? raw : 0;
  }
  function clampStake() {
    const max = Math.floor(S.bal);
    let v = stake();
    if (v > max) v = max;
    if (v < 1) v = Math.min(10, max);
    $('bet').value = v;
  }

  function hint() {
    if (!S.busy) $('callout').textContent = `You win if the roll is ${need(S.mode, S.chance)}.`;
  }

  function render() {
    const mult = Fair.multiplier(S.chance);
    const bet = Math.max(0, stake());
    $('chanceLbl').textContent = S.chance + '%';
    $('odds').textContent = S.chance <= 20 ? 'Long shot, pays big.' : S.chance >= 80 ? 'Safe bet, small payout.' : 'Lower chance pays more.';
    $('summary').innerHTML = bet >= 1
      ? `Win and get back <b>${fmt(round2(bet * mult))}</b> chips (${mult.toFixed(2)}&times;).`
      : 'Enter a stake of at least 1 chip.';
    $('tUnder').textContent = S.chance;
    $('tOver').textContent = 100 - S.chance;
    $('mUnder').setAttribute('aria-pressed', S.mode === 'under');
    $('mOver').setAttribute('aria-pressed', S.mode === 'over');
    const z = $('zone');
    z.style.left = (S.mode === 'under' ? 0 : 100 - S.chance) + '%';
    z.style.width = S.chance + '%';
    z.classList.toggle('thin', S.chance < 16);
    $('bal').textContent = fmt(S.bal);
    $('nonceOut').textContent = S.nonce;
  }

  async function house(body, ms = 7000) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), ms);
    try {
      const r = await fetch(HOUSE, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body), signal: ctl.signal });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw Object.assign(new Error(j.message || `House error ${r.status}`), { status: r.status });
      return j;
    } finally { clearTimeout(t); }
  }

  async function seal() {
    S.commit = ''; S.serverSeed = ''; S.commitTx = null;
    $('commit').textContent = 'sealing\u2026';
    try {
      const j = await house({ action: 'commit' });
      S.commit = j.commit; S.commitTx = j.commitTx || null; S.houseMode = 'remote';
      S.houseNote = j.note || null;
    } catch {
      S.serverSeed = Fair.randomSeed();
      S.commit = await Fair.sha256Hex(S.serverSeed);
      S.houseMode = 'local'; S.commitTx = null;
    }
    $('commit').textContent = S.commit.slice(0, 12) + '\u2026' + S.commit.slice(-8);
    $('commitFull').textContent = S.commit;
    renderSeal();
  }

  function renderSeal() {
    const el = $('sealStatus');
    if (S.houseMode === 'remote' && S.commitTx) {
      el.innerHTML = `<a target="_blank" rel="noopener" href="https://explorer.solana.com/tx/${S.commitTx}?cluster=devnet">sealed on devnet</a>`;
      el.className = 'sstat ok';
    } else if (S.houseMode === 'remote') {
      el.textContent = 'sealed by the house server';
      el.className = 'sstat';
      el.title = 'The house wallet needs devnet SOL to post seals onchain.';
    } else {
      el.textContent = 'offline mode: sealed in your browser';
      el.className = 'sstat warn';
    }
  }

  function spin(final) {
    return new Promise((done) => {
      const el = $('readout');
      if (REDUCED) { el.textContent = final.toFixed(2); return done(); }
      const t0 = performance.now();
      const step = (now) => {
        const t = now - t0;
        if (t < 620) {
          el.textContent = (Math.random() * 100).toFixed(2).padStart(5, '0');
          requestAnimationFrame(step);
        } else { el.textContent = final.toFixed(2); done(); }
      };
      requestAnimationFrame(step);
    });
  }

  /* ── a round ── */
  async function roll() {
    if (S.busy) return;
    if (!S.commit) return flash('Still sealing the next seed. One moment.');
    const bet = stake();
    if (bet < 1) return flash('Enter a stake of at least 1 chip.');
    if (bet > S.bal) { clampStake(); render(); return flash(`Stake lowered to your balance of ${fmt(Math.floor(S.bal))}.`); }
    const clientSeed = $('clientSeed').value.trim();
    if (!clientSeed) { $('clientSeed').value = Fair.randomSeed(8); }

    S.busy = true;
    $('rollBtn').disabled = true;
    $('bet').value = bet;
    $('stamp').classList.remove('show');
    $('needle').style.opacity = 0;
    $('readout').className = 'readout';
    $('callout').textContent = 'Rolling…';

    const { commit, commitTx, nonce, mode, chance, houseMode } = S;
    const cs = $('clientSeed').value.trim();
    let serverSeed = S.serverSeed;
    if (houseMode === 'remote') {
      try {
        const j = await house({ action: 'reveal', commit, clientSeed: cs, nonce });
        serverSeed = j.serverSeed;
      } catch (e) {
        S.busy = false; $('rollBtn').disabled = false; hint();
        flash((e && e.message) || 'The house did not answer. Try again.');
        if (e && e.status === 409) seal();
        return;
      }
    }
    // Never trust the house: recompute locally and check its fingerprint.
    const value = await Fair.roll(serverSeed, cs, nonce);
    if ((await Fair.sha256Hex(serverSeed)) !== commit) {
      S.busy = false; $('rollBtn').disabled = false;
      flash('The revealed seed does not match its fingerprint. Roll cancelled.');
      return seal();
    }
    const win = Fair.isWin(value, mode, chance);
    const mult = Fair.multiplier(chance);
    const back = round2(bet * mult);
    const delta = round2(win ? back - bet : -bet);

    await spin(value);

    $('readout').className = 'readout ' + (win ? 'win' : 'lose');
    const needle = $('needle');
    needle.style.opacity = 1;
    needle.style.left = `calc(${value}% - 1px)`;
    const stamp = $('stamp');
    stamp.textContent = win ? 'PAID' : 'VOID';
    stamp.className = 'stamp ' + (win ? 'paid' : 'void');
    requestAnimationFrame(() => stamp.classList.add('show'));
    $('callout').textContent = win
      ? `You needed ${need(mode, chance)}. You get back ${fmt(back)} chips.`
      : `You needed ${need(mode, chance)}. Stake lost.`;

    S.bal = round2(S.bal + delta);
    const entry = { n: nonce, bet, mode, chance, value, win, delta, serverSeed, commit, commitTx, house: houseMode, clientSeed: cs, tx: null, txState: null, checked: null };
    S.history.unshift(entry);
    S.nonce++;

    if (S.bal < 1) {
      S.bal = START;
      flash(`Out of chips. Topped back up to ${fmt(START)} play chips.`);
    }
    if (stake() > S.bal) clampStake();

    await seal();
    render();
    renderStubs(true);
    save();
    S.busy = false;
    $('rollBtn').disabled = false;

  }

  /* ── optional devnet memo ── */
  async function record(entry) {
    if (!S.pubkey) { await toggleWallet(); if (!S.pubkey) return; }
    const p = provider();
    if (!p || typeof solanaWeb3 === 'undefined') return;
    entry.txState = 'pending'; renderStubs();
    try {
      const { Connection, PublicKey, Transaction, TransactionInstruction } = solanaWeb3;
      const conn = new Connection(RPC, 'confirmed');
      const memo = `ABOVEBOARD1 c=${entry.commit} s=${entry.serverSeed} p=${entry.clientSeed} n=${entry.n} r=${entry.value.toFixed(2)}`;
      const tx = new Transaction().add(new TransactionInstruction({
        keys: [{ pubkey: new PublicKey(S.pubkey), isSigner: true, isWritable: false }],
        programId: new PublicKey(MEMO_PROGRAM),
        data: new TextEncoder().encode(memo)
      }));
      tx.feePayer = new PublicKey(S.pubkey);
      tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
      const { signature } = await p.signAndSendTransaction(tx);
      entry.tx = signature; entry.txState = 'done';
      flash('Result written to devnet.');
      balance();
    } catch (e) {
      console.error(e);
      entry.txState = 'failed';
      const msg = String(e && e.message || e);
      flash(/reject|denied|cancel/i.test(msg) ? 'Devnet write cancelled in Phantom.'
        : /insufficient|0x1|debit|prior credit/i.test(msg) ? 'Not enough devnet SOL for the fee. Use "Get devnet SOL".'
        : 'Devnet write failed. Check Phantom is set to Devnet.');
    }
    renderStubs(); save();
  }

  /* ── audit trail ── */
  function txCell(e, i) {
    const bits = [];
    if (e.commitTx) bits.push(`<a class="chk" target="_blank" rel="noopener" title="The house posted this fingerprint before your bet" href="https://explorer.solana.com/tx/${e.commitTx}?cluster=devnet">seal</a>`);
    if (e.tx) bits.push(`<a class="chk" target="_blank" rel="noopener" title="You wrote this result to devnet" href="https://explorer.solana.com/tx/${e.tx}?cluster=devnet">result</a>`);
    else if (e.txState === 'pending') bits.push('<span class="chk">writing\u2026</span>');
    else bits.push(`<button class="ghost" data-w="${i}">${e.txState === 'failed' ? 'Retry devnet' : 'Put on devnet'}</button>`);
    return bits.join(' ');
  }
  function renderStubs(fresh) {
    const h = S.history;
    $('stubCount').textContent = h.length ? `${h.length} roll${h.length === 1 ? '' : 's'} on record` : '';
    $('clearBtn').hidden = !h.length;
    if (!h.length) {
      $('hist').innerHTML = '<div class="empty">No rolls yet. Every bet prints a stub here with the seed revealed.</div>';
      return;
    }
    $('hist').innerHTML = h.slice(0, 60).map((e, i) => `
      <div class="stub ${e.win ? 'win' : 'lose'}${fresh && i === 0 ? ' fresh' : ''}">
        <span class="no">${pad4(e.n)}</span>
        <span>
          <span class="fig">${e.value.toFixed(2)}</span><span class="meta">${e.bet} on ${need(e.mode, e.chance)}</span>
          <span class="seed">seed ${short(e.serverSeed)}</span>
        </span>
        <span class="right">
          ${txCell(e, i)}
          <span class="amt">${e.delta > 0 ? '+' : ''}${fmt(e.delta)}</span>
          ${e.checked === null || e.checked === undefined
            ? `<button data-v="${i}" aria-label="Check roll ${e.n}">Check</button>`
            : `<span class="chk ${e.checked ? 'ok' : 'bad'}">${e.checked ? '✓ verified' : '✗ mismatch'}</span>`}
        </span>
      </div>`).join('');
  }
  $('hist').addEventListener('click', async (ev) => {
    const w = ev.target.closest('button[data-w]');
    if (w) return record(S.history[+w.dataset.w]);
    const b = ev.target.closest('button[data-v]');
    if (!b) return;
    const e = S.history[+b.dataset.v];
    const v = await Fair.verify({ serverSeed: e.serverSeed, commit: e.commit, clientSeed: e.clientSeed, nonce: e.n, roll: e.value });
    e.checked = !!(v.commitOk && v.rollOk);
    renderStubs(); save();
  });

  /* ── wallet ── */
  const provider = () => (window.phantom && window.phantom.solana) || (window.solana && window.solana.isPhantom ? window.solana : null);

  async function balance() {
    if (!S.pubkey || typeof solanaWeb3 === 'undefined') return;
    try {
      const conn = new solanaWeb3.Connection(RPC, 'confirmed');
      const l = await conn.getBalance(new solanaWeb3.PublicKey(S.pubkey));
      $('walletInfo').textContent = `${short(S.pubkey)}  ${(l / 1e9).toFixed(3)} SOL`;
    } catch { $('walletInfo').textContent = short(S.pubkey); }
  }

  function setWallet(key) {
    S.pubkey = key;
    const on = !!key;
    $('dot').classList.toggle('live', on);
    $('connectBtn').textContent = on ? 'Disconnect' : 'Connect Phantom';
    $('airdropBtn').hidden = !on;
    if (!on) $('walletInfo').textContent = 'No wallet connected';
    else balance();
  }

  async function toggleWallet() {
    const p = provider();
    if (S.pubkey) { try { await p.disconnect(); } catch {} return setWallet(null); }
    if (!p) {
      if (MOBILE) {
        flash('Opening this page inside the Phantom app…');
        const u = encodeURIComponent(location.href);
        location.href = `https://phantom.app/ul/browse/${u}?ref=${encodeURIComponent(location.origin)}`;
        return;
      }
      flash('Phantom not found. Install it, then switch the wallet to Devnet.');
      return window.open('https://phantom.app/', '_blank', 'noopener');
    }
    if (typeof solanaWeb3 === 'undefined') return flash('The Solana library did not load. Refresh and try again.');
    try {
      const r = await p.connect();
      setWallet(r.publicKey.toString());
      flash('Connected. Check Phantom is set to Devnet.');
    } catch { flash('Connection cancelled.'); }
  }

  // Devnet's RPC airdrop is closed; the official faucet is the only reliable source.
  async function airdrop() {
    if (!S.pubkey) return;
    try { await navigator.clipboard.writeText(S.pubkey); flash('Your address is copied. Paste it into the faucet and pick Devnet.', 6000); }
    catch { flash('Paste your wallet address into the faucet and pick Devnet.', 6000); }
    window.open(FAUCET, '_blank', 'noopener');
  }

  /* ── wiring ── */
  $('chance').addEventListener('input', (e) => { S.chance = +e.target.value; render(); hint(); save(); });
  $('bet').addEventListener('input', render);
  $('bet').addEventListener('change', () => { clampStake(); render(); save(); });
  $('mUnder').onclick = () => { S.mode = 'under'; render(); hint(); save(); };
  $('mOver').onclick = () => { S.mode = 'over'; render(); hint(); save(); };
  $('half').onclick = () => { $('bet').value = Math.max(1, Math.floor(stake() / 2)); render(); save(); };
  $('dbl').onclick = () => { $('bet').value = Math.max(1, Math.min(Math.floor(S.bal), stake() * 2)); render(); save(); };
  $('max').onclick = () => { $('bet').value = Math.floor(S.bal); render(); save(); };
  $('rollBtn').onclick = roll;
  $('connectBtn').onclick = toggleWallet;
  $('airdropBtn').onclick = airdrop;
  $('clientSeed').addEventListener('change', save);
  $('clearBtn').onclick = () => {
    if (!confirmClear()) return;
    S.history = []; S.bal = START; S.nonce = 1;
    $('bet').value = 10; renderStubs(); render(); hint(); save();
    flash('Balance and audit trail reset.');
  };
  function confirmClear() {
    const b = $('clearBtn');
    if (b.dataset.armed) { delete b.dataset.armed; b.textContent = 'Reset'; return true; }
    b.dataset.armed = '1'; b.textContent = 'Tap again to reset';
    setTimeout(() => { delete b.dataset.armed; b.textContent = 'Reset'; }, 3000);
    return false;
  }

  addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || e.repeat) return;
    if (/INPUT|TEXTAREA|BUTTON|SUMMARY|SELECT|A/.test(e.target.tagName)) return;
    e.preventDefault(); roll();
  });

  $('vBtn').onclick = async () => {
    const seed = $('vSeed').value.trim();
    const client = $('vClient').value.trim();
    const n = parseInt($('vNonce').value, 10);
    if (!seed || !client || !(n >= 1)) { $('vOut').textContent = 'Fill in the revealed seed, player seed and roll number.'; return; }
    const v = await Fair.verify({ serverSeed: seed, commit: $('vCommit').value.trim() || null, clientSeed: client, nonce: n });
    $('vOut').innerHTML = `roll = <b>${v.recomputed.toFixed(2)}</b>` +
      (v.commitOk === null ? '' : ` &nbsp; fingerprint <span class="chk ${v.commitOk ? 'ok' : 'bad'}">${v.commitOk ? 'matches' : 'does not match'}</span>`);
  };

  /* ── boot ── */
  if (MOBILE) document.documentElement.classList.add('touch');
  drawGuilloche();
  if (!load()) $('clientSeed').value = Fair.randomSeed(8);
  clampStake();
  render(); hint(); renderStubs(); setWallet(null);
  seal();
  const p = provider();
  if (p) {
    if (p.isConnected && p.publicKey) setWallet(p.publicKey.toString());
    else p.connect({ onlyIfTrusted: true }).then((r) => setWallet(r.publicKey.toString())).catch(() => {});
    p.on && p.on('accountChanged', (pk) => setWallet(pk ? pk.toString() : null));
    p.on && p.on('disconnect', () => setWallet(null));
  }
})();
