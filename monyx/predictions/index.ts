// Monyx Invest: live prediction markets from Gemini. Deployed as the Supabase edge function
// "monyx-predictions".
//
// Read-only. It fetches Gemini's public prediction-markets API (no key needed), keeps the busiest
// open markets, and returns a small, tidy list the app can show. Trading happens on Gemini: Monyx
// never places bets, holds positions, or touches money for them.
//   GET /monyx-predictions            -> { markets: [...], at, source }
//   GET /monyx-predictions?category=Sports
//   GET /monyx-predictions?kind=prices -> { coins: [...] } live crypto prices from Gemini (Invest tab)
const GEMINI = "https://api.gemini.com/v1/prediction-markets/events";
const TRADE_URL = "https://www.gemini.com/predictions";
const ORIGINS = new Set(["https://monyx.pro", "https://www.monyx.pro", "https://joshkoppanalil.com", "https://www.joshkoppanalil.com"]);

let cache: { t: number; data: any[] } | null = null;
const num = (v: unknown) => { const n = Number(v); return Number.isFinite(n) ? n : null; };

// Best guess at the market's current price for "Yes" on one outcome: the last trade, else the
// middle of the bid and ask, else whichever side exists. Prices are 0–1 (that's the chance).
function yesPrice(p: any) {
  if (!p) return null;
  const last = num(p.lastTradePrice), bid = num(p.bestBid), ask = num(p.bestAsk);
  if (bid != null && ask != null) return (bid + ask) / 2;
  return last ?? bid ?? ask ?? num(p.buy?.yes);
}

function shape(e: any) {
  const outcomes = (e.contracts || [])
    .filter((c: any) => c && c.status === "active" && c.marketState !== "closed")
    .map((c: any) => ({ label: String(c.label || c.abbreviatedName || c.ticker || "Yes").slice(0, 60), chance: yesPrice(c.prices), color: /^#[0-9a-f]{6}$/i.test(c.color || "") ? c.color : null }))
    .filter((o: any) => o.chance != null)
    .sort((a: any, b: any) => b.chance - a.chance)
    .slice(0, 3)
    .map((o: any) => ({ ...o, chance: Math.round(Math.min(1, Math.max(0, o.chance)) * 100) }));
  if (!outcomes.length) return null;
  return {
    ticker: String(e.ticker || e.id || ""),
    title: String(e.title || "").slice(0, 120),
    category: String(e.category || "Other").slice(0, 30),
    sub: e.subcategory?.name ? String(e.subcategory.name).slice(0, 40) : (e.tags?.[0] ? String(e.tags[0]).slice(0, 40) : null),
    live: !!e.isLive,
    volume24h: num(e.volume24h) ?? 0,
    closes: e.expiryDate || null,
    outcomes,
    url: TRADE_URL,
  };
}

async function load() {
  if (cache && Date.now() - cache.t < 60_000) return cache.data;
  const all: any[] = [];
  for (let offset = 0; offset < 300; offset += 100) {
    const r = await fetch(`${GEMINI}?status=active&limit=100&offset=${offset}`, { headers: { accept: "application/json" } }).catch(() => null);
    if (!r || !r.ok) break;
    const j = await r.json().catch(() => null);
    const rows = Array.isArray(j) ? j : j?.data || [];
    all.push(...rows);
    if (rows.length < 100) break;
  }
  if (!all.length) { if (cache) return cache.data; throw new Error("gemini unavailable"); }
  const data = all.map(shape).filter(Boolean).sort((a: any, b: any) => b.volume24h - a.volume24h).slice(0, 40);
  cache = { t: Date.now(), data };
  return data;
}

// Invest: live crypto prices from Gemini's public price feed, plus a 7-day sparkline from 6-hour candles.
const COINS: Record<string, { name: string; color: string }> = {
  BTC: { name: "Bitcoin", color: "#f7931a" }, ETH: { name: "Ethereum", color: "#627eea" }, SOL: { name: "Solana", color: "#9945ff" },
  XRP: { name: "XRP", color: "#23292f" }, DOGE: { name: "Dogecoin", color: "#c2a633" }, LINK: { name: "Chainlink", color: "#2a5ada" },
  AVAX: { name: "Avalanche", color: "#e84142" }, LTC: { name: "Litecoin", color: "#345d9d" },
};
let priceCache: { t: number; data: any[] } | null = null;
let sparkCache: { t: number; data: Record<string, number[]> } | null = null;
async function prices() {
  if (priceCache && Date.now() - priceCache.t < 30_000) return priceCache.data;
  const r = await fetch("https://api.gemini.com/v1/pricefeed").catch(() => null);
  if (!r || !r.ok) { if (priceCache) return priceCache.data; throw new Error("gemini prices unavailable"); }
  const feed: any[] = await r.json();
  if (!sparkCache || Date.now() - sparkCache.t > 30 * 60_000) {
    const sp: Record<string, number[]> = {};
    await Promise.all(Object.keys(COINS).map(async (sym) => {
      const c = await fetch(`https://api.gemini.com/v2/candles/${sym.toLowerCase()}usd/6hr`).then((x) => (x.ok ? x.json() : [])).catch(() => []);
      // Newest first: [time, open, high, low, close, volume]. Keep the last 7 days, oldest first.
      sp[sym] = (Array.isArray(c) ? c : []).slice(0, 28).map((row: any) => Number(row[4])).filter(Number.isFinite).reverse();
    }));
    sparkCache = { t: Date.now(), data: sp };
  }
  const data = Object.entries(COINS).map(([sym, info]) => {
    const row = feed.find((f) => f.pair === sym + "USD");
    if (!row) return null;
    // The newest 6-hour candle can be hours old, so the chart always ends on the live price.
    const price = Number(row.price);
    return { symbol: sym, name: info.name, color: info.color, price, change24h: Number(row.percentChange24h) * 100, spark: [...(sparkCache!.data[sym] || []), price], url: `https://exchange.gemini.com/trade/${sym}USD` };
  }).filter(Boolean);
  priceCache = { t: Date.now(), data };
  return data;
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  const cors = { "Access-Control-Allow-Origin": ORIGINS.has(origin) ? origin : "https://www.monyx.pro", "Vary": "Origin", "Access-Control-Allow-Methods": "GET, OPTIONS", "Access-Control-Allow-Headers": "content-type" };
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  if (req.method !== "GET") return new Response(JSON.stringify({ error: "method_not_allowed", message: "Use GET." }), { status: 405, headers: { ...cors, "content-type": "application/json" } });
  try {
    const q = new URL(req.url).searchParams;
    if (q.get("kind") === "prices") return new Response(JSON.stringify({ coins: await prices(), at: priceCache?.t || Date.now(), source: "Gemini public price feed" }), { headers: { ...cors, "content-type": "application/json", "cache-control": "public, max-age=15" } });
    const cat = q.get("category");
    const markets = (await load()).filter((m: any) => !cat || m.category.toLowerCase() === cat.toLowerCase());
    return new Response(JSON.stringify({ markets, at: cache?.t || Date.now(), source: "Gemini Predictions public API" }), { headers: { ...cors, "content-type": "application/json", "cache-control": "public, max-age=30" } });
  } catch (e) {
    console.error("[monyx-predictions]", e);
    return new Response(JSON.stringify({ error: "unavailable", message: "Live markets from Gemini aren't loading right now. Try again in a minute." }), { status: 503, headers: { ...cors, "content-type": "application/json" } });
  }
});
