// Provably fair dice engine (commit-reveal, HMAC-SHA256).
// Works in browsers and Node 19+ (uses WebCrypto).
(function (root) {
  const enc = new TextEncoder();
  const toHex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

  async function sha256Hex(str) {
    return toHex(await crypto.subtle.digest('SHA-256', enc.encode(str)));
  }

  async function hmacHex(key, msg) {
    const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return toHex(await crypto.subtle.sign('HMAC', k, enc.encode(msg)));
  }

  function randomSeed(bytes = 32) {
    const a = new Uint8Array(bytes);
    crypto.getRandomValues(a);
    return toHex(a);
  }

  // Roll in [0.00, 99.99] (10,000 equally likely outcomes).
  async function roll(serverSeed, clientSeed, nonce) {
    const h = await hmacHex(serverSeed, `${clientSeed}:${nonce}`);
    const n = parseInt(h.slice(0, 8), 16); // 32 bits
    return Math.floor((n / 0x100000000) * 10000) / 100;
  }

  // chance is the win probability in percent (e.g. 50). Exactly `chance`% of the
  // 10,000 outcomes win: "under" wins when roll < chance, "over" wins when
  // roll >= 100 - chance.
  function isWin(r, mode, chance) {
    return mode === 'under' ? r < chance : r >= 100 - chance;
  }

  function multiplier(chance, edge = 1) {
    return Math.floor(((100 - edge) / chance) * 10000) / 10000;
  }

  // Full check a player (or judge) can run after the server seed is revealed.
  async function verify({ serverSeed, commit, clientSeed, nonce, roll: claimed }) {
    const commitOk = commit ? (await sha256Hex(serverSeed)) === commit : null;
    const recomputed = await roll(serverSeed, clientSeed, nonce);
    const rollOk = claimed === undefined ? null : recomputed === claimed;
    return { commitOk, rollOk, recomputed };
  }

  const api = { sha256Hex, hmacHex, randomSeed, roll, isWin, multiplier, verify };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Fair = api;
})(typeof window !== 'undefined' ? window : globalThis);
