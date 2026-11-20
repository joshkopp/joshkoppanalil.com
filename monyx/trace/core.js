// Shared trace engine for the Monyx "where did this money come from?" check.
// Used by the Supabase Edge Function and by the local tests. No secrets here.
// Solana DEVNET only. Risk labels are High, Medium, or Normal.
// Use only High, Medium, or Normal. Do not use stronger words for funds or people.

export const MAX_HOPS = 2;
export const MAX_SIGS_PER_WALLET = 10;
export const MAX_RPC = 100;
export const CACHE_TTL_MS = 10 * 60 * 1000;
export const RATE_WINDOW_MS = 10 * 60 * 1000;
export const RATE_MAX = 15; // traces per IP per window
export const ADVICE = "Risk estimate only, not legal or financial advice.";

export const USDC_DEVNET = "4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU";
export const USDC_MAINNET = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"; // label only; we never call mainnet
export const TOKEN_PROGRAM = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";

// Programs and mints that are not a person's wallet — don't walk them as "senders".
export const SKIP = new Set([
  "11111111111111111111111111111111",
  TOKEN_PROGRAM,
  "TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb",
  "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
  "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
  "ComputeBudget111111111111111111111111111111",
  "So11111111111111111111111111111111111111112",
  USDC_DEVNET,
  USDC_MAINNET,
  "SysvarRent111111111111111111111111111111111",
  "SysvarC1ock11111111111111111111111111111111",
  "SysvarRecentB1ockHashes11111111111111111111",
  "SysvarRecentB1ockHashes11111111111111111111",
  "Vote111111111111111111111111111111111111111",
  "Stake11111111111111111111111111111111111111",
  "Config1111111111111111111111111111111111111",
]);

const B58A = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

function b58len(s) {
  let n = 0n;
  for (const c of s) n = n * 58n + BigInt(B58A.indexOf(c));
  let len = 0;
  while (n > 0n) {
    n >>= 8n;
    len++;
  }
  for (const c of s) {
    if (c === "1") len++;
    else break;
  }
  return len;
}

export function cleanAddr(s) {
  return String(s || "")
    .replace(/[\s\u200b-\u200d\ufeff]/g, "")
    .replace(/^solana:/i, "")
    .split("?")[0];
}

export function isAddr(s) {
  return /^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(s || "") && b58len(s) === 32;
}

export function normalizeTier(t) {
  const s = String(t || "").trim().toLowerCase();
  if (s === "high") return "High";
  if (s === "medium") return "Medium";
  if (s === "normal") return "Normal";
  return null;
}

export const TIER_RANK = { High: 3, Medium: 2, Normal: 1 };

export function isMainnetUrl(url) {
  const u = String(url || "").toLowerCase();
  return /solana-mainnet|mainnet-beta|mainnet\.solana|\/mainnet/i.test(u) && !/devnet/.test(u);
}

// Wallets we know and don't walk through (Monyx's own test bank pays every welcome dollar, so its long
// history would eat the whole call budget and tell us nothing). Listed in risk-list.json under "trusted".
export function loadTrusted(list) {
  const out = new Set();
  for (const w of (list && !Array.isArray(list) && list.trusted) || []) {
    const a = cleanAddr(w && (w.address || w));
    if (isAddr(a)) out.add(a);
  }
  return out;
}

export function loadRiskMap(list) {
  const wallets = Array.isArray(list) ? list : (list && list.wallets) || [];
  const map = new Map();
  for (const w of wallets) {
    const address = cleanAddr(w && w.address);
    if (!isAddr(address)) continue; // skip placeholders like REPLACE_WITH_...
    const tier = normalizeTier(w.tier);
    if (tier !== "High" && tier !== "Medium") continue;
    map.set(address, {
      address,
      label: String((w && w.label) || "Listed wallet"),
      tier,
    });
  }
  return map;
}

export function assetLabel(mint) {
  if (!mint || mint === "SOL") return "SOL";
  if (mint === USDC_DEVNET || mint === USDC_MAINNET) return "USDC";
  return "token";
}

export function headlineFor(tier, hops, label) {
  if (tier === "Normal" || hops == null) return "Nothing on the risk list in the last 2 hops.";
  if (hops === 0) {
    return label
      ? `This account is on the ${tier} risk list (${label}).`
      : `This account is on the ${tier} risk list.`;
  }
  const hopWords = hops === 1 ? "1 hop back" : `${hops} hops back`;
  return `This money came from a ${tier} risk source, ${hopWords}.`;
}

export function extractIncoming(tx, target) {
  const out = [];
  if (!tx || !tx.transaction || !tx.meta || tx.meta.err) return out;

  const ixs = [...(tx.transaction.message.instructions || [])];
  for (const inner of tx.meta.innerInstructions || []) ixs.push(...inner.instructions);

  for (const ix of ixs) {
    if (ix.program !== "system" || !ix.parsed) continue;
    const { type, info } = ix.parsed;
    if (!info || (type !== "transfer" && type !== "transferWithSeed")) continue;
    if (info.destination === target && info.source && info.source !== target) {
      out.push({
        from: info.source,
        amount: Number(info.lamports) / 1e9,
        asset: "SOL",
        mint: null,
      });
    }
  }

  const deltas = new Map();
  const add = (b, sign) => {
    if (!b || !b.owner || !b.mint) return;
    const key = b.owner + "|" + b.mint;
    const amt = Number((b.uiTokenAmount && b.uiTokenAmount.uiAmount) || 0);
    deltas.set(key, (deltas.get(key) || 0) + sign * amt);
  };
  for (const b of tx.meta.preTokenBalances || []) add(b, -1);
  for (const b of tx.meta.postTokenBalances || []) add(b, 1);

  const gained = [];
  const lost = [];
  for (const [key, d] of deltas) {
    const cut = key.indexOf("|");
    const owner = key.slice(0, cut);
    const mint = key.slice(cut + 1);
    if (d > 1e-12) gained.push({ owner, mint, amount: d });
    else if (d < -1e-12) lost.push({ owner, mint, amount: -d });
  }
  for (const g of gained) {
    if (g.owner !== target) continue;
    for (const s of lost) {
      if (s.mint !== g.mint || s.owner === target) continue;
      out.push({
        from: s.owner,
        amount: Math.min(s.amount, g.amount),
        asset: assetLabel(g.mint),
        mint: g.mint,
      });
    }
  }
  return out;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

export function makeBudget(max = MAX_RPC) {
  return { used: 0, max, exhausted: false, failed: 0 };
}

// Free public RPCs rate-limit per IP, so calls from this worker are spaced out a little,
// and confirmed transactions (which never change) are remembered between checks.
// Solana's public devnet allows about 40 calls per 10 s per method per IP, so each method gets its own pace.
const TX_CACHE = new Map();
const nextSlot = new Map();
async function paced(method, gapMs) {
  const now = Date.now();
  const at = Math.max(now, nextSlot.get(method) || 0);
  nextSlot.set(method, at + gapMs);
  if (at > now) await sleep(at - now);
}

export function makeRpc(url, budget, fetchImpl, opts = {}) {
  const fetchFn = fetchImpl || fetch;
  const timeoutMs = opts.timeoutMs || 12000;
  const retries = opts.retries == null ? 5 : opts.retries;
  const gapMs = opts.gapMs == null ? 260 : opts.gapMs;
  const backoffMs = opts.backoffMs == null ? 900 : opts.backoffMs;

  return async function rpc(method, params) {
    const txKey = method === "getTransaction" && params && params[0] ? String(params[0]) : null;
    if (txKey && TX_CACHE.has(txKey)) return TX_CACHE.get(txKey);
    if (budget.used >= budget.max) {
      budget.exhausted = true;
      throw Object.assign(new Error("rpc budget"), { budget: true });
    }
    if (budget.deadline && Date.now() > budget.deadline) {
      budget.exhausted = true;
      throw Object.assign(new Error("rpc deadline"), { budget: true });
    }
    budget.used += 1;

    let last = null;
    for (let i = 0; i < retries; i++) {
      let res;
      if (gapMs) await paced(method, gapMs);
      try {
        const ctl = new AbortController();
        const to = setTimeout(() => ctl.abort(), timeoutMs);
        res = await fetchFn(url, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
          signal: ctl.signal,
        });
        clearTimeout(to);
      } catch (e) {
        last = e;
        if (i === retries - 1) break;
        await sleep(300 * 2 ** i);
        continue;
      }
      if (res.status === 429 || res.status >= 500) {
        last = new Error("RPC " + res.status);
        if (i === retries - 1) break;
        await sleep(backoffMs * 2 ** i);
        continue;
      }
      let body;
      try {
        body = await res.json();
      } catch (e) {
        last = e;
        break;
      }
      if (body.error) {
        throw Object.assign(new Error(body.error.message || "RPC error"), { rpc: true });
      }
      if (txKey && body.result) {
        if (TX_CACHE.size > 3000) TX_CACHE.clear();
        TX_CACHE.set(txKey, body.result);
      }
      return body.result;
    }
    // Network trouble (timeouts, 429s, 5xx after retries). Counted so a Normal result is never built on missing data.
    budget.failed = (budget.failed || 0) + 1;
    budget.why = budget.why || {};
    budget.why[method] = String((last && last.message) || "failed").slice(0, 40);
    throw last || new Error("RPC failed");
  };
}

async function signaturesForWallet(rpc, address, budget) {
  const sigs = [];
  let truncated = false;
  const atas = [];

  try {
    const s1 = await rpc("getSignaturesForAddress", [address, { limit: MAX_SIGS_PER_WALLET }]);
    if (Array.isArray(s1)) sigs.push(...s1);
  } catch (e) {
    if (e && e.budget) return { sigs: [], atas, truncated: true };
    // Keep going if the wallet itself has no history the node will admit to.
  }

  if (!budget.exhausted) {
    try {
      const accs = await rpc("getTokenAccountsByOwner", [
        address,
        { mint: USDC_DEVNET },
        { encoding: "jsonParsed" },
      ]);
      for (const a of (accs && accs.value) || []) {
        if (a && a.pubkey) atas.push(a.pubkey);
      }
    } catch (e) {
      if (e && e.budget) truncated = true;
    }
  } else {
    truncated = true;
  }

  for (const ata of atas.slice(0, 2)) {
    if (budget.exhausted) {
      truncated = true;
      break;
    }
    try {
      const s2 = await rpc("getSignaturesForAddress", [ata, { limit: MAX_SIGS_PER_WALLET }]);
      if (Array.isArray(s2)) sigs.push(...s2);
    } catch (e) {
      if (e && e.budget) {
        truncated = true;
        break;
      }
    }
  }

  const seen = new Set();
  const unique = [];
  sigs.sort((a, b) => (b.blockTime || 0) - (a.blockTime || 0) || String(b.signature).localeCompare(String(a.signature)));
  for (const s of sigs) {
    if (!s || !s.signature || seen.has(s.signature)) continue;
    seen.add(s.signature);
    unique.push(s);
    if (unique.length >= MAX_SIGS_PER_WALLET) break;
  }
  return { sigs: unique, atas, truncated };
}

async function incomingForWallet(rpc, address, budget) {
  const { sigs, atas, truncated: already } = await signaturesForWallet(rpc, address, budget);
  let truncated = already;
  const incoming = [];
  const txOpt = { encoding: "jsonParsed", maxSupportedTransactionVersion: 0 };

  for (const s of sigs) {
    if (budget.exhausted) {
      truncated = true;
      break;
    }
    let tx = null;
    try {
      tx = await rpc("getTransaction", [s.signature, txOpt]);
    } catch (e) {
      if (e && e.budget) {
        truncated = true;
        break;
      }
      continue;
    }
    if (!tx) continue;
    for (const t of extractIncoming(tx, address)) {
      if (SKIP.has(t.from) || !isAddr(t.from)) continue;
      incoming.push({
        ...t,
        signature: s.signature,
        time: s.blockTime || null,
      });
    }
  }
  return { incoming, truncated, atas };
}

function uniqueSenders(incoming) {
  const seen = new Set();
  const out = [];
  for (const t of incoming) {
    if (!t.from || seen.has(t.from)) continue;
    seen.add(t.from);
    out.push(t);
  }
  return out;
}

function betterMatch(a, b) {
  if (!a) return true;
  if (TIER_RANK[b.tier] !== TIER_RANK[a.tier]) return TIER_RANK[b.tier] > TIER_RANK[a.tier];
  return b.hops < a.hops;
}

function pathFrom(chain, match) {
  return chain.map((step, i) => {
    const row = {
      hop: i,
      address: step.address,
      role: i === 0 ? "checked" : "sender",
    };
    if (i > 0) {
      if (step.amount != null) row.amount = step.amount;
      if (step.asset) row.asset = step.asset;
      if (step.signature) row.signature = step.signature;
    }
    if (match && step.address === match.address) {
      row.label = match.label;
      row.tier = match.tier;
    }
    return row;
  });
}

export async function runTrace({ address, rpcUrl, riskList, fetchImpl, limits, now } = {}) {
  const started = (now || Date.now)();
  const target = cleanAddr(address);
  if (!isAddr(target)) {
    return {
      ok: false,
      error: "bad_address",
      message:
        "That doesn't look like a Solana account number. If you have a @username, look it up in the app first, then send the account number.",
      note: ADVICE,
    };
  }

  const maxRpc = (limits && limits.maxRpc) || MAX_RPC;
  const maxHops = limits && limits.maxHops != null ? limits.maxHops : MAX_HOPS;
  const budget = makeBudget(maxRpc);
  if (limits && limits.deadlineMs) budget.deadline = started + limits.deadlineMs;
  const riskMap = loadRiskMap(riskList || []);
  const trusted = loadTrusted(riskList || []);
  const rpc = makeRpc(rpcUrl, budget, fetchImpl, limits || {});

  const self = riskMap.get(target);
  if (self) {
    return {
      ok: true,
      address: target,
      tier: self.tier,
      label: self.label,
      matchedAddress: self.address,
      hops: 0,
      headline: headlineFor(self.tier, 0, self.label),
      path: pathFrom([{ address: target }], self),
      rpcCallsUsed: budget.used,
      cached: false,
      truncated: false,
      note: ADVICE,
    };
  }

  let best = null;
  let truncated = false;
  const visited = new Set();

  // Each queue item: { address, hop, chain } where hop is the hop index of this address (0 = checked).
  const queue = [{ address: target, hop: 0, chain: [{ address: target }] }];

  while (queue.length) {
    const cur = queue.shift();
    if (visited.has(cur.address)) continue;
    visited.add(cur.address);

    if (budget.exhausted) {
      truncated = true;
      break;
    }

    let result;
    try {
      result = await incomingForWallet(rpc, cur.address, budget);
    } catch (e) {
      if (e && e.budget) {
        truncated = true;
        break;
      }
      truncated = true;
      continue;
    }
    if (result.truncated) truncated = true;

    const senders = uniqueSenders(result.incoming);
    for (const t of senders) {
      const hop = cur.hop + 1;
      const chain = cur.chain.concat([
        {
          address: t.from,
          amount: t.amount,
          asset: t.asset,
          signature: t.signature,
        },
      ]);
      const hit = riskMap.get(t.from);
      if (hit) {
        const candidate = { tier: hit.tier, hops: hop, label: hit.label, address: hit.address, chain };
        if (betterMatch(best, candidate)) best = candidate;
        continue; // no need to walk through a listed wallet
      }
      if (trusted.has(t.from)) continue; // a known wallet: nothing to learn by walking through it
      if (hop < maxHops && !visited.has(t.from) && !budget.exhausted) {
        queue.push({ address: t.from, hop, chain });
      }
    }
  }

  if (best) {
    return {
      ok: true,
      address: target,
      tier: best.tier,
      label: best.label,
      matchedAddress: best.address,
      hops: best.hops,
      headline: headlineFor(best.tier, best.hops, best.label),
      path: pathFrom(best.chain, best),
      rpcCallsUsed: budget.used,
      cached: false,
      truncated,
      note: ADVICE,
      ms: (now || Date.now)() - started,
    };
  }

  // No listed wallet found, but some lookups failed: that's "we couldn't finish", not "Normal".
  if (budget.failed > 0) {
    return {
      ok: false,
      error: "incomplete",
      message: "Part of the network didn't answer, so we couldn't finish the source check.",
      rpcCallsUsed: budget.used,
      failedCalls: budget.why || {},
      note: ADVICE,
    };
  }

  return {
    ok: true,
    address: target,
    tier: "Normal",
    label: null,
    matchedAddress: null,
    hops: null,
    headline: headlineFor("Normal", null),
    path: [{ hop: 0, address: target, role: "checked" }],
    rpcCallsUsed: budget.used,
    cached: false,
    truncated,
    note: ADVICE,
    ms: (now || Date.now)() - started,
  };
}

export function makeCache(ttlMs = CACHE_TTL_MS) {
  const map = new Map();
  return {
    get(key) {
      const row = map.get(key);
      if (!row) return null;
      if (Date.now() >= row.expires) {
        map.delete(key);
        return null;
      }
      return row.value;
    },
    set(key, value) {
      map.set(key, { value, expires: Date.now() + ttlMs });
      if (map.size > 200) {
        const now = Date.now();
        for (const [k, v] of map) {
          if (now >= v.expires) map.delete(k);
        }
      }
    },
    size() {
      return map.size;
    },
  };
}

export function makeRateLimit({ windowMs = RATE_WINDOW_MS, max = RATE_MAX } = {}) {
  const map = new Map();
  return {
    check(ip) {
      const key = ip || "unknown";
      const now = Date.now();
      let row = map.get(key);
      if (!row || now >= row.resetAt) {
        row = { count: 0, resetAt: now + windowMs };
        map.set(key, row);
      }
      if (row.count >= max) {
        return { ok: false, retryAfter: Math.max(1, Math.ceil((row.resetAt - now) / 1000)) };
      }
      row.count += 1;
      return { ok: true, remaining: max - row.count };
    },
  };
}

export function clientIp(req) {
  const h = req && req.headers;
  if (!h || typeof h.get !== "function") return "unknown";
  const fwd = h.get("x-forwarded-for") || "";
  const first = fwd.split(",")[0].trim();
  return first || h.get("cf-connecting-ip") || h.get("x-real-ip") || "unknown";
}

export function allowedOrigin(origin) {
  if (!origin) return null;
  if (origin === "https://www.monyx.pro" || origin === "https://monyx.pro" || origin === "https://joshkoppanalil.com" || origin === "https://www.joshkoppanalil.com") return origin;
  try {
    const u = new URL(origin);
    if ((u.hostname === "localhost" || u.hostname === "127.0.0.1") && (u.protocol === "http:" || u.protocol === "https:")) {
      return origin;
    }
  } catch {
    return null;
  }
  return null;
}

export function corsHeaders(origin) {
  const allow = allowedOrigin(origin) || "https://www.monyx.pro";
  return {
    "access-control-allow-origin": allow,
    "access-control-allow-methods": "GET, POST, OPTIONS",
    "access-control-allow-headers": "content-type, authorization, apikey, x-client-info",
    vary: "Origin",
  };
}
