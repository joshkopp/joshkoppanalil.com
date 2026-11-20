# Source tracer ("where did this money come from?")

Edge function `trace` (from the teammate's `monyx-tracer.zip`). Before a payment, the confirm sheet
asks it about the recipient's account; it walks incoming Solana devnet transfers up to 2 hops and
matches senders against `risk-list.json`. Labels are only High, Medium or Normal, always with
"Risk estimate only, not legal or financial advice."

- RPC: Solana's free public devnet endpoint, or `SOLANA_RPC` if it names another devnet endpoint.
  Mainnet URLs are refused. Each result names the provider in `rpcProvider` (never the URL).
- Limits: 2 hops, 10 transactions per wallet, 100 RPC calls per trace, 10-minute cache,
  15 checks per visitor per 10 minutes.
- Frontend: `monyx-trace.js` (site root), loaded after `pay.js`; `confirmPay` mounts it under the
  instant risk card. A High result needs the "I checked this with …" box before Pay unlocks.

## Demo chain (built Nov 19, 2026 with test USDC from the Monyx bank)

| Wallet | Address | Expected result |
|---|---|---|
| Scam wallet (demo), listed High | `HcwHwZLTjbhEcCtb9rdm1E4Xjm6pJoLuTFPH1L6iXvr5` | High, on the list |
| Middle (unlisted, got $0.60 from scam) | `AFDv2jabn9xZtjB6pa1D2iSSWEesR7XVwr8BDarW6zEF` | High, 1 hop back |
| Recipient (got $0.30 from middle) | `CV3m8fpsm59bxvEZxLP2Mp68fxeqSuCEru6UjuJ6YuJu` | **High, 2 hops back** |
| Mixer (demo), listed Medium | `8cmSX8eE3h86ZSVub8h3yzASidTn7pv2XsMUPScrYffv` | Medium, on the list |
| Recipient 2 (got $0.20 from mixer) | `5ViskngPpuFcScZrzzsZt6TuoaZKC2ZfUKgFjbdUPjiD` | Medium, 1 hop back |

Demo: Pay → paste the Recipient address → the card under the risk check says
"This money came from a High risk source, 2 hops back." The demo wallets' secret keys were never
stored, so nobody can move that test money.
