# RECESS: Hide & Seek + Tag

Multiplayer party game (2–12 players) at `/recess/`. Hidden: type `recess` into the homepage access code box.

## Modes and maps

**Hide & Seek: Westbrook Middle School.** Two floors and 52 rooms: gym, cafeteria, kitchen, library, labs, computer labs, locker rooms, bathrooms, closets, janitor rooms, nurse, auditorium, attic and two hidden rooms. It has two staircases, crawl vents (crouch), a crawl tunnel, and fake walls that act as secret passages. There are 154 hiding spots of 10 types:

- **Risky** spots (desk, bed, curtain, bookshelf, couch) show a giveaway like shoes or a shoulder, and the seeker searches them fast.
- **Medium** spots (locker, cabinet, closet) show nothing.
- **Safe** spots (boxes, wall compartments) take the seeker the longest to search.

The seeker is locked in the principal's office for 20 s. Hiders win if anyone survives the timer.

**Tag: Funtopia Complex.** Three floors and 52 rooms on a looping concourse grid. It has two atriums with balconies and stairs on both sides, maintenance tunnels underneath with service stairs, plus an arcade, indoor playground, laser maze, cafeteria, offices, storage, theater, trampoline park and rooftop garden. Every room has 2+ exits. IT is 12% faster. A tag freezes the new IT for 2 s and blocks tag-backs for 3.5 s. Least time as IT after 4 minutes wins.

## Networking

- **Supabase Realtime** (existing `casino` project) is used only for presence (who's in room `recess-<code>`), WebRTC signalling, and a low-rate fallback relay. It needs no tables. This keeps usage far under the free tier (100 msgs/s, where every recipient counts).
- **WebRTC** between every pair of players carries proximity voice plus two data channels: reliable for events and unreliable for movement.
- **Authority:** the host's browser (first in the room) is the authoritative server:
  - validates every movement update (speed cap per role, wall/prop collision, floor changes only on stairs, seeker confined during the hide phase) and sends corrections
  - owns phases, timers, roles, the random seeker / first IT, and hiding-spot occupancy
  - decides every tag (IT epoch number so duplicate or racing tags are dropped, lag-compensated distance, line of sight, freeze, no tag-backs) and every find or search
  - sends each player its own snapshot: the seeker never receives hidden players' positions
- **Host leaves:** the next player in join order rebuilds the state from their latest snapshot.
- **Reconnect:** the room and player id live in `sessionStorage`. Reloading shows **Rejoin**, and the host restores your role and stats (60 s window).
- **Chat:** lobby chat is global. In-game chat is proximity-based and routed by the host. Spectators only reach spectators.
- **Voice:** volume falls off with distance and is muffled through walls or from inside hiding spots. You can mute your mic (M), mute all sound (N), use push-to-talk (V), and mute or report individual players.

## Files

| File | What it does |
| --- | --- |
| `index.html` | UI: menu, lobby, settings, how-to, HUD, results |
| `js/main.js` | Client + host simulation for both modes, cameras (Q: 1st/3rd person), spectator, HUD |
| `js/maps.js` | Multi-floor grid engine (stairs, holes, vents, fake walls, collision, LOS) + both map layouts |
| `js/world.js` | Builds and lights both maps, props, hiding spots and their giveaways |
| `js/mesh.js` | Supabase presence/signalling + WebRTC data/voice mesh |
| `js/avatar.js` | Animated characters, name tags, IT ring, speaking indicator |
| `js/audio.js` | Synthesized SFX + music (suspense loop, chiptune loop) |

## Testing locally

Serve the repo root (`python3 -m http.server`) and open `/recess/`. Add `?local` to use a BroadcastChannel instead of Supabase for signalling, so several windows of the same browser can play each other. `?local` also allows a solo start.
