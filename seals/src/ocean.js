// Ocean (PBR water with Gerstner swell), physical sky, islands. waveHeight() mirrors the GPU waves for buoyancy.
import * as THREE from 'three';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

export const WAVES = [[.35, 140, .95], [1.15, 76, .55], [-.45, 41, .26]]; // dir (rad), wavelength (m), amplitude (m)
const K = WAVES.map(([a, L, A]) => { const k = Math.PI * 2 / L; return { dx: Math.cos(a), dz: Math.sin(a), k, c: Math.sqrt(9.81 / k), A, Q: .55 / (k * A * WAVES.length) }; });
export function waveHeight(x, z, t) { let y = 0; for (const w of K) y += w.A * Math.sin(w.k * (w.dx * x + w.dz * z - w.c * t)); return y; }
const GLSL_WAVES = `
const int NW = ${K.length};
uniform float uT;
vec3 gerstner(vec2 p, out vec3 nrm){ vec3 o = vec3(0.); vec3 n = vec3(0., 1., 0.);
  ${K.map((w, i) => `{ vec2 d = vec2(${w.dx.toFixed(5)}, ${w.dz.toFixed(5)}); float k = ${w.k.toFixed(6)}, A = ${w.A.toFixed(4)}, Q = ${w.Q.toFixed(5)}, f = k * (dot(d, p) - ${w.c.toFixed(5)} * uT);
    o.x += Q * A * d.x * cos(f); o.z += Q * A * d.y * cos(f); o.y += A * sin(f); n.x -= d.x * k * A * cos(f); n.z -= d.y * k * A * cos(f); n.y -= Q * k * A * sin(f); }`).join('\n  ')}
  nrm = normalize(n); return o; }`;

export function buildOcean(Q) {
  // dense near the centre, coarse at the horizon; the mesh follows the camera
  const seg = Q === 'low' ? 160 : 260, pos = [], idx = [], R = 6000, ex = 2.3;
  for (let j = 0; j <= seg; j++) for (let i = 0; i <= seg; i++) { const u = i / seg * 2 - 1, v = j / seg * 2 - 1; pos.push(Math.sign(u) * Math.abs(u) ** ex * R, 0, Math.sign(v) * Math.abs(v) ** ex * R); }
  for (let j = 0; j < seg; j++) for (let i = 0; i < seg; i++) { const a = j * (seg + 1) + i, b = a + 1, c = a + seg + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(new Array(pos.length).fill(0).map((_, k) => k % 3 === 1 ? 1 : 0), 3)); g.setIndex(idx);
  const uni = { uT: { value: 0 } };
  const m = new THREE.MeshStandardMaterial({ color: '#0b3346', roughness: .09, metalness: 0, envMapIntensity: .9 });
  m.onBeforeCompile = sh => { sh.uniforms.uT = uni.uT;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\n' + GLSL_WAVES + '\nvarying vec3 vWP; varying float vH;')
      .replace('#include <beginnormal_vertex>', 'vec3 wp0 = (modelMatrix * vec4(position, 1.)).xyz; vec3 gn; vec3 gd = gerstner(wp0.xz, gn); vec3 objectNormal = gn;')
      .replace('#include <begin_vertex>', 'vec3 transformed = position + gd; vH = gd.y; vWP = wp0 + gd;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      ${GLSL_WAVES}
      varying vec3 vWP; varying float vH;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <normal_fragment_maps>', `#include <normal_fragment_maps>
      { vec3 gn; gerstner(vWP.xz, gn); vec2 p = vWP.xz; float e = .35;
        vec2 q1 = p * .11 + vec2(uT * .35, uT * .2), q2 = p * .37 - vec2(uT * .5, -uT * .3), q3 = p * 1.3 + vec2(uT * .9, uT * .4);
        float n0 = vn(q1) * .55 + vn(q2) * .3 + vn(q3) * .15;
        float nx = (vn(q1 + vec2(e, 0.)) * .55 + vn(q2 + vec2(e, 0.)) * .3 + vn(q3 + vec2(e, 0.)) * .15) - n0;
        float nz = (vn(q1 + vec2(0., e)) * .55 + vn(q2 + vec2(0., e)) * .3 + vn(q3 + vec2(0., e)) * .15) - n0;
        float dist = length(vWP - cameraPosition), fade = 1. - smoothstep(150., 2500., dist);
        vec3 wn = normalize(gn + vec3(-nx, 0., -nz) * 1.6 * fade);
        normal = normalize((viewMatrix * vec4(wn, 0.)).xyz); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
        float crest = smoothstep(.7, 1.6, vH); float fn = vn(vWP.xz * .25 + uT * .1) * vn(vWP.xz * 1.1 - uT * .2);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.12, .32, .36), smoothstep(-.6, 1.2, vH) * .45);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.85, .9, .92), clamp(crest * fn * 1.6, 0., .7));`);
  };
  const mesh = new THREE.Mesh(g, m); mesh.frustumCulled = false; mesh.receiveShadow = Q === 'high'; mesh.userData.uni = uni; return mesh;
}
const clampSky = sk => { sk.material.fragmentShader = sk.material.fragmentShader.replace('gl_FragColor = vec4( texColor, 1.0 );', 'gl_FragColor = vec4( min( texColor, vec3( 2.2 ) ), 1.0 );'); sk.material.needsUpdate = true; return sk; };
export function buildSky(renderer, scene, sunElev = 7, sunAz = 200) {
  const sky = clampSky(new Sky()); sky.scale.setScalar(40000); const u = sky.material.uniforms; u.turbidity.value = 3.5; u.rayleigh.value = 2.2; u.mieCoefficient.value = .005; u.mieDirectionalG.value = .85;
  const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(90 - sunElev), THREE.MathUtils.degToRad(sunAz)); u.sunPosition.value.copy(sun);
  const pm = new THREE.PMREMGenerator(renderer), es = new THREE.Scene(), s2 = clampSky(new Sky()); s2.scale.setScalar(100); s2.material.uniforms.sunPosition.value.copy(sun); s2.material.uniforms.turbidity.value = 3.5; s2.material.uniforms.rayleigh.value = 2.2; es.add(s2);
  scene.environment = pm.fromScene(es, 0, .1, 1000).texture; return { sky, sun };
}
export const ISLANDS = [[-2600, -3400, 520, 110], [3100, -1500, 700, 160], [-500, 2600, 420, 70], [4200, 3900, 560, 120], [-4600, 1400, 380, 90], [700, -5200, 460, 100]];
export function buildIslands() {
  const g = new THREE.Group(), mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: .95, flatShading: true });
  ISLANDS.forEach(([x, z, r, h], k) => { const geo = new THREE.CircleGeometry(r * 1.25, 64, 0, Math.PI * 2); const p = geo.attributes.position, col = [];
    const seed = k * 17.3, n = (a, b) => Math.sin(a * 1.7 + seed) * Math.cos(b * 1.3 - seed) * .5 + Math.sin(a * 4.1 + b * 3.3 + seed) * .25;
    // add rings so the profile can rise smoothly
    const rings = 14, segs = 64, P = [], I = []; for (let ri = 0; ri <= rings; ri++) for (let s = 0; s < segs; s++) { const a = s / segs * Math.PI * 2, t = ri / rings, rr = r * 1.25 * t * (1 + n(Math.cos(a) * 2, Math.sin(a) * 2) * .25), hh = (t < .78 ? h * Math.pow(1 - t / .78, 1.6) * (1 + n(a * 2, t * 5) * .35) : -12 * (t - .78) / .22) + 2;
      P.push(Math.cos(a) * rr, hh, Math.sin(a) * rr); const c = hh < 5 ? [.76, .68, .5] : hh < h * .55 ? [.24 + n(a, t) * .05, .36, .17] : [.42, .4, .38]; col.push(...c); }
    for (let ri = 0; ri < rings; ri++) for (let s = 0; s < segs; s++) { const a = ri * segs + s, b = ri * segs + (s + 1) % segs, c = a + segs, d = b + segs; I.push(a, b, c, b, d, c); }
    geo.dispose(); const gg = new THREE.BufferGeometry(); gg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); gg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); gg.setIndex(I); gg.computeVertexNormals();
    const m = new THREE.Mesh(gg, mat); m.position.set(x, -1.5, z); m.castShadow = m.receiveShadow = true; g.add(m); });
  return g;
}
