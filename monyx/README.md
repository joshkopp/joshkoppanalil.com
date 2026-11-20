# Monyx

**Just say who to pay.** Monyx is a voice-first dollar wallet on Solana. Say "send Josh 20 for pizza", read the plain-English preview, tap Pay. Before anything goes out, Monyx checks the destination for scams. No seed phrase to memorize, no gas, no tokens to understand. Test mode on Solana devnet.

- Live: https://www.monyx.pro (marketing site) and https://www.monyx.pro/app/ (the wallet)
- Built by Josh Koppanalil and Andrew Hu

## What it does

| Feature | How it works |
| --- | --- |
| **Voice payments** | The browser's speech recognition turns "send Andy 12.50 for movie tickets" into a payment preview; `voice-parse.js` handles pay, request, split, balance and activity. Monyx reads risky payments back out loud. |
| **Send-time risk check** | Every payment is tagged **High**, **Medium** or **Normal** before you can send. High: look-alike addresses (same first and last 4 characters as someone you've paid, or as your own), usernames one letter off from a contact, program or mint addresses, invalid addresses, your own account. Medium: not on Monyx, brand-new account, or $20+ and over half your balance to someone new. Nicknames can be added to outside addresses. On High the Pay button stays disabled until you tick "I understand". |
| **Passkey or password lock** | Signup asks for a lock. Passkey: the account key is encrypted with AES-GCM under a key derived (HKDF) from the passkey's WebAuthn PRF output, so browser storage only holds ciphertext. Devices without PRF use a password instead (PBKDF2, 600k iterations). |
| **Replay-proof sign-in** | The device signs "<site> wants you to sign in to Monyx" with a one-time server nonce and the time. Each nonce works once; the live-updates ticket is also one-time and expires in 30 s. |
| **Sign in anywhere** | Optional server backups hold only ciphertext: passkey backups are keyed by credential id; password backups are released only after a login proof (the server stores an HMAC of it, never the password) and wrong guesses are limited per account and network, with a daily cap per account. A new device can also be approved from a signed-in one (ECDH P-256 + AES-GCM, with matching safety emojis). |
| **Basic / Pro mode** | Basic is pay, request and split. Pro adds Invest, Predict and Trace tabs in the same app (sidebar on desktop). A short quiz suggests one at signup. |
| **Source tracer** | Before you pay, `trace/` (edge function `trace`, from the team's tracer package) follows the recipient's incoming SOL/USDC up to 2 hops on devnet and matches senders against `trace/risk-list.json`. High needs the "I checked" tick. Capped at 100 RPC calls per check, cached 10 min. Demo addresses are in `trace/README.md`. |
| **Invest + Predict = Gemini data** | `predictions/index.ts` (edge function `monyx-predictions`). Invest calls `?kind=prices` (Gemini `/v1/pricefeed` plus 6-hour candles for a 7-day sparkline, cached 30 s). Predict reads `/v1/prediction-markets/events`, keeps the 40 busiest open markets, cached 1 min. Every item links out to Gemini; Monyx never holds bets, coins or money for them. Hidden in Basic. |
| **Stay signed in** | Sessions last a year and renew while in use, so nobody is logged out unless they tap Log out. The key unlocks (passkey or password) only when sending money or showing the recovery key. |
| **Recovery key** | Every account gets a backup key (save to password manager, copy or download). It always works, even without a passkey, password or second device. |
| **No fees** | Gasless relay: the client builds the USDC transfer with the Monyx bank as fee payer, signs its part, and `/monyx-pay/relay` validates the instructions before co-signing. Users never need SOL. |
| **Dollars, not tokens** | Balances count only Circle's USDC mint, so fake "USDC" tokens airdropped to you can't fake your balance. |
| **Pay links** | Send money to anyone with a link. The link holds a one-time escrow key; claiming sweeps and closes the escrow. |
| **Live alerts** | While the app is open, the server watches your wallet and USDC account on Solana devnet every few seconds and logs any payment Monyx didn't relay itself. Relayed and outside payments land in one log and reach the app over Server-Sent Events. Matching requests settle themselves, and unpaid ones get a reminder. All on Solana's free public devnet RPC. |
| **Grok Bot (agent API)** | `mx_` API keys let an AI assistant draft payments and requests with a weekly limit. Drafts land in "Waiting for your OK". A key can never move money by itself. |
| **Money pad** | Cash App-style keypad behind the $ tab, with keyboard shortcuts on laptops (Enter = Pay, Shift+Enter = Request). |

## How Monyx uses Solana

Every dollar in Monyx is Circle's USDC on Solana devnet, and every payment is a real Solana transaction. Users hold their own keys and sign on their own device. The server only adds a fee-payer signature, after checking the transaction is exactly "this person sends USDC to that person" (`checkTx` in `payments/index.ts`). Solana's sub-second confirmation and tiny fees are what let one bank wallet pay everyone's fees, so users never need SOL.

| What | Address | How Monyx uses it |
| --- | --- | --- |
| SPL Token program | `TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA` | `TransferChecked` moves USDC between people; `CloseAccount` empties a pay link's escrow and returns its rent to the bank |
| Associated Token Account program | `ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL` | `CreateIdempotent` opens the recipient's USDC account on their first payment (fine if it already exists) |
| Memo program | `MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr` | The payment note ("🍕 Pizza") is stored on-chain with the payment |
| System program | `11111111111111111111111111111111` | Pays rent for new USDC accounts; SOL payments for the developer tools' API market |
| USDC mint (Circle, devnet) | `4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU` | The only token counted as dollars, so a fake "USDC" airdrop can't fake a balance; sending to the mint itself is flagged High |
| Monyx bank wallet | `9JBSMxHPKMDLyUMhwV2NzFNUikNoQfnJj82NyBoPNJRs` | Fee payer for every relayed payment (gasless) and source of free test dollars |
| Monyx API treasury | `4DJ1z4aUMe4VLg9qxaCHmfNhFKqyCaP7RC6dQBJFQvuw` | Receives SOL for paid calls in the developer API market (`meter/`, x402) |
| Demo trace wallets | `CV3m8fpsm59bxvEZxLP2Mp68fxeqSuCEru6UjuJ6YuJu` (High, 2 hops), `5ViskngPpuFcScZrzzsZt6TuoaZKC2ZfUKgFjbdUPjiD` (Medium) | A real 2-hop chain on devnet from a labeled wallet, for showing the source-of-funds check |
| RPC | `https://api.devnet.solana.com` | Solana's free public devnet RPC, read through the cached `/monyx-pay/rpc` proxy |

Other Solana features Monyx relies on:
- **Ed25519 sign-in:** the device signs a one-time, site-bound message with its Solana key; the server verifies it with Web Crypto.
- **On-curve check:** before you pay, `PublicKey.isOnCurve` catches addresses no one holds a key for (program accounts), which would trap the money. They're tagged High.
- **Source-of-funds trace:** `trace/` walks incoming SOL and USDC transfers up to 2 hops back with `getSignaturesForAddress` and `getTransaction`, and matches senders against `trace/risk-list.json`.
- **Live alerts from the chain:** while the app is open, `monyx-pay` reads the user's wallet and USDC account on-chain every few seconds and logs payments Monyx didn't relay itself.
- **Pay links:** a fresh one-off keypair holds the money; its key only exists in the part of the link after `#`.

## Grok Bot's role

Grok Bot is Monyx's money assistant. A user creates a scoped `mx_` key in the app (Me → Pro settings → AI assistant), and with our `grok-bot/SKILL.md` the Bot can check the balance and activity, ask friends for money, split bills and draft payments. It can never send money: every draft waits on the user's home screen for a tap, goes through the same risk check as any payment, and counts toward a weekly limit enforced on the server. How we used Grok while building Monyx is in the exported chat, [`grok-bot/chat-export.md`](grok-bot/chat-export.md). The Bot's template (instructions, routines, approval rules) is in `grok-bot/TEMPLATE.md`.

## Layout

```
/                 marketing site (index, features, how-it-works, safety, about, faq)
/app/             the wallet (app/index.html loads ../pay.js and ../pay.css)
/pro/             Developer tools: wallet tracer, agent API market, ledger
/grok-bot/        Grok Bot setup page and SKILL.md
/documentation/   API docs
/privacy/ /terms/ legal pages
```

Old links like `/#pay` or `/#claim/...` are forwarded into `/app/` by `assets/route.js`.

Source files:

- `pay.js`, `pay.css`: the wallet (risk check, passkey/password lock, sign-in, money pad, live events)
- `voice-parse.js`: sentence → intent parser
- `tests/`: automated tests (see Tests below)
- `server/index.ts`: Supabase edge function `monyx` (accounts, usernames, requests, avatars, sign-in backups, device links)
- `payments/index.ts`: `monyx-pay` (relay, test dollars, pay links, on-chain watcher, live events, activity, agent API)
- `trace/` + `monyx-trace.js`: the "where did this money come from?" check on the pay sheet
- `predictions/index.ts`: `monyx-predictions` (Gemini crypto prices for Invest, prediction markets for Predict)
- `meter/index.ts`: `monyx-market` (pay-per-call API market over x402)
- `vendor/`: bundled Solana web3.js, so the site has no runtime CDN dependencies

## Security notes

- Every page ships a strict Content-Security-Policy meta tag: no inline scripts, no third-party scripts.
- Account keys are only stored encrypted when a lock is on. The server can hold a backup, but only as ciphertext it can't open.
- The relay re-checks every transaction server-side (`checkTx`): only expected programs, only the USDC mint, bank only as fee payer.
- GitHub Pages can't set response headers, so HSTS, `frame-ancestors` and `X-Content-Type-Options` need a proxy in front (for example Cloudflare). Turn on "Enforce HTTPS" in the Pages settings.

## Backend setup (Supabase)

The site is static (GitHub Pages); everything else is Supabase Postgres plus five Deno edge functions. To run your own copy:

1. **Create a Supabase project** and install the [Supabase CLI](https://supabase.com/docs/guides/cli). Run `supabase login`, then `supabase link --project-ref <your-ref>`.
2. **Create the tables:** open SQL Editor in the dashboard, paste `supabase/schema.sql` and run it. It creates every `monyx_*` table (row-level security on, so only the edge functions can reach them), the `monyx_adjust` function and the public `avatars` storage bucket.
3. **Make a bank wallet** (pays fees and hands out test dollars):
   ```
   solana-keygen new --no-bip39-passphrase -o bank.json
   solana address -k bank.json
   ```
   Fund that address with devnet SOL (https://faucet.solana.com) and devnet USDC (https://faucet.circle.com → Solana Devnet). The bank key is read from the database, not from an environment variable: store the contents of `bank.json` (a JSON array of 64 numbers) in SQL Editor:
   ```sql
   insert into monyx_config (key, value) values ('bank_secret', '<paste bank.json here>');
   ```
4. **Set secrets** (optional; everything has a default). `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are provided automatically.
   ```
   supabase secrets set MONYX_PEPPER=$(openssl rand -hex 32)   # keys the password-login hashes (defaults to the service key)
   supabase secrets set MONYX_WELCOME_USD=5 MONYX_DAILY_USD=2  # test dollars per signup / per day
   supabase secrets set SOLANA_RPC=https://api.devnet.solana.com  # any free devnet RPC
   ```
   Others: `PUBLIC_RPC`, `MONYX_BANK_FLOOR_USD`, `MONYX_REMIND_HOURS`, `MONYX_OUTSIDE_MIN_USD`, `MONYX_OUTSIDE_MIN_SOL`.
5. **Deploy the edge functions.** Monyx does its own auth (signed sign-in plus session tokens), so JWT checks are off:
   ```
   supabase functions deploy monyx             --no-verify-jwt   # server/index.ts
   supabase functions deploy monyx-pay         --no-verify-jwt   # payments/index.ts
   supabase functions deploy trace             --no-verify-jwt   # trace/ (index.ts, core.js, risk-list.json)
   supabase functions deploy monyx-predictions --no-verify-jwt   # predictions/index.ts
   supabase functions deploy monyx-market      --no-verify-jwt   # meter/index.ts (developer tools only)
   ```
   The CLI deploys from `supabase/functions/<name>/`, so copy each folder there under the function's name first (for example `cp -r payments supabase/functions/monyx-pay`).
6. **Point the site at your project:** replace `nvfxdzxdlizznrknmunl` with your project ref in `pay.js` (`API`), `monyx-trace.js` (`TAPI`), `pro/app.js` (`METER`) and the `connect-src`/`img-src` lines of `app/index.html`'s Content-Security-Policy. Add your site's origin to `ORIGINS` in `server/index.ts`, `payments/index.ts` and `predictions/index.ts`, and to `allowedOrigin` in `trace/index.ts`.
7. **Serve the site** from any static host, or locally with `python3 -m http.server` (use a hostname you added to `ORIGINS`). Open `/app/`, sign up, and tap Add money.

To check it: `curl https://<ref>.supabase.co/functions/v1/monyx-pay/info` returns your bank address.

### Money (USDC on devnet)
Dollars are Circle's devnet USDC (`4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU`). The bank wallet (`9JBSMxHPKMDLyUMhwV2NzFNUikNoQfnJj82NyBoPNJRs`) pays network fees in SOL and hands out test dollars, so it needs both:
- **USDC:** https://faucet.circle.com → Solana Devnet → paste the bank address (20 USDC every 2 hours). New accounts get $5, then $2 a day (`MONYX_WELCOME_USD`, `MONYX_DAILY_USD`).
- **SOL:** https://faucet.solana.com. About 0.000005 SOL per payment, plus about 0.002 SOL the first time someone receives USDC.

### Voice
Voice uses the browser's built-in speech recognition and speech synthesis, so there's nothing to set up. Browsers without it (Firefox) type the same commands.

### RPC
Everything runs on Solana's free public devnet RPC (`https://api.devnet.solana.com`); no paid provider or API key is needed. Browsers read through `/monyx-pay/rpc`, which caches and retries, so the public endpoint's rate limits don't reach users. To use another free devnet endpoint (a Helius or Alchemy free tier, say), set the `SOLANA_RPC` secret.

## Tests
`cd tests && npm install && npm test` runs 76 checks against the real source files (functions are read straight out of them, so the tests can't drift from what ships):
- `app.test.mjs`: amounts (commas, `$`/`US$`, hidden characters, negatives, `1e2`, cents) and account numbers (`pay.js`)
- `relay.test.mjs`: the relay's `checkTx` co-signs a normal payment and refuses 11 attack shapes: wrong fee payer, draining the bank, extra SOL transfer, two transfers, unknown recipient, mismatched recipient, zero or over-cap amounts, unknown programs, unsigned, oversized memo (`payments/index.ts`)
- `trace.test.mjs`: the source tracer finds a flagged wallet 2 hops back, skips the Monyx bank, survives rate limits, and says "incomplete" (never Normal) when the network is down (`trace/core.js`)
- `../voice-parse.test.js`: 33 spoken and typed commands

## Deploying
Every path is relative. Copy this folder's contents to the site root (keep `CNAME` and `.nojekyll` in the monyx.pro repo).
