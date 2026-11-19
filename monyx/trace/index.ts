// Monyx taint-trace Edge Function.
// Walks incoming Solana devnet transfers up to 2 hops and matches senders
// against risk-list.json. The QuickNode URL lives in the secret
// QUICKNODE_DEVNET_URL — never hardcode it, never put it in the frontend.
//
// Deploy (from the repo that already has supabase/):
//   supabase secrets set QUICKNODE_DEVNET_URL=https://YOUR-DEVNET-ENDPOINT...
//   supabase functions deploy trace --no-verify-jwt
//
// Risk labels are High, Medium, or Normal.
// Use only High, Medium, or Normal. Do not use stronger words for funds or people.

import {
  ADVICE,
  allowedOrigin,
  cleanAddr,
  clientIp,
  corsHeaders,
  isAddr,
  isMainnetUrl,
  makeCache,
  makeRateLimit,
  runTrace,
} from "./core.js";
import riskList from "./risk-list.json" with { type: "json" };

const cache = makeCache();
const rate = makeRateLimit();

function json(body: unknown, status: number, origin: string | null, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...corsHeaders(origin),
      ...extra,
    },
  });
}

async function readAddress(req: Request): Promise<string> {
  const url = new URL(req.url);
  const q = url.searchParams.get("address") || url.searchParams.get("a") || "";
  if (req.method === "GET") return cleanAddr(q);
  const text = await req.text();
  if (!text) return cleanAddr(q);
  try {
    const body = JSON.parse(text);
    return cleanAddr(body.address || body.a || q);
  } catch {
    return cleanAddr(q);
  }
}

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");

  if (req.method === "OPTIONS") {
    // Echo a known origin when present; otherwise the live site.
    const allow = allowedOrigin(origin) ? origin : "https://www.monyx.pro";
    return new Response(null, { status: 204, headers: corsHeaders(allow) });
  }

  if (req.method !== "GET" && req.method !== "POST") {
    return json(
      { ok: false, error: "method_not_allowed", message: "Use GET or POST.", note: ADVICE },
      405,
      origin,
    );
  }

  const address = await readAddress(req);
  if (!isAddr(address)) {
    return json(
      {
        ok: false,
        error: "bad_address",
        message:
          "That doesn't look like a Solana account number. If you have a @username, look it up in the app first, then send the account number.",
        note: ADVICE,
      },
      400,
      origin,
    );
  }

  const ip = clientIp(req);
  const gate = rate.check(ip);
  if (!gate.ok) {
    return json(
      {
        ok: false,
        error: "rate_limited",
        message: "Too many checks from this network. Try again in a few minutes.",
        note: ADVICE,
      },
      429,
      origin,
      { "retry-after": String(gate.retryAfter) },
    );
  }

  const cached = cache.get(address);
  if (cached) {
    return json({ ...cached, cached: true }, 200, origin);
  }

  // QuickNode devnet endpoint from the QUICKNODE_DEVNET_URL secret (or Monyx's SOLANA_RPC). Until one is
  // set, fall back to Solana's public devnet RPC so the check still works (slower, rate-limited).
  const rpcUrl = (Deno.env.get("QUICKNODE_DEVNET_URL") || Deno.env.get("SOLANA_RPC") || "https://api.devnet.solana.com").trim();
  if (!rpcUrl || isMainnetUrl(rpcUrl)) console.error("[trace] rpc not usable", { set: !!rpcUrl, mainnet: isMainnetUrl(rpcUrl), host: (() => { try { return new URL(rpcUrl).hostname.split(".").slice(-3).join("."); } catch { return "bad-url"; } })() });
  if (!rpcUrl) {
    return json(
      {
        ok: false,
        error: "not_configured",
        message:
          "The trace service isn't configured yet. Set the QUICKNODE_DEVNET_URL secret, then redeploy.",
        note: ADVICE,
      },
      500,
      origin,
    );
  }
  if (isMainnetUrl(rpcUrl)) {
    return json(
      {
        ok: false,
        error: "mainnet_blocked",
        message: "This tracer only runs on Solana devnet. Point QUICKNODE_DEVNET_URL at a devnet endpoint.",
        note: ADVICE,
      },
      500,
      origin,
    );
  }

  try {
    const result = await runTrace({
      address,
      rpcUrl,
      riskList,
    });
    if (!result.ok) {
      console.error("[trace] not ok", result.error);
      const status = result.error === "bad_address" ? 400 : result.error === "incomplete" ? 503 : 500;
      return json(result, status, origin);
    }
    // A Normal result that stopped early (call budget) is only kept briefly; a listed match is solid.
    if (!(result.tier === "Normal" && result.truncated)) cache.set(address, result);
    return json(result, 200, origin);
  } catch (_err) {
    console.error("[trace] failed:", String((_err as any)?.message || _err).replace(/https?:\/\/\S+/g, "<url>"));
    // Never include the RPC URL or the underlying error text — it can leak the endpoint.
    return json(
      {
        ok: false,
        error: "trace_failed",
        message: "The trace service is busy. Try again in a moment.",
        note: ADVICE,
      },
      502,
      origin,
    );
  }
});
