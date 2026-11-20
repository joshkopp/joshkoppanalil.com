// Monyx taint-trace Edge Function.
// Walks incoming Solana devnet transfers up to 2 hops and matches senders
// against risk-list.json. Uses Solana's free public devnet RPC by default;
// SOLANA_RPC may point at another free devnet endpoint (Helius, Alchemy).
// Never put an RPC URL in the frontend.
//
// Deploy (from the repo that already has supabase/):
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

  // Solana's free public devnet RPC, or SOLANA_RPC if it names another devnet endpoint.
  // Old QuickNode addresses and mainnet URLs are ignored, so the check always runs on devnet.
  const envRpc = (Deno.env.get("SOLANA_RPC") || "").trim();
  const rpcUrl = envRpc && !/quiknode|quicknode/i.test(envRpc) && !isMainnetUrl(envRpc) ? envRpc : "https://api.devnet.solana.com";

  try {
    // Answer within about 9 s so Pay isn't held up; past that we stop and say the check stopped early.
    const result = await runTrace({
      address,
      rpcUrl,
      riskList,
      limits: { deadlineMs: 9000 },
    });
    if (!result.ok) {
      console.error("[trace] not ok", result.error);
      const status = result.error === "bad_address" ? 400 : result.error === "incomplete" ? 503 : 500;
      return json(result, status, origin);
    }
    // Which network provider answered (a name only, never the URL or its token).
    (result as any).rpcProvider = /api\.devnet\.solana\.com/.test(rpcUrl) ? "Solana public devnet" : /helius/i.test(rpcUrl) ? "Helius" : /alchemy/i.test(rpcUrl) ? "Alchemy" : "custom";
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
