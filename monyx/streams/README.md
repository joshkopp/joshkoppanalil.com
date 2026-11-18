# QuickNode Streams → Monyx

Streams is how Monyx hears about payments: every block on Solana Devnet goes through
`filter.js` on QuickNode's side, and only transactions touching a Monyx wallet are sent to
the `monyx-pay` webhook. The app gets them pushed over a live connection, with no polling of
Solana.

```
Solana devnet ─▶ QuickNode Stream (filter.js + KV list "monyx_wallets")
                     │  signed webhook (HMAC-SHA256, may be gzip)
                     ▼
               monyx-pay /qn/webhook ─▶ monyx_payments (signature = key, repeats ignored)
                     │                       │  also settles matching open requests
                     ▼                       ▼
               /events (SSE) ─▶ app: toast + "Maya paid you $20 for pizza"
               /activity      ─▶ app: Activity tab
```

## Set it up

1. **Secrets** (Supabase → Edge Functions → Secrets):
   - `QN_STREAM_TOKEN`: the Stream's security token (Stream → Settings). Once set, every
     delivery must carry a valid `X-QN-Signature`; the old `?key=` URL stops working.
   - `QN_API_KEY`: a QuickNode API key with Key-Value Store access. Monyx adds each wallet
     to the `monyx_wallets` list the first time that person opens the app.
   - Optional `MONYX_REMIND_HOURS` (default 24): when to remind someone about an unpaid request.
2. **Stream**: Solana · Devnet · dataset **Block** · paste `filter.js` as the filter ·
   destination Webhook `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay/qn/webhook`.
3. **Test the filter locally first**: `node streams/test-filter.js` (uses `sample-block.json`),
   or `node streams/test-filter.js your-block.json` with a block copied from the Stream's test
   run. `MONYX_WALLETS=addr1,addr2` sets which wallets count as Monyx users.

## What gets stored

Each delivered transaction becomes one or more payment events:
`{ signature, slot, time, from_wallet, to_wallet, amount, token: "SOL" | "USDC", memo }`.
USDC comes from `preTokenBalances`/`postTokenBalances` for mint
`4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`; SOL from lamport balances (0.001 SOL and up,
so token-account rent isn't counted). Events where either side is a Monyx user are saved.
Payments the app sends through the relay are logged too, so Activity has both.

## Built on top

- **First time paying someone:** the send screen checks the payment log (`/paidto`) and warns
  before a first payment.
- **Splits and requests settle themselves:** when a payment arrives that matches an open request
  (same two people, same amount), it's marked paid and the requester hears
  "Jordan paid your $20 request".
- **Reminders:** requests still unpaid after `MONYX_REMIND_HOURS` get one reminder, pushed to
  the person who owes it.
