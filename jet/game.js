var ff=0,eu=1,pf=2;var Fs=1,mf=2,Lr=3,yi=0,en=1,In=2,Os=0,hs=1,qt=2,tu=3,nu=4,gf=5;var Bs=100,xf=101,_f=102,yf=103,vf=104,Mf=200,Sf=201,bf=202,Ef=203,iu=204,su=205,Tf=206,wf=207,Af=208,Rf=209,Cf=210,If=211,Pf=212,Lf=213,Df=214,ol=0,al=1,ll=2,_r=3,cl=4,hl=5,ul=6,dl=7,Hl=0,Nf=1,Uf=2,vi=0,ru=1,ou=2,au=3,Xo=4,lu=5,cu=6,hu=7;var uu=300,ks=301,Dr=302,Gl=303,Vl=304,oi=1e3,mi=1001,fl=1002,cn=1003,Ff=1004;var qo=1005;var Rn=1006,Wl=1007;var zi=1008;var Nn=1009,du=1010,fu=1011,Nr=1012,Xl=1013,li=1014,Jn=1015,ci=1016,ql=1017,Yl=1018,zs=1020,pu=35902,mu=35899,gu=1021,xu=1022,hi=1023,Ui=1026,Hi=1027,$l=1028,Zl=1029,us=1030,Jl=1031;var Kl=1033,Yo=33776,$o=33777,Zo=33778,Jo=33779,jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37488,oc=37489,Ko=37490,ac=37491,lc=37808,cc=37809,hc=37810,uc=37811,dc=37812,fc=37813,pc=37814,mc=37815,gc=37816,xc=37817,_c=37818,yc=37819,vc=37820,Mc=37821,Sc=36492,bc=36494,Ec=36495,Tc=36283,wc=36284,jo=36285,Ac=36286;var co=2300,pl=2301,sl=2302,Gh=2303,Vh=2400,Wh=2401,Xh=2402;var Of=3200;var Qo=0,Bf=1,Gi="",Ct="srgb",ho="srgb-linear",uo="linear",vt="srgb";var rl=7680;var kf=519,zf=512,Hf=513,Gf=514,_u=515,Vf=516,Wf=517,yu=518,vu=519,Mu=35044,Hs=35048;var Su="300 es",$n=2e3,yr=2001;function Km(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function jm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xf(){let n=fo("canvas");return n.style.display="block",n}var Id={},vr=null;function po(...n){let e="THREE."+n.shift();vr?vr("log",e,...n):console.log(e,...n)}function qf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ye(...n){n=qf(n);let e="THREE."+n.shift();if(vr)vr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function $e(...n){n=qf(n);let e="THREE."+n.shift();if(vr)vr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Cs(...n){let e=n.join(" ");e in Id||(Id[e]=!0,Ye(...n))}function Yf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var $f={[ol]:ol,[ll]:ul,[cl]:cl,[_r]:hl,[al]:al,[ul]:ll,[dl]:dl,[hl]:_r},gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gh=Math.PI/180,ml=180/Math.PI;function ds(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Qm(n,e){return(n%e+e)%e}function xh(n,e,t){return(1-t)*n+t*e}function Zf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Rc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Jf(n,e){if(e.constructor===Float32Array)return n;let t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Kf(n,e){if(e.constructor===Float32Array)return n;let t=Rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Ru=class Ru{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ru.prototype.isVector2=!0;var oe=Ru,Tt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*v;m<0&&(u=-u,f=-f,p=-p,v=-v,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);g=Math.sin(g*y)/S,a=Math.sin(a*y)/S,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+v*a;let y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+h*d+l*f-c*u,e[t+1]=l*p+h*u+c*d-a*f,e[t+2]=c*p+h*f+a*u-l*d,e[t+3]=h*p-a*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cu=class Cu{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _h.copy(this).projectOnVector(e),this.sub(_h)}reflect(e){return this.sub(_h.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cu.prototype.isVector3=!0;var P=Cu,_h=new P,Pd=new Tt,Iu=class Iu{constructor(e,t,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],p=i[8],v=s[0],m=s[3],g=s[6],y=s[1],S=s[4],M=s[7],A=s[2],T=s[5],x=s[8];return r[0]=o*v+a*y+l*A,r[3]=o*m+a*S+l*T,r[6]=o*g+a*M+l*x,r[1]=c*v+h*y+d*A,r[4]=c*m+h*S+d*T,r[7]=c*g+h*M+d*x,r[2]=u*v+f*y+p*A,r[5]=u*m+f*S+p*T,r[8]=u*g+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=t*d+i*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(s*c-h*i)*v,e[2]=(a*i-s*o)*v,e[3]=u*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,t)),this}rotate(e){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,t){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Iu.prototype.isMatrix3=!0;var Ke=Iu,yh=new Ke,Ld=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function e0(){let n={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===vt&&(s.r=Ni(s.r),s.g=Ni(s.g),s.b=Ni(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===vt&&(s.r=xr(s.r),s.g=xr(s.g),s.b=xr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gi?uo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ho]:{primaries:e,whitePoint:i,transfer:uo,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:vt,toXYZ:Ld,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}var pt=e0();function Ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,gl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qs===void 0&&(Qs=fo("canvas")),Qs.width=e.width,Qs.height=e.height;let s=Qs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ni(t[i]/255)*255):t[i]=Ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},t0=0,Mr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t0++}),this.uuid=ds(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vh(s[o].image)):r.push(vh(s[o]))}else r=vh(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}var n0=0,Mh=new P,Cn=class n extends gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mi,s=mi,r=Rn,o=zi,a=hi,l=Nn,c=n.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=ds(),this.name="",this.source=new Mr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Mh).x}get height(){return this.source.getSize(Mh).y}get depth(){return this.source.getSize(Mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case fl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case fl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=uu;Cn.DEFAULT_ANISOTROPY=1;var Pu=class Pu{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(f+1)/2,A=(g+1)/2,T=(h+u)/4,x=(d+v)/4,b=(p+m)/4;return S>M&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):M>A?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pu.prototype.isVector4=!0;var Lt=Pu,xl=class extends gi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Cn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends xl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mo=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _l=class extends Cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var zl=class zl{constructor(e,t,i,s,r,o,a,l,c,h,d,u,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,v,m)}set(e,t,i,s,r,o,a,l,c,h,d,u,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/er.setFromMatrixColumn(e,0).length(),r=1/er.setFromMatrixColumn(e,1).length(),o=1/er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u+v*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=f*a-p,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,p=c*h,v=c*d;t[0]=u-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*h,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let u=o*h,f=o*d,p=a*h,v=a*d;t[0]=l*h,t[4]=p*c-f,t[8]=u*c+v,t[1]=l*d,t[5]=v*c+u,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=v-u*d,t[8]=p*d+f,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*d+p,t[10]=u-v*d}else if(e.order==="XZY"){let u=o*l,f=o*c,p=a*l,v=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+v,t[5]=o*h,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*h,t[10]=v*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(i0,e,s0)}lookAt(e,t,i){let s=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ji.crossVectors(i,Fn),ji.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ji.crossVectors(i,Fn)),ji.normalize(),Ia.crossVectors(Fn,ji),s[0]=ji.x,s[4]=Ia.x,s[8]=Fn.x,s[1]=ji.y,s[5]=Ia.y,s[9]=Fn.y,s[2]=ji.z,s[6]=Ia.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],y=i[3],S=i[7],M=i[11],A=i[15],T=s[0],x=s[4],b=s[8],L=s[12],C=s[1],D=s[5],z=s[9],W=s[13],R=s[2],O=s[6],U=s[10],F=s[14],Z=s[3],V=s[7],K=s[11],ne=s[15];return r[0]=o*T+a*C+l*R+c*Z,r[4]=o*x+a*D+l*O+c*V,r[8]=o*b+a*z+l*U+c*K,r[12]=o*L+a*W+l*F+c*ne,r[1]=h*T+d*C+u*R+f*Z,r[5]=h*x+d*D+u*O+f*V,r[9]=h*b+d*z+u*U+f*K,r[13]=h*L+d*W+u*F+f*ne,r[2]=p*T+v*C+m*R+g*Z,r[6]=p*x+v*D+m*O+g*V,r[10]=p*b+v*z+m*U+g*K,r[14]=p*L+v*W+m*F+g*ne,r[3]=y*T+S*C+M*R+A*Z,r[7]=y*x+S*D+M*O+A*V,r[11]=y*b+S*z+M*U+A*K,r[15]=y*L+S*W+M*F+A*ne,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],y=l*f-c*u,S=a*f-c*d,M=a*u-l*d,A=o*f-c*h,T=o*u-l*h,x=o*d-a*h;return t*(v*y-m*S+g*M)-i*(p*y-m*A+g*T)+s*(p*S-v*A+g*x)-r*(p*M-v*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],h=e[10];return t*(o*h-a*c)-i*(r*h-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=t*a-i*o,S=t*l-s*o,M=t*c-r*o,A=i*l-s*a,T=i*c-r*a,x=s*c-r*l,b=h*v-d*p,L=h*m-u*p,C=h*g-f*p,D=d*m-u*v,z=d*g-f*v,W=u*g-f*m,R=y*W-S*z+M*D+A*C-T*L+x*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(a*W-l*z+c*D)*O,e[1]=(s*z-i*W-r*D)*O,e[2]=(v*x-m*T+g*A)*O,e[3]=(u*T-d*x-f*A)*O,e[4]=(l*C-o*W-c*L)*O,e[5]=(t*W-s*C+r*L)*O,e[6]=(m*M-p*x-g*S)*O,e[7]=(h*x-u*M+f*S)*O,e[8]=(o*z-a*C+c*b)*O,e[9]=(i*C-t*z-r*b)*O,e[10]=(p*T-v*M+g*y)*O,e[11]=(d*M-h*T-f*y)*O,e[12]=(a*L-o*D-l*b)*O,e[13]=(t*D-i*L+s*b)*O,e[14]=(v*S-p*A-m*y)*O,e[15]=(h*A-d*S+u*y)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,v=o*h,m=o*d,g=a*d,y=l*c,S=l*h,M=l*d,A=i.x,T=i.y,x=i.z;return s[0]=(1-(v+g))*A,s[1]=(f+M)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(u+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+S)*x,s[9]=(m-y)*x,s[10]=(1-(u+v))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let o=er.set(s[0],s[1],s[2]).length(),a=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ni.copy(this);let c=1/o,h=1/a,d=1/l;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=h,ni.elements[5]*=h,ni.elements[6]*=h,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,t.setFromRotationMatrix(ni),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=$n,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===$n)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===yr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=$n,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===$n)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===yr)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};zl.prototype.isMatrix4=!0;var lt=zl,er=new P,ni=new lt,i0=new P(0,0,0),s0=new P(1,1,1),ji=new P,Ia=new P,Fn=new P,Nd=new lt,Ud=new Tt,pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ud.setFromEuler(this),this.setFromQuaternion(Ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pn.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},r0=0,Fd=new P,tr=new Tt,Ri=new lt,Pa=new P,Kr=new P,o0=new P,a0=new Tt,Od=new P(1,0,0),Bd=new P(0,1,0),kd=new P(0,0,1),zd={type:"added"},l0={type:"removed"},nr={type:"childadded",child:null},Sh={type:"childremoved",child:null},Ot=class n extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new pn,i=new Tt,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.multiply(tr),this}rotateOnWorldAxis(e,t){return tr.setFromAxisAngle(e,t),this.quaternion.premultiply(tr),this}rotateX(e){return this.rotateOnAxis(Od,e)}rotateY(e){return this.rotateOnAxis(Bd,e)}rotateZ(e){return this.rotateOnAxis(kd,e)}translateOnAxis(e,t){return Fd.copy(e).applyQuaternion(this.quaternion),this.position.add(Fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Od,e)}translateY(e){return this.translateOnAxis(Bd,e)}translateZ(e){return this.translateOnAxis(kd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pa.copy(e):Pa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Kr,Pa,this.up):Ri.lookAt(Pa,Kr,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),tr.setFromRotationMatrix(Ri),this.quaternion.premultiply(tr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zd),nr.child=e,this.dispatchEvent(nr),nr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zd),nr.child=e,this.dispatchEvent(nr),nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,o0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,a0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),u=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new P(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ut=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},c0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(c0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ut;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},La={h:0,s:0,l:0};function bh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=pt.workingColorSpace){if(e=Qm(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=bh(o,r,e+1/3),this.g=bh(o,r,e),this.b=bh(o,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let i=jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return pt.workingToColorSpace(Mn.copy(this),e),Math.round(ot(Mn.r*255,0,255))*65536+Math.round(ot(Mn.g*255,0,255))*256+Math.round(ot(Mn.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Mn.copy(this),t);let i=Mn.r,s=Mn.g,r=Mn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ct){pt.workingToColorSpace(Mn.copy(this),e);let t=Mn.r,i=Mn.g,s=Mn.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(La);let i=xh(Qi.h,La.h,t),s=xh(Qi.s,La.s,t),r=xh(Qi.l,La.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Mn=new Le;Le.NAMES=jf;var xo=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Is=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ii=new P,Ci=new P,Eh=new P,Ii=new P,ir=new P,sr=new P,Hd=new P,Th=new P,wh=new P,Ah=new P,Rh=new Lt,Ch=new Lt,Ih=new Lt,Di=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ii.subVectors(e,t),s.cross(ii);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){ii.subVectors(s,t),Ci.subVectors(i,t),Eh.subVectors(e,t);let o=ii.dot(ii),a=ii.dot(Ci),l=ii.dot(Eh),c=Ci.dot(Ci),h=Ci.dot(Eh),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Rh.setScalar(0),Ch.setScalar(0),Ih.setScalar(0),Rh.fromBufferAttribute(e,t),Ch.fromBufferAttribute(e,i),Ih.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Rh,r.x),o.addScaledVector(Ch,r.y),o.addScaledVector(Ih,r.z),o}static isFrontFacing(e,t,i,s){return ii.subVectors(i,t),Ci.subVectors(e,t),ii.cross(Ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ii.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;ir.subVectors(s,i),sr.subVectors(r,i),Th.subVectors(e,i);let l=ir.dot(Th),c=sr.dot(Th);if(l<=0&&c<=0)return t.copy(i);wh.subVectors(e,s);let h=ir.dot(wh),d=sr.dot(wh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),t.copy(i).addScaledVector(ir,o);Ah.subVectors(e,r);let f=ir.dot(Ah),p=sr.dot(Ah);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(sr,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Hd.subVectors(r,s),a=(d-h)/(d-h+(f-p)),t.copy(s).addScaledVector(Hd,a);let g=1/(m+v+u);return o=v*g,a=u*g,t.copy(i).addScaledVector(ir,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xi=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Da.copy(i.boundingBox)),Da.applyMatrix4(e.matrixWorld),this.union(Da)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jr),Na.subVectors(this.max,jr),rr.subVectors(e.a,jr),or.subVectors(e.b,jr),ar.subVectors(e.c,jr),es.subVectors(or,rr),ts.subVectors(ar,or),Es.subVectors(rr,ar);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Es.z,Es.y,es.z,0,-es.x,ts.z,0,-ts.x,Es.z,0,-Es.x,-es.y,es.x,0,-ts.y,ts.x,0,-Es.y,Es.x,0];return!Ph(t,rr,or,ar,Na)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,rr,or,ar,Na))?!1:(Ua.crossVectors(es,ts),t=[Ua.x,Ua.y,Ua.z],Ph(t,rr,or,ar,Na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Pi=[new P,new P,new P,new P,new P,new P,new P,new P],si=new P,Da=new xi,rr=new P,or=new P,ar=new P,es=new P,ts=new P,Es=new P,jr=new P,Na=new P,Ua=new P,Ts=new P;function Ph(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);let a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),h=i.dot(Ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Kt=new P,Fa=new oe,h0=0,Ft=class extends gi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Rc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fa.fromBufferAttribute(this,t),Fa.applyMatrix3(e),this.setXY(t,Fa.x,Fa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kf(e,this.array)}};var _o=class extends Ft{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var yo=class extends Ft{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ze=class extends Ft{constructor(e,t,i){super(new Float32Array(e),t,i)}},u0=new xi,Qr=new P,Lh=new P,Fi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):u0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qr.subVectors(e,this.center);let t=Qr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qr.copy(e.center).add(Lh)),this.expandByPoint(Qr.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},d0=0,Yn=new lt,Dh=new Ot,lr=new P,On=new xi,eo=new xi,ln=new P,Mt=class n extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=ds(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?yo:_o)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,i){return Yn.makeTranslation(e,t,i),this.applyMatrix4(Yn),this}scale(e,t,i){return Yn.makeScale(e,t,i),this.applyMatrix4(Yn),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];On.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];eo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(On.min,eo.min),On.expandByPoint(ln),ln.addVectors(On.max,eo.max),On.expandByPoint(ln)):(On.expandByPoint(eo.min),On.expandByPoint(eo.max))}On.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ln.fromBufferAttribute(a,c),l&&(lr.fromBufferAttribute(e,c),ln.add(lr)),s=Math.max(s,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Ft(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)a[L]=new P,l[L]=new P;let h=new P,d=new P,u=new P,f=new oe,p=new oe,v=new oe,m=new P,g=new P;function y(L,C,D){c[L]=c[C]=c[D]=1,h.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),u.fromBufferAttribute(i,D),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),d.sub(h),u.sub(h),p.sub(f),v.sub(f);let z=1/(p.x*v.y-v.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(z),g.copy(u).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(z),a[L].add(m),a[C].add(m),a[D].add(m),l[L].add(g),l[C].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,C=S.length;L<C;++L){let D=S[L],z=D.start,W=D.count;for(let R=z,O=z+W;R<O;R+=3)y(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let M=new P,A=new P,T=new P,x=new P;function b(L){T.fromBufferAttribute(s,L),x.copy(T);let C=a[L];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);let z=A.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,z)}for(let L=0,C=i.count;L<C;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,d=new P;if(e)for(let u=0,f=e.count;u<f;u+=3){let p=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new Ft(u,h,d)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},vo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=ds()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Gd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Gd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ds()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var An=new P,br=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Rc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){po("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){po("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Jf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Kf(e,this.data.array)}},Nh=new P,f0=new P,p0=new Ke,ri=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Nh.subVectors(i,t).cross(f0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Nh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||p0.getNormalMatrix(e),s=this.coplanarPoint(Nh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},m0=0,ai=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=ds(),this.name="",this.type="Material",this.blending=hs,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=su,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new oe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zn=class extends ai{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cr,to=new P,hr=new P,ur=new P,dr=new oe,no=new oe,Qf=new lt,Oa=new P,io=new P,Ba=new P,Vd=new oe,Uh=new oe,Wd=new oe,_i=class extends Ot{constructor(e=new Zn){if(super(),this.isSprite=!0,this.type="Sprite",cr===void 0){cr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vo(t,5);cr.setIndex([0,1,2,0,2,3]),cr.setAttribute("position",new br(i,3,0,!1)),cr.setAttribute("uv",new br(i,2,3,!1))}this.geometry=cr,this.material=e,this.center=new oe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hr.setFromMatrixScale(this.matrixWorld),Qf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hr.multiplyScalar(-ur.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ka(Oa.set(-.5,-.5,0),ur,o,hr,s,r),ka(io.set(.5,-.5,0),ur,o,hr,s,r),ka(Ba.set(.5,.5,0),ur,o,hr,s,r),Vd.set(0,0),Uh.set(1,0),Wd.set(1,1);let a=e.ray.intersectTriangle(Oa,io,Ba,!1,to);if(a===null&&(ka(io.set(-.5,.5,0),ur,o,hr,s,r),Uh.set(0,1),a=e.ray.intersectTriangle(Oa,Ba,io,!1,to),a===null))return;let l=e.ray.origin.distanceTo(to);l<e.near||l>e.far||t.push({distance:l,point:to.clone(),uv:Di.getInterpolation(to,Oa,io,Ba,Vd,Uh,Wd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ka(n,e,t,i,s,r){dr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(no.x=r*dr.x-s*dr.y,no.y=s*dr.x+r*dr.y):no.copy(dr),n.copy(e),n.x+=no.x,n.y+=no.y,n.applyMatrix4(Qf)}var Li=new P,Fh=new P,za=new P,Ha=new P,Mo=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fh.copy(e).add(t).multiplyScalar(.5),za.copy(t).sub(e).normalize(),Ha.copy(this.origin).sub(Fh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(za),a=Ha.dot(this.direction),l=-Ha.dot(za),c=Ha.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fh).addScaledVector(za,u),f}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let i=Li.dot(this.direction),s=Li.dot(Li)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(a=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,i,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=e.x-o.x,u=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,m=t.z-o.z,g=i.x-o.x,y=i.y-o.y,S=i.z-o.z,M=Math.abs(l),A=Math.abs(c),T=Math.abs(h),x,b,L,C,D,z,W,R,O,U,F,Z;if(M>=A&&M>=T?(L=l,z=d,O=p,Z=g,l>=0?(x=c,b=h,C=u,D=f,W=v,R=m,U=y,F=S):(x=h,b=c,C=f,D=u,W=m,R=v,U=S,F=y)):A>=T?(L=c,z=u,O=v,Z=y,c>=0?(x=h,b=l,C=f,D=d,W=m,R=p,U=S,F=g):(x=l,b=h,C=d,D=f,W=p,R=m,U=g,F=S)):(L=h,z=f,O=m,Z=S,h>=0?(x=l,b=c,C=d,D=u,W=p,R=v,U=g,F=y):(x=c,b=l,C=u,D=d,W=v,R=p,U=y,F=g)),L===0)return null;let V=x/L,K=b/L,ne=1/L,Te=C-V*z,Be=D-K*z,j=W-V*O,Me=R-K*O,Ie=U-V*Z,ze=F-K*Z,Se=Ie*Me-ze*j,He=Te*ze-Be*Ie,Dt=j*Be-Me*Te;if(s){if(Se<0||He<0||Dt<0)return null}else if((Se<0||He<0||Dt<0)&&(Se>0||He>0||Dt>0))return null;let Xe=Se+He+Dt;if(Xe===0)return null;let rt=ne*(Se*z+He*O+Dt*Z);return(Xe>0?rt<0:rt>0)?null:this.at(rt/Xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Xd=new lt,ws=new Mo,Ga=new Fi,qd=new P,Va=new P,Wa=new P,Xa=new P,Oh=new P,qa=new P,Yd=new P,Ya=new P,Ve=class extends Ot{constructor(e=new Mt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){qa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(Oh.fromBufferAttribute(d,e),o?qa.addScaledVector(Oh,h):qa.addScaledVector(Oh.sub(t),h))}t.add(qa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Ga.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ga,qd)===null||ws.origin.distanceToSquared(qd)>(e.far-e.near)**2))&&(Xd.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=S;M<A;M+=3){let T=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=$a(this,g,e,i,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=a.getX(m),S=a.getX(m+1),M=a.getX(m+2);s=$a(this,o,e,i,c,h,d,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=u.length;p<v;p++){let m=u[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,A=S;M<A;M+=3){let T=M,x=M+1,b=M+2;s=$a(this,g,e,i,c,h,d,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let y=m,S=m+1,M=m+2;s=$a(this,o,e,i,c,h,d,y,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function g0(n,e,t,i,s,r,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===yi,a),l===null)return null;Ya.copy(a),Ya.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ya);return c<t.near||c>t.far?null:{distance:c,point:Ya.clone(),object:n}}function $a(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Va),n.getVertexPosition(l,Wa),n.getVertexPosition(c,Xa);let h=g0(n,e,t,i,Va,Wa,Xa,Yd);if(h){let d=new P;Di.getBarycoord(Yd,Va,Wa,Xa,d),s&&(h.uv=Di.getInterpolatedAttribute(s,a,l,c,d,new oe)),r&&(h.uv1=Di.getInterpolatedAttribute(r,a,l,c,d,new oe)),o&&(h.normal=Di.getInterpolatedAttribute(o,a,l,c,d,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new P,materialIndex:0};Di.getNormal(Va,Wa,Xa,u.normal),h.face=u,h.barycoord=d}return h}var So=class extends Cn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=cn,h=cn,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Er=class extends Ft{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},fr=new lt,$d=new lt,Za=[],Zd=new xi,x0=new lt,so=new Ve,ro=new Fi,Oi=class extends Ve{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,x0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),Zd.copy(e.boundingBox).applyMatrix4(fr),this.boundingBox.union(Zd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,fr),ro.copy(e.boundingSphere).applyMatrix4(fr),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(so.geometry=this.geometry,so.material=this.material,so.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(i),e.ray.intersectsSphere(ro)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fr),$d.multiplyMatrices(i,fr),so.matrixWorld=$d,so.raycast(e,Za);for(let o=0,a=Za.length;o<a;o++){let l=Za[o];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new So(new Float32Array(s*this.count),s,this.count,$l,Jn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},As=new Fi,_0=new oe(.5,.5),Ja=new P,is=class{constructor(e=new ri,t=new ri,i=new ri,s=new ri,r=new ri,o=new ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$n,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],y=r[12],S=r[13],M=r[14],A=r[15];if(s[0].setComponents(c-o,f-h,g-p,A-y).normalize(),s[1].setComponents(c+o,f+h,g+p,A+y).normalize(),s[2].setComponents(c+a,f+d,g+v,A+S).normalize(),s[3].setComponents(c-a,f-d,g-v,A-S).normalize(),i)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,f-u,g-m,A-M).normalize();else if(s[4].setComponents(c-l,f-u,g-m,A-M).normalize(),t===$n)s[5].setComponents(c+l,f+u,g+m,A+M).normalize();else if(t===yr)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);let t=_0.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ja.x=s.normal.x>0?e.max.x:e.min.x,Ja.y=s.normal.y>0?e.max.y:e.min.y,Ja.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Jd=new lt,yl=class n{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Jd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new is),i[s].setFromProjectionMatrix(Jd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new is),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var vl=class extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Kd=new lt,qh=new Mo,Ka=new Fi,ja=new P,Ps=class extends Ot{constructor(e=new Mt,t=new vl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ka.copy(i.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Kd.copy(s).invert(),qh.copy(e.ray).applyMatrix4(Kd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,v=f;p<v;p++){let m=c.getX(p);ja.fromBufferAttribute(d,m),jd(ja,m,l,s,e,t,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,v=f;p<v;p++)ja.fromBufferAttribute(d,p),jd(ja,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function jd(n,e,t,i,s,r,o){let a=qh.distanceSqToPoint(n);if(a<t){let l=new P;qh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bo=class extends Cn{constructor(e=[],t=ks,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wt=class extends Cn{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends Cn{constructor(e,t,i=li,s,r,o,a=cn,l=cn,c,h=Ui,d=1){if(h!==Ui&&h!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Eo=class extends Bi{constructor(e,t=li,i=ks,s,r,o=cn,a=cn,l,c=Ui){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},To=class extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},xt=class n extends Mt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2));function p(v,m,g,y,S,M,A,T,x,b,L){let C=M/x,D=A/b,z=M/2,W=A/2,R=T/2,O=x+1,U=b+1,F=0,Z=0,V=new P;for(let K=0;K<U;K++){let ne=K*D-W;for(let Te=0;Te<O;Te++){let Be=Te*C-z;V[v]=Be*y,V[m]=ne*S,V[g]=R,c.push(V.x,V.y,V.z),V[v]=0,V[m]=0,V[g]=T>0?1:-1,h.push(V.x,V.y,V.z),d.push(Te/x),d.push(1-K/b),F+=1}}for(let K=0;K<b;K++)for(let ne=0;ne<x;ne++){let Te=u+ne+O*K,Be=u+ne+O*(K+1),j=u+(ne+1)+O*(K+1),Me=u+(ne+1)+O*K;l.push(Te,Be,Me),l.push(Be,j,Me),Z+=6}a.addGroup(f,Z,L),f+=Z,u+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ss=class n extends Mt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,p=i*2+r,v=s+1,m=new P,g=new P;for(let y=0;y<=p;y++){let S=0,M=0,A=0,T=0;if(y<=i){let L=y/i,C=L*Math.PI/2;M=-h-e*Math.cos(C),A=e*Math.sin(C),T=-e*Math.cos(C),S=L*d}else if(y<=i+r){let L=(y-i)/r;M=-h+L*t,A=e,T=0,S=d+L*u}else{let L=(y-i-r)/i,C=L*Math.PI/2;M=h+e*Math.sin(C),A=e*Math.cos(C),T=e*Math.sin(C),S=d+u+L*d}let x=Math.max(0,Math.min(1,S/f)),b=0;y===0?b=.5/s:y===p&&(b=-.5/s);for(let L=0;L<=s;L++){let C=L/s,D=C*Math.PI*2,z=Math.sin(D),W=Math.cos(D);g.x=-A*W,g.y=M,g.z=A*z,a.push(g.x,g.y,g.z),m.set(-A*W,T,A*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+b,x)}if(y>0){let L=(y-1)*v;for(let C=0;C<s;C++){let D=L+C,z=L+C+1,W=y*v+C,R=y*v+C+1;o.push(D,z,W),o.push(z,R,W)}}}this.setIndex(o),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},rs=class n extends Mt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new P,h=new oe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(a,3)),this.setAttribute("uv",new Ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},jt=class n extends Mt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,v=[],m=i/2,g=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function y(){let M=new P,A=new P,T=0,x=(t-e)/i;for(let b=0;b<=r;b++){let L=[],C=b/r,D=C*(t-e)+e;for(let z=0;z<=s;z++){let W=z/s,R=W*l+a,O=Math.sin(R),U=Math.cos(R);A.x=D*O,A.y=-C*i+m,A.z=D*U,d.push(A.x,A.y,A.z),M.set(O,x,U).normalize(),u.push(M.x,M.y,M.z),f.push(W,1-C),L.push(p++)}v.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let C=v[L][b],D=v[L+1][b],z=v[L+1][b+1],W=v[L][b+1];(e>0||L!==0)&&(h.push(C,D,W),T+=3),(t>0||L!==r-1)&&(h.push(D,z,W),T+=3)}c.addGroup(g,T,0),g+=T}function S(M){let A=p,T=new oe,x=new P,b=0,L=M===!0?e:t,C=M===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let R=z/s*l+a,O=Math.cos(R),U=Math.sin(R);x.x=L*U,x.y=m*C,x.z=L*O,d.push(x.x,x.y,x.z),u.push(0,C,0),T.x=O*.5+.5,T.y=U*.5*C+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let W=A+z,R=D+z;M===!0?h.push(R,R+1,W):h.push(R+1,R,W),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},os=class n extends jt{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},wo=class n extends Mt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let S=new P,M=new P,A=new P;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],M),f(t[T+2],A),l(S,M,A,y)}function l(y,S,M,A){let T=A+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let L=y.clone().lerp(M,b/T),C=S.clone().lerp(M,b/T),D=T-b;for(let z=0;z<=D;z++)z===0&&b===T?x[b][z]=L:x[b][z]=L.clone().lerp(C,z/D)}for(let b=0;b<T;b++)for(let L=0;L<2*(T-b)-1;L++){let C=Math.floor(L/2);L%2===0?(u(x[b][C+1]),u(x[b+1][C]),u(x[b][C])):(u(x[b][C+1]),u(x[b+1][C+1]),u(x[b+1][C]))}}function c(y){let S=new P;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(y),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let y=new P;for(let S=0;S<r.length;S+=3){y.x=r[S+0],y.y=r[S+1],y.z=r[S+2];let M=m(y)/2/Math.PI+.5,A=g(y)/Math.PI+.5;o.push(M,1-A)}p(),d()}function d(){for(let y=0;y<o.length;y+=6){let S=o[y+0],M=o[y+2],A=o[y+4],T=Math.max(S,M,A),x=Math.min(S,M,A);T>.9&&x<.1&&(S<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),A<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function f(y,S){let M=y*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function p(){let y=new P,S=new P,M=new P,A=new P,T=new oe,x=new oe,b=new oe;for(let L=0,C=0;L<r.length;L+=9,C+=6){y.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),M.set(r[L+6],r[L+7],r[L+8]),T.set(o[C+0],o[C+1]),x.set(o[C+2],o[C+3]),b.set(o[C+4],o[C+5]),A.copy(y).add(S).add(M).divideScalar(3);let D=m(A);v(T,C+0,y,D),v(x,C+2,S,D),v(b,C+4,M,D)}}function v(y,S,M,A){A<0&&y.x===1&&(o[S]=y.x-1),M.x===0&&M.z===0&&(o[S]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},Ao=class n extends wo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ye("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new oe:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],o=[],a=new P,l=new lt;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new P)}r[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(ot(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ot(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Tr=class extends kn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new oe){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends Tr{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function bu(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Qd=new P,ef=new P,Bh=new bu,kh=new bu,zh=new bu,Ls=class extends kn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(ef.subVectors(s[0],s[1]).add(s[0]),c=ef);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Qd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),Bh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,v,m),kh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,v,m),zh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(Bh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),kh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),zh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Bh.calc(l),kh.calc(l),zh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tf(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function y0(n,e){let t=1-n;return t*t*e}function v0(n,e){return 2*(1-n)*n*e}function M0(n,e){return n*n*e}function ao(n,e,t,i){return y0(n,e)+v0(n,t)+M0(n,i)}function S0(n,e){let t=1-n;return t*t*t*e}function b0(n,e){let t=1-n;return 3*t*t*n*e}function E0(n,e){return 3*(1-n)*n*n*e}function T0(n,e){return n*n*n*e}function lo(n,e,t,i,s){return S0(n,e)+b0(n,t)+E0(n,i)+T0(n,s)}var Ro=class extends kn{constructor(e=new oe,t=new oe,i=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends kn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(lo(e,s.x,r.x,o.x,a.x),lo(e,s.y,r.y,o.y,a.y),lo(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends kn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bl=class extends kn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends kn{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends kn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(ao(e,s.x,r.x,o.x),ao(e,s.y,r.y,o.y),ao(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends kn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(tf(a,l.x,c.x,h.x,d.x),tf(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},El=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:Ls,CubicBezierCurve:Ro,CubicBezierCurve3:Sl,EllipseCurve:Tr,LineCurve:Co,LineCurve3:bl,QuadraticBezierCurve:Io,QuadraticBezierCurve3:Po,SplineCurve:Lo}),Tl=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new El[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new El[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Do=class extends Tl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Co(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Io(this.currentPoint.clone(),new oe(e,t),new oe(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){let a=new Ro(this.currentPoint.clone(),new oe(e,t),new oe(i,s),new oe(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Lo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){let c=new Tr(e,t,i,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ds=class extends Do{constructor(e){super(e),this.uuid=ds(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Do().fromJSON(s))}return this}};function w0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=ep(n,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=P0(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let h=a,d=l;for(let u=t;u<s;u+=t){let f=n[u],p=n[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return No(r,o,t,a,l,c,0),o}function ep(n,e,t,i,s){let r;if(s===G0(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=nf(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=nf(o/i|0,n[o],n[o+1],r);return r&&wr(r,r.next)&&(Fo(r),r=r.next),r}function Ns(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(wr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Fo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function No(n,e,t,i,s,r,o){if(!n)return;!o&&r&&F0(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?R0(n,i,s,r):A0(n)){e.push(l.i,n.i,c.i),Fo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=C0(Ns(n),e),No(n,e,t,i,s,r,2)):o===2&&I0(n,e,t,i,s,r):No(Ns(n),e,t,i,s,r,1);break}}}function A0(n){let e=n.prev,t=n,i=n.next;if(zt(e,t,i)>=0)return!1;let s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c),p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&oo(s,a,r,l,o,c,p.x,p.y)&&zt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function R0(n,e,t,i){let s=n.prev,r=n,o=n.next;if(zt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),v=Math.max(a,l,c),m=Math.max(h,d,u),g=Yh(f,p,e,t,i),y=Yh(v,m,e,t,i),S=n.prevZ,M=n.nextZ;for(;S&&S.z>=g&&M&&M.z<=y;){if(S.x>=f&&S.x<=v&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&oo(a,h,l,d,c,u,S.x,S.y)&&zt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&oo(a,h,l,d,c,u,M.x,M.y)&&zt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=v&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&oo(a,h,l,d,c,u,S.x,S.y)&&zt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=y;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==o&&oo(a,h,l,d,c,u,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function C0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!wr(i,s)&&np(i,t,t.next,s)&&Uo(i,s)&&Uo(s,i)&&(e.push(i.i,t.i,s.i),Fo(t),Fo(t.next),t=n=s),t=t.next}while(t!==n);return Ns(t)}function I0(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&k0(o,a)){let l=ip(o,a);o=Ns(o,o.next),l=Ns(l,l.next),No(o,e,t,i,s,r,0),No(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function P0(n,e,t,i){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=ep(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(B0(c))}s.sort(L0);for(let r=0;r<s.length;r++)t=D0(s[r],t);return t}function L0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function D0(n,e){let t=N0(n,e);if(!t)return e;let i=ip(t,n);return Ns(i,i.next),Ns(t,t.next)}function N0(n,e){let t=e,i=n.x,s=n.y,r=-1/0,o;if(wr(n,t))return t;do{if(wr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===i))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&tp(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Uo(t,n)&&(d<h||d===h&&(t.x>o.x||t.x===o.x&&U0(o,t)))&&(o=t,h=d)}t=t.next}while(t!==a);return o}function U0(n,e){return zt(n.prev,n,e.prev)<0&&zt(e.next,n,n.next)<0}function F0(n,e,t,i){let s=n;do s.z===0&&(s.z=Yh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,O0(s)}function O0(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Yh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function B0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function tp(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function oo(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&tp(n,e,t,i,s,r,o,a)}function k0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!z0(n,e)&&(Uo(n,e)&&Uo(e,n)&&H0(n,e)&&(zt(n.prev,n,e.prev)||zt(n,e.prev,e))||wr(n,e)&&zt(n.prev,n,n.next)>0&&zt(e.prev,e,e.next)>0)}function zt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function wr(n,e){return n.x===e.x&&n.y===e.y}function np(n,e,t,i){let s=el(zt(n,e,t)),r=el(zt(n,e,i)),o=el(zt(t,i,n)),a=el(zt(t,i,e));return!!(s!==r&&o!==a||s===0&&Qa(n,t,e)||r===0&&Qa(n,i,e)||o===0&&Qa(t,n,i)||a===0&&Qa(t,e,i))}function Qa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function el(n){return n>0?1:n<0?-1:0}function z0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&np(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Uo(n,e){return zt(n.prev,n,n.next)<0?zt(n,e,n.next)>=0&&zt(n,n.prev,e)>=0:zt(n,e,n.prev)<0||zt(n,n.next,e)<0}function H0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function ip(n,e){let t=$h(n.i,n.x,n.y),i=$h(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function nf(n,e,t,i){let s=$h(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $h(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Zh=class{static triangulate(e,t,i=2){return w0(e,t,i)}},Rs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];sf(e),rf(i,e);let o=e.length;t.forEach(sf);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,rf(i,t[l]);let a=Zh.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function sf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function rf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ar=class n extends Mt{constructor(e=new Ds([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Ze(s,3)),this.setAttribute("uv",new Ze(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:V0,S,M=!1,A,T,x,b;if(g){S=g.getSpacedPoints(h),M=!0,u=!1;let se=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,se),T=new P,x=new P,b=new P}u||(m=0,f=0,p=0,v=0);let L=a.extractPoints(c),C=L.shape,D=L.holes;if(!Rs.isClockWise(C)){C=C.reverse();for(let se=0,fe=D.length;se<fe;se++){let he=D[se];Rs.isClockWise(he)&&(D[se]=he.reverse())}}function W(se){let he=10000000000000001e-36,Ce=se[0];for(let ve=1;ve<=se.length;ve++){let Qe=ve%se.length,Fe=se[Qe],ht=Fe.x-Ce.x,ut=Fe.y-Ce.y,_t=ht*ht+ut*ut,H=Math.max(Math.abs(Fe.x),Math.abs(Fe.y),Math.abs(Ce.x),Math.abs(Ce.y)),Zt=he*H*H;if(_t<=Zt){se.splice(Qe,1),ve--;continue}Ce=Fe}}W(C),D.forEach(W);let R=D.length,O=C;for(let se=0;se<R;se++){let fe=D[se];C=C.concat(fe)}function U(se,fe,he){return fe||$e("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(fe,he)}let F=C.length;function Z(se,fe,he){let Ce,ve,Qe,Fe=se.x-fe.x,ht=se.y-fe.y,ut=he.x-se.x,_t=he.y-se.y,H=Fe*Fe+ht*ht,Zt=Fe*_t-ht*ut;if(Math.abs(Zt)>Number.EPSILON){let at=Math.sqrt(H),At=Math.sqrt(ut*ut+_t*_t),xe=fe.x-ht/at,Ht=fe.y+Fe/at,Ge=he.x-_t/At,Je=he.y+ut/At,I=((Ge-xe)*_t-(Je-Ht)*ut)/(Fe*_t-ht*ut);Ce=xe+Fe*I-se.x,ve=Ht+ht*I-se.y;let E=Ce*Ce+ve*ve;if(E<=2)return new oe(Ce,ve);Qe=Math.sqrt(E/2)}else{let at=!1;Fe>Number.EPSILON?ut>Number.EPSILON&&(at=!0):Fe<-Number.EPSILON?ut<-Number.EPSILON&&(at=!0):Math.sign(ht)===Math.sign(_t)&&(at=!0),at?(Ce=-ht,ve=Fe,Qe=Math.sqrt(H)):(Ce=Fe,ve=ht,Qe=Math.sqrt(H/2))}return new oe(Ce/Qe,ve/Qe)}let V=[];for(let se=0,fe=O.length,he=fe-1,Ce=se+1;se<fe;se++,he++,Ce++)he===fe&&(he=0),Ce===fe&&(Ce=0),V[se]=Z(O[se],O[he],O[Ce]);let K=[],ne,Te=V.concat();for(let se=0,fe=R;se<fe;se++){let he=D[se];ne=[];for(let Ce=0,ve=he.length,Qe=ve-1,Fe=Ce+1;Ce<ve;Ce++,Qe++,Fe++)Qe===ve&&(Qe=0),Fe===ve&&(Fe=0),ne[Ce]=Z(he[Ce],he[Qe],he[Fe]);K.push(ne),Te=Te.concat(ne)}let Be;if(m===0)Be=Rs.triangulateShape(O,D);else{let se=[],fe=[];for(let he=0;he<m;he++){let Ce=he/m,ve=f*Math.cos(Ce*Math.PI/2),Qe=p*Math.sin(Ce*Math.PI/2)+v;for(let Fe=0,ht=O.length;Fe<ht;Fe++){let ut=U(O[Fe],V[Fe],Qe);He(ut.x,ut.y,-ve),Ce===0&&se.push(ut)}for(let Fe=0,ht=R;Fe<ht;Fe++){let ut=D[Fe];ne=K[Fe];let _t=[];for(let H=0,Zt=ut.length;H<Zt;H++){let at=U(ut[H],ne[H],Qe);He(at.x,at.y,-ve),Ce===0&&_t.push(at)}Ce===0&&fe.push(_t)}}Be=Rs.triangulateShape(se,fe)}let j=Be.length,Me=p+v;for(let se=0;se<F;se++){let fe=u?U(C[se],Te[se],Me):C[se];M?(x.copy(A.normals[0]).multiplyScalar(fe.x),T.copy(A.binormals[0]).multiplyScalar(fe.y),b.copy(S[0]).add(x).add(T),He(b.x,b.y,b.z)):He(fe.x,fe.y,0)}for(let se=1;se<=h;se++)for(let fe=0;fe<F;fe++){let he=u?U(C[fe],Te[fe],Me):C[fe];M?(x.copy(A.normals[se]).multiplyScalar(he.x),T.copy(A.binormals[se]).multiplyScalar(he.y),b.copy(S[se]).add(x).add(T),He(b.x,b.y,b.z)):He(he.x,he.y,d/h*se)}for(let se=m-1;se>=0;se--){let fe=se/m,he=f*Math.cos(fe*Math.PI/2),Ce=p*Math.sin(fe*Math.PI/2)+v;for(let ve=0,Qe=O.length;ve<Qe;ve++){let Fe=U(O[ve],V[ve],Ce);He(Fe.x,Fe.y,d+he)}for(let ve=0,Qe=D.length;ve<Qe;ve++){let Fe=D[ve];ne=K[ve];for(let ht=0,ut=Fe.length;ht<ut;ht++){let _t=U(Fe[ht],ne[ht],Ce);M?He(_t.x,_t.y+S[h-1].y,S[h-1].x+he):He(_t.x,_t.y,d+he)}}}Ie(),ze();function Ie(){let se=s.length/3;if(u){let fe=0,he=F*fe;for(let Ce=0;Ce<j;Ce++){let ve=Be[Ce];Dt(ve[2]+he,ve[1]+he,ve[0]+he)}fe=h+m*2,he=F*fe;for(let Ce=0;Ce<j;Ce++){let ve=Be[Ce];Dt(ve[0]+he,ve[1]+he,ve[2]+he)}}else{for(let fe=0;fe<j;fe++){let he=Be[fe];Dt(he[2],he[1],he[0])}for(let fe=0;fe<j;fe++){let he=Be[fe];Dt(he[0]+F*h,he[1]+F*h,he[2]+F*h)}}i.addGroup(se,s.length/3-se,0)}function ze(){let se=s.length/3,fe=0;Se(O,fe),fe+=O.length;for(let he=0,Ce=D.length;he<Ce;he++){let ve=D[he];Se(ve,fe),fe+=ve.length}i.addGroup(se,s.length/3-se,1)}function Se(se,fe){let he=se.length;for(;--he>=0;){let Ce=he,ve=he-1;ve<0&&(ve=se.length-1);for(let Qe=0,Fe=h+m*2;Qe<Fe;Qe++){let ht=F*Qe,ut=F*(Qe+1),_t=fe+Ce+ht,H=fe+ve+ht,Zt=fe+ve+ut,at=fe+Ce+ut;Xe(_t,H,Zt,at)}}}function He(se,fe,he){l.push(se),l.push(fe),l.push(he)}function Dt(se,fe,he){rt(se),rt(fe),rt(he);let Ce=s.length/3,ve=y.generateTopUV(i,s,Ce-3,Ce-2,Ce-1);ct(ve[0]),ct(ve[1]),ct(ve[2])}function Xe(se,fe,he,Ce){rt(se),rt(fe),rt(Ce),rt(fe),rt(he),rt(Ce);let ve=s.length/3,Qe=y.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);ct(Qe[0]),ct(Qe[1]),ct(Qe[3]),ct(Qe[1]),ct(Qe[2]),ct(Qe[3])}function rt(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function ct(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return W0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];i.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new El[s.type]().fromJSON(s)),new n(i,e.options)}},V0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-d),new oe(u,1-p),new oe(v,1-g)]:[new oe(a,1-l),new oe(h,1-d),new oe(f,1-p),new oe(m,1-g)]}};function W0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Oo=class n extends wo{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},Rr=class n extends Mt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new P,u=new oe,f=new P,p=new P,v=new P,m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){let S=i+y*h*s,M=Math.sin(S),A=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*M,d.y=e[T].y,d.z=e[T].x*A,o.push(d.x,d.y,d.z),u.x=y/t,u.y=T/(e.length-1),a.push(u.x,u.y);let x=l[3*T+0]*M,b=l[3*T+1],L=l[3*T+0]*A;c.push(x,b,L)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let M=S+y*e.length,A=M,T=M+e.length,x=M+e.length+1,b=M+1;r.push(A,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new Ze(o,3)),this.setAttribute("uv",new Ze(a,2)),this.setAttribute("normal",new Ze(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Xt=class n extends Mt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,u=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<h;g++){let y=g*u-o;for(let S=0;S<c;S++){let M=S*d-r;p.push(M,-y,0),v.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let S=y+c*g,M=y+c*(g+1),A=y+1+c*(g+1),T=y+1+c*g;f.push(S,M,T),f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qt=class n extends Mt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new P,u=new P,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){let y=[],S=g/i,M=o+S*a,A=e*Math.cos(M),T=Math.sqrt(e*e-A*A),x=0;g===0&&o===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let L=b/t,C=s+L*r;d.x=-T*Math.cos(C),d.y=A,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(L+x,1-S),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){let S=h[g][y+1],M=h[g][y],A=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&f.push(S,M,T),(g!==i-1||l<Math.PI)&&f.push(M,A,T)}this.setIndex(f),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var zn=class n extends Mt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new P,f=new P,p=new P;for(let v=0;v<=i;v++){let m=o+v/i*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,y=(s+1)*(v-1)+m-1,S=(s+1)*(v-1)+m,M=(s+1)*v+m;l.push(g,y,M),l.push(y,S,M)}this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Cr=class n extends Mt{constructor(e=new Po(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new oe,h=new P,d=[],u=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(f,2));function v(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),g()}function m(S){h=e.getPointAt(S/t,h);let M=o.normals[S],A=o.binormals[S];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),L=-Math.cos(x);l.x=L*M.x+b*A.x,l.y=L*M.y+b*A.y,l.z=L*M.z+b*A.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let A=(s+1)*(S-1)+(M-1),T=(s+1)*S+(M-1),x=(s+1)*S+M,b=(s+1)*(S-1)+M;p.push(A,T,b),p.push(T,x,b)}}function y(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new El[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Gs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(of(s))s.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(of(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function bn(n){let e={};for(let t=0;t<n.length;t++){let i=Gs(n[t]);for(let s in i)e[s]=i[s]}return e}function of(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function X0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Eu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var sp={clone:Gs,merge:bn},q0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=X0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(s.value);break;case"v2":this.uniforms[i].value=new oe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Lt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wl=class extends mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},it=class extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ki=class extends it{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Cs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Bo=class extends ai{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Hl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Al=class extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Rl=class extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function tl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var as=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cl=class extends as{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vh,endingEnd:Vh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Wh:r=e,a=2*t-i;break;case Xh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Wh:o=e,l=2*i-t;break;case Xh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),v=p*p,m=v*p,g=-u*m+2*u*v-u*p,y=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*v+.5*p,M=f*m-f*v;for(let A=0;A!==a;++A)r[A]=g*o[h+A]+y*o[c+A]+S*o[l+A]+M*o[d+A];return r}},Il=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},Pl=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ll=class extends as{interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(i-t)/(s-t),v=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*v+o[l+m]*p;return r}let u=a*2,f=e-1;for(let p=0;p!==a;++p){let v=o[c+p],m=o[l+p],g=f*u+p*2,y=d[g],S=d[g+1],M=e*u+p*2,A=h[M],T=h[M+1],x=Z0(i,t,y,A,s);r[p]=rp(x,v,S,T,m)}return r}};function rp(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function $0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Z0(n,e,t,i,s){let r=(n-e)/(s-e);for(let o=0;o<8;o++){let a=rp(r,e,t,i,s)-n;if(Math.abs(a)<1e-10)break;let l=$0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pr(t,this.TimeBufferType),this.values=pr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:pr(e.times,Array),values:pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),tl(e.settings)&&(i.settings={inTangents:pr(e.settings.inTangents,Array),outTangents:pr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Il(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ll(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case co:t=this.InterpolantFactoryMethodDiscrete;break;case pl:t=this.InterpolantFactoryMethodLinear;break;case sl:t=this.InterpolantFactoryMethodSmooth;break;case Gh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ye("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return co;case this.InterpolantFactoryMethodLinear:return pl;case this.InterpolantFactoryMethodSmooth:return sl;case this.InterpolantFactoryMethodBezier:return Gh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;tl(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;tl(this.settings)&&(lf(this.settings.inTangents,e),lf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){$e("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&jm(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===sl,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let p=0;p!==i;++p){let v=t[d+p];if(v!==t[u+p]||v!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,tl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function af(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function lf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=pl;var ls=class extends Hn{constructor(e,t,i){super(e,t,i)}};ls.prototype.ValueTypeName="bool";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=co;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Dl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Dl.prototype.ValueTypeName="color";var Nl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Nl.prototype.ValueTypeName="number";var Ul=class extends as{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Tt.slerpFlat(r,0,o,c-a,o,c,l);return r}},ko=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var cs=class extends Hn{constructor(e,t,i){super(e,t,i)}};cs.prototype.ValueTypeName="string";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=co;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Hn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="vector";var Ol=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},op=new Ol,Bl=class{constructor(e){this.manager=e!==void 0?e:op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends Ot{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zo=class extends Ir{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Hh=new lt,cf=new P,hf=new P,Ho=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;cf.setFromMatrixPosition(e.matrixWorld),t.position.copy(cf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Hh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Hh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===yr||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nl=new P,il=new Tt,pi=new P,Go=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nl,il,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,pi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(nl,il,pi),pi.x===1&&pi.y===1&&pi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nl,il,pi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new P,uf=new oe,df=new oe,Sn=class extends Go{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,uf,df),t.subVectors(df,uf)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(gh*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Jh=class extends Ho{constructor(){super(new Sn(90,1,.5,500)),this.isPointLightShadow=!0}},Us=class extends Ir{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Jh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Vo=class extends Go{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Kh=class extends Ho{constructor(){super(new Vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wo=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Kh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var mr=-90,gr=1,Pr=class extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Sn(mr,gr,e,t);s.layers=this.layers,this.add(s);let r=new Sn(mr,gr,e,t);r.layers=this.layers,this.add(r);let o=new Sn(mr,gr,e,t);o.layers=this.layers,this.add(o);let a=new Sn(mr,gr,e,t);a.layers=this.layers,this.add(a);let l=new Sn(mr,gr,e,t);l.layers=this.layers,this.add(l);let c=new Sn(mr,gr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},kl=class extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Tu="\\[\\]\\.:\\/",J0=new RegExp("["+Tu+"]","g"),wu="[^"+Tu+"]",K0="[^"+Tu.replace("\\.","")+"]",j0=/((?:WC+[\/:])*)/.source.replace("WC",wu),Q0=/(WCOD+)?/.source.replace("WCOD",K0),eg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wu),tg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wu),ng=new RegExp("^"+j0+Q0+eg+tg+"$"),ig=["material","materials","bones","map"],jh=class{constructor(e,t,i){let s=i||Nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Nt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(J0,"")}static parseTrackName(e){let t=ng.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);ig.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ye("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Nt.Composite=jh;Nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Nt.prototype.GetterByBindingType=[Nt.prototype._getValue_direct,Nt.prototype._getValue_array,Nt.prototype._getValue_arrayElement,Nt.prototype._getValue_toArray];Nt.prototype.SetterByBindingTypeAndVersioning=[[Nt.prototype._setValue_direct,Nt.prototype._setValue_direct_setNeedsUpdate,Nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_array,Nt.prototype._setValue_array_setNeedsUpdate,Nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_arrayElement,Nt.prototype._setValue_arrayElement_setNeedsUpdate,Nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Nt.prototype._setValue_fromArray,Nt.prototype._setValue_fromArray_setNeedsUpdate,Nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MS=new Float32Array(1);var Lu=class Lu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Lu.prototype.isMatrix2=!0;var Qh=Lu;function Au(n,e,t,i){let s=sg(i);switch(t){case gu:return n*e;case $l:return n*e/s.components*s.byteLength;case Zl:return n*e/s.components*s.byteLength;case us:return n*e*2/s.components*s.byteLength;case Jl:return n*e*2/s.components*s.byteLength;case xu:return n*e*3/s.components*s.byteLength;case hi:return n*e*4/s.components*s.byteLength;case Kl:return n*e*4/s.components*s.byteLength;case Yo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(n,16)*Math.max(e,8)/4;case jl:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:case rc:case oc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sc:case Ko:case ac:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sc:case bc:case Ec:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case jo:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sg(n){switch(n){case Nn:case du:return{byteLength:1,components:1};case Nr:case fu:case ci:return{byteLength:2,components:1};case ql:case Yl:return{byteLength:2,components:4};case li:case Xl:case Jn:return{byteLength:4,components:1};case pu:case mu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Rp(){let n=null,e=!1,t=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function hg(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_g=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ug=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ux=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_x=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,x_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,__=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,C_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,P_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,k_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:ug,alphahash_pars_fragment:dg,alphamap_fragment:fg,alphamap_pars_fragment:pg,alphatest_fragment:mg,alphatest_pars_fragment:gg,aomap_fragment:xg,aomap_pars_fragment:_g,batching_pars_vertex:yg,batching_vertex:vg,begin_vertex:Mg,beginnormal_vertex:Sg,bsdfs:bg,iridescence_fragment:Eg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Cg,color_fragment:Ig,color_pars_fragment:Pg,color_pars_vertex:Lg,color_vertex:Dg,common:Ng,defaultnormal_vertex:Ug,displacementmap_pars_vertex:Fg,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:zg,colorspace_pars_fragment:Hg,envmap_fragment:Gg,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:nx,envmap_vertex:qg,fog_vertex:Yg,fog_pars_vertex:$g,fog_fragment:Zg,fog_pars_fragment:Jg,gradientmap_pars_fragment:Kg,lightmap_pars_fragment:jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:sx,lights_phong_fragment:rx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:hx,lights_fragment_end:ux,lightprobes_pars_fragment:dx,logdepthbuf_fragment:fx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:xx,map_pars_fragment:_x,map_particle_fragment:yx,map_particle_pars_fragment:vx,metalnessmap_fragment:Mx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:bx,morphcolor_vertex:Ex,morphnormal_vertex:Tx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Ix,normal_pars_vertex:Px,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Fx,iridescence_pars_fragment:Ox,opaque_fragment:Bx,packing:kx,premultiplied_alpha_fragment:zx,project_vertex:Hx,dithering_fragment:Gx,dithering_pars_fragment:Vx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:qx,shadowmap_pars_vertex:Yx,shadowmap_vertex:$x,shadowmask_pars_fragment:Zx,skinbase_vertex:Jx,skinning_pars_vertex:Kx,skinning_vertex:jx,skinnormal_vertex:Qx,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:o_,uv_pars_vertex:a_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:x_,distance_vert:__,distance_frag:y_,equirect_vert:v_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:b_,meshbasic_vert:E_,meshbasic_frag:T_,meshlambert_vert:w_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:I_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:F_,meshtoon_frag:O_,points_vert:B_,points_frag:k_,shadow_vert:z_,shadow_frag:H_,sprite_vert:G_,sprite_frag:V_},Ee={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Si={basic:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:bn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:bn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:bn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Le(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:bn([Ee.points,Ee.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:bn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:bn([Ee.common,Ee.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:bn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:bn([Ee.sprite,Ee.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:bn([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:bn([Ee.lights,Ee.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Si.physical={uniforms:bn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var Cc={r:0,b:0,g:0},W_=new lt,Cp=new Ke;Cp.set(-1,0,0,0,1,0,0,0,1);function X_(n,e,t,i,s,r){let o=new Le(0),a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let M=y.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(y){let S=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(y,S){let M=f(S);M&&M.isCubeTexture?(c===void 0&&(c=new Ve(new xt(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:Gs(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Cp),c.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,(h!==M||d!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ve(new Xt(2,2),new mn({name:"BackgroundMaterial",uniforms:Gs(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Cc,Eu(n)),t.buffers.color.setClear(Cc.r,Cc.g,Cc.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:v,dispose:g}}function q_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(D,z,W,R,O){let U=!1,F=d(D,R,W,z);r!==F&&(r=F,c(r.object)),U=f(D,R,W,O),U&&p(D,R,W,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,M(D,z,W,R),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,z,W,R){let O=R.wireframe===!0,U=i[z.id];U===void 0&&(U={},i[z.id]=U);let F=D.isInstancedMesh===!0?D.id:0,Z=U[F];Z===void 0&&(Z={},U[F]=Z);let V=Z[W.id];V===void 0&&(V={},Z[W.id]=V);let K=V[O];return K===void 0&&(K=u(l()),V[O]=K),K}function u(D){let z=[],W=[],R=[];for(let O=0;O<t;O++)z[O]=0,W[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:R,object:D,attributes:{},index:null}}function f(D,z,W,R){let O=r.attributes,U=z.attributes,F=0,Z=W.getAttributes();for(let V in Z)if(Z[V].location>=0){let ne=O[V],Te=U[V];if(Te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(Te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(Te=D.instanceColor)),ne===void 0||ne.attribute!==Te||Te&&ne.data!==Te.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function p(D,z,W,R){let O={},U=z.attributes,F=0,Z=W.getAttributes();for(let V in Z)if(Z[V].location>=0){let ne=U[V];ne===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let Te={};Te.attribute=ne,ne&&ne.data&&(Te.data=ne.data),O[V]=Te,F++}r.attributes=O,r.attributesNum=F,r.index=R}function v(){let D=r.newAttributes;for(let z=0,W=D.length;z<W;z++)D[z]=0}function m(D){g(D,0)}function g(D,z){let W=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;W[D]=1,R[D]===0&&(n.enableVertexAttribArray(D),R[D]=1),O[D]!==z&&(n.vertexAttribDivisor(D,z),O[D]=z)}function y(){let D=r.newAttributes,z=r.enabledAttributes;for(let W=0,R=z.length;W<R;W++)z[W]!==D[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function S(D,z,W,R,O,U,F){F===!0?n.vertexAttribIPointer(D,z,W,O,U):n.vertexAttribPointer(D,z,W,R,O,U)}function M(D,z,W,R){v();let O=R.attributes,U=W.getAttributes(),F=z.defaultAttributeValues;for(let Z in U){let V=U[Z];if(V.location>=0){let K=O[Z];if(K===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){let ne=K.normalized,Te=K.itemSize,Be=e.get(K);if(Be===void 0)continue;let j=Be.buffer,Me=Be.type,Ie=Be.bytesPerElement,ze=Me===n.INT||Me===n.UNSIGNED_INT||K.gpuType===Xl;if(K.isInterleavedBufferAttribute){let Se=K.data,He=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Dt=K.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Xe=0;Xe<V.locationSize;Xe++)g(V.location+Xe,Se.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Xe=0;Xe<V.locationSize;Xe++)m(V.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Xe=0;Xe<V.locationSize;Xe++)S(V.location+Xe,Te/V.locationSize,Me,ne,He*Ie,(Dt+Te/V.locationSize*Xe)*Ie,ze)}else{if(K.isInstancedBufferAttribute){for(let Se=0;Se<V.locationSize;Se++)g(V.location+Se,K.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Se=0;Se<V.locationSize;Se++)m(V.location+Se);n.bindBuffer(n.ARRAY_BUFFER,j);for(let Se=0;Se<V.locationSize;Se++)S(V.location+Se,Te/V.locationSize,Me,ne,Te*Ie,Te/V.locationSize*Se*Ie,ze)}}else if(F!==void 0){let ne=F[Z];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(V.location,ne);break;case 3:n.vertexAttrib3fv(V.location,ne);break;case 4:n.vertexAttrib4fv(V.location,ne);break;default:n.vertexAttrib1fv(V.location,ne)}}}}y()}function A(){L();for(let D in i){let z=i[D];for(let W in z){let R=z[W];for(let O in R){let U=R[O];for(let F in U)h(U[F].object),delete U[F];delete R[O]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let W in z){let R=z[W];for(let O in R){let U=R[O];for(let F in U)h(U[F].object),delete U[F];delete R[O]}}delete i[D.id]}function x(D){for(let z in i){let W=i[z];for(let R in W){let O=W[R];if(O[D.id]===void 0)continue;let U=O[D.id];for(let F in U)h(U[F].object),delete U[F];delete O[D.id]}}}function b(D){for(let z in i){let W=i[z],R=D.isInstancedMesh===!0?D.id:0,O=W[R];if(O!==void 0){for(let U in O){let F=O[U];for(let Z in F)h(F[Z].object),delete F[Z];delete O[U]}delete W[R],Object.keys(W).length===0&&delete i[z]}}}function L(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function Y_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function o(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function a(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function $_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==hi&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==Jn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ye("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ye("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ye("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:M,maxSamples:A,samples:T}}function Z_(n){let e=this,t=null,i=0,s=!1,r=!1,o=new ri,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let y=r?0:i,S=y*4,M=g.clippingState||null;l.value=M,M=h(p,u,S,f);for(let A=0;A!==S;++A)M[A]=t[A];g.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,M=f;S!==v;++S,M+=4)o.copy(d[S]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var na=class extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bo(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xt(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Os});r.uniforms.tEquirect.value=t;let o=new Ve(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=Rn),new Pr(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},ap=256,J_=3,K_=20,Ip=256,Pp=16,j_=3,Q_=new P,ey=new Le,Fr=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pr(1,10,null),this._boxMesh=new Ve(new xt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=Q_}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(ey));let m=new Pr(i,s,h);return m.position.copy(a),m.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,e.background=v,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ap,Zf(e))}_fromTexture(e,t){e.mapping===ks||e.mapping===Dr?this._setSize(e.image.length===0?ap:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=lp(e,!1,!1),i=Math.log2(e)-J_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=lp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ks||e.mapping===Dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=hp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=cp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ty(),this._integrationMaterial=ny());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Pp);for(let o=0;o<=i;o++){let a=n.lodToRoughness(o,i);if(o>i-j_)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Ip*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=iy());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function lp(n,e,t){return new na(n,{minFilter:zi,generateMipmaps:e,type:ci,colorSpace:ho,depthBuffer:t})}function ia(n,e,t){return new mn({name:n,uniforms:e,vertexShader:st.cube_vert,fragmentShader:t,side:en,blending:Os,depthTest:!1,depthWrite:!1})}function ty(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ip}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ny(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Pp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function iy(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${K_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function cp(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function hp(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sy(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Gl||f===Vl)if(e.has(u)){let p=e.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let v=new na(p.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Gl||f===Vl,v=f===ks||f===Dr;if(p||v){let m=t.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new Fr(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Fr(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Gl?u.mapping=ks:f===Vl&&(u.mapping=Dr),u}function l(u){let f=0,p=6;for(let v=0;v<p;v++)u[v]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ry(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Cs("WebGLRenderer: "+i+" extension not supported."),s}}}function oy(n,e,t,i){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",a),s[v.id]=new WeakRef(v),o.register(v,v.id,v),t.memory.geometries++),v}function h(p){let v=p.attributes;for(let m in v)e.update(v[m],n.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=v!==null?v.array.length:m.array.length/3-1,S=m.count>=65535?yo:_o,M=new S(Math.ceil(y/3)*6,1),A=M.array;if(v!==null){let x=v.array;g=v.version;for(let b=0,L=0;b<y;b+=3){let C=x[b+0],D=x[b+1],z=x[b+2];A[L++]=C,A[L++]=D,A[L++]=D,A[L++]=z,A[L++]=z,A[L++]=C}}else{g=m.version;for(let x=0,b=0;x<y;x+=3){let L=x+0,C=x+1,D=x+2;A[b++]=L,A[b++]=C,A[b++]=C,A[b++]=D,A[b++]=D,A[b++]=L}}M.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function u(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function ay(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),t.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),t.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];t.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ly(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:$e("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function cy(n,e,t){let i=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let L=function(){x.dispose(),i.delete(a),a.removeEventListener("dispose",L)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),v===!0&&(S=3);let M=a.attributes.position.count*S,A=1;M>e.maxTextureSize&&(A=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*A*4*d),x=new mo(T,M,A,d);x.type=Jn,x.needsUpdate=!0;let b=S*4;for(let C=0;C<d;C++){let D=m[C],z=g[C],W=y[C],R=M*A*4*C;for(let O=0;O<D.count;O++){let U=O*b;f===!0&&(s.fromBufferAttribute(D,O),T[R+U+0]=s.x,T[R+U+1]=s.y,T[R+U+2]=s.z,T[R+U+3]=0),p===!0&&(s.fromBufferAttribute(z,O),T[R+U+4]=s.x,T[R+U+5]=s.y,T[R+U+6]=s.z,T[R+U+7]=0),v===!0&&(s.fromBufferAttribute(W,O),T[R+U+8]=s.x,T[R+U+9]=s.y,T[R+U+10]=s.z,T[R+U+11]=W.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new oe(M,A)},i.set(a,u),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function hy(n,e,t,i,s){let r=new WeakMap;function o(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var uy={[ru]:"LINEAR_TONE_MAPPING",[ou]:"REINHARD_TONE_MAPPING",[au]:"CINEON_TONE_MAPPING",[Xo]:"ACES_FILMIC_TONE_MAPPING",[cu]:"AGX_TONE_MAPPING",[hu]:"NEUTRAL_TONE_MAPPING",[lu]:"CUSTOM_TONE_MAPPING"};function dy(n,e,t,i,s,r){let o=new Bn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new Mt;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let d=new wl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ve(h,d),f=new Vo(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,y=null,S=[],M=!1;this.setSize=function(A,T){o.setSize(A,T),a!==null&&a.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<S.length;x++){let b=S[x];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){S=A,M=S.length>0&&S[0].isRenderPass===!0;let T=o.width,x=o.height;S.length>0&&a===null&&(a=new Bn(T,x,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new Bn(T,x,{type:ci,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Bi(T,x),r===!0&&(c.format=Hi,c.type=zs)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<S.length;L++){let C=S[L];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===vi&&S.length===0)return!1;if(y=T,T!==null){let x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&A.setRenderTarget(o),g=A.toneMapping,A.toneMapping=vi,!0},this.hasRenderPass=function(){return M},this.end=function(A,T){A.toneMapping=g,m=!0;let x=o,b=a;for(let L=0;L<S.length;L++){let C=S[L];C.enabled!==!1&&(C.render(A,b,x,T),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==A.outputColorSpace||v!==A.toneMapping){p=A.outputColorSpace,v=A.toneMapping,d.defines={},pt.getTransfer(p)===vt&&(d.defines.SRGB_TRANSFER="");let L=uy[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(y),A.render(u,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var Lp=new Cn,Dp=new Bi(1,1),Np=new Eo(1),Up=new mo,Fp=new _l,Op=new bo,up=[],dp=[],fp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Or(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function tn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function nn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lc(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function py(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2fv(this.addr,e),nn(t,e)}}function my(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;n.uniform3fv(this.addr,e),nn(t,e)}}function gy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4fv(this.addr,e),nn(t,e)}}function xy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;mp.set(i),n.uniformMatrix2fv(this.addr,!1,mp),nn(t,i)}}function _y(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;pp.set(i),n.uniformMatrix3fv(this.addr,!1,pp),nn(t,i)}}function yy(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(tn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,i))return;fp.set(i),n.uniformMatrix4fv(this.addr,!1,fp),nn(t,i)}}function vy(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function My(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2iv(this.addr,e),nn(t,e)}}function Sy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3iv(this.addr,e),nn(t,e)}}function by(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4iv(this.addr,e),nn(t,e)}}function Ey(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Ty(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;n.uniform2uiv(this.addr,e),nn(t,e)}}function wy(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;n.uniform3uiv(this.addr,e),nn(t,e)}}function Ay(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;n.uniform4uiv(this.addr,e),nn(t,e)}}function Dc(n){return n.version===0&&(n.compareFunction=vu,n.needsUpdate=!0),n}function Ry(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Dc(Dp):r=Lp,t.setTexture2D(e||r,s)}function Cy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Fp,s)}function Iy(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Dc(Np):r=Op,t.setTextureCube(e||r,s)}function Py(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Up,s)}function Ly(n){switch(n){case 5126:return fy;case 35664:return py;case 35665:return my;case 35666:return gy;case 35674:return xy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return vy;case 35667:case 35671:return My;case 35668:case 35672:return Sy;case 35669:case 35673:return by;case 5125:return Ey;case 36294:return Ty;case 36295:return wy;case 36296:return Ay;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Cy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Py}}function Dy(n,e){n.uniform1fv(this.addr,e)}function Ny(n,e){let t=Or(e,this.size,2);n.uniform2fv(this.addr,t)}function Uy(n,e){let t=Or(e,this.size,3);n.uniform3fv(this.addr,t)}function Fy(n,e){let t=Or(e,this.size,4);n.uniform4fv(this.addr,t)}function Oy(n,e){let t=Or(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function By(n,e){let t=Or(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ky(n,e){let t=Or(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function zy(n,e){n.uniform1iv(this.addr,e)}function Hy(n,e){n.uniform2iv(this.addr,e)}function Gy(n,e){n.uniform3iv(this.addr,e)}function Vy(n,e){n.uniform4iv(this.addr,e)}function Wy(n,e){n.uniform1uiv(this.addr,e)}function Xy(n,e){n.uniform2uiv(this.addr,e)}function qy(n,e){n.uniform3uiv(this.addr,e)}function Yy(n,e){n.uniform4uiv(this.addr,e)}function $y(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Dc(Dp):o=Lp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Zy(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Fp,r[o])}function Jy(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));let o;this.type===n.SAMPLER_CUBE_SHADOW?o=Dc(Np):o=Op;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Ky(n,e,t){let i=this.cache,s=e.length,r=Lc(t,s);tn(i,r)||(n.uniform1iv(this.addr,r),nn(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Up,r[o])}function jy(n){switch(n){case 5126:return Dy;case 35664:return Ny;case 35665:return Uy;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return zy;case 35667:case 35671:return Hy;case 35668:case 35672:return Gy;case 35669:case 35673:return Vy;case 5125:return Wy;case 36294:return Xy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return Ky}}var Uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Ly(t.type)}},Fu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jy(t.type)}},Ou=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},Du=/(\w+)(\])?(\[|\.)?/g;function gp(n,e){n.seq.push(e),n.map[e.id]=e}function Qy(n,e,t){let i=n.name,s=i.length;for(Du.lastIndex=0;;){let r=Du.exec(i),o=Du.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gp(t,c===void 0?new Uu(a,n,e):new Fu(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Ou(a),gp(t,d)),t=d}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Qy(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function xp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ev=37297,tv=0;function nv(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var _p=new Ke;function iv(n){pt._getMatrix(_p,pt.workingColorSpace,n);let e=`mat3( ${_p.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(n)){case uo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+nv(n.getShaderSource(e),a)}else return r}function sv(n,e){let t=iv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var rv={[ru]:"Linear",[ou]:"Reinhard",[au]:"Cineon",[Xo]:"ACESFilmic",[cu]:"AgX",[hu]:"Neutral",[lu]:"Custom"};function ov(n,e){let t=rv[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ic=new P;function av(){pt.getLuminanceCoefficients(Ic);let n=Ic.x.toFixed(4),e=Ic.y.toFixed(4),t=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function cv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ta(n){return n!==""}function vp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Mp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(n){return n.replace(uv,dv)}function dv(n,e){let t=st[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bu(t)}var fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(n){return n.replace(fv,pv)}function pv(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var mv={[Fs]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function gv(n){return mv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xv={[Dr]:"ENVMAP_MODE_REFRACTION"};function _v(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var yv={[Hl]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Uf]:"ENVMAP_BLENDING_ADD"};function vv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yv[n.combine]||"ENVMAP_BLENDING_NONE"}function Mv(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=gv(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=_v(t),d=vv(t),u=lv(t),f=cv(r),p=s.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(ta).join(`
`),m.length>0&&(m+=`
`)):(v=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),m=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vi?"#define TONE_MAPPING":"",t.toneMapping!==vi?st.tonemapping_pars_fragment:"",t.toneMapping!==vi?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,sv("linearToOutputTexel",t.outputColorSpace),av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ta).join(`
`)),o=Bu(o),o=vp(o,t),o=Mp(o,t),a=Bu(a),a=vp(a,t),a=Mp(a,t),o=Sp(o),a=Sp(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+v+o,S=g+m+a,M=xp(s,s.VERTEX_SHADER,y),A=xp(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(A)||"",R=D.trim(),O=z.trim(),U=W.trim(),F=!0,Z=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,A);else{let V=yp(s,M,"vertex"),K=yp(s,A,"fragment");$e("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+V+`
`+K)}else R!==""?Ye("WebGLProgram: Program Info Log:",R):(O===""||U==="")&&(Z=!1);Z&&(C.diagnostics={runnable:F,programLog:R,vertexShader:{log:O,prefix:v},fragmentShader:{log:U,prefix:m}})}s.deleteShader(M),s.deleteShader(A),x=new Ur(s,p),b=hv(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,ev)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tv++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=A,this}var Sv=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zu(e),t.set(e,i)),i}},zu=class{constructor(e){this.id=Sv++,this.code=e,this.usedTimes=0}};function bv(n){return n===us||n===Ko||n===jo}function Ev(n,e,t,i,s,r){let o=new go,a=new ku,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,L,C,D,z){let W=C.fog,R=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||O,U),Z=u[x.type],V=i.precision;x.precision!==null&&(V=i.getMaxPrecision(x.precision),V!==x.precision&&Ye("WebGLProgram.getParameters:",x.precision,"not supported, using",V,"instead."));let K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ne=K!==void 0?K.length:0,Te=0;R.morphAttributes.position!==void 0&&(Te=1),R.morphAttributes.normal!==void 0&&(Te=2),R.morphAttributes.color!==void 0&&(Te=3);let Be,j,Me,Ie;if(Z){let be=Si[Z];Be=be.vertexShader,j=be.fragmentShader}else{Be=x.vertexShader,j=x.fragmentShader;let be=a.getVertexShaderStage(x),Et=a.getFragmentShaderStage(x);a.update(x,be,Et),Me=be.id,Ie=Et.id}let ze=n.getRenderTarget(),Se=n.state.buffers.depth.getReversed(),He=D.isInstancedMesh===!0,Dt=D.isBatchedMesh===!0,Xe=!!x.map,rt=!!x.matcap,ct=!!F,se=ct&&F.isPMREMTexture===!0,fe=!!x.aoMap,he=!!x.lightMap,Ce=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,Qe=!!x.displacementMap,Fe=!!x.emissiveMap,ht=!!x.metalnessMap,ut=!!x.roughnessMap,_t=x.anisotropy>0,H=x.clearcoat>0,Zt=x.diffuseRoughness>0,at=x.dispersion>0,At=x.retroreflectivity>0,xe=x.iridescence>0,Ht=x.sheen>0,Ge=x.transmission>0,Je=_t&&!!x.anisotropyMap,I=H&&!!x.clearcoatMap,E=H&&!!x.clearcoatNormalMap,q=H&&!!x.clearcoatRoughnessMap,ae=Zt&&!!x.diffuseRoughnessMap,ie=xe&&!!x.iridescenceMap,ue=xe&&!!x.iridescenceThicknessMap,_e=Ht&&!!x.sheenColorMap,Q=Ht&&!!x.sheenRoughnessMap,ee=!!x.specularMap,pe=!!x.specularColorMap,N=!!x.specularIntensityMap,te=Ge&&!!x.transmissionMap,J=Ge&&!!x.thicknessMap,me=!!x.gradientMap,ce=!!x.alphaMap,de=x.alphaTest>0,Oe=!!x.alphaHash,nt=!!x.extensions,le=vi;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(le=n.toneMapping);let ke=se?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,tt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:Be,fragmentShader:j,defines:x.defines,customVertexShaderID:Me,customFragmentShaderID:Ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:V,batching:Dt,batchingColor:Dt&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:rt,envMap:ct,envMapMode:ct&&F.mapping,envMapPMREM:se,envMapMaxLod:se?ke.length-1:null,envMapSize:se?ke[0].width:null,aoMap:fe,lightMap:he,bumpMap:Ce,normalMap:ve,displacementMap:Qe,emissiveMap:Fe,normalMapObjectSpace:ve&&x.normalMapType===Bf,normalMapTangentSpace:ve&&x.normalMapType===Qo,packedNormalMap:ve&&x.normalMapType===Qo&&bv(x.normalMap.format),metalnessMap:ht,roughnessMap:ut,anisotropy:_t,anisotropyMap:Je,clearcoat:H,clearcoatMap:I,clearcoatNormalMap:E,clearcoatRoughnessMap:q,diffuseRoughness:Zt,diffuseRoughnessMap:ae,dispersion:at,retroreflection:At,iridescence:xe,iridescenceMap:ie,iridescenceThicknessMap:ue,sheen:Ht,sheenColorMap:_e,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:pe,specularIntensityMap:N,transmission:Ge,transmissionMap:te,thicknessMap:J,gradientMap:me,opaque:x.transparent===!1&&x.blending===hs&&x.alphaToCoverage===!1,alphaMap:ce,alphaTest:de,alphaHash:Oe,combine:x.combine,mapUv:Xe&&f(x.map.channel),aoMapUv:fe&&f(x.aoMap.channel),lightMapUv:he&&f(x.lightMap.channel),bumpMapUv:Ce&&f(x.bumpMap.channel),normalMapUv:ve&&f(x.normalMap.channel),displacementMapUv:Qe&&f(x.displacementMap.channel),emissiveMapUv:Fe&&f(x.emissiveMap.channel),metalnessMapUv:ht&&f(x.metalnessMap.channel),roughnessMapUv:ut&&f(x.roughnessMap.channel),anisotropyMapUv:Je&&f(x.anisotropyMap.channel),clearcoatMapUv:I&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ie&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:ee&&f(x.specularMap.channel),specularColorMapUv:pe&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:te&&f(x.transmissionMap.channel),thicknessMapUv:J&&f(x.thicknessMap.channel),alphaMapUv:ce&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(ve||_t),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Xe||ce),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:le,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&pt.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Fe&&x.emissiveMap.isVideoTexture===!0&&pt.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===In,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return tt.vertexUv1s=l.has(1),tt.vertexUv2s=l.has(2),tt.vertexUv3s=l.has(3),l.clear(),tt}function v(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let b=u[x.type],L;if(b){let C=Si[b];L=sp.clone(C.uniforms)}else L=x.uniforms;return L}function S(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new Mv(n,b,x,s),c.push(L),h.set(b,L)),L}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:y,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:T}}function Tv(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ep(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Tp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,v,m,g){let y=n[e];return y===void 0?(y={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:g},n[e]=y):(y.id=u.id,y.object=u,y.geometry=f,y.material=p,y.materialVariant=o(u),y.groupOrder=v,y.renderOrder=u.renderOrder,y.z=m,y.group=g),e++,y}function l(u,f,p,v,m,g,y){y.reversedDepth===!0&&(m=-m);let S=a(u,f,p,v,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(u,f,p,v,m,g){let y=a(u,f,p,v,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,f){t.length>1&&t.sort(u||wv),i.length>1&&i.sort(f||Ep),s.length>1&&s.sort(f||Ep)}function d(){for(let u=e,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Av(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Tp,n.set(i,[o])):s>=r.length?(o=new Tp,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Rv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function Cv(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Iv=0;function Pv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Lv(n){let e=new Rv,t=Cv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new lt,o=new lt;function a(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,y=0,S=0,M=0,A=0,T=0,x=0,b=0,L=0,C=0;c.sort(Pv);for(let z=0,W=c.length;z<W;z++){let R=c[z],O=R.color,U=R.intensity,F=R.distance,Z=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===us?Z=R.shadow.map.texture:Z=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*U,d+=O.g*U,u+=O.b*U;else if(R.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(R.sh.coefficients[V],U);C++}else if(R.isSunLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,ne=t.get(R);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),i.sunShadow[p]=ne,i.sunShadowMap[p]=Z;let Te=K.getViewportCount();for(let Be=0;Be<Te;Be++)i.sunShadowMatrix[v+Be]=K.getMatrix(Be),i.sunShadowCascade[v+Be]=K._cascadeData[Be];v+=Te,p++}i.sun[f]=V,f++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,ne=t.get(R);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,i.directionalShadow[m]=ne,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=V,m++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(O).multiplyScalar(U),V.distance=F,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,i.spot[y]=V;let K=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,K.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[y]=K.matrix,R.castShadow){let ne=t.get(R);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,i.spotShadow[y]=ne,i.spotShadowMap[y]=Z,x++}y++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(O).multiplyScalar(U),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),i.rectArea[S]=V,S++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let K=R.shadow,ne=t.get(R);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,i.pointShadow[g]=ne,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=V,g++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(U),V.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[M]=V,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==y||D.rectAreaLength!==S||D.hemiLength!==M||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=S,i.point.length=g,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=y,D.rectAreaLength=S,D.hemiLength=M,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=C,i.version=Iv++)}function l(c,h){let d=0,u=0,f=0,p=0,v=0,m=0,g=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let M=c[y];if(M.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),d++}else if(M.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(M.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function wp(n){let e=new Lv(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function o(d){d.isLightProbeGrid?s.push(d):t.push(d)}function a(d){i.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Dv(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new wp(n),e.set(s,[a])):r>=o.length?(a=new wp(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Nv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fv=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Ov=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ap=new lt,ea=new P,Nu=new P;function Bv(n,e,t){let i=new is,s=new oe,r=new oe,o=new Lt,a=new Al,l=new Rl,c={},h=t.maxTextureSize,d={[yi]:en,[en]:yi,[In]:In},u=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Nv,fragmentShader:Uv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Mt;p.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ve(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===mf&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Os),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=g!==this.type;W&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=T.length;R<O;R++){let U=T[R],F=U.shadow;if(F===void 0){Ye("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Z=F.getFrameExtents();s.multiply(Z),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,F.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||W===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Lr){if(U.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Bn(s.x,s.y,{format:us,type:ci,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Bi(s.x,s.y,Jn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Ui,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn}else U.isPointLight?(F.map=new na(s.x),F.map.depthTexture=new Eo(s.x,li)):(F.map=new Bn(s.x,s.y),F.map.depthTexture=new Bi(s.x,s.y,li)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Ui,this.type===Fs?(F.map.depthTexture.compareFunction=V?yu:_u,F.map.depthTexture.minFilter=Rn,F.map.depthTexture.magFilter=Rn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=cn,F.map.depthTexture.magFilter=cn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,b);let ne=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let Te=0;Te<K;Te++){let Be=F.getCamera(Te);if(U.isPointLight){let j=F.camera,Me=F.matrix,Ie=U.distance||j.far;Ie!==j.far&&(j.far=Ie,j.updateProjectionMatrix()),ea.setFromMatrixPosition(U.matrixWorld),j.position.copy(ea),Nu.copy(j.position),Nu.add(Fv[Te]),j.up.copy(Ov[Te]),j.lookAt(Nu),j.updateMatrixWorld(),Me.makeTranslation(-ea.x,-ea.y,-ea.z),Ap.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Ap,j.coordinateSystem,j.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,Te),n.clear();else{Te===0&&(n.setRenderTarget(F.map),n.clear());let j=F.getViewport(Te);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),z.viewport(o)}i=F.getFrustum(Te),M(x,b,Be,U,ne,this.type)}F.isPointLightShadow!==!0&&this.type===Lr&&y(F,b),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,D)};function y(T,x){let b=e.update(v);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Bn(s.x,s.y,{format:us,type:ci}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,b,u,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,b,f,v,null)}function S(T,x,b,L){let C=null,D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=b.isPointLight===!0?l:a,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,W=x.uuid,R=c[z];R===void 0&&(R={},c[z]=R);let O=R[W];O===void 0&&(O=C.clone(),R[W]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,L===Lr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=b}return C}function M(T,x,b,L,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Lr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let R=e.update(T),O=T.material;if(Array.isArray(O)){let U=R.groups;for(let F=0,Z=U.length;F<Z;F++){let V=U[F],K=O[V.materialIndex];if(K&&K.visible){let ne=S(T,K,L,D);T.onBeforeShadow(n,T,x,b,R,ne,V),n.renderBufferDirect(b,null,R,ne,T,V),T.onAfterShadow(n,T,x,b,R,ne,V)}}}else if(O.visible){let U=S(T,O,L,D);T.onBeforeShadow(n,T,x,b,R,U,null),n.renderBufferDirect(b,null,R,U,T,null),T.onAfterShadow(n,T,x,b,R,U,null)}}let W=T.children;for(let R=0,O=W.length;R<O;R++)M(W[R],x,b,L,C,D)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let L=c[b],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function kv(n,e){function t(){let N=!1,te=new Lt,J=null,me=new Lt(0,0,0,0);return{setMask:function(ce){J!==ce&&!N&&(n.colorMask(ce,ce,ce,ce),J=ce)},setLocked:function(ce){N=ce},setClear:function(ce,de,Oe,nt,le){le===!0&&(ce*=nt,de*=nt,Oe*=nt),te.set(ce,de,Oe,nt),me.equals(te)===!1&&(n.clearColor(ce,de,Oe,nt),me.copy(te))},reset:function(){N=!1,J=null,me.set(-1,0,0,0)}}}function i(){let N=!1,te=!1,J=null,me=null,ce=null;return{setReversed:function(de){if(te!==de){let Oe=e.get("EXT_clip_control");de?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),te=de;let nt=ce;ce=null,this.setClear(nt)}},getReversed:function(){return te},setTest:function(de){de?Se(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(de){J!==de&&!N&&(n.depthMask(de),J=de)},setFunc:function(de){if(te&&(de=$f[de]),me!==de){switch(de){case ol:n.depthFunc(n.NEVER);break;case al:n.depthFunc(n.ALWAYS);break;case ll:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case cl:n.depthFunc(n.EQUAL);break;case hl:n.depthFunc(n.GEQUAL);break;case ul:n.depthFunc(n.GREATER);break;case dl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}me=de}},setLocked:function(de){N=de},setClear:function(de){ce!==de&&(ce=de,te&&(de=1-de),n.clearDepth(de))},reset:function(){N=!1,J=null,me=null,ce=null,te=!1}}}function s(){let N=!1,te=null,J=null,me=null,ce=null,de=null,Oe=null,nt=null,le=null;return{setTest:function(ke){N||(ke?Se(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(ke){te!==ke&&!N&&(n.stencilMask(ke),te=ke)},setFunc:function(ke,tt,be){(J!==ke||me!==tt||ce!==be)&&(n.stencilFunc(ke,tt,be),J=ke,me=tt,ce=be)},setOp:function(ke,tt,be){(de!==ke||Oe!==tt||nt!==be)&&(n.stencilOp(ke,tt,be),de=ke,Oe=tt,nt=be)},setLocked:function(ke){N=ke},setClear:function(ke){le!==ke&&(n.clearStencil(ke),le=ke)},reset:function(){N=!1,te=null,J=null,me=null,ce=null,de=null,Oe=null,nt=null,le=null}}}let r=new t,o=new i,a=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],v=null,m=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,b=new Le(0,0,0),L=0,C=!1,D=null,z=null,W=null,R=null,O=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Z=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=Z>=2);let K=null,ne={},Te=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),j=new Lt().fromArray(Te),Me=new Lt().fromArray(Be);function Ie(N,te,J,me){let ce=new Uint8Array(4),de=n.createTexture();n.bindTexture(N,de),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<J;Oe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(te+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return de}let ze={};ze[n.TEXTURE_2D]=Ie(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Se(n.DEPTH_TEST),o.setFunc(_r),Ce(!1),ve(eu),Se(n.CULL_FACE),fe(Os);function Se(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function He(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Dt(N,te){return u[N]!==te?(n.bindFramebuffer(N,te),u[N]=te,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=te),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Xe(N,te){let J=p,me=!1;if(N){J=f.get(te),J===void 0&&(J=[],f.set(te,J));let ce=N.textures;if(J.length!==ce.length||J[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Oe=ce.length;de<Oe;de++)J[de]=n.COLOR_ATTACHMENT0+de;J.length=ce.length,me=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,me=!0);me&&n.drawBuffers(J)}function rt(N){return v!==N?(n.useProgram(N),v=N,!0):!1}let ct={[Bs]:n.FUNC_ADD,[xf]:n.FUNC_SUBTRACT,[_f]:n.FUNC_REVERSE_SUBTRACT};ct[yf]=n.MIN,ct[vf]=n.MAX;let se={[Mf]:n.ZERO,[Sf]:n.ONE,[bf]:n.SRC_COLOR,[iu]:n.SRC_ALPHA,[Cf]:n.SRC_ALPHA_SATURATE,[Af]:n.DST_COLOR,[Tf]:n.DST_ALPHA,[Ef]:n.ONE_MINUS_SRC_COLOR,[su]:n.ONE_MINUS_SRC_ALPHA,[Rf]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[If]:n.CONSTANT_COLOR,[Pf]:n.ONE_MINUS_CONSTANT_COLOR,[Lf]:n.CONSTANT_ALPHA,[Df]:n.ONE_MINUS_CONSTANT_ALPHA};function fe(N,te,J,me,ce,de,Oe,nt,le,ke){if(N===Os){m===!0&&(He(n.BLEND),m=!1);return}if(m===!1&&(Se(n.BLEND),m=!0),N!==gf){if(N!==g||ke!==C){if((y!==Bs||A!==Bs)&&(n.blendEquation(n.FUNC_ADD),y=Bs,A=Bs),ke)switch(N){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qt:n.blendFunc(n.ONE,n.ONE);break;case tu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nu:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case tu:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nu:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}S=null,M=null,T=null,x=null,b.set(0,0,0),L=0,g=N,C=ke}return}ce=ce||te,de=de||J,Oe=Oe||me,(te!==y||ce!==A)&&(n.blendEquationSeparate(ct[te],ct[ce]),y=te,A=ce),(J!==S||me!==M||de!==T||Oe!==x)&&(n.blendFuncSeparate(se[J],se[me],se[de],se[Oe]),S=J,M=me,T=de,x=Oe),(nt.equals(b)===!1||le!==L)&&(n.blendColor(nt.r,nt.g,nt.b,le),b.copy(nt),L=le),g=N,C=!1}function he(N,te){N.side===In?He(n.CULL_FACE):Se(n.CULL_FACE);let J=N.side===en;te&&(J=!J),Ce(J),N.blending===hs&&N.transparent===!1?fe(Os):fe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let me=N.stencilWrite;a.setTest(me),me&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Fe(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function ve(N){N!==ff?(Se(n.CULL_FACE),N!==z&&(N===eu?n.cullFace(n.BACK):N===pf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),z=N}function Qe(N){N!==W&&(F&&n.lineWidth(N),W=N)}function Fe(N,te,J){N?(Se(n.POLYGON_OFFSET_FILL),(R!==te||O!==J)&&(R=te,O=J,o.getReversed()&&(te=-te,J=-J),n.polygonOffset(te,J))):He(n.POLYGON_OFFSET_FILL)}function ht(N){N?Se(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function ut(N){N===void 0&&(N=n.TEXTURE0+U-1),K!==N&&(n.activeTexture(N),K=N)}function _t(N,te,J){J===void 0&&(K===null?J=n.TEXTURE0+U-1:J=K);let me=ne[J];me===void 0&&(me={type:void 0,texture:void 0},ne[J]=me),(me.type!==N||me.texture!==te)&&(K!==J&&(n.activeTexture(J),K=J),n.bindTexture(N,te||ze[N]),me.type=N,me.texture=te)}function H(){let N=ne[K];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Zt(){try{n.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function At(){try{n.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function xe(){try{n.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ht(){try{n.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ge(){try{n.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Je(){try{n.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function I(){try{n.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function q(){try{n.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function ae(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ie(N,te){d[N]!==te&&(n.pixelStorei(N,te),d[N]=te)}function ue(N){j.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),j.copy(N))}function _e(N){Me.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Me.copy(N))}function Q(N,te){let J=c.get(te);J===void 0&&(J=new WeakMap,c.set(te,J));let me=J.get(N);me===void 0&&(me=n.getUniformBlockIndex(te,N.name),n.uniformBlockBinding(te,me,me),J.set(N,me))}function ee(N,te,J){let ce=c.get(te).get(N);l[ce]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ce,J),l[ce]=J)}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,ne={},u={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,y=null,S=null,M=null,A=null,T=null,x=null,b=new Le(0,0,0),L=0,C=!1,D=null,z=null,W=null,R=null,O=null,j.set(0,0,n.canvas.width,n.canvas.height),Me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Se,disable:He,bindFramebuffer:Dt,drawBuffers:Xe,useProgram:rt,setBlending:fe,setMaterial:he,setFlipSided:Ce,setCullFace:ve,setLineWidth:Qe,setPolygonOffset:Fe,setScissorTest:ht,activeTexture:ut,bindTexture:_t,unbindTexture:H,compressedTexImage2D:Zt,compressedTexImage3D:at,texImage2D:E,texImage3D:q,pixelStorei:ie,getParameter:ae,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:Je,texStorage3D:I,texSubImage2D:At,texSubImage3D:xe,compressedTexSubImage2D:Ht,compressedTexSubImage3D:Ge,scissor:ue,viewport:_e,reset:pe}}function zv(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,v=new FinalizationRegistry(I=>p.delete(I)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return m?new OffscreenCanvas(I,E):fo("canvas")}function y(I,E,q){let ae=1,ie=Je(I);if((ie.width>q||ie.height>q)&&(ae=q/Math.max(ie.width,ie.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ue=Math.floor(ae*ie.width),_e=Math.floor(ae*ie.height);u===void 0&&(u=g(ue,_e));let Q=E?g(ue,_e):u;return Q.width=ue,Q.height=_e,Q.getContext("2d").drawImage(I,0,0,ue,_e),Ye("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ue+"x"+_e+")."),Q}else return"data"in I&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function S(I){return I.generateMipmaps}function M(I){n.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?n.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(I,E,q,ae,ie,ue=!1){if(I!==null){if(n[I]!==void 0)return n[I];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let _e;ae&&(_e=e.get("EXT_texture_norm16"),_e||Ye("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===n.RED&&(q===n.FLOAT&&(Q=n.R32F),q===n.HALF_FLOAT&&(Q=n.R16F),q===n.UNSIGNED_BYTE&&(Q=n.R8),q===n.UNSIGNED_SHORT&&_e&&(Q=_e.R16_EXT),q===n.SHORT&&_e&&(Q=_e.R16_SNORM_EXT)),E===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.R8UI),q===n.UNSIGNED_SHORT&&(Q=n.R16UI),q===n.UNSIGNED_INT&&(Q=n.R32UI),q===n.BYTE&&(Q=n.R8I),q===n.SHORT&&(Q=n.R16I),q===n.INT&&(Q=n.R32I)),E===n.RG&&(q===n.FLOAT&&(Q=n.RG32F),q===n.HALF_FLOAT&&(Q=n.RG16F),q===n.UNSIGNED_BYTE&&(Q=n.RG8),q===n.UNSIGNED_SHORT&&_e&&(Q=_e.RG16_EXT),q===n.SHORT&&_e&&(Q=_e.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RG8UI),q===n.UNSIGNED_SHORT&&(Q=n.RG16UI),q===n.UNSIGNED_INT&&(Q=n.RG32UI),q===n.BYTE&&(Q=n.RG8I),q===n.SHORT&&(Q=n.RG16I),q===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),q===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),q===n.UNSIGNED_INT&&(Q=n.RGB32UI),q===n.BYTE&&(Q=n.RGB8I),q===n.SHORT&&(Q=n.RGB16I),q===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),q===n.UNSIGNED_INT&&(Q=n.RGBA32UI),q===n.BYTE&&(Q=n.RGBA8I),q===n.SHORT&&(Q=n.RGBA16I),q===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(q===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGB16_EXT),q===n.SHORT&&_e&&(Q=_e.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){let ee=ue?uo:pt.getTransfer(ie);q===n.FLOAT&&(Q=n.RGBA32F),q===n.HALF_FLOAT&&(Q=n.RGBA16F),q===n.UNSIGNED_BYTE&&(Q=ee===vt?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&_e&&(Q=_e.RGBA16_EXT),q===n.SHORT&&_e&&(Q=_e.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(I,E){let q;return I?E===null||E===li||E===zs?q=n.DEPTH24_STENCIL8:E===Jn?q=n.DEPTH32F_STENCIL8:E===Nr&&(q=n.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===li||E===zs?q=n.DEPTH_COMPONENT24:E===Jn?q=n.DEPTH_COMPONENT32F:E===Nr&&(q=n.DEPTH_COMPONENT16),q}function b(I,E){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==cn&&I.minFilter!==Rn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){let E=new WeakRef(I);i.get(I).__ref=E,p.add(E),v.register(I,E,E)}function C(I){let E=i.get(I).__ref;E!==void 0&&(p.delete(E),v.unregister(E))}function D(I){W(I.target)}function z(I){R(I.target)}function W(I){I.removeEventListener("dispose",D),C(I),U(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&d.delete(I)}function R(I){I.removeEventListener("dispose",z),C(I),Z(I)}function O(){for(let I of p){let E=I.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):W(E))}p.clear(),d.clear()}function U(I){let E=i.get(I);if(E.__webglInit===void 0)return;let q=I.source,ae=f.get(q);if(ae){let ie=ae[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&F(I),Object.keys(ae).length===0&&f.delete(q)}i.remove(I)}function F(I){let E=i.get(I);n.deleteTexture(E.__webglTexture);let q=I.source,ae=f.get(q);delete ae[E.__cacheKey],o.memory.textures--}function Z(I){let E=i.get(I);E.__depthDisposeCallback&&E.__depthDisposeCallback();let q=I.depthTexture;if(q&&q.renderTarget===I&&W(q),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ue=0;ue<E.__webglFramebuffer[ie].length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[ie][ue]);else n.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[ie]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let ae=I.textures;for(let ie=0,ue=ae.length;ie<ue;ie++){let _e=i.get(ae[ie]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(ae[ie])}i.remove(I)}let V=0;function K(){V=0}function ne(){return V}function Te(I){V=I}function Be(){let I=V;return I>=s.maxTextures&&Ye("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,I}function j(I){let E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.mipmapsAutoUpdate),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Me(I,E){let q=i.get(I);if(I.isVideoTexture&&Ht(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){let ae=I.image;if(ae===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{he(q,I,E);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+E)}function Ie(I,E){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){he(q,I,E);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+E)}function ze(I,E){let q=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){he(q,I,E);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+E)}function Se(I,E){let q=i.get(I);if(I.version>0&&q.__version!==I.version){Ce(q,I,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+E)}let He={[oi]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[fl]:n.MIRRORED_REPEAT},Dt={[cn]:n.NEAREST,[Ff]:n.NEAREST_MIPMAP_NEAREST,[qo]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Wl]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},Xe={[zf]:n.NEVER,[vu]:n.ALWAYS,[Hf]:n.LESS,[_u]:n.LEQUAL,[Gf]:n.EQUAL,[yu]:n.GEQUAL,[Vf]:n.GREATER,[Wf]:n.NOTEQUAL};function rt(I,E){if(E.type===Jn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Rn||E.magFilter===Wl||E.magFilter===qo||E.magFilter===zi||E.minFilter===Rn||E.minFilter===Wl||E.minFilter===qo||E.minFilter===zi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(I,n.TEXTURE_WRAP_S,He[E.wrapS]),n.texParameteri(I,n.TEXTURE_WRAP_T,He[E.wrapT]),(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)&&n.texParameteri(I,n.TEXTURE_WRAP_R,He[E.wrapR]),n.texParameteri(I,n.TEXTURE_MAG_FILTER,Dt[E.magFilter]),n.texParameteri(I,n.TEXTURE_MIN_FILTER,Dt[E.minFilter]),E.compareFunction&&(n.texParameteri(I,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(I,n.TEXTURE_COMPARE_FUNC,Xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===cn||E.minFilter!==qo&&E.minFilter!==zi||E.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ct(I,E){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",D),L(E));let ae=E.source,ie=f.get(ae);ie===void 0&&(ie={},f.set(ae,ie));let ue=j(E);if(ue!==I.__cacheKey){ie[ue]===void 0&&(ie[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ie[ue].usedTimes++;let _e=ie[I.__cacheKey];_e!==void 0&&(ie[I.__cacheKey].usedTimes--,_e.usedTimes===0&&F(E)),I.__cacheKey=ue,I.__webglTexture=ie[ue].texture}return q}function se(I,E,q){return Math.floor(Math.floor(I/q)/E)}function fe(I,E,q,ae){let ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,q,ae,E.data);else{ue.sort((N,te)=>N.start-te.start);let _e=0;for(let N=1;N<ue.length;N++){let te=ue[_e],J=ue[N],me=te.start+te.count,ce=se(J.start,E.width,4),de=se(te.start,E.width,4);J.start<=me+1&&ce===de&&se(J.start+J.count-1,E.width,4)===ce?te.count=Math.max(te.count,J.start+J.count-te.start):(++_e,ue[_e]=J)}ue.length=_e+1;let Q=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let N=0,te=ue.length;N<te;N++){let J=ue[N],me=Math.floor(J.start/4),ce=Math.ceil(J.count/4),de=me%E.width,Oe=Math.floor(me/E.width),nt=ce,le=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,de),t.pixelStorei(n.UNPACK_SKIP_ROWS,Oe),t.texSubImage2D(n.TEXTURE_2D,0,de,Oe,nt,le,q,ae,E.data)}I.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Q),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function he(I,E,q){let ae=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=n.TEXTURE_3D);let ie=ct(I,E),ue=E.source;t.bindTexture(ae,I.__webglTexture,n.TEXTURE0+q);let _e=i.get(ue);if(ue.version!==_e.__version||ie===!0){if(t.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let le=pt.getPrimaries(pt.workingColorSpace),ke=E.colorSpace===Gi?null:pt.getPrimaries(E.colorSpace),tt=E.colorSpace===Gi||le===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let ee=y(E.image,!1,s.maxTextureSize);ee=Ge(E,ee);let pe=r.convert(E.format,E.colorSpace),N=r.convert(E.type),te=T(E.internalFormat,pe,N,E.normalized,E.colorSpace,E.isVideoTexture);rt(ae,E);let J,me=E.mipmaps,ce=E.isVideoTexture!==!0,de=_e.__version===void 0||ie===!0,Oe=ue.dataReady,nt=b(E,ee);if(E.isDepthTexture)te=x(E.format===Hi,E.type),de&&(ce?t.texStorage2D(n.TEXTURE_2D,1,te,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,pe,N,null));else if(E.isDataTexture)if(me.length>0){ce&&de&&t.texStorage2D(n.TEXTURE_2D,nt,te,me[0].width,me[0].height);for(let le=0,ke=me.length;le<ke;le++)J=me[le],ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,J.width,J.height,pe,N,J.data):t.texImage2D(n.TEXTURE_2D,le,te,J.width,J.height,0,pe,N,J.data);E.generateMipmaps=!1}else ce?(de&&t.texStorage2D(n.TEXTURE_2D,nt,te,ee.width,ee.height),Oe&&fe(E,ee,pe,N)):t.texImage2D(n.TEXTURE_2D,0,te,ee.width,ee.height,0,pe,N,ee.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ce&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,te,me[0].width,me[0].height,ee.depth);for(let le=0,ke=me.length;le<ke;le++)if(J=me[le],E.format!==hi)if(pe!==null)if(ce){if(Oe)if(E.layerUpdates.size>0){let tt=Au(J.width,J.height,E.format,E.type);for(let be of E.layerUpdates){let Et=J.data.subarray(be*tt/J.data.BYTES_PER_ELEMENT,(be+1)*tt/J.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,be,J.width,J.height,1,pe,Et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,ee.depth,pe,J.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,te,J.width,J.height,ee.depth,0,J.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,J.width,J.height,ee.depth,pe,N,J.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,te,J.width,J.height,ee.depth,0,pe,N,J.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{ce&&de&&t.texStorage2D(n.TEXTURE_2D,nt,te,me[0].width,me[0].height);for(let le=0,ke=me.length;le<ke;le++)J=me[le],E.format!==hi?pe!==null?ce?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,J.width,J.height,pe,J.data):t.compressedTexImage2D(n.TEXTURE_2D,le,te,J.width,J.height,0,J.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,J.width,J.height,pe,N,J.data):t.texImage2D(n.TEXTURE_2D,le,te,J.width,J.height,0,pe,N,J.data)}else if(E.isDataArrayTexture)if(ce){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,nt,te,ee.width,ee.height,ee.depth),Oe)if(E.layerUpdates.size>0){let le=Au(ee.width,ee.height,E.format,E.type);for(let ke of E.layerUpdates){let tt=ee.data.subarray(ke*le/ee.data.BYTES_PER_ELEMENT,(ke+1)*le/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ke,ee.width,ee.height,1,pe,N,tt)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,N,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,te,ee.width,ee.height,ee.depth,0,pe,N,ee.data);else if(E.isData3DTexture)ce?(de&&t.texStorage3D(n.TEXTURE_3D,nt,te,ee.width,ee.height,ee.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,N,ee.data)):t.texImage3D(n.TEXTURE_3D,0,te,ee.width,ee.height,ee.depth,0,pe,N,ee.data);else if(E.isFramebufferTexture){if(de)if(ce)t.texStorage2D(n.TEXTURE_2D,nt,te,ee.width,ee.height);else{let le=ee.width,ke=ee.height;for(let tt=0;tt<nt;tt++)t.texImage2D(n.TEXTURE_2D,tt,te,le,ke,0,pe,N,null),le>>=1,ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let le=n.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),d.add(E),le.onpaint=ke=>{let tt=ke.changedElements;for(let be of d)tt.includes(be.image)&&(be.needsUpdate=!0)},le.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let tt=n.RGBA,be=n.RGBA,Et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,tt,be,Et,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(me.length>0){if(ce&&de){let le=Je(me[0]);t.texStorage2D(n.TEXTURE_2D,nt,te,le.width,le.height)}for(let le=0,ke=me.length;le<ke;le++)J=me[le],ce?Oe&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,pe,N,J):t.texImage2D(n.TEXTURE_2D,le,te,pe,N,J);E.generateMipmaps=!1}else if(ce){if(de){let le=Je(ee);t.texStorage2D(n.TEXTURE_2D,nt,te,le.width,le.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,N,ee)}else t.texImage2D(n.TEXTURE_2D,0,te,pe,N,ee);S(E)&&E.mipmapsAutoUpdate===!0&&M(ae),_e.__version=ue.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Ce(I,E,q){if(E.image.length!==6)return;let ae=ct(I,E),ie=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+q);let ue=i.get(ie);if(ie.version!==ue.__version||ae===!0){t.activeTexture(n.TEXTURE0+q);let _e=pt.getPrimaries(pt.workingColorSpace),Q=E.colorSpace===Gi?null:pt.getPrimaries(E.colorSpace),ee=E.colorSpace===Gi||_e===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let pe=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,te=[];for(let be=0;be<6;be++)!pe&&!N?te[be]=y(E.image[be],!0,s.maxCubemapSize):te[be]=N?E.image[be].image:E.image[be],te[be]=Ge(E,te[be]);let J=te[0],me=r.convert(E.format,E.colorSpace),ce=r.convert(E.type),de=T(E.internalFormat,me,ce,E.normalized,E.colorSpace),Oe=E.isVideoTexture!==!0,nt=ue.__version===void 0||ae===!0,le=ie.dataReady,ke=b(E,J);rt(n.TEXTURE_CUBE_MAP,E);let tt;if(E.isDepthTexture){if(de=x(E.format===Hi,E.type),nt)if(Oe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,de,J.width,J.height);else for(let be=0;be<6;be++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,J.width,J.height,0,me,ce,null)}else if(pe){Oe&&nt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,de,J.width,J.height);for(let be=0;be<6;be++){tt=te[be].mipmaps;for(let Et=0;Et<tt.length;Et++){let on=tt[Et];E.format!==hi?me!==null?Oe?le&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et,0,0,on.width,on.height,me,on.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et,de,on.width,on.height,0,on.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et,0,0,on.width,on.height,me,ce,on.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et,de,on.width,on.height,0,me,ce,on.data)}}}else{if(tt=E.mipmaps,Oe&&nt){tt.length>0&&ke++;let be=Je(te[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ke,de,be.width,be.height)}for(let be=0;be<6;be++)if(N){Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,te[be].width,te[be].height,me,ce,te[be].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,te[be].width,te[be].height,0,me,ce,te[be].data);for(let Et=0;Et<tt.length;Et++){let Ji=tt[Et].image[be].image;Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et+1,0,0,Ji.width,Ji.height,me,ce,Ji.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et+1,de,Ji.width,Ji.height,0,me,ce,Ji.data)}}else{Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,me,ce,te[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,de,me,ce,te[be]);for(let Et=0;Et<tt.length;Et++){let on=tt[Et];Oe?le&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et+1,0,0,me,ce,on.image[be]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,Et+1,de,me,ce,on.image[be])}}}S(E)&&E.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),ue.__version=ie.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ve(I,E,q,ae,ie,ue){let _e=r.convert(q.format,q.colorSpace),Q=r.convert(q.type),ee=T(q.internalFormat,_e,Q,q.normalized,q.colorSpace),pe=i.get(E),N=i.get(q);if(N.__renderTarget=E,!pe.__hasExternalTextures){let te=Math.max(1,E.width>>ue),J=Math.max(1,E.height>>ue);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,ue,ee,te,J,E.depth,0,_e,Q,null):t.texImage2D(ie,ue,ee,te,J,0,_e,Q,null)}t.bindFramebuffer(n.FRAMEBUFFER,I),xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,ie,N.__webglTexture,0,At(E)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,ie,N.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qe(I,E,q){if(n.bindRenderbuffer(n.RENDERBUFFER,I),E.depthBuffer){let ae=E.depthTexture,ie=ae&&ae.isDepthTexture?ae.type:null,ue=x(E.stencilBuffer,ie),_e=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At(E),ue,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,At(E),ue,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ue,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,I)}else{let ae=E.textures;for(let ie=0;ie<ae.length;ie++){let ue=ae[ie],_e=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),ee=T(ue.internalFormat,_e,Q,ue.normalized,ue.colorSpace);xe(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At(E),ee,E.width,E.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,At(E),ee,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ee,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(I,E,q){let ae=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=i.get(E.depthTexture);ie.__renderTarget=E;let ue=ae?E.depthTexture.image[0]:E.depthTexture.image;(!ie.__webglTexture||ue.width!==E.width||ue.height!==E.height)&&(ue.width=E.width,ue.height=E.height,E.depthTexture.needsUpdate=!0),ae?Se(E.depthTexture,0):Me(E.depthTexture,0);let _e=ie.__webglTexture,Q=At(E),ee=ae?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,pe=E.depthTexture.format===Hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ui)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ee,_e,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ee,_e,0);else if(E.depthTexture.format===Hi)xe(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ee,_e,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,pe,ee,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){let E=i.get(I),q=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){let ae=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){let ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",ie)};ae.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=ae}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ae=0;ae<6;ae++)Fe(E.__webglFramebuffer[ae],I,ae);else I.texture.mipmaps.length>0?Fe(E.__webglFramebuffer[0],I,0):Fe(E.__webglFramebuffer,I,0);else if(q){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=n.createRenderbuffer(),Qe(E.__webglDepthbuffer[ae],I,!1);else{let ie=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[ae];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ue)}}else if(I.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Qe(E.__webglDepthbuffer,I,!1);else{let ie=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(I,E,q){let ae=i.get(I);E!==void 0&&ve(ae.__webglFramebuffer,I,I.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ht(I)}function _t(I){let E=I.texture,q=i.get(I),ae=i.get(E);I.addEventListener("dispose",z),L(I);let ie=I.textures,ue=I.isWebGLCubeRenderTarget===!0,_e=ie.length>1;if(_e||(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=E.version,o.memory.textures++),ue){q.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0){q.__webglFramebuffer[Q]=[];for(let ee=0;ee<E.mipmaps.length;ee++)q.__webglFramebuffer[Q][ee]=n.createFramebuffer()}else q.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)q.__webglFramebuffer[Q]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(_e)for(let Q=0,ee=ie.length;Q<ee;Q++){let pe=i.get(ie[Q]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(I.samples>0&&xe(I)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Q=0;Q<ie.length;Q++){let ee=ie[Q];q.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Q]);let pe=r.convert(ee.format,ee.colorSpace),N=r.convert(ee.type),te=T(ee.internalFormat,pe,N,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),J=At(I);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,te,I.width,I.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,q.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Qe(q.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),rt(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ve(q.__webglFramebuffer[Q][ee],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else ve(q.__webglFramebuffer[Q],I,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);S(E)?M(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(_e){for(let Q=0,ee=ie.length;Q<ee;Q++){let pe=ie[Q],N=i.get(pe),te=n.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(te=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,N.__webglTexture),rt(te,pe),ve(q.__webglFramebuffer,I,pe,n.COLOR_ATTACHMENT0+Q,te,0),S(pe)&&M(te)}t.unbindTexture()}else{let Q=n.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Q=I.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,ae.__webglTexture),rt(Q,E),E.mipmaps.length>0)for(let ee=0;ee<E.mipmaps.length;ee++)ve(q.__webglFramebuffer[ee],I,E,n.COLOR_ATTACHMENT0,Q,ee);else ve(q.__webglFramebuffer,I,E,n.COLOR_ATTACHMENT0,Q,0);S(E)?M(Q):E.mipmaps.length>0&&n.texParameteri(Q,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}I.depthBuffer&&ht(I)}function H(I){let E=I.textures;for(let q=0,ae=E.length;q<ae;q++){let ie=E[q];if(S(ie)&&ie.mipmapsAutoUpdate===!0){let ue=A(I),_e=i.get(ie).__webglTexture;t.bindTexture(ue,_e),M(ue),t.unbindTexture()}}}let Zt=[];function at(I){if(I.samples>0){if(xe(I)===!1){let E=I.textures,q=I.width,ae=I.height,ie=n.COLOR_BUFFER_BIT,ue=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_e=i.get(I),Q=E.length>1;if(Q)for(let pe=0;pe<E.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),I.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let pe=0;pe<E.length;pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let N=i.get(E[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,q,ae,0,0,q,ae,ie,n.NEAREST),l===!0&&(Zt.length=0,Zt.push(n.COLOR_ATTACHMENT0+pe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&Zt.push(ue),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let pe=0;pe<E.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,_e.__webglColorRenderbuffer[pe]);let N=i.get(E[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,_e.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let E=I.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function At(I){return Math.min(s.maxSamples,I.samples)}function xe(I){let E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ht(I){let E=o.render.frame;h.get(I)!==E&&(h.set(I,E),I.update())}function Ge(I,E){let q=I.colorSpace,ae=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==ho&&q!==Gi&&(pt.getTransfer(q)===vt?(ae!==hi||ie!==Nn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",q)),E}function Je(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=K,this.getTextureUnits=ne,this.setTextureUnits=Te,this.setTexture2D=Me,this.setTexture2DArray=Ie,this.setTexture3D=ze,this.setTextureCube=Se,this.rebindTextures=ut,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=xe,this.dispose=O}function Hv(n,e){function t(i,s=Gi){let r,o=pt.getTransfer(s);if(i===Nn)return n.UNSIGNED_BYTE;if(i===ql)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Yl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===du)return n.BYTE;if(i===fu)return n.SHORT;if(i===Nr)return n.UNSIGNED_SHORT;if(i===Xl)return n.INT;if(i===li)return n.UNSIGNED_INT;if(i===Jn)return n.FLOAT;if(i===ci)return n.HALF_FLOAT;if(i===gu)return n.ALPHA;if(i===xu)return n.RGB;if(i===hi)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===Hi)return n.DEPTH_STENCIL;if(i===$l)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===us)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Kl)return n.RGBA_INTEGER;if(i===Yo||i===$o||i===Zo||i===Jo)if(o===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Ql||i===ec||i===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===Ko||i===ac)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nc||i===ic)return o===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rc)return r.COMPRESSED_R11_EAC;if(i===oc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ko)return r.COMPRESSED_RG11_EAC;if(i===ac)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===lc||i===cc||i===hc||i===uc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===yc||i===vc||i===Mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===lc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===uc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_c)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Mc)return o===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sc||i===bc||i===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sc)return o===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===wc||i===jo||i===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Tc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Gv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new To(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new mn({vertexShader:Gv,fragmentShader:Vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ve(new Xt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends gi{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new Hu,g={},y=t.getContextAttributes(),S=null,M=null,A=[],T=[],x=new oe,b=null,L=null,C=new Sn;C.viewport=new Lt;let D=new Sn;D.viewport=new Lt;let z=[C,D],W=new kl,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Me=A[j];return Me===void 0&&(Me=new Sr,A[j]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(j){let Me=A[j];return Me===void 0&&(Me=new Sr,A[j]=Me),Me.getGripSpace()},this.getHand=function(j){let Me=A[j];return Me===void 0&&(Me=new Sr,A[j]=Me),Me.getHandSpace()};function U(j){let Me=T.indexOf(j.inputSource);if(Me===-1)return;let Ie=A[Me];Ie!==void 0&&(Ie.update(j.inputSource,j.frame,c||o),Ie.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Z);for(let j=0;j<A.length;j++){let Me=T[j];Me!==null&&(T[j]=null,A[j].disconnect(Me))}R=null,O=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,M=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),L!==null){let j=L.camera;j.fov=L.fov,j.zoom=L.zoom,j.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Z),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,ze=null,Se=null;y.depth&&(Se=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=y.stencil?Hi:Ui,ze=y.stencil?zs:li);let He={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Bn(u.textureWidth,u.textureHeight,{format:hi,type:Nn,depthTexture:new Bi(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ie={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Bn(f.framebufferWidth,f.framebufferHeight,{format:hi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(j){for(let Me=0;Me<j.removed.length;Me++){let Ie=j.removed[Me],ze=T.indexOf(Ie);ze>=0&&(T[ze]=null,A[ze].disconnect(Ie))}for(let Me=0;Me<j.added.length;Me++){let Ie=j.added[Me],ze=T.indexOf(Ie);if(ze===-1){for(let He=0;He<A.length;He++)if(He>=T.length){T.push(Ie),ze=He;break}else if(T[He]===null){T[He]=Ie,ze=He;break}if(ze===-1)break}let Se=A[ze];Se&&Se.connect(Ie)}}function V(j,Me){Me===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Me.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let Me=j.near,Ie=j.far;m.texture!==null&&(m.depthNear>0&&(Me=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),W.near=D.near=C.near=Me,W.far=D.far=C.far=Ie,(R!==W.near||O!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),R=W.near,O=W.far),W.layers.mask=j.layers.mask|6,C.layers.mask=W.layers.mask&-5,D.layers.mask=W.layers.mask&-3;let ze=j.parent,Se=W.cameras;V(W,ze);for(let He=0;He<Se.length;He++)V(Se[He],ze);W.projectionMatrix.copy(C.projectionMatrix),W.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&j.isPerspectiveCamera&&(L={camera:j,fov:j.fov,zoom:j.zoom}),K(j,W,ze)};function K(j,Me,Ie){Ie===null?j.matrix.copy(Me.matrixWorld):(j.matrix.copy(Ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(Me.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Me.projectionMatrix),j.projectionMatrixInverse.copy(Me.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ml*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(j){return g[j]};let ne=null;function Te(j,Me){if(h=Me.getViewerPose(c||o),p=Me,h!==null){let Ie=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;Ie.length!==W.cameras.length&&(W.cameras.length=0,ze=!0);for(let Xe=0;Xe<Ie.length;Xe++){let rt=Ie[Xe],ct=null;if(f!==null)ct=f.getViewport(rt);else{let fe=d.getViewSubImage(u,rt);ct=fe.viewport,Xe===0&&(e.setRenderTargetTextures(M,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(M))}let se=z[Xe];se===void 0&&(se=new Sn,se.layers.enable(Xe),se.viewport=new Lt,z[Xe]=se),se.matrix.fromArray(rt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(rt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(ct.x,ct.y,ct.width,ct.height),Xe===0&&(W.matrix.copy(se.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),ze===!0&&W.cameras.push(se)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Xe=d.getDepthInformation(Ie[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,s.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Xe=0;Xe<Ie.length;Xe++){let rt=Ie[Xe].camera;if(rt){let ct=g[rt];ct||(ct=new To,g[rt]=ct);let se=d.getCameraImage(rt);ct.sourceTexture=se}}}}for(let Ie=0;Ie<A.length;Ie++){let ze=T[Ie],Se=A[Ie];ze!==null&&Se!==void 0&&Se.update(ze,Me,c||o)}ne&&ne(j,Me),Me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Me}),p=null}let Be=new Rp;Be.setAnimationLoop(Te),this.setAnimationLoop=function(j){ne=j},this.dispose=function(){}}},Wv=new lt,Bp=new Ke;Bp.set(-1,0,0,0,1,0,0,0,1);function Xv(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Eu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,S,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===en&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===en&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),S=y.envMap,M=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===en&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qv(n,e,t,i){let s={},r={};function o(y,S){let M=S.program;i.uniformBlockBinding(y,M,s[y.id])}function a(y,S){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(y,A);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let S=n.createBuffer(),M=y.__size,A=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=M.length;T<x;T++){let b=M[T];if(Array.isArray(b))for(let L=0,C=b.length;L<C;L++)h(b[L],T,L,A);else h(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,S,M,A){if(u(y,S,M,A)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let C=x[L],D=v(C,!0);d(C,y.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,y.__data)}}function d(y,S,M){typeof y=="number"||typeof y=="boolean"?S[M]=y:y.isMatrix3?(S[M]=y.elements[0],S[M+1]=y.elements[1],S[M+2]=y.elements[2],S[M+3]=0,S[M+4]=y.elements[3],S[M+5]=y.elements[4],S[M+6]=y.elements[5],S[M+7]=0,S[M+8]=y.elements[6],S[M+9]=y.elements[7],S[M+10]=y.elements[8],S[M+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-M),M):y.toArray(S,M)}function u(y,S,M,A){let T=y.value,x=S+"_"+M;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let b=A[x],L=!1;for(let C=0;C<T.length;C++)f(T[C],b,C)===!0&&(L=!0);return L}return f(T,A,x)}function f(y,S,M){if(S[M]===void 0)return typeof y=="number"||typeof y=="boolean"?S[M]=y:ArrayBuffer.isView(y)?S[M]=y.slice():S[M]=y.clone(),!0;{let A=S[M];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return S[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function p(y){let S=y.uniforms,M=0,A=16;for(let x=0,b=S.length;x<b;x++){let L=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,D=L.length;C<D;C++){let z=L[C],W=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(S[x])||Array.isArray(z.value),O=M;for(let F=0,Z=W.length;F<Z;F++){let V=W[F],K=v(V,R),ne=M%A,Te=ne%K.boundary,Be=ne+Te;M+=Te,Be!==0&&A-Be<K.storage&&(M+=A-Be),F===0&&(O=M),M+=K.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((M-O)/Float32Array.BYTES_PER_ELEMENT),z.__offset=O}}let T=M%A;return T>0&&(M+=A-T),y.__size=M,y.__cache={},this}function v(y,S){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Ye("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let S=y.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let y in s)n.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var Yv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function $v(){return Mi===null&&(Mi=new So(Yv,16,16,us,ci),Mi.name="DFG_LUT",Mi.minFilter=Rn,Mi.magFilter=Rn,Mi.wrapS=mi,Mi.wrapT=mi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Pc=class{constructor(e={}){let{canvas:t=Xf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Nn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let v=f,m=new Set([Kl,Jl,Zl]),g=new Set([Nn,li,Nr,zs,ql,Yl]),y=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],b=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,W=null,R=null,O=null;this._outputColorSpace=Ct;let U=0,F=0,Z=null,V=-1,K=null,ne=new Lt,Te=new Lt,Be=null,j=new Le(0),Me=0,Ie=t.width,ze=t.height,Se=1,He=null,Dt=null,Xe=new Lt(0,0,Ie,ze),rt=new Lt(0,0,Ie,ze),ct=!1,se=new is,fe=new yl,he=!1,Ce=!1,ve=new lt,Qe=new P,Fe=new Lt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function _t(){return Z===null?Se:1}let H=i;function Zt(w,B){return t.getContext(w,B)}let at,At,xe,Ht,Ge,Je,I,E,q,ae,ie,ue,_e,Q,ee,pe,N,te,J,me,ce,de,Oe;try{let w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",be,!1),H===null){let B="webgl2";if(H=Zt(B,w),H===null)throw Zt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(w){throw t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),$e("WebGLRenderer: "+w.message),w}function nt(){at=new ry(H),at.init(),ce=new Hv(H,at),At=new $_(H,at,e,ce),xe=new kv(H,at),At.reversedDepthBuffer&&u&&xe.buffers.depth.setReversed(!0),W=H.createFramebuffer(),R=H.createFramebuffer(),O=H.createFramebuffer(),Ht=new ly(H),Ge=new Tv,Je=new zv(H,at,xe,Ge,At,ce,Ht),I=new sy(C),E=new hg(H),de=new q_(H,E),q=new oy(H,E,Ht,de),ae=new hy(H,q,E,de,Ht),te=new cy(H,At,Je),ee=new Z_(Ge),ie=new Ev(C,I,at,At,de,ee),ue=new Xv(C,Ge),_e=new Av,Q=new Dv(at),N=new X_(C,I,xe,ae,p,l),pe=new Bv(C,ae,At),Oe=new qv(H,Ht,At,xe),J=new Y_(H,at,Ht),me=new ay(H,at,Ht),Ht.programs=ie.programs,C.capabilities=At,C.extensions=at,C.properties=Ge,C.renderLists=_e,C.shadowMap=pe,C.state=xe,C.info=Ht}v!==Nn&&(L=new dy(v,t.width,t.height,a,s,r));let le=new Gu(C,H);this.xr=le,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(w){w!==void 0&&(Se=w,this.setSize(Ie,ze,!1))},this.getSize=function(w){return w.set(Ie,ze)},this.setSize=function(w,B,$=!0){if(le.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=w,ze=B,t.width=Math.floor(w*Se),t.height=Math.floor(B*Se),$===!0&&(t.style.width=w+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ie*Se,ze*Se).floor()},this.setDrawingBufferSize=function(w,B,$){Ie=w,ze=B,Se=$,t.width=Math.floor(w*$),t.height=Math.floor(B*$),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(v===Nn){$e("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){Ye("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Xe)},this.setViewport=function(w,B,$,X){w.isVector4?Xe.set(w.x,w.y,w.z,w.w):Xe.set(w,B,$,X),xe.viewport(ne.copy(Xe).multiplyScalar(_t()).round())},this.getScissor=function(w){return w.copy(rt)},this.setScissor=function(w,B,$,X){w.isVector4?rt.set(w.x,w.y,w.z,w.w):rt.set(w,B,$,X),xe.scissor(Te.copy(rt).multiplyScalar(_t()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(w){xe.setScissorTest(ct=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){Dt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,$=!0){let X=0;if(w){let Y=!1;if(Z!==null){let ye=Z.texture.format;Y=m.has(ye)}if(Y){let ye=Z.texture.type,Pe=g.has(ye),ge=N.getClearColor(),we=N.getClearAlpha(),Ue=ge.r,je=ge.g,dt=ge.b;Pe?(y[0]=Ue,y[1]=je,y[2]=dt,y[3]=we,H.clearBufferuiv(H.COLOR,0,y)):(S[0]=Ue,S[1]=je,S[2]=dt,S[3]=we,H.clearBufferiv(H.COLOR,0,S))}else X|=H.COLOR_BUFFER_BIT}B&&(X|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(X|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&H.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",be,!1),N.dispose(),_e.dispose(),Q.dispose(),Je.dispose(),Ge.dispose(),I.dispose(),ae.dispose(),q.dispose(),de.dispose(),Oe.dispose(),ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",vd),le.removeEventListener("sessionend",Md),Ms.stop()};function ke(w){w.preventDefault(),po("WebGLRenderer: Context Lost."),D=!0}function tt(){po("WebGLRenderer: Context Restored."),D=!1;let w=Ht.autoReset,B=pe.enabled,$=pe.autoUpdate,X=pe.needsUpdate,Y=pe.type;nt(),Ht.autoReset=w,pe.enabled=B,pe.autoUpdate=$,pe.needsUpdate=X,pe.type=Y}function be(w){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Et(w){let B=w.target;B.removeEventListener("dispose",Et),on(B)}function on(w){Ji(w),Ge.remove(w)}function Ji(w){let B=Ge.get(w).programs;B!==void 0&&(B.forEach(function($){ie.releaseProgram($)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,$,X,Y,ye){B===null&&(B=ht);let Pe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ge=$m(w,B,$,X,Y);xe.setMaterial(X,Pe);let we=$.index,Ue=1;if(X.wireframe===!0){if(we=q.getWireframeAttribute($),we===void 0)return;Ue=2}let je=$.drawRange,dt=$.attributes.position,De=je.start*Ue,ft=(je.start+je.count)*Ue;ye!==null&&(De=Math.max(De,ye.start*Ue),ft=Math.min(ft,(ye.start+ye.count)*Ue)),we!==null?(De=Math.max(De,0),ft=Math.min(ft,we.count)):dt!=null&&(De=Math.max(De,0),ft=Math.min(ft,dt.count));let Jt=ft-De;if(Jt<0||Jt===1/0)return;de.setup(Y,X,ge,$,we);let Pt,Rt=J;if(we!==null&&(Pt=E.get(we),Rt=me,Rt.setIndex(Pt)),Y.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*_t()),Rt.setMode(H.LINES)):Rt.setMode(H.TRIANGLES);else if(Y.isLine){let _n=X.linewidth;_n===void 0&&(_n=1),xe.setLineWidth(_n*_t()),Y.isLineSegments?Rt.setMode(H.LINES):Y.isLineLoop?Rt.setMode(H.LINE_LOOP):Rt.setMode(H.LINE_STRIP)}else Y.isPoints?Rt.setMode(H.POINTS):Y.isSprite&&Rt.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Rt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let _n=Y._multiDrawStarts,Ne=Y._multiDrawCounts,wn=Y._multiDrawCount,yt=we?E.get(we).bytesPerElement:1,Ss=Ge.get(X).currentProgram.getUniforms();for(let yn=0;yn<wn;yn++)Ss.setValue(H,"_gl_DrawID",yn),Rt.render(_n[yn]/yt,Ne[yn])}else if(Y.isInstancedMesh)Rt.renderInstances(De,Jt,Y.count);else if($.isInstancedBufferGeometry){let _n=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ne=Math.min($.instanceCount,_n);Rt.renderInstances(De,Jt,Ne)}else Rt.render(De,Jt)};function yd(w,B,$,X){z!==null&&w.isNodeMaterial&&z.setObject(X,w),he===!0&&ee.setState(w,$,!1),w.transparent===!0&&w.side===In&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,Jr(w,B,X),w.side=yi,w.needsUpdate=!0,Jr(w,B,X),w.side=In):Jr(w,B,X)}this.compile=function(w,B,$=null){$===null&&($=w),z!==null&&z.renderStart(w,B,$),T=Q.get($),T.init(B),b.push(T),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==$&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),Ce=this.localClippingEnabled,he=ee.init(this.clippingPlanes,Ce),he===!0&&ee.setGlobalState(this.clippingPlanes,B),z!==null&&pe.render(T.state.shadowsArray,$,B);let X=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let ye=Y.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){let ge=ye[Pe];yd(ge,$,B,Y),X.add(ge)}else yd(ye,$,B,Y),X.add(ye)}),T=b.pop(),z!==null&&z.renderEnd(),X},this.compileAsync=function(w,B,$=null){let X=this.compile(w,B,$);return new Promise(Y=>{function ye(){if(X.forEach(function(Pe){let we=Ge.get(Pe).currentProgram;(we===void 0||we.isReady())&&X.delete(Pe)}),X.size===0){Y(w);return}setTimeout(ye,10)}at.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ph=null;function qm(w){ph&&ph(w)}function vd(){Ms.stop()}function Md(){Ms.start()}let Ms=new Rp;Ms.setAnimationLoop(qm),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(w){ph=w,le.setAnimationLoop(w),w===null?Ms.stop():Ms.start()},le.addEventListener("sessionstart",vd),le.addEventListener("sessionend",Md),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(w,B);let $=le.enabled===!0&&le.isPresenting===!0,X=L!==null&&(Z===null||$)&&L.begin(C,Z);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(B),B=le.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,B,Z),T=Q.get(w,b.length),T.init(B),T.state.textureUnits=Je.getTextureUnits(),b.push(T),ve.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?fe.setFromArrayCamera(B):se.setFromProjectionMatrix(ve,$n,B.reversedDepth),Ce=this.localClippingEnabled,he=ee.init(this.clippingPlanes,Ce),A=_e.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){let Pe=C.xr.getDepthSensingMesh();Pe!==null&&mh(Pe,B,-1/0,C.sortObjects)}mh(w,B,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(He,Dt),ut=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ut&&N.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),he===!0&&ee.beginShadows();let Y=T.state.shadowsArray;if(pe.render(Y,w,B),he===!0&&ee.endShadows(),(X&&L.hasRenderPass())===!1){let Pe=A.opaque,ge=A.transmissive;if(T.setupLights(),B.isArrayCamera){let we=B.cameras;if(ge.length>0)for(let Ue=0,je=we.length;Ue<je;Ue++){let dt=we[Ue];bd(Pe,ge,w,dt)}ut&&N.render(w);for(let Ue=0,je=we.length;Ue<je;Ue++){let dt=we[Ue];Sd(A,w,dt,dt.viewport)}}else ge.length>0&&bd(Pe,ge,w,B),ut&&N.render(w),Sd(A,w,B)}Z!==null&&F===0&&(Je.updateMultisampleRenderTarget(Z),Je.updateRenderTargetMipmap(Z)),X&&L.end(C),w.isScene===!0&&w.onAfterRender(C,w,B),de.resetDefaultState(),V=-1,K=null,b.pop(),b.length>0?(T=b[b.length-1],Je.setTextureUnits(T.state.textureUnits),he===!0&&ee.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function mh(w,B,$,X){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Pe=B.isArrayCamera?fe:se;if(!w.frustumCulled||w.intersectsFrustum(Pe)){X&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ve);let ge=ae.update(w),we=w.material;we.visible&&A.push(w,ge,we,$,Fe.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Pe=B.isArrayCamera?fe:se;if(!w.frustumCulled||w.intersectsFrustum(Pe)){let ge=ae.update(w),we=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(ve)),Array.isArray(we)){let Ue=ge.groups;for(let je=0,dt=Ue.length;je<dt;je++){let De=Ue[je],ft=we[De.materialIndex];ft&&ft.visible&&A.push(w,ge,ft,$,Fe.z,De,B)}}else we.visible&&A.push(w,ge,we,$,Fe.z,null,B)}}}let ye=w.children;for(let Pe=0,ge=ye.length;Pe<ge;Pe++)mh(ye[Pe],B,$,X)}function Sd(w,B,$,X){let{opaque:Y,transmissive:ye,transparent:Pe}=w;T.setupLightsView($),he===!0&&ee.setGlobalState(C.clippingPlanes,$),X&&xe.viewport(ne.copy(X)),Y.length>0&&Ra(Y,B,$),ye.length>0&&Ra(ye,B,$),Pe.length>0&&Ra(Pe,B,$),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function bd(w,B,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let De=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:De?ci:Nn,minFilter:zi,samples:Math.max(4,At.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let ye=T.state.transmissionRenderTarget[X.id],Pe=X.viewport||ne;ye.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);let ge=C.getRenderTarget(),we=C.getActiveCubeFace(),Ue=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(j),Me=C.getClearAlpha(),Me<1&&C.setClearColor(16777215,.5),C.clear(),ut&&N.render($);let je=C.toneMapping;C.toneMapping=vi;let dt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),he===!0&&ee.setGlobalState(C.clippingPlanes,X),Ra(w,$,X),Je.updateMultisampleRenderTarget(ye),Je.updateRenderTargetMipmap(ye),at.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let ft=0,Jt=B.length;ft<Jt;ft++){let Pt=B[ft],{object:Rt,geometry:_n,material:Ne,group:wn}=Pt;if(Ne.side===In&&Rt.layers.test(X.layers)){let yt=Ne.side;Ne.side=en,Ne.needsUpdate=!0,Ed(Rt,$,X,_n,Ne,wn),Ne.side=yt,Ne.needsUpdate=!0,De=!0}}De===!0&&(Je.updateMultisampleRenderTarget(ye),Je.updateRenderTargetMipmap(ye))}C.setRenderTarget(ge,we,Ue),C.setClearColor(j,Me),dt!==void 0&&(X.viewport=dt),C.toneMapping=je}function Ra(w,B,$){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,ye=w.length;Y<ye;Y++){let Pe=w[Y],{object:ge,geometry:we,group:Ue}=Pe,je=Pe.material;je.allowOverride===!0&&X!==null&&(je=X),ge.layers.test($.layers)&&Ed(ge,B,$,we,je,Ue)}}function Ed(w,B,$,X,Y,ye){z!==null&&Y.isNodeMaterial&&z.setObject(w,Y),w.onBeforeRender(C,B,$,X,Y,ye),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(C,B,$,X,w,ye),Y.transparent===!0&&Y.side===In&&Y.forceSinglePass===!1?(Y.side=en,Y.needsUpdate=!0,C.renderBufferDirect($,B,X,Y,w,ye),Y.side=yi,Y.needsUpdate=!0,C.renderBufferDirect($,B,X,Y,w,ye),Y.side=In):C.renderBufferDirect($,B,X,Y,w,ye),w.onAfterRender(C,B,$,X,Y,ye)}function Td(w){let B=0;for(let $ of w)$.texture!==null&&B++;return B}function Jr(w,B,$){B.isScene!==!0&&(B=ht);let X=Ge.get(w),Y=T.state.lights,ye=T.state.shadowsArray,Pe=Y.state.version,ge=ie.getParameters(w,Y.state,ye,B,$,T.state.lightProbeGridArray),we=ie.getProgramCacheKey(ge),Ue=X.programs;X.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let je=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;X.envMap=I.get(w.envMap||X.environment,je),X.envMapRotation=X.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Et),Ue=new Map,X.programs=Ue,X.programVariants=new Map);let dt=Ue.get(we);if(dt!==void 0){if(X.currentProgram===dt&&X.lightsStateVersion===Pe)return Ad(w,ge),dt}else ge.uniforms=ie.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,$,ge),w.onBeforeCompile(ge,C),dt=ie.acquireProgram(ge,we),Ue.set(we,dt),X.uniforms=ge.uniforms;let De=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=ee.uniform),Ad(w,ge),X.needsLights=Jm(w),X.lightsStateVersion=Pe,X.needsLights&&(De.ambientLightColor.value=Y.state.ambient,De.lightProbe.value=Y.state.probe,De.sunLights.value=Y.state.sun,De.sunLightShadows.value=Y.state.sunShadow,De.directionalLights.value=Y.state.directional,De.directionalLightShadows.value=Y.state.directionalShadow,De.spotLights.value=Y.state.spot,De.spotLightShadows.value=Y.state.spotShadow,De.rectAreaLights.value=Y.state.rectArea,De.ltc_1.value=Y.state.rectAreaLTC1,De.ltc_2.value=Y.state.rectAreaLTC2,De.pointLights.value=Y.state.point,De.pointLightShadows.value=Y.state.pointShadow,De.hemisphereLights.value=Y.state.hemi,De.sunShadowMatrix.value=Y.state.sunShadowMatrix,De.sunShadowCascade.value=Y.state.sunShadowCascade,De.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,De.spotLightMatrix.value=Y.state.spotLightMatrix,De.spotLightMap.value=Y.state.spotLightMap,De.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Td(T.state.lightProbeGridArray),X.currentProgram=dt,X.uniformsList=null,dt}function Ym(w,B,$,X,Y){let ye=Ge.get(w),Pe=ye.currentProgram.id+","+X+","+Y,ge=ye.programVariants.get(Pe);return ge===void 0?(ge=Jr(w,B,$),ye.programVariants.set(Pe,ge)):(ye.currentProgram=ge,ye.uniformsList=null,ye.outputColorSpace=X,ye.toneMapping=Y),ge}function wd(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=Ur.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function Ad(w,B){let $=Ge.get(w);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function $m(w,B,$,X,Y){B.isScene!==!0&&(B=ht),Je.resetTextureUnits();let ye=B.fog,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,ge=Z===null?C.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:pt.workingColorSpace,we=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ue=I.get(X.envMap||Pe,we),je=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,dt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!$.morphAttributes.position,ft=!!$.morphAttributes.normal,Jt=!!$.morphAttributes.color,Pt=vi;X.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Pt=C.toneMapping);let Rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_n=Rt!==void 0?Rt.length:0,Ne=Ge.get(X),wn=T.state.lights;if(he===!0&&(Ce===!0||w!==K)){let kt=w===K&&X.id===V;ee.setState(X,w,kt)}let yt=!1,Ss=!1;X.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==wn.state.version||Y.isBatchedMesh&&Ne.batching===!1||!Y.isBatchedMesh&&Ne.batching===!0||Y.isBatchedMesh&&Ne.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ne.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ne.instancing===!1||!Y.isInstancedMesh&&Ne.instancing===!0||Y.isSkinnedMesh&&Ne.skinning===!1||!Y.isSkinnedMesh&&Ne.skinning===!0||Y.isInstancedMesh&&Ne.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ne.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ne.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ne.instancingMorph===!1&&Y.morphTexture!==null||Ne.envMap!==Ue||X.fog===!0&&Ne.fog!==ye||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ee.numPlanes||Ne.numIntersection!==ee.numIntersection)||Ne.vertexAlphas!==je||Ne.vertexTangents!==dt||Ne.morphTargets!==De||Ne.morphNormals!==ft||Ne.morphColors!==Jt||Ne.morphTargetsCount!==_n||Ne.numLightProbeGrids!==Td(T.state.lightProbeGridArray)?yt=!0:(Ne.outputColorSpace!==ge||Ne.toneMapping!==Pt)&&(Ss=!0):(yt=!0,Ne.__version=X.version);let yn=Ne.currentProgram;(yt===!0||Ss===!0)&&(yn=Ss===!0?Ym(X,B,Y,ge,Pt):Jr(X,B,Y),z&&X.isNodeMaterial&&z.onUpdateProgram(X,yn,Ne));let Ca=!1,Ki=!1,bs=!1,gt=yn.getUniforms(),fn=Ne.uniforms;if(xe.useProgram(yn.program)&&(Ca=!0,Ki=!0,bs=!0),X.id!==V&&(V=X.id,Ki=!0),Ca||K!==w){xe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),gt.setValue(H,"projectionMatrix",w.projectionMatrix),gt.setValue(H,"viewMatrix",w.matrixWorldInverse);let an=gt.map.cameraPosition;an!==void 0&&an.setValue(H,Qe.setFromMatrixPosition(w.matrixWorld)),At.logarithmicDepthBuffer&&gt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&gt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),K!==w&&(K=w,Ki=!0,bs=!0)}if(Ne.needsLights&&(wn.state.sunShadowMap.length>0&&gt.setValue(H,"sunShadowMap",wn.state.sunShadowMap,Je),wn.state.directionalShadowMap.length>0&&gt.setValue(H,"directionalShadowMap",wn.state.directionalShadowMap,Je),wn.state.spotShadowMap.length>0&&gt.setValue(H,"spotShadowMap",wn.state.spotShadowMap,Je),wn.state.pointShadowMap.length>0&&gt.setValue(H,"pointShadowMap",wn.state.pointShadowMap,Je)),Y.isSkinnedMesh){gt.setOptional(H,Y,"bindMatrix"),gt.setOptional(H,Y,"bindMatrixInverse");let kt=Y.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),gt.setValue(H,"boneTexture",kt.boneTexture,Je))}Y.isBatchedMesh&&(gt.setOptional(H,Y,"batchingTexture"),gt.setValue(H,"batchingTexture",Y._matricesTexture,Je),gt.setOptional(H,Y,"batchingIdTexture"),gt.setValue(H,"batchingIdTexture",Y._indirectTexture,Je),gt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&gt.setValue(H,"batchingColorTexture",Y._colorsTexture,Je));let ti=$.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&te.update(Y,$,yn),(Ki||Ne.receiveShadow!==Y.receiveShadow)&&(Ne.receiveShadow=Y.receiveShadow,gt.setValue(H,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(fn.envMapIntensity.value=B.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=$v()),Ki){if(gt.setValue(H,"toneMappingExposure",C.toneMappingExposure),Ne.needsLights&&Zm(fn,bs),ye&&X.fog===!0&&ue.refreshFogUniforms(fn,ye),ue.refreshMaterialUniforms(fn,X,Se,ze,T.state.transmissionRenderTarget[w.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){let kt=M,an=0;for(let Ai of T.state.lightProbeGridArray)Ai.texture!==null&&(kt.textures[an]=Ai.texture,kt.min[an]=Ai.boundingBox.min,kt.max[an]=Ai.boundingBox.max,kt.resolution[an]=Ai.resolution,an++);for(let Ai in kt)kt[Ai].length=an;fn.probesSH.value=kt.textures,fn.probesMin.value=kt.min,fn.probesMax.value=kt.max,fn.probesResolution.value=kt.resolution}Ur.upload(H,wd(Ne),fn,Je)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ur.upload(H,wd(Ne),fn,Je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&gt.setValue(H,"center",Y.center),gt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),gt.setValue(H,"normalMatrix",Y.normalMatrix),gt.setValue(H,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let kt=X.uniformsGroups;for(let an=0,Ai=kt.length;an<Ai;an++){let Cd=kt[an];Oe.update(Cd,yn),Oe.bind(Cd,yn)}}return yn}function Zm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function Jm(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(w,B,$){let X=Ge.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ge.get(w.texture).__webglTexture=B,Ge.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let $=Ge.get(w);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,$=0){Z=w,U=B,F=$;let X=null,Y=!1,ye=!1;if(w){let ge=Ge.get(w);if(ge.__useDefaultFramebuffer!==void 0){xe.bindFramebuffer(H.FRAMEBUFFER,ge.__webglFramebuffer),ne.copy(w.viewport),Te.copy(w.scissor),Be=w.scissorTest,xe.viewport(ne),xe.scissor(Te),xe.setScissorTest(Be),V=-1;return}else if(ge.__webglFramebuffer===void 0)Je.setupRenderTarget(w);else if(ge.__hasExternalTextures)Je.rebindTextures(w,Ge.get(w.texture).__webglTexture,Ge.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let je=w.depthTexture;if(ge.__boundDepthTexture!==je){if(je!==null&&Ge.has(je)&&(w.width!==je.image.width||w.height!==je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(w)}}let we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);let Ue=Ge.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?X=Ue[B][$]:X=Ue[B],Y=!0):w.samples>0&&Je.useMultisampledRTT(w)===!1?X=Ge.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?X=Ue[$]:X=Ue,ne.copy(w.viewport),Te.copy(w.scissor),Be=w.scissorTest}else ne.copy(Xe).multiplyScalar(Se).floor(),Te.copy(rt).multiplyScalar(Se).floor(),Be=ct;if($!==0&&(X=W),xe.bindFramebuffer(H.FRAMEBUFFER,X)&&xe.drawBuffers(w,X),xe.viewport(ne),xe.scissor(Te),xe.setScissorTest(Be),Y){let ge=Ge.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+B,ge.__webglTexture,$)}else if(ye){let ge=B;for(let we=0;we<w.textures.length;we++){let Ue=Ge.get(w.textures[we]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+we,Ue.__webglTexture,$,ge)}}else if(w!==null&&$!==0){let ge=Ge.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ge.__webglTexture,$)}V=-1};function Rd(w){let B=Ge.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=At.textureFormatReadable(w.format),B.__typeReadable=At.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,$,X,Y,ye,Pe,ge=0){if(!(w&&w.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we){xe.bindFramebuffer(H.FRAMEBUFFER,we);try{let Ue=w.textures[ge],je=Ue.format,dt=Ue.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge);let De=Rd(Ue);if(De.__formatReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-X&&$>=0&&$<=w.height-Y&&H.readPixels(B,$,X,Y,ce.convert(je),ce.convert(dt),ye)}finally{let Ue=Z!==null?Ge.get(Z).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,B,$,X,Y,ye,Pe,ge=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ge.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe],Array.isArray(we)&&(we=we[0])),we)if(B>=0&&B<=w.width-X&&$>=0&&$<=w.height-Y){xe.bindFramebuffer(H.FRAMEBUFFER,we);let Ue=w.textures[ge],je=Ue.format,dt=Ue.type;w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+ge);let De=Rd(Ue);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ft),H.bufferData(H.PIXEL_PACK_BUFFER,ye.byteLength,H.STREAM_READ),H.readPixels(B,$,X,Y,ce.convert(je),ce.convert(dt),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let Jt=Z!==null?Ge.get(Z).__webglFramebuffer:null;xe.bindFramebuffer(H.FRAMEBUFFER,Jt);let Pt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Yf(H,Pt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ft),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ye),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ft),H.deleteSync(Pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,$=0){let X=Math.pow(2,-$),Y=Math.floor(w.image.width*X),ye=Math.floor(w.image.height*X),Pe=B!==null?B.x:0,ge=B!==null?B.y:0;Je.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,Pe,ge,Y,ye),xe.unbindTexture()},this.copyTextureToTexture=function(w,B,$=null,X=null,Y=0,ye=0){let Pe,ge,we,Ue,je,dt,De,ft,Jt,Pt=w.isCompressedTexture?w.mipmaps[ye]:w.image;if($!==null)Pe=$.max.x-$.min.x,ge=$.max.y-$.min.y,we=$.isBox3?$.max.z-$.min.z:1,Ue=$.min.x,je=$.min.y,dt=$.isBox3?$.min.z:0;else{let gt=Math.pow(2,-Y);Pe=Math.floor(Pt.width*gt),ge=Math.floor(Pt.height*gt),w.isDataArrayTexture?we=Pt.depth:w.isData3DTexture?we=Math.floor(Pt.depth*gt):we=1,Ue=0,je=0,dt=0}X!==null?(De=X.x,ft=X.y,Jt=X.z):(De=0,ft=0,Jt=0);let Rt=ce.convert(B.format),_n=ce.convert(B.type),Ne;B.isData3DTexture?(Je.setTexture3D(B,0),Ne=H.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Je.setTexture2DArray(B,0),Ne=H.TEXTURE_2D_ARRAY):(Je.setTexture2D(B,0),Ne=H.TEXTURE_2D),xe.activeTexture(H.TEXTURE0),xe.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,B.flipY),xe.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),xe.pixelStorei(H.UNPACK_ALIGNMENT,B.unpackAlignment);let wn=xe.getParameter(H.UNPACK_ROW_LENGTH),yt=xe.getParameter(H.UNPACK_IMAGE_HEIGHT),Ss=xe.getParameter(H.UNPACK_SKIP_PIXELS),yn=xe.getParameter(H.UNPACK_SKIP_ROWS),Ca=xe.getParameter(H.UNPACK_SKIP_IMAGES);xe.pixelStorei(H.UNPACK_ROW_LENGTH,Pt.width),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Pt.height),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Ue),xe.pixelStorei(H.UNPACK_SKIP_ROWS,je),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,dt);let Ki=w.isDataArrayTexture||w.isData3DTexture,bs=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let gt=Ge.get(w),fn=Ge.get(B),ti=Ge.get(gt.__renderTarget),kt=Ge.get(fn.__renderTarget);xe.bindFramebuffer(H.READ_FRAMEBUFFER,ti.__webglFramebuffer),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let an=0;an<we;an++)Ki&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(w).__webglTexture,Y,dt+an),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(B).__webglTexture,ye,Jt+an)),H.blitFramebuffer(Ue,je,Ue+Pe,je+ge,De,ft,De+Pe,ft+ge,H.DEPTH_BUFFER_BIT,H.NEAREST);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||Ge.has(w)){let gt=Ge.get(w),fn=Ge.get(B);xe.bindFramebuffer(H.READ_FRAMEBUFFER,R),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,O);for(let ti=0;ti<we;ti++)Ki?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gt.__webglTexture,Y,dt+ti):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gt.__webglTexture,Y),bs?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,fn.__webglTexture,ye,Jt+ti):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,fn.__webglTexture,ye),Y!==0?H.blitFramebuffer(Ue,je,Ue+Pe,je+ge,De,ft,De+Pe,ft+ge,H.COLOR_BUFFER_BIT,H.NEAREST):bs?H.copyTexSubImage3D(Ne,ye,De,ft,Jt+ti,Ue,je,Pe,ge):H.copyTexSubImage2D(Ne,ye,De,ft,Ue,je,Pe,ge);xe.bindFramebuffer(H.READ_FRAMEBUFFER,null),xe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else bs?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ne,ye,De,ft,Jt,Pe,ge,we,Rt,_n,Pt.data):B.isCompressedArrayTexture?H.compressedTexSubImage3D(Ne,ye,De,ft,Jt,Pe,ge,we,Rt,Pt.data):H.texSubImage3D(Ne,ye,De,ft,Jt,Pe,ge,we,Rt,_n,Pt):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,ye,De,ft,Pe,ge,Rt,_n,Pt.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,ye,De,ft,Pt.width,Pt.height,Rt,Pt.data):H.texSubImage2D(H.TEXTURE_2D,ye,De,ft,Pe,ge,Rt,_n,Pt);xe.pixelStorei(H.UNPACK_ROW_LENGTH,wn),xe.pixelStorei(H.UNPACK_IMAGE_HEIGHT,yt),xe.pixelStorei(H.UNPACK_SKIP_PIXELS,Ss),xe.pixelStorei(H.UNPACK_SKIP_ROWS,yn),xe.pixelStorei(H.UNPACK_SKIP_IMAGES,Ca),ye===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&H.generateMipmap(Ne),xe.unbindTexture()},this.initRenderTarget=function(w){Ge.get(w).__webglFramebuffer===void 0&&Je.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Je.setTextureCube(w,0):w.isData3DTexture?Je.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Je.setTexture2DArray(w,0):Je.setTexture2D(w,0),xe.unbindTexture()},this.resetState=function(){U=0,F=0,Z=null,xe.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};function Nc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Mt;l.morphTargetsRelative=a;let c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=kp(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][u]);let p=kp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function kp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Ft(o,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/t;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<t;p++){let v=h.getComponent(u,p);a.setComponent(u+d,p,v)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var ui={raptor:{name:"F-22 Raptor",blurb:"Stealthy all-rounder with thrust vectoring.",len:18.9,span:6.78,twinTail:!0,twinEngine:!0,canard:!1,hp:110,agility:1.08,speed:1.12,missiles:8,gun:1.1,style:"raptor"},viper:{name:"F-35 Lightning II",blurb:"Light and twitchy single-engine stealth jet.",len:15.7,span:5.35,twinTail:!0,twinEngine:!1,canard:!1,hp:90,agility:1.22,speed:1,missiles:6,gun:1,style:"viper"},striker:{name:"Su-57 Felon",blurb:"Heavy hitter. Tough, loads of missiles.",len:20.1,span:7,twinTail:!0,twinEngine:!0,canard:!1,hp:150,agility:.9,speed:1,missiles:12,gun:1.25,style:"striker"}},zr={gray:["#9ea5ad","#737b84","Stealth gray","blob"],desert:["#b38f62","#7a5c3b","Desert camo","camo"],black:["#2b2e33","#1c1e21","Night ops","two"],navy:["#4a6687","#30455f","Navy blue","two"],red:["#3a3d42","#8f2a2f","Aggressor","splinter"]},Vu={};function Xp(n){if(Vu[n])return Vu[n];let[e,t,,i]=zr[n],s=1024,r=document.createElement("canvas");r.width=r.height=s;let o=r.getContext("2d"),a=n.length*977+13,l=()=>(a=a*16807%2147483647)/2147483647;if(o.fillStyle=e,o.fillRect(0,0,s,s),i==="camo")for(let h=0;h<40;h++){o.fillStyle=h%3?t:"#9a7b50",o.beginPath();let d=l()*s,u=l()*s;o.moveTo(d,u);for(let f=0;f<9;f++)o.quadraticCurveTo(d+(l()-.5)*260,u+(l()-.5)*260,d+(l()-.5)*220,u+(l()-.5)*220);o.closePath(),o.fill()}if(i==="splinter")for(let h=0;h<34;h++){o.fillStyle=h%2?t:"#24262a",o.beginPath();let d=l()*s,u=l()*s;o.moveTo(d,u),o.lineTo(d+(l()-.3)*300,u+(l()-.5)*120),o.lineTo(d+(l()-.5)*200,u+(l()-.2)*260),o.closePath(),o.fill()}if(i==="blob"){o.filter="blur(10px)";for(let h=0;h<26;h++){o.fillStyle=t,o.globalAlpha=.55+l()*.3,o.beginPath();let d=l()*s,u=l()*s,f=50+l()*120;for(let p=0;p<=10;p++){let v=p/10*Math.PI*2,m=f*(.6+l()*.6);o.lineTo(d+Math.cos(v)*m*1.4,u+Math.sin(v)*m)}o.closePath(),o.fill()}o.filter="none",o.globalAlpha=1}if(i==="two"){let h=o.createLinearGradient(0,0,0,s);h.addColorStop(0,t),h.addColorStop(.5,e),h.addColorStop(1,t),o.globalAlpha=.55,o.fillStyle=h,o.fillRect(0,0,s,s),o.globalAlpha=1}for(let h=0;h<2200;h++)o.fillStyle=`rgba(${l()<.5?"255,255,255":"0,0,0"},${.015+l()*.03})`,o.fillRect(l()*s,l()*s,2+l()*14,1+l()*3);o.strokeStyle="rgba(0,0,0,.28)",o.lineWidth=2;for(let h=0;h<=8;h++)o.beginPath(),o.moveTo(0,h*s/8+h%2*9),o.lineTo(s,h*s/8+h%2*9),o.stroke();for(let h=0;h<8;h++)for(let d=0;d<6;d++){if(l()<.25)continue;let u=(d+h%2*.5)*s/6;o.beginPath(),o.moveTo(u,h*s/8),o.lineTo(u,(h+1)*s/8),o.stroke()}for(let h=0;h<14;h++){let d=l()*s,u=l()*s,f=40+l()*90,p=30+l()*60;o.strokeStyle="rgba(0,0,0,.22)",o.strokeRect(d,u,f,p)}o.fillStyle="rgba(0,0,0,.25)";for(let h=0;h<900;h++)o.fillRect(Math.floor(l()*6)*s/6+(l()<.5?-4:4),l()*s,1.5,1.5);let c=new Wt(r);return c.wrapS=c.wrapT=oi,c.colorSpace=Ct,c.anisotropy=4,Vu[n]=c}var Wu=null;function Zv(){if(Wu)return Wu;let n=1024,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=4242,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle="#808080",t.fillRect(0,0,n,n),t.strokeStyle="#3c3c3c",t.lineWidth=2.5;for(let o=0;o<=8;o++)t.beginPath(),t.moveTo(0,o*n/8+o%2*9),t.lineTo(n,o*n/8+o%2*9),t.stroke();for(let o=0;o<8;o++)for(let a=0;a<6;a++){if(s()<.2)continue;let l=(a+o%2*.5)*n/6;t.beginPath(),t.moveTo(l,o*n/8),t.lineTo(l,(o+1)*n/8),t.stroke()}t.lineWidth=2;for(let o=0;o<22;o++){let a=s()*n,l=s()*n,c=30+s()*110,h=24+s()*70;t.strokeStyle="#4a4a4a",t.strokeRect(a,l,c,h),t.fillStyle="#5a5a5a";for(let d=0;d<c;d+=9)t.fillRect(a+d,l-4,2,2),t.fillRect(a+d,l+h+3,2,2)}t.fillStyle="#5c5c5c";for(let o=0;o<8;o++)for(let a=0;a<n;a+=10)t.fillRect(a,o*n/8+6+o%2*9,2,2);let r=new Wt(e);return r.wrapS=r.wrapT=oi,r.anisotropy=4,Wu=r}function qp(n,e){return Ku(ui[n]?n:"viper",zr[e]?e:"gray",!1).A.cock}var Xu={};function Jv(n){let e=n?"e":"p";if(Xu[e])return Xu[e];let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(64,64),n){i.fillStyle="#c0262e",i.beginPath();for(let r=0;r<3;r++){let o=r*2.094-1.57;i.moveTo(0,0),i.lineTo(Math.cos(o-.35)*58,Math.sin(o-.35)*58),i.lineTo(Math.cos(o+.35)*58,Math.sin(o+.35)*58)}i.fill(),i.fillStyle="#16171a",i.beginPath(),i.arc(0,0,18,0,7),i.fill()}else i.strokeStyle="rgba(70,76,84,.8)",i.lineWidth=6,i.beginPath(),i.arc(0,0,50,0,7),i.stroke(),i.fillStyle="rgba(70,76,84,.75)",i.font="900 46px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("JK",0,3),i.fillRect(-62,-5,10,10),i.fillRect(52,-5,10,10);let s=new Wt(t);return s.colorSpace=Ct,Xu[e]=s}function zp(n,e,t=28,i=!0){let s=[],r=[],o=[],a=n.length;n.forEach(([c,h,d,u,f])=>{let p=-e/2+c*e;for(let v=0;v<=t;v++){let m=v/t*Math.PI*2,g=Math.cos(m),y=Math.sin(m),S=2/f;s.push(Math.sign(g)*Math.pow(Math.abs(g),S)*h,u+Math.sign(y)*Math.pow(Math.abs(y),S)*d,p),r.push(v/t*3,c*e/8)}});for(let c=0;c<a-1;c++)for(let h=0;h<t;h++){let d=c*(t+1)+h,u=d+t+1;o.push(d,d+1,u,u,d+1,u+1)}if(i){let c=s.length/3,h=n[a-1];s.push(0,h[3],-e/2+h[0]*e),r.push(.5,.5);let d=(a-1)*(t+1);for(let u=0;u<t;u++)o.push(d+u,d+u+1,c)}let l=new Mt;return l.setAttribute("position",new Ze(s,3)),l.setAttribute("uv",new Ze(r,2)),l.setIndex(o),l.computeVertexNormals(),l}function Hp(n,e,t=.05){let i=new Ds;i.moveTo(n[0][0],-n[0][1]),n.slice(1).forEach(([r,o])=>i.lineTo(r,-o)),i.closePath();let s=new Ar(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:6});return s.translate(0,0,-e/2),s.rotateX(-Math.PI/2),Yp(s,1/8),s}function Kv(n,e,t=.05){let i=new Ds;i.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(([r,o])=>i.lineTo(r,o)),i.closePath();let s=new Ar(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3});return s.translate(0,0,-e/2),s.rotateY(-Math.PI/2),Yp(s,1/8),s}function Yp(n,e){let t=n.attributes.uv;for(let i=0;i<t.count;i++)t.setXY(i,t.getX(i)*e,t.getY(i)*e)}var Gp=new lt,jv=new Tt,Qv=new pn,eM=new P,tM=new P;function sn(n,e=0,t=0,i=0,s=0,r=0,o=0,a=1,l=1,c=1){return Gp.compose(eM.set(e,t,i),jv.setFromEuler(Qv.set(s,r,o)),tM.set(a,l,c)),n.clone().applyMatrix4(Gp)}function nM(n){let e=n.index?n.toNonIndexed():n;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new Ze(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.clearGroups(),e}function Ju(n){return n.length?Nc(n.map(nM),!1):null}function Gn(n,e,t){let i=n.length;if(e<=n[0][0])return n[0][t];if(e>=n[i-1][0])return n[i-1][t];let s=0;for(;e>n[s+1][0];)s++;let r=d=>(n[d+1][t]-n[d][t])/(n[d+1][0]-n[d][0]),o=d=>{if(d===0)return r(0);if(d===i-1)return r(i-2);let u=r(d-1),f=r(d);return u*f<=0?0:2/(1/u+1/f)},a=n[s+1][0]-n[s][0],l=(e-n[s][0])/a,c=l*l,h=c*l;return(2*h-3*c+1)*n[s][t]+(h-2*c+l)*a*o(s)+(-2*h+3*c)*n[s+1][t]+(h-c)*a*o(s+1)}function iM(n,e,{rings:t=64,seg:i=40,x:s=0,t0:r=n[0][0],t1:o=n[n.length-1][0],bias:a=1.2}={}){let l=[],c=[];for(let d=0;d<=t;d++){let u=r+(o-r)*Math.pow(d/t,a),f=Gn(n,u,1),p=Gn(n,u,2),v=Gn(n,u,3),m=Gn(n,u,4),g=Gn(n,u,5),y=Gn(n,u,6),S=-e/2+u*e;for(let M=0;M<=i;M++){let A=M/i*Math.PI*2,T=Math.cos(A),x=Math.sin(A),b=x>=0,L=2/(b?g:y);l.push(s+Math.sign(T)*Math.pow(Math.abs(T),L)*f,m+Math.sign(x)*Math.pow(Math.abs(x),L)*(b?p:v),S),c.push(M/i*3,S/8)}}let h=[];for(let d=0;d<t;d++)for(let u=0;u<i;u++){let f=d*(i+1)+u,p=f+i+1;h.push(f,f+1,p,p,f+1,p+1)}return $p(l,c,h)}function sM(n,e){let t=[],i=[],s=n.length;for(let r=0;r<s;r++){let o=n[r],a=n[(r+s-1)%s],l=n[(r+1)%s];e[r]?(t.push(o),i.push(!0)):(t.push([.75*o[0]+.25*a[0],.75*o[1]+.25*a[1]],[.75*o[0]+.25*l[0],.75*o[1]+.25*l[1]]),i.push(!1,!1))}return[t,i]}function Uc(n,e,{rings:t=70,iters:i=2,sharp:s=[],mirror:r=!0,bias:o=1.15}={}){let a=n[0][1].length,l=[];for(let C=0;C<a;C++)l.push(n.map(([D,z])=>[D,z[C][0],z[C][1]]));let c=C=>r?[...C,...C.slice(1,-1).reverse().map(([D,z])=>[-D,z])]:C,h=r?[...Array(a).keys()].map(C=>s.includes(C)).concat([...Array(a-2).keys()].map(C=>s.includes(a-2-C))):[...Array(a).keys()].map(C=>s.includes(C)),d=[],u=[],f=[],p=[],v=[],m=[],g=n[0][0],y=n[n.length-1][0];for(let C=0;C<=t;C++){let D=g+(y-g)*Math.pow(C/t,o),z=-e/2+D*e,W=c(l.map(V=>[Gn(V,D,1),Gn(V,D,2)])),R=h;for(let V=0;V<i;V++)[W,R]=sM(W,R);let O=W.length,U=[],F=[],Z=0;for(let V=0;V<=O;V++){let K=W[V%O];V&&(Z+=Math.hypot(K[0]-W[V-1][0],K[1]-W[(V-1)%O][1]));let ne=()=>(d.push(K[0],K[1],z),u.push(Z/8,z/8),d.length/3-1),Te=ne(),Be=R[V%O]&&V>0&&V<O?ne():Te;U.push(Te),F.push(Be)}R[0]||m.push([F[0],U[O]]),p.push(U),v.push(F)}for(let C=0;C<t;C++)for(let D=0;D<p[C].length-1;D++){let z=v[C][D],W=p[C][D+1],R=v[C+1][D],O=p[C+1][D+1];f.push(z,W,R,R,W,O)}let S=new Mt;S.setAttribute("position",new Ze(d,3)),S.setAttribute("uv",new Ze(u,2)),S.setIndex(f),S.computeVertexNormals();let M=v[t>>1],A=S.attributes.position,T=S.attributes.normal,x=0,b=0;M.forEach(C=>{x+=A.getX(C),b+=A.getY(C)}),x/=M.length,b/=M.length;let L=M[Math.floor(M.length/4)];if((A.getX(L)-x)*T.getX(L)+(A.getY(L)-b)*T.getY(L)<0){let C=S.index.array;for(let D=0;D<C.length;D+=3){let z=C[D+1];C[D+1]=C[D+2],C[D+2]=z}S.computeVertexNormals()}return m.forEach(([C,D])=>{if(C===D)return;let z=T.getX(C)+T.getX(D),W=T.getY(C)+T.getY(D),R=T.getZ(C)+T.getZ(D),O=Math.hypot(z,W,R)||1;T.setXYZ(C,z/O,W/O,R/O),T.setXYZ(D,z/O,W/O,R/O)}),S}function sa(n,e,t=.9){let i=0,s=0;n.forEach(([l,c])=>{i+=l,s+=c}),i/=n.length,s/=n.length;let r=[i,s,e],o=[];n.forEach(([l,c])=>r.push(i+(l-i)*t,s+(c-s)*t,e));for(let l=0;l<n.length;l++)o.push(0,1+l,1+(l+1)%n.length);let a=new Mt;if(a.setAttribute("position",new Ze(r,3)),a.setAttribute("uv",new Ze(new Array(r.length/3*2).fill(0),2)),a.setIndex(o),a.computeVertexNormals(),a.attributes.normal.getZ(0)>0){let l=a.index.array;for(let c=0;c<l.length;c+=3){let h=l[c+1];l[c+1]=l[c+2],l[c+2]=h}a.computeVertexNormals()}return a}var ra=(n,e,t,i,s)=>[[n+t-s,e+i],[n+t,e+i-s],[n+t,e-i+s],[n+t-s,e-i],[n-t+s,e-i],[n-t,e-i+s],[n-t,e+i-s],[n-t+s,e+i]];function kr(n,{nC:e=14,sub:t=1}={}){let i=[];for(let c=0;c<n.length-1;c++)for(let h=0;h<t;h++){let d=h/t;i.push(n[c].map((u,f)=>u*(1-d)+n[c+1][f]*d))}i.push(n[n.length-1]);let s=[],r=[],o=[],a=2*e,l=c=>5*(.2969*Math.sqrt(c)-.126*c-.3516*c*c+.2843*c**3-.1036*c**4);i.forEach(([c,h,d,u,f])=>{let p=u-d;for(let v=0;v<a;v++){let m=v<=e,g=m?v:a-v,y=(1-Math.cos(Math.PI*g/e))/2,S=Math.max(l(y)*f*p,.004);s.push(c,h+(m?S:-S),d+y*p),r.push(c/8,(d+y*p)/8)}});for(let c=0;c<i.length-1;c++)for(let h=0;h<a;h++){let d=c*a+h,u=c*a+(h+1)%a,f=d+a,p=u+a;o.push(d,f,u,u,f,p)}return[0,i.length-1].forEach(c=>{let h=s.length/3,d=0,u=0,f=0;for(let p=0;p<a;p++)d+=s[(c*a+p)*3],u+=s[(c*a+p)*3+1],f+=s[(c*a+p)*3+2];s.push(d/a,u/a,f/a),r.push(0,0);for(let p=0;p<a;p++)o.push(c*a+p,c*a+(p+1)%a,h)}),$p(s,r,o)}function $p(n,e,t){let i=new Mt;return i.setAttribute("position",new Ze(n,3)),i.setAttribute("uv",new Ze(e,2)),i.setIndex(t),rM(i)}function rM(n){let e=n.attributes.position,t=n.index.array,i=new P,s=new P,r=new P,o=0;for(let a=0;a<t.length;a+=3)i.fromBufferAttribute(e,t[a]),s.fromBufferAttribute(e,t[a+1]),r.fromBufferAttribute(e,t[a+2]),o+=i.dot(s.cross(r));if(o<0)for(let a=0;a<t.length;a+=3){let l=t[a+1];t[a+1]=t[a+2],t[a+2]=l}return n.computeVertexNormals(),n}function oM(n){let e=n.clone();e.scale(-1,1,1);let t=e.index.array;for(let i=0;i<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}return e.computeVertexNormals(),e}var fs=(n,e)=>{e.push(n,oM(n))};function Vp(n,e,t,i,s){let r=kr(n,s);return r.rotateZ(Math.PI/2-e),r.translate(t,i,0),r}function Wp(n,e){let[t,i]=[n[0],n[n.length-1]],s=t[0]+(i[0]-t[0])*e,r=0;for(;r<n.length-2&&s>n[r+1][0];)r++;let o=(s-n[r][0])/(n[r+1][0]-n[r][0]),a=n[r].map((l,c)=>l*(1-o)+n[r+1][c]*o);return{x:s,y:a[1],le:a[2],te:a[3],tr:a[4],c:a[3]-a[2]}}var aM={raptor:{L0:18.9,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.14,.06],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.36],[.18,.33],[.36,.17],[.48,0],[.38,-.14],[.22,-.25],[.08,-.28],[0,-.29]]],[.18,[[0,.55],[.27,.5],[.52,.26],[.66,.02],[.55,-.2],[.36,-.36],[.12,-.41],[0,-.41]]],[.27,[[0,.64],[.32,.6],[.6,.34],[.76,.05],[.68,-.2],[.5,-.4],[.16,-.46],[0,-.46]]],[.36,[[0,.66],[.42,.64],[.86,.42],[1.2,.08],[1.12,-.14],[.95,-.4],[.3,-.48],[0,-.48]]],[.45,[[0,.6],[.56,.67],[1.08,.44],[1.66,.04],[1.52,-.14],[1.2,-.42],[.4,-.5],[0,-.5]]],[.58,[[0,.52],[.62,.66],[1.16,.44],[1.76,.03],[1.6,-.14],[1.25,-.42],[.4,-.48],[0,-.48]]],[.72,[[0,.46],[.6,.6],[1.1,.4],[1.6,.02],[1.48,-.13],[1.18,-.38],[.4,-.44],[0,-.44]]],[.85,[[0,.36],[.6,.52],[1,.34],[1.3,0],[1.22,-.12],[1,-.32],[.4,-.38],[0,-.38]]],[.95,[[0,.26],[.56,.42],[.92,.28],[1.08,0],[1.02,-.1],[.9,-.26],[.4,-.32],[0,-.32]]],[1,[[0,.24],[.55,.38],[.88,.26],[1,0],[.95,-.1],[.85,-.24],[.4,-.3],[0,-.3]]]],intake:[[.25,[[.6,.32],[1.2,.06],[1.1,-.48],[.58,-.5]]],[.32,[[.62,.34],[1.27,.08],[1.15,-.5],[.58,-.52]]],[.42,[[.7,.38],[1.4,.1],[1.24,-.5],[.6,-.52]]],[.52,[[.82,.42],[1.5,.07],[1.3,-.46],[.7,-.5]]]],W:[[1.5,.03,n=>n(.405),n=>n(.79),.035],[6.78,-.22,n=>n(.66),n=>n(.752),.03]],HS:[[1,0,n=>n(.8),n=>n(1),.035],[4.4,-.04,n=>n(.955),n=>n(1.02),.03]],VT:{x:1.25,y:.26,cant:.49,secs:[[0,0,n=>n(.615),n=>n(.865),.04],[2.65,0,n=>n(.755),n=>n(.84),.035]]},ex:[-.55,.55],ey:0,nr:.38,nozzle:"2d",canopy:[.09,.35],cw:1.2,ch:1.05,frame:!1,pyl:[.78,.56,.34,.14]},viper:{L0:15.7,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.15,.05],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.38],[.2,.34],[.38,.18],[.5,0],[.4,-.15],[.24,-.27],[.08,-.3],[0,-.31]]],[.19,[[0,.6],[.28,.55],[.55,.3],[.7,.02],[.6,-.22],[.4,-.4],[.14,-.46],[0,-.46]]],[.28,[[0,.74],[.36,.68],[.68,.4],[.86,.05],[.78,-.24],[.58,-.46],[.18,-.52],[0,-.52]]],[.38,[[0,.82],[.45,.76],[.9,.46],[1.3,.08],[1.22,-.2],[1,-.48],[.3,-.56],[0,-.56]]],[.5,[[0,.84],[.55,.78],[1.05,.48],[1.5,.06],[1.4,-.18],[1.1,-.48],[.35,-.58],[0,-.58]]],[.64,[[0,.78],[.55,.74],[1,.46],[1.45,.04],[1.35,-.16],[1.05,-.44],[.35,-.54],[0,-.54]]],[.78,[[0,.68],[.5,.64],[.88,.4],[1.2,.02],[1.12,-.14],[.9,-.38],[.35,-.48],[0,-.48]]],[.9,[[0,.58],[.42,.54],[.72,.34],[.92,0],[.86,-.12],[.72,-.32],[.3,-.42],[0,-.42]]],[.97,[[0,.52],[.38,.48],[.62,.3],[.74,0],[.7,-.12],[.6,-.28],[.3,-.38],[0,-.4]]],[1,[[0,.5],[.35,.46],[.58,.28],[.68,0],[.65,-.12],[.56,-.26],[.28,-.36],[0,-.38]]]],intake:[[.26,[[.58,.42],[1.1,.2],[1.02,-.4],[.55,-.42]]],[.33,[[.6,.44],[1.16,.2],[1.06,-.42],[.55,-.44]]],[.43,[[.7,.46],[1.3,.18],[1.16,-.42],[.6,-.44]]],[.52,[[.82,.5],[1.4,.12],[1.22,-.42],[.7,-.46]]]],W:[[1.4,.04,n=>n(.47),n=>n(.83),.04],[5.35,-.1,n=>n(.64),n=>n(.73),.035]],HS:[[.7,.02,n=>n(.84),n=>n(1.03),.035],[3.45,0,n=>n(.99),n=>n(1.045),.03]],VT:{x:.9,y:.46,cant:.44,secs:[[0,0,n=>n(.65),n=>n(.865),.045],[2.15,0,n=>n(.79),n=>n(.86),.04]]},ex:[0],ey:.05,nr:.52,nozzle:"round",canopy:[.1,.34],cw:1.05,ch:1,frame:!0,pyl:[.8,.55,.3]},striker:{L0:20.1,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.03,[[0,.12],[.06,.1],[.12,.04],[.16,0],[.12,-.05],[.06,-.1],[.02,-.11],[0,-.11]]],[.09,[[0,.36],[.18,.32],[.34,.16],[.44,0],[.36,-.14],[.2,-.25],[.07,-.28],[0,-.29]]],[.18,[[0,.58],[.26,.52],[.5,.28],[.64,.02],[.54,-.18],[.36,-.34],[.12,-.4],[0,-.4]]],[.28,[[0,.64],[.3,.6],[.62,.34],[1,.06],[.86,-.12],[.5,-.3],[.15,-.36],[0,-.36]]],[.38,[[0,.6],[.4,.57],[1.1,.3],[1.95,.05],[1.75,-.08],[1,-.2],[.3,-.28],[0,-.28]]],[.5,[[0,.52],[.5,.5],[1.3,.27],[2.2,.04],[2,-.06],[1.2,-.15],[.3,-.21],[0,-.21]]],[.65,[[0,.46],[.5,.45],[1.3,.25],[2.05,.03],[1.85,-.05],[1.1,-.13],[.3,-.19],[0,-.19]]],[.8,[[0,.36],[.42,.34],[1,.2],[1.45,.02],[1.32,-.04],[.9,-.11],[.25,-.15],[0,-.15]]],[.92,[[0,.24],[.25,.22],[.45,.12],[.56,0],[.5,-.06],[.4,-.1],[.15,-.12],[0,-.12]]],[1.06,[[0,.06],[.05,.05],[.1,.02],[.12,0],[.1,-.02],[.06,-.04],[.02,-.05],[0,-.05]]]],nacelle:[[.3,.46,.3,.04],[.42,.47,.34,.1],[.62,.47,.42,.24],[.85,.46,.45,.28],[1,.44,.44,.27]],nx:1.12,ny:-.4,W:[[1.9,.05,n=>n(.47),n=>n(.8),.035],[7,-.05,n=>n(.745),n=>n(.81),.03]],HS:[[1.55,-.12,n=>n(.82),n=>n(.995),.035],[4,-.14,n=>n(.95),n=>n(1),.03]],VT:{x:1.4,y:.14,cant:.45,secs:[[0,0,n=>n(.7),n=>n(.9),.04],[2.1,0,n=>n(.82),n=>n(.905),.035]]},ex:[-1.12,1.12],ey:-.4,nr:.42,nozzle:"round",canopy:[.1,.31],cw:1,ch:.95,frame:!0,irst:!0,pyl:[.84,.64,.44,.24]}};function lM(n){let e=n.len,t={paint:[],dark:[],metal:[],glass:[],light:[],decal:[],pilot:[],sill:[],helm:[]},i=n.style,s=aM[i],r=R=>-e/2+R*e,o=e/s.L0,a=e/15,l=R=>R.map(([O,U])=>[O,U.map(([F,Z])=>[F*o,Z*o])]),c=l(s.body),h=c.map(([R,O])=>[R,O[0][1]]),d=c.map(([R,O])=>[R,O[O.length-1][1]]),u=R=>Gn(h,R,1),f=R=>Gn(d,R,1);t.paint.push(Uc(c,e,{rings:80,iters:2,sharp:[3]}));{let[R,O]=c[c.length-1];t.dark.push(sa([...O,...O.slice(1,-1).reverse().map(([U,F])=>[-U,F])],r(R)-.03,.99))}if(s.intake){let R=l(s.intake),O=Uc(R,e,{rings:16,iters:1,mirror:!1,sharp:[0,1,2,3],bias:1});fs(O,t.paint),fs(sa(R[0][1],r(R[0][0])+.08,.94),t.dark),fs(sa([[R[0][1][0][0]-.05,R[0][1][0][1]],[R[0][1][0][0],R[0][1][0][1]],[R[0][1][3][0],R[0][1][3][1]],[R[0][1][3][0]-.05,R[0][1][3][1]]],r(R[0][0])+.25,1),t.dark)}if(s.nacelle){let R=s.nx*o,O=s.ny*o,U=s.nacelle.map(([Z,V,K,ne])=>[Z,ra(R,O,V*o,K*o,ne*o)]),F=Uc(U,e,{rings:44,iters:2,mirror:!1,sharp:[],bias:1});fs(F,t.paint),fs(sa(ra(R,O,s.nacelle[0][1]*o,s.nacelle[0][2]*o,s.nacelle[0][3]*o),r(s.nacelle[0][0])+.05,.92),t.dark)}s.irst&&t.glass.push(sn(new Qt(.13*o,14,10),.2*o,u(.1)+.03,r(.1)));let[p,v]=s.canopy,m=[[p,.02,.02],[p+.03,.17,.16],[p+.08,.3,.34],[(p+v)/2+.02,.35,.42],[v-.07,.3,.32],[v-.02,.16,.14],[v,.04,.03]].map(([R,O,U])=>[R,O*a*s.cw,U*a*s.ch,u(R)-.08*a,2]);t.glass.push(iM(m.map(([R,O,U,F])=>[R,O,U,U*.3,F,2.1,2]),e,{rings:40,seg:36,bias:1}));let g=R=>u(R)-.07*a,y=R=>Gn(m,R,1);[-1,1].forEach(R=>{let O=[];for(let U=0;U<=14;U++){let F=p+.03+(v-p-.06)*U/14;O.push(new P(R*y(F)*.97,g(F)+.02*a,r(F)))}t.sill.push(new Cr(new Ls(O),24,.035*a,6))}),t.dark.push(sn(new ss(.15*a,.2*a,4,10),0,u(p+.2)+.02*a,r(p+.2),0,0,0,1,1,.45)),t.helm.push(sn(new Qt(.165*a,14,8,Math.PI*.25,Math.PI*.5,Math.PI*.3,Math.PI*.32),0,u(p+.14)+.14*a,r(p+.14),0,Math.PI,0));{let R=p+.15,O=[];for(let U=p+.02;U<=v-.02;U+=.01)O.push(u(U));t.cock={eyeY:u(R)+.13*a,eyeZ:r(R),z0:r(p+.025),z1:r(v-.025),w:Math.max(...m.map(U=>U[1]))*.9,y0:Math.min(...O)-.8*a,y1:Math.max(...O)+.2*a,k:a}}if(s.frame){let R=p+.2;t.dark.push(sn(new zn(1,.045,6,28,Math.PI),0,u(R)-.08*a,r(R),.25,0,0,y(R)*1.02,Gn(m,R,2)*1.02,.3*a))}t.pilot.push(sn(new Qt(.16*a,12,10),0,u(p+.14)+.14*a,r(p+.14)));let S=s.W.map(([R,O,U,F,Z])=>[R*o,O*o,U(r),F(r),Z]),M=s.HS.map(([R,O,U,F,Z])=>[R*o,O*o,U(r),F(r),Z]);fs(kr(S,{nC:16,sub:3}),t.paint),fs(kr(M,{nC:12,sub:2}),t.paint);{let R=s.VT,O=Vp(R.secs.map(([U,F,Z,V,K])=>[U*o,F,Z(r),V(r),K]),R.cant,0,0,{nC:14,sub:2});O.translate(R.x*o,R.y*o,0),fs(O,t.paint)}let A=S[S.length-1];[-1,1].forEach(R=>{t.light.push(sn(new Qt(.05*a,8,6),R*(A[0]-.05),A[1]+.03,A[3]-.15));let O=[];for(let F=.04;F<=.97;F+=.93/12){let Z=Wp(S,F);O.push(new P(R*Z.x,Z.y+.25*Z.tr*Z.c+.004,Z.te-Z.c*.2))}t.dark.push(new Cr(new Ls(O),16,.007,3));let U=Wp(S,.62);t.decal.push(sn(new Xt(1*a,1*a),R*U.x,U.y+.4*U.tr*U.c+.01,(U.le+U.te)/2+.1*U.c,-Math.PI/2,0,0))});let T=s.ex.map(R=>R*o),x=s.ey*o,b=s.nr*o,L=r(1);T.forEach(R=>{if(s.nozzle==="2d"){t.metal.push(Uc([[.955,ra(R,x,.46*o,.3*o,.08*o)],[1,ra(R,x,.42*o,.25*o,.06*o)]],e,{rings:4,iters:1,mirror:!1,bias:1})),[1,-1].forEach(F=>t.metal.push(kr([[R-.4*o,x+F*.23*o,r(.998),r(1.045),.05],[R+.4*o,x+F*.2*o,r(.998),r(1.035),.05]],{nC:6}))),t.dark.push(sa(ra(R,x,.4*o,.22*o,.05*o),r(1)-.05,1));return}let O=new Rr([[b*.98,0],[b*1.02,.2],[b*.97,.7*a],[b*.86,1.15*a],[b*.82,1.22*a],[b*.74,1.18*a],[b*.76,.3]].map(([F,Z])=>new oe(F,Z)),40),U=O.attributes.position;for(let F=0;F<U.count;F++){if(U.getY(F)<.6*a)continue;let Z=Math.atan2(U.getZ(F),U.getX(F)),V=1+.045*Math.max(0,Math.cos(Z*14));U.setX(F,U.getX(F)*V),U.setZ(F,U.getZ(F)*V)}O.computeVertexNormals(),t.metal.push(sn(O,R,x,L-.4*a,Math.PI/2)),t.dark.push(sn(new rs(b*.74,28),R,x,L+.05*a)),t.dark.push(sn(new zn(b*.5,b*.06,6,24),R,x,L))});let C=(R,O,U,F,Z=!1)=>{let V=Vp([[0,0,r(U),r(U)+.35*a,.1],[F,0,r(U)+.14*a,r(U)+.32*a,.1]],0,0,0,{nC:6});Z&&V.rotateZ(Math.PI),t.dark.push(V.translate(R,O,0))};C(0,u(.52)-.02,.52,.18*a),C(0,f(.3)+.02,.3,.18*a,!0),t.light.push(sn(new xt(.03*a,.02*a,.45*a),0,u(.62)+.004,r(.62))),[-1,1].forEach(R=>t.light.push(sn(new xt(.02*a,.02*a,.5*a),R*c[4][1][2][0]*.9,Gn(c.map(([O,U])=>[O,U[2][1]]),.27,1)+.01,r(.27),0,R*.3,0)));let D=[],z=(f(.5)+.2*a)*.5;for(let R=0;R<6;R++)D.push([(.28+.19*R)*a,z,r(.47+R%2*.05)]);for(;D.length<6;)D.push(D[D.length-1]);let W=t.cock;return delete t.cock,{P:t,ex:T,ey:x,nr:b,tailZ:L,sp:A[0]-S[0][0],rx:S[0][0],wy:S[0][1],L:e,k:a,cock:W,pylons:D}}var qu={},Zp=new os(.5,6,16,1,!0).rotateX(Math.PI/2).translate(0,0,3),Jp=new os(.3,3.4,12,1,!0).rotateX(Math.PI/2).translate(0,0,1.7),Fc=null;function oa(){if(Fc)return Fc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Fc=new Wt(n),Fc}function Ku(n,e,t){let i=n+"|"+e+"|"+(t?1:0);if(qu[i])return qu[i];let s=ui[n],r=lM(s),o={paint:new ki({map:Xp(t?"red":e),bumpMap:Zv(),bumpScale:1.2,roughness:.46,metalness:.32,clearcoat:.3,clearcoatRoughness:.45,envMapIntensity:.9}),dark:new it({color:"#25282d",roughness:.55,metalness:.45}),metal:new it({color:"#6f7379",roughness:.32,metalness:.9,envMapIntensity:1.2}),glass:new ki({color:t?"#4a3418":"#7d6a3e",roughness:.03,metalness:.55,envMapIntensity:2.4,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.78}),light:new Gt({color:"#fff7e0"}),decal:new it({map:Jv(t),transparent:!0,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),pilot:new it({color:"#e6e6e0",roughness:.4})};o.sill=o.dark,o.helm=o.dark;let a={};for(let c in r.P){let h=Ju(r.P[c]);h&&(h.computeBoundingSphere(),a[c]=h)}let l=r.pylons;return qu[i]={J:s,A:r,mats:o,geos:a,pylons:l}}function Vi(n="viper",e="gray",t=!1){ui[n]||(n="viper"),zr[e]||(e="gray");let i=Ku(n,e,t),{J:s,A:r}=i,o=new Ut,a=new Ut;o.add(a);for(let m in i.geos){let g=new Ve(i.geos[m],i.mats[m]);g.name=m,g.castShadow=m==="paint"||m==="dark"||m==="metal",g.receiveShadow=m==="paint",a.add(g)}let l=[];for(let m=0;m<Math.ceil(s.missiles/2);m++){let g=i.pylons[m%i.pylons.length];[-1,1].forEach(y=>{let S=aa();S.position.set(y*g[0],g[1],g[2]+(m>=i.pylons.length?1.2:0)),S.castShadow=!0,a.add(S),l.push(S)})}let c=(m,g)=>new Gt({color:m,transparent:!0,opacity:g,blending:qt,depthWrite:!1}),h=t?i.fm||(i.fm=c("#ffa04a",.55)):c("#ffa04a",.6),d=t?i.cm||(i.cm=c("#a9e2ff",.8)):c("#a9e2ff",.85),u=t?i.gm||(i.gm=new Zn({map:oa(),color:"#ffb066",opacity:.7,blending:qt,depthWrite:!1})):new Zn({map:oa(),color:"#ffb066",opacity:.8,blending:qt,depthWrite:!1}),f=[],p=[];r.ex.forEach(m=>{let g=new Ve(Zp,h),y=new Ve(Jp,d),S=new _i(u),M=r.nr/.5;g.scale.setScalar(M),y.scale.setScalar(M),g.position.set(m,r.ey,r.tailZ+.9*r.k),y.position.copy(g.position),S.position.set(m,r.ey,r.tailZ+.7*r.k),S.scale.setScalar(r.nr*4.5),a.add(g,y,S),f.push(g,y),p.push(S)});let v=new _i(i.sm||(i.sm=new Zn({map:oa(),color:"#ffffff",blending:qt,depthWrite:!1})));return v.scale.setScalar(2.4),v.position.set(0,-.5*r.k,-r.L*.05),a.add(v),o.userData={def:s,body:a,flames:f,glows:p,msls:l,strobe:v,len:r.L,flameMat:h,coreMat:d,glowMat:u},o}var Yu=null,$u=null;function cM(){if(Yu)return Yu;let n=[[0,-1.66],[.085,-1.66],[.11,-1.6],[.11,1.15],[.1,1.32],[.075,1.5],[.04,1.62],[0,1.68]].map(([t,i])=>new oe(t,i)),e=[new Rr(n,16).rotateX(-Math.PI/2)];for(let t=0;t<4;t++){let i=t*Math.PI/2+Math.PI/4;e.push(kr([[.1,0,1.18,1.62,.06],[.32,0,1.42,1.62,.06]],{nC:5}).rotateZ(i),kr([[.1,0,-1,-.72,.06],[.24,0,-.9,-.76,.06]],{nC:5}).rotateZ(i))}return Yu=Ju(e)}function hM(){if($u)return $u;let n=document.createElement("canvas");n.width=64,n.height=8;let e=n.getContext("2d");e.fillStyle="#ececec",e.fillRect(0,0,64,8),e.fillStyle="#d9b43a",e.fillRect(10,0,3,8),e.fillStyle="#5b5e63",e.fillRect(0,0,6,8);let t=new Wt(n);return t.colorSpace=Ct,$u=new it({map:t,roughness:.4,metalness:.2})}function aa(){return new Ve(cM(),hM())}function Kp(){Object.keys(ui).forEach(n=>Ku(n,"red",!0))}var Zu={};function Vs(n=!1){let e=n?"boss":"bomber";if(!Zu[e]){let d=n?58:44,u=d/44,f={paint:[],dark:[],metal:[],glass:[],light:[]},p=S=>-d/2+S*d;f.paint.push(zp([[0,.05,.05,0,2],[.03,1.2,1.3,.1,2],[.08,2.1,2.3,.3,2.1],[.16,2.5,2.7,.3,2.2],[.6,2.5,2.6,.3,2.2],[.85,1.8,2,.8,2.1],[1,.5,.6,1.6,2]].map(([S,M,A,T,x])=>[S,M*u,A*u,T*u,x]),d,28)),f.glass.push(zp([[.03,.3,.3,.9,2],[.06,1.3,.8,1.4,2.2],[.1,1.4,.7,1.7,2.2],[.13,.4,.2,1.9,2]].map(([S,M,A,T,x])=>[S,M*u,A*u,T*u,x]),d,18));let v=(n?31:24)*u;[-1,1].forEach(S=>{let M=Hp([[S*2*u,p(.33)],[S*v,p(.45)],[S*v,p(.5)],[S*2*u,p(.52)]],.5*u,.15*u);M.translate(0,2.2*u,0),f.paint.push(M),[.35,.7].forEach(T=>{let x=S*v*T,b=p(.38+T*.1);f.paint.push(sn(new jt(.85*u,.7*u,6*u,14),x,1.1*u,b,Math.PI/2)),f.dark.push(sn(new rs(.8*u,14),x,1.1*u,b-3*u-.02,0,Math.PI,0)),f.metal.push(sn(new jt(.6*u,.55*u,1*u,12,1,!0),x,1.1*u,b+3.3*u,Math.PI/2))});let A=Hp([[S*.3*u,p(.88)],[S*8*u,p(.95)],[S*8*u,p(.98)],[S*.3*u,p(1)]],.25*u,.1*u);A.translate(0,7.2*u,0),f.paint.push(A),f.light.push(sn(new Qt(.25*u,6,5),S*v,2.2*u,p(.5)))}),f.paint.push(sn(Kv([[0,0],[4*u,6.5*u],[6.5*u,6.5*u],[6.8*u,0]],.35*u,.12*u),0,1.4*u,p(.83))),[[0,2.9,.3],[0,-2.4,.55],[0,1.6,.98]].forEach(([S,M,A])=>{f.dark.push(sn(new Qt(.7*u,12,8,0,Math.PI*2,0,Math.PI/2),S,M*u,p(A),M<0?Math.PI:0)),f.metal.push(sn(new jt(.08*u,.08*u,2*u,6),S+.3*u,M*u+(M<0?-.4:.4)*u,p(A)-1*u,Math.PI/2))});let m={paint:new it({map:Xp("red"),roughness:.55,metalness:.3}),dark:new it({color:"#25282d",roughness:.55,metalness:.45}),metal:new it({color:"#6f7379",roughness:.32,metalness:.9}),glass:new ki({color:"#3a2a12",roughness:.05,metalness:.8,transparent:!0,opacity:.85}),light:new Gt({color:"#ff3a3a"})},g={};for(let S in f){let M=Ju(f[S]);M&&(g[S]=M)}let y=[];[-1,1].forEach(S=>[.35,.7].forEach(M=>y.push([S*v*M,1.1*u,p(.38+M*.1)+3.6*u]))),Zu[e]={geos:g,mats:m,L:d,k:u,engines:y}}let t=Zu[e],i=new Ut,s=new Ut;i.add(s);for(let d in t.geos){let u=new Ve(t.geos[d],t.mats[d]);u.castShadow=d!=="light"&&d!=="glass",s.add(u)}let r=t.fm||(t.fm=new Gt({color:"#ffa04a",transparent:!0,opacity:.5,blending:qt,depthWrite:!1})),o=t.cm||(t.cm=new Gt({color:"#a9e2ff",transparent:!0,opacity:.7,blending:qt,depthWrite:!1})),a=t.gm||(t.gm=new Zn({map:oa(),color:"#ffb066",opacity:.7,blending:qt,depthWrite:!1})),l=[],c=[];t.engines.forEach(([d,u,f])=>{let p=new Ve(Zp,r),v=new Ve(Jp,o),m=new _i(a),g=1.2*t.k;p.scale.setScalar(g),v.scale.setScalar(g),p.position.set(d,u,f),v.position.set(d,u,f),m.position.set(d,u,f-.3),m.scale.setScalar(4*t.k),s.add(p,v,m),l.push(p,v),c.push(m)});let h=new _i(t.sm||(t.sm=new Zn({map:oa(),color:"#ff4040",blending:qt,depthWrite:!1})));return h.scale.setScalar(5),h.position.set(0,9*t.k,-t.L*.5+.9*t.L),s.add(h),i.userData={def:{len:t.L,span:24},body:s,flames:l,glows:c,msls:[],strobe:h,len:t.L,guns:[[0,2.9*t.k,-t.L/2+.3*t.L],[0,-2.4*t.k,-t.L/2+.55*t.L],[0,1.6*t.k,-t.L/2+.98*t.L]]},i}function ju(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Wt(i);return s.colorSpace=Ct,s.anisotropy=8,s}function uM(){return ju(1024,384,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f3338"),i.addColorStop(1,"#202327"),n.fillStyle=i,n.fillRect(0,0,e,t);for(let o=0;o<2500;o++)n.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},.035)`,n.fillRect(Math.random()*e,Math.random()*t,2,2);[[e*.22],[e*.78]].forEach(([o])=>{n.fillStyle="#16181b",n.fillRect(o-170,40,340,270),n.strokeStyle="#4a4f56",n.lineWidth=3,n.strokeRect(o-170,40,340,270),n.fillStyle="#3a3e44";for(let a=0;a<5;a++)n.fillRect(o-130+a*58,20,34,14),n.fillRect(o-130+a*58,316,34,14),n.fillRect(o-192,70+a*48,14,30),n.fillRect(o+178,70+a*48,14,30);n.fillStyle="#aab",n.font="10px monospace",["RDR","TGP","SMS","FCR","HSD"].forEach((a,l)=>n.fillText(a,o-130+l*58+4,15))});let s=e/2;[[s-62,92],[s+62,92],[s-62,214],[s+62,214]].forEach(([o,a],l)=>{n.fillStyle="#0d0e10",n.beginPath(),n.arc(o,a,48,0,7),n.fill(),n.strokeStyle="#5a5f66",n.lineWidth=4,n.stroke(),n.strokeStyle="#d8d8d0",n.lineWidth=2;for(let c=0;c<24;c++){let h=c%3?40:34,d=c/24*Math.PI*2;n.beginPath(),n.moveTo(o+Math.cos(d)*h,a+Math.sin(d)*h),n.lineTo(o+Math.cos(d)*44,a+Math.sin(d)*44),n.stroke()}l===0?(n.fillStyle="#3d6fb0",n.beginPath(),n.arc(o,a,30,Math.PI,0),n.fill(),n.fillStyle="#7a5a36",n.beginPath(),n.arc(o,a,30,0,Math.PI),n.fill(),n.strokeStyle="#ffcc33",n.beginPath(),n.moveTo(o-20,a),n.lineTo(o+20,a),n.stroke()):(n.strokeStyle="#ff8a3d",n.lineWidth=3,n.beginPath(),n.moveTo(o,a),n.lineTo(o+Math.cos(l*1.7)*32,a+Math.sin(l*1.7)*32),n.stroke())}),["MASTER CAUTION","FUEL","HYD","ENG","OXY","GEAR","TF FAIL","ECM"].forEach((o,a)=>{let l=s-105+a%4*53,c=300+Math.floor(a/4)*30;n.fillStyle=a===0?"#5a3a10":"#1d2a1d",n.fillRect(l,c,49,24),n.fillStyle=a===0?"#ffb347":"#6fae6f",n.font="bold 8px monospace",n.fillText(o.slice(0,8),l+3,c+15)}),n.fillStyle="#c9c9c0",n.font="bold 11px monospace",n.fillText("ARM",s-150,360),n.fillText("MASTER",s+110,360);for(let o=0;o<6;o++)n.fillStyle="#111",n.beginPath(),n.arc(s-160+o*64,372,6,0,7),n.fill()})}function dM(){return ju(256,512,(n,e,t)=>{n.fillStyle="#2a2d31",n.fillRect(0,0,e,t);for(let i=0;i<7;i++){n.strokeStyle="#41464d",n.lineWidth=2,n.strokeRect(10,14+i*70,e-20,60),n.fillStyle="#d8d8d0",n.font="bold 10px monospace",n.fillText(["FUEL","ENG","LIGHTS","RADIO","IFF","ECS","ANTI-ICE"][i],18,30+i*70);for(let s=0;s<4;s++)n.fillStyle="#121315",n.beginPath(),n.arc(40+s*52,50+i*70,9,0,7),n.fill(),n.fillStyle="#9aa0a8",n.fillRect(38+s*52,36+i*70,4,12)}})}function jp(n,e){let t=qp(n,e),i=new Ut,s=new Ut;i.add(s),s.position.set(0,-t.eyeY,-t.eyeZ);let r=Vi(n,e);s.add(r);let o={uC:{value:new Lt(t.w,t.z0,t.z1,0)},uY:{value:new oe(t.y0,t.y1)}};r.traverse(U=>{if(U.isMesh){if(U.castShadow=!1,U.name==="pilot"||U.name==="helm"||U.name==="sill")U.visible=!1;else if(U.name==="glass")U.material=new Gt({color:"#d8e6f0",transparent:!0,opacity:.05,side:In,depthWrite:!1}),U.renderOrder=5;else if(U.name==="paint"||U.name==="decal"){let F=U.material.clone();F.onBeforeCompile=Z=>{Object.assign(Z.uniforms,o),Z.vertexShader=Z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),Z.fragmentShader=Z.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP; uniform vec4 uC; uniform vec2 uY;`).replace("void main() {",`void main() {
if (abs(vLP.x) < uC.x && vLP.z > uC.y && vLP.z < uC.z && vLP.y > uY.x && vLP.y < uY.y) discard;`)},F.customProgramCacheKey=()=>"fpcut-"+U.name,U.material=F}}});let a=(U,F,Z)=>new P(U,t.eyeY+F,t.eyeZ+Z),l=t.w,c=new it({color:"#1b1d20",roughness:.85,metalness:.2}),h=new it({color:"#33373c",roughness:.5,metalness:.6}),d=new it({color:"#141517",roughness:1,map:ju(128,128,(U,F)=>{U.fillStyle="#26282b",U.fillRect(0,0,F,F);for(let Z=0;Z<1600;Z++)U.fillStyle=`rgba(0,0,0,${Math.random()*.25})`,U.fillRect(Math.random()*F,Math.random()*F,1,1)})}),u=(U,F,Z,V=0,K=0,ne=0)=>{let Te=new Ve(U,F);return Te.position.copy(Z),Te.rotation.set(V,K,ne),s.add(Te),Te},f=new it({color:"#202327",roughness:.9,side:In}),p=t.z1-t.z0,v=Math.min(t.y1,t.eyeY-.26),m=v-t.y0;[-1,1].forEach(U=>u(new Xt(p,m),f,new P(U*l,(t.y0+v)/2,(t.z0+t.z1)/2),0,Math.PI/2)),u(new Xt(l*2,p),f,new P(0,t.y0,(t.z0+t.z1)/2),-Math.PI/2);let g=l*1.92,y=g*.375,S=u(new Xt(g,y),new it({map:uM(),roughness:.8,emissive:"#ffffff",emissiveMap:null,emissiveIntensity:0}),a(0,-.34,-.6),-.3),M=U=>{let F=document.createElement("canvas");F.width=128,F.height=96;let Z=new Wt(F);Z.colorSpace=Ct;let V=new Ve(new Xt(g*.29,g*.22),new Gt({map:Z,toneMapped:!1}));return V.position.set(U*g,y*.04,.004),S.add(V),{c:F,g:F.getContext("2d"),t:Z}},A=[M(-.28),M(.28)];u(new xt(g*.9,.02,.16),d,a(0,-.232,-.64)),u(new jt(.011,.011,g*.9,12),d,a(0,-.23,-.56),0,0,Math.PI/2).scale.set(1,1,.6);let T=new ki({color:"#b8ffd8",transparent:!0,opacity:.1,roughness:0,metalness:.2,depthWrite:!1});u(new Xt(.16,.13),T,a(0,-.13,-.62),-.25).renderOrder=4,u(new Xt(.16,.12),T,a(0,-.12,-.65),-.2).renderOrder=4,[-1,1].forEach(U=>u(new xt(.007,.13,.007),h,a(U*.082,-.14,-.63),-.22)),u(new xt(.18,.025,.06),h,a(0,-.205,-.62));let x=new it({map:dM(),roughness:.8});[-1,1].forEach(U=>{u(new xt(.13,.07,.6),[c,c,x,c,c,c],a(U*(l-.07),-.62,-.05))});let b=new Ut;b.position.copy(a(-(l-.08),-.56,-.14)),b.rotation.x=-.35,s.add(b),[[new xt(.025,.14,.025),h,0,.07,0],[new xt(.06,.05,.09),c,0,.155,-.01],[new Qt(.009,8,6),new Gt({color:"#c33"}),.02,.18,-.04]].forEach(([U,F,Z,V,K])=>{let ne=new Ve(U,F);ne.position.set(Z,V,K),b.add(ne)});let L=new Ut;L.position.copy(a(0,-.95,-.42)),s.add(L);let C=new Ve(new os(.06,.08,12),d);C.position.y=.04,L.add(C);let D=new Ve(new jt(.013,.016,.3,10),h);D.position.y=.19,L.add(D);let z=new Ve(new ss(.024,.09,4,10),c);z.position.set(0,.38,.01),z.rotation.x=.15,L.add(z);let W=new Ve(new xt(.012,.02,.014),new Gt({color:"#c22"}));W.position.set(0,.42,-.024),L.add(W);let R=u(new zn(.045,.008,6,16,Math.PI),new it({color:"#e0b020",roughness:.5}),a(0,-.74,-.24),-.2);R.rotation.z=0;let O=new it({color:"#4a5240",roughness:.95});return[-1,1].forEach(U=>{u(new ss(.065,.32,4,12),O,a(U*.12,-.75,-.3),Math.PI/2-.45).scale.set(1,1,.9)}),i.userData={mfds:A,stick:L,msls:r.userData.msls,eyeY:t.eyeY,eyeZ:t.eyeZ},i}var Oc=class extends Is{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new xt;e.deleteAttribute("uv");let t=new it({side:en}),i=new it,s=new Us(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Oi(e,i,6),a=new Ot;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ve(e,Hr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ve(e,Hr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ve(e,Hr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Ve(e,Hr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Ve(e,Hr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Ve(e,Hr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Hr(n){return new Bo({color:0,emissive:16777215,emissiveIntensity:n})}var Ws=14e3,di=340,Bc=Ws/2,Kn=4600,Qu=55;function kc(n,e){let t=n*374761393+e*668265263;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967295}function fM(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,o=s*s*(3-2*s),a=r*r*(3-2*r),l=kc(t,i),c=kc(t+1,i),h=kc(t,i+1),d=kc(t+1,i+1);return l+(c-l)*o+(h-l)*a+(l-c-h+d)*o*a}function zc(n,e,t=4){let i=0,s=.5,r=1,o=0;for(let a=0;a<t;a++)i+=fM(n*r,e*r)*s,o+=s,s*=.5,r*=2.03;return i/o}var Xs=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function pM(n,e){let t=zc(n*.0011+3,e*.0011-7,4),i=Math.hypot(n,e),s=t*110+Math.sin(n*.0042+t*6)*Math.cos(e*.0017)*14,r=zc(n*42e-5+40,e*42e-5+11,3);s+=Xs(.6,.625,r)*230+Xs(.68,.7,r)*150+Xs(.75,.765,r)*110,s+=Xs(4300,6400,i)*(700+zc(n*9e-4,e*9e-4,3)*900);let o=Math.max(0,Math.abs(n)-1450),a=Math.hypot(o,e),l=Xs(560,280,a);return s*(1-l)+Qu*l}var Hc=class{constructor(){let e=di+1;this.h=new Float32Array(e*e);for(let t=0;t<e;t++)for(let i=0;i<e;i++)this.h[t*e+i]=pM(-Bc+i*Ws/di,-Bc+t*Ws/di)}height(e,t){let i=di+1,s=(e+Bc)/Ws*di,r=(t+Bc)/Ws*di;if(s<0||r<0||s>=di||r>=di)return 800;let o=Math.floor(s),a=Math.floor(r),l=s-o,c=r-a,h=this.h,d=h[a*i+o],u=h[a*i+o+1],f=h[(a+1)*i+o],p=h[(a+1)*i+o+1];return l+c<1?d+(u-d)*l+(f-d)*c:p+(f-p)*(1-l)+(u-p)*(1-c)}mesh(e){let t=new Xt(Ws,Ws,di,di);t.rotateX(-Math.PI/2);let i=t.attributes.position,s=di+1;for(let A=0;A<i.count;A++){let T=A%s,x=Math.floor(A/s);i.setY(A,this.h[x*s+T])}t.computeVertexNormals();let r=this.h,o=A=>{let T=A%s,x=Math.floor(A/s),b=0,L=0;for(let[C,D]of[[-4,0],[4,0],[0,-4],[0,4],[-3,-3],[3,3],[-3,3],[3,-3]]){let z=T+C,W=x+D;z<0||W<0||z>=s||W>=s||(b+=r[W*s+z],L++)}return Math.min(1.1,Math.max(.62,1-(b/L-r[A])/110))},a=t.attributes.normal,l=new Float32Array(i.count*3),c=new Le,h=new Le("#e3b97f"),d=new Le("#d39c62"),u=new Le("#a4583a"),f=new Le("#7a3f2c"),p=new Le("#c98a58"),v=new Le("#b7896b");for(let A=0;A<i.count;A++){let T=i.getX(A),x=i.getY(A),b=i.getZ(A),L=a.getY(A),C=zc(T*.004,b*.004,2);c.copy(h).lerp(d,C*.9);let D=Xs(.93,.72,L);c.lerp(x>120?u:f,D),x>180&&L>.95&&c.lerp(p,.55),x>500&&c.lerp(v,Xs(500,900,x)*.6);let z=Math.sin(x*.12)*.5+.5;D>.4&&c.multiplyScalar(.88+z*.2),c.multiplyScalar(o(A)),l[A*3]=c.r,l[A*3+1]=c.g,l[A*3+2]=c.b}t.setAttribute("color",new Ft(l,3));let m=document.createElement("canvas");m.width=m.height=256;let g=m.getContext("2d");g.fillStyle="#808080",g.fillRect(0,0,256,256);for(let A=0;A<9e3;A++){let T=Math.random();g.fillStyle=`rgba(${T<.5?255:40},${T<.5?240:30},${T<.5?220:20},${.05+Math.random()*.08})`,g.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let A=0;A<40;A++){g.strokeStyle="rgba(90,60,30,.08)",g.lineWidth=2,g.beginPath();let T=Math.random()*256;g.moveTo(0,T);for(let x=0;x<=256;x+=16)g.lineTo(x,T+Math.sin(x*.05+A)*4);g.stroke()}let y=new Wt(m);y.wrapS=y.wrapT=oi,y.repeat.set(420,420),y.anisotropy=e.capabilities.getMaxAnisotropy(),y.colorSpace=Ct;let S=new it({vertexColors:!0,map:y,roughness:.95,metalness:0}),M=new Ve(t,S);return M.receiveShadow=!0,M}rocks(){let e=new Ao(1,0),t=new it({color:"#8d5a3e",roughness:1,flatShading:!0}),i=700,s=new Oi(e,t,i),r=new Ot;for(let o=0;o<i;o++){let a=Math.sqrt(Math.random())*4200,l=Math.random()*7,c=Math.cos(l)*a,h=Math.sin(l)*a,d=4+Math.random()**3*30;r.position.set(c,this.height(c,h)+d*.2,h),r.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),r.scale.set(d,d*(.5+Math.random()*.5),d),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}return s.castShadow=!1,s.receiveShadow=!0,s}};function Qp(n){let e=new mn({side:en,depthWrite:!1,fog:!1,uniforms:{sun:{value:n.clone().normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 sun; varying vec3 vP;
      void main(){ float y=vP.y; vec3 hor=vec3(.93,.82,.66), mid=vec3(.62,.74,.86), top=vec3(.2,.42,.74);
        vec3 c=mix(hor,mid,smoothstep(-.02,.18,y)); c=mix(c,top,smoothstep(.15,.85,y)); if(y<0.) c=mix(hor,vec3(.85,.72,.55),smoothstep(0.,-.2,y));
        float s=max(dot(vP,sun),0.); c+=vec3(1.,.85,.6)*(pow(s,900.)*4.+pow(s,24.)*.35+pow(s,4.)*.08);
        gl_FragColor=vec4(c,1.); }`}),t=new Ve(new Qt(2e4,32,16),e);return t.renderOrder=-2,t}function em(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let h=0;h<30;h++){let d=28+Math.random()*72,u=40+Math.random()*46,f=12+Math.random()*24,p=e.createRadialGradient(d,u-f*.3,0,d,u,f);p.addColorStop(0,"rgba(255,255,255,.6)"),p.addColorStop(.6,"rgba(244,240,232,.35)"),p.addColorStop(1,"rgba(230,224,214,0)"),e.fillStyle=p,e.fillRect(0,0,128,128)}let t=new Wt(n),i=170,s=new Float32Array(i*3),r=new Float32Array(i),o=new Float32Array(i);for(let h=0,d=0;h<34;h++){let u=600+Math.random()*5600,f=Math.random()*7,p=Math.cos(f)*u,v=Math.sin(f)*u,m=2700+Math.random()*1500,g=450+Math.random()*650;for(let y=0;y<5&&d<i;y++,d++)s.set([p+(Math.random()-.5)*g*1.4,m+(Math.random()-.5)*g*.18,v+(Math.random()-.5)*g*.8],d*3),r[d]=g*(.6+Math.random()*.6),o[d]=.45+Math.random()*.35}let a=new Mt;a.setAttribute("position",new Ft(s,3)),a.setAttribute("size",new Ft(r,1)),a.setAttribute("alpha",new Ft(o,1));let l=new mn({transparent:!0,depthWrite:!1,uniforms:{map:{value:t},scale:{value:800},fogColor:{value:new Le("#dcc8a6")}},vertexShader:"attribute float size; attribute float alpha; varying float vA; varying float vD; uniform float scale; void main(){ vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(900.,size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; uniform vec3 fogColor; varying float vA; varying float vD; void main(){ vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(3000.,14000.,vD); float near=smoothstep(60.,420.,vD); gl_FragColor=vec4(mix(vec3(1.,.985,.96),fogColor,f*.7),t.a*vA*near); }"}),c=new Ps(a,l);return c.frustumCulled=!1,c.renderOrder=1,c}var tm=new lt,mM=new Tt,gM=new pn,xM=new P,_M=new P,rn=(n,e=0,t=0,i=0,s=0,r=0,o=0,a=[1,1,1])=>{tm.compose(xM.set(e,t,i),mM.setFromEuler(gM.set(s,r,o)),_M.set(...a));let l=n.clone().applyMatrix4(tm);return l.index?l.toNonIndexed():l},Gc=n=>(n.forEach(e=>{for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);e.clearGroups()}),Nc(n,!1));function nm(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Wt(s);return r.colorSpace=Ct,r.anisotropy=8,i&&(r.wrapS=r.wrapT=oi,r.repeat.set(...i)),r}function im(){let n=new Ut,e=Qu+.3,t=nm(2048,64,(m,g,y)=>{m.fillStyle="#3a3c40",m.fillRect(0,0,g,y);for(let S=0;S<4e3;S++)m.fillStyle=`rgba(${Math.random()<.5?255:0},${Math.random()<.5?255:0},${Math.random()<.5?255:0},.05)`,m.fillRect(Math.random()*g,Math.random()*y,2,1);m.fillStyle="#e8e8e2";for(let S=120;S<g-120;S+=46)m.fillRect(S,y/2-1,26,2);[[10,1],[g-50,-1]].forEach(([S])=>{for(let M=0;M<8;M++)m.fillRect(S,6+M*7,40,4)}),m.fillRect(0,3,g,1.5),m.fillRect(0,y-4.5,g,1.5),m.fillStyle="rgba(20,20,20,.45)";for(let S=0;S<30;S++)m.fillRect(150+Math.random()*300,y/2-8+Math.random()*16,60,2)}),i=new Ve(new Xt(2900,60).rotateX(-Math.PI/2),new it({map:t,roughness:.9}));i.position.set(0,e,0),i.receiveShadow=!0,n.add(i);let s=new it({color:"#7f7a70",roughness:.95}),r=new Ve(new Xt(700,160).rotateX(-Math.PI/2),s);r.position.set(-200,e-.05,170),r.receiveShadow=!0,n.add(r);let o=new Ve(new Xt(26,90).rotateX(-Math.PI/2),s);o.position.set(-200,e-.04,70),n.add(o);let a=[],l=[],c=[],h=[],d=[];for(let m=0;m<4;m++){let g=new jt(22,22,50,20,1,!1,0,Math.PI);a.push(rn(g,-460+m*90,e,210,0,Math.PI/2,Math.PI/2)),l.push(rn(new Xt(34,18),-460+m*90,e+9,184.8,0,Math.PI,0))}a.push(rn(new xt(14,30,14),160,e+15,210)),h.push(rn(new xt(20,7,20),160,e+33,210)),l.push(rn(new xt(22,1.2,22),160,e+37,210));for(let m=0;m<5;m++)d.push(rn(new jt(9,9,12,18),300+m%3*24,e+6,190+Math.floor(m/3)*24));for(let m=0;m<40;m++)h.push(rn(new Qt(.9,6,4),-1440+m*74,e+.5,m%2?34:-34));a.push(rn(new xt(60,10,26),40,e+5,230)),l.push(rn(new xt(62,1,28),40,e+10.5,230));let u={paint:new it({color:"#b9ad97",roughness:.8}),dark:new it({color:"#2d3036",roughness:.7}),metal:new it({color:"#8c9097",roughness:.35,metalness:.8}),glow:new it({color:"#8fd0ff",emissive:"#4aa8ff",emissiveIntensity:.6,roughness:.2,metalness:.5}),white:new it({color:"#e7e4dc",roughness:.5,metalness:.2})};for(let[m,g]of Object.entries({paint:a,dark:l,metal:c,glow:h,white:d}))if(g.length){let y=new Ve(Gc(g),u[m]);y.castShadow=y.receiveShadow=!0,n.add(y)}let f=new Ut;f.position.set(160,e+38,210);let p=new Ve(new xt(14,4,.8),u.metal);p.position.y=3,f.add(p),n.add(f);let v=new Ve(new rs(30,40).rotateX(-Math.PI/2),new it({map:nm(256,256,m=>{m.fillStyle="#b8f36b",m.beginPath(),m.arc(128,128,120,0,7),m.fill(),m.fillStyle="#2b2e33",m.font="900 130px Arial",m.textAlign="center",m.textBaseline="middle",m.fillText("JK",128,136)}),transparent:!0,roughness:.8}));return v.position.set(-200,e,170),n.add(v),n.userData={radar:f,center:new P(0,e,0),hits:[[-460,210],[-280,210],[160,210],[320,200],[40,230],[-200,170],[500,0],[-700,0]]},n}var ed={};function yM(n){if(ed[n])return ed[n];let e=[],t=[],i=[];if(n==="sam"){e.push(rn(new xt(5,2,11),0,2.2,0)),e.push(rn(new xt(4.6,2.6,3),0,3.6,-4)),t.push(rn(new xt(4.7,1.2,2.6),0,4.3,-5.4));for(let r=0;r<6;r++)t.push(rn(new jt(.75,.75,2.2,10),(r%2-.5)*2.4,1.2,(Math.floor(r/2)-1)*3.4,0,0,Math.PI/2));for(let r=0;r<4;r++)i.push(rn(new jt(.5,.5,7,10),(r%2-.5)*1.2,5.4+Math.floor(r/2)*1.1,1.5,-.75));i.push(rn(new xt(3.4,2.2,.3),0,6.5,-1.5,.3))}else e.push(rn(new zn(5,1.4,6,18),0,.8,0,Math.PI/2)),e.push(rn(new jt(2.2,2.6,2,14),0,1.6,0)),t.push(rn(new xt(3,1.8,3),0,3.2,0)),[-1,1].forEach(r=>i.push(rn(new jt(.18,.18,6,8),r*.7,4.2,-3,-1.1)));let s=[new it({color:"#8a7a5a",roughness:.85}),new it({color:"#3a3b36",roughness:.7}),new it({color:"#5d6066",roughness:.4,metalness:.7})];return ed[n]=[Gc(e),Gc(t),Gc(i)].map((r,o)=>[r,s[o]])}function la(n){let e=new Ut;return yM(n).forEach(([t,i])=>{let s=new Ve(t,i);s.castShadow=!0,e.add(s)}),e.userData={flames:[],glows:[],msls:[],body:e,strobe:{visible:!1}},e}var Vc=null;function vM(){if(Vc)return Vc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Vc=new Wt(n),Vc}var Gr=class{constructor(e,t){this.max=e,this.n=0,this.i=0,this.density=1,this.hi=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxL=new Float32Array(e),this.grow=new Float32Array(e),this.s0=new Float32Array(e),this.a0=new Float32Array(e),this.drag=new Float32Array(e),this.rise=new Float32Array(e),this.fade=new Float32Array(e);let i=new Mt;i.setAttribute("position",new Ft(this.pos,3).setUsage(Hs)),i.setAttribute("color",new Ft(this.col,3).setUsage(Hs)),i.setAttribute("size",new Ft(this.size,1).setUsage(Hs)),i.setAttribute("alpha",new Ft(this.alpha,1).setUsage(Hs));let s=new mn({transparent:!0,depthWrite:!1,blending:t?qt:hs,uniforms:{map:{value:vM()},scale:{value:800},fogColor:{value:new Le},fogNear:{value:1},fogFar:{value:1}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; varying float vD; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(520., size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear, fogFar; varying float vA; varying vec3 vC; varying float vD;
        void main(){ if(vA<.004) discard; vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(fogNear,fogFar,vD); vec3 c=mix(vC,fogColor,${t?"0.":"f"}); gl_FragColor=vec4(c,t.a*vA*${t?"(1.-f)":"1."}); }`});this.points=new Ps(i,s),this.points.frustumCulled=!1,this.g=i,this.mat=s}emit(e,t,i,s={}){if(this.density<1&&!s.must&&Math.random()>this.density)return;let r=this.i;r+1>this.hi&&(this.hi=r+1),this.i=(this.i+1)%this.max,this.n<this.max&&this.n++,this.pos[r*3]=e,this.pos[r*3+1]=t,this.pos[r*3+2]=i;let o=s.spread||0;this.vel[r*3]=(s.vx||0)+(Math.random()-.5)*o,this.vel[r*3+1]=(s.vy||0)+(Math.random()-.5)*o,this.vel[r*3+2]=(s.vz||0)+(Math.random()-.5)*o;let a=s.color||[1,1,1];this.col[r*3]=a[0],this.col[r*3+1]=a[1],this.col[r*3+2]=a[2],this.size[r]=this.s0[r]=s.size||4,this.grow[r]=s.grow??1.5,this.a0[r]=s.alpha??.6,this.alpha[r]=this.a0[r],this.life[r]=this.maxL[r]=s.life||2,this.drag[r]=s.drag??.5,this.rise[r]=s.rise??0,this.fade[r]=s.fadeIn?1:0}update(e,t,i){let s=0;for(let a=0;a<this.hi;a++){if(this.life[a]<=0){this.alpha[a]=0;continue}s++,this.life[a]-=e;let l=1-this.life[a]/this.maxL[a],c=Math.exp(-this.drag[a]*e);this.vel[a*3]*=c,this.vel[a*3+1]=this.vel[a*3+1]*c+this.rise[a]*e,this.vel[a*3+2]*=c,this.pos[a*3]+=this.vel[a*3]*e,this.pos[a*3+1]+=this.vel[a*3+1]*e,this.pos[a*3+2]+=this.vel[a*3+2]*e,this.size[a]=this.s0[a]*Math.max(.05,1+this.grow[a]*(this.maxL[a]-this.life[a])),this.alpha[a]=this.a0[a]*(1-l)*(this.fade[a]?Math.min(1,l*8):1)}let r=this.g.attributes,o=this.hi;this.g.setDrawRange(0,o);for(let a of[r.position,r.size,r.alpha,r.color])a.clearUpdateRanges(),a.addUpdateRange(0,o*a.itemSize),a.needsUpdate=!0;s||(this.hi=0,this.i=0),t&&(this.mat.uniforms.fogColor.value.copy(t.color),this.mat.uniforms.fogNear.value=t.near,this.mat.uniforms.fogFar.value=t.far),this.mat.uniforms.scale.value=i*.5}clear(){this.life.fill(0),this.alpha.fill(0)}},Wc=class{constructor(e=400){this.max=e;let t=new xt(.35,.35,9);this.mesh=new Oi(t,new Gt({color:"#ffd27a",transparent:!0,opacity:.95,blending:qt,depthWrite:!1}),e),this.mesh.instanceMatrix.setUsage(Hs),this.mesh.frustumCulled=!1,this.list=[],this.o=new Ot,this.mesh.setColorAt(0,new Le("#fff")),this.mesh.count=0}add(e,t,i,s,r){this.list.length>=this.max&&this.list.shift(),this.list.push({p:e.clone(),v:t.clone(),life:1.6,owner:i,dmg:s,color:r})}draw(){let e=this.o,t=0;for(let i of this.list)e.position.copy(i.p),e.lookAt(i.p.x+i.v.x,i.p.y+i.v.y,i.p.z+i.v.z),e.updateMatrix(),this.mesh.setMatrixAt(t,e.matrix),this.mesh.setColorAt(t,i.color),t++;this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},We=(()=>{let n,e,t,i,s=!0,r;try{s=localStorage.getItem("jkstrike-sound")!=="0"}catch{}function o(){if(n){n.state==="suspended"&&n.resume();return}let d=window.AudioContext||window.webkitAudioContext;if(!d)return;n=new d,e=n.createGain(),e.gain.value=s?.6:0;let u=n.createDynamicsCompressor();e.connect(u),u.connect(n.destination),r=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let f=r.getChannelData(0);for(let M=0;M<f.length;M++)f[M]=Math.random()*2-1;let p=(M,A,T)=>{let x=n.createBufferSource();x.buffer=r,x.loop=!0;let b=n.createBiquadFilter();b.type=M,b.frequency.value=A,b.Q.value=T;let L=n.createGain();return L.gain.value=0,x.connect(b),b.connect(L),L.connect(e),x.start(),{g:L,b}};t=p("lowpass",400,.8),i=p("bandpass",900,.5);let v=n.createOscillator();v.type="sawtooth",v.frequency.value=55;let m=n.createGain();m.gain.value=0;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=220,v.connect(g),g.connect(m),m.connect(e),v.start(),t.o=v,t.og=m;let y=n.createOscillator();y.type="sine",y.frequency.value=1200;let S=n.createGain();S.gain.value=0,y.connect(S),S.connect(e),y.start(),t.whine=y,t.wg=S}let a=()=>n.currentTime;function l(d,u,f,p){if(!t)return;let v=p?.55:1;t.g.gain.setTargetAtTime((.12+d*.2+(u?.25:0))*v,a(),.1),t.b.frequency.setTargetAtTime(250+d*600+(u?900:0),a(),.15),t.og.gain.setTargetAtTime((.05+d*.05)*v,a(),.1),t.o.frequency.setTargetAtTime(45+d*40,a(),.2),t.wg.gain.setTargetAtTime(.012+d*.02,a(),.2),t.whine.frequency.setTargetAtTime(900+d*900,a(),.3),i.g.gain.setTargetAtTime(Math.min(.25,f*f*1e-6)*(p?.5:1),a(),.2),i.b.frequency.setTargetAtTime(600+f*2,a(),.2)}function c(d,u,f,p,v="bandpass"){if(!n||!s)return;let m=n.createBufferSource();m.buffer=r;let g=n.createBiquadFilter();g.type=v,g.frequency.value=d,g.Q.value=u;let y=n.createGain();y.gain.setValueAtTime(p,a()),y.gain.exponentialRampToValueAtTime(.001,a()+f),m.connect(g),g.connect(y),y.connect(e),m.start(),m.stop(a()+f+.05)}function h(d,u,f="sine",p=.15,v){if(!n||!s)return;let m=n.createOscillator(),g=n.createGain();m.type=f,m.frequency.setValueAtTime(d,a()),v&&m.frequency.exponentialRampToValueAtTime(v,a()+u),g.gain.setValueAtTime(p,a()),g.gain.exponentialRampToValueAtTime(.001,a()+u),m.connect(g),g.connect(e),m.start(),m.stop(a()+u+.05)}return{init:o,engine:l,get on(){return s},toggle(){s=!s;try{localStorage.setItem("jkstrike-sound",s?"1":"0")}catch{}return e&&e.gain.setTargetAtTime(s?.6:0,a(),.05),s},silence(){t&&(t.g.gain.setTargetAtTime(0,a(),.05),t.og.gain.setTargetAtTime(0,a(),.05),t.wg.gain.setTargetAtTime(0,a(),.05),i.g.gain.setTargetAtTime(0,a(),.05))},gun(){c(1400,.7,.07,.22),c(180,1,.06,.25,"lowpass")},hit(){h(2200,.05,"square",.06)},launch(){c(700,.4,1.1,.45),h(180,.9,"sawtooth",.08,60)},boom(d=0){let u=Math.max(.08,1-d/3e3);c(120,.6,1.6,u),c(700,.5,.5,u*.5),h(55,1.2,"sine",u*.6,30)},flare(){c(2400,1.5,.25,.18),h(1600,.2,"square",.04,900)},lockTick(){h(1e3,.05,"square",.05)},locked(d){d&&h(1500,.12,"square",.06)},warn(){h(880,.12,"square",.1),setTimeout(()=>h(660,.12,"square",.1),140)},pullup(){h(520,.2,"triangle",.1)},win(){[523,659,784,1046].forEach((d,u)=>setTimeout(()=>h(d,.3,"triangle",.15),u*120))},click(){h(1200,.04,"square",.04)},damage(){c(400,.8,.25,.4),h(120,.2,"square",.1,60)}}})();var MM="https://nvfxdzxdlizznrknmunl.supabase.co",SM="sb_publishable_exrSq3la18u98vwYxoddFQ_YDQoYBnC",bM=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]},{urls:"stun:stun.cloudflare.com:3478"}],sm=8,sd=()=>String(1e3+Math.floor(Math.random()*9e3)),td=class{constructor(){this.h={}}on(e,t){(this.h[e]=this.h[e]||[]).push(t)}emit(e,...t){(this.h[e]||[]).forEach(i=>{try{i(...t)}catch(s){console.error(s)}})}},nd=class{constructor(){if(!window.supabase||!window.supabase.createClient)throw new Error("Could not load the multiplayer library. Check your connection and reload.");this.sb=window.supabase.createClient(MM,SM,{auth:{persistSession:!1,autoRefreshToken:!1},realtime:{params:{eventsPerSecond:20}}})}async open(e,t,i,s){let r=this.sb.channel("jkstrike-"+e,{config:{broadcast:{self:!1,ack:!1},presence:{key:t}}});this.ch=r;let o,a=new Promise(c=>o=c);r.on("broadcast",{event:"m"},({payload:c})=>c&&i(c)),r.on("presence",{event:"sync"},()=>{let c=r.presenceState(),h=[];for(let d in c){let u=c[d]&&c[d][0];u&&u.id&&h.push(u)}s(h),o()});let l=await new Promise(c=>{let h=setTimeout(()=>c("TIMED_OUT"),9e3);r.subscribe(d=>{["SUBSCRIBED","CHANNEL_ERROR","TIMED_OUT","CLOSED"].includes(d)&&(clearTimeout(h),c(d))})});return l!=="SUBSCRIBED"?(await this.close(),l):(await Promise.race([a,new Promise(c=>setTimeout(c,2500))]),"ok")}track(e){return this.ch?this.ch.track(e).catch(()=>{}):null}send(e){this.ch&&this.ch.send({type:"broadcast",event:"m",payload:e}).catch(()=>{})}async close(){let e=this.ch;if(this.ch=null,e){try{await e.untrack()}catch{}try{await this.sb.removeChannel(e)}catch{}}}},id=class{async open(e,t,i,s){return this.bc=new BroadcastChannel("jkstrike-"+e),this.peers=new Map,this.onPresence=s,this.bc.onmessage=r=>{let o=r.data;o.hello&&this.meta?this.bc.postMessage({pres:this.meta}):o.pres?(this.peers.set(o.pres.id,{m:o.pres,t:Date.now()}),this._re()):o.bye?(this.peers.delete(o.bye),this._re()):i(o)},this.bc.postMessage({hello:1}),await new Promise(r=>setTimeout(r,500)),this._re(),this.beat=setInterval(()=>{this.meta&&this.bc.postMessage({pres:this.meta});let r=Date.now();for(let[o,a]of this.peers)r-a.t>3500&&this.peers.delete(o);this._re()},1e3),"ok"}_re(){this.onPresence([...this.meta?[this.meta]:[],...[...this.peers.values()].map(e=>e.m)])}track(e){this.meta={...e},this.bc.postMessage({pres:this.meta}),this._re()}send(e){this.bc&&this.bc.postMessage(e)}async close(){this.bc&&(clearInterval(this.beat),this.meta&&this.bc.postMessage({bye:this.meta.id}),this.bc.close(),this.bc=null,this.meta=null)}},Xc=class extends td{constructor(e){super(),this.local=e,this.sig=e?new id:new nd,this.peers=new Map,this.list=[],this.meta=null,this.code=null,this.fbT={},this.timer=setInterval(()=>this._maintain(),2e3)}get id(){return this.myId}async join(e,t,i){await this.leave(),this.code=e,this.myId=t.id;let s=await this.sig.open(e,t.id,o=>this._sig(o),o=>this._presence(o));if(s!=="ok")return{ok:!1,err:"Could not reach the game server ("+String(s).toLowerCase().replace("_"," ")+")."};let r=this.list.filter(o=>o.id!==t.id);return i==="create"&&r.length?(await this.leave(),{ok:!1,err:"taken"}):i==="join"&&!r.length?(await this.leave(),{ok:!1,err:"Room not found. Check the code."}):r.length>=sm?(await this.leave(),{ok:!1,err:`Room is full (${sm} pilots).`}):(this.meta={...t,joined:Date.now()},await this.sig.track(this.meta),{ok:!0})}_presence(e){let t=e.slice().sort((r,o)=>r.joined-o.joined||(r.id<o.id?-1:1)),i=new Set(this.list.map(r=>r.id));this.list=t;let s=new Set(t.map(r=>r.id));for(let r of i)s.has(r)||(this._drop(r),this.emit("left",r));for(let r of s)!i.has(r)&&r!==this.myId&&this.emit("joined",r);this._maintain(),this.emit("presence",t)}players(){return this.list}hostId(){return this.list.length?this.list[0].id:this.myId}isHost(){return this.hostId()===this.myId}setMeta(e){this.meta&&(Object.assign(this.meta,e),this.sig.track(this.meta))}async leave(){for(let e of[...this.peers.keys()])this._drop(e);await this.sig.close(),this.meta=null,this.list=[],this.code=null}sendTo(e,t,i=!0){if(e===this.myId){this.emit(t.t,t,this.myId);return}let s=this.peers.get(e),r=s&&(i?s.r:s.u);if(r&&r.readyState==="open")try{r.send(JSON.stringify(t));return}catch{}if(!i){let o=e+t.t,a=performance.now();if(a-(this.fbT[o]||0)<400)return;this.fbT[o]=a}this.sig.send({t:"relay",to:e,from:this.myId,m:t})}sendAll(e,t=!0){for(let i of this.list)i.id!==this.myId&&this.sendTo(i.id,e,t)}linked(e){let t=this.peers.get(e);return!!(t&&t.r&&t.r.readyState==="open")}_recv(e,t){t&&t.t&&this.emit(t.t,t,e)}_sig(e){if(this.myId){if(e.t==="relay"){e.to===this.myId&&this._recv(e.from,e.m);return}e.t==="rtc"&&e.to===this.myId&&this._rtc(e).catch(t=>console.warn("rtc",t))}}_maintain(){if(!this.meta)return;let e=this.list.map(t=>t.id);for(let t of e)t!==this.myId&&!this.peers.has(t)&&this.myId<t&&this._connect(t);for(let[t,i]of[...this.peers])(!e.includes(t)||i.pc.connectionState!=="connected"&&Date.now()-i.t0>2e4)&&this._drop(t)}_make(e){let t=new RTCPeerConnection({iceServers:bM}),i={id:e,pc:t,t0:Date.now(),cand:[]};i.r=t.createDataChannel("r",{negotiated:!0,id:0,ordered:!0}),i.u=t.createDataChannel("u",{negotiated:!0,id:1,ordered:!1,maxRetransmits:0});for(let s of[i.r,i.u])s.onmessage=r=>{try{this._recv(e,JSON.parse(r.data))}catch{}};return i.r.onopen=()=>this.emit("link",e),t.onicecandidate=s=>{s.candidate&&this.sig.send({t:"rtc",to:e,from:this.myId,k:"ice",d:s.candidate.toJSON()})},t.onconnectionstatechange=()=>{t.connectionState==="failed"&&this._drop(e)},this.peers.set(e,i),i}async _connect(e){let t=this._make(e);await t.pc.setLocalDescription(await t.pc.createOffer()),this.sig.send({t:"rtc",to:e,from:this.myId,k:"offer",d:t.pc.localDescription.toJSON()})}async _rtc(e){let t=this.peers.get(e.from);if(e.k==="offer"){t&&this._drop(e.from),t=this._make(e.from),await t.pc.setRemoteDescription(e.d),await t.pc.setLocalDescription(await t.pc.createAnswer()),this.sig.send({t:"rtc",to:e.from,from:this.myId,k:"answer",d:t.pc.localDescription.toJSON()});for(let i of t.cand)await t.pc.addIceCandidate(i).catch(()=>{});t.cand=[]}else if(e.k==="answer"&&t){await t.pc.setRemoteDescription(e.d);for(let i of t.cand)await t.pc.addIceCandidate(i).catch(()=>{});t.cand=[]}else e.k==="ice"&&t&&(t.pc.remoteDescription?await t.pc.addIceCandidate(e.d).catch(()=>{}):t.cand.push(e.d))}_drop(e){let t=this.peers.get(e);if(t){try{t.pc.close()}catch{}this.peers.delete(e)}}};var re=n=>document.querySelector(n),vs=n=>[...document.querySelectorAll(n)],qi={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},St=(n,e,t)=>Math.max(e,Math.min(t,n)),_s=(n,e,t)=>n+(e-n)*t,Ae=(n,e)=>n+Math.random()*(e-n),EM=n=>n[Math.floor(Math.random()*n.length)],bt=()=>new P,Wn=new P(0,1,0),Bt=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Bt&&document.body.classList.add("touchui");var pa=re("#gl"),Tn=new Pc({canvas:pa,antialias:!0,powerPreference:"high-performance"}),pm=qi.get("jkstrike-set",{}),od={auto:{max:Bt?1.25:1.5,shadow:Bt?1024:2048,density:Bt?.7:1},high:{max:2,shadow:2048,density:1},medium:{max:1.15,shadow:1024,density:.8},low:{max:.8,shadow:0,density:.55}},ya=od[pm.quality]||od.auto,bi=Math.min(devicePixelRatio||1,ya.max);Tn.setPixelRatio(bi);Tn.toneMapping=Xo;Tn.toneMappingExposure=1.05;Tn.outputColorSpace=Ct;Tn.shadowMap.enabled=ya.shadow>0;Tn.shadowMap.type=Fs;var qe=new Is,jc=new xo("#dcc8a6",1800,11e3);qe.fog=jc;qe.background=new Le("#dcc8a6");qe.environment=new Fr(Tn).fromScene(new Oc,.04).texture;qe.environmentIntensity=.55;var et=new Sn(70,1,.1,3e4);qe.add(et);var mm=new P(-.55,.62,-.45).normalize(),Yi=new Wo("#fff0d8",3.1);Yi.castShadow=!0;Yi.shadow.mapSize.set(ya.shadow||512,ya.shadow||512);Object.assign(Yi.shadow.camera,{left:-120,right:120,top:120,bottom:-120,near:10,far:2400});Yi.shadow.bias=-5e-4;Yi.shadow.normalBias=.5;qe.add(Yi,Yi.target,new zo("#bcd6f2","#c79a68",1));var xn=new Hc;qe.add(xn.mesh(Tn));qe.add(xn.rocks());var Ea=im();qe.add(Ea);var gm=Qp(mm);qe.add(gm);var xm=em();qe.add(xm);var dn=new Gr(2200,!1),En=new Gr(1500,!0),Zr=new Gr(2400,!1);qe.add(dn.points,En.points,Zr.points);[dn,En,Zr].forEach(n=>n.density=ya.density);var va=Array.from({length:3},()=>{let n=new Us("#ffb060",0,900,2);return qe.add(n),{l:n,t:0}}),_m=0,fi=new Wc(600);qe.add(fi.mesh);var Re={jet:"raptor",paint:"gray",diff:"normal",view:"third",control:Bt?"stick":"aim",sens:"mid",invert:!1,assist:!0,quality:"auto",...pm};ui[Re.jet]||(Re.jet="raptor");Bt&&(Re.control="stick");var fa=()=>qi.set("jkstrike-set",Re),Zi={easy:{turn:.7,acc:.4,msl:28,dmg:.55,name:"Rookie"},normal:{turn:.92,acc:.58,msl:19,dmg:.9,name:"Pilot"},ace:{turn:1.15,acc:.9,msl:12,dmg:1.3,name:"Ace"}},Vr={fighter:{hp:100,pts:100,label:""},ace:{hp:190,pts:250,label:"ACE"},bomber:{hp:420,pts:300,label:"BOMBER"},boss:{hp:2200,pts:1500,label:"GUNSHIP"},sam:{hp:160,pts:150,label:"SAM"},aa:{hp:90,pts:100,label:"AAA"},pilot:{hp:100,pts:0,label:""}},TM=[["gun","\u{1F525}","Heavy Rounds","+30% gun damage"],["lock","\u{1F3AF}","Rapid Lock","Missile lock 45% faster"],["pylon","\u{1F680}","Extra Pylons","+3 missiles and faster reloads"],["hull","\u{1F6E1}","Reinforced Hull","+35 max hull, fully repaired"],["flare","\u2728","Flare Pods","+6 flares, recharge twice as fast"],["engine","\u26A1","Hot Engines","+12% top speed"],["agile","\u{1F300}","Tight Turns","+15% turn rate"],["cool","\u2744\uFE0F","Cooled Barrels","Gun heats 40% slower"],["seeker","\u{1F9E0}","Smart Seekers","Missiles turn 35% harder"],["regen","\u{1F49A}","Field Repair","Hull regenerates 3\xD7 faster"],["scav","\u{1F985}","Scavenger","Each kill repairs 8 hull"],["salvo","\u{1F386}","Salvo","Fire two missiles at once"]],G={mode:"menu"},_=null,mt=[],Yt=[],Xn=[],Ei=[],ei=[],ym=new Le("#ffd27a"),dd=new Le("#ff6a4a"),vm=new Le("#ff9c3a"),ih=new URLSearchParams(location.search),wt=Math.random().toString(36).slice(2,10),k={on:!1,net:null,mode:"duel",target:5,host:!1,order:[],names:{},metas:{},mates:new Map,pilots:new Map,rep:new Map,score:{},mid:0,eidN:0,sendT:0,esT:0,sq:0,rsq:0,dmgOut:{},menu:!1,lobby:{mode:"duel",target:5,diff:"normal",playing:!1}},qn=(n,e=!0)=>{k.on&&k.net&&k.net.sendAll(n,e)},qr={},Un={x:0,y:0,l:!1,moved:!1},Ti={x:0,y:0,gun:!1,ab:!1,brake:!1},gn={yaw:0,pitch:0,dir:new P(0,0,-1),locked:!1},rm={low:.0014,mid:.0022,high:.0032};addEventListener("keydown",n=>{if(!n.target.matches("input")){if(qr[n.code]=!0,We.init(),G.mode==="perk"&&/Digit[123]/.test(n.code)){gd(+n.code.slice(5)-1);return}if(G.mode==="play"||G.mode==="paused"){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.repeat)return;if(n.code==="Escape"||n.code==="KeyP"){k.on?(n.code==="KeyP"||k.menu||!gn.locked)&&Zs():(G.mode==="play"&&!gn.locked||G.mode==="paused")&&Zs();return}if(G.mode!=="play")return;n.code==="Space"&&ch(),(n.code==="KeyF"||n.code==="KeyX")&&md(),(n.code==="KeyV"||n.code==="KeyC")&&dh(),n.code==="KeyT"&&zM(),n.code==="KeyM"&&Im()}}});addEventListener("keyup",n=>{qr[n.code]=!1});addEventListener("blur",()=>{for(let n in qr)qr[n]=!1;Un.l=!1});addEventListener("mousemove",n=>{if(Un.x=(n.clientX/innerWidth-.5)*2,Un.y=(n.clientY/innerHeight-.5)*2,Un.moved=!0,G.mode==="play"&&Re.control==="aim"&&(gn.locked||document.pointerLockElement)){let e=rm[Re.sens]||rm.mid;gn.yaw-=n.movementX*e,gn.pitch=St(gn.pitch-n.movementY*e*(Re.invert?-1:1),-1.45,1.45)}});pa.addEventListener("mousedown",n=>{if(We.init(),G.mode==="play"){if(Re.control==="aim"&&!document.pointerLockElement){Yr();return}n.button===0&&(Un.l=!0),n.button===2&&ch()}});addEventListener("mouseup",n=>{n.button===0&&(Un.l=!1)});addEventListener("contextmenu",n=>{G.mode==="play"&&n.preventDefault()});function Yr(){try{let n=pa.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>{try{pa.requestPointerLock()}catch{}})}catch{try{pa.requestPointerLock()}catch{}}}document.addEventListener("pointerlockerror",()=>{G.mode==="play"&&Re.control==="aim"&&re("#clickfly").classList.add("on")});document.addEventListener("pointerlockchange",()=>{gn.locked=!!document.pointerLockElement,re("#clickfly").classList.toggle("on",G.mode==="play"&&Re.control==="aim"&&!gn.locked),!gn.locked&&G.mode==="play"&&Re.control==="aim"&&!(k.on&&k.menu)&&Zs()});var Wi=(...n)=>n.some(e=>qr[e]);function wM(){let n=Re.invert?-1:1,e=((Wi("KeyS","ArrowDown")?1:0)-(Wi("KeyW","ArrowUp")?1:0))*n,t=(Wi("KeyD","ArrowRight")?1:0)-(Wi("KeyA","ArrowLeft")?1:0),i=(Wi("KeyQ")?1:0)-(Wi("KeyE")?1:0),s=e,r=t,o=i,a=!!(e||t||i);if(Bt||Re.control==="stick"){if(Bt)s+=-Ti.y*n,r+=Ti.x,a=!0;else if(Un.moved){let l=c=>Math.abs(c)<.06?0:(c-Math.sign(c)*.06)/.94;s+=St(-l(Un.y)*1.9,-1,1)*n,r+=St(l(Un.x)*1.9,-1,1),a=!0}}return{pitch:St(s,-1,1),roll:St(r,-1,1),yaw:o,manual:a,gun:Un.l||Wi("KeyJ","Enter")||Ti.gun,ab:Wi("ShiftLeft","ShiftRight")||Ti.ab,brake:Wi("KeyB")||Ti.brake}}{let n=re("#stick"),e=re("#knob"),t=null,i=0,s=0;n.addEventListener("pointerdown",a=>{t=a.pointerId;let l=n.getBoundingClientRect();i=l.left+l.width/2,s=l.top+l.height/2,n.setPointerCapture(t),r(a),We.init()});let r=a=>{if(a.pointerId!==t)return;let l=60,c=(a.clientX-i)/l,h=(a.clientY-s)/l,d=Math.hypot(c,h);d>1&&(c/=d,h/=d),Ti.x=c,Ti.y=h,e.style.transform=`translate(${c*l}px,${h*l}px)`};n.addEventListener("pointermove",r);let o=a=>{a.pointerId===t&&(t=null,Ti.x=Ti.y=0,e.style.transform="")};n.addEventListener("pointerup",o),n.addEventListener("pointercancel",o),vs("#touch [data-b]").forEach(a=>{let l=a.dataset.b,c=h=>d=>{d.preventDefault(),a.classList.toggle("down",h),l==="gun"||l==="ab"||l==="brake"?Ti[l]=h:h&&(We.init(),l==="msl"&&ch(),l==="flr"&&md(),l==="cam"&&dh())};a.addEventListener("pointerdown",c(!0)),a.addEventListener("pointerup",c(!1)),a.addEventListener("pointercancel",c(!1)),a.addEventListener("pointerleave",c(!1))}),re("#tPause").onclick=()=>Zs(),re("#clickfly").onclick=()=>{Yr()}}var Dn=new Ut;et.add(Dn);Dn.visible=!1;function AM(){Dn.clear();let n=jp(Re.jet,Re.paint);Dn.add(n),Dn.userData=n.userData}var un=null,It=(n,e=bt())=>e.set(0,0,-1).applyQuaternion(n),Mm=(n,e=bt())=>e.set(0,1,0).applyQuaternion(n),ys=(n,e=bt())=>e.set(1,0,0).applyQuaternion(n);function RM(n,e){let t=new mn({transparent:!0,depthWrite:!1,blending:qt,side:yi,uniforms:{uT:{value:0},uHit:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uT; uniform float uHit; varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.6); float hex = smoothstep(.9,1.,sin(vP.x*1.4+uT*3.)*sin(vP.y*1.4)*sin(vP.z*1.4-uT*2.)); float a = f*.75 + hex*.12 + uHit*.4; gl_FragColor = vec4(mix(vec3(.25,1.,.6), vec3(1.), uHit) * a, a); }"}),i=new Ve(new Qt(e.len*.62,40,24),t);return i.scale.set(1.15,.6,1),i.visible=!1,n.add(i),i}function CM(){_&&_.obj&&qe.remove(_.obj);let n=Vi(Re.jet,Re.paint);qe.add(n);let e=ui[Re.jet];return{obj:n,J:e,pos:new P(-2600,700,300),q:new Tt,vel:bt(),speed:240,thr:.65,hp:e.hp,maxHp:e.hp,msl:e.missiles,mslMax:e.missiles,mslT:0,mslCd:0,side:1,flares:12,flareMax:12,flareT:0,flareCd:0,heat:0,over:!1,gunCd:0,gunSide:1,rate:bt(),alive:!0,lock:{t:null,k:0,locked:!1,tick:0},ab:!1,hitFlash:0,warnT:0,pullT:0,shake:0,camQ:new Tt,deadT:0,lastHit:0,perks:[],pw:{},shieldMesh:RM(n,e),m:{gun:1,lock:1,reload:1,flare:1,speed:1,agile:1,heat:1,seeker:1,regen:1,scav:0,salvo:1}}}function Ma(){let n=It(_.q);gn.pitch=Math.asin(St(n.y,-1,1)),gn.yaw=Math.atan2(-n.x,-n.z)}function lh(){let n=Math.cos(gn.pitch);return gn.dir.set(-Math.sin(gn.yaw)*n,Math.sin(gn.pitch),-Math.cos(gn.yaw)*n)}function ca(n,e,t){let i=Zi[Re.diff],s=G.cycle,r=!["sam","aa"].includes(n),o=n==="bomber"?Vs(!1):n==="boss"?Vs(!0):r?Vi(n==="ace"?"raptor":EM(["viper","striker","viper"]),"red",!0):la(n);qe.add(o),o.userData.msls.forEach(h=>h.visible=!1);let a=new Tt;t&&a.setFromRotationMatrix(new lt().lookAt(e,t,Wn));let l=Vr[n].hp*(1+s*.3)*(Re.diff==="easy"?.8:1)*(k.on?1+.15*(k.order.length-1):1),c={kind:n,air:r,obj:o,pos:e.clone(),q:a,vel:bt(),speed:n==="boss"?150:n==="bomber"?175:250,hp:l,maxHp:l,state:n==="bomber"||n==="boss"?"run":"hunt",st:0,gunCd:Ae(1,3),burst:0,mslT:Ae(6,i.msl)*(n==="ace"?.6:1),cd:Ae(3,7),evadeDir:bt(),dead:!1,deadT:0,spin:Ae(-2,2),id:Math.random(),hitT:0,wp:bt(),gunT:[0,0,0],eid:++k.eidN};return o.position.copy(c.pos),o.quaternion.copy(a),mt.push(c),c}function ha(n,e,t,i,s){let r=Ae(0,Math.PI*2),o=Ae(e,t),a=new P(n.x+Math.cos(r)*o,0,n.z+Math.sin(r)*o);return a.x=St(a.x,-Kn+300,Kn-300),a.z=St(a.z,-Kn+300,Kn-300),a.y=Math.max(xn.height(a.x,a.z)+400,Ae(i,s)),a}function Sm(n){let e=Math.floor((n-1)/5),t=(n-1)%5;return[{name:"DOGFIGHT",obj:"Clear the skies of enemy fighters",fighter:2+e*2+(n>1?1:0)},{name:"INTERCEPT",obj:"Bombers are heading for the base. Stop them!",bomber:1+e,fighter:1+e},{name:"STRIKE",obj:"Destroy the SAM site. Watch for flak and missiles",sam:2+e,aa:2+e,fighter:e+1},{name:"ACE SQUADRON",obj:"Elite pilots inbound. They fly better than you think",ace:1+e,fighter:2+e},{name:"BOSS",obj:"A heavy gunship is attacking. Bring it down!",boss:1,fighter:2+e,ace:e}][t]}function IM(n){G.cycle=Math.floor((n-1)/5);let e=G.spec={...Sm(n)},t=It(_.q);if(t.y=0,t.normalize(),k.on){let r=k.order.length,o=1+.55*(r-1);for(let a of["fighter","ace","bomber","sam","aa"])e[a]&&(e[a]=Math.round(e[a]*o));e.boss&&r>=4&&(e.boss=2)}let i=k.on?ha(new P,2400,3e3,0,0):_.pos.clone().addScaledVector(t,3e3),s=k.on?new P(0,900,0):_.pos;for(let r=0;r<(e.fighter||0);r++)ca("fighter",ha(i,0,900,700,1700),s);for(let r=0;r<(e.ace||0);r++)ca("ace",ha(i,300,1200,900,1900),s);for(let r=0;r<(e.bomber||0);r++){let o=ha(new P,3900,4300,850,950);o.y=Math.max(o.y,850+r*60),ca("bomber",o,new P(0,o.y,0))}for(let r=0;r<(e.boss||0);r++){let o=ha(new P,3700,4e3,1150,1200);ca("boss",o,new P(0,o.y,0))}if(e.sam||e.aa){let r=Ae(0,Math.PI*2),o=new P(Math.cos(r)*2700,0,Math.sin(r)*2700);G.zone=o;let a=l=>{let c=o.clone().add(new P(Ae(-380,380),0,Ae(-380,380)));c.y=xn.height(c.x,c.z)+.5;let h=ca(l,c);return h.obj.rotation.y=Ae(0,6),h.q.copy(h.obj.quaternion),h};for(let l=0;l<(e.sam||0);l++)a("sam");for(let l=0;l<(e.aa||0);l++)a("aa")}else G.zone=null}var sh=new Tt,Js=new lt,fd=bt(),PM=bt(),LM=bt(),Sa=bt();function bm(n,e,t,i=2.5){let s=It(n.q,fd),r=PM.copy(e).addScaledVector(s,-e.dot(s)),o=LM.copy(Wn).addScaledVector(r,i).normalize();sh.setFromRotationMatrix(Js.lookAt(Sa,e,o)),n.q.rotateTowards(sh,t)}function om(n,e){if(n.net)return Um(n,e);let t=Zi[Re.diff],i=_.pos.clone().sub(n.pos),s=i.length(),r=G.cycle,o=St(t.acc+r*.08+(n.kind==="ace"?.2:0),0,1);if(n.hitT=Math.max(0,n.hitT-e),n.dead){if(!n.air){n.remove=!0;return}n.deadT+=e,n.q.multiply(new Tt().setFromEuler(new pn(-.5*e,0,n.spin*e))),n.speed=Math.min(320,n.speed+30*e),n.pos.addScaledVector(It(n.q),n.speed*e),n.pos.y-=(40+n.deadT*60)*e,Math.random()<.9&&(En.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:.6,color:[1,.55,.2],alpha:.9,spread:6,grow:1}),dn.emit(n.pos.x,n.pos.y,n.pos.z,{size:10,life:4,color:[.18,.16,.15],alpha:.7,spread:4,grow:1.8,rise:4})),(n.pos.y<xn.height(n.pos.x,n.pos.z)+5||n.deadT>6)&&(Xi(n.pos,n.kind==="boss"?3:n.kind==="bomber"?2:1.4),n.remove=!0);return}if(!n.air)return UM(n,e,i,s,o);if(n.kind==="bomber"||n.kind==="boss")return DM(n,e,i,s,o);let a=It(n.q),l,c=n.pos.clone().addScaledVector(a,600),h=Math.min(n.pos.y-xn.height(n.pos.x,n.pos.z),c.y-xn.height(c.x,c.z)),d=Math.hypot(n.pos.x,n.pos.z);n.st-=e,h<280?l=a.clone().setY(0).normalize().setY(1.2).normalize():d>Kn-300?l=new P(-n.pos.x,0,-n.pos.z).normalize().setY(.1).normalize():n.state==="evade"&&n.st>0?l=n.evadeDir:(n.state="hunt",l=_.pos.clone().addScaledVector(_.vel,St(s/1100,0,2)*o).sub(n.pos).normalize(),s<220&&a.dot(i)/s>.3&&(n.state="evade",n.st=2,n.evadeDir=new P(Ae(-1,1),Ae(.2,.6),Ae(-1,1)).normalize()),s>2400&&(l.y=St(l.y,-.3,.4))),_.lock.locked&&_.lock.t===n&&n.state!=="evade"&&Math.random()<e*(n.kind==="ace"?.7:.25)*(Re.diff==="easy"?.4:1)&&(n.state="evade",n.st=Ae(1.6,3),n.evadeDir=ys(n.q).multiplyScalar(Math.random()<.5?1:-1).addScaledVector(Wn,Ae(-.3,.4)).normalize()),bm(n,l,t.turn*(1+r*.08)*(n.kind==="ace"?1.25:1)*(n.state==="evade"?1.3:1)*e);let u=(s>1600?300:245)*(n.state==="evade"?1.15:1)*(n.kind==="ace"?1.08:1);n.speed=_s(n.speed,u,e*.4),It(n.q,a),n.vel.copy(a).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.6&&dn.emit(n.pos.x,n.pos.y,n.pos.z,{size:5,life:2.5,color:[.25,.24,.23],alpha:.45,spread:2,grow:1.4}),n.gunCd-=e;let f=a.angleTo(i);if(_.alive&&s<1150&&f<.05+(1-o)*.04&&n.gunCd<=0&&(n.burst=6+Math.floor(Math.random()*6),n.gunCd=Ae(1.4,2.8)/(1+r*.1)),n.burst>0&&(n.bt=(n.bt||0)-e)<=0){n.bt=.07,n.burst--,n.fT=G.t;let p=(1-o)*.05+.006,v=a.clone().add(new P(Ae(-p,p),Ae(-p,p),Ae(-p,p))).normalize();fi.add(n.pos.clone().addScaledVector(a,10),v.multiplyScalar(1050).add(n.vel),"e",4*t.dmg,dd),s<1500&&We.gun()}n.mslT-=e,_.alive&&n.mslT<=0&&s>600&&s<2800&&f<.45&&pd()<2+(Re.diff==="ace"?1:0)&&(n.mslT=Ae(t.msl*.8,t.msl*1.3)/(1+r*.1)*(n.kind==="ace"?.7:1),Ta(n,_,"e"))}var pd=()=>Yt.filter(n=>n.owner==="e").length;function DM(n,e,t,i,s){let r=Zi[Re.diff],o=n.kind==="boss",a=It(n.q),l=o?1150:880,c;n.st-=e,n.state==="run"?(c=new P(-n.pos.x,(l-n.pos.y)*.002,-n.pos.z).normalize(),Math.hypot(n.pos.x,n.pos.z)<380&&(NM(n),n.state="egress",n.wp.copy(n.pos).addScaledVector(a.clone().setY(0).normalize(),2600),n.wp.x=St(n.wp.x,-Kn+500,Kn-500),n.wp.z=St(n.wp.z,-Kn+500,Kn-500),n.st=16)):(c=new P(n.wp.x-n.pos.x,(l-n.pos.y)*.002,n.wp.z-n.pos.z).normalize(),(n.st<=0||Math.hypot(n.wp.x-n.pos.x,n.wp.z-n.pos.z)<400)&&(n.state="run")),bm(n,c,(o?.28:.34)*e,1.2),n.vel.copy(It(n.q,a)).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.8&&dn.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:3,color:[.22,.2,.2],alpha:.5,spread:4,grow:1.6}),_.alive&&i<(o?1300:1e3)&&n.obj.userData.guns.forEach((h,d)=>{if(n.gunT[d]-=e,n.gunT[d]>0||(n.gunT[d]=Ae(.09,.14)*(o?.8:1),Math.random()<.35))return;n.fT=G.t;let u=fd.set(...h).applyQuaternion(n.q).add(n.pos),f=_.pos.clone().addScaledVector(_.vel,i/1e3*s),p=(1-s)*.06+.015,v=f.sub(u).normalize().add(new P(Ae(-p,p),Ae(-p,p),Ae(-p,p))).normalize();fi.add(u.clone(),v.multiplyScalar(1e3).add(n.vel),"e",3*r.dmg,dd),i<900&&Math.random()<.3&&We.gun()}),o&&(n.mslT-=e,_.alive&&n.mslT<=0&&i<3200&&pd()<3&&(n.mslT=Ae(7,10),Ta(n,_,"e")))}function NM(n){let e=n.kind==="boss",t=e?28:17;G.baseHp=Math.max(0,G.baseHp-t),$t(e?"GUNSHIP HIT THE BASE!":"BASE HIT BY BOMBER!",!0),Rm(),Ea.userData.hits.slice().sort(()=>Math.random()-.5).slice(0,e?5:3).forEach(([i,s],r)=>ei.push({t:.3+r*.35,f:()=>Xi(new P(i,xn.height(i,s)+4,s),1.3)})),G.baseHp<=0&&ei.push({t:2.2,f:()=>Cm("base")})}function UM(n,e,t,i,s){let r=Zi[Re.diff];if(n.cd-=e,!!_.alive){if(n.kind==="sam"&&i<3300&&n.cd<=0&&pd()<3){n.cd=Ae(9,13)/(1+G.cycle*.12),n.q.setFromRotationMatrix(Js.lookAt(n.pos,_.pos,Wn)),n.speed=120;let o=Ta(n,_,"e",34);o.pos.y+=6,dn.emit(n.pos.x,n.pos.y+4,n.pos.z,{size:30,life:4,color:[.85,.8,.72],alpha:.6,spread:20,grow:1.5,must:!0})}if(n.kind==="aa"&&i<1800&&(n.cd<=0&&(n.cd=Ae(2.2,3.4),n.burst=10),n.burst>0&&(n.bt=(n.bt||0)-e)<=0)){n.bt=.09,n.burst--,n.fT=G.t;let o=n.pos.clone().setY(n.pos.y+5),a=_.pos.clone().addScaledVector(_.vel,i/900*s),l=(1-s)*.05+.02,c=a.sub(o).normalize().add(new P(Ae(-l,l),Ae(-l,l),Ae(-l,l))).normalize();fi.add(o,c.multiplyScalar(900),"e",3.5*r.dmg,vm),i<1200&&We.gun()}}}function Ta(n,e,t,i){let s=It(n.q),r=ys(n.q),o=aa();qe.add(o);let a=n.pos.clone().addScaledVector(r,(n.side=-(n.side||1))*(n.air===!1?1:3)).addScaledVector(Mm(n.q),-1.2);t==="e"&&e===_&&Ln("ghost")&&(e=null);let l={mesh:o,pos:a,dir:s.clone(),speed:n.speed,target:e,owner:t,life:t==="p"?8:9,armed:.25,dmg:i,id:wt+"."+ ++k.mid,by:t==="p"?wt:"e"};return Yt.push(l),(t==="p"||a.distanceTo(_.pos)<3e3)&&We.launch(),t==="e"&&!(e&&e.mate)&&$t("MISSILE INBOUND",!0),k.on&&qn({t:"msl",id:l.id,o:l.by,p:js(a),d:js(l.dir),sp:Math.round(l.speed),tid:rS(e),dmg:t==="p"?65:Math.round((i||42)*Zi[Re.diff].dmg),life:l.life}),l}function ch(){if(G.mode!=="play"||!_.alive)return;if(_.msl<=0){$t("NO MISSILES",!0);return}if(_.mslCd>0)return;let n=_.lock.locked?_.lock.t:null,e=Ln("barrage");for(let t=0;t<_.m.salvo+(e?1:0)&&_.msl>0;t++)e||_.msl--,Ta(_,n,"p"),G.shots++;_.mslCd=e?.14:.4,$i(),n||$t("NO LOCK \u2014 DUMBFIRE")}function md(){if(G.mode!=="play"||!_.alive||_.flares<=0||_.flareCd>0)return;_.flares--,_.flareCd=1.2,We.flare();let n=It(_.q),e=ys(_.q),t=Xn.length;for(let i=0;i<6;i++)Xn.push({pos:_.pos.clone(),vel:_.vel.clone().multiplyScalar(.6).addScaledVector(e,(i%2?1:-1)*Ae(30,70)).addScaledVector(Wn,Ae(-40,10)).addScaledVector(n,-40),life:3.5});Nm(_,t),k.on&&qn({t:"flr",p:js(_.pos),v:Xn.slice(t).map(i=>js(i.vel))})}function FM(n){let e=ys(n.q);for(let t=0;t<4;t++)Xn.push({pos:n.pos.clone(),vel:n.vel.clone().multiplyScalar(.5).addScaledVector(e,(t%2?1:-1)*50).addScaledVector(Wn,-20),life:3});return Xn[Xn.length-1]}function Xi(n,e=1,t){for(let r=0;r<28*e;r++)En.emit(n.x,n.y,n.z,{size:Ae(12,26)*e,life:Ae(.5,1.1),color:[1,Ae(.45,.75),Ae(.15,.3)],alpha:1,spread:120*e,drag:3,grow:1.2});for(let r=0;r<6;r++)En.emit(n.x,n.y,n.z,{size:50*e,life:.25,color:[1,.9,.7],alpha:1,spread:10,grow:3,must:!0});for(let r=0;r<26*e;r++)dn.emit(n.x,n.y,n.z,{size:Ae(14,28)*e,life:Ae(3,6),color:[.2,.18,.17],alpha:.65,spread:70*e,drag:1.5,grow:1.8,rise:6});for(let r=0;r<14*e;r++){let o=new P(Ae(-1,1),Ae(-.2,1),Ae(-1,1)).normalize().multiplyScalar(Ae(80,200));En.emit(n.x,n.y,n.z,{size:4,life:Ae(1,2),color:[1,.7,.3],alpha:1,vx:o.x,vy:o.y,vz:o.z,drag:.4,grow:-.2})}let i=_?n.distanceTo(_.pos):1e3;t||We.boom(i),_&&i<600&&(_.shake=Math.max(_.shake,(1-i/600)*1.2));let s=va[_m++%va.length];s.l.position.copy(n),s.l.intensity=4e5*e,s.t=.6}function rh(n,e){if(!(!_.alive||G.mode!=="play")){if(Ln("shield")){_.shieldHit=.35;return}_.hp-=n,_.lastHit=G.t,e&&(_.lastBy=e),_.hitFlash=Math.min(1,_.hitFlash+n/30),_.shake=Math.max(_.shake,.5),We.damage(),_.hp<=0&&Em()}}function $r(n,e,t,i=wt){if(n.dead)return;if(n.net){n.hitT=.15,t||(G.hits++,We.hit(),ma=.15),n.pilot?k.net.sendTo(n.pid,{t:"hit",n:e}):k.net.sendTo(k.net.hostId(),{t:"eh",id:n.eid,n:e,m:t?1:0});return}if(n.hp-=e,n.hitT=.15,!t&&i===wt&&(G.hits++,We.hit(),ma=.15),n.hp>0)return;let s=i===wt;if(n.dead=!0,n.spin=Ae(-3,3),Xi(n.pos,n.kind==="boss"?2.4:n.kind==="bomber"?1.4:n.air?.8:1.2),!n.air)for(let o=0;o<20;o++)dn.emit(n.pos.x,n.pos.y+5,n.pos.z,{size:Ae(20,40),life:Ae(6,10),color:[.12,.11,.1],alpha:.6,spread:20,grow:1.5,rise:12,must:!0});let r=Vr[n.kind].label||"BANDIT";if(s){G.comboT>0?G.combo++:G.combo=1,G.comboT=6;let o=Vr[n.kind].pts*G.combo;G.score+=o,G.kills++,G.multi=G.t-G.lastKill<4?G.multi+1:1,G.lastKill=G.t,$t(`${G.multi>=2?["","","DOUBLE KILL! ","TRIPLE KILL! ","MULTI KILL! "][Math.min(4,G.multi)]:""}${r} DOWN  +${o}${G.combo>1?"  \xD7"+G.combo:""}`),_.m.scav&&(_.hp=Math.min(_.maxHp,_.hp+8)),!k.on&&(n.air&&G.slowCd<=0||n.kind==="boss"||G.multi>=2)&&(G.slow=n.kind==="boss"?1.4:.5,G.slowCd=7),k.on&&(ah(wt),qn({t:"ek",eid:n.eid,by:i,kind:n.kind,pts:o}))}else{let o=Vr[n.kind].pts;G.score+=o,ah(i),$t(`${Qn(i)}: ${r} DOWN +${o}`),qn({t:"ek",eid:n.eid,by:i,kind:n.kind,pts:o})}Yt.forEach(o=>{o.target===n&&(o.target=null)})}var ma=0;function $t(n,e){if(Ei[0]&&Ei[0].t===n){Ei[0].life=2.6;return}Ei.unshift({t:n,life:2.6,warn:e}),Ei=Ei.slice(0,4)}var ua=new Tt,OM=new pn;function BM(n){let e=wM(),t=_.J,i=t.agility*_.m.agile*(Ln("overdrive")?1.4:1),s=It(_.q),r=ys(_.q);Ln("overdrive")&&(e.ab=!0),_.I=e;let o=Math.asin(St(r.y,-1,1)),a=Math.abs(s.y)>.8,l=e.pitch,c=e.roll,h=e.yaw;if(Re.control==="aim"&&!Bt)if(e.manual)Ma();else{let T=lh(),x=T.clone().applyQuaternion(ua.copy(_.q).invert()),b=Math.acos(St(-x.z,-1,1));if(x.z>.2)l=1,c=Math.sign(x.x||1);else{l=St(x.y*5,-1,1);let L=St(x.x*5,-1,1),C=St(r.y*2.2,-1,1),D=St(b/.2,0,1);c=_s(C,L,D),h=-St(x.x*3,-1,1)*.6}}_.pullUp=!1;let d=_.pos.clone().addScaledVector(_.vel,2.2),u=xn.height(d.x,d.z),f=xn.height(_.pos.x,_.pos.z);(d.y<u+60||_.pos.y-f<70)&&_.vel.y<5&&(_.pullUp=!0,Re.assist&&(l=1,c=St(r.y*3,-1,1)));let p=new P(l*1.3*i,h*.5,c*2.7*i);Re.assist&&Re.control!=="aim"&&Math.abs(c)<.05&&!a&&Math.abs(o)<1.3&&(p.z+=o*1.4),_.input={...e,pitch:l,roll:c},_.rate.lerp(p,Math.min(1,n*7)),ua.setFromEuler(OM.set(_.rate.x*n,_.rate.y*n,-_.rate.z*n,"XYZ")),_.q.multiply(ua),a||(ua.setFromAxisAngle(Wn,-Math.sin(o)*.38*i*n*St(_.speed/250,.6,1.2)),_.q.premultiply(ua));let v=Math.hypot(_.pos.x,_.pos.z);if(_.out=v>Kn,v>Kn+400){let T=new P(-_.pos.x,0,-_.pos.z).normalize();_.q.rotateTowards(sh.setFromRotationMatrix(Js.lookAt(Sa,T,Wn)),.9*n),Ma()}_.pos.y>4500&&_.q.rotateTowards(sh.setFromRotationMatrix(Js.lookAt(Sa,s.clone().setY(-.4).normalize(),Wn)),.5*n),_.q.normalize(),It(_.q,s),_.ab=e.ab;let m=e.ab?1:e.brake?.15:.62;_.thr=_s(_.thr,m,n*1.6);let g=330*t.speed*_.m.speed*(e.ab?1.28:1)*(Ln("overdrive")?1.45:1),y=_s(150,g,_.thr)*(e.brake?.8:1);_.speed+=(y-_.speed)*.45*n-s.y*60*n,e.brake&&(_.speed-=40*n),_.speed=St(_.speed,95,Ln("overdrive")?780:540),_.vel.copy(s).multiplyScalar(_.speed),_.pos.addScaledVector(_.vel,n);let S=xn.height(_.pos.x,_.pos.z),M=_.pos.y-S;if(_.alt=M,M<4){_.pos.y=S+4,Em(!0);return}_.gunCd-=n,_.mslCd-=n,_.flareCd-=n,_.heat=Math.max(0,_.heat-n*.45),_.over&&_.heat<.3&&(_.over=!1);let A=Ln("minigun");if(e.gun&&!Ln("laser")&&!_.over&&_.gunCd<=0){_.gunCd=A?1/46:1/16,_.heat+=A?0:.032*_.m.heat,_.heat>=1&&(_.over=!0,$t("GUN OVERHEAT",!0)),_.gunSide*=-1;let T=.0035,x=s.clone().add(new P(Ae(-T,T),Ae(-T,T),Ae(-T,T))).normalize();_.lead&&s.angleTo(_.lead.clone().sub(_.pos))<.085&&x.lerp(_.lead.clone().sub(_.pos).normalize(),.9).normalize(),fi.add(_.pos.clone().addScaledVector(s,9).addScaledVector(ys(_.q),_.gunSide*1.2),x.multiplyScalar(1250).add(_.vel),"p",9*t.gun*_.m.gun*(A?1.7:1),ym),G.shots++,We.gun()}if(_.mslT+=n*_.m.reload,_.mslT>6&&_.msl<_.mslMax&&(_.mslT=0,_.msl++,$i()),_.flareT+=n*_.m.flare,_.flareT>9&&_.flares<_.flareMax&&(_.flareT=0,_.flares++),G.t-_.lastHit>5&&_.hp<_.maxHp&&(_.hp=Math.min(_.maxHp,_.hp+n*1.2*_.m.regen)),_.rate.length()>1.1&&_.speed>200){let T=t.span;[-1,1].forEach(x=>{let b=_.pos.clone().addScaledVector(ys(_.q),x*(T+1)).addScaledVector(s,t.len*.2);dn.emit(b.x,b.y,b.z,{size:1.6,life:.7,color:[1,1,1],alpha:.45,grow:1.2,drag:0})})}_.hp<_.maxHp*.4&&Math.random()<.7&&dn.emit(_.pos.x,_.pos.y,_.pos.z,{size:4,life:2,color:[.2,.2,.2],alpha:.5,spread:2,grow:1.6})}function Em(n){if(_.alive){if(_.alive=!1,_.hp=0,Xi(_.pos,2),_.obj.visible=!1,_.deadT=0,We.silence(),$t(n?"CRASHED":"SHOT DOWN",!0),G.reason=n?"crash":"shot",k.on){let e=_.lastBy&&G.t-_.lastHit<12?_.lastBy:null;qn({t:"die",by:e,p:js(_.pos)}),zm(wt,e)}G.view==="first"&&uh("third",!0)}}function kM(n){let e=_.lock,t=Re.control==="aim"&&!Bt?lh().clone():It(_.q),i=null,s=.5;if(e.t&&!e.t.dead&&!e.t.remove){let a=e.t.pos.clone().sub(_.pos),l=t.angleTo(a);if(l<.6&&a.length()<3600){i=e.t,s=-1;for(let c of mt){if(c===e.t||c.dead)continue;let h=c.pos.clone().sub(_.pos),d=t.angleTo(h);if(h.length()<3600&&d<.12&&d<l*.4){i=c;break}}}}if(!i)for(let a of mt){if(a.dead)continue;let l=a.pos.clone().sub(_.pos),c=l.length(),h=t.angleTo(l);c<3600&&h<s&&(s=h,i=a)}if(i!==e.t&&(e.t=i,e.k=0,e.locked=!1),e.t){let a=e.locked;e.k+=n*_.m.lock*(Ln("barrage")?8:1),e.locked=e.k>.7,e.tick-=n,e.tick<=0&&(e.tick=e.locked?.5:.16,e.locked?We.locked(!0):We.lockTick()),!a&&e.locked&&$t("LOCKED \u2014 FIRE! [SPACE]")}_.lead=null;let r=1e9,o=It(_.q);for(let a of mt){if(a.dead)continue;let l=a.pos.clone().sub(_.pos),c=l.length();c>1600||o.angleTo(l)>.5||c<r&&(r=c,_.lead=a.pos.clone().addScaledVector(a.vel.clone().sub(_.vel),c/1250),_.leadT=a)}}function zM(){let n=It(_.q),e=mt.filter(i=>!i.dead&&n.angleTo(i.pos.clone().sub(_.pos))<.6&&i.pos.distanceTo(_.pos)<3600);if(!e.length)return;let t=e.indexOf(_.lock.t);_.lock.t=e[(t+1)%e.length],_.lock.k=0,_.lock.locked=!1,We.click()}var qc=bt(),am=bt();function Qc(n,e,t){qc.subVectors(t,e);let i=qc.lengthSq(),s=i?am.subVectors(n,e).dot(qc)/i:0;return s=St(s,0,1),am.copy(e).addScaledVector(qc,s).distanceTo(n)}var ga=n=>n.kind==="boss"?34:n.kind==="bomber"?26:n.air?16:10,Vn={overdrive:{icon:"\u26A1",name:"OVERDRIVE",sub:"Mach-melting speed + turn rate",col:"#4fd8ff",dur:15},minigun:{icon:"\u{1F525}",name:"MINIGUN",sub:"3\xD7 fire rate, no overheat, heavy rounds",col:"#ff8a2b",dur:14},laser:{icon:"\u{1F506}",name:"DEATH RAY",sub:"Hold fire to melt anything in front",col:"#ff3df2",dur:10},barrage:{icon:"\u{1F680}",name:"ENDLESS MISSILES",sub:"Unlimited missiles, instant lock",col:"#ffcf4a",dur:14},swarm:{icon:"\u{1F41D}",name:"SWARM",sub:"14 seeker missiles at every bandit",col:"#ffe25a",dur:0},shield:{icon:"\u{1F6E1}",name:"FORCE FIELD",sub:"Invulnerable \u2014 ram them out of the sky",col:"#5cff9d",dur:14},warp:{icon:"\u23F3",name:"TIME WARP",sub:"Everything else slows to a crawl",col:"#b58cff",dur:9},ghost:{icon:"\u{1F47B}",name:"STEALTH",sub:"Missiles can't track you, bullets miss",col:"#cfd6e0",dur:12},emp:{icon:"\u2622",name:"SHOCKWAVE",sub:"Wipes out everything nearby",col:"#ff4f5e",dur:0},repair:{icon:"\u{1F49A}",name:"FULL REPAIR",sub:"Hull, missiles and flares refilled",col:"#3dff8f",dur:0}},ad=Object.keys(Vn),lm={overdrive:3,minigun:3,laser:2,barrage:3,swarm:3,shield:2,warp:2,ghost:2,emp:1,repair:2},wi=[],Ln=n=>_&&_.pw&&_.pw[n]>0,rd={};function HM(n){if(rd[n])return rd[n];let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=Vn[n];t.fillStyle="rgba(0,0,0,.35)",t.beginPath(),t.arc(64,64,54,0,7),t.fill(),t.strokeStyle=i.col,t.lineWidth=7,t.beginPath(),t.arc(64,64,54,0,7),t.stroke(),t.font='64px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(i.icon,64,70);let s=new Wt(e);return s.colorSpace=Ct,rd[n]=new Zn({map:s,depthTest:!0,fog:!1})}var Yc={ring:new zn(22,2.2,8,40),core:new Oo(9,1),halo:new Qt(30,20,14)};function GM(){let n=0;ad.forEach(t=>n+=lm[t]);let e=Math.random()*n;for(let t of ad)if(e-=lm[t],e<=0)return t;return"repair"}function VM(n,e){n=n||GM();let t=new Le(Vn[n].col),i=new Ut,s=(c,h)=>{let d=new Ve(c,new Gt({color:t,transparent:!0,opacity:h,blending:qt,depthWrite:!1,fog:!1}));return i.add(d),d},r=s(Yc.ring,.95),o=s(Yc.ring,.6);o.rotation.y=Math.PI/2;let a=s(Yc.core,.85);s(Yc.halo,.12);let l=new _i(HM(n));if(l.scale.set(34,34,1),l.position.y=0,i.add(l),!e){let c=It(_.q);e=_.pos.clone().addScaledVector(c,Ae(900,1700)).add(new P(Ae(-700,700),Ae(-150,250),Ae(-700,700)))}e.y=Math.max(e.y,xn.height(e.x,e.z)+160),i.position.copy(e),qe.add(i),wi.push({kind:n,obj:i,pos:i.position,life:40,r1:r,r2:o,core:a,t:Ae(0,6)})}function WM(n){let e=n.kind,t=Vn[e];We.locked(!0),setTimeout(()=>We.locked(!0),90);for(let i=0;i<40;i++)En.emit(n.pos.x,n.pos.y,n.pos.z,{size:Ae(6,14),life:Ae(.4,.9),color:new Le(t.col).toArray(),alpha:1,spread:160,drag:2,grow:1});if(Ks(`${t.icon} ${t.name}`,t.sub),$t(`${t.icon} ${t.name}!`),G.score+=50,t.dur&&(_.pw[e]=Math.max(_.pw[e]||0,0)+t.dur),e==="repair"&&(_.hp=_.maxHp,_.msl=_.mslMax,_.flares=_.flareMax,_.heat=0,_.over=!1,$i()),e==="swarm"){let i=mt.filter(s=>!s.dead).sort((s,r)=>s.pos.distanceTo(_.pos)-r.pos.distanceTo(_.pos));for(let s=0;s<14;s++){let r=i.length?i[s%i.length]:null;ei.push({t:s*.07,f:()=>{if(_.alive){let o=Ta(_,r&&!r.dead?r:null,"p");o.mesh.scale.setScalar(.7),o.swarm=!0}}})}}e==="emp"&&XM(),e==="barrage"&&(_.msl=_.mslMax,$i()),Tm()}var ba=[];function XM(){let n=_.pos.clone();We.boom(0),_.shake=1.4,G.slow=.8,G.slowCd=4;let e=new Ve(new zn(1,.06,8,64),new Gt({color:"#ffd0d6",transparent:!0,blending:qt,depthWrite:!1,fog:!1}));e.rotation.x=Math.PI/2,e.position.copy(n);let t=new Ve(new Qt(1,32,20),new Gt({color:"#ff6a7a",transparent:!0,opacity:.35,blending:qt,depthWrite:!1,side:In,fog:!1}));t.position.copy(n),qe.add(e,t),ba.push({ring:e,ball:t,t:0});let i=va[_m++%va.length];i.l.position.copy(n),i.l.intensity=2e6,i.t=1,mt.forEach(s=>{if(s.dead)return;let r=s.pos.distanceTo(n);r<2400&&ei.push({t:r/2400*.9,f:()=>$r(s,s.kind==="boss"?1100:99999,!0)})}),Yt.forEach(s=>{s.owner==="e"&&(s.life=0)})}var ps=null;function oh(n,e,t){if(!ps){ps=new Ut;let i=(s,r,o)=>{let a=new Ve(new jt(s,s,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,.5),new Gt({color:r,transparent:!0,opacity:o,blending:qt,depthWrite:!1,fog:!1}));ps.add(a)};i(.9,"#ffffff",1),i(2.4,"#ff3df2",.55),i(6,"#ff3df2",.18),qe.add(ps)}ps.visible=n,n&&(ps.position.copy(e),ps.lookAt(t),ps.scale.set(1+Math.random()*.3,1+Math.random()*.3,e.distanceTo(t)))}function qM(n,e){for(let s in _.pw)_.pw[s]>0&&(_.pw[s]-=n,_.pw[s]<=0&&(_.pw[s]=0,$t(`${Vn[s].icon} ${Vn[s].name} ENDED`,!0)));if(wi=wi.filter(s=>(s.t+=n,s.life-=n,s.r1.rotation.x+=n*1.6,s.r1.rotation.y+=n*1.1,s.r2.rotation.z+=n*2.2,s.core.rotation.y+=n*2,s.core.scale.setScalar(1+Math.sin(s.t*5)*.12),s.obj.position.y+=Math.sin(s.t*1.5)*.25,s.life<5&&(s.obj.visible=Math.sin(s.t*20)>0),_.alive&&s.pos.distanceTo(_.pos)<55?(WM(s),qe.remove(s.obj),!1):s.life<=0?(qe.remove(s.obj),!1):!0)),ba=ba.filter(s=>{s.t+=n;let r=s.t*2700;return s.ring.scale.set(r,r,r*1.5),s.ball.scale.setScalar(r*.9),s.ring.material.opacity=Math.max(0,1-s.t/.95),s.ball.material.opacity=Math.max(0,.35*(1-s.t/.95)),s.t>1?(qe.remove(s.ring,s.ball),!1):!0}),Ln("shield")){_.shieldMesh.visible=!0,_.shieldMesh.material.uniforms.uT.value=G.t,_.shieldMesh.material.uniforms.uHit.value=_.shieldHit||0,_.shieldHit=Math.max(0,(_.shieldHit||0)-n*2);for(let s of mt)!s.dead&&s.air&&s.pos.distanceTo(_.pos)<48+ga(s)&&($r(s,99999,!0),$t("RAMMED!"))}else _.shieldMesh&&(_.shieldMesh.visible=!1);let t=It(_.q);if(Ln("laser")&&e&&e.gun&&_.alive){let s=_.pos.clone().addScaledVector(t,10),r=_.pos.clone().addScaledVector(t,3200);for(let o=100;o<3200;o+=100){let a=_.pos.clone().addScaledVector(t,o);if(a.y<xn.height(a.x,a.z)){r.copy(a);break}}for(let o of mt)!o.dead&&Qc(o.pos,s,r)<ga(o)+10&&($r(o,420*n,!0),Math.random()<.5&&En.emit(o.pos.x,o.pos.y,o.pos.z,{size:Ae(8,16),life:.3,color:[1,.5,1],alpha:1,spread:40}));En.emit(r.x,r.y,r.z,{size:Ae(10,20),life:.25,color:[1,.6,1],alpha:1,spread:30}),oh(!0,s,r),Math.random()<n*20&&We.gun()}else oh(!1)}function Tm(){let n=re("#pw");if(!n||!_)return;let e=ad.filter(t=>_.pw[t]>0);[...n.children].forEach(t=>{e.includes(t.dataset.k)||t.remove()}),e.forEach(t=>{let i=n.querySelector(`[data-k="${t}"]`);i||(i=document.createElement("div"),i.className="pwi",i.dataset.k=t,i.style.setProperty("--c",Vn[t].col),i.innerHTML=`<b>${Vn[t].icon}</b><span>${Vn[t].name}</span><em></em><i></i>`,n.appendChild(i)),i.querySelector("i").style.width=Math.min(100,_.pw[t]/Vn[t].dur*100).toFixed(1)+"%",i.querySelector("em").textContent=Math.ceil(_.pw[t])+"s",i.classList.toggle("low",_.pw[t]<3)})}function wm(n){G.t+=n,_.alive?(BM(n),kM(n)):_.deadT+=n;let e=Ln("warp")?n*.3:n;qM(n,_.I),Ln("ghost")&&Yt.forEach(i=>{i.owner==="e"&&i.target===_&&(i.target=null)}),mt.forEach(i=>{if(k.on&&!i.net){let s=_;_=aS(i,s,e),om(i,e),_=s}else om(i,e)}),k.mates.forEach(i=>Um(i,n));let t=bt();fi.list=fi.list.filter(i=>{let s=i.owner==="p"?n:e;if(i.life-=s,i.life<=0)return!1;if(t.copy(i.p).addScaledVector(i.v,s),i.owner==="p"){for(let r of mt)if(!r.dead&&Math.abs(r.pos.x-i.p.x)<260&&Qc(r.pos,i.p,t)<ga(r))return $r(r,i.dmg),En.emit(t.x,t.y,t.z,{size:6,life:.25,color:[1,.8,.4],alpha:1,spread:20}),!1}else{if(i.owner==="e"&&_.alive&&Qc(_.pos,i.p,t)<(Ln("ghost")?1.5:9))return rh(i.dmg,"e"),!1;if(i.owner==="e"&&k.on){for(let r of k.mates.values())if(r.alive&&Qc(r.pos,i.p,t)<9)return k.dmgOut[r.pid]=(k.dmgOut[r.pid]||0)+i.dmg,!1}}return t.y<xn.height(t.x,t.z)?(dn.emit(t.x,t.y+2,t.z,{size:6,life:1.4,color:[.82,.66,.45],alpha:.6,spread:6,grow:1.5,vy:8}),!1):(i.p.copy(t),!0)}),Yt=Yt.filter(i=>{let s=n;{let r=i.owner==="p"?s:e,o=i.owner==="p"||i.owner==="x"&&i.by!=="e";i.life-=r,i.armed-=r,i.speed=Math.min(o?780:560,i.speed+420*r);let a=i.target,l=null;if(a&&a.pos&&!a.remove&&(a.life===void 0||a.life>0)&&(l=a.pos.clone(),a.vel&&l.addScaledVector(a.vel,St(l.distanceTo(i.pos)/i.speed,0,2)*.6)),l){let d=l.sub(i.pos).normalize(),u=i.dir.angleTo(d),f=(i.owner==="p"?2.7*_.m.seeker:o?2.7:1.5)*r;u>1e-4&&i.dir.lerp(d,Math.min(1,f/u)).normalize()}i.owner==="p"&&a&&a.obj&&a.air&&!a.net&&!a.dead&&!a.flared&&i.pos.distanceTo(a.pos)<900&&a.state==="evade"&&Math.random()<r*.6&&(i.target=FM(a),a.flared=!0),i.pos.addScaledVector(i.dir,i.speed*r),i.mesh.position.copy(i.pos),i.mesh.quaternion.setFromRotationMatrix(Js.lookAt(Sa,i.dir,Wn));let c=fd.copy(i.pos).addScaledVector(i.dir,-2);En.emit(c.x,c.y,c.z,{size:3.2,life:.12,color:[1,.75,.4],alpha:1,grow:-2}),dn.emit(c.x,c.y,c.z,{size:2.6,life:3.2,color:[.9,.9,.88],alpha:.5,spread:1,grow:1.5,drag:1});let h=i.life<=0||i.pos.y<xn.height(i.pos.x,i.pos.z);if(!h&&i.armed<=0){if(i.owner==="p"){for(let d of mt)if(!d.dead&&d.pos.distanceTo(i.pos)<ga(d)+10){d.pilot||($r(d,d.kind==="boss"?320:d.kind==="bomber"?260:999,!0),i.auth=!0),h=!0;break}}else _.alive&&_.pos.distanceTo(i.pos)<20&&(i.owner==="e"||(i.target===_||!i.target)&&!(k.mode==="coop"&&i.by!=="e"))?(rh(i.owner==="x"?i.dmg:(i.dmg||42)*Zi[Re.diff].dmg,i.by),h=!0,i.auth=!0):a&&(a.mate||a.net)&&!a.dead&&a.pos.distanceTo(i.pos)<(a.net?ga(a)+10:20)&&(h=!0);!h&&a&&a.life!==void 0&&a.pos.distanceTo(i.pos)<15&&(h=!0)}return h?(i.auth&&k.on&&qn({t:"mx",id:i.id}),Xi(i.pos,i.swarm?.45:.6),qe.remove(i.mesh),!1):!0}}),Xn=Xn.filter(i=>(i.life-=n,i.vel.y-=30*n,i.vel.multiplyScalar(Math.exp(-.6*n)),i.pos.addScaledVector(i.vel,n),En.emit(i.pos.x,i.pos.y,i.pos.z,{size:7,life:.15,color:[1,.9,.7],alpha:1,grow:-1}),dn.emit(i.pos.x,i.pos.y,i.pos.z,{size:3,life:1.6,color:[.95,.95,.95],alpha:.35,grow:1.4}),i.life>0)),mt=mt.filter(i=>i.remove?(qe.remove(i.obj),_.lock.t===i&&(_.lock.t=null),!1):!0),ei=ei.filter(i=>(i.t-=n,i.t<=0?(i.f(),!1):!0)),G.comboT-=n,!k.on&&_.alive&&!mt.length&&G.mode==="play"&&!G.clearing&&YM(),k.on&&k.mode==="coop"&&k.host&&G.mode==="play"&&!G.clearing&&G.wave>0&&!mt.some(i=>!i.net)&&uS(),!_.alive&&_.deadT>(k.on?4.5:3.2)&&G.mode==="play"&&(k.on?cS():Cm(G.reason))}function YM(){G.clearing=!0;let n=250*G.wave;G.score+=n,Ks(`WAVE ${G.wave} CLEAR`,`+${n} bonus`),We.win(),_.hp=Math.min(_.maxHp,_.hp+_.maxHp*.35),_.msl=_.mslMax,_.flares=_.flareMax,$i(),G.baseHp=Math.min(100,G.baseHp+10),ei.push({t:2.4,f:$M})}function hh(){G.wave++,G.clearing=!1,IM(G.wave);let n=G.spec;Ks(`WAVE ${G.wave}: ${n.name}`,n.obj),re("#obj").textContent=n.obj,k.on&&qn({t:"wave",w:G.wave,name:n.name,obj:n.obj})}var ld=[];function $M(){if(!_.alive)return;G.mode="perk",document.pointerLockElement&&document.exitPointerLock(),We.silence(),document.body.classList.remove("playing"),ld=TM.filter(e=>e[0]!=="salvo"||_.m.salvo<2).sort(()=>Math.random()-.5).slice(0,3),re("#perkCards").innerHTML=ld.map((e,t)=>`<button class="pcard" data-i="${t}" style="--d:${t*.08}s"><i>${e[1]}</i><b>${e[2]}</b><span>${e[3]}</span><small>${t+1}</small></button>`).join(""),re("#perkWave").textContent=`Wave ${G.wave+1}: ${Sm(G.wave+1).name}`,re("#perk").classList.add("on")}function gd(n){let e=ld[n];if(!e||G.mode!=="perk")return;We.click();let t=_.m;({gun:()=>t.gun*=1.3,lock:()=>t.lock*=1.8,pylon:()=>{_.mslMax+=3,_.msl=_.mslMax,t.reload*=1.4},hull:()=>{_.maxHp+=35,_.hp=_.maxHp},flare:()=>{_.flareMax+=6,_.flares=_.flareMax,t.flare*=2},engine:()=>t.speed*=1.12,agile:()=>t.agile*=1.15,cool:()=>t.heat*=.6,seeker:()=>t.seeker*=1.35,regen:()=>t.regen*=3,scav:()=>t.scav=1,salvo:()=>t.salvo=2})[e[0]](),_.perks.push(e),$i(),re("#perks").innerHTML=_.perks.map(i=>`<i title="${i[2]}">${i[1]}</i>`).join(""),re("#perk").classList.remove("on"),G.mode="play",document.body.classList.add("playing"),Re.control==="aim"&&!Bt&&Yr(),$t(e[2].toUpperCase()+" EQUIPPED"),ei.push({t:1.5,f:hh})}re("#perkCards").onclick=n=>{let e=n.target.closest(".pcard");e&&gd(+e.dataset.i)};function uh(n,e){G.view=n,Dn.visible=n==="first"&&_&&_.alive,_&&(_.obj.visible=n!=="first"&&_.alive),e||(Re.view=n,fa())}function dh(){uh(G.view==="first"?"third":"first"),$t(G.view==="first"?"COCKPIT VIEW":"CHASE VIEW")}function ZM(n){if(window.__camFreeze)return;if(G.mode==="menu"){innerWidth<=760?et.setViewOffset(innerWidth,innerHeight,0,innerHeight*.26,innerWidth,innerHeight):et.clearViewOffset();let i=performance.now()/1e3*.12,s=un.position;et.position.set(s.x+Math.sin(i)*34,s.y+7+Math.sin(i*.7)*3,s.z+Math.cos(i)*34),et.up.set(0,1,0),et.lookAt(s.x+(innerWidth>900?-6:0),s.y,s.z),et.fov=innerWidth<=760?58:45,et.updateProjectionMatrix();return}if(et.view&&et.clearViewOffset(),!_.alive){let i=_.deadT*.4;et.position.lerp(_.pos.clone().add(new P(Math.sin(i)*160,70,Math.cos(i)*160)),n*2),et.up.set(0,1,0),et.lookAt(_.pos);return}let e=_.shake*(G.view==="first"?.25:.9);_.shake*=Math.exp(-n*4);let t=St(1.1/et.aspect,1,1.7);if(G.view==="first")et.position.copy(_.pos).add(new P(0,Dn.userData.eyeY??1.25,Dn.userData.eyeZ??-_.J.len*.26).applyQuaternion(_.q)),et.quaternion.copy(_.q),et.fov=_s(et.fov,74+(_.ab?6:0),n*3);else if(Re.control==="aim"&&!Bt){let i=lh();_.camQ.setFromRotationMatrix(Js.lookAt(Sa,i,Wn));let s=new P(0,(4.5+_.J.len*.12)*t,(19+_.J.len*.6)*t).applyQuaternion(_.camQ);et.position.copy(_.pos).add(s),et.quaternion.copy(_.camQ),et.rotateX(-.05),et.fov=_s(et.fov,64+St((_.speed-250)*.05,0,12)+(_.ab?4:0),n*3)}else{_.camQ.slerp(_.q,Math.min(1,n*4.5));let i=new P(0,(5+_.J.len*.12)*t,(20+_.J.len*.55)*t).applyQuaternion(_.camQ);et.position.copy(_.pos).add(i),et.quaternion.copy(_.camQ),et.rotateX(-.09),et.fov=_s(et.fov,66+St((_.speed-250)*.05,0,12)+(_.ab?4:0),n*3)}e>.01&&et.position.add(new P(Ae(-1,1),Ae(-1,1),Ae(-1,1)).multiplyScalar(e)),et.updateProjectionMatrix()}var Ys=re("#hud"),Am=Ys.getContext("2d"),hn=0,Vt=0,xa=1,$s="#3dff8f",jn="#ff4f5e",qs="#ffcf4a",Wr="#7fd0ff",$c=bt(),JM=new Tt;function gs(n){return $c.copy(n).project(et),{x:($c.x+1)/2*hn,y:(1-$c.y)/2*Vt,front:$c.z<1}}function eh(n,e,t,i,s=1){let r=e.clone().sub(et.position).applyQuaternion(JM.copy(et.quaternion).invert()),o=Math.atan2(-r.y,r.x),a=hn/2,l=Vt/2;n.save(),n.translate(a+Math.cos(o)*i,l+Math.sin(o)*i),n.rotate(o),n.fillStyle=t,n.beginPath(),n.moveTo(12*s,0),n.lineTo(-8*s,-8*s),n.lineTo(-8*s,8*s),n.closePath(),n.fill(),n.restore()}function KM(n,e){let t=Am;if(t.setTransform(xa,0,0,xa,0,0),t.clearRect(0,0,hn,Vt),G.mode!=="play"&&G.mode!=="paused")return;t.lineWidth=2,t.font='600 12px "Share Tech Mono",monospace',t.textBaseline="middle";let i=It(_.q),s=hn/2,r=Vt/2,o=Math.min(hn,Vt);if(_.alive){let a=gs(_.pos.clone().addScaledVector(i,700));if(a.front){t.strokeStyle=_.over?jn:$s,t.beginPath(),t.arc(a.x,a.y,16,0,7),t.stroke(),t.beginPath();for(let[u,f]of[[-28,-20],[20,28]])t.moveTo(a.x+u,a.y),t.lineTo(a.x+f,a.y),t.moveTo(a.x,a.y+u),t.lineTo(a.x,a.y+f);t.stroke(),t.fillStyle=t.strokeStyle,t.fillRect(a.x-1.5,a.y-1.5,3,3),ma>0&&(t.strokeStyle="#fff",t.beginPath(),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([u,f])=>{t.moveTo(a.x+u*8,a.y+f*8),t.lineTo(a.x+u*15,a.y+f*15)}),t.stroke())}if(Re.control==="aim"&&!Bt){let u=gs(_.pos.clone().addScaledVector(lh(),2e3));u.front&&(t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=1.5,t.beginPath(),t.arc(u.x,u.y,7,0,7),t.stroke(),t.fillStyle="#fff",t.fillRect(u.x-1,u.y-1,2,2),a.front&&Math.hypot(u.x-a.x,u.y-a.y)>24&&(t.strokeStyle="rgba(255,255,255,.25)",t.setLineDash([2,6]),t.beginPath(),t.moveTo(u.x,u.y),t.lineTo(a.x,a.y),t.stroke(),t.setLineDash([])))}else if(Re.control==="stick"&&!Bt&&Un.moved){let u=s+Un.x*hn/2,f=r+Un.y*Vt/2;t.strokeStyle="rgba(61,255,143,.5)",t.beginPath(),t.arc(u,f,6,0,7),t.stroke()}if(G.view==="first"){let u=ys(_.q),f=Math.atan2(-u.y,Mm(_.q).y),p=Math.asin(St(i.y,-1,1)),v=Vt/(et.fov*Math.PI/180);t.save(),t.translate(s,r),t.rotate(f),t.strokeStyle="rgba(61,255,143,.75)",t.fillStyle="rgba(61,255,143,.75)",t.textAlign="left",t.lineWidth=1.5;for(let m=-60;m<=60;m+=10){let g=(p*180/Math.PI-m)*v*Math.PI/180;if(Math.abs(g)>Vt*.32)continue;let y=m===0?260:90;m<0&&t.setLineDash([8,6]),t.beginPath(),t.moveTo(-y,g),t.lineTo(-40,g),t.moveTo(40,g),t.lineTo(y,g),t.stroke(),t.setLineDash([]),m&&t.fillText(Math.abs(m),y+6,g)}t.restore()}wi.forEach(u=>{let f=gs(u.pos),p=u.pos.distanceTo(_.pos),v=Vn[u.kind].col;if(!f.front||f.x<0||f.y<0||f.x>hn||f.y>Vt){p<2600&&eh(t,u.pos,v,o*.38,.9);return}t.strokeStyle=v,t.lineWidth=2,t.beginPath(),t.arc(f.x,f.y,16,0,7),t.stroke(),t.fillStyle=v,t.textAlign="center",t.font='700 11px "Share Tech Mono",monospace',t.fillText(Vn[u.kind].name+"  "+Math.round(p)+"m",f.x,f.y-26),t.font='600 12px "Share Tech Mono",monospace'});let l=Ea.userData.center,c=gs(l);if(c.front&&c.x>0&&c.x<hn&&c.y>0&&c.y<Vt&&(t.strokeStyle=Wr,t.lineWidth=1.5,t.strokeRect(c.x-10,c.y-10,20,20),t.fillStyle=Wr,t.textAlign="center",t.fillText("BASE",c.x,c.y-18)),mt.forEach(u=>{if(u.dead)return;let f=gs(u.pos),p=u.pos.distanceTo(_.pos),v=_.lock,m=v.t===u,g=u.kind==="bomber"||u.kind==="boss";if(!f.front||f.x<0||f.y<0||f.x>hn||f.y>Vt){eh(t,u.pos,m?jn:g?qs:"rgba(255,120,100,.8)",o*.42,g?1.4:1);return}let y=St(1600/p*14*(g?1.8:1),12,g?60:36);if(t.strokeStyle=m?v.locked?jn:qs:u.air?"rgba(255,255,255,.85)":"rgba(255,190,120,.9)",t.lineWidth=m?2.5:1.6,m&&!v.locked){t.save(),t.translate(f.x,f.y),t.rotate(e*4);let A=1.6-Math.min(1,v.k/.7)*.6;t.strokeRect(-y*A,-y*A,y*2*A,y*2*A),t.restore()}else m&&(t.beginPath(),t.moveTo(f.x,f.y-y*1.3),t.lineTo(f.x+y*1.3,f.y),t.lineTo(f.x,f.y+y*1.3),t.lineTo(f.x-y*1.3,f.y),t.closePath(),t.stroke(),t.fillStyle=jn,t.textAlign="center",t.fillText("LOCK",f.x,f.y-y*1.3-12));if(u.air){t.beginPath();for(let[A,T]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.moveTo(f.x+A*y,f.y+T*y*.45),t.lineTo(f.x+A*y,f.y+T*y),t.lineTo(f.x+A*y*.45,f.y+T*y);t.stroke()}else t.beginPath(),t.moveTo(f.x,f.y-y),t.lineTo(f.x+y,f.y),t.lineTo(f.x,f.y+y),t.lineTo(f.x-y,f.y),t.closePath(),t.stroke();u.hitT>0&&(t.fillStyle="rgba(255,255,255,.5)",t.fillRect(f.x-y,f.y-y,y*2,y*2)),t.fillStyle="rgba(255,255,255,.85)",t.textAlign="left",t.fillText((p/1e3).toFixed(1)+"km",f.x+y+6,f.y+y-4);let S=u.name||Vr[u.kind].label;S&&(t.fillStyle=g||u.kind==="ace"?qs:"rgba(255,190,120,.95)",t.fillText(S,f.x+y+6,f.y-y+6));let M=Math.max(0,u.hp)/u.maxHp;t.fillStyle="rgba(0,0,0,.4)",t.fillRect(f.x-y,f.y+y+5,y*2,3),t.fillStyle=M>.5?$s:M>.25?qs:jn,t.fillRect(f.x-y,f.y+y+5,y*2*M,3)}),_.lead){let u=gs(_.lead);u.front&&(t.strokeStyle=$s,t.lineWidth=2,t.beginPath(),t.arc(u.x,u.y,9,0,7),t.stroke(),t.beginPath(),t.arc(u.x,u.y,2,0,7),t.fillStyle=$s,t.fill())}gS(t,o,e);let h=Yt.filter(u=>(u.owner==="e"||u.owner==="x")&&u.target===_);h.length&&(_.warnT-=n,_.warnT<=0&&(_.warnT=.55,We.warn()),Math.floor(e*4)%2&&(t.fillStyle=jn,t.font='700 22px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Bt?"\u26A0 MISSILE \u2014 HIT FLR":"\u26A0 MISSILE \u2014 PRESS F FOR FLARES",s,Vt*.26)),h.forEach(u=>{let f=gs(u.pos);f.front&&f.x>0&&f.x<hn&&f.y>0&&f.y<Vt?(t.strokeStyle=jn,t.lineWidth=2,t.beginPath(),t.arc(f.x,f.y,14,0,7),t.stroke()):eh(t,u.pos,jn,o*.3,1.4)})),_.pullUp&&(_.pullT-=n,_.pullT<=0&&(_.pullT=.7,We.pullup()),Math.floor(e*3)%2&&(t.fillStyle=jn,t.font='700 26px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Re.assist?"AUTO PULL-UP":"PULL UP",s,Vt*.68))),_.out&&(t.fillStyle=qs,t.font='700 18px "Orbitron",sans-serif',t.textAlign="center",t.fillText("LEAVING COMBAT AREA \u2014 TURN BACK",s,Vt*.2)),t.font='600 12px "Share Tech Mono",monospace',t.lineWidth=1.5;let d=Math.min(340,hn*.5-92);cm(t,s-d,r,Math.round(_.speed*1.94),"KTS",-1),cm(t,s+d,r,Math.round(_.pos.y*3.28),"ALT",1,`R ${Math.round(_.alt*3.28)}`),(!Bt||hn>700)&&jM(t,s,74)}if(t.textAlign="center",Ei.forEach((a,l)=>{a.life-=n||.016,!(a.life<=0)&&(t.globalAlpha=Math.min(1,a.life*2),t.fillStyle=a.warn?jn:"#fff",t.font=`700 ${l?15:20}px "Orbitron",sans-serif`,t.fillText(a.t,s,Vt*.36-l*24))}),t.globalAlpha=1,Ei=Ei.filter(a=>a.life>0),_.hitFlash>0){_.hitFlash=Math.max(0,_.hitFlash-n*1.4);let a=t.createRadialGradient(s,r,o*.3,s,r,o*.8);a.addColorStop(0,"rgba(255,40,40,0)"),a.addColorStop(1,`rgba(255,40,40,${_.hitFlash*.55})`),t.fillStyle=a,t.fillRect(0,0,hn,Vt)}G.slow>0&&(t.fillStyle="rgba(255,255,255,.04)",t.fillRect(0,0,hn,Vt)),ma=Math.max(0,ma-n),QM(t),eS()}function cm(n,e,t,i,s,r,o){n.save(),n.translate(e,t),n.strokeStyle="rgba(61,255,143,.55)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign=r<0?"right":"left",n.beginPath(),n.rect(r<0?-66:0,-220/2,66,220),n.clip();let c=s==="ALT"?500:50,h=44;for(let u=Math.floor(i/c)-3;u<=Math.floor(i/c)+3;u++){let f=(i-u*c)/c*h;u<0||(n.beginPath(),n.moveTo(0,f),n.lineTo(r*12,f),n.stroke(),n.fillText(u*c,r*16,f))}n.restore(),n.save(),n.translate(e,t),n.fillStyle="rgba(8,10,8,.75)",n.strokeStyle=$s,n.lineWidth=1.5;let d=r<0?-76:0;n.fillRect(d,-14,76,28),n.strokeRect(d,-14,76,28),n.fillStyle="#fff",n.font='700 15px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(i,d+76/2,0),n.fillStyle=$s,n.font='600 10px "Share Tech Mono",monospace',n.fillText(s,d+76/2,-220/2-12),o&&n.fillText(o,d+76/2,220/2+12),n.restore()}function jM(n,e,t){let i=It(_.q),s=(Math.atan2(i.x,-i.z)*180/Math.PI+360)%360,r=300,o=4;n.save(),n.translate(e,t),n.beginPath(),n.rect(-r/2,-16,r,40),n.clip(),n.strokeStyle="rgba(61,255,143,.6)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign="center",n.lineWidth=1.5;for(let a=Math.floor((s-40)/5)*5;a<=s+40;a+=5){let l=(a-s)*o,c=(a+360)%360;n.beginPath(),n.moveTo(l,4),n.lineTo(l,c%10?9:13),n.stroke(),c%30===0&&n.fillText({0:"N",90:"E",180:"S",270:"W"}[c]||String(c/10).padStart(2,"0"),l,-6)}n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(e,t+15),n.lineTo(e-6,t+24),n.lineTo(e+6,t+24),n.fill(),n.font='700 12px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(String(Math.round(s)).padStart(3,"0")+"\xB0",e,t+34)}function QM(n){let e=Bt?52:74,t=hn-e-18,i=Bt?e+70:Vt-e-18,s=5e3,r=It(_.q),o=Math.atan2(r.x,-r.z);n.save(),n.translate(t,i),n.fillStyle="rgba(8,12,8,.62)",n.beginPath(),n.arc(0,0,e,0,7),n.fill(),n.strokeStyle="rgba(61,255,143,.35)",n.lineWidth=1,[1,.66,.33].forEach(d=>{n.beginPath(),n.arc(0,0,e*d,0,7),n.stroke()}),n.beginPath(),n.moveTo(-e,0),n.lineTo(e,0),n.moveTo(0,-e),n.lineTo(0,e),n.stroke();let a=performance.now()/1e3*2%(Math.PI*2);if(n.createConicGradient){let d=n.createConicGradient(a-.6,0,0);d.addColorStop(0,"rgba(61,255,143,0)"),d.addColorStop(.1,"rgba(61,255,143,.22)"),d.addColorStop(.1001,"rgba(61,255,143,0)"),n.fillStyle=d,n.beginPath(),n.arc(0,0,e,0,7),n.fill()}let l=d=>{let u=d.x-_.pos.x,f=d.z-_.pos.z,p=Math.atan2(u,-f)-o,v=Math.min(1,Math.hypot(u,f)/s)*e;return[Math.sin(p)*v,-Math.cos(p)*v]},[c,h]=l(Ea.userData.center);n.fillStyle=Wr,(k.mode!=="duel"||!k.on)&&n.fillRect(c-4,h-4,8,8),k.mates.forEach(d=>{if(!d.alive)return;let[u,f]=l(d.pos);n.fillStyle="#7fd0ff",n.beginPath(),n.arc(u,f,4,0,7),n.fill()}),wi.forEach(d=>{let[u,f]=l(d.pos);n.fillStyle=Vn[d.kind].col,n.beginPath(),n.moveTo(u,f-5),n.lineTo(u+5,f),n.lineTo(u,f+5),n.lineTo(u-5,f),n.fill()}),mt.forEach(d=>{if(d.dead)return;let[u,f]=l(d.pos);n.fillStyle=d===_.lock.t?jn:d.air?"#ff8a6a":"#ffb070",d.air?(n.beginPath(),n.arc(u,f,d.kind==="boss"||d.kind==="bomber"?5.5:3.5,0,7),n.fill()):n.fillRect(u-3,f-3,6,6)}),Yt.forEach(d=>{let[u,f]=l(d.pos);n.fillStyle=d.owner==="e"?jn:qs,n.beginPath(),n.arc(u,f,2,0,7),n.fill()}),n.fillStyle=$s,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,6),n.lineTo(0,3),n.lineTo(-5,6),n.closePath(),n.fill(),n.restore()}var hm=0;function eS(){let n=performance.now();if(n-hm<120)return;hm=n,Tm(),k.on&&xS(),re("#sScore").textContent=G.score.toLocaleString(),re("#sWave").textContent=G.wave,re("#sLeft").textContent=mt.filter(t=>!t.dead).length,re("#sCombo").textContent=G.combo>1&&G.comboT>0?"\xD7"+G.combo:"";let e=Math.max(0,_.hp/_.maxHp);re("#hpBar").style.width=e*100+"%",re("#hpBar").style.background=e>.5?"var(--acc)":e>.25?"#ffcf4a":"#ff4f5e",re("#hpTxt").textContent=Math.round(e*100)+"%",re("#heat").style.width=_.heat*100+"%",re("#heat").style.background=_.over?"#ff4f5e":_.heat>.7?"#ffcf4a":"var(--acc)",re("#flr").textContent=_.flares,re("#thr").style.height=_.thr*100+"%",re("#thr").classList.toggle("ab",!!_.ab),re("#baseBar").style.width=G.baseHp+"%",re("#baseBar").style.background=G.baseHp>50?"#7fd0ff":G.baseHp>25?"#ffcf4a":"#ff4f5e",re("#baseTxt").textContent=Math.round(G.baseHp)+"%"}function $i(){re("#msl").innerHTML=Array.from({length:_.mslMax},(n,e)=>`<i class="${e<_.msl?"on":""}"></i>`).join(""),_.obj.userData.msls.forEach((n,e)=>n.visible=e<Math.min(_.msl,_.obj.userData.msls.length)),(Dn.userData.msls||[]).forEach((n,e)=>n.visible=e<Math.min(_.msl,Dn.userData.msls.length))}function Rm(){let n=re("#baseWrap");n.classList.remove("hit"),n.offsetWidth,n.classList.add("hit")}function tS(n){if(!Dn.visible||(n*10|0)%2)return;let[e,t]=Dn.userData.mfds,i=e.g;i.fillStyle="#071007",i.fillRect(0,0,128,96),i.strokeStyle="#3f7a2a",i.beginPath(),i.arc(64,54,38,0,7),i.stroke(),i.fillStyle="#3dff8f",i.font="10px monospace",i.fillText("RDR",6,12);let s=It(_.q),r=Math.atan2(s.x,-s.z);mt.forEach(o=>{if(o.dead)return;let a=o.pos.x-_.pos.x,l=o.pos.z-_.pos.z,c=Math.atan2(a,-l)-r,h=Math.min(1,Math.hypot(a,l)/4500)*38;i.fillStyle="#ff6a4a",i.fillRect(64+Math.sin(c)*h-2,54-Math.cos(c)*h-2,4,4)}),e.t.needsUpdate=!0,i=t.g,i.fillStyle="#071007",i.fillRect(0,0,128,96),i.fillStyle="#3dff8f",i.font="11px monospace",i.fillText("SMS",6,12),i.fillText(`MSL ${_.msl}/${_.mslMax}`,10,34),i.fillText(`FLR ${_.flares}`,10,50),i.fillText(`HULL ${Math.round(_.hp/_.maxHp*100)}%`,10,66),i.fillStyle=_.over?"#ff4f5e":"#3dff8f",i.fillRect(10,76,108*_.heat,6),t.t.needsUpdate=!0,Dn.userData.stick.rotation.z=-(_.input?.roll||0)*.25,Dn.userData.stick.rotation.x=.3+(_.input?.pitch||0)*.2}function Ks(n,e){let t=re("#banner");t.innerHTML=`<b>${n}</b><span>${e||""}</span>`,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}var nS=["Move the mouse to aim. Your jet flies toward the white circle.","Hold LEFT CLICK to fire guns. Lead targets with the green pipper.","Keep a bandit near your aim until it says LOCK, then SPACE or RIGHT CLICK fires a missile.","Missile inbound? Press F to drop flares.","SHIFT is afterburner. V switches to the cockpit.","Defend the base in the middle of the map when bombers come."],iS=["Use the stick on the left to fly.","Hold GUN to shoot. Lead targets with the green pipper.","Keep a bandit in front until it says LOCK, then tap MSL.","Missile inbound? Tap FLR for flares.","Defend the base in the middle when bombers come."],cd=0,th=0;function sS(n){if(!G.tips||(th-=n,th>0))return;let e=Bt||Re.control==="stick"?iS:nS;if(cd>=e.length){G.tips=!1,re("#tip").classList.remove("on"),qi.set("jkstrike-tut",1);return}re("#tip").textContent=e[cd++],re("#tip").classList.remove("on"),re("#tip").offsetWidth,re("#tip").classList.add("on"),th=6}function wa(n){!n&&k.on&&fh(!0),AM(),km(),We.init(),un&&(qe.remove(un),un=null),mt.forEach(e=>qe.remove(e.obj)),Yt.forEach(e=>qe.remove(e.mesh)),mt=[],Yt=[],Xn=[],fi.list=[],dn.clear(),En.clear(),Zr.clear(),Ei=[],ei=[],wi.forEach(e=>qe.remove(e.obj)),wi=[],ba.forEach(e=>qe.remove(e.ring,e.ball)),ba=[],oh(!1),_=CM(),_.q.setFromRotationMatrix(Js.lookAt(_.pos,new P(0,800,0),Wn)),_.camQ.copy(_.q),Ma(),G={mode:"play",wave:0,score:0,kills:0,shots:0,hits:0,combo:0,comboT:0,view:Re.view,t:0,baseHp:100,cycle:0,slow:0,slowCd:0,multi:0,lastKill:-9,clearing:!1,tips:!qi.get("jkstrike-tut",0)},uh(Re.view,!0),$i(),re("#perks").innerHTML="",cd=0,th=1.5,document.body.classList.toggle("mpduel",!!n&&k.mode==="duel"),document.body.classList.toggle("mpon",!!n),k.menu=!1,n?hS():hh(),vs(".screen").forEach(e=>e.classList.remove("on")),re("#play").classList.add("on"),document.body.classList.add("playing"),re("#help").style.opacity=1,setTimeout(()=>re("#help").style.opacity=0,9e3),re("#clickfly").classList.remove("on"),Re.control==="aim"&&!Bt&&Yr()}function Zs(){if(re("#pause [data-a=menu]").textContent=k.on?"Leave match":"Hangar",k.on){if(G.mode!=="play")return;k.menu=!k.menu,re("#clickfly").classList.remove("on"),re("#pause").classList.toggle("on",k.menu),re("#pause").classList.add("mp"),re("#pView").textContent=G.view==="first"?"Cockpit":"Chase",k.menu?document.pointerLockElement&&document.exitPointerLock():Re.control==="aim"&&!Bt&&Yr();return}re("#pause").classList.remove("mp"),G.mode==="play"&&_.alive?(G.mode="paused",re("#pause").classList.add("on"),We.silence(),document.body.classList.remove("playing"),re("#pView").textContent=G.view==="first"?"Cockpit":"Chase",document.pointerLockElement&&document.exitPointerLock()):G.mode==="paused"&&(G.mode="play",re("#pause").classList.remove("on"),document.body.classList.add("playing"),Re.control==="aim"&&!Bt&&Yr())}function Cm(n){if(k.on){k.host&&n==="base"&&dS("base");return}if(G.mode==="over")return;G.mode="over",document.body.classList.remove("playing"),document.pointerLockElement&&document.exitPointerLock(),We.silence();let e=qi.get("jkstrike-best",0),t=G.score>e;t&&qi.set("jkstrike-best",G.score),re("#oScore").textContent=G.score.toLocaleString(),re("#oTitle").textContent=t&&G.score>0?"New high score!":n==="base"?"Base destroyed":n==="crash"?"Crashed":"Shot down",re("#oStats").innerHTML=`<div><b>${G.wave}</b><span>Wave</span></div><div><b>${G.kills}</b><span>Kills</span></div><div><b>${G.shots?Math.round(G.hits/G.shots*100):0}%</b><span>Gun accuracy</span></div><div><b>${Math.max(e,G.score).toLocaleString()}</b><span>Best</span></div>`,re("#oPerks").innerHTML=_.perks.length?_.perks.map(i=>`<span>${i[1]} ${i[2]}</span>`).join(""):"",re("#over").classList.add("on")}function Aa(){G={mode:"menu"},km(),document.body.classList.remove("mpduel","mpon"),wi.forEach(n=>qe.remove(n.obj)),wi=[],oh(!1),mt.forEach(n=>qe.remove(n.obj)),Yt.forEach(n=>qe.remove(n.mesh)),mt=[],Yt=[],Xn=[],fi.list=[],ei=[],_&&(qe.remove(_.obj),_=null),Dn.visible=!1,We.silence(),vs(".modal").forEach(n=>n.classList.remove("on")),vs(".screen").forEach(n=>n.classList.remove("on")),re("#menu").classList.add("on"),document.body.classList.remove("playing"),re("#clickfly").classList.remove("on"),hd(),Pm()}re("#pause").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(We.click(),e==="resume"&&(!k.on||k.menu)&&Zs(),e==="view"&&(dh(),re("#pView").textContent=G.view==="first"?"Cockpit":"Chase"),e==="restart"&&(re("#pause").classList.remove("on"),wa()),e==="menu"&&(k.on?fh():Aa()))};re("#over").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(We.click(),re("#over").classList.remove("on"),e==="again"?wa():Aa())};function Im(){let n=We.toggle();re("#snd").textContent=n?"\u{1F50A}":"\u{1F507}"}re("#snd").onclick=()=>{We.init(),Im()};re("#snd").textContent=We.on?"\u{1F50A}":"\u{1F507}";function hd(){un&&qe.remove(un),un=Vi(Re.jet,Re.paint),un.position.set(-900,1150,1800),un.rotation.y=.6,qe.add(un),un.userData.msls.forEach(n=>n.visible=!0)}function Pm(){re("#mJets").innerHTML=Object.entries(ui).map(([n,e])=>`<button class="jcard ${Re.jet===n?"on":""}" data-jet="${n}"><b>${e.name}</b><small>${e.blurb}</small>
    <div class="mini"><span>SPD</span><i style="--v:${e.speed*80}%"></i><span>AGL</span><i style="--v:${e.agility*75}%"></i><span>ARM</span><i style="--v:${e.hp/1.6}%"></i><span>MSL</span><i style="--v:${e.missiles/.13}%"></i></div></button>`).join(""),re("#mPaint").innerHTML=Object.entries(zr).filter(([n])=>n!=="red").map(([n,e])=>`<button class="sw ${Re.paint===n?"on":""}" data-paint="${n}" title="${e[2]}" style="background:linear-gradient(135deg,${e[0]} 50%,${e[1]} 50%)"></button>`).join(""),re("#mDiff").innerHTML=Object.entries(Zi).map(([n,e])=>`<button class="chip ${Re.diff===n?"on":""}" data-diff="${n}">${e.name}</button>`).join(""),re("#mView").innerHTML=[["third","Chase"],["first","Cockpit"]].map(([n,e])=>`<button class="chip ${Re.view===n?"on":""}" data-view="${n}">${e}</button>`).join(""),re("#mCtrl").innerHTML=Bt?'<span class="chip on">Touch stick</span>':[["aim","Mouse aim (easiest)"],["stick","Mouse joystick"]].map(([n,e])=>`<button class="chip ${Re.control===n?"on":""}" data-ctrl="${n}">${e}</button>`).join("")+[["low","Slow"],["mid","Normal"],["high","Fast"]].map(([n,e])=>`<button class="chip ${Re.sens===n?"on":""}" data-sens="${n}">${e}</button>`).join(""),re("#mOpts").innerHTML=[["invert","Invert pitch"],["assist","Flight assist + auto pull-up"]].map(([n,e])=>`<button class="chip ${Re[n]?"on":""}" data-opt="${n}">${Re[n]?"\u2713 ":""}${e}</button>`).join(""),re("#mQual").innerHTML=[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]].map(([n,e])=>`<button class="chip ${Re.quality===n?"on":""}" data-qual="${n}">${e}</button>`).join(""),re("#mBest").textContent=qi.get("jkstrike-best",0).toLocaleString()}re("#menu").onclick=n=>{let e=n.target.closest("button");if(!e)return;We.init(),We.click();let t=e.dataset;if(t.jet&&(Re.jet=t.jet,hd()),t.paint&&(Re.paint=t.paint,hd()),t.diff&&(Re.diff=t.diff),t.view&&(Re.view=t.view),t.opt&&(Re[t.opt]=!Re[t.opt]),t.ctrl&&(Re.control=t.ctrl),t.sens&&(Re.sens=t.sens),t.qual){Re.quality=t.qual,fa(),location.reload();return}if(e.id==="mMP"){fa(),Vm();return}if(e.id==="mGo"){fa(),wa();return}fa(),Pm()};var js=(n,e=10)=>[Math.round(n.x*e)/e,Math.round(n.y*e)/e,Math.round(n.z*e)/e],ms=n=>Math.round(n*1e3)/1e3,um=n=>{let e=2166136261;for(let t of String(n))e=Math.imul(e^t.charCodeAt(0),16777619)>>>0;return e},Lm=["fighter","ace","bomber","boss","sam","aa"],rS=n=>n?n.pid?n.pid:n.eid!=null?"e"+n.eid:n.life!==void 0?null:wt:null,Dm=n=>k.metas[n]||{name:"Pilot",jet:"viper",paint:"gray"},Qn=n=>n==="e"?"Bandits":n===wt?"You":String(Dm(n).name||"Pilot").toUpperCase(),Pn=()=>k.on&&_&&(G.mode==="play"||G.mode==="paused"),xd=n=>String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Nm(n,e){n.flareN=(n.flareN||0)+1,Yt.forEach(t=>{t.target===n&&t.owner!==(n===_?"p":"")&&um(t.id+":"+n.flareN)%100<85&&(t.target=Xn[e+um(t.id)%6])})}function Um(n,e){if(!n.tp)return;n.tp.addScaledVector(n.tv,e);let t=1-Math.exp(-e*9);n.pos.distanceToSquared(n.tp)>62500?n.pos.copy(n.tp):n.pos.lerp(n.tp,t),n.q.slerp(n.tq,t),n.vel.lerp(n.tv,t),n.speed=n.vel.length(),n.hitT=Math.max(0,(n.hitT||0)-e),n.dead&&n.air&&n.rep&&Math.random()<.9&&(En.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:.6,color:[1,.55,.2],alpha:.9,spread:6,grow:1}),dn.emit(n.pos.x,n.pos.y,n.pos.z,{size:10,life:4,color:[.18,.16,.15],alpha:.7,spread:4,grow:1.8,rise:4})),n.fire&&!n.dead&&n.alive!==!1&&(n.bt=(n.bt||0)-e,n.bt<=0&&(n.bt=n.pilot||n.mate?1/16:n.kind==="bomber"||n.kind==="boss"?.12:.08,oS(n)))}function oS(n){let e=It(n.q,bt()),t=n.pos.clone(),i=n.kind==="bomber"||n.kind==="boss"||n.air===!1,s;if(i){if(!_||!_.alive||_.pos.distanceTo(n.pos)>1500)return;n.air===!1&&(t.y+=5),s=_.pos.clone().sub(t).normalize().add(new P(Ae(-.06,.06),Ae(-.06,.06),Ae(-.06,.06))).normalize()}else t.addScaledVector(e,10),s=e.add(new P(Ae(-.004,.004),Ae(-.004,.004),Ae(-.004,.004))).normalize();fi.add(t,s.multiplyScalar(i?1e3:1200).add(n.air===!1?bt():n.vel),"x",0,n.mate?ym:n.kind==="aa"?vm:dd),_&&n.pos.distanceTo(_.pos)<1400&&Math.random()<.5&&We.gun()}function aS(n,e,t){if(n.tgT=(n.tgT||0)-t,n.tgT>0&&n.tg&&(n.tg===e?e.alive:n.tg.alive&&k.mates.has(n.tg.pid)))return n.tg;n.tgT=2;let i=e,s=e.alive?n.pos.distanceTo(e.pos):1e12;for(let r of k.mates.values())if(r.alive){let o=n.pos.distanceTo(r.pos);o<s&&(s=o,i=r)}return n.tg=i}function Fm(n){let e=Dm(n),t=Vi(ui[e.jet]?e.jet:"viper",zr[e.paint]&&e.paint!=="red"?e.paint:"gray",!1);return t.userData.msls.forEach(i=>i.visible=!1),t.visible=!1,qe.add(t),t}function Om(n){let e=k.pilots.get(n);return e||(e={kind:"pilot",air:!0,net:!0,pilot:!0,pid:n,name:Qn(n),obj:Fm(n),pos:bt(),q:new Tt,vel:bt(),speed:250,hp:1,maxHp:1,dead:!0,id:Math.random(),hitT:0,tp:null,tq:new Tt,tv:bt(),lk:0},mt.push(e),k.pilots.set(n,e),e)}function Bm(n){let e=k.mates.get(n);return e||(e={mate:!0,air:!0,pid:n,name:Qn(n),obj:Fm(n),pos:bt(),q:new Tt,vel:bt(),speed:250,alive:!1,lock:{locked:!1,t:null},tp:null,tq:new Tt,tv:bt(),hp:1},k.mates.set(n,e),e)}function lS(n){let e=Lm[n[1]]||"fighter",t=!["sam","aa"].includes(e),i=e==="bomber"?Vs(!1):e==="boss"?Vs(!0):t?Vi(e==="ace"?"raptor":["viper","striker","viper"][n[0]%3],"red",!0):la(e);qe.add(i),i.userData.msls.forEach(r=>r.visible=!1);let s={kind:e,air:t,obj:i,net:!0,rep:!0,eid:n[0],pos:new P(n[2],n[3],n[4]),q:new Tt(n[5],n[6],n[7],n[8]),vel:bt(),speed:n[9],hp:1,maxHp:1,dead:!1,id:Math.random(),hitT:0,tp:null,tq:new Tt,tv:bt()};return mt.push(s),k.rep.set(n[0],s),s}function km(){k.mates.forEach(n=>qe.remove(n.obj)),k.mates.clear(),k.pilots.clear(),k.rep.clear()}function ah(n){!n||n==="e"||(k.score[n]=k.score[n]||{k:0,d:0}).k++}function zm(n,e){(k.score[n]=k.score[n]||{k:0,d:0}).d++;let t=e&&e!=="e"&&e!==n;t&&ah(e),n===wt?$t(t?`SHOT DOWN BY ${Qn(e)}`:"RESPAWNING IN 5",!0):e===wt?(G.kills++,$t(`SPLASH ONE! ${Qn(n)} DOWN`),We.win()):$t(t?`${Qn(e)} \u279C ${Qn(n)}`:`${Qn(n)} WENT DOWN`,!0),k.mode==="duel"&&t&&k.score[e].k>=k.target&&_a({t:"end",winner:e,s:k.score})}function Hm(n,e,t){let i=n/Math.max(1,e)*Math.PI*2+.4,s=k.mode==="duel",r=s?new P(Math.cos(i)*2700,1100+n%3*120,Math.sin(i)*2700):new P(Math.cos(i)*700,750+n%3*60,Math.sin(i)*700);if(t){let a=r,l=-1;for(let c=0;c<10;c++){let h=Ae(0,Math.PI*2),d=s?new P(Math.cos(h)*Ae(2200,3200),Ae(1e3,1500),Math.sin(h)*Ae(2200,3200)):new P(Math.cos(h)*800,Ae(750,950),Math.sin(h)*800),u=1e9;k.pilots.forEach(f=>{f.dead||(u=Math.min(u,f.pos.distanceTo(d)))}),u>l&&(l=u,a=d)}r.copy(a)}r.y=Math.max(r.y,xn.height(r.x,r.z)+450);let o=s?new P(0,r.y,0):new P(r.x*3,r.y+60,r.z*3);return{p:r,q:new Tt().setFromRotationMatrix(new lt().lookAt(r,o,Wn))}}function cS(){let n=Hm(0,1,!0);_.pos.copy(n.p),_.q.copy(n.q),_.camQ.copy(_.q),Ma(),Object.assign(_,{alive:!0,hp:_.maxHp,msl:_.mslMax,flares:_.flareMax,heat:0,over:!1,speed:260,deadT:0,lastBy:null,hitFlash:0}),_.vel.copy(It(_.q)).multiplyScalar(260),_.rate.set(0,0,0),uh(G.view,!0),$i(),$t("BACK IN THE FIGHT")}function hS(){Object.assign(k,{sq:0,esq:0,rsq:0,score:{},ended:!1,dmgOut:{},menu:!1}),k.order.forEach(e=>k.score[e]={k:0,d:0});let n=Hm(Math.max(0,k.order.indexOf(wt)),k.order.length);if(_.pos.copy(n.p),_.q.copy(n.q),_.camQ.copy(_.q),_.vel.copy(It(_.q)).multiplyScalar(_.speed),Ma(),k.order.forEach(e=>{e!==wt&&(k.mode==="duel"?Om(e):Bm(e))}),k.mode==="duel"){let e=k.order.length;re("#obj").textContent=`First to ${k.target} kills wins`,Ks(e>2?"FREE-FOR-ALL":"1V1 DOGFIGHT",`First to ${k.target} kills wins`)}else re("#obj").textContent="Protect the base together",Ks("DEFEND THE BASE",`${k.order.length} pilots \xB7 more pilots, more bandits`),k.host&&ei.push({t:3,f:hh});k.host&&(k.lobby.playing=!0,Xr())}function uS(){G.clearing=!0;let n=250*G.wave;G.score+=n,G.baseHp=Math.min(100,G.baseHp+10),qn({t:"wclr",w:G.wave,b:n}),Gm(G.wave,n),ei.push({t:5,f:hh})}function Gm(n,e){Ks(`WAVE ${n} CLEAR`,`+${e} \xB7 repaired & rearmed`),We.win(),_.alive&&(_.hp=Math.min(_.maxHp,_.hp+_.maxHp*.35),_.msl=_.mslMax,_.flares=_.flareMax,$i())}function dS(n){let e={t:"end",reason:n,w:G.wave,sc:G.score,s:k.score};qn(e),_a(e)}function _a(n){if(k.ended)return;k.ended=!0,G.mode="over",k.menu=!1,re("#pause").classList.remove("on"),document.body.classList.remove("playing"),document.pointerLockElement&&document.exitPointerLock(),We.silence();let e=n.s||k.score,t=Object.keys(e).filter(r=>k.metas[r]||r===wt).sort((r,o)=>e[o].k-e[r].k||e[r].d-e[o].d),i,s;k.mode==="duel"?(i=n.winner===wt?"VICTORY":n.winner?`${Qn(n.winner)} WINS`:"MATCH OVER",s=n.note||(n.winner===wt?"You own the sky.":"Shake it off. Run it back."),n.winner===wt&&We.win()):(i=n.reason==="host"?"HOST LEFT":"BASE DESTROYED",s=n.reason==="host"?"The host left the match.":`Held out until wave ${n.w||G.wave} \xB7 team score ${(n.sc??G.score).toLocaleString()}`),re("#mpoTitle").textContent=i,re("#mpoSub").textContent=s,re("#mpoTable").innerHTML=`<div class="h"><span>Pilot</span><span>${k.mode==="duel","Kills"}</span><span>Deaths</span></div>`+t.map((r,o)=>`<div class="${r===wt?"me":""}"><span>${o===0&&k.mode==="duel"?"\u{1F3C6} ":""}${xd(Qn(r))}</span><span>${e[r].k}</span><span>${e[r].d}</span></div>`).join(""),re("#mpOver").classList.add("on"),k.host&&(k.lobby.playing=!1,Xr())}function fS(){re("#mpOver").classList.remove("on"),Aa(),k.on&&(vs(".screen").forEach(n=>n.classList.remove("on")),re("#mp").classList.add("on"),xs())}function fh(n){let e=k.net;k.on=!1,k.net=null,k.menu=!1,e&&e.leave(),re("#mpOver").classList.remove("on"),re("#pause").classList.remove("on","mp"),n||Aa()}function pS(n){if(!(!_||!k.net)){if(k.sendT-=n,k.sendT<=0){k.sendT=1/15;let e=_.lock;qn({t:"s",sq:++k.sq,p:js(_.pos),q:[ms(_.q.x),ms(_.q.y),ms(_.q.z),ms(_.q.w)],v:Math.round(_.speed),a:_.alive?1:0,g:_.alive&&_.I&&_.I.gun&&!_.over?1:0,ab:_.ab?1:0,hp:Math.round(Math.max(0,_.hp)/_.maxHp*100),lk:_.alive&&e.locked&&e.t&&(e.t.pid||e.t.eid)||0},!1)}if(k.mode==="coop"&&k.host){if(k.esT-=n,k.esT<=0){k.esT=.1;let e=[];for(let t of mt)t.net||e.push([t.eid,Lm.indexOf(t.kind),...js(t.pos),ms(t.q.x),ms(t.q.y),ms(t.q.z),ms(t.q.w),Math.round(t.speed),Math.round(Math.max(0,t.hp)/t.maxHp*100),(t.dead?1:0)|(G.t-(t.fT??-9)<.25?2:0)]);qn({t:"es",sq:++k.esq,e,b:Math.round(G.baseHp),sc:G.score,w:G.wave},!1)}for(let e in k.dmgOut)k.net.sendTo(e,{t:"dmg",n:Math.round(k.dmgOut[e]*10)/10});k.dmgOut={}}}}function mS(n){if(!n)return null;if(n===wt)return _;if(n[0]==="e"&&/^e\d+$/.test(n)){let e=+n.slice(1);return mt.find(t=>t.eid===e&&!t.pilot)||null}return k.pilots.get(n)||k.mates.get(n)||null}function gS(n,e,t){if(k.on&&(k.mates.forEach(i=>{if(!i.alive)return;let s=gs(i.pos),r=i.pos.distanceTo(_.pos);if(!s.front||s.x<0||s.y<0||s.x>hn||s.y>Vt){eh(n,i.pos,Wr,e*.4,.8);return}n.strokeStyle=Wr,n.lineWidth=1.6,n.beginPath(),n.arc(s.x,s.y,9,0,7),n.stroke(),n.fillStyle=Wr,n.textAlign="center",n.font='700 12px "Share Tech Mono",monospace',n.fillText(`${i.name}  ${(r/1e3).toFixed(1)}km`,s.x,s.y-18),n.font='600 12px "Share Tech Mono",monospace'}),k.mode==="duel")){let i=[...k.pilots.values()].find(s=>!s.dead&&s.lk===wt);i&&(Math.floor(t*3)%2&&(n.fillStyle=qs,n.font='700 18px "Orbitron",sans-serif',n.textAlign="center",n.fillText(`\u26A0 ${i.name} HAS A LOCK ON YOU`,hn/2,Vt*.3),n.font='600 12px "Share Tech Mono",monospace'),_.lkT=(_.lkT||0)-.016,_.lkT<=0&&(_.lkT=.45,We.lockTick()))}}var dm="";function xS(){let n=Object.keys(k.score).filter(t=>t===wt||k.metas[t]).sort((t,i)=>k.score[i].k-k.score[t].k||k.score[t].d-k.score[i].d),e=`<div class="h"><span>${k.mode==="duel"?`FIRST TO ${k.target}`:"SQUAD"}</span><span>K</span><span>D</span></div>`+n.map(t=>`<div class="${t===wt?"me":""}"><span>${xd(Qn(t))}</span><span>${k.score[t].k}</span><span>${k.score[t].d}</span></div>`).join("");e!==dm&&(dm=e,re("#mpBoard").innerHTML=e)}var _S={duel:["\u2694","DOGFIGHT","1v1 duel \u2014 free-for-all with 3+ pilots. First to the kill target wins. Respawn after 5 s."],coop:["\u{1F6E1}","DEFEND THE BASE","Team up against waves of bandits, bombers and SAM sites. Every extra pilot brings more and tougher enemies."]};function Xr(n){if(!k.on||!k.host)return;let e={t:"lob",...k.lobby};n?k.net.sendTo(n,e):qn(e),xs()}function xs(){if(!k.net){re("#mpJoin").hidden=!1,re("#mpRoom").hidden=!0;return}re("#mpJoin").hidden=!0,re("#mpRoom").hidden=!1;let n=k.lobby,e=k.net.isHost(),t=k.net.players();re("#mpCodeShow").textContent=k.net.code,re("#mpModes").innerHTML=Object.entries(_S).map(([r,[o,a,l]])=>`<button class="mcard ${n.mode===r?"on":""}" data-mode="${r}" ${e?"":"disabled"}><i>${o}</i><b>${a}</b><small>${l}</small></button>`).join(""),re("#mpTgtL").textContent=n.mode==="duel"?"Kills to win":"Difficulty",re("#mpTgt").innerHTML=n.mode==="duel"?[3,5,10].map(r=>`<button class="chip ${n.target===r?"on":""}" data-tgt="${r}" ${e?"":"disabled"}>${r}</button>`).join(""):Object.entries(Zi).map(([r,o])=>`<button class="chip ${n.diff===r?"on":""}" data-diff="${r}" ${e?"":"disabled"}>${o.name}</button>`).join(""),re("#mpList").innerHTML=t.map((r,o)=>`<div class="pl"><b>${xd(r.name||"Pilot")}</b><span>${(ui[r.jet]||ui.viper).name}</span>${o===0?"<em>HOST</em>":""}${r.id===wt?'<em class="you">YOU</em>':""}</div>`).join("");let i=n.mode==="duel"?2:1,s=t.length;re("#mpStart").hidden=!e,re("#mpStart").disabled=s<i,re("#mpNote").textContent=n.playing&&!Pn()?"A match is in progress \u2014 you will join the next one.":e?s<i?"Share the room code \u2014 you need at least 2 pilots for a dogfight.":n.mode==="coop"&&s>1?`${s} pilots: about ${Math.round((1+.55*(s-1))*100)}% more bandits, ${Math.round(15*(s-1))}% tougher.`:"Ready when you are.":"Waiting for the host to start\u2026"}async function ud(n){let e=(re("#mpName").value.trim()||"Pilot").slice(0,14);qi.set("jkstrike-name",e);let t=re("#mpErr");t.textContent="Connecting\u2026",We.init();let i;try{i=new Xc(ih.has("local"))}catch(a){t.textContent=a.message;return}let s={id:wt,name:e,jet:Re.jet,paint:Re.paint},r=n==="join"?re("#mpCode").value.trim():sd(),o;if(n==="join"&&!/^\d{4}$/.test(r)){t.textContent="Room codes are 4 digits.";return}for(let a=0;a<4&&(o=await i.join(r,s,n),!(o.ok||o.err!=="taken"));a++)r=sd();if(!o.ok){t.textContent=o.err;return}t.textContent="",k.net=i,k.on=!0,k.lobby={mode:"duel",target:5,diff:Re.diff,playing:!1},history.replaceState(null,"","?room="+r+(ih.has("local")?"&local":"")),i.on("presence",a=>{a.forEach(l=>k.metas[l.id]=l),k.host=i.isHost(),xs()}),i.on("joined",a=>{k.host&&Xr(a)}),i.on("left",a=>{if(k.mode==="duel"){let l=k.pilots.get(a);l&&(qe.remove(l.obj),mt=mt.filter(c=>c!==l),k.pilots.delete(a)),Pn()&&!k.pilots.size&&_a({winner:wt,note:"Everyone else left the match."})}else{let l=k.mates.get(a);l&&(qe.remove(l.obj),k.mates.delete(a)),Pn()&&k.order[0]===a&&_a({reason:"host"})}k.order=k.order.filter(l=>l!==a),k.host=i.isHost(),xs()}),i.on("lob",(a,l)=>{if(l!==i.hostId())return;let{t:c,...h}=a;k.lobby=h,xs()}),i.on("start",(a,l)=>{l===i.hostId()&&(k.mode=a.mode,k.target=a.target,Re.diff=Zi[a.diff]?a.diff:Re.diff,k.order=a.order,k.host=i.isHost(),vs(".modal").forEach(c=>c.classList.remove("on")),wa(!0))}),i.on("s",(a,l)=>{if(!Pn()||!k.order.includes(l))return;let c=k.mode==="duel"?Om(l):Bm(l);if(a.sq<=(c.sq||0))return;c.sq=a.sq;let h=!c.tp;c.tp=c.tp||bt(),c.tp.set(a.p[0],a.p[1],a.p[2]),c.tq.set(a.q[0],a.q[1],a.q[2],a.q[3]).normalize(),c.tv.copy(It(c.tq)).multiplyScalar(a.v);let d=!!a.a,u=c.pilot?!c.dead:c.alive;d&&(!u||h)&&(c.pos.copy(c.tp),c.q.copy(c.tq),c.vel.copy(c.tv)),c.pilot?(c.dead=!d,c.obj.visible=d):c.alive=d,c.fire=!!a.g,c.ab=!!a.ab,c.hp=a.hp/100,c.lk=a.lk,c.mate&&(c.lock.locked=!!a.lk,c.lock.t=a.lk&&mt.find(f=>f.eid===a.lk)||null)}),i.on("hit",(a,l)=>{Pn()&&rh(a.n,l)}),i.on("dmg",a=>{Pn()&&rh(a.n,"e")}),i.on("die",(a,l)=>{if(!Pn())return;let c=k.pilots.get(l)||k.mates.get(l);c&&(c.pilot?(c.dead=!0,c.obj.visible=!1):c.alive=!1,a.p&&Xi(new P(...a.p),2)),Yt.forEach(h=>{h.target===c&&(h.target=null)}),zm(l,a.by)}),i.on("msl",(a,l)=>{if(!Pn())return;let c=aa();qe.add(c);let h=mS(a.tid),d=new P(...a.p);Yt.push({mesh:c,pos:d,dir:new P(...a.d).normalize(),speed:a.sp,target:h,owner:"x",by:a.o,life:a.life||9,armed:.25,dmg:a.dmg,id:a.id}),d.distanceTo(_.pos)<3e3&&We.launch(),h===_&&$t("MISSILE INBOUND",!0)}),i.on("mx",a=>{let l=Yt.findIndex(h=>h.id===a.id);if(l<0)return;let c=Yt[l];Xi(c.pos,.6),qe.remove(c.mesh),Yt.splice(l,1)}),i.on("flr",(a,l)=>{if(!Pn())return;let c=k.pilots.get(l)||k.mates.get(l),h=Xn.length;a.v.forEach(d=>Xn.push({pos:new P(...a.p),vel:new P(...d),life:3.5})),c&&Nm(c,h),new P(...a.p).distanceTo(_.pos)<1500&&We.flare()}),i.on("eh",(a,l)=>{if(!k.host||!Pn())return;let c=mt.find(h=>!h.net&&h.eid===a.id);c&&$r(c,a.n,!!a.m,l)}),i.on("ek",a=>{if(!Pn()||k.host)return;let l=Vr[a.kind]?.label||"BANDIT";ah(a.by),a.by===wt?(G.kills++,$t(`${l} DOWN  +${a.pts}`)):$t(`${Qn(a.by)}: ${l} DOWN +${a.pts}`)}),i.on("es",a=>{if(!Pn()||k.host||a.sq<=k.rsq)return;k.rsq=a.sq;let l=new Set;for(let c of a.e){l.add(c[0]);let h=k.rep.get(c[0])||lS(c);h.tp=h.tp||bt(),h.tp.set(c[2],c[3],c[4]),h.tq.set(c[5],c[6],c[7],c[8]).normalize(),h.tv.copy(It(h.tq)).multiplyScalar(h.air?c[9]:0),h.hp=c[10]/100,c[11]&1&&!h.dead&&(h.dead=!0,Xi(h.pos,h.kind==="boss"?2.4:h.kind==="bomber"?1.4:h.air?.8:1.2),Yt.forEach(u=>{u.target===h&&(u.target=null)})),h.fire=!!(c[11]&2)}for(let[c,h]of k.rep)l.has(c)||((h.air||!h.dead)&&Xi(h.pos,h.kind==="boss"?3:h.kind==="bomber"?2:1.3),h.remove=!0,k.rep.delete(c));a.b<G.baseHp&&Rm(),G.baseHp=a.b,G.score=a.sc,G.wave=a.w}),i.on("wave",a=>{!Pn()||k.host||(G.wave=a.w,G.clearing=!1,Ks(`WAVE ${a.w}: ${a.name}`,a.obj),re("#obj").textContent=a.obj)}),i.on("wclr",a=>{Pn()&&!k.host&&Gm(a.w,a.b)}),i.on("end",(a,l)=>{Pn()&&l===i.hostId()&&_a(a)}),k.host=i.isHost(),xs()}function Vm(){vs(".screen").forEach(e=>e.classList.remove("on")),re("#mp").classList.add("on"),re("#mpName").value=qi.get("jkstrike-name","")||"";let n=ih.get("room");n&&!k.net&&(re("#mpCode").value=n),xs()}re("#mp").onclick=n=>{let e=n.target.closest("button");if(!e||e.disabled)return;We.init(),We.click();let t=e.dataset;if(e.id==="mpCreate"&&ud("create"),e.id==="mpJoinB"&&ud("join"),e.id==="mpBack"&&(vs(".screen").forEach(i=>i.classList.remove("on")),re("#menu").classList.add("on")),e.id==="mpLeave"&&(fh(!0),history.replaceState(null,"",location.pathname),xs()),e.id==="mpCopy"){let i=location.origin+location.pathname+"?room="+k.net.code;(navigator.clipboard?navigator.clipboard.writeText(i):Promise.reject()).then(()=>{e.textContent="Copied!",setTimeout(()=>e.textContent="Copy link",1500)}).catch(()=>{e.textContent=k.net.code})}if(!(!k.net||!k.net.isHost())&&(t.mode&&(k.lobby.mode=t.mode,Xr()),t.tgt&&(k.lobby.target=+t.tgt,Xr()),t.diff&&(k.lobby.diff=t.diff,Xr()),e.id==="mpStart")){let i=k.lobby,s={t:"start",mode:i.mode,target:i.target,diff:i.diff,order:k.net.players().map(r=>r.id)};qn(s),k.net.emit("start",s,wt)}};re("#mpCode").addEventListener("keydown",n=>{n.key==="Enter"&&ud("join")});re("#mpOver").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(We.click(),e==="lobby"?fS():fh())};ih.get("room")&&setTimeout(Vm,300);function Wm(){let n=innerWidth,e=innerHeight;Tn.setPixelRatio(bi),Tn.setSize(n,e,!1),et.aspect=n/e,et.updateProjectionMatrix(),xa=Math.min(devicePixelRatio||1,1.5),hn=n,Vt=e,Ys.width=n*xa,Ys.height=e*xa,Ys.style.width=n+"px",Ys.style.height=e+"px"}addEventListener("resize",Wm);document.addEventListener("visibilitychange",()=>{document.hidden&&G.mode==="play"&&!k.on&&Zs()});function Zc(n,e,t){let i=n.userData;i.flames.length&&(i.flames[0].userData.b===void 0&&i.flames.forEach(s=>s.userData.b=s.scale.x),i.flames.forEach((s,r)=>s.scale.set(s.userData.b,s.userData.b,s.userData.b*e*(r%2?1:1.12))),i.glowMat&&(i.glowMat.opacity=t?1:.6),i.flameMat&&_&&n===_.obj&&(i.flameMat.opacity=t?.9:.5,i.flameMat.color.set(t?"#ffb45e":"#ff9a4a")))}var Jc=16,Kc=0;function yS(n){if(Re.quality!=="auto"||(Jc=_s(Jc,n*1e3,.05),Kc-=n,Kc>0))return;let e=Math.min(devicePixelRatio||1,od.auto.max),t=bi;Jc>21&&bi>.6?t=Math.max(.6,bi-.15):Jc<14.5&&bi<e&&(t=Math.min(e,bi+.1)),t!==bi?(bi=t,Tn.setPixelRatio(bi),Tn.setSize(innerWidth,innerHeight,!1),Kc=2):Kc=.5}var da=bt(),nh=0;function vS(){nh++;let n=(e,t,i)=>{nh%i||e.userData.glows.forEach(s=>{da.copy(s.position),e.userData.body.localToWorld(da),Zr.emit(da.x,da.y,da.z,{size:2.6,life:5.5,color:[1,1,1],alpha:Math.min(.55,(t.y-1550)/900),grow:1.2,drag:0})})};if(_.alive&&_.pos.y>1600&&n(_.obj,_.pos,1),mt.forEach(e=>{e.air&&!e.dead&&e.pos.y>1600&&e.pos.distanceTo(_.pos)<3500&&n(e.obj,e.pos,2)}),k.mates.forEach(e=>{e.alive&&e.pos.y>1600&&e.pos.distanceTo(_.pos)<3500&&n(e.obj,e.pos,2)}),_.alive&&_.alt<90&&_.speed>120&&nh%2===0){let e=It(_.q),t=_.pos.x-e.x*25,i=_.pos.z-e.z*25,s=xn.height(t,i)+3;dn.emit(t,s,i,{size:10+Math.random()*8,life:2.6,color:[.86,.7,.5],alpha:.5*(1-_.alt/90),spread:14,grow:1.4,vy:10,drag:1.2})}}var fm=performance.now(),Xm=0;setInterval(()=>{let n=performance.now();k.on&&G.mode==="play"&&n-Xm>300&&_d(n,!0)},60);function _d(n,e){e||(Xm=n,requestAnimationFrame(_d));let t=(n-fm)/1e3,i=Math.min(.05,t);fm=n;let s=n/1e3;if(t<.2&&yS(t),G.mode==="play"){G.slow>0&&(G.slow-=i,i*=.3),G.slowCd-=i;let a=Math.min(3,Math.ceil(i*60-.01));for(let l=0;l<a;l++)wm(i/a);sS(i),k.on&&pS(i)}G.mode==="over"&&_&&(_.deadT+=i);let r=_?_.pos:un?un.position:bt();_&&(_.obj.position.copy(_.pos),_.obj.quaternion.copy(_.q),_.obj.userData.body.rotation.z=-(_.rate?.z||0)*.04,Zc(_.obj,_.ab?1.35+Math.random()*.3:.3+_.thr*.45,_.ab),_.obj.userData.strobe.visible=s*1.4%1<.08),un&&(un.position.y=1150+Math.sin(s*.8)*2,un.userData.body.rotation.z=Math.sin(s*.6)*.06,Zc(un,.45+Math.random()*.08,!1)),mt.forEach(a=>{a.obj.position.copy(a.pos),a.obj.quaternion.copy(a.q),a.air&&(Zc(a.obj,.55+Math.random()*.15,!1),a.obj.userData.strobe.visible=(s*1.2+a.id)%1<.08)}),k.mates.forEach(a=>{a.obj.position.copy(a.pos),a.obj.quaternion.copy(a.q),a.obj.visible=a.alive&&G.mode!=="menu",Zc(a.obj,a.ab?1.35:.55,a.ab),a.obj.userData.strobe.visible=s*1.3%1<.08}),Ea.userData.radar.rotation.y=s*1.2,va.forEach(a=>{a.t<=0||(a.t-=i,a.l.intensity=a.t<=0?0:a.l.intensity*Math.exp(-i*9))}),ZM(i),Yi.position.copy(r).addScaledVector(mm,1200),Yi.target.position.copy(r),gm.position.copy(et.position);let o=Tn.domElement.height/(2*Math.tan(et.fov*Math.PI/360));dn.update(i,jc,o*2),En.update(i,jc,o*2),Zr.update(i,jc,o*2),xm.material.uniforms.scale.value=o,G.mode==="play"&&vS(),fi.draw(),_&&G.mode==="play"&&We.engine(_.alive?_.thr:0,_.ab&&_.alive,_.alive?_.speed:0,G.view==="first"),G.mode==="play"&&Re.control==="aim"&&!Bt&&!k.menu&&nh%30===0&&re("#clickfly").classList.toggle("on",!document.pointerLockElement),G.mode==="play"||G.mode==="paused"?(KM(G.mode==="play"?i:0,s),tS(s)):Am.clearRect(0,0,Ys.width,Ys.height),e||Tn.render(qe,et)}Wm();Aa();Kp();{let n=["viper","raptor","striker"].map(t=>Vi(t,"red",!0)).concat([Vs(!1),Vs(!0),la("sam"),la("aa")]),e=aa();n.forEach((t,i)=>{t.position.set(i*60,1200,0),qe.add(t)}),qe.add(e),En.emit(0,1200,0,{must:!0}),dn.emit(0,1200,0,{must:!0}),Zr.emit(0,1200,0,{must:!0});try{Tn.compile(qe,et)}catch{}n.forEach(t=>qe.remove(t)),qe.remove(e)}requestAnimationFrame(_d);setTimeout(()=>{let n=re("#loading");n.style.opacity=0,n.style.pointerEvents="none",setTimeout(()=>n.remove(),600)},200);window.__jet={MP:k,myId:wt,get missiles(){return Yt},renderer:Tn,scene:qe,cam:et,get menuJet(){return un},get G(){return G},get P(){return _},get enemies(){return mt},step:wm,startGame:wa,fireMissile:ch,dropFlares:md,toggleView:dh,choosePerk:gd,S:Re,keys:qr,mouse:Un,aim:gn,spawnPickup:VM,get pickups(){return wi}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
