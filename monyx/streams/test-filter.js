// Check filter.js locally before pasting it into the QuickNode dashboard.
//   node streams/test-filter.js                      → runs against sample-block.json
//   node streams/test-filter.js my-block.json        → your own block (raw Stream payload or a single block)
//   MONYX_WALLETS=addr1,addr2 node streams/test-filter.js
// qnLib is mocked with an in-memory list, the way the Key-Value Store behaves inside a filter.
const fs = require('fs');
const path = require('path');

const wallets = new Set((process.env.MONYX_WALLETS || [
  'HrHWr5488ZWe3vWX9pAD1qxoGNoAszeXdT1NEupQ1Tg5', // a Monyx user (receives USDC and SOL in the sample)
  '6Y8ZQm1fLx7cK2nW3pB9vD4tR5sH8jE1uG7aF3kN2qMp', // another Monyx user (sends the USDC)
].join(',')).split(',').map((s) => s.trim()).filter(Boolean));

global.qnLib = {
  async qnContainsListItem(list, item) { return list === 'monyx_wallets' && wallets.has(item); },
  async qnContainsListItems(list, items) { return items.map((i) => list === 'monyx_wallets' && wallets.has(i)); },
};

const { main } = require('./filter.js');
const file = process.argv[2] || path.join(__dirname, 'sample-block.json');
let payload = JSON.parse(fs.readFileSync(file, 'utf8'));
if (!payload.data) payload = { data: [payload] }; // a bare block

(async () => {
  const out = await main(payload);
  console.log(JSON.stringify(out, null, 2));
  if (file.endsWith('sample-block.json')) {
    const sigs = (out && out.matches || []).map((m) => m.signature.slice(0, 12));
    const want = ['4hXTCkRzt9Wy', '2ZRp7nA6sV8y'];
    const ok = JSON.stringify(sigs) === JSON.stringify(want) && out.matches[0].memo === '🍕 Pizza night';
    console.log(ok ? '\n✓ filter keeps the USDC and SOL payments to Monyx wallets, drops the failed and unrelated ones'
      : `\n✗ expected ${want.join(', ')} with memo, got ${sigs.join(', ')}`);
    const none = await main({ data: [{ transactions: [payload.data[0].transactions[3]] }] });
    console.log(none === null ? '✓ returns null when nothing matches' : '✗ should return null when nothing matches');
    if (!ok || none !== null) process.exit(1);
  }
})();
