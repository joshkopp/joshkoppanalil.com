// The Back Room 3D: players + dealers. Low-poly people with procedural animation, name tags and chat bubbles.
import * as THREE from 'three';
import { FONT, rr } from './tex.js';

export const OUTFITS = [['suit', 'Suit'], ['tux', 'Tuxedo'], ['dealer', 'Dealer vest'], ['hoodie', 'Hoodie'], ['dress', 'Gown']];
export const HATS = [['none', 'None'], ['top', 'Top hat'], ['fedora', 'Fedora'], ['cowboy', 'Cowboy'], ['crown', 'Crown'], ['cap', 'Cap'], ['beanie', 'Beanie'], ['halo', 'Halo'], ['horns', 'Horns']];
export const COLORS = ['#1d1f2b', '#7a0f1c', '#0d4a35', '#1f3a7a', '#e8c46a', '#d9d3c7', '#5b2a86', '#ff6fb5', '#ff8a00', '#111111', '#2aa198', '#8b5a2b'];
export const SKINS = ['#ffdbac', '#f1c27d', '#e0ac69', '#c68642', '#a86b4a', '#8d5524', '#5c3a21'];
export const HAIRS = ['#0d0d0d', '#2b1b10', '#7a4a1c', '#d9b36b', '#8c2a14', '#c0c0c0', '#ff4fa3', '#3aa0ff'];
export const EMOTES = [['wave', '👋', 'Wave'], ['cheer', '🎉', 'Cheer'], ['dance', '💃', 'Dance'], ['clap', '👏', 'Clap'], ['dab', '😎', 'Dab'], ['laugh', '😂', 'Laugh'], ['flex', '💪', 'Flex'], ['cry', '😭', 'Cry']];
export const hashStr = s => { let h = 7; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
export const nameColor = n => `hsl(${[...String(n)].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 360, 7)},70%,72%)`;
export function randomLook(seed) {
  const h = hashStr(seed || Math.random());
  return { outfit: OUTFITS[h % 4][0], suit: COLORS[(h >> 3) % COLORS.length], skin: SKINS[(h >> 6) % SKINS.length], hair: HAIRS[(h >> 9) % 5], hat: ['none', 'none', 'top', 'fedora', 'cap', 'beanie'][(h >> 12) % 6], glasses: ((h >> 15) & 3) === 0 };
}

const MATS = new Map();
const mat = (c, r = .7, m = 0) => { const k = c + r + m; if (!MATS.has(k)) MATS.set(k, new THREE.MeshStandardMaterial({ color: new THREE.Color(c), roughness: r, metalness: m })); return MATS.get(k); };
const GEO = {};
const capsule = (r, l) => { const k = 'c' + r + l; if (!GEO[k]) { const g = new THREE.CapsuleGeometry(r, l, 4, 10); g.translate(0, -l / 2 - r * .4, 0); GEO[k] = g; } return GEO[k]; };
const sphere = (r, w = 14, h = 10) => { const k = 's' + r + w; return GEO[k] || (GEO[k] = new THREE.SphereGeometry(r, w, h)); };

function spriteCanvas(w, h) {
  const cv = document.createElement('canvas'); cv.width = w; cv.height = h;
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, fog: false }));
  sp.renderOrder = 30; return { cv, g: cv.getContext('2d'), tex, sp };
}

export function makeAvatar(look, { name = '', npc = false, admin = false } = {}) {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const parts = {};
  let L = { ...look };

  function build() {
    body.clear();
    const jacketC = L.outfit === 'dealer' ? '#e2ddd2' : L.outfit === 'tux' ? '#0c0c0e' : L.suit;
    const jacket = mat(jacketC, L.outfit === 'hoodie' ? .9 : .6), pantsC = L.outfit === 'dress' ? L.skin : L.outfit === 'hoodie' ? '#22252e' : L.outfit === 'dealer' ? '#111' : L.outfit === 'tux' ? '#0c0c0e' : L.suit;
    const pants = mat(pantsC, .75), skin = mat(L.skin, .6), hair = mat(L.hair || '#1a1a1a', .85), shoe = mat(L.outfit === 'hoodie' ? '#c9c9c9' : '#0a0a0a', .5, .1), dark = mat('#0a0a0a', .3);
    const hips = new THREE.Group(); hips.position.y = .92; body.add(hips); parts.hips = hips;
    const pelvis = new THREE.Mesh(sphere(.19), L.outfit === 'dress' ? mat(L.suit, .5) : pants); pelvis.scale.set(1.05, .6, .78); pelvis.position.y = .04; hips.add(pelvis);
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(.205, .34, 6, 12), jacket); torso.position.y = .34; torso.scale.set(1.05, 1, .72); torso.castShadow = true; hips.add(torso);
    if (L.outfit === 'suit' || L.outfit === 'tux') {
      const shirt = new THREE.Mesh(new THREE.BoxGeometry(.11, .2, .02), mat('#e6e1d6', .6)); shirt.position.set(0, .5, -.145); shirt.rotation.x = -.18; hips.add(shirt);
      if (L.outfit === 'suit') { const tie = new THREE.Mesh(new THREE.BoxGeometry(.04, .2, .02), mat('#b01030', .5)); tie.position.set(0, .46, -.158); tie.rotation.x = -.18; hips.add(tie); }
    }
    if (L.outfit === 'dealer') { const vest = new THREE.Mesh(new THREE.CapsuleGeometry(.212, .26, 6, 12), mat('#111114', .45)); vest.position.y = .3; vest.scale.set(1.06, 1, .74); hips.add(vest); }
    if (L.outfit === 'dealer' || L.outfit === 'tux') { for (const s of [-1, 1]) { const b = new THREE.Mesh(new THREE.ConeGeometry(.035, .07, 4), mat('#c8102e', .5)); b.rotation.z = s * Math.PI / 2; b.position.set(s * .035, .6, -.15); hips.add(b); } }
    if (L.outfit === 'hoodie') { const hood = new THREE.Mesh(new THREE.TorusGeometry(.12, .05, 8, 16), jacket); hood.position.set(0, .6, .06); hood.rotation.x = Math.PI / 2.4; hips.add(hood); const pocket = new THREE.Mesh(new THREE.BoxGeometry(.24, .1, .02), mat(L.suit, .95)); pocket.position.set(0, .22, -.15); hips.add(pocket); }
    if (L.outfit === 'dress') { const sk = new THREE.Mesh(new THREE.CylinderGeometry(.2, .4, .62, 16, 1, true), mat(L.suit, .5)); sk.material = sk.material.clone(); sk.material.side = THREE.DoubleSide; sk.position.y = -.24; sk.castShadow = true; hips.add(sk); }
    const neck = new THREE.Group(); neck.position.y = .64; hips.add(neck);
    const head = new THREE.Group(); head.position.y = .16; neck.add(head); parts.head = head;
    const skull = new THREE.Mesh(sphere(.17, 18, 14), skin); skull.scale.set(.95, 1.05, 1); skull.castShadow = true; head.add(skull);
    { const hr = new THREE.Mesh(new THREE.SphereGeometry(.178, 18, 12, 0, Math.PI * 2, 0, Math.PI * .52), hair); hr.position.set(0, .02, .012); hr.rotation.x = .25; head.add(hr); }
    for (const s of [-1, 1]) { const e = new THREE.Mesh(sphere(.022, 8, 6), dark); e.position.set(s * .06, .02, -.155); head.add(e); }
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(.06, .012, .01), mat('#6a2020', .6)); mouth.position.set(0, -.06, -.163); head.add(mouth); parts.mouth = mouth;
    if (L.glasses) { const gm = mat('#050505', .15, .6); for (const s of [-1, 1]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.09, .05, .02), gm); l.position.set(s * .06, .025, -.168); head.add(l); } const br = new THREE.Mesh(new THREE.BoxGeometry(.05, .012, .012), gm); br.position.set(0, .04, -.17); head.add(br); }
    hat(head);
    parts.arms = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * .27, .55, 0); hips.add(p); const u = new THREE.Mesh(capsule(.062, .22), jacket); u.castShadow = true; p.add(u); const e = new THREE.Group(); e.position.y = -.32; p.add(e); const f = new THREE.Mesh(capsule(.052, .19), L.outfit === 'dress' ? skin : jacket); e.add(f); const hd = new THREE.Mesh(sphere(.052, 10, 8), skin); hd.position.y = -.3; e.add(hd); return [p, e]; });
    parts.legs = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * .1, 0, 0); hips.add(p); const t = new THREE.Mesh(capsule(.08, .33), pants); t.castShadow = true; p.add(t); const k = new THREE.Group(); k.position.y = -.44; p.add(k); k.add(new THREE.Mesh(capsule(.068, .31), pants)); const sh = new THREE.Mesh(new THREE.BoxGeometry(.12, .08, .27), shoe); sh.position.set(0, -.43, -.05); sh.castShadow = true; k.add(sh); return [p, k]; });
  }
  function hat(head) {
    const h = L.hat; if (!h || h === 'none') return;
    const g = new THREE.Group(); g.position.y = .13; head.add(g);
    if (h === 'top') { const m = mat('#0b0b0d', .4); const c = new THREE.Mesh(new THREE.CylinderGeometry(.14, .15, .28, 18), m); c.position.y = .14; g.add(c); const b = new THREE.Mesh(new THREE.CylinderGeometry(.26, .26, .02, 22), m); g.add(b); const band = new THREE.Mesh(new THREE.CylinderGeometry(.152, .152, .05, 18), mat('#b01030', .5)); band.position.y = .04; g.add(band); }
    if (h === 'fedora') { const m = mat('#3a3a40', .7); const c = new THREE.Mesh(new THREE.CylinderGeometry(.13, .17, .17, 16), m); c.position.y = .08; g.add(c); const b = new THREE.Mesh(new THREE.CylinderGeometry(.28, .28, .02, 22), m); g.add(b); const band = new THREE.Mesh(new THREE.CylinderGeometry(.172, .172, .04, 16), mat('#111', .5)); band.position.y = .03; g.add(band); }
    if (h === 'cowboy') { const m = mat('#7a4a22', .8); const c = new THREE.Mesh(new THREE.CylinderGeometry(.12, .16, .2, 16), m); c.position.y = .1; c.scale.z = .8; g.add(c); const b = new THREE.Mesh(new THREE.TorusGeometry(.24, .05, 6, 22), m); b.rotation.x = Math.PI / 2; b.scale.z = .5; g.add(b); const d = new THREE.Mesh(new THREE.CircleGeometry(.24, 22), m); d.rotation.x = -Math.PI / 2; g.add(d); }
    if (h === 'crown') { const m = mat('#e8c46a', .25, 1); const c = new THREE.Mesh(new THREE.CylinderGeometry(.14, .14, .1, 16, 1, true), m); c.material = m; c.position.y = .03; g.add(c); for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2, s = new THREE.Mesh(new THREE.ConeGeometry(.035, .1, 4), m); s.position.set(Math.sin(a) * .13, .12, Math.cos(a) * .13); g.add(s); const j = new THREE.Mesh(sphere(.02, 6, 4), mat(i % 2 ? '#d4143a' : '#57c7ff', .2)); j.position.set(Math.sin(a) * .142, .04, Math.cos(a) * .142); g.add(j); } }
    if (h === 'cap') { const m = mat(L.suit === '#d9d3c7' ? '#d62828' : L.suit, .6); const d = new THREE.Mesh(new THREE.SphereGeometry(.185, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), m); d.position.y = -.08; g.add(d); const b = new THREE.Mesh(new THREE.CylinderGeometry(.17, .17, .02, 16, 1, false, Math.PI / 2, Math.PI), m); b.position.set(0, -.07, -.1); b.scale.z = 1.4; g.add(b); }
    if (h === 'beanie') { const m = mat(L.suit === '#111111' ? '#ff8a00' : L.suit, .95); const d = new THREE.Mesh(new THREE.SphereGeometry(.19, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), m); d.position.y = -.1; d.scale.y = 1.25; g.add(d); const p = new THREE.Mesh(sphere(.05, 8, 6), mat('#f2f2f2', .95)); p.position.y = .14; g.add(p); }
    if (h === 'halo') { const r = new THREE.Mesh(new THREE.TorusGeometry(.16, .022, 8, 26), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 2.1, 1.1), toneMapped: false })); r.rotation.x = Math.PI / 2; r.position.y = .17; g.add(r); parts.halo = r; }
    if (h === 'horns') { const m = mat('#b0121e', .4); for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.ConeGeometry(.04, .14, 8), m); c.position.set(s * .1, .03, -.02); c.rotation.z = -s * .45; g.add(c); } }
  }
  build();

  // soft contact shadow
  const blob = new THREE.Mesh(new THREE.CircleGeometry(.4, 20), new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: .32, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2; blob.position.y = .012; root.add(blob);

  /* name tag */
  const T = spriteCanvas(512, 160); T.sp.scale.set(1.5, .47, 1); T.sp.position.y = 2.22; root.add(T.sp);
  let tagKey = '';
  function drawTag(nm, status, isAdmin, guest) {
    const k = nm + '|' + status + '|' + isAdmin + '|' + guest; if (k === tagKey) return; tagKey = k;
    const g = T.g; g.clearRect(0, 0, 512, 160); g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `800 50px ${FONT}`; const tw = g.measureText(nm).width + (isAdmin ? 60 : 0);
    const w = Math.min(500, Math.max(140, tw + 54)), x0 = 256 - w / 2;
    g.fillStyle = npc ? 'rgba(40,24,8,.78)' : 'rgba(8,7,5,.72)'; rr(g, x0, 18, w, 78, 39); g.fill();
    g.strokeStyle = npc ? 'rgba(232,196,106,.7)' : isAdmin ? '#e8c46a' : 'rgba(255,255,255,.18)'; g.lineWidth = 3; rr(g, x0, 18, w, 78, 39); g.stroke();
    g.fillStyle = npc ? '#e8c46a' : guest ? '#cfcfcf' : nameColor(nm); g.fillText(nm, 256 + (isAdmin ? 26 : 0), 58);
    if (isAdmin) { g.font = `40px ${FONT}`; g.fillText('♛', x0 + 40, 56); }
    if (status) { g.font = `700 30px ${FONT}`; const sw = g.measureText(status).width + 34; g.fillStyle = 'rgba(232,196,106,.92)'; rr(g, 256 - sw / 2, 104, sw, 44, 22); g.fill(); g.fillStyle = '#1b1204'; g.fillText(status, 256, 127); }
    T.tex.needsUpdate = true;
  }
  let nm = name, status = '', adm = admin, guest = false;
  drawTag(nm, status, adm, guest);

  /* chat bubble */
  const B = spriteCanvas(512, 256); B.sp.visible = false; B.sp.position.y = 2.95; root.add(B.sp);
  let bubbleT = 0;
  function say(text, emoji) {
    const g = B.g; g.clearRect(0, 0, 512, 256); g.textAlign = 'center'; g.textBaseline = 'middle';
    if (emoji) { g.font = `150px ${FONT}`; g.fillText(text, 256, 128); B.sp.scale.set(.9, .45, 1); B.sp.position.y = 2.75; bubbleT = 2.2; B.tex.needsUpdate = true; B.sp.visible = true; return; }
    g.font = `600 34px ${FONT}`; const words = String(text).split(/\s+/), lines = []; let ln = '';
    for (const w of words) { const t = ln ? ln + ' ' + w : w; if (g.measureText(t).width > 430 && ln) { lines.push(ln); ln = w; } else ln = t; if (lines.length >= 4) break; }
    if (ln && lines.length < 4) lines.push(ln); if (lines.length === 4 && words.length) lines[3] = lines[3].slice(0, 26) + '…';
    const wmax = Math.max(...lines.map(l => g.measureText(l).width)) + 50, h = lines.length * 42 + 34, y0 = 200 - h;
    g.fillStyle = 'rgba(255,250,238,.96)'; rr(g, 256 - wmax / 2, y0, wmax, h, 26); g.fill();
    g.beginPath(); g.moveTo(240, y0 + h); g.lineTo(256, y0 + h + 26); g.lineTo(272, y0 + h); g.fill();
    g.fillStyle = '#1b1204'; lines.forEach((l, i) => g.fillText(l, 256, y0 + 38 + i * 42));
    B.tex.needsUpdate = true; B.sp.scale.set(1.8, .9, 1); B.sp.position.y = 2.95; B.sp.visible = true; bubbleT = 5 + lines.length;
  }

  /* animation */
  let ph = Math.random() * 6, et = 0, curEmote = null, idleT = Math.random() * 10;
  const sm = (o, k, v, s) => { o[k] += (v - o[k]) * s; };
  function update(dt, st = {}) {
    const sp = st.speed || 0, s = Math.min(1, dt * 12), [la, ra] = parts.arms, [ll, rl] = parts.legs, H = parts.hips;
    idleT += dt;
    if (st.emote !== curEmote) { curEmote = st.emote; et = 0; } et += dt;
    const e = curEmote, A = Math.min(1, sp / 3.2) * (sp > 4.5 ? 1.25 : .9);
    ph += dt * (sp > .05 ? 3 + sp * 1.7 : 0);
    let tl = [0, 0], tk = [0, 0], tax = [0, 0], taz = [-.08, .08], te = [.1, .1], hy = 0, hrx = 0, hry = 0, by = 0, headx = 0, heady = 0, tez = [0, 0];
    if (st.sit) {
      tl = [1.45, 1.45]; tk = [-1.4, -1.4]; tax = [.75, .75]; te = [.7, .7]; by = -.12;
      if (st.busy) { tax[1] = .9 + Math.sin(idleT * 3) * .15; te[1] = .9; }
    } else if (sp > .05) {
      const sn = Math.sin(ph); tl = [sn * A, -sn * A]; tk = [-Math.max(0, Math.sin(ph + 1.3)) * A * 1.3, -Math.max(0, -Math.sin(ph + 1.3)) * A * 1.3];
      tax = [-sn * A * .7, sn * A * .7]; te = [.25 + A * .3, .25 + A * .3]; by = Math.abs(Math.cos(ph)) * .05 * A; hrx = sp > 4.5 ? .12 : .03;
    } else {
      const b = Math.sin(idleT * 1.8); by = b * .008; tax = [.05 + b * .02, .05 - b * .02];
      if (st.deal) { tax = [.9 + Math.sin(idleT * 2.2) * .2, .9 + Math.cos(idleT * 2.6) * .25]; te = [.7, .8]; taz = [.2, -.2]; heady = Math.sin(idleT * .6) * .4; headx = .25; }
    }
    if (st.air) { tl = [.5, -.2]; tk = [-.9, -.4]; taz = [-.5, .5]; }
    if (e && !st.sit) {
      const t = et;
      if (e === 'wave') { taz[1] = 2.6; te[1] = 0; tez[1] = Math.sin(t * 10) * .5; }
      if (e === 'cheer') { taz = [-2.7, 2.7]; tax = [0, 0]; te = [0, 0]; by = Math.abs(Math.sin(t * 6)) * .14; }
      if (e === 'dance') { hry = Math.sin(t * 5) * .55; by = Math.abs(Math.sin(t * 10)) * .07; tax = [Math.sin(t * 5) * 1.3, -Math.sin(t * 5) * 1.3]; taz = [-.7, .7]; te = [1, 1]; tl = [Math.max(0, Math.sin(t * 5)) * .6, Math.max(0, -Math.sin(t * 5)) * .6]; tk = [-tl[0] * 1.2, -tl[1] * 1.2]; }
      if (e === 'clap') { tax = [1.25, 1.25]; te = [.9, .9]; const c = Math.sin(t * 16) * .22; taz = [.35 + c, -.35 - c]; }
      if (e === 'dab') { taz = [-2.1, -.4]; tax = [0, 1.5]; te = [0, 1.9]; headx = .5; heady = .55; }
      if (e === 'laugh') { hrx = .25 + Math.abs(Math.sin(t * 9)) * .12; headx = -.3; tax = [.6, .6]; te = [1.3, 1.3]; taz = [.3, -.3]; }
      if (e === 'flex') { taz = [-1.55, 1.55]; tez = [-1.6, 1.6]; te = [0, 0]; by = Math.sin(t * 3) * .02; }
      if (e === 'cry') { tax = [1.6, 1.6]; te = [2.1, 2.1]; taz = [.25, -.25]; headx = .45; by = Math.sin(t * 14) * .01; }
    }
    if (st.air) by += st.air;
    sm(body.position, 'y', by, st.air ? 1 : s);
    sm(H.rotation, 'x', hrx, s); sm(H.rotation, 'y', hry, s);
    sm(parts.head.rotation, 'x', headx, s); sm(parts.head.rotation, 'y', heady, s);
    for (let i = 0; i < 2; i++) {
      const [lp, lk] = parts.legs[i], [ap, ae] = parts.arms[i];
      sm(lp.rotation, 'x', tl[i], s); sm(lk.rotation, 'x', tk[i], s);
      sm(ap.rotation, 'x', tax[i], s); sm(ap.rotation, 'z', taz[i], s); sm(ae.rotation, 'x', te[i], s); sm(ae.rotation, 'z', tez[i], s);
    }
    if (parts.halo) parts.halo.rotation.z += dt;
    if (bubbleT > 0) { bubbleT -= dt; if (bubbleT <= 0) B.sp.visible = false; else B.sp.material.opacity = Math.min(1, bubbleT * 2); }
  }
  return {
    root, update, say,
    setName(n, st, a, gst) { nm = n; status = st || ''; adm = !!a; guest = !!gst; drawTag(nm, status, adm, guest); },
    setStatus(st) { if (st !== status) { status = st || ''; drawTag(nm, status, adm, guest); } },
    setLook(l) { if (JSON.stringify(l) === JSON.stringify(L)) return; L = { ...l }; parts.halo = null; build(); },
    get look() { return L; }, tag: T.sp, bubble: B.sp,
    setVisible(v) { body.visible = v; blob.visible = v; },
    dispose() { T.tex.dispose(); B.tex.dispose(); T.sp.material.dispose(); B.sp.material.dispose(); },
  };
}
