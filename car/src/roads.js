// World grid: road shapes, height field, textures, presets and share codes.
export const N = 16, CELL = 14, HW = 0.30, RAMP_H = 2.6;
export const E = 0, ROAD = 1, BUILDING = 2, TREE = 3, RAMP0 = 4, BOOST = 8;
export const DIRS = [[0, -1], [1, 0], [0, 1], [-1, 0]]; // N E S W  (i, j)
export const isRoad = c => c === ROAD || (c >= RAMP0 && c <= BOOST);
export const isRamp = c => c >= RAMP0 && c < RAMP0 + 4;

export function rng(seed) { let a = seed >>> 0; return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

export class Track {
  constructor(cells, start) { this.cells = cells || new Array(N * N).fill(E); this.start = start || { i: 0, j: 0, d: 1 }; }
  get(i, j) { return i < 0 || j < 0 || i >= N || j >= N ? E : this.cells[j * N + i]; }
  set(i, j, c) { if (i >= 0 && j >= 0 && i < N && j < N) this.cells[j * N + i] = c; }
  mask(i, j) { let m = 0; DIRS.forEach(([di, dj], k) => { if (isRoad(this.get(i + di, j + dj))) m |= 1 << k; }); return m; }
  roads() { const out = []; for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) if (isRoad(this.get(i, j))) out.push([i, j]); return out; }
  clone() { return new Track(this.cells.slice(), { ...this.start }); }
  fixStart() {
    const { i, j } = this.start;
    if (!isRoad(this.get(i, j))) { const r = this.roads().find(([a, b]) => this.get(a, b) === ROAD) || this.roads()[0]; if (!r) return false; this.start = { i: r[0], j: r[1], d: 1 }; }
    const m = this.mask(this.start.i, this.start.j);
    if (m && !(m & (1 << this.start.d))) this.start.d = [0, 1, 2, 3].find(k => m & (1 << k));
    return true;
  }
}
export const cellCenter = (i, j) => [(i - N / 2 + 0.5) * CELL, (j - N / 2 + 0.5) * CELL];
export const toCell = (x, z) => [Math.floor(x / CELL + N / 2), Math.floor(z / CELL + N / 2)];

const CORNER = { 3: [1, 0], 6: [1, 1], 12: [0, 1], 9: [0, 0] };
export function inShape(mask, u, v, hw = HW) {
  if (CORNER[mask]) { const [cx, cy] = CORNER[mask]; return Math.abs(Math.hypot(u - cx, v - cy) - 0.5) <= hw; }
  const a = Math.abs(u - 0.5) <= hw, b = Math.abs(v - 0.5) <= hw;
  if (a && b) return true;
  return (mask & 1 && v <= 0.5 && a) || (mask & 4 && v >= 0.5 && a) || (mask & 2 && u >= 0.5 && b) || (mask & 8 && u <= 0.5 && b);
}
export function local(x, z) { const [i, j] = toCell(x, z); return [i, j, x / CELL + N / 2 - i, z / CELL + N / 2 - j]; }
export function onRoad(t, x, z) { const [i, j, u, v] = local(x, z); return isRoad(t.get(i, j)) && inShape(t.mask(i, j), u, v); }
// ramp: rises toward its direction across a = 0.15..0.85 of the cell
export function rampFrame(d, u, v) { return d === 0 ? [1 - v, u] : d === 1 ? [u, v] : d === 2 ? [v, u] : [1 - u, v]; }
export function groundH(t, x, z) {
  const [i, j, u, v] = local(x, z), c = t.get(i, j);
  if (!isRamp(c)) return 0;
  const [a, l] = rampFrame(c - RAMP0, u, v);
  if (Math.abs(l - 0.5) > HW * 0.95 || a < 0.15 || a > 0.85) return 0;
  return RAMP_H * (a - 0.15) / 0.7;
}
export function boostAt(t, x, z) { const [i, j, u, v] = local(x, z); return t.get(i, j) === BOOST && Math.abs(u - 0.5) < 0.32 && Math.abs(v - 0.5) < 0.32; }

/* ---------- 2D drawing shared by the 3D textures and the editor */
function fillShape(g, mask, S, hw, col) {
  g.fillStyle = col; g.strokeStyle = col;
  if (CORNER[mask]) { const [cx, cy] = CORNER[mask]; g.lineWidth = 2 * hw * S; g.lineCap = 'butt'; g.beginPath(); g.arc(cx * S, cy * S, 0.5 * S, 0, Math.PI * 2); g.stroke(); return; }
  const a = (0.5 - hw) * S, w = 2 * hw * S;
  g.fillRect(a, a, w, w);
  if (mask & 1) g.fillRect(a, 0, w, S / 2); if (mask & 4) g.fillRect(a, S / 2, w, S / 2);
  if (mask & 2) g.fillRect(S / 2, a, S / 2, w); if (mask & 8) g.fillRect(0, a, S / 2, w);
  if (!mask) { g.beginPath(); g.arc(S / 2, S / 2, hw * S * 1.25, 0, 7); g.fill(); }
}
export function drawRoad(g, mask, S, { detail = true, seed = 1 } = {}) {
  const lw = Math.max(1, S / 110), hw = HW;
  fillShape(g, mask, S, hw + 0.035, '#8d9097');
  fillShape(g, mask, S, hw, '#2c2e33');
  if (detail) {
    const r = rng(seed); g.save(); g.globalCompositeOperation = 'source-atop';
    for (let k = 0; k < S * S / 40; k++) { const s = r() * 1.6 + .4; g.fillStyle = r() < .5 ? 'rgba(255,255,255,.05)' : 'rgba(0,0,0,.18)'; g.fillRect(r() * S, r() * S, s, s); }
    for (let k = 0; k < 4; k++) { g.strokeStyle = 'rgba(0,0,0,.25)'; g.lineWidth = lw * (1 + r() * 2); g.beginPath(); let x = r() * S, y = r() * S; g.moveTo(x, y); for (let q = 0; q < 5; q++) { x += (r() - .5) * S * .15; y += (r() - .5) * S * .15; g.lineTo(x, y); } g.stroke(); }
    g.restore();
  }
  const white = 'rgba(236,236,236,.92)', yel = '#f2c84b', e = hw - 0.035;
  g.lineCap = 'butt';
  const line = (x1, y1, x2, y2, col, dash) => { g.strokeStyle = col; g.lineWidth = lw * 2; g.setLineDash(dash ? [S * .07, S * .06] : []); g.beginPath(); g.moveTo(x1 * S, y1 * S); g.lineTo(x2 * S, y2 * S); g.stroke(); g.setLineDash([]); };
  if (CORNER[mask]) {
    const [cx, cy] = CORNER[mask];
    [[0.5 - e, white, 0], [0.5 + e, white, 0], [0.5, yel, 1]].forEach(([rad, col, dash]) => { g.strokeStyle = col; g.lineWidth = lw * 2; g.setLineDash(dash ? [S * .07, S * .06] : []); g.beginPath(); g.arc(cx * S, cy * S, rad * S, 0, 7); g.stroke(); });
    g.setLineDash([]); return;
  }
  const lo = 0.5 - e, hi = 0.5 + e, c0 = 0.5 - hw, c1 = 0.5 + hw;
  if (mask === 5) { line(lo, 0, lo, 1, white); line(hi, 0, hi, 1, white); line(.5, 0, .5, 1, yel, 1); return; }
  if (mask === 10) { line(0, lo, 1, lo, white); line(0, hi, 1, hi, white); line(0, .5, 1, .5, yel, 1); return; }
  // junctions, dead ends, plazas
  const arms = [mask & 1, mask & 2, mask & 4, mask & 8];
  if (arms[0]) { line(lo, 0, lo, c0, white); line(hi, 0, hi, c0, white); line(.5, 0, .5, c0 - .12, yel, 1); } else line(c0, lo, c1, lo, white);
  if (arms[2]) { line(lo, 1, lo, c1, white); line(hi, 1, hi, c1, white); line(.5, 1, .5, c1 + .12, yel, 1); } else line(c0, hi, c1, hi, white);
  if (arms[1]) { line(1, lo, c1, lo, white); line(1, hi, c1, hi, white); line(1, .5, c1 + .12, .5, yel, 1); } else line(hi, c0, hi, c1, white);
  if (arms[3]) { line(0, lo, c0, lo, white); line(0, hi, c0, hi, white); line(0, .5, c0 - .12, .5, yel, 1); } else line(lo, c0, lo, c1, white);
  const count = arms.filter(Boolean).length;
  if (count >= 3) { // zebra crossings
    g.fillStyle = 'rgba(240,240,240,.85)'; const n = 6, st = (2 * e) / (n * 2 - 1);
    for (let k = 0; k < n; k++) {
      const p = 0.5 - e + k * 2 * st;
      if (arms[0]) g.fillRect(p * S, (c0 - .1) * S, st * S, .07 * S);
      if (arms[2]) g.fillRect(p * S, (c1 + .03) * S, st * S, .07 * S);
      if (arms[1]) g.fillRect((c1 + .03) * S, p * S, .07 * S, st * S);
      if (arms[3]) g.fillRect((c0 - .1) * S, p * S, .07 * S, st * S);
    }
  }
}
export function drawBoost(g, S, phase = 0) {
  g.save(); g.translate(S / 2, S / 2);
  for (let k = 0; k < 3; k++) {
    const y = (k - 1) * S * .16 + ((phase * S * .16) % (S * .16));
    g.strokeStyle = `rgba(80,240,255,${.55 + .45 * Math.sin(phase * 6 + k)})`; g.lineWidth = S * .045; g.lineJoin = 'round';
    g.beginPath(); g.moveTo(-S * .15, y + S * .08); g.lineTo(0, y - S * .06); g.lineTo(S * .15, y + S * .08); g.stroke();
  }
  g.restore();
}

/* ---------- presets */
function line(t, i0, j0, i1, j1, c = ROAD) { const di = Math.sign(i1 - i0), dj = Math.sign(j1 - j0); let i = i0, j = j0; for (;;) { t.set(i, j, c); if (i === i1 && j === j1) break; i += di; j += dj; } }
function rect(t, i0, j0, i1, j1) { line(t, i0, j0, i1, j0); line(t, i1, j0, i1, j1); line(t, i1, j1, i0, j1); line(t, i0, j1, i0, j0); }
export function scenery(t, seed = 7, density = 1) {
  const r = rng(seed);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    if (t.get(i, j) !== E) continue;
    let near = 0; DIRS.forEach(([a, b]) => { if (isRoad(t.get(i + a, j + b))) near++; });
    const p = r();
    if (near >= 2 && p < .55 * density) t.set(i, j, BUILDING);
    else if (near === 1 && p < .35 * density) t.set(i, j, BUILDING);
    else if (p < .45 * density) t.set(i, j, TREE);
  }
  return t;
}
export const PRESETS = [
  { id: 'downtown', name: 'Downtown Grid', desc: 'Tight city blocks, lots of corners', make() { const t = new Track(); [1, 5, 9, 13].forEach(k => { line(t, 1, k, 14, k); line(t, k, 1, k, 14); }); line(t, 6, 13, 8, 13, ROAD); t.set(7, 9, BOOST); t.set(3, 5, RAMP0 + 1); t.set(11, 13, RAMP0 + 3); scenery(t, 11, 1.4); t.start = { i: 1, j: 3, d: 2 }; return t; } },
  { id: 'loop', name: 'Grand Loop', desc: 'Fast oval with a jump and boosts', make() { const t = new Track(); rect(t, 2, 2, 13, 13); line(t, 2, 8, 13, 8); t.set(7, 2, RAMP0 + 1); t.set(5, 13, BOOST); t.set(10, 13, BOOST); t.set(12, 8, RAMP0 + 1); scenery(t, 3, .8); t.start = { i: 4, j: 2, d: 1 }; return t; } },
  { id: 'eight', name: 'Figure Eight', desc: 'Two loops, two crossings', make() { const t = new Track(); rect(t, 2, 2, 9, 9); rect(t, 6, 6, 13, 13); t.set(5, 2, BOOST); t.set(13, 10, RAMP0 + 2); t.set(10, 13, BOOST); scenery(t, 5, .9); t.start = { i: 3, j: 2, d: 1 }; return t; } },
  { id: 'stunt', name: 'Stunt Park', desc: 'Ramps everywhere. Send it.', make() { const t = new Track(); rect(t, 1, 1, 14, 14); line(t, 1, 5, 14, 5); line(t, 1, 10, 14, 10); line(t, 7, 1, 7, 14);
      [[4, 1, 1], [11, 1, 1], [4, 5, 3], [11, 5, 1], [4, 10, 1], [11, 10, 3], [7, 3, 2], [7, 12, 0], [14, 7, 2], [1, 8, 0]].forEach(([i, j, d]) => t.set(i, j, RAMP0 + d));
      [[9, 1], [2, 14], [12, 14], [7, 7]].forEach(([i, j]) => t.set(i, j, BOOST)); scenery(t, 9, .6); t.start = { i: 2, j: 1, d: 1 }; return t; } },
  { id: 'country', name: 'Countryside', desc: 'Winding back roads through the woods', make() { const t = new Track();
      const path = [[1, 2], [6, 2], [6, 5], [10, 5], [10, 2], [14, 2], [14, 9], [11, 9], [11, 12], [14, 12], [14, 14], [3, 14], [3, 10], [1, 10], [1, 2]];
      for (let k = 0; k < path.length - 1; k++) line(t, ...path[k], ...path[k + 1]); line(t, 6, 5, 6, 10); line(t, 3, 10, 6, 10); t.set(8, 14, BOOST); t.set(14, 6, RAMP0 + 2);
      const r = rng(21); for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) if (t.get(i, j) === E) t.set(i, j, r() < .62 ? TREE : r() < .12 ? BUILDING : E); t.start = { i: 2, j: 2, d: 1 }; return t; } },
];
export function randomCity(seed = Date.now()) {
  const r = rng(seed), t = new Track(); const xs = [1, 14], ys = [1, 14];
  for (let k = 0; k < 2 + Math.floor(r() * 2); k++) xs.push(3 + Math.floor(r() * 10)); for (let k = 0; k < 2 + Math.floor(r() * 2); k++) ys.push(3 + Math.floor(r() * 10));
  xs.forEach(x => line(t, x, 1, x, 14)); ys.forEach(y => line(t, 1, y, 14, y));
  t.roads().forEach(([i, j]) => { if (t.mask(i, j) === 5 && r() < .08) t.set(i, j, RAMP0 + (r() < .5 ? 0 : 2)); else if (t.mask(i, j) === 10 && r() < .08) t.set(i, j, RAMP0 + (r() < .5 ? 1 : 3)); else if ((t.mask(i, j) === 5 || t.mask(i, j) === 10) && r() < .06) t.set(i, j, BOOST); });
  scenery(t, seed, 1.2); t.fixStart(); return t;
}

/* ---------- share codes: one base-36 char per cell, run-length packed */
export function encode(t) {
  let s = '', k = 0; const c = t.cells;
  while (k < c.length) { let n = 1; while (k + n < c.length && c[k + n] === c[k] && n < 35) n++; s += n > 2 ? '~' + n.toString(36) + c[k] : String(c[k]).repeat(n); k += n; }
  return s + '_' + (t.start.j * N + t.start.i).toString(36) + t.start.d;
}
export function decode(s) {
  try {
    const [body, st] = s.split('_'), cells = []; let k = 0;
    while (k < body.length) { if (body[k] === '~') { const n = parseInt(body[k + 1], 36), v = +body[k + 2]; for (let q = 0; q < n; q++) cells.push(v); k += 3; } else { cells.push(+body[k]); k++; } }
    if (cells.length !== N * N || cells.some(v => !(v >= 0 && v <= 8))) return null;
    const idx = parseInt(st.slice(0, -1), 36), d = +st.slice(-1);
    const t = new Track(cells, { i: idx % N, j: Math.floor(idx / N), d: d >= 0 && d < 4 ? d : 1 }); t.fixStart(); return t;
  } catch (e) { return null; }
}
