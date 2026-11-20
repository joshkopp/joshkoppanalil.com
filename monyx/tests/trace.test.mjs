// The source tracer (trace/core.js) against a fake chain: finds a flagged wallet 2 hops back, skips the
// Monyx bank's long history, survives rate limits, and never reports Normal when lookups failed.
//   node tests/trace.test.mjs
import { readFileSync } from "node:fs";
import { check, done } from "./extract.mjs";
import { runTrace } from "../trace/core.js";

const list = JSON.parse(readFileSync(new URL("../trace/risk-list.json", import.meta.url), "utf8"));
const BANK = list.trusted[0].address, SCAM = list.wallets[0].address;
const T = "CzApNAx6Za9f4bBXp7R2tdzoRqYCVZ4ySpNnV4AZfgZR", X = "8v3jhTAGXh7shcx2DNk1XfY6NcajBV1oYSbxagwS8tDp";
const chain = { [T]: [BANK, X], [X]: [SCAM], [BANK]: Array(50).fill(X) };
const sysTx = (from, to) => ({ transaction: { message: { instructions: [{ program: "system", parsed: { type: "transfer", info: { source: from, destination: to, lamports: 1e8 } } }] } }, meta: { err: null, innerInstructions: [], preTokenBalances: [], postTokenBalances: [] } });
function fakeRpc({ fail429 = 0, failAll = false } = {}) {
  const calls = {};
  const f = async (_u, o) => {
    const { method, params } = JSON.parse(o.body); calls[method] = (calls[method] || 0) + 1;
    if (failAll || fail429-- > 0) return { status: 429, json: async () => ({}) };
    let result = null;
    if (method === "getSignaturesForAddress") result = (chain[params[0]] || []).map((from, i) => ({ signature: `${params[0].slice(0, 6)}-${i}`, blockTime: 1000 - i }));
    if (method === "getTokenAccountsByOwner") result = { value: [] };
    if (method === "getTransaction") { const [a, i] = params[0].split("-"); const to = Object.keys(chain).find((k) => k.startsWith(a)); result = sysTx(chain[to][+i], to); }
    return { status: 200, json: async () => ({ result }) };
  };
  f.calls = calls; return f;
}
const fast = { gapMs: 0, backoffMs: 1 };

let f = fakeRpc(); let r = await runTrace({ address: T, rpcUrl: "x", riskList: list, fetchImpl: f, limits: fast });
check("flagged wallet 2 hops back is High", [r.tier, r.hops], ["High", 2]);
check("the bank's history isn't walked", (f.calls.getTransaction || 0) <= 4, true);
r = await runTrace({ address: T, rpcUrl: "x", riskList: list, fetchImpl: fakeRpc({ fail429: 2 }), limits: fast });
check("recovers from rate limits", r.tier, "High");
r = await runTrace({ address: T, rpcUrl: "x", riskList: list, fetchImpl: fakeRpc({ failAll: true }), limits: { ...fast, retries: 2 } });
check("network down is 'incomplete', never Normal", [r.ok, r.error], [false, "incomplete"]);
r = await runTrace({ address: SCAM, rpcUrl: "x", riskList: list, fetchImpl: fakeRpc(), limits: fast });
check("a listed wallet itself is High, 0 hops", [r.tier, r.hops], ["High", 0]);
r = await runTrace({ address: "not-an-address", rpcUrl: "x", riskList: list, fetchImpl: fakeRpc(), limits: fast });
check("junk input is rejected", r.error, "bad_address");
check("labels are only High/Medium/Normal", ["High", "Medium", "Normal"].includes((await runTrace({ address: X, rpcUrl: "x", riskList: list, fetchImpl: fakeRpc(), limits: fast })).tier), true);

done("trace (source of funds)");
