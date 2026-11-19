# Monyx

**Just say who to pay.** Monyx is a voice-first dollar wallet on Solana. Say "send Maya 20 for pizza", read the plain-English preview, tap Pay. Before anything goes out, Monyx checks the destination for scams. No seed phrase to memorize, no gas, no tokens to understand. Test mode on Solana devnet.

- Live: https://www.monyx.pro (marketing site) and https://www.monyx.pro/app/ (the wallet)
- Built by Josh Koppanalil and Andrew Hu for the UBC 2026 hackathon

## What it does

| Feature | How it works |
| --- | --- |
| **Voice payments** | ElevenLabs speech-to-text turns "send Jordan 12.50 for movie tickets" into a payment preview; `voice-parse.js` handles pay, request, split, balance and activity. Monyx reads risky payments back out loud. |
| **Send-time risk check** | Every payment is tagged **High**, **Medium** or **Normal** before you can send. High: look-alike addresses (same first and last 4 characters as someone you've paid, or as your own), usernames one letter off from a contact, program or mint addresses, invalid addresses, your own account. Medium: not on Monyx, brand-new account, or $20+ and over half your balance to someone new. Nicknames can be added to outside addresses. On High the Pay button stays disabled until you tick "I understand". |
| **Passkey or password lock** | Signup asks for a lock. Passkey: the account key is encrypted with AES-GCM under a key derived (HKDF) from the passkey's WebAuthn PRF output, so browser storage only holds ciphertext. Devices without PRF use a password instead (PBKDF2, 600k iterations). |
| **Replay-proof sign-in** | The device signs "<site> wants you to sign in to Monyx" with a one-time server nonce and the time. Each nonce works once; the live-updates ticket is also one-time and expires in 30 s. |
| **Sign in anywhere** | Optional server backups hold only ciphertext: passkey backups are keyed by credential id; password backups are released only after a login proof (the server stores an HMAC of it, never the password) and wrong guesses are rate-limited per IP and per account. A new device can also be approved from a signed-in one (ECDH P-256 + AES-GCM, with matching safety emojis). |
| **Basic / Pro mode** | Basic is pay, request and split. Pro adds Invest. A short quiz suggests one at signup. |
| **Source tracer** | Before you pay, `trace/` (edge function `trace`, from the team's tracer package) follows the recipient's incoming SOL/USDC up to 2 hops on devnet and matches senders against `trace/risk-list.json`. High needs the "I checked" tick. Capped at 100 RPC calls per check, cached 10 min. Demo addresses are in `trace/README.md`. |
| **Invest = Gemini prediction markets** | `predictions/index.ts` (edge function `monyx-predictions`) reads Gemini's public `/v1/prediction-markets/events`, keeps the 40 busiest open markets with their top outcomes, and caches for a minute. Each market links out to Gemini to trade; Monyx never holds bets or money. Hidden in Basic. |
| **Recovery key** | Every account gets a backup key (save to password manager, copy or download). It always works, even without a passkey, password or second device. |
| **No fees** | Gasless relay: the client builds the USDC transfer with the Monyx bank as fee payer, signs its part, and `/monyx-pay/relay` validates the instructions before co-signing. Users never need SOL. |
| **Dollars, not tokens** | Balances count only Circle's USDC mint, so fake "USDC" tokens airdropped to you can't fake your balance. |
| **Pay links** | Send money to anyone with a link. The link holds a one-time escrow key; claiming sweeps and closes the escrow. |
| **Live alerts** | QuickNode Streams watches every devnet block (filter + Key-Value list of Monyx wallets) and posts matches to a signed webhook. Payments land in one log and reach the app over Server-Sent Events. Matching requests settle themselves, and unpaid ones get a reminder. See `streams/README.md`. |
| **Grok Bot (agent API)** | `mx_` API keys let an AI assistant draft payments and requests with a weekly limit. Drafts land in "Waiting for your OK". A key can never move money by itself. |
| **Money pad** | Cash App-style keypad behind the $ tab, with keyboard shortcuts on laptops (Enter = Pay, Shift+Enter = Request). |

## Layout

```
/                 marketing site (index, features, how-it-works, safety, about, faq)
/app/             the wallet (app/index.html loads ../pay.js and ../pay.css)
/pro/             Monyx Pro: wallet tracer, agent API market, ledger
/grok-bot/        Grok Bot setup page and SKILL.md
/documentation/   API docs
/privacy/ /terms/ legal pages
```

Old links like `/#pay` or `/#claim/...` are forwarded into `/app/` by `assets/route.js`.

Source files:

- `pay.js`, `pay.css`: the wallet (risk check, passkey/password lock, sign-in, money pad, live events)
- `voice-parse.js`: sentence → intent parser (tests: `node voice-parse.test.js`)
- `server/index.ts`: Supabase edge function `monyx` (accounts, usernames, requests, avatars, sign-in backups, device links)
- `payments/index.ts`: `monyx-pay` (relay, test dollars, pay links, Streams webhook, live events, activity, agent API)
- `trace/` + `monyx-trace.js`: the "where did this money come from?" check on the pay sheet
- `predictions/index.ts`: `monyx-predictions` (Gemini prediction markets for Invest)
- `streams/`: QuickNode Streams filter, sample block and local test
- `voice/index.ts`: `monyx-voice` (ElevenLabs STT and TTS)
- `meter/index.ts`: `monyx-market` (pay-per-call API market over x402)
- `vendor/`: bundled Solana web3.js, so the site has no runtime CDN dependencies

## Security notes

- Every page ships a strict Content-Security-Policy meta tag: no inline scripts, no third-party scripts.
- Account keys are only stored encrypted when a lock is on. The server can hold a backup, but only as ciphertext it can't open.
- The relay re-checks every transaction server-side (`checkTx`): only expected programs, only the USDC mint, bank only as fee payer.
- GitHub Pages can't set response headers, so HSTS, `frame-ancestors` and `X-Content-Type-Options` need a proxy in front (for example Cloudflare). Turn on "Enforce HTTPS" in the Pages settings.

## Setup

### Money (USDC on devnet)
Dollars are Circle's devnet USDC (`4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`). The bank wallet (`9JBSMxHPKMDLyUMhwV2NzFNUikNoQfnJj82NyBoPNJRs`) pays network fees in SOL and hands out test dollars, so it needs both:
- **USDC:** https://faucet.circle.com → Solana Devnet → paste the bank address (20 USDC every 2 hours). New accounts get $5, then $2 a day (`MONYX_WELCOME_USD`, `MONYX_DAILY_USD`).
- **SOL:** https://faucet.solana.com. About 0.000005 SOL per payment, plus about 0.002 SOL the first time someone receives USDC.

### Voice
Add the Supabase secret `ELEVENLABS_API_KEY` (optional `ELEVENLABS_VOICE_ID`). Without it the app falls back to the browser's speech recognition, and typing always works.

### Faster RPC
The public devnet RPC rate-limits under load. Create a QuickNode Solana Devnet endpoint and set `SOLANA_RPC` (server) and `PUBLIC_RPC` (browsers, served from `/monyx-pay/info`).

### QuickNode Streams
Full steps are in `streams/README.md`. In short:
1. Create a Stream: Solana Devnet, dataset **Block**, from the latest block. Under "Modify the stream payload", paste `streams/filter.js`.
2. Destination: Webhook `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay/qn/webhook`, compression None, no custom headers.
3. Supabase secrets: `QN_STREAM_TOKEN` (the Stream's security token; deliveries without a valid `X-QN-Signature` get 401) and `QN_API_KEY` (Key-Value Store access, so Monyx can add each wallet to `monyx_wallets`).
4. Send devnet USDC to a Monyx account from any wallet; the app announces it within seconds.

## Deploying
Every path is relative. Copy this folder's contents to the site root (keep `CNAME` and `.nojekyll` in the monyx.pro repo).
