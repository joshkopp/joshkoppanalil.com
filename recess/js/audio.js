// RECESS — fully synthesized, positional audio + music (no sound files).
export class Sfx {
  init() {
    if (this.ctx) { if (this.ctx.state !== 'running') this.ctx.resume(); return; }
    const c = this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.comp = c.createDynamicsCompressor(); this.comp.threshold.value = -14; this.comp.ratio.value = 4; this.comp.connect(c.destination);
    this.master = c.createGain(); this.master.connect(this.comp);
    this.sfx = c.createGain(); this.sfx.connect(this.master);
    this.amb = c.createGain(); this.amb.gain.value = 0; this.amb.connect(this.master);
    this.voice = c.createGain(); this.voice.connect(this.comp);
    this.mus = c.createGain(); this.mus.gain.value = 0.5; this.mus.connect(this.master);
    const n = c.sampleRate * 2, b = c.createBuffer(1, n, c.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    this.nb = b;
    // brown noise
    const bb = c.createBuffer(1, n, c.sampleRate), bd = bb.getChannelData(0); let last = 0;
    for (let i = 0; i < n; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; bd[i] = last * 3.5; }
    this.bnb = bb;
    this.heartT = 0; this.ambT = 3; this.vol = 1;
  }
  get ok() { return !!this.ctx; }
  get now() { return this.ctx.currentTime; }
  setVolume(master, voice, music) { if (!this.ctx) return; this.master.gain.value = master; this.voice.gain.value = voice; if (music != null) this.mus.gain.value = music; }
  listener(p, f) {
    if (!this.ctx) return; const L = this.ctx.listener, t = this.now;
    if (L.positionX) { L.positionX.setTargetAtTime(p.x, t, 0.02); L.positionY.setTargetAtTime(p.y, t, 0.02); L.positionZ.setTargetAtTime(p.z, t, 0.02); L.forwardX.setTargetAtTime(f.x, t, 0.02); L.forwardY.setTargetAtTime(f.y, t, 0.02); L.forwardZ.setTargetAtTime(f.z, t, 0.02); L.upX.value = 0; L.upY.value = 1; L.upZ.value = 0; }
    else { L.setPosition(p.x, p.y, p.z); L.setOrientation(f.x, f.y, f.z, 0, 1, 0); }
  }
  panner(p, ref = 1.6, roll = 1.25, out = this.sfx) {
    const c = this.ctx, pn = c.createPanner();
    p = { x: +p.x || 0, y: Number.isFinite(+p.y) ? +p.y : 0, z: +p.z || 0 };
    pn.panningModel = 'HRTF'; pn.distanceModel = 'inverse'; pn.refDistance = ref; pn.maxDistance = 80; pn.rolloffFactor = roll;
    if (pn.positionX) { pn.positionX.value = p.x; pn.positionY.value = p.y; pn.positionZ.value = p.z; } else pn.setPosition(p.x, p.y, p.z);
    pn.connect(out); return pn;
  }
  dest(p, ref, roll) { return p ? this.panner(p, ref, roll) : this.sfx; }
  noise(dur, brown) { const s = this.ctx.createBufferSource(); s.buffer = brown ? this.bnb : this.nb; s.loop = true; s.loopStart = Math.random(); return s; }
  env(g, t, a, peak, d, sustain = 0) { g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain), t + a + d); }
  // ------------------------------------------------ one-shots
  step(p, vol, wet) {
    if (!this.ctx) return; const c = this.ctx, t = this.now;
    const s = this.noise(), f = c.createBiquadFilter(), g = c.createGain();
    f.type = 'bandpass'; f.frequency.value = (wet ? 500 : 1300) * (0.8 + Math.random() * 0.4); f.Q.value = wet ? 1.2 : 0.9;
    s.connect(f); f.connect(g); g.connect(this.dest(p, 1.2, 1.6));
    this.env(g, t, 0.004, vol, 0.09); s.start(t); s.stop(t + 0.15);
    const o = c.createOscillator(), og = c.createGain(); o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(50, t + 0.08);
    o.connect(og); og.connect(this.dest(p, 1.2, 1.6)); this.env(og, t, 0.003, vol * 0.6, 0.08); o.start(t); o.stop(t + 0.12);
    if (wet) { const s2 = this.noise(), f2 = c.createBiquadFilter(), g2 = c.createGain(); f2.type = 'highpass'; f2.frequency.value = 3000; s2.connect(f2); f2.connect(g2); g2.connect(this.dest(p, 1.2, 1.6)); this.env(g2, t + 0.02, 0.01, vol * 0.25, 0.12); s2.start(t); s2.stop(t + 0.2); }
  }
  thud(p, vol = 1) { // monster footstep
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 2.2, 1.1);
    const o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(70, t); o.frequency.exponentialRampToValueAtTime(32, t + 0.25);
    o.connect(g); g.connect(out); this.env(g, t, 0.006, vol * 1.3, 0.3); o.start(t); o.stop(t + 0.35);
    const s = this.noise(), f = c.createBiquadFilter(), g2 = c.createGain(); f.type = 'lowpass'; f.frequency.value = 380;
    s.connect(f); f.connect(g2); g2.connect(out); this.env(g2, t, 0.005, vol * 0.9, 0.22); s.start(t); s.stop(t + 0.3);
    const s3 = this.noise(), f3 = c.createBiquadFilter(), g3 = c.createGain(); f3.type = 'bandpass'; f3.frequency.value = 2400; f3.Q.value = 3;
    s3.connect(f3); f3.connect(g3); g3.connect(out); this.env(g3, t + 0.05, 0.05, vol * 0.18, 0.25); s3.start(t); s3.stop(t + 0.4);
  }
  growl(p, vol = 1, dur = 1.4) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 2.5, 1);
    const o = c.createOscillator(), lfo = c.createOscillator(), lg = c.createGain(); o.type = 'sawtooth'; o.frequency.value = 62 + Math.random() * 20;
    lfo.frequency.value = 23 + Math.random() * 8; lg.gain.value = 18; lfo.connect(lg); lg.connect(o.frequency);
    const f1 = c.createBiquadFilter(); f1.type = 'bandpass'; f1.frequency.value = 420; f1.Q.value = 2.5;
    const f2 = c.createBiquadFilter(); f2.type = 'bandpass'; f2.frequency.value = 900; f2.Q.value = 4;
    const g = c.createGain(); o.connect(f1); o.connect(f2); f1.connect(g); f2.connect(g); g.connect(out);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol * 0.9, t + 0.25); g.gain.setValueAtTime(vol * 0.9, t + dur * 0.6); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    const s = this.noise(), sf = c.createBiquadFilter(), sg = c.createGain(); sf.type = 'bandpass'; sf.frequency.value = 700; sf.Q.value = 1;
    s.connect(sf); sf.connect(sg); sg.connect(out); this.env(sg, t, 0.2, vol * 0.5, dur);
    [o, lfo, s].forEach(n => { n.start(t); n.stop(t + dur + 0.1); });
  }
  screech(p, vol = 1, dur = 1.3) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 3, 0.9);
    const g = c.createGain(); g.connect(out);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol * 0.5, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    for (let i = 0; i < 4; i++) {
      const o = c.createOscillator(), v = c.createOscillator(), vg = c.createGain(); o.type = 'sawtooth';
      const base = 700 + i * 260 + Math.random() * 80; o.frequency.setValueAtTime(base, t); o.frequency.linearRampToValueAtTime(base * 1.35, t + 0.25); o.frequency.exponentialRampToValueAtTime(base * 0.7, t + dur);
      v.frequency.value = 9 + i * 3; vg.gain.value = 40 + i * 12; v.connect(vg); vg.connect(o.frequency);
      const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = base * 1.5; f.Q.value = 1.5;
      o.connect(f); f.connect(g); o.start(t); v.start(t); o.stop(t + dur); v.stop(t + dur);
    }
    const s = this.noise(), sf = c.createBiquadFilter(); sf.type = 'highpass'; sf.frequency.value = 2500; const sg = c.createGain(); s.connect(sf); sf.connect(sg); sg.connect(out); this.env(sg, t, 0.02, vol * 0.35, dur * 0.8); s.start(t); s.stop(t + dur);
  }
  stinger(vol = 1) { // jumpscare hit (non-positional)
    if (!this.ctx) return; const c = this.ctx, t = this.now;
    this.screech(null, vol * 1.2, 1.1);
    const g = c.createGain(); g.connect(this.sfx); this.env(g, t, 0.01, vol * 0.7, 1.6);
    [55, 58.3, 110.5, 164, 233].forEach(fq => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = fq; const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1200; o.connect(f); f.connect(g); o.start(t); o.stop(t + 1.7); });
    const s = this.noise(), sg = c.createGain(); s.connect(sg); sg.connect(this.sfx); this.env(sg, t, 0.005, vol * 0.6, 0.35); s.start(t); s.stop(t + 0.5);
  }
  door(p, slam) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 2, 1.1);
    const dur = slam ? 0.35 : 0.9;
    const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.setValueAtTime(140 + Math.random() * 60, t); o.frequency.linearRampToValueAtTime(260 + Math.random() * 120, t + dur);
    const am = c.createOscillator(), amg = c.createGain(); am.type = 'square'; am.frequency.value = 18 + Math.random() * 14; amg.gain.value = 0.5; am.connect(amg);
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 6;
    const g = c.createGain(); amg.connect(g.gain); o.connect(f); f.connect(g); g.connect(out);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.08); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.start(t); am.start(t); o.stop(t + dur); am.stop(t + dur);
    if (slam) this.thud(p, 0.9), this.metal(p, 0.4);
  }
  metal(p, vol = 0.5) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 2, 1);
    [310, 742, 1287, 2011].forEach((fq, i) => { const o = c.createOscillator(), g = c.createGain(); o.frequency.value = fq * (0.95 + Math.random() * 0.1); o.connect(g); g.connect(out); this.env(g, t, 0.002, vol * 0.25 / (i + 1), 0.6 + Math.random() * 0.8); o.start(t); o.stop(t + 1.5); });
  }
  drip(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(1400 + Math.random() * 700, t); o.frequency.exponentialRampToValueAtTime(500, t + 0.06); o.connect(g); g.connect(this.dest(p, 1, 1)); this.env(g, t, 0.002, 0.25, 0.08); o.start(t); o.stop(t + 0.1); }
  whisper(p, vol = 0.35) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 1.5, 1), dur = 1.5 + Math.random() * 1.5;
    const s = this.noise(), f = c.createBiquadFilter(), f2 = c.createBiquadFilter(), g = c.createGain();
    f.type = 'bandpass'; f.Q.value = 7; f2.type = 'highpass'; f2.frequency.value = 900;
    for (let k = 0; k < dur; k += 0.12) f.frequency.setValueAtTime(1200 + Math.random() * 2800, t + k);
    s.connect(f); f.connect(f2); f2.connect(g); g.connect(out);
    g.gain.setValueAtTime(0.0001, t); for (let k = 0; k < dur; k += 0.18) g.gain.setTargetAtTime(Math.random() < 0.65 ? vol : 0.0001, t + k, 0.03);
    g.gain.setTargetAtTime(0.0001, t + dur, 0.05); s.start(t); s.stop(t + dur + 0.3);
  }
  tone(freq, dur, vol = 0.2, type = 'sine', when = 0) { if (!this.ctx) return; const c = this.ctx, t = this.now + when, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = freq; o.connect(g); g.connect(this.sfx); this.env(g, t, 0.005, vol, dur); o.start(t); o.stop(t + dur + 0.05); }
  click() { this.tone(2400, 0.02, 0.15, 'square'); this.tone(900, 0.03, 0.1, 'square', 0.015); }
  beep(ok) { if (ok) { this.tone(880, 0.09, 0.15); this.tone(1320, 0.14, 0.15, 'sine', 0.1); } else { this.tone(180, 0.25, 0.2, 'square'); } }
  pickup() { this.tone(660, 0.12, 0.12, 'triangle'); this.tone(990, 0.2, 0.1, 'triangle', 0.07); }
  powerOn() {
    if (!this.ctx) return; const c = this.ctx, t = this.now;
    this.thud(null, 1.2); this.metal(null, 0.8);
    const o = c.createOscillator(), g = c.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(20, t); o.frequency.exponentialRampToValueAtTime(120, t + 2.5);
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400; o.connect(f); f.connect(g); g.connect(this.sfx);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.25, t + 1.5); g.gain.exponentialRampToValueAtTime(0.0001, t + 4); o.start(t); o.stop(t + 4.1);
  }
  breathe(vol = 0.3) { // player out of breath
    if (!this.ctx) return; const c = this.ctx, t = this.now, s = this.noise(), f = c.createBiquadFilter(), g = c.createGain();
    f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 0.8; s.connect(f); f.connect(g); g.connect(this.sfx);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.25); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7); s.start(t); s.stop(t + 0.8);
  }
  heartbeat(vol) { this.tone(52, 0.14, vol, 'sine'); this.tone(46, 0.16, vol * 0.8, 'sine', 0.2); }
  // ------------------------------------------------ continuous
  startAmbient() {
    if (!this.ctx || this.ambOn) return; this.ambOn = true; const c = this.ctx;
    const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 130; f.connect(this.amb);
    [41, 41.6, 55.2].forEach(fq => { const o = c.createOscillator(); o.type = 'sawtooth'; o.frequency.value = fq; const g = c.createGain(); g.gain.value = 0.12; o.connect(g); g.connect(f); o.start(); });
    const s = this.noise(0, true), nf = c.createBiquadFilter(), ng = c.createGain(); nf.type = 'bandpass'; nf.frequency.value = 320; nf.Q.value = 0.6; ng.gain.value = 0.35;
    const lfo = c.createOscillator(), lg = c.createGain(); lfo.frequency.value = 0.07; lg.gain.value = 0.25; lfo.connect(lg); lg.connect(ng.gain); lfo.start();
    s.connect(nf); nf.connect(ng); ng.connect(this.amb); s.start();
    // electrical hum (louder when power is on)
    const h = c.createOscillator(), hg = c.createGain(); h.type = 'sawtooth'; h.frequency.value = 60; const hf = c.createBiquadFilter(); hf.type = 'lowpass'; hf.frequency.value = 240; hg.gain.value = 0;
    h.connect(hf); hf.connect(hg); hg.connect(this.amb); h.start(); this.humG = hg;
    // monster breathing source
    const ms = this.noise(), mf = c.createBiquadFilter(), mg = c.createGain(), mlfo = c.createOscillator(), mlg = c.createGain();
    mf.type = 'bandpass'; mf.frequency.value = 520; mf.Q.value = 2.2; mg.gain.value = 0;
    const breathG = c.createGain(); breathG.gain.value = 0.5; mlfo.frequency.value = 0.45; mlg.gain.value = 0.5; mlfo.connect(mlg); mlg.connect(breathG.gain);
    this.mPan = this.panner({ x: 0, y: -50, z: 0 }, 1.8, 1.2);
    ms.connect(mf); mf.connect(breathG); breathG.connect(mg); mg.connect(this.mPan); ms.start(); mlfo.start();
    this.mBreathG = mg; this.mLfo = mlfo;
    this.amb.gain.setTargetAtTime(0.6, this.now, 2);
  }
  stopAmbient() { if (!this.ctx) return; this.amb.gain.setTargetAtTime(0, this.now, 0.3); }
  resumeAmbient() { if (!this.ctx) return; this.startAmbient(); this.amb.gain.setTargetAtTime(0.6, this.now, 1.5); }
  setHum(v) { if (this.humG) this.humG.gain.setTargetAtTime(v, this.now, 0.4); }
  monster(p, chase) {
    if (!this.mPan) return; const t = this.now;
    if (this.mPan.positionX) { this.mPan.positionX.setTargetAtTime(p.x, t, 0.05); this.mPan.positionY.setTargetAtTime(p.y, t, 0.05); this.mPan.positionZ.setTargetAtTime(p.z, t, 0.05); } else this.mPan.setPosition(p.x, p.y, p.z);
    this.mBreathG.gain.setTargetAtTime(chase ? 0.9 : 0.45, t, 0.3); this.mLfo.frequency.setTargetAtTime(chase ? 1.6 : 0.45, t, 0.5);
  }
  // random ambience around the listener; called each frame
  tick(dt, lp, basement, intensity) {
    if (!this.ctx) return;
    this.ambT -= dt;
    if (this.ambT <= 0) {
      this.ambT = (6 + Math.random() * 14) / intensity;
      const a = Math.random() * 6.283, d = 5 + Math.random() * 14, p = { x: lp.x + Math.cos(a) * d, y: lp.y + (Math.random() - 0.5), z: lp.z + Math.sin(a) * d };
      const r = Math.random();
      if (basement && r < 0.45) { for (let i = 0; i < 3; i++) setTimeout(() => this.drip(p), i * (300 + Math.random() * 900)); }
      else if (r < 0.62) this.metal(p, 0.3 + Math.random() * 0.3);
      else if (r < 0.78) this.whisper({ x: lp.x + Math.cos(a) * 3, y: lp.y, z: lp.z + Math.sin(a) * 3 }, 0.18);
      else if (r < 0.9) this.door(p, false);
      else { this.thud(p, 0.5); setTimeout(() => this.thud(p, 0.4), 450); }
    }
  }
  // ------------------------------------------------ party additions
  zap(p) {
    if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 3, 0.8);
    const o = c.createOscillator(), g = c.createGain(); o.type = 'square'; o.frequency.setValueAtTime(1400, t); o.frequency.exponentialRampToValueAtTime(180, t + 0.25);
    o.connect(g); g.connect(out); this.env(g, t, 0.005, 0.35, 0.3); o.start(t); o.stop(t + 0.35);
    [523, 659, 784, 1046].forEach((f, i) => { const q = c.createOscillator(), qg = c.createGain(); q.type = 'triangle'; q.frequency.value = f; q.connect(qg); qg.connect(out); this.env(qg, t + 0.05 + i * 0.04, 0.005, 0.14, 0.35); q.start(t); q.stop(t + 0.7); });
    const s = this.noise(), sg = c.createGain(), sf = c.createBiquadFilter(); sf.type = 'highpass'; sf.frequency.value = 2500; s.connect(sf); sf.connect(sg); sg.connect(out); this.env(sg, t, 0.003, 0.3, 0.15); s.start(t); s.stop(t + 0.2);
  }
  whistle() {
    if (!this.ctx) return; const c = this.ctx, t = this.now, g = c.createGain(); g.connect(this.sfx);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.22, t + 0.03); g.gain.setValueAtTime(0.22, t + 0.55); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    const lfo = c.createOscillator(), lg = c.createGain(); lfo.frequency.value = 38; lg.gain.value = 140; lfo.connect(lg);
    [2750, 3150].forEach(f => { const o = c.createOscillator(); o.frequency.value = f; lg.connect(o.frequency); o.connect(g); o.start(t); o.stop(t + 0.72); });
    lfo.start(t); lfo.stop(t + 0.72);
  }
  count(n) { if (n > 0) this.tone(660, 0.12, 0.18, 'square'); else { this.tone(1320, 0.35, 0.2, 'square'); this.tone(990, 0.35, 0.12, 'square'); } }
  found() { this.tone(392, 0.18, 0.2, 'sawtooth'); this.tone(311, 0.25, 0.2, 'sawtooth', 0.16); this.tone(233, 0.5, 0.2, 'sawtooth', 0.34); }
  win() { [523, 659, 784, 1046, 1318].forEach((f, i) => this.tone(f, 0.25, 0.14, 'triangle', i * 0.09)); }
  lose() { [392, 349, 311, 262].forEach((f, i) => this.tone(f, 0.3, 0.14, 'triangle', i * 0.16)); }
  boing(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, o = c.createOscillator(), g = c.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(520, t + 0.12); o.connect(g); g.connect(this.dest(p, 1.5, 1.4)); this.env(g, t, 0.005, 0.12, 0.15); o.start(t); o.stop(t + 0.2); }
  swish() { if (!this.ctx) return; const c = this.ctx, t = this.now, s = this.noise(), f = c.createBiquadFilter(), g = c.createGain(); f.type = 'bandpass'; f.Q.value = 2; f.frequency.setValueAtTime(600, t); f.frequency.exponentialRampToValueAtTime(3000, t + 0.25); s.connect(f); f.connect(g); g.connect(this.sfx); this.env(g, t, 0.02, 0.2, 0.25); s.start(t); s.stop(t + 0.35); }
  // ------------------------------------------------ music
  // mode 'hide' (suspense) | 'tag' (chiptune) | null; intensity 0..1 drives the suspense
  music(mode) {
    if (!this.ctx) return;
    if (this.mz && this.mz.mode === mode) return;
    this.stopMusic(); if (!mode) return;
    const c = this.ctx, bus = c.createGain(); bus.gain.value = 0; bus.connect(this.mus); bus.gain.setTargetAtTime(1, this.now, 0.6);
    this.mz = { mode, bus, step: 0, next: this.now + 0.1, nodes: [], intensity: 0 };
    if (mode === 'hide') {
      const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380; f.connect(bus); this.mz.lp = f;
      [73.4, 73.9, 110, 146.8].forEach((fq, i) => { const o = c.createOscillator(); o.type = i < 2 ? 'sawtooth' : 'triangle'; o.frequency.value = fq; const g = c.createGain(); g.gain.value = i < 2 ? 0.09 : 0.05; o.connect(g); g.connect(f); o.start(); this.mz.nodes.push(o); this.mz.pads = this.mz.pads || []; this.mz.pads.push(o); });
      const hi = c.createOscillator(), hg = c.createGain(), tr = c.createOscillator(), tg = c.createGain(); hi.type = 'sawtooth'; hi.frequency.value = 587; hg.gain.value = 0;
      tr.frequency.value = 7; tg.gain.value = 0.5; tr.connect(tg); const hm = c.createGain(); hm.gain.value = 0.5; tg.connect(hm.gain); const hf = c.createBiquadFilter(); hf.type = 'bandpass'; hf.frequency.value = 1200; hf.Q.value = 3;
      hi.connect(hf); hf.connect(hm); hm.connect(hg); hg.connect(bus); hi.start(); tr.start(); this.mz.nodes.push(hi, tr); this.mz.hg = hg;
    }
    this.mz.timer = setInterval(() => this._sched(), 50);
  }
  setIntensity(v) { if (!this.mz) return; this.mz.intensity = v; if (this.mz.lp) { this.mz.lp.frequency.setTargetAtTime(380 + v * 1400, this.now, 0.5); this.mz.hg.gain.setTargetAtTime(v * v * 0.05, this.now, 0.4); } }
  stopMusic() { const z = this.mz; if (!z) return; this.mz = null; clearInterval(z.timer); z.bus.gain.setTargetAtTime(0, this.now, 0.4); setTimeout(() => { z.nodes.forEach(n => { try { n.stop(); } catch (e) {} }); z.bus.disconnect(); }, 1500); }
  _note(t, f, d, v, type, bus) { const c = this.ctx, o = c.createOscillator(), g = c.createGain(); o.type = type; o.frequency.value = f; o.connect(g); g.connect(bus); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + d); o.start(t); o.stop(t + d + 0.02); }
  _drum(t, kind, bus) {
    const c = this.ctx;
    if (kind === 'k') { const o = c.createOscillator(), g = c.createGain(); o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12); o.connect(g); g.connect(bus); g.gain.setValueAtTime(0.5, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18); o.start(t); o.stop(t + 0.2); }
    else { const s = this.noise(), f = c.createBiquadFilter(), g = c.createGain(); f.type = kind === 'h' ? 'highpass' : 'bandpass'; f.frequency.value = kind === 'h' ? 7000 : 1800; s.connect(f); f.connect(g); g.connect(bus); g.gain.setValueAtTime(kind === 'h' ? 0.06 : 0.22, t); g.gain.exponentialRampToValueAtTime(0.0001, t + (kind === 'h' ? 0.04 : 0.14)); s.start(t); s.stop(t + 0.16); }
  }
  _sched() {
    const z = this.mz; if (!z || !this.ctx) return;
    while (z.next < this.now + 0.25) {
      const t = z.next, s = z.step;
      if (z.mode === 'tag') {
        const e = 60 / 132 / 2; // eighth notes at 132 bpm
        const prog = [[48, 52, 55], [43, 47, 50], [45, 48, 52], [41, 45, 48]], ch = prog[Math.floor(s / 8) % 4], hz = n => 440 * Math.pow(2, (n - 69) / 12);
        this._note(t, hz(ch[0] - 12 + (s % 2 ? 12 : 0)), e * 0.9, 0.11, 'triangle', z.bus);
        this._note(t, hz(ch[[0, 1, 2, 1][s % 4]] + 24), e * 0.6, 0.035, 'square', z.bus);
        if (s % 16 === 14) this._note(t, hz(ch[2] + 36), e * 1.5, 0.03, 'square', z.bus);
        if (s % 4 === 0) this._drum(t, 'k', z.bus); if (s % 4 === 2) this._drum(t, 's', z.bus); this._drum(t, 'h', z.bus);
        z.next += e;
      } else {
        const i = z.intensity, beat = 1.6 - i * 1.1;
        this._note(t, 55, 0.4, 0.12 + i * 0.1, 'sine', z.bus); if (i > 0.4) this._note(t + beat / 2, 52, 0.3, 0.08 * i, 'sine', z.bus);
        if (s % 8 === 0 && z.pads) { const root = [73.4, 58.3, 65.4, 69.3][Math.floor(s / 8) % 4]; z.pads[0].frequency.setTargetAtTime(root, t, 1.5); z.pads[1].frequency.setTargetAtTime(root * 1.007, t, 1.5); }
        z.next += beat;
      }
      z.step++;
    }
  }
  // ------------------------------------------------ v2: power-ups, taunts, radar, emotes
  power() { [784, 988, 1175, 1568].forEach((f, i) => this.tone(f, 0.14, 0.12, 'square', i * 0.05)); }
  sonar() { this.tone(1250, 0.6, 0.18, 'sine'); this.tone(1250, 0.5, 0.08, 'sine', 0.35); }
  pad(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, o = c.createOscillator(), g = c.createGain(); o.type = 'triangle'; o.frequency.setValueAtTime(160, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.35); o.connect(g); g.connect(this.dest(p, 2, 1.2)); this.env(g, t, 0.01, 0.25, 0.4); o.start(t); o.stop(t + 0.45); }
  honk(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 3, 0.7); [0, 0.32].forEach(d => { const o = c.createOscillator(), o2 = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = 'sawtooth'; o2.type = 'sawtooth'; o.frequency.value = 330; o2.frequency.value = 336; f.type = 'bandpass'; f.frequency.value = 1100; f.Q.value = 2; o.connect(f); o2.connect(f); f.connect(g); g.connect(out); g.gain.setValueAtTime(0.0001, t + d); g.gain.exponentialRampToValueAtTime(0.7, t + d + 0.02); g.gain.setValueAtTime(0.7, t + d + 0.2); g.gain.exponentialRampToValueAtTime(0.0001, t + d + 0.27); [o, o2].forEach(x => { x.start(t + d); x.stop(t + d + 0.3); }); }); }
  squeak(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, o = c.createOscillator(), g = c.createGain(); o.type = 'sine'; o.frequency.setValueAtTime(900, t); o.frequency.exponentialRampToValueAtTime(2400, t + 0.12); o.frequency.exponentialRampToValueAtTime(1200, t + 0.3); o.connect(g); g.connect(this.dest(p, 3, 0.7)); this.env(g, t, 0.01, 0.5, 0.32); o.start(t); o.stop(t + 0.35); }
  yoohoo(p) { if (!this.ctx) return; const c = this.ctx, t = this.now, out = this.dest(p, 3, 0.7); [[660, 0], [880, 0.22], [740, 0.44]].forEach(([fq, d]) => { const o = c.createOscillator(), g = c.createGain(), v = c.createOscillator(), vg = c.createGain(); o.type = 'triangle'; o.frequency.value = fq; v.frequency.value = 6; vg.gain.value = 14; v.connect(vg); vg.connect(o.frequency); o.connect(g); g.connect(out); this.env(g, t + d, 0.02, 0.4, 0.2); o.start(t + d); v.start(t + d); o.stop(t + d + 0.25); v.stop(t + d + 0.25); }); }
  laugh(p) { if (!this.ctx) return; for (let i = 0; i < 4; i++) { const c = this.ctx, t = this.now + i * 0.13, o = c.createOscillator(), g = c.createGain(), f = c.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.setValueAtTime(260 - i * 12, t); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 3; o.connect(f); f.connect(g); g.connect(this.dest(p, 2, 1)); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.35, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1); o.start(t); o.stop(t + 0.12); } }
  emote(n, p) { if (n === 1) this.yoohoo(p); else if (n === 2) this.laugh(p); else if (n === 3) { [523, 659, 784].forEach((f, i) => this.tone(f, 0.12, 0.1, 'square', i * 0.06)); } else { this.boing(p); setTimeout(() => this.boing(p), 180); } }
}
