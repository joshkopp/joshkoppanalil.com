/* Above Board — UI, session handling and Solana devnet wiring.
   Fairness maths lives in fairness.js and is re-run here on every reveal. */
(() => {
  const $ = (id) => document.getElementById(id);
  const HOUSE_FN = 'https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/aboveboard';
  const RPC = 'https://api.devnet.solana.com';
  const FAUCET = 'https://faucet.solana.com/';
  const STORE = 'aboveboard.v2';
  const LAMPORTS = 1e9;
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const MOBILE = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const S = {
    sessionId: null, commit: '', commitTx: null, clientSeed: '', serverSeed: '',
    nonce: 1, balance: 1000, mode: 'under', chance: 50,
    offline: false, solMode: false, pubkey: null, busy: false, opening: false, archived: false,
    history: [], limits: { minStakeSol: 0.001, maxStakeSol: 0.005, maxPayoutSol: 0.02, minChance: 20 },
    house: null
  };

  const fmt = (n) => Number(n).toLocaleString('en-US', { maximumFractionDigits: 2 });
  const sol = (lp) => (lp / LAMPORTS).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
  const short = (s) => s.slice(0, 6) + '…' + s.slice(-6);
  const pad4 = (n) => String(n).padStart(4, '0');
  const round2 = (n) => Math.round(n * 100) / 100;
  const need = (mode, chance) => (mode === 'under' ? `under ${chance}` : `${100 - chance} or over`);
  const explorer = (sig) => `https://explorer.solana.com/tx/${sig}?cluster=devnet`;

  function flash(msg, ms = 4500) {
    const f = $('flash');
    f.textContent = msg; f.style.display = 'block';
    clearTimeout(flash._t); flash._t = setTimeout(() => (f.style.display = 'none'), ms);
  }

  async function call(body, ms = 15000) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), ms);
    try {
      const r = await fetch(HOUSE_FN, {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify(body), signal: ctl.signal
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw Object.assign(new Error(j.message || `House error ${r.status}`), { status: r.status, code: j.error });
      return j;
    } finally { clearTimeout(t); }
  }

  /* ── persistence: display only; the house owns the balance ── */
  const save = () => {
    try {
      localStorage.setItem(STORE, JSON.stringify({
        sessionId: S.sessionId, commit: S.commit, commitTx: S.commitTx, clientSeed: S.clientSeed,
        nonce: S.nonce, balance: S.balance, mode: S.mode, chance: S.chance, offline: S.offline,
        serverSeed: S.offline ? S.serverSeed : '', stake: $('bet').value, history: S.history.slice(0, 100)
      }));
    } catch { /* private mode */ }
  };
  const stored = () => { try { return JSON.parse(localStorage.getItem(STORE) || 'null'); } catch { return null; } };

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

  /* ── stake handling: chips are whole, SOL is fractional ── */
  const stake = () => {
    const v = Number($('bet').value);
    if (!Number.isFinite(v)) return 0;
    return S.solMode ? v : Math.floor(v);
  };
  function clampStake() {
    let v = stake();
    if (S.solMode) {
      const { minStakeSol: lo, maxStakeSol: hi } = S.limits;
      if (!(v >= lo)) v = lo;
      if (v > hi) v = hi;
      $('bet').value = Number(v.toFixed(4));
    } else {
      const max = Math.floor(S.balance);
      if (v > max) v = max;
      if (v < 1) v = Math.min(10, Math.max(1, max));
      $('bet').value = v;
    }
  }

  const hint = () => { if (!S.busy) $('callout').textContent = `You win if the roll is ${need(S.mode, S.chance)}.`; };

  function render() {
    const mult = Fair.multiplier(S.chance);
    const bet = Math.max(0, stake());
    $('chanceLbl').textContent = S.chance + '%';
    $('odds').textContent = S.chance <= 20 ? 'Long shot, pays big.' : S.chance >= 80 ? 'Safe bet, small payout.' : 'Lower chance pays more.';
    $('tUnder').textContent = S.chance;
    $('tOver').textContent = 100 - S.chance;
    $('mUnder').setAttribute('aria-pressed', S.mode === 'under');
    $('mOver').setAttribute('aria-pressed', S.mode === 'over');
    const z = $('zone');
    z.style.left = (S.mode === 'under' ? 0 : 100 - S.chance) + '%';
    z.style.width = S.chance + '%';
    z.classList.toggle('thin', S.chance < 16);

    if (S.solMode) {
      const back = bet * mult;
      const over = back > S.limits.maxPayoutSol;
      $('summary').innerHTML = bet > 0
        ? (over
          ? `<span class="warnx">Possible win ${back.toFixed(4)} SOL is over the house cap of ${S.limits.maxPayoutSol} SOL. Lower the stake or raise the win chance.</span>`
          : `Win and get back <b>${back.toFixed(4)}</b> SOL (${mult.toFixed(2)}&times;).`)
        : `Stake between ${S.limits.minStakeSol} and ${S.limits.maxStakeSol} SOL.`;
    } else {
      $('summary').innerHTML = bet >= 1
        ? `Win and get back <b>${fmt(round2(bet * mult))}</b> chips (${mult.toFixed(2)}&times;).`
        : 'Enter a stake of at least 1 chip.';
    }
    $('bal').textContent = fmt(S.balance);
    $('balWrap').hidden = S.solMode;
    $('stakeLabel').textContent = S.solMode ? 'Stake (devnet SOL)' : 'Stake';
    $('howtoMoney').textContent = S.solMode
      ? 'Staking real devnet SOL. Devnet SOL has no value.'
      : 'Play chips by default, no real value.';
    const ready = !!S.sessionId && !S.busy && !S.opening;
    $('rollBtn').disabled = !ready;
    if (ready) $('rollBtn').textContent = 'ROLL';
    $('revealBtn').disabled = !S.sessionId || S.busy || S.offline || S.archived || !S.history.length;
  }

  function renderSeal() {
    const el = $('sealStatus');
    if (S.offline) { el.textContent = 'offline mode: sealed in your browser'; el.className = 'sstat warn'; }
    else if (S.commitTx) { el.innerHTML = `<a target="_blank" rel="noopener" href="${explorer(S.commitTx)}">sealed on devnet</a>`; el.className = 'sstat ok'; }
    else { el.textContent = 'sealed by the house server'; el.className = 'sstat'; }
    $('commit').textContent = S.commit ? short(S.commit) : 'opening…';
    $('commitFull').textContent = S.commit || '—';
    $('clientSeedOut').textContent = S.clientSeed || '—';
  }

  /* ── sessions ── */
  async function openSession(seedOverride, keepHistory) {
    S.opening = true; S.sessionId = null; S.commit = ''; S.commitTx = null; S.offline = false;
    if (!keepHistory) S.history = [];
    S.archived = !!keepHistory;
    renderStubs(); render(); renderSeal();
    $('rollBtn').textContent = 'OPENING SESSION…';
    const clientSeed = (seedOverride || Fair.randomSeed(8)).trim();
    try {
      const j = await call({ action: 'start', clientSeed, player: S.pubkey || undefined });
      S.sessionId = j.sessionId; S.commit = j.commit; S.commitTx = j.commitTx || null;
      S.clientSeed = clientSeed; S.nonce = j.nextNonce; S.balance = j.balance;
      S.house = j.house || S.house;
    } catch {
      // Local fallback so the game still works if the house is down.
      S.offline = true; S.sessionId = 'local';
      S.serverSeed = Fair.randomSeed();
      S.commit = await Fair.sha256Hex(S.serverSeed);
      S.clientSeed = clientSeed; S.nonce = 1;
      const d = stored(); S.balance = d && Number.isFinite(d.balance) ? d.balance : 1000;
    }
    S.opening = false;
    clampStake(); render(); renderSeal(); hint(); save();
  }

  async function resumeOrOpen() {
    const d = stored();
    if (d && d.sessionId && d.sessionId !== 'local' && d.commit) {
      Object.assign(S, {
        sessionId: d.sessionId, commit: d.commit, commitTx: d.commitTx, clientSeed: d.clientSeed,
        nonce: d.nonce, balance: d.balance, mode: d.mode === 'over' ? 'over' : 'under',
        chance: Math.min(98, Math.max(2, d.chance || 50)), history: Array.isArray(d.history) ? d.history : []
      });
      $('chance').value = S.chance;
      if (d.stake) $('bet').value = d.stake;
      S.opening = false;
      clampStake(); render(); renderSeal(); hint(); renderStubs();
      return;
    }
    await openSession();
  }

  function spin(final) {
    return new Promise((done) => {
      const el = $('readout');
      let over = false;
      const finish = () => { if (over) return; over = true; el.textContent = final.toFixed(2); done(); };
      if (REDUCED || document.hidden) return finish();
      setTimeout(finish, 560);
      const step = () => { if (over) return; el.textContent = (Math.random() * 100).toFixed(2).padStart(5, '0'); requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
  }

  /* ── staking real devnet SOL ── */
  // The public devnet RPC throttles websocket subscriptions, so confirmation is
  // polled over plain HTTP rather than via connection.confirmTransaction.
  async function awaitSig(conn, signature, ms = 40000) {
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      const st = await conn.getSignatureStatuses([signature]);
      const v = st && st.value && st.value[0];
      if (v) {
        if (v.err) throw new Error('The stake transaction failed on devnet.');
        if (v.confirmationStatus === 'confirmed' || v.confirmationStatus === 'finalized') return;
      }
      await new Promise((r) => setTimeout(r, 1200));
    }
    throw new Error('Timed out waiting for devnet to confirm the stake.');
  }

  async function sendStake(lamports) {
    const p = provider();
    if (!S.house) throw new Error("The house wallet address hasn't loaded yet. Give it a second and try again.");
    if (typeof solanaWeb3 === 'undefined') throw new Error('The Solana library did not load. Refresh the page.');
    const { Connection, PublicKey, Transaction, SystemProgram } = solanaWeb3;
    const conn = new Connection(RPC, 'confirmed');

    const from = new PublicKey(S.pubkey);
    const have = await conn.getBalance(from);
    if (have < lamports + 10000) {
      throw new Error(`Your wallet holds ${(have / LAMPORTS).toFixed(4)} devnet SOL, which won't cover a ${(lamports / LAMPORTS).toFixed(4)} stake plus fees. If Phantom shows more than that, it is probably on the wrong network — switch it to Devnet.`);
    }

    const tx = new Transaction().add(SystemProgram.transfer({ fromPubkey: from, toPubkey: new PublicKey(S.house), lamports }));
    tx.feePayer = from;
    tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
    const res = await p.signAndSendTransaction(tx);
    const signature = res && res.signature;
    if (!signature) throw new Error('Phantom did not return a signature.');
    await awaitSig(conn, signature);
    return signature;
  }

  /* ── a round ── */
  async function roll() {
    if (S.busy || S.opening || !S.sessionId) return;
    const bet = stake();
    const mult = Fair.multiplier(S.chance);

    if (S.solMode) {
      if (!S.pubkey) return flash('Connect a wallet to stake devnet SOL.');
      if (S.offline) return flash('The house is unreachable, so SOL bets are off.');
      if (!(bet >= S.limits.minStakeSol && bet <= S.limits.maxStakeSol)) return flash(`Stake between ${S.limits.minStakeSol} and ${S.limits.maxStakeSol} SOL.`);
      if (S.chance < S.limits.minChance) return flash(`With real SOL the win chance must be at least ${S.limits.minChance}%.`);
      if (bet * mult > S.limits.maxPayoutSol) return flash(`Possible win is over the house cap of ${S.limits.maxPayoutSol} SOL.`);
    } else if (!(bet >= 1)) return flash('Enter a stake of at least 1 chip.');
    else if (bet > S.balance) { clampStake(); render(); return flash(`Stake lowered to your balance of ${fmt(Math.floor(S.balance))}.`); }

    if (S.archived) { S.history = []; S.archived = false; }
    S.busy = true; render();
    $('stamp').classList.remove('show');
    $('needle').style.opacity = 0;
    $('readout').className = 'readout';
    const nonce = S.nonce, mode = S.mode, chance = S.chance;

    let solSig = null;
    if (S.solMode) {
      $('callout').textContent = 'Approve the stake in Phantom…';
      try { solSig = await sendStake(Math.round(bet * LAMPORTS)); }
      catch (e) {
        S.busy = false; render(); hint();
        const m = String((e && e.message) || e);
        console.error('stake failed:', e);
        return flash(/reject|denied|cancel|user declined/i.test(m) ? 'Stake cancelled in Phantom.'
          : /insufficient|debit|prior credit/i.test(m) ? 'Not enough devnet SOL for the stake and fee.'
          : m, 9000);
      }
    }

    $('callout').textContent = 'Rolling…';
    let res, serverSeed = S.serverSeed;
    if (S.offline) {
      res = { roll: await Fair.roll(S.serverSeed, S.clientSeed, nonce) };
      res.win = Fair.isWin(res.roll, mode, chance);
      res.delta = round2(res.win ? bet * mult - bet : -bet);
      res.balance = round2(S.balance + res.delta);
      if (res.balance < 1) { res.balance = 1000; res.refilled = true; }
    } else {
      try {
        // Safe to retry: the house serves roll numbers idempotently.
        const body = { action: 'roll', sessionId: S.sessionId, nonce, stake: bet, chance, mode, solStakeSig: solSig || undefined };
        res = await call(body);
      } catch (e) {
        // A just-confirmed stake can take a moment to be readable by the house.
        if (solSig && e.code === 'bad_stake' && /isn't on devnet yet/.test(e.message || '')) {
          $('callout').textContent = 'Waiting for devnet to publish the stake\u2026';
          for (let i = 0; i < 6 && !res; i++) {
            await new Promise((r) => setTimeout(r, 2500));
            try { res = await call({ action: 'roll', sessionId: S.sessionId, nonce, stake: bet, chance, mode, solStakeSig: solSig }); } catch { /* keep waiting */ }
          }
        }
        if (!res) {
          S.busy = false; render(); hint();
          if (e.code === 'revealed' || e.status === 404) { flash('That session is closed. Opening a new one.'); return openSession(); }
          return flash(e.message || 'The house did not answer. Press Roll again to retry the same roll number.', 8000);
        }
      }
    }

    await spin(res.roll);

    const won = res.win;
    $('readout').className = 'readout ' + (won ? 'win' : 'lose');
    const needle = $('needle');
    needle.style.opacity = 1; needle.style.left = `calc(${res.roll}% - 1px)`;
    const stamp = $('stamp');
    stamp.textContent = won ? 'PAID' : 'VOID';
    stamp.className = 'stamp ' + (won ? 'paid' : 'void');
    requestAnimationFrame(() => stamp.classList.add('show'));

    if (S.solMode) {
      $('callout').textContent = won
        ? (res.solPayoutSig ? `You needed ${need(mode, chance)}. The house paid ${sol(res.solPayoutLamports)} SOL back.`
          : `You needed ${need(mode, chance)}. Payout is pending — use Claim on the stub.`)
        : `You needed ${need(mode, chance)}. Stake lost.`;
    } else {
      $('callout').textContent = won
        ? `You needed ${need(mode, chance)}. You get back ${fmt(round2(bet * mult))} chips.`
        : `You needed ${need(mode, chance)}. Stake lost.`;
      S.balance = res.balance;
      if (res.refilled) flash('Out of chips. Topped back up to 1,000 play chips.');
    }

    S.history.unshift({
      n: nonce, bet, mode, chance, value: res.roll, win: won, delta: res.delta,
      sol: S.solMode, solStake: res.solStakeLamports || (S.solMode ? Math.round(bet * LAMPORTS) : null),
      solPayout: res.solPayoutLamports || null, stakeSig: solSig, payoutSig: res.solPayoutSig || null,
      pending: !!res.payoutPending, checked: null
    });
    S.nonce = res.nextNonce || nonce + 1;
    if (!S.solMode) clampStake();
    S.busy = false;
    render(); renderStubs(true); save();
  }

  /* ── reveal: the whole session, re-verified here ── */
  async function reveal() {
    if (!S.sessionId || S.offline) return;
    S.busy = true; render();
    let j;
    try { j = await call({ action: 'reveal', sessionId: S.sessionId }); }
    catch (e) { S.busy = false; render(); return flash(e.message || 'Could not reveal the seed.'); }

    const hashOk = (await Fair.sha256Hex(j.serverSeed)) === j.commit;
    let allOk = hashOk, bad = 0;
    for (const r of j.rolls) {
      const recomputed = await Fair.roll(j.serverSeed, j.clientSeed, r.nonce);
      if (recomputed !== Number(r.roll)) { allOk = false; bad++; }
    }
    const nonces = j.rolls.map((r) => r.nonce);
    const gaps = nonces.filter((n, i) => n !== i + 1).length > 0;
    if (gaps) allOk = false;

    S.history = S.history.map((h) => ({ ...h, checked: true }));
    renderStubs();
    $('vSeed').value = j.serverSeed;
    $('vCommit').value = j.commit;
    $('vClient').value = j.clientSeed;
    $('vOut').innerHTML = `<b>${j.rolls.length} roll${j.rolls.length === 1 ? '' : 's'} checked.</b> ` +
      `Seed matches the sealed fingerprint: <span class="chk ${hashOk ? 'ok' : 'bad'}">${hashOk ? 'yes' : 'NO'}</span>. ` +
      `Every roll recomputes: <span class="chk ${bad === 0 ? 'ok' : 'bad'}">${bad === 0 ? 'yes' : bad + ' mismatched'}</span>. ` +
      `Roll numbers run 1…${nonces.length} with no gaps: <span class="chk ${gaps ? 'bad' : 'ok'}">${gaps ? 'NO' : 'yes'}</span>.`;
    document.querySelector('details.more').open = true;
    flash(allOk ? 'Session verified. Opening a fresh sealed seed.' : 'Verification FAILED on this session.', 6000);
    S.busy = false;
    await openSession(null, true);
    loadBoard();
  }

  /* ── audit trail ── */
  function moneyCell(e) {
    if (!e.sol) return `${e.delta > 0 ? '+' : ''}${fmt(e.delta)}`;
    if (e.win) return `+${sol(e.solPayout || 0)} SOL`;
    return `-${sol(e.solStake || 0)} SOL`;
  }
  function linkCell(e, i) {
    const bits = [];
    if (e.stakeSig) bits.push(`<a class="chk" target="_blank" rel="noopener" href="${explorer(e.stakeSig)}">stake</a>`);
    if (e.payoutSig) bits.push(`<a class="chk" target="_blank" rel="noopener" href="${explorer(e.payoutSig)}">payout</a>`);
    else if (e.pending) bits.push(`<button class="ghost" data-c="${i}">Claim payout</button>`);
    return bits.join(' ');
  }
  function renderStubs(fresh) {
    const h = S.history;
    $('stubCount').textContent = h.length ? `${h.length} roll${h.length === 1 ? '' : 's'} ${S.archived ? 'from the revealed session' : 'this session'}` : '';
    if (!h.length) { $('hist').innerHTML = '<div class="empty">No rolls yet. Every bet prints a stub here.</div>'; return; }
    $('hist').innerHTML = h.slice(0, 60).map((e, i) => `
      <div class="stub ${e.win ? 'win' : 'lose'}${fresh && i === 0 ? ' fresh' : ''}">
        <span class="no">${pad4(e.n)}</span>
        <span>
          <span class="fig">${e.value.toFixed(2)}</span><span class="meta">${e.sol ? sol(e.solStake || 0) + ' SOL' : e.bet} on ${need(e.mode, e.chance)}</span>
          <span class="seed">roll no. ${e.n}</span>
        </span>
        <span class="right">
          ${linkCell(e, i)}
          <span class="amt">${moneyCell(e)}</span>
          ${e.checked ? '<span class="chk ok">✓ verified</span>' : '<span class="chk muted">sealed</span>'}
        </span>
      </div>`).join('');
  }
  $('hist').addEventListener('click', async (ev) => {
    const b = ev.target.closest('button[data-c]');
    if (!b) return;
    const e = S.history[+b.dataset.c];
    b.disabled = true; b.textContent = 'Claiming…';
    try {
      const j = await call({ action: 'claim', sessionId: S.sessionId, nonce: e.n });
      e.payoutSig = j.solPayoutSig; e.pending = false;
      renderStubs(); save(); flash('Payout sent.');
    } catch (err) { b.disabled = false; b.textContent = 'Claim payout'; flash(err.message || 'Claim failed.'); }
  });

  /* ── leaderboard ── */
  async function loadBoard() {
    try {
      const j = await call({ action: 'leaderboard' }, 10000);
      const rows = j.players || [];
      if (!rows.length) { $('board').innerHTML = '<div class="empty">No wallets on the board yet. Connect one and roll.</div>'; return; }
      $('board').innerHTML = rows.map((p, i) => `
        <div class="stub ${Number(p.net) >= 0 ? 'win' : 'lose'}${p.player === S.pubkey ? ' me' : ''}">
          <span class="no">${pad4(i + 1)}</span>
          <span>
            <span class="fig">${short(p.player)}</span><span class="meta">${p.rolls} roll${p.rolls === 1 ? '' : 's'}, ${p.wins} won</span>
            <span class="seed">${p.onchain_bets > 0 ? p.onchain_bets + ' staked onchain' : 'play chips'}</span>
          </span>
          <span class="right"><span class="amt">${Number(p.net) > 0 ? '+' : ''}${fmt(p.net)}</span></span>
        </div>`).join('');
    } catch { $('board').innerHTML = '<div class="empty">Leaderboard unavailable right now.</div>'; }
  }

  /* ── wallet ── */
  const provider = () => (window.phantom && window.phantom.solana) || (window.solana && window.solana.isPhantom ? window.solana : null);

  async function balance() {
    if (!S.pubkey || typeof solanaWeb3 === 'undefined') return;
    try {
      const conn = new solanaWeb3.Connection(RPC, 'confirmed');
      const l = await conn.getBalance(new solanaWeb3.PublicKey(S.pubkey));
      $('walletInfo').textContent = `${short(S.pubkey)}  ${(l / LAMPORTS).toFixed(3)} SOL`;
    } catch { $('walletInfo').textContent = short(S.pubkey); }
  }

  function setWallet(key, quiet) {
    const changed = S.pubkey !== key;
    S.pubkey = key;
    const on = !!key;
    $('dot').classList.toggle('live', on);
    $('connectBtn').textContent = on ? 'Disconnect' : 'Connect Phantom';
    $('airdropBtn').hidden = !on;
    $('solNote').textContent = on ? '' : ' Connect a wallet first.';
    if (!on) {
      $('walletInfo').textContent = 'No wallet connected';
      if (S.solMode) { S.solMode = false; $('solMode').checked = false; clampStake(); }
    } else balance();
    render();
    // Sessions are bound to a wallet, so a change needs a fresh sealed seed.
    if (changed && !quiet && !S.opening) {
      flash(on ? 'Wallet connected. Opening a session under it.' : 'Wallet disconnected. Opening an anonymous session.');
      openSession().then(loadBoard);
    }
  }

  async function toggleWallet() {
    const p = provider();
    if (S.pubkey) { try { await p.disconnect(); } catch { /* already gone */ } return setWallet(null); }
    if (!p) {
      if (MOBILE) {
        flash('Opening this page inside the Phantom app…');
        location.href = `https://phantom.app/ul/browse/${encodeURIComponent(location.href)}?ref=${encodeURIComponent(location.origin)}`;
        return;
      }
      flash('Phantom not found. Install it, then switch the wallet to Devnet.');
      return window.open('https://phantom.app/', '_blank', 'noopener');
    }
    if (typeof solanaWeb3 === 'undefined') return flash('The Solana library did not load. Refresh and try again.');
    try { const r = await p.connect(); setWallet(r.publicKey.toString()); flash('Connected. Check Phantom is set to Devnet.'); }
    catch { flash('Connection cancelled.'); }
  }

  // Devnet's RPC airdrop is closed, so point at the official faucet.
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
  $('half').onclick = () => { $('bet').value = S.solMode ? Math.max(S.limits.minStakeSol, stake() / 2) : Math.max(1, Math.floor(stake() / 2)); clampStake(); render(); save(); };
  $('dbl').onclick = () => { $('bet').value = S.solMode ? stake() * 2 : Math.max(1, stake() * 2); clampStake(); render(); save(); };
  $('max').onclick = () => { $('bet').value = S.solMode ? S.limits.maxStakeSol : Math.floor(S.balance); clampStake(); render(); save(); };
  $('rollBtn').onclick = roll;
  $('revealBtn').onclick = reveal;
  $('connectBtn').onclick = toggleWallet;
  $('airdropBtn').onclick = airdrop;
  $('boardRefresh').onclick = loadBoard;
  $('solMode').addEventListener('change', (e) => {
    if (e.target.checked && !S.pubkey) { e.target.checked = false; return flash('Connect a wallet to stake devnet SOL.'); }
    if (e.target.checked && S.offline) { e.target.checked = false; return flash('The house is unreachable, so SOL bets are off.'); }
    S.solMode = e.target.checked;
    $('bet').step = S.solMode ? '0.001' : '1';
    $('bet').value = S.solMode ? S.limits.minStakeSol : 10;
    if (S.solMode && S.chance < S.limits.minChance) { S.chance = S.limits.minChance; $('chance').value = S.chance; }
    clampStake(); render(); hint(); save();
  });

  addEventListener('keydown', (e) => {
    if (e.code !== 'Space' || e.repeat) return;
    if (/INPUT|TEXTAREA|BUTTON|SUMMARY|SELECT|A/.test(e.target.tagName)) return;
    e.preventDefault(); roll();
  });

  $('vBtn').onclick = async () => {
    const seed = $('vSeed').value.trim(), client = $('vClient').value.trim(), n = parseInt($('vNonce').value, 10);
    if (!seed || !client || !(n >= 1)) { $('vOut').textContent = 'Fill in the revealed seed, player seed and roll number.'; return; }
    const v = await Fair.verify({ serverSeed: seed, commit: $('vCommit').value.trim() || null, clientSeed: client, nonce: n });
    $('vOut').innerHTML = `roll = <b>${v.recomputed.toFixed(2)}</b>` +
      (v.commitOk === null ? '' : ` &nbsp; fingerprint <span class="chk ${v.commitOk ? 'ok' : 'bad'}">${v.commitOk ? 'matches' : 'does not match'}</span>`);
  };

  /* ── boot ── */
  drawGuilloche();
  render(); renderSeal(); renderStubs();
  call({ action: 'info' }, 8000).then((j) => {
    if (j.limits) S.limits = j.limits;
    S.house = j.house; render();
  }).catch(() => { /* limits keep their defaults */ });

  const p = provider();
  const boot = async () => {
    if (p) {
      try {
        const r = p.isConnected && p.publicKey ? { publicKey: p.publicKey } : await p.connect({ onlyIfTrusted: true });
        setWallet(r.publicKey.toString(), true);
      } catch { /* not a trusted site yet */ }
      if (p.on) {
        p.on('accountChanged', (pk) => setWallet(pk ? pk.toString() : null));
        p.on('disconnect', () => setWallet(null));
      }
    }
    await resumeOrOpen();
    loadBoard();
  };
  boot();
})();
