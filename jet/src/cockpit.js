// First-person cockpit: the player's own airframe (with a cut-out tub) seen from the pilot's eye,
// plus an instrument panel, glare shield, HUD combiner, consoles, stick, throttle and knees.
import * as THREE from 'three';
import { buildJet, cockpitInfo } from './jetmodel.js';

function canvasTex(w, h, draw) { const c = document.createElement('canvas'); c.width = w; c.height = h; draw(c.getContext('2d'), w, h); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t; }
function panelTex() { return canvasTex(1024, 384, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#2f3338'); gr.addColorStop(1, '#202327'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
  for (let k = 0; k < 2500; k++) { g.fillStyle = `rgba(${Math.random() < .5 ? '255,255,255' : '0,0,0'},.035)`; g.fillRect(Math.random() * w, Math.random() * h, 2, 2); }
  // MFD bezels (screens are separate live canvases)
  [[w * .22], [w * .78]].forEach(([cx]) => { g.fillStyle = '#16181b'; g.fillRect(cx - 170, 40, 340, 270); g.strokeStyle = '#4a4f56'; g.lineWidth = 3; g.strokeRect(cx - 170, 40, 340, 270);
    g.fillStyle = '#3a3e44'; for (let i = 0; i < 5; i++) { g.fillRect(cx - 130 + i * 58, 20, 34, 14); g.fillRect(cx - 130 + i * 58, 316, 34, 14); g.fillRect(cx - 192, 70 + i * 48, 14, 30); g.fillRect(cx + 178, 70 + i * 48, 14, 30); }
    g.fillStyle = '#aab'; g.font = '10px monospace'; ['RDR', 'TGP', 'SMS', 'FCR', 'HSD'].forEach((t, i) => g.fillText(t, cx - 130 + i * 58 + 4, 15)); });
  // centre stack: standby gauges, warning lights, keypad
  const cx = w / 2; [[cx - 62, 92], [cx + 62, 92], [cx - 62, 214], [cx + 62, 214]].forEach(([x, y], i) => { g.fillStyle = '#0d0e10'; g.beginPath(); g.arc(x, y, 48, 0, 7); g.fill(); g.strokeStyle = '#5a5f66'; g.lineWidth = 4; g.stroke();
    g.strokeStyle = '#d8d8d0'; g.lineWidth = 2; for (let a = 0; a < 24; a++) { const r0 = a % 3 ? 40 : 34, an = a / 24 * Math.PI * 2; g.beginPath(); g.moveTo(x + Math.cos(an) * r0, y + Math.sin(an) * r0); g.lineTo(x + Math.cos(an) * 44, y + Math.sin(an) * 44); g.stroke(); }
    if (i === 0) { g.fillStyle = '#3d6fb0'; g.beginPath(); g.arc(x, y, 30, Math.PI, 0); g.fill(); g.fillStyle = '#7a5a36'; g.beginPath(); g.arc(x, y, 30, 0, Math.PI); g.fill(); g.strokeStyle = '#ffcc33'; g.beginPath(); g.moveTo(x - 20, y); g.lineTo(x + 20, y); g.stroke(); }
    else { g.strokeStyle = '#ff8a3d'; g.lineWidth = 3; g.beginPath(); g.moveTo(x, y); g.lineTo(x + Math.cos(i * 1.7) * 32, y + Math.sin(i * 1.7) * 32); g.stroke(); } });
  const ann = ['MASTER CAUTION', 'FUEL', 'HYD', 'ENG', 'OXY', 'GEAR', 'TF FAIL', 'ECM']; ann.forEach((t, i) => { const x = cx - 105 + (i % 4) * 53, y = 300 + Math.floor(i / 4) * 30; g.fillStyle = i === 0 ? '#5a3a10' : '#1d2a1d'; g.fillRect(x, y, 49, 24); g.fillStyle = i === 0 ? '#ffb347' : '#6fae6f'; g.font = 'bold 8px monospace'; g.fillText(t.slice(0, 8), x + 3, y + 15); });
  g.fillStyle = '#c9c9c0'; g.font = 'bold 11px monospace'; g.fillText('ARM', cx - 150, 360); g.fillText('MASTER', cx + 110, 360);
  for (let i = 0; i < 6; i++) { g.fillStyle = '#111'; g.beginPath(); g.arc(cx - 160 + i * 64, 372, 6, 0, 7); g.fill(); }
}); }
function consoleTex() { return canvasTex(256, 512, (g, w, h) => { g.fillStyle = '#2a2d31'; g.fillRect(0, 0, w, h);
  for (let r = 0; r < 7; r++) { g.strokeStyle = '#41464d'; g.lineWidth = 2; g.strokeRect(10, 14 + r * 70, w - 20, 60); g.fillStyle = '#d8d8d0'; g.font = 'bold 10px monospace'; g.fillText(['FUEL', 'ENG', 'LIGHTS', 'RADIO', 'IFF', 'ECS', 'ANTI-ICE'][r], 18, 30 + r * 70);
    for (let s = 0; s < 4; s++) { g.fillStyle = '#121315'; g.beginPath(); g.arc(40 + s * 52, 50 + r * 70, 9, 0, 7); g.fill(); g.fillStyle = '#9aa0a8'; g.fillRect(38 + s * 52, 36 + r * 70, 4, 12); } } }); }

export function buildCockpit(type, paint) {
  const C = cockpitInfo(type, paint), root = new THREE.Group(), jf = new THREE.Group(); root.add(jf); jf.position.set(0, -C.eyeY, -C.eyeZ);
  // the real airframe around you, with the cockpit opening cut out of the skin
  const jet = buildJet(type, paint); jf.add(jet); const cut = { uC: { value: new THREE.Vector4(C.w, C.z0, C.z1, 0) }, uY: { value: new THREE.Vector2(C.y0, C.y1) } };
  jet.traverse(o => { if (!o.isMesh) return; o.castShadow = false;
    if (o.name === 'pilot' || o.name === 'helm' || o.name === 'sill') o.visible = false;
    else if (o.name === 'glass') { o.material = new THREE.MeshBasicMaterial({ color: '#d8e6f0', transparent: true, opacity: .05, side: THREE.DoubleSide, depthWrite: false }); o.renderOrder = 5; }
    else if (o.name === 'paint' || o.name === 'decal') { const m = o.material.clone(); m.onBeforeCompile = sh => { Object.assign(sh.uniforms, cut);
        sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP;').replace('#include <begin_vertex>', '#include <begin_vertex>\nvLP = position;');
        sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying vec3 vLP; uniform vec4 uC; uniform vec2 uY;').replace('void main() {', 'void main() {\nif (abs(vLP.x) < uC.x && vLP.z > uC.y && vLP.z < uC.z && vLP.y > uY.x && vLP.y < uY.y) discard;'); };
      m.customProgramCacheKey = () => 'fpcut-' + o.name; o.material = m; } });
  const E = (x, y, z) => new THREE.Vector3(x, C.eyeY + y, C.eyeZ + z), w = C.w;
  const dark = new THREE.MeshStandardMaterial({ color: '#1b1d20', roughness: .85, metalness: .2 }), frame = new THREE.MeshStandardMaterial({ color: '#33373c', roughness: .5, metalness: .6 });
  const fabric = new THREE.MeshStandardMaterial({ color: '#141517', roughness: 1, map: canvasTex(128, 128, (g, a) => { g.fillStyle = '#26282b'; g.fillRect(0, 0, a, a); for (let k = 0; k < 1600; k++) { g.fillStyle = `rgba(0,0,0,${Math.random() * .25})`; g.fillRect(Math.random() * a, Math.random() * a, 1, 1); } }) });
  const add = (geo, mat, p, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.copy(p); m.rotation.set(rx, ry, rz); jf.add(m); return m; };
  // tub
  const tubM = new THREE.MeshStandardMaterial({ color: '#202327', roughness: .9, side: THREE.DoubleSide }), tl = C.z1 - C.z0, wt = Math.min(C.y1, C.eyeY - .26), th = wt - C.y0;
  [-1, 1].forEach(s => add(new THREE.PlaneGeometry(tl, th), tubM, new THREE.Vector3(s * w, (C.y0 + wt) / 2, (C.z0 + C.z1) / 2), 0, Math.PI / 2));
  add(new THREE.PlaneGeometry(w * 2, tl), tubM, new THREE.Vector3(0, C.y0, (C.z0 + C.z1) / 2), -Math.PI / 2);
  // instrument panel + live MFDs
  const pw = w * 1.92, ph = pw * .375, panel = add(new THREE.PlaneGeometry(pw, ph), new THREE.MeshStandardMaterial({ map: panelTex(), roughness: .8, emissive: '#ffffff', emissiveMap: null, emissiveIntensity: 0 }), E(0, -.34, -.6), -.3);
  const mfd = x => { const c = document.createElement('canvas'); c.width = 128; c.height = 96; const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; const m = new THREE.Mesh(new THREE.PlaneGeometry(pw * .29, pw * .22), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m.position.set(x * pw, ph * .04, .004); panel.add(m); return { c, g: c.getContext('2d'), t }; };
  const mfds = [mfd(-.28), mfd(.28)];
  // glare shield over the panel
  add(new THREE.BoxGeometry(pw * .9, .02, .16), fabric, E(0, -.232, -.64)); add(new THREE.CylinderGeometry(.011, .011, pw * .9, 12), fabric, E(0, -.23, -.56), 0, 0, Math.PI / 2).scale.set(1, 1, .6);
  // HUD combiner: glass panes on a frame
  const hudG = new THREE.MeshPhysicalMaterial({ color: '#b8ffd8', transparent: true, opacity: .1, roughness: 0, metalness: .2, depthWrite: false });
  add(new THREE.PlaneGeometry(.16, .13), hudG, E(0, -.13, -.62), -.25).renderOrder = 4; add(new THREE.PlaneGeometry(.16, .12), hudG, E(0, -.12, -.65), -.2).renderOrder = 4;
  [-1, 1].forEach(s => add(new THREE.BoxGeometry(.007, .13, .007), frame, E(s * .082, -.14, -.63), -.22)); add(new THREE.BoxGeometry(.18, .025, .06), frame, E(0, -.205, -.62));
  // consoles, throttle, stick, ejection handle, knees
  const consM = new THREE.MeshStandardMaterial({ map: consoleTex(), roughness: .8 });
  [-1, 1].forEach(s => { add(new THREE.BoxGeometry(.13, .07, .6), [dark, dark, consM, dark, dark, dark], E(s * (w - .07), -.62, -.05)); });
  const thr = new THREE.Group(); thr.position.copy(E(-(w - .08), -.56, -.14)); thr.rotation.x = -.35; jf.add(thr);
  [[new THREE.BoxGeometry(.025, .14, .025), frame, 0, .07, 0], [new THREE.BoxGeometry(.06, .05, .09), dark, 0, .155, -.01], [new THREE.SphereGeometry(.009, 8, 6), new THREE.MeshBasicMaterial({ color: '#c33' }), .02, .18, -.04]].forEach(([g, m, x, y, z]) => { const me = new THREE.Mesh(g, m); me.position.set(x, y, z); thr.add(me); });
  const stick = new THREE.Group(); stick.position.copy(E(0, -.95, -.42)); jf.add(stick);
  const boot = new THREE.Mesh(new THREE.ConeGeometry(.06, .08, 12), fabric); boot.position.y = .04; stick.add(boot);
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.013, .016, .3, 10), frame); shaft.position.y = .19; stick.add(shaft);
  const grip = new THREE.Mesh(new THREE.CapsuleGeometry(.024, .09, 4, 10), dark); grip.position.set(0, .38, .01); grip.rotation.x = .15; stick.add(grip);
  const trig = new THREE.Mesh(new THREE.BoxGeometry(.012, .02, .014), new THREE.MeshBasicMaterial({ color: '#c22' })); trig.position.set(0, .42, -.024); stick.add(trig);
  const eh = add(new THREE.TorusGeometry(.045, .008, 6, 16, Math.PI), new THREE.MeshStandardMaterial({ color: '#e0b020', roughness: .5 }), E(0, -.74, -.24), -.2); eh.rotation.z = 0;
  const suit = new THREE.MeshStandardMaterial({ color: '#4a5240', roughness: .95 });
  [-1, 1].forEach(s => { const leg = add(new THREE.CapsuleGeometry(.065, .32, 4, 12), suit, E(s * .12, -.75, -.3), Math.PI / 2 - .45); leg.scale.set(1, 1, .9); });
  // small canopy mirrors on the bow
  root.userData = { mfds, stick, msls: jet.userData.msls, eyeY: C.eyeY, eyeZ: C.eyeZ };
  return root;
}
