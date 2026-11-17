# Monyx: money with friends

Use this skill whenever your person asks about money they've sent or received, wants to ask a friend for money, split a cost, or pay someone back. Monyx is a payments app (like Venmo) that runs on dollars (USDC). Your person approves every payment themselves; you can't send money, and you shouldn't try to.

## What you can do
- **Check** their balance and recent payments.
- **Look up** people by name or @username.
- **Ask** someone for money (a request). This is safe: it only asks.
- **Draft** a payment for them to approve. It appears in their Monyx app under "Waiting for your OK" with a Review button. Nothing moves until they tap Pay.
- **List** open requests and your drafts.

You can't send, move, or withdraw money, see their recovery key, or change their account. If they ask you to "just send it", draft it and tell them it's waiting for their tap.

## Connection
- Base URL: `https://nvfxdzxdlizznrknmunl.supabase.co/functions/v1/monyx-pay`
- Every call sends the header `Authorization: Bearer <MONYX_KEY>`. The key starts with `mx_` and is stored in your Monyx credential. Never show it, log it, or include it in messages.
- Bodies are JSON with `Content-Type: application/json`. Amounts are US dollars as numbers (`12.5`). Usernames may include or omit the `@`.
- Errors come back as `{ "error": "...", "message": "..." }`. The message is written for people, so you can repeat it to them.

## Endpoints
| Method and path | What it does | Body or query |
|---|---|---|
| `GET /agent/me` | Name, @username, balance, this key's weekly draft limit, and how much has been drafted this week | none |
| `GET /agent/activity?limit=20` | Recent payments, newest first: `direction` (`in`/`out`), `usd`, `with` (@username), `note`, `at` | `limit` 1–50 |
| `GET /agent/people?q=maya` | Find people by name or username | `q` |
| `GET /agent/requests` | Open requests: `they_asked_you` or `you_asked_them` | none |
| `POST /agent/requests` | Ask someone for money | `{ "to": "@maya", "usd": 15, "note": "☕ Coffee" }` |
| `POST /agent/drafts` | Draft a payment for them to approve | `{ "to": "@maya", "usd": 20, "note": "🍕 Pizza", "reason": "Your half of Friday's pizza" }` |
| `GET /agent/drafts` | Your drafts and whether each was paid or dismissed | none |

## How to behave
1. **Find the person first.** If a name could be more than one person, call `/agent/people` and ask your person which one they mean. Never guess a recipient.
2. **Confirm before drafting or requesting** if anything is unclear: who, how much, what for. Restate it in one line ("Draft $20 to @maya for pizza?").
3. **Write short notes**, with an emoji if it fits (🍕 🏠 ☕ 🚗 🎁 🎟️). Use `reason` to tell your person, in their words, why you drafted it.
4. **Respect the weekly limit.** If a draft would go over it, `/agent/drafts` returns `over_limit`. Tell them, and don't split it into smaller drafts to get around it.
5. **Splitting:** for "split $60 with Maya and Jordan", divide evenly unless told otherwise, then send one **request** per friend for their share. The person who paid asks the others.
6. **Report plainly** what happened: "I asked Maya for $20. She'll see it next time she opens Monyx." or "Drafted $12 to Jordan. It's waiting for your tap in Monyx."
7. Monyx is in **test mode** (devnet USDC). Say so if they seem to think it's real money.

## Good routines to offer
- **Rent day (monthly, on the 1st):** request each roommate's share of rent.
- **Weekly money recap (Sunday evening):** read `/agent/activity` and summarise who paid whom, totals in and out, and any open requests.
- **Nudge (daily):** if a request you sent is more than 3 days old, remind your person and offer to send a friendly follow-up message.
- **After a group dinner:** when they say "dinner was $84 with Maya, Jordan and Sam", split it and send the requests.

## Example
They say: "I owe Maya for the concert tickets, it was like 42.50"
1. `GET /agent/people?q=maya` returns one match: `@maya`, Maya Chen.
2. "Draft $42.50 to Maya Chen (@maya) for concert tickets?" They say yes.
3. `POST /agent/drafts` with `{ "to": "@maya", "usd": 42.5, "note": "🎟️ Concert tickets", "reason": "You said you owe Maya for the concert tickets" }`
4. Reply: "Done. $42.50 to Maya is waiting for your OK in Monyx. Open the app and tap Review."
