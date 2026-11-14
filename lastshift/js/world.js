// THE LAST SHIFT — builds and animates the 3D facility.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { W, H, C, WALL, FLOOR, RAMP, DOOR, PROP, SECRET, FL0, FL1, CE0, CE1, rng } from './map.js';

const TEX = {};
export async function loadTextures(base) {
  if (TEX.ready) return TEX;
  const L = new THREE.TextureLoader();
  const names = ['wall_diff', 'wall_nor', 'wall_arm', 'floor_diff', 'floor_nor', 'floor_arm', 'metal_diff', 'metal_nor', 'crate_diff', 'crate_nor', 'door_diff', 'door_nor', 'ceil_nor'];
  await Promise.all(names.map(n => L.loadAsync(base + n + '.jpg').then(t => { t.wrapS = t.wrapT = THREE.RepeatWrapping; if (n.endsWith('diff')) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; TEX[n] = t; })));
  // procedural textures built on top of the photo textures
  TEX.hospWall = canvasTex(512, 512, x => {
    x.drawImage(TEX.wall_diff.image, 0, 0, 512, 512);
    x.globalCompositeOperation = 'multiply'; x.fillStyle = '#a9bdb0'; x.fillRect(0, 0, 512, 300);
    x.fillStyle = '#d2cfc4'; x.fillRect(0, 330, 512, 182);
    x.globalCompositeOperation = 'source-over';
    x.fillStyle = 'rgba(40,50,46,.85)'; x.fillRect(0, 300, 512, 30); x.fillStyle = 'rgba(255,255,255,.08)'; x.fillRect(0, 302, 512, 4);
    x.strokeStyle = 'rgba(60,60,55,.55)'; x.lineWidth = 2;
    for (let y = 330; y < 512; y += 46) { x.beginPath(); x.moveTo(0, y); x.lineTo(512, y); x.stroke(); }
    for (let xx = 0; xx < 512; xx += 64) { x.beginPath(); x.moveTo(xx, 330); x.lineTo(xx, 512); x.stroke(); }
    grime(x, 512, 512, 26);
    const gr = x.createLinearGradient(0, 430, 0, 512); gr.addColorStop(0, 'rgba(30,25,15,0)'); gr.addColorStop(1, 'rgba(30,25,15,.55)'); x.fillStyle = gr; x.fillRect(0, 430, 512, 82);
  });
  TEX.hospFloor = canvasTex(512, 512, x => {
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) { x.fillStyle = (i + j) % 2 ? '#b8b4a2' : '#7d877b'; x.fillRect(i * 128, j * 128, 128, 128); }
    x.globalAlpha = 0.55; x.globalCompositeOperation = 'multiply'; x.drawImage(TEX.floor_diff.image, 0, 0, 512, 512); x.drawImage(TEX.floor_diff.image, 0, 0, 512, 512);
    x.globalAlpha = 1; x.globalCompositeOperation = 'source-over';
    x.strokeStyle = 'rgba(20,20,18,.6)'; x.lineWidth = 2; for (let k = 0; k <= 512; k += 128) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); }
    for (let i = 0; i < 18; i++) { const g = x.createRadialGradient(0, 0, 0, 0, 0, 1); g.addColorStop(0, 'rgba(45,35,20,.35)'); g.addColorStop(1, 'rgba(45,35,20,0)'); x.save(); x.translate(Math.random() * 512, Math.random() * 512); x.scale(20 + Math.random() * 70, 15 + Math.random() * 50); x.fillStyle = g; x.beginPath(); x.arc(0, 0, 1, 0, 7); x.fill(); x.restore(); }
  });
  TEX.ceil = canvasTex(512, 512, x => {
    x.fillStyle = '#a7a294'; x.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 9000; i++) { x.fillStyle = `rgba(0,0,0,${Math.random() * 0.25})`; x.fillRect(Math.random() * 512, Math.random() * 512, 2, 2); }
    x.strokeStyle = '#4c4a43'; x.lineWidth = 7; for (let k = 0; k <= 512; k += 256) { x.beginPath(); x.moveTo(k, 0); x.lineTo(k, 512); x.stroke(); x.beginPath(); x.moveTo(0, k); x.lineTo(512, k); x.stroke(); }
    for (let i = 0; i < 4; i++) { const cx = Math.random() * 512, cy = Math.random() * 512, r = 30 + Math.random() * 70; for (let k = 0; k < 4; k++) { x.strokeStyle = `rgba(110,80,30,${0.12 + k * 0.05})`; x.lineWidth = 3; x.beginPath(); x.arc(cx, cy, r * (1 - k * 0.18), 0, 7); x.stroke(); } x.fillStyle = 'rgba(110,80,30,.12)'; x.beginPath(); x.arc(cx, cy, r, 0, 7); x.fill(); }
  });
  TEX.blood = canvasTex(256, 256, x => {
    x.clearRect(0, 0, 256, 256);
    for (let i = 0; i < 26; i++) { const r = i === 0 ? 70 : 4 + Math.random() * 22, a = Math.random() * 6.28, d = i === 0 ? 0 : 40 + Math.random() * 80; x.fillStyle = `rgba(255,255,255,${0.75 + Math.random() * 0.25})`; x.beginPath(); x.ellipse(128 + Math.cos(a) * d, 128 + Math.sin(a) * d, r, r * (0.6 + Math.random() * 0.6), a, 0, 7); x.fill(); }
  }, false);
  TEX.smear = canvasTex(256, 256, x => {
    x.fillStyle = 'rgba(255,255,255,.85)';
    for (let i = 0; i < 5; i++) { const sx = 40 + i * 40 + Math.random() * 15; x.beginPath(); x.ellipse(sx, 70, 16, 34, 0.2, 0, 7); x.fill(); x.fillRect(sx - 3 - Math.random() * 3, 70, 4 + Math.random() * 4, 60 + Math.random() * 120); }
  }, false);
  TEX.glow = canvasTex(64, 64, x => { const g = x.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,.45)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 64, 64); }, false);
  TEX.cone = canvasTex(4, 128, x => { const g = x.createLinearGradient(0, 0, 0, 128); g.addColorStop(0, 'rgba(255,255,255,0)'); g.addColorStop(0.15, 'rgba(255,255,255,.9)'); g.addColorStop(1, 'rgba(255,255,255,0)'); x.fillStyle = g; x.fillRect(0, 0, 4, 128); }, false);
  TEX.vent = canvasTex(128, 256, x => { x.fillStyle = '#8e9a90'; x.fillRect(0, 0, 128, 256); for (let k = 0; k < 6; k++) { x.fillStyle = '#121412'; x.fillRect(30, 20 + k * 12, 68, 6); x.fillRect(30, 180 + (k % 3) * 12, 68, 6); } x.fillStyle = '#2b2f2c'; x.fillRect(100, 120, 10, 34); grime(x, 128, 256, 8); });
  TEX.cloth = canvasTex(128, 128, x => { x.fillStyle = '#c9c4b6'; x.fillRect(0, 0, 128, 128); for (let i = 0; i < 8; i++) { x.fillStyle = `rgba(${90 + Math.random() * 40},${50 + Math.random() * 20},20,.25)`; x.beginPath(); x.arc(Math.random() * 128, Math.random() * 128, 6 + Math.random() * 18, 0, 7); x.fill(); } });
  TEX.ready = true;
  return TEX;
}
function canvasTex(w, h, draw, srgb = true) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d'); draw(x);
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function grime(x, w, h, n) {
  for (let i = 0; i < n; i++) { const sx = Math.random() * w, len = 40 + Math.random() * h * 0.6, g = x.createLinearGradient(0, 0, 0, len); g.addColorStop(0, 'rgba(50,40,25,.35)'); g.addColorStop(1, 'rgba(50,40,25,0)'); x.fillStyle = g; x.fillRect(sx, Math.random() * h * 0.3, 2 + Math.random() * 7, len); }
}
export function textTex(text, opt = {}) {
  const w = opt.w || 512, h = opt.h || 128;
  return canvasTex(w, h, x => {
    x.fillStyle = opt.bg || '#163240'; x.fillRect(0, 0, w, h);
    if (opt.border !== false) { x.strokeStyle = opt.fg || '#e8efe9'; x.lineWidth = 6; x.strokeRect(8, 8, w - 16, h - 16); }
    x.fillStyle = opt.fg || '#e8efe9'; x.font = `${opt.weight || 700} ${opt.size || 64}px ${opt.font || 'Arial, sans-serif'}`; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillText(text, w / 2, h / 2 + 4);
    if (opt.dirty !== false) grime(x, w, h, 6);
  });
}

class Geo {
  constructor() { this.p = []; this.n = []; this.u = []; this.i = []; }
  quad(a, b, c, d, n, uv) {
    const o = this.p.length / 3;
    for (const v of [a, b, c, d]) this.p.push(v[0], v[1], v[2]);
    for (let k = 0; k < 4; k++) this.n.push(n[0], n[1], n[2]);
    for (const t of uv) this.u.push(t[0], t[1]);
    this.i.push(o, o + 1, o + 2, o, o + 2, o + 3);
  }
  build() { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(this.u, 2)); g.setIndex(this.i); g.computeBoundingSphere(); return g; }
}

export class World {
  constructor(scene, map, gfx) {
    this.scene = scene; this.m = map; this.gfx = gfx; this.T = TEX;
    const R = this.R = rng(map.seed ^ 0x5eed);
    this.root = new THREE.Group(); scene.add(this.root);
    this.mats();
    this.buildShell();
    this.buildDoors();
    this.buildSecrets();
    this.buildProps();
    this.buildItems();
    this.buildLamps();
    this.buildDecals();
    this.buildSigns();
    this.buildExtras();
    this.root.traverse(o => { if (o.isMesh && !o.userData.noShadow) { o.receiveShadow = true; o.castShadow = o.userData.cast !== false; } });
  }
  mats() {
    const T = this.T, S = THREE.MeshStandardMaterial;
    const tint = (map, color, extra = {}) => new S({ map, color, ...extra });
    this.M = {
      hWall: new S({ map: T.hospWall, normalMap: T.wall_nor, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.82, color: 0xffffff }),
      bWall: tint(T.wall_diff, 0x7d756a, { normalMap: T.wall_nor, roughnessMap: T.wall_arm, roughness: 1 }),
      hFloor: new S({ map: T.hospFloor, normalMap: T.floor_nor, normalScale: new THREE.Vector2(0.4, 0.4), roughness: 0.38, metalness: 0.0 }),
      bFloor: tint(T.floor_diff, 0x8a847a, { normalMap: T.floor_nor, roughnessMap: T.floor_arm, roughness: 0.55 }),
      xFloor: tint(T.floor_diff, 0x46484c, { normalMap: T.floor_nor, roughness: 0.9 }),
      hCeil: new S({ map: T.ceil, normalMap: T.ceil_nor, normalScale: new THREE.Vector2(0.3, 0.3), roughness: 0.95 }),
      bCeil: tint(T.wall_diff, 0x4d4842, { normalMap: T.wall_nor, roughness: 1 }),
      frame: new S({ color: 0x3e4440, roughness: 0.6, metalness: 0.5 }),
      door: new S({ map: T.door_diff, normalMap: T.door_nor, roughness: 0.6, metalness: 0.3, color: 0xb8c4bc }),
      rust: new S({ map: T.door_diff, normalMap: T.door_nor, color: 0x8a6a52, roughness: 0.75, metalness: 0.4 }),
      steel: new S({ color: 0x8b9192, roughness: 0.35, metalness: 0.85 }),
      dark: new S({ color: 0x1c1e1d, roughness: 0.7, metalness: 0.4 }),
      plate: new S({ map: T.metal_diff, normalMap: T.metal_nor, roughness: 0.6, metalness: 0.6, color: 0x9a9a9a }),
      wood: new S({ map: T.crate_diff, normalMap: T.crate_nor, roughness: 0.8, color: 0xa08868 }),
      crate: new S({ map: T.crate_diff, normalMap: T.crate_nor, roughness: 0.85 }),
      card: new S({ color: 0x6e5534, roughness: 0.95 }),
      locker: new S({ map: T.vent, roughness: 0.5, metalness: 0.55, color: 0x9fb0a4 }),
      lockerBody: new S({ color: 0x5e6c62, roughness: 0.5, metalness: 0.55 }),
      cloth: new S({ map: T.cloth, roughness: 0.95 }),
      sheet: new S({ color: 0xbab6aa, roughness: 0.9 }),
      paper: new S({ color: 0xd9d4c4, roughness: 1, side: THREE.DoubleSide }),
      red: new S({ color: 0x7a0f0f, roughness: 0.5, metalness: 0.4 }),
      screenOff: new S({ color: 0x050706, roughness: 0.15, metalness: 0.2 }),
    };
    this.M.secretH = this.M.hWall.clone(); this.M.secretH.color = new THREE.Color(0xd6d2c8);
    this.M.secretB = this.M.bWall.clone(); this.M.secretB.color = new THREE.Color(0x6e675c);
  }
  zoneOf(x, z) { return this.m.zoneOf(x, z); }
  // ------------------------------------------------------------ static shell
  buildShell() {
    const m = this.m, geos = { hWall: new Geo(), bWall: new Geo(), hFloor: new Geo(), bFloor: new Geo(), xFloor: new Geo(), hCeil: new Geo(), bCeil: new Geo() };
    const open = t => t === FLOOR || t === RAMP || t === PROP || t === DOOR || t === SECRET;
    const range = (x, z) => { const t = m.t(x, z); if (t === RAMP) return [FL1, CE0]; const zz = m.zoneOf(x, z); const lv = zz && zz.lv < 0; return [lv ? FL1 : FL0, m.ceilH(x, z)]; };
    const wallMat = (x, z) => { const t = m.t(x, z); if (t === RAMP) return 'bWall'; const zz = m.zoneOf(x, z); return zz && zz.lv === 0 && zz.kind !== 'exit' ? 'hWall' : 'bWall'; };
    for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
      const t = m.t(x, z);
      if (t === WALL) {
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const nx = x + dx, nz = z + dz; if (!open(m.t(nx, nz))) continue;
          const [y0, y1] = range(nx, nz), key = wallMat(nx, nz), vs = key === 'hWall' ? 3.0 : C;
          const ex = (x + 0.5 + dx * 0.5) * C, ez = (z + 0.5 + dz * 0.5) * C;
          const rx = -dz, rz = dx; // right vector for a viewer facing the wall (n=(dx,dz)) → cross(-n,up)
          const h = C / 2;
          const a = [ex - rx * h, y0, ez - rz * h], b = [ex + rx * h, y0, ez + rz * h], c = [ex + rx * h, y1, ez + rz * h], d = [ex - rx * h, y1, ez - rz * h];
          const ua = (a[0] * rx + a[2] * rz) / C, ub = ua + 1;
          const v0 = key === 'hWall' ? y0 / vs : y0 / vs, v1 = y1 / vs;
          geos[key].quad(a, b, c, d, [dx, 0, dz], [[ua, v0], [ub, v0], [ub, v1], [ua, v1]]);
        }
        continue;
      }
      // floor & ceiling
      const x0 = x * C, x1 = x0 + C, z0 = z * C, z1 = z0 + C;
      const zz = m.zoneOf(x, z), base = t === RAMP ? null : (zz && zz.lv < 0 ? FL1 : FL0);
      const ya = t === RAMP ? m.floorH(x0 + 1, z1) : base, yb = t === RAMP ? m.floorH(x0 + 1, z0) : base;
      const fk = zz && zz.kind === 'exit' ? 'xFloor' : (t === RAMP || (zz && zz.lv < 0)) ? 'bFloor' : 'hFloor';
      const uv = [[x0 / C, -z1 / C], [x1 / C, -z1 / C], [x1 / C, -z0 / C], [x0 / C, -z0 / C]];
      const ny = t === RAMP ? 0.98 : 1, nz = t === RAMP ? -0.2 : 0;
      geos[fk].quad([x0, ya, z1], [x1, ya, z1], [x1, yb, z0], [x0, yb, z0], [0, ny, nz], uv);
      if (zz && zz.kind === 'exit') continue;
      const ch = m.ceilH(x, z), ck = t !== RAMP && zz && zz.lv === 0 ? 'hCeil' : 'bCeil';
      const cuv = uv.map(([u, v]) => [u, v]);
      geos[ck].quad([x0, ch, z0], [x1, ch, z0], [x1, ch, z1], [x0, ch, z1], [0, -1, 0], [cuv[3], cuv[2], cuv[1], cuv[0]]);
    }
    for (const k in geos) { const g = geos[k].build(); const mesh = new THREE.Mesh(g, this.M[k]); mesh.userData.cast = k.endsWith('Wall'); this.root.add(mesh); }
  }
  // ------------------------------------------------------------ doors
  buildDoors() {
    const m = this.m; this.doorObjs = [];
    for (const d of m.doors) {
      const zz = m.zones[d.zone], lv = zz.lv < 0, y0 = lv ? FL1 : FL0, ch = m.ceilH(d.x, d.z);
      const ax = m.axis(d.x, d.z); // 'z' → passage along z, panel spans x
      const g = new THREE.Group(); g.position.set((d.x + 0.5) * C, y0, (d.z + 0.5) * C); if (ax === 'x') g.rotation.y = Math.PI / 2;
      this.root.add(g);
      const wallM = lv || zz.kind === 'exit' ? this.M.bWall : this.M.hWall;
      // jambs + lintel (local: panel spans local x, passage along local z)
      const jw = d.type === 'G' || d.type === 'C' ? 0.5 : 0.5, dh = d.type === 'G' ? 2.6 : 2.2;
      for (const s of [-1, 1]) { const j = new THREE.Mesh(new THREE.BoxGeometry(jw, dh, C), wallM); j.position.set(s * (C / 2 - jw / 2), dh / 2, 0); g.add(j); const tr = new THREE.Mesh(new THREE.BoxGeometry(0.08, dh, 0.16), this.M.frame); tr.position.set(s * (C / 2 - jw - 0.04), dh / 2, 0); g.add(tr); }
      const lt = new THREE.Mesh(new THREE.BoxGeometry(C, ch - dh + 0.02, C), wallM); lt.position.set(0, dh + (ch - dh) / 2, 0); g.add(lt);
      const top = new THREE.Mesh(new THREE.BoxGeometry(C - jw * 2, 0.08, 0.16), this.M.frame); top.position.y = dh; g.add(top);
      const o = { d, g, a: 0, tgt: 0, type: d.type, parts: [] };
      const pw = C - jw * 2;
      if (d.type === 'D' || d.type === 'R') {
        const piv = new THREE.Group(); piv.position.set(-pw / 2, 0, 0); g.add(piv);
        const mat = d.type === 'R' ? this.M.steel : lv ? this.M.rust : this.M.door;
        const p = new THREE.Mesh(new THREE.BoxGeometry(pw - 0.02, dh - 0.02, 0.06), mat); p.position.set(pw / 2, dh / 2, 0); piv.add(p);
        if (!lv && d.type === 'D') { const win = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.5, 0.065), this.M.screenOff); win.position.set(pw / 2, 1.55, 0); piv.add(win); }
        for (const s of [-1, 1]) { const hd = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.03, 0.05), this.M.steel); hd.position.set(pw - 0.14, 1.0, s * 0.06); piv.add(hd); }
        o.piv = piv; o.swing = (d.id % 2 ? 1 : -1);
        if (d.type === 'R') {
          for (const s of [-1, 1]) { const rd = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.18, 0.04), this.M.dark); rd.position.set(pw / 2 + 0.22, 1.25, s * (C / 2 + 0.02)); g.add(rd); const led = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.045), new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 0.1, 0.1) })); led.position.set(pw / 2 + 0.22, 1.31, s * (C / 2 + 0.025)); g.add(led); o.parts.push(led); }
        }
      } else if (d.type === 'P') {
        const l = new THREE.Mesh(new THREE.BoxGeometry(pw / 2, dh, 0.08), this.M.steel), r = l.clone();
        l.position.set(-pw / 4, dh / 2, 0); r.position.set(pw / 4, dh / 2, 0); g.add(l, r); o.l = l; o.r = r; o.pw = pw;
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(pw, 0.1, 0.09), new THREE.MeshStandardMaterial({ color: 0xb8a020, roughness: 0.6 })); stripe.position.y = 1.0; l.add(stripe.clone()); // decoration
      } else if (d.type === 'G') {
        const sh = new THREE.Mesh(new THREE.BoxGeometry(pw, dh, 0.1), this.M.plate); sh.position.set(0, dh / 2, 0); g.add(sh); o.sh = sh; o.dh = dh;
        for (let k = 0; k < 12; k++) { const rib = new THREE.Mesh(new THREE.BoxGeometry(pw, 0.03, 0.13), this.M.dark); rib.position.y = -dh / 2 + 0.1 + k * 0.2; sh.add(rib); }
        if (d.z === 10) { // keypad on the lobby side
          const kp = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.32, 0.06), this.M.dark); kp.position.set(-C / 2 + 0.25, 1.3, -C / 2 - 0.03); kp.rotation.y = 0;
          const scr = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.07), new THREE.MeshBasicMaterial({ color: 0x050505 })); scr.position.set(0, 0.08, -0.035); scr.rotation.y = Math.PI; kp.add(scr); g.add(kp); o.keypad = scr;
        }
      } else if (d.type === 'C') {
        const piv = new THREE.Group(); piv.position.set(-pw / 2, 0, 0); g.add(piv);
        for (let k = 0; k <= 8; k++) { const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, dh, 6), this.M.rust); bar.position.set(0.05 + k * (pw - 0.1) / 8, dh / 2, 0); piv.add(bar); }
        for (const yy of [0.2, 1.1, 2.0]) { const hb = new THREE.Mesh(new THREE.BoxGeometry(pw, 0.06, 0.06), this.M.rust); hb.position.set(pw / 2, yy, 0); piv.add(hb); }
        const chain = new THREE.Group(); for (let k = 0; k < 7; k++) { const link = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.012, 5, 10), this.M.steel); link.position.set(pw - 0.05, 1.3 - k * 0.07, 0.05); link.rotation.y = k % 2 ? Math.PI / 2 : 0; chain.add(link); }
        const lock = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.05), new THREE.MeshStandardMaterial({ color: 0x9a7a22, metalness: 0.8, roughness: 0.35 })); lock.position.set(pw - 0.05, 0.82, 0.07); chain.add(lock);
        g.add(chain); o.chain = chain; o.piv = piv; o.swing = 1;
      }
      this.doorObjs.push(o);
    }
  }
  buildSecrets() {
    this.secretObjs = this.m.secrets.map(s => {
      const zz = this.m.zones[s.zone], lv = zz && zz.lv < 0, y0 = lv ? FL1 : FL0, ch = lv ? CE1 : CE0;
      const b = new THREE.Mesh(new THREE.BoxGeometry(C - 0.002, ch - y0, C - 0.002), lv ? this.M.secretB : this.M.secretH);
      b.position.set((s.x + 0.5) * C, y0 + (ch - y0) / 2, (s.z + 0.5) * C);
      // a faint crack outline so sharp-eyed players can spot it
      const crackMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.55 });
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        if (this.m.t(s.x + dx, s.z + dz) === WALL) continue;
        for (const xx of [-0.5, 0.5]) { const ln = new THREE.Mesh(new THREE.PlaneGeometry(0.015, 2.05), crackMat); ln.position.set(dx * (C / 2 + 0.003) + (dz ? xx : 0), -(ch - y0) / 2 + 1.03, dz * (C / 2 + 0.003) + (dx ? xx : 0)); ln.lookAt(ln.position.x + dx, ln.position.y, ln.position.z + dz); b.add(ln); }
      }
      this.root.add(b); return { s, b, a: 0, base: b.position.y, h: ch - y0 };
    });
  }
  // ------------------------------------------------------------ props
  placeOnWall(p, depth) {
    const [fx, fz] = this.m.facing(p.x, p.z);
    const zz = this.m.zoneOf(p.x, p.z), y0 = zz.lv < 0 ? FL1 : FL0;
    const g = new THREE.Group();
    g.position.set((p.x + 0.5) * C - fx * (C / 2 - depth / 2), y0, (p.z + 0.5) * C - fz * (C / 2 - depth / 2));
    g.rotation.y = Math.atan2(fx, fz); // local +z faces into the room
    this.root.add(g); return { g, fx, fz, y0 };
  }
  box(w, h, d, mat, x, y, z, parent) { const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat); b.position.set(x, y, z); parent.add(b); return b; }
  buildProps() {
    const M = this.M, R = this.R; this.lockers = {}; this.screens = []; this.leds = [];
    for (const p of this.m.props) {
      if (p.type === 'locker') {
        const { g, fx, fz, y0 } = this.placeOnWall(p, 0.6);
        this.box(0.86, 2.0, 0.58, M.lockerBody, 0, 1.0, 0, g);
        this.box(0.86, 0.06, 0.6, M.dark, 0, 2.02, 0, g);
        const piv = new THREE.Group(); piv.position.set(-0.41, 0, 0.3); g.add(piv);
        const dr = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.9, 0.03), M.locker); dr.position.set(0.4, 1.0, 0.01); piv.add(dr);
        const wx = g.position.x + fx * 0.02, wz = g.position.z + fz * 0.02;
        this.lockers[p.id] = { p, g, door: piv, a: 0, tgt: 0, x: wx, z: wz, y: y0, fx, fz, ex: (p.x + 0.5) * C + fx * 0.45, ez: (p.z + 0.5) * C + fz * 0.45 };
        g.rotation.y += (R() - 0.5) * 0.06;
      } else if (p.type === 'bed') {
        const { g } = this.placeOnWall(p, 2.05);
        const r = (w, h, d, x, y, z, m = M.steel) => this.box(w, h, d, m, x, y, z, g);
        for (const sx of [-0.42, 0.42]) for (const sz of [-0.9, 0.9]) r(0.04, 0.5, 0.04, sx, 0.25, sz);
        r(0.9, 0.05, 1.95, 0, 0.47, 0, M.steel);
        const mt = r(0.86, 0.16, 1.88, 0, 0.58, 0.02, M.cloth); mt.rotation.z = (R() - 0.5) * 0.05;
        r(0.55, 0.1, 0.32, 0, 0.71, -0.72, M.sheet);
        r(0.92, 0.7, 0.04, 0, 0.75, -0.98, M.steel);
        if (R() < 0.5) { const s = r(0.9, 0.05, 1.1, 0.02, 0.68, 0.35, M.sheet); s.rotation.set(0.03, 0.2, (R() - 0.5) * 0.2); }
        g.position.x += (R() - 0.5) * 0.25; g.rotation.y += (R() - 0.5) * 0.18;
      } else if (p.type === 'slab') {
        const zz = this.m.zoneOf(p.x, p.z), g = new THREE.Group(); g.position.set((p.x + 0.5) * C, zz.lv < 0 ? FL1 : FL0, (p.z + 0.5) * C); g.rotation.y = R() * 0.3 - 0.15; this.root.add(g);
        this.box(0.8, 0.06, 2.0, M.steel, 0, 0.9, 0, g);
        const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.18, 0.88, 10), M.steel); ped.position.y = 0.44; g.add(ped);
        if (R() < 0.7) { const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 1.3, 4, 10), M.sheet); body.rotation.x = Math.PI / 2; body.scale.set(1.1, 1, 0.55); body.position.set(0, 1.06, 0.05); g.add(body); const hd = new THREE.Mesh(new THREE.SphereGeometry(0.15, 10, 8), M.sheet); hd.position.set(0, 1.08, -0.86); g.add(hd); const ft = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.07, 0.01), M.paper); ft.position.set(0.12, 1.02, 0.95); g.add(ft); }
      } else if (p.type === 'drawers') {
        const { g } = this.placeOnWall(p, 0.75);
        this.box(C, 2.3, 0.7, M.steel, 0, 1.15, 0, g);
        for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { this.box(0.62, 0.62, 0.03, M.plate, -0.75 + i * 0.75, 0.55 + j * 0.85, 0.36, g); this.box(0.18, 0.04, 0.05, M.dark, -0.75 + i * 0.75, 0.55 + j * 0.85, 0.39, g); }
      } else if (p.type === 'shelf') {
        const { g } = this.placeOnWall(p, 0.55);
        for (const sx of [-0.85, 0.85]) for (const sz of [-0.22, 0.22]) this.box(0.04, 2.1, 0.04, M.steel, sx, 1.05, sz, g);
        for (let k = 0; k < 4; k++) { this.box(1.75, 0.03, 0.5, M.steel, 0, 0.15 + k * 0.6, 0, g); for (let b = 0; b < 3; b++) if (R() < 0.65) { const bw = 0.25 + R() * 0.3, bh = 0.18 + R() * 0.25; const bx = this.box(bw, bh, 0.35, M.card, -0.6 + b * 0.6 + (R() - 0.5) * 0.15, 0.17 + k * 0.6 + bh / 2, 0, g); bx.rotation.y = (R() - 0.5) * 0.4; } }
      } else if (p.type === 'crate') {
        const zz = this.m.zoneOf(p.x, p.z), g = new THREE.Group(); g.position.set((p.x + 0.5) * C + (R() - 0.5) * 0.3, zz.lv < 0 ? FL1 : FL0, (p.z + 0.5) * C + (R() - 0.5) * 0.3); g.rotation.y = R() * 1.2; this.root.add(g);
        this.box(1.15, 1.0, 1.15, M.crate, 0, 0.5, 0, g);
        if (R() < 0.5) { const t = this.box(0.75, 0.6, 0.75, M.crate, (R() - 0.5) * 0.2, 1.3, (R() - 0.5) * 0.2, g); t.rotation.y = R(); }
      } else if (p.type === 'desk' || p.type === 'monitor') {
        const { g } = this.placeOnWall(p, 0.9);
        this.box(1.6, 0.05, 0.8, M.wood, 0, 0.76, 0, g);
        for (const sx of [-0.75, 0.75]) this.box(0.05, 0.74, 0.75, M.dark, sx, 0.37, 0, g);
        for (let k = 0; k < 3; k++) { const pp = new THREE.Mesh(new THREE.PlaneGeometry(0.21, 0.29), M.paper); pp.rotation.set(-Math.PI / 2, 0, R() * 3); pp.position.set((R() - 0.5) * 1.2, 0.79 + k * 0.002, (R() - 0.5) * 0.5); g.add(pp); }
        const n = p.type === 'monitor' ? 3 : (R() < 0.5 ? 1 : 0);
        for (let k = 0; k < n; k++) {
          const crt = this.box(0.42, 0.36, 0.42, M.lockerBody, (k - (n - 1) / 2) * 0.48, 0.97, -0.12, g);
          const sm = new THREE.MeshBasicMaterial({ color: 0x030403 }); const sc = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.27), sm); sc.position.set(0, 0.01, 0.212); crt.add(sc);
          if (p.type === 'monitor') this.screens.push({ mesh: sc, mat: sm, k });
        }
        if (p.type === 'monitor') { this.monitor = { x: (p.x + 0.5) * C, z: (p.z + 0.5) * C, g }; }
      } else if (p.type === 'counter') {
        const zz = this.m.zoneOf(p.x, p.z), g = new THREE.Group(); g.position.set((p.x + 0.5) * C, FL0, (p.z + 0.5) * C); this.root.add(g);
        this.box(C, 1.05, 0.9, M.wood, 0, 0.52, 0, g); this.box(C + 0.02, 0.05, 1.05, M.dark, 0, 1.07, 0, g);
      } else if (p.type === 'bench') {
        const zz = this.m.zoneOf(p.x, p.z), g = new THREE.Group(); g.position.set((p.x + 0.5) * C, FL0, (p.z + 0.5) * C); g.rotation.y = (R() - 0.5) * 0.3; this.root.add(g);
        this.box(1.9, 0.06, 0.45, M.wood, 0, 0.46, 0, g); for (const sx of [-0.85, 0.85]) this.box(0.05, 0.45, 0.4, M.dark, sx, 0.22, 0, g);
        for (let k = 0; k < 3; k++) { const ch = this.box(0.45, 0.04, 0.42, M.red, -0.6 + k * 0.6, 0.5, 0, g); this.box(0.45, 0.42, 0.04, M.red, -0.6 + k * 0.6, 0.72, -0.2, g); }
      } else if (p.type === 'tank') {
        const g = new THREE.Group(); g.position.set((p.x + 0.5) * C, FL1, (p.z + 0.5) * C); this.root.add(g);
        const cyl = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 2.3, 24), M.rust); cyl.position.y = 1.15; g.add(cyl);
        for (const yy of [0.3, 1.15, 2.0]) { const band = new THREE.Mesh(new THREE.TorusGeometry(1.01, 0.04, 6, 30), M.dark); band.rotation.x = Math.PI / 2; band.position.y = yy; g.add(band); }
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.6, 10), M.rust); pipe.position.set(0.4, 2.55, 0); g.add(pipe);
        const glow = new THREE.Mesh(new THREE.CircleGeometry(0.12, 12), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.9, 0.2) })); glow.position.set(0, 0.6, 1.005); g.add(glow); this.tankGlow = glow;
      } else if (p.type === 'valve') {
        const { g } = this.placeOnWall(p, 0.5);
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2.8, 10), M.rust); pipe.position.set(0, 1.4, -0.1); g.add(pipe);
        const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.35, 8), M.rust); arm.rotation.x = Math.PI / 2; arm.position.set(0, 1.25, 0.08); g.add(arm);
        const wheel = new THREE.Group(); wheel.position.set(0, 1.25, 0.27); g.add(wheel);
        const wm = new THREE.MeshStandardMaterial({ color: 0x8a1010, roughness: 0.5, metalness: 0.3 });
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.03, 8, 20), wm); wheel.add(ring);
        for (let k = 0; k < 3; k++) { const sp = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.03, 0.03), wm); sp.rotation.z = k * Math.PI / 3; wheel.add(sp); }
        this.valve = { x: (p.x + 0.5) * C, y: FL1 + 1.25, z: (p.z + 0.5) * C, wheel, a: 0 };
      } else if (p.type === 'breaker') {
        const { g } = this.placeOnWall(p, 0.5);
        this.box(1.3, 1.9, 0.45, M.lockerBody, 0, 1.15, 0, g);
        const label = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.2), new THREE.MeshStandardMaterial({ map: textTex('MAIN BREAKER', { bg: '#c9b62a', fg: '#111', size: 54 }), roughness: 0.8 })); label.position.set(0, 1.92, 0.226); g.add(label);
        const slots = [], fuses = [], lights = [];
        for (let k = 0; k < 3; k++) {
          const sl = this.box(0.22, 0.4, 0.06, M.dark, -0.35 + k * 0.35, 1.3, 0.23, g); slots.push(sl);
          const fz = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.3, 10), new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0xff8a20, emissiveIntensity: 0.6, transparent: true, opacity: 0.9 })); fz.position.set(-0.35 + k * 0.35, 1.3, 0.27); fz.visible = false; g.add(fz); fuses.push(fz);
          const lm = new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.1, 0.05) }); const l = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), lm); l.position.set(-0.35 + k * 0.35, 1.62, 0.25); g.add(l); lights.push(lm);
        }
        const lever = new THREE.Group(); lever.position.set(0.5, 0.8, 0.25); g.add(lever); const lv = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.06), M.red); lv.position.y = 0.2; lever.add(lv); lever.rotation.x = 0.6;
        this.breaker = { x: (p.x + 0.5) * C, y: FL1 + 1.3, z: (p.z + 0.5) * C, fuses, lights, lever };
      } else if (p.type === 'panel') {
        const { g } = this.placeOnWall(p, 0.5);
        this.box(1.0, 2.0, 0.45, M.lockerBody, 0, 1.0, 0, g);
        for (let k = 0; k < 6; k++) { const lm = new THREE.MeshBasicMaterial({ color: 0x000000 }); const l = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.02), lm); l.position.set(-0.3 + (k % 3) * 0.12, 1.6 - Math.floor(k / 3) * 0.12, 0.23); g.add(l); this.leds.push({ m: lm, ph: R() * 10 }); }
        this.box(0.6, 0.5, 0.03, M.plate, 0.05, 0.9, 0.23, g);
      }
    }
  }
  // ------------------------------------------------------------ items
  buildItems() {
    const M = this.M;
    const glowMat = c => new THREE.SpriteMaterial({ map: this.T.glow, color: c, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.6 });
    this.itemObjs = this.m.items.map(it => {
      const g = new THREE.Group(); const y = this.m.floorH(it.x, it.z); g.position.set(it.x, y, it.z); g.rotation.y = it.rot; this.root.add(g);
      let col;
      if (it.type === 'fuse') {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.24, 12), new THREE.MeshStandardMaterial({ color: 0x6b4a1a, emissive: 0xff7a10, emissiveIntensity: 0.8, roughness: 0.2, transparent: true, opacity: 0.85 }));
        body.rotation.z = Math.PI / 2; body.position.y = 0.06; g.add(body);
        for (const s of [-1, 1]) { const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.05, 12), M.steel); cap.rotation.z = Math.PI / 2; cap.position.set(s * 0.14, 0.06, 0); g.add(cap); }
        col = 0xff8a30;
      } else if (it.type === 'key') {
        const card = new THREE.Mesh(new THREE.BoxGeometry(0.17, 0.006, 0.11), new THREE.MeshStandardMaterial({ map: textTex('SEC-1', { bg: '#a1121a', fg: '#fff', size: 70, w: 256, h: 160 }), roughness: 0.4 }));
        card.position.y = 0.005; g.add(card); const ly = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.002, 0.3), new THREE.MeshStandardMaterial({ color: 0x222 })); ly.position.set(0.06, 0.003, 0.15); g.add(ly);
        col = 0xff2030;
      } else if (it.type === 'cutters') {
        const hm = new THREE.MeshStandardMaterial({ color: 0xb01818, roughness: 0.5 });
        for (const s of [-1, 1]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 8), hm); h.rotation.z = Math.PI / 2; h.rotation.y = s * 0.12; h.position.set(-0.1, 0.03, s * 0.04); g.add(h); }
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 0.08), M.steel); jaw.position.set(0.24, 0.03, 0); g.add(jaw);
        col = 0xffffff;
      } else {
        const b = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.12, 10), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.4 })); b.rotation.z = Math.PI / 2; b.position.y = 0.03; g.add(b);
        const band = new THREE.Mesh(new THREE.CylinderGeometry(0.031, 0.031, 0.05, 10), new THREE.MeshStandardMaterial({ color: 0xd8b21c, roughness: 0.3, metalness: 0.4 })); band.rotation.z = Math.PI / 2; band.position.set(0.035, 0.03, 0); g.add(band);
        col = 0xd8ff6a;
      }
      const sp = new THREE.Sprite(glowMat(col)); sp.scale.set(0.55, 0.55, 1); sp.position.y = 0.12; sp.userData.noShadow = true; g.add(sp);
      g.traverse(o => { if (o.isMesh) o.userData.cast = false; });
      return { it, g, sp, gone: false };
    });
  }
  // ------------------------------------------------------------ lamps
  buildLamps() {
    const L = this.m.lamps, n = L.length;
    const housing = new THREE.InstancedMesh(new THREE.BoxGeometry(1.3, 0.07, 0.34), this.M.dark, n);
    const glowGeo = new THREE.BoxGeometry(1.18, 0.03, 0.22), bulbGeo = new THREE.SphereGeometry(0.075, 10, 8), emGeo = new THREE.BoxGeometry(0.32, 0.1, 0.12);
    const gm = new THREE.MeshBasicMaterial({ color: 0xffffff });
    this.tubes = new THREE.InstancedMesh(glowGeo, gm, n); this.bulbs = new THREE.InstancedMesh(bulbGeo, gm, n); this.ems = new THREE.InstancedMesh(emGeo, gm, n);
    const coneGeo = new THREE.CylinderGeometry(0.25, 1.7, 2.6, 18, 1, true); coneGeo.translate(0, -1.3, 0);
    this.cones = new THREE.InstancedMesh(coneGeo, new THREE.MeshBasicMaterial({ map: this.T.cone, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: true }), n);
    const mtx = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), zero = new THREE.Matrix4().makeScale(0, 0, 0);
    const counts = { t: 0, b: 0, e: 0, h: 0 };
    const cord = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.008, 0.008, 0.4, 4), this.M.dark, n);
    for (const l of L) {
      l.delay = 0; l.k = 0;
      const along = this.m.t(l.cx - 1, l.cz) === WALL && this.m.t(l.cx + 1, l.cz) === WALL;
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), along ? Math.PI / 2 : 0);
      if (l.emergency) {
        const ex = this.m.t(l.cx, l.cz - 1) === WALL ? 0 : 0; // stick near ceiling
        mtx.compose(new THREE.Vector3(l.x, l.y - 0.08, l.z), q, s); l.inst = ['e', counts.e]; this.ems.setMatrixAt(counts.e++, mtx);
        l.color = new THREE.Color(1, 0.08, 0.04);
      } else if (l.kind === 'tube') {
        mtx.compose(new THREE.Vector3(l.x, l.y, l.z), q, s); housing.setMatrixAt(counts.h++, mtx);
        mtx.compose(new THREE.Vector3(l.x, l.y - 0.04, l.z), q, s); l.inst = ['t', counts.t]; this.tubes.setMatrixAt(counts.t++, mtx);
        l.color = new THREE.Color(0.86, 0.93, 1.0);
      } else {
        mtx.compose(new THREE.Vector3(l.x, l.y - 0.45, l.z), q, s); l.inst = ['b', counts.b]; this.bulbs.setMatrixAt(counts.b++, mtx);
        mtx.compose(new THREE.Vector3(l.x, l.y - 0.2, l.z), q, s); cord.setMatrixAt(l.id, mtx);
        l.color = new THREE.Color(1.0, 0.72, 0.4);
      }
      mtx.compose(new THREE.Vector3(l.x, l.y - (l.kind === 'bulb' ? 0.45 : 0.06), l.z), new THREE.Quaternion(), new THREE.Vector3(l.kind === 'bulb' ? 0.8 : 1, l.kind === 'bulb' ? 0.85 : 1, l.kind === 'bulb' ? 0.8 : 1)); this.cones.setMatrixAt(l.id, mtx);
      if (l.kind !== 'bulb') cord.setMatrixAt(l.id, zero);
    }
    housing.count = counts.h; this.tubes.count = counts.t; this.bulbs.count = counts.b; this.ems.count = counts.e;
    for (const im of [this.tubes, this.bulbs, this.ems, this.cones]) { im.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(n * 3), 3); im.userData.noShadow = true; im.frustumCulled = false; }
    housing.userData.cast = false; cord.userData.cast = false;
    this.root.add(housing, this.tubes, this.bulbs, this.ems, this.cones, cord);
    this.cones.castShadow = false; this.cones.visible = false;
    // pool of real lights, re-assigned to the nearest lit lamps every few frames
    const k = this.gfx === 'low' ? 4 : this.gfx === 'med' ? 6 : 8;
    this.pool = []; for (let i = 0; i < k; i++) { const p = new THREE.PointLight(0xffffff, 0, 10, 2); this.scene.add(p); this.pool.push(p); }
    this.poolT = 0;
    this.tmpC = new THREE.Color();
  }
  buildDecals() {
    const bm = new THREE.MeshStandardMaterial({ map: this.T.blood, color: 0x4a0606, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 0.25, metalness: 0.1 });
    const sm = new THREE.MeshStandardMaterial({ map: this.T.blood, color: 0x1a140c, transparent: true, opacity: 0.6, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 0.9 });
    const wm = new THREE.MeshStandardMaterial({ map: this.T.smear, color: 0x420505, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 0.3 });
    for (const d of this.m.decals) {
      if (d.type === 'blood' || d.type === 'stain') {
        const p = new THREE.Mesh(new THREE.PlaneGeometry(d.s, d.s), d.type === 'blood' ? bm : sm); p.rotation.set(-Math.PI / 2, 0, d.rot); p.position.set(d.x, this.m.floorH(d.x, d.z) + 0.012, d.z); p.userData.cast = false; this.root.add(p);
      } else {
        const mat = d.type === 'text' ? new THREE.MeshStandardMaterial({ map: textTex(d.text, { bg: 'rgba(0,0,0,0)', fg: '#5a0808', size: 70, border: false, dirty: false, font: '"Special Elite", "Courier New", monospace', weight: 400, w: 768 }), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, roughness: 0.4 }) : wm;
        const w = d.type === 'text' ? 2.1 : d.s * 1.3, h = d.type === 'text' ? 0.35 : d.s * 1.3;
        const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); p.position.set(d.x, d.y + (d.type === 'text' ? 0.2 : -0.1), d.z); p.lookAt(d.x + d.nx, p.position.y, d.z + d.nz); p.userData.cast = false; this.root.add(p);
      }
    }
  }
  buildSigns() {
    this.exitSigns = [];
    const exitMat = new THREE.MeshBasicMaterial({ map: textTex('EXIT', { bg: '#0b3d16', fg: '#d9ffe0', size: 84, dirty: false }), color: new THREE.Color(2.2, 2.2, 2.2) });
    for (const d of this.m.doors) {
      if (!d.label) continue;
      const ax = this.m.axis(d.x, d.z), dirs = ax === 'z' ? [[0, 1], [0, -1]] : [[1, 0], [-1, 0]];
      for (const [dx, dz] of dirs) {
        const nz = this.m.zoneOf(d.x + dx, d.z + dz); if (!nz || nz.id === d.zone) continue;
        if (nz.kind === 'exit') continue;
        const y0 = this.m.zones[d.zone].lv < 0 ? FL1 : FL0;
        const isExit = d.label === 'EXIT';
        const mat = isExit ? exitMat : new THREE.MeshStandardMaterial({ map: textTex(d.label, d.zone >= 0 && this.m.zones[d.zone].lv < 0 ? { bg: '#2a2a25', fg: '#d6c96a' } : {}), roughness: 0.7 });
        const p = new THREE.Mesh(new THREE.PlaneGeometry(isExit ? 0.7 : 1.3, isExit ? 0.26 : 0.32), mat);
        p.position.set((d.x + 0.5 + dx * 0.5) * C + dx * 0.012, y0 + (d.type === 'G' ? 2.85 : 2.55), (d.z + 0.5 + dz * 0.5) * C + dz * 0.012);
        p.lookAt(p.position.x + dx, p.position.y, p.position.z + dz); p.userData.cast = false; this.root.add(p);
        if (isExit) this.exitSigns.push(p);
      }
    }
    // stairwell sign
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.32), new THREE.MeshStandardMaterial({ map: textTex('B1  ↓  BASEMENT', { size: 50 }) }));
    s.position.set(25 * C - 0.012, 2.55, 12.5 * C); s.rotation.y = -Math.PI / 2; this.root.add(s);
  }
  buildExtras() {
    const m = this.m;
    // basement pipes
    const pg = [];
    for (let z = 0; z < H; z++) for (let x = 0; x < W; x++) {
      const t = m.t(x, z); if (t !== FLOOR && t !== PROP) continue; const zz = m.zoneOf(x, z); if (!zz || zz.lv >= 0 || zz.kind === 'exit') continue;
      const ew = m.t(x - 1, z) !== WALL || m.t(x + 1, z) !== WALL, ns = m.t(x, z - 1) !== WALL || m.t(x, z + 1) !== WALL;
      if (m.t(x - 1, z) === WALL && m.t(x + 1, z) === WALL) { const g = new THREE.CylinderGeometry(0.09, 0.09, C, 8); g.rotateX(Math.PI / 2); g.translate((x + 0.5) * C + 0.75, CE1 - 0.2, (z + 0.5) * C); pg.push(g); const g2 = new THREE.CylinderGeometry(0.05, 0.05, C, 6); g2.rotateX(Math.PI / 2); g2.translate((x + 0.5) * C + 0.5, CE1 - 0.14, (z + 0.5) * C); pg.push(g2); }
      else if (m.t(x, z - 1) === WALL && m.t(x, z + 1) === WALL) { const g = new THREE.CylinderGeometry(0.09, 0.09, C, 8); g.rotateZ(Math.PI / 2); g.translate((x + 0.5) * C, CE1 - 0.2, (z + 0.5) * C + 0.75); pg.push(g); const g2 = new THREE.CylinderGeometry(0.05, 0.05, C, 6); g2.rotateZ(Math.PI / 2); g2.translate((x + 0.5) * C, CE1 - 0.14, (z + 0.5) * C + 0.5); pg.push(g2); }
    }
    if (pg.length) { const pm = new THREE.Mesh(mergeGeometries(pg), this.M.rust); pm.userData.cast = false; this.root.add(pm); }
    // flooded tunnel water (drains when the valve is opened)
    const wm = new THREE.MeshStandardMaterial({ color: 0x0c1612, roughness: 0.06, metalness: 0.5, transparent: true, opacity: 0.88 });
    this.water = new THREE.Mesh(new THREE.PlaneGeometry(17 * C, 3 * C), wm); this.water.rotation.x = -Math.PI / 2; this.water.position.set(39 * C, FL1 + 0.55, 32.5 * C); this.water.userData.noShadow = true; this.root.add(this.water);
    this.waterT = FL1 + 0.55;
    // night sky + moonlight above the exits
    const sky = new THREE.MeshBasicMaterial({ color: 0x0a1020, fog: false });
    const s1 = new THREE.Mesh(new THREE.PlaneGeometry(3 * C, 6 * C), sky); s1.rotation.x = Math.PI / 2; s1.position.set(47.5 * C, 6, 11 * C); this.root.add(s1);
    const s2 = new THREE.Mesh(new THREE.PlaneGeometry(5 * C, 3 * C), sky); s2.rotation.x = Math.PI / 2; s2.position.set(45.5 * C, FL1 + 6, 32.5 * C); this.root.add(s2);
    this.moon = []; for (const [x, y, z] of [[47.5 * C, 4.5, 10.5 * C], [45.5 * C, FL1 + 4, 32.5 * C]]) { const l = new THREE.PointLight(0x7f95c8, 6, 16, 1.6); l.position.set(x, y, z); this.scene.add(l); this.moon.push(l); }
    // dust motes lit by flashlights
    const N = this.gfx === 'low' ? 250 : 600, pos = new Float32Array(N * 3); for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 14;
    const dg = new THREE.BufferGeometry(); dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dustU = { uCam: { value: new THREE.Vector3() }, uFP: { value: new THREE.Vector3() }, uFD: { value: new THREE.Vector3(0, 0, -1) }, uOn: { value: 1 }, uT: { value: 0 } };
    const dm = new THREE.ShaderMaterial({
      uniforms: this.dustU, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      vertexShader: `uniform vec3 uCam,uFP,uFD;uniform float uOn,uT;varying float vA;
        void main(){vec3 p=position+vec3(sin(uT*.13+position.y)*.4,mod(-uT*.05+position.x,1.)*.5,cos(uT*.11+position.z)*.4);
          p=uCam+mod(p-uCam+7.,14.)-7.;vec3 d=p-uFP;float l=length(d);float c=dot(d/l,uFD);
          vA=uOn*smoothstep(.86,.97,c)*clamp(1.-l/13.,0.,1.)*.9+.012;
          vec4 mv=modelViewMatrix*vec4(p,1.);gl_PointSize=clamp(28./-mv.z,1.,6.);gl_Position=projectionMatrix*mv;}`,
      fragmentShader: `varying float vA;void main(){vec2 c=gl_PointCoord-.5;float a=smoothstep(.5,.0,length(c));gl_FragColor=vec4(vec3(1.,.95,.85)*vA*a,1.);}`,
    });
    this.dust = new THREE.Points(dg, dm); this.dust.frustumCulled = false; this.scene.add(this.dust);
  }
  // ------------------------------------------------------------ per-frame
  // s: {t, dt, cam, power, powerT, blackout, mpos, flash:{on,pos,dir}}
  update(s) {
    const L = this.m.lamps, dt = s.dt;
    // lamps
    const md = s.mpos;
    for (const l of L) {
      let k = 0;
      const lit = s.power && !s.blackout;
      if (l.emergency) k = lit ? 0.0 : 0.55 + 0.35 * Math.sin(s.t * 2.2 + l.ph);
      else if (l.broken) k = lit && Math.sin(s.t * 13 + l.ph * 7) > 0.995 && Math.random() < 0.6 ? 1.2 : 0;
      else if (lit) {
        const since = s.powerT - l.delay;
        if (since < 0) k = 0;
        else if (since < 0.9) k = Math.random() < 0.5 ? 1 : 0.05;
        else {
          k = 1;
          if (l.flicky && Math.sin(s.t * 0.7 + l.ph) > 0.6) k = Math.random() < 0.82 ? 1 : 0.1;
          if (md) { const d = Math.hypot(md.x - l.x, md.z - l.z); if (d < 10) { const p = (10 - d) / 10; if (Math.random() < p * 0.55) k = 0.02; } }
        }
      }
      l.k = (l.k || 0) + (k - (l.k || 0)) * Math.min(1, dt * 40);
      const [kind, idx] = l.inst, im = kind === 't' ? this.tubes : kind === 'b' ? this.bulbs : this.ems;
      const b = l.k * (kind === 'e' ? 4 : 5);
      this.tmpC.setRGB(l.color.r * b, l.color.g * b, l.color.b * b); im.setColorAt(idx, this.tmpC);
      const cb = l.k * (kind === 'e' ? 0.03 : 0.045);
      this.tmpC.setRGB(l.color.r * cb, l.color.g * cb, l.color.b * cb); this.cones.setColorAt(l.id, this.tmpC);
    }
    this.tubes.instanceColor.needsUpdate = this.bulbs.instanceColor.needsUpdate = this.ems.instanceColor.needsUpdate = this.cones.instanceColor.needsUpdate = true;
    // light pool
    this.poolT -= dt;
    if (this.poolT <= 0) {
      this.poolT = 0.2;
      const c = s.cam, cand = L.filter(l => (l.k || 0) > 0.05 && Math.abs(l.y - c.y) < 4.5).map(l => [l, (l.x - c.x) ** 2 + (l.z - c.z) ** 2]).sort((a, b) => a[1] - b[1]).slice(0, this.pool.length);
      this.pool.forEach((p, i) => { p.userData.l = cand[i] ? cand[i][0] : null; });
    }
    for (const p of this.pool) {
      const l = p.userData.l;
      if (!l) { p.intensity = 0; continue; }
      p.position.set(l.x, l.y - 0.25, l.z); p.color.copy(l.color);
      p.intensity = (l.k || 0) * (l.emergency ? 2.2 : l.kind === 'bulb' ? 4.5 : 5.5); p.distance = l.emergency ? 7 : 11;
    }
    // doors
    for (const o of this.doorObjs) {
      o.a += (o.tgt - o.a) * Math.min(1, dt * (o.type === 'G' ? 0.9 : 6));
      if (o.piv) o.piv.rotation.y = o.a * o.swing * (Math.PI / 2) * 0.95;
      if (o.l) { o.l.position.x = -o.pw / 4 - o.a * o.pw * 0.48; o.r.position.x = o.pw / 4 + o.a * o.pw * 0.48; }
      if (o.sh) { o.sh.position.y = o.dh / 2 + o.a * (o.dh - 0.25); }
      if (o.chain) o.chain.visible = o.tgt < 0.5;
    }
    for (const o of this.secretObjs) { o.a += (o.tgt - o.a) * Math.min(1, dt * 1.5); o.b.position.y = o.base - o.a * (o.h - 0.02); }
    for (const l of Object.values(this.lockers)) { l.a += (l.tgt - l.a) * Math.min(1, dt * 9); l.door.rotation.y = -l.a * 1.6; }
    // items
    for (const o of this.itemObjs) { if (o.gone) continue; o.sp.material.opacity = 0.35 + 0.25 * Math.sin(s.t * 3 + o.it.id); }
    // misc
    for (const d of this.leds) d.m.color.setRGB(s.power ? (Math.sin(s.t * 3 + d.ph) > 0 ? 0.2 : 2.5) : 0, s.power ? 2.5 : 0, 0);
    if (this.valve) this.valve.wheel.rotation.z += (this.valve.a - this.valve.wheel.rotation.z) * Math.min(1, dt * 2);
    this.water.position.y += (this.waterT - this.water.position.y) * Math.min(1, dt * 0.25);
    this.water.material.roughness = 0.05 + Math.sin(s.t) * 0.01;
    this.dustU.uCam.value.copy(s.cam); this.dustU.uT.value = s.t;
    if (s.flash) { this.dustU.uFP.value.copy(s.flash.pos); this.dustU.uFD.value.copy(s.flash.dir); this.dustU.uOn.value = s.flash.on ? 1 : 0; }
  }
  setPower(on) {
    // lamps come on in a wave spreading from the electrical room
    const ex = 30.5 * C, ez = 25 * C;
    for (const l of this.m.lamps) l.delay = Math.hypot(l.x - ex, l.z - ez) * 0.035 + Math.random() * 0.4;
    for (const s of this.screens) s.mat.color.setRGB(on ? 0.2 : 0.01, on ? 1.4 : 0.01, on ? 0.5 : 0.01);
    for (const o of this.doorObjs) if (o.keypad) o.keypad.material.color.setRGB(on ? 0.3 : 0.02, on ? 2 : 0.02, on ? 0.6 : 0.02);
  }
  setScreens(code) {
    if (!this.screens.length) return;
    const tex = textTex('EXIT CODE ' + code, { bg: '#021a08', fg: '#6dff94', size: 54, font: '"Share Tech Mono", monospace', weight: 400, border: false, dirty: false });
    const s = this.screens[1] || this.screens[0]; s.mat.map = tex; s.mat.color.setRGB(1.6, 1.6, 1.6); s.mat.needsUpdate = true;
  }
  dispose() {
    this.scene.remove(this.root); this.pool.forEach(p => this.scene.remove(p)); this.moon.forEach(p => this.scene.remove(p)); this.scene.remove(this.dust);
    this.root.traverse(o => { if (o.geometry) o.geometry.dispose(); });
  }
}
