# Monyx

Pay anyone by @username, split bills, and buy, sell and swap crypto. Test mode on Solana devnet.

## Deploying to monyx.pro
This folder is self-contained: every path is relative, and the Solana library ships in `vendor/`.
Copy the contents of this folder (not the folder itself) to the root of monyx.pro.

- `index.html`, `pay.js`, `pay.css`: the app
- `pro/`: Monyx Pro (wallet tracer, agent API market, ledger)
- `llms.txt`, `agents.json`: instructions for AI agents using the API market
- `server/index.ts`: source of the Supabase edge function `monyx` (accounts, requests, profile pictures, exchange)
- `meter/index.ts`: source of the Supabase edge function `monyx-market` (pay-per-pull API market)

The backend stays on Supabase, so nothing changes when the domain does.
