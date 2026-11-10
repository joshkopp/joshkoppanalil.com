// Desert terrain: dunes, layered mesas, mountain rim. Height samples are shared by the mesh, collisions and AI.
import * as THREE from 'three';

export const SIZE = 14000, SEG = 340, HALF = SIZE / 2, ARENA = 4600;
function hash(x, y) { let h = x * 374761393 + y * 668265263; h = (h ^ (h >>> 13)) * 1274126177; return ((h ^ (h >>> 16)) >>> 0) / 4294967295; }
function vnoise(x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi), b = hash(xi + 1, yi), c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; }
export function fbm(x, y, o = 4) { let s = 0, a = .5, f = 1, n = 0; for (let k = 0; k < o; k++) { s += vnoise(x * f, y * f) * a; n += a; a *= .5; f *= 2.03; } return s / n; }
const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
function rawH(x, z) {
  const d = fbm(x * .0011 + 3, z * .0011 - 7, 4), r = Math.hypot(x, z);
  let h = d * 110 + Math.sin(x * .0042 + d * 6) * Math.cos(z * .0017) * 14;
  const m = fbm(x * .00042 + 40, z * .00042 + 11, 3);
  h += ss(.6, .625, m) * 230 + ss(.68, .7, m) * 150 + ss(.75, .765, m) * 110; // stepped mesas
  h += ss(4300, 6400, r) * (700 + fbm(x * .0009, z * .0009, 3) * 900); // mountain rim
  return h;
}
export class Terrain {
  constructor() {
    const n = SEG + 1; this.h = new Float32Array(n * n);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) this.h[j * n + i] = rawH(-HALF + i * SIZE / SEG, -HALF + j * SIZE / SEG);
  }
  height(x, z) {
    const n = SEG + 1, fx = (x + HALF) / SIZE * SEG, fz = (z + HALF) / SIZE * SEG;
    if (fx < 0 || fz < 0 || fx >= SEG || fz >= SEG) return 800;
    const i = Math.floor(fx), j = Math.floor(fz), u = fx - i, v = fz - j, H = this.h;
    const a = H[j * n + i], b = H[j * n + i + 1], c = H[(j + 1) * n + i], d = H[(j + 1) * n + i + 1];
    return u + v < 1 ? a + (b - a) * u + (c - a) * v : d + (c - d) * (1 - u) + (b - d) * (1 - v);
  }
  mesh(renderer) {
    const g = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG); g.rotateX(-Math.PI / 2);
    const p = g.attributes.position, n = SEG + 1;
    for (let k = 0; k < p.count; k++) { const i = k % n, j = Math.floor(k / n); p.setY(k, this.h[j * n + i]); }
    g.computeVertexNormals();
    const nor = g.attributes.normal, col = new Float32Array(p.count * 3), c = new THREE.Color();
    const sand = new THREE.Color('#e3b97f'), sand2 = new THREE.Color('#d39c62'), rock = new THREE.Color('#a4583a'), rock2 = new THREE.Color('#7a3f2c'), top = new THREE.Color('#c98a58'), snow = new THREE.Color('#b7896b');
    for (let k = 0; k < p.count; k++) {
      const x = p.getX(k), y = p.getY(k), z = p.getZ(k), ny = nor.getY(k), v = fbm(x * .004, z * .004, 2);
      c.copy(sand).lerp(sand2, v * .9);
      const steep = ss(.93, .72, ny); c.lerp(y > 120 ? rock : rock2, steep);
      if (y > 180 && ny > .95) c.lerp(top, .55);
      if (y > 500) c.lerp(snow, ss(500, 900, y) * .6);
      const band = Math.sin(y * .12) * .5 + .5; if (steep > .4) c.multiplyScalar(.88 + band * .2);
      col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    const cv = document.createElement('canvas'); cv.width = cv.height = 256; const gg = cv.getContext('2d'); gg.fillStyle = '#808080'; gg.fillRect(0, 0, 256, 256);
    for (let k = 0; k < 9000; k++) { const s = Math.random(); gg.fillStyle = `rgba(${s < .5 ? 255 : 40},${s < .5 ? 240 : 30},${s < .5 ? 220 : 20},${.05 + Math.random() * .08})`; gg.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 2, 1 + Math.random() * 2); }
    for (let k = 0; k < 40; k++) { gg.strokeStyle = 'rgba(90,60,30,.08)'; gg.lineWidth = 2; gg.beginPath(); const y = Math.random() * 256; gg.moveTo(0, y); for (let x = 0; x <= 256; x += 16) gg.lineTo(x, y + Math.sin(x * .05 + k) * 4); gg.stroke(); }
    const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(420, 420); tex.anisotropy = renderer.capabilities.getMaxAnisotropy(); tex.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshStandardMaterial({ vertexColors: true, map: tex, roughness: .95, metalness: 0 });
    const mesh = new THREE.Mesh(g, m); mesh.receiveShadow = true; return mesh;
  }
  rocks() {
    const geo = new THREE.DodecahedronGeometry(1, 0), mat = new THREE.MeshStandardMaterial({ color: '#8d5a3e', roughness: 1, flatShading: true });
    const N = 700, im = new THREE.InstancedMesh(geo, mat, N), o = new THREE.Object3D();
    for (let k = 0; k < N; k++) { const r = Math.sqrt(Math.random()) * 4200, a = Math.random() * 7, x = Math.cos(a) * r, z = Math.sin(a) * r, s = 4 + Math.random() ** 3 * 30;
      o.position.set(x, this.height(x, z) + s * .2, z); o.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3); o.scale.set(s, s * (.5 + Math.random() * .5), s); o.updateMatrix(); im.setMatrixAt(k, o.matrix); }
    im.castShadow = true; im.receiveShadow = true; return im;
  }
}
export function sky(sunDir) {
  const m = new THREE.ShaderMaterial({ side: THREE.BackSide, depthWrite: false, fog: false, uniforms: { sun: { value: sunDir.clone().normalize() } },
    vertexShader: 'varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }',
    fragmentShader: `uniform vec3 sun; varying vec3 vP;
      void main(){ float y=vP.y; vec3 hor=vec3(.93,.82,.66), mid=vec3(.62,.74,.86), top=vec3(.2,.42,.74);
        vec3 c=mix(hor,mid,smoothstep(-.02,.18,y)); c=mix(c,top,smoothstep(.15,.85,y)); if(y<0.) c=mix(hor,vec3(.85,.72,.55),smoothstep(0.,-.2,y));
        float s=max(dot(vP,sun),0.); c+=vec3(1.,.85,.6)*(pow(s,900.)*4.+pow(s,24.)*.35+pow(s,4.)*.08);
        gl_FragColor=vec4(c,1.); }` });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(20000, 32, 16), m); mesh.renderOrder = -2; return mesh;
}
export function clouds() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const g = cv.getContext('2d');
  for (let k = 0; k < 26; k++) { const x = 30 + Math.random() * 68, y = 45 + Math.random() * 38, r = 12 + Math.random() * 22; const gr = g.createRadialGradient(x, y, 0, x, y, r); gr.addColorStop(0, 'rgba(255,255,255,.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128); }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; const grp = new THREE.Group();
  for (let k = 0; k < 46; k++) { const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: '#fffaf0', transparent: true, opacity: .55 + Math.random() * .3, depthWrite: false, fog: true }));
    const r = 800 + Math.random() * 5200, a = Math.random() * 7; s.position.set(Math.cos(a) * r, 1500 + Math.random() * 1400, Math.sin(a) * r); const w = 600 + Math.random() * 900; s.scale.set(w, w * .45, 1); grp.add(s); }
  return grp;
}
