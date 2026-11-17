// Monyx meter — a pay-per-pull API market for agents, settled in devnet SOL.
//
// Protocol (x402-style):
//   1. GET /api/<name>?params            -> 402 Payment Required + a quote.
//      The quote carries a one-time `reference` public key.
//   2. The caller sends a SOL transfer to `payTo` for at least `lamports`,
//      with `reference` attached as a read-only key on the transfer
//      instruction (the Solana Pay pattern), on devnet.
//   3. GET /api/<name>?params  with header  X-PAYMENT: <tx signature>
//      -> the meter reads the transaction from the chain, checks the
//      reference, recipient, amount and age, burns the quote, then serves.
//
// A signature can buy exactly one pull. If the upstream call fails after a
// valid payment, the same signature can be replayed up to 3 times to retry.
//
// Free routes: GET /catalog, GET /ledger.
// Deployed as the Supabase edge function "keel" (name kept so existing agent URLs keep working).
import { createClient } from "npm:@supabase/supabase-js@2";

const PAY_RPC = "https://api.devnet.solana.com";
const DATA_RPC: Record<string, string> = {
  mainnet: "https://solana-rpc.publicnode.com",
  devnet: "https://api.devnet.solana.com",
};
const PAY_TO = "4DJ1z4aUMe4VLg9qxaCHmfNhFKqyCaP7RC6dQBJFQvuw";
const QUOTE_TTL_S = 300;
const MAX_QUOTES_PER_MIN = 120;
const MAX_ATTEMPTS = 3;
const RELAY_PER_MIN = 240;
const RELAY_METHODS = new Set(["getSignaturesForAddress", "getTransaction", "getSlot", "getBalance", "getTokenAccountsByOwner", "getAccountInfo"]);
const relayHits = new Map<string, { t: number; n: number }>();

const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const SIG = /^[1-9A-HJ-NP-Za-km-z]{64,90}$/;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info, x-payment",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Expose-Headers": "x-payment-response",
};
const json = (body: unknown, status = 200, extra: Record<string, string> = {}) =>
  new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { ...cors, "Content-Type": "application/json", ...extra },
  });
const fail = (message: string, status = 400, error = "bad_request") => json({ error, message }, status);
const oops = (where: string, e: unknown) => {
  console.error(`[monyx-meter] ${where}:`, e);
  return fail("Something went wrong on our end. Please try again.", 500, "server_error");
};

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});

// ---------- labels ----------
const LABELS: Record<string, string> = {
  "11111111111111111111111111111111": "System Program",
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA": "Token Program",
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb": "Token-2022",
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL": "Associated Token",
  "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr": "Memo",
  "ComputeBudget111111111111111111111111111111": "Compute Budget",
  "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4": "Jupiter v6",
  "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8": "Raydium AMM",
  "whirLbMiicVdio4qvUfM5KAg6Ct8VwpYzGff3uctyCc": "Orca Whirlpool",
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s": "Metaplex Metadata",
  "Stake11111111111111111111111111111111111111": "Stake Program",
  "Vote111111111111111111111111111111111111111": "Vote Program",
  "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P": "pump.fun",
  "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v": "USDC",
  "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB": "USDT",
  "So11111111111111111111111111111111111111112": "Wrapped SOL",
  [PAY_TO]: "Monyx treasury",
};
const label = (a: string) => LABELS[a] ?? null;

// ---------- rpc ----------
async function rpc(url: string, method: string, params: unknown[] = [], tries = 4): Promise<any> {
  for (let i = 0; i < tries; i++) {
    const r = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
    });
    if (r.status === 429 || r.status >= 500) {
      await new Promise((s) => setTimeout(s, 400 * 2 ** i));
      continue;
    }
    const j = await r.json();
    if (j.error) throw new Error(`${method}: ${j.error.message}`);
    return j.result;
  }
  throw new Error(`${method}: upstream RPC is rate limiting, try again shortly`);
}
// Mainnet now carries v1 transactions; fall back to v0 if a node rejects it.
let TXV = 1;
async function getTx(url: string, sig: string): Promise<any> {
  const cfg = (v: number) => ({ encoding: "jsonParsed", maxSupportedTransactionVersion: v, commitment: "confirmed" });
  try { return await rpc(url, "getTransaction", [sig, cfg(TXV)]); }
  catch (e) {
    if (TXV > 0 && /version|invalid param/i.test((e as Error).message)) { TXV = 0; return rpc(url, "getTransaction", [sig, cfg(0)]); }
    throw e;
  }
}
async function pool<T, R>(items: T[], n: number, fn: (t: T) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let i = 0;
  await Promise.all(Array.from({ length: Math.min(n, items.length) }, async () => {
    while (i < items.length) { const k = i++; out[k] = await fn(items[k]); }
  }));
  return out;
}
const sol = (l: number) => Math.round(l) / 1e9;
const keyStr = (k: any) => (typeof k === "string" ? k : k.pubkey);

// ---------- analysis shared by profile / trace / tx ----------
function flows(tx: any, target: string) {
  // SOL moves from parsed system instructions (outer + inner).
  const ixs: any[] = [...(tx.transaction.message.instructions || [])];
  for (const inner of tx.meta?.innerInstructions || []) ixs.push(...inner.instructions);
  const sol: { from: string; to: string; lamports: number }[] = [];
  for (const ix of ixs) {
    if (ix.program !== "system" || !ix.parsed) continue;
    const { type, info } = ix.parsed;
    if (type === "transfer" || type === "transferWithSeed") sol.push({ from: info.source, to: info.destination, lamports: Number(info.lamports) });
    else if (type === "createAccount" || type === "createAccountWithSeed") sol.push({ from: info.source, to: info.newAccount, lamports: Number(info.lamports) });
  }
  // Token moves from owner-level balance deltas.
  const tok = new Map<string, Map<string, number>>(); // mint -> owner -> delta (ui)
  const add = (b: any, sign: number) => {
    if (!b.owner) return;
    const m = tok.get(b.mint) ?? new Map();
    m.set(b.owner, (m.get(b.owner) ?? 0) + sign * Number(b.uiTokenAmount.uiAmount ?? 0));
    tok.set(b.mint, m);
  };
  for (const b of tx.meta?.preTokenBalances || []) add(b, -1);
  for (const b of tx.meta?.postTokenBalances || []) add(b, 1);
  const tokens: { mint: string; owner: string; delta: number }[] = [];
  for (const [mint, m] of tok) for (const [owner, d] of m) if (Math.abs(d) > 1e-12) tokens.push({ mint, owner, delta: d });
  const keys = tx.transaction.message.accountKeys.map(keyStr);
  const idx = keys.indexOf(target);
  const solDelta = idx >= 0 ? (tx.meta.postBalances[idx] - tx.meta.preBalances[idx]) : 0;
  const programs = [...new Set(ixs.map((ix) => ix.programId).filter(Boolean))];
  return { sol, tokens, solDelta, programs, keys };
}

async function txs(net: string, address: string, limit: number) {
  const sigs = await rpc(DATA_RPC[net], "getSignaturesForAddress", [address, { limit }]);
  const full = await pool(sigs, 4, (s: any) =>
    getTx(DATA_RPC[net], s.signature).catch(() => null));
  return sigs.map((s: any, i: number) => ({ sig: s, tx: full[i] }));
}

// ---------- the APIs ----------
type Api = {
  name: string; title: string; lamports: number; summary: string;
  params: Record<string, string>; example: Record<string, string>;
  run: (p: Record<string, string>) => Promise<unknown>;
};
const netOf = (p: Record<string, string>) => (p.net === "devnet" ? "devnet" : "mainnet");
const needAddr = (v?: string, what = "address") => {
  if (!v || !B58.test(v)) throw new UserError(`\`${what}\` must be a base58 Solana address`);
  return v;
};
class UserError extends Error {}

const APIS: Api[] = [
  {
    name: "pulse", title: "Network pulse", lamports: 50_000,
    summary: "Slot, epoch progress and recent throughput for mainnet or devnet.",
    params: { net: "mainnet | devnet (default mainnet)" }, example: { net: "mainnet" },
    async run(p) {
      const url = DATA_RPC[netOf(p)];
      const [epoch, perf, version] = await Promise.all([
        rpc(url, "getEpochInfo"), rpc(url, "getRecentPerformanceSamples", [10]), rpc(url, "getVersion"),
      ]);
      const tx = perf.reduce((a: number, s: any) => a + s.numTransactions, 0);
      const nonVote = perf.reduce((a: number, s: any) => a + (s.numNonVoteTransactions ?? 0), 0);
      const secs = perf.reduce((a: number, s: any) => a + s.samplePeriodSecs, 0);
      return {
        network: netOf(p), slot: epoch.absoluteSlot, blockHeight: epoch.blockHeight, epoch: epoch.epoch,
        epochProgress: +(epoch.slotIndex / epoch.slotsInEpoch * 100).toFixed(2),
        tps: Math.round(tx / secs), nonVoteTps: Math.round(nonVote / secs),
        windowSeconds: secs, solanaCore: version["solana-core"],
      };
    },
  },
  {
    name: "price", title: "SOL spot price", lamports: 50_000,
    summary: "SOL/USD with 24h change and market cap, from CoinGecko.",
    params: {}, example: {},
    async run() {
      const r = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true&include_market_cap=true&include_last_updated_at=true");
      if (!r.ok) throw new Error(`price source returned ${r.status}`);
      const s = (await r.json()).solana;
      return { pair: "SOL/USD", price: s.usd, change24hPct: +s.usd_24h_change.toFixed(3), marketCapUsd: Math.round(s.usd_market_cap), asOf: new Date(s.last_updated_at * 1000).toISOString(), source: "coingecko" };
    },
  },
  {
    name: "profile", title: "Wallet profile", lamports: 500_000,
    summary: "Balance, token holdings, activity window and failure rate for any address.",
    params: { address: "base58 address (required)", net: "mainnet | devnet" },
    example: { address: "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4", net: "mainnet" },
    async run(p) {
      const address = needAddr(p.address); const url = DATA_RPC[netOf(p)];
      const [bal, acct, sigs, t1, t2] = await Promise.all([
        rpc(url, "getBalance", [address]),
        rpc(url, "getAccountInfo", [address, { encoding: "base64", dataSlice: { offset: 0, length: 0 } }]),
        rpc(url, "getSignaturesForAddress", [address, { limit: 100 }]),
        rpc(url, "getTokenAccountsByOwner", [address, { programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" }, { encoding: "jsonParsed" }]).catch(() => ({ value: [] })),
        rpc(url, "getTokenAccountsByOwner", [address, { programId: "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb" }, { encoding: "jsonParsed" }]).catch(() => ({ value: [] })),
      ]);
      const tokens = [...t1.value, ...t2.value].map((a: any) => a.account.data.parsed.info)
        .filter((i: any) => Number(i.tokenAmount.uiAmount) > 0)
        .map((i: any) => ({ mint: i.mint, label: label(i.mint), amount: Number(i.tokenAmount.uiAmount), decimals: i.tokenAmount.decimals }))
        .sort((a: any, b: any) => b.amount - a.amount);
      const times = sigs.map((s: any) => s.blockTime).filter(Boolean);
      const failed = sigs.filter((s: any) => s.err).length;
      const span = times.length > 1 ? (times[0] - times[times.length - 1]) : 0;
      return {
        address, label: label(address), network: netOf(p),
        exists: !!acct.value, executable: acct.value?.executable ?? false, owner: acct.value?.owner ?? null, ownerLabel: acct.value ? label(acct.value.owner) : null,
        sol: sol(bal.value),
        tokens: tokens.slice(0, 25), tokenCount: tokens.length,
        activity: {
          sampled: sigs.length, failed, failureRatePct: sigs.length ? +(failed / sigs.length * 100).toFixed(1) : 0,
          newest: times[0] ? new Date(times[0] * 1000).toISOString() : null,
          oldestInSample: times.length ? new Date(times[times.length - 1] * 1000).toISOString() : null,
          txPerDay: span > 0 ? +(sigs.length / (span / 86400)).toFixed(2) : null,
        },
      };
    },
  },
  {
    name: "trace", title: "Wallet tracer", lamports: 1_000_000,
    summary: "Follows SOL and token flows through recent transactions and ranks every counterparty.",
    params: { address: "base58 address (required)", limit: "transactions to scan, 5–40 (default 25)", net: "mainnet | devnet" },
    example: { address: PAY_TO, limit: "25", net: "devnet" },
    async run(p) {
      const address = needAddr(p.address); const net = netOf(p);
      const limit = Math.max(5, Math.min(40, parseInt(p.limit || "25") || 25));
      const rows = await txs(net, address, limit);
      const cp = new Map<string, any>();
      const node = (a: string) => {
        if (!cp.has(a)) cp.set(a, { address: a, label: label(a), inLamports: 0, outLamports: 0, txs: new Set<string>(), tokens: {} as Record<string, number> });
        return cp.get(a);
      };
      const timeline: any[] = [];
      const programs: Record<string, number> = {};
      for (const { sig, tx } of rows) {
        if (!tx) { timeline.push({ signature: sig.signature, time: sig.blockTime, ok: !sig.err, parsed: false }); continue; }
        const f = flows(tx, address);
        for (const pid of f.programs) programs[pid] = (programs[pid] ?? 0) + 1;
        for (const m of f.sol) {
          if (m.from === address && m.to !== address) { const n = node(m.to); n.inLamports += m.lamports; n.txs.add(sig.signature); }
          else if (m.to === address && m.from !== address) { const n = node(m.from); n.outLamports += m.lamports; n.txs.add(sig.signature); }
        }
        const mine = f.tokens.filter((t) => t.owner === address);
        for (const t of mine) for (const o of f.tokens) {
          if (o.mint !== t.mint || o.owner === address || Math.sign(o.delta) === Math.sign(t.delta)) continue;
          const n = node(o.owner); n.tokens[t.mint] = (n.tokens[t.mint] ?? 0) + o.delta; n.txs.add(sig.signature);
        }
        timeline.push({
          signature: sig.signature, time: sig.blockTime, ok: !sig.err, parsed: true,
          solDelta: sol(f.solDelta), fee: sol(tx.meta.fee),
          tokenDeltas: mine.map((t) => ({ mint: t.mint, label: label(t.mint), delta: t.delta })),
          programs: f.programs.map((id) => label(id) ?? id),
        });
      }
      // in/out are from the counterparty's perspective: inLamports = what it received from the target.
      const counterparties = [...cp.values()].map((n) => ({
        address: n.address, label: n.label, txCount: n.txs.size,
        receivedSol: sol(n.inLamports), sentSol: sol(n.outLamports),
        netToTargetSol: sol(n.outLamports - n.inLamports), tokens: n.tokens,
      })).sort((a, b) => (b.receivedSol + b.sentSol) - (a.receivedSol + a.sentSol) || b.txCount - a.txCount);
      return {
        address, label: label(address), network: net, scanned: rows.length,
        totals: {
          solIn: sol(counterparties.reduce((a, c) => a + c.sentSol * 1e9, 0)),
          solOut: sol(counterparties.reduce((a, c) => a + c.receivedSol * 1e9, 0)),
          failed: timeline.filter((t) => !t.ok).length,
        },
        counterparties: counterparties.slice(0, 40),
        programs: Object.entries(programs).map(([id, n]) => ({ id, label: label(id), count: n })).sort((a, b) => b.count - a.count),
        timeline,
      };
    },
  },
  {
    name: "tx", title: "Transaction explainer", lamports: 300_000,
    summary: "Turns a signature into plain-English steps, balance changes and fees.",
    params: { signature: "transaction signature (required)", net: "mainnet | devnet" },
    example: { signature: "", net: "devnet" },
    async run(p) {
      if (!p.signature || !SIG.test(p.signature)) throw new UserError("`signature` must be a base58 transaction signature");
      const tx = await getTx(DATA_RPC[netOf(p)], p.signature);
      if (!tx) throw new UserError("transaction not found on " + netOf(p));
      const keys = tx.transaction.message.accountKeys;
      const short = (a: string) => label(a) ?? `${a.slice(0, 4)}…${a.slice(-4)}`;
      const steps = tx.transaction.message.instructions.map((ix: any) => {
        const prog = label(ix.programId) ?? ix.programId;
        if (ix.parsed?.type === "transfer" && ix.program === "system") return `${short(ix.parsed.info.source)} sent ${sol(+ix.parsed.info.lamports)} SOL to ${short(ix.parsed.info.destination)}`;
        if (ix.program === "spl-token" && ix.parsed) {
          const i = ix.parsed.info; const amt = i.tokenAmount?.uiAmountString ?? i.amount;
          return `Token ${ix.parsed.type}${amt ? ` of ${amt}` : ""}${i.mint ? ` ${short(i.mint)}` : ""}`;
        }
        if (ix.program === "spl-memo") return `Memo: "${String(ix.parsed).slice(0, 120)}"`;
        if (ix.program === "compute-budget" || ix.programId === "ComputeBudget111111111111111111111111111111") return `Set compute budget`;
        if (ix.parsed?.type) return `${prog}: ${ix.parsed.type}`;
        return `Call ${prog} with ${ix.accounts?.length ?? 0} accounts`;
      });
      const changes = keys.map((k: any, i: number) => ({ address: k.pubkey, label: label(k.pubkey), signer: k.signer, deltaSol: sol(tx.meta.postBalances[i] - tx.meta.preBalances[i]) }))
        .filter((c: any) => c.deltaSol !== 0);
      return {
        signature: p.signature, network: netOf(p), slot: tx.slot,
        time: tx.blockTime ? new Date(tx.blockTime * 1000).toISOString() : null,
        status: tx.meta.err ? "failed" : "success", error: tx.meta.err,
        feeSol: sol(tx.meta.fee), computeUnits: tx.meta.computeUnitsConsumed ?? null,
        signers: keys.filter((k: any) => k.signer).map((k: any) => k.pubkey),
        steps, balanceChanges: changes,
        logTail: (tx.meta.logMessages || []).slice(-6),
      };
    },
  },
  {
    name: "token", title: "Token X-ray", lamports: 500_000,
    summary: "Supply, decimals, authorities and holder concentration for any SPL mint.",
    params: { mint: "token mint address (required)", net: "mainnet | devnet" },
    example: { mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", net: "mainnet" },
    async run(p) {
      const mint = needAddr(p.mint, "mint"); const url = DATA_RPC[netOf(p)];
      const [info, supply] = await Promise.all([
        rpc(url, "getAccountInfo", [mint, { encoding: "jsonParsed" }]),
        rpc(url, "getTokenSupply", [mint]),
      ]);
      const parsed = info.value?.data?.parsed;
      if (!parsed || parsed.type !== "mint") throw new UserError("that address is not a token mint");
      let holders: any[] = []; let holderNote: string | null = null;
      try {
        const largest = await rpc(url, "getTokenLargestAccounts", [mint], 2);
        const accts = largest.value.slice(0, 15);
        const owners = await rpc(url, "getMultipleAccounts", [accts.map((a: any) => a.address), { encoding: "jsonParsed" }]);
        const total = Number(supply.value.uiAmount) || 1;
        holders = accts.map((a: any, i: number) => {
          const owner = owners.value[i]?.data?.parsed?.info?.owner ?? null;
          return { tokenAccount: a.address, owner, ownerLabel: owner ? label(owner) : null, amount: Number(a.uiAmount), pct: +(Number(a.uiAmount) / total * 100).toFixed(3) };
        });
      } catch { holderNote = "Holder ranking isn't available for this token right now."; }
      const top = (n: number) => +holders.slice(0, n).reduce((a, h) => a + h.pct, 0).toFixed(2);
      return {
        mint, label: label(mint), network: netOf(p), program: info.value.owner === "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb" ? "token-2022" : "spl-token",
        decimals: parsed.info.decimals, supply: Number(supply.value.uiAmount),
        mintAuthority: parsed.info.mintAuthority, freezeAuthority: parsed.info.freezeAuthority,
        flags: [
          parsed.info.mintAuthority ? "mint authority is live: supply can grow" : "mint authority renounced",
          parsed.info.freezeAuthority ? "freeze authority set: accounts can be frozen" : "no freeze authority",
        ],
        concentration: holders.length ? { top1Pct: top(1), top5Pct: top(5), top10Pct: top(10) } : null,
        holders, holderNote,
      };
    },
  },
];
const byName = new Map(APIS.map((a) => [a.name, a]));

// ---------- payment ----------
function randomReference() {
  // A random 32-byte value is a valid-looking ed25519 public key for use as a
  // read-only tag; it never needs to sign or exist onchain.
  const b = crypto.getRandomValues(new Uint8Array(32));
  return b58(b);
}
const ALPH = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function b58(bytes: Uint8Array) {
  let n = 0n; for (const b of bytes) n = n * 256n + BigInt(b);
  let s = ""; while (n > 0n) { s = ALPH[Number(n % 58n)] + s; n /= 58n; }
  for (const b of bytes) { if (b === 0) s = "1" + s; else break; }
  return s;
}
const canon = (p: Record<string, string>) => JSON.stringify(Object.keys(p).sort().reduce((o: any, k) => (o[k] = p[k], o), {}));

async function quote(api: Api, params: Record<string, string>, resource: string) {
  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await db.from("keel_quotes").select("*", { count: "exact", head: true }).gte("created_at", since);
  if ((count ?? 0) > MAX_QUOTES_PER_MIN) return fail("Too many quotes this minute. Slow down.", 429, "rate_limited");
  const reference = randomReference();
  const expires = new Date(Date.now() + QUOTE_TTL_S * 1000);
  const { error } = await db.from("keel_quotes").insert({ reference, api: api.name, params: JSON.parse(canon(params)), lamports: api.lamports, expires_at: expires.toISOString() });
  if (error) return oops("quote", error);
  return json({
    x402Version: 1,
    error: "payment_required",
    message: `This pull costs ${api.lamports / 1e9} SOL on devnet. Pay, then repeat this request with header X-PAYMENT: <signature>.`,
    accepts: [{
      scheme: "exact", network: "solana-devnet", asset: "SOL",
      maxAmountRequired: String(api.lamports), payTo: PAY_TO, resource,
      description: api.summary, mimeType: "application/json", maxTimeoutSeconds: QUOTE_TTL_S,
      extra: {
        reference, lamports: api.lamports, sol: api.lamports / 1e9, expiresAt: expires.toISOString(),
        instructions: "SystemProgram.transfer(payer -> payTo, lamports) with `reference` appended to the instruction's keys as {isSigner:false,isWritable:false}. Use commitment 'confirmed'.",
      },
    }],
  }, 402);
}

async function settle(api: Api, params: Record<string, string>, sig: string) {
  if (!SIG.test(sig)) return { err: fail("X-PAYMENT must be a transaction signature", 400, "invalid_payment") };
  // Replay of an already-verified payment: only allowed to retry an unserved pull.
  const { data: prior } = await db.from("keel_receipts").select("*").eq("sig", sig).maybeSingle();
  if (prior) {
    if (prior.served) return { err: fail("This payment has already bought its pull.", 409, "payment_spent") };
    if (prior.api !== api.name) return { err: fail(`This payment was for ${prior.api}.`, 409, "payment_mismatch") };
    if (prior.attempts >= MAX_ATTEMPTS) return { err: fail("Retry limit reached for this payment.", 409, "payment_spent") };
    const { data: q } = await db.from("keel_quotes").select("params").eq("reference", prior.reference).single();
    if (canon(q!.params) !== canon(params)) return { err: fail("Params differ from the quoted request.", 409, "payment_mismatch") };
    return { receipt: prior };
  }
  let tx: any = null;
  for (let i = 0; i < 6 && !tx; i++) {
    tx = await getTx(PAY_RPC, sig).catch(() => null);
    if (!tx) await new Promise((s) => setTimeout(s, 1200));
  }
  if (!tx) return { err: fail("Payment transaction not found on devnet yet. Wait for confirmation and retry.", 402, "payment_not_found") };
  if (tx.meta.err) return { err: fail("Payment transaction failed onchain.", 402, "invalid_payment") };
  const keys: string[] = tx.transaction.message.accountKeys.map(keyStr);
  const { data: quotes } = await db.from("keel_quotes").select("*").in("reference", keys).is("paid_sig", null);
  const q = quotes?.[0];
  if (!q) return { err: fail("No open quote referenced by this transaction. Request a fresh quote.", 402, "invalid_payment") };
  if (q.api !== api.name) return { err: fail(`That quote was for ${q.api}.`, 409, "payment_mismatch") };
  if (canon(q.params) !== canon(params)) return { err: fail("Params differ from the quoted request.", 409, "payment_mismatch") };
  if (tx.blockTime && tx.blockTime * 1000 > new Date(q.expires_at).getTime() + 60_000) return { err: fail("Quote expired before payment landed.", 402, "quote_expired") };
  const pi = keys.indexOf(PAY_TO);
  const received = pi >= 0 ? tx.meta.postBalances[pi] - tx.meta.preBalances[pi] : 0;
  if (received < q.lamports) return { err: fail(`Treasury received ${received} lamports; ${q.lamports} required.`, 402, "underpaid") };
  const payer = keys[0];
  // Burn the quote first; the unique constraints make double-spend impossible.
  const { data: burned } = await db.from("keel_quotes").update({ paid_sig: sig }).eq("reference", q.reference).is("paid_sig", null).select();
  if (!burned?.length) return { err: fail("Quote already settled.", 409, "payment_spent") };
  const { data: receipt, error } = await db.from("keel_receipts").insert({ sig, reference: q.reference, api: api.name, payer, lamports: received }).select().single();
  if (error) return { err: fail("Payment already used.", 409, "payment_spent") };
  return { receipt };
}

// ---------- router ----------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = new URL(req.url);
  const path = url.pathname.replace(/^.*?\/keel/, "") || "/";
  try {
    if (path === "/" || path === "/catalog") {
      return json({
        name: "Monyx API Market", version: 1,
        payment: { protocol: "x402-style HTTP 402", network: "solana-devnet", asset: "SOL", payTo: PAY_TO, header: "X-PAYMENT" },
        base: `${url.origin}/functions/v1/keel/api/`,
        apis: APIS.map((a) => ({ name: a.name, title: a.title, summary: a.summary, priceLamports: a.lamports, priceSol: a.lamports / 1e9, params: a.params, example: a.example, url: `${url.origin}/functions/v1/keel/api/${a.name}` })),
      });
    }
    if (path === "/ledger") {
      const { data } = await db.from("keel_receipts").select("sig, api, payer, lamports, served, created_at").order("created_at", { ascending: false }).limit(40);
      const { count } = await db.from("keel_receipts").select("*", { count: "exact", head: true });
      const { data: all } = await db.from("keel_receipts").select("lamports, api, payer").limit(5000);
      const byApi: Record<string, number> = {};
      for (const r of all ?? []) byApi[r.api] = (byApi[r.api] ?? 0) + 1;
      return json({
        pulls: count ?? 0,
        earnedSol: sol((all ?? []).reduce((a, r) => a + Number(r.lamports), 0)),
        payers: new Set((all ?? []).map((r) => r.payer)).size,
        byApi, recent: data ?? [],
      });
    }
    // Read-only RPC relay for the Monyx Pro web app. Public mainnet RPC refuses
    // browser origins, so the free in-app tracer reads through here. Only
    // plain read methods are relayed; the processed APIs stay paid.
    const rp = path.match(/^\/rpc\/(mainnet|devnet)$/);
    if (rp && req.method === "POST") {
      const ip = (req.headers.get("x-forwarded-for") || "?").split(",")[0].trim();
      const now = Date.now(); const w = relayHits.get(ip);
      if (!w || now - w.t > 60_000) relayHits.set(ip, { t: now, n: 1 });
      else if (++w.n > RELAY_PER_MIN) return fail("Relay limit reached. Wait a minute or set your own RPC.", 429, "rate_limited");
      const body = await req.json().catch(() => null);
      if (!body || Array.isArray(body) || !RELAY_METHODS.has(body.method)) return fail("Method not relayed.", 400, "bad_request");
      const r = await fetch(DATA_RPC[rp[1]], { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: body.id ?? 1, method: body.method, params: body.params ?? [] }) });
      return new Response(await r.text(), { status: r.status, headers: { ...cors, "Content-Type": "application/json" } });
    }
    const m = path.match(/^\/api\/([a-z]+)$/);
    if (!m) return fail("Unknown route. Try GET /catalog.", 404, "not_found");
    const api = byName.get(m[1]);
    if (!api) return fail(`No API named ${m[1]}. See /catalog.`, 404, "not_found");

    const params: Record<string, string> = {};
    for (const k of Object.keys(api.params)) { const v = url.searchParams.get(k); if (v) params[k] = v.trim(); }
    if (req.method === "POST") {
      const body = await req.json().catch(() => ({}));
      for (const k of Object.keys(api.params)) if (body[k] != null) params[k] = String(body[k]).trim();
    }
    // Validate before charging so nobody pays for a malformed request.
    if (params.address) needAddr(params.address);
    if (params.mint) needAddr(params.mint, "mint");
    if ("address" in api.params && !params.address) throw new UserError("`address` is required");
    if ("mint" in api.params && !params.mint) throw new UserError("`mint` is required");
    if ("signature" in api.params && !params.signature) throw new UserError("`signature` is required");

    const payment = req.headers.get("x-payment");
    if (!payment) return await quote(api, params, url.toString());

    const s = await settle(api, params, payment.trim());
    if (s.err) return s.err;
    const r = s.receipt!;
    await db.from("keel_receipts").update({ attempts: r.attempts + 1 }).eq("sig", r.sig);
    const started = Date.now();
    let data: unknown;
    try { data = await api.run(params); }
    catch (e) {
      const retriesLeft = MAX_ATTEMPTS - (r.attempts + 1);
      if (e instanceof UserError) return fail(e.message, 400, "bad_request");
      console.error(`[monyx-meter] ${api.name}:`, e);
      return json({ error: "upstream_failed", message: "The data source didn't respond.", retriesLeft, note: retriesLeft > 0 ? "Your payment is held. Repeat the same request with the same X-PAYMENT to retry." : "Retries exhausted." }, 502);
    }
    await db.from("keel_receipts").update({ served: true }).eq("sig", r.sig);
    const receipt = { success: true, transaction: r.sig, network: "solana-devnet", payer: r.payer, lamports: Number(r.lamports) };
    return json({ api: api.name, ms: Date.now() - started, receipt, data }, 200, { "X-PAYMENT-RESPONSE": btoa(JSON.stringify(receipt)) });
  } catch (e) {
    if (e instanceof UserError) return fail(e.message, 400, "bad_request");
    return oops(path, e);
  }
});
