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
   - `QN_STREAM_TOKEN`: the Stream's security token (shown on the Destination step; copy it with no spaces). Once set, every
     delivery must carry a valid `X-QN-Signature`; the old `?key=` URL stops working.
   - `QN_API_KEY`: a QuickNode API key with Key-Value Store access. Monyx adds each wallet
     to the `monyx_wallets` list the first time that person opens the app.
   - Optional `MONYX_REMIND_HOURS` (default 24): when to remind someone about an unpaid request.
2. **Stream**: Solana · Devnet · dataset **Block** · start from the latest block · turn on
   "Modify the stream payload" and paste `filter.js` · destination Webhook
   `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay/qn/webhook`, compression None,
   no custom headers. Without the filter every block (~80 KB) is sent.
3. **Test the filter locally first**: `node streams/test-filter.js` (uses `sample-block.json`),
   or `node streams/test-filter.js your-block.json` with a block copied from the Stream's test
   run. `MONYX_WALLETS=addr1,addr2` sets which wallets count as Monyx users.

## What gets stored

Each delivered transaction becomes one or more payment events:
`{ signature, slot, time, from_wallet, to_wallet, amount, token: "SOL" | "USDC", memo }`.
USDC comes from `preTokenBalances`/`postTokenBalances` for mint
`4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`; SOL from lamport balances (0.001 SOL and up,
so token-account rent isn't counted). Events where either side is a Monyx user are saved.
Payments the app sends through the relay are logged too, so Activity has both. A relayed payment is
usually logged a moment before its Stream delivery arrives; the repeat is ignored, so it shows
`source = relay`. Payments from wallets outside Monyx show `source = streams`.

## Built on top

- **First time paying someone:** the send screen checks the payment log (`/paidto`) and warns
  before a first payment.
- **Splits and requests settle themselves:** when a payment arrives that matches an open request
  (same two people, same amount), it's marked paid and the requester hears
  "Jordan paid your $20 request".
- **Reminders:** requests still unpaid after `MONYX_REMIND_HOURS` get one reminder, pushed to
  the person who owes it.

## Troubleshooting

- **401 on `/qn/webhook`**: the signature didn't match. Check that `QN_STREAM_TOKEN` is the
  current token for this Stream. The function logs `qn webhook: signature mismatch` (with the
  token's length and first 6 characters, never the whole token) or `missing headers`.
- **Stream says Terminated**: too many failed deliveries. Terminated Streams can't be restarted;
  create a new one (it gets a new token, so update the secret).
- **Nothing arrives**: the filter only sends blocks that touch a wallet in `monyx_wallets`. Open
  the app once after signing up so the wallet gets added.
- **A tiny payment didn't show up**: payments from wallets outside Monyx under $0.10 USDC (or 0.01 SOL)
  are ignored on purpose, so nobody can spam people with penny payments and notes. Change it with the
  `MONYX_OUTSIDE_MIN_USD` / `MONYX_OUTSIDE_MIN_SOL` secrets.
- Each payment in a transaction is its own row (signature + token + receiver), so a transaction that
  pays USDC and SOL keeps both.
