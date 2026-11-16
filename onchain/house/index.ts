// Above Board house.
//
// Fairness model: one server seed per SESSION. The house seals SHA-256(seed)
// to Solana devnet before any bet, and the player fixes their own seed at the
// same moment. Every outcome in the session is therefore determined before the
// first roll: roll(n) = HMAC-SHA256(seed, clientSeed:n). Rolls are served by
// nonce and are idempotent, so a house that refuses or drops a roll gains
// nothing — the retry returns the same number. The seed is revealed when the
// player ends the session, along with every roll it recorded, so the nonce
// sequence can be checked for gaps.
//
// Deployed as the Supabase edge function "aboveboard".
import { createClient } from "npm:@supabase/supabase-js@2";
import {
  Connection, Keypair, PublicKey, SystemProgram, Transaction, TransactionInstruction,
  LAMPORTS_PER_SOL,
} from "npm:@solana/web3.js@1.95.3";

const RPC = "https://api.devnet.solana.com";
const MEMO = new PublicKey("MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr");
const START_CHIPS = 1000;
const EDGE = 1;                       // house edge, percent
const MAX_SESSIONS_PER_MIN = 60;
// Real-SOL guard rails. The house wallet is small, so bets are bounded and the
// payout is capped; chance is floored so the multiplier can't run away.
const SOL_MIN_STAKE = 0.001 * LAMPORTS_PER_SOL;
const SOL_MAX_STAKE = 0.005 * LAMPORTS_PER_SOL;
const SOL_MAX_PAYOUT = 0.02 * LAMPORTS_PER_SOL;
const SOL_MIN_CHANCE = 20;
const HOUSE_RESERVE = 0.002 * LAMPORTS_PER_SOL;  // keep enough for memo fees

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });
const bad = (message: string, status = 400, error = "bad_request") => json({ error, message }, status);

const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, {
  auth: { persistSession: false },
});
const conn = new Connection(RPC, "confirmed");
const enc = new TextEncoder();
const hex = (b: ArrayBuffer | Uint8Array) =>
  [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");

const sha256Hex = async (s: string) => hex(await crypto.subtle.digest("SHA-256", enc.encode(s)));

// Must stay byte-for-byte equivalent to fairness.js in the browser.
async function rollFor(serverSeed: string, clientSeed: string, nonce: number) {
  const k = await crypto.subtle.importKey("raw", enc.encode(serverSeed), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const h = hex(await crypto.subtle.sign("HMAC", k, enc.encode(`${clientSeed}:${nonce}`)));
  return Math.floor((parseInt(h.slice(0, 8), 16) / 0x100000000) * 10000) / 100;
}
const isWin = (r: number, mode: string, chance: number) => (mode === "under" ? r < chance : r >= 100 - chance);
const multiplier = (chance: number) => Math.floor(((100 - EDGE) / chance) * 10000) / 10000;
const round2 = (n: number) => Math.round(n * 100) / 100;

let house: Keypair | null = null;
async function getHouse(): Promise<Keypair> {
  if (house) return house;
  const read = async () => (await db.from("ab_config").select("value").eq("key", "house_secret").maybeSingle()).data;
  let row = await read();
  if (!row) {
    const kp = Keypair.generate();
    await db.from("ab_config").insert({ key: "house_secret", value: JSON.stringify([...kp.secretKey]) });
    row = await read();
  }
  house = Keypair.fromSecretKey(Uint8Array.from(JSON.parse(row!.value)));
  return house;
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
  return await conn.sendRawTransaction(tx.serialize(), { skipPreflight: false });
}

/* ── actions ─────────────────────────────────────────────────────── */

async function start(body: Record<string, unknown>) {
  const clientSeed = String(body.clientSeed ?? "").trim().slice(0, 128);
  if (!clientSeed) return bad("Pick a player seed first.");
  const player = body.player ? String(body.player).trim().slice(0, 64) : null;
  if (player && !/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(player)) return bad("That wallet address doesn't look right.");

  const since = new Date(Date.now() - 60_000).toISOString();
  const { count } = await db.from("ab_sessions").select("id", { count: "exact", head: true }).gte("created_at", since);
  if ((count ?? 0) >= MAX_SESSIONS_PER_MIN) return json({ error: "busy", message: "The house is busy. Try again shortly." }, 429);

  const a = new Uint8Array(32); crypto.getRandomValues(a);
  const serverSeed = hex(a);
  const commit = await sha256Hex(serverSeed);

  // Carry a returning player's chip balance over, so the leaderboard means something.
  let balance = START_CHIPS;
  if (player) {
    const { data: prev } = await db.from("ab_sessions").select("balance")
      .eq("player", player).order("created_at", { ascending: false }).limit(1).maybeSingle();
    if (prev && Number(prev.balance) >= 1) balance = Number(prev.balance);
  }

  const { data: row, error } = await db.from("ab_sessions")
    .insert({ server_seed: serverSeed, commit, client_seed: clientSeed, player, balance })
    .select("id, balance, next_nonce").single();
  if (error || !row) return json({ error: "db", message: "Could not open a session." }, 500);

  const kp = await getHouse();
  let commitTx: string | null = null;
  let note: string | undefined;
  try {
    commitTx = await postMemo(kp, `ABOVEBOARD2 session=${row.id} commit=${commit}`);
    await db.from("ab_sessions").update({ commit_tx: commitTx }).eq("id", row.id);
  } catch (e) {
    note = /insufficient|debit|0x1|prior credit/i.test(String(e)) ? "house_unfunded" : "devnet_unavailable";
  }
  return json({ sessionId: row.id, commit, commitTx, note, balance: Number(row.balance), nextNonce: row.next_nonce, house: kp.publicKey.toBase58() });
}

// Reads what the house actually received, rather than trusting the client.
async function verifyStake(sig: string, player: string, housePk: PublicKey) {
  const tx = await conn.getTransaction(sig, { commitment: "confirmed", maxSupportedTransactionVersion: 0 });
  if (!tx) return { ok: false as const, message: "That stake transaction isn't on devnet yet. Wait a moment and retry." };
  if (tx.meta?.err) return { ok: false as const, message: "That stake transaction failed on devnet." };
  const keys = tx.transaction.message.getAccountKeys();
  const hi = keys.staticAccountKeys.findIndex((k) => k.equals(housePk));
  if (hi < 0) return { ok: false as const, message: "That transaction didn't pay the house." };
  const received = (tx.meta!.postBalances[hi] ?? 0) - (tx.meta!.preBalances[hi] ?? 0);
  if (received <= 0) return { ok: false as const, message: "That transaction didn't pay the house." };
  if (received < SOL_MIN_STAKE) return { ok: false as const, message: "Stake too small. Minimum is 0.001 SOL." };
  if (received > SOL_MAX_STAKE) return { ok: false as const, message: "Stake too large. Maximum is 0.005 SOL." };
  if (!keys.staticAccountKeys[0]?.equals(new PublicKey(player)))
    return { ok: false as const, message: "That stake was paid by a different wallet." };
  return { ok: true as const, lamports: received };
}

// Returns as soon as devnet accepts the transaction. Waiting for confirmation
// here would mean a timeout could report failure on a payout that actually
// landed, and the Claim path would then pay it a second time. The signature is
// recorded either way, so the player can always check it on Explorer.
async function payout(to: string, lamports: number) {
  const kp = await getHouse();
  const bal = await conn.getBalance(kp.publicKey);
  if (bal - lamports < HOUSE_RESERVE) throw new Error("house_short");
  const tx = new Transaction().add(SystemProgram.transfer({
    fromPubkey: kp.publicKey, toPubkey: new PublicKey(to), lamports,
  }));
  tx.feePayer = kp.publicKey;
  tx.recentBlockhash = (await conn.getLatestBlockhash()).blockhash;
  tx.sign(kp);
  return await conn.sendRawTransaction(tx.serialize(), { skipPreflight: false });
}

async function roll(body: Record<string, unknown>) {
  const sessionId = String(body.sessionId ?? "");
  const nonce = Number(body.nonce);
  const chance = Math.round(Number(body.chance));
  const mode = body.mode === "over" ? "over" : "under";
  const stake = Math.floor(Number(body.stake));
  const solStakeSig = body.solStakeSig ? String(body.solStakeSig) : null;

  if (!/^[0-9a-f-]{36}$/.test(sessionId) || !Number.isInteger(nonce) || nonce < 1) return bad("Bad session or roll number.");
  if (!(chance >= 2 && chance <= 98)) return bad("Win chance must be between 2 and 98.");

  const { data: s } = await db.from("ab_sessions").select("*").eq("id", sessionId).maybeSingle();
  if (!s) return json({ error: "unknown", message: "That session doesn't exist." }, 404);
  if (s.revealed_at) return json({ error: "revealed", message: "This session's seed is already revealed. Start a new one." }, 409);

  // Idempotent: replaying a nonce returns the stored outcome, so refusing to
  // serve a roll can never change it.
  const { data: existing } = await db.from("ab_rolls").select("*").eq("session_id", sessionId).eq("nonce", nonce).maybeSingle();
  if (existing) {
    return json({
      replayed: true, nonce, roll: Number(existing.roll), win: existing.win,
      delta: Number(existing.delta), balance: Number(existing.balance_after),
      nextNonce: s.next_nonce, solPayoutSig: existing.sol_payout_sig,
      solStakeLamports: existing.sol_stake_lamports, solPayoutLamports: existing.sol_payout_lamports,
    });
  }
  if (nonce !== s.next_nonce) return bad(`Out of step: the next roll is number ${s.next_nonce}.`, 409, "out_of_step");

  const value = await rollFor(s.server_seed, s.client_seed, nonce);
  const won = isWin(value, mode, chance);
  const mult = multiplier(chance);

  let solStake: number | null = null, solPayout: number | null = null;
  let payoutSig: string | null = null, pending = false, payoutNote: string | undefined;

  if (solStakeSig) {
    if (!s.player) return bad("Connect a wallet before staking SOL.");
    if (chance < SOL_MIN_CHANCE) return bad(`With real SOL the win chance must be at least ${SOL_MIN_CHANCE}%.`);
    const kp = await getHouse();
    const v = await verifyStake(solStakeSig, s.player, kp.publicKey);
    if (!v.ok) return bad(v.message, 400, "bad_stake");
    solStake = v.lamports;
    const want = Math.floor(solStake * mult);
    if (want > SOL_MAX_PAYOUT) return bad(`That bet could win more than the house covers. Keep stake × payout under ${SOL_MAX_PAYOUT / LAMPORTS_PER_SOL} SOL.`);
    if (won) {
      solPayout = want;
      try { payoutSig = await payout(s.player, want); }
      catch (e) { pending = true; payoutNote = String(e).includes("house_short") ? "house_short" : "payout_failed"; }
    }
  }

  // Chips move only for play-chip bets; a real-SOL bet settles onchain instead.
  let delta = 0, balance = Number(s.balance);
  if (!solStakeSig) {
    if (!(stake >= 1)) return bad("Stake at least 1 chip.");
    if (stake > balance) return bad("That stake is more than your balance.");
    delta = round2(won ? stake * mult - stake : -stake);
    balance = round2(balance + delta);
  }

  const { error: insErr } = await db.from("ab_rolls").insert({
    session_id: sessionId, nonce, stake: solStakeSig ? 0 : stake, chance, mode,
    roll: value, win: won, delta, balance_after: balance,
    sol_stake_sig: solStakeSig, sol_payout_sig: payoutSig,
    sol_stake_lamports: solStake, sol_payout_lamports: solPayout, sol_payout_pending: pending,
  });
  if (insErr) {
    if (String(insErr.message).includes("sol_stake_sig")) return bad("That stake transaction was already used.", 409, "stake_used");
    if (String(insErr.code) === "23505") { // raced with another request on the same nonce
      const { data: again } = await db.from("ab_rolls").select("*").eq("session_id", sessionId).eq("nonce", nonce).maybeSingle();
      if (again) return json({ replayed: true, nonce, roll: Number(again.roll), win: again.win, delta: Number(again.delta), balance: Number(again.balance_after), nextNonce: s.next_nonce + 1 });
    }
    return json({ error: "db", message: "Could not record that roll." }, 500);
  }

  let nextBalance = balance;
  if (!solStakeSig && balance < 1) nextBalance = START_CHIPS;
  await db.from("ab_sessions").update({ next_nonce: nonce + 1, balance: nextBalance }).eq("id", sessionId);

  return json({
    nonce, roll: value, win: won, delta, balance: nextBalance, nextNonce: nonce + 1,
    refilled: nextBalance !== balance, solStakeLamports: solStake, solPayoutLamports: solPayout,
    solPayoutSig: payoutSig, payoutPending: pending, payoutNote,
  });
}

// Retry a payout the house owed but failed to send.
async function claim(body: Record<string, unknown>) {
  const sessionId = String(body.sessionId ?? "");
  const nonce = Number(body.nonce);
  const { data: s } = await db.from("ab_sessions").select("player").eq("id", sessionId).maybeSingle();
  const { data: r } = await db.from("ab_rolls").select("*").eq("session_id", sessionId).eq("nonce", nonce).maybeSingle();
  if (!s?.player || !r) return json({ error: "unknown", message: "No such roll." }, 404);
  if (r.sol_payout_sig) return json({ solPayoutSig: r.sol_payout_sig });
  if (!r.win || !r.sol_payout_lamports) return bad("Nothing owed on that roll.");
  try {
    const sig = await payout(s.player, Number(r.sol_payout_lamports));
    await db.from("ab_rolls").update({ sol_payout_sig: sig, sol_payout_pending: false }).eq("id", r.id);
    return json({ solPayoutSig: sig });
  } catch (e) {
    return json({ error: "payout_failed", message: String(e).includes("house_short") ? "The house wallet is short on devnet SOL." : "Payout failed. Try again." }, 503);
  }
}

async function reveal(body: Record<string, unknown>) {
  const sessionId = String(body.sessionId ?? "");
  const { data: s } = await db.from("ab_sessions").select("*").eq("id", sessionId).maybeSingle();
  if (!s) return json({ error: "unknown", message: "That session doesn't exist." }, 404);
  await db.from("ab_sessions").update({ revealed_at: s.revealed_at ?? new Date().toISOString() }).eq("id", sessionId);
  const { data: rolls } = await db.from("ab_rolls").select("nonce, roll, stake, chance, mode, win, delta, sol_stake_sig, sol_payout_sig")
    .eq("session_id", sessionId).order("nonce");
  return json({
    serverSeed: s.server_seed, commit: s.commit, commitTx: s.commit_tx,
    clientSeed: s.client_seed, rolls: rolls ?? [],
  });
}

async function leaderboard() {
  const { data } = await db.from("ab_leaderboard").select("*").order("net", { ascending: false }).limit(20);
  return json({ players: data ?? [] });
}

async function info() {
  const kp = await getHouse();
  let sol: number | null = null;
  try { sol = (await conn.getBalance(kp.publicKey)) / LAMPORTS_PER_SOL; } catch { /* devnet down */ }
  return json({
    house: kp.publicKey.toBase58(), sol,
    limits: {
      minStakeSol: SOL_MIN_STAKE / LAMPORTS_PER_SOL,
      maxStakeSol: SOL_MAX_STAKE / LAMPORTS_PER_SOL,
      maxPayoutSol: SOL_MAX_PAYOUT / LAMPORTS_PER_SOL,
      minChance: SOL_MIN_CHANCE,
    },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let body: Record<string, unknown> = {};
  try { body = await req.json(); } catch { /* empty body falls through to the default */ }
  try {
    switch (body.action) {
      case "start": return await start(body);
      case "roll": return await roll(body);
      case "claim": return await claim(body);
      case "reveal": return await reveal(body);
      case "leaderboard": return await leaderboard();
      case "info": return await info();
      default: return bad("Unknown action.");
    }
  } catch (e) {
    console.error(e);
    return json({ error: "server", message: "The house hit an error." }, 500);
  }
});
