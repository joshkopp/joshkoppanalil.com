// THE LAST SHIFT — teammate avatars + the VHS post effect.
import * as THREE from 'three';

export const COLORS = ['#c0392b', '#2e86c1', '#d4ac0d', '#28b463'];

export function makeAvatar(name, color) {
  const root = new THREE.Group();
  const jacket = new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(0.75), roughness: 0.8 });
  const pants = new THREE.MeshStandardMaterial({ color: 0x23262b, roughness: 0.9 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xc69276, roughness: 0.7 });
  const hair = new THREE.MeshStandardMaterial({ color: 0x1f1610, roughness: 0.9 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x111, roughness: 0.5, metalness: 0.5 });
  const seg = (r, l, m) => { const g = new THREE.CapsuleGeometry(r, l, 4, 8); g.translate(0, -l / 2 - r * 0.5, 0); const me = new THREE.Mesh(g, m); me.castShadow = true; return me; };
  const body = new THREE.Group(); root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.95; body.add(hips);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.42, 4, 10), jacket); torso.position.y = 0.36; torso.scale.set(1, 1, 0.68); torso.castShadow = true; hips.add(torso);
  const head = new THREE.Group(); head.position.y = 0.8; hips.add(head);
  const hm = new THREE.Mesh(new THREE.SphereGeometry(0.115, 14, 10), skin); hm.scale.set(0.92, 1.1, 1); hm.castShadow = true; head.add(hm);
  const hr = new THREE.Mesh(new THREE.SphereGeometry(0.122, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.55), hair); hr.position.y = 0.02; hr.rotation.x = -0.25; head.add(hr);
  const legs = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * 0.1, 0, 0); hips.add(p); p.add(seg(0.075, 0.4, pants)); const k = new THREE.Group(); k.position.y = -0.5; p.add(k); k.add(seg(0.065, 0.38, pants)); const sh = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.07, 0.24), dark); sh.position.set(0, -0.46, 0.05); k.add(sh); return [p, k]; });
  const arms = [-1, 1].map(s => { const p = new THREE.Group(); p.position.set(s * 0.25, 0.62, 0); hips.add(p); p.add(seg(0.06, 0.28, jacket)); const e = new THREE.Group(); e.position.y = -0.38; p.add(e); e.add(seg(0.05, 0.26, jacket)); const h = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), skin); h.position.y = -0.38; e.add(h); return [p, e]; });
  // flashlight in right hand
  const fl = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.22, 10), dark); fl.rotation.x = Math.PI / 2; fl.position.set(0, -0.4, 0.08); arms[1][1].add(fl);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.03, 10), new THREE.MeshBasicMaterial({ color: 0x000000 })); lens.position.set(0, 0.111, 0); lens.rotation.x = -Math.PI / 2; fl.add(lens);
  // name tag
  const c = document.createElement('canvas'); c.width = 256; c.height = 64; const x = c.getContext('2d');
  x.font = '600 34px Rajdhani, Arial'; x.textAlign = 'center'; x.fillStyle = 'rgba(0,0,0,.5)'; x.fillRect(28, 10, 200, 44); x.fillStyle = '#eee'; x.fillText(name.slice(0, 14), 128, 44);
  const tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: false, fog: false })); tag.scale.set(0.9, 0.22, 1); tag.position.y = 2.05; tag.renderOrder = 10; root.add(tag);
  root.traverse(o => { if (o.isMesh) o.receiveShadow = true; });
  let ph = 0;
  const update = (dt, s) => { // s: {speed, crouch, down, pitch, flash, t}
    ph += dt * s.speed * 2.6;
    const k = Math.min(1, s.speed / 3);
    if (s.down) {
      body.rotation.x = -Math.PI / 2 + 0.1; body.position.set(0, 0.25, -0.6);
      legs.forEach(([p, kn], i) => { p.rotation.x = 0.1 * i; kn.rotation.x = 0.3; });
      arms.forEach(([p, e], i) => { p.rotation.set(-0.4 - i * 0.6 + Math.sin(s.t * 2 + i) * 0.1, 0, 0); e.rotation.x = -0.3; });
      head.rotation.set(0.3, Math.sin(s.t * 0.7) * 0.3, 0);
      lens.material.color.setRGB(0, 0, 0); return;
    }
    body.rotation.x = 0; body.position.set(0, s.crouch ? -0.38 : 0, 0);
    hips.rotation.x = s.crouch ? 0.35 : 0;
    legs.forEach(([p, kn], i) => { const sg = i ? 1 : -1; p.rotation.x = Math.sin(ph) * 0.6 * k * sg - (s.crouch ? 1.1 : 0); kn.rotation.x = Math.max(0, Math.sin(ph + (i ? 0 : Math.PI) - 0.6)) * 0.9 * k + (s.crouch ? 1.6 : 0); });
    arms[0][0].rotation.x = -Math.sin(ph) * 0.5 * k; arms[0][1].rotation.x = -0.3;
    arms[1][0].rotation.x = -1.25 - s.pitch * 0.8; arms[1][1].rotation.x = -0.15;
    head.rotation.x = -s.pitch * 0.6;
    lens.material.color.setRGB(s.flash ? 4 : 0, s.flash ? 3.8 : 0, s.flash ? 3.3 : 0);
  };
  return { group: root, update, tag, flashTip: fl };
}

export const VHSShader = {
  uniforms: { tDiffuse: { value: null }, time: { value: 0 }, glitch: { value: 0 }, grain: { value: 0.06 }, vig: { value: 1.25 }, red: { value: 0 } },
  vertexShader: 'varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
  fragmentShader: `uniform sampler2D tDiffuse;uniform float time,glitch,grain,vig,red;varying vec2 vUv;
    float rnd(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
    void main(){
      vec2 uv=vUv;float g=glitch;
      float band=step(1.-g*.08,rnd(vec2(floor(uv.y*90.),floor(time*14.))));
      uv.x+=band*g*.05*(rnd(vec2(time,floor(uv.y*90.)))-.5);
      uv.x+=g*.003*sin(uv.y*160.+time*40.);
      float ca=.0009+g*.007;
      vec3 c=vec3(texture2D(tDiffuse,uv+vec2(ca,0.)).r,texture2D(tDiffuse,uv).g,texture2D(tDiffuse,uv-vec2(ca,0.)).b);
      c*=1.-g*.22*(.5+.5*sin(uv.y*800.+time*10.));
      float roll=smoothstep(.0,.02,abs(fract(uv.y*.5-time*.3*g)-.5))*g;c+=vec3(.06)*(1.-roll)*g;
      c+=(rnd(uv*1000.+time*37.)-.5)*(grain+g*.12);
      vec2 d=vUv-.5;c*=clamp(1.-dot(d,d)*vig,0.,1.);
      float l=dot(c,vec3(.299,.587,.114));c=mix(vec3(l),c,.85-g*.35);
      c=mix(c,vec3(l*1.4,l*.15,l*.12),red);
      gl_FragColor=vec4(c,1.);}`,
};
