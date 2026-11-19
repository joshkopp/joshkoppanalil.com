// Monyx tracer engine. Pure functions over Solana JSON-RPC, no DOM.
// Mirrors the `trace` API in meter/index.ts so the free in-app tracer and the
// paid endpoint agree on every number.
(function (root) {
  const PROGRAMS = {
    '11111111111111111111111111111111': 'System Program',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA': 'Token Program',
    'TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb': 'Token-2022',
    'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL': 'Associated Token',
    'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr': 'Memo',
    'ComputeBudget111111111111111111111111111111': 'Compute Budget',
    'JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4': 'Jupiter v6',
    '675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8': 'Raydium AMM',
    'whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc': 'Orca Whirlpool',
    'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s': 'Metaplex Metadata',
    'Stake11111111111111111111111111111111111111': 'Stake Program',
    'Vote111111111111111111111111111111111111111': 'Vote Program',
    '6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P': 'pump.fun',
    'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v': 'USDC',
    'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB': 'USDT',
    'So11111111111111111111111111111111111111112': 'Wrapped SOL',
    '4DJ1z4aUMe4VLg9qxaCHmfNhFKqyCaP7RC6dQBJFQvuw': 'Monyx API treasury',
    '9JBSMxHPKMDLyUMhwV2NzFNUikNoQfnJj82NyBoPNJRs': 'Monyx bank',
  };
  const label = (a) => PROGRAMS[a] || null;
  const keyStr = (k) => (typeof k === 'string' ? k : k.pubkey);
  const sol = (l) => Math.round(l) / 1e9;

  async function rpc(url, method, params = [], tries = 3, fetchImpl = root.fetch) {
    let last;
    for (let i = 0; i < tries; i++) {
      let r;
      try {
        const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 8000);
        r = await fetchImpl(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }), signal: ctl.signal });
        clearTimeout(to);
      } catch (e) { last = e; await sleep(300 * 2 ** i); continue; }
      if (r.status === 429 || r.status >= 500) { last = new Error(`RPC ${r.status}`); await sleep(400 * 2 ** i); continue; }
      if (r.status === 403) throw new Error('This RPC refused the request (403). Add your own RPC URL in RPC settings.');
      const j = await r.json();
      if (j.error) throw new Error(j.error.message);
      return j.result;
    }
    throw new Error(last && /429/.test(last.message) ? 'The public RPC is rate limiting. Wait a few seconds or set your own RPC.' : (last ? last.message : 'RPC failed'));
  }
  // Mainnet now carries v1 transactions; ask for the newest version and fall
  // back to v0 for nodes that reject the parameter.
  let TXV = 1;
  async function getTx(url, sig) {
    const cfg = (v) => ({ encoding: 'jsonParsed', maxSupportedTransactionVersion: v, commitment: 'confirmed' });
    try { return await rpc(url, 'getTransaction', [sig, cfg(TXV)]); }
    catch (e) { if (TXV > 0 && /version|invalid param/i.test(e.message)) { TXV = 0; return rpc(url, 'getTransaction', [sig, cfg(0)]); } throw e; }
  }
  const sleep = (ms) => new Promise((s) => setTimeout(s, ms));
  async function pool(items, n, fn, onEach) {
    const out = new Array(items.length); let i = 0, done = 0;
    await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
      while (i < items.length) { const k = i++; out[k] = await fn(items[k]); done++; onEach && onEach(done, items.length); }
    }));
    return out;
  }

  function flows(tx, target) {
    const ixs = [...(tx.transaction.message.instructions || [])];
    for (const inner of (tx.meta && tx.meta.innerInstructions) || []) ixs.push(...inner.instructions);
    const solMoves = [];
    for (const ix of ixs) {
      if (ix.program !== 'system' || !ix.parsed) continue;
      const { type, info } = ix.parsed;
      if (type === 'transfer' || type === 'transferWithSeed') solMoves.push({ from: info.source, to: info.destination, lamports: Number(info.lamports) });
      else if (type === 'createAccount' || type === 'createAccountWithSeed') solMoves.push({ from: info.source, to: info.newAccount, lamports: Number(info.lamports) });
    }
    const tok = new Map();
    const add = (b, sign) => {
      if (!b.owner) return;
      const m = tok.get(b.mint) || new Map();
      m.set(b.owner, (m.get(b.owner) || 0) + sign * Number(b.uiTokenAmount.uiAmount || 0));
      tok.set(b.mint, m);
    };
    for (const b of tx.meta.preTokenBalances || []) add(b, -1);
    for (const b of tx.meta.postTokenBalances || []) add(b, 1);
    const tokens = [];
    for (const [mint, m] of tok) for (const [owner, d] of m) if (Math.abs(d) > 1e-12) tokens.push({ mint, owner, delta: d });
    const keys = tx.transaction.message.accountKeys.map(keyStr);
    const idx = keys.indexOf(target);
    const solDelta = idx >= 0 ? tx.meta.postBalances[idx] - tx.meta.preBalances[idx] : 0;
    const programs = [...new Set(ixs.map((ix) => ix.programId).filter(Boolean))];
    return { sol: solMoves, tokens, solDelta, programs };
  }

  // Turns raw {sig, tx} rows into the trace report. Shared shape with the API.
  function analyze(address, rows) {
    const cp = new Map();
    const node = (a) => {
      if (!cp.has(a)) cp.set(a, { address: a, label: label(a), inL: 0, outL: 0, txs: new Set(), tokens: {} });
      return cp.get(a);
    };
    const timeline = []; const programs = {};
    for (const { sig, tx } of rows) {
      if (!tx) { timeline.push({ signature: sig.signature, time: sig.blockTime, ok: !sig.err, parsed: false, solDelta: 0, tokenDeltas: [], programs: [] }); continue; }
      const f = flows(tx, address);
      for (const pid of f.programs) programs[pid] = (programs[pid] || 0) + 1;
      for (const m of f.sol) {
        if (m.from === address && m.to !== address) { const n = node(m.to); n.inL += m.lamports; n.txs.add(sig.signature); }
        else if (m.to === address && m.from !== address) { const n = node(m.from); n.outL += m.lamports; n.txs.add(sig.signature); }
      }
      const mine = f.tokens.filter((t) => t.owner === address);
      for (const t of mine) for (const o of f.tokens) {
        if (o.mint !== t.mint || o.owner === address || Math.sign(o.delta) === Math.sign(t.delta)) continue;
        const n = node(o.owner); n.tokens[t.mint] = (n.tokens[t.mint] || 0) + o.delta; n.txs.add(sig.signature);
      }
      timeline.push({
        signature: sig.signature, time: sig.blockTime, ok: !sig.err, parsed: true,
        solDelta: sol(f.solDelta), fee: sol(tx.meta.fee),
        tokenDeltas: mine.map((t) => ({ mint: t.mint, label: label(t.mint), delta: t.delta })),
        programs: f.programs.map((id) => label(id) || id),
      });
    }
    const counterparties = [...cp.values()].map((n) => ({
      address: n.address, label: n.label, txCount: n.txs.size,
      receivedSol: sol(n.inL), sentSol: sol(n.outL), netToTargetSol: sol(n.outL - n.inL), tokens: n.tokens,
    })).sort((a, b) => (b.receivedSol + b.sentSol) - (a.receivedSol + a.sentSol) || b.txCount - a.txCount);
    return {
      address, label: label(address), scanned: rows.length,
      totals: {
        solIn: sol(counterparties.reduce((a, c) => a + c.sentSol * 1e9, 0)),
        solOut: sol(counterparties.reduce((a, c) => a + c.receivedSol * 1e9, 0)),
        failed: timeline.filter((t) => !t.ok).length,
      },
      counterparties: counterparties.slice(0, 40),
      programs: Object.entries(programs).map(([id, n]) => ({ id, label: label(id), count: n })).sort((a, b) => b.count - a.count),
      timeline,
    };
  }

  async function trace(url, address, limit, onProgress) {
    const sigs = await rpc(url, 'getSignaturesForAddress', [address, { limit }]);
    onProgress && onProgress(0, sigs.length);
    const full = await pool(sigs, /devnet/.test(url) ? 2 : 4, (s) =>
      getTx(url, s.signature).catch(() => null), onProgress);
    // Public RPCs drop some calls under load; give the misses one slow second pass.
    for (let i = 0; i < full.length; i++) {
      if (full[i]) continue;
      await sleep(250);
      full[i] = await getTx(url, sigs[i].signature).catch(() => null);
    }
    return analyze(address, sigs.map((s, i) => ({ sig: s, tx: full[i] })));
  }

  const api = { rpc, getTx, trace, analyze, flows, label, pool, sol };
  if (typeof module !== 'undefined') module.exports = api; else root.MonyxTrace = api;
})(typeof window !== 'undefined' ? window : globalThis);
