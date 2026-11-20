// Monyx voice: speech in, speech out, through ElevenLabs.
// Deployed as the Supabase edge function "monyx-voice", separate from "monyx"
// so a voice problem can never take payments down.
//
// The app records a short sentence ("send Josh 20 for pizza"), this function
// turns it into text, and the app turns the text into a payment the person
// still has to confirm with a tap. Voice never moves money on its own.
// The ElevenLabs key lives only here (secret ELEVENLABS_API_KEY).
import { createClient } from "npm:@supabase/supabase-js@2";

const ORIGINS = new Set(["https://monyx.pro", "https://www.monyx.pro", "https://joshkoppanalil.com", "https://www.joshkoppanalil.com"]);
// Only our own sites may call this API from a browser. Servers (Grok Bot) send no Origin and aren't affected.
const cors: Record<string, string> = {
  "Access-Control-Allow-Origin": "https://www.monyx.pro",
  "Vary": "Origin",
  "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};
const json = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });
const fail = (message: string, s = 400, error = "bad_request") => json({ error, message }, s);
const db = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const b64decode = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
async function me(req: Request) {
  const t = (req.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  if (!t) return null;
  const { data: s } = await db.from("monyx_sessions").select("user_id, expires_at").eq("token", t).maybeSingle();
  if (!s || new Date(s.expires_at) < new Date()) return null;
  return { id: s.user_id as string };
}

// Speech-to-text turns "send Josh 20 for pizza" into text; the app turns the
// text into a payment the person still has to confirm with a tap. Voice never
// moves money on its own. Text-to-speech reads confirmations and incoming
// payments aloud. The key stays here; browsers never see it.
const XI_KEY = Deno.env.get("ELEVENLABS_API_KEY") || "";
const XI_VOICE = Deno.env.get("ELEVENLABS_VOICE_ID") || "JBFqnCBsd6RMkjVDRZzb";
const XI = "https://api.elevenlabs.io/v1";
const AUDIO_MAX = 1_500_000;         // ~1 min of opus; commands are a few seconds
const LISTENS_PER_HOUR = 60, SAYS_PER_HOUR = 90;
const voiceHits = new Map<string, { t: number; n: number }>();
function voiceLimit(key: string, max: number) {
  const now = Date.now(); const w = voiceHits.get(key);
  if (!w || now - w.t > 3600_000) { voiceHits.set(key, { t: now, n: 1 }); return true; }
  return ++w.n <= max;
}
const VOICE_OFF = () => fail("Voice isn't switched on yet.", 503, "voice_off");
async function transcribe(bytes: Uint8Array, mime: string, hints: string[]) {
  const ext = /mp4|m4a|aac/.test(mime) ? "m4a" : /ogg/.test(mime) ? "ogg" : /wav/.test(mime) ? "wav" : "webm";
  const attempt = async (withHints: boolean) => {
    const f = new FormData();
    f.append("file", new Blob([bytes], { type: mime || "audio/webm" }), `voice.${ext}`);
    f.append("model_id", "scribe_v2");
    f.append("tag_audio_events", "false");
    // Friends' names, so "Saoirse" doesn't come back as "Sir Shah".
    if (withHints) for (const h of hints) f.append("keyterms", h);
    return await fetch(`${XI}/speech-to-text`, { method: "POST", headers: { "xi-api-key": XI_KEY }, body: f });
  };
  let r = await attempt(hints.length > 0);
  if (!r.ok && hints.length && (r.status === 400 || r.status === 422)) r = await attempt(false);
  if (!r.ok) throw new Error(`stt ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const j = await r.json();
  return String(j.text || "").trim();
}
async function speak(text: string) {
  const r = await fetch(`${XI}/text-to-speech/${XI_VOICE}?output_format=mp3_44100_64`, {
    method: "POST",
    headers: { "xi-api-key": XI_KEY, "content-type": "application/json", accept: "audio/mpeg" },
    body: JSON.stringify({ text, model_id: "eleven_flash_v2_5", voice_settings: { stability: 0.5, similarity_boost: 0.75 } }),
  });
  if (!r.ok) throw new Error(`tts ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const buf = new Uint8Array(await r.arrayBuffer());
  let bin = ""; for (let i = 0; i < buf.length; i += 0x8000) bin += String.fromCharCode(...buf.subarray(i, i + 0x8000));
  return btoa(bin);
}

Deno.serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  cors["Access-Control-Allow-Origin"] = ORIGINS.has(origin) ? origin : "https://www.monyx.pro";
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  const path = new URL(req.url).pathname.replace(/^.*?\/monyx-voice(?=\/|$)/, "") || "/";
  try {
    if (path === "/" || path === "/status") return json({ on: !!XI_KEY });
    const user = await me(req);
    if (!user) return fail("Please sign in again.", 401, "unauthorized");
    const body = req.method === "POST" ? await req.json().catch(() => ({})) : {};
    if (path === "/listen" && req.method === "POST") {
      if (!XI_KEY) return VOICE_OFF();
      if (!voiceLimit("l" + user.id, LISTENS_PER_HOUR)) return fail("That's a lot of talking. Try again in a bit, or type it.", 429, "rate_limited");
      let bytes: Uint8Array;
      try { bytes = b64decode(String(body.audio || "")); } catch { return fail("We couldn't hear that. Try again."); }
      if (bytes.length < 500) return fail("We didn't catch anything. Try again a little closer to the mic.");
      if (bytes.length > AUDIO_MAX) return fail("That was a bit long. Try a shorter sentence.");
      const hints = (Array.isArray(body.hints) ? body.hints : []).map((h: unknown) => String(h).slice(0, 40)).filter((h: string) => /^[\p{L}\p{N} ._'-]{2,40}$/u.test(h)).slice(0, 50);
      try { return json({ text: (await transcribe(bytes, String(body.mime || ""), hints)).slice(0, 300) }); }
      catch (e) { console.error("[monyx] listen:", e); return fail("We couldn't hear that. Try again, or type it.", 422, "voice_failed"); }
    }
    if (path === "/say" && req.method === "POST") {
      if (!XI_KEY) return VOICE_OFF();
      const text = String(body.text || "").replace(/\s+/g, " ").trim().slice(0, 240);
      if (!text) return fail("Nothing to say.");
      if (!voiceLimit("s" + user.id, SAYS_PER_HOUR)) return fail("Voice is resting for a bit.", 429, "rate_limited");
      try { return json({ audio: await speak(text) }); }
      catch (e) { console.error("[monyx] say:", e); return fail("Voice is unavailable right now.", 422, "voice_failed"); }
    }
    return fail("Unknown route.", 404, "not_found");
  } catch (e) {
    console.error("[monyx-voice]", e);
    return fail("Voice is unavailable right now.", 422, "voice_failed");
  }
});
