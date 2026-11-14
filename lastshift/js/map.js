// THE LAST SHIFT — facility layout, per-round randomisation, collision, line of sight, pathfinding.
export const W = 50, H = 36, C = 2.4;
export const WALL = 0, FLOOR = 1, RAMP = 2, DOOR = 3, PROP = 4, SECRET = 5;
export const FL0 = 0, FL1 = -3.4, CE0 = 3.0, CE1 = -0.6;
const RZ0 = 13 * C, RZ1 = 20 * C;

export function rng(seed) {
  let s = (seed >>> 0) || 0x9e3779b9;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}

export function buildMap(seed) {
  const R = rng(seed);
  const pick = a => a[Math.floor(R() * a.length)];
  const g = new Uint8Array(W * H), zone = new Int16Array(W * H).fill(-1);
  const doorIdx = new Int16Array(W * H).fill(-1), propIdx = new Int16Array(W * H).fill(-1), secIdx = new Int16Array(W * H).fill(-1);
  const zones = [], doors = [], props = [], secrets = [];
  const I = (x, z) => z * W + x;
  const Z = (name, lv, kind, extra = {}) => { zones.push({ id: zones.length, name, lv, kind, ...extra }); return zones.length - 1; };
  const carve = (x0, z0, x1, z1, zi, t = FLOOR) => { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) { g[I(x, z)] = t; zone[I(x, z)] = zi; } };
  const door = (x, z, type, zi, label) => { g[I(x, z)] = DOOR; zone[I(x, z)] = zi; doorIdx[I(x, z)] = doors.length; doors.push({ id: doors.length, x, z, type, label, zone: zi }); };
  const prop = (x, z, type) => {
    if (g[I(x, z)] !== FLOOR) throw new Error('prop on non-floor ' + x + ',' + z + ' ' + type);
    g[I(x, z)] = PROP; propIdx[I(x, z)] = props.length; props.push({ id: props.length, x, z, type });
  };

  // ---------- Ground floor: St. Agnes hospital wing ----------
  const hN = Z('North Corridor', 0, 'hall'), hW = Z('West Wing', 0, 'hall'), hE = Z('East Wing', 0, 'hall'), hM = Z('Main Corridor', 0, 'hall');
  carve(3, 2, 35, 2, hN); carve(3, 2, 4, 17, hW); carve(34, 2, 35, 17, hE); carve(3, 10, 35, 11, hM);
  const wA = Z('Ward A', 0, 'ward'); carve(6, 4, 12, 8, wA); door(9, 9, 'D', wA, 'WARD A'); door(5, 6, 'D', wA);
  const wB = Z('Ward B', 0, 'ward'); carve(14, 4, 18, 8, wB); door(16, 9, 'D', wB, 'WARD B');
  const wC = Z('Ward C', 0, 'ward'); carve(20, 4, 24, 8, wC); door(22, 9, 'D', wC, 'WARD C');
  const sec = Z('Security', 0, 'security'); carve(26, 4, 32, 8, sec); door(29, 9, 'R', sec, 'SECURITY');
  const st = Z('Storage', 0, 'storage'); carve(6, 13, 12, 17, st); door(9, 12, 'D', st, 'STORAGE'); door(5, 15, 'D', st);
  const mo = Z('Morgue', 0, 'morgue'); carve(14, 13, 21, 17, mo); door(17, 12, 'D', mo, 'MORGUE');
  carve(23, 12, 24, 12, hM);
  const sw = Z('Stairwell', 0, 'stairs'); carve(23, 13, 24, 19, sw, RAMP);
  const of = Z('Offices', 0, 'office'); carve(26, 13, 32, 17, of); door(29, 12, 'D', of, 'OFFICES'); door(33, 15, 'D', of);
  const lb = Z('Reception', 0, 'lobby'); carve(37, 5, 44, 15, lb); door(36, 10, 'P', lb, 'EXIT'); door(36, 11, 'P', lb);
  door(45, 10, 'G', lb, 'EXIT'); door(45, 11, 'G', lb);
  const xg = Z('Courtyard', 0, 'exit', { exit: 'gate' }); carve(46, 8, 48, 13, xg);

  // ---------- Basement level ----------
  const bh = Z('Basement Hall', -1, 'bhall'); carve(10, 20, 37, 21, bh);
  const bo = Z('Boiler Room', -1, 'boiler'); carve(13, 23, 21, 29, bo); door(17, 22, 'D', bo, 'BOILER'); door(17, 30, 'D', bo);
  const mt = Z('Maintenance', -1, 'maint'); carve(23, 24, 25, 26, mt); door(22, 25, 'D', mt);
  const el = Z('Electrical', -1, 'electrical'); carve(27, 23, 33, 27, el); door(30, 22, 'D', el, 'ELECTRICAL'); door(30, 28, 'D', el);
  const cs = Z('Cold Storage', -1, 'cold'); carve(39, 19, 45, 25, cs); door(38, 20, 'D', cs, 'COLD STORAGE'); door(40, 26, 'D', cs);
  const tn = Z('Tunnels', -1, 'tunnel');
  carve(10, 22, 10, 32, tn); carve(10, 32, 41, 32, tn); carve(17, 31, 17, 31, tn); carve(30, 29, 30, 31, tn); carve(40, 27, 40, 31, tn);
  door(42, 32, 'C', tn, 'SEWER');
  const xs = Z('Sewer Outfall', -1, 'exit', { exit: 'sewer' }); carve(43, 31, 47, 33, xs);

  // ---------- Props ----------
  [[7, 4], [9, 4], [15, 4], [17, 4], [21, 4], [23, 4]].forEach(([x, z]) => prop(x, z, 'bed'));
  [[6, 8], [12, 8], [18, 8], [20, 8], [32, 8], [12, 17], [14, 17], [26, 17], [32, 17], [37, 15], [37, 5], [37, 21], [13, 29], [21, 23], [27, 27], [45, 25]]
    .forEach(([x, z]) => prop(x, z, 'locker'));
  prop(28, 4, 'desk'); prop(29, 4, 'monitor'); prop(30, 4, 'desk');
  [[7, 13], [11, 13], [41, 23], [24, 26]].forEach(([x, z]) => prop(x, z, 'shelf'));
  [[6, 17], [7, 17], [12, 15], [20, 28], [42, 21], [43, 21], [44, 24], [45, 19], [28, 23]].forEach(([x, z]) => prop(x, z, 'crate'));
  [[15, 14], [19, 14], [15, 16], [19, 16]].forEach(([x, z]) => prop(x, z, 'slab'));
  [[17, 17], [18, 17]].forEach(([x, z]) => prop(x, z, 'drawers'));
  [[27, 14], [27, 16], [31, 14]].forEach(([x, z]) => prop(x, z, 'desk'));
  prop(30, 17, 'shelf');
  prop(40, 6, 'counter'); prop(41, 6, 'counter');
  prop(39, 14, 'bench'); prop(42, 14, 'bench');
  prop(16, 26, 'tank'); prop(13, 25, 'valve');
  prop(33, 25, 'breaker'); prop(33, 23, 'panel'); prop(33, 27, 'panel');

  // ---------- Hidden passages (3 of 5 active each round) ----------
  const cand = [[11, 3], [31, 3], [22, 13], [13, 6], [26, 25]];
  for (let i = cand.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [cand[i], cand[j]] = [cand[j], cand[i]]; }
  cand.slice(0, 3).forEach(([x, z]) => {
    g[I(x, z)] = SECRET; secIdx[I(x, z)] = secrets.length;
    let zz = -1; for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const k = zone[I(x + dx, z + dz)]; if (k >= 0 && zones[k].kind !== 'hall') zz = k; else if (zz < 0 && k >= 0) zz = k; }
    zone[I(x, z)] = zz; secrets.push({ id: secrets.length, x, z, zone: zz });
  });

  const map = { W, H, C, g, zone, zones, doors, props, secrets, doorIdx, propIdx, secIdx, seed };
  map.doorOpen = new Uint8Array(doors.length);
  map.secretOpen = new Uint8Array(secrets.length);
  Object.assign(map, api);

  // ---------- Items ----------
  const used = new Set();
  const cellsIn = zi => { const out = []; for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) if (zone[I(x, z)] === zi && g[I(x, z)] === FLOOR && !used.has(I(x, z))) out.push([x, z]); return out; };
  const items = [];
  const place = (type, zi) => {
    const cells = cellsIn(zi); if (!cells.length) return false;
    const [x, z] = pick(cells); used.add(I(x, z));
    items.push({ id: items.length, type, x: (x + 0.5) * C + (R() - 0.5) * 1.0, z: (z + 0.5) * C + (R() - 0.5) * 1.0, zone: zi, rot: R() * Math.PI * 2 });
    return true;
  };
  const A = [wA, wB, st, mo, of], B = [bo, mt, cs, tn];
  const fz = [pick(A), pick(B)];
  let third; do { third = pick([...A, ...B, hW, hE, bh]); } while (fz.includes(third));
  fz.push(third);
  fz.forEach(zi => place('fuse', zi));
  let kz; do { kz = pick([...A, ...B, bh]); } while (fz.includes(kz) && R() < 0.85);
  place('key', kz);
  place('cutters', pick([bo, mt, cs, tn]));
  const all = [wA, wB, wC, st, mo, of, sec, hN, hW, hE, hM, bh, bo, mt, el, cs, tn];
  for (let i = 0; i < 7; i++) place('battery', pick(all));
  map.items = items;

  map.code = String(1000 + Math.floor(R() * 9000));
  map.spawns = [[21, 6], [23, 6], [21, 7], [23, 7]].map(([x, z]) => ({ x: (x + 0.5) * C, z: (z + 0.5) * C, yaw: Math.PI }));
  const mcells = [...cellsIn(bo), ...cellsIn(cs), ...cellsIn(tn)];
  const ms = pick(mcells); map.monsterSpawn = { x: (ms[0] + 0.5) * C, z: (ms[1] + 0.5) * C };
  map.initialDoorsOpen = doors.map(d => d.type === 'D' && R() < 0.4 ? 1 : 0);

  // ---------- Lamps (greedy spacing) ----------
  const lamps = [], taken = new Uint8Array(W * H);
  for (let z = 1; z < H - 1; z++) for (let x = 1; x < W - 1; x++) {
    const t = g[I(x, z)]; if (t !== FLOOR && t !== RAMP && t !== PROP) continue;
    const zz = zones[zone[I(x, z)]]; if (!zz || zz.kind === 'exit') continue;
    let near = false;
    for (let dz = -2; dz <= 2 && !near; dz++) for (let dx = -2; dx <= 2; dx++) if (taken[I(x + dx, z + dz)]) { near = true; break; }
    if (near) continue;
    taken[I(x, z)] = 1;
    const lv = t === RAMP ? 0 : zz.lv;
    const r = R();
    lamps.push({ id: lamps.length, x: (x + 0.5) * C, z: (z + 0.5) * C, y: map.ceilH(x, z) - 0.06, cx: x, cz: z, lv, kind: lv < 0 ? 'bulb' : 'tube',
      emergency: r < 0.12, broken: r >= 0.12 && r < 0.36, flicky: R() < 0.3, ph: R() * 100 });
  }
  map.lamps = lamps;

  // ---------- Decals ----------
  const decals = [];
  const floorCells = []; for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) if (g[I(x, z)] === FLOOR && zones[zone[I(x, z)]].kind !== 'exit') floorCells.push([x, z]);
  for (let i = 0; i < 34; i++) { const [x, z] = pick(floorCells); decals.push({ type: R() < 0.55 ? 'blood' : 'stain', x: (x + 0.5) * C + (R() - 0.5) * 1.6, z: (z + 0.5) * C + (R() - 0.5) * 1.6, rot: R() * 6.28, s: 0.7 + R() * 1.4 }); }
  const writings = ['IT HEARS YOU', "DON'T RUN", 'HIDE', 'THE LIGHTS LIE', 'IT WAS NEVER A PATIENT', 'KEEP QUIET', 'NO ONE LEAVES'];
  const wallSpots = [];
  for (const [x, z] of floorCells) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (g[I(x + dx, z + dz)] === WALL) wallSpots.push([x, z, dx, dz]);
  for (let i = 0; i < 16; i++) { const [x, z, dx, dz] = pick(wallSpots); decals.push({ type: i < 5 ? 'text' : 'smear', text: writings[i % writings.length], x: (x + 0.5) * C + dx * (C / 2 - 0.01), z: (z + 0.5) * C + dz * (C / 2 - 0.01), nx: -dx, nz: -dz, y: zones[zone[I(x, z)]].lv < 0 ? FL1 + 1.5 : 1.5, s: 0.8 + R() * 0.6 }); }
  map.decals = decals;
  map.rand = R;
  return map;
}

// ------------------------------------------------------------------ shared API
const api = {
  I(x, z) { return z * W + x; },
  inb(x, z) { return x >= 0 && z >= 0 && x < W && z < H; },
  t(x, z) { return this.inb(x, z) ? this.g[z * W + x] : WALL; },
  zoneOf(x, z) { const k = this.inb(x, z) ? this.zone[z * W + x] : -1; return k >= 0 ? this.zones[k] : null; },
  cell(wx, wz) { return [Math.floor(wx / C), Math.floor(wz / C)]; },
  zoneAt(wx, wz) { const [x, z] = this.cell(wx, wz); return this.zoneOf(x, z); },
  ceilH(x, z) {
    if (this.t(x, z) === RAMP) return CE0;
    const zz = this.zoneOf(x, z); if (!zz) return CE0;
    if (zz.kind === 'exit') return zz.lv < 0 ? FL1 + 6 : 6;
    return zz.lv < 0 ? CE1 : CE0;
  },
  floorH(wx, wz) {
    const [x, z] = this.cell(wx, wz);
    if (this.t(x, z) === RAMP) { const k = Math.min(1, Math.max(0, (wz - RZ0) / (RZ1 - RZ0))); return FL0 + (FL1 - FL0) * k; }
    const zz = this.zoneOf(x, z); return zz && zz.lv < 0 ? FL1 : FL0;
  },
  levelAt(wx, wz) { return this.floorH(wx, wz) < -1.7 ? -1 : 0; },
  // passage axis of a door/secret cell: 'z' if walls are on the x sides
  axis(x, z) { const w = this.t(x - 1, z), e = this.t(x + 1, z); return (w === WALL || w === SECRET) && (e === WALL || e === SECRET) ? 'z' : 'x'; },
  blocksSight(x, z) {
    const t = this.t(x, z);
    if (t === WALL) return true;
    if (t === SECRET) return !this.secretOpen[this.secIdx[z * W + x]];
    if (t === DOOR) return !this.doorOpen[this.doorIdx[z * W + x]];
    return false;
  },
  los(ax, az, bx, bz) {
    let x = Math.floor(ax / C), z = Math.floor(az / C);
    const tx = Math.floor(bx / C), tz = Math.floor(bz / C);
    const dx = bx - ax, dz = bz - az, sx = Math.sign(dx), sz = Math.sign(dz);
    const tdx = dx !== 0 ? Math.abs(C / dx) : Infinity, tdz = dz !== 0 ? Math.abs(C / dz) : Infinity;
    let tmx = dx > 0 ? ((x + 1) * C - ax) / dx : dx < 0 ? (x * C - ax) / dx : Infinity;
    let tmz = dz > 0 ? ((z + 1) * C - az) / dz : dz < 0 ? (z * C - az) / dz : Infinity;
    let n = Math.abs(tx - x) + Math.abs(tz - z);
    if (n > 120) return false;
    while (n-- > 0) {
      if (tmx < tmz) { x += sx; tmx += tdx; } else { z += sz; tmz += tdz; }
      if (this.blocksSight(x, z)) return false;
    }
    return true;
  },
  // collision boxes for a cell [minx,minz,maxx,maxz]
  boxes(x, z, out) {
    const x0 = x * C, z0 = z * C, x1 = x0 + C, z1 = z0 + C;
    const t = this.t(x, z);
    if (t === WALL) { out.push([x0, z0, x1, z1]); return; }
    if (t === SECRET) { if (!this.secretOpen[this.secIdx[z * W + x]]) out.push([x0, z0, x1, z1]); else this._jambs(x, z, out, 0.35); return; }
    if (t === DOOR) { if (!this.doorOpen[this.doorIdx[z * W + x]]) out.push([x0, z0, x1, z1]); else this._jambs(x, z, out, 0.5); return; }
    if (t === PROP) {
      const p = this.props[this.propIdx[z * W + x]];
      if (p.type === 'locker' || p.type === 'valve' || p.type === 'breaker' || p.type === 'panel') { const [fx, fz] = this.facing(p.x, p.z); const d = p.type === 'valve' ? 0.6 : 0.75; this._wallBox(x, z, fx, fz, d, out); return; }
      const m = p.type === 'tank' ? 0.1 : p.type === 'bench' ? 0.6 : 0.28;
      out.push([x0 + m, z0 + m, x1 - m, z1 - m]);
    }
  },
  _jambs(x, z, out, w) {
    const x0 = x * C, z0 = z * C, x1 = x0 + C, z1 = z0 + C;
    if (this.axis(x, z) === 'z') { out.push([x0, z0, x0 + w, z1]); out.push([x1 - w, z0, x1, z1]); }
    else { out.push([x0, z0, x1, z0 + w]); out.push([x0, z1 - w, x1, z1]); }
  },
  _wallBox(x, z, fx, fz, d, out) { // box of depth d against the wall opposite facing dir
    const x0 = x * C, z0 = z * C, x1 = x0 + C, z1 = z0 + C;
    if (fx > 0) out.push([x0, z0 + 0.4, x0 + d, z1 - 0.4]);
    else if (fx < 0) out.push([x1 - d, z0 + 0.4, x1, z1 - 0.4]);
    else if (fz > 0) out.push([x0 + 0.4, z0, x1 - 0.4, z0 + d]);
    else out.push([x0 + 0.4, z1 - d, x1 - 0.4, z1]);
  },
  // direction a wall-mounted prop faces (away from the wall)
  facing(x, z) {
    const open = t => t === FLOOR || t === RAMP || t === DOOR;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of dirs) if (this.t(x - dx, z - dz) === WALL && open(this.t(x + dx, z + dz))) return [dx, dz];
    for (const [dx, dz] of dirs) if (this.t(x - dx, z - dz) === WALL) return [dx, dz];
    for (const [dx, dz] of dirs) if (open(this.t(x + dx, z + dz))) return [dx, dz];
    return [0, 1];
  },
  collide(p, r) { // p {x,z}; pushes out of boxes, 2 passes
    const out = [];
    for (let pass = 0; pass < 2; pass++) {
      const cx = Math.floor(p.x / C), cz = Math.floor(p.z / C);
      out.length = 0;
      for (let z = cz - 1; z <= cz + 1; z++) for (let x = cx - 1; x <= cx + 1; x++) this.boxes(x, z, out);
      for (const b of out) {
        const qx = Math.max(b[0], Math.min(p.x, b[2])), qz = Math.max(b[1], Math.min(p.z, b[3]));
        let dx = p.x - qx, dz = p.z - qz; const d2 = dx * dx + dz * dz;
        if (d2 < r * r) {
          if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
          else { // centre inside box: push out along smallest axis
            const l = p.x - b[0], rr = b[2] - p.x, u = p.z - b[1], dd = b[3] - p.z, m = Math.min(l, rr, u, dd);
            if (m === l) p.x = b[0] - r; else if (m === rr) p.x = b[2] + r; else if (m === u) p.z = b[1] - r; else p.z = b[3] + r;
          }
        }
      }
    }
  },
  // monster navigation
  nav(x, z) {
    const t = this.t(x, z);
    if (t === FLOOR || t === RAMP) { const zz = this.zoneOf(x, z); return !!zz && zz.kind !== 'exit'; }
    if (t === DOOR) { const d = this.doors[this.doorIdx[z * W + x]]; return d.type === 'D' || (this.doorOpen[d.id] && d.type !== 'G' && d.type !== 'C'); }
    if (t === SECRET) return !!this.secretOpen[this.secIdx[z * W + x]];
    return false;
  },
  path(sx, sz, tx, tz, maxIter = 5000) {
    if (!this.nav(tx, tz)) { // nearest navigable neighbour
      let best = null, bd = 1e9;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) if (this.nav(tx + dx, tz + dz)) { const d = Math.hypot(tx + dx - sx, tz + dz - sz); if (d < bd) { bd = d; best = [tx + dx, tz + dz]; } }
      if (!best) return null; [tx, tz] = best;
    }
    if (sx === tx && sz === tz) return [[tx, tz]];
    const N = W * H, gs = this._gs || (this._gs = new Float32Array(N)), came = this._came || (this._came = new Int32Array(N)), stamp = this._st || (this._st = new Uint32Array(N));
    this._sn = (this._sn || 0) + 1; const sn = this._sn;
    const heap = [], hf = [];
    const push = (i, f) => { heap.push(i); hf.push(f); let k = heap.length - 1; while (k > 0) { const p = (k - 1) >> 1; if (hf[p] <= hf[k]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; [hf[p], hf[k]] = [hf[k], hf[p]]; k = p; } };
    const pop = () => { const top = heap[0]; const li = heap.pop(), lf = hf.pop(); if (heap.length) { heap[0] = li; hf[0] = lf; let k = 0; for (;;) { const l = 2 * k + 1, r = l + 1; let m = k; if (l < heap.length && hf[l] < hf[m]) m = l; if (r < heap.length && hf[r] < hf[m]) m = r; if (m === k) break; [heap[m], heap[k]] = [heap[k], heap[m]]; [hf[m], hf[k]] = [hf[k], hf[m]]; k = m; } } return top; };
    const hfn = (x, z) => { const dx = Math.abs(x - tx), dz = Math.abs(z - tz); return Math.max(dx, dz) + 0.414 * Math.min(dx, dz); };
    const s = sz * W + sx, tgt = tz * W + tx;
    stamp[s] = sn; gs[s] = 0; came[s] = -1; push(s, hfn(sx, sz));
    const closed = this._cl || (this._cl = new Uint32Array(N));
    let it = 0;
    while (heap.length && it++ < maxIter) {
      const cur = pop(); if (cur === tgt) break;
      if (closed[cur] === sn) continue; closed[cur] = sn;
      const cx = cur % W, cz = (cur / W) | 0;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const nx = cx + dx, nz = cz + dz; if (!this.nav(nx, nz)) continue;
        if (dx && dz && (!this.nav(cx + dx, cz) || !this.nav(cx, cz + dz))) continue;
        // don't cut diagonally through door cells
        if (dx && dz && (this.t(nx, nz) === DOOR || this.t(cx, cz) === DOOR)) continue;
        const ni = nz * W + nx, ng = gs[cur] + (dx && dz ? 1.414 : 1);
        if (stamp[ni] !== sn || ng < gs[ni]) { stamp[ni] = sn; gs[ni] = ng; came[ni] = cur; push(ni, ng + hfn(nx, nz)); }
      }
    }
    if (stamp[tgt] !== sn) return null;
    const out = []; let c = tgt;
    while (c !== s && c >= 0) { out.push([c % W, (c / W) | 0]); c = came[c]; }
    return out.reverse();
  },
  randomNavCell(R, near, rmin, rmax) {
    for (let i = 0; i < 200; i++) {
      let x, z;
      if (near) { const a = R() * 6.283, d = rmin + R() * (rmax - rmin); x = Math.floor((near.x + Math.cos(a) * d) / C); z = Math.floor((near.z + Math.sin(a) * d) / C); }
      else { x = Math.floor(R() * W); z = Math.floor(R() * H); }
      if (this.inb(x, z) && this.nav(x, z) && this.t(x, z) !== DOOR) return [x, z];
    }
    return null;
  },
  inExit(wx, wz) { const zz = this.zoneAt(wx, wz); return zz && zz.kind === 'exit' ? zz.exit : null; },
};
