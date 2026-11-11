// Synth audio for naval combat: gun reports by calibre, shell whistle, splashes, hits, sea and engine ambience.
export const Audio = (() => {
  let ac = null, master, comp, sea, eng, on = true;
  try { on = localStorage.getItem('jkn-sound') !== '0'; } catch (e) {}
  function init() {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return; }
    const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
    ac = new C(); master = ac.createGain(); master.gain.value = on ? .6 : 0; master.connect(ac.destination);
    comp = ac.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 5; comp.connect(master);
    const noise = ac.createBuffer(1, ac.sampleRate * 3, ac.sampleRate), d = noise.getChannelData(0); let b = 0; for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b = (b + .02 * w) / 1.02; d[i] = b * 3.5; } Audio.brown = noise;
    const white = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), e = white.getChannelData(0); for (let i = 0; i < e.length; i++) e[i] = Math.random() * 2 - 1; Audio.white = white;
    const s = ac.createBufferSource(); s.buffer = noise; s.loop = true; const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 500; const g = ac.createGain(); g.gain.value = 0; s.connect(lp); lp.connect(g); g.connect(comp); s.start(); sea = { g, lp };
    const o = ac.createOscillator(), og = ac.createGain(), ol = ac.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.value = 38; ol.type = 'lowpass'; ol.frequency.value = 140; og.gain.value = 0; o.connect(ol); ol.connect(og); og.connect(comp); o.start(); eng = { o, g: og };
  }
  function burst(buf, f, q, dur, vol, delay = 0, type = 'lowpass') { if (!ac || !on) return; const t = ac.currentTime + delay, s = ac.createBufferSource(); s.buffer = buf; const bp = ac.createBiquadFilter(); bp.type = type; bp.frequency.value = f; bp.Q.value = q; const g = ac.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); s.connect(bp); bp.connect(g); g.connect(comp); s.start(t, Math.random()); s.stop(t + dur); }
  function tone(f, dur, type, vol, slide = 0, delay = 0) { if (!ac || !on) return; const t = ac.currentTime + delay, o = ac.createOscillator(), g = ac.createGain(); o.type = type; o.frequency.setValueAtTime(f, t); if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f * slide), t + dur); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(.001, t + dur); o.connect(g); g.connect(comp); o.start(t); o.stop(t + dur + .02); }
  return {
    init,
    get on() { return on; },
    toggle() { on = !on; try { localStorage.setItem('jkn-sound', on ? '1' : '0'); } catch (e) {} if (master) master.gain.setTargetAtTime(on ? .6 : 0, ac.currentTime, .05); return on; },
    ambient(speed, active) { if (!sea) return; const t = ac.currentTime; sea.g.gain.setTargetAtTime(active ? .1 + speed * .006 : 0, t, .3); sea.lp.frequency.setTargetAtTime(380 + speed * 22, t, .3); eng.g.gain.setTargetAtTime(active ? .03 + speed * .002 : 0, t, .3); eng.o.frequency.setTargetAtTime(30 + speed * 1.4, t, .5); },
    stopLoops() { if (!ac) return; const t = ac.currentTime; sea.g.gain.setTargetAtTime(0, t, .1); eng.g.gain.setTargetAtTime(0, t, .1); },
    gun(cal, dist = 0) { const k = cal / 406, v = Math.max(.05, 1 - dist / 9000), dl = dist / 343 * .25; burst(Audio.brown, 120 + 500 * (1 - k), .7, .6 + k * 1.6, (.5 + k * .6) * v, dl); burst(Audio.white, 900, .6, .12 + k * .2, .35 * v, dl, 'bandpass'); tone(55 + 30 * (1 - k), .5 + k, 'sine', .5 * v, .5, dl); },
    whistle(near) { tone(1800, 1.1, 'sine', .05 * near, .35); },
    splash(cal, dist) { const v = Math.max(.03, 1 - dist / 6000), k = cal / 406; burst(Audio.white, 700 + 900 * (1 - k), .5, .5 + k * .8, .4 * v); burst(Audio.brown, 160, .8, .7 + k, .3 * v); },
    hit(cal, dist) { const v = Math.max(.05, 1 - dist / 7000), k = cal / 406; burst(Audio.brown, 220, .8, .8 + k, .7 * v); burst(Audio.white, 2600, 1, .25, .4 * v, 0, 'bandpass'); tone(90, .4, 'square', .12 * v, .4); },
    boom(dist) { const v = Math.max(.1, 1 - dist / 12000); burst(Audio.brown, 90, .7, 3.2, 1 * v); burst(Audio.white, 400, .5, 1.6, .6 * v, .05); tone(40, 2, 'sine', .7 * v, .5); },
    jet(dist) { const v = Math.max(.08, 1 - dist / 2500); burst(Audio.white, 900, .4, 4, .5 * v, 0, 'lowpass'); burst(Audio.brown, 160, .6, 4.5, .6 * v); },
    launch(dist) { const v = Math.max(.08, 1 - dist / 4000); burst(Audio.white, 1500, .5, 2.5, .55 * v, 0, 'lowpass'); burst(Audio.brown, 120, .6, 2, .6 * v); tone(140, 1.6, 'sawtooth', .06 * v, 2.2); },
    ciws(dist) { const v = Math.max(.1, 1 - dist / 2500); for (let k = 0; k < 6; k++) burst(Audio.white, 2200, 1.5, .05, .25 * v, k * .05, 'bandpass'); },
    torp() { burst(Audio.white, 600, 1, .5, .3); tone(300, .4, 'sine', .1, .5); },
    alarm() { [0, .35].forEach(d => tone(880, .25, 'square', .08, 1, d)); },
    ding() { tone(1320, .12, 'triangle', .12); tone(1760, .16, 'triangle', .1, 1, .06); },
    click() { tone(1100, .04, 'square', .05); },
    win() { [523, 659, 784, 1046].forEach((f, k) => tone(f, .35, 'triangle', .16, 1, k * .12)); },
    lose() { [392, 311, 233].forEach((f, k) => tone(f, .45, 'triangle', .16, 1, k * .18)); },
  };
})();
