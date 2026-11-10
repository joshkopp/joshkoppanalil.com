// Synthesized engine, tires, boost and FX — no audio files.
export const Audio = (() => {
  let ac = null, master, eng = null, skid = null, wind = null, on = true;
  try { on = localStorage.getItem('jkdrive-sound') !== '0'; } catch (e) {}
  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    ac = new C(); master = ac.createGain(); master.gain.value = on ? .55 : 0; master.connect(ac.destination);
    // engine: two detuned saws + square sub, through a lowpass whose cutoff follows load
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900; lp.Q.value = 4;
    const g = ac.createGain(); g.gain.value = 0; lp.connect(g); g.connect(master);
    const o1 = ac.createOscillator(), o2 = ac.createOscillator(), o3 = ac.createOscillator();
    o1.type = 'sawtooth'; o2.type = 'sawtooth'; o3.type = 'square'; o2.detune.value = 14;
    const g3 = ac.createGain(); g3.gain.value = .5; o3.connect(g3); g3.connect(lp); o1.connect(lp); o2.connect(lp);
    [o1, o2, o3].forEach(o => o.start()); eng = { o1, o2, o3, lp, g };
    const noise = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const mk = (type, f, q) => { const s = ac.createBufferSource(); s.buffer = noise; s.loop = true; const bp = ac.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q; const gg = ac.createGain(); gg.gain.value = 0; s.connect(bp); bp.connect(gg); gg.connect(master); s.start(); return { g: gg, f: bp }; };
    skid = mk('bandpass', 1800, 6); wind = mk('lowpass', 500, .7); Audio.noise = noise;
  }
  function engine(rpm, load, idle) { if (!eng) return; const t = ac.currentTime, f = 28 + rpm * 120;
    eng.o1.frequency.setTargetAtTime(f, t, .05); eng.o2.frequency.setTargetAtTime(f * 1.005, t, .05); eng.o3.frequency.setTargetAtTime(f / 2, t, .05);
    eng.lp.frequency.setTargetAtTime(400 + load * 2400 + rpm * 900, t, .08); eng.g.gain.setTargetAtTime(idle ? 0 : .07 + load * .09, t, .1); }
  function tires(slip, speed) { if (!skid) return; const t = ac.currentTime; skid.g.gain.setTargetAtTime(Math.min(.32, slip * .05), t, .05); skid.f.frequency.setTargetAtTime(1400 + speed * 12, t, .1); wind.g.gain.setTargetAtTime(Math.min(.25, speed * speed * .00008), t, .2); }
  function blip(f = 880, dur = .12, type = 'sine', vol = .25, slide = 0) { if (!ac || !on) return; const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f * slide), t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .02); }
  function burst(f, q, dur, vol) { if (!ac || !on) return; const t = ac.currentTime, s = ac.createBufferSource(); s.buffer = Audio.noise; const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + dur); }
  return {
    init, engine, tires,
    get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem('jkdrive-sound', on ? '1' : '0'); } catch (e) {} if (master) master.gain.setTargetAtTime(on ? .55 : 0, ac.currentTime, .05); return on; },
    stopLoops() { if (!ac) return; const t = ac.currentTime; eng && eng.g.gain.setTargetAtTime(0, t, .05); skid && skid.g.gain.setTargetAtTime(0, t, .05); wind && wind.g.gain.setTargetAtTime(0, t, .05); },
    coin() { blip(1320, .09, 'square', .12); setTimeout(() => blip(1760, .16, 'square', .12), 70); },
    boost() { burst(900, .8, .6, .5); blip(220, .5, 'sawtooth', .15, 3); },
    nitro() { burst(1600, .6, .25, .25); },
    land(h) { burst(160, 1, .3, Math.min(.9, .2 + h * .12)); blip(70, .25, 'sine', .5, .5); },
    crash(v) { burst(300, .7, .35, Math.min(1, v * .04)); blip(90, .2, 'triangle', Math.min(.6, v * .03), .4); },
    horn() { blip(392, .45, 'square', .12); blip(494, .45, 'square', .1); },
    shift() { blip(140, .08, 'sawtooth', .08, .6); },
    click() { blip(1100, .04, 'square', .05); },
    win() { [523, 659, 784, 1046].forEach((f, k) => setTimeout(() => blip(f, .25, 'triangle', .2), k * 110)); },
    beep(f = 660) { blip(f, .18, 'square', .14); },
  };
})();
