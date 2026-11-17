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
//   4. Live "you got paid": every relayed payment, plus anything QuickNode
//      Streams sees arriving from outside Monyx, lands in /inbox.
//
// It also runs the test-mode exchange (ledger coins bought with USDC) and the
// agent API that Grok Bot uses to draft payments and send requests. Drafts
// still need the person's tap in Monyx; an agent key can never move money.
import { createClient } from "npm:@supabase/supabase-js@2";
import { Buffer } from "node:buffer";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction } from "npm:@solana/web3.js@1.95.3";

const RPC = "https://api.devnet.solana.com";
const USDC = new PublicKey("4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"); // Circle's devnet USDC
const TOKEN = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ATA_PROGRAM = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
const U = 1_000_000; // USDC has 6 decimals
const MAX_PAYMENT = 10_000 * U;
const WELCOME = 10 * U, DAILY = 5 * U, TOPUP_HOURS = 20, BANK_FLOOR_USDC = 2 * U;
const RELAYS_PER_HOUR = 40, NEW_ACCOUNTS_PER_DAY = 15;
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

const cors = {
  "Access-Control-Allow-Origin": "*",
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
async function usdcOf(owner: PublicKey) {
  try { return Number((await conn.getTokenAccountBalance(ata(owner))).value.amount); } catch { return 0; }
}
async function confirm(sig: string, ms = 40_000) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const st = (await conn.getSignatureStatuses([sig])).value[0];
    if (st?.err) throw new Error("failed on chain");
    if (st && (st.confirmationStatus === "confirmed" || st.confirmationStatus === "finalized")) return;
    await new Promise((r) => setTimeout(r, 400));
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
  const kp = await bank(); const toKey = new PublicKey(to);
  const tx = new Transaction().add(createAtaIx(kp.publicKey, toKey), transferIx(kp.publicKey, toKey, units), memoIx(note));
  const { blockhash } = await conn.getLatestBlockhash("confirmed");
  tx.recentBlockhash = blockhash; tx.feePayer = kp.publicKey; tx.sign(kp);
  const sig = await conn.sendRawTransaction(tx.serialize());
  await confirm(sig);
  await logPayment(sig, kp.publicKey.toBase58(), to, units, note, "bank");
  return sig;
}
async function logPayment(sig: string, from: string | null, to: string, units: number, note: string, source: string) {
  await db.from("monyx_payments").upsert({ sig, from_addr: from, to_addr: to, units, note: note || null, source }, { onConflict: "sig", ignoreDuplicates: true });
}

// ---------- relay: check, co-sign as fee payer, send ----------
const hits = new Map<string, { t: number; n: number }>();
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

// Streams payloads: find every transaction, and for each one work out who got USDC.
function streamTxs(node: any, out: any[] = [], depth = 0): any[] {
  if (!node || typeof node !== "object" || depth > 6) return out;
  if (node.meta && node.transaction) { out.push(node); return out; }
  for (const v of Array.isArray(node) ? node : Object.values(node)) streamTxs(v, out, depth + 1);
  return out;
}
function usdcMoves(tx: any) {
  const delta = new Map<string, number>();
  for (const [list, sign] of [[tx.meta.preTokenBalances, -1], [tx.meta.postTokenBalances, 1]] as const)
    for (const b of list || []) if (b.mint === USDC.toBase58() && b.owner) delta.set(b.owner, (delta.get(b.owner) || 0) + sign * Number(b.uiTokenAmount?.amount || 0));
  const memo = (tx.meta.logMessages || []).map((l: string) => l.match(/Memo \(len \d+\): "(.*)"$/)).find(Boolean);
  const from = [...delta.entries()].sort((a, b) => a[1] - b[1])[0];
  return { sig: tx.transaction.signatures?.[0], delta, from: from && from[1] < 0 ? from[0] : null, note: memo ? memo[1].slice(0, 80) : "" };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = new URL(req.url);
  const path = url.pathname.replace(/^.*?\/monyx-pay(?=\/|$)/, "") || "/";
  const ip = (req.headers.get("x-forwarded-for") || "?").split(",")[0].trim();
  const raw = req.method === "POST" ? await req.text() : "";
  let body: any = {}; try { body = raw ? JSON.parse(raw) : {}; } catch { /* */ }
  try {
    // ----- public -----
    if (path === "/info") {
      const kp = await bank();
      return json({ bank: kp.publicKey.toBase58(), usdc: USDC.toBase58(), bankUsd: dollars(await usdcOf(kp.publicKey)) });
    }
    if (path === "/markets") return json({ assets: await markets() });
    const cm = path.match(/^\/claims\/([1-9A-HJ-NP-Za-km-z]{32,44})$/);
    if (cm && req.method === "GET") {
      const { data: c } = await db.from("monyx_claims").select("*").eq("escrow", cm[1]).maybeSingle();
      if (!c) return fail("This link isn't valid.", 404, "not_found");
      const { data: from } = await db.from("monyx_users").select(PUBLIC).eq("id", c.from_user).single();
      return json({ from: pub(from), usd: dollars(c.units), note: c.note, status: c.status });
    }
    if (path === "/streams" && req.method === "POST") {
      // QuickNode Streams webhook. Configure the destination URL with ?key=<QN_STREAMS_KEY>.
      const want = Deno.env.get("QN_STREAMS_KEY");
      if (!want || url.searchParams.get("key") !== want) return fail("Not allowed.", 401, "unauthorized");
      const txs = streamTxs(body);
      const moves = txs.map(usdcMoves).filter((m) => m.sig);
      const receivers = [...new Set(moves.flatMap((m) => [...m.delta.entries()].filter(([, d]) => d > 0).map(([o]) => o)))];
      if (!receivers.length) return json({ ok: true, seen: txs.length, saved: 0 });
      const { data: known } = await db.from("monyx_users").select("address").in("address", receivers);
      const users = new Set((known || []).map((u: any) => u.address));
      let saved = 0;
      for (const m of moves) for (const [owner, d] of m.delta) if (d > 0 && users.has(owner)) { await logPayment(m.sig, m.from, owner, d, m.note, "streams"); saved++; }
      return json({ ok: true, seen: txs.length, saved });
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
      try { await confirm(sig); }
      catch (e) { console.error("[monyx-pay] confirm:", e); return json({ sig, pending: true }); }
      const ms = Date.now() - t0;
      await logPayment(sig, t.owner, t.to, t.units, t.note, "relay");
      if (claim) {
        const back = t.to === (await db.from("monyx_users").select("address").eq("id", claim.from_user).single()).data?.address;
        await db.from("monyx_claims").update({ status: back ? "returned" : "claimed", claimed_by: t.to, claimed_at: new Date().toISOString(), claim_sig: sig }).eq("escrow", claim.escrow);
      }
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
        const { data } = await db.from("monyx_payments").select("*").or(`from_addr.eq.${u.address},to_addr.eq.${u.address}`).order("created_at", { ascending: false }).limit(n);
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

    if (path === "/topup" && req.method === "POST") {
      // Free test dollars: $10 the first time, then $5 a day.
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
      const { data } = await db.from("monyx_payments").select("sig, from_addr, units, note, source, created_at").eq("to_addr", user.address).gt("created_at", since).order("created_at", { ascending: true }).limit(20);
      return json({ payments: (data || []).map((p: any) => ({ sig: p.sig, from: p.from_addr, usd: dollars(p.units), note: p.note, via: p.source, at: Date.parse(p.created_at) })), now: Date.now() });
    }

    // claim links
    if (path === "/claims" && req.method === "POST") {
      const escrow = String(body.escrow || ""); const sig = String(body.sig || "");
      if (!B58.test(escrow)) return fail("That link couldn't be made. Try again.");
      const { data: p } = await db.from("monyx_payments").select("*").eq("sig", sig).maybeSingle();
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
      const { data: p } = await db.from("monyx_payments").select("*").eq("sig", sig).maybeSingle();
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
      const usd = Math.floor(qty * p * 100) / 100;
      if (!(qty > 0) || qty > have + 1e-12) return fail(`You have $${(have * p).toFixed(2)} of ${ASSETS[asset].sym} to sell.`);
      if (usd < 0.5) return fail("The smallest sale is $0.50.");
      const kp = await bank();
      if ((await usdcOf(kp.publicKey)) - usd * U < BANK_FLOOR_USDC) return fail("Selling is paused while Monyx tops up. Swaps still work.", 503, "bank_low");
      const { error: e1 } = await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: -qty });
      if (e1) return fail("You don't have that much to sell.", 409, "insufficient");
      try {
        const sig = await bankPays(user.address, Math.round(usd * U), `Sold ${ASSETS[asset].sym}`);
        await db.from("monyx_trades").insert({ user_id: user.id, kind: "sell", asset_from: asset, asset_to: "cash", qty_from: qty, qty_to: usd, usd, sig });
        return json({ asset, symbol: ASSETS[asset].sym, qty, usd, signature: sig });
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
