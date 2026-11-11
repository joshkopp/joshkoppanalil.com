// Synth audio: V8 engine, siren (wail / yelp), tyres, crashes, radio, EMP. No files.
export const Audio = (() => {
  let ac = null, master, comp, eng, siren, skid, wind, on = true, sirenMode = 0;
  try { on = localStorage.getItem('jkpd-sound') !== '0'; } catch (e) {}
  const curve = (() => { const c = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 512 - 1; c[i] = Math.tanh(x * 3); } return c; })();
  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    ac = new C(); master = ac.createGain(); master.gain.value = on ? .55 : 0; master.connect(ac.destination);
    comp = ac.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4; comp.connect(master);
    // engine: two detuned saws through a waveshaper and lowpass (V8 burble)
    const o1 = ac.createOscillator(), o2 = ac.createOscillator(), o3 = ac.createOscillator(), sh = ac.createWaveShaper(), lp = ac.createBiquadFilter(), g = ac.createGain(), pre = ac.createGain();
    o1.type = 'sawtooth'; o2.type = 'sawtooth'; o3.type = 'square'; o2.detune.value = 14; sh.curve = curve; lp.type = 'lowpass'; lp.Q.value = 4; g.gain.value = 0; pre.gain.value = .45;
    [o1, o2].forEach(o => o.connect(pre)); const g3 = ac.createGain(); g3.gain.value = .3; o3.connect(g3); g3.connect(pre); pre.connect(sh); sh.connect(lp); lp.connect(g); g.connect(comp); [o1, o2, o3].forEach(o => o.start()); eng = { o1, o2, o3, lp, g };
    // siren
    const so = ac.createOscillator(), sg = ac.createGain(), sf = ac.createBiquadFilter(); so.type = 'triangle'; sf.type = 'bandpass'; sf.frequency.value = 1100; sf.Q.value = .8; sg.gain.value = 0; so.connect(sf); sf.connect(sg); sg.connect(comp); so.start(); siren = { o: so, g: sg };
    const noise = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; Audio.noise = noise;
    const mk = (type, f, q) => { const s = ac.createBufferSource(); s.buffer = noise; s.loop = true; const bp = ac.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q; const gg = ac.createGain(); gg.gain.value = 0; s.connect(bp); bp.connect(gg); gg.connect(comp); s.start(); return { g: gg, f: bp }; };
    skid = mk('bandpass', 1400, 6); wind = mk('lowpass', 500, .7);
  }
  function engine(rpm, load, active) { if (!eng) return; const t = ac.currentTime, f = rpm / 60 * 4; // V8: 4 firings per rev
    eng.o1.frequency.setTargetAtTime(f / 2, t, .04); eng.o2.frequency.setTargetAtTime(f / 2, t, .04); eng.o3.frequency.setTargetAtTime(f / 4, t, .04);
    eng.lp.frequency.setTargetAtTime(300 + load * 1400 + rpm * .08, t, .05); eng.g.gain.setTargetAtTime(active ? .07 + load * .09 : 0, t, .06); }
  function sirenTick(time, active, dist = 0) { if (!siren) return; const t = ac.currentTime, mode = sirenMode;
    const f = mode === 0 ? 700 + (Math.sin(time * 1.6) * .5 + .5) * 750 : 900 + (Math.abs(((time * 6) % 2) - 1)) * 650;
    siren.o.frequency.setTargetAtTime(f, t, .01); siren.g.gain.setTargetAtTime(active ? Math.min(.09, .09 / (1 + dist * .02)) : 0, t, .05); }
  function surface(slip, speed) { if (!skid) return; const t = ac.currentTime; skid.g.gain.setTargetAtTime(Math.min(.28, slip * .05), t, .04); skid.f.frequency.setTargetAtTime(900 + speed * 12, t, .1); wind.g.gain.setTargetAtTime(Math.min(.18, speed * speed * .00006), t, .2); }
  function blip(f, dur, type = 'sine', vol = .2, slide = 0, delay = 0) { if (!ac || !on) return; const t = ac.currentTime + delay, o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f * slide), t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + .02); }
  function burst(f, q, dur, vol, delay = 0) { if (!ac || !on) return; const t = ac.currentTime + delay, s = ac.createBufferSource(); s.buffer = Audio.noise; const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = f; bp.Q.value = q; const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); s.connect(bp); bp.connect(g); g.connect(master); s.start(t); s.stop(t + dur); }
  return {
    init, engine, sirenTick, surface,
    get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem('jkpd-sound', on ? '1' : '0'); } catch (e) {} if (master) master.gain.setTargetAtTime(on ? .55 : 0, ac.currentTime, .05); return on; },
    sirenMode() { sirenMode = (sirenMode + 1) % 2; },
    stopLoops() { if (!ac) return; const t = ac.currentTime; [eng && eng.g, siren && siren.g, skid && skid.g, wind && wind.g].forEach(g => g && g.gain.setTargetAtTime(0, t, .05)); },
    crash(v) { burst(180, .6, .5, Math.min(1, v * .04)); burst(2600, 1.2, .25, Math.min(.6, v * .025)); blip(70, .3, 'triangle', Math.min(.7, v * .03), .4); },
    scrape() { burst(3200, 3, .12, .12); },
    prop() { burst(900, 1.5, .18, .3); blip(300, .1, 'square', .08, .5); },
    radio() { burst(2500, .5, .08, .12); blip(1200, .05, 'square', .06, 1, .1); burst(2500, .5, .06, .1, .5); },
    emp() { blip(1400, .6, 'sawtooth', .22, .08); burst(600, .4, .5, .3); },
    nitro() { burst(400, .5, .6, .25); },
    bust() { [523, 659, 784, 1046].forEach((f, k) => blip(f, .3, 'triangle', .2, 0, k * .1)); },
    fail() { [400, 300, 220].forEach((f, k) => blip(f, .35, 'triangle', .2, 0, k * .15)); },
    click() { blip(1100, .04, 'square', .05); },
    horn() { blip(380, .35, 'square', .12); blip(470, .35, 'square', .1); },
  };
})();
