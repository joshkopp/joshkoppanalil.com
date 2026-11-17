// Motion on this page, all in plain JavaScript (no libraries):
//  1. Text-scramble the mono kicker, then reveal the headline word by word.
//  2. Build a looping demo ticker.
//  3. Sticky nav style after you scroll.
//  4. Scroll-triggered staggered reveals.
//  5. Count up a few honest stats when they enter view.
//  6. CSS 3D: the wallet card floats and tilts toward the pointer; feature cards tilt on hover.
//  7. A morphing liquid blob behind the hero (SVG paths + a goo filter).
//  8. Move keyboard focus if the URL has a #hash.
// If the visitor asked for reduced motion, we skip the animated bits and show the end state.

(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // --- 1. Kicker scramble + headline word reveal ---
  const kickerText = "Monyx // UBC 2026";
  const kickerEl = $("#kicker-anim");
  const pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  function scrambleTo(el, text, ms, done) {
    if (!el) return done && done();
    const chars = [...text];
    const start = performance.now();
    const frame = (now) => {
      const t = Math.min(1, (now - start) / ms);
      el.textContent = chars.map((ch, i) => {
        if (!/[A-Za-z0-9]/.test(ch)) return ch;
        const settle = (i / chars.length) * 0.65;
        if (t >= settle + 0.2) return ch;
        if (t < settle) return pool[(Math.random() * pool.length) | 0];
        return Math.random() > (t - settle) / 0.2 ? pool[(Math.random() * pool.length) | 0] : ch;
      }).join("");
      if (t < 1) requestAnimationFrame(frame);
      else { el.textContent = text; done && done(); }
    };
    requestAnimationFrame(frame);
  }

  // "say" gets a hand-drawn scribble underline. The clip wrapper keeps the
  // slide-up reveal, while the SVG sits just underneath, outside the clip.
  const scribbleSvg = `<svg class="scribble-line" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M1.5 5.2 C 12 2.2, 18 6.4, 29 4.6 S 46 1.8, 57 5.1 S 76 7.2, 88 3.8 S 97 5, 99 4.6"/></svg>`;
  const h1 = $("h1[data-text]");
  const vis = h1 && $(".h1-vis", h1);
  if (h1 && vis) {
    const words = h1.dataset.text.split(" ");
    vis.innerHTML = words.map((w, i) => {
      const clean = w.replace(/[^A-Za-z]/g, "").toLowerCase();
      const mark = clean === "say";
      const inner = `<span class="w-clip"><span class="word">${w}</span></span>`;
      return `<span class="w${mark ? " scribble" : ""}" style="--d:${0.08 + i * 0.07}s">${inner}${mark ? scribbleSvg : ""}</span>`;
    }).join(" ");
  }

  const playHero = () => { if (h1) h1.classList.add("is-on"); };
  if (reduce) {
    if (kickerEl) kickerEl.textContent = kickerText;
    playHero();
  } else {
    scrambleTo(kickerEl, kickerText, 900, playHero);
  }

  // --- 2. Demo ticker ---
  const phrases = [
    ["SAY", "pay maya 20 for pizza"],
    ["USDC", "a dollar stays a dollar"],
    ["FEES", "$0, we cover gas"],
    ["LINKS", "pay anyone with a link"],
    ["GROK", "drafts wait for your OK"],
    ["LOCK", "passkey on your device"],
    ["STREAMS", "paid alerts from QuickNode"],
    ["DEVNET", "test money only"],
  ];
  const ticker = $("#ticker");
  if (ticker) {
    const piece = phrases.map(([tag, text]) =>
      `<span class="ticker-item"><b>${tag}</b> ${text} <span class="dot"></span></span>`
    ).join("");
    ticker.innerHTML = piece + piece;
    if (reduce) ticker.style.animation = "none";
  }

  // --- 3. Sticky nav ---
  const header = $("header");
  const onScrollNav = () => header && header.classList.toggle("is-stuck", window.scrollY > 8);
  onScrollNav();
  window.addEventListener("scroll", onScrollNav, { passive: true });

  // --- 4. Scroll reveals ---
  const revealables = $$(".reveal, .reveal-child");
  const showAll = () => revealables.forEach((el) => el.classList.add("in"));
  if (reduce || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealables.forEach((el) => io.observe(el));
  }

  // --- 5. Count-ups ---
  function countUp(el, to, ms) {
    const start = performance.now();
    const frame = (now) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = String(Math.round(eased * to)).padStart(2, "0");
      if (t < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }
  const counters = $$("[data-count]");
  const runCounts = () => counters.forEach((el) => countUp(el, Number(el.dataset.count), 900));
  const snapCounts = () => counters.forEach((el) => { el.textContent = String(el.dataset.count).padStart(2, "0"); });
  if (reduce) {
    snapCounts();
  } else if ("IntersectionObserver" in window) {
    const stats = $("#stats");
    const cio = new IntersectionObserver((entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      runCounts();
      cio.disconnect();
    }, { threshold: 0.3 });
    if (stats) cio.observe(stats);
  } else {
    snapCounts();
  }

  // --- 6. CSS 3D ---
  const stage = $("#stage");
  const phone = $("#phone-3d");
  const space = $("#space");
  if (phone && stage && !reduce) {
    let mx = 0, my = 0, cx = 0, cy = 0, py = 0, raf = 0, running = true;
    const onMove = (e) => {
      if (!fine) return;
      const r = stage.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 22;
      my = ((e.clientY - r.top) / r.height - 0.5) * -16;
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", () => { mx = 0; my = 0; });

    const tick = (now) => {
      if (!running || document.hidden) return;
      const t = now / 1000;
      const floatY = Math.sin(t * 0.7) * 8;
      const baseY = -14 + Math.sin(t * 0.35) * 6;
      const baseX = 8 + Math.cos(t * 0.45) * 3;
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      const mid = stage.getBoundingClientRect().top + stage.offsetHeight / 2 - window.innerHeight / 2;
      py = Math.max(-24, Math.min(24, mid * -0.1));
      phone.style.transform =
        `translateY(${(floatY + py).toFixed(2)}px) rotateX(${(baseX + cy).toFixed(2)}deg) rotateY(${(baseY + cx).toFixed(2)}deg)`;
      if (space) {
        space.style.transform = `rotateX(${(cy * 0.25).toFixed(2)}deg) rotateY(${(cx * 0.25).toFixed(2)}deg)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    });
  }

  if (!reduce && fine) {
    $$(".feat li").forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateY(${(x * 10).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg) translateZ(10px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  // --- 7. Liquid blob ---
  // An organic blob is just a circle whose radius isn't the same all the way around.
  // We store a radius at 8 points, ease them toward new targets, and connect the
  // points with smooth curves (Q = quadratic Bézier). Two blobs share the goo filter.
  function blobPath(cx, cy, radii) {
    const n = radii.length;
    const pts = radii.map((r, i) => {
      const a = (Math.PI * 2 * i) / n - Math.PI / 2;
      return [cx + Math.cos(a) * r, cy + Math.sin(a) * r];
    });
    const mid = (i) => {
      const a = pts[i], b = pts[(i + 1) % n];
      return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    };
    const m0 = mid(0);
    let d = `M ${m0[0].toFixed(1)} ${m0[1].toFixed(1)}`;
    for (let i = 0; i < n; i++) {
      const p = pts[(i + 1) % n];
      const m = mid((i + 1) % n);
      d += ` Q ${p[0].toFixed(1)} ${p[1].toFixed(1)} ${m[0].toFixed(1)} ${m[1].toFixed(1)}`;
    }
    return d + " Z";
  }
  function makeBlob(id, cx, cy, base, spread) {
    const el = document.getElementById(id);
    if (!el) return null;
    const now = Array.from({ length: 8 }, (_, i) => base + (i % 2 ? spread * 0.4 : -spread * 0.2));
    el.setAttribute("d", blobPath(cx, cy, now));
    return { el, cx, cy, base, spread, now, target: now.slice() };
  }
  const blobs = [
    makeBlob("blob-a", 200, 250, 120, 38),
    makeBlob("blob-b", 255, 310, 80, 30),
  ].filter(Boolean);
  if (!reduce && blobs.length) {
    let last = 0, rafB = 0, runB = true;
    const tickB = (t) => {
      if (!runB || document.hidden) return;
      if (t - last > 2600) {
        last = t;
        for (const b of blobs) {
          for (let i = 0; i < b.now.length; i++) {
            b.target[i] = b.base + Math.sin(t / 700 + i * 1.4 + b.base) * b.spread + (Math.random() * 10 - 5);
          }
        }
      }
      for (const b of blobs) {
        for (let i = 0; i < b.now.length; i++) b.now[i] += (b.target[i] - b.now[i]) * 0.045;
        b.el.setAttribute("d", blobPath(b.cx, b.cy, b.now));
      }
      rafB = requestAnimationFrame(tickB);
    };
    rafB = requestAnimationFrame(tickB);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) { runB = false; cancelAnimationFrame(rafB); }
      else { runB = true; rafB = requestAnimationFrame(tickB); }
    });
  }

  // --- 8. Hash focus ---
  const id = location.hash.slice(1);
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }

  window.__monyxReady = function () {
    if (kickerEl) kickerEl.textContent = kickerText;
    if (h1) h1.classList.add("is-on");
    showAll();
    snapCounts();
  };
})();
