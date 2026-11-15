/* JK Dice — UI and Solana devnet wiring. Fairness maths lives in fairness.js. */
(() => {
  const $ = (id) => document.getElementById(id);
  const MEMO_PROGRAM = 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr';
  const RPC = 'https://api.devnet.solana.com';
  const REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const S = {
    bal: 1000, nonce: 1, mode: 'under', chance: 50,
    serverSeed: '', commit: '', history: [], pubkey: null, busy: false
  };

  const fmt = (n) => n.toLocaleString('en-US', { maximumFractionDigits: 2 });
  const short = (s) => s.slice(0, 10) + '…' + s.slice(-8);
  const pad4 = (n) => String(n).padStart(4, '0');

  function flash(msg, ms = 4000) {
    const f = $('flash');
    f.textContent = msg; f.style.display = 'block';
    clearTimeout(flash._t); flash._t = setTimeout(() => (f.style.display = 'none'), ms);
  }

  /* ── guilloche: a spirograph drawn the way security paper is engraved ── */
  function drawGuilloche() {
    const svg = $('guilloche');
    const W = 800, H = 160, cy = H / 2;
    const bands = [
      { amp: 30, freq: 2.2, ripple: 9,  waves: 17, w: 0.55, op: 1   },
      { amp: 24, freq: 3.1, ripple: 13, waves: 23, w: 0.45, op: .85 },
      { amp: 38, freq: 1.6, ripple: 6,  waves: 11, w: 0.5,  op: .7  }
    ];
    let out = '';
    for (const b of bands) {
      for (let pass = 0; pass < 4; pass++) {
        const phase = (pass / 4) * Math.PI * 2;
        let d = '';
        for (let x = 0; x <= W; x += 2) {
          const t = (x / W) * Math.PI * 2;
          const y = cy
            + b.amp * Math.sin(t * b.freq + phase)
            + b.ripple * Math.sin(t * b.waves + phase * 2);
          d += (d ? 'L' : 'M') + x + ' ' + y.toFixed(1);
        }
        out += `<path d="${d}" fill="none" stroke="var(--guilloche)" stroke-width="${b.w}" opacity="${b.op}"/>`;
      }
    }
    svg.innerHTML = out;
  }

  /* ── odds display ── */
  function render() {
    const mult = Fair.multiplier(S.chance);
    const bet = Math.max(0, Number($('bet').value) || 0);
    $('chanceLbl').textContent = S.chance;
    $('mult').innerHTML = mult.toFixed(2) + '&times;';
    $('pay').textContent = fmt(Math.round(bet * mult * 100) / 100);
    $('tUnder').textContent = S.chance;
    $('tOver').textContent = 100 - S.chance;
    $('mUnder').setAttribute('aria-pressed', S.mode === 'under');
    $('mOver').setAttribute('aria-pressed', S.mode === 'over');
    const z = $('zone');
    z.style.left = (S.mode === 'under' ? 0 : 100 - S.chance) + '%';
    z.style.width = S.chance + '%';
    $('bal').textContent = fmt(S.bal);
    $('nonceOut').value = S.nonce;
    $('slipNo').textContent = pad4(S.nonce);
  }

  async function seal() {
    S.serverSeed = Fair.randomSeed();
    S.commit = await Fair.sha256Hex(S.serverSeed);
    $('commit').textContent = S.commit;
  }

  function spin(final) {
    return new Promise((done) => {
      const el = $('readout');
      if (REDUCED) { el.textContent = final.toFixed(2); return done(); }
      const t0 = performance.now();
      const step = (now) => {
        if (now - t0 < 620) {
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
    const bet = Math.floor(Number($('bet').value));
    if (!(bet >= 1)) return flash('Enter a stake of at least 1 chip.');
    if (bet > S.bal) return flash('That stake is more than your balance.');

    S.busy = true;
    $('rollBtn').disabled = true;
    $('stamp').classList.remove('show');
    $('readout').className = 'readout';
    $('callout').textContent = 'Rolling…';

    const clientSeed = $('clientSeed').value.trim() || 'player';
    const { serverSeed, commit, nonce, mode, chance } = S;
    const value = await Fair.roll(serverSeed, clientSeed, nonce);
    const win = Fair.isWin(value, mode, chance);
    const mult = Fair.multiplier(chance);
    const delta = Math.round((win ? bet * mult - bet : -bet) * 100) / 100;

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
      ? `Needed ${mode} ${mode === 'under' ? chance : 100 - chance}. Returned ${fmt(Math.round(bet * mult * 100) / 100)} chips.`
      : `Needed ${mode} ${mode === 'under' ? chance : 100 - chance}. Stake lost.`;

    S.bal = Math.round((S.bal + delta) * 100) / 100;
    S.history.unshift({ n: nonce, bet, mode, chance, value, win, delta, serverSeed, commit, clientSeed, tx: null });
    S.nonce++;

    render();
    renderStubs(true);

    if (S.bal < 1) {
      S.bal = 1000;
      render();
      flash('Out of chips. Topped back up to 1,000 play chips.');
    }

    await seal();
    S.busy = false;
    $('rollBtn').disabled = false;

    if ($('onchain').checked) record(S.history[0]);
  }

  /* ── optional devnet memo ── */
  async function record(entry) {
    const p = provider();
    if (!p || !S.pubkey) return flash('Connect Phantom first to write results to devnet.');
    try {
      const { Connection, PublicKey, Transaction, TransactionInstruction } = solanaWeb3;
      const conn = new Connection(RPC, 'confirmed');
      const memo = `JKDICE1 c=${entry.commit} s=${entry.serverSeed} p=${entry.clientSeed} n=${entry.n} r=${entry.value.toFixed(2)}`;
      const tx = new Transaction().add(new TransactionInstruction({
        keys: [{ pubkey: new PublicKey(S.pubkey), isSigner: true, isWritable: false }],
        programId: new PublicKey(MEMO_PROGRAM),
        data: new TextEncoder().encode(memo)
      }));
      tx.feePayer = new PublicKey(S.pubkey);
      tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
      const { signature } = await p.signAndSendTransaction(tx);
      entry.tx = signature;
      renderStubs();
      flash('Result written to devnet.');
      balance();
    } catch (e) {
      console.error(e);
      flash('Devnet write failed: ' + (e.message || e));
    }
  }

  /* ── stubs ── */
  function renderStubs(fresh) {
    const h = S.history;
    $('stubCount').textContent = h.length ? `${h.length} roll${h.length === 1 ? '' : 's'} on record` : '';
    if (!h.length) return;
    $('hist').innerHTML = h.slice(0, 60).map((e, i) => `
      <div class="stub ${e.win ? 'win' : 'lose'}${fresh && i === 0 ? ' fresh' : ''}">
        <span class="no">${pad4(e.n)}</span>
        <span>
          <span class="fig">${e.value.toFixed(2)}</span>
          <span class="meta">${e.bet} on ${e.mode} ${e.mode === 'under' ? e.chance : 100 - e.chance}</span>
          <span class="seed">${short(e.serverSeed)}</span>
        </span>
        <span class="right">
          <span class="amt">${e.delta > 0 ? '+' : ''}${fmt(e.delta)}</span>
          <span><button data-v="${i}">Check</button> <span class="chk" id="chk${i}"></span></span>
          ${e.tx ? `<a class="chk" target="_blank" rel="noopener" href="https://explorer.solana.com/tx/${e.tx}?cluster=devnet">on devnet</a>` : ''}
        </span>
      </div>`).join('');
    $('hist').querySelectorAll('button[data-v]').forEach((b) => {
      b.onclick = async () => {
        const e = S.history[+b.dataset.v];
        const v = await Fair.verify({ serverSeed: e.serverSeed, commit: e.commit, clientSeed: e.clientSeed, nonce: e.n, roll: e.value });
        const out = $('chk' + b.dataset.v);
        const ok = v.commitOk && v.rollOk;
        out.className = 'chk ' + (ok ? 'ok' : 'bad');
        out.textContent = ok ? 'matches' : 'MISMATCH';
      };
    });
  }

  /* ── wallet ── */
  const provider = () => (window.phantom && window.phantom.solana) || window.solana || null;

  async function balance() {
    if (!S.pubkey) return;
    try {
      const conn = new solanaWeb3.Connection(RPC, 'confirmed');
      const l = await conn.getBalance(new solanaWeb3.PublicKey(S.pubkey));
      $('walletInfo').textContent = `${short(S.pubkey)}  ${(l / 1e9).toFixed(3)} SOL`;
    } catch { $('walletInfo').textContent = short(S.pubkey); }
  }

  function connected(key) {
    S.pubkey = key;
    $('dot').classList.add('live');
    $('connectBtn').textContent = 'Connected';
    $('connectBtn').disabled = true;
    $('airdropBtn').hidden = false;
    balance();
  }

  async function connect() {
    const p = provider();
    if (!p) {
      flash('Phantom not found. Install it, then switch the wallet to Devnet.');
      return window.open('https://phantom.app/', '_blank', 'noopener');
    }
    try {
      const r = await p.connect();
      connected(r.publicKey.toString());
      flash('Connected. Check Phantom is set to Devnet.');
    } catch { flash('Connection cancelled.'); }
  }

  async function airdrop() {
    if (!S.pubkey) return;
    try {
      flash('Requesting 1 devnet SOL…');
      const conn = new solanaWeb3.Connection(RPC, 'confirmed');
      const sig = await conn.requestAirdrop(new solanaWeb3.PublicKey(S.pubkey), 1e9);
      await conn.confirmTransaction(sig, 'confirmed');
      balance();
      flash('1 devnet SOL received.');
    } catch {
      flash('The devnet faucet is rate limited. Opening faucet.solana.com instead.');
      window.open('https://faucet.solana.com/', '_blank', 'noopener');
    }
  }

  /* ── wiring ── */
  $('chance').oninput = (e) => { S.chance = +e.target.value; render(); };
  $('bet').oninput = render;
  $('mUnder').onclick = () => { S.mode = 'under'; render(); };
  $('mOver').onclick = () => { S.mode = 'over'; render(); };
  $('half').onclick = () => { $('bet').value = Math.max(1, Math.floor(+$('bet').value / 2)); render(); };
  $('dbl').onclick = () => { $('bet').value = Math.max(1, Math.min(Math.floor(S.bal), Math.floor(+$('bet').value) * 2)); render(); };
  $('max').onclick = () => { $('bet').value = Math.floor(S.bal); render(); };
  $('rollBtn').onclick = roll;
  $('connectBtn').onclick = connect;
  $('airdropBtn').onclick = airdrop;

  addEventListener('keydown', (e) => {
    if (e.code === 'Space' && !/INPUT|TEXTAREA|BUTTON|SUMMARY/.test(e.target.tagName)) { e.preventDefault(); roll(); }
  });

  $('vBtn').onclick = async () => {
    const seed = $('vSeed').value.trim();
    if (!seed) { $('vOut').textContent = 'Paste a revealed seed to recompute.'; return; }
    const v = await Fair.verify({
      serverSeed: seed, commit: $('vCommit').value.trim() || null,
      clientSeed: $('vClient').value.trim(), nonce: +$('vNonce').value
    });
    $('vOut').innerHTML = `roll = <b>${v.recomputed.toFixed(2)}</b>` +
      (v.commitOk === null ? '' : ` &nbsp; fingerprint <span class="chk ${v.commitOk ? 'ok' : 'bad'}">${v.commitOk ? 'matches' : 'does not match'}</span>`);
  };

  /* ── boot ── */
  drawGuilloche();
  $('clientSeed').value = Fair.randomSeed(8);
  render();
  seal();
  const p = provider();
  if (p && p.isConnected && p.publicKey) connected(p.publicKey.toString());
})();
