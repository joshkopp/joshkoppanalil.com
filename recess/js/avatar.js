// RECESS — stylized player characters with procedural animation + name tags.
import * as THREE from 'three';

export const COLORS = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#1abc9c', '#ff6fb5', '#ecf0f1', '#34495e', '#a3e048', '#ff8a5c'];
const SKIN = [0xf1c27d, 0xe0ac69, 0xc68642, 0x8d5524, 0xffdbac, 0xa86b4a];
const HAIR = [0x2b1b10, 0x0d0d0d, 0x7a4a1c, 0xd9b36b, 0x8c2a14, 0x3b2a20];
const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };

export function makeAvatar(id, name, color) {
  const h = hash(id), root = new THREE.Group();
  const shirt = new THREE.MeshStandardMaterial({ color: new THREE.Color(color), roughness: 0.7 });
  const pants = new THREE.MeshStandardMaterial({ color: [0x2c3e50, 0x34302a, 0x1f2a44, 0x4a4a4a][h % 4], roughness: 0.85 });
  const skin = new THREE.MeshStandardMaterial({ color: SKIN[h % SKIN.length], roughness: 0.65 });
  const hair = new THREE.MeshStandardMaterial({ color: HAIR[(h >> 3) % HAIR.length], roughness: 0.9 });
  const shoe = new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.6 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 });
  const seg = (r, l, m) => { const g = new THREE.CapsuleGeometry(r, l, 4, 10); g.translate(0, -l / 2 - r * 0.4, 0); const me = new THREE.Mesh(g, m); me.castShadow = true; return me; };
  const body = new THREE.Group(); root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.88; body.add(hips);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.21, 0.36, 6, 12), shirt); torso.position.y = 0.34; torso.scale.set(1.05, 1, 0.72); torso.castShadow = true; hips.add(torso);
  const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 8), pants); pelvis.scale.set(1.05, 0.6, 0.75); pelvis.position.y = 0.04; hips.add(pelvis);
  const neck = new THREE.Group(); neck.position.y = 0.66; hips.add(neck);
  const head = new THREE.Group(); head.position.y = 0.16; neck.add(head);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.17, 18, 14), skin); skull.scale.set(0.95, 1.05, 1); skull.castShadow = true; head.add(skull);
  const style = (h >> 6) % 3;
  const hr = new THREE.Mesh(new THREE.SphereGeometry(0.18, 18, 12, 0, Math.PI * 2, 0, style === 2 ? Math.PI * 0.62 : Math.PI * 0.5), hair); hr.position.y = 0.02; hr.rotation.x = -0.3; head.add(hr);
  if (style === 1) { const pony = new THREE.Mesh(new THREE.CapsuleGeometry(0.05, 0.16, 4, 8), hair); pony.position.set(0, -0.02, -0.17); pony.rotation.x = 0.5; head.add(pony); }
  for (const s of [-1, 1]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.022, 8, 6), dark); e.position.set(s * 0.06, 0.02, 0.155); head.add(e); }
  const cap = new THREE.Group(); const capM = new THREE.MeshStandardMaterial({ color: 0xd62828, roughness: 0.6 });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.185, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), capM); dome.position.y = 0.04; cap.add(dome);
  const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, 0.02, 16, 1, false, -Math.PI / 2, Math.PI), capM); brim.position.set(0, 0.05, 0.1); brim.scale.z = 1.4; cap.add(brim);
  cap.visible = false; head.add(cap);
  const legs = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * 0.1, 0, 0); hips.add(p); p.add(seg(0.08, 0.34, pants)); const k = new THREE.Group(); k.position.y = -0.44; p.add(k); k.add(seg(0.07, 0.32, pants)); const sh = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.08, 0.26), shoe); sh.position.set(0, -0.43, 0.05); sh.castShadow = true; k.add(sh); return [p, k]; });
  const arms = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * 0.27, 0.56, 0); hips.add(p); p.add(seg(0.06, 0.22, shirt)); const e = new THREE.Group(); e.position.y = -0.32; p.add(e); e.add(seg(0.05, 0.2, skin)); return [p, e]; });
  // flashlight (hide & seek)
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.2, 10), dark); fl.rotation.x = Math.PI / 2; fl.position.set(0, -0.32, 0.08); fl.visible = false; arms[1][1].add(fl);
  // IT ring
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.45, 0.6, 32), new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.4, 0.2), transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 0.03; ring.visible = false; root.add(ring);
  // soft contact shadow
  const blob = new THREE.Mesh(new THREE.CircleGeometry(0.42, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false })); blob.rotation.x = -Math.PI / 2; blob.position.y = 0.015; root.add(blob);
  // name tag
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128; const cx = cv.getContext('2d');
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
  const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, fog: false })); tag.scale.set(1.5, 0.375, 1); tag.position.y = 2.15; tag.renderOrder = 20; root.add(tag);
  let tagKey = '';
  const drawTag = (speaking, label) => {
    const key = speaking + '|' + label; if (key === tagKey) return; tagKey = key;
    cx.clearRect(0, 0, 512, 128); cx.font = '600 52px Outfit, Arial, sans-serif'; cx.textAlign = 'center'; cx.textBaseline = 'middle';
    const w = Math.min(500, cx.measureText(name).width + (speaking ? 120 : 60));
    cx.fillStyle = label === 'IT' ? 'rgba(200,30,30,.85)' : 'rgba(10,12,18,.62)'; const x0 = 256 - w / 2; cx.beginPath(); cx.roundRect(x0, 22, w, 84, 42); cx.fill();
    cx.fillStyle = '#fff'; cx.fillText(name, 256 + (speaking ? 26 : 0), 66);
    if (speaking) { cx.fillStyle = '#5dff8f'; cx.beginPath(); cx.arc(x0 + 46, 64, 16, 0, 7); cx.fill(); cx.strokeStyle = '#5dff8f'; cx.lineWidth = 5; cx.beginPath(); cx.arc(x0 + 46, 64, 26, -0.9, 0.9); cx.stroke(); }
    if (label) { cx.font = '800 30px Outfit, Arial'; cx.fillStyle = '#ffde59'; cx.fillText(label, 256, 12 + 4); }
    tex.needsUpdate = true;
  };
  drawTag(false, '');
  // shield bubble, emote bubble
  const bubble = new THREE.Mesh(new THREE.SphereGeometry(1.0, 20, 14), new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 1.4, 2.2), transparent: true, opacity: 0.22, depthWrite: false }));
  bubble.position.y = 0.95; bubble.visible = false; root.add(bubble);
  const ecv = document.createElement('canvas'); ecv.width = ecv.height = 128; const ecx = ecv.getContext('2d'); const etex = new THREE.CanvasTexture(ecv);
  const esp = new THREE.Sprite(new THREE.SpriteMaterial({ map: etex, transparent: true, depthTest: false, fog: false })); esp.scale.set(0.75, 0.75, 1); esp.position.y = 2.75; esp.visible = false; esp.renderOrder = 21; root.add(esp);
  let em = null, cloaked = false, ringHex = 0;
  const emote = (glyph, kind) => { ecx.clearRect(0, 0, 128, 128); ecx.font = '96px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif'; ecx.textAlign = 'center'; ecx.textBaseline = 'middle'; ecx.fillText(glyph, 64, 70); etex.needsUpdate = true; em = { t: 2.6, kind }; esp.visible = true; };
  let ph = 0, air = 0;
  // s: {speed, crouch, jump(air), it, seeker, speaking, label, t, pitch, flash}
  const update = (dt, s) => {
    drawTag(!!s.speaking, s.label || '');
    const rc = s.ringColor || 0xff4d33; if (rc !== ringHex) { ringHex = rc; ring.material.color.set(rc).multiplyScalar(2.5); }
    bubble.visible = !!s.shield; if (s.shield) { bubble.material.opacity = 0.16 + 0.08 * Math.sin(s.t * 6); bubble.rotation.y += dt; }
    if (!!s.cloak !== cloaked) { cloaked = !!s.cloak; body.traverse(o => { if (o.material) { o.material.transparent = cloaked; o.material.opacity = cloaked ? 0.12 : 1; } }); tag.visible = !cloaked; blob.visible = !cloaked; }
    if (em) { em.t -= dt; esp.position.y = 2.75 + Math.sin(s.t * 6) * 0.06; esp.material.opacity = Math.min(1, em.t * 2); if (em.t <= 0) { em = null; esp.visible = false; body.rotation.y = 0; } }
    ring.visible = !!s.it; if (s.it) { ring.material.opacity = 0.55 + 0.3 * Math.sin(s.t * 8); ring.scale.setScalar(1 + 0.08 * Math.sin(s.t * 8)); }
    cap.visible = !!(s.it || s.seeker); fl.visible = !!s.flash;
    const k = Math.min(1.4, s.speed / 3.2); ph += dt * (4 + s.speed * 2.2) * (k > 0.05 ? 1 : 0.2);
    air += ((s.air ? 1 : 0) - air) * Math.min(1, dt * 12);
    body.position.y = s.crouch ? -0.32 : Math.abs(Math.sin(ph)) * 0.05 * k;
    hips.rotation.x = s.crouch ? 0.35 : 0.08 * k;
    legs.forEach(([p, kn], i) => { const sg = i ? 1 : -1; p.rotation.x = Math.sin(ph) * 0.75 * k * sg * (1 - air) - (s.crouch ? 1.1 : 0) - air * 0.8; kn.rotation.x = Math.max(0, Math.sin(ph + (i ? 0 : Math.PI) - 0.7)) * 1.1 * k * (1 - air) + (s.crouch ? 1.7 : 0) + air * 1.3; });
    arms.forEach(([p, e], i) => { const sg = i ? -1 : 1; p.rotation.x = Math.sin(ph) * 0.7 * k * sg - air * 2.4 * (i ? 1 : 0.6); p.rotation.z = (i ? -1 : 1) * (0.08 + air * 0.4); e.rotation.x = -0.35 - k * 0.5; });
    if (s.flash) { arms[1][0].rotation.x = -1.2 - (s.pitch || 0) * 0.8; arms[1][1].rotation.x = -0.1; }
    head.rotation.x = -(s.pitch || 0) * 0.5 + (s.crouch ? -0.3 : 0);
    torso.scale.y = 1 + Math.sin(s.t * 2.2) * 0.012;
    if (em && em.kind === 'dance') { body.rotation.y = s.t * 7; body.position.y += Math.abs(Math.sin(s.t * 10)) * 0.18; arms.forEach(([p], i) => { p.rotation.x = -2.6 + Math.sin(s.t * 10 + i * 3) * 0.5; }); }
    else if (em && em.kind === 'wave') { arms[0][0].rotation.x = -2.8; arms[0][0].rotation.z = 0.3 + Math.sin(s.t * 14) * 0.4; }
    else if (em && em.kind === 'hype') { arms.forEach(([p]) => { p.rotation.x = -3.0; }); body.position.y += Math.abs(Math.sin(s.t * 12)) * 0.12; }
  };
  return { group: root, update, tag, emote, setOpacity: v => root.traverse(o => { if (o.material && o !== tag) { o.material.transparent = v < 1; o.material.opacity = v; } }) };
}
