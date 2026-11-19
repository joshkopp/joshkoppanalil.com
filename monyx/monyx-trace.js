// Monyx source-trace add-on. Include AFTER pay.js:
//   <script src="../monyx-trace.js?v=1" defer></script>
// Calls the private "trace" Edge Function (QuickNode stays on the server).
// Renders a card that matches the existing risk check on the confirm sheet.
(() => {
  "use strict";
  const TAPI = "https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/trace";
  const ADVICE = "Risk estimate only, not legal or financial advice.";
  const TIER_HELP = {
    High: "Pause here. Check with the person you’re paying before you send.",
    Medium: "Worth a second look. Not a hard stop.",
    Normal: "Nothing on the risk list in the last 2 hops. Still read the line above.",
  };

  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const short = (a) => (a && a.length > 12 ? `${a.slice(0, 4)}…${a.slice(-4)}` : a || "");

  function injectCss() {
    if (document.getElementById("monyx-trace-css")) return;
    const s = document.createElement("style");
    s.id = "monyx-trace-css";
    s.textContent = `
.monyx-trace-card { margin-top: 10px; }
.monyx-trace-card.is-loading { opacity: .72; }
.monyx-trace-path { list-style: none; margin: 12px 0 0; padding: 0; }
.monyx-trace-path li { display: grid; gap: 2px; padding: 8px 0; border-top: 1px solid var(--line, rgba(13,42,29,.07)); font-size: 13.5px; }
.monyx-trace-path li:first-child { border-top: 0; padding-top: 0; }
.monyx-trace-path .via { font-size: 12px; color: var(--mute, #556E61); margin: 0; }
.monyx-trace-path .who { font-weight: 600; color: var(--ink, #0D2A1D); }
.monyx-trace-path .addr { font-family: "JetBrains Mono", "Geist Mono", ui-monospace, Menlo, monospace; font-weight: 500; color: var(--ink2, #2E4A3C); font-size: 12.5px; }
.monyx-trace-path .tag { font-weight: 700; font-size: 11.5px; padding: 2px 8px; border-radius: 999px; margin-left: 6px; }
.monyx-trace-card.risk-high .monyx-trace-path .tag { background: #F4C9C3; color: #8A1F17; }
.monyx-trace-card.risk-medium .monyx-trace-path .tag { background: #F6E3B4; color: #6B4500; }
`;
    document.head.appendChild(s);
  }

  function formatAmount(step) {
    if (step.amount == null) return "";
    if (step.asset === "USDC") {
      const n = Number(step.amount);
      return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    }
    if (step.asset === "SOL") {
      const n = Number(step.amount);
      const digits = n >= 1 ? 3 : 6;
      return `${n.toFixed(digits).replace(/0+$/, "").replace(/\.$/, "")} SOL`;
    }
    return `${step.amount} ${step.asset || ""}`.trim();
  }

  function pathHtml(result) {
    const path = result.path || [];
    if (path.length < 2 && result.tier === "Normal") return "";
    const lines = path
      .map((step, i) => {
        const via = i === 0 ? "The account you’re checking" : `Hop ${step.hop} · sent ${esc(formatAmount(step) || "funds")}`;
        const name = step.label ? esc(step.label) : "Account " + esc(short(step.address));
        const tag = step.tier ? `<span class="tag">${esc(step.tier)} risk</span>` : "";
        const sig = step.signature
          ? ` · <a href="https://explorer.solana.com/tx/${esc(step.signature)}?cluster=devnet" target="_blank" rel="noopener">view</a>`
          : "";
        return `<li><p class="via">${via}</p><div><span class="who">${name}</span>${tag}</div><div class="addr">${esc(short(step.address))}${sig}</div></li>`;
      })
      .join("");
    return `<ol class="monyx-trace-path">${lines}</ol>`;
  }

  function cardHtml(result) {
    const tier = result.tier === "High" || result.tier === "Medium" || result.tier === "Normal" ? result.tier : "Normal";
    const cls = "risk risk-" + tier.toLowerCase() + " monyx-trace-card";
    const fine = result.truncated
      ? `${esc(result.note || ADVICE)} We stopped early to stay inside the request budget.`
      : esc(result.note || ADVICE);
    return `<div class="${cls}" role="group" aria-label="Source check">
      <p class="risk-line">${esc(result.headline || "Source check finished.")}</p>
      <div class="risk-tag"><span class="tier">${esc(tier)} risk</span><span>${esc(TIER_HELP[tier])}</span></div>
      ${pathHtml(result)}
      <p class="risk-fine">${fine}</p>
    </div>`;
  }

  function loadingHtml() {
    return `<div class="risk risk-normal monyx-trace-card is-loading" role="status">
      <p class="risk-line">Checking where this money came from…</p>
      <p class="risk-fine">Looks back up to 2 hops on Solana devnet.</p>
    </div>`;
  }

  function errorHtml(message) {
    return `<div class="risk risk-normal monyx-trace-card" role="status">
      <p class="risk-line">We couldn’t finish the source check.</p>
      <p class="risk-fine">${esc(message || "Try again in a moment.")} ${esc(ADVICE)}</p>
    </div>`;
  }

  async function trace(address, opts) {
    const addr = String(address || "").trim();
    const headers = { "content-type": "application/json" };
    if (opts && opts.token) headers.authorization = "Bearer " + opts.token;
    const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
    const to = ctl ? setTimeout(() => ctl.abort(), (opts && opts.timeoutMs) || 20000) : null;
    let res;
    try {
      res = await fetch(TAPI, {
        method: "POST",
        headers,
        body: JSON.stringify({ address: addr }),
        signal: ctl ? ctl.signal : undefined,
      });
    } catch (e) {
      if (to) clearTimeout(to);
      throw e;
    }
    if (to) clearTimeout(to);
    const body = await res.json().catch(() => ({}));
    if (!res.ok || body.ok === false) {
      const err = new Error(body.message || "The trace service is busy. Try again in a moment.");
      err.status = res.status;
      err.body = body;
      throw err;
    }
    return body;
  }

  function ensureHighConfirm(sheetEl, who) {
    if (!sheetEl) return;
    const go = sheetEl.querySelector("#go");
    if (!go) return;
    let box = sheetEl.querySelector("#riskok");
    if (!box) {
      const card = sheetEl.querySelector(".monyx-trace-card") || sheetEl.querySelector(".risk");
      const label = document.createElement("label");
      label.className = "risk-ok";
      label.innerHTML = `<input type="checkbox" id="riskok"> I checked this with ${esc(who || "them")} and still want to send it`;
      if (card) card.appendChild(label);
      else sheetEl.appendChild(label);
      box = label.querySelector("#riskok");
    }
    go.disabled = !box.checked;
    box.onchange = () => {
      go.disabled = !box.checked;
    };
  }

  function mount(el, opts) {
    injectCss();
    if (!el) return Promise.resolve(null);
    const address = opts && opts.address;
    if (!address) {
      el.innerHTML = "";
      return Promise.resolve(null);
    }
    el.innerHTML = loadingHtml();
    return trace(address, opts)
      .then((result) => {
        el.innerHTML = cardHtml(result);
        if (opts && typeof opts.onResult === "function") opts.onResult(result, el);
        if (result.tier === "High" && opts && opts.sheet) ensureHighConfirm(opts.sheet, opts.who);
        return result;
      })
      .catch((err) => {
        el.innerHTML = errorHtml(err && err.message);
        if (opts && typeof opts.onError === "function") opts.onError(err);
        return null;
      });
  }

  // Optional standalone demo box: drop <div id="monyx-trace-demo"></div> on a page.
  function bindDemo(root) {
    injectCss();
    const box = typeof root === "string" ? document.querySelector(root) : root || document.getElementById("monyx-trace-demo");
    if (!box) return;
    box.innerHTML = `<label class="field"><input id="monyx-trace-q" autocapitalize="off" spellcheck="false" placeholder="Account number to check" aria-label="Account number to check"></label>
      <button class="btn btn-dark" id="monyx-trace-go" style="margin-top:12px">Check source</button>
      <div id="monyx-trace-out" style="margin-top:8px"></div>`;
    const q = box.querySelector("#monyx-trace-q");
    const go = box.querySelector("#monyx-trace-go");
    const out = box.querySelector("#monyx-trace-out");
    const run = () => {
      const v = (q.value || "").trim();
      if (!v) return;
      mount(out, { address: v });
    };
    go.onclick = run;
    q.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        run();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => bindDemo());
  } else {
    bindDemo();
  }

  window.MonyxTrace = { trace, mount, cardHtml, ensureHighConfirm, bindDemo, TAPI };
})();
