# Monyx

The money app you can talk to. Say "send Maya 20 for pizza", tap to confirm. Split bills, request money, hear when you get paid, and buy, sell and swap crypto. Test mode on Solana devnet.

## Deploying to monyx.pro
This folder is self-contained: every path is relative, and the Solana library ships in `vendor/`.
Copy the contents of this folder (not the folder itself) to the root of monyx.pro.

- `index.html`, `pay.js`, `pay.css`: the app
- `voice-parse.js`: turns a spoken sentence into pay / request / split / balance / activity (tests: `node voice-parse.test.js`)
- `pro/`: Monyx Pro (wallet tracer, agent API market, ledger)
- `llms.txt`, `agents.json`: instructions for AI agents using the API market
- `server/index.ts`: source of the Supabase edge function `monyx` (accounts, usernames, requests, profile pictures)
- `payments/index.ts`: source of `monyx-pay` (USDC payments with Monyx paying the fee, test dollars, pay links, live inbox, exchange, Grok Bot agent API)
- `payments/quicknode-filter.js`: the QuickNode Streams filter
- `grok-bot/`: setup page and `SKILL.md` for Grok Bot
- `privacy/`, `terms/`, `about/`, `404.html`, `robots.txt`, `sitemap.xml`, `og.png`: site pages
- `meter/index.ts`: source of the Supabase edge function `monyx-market` (pay-per-pull API market)
- `voice/index.ts`: source of the Supabase edge function `monyx-voice` (ElevenLabs speech-to-text and text-to-speech)

## Voice setup
Add the secret `ELEVENLABS_API_KEY` to the Supabase project (Edge Functions → Secrets). Optional: `ELEVENLABS_VOICE_ID` to change the voice.
Without the key, the app falls back to the browser's built-in speech recognition and speech, and typing always works.

The backend stays on Supabase, so nothing changes when the domain does.

## Money setup (USDC on devnet)
Dollars are Circle's devnet USDC (`4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`). The Monyx bank wallet
(`9JBSMxHPKMDLyUMhwV2NzFNUikNoQfnJj82NyBoPNJRs`) pays every network fee in SOL and hands out test dollars in USDC, so it needs both:
- **USDC:** go to https://faucet.circle.com, choose Solana Devnet and paste the bank address. That gives 20 USDC every 2 hours. Each new account takes $5, then $2 a day (change with the secrets MONYX_WELCOME_USD and MONYX_DAILY_USD).
- **SOL** for fees: https://faucet.solana.com. Each payment costs the bank about 0.000005 SOL, plus about 0.002 SOL the first time someone receives USDC.

## Faster Solana RPC (recommended before judging)
The free public devnet RPC rate-limits under load (we saw 429s in a live test). In QuickNode, create a **Solana Devnet** endpoint and add these Supabase secrets:
- `SOLANA_RPC`: the endpoint URL, which the server uses to send and confirm payments
- `PUBLIC_RPC`: the same URL, or a second endpoint, which browsers use for balances and activity (the app picks it up from `/monyx-pay/info`)

## QuickNode Streams (live "you got paid" for money from outside Monyx)
1. Pick a long random string and add it as the Supabase secret `QN_STREAMS_KEY`.
2. In QuickNode, create a Stream: Solana, Devnet, dataset **Block**, starting from the latest block.
3. Choose "Modify the payload" and paste `payments/quicknode-filter.js`.
4. Destination: Webhook, URL `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay/streams?key=<QN_STREAMS_KEY>`.
5. Send a test USDC payment to a Monyx account from any wallet. The app announces it within a few seconds.
Payments made inside Monyx already show up instantly without Streams, because the relay logs them.
