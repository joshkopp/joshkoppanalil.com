# Monyx

**Just say who to pay.** Monyx is a voice-first dollar wallet on Solana. Say "send Maya 20 for pizza", read the plain-English preview, tap Pay. Before anything goes out, Monyx checks the destination for scams. No seed phrase to memorize, no gas, no tokens to understand. Test mode on Solana devnet.

- Live: https://www.monyx.pro (marketing site) and https://www.monyx.pro/app/ (the wallet)
- Built by Josh Koppanalil and Andrew Hu for the UBC 2026 hackathon

## What it does

| Feature | How it works |
| --- | --- |
| **Voice payments** | ElevenLabs speech-to-text turns "send Jordan 12.50 for movie tickets" into a payment preview; `voice-parse.js` handles pay, request, split, balance and activity. Monyx reads risky payments back out loud. |
| **Send-time risk check** | Every payment is tagged **High**, **Medium** or **Normal** before you can send. High: look-alike addresses (same first and last 4 characters as someone you've paid), usernames one letter off from a contact, program or mint addresses, invalid addresses. Medium: not on Monyx, brand-new account, or more than half your balance to someone new. On High the Pay button stays disabled until you tick "I understand". |
| **Passkey lock by default** | Signup offers Face ID / fingerprint lock as a step. The account key is encrypted with AES-GCM using a key derived (HKDF) from the passkey's WebAuthn PRF output, so browser storage only holds ciphertext. Devices without PRF fall back to the recovery key. |
| **Recovery key** | Every account gets a backup key (save to password manager, copy or download). It's how you get in on a new device or if you lose your passkey. |
| **No fees** | Gasless relay: the client builds the USDC transfer with the Monyx bank as fee payer, signs its part, and `/monyx-pay/relay` validates the instructions before co-signing. Users never need SOL. |
| **Dollars, not tokens** | Balances count only Circle's USDC mint, so fake "USDC" tokens airdropped to you can't fake your balance. |
| **Pay links** | Send money to anyone with a link. The link holds a one-time escrow key; claiming sweeps and closes the escrow. |
| **Live alerts** | Payments inside Monyx show up instantly; outside payments arrive through QuickNode Streams. |
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

- `pay.js`, `pay.css`: the wallet (risk check, passkey lock, money pad, signup)
- `voice-parse.js`: sentence → intent parser (tests: `node voice-parse.test.js`)
- `server/index.ts`: Supabase edge function `monyx` (accounts, usernames, requests, avatars)
- `payments/index.ts`: `monyx-pay` (relay, test dollars, pay links, inbox, Streams webhook, agent API)
- `payments/quicknode-filter.js`: QuickNode Streams filter
- `voice/index.ts`: `monyx-voice` (ElevenLabs STT and TTS)
- `meter/index.ts`: `monyx-market` (pay-per-call API market over x402)
- `vendor/`: bundled Solana web3.js, so the site has no runtime CDN dependencies

## Security notes

- Every page ships a strict Content-Security-Policy meta tag: no inline scripts, no third-party scripts.
- Account keys never leave the device. With passkey lock on, they are only stored encrypted.
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
1. Add a long random Supabase secret `QN_STREAMS_KEY`.
2. In QuickNode, create a Stream: Solana, Devnet, dataset **Block**, from the latest block.
3. "Modify the payload" with `payments/quicknode-filter.js`.
4. Webhook URL: `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay/streams?key=<QN_STREAMS_KEY>`.
5. Send devnet USDC to a Monyx account from any wallet; the app announces it within seconds.

## Deploying
Every path is relative. Copy this folder's contents to the site root (keep `CNAME` and `.nojekyll` in the monyx.pro repo).
