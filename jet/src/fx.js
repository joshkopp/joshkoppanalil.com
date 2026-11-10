// GPU-friendly particles (one draw call per system), tracers, explosions, sound.
import * as THREE from 'three';

let soft = null;
export function softTex() { if (soft) return soft; const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(.4, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); soft = new THREE.CanvasTexture(c); return soft; }

export class Particles {
  constructor(max, additive) {
    this.max = max; this.n = 0; this.i = 0; this.density = 1; this.hi = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.life = new Float32Array(max); this.maxL = new Float32Array(max); this.grow = new Float32Array(max); this.s0 = new Float32Array(max); this.a0 = new Float32Array(max); this.drag = new Float32Array(max); this.rise = new Float32Array(max); this.fade = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    const m = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: { map: { value: softTex() }, scale: { value: 800 }, fogColor: { value: new THREE.Color() }, fogNear: { value: 1 }, fogFar: { value: 1 } },
      vertexShader: `attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; varying float vD; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(520., size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }`,
      fragmentShader: `uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear, fogFar; varying float vA; varying vec3 vC; varying float vD;
        void main(){ if(vA<.004) discard; vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(fogNear,fogFar,vD); vec3 c=mix(vC,fogColor,${additive ? '0.' : 'f'}); gl_FragColor=vec4(c,t.a*vA*${additive ? '(1.-f)' : '1.'}); }` });
    this.points = new THREE.Points(g, m); this.points.frustumCulled = false; this.g = g; this.mat = m;
  }
  emit(x, y, z, o = {}) {
    if (this.density < 1 && !o.must && Math.random() > this.density) return;
    const k = this.i; if (k + 1 > this.hi) this.hi = k + 1; this.i = (this.i + 1) % this.max; if (this.n < this.max) this.n++;
    this.pos[k * 3] = x; this.pos[k * 3 + 1] = y; this.pos[k * 3 + 2] = z;
    const sp = o.spread || 0; this.vel[k * 3] = (o.vx || 0) + (Math.random() - .5) * sp; this.vel[k * 3 + 1] = (o.vy || 0) + (Math.random() - .5) * sp; this.vel[k * 3 + 2] = (o.vz || 0) + (Math.random() - .5) * sp;
    const c = o.color || [1, 1, 1]; this.col[k * 3] = c[0]; this.col[k * 3 + 1] = c[1]; this.col[k * 3 + 2] = c[2];
    this.size[k] = this.s0[k] = o.size || 4; this.grow[k] = o.grow ?? 1.5; this.a0[k] = o.alpha ?? .6; this.alpha[k] = this.a0[k];
    this.life[k] = this.maxL[k] = o.life || 2; this.drag[k] = o.drag ?? .5; this.rise[k] = o.rise ?? 0; this.fade[k] = o.fadeIn ? 1 : 0;
  }
  update(dt, fog, camH) {
    let live = 0;
    for (let k = 0; k < this.hi; k++) {
      if (this.life[k] <= 0) { this.alpha[k] = 0; continue; } live++;
      this.life[k] -= dt; const t = 1 - this.life[k] / this.maxL[k], d = Math.exp(-this.drag[k] * dt);
      this.vel[k * 3] *= d; this.vel[k * 3 + 1] = this.vel[k * 3 + 1] * d + this.rise[k] * dt; this.vel[k * 3 + 2] *= d;
      this.pos[k * 3] += this.vel[k * 3] * dt; this.pos[k * 3 + 1] += this.vel[k * 3 + 1] * dt; this.pos[k * 3 + 2] += this.vel[k * 3 + 2] * dt;
      this.size[k] = this.s0[k] * Math.max(.05, 1 + this.grow[k] * (this.maxL[k] - this.life[k])); this.alpha[k] = this.a0[k] * (1 - t) * (this.fade[k] ? Math.min(1, t * 8) : 1);
    }
    const a = this.g.attributes, n = this.hi; this.g.setDrawRange(0, n);
    for (const at of [a.position, a.size, a.alpha, a.color]) { at.clearUpdateRanges(); at.addUpdateRange(0, n * at.itemSize); at.needsUpdate = true; }
    if (!live) { this.hi = 0; this.i = 0; }
    if (fog) { this.mat.uniforms.fogColor.value.copy(fog.color); this.mat.uniforms.fogNear.value = fog.near; this.mat.uniforms.fogFar.value = fog.far; }
    this.mat.uniforms.scale.value = camH * .5;
  }
  clear() { this.life.fill(0); this.alpha.fill(0); }
}

export class Tracers {
  constructor(max = 400) {
    this.max = max; const g = new THREE.BoxGeometry(.35, .35, 9);
    this.mesh = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ color: '#ffd27a', transparent: true, opacity: .95, blending: THREE.AdditiveBlending, depthWrite: false }), max);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage); this.mesh.frustumCulled = false; this.list = []; this.o = new THREE.Object3D();
    this.mesh.setColorAt(0, new THREE.Color('#fff')); this.mesh.count = 0;
  }
  add(p, v, owner, dmg, color) { if (this.list.length >= this.max) this.list.shift(); this.list.push({ p: p.clone(), v: v.clone(), life: 1.6, owner, dmg, color }); }
  draw() { const o = this.o; let k = 0; for (const b of this.list) { o.position.copy(b.p); o.lookAt(b.p.x + b.v.x, b.p.y + b.v.y, b.p.z + b.v.z); o.updateMatrix(); this.mesh.setMatrixAt(k, o.matrix); this.mesh.setColorAt(k, b.color); k++; }
    this.mesh.count = k; this.mesh.instanceMatrix.needsUpdate = true; if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true; }
}

export const Sound = (() => {
  let ac, master, eng, wind, on = true, noise;
  try { on = localStorage.getItem('jkstrike-sound') !== '0'; } catch (e) {}
  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return; ac = new C(); master = ac.createGain(); master.gain.value = on ? .6 : 0;
    const comp = ac.createDynamicsCompressor(); master.connect(comp); comp.connect(ac.destination);
    noise = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const loop = (type, f, q) => { const s = ac.createBufferSource(); s.buffer = noise; s.loop = true; const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; const g = ac.createGain(); g.gain.value = 0; s.connect(b); b.connect(g); g.connect(master); s.start(); return { g, b }; };
    eng = loop('lowpass', 400, .8); wind = loop('bandpass', 900, .5);
    const o = ac.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 55; const og = ac.createGain(); og.gain.value = 0; const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 220; o.connect(lp); lp.connect(og); og.connect(master); o.start(); eng.o = o; eng.og = og;
    const w = ac.createOscillator(); w.type = 'sine'; w.frequency.value = 1200; const wg = ac.createGain(); wg.gain.value = 0; w.connect(wg); wg.connect(master); w.start(); eng.whine = w; eng.wg = wg;
  }
  const t = () => ac.currentTime;
  function engine(thr, ab, speed, inside) { if (!eng) return; const k = inside ? .55 : 1;
    eng.g.gain.setTargetAtTime((.12 + thr * .2 + (ab ? .25 : 0)) * k, t(), .1); eng.b.frequency.setTargetAtTime(250 + thr * 600 + (ab ? 900 : 0), t(), .15);
    eng.og.gain.setTargetAtTime((.05 + thr * .05) * k, t(), .1); eng.o.frequency.setTargetAtTime(45 + thr * 40, t(), .2);
    eng.wg.gain.setTargetAtTime(.012 + thr * .02, t(), .2); eng.whine.frequency.setTargetAtTime(900 + thr * 900, t(), .3);
    wind.g.gain.setTargetAtTime(Math.min(.25, speed * speed * 1e-6) * (inside ? .5 : 1), t(), .2); wind.b.frequency.setTargetAtTime(600 + speed * 2, t(), .2); }
  function burst(f, q, dur, vol, type = 'bandpass') { if (!ac || !on) return; const s = ac.createBufferSource(); s.buffer = noise; const b = ac.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; const g = ac.createGain(); g.gain.setValueAtTime(vol, t()); g.gain.exponentialRampToValueAtTime(.001, t() + dur); s.connect(b); b.connect(g); g.connect(master); s.start(); s.stop(t() + dur + .05); }
  function tone(f, dur, type = 'sine', vol = .15, slide) { if (!ac || !on) return; const o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.setValueAtTime(f, t()); if (slide) o.frequency.exponentialRampToValueAtTime(slide, t() + dur); g.gain.setValueAtTime(vol, t()); g.gain.exponentialRampToValueAtTime(.001, t() + dur); o.connect(g); g.connect(master); o.start(); o.stop(t() + dur + .05); }
  return { init, engine, get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem('jkstrike-sound', on ? '1' : '0'); } catch (e) {} if (master) master.gain.setTargetAtTime(on ? .6 : 0, t(), .05); return on; },
    silence() { if (!eng) return; eng.g.gain.setTargetAtTime(0, t(), .05); eng.og.gain.setTargetAtTime(0, t(), .05); eng.wg.gain.setTargetAtTime(0, t(), .05); wind.g.gain.setTargetAtTime(0, t(), .05); },
    gun() { burst(1400, .7, .07, .22); burst(180, 1, .06, .25, 'lowpass'); },
    hit() { tone(2200, .05, 'square', .06); },
    launch() { burst(700, .4, 1.1, .45); tone(180, .9, 'sawtooth', .08, 60); },
    boom(d = 0) { const v = Math.max(.08, 1 - d / 3000); burst(120, .6, 1.6, v); burst(700, .5, .5, v * .5); tone(55, 1.2, 'sine', v * .6, 30); },
    flare() { burst(2400, 1.5, .25, .18); tone(1600, .2, 'square', .04, 900); },
    lockTick() { tone(1000, .05, 'square', .05); },
    locked(on2) { if (on2) tone(1500, .12, 'square', .06); },
    warn() { tone(880, .12, 'square', .1); setTimeout(() => tone(660, .12, 'square', .1), 140); },
    pullup() { tone(520, .2, 'triangle', .1); },
    win() { [523, 659, 784, 1046].forEach((f, k) => setTimeout(() => tone(f, .3, 'triangle', .15), k * 120)); },
    click() { tone(1200, .04, 'square', .04); },
    damage() { burst(400, .8, .25, .4); tone(120, .2, 'square', .1, 60); },
  };
})();
