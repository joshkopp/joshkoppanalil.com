// THE LAST SHIFT — the creature: procedural model + host-side AI.
import * as THREE from 'three';
import { C, DOOR } from './map.js';

let skinTex = null;
function skin() {
  if (skinTex) return skinTex;
  const c = document.createElement('canvas'); c.width = c.height = 256; const x = c.getContext('2d');
  const im = x.createImageData(256, 256);
  for (let i = 0; i < im.data.length; i += 4) { const v = 90 + Math.random() * 120; im.data[i] = im.data[i + 1] = im.data[i + 2] = v; im.data[i + 3] = 255; }
  x.putImageData(im, 0, 0);
  for (let i = 0; i < 60; i++) { x.strokeStyle = `rgba(0,0,0,${0.2 + Math.random() * 0.4})`; x.lineWidth = 1 + Math.random() * 3; x.beginPath(); let px = Math.random() * 256, py = Math.random() * 256; x.moveTo(px, py); for (let k = 0; k < 6; k++) { px += (Math.random() - 0.5) * 40; py += Math.random() * 30; x.lineTo(px, py); } x.stroke(); }
  skinTex = new THREE.CanvasTexture(c); skinTex.wrapS = skinTex.wrapT = THREE.RepeatWrapping;
  return skinTex;
}

export function makeMonsterModel() {
  const mSkin = new THREE.MeshStandardMaterial({ color: 0x100b09, roughness: 0.5, metalness: 0.0 });
  const mDark = new THREE.MeshStandardMaterial({ color: 0x120c0a, roughness: 0.4 });
  const mEye = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xfff2d0, emissiveIntensity: 5 });
  const mTooth = new THREE.MeshStandardMaterial({ color: 0xd8cfb0, roughness: 0.3 });
  const cap = (r, l, m = mSkin) => { const g = new THREE.CapsuleGeometry(r, l, 4, 10); g.translate(0, -l / 2 - r * 0.6, 0); const me = new THREE.Mesh(g, m); me.castShadow = true; return me; };
  const root = new THREE.Group();
  const hips = new THREE.Group(); hips.position.y = 1.18; root.add(hips);
  const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 8), mSkin); pelvis.scale.set(1.2, 0.7, 0.8); pelvis.castShadow = true; hips.add(pelvis);
  const spine = new THREE.Group(); hips.add(spine);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.6, 4, 12), mSkin); torso.position.y = 0.42; torso.scale.set(1.0, 1, 0.72); torso.castShadow = true; spine.add(torso);
  // ribs
  for (let i = 0; i < 0; i++) { const rib = new THREE.Mesh(new THREE.TorusGeometry(0.17 - i * 0.008, 0.016, 5, 14, Math.PI), mSkin); rib.rotation.set(Math.PI / 2, 0, Math.PI / 2); rib.position.set(0, 0.36 + i * 0.07, 0.04); rib.scale.set(1, 1.15, 1); spine.add(rib); }
  const chest = new THREE.Group(); chest.position.y = 0.78; spine.add(chest);
  const neck = new THREE.Group(); neck.position.y = 0.14; chest.add(neck);
  const neckM = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, 0.3, 8), mSkin); neckM.position.y = 0.14; neck.add(neckM);
  const head = new THREE.Group(); head.position.y = 0.3; neck.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 16, 12), mSkin); skull.scale.set(0.85, 1.35, 1.05); skull.position.set(0, 0.06, 0); skull.castShadow = true; head.add(skull);
  const jaw = new THREE.Group(); jaw.position.set(0, -0.06, 0.06); head.add(jaw);
  const jawM = new THREE.Mesh(new THREE.SphereGeometry(0.11, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), mSkin); jawM.scale.set(0.9, 1.6, 1.3); jawM.position.y = -0.02; jaw.add(jawM);
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), mDark); mouth.scale.set(0.8, 1.5, 0.5); mouth.position.set(0, -0.08, 0.1); head.add(mouth);
  for (let i = 0; i < 9; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(0.009, 0.05, 4), mTooth); const a = (i / 8 - 0.5) * 1.6; t.position.set(Math.sin(a) * 0.06, -0.03, 0.12 + Math.cos(a) * 0.01); t.rotation.x = Math.PI; head.add(t); const b = t.clone(); b.position.y = -0.13; b.rotation.x = 0; head.add(b); }
  const eyes = [];
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.024, 8, 6), mEye); e.position.set(s * 0.055, 0.1, 0.145); head.add(e); eyes.push(e); const sock = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), mDark); sock.position.set(s * 0.055, 0.1, 0.128); head.add(sock); }
  const limb = (parent, x, y, z, segs) => { // segs [[r,len],...]
    const pivots = []; let p = parent, py = 0;
    segs.forEach(([r, l], i) => { const g = new THREE.Group(); if (i === 0) g.position.set(x, y, z); else g.position.y = -segs[i - 1][1] - segs[i - 1][0] * 1.2; p.add(g); g.add(cap(r, l)); pivots.push(g); p = g; });
    return pivots;
  };
  const armL = limb(chest, -0.27, 0.05, 0, [[0.065, 0.62], [0.052, 0.66], [0.034, 0.16]]);
  const armR = limb(chest, 0.27, 0.05, 0, [[0.065, 0.62], [0.052, 0.66], [0.034, 0.16]]);
  for (const arm of [armL, armR]) { const hand = arm[2]; for (let f = 0; f < 4; f++) { const fg = new THREE.Group(); fg.position.set((f - 1.5) * 0.025, -0.2, 0); fg.rotation.z = (f - 1.5) * 0.12; fg.add(cap(0.011, 0.22, mSkin)); hand.add(fg); } }
  const legL = limb(hips, -0.13, -0.05, 0, [[0.085, 0.5], [0.062, 0.56], [0.045, 0.12]]);
  const legR = limb(hips, 0.13, -0.05, 0, [[0.085, 0.5], [0.062, 0.56], [0.045, 0.12]]);
  for (const leg of [legL, legR]) { const foot = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.05, 0.26), mSkin); foot.position.set(0, -0.2, 0.08); foot.castShadow = true; leg[2].add(foot); }
  root.traverse(o => { if (o.isMesh) o.frustumCulled = false; });

  let ph = 0, twT = 0, hx = 0, hy = 0, hz = 0, thx = 0, thy = 0, thz = 0, lean = 0;
  const update = (dt, speed, mode, t) => {
    ph += dt * (1.2 + speed * 1.15);
    const k = Math.min(1, speed / 1.5), run = mode === 'chase' ? 1 : 0;
    lean += ((run ? 0.8 : 0.5) - lean) * Math.min(1, dt * 3);
    spine.rotation.x = lean + Math.sin(ph * 2) * 0.04 * k;
    hips.position.y = 1.12 - Math.abs(Math.sin(ph)) * 0.06 * k - run * 0.12;
    legL[0].rotation.x = Math.sin(ph) * 0.65 * k - run * 0.25; legR[0].rotation.x = -Math.sin(ph) * 0.65 * k - run * 0.25;
    legL[1].rotation.x = Math.max(0, -Math.sin(ph - 0.6)) * 1.1 * k + 0.1; legR[1].rotation.x = Math.max(0, Math.sin(ph - 0.6)) * 1.1 * k + 0.1;
    const reach = run ? -1.25 : -0.15;
    armL[0].rotation.x = reach - Math.sin(ph) * 0.5 * k; armR[0].rotation.x = reach + Math.sin(ph) * 0.5 * k;
    armL[0].rotation.z = -0.15 - (run ? 0.25 : 0); armR[0].rotation.z = 0.15 + (run ? 0.25 : 0);
    armL[1].rotation.x = -0.35 - Math.sin(t * 3.1) * 0.05; armR[1].rotation.x = -0.35 - Math.sin(t * 2.7) * 0.05;
    // twitchy head
    twT -= dt;
    if (twT <= 0) { twT = 0.25 + Math.random() * (run ? 0.6 : 1.8); thx = (Math.random() - 0.5) * 0.6 - lean * 0.8; thy = (Math.random() - 0.5) * 1.1; thz = (Math.random() - 0.5) * 0.9; }
    const s = Math.min(1, dt * 22); hx += (thx - hx) * s; hy += (thy - hy) * s; hz += (thz - hz) * s;
    head.rotation.set(hx, hy, hz);
    jaw.rotation.x = 0.15 + (run ? 0.35 + Math.sin(t * 17) * 0.1 : Math.max(0, Math.sin(t * 0.9)) * 0.25);
    const br = 1 + Math.sin(t * (run ? 7 : 2.2)) * 0.035; torso.scale.set(1.05 * br, 1, 0.7 * br);
  };
  const setEyes = v => { mEye.emissiveIntensity = v; };
  return { group: root, update, setEyes, head };
}

// ------------------------------------------------------------------ AI (runs only on the host)
export class MonsterAI {
  constructor(map, R, from) {
    this.m = map; this.R = R;
    const s = from || map.monsterSpawn;
    this.x = s.x; this.z = s.z; this.yaw = s.yaw || 0;
    this.st = 'roam'; this.path = null; this.pi = 0; this.repath = 0;
    this.spd = 0; this.target = null; this.last = null; this.wait = 1.5; this.lostT = 0; this.stateT = 0;
    this.farT = 0; this.percT = 0; this.seenAt = {}; this.noiseLvl = 0; this.ignore = {};
  }
  get y() { return this.m.floorH(this.x, this.z); }
  snapshot() { return { x: +this.x.toFixed(2), z: +this.z.toFixed(2), yw: +this.yaw.toFixed(2), st: this.st, sp: +this.spd.toFixed(2) }; }
  goCell(cx, cz) {
    const [sx, sz] = this.m.cell(this.x, this.z);
    this.path = this.m.path(sx, sz, cx, cz); this.pi = 0;
    return !!this.path;
  }
  goWorld(wx, wz) { const [cx, cz] = this.m.cell(wx, wz); return this.goCell(cx, cz); }
  setState(st) { if (this.st !== st) { this.st = st; this.stateT = 0; } }

  // players: [{id,x,y,z,yaw,pitch,alive,hidden,hideX,hideZ,noise,flash,crouch,escaped}]
  update(dt, players, ctx) {
    const m = this.m, ev = [];
    const aggr = ctx.aggr;
    this.stateT += dt; this.repath -= dt; this.percT -= dt;
    const alive = players.filter(p => p.alive && !p.escaped);
    const my = this.y;

    // ---------------- perception ----------------
    if (this.percT <= 0) {
      this.percT = 0.12;
      let best = null, bd = 1e9;
      for (const p of alive) {
        if (this.ignore[p.id] > ctx.time) continue;
        const dx = p.x - this.x, dz = p.z - this.z, d = Math.hypot(dx, dz);
        if (Math.abs(p.y - my) > 2.2 && d > 6) continue;
        const los = m.los(this.x, this.z, p.x, p.z);
        if (p.hidden) {
          // saw them climb in?
          if (this.target === p.id && this.seenAt[p.id] && ctx.time - this.seenAt[p.id] < 1.4 && d < 14) { this.setState('grab'); this.grab = { id: p.id, x: p.hideX, z: p.hideZ }; this.goWorld(p.hideX, p.hideZ); }
          continue;
        }
        let range = 13 + aggr * 3;
        if (p.flash) range += 9;
        if (p.crouch && !p.flash) range *= 0.55;
        const fwd = [Math.sin(this.yaw), Math.cos(this.yaw)];
        const dot = d > 0.01 ? (dx * fwd[0] + dz * fwd[1]) / d : 1;
        let sees = los && d < range && (dot > 0.25 || d < 3.5);
        // a flashlight pointed straight at it gives you away
        if (!sees && los && p.flash && d < 26) {
          const pdx = -dx / d, pdz = -dz / d, pf = [Math.sin(p.yaw) * -1, Math.cos(p.yaw) * -1];
          if (pdx * pf[0] + pdz * pf[1] > 0.93) sees = true;
        }
        if (sees) { this.seenAt[p.id] = ctx.time; if (d < bd) { bd = d; best = p; } }
        // hearing
        const hr = p.noise * (13 + 6 * aggr) * (los ? 1 : 0.55);
        if (!sees && hr > d && (this.st === 'roam' || this.st === 'investigate' || this.st === 'search') && p.noise >= this.noiseLvl * 0.8) {
          this.noiseLvl = p.noise;
          const off = los ? 0 : 2.5;
          this.inv = { x: p.x + (this.R() - 0.5) * off, z: p.z + (this.R() - 0.5) * off };
          if (this.goWorld(this.inv.x, this.inv.z)) { if (this.st !== 'investigate') ev.push({ k: 'growl' }); this.setState('investigate'); this.wait = 0; }
        }
      }
      if (best && this.st !== 'grab' && this.st !== 'feed') {
        if (this.st !== 'chase') ev.push({ k: 'screech' });
        this.setState('chase'); this.target = best.id; this.last = { x: best.x, z: best.z }; this.lostT = 0; this.wait = 0;
      }
      this.noiseLvl *= 0.92;
    }

    // ---------------- behaviour ----------------
    let speed = 0, goal = null;
    const tp = this.target ? players.find(p => p.id === this.target) : null;
    switch (this.st) {
      case 'chase': {
        speed = 4.15 + 0.55 * (aggr - 1);
        const vis = tp && !tp.hidden && tp.alive && ctx.time - (this.seenAt[tp.id] || -9) < 0.3;
        if (vis) { this.last = { x: tp.x, z: tp.z }; this.lostT = 0; } else this.lostT += dt;
        if (!tp || !tp.alive || tp.escaped) { this.setState('search'); this.target = null; break; }
        const d = Math.hypot(tp.x - this.x, tp.z - this.z);
        if (vis && d < 1.25 && !tp.hidden) { ev.push({ k: 'catch', id: tp.id }); this.ignore[tp.id] = ctx.time + 25; this.target = null; this.setState('feed'); this.wait = 2.6; break; }
        if (vis && d < 5 && m.los(this.x, this.z, tp.x, tp.z)) { goal = { x: tp.x, z: tp.z }; this.path = null; }
        else if (this.repath <= 0) { this.repath = 0.35; this.goWorld(this.last.x, this.last.z); }
        if (this.lostT > 3.5 + aggr) { this.setState('search'); this.goWorld(this.last.x, this.last.z); this.target = null; }
        break;
      }
      case 'grab': {
        speed = 4.4 + 0.4 * (aggr - 1);
        const p = players.find(q => q.id === this.grab.id);
        if (!p || !p.alive || !p.hidden) { this.setState('search'); break; }
        if (Math.hypot(this.grab.x - this.x, this.grab.z - this.z) < 1.7) { ev.push({ k: 'catch', id: p.id, locker: true }); this.ignore[p.id] = ctx.time + 25; this.target = null; this.setState('feed'); this.wait = 3.2; }
        break;
      }
      case 'feed': { speed = 0; this.wait -= dt; if (this.wait <= 0) { this.setState('roam'); this.path = null; this.wait = 0.5; } break; }
      case 'investigate': {
        speed = 2.3 + 0.45 * (aggr - 1);
        if (!this.path || this.pi >= this.path.length) { speed = 0; this.wait += dt; if (this.wait > 2.5) { this.setState('search'); this.last = this.inv; this.path = null; } }
        break;
      }
      case 'search': {
        speed = 1.9 + 0.3 * (aggr - 1);
        if (!this.path || this.pi >= this.path.length) {
          const c = m.randomNavCell(this.R, this.last || { x: this.x, z: this.z }, 2, 9);
          if (c) this.goCell(c[0], c[1]);
        }
        if (this.stateT > 9) { this.setState('roam'); this.path = null; }
        break;
      }
      default: { // roam
        speed = 1.45 + 0.4 * (aggr - 1);
        if (!this.path || this.pi >= this.path.length) {
          speed = 0; this.wait -= dt;
          if (this.wait <= 0) {
            this.wait = 1 + this.R() * 2.5;
            const anchor = alive.length && this.R() < 0.55 + 0.15 * aggr ? alive[Math.floor(this.R() * alive.length)] : null;
            const c = anchor ? m.randomNavCell(this.R, anchor, 6, 22) : m.randomNavCell(this.R);
            if (c) this.goCell(c[0], c[1]);
          }
        }
      }
    }

    // stalker relocation when everyone is far away for a while
    const nearest = alive.reduce((a, p) => Math.min(a, Math.hypot(p.x - this.x, p.z - this.z)), 1e9);
    if (this.st === 'roam' && nearest > 34) this.farT += dt; else this.farT = 0;
    if (this.farT > 38 / aggr && alive.length) {
      const a = alive[Math.floor(this.R() * alive.length)];
      for (let i = 0; i < 40; i++) {
        const c = m.randomNavCell(this.R, a, 16, 28); if (!c) continue;
        const wx = (c[0] + 0.5) * C, wz = (c[1] + 0.5) * C;
        if (alive.some(p => m.los(p.x, p.z, wx, wz) || Math.hypot(p.x - wx, p.z - wz) < 14)) continue;
        this.x = wx; this.z = wz; this.path = null; this.farT = 0; ev.push({ k: 'relocate' }); break;
      }
    }

    // ---------------- movement ----------------
    if (!goal && this.path && this.pi < this.path.length) {
      const [cx, cz] = this.path[this.pi];
      // closed door ahead → shove it open
      if (m.t(cx, cz) === DOOR) {
        const id = m.doorIdx[cz * m.W + cx];
        if (!m.doorOpen[id]) { ev.push({ k: 'door', id }); this.wait = 0.45; speed = 0; this.doorPause = 0.45; }
      }
      goal = { x: (cx + 0.5) * C, z: (cz + 0.5) * C };
      if (Math.hypot(goal.x - this.x, goal.z - this.z) < 0.35) this.pi++;
    }
    if (this.doorPause > 0) { this.doorPause -= dt; speed = 0; }
    if (goal && speed > 0) {
      const dx = goal.x - this.x, dz = goal.z - this.z, d = Math.hypot(dx, dz);
      if (d > 0.01) {
        const step = Math.min(d, speed * dt);
        this.x += dx / d * step; this.z += dz / d * step;
        const cp = { x: this.x, z: this.z }; m.collide(cp, 0.3); this.x = cp.x; this.z = cp.z;
        const ty = Math.atan2(dx, dz); let dy = ty - this.yaw; while (dy > Math.PI) dy -= 6.283; while (dy < -Math.PI) dy += 6.283;
        this.yaw += dy * Math.min(1, dt * 7);
      }
      this.spd += (speed - this.spd) * Math.min(1, dt * 5);
    } else this.spd += (0 - this.spd) * Math.min(1, dt * 6);
    if (this.st === 'feed' || (this.st === 'investigate' && speed === 0)) this.yaw += Math.sin(ctx.time * 1.7) * dt * 0.8;
    return ev;
  }
}
