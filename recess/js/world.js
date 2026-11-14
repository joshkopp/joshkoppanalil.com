// RECESS — builds the 3D maps (spooky school + bright fun center) from the grid.
import * as THREE from 'three';
import { WALL, FLOOR, RAMP, RHOLE, HOLE, VENT, PROP, DOOR, FAKE, VENT_H } from './maps.js';

const T = {};
export async function loadTextures(base) {
  if (T.ready) return T;
  const L = new THREE.TextureLoader();
  await Promise.all(['wall_diff', 'wall_nor', 'floor_diff', 'floor_nor', 'crate_diff', 'crate_nor', 'door_diff', 'door_nor', 'metal_diff', 'ceil_nor'].map(n => L.loadAsync(base + n + '.jpg').then(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; if (n.endsWith('diff')) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; T[n] = t; })));
  const img = n => T[n].image;
  T.sWall = cv(512, 512, x => { x.drawImage(img('wall_diff'), 0, 0, 512, 512); x.globalCompositeOperation = 'multiply'; x.fillStyle = '#cfc4a8'; x.fillRect(0, 0, 512, 330); x.fillStyle = '#3f5a73'; x.fillRect(0, 352, 512, 160); x.globalCompositeOperation = 'source-over'; x.fillStyle = 'rgba(30,30,30,.8)'; x.fillRect(0, 330, 512, 22); grime(x, 512, 512, 22); });
  T.sBrick = cv(512, 512, x => { x.fillStyle = '#8a8f96'; x.fillRect(0, 0, 512, 512); for (let r = 0; r < 16; r++) for (let c = 0; c < 9; c++) { x.fillStyle = `hsl(210,6%,${48 + Math.random() * 10}%)`; x.fillRect(c * 64 - (r % 2) * 32 + 2, r * 32 + 2, 60, 28); } grime(x, 512, 512, 16); });
  T.sTile = cv(512, 512, x => { x.fillStyle = '#d9dcd6'; x.fillRect(0, 0, 512, 512); x.strokeStyle = '#9aa09a'; x.lineWidth = 3; for (let k = 0; k <= 512; k += 64) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); } grime(x, 512, 512, 20); });
  T.sFloor = cv(512, 512, x => { for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { x.fillStyle = (i + j) % 2 ? '#b8b5a8' : '#6f7471'; x.fillRect(i * 128, j * 128, 128, 128); } x.globalAlpha = 0.5; x.globalCompositeOperation = 'multiply'; x.drawImage(img('floor_diff'), 0, 0, 512, 512); x.globalAlpha = 1; x.globalCompositeOperation = 'source-over'; stains(x, 14); });
  T.sWood = cv(512, 512, x => { for (let i = 0; i < 16; i++) { x.fillStyle = `hsl(32,${45 + Math.random() * 10}%,${36 + Math.random() * 10}%)`; x.fillRect(0, i * 32, 512, 32); x.fillStyle = 'rgba(0,0,0,.25)'; x.fillRect(0, i * 32, 512, 2); x.fillRect(Math.random() * 512, i * 32, 2, 32); } x.strokeStyle = 'rgba(255,255,255,.5)'; x.lineWidth = 6; x.beginPath(); x.arc(256, 256, 120, 0, 7); x.stroke(); stains(x, 6); });
  T.sCarpet = cv(256, 256, x => { x.fillStyle = '#5b2430'; x.fillRect(0, 0, 256, 256); for (let i = 0; i < 6000; i++) { x.fillStyle = `rgba(${Math.random() < 0.5 ? 0 : 255},0,0,.08)`; x.fillRect(Math.random() * 256, Math.random() * 256, 2, 2); } stains(x, 4); });
  T.sCeil = cv(512, 512, x => { x.fillStyle = '#a9a594'; x.fillRect(0, 0, 512, 512); for (let i = 0; i < 8000; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * 0.25})`; x.fillRect(Math.random() * 512, Math.random() * 512, 2, 2); } x.strokeStyle = '#4c4a43'; x.lineWidth = 6; for (let k = 0; k <= 512; k += 256) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); } stains(x, 3); });
  T.fPanel = cv(512, 512, x => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, 512, 512); x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, 420, 512, 92); x.fillStyle = 'rgba(255,255,255,.6)'; x.fillRect(0, 410, 512, 10); x.strokeStyle = 'rgba(0,0,0,.08)'; x.lineWidth = 4; for (let k = 0; k <= 512; k += 128) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 410); x.stroke(); } });
  T.fTerrazzo = cv(512, 512, x => { x.fillStyle = '#e9e6df'; x.fillRect(0, 0, 512, 512); for (let i = 0; i < 1600; i++) { x.fillStyle = ['#d94f4f', '#4f8fd9', '#e8c547', '#6cc475', '#a0a0a0'][i % 5]; x.globalAlpha = 0.5; x.beginPath(); x.arc(Math.random() * 512, Math.random() * 512, 1 + Math.random() * 3, 0, 7); x.fill(); } x.globalAlpha = 1; });
  T.fCarpet = cv(512, 512, x => { x.fillStyle = '#17112b'; x.fillRect(0, 0, 512, 512); const cols = ['#ff3ea5', '#2ee6ff', '#ffe53e', '#7bff4a']; for (let i = 0; i < 70; i++) { x.strokeStyle = cols[i % 4]; x.lineWidth = 5; x.beginPath(); const cx0 = Math.random() * 512, cy0 = Math.random() * 512; if (i % 3 === 0) x.arc(cx0, cy0, 14, 0, 7); else if (i % 3 === 1) { x.moveTo(cx0, cy0); x.lineTo(cx0 + 30, cy0 + 12); x.lineTo(cx0 + 10, cy0 + 34); } else { x.moveTo(cx0, cy0); x.bezierCurveTo(cx0 + 20, cy0 - 20, cx0 + 40, cy0 + 20, cx0 + 60, cy0); } x.stroke(); } });
  T.fRubber = cv(512, 512, x => { const cols = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#5aa9ff']; for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { x.fillStyle = cols[(i + j * 2) % 4]; x.fillRect(i * 128, j * 128, 128, 128); } x.strokeStyle = 'rgba(0,0,0,.25)'; x.lineWidth = 4; for (let k = 0; k <= 512; k += 128) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); } });
  T.fChecker = cv(512, 512, x => { for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.fillStyle = (i + j) % 2 ? '#ffffff' : '#e23b3b'; x.fillRect(i * 64, j * 64, 64, 64); } });
  T.fCourt = cv(512, 512, x => { x.fillStyle = '#d19a55'; x.fillRect(0, 0, 512, 512); for (let i = 0; i < 16; i++) { x.fillStyle = 'rgba(0,0,0,.08)'; x.fillRect(0, i * 32, 512, 2); } x.strokeStyle = '#fff'; x.lineWidth = 6; x.strokeRect(20, 20, 472, 472); x.beginPath(); x.arc(256, 256, 70, 0, 7); x.stroke(); });
  T.fTile = cv(512, 512, x => { x.fillStyle = '#ffffff'; x.fillRect(0, 0, 512, 512); x.strokeStyle = 'rgba(0,0,0,.12)'; x.lineWidth = 3; for (let k = 0; k <= 512; k += 128) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); } });
  T.fGrass = cv(256, 256, x => { x.fillStyle = '#4c9a3e'; x.fillRect(0, 0, 256, 256); for (let i = 0; i < 5000; i++) { x.fillStyle = `hsl(${95 + Math.random() * 30},55%,${30 + Math.random() * 25}%)`; x.fillRect(Math.random() * 256, Math.random() * 256, 1, 3); } });
  T.glow = cv(64, 64, x => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,.4)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); }, false);
  T.vent = cv(128, 128, x => { x.fillStyle = '#9aa0a3'; x.fillRect(0, 0, 128, 128); x.fillStyle = '#1b1d1e'; for (let k = 0; k < 7; k++) x.fillRect(10, 10 + k * 16, 108, 9); }, true);
  T.ready = true; return T;
}
function cv(w, h, draw, srgb = true) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d')); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; }
function grime(x, w, h, n) { for (let i = 0; i < n; i++) { const sx = Math.random() * w, len = 40 + Math.random() * h * 0.5, g = x.createLinearGradient(0, 0, 0, len); g.addColorStop(0, 'rgba(50,40,25,.3)'); g.addColorStop(1, 'rgba(50,40,25,0)'); x.fillStyle = g; x.fillRect(sx, Math.random() * h * 0.3, 2 + Math.random() * 6, len); } }
function stains(x, n) { for (let i = 0; i < n; i++) { const g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, 'rgba(40,30,15,.35)'); g.addColorStop(1, 'rgba(40,30,15,0)'); x.save(); x.translate(Math.random() * x.canvas.width, Math.random() * x.canvas.height); x.scale(20 + Math.random() * 60, 15 + Math.random() * 45); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 1, 0, 7); x.fill(); x.restore(); } }
export function textTex(text, o = {}) {
  return cv(o.w || 512, o.h || 128, x => { x.fillStyle = o.bg || '#1d3557'; x.fillRect(0, 0, o.w || 512, o.h || 128); x.fillStyle = o.fg || '#fff'; x.font = `${o.weight || 700} ${o.size || 60}px ${o.font || 'Outfit, Arial, sans-serif'}`; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, (o.w || 512) / 2, (o.h || 128) / 2 + 3); });
}

class Geo {
  constructor() { this.p = []; this.n = []; this.u = []; this.c = []; this.i = []; }
  quad(a, b, c, d, n, uv, col) { const o = this.p.length / 3; for (const v of [a, b, c, d]) this.p.push(...v); for (let k = 0; k < 4; k++) { this.n.push(...n); this.c.push(col ? col.r : 1, col ? col.g : 1, col ? col.b : 1); } for (const t of uv) this.u.push(...t); this.i.push(o, o + 1, o + 2, o, o + 2, o + 3); }
  build() { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2)); g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3)); g.setIndex(this.i); g.computeBoundingSphere(); return g; }
}
const FUN_HUES = [0, 28, 48, 140, 190, 210, 265, 300, 330];

export class World {
  constructor(scene, map, gfx) {
    this.scene = scene; this.m = map; this.gfx = gfx; this.fun = map.theme === 'fun';
    this.root = new THREE.Group(); scene.add(this.root);
    this.mats(); this.shell(); this.extras(); this.buildProps(); this.buildLamps(); this.buildDoors();
    this.root.traverse(o => { if (o.isMesh && !o.userData.noShadow) { o.receiveShadow = true; o.castShadow = o.userData.cast !== false; } });
  }
  zoneColor(zi) {
    if (!this.fun || zi < 0) return null; const z = this.m.zones[zi];
    if (z.kind === 'tunnel' || z.kind === 'boiler') return new THREE.Color().setHSL(0.08, 0.35, 0.45);
    if (z.kind === 'hall') return new THREE.Color().setHSL(z.f === 1 ? 0.5 : 0.75, 0.55, 0.62);
    return new THREE.Color().setHSL(FUN_HUES[zi % FUN_HUES.length] / 360, 0.75, 0.6);
  }
  mats() {
    const S = THREE.MeshStandardMaterial;
    if (!this.fun) this.M = {
      wall: new S({ map: T.sWall, normalMap: T.wall_nor, normalScale: new THREE.Vector2(0.5, 0.5), roughness: 0.85 }),
      brick: new S({ map: T.sBrick, normalMap: T.wall_nor, roughness: 0.9 }),
      tilew: new S({ map: T.sTile, roughness: 0.4 }),
      floor: new S({ map: T.sFloor, normalMap: T.floor_nor, normalScale: new THREE.Vector2(0.3, 0.3), roughness: 0.4 }),
      wood: new S({ map: T.sWood, roughness: 0.5 }),
      carpet: new S({ map: T.sCarpet, roughness: 1 }),
      tilef: new S({ map: T.sTile, roughness: 0.3 }),
      dusty: new S({ map: T.crate_diff, normalMap: T.crate_nor, color: 0x8a7c6a, roughness: 0.95 }),
      ceil: new S({ map: T.sCeil, normalMap: T.ceil_nor, normalScale: new THREE.Vector2(0.3, 0.3), roughness: 0.95 }),
      vent: new S({ map: T.metal_diff, color: 0x777777, roughness: 0.6, metalness: 0.6 }),
    };
    else this.M = {
      wall: new S({ map: T.fPanel, vertexColors: true, roughness: 0.55 }),
      floor: new S({ map: T.fTerrazzo, roughness: 0.25 }),
      carpet: new S({ map: T.fCarpet, roughness: 0.95 }),
      rubber: new S({ map: T.fRubber, roughness: 0.85 }),
      checker: new S({ map: T.fChecker, roughness: 0.3 }),
      court: new S({ map: T.fCourt, roughness: 0.4 }),
      tilef: new S({ map: T.fTile, vertexColors: true, roughness: 0.35 }),
      grass: new S({ map: T.fGrass, roughness: 1 }),
      concrete: new S({ map: T.floor_diff, color: 0x9a9a9a, roughness: 0.8 }),
      ceil: new S({ color: 0xf4f1ea, roughness: 0.9 }),
      vent: new S({ map: T.metal_diff, color: 0xaaaaaa, roughness: 0.5, metalness: 0.6 }),
    };
    Object.assign(this.M, {
      trim: new S({ color: this.fun ? 0xffffff : 0x3b3a36, roughness: 0.5, metalness: 0.2 }),
      metal: new S({ color: 0x8a9095, roughness: 0.35, metalness: 0.8 }),
      darkm: new S({ color: 0x23272b, roughness: 0.5, metalness: 0.4 }),
      woodp: new S({ map: T.crate_diff, normalMap: T.crate_nor, color: 0xb08c66, roughness: 0.7 }),
      crate: new S({ map: T.crate_diff, normalMap: T.crate_nor, roughness: 0.85 }),
      card: new S({ color: 0xa47c4a, roughness: 0.95 }),
      fabric: new S({ color: 0x6b1f2a, roughness: 0.95, side: THREE.DoubleSide }),
      sheet: new S({ color: 0xd8d5cc, roughness: 0.9 }),
      locker: new S({ map: T.vent, color: this.fun ? 0x5aa9ff : 0x5c7a8c, roughness: 0.5, metalness: 0.5 }),
      green: new S({ color: 0x2f6e3a, roughness: 0.8 }),
      glass: new S({ color: 0x9fd8ff, roughness: 0.05, metalness: 0.1, transparent: true, opacity: 0.25, depthWrite: false }),
      white: new S({ color: 0xf2f2f2, roughness: 0.5 }),
      screen: new THREE.MeshBasicMaterial({ color: new THREE.Color(0.2, 1.2, 1.6) }),
    });
  }
  wallKey(f, x, z) {
    const zi = this.m.zone[f][this.m.I(x, z)], zz = zi >= 0 ? this.m.zones[zi] : null;
    if (this.fun) return 'wall';
    if (!zz) return 'wall'; if (zz.kind === 'gym' || zz.kind === 'stairs' || zz.kind === 'vent') return 'brick'; if (zz.kind === 'bath') return 'tilew'; return 'wall';
  }
  floorKey(f, x, z) {
    const zi = this.m.zone[f][this.m.I(x, z)], zz = zi >= 0 ? this.m.zones[zi] : null, k = zz ? zz.kind : 'hall';
    if (!this.fun) return k === 'gym' || k === 'stage' || k === 'music' ? 'wood' : k === 'library' || k === 'office' || k === 'principal' || k === 'lounge' ? 'carpet' : k === 'bath' || k === 'kitchen' || k === 'nurse' ? 'tilef' : k === 'hidden' || k === 'attic' || k === 'vent' ? 'dusty' : 'floor';
    return k === 'arcade' || k === 'theater' ? 'carpet' : k === 'playground' || k === 'trampoline' ? 'rubber' : k === 'cafeteria' ? 'checker' : k === 'court' ? 'court' : k === 'garden' ? 'grass' : k === 'tunnel' || k === 'boiler' || k === 'storage' ? 'concrete' : k === 'hall' || k === 'atrium' || k === 'balcony' || k === 'stairs' ? 'floor' : 'tilef';
  }
  shell() {
    const m = this.m, C = m.C, FH = m.FH, geos = {};
    const G = k => geos[k] || (geos[k] = new Geo());
    const openT = t => t !== WALL && t !== FAKE;
    for (let f = 0; f < m.nf; f++) {
      const b = m.base(f);
      for (let z = 0; z < m.H; z++) for (let x = 0; x < m.W; x++) {
        const t = m.t(f, x, z);
        if (t === WALL || t === FAKE) {
          for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            const nt = m.t(f, x + dx, z + dz); if (!openT(nt) || !m.inb(x + dx, z + dz)) continue;
            if (t === WALL && nt === FAKE) continue;
            const key = this.wallKey(f, x + dx, z + dz), col = this.zoneColor(m.zone[f][m.I(x + dx, z + dz)]);
            const ex = (x + 0.5 + dx * 0.5) * C, ez = (z + 0.5 + dz * 0.5) * C, rx = dz, rz = -dx, h = C / 2; // CCW seen from the open side
            const y0 = b, y1 = b + FH;
            const a = [ex - rx * h, y0, ez - rz * h], bb = [ex + rx * h, y0, ez + rz * h], c = [ex + rx * h, y1, ez + rz * h], d = [ex - rx * h, y1, ez - rz * h];
            const u0 = (a[0] * rx + a[2] * rz) / C, v0 = 0, v1 = 1;
            G(key).quad(a, bb, c, d, [dx, 0, dz], [[u0, v0], [u0 + 1, v0], [u0 + 1, v1], [u0, v1]], col);
          }
          if (t === WALL) continue;
        }
        const x0 = x * C, x1 = x0 + C, z0 = z * C, z1 = z0 + C, uv = [[x0 / C, -z1 / C], [x1 / C, -z1 / C], [x1 / C, -z0 / C], [x0 / C, -z0 / C]];
        const col = this.zoneColor(m.zone[f][m.I(x, z)]);
        if (t === FLOOR || t === PROP || t === VENT || t === DOOR || t === FAKE) G(this.floorKey(f, x, z)).quad([x0, b, z1], [x1, b, z1], [x1, b, z0], [x0, b, z0], [0, 1, 0], uv, col);
        if (t === RAMP) {
          const ya = m.heightAt(f, x0 + 0.01, z1 - 0.01), yb = m.heightAt(f, x0 + 0.01, z0 + 0.01), yc = m.heightAt(f, x1 - 0.01, z1 - 0.01), yd = m.heightAt(f, x1 - 0.01, z0 + 0.01);
          G(this.floorKey(f, x, z)).quad([x0, ya, z1], [x1, yc, z1], [x1, yd, z0], [x0, yb, z0], [0, 1, 0], uv, col);
          // step nosing every 0.5 m for a stair feel
        }
        // ceiling
        const above = m.t(f + 1, x, z), hole = above === HOLE || above === RHOLE;
        if (t !== WALL && !hole && !(t === RAMP)) {
          const cy = t === VENT ? b + VENT_H : b + FH - 0.2;
          G(t === VENT ? 'vent' : 'ceil').quad([x0, cy, z0], [x1, cy, z0], [x1, cy, z1], [x0, cy, z1], [0, -1, 0], [uv[3], uv[2], uv[1], uv[0]]);
        }
        // slab edge where a hole meets floor (seen from below/through atrium)
        if (t === HOLE || t === RHOLE) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nt = m.t(f, x + dx, z + dz); if (nt === HOLE || nt === RHOLE || nt === WALL) continue;
          const ex = (x + 0.5 + dx * 0.5) * C, ez = (z + 0.5 + dz * 0.5) * C, rx = -dz, rz = dx, h = C / 2;
          G('trimq').quad([ex - rx * h, b - 0.2, ez - rz * h], [ex + rx * h, b - 0.2, ez + rz * h], [ex + rx * h, b, ez + rz * h], [ex - rx * h, b, ez - rz * h], [-dx, 0, -dz], [[0, 0], [1, 0], [1, 1], [0, 1]]);
          if (t === HOLE) this.railing(ex, b, ez, rx, rz);
        }
      }
    }
    for (const k in geos) { const mat = k === 'trimq' ? this.M.trim : this.M[k]; const me = new THREE.Mesh(geos[k].build(), mat); me.userData.cast = k === 'wall' || k === 'brick' || k === 'tilew'; this.root.add(me); }
  }
  railing(ex, b, ez, rx, rz) {
    const C = this.m.C;
    if (!this.railG) { this.railG = []; }
    const p = new THREE.Mesh(new THREE.BoxGeometry(C, 0.95, 0.03), this.M.glass); p.position.set(ex, b + 0.5, ez); p.rotation.y = Math.atan2(rx, rz) + Math.PI / 2; p.userData.noShadow = true; this.root.add(p);
    const r = new THREE.Mesh(new THREE.BoxGeometry(C, 0.06, 0.08), this.M.metal); r.position.set(ex, b + 1.0, ez); r.rotation.y = p.rotation.y; r.userData.cast = false; this.root.add(r);
  }
  extras() {
    const m = this.m, C = m.C;
    // lintels over doorways, vent housings and grates
    const lint = [], ventBoxes = [];
    for (let f = 0; f < m.nf; f++) for (let z = 0; z < m.H; z++) for (let x = 0; x < m.W; x++) {
      const t = m.t(f, x, z), b = m.base(f);
      if (m.dway[f][m.I(x, z)] && t !== FAKE) { const g = new THREE.BoxGeometry(C, m.FH - 2.5, C); g.translate((x + 0.5) * C, b + 2.5 + (m.FH - 2.5) / 2, (z + 0.5) * C); lint.push(g); }
      if (t === VENT) { const g = new THREE.BoxGeometry(C, m.FH - VENT_H, C); g.translate((x + 0.5) * C, b + VENT_H + (m.FH - VENT_H) / 2, (z + 0.5) * C); ventBoxes.push(g); }
    }
    const merge = (arr, mat) => { if (!arr.length) return; const g = new THREE.BufferGeometry(); const out = []; for (const a of arr) out.push(a.toNonIndexed()); const pos = [], nor = [], uv = []; for (const a of out) { pos.push(...a.attributes.position.array); nor.push(...a.attributes.normal.array); uv.push(...a.attributes.uv.array); } g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); const me = new THREE.Mesh(g, mat); this.root.add(me); };
    merge(lint, this.fun ? this.M.trim : this.M.wall);
    merge(ventBoxes, this.fun ? this.M.trim : this.M.brick);
    // stair treads (visual)
    for (const r of m.ramps) {
      const n = 10, [dx, dz] = r.dir, w = (dx ? (r.z1 - r.z0 + 1) : (r.x1 - r.x0 + 1)) * C;
      for (let i = 0; i < n; i++) {
        const k = (i + 0.5) / n, s = r.lo + k * r.len, y = m.base(r.f) + k * m.FH;
        const g = new THREE.Mesh(new THREE.BoxGeometry(dx ? 0.08 : w, 0.06, dx ? w : 0.08), this.M.trim);
        if (dx) g.position.set(s * dx, y + 0.02, (r.z0 + r.z1 + 1) / 2 * C); else g.position.set((r.x0 + r.x1 + 1) / 2 * C, y + 0.02, s * dz);
        g.userData.cast = false; this.root.add(g);
      }
    }
  }
  buildDoors() {
    this.doorObjs = this.m.doors.map(d => {
      const g = new THREE.Group(), C = this.m.C; g.position.set((d.x + 0.5) * C, this.m.base(d.f), (d.z + 0.5) * C);
      const ax = this.m.t(d.f, d.x - 1, d.z) === WALL && this.m.t(d.f, d.x + 1, d.z) === WALL ? 'z' : 'x'; if (ax === 'x') g.rotation.y = Math.PI / 2;
      const piv = new THREE.Group(); piv.position.x = -C / 2 + 0.1; g.add(piv);
      const p = new THREE.Mesh(new THREE.BoxGeometry(C - 0.2, 2.45, 0.08), new THREE.MeshStandardMaterial({ map: T.door_diff, normalMap: T.door_nor, color: 0xa08060, roughness: 0.6 })); p.position.set((C - 0.2) / 2, 1.23, 0); piv.add(p);
      const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.22), new THREE.MeshBasicMaterial({ map: textTex('PRINCIPAL', { bg: '#1d1d1d', fg: '#e8d27a', size: 64 }) })); sign.position.set((C - 0.2) / 2, 1.8, 0.045); piv.add(sign);
      this.root.add(g); return { d, piv, a: 0 };
    });
  }
  // ---------------------------------------------------------------- props + hiding spots
  buildProps() {
    const m = this.m, C = m.C, M = this.M; this.spotObjs = [];
    const B = (w, h, d, mat, x, y, z, par) => { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); b.position.set(x, y, z); par.add(b); return b; };
    const Cy = (r, h, mat, x, y, z, par, seg = 14) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), mat); c.position.set(x, y, z); par.add(c); return c; };
    const neonMat = h => new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(h, 1, 0.55).multiplyScalar(2.2) });
    for (const p of m.props) {
      const g = new THREE.Group(), base = m.base(p.f), wallish = !['studentdesk', 'table', 'labtable', 'pcdesk', 'tableC', 'climber', 'slide', 'ballpit', 'pillar'].includes(p.type) || p.fx == null;
      const fx = p.fx ?? 0, fz = p.fz ?? 1;
      const depth = { locker: 0.6, cabinet: 0.6, closet: 0.7, curtain: 0.5, bookshelf: 0.5, shelf: 0.5, shelfC: 0.5, arcade: 0.8, claw: 0.9, vending: 0.8, fridge: 0.8, counter: 0.8, compartment: 0.3, bleacher: 1.2, sink: 0.5, cabinetP: 0.5, seats: 1.2, seatsC: 1.2, piano: 0.7, couch: 0.9, couchC: 0.9, bed: 2.0, desk: 1.0, hoop: 0.4, planter: 1.0 }[p.type];
      const off = depth && wallish ? C / 2 - depth / 2 - 0.02 : 0;
      g.position.set((p.x + 0.5) * C - fx * off, base, (p.z + 0.5) * C - fz * off); g.rotation.y = Math.atan2(fx, fz);
      const R = Math.random;
      let tell = null, door = null;
      switch (p.type) {
        case 'locker': B(0.9, 2.05, 0.58, M.darkm, 0, 1.02, 0, g); door = new THREE.Group(); door.position.set(-0.43, 0, 0.3); g.add(door); B(0.84, 1.95, 0.03, M.locker, 0.42, 1.0, 0, door); tell = 'feet'; break;
        case 'cabinet': B(1.1, 1.9, 0.58, M.woodp, 0, 0.95, 0, g); door = new THREE.Group(); door.position.set(-0.54, 0, 0.3); g.add(door); B(1.06, 1.8, 0.03, M.woodp, 0.53, 0.95, 0, door); B(0.04, 0.2, 0.04, M.metal, 0.95, 1.0, 0.03, door); break;
        case 'closet': B(1.4, 2.3, 0.7, M.woodp, 0, 1.15, 0, g); door = new THREE.Group(); door.position.set(-0.68, 0, 0.36); g.add(door); B(1.34, 2.2, 0.03, M.woodp, 0.67, 1.12, 0, door); break;
        case 'compartment': B(1.6, 1.6, 0.25, this.fun ? M.trim : M.brick, 0, 0.8, 0, g); door = new THREE.Group(); door.position.set(-0.78, 0, 0.13); g.add(door); B(1.56, 1.56, 0.02, this.fun ? M.trim : M.brick, 0.78, 0.8, 0, door); break;
        case 'desk': B(1.6, 0.06, 0.85, M.woodp, 0, 0.76, 0, g); B(0.05, 0.74, 0.8, M.darkm, -0.76, 0.37, 0, g); B(0.05, 0.74, 0.8, M.darkm, 0.76, 0.37, 0, g); B(1.5, 0.5, 0.03, M.woodp, 0, 0.45, -0.38, g); tell = 'deskfeet'; break;
        case 'bed': B(0.95, 0.06, 2.0, M.metal, 0, 0.55, 0, g); B(0.9, 0.16, 1.9, M.sheet, 0, 0.66, 0, g); B(0.94, 0.75, 0.04, M.metal, 0, 0.75, -0.98, g); for (const sx of [-0.44, 0.44]) for (const sz of [-0.95, 0.95]) B(0.04, 0.55, 0.04, M.metal, sx, 0.27, sz, g); B(1.1, 0.3, 1.9, M.sheet, 0.02, 0.62, 0.05, g).scale.y = 0.2; tell = 'bedfeet'; break;
        case 'curtain': { const rod = Cy(0.02, 1.8, M.metal, 0, 2.3, 0.05, g); rod.rotation.z = Math.PI / 2; const cg = new THREE.PlaneGeometry(1.8, 2.25, 16, 1); const pa = cg.attributes.position; for (let i = 0; i < pa.count; i++) pa.setZ(i, Math.sin(pa.getX(i) * 9) * 0.06); cg.computeVertexNormals(); const cu = new THREE.Mesh(cg, M.fabric); cu.position.set(0, 1.18, 0.12); g.add(cu); door = cu; tell = 'curtfeet'; break; }
        case 'bookshelf': B(1.7, 2.2, 0.4, M.woodp, 0, 1.1, 0.25, g); for (let k = 0; k < 5; k++) { B(1.62, 0.03, 0.36, M.woodp, 0, 0.12 + k * 0.45, 0.28, g); for (let j = 0; j < 10; j++) if (R() < 0.85) { const bh = 0.25 + R() * 0.12; B(0.1 + R() * 0.05, bh, 0.28, new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.4, 0.3), roughness: 0.8 }), -0.72 + j * 0.155, 0.14 + k * 0.45 + bh / 2, 0.3, g); } } tell = 'shoulder'; break;
        case 'couch': case 'couchC': { const cm = p.type === 'couchC' ? new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.6, 0.55), roughness: 0.9 }) : M.fabric; B(1.9, 0.45, 0.85, cm, 0, 0.3, 0.1, g); B(1.9, 0.5, 0.2, cm, 0, 0.7, -0.25, g); B(0.2, 0.35, 0.85, cm, -0.95, 0.55, 0.1, g); B(0.2, 0.35, 0.85, cm, 0.95, 0.55, 0.1, g); if (p.type === 'couch') tell = 'head'; break; }
        case 'box': { B(1.1, 1.0, 1.0, M.card, 0, 0.5, 0, g); const lid = B(1.12, 0.04, 1.02, M.card, 0, 1.0, 0, g); door = lid; B(0.75, 0.6, 0.7, M.card, 0.6, 0.3, 0.2, g).rotation.y = 0.4; break; }
        case 'shelf': case 'shelfC': for (const sx of [-0.85, 0.85]) B(0.05, 2.1, 0.45, M.metal, sx, 1.05, 0, g); for (let k = 0; k < 4; k++) { B(1.75, 0.03, 0.45, M.metal, 0, 0.15 + k * 0.6, 0, g); for (let j = 0; j < 3; j++) if (R() < 0.7) B(0.3 + R() * 0.2, 0.25, 0.35, p.type === 'shelfC' ? new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.7, 0.55) }) : M.card, -0.55 + j * 0.55, 0.3 + k * 0.6, 0, g); } break;
        case 'studentdesk': B(0.7, 0.04, 0.5, M.woodp, 0, 0.72, 0, g); for (const sx of [-0.3, 0.3]) B(0.03, 0.7, 0.45, M.metal, sx, 0.36, 0, g); B(0.4, 0.04, 0.4, M.woodp, 0, 0.44, 0.55, g); B(0.4, 0.4, 0.03, M.woodp, 0, 0.66, 0.75, g); g.rotation.y += (R() - 0.5) * 0.4; break;
        case 'table': case 'tableC': { const tm = p.type === 'tableC' ? new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.7, 0.6), roughness: 0.5 }) : M.woodp; B(1.5, 0.05, 0.9, tm, 0, 0.75, 0, g); Cy(0.05, 0.75, M.metal, 0, 0.37, 0, g); for (const sx of [-0.5, 0.5]) for (const sz of [-0.65, 0.65]) Cy(0.18, 0.04, tm, sx, 0.45, sz, g); break; }
        case 'labtable': B(1.7, 0.08, 0.95, M.darkm, 0, 0.9, 0, g); B(1.6, 0.86, 0.85, M.woodp, 0, 0.43, 0, g); Cy(0.02, 0.4, M.metal, 0.5, 1.1, 0, g); break;
        case 'pcdesk': B(1.5, 0.05, 0.75, M.white, 0, 0.75, 0, g); B(0.05, 0.73, 0.7, M.darkm, -0.7, 0.37, 0, g); B(0.05, 0.73, 0.7, M.darkm, 0.7, 0.37, 0, g); B(0.55, 0.38, 0.05, M.darkm, 0, 1.05, -0.1, g); { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.32), this.fun ? M.screen : new THREE.MeshBasicMaterial({ color: 0x0a120c })); s.position.set(0, 1.05, -0.07); g.add(s); } break;
        case 'bleacher': for (let k = 0; k < 4; k++) B(1.95, 0.3, 0.32, M.woodp, 0, 0.15 + k * 0.3, -0.45 + k * 0.3, g).scale.y = 1; g.rotation.y += Math.PI; break;
        case 'mat': B(1.8, 0.12, 1.8, new THREE.MeshStandardMaterial({ color: this.fun ? 0x3d7bff : 0x2b4b8a, roughness: 0.9 }), 0, 0.06, 0, g); break;
        case 'bench': B(1.8, 0.06, 0.42, M.woodp, 0, 0.46, 0, g); for (const sx of [-0.8, 0.8]) B(0.06, 0.45, 0.38, M.metal, sx, 0.22, 0, g); break;
        case 'plant': case 'planter': { const pot = Cy(p.type === 'planter' ? 0.55 : 0.25, p.type === 'planter' ? 0.6 : 0.4, M.card, 0, p.type === 'planter' ? 0.3 : 0.2, 0, g); pot.material = new THREE.MeshStandardMaterial({ color: 0xc0743d, roughness: 0.9 }); for (let k = 0; k < 6; k++) { const l = new THREE.Mesh(new THREE.SphereGeometry(p.type === 'planter' ? 0.35 : 0.18, 8, 6), new THREE.MeshStandardMaterial({ color: this.fun ? 0x3bb35b : 0x3f5a2c, roughness: 0.8 })); l.position.set((R() - 0.5) * 0.5, (p.type === 'planter' ? 0.8 : 0.55) + R() * 0.5, (R() - 0.5) * 0.5); g.add(l); } break; }
        case 'cabinetP': B(1.2, 1.0, 0.45, M.woodp, 0, 0.5, 0, g); B(0.9, 0.7, 0.05, new THREE.MeshStandardMaterial({ color: 0x8a6a3a }), 0, 1.8, -0.2, g); break;
        case 'vending': B(1.0, 1.95, 0.8, new THREE.MeshStandardMaterial({ color: this.fun ? 0xe63946 : 0x6a1e1e, roughness: 0.4 }), 0, 0.98, 0, g); { const s = new THREE.Mesh(new THREE.PlaneGeometry(0.65, 1.2), new THREE.MeshBasicMaterial({ color: this.fun ? new THREE.Color(1.6, 1.6, 1.8) : new THREE.Color(0.25, 0.3, 0.32) })); s.position.set(-0.1, 1.15, 0.41); g.add(s); } break;
        case 'counter': B(C - 0.1, 1.0, 0.8, this.fun ? new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.6, 0.6) }) : M.metal, 0, 0.5, 0, g); B(C, 0.05, 0.85, M.white, 0, 1.02, 0, g); break;
        case 'fridge': B(0.9, 2.0, 0.75, M.white, 0, 1.0, 0, g); B(0.04, 0.5, 0.04, M.metal, 0.35, 1.3, 0.39, g); break;
        case 'sink': B(0.7, 0.2, 0.5, M.white, 0, 0.85, 0, g); Cy(0.06, 0.75, M.white, 0, 0.38, 0, g); B(0.6, 0.8, 0.03, new THREE.MeshStandardMaterial({ color: 0x8899aa, roughness: 0.05, metalness: 0.9 }), 0, 1.6, -0.22, g); break;
        case 'bucket': Cy(0.22, 0.4, new THREE.MeshStandardMaterial({ color: 0xd9b21c }), 0, 0.2, 0, g); Cy(0.02, 1.3, M.woodp, 0.2, 0.9, 0, g).rotation.z = 0.2; break;
        case 'crate': B(1.2, 1.1, 1.2, M.crate, 0, 0.55, 0, g); if (R() < 0.5) B(0.8, 0.7, 0.8, M.crate, 0.1, 1.45, 0, g).rotation.y = R(); g.rotation.y += R(); break;
        case 'seats': case 'seatsC': { const sm = p.type === 'seatsC' ? new THREE.MeshStandardMaterial({ color: 0xc1121f, roughness: 0.7 }) : M.fabric; for (let k = 0; k < 3; k++) { B(0.5, 0.08, 0.45, sm, -0.6 + k * 0.6, 0.45, 0, g); B(0.5, 0.5, 0.08, sm, -0.6 + k * 0.6, 0.72, -0.2, g); } break; }
        case 'piano': B(1.5, 1.3, 0.6, new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2, metalness: 0.2 }), 0, 0.65, 0, g); B(1.3, 0.05, 0.25, M.white, 0, 0.78, 0.4, g); break;
        case 'chairs': for (let k = 0; k < 3; k++) { B(0.42, 0.04, 0.42, M.darkm, -0.6 + k * 0.6, 0.45, 0, g); B(0.42, 0.45, 0.04, M.darkm, -0.6 + k * 0.6, 0.68, -0.2, g); } break;
        case 'easel': { for (const sx of [-0.3, 0.3]) { const l = B(0.04, 1.7, 0.04, M.woodp, sx, 0.85, 0, g); l.rotation.z = sx * 0.2; } B(0.7, 0.9, 0.03, new THREE.MeshStandardMaterial({ color: 0xf4efe3 }), 0, 1.15, 0.05, g); break; }
        case 'arcade': { const h = R(); B(0.85, 1.85, 0.8, new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(h, 0.7, 0.35), roughness: 0.4 }), 0, 0.93, 0, g); const s = new THREE.Mesh(new THREE.PlaneGeometry(0.62, 0.5), neonMat((h + 0.5) % 1)); s.position.set(0, 1.35, 0.41); g.add(s); B(0.85, 0.12, 0.3, neonMat(h), 0, 1.9, 0.25, g); B(0.7, 0.08, 0.35, M.darkm, 0, 1.0, 0.45, g); break; }
        case 'claw': { B(1.1, 0.9, 1.0, new THREE.MeshStandardMaterial({ color: 0xff4fa3 }), 0, 0.45, 0, g); B(1.0, 1.0, 0.9, M.glass, 0, 1.4, 0, g); B(1.1, 0.25, 1.0, neonMat(0.85), 0, 2.0, 0, g); for (let k = 0; k < 8; k++) { const t = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.8, 0.6) })); t.position.set((R() - 0.5) * 0.8, 1.0 + R() * 0.15, (R() - 0.5) * 0.7); g.add(t); } break; }
        case 'ballpit': { B(1.8, 0.5, 1.8, new THREE.MeshStandardMaterial({ color: 0x4ecdc4 }), 0, 0.25, 0, g); for (let k = 0; k < 40; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshStandardMaterial({ color: ['#ff6b6b', '#ffe66d', '#5aa9ff', '#7bff8a'][k % 4], roughness: 0.4 })); b.position.set((R() - 0.5) * 1.6, 0.5 + R() * 0.08, (R() - 0.5) * 1.6); g.add(b); } break; }
        case 'slide': { const s = B(0.7, 0.06, 2.2, new THREE.MeshStandardMaterial({ color: 0xffd23f, roughness: 0.3 }), 0, 1.0, 0.1, g); s.rotation.x = 0.6; B(0.9, 1.7, 0.6, new THREE.MeshStandardMaterial({ color: 0xff6b6b }), 0, 0.85, -0.8, g); break; }
        case 'climber': { const cm = new THREE.MeshStandardMaterial({ color: 0x5aa9ff, roughness: 0.4, metalness: 0.3 }); for (const sx of [-0.7, 0.7]) for (const sz of [-0.7, 0.7]) Cy(0.05, 2.0, cm, sx, 1.0, sz, g, 8); for (let k = 1; k < 4; k++) for (const sz of [-0.7, 0.7]) { const r = Cy(0.035, 1.4, cm, 0, k * 0.5, sz, g, 8); r.rotation.z = Math.PI / 2; } B(1.5, 0.08, 1.5, new THREE.MeshStandardMaterial({ color: 0xff6b6b }), 0, 2.0, 0, g); break; }
        case 'trampoline': { Cy(0.85, 0.5, M.darkm, 0, 0.25, 0, g, 20); Cy(0.8, 0.03, new THREE.MeshStandardMaterial({ color: 0x111144 }), 0, 0.51, 0, g, 20); const ring = new THREE.Mesh(new THREE.TorusGeometry(0.85, 0.06, 8, 24), new THREE.MeshStandardMaterial({ color: 0x3da5ff })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.52; g.add(ring); break; }
        case 'hoop': { B(0.1, 3.0, 0.1, M.metal, 0, 1.5, -0.1, g); B(1.2, 0.8, 0.05, M.white, 0, 3.0, 0.05, g); const r = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.02, 6, 16), new THREE.MeshStandardMaterial({ color: 0xff5a1f })); r.rotation.x = Math.PI / 2; r.position.set(0, 2.75, 0.35); g.add(r); break; }
        case 'balloon': for (let k = 0; k < 3; k++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(R(), 0.8, 0.6), roughness: 0.25 })); b.scale.y = 1.2; b.position.set((k - 1) * 0.3, 1.6 + R() * 0.4, 0); g.add(b); B(0.005, 1.4, 0.005, M.white, (k - 1) * 0.3, 0.8, 0, g); } B(0.5, 0.2, 0.5, new THREE.MeshStandardMaterial({ color: 0xffffff }), 0, 0.1, 0, g); break;
        case 'tank': Cy(0.9, 2.6, M.metal, 0, 1.3, 0, g, 18); break;
        case 'pillar': Cy(0.45, m.FH, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 }), 0, m.FH / 2, 0, g, 18); break;
        default: B(1, 1, 1, M.crate, 0, 0.5, 0, g);
      }
      this.root.add(g);
      if (p.spot) {
        const s = m.spots[p.spotId];
        // the "tell": a pair of shoes / head that gives away a risky hiding spot
        let tg = null;
        if (tell && s.risk === 'risky') {
          tg = new THREE.Group(); const shoeM = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6 });
          const pos = { feet: [0, 0.04, 0.42], deskfeet: [0, 0.04, 0.25], bedfeet: [0, 0.04, 0.9], curtfeet: [0, 0.04, 0.28], shoulder: [0.92, 1.0, 0.2], head: [0, 0.95, -0.2] }[tell];
          if (tell === 'shoulder' || tell === 'head') { const sh = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), new THREE.MeshStandardMaterial({ color: 0x334455, roughness: 0.8 })); tg.add(sh); }
          else for (const sx of [-0.09, 0.09]) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.22), shoeM); b.position.x = sx; tg.add(b); }
          tg.position.set(...pos); tg.visible = false; g.add(tg);
        }
        this.spotObjs[s.id] = { s, g, door, tell: tg, a: 0, tgt: 0, shake: 0, baseRot: g.rotation.y };
      }
    }
  }
  buildLamps() {
    const L = this.m.lamps, n = L.length;
    const glow = new THREE.InstancedMesh(new THREE.BoxGeometry(this.fun ? 1.4 : 1.2, 0.05, this.fun ? 0.5 : 0.24), new THREE.MeshBasicMaterial({ color: 0xffffff }), n);
    const mtx = new THREE.Matrix4(); this.tmpC = new THREE.Color();
    L.forEach((l, i) => { mtx.makeTranslation(l.x, l.y + 0.27, l.z); glow.setMatrixAt(i, mtx); l.color = this.fun ? new THREE.Color().setHSL(l.kind === 'arcade' || l.kind === 'theater' ? l.hue : 0.12, l.kind === 'arcade' || l.kind === 'theater' ? 1 : 0.15, 0.6) : new THREE.Color(1, 0.88, 0.7); l.k = 0; });
    glow.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3); glow.userData.noShadow = true; glow.frustumCulled = false;
    this.glow = glow; this.root.add(glow);
    const k = this.gfx === 'low' ? 4 : this.gfx === 'med' ? 6 : 8;
    this.pool = []; for (let i = 0; i < k; i++) { const p = new THREE.PointLight(0xffffff, 0, 12, 2); this.scene.add(p); this.pool.push(p); }
    this.poolT = 0;
  }
  update(s) { // s: {t, dt, cam, f, blackout}
    const L = this.m.lamps;
    for (let i = 0; i < L.length; i++) {
      const l = L[i];
      let k = this.fun ? 1 : 0.85;
      if (l.broken) k = Math.sin(s.t * 11 + l.ph * 7) > 0.97 ? 0.8 : 0;
      else if (!this.fun && Math.sin(s.t * 0.6 + l.ph) > 0.85) k = Math.random() < 0.7 ? 0.85 : 0.05;
      if (s.blackout && !this.fun) k = 0;
      l.k = k;
      const b = k * (this.fun ? 1.5 : 2.6); this.tmpC.setRGB(l.color.r * b, l.color.g * b, l.color.b * b); this.glow.setColorAt(i, this.tmpC);
    }
    this.glow.instanceColor.needsUpdate = true;
    this.poolT -= s.dt;
    if (this.poolT <= 0) {
      this.poolT = 0.25; const c = s.cam;
      const cand = L.filter(l => l.k > 0.05 && Math.abs(l.y - c.y) < this.m.FH).map(l => [l, (l.x - c.x) ** 2 + (l.z - c.z) ** 2 + (l.y - c.y) ** 2 * 4]).sort((a, b) => a[1] - b[1]).slice(0, this.pool.length);
      this.pool.forEach((p, i) => p.userData.l = cand[i] && cand[i][0]);
    }
    for (const p of this.pool) { const l = p.userData.l; if (!l) { p.intensity = 0; continue; } p.position.set(l.x, l.y - 0.1, l.z); p.color.copy(l.color); p.intensity = l.k * (this.fun ? 3.2 : 6); p.distance = this.fun ? 12 : 10; }
    for (const o of this.doorObjs) { o.a += ((o.d.open ? 1 : 0) - o.a) * Math.min(1, s.dt * 4); o.piv.rotation.y = -o.a * 1.5; }
    for (const o of this.spotObjs) {
      if (!o) continue;
      o.a += (o.tgt - o.a) * Math.min(1, s.dt * 8);
      if (o.door) { if (o.s.type === 'curtain') o.door.scale.z = 1 + o.a * 2; else if (o.s.type === 'box') o.door.rotation.x = -o.a * 1.2; else o.door.rotation.y = -o.a * 1.5; }
      if (o.shake > 0) { o.shake -= s.dt; o.g.rotation.y = o.baseRot + Math.sin(s.t * 60) * 0.02 * Math.min(1, o.shake * 3); } else o.g.rotation.y = o.baseRot;
    }
  }
  setTells(ids) { const set = new Set(ids || []); for (const o of this.spotObjs) if (o && o.tell) o.tell.visible = set.has(o.s.id); }
  dispose() { this.scene.remove(this.root); this.pool.forEach(p => this.scene.remove(p)); this.root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); }
}
