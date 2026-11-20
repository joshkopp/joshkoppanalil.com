/* Light / dark mode for every Monyx page.
   Light is the default. The choice is saved in localStorage ("monyx.theme") so it
   carries across pages and reloads. This file loads in <head> so the page never
   flashes the wrong colours; the toggle button is added once the header exists. */
(function () {
  var KEY = 'monyx.theme';
  var root = document.documentElement;
  function saved() { try { return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light'; } catch (e) { return 'light'; } }
  function apply(t) {
    root.setAttribute('data-theme', t);
    var meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) meta.setAttribute('content', t);
    var tc = document.querySelector('meta[name="theme-color"]');
    if (tc) {
      if (!tc.getAttribute('data-light')) tc.setAttribute('data-light', tc.getAttribute('content') || '#ffffff');
      tc.setAttribute('content', t === 'dark' ? '#0E1712' : tc.getAttribute('data-light'));
    }
    var btns = document.querySelectorAll('.theme-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
      btns[i].setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btns[i].title = t === 'dark' ? 'Light mode' : 'Dark mode';
    }
  }
  function set(t) { try { localStorage.setItem(KEY, t); } catch (e) {} apply(t); }
  window.monyxTheme = { get: saved, set: set, toggle: function () { set(saved() === 'dark' ? 'light' : 'dark'); } };
  apply(saved());

  var MOON = '<svg viewBox="0 0 24 24" aria-hidden="true" class="moon"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" aria-hidden="true" class="sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  function button() {
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'theme-btn'; b.innerHTML = MOON + SUN;
    b.addEventListener('click', function () { window.monyxTheme.toggle(); });
    return b;
  }
  function mount() {
    // Marketing pages: before "Open the wallet". Guide, privacy, terms, Grok Bot, 404: at the end of the top bar.
    var side = document.querySelector('header .nav-side');
    if (side && !side.querySelector('.theme-btn')) side.insertBefore(button(), side.firstChild);
    var bar = !side && document.querySelector('header .bar');
    if (bar && !bar.querySelector('.theme-btn')) {
      var open = bar.querySelector('.open');
      if (open) { var g = document.createElement('div'); g.className = 'bar-r'; bar.insertBefore(g, open); g.appendChild(button()); g.appendChild(open); }
      else bar.appendChild(button());
    }
    apply(saved());
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
  // Another tab changed it: follow along.
  window.addEventListener('storage', function (e) { if (e.key === KEY) apply(saved()); });
})();
