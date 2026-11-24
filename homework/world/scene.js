// The Back Room 3D: the casino floor. Every game has a station you can walk up to.
import * as THREE from 'three';
import { canvasTex, glow, glowMap, carpetTex, panelTex, ceilTex, neonText, cardBackTex, cardFaceTex, arcText, rr, FONT, SERIF } from './tex.js';
import { makeAvatar } from './avatar.js';

export const HALL = { x0: -30, x1: 30, z0: -22, z1: 22, h: 7.2 };
const TAU = Math.PI * 2;
const R = (a, b) => a + Math.random() * (b - a);
export const yawTo = (sx, sz, tx, tz) => Math.atan2(-(tx - sx), -(tz - sz));

export function buildCasino(scene, opts = {}) {
  const stations = [], colliders = [], updaters = [], pointSpots = [], dealers = [], screens = {};
  const M = {
    gold: new THREE.MeshStandardMaterial({ color: 0xd9aa4c, metalness: 1, roughness: .28 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xb68a3a, metalness: .9, roughness: .4 }),
    chrome: new THREE.MeshStandardMaterial({ color: 0x9a9aa4, metalness: 1, roughness: .36 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x4a2412, roughness: .5 }),
    woodDark: new THREE.MeshStandardMaterial({ color: 0x1d0e07, roughness: .55 }),
    leather: new THREE.MeshStandardMaterial({ color: 0x2a0a0c, roughness: .42 }),
    black: new THREE.MeshStandardMaterial({ color: 0x0c0c0f, roughness: .45 }),
    marble: new THREE.MeshStandardMaterial({ color: 0xcfc6b6, roughness: .32, metalness: 0 }),
    velvet: new THREE.MeshStandardMaterial({ color: 0x7a0f1c, roughness: .95 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x9fd8ff, roughness: .05, metalness: .1, transparent: true, opacity: .16, depthWrite: false }),
    red: new THREE.MeshStandardMaterial({ color: 0xb3122e, roughness: .4, metalness: .2 }),
    white: new THREE.MeshStandardMaterial({ color: 0xf4f1ea, roughness: .5 }),
  };
  const box = (w, h, d, m) => new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  const cyl = (rt, rb, h, m, seg = 24) => new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
  function add(p, mesh, x = 0, y = 0, z = 0, sh) { mesh.position.set(x, y, z); if (sh) { mesh.castShadow = sh !== 'r'; mesh.receiveShadow = true; } p.add(mesh); return mesh; }
  function place(g, x, z, ry = 0) { g.position.set(x, 0, z); g.rotation.y = ry; scene.add(g); g.updateMatrixWorld(true); return g; }
  const toW = (g, lx, lz, ly = 0) => g.localToWorld(new THREE.Vector3(lx, ly, lz));
  const circ = (x, z, r, h) => colliders.push({ t: 'c', x, z, r, h });
  const boxC = (g, lx, lz, hw, hd) => { // oriented box collider in the group's frame
    const c = toW(g, lx, lz); colliders.push({ t: 'b', x: c.x, z: c.z, hw, hd, a: g.rotation.y });
  };

  /* ------------------------------------------------ labels above stations */
  function label(text, sub, col = '#e8c46a') {
    const t = canvasTex(512, 170, (g, w, h) => {
      g.clearRect(0, 0, w, h); g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = `900 64px ${SERIF}`; const tw = Math.min(480, g.measureText(text).width + 70);
      const gr = g.createLinearGradient(0, 14, 0, 110); gr.addColorStop(0, 'rgba(36,24,10,.92)'); gr.addColorStop(1, 'rgba(10,7,4,.92)');
      g.fillStyle = gr; rr(g, 256 - tw / 2, 14, tw, 96, 30); g.fill(); g.strokeStyle = col; g.lineWidth = 4; rr(g, 256 - tw / 2, 14, tw, 96, 30); g.stroke();
      g.fillStyle = col; g.shadowColor = col; g.shadowBlur = 14; g.fillText(text, 256, 64, 450); g.shadowBlur = 0;
      if (sub) { g.font = `700 30px ${FONT}`; g.fillStyle = 'rgba(255,240,210,.85)'; g.fillText(sub, 256, 140); }
    });
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, fog: false }));
    sp.scale.set(2.6, .86, 1); sp.renderOrder = 10; return sp;
  }
  /** register a game station. hot = local point where the player stands, seats = [[lx,lz,ly]] */
  function station(id, name, g, { hot = [0, 2], r = 1.7, seats, lbl = [0, 3.2, 0], look, sub, labelText } = {}) {
    const h = toW(g, hot[0], hot[1]), L = lbl && label(labelText || name, sub);
    if (L) { L.position.copy(toW(g, lbl[0], lbl[2], lbl[1])); scene.add(L); }
    const lookAt = look ? toW(g, look[0], look[1]) : g.position;
    const st = { id, name, x: h.x, z: h.z, r, label: L, baseY: L ? L.position.y : 0, seats: [] };
    const S = seats || [[hot[0], hot[1]]];
    for (const s of S) { const w = toW(g, s[0], s[1]); st.seats.push({ x: w.x, z: w.z, y: s[2] || 0, yaw: yawTo(w.x, w.z, lookAt.x, lookAt.z), sit: s[2] != null }); }
    stations.push(st); return st;
  }
  function dealer(g, lx, lz, lookC, outfit = 'dealer', name = 'Dealer') {
    const a = makeAvatar({ outfit, suit: '#111', skin: ['#f1c27d', '#c68642', '#8d5524', '#ffdbac', '#e0ac69'][dealers.length % 5], hair: ['#0d0d0d', '#2b1b10', '#7a4a1c'][dealers.length % 3], hat: 'none' }, { name, npc: true });
    const w = toW(g, lx, lz); a.root.position.copy(w); const t = lookC ? toW(g, lookC[0], lookC[1]) : g.position; a.root.rotation.y = yawTo(w.x, w.z, t.x, t.z);
    a.tag.visible = false; scene.add(a.root); dealers.push(a); circ(w.x, w.z, .35); return a;
  }
  function stool(p, x, z, h = .78) {
    const s = new THREE.Group(); s.position.set(x, 0, z); p.add(s);
    add(s, cyl(.24, .26, .1, M.leather, 20), 0, h, 0, true); add(s, cyl(.26, .26, .03, M.gold, 20), 0, h - .06, 0);
    add(s, cyl(.035, .035, h - .05, M.chrome, 10), 0, (h - .05) / 2, 0); add(s, cyl(.22, .26, .04, M.black, 20), 0, .02, 0);
    add(s, new THREE.Mesh(new THREE.TorusGeometry(.17, .015, 6, 20), M.chrome), 0, .32, 0).rotation.x = Math.PI / 2;
    return s;
  }
  function chipStack(p, x, z, n, color, y = 0) {
    const m = new THREE.MeshStandardMaterial({ color, roughness: .4 });
    const c = add(p, cyl(.045, .045, .012 * n, m, 16), x, y + .006 * n, z); c.castShadow = true; return c;
  }

  /* ================================================= the hall */
  const carpetMat = new THREE.MeshStandardMaterial({ map: carpetTex(['#3a0b14', '#b8892e', '#0f5a4a', '#5a1420']), roughness: .95 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(HALL.x1 - HALL.x0, HALL.z1 - HALL.z0), carpetMat); floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true; scene.add(floor);
  // marble promenade from the entrance + ring round the bar
  const prom = new THREE.Mesh(new THREE.PlaneGeometry(4.4, 16), M.marble); prom.rotation.x = -Math.PI / 2; prom.position.set(0, .006, 14); prom.receiveShadow = true; scene.add(prom);
  const ringF = new THREE.Mesh(new THREE.RingGeometry(3.3, 5.6, 64), M.marble); ringF.rotation.x = -Math.PI / 2; ringF.position.set(0, .007, 2); ringF.receiveShadow = true; scene.add(ringF);
  for (const r of [3.35, 5.55]) { const t = new THREE.Mesh(new THREE.RingGeometry(r - .05, r + .05, 64), M.gold); t.rotation.x = -Math.PI / 2; t.position.set(0, .009, 2); scene.add(t); }
  for (const s of [-1, 1]) { const t = new THREE.Mesh(new THREE.PlaneGeometry(.1, 16), M.gold); t.rotation.x = -Math.PI / 2; t.position.set(s * 2.2, .009, 14); scene.add(t); }

  const wallMat = new THREE.MeshStandardMaterial({ map: panelTex(), roughness: .6 });
  const W = HALL.x1 - HALL.x0, D = HALL.z1 - HALL.z0, H = HALL.h;
  for (const [w, x, z, ry] of [[W, 0, HALL.z0, 0], [W, 0, HALL.z1, Math.PI], [D, HALL.x0, 0, Math.PI / 2], [D, HALL.x1, 0, -Math.PI / 2]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), wallMat.clone()); m.material.map = wallMat.map.clone(); m.material.map.repeat.set(w / 5, 1); m.material.map.needsUpdate = true;
    m.position.set(x, H / 2, z); m.rotation.y = ry; m.receiveShadow = true; scene.add(m);
    // gold trims + glowing cove strip
    const tr = new THREE.Mesh(new THREE.BoxGeometry(w, .08, .06), M.gold); tr.position.set(x, 1.1, z); tr.rotation.y = ry; tr.translateZ(.03); scene.add(tr);
    const base = new THREE.Mesh(new THREE.BoxGeometry(w, .22, .08), M.woodDark); base.position.set(x, .11, z); base.rotation.y = ry; base.translateZ(.04); scene.add(base);
    const cove = new THREE.Mesh(new THREE.BoxGeometry(w, .05, .05), glow('#ffb347', 2.2)); cove.position.set(x, H - .3, z); cove.rotation.y = ry; cove.translateZ(.1); scene.add(cove);
  }
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, D), new THREE.MeshStandardMaterial({ map: ceilTex(), roughness: .9 })); ceil.rotation.x = Math.PI / 2; ceil.position.y = H; scene.add(ceil);

  // columns
  for (const [x, z] of [[-4.6, -12.5], [4.6, -12.5], [-4.6, 12.5], [4.6, 12.5], [-20.5, -19.5], [20.5, 19.5]]) {
    const c = new THREE.Group(); c.position.set(x, 0, z); scene.add(c);
    add(c, cyl(.5, .5, H, M.woodDark, 24), 0, H / 2, 0, true);
    for (const y of [.15, 1.1, H - .5]) add(c, cyl(.56, .56, y === .15 ? .3 : .12, M.gold, 24), 0, y, 0);
    for (let i = 0; i < 8; i++) { const a = i / 8 * TAU; add(c, box(.05, H - 1.4, .05, M.gold), Math.sin(a) * .5, H / 2 + .2, Math.cos(a) * .5); }
    colliders.push({ t: 'c', x, z, r: .65, h: 9 });
  }

  // entrance doors (south wall)
  { const g = new THREE.Group(); place(g, 0, HALL.z1 - .05, Math.PI);
    add(g, box(5.4, 4, .2, M.gold), 0, 2, -.02); add(g, box(5, 3.7, .22, M.black), 0, 1.85, 0);
    for (const s of [-1, 1]) { add(g, box(2.3, 3.5, .1, new THREE.MeshStandardMaterial({ color: 0x1a0d06, roughness: .3, metalness: .4 })), s * 1.22, 1.78, .1); add(g, cyl(.04, .04, 1.4, M.gold, 10), s * .3, 1.6, .2); }
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(6, 1.5), glowMap(neonText('ENTRANCE', { color: '#ff5a6a', size: 120 }), 1.3, { transparent: true, depthWrite: false })); sign.position.set(0, 4.7, .2); g.add(sign);
  }
  // velvet ropes along the promenade
  for (const s of [-1, 1]) {
    for (let z = 8.5; z <= 20; z += 2.3) {
      const p = new THREE.Group(); p.position.set(s * 2.6, 0, z); scene.add(p);
      add(p, cyl(.18, .2, .05, M.gold, 16), 0, .025, 0); add(p, cyl(.03, .03, .95, M.gold, 10), 0, .5, 0); add(p, new THREE.Mesh(new THREE.SphereGeometry(.06, 12, 8), M.gold), 0, 1, 0);
      if (z + 2.3 <= 20.1) { const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, .92, 0), new THREE.Vector3(0, .7, 1.15), new THREE.Vector3(0, .92, 2.3)]); add(p, new THREE.Mesh(new THREE.TubeGeometry(curve, 12, .03, 6), M.velvet)); }
    }
    colliders.push({ t: 'b', x: s * 2.6, z: 14.2, hw: .12, hd: 5.9, a: 0 });
  }

  /* ------------------------------------------------ zone signs */
  function hangSign(text, x, y, z, ry, color, w = 7) {
    const t = neonText(text, { color, size: 130 });
    const m = new THREE.Group(), mat = glowMap(t, 1.35, { transparent: true, depthWrite: false });
    for (const r of [0, Math.PI]) { const f = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), mat); f.rotation.y = r; f.position.z = r ? -.01 : .01; m.add(f); }
    m.position.set(x, y, z); m.rotation.y = ry; scene.add(m);
    for (const s of [-1, 1]) { const c = cyl(.012, .012, H - y - .9, M.chrome, 6); c.position.set(x + Math.cos(ry) * s * w * .4, (H + y + .9) / 2, z - Math.sin(ry) * s * w * .4); scene.add(c); }
    return m;
  }
  { const t = neonText('THE BACK ROOM', { color: '#ffd36b', size: 150, sub: 'MEMBERS ONLY · PLAY MONEY · REAL THRILLS', subColor: '#ff7a8a' });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(12, 3), glowMap(t, 1.15, { transparent: true, depthWrite: false })); m.position.set(0, 5.75, HALL.z0 + .1); scene.add(m); }
  hangSign('TABLE GAMES', -12.5, 5.3, 10.5, 0, '#ff4d6d');
  hangSign('THE ARCADE', 16, 5.3, 10.5, 0, '#57c7ff');
  hangSign('SLOTS', -26.5, 5.4, -5, Math.PI / 2, '#ffd36b', 5);

  /* ------------------------------------------------ chandeliers */
  const chandeliers = [];
  function chandelier(x, z, s = 1) {
    const g = new THREE.Group(); g.position.set(x, H - 1.2 * s, z); scene.add(g);
    add(g, cyl(.02, .02, 1.2 * s, M.gold, 6), 0, .6 * s, 0);
    const ringR = [1.2, .85, .5].map(r => r * s);
    ringR.forEach((r, i) => { const t = new THREE.Mesh(new THREE.TorusGeometry(r, .035 * s, 8, 40), M.gold); t.rotation.x = Math.PI / 2; t.position.y = -i * .32 * s; g.add(t); });
    const n = 54, cm = glow('#fff1d0', 1.9), geo = new THREE.OctahedronGeometry(.06 * s, 0), inst = new THREE.InstancedMesh(geo, cm, n), d = new THREE.Object3D();
    for (let i = 0; i < n; i++) { const ri = i % 3, a = i / n * TAU * 3 + ri, r = ringR[ri]; d.position.set(Math.cos(a) * r, -ri * .32 * s - .12 - Math.random() * .25 * s, Math.sin(a) * r); d.scale.set(1, 2.2, 1); d.updateMatrix(); inst.setMatrixAt(i, d.matrix); }
    g.add(inst);
    const core = new THREE.Mesh(new THREE.SphereGeometry(.26 * s, 16, 12), glow('#ffe2a8', 2.2)); core.position.y = -.5 * s; g.add(core);
    chandeliers.push(g); pointSpots.push({ x, y: H - 1.9 * s, z, c: 0xffd59a, i: 1.4 * s, d: 18 * s });
    updaters.push((dt, t) => { g.rotation.y = t * .05; });
  }
  chandelier(0, 2, 1.5); chandelier(-12, -1, 1); chandelier(14, -1, 1); chandelier(0, -12, 1); chandelier(-12, 15, .9); chandelier(15, 15, .9);
  pointSpots.push({ x: -22, y: 5, z: -2, c: 0xff9a6a, i: 1, d: 16 }, { x: 24, y: 5, z: -10, c: 0x7ab8ff, i: 1, d: 16 });

  /* ================================================= table games */
  const feltTex = (color, lines, kind) => canvasTex(1024, 1024, (g, w) => {
    const c = w / 2, Rr = w / 2;
    const gr = g.createRadialGradient(c, c, 0, c, c, Rr); gr.addColorStop(0, color[0]); gr.addColorStop(1, color[1]); g.fillStyle = gr; g.fillRect(0, 0, w, w);
    g.strokeStyle = 'rgba(255,230,170,.7)'; g.lineWidth = 6; g.beginPath(); g.arc(c, c, Rr * .93, 0, Math.PI); g.stroke();
    arcText(g, lines[0], c, c, Rr * .63, 1.35, `900 46px ${SERIF}`, '#f1d488');
    arcText(g, lines[1], c, c, Rr * .52, 1.05, `700 26px ${FONT}`, 'rgba(255,240,210,.85)');
    if (kind === 'bj') for (let i = 0; i < 5; i++) { const a = Math.PI * (.14 + i * .18); g.strokeStyle = 'rgba(255,240,210,.8)'; g.lineWidth = 4; g.beginPath(); g.arc(c + Math.cos(a) * Rr * .79, c + Math.sin(a) * Rr * .79, 44, 0, TAU); g.stroke(); }
    if (kind === 'bacc') { [['PLAYER', '#57c7ff', .55], ['BANKER', '#ff6f7f', .39], ['TIE 8:1', '#5cff9d', .27]].forEach(([t, col, rad]) => { g.strokeStyle = col; g.lineWidth = 5; g.beginPath(); g.arc(c, c, Rr * rad + 40, .12 * Math.PI, .88 * Math.PI); g.stroke(); arcText(g, t, c, c, Rr * rad + 70, .5, `900 34px ${FONT}`, col); }); }
    g.fillStyle = 'rgba(255,255,255,.08)'; g.fillRect(c - 120, c + 40, 240, 70);
  });
  function cardTable(id, name, x, z, ry, felt, lines, kind) {
    const g = new THREE.Group(); place(g, x, z, ry);
    const Rt = 2.0;
    const half = (r) => { const s = new THREE.Shape(); s.moveTo(r, 0); s.absarc(0, 0, r, 0, -Math.PI, true); s.lineTo(r, 0); return s; };
    const ex = (shape, depth, m) => { const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: 40 }); geo.rotateX(-Math.PI / 2); const me = new THREE.Mesh(geo, m); return me; };
    // shape y<0 → after rotateX(-90°) z>0 (player side); extrusion grows upward
    const tex = feltTex(felt, lines, kind); tex.repeat.set(1 / (2 * Rt), 1 / (2 * Rt)); tex.offset.set(.5, .5);
    const feltM = new THREE.MeshStandardMaterial({ map: tex, roughness: .95 });
    const top = ex(half(Rt), .04, [feltM, M.leather]); top.position.y = .80; top.receiveShadow = true; g.add(top);
    const ring = new THREE.Shape(); ring.moveTo(Rt + .28, 0); ring.absarc(0, 0, Rt + .28, 0, -Math.PI, true); ring.lineTo(-Rt, 0); ring.absarc(0, 0, Rt, -Math.PI, 0, false); ring.lineTo(Rt + .28, 0);
    const rail = ex(ring, .1, M.leather); rail.position.y = .83; rail.castShadow = true; g.add(rail);
    const trim = ex(ring, .02, M.gold); trim.position.y = .815; trim.scale.set(1.002, 1, 1.002); g.add(trim);
    const base = ex(half(Rt - .25), .7, M.woodDark); base.position.y = .1; base.castShadow = true; g.add(base);
    add(g, box(2 * Rt + .56, .2, .3, M.wood), 0, .86, -.12, true);
    // dealer gear: chip tray, shoe, cards
    add(g, box(1, .05, .3, M.black), 0, .9, .2); const cols = [0xd4143a, 0x1f6fd1, 0x1d1d1d, 0x2f9e4f, 0xe8c46a, 0x8a2be2];
    for (let i = 0; i < 12; i++) chipStack(g, -.42 + i * .077, .2, 6 + (i * 7) % 9, cols[i % 6], .92);
    add(g, box(.24, .14, .38, M.red), .9, .95, .35, true).rotation.y = -.3;
    const back = new THREE.MeshStandardMaterial({ map: cardBackTex(), roughness: .6 });
    const faces = [['A', '♠'], ['K', '♥'], ['10', '♦'], ['Q', '♣'], ['7', '♥'], ['J', '♠']].map(([r, s]) => new THREE.MeshStandardMaterial({ map: cardFaceTex(r, s), roughness: .6 }));
    const cardG = new THREE.PlaneGeometry(.13, .18);
    for (let i = 0; i < 5; i++) { const a = Math.PI * (.14 + i * .18); for (let k = 0; k < 2; k++) { const c = new THREE.Mesh(cardG, (i + k) % 3 ? faces[(i * 2 + k) % 6] : back); c.rotation.x = -Math.PI / 2; c.rotation.z = -(a - Math.PI / 2) + (k - .5) * .2; c.position.set(Math.cos(a) * Rt * .68 + k * .05, .883 + k * .001, Math.sin(a) * Rt * .68); g.add(c); } }
    for (let k = 0; k < 2; k++) { const c = new THREE.Mesh(cardG, k ? back : faces[1]); c.rotation.x = -Math.PI / 2; c.position.set(-.1 + k * .16, .883, .55); g.add(c); }
    // betting chips on felt
    for (let i = 0; i < 5; i++) { const a = Math.PI * (.14 + i * .18); if (i % 2 === 0) chipStack(g, Math.cos(a) * Rt * .79, Math.sin(a) * Rt * .79, 3 + i, cols[i], .884); }
    const seats = [];
    for (let i = 0; i < 5; i++) { const a = Math.PI * (.14 + i * .18), sx = Math.cos(a) * (Rt + .72), sz = Math.sin(a) * (Rt + .72); stool(g, sx, sz); seats.push([sx, sz, .78]); }
    dealer(g, 0, -.5, [0, 2]);
    const L = new THREE.Group(); // little dealer lamp
    add(g, cyl(.02, .02, 2.2, M.chrome, 8), 0, 1.9 + .6, -.3); add(g, cyl(.5, .7, .25, M.gold, 24), 0, 3.5, -.3);
    const lamp = add(g, new THREE.Mesh(new THREE.CircleGeometry(.66, 24), glow('#ffe7b8', 2)), 0, 3.37, -.3); lamp.rotation.x = Math.PI / 2;
    circ(x, z, Rt + .3); { const w = toW(g, 0, -.3); circ(w.x, w.z, 1.1); }
    pointSpots.push({ x, y: 3.2, z, c: 0xffe2b0, i: .75, d: 7, spot: true });
    return station(id, name, g, { hot: [0, Rt + .9], r: Rt + 1.6, seats, lbl: [0, 4.2, -.3], look: [0, 0] });
  }
  cardTable('bj', 'Blackjack', -8.5, -7.5, 0, ['#0f6b4b', '#063524'], ['BLACKJACK PAYS 3 TO 2', 'DEALER MUST STAND ON ALL 17s · INSURANCE PAYS 2 TO 1'], 'bj');
  cardTable('bj', 'Blackjack', -16.5, -7.5, 0, ['#0f5f6b', '#06303a'], ['BLACKJACK PAYS 3 TO 2', 'DEALER MUST STAND ON ALL 17s · INSURANCE PAYS 2 TO 1'], 'bj');
  cardTable('bacc', 'Baccarat', -9, 8, Math.PI, ['#8a1028', '#3d0612'], ['BACCARAT', 'BANKER PAYS 0.95 TO 1 · TIE PAYS 8 TO 1'], 'bacc');

  /* roulette */
  const RED = new Set([1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]), ORDER = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
  const rotorTex = canvasTex(1024, 1024, (g, w) => {
    const c = w / 2; g.fillStyle = '#3b1d0b'; g.fillRect(0, 0, w, w); const n = 37, step = TAU / n;
    for (let i = 0; i < n; i++) { const v = ORDER[i]; g.fillStyle = v === 0 ? '#0e7a3e' : RED.has(v) ? '#b3122e' : '#111'; g.beginPath(); g.moveTo(c, c); g.arc(c, c, c * .98, i * step - step / 2, i * step + step / 2); g.closePath(); g.fill();
      g.save(); g.translate(c, c); g.rotate(i * step + Math.PI / 2); g.fillStyle = '#fff'; g.font = `800 40px ${FONT}`; g.textAlign = 'center'; g.fillText(v, 0, -c * .86); g.restore(); }
    g.strokeStyle = '#e8c46a'; g.lineWidth = 6; for (let i = 0; i < n; i++) { const a = i * step - step / 2; g.beginPath(); g.moveTo(c + Math.cos(a) * c * .62, c + Math.sin(a) * c * .62); g.lineTo(c + Math.cos(a) * c * .98, c + Math.sin(a) * c * .98); g.stroke(); }
    const gr = g.createRadialGradient(c, c, 0, c, c, c * .62); gr.addColorStop(0, '#d9aa4c'); gr.addColorStop(.3, '#5a2d12'); gr.addColorStop(1, '#2a1408'); g.fillStyle = gr; g.beginPath(); g.arc(c, c, c * .62, 0, TAU); g.fill();
    g.strokeStyle = '#e8c46a'; g.lineWidth = 8; for (let i = 0; i < 4; i++) { g.beginPath(); g.moveTo(c, c); const a = i * Math.PI / 2; g.lineTo(c + Math.cos(a) * c * .58, c + Math.sin(a) * c * .58); g.stroke(); }
  });
  const layoutTex = canvasTex(1024, 420, (g, w, h) => {
    g.fillStyle = '#0d5e40'; g.fillRect(0, 0, w, h); g.strokeStyle = '#f1e6c8'; g.lineWidth = 3; g.font = `800 30px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle';
    const x0 = 90, cw = (w - x0 - 80) / 12, ch = 80;
    g.fillStyle = '#0e7a3e'; g.fillRect(14, 20, x0 - 14, ch * 3); g.strokeRect(14, 20, x0 - 14, ch * 3); g.fillStyle = '#fff'; g.fillText('0', 52, 20 + ch * 1.5);
    for (let col = 0; col < 12; col++) for (let row = 0; row < 3; row++) { const n = col * 3 + (3 - row), x = x0 + col * cw, y = 20 + row * ch; g.strokeRect(x, y, cw, ch); g.fillStyle = RED.has(n) ? '#c8102e' : '#111'; g.beginPath(); g.ellipse(x + cw / 2, y + ch / 2, 26, 30, 0, 0, TAU); g.fill(); g.fillStyle = '#fff'; g.fillText(n, x + cw / 2, y + ch / 2 + 1); }
    for (let row = 0; row < 3; row++) { g.strokeRect(x0 + 12 * cw, 20 + row * ch, 66, ch); g.fillStyle = '#fff'; g.font = `800 20px ${FONT}`; g.fillText('2:1', x0 + 12 * cw + 33, 20 + row * ch + ch / 2); }
    g.font = `800 26px ${FONT}`; ['1st 12', '2nd 12', '3rd 12'].forEach((t, i) => { g.strokeRect(x0 + i * 4 * cw, 20 + ch * 3, 4 * cw, 60); g.fillStyle = '#fff'; g.fillText(t, x0 + i * 4 * cw + 2 * cw, 20 + ch * 3 + 30); });
    ['1-18', 'EVEN', '◆', '◆', 'ODD', '19-36'].forEach((t, i) => { const x = x0 + i * 2 * cw, y = 20 + ch * 3 + 60; g.strokeRect(x, y, 2 * cw, 60); g.fillStyle = t === '◆' ? (i === 2 ? '#c8102e' : '#111') : '#fff'; g.font = `800 ${t === '◆' ? 44 : 24}px ${FONT}`; g.fillText(t, x + cw, y + 31); });
  });
  function roulette(x, z, ry) {
    const g = new THREE.Group(); place(g, x, z, ry);
    const L = 4.2, Wd = 1.9;
    add(g, box(L + .3, .8, Wd + .3, M.woodDark), 0, .4, 0, true);
    const top = add(g, new THREE.Mesh(new THREE.PlaneGeometry(L - .2, Wd - .2), new THREE.MeshStandardMaterial({ map: layoutTex, roughness: .95 })), .3, .842, 0); top.rotation.x = -Math.PI / 2; top.receiveShadow = true;
    for (const [w, d, px, pz] of [[L + .5, .22, 0, Wd / 2 + .08], [L + .5, .22, 0, -Wd / 2 - .08], [.22, Wd + .4, L / 2 + .14, 0]]) add(g, box(w, .12, d, M.leather), px, .88, pz, true);
    add(g, box(L + .52, .03, Wd + .5, M.gold), 0, .815, 0);
    // the wheel at the -x end
    const wx = -L / 2 - .6, wh = new THREE.Group(); wh.position.set(wx, .82, 0); g.add(wh);
    add(g, box(1.7, .8, 1.7, M.woodDark), wx, .4, 0, true);
    add(wh, cyl(.82, .78, .2, M.wood, 48), 0, .1, 0, true);
    const bowl = new THREE.Mesh(new THREE.CylinderGeometry(.78, .6, .12, 48, 1, true), new THREE.MeshStandardMaterial({ color: 0x2a1408, roughness: .3, side: THREE.DoubleSide })); bowl.position.y = .16; wh.add(bowl);
    const rotor = new THREE.Group(); rotor.position.y = .15; wh.add(rotor);
    const disc = new THREE.Mesh(new THREE.CylinderGeometry(.6, .6, .05, 64), [new THREE.MeshStandardMaterial({ color: 0x2a1408 }), new THREE.MeshStandardMaterial({ map: rotorTex, roughness: .3, metalness: .2 }), M.black]); rotor.add(disc);
    add(rotor, new THREE.Mesh(new THREE.ConeGeometry(.12, .22, 20), M.gold), 0, .13, 0);
    for (let i = 0; i < 4; i++) { const a = add(rotor, cyl(.012, .012, .36, M.gold, 6), 0, .2, 0); a.rotation.z = Math.PI / 2; a.rotation.y = i * Math.PI / 4; add(a, new THREE.Mesh(new THREE.SphereGeometry(.03, 8, 6), M.gold), 0, .18, 0); add(a, new THREE.Mesh(new THREE.SphereGeometry(.03, 8, 6), M.gold), 0, -.18, 0); }
    const ball = add(wh, new THREE.Mesh(new THREE.SphereGeometry(.028, 12, 8), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: .15 })), .7, .22, 0); ball.castShadow = true;
    let rot = 0, ba = 0, bs = 0, br = .7, phase = 0, pt = 0, settle = 0;
    updaters.push((dt) => {
      pt += dt; rot += dt * (.6 + (phase === 1 ? .8 : 0)); rotor.rotation.y = rot;
      if (phase === 0 && pt > 4) { phase = 1; pt = 0; bs = 7; br = .72; }
      if (phase === 1) { bs = Math.max(0, bs - dt * 1.4); ba -= bs * dt; br = .72 - Math.max(0, (1 - bs / 7)) * .25; if (bs < 1.4) { phase = 2; pt = 0; settle = ba - rot; } }
      if (phase === 2) { ba = rot + settle; br = .47; if (pt > 5) { phase = 0; pt = 0; } }
      if (phase === 0) { ba = rot + settle; }
      ball.position.set(Math.cos(ba) * br, .2 + (phase === 1 ? Math.abs(Math.sin(pt * 9)) * .01 : 0), Math.sin(ba) * br);
    });
    for (let i = 0; i < 4; i++) { stool(g, -1.2 + i * 1.15, Wd / 2 + .75); }
    const seats = [0, 1, 2, 3].map(i => [-1.2 + i * 1.15, Wd / 2 + .75, .78]);
    stool(g, L / 2 + .8, 0); seats.push([L / 2 + .8, 0, .78]);
    dealer(g, wx + .2, -1.25, [wx, 0]);
    chipStack(g, .6, -.5, 8, 0xd4143a, .845); chipStack(g, -.4, .3, 5, 0x1f6fd1, .845); chipStack(g, 1.3, .1, 6, 0xe8c46a, .845);
    colliders.push({ t: 'b', x: g.position.x + Math.cos(ry) * -.35, z: g.position.z - Math.sin(ry) * -.35, hw: (L + 2) / 2 + .2, hd: Wd / 2 + .35, a: ry });
    pointSpots.push({ x, y: 3.2, z, c: 0xffd8a0, i: .75, d: 7, spot: true });
    return station('roul', 'Roulette', g, { hot: [0, Wd / 2 + 1.1], r: 3.4, seats, lbl: [-.5, 3.4, 0], look: [-.5, 0] });
  }
  roulette(-13, .3, 0);
  roulette(-18.5, 8.6, 0);

  /* ================================================= slots + video poker */
  const SYM = [['7', '#ff2b4a'], ['BAR', '#f1d488'], ['♦', '#57c7ff'], ['♥', '#ff6fb5'], ['★', '#ffd36b'], ['$', '#5cff9d']];
  const reelTex = canvasTex(128, 768, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, w, 0); gr.addColorStop(0, '#d9d4c8'); gr.addColorStop(.5, '#ffffff'); gr.addColorStop(1, '#d9d4c8'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    SYM.forEach(([s, c], i) => { g.fillStyle = c; g.strokeStyle = '#3a1a06'; g.lineWidth = 4; g.font = `900 ${s.length > 1 ? 44 : 84}px ${s === '7' ? SERIF : FONT}`; g.strokeText(s, w / 2, i * 128 + 66); g.fillText(s, w / 2, i * 128 + 66); g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(0, i * 128 + 126, w, 2); });
  }, { repeat: [1, .5] });
  reelTex.wrapT = THREE.RepeatWrapping;
  const topperTex = (t, c1, c2) => canvasTex(512, 200, (g, w, h) => {
    const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, c1); gr.addColorStop(1, c2); g.fillStyle = gr; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 26; i++) { g.fillStyle = i % 2 ? '#fff6c8' : '#ffb347'; g.beginPath(); g.arc(14 + i * 19, 12, 6, 0, TAU); g.fill(); g.beginPath(); g.arc(14 + i * 19, h - 12, 6, 0, TAU); g.fill(); }
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = `900 78px ${SERIF}`; g.fillStyle = '#fff3c4'; g.shadowColor = '#ffcf5a'; g.shadowBlur = 18; g.fillText(t, w / 2, h / 2 + 4, 470);
  });
  const sevensTop = topperTex('GOLDEN 7s', '#b3122e', '#4a0612'), pokerTop = topperTex('JACKS+', '#1f3a7a', '#0a1430');
  const pokerScreen = canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#0a1f7a'; g.fillRect(0, 0, w, h); g.fillStyle = '#ffd36b'; g.font = `800 22px ${FONT}`; g.textAlign = 'center';
    ['ROYAL FLUSH 800', 'STRAIGHT FLUSH 50', 'FOUR OF A KIND 25', 'FULL HOUSE 9'].forEach((t, i) => g.fillText(t, w / 2, 26 + i * 24));
    const cards = [['10', '♠'], ['J', '♠'], ['Q', '♠'], ['K', '♠'], ['A', '♠']];
    cards.forEach(([r, s], i) => { const x = 22 + i * 96; g.fillStyle = '#fbf8f1'; rr(g, x, 120, 84, 118, 8); g.fill(); g.fillStyle = '#111'; g.font = `800 30px ${FONT}`; g.fillText(r, x + 42, 160); g.font = `44px ${FONT}`; g.fillText(s, x + 42, 212); });
  });
  const slotCabs = [];
  function cabinet(x, z, ry, kind) {
    const g = new THREE.Group(); place(g, x, z, ry);
    const body = kind === 'poker' ? new THREE.MeshStandardMaterial({ color: 0x14245a, metalness: .5, roughness: .35 }) : new THREE.MeshStandardMaterial({ color: 0x7a0c1c, metalness: .55, roughness: .3 });
    add(g, box(1, .75, .8, M.black), 0, .375, 0, true);
    add(g, box(1, 1.15, .7, body), 0, 1.32, .05, true);
    for (const s of [-1, 1]) add(g, box(.05, 1.9, .74, M.gold), s * .5, 1.0, .05);
    const panel = add(g, box(.96, .08, .42, M.black), 0, .82, -.42); panel.rotation.x = .25;
    for (let i = 0; i < 4; i++) add(g, cyl(.045, .045, .03, glow(['#ff3355', '#ffd36b', '#5cff9d', '#57c7ff'][i], 1.8), 12), -.3 + i * .2, .88, -.46).rotation.x = .25;
    const tp = add(g, box(1, .45, .55, M.black), 0, 2.2, .12, true);
    const sign = add(g, new THREE.Mesh(new THREE.PlaneGeometry(.94, .38), glowMap(kind === 'poker' ? pokerTop : sevensTop, 1.25)), 0, 2.2, -.16);
    const frame = add(g, box(.84, .62, .04, M.gold), 0, 1.38, -.3);
    const reels = [];
    if (kind === 'poker') { const s = add(g, new THREE.Mesh(new THREE.PlaneGeometry(.76, .52), glowMap(pokerScreen, 1.1)), 0, 1.38, -.33); }
    else for (let i = 0; i < 3; i++) { const t = reelTex.clone(); t.needsUpdate = true; t.offset.y = Math.floor(Math.random() * 6) / 6; const r = add(g, new THREE.Mesh(new THREE.PlaneGeometry(.23, .5), glowMap(t, 1.05)), -.25 + i * .25, 1.38, -.33); reels.push({ t, v: 0, target: t.offset.y }); }
    if (kind !== 'poker') { add(g, cyl(.025, .025, .55, M.chrome, 8), .58, 1.55, -.05); add(g, new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 8), M.red), .58, 1.85, -.05); }
    stool(g, 0, -.85, .7);
    slotCabs.push({ reels, wait: R(1, 10) });
    boxC(g, 0, .05, .55, .45);
    return station(kind === 'poker' ? 'vpoker' : 'slots', kind === 'poker' ? 'Video Poker' : 'Golden Sevens', g, { hot: [0, -1.1], r: 1.05, seats: [[0, -.85, .7]], lbl: false, look: [0, 0] });
  }
  updaters.push(dt => {
    for (const c of slotCabs) {
      if (!c.reels.length) continue; c.wait -= dt;
      if (c.wait < 0 && !c.spin) { c.spin = 2.2; c.wait = R(5, 16); c.reels.forEach((r, i) => { r.v = 3 + i * .3; r.stopAt = .9 + i * .45; }); }
      if (c.spin) { c.spin -= dt; let any = false; c.reels.forEach(r => { r.stopAt -= dt; if (r.stopAt > 0) { r.t.offset.y = (r.t.offset.y + r.v * dt) % 1; any = true; } else if (r.v) { r.v = 0; r.t.offset.y = Math.round(r.t.offset.y * 6) / 6 % 1; } }); if (!any) c.spin = 0; }
    }
  });
  // west wall row + an island, all Golden Sevens
  const slotSt = [];
  for (let i = 0; i < 8; i++) slotSt.push(cabinet(HALL.x0 + .55, -12 + i * 1.25 + (i > 3 ? 2.5 : 0), -Math.PI / 2, 'slot'));
  for (let i = 0; i < 4; i++) { slotSt.push(cabinet(-23.3, -2.5 + i * 1.25, Math.PI / 2 + Math.PI, 'slot')); slotSt.push(cabinet(-24.9, -2.5 + i * 1.25, -Math.PI / 2 + Math.PI, 'slot')); }
  { const l = label('Golden Sevens', 'SLOTS · 1,550× JACKPOT'); l.position.set(-24.1, 3.4, -.6); scene.add(l); slotSt.forEach(s => { s.label = l; s.baseY = l.position.y; }); }
  // video poker bank along the north wall
  const vp = []; for (let i = 0; i < 5; i++) vp.push(cabinet(-27 + i * 1.25, HALL.z0 + .55, Math.PI, 'poker'));
  { const l = label('Video Poker', 'JACKS OR BETTER'); l.position.set(-24.5, 3.4, HALL.z0 + .9); scene.add(l); vp.forEach(s => { s.label = l; s.baseY = l.position.y; }); }

  /* ================================================= money wheel (Big Six) */
  {
    const g = new THREE.Group(); place(g, 0, -16.6, 0);
    const SEG = [], vals = [[1, '#f2f2f2', 24], [2, '#57c7ff', 15], [5, '#ff6fb5', 7], [10, '#5cff9d', 4], [20, '#ffd36b', 2], ['JK', '#b3122e', 2]];
    const pool = []; vals.forEach(([v, c, n]) => { for (let i = 0; i < n; i++) pool.push([v, c]); });
    for (let i = 0; i < 54; i++) SEG.push(pool[(i * 23) % 54]);
    const tex = canvasTex(1024, 1024, (gg, w) => {
      const c = w / 2, st = TAU / 54; gg.fillStyle = '#1a0d06'; gg.fillRect(0, 0, w, w);
      SEG.forEach(([v, col], i) => { gg.fillStyle = col; gg.beginPath(); gg.moveTo(c, c); gg.arc(c, c, c * .97, i * st, (i + 1) * st); gg.closePath(); gg.fill(); gg.strokeStyle = '#3a2208'; gg.lineWidth = 3; gg.stroke();
        gg.save(); gg.translate(c, c); gg.rotate((i + .5) * st + Math.PI / 2); gg.fillStyle = v === 'JK' ? '#ffd36b' : '#1b1204'; gg.font = `900 ${v === 'JK' ? 34 : 40}px ${SERIF}`; gg.textAlign = 'center'; gg.fillText(v === 'JK' ? 'JK' : '$' + v, 0, -c * .82); gg.restore(); });
      const gr = gg.createRadialGradient(c, c, 0, c, c, c * .5); gr.addColorStop(0, '#fff3c4'); gr.addColorStop(.5, '#d9aa4c'); gr.addColorStop(1, '#7a5418'); gg.fillStyle = gr; gg.beginPath(); gg.arc(c, c, c * .5, 0, TAU); gg.fill();
      gg.fillStyle = '#2a1a04'; gg.font = `900 120px ${SERIF}`; gg.textAlign = 'center'; gg.textBaseline = 'middle'; gg.fillText('JK', c, c - 20); gg.font = `800 40px ${FONT}`; gg.fillText('MONEY WHEEL', c, c + 70);
    });
    const Rw = 2.3, wheel = new THREE.Group(); wheel.position.y = 3.05; g.add(wheel);
    const face = new THREE.Mesh(new THREE.CircleGeometry(Rw, 96), new THREE.MeshStandardMaterial({ map: tex, roughness: .35, metalness: .15, emissive: 0x332211, emissiveMap: tex, emissiveIntensity: .6 })); face.position.z = .06; wheel.add(face);
    add(wheel, cyl(Rw + .05, Rw + .05, .12, M.woodDark, 96), 0, 0, 0).rotation.x = Math.PI / 2;
    add(wheel, new THREE.Mesh(new THREE.TorusGeometry(Rw + .06, .08, 12, 96), M.gold), 0, 0, .06);
    const bulbs = new THREE.InstancedMesh(new THREE.SphereGeometry(.055, 10, 8), glow('#ffffff', 1), 48), d = new THREE.Object3D();
    for (let i = 0; i < 48; i++) { const a = i / 48 * TAU; d.position.set(Math.cos(a) * (Rw + .06), Math.sin(a) * (Rw + .06), .14); d.updateMatrix(); bulbs.setMatrixAt(i, d.matrix); bulbs.setColorAt(i, new THREE.Color(i % 2 ? 2.2 : .4, i % 2 ? 1.8 : .3, .6)); }
    g.add(bulbs); bulbs.position.y = 3.05;
    for (const s of [-1, 1]) { const leg = add(g, box(.18, 3.3, .18, M.gold), s * 1.2, 1.6, -.3, true); leg.rotation.z = s * .3; }
    add(g, box(3.6, .25, 1, M.woodDark), 0, .12, -.2, true);
    const ptr = add(g, new THREE.Mesh(new THREE.ConeGeometry(.16, .5, 4), M.red), 0, 3.05 + Rw + .32, .2); ptr.rotation.z = Math.PI;
    let wr = 0, wv = .15, wt = 4, blink = 0;
    updaters.push((dt, t) => { wt -= dt; if (wt < 0) { wv = R(3, 5); wt = R(9, 15); } wv = Math.max(.08, wv - dt * .45); wr -= wv * dt; wheel.rotation.z = wr;
      blink += dt; if (blink > .25) { blink = 0; const on = Math.floor(t * 4) % 2; for (let i = 0; i < 48; i++) bulbs.setColorAt(i, new THREE.Color((i + on) % 2 ? 2.4 : .35, (i + on) % 2 ? 1.9 : .25, .5)); bulbs.instanceColor.needsUpdate = true; } });
    colliders.push({ t: 'b', x: 0, z: -16.8, hw: 1.9, hd: .6, a: 0, h: 5.5 });
    pointSpots.push({ x: 0, y: 4, z: -13.5, c: 0xffd59a, i: 1.4, d: 9, spot: true });
    station('wheel', 'Money Wheel', g, { hot: [0, 1.6], r: 2.1, lbl: [0, 6.3, .3], sub: 'THE BIG SIX' });
  }

  /* ================================================= keno lounge */
  {
    const g = new THREE.Group(); place(g, -19, 19.6, Math.PI);
    const kt = canvasTex(1024, 600, () => {}); screens.keno = kt;
    let drawn = new Set(), hits = 0;
    const paint = () => kt.redraw((gg, w, h) => {
      gg.fillStyle = '#04112a'; gg.fillRect(0, 0, w, h); gg.fillStyle = '#ffd36b'; gg.font = `900 64px ${SERIF}`; gg.textAlign = 'center'; gg.textBaseline = 'middle'; gg.fillText('KENO', w / 2, 52);
      gg.font = `700 24px ${FONT}`; gg.fillStyle = '#9fc4ff'; gg.fillText(`DRAW ${drawn.size}/20 · PICK UP TO 10 · HIT BIG`, w / 2, 100);
      for (let i = 0; i < 80; i++) { const c = i % 10, r = Math.floor(i / 10), x = 72 + c * 98, y = 150 + r * 56, on = drawn.has(i + 1);
        gg.fillStyle = on ? '#ffd36b' : '#0d2552'; rr(gg, x - 40, y - 22, 80, 44, 10); gg.fill(); gg.fillStyle = on ? '#2a1a04' : '#7fa8e8'; gg.font = `800 26px ${FONT}`; gg.fillText(i + 1, x, y + 1); }
    });
    paint(); let kt0 = 0;
    updaters.push(dt => { kt0 += dt; if (kt0 > (drawn.size >= 20 ? 4 : .35)) { kt0 = 0; if (drawn.size >= 20) drawn = new Set(); else { let n; do n = 1 + Math.floor(Math.random() * 80); while (drawn.has(n)); drawn.add(n); } paint(); } });
    add(g, box(6.4, 3.8, .2, M.gold), 0, 3, .02);
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(6, 3.5), glowMap(kt, 1.15)), 0, 3, .13);
    for (let i = 0; i < 5; i++) {
      const c = new THREE.Group(); c.position.set(-3 + i * 1.5, 0, 3.6); g.add(c);
      add(c, box(.75, .42, .7, M.velvet), 0, .3, 0, true); add(c, box(.75, .7, .14, M.velvet), 0, .72, .32, true); for (const s of [-1, 1]) add(c, box(.12, .58, .7, M.velvet), s * .38, .38, 0);
    }
    for (let i = 0; i < 2; i++) { const t = new THREE.Group(); t.position.set(-2.25 + i * 3, 0, 3.6); g.add(t); add(t, cyl(.3, .3, .04, M.marble, 20), 0, .55, 0); add(t, cyl(.04, .04, .55, M.gold, 8), 0, .27, 0); }
    const seats = [0, 1, 2, 3, 4].map(i => [-3 + i * 1.5, 3.6, .47]);
    colliders.push({ t: 'b', x: -19, z: 16, hw: 4.2, hd: .5, a: 0 });
    station('keno', 'Keno', g, { hot: [0, 2.4], r: 3.2, seats, lbl: [0, 5.4, .5], look: [0, 0], sub: '80 BALLS · 20 DRAWN' });
  }

  /* ================================================= scratch kiosk */
  {
    const g = new THREE.Group(); place(g, -9.5, 19.8, Math.PI);
    add(g, box(3.4, 1.05, .9, M.wood), 0, .52, 0, true); add(g, box(3.5, .06, 1, M.marble), 0, 1.08, 0, true);
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(3.2, .6), glow('#ff6fb5', 1.3)), 0, .55, .455);
    const cardT = i => canvasTex(256, 360, (gg, w, h) => { const gr = gg.createLinearGradient(0, 0, w, h); gr.addColorStop(0, ['#ffd36b', '#57c7ff', '#ff6fb5', '#5cff9d'][i]); gr.addColorStop(1, '#2a1a04'); gg.fillStyle = gr; rr(gg, 0, 0, w, h, 18); gg.fill();
      gg.fillStyle = '#fff'; gg.font = `900 44px ${SERIF}`; gg.textAlign = 'center'; gg.fillText('SCRATCH', w / 2, 60); gg.font = `800 30px ${FONT}`; gg.fillText('WIN 100×', w / 2, 100);
      for (let k = 0; k < 9; k++) { const x = 40 + (k % 3) * 70, y = 140 + Math.floor(k / 3) * 70; const sg = gg.createLinearGradient(x, y, x + 60, y + 60); sg.addColorStop(0, '#d8d8d8'); sg.addColorStop(.5, '#9a9a9a'); sg.addColorStop(1, '#e8e8e8'); gg.fillStyle = sg; rr(gg, x, y, 60, 60, 8); gg.fill(); } });
    for (let i = 0; i < 4; i++) { const c = add(g, new THREE.Mesh(new THREE.PlaneGeometry(.5, .7), glowMap(cardT(i), .95)), -1.2 + i * .8, 1.55, -.2); c.rotation.x = -.15; add(g, box(.04, .45, .04, M.gold), -1.2 + i * .8, 1.3, -.25); }
    add(g, box(3.8, .3, 1.4, M.red), 0, 3.3, -.2); add(g, new THREE.Mesh(new THREE.PlaneGeometry(3.6, .26), glowMap(neonText('SCRATCH & WIN', { color: '#ffd36b', size: 120 }), 1.4, { transparent: true })), 0, 3.3, .51);
    for (const s of [-1, 1]) add(g, box(.1, 2.3, .1, M.gold), s * 1.8, 2.2, -.5);
    dealer(g, 0, -.9, [0, 2], 'dealer', 'Clerk');
    colliders.push({ t: 'b', x: -9.5, z: 19.9, hw: 1.9, hd: 1.2, a: 0 });
    station('scratch', 'Scratch Cards', g, { hot: [0, 1.4], r: 2.1, lbl: [0, 4.2, .2], look: [0, 0], sub: 'MATCH 3 · WIN UP TO 100×' });
  }

  /* ================================================= cashier cage */
  {
    const g = new THREE.Group(); place(g, 9.5, 19.8, Math.PI);
    add(g, box(4, 1.1, .9, M.woodDark), 0, .55, 0, true); add(g, box(4.1, .06, 1, M.marble), 0, 1.13, 0);
    for (let i = 0; i <= 20; i++) add(g, cyl(.015, .015, 1.5, M.gold, 6), -1.95 + i * .195, 1.9, -.25);
    add(g, box(4.1, .1, .15, M.gold), 0, 2.65, -.3);
    add(g, box(4.2, .55, .3, M.black), 0, 3.05, -.3); add(g, new THREE.Mesh(new THREE.PlaneGeometry(3.8, .45), glowMap(neonText('CASHIER', { color: '#5cff9d', size: 140 }), 1.4, { transparent: true })), 0, 3.05, -.14);
    for (let i = 0; i < 6; i++) chipStack(g, -1.4 + i * .5, .1, 10 + i * 3, [0xd4143a, 0x1f6fd1, 0x1d1d1d, 0x2f9e4f, 0xe8c46a, 0x8a2be2][i], 1.16);
    dealer(g, 0, -.8, [0, 2], 'tux', 'Cashier');
    colliders.push({ t: 'b', x: 9.5, z: 19.9, hw: 2.1, hd: 1.2, a: 0 });
    station('__cashier', 'Cashier', g, { hot: [0, 1.4], r: 2.2, lbl: [0, 4, .2], look: [0, 0], sub: 'ACCOUNT · REFILLS' });
  }

  /* ================================================= center bar */
  {
    const g = new THREE.Group(); place(g, 0, 2, 0);
    const outer = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 1.05, 64, 1, true), M.wood); outer.position.y = .52; outer.castShadow = true; g.add(outer);
    add(g, new THREE.Mesh(new THREE.TorusGeometry(3.2, .03, 6, 64), M.gold), 0, .3, 0).rotation.x = Math.PI / 2;
    const topR = new THREE.Mesh(new THREE.RingGeometry(2.5, 3.35, 64), M.marble); topR.rotation.x = -Math.PI / 2; topR.position.y = 1.07; g.add(topR);
    add(g, new THREE.Mesh(new THREE.TorusGeometry(3.35, .04, 8, 64), M.gold), 0, 1.07, 0).rotation.x = Math.PI / 2;
    const inner = new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 1.05, 64, 1, true), M.woodDark); inner.material = M.woodDark; inner.position.y = .52; g.add(inner);
    add(g, cyl(1.1, 1.2, 2.4, M.woodDark, 32), 0, 1.2, 0, true);
    for (const y of [1.15, 1.6, 2.05]) add(g, cyl(1.28, 1.28, .04, M.gold, 32), 0, y, 0);
    const bc = ['#3aa05a', '#d4a64a', '#b3122e', '#57c7ff', '#f2f2f2', '#7a3a10'];
    const bot = new THREE.InstancedMesh(new THREE.CylinderGeometry(.05, .055, .26, 8), new THREE.MeshStandardMaterial({ roughness: .1, metalness: .1, transparent: true, opacity: .85 }), 66), d = new THREE.Object3D();
    for (let i = 0; i < 66; i++) { const row = i % 3, a = i / 22 * TAU, y = [1.3, 1.75, 2.2][row]; d.position.set(Math.cos(a) * 1.18, y, Math.sin(a) * 1.18); d.updateMatrix(); bot.setMatrixAt(i, d.matrix); bot.setColorAt(i, new THREE.Color(bc[i % 6])); }
    g.add(bot);
    add(g, new THREE.Mesh(new THREE.TorusGeometry(1.15, .04, 8, 48), glow('#ff6fb5', 2)), 0, 2.45, 0).rotation.x = Math.PI / 2;
    for (let i = 0; i < 12; i++) { const a = i / 12 * TAU + .13; stool(g, Math.cos(a) * 3.8, Math.sin(a) * 3.8, .8); circ(Math.cos(a) * 3.8, 2 + Math.sin(a) * 3.8, .24); }
    dealer(g, 2, 0, [3, 0], 'tux', 'Bartender'); dealer(g, -2, .2, [-3, 0], 'tux', 'Bartender');
    circ(0, 2, 3.4); colliders.push({ t: 'c', x: 0, z: 2, r: 1.3, h: 2.6 });
    // the leaderboard + ticker canopy above the bar
    const canopy = new THREE.Group(); canopy.position.y = 4.4; g.add(canopy);
    const ticker = canvasTex(2048, 128, gg => { gg.fillStyle = '#000'; gg.fillRect(0, 0, 2048, 128); }, { repeat: [1, 1] }); ticker.wrapS = THREE.RepeatWrapping; screens.ticker = ticker;
    const tk = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, .55, 64, 1, true), glowMap(ticker, 1.4, { side: THREE.DoubleSide })); tk.material.map.repeat.set(2, 1); canopy.add(tk);
    add(canopy, new THREE.Mesh(new THREE.TorusGeometry(3, .05, 8, 64), M.gold), 0, .3, 0).rotation.x = Math.PI / 2;
    add(canopy, new THREE.Mesh(new THREE.TorusGeometry(3, .05, 8, 64), M.gold), 0, -.3, 0).rotation.x = Math.PI / 2;
    updaters.push(dt => { ticker.offset.x = (ticker.offset.x + dt * .03) % 1; });
  }
  /* leaderboard wall (north wall, right of the big wheel) */
  {
    const lt = canvasTex(1024, 700, () => {}); screens.board = lt;
    const g = new THREE.Group(); place(g, 11, HALL.z0 + .08, 0);
    add(g, box(7.4, 5.1, .2, M.gold), 0, 3.4, .05);
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(7, 4.75), glowMap(lt, 1.1)), 0, 3.4, .17);
  }

  /* ================================================= the arcade (instant games) */
  /* Rocket Crash */
  {
    const g = new THREE.Group(); place(g, 21.5, -14, 0);
    add(g, cyl(2.1, 2.3, .35, M.black, 48), 0, .17, 0, true);
    add(g, new THREE.Mesh(new THREE.TorusGeometry(1.9, .05, 8, 64), glow('#57c7ff', 2.2)), 0, .36, 0).rotation.x = Math.PI / 2;
    add(g, new THREE.Mesh(new THREE.TorusGeometry(1.2, .03, 8, 64), glow('#57c7ff', 1.6)), 0, .36, 0).rotation.x = Math.PI / 2;
    for (const s of [-1, 1]) { add(g, box(.12, 3.6, .12, M.chrome), s * .9, 2, .9, true); }
    add(g, box(1.92, .1, .1, M.chrome), 0, 3.7, .9);
    const rocket = new THREE.Group(); rocket.position.y = .4; g.add(rocket);
    add(rocket, cyl(.26, .3, 1.5, M.white, 24), 0, .95, 0, true);
    add(rocket, new THREE.Mesh(new THREE.ConeGeometry(.26, .55, 24), M.red), 0, 1.97, 0, true);
    add(rocket, new THREE.Mesh(new THREE.CircleGeometry(.09, 16), glow('#57c7ff', 1.5)), 0, 1.3, .265);
    for (let i = 0; i < 3; i++) { const f = add(rocket, box(.04, .45, .35, M.red), Math.sin(i / 3 * TAU) * .3, .4, Math.cos(i / 3 * TAU) * .3, true); f.rotation.y = i / 3 * TAU; }
    const flame = add(rocket, new THREE.Mesh(new THREE.ConeGeometry(.22, .9, 16), glow('#ff8a2a', 2.6, { transparent: true, opacity: .9 })), 0, -.25, 0); flame.rotation.x = Math.PI; flame.visible = false;
    const sct = canvasTex(1024, 512, () => {}); screens.crash = sct;
    const scr = new THREE.Group(); scr.position.set(0, 0, -2.6); g.add(scr);
    add(scr, box(4.4, 2.6, .2, M.black), 0, 3.3, 0); add(scr, new THREE.Mesh(new THREE.PlaneGeometry(4.2, 2.1), glowMap(sct, 1.2)), 0, 3.3, .11);
    add(scr, box(.2, 2.2, .2, M.chrome), 0, 1.1, 0);
    // particles: exhaust + explosion
    const N = 90, pg = new THREE.BufferGeometry(), pos = new Float32Array(N * 3), vel = [], life = new Float32Array(N);
    pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: new THREE.Color(2.4, 1.2, .4), size: .22, transparent: true, opacity: .9, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); pts.frustumCulled = false; g.add(pts);
    for (let i = 0; i < N; i++) { vel.push(new THREE.Vector3()); pos[i * 3 + 1] = -99; }
    let st = 'idle', t0 = 0, m = 1, crashAt = 2, pi = 0, lastPaint = 0;
    const emit = (p, v, l) => { const i = pi++ % N; pos[i * 3] = p.x; pos[i * 3 + 1] = p.y; pos[i * 3 + 2] = p.z; vel[i].copy(v); life[i] = l; };
    const paint = () => sct.redraw((gg, w, h) => {
      gg.fillStyle = '#030a18'; gg.fillRect(0, 0, w, h);
      gg.strokeStyle = 'rgba(87,199,255,.15)'; gg.lineWidth = 2; for (let x = 0; x < w; x += 64) { gg.beginPath(); gg.moveTo(x, 0); gg.lineTo(x, h); gg.stroke(); } for (let y = 0; y < h; y += 64) { gg.beginPath(); gg.moveTo(0, y); gg.lineTo(w, y); gg.stroke(); }
      gg.textAlign = 'center'; gg.textBaseline = 'middle'; gg.font = `800 34px ${FONT}`; gg.fillStyle = '#57c7ff'; gg.fillText('ROCKET CRASH', w / 2, 46);
      const boom = st === 'boom';
      gg.font = `900 190px ${FONT}`; gg.fillStyle = boom ? '#ff4f6d' : st === 'idle' ? '#9fc4ff' : '#5cff9d'; gg.shadowColor = gg.fillStyle; gg.shadowBlur = 30; gg.fillText(st === 'idle' ? 'READY' : m.toFixed(2) + '×', w / 2, 270); gg.shadowBlur = 0;
      gg.font = `700 36px ${FONT}`; gg.fillStyle = '#fff'; gg.fillText(boom ? 'CRASHED!' : st === 'idle' ? 'NEXT LAUNCH IN ' + Math.max(0, 3 - t0).toFixed(0) + 's' : 'CASH OUT BEFORE IT BLOWS', w / 2, 430);
    });
    paint();
    updaters.push((dt) => {
      t0 += dt;
      if (st === 'idle') { rocket.position.y = .4; rocket.visible = true; flame.visible = false; if (t0 > 3) { st = 'fly'; t0 = 0; crashAt = Math.max(1.05, .99 / (1 - Math.random()) * .97); crashAt = Math.min(crashAt, 30); } }
      else if (st === 'fly') { m = Math.exp(.18 * t0); rocket.position.y = .4 + (m - 1) * 1.6 + t0 * .2; rocket.rotation.y += dt * 2; flame.visible = true; flame.scale.y = .8 + Math.random() * .6;
        if (Math.random() < .8) emit(new THREE.Vector3(R(-.1, .1), rocket.position.y - .4, R(-.1, .1)), new THREE.Vector3(R(-.3, .3), -2 - Math.random() * 2, R(-.3, .3)), .6);
        if (m >= crashAt || rocket.position.y > HALL.h - 2.8) { st = 'boom'; t0 = 0; rocket.visible = false; const c = new THREE.Vector3(0, rocket.position.y + 1, 0); for (let i = 0; i < 60; i++) emit(c, new THREE.Vector3(R(-1, 1), R(-1, 1), R(-1, 1)).normalize().multiplyScalar(R(2, 5)), R(.6, 1.2)); } }
      else if (st === 'boom' && t0 > 2.2) { st = 'idle'; t0 = 0; m = 1; rocket.rotation.y = 0; }
      for (let i = 0; i < N; i++) { if (life[i] > 0) { life[i] -= dt; pos[i * 3] += vel[i].x * dt; pos[i * 3 + 1] += vel[i].y * dt; pos[i * 3 + 2] += vel[i].z * dt; vel[i].y -= dt * 1.5; if (life[i] <= 0) pos[i * 3 + 1] = -99; } }
      pg.attributes.position.needsUpdate = true;
      lastPaint += dt; if (lastPaint > .1) { lastPaint = 0; paint(); }
    });
    circ(21.5, -14, 2.4); colliders.push({ t: 'b', x: 21.5, z: -16.6, hw: 2.3, hd: .3, a: 0 });
    pointSpots.push({ x: 21.5, y: 4.5, z: -12, c: 0x57c7ff, i: 1.2, d: 9 });
    station('crash', 'Rocket Crash', g, { hot: [0, 3.1], r: 2.2, lbl: [-3.2, 3.6, 0], look: [0, 0], sub: 'CASH OUT BEFORE IT BLOWS' });
  }

  /* Dice */
  function diceFace(n) {
    return canvasTex(128, 128, (g, w) => { g.fillStyle = '#f7f3ea'; rr(g, 0, 0, w, w, 18); g.fill(); g.fillStyle = n === 1 ? '#c8102e' : '#141414';
      const P = { 1: [[.5, .5]], 2: [[.27, .27], [.73, .73]], 3: [[.25, .25], [.5, .5], [.75, .75]], 4: [[.27, .27], [.73, .27], [.27, .73], [.73, .73]], 5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]], 6: [[.27, .22], [.73, .22], [.27, .5], [.73, .5], [.27, .78], [.73, .78]] }[n];
      for (const [x, y] of P) { g.beginPath(); g.arc(x * w, y * w, n === 1 ? 18 : 12, 0, TAU); g.fill(); } });
  }
  {
    const g = new THREE.Group(); place(g, 10.5, -8, 0);
    const feltD = canvasTex(1024, 512, (gg, w, h) => { gg.fillStyle = '#5a0a18'; gg.fillRect(0, 0, w, h); gg.strokeStyle = '#ffd36b'; gg.lineWidth = 5; rr(gg, 30, 30, w - 60, h - 60, 40); gg.stroke();
      gg.textAlign = 'center'; gg.textBaseline = 'middle'; gg.font = `900 90px ${SERIF}`; gg.fillStyle = '#ffd36b'; gg.fillText('DICE', w / 2, h / 2 - 40); gg.font = `800 34px ${FONT}`; gg.fillStyle = '#fff'; gg.fillText('ROLL OVER  ·  ROLL UNDER', w / 2, h / 2 + 50);
      gg.fillStyle = '#5cff9d'; gg.fillRect(120, h - 110, (w - 240) * .55, 16); gg.fillStyle = '#ff4f6d'; gg.fillRect(120 + (w - 240) * .55, h - 110, (w - 240) * .45, 16); });
    add(g, box(3.2, .85, 1.8, M.woodDark), 0, .42, 0, true);
    const top = add(g, new THREE.Mesh(new THREE.PlaneGeometry(3, 1.6), new THREE.MeshStandardMaterial({ map: feltD, roughness: .95 })), 0, .852, 0); top.rotation.x = -Math.PI / 2; top.receiveShadow = true;
    for (const [w, d, px, pz] of [[3.4, .2, 0, .95], [3.4, .2, 0, -.95], [.2, 2.1, 1.65, 0], [.2, 2.1, -1.65, 0]]) add(g, box(w, .2, d, M.leather), px, .92, pz, true);
    const fm = [1, 6, 2, 5, 3, 4].map(n => new THREE.MeshStandardMaterial({ map: diceFace(n), roughness: .3 }));
    const dice = [-1, 1].map(s => { const d = add(g, new THREE.Mesh(new THREE.BoxGeometry(.5, .5, .5), fm), s * .45, 1.9, 0, true); return { d, s, v: new THREE.Vector3(R(-1, 1), R(-1, 1), R(-1, 1)) }; });
    let dt0 = 0;
    updaters.push((dt, t) => { dt0 += dt; const fast = dt0 % 6 < 1.4; dice.forEach(({ d, s, v }) => { d.rotation.x += v.x * dt * (fast ? 9 : .5); d.rotation.y += v.y * dt * (fast ? 9 : .5); d.position.y = 1.9 + Math.sin(t * 2 + s) * .1 + (fast ? Math.abs(Math.sin(dt0 * 6)) * .4 : 0); if (!fast) { d.rotation.x += (Math.round(d.rotation.x / (Math.PI / 2)) * Math.PI / 2 - d.rotation.x) * dt * 3; d.rotation.z += (Math.round(d.rotation.z / (Math.PI / 2)) * Math.PI / 2 - d.rotation.z) * dt * 3; } }); });
    for (let i = 0; i < 3; i++) stool(g, -1 + i, 1.55);
    colliders.push({ t: 'b', x: 10.5, z: -8, hw: 1.8, hd: 1.1, a: 0 });
    pointSpots.push({ x: 10.5, y: 3.2, z: -8, c: 0xff8aa0, i: 1, d: 6, spot: true });
    station('dice', 'Dice', g, { hot: [0, 1.9], r: 2.4, seats: [-1, 0, 1].map(x => [x, 1.55, .78]), lbl: [0, 3.3, 0], look: [0, 0], sub: 'YOU SET THE ODDS' });
  }
  /* Coin Flip */
  {
    const g = new THREE.Group(); place(g, 10.5, 7.5, 0);
    add(g, cyl(.9, 1.05, .25, M.marble, 40), 0, .12, 0, true); add(g, cyl(.55, .7, 1.1, M.marble, 40), 0, .8, 0, true); add(g, cyl(.72, .72, .06, M.gold, 40), 0, 1.37, 0);
    add(g, new THREE.Mesh(new THREE.TorusGeometry(.95, .03, 8, 48), glow('#ffd36b', 2)), 0, .26, 0).rotation.x = Math.PI / 2;
    const face = (t, sub) => canvasTex(512, 512, (gg, w) => { const c = w / 2; const gr = gg.createRadialGradient(c * .7, c * .6, 10, c, c, c); gr.addColorStop(0, '#fff6d0'); gr.addColorStop(.5, '#e8c46a'); gr.addColorStop(1, '#8a5a18'); gg.fillStyle = gr; gg.fillRect(0, 0, w, w);
      gg.strokeStyle = '#7a5418'; gg.lineWidth = 14; gg.beginPath(); gg.arc(c, c, c * .86, 0, TAU); gg.stroke(); gg.fillStyle = '#5a3c0c'; gg.font = `900 ${sub ? 230 : 200}px ${SERIF}`; gg.textAlign = 'center'; gg.textBaseline = 'middle'; gg.fillText(t, c, c + 10); });
    const cm = [M.gold, new THREE.MeshStandardMaterial({ map: face('JK'), metalness: .8, roughness: .3 }), new THREE.MeshStandardMaterial({ map: face('♠', 1), metalness: .8, roughness: .3 })];
    const coin = add(g, new THREE.Mesh(new THREE.CylinderGeometry(.85, .85, .14, 56), cm), 0, 2.6, 0, true);
    const beam = add(g, new THREE.Mesh(new THREE.CylinderGeometry(.75, 1, 4.6, 32, 1, true), glow('#ffd36b', .5, { transparent: true, opacity: .08, depthWrite: false, side: THREE.DoubleSide })), 0, 3.6, 0);
    let ct = 0;
    updaters.push((dt, t) => { ct += dt; const flipping = ct % 5 < 1.6; coin.rotation.x = flipping ? coin.rotation.x + dt * 16 : coin.rotation.x + (Math.PI / 2 * (Math.round((coin.rotation.x - Math.PI / 2) / Math.PI) * 2 + 1) - coin.rotation.x) * dt * 5 - 0; coin.rotation.y = t * .6; coin.position.y = 2.6 + (flipping ? Math.sin((ct % 5) / 1.6 * Math.PI) * 1.2 : Math.sin(t * 2) * .08); });
    circ(10.5, 7.5, 1.15);
    pointSpots.push({ x: 10.5, y: 4.5, z: 7.5, c: 0xffd59a, i: 1, d: 6, spot: true });
    station('coin', 'Coin Flip', g, { hot: [0, 1.7], r: 2.1, lbl: [0, 4.6, 0], look: [0, 0], sub: 'HEADS OR TAILS · 1.96×' });
  }
  /* Plinko board on the east wall */
  {
    const g = new THREE.Group(); place(g, HALL.x1 - .45, -3, -Math.PI / 2);
    const BW = 3.6, BH = 4.4, rows = 12;
    add(g, box(BW + .3, BH + .3, .2, M.gold), 0, BH / 2 + .9, -.12);
    add(g, box(BW, BH, .22, new THREE.MeshStandardMaterial({ color: 0x0a0f2a, roughness: .5 })), 0, BH / 2 + .9, -.1);
    const peg = new THREE.InstancedMesh(new THREE.SphereGeometry(.045, 10, 8), glow('#ffffff', 1.4), 200), d = new THREE.Object3D(); let n = 0;
    const pegY = r => BH + .5 - r * (BH - 1.1) / rows, gap = .24;
    for (let r = 0; r < rows; r++) for (let k = 0; k < r + 3; k++) { d.position.set((k - (r + 2) / 2) * gap, pegY(r), .06); d.updateMatrix(); peg.setMatrixAt(n++, d.matrix); }
    peg.count = n; g.add(peg);
    const bins = rows + 1, cols = ['#ff3355', '#ff5a3d', '#ff7a2a', '#ff9a24', '#ffb81c', '#ffd21a', '#ffe61a'];
    for (let i = 0; i < bins; i++) { const c = cols[Math.min(6, Math.min(i, bins - 1 - i))]; add(g, box(gap * .9, .22, .1, glow(c, 1.5)), (i - rows / 2) * gap, 1.05, .07); }
    const glass = add(g, new THREE.Mesh(new THREE.PlaneGeometry(BW, BH), M.glass), 0, BH / 2 + .9, .16);
    const balls = []; for (let i = 0; i < 6; i++) { const b = add(g, new THREE.Mesh(new THREE.SphereGeometry(.07, 12, 8), glow('#ff6fb5', 2)), 0, -5, .09); balls.push({ b, t: -i * .9, path: null }); }
    const mk = () => { const p = [0]; let x = 0; for (let r = 0; r < rows; r++) { x += Math.random() < .5 ? -.5 : .5; p.push(x); } return p; };
    updaters.push(dt => { for (const o of balls) { o.t += dt; if (o.t < 0) { o.b.visible = false; continue; } if (!o.path) o.path = mk(); o.b.visible = true; const per = .16, k = Math.floor(o.t / per), f = (o.t % per) / per;
      if (k >= rows) { o.b.position.set(o.path[rows] * gap, 1.18, .09); if (o.t > rows * per + .8) { o.t = -Math.random() * 1.5; o.path = null; } continue; }
      const x0 = o.path[k] * gap, x1 = o.path[k + 1] * gap; o.b.position.set(x0 + (x1 - x0) * f, pegY(k) + .12 - f * (pegY(k) - pegY(k + 1)) + Math.sin(f * Math.PI) * .07, .09); } });
    add(g, new THREE.Mesh(new THREE.PlaneGeometry(3.2, .5), glowMap(neonText('PLINKO', { color: '#ff6fb5', size: 150 }), 1.5, { transparent: true })), 0, BH + 1.45, .05);
    colliders.push({ t: 'b', x: HALL.x1 - .45, z: -3, hw: .4, hd: 2, a: 0, h: 6 });
    pointSpots.push({ x: 26, y: 4, z: -3, c: 0xff6fb5, i: 1.1, d: 8 });
    station('plinko', 'Plinko', g, { hot: [0, 1.8], r: 2.4, lbl: false, look: [0, 0] });
  }
  /* Mines */
  {
    const g = new THREE.Group(); place(g, 18, -4.5, 0);
    add(g, box(3.5, .45, 3.5, M.black), 0, .22, 0, true); add(g, box(3.6, .04, 3.6, M.gold), 0, .46, 0);
    const tm = new THREE.MeshStandardMaterial({ color: 0x2a3a48, metalness: .6, roughness: .3 });
    const gemM = glow('#5cff9d', 2), mineM = glow('#ff2b4a', 2);
    const tiles = [];
    for (let i = 0; i < 25; i++) { const x = (i % 5 - 2) * .62, z = (Math.floor(i / 5) - 2) * .62; const t = add(g, box(.55, .08, .55, tm), x, .52, z, true); const gem = add(g, new THREE.Mesh(new THREE.OctahedronGeometry(.16, 0), gemM), x, .55, z); gem.visible = false; tiles.push({ t, gem, flip: 0, open: false, mine: false }); }
    let mt = 0, opened = 0;
    updaters.push((dt, tt) => { mt += dt;
      if (mt > .7) { mt = 0; if (opened >= 9) { tiles.forEach(o => { o.open = false; o.gem.visible = false; }); opened = 0; } else { const c = tiles.filter(o => !o.open); const o = c[Math.floor(Math.random() * c.length)]; o.open = true; o.flip = 0; o.mine = Math.random() < .12; o.gem.material = o.mine ? mineM : gemM; o.gem.geometry = o.mine ? (GEMS.m ||= new THREE.IcosahedronGeometry(.15, 0)) : (GEMS.g ||= new THREE.OctahedronGeometry(.16, 0)); opened += o.mine ? 9 : 1; } }
      tiles.forEach(o => { const target = o.open ? Math.PI : 0; o.t.rotation.x += (target - o.t.rotation.x) * Math.min(1, dt * 8); o.gem.visible = o.open && o.t.rotation.x > 1.5; if (o.gem.visible) { o.gem.position.y = .82 + Math.sin(tt * 3) * .05; o.gem.rotation.y = tt * 2; } }); });
    circ(18, -4.5, 2.3);
    pointSpots.push({ x: 18, y: 3.5, z: -4.5, c: 0x7affc0, i: 1, d: 6, spot: true });
    station('mines', 'Mines', g, { hot: [0, 2.7], r: 2.3, lbl: [0, 2.8, 0], look: [0, 0], sub: 'FIND GEMS · DODGE MINES' });
  }
  const GEMS = {};
  /* Tower */
  {
    const g = new THREE.Group(); place(g, 24, 4.5, 0);
    add(g, cyl(1.6, 1.8, .3, M.black, 6), 0, .15, 0, true);
    const floors = [];
    for (let f = 0; f < 8; f++) {
      const y = .55 + f * .62, fm = new THREE.MeshBasicMaterial({ color: new THREE.Color(.25, .1, .4), toneMapped: false });
      const fl = add(g, cyl(1.15 - f * .06, 1.2 - f * .06, .08, M.gold, 6), 0, y - .3, 0);
      const ring = add(g, new THREE.Mesh(new THREE.CylinderGeometry(1.05 - f * .06, 1.1 - f * .06, .45, 6, 1, true), fm), 0, y, 0); ring.material.side = THREE.DoubleSide; ring.material.transparent = true; ring.material.opacity = .55;
      floors.push(fm);
    }
    for (let i = 0; i < 6; i++) { const a = i / 6 * TAU; const p = add(g, box(.07, 5.2, .07, M.gold), Math.cos(a) * 1.1, 2.75, Math.sin(a) * 1.1, true); p.rotation.z = Math.cos(a) * .07; p.rotation.x = -Math.sin(a) * .07; }
    add(g, new THREE.Mesh(new THREE.OctahedronGeometry(.3, 0), glow('#ffd36b', 2)), 0, 5.6, 0);
    let lvl = 0, tw = 0, fell = -1;
    updaters.push((dt, t) => { tw += dt; if (tw > .55) { tw = 0; if (fell >= 0) { fell = -1; lvl = 0; } else if (lvl < 8 && Math.random() < .12) fell = lvl; else lvl = lvl >= 8 ? 0 : lvl + 1; }
      floors.forEach((m, i) => m.color.setRGB(i === fell ? 2.4 : i < lvl ? .3 : .25, i === fell ? .2 : i < lvl ? 2.2 : .1, i === fell ? .3 : i < lvl ? .9 : .4)); });
    colliders.push({ t: 'c', x: 24, z: 4.5, r: 1.9, h: 6 });
    pointSpots.push({ x: 24, y: 5, z: 7, c: 0xb47cff, i: 1.1, d: 8 });
    station('tower', 'Tower', g, { hot: [-2.4, 0], r: 2.2, lbl: [-1.8, 3.4, 0], look: [0, 0], sub: '8 FLOORS · DON\'T FALL' });
  }
  /* Derby Dash: a mechanical mini race track */
  {
    const g = new THREE.Group(); place(g, 17, 14.5, 0);
    const sx = 1.75;
    add(g, box(8.2, .85, 4.8, M.woodDark), 0, .42, 0, true); add(g, box(8.4, .05, 5, M.gold), 0, .86, 0);
    const track = add(g, new THREE.Mesh(new THREE.RingGeometry(1.3, 2.2, 64), new THREE.MeshStandardMaterial({ color: 0x8a5a2e, roughness: 1 })), 0, .89, 0); track.rotation.x = -Math.PI / 2; track.scale.set(sx, 1, 1);
    const grass = add(g, new THREE.Mesh(new THREE.CircleGeometry(1.3, 48), new THREE.MeshStandardMaterial({ color: 0x1f7a3a, roughness: 1 })), 0, .888, 0); grass.rotation.x = -Math.PI / 2; grass.scale.set(sx, 1, 1);
    for (const r of [1.3, 2.2]) { const rail = add(g, new THREE.Mesh(new THREE.TorusGeometry(r, .02, 6, 96), M.white), 0, .95, 0); rail.rotation.x = Math.PI / 2; rail.scale.set(sx, 1, 1); }
    add(g, box(.04, .4, .9, M.red), 0, 1.08, 1.75);
    const hc = ['#d4143a', '#1f6fd1', '#ffd36b', '#2f9e4f', '#b47cff', '#f2f2f2'];
    const horses = hc.map((c, i) => {
      const h = new THREE.Group(); g.add(h);
      const coat = new THREE.MeshStandardMaterial({ color: [0x5a3418, 0x2a1a10, 0x8a5a2e, 0x1a1a1a, 0xc8a070, 0x6a4020][i], roughness: .7 });
      add(h, new THREE.Mesh(new THREE.CapsuleGeometry(.07, .2, 4, 8), coat), 0, .14, 0).rotation.z = Math.PI / 2;
      add(h, box(.06, .14, .06, coat), .16, .22, 0).rotation.z = -.5; add(h, box(.1, .05, .05, coat), .22, .28, 0);
      const legs = [[-.1, -.03], [-.1, .03], [.1, -.03], [.1, .03]].map(([lx, lz]) => add(h, box(.025, .12, .025, coat), lx, .06, lz));
      add(h, new THREE.Mesh(new THREE.SphereGeometry(.045, 8, 6), new THREE.MeshStandardMaterial({ color: c, roughness: .5 })), 0, .27, 0);
      h.scale.setScalar(1.3); h.position.y = .89;
      return { h, legs, lane: 1.42 + i * .14, a: Math.PI / 2, v: 0 };
    });
    let race = 0;
    updaters.push((dt, t) => { race += dt; const run = race % 14 < 10; horses.forEach((o, i) => { if (run) { o.v = 1.1 + Math.sin(t * (.7 + i * .13) + i) * .25 + Math.sin(t * 2.3 + i * 4) * .1; o.a -= o.v * dt / sx; } else { o.a += (Math.PI / 2 - ((o.a % TAU) + TAU) % TAU) * .0; }
      const x = Math.cos(o.a) * o.lane * sx, z = Math.sin(o.a) * o.lane; o.h.position.x = x; o.h.position.z = z; o.h.rotation.y = Math.atan2(Math.cos(o.a) * o.lane, Math.sin(o.a) * o.lane * sx);
      const gl = run ? Math.sin(t * 18 + i) * .5 : 0; o.legs.forEach((l, k) => l.rotation.z = k % 2 ? gl : -gl); o.h.position.y = .89 + (run ? Math.abs(Math.sin(t * 18 + i)) * .03 : 0); }); });
    const ot = canvasTex(1024, 400, (gg, w, h) => { gg.fillStyle = '#062a18'; gg.fillRect(0, 0, w, h); gg.fillStyle = '#ffd36b'; gg.font = `900 70px ${SERIF}`; gg.textAlign = 'center'; gg.fillText('DERBY DASH', w / 2, 80);
      ['THUNDER  2.4', 'BLUE BOLT  3.1', 'GOLDIE  4.5', 'CLOVER  6.0', 'VIOLET  9.0', 'GHOST  15.0'].forEach((s, i) => { gg.fillStyle = hc[i]; gg.fillRect(70 + (i % 2) * 470, 130 + Math.floor(i / 2) * 85, 40, 40); gg.fillStyle = '#fff'; gg.font = `800 40px ${FONT}`; gg.textAlign = 'left'; gg.fillText(s, 130 + (i % 2) * 470, 164 + Math.floor(i / 2) * 85); }); });
    const board = new THREE.Group(); board.position.set(0, 0, -2.9); g.add(board); add(board, box(4.4, 1.9, .15, M.black), 0, 2.6, 0); add(board, new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.65), glowMap(ot, 1.1)), 0, 2.6, .08); add(board, box(.15, 1.7, .15, M.gold), -1.8, .85, 0); add(board, box(.15, 1.7, .15, M.gold), 1.8, .85, 0);
    colliders.push({ t: 'b', x: 17, z: 14.5, hw: 4.2, hd: 2.5, a: 0 }, { t: 'b', x: 17, z: 11.6, hw: 2.3, hd: .2, a: 0 });
    for (let i = 0; i < 4; i++) stool(g, -3 + i * 2, 3.1);
    pointSpots.push({ x: 17, y: 3.6, z: 14.5, c: 0xffe2b0, i: 1.2, d: 9, spot: true });
    station('derby', 'Derby Dash', g, { hot: [0, 3.4], r: 3.6, seats: [0, 1, 2, 3].map(i => [-3 + i * 2, 3.1, .78]), lbl: [0, 4.2, -2.9], look: [0, 0], sub: 'SIX HORSES · PHOTO FINISH' });
  }

  return { stations, colliders, updaters, pointSpots, dealers, screens, chandeliers, floor, carpetMat, M, update(dt, t) { for (const u of updaters) u(dt, t); for (const d of dealers) d.update(dt, { deal: d.tag && true }); } };
}
