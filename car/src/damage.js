// Realistic contact: world-space impulses between cars, spins, wing/wheel loss, flying debris and DNFs.
import * as THREE from 'three';

const G = 9.81;
export class Debris {
  constructor(scene) { this.scene = scene; this.list = []; }
  clear() { this.list.forEach(d => this.scene.remove(d.obj)); this.list = []; }
  // throw a copy of a car part (keeps world transform) with velocity + tumble
  launch(src, vx, vy, vz, spin = 6) {
    src.updateMatrixWorld(true); const obj = src.clone(true); src.matrixWorld.decompose(obj.position, obj.quaternion, obj.scale);
    obj.traverse(o => { o.castShadow = true; }); this.scene.add(obj);
    const w = new THREE.Vector3((Math.random() - .5) * spin, (Math.random() - .5) * spin, (Math.random() - .5) * spin);
    this.list.push({ obj, v: new THREE.Vector3(vx, vy, vz), w, rest: 0, life: 0 });
    if (this.list.length > 40) { const d = this.list.shift(); this.scene.remove(d.obj); }
  }
  step(h) {
    const q = new THREE.Quaternion(), e = new THREE.Euler();
    for (const d of this.list) { if (d.rest > 1) continue; d.life += h;
      d.v.y -= G * h; d.obj.position.addScaledVector(d.v, h);
      e.set(d.w.x * h, d.w.y * h, d.w.z * h); q.setFromEuler(e); d.obj.quaternion.premultiply(q);
      if (d.obj.position.y < .12) { d.obj.position.y = .12; if (Math.abs(d.v.y) > 1.2) { d.v.y *= -.32; d.v.x *= .7; d.v.z *= .7; d.w.multiplyScalar(.6); }
        else { d.v.y = 0; d.v.x *= Math.exp(-h * 3); d.v.z *= Math.exp(-h * 3); d.w.multiplyScalar(Math.exp(-h * 4)); if (d.v.lengthSq() < .05) d.rest += h; } } }
  }
}

// velocity of a car in world space (heading speed + any external kick)
export const velOf = c => [Math.sin(c.yaw) * c.v + (c.kx || 0), Math.cos(c.yaw) * c.v + (c.kz || 0)];

/* Resolve a hard hit between A and B. Returns the impact severity (m/s closing speed). */
export function impact(A, B, hooks) {
  let nx = B.x - A.x, nz = B.z - A.z; const d = Math.hypot(nx, nz) || 1; nx /= d; nz /= d;
  const [ax, az] = velOf(A), [bx, bz] = velOf(B), vc = (ax - bx) * nx + (az - bz) * nz;
  if (vc <= 0) return 0;
  const j = vc * .62; // equal masses, some energy into crumpling
  push(A, -nx * j, -nz * j, B, hooks); push(B, nx * j, nz * j, A, hooks);
  return vc;
}
function push(c, ix, iz, other, hooks) {
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), along = ix * fx + iz * fz, side = ix * fz - iz * fx;
  // where on the car the hit landed: + nose, - gearbox
  const ox = other.x - c.x, oz = other.z - c.z, at = ox * fx + oz * fz, sideAt = ox * fz - oz * fx, mag = Math.hypot(ix, iz);
  if (c.wr) { c.wr.vx += ix; c.wr.vz += iz; c.wr.w += -side * at * .35; return; }
  c.v += along; // longitudinal part changes speed
  c.kx = (c.kx || 0) + fz * side; c.kz = (c.kz || 0) - fx * side; // lateral part becomes a sideways shove
  c.spin = (c.spin || 0) + clamp(-side * at * .32, -6, 6); // off-centre hits rotate the car
  hooks.damage(c, mag, at, sideAt);
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

/* turn a car into a free-moving wreck */
export function wreck(c, spin) {
  if (c.wr) return; const [vx, vz] = velOf(c);
  c.wr = { vx, vz, w: spin ?? (c.spin || 0) + (Math.random() - .5) * 4, t: 0, roll: (Math.random() - .5) * .25 };
  c.kx = c.kz = 0; c.spin = 0;
}
export function wreckStep(c, h, track) {
  const w = c.wr; w.t += h;
  const sp = Math.hypot(w.vx, w.vz), fr = (c.offTrack ? 13 : 8) * h; // tyres scrubbing sideways
  if (sp > fr) { w.vx -= w.vx / sp * fr; w.vz -= w.vz / sp * fr; } else { w.vx = 0; w.vz = 0; }
  w.w *= Math.exp(-h * 1.6);
  c.x += w.vx * h; c.z += w.vz * h; c.yaw += w.w * h; c.v = Math.hypot(w.vx, w.vz) * .2;
  const loc = track.locate(c.x, c.z, c.idx < 0 ? 0 : c.idx); c.idx = loc.i; c.s = loc.s; c.lat = loc.lat;
  const wl = track.wall(loc.i) - 1.05; c.offTrack = Math.abs(c.lat) > track.W / 2 + .5;
  if (Math.abs(c.lat) > wl) { const nx = track.nx(loc.i), nz = track.nz(loc.i), sg = Math.sign(c.lat), pen = Math.abs(c.lat) - wl; c.x -= nx * sg * pen; c.z -= nz * sg * pen;
    const vn = (w.vx * nx + w.vz * nz) * sg; if (vn > 0) { w.vx -= nx * sg * vn * 1.4; w.vz -= nz * sg * vn * 1.4; w.w *= -.5; } }
  return sp;
}
