// Monyx QuickNode Stream filter — Solana Devnet, "Block" dataset.
//
// Paste this into the Stream's filter editor. It keeps only successful transactions that
// touch a Monyx wallet (any account key, or the owner of any token balance), and sends the
// few fields the Monyx webhook needs. The wallet list lives in QuickNode's Key-Value Store
// under "monyx_wallets"; Monyx adds each account's wallet there automatically, so the filter
// never needs redeploying when people sign up.
//
// Delivery shape: { matches: [{ signature, slot, blockTime, accountKeys, preBalances,
//   postBalances, preTokenBalances, postTokenBalances, memo }] }, or null when nothing matches.

const LIST = 'monyx_wallets';
const USDC_MINT = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU';
const MEMO_PROGRAMS = ['MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr', 'Memo1UhkJRfHyvLMcVucJwxXeuD728EqVDDwQDxFMNo'];

async function main(stream) {
  const blocks = Array.isArray(stream.data) ? stream.data : [stream.data];
  const matches = [];
  for (const block of blocks) {
    if (!block || !Array.isArray(block.transactions)) continue;
    for (const tx of block.transactions) {
      const meta = tx.meta;
      if (!meta || meta.err) continue; // failed transactions moved no money
      const msg = (tx.transaction && tx.transaction.message) || {};
      const keys = (msg.accountKeys || []).map((k) => (typeof k === 'string' ? k : k.pubkey));
      const pre = (meta.preTokenBalances || []).filter((b) => b.mint === USDC_MINT);
      const post = (meta.postTokenBalances || []).filter((b) => b.mint === USDC_MINT);
      const owners = [...pre, ...post].map((b) => b.owner).filter(Boolean);
      const candidates = [...new Set([...keys, ...owners])];
      if (!candidates.length) continue;
      // One batch lookup per transaction (free inside a filter). Always await qnLib calls.
      const hits = await qnLib.qnContainsListItems(LIST, candidates);
      if (!hits.some(Boolean)) continue;
      matches.push({
        signature: tx.transaction.signatures[0],
        slot: block.parentSlot != null ? block.parentSlot + 1 : block.slot ?? null,
        blockTime: block.blockTime ?? null,
        accountKeys: keys,
        preBalances: meta.preBalances || [],
        postBalances: meta.postBalances || [],
        preTokenBalances: pre,
        postTokenBalances: post,
        memo: memoOf(tx, keys, meta),
      });
    }
  }
  return matches.length ? { matches } : null;
}

// The memo text, from the parsed instruction if present, otherwise from the program logs.
function memoOf(tx, keys, meta) {
  const ixs = ((tx.transaction && tx.transaction.message && tx.transaction.message.instructions) || []).slice();
  for (const inner of meta.innerInstructions || []) ixs.push(...(inner.instructions || []));
  for (const ix of ixs) {
    const program = ix.programId || keys[ix.programIdIndex];
    if (MEMO_PROGRAMS.includes(program) && typeof ix.parsed === 'string') return ix.parsed.slice(0, 80);
  }
  for (const line of meta.logMessages || []) {
    const m = line.match(/Memo \(len \d+\): "(.*)"$/);
    if (m) return m[1].slice(0, 80);
  }
  return '';
}

if (typeof module !== 'undefined') module.exports = { main };
