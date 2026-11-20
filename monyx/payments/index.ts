// Monyx money: everything that moves dollars. Deployed as the Supabase edge
// function "monyx-pay".
//
// Dollars are USDC on Solana devnet. People hold their own keys and sign their
// own payments; this server never can. It does four things with that:
//
//   1. Pays the network fee (gasless). The app builds a USDC transfer with the
//      Monyx bank as fee payer, the owner signs it, and /relay checks it is
//      exactly "owner sends USDC to someone" before adding the bank's signature.
//      Nobody ever needs SOL, so "no fees" is literally true.
//   2. Hands out free test dollars from the bank (/topup).
//   3. Claim links: pay someone who isn't on Monyx. The money sits in a fresh
//      one-off account whose key lives only in the link (/claims).
//   4. Live "you got paid": every relayed payment, plus payments from outside
//      Monyx found on-chain while the app is open, land in /inbox.
//
// It also runs the test-mode exchange (ledger coins bought with USDC) and the
// agent API that Grok Bot uses to draft payments and send requests. Drafts
// still need the person's tap in Monyx; an agent key can never move money.
import { createClient } from "npm:@supabase/supabase-js@2";
import { Buffer } from "node:buffer";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "npm:@solana/web3.js@1.95.3";

// Solana's free public devnet RPC by default. SOLANA_RPC can point at another free devnet endpoint
// (a Helius or Alchemy free tier, say); old QuickNode addresses are ignored now that plan is used up.
const DEVNET = "https://api.devnet.solana.com";
const pickRpc = (v?: string) => (v && !/quiknode|quicknode/i.test(v) ? v.trim() : DEVNET);
const RPC = pickRpc(Deno.env.get("SOLANA_RPC"));
const PUBLIC_RPC = pickRpc(Deno.env.get("PUBLIC_RPC"));
const USDC = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"); // Circle's devnet USDC
const TOKEN = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ATA_PROGRAM = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
const U = 1_000_000; // USDC has 6 decimals
const MAX_PAYMENT = 10_000 * U;
// Test-dollar amounts. Override with Supabase secrets (in dollars) without redeploying.
const envUsd = (k: string, d: number) => Math.round((Number(Deno.env.get(k)) || d) * U);
const WELCOME = envUsd("MONYX_WELCOME_USD", 5), DAILY = envUsd("MONYX_DAILY_USD", 2), BANK_FLOOR_USDC = envUsd("MONYX_BANK_FLOOR_USD", 0.5);
const TOPUP_HOURS = 20;
const RELAYS_PER_HOUR = 40, NEW_ACCOUNTS_PER_DAY = 15;
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

const ORIGINS = new Set(["https://monyx.pro", "https://www.monyx.pro", "https://joshkoppanalil.com", "https://www.joshkoppanalil.com"]);
// Only our own sites may call this API from a browser. Servers (Grok Bot) send no Origin and aren't affected.
const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "https://www.monyx.pro",
  "Vary": "Origin",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
const fail = (message: string, s = 400, error = "bad_request") => json({ error, message }, s);
const OOPS = "Something went wrong on our end. Please try again.";
const oops = (where: string, e: unknown) => { console.error(`[monyx-pay] ${where}:`, e); return fail(OOPS, 500, "server_error"); };

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const conn = new Connection(RPC, "confirmed");
const AVATAR_BASE = `${Deno.env.get("SUPABASE_URL")}/storage/v1/object/public/avatars/`;
const PUBLIC = "id, handle, name, address, avatar, created_at";
const pub = (u: any) => u && ({ handle: u.handle, name: u.name, address: u.address, avatar: u.avatar ? AVATAR_BASE + u.avatar : null });

// ---------- USDC building blocks ----------
const ata = (owner: PublicKey) => PublicKey.findProgramAddressSync([owner.toBuffer(), TOKEN.toBuffer(), USDC.toBuffer()], ATA_PROGRAM)[0];
const createAtaIx = (payer: PublicKey, owner: PublicKey) => new TransactionInstruction({
  programId: ATA_PROGRAM, data: Buffer.from([1]), // CreateIdempotent: fine if it already exists
  keys: [
    { pubkey: payer, isSigner: true, isWritable: true }, { pubkey: ata(owner), isSigner: false, isWritable: true },
    { pubkey: owner, isSigner: false, isWritable: false }, { pubkey: USDC, isSigner: false, isWritable: false },
    { pubkey: SystemProgram.programId, isSigner: false, isWritable: false }, { pubkey: TOKEN, isSigner: false, isWritable: false },
  ],
});
function transferIx(owner: PublicKey, to: PublicKey, units: number) {
  const data = Buffer.alloc(10); data[0] = 12; data.writeBigUInt64LE(BigInt(units), 1); data[9] = 6; // TransferChecked
  return new TransactionInstruction({ programId: TOKEN, data, keys: [
    { pubkey: ata(owner), isSigner: false, isWritable: true }, { pubkey: USDC, isSigner: false, isWritable: false },
    { pubkey: ata(to), isSigner: false, isWritable: true }, { pubkey: owner, isSigner: true, isWritable: false },
  ] });
}
const memoIx = (text: string) => new TransactionInstruction({ programId: MEMO, keys: [], data: Buffer.from(text.slice(0, 80), "utf8") });
// A missing token account really is $0. Anything else (a rate limit, a network
// blip) is retried, so a busy RPC never reports an empty balance by mistake.
async function usdcOf(owner: PublicKey) {
  for (let i = 0; ; i++) {
    try { return Number((await conn.getTokenAccountBalance(ata(owner))).value.amount); }
    catch (e: any) {
      if (/could not find account|Invalid param/i.test(String(e?.message || e))) return 0;
      if (i >= 3) throw e;
      await new Promise((r) => setTimeout(r, 400 * 2 ** i));
    }
  }
}
// Wait for a transaction. Rate limits and network blips are retried with
// backoff; only a real on-chain failure or a long timeout counts as failure.
async function confirm(sig: string, ms = 40_000) {
  const t0 = Date.now(); let wait = 400;
  while (Date.now() - t0 < ms) {
    let st: any = null;
    try { st = (await conn.getSignatureStatuses([sig])).value[0]; wait = 400; }
    catch { wait = Math.min(wait * 2, 3000); }
    if (st?.err) throw Object.assign(new Error("failed on chain"), { onchain: true });
    if (st && (st.confirmationStatus === "confirmed" || st.confirmationStatus === "finalized")) return;
    await new Promise((r) => setTimeout(r, wait));
  }
  throw new Error("not confirmed in time");
}

// ---------- the bank: pays fees, hands out test dollars ----------
let bankKp: Keypair | null = null;
async function bank() {
  if (bankKp) return bankKp;
  const { data } = await db.from("monyx_config").select("value").eq("key", "bank_secret").single();
  bankKp = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(data!.value)));
  return bankKp;
}
// The bank paying someone (test money, a sale). The bank is both owner and fee payer.
async function bankPays(to: string, units: number, note: string) {
  const sig = await bankSends(to, units, note);
  await confirm(sig);
  await logPayment(sig, (await bank()).publicKey.toBase58(), to, units, note, "bank");
  return sig;
}
// Build, sign and send a bank payment; returns once it's on the wire (not yet confirmed).
async function bankSends(to: string, units: number, note: string) {
  const kp = await bank(); const toKey = new PublicKey(to);
  const tx = new Transaction().add(createAtaIx(kp.publicKey, toKey), transferIx(kp.publicKey, toKey, units), memoIx(note));
  // Retry only steps before the tx is on the wire (blockhash, send), so a retry can never pay twice.
  let sig = "";
  for (let i = 0; ; i++) {
    try {
      const { blockhash } = await conn.getLatestBlockhash("confirmed");
      tx.recentBlockhash = blockhash; tx.feePayer = kp.publicKey; tx.signatures = []; tx.sign(kp);
      sig = await conn.sendRawTransaction(tx.serialize());
      break;
    } catch (e) { if (i >= 2) throw e; await new Promise((r) => setTimeout(r, 400 * 2 ** i)); }
  }
  return sig;
}
// Every payment Monyx knows about lands here once per leg, keyed by signature + token + receiver, so a
// transaction that pays USDC and SOL keeps both (repeat deliveries are ignored).
// A new USDC payment also settles a matching open request or split share automatically.
async function logPayment(sig: string, from: string | null, to: string, units: number, note: string, source: string, token = "USDC", slot: number | null = null) {
  const { data } = await db.from("monyx_payments").upsert({ sig, from_addr: from, to_addr: to, units, note: note || null, source, token, slot }, { onConflict: "sig,token,to_addr", ignoreDuplicates: true }).select("sig");
  if (data?.length && token === "USDC" && from) await settleRequest(from, to, units, sig).catch((e) => console.error("[monyx-pay] settle:", e));
}
async function settleRequest(payerAddr: string, requesterAddr: string, units: number, sig: string) {
  const { data: ppl } = await db.from("monyx_users").select("id, address").in("address", [payerAddr, requesterAddr]);
  const payer = ppl?.find((p: any) => p.address === payerAddr), requester = ppl?.find((p: any) => p.address === requesterAddr);
  if (!payer || !requester) return;
  const { data: open } = await db.from("monyx_requests").select("id, usd").eq("from_user", requester.id).eq("to_user", payer.id).eq("status", "open").order("created_at").limit(10);
  const hit = (open || []).find((r: any) => Math.round(Number(r.usd) * U) === units);
  if (hit) await db.from("monyx_requests").update({ status: "paid", paid_sig: sig, updated_at: new Date().toISOString() }).eq("id", hit.id).eq("status", "open");
}

// ---------- relay: check, co-sign as fee payer, send ----------
const hits = new Map<string, { t: number; n: number }>();
const rpcCache = new Map<string, { text: string; until: number }>();
function limited(key: string, max: number, windowMs = 3600_000) {
  const now = Date.now(); const w = hits.get(key);
  if (!w || now - w.t > windowMs) { hits.set(key, { t: now, n: 1 }); return false; }
  return ++w.n > max;
}
type Checked = { owner: string; to: string; units: number; note: string; closes: boolean };
// Accept exactly one shape: [create recipient's USDC account]? + one USDC transfer + [memo]? + [close escrow → bank]?
function checkTx(tx: Transaction, bankKey: PublicKey): Checked {
  const bad = (why: string) => { throw Object.assign(new Error(why), { relay: true }); };
  if (!tx.feePayer || !tx.feePayer.equals(bankKey)) bad("fee payer");
  let transfer: Checked | null = null; let createFor: string | null = null; let note = ""; let closes = false;
  for (const ix of tx.instructions) {
    const k = ix.keys.map((x) => x.pubkey);
    if (ix.programId.equals(ATA_PROGRAM)) {
      if (createFor || ix.data.length !== 1 || ix.data[0] !== 1 || k.length !== 6) bad("ata");
      if (!k[0].equals(bankKey) || !k[3].equals(USDC) || !k[1].equals(ata(k[2])) || !k[4].equals(SystemProgram.programId) || !k[5].equals(TOKEN)) bad("ata keys");
      createFor = k[2].toBase58();
    } else if (ix.programId.equals(TOKEN) && ix.data[0] === 12) {
      if (transfer || ix.data.length !== 10 || ix.data[9] !== 6 || k.length !== 4) bad("transfer");
      const owner = k[3];
      if (owner.equals(bankKey) || !k[1].equals(USDC) || !k[0].equals(ata(owner)) || !ix.keys[3].isSigner) bad("transfer keys");
      const units = Number(Buffer.from(ix.data).readBigUInt64LE(1));
      if (!(units > 0 && units <= MAX_PAYMENT)) bad("amount");
      transfer = { owner: owner.toBase58(), to: "", units, note: "", closes: false };
      (transfer as any).dest = k[2].toBase58();
    } else if (ix.programId.equals(TOKEN) && ix.data[0] === 9 && ix.data.length === 1) {
      // CloseAccount on an emptied claim account, rent back to the bank that paid it.
      if (closes || k.length !== 3 || !k[1].equals(bankKey)) bad("close");
      closes = true; (ix as any)._closeOwner = k[2].toBase58(); (ix as any)._closeAcct = k[0].toBase58();
    } else if (ix.programId.equals(MEMO)) {
      if (ix.keys.length || ix.data.length > 120) bad("memo");
      note = Buffer.from(ix.data).toString("utf8");
    } else bad("program");
  }
  if (!transfer) bad("no transfer");
  const t = transfer!;
  // Work out the recipient owner from the destination token account.
  const dest = (t as any).dest as string;
  // The app always includes the (idempotent) create, which is how we learn the recipient.
  if (!createFor || ata(new PublicKey(createFor)).toBase58() !== dest) bad("recipient");
  t.to = createFor!;
  for (const ix of tx.instructions) if ((ix as any)._closeOwner && ((ix as any)._closeOwner !== t.owner || (ix as any)._closeAcct !== ata(new PublicKey(t.owner)).toBase58())) bad("close owner");
  t.note = note; t.closes = closes;
  const ownerSig = tx.signatures.find((s) => s.publicKey.toBase58() === t.owner);
  if (!ownerSig || !ownerSig.signature) bad("unsigned");
  return t;
}

// ---------- exchange (test mode) ----------
// Cash is USDC. Buying sends USDC to the bank and records the coin in Monyx's
// ledger at the live price; selling removes it and the bank pays USDC back.
// The ledger is held by Monyx (the coins are not on-chain), and the app says so.
const ASSETS: Record<string, { sym: string; name: string; color: string }> = {
  bitcoin: { sym: "BTC", name: "Bitcoin", color: "#f7931a" },
  ethereum: { sym: "ETH", name: "Ethereum", color: "#627eea" },
  solana: { sym: "SOL", name: "Solana", color: "#9945ff" },
  ripple: { sym: "XRP", name: "XRP", color: "#23292f" },
  dogecoin: { sym: "DOGE", name: "Dogecoin", color: "#c2a633" },
  cardano: { sym: "ADA", name: "Cardano", color: "#0033ad" },
  chainlink: { sym: "LINK", name: "Chainlink", color: "#2a5ada" },
  "avalanche-2": { sym: "AVAX", name: "Avalanche", color: "#e84142" },
  litecoin: { sym: "LTC", name: "Litecoin", color: "#345d9d" },
};
let mk: { t: number; data: any[] } | null = null;
async function markets() {
  if (mk && Date.now() - mk.t < 60_000) return mk.data;
  const r = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${Object.keys(ASSETS).join(",")}&sparkline=true&price_change_percentage=24h`).catch(() => null);
  if (!r || !r.ok) { if (mk) return mk.data; throw Object.assign(new Error("prices"), { prices: true }); }
  const j = await r.json();
  mk = { t: Date.now(), data: j.map((c: any) => ({
    id: c.id, symbol: ASSETS[c.id].sym, name: ASSETS[c.id].name, color: ASSETS[c.id].color, price: c.current_price,
    change24h: c.price_change_percentage_24h, marketCap: c.market_cap,
    spark: (c.sparkline_in_7d?.price || []).filter((_: unknown, i: number) => i % 4 === 0),
  })) };
  return mk.data;
}
const price = async (id: string) => (await markets()).find((x: any) => x.id === id)!.price as number;
const roundQty = (q: number) => Math.floor(q * 1e10) / 1e10;

// ---------- who's calling ----------
async function sessionUser(req: Request) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!t || t.startsWith("mx_")) return null;
  const { data: s } = await db.from("monyx_sessions").select("user_id, expires_at").eq("token", t).maybeSingle();
  if (!s || new Date(s.expires_at) < new Date()) return null;
  const { data: u } = await db.from("monyx_users").select("*").eq("id", s.user_id).single();
  return u;
}
// Session tokens seen by /rpc, cached for a few minutes so balance polling doesn't hit the database.
const rpcSessions = new Map<string, { id: string | null; until: number }>();
async function rpcCaller(req: Request) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!t || t.startsWith("mx_")) return null;
  const c = rpcSessions.get(t); if (c && c.until > Date.now()) return c.id;
  const { data: s } = await db.from("monyx_sessions").select("user_id, expires_at").eq("token", t).maybeSingle();
  const id = s && new Date(s.expires_at) > new Date() ? s.user_id : null;
  if (rpcSessions.size > 5000) rpcSessions.clear();
  rpcSessions.set(t, { id, until: Date.now() + 300_000 });
  return id;
}
const sha256 = async (s: string) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s)))].map((b) => b.toString(16).padStart(2, "0")).join("");
async function agentUser(req: Request) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!t.startsWith("mx_")) return null;
  const { data: k } = await db.from("monyx_agent_keys").select("*").eq("key_hash", await sha256(t)).eq("revoked", false).maybeSingle();
  if (!k) return null;
  const { data: u } = await db.from("monyx_users").select("*").eq("id", k.user_id).single();
  db.from("monyx_agent_keys").update({ last_used_at: new Date().toISOString() }).eq("id", k.id).then(() => {});
  return { user: u, key: k };
}
async function names(addrs: string[]) {
  const list = [...new Set(addrs.filter(Boolean))];
  const out = new Map<string, any>();
  if (list.length) { const { data } = await db.from("monyx_users").select(PUBLIC).in("address", list); for (const u of data || []) out.set(u.address, pub(u)); }
  try { const b = (await bank()).publicKey.toBase58(); out.set(b, { handle: "monyx", name: "Monyx", address: b, bank: true }); } catch { /* */ }
  return out;
}
const dollars = (units: number) => Math.round(units / 10_000) / 100;

// Payments inside one Solana transaction: who got USDC (or SOL), from whom, and the memo.
// Payment events from one transaction: USDC from token balances, SOL from lamport balances.
// Accepts both the compact shape filter.js returns and a raw Solana block transaction.
type PayEvent = { signature: string; slot: number | null; time: number | null; from_wallet: string | null; to_wallet: string; amount: number; token: "SOL" | "USDC"; memo: string };
function paymentEvents(t: any): PayEvent[] {
  const tx = t.transaction ? t : null;
  const sig = t.signature || tx?.transaction?.signatures?.[0];
  if (!sig) return [];
  const meta = tx ? tx.meta : t;
  if (meta?.err) return [];
  const keys: string[] = (t.accountKeys || tx?.transaction?.message?.accountKeys || []).map((k: any) => (typeof k === "string" ? k : k.pubkey));
  const memo = String(t.memo ?? ((meta?.logMessages || []).map((l: string) => l.match(/Memo \(len \d+\): "(.*)"$/)).find(Boolean)?.[1] ?? "")).slice(0, 80);
  const slot = t.slot ?? tx?.slot ?? null, time = t.blockTime ?? tx?.blockTime ?? null;
  const out: PayEvent[] = [];
  const tok = new Map<string, number>();
  for (const [list, sign] of [[meta?.preTokenBalances, -1], [meta?.postTokenBalances, 1]] as const)
    for (const b of list || []) if (b.mint === USDC.toBase58() && b.owner) tok.set(b.owner, (tok.get(b.owner) || 0) + sign * Number(b.uiTokenAmount?.amount || 0));
  const tFrom = [...tok.entries()].sort((a, b) => a[1] - b[1])[0];
  for (const [owner, d] of tok) if (d > 0) out.push({ signature: sig, slot, time, from_wallet: tFrom && tFrom[1] < 0 ? tFrom[0] : null, to_wallet: owner, amount: d, token: "USDC", memo });
  const pre: number[] = meta?.preBalances || [], post: number[] = meta?.postBalances || [];
  const sol = keys.map((k, i) => [k, (post[i] ?? 0) - (pre[i] ?? 0)] as [string, number]);
  const sFrom = [...sol].sort((a, b) => a[1] - b[1])[0];
  // Ignore dust (rent for new token accounts and the like): a real SOL payment is at least 0.001 SOL.
  for (const [k, d] of sol) if (d >= 1_000_000 && !tok.has(k)) out.push({ signature: sig, slot, time, from_wallet: sFrom && sFrom[1] < 0 ? sFrom[0] : null, to_wallet: k, amount: d, token: "SOL", memo });
  return out;
}
// Short-lived ticket for the event stream (EventSource can't send an Authorization header).
async function hmacB64(t: string) {
  const k = await crypto.subtle.importKey("raw", new TextEncoder().encode(Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.sign("HMAC", k, new TextEncoder().encode(t))))).replace(/[+/=]/g, (c) => ({ "+": "-", "/": "_", "=": "" } as any)[c]);
}
const REMIND_HOURS = Number(Deno.env.get("MONYX_REMIND_HOURS")) || 24;
// Payments from wallets outside Monyx below these amounts are ignored, so nobody can spam a
// Monyx user with penny payments carrying a note (each would pop up as "you got paid").
const OUTSIDE_MIN = { USDC: envUsd("MONYX_OUTSIDE_MIN_USD", 0.1), SOL: Math.round((Number(Deno.env.get("MONYX_OUTSIDE_MIN_SOL")) || 0.01) * 1e9) };
// Raw JSON-RPC call (plain account keys as strings, which paymentEvents expects).
async function rpcRaw(method: string, params: unknown[]) {
  for (let i = 0; i < 3; i++) {
    const r = await fetch(RPC, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }) }).catch(() => null);
    if (r && r.ok) { const j = await r.json().catch(() => null); if (j && !j.error) return j.result; }
    await new Promise((x) => setTimeout(x, 400 * 2 ** i));
  }
  return null;
}
// Money that arrives from outside Monyx: while someone has the app open, their live stream asks
// Solana for the newest transactions on their wallet and USDC account and logs any payment Monyx
// didn't relay itself. Free (public RPC), and only runs for people who are actually watching.
async function watchChain(me: string, sinceMs: number, seen: Set<string>) {
  const addrs = [me, ata(new PublicKey(me)).toBase58()];
  const lists = await Promise.all(addrs.map((a) => rpcRaw("getSignaturesForAddress", [a, { limit: 6, commitment: "confirmed" }])));
  const sigs = [...new Set(lists.flat().filter((x: any) => x && !x.err && !seen.has(x.signature) && (x.blockTime || 0) * 1000 >= sinceMs).map((x: any) => x.signature))] as string[];
  for (const x of lists.flat()) if (x) seen.add(x.signature);
  if (!sigs.length) return 0;
  const { data: known } = await db.from("monyx_payments").select("sig").in("sig", sigs);
  const have = new Set((known || []).map((r: any) => r.sig));
  let saved = 0;
  for (const sig of sigs.filter((x) => !have.has(x)).slice(0, 4)) {
    const tx = await rpcRaw("getTransaction", [sig, { encoding: "json", maxSupportedTransactionVersion: 0, commitment: "confirmed" }]);
    if (!tx) continue;
    for (const e of paymentEvents(tx)) {
      if (e.to_wallet !== me) continue;
      const { data: fromUser } = e.from_wallet ? await db.from("monyx_users").select("id").eq("address", e.from_wallet).maybeSingle() : { data: null };
      if (!fromUser && e.amount < OUTSIDE_MIN[e.token]) continue; // ignore penny spam from outside wallets
      await logPayment(e.signature, e.from_wallet, e.to_wallet, e.amount, e.memo, "chain", e.token, e.slot); saved++;
    }
  }
  return saved;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  cors["Access-Control-Allow-Origin"] = ORIGINS.has(origin) ? origin : "https://www.monyx.pro";
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = new URL(req.url);
  const path = url.pathname.replace(/^.*?\/monyx-pay(?=\/|$)/, "") || "/";
  const ip = (req.headers.get("x-forwarded-for") || "?").split(",")[0].trim();
  // Bodies may arrive gzipped; read the decompressed text.
  let raw = "", wire = "";
  if (req.method === "POST") {
    let bytes = new Uint8Array(await req.arrayBuffer());
    wire = new TextDecoder().decode(bytes);
    if (/gzip/i.test(req.headers.get("content-encoding") || "") || (bytes[0] === 0x1f && bytes[1] === 0x8b)) {
      try { bytes = new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()); }
      catch { return fail("Couldn't read that body.", 400); }
    }
    raw = new TextDecoder().decode(bytes);
  }
  let body: any = {}; try { body = raw ? JSON.parse(raw) : {}; } catch { /* */ }
  try {
    // ----- public -----
    // Read-only RPC proxy: browsers read balances and history through this server (cached, retried)
    // instead of each hitting the public devnet endpoint directly (which answers 429 under load).
    if (path === "/rpc" && req.method === "POST") {
      const READ = new Set(["getTokenAccountBalance", "getSignaturesForAddress", "getTransaction", "getLatestBlockhash", "getSignatureStatuses", "getAccountInfo", "getBalance"]);
      if (!ORIGINS.has(origin)) return fail("Browser RPC is only for the Monyx app.", 403, "forbidden");
      const m = String(body?.method || "");
      if (!READ.has(m) || !Array.isArray(body?.params) || JSON.stringify(body.params).length > 2000) return fail("That RPC call isn't allowed.", 400, "bad_rpc");
      // The Origin check only stops other websites; scripts can fake it. So the real limit is by caller:
      // a signed-in Monyx session gets the normal allowance, anyone else a small one per IP.
      const who = await rpcCaller(req);
      if (who ? limited("rpcu" + who, 900, 600_000) : limited("rpc" + ip, 150, 600_000)) return fail("Slow down a little.", 429, "rate_limited");
      // Cache answers: a confirmed transaction never changes, and balances/history are fine 3 seconds stale.
      // Cuts upstream calls (and the 429s they cause) by a lot when several tabs poll.
      const ck = m + JSON.stringify(body.params);
      const hit = rpcCache.get(ck);
      if (hit && Date.now() < hit.until) return new Response(hit.text, { status: 200, headers: { ...cors, "content-type": "application/json", "x-cache": "hit" } });
      let r: Response | null = null;
      for (let i = 0; i < 3; i++) {
        r = await fetch(RPC, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ jsonrpc: "2.0", id: 1, method: m, params: body.params }) }).catch(() => null);
        if (r && r.status !== 429 && r.status < 500) break;
        await new Promise((x) => setTimeout(x, 300 * 2 ** i));
      }
      if (!r) return fail("The network is busy. Try again.", 503, "busy");
      const text = await r.text();
      if (r.ok && !/"error"/.test(text.slice(0, 200))) {
        const ttl = m === "getTransaction" && !/"result":null/.test(text) ? 600_000 : 3_000;
        if (rpcCache.size > 3000) rpcCache.clear();
        rpcCache.set(ck, { text, until: Date.now() + ttl });
      }
      return new Response(text, { status: r.status, headers: { ...cors, "content-type": "application/json" } });
    }
    // Read-only routes only answer GET; anything else is a 405, not a silent 200.
    if ((path === "/info" || path === "/markets") && req.method !== "GET") return fail("Use GET.", 405, "method_not_allowed");
    if (path === "/info") {
      const kp = await bank();
      return json({ bank: kp.publicKey.toBase58(), usdc: USDC.toBase58(), bankUsd: dollars(await usdcOf(kp.publicKey)), rpc: PUBLIC_RPC });
    }
    if (path === "/markets") return json({ assets: await markets() });
    const cm = path.match(/^\/claims\/([1-9A-HJ-NP-Za-km-z]{32,44})$/);
    if (cm && req.method === "GET") {
      const { data: c } = await db.from("monyx_claims").select("*").eq("escrow", cm[1]).maybeSingle();
      if (!c) return fail("This link isn't valid.", 404, "not_found");
      const { data: from } = await db.from("monyx_users").select(PUBLIC).eq("id", c.from_user).single();
      return json({ from: pub(from), usd: dollars(c.units), note: c.note, status: c.status });
    }
    // ----- live events (Server-Sent Events) -----
    // The app opens /events?t=<ticket>. New payments (from the relay and from the on-chain watcher),
    // requests that got paid and reminders for unpaid ones are pushed as they land. The connection
    // ends after ~2 minutes and EventSource reconnects on its own, resuming from Last-Event-ID.
    if (path === "/events" && req.method === "GET") {
      const [b64, mac] = String(url.searchParams.get("t") || "").split(".");
      let tk: any = null;
      try { if (mac && mac === (await hmacB64(b64))) tk = JSON.parse(atob(b64)); } catch { /* */ }
      if (!tk || !tk.n || tk.exp < Date.now()) return fail("Please sign in again.", 401, "unauthorized");
      // Each ticket opens one stream. A copy that ends up in a log has already been used (and expires in 30 s).
      const { error: used } = await db.from("monyx_used_logins").insert({ sig: "evt:" + tk.n });
      if (used) return fail("Please sign in again.", 401, "unauthorized");
      const me = tk.a as string, uid = tk.u as string;
      let since = Number(req.headers.get("last-event-id")) || Number(url.searchParams.get("since")) || Date.now() - 5000;
      const enc = new TextEncoder(), known = new Map<string, any>(), sentPaid = new Set<string>();
      const who = async (addrs: string[]) => {
        const need = addrs.filter((a) => a && !known.has(a));
        if (need.length) { const m = await names(need); for (const a of need) known.set(a, m.get(a) || null); }
      };
      let keepAlive: (v?: unknown) => void = () => {};
      // Keep this worker alive while the stream is open; otherwise an idle instance can be dropped
      // early and the stream dies without the browser noticing.
      // @ts-ignore EdgeRuntime is provided by Supabase
      try { EdgeRuntime.waitUntil(new Promise((r) => (keepAlive = r))); } catch { /* */ }
      const body_ = new ReadableStream({
        async start(ctrl) {
          let open = true;
          const put = (t: string) => { if (!open) return; try { ctrl.enqueue(enc.encode(t)); } catch { open = false; } };
          const send = (event: string, data: unknown, id?: number) => put(`${id ? `id: ${id}\n` : ""}event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
          put("retry: 2000\n\n");
          const t0 = Date.now(); let tick = 0; const chainSeen = new Set<string>(); const watchFrom = Date.now() - 120_000;
          try {
            while (open && !req.signal.aborted && Date.now() - t0 < 120_000) {
              const { data: pays } = await db.from("monyx_payments").select("sig, from_addr, to_addr, units, note, source, token, created_at")
                .or(`to_addr.eq.${me},from_addr.eq.${me}`).gt("created_at", new Date(since).toISOString()).order("created_at").limit(25);
              if (pays?.length) {
                await who(pays.flatMap((p: any) => [p.from_addr, p.to_addr]));
                for (const p of pays) {
                  const at = Date.parse(p.created_at); since = Math.max(since, at);
                  const incoming = p.to_addr === me;
                  send("payment", { sig: p.sig, direction: incoming ? "in" : "out", from: p.from_addr, to: p.to_addr, amount: p.token === "SOL" ? p.units / 1e9 : dollars(p.units), token: p.token, note: p.note, via: p.source, at, person: known.get(incoming ? p.from_addr : p.to_addr) || null }, at);
                }
              }
              // Every ~6 s, look on-chain for money that arrived from outside Monyx (logged rows go out on the next pass).
              if (tick % 4 === 2) await watchChain(me, watchFrom, chainSeen).catch((e) => console.error("[monyx-pay] watch:", e));
              if (tick % 4 === 0) {
                // Requests you made that just got paid (settled automatically from the payment).
                const { data: paid } = await db.from("monyx_requests").select("id, to_user, usd, note, updated_at").eq("from_user", uid).eq("status", "paid").gt("updated_at", new Date(Date.now() - 15_000).toISOString());
                for (const r of paid || []) {
                  if (sentPaid.has(r.id)) continue; sentPaid.add(r.id);
                  const { data: u } = await db.from("monyx_users").select(PUBLIC).eq("id", r.to_user).single();
                  send("request_paid", { id: r.id, usd: Number(r.usd), note: r.note, by: pub(u) });
                }
                // Reminders: requests waiting on you for more than REMIND_HOURS, sent once.
                const { data: due } = await db.from("monyx_requests").select("id, from_user, usd, note, created_at").eq("to_user", uid).eq("status", "open").is("reminded_at", null).lt("created_at", new Date(Date.now() - REMIND_HOURS * 3600_000).toISOString()).limit(5);
                for (const r of due || []) {
                  const { data: claimed } = await db.from("monyx_requests").update({ reminded_at: new Date().toISOString() }).eq("id", r.id).is("reminded_at", null).select("id");
                  if (!claimed?.length) continue;
                  const { data: u } = await db.from("monyx_users").select(PUBLIC).eq("id", r.from_user).single();
                  send("reminder", { id: r.id, usd: Number(r.usd), note: r.note, from: pub(u), since: r.created_at });
                }
              }
              // Heartbeat the app can see. If these stop, it reconnects and catches up from the last payment.
              if (tick % 3 === 0) put("event: ping\ndata: {}\n\n");
              tick++;
              await new Promise((r) => setTimeout(r, 1500));
            }
          } catch (e) { console.error("[monyx-pay] events:", e); }
          put("event: bye\ndata: {}\n\n");
          if (open) try { ctrl.close(); } catch { /* */ }
          keepAlive();
        },
        cancel() { keepAlive(); },
      });
      return new Response(body_, { headers: { ...cors, "content-type": "text/event-stream", "cache-control": "no-cache, no-transform", "x-accel-buffering": "no" } });
    }

    // ----- relay: anyone with a valid signed USDC transfer (users and claim links) -----
    if (path === "/relay" && req.method === "POST") {
      const kp = await bank();
      let tx: Transaction;
      try { tx = Transaction.from(Buffer.from(String(body.tx || ""), "base64")); } catch { return fail("That payment couldn't be read. Try again."); }
      let t: Checked;
      try { t = checkTx(tx, kp.publicKey); } catch (e: any) { console.error("[monyx-pay] relay rejected:", e.message); return fail("That payment couldn't be sent. Nothing was sent.", 400, "rejected"); }
      if (!tx.verifySignatures(false)) return fail("That payment couldn't be sent. Nothing was sent.", 400, "rejected");
      // Only Monyx accounts and open claim links get free fees.
      const [{ data: owner }, { data: claim }] = await Promise.all([
        db.from("monyx_users").select("id, address").eq("address", t.owner).maybeSingle(),
        db.from("monyx_claims").select("*").eq("escrow", t.owner).eq("status", "open").maybeSingle(),
      ]);
      if (!owner && !claim) return fail("That account isn't on Monyx.", 403, "forbidden");
      // A Monyx account's payment also needs that account's own session, not just its signature.
      // Claim links have no account (the link's key is the only key), so they rely on the signature.
      if (owner && !claim) {
        const su = await sessionUser(req);
        if (!su || su.address !== t.owner) return fail("Please sign in again. Nothing was sent.", 401, "unauthorized");
      }
      if (t.closes && !claim) return fail("That payment couldn't be sent. Nothing was sent.", 400, "rejected");
      if (limited("r" + t.owner, RELAYS_PER_HOUR) || limited("ip" + ip, RELAYS_PER_HOUR * 3)) return fail("That's a lot of payments. Try again in a bit.", 429, "rate_limited");
      if (await usdcOf(new PublicKey(t.owner)) < t.units) return fail("You don't have enough for that. Nothing was sent.", 409, "insufficient");
      const recipientNew = (await conn.getAccountInfo(ata(new PublicKey(t.to))).catch(() => null)) == null;
      if (recipientNew && limited("new" + t.owner, NEW_ACCOUNTS_PER_DAY, 86400_000)) return fail("You've paid a lot of new people today. Try again tomorrow.", 429, "rate_limited");
      tx.partialSign(kp);
      const t0 = Date.now();
      let sig: string;
      try { sig = await conn.sendRawTransaction(tx.serialize()); }
      catch (e) { console.error("[monyx-pay] send:", e); return fail("The payment didn't go through. Nothing was sent.", 409, "failed"); }
      // Record it (payment log, inbox, claim status) once it's confirmed.
      const finish = async () => {
        await logPayment(sig, t.owner, t.to, t.units, t.note, "relay");
        if (claim) {
          const back = t.to === (await db.from("monyx_users").select("address").eq("id", claim.from_user).single()).data?.address;
          await db.from("monyx_claims").update({ status: back ? "returned" : "claimed", claimed_by: t.to, claimed_at: new Date().toISOString(), claim_sig: sig }).eq("escrow", claim.escrow);
        }
      };
      try { await confirm(sig); }
      catch (e: any) {
        if (e.onchain) { console.error("[monyx-pay] failed on chain:", sig); return fail("The payment didn't go through. Nothing was sent.", 409, "failed"); }
        // Still landing: finish the bookkeeping in the background and tell the app it's pending.
        console.error("[monyx-pay] slow confirm:", sig);
        // @ts-ignore EdgeRuntime is provided by Supabase
        EdgeRuntime.waitUntil(confirm(sig, 120_000).then(finish).catch((x) => console.error("[monyx-pay] never confirmed:", sig, x)));
        return json({ sig, pending: true });
      }
      const ms = Date.now() - t0;
      await finish();
      return json({ sig, ms });
    }

    // ----- agent API (Grok Bot). Can read, request, and draft. Never sends. -----
    if (path.startsWith("/agent/")) {
      const a = await agentUser(req);
      if (!a) return fail("This key isn't valid. Make a new one in Monyx → Me → AI assistant.", 401, "unauthorized");
      if (limited("a" + a.key.id, 120)) return fail("Slow down a little.", 429, "rate_limited");
      const u = a.user;
      const weekAgo = new Date(Date.now() - 7 * 86400_000).toISOString();
      if (path === "/agent/me") {
        const { data: drafts } = await db.from("monyx_drafts").select("units, status").eq("user_id", u.id).gte("created_at", weekAgo).neq("status", "dismissed");
        const used = (drafts || []).reduce((s: number, d: any) => s + Number(d.units), 0);
        return json({ name: u.name, handle: u.handle, balance_usd: dollars(await usdcOf(new PublicKey(u.address))), weekly_draft_limit_usd: Number(a.key.weekly_usd), drafted_this_week_usd: dollars(used) });
      }
      if (path === "/agent/activity") {
        const n = Math.min(50, Math.max(1, Number(url.searchParams.get("limit")) || 20));
        const { data } = await db.from("monyx_payments").select("*").or(`from_addr.eq.${u.address},to_addr.eq.${u.address}`).eq("token", "USDC").order("created_at", { ascending: false }).limit(n);
        const who = await names((data || []).flatMap((p: any) => [p.from_addr, p.to_addr]));
        return json({ payments: (data || []).map((p: any) => {
          const incoming = p.to_addr === u.address; const other = who.get(incoming ? p.from_addr : p.to_addr);
          return { direction: incoming ? "in" : "out", usd: dollars(p.units), with: other ? (other.bank ? "Monyx" : `@${other.handle}`) : "someone outside Monyx", with_name: other?.name || null, note: p.note, at: p.created_at };
        }) });
      }
      if (path === "/agent/people") {
        const q = (url.searchParams.get("q") || "").replace(/^@/, "").toLowerCase().replace(/[%_,()]/g, "").slice(0, 30);
        if (!q) return json({ people: [] });
        const { data } = await db.from("monyx_users").select(PUBLIC).or(`handle.ilike.${q}%,name.ilike.%${q}%`).neq("id", u.id).limit(8);
        return json({ people: (data || []).map((p: any) => ({ handle: `@${p.handle}`, name: p.name })) });
      }
      const target = async () => {
        const h = String(body.to || "").toLowerCase().replace(/^@/, "");
        const { data } = await db.from("monyx_users").select("*").eq("handle", h).maybeSingle();
        return data;
      };
      const amount = Math.round(Number(body.usd) * 100) / 100;
      const note = String(body.note || "").slice(0, 80);
      if (path === "/agent/requests" && req.method === "GET") {
        const { data } = await db.from("monyx_requests").select("*").or(`from_user.eq.${u.id},to_user.eq.${u.id}`).eq("status", "open").limit(30);
        const ids = [...new Set((data || []).flatMap((r: any) => [r.from_user, r.to_user]))];
        const { data: ppl } = ids.length ? await db.from("monyx_users").select(PUBLIC).in("id", ids) : { data: [] };
        const by = new Map((ppl || []).map((p: any) => [p.id, `@${p.handle}`]));
        return json({ requests: (data || []).map((r: any) => ({ id: r.id, direction: r.to_user === u.id ? "they_asked_you" : "you_asked_them", with: by.get(r.to_user === u.id ? r.from_user : r.to_user), usd: Number(r.usd), note: r.note, at: r.created_at })) });
      }
      if (path === "/agent/requests" && req.method === "POST") {
        const to = await target();
        if (!to) return fail("No one has that username. Use /agent/people to look them up.", 404, "not_found");
        if (to.id === u.id) return fail("You can't request money from yourself.");
        if (!(amount > 0 && amount <= 10000)) return fail("usd must be between 0.01 and 10000.");
        if (limited("ar" + u.id, 20, 86400_000)) return fail("That's a lot of requests today.", 429, "rate_limited");
        const { data, error } = await db.from("monyx_requests").insert({ from_user: u.id, to_user: to.id, usd: amount, note: note || null }).select().single();
        if (error) return oops("agent request", error);
        return json({ ok: true, id: data.id, message: `Asked @${to.handle} for $${amount.toFixed(2)}.` });
      }
      if (path === "/agent/drafts" && req.method === "POST") {
        const to = await target();
        if (!to) return fail("No one has that username. Use /agent/people to look them up.", 404, "not_found");
        if (to.id === u.id) return fail("You can't pay yourself.");
        if (!(amount > 0 && amount <= 10000)) return fail("usd must be between 0.01 and 10000.");
        const { data: week } = await db.from("monyx_drafts").select("units").eq("user_id", u.id).gte("created_at", weekAgo).neq("status", "dismissed");
        const used = (week || []).reduce((s: number, d: any) => s + Number(d.units), 0);
        if (used + amount * U > Number(a.key.weekly_usd) * U) return fail(`That would go over this assistant's weekly limit of $${Number(a.key.weekly_usd).toFixed(2)}.`, 409, "over_limit");
        const { data, error } = await db.from("monyx_drafts").insert({ user_id: u.id, to_user: to.id, units: Math.round(amount * U), note: note || null, reason: String(body.reason || "").slice(0, 140) || null, agent_key: a.key.id }).select().single();
        if (error) return oops("draft", error);
        return json({ ok: true, id: data.id, message: `Drafted $${amount.toFixed(2)} to @${to.handle}. ${u.name.split(" ")[0]} will see it in Monyx and can approve it with a tap. Nothing has been sent.` });
      }
      if (path === "/agent/drafts" && req.method === "GET") {
        const { data } = await db.from("monyx_drafts").select("id, units, note, status, created_at, to_user").eq("user_id", u.id).order("created_at", { ascending: false }).limit(20);
        const ids = [...new Set((data || []).map((d: any) => d.to_user))];
        const { data: ppl } = ids.length ? await db.from("monyx_users").select("id, handle").in("id", ids) : { data: [] };
        const by = new Map((ppl || []).map((p: any) => [p.id, `@${p.handle}`]));
        return json({ drafts: (data || []).map((d: any) => ({ id: d.id, to: by.get(d.to_user), usd: dollars(d.units), note: d.note, status: d.status, at: d.created_at })) });
      }
      return fail("Unknown route.", 404, "not_found");
    }

    // ----- signed-in app routes -----
    const user = await sessionUser(req);
    if (!user) return fail("Please sign in again.", 401, "unauthorized");

    if (path === "/events/ticket" && req.method === "POST") {
      // One-time, 30-second ticket for your own event stream. The app asks for a new one for each connection.
      const n = [...crypto.getRandomValues(new Uint8Array(12))].map((b) => b.toString(16).padStart(2, "0")).join("");
      const b64 = btoa(JSON.stringify({ u: user.id, a: user.address, n, exp: Date.now() + 30_000 }));
      return json({ ticket: `${b64}.${await hmacB64(b64)}` });
    }
    // Payment history from Monyx's own log (fed by the relay and the on-chain watcher), newest first.
    if (path === "/activity" && req.method === "GET") {
      const limit = Math.min(100, Math.max(1, Number(url.searchParams.get("limit")) || 40));
      let q = db.from("monyx_payments").select("sig, from_addr, to_addr, units, note, source, token, created_at").or(`to_addr.eq.${user.address},from_addr.eq.${user.address}`).order("created_at", { ascending: false }).limit(limit);
      const before = url.searchParams.get("before"); if (before) q = q.lt("created_at", before);
      const { data, error } = await q;
      if (error) return oops("activity", error);
      const ppl = await names((data || []).flatMap((p: any) => [p.from_addr, p.to_addr]));
      return json({
        payments: (data || []).map((p: any) => ({ sig: p.sig, from: p.from_addr, to: p.to_addr, units: Number(p.units), token: p.token, note: p.note, via: p.source, at: Date.parse(p.created_at) })),
        people: Object.fromEntries([...ppl.entries()]),
      });
    }
    // Has this user paid that address before, from any device? Feeds the send-time risk check.
    if (path === "/paidto") {
      const a = url.searchParams.get("a") || "";
      if (!/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(a)) return fail("Bad account number.");
      const { count } = await db.from("monyx_payments").select("sig", { count: "exact", head: true }).eq("from_addr", user.address).eq("to_addr", a);
      return json({ count: count ?? 0 });
    }
    if (path === "/topup" && req.method === "POST") {
      // Free test dollars: a welcome amount the first time, then a smaller one each day.
      const first = !user.last_topup_at;
      if (!first && Date.now() - new Date(user.last_topup_at).getTime() < TOPUP_HOURS * 3600_000) {
        const next = new Date(new Date(user.last_topup_at).getTime() + TOPUP_HOURS * 3600_000);
        return json({ status: "wait", next: next.toISOString() });
      }
      if (limited("t" + ip, 6, 86400_000)) return json({ status: "limit" });
      const units = first ? WELCOME : DAILY;
      const kp = await bank();
      if ((await usdcOf(kp.publicKey)) - units < BANK_FLOOR_USDC) return json({ status: "bank_empty" });
      const { data: claimed } = await db.from("monyx_users").update({ last_topup_at: new Date().toISOString() }).eq("id", user.id)
        .or(`last_topup_at.is.null,last_topup_at.lt.${new Date(Date.now() - TOPUP_HOURS * 3600_000).toISOString()}`).select();
      if (!claimed?.length) return json({ status: "wait" });
      try {
        const sig = await bankPays(user.address, units, first ? "Welcome to Monyx" : "Test money");
        return json({ status: "sent", usd: dollars(units), sig });
      } catch (e) {
        await db.from("monyx_users").update({ last_topup_at: user.last_topup_at }).eq("id", user.id);
        console.error("[monyx-pay] topup:", e);
        return json({ status: "failed" });
      }
    }
    if (path === "/inbox") {
      const since = new Date(Number(url.searchParams.get("since")) || Date.now() - 15 * 60_000).toISOString();
      const { data } = await db.from("monyx_payments").select("sig, from_addr, units, note, source, created_at").eq("to_addr", user.address).eq("token", "USDC").gt("created_at", since).order("created_at", { ascending: true }).limit(20);
      return json({ payments: (data || []).map((p: any) => ({ sig: p.sig, from: p.from_addr, usd: dollars(p.units), note: p.note, via: p.source, at: Date.parse(p.created_at) })), now: Date.now() });
    }

    // claim links
    if (path === "/claims" && req.method === "POST") {
      const escrow = String(body.escrow || ""); const sig = String(body.sig || "");
      if (!B58.test(escrow)) return fail("That link couldn't be made. Try again.");
      const { data: p } = await db.from("monyx_payments").select("*").eq("sig", sig).eq("token", "USDC").eq("to_addr", escrow).maybeSingle();
      if (!p || p.from_addr !== user.address || p.to_addr !== escrow) return fail("We couldn't find that payment yet. Try again in a moment.", 409, "not_found");
      const { error } = await db.from("monyx_claims").insert({ escrow, from_user: user.id, units: p.units, note: String(body.note || p.note || "").slice(0, 80) || null, fund_sig: sig, label: String(body.label || "").slice(0, 40) || null });
      if (error) return fail("That link already exists.", 409, "exists");
      return json({ ok: true });
    }
    if (path === "/claims" && req.method === "GET") {
      const { data } = await db.from("monyx_claims").select("escrow, units, note, label, status, created_at, claimed_by").eq("from_user", user.id).order("created_at", { ascending: false }).limit(20);
      const who = await names((data || []).map((c: any) => c.claimed_by));
      return json({ claims: (data || []).map((c: any) => ({ escrow: c.escrow, usd: dollars(c.units), note: c.note, label: c.label, status: c.status, at: c.created_at, by: c.claimed_by ? who.get(c.claimed_by) || null : null })) });
    }

    // Grok Bot / assistant keys
    if (path === "/agent-keys" && req.method === "GET") {
      const { data } = await db.from("monyx_agent_keys").select("id, label, weekly_usd, created_at, last_used_at").eq("user_id", user.id).eq("revoked", false).order("created_at");
      return json({ keys: data || [] });
    }
    if (path === "/agent-keys" && req.method === "POST") {
      const weekly = Math.min(1000, Math.max(1, Math.round(Number(body.weekly_usd) || 50)));
      const { count } = await db.from("monyx_agent_keys").select("*", { count: "exact", head: true }).eq("user_id", user.id).eq("revoked", false);
      if ((count ?? 0) >= 5) return fail("You already have 5 assistants. Remove one first.");
      const key = "mx_" + [...crypto.getRandomValues(new Uint8Array(24))].map((b) => b.toString(16).padStart(2, "0")).join("");
      const { data, error } = await db.from("monyx_agent_keys").insert({ user_id: user.id, key_hash: await sha256(key), label: String(body.label || "Grok Bot").slice(0, 30), weekly_usd: weekly }).select("id, label, weekly_usd, created_at").single();
      if (error) return oops("agent key", error);
      return json({ key, ...data });
    }
    const km = path.match(/^\/agent-keys\/([0-9a-f-]{36})\/revoke$/);
    if (km && req.method === "POST") {
      await db.from("monyx_agent_keys").update({ revoked: true }).eq("id", km[1]).eq("user_id", user.id);
      return json({ ok: true });
    }
    if (path === "/drafts" && req.method === "GET") {
      const { data } = await db.from("monyx_drafts").select("id, to_user, units, note, reason, created_at, agent_key").eq("user_id", user.id).eq("status", "pending").order("created_at").limit(10);
      const ids = [...new Set((data || []).map((d: any) => d.to_user))];
      const { data: ppl } = ids.length ? await db.from("monyx_users").select(PUBLIC + ", id").in("id", ids) : { data: [] };
      const { data: keys } = await db.from("monyx_agent_keys").select("id, label").eq("user_id", user.id);
      const by = new Map((ppl || []).map((p: any) => [p.id, pub(p)])); const kl = new Map((keys || []).map((k: any) => [k.id, k.label]));
      return json({ drafts: (data || []).map((d: any) => ({ id: d.id, to: by.get(d.to_user), usd: dollars(d.units), note: d.note, reason: d.reason, from: kl.get(d.agent_key) || "Your assistant", at: d.created_at })) });
    }
    const dm = path.match(/^\/drafts\/([0-9a-f-]{36})$/);
    if (dm && req.method === "POST") {
      const status = body.action === "paid" ? "paid" : "dismissed";
      await db.from("monyx_drafts").update({ status, paid_sig: body.sig ? String(body.sig) : null, updated_at: new Date().toISOString() }).eq("id", dm[1]).eq("user_id", user.id).eq("status", "pending");
      return json({ ok: true });
    }

    // exchange
    if (path === "/portfolio") {
      const { data } = await db.from("monyx_holdings").select("asset, qty").eq("user_id", user.id).gt("qty", 0);
      const all = await markets();
      const holdings = (data || []).filter((h: any) => ASSETS[h.asset]).map((h: any) => {
        const m = all.find((a: any) => a.id === h.asset) || { price: 0 };
        return { ...m, id: h.asset, qty: Number(h.qty), value: Number(h.qty) * m.price };
      }).sort((a: any, b: any) => b.value - a.value);
      const { data: trades } = await db.from("monyx_trades").select("kind, asset_from, asset_to, qty_from, qty_to, usd, sig, created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20);
      return json({ holdings, total: holdings.reduce((a: number, h: any) => a + h.value, 0), trades: trades || [] });
    }
    if (path === "/trade/buy" && req.method === "POST") {
      const asset = String(body.asset || ""); const sig = String(body.sig || "");
      if (!ASSETS[asset]) return fail("Pick something to buy.");
      const kp = await bank();
      const { data: p } = await db.from("monyx_payments").select("*").eq("sig", sig).eq("token", "USDC").eq("to_addr", kp.publicKey.toBase58()).maybeSingle();
      if (!p || p.from_addr !== user.address || p.to_addr !== kp.publicKey.toBase58()) return fail("We couldn't find your payment yet. Try again in a moment.", 409, "not_found");
      if (Date.now() - Date.parse(p.created_at) > 3600_000) return fail("That payment is too old to use.", 409, "stale");
      const usd = dollars(Number(p.units));
      const qty = roundQty(usd / (await price(asset)));
      const { error } = await db.from("monyx_trades").insert({ user_id: user.id, kind: "buy", asset_from: "cash", asset_to: asset, qty_from: usd, qty_to: qty, usd, sig });
      if (error) return fail("This payment was already used.", 409, "used");
      await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: qty });
      return json({ asset, symbol: ASSETS[asset].sym, qty, usd });
    }
    if (path === "/trade/sell" && req.method === "POST") {
      const asset = String(body.asset || "");
      if (!ASSETS[asset]) return fail("Pick something to sell.");
      const p = await price(asset);
      const { data: h } = await db.from("monyx_holdings").select("qty").eq("user_id", user.id).eq("asset", asset).maybeSingle();
      const have = Number(h?.qty || 0);
      const qty = body.all ? have : roundQty(Number(body.usd) / p);
      // Round to the nearest cent so the payout matches what the sheet showed.
      const usd = Math.round(qty * p * 100) / 100;
      if (!(qty > 0) || qty > have + 1e-12) return fail(`You have $${(have * p).toFixed(2)} of ${ASSETS[asset].sym} to sell.`);
      if (usd < 0.01) return fail("That's less than a cent. Swap it into another coin instead.");
      if (!body.all && usd < 1) return fail("The smallest sale is $1. Use Sell all to cash out a smaller amount.");
      const kp = await bank();
      // A user's sale outranks welcome dollars, so sales may use the floor; only an actually empty bank pauses them.
      if ((await usdcOf(kp.publicKey)) < usd * U) return fail("Selling is paused while the Monyx test bank refills. Swaps still work.", 503, "bank_low");
      const { error: e1 } = await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: -qty });
      if (e1) return fail("You don't have that much to sell.", 409, "insufficient");
      try {
        // Answer as soon as the payout is on the wire (about a second); confirm in the background.
        // If it never lands, the coins go back and the trade is marked failed.
        const sig = await bankSends(user.address, Math.round(usd * U), `Sold ${ASSETS[asset].sym}`);
        await db.from("monyx_trades").insert({ user_id: user.id, kind: "sell", asset_from: asset, asset_to: "cash", qty_from: qty, qty_to: usd, usd, sig });
        const kp2 = await bank();
        // @ts-ignore EdgeRuntime is provided by Supabase
        EdgeRuntime.waitUntil(confirm(sig, 120_000)
          .then(() => logPayment(sig, kp2.publicKey.toBase58(), user.address, Math.round(usd * U), `Sold ${ASSETS[asset].sym}`, "bank"))
          .catch(async (x: unknown) => {
            console.error("[monyx-pay] sell never confirmed, refunding coins:", sig, x);
            await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: qty });
            await db.from("monyx_trades").delete().eq("sig", sig);
          }));
        return json({ asset, symbol: ASSETS[asset].sym, qty, usd, signature: sig, pending: true });
      } catch (e) {
        await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: qty });
        console.error("[monyx-pay] sell payout:", e);
        return fail("The sale didn't go through. Nothing changed, so you can try again.", 409, "upstream_failed");
      }
    }
    if (path === "/trade/swap" && req.method === "POST") {
      const from = String(body.from || ""), to = String(body.to || "");
      if (!ASSETS[from] || !ASSETS[to] || from === to) return fail("Pick two different coins.");
      const pf = await price(from), pt = await price(to);
      const { data: h } = await db.from("monyx_holdings").select("qty").eq("user_id", user.id).eq("asset", from).maybeSingle();
      const have = Number(h?.qty || 0);
      const qtyFrom = body.all ? have : Math.min(have, roundQty(Number(body.usd) / pf));
      const usd = Math.round(qtyFrom * pf * 100) / 100;
      if (!(qtyFrom > 0) || usd < 0.01) return fail("Enter an amount to swap.");
      const { error } = await db.rpc("monyx_swap", { p_user: user.id, p_from: from, p_to: to, p_qty_from: qtyFrom, p_qty_to: roundQty(usd / pt), p_usd: usd });
      if (error) return fail("You don't have that much to swap.");
      return json({ from: ASSETS[from].sym, to: ASSETS[to].sym, qtyFrom, qtyTo: roundQty(usd / pt), usd });
    }
    return fail("Unknown route.", 404, "not_found");
  } catch (e: any) {
    if (e?.prices) return fail("Prices are unavailable right now. Try again in a minute.", 503, "prices_unavailable");
    return oops(path, e);
  }
});
