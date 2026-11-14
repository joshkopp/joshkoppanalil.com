// THE LAST SHIFT — proximity voice chat: WebRTC mesh, signalled over the room's broadcast channel.
const ICE = [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }];

export class Voice {
  constructor(net, sfx, myId) {
    this.net = net; this.sfx = sfx; this.me = myId; net.voice = this; this.peers = new Map(); this.mic = null; this.micOn = false; this.ptt = false; this.pttDown = false; this.level = 0;
    net.on('rtc', m => { if (m.to === this.me) this._signal(m).catch(e => console.warn('rtc', e)); });
  }
  silentTrack() {
    if (!this._silent) { const c = this.sfx.ctx, d = c.createMediaStreamDestination(), o = c.createConstantSource(); o.offset.value = 0; o.connect(d); o.start(); this._silent = d.stream.getAudioTracks()[0]; }
    return this._silent;
  }
  outTrack() { return this.mic && this.micOn ? this.mic.getAudioTracks()[0] : this.silentTrack(); }
  async enableMic() {
    if (!this.mic) {
      this.mic = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      const src = this.sfx.ctx.createMediaStreamSource(this.mic); this.an = this.sfx.ctx.createAnalyser(); this.an.fftSize = 512; src.connect(this.an); this.buf = new Float32Array(512);
    }
    this.micOn = true; this._applyGate(); this._swap();
  }
  disableMic() { this.micOn = false; this._swap(); }
  setPTT(on) { this.ptt = on; this._applyGate(); }
  setTalking(down) { this.pttDown = down; this._applyGate(); }
  _applyGate() { if (this.mic) this.mic.getAudioTracks()[0].enabled = !this.ptt || this.pttDown; }
  _swap() { for (const p of this.peers.values()) if (p.sender) p.sender.replaceTrack(this.outTrack()).catch(() => {}); }
  micLevel() {
    if (!this.an || !this.micOn || (this.ptt && !this.pttDown)) return 0;
    this.an.getFloatTimeDomainData(this.buf); let s = 0; for (const v of this.buf) s += v * v;
    this.level = Math.sqrt(s / this.buf.length); return this.level;
  }
  // keep the mesh in sync with the room
  sync(ids) {
    if (!this.sfx.ctx) return;
    for (const id of ids) if (id !== this.me && !this.peers.has(id) && this.me < id) this._connect(id, true);
    for (const [id, p] of [...this.peers]) if (!ids.includes(id) || (p.pc.connectionState !== 'connected' && Date.now() - p.t0 > 20000)) this.drop(id);
  }
  drop(id) { const p = this.peers.get(id); if (!p) return; try { p.pc.close(); } catch (e) {} if (p.el) p.el.remove(); try { p.out.disconnect(); } catch (e) {} this.peers.delete(id); }
  dropAll() { for (const id of [...this.peers.keys()]) this.drop(id); }
  _make(id) {
    const pc = new RTCPeerConnection({ iceServers: ICE });
    const c = this.sfx.ctx;
    const p = { pc, id, t0: Date.now(), cand: [], gain: c.createGain(), lp: c.createBiquadFilter(), pan: c.createPanner(), an: c.createAnalyser(), lvl: 0 };
    p.lp.type = 'lowpass'; p.lp.frequency.value = 9000; p.pan.panningModel = 'HRTF'; p.pan.distanceModel = 'linear'; p.pan.refDistance = 1; p.pan.maxDistance = 1e4; p.pan.rolloffFactor = 0;
    p.an.fftSize = 256; p.buf = new Float32Array(256);
    p.gain.connect(p.lp); p.lp.connect(p.pan); p.pan.connect(this.sfx.voice); p.out = p.gain;
    p.dr = pc.createDataChannel('r', { negotiated: true, id: 0, ordered: true });
    p.du = pc.createDataChannel('u', { negotiated: true, id: 1, ordered: false, maxRetransmits: 0 });
    for (const dc of [p.dr, p.du]) dc.onmessage = e => { try { const m = JSON.parse(e.data); if (m && m.t) this.net.emit(m.t, m); } catch (er) {} };
    pc.onicecandidate = e => { if (e.candidate) this.net.send({ t: 'rtc', to: id, from: this.me, k: 'ice', d: e.candidate.toJSON() }); };
    pc.ontrack = e => {
      const stream = e.streams[0] || new MediaStream([e.track]);
      // Chrome only feeds WebAudio from a remote stream when an element is also playing it
      const el = new Audio(); el.muted = true; el.srcObject = stream; el.play().catch(() => {}); p.el = el;
      const src = c.createMediaStreamSource(stream); src.connect(p.gain); src.connect(p.an);
    };
    pc.onconnectionstatechange = () => { if (pc.connectionState === 'failed') { this.drop(id); } };
    this.peers.set(id, p); return p;
  }
  async _connect(id) {
    const p = this._make(id);
    p.sender = p.pc.addTrack(this.outTrack(), new MediaStream());
    const off = await p.pc.createOffer(); await p.pc.setLocalDescription(off);
    this.net.send({ t: 'rtc', to: id, from: this.me, k: 'offer', d: p.pc.localDescription.toJSON() });
  }
  async _signal(m) {
    let p = this.peers.get(m.from);
    if (m.k === 'offer') {
      if (p) this.drop(m.from);
      if (!this.sfx.ctx) return;
      p = this._make(m.from);
      await p.pc.setRemoteDescription(m.d);
      p.sender = p.pc.addTrack(this.outTrack(), new MediaStream());
      const ans = await p.pc.createAnswer(); await p.pc.setLocalDescription(ans);
      this.net.send({ t: 'rtc', to: m.from, from: this.me, k: 'answer', d: p.pc.localDescription.toJSON() });
      for (const c of p.cand) await p.pc.addIceCandidate(c).catch(() => {}); p.cand = [];
    } else if (m.k === 'answer' && p) {
      await p.pc.setRemoteDescription(m.d);
      for (const c of p.cand) await p.pc.addIceCandidate(c).catch(() => {}); p.cand = [];
    } else if (m.k === 'ice' && p) {
      if (p.pc.remoteDescription) await p.pc.addIceCandidate(m.d).catch(() => {}); else p.cand.push(m.d);
    }
  }
  // positions: id -> {x,y,z,muffled,gain}; null = full volume (lobby/spectating)
  update(listener, positions) {
    const t = this.sfx.ctx && this.sfx.now;
    for (const [id, p] of this.peers) {
      let g = 1, lp = 9000, pos = listener;
      const q = positions && positions[id];
      if (positions) {
        if (!q) g = 0;
        else {
          const d = Math.hypot(q.x - listener.x, q.y - listener.y, q.z - listener.z);
          g = Math.max(0, Math.min(1, 1 - (d - 3) / 21)); g = g * g * (q.gain == null ? 1 : q.gain);
          if (q.muffled) { g *= 0.55; lp = 700; }
          pos = q;
        }
      }
      p.gain.gain.setTargetAtTime(g, t, 0.08); p.lp.frequency.setTargetAtTime(lp, t, 0.1);
      if (p.pan.positionX) { p.pan.positionX.value = pos.x; p.pan.positionY.value = pos.y; p.pan.positionZ.value = pos.z; }
      p.an.getFloatTimeDomainData(p.buf); let s = 0; for (const v of p.buf) s += v * v; p.lvl = Math.sqrt(s / p.buf.length);
    }
  }
  sendDC(id, msg, reliable) { const p = this.peers.get(id), dc = p && (reliable ? p.dr : p.du); if (!dc || dc.readyState !== 'open') return false; try { dc.send(JSON.stringify(msg)); return true; } catch (e) { return false; } }
  speaking(id) { const p = this.peers.get(id); return p ? p.lvl > 0.02 : false; }
}
