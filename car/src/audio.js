// Synthesized hybrid-V6 engine, rival cars, tyres, kerbs, start lights and UI blips. No audio files.
export const Audio = (() => {
  let ac = null, master, eng = null, rival = null, skid = null, wind = null, rumble = null, on = true;
  try { on = localStorage.getItem('jkgp-sound') !== '0'; } catch (e) {}
  const curve = (() => { const n = 1024, c = new Float32Array(n); for (let i = 0; i < n; i++) { const x = i / n * 2 - 1; c[i] = Math.tanh(x * 2.4); } return c; })();
  function engineVoice(vol) {
    const out = ac.createGain(); out.gain.value = 0;
    const shaper = ac.createWaveShaper(); shaper.curve = curve; shaper.oversample = '2x';
    const bp = ac.createBiquadFilter(); bp.type = 'lowpass'; bp.frequency.value = 2000; bp.Q.value = 3;
    const pre = ac.createGain(); pre.gain.value = vol; pre.connect(shaper); shaper.connect(bp); bp.connect(out);
    const o1 = ac.createOscillator(), o2 = ac.createOscillator(), o3 = ac.createOscillator(), o4 = ac.createOscillator();
    o1.type = 'sawtooth'; o2.type = 'square'; o3.type = 'sawtooth'; o4.type = 'sine'; o3.detune.value = 9;
    const g2 = ac.createGain(), g4 = ac.createGain(); g2.gain.value = .35; g4.gain.value = .5; const g3 = ac.createGain(); g3.gain.value = .6;
    o1.connect(pre); o2.connect(g2); g2.connect(pre); o3.connect(g3); g3.connect(pre); o4.connect(g4); g4.connect(pre);
    [o1, o2, o3, o4].forEach(o => o.start()); return { o1, o2, o3, o4, bp, out };
  }
  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    ac = new C(); master = ac.createGain(); master.gain.value = on ? .5 : 0; master.connect(ac.destination);
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.connect(master);
    eng = engineVoice(.5); eng.out.connect(comp);
    const tw = ac.createOscillator(), tg = ac.createGain(); tw.type = 'sine'; tg.gain.value = 0; tw.connect(tg); tg.connect(comp); tw.start(); eng.turbo = { o: tw, g: tg };
    rival = engineVoice(.4); const pan = ac.createStereoPanner ? ac.createStereoPanner() : ac.createGain(); rival.out.connect(pan); pan.connect(comp); rival.pan = pan;
    const noise = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; Audio.noise = noise;
    const mk = (type, f, q) => { const s = ac.createBufferSource(); s.buffer = noise; s.loop = true; const bp = ac.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q; const gg = ac.createGain(); gg.gain.value = 0; s.connect(bp); bp.connect(gg); gg.connect(comp); s.start(); return { g: gg, f: bp }; };
    skid = mk('bandpass', 1500, 5); wind = mk('lowpass', 700, .7); rumble = mk('lowpass', 120, 2);
  }
  const fire = rpm => rpm / 60 * 3; // V6 four-stroke firing frequency
  function setVoice(v, rpm, load, gain, pitchMul = 1) { const t = ac.currentTime, f = fire(rpm) * pitchMul;
    v.o1.frequency.setTargetAtTime(f, t, .03); v.o2.frequency.setTargetAtTime(f / 2, t, .03); v.o3.frequency.setTargetAtTime(f * 1.5, t, .03); v.o4.frequency.setTargetAtTime(f * 2, t, .03);
    v.bp.frequency.setTargetAtTime(700 + load * 2600 + rpm * .15, t, .05); v.out.gain.setTargetAtTime(gain, t, .06); }
  function engine(rpm, load, active) { if (!eng) return; setVoice(eng, rpm, load, active ? .05 + load * .07 : 0); const t = ac.currentTime;
    eng.turbo.o.frequency.setTargetAtTime(2400 + rpm * .25, t, .1); eng.turbo.g.gain.setTargetAtTime(active ? .004 + load * .006 : 0, t, .2); }
  function rivals(dist, rel, rpm, side) { if (!rival) return; const g = dist < 160 ? Math.min(.09, 6 / (dist + 20)) : 0, dop = Math.max(.7, Math.min(1.4, 343 / (343 - rel)));
    setVoice(rival, rpm, .8, g, dop); if (rival.pan.pan) rival.pan.pan.setTargetAtTime(Math.max(-1, Math.min(1, side)), ac.currentTime, .05); }
  function surface(slip, speed, kerb) { if (!skid) return; const t = ac.currentTime; skid.g.gain.setTargetAtTime(Math.min(.25, slip * .06), t, .04); skid.f.frequency.setTargetAtTime(1100 + speed * 9, t, .1);
    wind.g.gain.setTargetAtTime(Math.min(.2, speed * speed * .00003), t, .2); rumble.g.gain.setTargetAtTime(kerb ? .5 : 0, t, .03); rumble.f.frequency.setTargetAtTime(80 + speed * 1.5, t, .05); }
  function blip(f = 880, dur = .12, type = 'sine', vol = .25, slide = 0) { if (!ac || !on) return; const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .02); }
  function burst(f, q, dur, vol) { if (!ac || !on) return; const t = ac.currentTime, s = ac.createBufferSource(); s.buffer = Audio.noise; const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + dur); }
  return {
    init, engine, rivals, surface,
    get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem('jkgp-sound', on ? '1' : '0'); } catch (e) {} if (master) master.gain.setTargetAtTime(on ? .5 : 0, ac.currentTime, .05); return on; },
    stopLoops() { if (!ac) return; const t = ac.currentTime; [eng && eng.out, rival && rival.out, eng && eng.turbo.g, skid && skid.g, wind && wind.g, rumble && rumble.g].forEach(g => g && g.gain.setTargetAtTime(0, t, .05)); },
    light() { blip(520, .22, 'square', .14); },
    go() { blip(1040, .5, 'square', .16); },
    shift(up) { blip(up ? 180 : 120, .06, 'sawtooth', .1, .5); burst(2400, 1.5, .05, .12); },
    crash(v) { burst(260, .7, .4, Math.min(1, v * .03)); blip(80, .25, 'triangle', Math.min(.6, v * .02), .4); },
    touch() { burst(500, 1, .15, .3); },
    drs() { blip(900, .07, 'square', .08); setTimeout(() => blip(1350, .09, 'square', .08), 60); },
    click() { blip(1100, .04, 'square', .05); },
    lap() { blip(880, .1, 'triangle', .14); setTimeout(() => blip(1320, .16, 'triangle', .14), 90); },
    purple() { [988, 1319, 1661].forEach((f, k) => setTimeout(() => blip(f, .14, 'triangle', .14), k * 70)); },
    win() { [523, 659, 784, 1046, 1318].forEach((f, k) => setTimeout(() => blip(f, .3, 'triangle', .2), k * 120)); },
  };
})();
