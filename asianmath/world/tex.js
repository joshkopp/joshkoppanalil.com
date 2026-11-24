// The Back Room 3D: canvas-drawn textures (no image files) + small material helpers.
import * as THREE from 'three';

export function canvasTex(w, h, draw, { repeat, srgb = true, aniso = 4, nearest } = {}) {
  const c = document.createElement('canvas'); c.width = w; c.height = h;
  const g = c.getContext('2d'); draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = aniso;
  if (nearest) { t.magFilter = THREE.NearestFilter; }
  if (repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(repeat[0], repeat[1]); }
  t.redraw = fn => { fn(g, w, h); t.needsUpdate = true; };
  t.ctx = g;
  return t;
}

export const FONT = '"DM Sans", "Segoe UI", Arial, sans-serif';
export const SERIF = 'Cinzel, Georgia, "Times New Roman", serif';

export function rr(g, x, y, w, h, r) { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); }

/** letters along a smile-shaped arc (canvas y-down), centred under (cx,cy) */
export function arcText(g, text, cx, cy, r, spread, font, color) {
  g.save(); g.font = font; g.fillStyle = color; g.textAlign = 'center'; g.textBaseline = 'middle';
  const n = text.length;
  for (let i = 0; i < n; i++) {
    const th = Math.PI / 2 + spread / 2 - (n === 1 ? spread / 2 : spread * i / (n - 1));
    g.save(); g.translate(cx + r * Math.cos(th), cy + r * Math.sin(th)); g.rotate(th - Math.PI / 2); g.fillText(text[i], 0, 0); g.restore();
  }
  g.restore();
}

/* ------------------------------------------------ glowing materials (scaled together by the visual style) */
const GLOWS = [];
export function glow(color, k = 1.6, opts = {}) {
  const base = new THREE.Color(color);
  const m = new THREE.MeshBasicMaterial({ color: base.clone().multiplyScalar(k), toneMapped: false, ...opts });
  m.userData.g = { base, k }; GLOWS.push(m); return m;
}
export function glowMap(map, k = 1.4, opts = {}) {
  const m = new THREE.MeshBasicMaterial({ map, color: new THREE.Color(k, k, k), toneMapped: false, ...opts });
  m.userData.g = { base: new THREE.Color(1, 1, 1), k }; GLOWS.push(m); return m;
}
export function setGlowScale(s, tint) {
  for (const m of GLOWS) { const { base, k } = m.userData.g; m.color.copy(base).multiplyScalar(k * s); if (tint) m.color.multiply(tint); }
}

/* ------------------------------------------------ the floor, walls, ceiling */
export function carpetTex(pal) {
  return canvasTex(512, 512, (g, w) => {
    g.fillStyle = pal[0]; g.fillRect(0, 0, w, w);
    const T = 128;
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const cx = x * T + T / 2, cy = y * T + T / 2;
      g.strokeStyle = pal[1]; g.lineWidth = 5; g.beginPath(); g.arc(cx, cy, 40, 0, 7); g.stroke();
      g.lineWidth = 2; g.beginPath(); g.arc(cx, cy, 30, 0, 7); g.stroke();
      g.fillStyle = pal[2]; g.beginPath(); g.moveTo(cx, cy - 20); g.lineTo(cx + 14, cy); g.lineTo(cx, cy + 20); g.lineTo(cx - 14, cy); g.closePath(); g.fill();
      g.fillStyle = pal[1]; g.beginPath(); g.arc(cx, cy, 5, 0, 7); g.fill();
      // corner flourishes
      g.fillStyle = pal[3];
      for (const [ox, oy] of [[0, 0], [T, 0], [0, T], [T, T]]) { g.beginPath(); g.arc(x * T + ox, y * T + oy, 12, 0, 7); g.fill(); }
      g.strokeStyle = pal[3]; g.lineWidth = 3;
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + Math.PI / 4; g.beginPath(); g.moveTo(cx + Math.cos(a) * 46, cy + Math.sin(a) * 46); g.lineTo(cx + Math.cos(a) * 60, cy + Math.sin(a) * 60); g.stroke(); }
    }
    // subtle weave noise
    const id = g.getImageData(0, 0, w, w), d = id.data;
    for (let i = 0; i < d.length; i += 4) { const n = (Math.random() - .5) * 18; d[i] += n; d[i + 1] += n; d[i + 2] += n; }
    g.putImageData(id, 0, 0);
  }, { repeat: [14, 10], aniso: 8 });
}

export function panelTex() {
  return canvasTex(512, 512, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#2a140b'); gr.addColorStop(1, '#170a05'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 128) {
      g.fillStyle = 'rgba(0,0,0,.35)'; g.fillRect(x, 0, 6, h);
      g.fillStyle = 'rgba(255,210,140,.07)'; g.fillRect(x + 6, 0, 3, h);
      g.strokeStyle = 'rgba(232,196,106,.25)'; g.lineWidth = 3; g.strokeRect(x + 24, 60, 80, 170); g.strokeRect(x + 24, 280, 80, 170);
    }
    for (let i = 0; i < 4000; i++) { g.fillStyle = `rgba(${Math.random() < .5 ? '0,0,0' : '255,200,150'},${Math.random() * .05})`; g.fillRect(Math.random() * w, Math.random() * h, 1, 6 + Math.random() * 20); }
  }, { repeat: [12, 1] });
}

export function ceilTex() {
  return canvasTex(256, 256, (g, w) => {
    g.fillStyle = '#0c0807'; g.fillRect(0, 0, w, w);
    g.strokeStyle = '#3a2614'; g.lineWidth = 10; g.strokeRect(5, 5, w - 10, w - 10);
    g.strokeStyle = 'rgba(232,196,106,.35)'; g.lineWidth = 2; g.strokeRect(20, 20, w - 40, w - 40);
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2); gr.addColorStop(0, '#1a110c'); gr.addColorStop(1, '#0c0807'); g.fillStyle = gr; g.fillRect(24, 24, w - 48, w - 48);
  }, { repeat: [15, 11] });
}

/* ------------------------------------------------ signs + labels */
export function neonText(text, { color = '#ffd36b', w = 1024, h = 256, font = SERIF, weight = 900, size = 150, sub, subColor } = {}) {
  return canvasTex(w, h, g => {
    g.clearRect(0, 0, w, h); g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `${weight} ${size}px ${font}`;
    const y = sub ? h * .42 : h / 2;
    for (const [b, a] of [[40, .5], [18, .8], [6, 1]]) { g.shadowColor = color; g.shadowBlur = b; g.fillStyle = color; g.globalAlpha = a; g.fillText(text, w / 2, y); }
    g.globalAlpha = 1; g.shadowBlur = 0; g.fillStyle = '#fff8e6'; g.fillText(text, w / 2, y);
    if (sub) { g.font = `700 ${size * .32}px ${FONT}`; g.fillStyle = subColor || color; g.shadowColor = subColor || color; g.shadowBlur = 12; g.fillText(sub, w / 2, h * .82); }
  });
}

export function cardBackTex() {
  return canvasTex(128, 180, (g, w, h) => {
    g.fillStyle = '#fff'; rr(g, 0, 0, w, h, 12); g.fill();
    g.fillStyle = '#8e0b25'; rr(g, 8, 8, w - 16, h - 16, 8); g.fill();
    g.strokeStyle = '#e8c46a'; g.lineWidth = 2;
    for (let i = -h; i < w + h; i += 12) { g.beginPath(); g.moveTo(i, 8); g.lineTo(i + h, h); g.stroke(); }
    g.fillStyle = '#e8c46a'; g.font = `900 34px ${SERIF}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('JK', w / 2, h / 2);
  });
}
export function cardFaceTex(rank, suit) {
  const red = suit === '♥' || suit === '♦';
  return canvasTex(128, 180, (g, w, h) => {
    g.fillStyle = '#fbf8f1'; rr(g, 0, 0, w, h, 12); g.fill();
    g.fillStyle = red ? '#c8102e' : '#111'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `800 30px ${FONT}`; g.fillText(rank, 22, 24); g.font = `26px ${FONT}`; g.fillText(suit, 22, 52);
    g.font = `70px ${FONT}`; g.fillText(suit, w / 2, h / 2 + 6);
  });
}
