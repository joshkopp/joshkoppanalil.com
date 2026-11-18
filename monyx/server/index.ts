// Monyx people: usernames, sessions, profile photos and payment requests.
// Deployed as the Supabase edge function "monyx". Everything that moves money
// (USDC payments, test dollars, pay links, the exchange) lives in "monyx-pay".
//
// This server never touches anyone's money. Users hold their own keys in the
// browser. It maps @usernames to account addresses and stores requests.
//
// Proof of ownership: to register or log in, the browser signs
//   "Sign in to Monyx\n\nAccount: <address>\nTime: <unix ms>"
// with the account key. The server checks the ed25519 signature and that the
// time is within 5 minutes, then issues a 30-day session token.
import { createClient } from "npm:@supabase/supabase-js@2";
import { Keypair } from "npm:@solana/web3.js@1.95.3";

const SIGNUPS_PER_IP_HOUR = 10;
const SESSION_DAYS = 30;
const HANDLE = /^[a-z0-9_]{3,20}$/;
const B58 = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const RESERVED = new Set(["monyx", "admin", "support", "bank", "help", "official", "team", "security", "pay", "request", "me", "home"]);

const ORIGINS = new Set(["https://monyx.pro", "https://www.monyx.pro", "https://joshkoppanalil.com", "https://www.joshkoppanalil.com"]);
// Only our own sites may call this API from a browser. Servers (Grok Bot, QuickNode) send no Origin and aren't affected.
const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "https://www.monyx.pro",
  "Vary": "Origin",
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
const PUBLIC = "id, handle, name, address, avatar, created_at";
// Profile pictures live in the public "avatars" storage bucket. Each upload gets
// a new file name so phones never show a stale cached photo.
const AVATAR_BASE = `${Deno.env.get("SUPABASE_URL")}/storage/v1/object/public/avatars/`;
const pub = (u: any) => u && ({ handle: u.handle, name: u.name, address: u.address, avatar: u.avatar ? AVATAR_BASE + u.avatar : null, since: u.created_at });
// Signed-out visitors (a pay link opened in a new browser) only see a name, @username and photo.
// The account number and join date need a session.
const pubLite = (u: any) => u && ({ handle: u.handle, name: u.name, avatar: u.avatar ? AVATAR_BASE + u.avatar : null });
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

// ---------- the bank ----------
// Only used to label the Monyx bank in activity ("Monyx paid you").
let bankAddr: string | null = null;
async function bank() {
  if (bankAddr) return bankAddr;
  const { data } = await db.from("monyx_config").select("value").eq("key", "bank_secret").single();
  bankAddr = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(data!.value))).publicKey.toBase58();
  return bankAddr;
}

// ---------- router ----------
Deno.serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  cors["Access-Control-Allow-Origin"] = ORIGINS.has(origin) ? origin : "https://www.monyx.pro";
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const url = new URL(req.url);
  const path = url.pathname.replace(/^.*?\/monyx(?=\/|$)/, "") || "/";
  const ip = (req.headers.get("x-forwarded-for") || "?").split(",")[0].trim();
  const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
  try {
    if (path === "/check") {
      const h = (url.searchParams.get("handle") || "").toLowerCase();
      if (!HANDLE.test(h)) return json({ available: false, reason: "3–20 letters, numbers or _" });
      if (RESERVED.has(h)) return json({ available: false, reason: "That one's reserved" });
      const { data } = await db.from("monyx_users").select("id").eq("handle", h).maybeSingle();
      return json({ available: !data, reason: data ? "Taken" : null });
    }
    if (path === "/search") {
      const viewer = await me(req);
      if (!viewer) return fail("Log in to search for people.", 401, "unauthorized");
      const q = (url.searchParams.get("q") || "").replace(/^@/, "").trim().toLowerCase().replace(/[%_,()]/g, "");
      if (q.length < 1) return json({ users: [] });
      const { data } = await db.from("monyx_users").select(PUBLIC).or(`handle.ilike.${q}%,name.ilike.%${q}%`).order("handle").limit(8);
      return json({ users: (data || []).map(pub) });
    }
    if (path === "/resolve") {
      if (!(await me(req))) return json({ users: {} });
      const list = (url.searchParams.get("a") || "").split(",").filter((a) => B58.test(a)).slice(0, 60);
      if (!list.length) return json({ users: {} });
      const { data } = await db.from("monyx_users").select(PUBLIC).in("address", list);
      const users: Record<string, unknown> = {};
      for (const u of data || []) users[u.address] = pub(u);
      try { const b = await bank(); if (list.includes(b)) users[b] = { handle: "monyx", name: "Monyx", address: b, bank: true }; } catch { /* ignore */ }
      return json({ users });
    }
    const um = path.match(/^\/u\/([a-z0-9_]{3,20})$/i);
    if (um) {
      const { data } = await db.from("monyx_users").select(PUBLIC).eq("handle", um[1].toLowerCase()).maybeSingle();
      if (!data) return fail("No one has that username.", 404, "not_found");
      return json({ user: (await me(req)) ? pub(data) : pubLite(data) });
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
      return json({ token: t, user: pub(u) }); // the app then asks monyx-pay for welcome dollars
    }
    if (path === "/login" && req.method === "POST") {
      if (!(await proves(body.address, Number(body.ts), String(body.sig || "")))) return fail("Couldn't verify this key.", 401, "unauthorized");
      const { data: u } = await db.from("monyx_users").select("*").eq("address", body.address).maybeSingle();
      if (!u) return fail("No account for this key yet.", 404, "no_account");
      return json({ token: await newSession(u.id), user: pub(u) });
    }

    // ---------- signed-in routes ----------
    const user = await me(req);
    if (!user) return fail("Please sign in again.", 401, "unauthorized");

    if (path === "/me") return json({ user: pub(user) });
    if (path === "/logout" && req.method === "POST") {
      await db.from("monyx_sessions").delete().eq("token", (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, ""));
      return json({ ok: true });
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
        // Check the payment really went from the payer to the requester. Every
        // app payment is relayed by monyx-pay, which logs it once confirmed.
        const sig = String(body.sig || "");
        const { data: requester } = await db.from("monyx_users").select("address").eq("id", r.from_user).single();
        let p: any = null;
        for (let i = 0; i < 4 && !p; i++) {
          ({ data: p } = await db.from("monyx_payments").select("from_addr, to_addr, units").eq("sig", sig).maybeSingle());
          if (!p) await new Promise((s) => setTimeout(s, 800));
        }
        if (!p) return fail("Couldn't find that payment yet.", 409, "not_found");
        if (p.from_addr !== user.address || p.to_addr !== requester!.address) return fail("That payment doesn't match this request.", 409, "mismatch");
        await db.from("monyx_requests").update({ status: "paid", paid_sig: sig, updated_at: new Date().toISOString() }).eq("id", r.id);
        return json({ ok: true });
      }
      return fail("You can't do that to this request.", 403, "forbidden");
    }
    return fail("Unknown route.", 404, "not_found");
  } catch (e) {
    return oops(path, e);
  }
});
