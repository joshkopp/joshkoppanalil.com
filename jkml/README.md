# JKML · Word Bomb

A BombParty-style multiplayer word game (1–16 players) at `/jkml/`. Hidden: type `jkml` in the homepage access code box.

- **Rooms:** 4-letter codes. Players take a seat in the lobby, and the host picks lives (1–3), prompt difficulty and minimum fuse, then starts. Up to 16 seated players. People who join mid-game spectate until the next round.
- **Gameplay:**
  - On your turn, type a word containing the syllable on the bomb.
  - The fuse is random and hidden.
  - A word must be in the dictionary and not used yet this game.
  - Using all 21 bonus letters (A–V except K) gives back a heart, up to 3.
  - Prompts get slightly harder as the game goes on.
  - Last player alive wins. Starting with one seated player is a practice run.
- **Networking:** the same transport as RECESS (`js/mesh.js`). Supabase handles presence and signalling, and gameplay travels over WebRTC data channels:
  - The host's browser is the referee. It owns turns, the fuse, lives and word validation.
  - Live typing goes straight to every player.
  - If the host leaves, the next player takes over.
  - Reloading keeps your seat (Rejoin).
- **Extras:** optional voice chat (everyone hears everyone), per-player mute, and synthesized sounds.
- **Data:**
  - `words.txt`: ENABLE word list (public domain), 172k words.
  - `prompts.json`: every 2–3 letter syllable found in at least 30 words, with its word count, used for difficulty.
- **Local test:** `?local` lets several windows of the same browser play each other.
