var Ad=0,yh=1,Rd=2;var xs=1,Cd=2,ur=3,Zi=0,Wt=1,Dn=2,ys=0,$i=1,Sn=2,vh=3,Mh=4,Pd=5;var vs=100,Id=101,Ld=102,Dd=103,Nd=104,Ud=200,Fd=201,Od=202,Bd=203,Sh=204,bh=205,zd=206,kd=207,Hd=208,Gd=209,Vd=210,Wd=211,Xd=212,qd=213,Yd=214,Ao=0,Ro=1,Co=2,Ks=3,Po=4,Io=5,Lo=6,Do=7,cl=0,Zd=1,$d=2,ai=0,Eh=1,Th=2,wh=3,ya=4,Ah=5,Rh=6,Ch=7;var Ph=300,Ms=301,dr=302,hl=303,ul=304,Zn=1e3,ti=1001,No=1002,Qt=1003,Jd=1004;var va=1005;var yn=1006,dl=1007;var Ri=1008;var Tn=1009,Ih=1010,Lh=1011,fr=1012,fl=1013,Jn=1014,On=1015,Kn=1016,pl=1017,ml=1018,Ss=1020,Dh=35902,Nh=35899,Uh=1021,Fh=1022,jn=1023,bi=1026,Ci=1027,gl=1028,_l=1029,Ji=1030,xl=1031;var yl=1033,Ma=33776,Sa=33777,ba=33778,Ea=33779,vl=35840,Ml=35841,Sl=35842,bl=35843,El=36196,Tl=37492,wl=37496,Al=37488,Rl=37489,Ta=37490,Cl=37491,Pl=37808,Il=37809,Ll=37810,Dl=37811,Nl=37812,Ul=37813,Fl=37814,Ol=37815,Bl=37816,zl=37817,kl=37818,Hl=37819,Gl=37820,Vl=37821,Wl=36492,Xl=36494,ql=36495,Yl=36283,Zl=36284,wa=36285,$l=36286;var kr=2300,Uo=2301,To=2302,oh=2303,lh=2400,ch=2401,hh=2402;var Kd=3200;var Aa=0,jd=1,Pi="",Tt="srgb",Hr="srgb-linear",Gr="linear",xt="srgb";var wo=7680;var Qd=519,ef=512,tf=513,nf=514,Oh=515,sf=516,rf=517,Bh=518,zh=519,kh=35044,bs=35048;var Hh="300 es",Fn=2e3,js=2001;function jp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Vr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){let n=Vr("canvas");return n.style.display="block",n}var Xu={},Qs=null;function Wr(...n){let e="THREE."+n.shift();Qs?Qs("log",e,...n):console.log(e,...n)}function of(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ve(...n){n=of(n);let e="THREE."+n.shift();if(Qs)Qs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=of(n);let e="THREE."+n.shift();if(Qs)Qs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function us(...n){let e=n.join(" ");e in Xu||(Xu[e]=!0,Ve(...n))}function lf(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var cf={[Ao]:Ao,[Co]:Lo,[Po]:Po,[Ks]:Io,[Ro]:Ro,[Lo]:Co,[Do]:Do,[Io]:Ks},ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Uc=Math.PI/180,Fo=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function em(n,e){return(n%e+e)%e}function Fc(n,e,t){return(1-t)*n+t*e}function hf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Jl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function uf(n,e){if(e.constructor===Float32Array)return n;let t=Jl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function df(n,e){if(e.constructor===Float32Array)return n;let t=Jl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Yh=class Yh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yh.prototype.isVector2=!0;var se=Yh,Ft=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],p=r[a+2],v=r[a+3];if(d!==v||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*v;m<0&&(h=-h,f=-f,p=-p,v=-v,m=-m);let g=1-o;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,o=Math.sin(o*x)/M,l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+v*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+v*o;let x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zh=class Zh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oc.copy(this).projectOnVector(e),this.sub(Oc)}reflect(e){return this.sub(Oc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zh.prototype.isVector3=!0;var I=Zh,Oc=new I,qu=new Ft,$h=class $h{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],v=s[0],m=s[3],g=s[6],x=s[1],M=s[4],y=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*v+o*x+l*A,r[3]=a*m+o*M+l*w,r[6]=a*g+o*y+l*_,r[1]=c*v+u*x+d*A,r[4]=c*m+u*M+d*w,r[7]=c*g+u*y+d*_,r[2]=h*v+f*x+p*A,r[5]=h*m+f*M+p*w,r[8]=h*g+f*y+p*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=d*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bc.makeScale(e,t)),this}rotate(e){return us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bc.makeRotation(-e)),this}translate(e,t){return us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$h.prototype.isMatrix3=!0;var Ze=$h,Bc=new Ze,Yu=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zu=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){let n={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=Js(s.r),s.g=Js(s.g),s.b=Js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Hr]:{primaries:e,whitePoint:i,transfer:Gr,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tt},outputColorSpaceConfig:{drawingBufferColorSpace:Tt}},[Tt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:Yu,fromXYZ:Zu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tt}}}),n}var ut=tm();function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ls,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ls===void 0&&(Ls=Vr("canvas")),Ls.width=e.width,Ls.height=e.height;let s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ls}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Si(t[i]/255)*255):t[i]=Si(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},nm=0,er=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zc(s[a].image)):r.push(zc(s[a]))}else r=zc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function zc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}var im=0,kc=new I,vn=class n extends ni{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,r=yn,a=Ri,o=jn,l=Tn,c=n.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Ki(),this.name="",this.source=new er(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ph)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zn:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case No:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zn:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case No:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ph;vn.DEFAULT_ANISOTROPY=1;var Jh=class Jh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,A=(g+1)/2,w=(u+h)/4,_=(d+v)/4,S=(p+m)/4;return M>y&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=_/i):y>A?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=w/s,r=S/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=S/r),this.set(i,s,r,t),this}let x=Math.sqrt((m-p)*(m-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jh.prototype.isVector4=!0;var wt=Jh,Bo=class extends ni{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new vn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new er(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Bo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Xr=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zo=class extends vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ll=class ll{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,p,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,p,v,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,p,v,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ll().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),a=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,p=o*u,v=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){let h=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,i){let s=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Ui.crossVectors(i,Rn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Ui.crossVectors(i,Rn)),Ui.normalize(),Ja.crossVectors(Rn,Ui),s[0]=Ui.x,s[4]=Ja.x,s[8]=Rn.x,s[1]=Ui.y,s[5]=Ja.y,s[9]=Rn.y,s[2]=Ui.z,s[6]=Ja.z,s[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],v=i[6],m=i[10],g=i[14],x=i[3],M=i[7],y=i[11],A=i[15],w=s[0],_=s[4],S=s[8],L=s[12],C=s[1],D=s[5],z=s[9],G=s[13],R=s[2],O=s[6],U=s[10],F=s[14],Y=s[3],H=s[7],J=s[11],te=s[15];return r[0]=a*w+o*C+l*R+c*Y,r[4]=a*_+o*D+l*O+c*H,r[8]=a*S+o*z+l*U+c*J,r[12]=a*L+o*G+l*F+c*te,r[1]=u*w+d*C+h*R+f*Y,r[5]=u*_+d*D+h*O+f*H,r[9]=u*S+d*z+h*U+f*J,r[13]=u*L+d*G+h*F+f*te,r[2]=p*w+v*C+m*R+g*Y,r[6]=p*_+v*D+m*O+g*H,r[10]=p*S+v*z+m*U+g*J,r[14]=p*L+v*G+m*F+g*te,r[3]=x*w+M*C+y*R+A*Y,r[7]=x*_+M*D+y*O+A*H,r[11]=x*S+M*z+y*U+A*J,r[15]=x*L+M*G+y*F+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],m=e[11],g=e[15],x=l*f-c*h,M=o*f-c*d,y=o*h-l*d,A=a*f-c*u,w=a*h-l*u,_=a*d-o*u;return t*(v*x-m*M+g*y)-i*(p*x-m*A+g*w)+s*(p*M-v*A+g*_)-r*(p*y-v*w+m*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],m=e[14],g=e[15],x=t*o-i*a,M=t*l-s*a,y=t*c-r*a,A=i*l-s*o,w=i*c-r*o,_=s*c-r*l,S=u*v-d*p,L=u*m-h*p,C=u*g-f*p,D=d*m-h*v,z=d*g-f*v,G=h*g-f*m,R=x*G-M*z+y*D+A*C-w*L+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(o*G-l*z+c*D)*O,e[1]=(s*z-i*G-r*D)*O,e[2]=(v*_-m*w+g*A)*O,e[3]=(h*w-d*_-f*A)*O,e[4]=(l*C-a*G-c*L)*O,e[5]=(t*G-s*C+r*L)*O,e[6]=(m*y-p*_-g*M)*O,e[7]=(u*_-h*y+f*M)*O,e[8]=(a*z-o*C+c*S)*O,e[9]=(i*C-t*z-r*S)*O,e[10]=(p*w-v*y+g*x)*O,e[11]=(d*y-u*w-f*x)*O,e[12]=(o*L-a*D-l*S)*O,e[13]=(t*D-i*L+s*S)*O,e[14]=(v*M-p*A-m*x)*O,e[15]=(u*A-d*M+h*x)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,v=a*u,m=a*d,g=o*d,x=l*c,M=l*u,y=l*d,A=i.x,w=i.y,_=i.z;return s[0]=(1-(v+g))*A,s[1]=(f+y)*A,s[2]=(p-M)*A,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(h+g))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(p+M)*_,s[9]=(m-x)*_,s[10]=(1-(h+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ds.set(s[0],s[1],s[2]).length(),o=Ds.set(s[4],s[5],s[6]).length(),l=Ds.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Wn.copy(this);let c=1/a,u=1/o,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,t.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Fn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===Fn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===js)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Fn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===Fn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===js)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ll.prototype.isMatrix4=!0;var ot=ll,Ds=new I,Wn=new ot,sm=new I(0,0,0),rm=new I(1,1,1),Ui=new I,Ja=new I,Rn=new I,$u=new ot,Ju=new Ft,rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ju.setFromEuler(this),this.setFromQuaternion(Ju,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},am=0,Ku=new I,Ns=new Ft,gi=new ot,Ka=new I,Rr=new I,om=new I,lm=new Ft,ju=new I(1,0,0),Qu=new I(0,1,0),ed=new I(0,0,1),td={type:"added"},cm={type:"removed"},Us={type:"childadded",child:null},Hc={type:"childremoved",child:null},Pt=class n extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new rn,i=new Ft,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Ze}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(ju,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Ku.copy(e).applyQuaternion(this.quaternion),this.position.add(Ku.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ju,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ka.copy(e):Ka.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Rr,Ka,this.up):gi.lookAt(Ka,Rr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(gi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Us.child=e,this.dispatchEvent(Us),Us.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new I(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dt=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},tr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Dt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Gc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Le=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=em(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Gc(a,r,e+1/3),this.g=Gc(a,r,e),this.b=Gc(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=Tt){function i(r){r!==void 0&&parseFloat(r)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let i=ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return ut.workingToColorSpace(un.copy(this),e),Math.round(it(un.r*255,0,255))*65536+Math.round(it(un.g*255,0,255))*256+Math.round(it(un.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(un.copy(this),t);let i=un.r,s=un.g,r=un.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Tt){ut.workingToColorSpace(un.copy(this),e);let t=un.r,i=un.g,s=un.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(ja);let i=Fc(Fi.h,ja.h,t),s=Fc(Fi.s,ja.s,t),r=Fc(Fi.l,ja.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Le;Le.NAMES=ff;var Yr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ds=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Xn=new I,_i=new I,Vc=new I,xi=new I,Fs=new I,Os=new I,nd=new I,Wc=new I,Xc=new I,qc=new I,Yc=new wt,Zc=new wt,$c=new wt,Mi=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Xn.subVectors(e,t),s.cross(Xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Xn.subVectors(s,t),_i.subVectors(i,t),Vc.subVectors(e,t);let a=Xn.dot(Xn),o=Xn.dot(_i),l=Xn.dot(Vc),c=_i.dot(_i),u=_i.dot(Vc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Yc.setScalar(0),Zc.setScalar(0),$c.setScalar(0),Yc.fromBufferAttribute(e,t),Zc.fromBufferAttribute(e,i),$c.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Yc,r.x),a.addScaledVector(Zc,r.y),a.addScaledVector($c,r.z),a}static isFrontFacing(e,t,i,s){return Xn.subVectors(i,t),_i.subVectors(e,t),Xn.cross(_i).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Xn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Fs.subVectors(s,i),Os.subVectors(r,i),Wc.subVectors(e,i);let l=Fs.dot(Wc),c=Os.dot(Wc);if(l<=0&&c<=0)return t.copy(i);Xc.subVectors(e,s);let u=Fs.dot(Xc),d=Os.dot(Xc);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Fs,a);qc.subVectors(e,r);let f=Fs.dot(qc),p=Os.dot(qc);if(p>=0&&f<=p)return t.copy(r);let v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Os,o);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return nd.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(nd,o);let g=1/(m+v+h);return a=v*g,o=h*g,t.copy(i).addScaledVector(Fs,a).addScaledVector(Os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ii=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qa.copy(i.boundingBox)),Qa.applyMatrix4(e.matrixWorld),this.union(Qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),eo.subVectors(this.max,Cr),Bs.subVectors(e.a,Cr),zs.subVectors(e.b,Cr),ks.subVectors(e.c,Cr),Oi.subVectors(zs,Bs),Bi.subVectors(ks,zs),as.subVectors(Bs,ks);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-as.z,as.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,as.z,0,-as.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-as.y,as.x,0];return!Jc(t,Bs,zs,ks,eo)||(t=[1,0,0,0,1,0,0,0,1],!Jc(t,Bs,zs,ks,eo))?!1:(to.crossVectors(Oi,Bi),t=[to.x,to.y,to.z],Jc(t,Bs,zs,ks,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,Qa=new ii,Bs=new I,zs=new I,ks=new I,Oi=new I,Bi=new I,as=new I,Cr=new I,eo=new I,to=new I,os=new I;function Jc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){os.fromArray(n,r);let o=s.x*Math.abs(os.x)+s.y*Math.abs(os.y)+s.z*Math.abs(os.z),l=e.dot(os),c=t.dot(os),u=i.dot(os);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ht=new I,no=new se,um=0,Ct=class extends ni{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=On,this.version=0,this._normalizationScale=e!==void 0?Jl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)no.fromBufferAttribute(this,t),no.applyMatrix3(e),this.setXY(t,no.x,no.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):df(e,this.array)}};var Zr=class extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var $r=class extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Xe=class extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}},dm=new ii,Pr=new I,Kc=new I,Ei=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):dm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);let t=Pr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Kc)),this.expandByPoint(Pr.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},fm=0,Un=new ot,jc=new Pt,Hs=new I,Cn=new ii,Ir=new ii,jt=new I,yt=class n extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jp(e)?$r:Zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Cn.min,Ir.min),Cn.expandByPoint(jt),jt.addVectors(Cn.max,Ir.max),Cn.expandByPoint(jt)):(Cn.expandByPoint(Ir.min),Cn.expandByPoint(Ir.max))}Cn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Hs.fromBufferAttribute(e,c),jt.add(Hs)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ct(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new I,l[L]=new I;let u=new I,d=new I,h=new I,f=new se,p=new se,v=new se,m=new I,g=new I;function x(L,C,D){c[L]=c[C]=c[D]=1,u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),v.fromBufferAttribute(r,D),d.sub(u),h.sub(u),p.sub(f),v.sub(f);let z=1/(p.x*v.y-v.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(z),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(z),o[L].add(m),o[C].add(m),o[D].add(m),l[L].add(g),l[C].add(g),l[D].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,C=M.length;L<C;++L){let D=M[L],z=D.start,G=D.count;for(let R=z,O=z+G;R<O;R+=3)x(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let y=new I,A=new I,w=new I,_=new I;function S(L){w.fromBufferAttribute(s,L),_.copy(w);let C=o[L];y.copy(C),y.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(_,C);let z=A.dot(l[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,z)}for(let L=0,C=i.count;L<C;++L)c[L]&&S(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Ct(h,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=id(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function id(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ki()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var xn=new I,nr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Jl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Wr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Wr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):uf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):df(e,this.data.array)}},Qc=new I,pm=new I,mm=new Ze,Yn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Qc.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mm.getNormalMatrix(e),s=this.coplanarPoint(Qc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},gm=0,$n=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=$i,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=bh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wo,this.stencilZFail=wo,this.stencilZPass=wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Yn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},si=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Lr=new I,Vs=new I,Ws=new I,Xs=new se,Dr=new se,pf=new ot,io=new I,Nr=new I,so=new I,sd=new se,eh=new se,rd=new se,ki=class extends Pt{constructor(e=new si){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jr(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new nr(i,3,0,!1)),Gs.setAttribute("uv",new nr(i,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ro(io.set(-.5,-.5,0),Ws,a,Vs,s,r),ro(Nr.set(.5,-.5,0),Ws,a,Vs,s,r),ro(so.set(.5,.5,0),Ws,a,Vs,s,r),sd.set(0,0),eh.set(1,0),rd.set(1,1);let o=e.ray.intersectTriangle(io,Nr,so,!1,Lr);if(o===null&&(ro(Nr.set(-.5,.5,0),Ws,a,Vs,s,r),eh.set(0,1),o=e.ray.intersectTriangle(io,so,Nr,!1,Lr),o===null))return;let l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:Mi.getInterpolation(Lr,io,Nr,so,sd,eh,rd,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ro(n,e,t,i,s,r){Xs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Dr.x=r*Xs.x-s*Xs.y,Dr.y=s*Xs.x+r*Xs.y):Dr.copy(Xs),n.copy(e),n.x+=Dr.x,n.y+=Dr.y,n.applyMatrix4(pf)}var vi=new I,th=new I,ao=new I,oo=new I,Kr=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){th.copy(e).add(t).multiplyScalar(.5),ao.copy(t).sub(e).normalize(),oo.copy(this.origin).sub(th);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ao),o=oo.dot(this.direction),l=-oo.dot(ao),c=oo.lengthSq(),u=Math.abs(1-a*a),d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let v=1/u;d*=v,h*=v,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(th).addScaledVector(ao,h),f}intersectSphere(e,t){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);let i=vi.dot(this.direction),s=vi.dot(vi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,v=t.y-a.y,m=t.z-a.z,g=i.x-a.x,x=i.y-a.y,M=i.z-a.z,y=Math.abs(l),A=Math.abs(c),w=Math.abs(u),_,S,L,C,D,z,G,R,O,U,F,Y;if(y>=A&&y>=w?(L=l,z=d,O=p,Y=g,l>=0?(_=c,S=u,C=h,D=f,G=v,R=m,U=x,F=M):(_=u,S=c,C=f,D=h,G=m,R=v,U=M,F=x)):A>=w?(L=c,z=h,O=v,Y=x,c>=0?(_=u,S=l,C=f,D=d,G=m,R=p,U=M,F=g):(_=l,S=u,C=d,D=f,G=p,R=m,U=g,F=M)):(L=u,z=f,O=m,Y=M,u>=0?(_=l,S=c,C=d,D=h,G=p,R=v,U=g,F=x):(_=c,S=l,C=h,D=d,G=v,R=p,U=x,F=g)),L===0)return null;let H=_/L,J=S/L,te=1/L,be=C-H*z,Fe=D-J*z,K=G-H*O,ye=R-J*O,Ae=U-H*Y,Be=F-J*Y,ve=Ae*ye-Be*K,ze=be*Be-Fe*Ae,At=K*Fe-ye*be;if(s){if(ve<0||ze<0||At<0)return null}else if((ve<0||ze<0||At<0)&&(ve>0||ze>0||At>0))return null;let Ge=ve+ze+At;if(Ge===0)return null;let nt=te*(ve*z+ze*O+At*Y);return(Ge>0?nt<0:nt>0)?null:this.at(nt/Ge,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},an=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ad=new ot,ls=new Kr,lo=new Ei,od=new I,co=new I,ho=new I,uo=new I,nh=new I,fo=new I,ld=new I,po=new I,Ye=class extends Pt{constructor(e=new yt,t=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(nh.fromBufferAttribute(d,e),a?fo.addScaledVector(nh,u):fo.addScaledVector(nh.sub(t),u))}t.add(fo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),ls.copy(e.ray).recast(e.near),!(lo.containsPoint(ls.origin)===!1&&(ls.intersectSphere(lo,od)===null||ls.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(ad.copy(r).invert(),ls.copy(e.ray).applyMatrix4(ad),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){let m=h[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=M;y<A;y+=3){let w=o.getX(y),_=o.getX(y+1),S=o.getX(y+2);s=mo(this,g,e,i,c,u,d,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=o.getX(m),M=o.getX(m+1),y=o.getX(m+2);s=mo(this,a,e,i,c,u,d,x,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=h.length;p<v;p++){let m=h[p],g=a[m.materialIndex],x=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,A=M;y<A;y+=3){let w=y,_=y+1,S=y+2;s=mo(this,g,e,i,c,u,d,w,_,S),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=p,g=v;m<g;m+=3){let x=m,M=m+1,y=m+2;s=mo(this,a,e,i,c,u,d,x,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _m(n,e,t,i,s,r,a,o){let l;if(e.side===Wt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zi,o),l===null)return null;po.copy(o),po.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,co),n.getVertexPosition(l,ho),n.getVertexPosition(c,uo);let u=_m(n,e,t,i,co,ho,uo,ld);if(u){let d=new I;Mi.getBarycoord(ld,co,ho,uo,d),s&&(u.uv=Mi.getInterpolatedAttribute(s,o,l,c,d,new se)),r&&(u.uv1=Mi.getInterpolatedAttribute(r,o,l,c,d,new se)),a&&(u.normal=Mi.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Mi.getNormal(co,ho,uo,h.normal),u.face=h,u.barycoord=d}return u}var jr=class extends vn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Qt,u=Qt,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends Ct{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qs=new ot,cd=new ot,go=[],hd=new ii,xm=new ot,Ur=new Ye,Fr=new Ei,Ti=class extends Ye{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,xm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ii),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),hd.copy(e.boundingBox).applyMatrix4(qs),this.boundingBox.union(hd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,qs),Fr.copy(e.boundingSphere).applyMatrix4(qs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(i),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qs),cd.multiplyMatrices(i,qs),Ur.matrixWorld=cd,Ur.raycast(e,go);for(let a=0,o=go.length;a<o;a++){let l=go[a];l.instanceId=r,l.object=this,t.push(l)}go.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new jr(new Float32Array(s*this.count),s,this.count,gl,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cs=new Ei,ym=new se(.5,.5),_o=new I,Hi=class{constructor(e=new Yn,t=new Yn,i=new Yn,s=new Yn,r=new Yn,a=new Yn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],m=r[10],g=r[11],x=r[12],M=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,g-p,A-x).normalize(),s[1].setComponents(c+a,f+u,g+p,A+x).normalize(),s[2].setComponents(c+o,f+d,g+v,A+M).normalize(),s[3].setComponents(c-o,f-d,g-v,A-M).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,g-m,A-y).normalize();else if(s[4].setComponents(c-l,f-h,g-m,A-y).normalize(),t===Fn)s[5].setComponents(c+l,f+h,g+m,A+y).normalize();else if(t===js)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){cs.center.set(0,0,0);let t=ym.distanceTo(e.center);return cs.radius=.7071067811865476+t,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(_o.x=s.normal.x>0?e.max.x:e.min.x,_o.y=s.normal.y>0?e.max.y:e.min.y,_o.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_o)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ud=new ot,ko=class n{constructor(){this.coordinateSystem=Fn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];ud.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Hi),i[s].setFromProjectionMatrix(ud,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Hi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ho=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dd=new ot,uh=new Kr,xo=new Ei,yo=new I,fs=class extends Pt{constructor(e=new yt,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),xo.radius+=r,e.ray.intersectsSphere(xo)===!1)return;dd.copy(s).invert(),uh.copy(e.ray).applyMatrix4(dd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,v=f;p<v;p++){let m=c.getX(p);yo.fromBufferAttribute(d,m),fd(yo,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,v=f;p<v;p++)yo.fromBufferAttribute(d,p),fd(yo,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fd(n,e,t,i,s,r,a){let o=uh.distanceSqToPoint(n);if(o<t){let l=new I;uh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends vn{constructor(e=[],t=Ms,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Vt=class extends vn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var wi=class extends vn{constructor(e,t,i=Jn,s,r,a,o=Qt,l=Qt,c,u=bi,d=1){if(u!==bi&&u!==Ci)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new er(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends wi{constructor(e,t=Jn,i=Ms,s,r,a=Qt,o=Qt,l,c=bi){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mt=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2));function p(v,m,g,x,M,y,A,w,_,S,L){let C=y/_,D=A/S,z=y/2,G=A/2,R=w/2,O=_+1,U=S+1,F=0,Y=0,H=new I;for(let J=0;J<U;J++){let te=J*D-G;for(let be=0;be<O;be++){let Fe=be*C-z;H[v]=Fe*x,H[m]=te*M,H[g]=R,c.push(H.x,H.y,H.z),H[v]=0,H[m]=0,H[g]=w>0?1:-1,u.push(H.x,H.y,H.z),d.push(be/_),d.push(1-J/S),F+=1}}for(let J=0;J<S;J++)for(let te=0;te<_;te++){let be=h+te+O*J,Fe=h+te+O*(J+1),K=h+(te+1)+O*(J+1),ye=h+(te+1)+O*J;l.push(be,Fe,ye),l.push(Fe,K,ye),Y+=6}o.addGroup(f,Y,L),f+=Y,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Gi=class n extends yt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=i*2+r,v=s+1,m=new I,g=new I;for(let x=0;x<=p;x++){let M=0,y=0,A=0,w=0;if(x<=i){let L=x/i,C=L*Math.PI/2;y=-u-e*Math.cos(C),A=e*Math.sin(C),w=-e*Math.cos(C),M=L*d}else if(x<=i+r){let L=(x-i)/r;y=-u+L*t,A=e,w=0,M=d+L*h}else{let L=(x-i-r)/i,C=L*Math.PI/2;y=u+e*Math.sin(C),A=e*Math.cos(C),w=e*Math.sin(C),M=d+h+L*d}let _=Math.max(0,Math.min(1,M/f)),S=0;x===0?S=.5/s:x===p&&(S=-.5/s);for(let L=0;L<=s;L++){let C=L/s,D=C*Math.PI*2,z=Math.sin(D),G=Math.cos(D);g.x=-A*G,g.y=y,g.z=A*z,o.push(g.x,g.y,g.z),m.set(-A*G,w,A*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+S,_)}if(x>0){let L=(x-1)*v;for(let C=0;C<s;C++){let D=L+C,z=L+C+1,G=x*v+C,R=x*v+C+1;a.push(D,z,G),a.push(z,R,G)}}}this.setIndex(a),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Vi=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(o,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},en=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,v=[],m=i/2,g=0;x(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function x(){let y=new I,A=new I,w=0,_=(t-e)/i;for(let S=0;S<=r;S++){let L=[],C=S/r,D=C*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,R=G*l+o,O=Math.sin(R),U=Math.cos(R);A.x=D*O,A.y=-C*i+m,A.z=D*U,d.push(A.x,A.y,A.z),y.set(O,_,U).normalize(),h.push(y.x,y.y,y.z),f.push(G,1-C),L.push(p++)}v.push(L)}for(let S=0;S<s;S++)for(let L=0;L<r;L++){let C=v[L][S],D=v[L+1][S],z=v[L+1][S+1],G=v[L][S+1];(e>0||L!==0)&&(u.push(C,D,G),w+=3),(t>0||L!==r-1)&&(u.push(D,z,G),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){let A=p,w=new se,_=new I,S=0,L=y===!0?e:t,C=y===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let R=z/s*l+o,O=Math.cos(R),U=Math.sin(R);_.x=L*U,_.y=m*C,_.z=L*O,d.push(_.x,_.y,_.z),h.push(0,C,0),w.x=O*.5+.5,w.y=U*.5*C+.5,f.push(w.x,w.y),p++}for(let z=0;z<s;z++){let G=A+z,R=D+z;y===!0?u.push(R,R+1,G):u.push(R+1,R,G),S+=3}c.addGroup(g,S,y===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wi=class n extends en{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Go=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new I,y=new I,A=new I;for(let w=0;w<t.length;w+=3)f(t[w+0],M),f(t[w+1],y),f(t[w+2],A),l(M,y,A,x)}function l(x,M,y,A){let w=A+1,_=[];for(let S=0;S<=w;S++){_[S]=[];let L=x.clone().lerp(y,S/w),C=M.clone().lerp(y,S/w),D=w-S;for(let z=0;z<=D;z++)z===0&&S===w?_[S][z]=L:_[S][z]=L.clone().lerp(C,z/D)}for(let S=0;S<w;S++)for(let L=0;L<2*(w-S)-1;L++){let C=Math.floor(L/2);L%2===0?(h(_[S][C+1]),h(_[S+1][C]),h(_[S][C])):(h(_[S][C+1]),h(_[S+1][C+1]),h(_[S+1][C]))}}function c(x){let M=new I;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){let x=new I;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let y=m(x)/2/Math.PI+.5,A=g(x)/Math.PI+.5;a.push(y,1-A)}p(),d()}function d(){for(let x=0;x<a.length;x+=6){let M=a[x+0],y=a[x+2],A=a[x+4],w=Math.max(M,y,A),_=Math.min(M,y,A);w>.9&&_<.1&&(M<.2&&(a[x+0]+=1),y<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function h(x){r.push(x.x,x.y,x.z)}function f(x,M){let y=x*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function p(){let x=new I,M=new I,y=new I,A=new I,w=new se,_=new se,S=new se;for(let L=0,C=0;L<r.length;L+=9,C+=6){x.set(r[L+0],r[L+1],r[L+2]),M.set(r[L+3],r[L+4],r[L+5]),y.set(r[L+6],r[L+7],r[L+8]),w.set(a[C+0],a[C+1]),_.set(a[C+2],a[C+3]),S.set(a[C+4],a[C+5]),A.copy(x).add(M).add(y).divideScalar(3);let D=m(A);v(w,C+0,x,D),v(_,C+2,M,D),v(S,C+4,y,D)}}function v(x,M,y,A){A<0&&x.x===1&&(a[M]=x.x-1),y.x===0&&y.z===0&&(a[M]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},na=class n extends Go{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ve("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new ot;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(it(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(it(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},sr=class extends In{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Vo=class extends sr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var pd=new I,md=new I,ih=new Gh,sh=new Gh,rh=new Gh,ps=class extends In{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(md.subVectors(s[0],s[1]).add(s[0]),c=md);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),ih.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,v,m),sh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,v,m),rh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,v,m)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),sh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),rh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ih.calc(l),sh.calc(l),rh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gd(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function vm(n,e){let t=1-n;return t*t*e}function Mm(n,e){return 2*(1-n)*n*e}function Sm(n,e){return n*n*e}function Br(n,e,t,i){return vm(n,e)+Mm(n,t)+Sm(n,i)}function bm(n,e){let t=1-n;return t*t*t*e}function Em(n,e){let t=1-n;return 3*t*t*n*e}function Tm(n,e){return 3*(1-n)*n*n*e}function wm(n,e){return n*n*n*e}function zr(n,e,t,i,s){return bm(n,e)+Em(n,t)+Tm(n,i)+wm(n,s)}var ia=class extends In{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Wo=class extends In{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(zr(e,s.x,r.x,a.x,o.x),zr(e,s.y,r.y,a.y,o.y),zr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends In{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xo=class extends In{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends In{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends In{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Br(e,s.x,r.x,a.x),Br(e,s.y,r.y,a.y),Br(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(gd(o,l.x,c.x,u.x,d.x),gd(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},qo=Object.freeze({__proto__:null,ArcCurve:Vo,CatmullRomCurve3:ps,CubicBezierCurve:ia,CubicBezierCurve3:Wo,EllipseCurve:sr,LineCurve:sa,LineCurve3:Xo,QuadraticBezierCurve:ra,QuadraticBezierCurve3:aa,SplineCurve:oa}),Yo=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new qo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},la=class extends Yo{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new sa(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ra(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ia(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new oa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new sr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ms=class extends la{constructor(e){super(e),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};function Am(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=mf(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Lm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function mf(n,e,t,i,s){let r;if(s===Vm(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=_d(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=_d(a/i|0,n[a],n[a+1],r);return r&&rr(r,r.next)&&(ua(r),r=r.next),r}function gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(rr(t,t.next)||Lt(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ca(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Om(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Cm(n,i,s,r):Rm(n)){e.push(l.i,n.i,c.i),ua(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Pm(gs(n),e),ca(n,e,t,i,s,r,2)):a===2&&Im(n,e,t,i,s,r):ca(gs(n),e,t,i,s,r,1);break}}}function Rm(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Or(s,o,r,l,a,c,p.x,p.y)&&Lt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Cm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Lt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),v=Math.max(o,l,c),m=Math.max(u,d,h),g=dh(f,p,e,t,i),x=dh(v,m,e,t,i),M=n.prevZ,y=n.nextZ;for(;M&&M.z>=g&&y&&y.z<=x;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,d,c,h,M.x,M.y)&&Lt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Or(o,u,l,d,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=f&&M.x<=v&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&Or(o,u,l,d,c,h,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=v&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&Or(o,u,l,d,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Pm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!rr(i,s)&&_f(i,t,t.next,s)&&ha(i,s)&&ha(s,i)&&(e.push(i.i,t.i,s.i),ua(t),ua(t.next),t=n=s),t=t.next}while(t!==n);return gs(t)}function Im(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&km(a,o)){let l=xf(a,o);a=gs(a,a.next),l=gs(l,l.next),ca(a,e,t,i,s,r,0),ca(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Lm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=mf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(zm(c))}s.sort(Dm);for(let r=0;r<s.length;r++)t=Nm(s[r],t);return t}function Dm(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Nm(n,e){let t=Um(n,e);if(!t)return e;let i=xf(t,n);return gs(i,i.next),gs(t,t.next)}function Um(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(rr(n,t))return t;do{if(rr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&gf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ha(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Fm(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Fm(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function Om(n,e,t,i){let s=n;do s.z===0&&(s.z=dh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Bm(s)}function Bm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function dh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function zm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function gf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Or(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&gf(n,e,t,i,s,r,a,o)}function km(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Hm(n,e)&&(ha(n,e)&&ha(e,n)&&Gm(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||rr(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function rr(n,e){return n.x===e.x&&n.y===e.y}function _f(n,e,t,i){let s=Mo(Lt(n,e,t)),r=Mo(Lt(n,e,i)),a=Mo(Lt(t,i,n)),o=Mo(Lt(t,i,e));return!!(s!==r&&a!==o||s===0&&vo(n,t,e)||r===0&&vo(n,i,e)||a===0&&vo(t,n,i)||o===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Mo(n){return n>0?1:n<0?-1:0}function Hm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&_f(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ha(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function Gm(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xf(n,e){let t=fh(n.i,n.x,n.y),i=fh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function _d(n,e,t,i){let s=fh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ua(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function fh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Vm(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ph=class{static triangulate(e,t,i=2){return Am(e,t,i)}},hs=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];xd(e),yd(i,e);let a=e.length;t.forEach(xd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,yd(i,t[l]);let o=ph.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function xd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function yd(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var ar=class n extends yt{constructor(e=new ms([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Wm,M,y=!1,A,w,_,S;if(g){M=g.getSpacedPoints(u),y=!0,h=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(u,ie),w=new I,_=new I,S=new I}h||(m=0,f=0,p=0,v=0);let L=o.extractPoints(c),C=L.shape,D=L.holes;if(!hs.isClockWise(C)){C=C.reverse();for(let ie=0,ue=D.length;ie<ue;ie++){let le=D[ie];hs.isClockWise(le)&&(D[ie]=le.reverse())}}function G(ie){let le=10000000000000001e-36,we=ie[0];for(let xe=1;xe<=ie.length;xe++){let Je=xe%ie.length,Ne=ie[Je],at=Ne.x-we.x,lt=Ne.y-we.y,gt=at*at+lt*lt,k=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(we.x),Math.abs(we.y)),zt=le*k*k;if(gt<=zt){ie.splice(Je,1),xe--;continue}we=Ne}}G(C),D.forEach(G);let R=D.length,O=C;for(let ie=0;ie<R;ie++){let ue=D[ie];C=C.concat(ue)}function U(ie,ue,le){return ue||We("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,le)}let F=C.length;function Y(ie,ue,le){let we,xe,Je,Ne=ie.x-ue.x,at=ie.y-ue.y,lt=le.x-ie.x,gt=le.y-ie.y,k=Ne*Ne+at*at,zt=Ne*gt-at*lt;if(Math.abs(zt)>Number.EPSILON){let st=Math.sqrt(k),St=Math.sqrt(lt*lt+gt*gt),me=ue.x-at/st,Ut=ue.y+Ne/st,ke=le.x-gt/St,qe=le.y+lt/St,P=((ke-me)*gt-(qe-Ut)*lt)/(Ne*gt-at*lt);we=me+Ne*P-ie.x,xe=Ut+at*P-ie.y;let b=we*we+xe*xe;if(b<=2)return new se(we,xe);Je=Math.sqrt(b/2)}else{let st=!1;Ne>Number.EPSILON?lt>Number.EPSILON&&(st=!0):Ne<-Number.EPSILON?lt<-Number.EPSILON&&(st=!0):Math.sign(at)===Math.sign(gt)&&(st=!0),st?(we=-at,xe=Ne,Je=Math.sqrt(k)):(we=Ne,xe=at,Je=Math.sqrt(k/2))}return new se(we/Je,xe/Je)}let H=[];for(let ie=0,ue=O.length,le=ue-1,we=ie+1;ie<ue;ie++,le++,we++)le===ue&&(le=0),we===ue&&(we=0),H[ie]=Y(O[ie],O[le],O[we]);let J=[],te,be=H.concat();for(let ie=0,ue=R;ie<ue;ie++){let le=D[ie];te=[];for(let we=0,xe=le.length,Je=xe-1,Ne=we+1;we<xe;we++,Je++,Ne++)Je===xe&&(Je=0),Ne===xe&&(Ne=0),te[we]=Y(le[we],le[Je],le[Ne]);J.push(te),be=be.concat(te)}let Fe;if(m===0)Fe=hs.triangulateShape(O,D);else{let ie=[],ue=[];for(let le=0;le<m;le++){let we=le/m,xe=f*Math.cos(we*Math.PI/2),Je=p*Math.sin(we*Math.PI/2)+v;for(let Ne=0,at=O.length;Ne<at;Ne++){let lt=U(O[Ne],H[Ne],Je);ze(lt.x,lt.y,-xe),we===0&&ie.push(lt)}for(let Ne=0,at=R;Ne<at;Ne++){let lt=D[Ne];te=J[Ne];let gt=[];for(let k=0,zt=lt.length;k<zt;k++){let st=U(lt[k],te[k],Je);ze(st.x,st.y,-xe),we===0&&gt.push(st)}we===0&&ue.push(gt)}}Fe=hs.triangulateShape(ie,ue)}let K=Fe.length,ye=p+v;for(let ie=0;ie<F;ie++){let ue=h?U(C[ie],be[ie],ye):C[ie];y?(_.copy(A.normals[0]).multiplyScalar(ue.x),w.copy(A.binormals[0]).multiplyScalar(ue.y),S.copy(M[0]).add(_).add(w),ze(S.x,S.y,S.z)):ze(ue.x,ue.y,0)}for(let ie=1;ie<=u;ie++)for(let ue=0;ue<F;ue++){let le=h?U(C[ue],be[ue],ye):C[ue];y?(_.copy(A.normals[ie]).multiplyScalar(le.x),w.copy(A.binormals[ie]).multiplyScalar(le.y),S.copy(M[ie]).add(_).add(w),ze(S.x,S.y,S.z)):ze(le.x,le.y,d/u*ie)}for(let ie=m-1;ie>=0;ie--){let ue=ie/m,le=f*Math.cos(ue*Math.PI/2),we=p*Math.sin(ue*Math.PI/2)+v;for(let xe=0,Je=O.length;xe<Je;xe++){let Ne=U(O[xe],H[xe],we);ze(Ne.x,Ne.y,d+le)}for(let xe=0,Je=D.length;xe<Je;xe++){let Ne=D[xe];te=J[xe];for(let at=0,lt=Ne.length;at<lt;at++){let gt=U(Ne[at],te[at],we);y?ze(gt.x,gt.y+M[u-1].y,M[u-1].x+le):ze(gt.x,gt.y,d+le)}}}Ae(),Be();function Ae(){let ie=s.length/3;if(h){let ue=0,le=F*ue;for(let we=0;we<K;we++){let xe=Fe[we];At(xe[2]+le,xe[1]+le,xe[0]+le)}ue=u+m*2,le=F*ue;for(let we=0;we<K;we++){let xe=Fe[we];At(xe[0]+le,xe[1]+le,xe[2]+le)}}else{for(let ue=0;ue<K;ue++){let le=Fe[ue];At(le[2],le[1],le[0])}for(let ue=0;ue<K;ue++){let le=Fe[ue];At(le[0]+F*u,le[1]+F*u,le[2]+F*u)}}i.addGroup(ie,s.length/3-ie,0)}function Be(){let ie=s.length/3,ue=0;ve(O,ue),ue+=O.length;for(let le=0,we=D.length;le<we;le++){let xe=D[le];ve(xe,ue),ue+=xe.length}i.addGroup(ie,s.length/3-ie,1)}function ve(ie,ue){let le=ie.length;for(;--le>=0;){let we=le,xe=le-1;xe<0&&(xe=ie.length-1);for(let Je=0,Ne=u+m*2;Je<Ne;Je++){let at=F*Je,lt=F*(Je+1),gt=ue+we+at,k=ue+xe+at,zt=ue+xe+lt,st=ue+we+lt;Ge(gt,k,zt,st)}}}function ze(ie,ue,le){l.push(ie),l.push(ue),l.push(le)}function At(ie,ue,le){nt(ie),nt(ue),nt(le);let we=s.length/3,xe=x.generateTopUV(i,s,we-3,we-2,we-1);rt(xe[0]),rt(xe[1]),rt(xe[2])}function Ge(ie,ue,le,we){nt(ie),nt(ue),nt(we),nt(ue),nt(le),nt(we);let xe=s.length/3,Je=x.generateSideWallUV(i,s,xe-6,xe-3,xe-2,xe-1);rt(Je[0]),rt(Je[1]),rt(Je[3]),rt(Je[1]),rt(Je[2]),rt(Je[3])}function nt(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function rt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Xm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new qo[s.type]().fromJSON(s)),new n(i,e.options)}},Wm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-d),new se(h,1-p),new se(v,1-g)]:[new se(o,1-l),new se(u,1-d),new se(f,1-p),new se(m,1-g)]}};function Xm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var or=class n extends yt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=it(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new I,h=new se,f=new I,p=new I,v=new I,m=0,g=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:v.normalize(),l.push(v.x,v.y,v.z);break;default:m=e[x+1].x-e[x].x,g=e[x+1].y-e[x].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let x=0;x<=t;x++){let M=i+x*u*s,y=Math.sin(M),A=Math.cos(M);for(let w=0;w<=e.length-1;w++){d.x=e[w].x*y,d.y=e[w].y,d.z=e[w].x*A,a.push(d.x,d.y,d.z),h.x=x/t,h.y=w/(e.length-1),o.push(h.x,h.y);let _=l[3*w+0]*y,S=l[3*w+1],L=l[3*w+0]*A;c.push(_,S,L)}}for(let x=0;x<t;x++)for(let M=0;M<e.length-1;M++){let y=M+x*e.length,A=y,w=y+e.length,_=y+e.length+1,S=y+1;r.push(A,w,S),r.push(_,S,w)}this.setIndex(r),this.setAttribute("position",new Xe(a,3)),this.setAttribute("uv",new Xe(o,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Bt=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],v=[],m=[];for(let g=0;g<u;g++){let x=g*h-a;for(let M=0;M<c;M++){let y=M*d-r;p.push(y,-x,0),v.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let M=x+c*g,y=x+c*(g+1),A=x+1+c*(g+1),w=x+1+c*g;f.push(M,y,w),f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var fn=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){let x=[],M=g/i,y=a+M*o,A=e*Math.cos(y),w=Math.sqrt(e*e-A*A),_=0;g===0&&a===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let L=S/t,C=s+L*r;d.x=-w*Math.cos(C),d.y=A,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(L+_,1-M),x.push(c++)}u.push(x)}for(let g=0;g<i;g++)for(let x=0;x<t;x++){let M=u[g][x+1],y=u[g][x],A=u[g+1][x],w=u[g+1][x+1];(g!==0||a>0)&&f.push(M,y,w),(g!==i-1||l<Math.PI)&&f.push(y,A,w)}this.setIndex(f),this.setAttribute("position",new Xe(p,3)),this.setAttribute("normal",new Xe(v,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ri=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,p=new I;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let g=0;g<=s;g++){let x=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let g=(s+1)*v+m-1,x=(s+1)*(v-1)+m-1,M=(s+1)*(v-1)+m,y=(s+1)*v+m;l.push(g,x,y),l.push(x,M,y)}this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(u,3)),this.setAttribute("uv",new Xe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var lr=class n extends yt{constructor(e=new aa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new se,u=new I,d=[],h=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Xe(d,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(f,2));function v(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),x(),g()}function m(M){u=e.getPointAt(M/t,u);let y=a.normals[M],A=a.binormals[M];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,S=Math.sin(_),L=-Math.cos(_);l.x=L*y.x+S*A.x,l.y=L*y.y+S*A.y,l.z=L*y.z+S*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let A=(s+1)*(M-1)+(y-1),w=(s+1)*M+(y-1),_=(s+1)*M+y,S=(s+1)*(M-1)+y;p.push(A,w,S),p.push(w,_,S)}}function x(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new qo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(vd(s))s.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(vd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function pn(n){let e={};for(let t=0;t<n.length;t++){let i=Es(n[t]);for(let s in i)e[s]=i[s]}return e}function vd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var yf={clone:Es,merge:pn},Ym=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ym,this.fragmentShader=Zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=qm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Le().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ot().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Zo=class extends Mn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},et=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ai=class extends et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){us('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var da=class extends $n{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=cl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$o=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ys(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function So(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Xi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ko=class extends Xi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ch:r=e,o=2*t-i;break;case hh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:a=e,l=2*i-t;break;case hh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),v=p*p,m=v*p,g=-h*m+2*h*v-h*p,x=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*p+1,M=(-1-f)*m+(1.5+f)*v+.5*p,y=f*m-f*v;for(let A=0;A!==o;++A)r[A]=g*a[u+A]+x*a[c+A]+M*a[l+A]+y*a[d+A];return r}},jo=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},Qo=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},el=class extends Xi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),v=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*p;return r}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let v=a[c+p],m=a[l+p],g=f*h+p*2,x=d[g],M=d[g+1],y=e*h+p*2,A=u[y],w=u[y+1],_=Jm(i,t,x,A,s);r[p]=vf(_,v,M,w,m)}return r}};function vf(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function $m(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Jm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=vf(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=$m(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Ln=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ys(t,this.TimeBufferType),this.values=Ys(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ys(e.times,Array),values:Ys(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),So(e.settings)&&(i.settings={inTangents:Ys(e.settings.inTangents,Array),outTangents:Ys(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new el(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case kr:t=this.InterpolantFactoryMethodDiscrete;break;case Uo:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ve("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return kr;case this.InterpolantFactoryMethodLinear:return Uo;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;So(this.settings)&&(Md(this.settings.inTangents,e),Md(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;So(this.settings)&&(Sd(this.settings.inTangents,e),Sd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){We("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){We("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Qp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){We("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===To,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,So(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Md(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Sd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Uo;var qi=class extends Ln{constructor(e,t,i){super(e,t,i)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=kr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var tl=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};tl.prototype.ValueTypeName="color";var nl=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};nl.prototype.ValueTypeName="number";var il=class extends Xi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},fa=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new il(this.times,this.values,this.getValueSize(),e)}};fa.prototype.ValueTypeName="quaternion";fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends Ln{constructor(e,t,i){super(e,t,i)}};Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=kr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Ln{constructor(e,t,i,s){super(e,t,i,s)}};sl.prototype.ValueTypeName="vector";var rl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mf=new rl,al=class{constructor(e){this.manager=e!==void 0?e:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};al.DEFAULT_MATERIAL_NAME="__DEFAULT";var cr=class extends Pt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pa=class extends cr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ah=new ot,bd=new I,Ed=new I,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ah,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===js||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bo=new I,Eo=new Ft,ei=new I,ga=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Eo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(bo,Eo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Eo,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new I,Td=new se,wd=new se,dn=class extends ga{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(Uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Td,wd),t.subVectors(wd,Td)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Uc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var mh=class extends ma{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0}},_s=class extends cr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},_a=class extends ga{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gh=class extends ma{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xa=class extends cr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new gh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zs=-90,$s=1,hr=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(Zs,$s,e,t);s.layers=this.layers,this.add(s);let r=new dn(Zs,$s,e,t);r.layers=this.layers,this.add(r);let a=new dn(Zs,$s,e,t);a.layers=this.layers,this.add(a);let o=new dn(Zs,$s,e,t);o.layers=this.layers,this.add(o);let l=new dn(Zs,$s,e,t);l.layers=this.layers,this.add(l);let c=new dn(Zs,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},ol=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Wh="\\[\\]\\.:\\/",Km=new RegExp("["+Wh+"]","g"),Xh="[^"+Wh+"]",jm="[^"+Wh.replace("\\.","")+"]",Qm=/((?:WC+[\/:])*)/.source.replace("WC",Xh),e0=/(WCOD+)?/.source.replace("WCOD",jm),t0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xh),n0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xh),i0=new RegExp("^"+Qm+e0+t0+n0+"$"),s0=["material","materials","bones","map"],_h=class{constructor(e,t,i){let s=i||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Rt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Km,"")}static parseTrackName(e){let t=i0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);s0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;We("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Rt.Composite=_h;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iM=new Float32Array(1);var Kh=class Kh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Kh.prototype.isMatrix2=!0;var xh=Kh;function qh(n,e,t,i){let s=r0(i);switch(t){case Uh:return n*e;case gl:return n*e/s.components*s.byteLength;case _l:return n*e/s.components*s.byteLength;case Ji:return n*e*2/s.components*s.byteLength;case xl:return n*e*2/s.components*s.byteLength;case Fh:return n*e*3/s.components*s.byteLength;case jn:return n*e*4/s.components*s.byteLength;case yl:return n*e*4/s.components*s.byteLength;case Ma:case Sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ba:case Ea:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:case bl:return Math.max(n,16)*Math.max(e,8)/4;case vl:case Sl:return Math.max(n,8)*Math.max(e,8)/2;case El:case Tl:case Al:case Rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:case Ta:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case kl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Wl:case Xl:case ql:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Yl:case Zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wa:case $l:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r0(n){switch(n){case Tn:case Ih:return{byteLength:1,components:1};case fr:case Lh:case Kn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Jn:case fl:case On:return{byteLength:4,components:1};case Dh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function u0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let v=d[f];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var d0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
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
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v0=`#ifdef USE_BATCHING
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
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T0=`#ifdef USE_IRIDESCENCE
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
#endif`,w0=`#ifdef USE_BUMPMAP
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,D0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,N0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,U0=`#define PI 3.141592653589793
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
} // validated`,F0=`vec3 transformedNormal = objectNormal;
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
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",G0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
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
#endif`,cg=`uniform sampler2D dfgLUT;
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
}`,hg=`
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
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
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tg=`#if defined( USE_MORPHCOLORS )
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
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Pg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ng=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Og=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Qg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,s_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,u_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,d_=`uniform sampler2D t2D;
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
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform float backgroundBlurriness;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,y_=`#define DISTANCE
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
}`,v_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define MATCAP
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
}`,P_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,N_=`#define PHONG
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
}`,U_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,O_=`#define TOON
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
}`,B_=`#define TOON
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
}`,z_=`uniform float size;
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
}`,H_=`#include <common>
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
}`,G_=`uniform vec3 color;
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
}`,V_=`uniform float rotation;
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
}`,W_=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:d0,alphahash_pars_fragment:f0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:g0,alphatest_pars_fragment:_0,aomap_fragment:x0,aomap_pars_fragment:y0,batching_pars_vertex:v0,batching_vertex:M0,begin_vertex:S0,beginnormal_vertex:b0,bsdfs:E0,iridescence_fragment:T0,bumpmap_pars_fragment:w0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:R0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:P0,color_fragment:I0,color_pars_fragment:L0,color_pars_vertex:D0,color_vertex:N0,common:U0,defaultnormal_vertex:F0,displacementmap_pars_vertex:O0,displacementmap_vertex:B0,emissivemap_fragment:z0,emissivemap_pars_fragment:k0,colorspace_fragment:H0,colorspace_pars_fragment:G0,envmap_fragment:V0,envmap_common_pars_fragment:W0,envmap_pars_fragment:X0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:ig,envmap_vertex:Y0,fog_vertex:Z0,fog_pars_vertex:$0,fog_fragment:J0,fog_pars_fragment:K0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:Q0,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,lightprobes_pars_fragment:fg,logdepthbuf_fragment:pg,logdepthbuf_pars_fragment:mg,logdepthbuf_pars_vertex:gg,logdepthbuf_vertex:_g,map_fragment:xg,map_pars_fragment:yg,map_particle_fragment:vg,map_particle_pars_fragment:Mg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Eg,morphcolor_vertex:Tg,morphnormal_vertex:wg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Rg,normal_fragment_begin:Cg,normal_fragment_maps:Pg,normal_pars_fragment:Ig,normal_pars_vertex:Lg,normal_vertex:Dg,normalmap_pars_fragment:Ng,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:Og,iridescence_pars_fragment:Bg,opaque_fragment:zg,packing:kg,premultiplied_alpha_fragment:Hg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:Wg,roughnessmap_fragment:Xg,roughnessmap_pars_fragment:qg,shadowmap_pars_fragment:Yg,shadowmap_pars_vertex:Zg,shadowmap_vertex:$g,shadowmask_pars_fragment:Jg,skinbase_vertex:Kg,skinning_pars_vertex:jg,skinning_vertex:Qg,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:s_,transmission_fragment:r_,transmission_pars_fragment:a_,uv_pars_fragment:o_,uv_pars_vertex:l_,uv_vertex:c_,worldpos_vertex:h_,background_vert:u_,background_frag:d_,backgroundCube_vert:f_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:__,depth_frag:x_,distance_vert:y_,distance_frag:v_,equirect_vert:M_,equirect_frag:S_,linedashed_vert:b_,linedashed_frag:E_,meshbasic_vert:T_,meshbasic_frag:w_,meshlambert_vert:A_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:P_,meshnormal_vert:I_,meshnormal_frag:L_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:F_,meshtoon_vert:O_,meshtoon_frag:B_,points_vert:z_,points_frag:k_,shadow_vert:H_,shadow_frag:G_,sprite_vert:V_,sprite_frag:W_},Se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},li={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};li.physical={uniforms:pn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Kl={r:0,b:0,g:0},X_=new ot,Wf=new Ze;Wf.set(-1,0,0,0,1,0,0,0,1);function q_(n,e,t,i,s,r){let a=new Le(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function p(x){let M=!1,y=f(x);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,M){let y=f(M);y&&y.isCubeTexture?(c===void 0&&(c=new Ye(new mt(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Es(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(X_.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wf),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ye(new Bt(2,2),new Mn({name:"BackgroundMaterial",uniforms:Es(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(Kl,Vh(n)),t.buffers.color.setClear(Kl.r,Kl.g,Kl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:v,dispose:g}}function Y_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,z,G,R,O){let U=!1,F=d(D,R,G,z);r!==F&&(r=F,c(r.object)),U=f(D,R,G,O),U&&p(D,R,G,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,y(D,z,G,R),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,z,G,R){let O=R.wireframe===!0,U=i[z.id];U===void 0&&(U={},i[z.id]=U);let F=D.isInstancedMesh===!0?D.id:0,Y=U[F];Y===void 0&&(Y={},U[F]=Y);let H=Y[G.id];H===void 0&&(H={},Y[G.id]=H);let J=H[O];return J===void 0&&(J=h(l()),H[O]=J),J}function h(D){let z=[],G=[],R=[];for(let O=0;O<t;O++)z[O]=0,G[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:R,object:D,attributes:{},index:null}}function f(D,z,G,R){let O=r.attributes,U=z.attributes,F=0,Y=G.getAttributes();for(let H in Y)if(Y[H].location>=0){let te=O[H],be=U[H];if(be===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function p(D,z,G,R){let O={},U=z.attributes,F=0,Y=G.getAttributes();for(let H in Y)if(Y[H].location>=0){let te=U[H];te===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let be={};be.attribute=te,te&&te.data&&(be.data=te.data),O[H]=be,F++}r.attributes=O,r.attributesNum=F,r.index=R}function v(){let D=r.newAttributes;for(let z=0,G=D.length;z<G;z++)D[z]=0}function m(D){g(D,0)}function g(D,z){let G=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;G[D]=1,R[D]===0&&(n.enableVertexAttribArray(D),R[D]=1),O[D]!==z&&(n.vertexAttribDivisor(D,z),O[D]=z)}function x(){let D=r.newAttributes,z=r.enabledAttributes;for(let G=0,R=z.length;G<R;G++)z[G]!==D[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function M(D,z,G,R,O,U,F){F===!0?n.vertexAttribIPointer(D,z,G,O,U):n.vertexAttribPointer(D,z,G,R,O,U)}function y(D,z,G,R){v();let O=R.attributes,U=G.getAttributes(),F=z.defaultAttributeValues;for(let Y in U){let H=U[Y];if(H.location>=0){let J=O[Y];if(J===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let te=J.normalized,be=J.itemSize,Fe=e.get(J);if(Fe===void 0)continue;let K=Fe.buffer,ye=Fe.type,Ae=Fe.bytesPerElement,Be=ye===n.INT||ye===n.UNSIGNED_INT||J.gpuType===fl;if(J.isInterleavedBufferAttribute){let ve=J.data,ze=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,At=J.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ge=0;Ge<H.locationSize;Ge++)g(H.location+Ge,ve.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<H.locationSize;Ge++)m(H.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ge=0;Ge<H.locationSize;Ge++)M(H.location+Ge,be/H.locationSize,ye,te,ze*Ae,(At+be/H.locationSize*Ge)*Ae,Be)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)g(H.location+ve,J.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ve=0;ve<H.locationSize;ve++)M(H.location+ve,be/H.locationSize,ye,te,be*Ae,be/H.locationSize*ve*Ae,Be)}}else if(F!==void 0){let te=F[Y];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}x()}function A(){L();for(let D in i){let z=i[D];for(let G in z){let R=z[G];for(let O in R){let U=R[O];for(let F in U)u(U[F].object),delete U[F];delete R[O]}}delete i[D]}}function w(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let G in z){let R=z[G];for(let O in R){let U=R[O];for(let F in U)u(U[F].object),delete U[F];delete R[O]}}delete i[D.id]}function _(D){for(let z in i){let G=i[z];for(let R in G){let O=G[R];if(O[D.id]===void 0)continue;let U=O[D.id];for(let F in U)u(U[F].object),delete U[F];delete O[D.id]}}}function S(D){for(let z in i){let G=i[z],R=D.isInstancedMesh===!0?D.id:0,O=G[R];if(O!==void 0){for(let U in O){let F=O[U];for(let Y in F)u(F[Y].object),delete F[Y];delete O[U]}delete G[R],Object.keys(G).length===0&&delete i[z]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function Z_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==jn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Kn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Tn&&_!==On&&!S&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:A,samples:w}}function J_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Yn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let x=r?0:i,M=x*4,y=g.clippingState||null;l.value=y,y=u(p,h,M,f);for(let A=0;A!==M;++A)y[A]=t[A];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,p!==!0||m===null){let g=f+v*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,y=f;M!==v;++M,y+=4)a.copy(d[M]).applyMatrix4(x,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Pa=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wt,blending:ys});r.uniforms.tEquirect.value=t;let a=new Ye(s,r),o=t.minFilter;return t.minFilter===Ri&&(t.minFilter=yn),new hr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Sf=256,K_=3,j_=20,Xf=256,qf=16,Q_=3,ex=new I,tx=new Le,mr=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new hr(1,10,null),this._boxMesh=new Ye(new mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=ex}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(tx));let m=new hr(i,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=v,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Sf,hf(e))}_fromTexture(e,t){e.mapping===Ms||e.mapping===dr?this._setSize(e.image.length===0?Sf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=bf(e,!1,!1),i=Math.log2(e)-K_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ms||e.mapping===dr?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ef()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nx(),this._integrationMaterial=ix());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/qf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Q_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Xf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=sx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function bf(n,e,t){return new Pa(n,{minFilter:Ri,generateMipmaps:e,type:Kn,colorSpace:Hr,depthBuffer:t})}function Ia(n,e,t){return new Mn({name:n,uniforms:e,vertexShader:tt.cube_vert,fragmentShader:t,side:Wt,blending:ys,depthTest:!1,depthWrite:!1})}function nx(){return Ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xf}u

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
	`)}function ix(){return Ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qf}},`

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
	`)}function sx(){return Ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${j_}
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
	`)}function Ef(){return Ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tf(){return Ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function rx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===hl||f===ul)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let v=new Pa(p.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===hl||f===ul,v=f===Ms||f===dr;if(p||v){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new mr(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new mr(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===hl?h.mapping=Ms:f===ul&&(h.mapping=dr),h}function l(h){let f=0,p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function ax(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&us("WebGLRenderer: "+i+" extension not supported."),s}}}function ox(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let v=r.get(p);v&&(e.remove(v),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),t.memory.geometries++),v}function u(p){let v=p.attributes;for(let m in v)e.update(v[m],n.ARRAY_BUFFER)}function d(p){let v=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=v!==null?v.array.length:m.array.length/3-1,M=m.count>=65535?$r:Zr,y=new M(Math.ceil(x/3)*6,1),A=y.array;if(v!==null){let _=v.array;g=v.version;for(let S=0,L=0;S<x;S+=3){let C=_[S+0],D=_[S+1],z=_[S+2];A[L++]=C,A[L++]=D,A[L++]=D,A[L++]=z,A[L++]=z,A[L++]=C}}else{g=m.version;for(let _=0,S=0;_<x;_+=3){let L=_+0,C=_+1,D=_+2;A[S++]=L,A[S++]=C,A[S++]=C,A[S++]=D,A[S++]=D,A[S++]=L}}y.version=g;let w=r.get(p);w&&e.remove(w),r.set(p,y)}function h(p){let v=r.get(p);if(v){let m=p.index;m!==null&&v.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let v=s[p].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function lx(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=h[m];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function cx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function hx(n,e,t){let i=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;f===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let y=o.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*A*4*d),_=new Xr(w,y,A,d);_.type=On,_.needsUpdate=!0;let S=M*4;for(let C=0;C<d;C++){let D=m[C],z=g[C],G=x[C],R=y*A*4*C;for(let O=0;O<D.count;O++){let U=O*S;f===!0&&(s.fromBufferAttribute(D,O),w[R+U+0]=s.x,w[R+U+1]=s.y,w[R+U+2]=s.z,w[R+U+3]=0),p===!0&&(s.fromBufferAttribute(z,O),w[R+U+4]=s.x,w[R+U+5]=s.y,w[R+U+6]=s.z,w[R+U+7]=0),v===!0&&(s.fromBufferAttribute(G,O),w[R+U+8]=s.x,w[R+U+9]=s.y,w[R+U+10]=s.z,w[R+U+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:_,size:new se(y,A)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ux(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var dx={[Eh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[Rh]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function fx(n,e,t,i,s,r){let a=new Pn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new yt;u.setAttribute("position",new Xe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Xe([0,2,0,0,2,0],2));let d=new Zo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ye(u,d),f=new _a(-1,1,1,-1,0,1),p=null,v=null,m=!1,g,x=null,M=[],y=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<M.length;_++){let S=M[_];S.setSize&&S.setSize(A,w)}},this.setEffects=function(A){M=A,y=M.length>0&&M[0].isRenderPass===!0;let w=a.width,_=a.height;M.length>0&&o===null&&(o=new Pn(w,_,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),l=new Pn(w,_,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&M.some(L=>L.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new wi(w,_),r===!0&&(c.format=Ci,c.type=Ss)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let L=0;L<M.length;L++){let C=M[L];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===ai&&M.length===0)return!1;if(x=w,w!==null){let _=w.width,S=w.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return y===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=ai,!0},this.hasRenderPass=function(){return y},this.end=function(A,w){A.toneMapping=g,m=!0;let _=a,S=o;for(let L=0;L<M.length;L++){let C=M[L];C.enabled!==!1&&(C.render(A,S,_,w),C.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(p!==A.outputColorSpace||v!==A.toneMapping){p=A.outputColorSpace,v=A.toneMapping,d.defines={},ut.getTransfer(p)===xt&&(d.defines.SRGB_TRANSFER="");let L=dx[v];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(h,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var Yf=new vn,Zf=new wi(1,1),$f=new ea(1),Jf=new Xr,Kf=new zo,jf=new Qr,wf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ec(n,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function px(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function _x(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function xx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),qt(t,i)}}function yx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Cf.set(i),n.uniformMatrix3fv(this.addr,!1,Cf),qt(t,i)}}function vx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Rf.set(i),n.uniformMatrix4fv(this.addr,!1,Rf),qt(t,i)}}function Mx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Ex(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Tx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function tc(n){return n.version===0&&(n.compareFunction=zh,n.needsUpdate=!0),n}function Cx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=tc(Zf):r=Yf,t.setTexture2D(e||r,s)}function Px(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Kf,s)}function Ix(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=tc($f):r=jf,t.setTextureCube(e||r,s)}function Lx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jf,s)}function Dx(n){switch(n){case 5126:return px;case 35664:return mx;case 35665:return gx;case 35666:return _x;case 35674:return xx;case 35675:return yx;case 35676:return vx;case 5124:case 35670:return Mx;case 35667:case 35671:return Sx;case 35668:case 35672:return bx;case 35669:case 35673:return Ex;case 5125:return Tx;case 36294:return wx;case 36295:return Ax;case 36296:return Rx;case 35678:case 36198:case 36298:case 36306:case 35682:return Cx;case 35679:case 36299:case 36307:return Px;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Lx}}function Nx(n,e){n.uniform1fv(this.addr,e)}function Ux(n,e){let t=gr(e,this.size,2);n.uniform2fv(this.addr,t)}function Fx(n,e){let t=gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ox(n,e){let t=gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Bx(n,e){let t=gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zx(n,e){let t=gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kx(n,e){let t=gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Hx(n,e){n.uniform1iv(this.addr,e)}function Gx(n,e){n.uniform2iv(this.addr,e)}function Vx(n,e){n.uniform3iv(this.addr,e)}function Wx(n,e){n.uniform4iv(this.addr,e)}function Xx(n,e){n.uniform1uiv(this.addr,e)}function qx(n,e){n.uniform2uiv(this.addr,e)}function Yx(n,e){n.uniform3uiv(this.addr,e)}function Zx(n,e){n.uniform4uiv(this.addr,e)}function $x(n,e,t){let i=this.cache,s=e.length,r=ec(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=tc(Zf):a=Yf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Jx(n,e,t){let i=this.cache,s=e.length,r=ec(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Kf,r[a])}function Kx(n,e,t){let i=this.cache,s=e.length,r=ec(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=tc($f):a=jf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function jx(n,e,t){let i=this.cache,s=e.length,r=ec(t,s);Xt(i,r)||(n.uniform1iv(this.addr,r),qt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jf,r[a])}function Qx(n){switch(n){case 5126:return Nx;case 35664:return Ux;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return zx;case 35676:return kx;case 5124:case 35670:return Hx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return jx}}var eu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dx(t.type)}},tu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qx(t.type)}},nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},jh=/(\w+)(\])?(\[|\.)?/g;function If(n,e){n.seq.push(e),n.map[e.id]=e}function ey(n,e,t){let i=n.name,s=i.length;for(jh.lastIndex=0;;){let r=jh.exec(i),a=jh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){If(t,c===void 0?new eu(o,n,e):new tu(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new nu(o),If(t,d)),t=d}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ey(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Lf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ty=37297,ny=0;function iy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Df=new Ze;function sy(n){ut._getMatrix(Df,ut.workingColorSpace,n);let e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(n)){case Gr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+iy(n.getShaderSource(e),o)}else return r}function ry(n,e){let t=sy(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ay={[Eh]:"Linear",[Th]:"Reinhard",[wh]:"Cineon",[ya]:"ACESFilmic",[Rh]:"AgX",[Ch]:"Neutral",[Ah]:"Custom"};function oy(n,e){let t=ay[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var jl=new I;function ly(){ut.getLuminanceCoefficients(jl);let n=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function hy(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uy(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ca(n){return n!==""}function Uf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ff(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var dy=/^[ \t]*#include +<([\w\d./]+)>/gm;function iu(n){return n.replace(dy,fy)}function fy(n,e){let t=tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return iu(t)}var py=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(n){return n.replace(py,my)}function my(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var gy={[xs]:"SHADOWMAP_TYPE_PCF",[ur]:"SHADOWMAP_TYPE_VSM"};function _y(n){return gy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xy={[dr]:"ENVMAP_MODE_REFRACTION"};function yy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":xy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vy={[cl]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function My(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vy[n.combine]||"ENVMAP_BLENDING_NONE"}function Sy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=_y(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=yy(t),d=My(t),h=cy(t),f=hy(r),p=s.createProgram(),v,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ca).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ca).join(`
`),m.length>0&&(m+=`
`)):(v=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),m=[Bf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?tt.tonemapping_pars_fragment:"",t.toneMapping!==ai?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ry("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),a=iu(a),a=Uf(a,t),a=Ff(a,t),o=iu(o),o=Uf(o,t),o=Ff(o,t),a=Of(a),o=Of(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===Hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+v+a,M=g+m+o,y=Lf(s,s.VERTEX_SHADER,x),A=Lf(s,s.FRAGMENT_SHADER,M);s.attachShader(p,y),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(y)||"",G=s.getShaderInfoLog(A)||"",R=D.trim(),O=z.trim(),U=G.trim(),F=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,y,A);else{let H=Nf(s,y,"vertex"),J=Nf(s,A,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+H+`
`+J)}else R!==""?Ve("WebGLProgram: Program Info Log:",R):(O===""||U==="")&&(Y=!1);Y&&(C.diagnostics={runnable:F,programLog:R,vertexShader:{log:O,prefix:v},fragmentShader:{log:U,prefix:m}})}s.deleteShader(y),s.deleteShader(A),_=new pr(s,p),S=uy(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,ty)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=A,this}var by=0,su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ru(e),t.set(e,i)),i}},ru=class{constructor(e){this.id=by++,this.code=e,this.usedTimes=0}};function Ey(n){return n===Ji||n===Ta||n===wa}function Ty(n,e,t,i,s,r){let a=new qr,o=new su,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,S,L,C,D,z){let G=C.fog,R=D.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,F=e.get(_.envMap||O,U),Y=h[_.type],H=i.precision;_.precision!==null&&(H=i.getMaxPrecision(_.precision),H!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,te=J!==void 0?J.length:0,be=0;R.morphAttributes.position!==void 0&&(be=1),R.morphAttributes.normal!==void 0&&(be=2),R.morphAttributes.color!==void 0&&(be=3);let Fe,K,ye,Ae;if(Y){let Me=li[Y];Fe=Me.vertexShader,K=Me.fragmentShader}else{Fe=_.vertexShader,K=_.fragmentShader;let Me=o.getVertexShaderStage(_),Mt=o.getFragmentShaderStage(_);o.update(_,Me,Mt),ye=Me.id,Ae=Mt.id}let Be=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ze=D.isInstancedMesh===!0,At=D.isBatchedMesh===!0,Ge=!!_.map,nt=!!_.matcap,rt=!!F,ie=rt&&F.isPMREMTexture===!0,ue=!!_.aoMap,le=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,xe=!!_.normalMap,Je=!!_.displacementMap,Ne=!!_.emissiveMap,at=!!_.metalnessMap,lt=!!_.roughnessMap,gt=_.anisotropy>0,k=_.clearcoat>0,zt=_.diffuseRoughness>0,st=_.dispersion>0,St=_.retroreflectivity>0,me=_.iridescence>0,Ut=_.sheen>0,ke=_.transmission>0,qe=gt&&!!_.anisotropyMap,P=k&&!!_.clearcoatMap,b=k&&!!_.clearcoatNormalMap,W=k&&!!_.clearcoatRoughnessMap,re=zt&&!!_.diffuseRoughnessMap,ne=me&&!!_.iridescenceMap,ce=me&&!!_.iridescenceThicknessMap,ge=Ut&&!!_.sheenColorMap,j=Ut&&!!_.sheenRoughnessMap,Q=!!_.specularMap,de=!!_.specularColorMap,N=!!_.specularIntensityMap,ee=ke&&!!_.transmissionMap,Z=ke&&!!_.thicknessMap,fe=!!_.gradientMap,oe=!!_.alphaMap,he=_.alphaTest>0,Ue=!!_.alphaHash,Qe=!!_.extensions,ae=ai;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Oe=ie?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,je={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:K,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:At,batchingColor:At&&D._colorsTexture!==null,instancing:ze,instancingColor:ze&&D.instanceColor!==null,instancingMorph:ze&&D.morphTexture!==null,outputColorSpace:Be===null?n.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:nt,envMap:rt,envMapMode:rt&&F.mapping,envMapPMREM:ie,envMapMaxLod:ie?Oe.length-1:null,envMapSize:ie?Oe[0].width:null,aoMap:ue,lightMap:le,bumpMap:we,normalMap:xe,displacementMap:Je,emissiveMap:Ne,normalMapObjectSpace:xe&&_.normalMapType===jd,normalMapTangentSpace:xe&&_.normalMapType===Aa,packedNormalMap:xe&&_.normalMapType===Aa&&Ey(_.normalMap.format),metalnessMap:at,roughnessMap:lt,anisotropy:gt,anisotropyMap:qe,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:zt,diffuseRoughnessMap:re,dispersion:st,retroreflection:St,iridescence:me,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:Ut,sheenColorMap:ge,sheenRoughnessMap:j,specularMap:Q,specularColorMap:de,specularIntensityMap:N,transmission:ke,transmissionMap:ee,thicknessMap:Z,gradientMap:fe,opaque:_.transparent===!1&&_.blending===$i&&_.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:Ue,combine:_.combine,mapUv:Ge&&f(_.map.channel),aoMapUv:ue&&f(_.aoMap.channel),lightMapUv:le&&f(_.lightMap.channel),bumpMapUv:we&&f(_.bumpMap.channel),normalMapUv:xe&&f(_.normalMap.channel),displacementMapUv:Je&&f(_.displacementMap.channel),emissiveMapUv:Ne&&f(_.emissiveMap.channel),metalnessMapUv:at&&f(_.metalnessMap.channel),roughnessMapUv:lt&&f(_.roughnessMap.channel),anisotropyMapUv:qe&&f(_.anisotropyMap.channel),clearcoatMapUv:P&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:de&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:ee&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:oe&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(xe||gt),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Ge||oe),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&xe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&ut.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:Ne&&_.emissiveMap.isVideoTexture===!0&&ut.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Dn,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||At)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(m(S,_),g(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let S=h[_.type],L;if(S){let C=li[S];L=yf.clone(C.uniforms)}else L=_.uniforms;return L}function M(_,S){let L=u.get(S);return L!==void 0?++L.usedTimes:(L=new Sy(n,S,_,s),c.push(L),u.set(S,L)),L}function y(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:v,getUniforms:x,acquireProgram:M,releaseProgram:y,releaseShaderCache:A,programs:c,dispose:w}}function wy(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Ay(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kf(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,v,m,g){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:g},n[e]=x):(x.id=h.id,x.object=h,x.geometry=f,x.material=p,x.materialVariant=a(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=m,x.group=g),e++,x}function l(h,f,p,v,m,g,x){x.reversedDepth===!0&&(m=-m);let M=o(h,f,p,v,m,g);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):t.push(M)}function c(h,f,p,v,m,g){let x=o(h,f,p,v,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,f){t.length>1&&t.sort(h||Ay),i.length>1&&i.sort(f||zf),s.length>1&&s.sort(f||zf)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Ry(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new kf,n.set(i,[a])):s>=r.length?(a=new kf,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Le};break;case"SpotLight":t={position:new I,direction:new I,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Py(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Iy=0;function Ly(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dy(n){let e=new Cy,t=Py(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ot,a=new ot;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,v=0,m=0,g=0,x=0,M=0,y=0,A=0,w=0,_=0,S=0,L=0,C=0;c.sort(Ly);for(let z=0,G=c.length;z<G;z++){let R=c[z],O=R.color,U=R.intensity,F=R.distance,Y=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ji?Y=R.shadow.map.texture:Y=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*U,d+=O.g*U,h+=O.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],U);C++}else if(R.isSunLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=te,i.sunShadowMap[p]=Y;let be=J.getViewportCount();for(let Fe=0;Fe<be;Fe++)i.sunShadowMatrix[v+Fe]=J.getMatrix(Fe),i.sunShadowCascade[v+Fe]=J._cascadeData[Fe];v+=be,p++}i.sun[f]=H,f++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=H,m++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(U),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[x]=H;let J=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,J.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[x]=J.matrix,R.castShadow){let te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.spotShadow[x]=te,i.spotShadowMap[x]=Y,_++}x++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(O).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=H,M++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,w++}i.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[y]=H,y++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==M||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=x,i.rectArea.length=M,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-L,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=x,D.rectAreaLength=M,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=C,i.version=Iy++)}function l(c,u){let d=0,h=0,f=0,p=0,v=0,m=0,g=u.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let y=c[x];if(y.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),d++}else if(y.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),h++}else if(y.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let A=i.rectArea[v];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Hf(n){let e=new Dy(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Ny(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hf(n),e.set(s,[o])):r>=a.length?(o=new Hf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fy=`uniform sampler2D shadow_pass;
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
}`,Oy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],By=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Gf=new ot,Ra=new I,Qh=new I;function zy(n,e,t){let i=new Hi,s=new se,r=new se,a=new wt,o=new $o,l=new Jo,c={},u=t.maxTextureSize,d={[Zi]:Wt,[Wt]:Zi,[Dn]:Dn},h=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:Uy,fragmentShader:Fy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new yt;p.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ye(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xs;let g=this.type;this.render=function(w,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Cd&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xs);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(ys),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=g!==this.type;G&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=w.length;R<O;R++){let U=w[R],F=U.shadow;if(F===void 0){Ve("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Y=F.getFrameExtents();s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ur){if(U.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Pn(s.x,s.y,{format:Ji,type:Kn,minFilter:yn,magFilter:yn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new wi(s.x,s.y,On),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=bi,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt}else U.isPointLight?(F.map=new Pa(s.x),F.map.depthTexture=new ea(s.x,Jn)):(F.map=new Pn(s.x,s.y),F.map.depthTexture=new wi(s.x,s.y,Jn)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=bi,this.type===xs?(F.map.depthTexture.compareFunction=H?Bh:Oh,F.map.depthTexture.minFilter=yn,F.map.depthTexture.magFilter=yn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Qt,F.map.depthTexture.magFilter=Qt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,S);let te=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:S.layers;for(let be=0;be<J;be++){let Fe=F.getCamera(be);if(U.isPointLight){let K=F.camera,ye=F.matrix,Ae=U.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Ra.setFromMatrixPosition(U.matrixWorld),K.position.copy(Ra),Qh.copy(K.position),Qh.add(Oy[be]),K.up.copy(By[be]),K.lookAt(Qh),K.updateMatrixWorld(),ye.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Gf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Gf,K.coordinateSystem,K.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,be),n.clear();else{be===0&&(n.setRenderTarget(F.map),n.clear());let K=F.getViewport(be);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(a)}i=F.getFrustum(be),y(_,S,Fe,U,te,this.type)}F.isPointLightShadow!==!0&&this.type===ur&&x(F,S),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,D)};function x(w,_){let S=e.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new Pn(s.x,s.y,{format:Ji,type:Kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(_,null,S,h,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(_,null,S,f,v,null)}function M(w,_,S,L){let C=null,D=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)C=D;else if(C=S.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=C.uuid,G=_.uuid,R=c[z];R===void 0&&(R={},c[z]=R);let O=R[G];O===void 0&&(O=C.clone(),R[G]=O,_.addEventListener("dispose",A)),C=O}if(C.visible=_.visible,C.wireframe=_.wireframe,L===ur?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=S}return C}function y(w,_,S,L,C,D){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===ur)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let R=e.update(w),O=w.material;if(Array.isArray(O)){let U=R.groups;for(let F=0,Y=U.length;F<Y;F++){let H=U[F],J=O[H.materialIndex];if(J&&J.visible){let te=M(w,J,L,D);w.onBeforeShadow(n,w,_,S,R,te,H),n.renderBufferDirect(S,null,R,te,w,H),w.onAfterShadow(n,w,_,S,R,te,H)}}}else if(O.visible){let U=M(w,O,L,D);w.onBeforeShadow(n,w,_,S,R,U,null),n.renderBufferDirect(S,null,R,U,w,null),w.onAfterShadow(n,w,_,S,R,U,null)}}let G=w.children;for(let R=0,O=G.length;R<O;R++)y(G[R],_,S,L,C,D)}function A(w){w.target.removeEventListener("dispose",A);for(let S in c){let L=c[S],C=w.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function ky(n,e){function t(){let N=!1,ee=new wt,Z=null,fe=new wt(0,0,0,0);return{setMask:function(oe){Z!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),Z=oe)},setLocked:function(oe){N=oe},setClear:function(oe,he,Ue,Qe,ae){ae===!0&&(oe*=Qe,he*=Qe,Ue*=Qe),ee.set(oe,he,Ue,Qe),fe.equals(ee)===!1&&(n.clearColor(oe,he,Ue,Qe),fe.copy(ee))},reset:function(){N=!1,Z=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,ee=!1,Z=null,fe=null,oe=null;return{setReversed:function(he){if(ee!==he){let Ue=e.get("EXT_clip_control");he?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),ee=he;let Qe=oe;oe=null,this.setClear(Qe)}},getReversed:function(){return ee},setTest:function(he){he?ve(n.DEPTH_TEST):ze(n.DEPTH_TEST)},setMask:function(he){Z!==he&&!N&&(n.depthMask(he),Z=he)},setFunc:function(he){if(ee&&(he=cf[he]),fe!==he){switch(he){case Ao:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Co:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case Po:n.depthFunc(n.EQUAL);break;case Io:n.depthFunc(n.GEQUAL);break;case Lo:n.depthFunc(n.GREATER);break;case Do:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=he}},setLocked:function(he){N=he},setClear:function(he){oe!==he&&(oe=he,ee&&(he=1-he),n.clearDepth(he))},reset:function(){N=!1,Z=null,fe=null,oe=null,ee=!1}}}function s(){let N=!1,ee=null,Z=null,fe=null,oe=null,he=null,Ue=null,Qe=null,ae=null;return{setTest:function(Oe){N||(Oe?ve(n.STENCIL_TEST):ze(n.STENCIL_TEST))},setMask:function(Oe){ee!==Oe&&!N&&(n.stencilMask(Oe),ee=Oe)},setFunc:function(Oe,je,Me){(Z!==Oe||fe!==je||oe!==Me)&&(n.stencilFunc(Oe,je,Me),Z=Oe,fe=je,oe=Me)},setOp:function(Oe,je,Me){(he!==Oe||Ue!==je||Qe!==Me)&&(n.stencilOp(Oe,je,Me),he=Oe,Ue=je,Qe=Me)},setLocked:function(Oe){N=Oe},setClear:function(Oe){ae!==Oe&&(n.clearStencil(Oe),ae=Oe)},reset:function(){N=!1,ee=null,Z=null,fe=null,oe=null,he=null,Ue=null,Qe=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,y=null,A=null,w=null,_=null,S=new Le(0,0,0),L=0,C=!1,D=null,z=null,G=null,R=null,O=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Y>=2);let J=null,te={},be=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),K=new wt().fromArray(be),ye=new wt().fromArray(Fe);function Ae(N,ee,Z,fe){let oe=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<Z;Ue++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ee+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return he}let Be={};Be[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Be[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Be[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Ks),we(!1),xe(yh),ve(n.CULL_FACE),ue(ys);function ve(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ze(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function At(N,ee){return h[N]!==ee?(n.bindFramebuffer(N,ee),h[N]=ee,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ee),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ge(N,ee){let Z=p,fe=!1;if(N){Z=f.get(ee),Z===void 0&&(Z=[],f.set(ee,Z));let oe=N.textures;if(Z.length!==oe.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Ue=oe.length;he<Ue;he++)Z[he]=n.COLOR_ATTACHMENT0+he;Z.length=oe.length,fe=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,fe=!0);fe&&n.drawBuffers(Z)}function nt(N){return v!==N?(n.useProgram(N),v=N,!0):!1}let rt={[vs]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};rt[Dd]=n.MIN,rt[Nd]=n.MAX;let ie={[Ud]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[Sh]:n.SRC_ALPHA,[Vd]:n.SRC_ALPHA_SATURATE,[Hd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[bh]:n.ONE_MINUS_SRC_ALPHA,[Gd]:n.ONE_MINUS_DST_COLOR,[kd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(N,ee,Z,fe,oe,he,Ue,Qe,ae,Oe){if(N===ys){m===!0&&(ze(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),N!==Pd){if(N!==g||Oe!==C){if((x!==vs||A!==vs)&&(n.blendEquation(n.FUNC_ADD),x=vs,A=vs),Oe)switch(N){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFunc(n.ONE,n.ONE);break;case vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",N);break}else switch(N){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Sn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",N);break}M=null,y=null,w=null,_=null,S.set(0,0,0),L=0,g=N,C=Oe}return}oe=oe||ee,he=he||Z,Ue=Ue||fe,(ee!==x||oe!==A)&&(n.blendEquationSeparate(rt[ee],rt[oe]),x=ee,A=oe),(Z!==M||fe!==y||he!==w||Ue!==_)&&(n.blendFuncSeparate(ie[Z],ie[fe],ie[he],ie[Ue]),M=Z,y=fe,w=he,_=Ue),(Qe.equals(S)===!1||ae!==L)&&(n.blendColor(Qe.r,Qe.g,Qe.b,ae),S.copy(Qe),L=ae),g=N,C=!1}function le(N,ee){N.side===Dn?ze(n.CULL_FACE):ve(n.CULL_FACE);let Z=N.side===Wt;ee&&(Z=!Z),we(Z),N.blending===$i&&N.transparent===!1?ue(ys):ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ne(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function xe(N){N!==Ad?(ve(n.CULL_FACE),N!==z&&(N===yh?n.cullFace(n.BACK):N===Rd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ze(n.CULL_FACE),z=N}function Je(N){N!==G&&(F&&n.lineWidth(N),G=N)}function Ne(N,ee,Z){N?(ve(n.POLYGON_OFFSET_FILL),(R!==ee||O!==Z)&&(R=ee,O=Z,a.getReversed()&&(ee=-ee,Z=-Z),n.polygonOffset(ee,Z))):ze(n.POLYGON_OFFSET_FILL)}function at(N){N?ve(n.SCISSOR_TEST):ze(n.SCISSOR_TEST)}function lt(N){N===void 0&&(N=n.TEXTURE0+U-1),J!==N&&(n.activeTexture(N),J=N)}function gt(N,ee,Z){Z===void 0&&(J===null?Z=n.TEXTURE0+U-1:Z=J);let fe=te[Z];fe===void 0&&(fe={type:void 0,texture:void 0},te[Z]=fe),(fe.type!==N||fe.texture!==ee)&&(J!==Z&&(n.activeTexture(Z),J=Z),n.bindTexture(N,ee||Be[N]),fe.type=N,fe.texture=ee)}function k(){let N=te[J];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function zt(){try{n.compressedTexImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function st(){try{n.compressedTexImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function St(){try{n.texSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function me(){try{n.texSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function Ut(){try{n.compressedTexSubImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function ke(){try{n.compressedTexSubImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function qe(){try{n.texStorage2D(...arguments)}catch(N){We("WebGLState:",N)}}function P(){try{n.texStorage3D(...arguments)}catch(N){We("WebGLState:",N)}}function b(){try{n.texImage2D(...arguments)}catch(N){We("WebGLState:",N)}}function W(){try{n.texImage3D(...arguments)}catch(N){We("WebGLState:",N)}}function re(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ne(N,ee){d[N]!==ee&&(n.pixelStorei(N,ee),d[N]=ee)}function ce(N){K.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function ge(N){ye.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ye.copy(N))}function j(N,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let fe=Z.get(N);fe===void 0&&(fe=n.getUniformBlockIndex(ee,N.name),n.uniformBlockBinding(ee,fe,fe),Z.set(N,fe))}function Q(N,ee,Z){let oe=c.get(ee).get(N);l[oe]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,Z),l[oe]=Z)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,te={},h={},l={},f=new WeakMap,p=[],v=null,m=!1,g=null,x=null,M=null,y=null,A=null,w=null,_=null,S=new Le(0,0,0),L=0,C=!1,D=null,z=null,G=null,R=null,O=null,K.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:ze,bindFramebuffer:At,drawBuffers:Ge,useProgram:nt,setBlending:ue,setMaterial:le,setFlipSided:we,setCullFace:xe,setLineWidth:Je,setPolygonOffset:Ne,setScissorTest:at,activeTexture:lt,bindTexture:gt,unbindTexture:k,compressedTexImage2D:zt,compressedTexImage3D:st,texImage2D:b,texImage3D:W,pixelStorei:ne,getParameter:re,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:qe,texStorage3D:P,texSubImage2D:St,texSubImage3D:me,compressedTexSubImage2D:Ut,compressedTexSubImage3D:ke,scissor:ce,viewport:ge,reset:de}}function Hy(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,v=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return m?new OffscreenCanvas(P,b):Vr("canvas")}function x(P,b,W){let re=1,ne=qe(P);if((ne.width>W||ne.height>W)&&(re=W/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(re*ne.width),ge=Math.floor(re*ne.height);h===void 0&&(h=g(ce,ge));let j=b?g(ce,ge):h;return j.width=ce,j.height=ge,j.getContext("2d").drawImage(P,0,0,ce,ge),Ve("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ce+"x"+ge+")."),j}else return"data"in P&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function M(P){return P.generateMipmaps}function y(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(P,b,W,re,ne,ce=!1){if(P!==null){if(n[P]!==void 0)return n[P];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge;re&&(ge=e.get("EXT_texture_norm16"),ge||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.R16_EXT),W===n.SHORT&&ge&&(j=ge.R16_SNORM_EXT)),b===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),b===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.RG16_EXT),W===n.SHORT&&ge&&(j=ge.RG16_SNORM_EXT)),b===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),b===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),b===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),b===n.RGB&&(W===n.UNSIGNED_SHORT&&ge&&(j=ge.RGB16_EXT),W===n.SHORT&&ge&&(j=ge.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),b===n.RGBA){let Q=ce?Gr:ut.getTransfer(ne);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=Q===xt?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.RGBA16_EXT),W===n.SHORT&&ge&&(j=ge.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function _(P,b){let W;return P?b===null||b===Jn||b===Ss?W=n.DEPTH24_STENCIL8:b===On?W=n.DEPTH32F_STENCIL8:b===fr&&(W=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Jn||b===Ss?W=n.DEPTH_COMPONENT24:b===On?W=n.DEPTH_COMPONENT32F:b===fr&&(W=n.DEPTH_COMPONENT16),W}function S(P,b){return M(P)===!0||P.isFramebufferTexture&&P.minFilter!==Qt&&P.minFilter!==yn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function L(P){let b=new WeakRef(P);i.get(P).__ref=b,p.add(b),v.register(P,b,b)}function C(P){let b=i.get(P).__ref;b!==void 0&&(p.delete(b),v.unregister(b))}function D(P){G(P.target)}function z(P){R(P.target)}function G(P){P.removeEventListener("dispose",D),C(P),U(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&d.delete(P)}function R(P){P.removeEventListener("dispose",z),C(P),Y(P)}function O(){for(let P of p){let b=P.deref();b!==void 0&&(b.isRenderTarget===!0?R(b):G(b))}p.clear(),d.clear()}function U(P){let b=i.get(P);if(b.__webglInit===void 0)return;let W=P.source,re=f.get(W);if(re){let ne=re[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(P),Object.keys(re).length===0&&f.delete(W)}i.remove(P)}function F(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let W=P.source,re=f.get(W);delete re[b.__cacheKey],a.memory.textures--}function Y(P){let b=i.get(P);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&G(W),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(b.__webglFramebuffer[ne]))for(let ce=0;ce<b.__webglFramebuffer[ne].length;ce++)n.deleteFramebuffer(b.__webglFramebuffer[ne][ce]);else n.deleteFramebuffer(b.__webglFramebuffer[ne]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[ne])}else{if(Array.isArray(b.__webglFramebuffer))for(let ne=0;ne<b.__webglFramebuffer.length;ne++)n.deleteFramebuffer(b.__webglFramebuffer[ne]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ne=0;ne<b.__webglColorRenderbuffer.length;ne++)b.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[ne]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let re=P.textures;for(let ne=0,ce=re.length;ne<ce;ne++){let ge=i.get(re[ne]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(re[ne])}i.remove(P)}let H=0;function J(){H=0}function te(){return H}function be(P){H=P}function Fe(){let P=H;return P>=s.maxTextures&&Ve("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,P}function K(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.mipmapsAutoUpdate),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function ye(P,b){let W=i.get(P);if(P.isVideoTexture&&Ut(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let re=P.image;if(re===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{le(W,P,b);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+b)}function Ae(P,b){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){le(W,P,b);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+b)}function Be(P,b){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){le(W,P,b);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+b)}function ve(P,b){let W=i.get(P);if(P.version>0&&W.__version!==P.version){we(W,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+b)}let ze={[Zn]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[No]:n.MIRRORED_REPEAT},At={[Qt]:n.NEAREST,[Jd]:n.NEAREST_MIPMAP_NEAREST,[va]:n.NEAREST_MIPMAP_LINEAR,[yn]:n.LINEAR,[dl]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},Ge={[ef]:n.NEVER,[zh]:n.ALWAYS,[tf]:n.LESS,[Oh]:n.LEQUAL,[nf]:n.EQUAL,[Bh]:n.GEQUAL,[sf]:n.GREATER,[rf]:n.NOTEQUAL};function nt(P,b){if(b.type===On&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===yn||b.magFilter===dl||b.magFilter===va||b.magFilter===Ri||b.minFilter===yn||b.minFilter===dl||b.minFilter===va||b.minFilter===Ri)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ze[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ze[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ze[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,At[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,At[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==va&&b.minFilter!==Ri||b.type===On&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function rt(P,b){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",D),L(b));let re=b.source,ne=f.get(re);ne===void 0&&(ne={},f.set(re,ne));let ce=K(b);if(ce!==P.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[ce].usedTimes++;let ge=ne[P.__cacheKey];ge!==void 0&&(ne[P.__cacheKey].usedTimes--,ge.usedTimes===0&&F(b)),P.__cacheKey=ce,P.__webglTexture=ne[ce].texture}return W}function ie(P,b,W){return Math.floor(Math.floor(P/W)/b)}function ue(P,b,W,re){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,b.width,b.height,W,re,b.data);else{ce.sort((N,ee)=>N.start-ee.start);let ge=0;for(let N=1;N<ce.length;N++){let ee=ce[ge],Z=ce[N],fe=ee.start+ee.count,oe=ie(Z.start,b.width,4),he=ie(ee.start,b.width,4);Z.start<=fe+1&&oe===he&&ie(Z.start+Z.count-1,b.width,4)===oe?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++ge,ce[ge]=Z)}ce.length=ge+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,b.width);for(let N=0,ee=ce.length;N<ee;N++){let Z=ce[N],fe=Math.floor(Z.start/4),oe=Math.ceil(Z.count/4),he=fe%b.width,Ue=Math.floor(fe/b.width),Qe=oe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Ue),t.texSubImage2D(n.TEXTURE_2D,0,he,Ue,Qe,ae,W,re,b.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function le(P,b,W){let re=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(re=n.TEXTURE_3D);let ne=rt(P,b),ce=b.source;t.bindTexture(re,P.__webglTexture,n.TEXTURE0+W);let ge=i.get(ce);if(ce.version!==ge.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ae=ut.getPrimaries(ut.workingColorSpace),Oe=b.colorSpace===Pi?null:ut.getPrimaries(b.colorSpace),je=b.colorSpace===Pi||ae===Oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je)}t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment);let Q=x(b.image,!1,s.maxTextureSize);Q=ke(b,Q);let de=r.convert(b.format,b.colorSpace),N=r.convert(b.type),ee=w(b.internalFormat,de,N,b.normalized,b.colorSpace,b.isVideoTexture);nt(re,b);let Z,fe=b.mipmaps,oe=b.isVideoTexture!==!0,he=ge.__version===void 0||ne===!0,Ue=ce.dataReady,Qe=S(b,Q);if(b.isDepthTexture)ee=_(b.format===Ci,b.type),he&&(oe?t.texStorage2D(n.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,de,N,null));else if(b.isDataTexture)if(fe.length>0){oe&&he&&t.texStorage2D(n.TEXTURE_2D,Qe,ee,fe[0].width,fe[0].height);for(let ae=0,Oe=fe.length;ae<Oe;ae++)Z=fe[ae],oe?Ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,de,N,Z.data):t.texImage2D(n.TEXTURE_2D,ae,ee,Z.width,Z.height,0,de,N,Z.data);b.generateMipmaps=!1}else oe?(he&&t.texStorage2D(n.TEXTURE_2D,Qe,ee,Q.width,Q.height),Ue&&ue(b,Q,de,N)):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,de,N,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){oe&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ee,fe[0].width,fe[0].height,Q.depth);for(let ae=0,Oe=fe.length;ae<Oe;ae++)if(Z=fe[ae],b.format!==jn)if(de!==null)if(oe){if(Ue)if(b.layerUpdates.size>0){let je=qh(Z.width,Z.height,b.format,b.type);for(let Me of b.layerUpdates){let Mt=Z.data.subarray(Me*je/Z.data.BYTES_PER_ELEMENT,(Me+1)*je/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Me,Z.width,Z.height,1,de,Mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,Q.depth,de,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ee,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Ue&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Z.width,Z.height,Q.depth,de,N,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ee,Z.width,Z.height,Q.depth,0,de,N,Z.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(n.TEXTURE_2D,Qe,ee,fe[0].width,fe[0].height);for(let ae=0,Oe=fe.length;ae<Oe;ae++)Z=fe[ae],b.format!==jn?de!==null?oe?Ue&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,de,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ee,Z.width,Z.height,0,Z.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Z.width,Z.height,de,N,Z.data):t.texImage2D(n.TEXTURE_2D,ae,ee,Z.width,Z.height,0,de,N,Z.data)}else if(b.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Qe,ee,Q.width,Q.height,Q.depth),Ue)if(b.layerUpdates.size>0){let ae=qh(Q.width,Q.height,b.format,b.type);for(let Oe of b.layerUpdates){let je=Q.data.subarray(Oe*ae/Q.data.BYTES_PER_ELEMENT,(Oe+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Oe,Q.width,Q.height,1,de,N,je)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,N,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,de,N,Q.data);else if(b.isData3DTexture)oe?(he&&t.texStorage3D(n.TEXTURE_3D,Qe,ee,Q.width,Q.height,Q.depth),Ue&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,N,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,de,N,Q.data);else if(b.isFramebufferTexture){if(he)if(oe)t.texStorage2D(n.TEXTURE_2D,Qe,ee,Q.width,Q.height);else{let ae=Q.width,Oe=Q.height;for(let je=0;je<Qe;je++)t.texImage2D(n.TEXTURE_2D,je,ee,ae,Oe,0,de,N,null),ae>>=1,Oe>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),d.add(b),ae.onpaint=Oe=>{let je=Oe.changedElements;for(let Me of d)je.includes(Me.image)&&(Me.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let je=n.RGBA,Me=n.RGBA,Mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,je,Me,Mt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&he){let ae=qe(fe[0]);t.texStorage2D(n.TEXTURE_2D,Qe,ee,ae.width,ae.height)}for(let ae=0,Oe=fe.length;ae<Oe;ae++)Z=fe[ae],oe?Ue&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,N,Z):t.texImage2D(n.TEXTURE_2D,ae,ee,de,N,Z);b.generateMipmaps=!1}else if(oe){if(he){let ae=qe(Q);t.texStorage2D(n.TEXTURE_2D,Qe,ee,ae.width,ae.height)}Ue&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,N,Q)}else t.texImage2D(n.TEXTURE_2D,0,ee,de,N,Q);M(b)&&b.mipmapsAutoUpdate===!0&&y(re),ge.__version=ce.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function we(P,b,W){if(b.image.length!==6)return;let re=rt(P,b),ne=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let ce=i.get(ne);if(ne.version!==ce.__version||re===!0){t.activeTexture(n.TEXTURE0+W);let ge=ut.getPrimaries(ut.workingColorSpace),j=b.colorSpace===Pi?null:ut.getPrimaries(b.colorSpace),Q=b.colorSpace===Pi||ge===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,ee=[];for(let Me=0;Me<6;Me++)!de&&!N?ee[Me]=x(b.image[Me],!0,s.maxCubemapSize):ee[Me]=N?b.image[Me].image:b.image[Me],ee[Me]=ke(b,ee[Me]);let Z=ee[0],fe=r.convert(b.format,b.colorSpace),oe=r.convert(b.type),he=w(b.internalFormat,fe,oe,b.normalized,b.colorSpace),Ue=b.isVideoTexture!==!0,Qe=ce.__version===void 0||re===!0,ae=ne.dataReady,Oe=S(b,Z);nt(n.TEXTURE_CUBE_MAP,b);let je;if(b.isDepthTexture){if(he=_(b.format===Ci,b.type),Qe)if(Ue)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,Z.width,Z.height);else for(let Me=0;Me<6;Me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,Z.width,Z.height,0,fe,oe,null)}else if(de){Ue&&Qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,he,Z.width,Z.height);for(let Me=0;Me<6;Me++){je=ee[Me].mipmaps;for(let Mt=0;Mt<je.length;Mt++){let Jt=je[Mt];b.format!==jn?fe!==null?Ue?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,0,0,Jt.width,Jt.height,fe,Jt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,he,Jt.width,Jt.height,0,Jt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,0,0,Jt.width,Jt.height,fe,oe,Jt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,he,Jt.width,Jt.height,0,fe,oe,Jt.data)}}}else{if(je=b.mipmaps,Ue&&Qe){je.length>0&&Oe++;let Me=qe(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Oe,he,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(N){Ue?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ee[Me].width,ee[Me].height,fe,oe,ee[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,ee[Me].width,ee[Me].height,0,fe,oe,ee[Me].data);for(let Mt=0;Mt<je.length;Mt++){let Di=je[Mt].image[Me].image;Ue?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,0,0,Di.width,Di.height,fe,oe,Di.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,he,Di.width,Di.height,0,fe,oe,Di.data)}}else{Ue?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,fe,oe,ee[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,fe,oe,ee[Me]);for(let Mt=0;Mt<je.length;Mt++){let Jt=je[Mt];Ue?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,0,0,fe,oe,Jt.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,he,fe,oe,Jt.image[Me])}}}M(b)&&b.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ce.__version=ne.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function xe(P,b,W,re,ne,ce){let ge=r.convert(W.format,W.colorSpace),j=r.convert(W.type),Q=w(W.internalFormat,ge,j,W.normalized,W.colorSpace),de=i.get(b),N=i.get(W);if(N.__renderTarget=b,!de.__hasExternalTextures){let ee=Math.max(1,b.width>>ce),Z=Math.max(1,b.height>>ce);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,Q,ee,Z,b.depth,0,ge,j,null):t.texImage2D(ne,ce,Q,ee,Z,0,ge,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,N.__webglTexture,0,St(b)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,N.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(P,b,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let re=b.depthTexture,ne=re&&re.isDepthTexture?re.type:null,ce=_(b.stencilBuffer,ne),ge=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(b),ce,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(b),ce,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ce,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,P)}else{let re=b.textures;for(let ne=0;ne<re.length;ne++){let ce=re[ne],ge=r.convert(ce.format,ce.colorSpace),j=r.convert(ce.type),Q=w(ce.internalFormat,ge,j,ce.normalized,ce.colorSpace);me(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(b),Q,b.width,b.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(b),Q,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Q,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(P,b,W){let re=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(b.depthTexture);ne.__renderTarget=b;let ce=re?b.depthTexture.image[0]:b.depthTexture.image;(!ne.__webglTexture||ce.width!==b.width||ce.height!==b.height)&&(ce.width=b.width,ce.height=b.height,b.depthTexture.needsUpdate=!0),re?ve(b.depthTexture,0):ye(b.depthTexture,0);let ge=ne.__webglTexture,j=St(b),Q=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,de=b.depthTexture.format===Ci?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(b.depthTexture.format===bi)me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,ge,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,ge,0);else if(b.depthTexture.format===Ci)me(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,ge,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(P){let b=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let re=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),re){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=re}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let re=0;re<6;re++)Ne(b.__webglFramebuffer[re],P,re);else P.texture.mipmaps.length>0?Ne(b.__webglFramebuffer[0],P,0):Ne(b.__webglFramebuffer,P,0);else if(W){b.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[re]),b.__webglDepthbuffer[re]===void 0)b.__webglDepthbuffer[re]=n.createRenderbuffer(),Je(b.__webglDepthbuffer[re],P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),Je(b.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function lt(P,b,W){let re=i.get(P);b!==void 0&&xe(re.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&at(P)}function gt(P){let b=P.texture,W=i.get(P),re=i.get(b);P.addEventListener("dispose",z),L(P);let ne=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=b.version,a.memory.textures++),ce){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let Q=0;Q<b.mipmaps.length;Q++)W.__webglFramebuffer[j][Q]=n.createFramebuffer()}else W.__webglFramebuffer[j]=n.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)W.__webglFramebuffer[j]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ge)for(let j=0,Q=ne.length;j<Q;j++){let de=i.get(ne[j]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){let Q=ne[j];W.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let de=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),ee=w(Q.internalFormat,de,N,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),Z=St(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,W.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),nt(n.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)xe(W.__webglFramebuffer[j][Q],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else xe(W.__webglFramebuffer[j],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(b)?y(n.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let j=0,Q=ne.length;j<Q;j++){let de=ne[j],N=i.get(de),ee=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),nt(ee,de),xe(W.__webglFramebuffer,P,de,n.COLOR_ATTACHMENT0+j,ee,0),M(de)&&y(ee)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,re.__webglTexture),nt(j,b),b.mipmaps.length>0)for(let Q=0;Q<b.mipmaps.length;Q++)xe(W.__webglFramebuffer[Q],P,b,n.COLOR_ATTACHMENT0,j,Q);else xe(W.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,j,0);M(b)?y(j):b.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&at(P)}function k(P){let b=P.textures;for(let W=0,re=b.length;W<re;W++){let ne=b[W];if(M(ne)&&ne.mipmapsAutoUpdate===!0){let ce=A(P),ge=i.get(ne).__webglTexture;t.bindTexture(ce,ge),y(ce),t.unbindTexture()}}}let zt=[];function st(P){if(P.samples>0){if(me(P)===!1){let b=P.textures,W=P.width,re=P.height,ne=n.COLOR_BUFFER_BIT,ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(P),j=b.length>1;if(j)for(let de=0;de<b.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<b.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(b[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,W,re,0,0,W,re,ne,n.NEAREST),l===!0&&(zt.length=0,zt.push(n.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&zt.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,zt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<b.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(b[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function St(P){return Math.min(s.maxSamples,P.samples)}function me(P){let b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ut(P){let b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function ke(P,b){let W=P.colorSpace,re=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==Hr&&W!==Pi&&(ut.getTransfer(W)===xt?(re!==jn||ne!==Tn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",W)),b}function qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=J,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=ye,this.setTexture2DArray=Ae,this.setTexture3D=Be,this.setTextureCube=ve,this.rebindTextures=lt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=me,this.dispose=O}function Gy(n,e){function t(i,s=Pi){let r,a=ut.getTransfer(s);if(i===Tn)return n.UNSIGNED_BYTE;if(i===pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ml)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ih)return n.BYTE;if(i===Lh)return n.SHORT;if(i===fr)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===Jn)return n.UNSIGNED_INT;if(i===On)return n.FLOAT;if(i===Kn)return n.HALF_FLOAT;if(i===Uh)return n.ALPHA;if(i===Fh)return n.RGB;if(i===jn)return n.RGBA;if(i===bi)return n.DEPTH_COMPONENT;if(i===Ci)return n.DEPTH_STENCIL;if(i===gl)return n.RED;if(i===_l)return n.RED_INTEGER;if(i===Ji)return n.RG;if(i===xl)return n.RG_INTEGER;if(i===yl)return n.RGBA_INTEGER;if(i===Ma||i===Sa||i===ba||i===Ea)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ma)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ma)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vl||i===Ml||i===Sl||i===bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===El||i===Tl||i===wl||i===Al||i===Rl||i===Ta||i===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===El||i===Tl)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Al)return r.COMPRESSED_R11_EAC;if(i===Rl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return r.COMPRESSED_RG11_EAC;if(i===Cl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Hl||i===Gl||i===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ul)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===zl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wl||i===Xl||i===ql)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Wl)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yl||i===Zl||i===wa||i===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ss?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wy=`
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

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mn({vertexShader:Vy,fragmentShader:Wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new Bt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends ni{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,v=typeof XRWebGLBinding<"u",m=new au,g={},x=t.getContextAttributes(),M=null,y=null,A=[],w=[],_=new se,S=null,L=null,C=new dn;C.viewport=new wt;let D=new dn;D.viewport=new wt;let z=[C,D],G=new ol,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ye=A[K];return ye===void 0&&(ye=new tr,A[K]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(K){let ye=A[K];return ye===void 0&&(ye=new tr,A[K]=ye),ye.getGripSpace()},this.getHand=function(K){let ye=A[K];return ye===void 0&&(ye=new tr,A[K]=ye),ye.getHandSpace()};function U(K){let ye=w.indexOf(K.inputSource);if(ye===-1)return;let Ae=A[ye];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,c||a),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<A.length;K++){let ye=w[K];ye!==null&&(w[K]=null,A[K].disconnect(ye))}R=null,O=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(M),f=null,h=null,d=null,s=null,y=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Be=null,ve=null;x.depth&&(ve=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=x.stencil?Ci:bi,Be=x.stencil?Ss:Jn);let ze={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ze),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Pn(h.textureWidth,h.textureHeight,{format:jn,type:Tn,depthTexture:new wi(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Pn(f.framebufferWidth,f.framebufferHeight,{format:jn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(K){for(let ye=0;ye<K.removed.length;ye++){let Ae=K.removed[ye],Be=w.indexOf(Ae);Be>=0&&(w[Be]=null,A[Be].disconnect(Ae))}for(let ye=0;ye<K.added.length;ye++){let Ae=K.added[ye],Be=w.indexOf(Ae);if(Be===-1){for(let ze=0;ze<A.length;ze++)if(ze>=w.length){w.push(Ae),Be=ze;break}else if(w[ze]===null){w[ze]=Ae,Be=ze;break}if(Be===-1)break}let ve=A[Be];ve&&ve.connect(Ae)}}function H(K,ye){ye===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ye.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ye=K.near,Ae=K.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),G.near=D.near=C.near=ye,G.far=D.far=C.far=Ae,(R!==G.near||O!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),R=G.near,O=G.far),G.layers.mask=K.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Be=K.parent,ve=G.cameras;H(G,Be);for(let ze=0;ze<ve.length;ze++)H(ve[ze],Be);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),J(K,G,Be)};function J(K,ye,Ae){Ae===null?K.matrix.copy(ye.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ye.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ye.projectionMatrix),K.projectionMatrixInverse.copy(ye.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Fo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return g[K]};let te=null;function be(K,ye){if(u=ye.getViewerPose(c||a),p=ye,u!==null){let Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Be=!1;Ae.length!==G.cameras.length&&(G.cameras.length=0,Be=!0);for(let Ge=0;Ge<Ae.length;Ge++){let nt=Ae[Ge],rt=null;if(f!==null)rt=f.getViewport(nt);else{let ue=d.getViewSubImage(h,nt);rt=ue.viewport,Ge===0&&(e.setRenderTargetTextures(y,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(y))}let ie=z[Ge];ie===void 0&&(ie=new dn,ie.layers.enable(Ge),ie.viewport=new wt,z[Ge]=ie),ie.matrix.fromArray(nt.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(nt.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(rt.x,rt.y,rt.width,rt.height),Ge===0&&(G.matrix.copy(ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Be===!0&&G.cameras.push(ie)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let Ge=d.getDepthInformation(Ae[0]);Ge&&Ge.isValid&&Ge.texture&&m.init(Ge,s.renderState)}if(ve&&ve.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<Ae.length;Ge++){let nt=Ae[Ge].camera;if(nt){let rt=g[nt];rt||(rt=new ta,g[nt]=rt);let ie=d.getCameraImage(nt);rt.sourceTexture=ie}}}}for(let Ae=0;Ae<A.length;Ae++){let Be=w[Ae],ve=A[Ae];Be!==null&&ve!==void 0&&ve.update(Be,ye,c||a)}te&&te(K,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),p=null}let Fe=new Vf;Fe.setAnimationLoop(be),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},Xy=new ot,Qf=new Ze;Qf.set(-1,0,0,0,1,0,0,0,1);function qy(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Vh(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,y)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Wt&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Wt&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=e.get(g),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Wt&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){let x=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Yy(n,e,t,i){let s={},r={};function a(x,M){let y=M.program;i.uniformBlockBinding(x,y,s[x.id])}function o(x,M){let y=s[x.id];y===void 0&&(p(x),y=l(x),s[x.id]=y,x.addEventListener("dispose",m));let A=M.program;i.updateUBOMapping(x,A);let w=e.render.frame;r[x.id]!==w&&(c(x),r[x.id]=w)}function l(x){let M=n.createBuffer(),y=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,y,A),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(x){let M=s[x.id],y=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let w=0,_=y.length;w<_;w++){let S=y[w];if(Array.isArray(S))for(let L=0,C=S.length;L<C;L++)u(S[L],w,L,A);else u(S,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(x,M,y,A){if(h(x,M,y,A)===!0){let w=x.__offset,_=x.value;if(Array.isArray(_)){let S=0;for(let L=0;L<_.length;L++){let C=_[L],D=v(C,!0);d(C,x.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,x.__data)}}function d(x,M,y){typeof x=="number"||typeof x=="boolean"?M[y]=x:x.isMatrix3?(M[y]=x.elements[0],M[y+1]=x.elements[1],M[y+2]=x.elements[2],M[y+3]=0,M[y+4]=x.elements[3],M[y+5]=x.elements[4],M[y+6]=x.elements[5],M[y+7]=0,M[y+8]=x.elements[6],M[y+9]=x.elements[7],M[y+10]=x.elements[8],M[y+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-y),y):x.toArray(M,y)}function h(x,M,y,A){let w=x.value,_=M+"_"+y;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let S=A[_],L=!1;for(let C=0;C<w.length;C++)f(w[C],S,C)===!0&&(L=!0);return L}return f(w,A,_)}function f(x,M,y){if(M[y]===void 0)return typeof x=="number"||typeof x=="boolean"?M[y]=x:ArrayBuffer.isView(x)?M[y]=x.slice():M[y]=x.clone(),!0;{let A=M[y];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return M[y]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(x){let M=x.uniforms,y=0,A=16;for(let _=0,S=M.length;_<S;_++){let L=Array.isArray(M[_])?M[_]:[M[_]];for(let C=0,D=L.length;C<D;C++){let z=L[C],G=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(M[_])||Array.isArray(z.value),O=y;for(let F=0,Y=G.length;F<Y;F++){let H=G[F],J=v(H,R),te=y%A,be=te%J.boundary,Fe=te+be;y+=be,Fe!==0&&A-Fe<J.storage&&(y+=A-Fe),F===0&&(O=y),y+=J.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((y-O)/Float32Array.BYTES_PER_ELEMENT),z.__offset=O}}let w=y%A;return w>0&&(y+=A-w),x.__size=y,x.__cache={},this}function v(x,M){let y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=16,y.storage=48):x.isMatrix4?(y.boundary=16,y.storage=64):x.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(y.boundary=16,y.storage=x.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(x){let M=x.target;M.removeEventListener("dispose",m),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:g}}var Zy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),oi=null;function $y(){return oi===null&&(oi=new jr(Zy,16,16,Ji,Kn),oi.name="DFG_LUT",oi.minFilter=yn,oi.magFilter=yn,oi.wrapS=ti,oi.wrapT=ti,oi.generateMipmaps=!1,oi.needsUpdate=!0),oi}var Ql=class{constructor(e={}){let{canvas:t=af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let v=f,m=new Set([yl,xl,_l]),g=new Set([Tn,Jn,fr,Ss,pl,ml]),x=new Uint32Array(4),M=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],S=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,G=null,R=null,O=null;this._outputColorSpace=Tt;let U=0,F=0,Y=null,H=-1,J=null,te=new wt,be=new wt,Fe=null,K=new Le(0),ye=0,Ae=t.width,Be=t.height,ve=1,ze=null,At=null,Ge=new wt(0,0,Ae,Be),nt=new wt(0,0,Ae,Be),rt=!1,ie=new Hi,ue=new ko,le=!1,we=!1,xe=new ot,Je=new I,Ne=new wt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},lt=!1;function gt(){return Y===null?ve:1}let k=i;function zt(T,B){return t.getContext(T,B)}let st,St,me,Ut,ke,qe,P,b,W,re,ne,ce,ge,j,Q,de,N,ee,Z,fe,oe,he,Ue;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){let B="webgl2";if(k=zt(B,T),k===null)throw zt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(T){throw t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),We("WebGLRenderer: "+T.message),T}function Qe(){st=new ax(k),st.init(),oe=new Gy(k,st),St=new $_(k,st,e,oe),me=new ky(k,st),St.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),G=k.createFramebuffer(),R=k.createFramebuffer(),O=k.createFramebuffer(),Ut=new cx(k),ke=new wy,qe=new Hy(k,st,me,ke,St,oe,Ut),P=new rx(C),b=new u0(k),he=new Y_(k,b),W=new ox(k,b,Ut,he),re=new ux(k,W,b,he,Ut),ee=new hx(k,St,qe),Q=new J_(ke),ne=new Ty(C,P,st,St,he,Q),ce=new qy(C,ke),ge=new Ry,j=new Ny(st),N=new q_(C,P,me,re,p,l),de=new zy(C,re,St),Ue=new Yy(k,Ut,St,me),Z=new Z_(k,st,Ut),fe=new lx(k,st,Ut),Ut.programs=ne.programs,C.capabilities=St,C.extensions=st,C.properties=ke,C.renderLists=ge,C.shadowMap=de,C.state=me,C.info=Ut}v!==Tn&&(L=new fx(v,t.width,t.height,o,s,r));let ae=new ou(C,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(Ae,Be,!1))},this.getSize=function(T){return T.set(Ae,Be)},this.setSize=function(T,B,q=!0){if(ae.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=T,Be=B,t.width=Math.floor(T*ve),t.height=Math.floor(B*ve),q===!0&&(t.style.width=T+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Ae*ve,Be*ve).floor()},this.setDrawingBufferSize=function(T,B,q){Ae=T,Be=B,ve=q,t.width=Math.floor(T*q),t.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(v===Tn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(te)},this.getViewport=function(T){return T.copy(Ge)},this.setViewport=function(T,B,q,V){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,B,q,V),me.viewport(te.copy(Ge).multiplyScalar(gt()).round())},this.getScissor=function(T){return T.copy(nt)},this.setScissor=function(T,B,q,V){T.isVector4?nt.set(T.x,T.y,T.z,T.w):nt.set(T,B,q,V),me.scissor(be.copy(nt).multiplyScalar(gt()).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(T){me.setScissorTest(rt=T)},this.setOpaqueSort=function(T){ze=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,q=!0){let V=0;if(T){let X=!1;if(Y!==null){let _e=Y.texture.format;X=m.has(_e)}if(X){let _e=Y.texture.type,Ce=g.has(_e),pe=N.getClearColor(),Ee=N.getClearAlpha(),De=pe.r,$e=pe.g,ct=pe.b;Ce?(x[0]=De,x[1]=$e,x[2]=ct,x[3]=Ee,k.clearBufferuiv(k.COLOR,0,x)):(M[0]=De,M[1]=$e,M[2]=ct,M[3]=Ee,k.clearBufferiv(k.COLOR,0,M))}else V|=k.COLOR_BUFFER_BIT}B&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),N.dispose(),ge.dispose(),j.dispose(),qe.dispose(),ke.dispose(),P.dispose(),re.dispose(),W.dispose(),he.dispose(),Ue.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Uu),ae.removeEventListener("sessionend",Fu),is.stop()};function Oe(T){T.preventDefault(),Wr("WebGLRenderer: Context Lost."),D=!0}function je(){Wr("WebGLRenderer: Context Restored."),D=!1;let T=Ut.autoReset,B=de.enabled,q=de.autoUpdate,V=de.needsUpdate,X=de.type;Qe(),Ut.autoReset=T,de.enabled=B,de.autoUpdate=q,de.needsUpdate=V,de.type=X}function Me(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Mt(T){let B=T.target;B.removeEventListener("dispose",Mt),Jt(B)}function Jt(T){Di(T),ke.remove(T)}function Di(T){let B=ke.get(T).programs;B!==void 0&&(B.forEach(function(q){ne.releaseProgram(q)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,V,X,_e){B===null&&(B=at);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,pe=$p(T,B,q,V,X);me.setMaterial(V,Ce);let Ee=q.index,De=1;if(V.wireframe===!0){if(Ee=W.getWireframeAttribute(q),Ee===void 0)return;De=2}let $e=q.drawRange,ct=q.attributes.position,Pe=$e.start*De,ht=($e.start+$e.count)*De;_e!==null&&(Pe=Math.max(Pe,_e.start*De),ht=Math.min(ht,(_e.start+_e.count)*De)),Ee!==null?(Pe=Math.max(Pe,0),ht=Math.min(ht,Ee.count)):ct!=null&&(Pe=Math.max(Pe,0),ht=Math.min(ht,ct.count));let kt=ht-Pe;if(kt<0||kt===1/0)return;he.setup(X,V,pe,q,Ee);let Et,bt=Z;if(Ee!==null&&(Et=b.get(Ee),bt=fe,bt.setIndex(Et)),X.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*gt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(X.isLine){let ln=V.linewidth;ln===void 0&&(ln=1),me.setLineWidth(ln*gt()),X.isLineSegments?bt.setMode(k.LINES):X.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else X.isPoints?bt.setMode(k.POINTS):X.isSprite&&bt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(st.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let ln=X._multiDrawStarts,Ie=X._multiDrawCounts,_n=X._multiDrawCount,_t=Ee?b.get(Ee).bytesPerElement:1,ss=ke.get(V).currentProgram.getUniforms();for(let cn=0;cn<_n;cn++)ss.setValue(k,"_gl_DrawID",cn),bt.render(ln[cn]/_t,Ie[cn])}else if(X.isInstancedMesh)bt.renderInstances(Pe,kt,X.count);else if(q.isInstancedBufferGeometry){let ln=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,ln);bt.renderInstances(Pe,kt,Ie)}else bt.render(Pe,kt)};function Nu(T,B,q,V){z!==null&&T.isNodeMaterial&&z.setObject(V,T),le===!0&&Q.setState(T,q,!1),T.transparent===!0&&T.side===Dn&&T.forceSinglePass===!1?(T.side=Wt,T.needsUpdate=!0,Ar(T,B,V),T.side=Zi,T.needsUpdate=!0,Ar(T,B,V),T.side=Dn):Ar(T,B,V)}this.compile=function(T,B,q=null){q===null&&(q=T),z!==null&&z.renderStart(T,B,q),w=j.get(q),w.init(B),S.push(w),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),T!==q&&T.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),we=this.localClippingEnabled,le=Q.init(this.clippingPlanes,we),le===!0&&Q.setGlobalState(this.clippingPlanes,B),z!==null&&de.render(w.state.shadowsArray,q,B);let V=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _e=X.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){let pe=_e[Ce];Nu(pe,q,B,X),V.add(pe)}else Nu(_e,q,B,X),V.add(_e)}),w=S.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(T,B,q=null){let V=this.compile(T,B,q);return new Promise(X=>{function _e(){if(V.forEach(function(Ce){let Ee=ke.get(Ce).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Ce)}),V.size===0){X(T);return}setTimeout(_e,10)}st.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Dc=null;function Yp(T){Dc&&Dc(T)}function Uu(){is.stop()}function Fu(){is.start()}let is=new Vf;is.setAnimationLoop(Yp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(T){Dc=T,ae.setAnimationLoop(T),T===null?is.stop():is.start()},ae.addEventListener("sessionstart",Uu),ae.addEventListener("sessionend",Fu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(T,B);let q=ae.enabled===!0&&ae.isPresenting===!0,V=L!==null&&(Y===null||q)&&L.begin(C,Y);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,B,Y),w=j.get(T,S.length),w.init(B),w.state.textureUnits=qe.getTextureUnits(),S.push(w),xe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ue.setFromArrayCamera(B):ie.setFromProjectionMatrix(xe,Fn,B.reversedDepth),we=this.localClippingEnabled,le=Q.init(this.clippingPlanes,we),A=ge.get(T,_.length),A.init(),_.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&Nc(Ce,B,-1/0,C.sortObjects)}Nc(T,B,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(ze,At),lt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,lt&&N.addToRenderList(A,T),this.info.autoReset===!0&&this.info.reset(),le===!0&&Q.beginShadows();let X=w.state.shadowsArray;if(de.render(X,T,B),le===!0&&Q.endShadows(),(V&&L.hasRenderPass())===!1){let Ce=A.opaque,pe=A.transmissive;if(w.setupLights(),B.isArrayCamera){let Ee=B.cameras;if(pe.length>0)for(let De=0,$e=Ee.length;De<$e;De++){let ct=Ee[De];Bu(Ce,pe,T,ct)}lt&&N.render(T);for(let De=0,$e=Ee.length;De<$e;De++){let ct=Ee[De];Ou(A,T,ct,ct.viewport)}}else pe.length>0&&Bu(Ce,pe,T,B),lt&&N.render(T),Ou(A,T,B)}Y!==null&&F===0&&(qe.updateMultisampleRenderTarget(Y),qe.updateRenderTargetMipmap(Y)),V&&L.end(C),T.isScene===!0&&T.onAfterRender(C,T,B),he.resetDefaultState(),H=-1,J=null,S.pop(),S.length>0?(w=S[S.length-1],qe.setTextureUnits(w.state.textureUnits),le===!0&&Q.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,z!==null&&z.renderEnd()};function Nc(T,B,q,V){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){let Ce=B.isArrayCamera?ue:ie;if(!T.frustumCulled||T.intersectsFrustum(Ce)){V&&Ne.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);let pe=re.update(T),Ee=T.material;Ee.visible&&A.push(T,pe,Ee,q,Ne.z,null,B)}}else if(T.isMesh||T.isLine||T.isPoints){let Ce=B.isArrayCamera?ue:ie;if(!T.frustumCulled||T.intersectsFrustum(Ce)){let pe=re.update(T),Ee=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ne.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ne.copy(pe.boundingSphere.center)),Ne.applyMatrix4(T.matrixWorld).applyMatrix4(xe)),Array.isArray(Ee)){let De=pe.groups;for(let $e=0,ct=De.length;$e<ct;$e++){let Pe=De[$e],ht=Ee[Pe.materialIndex];ht&&ht.visible&&A.push(T,pe,ht,q,Ne.z,Pe,B)}}else Ee.visible&&A.push(T,pe,Ee,q,Ne.z,null,B)}}}let _e=T.children;for(let Ce=0,pe=_e.length;Ce<pe;Ce++)Nc(_e[Ce],B,q,V)}function Ou(T,B,q,V){let{opaque:X,transmissive:_e,transparent:Ce}=T;w.setupLightsView(q),le===!0&&Q.setGlobalState(C.clippingPlanes,q),V&&me.viewport(te.copy(V)),X.length>0&&Za(X,B,q),_e.length>0&&Za(_e,B,q),Ce.length>0&&Za(Ce,B,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Bu(T,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){let Pe=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Pn(1,1,{generateMipmaps:!0,type:Pe?Kn:Tn,minFilter:Ri,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let _e=w.state.transmissionRenderTarget[V.id],Ce=V.viewport||te;_e.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(_e),C.getClearColor(K),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),lt&&N.render(q);let $e=C.toneMapping;C.toneMapping=ai;let ct=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),le===!0&&Q.setGlobalState(C.clippingPlanes,V),Za(T,q,V),qe.updateMultisampleRenderTarget(_e),qe.updateRenderTargetMipmap(_e),st.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ht=0,kt=B.length;ht<kt;ht++){let Et=B[ht],{object:bt,geometry:ln,material:Ie,group:_n}=Et;if(Ie.side===Dn&&bt.layers.test(V.layers)){let _t=Ie.side;Ie.side=Wt,Ie.needsUpdate=!0,zu(bt,q,V,ln,Ie,_n),Ie.side=_t,Ie.needsUpdate=!0,Pe=!0}}Pe===!0&&(qe.updateMultisampleRenderTarget(_e),qe.updateRenderTargetMipmap(_e))}C.setRenderTarget(pe,Ee,De),C.setClearColor(K,ye),ct!==void 0&&(V.viewport=ct),C.toneMapping=$e}function Za(T,B,q){let V=B.isScene===!0?B.overrideMaterial:null;for(let X=0,_e=T.length;X<_e;X++){let Ce=T[X],{object:pe,geometry:Ee,group:De}=Ce,$e=Ce.material;$e.allowOverride===!0&&V!==null&&($e=V),pe.layers.test(q.layers)&&zu(pe,B,q,Ee,$e,De)}}function zu(T,B,q,V,X,_e){z!==null&&X.isNodeMaterial&&z.setObject(T,X),T.onBeforeRender(C,B,q,V,X,_e),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,B,q,V,T,_e),X.transparent===!0&&X.side===Dn&&X.forceSinglePass===!1?(X.side=Wt,X.needsUpdate=!0,C.renderBufferDirect(q,B,V,X,T,_e),X.side=Zi,X.needsUpdate=!0,C.renderBufferDirect(q,B,V,X,T,_e),X.side=Dn):C.renderBufferDirect(q,B,V,X,T,_e),T.onAfterRender(C,B,q,V,X,_e)}function ku(T){let B=0;for(let q of T)q.texture!==null&&B++;return B}function Ar(T,B,q){B.isScene!==!0&&(B=at);let V=ke.get(T),X=w.state.lights,_e=w.state.shadowsArray,Ce=X.state.version,pe=ne.getParameters(T,X.state,_e,B,q,w.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(pe),De=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let $e=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=P.get(T.envMap||V.environment,$e),V.envMapRotation=V.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Mt),De=new Map,V.programs=De,V.programVariants=new Map);let ct=De.get(Ee);if(ct!==void 0){if(V.currentProgram===ct&&V.lightsStateVersion===Ce)return Gu(T,pe),ct}else pe.uniforms=ne.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,q,pe),T.onBeforeCompile(pe,C),ct=ne.acquireProgram(pe,Ee),De.set(Ee,ct),V.uniforms=pe.uniforms;let Pe=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=Q.uniform),Gu(T,pe),V.needsLights=Kp(T),V.lightsStateVersion=Ce,V.needsLights&&(Pe.ambientLightColor.value=X.state.ambient,Pe.lightProbe.value=X.state.probe,Pe.sunLights.value=X.state.sun,Pe.sunLightShadows.value=X.state.sunShadow,Pe.directionalLights.value=X.state.directional,Pe.directionalLightShadows.value=X.state.directionalShadow,Pe.spotLights.value=X.state.spot,Pe.spotLightShadows.value=X.state.spotShadow,Pe.rectAreaLights.value=X.state.rectArea,Pe.ltc_1.value=X.state.rectAreaLTC1,Pe.ltc_2.value=X.state.rectAreaLTC2,Pe.pointLights.value=X.state.point,Pe.pointLightShadows.value=X.state.pointShadow,Pe.hemisphereLights.value=X.state.hemi,Pe.sunShadowMatrix.value=X.state.sunShadowMatrix,Pe.sunShadowCascade.value=X.state.sunShadowCascade,Pe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Pe.spotLightMatrix.value=X.state.spotLightMatrix,Pe.spotLightMap.value=X.state.spotLightMap,Pe.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=ku(w.state.lightProbeGridArray),V.currentProgram=ct,V.uniformsList=null,ct}function Zp(T,B,q,V,X){let _e=ke.get(T),Ce=_e.currentProgram.id+","+V+","+X,pe=_e.programVariants.get(Ce);return pe===void 0?(pe=Ar(T,B,q),_e.programVariants.set(Ce,pe)):(_e.currentProgram=pe,_e.uniformsList=null,_e.outputColorSpace=V,_e.toneMapping=X),pe}function Hu(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=pr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Gu(T,B){let q=ke.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function $p(T,B,q,V,X){B.isScene!==!0&&(B=at),qe.resetTextureUnits();let _e=B.fog,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,pe=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ut.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,De=P.get(V.envMap||Ce,Ee),$e=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ct=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Pe=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,kt=!!q.morphAttributes.color,Et=ai;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Et=C.toneMapping);let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ln=bt!==void 0?bt.length:0,Ie=ke.get(V),_n=w.state.lights;if(le===!0&&(we===!0||T!==J)){let It=T===J&&V.id===H;Q.setState(V,T,It)}let _t=!1,ss=!1;V.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==_n.state.version||X.isBatchedMesh&&Ie.batching===!1||!X.isBatchedMesh&&Ie.batching===!0||X.isBatchedMesh&&Ie.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ie.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||X.isInstancedMesh&&Ie.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ie.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ie.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ie.instancingMorph===!1&&X.morphTexture!==null||Ie.envMap!==De||V.fog===!0&&Ie.fog!==_e||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Q.numPlanes||Ie.numIntersection!==Q.numIntersection)||Ie.vertexAlphas!==$e||Ie.vertexTangents!==ct||Ie.morphTargets!==Pe||Ie.morphNormals!==ht||Ie.morphColors!==kt||Ie.morphTargetsCount!==ln||Ie.numLightProbeGrids!==ku(w.state.lightProbeGridArray)?_t=!0:(Ie.outputColorSpace!==pe||Ie.toneMapping!==Et)&&(ss=!0):(_t=!0,Ie.__version=V.version);let cn=Ie.currentProgram;(_t===!0||ss===!0)&&(cn=ss===!0?Zp(V,B,X,pe,Et):Ar(V,B,X),z&&V.isNodeMaterial&&z.onUpdateProgram(V,cn,Ie));let $a=!1,Ni=!1,rs=!1,pt=cn.getUniforms(),sn=Ie.uniforms;if(me.useProgram(cn.program)&&($a=!0,Ni=!0,rs=!0),V.id!==H&&(H=V.id,Ni=!0),$a||J!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(k,"projectionMatrix",T.projectionMatrix),pt.setValue(k,"viewMatrix",T.matrixWorldInverse);let Kt=pt.map.cameraPosition;Kt!==void 0&&Kt.setValue(k,Je.setFromMatrixPosition(T.matrixWorld)),St.logarithmicDepthBuffer&&pt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),J!==T&&(J=T,Ni=!0,rs=!0)}if(Ie.needsLights&&(_n.state.sunShadowMap.length>0&&pt.setValue(k,"sunShadowMap",_n.state.sunShadowMap,qe),_n.state.directionalShadowMap.length>0&&pt.setValue(k,"directionalShadowMap",_n.state.directionalShadowMap,qe),_n.state.spotShadowMap.length>0&&pt.setValue(k,"spotShadowMap",_n.state.spotShadowMap,qe),_n.state.pointShadowMap.length>0&&pt.setValue(k,"pointShadowMap",_n.state.pointShadowMap,qe)),X.isSkinnedMesh){pt.setOptional(k,X,"bindMatrix"),pt.setOptional(k,X,"bindMatrixInverse");let It=X.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),pt.setValue(k,"boneTexture",It.boneTexture,qe))}X.isBatchedMesh&&(pt.setOptional(k,X,"batchingTexture"),pt.setValue(k,"batchingTexture",X._matricesTexture,qe),pt.setOptional(k,X,"batchingIdTexture"),pt.setValue(k,"batchingIdTexture",X._indirectTexture,qe),pt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(k,"batchingColorTexture",X._colorsTexture,qe));let Vn=q.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ee.update(X,q,cn),(Ni||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,pt.setValue(k,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(sn.envMapIntensity.value=B.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=$y()),Ni){if(pt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&Jp(sn,rs),_e&&V.fog===!0&&ce.refreshFogUniforms(sn,_e),ce.refreshMaterialUniforms(sn,V,ve,Be,w.state.transmissionRenderTarget[T.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){let It=y,Kt=0;for(let mi of w.state.lightProbeGridArray)mi.texture!==null&&(It.textures[Kt]=mi.texture,It.min[Kt]=mi.boundingBox.min,It.max[Kt]=mi.boundingBox.max,It.resolution[Kt]=mi.resolution,Kt++);for(let mi in It)It[mi].length=Kt;sn.probesSH.value=It.textures,sn.probesMin.value=It.min,sn.probesMax.value=It.max,sn.probesResolution.value=It.resolution}pr.upload(k,Hu(Ie),sn,qe)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(pr.upload(k,Hu(Ie),sn,qe),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(k,"center",X.center),pt.setValue(k,"modelViewMatrix",X.modelViewMatrix),pt.setValue(k,"normalMatrix",X.normalMatrix),pt.setValue(k,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let It=V.uniformsGroups;for(let Kt=0,mi=It.length;Kt<mi;Kt++){let Wu=It[Kt];Ue.update(Wu,cn),Ue.bind(Wu,cn)}}return cn}function Jp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Kp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(T,B,q){let V=ke.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),ke.get(T.texture).__webglTexture=B,ke.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let q=ke.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){Y=T,U=B,F=q;let V=null,X=!1,_e=!1;if(T){let pe=ke.get(T);if(pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(T.viewport),be.copy(T.scissor),Fe=T.scissorTest,me.viewport(te),me.scissor(be),me.setScissorTest(Fe),H=-1;return}else if(pe.__webglFramebuffer===void 0)qe.setupRenderTarget(T);else if(pe.__hasExternalTextures)qe.rebindTextures(T,ke.get(T.texture).__webglTexture,ke.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let $e=T.depthTexture;if(pe.__boundDepthTexture!==$e){if($e!==null&&ke.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");qe.setupDepthRenderbuffer(T)}}let Ee=T.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);let De=ke.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[B])?V=De[B][q]:V=De[B],X=!0):T.samples>0&&qe.useMultisampledRTT(T)===!1?V=ke.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?V=De[q]:V=De,te.copy(T.viewport),be.copy(T.scissor),Fe=T.scissorTest}else te.copy(Ge).multiplyScalar(ve).floor(),be.copy(nt).multiplyScalar(ve).floor(),Fe=rt;if(q!==0&&(V=G),me.bindFramebuffer(k.FRAMEBUFFER,V)&&me.drawBuffers(T,V),me.viewport(te),me.scissor(be),me.setScissorTest(Fe),X){let pe=ke.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,q)}else if(_e){let pe=B;for(let Ee=0;Ee<T.textures.length;Ee++){let De=ke.get(T.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,De.__webglTexture,q,pe)}}else if(T!==null&&q!==0){let pe=ke.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pe.__webglTexture,q)}H=-1};function Vu(T){let B=ke.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=St.textureFormatReadable(T.format),B.__typeReadable=St.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,q,V,X,_e,Ce,pe=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){me.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let De=T.textures[pe],$e=De.format,ct=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Pe=Vu(De);if(Pe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-V&&q>=0&&q<=T.height-X&&k.readPixels(B,q,V,X,oe.convert($e),oe.convert(ct),_e)}finally{let De=Y!==null?ke.get(Y).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,V,X,_e,Ce,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=ke.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(B>=0&&B<=T.width-V&&q>=0&&q<=T.height-X){me.bindFramebuffer(k.FRAMEBUFFER,Ee);let De=T.textures[pe],$e=De.format,ct=De.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Pe=Vu(De);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.bufferData(k.PIXEL_PACK_BUFFER,_e.byteLength,k.STREAM_READ),k.readPixels(B,q,V,X,oe.convert($e),oe.convert(ct),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let kt=Y!==null?ke.get(Y).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,kt);let Et=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await lf(k,Et,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,_e),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ht),k.deleteSync(Et),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,q=0){let V=Math.pow(2,-q),X=Math.floor(T.image.width*V),_e=Math.floor(T.image.height*V),Ce=B!==null?B.x:0,pe=B!==null?B.y:0;qe.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ce,pe,X,_e),me.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,V=null,X=0,_e=0){let Ce,pe,Ee,De,$e,ct,Pe,ht,kt,Et=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(q!==null)Ce=q.max.x-q.min.x,pe=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,$e=q.min.y,ct=q.isBox3?q.min.z:0;else{let pt=Math.pow(2,-X);Ce=Math.floor(Et.width*pt),pe=Math.floor(Et.height*pt),T.isDataArrayTexture?Ee=Et.depth:T.isData3DTexture?Ee=Math.floor(Et.depth*pt):Ee=1,De=0,$e=0,ct=0}V!==null?(Pe=V.x,ht=V.y,kt=V.z):(Pe=0,ht=0,kt=0);let bt=oe.convert(B.format),ln=oe.convert(B.type),Ie;B.isData3DTexture?(qe.setTexture3D(B,0),Ie=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(qe.setTexture2DArray(B,0),Ie=k.TEXTURE_2D_ARRAY):(qe.setTexture2D(B,0),Ie=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let _n=me.getParameter(k.UNPACK_ROW_LENGTH),_t=me.getParameter(k.UNPACK_IMAGE_HEIGHT),ss=me.getParameter(k.UNPACK_SKIP_PIXELS),cn=me.getParameter(k.UNPACK_SKIP_ROWS),$a=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,Et.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,De),me.pixelStorei(k.UNPACK_SKIP_ROWS,$e),me.pixelStorei(k.UNPACK_SKIP_IMAGES,ct);let Ni=T.isDataArrayTexture||T.isData3DTexture,rs=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let pt=ke.get(T),sn=ke.get(B),Vn=ke.get(pt.__renderTarget),It=ke.get(sn.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,Vn.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,It.__webglFramebuffer);for(let Kt=0;Kt<Ee;Kt++)Ni&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(T).__webglTexture,X,ct+Kt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.get(B).__webglTexture,_e,kt+Kt)),k.blitFramebuffer(De,$e,De+Ce,$e+pe,Pe,ht,Pe+Ce,ht+pe,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||ke.has(T)){let pt=ke.get(T),sn=ke.get(B);me.bindFramebuffer(k.READ_FRAMEBUFFER,R),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let Vn=0;Vn<Ee;Vn++)Ni?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pt.__webglTexture,X,ct+Vn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pt.__webglTexture,X),rs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,sn.__webglTexture,_e,kt+Vn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,sn.__webglTexture,_e),X!==0?k.blitFramebuffer(De,$e,De+Ce,$e+pe,Pe,ht,Pe+Ce,ht+pe,k.COLOR_BUFFER_BIT,k.NEAREST):rs?k.copyTexSubImage3D(Ie,_e,Pe,ht,kt+Vn,De,$e,Ce,pe):k.copyTexSubImage2D(Ie,_e,Pe,ht,De,$e,Ce,pe);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else rs?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Ie,_e,Pe,ht,kt,Ce,pe,Ee,bt,ln,Et.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Ie,_e,Pe,ht,kt,Ce,pe,Ee,bt,Et.data):k.texSubImage3D(Ie,_e,Pe,ht,kt,Ce,pe,Ee,bt,ln,Et):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,_e,Pe,ht,Ce,pe,bt,ln,Et.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,_e,Pe,ht,Et.width,Et.height,bt,Et.data):k.texSubImage2D(k.TEXTURE_2D,_e,Pe,ht,Ce,pe,bt,ln,Et);me.pixelStorei(k.UNPACK_ROW_LENGTH,_n),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),me.pixelStorei(k.UNPACK_SKIP_PIXELS,ss),me.pixelStorei(k.UNPACK_SKIP_ROWS,cn),me.pixelStorei(k.UNPACK_SKIP_IMAGES,$a),_e===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Ie),me.unbindTexture()},this.initRenderTarget=function(T){ke.get(T).__webglFramebuffer===void 0&&qe.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?qe.setTextureCube(T,0):T.isData3DTexture?qe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?qe.setTexture2DArray(T,0):qe.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){U=0,F=0,Y=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function nc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new yt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=ep(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let v=0;v<a[u].length;++v)f.push(a[u][v][h]);let p=ep(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function ep(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new Ct(a,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let v=u.getComponent(h,p);o.setComponent(h+d,p,v)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var Qi={raptor:{name:"F-22 Raptor",blurb:"Stealthy all-rounder with thrust vectoring.",len:18.9,span:6.78,twinTail:!0,twinEngine:!0,canard:!1,hp:110,agility:1.08,speed:1.12,missiles:8,gun:1.1,style:"raptor"},viper:{name:"F-35 Lightning II",blurb:"Light and twitchy single-engine stealth jet.",len:15.7,span:5.35,twinTail:!0,twinEngine:!1,canard:!1,hp:90,agility:1.22,speed:1,missiles:6,gun:1,style:"viper"},striker:{name:"Su-57 Felon",blurb:"Heavy hitter. Tough, loads of missiles.",len:20.1,span:7,twinTail:!0,twinEngine:!0,canard:!1,hp:150,agility:.9,speed:1,missiles:12,gun:1.25,style:"striker"}},Ua={gray:["#9ea5ad","#737b84","Stealth gray","blob"],desert:["#b38f62","#7a5c3b","Desert camo","camo"],black:["#2b2e33","#1c1e21","Night ops","two"],navy:["#4a6687","#30455f","Navy blue","two"],red:["#3a3d42","#8f2a2f","Aggressor","splinter"]},lu={};function ap(n){if(lu[n])return lu[n];let[e,t,,i]=Ua[n],s=1024,r=document.createElement("canvas");r.width=r.height=s;let a=r.getContext("2d"),o=n.length*977+13,l=()=>(o=o*16807%2147483647)/2147483647;if(a.fillStyle=e,a.fillRect(0,0,s,s),i==="camo")for(let u=0;u<40;u++){a.fillStyle=u%3?t:"#9a7b50",a.beginPath();let d=l()*s,h=l()*s;a.moveTo(d,h);for(let f=0;f<9;f++)a.quadraticCurveTo(d+(l()-.5)*260,h+(l()-.5)*260,d+(l()-.5)*220,h+(l()-.5)*220);a.closePath(),a.fill()}if(i==="splinter")for(let u=0;u<34;u++){a.fillStyle=u%2?t:"#24262a",a.beginPath();let d=l()*s,h=l()*s;a.moveTo(d,h),a.lineTo(d+(l()-.3)*300,h+(l()-.5)*120),a.lineTo(d+(l()-.5)*200,h+(l()-.2)*260),a.closePath(),a.fill()}if(i==="blob"){a.filter="blur(10px)";for(let u=0;u<26;u++){a.fillStyle=t,a.globalAlpha=.55+l()*.3,a.beginPath();let d=l()*s,h=l()*s,f=50+l()*120;for(let p=0;p<=10;p++){let v=p/10*Math.PI*2,m=f*(.6+l()*.6);a.lineTo(d+Math.cos(v)*m*1.4,h+Math.sin(v)*m)}a.closePath(),a.fill()}a.filter="none",a.globalAlpha=1}if(i==="two"){let u=a.createLinearGradient(0,0,0,s);u.addColorStop(0,t),u.addColorStop(.5,e),u.addColorStop(1,t),a.globalAlpha=.55,a.fillStyle=u,a.fillRect(0,0,s,s),a.globalAlpha=1}for(let u=0;u<2200;u++)a.fillStyle=`rgba(${l()<.5?"255,255,255":"0,0,0"},${.015+l()*.03})`,a.fillRect(l()*s,l()*s,2+l()*14,1+l()*3);a.strokeStyle="rgba(0,0,0,.28)",a.lineWidth=2;for(let u=0;u<=8;u++)a.beginPath(),a.moveTo(0,u*s/8+u%2*9),a.lineTo(s,u*s/8+u%2*9),a.stroke();for(let u=0;u<8;u++)for(let d=0;d<6;d++){if(l()<.25)continue;let h=(d+u%2*.5)*s/6;a.beginPath(),a.moveTo(h,u*s/8),a.lineTo(h,(u+1)*s/8),a.stroke()}for(let u=0;u<14;u++){let d=l()*s,h=l()*s,f=40+l()*90,p=30+l()*60;a.strokeStyle="rgba(0,0,0,.22)",a.strokeRect(d,h,f,p)}a.fillStyle="rgba(0,0,0,.25)";for(let u=0;u<900;u++)a.fillRect(Math.floor(l()*6)*s/6+(l()<.5?-4:4),l()*s,1.5,1.5);let c=new Vt(r);return c.wrapS=c.wrapT=Zn,c.colorSpace=Tt,c.anisotropy=4,lu[n]=c}var cu=null;function Jy(){if(cu)return cu;let n=1024,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=4242,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle="#808080",t.fillRect(0,0,n,n),t.strokeStyle="#3c3c3c",t.lineWidth=2.5;for(let a=0;a<=8;a++)t.beginPath(),t.moveTo(0,a*n/8+a%2*9),t.lineTo(n,a*n/8+a%2*9),t.stroke();for(let a=0;a<8;a++)for(let o=0;o<6;o++){if(s()<.2)continue;let l=(o+a%2*.5)*n/6;t.beginPath(),t.moveTo(l,a*n/8),t.lineTo(l,(a+1)*n/8),t.stroke()}t.lineWidth=2;for(let a=0;a<22;a++){let o=s()*n,l=s()*n,c=30+s()*110,u=24+s()*70;t.strokeStyle="#4a4a4a",t.strokeRect(o,l,c,u),t.fillStyle="#5a5a5a";for(let d=0;d<c;d+=9)t.fillRect(o+d,l-4,2,2),t.fillRect(o+d,l+u+3,2,2)}t.fillStyle="#5c5c5c";for(let a=0;a<8;a++)for(let o=0;o<n;o+=10)t.fillRect(o,a*n/8+6+a%2*9,2,2);let r=new Vt(e);return r.wrapS=r.wrapT=Zn,r.anisotropy=4,cu=r}function op(n,e){return gu(Qi[n]?n:"viper",Ua[e]?e:"gray",!1).A.cock}var hu={};function Ky(n){let e=n?"e":"p";if(hu[e])return hu[e];let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(64,64),n){i.fillStyle="#c0262e",i.beginPath();for(let r=0;r<3;r++){let a=r*2.094-1.57;i.moveTo(0,0),i.lineTo(Math.cos(a-.35)*58,Math.sin(a-.35)*58),i.lineTo(Math.cos(a+.35)*58,Math.sin(a+.35)*58)}i.fill(),i.fillStyle="#16171a",i.beginPath(),i.arc(0,0,18,0,7),i.fill()}else i.strokeStyle="rgba(70,76,84,.8)",i.lineWidth=6,i.beginPath(),i.arc(0,0,50,0,7),i.stroke(),i.fillStyle="rgba(70,76,84,.75)",i.font="900 46px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("JK",0,3),i.fillRect(-62,-5,10,10),i.fillRect(52,-5,10,10);let s=new Vt(t);return s.colorSpace=Tt,hu[e]=s}function tp(n,e,t=28,i=!0){let s=[],r=[],a=[],o=n.length;n.forEach(([c,u,d,h,f])=>{let p=-e/2+c*e;for(let v=0;v<=t;v++){let m=v/t*Math.PI*2,g=Math.cos(m),x=Math.sin(m),M=2/f;s.push(Math.sign(g)*Math.pow(Math.abs(g),M)*u,h+Math.sign(x)*Math.pow(Math.abs(x),M)*d,p),r.push(v/t*3,c*e/8)}});for(let c=0;c<o-1;c++)for(let u=0;u<t;u++){let d=c*(t+1)+u,h=d+t+1;a.push(d,d+1,h,h,d+1,h+1)}if(i){let c=s.length/3,u=n[o-1];s.push(0,u[3],-e/2+u[0]*e),r.push(.5,.5);let d=(o-1)*(t+1);for(let h=0;h<t;h++)a.push(d+h,d+h+1,c)}let l=new yt;return l.setAttribute("position",new Xe(s,3)),l.setAttribute("uv",new Xe(r,2)),l.setIndex(a),l.computeVertexNormals(),l}function np(n,e,t=.05){let i=new ms;i.moveTo(n[0][0],-n[0][1]),n.slice(1).forEach(([r,a])=>i.lineTo(r,-a)),i.closePath();let s=new ar(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:6});return s.translate(0,0,-e/2),s.rotateX(-Math.PI/2),lp(s,1/8),s}function jy(n,e,t=.05){let i=new ms;i.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(([r,a])=>i.lineTo(r,a)),i.closePath();let s=new ar(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3});return s.translate(0,0,-e/2),s.rotateY(-Math.PI/2),lp(s,1/8),s}function lp(n,e){let t=n.attributes.uv;for(let i=0;i<t.count;i++)t.setXY(i,t.getX(i)*e,t.getY(i)*e)}var ip=new ot,Qy=new Ft,ev=new rn,tv=new I,nv=new I;function Yt(n,e=0,t=0,i=0,s=0,r=0,a=0,o=1,l=1,c=1){return ip.compose(tv.set(e,t,i),Qy.setFromEuler(ev.set(s,r,a)),nv.set(o,l,c)),n.clone().applyMatrix4(ip)}function iv(n){let e=n.index?n.toNonIndexed():n;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new Xe(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.clearGroups(),e}function mu(n){return n.length?nc(n.map(iv),!1):null}function Nn(n,e,t){let i=n.length;if(e<=n[0][0])return n[0][t];if(e>=n[i-1][0])return n[i-1][t];let s=0;for(;e>n[s+1][0];)s++;let r=d=>(n[d+1][t]-n[d][t])/(n[d+1][0]-n[d][0]),a=d=>{if(d===0)return r(0);if(d===i-1)return r(i-2);let h=r(d-1),f=r(d);return h*f<=0?0:2/(1/h+1/f)},o=n[s+1][0]-n[s][0],l=(e-n[s][0])/o,c=l*l,u=c*l;return(2*u-3*c+1)*n[s][t]+(u-2*c+l)*o*a(s)+(-2*u+3*c)*n[s+1][t]+(u-c)*o*a(s+1)}function sv(n,e,{rings:t=64,seg:i=40,x:s=0,t0:r=n[0][0],t1:a=n[n.length-1][0],bias:o=1.2}={}){let l=[],c=[];for(let d=0;d<=t;d++){let h=r+(a-r)*Math.pow(d/t,o),f=Nn(n,h,1),p=Nn(n,h,2),v=Nn(n,h,3),m=Nn(n,h,4),g=Nn(n,h,5),x=Nn(n,h,6),M=-e/2+h*e;for(let y=0;y<=i;y++){let A=y/i*Math.PI*2,w=Math.cos(A),_=Math.sin(A),S=_>=0,L=2/(S?g:x);l.push(s+Math.sign(w)*Math.pow(Math.abs(w),L)*f,m+Math.sign(_)*Math.pow(Math.abs(_),L)*(S?p:v),M),c.push(y/i*3,M/8)}}let u=[];for(let d=0;d<t;d++)for(let h=0;h<i;h++){let f=d*(i+1)+h,p=f+i+1;u.push(f,f+1,p,p,f+1,p+1)}return cp(l,c,u)}function rv(n,e){let t=[],i=[],s=n.length;for(let r=0;r<s;r++){let a=n[r],o=n[(r+s-1)%s],l=n[(r+1)%s];e[r]?(t.push(a),i.push(!0)):(t.push([.75*a[0]+.25*o[0],.75*a[1]+.25*o[1]],[.75*a[0]+.25*l[0],.75*a[1]+.25*l[1]]),i.push(!1,!1))}return[t,i]}function ic(n,e,{rings:t=70,iters:i=2,sharp:s=[],mirror:r=!0,bias:a=1.15}={}){let o=n[0][1].length,l=[];for(let C=0;C<o;C++)l.push(n.map(([D,z])=>[D,z[C][0],z[C][1]]));let c=C=>r?[...C,...C.slice(1,-1).reverse().map(([D,z])=>[-D,z])]:C,u=r?[...Array(o).keys()].map(C=>s.includes(C)).concat([...Array(o-2).keys()].map(C=>s.includes(o-2-C))):[...Array(o).keys()].map(C=>s.includes(C)),d=[],h=[],f=[],p=[],v=[],m=[],g=n[0][0],x=n[n.length-1][0];for(let C=0;C<=t;C++){let D=g+(x-g)*Math.pow(C/t,a),z=-e/2+D*e,G=c(l.map(H=>[Nn(H,D,1),Nn(H,D,2)])),R=u;for(let H=0;H<i;H++)[G,R]=rv(G,R);let O=G.length,U=[],F=[],Y=0;for(let H=0;H<=O;H++){let J=G[H%O];H&&(Y+=Math.hypot(J[0]-G[H-1][0],J[1]-G[(H-1)%O][1]));let te=()=>(d.push(J[0],J[1],z),h.push(Y/8,z/8),d.length/3-1),be=te(),Fe=R[H%O]&&H>0&&H<O?te():be;U.push(be),F.push(Fe)}R[0]||m.push([F[0],U[O]]),p.push(U),v.push(F)}for(let C=0;C<t;C++)for(let D=0;D<p[C].length-1;D++){let z=v[C][D],G=p[C][D+1],R=v[C+1][D],O=p[C+1][D+1];f.push(z,G,R,R,G,O)}let M=new yt;M.setAttribute("position",new Xe(d,3)),M.setAttribute("uv",new Xe(h,2)),M.setIndex(f),M.computeVertexNormals();let y=v[t>>1],A=M.attributes.position,w=M.attributes.normal,_=0,S=0;y.forEach(C=>{_+=A.getX(C),S+=A.getY(C)}),_/=y.length,S/=y.length;let L=y[Math.floor(y.length/4)];if((A.getX(L)-_)*w.getX(L)+(A.getY(L)-S)*w.getY(L)<0){let C=M.index.array;for(let D=0;D<C.length;D+=3){let z=C[D+1];C[D+1]=C[D+2],C[D+2]=z}M.computeVertexNormals()}return m.forEach(([C,D])=>{if(C===D)return;let z=w.getX(C)+w.getX(D),G=w.getY(C)+w.getY(D),R=w.getZ(C)+w.getZ(D),O=Math.hypot(z,G,R)||1;w.setXYZ(C,z/O,G/O,R/O),w.setXYZ(D,z/O,G/O,R/O)}),M}function La(n,e,t=.9){let i=0,s=0;n.forEach(([l,c])=>{i+=l,s+=c}),i/=n.length,s/=n.length;let r=[i,s,e],a=[];n.forEach(([l,c])=>r.push(i+(l-i)*t,s+(c-s)*t,e));for(let l=0;l<n.length;l++)a.push(0,1+l,1+(l+1)%n.length);let o=new yt;if(o.setAttribute("position",new Xe(r,3)),o.setAttribute("uv",new Xe(new Array(r.length/3*2).fill(0),2)),o.setIndex(a),o.computeVertexNormals(),o.attributes.normal.getZ(0)>0){let l=o.index.array;for(let c=0;c<l.length;c+=3){let u=l[c+1];l[c+1]=l[c+2],l[c+2]=u}o.computeVertexNormals()}return o}var Da=(n,e,t,i,s)=>[[n+t-s,e+i],[n+t,e+i-s],[n+t,e-i+s],[n+t-s,e-i],[n-t+s,e-i],[n-t,e-i+s],[n-t,e+i-s],[n-t+s,e+i]];function xr(n,{nC:e=14,sub:t=1}={}){let i=[];for(let c=0;c<n.length-1;c++)for(let u=0;u<t;u++){let d=u/t;i.push(n[c].map((h,f)=>h*(1-d)+n[c+1][f]*d))}i.push(n[n.length-1]);let s=[],r=[],a=[],o=2*e,l=c=>5*(.2969*Math.sqrt(c)-.126*c-.3516*c*c+.2843*c**3-.1036*c**4);i.forEach(([c,u,d,h,f])=>{let p=h-d;for(let v=0;v<o;v++){let m=v<=e,g=m?v:o-v,x=(1-Math.cos(Math.PI*g/e))/2,M=Math.max(l(x)*f*p,.004);s.push(c,u+(m?M:-M),d+x*p),r.push(c/8,(d+x*p)/8)}});for(let c=0;c<i.length-1;c++)for(let u=0;u<o;u++){let d=c*o+u,h=c*o+(u+1)%o,f=d+o,p=h+o;a.push(d,f,h,h,f,p)}return[0,i.length-1].forEach(c=>{let u=s.length/3,d=0,h=0,f=0;for(let p=0;p<o;p++)d+=s[(c*o+p)*3],h+=s[(c*o+p)*3+1],f+=s[(c*o+p)*3+2];s.push(d/o,h/o,f/o),r.push(0,0);for(let p=0;p<o;p++)a.push(c*o+p,c*o+(p+1)%o,u)}),cp(s,r,a)}function cp(n,e,t){let i=new yt;return i.setAttribute("position",new Xe(n,3)),i.setAttribute("uv",new Xe(e,2)),i.setIndex(t),av(i)}function av(n){let e=n.attributes.position,t=n.index.array,i=new I,s=new I,r=new I,a=0;for(let o=0;o<t.length;o+=3)i.fromBufferAttribute(e,t[o]),s.fromBufferAttribute(e,t[o+1]),r.fromBufferAttribute(e,t[o+2]),a+=i.dot(s.cross(r));if(a<0)for(let o=0;o<t.length;o+=3){let l=t[o+1];t[o+1]=t[o+2],t[o+2]=l}return n.computeVertexNormals(),n}function ov(n){let e=n.clone();e.scale(-1,1,1);let t=e.index.array;for(let i=0;i<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}return e.computeVertexNormals(),e}var ji=(n,e)=>{e.push(n,ov(n))};function sp(n,e,t,i,s){let r=xr(n,s);return r.rotateZ(Math.PI/2-e),r.translate(t,i,0),r}function rp(n,e){let[t,i]=[n[0],n[n.length-1]],s=t[0]+(i[0]-t[0])*e,r=0;for(;r<n.length-2&&s>n[r+1][0];)r++;let a=(s-n[r][0])/(n[r+1][0]-n[r][0]),o=n[r].map((l,c)=>l*(1-a)+n[r+1][c]*a);return{x:s,y:o[1],le:o[2],te:o[3],tr:o[4],c:o[3]-o[2]}}var lv={raptor:{L0:18.9,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.14,.06],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.36],[.18,.33],[.36,.17],[.48,0],[.38,-.14],[.22,-.25],[.08,-.28],[0,-.29]]],[.18,[[0,.55],[.27,.5],[.52,.26],[.66,.02],[.55,-.2],[.36,-.36],[.12,-.41],[0,-.41]]],[.27,[[0,.64],[.32,.6],[.6,.34],[.76,.05],[.68,-.2],[.5,-.4],[.16,-.46],[0,-.46]]],[.36,[[0,.66],[.42,.64],[.86,.42],[1.2,.08],[1.12,-.14],[.95,-.4],[.3,-.48],[0,-.48]]],[.45,[[0,.6],[.56,.67],[1.08,.44],[1.66,.04],[1.52,-.14],[1.2,-.42],[.4,-.5],[0,-.5]]],[.58,[[0,.52],[.62,.66],[1.16,.44],[1.76,.03],[1.6,-.14],[1.25,-.42],[.4,-.48],[0,-.48]]],[.72,[[0,.46],[.6,.6],[1.1,.4],[1.6,.02],[1.48,-.13],[1.18,-.38],[.4,-.44],[0,-.44]]],[.85,[[0,.36],[.6,.52],[1,.34],[1.3,0],[1.22,-.12],[1,-.32],[.4,-.38],[0,-.38]]],[.95,[[0,.26],[.56,.42],[.92,.28],[1.08,0],[1.02,-.1],[.9,-.26],[.4,-.32],[0,-.32]]],[1,[[0,.24],[.55,.38],[.88,.26],[1,0],[.95,-.1],[.85,-.24],[.4,-.3],[0,-.3]]]],intake:[[.25,[[.6,.32],[1.2,.06],[1.1,-.48],[.58,-.5]]],[.32,[[.62,.34],[1.27,.08],[1.15,-.5],[.58,-.52]]],[.42,[[.7,.38],[1.4,.1],[1.24,-.5],[.6,-.52]]],[.52,[[.82,.42],[1.5,.07],[1.3,-.46],[.7,-.5]]]],W:[[1.5,.03,n=>n(.405),n=>n(.79),.035],[6.78,-.22,n=>n(.66),n=>n(.752),.03]],HS:[[1,0,n=>n(.8),n=>n(1),.035],[4.4,-.04,n=>n(.955),n=>n(1.02),.03]],VT:{x:1.25,y:.26,cant:.49,secs:[[0,0,n=>n(.615),n=>n(.865),.04],[2.65,0,n=>n(.755),n=>n(.84),.035]]},ex:[-.55,.55],ey:0,nr:.38,nozzle:"2d",canopy:[.09,.35],cw:1.2,ch:1.05,frame:!1,pyl:[.78,.56,.34,.14]},viper:{L0:15.7,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.15,.05],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.38],[.2,.34],[.38,.18],[.5,0],[.4,-.15],[.24,-.27],[.08,-.3],[0,-.31]]],[.19,[[0,.6],[.28,.55],[.55,.3],[.7,.02],[.6,-.22],[.4,-.4],[.14,-.46],[0,-.46]]],[.28,[[0,.74],[.36,.68],[.68,.4],[.86,.05],[.78,-.24],[.58,-.46],[.18,-.52],[0,-.52]]],[.38,[[0,.82],[.45,.76],[.9,.46],[1.3,.08],[1.22,-.2],[1,-.48],[.3,-.56],[0,-.56]]],[.5,[[0,.84],[.55,.78],[1.05,.48],[1.5,.06],[1.4,-.18],[1.1,-.48],[.35,-.58],[0,-.58]]],[.64,[[0,.78],[.55,.74],[1,.46],[1.45,.04],[1.35,-.16],[1.05,-.44],[.35,-.54],[0,-.54]]],[.78,[[0,.68],[.5,.64],[.88,.4],[1.2,.02],[1.12,-.14],[.9,-.38],[.35,-.48],[0,-.48]]],[.9,[[0,.58],[.42,.54],[.72,.34],[.92,0],[.86,-.12],[.72,-.32],[.3,-.42],[0,-.42]]],[.97,[[0,.52],[.38,.48],[.62,.3],[.74,0],[.7,-.12],[.6,-.28],[.3,-.38],[0,-.4]]],[1,[[0,.5],[.35,.46],[.58,.28],[.68,0],[.65,-.12],[.56,-.26],[.28,-.36],[0,-.38]]]],intake:[[.26,[[.58,.42],[1.1,.2],[1.02,-.4],[.55,-.42]]],[.33,[[.6,.44],[1.16,.2],[1.06,-.42],[.55,-.44]]],[.43,[[.7,.46],[1.3,.18],[1.16,-.42],[.6,-.44]]],[.52,[[.82,.5],[1.4,.12],[1.22,-.42],[.7,-.46]]]],W:[[1.4,.04,n=>n(.47),n=>n(.83),.04],[5.35,-.1,n=>n(.64),n=>n(.73),.035]],HS:[[.7,.02,n=>n(.84),n=>n(1.03),.035],[3.45,0,n=>n(.99),n=>n(1.045),.03]],VT:{x:.9,y:.46,cant:.44,secs:[[0,0,n=>n(.65),n=>n(.865),.045],[2.15,0,n=>n(.79),n=>n(.86),.04]]},ex:[0],ey:.05,nr:.52,nozzle:"round",canopy:[.1,.34],cw:1.05,ch:1,frame:!0,pyl:[.8,.55,.3]},striker:{L0:20.1,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.03,[[0,.12],[.06,.1],[.12,.04],[.16,0],[.12,-.05],[.06,-.1],[.02,-.11],[0,-.11]]],[.09,[[0,.36],[.18,.32],[.34,.16],[.44,0],[.36,-.14],[.2,-.25],[.07,-.28],[0,-.29]]],[.18,[[0,.58],[.26,.52],[.5,.28],[.64,.02],[.54,-.18],[.36,-.34],[.12,-.4],[0,-.4]]],[.28,[[0,.64],[.3,.6],[.62,.34],[1,.06],[.86,-.12],[.5,-.3],[.15,-.36],[0,-.36]]],[.38,[[0,.6],[.4,.57],[1.1,.3],[1.95,.05],[1.75,-.08],[1,-.2],[.3,-.28],[0,-.28]]],[.5,[[0,.52],[.5,.5],[1.3,.27],[2.2,.04],[2,-.06],[1.2,-.15],[.3,-.21],[0,-.21]]],[.65,[[0,.46],[.5,.45],[1.3,.25],[2.05,.03],[1.85,-.05],[1.1,-.13],[.3,-.19],[0,-.19]]],[.8,[[0,.36],[.42,.34],[1,.2],[1.45,.02],[1.32,-.04],[.9,-.11],[.25,-.15],[0,-.15]]],[.92,[[0,.24],[.25,.22],[.45,.12],[.56,0],[.5,-.06],[.4,-.1],[.15,-.12],[0,-.12]]],[1.06,[[0,.06],[.05,.05],[.1,.02],[.12,0],[.1,-.02],[.06,-.04],[.02,-.05],[0,-.05]]]],nacelle:[[.3,.46,.3,.04],[.42,.47,.34,.1],[.62,.47,.42,.24],[.85,.46,.45,.28],[1,.44,.44,.27]],nx:1.12,ny:-.4,W:[[1.9,.05,n=>n(.47),n=>n(.8),.035],[7,-.05,n=>n(.745),n=>n(.81),.03]],HS:[[1.55,-.12,n=>n(.82),n=>n(.995),.035],[4,-.14,n=>n(.95),n=>n(1),.03]],VT:{x:1.4,y:.14,cant:.45,secs:[[0,0,n=>n(.7),n=>n(.9),.04],[2.1,0,n=>n(.82),n=>n(.905),.035]]},ex:[-1.12,1.12],ey:-.4,nr:.42,nozzle:"round",canopy:[.1,.31],cw:1,ch:.95,frame:!0,irst:!0,pyl:[.84,.64,.44,.24]}};function cv(n){let e=n.len,t={paint:[],dark:[],metal:[],glass:[],light:[],decal:[],pilot:[],sill:[],helm:[]},i=n.style,s=lv[i],r=R=>-e/2+R*e,a=e/s.L0,o=e/15,l=R=>R.map(([O,U])=>[O,U.map(([F,Y])=>[F*a,Y*a])]),c=l(s.body),u=c.map(([R,O])=>[R,O[0][1]]),d=c.map(([R,O])=>[R,O[O.length-1][1]]),h=R=>Nn(u,R,1),f=R=>Nn(d,R,1);t.paint.push(ic(c,e,{rings:80,iters:2,sharp:[3]}));{let[R,O]=c[c.length-1];t.dark.push(La([...O,...O.slice(1,-1).reverse().map(([U,F])=>[-U,F])],r(R)-.03,.99))}if(s.intake){let R=l(s.intake),O=ic(R,e,{rings:16,iters:1,mirror:!1,sharp:[0,1,2,3],bias:1});ji(O,t.paint),ji(La(R[0][1],r(R[0][0])+.08,.94),t.dark),ji(La([[R[0][1][0][0]-.05,R[0][1][0][1]],[R[0][1][0][0],R[0][1][0][1]],[R[0][1][3][0],R[0][1][3][1]],[R[0][1][3][0]-.05,R[0][1][3][1]]],r(R[0][0])+.25,1),t.dark)}if(s.nacelle){let R=s.nx*a,O=s.ny*a,U=s.nacelle.map(([Y,H,J,te])=>[Y,Da(R,O,H*a,J*a,te*a)]),F=ic(U,e,{rings:44,iters:2,mirror:!1,sharp:[],bias:1});ji(F,t.paint),ji(La(Da(R,O,s.nacelle[0][1]*a,s.nacelle[0][2]*a,s.nacelle[0][3]*a),r(s.nacelle[0][0])+.05,.92),t.dark)}s.irst&&t.glass.push(Yt(new fn(.13*a,14,10),.2*a,h(.1)+.03,r(.1)));let[p,v]=s.canopy,m=[[p,.02,.02],[p+.03,.17,.16],[p+.08,.3,.34],[(p+v)/2+.02,.35,.42],[v-.07,.3,.32],[v-.02,.16,.14],[v,.04,.03]].map(([R,O,U])=>[R,O*o*s.cw,U*o*s.ch,h(R)-.08*o,2]);t.glass.push(sv(m.map(([R,O,U,F])=>[R,O,U,U*.3,F,2.1,2]),e,{rings:40,seg:36,bias:1}));let g=R=>h(R)-.07*o,x=R=>Nn(m,R,1);[-1,1].forEach(R=>{let O=[];for(let U=0;U<=14;U++){let F=p+.03+(v-p-.06)*U/14;O.push(new I(R*x(F)*.97,g(F)+.02*o,r(F)))}t.sill.push(new lr(new ps(O),24,.035*o,6))}),t.dark.push(Yt(new Gi(.15*o,.2*o,4,10),0,h(p+.2)+.02*o,r(p+.2),0,0,0,1,1,.45)),t.helm.push(Yt(new fn(.165*o,14,8,Math.PI*.25,Math.PI*.5,Math.PI*.3,Math.PI*.32),0,h(p+.14)+.14*o,r(p+.14),0,Math.PI,0));{let R=p+.15,O=[];for(let U=p+.02;U<=v-.02;U+=.01)O.push(h(U));t.cock={eyeY:h(R)+.13*o,eyeZ:r(R),z0:r(p+.025),z1:r(v-.025),w:Math.max(...m.map(U=>U[1]))*.9,y0:Math.min(...O)-.8*o,y1:Math.max(...O)+.2*o,k:o}}if(s.frame){let R=p+.2;t.dark.push(Yt(new ri(1,.045,6,28,Math.PI),0,h(R)-.08*o,r(R),.25,0,0,x(R)*1.02,Nn(m,R,2)*1.02,.3*o))}t.pilot.push(Yt(new fn(.16*o,12,10),0,h(p+.14)+.14*o,r(p+.14)));let M=s.W.map(([R,O,U,F,Y])=>[R*a,O*a,U(r),F(r),Y]),y=s.HS.map(([R,O,U,F,Y])=>[R*a,O*a,U(r),F(r),Y]);ji(xr(M,{nC:16,sub:3}),t.paint),ji(xr(y,{nC:12,sub:2}),t.paint);{let R=s.VT,O=sp(R.secs.map(([U,F,Y,H,J])=>[U*a,F,Y(r),H(r),J]),R.cant,0,0,{nC:14,sub:2});O.translate(R.x*a,R.y*a,0),ji(O,t.paint)}let A=M[M.length-1];[-1,1].forEach(R=>{t.light.push(Yt(new fn(.05*o,8,6),R*(A[0]-.05),A[1]+.03,A[3]-.15));let O=[];for(let F=.04;F<=.97;F+=.93/12){let Y=rp(M,F);O.push(new I(R*Y.x,Y.y+.25*Y.tr*Y.c+.004,Y.te-Y.c*.2))}t.dark.push(new lr(new ps(O),16,.007,3));let U=rp(M,.62);t.decal.push(Yt(new Bt(1*o,1*o),R*U.x,U.y+.4*U.tr*U.c+.01,(U.le+U.te)/2+.1*U.c,-Math.PI/2,0,0))});let w=s.ex.map(R=>R*a),_=s.ey*a,S=s.nr*a,L=r(1);w.forEach(R=>{if(s.nozzle==="2d"){t.metal.push(ic([[.955,Da(R,_,.46*a,.3*a,.08*a)],[1,Da(R,_,.42*a,.25*a,.06*a)]],e,{rings:4,iters:1,mirror:!1,bias:1})),[1,-1].forEach(F=>t.metal.push(xr([[R-.4*a,_+F*.23*a,r(.998),r(1.045),.05],[R+.4*a,_+F*.2*a,r(.998),r(1.035),.05]],{nC:6}))),t.dark.push(La(Da(R,_,.4*a,.22*a,.05*a),r(1)-.05,1));return}let O=new or([[S*.98,0],[S*1.02,.2],[S*.97,.7*o],[S*.86,1.15*o],[S*.82,1.22*o],[S*.74,1.18*o],[S*.76,.3]].map(([F,Y])=>new se(F,Y)),40),U=O.attributes.position;for(let F=0;F<U.count;F++){if(U.getY(F)<.6*o)continue;let Y=Math.atan2(U.getZ(F),U.getX(F)),H=1+.045*Math.max(0,Math.cos(Y*14));U.setX(F,U.getX(F)*H),U.setZ(F,U.getZ(F)*H)}O.computeVertexNormals(),t.metal.push(Yt(O,R,_,L-.4*o,Math.PI/2)),t.dark.push(Yt(new Vi(S*.74,28),R,_,L+.05*o)),t.dark.push(Yt(new ri(S*.5,S*.06,6,24),R,_,L))});let C=(R,O,U,F,Y=!1)=>{let H=sp([[0,0,r(U),r(U)+.35*o,.1],[F,0,r(U)+.14*o,r(U)+.32*o,.1]],0,0,0,{nC:6});Y&&H.rotateZ(Math.PI),t.dark.push(H.translate(R,O,0))};C(0,h(.52)-.02,.52,.18*o),C(0,f(.3)+.02,.3,.18*o,!0),t.light.push(Yt(new mt(.03*o,.02*o,.45*o),0,h(.62)+.004,r(.62))),[-1,1].forEach(R=>t.light.push(Yt(new mt(.02*o,.02*o,.5*o),R*c[4][1][2][0]*.9,Nn(c.map(([O,U])=>[O,U[2][1]]),.27,1)+.01,r(.27),0,R*.3,0)));let D=[],z=(f(.5)+.2*o)*.5;for(let R=0;R<6;R++)D.push([(.28+.19*R)*o,z,r(.47+R%2*.05)]);for(;D.length<6;)D.push(D[D.length-1]);let G=t.cock;return delete t.cock,{P:t,ex:w,ey:_,nr:S,tailZ:L,sp:A[0]-M[0][0],rx:M[0][0],wy:M[0][1],L:e,k:o,cock:G,pylons:D}}var uu={},hp=new Wi(.5,6,16,1,!0).rotateX(Math.PI/2).translate(0,0,3),up=new Wi(.3,3.4,12,1,!0).rotateX(Math.PI/2).translate(0,0,1.7),sc=null;function Na(){if(sc)return sc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),sc=new Vt(n),sc}function gu(n,e,t){let i=n+"|"+e+"|"+(t?1:0);if(uu[i])return uu[i];let s=Qi[n],r=cv(s),a={paint:new Ai({map:ap(t?"red":e),bumpMap:Jy(),bumpScale:1.2,roughness:.46,metalness:.32,clearcoat:.3,clearcoatRoughness:.45,envMapIntensity:.9}),dark:new et({color:"#25282d",roughness:.55,metalness:.45}),metal:new et({color:"#6f7379",roughness:.32,metalness:.9,envMapIntensity:1.2}),glass:new Ai({color:t?"#4a3418":"#7d6a3e",roughness:.03,metalness:.55,envMapIntensity:2.4,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.78}),light:new an({color:"#fff7e0"}),decal:new et({map:Ky(t),transparent:!0,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),pilot:new et({color:"#e6e6e0",roughness:.4})};a.sill=a.dark,a.helm=a.dark;let o={};for(let c in r.P){let u=mu(r.P[c]);u&&(u.computeBoundingSphere(),o[c]=u)}let l=r.pylons;return uu[i]={J:s,A:r,mats:a,geos:o,pylons:l}}function Ts(n="viper",e="gray",t=!1){Qi[n]||(n="viper"),Ua[e]||(e="gray");let i=gu(n,e,t),{J:s,A:r}=i,a=new Dt,o=new Dt;a.add(o);for(let m in i.geos){let g=new Ye(i.geos[m],i.mats[m]);g.name=m,g.castShadow=m==="paint"||m==="dark"||m==="metal",g.receiveShadow=m==="paint",o.add(g)}let l=[];for(let m=0;m<Math.ceil(s.missiles/2);m++){let g=i.pylons[m%i.pylons.length];[-1,1].forEach(x=>{let M=rc();M.position.set(x*g[0],g[1],g[2]+(m>=i.pylons.length?1.2:0)),M.castShadow=!0,o.add(M),l.push(M)})}let c=(m,g)=>new an({color:m,transparent:!0,opacity:g,blending:Sn,depthWrite:!1}),u=t?i.fm||(i.fm=c("#ffa04a",.55)):c("#ffa04a",.6),d=t?i.cm||(i.cm=c("#a9e2ff",.8)):c("#a9e2ff",.85),h=t?i.gm||(i.gm=new si({map:Na(),color:"#ffb066",opacity:.7,blending:Sn,depthWrite:!1})):new si({map:Na(),color:"#ffb066",opacity:.8,blending:Sn,depthWrite:!1}),f=[],p=[];r.ex.forEach(m=>{let g=new Ye(hp,u),x=new Ye(up,d),M=new ki(h),y=r.nr/.5;g.scale.setScalar(y),x.scale.setScalar(y),g.position.set(m,r.ey,r.tailZ+.9*r.k),x.position.copy(g.position),M.position.set(m,r.ey,r.tailZ+.7*r.k),M.scale.setScalar(r.nr*4.5),o.add(g,x,M),f.push(g,x),p.push(M)});let v=new ki(i.sm||(i.sm=new si({map:Na(),color:"#ffffff",blending:Sn,depthWrite:!1})));return v.scale.setScalar(2.4),v.position.set(0,-.5*r.k,-r.L*.05),o.add(v),a.userData={def:s,body:o,flames:f,glows:p,msls:l,strobe:v,len:r.L,flameMat:u,coreMat:d,glowMat:h},a}var du=null,fu=null;function hv(){if(du)return du;let n=[[0,-1.66],[.085,-1.66],[.11,-1.6],[.11,1.15],[.1,1.32],[.075,1.5],[.04,1.62],[0,1.68]].map(([t,i])=>new se(t,i)),e=[new or(n,16).rotateX(-Math.PI/2)];for(let t=0;t<4;t++){let i=t*Math.PI/2+Math.PI/4;e.push(xr([[.1,0,1.18,1.62,.06],[.32,0,1.42,1.62,.06]],{nC:5}).rotateZ(i),xr([[.1,0,-1,-.72,.06],[.24,0,-.9,-.76,.06]],{nC:5}).rotateZ(i))}return du=mu(e)}function uv(){if(fu)return fu;let n=document.createElement("canvas");n.width=64,n.height=8;let e=n.getContext("2d");e.fillStyle="#ececec",e.fillRect(0,0,64,8),e.fillStyle="#d9b43a",e.fillRect(10,0,3,8),e.fillStyle="#5b5e63",e.fillRect(0,0,6,8);let t=new Vt(n);return t.colorSpace=Tt,fu=new et({map:t,roughness:.4,metalness:.2})}function rc(){return new Ye(hv(),uv())}function dp(){Object.keys(Qi).forEach(n=>gu(n,"red",!0))}var pu={};function Fa(n=!1){let e=n?"boss":"bomber";if(!pu[e]){let d=n?58:44,h=d/44,f={paint:[],dark:[],metal:[],glass:[],light:[]},p=M=>-d/2+M*d;f.paint.push(tp([[0,.05,.05,0,2],[.03,1.2,1.3,.1,2],[.08,2.1,2.3,.3,2.1],[.16,2.5,2.7,.3,2.2],[.6,2.5,2.6,.3,2.2],[.85,1.8,2,.8,2.1],[1,.5,.6,1.6,2]].map(([M,y,A,w,_])=>[M,y*h,A*h,w*h,_]),d,28)),f.glass.push(tp([[.03,.3,.3,.9,2],[.06,1.3,.8,1.4,2.2],[.1,1.4,.7,1.7,2.2],[.13,.4,.2,1.9,2]].map(([M,y,A,w,_])=>[M,y*h,A*h,w*h,_]),d,18));let v=(n?31:24)*h;[-1,1].forEach(M=>{let y=np([[M*2*h,p(.33)],[M*v,p(.45)],[M*v,p(.5)],[M*2*h,p(.52)]],.5*h,.15*h);y.translate(0,2.2*h,0),f.paint.push(y),[.35,.7].forEach(w=>{let _=M*v*w,S=p(.38+w*.1);f.paint.push(Yt(new en(.85*h,.7*h,6*h,14),_,1.1*h,S,Math.PI/2)),f.dark.push(Yt(new Vi(.8*h,14),_,1.1*h,S-3*h-.02,0,Math.PI,0)),f.metal.push(Yt(new en(.6*h,.55*h,1*h,12,1,!0),_,1.1*h,S+3.3*h,Math.PI/2))});let A=np([[M*.3*h,p(.88)],[M*8*h,p(.95)],[M*8*h,p(.98)],[M*.3*h,p(1)]],.25*h,.1*h);A.translate(0,7.2*h,0),f.paint.push(A),f.light.push(Yt(new fn(.25*h,6,5),M*v,2.2*h,p(.5)))}),f.paint.push(Yt(jy([[0,0],[4*h,6.5*h],[6.5*h,6.5*h],[6.8*h,0]],.35*h,.12*h),0,1.4*h,p(.83))),[[0,2.9,.3],[0,-2.4,.55],[0,1.6,.98]].forEach(([M,y,A])=>{f.dark.push(Yt(new fn(.7*h,12,8,0,Math.PI*2,0,Math.PI/2),M,y*h,p(A),y<0?Math.PI:0)),f.metal.push(Yt(new en(.08*h,.08*h,2*h,6),M+.3*h,y*h+(y<0?-.4:.4)*h,p(A)-1*h,Math.PI/2))});let m={paint:new et({map:ap("red"),roughness:.55,metalness:.3}),dark:new et({color:"#25282d",roughness:.55,metalness:.45}),metal:new et({color:"#6f7379",roughness:.32,metalness:.9}),glass:new Ai({color:"#3a2a12",roughness:.05,metalness:.8,transparent:!0,opacity:.85}),light:new an({color:"#ff3a3a"})},g={};for(let M in f){let y=mu(f[M]);y&&(g[M]=y)}let x=[];[-1,1].forEach(M=>[.35,.7].forEach(y=>x.push([M*v*y,1.1*h,p(.38+y*.1)+3.6*h]))),pu[e]={geos:g,mats:m,L:d,k:h,engines:x}}let t=pu[e],i=new Dt,s=new Dt;i.add(s);for(let d in t.geos){let h=new Ye(t.geos[d],t.mats[d]);h.castShadow=d!=="light"&&d!=="glass",s.add(h)}let r=t.fm||(t.fm=new an({color:"#ffa04a",transparent:!0,opacity:.5,blending:Sn,depthWrite:!1})),a=t.cm||(t.cm=new an({color:"#a9e2ff",transparent:!0,opacity:.7,blending:Sn,depthWrite:!1})),o=t.gm||(t.gm=new si({map:Na(),color:"#ffb066",opacity:.7,blending:Sn,depthWrite:!1})),l=[],c=[];t.engines.forEach(([d,h,f])=>{let p=new Ye(hp,r),v=new Ye(up,a),m=new ki(o),g=1.2*t.k;p.scale.setScalar(g),v.scale.setScalar(g),p.position.set(d,h,f),v.position.set(d,h,f),m.position.set(d,h,f-.3),m.scale.setScalar(4*t.k),s.add(p,v,m),l.push(p,v),c.push(m)});let u=new ki(t.sm||(t.sm=new si({map:Na(),color:"#ff4040",blending:Sn,depthWrite:!1})));return u.scale.setScalar(5),u.position.set(0,9*t.k,-t.L*.5+.9*t.L),s.add(u),i.userData={def:{len:t.L,span:24},body:s,flames:l,glows:c,msls:[],strobe:u,len:t.L,guns:[[0,2.9*t.k,-t.L/2+.3*t.L],[0,-2.4*t.k,-t.L/2+.55*t.L],[0,1.6*t.k,-t.L/2+.98*t.L]]},i}function _u(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new Vt(i);return s.colorSpace=Tt,s.anisotropy=8,s}function dv(){return _u(1024,384,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f3338"),i.addColorStop(1,"#202327"),n.fillStyle=i,n.fillRect(0,0,e,t);for(let a=0;a<2500;a++)n.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},.035)`,n.fillRect(Math.random()*e,Math.random()*t,2,2);[[e*.22],[e*.78]].forEach(([a])=>{n.fillStyle="#16181b",n.fillRect(a-170,40,340,270),n.strokeStyle="#4a4f56",n.lineWidth=3,n.strokeRect(a-170,40,340,270),n.fillStyle="#3a3e44";for(let o=0;o<5;o++)n.fillRect(a-130+o*58,20,34,14),n.fillRect(a-130+o*58,316,34,14),n.fillRect(a-192,70+o*48,14,30),n.fillRect(a+178,70+o*48,14,30);n.fillStyle="#aab",n.font="10px monospace",["RDR","TGP","SMS","FCR","HSD"].forEach((o,l)=>n.fillText(o,a-130+l*58+4,15))});let s=e/2;[[s-62,92],[s+62,92],[s-62,214],[s+62,214]].forEach(([a,o],l)=>{n.fillStyle="#0d0e10",n.beginPath(),n.arc(a,o,48,0,7),n.fill(),n.strokeStyle="#5a5f66",n.lineWidth=4,n.stroke(),n.strokeStyle="#d8d8d0",n.lineWidth=2;for(let c=0;c<24;c++){let u=c%3?40:34,d=c/24*Math.PI*2;n.beginPath(),n.moveTo(a+Math.cos(d)*u,o+Math.sin(d)*u),n.lineTo(a+Math.cos(d)*44,o+Math.sin(d)*44),n.stroke()}l===0?(n.fillStyle="#3d6fb0",n.beginPath(),n.arc(a,o,30,Math.PI,0),n.fill(),n.fillStyle="#7a5a36",n.beginPath(),n.arc(a,o,30,0,Math.PI),n.fill(),n.strokeStyle="#ffcc33",n.beginPath(),n.moveTo(a-20,o),n.lineTo(a+20,o),n.stroke()):(n.strokeStyle="#ff8a3d",n.lineWidth=3,n.beginPath(),n.moveTo(a,o),n.lineTo(a+Math.cos(l*1.7)*32,o+Math.sin(l*1.7)*32),n.stroke())}),["MASTER CAUTION","FUEL","HYD","ENG","OXY","GEAR","TF FAIL","ECM"].forEach((a,o)=>{let l=s-105+o%4*53,c=300+Math.floor(o/4)*30;n.fillStyle=o===0?"#5a3a10":"#1d2a1d",n.fillRect(l,c,49,24),n.fillStyle=o===0?"#ffb347":"#6fae6f",n.font="bold 8px monospace",n.fillText(a.slice(0,8),l+3,c+15)}),n.fillStyle="#c9c9c0",n.font="bold 11px monospace",n.fillText("ARM",s-150,360),n.fillText("MASTER",s+110,360);for(let a=0;a<6;a++)n.fillStyle="#111",n.beginPath(),n.arc(s-160+a*64,372,6,0,7),n.fill()})}function fv(){return _u(256,512,(n,e,t)=>{n.fillStyle="#2a2d31",n.fillRect(0,0,e,t);for(let i=0;i<7;i++){n.strokeStyle="#41464d",n.lineWidth=2,n.strokeRect(10,14+i*70,e-20,60),n.fillStyle="#d8d8d0",n.font="bold 10px monospace",n.fillText(["FUEL","ENG","LIGHTS","RADIO","IFF","ECS","ANTI-ICE"][i],18,30+i*70);for(let s=0;s<4;s++)n.fillStyle="#121315",n.beginPath(),n.arc(40+s*52,50+i*70,9,0,7),n.fill(),n.fillStyle="#9aa0a8",n.fillRect(38+s*52,36+i*70,4,12)}})}function fp(n,e){let t=op(n,e),i=new Dt,s=new Dt;i.add(s),s.position.set(0,-t.eyeY,-t.eyeZ);let r=Ts(n,e);s.add(r);let a={uC:{value:new wt(t.w,t.z0,t.z1,0)},uY:{value:new se(t.y0,t.y1)}};r.traverse(U=>{if(U.isMesh){if(U.castShadow=!1,U.name==="pilot"||U.name==="helm"||U.name==="sill")U.visible=!1;else if(U.name==="glass")U.material=new an({color:"#d8e6f0",transparent:!0,opacity:.05,side:Dn,depthWrite:!1}),U.renderOrder=5;else if(U.name==="paint"||U.name==="decal"){let F=U.material.clone();F.onBeforeCompile=Y=>{Object.assign(Y.uniforms,a),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP; uniform vec4 uC; uniform vec2 uY;`).replace("void main() {",`void main() {
if (abs(vLP.x) < uC.x && vLP.z > uC.y && vLP.z < uC.z && vLP.y > uY.x && vLP.y < uY.y) discard;`)},F.customProgramCacheKey=()=>"fpcut-"+U.name,U.material=F}}});let o=(U,F,Y)=>new I(U,t.eyeY+F,t.eyeZ+Y),l=t.w,c=new et({color:"#1b1d20",roughness:.85,metalness:.2}),u=new et({color:"#33373c",roughness:.5,metalness:.6}),d=new et({color:"#141517",roughness:1,map:_u(128,128,(U,F)=>{U.fillStyle="#26282b",U.fillRect(0,0,F,F);for(let Y=0;Y<1600;Y++)U.fillStyle=`rgba(0,0,0,${Math.random()*.25})`,U.fillRect(Math.random()*F,Math.random()*F,1,1)})}),h=(U,F,Y,H=0,J=0,te=0)=>{let be=new Ye(U,F);return be.position.copy(Y),be.rotation.set(H,J,te),s.add(be),be},f=new et({color:"#202327",roughness:.9,side:Dn}),p=t.z1-t.z0,v=Math.min(t.y1,t.eyeY-.26),m=v-t.y0;[-1,1].forEach(U=>h(new Bt(p,m),f,new I(U*l,(t.y0+v)/2,(t.z0+t.z1)/2),0,Math.PI/2)),h(new Bt(l*2,p),f,new I(0,t.y0,(t.z0+t.z1)/2),-Math.PI/2);let g=l*1.92,x=g*.375,M=h(new Bt(g,x),new et({map:dv(),roughness:.8,emissive:"#ffffff",emissiveMap:null,emissiveIntensity:0}),o(0,-.34,-.6),-.3),y=U=>{let F=document.createElement("canvas");F.width=128,F.height=96;let Y=new Vt(F);Y.colorSpace=Tt;let H=new Ye(new Bt(g*.29,g*.22),new an({map:Y,toneMapped:!1}));return H.position.set(U*g,x*.04,.004),M.add(H),{c:F,g:F.getContext("2d"),t:Y}},A=[y(-.28),y(.28)];h(new mt(g*.9,.02,.16),d,o(0,-.232,-.64)),h(new en(.011,.011,g*.9,12),d,o(0,-.23,-.56),0,0,Math.PI/2).scale.set(1,1,.6);let w=new Ai({color:"#b8ffd8",transparent:!0,opacity:.1,roughness:0,metalness:.2,depthWrite:!1});h(new Bt(.16,.13),w,o(0,-.13,-.62),-.25).renderOrder=4,h(new Bt(.16,.12),w,o(0,-.12,-.65),-.2).renderOrder=4,[-1,1].forEach(U=>h(new mt(.007,.13,.007),u,o(U*.082,-.14,-.63),-.22)),h(new mt(.18,.025,.06),u,o(0,-.205,-.62));let _=new et({map:fv(),roughness:.8});[-1,1].forEach(U=>{h(new mt(.13,.07,.6),[c,c,_,c,c,c],o(U*(l-.07),-.62,-.05))});let S=new Dt;S.position.copy(o(-(l-.08),-.56,-.14)),S.rotation.x=-.35,s.add(S),[[new mt(.025,.14,.025),u,0,.07,0],[new mt(.06,.05,.09),c,0,.155,-.01],[new fn(.009,8,6),new an({color:"#c33"}),.02,.18,-.04]].forEach(([U,F,Y,H,J])=>{let te=new Ye(U,F);te.position.set(Y,H,J),S.add(te)});let L=new Dt;L.position.copy(o(0,-.95,-.42)),s.add(L);let C=new Ye(new Wi(.06,.08,12),d);C.position.y=.04,L.add(C);let D=new Ye(new en(.013,.016,.3,10),u);D.position.y=.19,L.add(D);let z=new Ye(new Gi(.024,.09,4,10),c);z.position.set(0,.38,.01),z.rotation.x=.15,L.add(z);let G=new Ye(new mt(.012,.02,.014),new an({color:"#c22"}));G.position.set(0,.42,-.024),L.add(G);let R=h(new ri(.045,.008,6,16,Math.PI),new et({color:"#e0b020",roughness:.5}),o(0,-.74,-.24),-.2);R.rotation.z=0;let O=new et({color:"#4a5240",roughness:.95});return[-1,1].forEach(U=>{h(new Gi(.065,.32,4,12),O,o(U*.12,-.75,-.3),Math.PI/2-.45).scale.set(1,1,.9)}),i.userData={mfds:A,stick:L,msls:r.userData.msls,eyeY:t.eyeY,eyeZ:t.eyeZ},i}var ac=class extends ds{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new mt;e.deleteAttribute("uv");let t=new et({side:Wt}),i=new et,s=new _s(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ye(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ti(e,i,6),o=new Pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ye(e,yr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ye(e,yr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ye(e,yr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ye(e,yr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Ye(e,yr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ye(e,yr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function yr(n){return new da({color:0,emissive:16777215,emissiveIntensity:n})}var ws=14e3,Qn=340,oc=ws/2,Bn=4600,xu=55;function lc(n,e){let t=n*374761393+e*668265263;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967295}function pv(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=lc(t,i),c=lc(t+1,i),u=lc(t,i+1),d=lc(t+1,i+1);return l+(c-l)*a+(u-l)*o+(l-c-u+d)*a*o}function cc(n,e,t=4){let i=0,s=.5,r=1,a=0;for(let o=0;o<t;o++)i+=pv(n*r,e*r)*s,a+=s,s*=.5,r*=2.03;return i/a}var As=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function mv(n,e){let t=cc(n*.0011+3,e*.0011-7,4),i=Math.hypot(n,e),s=t*110+Math.sin(n*.0042+t*6)*Math.cos(e*.0017)*14,r=cc(n*42e-5+40,e*42e-5+11,3);s+=As(.6,.625,r)*230+As(.68,.7,r)*150+As(.75,.765,r)*110,s+=As(4300,6400,i)*(700+cc(n*9e-4,e*9e-4,3)*900);let a=Math.max(0,Math.abs(n)-1450),o=Math.hypot(a,e),l=As(560,280,o);return s*(1-l)+xu*l}var hc=class{constructor(){let e=Qn+1;this.h=new Float32Array(e*e);for(let t=0;t<e;t++)for(let i=0;i<e;i++)this.h[t*e+i]=mv(-oc+i*ws/Qn,-oc+t*ws/Qn)}height(e,t){let i=Qn+1,s=(e+oc)/ws*Qn,r=(t+oc)/ws*Qn;if(s<0||r<0||s>=Qn||r>=Qn)return 800;let a=Math.floor(s),o=Math.floor(r),l=s-a,c=r-o,u=this.h,d=u[o*i+a],h=u[o*i+a+1],f=u[(o+1)*i+a],p=u[(o+1)*i+a+1];return l+c<1?d+(h-d)*l+(f-d)*c:p+(f-p)*(1-l)+(h-p)*(1-c)}mesh(e){let t=new Bt(ws,ws,Qn,Qn);t.rotateX(-Math.PI/2);let i=t.attributes.position,s=Qn+1;for(let A=0;A<i.count;A++){let w=A%s,_=Math.floor(A/s);i.setY(A,this.h[_*s+w])}t.computeVertexNormals();let r=this.h,a=A=>{let w=A%s,_=Math.floor(A/s),S=0,L=0;for(let[C,D]of[[-4,0],[4,0],[0,-4],[0,4],[-3,-3],[3,3],[-3,3],[3,-3]]){let z=w+C,G=_+D;z<0||G<0||z>=s||G>=s||(S+=r[G*s+z],L++)}return Math.min(1.1,Math.max(.62,1-(S/L-r[A])/110))},o=t.attributes.normal,l=new Float32Array(i.count*3),c=new Le,u=new Le("#e3b97f"),d=new Le("#d39c62"),h=new Le("#a4583a"),f=new Le("#7a3f2c"),p=new Le("#c98a58"),v=new Le("#b7896b");for(let A=0;A<i.count;A++){let w=i.getX(A),_=i.getY(A),S=i.getZ(A),L=o.getY(A),C=cc(w*.004,S*.004,2);c.copy(u).lerp(d,C*.9);let D=As(.93,.72,L);c.lerp(_>120?h:f,D),_>180&&L>.95&&c.lerp(p,.55),_>500&&c.lerp(v,As(500,900,_)*.6);let z=Math.sin(_*.12)*.5+.5;D>.4&&c.multiplyScalar(.88+z*.2),c.multiplyScalar(a(A)),l[A*3]=c.r,l[A*3+1]=c.g,l[A*3+2]=c.b}t.setAttribute("color",new Ct(l,3));let m=document.createElement("canvas");m.width=m.height=256;let g=m.getContext("2d");g.fillStyle="#808080",g.fillRect(0,0,256,256);for(let A=0;A<9e3;A++){let w=Math.random();g.fillStyle=`rgba(${w<.5?255:40},${w<.5?240:30},${w<.5?220:20},${.05+Math.random()*.08})`,g.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let A=0;A<40;A++){g.strokeStyle="rgba(90,60,30,.08)",g.lineWidth=2,g.beginPath();let w=Math.random()*256;g.moveTo(0,w);for(let _=0;_<=256;_+=16)g.lineTo(_,w+Math.sin(_*.05+A)*4);g.stroke()}let x=new Vt(m);x.wrapS=x.wrapT=Zn,x.repeat.set(420,420),x.anisotropy=e.capabilities.getMaxAnisotropy(),x.colorSpace=Tt;let M=new et({vertexColors:!0,map:x,roughness:.95,metalness:0}),y=new Ye(t,M);return y.receiveShadow=!0,y}rocks(){let e=new na(1,0),t=new et({color:"#8d5a3e",roughness:1,flatShading:!0}),i=700,s=new Ti(e,t,i),r=new Pt;for(let a=0;a<i;a++){let o=Math.sqrt(Math.random())*4200,l=Math.random()*7,c=Math.cos(l)*o,u=Math.sin(l)*o,d=4+Math.random()**3*30;r.position.set(c,this.height(c,u)+d*.2,u),r.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),r.scale.set(d,d*(.5+Math.random()*.5),d),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}return s.castShadow=!1,s.receiveShadow=!0,s}};function pp(n){let e=new Mn({side:Wt,depthWrite:!1,fog:!1,uniforms:{sun:{value:n.clone().normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 sun; varying vec3 vP;
      void main(){ float y=vP.y; vec3 hor=vec3(.93,.82,.66), mid=vec3(.62,.74,.86), top=vec3(.2,.42,.74);
        vec3 c=mix(hor,mid,smoothstep(-.02,.18,y)); c=mix(c,top,smoothstep(.15,.85,y)); if(y<0.) c=mix(hor,vec3(.85,.72,.55),smoothstep(0.,-.2,y));
        float s=max(dot(vP,sun),0.); c+=vec3(1.,.85,.6)*(pow(s,900.)*4.+pow(s,24.)*.35+pow(s,4.)*.08);
        gl_FragColor=vec4(c,1.); }`}),t=new Ye(new fn(2e4,32,16),e);return t.renderOrder=-2,t}function mp(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let u=0;u<30;u++){let d=28+Math.random()*72,h=40+Math.random()*46,f=12+Math.random()*24,p=e.createRadialGradient(d,h-f*.3,0,d,h,f);p.addColorStop(0,"rgba(255,255,255,.6)"),p.addColorStop(.6,"rgba(244,240,232,.35)"),p.addColorStop(1,"rgba(230,224,214,0)"),e.fillStyle=p,e.fillRect(0,0,128,128)}let t=new Vt(n),i=170,s=new Float32Array(i*3),r=new Float32Array(i),a=new Float32Array(i);for(let u=0,d=0;u<34;u++){let h=600+Math.random()*5600,f=Math.random()*7,p=Math.cos(f)*h,v=Math.sin(f)*h,m=2700+Math.random()*1500,g=450+Math.random()*650;for(let x=0;x<5&&d<i;x++,d++)s.set([p+(Math.random()-.5)*g*1.4,m+(Math.random()-.5)*g*.18,v+(Math.random()-.5)*g*.8],d*3),r[d]=g*(.6+Math.random()*.6),a[d]=.45+Math.random()*.35}let o=new yt;o.setAttribute("position",new Ct(s,3)),o.setAttribute("size",new Ct(r,1)),o.setAttribute("alpha",new Ct(a,1));let l=new Mn({transparent:!0,depthWrite:!1,uniforms:{map:{value:t},scale:{value:800},fogColor:{value:new Le("#dcc8a6")}},vertexShader:"attribute float size; attribute float alpha; varying float vA; varying float vD; uniform float scale; void main(){ vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(900.,size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; uniform vec3 fogColor; varying float vA; varying float vD; void main(){ vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(3000.,14000.,vD); float near=smoothstep(60.,420.,vD); gl_FragColor=vec4(mix(vec3(1.,.985,.96),fogColor,f*.7),t.a*vA*near); }"}),c=new fs(o,l);return c.frustumCulled=!1,c.renderOrder=1,c}var gp=new ot,gv=new Ft,_v=new rn,xv=new I,yv=new I,Zt=(n,e=0,t=0,i=0,s=0,r=0,a=0,o=[1,1,1])=>{gp.compose(xv.set(e,t,i),gv.setFromEuler(_v.set(s,r,a)),yv.set(...o));let l=n.clone().applyMatrix4(gp);return l.index?l.toNonIndexed():l},uc=n=>(n.forEach(e=>{for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);e.clearGroups()}),nc(n,!1));function _p(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new Vt(s);return r.colorSpace=Tt,r.anisotropy=8,i&&(r.wrapS=r.wrapT=Zn,r.repeat.set(...i)),r}function xp(){let n=new Dt,e=xu+.3,t=_p(2048,64,(m,g,x)=>{m.fillStyle="#3a3c40",m.fillRect(0,0,g,x);for(let M=0;M<4e3;M++)m.fillStyle=`rgba(${Math.random()<.5?255:0},${Math.random()<.5?255:0},${Math.random()<.5?255:0},.05)`,m.fillRect(Math.random()*g,Math.random()*x,2,1);m.fillStyle="#e8e8e2";for(let M=120;M<g-120;M+=46)m.fillRect(M,x/2-1,26,2);[[10,1],[g-50,-1]].forEach(([M])=>{for(let y=0;y<8;y++)m.fillRect(M,6+y*7,40,4)}),m.fillRect(0,3,g,1.5),m.fillRect(0,x-4.5,g,1.5),m.fillStyle="rgba(20,20,20,.45)";for(let M=0;M<30;M++)m.fillRect(150+Math.random()*300,x/2-8+Math.random()*16,60,2)}),i=new Ye(new Bt(2900,60).rotateX(-Math.PI/2),new et({map:t,roughness:.9}));i.position.set(0,e,0),i.receiveShadow=!0,n.add(i);let s=new et({color:"#7f7a70",roughness:.95}),r=new Ye(new Bt(700,160).rotateX(-Math.PI/2),s);r.position.set(-200,e-.05,170),r.receiveShadow=!0,n.add(r);let a=new Ye(new Bt(26,90).rotateX(-Math.PI/2),s);a.position.set(-200,e-.04,70),n.add(a);let o=[],l=[],c=[],u=[],d=[];for(let m=0;m<4;m++){let g=new en(22,22,50,20,1,!1,0,Math.PI);o.push(Zt(g,-460+m*90,e,210,0,Math.PI/2,Math.PI/2)),l.push(Zt(new Bt(34,18),-460+m*90,e+9,184.8,0,Math.PI,0))}o.push(Zt(new mt(14,30,14),160,e+15,210)),u.push(Zt(new mt(20,7,20),160,e+33,210)),l.push(Zt(new mt(22,1.2,22),160,e+37,210));for(let m=0;m<5;m++)d.push(Zt(new en(9,9,12,18),300+m%3*24,e+6,190+Math.floor(m/3)*24));for(let m=0;m<40;m++)u.push(Zt(new fn(.9,6,4),-1440+m*74,e+.5,m%2?34:-34));o.push(Zt(new mt(60,10,26),40,e+5,230)),l.push(Zt(new mt(62,1,28),40,e+10.5,230));let h={paint:new et({color:"#b9ad97",roughness:.8}),dark:new et({color:"#2d3036",roughness:.7}),metal:new et({color:"#8c9097",roughness:.35,metalness:.8}),glow:new et({color:"#8fd0ff",emissive:"#4aa8ff",emissiveIntensity:.6,roughness:.2,metalness:.5}),white:new et({color:"#e7e4dc",roughness:.5,metalness:.2})};for(let[m,g]of Object.entries({paint:o,dark:l,metal:c,glow:u,white:d}))if(g.length){let x=new Ye(uc(g),h[m]);x.castShadow=x.receiveShadow=!0,n.add(x)}let f=new Dt;f.position.set(160,e+38,210);let p=new Ye(new mt(14,4,.8),h.metal);p.position.y=3,f.add(p),n.add(f);let v=new Ye(new Vi(30,40).rotateX(-Math.PI/2),new et({map:_p(256,256,m=>{m.fillStyle="#b8f36b",m.beginPath(),m.arc(128,128,120,0,7),m.fill(),m.fillStyle="#2b2e33",m.font="900 130px Arial",m.textAlign="center",m.textBaseline="middle",m.fillText("JK",128,136)}),transparent:!0,roughness:.8}));return v.position.set(-200,e,170),n.add(v),n.userData={radar:f,center:new I(0,e,0),hits:[[-460,210],[-280,210],[160,210],[320,200],[40,230],[-200,170],[500,0],[-700,0]]},n}var yu={};function vv(n){if(yu[n])return yu[n];let e=[],t=[],i=[];if(n==="sam"){e.push(Zt(new mt(5,2,11),0,2.2,0)),e.push(Zt(new mt(4.6,2.6,3),0,3.6,-4)),t.push(Zt(new mt(4.7,1.2,2.6),0,4.3,-5.4));for(let r=0;r<6;r++)t.push(Zt(new en(.75,.75,2.2,10),(r%2-.5)*2.4,1.2,(Math.floor(r/2)-1)*3.4,0,0,Math.PI/2));for(let r=0;r<4;r++)i.push(Zt(new en(.5,.5,7,10),(r%2-.5)*1.2,5.4+Math.floor(r/2)*1.1,1.5,-.75));i.push(Zt(new mt(3.4,2.2,.3),0,6.5,-1.5,.3))}else e.push(Zt(new ri(5,1.4,6,18),0,.8,0,Math.PI/2)),e.push(Zt(new en(2.2,2.6,2,14),0,1.6,0)),t.push(Zt(new mt(3,1.8,3),0,3.2,0)),[-1,1].forEach(r=>i.push(Zt(new en(.18,.18,6,8),r*.7,4.2,-3,-1.1)));let s=[new et({color:"#8a7a5a",roughness:.85}),new et({color:"#3a3b36",roughness:.7}),new et({color:"#5d6066",roughness:.4,metalness:.7})];return yu[n]=[uc(e),uc(t),uc(i)].map((r,a)=>[r,s[a]])}function dc(n){let e=new Dt;return vv(n).forEach(([t,i])=>{let s=new Ye(t,i);s.castShadow=!0,e.add(s)}),e.userData={flames:[],glows:[],msls:[],body:e,strobe:{visible:!1}},e}var fc=null;function Mv(){if(fc)return fc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),fc=new Vt(n),fc}var vr=class{constructor(e,t){this.max=e,this.n=0,this.i=0,this.density=1,this.hi=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxL=new Float32Array(e),this.grow=new Float32Array(e),this.s0=new Float32Array(e),this.a0=new Float32Array(e),this.drag=new Float32Array(e),this.rise=new Float32Array(e),this.fade=new Float32Array(e);let i=new yt;i.setAttribute("position",new Ct(this.pos,3).setUsage(bs)),i.setAttribute("color",new Ct(this.col,3).setUsage(bs)),i.setAttribute("size",new Ct(this.size,1).setUsage(bs)),i.setAttribute("alpha",new Ct(this.alpha,1).setUsage(bs));let s=new Mn({transparent:!0,depthWrite:!1,blending:t?Sn:$i,uniforms:{map:{value:Mv()},scale:{value:800},fogColor:{value:new Le},fogNear:{value:1},fogFar:{value:1}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; varying float vD; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(520., size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear, fogFar; varying float vA; varying vec3 vC; varying float vD;
        void main(){ if(vA<.004) discard; vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(fogNear,fogFar,vD); vec3 c=mix(vC,fogColor,${t?"0.":"f"}); gl_FragColor=vec4(c,t.a*vA*${t?"(1.-f)":"1."}); }`});this.points=new fs(i,s),this.points.frustumCulled=!1,this.g=i,this.mat=s}emit(e,t,i,s={}){if(this.density<1&&!s.must&&Math.random()>this.density)return;let r=this.i;r+1>this.hi&&(this.hi=r+1),this.i=(this.i+1)%this.max,this.n<this.max&&this.n++,this.pos[r*3]=e,this.pos[r*3+1]=t,this.pos[r*3+2]=i;let a=s.spread||0;this.vel[r*3]=(s.vx||0)+(Math.random()-.5)*a,this.vel[r*3+1]=(s.vy||0)+(Math.random()-.5)*a,this.vel[r*3+2]=(s.vz||0)+(Math.random()-.5)*a;let o=s.color||[1,1,1];this.col[r*3]=o[0],this.col[r*3+1]=o[1],this.col[r*3+2]=o[2],this.size[r]=this.s0[r]=s.size||4,this.grow[r]=s.grow??1.5,this.a0[r]=s.alpha??.6,this.alpha[r]=this.a0[r],this.life[r]=this.maxL[r]=s.life||2,this.drag[r]=s.drag??.5,this.rise[r]=s.rise??0,this.fade[r]=s.fadeIn?1:0}update(e,t,i){let s=0;for(let o=0;o<this.hi;o++){if(this.life[o]<=0){this.alpha[o]=0;continue}s++,this.life[o]-=e;let l=1-this.life[o]/this.maxL[o],c=Math.exp(-this.drag[o]*e);this.vel[o*3]*=c,this.vel[o*3+1]=this.vel[o*3+1]*c+this.rise[o]*e,this.vel[o*3+2]*=c,this.pos[o*3]+=this.vel[o*3]*e,this.pos[o*3+1]+=this.vel[o*3+1]*e,this.pos[o*3+2]+=this.vel[o*3+2]*e,this.size[o]=this.s0[o]*Math.max(.05,1+this.grow[o]*(this.maxL[o]-this.life[o])),this.alpha[o]=this.a0[o]*(1-l)*(this.fade[o]?Math.min(1,l*8):1)}let r=this.g.attributes,a=this.hi;this.g.setDrawRange(0,a);for(let o of[r.position,r.size,r.alpha,r.color])o.clearUpdateRanges(),o.addUpdateRange(0,a*o.itemSize),o.needsUpdate=!0;s||(this.hi=0,this.i=0),t&&(this.mat.uniforms.fogColor.value.copy(t.color),this.mat.uniforms.fogNear.value=t.near,this.mat.uniforms.fogFar.value=t.far),this.mat.uniforms.scale.value=i*.5}clear(){this.life.fill(0),this.alpha.fill(0)}},pc=class{constructor(e=400){this.max=e;let t=new mt(.35,.35,9);this.mesh=new Ti(t,new an({color:"#ffd27a",transparent:!0,opacity:.95,blending:Sn,depthWrite:!1}),e),this.mesh.instanceMatrix.setUsage(bs),this.mesh.frustumCulled=!1,this.list=[],this.o=new Pt,this.mesh.setColorAt(0,new Le("#fff")),this.mesh.count=0}add(e,t,i,s,r){this.list.length>=this.max&&this.list.shift(),this.list.push({p:e.clone(),v:t.clone(),life:1.6,owner:i,dmg:s,color:r})}draw(){let e=this.o,t=0;for(let i of this.list)e.position.copy(i.p),e.lookAt(i.p.x+i.v.x,i.p.y+i.v.y,i.p.z+i.v.z),e.updateMatrix(),this.mesh.setMatrixAt(t,e.matrix),this.mesh.setColorAt(t,i.color),t++;this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},dt=(()=>{let n,e,t,i,s=!0,r;try{s=localStorage.getItem("jkstrike-sound")!=="0"}catch{}function a(){if(n){n.state==="suspended"&&n.resume();return}let d=window.AudioContext||window.webkitAudioContext;if(!d)return;n=new d,e=n.createGain(),e.gain.value=s?.6:0;let h=n.createDynamicsCompressor();e.connect(h),h.connect(n.destination),r=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let f=r.getChannelData(0);for(let y=0;y<f.length;y++)f[y]=Math.random()*2-1;let p=(y,A,w)=>{let _=n.createBufferSource();_.buffer=r,_.loop=!0;let S=n.createBiquadFilter();S.type=y,S.frequency.value=A,S.Q.value=w;let L=n.createGain();return L.gain.value=0,_.connect(S),S.connect(L),L.connect(e),_.start(),{g:L,b:S}};t=p("lowpass",400,.8),i=p("bandpass",900,.5);let v=n.createOscillator();v.type="sawtooth",v.frequency.value=55;let m=n.createGain();m.gain.value=0;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=220,v.connect(g),g.connect(m),m.connect(e),v.start(),t.o=v,t.og=m;let x=n.createOscillator();x.type="sine",x.frequency.value=1200;let M=n.createGain();M.gain.value=0,x.connect(M),M.connect(e),x.start(),t.whine=x,t.wg=M}let o=()=>n.currentTime;function l(d,h,f,p){if(!t)return;let v=p?.55:1;t.g.gain.setTargetAtTime((.12+d*.2+(h?.25:0))*v,o(),.1),t.b.frequency.setTargetAtTime(250+d*600+(h?900:0),o(),.15),t.og.gain.setTargetAtTime((.05+d*.05)*v,o(),.1),t.o.frequency.setTargetAtTime(45+d*40,o(),.2),t.wg.gain.setTargetAtTime(.012+d*.02,o(),.2),t.whine.frequency.setTargetAtTime(900+d*900,o(),.3),i.g.gain.setTargetAtTime(Math.min(.25,f*f*1e-6)*(p?.5:1),o(),.2),i.b.frequency.setTargetAtTime(600+f*2,o(),.2)}function c(d,h,f,p,v="bandpass"){if(!n||!s)return;let m=n.createBufferSource();m.buffer=r;let g=n.createBiquadFilter();g.type=v,g.frequency.value=d,g.Q.value=h;let x=n.createGain();x.gain.setValueAtTime(p,o()),x.gain.exponentialRampToValueAtTime(.001,o()+f),m.connect(g),g.connect(x),x.connect(e),m.start(),m.stop(o()+f+.05)}function u(d,h,f="sine",p=.15,v){if(!n||!s)return;let m=n.createOscillator(),g=n.createGain();m.type=f,m.frequency.setValueAtTime(d,o()),v&&m.frequency.exponentialRampToValueAtTime(v,o()+h),g.gain.setValueAtTime(p,o()),g.gain.exponentialRampToValueAtTime(.001,o()+h),m.connect(g),g.connect(e),m.start(),m.stop(o()+h+.05)}return{init:a,engine:l,get on(){return s},toggle(){s=!s;try{localStorage.setItem("jkstrike-sound",s?"1":"0")}catch{}return e&&e.gain.setTargetAtTime(s?.6:0,o(),.05),s},silence(){t&&(t.g.gain.setTargetAtTime(0,o(),.05),t.og.gain.setTargetAtTime(0,o(),.05),t.wg.gain.setTargetAtTime(0,o(),.05),i.g.gain.setTargetAtTime(0,o(),.05))},gun(){c(1400,.7,.07,.22),c(180,1,.06,.25,"lowpass")},hit(){u(2200,.05,"square",.06)},launch(){c(700,.4,1.1,.45),u(180,.9,"sawtooth",.08,60)},boom(d=0){let h=Math.max(.08,1-d/3e3);c(120,.6,1.6,h),c(700,.5,.5,h*.5),u(55,1.2,"sine",h*.6,30)},flare(){c(2400,1.5,.25,.18),u(1600,.2,"square",.04,900)},lockTick(){u(1e3,.05,"square",.05)},locked(d){d&&u(1500,.12,"square",.06)},warn(){u(880,.12,"square",.1),setTimeout(()=>u(660,.12,"square",.1),140)},pullup(){u(520,.2,"triangle",.1)},win(){[523,659,784,1046].forEach((d,h)=>setTimeout(()=>u(d,.3,"triangle",.15),h*120))},click(){u(1200,.04,"square",.04)},damage(){c(400,.8,.25,.4),u(120,.2,"square",.1,60)}}})();var Te=n=>document.querySelector(n),Tc=n=>[...document.querySelectorAll(n)],Ps={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},vt=(n,e,t)=>Math.max(e,Math.min(t,n)),es=(n,e,t)=>n+(e-n)*t,He=(n,e)=>n+Math.random()*(e-n),Sv=n=>n[Math.floor(Math.random()*n.length)],nn=()=>new I,kn=new I(0,1,0),Nt=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Nt&&document.body.classList.add("touchui");var ka=Te("#gl"),gn=new Ql({canvas:ka,antialias:!0,powerPreference:"high-performance"}),Cp=Ps.get("jkstrike-set",{}),Mu={auto:{max:Nt?1.25:1.5,shadow:Nt?1024:2048,density:Nt?.7:1},high:{max:2,shadow:2048,density:1},medium:{max:1.15,shadow:1024,density:.8},low:{max:.8,shadow:0,density:.55}},Ga=Mu[Cp.quality]||Mu.auto,ci=Math.min(devicePixelRatio||1,Ga.max);gn.setPixelRatio(ci);gn.toneMapping=ya;gn.toneMappingExposure=1.05;gn.outputColorSpace=Tt;gn.shadowMap.enabled=Ga.shadow>0;gn.shadowMap.type=xs;var ft=new ds,vc=new Yr("#dcc8a6",1800,11e3);ft.fog=vc;ft.background=new Le("#dcc8a6");ft.environment=new mr(gn).fromScene(new ac,.04).texture;ft.environmentIntensity=.55;var Ke=new dn(70,1,.1,3e4);ft.add(Ke);var Pp=new I(-.55,.62,-.45).normalize(),Li=new xa("#fff0d8",3.1);Li.castShadow=!0;Li.shadow.mapSize.set(Ga.shadow||512,Ga.shadow||512);Object.assign(Li.shadow.camera,{left:-120,right:120,top:120,bottom:-120,near:10,far:2400});Li.shadow.bias=-5e-4;Li.shadow.normalBias=.5;ft.add(Li,Li.target,new pa("#bcd6f2","#c79a68",1));var An=new hc;ft.add(An.mesh(gn));ft.add(An.rocks());var Wa=xp();ft.add(Wa);var Ip=pp(Pp);ft.add(Ip);var Lp=mp();ft.add(Lp);var on=new vr(2200,!1),Hn=new vr(1500,!0),Tr=new vr(2400,!1);ft.add(on.points,Hn.points,Tr.points);[on,Hn,Tr].forEach(n=>n.density=Ga.density);var Su=Array.from({length:3},()=>{let n=new _s("#ffb060",0,900,2);return ft.add(n),{l:n,t:0}}),bv=0,fi=new pc(600);ft.add(fi.mesh);var Re={jet:"raptor",paint:"gray",diff:"normal",view:"third",control:Nt?"stick":"aim",sens:"mid",invert:!1,assist:!0,quality:"auto",...Cp};Qi[Re.jet]||(Re.jet="raptor");Nt&&(Re.control="stick");var Mc=()=>Ps.set("jkstrike-set",Re),wr={easy:{turn:.7,acc:.4,msl:28,dmg:.55,name:"Rookie"},normal:{turn:.92,acc:.58,msl:19,dmg:.9,name:"Pilot"},ace:{turn:1.15,acc:.9,msl:12,dmg:1.3,name:"Ace"}},wc={fighter:{hp:100,pts:100,label:""},ace:{hp:190,pts:250,label:"ACE"},bomber:{hp:420,pts:300,label:"BOMBER"},boss:{hp:2200,pts:1500,label:"GUNSHIP"},sam:{hp:160,pts:150,label:"SAM"},aa:{hp:90,pts:100,label:"AAA"}},Ev=[["gun","\u{1F525}","Heavy Rounds","+30% gun damage"],["lock","\u{1F3AF}","Rapid Lock","Missile lock 45% faster"],["pylon","\u{1F680}","Extra Pylons","+3 missiles and faster reloads"],["hull","\u{1F6E1}","Reinforced Hull","+35 max hull, fully repaired"],["flare","\u2728","Flare Pods","+6 flares, recharge twice as fast"],["engine","\u26A1","Hot Engines","+12% top speed"],["agile","\u{1F300}","Tight Turns","+15% turn rate"],["cool","\u2744\uFE0F","Cooled Barrels","Gun heats 40% slower"],["seeker","\u{1F9E0}","Smart Seekers","Missiles turn 35% harder"],["regen","\u{1F49A}","Field Repair","Hull regenerates 3\xD7 faster"],["scav","\u{1F985}","Scavenger","Each kill repairs 8 hull"],["salvo","\u{1F386}","Salvo","Fire two missiles at once"]],$={mode:"menu"},E=null,Ot=[],Gn=[],di=[],hi=[],ns=[],Tv=new Le("#ffd27a"),Dp=new Le("#ff6a4a"),wv=new Le("#ff9c3a"),br={},wn={x:0,y:0,l:!1,moved:!1},ui={x:0,y:0,gun:!1,ab:!1,brake:!1},mn={yaw:0,pitch:0,dir:new I(0,0,-1),locked:!1},yp={low:.0014,mid:.0022,high:.0032};addEventListener("keydown",n=>{if(!n.target.matches("input")){if(br[n.code]=!0,dt.init(),$.mode==="perk"&&/Digit[123]/.test(n.code)){Iu(+n.code.slice(5)-1);return}if($.mode==="play"||$.mode==="paused"){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.repeat)return;if(n.code==="Escape"||n.code==="KeyP"){($.mode==="play"&&!mn.locked||$.mode==="paused")&&Er();return}if($.mode!=="play")return;n.code==="Space"&&Pc(),(n.code==="KeyF"||n.code==="KeyX")&&Pu(),(n.code==="KeyV"||n.code==="KeyC")&&Ic(),n.code==="KeyT"&&Hv(),n.code==="KeyM"&&Vp()}}});addEventListener("keyup",n=>{br[n.code]=!1});addEventListener("blur",()=>{for(let n in br)br[n]=!1;wn.l=!1});addEventListener("mousemove",n=>{if(wn.x=(n.clientX/innerWidth-.5)*2,wn.y=(n.clientY/innerHeight-.5)*2,wn.moved=!0,$.mode==="play"&&Re.control==="aim"&&(mn.locked||document.pointerLockElement)){let e=yp[Re.sens]||yp.mid;mn.yaw-=n.movementX*e,mn.pitch=vt(mn.pitch-n.movementY*e*(Re.invert?-1:1),-1.45,1.45)}});ka.addEventListener("mousedown",n=>{if(dt.init(),$.mode==="play"){if(Re.control==="aim"&&!document.pointerLockElement){Xa();return}n.button===0&&(wn.l=!0),n.button===2&&Pc()}});addEventListener("mouseup",n=>{n.button===0&&(wn.l=!1)});addEventListener("contextmenu",n=>{$.mode==="play"&&n.preventDefault()});function Xa(){try{let n=ka.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>{try{ka.requestPointerLock()}catch{}})}catch{try{ka.requestPointerLock()}catch{}}}document.addEventListener("pointerlockerror",()=>{$.mode==="play"&&Re.control==="aim"&&Te("#clickfly").classList.add("on")});document.addEventListener("pointerlockchange",()=>{mn.locked=!!document.pointerLockElement,Te("#clickfly").classList.toggle("on",$.mode==="play"&&Re.control==="aim"&&!mn.locked),!mn.locked&&$.mode==="play"&&Re.control==="aim"&&Er()});var Ii=(...n)=>n.some(e=>br[e]);function Av(){let n=Re.invert?-1:1,e=((Ii("KeyS","ArrowDown")?1:0)-(Ii("KeyW","ArrowUp")?1:0))*n,t=(Ii("KeyD","ArrowRight")?1:0)-(Ii("KeyA","ArrowLeft")?1:0),i=(Ii("KeyQ")?1:0)-(Ii("KeyE")?1:0),s=e,r=t,a=i,o=!!(e||t||i);if(Nt||Re.control==="stick"){if(Nt)s+=-ui.y*n,r+=ui.x,o=!0;else if(wn.moved){let l=c=>Math.abs(c)<.06?0:(c-Math.sign(c)*.06)/.94;s+=vt(-l(wn.y)*1.9,-1,1)*n,r+=vt(l(wn.x)*1.9,-1,1),o=!0}}return{pitch:vt(s,-1,1),roll:vt(r,-1,1),yaw:a,manual:o,gun:wn.l||Ii("KeyJ","Enter")||ui.gun,ab:Ii("ShiftLeft","ShiftRight")||ui.ab,brake:Ii("KeyB")||ui.brake}}{let n=Te("#stick"),e=Te("#knob"),t=null,i=0,s=0;n.addEventListener("pointerdown",o=>{t=o.pointerId;let l=n.getBoundingClientRect();i=l.left+l.width/2,s=l.top+l.height/2,n.setPointerCapture(t),r(o),dt.init()});let r=o=>{if(o.pointerId!==t)return;let l=60,c=(o.clientX-i)/l,u=(o.clientY-s)/l,d=Math.hypot(c,u);d>1&&(c/=d,u/=d),ui.x=c,ui.y=u,e.style.transform=`translate(${c*l}px,${u*l}px)`};n.addEventListener("pointermove",r);let a=o=>{o.pointerId===t&&(t=null,ui.x=ui.y=0,e.style.transform="")};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),Tc("#touch [data-b]").forEach(o=>{let l=o.dataset.b,c=u=>d=>{d.preventDefault(),o.classList.toggle("down",u),l==="gun"||l==="ab"||l==="brake"?ui[l]=u:u&&(dt.init(),l==="msl"&&Pc(),l==="flr"&&Pu(),l==="cam"&&Ic())};o.addEventListener("pointerdown",c(!0)),o.addEventListener("pointerup",c(!1)),o.addEventListener("pointercancel",c(!1)),o.addEventListener("pointerleave",c(!1))}),Te("#tPause").onclick=()=>Er(),Te("#clickfly").onclick=()=>{Xa()}}var En=new Dt;Ke.add(En);En.visible=!1;function Rv(){En.clear();let n=fp(Re.jet,Re.paint);En.add(n),En.userData=n.userData}var tn=null,Gt=(n,e=nn())=>e.set(0,0,-1).applyQuaternion(n),Np=(n,e=nn())=>e.set(0,1,0).applyQuaternion(n),ts=(n,e=nn())=>e.set(1,0,0).applyQuaternion(n);function Cv(){E&&E.obj&&ft.remove(E.obj);let n=Ts(Re.jet,Re.paint);ft.add(n);let e=Qi[Re.jet];return{obj:n,J:e,pos:new I(-2600,700,300),q:new Ft,vel:nn(),speed:240,thr:.65,hp:e.hp,maxHp:e.hp,msl:e.missiles,mslMax:e.missiles,mslT:0,mslCd:0,side:1,flares:12,flareMax:12,flareT:0,flareCd:0,heat:0,over:!1,gunCd:0,gunSide:1,rate:nn(),alive:!0,lock:{t:null,k:0,locked:!1,tick:0},ab:!1,hitFlash:0,warnT:0,pullT:0,shake:0,camQ:new Ft,deadT:0,lastHit:0,perks:[],m:{gun:1,lock:1,reload:1,flare:1,speed:1,agile:1,heat:1,seeker:1,regen:1,scav:0,salvo:1}}}function bu(){let n=Gt(E.q);mn.pitch=Math.asin(vt(n.y,-1,1)),mn.yaw=Math.atan2(-n.x,-n.z)}function Rc(){let n=Math.cos(mn.pitch);return mn.dir.set(-Math.sin(mn.yaw)*n,Math.sin(mn.pitch),-Math.cos(mn.yaw)*n)}function Oa(n,e,t){let i=wr[Re.diff],s=$.cycle,r=!["sam","aa"].includes(n),a=n==="bomber"?Fa(!1):n==="boss"?Fa(!0):r?Ts(n==="ace"?"raptor":Sv(["viper","striker","viper"]),"red",!0):dc(n);ft.add(a),a.userData.msls.forEach(u=>u.visible=!1);let o=new Ft;t&&o.setFromRotationMatrix(new ot().lookAt(e,t,kn));let l=wc[n].hp*(1+s*.3)*(Re.diff==="easy"?.8:1),c={kind:n,air:r,obj:a,pos:e.clone(),q:o,vel:nn(),speed:n==="boss"?150:n==="bomber"?175:250,hp:l,maxHp:l,state:n==="bomber"||n==="boss"?"run":"hunt",st:0,gunCd:He(1,3),burst:0,mslT:He(6,i.msl)*(n==="ace"?.6:1),cd:He(3,7),evadeDir:nn(),dead:!1,deadT:0,spin:He(-2,2),id:Math.random(),hitT:0,wp:nn(),gunT:[0,0,0]};return a.position.copy(c.pos),a.quaternion.copy(o),Ot.push(c),c}function mc(n,e,t,i,s){let r=He(0,Math.PI*2),a=He(e,t),o=new I(n.x+Math.cos(r)*a,0,n.z+Math.sin(r)*a);return o.x=vt(o.x,-Bn+300,Bn-300),o.z=vt(o.z,-Bn+300,Bn-300),o.y=Math.max(An.height(o.x,o.z)+400,He(i,s)),o}function Up(n){let e=Math.floor((n-1)/5),t=(n-1)%5;return[{name:"DOGFIGHT",obj:"Clear the skies of enemy fighters",fighter:2+e*2+(n>1?1:0)},{name:"INTERCEPT",obj:"Bombers are heading for the base. Stop them!",bomber:1+e,fighter:1+e},{name:"STRIKE",obj:"Destroy the SAM site. Watch for flak and missiles",sam:2+e,aa:2+e,fighter:e+1},{name:"ACE SQUADRON",obj:"Elite pilots inbound. They fly better than you think",ace:1+e,fighter:2+e},{name:"BOSS",obj:"A heavy gunship is attacking. Bring it down!",boss:1,fighter:2+e,ace:e}][t]}function Pv(n){$.cycle=Math.floor((n-1)/5);let e=Up(n);$.spec=e;let t=Gt(E.q);t.y=0,t.normalize();let i=E.pos.clone().addScaledVector(t,3e3);for(let s=0;s<(e.fighter||0);s++)Oa("fighter",mc(i,0,900,700,1700),E.pos);for(let s=0;s<(e.ace||0);s++)Oa("ace",mc(i,300,1200,900,1900),E.pos);for(let s=0;s<(e.bomber||0);s++){let r=mc(new I,3900,4300,850,950);r.y=Math.max(r.y,850+s*60),Oa("bomber",r,new I(0,r.y,0))}if(e.boss){let s=mc(new I,3700,4e3,1150,1200);Oa("boss",s,new I(0,s.y,0))}if(e.sam||e.aa){let s=He(0,Math.PI*2),r=new I(Math.cos(s)*2700,0,Math.sin(s)*2700);$.zone=r;let a=o=>{let l=r.clone().add(new I(He(-380,380),0,He(-380,380)));l.y=An.height(l.x,l.z)+.5;let c=Oa(o,l);return c.obj.rotation.y=He(0,6),c.q.copy(c.obj.quaternion),c};for(let o=0;o<(e.sam||0);o++)a("sam");for(let o=0;o<(e.aa||0);o++)a("aa")}else $.zone=null}var Ac=new Ft,Is=new ot,Ru=nn(),Iv=nn(),Lv=nn(),Va=nn();function Fp(n,e,t,i=2.5){let s=Gt(n.q,Ru),r=Iv.copy(e).addScaledVector(s,-e.dot(s)),a=Lv.copy(kn).addScaledVector(r,i).normalize();Ac.setFromRotationMatrix(Is.lookAt(Va,e,a)),n.q.rotateTowards(Ac,t)}function Dv(n,e){let t=wr[Re.diff],i=E.pos.clone().sub(n.pos),s=i.length(),r=$.cycle,a=vt(t.acc+r*.08+(n.kind==="ace"?.2:0),0,1);if(n.hitT=Math.max(0,n.hitT-e),n.dead){if(!n.air){n.remove=!0;return}n.deadT+=e,n.q.multiply(new Ft().setFromEuler(new rn(-.5*e,0,n.spin*e))),n.speed=Math.min(320,n.speed+30*e),n.pos.addScaledVector(Gt(n.q),n.speed*e),n.pos.y-=(40+n.deadT*60)*e,Math.random()<.9&&(Hn.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:.6,color:[1,.55,.2],alpha:.9,spread:6,grow:1}),on.emit(n.pos.x,n.pos.y,n.pos.z,{size:10,life:4,color:[.18,.16,.15],alpha:.7,spread:4,grow:1.8,rise:4})),(n.pos.y<An.height(n.pos.x,n.pos.z)+5||n.deadT>6)&&(qa(n.pos,n.kind==="boss"?3:n.kind==="bomber"?2:1.4),n.remove=!0);return}if(!n.air)return Fv(n,e,i,s,a);if(n.kind==="bomber"||n.kind==="boss")return Nv(n,e,i,s,a);let o=Gt(n.q),l,c=n.pos.clone().addScaledVector(o,600),u=Math.min(n.pos.y-An.height(n.pos.x,n.pos.z),c.y-An.height(c.x,c.z)),d=Math.hypot(n.pos.x,n.pos.z);n.st-=e,u<280?l=o.clone().setY(0).normalize().setY(1.2).normalize():d>Bn-300?l=new I(-n.pos.x,0,-n.pos.z).normalize().setY(.1).normalize():n.state==="evade"&&n.st>0?l=n.evadeDir:(n.state="hunt",l=E.pos.clone().addScaledVector(E.vel,vt(s/1100,0,2)*a).sub(n.pos).normalize(),s<220&&o.dot(i)/s>.3&&(n.state="evade",n.st=2,n.evadeDir=new I(He(-1,1),He(.2,.6),He(-1,1)).normalize()),s>2400&&(l.y=vt(l.y,-.3,.4))),E.lock.locked&&E.lock.t===n&&n.state!=="evade"&&Math.random()<e*(n.kind==="ace"?.7:.25)*(Re.diff==="easy"?.4:1)&&(n.state="evade",n.st=He(1.6,3),n.evadeDir=ts(n.q).multiplyScalar(Math.random()<.5?1:-1).addScaledVector(kn,He(-.3,.4)).normalize()),Fp(n,l,t.turn*(1+r*.08)*(n.kind==="ace"?1.25:1)*(n.state==="evade"?1.3:1)*e);let h=(s>1600?300:245)*(n.state==="evade"?1.15:1)*(n.kind==="ace"?1.08:1);n.speed=es(n.speed,h,e*.4),Gt(n.q,o),n.vel.copy(o).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.6&&on.emit(n.pos.x,n.pos.y,n.pos.z,{size:5,life:2.5,color:[.25,.24,.23],alpha:.45,spread:2,grow:1.4}),n.gunCd-=e;let f=o.angleTo(i);if(E.alive&&s<1150&&f<.05+(1-a)*.04&&n.gunCd<=0&&(n.burst=6+Math.floor(Math.random()*6),n.gunCd=He(1.4,2.8)/(1+r*.1)),n.burst>0&&(n.bt=(n.bt||0)-e)<=0){n.bt=.07,n.burst--;let p=(1-a)*.05+.006,v=o.clone().add(new I(He(-p,p),He(-p,p),He(-p,p))).normalize();fi.add(n.pos.clone().addScaledVector(o,10),v.multiplyScalar(1050).add(n.vel),"e",4*t.dmg,Dp),s<1500&&dt.gun()}n.mslT-=e,E.alive&&n.mslT<=0&&s>600&&s<2800&&f<.45&&Cu()<2+(Re.diff==="ace"?1:0)&&(n.mslT=He(t.msl*.8,t.msl*1.3)/(1+r*.1)*(n.kind==="ace"?.7:1),Cc(n,E,"e"))}var Cu=()=>Gn.filter(n=>n.owner==="e").length;function Nv(n,e,t,i,s){let r=wr[Re.diff],a=n.kind==="boss",o=Gt(n.q),l=a?1150:880,c;n.st-=e,n.state==="run"?(c=new I(-n.pos.x,(l-n.pos.y)*.002,-n.pos.z).normalize(),Math.hypot(n.pos.x,n.pos.z)<380&&(Uv(n),n.state="egress",n.wp.copy(n.pos).addScaledVector(o.clone().setY(0).normalize(),2600),n.wp.x=vt(n.wp.x,-Bn+500,Bn-500),n.wp.z=vt(n.wp.z,-Bn+500,Bn-500),n.st=16)):(c=new I(n.wp.x-n.pos.x,(l-n.pos.y)*.002,n.wp.z-n.pos.z).normalize(),(n.st<=0||Math.hypot(n.wp.x-n.pos.x,n.wp.z-n.pos.z)<400)&&(n.state="run")),Fp(n,c,(a?.28:.34)*e,1.2),n.vel.copy(Gt(n.q,o)).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.8&&on.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:3,color:[.22,.2,.2],alpha:.5,spread:4,grow:1.6}),E.alive&&i<(a?1300:1e3)&&n.obj.userData.guns.forEach((u,d)=>{if(n.gunT[d]-=e,n.gunT[d]>0||(n.gunT[d]=He(.09,.14)*(a?.8:1),Math.random()<.35))return;let h=Ru.set(...u).applyQuaternion(n.q).add(n.pos),f=E.pos.clone().addScaledVector(E.vel,i/1e3*s),p=(1-s)*.06+.015,v=f.sub(h).normalize().add(new I(He(-p,p),He(-p,p),He(-p,p))).normalize();fi.add(h.clone(),v.multiplyScalar(1e3).add(n.vel),"e",3*r.dmg,Dp),i<900&&Math.random()<.3&&dt.gun()}),a&&(n.mslT-=e,E.alive&&n.mslT<=0&&i<3200&&Cu()<3&&(n.mslT=He(7,10),Cc(n,E,"e")))}function Uv(n){let e=n.kind==="boss",t=e?28:17;$.baseHp=Math.max(0,$.baseHp-t),pi(e?"GUNSHIP HIT THE BASE!":"BASE HIT BY BOMBER!",!0),Jv(),Wa.userData.hits.slice().sort(()=>Math.random()-.5).slice(0,e?5:3).forEach(([i,s],r)=>ns.push({t:.3+r*.35,f:()=>qa(new I(i,An.height(i,s)+4,s),1.3)})),$.baseHp<=0&&ns.push({t:2.2,f:()=>Gp("base")})}function Fv(n,e,t,i,s){let r=wr[Re.diff];if(n.cd-=e,!!E.alive){if(n.kind==="sam"&&i<3300&&n.cd<=0&&Cu()<3){n.cd=He(9,13)/(1+$.cycle*.12),n.q.setFromRotationMatrix(Is.lookAt(n.pos,E.pos,kn)),n.speed=120;let a=Cc(n,E,"e",34);a.pos.y+=6,on.emit(n.pos.x,n.pos.y+4,n.pos.z,{size:30,life:4,color:[.85,.8,.72],alpha:.6,spread:20,grow:1.5,must:!0})}if(n.kind==="aa"&&i<1800&&(n.cd<=0&&(n.cd=He(2.2,3.4),n.burst=10),n.burst>0&&(n.bt=(n.bt||0)-e)<=0)){n.bt=.09,n.burst--;let a=n.pos.clone().setY(n.pos.y+5),o=E.pos.clone().addScaledVector(E.vel,i/900*s),l=(1-s)*.05+.02,c=o.sub(a).normalize().add(new I(He(-l,l),He(-l,l),He(-l,l))).normalize();fi.add(a,c.multiplyScalar(900),"e",3.5*r.dmg,wv),i<1200&&dt.gun()}}}function Cc(n,e,t,i){let s=Gt(n.q),r=ts(n.q),a=rc();ft.add(a);let o=n.pos.clone().addScaledVector(r,(n.side=-(n.side||1))*(n.air===!1?1:3)).addScaledVector(Np(n.q),-1.2),l={mesh:a,pos:o,dir:s.clone(),speed:n.speed,target:e,owner:t,life:t==="p"?8:9,armed:.25,dmg:i};return Gn.push(l),(t==="p"||o.distanceTo(E.pos)<3e3)&&dt.launch(),t==="e"&&pi("MISSILE INBOUND",!0),l}function Pc(){if($.mode!=="play"||!E.alive)return;if(E.msl<=0){pi("NO MISSILES",!0);return}if(E.mslCd>0)return;let n=E.lock.locked?E.lock.t:null;for(let e=0;e<E.m.salvo&&E.msl>0;e++)E.msl--,Cc(E,n,"p"),$.shots++;E.mslCd=.4,Ya(),n||pi("NO LOCK \u2014 DUMBFIRE")}function Pu(){if($.mode!=="play"||!E.alive||E.flares<=0||E.flareCd>0)return;E.flares--,E.flareCd=1.2,dt.flare();let n=Gt(E.q),e=ts(E.q),t=di.length;for(let i=0;i<6;i++)di.push({pos:E.pos.clone(),vel:E.vel.clone().multiplyScalar(.6).addScaledVector(e,(i%2?1:-1)*He(30,70)).addScaledVector(kn,He(-40,10)).addScaledVector(n,-40),life:3.5});Gn.forEach(i=>{i.owner==="e"&&i.target===E&&Math.random()<.85&&(i.target=di[t+Math.floor(Math.random()*6)])})}function Ov(n){let e=ts(n.q);for(let t=0;t<4;t++)di.push({pos:n.pos.clone(),vel:n.vel.clone().multiplyScalar(.5).addScaledVector(e,(t%2?1:-1)*50).addScaledVector(kn,-20),life:3});return di[di.length-1]}function qa(n,e=1,t){for(let r=0;r<28*e;r++)Hn.emit(n.x,n.y,n.z,{size:He(12,26)*e,life:He(.5,1.1),color:[1,He(.45,.75),He(.15,.3)],alpha:1,spread:120*e,drag:3,grow:1.2});for(let r=0;r<6;r++)Hn.emit(n.x,n.y,n.z,{size:50*e,life:.25,color:[1,.9,.7],alpha:1,spread:10,grow:3,must:!0});for(let r=0;r<26*e;r++)on.emit(n.x,n.y,n.z,{size:He(14,28)*e,life:He(3,6),color:[.2,.18,.17],alpha:.65,spread:70*e,drag:1.5,grow:1.8,rise:6});for(let r=0;r<14*e;r++){let a=new I(He(-1,1),He(-.2,1),He(-1,1)).normalize().multiplyScalar(He(80,200));Hn.emit(n.x,n.y,n.z,{size:4,life:He(1,2),color:[1,.7,.3],alpha:1,vx:a.x,vy:a.y,vz:a.z,drag:.4,grow:-.2})}let i=E?n.distanceTo(E.pos):1e3;t||dt.boom(i),E&&i<600&&(E.shake=Math.max(E.shake,(1-i/600)*1.2));let s=Su[bv++%Su.length];s.l.position.copy(n),s.l.intensity=4e5*e,s.t=.6}function vp(n){!E.alive||$.mode!=="play"||(E.hp-=n,E.lastHit=$.t,E.hitFlash=Math.min(1,E.hitFlash+n/30),E.shake=Math.max(E.shake,.5),dt.damage(),E.hp<=0&&Op())}function Mp(n,e,t){if(n.dead||(n.hp-=e,n.hitT=.15,t||($.hits++,dt.hit(),Sc=.15),n.hp>0))return;if(n.dead=!0,n.spin=He(-3,3),qa(n.pos,n.kind==="boss"?2.4:n.kind==="bomber"?1.4:n.air?.8:1.2),!n.air)for(let r=0;r<20;r++)on.emit(n.pos.x,n.pos.y+5,n.pos.z,{size:He(20,40),life:He(6,10),color:[.12,.11,.1],alpha:.6,spread:20,grow:1.5,rise:12,must:!0});$.comboT>0?$.combo++:$.combo=1,$.comboT=6;let i=wc[n.kind].pts*$.combo;$.score+=i,$.kills++,$.multi=$.t-$.lastKill<4?$.multi+1:1,$.lastKill=$.t;let s=wc[n.kind].label||"BANDIT";pi(`${$.multi>=2?["","","DOUBLE KILL! ","TRIPLE KILL! ","MULTI KILL! "][Math.min(4,$.multi)]:""}${s} DOWN  +${i}${$.combo>1?"  \xD7"+$.combo:""}`),E.m.scav&&(E.hp=Math.min(E.maxHp,E.hp+8)),(n.air&&$.slowCd<=0||n.kind==="boss"||$.multi>=2)&&($.slow=n.kind==="boss"?1.4:.5,$.slowCd=7),Gn.forEach(r=>{r.target===n&&(r.target=null)})}var Sc=0;function pi(n,e){if(hi[0]&&hi[0].t===n){hi[0].life=2.6;return}hi.unshift({t:n,life:2.6,warn:e}),hi=hi.slice(0,4)}var Ba=new Ft,Bv=new rn;function zv(n){let e=Av(),t=E.J,i=t.agility*E.m.agile,s=Gt(E.q),r=ts(E.q),a=Math.asin(vt(r.y,-1,1)),o=Math.abs(s.y)>.8,l=e.pitch,c=e.roll,u=e.yaw;if(Re.control==="aim"&&!Nt)if(e.manual)bu();else{let A=Rc(),w=A.clone().applyQuaternion(Ba.copy(E.q).invert()),_=Math.acos(vt(-w.z,-1,1));if(w.z>.2)l=1,c=Math.sign(w.x||1);else{l=vt(w.y*5,-1,1);let S=vt(w.x*5,-1,1),L=vt(r.y*2.2,-1,1),C=vt(_/.2,0,1);c=es(L,S,C),u=-vt(w.x*3,-1,1)*.6}}E.pullUp=!1;let d=E.pos.clone().addScaledVector(E.vel,2.2),h=An.height(d.x,d.z),f=An.height(E.pos.x,E.pos.z);(d.y<h+60||E.pos.y-f<70)&&E.vel.y<5&&(E.pullUp=!0,Re.assist&&(l=1,c=vt(r.y*3,-1,1)));let p=new I(l*1.3*i,u*.5,c*2.7*i);Re.assist&&Re.control!=="aim"&&Math.abs(c)<.05&&!o&&Math.abs(a)<1.3&&(p.z+=a*1.4),E.input={...e,pitch:l,roll:c},E.rate.lerp(p,Math.min(1,n*7)),Ba.setFromEuler(Bv.set(E.rate.x*n,E.rate.y*n,-E.rate.z*n,"XYZ")),E.q.multiply(Ba),o||(Ba.setFromAxisAngle(kn,-Math.sin(a)*.38*i*n*vt(E.speed/250,.6,1.2)),E.q.premultiply(Ba));let v=Math.hypot(E.pos.x,E.pos.z);if(E.out=v>Bn,v>Bn+400){let A=new I(-E.pos.x,0,-E.pos.z).normalize();E.q.rotateTowards(Ac.setFromRotationMatrix(Is.lookAt(Va,A,kn)),.9*n),bu()}E.pos.y>4500&&E.q.rotateTowards(Ac.setFromRotationMatrix(Is.lookAt(Va,s.clone().setY(-.4).normalize(),kn)),.5*n),E.q.normalize(),Gt(E.q,s),E.ab=e.ab;let m=e.ab?1:e.brake?.15:.62;E.thr=es(E.thr,m,n*1.6);let g=330*t.speed*E.m.speed*(e.ab?1.28:1),x=es(150,g,E.thr)*(e.brake?.8:1);E.speed+=(x-E.speed)*.45*n-s.y*60*n,e.brake&&(E.speed-=40*n),E.speed=vt(E.speed,95,540),E.vel.copy(s).multiplyScalar(E.speed),E.pos.addScaledVector(E.vel,n);let M=An.height(E.pos.x,E.pos.z),y=E.pos.y-M;if(E.alt=y,y<4){E.pos.y=M+4,Op(!0);return}if(E.gunCd-=n,E.mslCd-=n,E.flareCd-=n,E.heat=Math.max(0,E.heat-n*.45),E.over&&E.heat<.3&&(E.over=!1),e.gun&&!E.over&&E.gunCd<=0){E.gunCd=1/16,E.heat+=.032*E.m.heat,E.heat>=1&&(E.over=!0,pi("GUN OVERHEAT",!0)),E.gunSide*=-1;let A=.0035,w=s.clone().add(new I(He(-A,A),He(-A,A),He(-A,A))).normalize();E.lead&&s.angleTo(E.lead.clone().sub(E.pos))<.085&&w.lerp(E.lead.clone().sub(E.pos).normalize(),.9).normalize(),fi.add(E.pos.clone().addScaledVector(s,9).addScaledVector(ts(E.q),E.gunSide*1.2),w.multiplyScalar(1250).add(E.vel),"p",9*t.gun*E.m.gun,Tv),$.shots++,dt.gun()}if(E.mslT+=n*E.m.reload,E.mslT>6&&E.msl<E.mslMax&&(E.mslT=0,E.msl++,Ya()),E.flareT+=n*E.m.flare,E.flareT>9&&E.flares<E.flareMax&&(E.flareT=0,E.flares++),$.t-E.lastHit>5&&E.hp<E.maxHp&&(E.hp=Math.min(E.maxHp,E.hp+n*1.2*E.m.regen)),E.rate.length()>1.1&&E.speed>200){let A=t.span;[-1,1].forEach(w=>{let _=E.pos.clone().addScaledVector(ts(E.q),w*(A+1)).addScaledVector(s,t.len*.2);on.emit(_.x,_.y,_.z,{size:1.6,life:.7,color:[1,1,1],alpha:.45,grow:1.2,drag:0})})}E.hp<E.maxHp*.4&&Math.random()<.7&&on.emit(E.pos.x,E.pos.y,E.pos.z,{size:4,life:2,color:[.2,.2,.2],alpha:.5,spread:2,grow:1.6})}function Op(n){E.alive&&(E.alive=!1,E.hp=0,qa(E.pos,2),E.obj.visible=!1,E.deadT=0,dt.silence(),pi(n?"CRASHED":"SHOT DOWN",!0),$.reason=n?"crash":"shot",$.view==="first"&&Lu("third",!0))}function kv(n){let e=E.lock,t=Re.control==="aim"&&!Nt?Rc().clone():Gt(E.q),i=null,s=.5;if(e.t&&!e.t.dead&&!e.t.remove){let o=e.t.pos.clone().sub(E.pos),l=t.angleTo(o);if(l<.6&&o.length()<3600){i=e.t,s=-1;for(let c of Ot){if(c===e.t||c.dead)continue;let u=c.pos.clone().sub(E.pos),d=t.angleTo(u);if(u.length()<3600&&d<.12&&d<l*.4){i=c;break}}}}if(!i)for(let o of Ot){if(o.dead)continue;let l=o.pos.clone().sub(E.pos),c=l.length(),u=t.angleTo(l);c<3600&&u<s&&(s=u,i=o)}if(i!==e.t&&(e.t=i,e.k=0,e.locked=!1),e.t){let o=e.locked;e.k+=n*E.m.lock,e.locked=e.k>.7,e.tick-=n,e.tick<=0&&(e.tick=e.locked?.5:.16,e.locked?dt.locked(!0):dt.lockTick()),!o&&e.locked&&pi("LOCKED \u2014 FIRE! [SPACE]")}E.lead=null;let r=1e9,a=Gt(E.q);for(let o of Ot){if(o.dead)continue;let l=o.pos.clone().sub(E.pos),c=l.length();c>1600||a.angleTo(l)>.5||c<r&&(r=c,E.lead=o.pos.clone().addScaledVector(o.vel.clone().sub(E.vel),c/1250),E.leadT=o)}}function Hv(){let n=Gt(E.q),e=Ot.filter(i=>!i.dead&&n.angleTo(i.pos.clone().sub(E.pos))<.6&&i.pos.distanceTo(E.pos)<3600);if(!e.length)return;let t=e.indexOf(E.lock.t);E.lock.t=e[(t+1)%e.length],E.lock.k=0,E.lock.locked=!1,dt.click()}var gc=nn(),Sp=nn();function bp(n,e,t){gc.subVectors(t,e);let i=gc.lengthSq(),s=i?Sp.subVectors(n,e).dot(gc)/i:0;return s=vt(s,0,1),Sp.copy(e).addScaledVector(gc,s).distanceTo(n)}var Ep=n=>n.kind==="boss"?34:n.kind==="bomber"?26:n.air?16:10;function Bp(n){$.t+=n,E.alive?(zv(n),kv(n)):E.deadT+=n,Ot.forEach(t=>Dv(t,n));let e=nn();fi.list=fi.list.filter(t=>{if(t.life-=n,t.life<=0)return!1;if(e.copy(t.p).addScaledVector(t.v,n),t.owner==="p"){for(let i of Ot)if(!i.dead&&Math.abs(i.pos.x-t.p.x)<260&&bp(i.pos,t.p,e)<Ep(i))return Mp(i,t.dmg),Hn.emit(e.x,e.y,e.z,{size:6,life:.25,color:[1,.8,.4],alpha:1,spread:20}),!1}else if(E.alive&&bp(E.pos,t.p,e)<9)return vp(t.dmg),!1;return e.y<An.height(e.x,e.z)?(on.emit(e.x,e.y+2,e.z,{size:6,life:1.4,color:[.82,.66,.45],alpha:.6,spread:6,grow:1.5,vy:8}),!1):(t.p.copy(e),!0)}),Gn=Gn.filter(t=>{t.life-=n,t.armed-=n,t.speed=Math.min(t.owner==="p"?780:560,t.speed+420*n);let i=t.target,s=null;if(i&&i.pos&&!i.remove&&(i.life===void 0||i.life>0)&&(s=i.pos.clone(),i.vel&&s.addScaledVector(i.vel,vt(s.distanceTo(t.pos)/t.speed,0,2)*.6)),s){let o=s.sub(t.pos).normalize(),l=t.dir.angleTo(o),c=(t.owner==="p"?2.7*E.m.seeker:1.5)*n;l>1e-4&&t.dir.lerp(o,Math.min(1,c/l)).normalize()}t.owner==="p"&&i&&i.obj&&i.air&&!i.dead&&!i.flared&&t.pos.distanceTo(i.pos)<900&&i.state==="evade"&&Math.random()<n*.6&&(t.target=Ov(i),i.flared=!0),t.pos.addScaledVector(t.dir,t.speed*n),t.mesh.position.copy(t.pos),t.mesh.quaternion.setFromRotationMatrix(Is.lookAt(Va,t.dir,kn));let r=Ru.copy(t.pos).addScaledVector(t.dir,-2);Hn.emit(r.x,r.y,r.z,{size:3.2,life:.12,color:[1,.75,.4],alpha:1,grow:-2}),on.emit(r.x,r.y,r.z,{size:2.6,life:3.2,color:[.9,.9,.88],alpha:.5,spread:1,grow:1.5,drag:1});let a=t.life<=0||t.pos.y<An.height(t.pos.x,t.pos.z);if(!a&&t.armed<=0){if(t.owner==="p"){for(let o of Ot)if(!o.dead&&o.pos.distanceTo(t.pos)<Ep(o)+10){Mp(o,o.kind==="boss"?320:o.kind==="bomber"?260:999,!0),a=!0;break}}else E.alive&&E.pos.distanceTo(t.pos)<20&&(vp((t.dmg||42)*wr[Re.diff].dmg),a=!0);!a&&i&&i.life!==void 0&&i.pos.distanceTo(t.pos)<15&&(a=!0)}return a?(qa(t.pos,.6),ft.remove(t.mesh),!1):!0}),di=di.filter(t=>(t.life-=n,t.vel.y-=30*n,t.vel.multiplyScalar(Math.exp(-.6*n)),t.pos.addScaledVector(t.vel,n),Hn.emit(t.pos.x,t.pos.y,t.pos.z,{size:7,life:.15,color:[1,.9,.7],alpha:1,grow:-1}),on.emit(t.pos.x,t.pos.y,t.pos.z,{size:3,life:1.6,color:[.95,.95,.95],alpha:.35,grow:1.4}),t.life>0)),Ot=Ot.filter(t=>t.remove?(ft.remove(t.obj),E.lock.t===t&&(E.lock.t=null),!1):!0),ns=ns.filter(t=>(t.t-=n,t.t<=0?(t.f(),!1):!0)),$.comboT-=n,E.alive&&!Ot.length&&$.mode==="play"&&!$.clearing&&Gv(),!E.alive&&E.deadT>3.2&&$.mode==="play"&&Gp($.reason)}function Gv(){$.clearing=!0;let n=250*$.wave;$.score+=n,Hp(`WAVE ${$.wave} CLEAR`,`+${n} bonus`),dt.win(),E.hp=Math.min(E.maxHp,E.hp+E.maxHp*.35),E.msl=E.mslMax,E.flares=E.flareMax,Ya(),$.baseHp=Math.min(100,$.baseHp+10),ns.push({t:2.4,f:Vv})}function zp(){$.wave++,$.clearing=!1,Pv($.wave);let n=$.spec;Hp(`WAVE ${$.wave}: ${n.name}`,n.obj),Te("#obj").textContent=n.obj}var Eu=[];function Vv(){if(!E.alive)return;$.mode="perk",document.pointerLockElement&&document.exitPointerLock(),dt.silence(),document.body.classList.remove("playing"),Eu=Ev.filter(e=>e[0]!=="salvo"||E.m.salvo<2).sort(()=>Math.random()-.5).slice(0,3),Te("#perkCards").innerHTML=Eu.map((e,t)=>`<button class="pcard" data-i="${t}" style="--d:${t*.08}s"><i>${e[1]}</i><b>${e[2]}</b><span>${e[3]}</span><small>${t+1}</small></button>`).join(""),Te("#perkWave").textContent=`Wave ${$.wave+1}: ${Up($.wave+1).name}`,Te("#perk").classList.add("on")}function Iu(n){let e=Eu[n];if(!e||$.mode!=="perk")return;dt.click();let t=E.m;({gun:()=>t.gun*=1.3,lock:()=>t.lock*=1.8,pylon:()=>{E.mslMax+=3,E.msl=E.mslMax,t.reload*=1.4},hull:()=>{E.maxHp+=35,E.hp=E.maxHp},flare:()=>{E.flareMax+=6,E.flares=E.flareMax,t.flare*=2},engine:()=>t.speed*=1.12,agile:()=>t.agile*=1.15,cool:()=>t.heat*=.6,seeker:()=>t.seeker*=1.35,regen:()=>t.regen*=3,scav:()=>t.scav=1,salvo:()=>t.salvo=2})[e[0]](),E.perks.push(e),Ya(),Te("#perks").innerHTML=E.perks.map(i=>`<i title="${i[2]}">${i[1]}</i>`).join(""),Te("#perk").classList.remove("on"),$.mode="play",document.body.classList.add("playing"),Re.control==="aim"&&!Nt&&Xa(),pi(e[2].toUpperCase()+" EQUIPPED"),ns.push({t:1.5,f:zp})}Te("#perkCards").onclick=n=>{let e=n.target.closest(".pcard");e&&Iu(+e.dataset.i)};function Lu(n,e){$.view=n,En.visible=n==="first"&&E&&E.alive,E&&(E.obj.visible=n!=="first"&&E.alive),e||(Re.view=n,Mc())}function Ic(){Lu($.view==="first"?"third":"first"),pi($.view==="first"?"COCKPIT VIEW":"CHASE VIEW")}function Wv(n){if(window.__camFreeze)return;if($.mode==="menu"){innerWidth<=760?Ke.setViewOffset(innerWidth,innerHeight,0,innerHeight*.26,innerWidth,innerHeight):Ke.clearViewOffset();let i=performance.now()/1e3*.12,s=tn.position;Ke.position.set(s.x+Math.sin(i)*34,s.y+7+Math.sin(i*.7)*3,s.z+Math.cos(i)*34),Ke.up.set(0,1,0),Ke.lookAt(s.x+(innerWidth>900?-6:0),s.y,s.z),Ke.fov=innerWidth<=760?58:45,Ke.updateProjectionMatrix();return}if(Ke.view&&Ke.clearViewOffset(),!E.alive){let i=E.deadT*.4;Ke.position.lerp(E.pos.clone().add(new I(Math.sin(i)*160,70,Math.cos(i)*160)),n*2),Ke.up.set(0,1,0),Ke.lookAt(E.pos);return}let e=E.shake*($.view==="first"?.25:.9);E.shake*=Math.exp(-n*4);let t=vt(1.1/Ke.aspect,1,1.7);if($.view==="first")Ke.position.copy(E.pos).add(new I(0,En.userData.eyeY??1.25,En.userData.eyeZ??-E.J.len*.26).applyQuaternion(E.q)),Ke.quaternion.copy(E.q),Ke.fov=es(Ke.fov,74+(E.ab?6:0),n*3);else if(Re.control==="aim"&&!Nt){let i=Rc();E.camQ.setFromRotationMatrix(Is.lookAt(Va,i,kn));let s=new I(0,(4.5+E.J.len*.12)*t,(19+E.J.len*.6)*t).applyQuaternion(E.camQ);Ke.position.copy(E.pos).add(s),Ke.quaternion.copy(E.camQ),Ke.rotateX(-.05),Ke.fov=es(Ke.fov,64+vt((E.speed-250)*.05,0,12)+(E.ab?4:0),n*3)}else{E.camQ.slerp(E.q,Math.min(1,n*4.5));let i=new I(0,(5+E.J.len*.12)*t,(20+E.J.len*.55)*t).applyQuaternion(E.camQ);Ke.position.copy(E.pos).add(i),Ke.quaternion.copy(E.camQ),Ke.rotateX(-.09),Ke.fov=es(Ke.fov,66+vt((E.speed-250)*.05,0,12)+(E.ab?4:0),n*3)}e>.01&&Ke.position.add(new I(He(-1,1),He(-1,1),He(-1,1)).multiplyScalar(e)),Ke.updateProjectionMatrix()}var Rs=Te("#hud"),kp=Rs.getContext("2d"),bn=0,$t=0,Ha=1,Cs="#3dff8f",zn="#ff4f5e",Sr="#ffcf4a",Tu="#7fd0ff",_c=nn(),Xv=new Ft;function Mr(n){return _c.copy(n).project(Ke),{x:(_c.x+1)/2*bn,y:(1-_c.y)/2*$t,front:_c.z<1}}function Tp(n,e,t,i,s=1){let r=e.clone().sub(Ke.position).applyQuaternion(Xv.copy(Ke.quaternion).invert()),a=Math.atan2(-r.y,r.x),o=bn/2,l=$t/2;n.save(),n.translate(o+Math.cos(a)*i,l+Math.sin(a)*i),n.rotate(a),n.fillStyle=t,n.beginPath(),n.moveTo(12*s,0),n.lineTo(-8*s,-8*s),n.lineTo(-8*s,8*s),n.closePath(),n.fill(),n.restore()}function qv(n,e){let t=kp;if(t.setTransform(Ha,0,0,Ha,0,0),t.clearRect(0,0,bn,$t),$.mode!=="play"&&$.mode!=="paused")return;t.lineWidth=2,t.font='600 12px "Share Tech Mono",monospace',t.textBaseline="middle";let i=Gt(E.q),s=bn/2,r=$t/2,a=Math.min(bn,$t);if(E.alive){let o=Mr(E.pos.clone().addScaledVector(i,700));if(o.front){t.strokeStyle=E.over?zn:Cs,t.beginPath(),t.arc(o.x,o.y,16,0,7),t.stroke(),t.beginPath();for(let[h,f]of[[-28,-20],[20,28]])t.moveTo(o.x+h,o.y),t.lineTo(o.x+f,o.y),t.moveTo(o.x,o.y+h),t.lineTo(o.x,o.y+f);t.stroke(),t.fillStyle=t.strokeStyle,t.fillRect(o.x-1.5,o.y-1.5,3,3),Sc>0&&(t.strokeStyle="#fff",t.beginPath(),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,f])=>{t.moveTo(o.x+h*8,o.y+f*8),t.lineTo(o.x+h*15,o.y+f*15)}),t.stroke())}if(Re.control==="aim"&&!Nt){let h=Mr(E.pos.clone().addScaledVector(Rc(),2e3));h.front&&(t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=1.5,t.beginPath(),t.arc(h.x,h.y,7,0,7),t.stroke(),t.fillStyle="#fff",t.fillRect(h.x-1,h.y-1,2,2),o.front&&Math.hypot(h.x-o.x,h.y-o.y)>24&&(t.strokeStyle="rgba(255,255,255,.25)",t.setLineDash([2,6]),t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(o.x,o.y),t.stroke(),t.setLineDash([])))}else if(Re.control==="stick"&&!Nt&&wn.moved){let h=s+wn.x*bn/2,f=r+wn.y*$t/2;t.strokeStyle="rgba(61,255,143,.5)",t.beginPath(),t.arc(h,f,6,0,7),t.stroke()}if($.view==="first"){let h=ts(E.q),f=Math.atan2(-h.y,Np(E.q).y),p=Math.asin(vt(i.y,-1,1)),v=$t/(Ke.fov*Math.PI/180);t.save(),t.translate(s,r),t.rotate(f),t.strokeStyle="rgba(61,255,143,.75)",t.fillStyle="rgba(61,255,143,.75)",t.textAlign="left",t.lineWidth=1.5;for(let m=-60;m<=60;m+=10){let g=(p*180/Math.PI-m)*v*Math.PI/180;if(Math.abs(g)>$t*.32)continue;let x=m===0?260:90;m<0&&t.setLineDash([8,6]),t.beginPath(),t.moveTo(-x,g),t.lineTo(-40,g),t.moveTo(40,g),t.lineTo(x,g),t.stroke(),t.setLineDash([]),m&&t.fillText(Math.abs(m),x+6,g)}t.restore()}let l=Wa.userData.center,c=Mr(l);if(c.front&&c.x>0&&c.x<bn&&c.y>0&&c.y<$t&&(t.strokeStyle=Tu,t.lineWidth=1.5,t.strokeRect(c.x-10,c.y-10,20,20),t.fillStyle=Tu,t.textAlign="center",t.fillText("BASE",c.x,c.y-18)),Ot.forEach(h=>{if(h.dead)return;let f=Mr(h.pos),p=h.pos.distanceTo(E.pos),v=E.lock,m=v.t===h,g=h.kind==="bomber"||h.kind==="boss";if(!f.front||f.x<0||f.y<0||f.x>bn||f.y>$t){Tp(t,h.pos,m?zn:g?Sr:"rgba(255,120,100,.8)",a*.42,g?1.4:1);return}let x=vt(1600/p*14*(g?1.8:1),12,g?60:36);if(t.strokeStyle=m?v.locked?zn:Sr:h.air?"rgba(255,255,255,.85)":"rgba(255,190,120,.9)",t.lineWidth=m?2.5:1.6,m&&!v.locked){t.save(),t.translate(f.x,f.y),t.rotate(e*4);let A=1.6-Math.min(1,v.k/.7)*.6;t.strokeRect(-x*A,-x*A,x*2*A,x*2*A),t.restore()}else m&&(t.beginPath(),t.moveTo(f.x,f.y-x*1.3),t.lineTo(f.x+x*1.3,f.y),t.lineTo(f.x,f.y+x*1.3),t.lineTo(f.x-x*1.3,f.y),t.closePath(),t.stroke(),t.fillStyle=zn,t.textAlign="center",t.fillText("LOCK",f.x,f.y-x*1.3-12));if(h.air){t.beginPath();for(let[A,w]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.moveTo(f.x+A*x,f.y+w*x*.45),t.lineTo(f.x+A*x,f.y+w*x),t.lineTo(f.x+A*x*.45,f.y+w*x);t.stroke()}else t.beginPath(),t.moveTo(f.x,f.y-x),t.lineTo(f.x+x,f.y),t.lineTo(f.x,f.y+x),t.lineTo(f.x-x,f.y),t.closePath(),t.stroke();h.hitT>0&&(t.fillStyle="rgba(255,255,255,.5)",t.fillRect(f.x-x,f.y-x,x*2,x*2)),t.fillStyle="rgba(255,255,255,.85)",t.textAlign="left",t.fillText((p/1e3).toFixed(1)+"km",f.x+x+6,f.y+x-4);let M=wc[h.kind].label;M&&(t.fillStyle=g||h.kind==="ace"?Sr:"rgba(255,190,120,.95)",t.fillText(M,f.x+x+6,f.y-x+6));let y=Math.max(0,h.hp)/h.maxHp;t.fillStyle="rgba(0,0,0,.4)",t.fillRect(f.x-x,f.y+x+5,x*2,3),t.fillStyle=y>.5?Cs:y>.25?Sr:zn,t.fillRect(f.x-x,f.y+x+5,x*2*y,3)}),E.lead){let h=Mr(E.lead);h.front&&(t.strokeStyle=Cs,t.lineWidth=2,t.beginPath(),t.arc(h.x,h.y,9,0,7),t.stroke(),t.beginPath(),t.arc(h.x,h.y,2,0,7),t.fillStyle=Cs,t.fill())}let u=Gn.filter(h=>h.owner==="e"&&h.target===E);u.length&&(E.warnT-=n,E.warnT<=0&&(E.warnT=.55,dt.warn()),Math.floor(e*4)%2&&(t.fillStyle=zn,t.font='700 22px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Nt?"\u26A0 MISSILE \u2014 HIT FLR":"\u26A0 MISSILE \u2014 PRESS F FOR FLARES",s,$t*.26)),u.forEach(h=>{let f=Mr(h.pos);f.front&&f.x>0&&f.x<bn&&f.y>0&&f.y<$t?(t.strokeStyle=zn,t.lineWidth=2,t.beginPath(),t.arc(f.x,f.y,14,0,7),t.stroke()):Tp(t,h.pos,zn,a*.3,1.4)})),E.pullUp&&(E.pullT-=n,E.pullT<=0&&(E.pullT=.7,dt.pullup()),Math.floor(e*3)%2&&(t.fillStyle=zn,t.font='700 26px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Re.assist?"AUTO PULL-UP":"PULL UP",s,$t*.68))),E.out&&(t.fillStyle=Sr,t.font='700 18px "Orbitron",sans-serif',t.textAlign="center",t.fillText("LEAVING COMBAT AREA \u2014 TURN BACK",s,$t*.2)),t.font='600 12px "Share Tech Mono",monospace',t.lineWidth=1.5;let d=Math.min(340,bn*.5-92);wp(t,s-d,r,Math.round(E.speed*1.94),"KTS",-1),wp(t,s+d,r,Math.round(E.pos.y*3.28),"ALT",1,`R ${Math.round(E.alt*3.28)}`),(!Nt||bn>700)&&Yv(t,s,74)}if(t.textAlign="center",hi.forEach((o,l)=>{o.life-=n||.016,!(o.life<=0)&&(t.globalAlpha=Math.min(1,o.life*2),t.fillStyle=o.warn?zn:"#fff",t.font=`700 ${l?15:20}px "Orbitron",sans-serif`,t.fillText(o.t,s,$t*.36-l*24))}),t.globalAlpha=1,hi=hi.filter(o=>o.life>0),E.hitFlash>0){E.hitFlash=Math.max(0,E.hitFlash-n*1.4);let o=t.createRadialGradient(s,r,a*.3,s,r,a*.8);o.addColorStop(0,"rgba(255,40,40,0)"),o.addColorStop(1,`rgba(255,40,40,${E.hitFlash*.55})`),t.fillStyle=o,t.fillRect(0,0,bn,$t)}$.slow>0&&(t.fillStyle="rgba(255,255,255,.04)",t.fillRect(0,0,bn,$t)),Sc=Math.max(0,Sc-n),Zv(t),$v()}function wp(n,e,t,i,s,r,a){n.save(),n.translate(e,t),n.strokeStyle="rgba(61,255,143,.55)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign=r<0?"right":"left",n.beginPath(),n.rect(r<0?-66:0,-220/2,66,220),n.clip();let c=s==="ALT"?500:50,u=44;for(let h=Math.floor(i/c)-3;h<=Math.floor(i/c)+3;h++){let f=(i-h*c)/c*u;h<0||(n.beginPath(),n.moveTo(0,f),n.lineTo(r*12,f),n.stroke(),n.fillText(h*c,r*16,f))}n.restore(),n.save(),n.translate(e,t),n.fillStyle="rgba(8,10,8,.75)",n.strokeStyle=Cs,n.lineWidth=1.5;let d=r<0?-76:0;n.fillRect(d,-14,76,28),n.strokeRect(d,-14,76,28),n.fillStyle="#fff",n.font='700 15px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(i,d+76/2,0),n.fillStyle=Cs,n.font='600 10px "Share Tech Mono",monospace',n.fillText(s,d+76/2,-220/2-12),a&&n.fillText(a,d+76/2,220/2+12),n.restore()}function Yv(n,e,t){let i=Gt(E.q),s=(Math.atan2(i.x,-i.z)*180/Math.PI+360)%360,r=300,a=4;n.save(),n.translate(e,t),n.beginPath(),n.rect(-r/2,-16,r,40),n.clip(),n.strokeStyle="rgba(61,255,143,.6)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign="center",n.lineWidth=1.5;for(let o=Math.floor((s-40)/5)*5;o<=s+40;o+=5){let l=(o-s)*a,c=(o+360)%360;n.beginPath(),n.moveTo(l,4),n.lineTo(l,c%10?9:13),n.stroke(),c%30===0&&n.fillText({0:"N",90:"E",180:"S",270:"W"}[c]||String(c/10).padStart(2,"0"),l,-6)}n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(e,t+15),n.lineTo(e-6,t+24),n.lineTo(e+6,t+24),n.fill(),n.font='700 12px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(String(Math.round(s)).padStart(3,"0")+"\xB0",e,t+34)}function Zv(n){let e=Nt?52:74,t=bn-e-18,i=Nt?e+70:$t-e-18,s=5e3,r=Gt(E.q),a=Math.atan2(r.x,-r.z);n.save(),n.translate(t,i),n.fillStyle="rgba(8,12,8,.62)",n.beginPath(),n.arc(0,0,e,0,7),n.fill(),n.strokeStyle="rgba(61,255,143,.35)",n.lineWidth=1,[1,.66,.33].forEach(d=>{n.beginPath(),n.arc(0,0,e*d,0,7),n.stroke()}),n.beginPath(),n.moveTo(-e,0),n.lineTo(e,0),n.moveTo(0,-e),n.lineTo(0,e),n.stroke();let o=performance.now()/1e3*2%(Math.PI*2);if(n.createConicGradient){let d=n.createConicGradient(o-.6,0,0);d.addColorStop(0,"rgba(61,255,143,0)"),d.addColorStop(.1,"rgba(61,255,143,.22)"),d.addColorStop(.1001,"rgba(61,255,143,0)"),n.fillStyle=d,n.beginPath(),n.arc(0,0,e,0,7),n.fill()}let l=d=>{let h=d.x-E.pos.x,f=d.z-E.pos.z,p=Math.atan2(h,-f)-a,v=Math.min(1,Math.hypot(h,f)/s)*e;return[Math.sin(p)*v,-Math.cos(p)*v]},[c,u]=l(Wa.userData.center);n.fillStyle=Tu,n.fillRect(c-4,u-4,8,8),Ot.forEach(d=>{if(d.dead)return;let[h,f]=l(d.pos);n.fillStyle=d===E.lock.t?zn:d.air?"#ff8a6a":"#ffb070",d.air?(n.beginPath(),n.arc(h,f,d.kind==="boss"||d.kind==="bomber"?5.5:3.5,0,7),n.fill()):n.fillRect(h-3,f-3,6,6)}),Gn.forEach(d=>{let[h,f]=l(d.pos);n.fillStyle=d.owner==="e"?zn:Sr,n.beginPath(),n.arc(h,f,2,0,7),n.fill()}),n.fillStyle=Cs,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,6),n.lineTo(0,3),n.lineTo(-5,6),n.closePath(),n.fill(),n.restore()}var Ap=0;function $v(){let n=performance.now();if(n-Ap<120)return;Ap=n,Te("#sScore").textContent=$.score.toLocaleString(),Te("#sWave").textContent=$.wave,Te("#sLeft").textContent=Ot.filter(t=>!t.dead).length,Te("#sCombo").textContent=$.combo>1&&$.comboT>0?"\xD7"+$.combo:"";let e=Math.max(0,E.hp/E.maxHp);Te("#hpBar").style.width=e*100+"%",Te("#hpBar").style.background=e>.5?"var(--acc)":e>.25?"#ffcf4a":"#ff4f5e",Te("#hpTxt").textContent=Math.round(e*100)+"%",Te("#heat").style.width=E.heat*100+"%",Te("#heat").style.background=E.over?"#ff4f5e":E.heat>.7?"#ffcf4a":"var(--acc)",Te("#flr").textContent=E.flares,Te("#thr").style.height=E.thr*100+"%",Te("#thr").classList.toggle("ab",!!E.ab),Te("#baseBar").style.width=$.baseHp+"%",Te("#baseBar").style.background=$.baseHp>50?"#7fd0ff":$.baseHp>25?"#ffcf4a":"#ff4f5e",Te("#baseTxt").textContent=Math.round($.baseHp)+"%"}function Ya(){Te("#msl").innerHTML=Array.from({length:E.mslMax},(n,e)=>`<i class="${e<E.msl?"on":""}"></i>`).join(""),E.obj.userData.msls.forEach((n,e)=>n.visible=e<Math.min(E.msl,E.obj.userData.msls.length)),(En.userData.msls||[]).forEach((n,e)=>n.visible=e<Math.min(E.msl,En.userData.msls.length))}function Jv(){let n=Te("#baseWrap");n.classList.remove("hit"),n.offsetWidth,n.classList.add("hit")}function Kv(n){if(!En.visible||(n*10|0)%2)return;let[e,t]=En.userData.mfds,i=e.g;i.fillStyle="#071007",i.fillRect(0,0,128,96),i.strokeStyle="#3f7a2a",i.beginPath(),i.arc(64,54,38,0,7),i.stroke(),i.fillStyle="#3dff8f",i.font="10px monospace",i.fillText("RDR",6,12);let s=Gt(E.q),r=Math.atan2(s.x,-s.z);Ot.forEach(a=>{if(a.dead)return;let o=a.pos.x-E.pos.x,l=a.pos.z-E.pos.z,c=Math.atan2(o,-l)-r,u=Math.min(1,Math.hypot(o,l)/4500)*38;i.fillStyle="#ff6a4a",i.fillRect(64+Math.sin(c)*u-2,54-Math.cos(c)*u-2,4,4)}),e.t.needsUpdate=!0,i=t.g,i.fillStyle="#071007",i.fillRect(0,0,128,96),i.fillStyle="#3dff8f",i.font="11px monospace",i.fillText("SMS",6,12),i.fillText(`MSL ${E.msl}/${E.mslMax}`,10,34),i.fillText(`FLR ${E.flares}`,10,50),i.fillText(`HULL ${Math.round(E.hp/E.maxHp*100)}%`,10,66),i.fillStyle=E.over?"#ff4f5e":"#3dff8f",i.fillRect(10,76,108*E.heat,6),t.t.needsUpdate=!0,En.userData.stick.rotation.z=-(E.input?.roll||0)*.25,En.userData.stick.rotation.x=.3+(E.input?.pitch||0)*.2}function Hp(n,e){let t=Te("#banner");t.innerHTML=`<b>${n}</b><span>${e||""}</span>`,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}var jv=["Move the mouse to aim. Your jet flies toward the white circle.","Hold LEFT CLICK to fire guns. Lead targets with the green pipper.","Keep a bandit near your aim until it says LOCK, then SPACE or RIGHT CLICK fires a missile.","Missile inbound? Press F to drop flares.","SHIFT is afterburner. V switches to the cockpit.","Defend the base in the middle of the map when bombers come."],Qv=["Use the stick on the left to fly.","Hold GUN to shoot. Lead targets with the green pipper.","Keep a bandit in front until it says LOCK, then tap MSL.","Missile inbound? Tap FLR for flares.","Defend the base in the middle when bombers come."],wu=0,bc=0;function eM(n){if(!$.tips||(bc-=n,bc>0))return;let e=Nt||Re.control==="stick"?Qv:jv;if(wu>=e.length){$.tips=!1,Te("#tip").classList.remove("on"),Ps.set("jkstrike-tut",1);return}Te("#tip").textContent=e[wu++],Te("#tip").classList.remove("on"),Te("#tip").offsetWidth,Te("#tip").classList.add("on"),bc=6}function Lc(){Rv(),dt.init(),tn&&(ft.remove(tn),tn=null),Ot.forEach(n=>ft.remove(n.obj)),Gn.forEach(n=>ft.remove(n.mesh)),Ot=[],Gn=[],di=[],fi.list=[],on.clear(),Hn.clear(),Tr.clear(),hi=[],ns=[],E=Cv(),E.q.setFromRotationMatrix(Is.lookAt(E.pos,new I(0,800,0),kn)),E.camQ.copy(E.q),bu(),$={mode:"play",wave:0,score:0,kills:0,shots:0,hits:0,combo:0,comboT:0,view:Re.view,t:0,baseHp:100,cycle:0,slow:0,slowCd:0,multi:0,lastKill:-9,clearing:!1,tips:!Ps.get("jkstrike-tut",0)},Lu(Re.view,!0),Ya(),Te("#perks").innerHTML="",zp(),wu=0,bc=1.5,Tc(".screen").forEach(n=>n.classList.remove("on")),Te("#play").classList.add("on"),document.body.classList.add("playing"),Te("#help").style.opacity=1,setTimeout(()=>Te("#help").style.opacity=0,9e3),Te("#clickfly").classList.remove("on"),Re.control==="aim"&&!Nt&&Xa()}function Er(){$.mode==="play"&&E.alive?($.mode="paused",Te("#pause").classList.add("on"),dt.silence(),document.body.classList.remove("playing"),Te("#pView").textContent=$.view==="first"?"Cockpit":"Chase",document.pointerLockElement&&document.exitPointerLock()):$.mode==="paused"&&($.mode="play",Te("#pause").classList.remove("on"),document.body.classList.add("playing"),Re.control==="aim"&&!Nt&&Xa())}function Gp(n){if($.mode==="over")return;$.mode="over",document.body.classList.remove("playing"),document.pointerLockElement&&document.exitPointerLock(),dt.silence();let e=Ps.get("jkstrike-best",0),t=$.score>e;t&&Ps.set("jkstrike-best",$.score),Te("#oScore").textContent=$.score.toLocaleString(),Te("#oTitle").textContent=t&&$.score>0?"New high score!":n==="base"?"Base destroyed":n==="crash"?"Crashed":"Shot down",Te("#oStats").innerHTML=`<div><b>${$.wave}</b><span>Wave</span></div><div><b>${$.kills}</b><span>Kills</span></div><div><b>${$.shots?Math.round($.hits/$.shots*100):0}%</b><span>Gun accuracy</span></div><div><b>${Math.max(e,$.score).toLocaleString()}</b><span>Best</span></div>`,Te("#oPerks").innerHTML=E.perks.length?E.perks.map(i=>`<span>${i[1]} ${i[2]}</span>`).join(""):"",Te("#over").classList.add("on")}function Du(){$={mode:"menu"},Ot.forEach(n=>ft.remove(n.obj)),Gn.forEach(n=>ft.remove(n.mesh)),Ot=[],Gn=[],di=[],fi.list=[],ns=[],E&&(ft.remove(E.obj),E=null),En.visible=!1,dt.silence(),Tc(".modal").forEach(n=>n.classList.remove("on")),Tc(".screen").forEach(n=>n.classList.remove("on")),Te("#menu").classList.add("on"),document.body.classList.remove("playing"),Te("#clickfly").classList.remove("on"),Au(),Wp()}Te("#pause").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(dt.click(),e==="resume"&&Er(),e==="view"&&(Ic(),Te("#pView").textContent=$.view==="first"?"Cockpit":"Chase"),e==="restart"&&(Te("#pause").classList.remove("on"),Lc()),e==="menu"&&Du())};Te("#over").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(dt.click(),Te("#over").classList.remove("on"),e==="again"?Lc():Du())};function Vp(){let n=dt.toggle();Te("#snd").textContent=n?"\u{1F50A}":"\u{1F507}"}Te("#snd").onclick=()=>{dt.init(),Vp()};Te("#snd").textContent=dt.on?"\u{1F50A}":"\u{1F507}";function Au(){tn&&ft.remove(tn),tn=Ts(Re.jet,Re.paint),tn.position.set(-900,1150,1800),tn.rotation.y=.6,ft.add(tn),tn.userData.msls.forEach(n=>n.visible=!0)}function Wp(){Te("#mJets").innerHTML=Object.entries(Qi).map(([n,e])=>`<button class="jcard ${Re.jet===n?"on":""}" data-jet="${n}"><b>${e.name}</b><small>${e.blurb}</small>
    <div class="mini"><span>SPD</span><i style="--v:${e.speed*80}%"></i><span>AGL</span><i style="--v:${e.agility*75}%"></i><span>ARM</span><i style="--v:${e.hp/1.6}%"></i><span>MSL</span><i style="--v:${e.missiles/.13}%"></i></div></button>`).join(""),Te("#mPaint").innerHTML=Object.entries(Ua).filter(([n])=>n!=="red").map(([n,e])=>`<button class="sw ${Re.paint===n?"on":""}" data-paint="${n}" title="${e[2]}" style="background:linear-gradient(135deg,${e[0]} 50%,${e[1]} 50%)"></button>`).join(""),Te("#mDiff").innerHTML=Object.entries(wr).map(([n,e])=>`<button class="chip ${Re.diff===n?"on":""}" data-diff="${n}">${e.name}</button>`).join(""),Te("#mView").innerHTML=[["third","Chase"],["first","Cockpit"]].map(([n,e])=>`<button class="chip ${Re.view===n?"on":""}" data-view="${n}">${e}</button>`).join(""),Te("#mCtrl").innerHTML=Nt?'<span class="chip on">Touch stick</span>':[["aim","Mouse aim (easiest)"],["stick","Mouse joystick"]].map(([n,e])=>`<button class="chip ${Re.control===n?"on":""}" data-ctrl="${n}">${e}</button>`).join("")+[["low","Slow"],["mid","Normal"],["high","Fast"]].map(([n,e])=>`<button class="chip ${Re.sens===n?"on":""}" data-sens="${n}">${e}</button>`).join(""),Te("#mOpts").innerHTML=[["invert","Invert pitch"],["assist","Flight assist + auto pull-up"]].map(([n,e])=>`<button class="chip ${Re[n]?"on":""}" data-opt="${n}">${Re[n]?"\u2713 ":""}${e}</button>`).join(""),Te("#mQual").innerHTML=[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]].map(([n,e])=>`<button class="chip ${Re.quality===n?"on":""}" data-qual="${n}">${e}</button>`).join(""),Te("#mBest").textContent=Ps.get("jkstrike-best",0).toLocaleString()}Te("#menu").onclick=n=>{let e=n.target.closest("button");if(!e)return;dt.init(),dt.click();let t=e.dataset;if(t.jet&&(Re.jet=t.jet,Au()),t.paint&&(Re.paint=t.paint,Au()),t.diff&&(Re.diff=t.diff),t.view&&(Re.view=t.view),t.opt&&(Re[t.opt]=!Re[t.opt]),t.ctrl&&(Re.control=t.ctrl),t.sens&&(Re.sens=t.sens),t.qual){Re.quality=t.qual,Mc(),location.reload();return}if(e.id==="mGo"){Mc(),Lc();return}Mc(),Wp()};function Xp(){let n=innerWidth,e=innerHeight;gn.setPixelRatio(ci),gn.setSize(n,e,!1),Ke.aspect=n/e,Ke.updateProjectionMatrix(),Ha=Math.min(devicePixelRatio||1,1.5),bn=n,$t=e,Rs.width=n*Ha,Rs.height=e*Ha,Rs.style.width=n+"px",Rs.style.height=e+"px"}addEventListener("resize",Xp);document.addEventListener("visibilitychange",()=>{document.hidden&&$.mode==="play"&&Er()});function vu(n,e,t){let i=n.userData;i.flames.length&&(i.flames[0].userData.b===void 0&&i.flames.forEach(s=>s.userData.b=s.scale.x),i.flames.forEach((s,r)=>s.scale.set(s.userData.b,s.userData.b,s.userData.b*e*(r%2?1:1.12))),i.glowMat&&(i.glowMat.opacity=t?1:.6),i.flameMat&&E&&n===E.obj&&(i.flameMat.opacity=t?.9:.5,i.flameMat.color.set(t?"#ffb45e":"#ff9a4a")))}var xc=16,yc=0;function tM(n){if(Re.quality!=="auto"||(xc=es(xc,n*1e3,.05),yc-=n,yc>0))return;let e=Math.min(devicePixelRatio||1,Mu.auto.max),t=ci;xc>21&&ci>.6?t=Math.max(.6,ci-.15):xc<14.5&&ci<e&&(t=Math.min(e,ci+.1)),t!==ci?(ci=t,gn.setPixelRatio(ci),gn.setSize(innerWidth,innerHeight,!1),yc=2):yc=.5}var za=nn(),Ec=0;function nM(){Ec++;let n=(e,t,i)=>{Ec%i||e.userData.glows.forEach(s=>{za.copy(s.position),e.userData.body.localToWorld(za),Tr.emit(za.x,za.y,za.z,{size:2.6,life:5.5,color:[1,1,1],alpha:Math.min(.55,(t.y-1550)/900),grow:1.2,drag:0})})};if(E.alive&&E.pos.y>1600&&n(E.obj,E.pos,1),Ot.forEach(e=>{e.air&&!e.dead&&e.pos.y>1600&&e.pos.distanceTo(E.pos)<3500&&n(e.obj,e.pos,2)}),E.alive&&E.alt<90&&E.speed>120&&Ec%2===0){let e=Gt(E.q),t=E.pos.x-e.x*25,i=E.pos.z-e.z*25,s=An.height(t,i)+3;on.emit(t,s,i,{size:10+Math.random()*8,life:2.6,color:[.86,.7,.5],alpha:.5*(1-E.alt/90),spread:14,grow:1.4,vy:10,drag:1.2})}}var Rp=performance.now();function qp(n){requestAnimationFrame(qp);let e=(n-Rp)/1e3,t=Math.min(.05,e);Rp=n;let i=n/1e3;if(e<.2&&tM(e),$.mode==="play"){$.slow>0&&($.slow-=t,t*=.3),$.slowCd-=t;let a=Math.min(3,Math.ceil(t*60-.01));for(let o=0;o<a;o++)Bp(t/a);eM(t)}$.mode==="over"&&E&&(E.deadT+=t);let s=E?E.pos:tn?tn.position:nn();E&&(E.obj.position.copy(E.pos),E.obj.quaternion.copy(E.q),E.obj.userData.body.rotation.z=-(E.rate?.z||0)*.04,vu(E.obj,E.ab?1.35+Math.random()*.3:.3+E.thr*.45,E.ab),E.obj.userData.strobe.visible=i*1.4%1<.08),tn&&(tn.position.y=1150+Math.sin(i*.8)*2,tn.userData.body.rotation.z=Math.sin(i*.6)*.06,vu(tn,.45+Math.random()*.08,!1)),Ot.forEach(a=>{a.obj.position.copy(a.pos),a.obj.quaternion.copy(a.q),a.air&&(vu(a.obj,.55+Math.random()*.15,!1),a.obj.userData.strobe.visible=(i*1.2+a.id)%1<.08)}),Wa.userData.radar.rotation.y=i*1.2,Su.forEach(a=>{a.t<=0||(a.t-=t,a.l.intensity=a.t<=0?0:a.l.intensity*Math.exp(-t*9))}),Wv(t),Li.position.copy(s).addScaledVector(Pp,1200),Li.target.position.copy(s),Ip.position.copy(Ke.position);let r=gn.domElement.height/(2*Math.tan(Ke.fov*Math.PI/360));on.update(t,vc,r*2),Hn.update(t,vc,r*2),Tr.update(t,vc,r*2),Lp.material.uniforms.scale.value=r,$.mode==="play"&&nM(),fi.draw(),E&&$.mode==="play"&&dt.engine(E.alive?E.thr:0,E.ab&&E.alive,E.alive?E.speed:0,$.view==="first"),$.mode==="play"&&Re.control==="aim"&&!Nt&&Ec%30===0&&Te("#clickfly").classList.toggle("on",!document.pointerLockElement),$.mode==="play"||$.mode==="paused"?(qv($.mode==="play"?t:0,i),Kv(i)):kp.clearRect(0,0,Rs.width,Rs.height),gn.render(ft,Ke)}Xp();Du();dp();{let n=["viper","raptor","striker"].map(t=>Ts(t,"red",!0)).concat([Fa(!1),Fa(!0),dc("sam"),dc("aa")]),e=rc();n.forEach((t,i)=>{t.position.set(i*60,1200,0),ft.add(t)}),ft.add(e),Hn.emit(0,1200,0,{must:!0}),on.emit(0,1200,0,{must:!0}),Tr.emit(0,1200,0,{must:!0});try{gn.compile(ft,Ke)}catch{}n.forEach(t=>ft.remove(t)),ft.remove(e)}requestAnimationFrame(qp);setTimeout(()=>{let n=Te("#loading");n.style.opacity=0,n.style.pointerEvents="none",setTimeout(()=>n.remove(),600)},200);window.__jet={renderer:gn,scene:ft,cam:Ke,get menuJet(){return tn},get G(){return $},get P(){return E},get enemies(){return Ot},step:Bp,startGame:Lc,fireMissile:Pc,dropFlares:Pu,toggleView:Ic,choosePerk:Iu,S:Re,keys:br,mouse:wn,aim:mn};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
