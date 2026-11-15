// Above Board house: seals each seed onchain (Solana devnet memo) before the bet,
// then reveals it once the player's seed is locked in.
// Deployed as the Supabase edge function "aboveboard". Source kept in the site repo for review.
import { createClient } from "npm:@supabase/supabase-js@2";
import {
  Connection, Keypair, PublicKey, Transaction, TransactionInstruction,
  LAMPORTS_PER_SOL,
} from "npm:@solana/web3.js@1.95.3";

const RPC = "https://api.devnet.solana.com";
const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
const MAX_COMMITS_PER_MIN = 120;

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

const db = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false } },
);
const conn = new Connection(RPC, "confirmed");
const enc = new TextEncoder();
const hex = (b: ArrayBuffer | Uint8Array) =>
  [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");

async function sha256Hex(s: string) {
  return hex(await crypto.subtle.digest("SHA-256", enc.encode(s)));
}
// Identical to fairness.js so players can recompute in the browser.
async function roll(serverSeed: string, clientSeed: string, nonce: number) {
  const k = await crypto.subtle.importKey("raw", enc.encode(serverSeed), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const h = hex(await crypto.subtle.sign("HMAC", k, enc.encode(`${clientSeed}:${nonce}`)));
  const n = parseInt(h.slice(0, 8), 16);
  return Math.floor((n / 0x100000000) * 10000) / 100;
}

let house: Keypair | null = null;
async function getHouse(): Promise<Keypair> {
  if (house) return house;
  const read = async () => (await db.from("ab_config").select("value").eq("key", "house_secret").maybeSingle()).data;
  let row = await read();
  if (!row) {
    const kp = Keypair.generate();
    await db.from("ab_config").insert({ key: "house_secret", value: JSON.stringify([...kp.secretKey]) });
    row = await read(); // another instance may have won the race; use whatever is stored
  }
  house = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(row!.value)));
  return house;
}

async function topUpIfLow(kp: Keypair) {
  try {
    const bal = await conn.getBalance(kp.publicKey);
    if (bal < 0.05 * LAMPORTS_PER_SOL) await conn.requestAirdrop(kp.publicKey, LAMPORTS_PER_SOL);
  } catch { /* devnet faucet is rate limited; fund manually via faucet.solana.com */ }
}

async function postMemo(kp: Keypair, text: string) {
  const tx = new Transaction().add(new TransactionInstruction({
    keys: [{ pubkey: kp.publicKey, isSigner: true, isWritable: false }],
    programId: MEMO,
    data: enc.encode(text),
  }));
  tx.feePayer = kp.publicKey;
  tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
  tx.sign(kp);
  // Don't wait for confirmation: the signature is final once accepted, and the bet shouldn't stall.
  return await conn.sendRawTransaction(tx.serialize(), { skipPreflight: false });
}

async function commit() {
  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await db.from("ab_seeds").select("id", { count: "exact", head: true }).gte("created_at", since);
  if ((count ?? 0) >= MAX_COMMITS_PER_MIN) return json({ error: "busy", message: "The house is busy. Try again in a minute." }, 429);

  const a = new Uint8Array(32); crypto.getRandomValues(a);
  const serverSeed = hex(a);
  const c = await sha256Hex(serverSeed);
  const { error } = await db.from("ab_seeds").insert({ server_seed: serverSeed, commit: c });
  if (error) return json({ error: "db", message: "Could not seal a seed." }, 500);

  const kp = await getHouse();
  let commitTx: string | null = null;
  let note: string | undefined;
  try {
    commitTx = await postMemo(kp, `ABOVEBOARD1 commit=${c}`);
    await db.from("ab_seeds").update({ commit_tx: commitTx }).eq("commit", c);
  } catch (e) {
    note = /insufficient|debit|0x1|no record of a prior credit/i.test(String(e)) ? "house_unfunded" : "devnet_unavailable";
  }
  // @ts-ignore EdgeRuntime is provided by Supabase
  EdgeRuntime.waitUntil(topUpIfLow(kp));
  return json({ commit: c, commitTx, house: kp.publicKey.toBase58(), note });
}

async function reveal(body: Record<string, unknown>) {
  const c = String(body.commit ?? "");
  const clientSeed = String(body.clientSeed ?? "").slice(0, 128);
  const nonce = Number(body.nonce);
  if (!/^[0-9a-f]{64}$/.test(c) || !clientSeed || !Number.isInteger(nonce) || nonce < 1)
    return json({ error: "bad_request", message: "Missing fingerprint, player seed or roll number." }, 400);

  const { data: row } = await db.from("ab_seeds").select("*").eq("commit", c).maybeSingle();
  if (!row) return json({ error: "unknown", message: "That sealed seed doesn't exist." }, 404);
  if (row.revealed_at) return json({ error: "used", message: "That seed has already been used." }, 409);

  const r = await roll(row.server_seed, clientSeed, nonce);
  // Lock in the player's seed atomically; only the first reveal wins.
  const { data: upd } = await db.from("ab_seeds")
    .update({ client_seed: clientSeed, nonce, roll: r, revealed_at: new Date().toISOString() })
    .eq("commit", c).is("revealed_at", null).select("id");
  if (!upd || !upd.length) return json({ error: "used", message: "That seed has already been used." }, 409);

  return json({ serverSeed: row.server_seed, roll: r, commitTx: row.commit_tx });
}

async function info() {
  const kp = await getHouse();
  let sol: number | null = null;
  try { sol = (await conn.getBalance(kp.publicKey)) / LAMPORTS_PER_SOL; } catch {}
  return json({ house: kp.publicKey.toBase58(), sol });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch {}
  try {
    switch (body.action) {
      case "commit": return await commit();
      case "reveal": return await reveal(body);
      case "info": return await info();
      default: return json({ error: "bad_request", message: "Unknown action." }, 400);
    }
  } catch (e) {
    console.error(e);
    return json({ error: "server", message: "The house hit an error." }, 500);
  }
});
