// Monyx voice: turn what someone said into something the app can do.
//   "send maya 20 for pizza"            → pay      maya   $20   "🍕 Pizza"
//   "request twelve fifty from jordan"  → request  jordan $12.50
//   "split 60 for dinner with maya and jordan" → split [maya, jordan] $60 "🍽️ Dinner"
//   "what's my balance"                 → balance
//   "who paid me"                       → activity
// It only understands; it never acts. The app shows a confirmation for anything
// that moves money, so a mishearing costs a tap, not a payment.
(function (root) {
  'use strict';
  const ONES = { zero: 0, oh: 0, one: 1, a: 1, an: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, couple: 2 };
  const TENS = { twenty: 20, thirty: 30, forty: 40, fourty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
  const SCALE = { hundred: 100, thousand: 1000, grand: 1000, k: 1000 };
  const isNumWord = (w) => w in ONES || w in TENS || w in SCALE;

  // "twenty five" → "25", "a hundred and ten" → "110", "five hundred" → "500".
  // "a"/"an" only count before hundred/thousand, so "send a friend" stays words.
  function wordsToDigits(words) {
    const out = [];
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      const startsNumber = (w in ONES && !['a', 'an', 'oh', 'couple'].includes(w)) || w in TENS
        || ((w === 'a' || w === 'an') && SCALE[words[i + 1]]) || (w === 'couple' && /^(of|bucks|dollars)$/.test(words[i + 1] || ''));
      if (!startsNumber) { out.push(w); continue; }
      let total = 0, cur = 0, last = '', j = i;
      for (; j < words.length; j++) {
        const x = words[j], nx = words[j + 1] || '';
        if (x === 'and' && total + cur >= 100 && ((nx in ONES && !/^(a|an|couple)$/.test(nx)) || nx in TENS)) continue; // "a hundred and ten"
        if (x === 'of' && words[j - 1] === 'couple') continue;
        if (x === 'couple' && j === i) { cur += 2; last = 'one'; continue; }
        if ((x in ONES && !/^(a|an|oh|couple)$/.test(x)) || (/^(a|an)$/.test(x) && j === i)) {
          const v = /^(a|an)$/.test(x) ? 1 : ONES[x];
          if (last === 'one' || last === 'teen' || (last === 'ten' && v >= 10)) break; // "five six", "twenty twelve"
          cur += v; last = v < 10 ? 'one' : 'teen';
        } else if (x in TENS) {
          if (last && last !== 'scale') break;                                     // "twelve fifty" = 12 and 50
          cur += TENS[x]; last = 'ten';
        } else if (x in SCALE) {
          if (!cur) cur = 1;
          if (SCALE[x] === 100) cur *= 100; else { total += cur * SCALE[x]; cur = 0; }
          last = 'scale';
        } else break;
      }
      out.push(String(total + cur));
      i = j - 1;
    }
    return out;
  }

  const NOTE_EMOJI = [
    [/pizza/, '🍕'], [/coffee|latte|starbucks|cafe/, '☕'], [/rent|apartment|utilities|electric|wifi|internet/, '🏠'],
    [/uber|lyft|ride|taxi|cab|gas|parking|train|bus/, '🚗'], [/ticket|concert|movie|show|game/, '🎟️'],
    [/gift|birthday|present/, '🎁'], [/beer|drinks?|bar|wine/, '🍻'], [/grocer|groceries|food|dinner|lunch|breakfast|brunch|sushi|tacos?|burgers?|meal|snacks?/, '🍽️'],
    [/flight|hotel|trip|airbnb|vacation/, '✈️'], [/book|class|tuition|school/, '📚'],
  ];
  function noteFrom(s) {
    s = s.replace(/\b(please|thanks|thank you|okay|ok)\b/g, '').replace(/\s+/g, ' ').trim().replace(/^(the|my|our|some)\s+/, '');
    if (!s) return '';
    const hit = NOTE_EMOJI.find(([re]) => re.test(s));
    const nice = s.charAt(0).toUpperCase() + s.slice(1);
    return (hit ? hit[1] + ' ' : '') + nice.slice(0, 60);
  }

  const FILLER = new Set(('a an hey hi hello ok okay monyx money please can could would you i want wanna to like need me my mine the some just ' +
    'send pay paying give transfer venmo zelle tip back request ask charge bill collect invoice get split owe owes owed from with between ' +
    'among and plus also dollar dollars buck bucks usd cash him her them they for each everyone everybody people of us yeah um uh now real quick go ahead').split(' '));

  function parse(input) {
    const raw = String(input || '').trim();
    let t = ' ' + raw.toLowerCase()
      .replace(/[‘’]/g, "'")
      .replace(/(\d),(\d{3})/g, '$1$2')
      .replace(/\$\s*/g, ' $')
      .replace(/@\s*/g, ' @')
      .replace(/\bunderscore\b/g, '_')
      .replace(/,/g, ' , ')
      .replace(/[^a-z0-9$@_.,'\s-]/g, ' ')
      .replace(/(\D)\.(\s|$)/g, '$1 ')
      .replace(/\s+/g, ' ') + ' ';
    t = ' ' + wordsToDigits(t.trim().split(' ')).join(' ') + ' ';
    // Glue "@ maya" and "maya _ c" back together.
    t = t.replace(/ _ /g, '_').replace(/@ /g, '@');

    // ---- intent ----
    let intent = 'unknown';
    if (/\b(add|top up|load|deposit)\b.*\b(money|dollars|cash|funds|balance)\b|\btop ?up\b/.test(t) && !/\b(send|pay|request|split)\b/.test(t)) intent = 'topup';
    else if (/\b(balance|how much (money )?(do|have) i|how much is in my|how much have i got|what('s| is| do i have) in my (account|wallet))\b/.test(t)) intent = 'balance';
    else if (/\b(who (paid|sent) me|what did i (get|receive)|did (anyone|anybody|someone) (pay|send)|recent (payments|activity|transactions)|read (me )?(my )?(payments|activity|transactions)|my (payments|activity|transactions)|any (new )?(payments|money))\b/.test(t)) intent = 'activity';
    else if (/\bsplit\b/.test(t)) intent = 'split';
    else if (/\b(request|ask|charge|bill|collect|invoice)\b|\bowes? me\b|\bget (\$?\d|[a-z]+ \$?\d).* from\b/.test(t)) intent = 'request';
    else if (/\b(send|pay|give|transfer|venmo|zelle|tip|owe)\b/.test(t)) intent = 'pay';

    // ---- amount ----
    let amount = null;
    const cents = t.match(/(\d+)\s*(?:dollars?|bucks?)?\s*and\s*(\d{1,2})\s*cents?\b/);
    const dollarsCents = t.match(/\$?(\d+)\s*(?:dollars?|bucks?)\s*(\d{2})\b/); // "12 dollars 50"
    const money = t.match(/\$(\d+(?:\.\d{1,2})?)/) || t.match(/(\d+(?:\.\d{1,2})?)\s*(?:dollars?|bucks?|usd)\b/);
    const onlyCents = t.match(/\b(\d{1,2})\s*cents?\b/);
    const pair = t.match(/(?:^|\s)(\d{1,2}) (\d{2})(?=\s|$)/); // "twelve fifty" → 12.50
    const bare = t.match(/(?:^|\s)(\d+(?:\.\d{1,2})?)(?=\s|$)/);
    if (cents) amount = +cents[1] + +cents[2] / 100;
    else if (dollarsCents) amount = +dollarsCents[1] + +dollarsCents[2] / 100;
    else if (money) amount = +money[1];
    else if (pair && +pair[2] >= 10) amount = +pair[1] + +pair[2] / 100;
    else if (onlyCents) amount = +onlyCents[1] / 100;
    else if (bare) amount = +bare[1];
    const negative = /(^|\s)-\s*\$?\d|\bminus \$?\d|\bnegative\b/.test(t);
    if (amount != null && !(amount > 0)) amount = null;
    if (amount != null) amount = Math.round(amount * 100) / 100;

    // ---- note: whatever comes after "for" (or "because") ----
    let note = '';
    const nm = t.match(/\b(?:for|because of|because|it's for|its for)\b (.+)$/);
    let rest = t;
    if (nm) {
      let n = nm[1];
      // "for dinner with maya and jordan": the names after "with" are people, not the note.
      const w = n.match(/^(.*?)\b(with|between|among|to|from)\b(.*)$/);
      if (w && w[1].trim()) { n = w[1]; rest = t.slice(0, nm.index) + ' ' + w[2] + ' ' + w[3]; }
      else rest = t.slice(0, nm.index);
      n = n.replace(/(^|\s)\$?\d+(\.\d+)?(\s*(dollars?|bucks?))?(?=\s|$)/g, ' ');
      note = noteFrom(n.trim());
    }

    // ---- names: what's left once verbs, amounts and filler are gone ----
    const people = [];
    const chunks = rest
      // Only standalone numbers are amounts; the 2 in "monyxtester2" is part of a username.
      .replace(/(^|\s)-?\s?\$?\d+(\.\d{1,2})?(\s*(dollars?|bucks?|usd|cents?))?(?=\s|$)/g, ' , ')
      .replace(/\b(and|with|plus|also|between|among|to|from)\b/g, ' , ')
      .split(',');
    for (const c of chunks) {
      const words = c.trim().split(/\s+/).map((w) => w.replace(/^[-.']+|[-.']+$/g, '')).filter((w) => w && !FILLER.has(w.replace(/^@/, '')) && !/^'s$/.test(w) && w !== 'minus' && w !== 'negative');
      if (!words.length) continue;
      const name = words.join(' ').replace(/'s$/, '').replace(/^@/, '');
      if (name && !people.includes(name)) people.push(name);
    }
    if (intent === 'balance' || intent === 'activity' || intent === 'topup') people.length = 0;
    return { intent, amount, people, note, negative, text: raw };
  }

  const api = { parse, wordsToDigits };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MonyxVoice = api;
})(typeof window !== 'undefined' ? window : globalThis);
