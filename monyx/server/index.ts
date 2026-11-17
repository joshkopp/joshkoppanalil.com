// Monyx: usernames, sessions, requests, the welcome bonus and the crypto exchange.
// Deployed as the Supabase edge function "monyx".
//
// Payments between people never touch this server. Users hold their own keys
// in the browser and sign their own transfers. The server maps @usernames to
// account addresses, stores payment requests, pays a one-time welcome bonus,
// and runs the test-mode exchange from the Monyx bank wallet (devnet SOL).
//
// Proof of ownership: to register or log in, the browser signs
//   "Sign in to Monyx\n\nAccount: <address>\nTime: <unix ms>"
// with the account key. The server checks the ed25519 signature and that the
// time is within 5 minutes, then issues a 30-day session token.
import { createClient } from "npm:@supabase/supabase-js@2";
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction, sendAndConfirmTransaction } from "npm:@solana/web3.js@1.95.3";

const RPC = "https://api.devnet.solana.com";
const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
const BONUS = 50_000_000;            // 0.05 test SOL
const BANK_FLOOR = 20_000_000;       // keep for fees
const BONUS_PER_IP_DAY = 3;
const SIGNUPS_PER_IP_HOUR = 10;
const SESSION_DAYS = 30;
const HANDLE = /^[a-z0-9_]{3,20}$/;
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const RESERVED = new Set(["monyx", "admin", "support", "bank", "help", "official", "team", "security", "pay", "request", "me", "home"]);

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
const fail = (message: string, s = 400, error = "bad_request") => json({ error, message }, s);
// Anything unexpected is logged here and shown to users as one plain sentence.
// Internal details (database errors, RPC errors, stack traces) never leave the server.
const OOPS = "Something went wrong on our end. Please try again.";
const oops = (where: string, e: unknown, status = 500) => {
  console.error(`[monyx] ${where}:`, e);
  return fail(OOPS, status, "server_error");
};

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const conn = new Connection(RPC, "confirmed");
const PUBLIC = "id, handle, name, address, avatar, created_at";
// Profile pictures live in the public "avatars" storage bucket. Each upload gets
// a new file name so phones never show a stale cached photo.
const AVATAR_BASE = `${Deno.env.get("SUPABASE_URL")}/storage/v1/object/public/avatars/`;
const pub = (u: any) => u && ({ handle: u.handle, name: u.name, address: u.address, avatar: u.avatar ? AVATAR_BASE + u.avatar : null, since: u.created_at });
const AVATAR_MAX = 300_000;          // bytes; the app sends ~25 KB 320×320 JPEGs
const AVATARS_PER_HOUR = 15;
const avatarHits = new Map<string, { t: number; n: number }>();

// ---------- crypto helpers ----------
const ALPH = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
function b58decode(s: string) {
  let n = 0n;
  for (const c of s) { const i = ALPH.indexOf(c); if (i < 0) throw new Error("bad base58"); n = n * 58n + BigInt(i); }
  const out: number[] = [];
  while (n > 0n) { out.unshift(Number(n % 256n)); n /= 256n; }
  for (const c of s) { if (c === "1") out.unshift(0); else break; }
  return new Uint8Array(out);
}
const b64decode = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
const signText = (address: string, ts: number) => `Sign in to Monyx\n\nAccount: ${address}\nTime: ${ts}`;
async function proves(address: string, ts: number, sig: string) {
  if (!B58.test(address) || !Number.isFinite(ts) || Math.abs(Date.now() - ts) > 5 * 60_000) return false;
  try {
    const key = await crypto.subtle.importKey("raw", b58decode(address), { name: "Ed25519" }, false, ["verify"]);
    return await crypto.subtle.verify({ name: "Ed25519" }, key, b64decode(sig), new TextEncoder().encode(signText(address, ts)));
  } catch { return false; }
}
const token = () => [...crypto.getRandomValues(new Uint8Array(24))].map((b) => b.toString(16).padStart(2, "0")).join("");

async function newSession(userId: string) {
  const t = token();
  await db.from("monyx_sessions").insert({ token: t, user_id: userId, expires_at: new Date(Date.now() + SESSION_DAYS * 86400_000).toISOString() });
  return t;
}
async function me(req: Request) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!t) return null;
  const { data: s } = await db.from("monyx_sessions").select("user_id, expires_at").eq("token", t).maybeSingle();
  if (!s || new Date(s.expires_at) < new Date()) return null;
  const { data: u } = await db.from("monyx_users").select("*").eq("id", s.user_id).single();
  return u;
}

// ---------- the bank (welcome bonus) ----------
let bankKp: Keypair | null = null;
async function bank() {
  if (bankKp) return bankKp;
  let { data } = await db.from("monyx_config").select("value").eq("key", "bank_secret").maybeSingle();
  if (!data) {
    const kp = Keypair.generate();
    await db.from("monyx_config").upsert({ key: "bank_secret", value: JSON.stringify([...kp.secretKey]) }, { onConflict: "key", ignoreDuplicates: true });
    ({ data } = await db.from("monyx_config").select("value").eq("key", "bank_secret").single());
  }
  bankKp = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(data!.value)));
  return bankKp;
}
async function giveBonus(user: any, ip: string) {
  if (user.bonus_sig) return { status: "already", signature: user.bonus_sig };
  const day = new Date(Date.now() - 86400_000).toISOString();
  const { count } = await db.from("monyx_users").select("*", { count: "exact", head: true }).eq("bonus_ip", ip).not("bonus_sig", "is", null).gte("created_at", day);
  if ((count ?? 0) >= BONUS_PER_IP_DAY) return { status: "limit" };
  const kp = await bank();
  const bal = await conn.getBalance(kp.publicKey).catch(() => 0);
  if (bal - BONUS < BANK_FLOOR) return { status: "bank_empty" };
  // Claim first so two tabs can't both collect.
  const { data: claimed } = await db.from("monyx_users").update({ bonus_sig: "pending", bonus_ip: ip }).eq("id", user.id).is("bonus_sig", null).select();
  if (!claimed?.length) return { status: "already" };
  try {
    const tx = new Transaction()
      .add(SystemProgram.transfer({ fromPubkey: kp.publicKey, toPubkey: new PublicKey(user.address), lamports: BONUS }))
      .add(new TransactionInstruction({ programId: MEMO, keys: [], data: new TextEncoder().encode("Welcome to Monyx") }));
    const signature = await sendAndConfirmTransaction(conn, tx, [kp], { commitment: "confirmed" });
    await db.from("monyx_users").update({ bonus_sig: signature }).eq("id", user.id);
    return { status: "sent", signature, lamports: BONUS };
  } catch (e) {
    await db.from("monyx_users").update({ bonus_sig: null }).eq("id", user.id);
    console.error("[monyx] bonus:", e);
    return { status: "failed" };
  }
}

// ---------- exchange ----------
// Test-mode exchange. Cash is devnet SOL in the user's own wallet. Buying
// sends SOL to the bank and credits the asset in Monyx's ledger at the live
// price; selling debits the ledger and the bank pays SOL back. Swaps are
// ledger-only. Prices come from CoinGecko, refreshed every minute.
const ASSETS: Record<string, { sym: string; name: string; color: string }> = {
  bitcoin: { sym: "BTC", name: "Bitcoin", color: "#f7931a" },
  ethereum: { sym: "ETH", name: "Ethereum", color: "#627eea" },
  "usd-coin": { sym: "USDC", name: "USD Coin", color: "#2775ca" },
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
  const ids = ["solana", ...Object.keys(ASSETS)].join(",");
  const r = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}&sparkline=true&price_change_percentage=24h`).catch(() => null);
  if (!r || !r.ok) { if (mk) return mk.data; throw new Error("Prices are unavailable right now. Try again in a minute."); }
  const j = await r.json();
  mk = { t: Date.now(), data: j.map((c: any) => ({
    id: c.id, symbol: ASSETS[c.id]?.sym ?? String(c.symbol).toUpperCase(), name: ASSETS[c.id]?.name ?? c.name,
    color: ASSETS[c.id]?.color ?? "#14f195", price: c.current_price, change24h: c.price_change_percentage_24h,
    marketCap: c.market_cap, spark: (c.sparkline_in_7d?.price || []).filter((_: unknown, i: number) => i % 4 === 0),
  })) };
  return mk.data;
}
async function price(id: string) {
  const m = (await markets()).find((x: any) => x.id === id);
  if (!m) throw new Error("Unknown asset");
  return m.price as number;
}
const roundQty = (q: number) => Math.floor(q * 1e10) / 1e10;

// ---------- router ----------
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = new URL(req.url);
  const path = url.pathname.replace(/^.*?\/monyx(?=\/|$)/, "") || "/";
  const ip = (req.headers.get("x-forwarded-for") || "?").split(",")[0].trim();
  const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
  try {
    if (path === "/bank") {
      const kp = await bank();
      return json({ address: kp.publicKey.toBase58(), bonusSol: BONUS / 1e9 });
    }
    if (path === "/markets") {
      const all = await markets();
      return json({ solPrice: all.find((a: any) => a.id === "solana")?.price, assets: all.filter((a: any) => a.id !== "solana") });
    }
    if (path === "/check") {
      const h = (url.searchParams.get("handle") || "").toLowerCase();
      if (!HANDLE.test(h)) return json({ available: false, reason: "3–20 letters, numbers or _" });
      if (RESERVED.has(h)) return json({ available: false, reason: "That one's reserved" });
      const { data } = await db.from("monyx_users").select("id").eq("handle", h).maybeSingle();
      return json({ available: !data, reason: data ? "Taken" : null });
    }
    if (path === "/search") {
      const q = (url.searchParams.get("q") || "").replace(/^@/, "").trim().toLowerCase().replace(/[%_,()]/g, "");
      if (q.length < 1) return json({ users: [] });
      const { data } = await db.from("monyx_users").select(PUBLIC).or(`handle.ilike.${q}%,name.ilike.%${q}%`).order("handle").limit(8);
      return json({ users: (data || []).map(pub) });
    }
    if (path === "/resolve") {
      const list = (url.searchParams.get("a") || "").split(",").filter((a) => B58.test(a)).slice(0, 60);
      if (!list.length) return json({ users: {} });
      const { data } = await db.from("monyx_users").select(PUBLIC).in("address", list);
      const users: Record<string, unknown> = {};
      for (const u of data || []) users[u.address] = pub(u);
      try { const b = (await bank()).publicKey.toBase58(); if (list.includes(b)) users[b] = { handle: "monyx", name: "Monyx", address: b, bank: true }; } catch { /* ignore */ }
      return json({ users });
    }
    const um = path.match(/^\/u\/([a-z0-9_]{3,20})$/i);
    if (um) {
      const { data } = await db.from("monyx_users").select(PUBLIC).eq("handle", um[1].toLowerCase()).maybeSingle();
      return data ? json({ user: pub(data) }) : fail("No one has that username.", 404, "not_found");
    }

    if (path === "/register" && req.method === "POST") {
      const handle = String(body.handle || "").toLowerCase().replace(/^@/, "");
      const name = String(body.name || "").trim().slice(0, 40);
      if (!name) return fail("Tell us your name.");
      if (!HANDLE.test(handle) || RESERVED.has(handle)) return fail("Pick a username with 3–20 letters, numbers or _.");
      if (!(await proves(body.address, Number(body.ts), String(body.sig || "")))) return fail("Couldn't verify this device's key. Try again.", 401, "unauthorized");
      const hour = new Date(Date.now() - 3600_000).toISOString();
      const { count } = await db.from("monyx_users").select("*", { count: "exact", head: true }).eq("ip", ip).gte("created_at", hour);
      if ((count ?? 0) >= SIGNUPS_PER_IP_HOUR) return fail("Too many new accounts from here. Try again in an hour.", 429, "rate_limited");
      const { data: u, error } = await db.from("monyx_users").insert({ handle, name, address: body.address, ip }).select().single();
      if (error) {
        if (/address/.test(error.message)) return fail("This key already has an account. Log in instead.", 409, "exists");
        return fail("That username was just taken. Try another.", 409, "taken");
      }
      const t = await newSession(u.id);
      const bonus = body.bonus === false ? { status: "skipped" } : await giveBonus(u, ip);
      return json({ token: t, user: pub(u), bonus });
    }
    if (path === "/login" && req.method === "POST") {
      if (!(await proves(body.address, Number(body.ts), String(body.sig || "")))) return fail("Couldn't verify this key.", 401, "unauthorized");
      const { data: u } = await db.from("monyx_users").select("*").eq("address", body.address).maybeSingle();
      if (!u) return fail("No account for this key yet.", 404, "no_account");
      return json({ token: await newSession(u.id), user: pub(u), bonusClaimed: !!u.bonus_sig });
    }

    // ---------- signed-in routes ----------
    const user = await me(req);
    if (!user) return fail("Please sign in again.", 401, "unauthorized");

    if (path === "/me") return json({ user: pub(user), bonusClaimed: !!user.bonus_sig && user.bonus_sig !== "pending" });
    if (path === "/logout" && req.method === "POST") {
      await db.from("monyx_sessions").delete().eq("token", (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, ""));
      return json({ ok: true });
    }
    if (path === "/bonus" && req.method === "POST") return json(await giveBonus(user, ip));

    if (path === "/portfolio") {
      const { data } = await db.from("monyx_holdings").select("asset, qty").eq("user_id", user.id).gt("qty", 0);
      const all = await markets();
      const holdings = (data || []).map((h: any) => {
        const m = all.find((a: any) => a.id === h.asset) || { price: 0 };
        return { ...m, id: h.asset, qty: Number(h.qty), value: Number(h.qty) * m.price };
      }).sort((a: any, b: any) => b.value - a.value);
      const { data: trades } = await db.from("monyx_trades").select("kind, asset_from, asset_to, qty_from, qty_to, usd, sig, created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(20);
      return json({ holdings, total: holdings.reduce((a: number, h: any) => a + h.value, 0), trades: trades || [] });
    }
    if (path === "/trade/buy" && req.method === "POST") {
      const asset = String(body.asset || ""); const sig = String(body.sig || "");
      if (!ASSETS[asset]) return fail("Pick something to buy.");
      const kp = await bank(); const bankAddr = kp.publicKey.toBase58();
      let tx: any = null;
      for (let i = 0; i < 5 && !tx; i++) {
        tx = await conn.getParsedTransaction(sig, { commitment: "confirmed", maxSupportedTransactionVersion: 0 }).catch(() => null);
        if (!tx) await new Promise((s) => setTimeout(s, 1000));
      }
      if (!tx || tx.meta?.err) return fail("Couldn't find your payment yet. Try again in a moment.", 409, "not_found");
      if (tx.blockTime && Date.now() / 1000 - tx.blockTime > 600) return fail("That payment is too old to use.", 409, "stale");
      const keys = tx.transaction.message.accountKeys.map((k: any) => k.pubkey.toBase58());
      const bi = keys.indexOf(bankAddr);
      const received = bi >= 0 ? tx.meta.postBalances[bi] - tx.meta.preBalances[bi] : 0;
      if (keys[0] !== user.address || received <= 0) return fail("That payment wasn't to Monyx.", 409, "mismatch");
      const usd = Math.round((received / 1e9) * (await price("solana")) * 100) / 100;
      const qty = roundQty(usd / (await price(asset)));
      const { error } = await db.from("monyx_trades").insert({ user_id: user.id, kind: "buy", asset_from: "cash", asset_to: asset, qty_from: received / 1e9, qty_to: qty, usd, sig });
      if (error) return fail("This payment was already used.", 409, "used");
      await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: qty });
      return json({ asset, symbol: ASSETS[asset].sym, qty, usd });
    }
    if (path === "/trade/sell" && req.method === "POST") {
      const asset = String(body.asset || "");
      if (!ASSETS[asset]) return fail("Pick something to sell.");
      const p = await price(asset); const sp = await price("solana");
      const { data: h } = await db.from("monyx_holdings").select("qty").eq("user_id", user.id).eq("asset", asset).maybeSingle();
      const have = Number(h?.qty || 0);
      const qty = body.all ? have : roundQty(Number(body.usd) / p);
      const usd = Math.round(qty * p * 100) / 100;
      if (!(qty > 0) || qty > have + 1e-12) return fail(`You have $${(have * p).toFixed(2)} of ${ASSETS[asset].sym} to sell.`);
      if (usd < 0.5) return fail("The smallest sale is $0.50.");
      const lamports = Math.round((usd / sp) * 1e9);
      const kp = await bank();
      if ((await conn.getBalance(kp.publicKey)) - lamports < BANK_FLOOR) return fail("Selling is paused while Monyx tops up. Swaps still work.", 503, "bank_low");
      const { error: e1 } = await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: -qty });
      if (e1) return fail("You don't have that much to sell.", 409, "insufficient");
      try {
        const t = new Transaction()
          .add(SystemProgram.transfer({ fromPubkey: kp.publicKey, toPubkey: new PublicKey(user.address), lamports }))
          .add(new TransactionInstruction({ programId: MEMO, keys: [], data: new TextEncoder().encode(`Sold ${ASSETS[asset].sym}`) }));
        const sig = await sendAndConfirmTransaction(conn, t, [kp], { commitment: "confirmed" });
        await db.from("monyx_trades").insert({ user_id: user.id, kind: "sell", asset_from: asset, asset_to: "cash", qty_from: qty, qty_to: lamports / 1e9, usd, sig });
        return json({ asset, symbol: ASSETS[asset].sym, qty, usd, signature: sig });
      } catch (e) {
        await db.rpc("monyx_adjust", { p_user: user.id, p_asset: asset, p_delta: qty });
        console.error("[monyx] sell payout:", e);
        return fail("The sale didn't go through. Nothing changed, so you can try again.", 502, "upstream_failed");
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
      const qtyTo = roundQty(usd / pt);
      const { error } = await db.rpc("monyx_swap", { p_user: user.id, p_from: from, p_to: to, p_qty_from: qtyFrom, p_qty_to: qtyTo, p_usd: usd });
      if (error) return fail("You don't have that much to swap.");
      return json({ from: ASSETS[from].sym, to: ASSETS[to].sym, qtyFrom, qtyTo, usd });
    }
    if (path === "/avatar" && req.method === "POST") {
      const now = Date.now(); const w = avatarHits.get(user.id);
      if (!w || now - w.t > 3600_000) avatarHits.set(user.id, { t: now, n: 1 });
      else if (++w.n > AVATARS_PER_HOUR) return fail("That's a lot of new photos. Try again in an hour.", 429, "rate_limited");
      if (body.remove) {
        if (user.avatar) await db.storage.from("avatars").remove([user.avatar]);
        const { data: u } = await db.from("monyx_users").update({ avatar: null }).eq("id", user.id).select().single();
        return json({ user: pub(u) });
      }
      let bytes: Uint8Array;
      try { bytes = b64decode(String(body.image || "")); } catch { return fail("That photo couldn't be read. Try another one."); }
      // Only accept real JPEGs of a sensible size, whatever the client claims.
      if (bytes.length < 200 || bytes.length > AVATAR_MAX) return fail("That photo is too large. Try another one.");
      if (!(bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff)) return fail("That photo couldn't be read. Try another one.");
      const file = `${user.id}/${Date.now()}.jpg`;
      const { error: upErr } = await db.storage.from("avatars").upload(file, bytes, { contentType: "image/jpeg", cacheControl: "31536000", upsert: false });
      if (upErr) return oops("avatar upload", upErr);
      const { data: u, error } = await db.from("monyx_users").update({ avatar: file }).eq("id", user.id).select().single();
      if (error) { await db.storage.from("avatars").remove([file]); return oops("avatar save", error); }
      if (user.avatar && user.avatar !== file) await db.storage.from("avatars").remove([user.avatar]);
      return json({ user: pub(u) });
    }
    if (path === "/requests" && req.method === "GET") {
      const { data } = await db.from("monyx_requests").select("*").or(`from_user.eq.${user.id},to_user.eq.${user.id}`).eq("status", "open").order("created_at", { ascending: false }).limit(30);
      const ids = [...new Set((data || []).flatMap((r) => [r.from_user, r.to_user]))];
      const { data: people } = ids.length ? await db.from("monyx_users").select(PUBLIC).in("id", ids) : { data: [] };
      const byId = new Map((people || []).map((p: any) => [p.id, pub(p)]));
      const shape = (r: any) => ({ id: r.id, usd: Number(r.usd), note: r.note, created: r.created_at, from: byId.get(r.from_user), to: byId.get(r.to_user) });
      return json({
        incoming: (data || []).filter((r) => r.to_user === user.id).map(shape),
        outgoing: (data || []).filter((r) => r.from_user === user.id).map(shape),
      });
    }
    if (path === "/requests" && req.method === "POST") {
      const handle = String(body.to || "").toLowerCase().replace(/^@/, "");
      const usd = Math.round(Number(body.usd) * 100) / 100;
      if (!(usd > 0 && usd <= 10000)) return fail("Enter an amount between $0.01 and $10,000.");
      const { data: to } = await db.from("monyx_users").select("id").eq("handle", handle).maybeSingle();
      if (!to) return fail("No one has that username.", 404, "not_found");
      if (to.id === user.id) return fail("You can't request money from yourself.");
      const { count } = await db.from("monyx_requests").select("*", { count: "exact", head: true }).eq("from_user", user.id).gte("created_at", new Date(Date.now() - 3600_000).toISOString());
      if ((count ?? 0) > 30) return fail("That's a lot of requests. Try again later.", 429, "rate_limited");
      const { data, error } = await db.from("monyx_requests").insert({ from_user: user.id, to_user: to.id, usd, note: String(body.note || "").slice(0, 80) }).select().single();
      if (error) return oops("create request", error);
      return json({ id: data.id });
    }
    const rm = path.match(/^\/requests\/([0-9a-f-]{36})$/);
    if (rm && req.method === "POST") {
      const { data: r } = await db.from("monyx_requests").select("*").eq("id", rm[1]).maybeSingle();
      if (!r || r.status !== "open") return fail("That request is no longer open.", 404, "not_found");
      const action = body.action;
      if (action === "cancel" && r.from_user === user.id) { await db.from("monyx_requests").update({ status: "cancelled", updated_at: new Date().toISOString() }).eq("id", r.id); return json({ ok: true }); }
      if (action === "decline" && r.to_user === user.id) { await db.from("monyx_requests").update({ status: "declined", updated_at: new Date().toISOString() }).eq("id", r.id); return json({ ok: true }); }
      if (action === "paid" && r.to_user === user.id) {
        // Check the payment really went from the payer to the requester.
        const sig = String(body.sig || "");
        const { data: requester } = await db.from("monyx_users").select("address").eq("id", r.from_user).single();
        let tx: any = null;
        for (let i = 0; i < 5 && !tx; i++) {
          tx = await conn.getParsedTransaction(sig, { commitment: "confirmed", maxSupportedTransactionVersion: 0 }).catch(() => null);
          if (!tx) await new Promise((s) => setTimeout(s, 1000));
        }
        if (!tx || tx.meta?.err) return fail("Couldn't find that payment yet.", 409, "not_found");
        const keys = tx.transaction.message.accountKeys.map((k: any) => k.pubkey.toBase58());
        const ri = keys.indexOf(requester!.address);
        if (keys[0] !== user.address || ri < 0 || tx.meta.postBalances[ri] <= tx.meta.preBalances[ri]) return fail("That payment doesn't match this request.", 409, "mismatch");
        await db.from("monyx_requests").update({ status: "paid", paid_sig: sig, updated_at: new Date().toISOString() }).eq("id", r.id);
        return json({ ok: true });
      }
      return fail("You can't do that to this request.", 403, "forbidden");
    }
    return fail("Unknown route.", 404, "not_found");
  } catch (e) {
    if (e instanceof Error && /Prices are unavailable/.test(e.message)) return fail(e.message, 503, "prices_unavailable");
    return oops(path, e);
  }
});
