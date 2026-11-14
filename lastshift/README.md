# THE LAST SHIFT

Co-op multiplayer horror game (1–4 players) at `/lastshift/`. Hidden: type `horror` into the homepage access code box.

## How it works

- **Rendering:** three.js 0.160 (loaded from unpkg via import map), post-processing (bloom + a VHS/film shader), flashlight shadows, fog, dust motes.
- **Rooms:** Supabase Realtime on the existing `casino` project. One channel per room: `lastshift-<CODE>`.
  - *Presence* holds who is in the room, their name, ready state and phase (`lobby` / `game`).
  - *Broadcast* carries everything else: chat, player state (~7 Hz), world state, effects, requests and WebRTC voice signalling.
  - No database tables or migrations are needed. The publishable key is public by design.
- **Authority:** the host's browser (whoever joined the room first) runs the monster AI, the world state (items, doors, fuses, power, exits, downed/revived/taken) and win/lose checks. Other clients send requests (`req`) and render the host's state. If the host disconnects, the next player in join order takes over from the last replicated state automatically.
- **Voice:** WebRTC mesh between players (STUN only), signalled over the room channel. Volume falls off with distance and is muffled through walls. The monster can hear players who talk.
- **Audio:** every sound is synthesized with Web Audio. There are no sound files.
- **Assets:** reuses the PBR textures in `/fps/tex/`; everything else (creature, players, props, signs) is procedural.

## Files

| File | What it does |
| --- | --- |
| `index.html` | UI: menu, lobby, settings, HUD, keypad, end screens |
| `js/main.js` | Game client: rounds, host authority, player controller, interaction, director, HUD |
| `js/map.js` | Facility layout, per-round randomization, collision, line of sight, A* pathfinding |
| `js/world.js` | Builds and animates the 3D facility (walls, doors, props, lamps, decals) |
| `js/monster.js` | Creature model + host-side AI (roam, investigate, chase, search, locker grab, stalking) |
| `js/net.js` | Supabase room transport (+ local test transports) |
| `js/voice.js` | Proximity voice chat |
| `js/audio.js` | Synthesized positional audio |
| `js/players.js` | Teammate avatars + VHS shader |

## Setup / running locally

Nothing to install. Serve the repo root with any static server (`python3 -m http.server`) and open `/lastshift/`. ES modules need `http://`, not `file://`.

Test flags (not linked anywhere):
- `?offline`: single player with no network.
- `?bc`: two tabs in the same browser talk over `BroadcastChannel` instead of Supabase.
- `?room=CODE`: prefills the join code (this is what the lobby's **Link** button copies).

If Supabase Realtime ever stops connecting, check the project is not paused and that Realtime allows public channels (the casino chat uses the same setting).

## Gameplay loop

1. Find 3 fuses and install them at the breaker in Electrical (basement). That restores power, and the creature gets more aggressive.
2. Pick an exit:
   - **Main gate:** get the security keycard, open Security, read the exit code on the monitor, and enter it at the reception keypad.
   - **Sewer:** open the drain valve in the Boiler Room (needs power), find bolt cutters, and cut the grate in the tunnels.
3. Everyone still standing has to reach the exit. Downed players bleed out after 60s unless a teammate holds E on them.

Each round randomizes item spots, the exit code, which hidden passages exist, which doors start open, where the monster spawns, lamp failures, wall writing and scare timing.
