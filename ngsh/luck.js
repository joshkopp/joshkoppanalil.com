/* The Back Room: admin luck boosts. Reads this player's boost row (RLS: only you + admins can see it) and feeds core.js BOOST,
   which every game's lucky()/unlucky() reads. Round-limited boosts are used up as rounds settle. */
window.Luck = (() => {
  const API = 'https://nvfxdzxdlizznrknmunl.supabase.co', PK = 'sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC';
  const q = s => document.querySelector(s);
  const pill = document.createElement('div'); pill.className = 'lkpill'; pill.hidden = true; q('#purse').after(pill);
  let tickT = 0;
  function show() {
    clearInterval(tickT);
    const b = BOOST, on = b && (b.rounds != null ? b.rounds > 0 : Date.now() < b.until);
    if (!on || !b.visible) { pill.hidden = true; return; }
    pill.hidden = false; pill.className = 'lkpill ' + (b.luck > 0 ? 'good' : 'bad');
    const lbl = () => { const left = b.rounds != null ? `${b.rounds} game${b.rounds === 1 ? '' : 's'}` : (() => { const s = Math.max(0, Math.round((b.until - Date.now()) / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; })();
      pill.innerHTML = `<span>${b.luck > 0 ? '🍀' : '💀'}</span><b>${b.luck > 0 ? 'Luck boost' : 'Cursed'}</b><em>${left}</em>`;
      if (b.rounds == null && Date.now() >= b.until) { BOOST = null; show(); } };
    lbl(); if (b.rounds == null) tickT = setInterval(lbl, 1000);
  }
  let lastKey = '';
  async function pull() {
    if (!Acct.user || document.hidden) { if (!Acct.user && BOOST) { BOOST = null; show(); } return; }
    const t = await Acct.token(); if (!t) return;
    try {
      const r = await fetch(API + '/rest/v1/boosts?select=luck,until,rounds,visible,created_at&target=eq.' + Acct.id, { headers: { apikey: PK, Authorization: 'Bearer ' + t } });
      if (!r.ok) return; const [b] = await r.json();
      const key = b ? b.created_at + b.luck : '';
      if (!b) { if (BOOST) { BOOST = null; show(); } lastKey = ''; return; }
      const nb = { luck: Number(b.luck), until: b.until ? new Date(b.until).getTime() : 0, rounds: b.rounds, visible: b.visible };
      const fresh = key !== lastKey; lastKey = key; BOOST = nb; show();
      if (fresh && b.visible && typeof toast === 'function') toast(nb.luck > 0 ? '🍀 The house is smiling on you…' : '💀 You feel a chill. Luck turned against you.');
    } catch (e) {}
  }
  async function round() {
    if (!BOOST || BOOST.rounds == null || BOOST.rounds <= 0) return;
    BOOST.rounds--; show();
    try { const t = await Acct.token(); if (t) await fetch(API + '/rest/v1/rpc/use_boost_round', { method: 'POST', headers: { apikey: PK, Authorization: 'Bearer ' + t, 'Content-Type': 'application/json' }, body: '{}' }); } catch (e) {}
  }
  let who; addEventListener('acct', () => { if (Acct.user === who) return; who = Acct.user; lastKey = ''; pull(); });
  setInterval(pull, 6000); setTimeout(pull, 1200);
  return { round, pull };
})();
