# Monyx

The money app you can talk to. Say "send Maya 20 for pizza", tap to confirm. Split bills, request money, hear when you get paid, and buy, sell and swap crypto. Test mode on Solana devnet.

## Deploying to monyx.pro
This folder is self-contained: every path is relative, and the Solana library ships in `vendor/`.
Copy the contents of this folder (not the folder itself) to the root of monyx.pro.

- `index.html`, `pay.js`, `pay.css`: the app
- `voice-parse.js`: turns a spoken sentence into pay / request / split / balance / activity (tests: `node voice-parse.test.js`)
- `pro/`: Monyx Pro (wallet tracer, agent API market, ledger)
- `llms.txt`, `agents.json`: instructions for AI agents using the API market
- `server/index.ts`: source of the Supabase edge function `monyx` (accounts, requests, profile pictures, exchange)
- `meter/index.ts`: source of the Supabase edge function `monyx-market` (pay-per-pull API market)
- `voice/index.ts`: source of the Supabase edge function `monyx-voice` (ElevenLabs speech-to-text and text-to-speech)

## Voice setup
Add the secret `ELEVENLABS_API_KEY` to the Supabase project (Edge Functions → Secrets). Optional: `ELEVENLABS_VOICE_ID` to change the voice.
Without the key, the app falls back to the browser's built-in speech recognition and speech, and typing always works.

The backend stays on Supabase, so nothing changes when the domain does.
