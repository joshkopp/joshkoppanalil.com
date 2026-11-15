const assert = require('assert');
const Fair = require('./fairness.js');

(async () => {
  // Determinism + commit check
  const seed = 'a'.repeat(64);
  const commit = await Fair.sha256Hex(seed);
  assert.strictEqual(commit, await Fair.sha256Hex(seed));
  const r1 = await Fair.roll(seed, 'player', 1);
  assert.strictEqual(r1, await Fair.roll(seed, 'player', 1));
  assert.notStrictEqual(r1, await Fair.roll(seed, 'player', 2));
  assert.ok(r1 >= 0 && r1 <= 99.99);

  // verify() accepts a good claim, rejects tampering
  const good = await Fair.verify({ serverSeed: seed, commit, clientSeed: 'player', nonce: 1, roll: r1 });
  assert.ok(good.commitOk && good.rollOk);
  const badSeed = await Fair.verify({ serverSeed: 'b'.repeat(64), commit, clientSeed: 'player', nonce: 1, roll: r1 });
  assert.strictEqual(badSeed.commitOk, false);
  const badRoll = await Fair.verify({ serverSeed: seed, commit, clientSeed: 'player', nonce: 1, roll: r1 + 0.01 });
  assert.strictEqual(badRoll.rollOk, false);

  // Win-zone sizes are exact: chance% of 10,000 outcomes
  for (const chance of [2, 10, 33, 50, 75, 98]) {
    for (const mode of ['under', 'over']) {
      let wins = 0;
      for (let i = 0; i < 10000; i++) if (Fair.isWin(i / 100, mode, chance)) wins++;
      assert.strictEqual(wins, chance * 100, `${mode} ${chance}`);
    }
  }

  // Statistical sanity: win rate ~ chance, RTP ~ 99%
  const N = 20000;
  for (const chance of [10, 50, 90]) {
    let wins = 0;
    for (let i = 0; i < N; i++) {
      const r = await Fair.roll(Fair.randomSeed(), 'x', i);
      if (Fair.isWin(r, 'under', chance)) wins++;
    }
    const rate = (wins / N) * 100;
    const rtp = (wins / N) * Fair.multiplier(chance);
    console.log(`chance ${chance}%: observed ${rate.toFixed(2)}%, RTP ${(rtp * 100).toFixed(1)}%`);
    assert.ok(Math.abs(rate - chance) < 2, 'win rate off');
    assert.ok(rtp > 0.93 && rtp < 1.05, 'RTP off');
  }

  assert.strictEqual(Fair.multiplier(50), 1.98);
  console.log('All fairness tests passed');
})().catch((e) => { console.error(e); process.exit(1); });
