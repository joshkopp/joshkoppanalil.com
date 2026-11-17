// QuickNode Streams filter for Monyx (Solana Devnet, dataset: Block).
// Paste this as the stream's filter. It keeps only successful transactions that
// move devnet USDC and trims them to what monyx-pay needs, so each delivery is tiny.
function main(stream) {
  const USDC = '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU';
  const blocks = Array.isArray(stream.data) ? stream.data : [stream.data];
  const out = [];
  for (const block of blocks) {
    for (const tx of (block && block.transactions) || []) {
      const m = tx.meta;
      if (!m || m.err) continue;
      if (!(m.postTokenBalances || []).some((b) => b.mint === USDC)) continue;
      out.push({
        transaction: { signatures: tx.transaction.signatures },
        meta: {
          preTokenBalances: (m.preTokenBalances || []).filter((b) => b.mint === USDC),
          postTokenBalances: (m.postTokenBalances || []).filter((b) => b.mint === USDC),
          logMessages: (m.logMessages || []).filter((l) => l.includes('Memo')),
        },
        blockTime: block.blockTime,
      });
    }
  }
  return out.length ? { transactions: out } : null;
}
