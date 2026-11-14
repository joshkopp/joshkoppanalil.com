// RECESS — multi-floor grid maps: the abandoned school (hide & seek) and the fun-center complex (tag).
export const WALL = 0, FLOOR = 1, RAMP = 2, RHOLE = 3, HOLE = 4, VENT = 5, PROP = 6, DOOR = 7, FAKE = 8;
export const VENT_H = 1.25;

export function rng(seed) { let s = (seed >>> 0) || 0x9e3779b9; return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; }; }

// ------------------------------------------------------------------ engine
export class GridMap {
  constructor({ W, H, C, FH, nf, name, theme, seed }) {
    Object.assign(this, { W, H, C, FH, nf, name, theme });
    this.R = rng(seed || 1);
    const N = W * H;
    this.g = [...Array(nf)].map(() => new Uint8Array(N));
    this.zone = [...Array(nf)].map(() => new Int16Array(N).fill(-1));
    this.rampIx = [...Array(nf)].map(() => new Int16Array(N).fill(-1));
    this.propIx = [...Array(nf)].map(() => new Int16Array(N).fill(-1));
    this.doorIx = [...Array(nf)].map(() => new Int16Array(N).fill(-1));
    this.dway = [...Array(nf)].map(() => new Uint8Array(N));
    this.zones = []; this.ramps = []; this.props = []; this.spots = []; this.doors = []; this.spawns = {}; this.lamps = [];
  }
  I(x, z) { return z * this.W + x; }
  inb(x, z) { return x >= 0 && z >= 0 && x < this.W && z < this.H; }
  t(f, x, z) { return f >= 0 && f < this.nf && this.inb(x, z) ? this.g[f][z * this.W + x] : WALL; }
  set(f, x, z, v, zi) { if (!this.inb(x, z)) return; this.g[f][this.I(x, z)] = v; if (zi != null) this.zone[f][this.I(x, z)] = zi; }
  base(f) { return f * this.FH; }
  cell(wx, wz) { return [Math.floor(wx / this.C), Math.floor(wz / this.C)]; }
  zoneAt(f, wx, wz) { const [x, z] = this.cell(wx, wz); if (!this.inb(x, z)) return null; const k = this.zone[f][this.I(x, z)]; return k >= 0 ? this.zones[k] : null; }
  addZone(name, kind, f, extra = {}) { this.zones.push({ id: this.zones.length, name, kind, f, ...extra }); return this.zones.length - 1; }
  fill(f, x0, z0, x1, z1, v, zi) { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) this.set(f, x, z, v, zi); }
  room(f, x0, z0, x1, z1, name, kind, extra) { const zi = this.addZone(name, kind, f, { x0, z0, x1, z1, ...extra }); this.fill(f, x0, z0, x1, z1, FLOOR, zi); return zi; }
  doorway(f, x, z) { // opening in a wall, takes the zone of a neighbouring room
    if (!this.inb(x, z)) return;
    let zi = -1; for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const k = this.zone[f][this.I(x + dx, z + dz)]; if (k >= 0 && (zi < 0 || this.zones[k].kind !== 'hall')) zi = k; }
    this.set(f, x, z, FLOOR, zi); this.dway[f][this.I(x, z)] = 1;
  }
  lockedDoor(f, x, z) { this.doorway(f, x, z); this.g[f][this.I(x, z)] = DOOR; this.doorIx[f][this.I(x, z)] = this.doors.length; this.doors.push({ id: this.doors.length, f, x, z }); }
  vent(f, x, z) { const zi = this.ventZone ?? (this.ventZone = this.addZone('Air Vent', 'vent', f)); this.set(f, x, z, VENT, zi); }
  fake(f, x, z) { this.doorway(f, x, z); this.g[f][this.I(x, z)] = FAKE; }
  hole(f, x0, z0, x1, z1) { for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) if (this.t(f, x, z) !== RHOLE) this.set(f, x, z, HOLE); }
  // stairs from floor f up to f+1, cells x0..x1/z0..z1, ascending along dir ([1,0],[-1,0],[0,1],[0,-1])
  ramp(f, x0, z0, x1, z1, dir, name = 'Stairs') {
    const id = this.ramps.length, zi = this.addZone(name, 'stairs', f);
    const C = this.C, [dx, dz] = dir;
    const lo = dx > 0 ? x0 * C : dx < 0 ? -(x1 + 1) * C : dz > 0 ? z0 * C : -(z1 + 1) * C;
    const len = (dx ? (x1 - x0 + 1) : (z1 - z0 + 1)) * C;
    this.ramps.push({ id, f, x0, z0, x1, z1, dir, lo, len });
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      this.set(f, x, z, RAMP, zi); this.rampIx[f][this.I(x, z)] = id;
      this.set(f + 1, x, z, RHOLE, zi); this.rampIx[f + 1][this.I(x, z)] = id;
    }
    // no walking off the top on the lower floor, or off the bottom on the upper floor
    const topCells = [], botCells = [], sides = [];
    for (let z = z0; z <= z1; z++) for (let x = x0; x <= x1; x++) {
      if (dx > 0 && x === x1) topCells.push([x + 1, z]); if (dx < 0 && x === x0) topCells.push([x - 1, z]);
      if (dz > 0 && z === z1) topCells.push([x, z + 1]); if (dz < 0 && z === z0) topCells.push([x, z - 1]);
      if (dx > 0 && x === x0) botCells.push([x - 1, z]); if (dx < 0 && x === x1) botCells.push([x + 1, z]);
      if (dz > 0 && z === z0) botCells.push([x, z - 1]); if (dz < 0 && z === z1) botCells.push([x, z + 1]);
      if (dx) { if (z === z0) sides.push([x, z - 1]); if (z === z1) sides.push([x, z + 1]); } else { if (x === x0) sides.push([x - 1, z]); if (x === x1) sides.push([x + 1, z]); }
    }
    for (const [x, z] of topCells) if (this.t(f, x, z) !== RAMP) this.set(f, x, z, WALL);
    for (const [x, z] of botCells) if (this.t(f + 1, x, z) !== RHOLE) this.set(f + 1, x, z, HOLE);
    for (const [x, z] of sides) { if (this.t(f, x, z) === FLOOR) this.set(f, x, z, WALL); if (this.t(f + 1, x, z) === FLOOR) this.set(f + 1, x, z, HOLE); }
    return id;
  }
  prop(f, x, z, type, extra = {}) {
    if (this.t(f, x, z) !== FLOOR || this.dway[f][this.I(x, z)]) return -1;
    this.g[f][this.I(x, z)] = PROP; this.propIx[f][this.I(x, z)] = this.props.length;
    this.props.push({ id: this.props.length, f, x, z, type, ...extra }); return this.props.length - 1;
  }
  // ---------------- queries
  rampK(f, wx, wz) {
    const [x, z] = this.cell(wx, wz); if (!this.inb(x, z)) return -1;
    const ri = this.rampIx[f][this.I(x, z)]; if (ri < 0) return -1;
    const r = this.ramps[ri], s = r.dir[0] ? wx * r.dir[0] : wz * r.dir[1];
    return Math.max(0, Math.min(1, (s - r.lo) / r.len));
  }
  heightAt(f, wx, wz) {
    const [x, z] = this.cell(wx, wz), t = this.t(f, x, z);
    if (t === RAMP || t === RHOLE) { const ri = this.rampIx[f][this.I(x, z)], r = this.ramps[ri]; return this.base(r.f) + this.rampK(f, wx, wz) * this.FH; }
    return this.base(f);
  }
  // floor transitions on stairs (with hysteresis)
  updateFloor(p) {
    const [x, z] = this.cell(p.x, p.z), t = this.t(p.f, x, z);
    if (t === RAMP && this.rampK(p.f, p.x, p.z) > 0.88) p.f++;
    else if (t === RHOLE && this.rampK(p.f, p.x, p.z) < 0.12) p.f--;
  }
  blocked(f, x, z, crouch) {
    const t = this.t(f, x, z);
    if (t === WALL || t === HOLE) return true;
    if (t === VENT) return !crouch;
    if (t === DOOR) return !this.doors[this.doorIx[f][this.I(x, z)]].open;
    return false;
  }
  boxes(f, x, z, crouch, out) {
    const C = this.C, x0 = x * C, z0 = z * C;
    if (this.blocked(f, x, z, crouch)) { out.push([x0, z0, x0 + C, z0 + C]); return; }
    if (this.t(f, x, z) === PROP) { const p = this.props[this.propIx[f][this.I(x, z)]]; const m = p.m ?? 0.22; out.push([x0 + m, z0 + m, x0 + C - m, z0 + C - m]); }
  }
  collide(p, r, crouch) {
    const out = [];
    for (let pass = 0; pass < 2; pass++) {
      const [cx, cz] = this.cell(p.x, p.z); out.length = 0;
      for (let z = cz - 1; z <= cz + 1; z++) for (let x = cx - 1; x <= cx + 1; x++) this.boxes(p.f, x, z, crouch, out);
      for (const b of out) {
        const qx = Math.max(b[0], Math.min(p.x, b[2])), qz = Math.max(b[1], Math.min(p.z, b[3]));
        const dx = p.x - qx, dz = p.z - qz, d2 = dx * dx + dz * dz;
        if (d2 >= r * r) continue;
        if (d2 > 1e-8) { const d = Math.sqrt(d2), k = (r - d) / d; p.x += dx * k; p.z += dz * k; }
        else { const l = p.x - b[0], rr = b[2] - p.x, u = p.z - b[1], dd = b[3] - p.z, m = Math.min(l, rr, u, dd); if (m === l) p.x = b[0] - r; else if (m === rr) p.x = b[2] + r; else if (m === u) p.z = b[1] - r; else p.z = b[3] + r; }
      }
    }
  }
  inBlocked(f, wx, wz, crouch) { const [x, z] = this.cell(wx, wz); if (this.blocked(f, x, z, crouch)) return true; const o = []; this.boxes(f, x, z, crouch, o); return o.some(b => wx > b[0] + 0.05 && wx < b[2] - 0.05 && wz > b[1] + 0.05 && wz < b[3] - 0.05); }
  sightBlock(f, x, z) { const t = this.t(f, x, z); return t === WALL || t === FAKE || (t === DOOR && !this.doors[this.doorIx[f][this.I(x, z)]].open); }
  los(f, ax, az, bx, bz) {
    const C = this.C; let x = Math.floor(ax / C), z = Math.floor(az / C); const tx = Math.floor(bx / C), tz = Math.floor(bz / C);
    const dx = bx - ax, dz = bz - az, sx = Math.sign(dx), sz = Math.sign(dz);
    const tdx = dx ? Math.abs(C / dx) : Infinity, tdz = dz ? Math.abs(C / dz) : Infinity;
    let tmx = dx > 0 ? ((x + 1) * C - ax) / dx : dx < 0 ? (x * C - ax) / dx : Infinity, tmz = dz > 0 ? ((z + 1) * C - az) / dz : dz < 0 ? (z * C - az) / dz : Infinity;
    let n = Math.abs(tx - x) + Math.abs(tz - z); if (n > 150) return false;
    while (n-- > 0) { if (tmx < tmz) { x += sx; tmx += tdx; } else { z += sz; tmz += tdz; } if (this.sightBlock(f, x, z)) return false; }
    return true;
  }
  facing(f, x, z) {
    const open = t => t === FLOOR || t === RAMP || t === VENT || t === FAKE;
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of dirs) if (this.t(f, x - dx, z - dz) === WALL && open(this.t(f, x + dx, z + dz))) return [dx, dz];
    for (const [dx, dz] of dirs) if (open(this.t(f, x + dx, z + dz))) return [dx, dz];
    return [0, 1];
  }
  // is every walkable cell of a zone reachable from the zone's openings? (used while furnishing)
  zoneConnected(zi) {
    const zz = this.zones[zi], f = zz.f, cells = [];
    for (let z = zz.z0; z <= zz.z1; z++) for (let x = zz.x0; x <= zz.x1; x++) { const t = this.t(f, x, z); if ((t === FLOOR || t === RAMP) && this.zone[f][this.I(x, z)] === zi) cells.push([x, z]); }
    if (!cells.length) return true;
    const key = (x, z) => z * this.W + x, seen = new Set([key(...cells[0])]), q = [cells[0]];
    while (q.length) { const [x, z] = q.pop(); for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const nx = x + dx, nz = z + dz, t = this.t(f, nx, nz); if ((t === FLOOR || t === RAMP || t === VENT || t === FAKE || t === DOOR || t === RHOLE) && !seen.has(key(nx, nz))) { seen.add(key(nx, nz)); if (nx >= zz.x0 - 1 && nx <= zz.x1 + 1 && nz >= zz.z0 - 1 && nz <= zz.z1 + 1) q.push([nx, nz]); } } }
    return cells.every(([x, z]) => seen.has(key(x, z)));
  }
  // place a prop against a wall somewhere in a room (never next to an opening, never disconnecting the room)
  wallProp(zi, type, extra = {}, tries = 30) {
    const zz = this.zones[zi], f = zz.f, R = this.R;
    for (let i = 0; i < tries; i++) {
      const x = zz.x0 + Math.floor(R() * (zz.x1 - zz.x0 + 1)), z = zz.z0 + Math.floor(R() * (zz.z1 - zz.z0 + 1));
      if (this.t(f, x, z) !== FLOOR) continue;
      const nb = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      if (!nb.some(([dx, dz]) => this.t(f, x + dx, z + dz) === WALL && !this.dway[f][this.I(x + dx, z + dz)])) continue;
      let nearOpening = false;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) { const t = this.t(f, x + dx, z + dz); if (this.dway[f][this.I(x + dx, z + dz)] || t === VENT || t === FAKE || t === DOOR || t === RAMP || t === RHOLE) nearOpening = true; }
      if (nearOpening) continue;
      const id = this.prop(f, x, z, type, extra); if (id < 0) continue;
      if (!this.zoneConnected(zi)) { this.g[f][this.I(x, z)] = FLOOR; this.propIx[f][this.I(x, z)] = -1; this.props.pop(); continue; }
      const [fx, fz] = this.facing(f, x, z); this.props[id].fx = fx; this.props[id].fz = fz;
      return id;
    }
    return -1;
  }
  centerProp(zi, type, x, z, extra = {}) {
    const f = this.zones[zi].f; const id = this.prop(f, x, z, type, extra); if (id < 0) return -1;
    if (!this.zoneConnected(zi)) { this.g[f][this.I(x, z)] = FLOOR; this.propIx[f][this.I(x, z)] = -1; this.props.pop(); return -1; }
    const [fx, fz] = this.facing(f, x, z); Object.assign(this.props[id], { fx, fz }); return id;
  }
  spot(zi, type, risk) {
    const id = this.wallProp(zi, type, { spot: true });
    if (id < 0) return -1;
    const p = this.props[id], C = this.C;
    const s = { id: this.spots.length, prop: id, type, risk, f: p.f, x: (p.x + 0.5) * C, z: (p.z + 0.5) * C, fx: p.fx, fz: p.fz, room: this.zones[zi].name,
      ex: (p.x + 0.5 + p.fx) * C, ez: (p.z + 0.5 + p.fz) * C };
    p.spotId = s.id; this.spots.push(s); return s.id;
  }
  finalizeLamps() {
    for (let f = 0; f < this.nf; f++) {
      const taken = new Uint8Array(this.W * this.H);
      for (let z = 1; z < this.H - 1; z++) for (let x = 1; x < this.W - 1; x++) {
        const t = this.t(f, x, z); if (t !== FLOOR && t !== PROP) continue;
        let near = false; for (let dz = -2; dz <= 2 && !near; dz++) for (let dx = -2; dx <= 2; dx++) if (this.inb(x + dx, z + dz) && taken[this.I(x + dx, z + dz)]) { near = true; break; }
        if (near) continue; taken[this.I(x, z)] = 1;
        const zz = this.zones[this.zone[f][this.I(x, z)]];
        this.lamps.push({ f, x: (x + 0.5) * this.C, z: (z + 0.5) * this.C, y: this.base(f) + this.FH - 0.3, kind: zz ? zz.kind : 'hall', broken: this.R() < (this.theme === 'school' ? 0.3 : 0.02), ph: this.R() * 100, hue: this.R() });
      }
    }
  }
  roomCount() { return this.zones.filter(z => !['hall', 'stairs', 'vent'].includes(z.kind)).length; }
}

// ------------------------------------------------------------------ the school
export function buildSchool() {
  const m = new GridMap({ W: 59, H: 44, C: 2, FH: 4.2, nf: 2, name: 'Westbrook Middle School', theme: 'school', seed: 1337 });
  const bands = [[1, 8], [13, 20], [25, 32], [37, 42]];
  const hallDoors = [[9], [12, 21], [24, 33], [36]];
  for (let f = 0; f < 2; f++) {
    const hz = f ? ' (2F)' : '';
    const hA = m.addZone('North Hall' + hz, 'hall', f), hB = m.addZone('Main Hall' + hz, 'hall', f), hC = m.addZone('South Hall' + hz, 'hall', f), hW = m.addZone('West Hall' + hz, 'hall', f), hE = m.addZone('East Hall' + hz, 'hall', f), hM = m.addZone('Center Hall' + hz, 'hall', f);
    m.fill(f, 2, 10, 57, 11, FLOOR, hA); m.fill(f, 2, 22, 57, 23, FLOOR, hB); m.fill(f, 2, 34, 57, 35, FLOOR, hC);
    m.fill(f, 2, 1, 3, 42, FLOOR, hW); m.fill(f, 56, 1, 57, 42, FLOOR, hE); m.fill(f, 29, 1, 30, 42, FLOOR, hM);
  }
  const R = (f, band, x0, x1, name, kind, opt = {}) => {
    const [z0, z1] = bands[band];
    const zi = m.room(f, x0, z0, x1, z1, name, kind);
    if (!opt.noDoors) for (const dz of hallDoors[band]) { const w = x1 - x0 + 1; const xs = w >= 9 ? [x0 + 2, x1 - 2] : [Math.floor((x0 + x1) / 2)]; for (const x of xs) m.doorway(f, x, dz); }
    if (opt.west && x0 === 5) m.doorway(f, 4, Math.floor((z0 + z1) / 2));
    if (opt.east && x1 === 54) m.doorway(f, 55, Math.floor((z0 + z1) / 2));
    if (opt.westC && x0 === 32) m.doorway(f, 31, Math.floor((z0 + z1) / 2));
    if (opt.eastC && x1 === 27) m.doorway(f, 28, Math.floor((z0 + z1) / 2));
    return zi;
  };
  // ---- ground floor
  const Z = {};
  Z.gym = R(0, 0, 5, 16, 'Gymnasium', 'gym', { west: 1 }); Z.lock = R(0, 0, 18, 22, 'Locker Room', 'locker'); Z.coach = R(0, 0, 24, 27, "Coach's Office", 'office', { eastC: 1 });
  Z.caf = R(0, 0, 32, 44, 'Cafeteria', 'cafeteria', { westC: 1 }); Z.kit = R(0, 0, 46, 50, 'Kitchen', 'kitchen'); Z.pan = R(0, 0, 52, 54, 'Pantry', 'storage', { east: 1 });
  Z.prin = R(0, 1, 5, 9, "Principal's Office", 'principal', { noDoors: 1 }); m.lockedDoor(0, 7, 21);
  Z.front = R(0, 1, 11, 16, 'Front Office', 'office'); Z.nurse = R(0, 1, 18, 22, "Nurse's Office", 'nurse'); Z.rec = R(0, 1, 24, 27, 'Records', 'storage', { eastC: 1 });
  Z.c101 = R(0, 1, 32, 36, 'Classroom 101', 'class', { westC: 1 }); Z.c102 = R(0, 1, 38, 42, 'Classroom 102', 'class'); Z.boys = R(0, 1, 44, 46, "Boys' Bathroom", 'bath', { noDoors: 1 }); m.doorway(0, 45, 21);
  Z.girls = R(0, 1, 48, 51, "Girls' Bathroom", 'bath', { noDoors: 1 }); m.doorway(0, 49, 21);
  Z.lib = R(0, 2, 5, 16, 'Library', 'library', { west: 1 }); Z.clo = R(0, 2, 18, 20, 'Storage Closet', 'closet', { noDoors: 1 }); m.doorway(0, 19, 24);
  Z.jan = R(0, 2, 22, 24, "Janitor's Room", 'janitor', { noDoors: 1 }); m.doorway(0, 23, 33);
  Z.lab1 = R(0, 2, 32, 38, 'Science Lab 1', 'lab', { westC: 1 }); Z.lab2 = R(0, 2, 40, 46, 'Science Lab 2', 'lab'); Z.chem = R(0, 2, 48, 50, 'Chemical Storage', 'storage', { noDoors: 1 }); m.doorway(0, 49, 24);
  Z.c103 = R(0, 2, 52, 54, 'Classroom 103', 'class', { east: 1 });
  Z.aud = R(0, 3, 5, 15, 'Auditorium', 'stage', { west: 1 }); Z.hidA = R(0, 3, 17, 19, 'Hidden Room', 'hidden', { noDoors: 1 }); Z.band = R(0, 3, 21, 27, 'Band Room', 'music', { eastC: 1 });
  Z.art = R(0, 3, 32, 39, 'Art Room', 'art', { westC: 1 }); Z.comp = R(0, 3, 41, 47, 'Computer Lab', 'computer'); Z.serv = R(0, 3, 51, 54, 'Server Closet', 'closet', { noDoors: 1, east: 1 }); m.doorway(0, 55, 40);
  // stairs
  m.room(0, 26, 25, 27, 25, 'West Stairwell', 'stairs'); m.doorway(0, 26, 24); m.doorway(0, 27, 24);
  m.ramp(0, 26, 26, 27, 30, [0, 1], 'West Stairs');
  m.room(0, 53, 20, 54, 20, 'East Stairwell', 'stairs'); m.doorway(0, 53, 21); m.doorway(0, 54, 21);
  m.ramp(0, 53, 15, 54, 19, [0, -1], 'East Stairs');
  // secrets and vents (ground)
  m.fake(0, 18, 36); m.vent(0, 16, 40); m.vent(0, 20, 39);              // hidden room: fake wall from the south hall, vents to auditorium + band room
  m.fake(0, 17, 28);                                                    // library bookshelf door into the storage closet
  m.vent(0, 51, 4); m.vent(0, 47, 16);                                  // kitchen↔pantry, boys↔girls
  for (let z = 37; z <= 42; z++) m.vent(0, 49, z); m.vent(0, 48, 41); m.vent(0, 50, 38); m.vent(0, 49, 36); // crawl tunnel: south hall → computer lab / server closet

  // ---- second floor
  R(1, 0, 5, 10, 'Classroom 201', 'class', { west: 1 }); R(1, 0, 12, 17, 'Classroom 202', 'class'); Z.lounge = R(1, 0, 19, 27, "Teachers' Lounge", 'lounge', { eastC: 1 });
  R(1, 0, 32, 39, 'Computer Lab 2', 'computer', { westC: 1 }); R(1, 0, 41, 46, 'Classroom 204', 'class'); R(1, 0, 48, 54, 'Classroom 205', 'class', { east: 1 });
  R(1, 1, 5, 12, 'Science Lab 3', 'lab', { west: 1 }); R(1, 1, 14, 17, 'Prep Room', 'storage'); Z.bath2 = R(1, 1, 19, 22, 'Bathroom (2F)', 'bath'); Z.sto2 = R(1, 1, 24, 27, 'Storage Room', 'closet', { eastC: 1 });
  R(1, 1, 32, 37, 'History Room', 'class', { westC: 1 }); R(1, 1, 39, 44, 'Math Room', 'class'); R(1, 1, 46, 51, 'Music Room', 'music');
  m.room(1, 53, 13, 54, 14, 'East Stairwell (2F)', 'stairs'); m.doorway(1, 53, 12); m.doorway(1, 54, 12);
  Z.study = R(1, 2, 5, 16, 'Study Hall', 'library', { west: 1 }); Z.hidB = R(1, 2, 18, 20, 'Forgotten Room', 'hidden', { noDoors: 1 }); Z.jan2 = R(1, 2, 22, 24, 'Janitor Closet (2F)', 'janitor', { noDoors: 1 }); m.doorway(1, 23, 24);
  m.room(1, 26, 31, 27, 32, 'West Stairwell (2F)', 'stairs'); m.doorway(1, 26, 33); m.doorway(1, 27, 33);
  R(1, 2, 32, 36, 'Detention', 'class', { westC: 1 }); R(1, 2, 38, 42, "Counselor's Office", 'office'); R(1, 2, 44, 49, 'Classroom 206', 'class'); R(1, 2, 51, 54, 'Supply Closet', 'closet', { east: 1 });
  R(1, 3, 5, 16, 'Attic Storage', 'attic', { west: 1 }); R(1, 3, 18, 27, 'Old Records', 'storage', { eastC: 1 });
  R(1, 3, 32, 39, 'Classroom 207', 'class', { westC: 1 }); R(1, 3, 41, 48, 'Classroom 208', 'class'); R(1, 3, 50, 54, 'Broom Closet', 'janitor', { east: 1 });
  m.vent(1, 17, 28); m.vent(1, 21, 30); m.vent(1, 23, 15);
  m.vent(1, 17, 40);                                                    // attic ↔ old records crawl hole

  // ---- furnishing + hiding spots
  const S = {
    class: [['desk', 'risky'], ['cabinet', 'medium'], ['curtain', 'risky'], ['box', 'safe']],
    gym: [['box', 'safe'], ['box', 'medium'], ['curtain', 'risky'], ['locker', 'medium']],
    locker: [['locker', 'medium'], ['locker', 'medium'], ['locker', 'medium'], ['locker', 'risky']],
    office: [['desk', 'risky'], ['cabinet', 'medium'], ['closet', 'safe']],
    principal: [['desk', 'risky']],
    cafeteria: [['curtain', 'risky'], ['box', 'medium'], ['cabinet', 'medium']],
    kitchen: [['cabinet', 'medium'], ['closet', 'safe'], ['box', 'medium']],
    library: [['bookshelf', 'risky'], ['bookshelf', 'risky'], ['bookshelf', 'medium'], ['desk', 'risky']],
    nurse: [['bed', 'risky'], ['bed', 'risky'], ['curtain', 'risky'], ['cabinet', 'medium']],
    bath: [['closet', 'medium']],
    closet: [['box', 'safe'], ['closet', 'medium']],
    janitor: [['box', 'safe'], ['closet', 'medium']],
    storage: [['box', 'safe'], ['cabinet', 'medium']],
    lab: [['cabinet', 'medium'], ['closet', 'medium'], ['desk', 'risky']],
    computer: [['desk', 'risky'], ['desk', 'risky'], ['cabinet', 'medium']],
    stage: [['curtain', 'risky'], ['curtain', 'risky'], ['box', 'medium'], ['couch', 'risky']],
    music: [['closet', 'safe'], ['curtain', 'risky'], ['couch', 'risky']],
    art: [['cabinet', 'medium'], ['box', 'medium'], ['curtain', 'risky']],
    lounge: [['couch', 'risky'], ['closet', 'safe'], ['cabinet', 'medium']],
    hidden: [['compartment', 'safe'], ['box', 'safe']],
    attic: [['box', 'safe'], ['box', 'medium'], ['couch', 'risky'], ['compartment', 'safe']],
  };
  const P = {
    class: ['studentdesk', 'studentdesk', 'studentdesk', 'shelf'], gym: ['bleacher', 'bleacher', 'mat'], locker: ['bench'], office: ['shelf', 'plant'], principal: ['shelf', 'plant', 'cabinetP'],
    cafeteria: ['table', 'table', 'table', 'vending'], kitchen: ['counter', 'counter', 'fridge'], library: ['shelf', 'shelf', 'shelf', 'table'], nurse: ['shelf'], bath: ['sink', 'sink'],
    closet: ['shelf'], janitor: ['shelf', 'bucket'], storage: ['shelf', 'crate', 'crate'], lab: ['labtable', 'labtable', 'shelf'], computer: ['pcdesk', 'pcdesk', 'pcdesk'],
    stage: ['seats', 'seats', 'seats', 'piano'], music: ['piano', 'chairs', 'chairs'], art: ['easel', 'easel', 'table'], lounge: ['table', 'fridge', 'vending'], hidden: ['crate'], attic: ['crate', 'crate', 'crate', 'shelf'],
  };
  for (const z of m.zones) {
    if (!S[z.kind] || z.x0 == null) continue;
    for (const [type, risk] of S[z.kind]) m.spot(z.id, type, risk);
    for (const p of P[z.kind] || []) m.wallProp(z.id, p);
    // free-standing furniture rows in classrooms / cafeteria / library
    if (['class', 'cafeteria', 'computer', 'lab'].includes(z.kind)) {
      const t = z.kind === 'cafeteria' ? 'table' : z.kind === 'lab' ? 'labtable' : z.kind === 'computer' ? 'pcdesk' : 'studentdesk';
      for (let zz = z.z0 + 2; zz <= z.z1 - 2; zz += 2) for (let xx = z.x0 + 2; xx <= z.x1 - 2; xx += 2) if (m.R() < 0.8) m.centerProp(z.id, t, xx, zz, { m: 0.45 });
    }
  }
  m.spawns.seeker = [{ f: 0, x: 7 * 2 + 1, z: 16 * 2 + 1 }];
  m.spawns.hiders = []; for (let i = 0; i < 12; i++) m.spawns.hiders.push({ f: 0, x: (6 + i * 4) * 2 + 1, z: 22.5 * 2 + (i % 2) * 1.2 });
  m.spawns.spec = { f: 0, x: 30 * 2, z: 22.5 * 2 };
  m.finalizeLamps();
  return m;
}

// ------------------------------------------------------------------ the fun-center complex (tag)
export function buildComplex() {
  const m = new GridMap({ W: 66, H: 50, C: 2, FH: 5, nf: 3, name: 'Funtopia Complex', theme: 'fun', seed: 4242 });
  const XB = [[3, 16], [19, 32], [35, 48], [51, 62]], ZB = [[3, 16], [19, 32], [35, 46]];
  const XC = [[1, 2], [17, 18], [33, 34], [49, 50], [63, 64]], ZC = [[1, 2], [17, 18], [33, 34], [47, 48]];
  const R = m.R;
  // ---- main floors 1 + 2: concourse grid
  for (const f of [1, 2]) {
    const hz = m.addZone(f === 1 ? 'Concourse' : 'Upper Concourse', 'hall', f);
    for (const [a, b] of XC) m.fill(f, a, 1, b, 48, FLOOR, hz);
    for (const [a, b] of ZC) m.fill(f, 1, a, 64, b, FLOOR, hz);
  }
  // a block = rect including its outer wall ring; rooms are carved inside
  const doorsOut = (f, x0, z0, x1, z1, sides = 'nsew', w = 2) => { // openings to the concourse on chosen sides
    const mx = Math.floor((x0 + x1) / 2), mz = Math.floor((z0 + z1) / 2);
    if (sides.includes('n')) for (let i = 0; i < w; i++) m.doorway(f, mx + i - (w >> 1), z0 - 1);
    if (sides.includes('s')) for (let i = 0; i < w; i++) m.doorway(f, mx + i - (w >> 1), z1 + 1);
    if (sides.includes('w')) for (let i = 0; i < w; i++) m.doorway(f, x0 - 1, mz + i - (w >> 1));
    if (sides.includes('e')) for (let i = 0; i < w; i++) m.doorway(f, x1 + 1, mz + i - (w >> 1));
  };
  const single = (f, bx, bz, name, kind) => { const [x0, x1] = XB[bx], [z0, z1] = ZB[bz]; const zi = m.room(f, x0 + 1, z0 + 1, x1 - 1, z1 - 1, name, kind); doorsOut(f, x0 + 1, z0 + 1, x1 - 1, z1 - 1, 'nsew', 3); return zi; };
  const split2 = (f, bx, bz, names, kind, vertical = true) => {
    const [x0, x1] = XB[bx], [z0, z1] = ZB[bz], out = [];
    if (vertical) { const mx = Math.floor((x0 + x1) / 2); out.push(m.room(f, x0 + 1, z0 + 1, mx - 1, z1 - 1, names[0], kind)); out.push(m.room(f, mx + 1, z0 + 1, x1 - 1, z1 - 1, names[1], kind));
      doorsOut(f, x0 + 1, z0 + 1, mx - 1, z1 - 1, 'nsw'); doorsOut(f, mx + 1, z0 + 1, x1 - 1, z1 - 1, 'nse'); const mz = Math.floor((z0 + z1) / 2); m.doorway(f, mx, mz); m.doorway(f, mx, mz + 1); }
    else { const mz = Math.floor((z0 + z1) / 2); out.push(m.room(f, x0 + 1, z0 + 1, x1 - 1, mz - 1, names[0], kind)); out.push(m.room(f, x0 + 1, mz + 1, x1 - 1, z1 - 1, names[1], kind));
      doorsOut(f, x0 + 1, z0 + 1, x1 - 1, mz - 1, 'new'); doorsOut(f, x0 + 1, mz + 1, x1 - 1, z1 - 1, 'sew'); const mx = Math.floor((x0 + x1) / 2); m.doorway(f, mx, mz); m.doorway(f, mx + 1, mz); }
    return out;
  };
  const split4 = (f, bx, bz, names, kind) => {
    const [x0, x1] = XB[bx], [z0, z1] = ZB[bz], mx = Math.floor((x0 + x1) / 2), mz = Math.floor((z0 + z1) / 2), out = [];
    const q = [[x0 + 1, z0 + 1, mx - 1, mz - 1, 'nw'], [mx + 1, z0 + 1, x1 - 1, mz - 1, 'ne'], [x0 + 1, mz + 1, mx - 1, z1 - 1, 'sw'], [mx + 1, mz + 1, x1 - 1, z1 - 1, 'se']];
    q.forEach(([a, b, c, d, sides], i) => { out.push(m.room(f, a, b, c, d, names[i], kind)); doorsOut(f, a, b, c, d, sides); });
    // inner doorways between neighbours (shortcuts)
    m.doorway(f, mx, Math.floor((z0 + mz) / 2)); m.doorway(f, mx, Math.floor((mz + z1) / 2) + 1);
    m.doorway(f, Math.floor((x0 + mx) / 2), mz); m.doorway(f, Math.floor((mx + x1) / 2) + 1, mz);
    return out;
  };
  const atrium = (bx, bz, name) => {
    const [x0, x1] = XB[bx], [z0, z1] = ZB[bz];
    const a = m.room(1, x0 + 1, z0 + 1, x1 - 1, z1 - 1, name, 'atrium'); doorsOut(1, x0 + 1, z0 + 1, x1 - 1, z1 - 1, 'nsew', 4);
    const b = m.room(2, x0 + 1, z0 + 1, x1 - 1, z1 - 1, name + ' Balcony', 'balcony'); doorsOut(2, x0 + 1, z0 + 1, x1 - 1, z1 - 1, 'nsew', 4);
    m.hole(2, x0 + 4, z0 + 4, x1 - 4, z1 - 4);
    // two stair runs, opposite corners, so the balcony loops
    m.ramp(1, x0 + 1, z0 + 4, x0 + 2, z0 + 8, [0, 1], name + ' Stairs');
    m.ramp(1, x1 - 2, z1 - 8, x1 - 1, z1 - 4, [0, -1], name + ' Stairs');
    m.zones[a].hole = [x0 + 4, z0 + 4, x1 - 4, z1 - 4];
    return [a, b];
  };
  const maze = (f, bx, bz, name) => {
    const [x0, x1] = XB[bx], [z0, z1] = ZB[bz]; const zi = m.room(f, x0 + 1, z0 + 1, x1 - 1, z1 - 1, name, 'maze'); doorsOut(f, x0 + 1, z0 + 1, x1 - 1, z1 - 1, 'nsew', 2);
    // short wall segments on a 3-cell lattice: loops everywhere, no long dead ends
    for (let z = z0 + 3; z < z1 - 1; z += 3) for (let x = x0 + 3; x < x1 - 1; x += 3) { m.set(f, x, z, WALL); const r = R(); if (r < 0.5) m.set(f, x + 1, z, WALL); else m.set(f, x, z + 1, WALL); }
    return zi;
  };
  const Z = {};
  // ground (f1)
  Z.arcade = single(1, 0, 0, 'Arcade', 'arcade');
  split4(1, 1, 0, ['Candy Shop', 'Prize Counter', 'Gift Shop', 'Photo Booth'], 'shop');
  atrium(2, 0, 'North Atrium');
  const st = split4(1, 3, 0, ['Maintenance Access', 'Storage A', 'Storage B', 'Loading Dock'], 'storage');
  Z.play = single(1, 0, 1, 'Indoor Playground', 'playground');
  Z.caf = single(1, 1, 1, 'Cafeteria', 'cafeteria');
  split2(1, 2, 1, ['Bumper Room', 'Ball Room'], 'party');
  split2(1, 3, 1, ['Bowling Alley', 'Shoe Rental'], 'bowling', false);
  Z.maze = maze(1, 0, 2, 'Laser Maze');
  atrium(1, 2, 'South Atrium');
  split4(1, 2, 2, ['Classroom A', 'Classroom B', 'Craft Room', 'First Aid'], 'class');
  Z.court = single(1, 3, 2, 'Sports Court', 'court');
  // upper (f2)
  split4(2, 0, 0, ['Office 201', 'Office 202', 'Office 203', 'Office 204'], 'office');
  split4(2, 1, 0, ['Office 205', 'Copy Room', 'Break Room', 'Office 206'], 'office');
  split2(2, 3, 0, ['Storage C', 'Storage D'], 'storage');
  split4(2, 0, 1, ['Party Room 1', 'Party Room 2', 'Party Room 3', 'Party Room 4'], 'party');
  single(2, 1, 1, 'Sky Lounge', 'lounge');
  single(2, 2, 1, 'Mini Theater', 'theater');
  split4(2, 3, 1, ['Office 207', 'Security Room', 'Server Room', 'Office 208'], 'office');
  single(2, 0, 2, 'Trampoline Park', 'trampoline');
  split2(2, 2, 2, ['VR Arena', 'Arcade 2'], 'arcade');
  single(2, 3, 2, 'Rooftop Garden', 'garden');
  // ---- maintenance tunnels (f0)
  const tn = m.addZone('Maintenance Tunnels', 'tunnel', 0);
  m.fill(0, 5, 9, 60, 10, FLOOR, tn); m.fill(0, 5, 39, 60, 40, FLOOR, tn); m.fill(0, 5, 9, 6, 40, FLOOR, tn); m.fill(0, 59, 9, 60, 40, FLOOR, tn); m.fill(0, 31, 9, 32, 40, FLOOR, tn);
  m.room(0, 22, 20, 29, 27, 'Boiler Room', 'boiler'); m.doorway(0, 30, 23); m.doorway(0, 30, 24); m.fill(0, 30, 23, 30, 24, FLOOR, tn);
  m.room(0, 35, 22, 42, 28, 'Pump Room', 'boiler'); m.doorway(0, 33, 25); m.doorway(0, 34, 25);
  m.fill(0, 7, 24, 21, 25, FLOOR, tn); m.doorway(0, 21, 24); // tunnel west → boiler
  m.fill(0, 43, 25, 58, 26, FLOOR, tn);
  // ramps f0 → f1 in the maintenance access room (NE) and the laser maze corner (SW)
  { const zz = m.zones[st[0]]; m.ramp(0, zz.x0 + 1, zz.z0 + 1, zz.x0 + 2, zz.z0 + 4, [0, -1], 'Service Stairs'); }
  { const [x0] = XB[0], [, z1] = ZB[2]; m.ramp(0, x0 + 2, z1 - 6, x0 + 3, z1 - 2, [0, 1], 'Service Stairs'); }
  // ---- furnishing (props only against walls; spots unused in tag)
  const P = {
    arcade: ['arcade', 'arcade', 'arcade', 'arcade', 'arcade', 'arcade', 'arcade', 'arcade', 'claw', 'claw'], shop: ['counter', 'shelfC', 'shelfC'], storage: ['crate', 'crate', 'shelfC', 'crate'],
    playground: ['ballpit', 'slide', 'climber'], cafeteria: ['counter', 'vending', 'vending'], party: ['tableC', 'balloon', 'balloon'], bowling: ['arcade', 'counter', 'shelfC'],
    class: ['studentdesk', 'shelfC'], court: ['hoop', 'hoop', 'bench'], office: ['pcdesk', 'shelfC', 'plant'], lounge: ['couchC', 'couchC', 'plant', 'plant'], theater: ['seatsC', 'seatsC'],
    trampoline: ['trampoline', 'trampoline', 'mat'], garden: ['planter', 'planter', 'bench', 'planter'], atrium: ['planter', 'planter', 'bench'], balcony: ['plant'], boiler: ['tank', 'crate'], maze: [],
  };
  for (const z of m.zones) {
    if (z.x0 == null || !P[z.kind]) continue;
    for (const p of P[z.kind]) m.wallProp(z.id, p, { m: 0.3 });
    if (z.kind === 'cafeteria') for (let zz = z.z0 + 2; zz <= z.z1 - 2; zz += 3) for (let xx = z.x0 + 2; xx <= z.x1 - 2; xx += 3) m.centerProp(z.id, 'tableC', xx, zz, { m: 0.4 });
    if (z.kind === 'playground') for (const [dx, dz, t] of [[3, 3, 'climber'], [8, 4, 'slide'], [5, 8, 'ballpit'], [9, 9, 'climber']]) m.centerProp(z.id, t, z.x0 + dx, z.z0 + dz, { m: 0.25 });
    if (z.kind === 'court') for (const [dx, dz] of [[4, 4], [8, 8], [4, 8], [8, 4]]) m.centerProp(z.id, 'pillar', z.x0 + dx, z.z0 + dz, { m: 0.55 });
  }
  m.spawns.players = [];
  const hallCells = []; for (let z = 0; z < m.H; z++) for (let x = 0; x < m.W; x++) if (m.t(1, x, z) === FLOOR && m.zones[m.zone[1][m.I(x, z)]].kind === 'hall') hallCells.push([x, z]);
  for (let i = 0; i < 12; i++) {
    const [x, z] = hallCells[Math.floor((i + 0.5) / 12 * hallCells.length)];
    let best = 0, yaw = 0; for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { let n = 0; while (n < 30 && m.t(1, x + dx * (n + 1), z + dz * (n + 1)) === FLOOR) n++; if (n > best) { best = n; yaw = Math.atan2(-dx, -dz); } }
    m.spawns.players.push({ f: 1, x: (x + 0.5) * 2, z: (z + 0.5) * 2, yaw });
  }
  m.spawns.spec = { f: 1, x: 34 * 2, z: 18 * 2 };
  // jump pads in the big open rooms, power-up spawn points along the concourse and atriums
  m.pads = [];
  for (const z of m.zones) {
    if (!['atrium', 'playground', 'court', 'trampoline', 'garden', 'cafeteria'].includes(z.kind) || z.x0 == null) continue;
    let n = 0;
    for (let i = 0; i < 60 && n < 2; i++) {
      const x = z.x0 + 2 + Math.floor(R() * (z.x1 - z.x0 - 3)), zz = z.z0 + 2 + Math.floor(R() * (z.z1 - z.z0 - 3));
      if (m.t(z.f, x, zz) !== FLOOR || m.dway[z.f][m.I(x, zz)]) continue;
      let clear = true; for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) if (m.t(z.f, x + dx, zz + dz) !== FLOOR) clear = false;
      if (!clear || m.pads.some(p => p.f === z.f && Math.abs(p.cx - x) + Math.abs(p.cz - zz) < 4)) continue;
      m.pads.push({ f: z.f, cx: x, cz: zz, x: (x + 0.5) * 2, z: (zz + 0.5) * 2 }); n++;
    }
  }
  m.puSpots = [];
  for (let f = 1; f <= 2; f++) for (let z = 1; z < m.H - 1; z += 3) for (let x = 1; x < m.W - 1; x += 3) {
    if (m.t(f, x, z) !== FLOOR || m.dway[f][m.I(x, z)] || m.pads.some(p => p.f === f && p.cx === x && p.cz === z)) continue;
    const k = m.zones[m.zone[f][m.I(x, z)]]; if (!k || !['hall', 'atrium', 'balcony', 'court', 'playground', 'cafeteria', 'lounge', 'garden', 'maze'].includes(k.kind)) continue;
    m.puSpots.push({ f, x: (x + 0.5) * 2, z: (z + 0.5) * 2 });
  }
  m.finalizeLamps();
  return m;
}
