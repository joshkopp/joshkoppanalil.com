// Shared motion and UI for the Monyx marketing site.
// All plain JavaScript, no libraries.
//   1. A soft shadow on the header after you scroll.
//   2. Mobile menu open / close (button, Escape, click outside).
//   3. Sections fade and rise into place as they enter the screen.
//   4. The wallet screenshot (home only) floats a little and tilts toward the pointer.
//   5. Morphing liquid blobs behind the phone (home only).
//   6. FAQ accordion.
//   7. Demo forms never submit — they do not send or save anything.
// If the visitor asked for reduced motion, we skip the animated bits.

(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  // --- 1. Sticky header ---
  const header = $("header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // --- 2. Mobile menu ---
  const menuBtn = $(".menu-btn");
  const menu = $("#site-menu");

  const setMenu = (open) => {
    if (!menuBtn || !menu) return;
    menu.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    const label = open ? "Close menu" : "Open menu";
    menuBtn.setAttribute("aria-label", label);
  };

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMenu(false);
    });
    document.addEventListener("click", (e) => {
      if (!header) return;
      if (menu.classList.contains("is-open") && !header.contains(e.target)) {
        setMenu(false);
      }
    });
    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => setMenu(false));
    });
    // If the window grows to the desktop nav, close the panel.
    const mq = window.matchMedia("(min-width: 980px)");
    const onMq = () => { if (mq.matches) setMenu(false); };
    if (mq.addEventListener) mq.addEventListener("change", onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  // --- 3. Scroll reveals ---
  const reveals = $$(".reveal");
  if (reduce) {
    reveals.forEach((el) => el.classList.add("in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  // --- 4. Light 3D tilt on the hero phone (home page only) ---
  const stage = $("#stage");
  const phone = $("#phone-3d");
  if (phone && stage && !reduce) {
    let mx = 0, my = 0, cx = 0, cy = 0, running = true, raf = 0;
    const onMove = (e) => {
      if (!fine) return;
      const r = stage.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 14;
      my = ((e.clientY - r.top) / r.height - 0.5) * -10;
    };
    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseleave", () => { mx = 0; my = 0; });

    const tick = (now) => {
      if (!running || document.hidden) return;
      const t = now / 1000;
      const floatY = Math.sin(t * 0.7) * 8;
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      phone.style.transform =
        `translateY(${floatY.toFixed(2)}px) rotateX(${cy.toFixed(2)}deg) rotateY(${cx.toFixed(2)}deg)`;
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

  // --- 5. Liquid blob (home page only) ---
  // An organic blob is just a circle whose radius isn't the same all
  // the way around. We store a radius at 8 points, ease them toward
  // new targets, and connect the points with smooth curves.
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
    makeBlob("blob-a", 400, 330, 210, 56),
    makeBlob("blob-b", 500, 360, 150, 46),
    makeBlob("blob-c", 300, 280, 130, 40),
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

  // --- 6. FAQ accordion ---
  $$(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-btn");
    const panel = item.querySelector(".faq-panel");
    if (!btn || !panel) return;
    const panelId = panel.id;
    btn.setAttribute("aria-expanded", item.classList.contains("is-open") ? "true" : "false");
    if (panelId) btn.setAttribute("aria-controls", panelId);
    btn.addEventListener("click", () => {
      const open = !item.classList.contains("is-open");
      // One open at a time keeps the page calm.
      $$(".faq-item").forEach((other) => {
        const isThis = other === item && open;
        other.classList.toggle("is-open", isThis);
        const b = other.querySelector(".faq-btn");
        if (b) b.setAttribute("aria-expanded", isThis ? "true" : "false");
      });
    });
  });

  // --- 7. Demo forms never submit ---
  $$("form[data-demo]").forEach((form) => {
    form.setAttribute("action", "");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    });
  });

  // If the URL has a #hash, move keyboard focus to that section.
  const id = location.hash.slice(1);
  if (id) {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute("tabindex", "-1");
      el.focus({ preventScroll: true });
    }
  }
})();
