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
// Each signed sign-in message works once. A copied message can't be replayed to open a second session.
async function proves(address: string, ts: number, sig: string) {
  if (!B58.test(address) || !Number.isFinite(ts) || Math.abs(Date.now() - ts) > 2 * 60_000) return false;
  let ok = false;
  try {
    const key = await crypto.subtle.importKey("raw", b58decode(address), { name: "Ed25519" }, false, ["verify"]);
    ok = await crypto.subtle.verify({ name: "Ed25519" }, key, b64decode(sig), new TextEncoder().encode(signText(address, ts)));
  } catch { return false; }
  if (!ok) return false;
  const { error } = await db.from("monyx_used_logins").insert({ sig });
  if (error) return false; // already used
  if (Math.random() < 0.05) db.from("monyx_used_logins").delete().lt("used_at", new Date(Date.now() - 3600_000).toISOString()).then(() => {});
  return true;
}
const CODE_ALPH = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I/L
const sha256 = async (t: string) => [...new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t)))].map((b) => b.toString(16).padStart(2, "0")).join("");
// Keyed hash with a server-only secret (MONYX_PEPPER, or the service key if unset).
const PEPPER = Deno.env.get("MONYX_PEPPER") || Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
let pepperKey: CryptoKey | null = null;
async function hmac(t: string) {
  pepperKey ??= await crypto.subtle.importKey("raw", new TextEncoder().encode(PEPPER), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.sign("HMAC", pepperKey, new TextEncoder().encode(t)))));
}
// Attempt counters kept in the database, so limits hold across server instances.
async function tooMany(key: string, max: number, minutes: number) {
  const { data: t } = await db.from("monyx_pw_tries").select("n, first_at").eq("key", key).maybeSingle();
  return !!t && Date.now() - Date.parse(t.first_at) < minutes * 60_000 && t.n >= max;
}
async function countTry(key: string, minutes: number, max: number) {
  const { data: t } = await db.from("monyx_pw_tries").select("n, first_at").eq("key", key).maybeSingle();
  const fresh = !t || Date.now() - Date.parse(t.first_at) > minutes * 60_000;
  const n = fresh ? 1 : t!.n + 1;
  await db.from("monyx_pw_tries").upsert({ key, n, first_at: fresh ? new Date().toISOString() : t!.first_at });
  return Math.max(0, max - n);
}
const linkTries = new Map<string, { t: number; n: number }>();
const limitedLink = (k: string) => { const now = Date.now(), w = linkTries.get(k); if (!w || now - w.t > 600_000) { linkTries.set(k, { t: now, n: 1 }); return false; } return ++w.n > 10; };
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
    if (["/check", "/search", "/resolve"].includes(path) && req.method !== "GET") return fail("Use GET.", 405, "method_not_allowed");
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
      if (!(await me(req))) return fail("Log in to look up accounts.", 401, "unauthorized");
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

    // ---------- sign in on a new device with a code from a signed-in one ----------
    // The new device makes a one-off P-256 key pair and shows a code. The signed-in device
    // enters the code, checks the safety emojis match, and sends the account key encrypted
    // to the new device's public key (ECDH + AES-GCM). This server only relays ciphertext.
    if (path === "/link/start" && req.method === "POST") {
      const pubB64 = String(body.pub || "");
      if (!/^[A-Za-z0-9+/=]{80,100}$/.test(pubB64)) return fail("That didn't work. Refresh and try again.");
      const hour = new Date(Date.now() - 3600_000).toISOString();
      const { count } = await db.from("monyx_device_links").select("id", { count: "exact", head: true }).eq("ip", ip).gte("created_at", hour);
      if ((count ?? 0) >= 12) return fail("Too many sign-in codes from here. Try again in an hour.", 429, "rate_limited");
      const poll = token();
      for (let i = 0; i < 5; i++) {
        const raw = crypto.getRandomValues(new Uint8Array(8));
        const code = [...raw].map((b) => CODE_ALPH[b % CODE_ALPH.length]).join("");
        const { data, error } = await db.from("monyx_device_links").insert({ code, poll_hash: await sha256(poll), new_pub: pubB64, ip }).select("id, expires_at").single();
        if (!error) return json({ id: data.id, code: `${code.slice(0, 4)}-${code.slice(4)}`, poll, expires: data.expires_at });
      }
      return oops("link start", "code collision");
    }
    if (path === "/link/poll" && req.method === "POST") {
      const { data: l } = await db.from("monyx_device_links").select("*").eq("id", String(body.id || "")).maybeSingle();
      if (!l || l.poll_hash !== (await sha256(String(body.poll || "")))) return fail("That code isn't valid any more.", 404, "not_found");
      if (new Date(l.expires_at) < new Date() && l.status !== "approved") return json({ status: "expired" });
      if (l.status === "approved") {
        // Hand the ciphertext over once, then wipe it.
        await db.from("monyx_device_links").update({ status: "done", ct: null, iv: null }).eq("id", l.id);
        const { data: u } = await db.from("monyx_users").select(PUBLIC).eq("id", l.user_id).single();
        return json({ status: "approved", old_pub: l.old_pub, iv: l.iv, ct: l.ct, user: pub(u) });
      }
      if (l.status === "claimed") {
        const { data: u } = await db.from("monyx_users").select("handle, name").eq("id", l.user_id).single();
        return json({ status: "claimed", user: u });
      }
      return json({ status: l.status });
    }

    // ---------- sign in on any device with a password or a synced passkey ----------
    // The server keeps the account key only as ciphertext. Password backups are released
    // only after a login proof derived from the password (the password itself never arrives),
    // with wrong guesses rate-limited per account, so the ciphertext can't be pulled and
    // attacked offline. Passkey backups need the passkey's PRF secret to open.
    // Same answer whether or not the account exists or has a password: a made-up salt that never
    // changes for that name, so nobody can learn who has password sign-in by asking.
    if (path === "/backup/pw/start" && req.method === "POST") {
      const h = String(body.handle || "").toLowerCase().replace(/^@/, "").slice(0, 40);
      if (await tooMany("start-ip:" + ip, 60, 15)) return fail("Too many tries from here. Wait 15 minutes.", 429, "rate_limited");
      await countTry("start-ip:" + ip, 15, 60);
      const { data: u } = HANDLE.test(h) ? await db.from("monyx_users").select("id").eq("handle", h).maybeSingle() : { data: null };
      const { data: b } = u ? await db.from("monyx_key_backups").select("salt, iter").eq("user_id", u.id).eq("kind", "pw").maybeSingle() : { data: null };
      if (b) return json({ salt: b.salt, iter: b.iter });
      return json({ salt: (await hmac("fake-salt:" + h)).slice(0, 24), iter: 600000 });
    }
    if (path === "/backup/pw/open" && req.method === "POST") {
      const h = String(body.handle || "").toLowerCase().replace(/^@/, "").slice(0, 40);
      const NOPE = "That username and password don't match. Check both, or use your recovery key or a code from your other device.";
      // Limits that hold across server instances (stored in the database), shown to the person:
      // 8 wrong tries per account per 15 minutes, 20 per day, and 30 per network per 15 minutes.
      if (await tooMany("ip:" + ip, 30, 15)) return fail("Too many tries from this network. Wait 15 minutes.", 429, "rate_limited");
      if (await tooMany("acct15:" + h, 8, 15)) return fail("Too many wrong passwords for this account. Wait 15 minutes, or use your recovery key.", 429, "rate_limited");
      if (await tooMany("acctday:" + h, 20, 1440)) return fail("Too many wrong passwords today. Use your recovery key or a code from your other device.", 429, "rate_limited");
      const { data: u } = HANDLE.test(h) ? await db.from("monyx_users").select("id, address").eq("handle", h).maybeSingle() : { data: null };
      const { data: b } = u ? await db.from("monyx_key_backups").select("*").eq("user_id", u.id).eq("kind", "pw").maybeSingle() : { data: null };
      const auth = String(body.auth || "");
      // Only a keyed hash of the login proof is stored; the password and the proof itself never are.
      const ok = !!b && (b.auth_hash === "h2:" + (await hmac("auth:" + auth)) || b.auth_hash === (await sha256(auth)));
      if (!ok) {
        const left = await countTry("acct15:" + h, 15, 8);
        await countTry("acctday:" + h, 1440, 20); await countTry("ip:" + ip, 15, 30);
        return fail(left > 0 ? `${NOPE} ${left} ${left === 1 ? "try" : "tries"} left before a 15-minute wait.` : NOPE, 401, "wrong_password");
      }
      await db.from("monyx_pw_tries").delete().in("key", ["acct15:" + h]);
      return json({ iv: b!.iv, ct: b!.ct, address: u!.address });
    }
    if (path === "/backup/pk/open" && req.method === "POST") {
      const cred = String(body.cred_id || "");
      if (!/^[A-Za-z0-9_\-+/=]{16,400}$/.test(cred)) return fail("That passkey isn't set up for Monyx.", 404, "no_passkey");
      const { data: b } = await db.from("monyx_key_backups").select("user_id, salt, iv, ct").eq("kind", "pk").eq("cred_id", cred).maybeSingle();
      if (!b) return fail("That passkey isn't set up for signing in on other devices yet. Use your recovery key or a code from your other device.", 404, "no_passkey");
      const { data: u } = await db.from("monyx_users").select("address").eq("id", b.user_id).single();
      return json({ salt: b.salt, iv: b.iv, ct: b.ct, address: u.address });
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

    if (path === "/backup" && req.method === "GET") {
      const { data } = await db.from("monyx_key_backups").select("kind, created_at").eq("user_id", user.id);
      return json({ pw: (data || []).some((b) => b.kind === "pw"), passkeys: (data || []).filter((b) => b.kind === "pk").length });
    }
    if (path === "/backup/pw" && req.method === "POST") {
      const { salt, iv, ct, auth } = body; const iter = Number(body.iter);
      if (![salt, iv, ct, auth].every((x) => typeof x === "string" && /^[A-Za-z0-9+/=]{16,200}$/.test(x)) || !(iter >= 300000 && iter <= 5000000)) return fail("That didn't work. Try again.");
      await db.from("monyx_key_backups").delete().eq("user_id", user.id).eq("kind", "pw");
      const { error } = await db.from("monyx_key_backups").insert({ user_id: user.id, kind: "pw", salt, iter, iv, ct, auth_hash: "h2:" + (await hmac("auth:" + auth)) });
      if (error) return oops("backup pw", error);
      return json({ ok: true });
    }
    if (path === "/backup/pk" && req.method === "POST") {
      const { cred_id, salt, iv, ct } = body;
      if (!/^[A-Za-z0-9_\-+/=]{16,400}$/.test(String(cred_id || "")) || ![salt, iv, ct].every((x) => typeof x === "string" && /^[A-Za-z0-9+/=]{16,200}$/.test(x))) return fail("That didn't work. Try again.");
      await db.from("monyx_key_backups").delete().eq("kind", "pk").eq("cred_id", cred_id).eq("user_id", user.id);
      const { error } = await db.from("monyx_key_backups").insert({ user_id: user.id, kind: "pk", cred_id, salt, iv, ct });
      if (error) return oops("backup pk", error);
      return json({ ok: true });
    }
    if (path === "/backup/remove" && req.method === "POST") {
      const kind = body.kind === "pk" ? "pk" : "pw";
      await db.from("monyx_key_backups").delete().eq("user_id", user.id).eq("kind", kind);
      return json({ ok: true });
    }

    if (path === "/link/find" && req.method === "POST") {
      if (limitedLink(user.id)) return fail("Too many tries. Wait a few minutes.", 429, "rate_limited");
      const code = String(body.code || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
      if (code.length !== 8) return fail("Codes are 8 letters and numbers, like K7QM-4ZPA.");
      const { data: l } = await db.from("monyx_device_links").select("id, new_pub, status, user_id, expires_at, created_at").eq("code", code).maybeSingle();
      if (!l || new Date(l.expires_at) < new Date() || l.status === "done" || l.status === "denied" || (l.user_id && l.user_id !== user.id))
        return fail("No new device is waiting with that code. Check it, or make a new one.", 404, "not_found");
      await db.from("monyx_device_links").update({ status: "claimed", user_id: user.id }).eq("id", l.id).in("status", ["pending", "claimed"]);
      return json({ id: l.id, pub: l.new_pub, created: l.created_at });
    }
    if (path === "/link/approve" && req.method === "POST") {
      const oldPub = String(body.old_pub || ""), iv = String(body.iv || ""), ct = String(body.ct || "");
      if (!/^[A-Za-z0-9+/=]{80,100}$/.test(oldPub) || !/^[A-Za-z0-9+/=]{16}$/.test(iv) || !/^[A-Za-z0-9+/=]{60,200}$/.test(ct)) return fail("That didn't work. Try again.");
      const { data, error } = await db.from("monyx_device_links").update({ status: "approved", old_pub: oldPub, iv, ct })
        .eq("id", String(body.id || "")).eq("user_id", user.id).eq("status", "claimed").gt("expires_at", new Date().toISOString()).select("id");
      if (error || !data?.length) return fail("That code expired. Make a new one on the new device.", 409, "expired");
      return json({ ok: true });
    }
    if (path === "/link/deny" && req.method === "POST") {
      await db.from("monyx_device_links").update({ status: "denied", ct: null }).eq("id", String(body.id || "")).eq("user_id", user.id);
      return json({ ok: true });
    }
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
