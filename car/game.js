var Pu=0,Pc=1,Iu=2;var ns=1,Lu=2,ks=3,Ui=0,Je=1,pn=2,ui=0,Fi=1,fi=2,Ic=3,Lc=4,Nu=5;var is=100,Du=101,Uu=102,Fu=103,Ou=104,Bu=200,zu=201,ku=202,Hu=203,Nc=204,Dc=205,Gu=206,Vu=207,Wu=208,Xu=209,qu=210,Yu=211,Zu=212,Ju=213,$u=214,$a=0,Ka=1,Qa=2,Ts=3,ja=4,to=5,eo=6,no=7,Uc=0,Ku=1,Qu=2,Zn=0,Wr=1,Xr=2,qr=3,ss=4,Yr=5,Zr=6,Jr=7;var Fc=300,rs=301,Hs=302,No=303,Do=304,Ri=1e3,Wn=1001,io=1002,Ye=1003,ju=1004;var $r=1005;var ln=1006,Uo=1007;var di=1008;var mn=1009,Oc=1010,Bc=1011,Gs=1012,Fo=1013,zn=1014,gn=1015,He=1016,Oo=1017,Bo=1018,as=1020,zc=35902,kc=35899,Hc=1021,Gc=1022,kn=1023,li=1026,pi=1027,zo=1028,ko=1029,Oi=1030,Ho=1031;var Go=1033,Kr=33776,Qr=33777,jr=33778,ta=33779,Vo=35840,Wo=35841,Xo=35842,qo=35843,Yo=36196,Zo=37492,Jo=37496,$o=37488,Ko=37489,ea=37490,Qo=37491,jo=37808,tl=37809,el=37810,nl=37811,il=37812,sl=37813,rl=37814,al=37815,ol=37816,ll=37817,cl=37818,hl=37819,ul=37820,fl=37821,dl=36492,pl=36494,ml=36495,gl=36283,_l=36284,na=36285,xl=36286;var ur=2300,so=2301,Za=2302,vc=2303,yc=2400,Mc=2401,Sc=2402;var tf=3200;var vl=0,ef=1,mi="",Ne="srgb",fr="srgb-linear",dr="linear",de="srgb";var Ja=7680;var nf=519,sf=512,rf=513,af=514,Vc=515,of=516,lf=517,Wc=518,Xc=519,cf=35044,Vs=35048;var qc="300 es",Rn=2e3,ws=2001;function Ad(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Rd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hf(){let n=pr("canvas");return n.style.display="block",n}var Kh={},As=null;function Yc(...n){let t="THREE."+n.shift();As?As("log",t,...n):console.log(t,...n)}function uf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=uf(n);let t="THREE."+n.shift();if(As)As("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=uf(n);let t="THREE."+n.shift();if(As)As("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function $i(...n){let t=n.join(" ");t in Kh||(Kh[t]=!0,qt(...n))}function ff(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var df={[$a]:$a,[Qa]:eo,[ja]:ja,[Ts]:to,[Ka]:Ka,[eo]:Qa,[no]:no,[to]:Ts},Xn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Zl=Math.PI/180,ro=180/Math.PI;function Ws(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Cd(n,t){return(n%t+t)%t}function Jl(n,t,e){return(1-e)*n+e*t}function pf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Zc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pd(n,t){if(t.constructor===Float32Array)return n;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Id(n,t){if(t.constructor===Float32Array)return n;let e=Zc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var th=class th{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;var lt=th,dn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],p=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==p){let m=l*u+c*d+h*p+f*y;m<0&&(u=-u,d=-d,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);g=Math.sin(g*x)/M,o=Math.sin(o*x)/M,l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+y*o}else{l=l*g+u*o,c=c*g+d*o,h=h*g+p*o,f=f*g+y*o;let x=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=x,c*=x,h*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*f+l*d-c*u,t[e+1]=l*p+h*u+c*f-o*d,t[e+2]=c*p+h*d+o*u-l*f,t[e+3]=h*p-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"YXZ":this._x=u*h*f+c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"ZXY":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f-u*d*p;break;case"ZYX":this._x=u*h*f-c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f+u*d*p;break;case"YZX":this._x=u*h*f+c*d*p,this._y=c*d*f+u*h*p,this._z=c*h*p-u*d*f,this._w=c*h*f-u*d*p;break;case"XZY":this._x=u*h*f-c*d*p,this._y=c*d*f-u*h*p,this._z=c*h*p+u*d*f,this._w=c*h*f+u*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},eh=class eh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $l.copy(this).projectOnVector(t),this.sub($l)}reflect(t){return this.sub($l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};eh.prototype.isVector3=!0;var D=eh,$l=new D,Qh=new dn,nh=class nh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],p=i[8],y=s[0],m=s[3],g=s[6],x=s[1],M=s[4],v=s[7],A=s[2],T=s[5],_=s[8];return r[0]=a*y+o*x+l*A,r[3]=a*m+o*M+l*T,r[6]=a*g+o*v+l*_,r[1]=c*y+h*x+f*A,r[4]=c*m+h*M+f*T,r[7]=c*g+h*v+f*_,r[2]=u*y+d*x+p*A,r[5]=u*m+d*M+p*T,r[8]=u*g+d*v+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,p=e*f+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return t[0]=f*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kl.makeScale(t,e)),this}rotate(t){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kl.makeRotation(-t)),this}translate(t,e){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};nh.prototype.isMatrix3=!0;var $t=nh,Kl=new $t,jh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){let n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=oi(s.r),s.g=oi(s.g),s.b=oi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===mi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:dr,toXYZ:jh,fromXYZ:tu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:i,transfer:de,toXYZ:jh,fromXYZ:tu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),n}var oe=Ld();function oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hs,ao=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{hs===void 0&&(hs=pr("canvas")),hs.width=t.width,hs.height=t.height;let s=hs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=hs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=pr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(oi(e[i]/255)*255):e[i]=oi(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nd=0,Rs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ql(s[a].image)):r.push(Ql(s[a]))}else r=Ql(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ql(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ao.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Dd=0,jl=new D,cn=class n extends Xn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Wn,s=Wn,r=ln,a=di,o=kn,l=mn,c=n.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ws(),this.name="",this.source=new Rs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(jl).x}get height(){return this.source.getSize(jl).y}get depth(){return this.source.getSize(jl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ri:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ri:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Fc;cn.DEFAULT_ANISOTROPY=1;var ih=class ih{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(d+1)/2,A=(g+1)/2,T=(h+u)/4,_=(f+y)/4,b=(p+m)/4;return M>v&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=T/i,r=_/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=_/r,s=b/r),this.set(i,s,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(f-y)/x,this.z=(u-h)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ih.prototype.isVector4=!0;var Pe=ih,oo=class extends Xn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new cn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Rs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends oo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},mr=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var lo=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Lo=class Lo{constructor(t,e,i,s,r,a,o,l,c,h,f,u,d,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,f,u,d,p,y,m)}set(t,e,i,s,r,a,o,l,c,h,f,u,d,p,y,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/us.setFromMatrixColumn(t,0).length(),r=1/us.setFromMatrixColumn(t,1).length(),a=1/us.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,p=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+p*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,p=c*h,y=c*f;e[0]=u+y*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,p=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,p=o*h,y=o*f;e[0]=l*h,e[4]=p*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=p*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+p,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,d=a*c,p=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-p,e[2]=p*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ud,t,Fd)}lookAt(t,e,i){let s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Si.crossVectors(i,vn),Si.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Si.crossVectors(i,vn)),Si.normalize(),ba.crossVectors(vn,Si),s[0]=Si.x,s[4]=ba.x,s[8]=vn.x,s[1]=Si.y,s[5]=ba.y,s[9]=vn.y,s[2]=Si.z,s[6]=ba.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],p=i[2],y=i[6],m=i[10],g=i[14],x=i[3],M=i[7],v=i[11],A=i[15],T=s[0],_=s[4],b=s[8],N=s[12],P=s[1],U=s[5],H=s[9],Y=s[13],I=s[2],G=s[6],K=s[10],V=s[14],ht=s[3],$=s[7],it=s[11],rt=s[15];return r[0]=a*T+o*P+l*I+c*ht,r[4]=a*_+o*U+l*G+c*$,r[8]=a*b+o*H+l*K+c*it,r[12]=a*N+o*Y+l*V+c*rt,r[1]=h*T+f*P+u*I+d*ht,r[5]=h*_+f*U+u*G+d*$,r[9]=h*b+f*H+u*K+d*it,r[13]=h*N+f*Y+u*V+d*rt,r[2]=p*T+y*P+m*I+g*ht,r[6]=p*_+y*U+m*G+g*$,r[10]=p*b+y*H+m*K+g*it,r[14]=p*N+y*Y+m*V+g*rt,r[3]=x*T+M*P+v*I+A*ht,r[7]=x*_+M*U+v*G+A*$,r[11]=x*b+M*H+v*K+A*it,r[15]=x*N+M*Y+v*V+A*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],p=t[3],y=t[7],m=t[11],g=t[15],x=l*d-c*u,M=o*d-c*f,v=o*u-l*f,A=a*d-c*h,T=a*u-l*h,_=a*f-o*h;return e*(y*x-m*M+g*v)-i*(p*x-m*A+g*T)+s*(p*M-y*A+g*_)-r*(p*v-y*T+m*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],p=t[12],y=t[13],m=t[14],g=t[15],x=e*o-i*a,M=e*l-s*a,v=e*c-r*a,A=i*l-s*o,T=i*c-r*o,_=s*c-r*l,b=h*y-f*p,N=h*m-u*p,P=h*g-d*p,U=f*m-u*y,H=f*g-d*y,Y=u*g-d*m,I=x*Y-M*H+v*U+A*P-T*N+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*Y-l*H+c*U)*G,t[1]=(s*H-i*Y-r*U)*G,t[2]=(y*_-m*T+g*A)*G,t[3]=(u*T-f*_-d*A)*G,t[4]=(l*P-a*Y-c*N)*G,t[5]=(e*Y-s*P+r*N)*G,t[6]=(m*v-p*_-g*M)*G,t[7]=(h*_-u*v+d*M)*G,t[8]=(a*H-o*P+c*b)*G,t[9]=(i*P-e*H-r*b)*G,t[10]=(p*T-y*v+g*x)*G,t[11]=(f*v-h*T-d*x)*G,t[12]=(o*N-a*U-l*b)*G,t[13]=(e*U-i*N+s*b)*G,t[14]=(y*M-p*A-m*x)*G,t[15]=(h*A-f*M+u*x)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,p=r*f,y=a*h,m=a*f,g=o*f,x=l*c,M=l*h,v=l*f,A=i.x,T=i.y,_=i.z;return s[0]=(1-(y+g))*A,s[1]=(d+v)*A,s[2]=(p-M)*A,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+g))*T,s[6]=(m+x)*T,s[7]=0,s[8]=(p+M)*_,s[9]=(m-x)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=us.set(s[0],s[1],s[2]).length(),o=us.set(s[4],s[5],s[6]).length(),l=us.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,f=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,e.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Rn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Rn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ws)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Rn,l=!1){let c=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Rn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===ws)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Lo.prototype.isMatrix4=!0;var ve=Lo,us=new D,Ln=new ve,Ud=new D(0,0,0),Fd=new D(1,1,1),Si=new D,ba=new D,vn=new D,eu=new ve,nu=new dn,ci=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return eu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(eu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return nu.setFromEuler(this),this.setFromQuaternion(nu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var gr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,iu=new D,fs=new dn,ni=new ve,Ea=new D,nr=new D,Bd=new D,zd=new dn,su=new D(1,0,0),ru=new D(0,1,0),au=new D(0,0,1),ou={type:"added"},kd={type:"removed"},ds={type:"childadded",child:null},tc={type:"childremoved",child:null},Oe=class n extends Xn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new ci,i=new dn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new $t}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,e){return fs.setFromAxisAngle(t,e),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(su,t)}rotateY(t){return this.rotateOnAxis(ru,t)}rotateZ(t){return this.rotateOnAxis(au,t)}translateOnAxis(t,e){return iu.copy(t).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(su,t)}translateY(t){return this.translateOnAxis(ru,t)}translateZ(t){return this.translateOnAxis(au,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ea.copy(t):Ea.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(nr,Ea,this.up):ni.lookAt(Ea,nr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(ni),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ou),ds.child=t,this.dispatchEvent(ds),ds.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),tc.child=t,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ou),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Bd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,zd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qe=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hd={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new qe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function ec(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Pt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Cd(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=ec(a,r,t+1/3),this.g=ec(a,r,t),this.b=ec(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ne){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let i=mf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return oe.workingToColorSpace(en.copy(this),t),Math.round(re(en.r*255,0,255))*65536+Math.round(re(en.g*255,0,255))*256+Math.round(re(en.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(en.copy(this),e);let i=en.r,s=en.g,r=en.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Ne){oe.workingToColorSpace(en.copy(this),t);let e=en.r,i=en.g,s=en.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Ta);let i=Jl(bi.h,Ta.h,e),s=Jl(bi.s,Ta.s,e),r=Jl(bi.l,Ta.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Pt;Pt.NAMES=mf;var _r=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ps=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new D,ii=new D,nc=new D,si=new D,ps=new D,ms=new D,lu=new D,ic=new D,sc=new D,rc=new D,ac=new Pe,oc=new Pe,lc=new Pe,Ai=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Nn.subVectors(s,e),ii.subVectors(i,e),nc.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(ii),l=Nn.dot(nc),c=ii.dot(ii),h=ii.dot(nc),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,i),lc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ac,r.x),a.addScaledVector(oc,r.y),a.addScaledVector(lc,r.z),a}static isFrontFacing(t,e,i,s){return Nn.subVectors(i,e),ii.subVectors(t,e),Nn.cross(ii).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),Nn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ps.subVectors(s,i),ms.subVectors(r,i),ic.subVectors(t,i);let l=ps.dot(ic),c=ms.dot(ic);if(l<=0&&c<=0)return e.copy(i);sc.subVectors(t,s);let h=ps.dot(sc),f=ms.dot(sc);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ps,a);rc.subVectors(t,r);let d=ps.dot(rc),p=ms.dot(rc);if(p>=0&&d<=p)return e.copy(r);let y=d*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(ms,o);let m=h*p-d*f;if(m<=0&&f-h>=0&&d-p>=0)return lu.subVectors(r,s),o=(f-h)/(f-h+(d-p)),e.copy(s).addScaledVector(lu,o);let g=1/(m+y+u);return a=y*g,o=u*g,e.copy(i).addScaledVector(ps,a).addScaledVector(ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},qn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(t.matrixWorld),this.union(wa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Aa.subVectors(this.max,ir),gs.subVectors(t.a,ir),_s.subVectors(t.b,ir),xs.subVectors(t.c,ir),Ei.subVectors(_s,gs),Ti.subVectors(xs,_s),Xi.subVectors(gs,xs);let e=[0,-Ei.z,Ei.y,0,-Ti.z,Ti.y,0,-Xi.z,Xi.y,Ei.z,0,-Ei.x,Ti.z,0,-Ti.x,Xi.z,0,-Xi.x,-Ei.y,Ei.x,0,-Ti.y,Ti.x,0,-Xi.y,Xi.x,0];return!cc(e,gs,_s,xs,Aa)||(e=[1,0,0,0,1,0,0,0,1],!cc(e,gs,_s,xs,Aa))?!1:(Ra.crossVectors(Ei,Ti),e=[Ra.x,Ra.y,Ra.z],cc(e,gs,_s,xs,Aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new D,new D,new D,new D,new D,new D,new D,new D],Dn=new D,wa=new qn,gs=new D,_s=new D,xs=new D,Ei=new D,Ti=new D,Xi=new D,ir=new D,Aa=new D,Ra=new D,qi=new D;function cc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){qi.fromArray(n,r);let o=s.x*Math.abs(qi.x)+s.y*Math.abs(qi.y)+s.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ze=new D,Ca=new lt,Gd=0,ke=class extends Xn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cf,this.updateRanges=[],this.gpuType=gn,this.version=0,this._normalizationScale=t!==void 0?Zc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ca.fromBufferAttribute(this,e),Ca.applyMatrix3(t),this.setXY(e,Ca.x,Ca.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Id(t,this.array)}};var xr=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var vr=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Bt=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},Vd=new qn,sr=new D,hc=new D,Fn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Vd.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(hc)),this.expandByPoint(sr.copy(t.center).sub(hc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wd=0,An=new ve,uc=new Oe,vs=new D,yn=new qn,rr=new qn,Xe=new D,pe=class n extends Xn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ad(t)?vr:xr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return An.makeRotationFromQuaternion(t),this.applyMatrix4(An),this}rotateX(t){return An.makeRotationX(t),this.applyMatrix4(An),this}rotateY(t){return An.makeRotationY(t),this.applyMatrix4(An),this}rotateZ(t){return An.makeRotationZ(t),this.applyMatrix4(An),this}translate(t,e,i){return An.makeTranslation(t,e,i),this.applyMatrix4(An),this}scale(t,e,i){return An.makeScale(t,e,i),this.applyMatrix4(An),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(yn.min,rr.min),yn.expandByPoint(Xe),Xe.addVectors(yn.max,rr.max),yn.expandByPoint(Xe)):(yn.expandByPoint(rr.min),yn.expandByPoint(rr.max))}yn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xe.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),Xe.add(vs)),s=Math.max(s,i.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new D,l[N]=new D;let h=new D,f=new D,u=new D,d=new lt,p=new lt,y=new lt,m=new D,g=new D;function x(N,P,U){c[N]=c[P]=c[U]=1,h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,P),u.fromBufferAttribute(i,U),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,P),y.fromBufferAttribute(r,U),f.sub(h),u.sub(h),p.sub(d),y.sub(d);let H=1/(p.x*y.y-y.x*p.y);isFinite(H)&&(m.copy(f).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(H),g.copy(u).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(H),o[N].add(m),o[P].add(m),o[U].add(m),l[N].add(g),l[P].add(g),l[U].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let N=0,P=M.length;N<P;++N){let U=M[N],H=U.start,Y=U.count;for(let I=H,G=H+Y;I<G;I+=3)x(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new D,A=new D,T=new D,_=new D;function b(N){T.fromBufferAttribute(s,N),_.copy(T);let P=o[N];v.copy(P),v.sub(T.multiplyScalar(T.dot(P))).normalize(),A.crossVectors(_,P);let H=A.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,H)}for(let N=0,P=i.count;N<P;++N)c[N]&&b(N);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let g=0;g<h;g++)u[p++]=c[d++]}return new ke(u,h,f)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var fc=new D,Xd=new D,qd=new $t,Un=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=fc.subVectors(i,e).cross(Xd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(fc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||qd.getNormalMatrix(t),s=this.coplanarPoint(fc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Yd=0,hi=class extends Xn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Fi,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Dc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ja,this.stencilZFail=Ja,this.stencilZPass=Ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Un().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new D,dc=new D,Pa=new D,Ia=new D,yr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(dc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),l=-Ia.dot(Pa),c=Ia.lengthSq(),h=Math.abs(1-a*a),f,u,d,p;if(h>0)if(f=a*l-o,u=a*o-l,p=r*h,f>=0)if(u>=-p)if(u<=p){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-p?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=p?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(dc).addScaledVector(Pa,u),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,p=e.x-a.x,y=e.y-a.y,m=e.z-a.z,g=i.x-a.x,x=i.y-a.y,M=i.z-a.z,v=Math.abs(l),A=Math.abs(c),T=Math.abs(h),_,b,N,P,U,H,Y,I,G,K,V,ht;if(v>=A&&v>=T?(N=l,H=f,G=p,ht=g,l>=0?(_=c,b=h,P=u,U=d,Y=y,I=m,K=x,V=M):(_=h,b=c,P=d,U=u,Y=m,I=y,K=M,V=x)):A>=T?(N=c,H=u,G=y,ht=x,c>=0?(_=h,b=l,P=d,U=f,Y=m,I=p,K=M,V=g):(_=l,b=h,P=f,U=d,Y=p,I=m,K=g,V=M)):(N=h,H=d,G=m,ht=M,h>=0?(_=l,b=c,P=f,U=u,Y=p,I=y,K=g,V=x):(_=c,b=l,P=u,U=f,Y=y,I=p,K=x,V=g)),N===0)return null;let $=_/N,it=b/N,rt=1/N,Tt=P-$*H,kt=U-it*H,nt=Y-$*G,Mt=I-it*G,Rt=K-$*ht,Vt=V-it*ht,St=Rt*Mt-Vt*nt,Dt=Tt*Vt-kt*Rt,fe=nt*kt-Mt*Tt;if(s){if(St<0||Dt<0||fe<0)return null}else if((St<0||Dt<0||fe<0)&&(St>0||Dt>0||fe>0))return null;let Ut=St+Dt+fe;if(Ut===0)return null;let jt=rt*(St*H+Dt*G+fe*ht);return(Ut>0?jt<0:jt>0)?null:this.at(jt/Ut,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},cu=new ve,Yi=new yr,La=new Fn,hu=new D,Na=new D,Da=new D,Ua=new D,pc=new D,Fa=new D,uu=new D,Oa=new D,Nt=class extends Oe{constructor(t=new pe,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(pc.fromBufferAttribute(f,t),a?Fa.addScaledVector(pc,h):Fa.addScaledVector(pc.sub(e),h))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),Yi.copy(t.ray).recast(t.near),!(La.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(La,hu)===null||Yi.origin.distanceToSquared(hu)>(t.far-t.near)**2))&&(cu.copy(r).invert(),Yi.copy(t.ray).applyMatrix4(cu),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,A=M;v<A;v+=3){let T=o.getX(v),_=o.getX(v+1),b=o.getX(v+2);s=Ba(this,g,t,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);s=Ba(this,a,t,i,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=u.length;p<y;p++){let m=u[p],g=a[m.materialIndex],x=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,A=M;v<A;v+=3){let T=v,_=v+1,b=v+2;s=Ba(this,g,t,i,c,h,f,T,_,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=p,g=y;m<g;m+=3){let x=m,M=m+1,v=m+2;s=Ba(this,a,t,i,c,h,f,x,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Zd(n,t,e,i,s,r,a,o){let l;if(t.side===Je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ui,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:n}}function Ba(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Na),n.getVertexPosition(l,Da),n.getVertexPosition(c,Ua);let h=Zd(n,t,e,i,Na,Da,Ua,uu);if(h){let f=new D;Ai.getBarycoord(uu,Na,Da,Ua,f),s&&(h.uv=Ai.getInterpolatedAttribute(s,o,l,c,f,new lt)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,o,l,c,f,new lt)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Ai.getNormal(Na,Da,Ua,u.normal),h.face=u,h.barycoord=f}return h}var Mr=class extends cn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ye,h=Ye,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ys=new ve,fu=new ve,za=[],du=new qn,Jd=new ve,ar=new Nt,or=new Fn,Ki=class extends Nt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Is(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Jd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),du.copy(t.boundingBox).applyMatrix4(ys),this.boundingBox.union(du)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ys),or.copy(t.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(i),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),fu.multiplyMatrices(i,ys),ar.matrixWorld=fu,ar.raycast(t,za);for(let a=0,o=za.length;a<o;a++){let l=za[a];l.instanceId=r,l.object=this,e.push(l)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Is(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,zo,gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Zi=new Fn,$d=new lt(.5,.5),ka=new D,Ci=class{constructor(t=new Un,e=new Un,i=new Un,s=new Un,r=new Un,a=new Un){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Rn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],p=r[8],y=r[9],m=r[10],g=r[11],x=r[12],M=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,g-p,A-x).normalize(),s[1].setComponents(c+a,d+h,g+p,A+x).normalize(),s[2].setComponents(c+o,d+f,g+y,A+M).normalize(),s[3].setComponents(c-o,d-f,g-y,A-M).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,g-m,A-v).normalize();else if(s[4].setComponents(c-l,d-u,g-m,A-v).normalize(),e===Rn)s[5].setComponents(c+l,d+u,g+m,A+v).normalize();else if(e===ws)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){Zi.center.set(0,0,0);let e=$d.distanceTo(t.center);return Zi.radius=.7071067811865476+e,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ka.x=s.normal.x>0?t.max.x:t.min.x,ka.y=s.normal.y>0?t.max.y:t.min.y,ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pu=new ve,co=class n{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];pu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ci),i[s].setFromProjectionMatrix(pu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ci),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var ho=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},mu=new ve,bc=new yr,Ha=new Fn,Ga=new D,Sr=class extends Oe{constructor(t=new pe,e=new ho){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;mu.copy(s).invert(),bc.copy(t.ray).applyMatrix4(mu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,y=d;p<y;p++){let m=c.getX(p);Ga.fromBufferAttribute(f,m),gu(Ga,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=u,y=d;p<y;p++)Ga.fromBufferAttribute(f,p),gu(Ga,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function gu(n,t,e,i,s,r,a){let o=bc.distanceSqToPoint(n);if(o<e){let l=new D;bc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var br=class extends cn{constructor(t=[],e=rs,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},On=class extends cn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bn=class extends cn{constructor(t,e,i=zn,s,r,a,o=Ye,l=Ye,c,h=li,f=1){if(h!==li&&h!==pi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Er=class extends Bn{constructor(t,e=zn,i=rs,s,r,a=Ye,o=Ye,l,c=li){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Tr=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ye=class n extends pe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function p(y,m,g,x,M,v,A,T,_,b,N){let P=v/_,U=A/b,H=v/2,Y=A/2,I=T/2,G=_+1,K=b+1,V=0,ht=0,$=new D;for(let it=0;it<K;it++){let rt=it*U-Y;for(let Tt=0;Tt<G;Tt++){let kt=Tt*P-H;$[y]=kt*x,$[m]=rt*M,$[g]=I,c.push($.x,$.y,$.z),$[y]=0,$[m]=0,$[g]=T>0?1:-1,h.push($.x,$.y,$.z),f.push(Tt/_),f.push(1-it/b),V+=1}}for(let it=0;it<b;it++)for(let rt=0;rt<_;rt++){let Tt=u+rt+G*it,kt=u+rt+G*(it+1),nt=u+(rt+1)+G*(it+1),Mt=u+(rt+1)+G*it;l.push(Tt,kt,Mt),l.push(kt,nt,Mt),ht+=6}o.addGroup(d,ht,N),d+=ht,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Yn=class n extends pe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=i+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("normal",new Bt(o,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},un=class n extends pe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],p=0,y=[],m=i/2,g=0;x(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function x(){let v=new D,A=new D,T=0,_=(e-t)/i;for(let b=0;b<=r;b++){let N=[],P=b/r,U=P*(e-t)+t;for(let H=0;H<=s;H++){let Y=H/s,I=Y*l+o,G=Math.sin(I),K=Math.cos(I);A.x=U*G,A.y=-P*i+m,A.z=U*K,f.push(A.x,A.y,A.z),v.set(G,_,K).normalize(),u.push(v.x,v.y,v.z),d.push(Y,1-P),N.push(p++)}y.push(N)}for(let b=0;b<s;b++)for(let N=0;N<r;N++){let P=y[N][b],U=y[N+1][b],H=y[N+1][b+1],Y=y[N][b+1];(t>0||N!==0)&&(h.push(P,U,Y),T+=3),(e>0||N!==r-1)&&(h.push(U,H,Y),T+=3)}c.addGroup(g,T,0),g+=T}function M(v){let A=p,T=new lt,_=new D,b=0,N=v===!0?t:e,P=v===!0?1:-1;for(let H=1;H<=s;H++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),p++;let U=p;for(let H=0;H<=s;H++){let I=H/s*l+o,G=Math.cos(I),K=Math.sin(I);_.x=N*K,_.y=m*P,_.z=N*G,f.push(_.x,_.y,_.z),u.push(0,P,0),T.x=G*.5+.5,T.y=K*.5*P+.5,d.push(T.x,T.y),p++}for(let H=0;H<s;H++){let Y=A+H,I=U+H;v===!0?h.push(I,I+1,Y):h.push(I+1,I,Y),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ls=class n extends un{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},uo=class n extends pe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new Bt(r,3)),this.setAttribute("normal",new Bt(r.slice(),3)),this.setAttribute("uv",new Bt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(x){let M=new D,v=new D,A=new D;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],v),d(e[T+2],A),l(M,v,A,x)}function l(x,M,v,A){let T=A+1,_=[];for(let b=0;b<=T;b++){_[b]=[];let N=x.clone().lerp(v,b/T),P=M.clone().lerp(v,b/T),U=T-b;for(let H=0;H<=U;H++)H===0&&b===T?_[b][H]=N:_[b][H]=N.clone().lerp(P,H/U)}for(let b=0;b<T;b++)for(let N=0;N<2*(T-b)-1;N++){let P=Math.floor(N/2);N%2===0?(u(_[b][P+1]),u(_[b+1][P]),u(_[b][P])):(u(_[b][P+1]),u(_[b+1][P+1]),u(_[b+1][P]))}}function c(x){let M=new D;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(x),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){let x=new D;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];let v=m(x)/2/Math.PI+.5,A=g(x)/Math.PI+.5;a.push(v,1-A)}p(),f()}function f(){for(let x=0;x<a.length;x+=6){let M=a[x+0],v=a[x+2],A=a[x+4],T=Math.max(M,v,A),_=Math.min(M,v,A);T>.9&&_<.1&&(M<.2&&(a[x+0]+=1),v<.2&&(a[x+2]+=1),A<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function d(x,M){let v=x*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function p(){let x=new D,M=new D,v=new D,A=new D,T=new lt,_=new lt,b=new lt;for(let N=0,P=0;N<r.length;N+=9,P+=6){x.set(r[N+0],r[N+1],r[N+2]),M.set(r[N+3],r[N+4],r[N+5]),v.set(r[N+6],r[N+7],r[N+8]),T.set(a[P+0],a[P+1]),_.set(a[P+2],a[P+3]),b.set(a[P+4],a[P+5]),A.copy(x).add(M).add(v).divideScalar(3);let U=m(A);y(T,P+0,x,U),y(_,P+2,M,U),y(b,P+4,v,U)}}function y(x,M,v,A){A<0&&x.x===1&&(a[M]=x.x-1),v.x===0&&v.z===0&&(a[M]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var Mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new ve;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ns=class extends Mn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fo=class extends Ns{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Jc(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var _u=new D,xu=new D,mc=new Jc,gc=new Jc,_c=new Jc,Pi=class extends Mn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(xu.subVectors(s[0],s[1]).add(s[0]),c=xu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(_u.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_u),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),mc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,p,y,m),gc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,p,y,m),_c.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,p,y,m)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),gc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),_c.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(mc.calc(l),gc.calc(l),_c.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function vu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Kd(n,t){let e=1-n;return e*e*t}function Qd(n,t){return 2*(1-n)*n*t}function jd(n,t){return n*n*t}function cr(n,t,e,i){return Kd(n,t)+Qd(n,e)+jd(n,i)}function tp(n,t){let e=1-n;return e*e*e*t}function ep(n,t){let e=1-n;return 3*e*e*n*t}function np(n,t){return 3*(1-n)*n*n*t}function ip(n,t){return n*n*n*t}function hr(n,t,e,i,s){return tp(n,t)+ep(n,e)+np(n,i)+ip(n,s)}var wr=class extends Mn{constructor(t=new lt,e=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},po=class extends Mn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(hr(t,s.x,r.x,a.x,o.x),hr(t,s.y,r.y,a.y,o.y),hr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Mn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mo=class extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends Mn{constructor(t=new lt,e=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new lt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Mn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(cr(t,s.x,r.x,a.x),cr(t,s.y,r.y,a.y),cr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(vu(o,l.x,c.x,h.x,f.x),vu(o,l.y,c.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},go=Object.freeze({__proto__:null,ArcCurve:fo,CatmullRomCurve3:Pi,CubicBezierCurve:wr,CubicBezierCurve3:po,EllipseCurve:Ns,LineCurve:Ar,LineCurve3:mo,QuadraticBezierCurve:Rr,QuadraticBezierCurve3:Cr,SplineCurve:Pr}),_o=class extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new go[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new go[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ir=class extends _o{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ar(this.currentPoint.clone(),new lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Rr(this.currentPoint.clone(),new lt(t,e),new lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new wr(this.currentPoint.clone(),new lt(t,e),new lt(i,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Pr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ns(t,e,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Qi=class extends Ir{constructor(t){super(t),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ir().fromJSON(s))}return this}};function sp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=gf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=cp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=n[u],p=n[u+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>f&&(f=p)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Lr(r,a,e,o,l,c,0),a}function gf(n,t,e,i,s){let r;if(s===yp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=yu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=yu(a/i|0,n[a],n[a+1],r);return r&&Ds(r,r.next)&&(Dr(r),r=r.next),r}function ji(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ds(e,e.next)||Le(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Lr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&pp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?ap(n,i,s,r):rp(n)){t.push(l.i,n.i,c.i),Dr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=op(ji(n),t),Lr(n,t,e,i,s,r,2)):a===2&&lp(n,t,e,i,s,r):Lr(ji(n),t,e,i,s,r,1);break}}}function rp(n){let t=n.prev,e=n,i=n.next;if(Le(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=f&&p.y<=d&&lr(s,o,r,l,a,c,p.x,p.y)&&Le(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ap(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Le(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),p=Math.min(h,f,u),y=Math.max(o,l,c),m=Math.max(h,f,u),g=Ec(d,p,t,e,i),x=Ec(y,m,t,e,i),M=n.prevZ,v=n.nextZ;for(;M&&M.z>=g&&v&&v.z<=x;){if(M.x>=d&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&lr(o,h,l,f,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&lr(o,h,l,f,c,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=g;){if(M.x>=d&&M.x<=y&&M.y>=p&&M.y<=m&&M!==s&&M!==a&&lr(o,h,l,f,c,u,M.x,M.y)&&Le(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&lr(o,h,l,f,c,u,v.x,v.y)&&Le(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function op(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ds(i,s)&&xf(i,e,e.next,s)&&Nr(i,s)&&Nr(s,i)&&(t.push(i.i,e.i,s.i),Dr(e),Dr(e.next),e=n=s),e=e.next}while(e!==n);return ji(e)}function lp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_p(a,o)){let l=vf(a,o);a=ji(a,a.next),l=ji(l,l.next),Lr(a,t,e,i,s,r,0),Lr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function cp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=gf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(gp(c))}s.sort(hp);for(let r=0;r<s.length;r++)e=up(s[r],e);return e}function hp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function up(n,t){let e=fp(n,t);if(!e)return t;let i=vf(e,n);return ji(i,i.next),ji(e,e.next)}function fp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Ds(n,e))return e;do{if(Ds(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&_f(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Nr(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&dp(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function dp(n,t){return Le(n.prev,n,t.prev)<0&&Le(t.next,n,n.next)<0}function pp(n,t,e,i){let s=n;do s.z===0&&(s.z=Ec(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,mp(s)}function mp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Ec(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function gp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function _f(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function lr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&_f(n,t,e,i,s,r,a,o)}function _p(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!xp(n,t)&&(Nr(n,t)&&Nr(t,n)&&vp(n,t)&&(Le(n.prev,n,t.prev)||Le(n,t.prev,t))||Ds(n,t)&&Le(n.prev,n,n.next)>0&&Le(t.prev,t,t.next)>0)}function Le(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ds(n,t){return n.x===t.x&&n.y===t.y}function xf(n,t,e,i){let s=Wa(Le(n,t,e)),r=Wa(Le(n,t,i)),a=Wa(Le(e,i,n)),o=Wa(Le(e,i,t));return!!(s!==r&&a!==o||s===0&&Va(n,e,t)||r===0&&Va(n,i,t)||a===0&&Va(e,n,i)||o===0&&Va(e,t,i))}function Va(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Wa(n){return n>0?1:n<0?-1:0}function xp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Nr(n,t){return Le(n.prev,n,n.next)<0?Le(n,t,n.next)>=0&&Le(n,n.prev,t)>=0:Le(n,t,n.prev)<0||Le(n,n.next,t)<0}function vp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function vf(n,t){let e=Tc(n.i,n.x,n.y),i=Tc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function yu(n,t,e,i){let s=Tc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Tc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function yp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var wc=class{static triangulate(t,e,i=2){return sp(t,e,i)}},Ji=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Mu(t),Su(i,t);let a=t.length;e.forEach(Mu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Su(i,e[l]);let o=wc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Su(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Us=class n extends pe{constructor(t=new Qi([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Bt(s,3)),this.setAttribute("uv",new Bt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Mp,M,v=!1,A,T,_,b;if(g){M=g.getSpacedPoints(h),v=!0,u=!1;let at=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,at),T=new D,_=new D,b=new D}u||(m=0,d=0,p=0,y=0);let N=o.extractPoints(c),P=N.shape,U=N.holes;if(!Ji.isClockWise(P)){P=P.reverse();for(let at=0,gt=U.length;at<gt;at++){let mt=U[at];Ji.isClockWise(mt)&&(U[at]=mt.reverse())}}function Y(at){let mt=10000000000000001e-36,At=at[0];for(let xt=1;xt<=at.length;xt++){let Zt=xt%at.length,Ft=at[Zt],ne=Ft.x-At.x,ae=Ft.y-At.y,he=ne*ne+ae*ae,z=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(At.x),Math.abs(At.y)),Te=mt*z*z;if(he<=Te){at.splice(Zt,1),xt--;continue}At=Ft}}Y(P),U.forEach(Y);let I=U.length,G=P;for(let at=0;at<I;at++){let gt=U[at];P=P.concat(gt)}function K(at,gt,mt){return gt||Yt("ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(gt,mt)}let V=P.length;function ht(at,gt,mt){let At,xt,Zt,Ft=at.x-gt.x,ne=at.y-gt.y,ae=mt.x-at.x,he=mt.y-at.y,z=Ft*Ft+ne*ne,Te=Ft*he-ne*ae;if(Math.abs(Te)>Number.EPSILON){let te=Math.sqrt(z),ge=Math.sqrt(ae*ae+he*he),_t=gt.x-ne/te,Ce=gt.y+Ft/te,Wt=mt.x-he/ge,Xt=mt.y+ae/ge,R=((Wt-_t)*he-(Xt-Ce)*ae)/(Ft*he-ne*ae);At=_t+Ft*R-at.x,xt=Ce+ne*R-at.y;let S=At*At+xt*xt;if(S<=2)return new lt(At,xt);Zt=Math.sqrt(S/2)}else{let te=!1;Ft>Number.EPSILON?ae>Number.EPSILON&&(te=!0):Ft<-Number.EPSILON?ae<-Number.EPSILON&&(te=!0):Math.sign(ne)===Math.sign(he)&&(te=!0),te?(At=-ne,xt=Ft,Zt=Math.sqrt(z)):(At=Ft,xt=ne,Zt=Math.sqrt(z/2))}return new lt(At/Zt,xt/Zt)}let $=[];for(let at=0,gt=G.length,mt=gt-1,At=at+1;at<gt;at++,mt++,At++)mt===gt&&(mt=0),At===gt&&(At=0),$[at]=ht(G[at],G[mt],G[At]);let it=[],rt,Tt=$.concat();for(let at=0,gt=I;at<gt;at++){let mt=U[at];rt=[];for(let At=0,xt=mt.length,Zt=xt-1,Ft=At+1;At<xt;At++,Zt++,Ft++)Zt===xt&&(Zt=0),Ft===xt&&(Ft=0),rt[At]=ht(mt[At],mt[Zt],mt[Ft]);it.push(rt),Tt=Tt.concat(rt)}let kt;if(m===0)kt=Ji.triangulateShape(G,U);else{let at=[],gt=[];for(let mt=0;mt<m;mt++){let At=mt/m,xt=d*Math.cos(At*Math.PI/2),Zt=p*Math.sin(At*Math.PI/2)+y;for(let Ft=0,ne=G.length;Ft<ne;Ft++){let ae=K(G[Ft],$[Ft],Zt);Dt(ae.x,ae.y,-xt),At===0&&at.push(ae)}for(let Ft=0,ne=I;Ft<ne;Ft++){let ae=U[Ft];rt=it[Ft];let he=[];for(let z=0,Te=ae.length;z<Te;z++){let te=K(ae[z],rt[z],Zt);Dt(te.x,te.y,-xt),At===0&&he.push(te)}At===0&&gt.push(he)}}kt=Ji.triangulateShape(at,gt)}let nt=kt.length,Mt=p+y;for(let at=0;at<V;at++){let gt=u?K(P[at],Tt[at],Mt):P[at];v?(_.copy(A.normals[0]).multiplyScalar(gt.x),T.copy(A.binormals[0]).multiplyScalar(gt.y),b.copy(M[0]).add(_).add(T),Dt(b.x,b.y,b.z)):Dt(gt.x,gt.y,0)}for(let at=1;at<=h;at++)for(let gt=0;gt<V;gt++){let mt=u?K(P[gt],Tt[gt],Mt):P[gt];v?(_.copy(A.normals[at]).multiplyScalar(mt.x),T.copy(A.binormals[at]).multiplyScalar(mt.y),b.copy(M[at]).add(_).add(T),Dt(b.x,b.y,b.z)):Dt(mt.x,mt.y,f/h*at)}for(let at=m-1;at>=0;at--){let gt=at/m,mt=d*Math.cos(gt*Math.PI/2),At=p*Math.sin(gt*Math.PI/2)+y;for(let xt=0,Zt=G.length;xt<Zt;xt++){let Ft=K(G[xt],$[xt],At);Dt(Ft.x,Ft.y,f+mt)}for(let xt=0,Zt=U.length;xt<Zt;xt++){let Ft=U[xt];rt=it[xt];for(let ne=0,ae=Ft.length;ne<ae;ne++){let he=K(Ft[ne],rt[ne],At);v?Dt(he.x,he.y+M[h-1].y,M[h-1].x+mt):Dt(he.x,he.y,f+mt)}}}Rt(),Vt();function Rt(){let at=s.length/3;if(u){let gt=0,mt=V*gt;for(let At=0;At<nt;At++){let xt=kt[At];fe(xt[2]+mt,xt[1]+mt,xt[0]+mt)}gt=h+m*2,mt=V*gt;for(let At=0;At<nt;At++){let xt=kt[At];fe(xt[0]+mt,xt[1]+mt,xt[2]+mt)}}else{for(let gt=0;gt<nt;gt++){let mt=kt[gt];fe(mt[2],mt[1],mt[0])}for(let gt=0;gt<nt;gt++){let mt=kt[gt];fe(mt[0]+V*h,mt[1]+V*h,mt[2]+V*h)}}i.addGroup(at,s.length/3-at,0)}function Vt(){let at=s.length/3,gt=0;St(G,gt),gt+=G.length;for(let mt=0,At=U.length;mt<At;mt++){let xt=U[mt];St(xt,gt),gt+=xt.length}i.addGroup(at,s.length/3-at,1)}function St(at,gt){let mt=at.length;for(;--mt>=0;){let At=mt,xt=mt-1;xt<0&&(xt=at.length-1);for(let Zt=0,Ft=h+m*2;Zt<Ft;Zt++){let ne=V*Zt,ae=V*(Zt+1),he=gt+At+ne,z=gt+xt+ne,Te=gt+xt+ae,te=gt+At+ae;Ut(he,z,Te,te)}}}function Dt(at,gt,mt){l.push(at),l.push(gt),l.push(mt)}function fe(at,gt,mt){jt(at),jt(gt),jt(mt);let At=s.length/3,xt=x.generateTopUV(i,s,At-3,At-2,At-1);ee(xt[0]),ee(xt[1]),ee(xt[2])}function Ut(at,gt,mt,At){jt(at),jt(gt),jt(At),jt(gt),jt(mt),jt(At);let xt=s.length/3,Zt=x.generateSideWallUV(i,s,xt-6,xt-3,xt-2,xt-1);ee(Zt[0]),ee(Zt[1]),ee(Zt[3]),ee(Zt[1]),ee(Zt[2]),ee(Zt[3])}function jt(at){s.push(l[at*3+0]),s.push(l[at*3+1]),s.push(l[at*3+2])}function ee(at){r.push(at.x),r.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Sp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new go[s.type]().fromJSON(s)),new n(i,t.options)}},Mp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],f=t[i*3+2],u=t[s*3],d=t[s*3+1],p=t[s*3+2],y=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-f),new lt(u,1-p),new lt(y,1-g)]:[new lt(o,1-l),new lt(h,1-f),new lt(d,1-p),new lt(m,1-g)]}};function Sp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ur=class n extends uo{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Fr=class n extends pe{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new D,u=new lt,d=new D,p=new D,y=new D,m=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-m,d.z=g*0,y.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=y.x,d.y+=y.y,d.z+=y.z,d.normalize(),l.push(d.x,d.y,d.z),y.copy(p)}for(let x=0;x<=e;x++){let M=i+x*h*s,v=Math.sin(M),A=Math.cos(M);for(let T=0;T<=t.length-1;T++){f.x=t[T].x*v,f.y=t[T].y,f.z=t[T].x*A,a.push(f.x,f.y,f.z),u.x=x/e,u.y=T/(t.length-1),o.push(u.x,u.y);let _=l[3*T+0]*v,b=l[3*T+1],N=l[3*T+0]*A;c.push(_,b,N)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){let v=M+x*t.length,A=v,T=v+t.length,_=v+t.length+1,b=v+1;r.push(A,T,b),r.push(_,b,T)}this.setIndex(r),this.setAttribute("position",new Bt(a,3)),this.setAttribute("uv",new Bt(o,2)),this.setAttribute("normal",new Bt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Ae=class n extends pe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],p=[],y=[],m=[];for(let g=0;g<h;g++){let x=g*u-a;for(let M=0;M<c;M++){let v=M*f-r;p.push(v,-x,0),y.push(0,0,1),m.push(M/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){let M=x+c*g,v=x+c*(g+1),A=x+1+c*(g+1),T=x+1+c*g;d.push(M,v,T),d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Fs=class n extends pe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new D,p=new lt;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let g=r+m/i*a;d.x=f*Math.cos(g),d.y=f*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}f+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let g=0;g<i;g++){let x=g+m,M=x,v=x+i+1,A=x+i+2,T=x+1;o.push(M,v,T),o.push(v,A,T)}}this.setIndex(o),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ii=class n extends pe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let x=[],M=g/i,v=a+M*o,A=t*Math.cos(v),T=Math.sqrt(t*t-A*A),_=0;g===0&&a===0?_=.5/e:g===i&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let N=b/e,P=s+N*r;f.x=-T*Math.cos(P),f.y=A,f.z=T*Math.sin(P),p.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(N+_,1-M),x.push(c++)}h.push(x)}for(let g=0;g<i;g++)for(let x=0;x<e;x++){let M=h[g][x+1],v=h[g][x],A=h[g+1][x],T=h[g+1][x+1];(g!==0||a>0)&&d.push(M,v,T),(g!==i-1||l<Math.PI)&&d.push(v,A,T)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(y,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ts=class n extends pe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,p=new D;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let g=0;g<=s;g++){let x=g/s*r;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(x),u.y=t*Math.sin(x),p.subVectors(d,u).normalize(),h.push(p.x,p.y,p.z),f.push(g/s),f.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,M=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(g,x,v),l.push(x,M,v)}this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Or=class n extends pe{constructor(t=new Cr(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new lt,h=new D,f=[],u=[],d=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function y(){for(let M=0;M<e;M++)m(M);m(r===!1?e:0),x(),g()}function m(M){h=t.getPointAt(M/e,h);let v=a.normals[M],A=a.binormals[M];for(let T=0;T<=s;T++){let _=T/s*Math.PI*2,b=Math.sin(_),N=-Math.cos(_);l.x=N*v.x+b*A.x,l.y=N*v.y+b*A.y,l.z=N*v.z+b*A.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function g(){for(let M=1;M<=e;M++)for(let v=1;v<=s;v++){let A=(s+1)*(M-1)+(v-1),T=(s+1)*M+(v-1),_=(s+1)*M+v,b=(s+1)*(M-1)+v;p.push(A,T,b),p.push(T,_,b)}}function x(){for(let M=0;M<=e;M++)for(let v=0;v<=s;v++)c.x=M/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function os(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(bu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(bu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function nn(n){let t={};for(let e=0;e<n.length;e++){let i=os(n[e]);for(let s in i)t[s]=i[s]}return t}function bu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function bp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function $c(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var gi={clone:os,merge:nn},Ep=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ep,this.fragmentShader=Tp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ve().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Os=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Bs=class extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return $i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){$i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var xo=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vo=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ms(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Xa(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},yo=class extends Li{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=t,o=2*e-i;break;case Sc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=t,l=2*i-e;break;case Sc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),y=p*p,m=y*p,g=-u*m+2*u*y-u*p,x=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*p+1,M=(-1-d)*m+(1.5+d)*y+.5*p,v=d*m-d*y;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+x*a[c+A]+M*a[l+A]+v*a[f+A];return r}},Mo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},So=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bo=class extends Li{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let p=(i-e)/(s-e),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let u=o*2,d=t-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=d*u+p*2,x=f[g],M=f[g+1],v=t*u+p*2,A=h[v],T=h[v+1],_=Ap(i,e,x,A,s);r[p]=yf(_,y,M,T,m)}return r}};function yf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function wp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Ap(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=yf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=wp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Sn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ms(e,this.TimeBufferType),this.values=Ms(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Ms(t.times,Array),values:Ms(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Xa(t.settings)&&(i.settings={inTangents:Ms(t.settings.inTangents,Array),outTangents:Ms(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new So(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new bo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ur:e=this.InterpolantFactoryMethodDiscrete;break;case so:e=this.InterpolantFactoryMethodLinear;break;case Za:e=this.InterpolantFactoryMethodSmooth;break;case vc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return so;case this.InterpolantFactoryMethodSmooth:return Za;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Xa(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Xa(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Rd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Za,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let p=0;p!==i;++p){let y=e[f+p];if(y!==e[u+p]||y!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Xa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Tu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=so;var Ni=class extends Sn{constructor(t,e,i){super(t,e,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=ur;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};Eo.prototype.ValueTypeName="color";var To=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};To.prototype.ValueTypeName="number";var wo=class extends Li{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Di=class extends Sn{constructor(t,e,i){super(t,e,i)}};Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=ur;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Sn{constructor(t,e,i,s){super(t,e,i,s)}};Ao.prototype.ValueTypeName="vector";var Ro=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Mf=new Ro,Co=class{constructor(t){this.manager=t!==void 0?t:Mf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Co.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},kr=class extends zr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xc=new ve,wu=new D,Au=new D,Po=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ci,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Au),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(xc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qa=new D,Ya=new dn,Vn=new D,Hr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(qa,Ya,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(qa,Ya,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qa,Ya,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new D,Ru=new lt,Cu=new lt,on=class extends Hr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ro*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Ru,Cu),e.subVectors(Cu,Ru)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var es=class extends Hr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ac=class extends Po{constructor(){super(new es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ss=-90,bs=1,zs=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new on(Ss,bs,t,e);s.layers=this.layers,this.add(s);let r=new on(Ss,bs,t,e);r.layers=this.layers,this.add(r);let a=new on(Ss,bs,t,e);a.layers=this.layers,this.add(a);let o=new on(Ss,bs,t,e);o.layers=this.layers,this.add(o);let l=new on(Ss,bs,t,e);l.layers=this.layers,this.add(l);let c=new on(Ss,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Io=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Vr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Rp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Rp(){this._document.hidden===!1&&this.reset()}var Kc="\\[\\]\\.:\\/",Cp=new RegExp("["+Kc+"]","g"),Qc="[^"+Kc+"]",Pp="[^"+Kc.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Lp=/(WCOD+)?/.source.replace("WCOD",Pp),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),Dp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Up=new RegExp("^"+Ip+Lp+Np+Dp+"$"),Fp=["material","materials","bones","map"],Rc=class{constructor(t,e,i){let s=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(t){let e=Up.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Fp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Rc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);var sh=class sh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};sh.prototype.isMatrix2=!0;var Cc=sh;function jc(n,t,e,i){let s=Op(i);switch(e){case Hc:return n*t;case zo:return n*t/s.components*s.byteLength;case ko:return n*t/s.components*s.byteLength;case Oi:return n*t*2/s.components*s.byteLength;case Ho:return n*t*2/s.components*s.byteLength;case Gc:return n*t*3/s.components*s.byteLength;case kn:return n*t*4/s.components*s.byteLength;case Go:return n*t*4/s.components*s.byteLength;case Kr:case Qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jr:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wo:case qo:return Math.max(n,16)*Math.max(t,8)/4;case Vo:case Xo:return Math.max(n,8)*Math.max(t,8)/2;case Yo:case Zo:case $o:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Jo:case ea:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case dl:case pl:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16;case gl:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*8;case na:case xl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Op(n){switch(n){case mn:case Oc:return{byteLength:1,components:1};case Gs:case Bc:case He:return{byteLength:2,components:1};case Oo:case Bo:return{byteLength:2,components:4};case zn:case Fo:case gn:return{byteLength:4,components:1};case zc:case kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Vf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Xp(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<f.length;d++){let p=f[u],y=f[d];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,p=f.length;d<p;d++){let y=f[d];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
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
#endif`,em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,wm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lm=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,km=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$m=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
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
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lg=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform float backgroundBlurriness;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$g=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,v0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:Jp,alphatest_fragment:$p,alphatest_pars_fragment:Kp,aomap_fragment:Qp,aomap_pars_fragment:jp,batching_pars_vertex:tm,batching_vertex:em,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:fm,color_pars_vertex:dm,color_vertex:pm,common:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:vm,emissivemap_pars_fragment:ym,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Tm,envmap_pars_vertex:wm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Pm,fog_pars_fragment:Im,gradientmap_pars_fragment:Lm,lightmap_pars_fragment:Nm,lights_lambert_fragment:Dm,lights_lambert_pars_fragment:Um,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:km,lights_phong_pars_fragment:Hm,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:Jm,logdepthbuf_pars_vertex:$m,logdepthbuf_vertex:Km,map_fragment:Qm,map_pars_fragment:jm,map_particle_fragment:tg,map_particle_pars_fragment:eg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:ag,morphtarget_pars_vertex:og,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:xg,opaque_fragment:vg,packing:yg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:bg,dithering_pars_fragment:Eg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:wg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Pg,skinbase_vertex:Ig,skinning_pars_vertex:Lg,skinning_vertex:Ng,skinnormal_vertex:Dg,specularmap_fragment:Ug,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:kg,uv_pars_fragment:Hg,uv_pars_vertex:Gg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:Jg,cube_frag:$g,depth_vert:Kg,depth_frag:Qg,distance_vert:jg,distance_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:v0,points_frag:y0,shadow_vert:M0,shadow_frag:S0,sprite_vert:b0,sprite_frag:E0},bt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$n={basic:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:nn([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:nn([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:nn([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:nn([bt.points,bt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:nn([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:nn([bt.common,bt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:nn([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:nn([bt.sprite,bt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:nn([bt.common,bt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:nn([bt.lights,bt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};$n.physical={uniforms:nn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var yl={r:0,b:0,g:0},T0=new ve,Wf=new $t;Wf.set(-1,0,0,0,1,0,0,0,1);function w0(n,t,e,i,s,r){let a=new Pt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let v=x.backgroundBlurriness>0;M=t.get(M,v)}return M}function p(x){let M=!1,v=d(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),M=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(x,M){let v=d(M);v&&v.isCubeTexture?(c===void 0&&(c=new Nt(new ye(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:os($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T0.makeRotationFromEuler(M.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wf),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==de,(h!==v||f!==v.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new Ae(2,2),new De({name:"BackgroundMaterial",uniforms:os($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(yl,$c(n)),e.buffers.color.setClear(yl.r,yl.g,yl.b,M,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,M=1){a.set(x),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:p,addToRenderList:y,dispose:g}}function A0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(U,H,Y,I,G){let K=!1,V=f(U,I,Y,H);r!==V&&(r=V,c(r.object)),K=d(U,I,Y,G),K&&p(U,I,Y,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(U,H,Y,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function f(U,H,Y,I){let G=I.wireframe===!0,K=i[H.id];K===void 0&&(K={},i[H.id]=K);let V=U.isInstancedMesh===!0?U.id:0,ht=K[V];ht===void 0&&(ht={},K[V]=ht);let $=ht[Y.id];$===void 0&&($={},ht[Y.id]=$);let it=$[G];return it===void 0&&(it=u(l()),$[G]=it),it}function u(U){let H=[],Y=[],I=[];for(let G=0;G<e;G++)H[G]=0,Y[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:I,object:U,attributes:{},index:null}}function d(U,H,Y,I){let G=r.attributes,K=H.attributes,V=0,ht=Y.getAttributes();for(let $ in ht)if(ht[$].location>=0){let rt=G[$],Tt=K[$];if(Tt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Tt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Tt=U.instanceColor)),rt===void 0||rt.attribute!==Tt||Tt&&rt.data!==Tt.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function p(U,H,Y,I){let G={},K=H.attributes,V=0,ht=Y.getAttributes();for(let $ in ht)if(ht[$].location>=0){let rt=K[$];rt===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor));let Tt={};Tt.attribute=rt,rt&&rt.data&&(Tt.data=rt.data),G[$]=Tt,V++}r.attributes=G,r.attributesNum=V,r.index=I}function y(){let U=r.newAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]=0}function m(U){g(U,0)}function g(U,H){let Y=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;Y[U]=1,I[U]===0&&(n.enableVertexAttribArray(U),I[U]=1),G[U]!==H&&(n.vertexAttribDivisor(U,H),G[U]=H)}function x(){let U=r.newAttributes,H=r.enabledAttributes;for(let Y=0,I=H.length;Y<I;Y++)H[Y]!==U[Y]&&(n.disableVertexAttribArray(Y),H[Y]=0)}function M(U,H,Y,I,G,K,V){V===!0?n.vertexAttribIPointer(U,H,Y,G,K):n.vertexAttribPointer(U,H,Y,I,G,K)}function v(U,H,Y,I){y();let G=I.attributes,K=Y.getAttributes(),V=H.defaultAttributeValues;for(let ht in K){let $=K[ht];if($.location>=0){let it=G[ht];if(it===void 0&&(ht==="instanceMatrix"&&U.instanceMatrix&&(it=U.instanceMatrix),ht==="instanceColor"&&U.instanceColor&&(it=U.instanceColor)),it!==void 0){let rt=it.normalized,Tt=it.itemSize,kt=t.get(it);if(kt===void 0)continue;let nt=kt.buffer,Mt=kt.type,Rt=kt.bytesPerElement,Vt=Mt===n.INT||Mt===n.UNSIGNED_INT||it.gpuType===Fo;if(it.isInterleavedBufferAttribute){let St=it.data,Dt=St.isInterleavedBuffer===!0?St.stride:St.itemSize,fe=it.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ut=0;Ut<$.locationSize;Ut++)g($.location+Ut,St.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)m($.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Ut=0;Ut<$.locationSize;Ut++)M($.location+Ut,Tt/$.locationSize,Mt,rt,Dt*Rt,(fe+Tt/$.locationSize*Ut)*Rt,Vt)}else{if(it.isInstancedBufferAttribute){for(let St=0;St<$.locationSize;St++)g($.location+St,it.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<$.locationSize;St++)m($.location+St);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let St=0;St<$.locationSize;St++)M($.location+St,Tt/$.locationSize,Mt,rt,Tt*Rt,Tt/$.locationSize*St*Rt,Vt)}}else if(V!==void 0){let rt=V[ht];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv($.location,rt);break;case 3:n.vertexAttrib3fv($.location,rt);break;case 4:n.vertexAttrib4fv($.location,rt);break;default:n.vertexAttrib1fv($.location,rt)}}}}x()}function A(){N();for(let U in i){let H=i[U];for(let Y in H){let I=H[Y];for(let G in I){let K=I[G];for(let V in K)h(K[V].object),delete K[V];delete I[G]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;let H=i[U.id];for(let Y in H){let I=H[Y];for(let G in I){let K=I[G];for(let V in K)h(K[V].object),delete K[V];delete I[G]}}delete i[U.id]}function _(U){for(let H in i){let Y=i[H];for(let I in Y){let G=Y[I];if(G[U.id]===void 0)continue;let K=G[U.id];for(let V in K)h(K[V].object),delete K[V];delete G[U.id]}}}function b(U){for(let H in i){let Y=i[H],I=U.isInstancedMesh===!0?U.id:0,G=Y[I];if(G!==void 0){for(let K in G){let V=G[K];for(let ht in V)h(V[ht].object),delete V[ht];delete G[K]}delete Y[I],Object.keys(Y).length===0&&delete i[H]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function R0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function C0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===He&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==mn&&_!==gn&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:v,maxSamples:A,samples:T}}function P0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Un,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let p=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,g=n.get(f);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let x=r?0:i,M=x*4,v=g.clippingState||null;l.value=v,v=h(p,u,M,d);for(let A=0;A!==M;++A)v[A]=e[A];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,p){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=d+y*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,v=d;M!==y;++M,v+=4)a.copy(f[M]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ra=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new br(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ye(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:ui});r.uniforms.tEquirect.value=e;let a=new Nt(s,r),o=e.minFilter;return e.minFilter===di&&(e.minFilter=ln),new zs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Sf=256,I0=3,L0=20,Xf=256,qf=16,N0=3,D0=new D,U0=new Pt,qs=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new Nt(new ye(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=D0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(U0));let m=new zs(i,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=p,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Sf,pf(t))}_fromTexture(t,e){t.mapping===rs||t.mapping===Hs?this._setSize(t.image.length===0?Sf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=bf(t,!1,!1),i=Math.log2(t)-I0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=bf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===rs||t.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ef()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=F0(),this._integrationMaterial=O0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/qf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-N0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Xf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=B0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function bf(n,t,e){return new ra(n,{minFilter:di,generateMipmaps:t,type:He,colorSpace:fr,depthBuffer:e})}function aa(n,t,e){return new De({name:n,uniforms:t,vertexShader:ie.cube_vert,fragmentShader:e,side:Je,blending:ui,depthTest:!1,depthWrite:!1})}function F0(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

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
	`)}function O0(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:qf}},`

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
	`)}function B0(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${L0}
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
	`)}function Ef(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Tf(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===No||d===Do)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let y=new ra(p.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,p=d===No||d===Do,y=d===rs||d===Hs;if(p||y){let m=e.get(u),g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return i===null&&(i=new qs(n)),m=p?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let x=u.image;return p&&x&&x.height>0||y&&x&&l(x)?(i===null&&(i=new qs(n)),m=p?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===No?u.mapping=rs:d===Do&&(u.mapping=Hs),u}function l(u){let d=0,p=6;for(let y=0;y<p;y++)u[y]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function k0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&$i("WebGLRenderer: "+i+" extension not supported."),s}}}function H0(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let y=r.get(p);y&&(t.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(p){let y=p.attributes;for(let m in y)t.update(y[m],n.ARRAY_BUFFER)}function f(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let x=y!==null?y.array.length:m.array.length/3-1,M=m.count>=65535?vr:xr,v=new M(Math.ceil(x/3)*6,1),A=v.array;if(y!==null){let _=y.array;g=y.version;for(let b=0,N=0;b<x;b+=3){let P=_[b+0],U=_[b+1],H=_[b+2];A[N++]=P,A[N++]=U,A[N++]=U,A[N++]=H,A[N++]=H,A[N++]=P}}else{g=m.version;for(let _=0,b=0;_<x;_+=3){let N=_+0,P=_+1,U=_+2;A[b++]=N,A[b++]=P,A[b++]=P,A[b++]=U,A[b++]=U,A[b++]=N}}v.version=g;let T=r.get(p);T&&t.remove(T),r.set(p,v)}function u(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&f(p)}else f(p);return r.get(p)}function d(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function G0(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function V0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function W0(n,t,e){let i=new WeakMap,s=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],M=0;d===!0&&(M=1),p===!0&&(M=2),y===!0&&(M=3);let v=o.attributes.position.count*M,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*A*4*f),_=new mr(T,v,A,f);_.type=gn,_.needsUpdate=!0;let b=M*4;for(let P=0;P<f;P++){let U=m[P],H=g[P],Y=x[P],I=v*A*4*P;for(let G=0;G<U.count;G++){let K=G*b;d===!0&&(s.fromBufferAttribute(U,G),T[I+K+0]=s.x,T[I+K+1]=s.y,T[I+K+2]=s.z,T[I+K+3]=0),p===!0&&(s.fromBufferAttribute(H,G),T[I+K+4]=s.x,T[I+K+5]=s.y,T[I+K+6]=s.z,T[I+K+7]=0),y===!0&&(s.fromBufferAttribute(Y,G),T[I+K+8]=s.x,T[I+K+9]=s.y,T[I+K+10]=s.z,T[I+K+11]=Y.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new lt(v,A)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function X0(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var q0={[Wr]:"LINEAR_TONE_MAPPING",[Xr]:"REINHARD_TONE_MAPPING",[qr]:"CINEON_TONE_MAPPING",[ss]:"ACES_FILMIC_TONE_MAPPING",[Zr]:"AGX_TONE_MAPPING",[Jr]:"NEUTRAL_TONE_MAPPING",[Yr]:"CUSTOM_TONE_MAPPING"};function Y0(n,t,e,i,s,r){let a=new Fe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new pe;h.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let f=new Os({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Nt(h,f),d=new es(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,x=null,M=[],v=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<M.length;_++){let b=M[_];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){M=A,v=M.length>0&&M[0].isRenderPass===!0;let T=a.width,_=a.height;M.length>0&&o===null&&(o=new Fe(T,_,{type:He,depthBuffer:!1,stencilBuffer:!1}),l=new Fe(T,_,{type:He,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&M.some(N=>N.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Bn(T,_),r===!0&&(c.format=pi,c.type=as)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let N=0;N<M.length;N++){let P=M[N];P.setSize&&P.setSize(T,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===Zn&&M.length===0)return!1;if(x=T,T!==null){let _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return v===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(A,T){A.toneMapping=g,m=!0;let _=a,b=o;for(let N=0;N<M.length;N++){let P=M[N];P.enabled!==!1&&(P.render(A,b,_,T),P.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==A.outputColorSpace||y!==A.toneMapping){p=A.outputColorSpace,y=A.toneMapping,f.defines={},oe.getTransfer(p)===de&&(f.defines.SRGB_TRANSFER="");let N=q0[y];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(u,d),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var Yf=new cn,Zf=new Bn(1,1),Jf=new Er(1),$f=new mr,Kf=new lo,Qf=new br,wf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function Ys(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=wf[s];if(r===void 0&&(r=new Float32Array(s),wf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function bl(n,t){let e=Af[t];e===void 0&&(e=new Int32Array(t),Af[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Z0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function J0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function $0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function K0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function Q0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;Pf.set(i),n.uniformMatrix2fv(this.addr,!1,Pf),Ve(e,i)}}function j0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;Cf.set(i),n.uniformMatrix3fv(this.addr,!1,Cf),Ve(e,i)}}function t_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,i))return;Rf.set(i),n.uniformMatrix4fv(this.addr,!1,Rf),Ve(e,i)}}function e_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function n_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function i_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function s_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function r_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function a_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function o_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function l_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function El(n){return n.version===0&&(n.compareFunction=Xc,n.needsUpdate=!0),n}function c_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=El(Zf):r=Yf,e.setTexture2D(t||r,s)}function h_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Kf,s)}function u_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=El(Jf):r=Qf,e.setTextureCube(t||r,s)}function f_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$f,s)}function d_(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return $0;case 35666:return K0;case 35674:return Q0;case 35675:return j0;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return f_}}function p_(n,t){n.uniform1fv(this.addr,t)}function m_(n,t){let e=Ys(t,this.size,2);n.uniform2fv(this.addr,e)}function g_(n,t){let e=Ys(t,this.size,3);n.uniform3fv(this.addr,e)}function __(n,t){let e=Ys(t,this.size,4);n.uniform4fv(this.addr,e)}function x_(n,t){let e=Ys(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function v_(n,t){let e=Ys(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function y_(n,t){let e=Ys(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function M_(n,t){n.uniform1iv(this.addr,t)}function S_(n,t){n.uniform2iv(this.addr,t)}function b_(n,t){n.uniform3iv(this.addr,t)}function E_(n,t){n.uniform4iv(this.addr,t)}function T_(n,t){n.uniform1uiv(this.addr,t)}function w_(n,t){n.uniform2uiv(this.addr,t)}function A_(n,t){n.uniform3uiv(this.addr,t)}function R_(n,t){n.uniform4uiv(this.addr,t)}function C_(n,t,e){let i=this.cache,s=t.length,r=bl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=El(Zf):a=Yf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function P_(n,t,e){let i=this.cache,s=t.length,r=bl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Kf,r[a])}function I_(n,t,e){let i=this.cache,s=t.length,r=bl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=El(Jf):a=Qf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function L_(n,t,e){let i=this.cache,s=t.length,r=bl(e,s);Ge(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$f,r[a])}function N_(n){switch(n){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return v_;case 35676:return y_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return w_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return I_;case 36289:case 36303:case 36311:case 36292:return L_}}var oh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=d_(e.type)}},lh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=N_(e.type)}},ch=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},rh=/(\w+)(\])?(\[|\.)?/g;function If(n,t){n.seq.push(t),n.map[t.id]=t}function D_(n,t,e){let i=n.name,s=i.length;for(rh.lastIndex=0;;){let r=rh.exec(i),a=rh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){If(e,c===void 0?new oh(o,n,t):new lh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new ch(o),If(e,f)),e=f}}}var Xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);D_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Lf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var U_=37297,F_=0;function O_(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Nf=new $t;function B_(n){oe._getMatrix(Nf,oe.workingColorSpace,n);let t=`mat3( ${Nf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case dr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Df(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+O_(n.getShaderSource(t),o)}else return r}function z_(n,t){let e=B_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var k_={[Wr]:"Linear",[Xr]:"Reinhard",[qr]:"Cineon",[ss]:"ACESFilmic",[Zr]:"AgX",[Jr]:"Neutral",[Yr]:"Custom"};function H_(n,t){let e=k_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new D;function G_(){oe.getLuminanceCoefficients(Ml);let n=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function W_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function X_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function sa(n){return n!==""}function Uf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ff(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(n){return n.replace(q_,Y_)}function Y_(n,t){let e=ie[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return hh(e)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(n){return n.replace(Z_,J_)}function J_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Bf(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var $_={[ns]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function K_(n){return $_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q_={[Hs]:"ENVMAP_MODE_REFRACTION"};function j_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var tx={[Uc]:"ENVMAP_BLENDING_MULTIPLY",[Ku]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function ex(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tx[n.combine]||"ENVMAP_BLENDING_NONE"}function nx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=K_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=j_(e),f=ex(e),u=V_(e),d=W_(r),p=s.createProgram(),y,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(sa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(y=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[Bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Zn?H_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,z_("linearToOutputTexel",e.outputColorSpace),G_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sa).join(`
`)),a=hh(a),a=Uf(a,e),a=Ff(a,e),o=hh(o),o=Uf(o,e),o=Ff(o,e),a=Of(a),o=Of(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",e.glslVersion===qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=g+y+a,M=g+m+o,v=Lf(s,s.VERTEX_SHADER,x),A=Lf(s,s.FRAGMENT_SHADER,M);s.attachShader(p,v),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(P){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(p)||"",H=s.getShaderInfoLog(v)||"",Y=s.getShaderInfoLog(A)||"",I=U.trim(),G=H.trim(),K=Y.trim(),V=!0,ht=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,A);else{let $=Df(s,v,"vertex"),it=Df(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+$+`
`+it)}else I!==""?qt("WebGLProgram: Program Info Log:",I):(G===""||K==="")&&(ht=!1);ht&&(P.diagnostics={runnable:V,programLog:I,vertexShader:{log:G,prefix:y},fragmentShader:{log:K,prefix:m}})}s.deleteShader(v),s.deleteShader(A),_=new Xs(s,p),b=X_(s,p)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,U_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=F_++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=A,this}var ix=0,uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new fh(t),e.set(t,i)),i}},fh=class{constructor(t){this.id=ix++,this.code=t,this.usedTimes=0}};function sx(n){return n===Oi||n===ea||n===na}function rx(n,t,e,i,s,r){let a=new gr,o=new uh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,N,P,U,H){let Y=P.fog,I=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||G,K),ht=u[_.type],$=i.precision;_.precision!==null&&($=i.getMaxPrecision(_.precision),$!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",$,"instead."));let it=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,rt=it!==void 0?it.length:0,Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let kt,nt,Mt,Rt;if(ht){let pt=$n[ht];kt=pt.vertexShader,nt=pt.fragmentShader}else{kt=_.vertexShader,nt=_.fragmentShader;let pt=o.getVertexShaderStage(_),_e=o.getFragmentShaderStage(_);o.update(_,pt,_e),Mt=pt.id,Rt=_e.id}let Vt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,fe=U.isBatchedMesh===!0,Ut=!!_.map,jt=!!_.matcap,ee=!!V,at=ee&&V.isPMREMTexture===!0,gt=!!_.aoMap,mt=!!_.lightMap,At=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,Zt=!!_.displacementMap,Ft=!!_.emissiveMap,ne=!!_.metalnessMap,ae=!!_.roughnessMap,he=_.anisotropy>0,z=_.clearcoat>0,Te=_.diffuseRoughness>0,te=_.dispersion>0,ge=_.retroreflectivity>0,_t=_.iridescence>0,Ce=_.sheen>0,Wt=_.transmission>0,Xt=he&&!!_.anisotropyMap,R=z&&!!_.clearcoatMap,S=z&&!!_.clearcoatNormalMap,q=z&&!!_.clearcoatRoughnessMap,ut=Te&&!!_.diffuseRoughnessMap,w=_t&&!!_.iridescenceMap,B=_t&&!!_.iridescenceThicknessMap,k=Ce&&!!_.sheenColorMap,L=Ce&&!!_.sheenRoughnessMap,F=!!_.specularMap,tt=!!_.specularColorMap,C=!!_.specularIntensityMap,W=Wt&&!!_.transmissionMap,X=Wt&&!!_.thicknessMap,ot=!!_.gradientMap,Q=!!_.alphaMap,st=_.alphaTest>0,dt=!!_.alphaHash,Ht=!!_.extensions,ct=Zn;_.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(ct=n.toneMapping);let Gt=at?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Jt={shaderID:ht,shaderType:_.type,shaderName:_.name,vertexShader:kt,fragmentShader:nt,defines:_.defines,customVertexShaderID:Mt,customFragmentShaderID:Rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:$,batching:fe,batchingColor:fe&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,outputColorSpace:Vt===null?n.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ut,matcap:jt,envMap:ee,envMapMode:ee&&V.mapping,envMapPMREM:at,envMapMaxLod:at?Gt.length-1:null,envMapSize:at?Gt[0].width:null,aoMap:gt,lightMap:mt,bumpMap:At,normalMap:xt,displacementMap:Zt,emissiveMap:Ft,normalMapObjectSpace:xt&&_.normalMapType===ef,normalMapTangentSpace:xt&&_.normalMapType===vl,packedNormalMap:xt&&_.normalMapType===vl&&sx(_.normalMap.format),metalnessMap:ne,roughnessMap:ae,anisotropy:he,anisotropyMap:Xt,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:Te,diffuseRoughnessMap:ut,dispersion:te,retroreflection:ge,iridescence:_t,iridescenceMap:w,iridescenceThicknessMap:B,sheen:Ce,sheenColorMap:k,sheenRoughnessMap:L,specularMap:F,specularColorMap:tt,specularIntensityMap:C,transmission:Wt,transmissionMap:W,thicknessMap:X,gradientMap:ot,opaque:_.transparent===!1&&_.blending===Fi&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:st,alphaHash:dt,combine:_.combine,mapUv:Ut&&d(_.map.channel),aoMapUv:gt&&d(_.aoMap.channel),lightMapUv:mt&&d(_.lightMap.channel),bumpMapUv:At&&d(_.bumpMap.channel),normalMapUv:xt&&d(_.normalMap.channel),displacementMapUv:Zt&&d(_.displacementMap.channel),emissiveMapUv:Ft&&d(_.emissiveMap.channel),metalnessMapUv:ne&&d(_.metalnessMap.channel),roughnessMapUv:ae&&d(_.roughnessMap.channel),anisotropyMapUv:Xt&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:w&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:B&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:k&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:L&&d(_.sheenRoughnessMap.channel),specularMapUv:F&&d(_.specularMap.channel),specularColorMapUv:tt&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:W&&d(_.transmissionMap.channel),thicknessMapUv:X&&d(_.thicknessMap.channel),alphaMapUv:Q&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||he),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ut||Q),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Tt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ct,decodeVideoTexture:Ut&&_.map.isVideoTexture===!0&&oe.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Ft&&_.emissiveMap.isVideoTexture===!0&&oe.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ht&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&_.extensions.multiDraw===!0||fe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)b.push(N),b.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(b,_),g(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function g(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let b=u[_.type],N;if(b){let P=$n[b];N=gi.clone(P.uniforms)}else N=_.uniforms;return N}function M(_,b){let N=h.get(b);return N!==void 0?++N.usedTimes:(N=new nx(n,b,_,s),c.push(N),h.set(b,N)),N}function v(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:x,acquireProgram:M,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:T}}function ax(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function ox(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function zf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,p,y,m,g){let x=n[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:p,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:g},n[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=p,x.materialVariant=a(u),x.groupOrder=y,x.renderOrder=u.renderOrder,x.z=m,x.group=g),t++,x}function l(u,d,p,y,m,g,x){x.reversedDepth===!0&&(m=-m);let M=o(u,d,p,y,m,g);p.transmission>0?i.push(M):p.transparent===!0?s.push(M):e.push(M)}function c(u,d,p,y,m,g){let x=o(u,d,p,y,m,g);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):e.unshift(x)}function h(u,d){e.length>1&&e.sort(u||ox),i.length>1&&i.sort(d||zf),s.length>1&&s.sort(d||zf)}function f(){for(let u=t,d=n.length;u<d;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function lx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new kf,n.set(i,[a])):s>=r.length?(a=new kf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function cx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new Pt};break;case"SpotLight":e={position:new D,direction:new D,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function hx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var ux=0;function fx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function dx(n){let t=new cx,e=hx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ve,a=new ve;function o(c){let h=0,f=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,p=0,y=0,m=0,g=0,x=0,M=0,v=0,A=0,T=0,_=0,b=0,N=0,P=0;c.sort(fx);for(let H=0,Y=c.length;H<Y;H++){let I=c[H],G=I.color,K=I.intensity,V=I.distance,ht=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Oi?ht=I.shadow.map.texture:ht=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*K,f+=G.g*K,u+=G.b*K;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],K);P++}else if(I.isSunLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),i.sunShadow[p]=rt,i.sunShadowMap[p]=ht;let Tt=it.getViewportCount();for(let kt=0;kt<Tt;kt++)i.sunShadowMatrix[y+kt]=it.getMatrix(kt),i.sunShadowCascade[y+kt]=it._cascadeData[kt];y+=Tt,p++}i.sun[d]=$,d++}else if(I.isDirectionalLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.directionalShadow[m]=rt,i.directionalShadowMap[m]=ht,i.directionalShadowMatrix[m]=I.shadow.matrix,A++}i.directional[m]=$,m++}else if(I.isSpotLight){let $=t.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(G).multiplyScalar(K),$.distance=V,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[x]=$;let it=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,it.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[x]=it.matrix,I.castShadow){let rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,i.spotShadow[x]=rt,i.spotShadowMap[x]=ht,_++}x++}else if(I.isRectAreaLight){let $=t.get(I);$.color.copy(G).multiplyScalar(K),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[M]=$,M++}else if(I.isPointLight){let $=t.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){let it=I.shadow,rt=e.get(I);rt.shadowIntensity=it.intensity,rt.shadowBias=it.bias,rt.shadowNormalBias=it.normalBias,rt.shadowRadius=it.radius,rt.shadowMapSize=it.mapSize,rt.shadowCameraNear=it.camera.near,rt.shadowCameraFar=it.camera.far,i.pointShadow[g]=rt,i.pointShadowMap[g]=ht,i.pointShadowMatrix[g]=I.shadow.matrix,T++}i.point[g]=$,g++}else if(I.isHemisphereLight){let $=t.get(I);$.skyColor.copy(I.color).multiplyScalar(K),$.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[v]=$,v++}}M>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let U=i.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==M||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==_||U.numSpotMaps!==b||U.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=x,i.rectArea.length=M,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-N,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,U.sunLength=d,U.directionalLength=m,U.pointLength=g,U.spotLength=x,U.rectAreaLength=M,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=_,U.numSpotMaps=b,U.numLightProbes=P,i.version=ux++)}function l(c,h){let f=0,u=0,d=0,p=0,y=0,m=0,g=h.matrixWorldInverse;for(let x=0,M=c.length;x<M;x++){let v=c[x];if(v.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),f++}else if(v.isDirectionalLight){let A=i.directional[u];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),u++}else if(v.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function Hf(n){let t=new dx(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function px(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Hf(n),t.set(s,[o])):r>=a.length?(o=new Hf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,_x=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],xx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Gf=new ve,ia=new D,ah=new D;function vx(n,t,e){let i=new Ci,s=new lt,r=new lt,a=new Pe,o=new xo,l=new vo,c={},h=e.maxTextureSize,f={[Ui]:Je,[Je]:Ui,[pn]:pn},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new pe;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ns;let g=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Lu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ns);let N=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ui),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=g!==this.type;Y&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=T.length;I<G;I++){let K=T[I],V=K.shadow;if(V===void 0){qt("WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ht=V.getFrameExtents();s.multiply(ht),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y));let $=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ks){if(K.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Fe(s.x,s.y,{format:Oi,type:He,minFilter:ln,magFilter:ln,generateMipmaps:!1}),V.map.texture.name=K.name+".shadowMap",V.map.depthTexture=new Bn(s.x,s.y,gn),V.map.depthTexture.name=K.name+".shadowMapDepth",V.map.depthTexture.format=li,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ye,V.map.depthTexture.magFilter=Ye}else K.isPointLight?(V.map=new ra(s.x),V.map.depthTexture=new Er(s.x,zn)):(V.map=new Fe(s.x,s.y),V.map.depthTexture=new Bn(s.x,s.y,zn)),V.map.depthTexture.name=K.name+".shadowMap",V.map.depthTexture.format=li,this.type===ns?(V.map.depthTexture.compareFunction=$?Wc:Vc,V.map.depthTexture.minFilter=ln,V.map.depthTexture.magFilter=ln):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Ye,V.map.depthTexture.magFilter=Ye);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let it=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();K.isPointLight!==!0&&V.updateMatrices(K,b);let rt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Tt=0;Tt<it;Tt++){let kt=V.getCamera(Tt);if(K.isPointLight){let nt=V.camera,Mt=V.matrix,Rt=K.distance||nt.far;Rt!==nt.far&&(nt.far=Rt,nt.updateProjectionMatrix()),ia.setFromMatrixPosition(K.matrixWorld),nt.position.copy(ia),ah.copy(nt.position),ah.add(_x[Tt]),nt.up.copy(xx[Tt]),nt.lookAt(ah),nt.updateMatrixWorld(),Mt.makeTranslation(-ia.x,-ia.y,-ia.z),Gf.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Gf,nt.coordinateSystem,nt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Tt),n.clear();else{Tt===0&&(n.setRenderTarget(V.map),n.clear());let nt=V.getViewport(Tt);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),H.viewport(a)}i=V.getFrustum(Tt),v(_,b,kt,K,rt,this.type)}V.isPointLightShadow!==!0&&this.type===ks&&x(V,b),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(N,P,U)};function x(T,_){let b=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Fe(s.x,s.y,{format:Oi,type:He}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(_,null,b,u,y,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(_,null,b,d,y,null)}function M(T,_,b,N){let P=null,U=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=P.uuid,Y=_.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let G=I[Y];G===void 0&&(G=P.clone(),I[Y]=G,_.addEventListener("dispose",A)),P=G}if(P.visible=_.visible,P.wireframe=_.wireframe,N===ks?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=b}return P}function v(T,_,b,N,P,U){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===ks)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let I=t.update(T),G=T.material;if(Array.isArray(G)){let K=I.groups;for(let V=0,ht=K.length;V<ht;V++){let $=K[V],it=G[$.materialIndex];if(it&&it.visible){let rt=M(T,it,N,U);T.onBeforeShadow(n,T,_,b,I,rt,$),n.renderBufferDirect(b,null,I,rt,T,$),T.onAfterShadow(n,T,_,b,I,rt,$)}}}else if(G.visible){let K=M(T,G,N,U);T.onBeforeShadow(n,T,_,b,I,K,null),n.renderBufferDirect(b,null,I,K,T,null),T.onAfterShadow(n,T,_,b,I,K,null)}}let Y=T.children;for(let I=0,G=Y.length;I<G;I++)v(Y[I],_,b,N,P,U)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let N=c[b],P=T.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function yx(n,t){function e(){let C=!1,W=new Pe,X=null,ot=new Pe(0,0,0,0);return{setMask:function(Q){X!==Q&&!C&&(n.colorMask(Q,Q,Q,Q),X=Q)},setLocked:function(Q){C=Q},setClear:function(Q,st,dt,Ht,ct){ct===!0&&(Q*=Ht,st*=Ht,dt*=Ht),W.set(Q,st,dt,Ht),ot.equals(W)===!1&&(n.clearColor(Q,st,dt,Ht),ot.copy(W))},reset:function(){C=!1,X=null,ot.set(-1,0,0,0)}}}function i(){let C=!1,W=!1,X=null,ot=null,Q=null;return{setReversed:function(st){if(W!==st){let dt=t.get("EXT_clip_control");st?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),W=st;let Ht=Q;Q=null,this.setClear(Ht)}},getReversed:function(){return W},setTest:function(st){st?St(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(st){X!==st&&!C&&(n.depthMask(st),X=st)},setFunc:function(st){if(W&&(st=df[st]),ot!==st){switch(st){case $a:n.depthFunc(n.NEVER);break;case Ka:n.depthFunc(n.ALWAYS);break;case Qa:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case ja:n.depthFunc(n.EQUAL);break;case to:n.depthFunc(n.GEQUAL);break;case eo:n.depthFunc(n.GREATER);break;case no:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ot=st}},setLocked:function(st){C=st},setClear:function(st){Q!==st&&(Q=st,W&&(st=1-st),n.clearDepth(st))},reset:function(){C=!1,X=null,ot=null,Q=null,W=!1}}}function s(){let C=!1,W=null,X=null,ot=null,Q=null,st=null,dt=null,Ht=null,ct=null;return{setTest:function(Gt){C||(Gt?St(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Gt){W!==Gt&&!C&&(n.stencilMask(Gt),W=Gt)},setFunc:function(Gt,Jt,pt){(X!==Gt||ot!==Jt||Q!==pt)&&(n.stencilFunc(Gt,Jt,pt),X=Gt,ot=Jt,Q=pt)},setOp:function(Gt,Jt,pt){(st!==Gt||dt!==Jt||Ht!==pt)&&(n.stencilOp(Gt,Jt,pt),st=Gt,dt=Jt,Ht=pt)},setLocked:function(Gt){C=Gt},setClear:function(Gt){ct!==Gt&&(n.clearStencil(Gt),ct=Gt)},reset:function(){C=!1,W=null,X=null,ot=null,Q=null,st=null,dt=null,Ht=null,ct=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,M=null,v=null,A=null,T=null,_=null,b=new Pt(0,0,0),N=0,P=!1,U=null,H=null,Y=null,I=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ht=0,$=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ht=parseFloat(/^WebGL (\d)/.exec($)[1]),V=ht>=1):$.indexOf("OpenGL ES")!==-1&&(ht=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=ht>=2);let it=null,rt={},Tt=n.getParameter(n.SCISSOR_BOX),kt=n.getParameter(n.VIEWPORT),nt=new Pe().fromArray(Tt),Mt=new Pe().fromArray(kt);function Rt(C,W,X,ot){let Q=new Uint8Array(4),st=n.createTexture();n.bindTexture(C,st),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<X;dt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(W,0,n.RGBA,1,1,ot,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(W+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return st}let Vt={};Vt[n.TEXTURE_2D]=Rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Vt[n.TEXTURE_CUBE_MAP]=Rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Vt[n.TEXTURE_2D_ARRAY]=Rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Vt[n.TEXTURE_3D]=Rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(n.DEPTH_TEST),a.setFunc(Ts),At(!1),xt(Pc),St(n.CULL_FACE),gt(ui);function St(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function Dt(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function fe(C,W){return u[C]!==W?(n.bindFramebuffer(C,W),u[C]=W,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=W),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=W),!0):!1}function Ut(C,W){let X=p,ot=!1;if(C){X=d.get(W),X===void 0&&(X=[],d.set(W,X));let Q=C.textures;if(X.length!==Q.length||X[0]!==n.COLOR_ATTACHMENT0){for(let st=0,dt=Q.length;st<dt;st++)X[st]=n.COLOR_ATTACHMENT0+st;X.length=Q.length,ot=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ot=!0);ot&&n.drawBuffers(X)}function jt(C){return y!==C?(n.useProgram(C),y=C,!0):!1}let ee={[is]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Uu]:n.FUNC_REVERSE_SUBTRACT};ee[Fu]=n.MIN,ee[Ou]=n.MAX;let at={[Bu]:n.ZERO,[zu]:n.ONE,[ku]:n.SRC_COLOR,[Nc]:n.SRC_ALPHA,[qu]:n.SRC_ALPHA_SATURATE,[Wu]:n.DST_COLOR,[Gu]:n.DST_ALPHA,[Hu]:n.ONE_MINUS_SRC_COLOR,[Dc]:n.ONE_MINUS_SRC_ALPHA,[Xu]:n.ONE_MINUS_DST_COLOR,[Vu]:n.ONE_MINUS_DST_ALPHA,[Yu]:n.CONSTANT_COLOR,[Zu]:n.ONE_MINUS_CONSTANT_COLOR,[Ju]:n.CONSTANT_ALPHA,[$u]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(C,W,X,ot,Q,st,dt,Ht,ct,Gt){if(C===ui){m===!0&&(Dt(n.BLEND),m=!1);return}if(m===!1&&(St(n.BLEND),m=!0),C!==Nu){if(C!==g||Gt!==P){if((x!==is||A!==is)&&(n.blendEquation(n.FUNC_ADD),x=is,A=is),Gt)switch(C){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",C);break}else switch(C){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ic:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",C);break}M=null,v=null,T=null,_=null,b.set(0,0,0),N=0,g=C,P=Gt}return}Q=Q||W,st=st||X,dt=dt||ot,(W!==x||Q!==A)&&(n.blendEquationSeparate(ee[W],ee[Q]),x=W,A=Q),(X!==M||ot!==v||st!==T||dt!==_)&&(n.blendFuncSeparate(at[X],at[ot],at[st],at[dt]),M=X,v=ot,T=st,_=dt),(Ht.equals(b)===!1||ct!==N)&&(n.blendColor(Ht.r,Ht.g,Ht.b,ct),b.copy(Ht),N=ct),g=C,P=!1}function mt(C,W){C.side===pn?Dt(n.CULL_FACE):St(n.CULL_FACE);let X=C.side===Je;W&&(X=!X),At(X),C.blending===Fi&&C.transparent===!1?gt(ui):gt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ot=C.stencilWrite;o.setTest(ot),ot&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ft(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function At(C){U!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),U=C)}function xt(C){C!==Pu?(St(n.CULL_FACE),C!==H&&(C===Pc?n.cullFace(n.BACK):C===Iu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),H=C}function Zt(C){C!==Y&&(V&&n.lineWidth(C),Y=C)}function Ft(C,W,X){C?(St(n.POLYGON_OFFSET_FILL),(I!==W||G!==X)&&(I=W,G=X,a.getReversed()&&(W=-W,X=-X),n.polygonOffset(W,X))):Dt(n.POLYGON_OFFSET_FILL)}function ne(C){C?St(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function ae(C){C===void 0&&(C=n.TEXTURE0+K-1),it!==C&&(n.activeTexture(C),it=C)}function he(C,W,X){X===void 0&&(it===null?X=n.TEXTURE0+K-1:X=it);let ot=rt[X];ot===void 0&&(ot={type:void 0,texture:void 0},rt[X]=ot),(ot.type!==C||ot.texture!==W)&&(it!==X&&(n.activeTexture(X),it=X),n.bindTexture(C,W||Vt[C]),ot.type=C,ot.texture=W)}function z(){let C=rt[it];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function te(){try{n.compressedTexImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ge(){try{n.texSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function _t(){try{n.texSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Ce(){try{n.compressedTexSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Wt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Xt(){try{n.texStorage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function R(){try{n.texStorage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function S(){try{n.texImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function q(){try{n.texImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ut(C){return f[C]!==void 0?f[C]:n.getParameter(C)}function w(C,W){f[C]!==W&&(n.pixelStorei(C,W),f[C]=W)}function B(C){nt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),nt.copy(C))}function k(C){Mt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Mt.copy(C))}function L(C,W){let X=c.get(W);X===void 0&&(X=new WeakMap,c.set(W,X));let ot=X.get(C);ot===void 0&&(ot=n.getUniformBlockIndex(W,C.name),n.uniformBlockBinding(W,ot,ot),X.set(C,ot))}function F(C,W,X){let Q=c.get(W).get(C);l[Q]!==X&&(n.bindBufferBase(n.UNIFORM_BUFFER,Q,X),l[Q]=X)}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},it=null,rt={},u={},l={},d=new WeakMap,p=[],y=null,m=!1,g=null,x=null,M=null,v=null,A=null,T=null,_=null,b=new Pt(0,0,0),N=0,P=!1,U=null,H=null,Y=null,I=null,G=null,nt.set(0,0,n.canvas.width,n.canvas.height),Mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:Dt,bindFramebuffer:fe,drawBuffers:Ut,useProgram:jt,setBlending:gt,setMaterial:mt,setFlipSided:At,setCullFace:xt,setLineWidth:Zt,setPolygonOffset:Ft,setScissorTest:ne,activeTexture:ae,bindTexture:he,unbindTexture:z,compressedTexImage2D:Te,compressedTexImage3D:te,texImage2D:S,texImage3D:q,pixelStorei:w,getParameter:ut,updateUBOMapping:L,uniformBlockBinding:F,texStorage2D:Xt,texStorage3D:R,texSubImage2D:ge,texSubImage3D:_t,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Wt,scissor:B,viewport:k,reset:tt}}function Mx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,f=new Set,u,d=new WeakMap,p=new Set,y=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):pr("canvas")}function x(R,S,q){let ut=1,w=Xt(R);if((w.width>q||w.height>q)&&(ut=q/Math.max(w.width,w.height)),ut<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let B=Math.floor(ut*w.width),k=Math.floor(ut*w.height);u===void 0&&(u=g(B,k));let L=S?g(B,k):u;return L.width=B,L.height=k,L.getContext("2d").drawImage(R,0,0,B,k),qt("WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+B+"x"+k+")."),L}else return"data"in R&&qt("WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),R;return R}function M(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,S,q,ut,w,B=!1){if(R!==null){if(n[R]!==void 0)return n[R];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let k;ut&&(k=t.get("EXT_texture_norm16"),k||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let L=S;if(S===n.RED&&(q===n.FLOAT&&(L=n.R32F),q===n.HALF_FLOAT&&(L=n.R16F),q===n.UNSIGNED_BYTE&&(L=n.R8),q===n.UNSIGNED_SHORT&&k&&(L=k.R16_EXT),q===n.SHORT&&k&&(L=k.R16_SNORM_EXT)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(L=n.R8UI),q===n.UNSIGNED_SHORT&&(L=n.R16UI),q===n.UNSIGNED_INT&&(L=n.R32UI),q===n.BYTE&&(L=n.R8I),q===n.SHORT&&(L=n.R16I),q===n.INT&&(L=n.R32I)),S===n.RG&&(q===n.FLOAT&&(L=n.RG32F),q===n.HALF_FLOAT&&(L=n.RG16F),q===n.UNSIGNED_BYTE&&(L=n.RG8),q===n.UNSIGNED_SHORT&&k&&(L=k.RG16_EXT),q===n.SHORT&&k&&(L=k.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(L=n.RG8UI),q===n.UNSIGNED_SHORT&&(L=n.RG16UI),q===n.UNSIGNED_INT&&(L=n.RG32UI),q===n.BYTE&&(L=n.RG8I),q===n.SHORT&&(L=n.RG16I),q===n.INT&&(L=n.RG32I)),S===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(L=n.RGB8UI),q===n.UNSIGNED_SHORT&&(L=n.RGB16UI),q===n.UNSIGNED_INT&&(L=n.RGB32UI),q===n.BYTE&&(L=n.RGB8I),q===n.SHORT&&(L=n.RGB16I),q===n.INT&&(L=n.RGB32I)),S===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(L=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(L=n.RGBA16UI),q===n.UNSIGNED_INT&&(L=n.RGBA32UI),q===n.BYTE&&(L=n.RGBA8I),q===n.SHORT&&(L=n.RGBA16I),q===n.INT&&(L=n.RGBA32I)),S===n.RGB&&(q===n.UNSIGNED_SHORT&&k&&(L=k.RGB16_EXT),q===n.SHORT&&k&&(L=k.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(L=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(L=n.R11F_G11F_B10F)),S===n.RGBA){let F=B?dr:oe.getTransfer(w);q===n.FLOAT&&(L=n.RGBA32F),q===n.HALF_FLOAT&&(L=n.RGBA16F),q===n.UNSIGNED_BYTE&&(L=F===de?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&k&&(L=k.RGBA16_EXT),q===n.SHORT&&k&&(L=k.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(L=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(L=n.RGB5_A1)}return(L===n.R16F||L===n.R32F||L===n.RG16F||L===n.RG32F||L===n.RGBA16F||L===n.RGBA32F)&&t.get("EXT_color_buffer_float"),L}function _(R,S){let q;return R?S===null||S===zn||S===as?q=n.DEPTH24_STENCIL8:S===gn?q=n.DEPTH32F_STENCIL8:S===Gs&&(q=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===zn||S===as?q=n.DEPTH_COMPONENT24:S===gn?q=n.DEPTH_COMPONENT32F:S===Gs&&(q=n.DEPTH_COMPONENT16),q}function b(R,S){return M(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==ln?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){let S=new WeakRef(R);i.get(R).__ref=S,p.add(S),y.register(R,S,S)}function P(R){let S=i.get(R).__ref;S!==void 0&&(p.delete(S),y.unregister(S))}function U(R){Y(R.target)}function H(R){I(R.target)}function Y(R){R.removeEventListener("dispose",U),P(R),K(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function I(R){R.removeEventListener("dispose",H),P(R),ht(R)}function G(){for(let R of p){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):Y(S))}p.clear(),f.clear()}function K(R){let S=i.get(R);if(S.__webglInit===void 0)return;let q=R.source,ut=d.get(q);if(ut){let w=ut[S.__cacheKey];w.usedTimes--,w.usedTimes===0&&V(R),Object.keys(ut).length===0&&d.delete(q)}i.remove(R)}function V(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let q=R.source,ut=d.get(q);delete ut[S.__cacheKey],a.memory.textures--}function ht(R){let S=i.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&Y(q),R.isWebGLCubeRenderTarget)for(let w=0;w<6;w++){if(Array.isArray(S.__webglFramebuffer[w]))for(let B=0;B<S.__webglFramebuffer[w].length;B++)n.deleteFramebuffer(S.__webglFramebuffer[w][B]);else n.deleteFramebuffer(S.__webglFramebuffer[w]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[w])}else{if(Array.isArray(S.__webglFramebuffer))for(let w=0;w<S.__webglFramebuffer.length;w++)n.deleteFramebuffer(S.__webglFramebuffer[w]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let w=0;w<S.__webglColorRenderbuffer.length;w++)S.__webglColorRenderbuffer[w]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[w]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ut=R.textures;for(let w=0,B=ut.length;w<B;w++){let k=i.get(ut[w]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(ut[w])}i.remove(R)}let $=0;function it(){$=0}function rt(){return $}function Tt(R){$=R}function kt(){let R=$;return R>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,R}function nt(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Mt(R,S){let q=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let ut=R.image;if(ut===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,R,S);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function Rt(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){mt(q,R,S);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function Vt(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){mt(q,R,S);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function St(R,S){let q=i.get(R);if(R.version>0&&q.__version!==R.version){At(q,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let Dt={[Ri]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[io]:n.MIRRORED_REPEAT},fe={[Ye]:n.NEAREST,[ju]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Uo]:n.LINEAR_MIPMAP_NEAREST,[di]:n.LINEAR_MIPMAP_LINEAR},Ut={[sf]:n.NEVER,[Xc]:n.ALWAYS,[rf]:n.LESS,[Vc]:n.LEQUAL,[af]:n.EQUAL,[Wc]:n.GEQUAL,[of]:n.GREATER,[lf]:n.NOTEQUAL};function jt(R,S){if(S.type===gn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ln||S.magFilter===Uo||S.magFilter===$r||S.magFilter===di||S.minFilter===ln||S.minFilter===Uo||S.minFilter===$r||S.minFilter===di)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Dt[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Dt[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Dt[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,fe[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ut[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ye||S.minFilter!==$r&&S.minFilter!==di||S.type===gn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ee(R,S){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",U),N(S));let ut=S.source,w=d.get(ut);w===void 0&&(w={},d.set(ut,w));let B=nt(S);if(B!==R.__cacheKey){w[B]===void 0&&(w[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),w[B].usedTimes++;let k=w[R.__cacheKey];k!==void 0&&(w[R.__cacheKey].usedTimes--,k.usedTimes===0&&V(S)),R.__cacheKey=B,R.__webglTexture=w[B].texture}return q}function at(R,S,q){return Math.floor(Math.floor(R/q)/S)}function gt(R,S,q,ut){let B=R.updateRanges;if(B.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,q,ut,S.data);else{B.sort((C,W)=>C.start-W.start);let k=0;for(let C=1;C<B.length;C++){let W=B[k],X=B[C],ot=W.start+W.count,Q=at(X.start,S.width,4),st=at(W.start,S.width,4);X.start<=ot+1&&Q===st&&at(X.start+X.count-1,S.width,4)===Q?W.count=Math.max(W.count,X.start+X.count-W.start):(++k,B[k]=X)}B.length=k+1;let L=e.getParameter(n.UNPACK_ROW_LENGTH),F=e.getParameter(n.UNPACK_SKIP_PIXELS),tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let C=0,W=B.length;C<W;C++){let X=B[C],ot=Math.floor(X.start/4),Q=Math.ceil(X.count/4),st=ot%S.width,dt=Math.floor(ot/S.width),Ht=Q,ct=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(n.TEXTURE_2D,0,st,dt,Ht,ct,q,ut,S.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,L),e.pixelStorei(n.UNPACK_SKIP_PIXELS,F),e.pixelStorei(n.UNPACK_SKIP_ROWS,tt)}}function mt(R,S,q){let ut=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=n.TEXTURE_3D);let w=ee(R,S),B=S.source;e.bindTexture(ut,R.__webglTexture,n.TEXTURE0+q);let k=i.get(B);if(B.version!==k.__version||w===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ct=oe.getPrimaries(oe.workingColorSpace),Gt=S.colorSpace===mi?null:oe.getPrimaries(S.colorSpace),Jt=S.colorSpace===mi||ct===Gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let F=x(S.image,!1,s.maxTextureSize);F=Wt(S,F);let tt=r.convert(S.format,S.colorSpace),C=r.convert(S.type),W=T(S.internalFormat,tt,C,S.normalized,S.colorSpace,S.isVideoTexture);jt(ut,S);let X,ot=S.mipmaps,Q=S.isVideoTexture!==!0,st=k.__version===void 0||w===!0,dt=B.dataReady,Ht=b(S,F);if(S.isDepthTexture)W=_(S.format===pi,S.type),st&&(Q?e.texStorage2D(n.TEXTURE_2D,1,W,F.width,F.height):e.texImage2D(n.TEXTURE_2D,0,W,F.width,F.height,0,tt,C,null));else if(S.isDataTexture)if(ot.length>0){Q&&st&&e.texStorage2D(n.TEXTURE_2D,Ht,W,ot[0].width,ot[0].height);for(let ct=0,Gt=ot.length;ct<Gt;ct++)X=ot[ct],Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,X.width,X.height,tt,C,X.data):e.texImage2D(n.TEXTURE_2D,ct,W,X.width,X.height,0,tt,C,X.data);S.generateMipmaps=!1}else Q?(st&&e.texStorage2D(n.TEXTURE_2D,Ht,W,F.width,F.height),dt&&gt(S,F,tt,C)):e.texImage2D(n.TEXTURE_2D,0,W,F.width,F.height,0,tt,C,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Q&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,W,ot[0].width,ot[0].height,F.depth);for(let ct=0,Gt=ot.length;ct<Gt;ct++)if(X=ot[ct],S.format!==kn)if(tt!==null)if(Q){if(dt)if(S.layerUpdates.size>0){let Jt=jc(X.width,X.height,S.format,S.type);for(let pt of S.layerUpdates){let _e=X.data.subarray(pt*Jt/X.data.BYTES_PER_ELEMENT,(pt+1)*Jt/X.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,pt,X.width,X.height,1,tt,_e)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,X.width,X.height,F.depth,tt,X.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ct,W,X.width,X.height,F.depth,0,X.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ct,0,0,0,X.width,X.height,F.depth,tt,C,X.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ct,W,X.width,X.height,F.depth,0,tt,C,X.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Q&&st&&e.texStorage2D(n.TEXTURE_2D,Ht,W,ot[0].width,ot[0].height);for(let ct=0,Gt=ot.length;ct<Gt;ct++)X=ot[ct],S.format!==kn?tt!==null?Q?dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ct,0,0,X.width,X.height,tt,X.data):e.compressedTexImage2D(n.TEXTURE_2D,ct,W,X.width,X.height,0,X.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,X.width,X.height,tt,C,X.data):e.texImage2D(n.TEXTURE_2D,ct,W,X.width,X.height,0,tt,C,X.data)}else if(S.isDataArrayTexture)if(Q){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,W,F.width,F.height,F.depth),dt)if(S.layerUpdates.size>0){let ct=jc(F.width,F.height,S.format,S.type);for(let Gt of S.layerUpdates){let Jt=F.data.subarray(Gt*ct/F.data.BYTES_PER_ELEMENT,(Gt+1)*ct/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Gt,F.width,F.height,1,tt,C,Jt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,tt,C,F.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,W,F.width,F.height,F.depth,0,tt,C,F.data);else if(S.isData3DTexture)Q?(st&&e.texStorage3D(n.TEXTURE_3D,Ht,W,F.width,F.height,F.depth),dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,tt,C,F.data)):e.texImage3D(n.TEXTURE_3D,0,W,F.width,F.height,F.depth,0,tt,C,F.data);else if(S.isFramebufferTexture){if(st)if(Q)e.texStorage2D(n.TEXTURE_2D,Ht,W,F.width,F.height);else{let ct=F.width,Gt=F.height;for(let Jt=0;Jt<Ht;Jt++)e.texImage2D(n.TEXTURE_2D,Jt,W,ct,Gt,0,tt,C,null),ct>>=1,Gt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ct=n.canvas;if(ct.hasAttribute("layoutsubtree")||ct.setAttribute("layoutsubtree","true"),F.parentNode!==ct){ct.appendChild(F),f.add(S),ct.onpaint=Gt=>{let Jt=Gt.changedElements;for(let pt of f)Jt.includes(pt.image)&&(pt.needsUpdate=!0)},ct.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,F);else{let Jt=n.RGBA,pt=n.RGBA,_e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Jt,pt,_e,F)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ot.length>0){if(Q&&st){let ct=Xt(ot[0]);e.texStorage2D(n.TEXTURE_2D,Ht,W,ct.width,ct.height)}for(let ct=0,Gt=ot.length;ct<Gt;ct++)X=ot[ct],Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ct,0,0,tt,C,X):e.texImage2D(n.TEXTURE_2D,ct,W,tt,C,X);S.generateMipmaps=!1}else if(Q){if(st){let ct=Xt(F);e.texStorage2D(n.TEXTURE_2D,Ht,W,ct.width,ct.height)}dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tt,C,F)}else e.texImage2D(n.TEXTURE_2D,0,W,tt,C,F);M(S)&&S.mipmapsAutoUpdate===!0&&v(ut),k.__version=B.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function At(R,S,q){if(S.image.length!==6)return;let ut=ee(R,S),w=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);let B=i.get(w);if(w.version!==B.__version||ut===!0){e.activeTexture(n.TEXTURE0+q);let k=oe.getPrimaries(oe.workingColorSpace),L=S.colorSpace===mi?null:oe.getPrimaries(S.colorSpace),F=S.colorSpace===mi||k===L?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);let tt=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,W=[];for(let pt=0;pt<6;pt++)!tt&&!C?W[pt]=x(S.image[pt],!0,s.maxCubemapSize):W[pt]=C?S.image[pt].image:S.image[pt],W[pt]=Wt(S,W[pt]);let X=W[0],ot=r.convert(S.format,S.colorSpace),Q=r.convert(S.type),st=T(S.internalFormat,ot,Q,S.normalized,S.colorSpace),dt=S.isVideoTexture!==!0,Ht=B.__version===void 0||ut===!0,ct=w.dataReady,Gt=b(S,X);jt(n.TEXTURE_CUBE_MAP,S);let Jt;if(S.isDepthTexture){if(st=_(S.format===pi,S.type),Ht)if(dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,st,X.width,X.height);else for(let pt=0;pt<6;pt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,X.width,X.height,0,ot,Q,null)}else if(tt){dt&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Gt,st,X.width,X.height);for(let pt=0;pt<6;pt++){Jt=W[pt].mipmaps;for(let _e=0;_e<Jt.length;_e++){let Ue=Jt[_e];S.format!==kn?ot!==null?dt?ct&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,0,0,Ue.width,Ue.height,ot,Ue.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,st,Ue.width,Ue.height,0,Ue.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,0,0,Ue.width,Ue.height,ot,Q,Ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,st,Ue.width,Ue.height,0,ot,Q,Ue.data)}}}else{if(Jt=S.mipmaps,dt&&Ht){Jt.length>0&&Gt++;let pt=Xt(W[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Gt,st,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){dt?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,W[pt].width,W[pt].height,ot,Q,W[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,W[pt].width,W[pt].height,0,ot,Q,W[pt].data);for(let _e=0;_e<Jt.length;_e++){let Pn=Jt[_e].image[pt].image;dt?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,0,0,Pn.width,Pn.height,ot,Q,Pn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,st,Pn.width,Pn.height,0,ot,Q,Pn.data)}}else{dt?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,ot,Q,W[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,ot,Q,W[pt]);for(let _e=0;_e<Jt.length;_e++){let Ue=Jt[_e];dt?ct&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,0,0,ot,Q,Ue.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,st,ot,Q,Ue.image[pt])}}}M(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),B.__version=w.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xt(R,S,q,ut,w,B){let k=r.convert(q.format,q.colorSpace),L=r.convert(q.type),F=T(q.internalFormat,k,L,q.normalized,q.colorSpace),tt=i.get(S),C=i.get(q);if(C.__renderTarget=S,!tt.__hasExternalTextures){let W=Math.max(1,S.width>>B),X=Math.max(1,S.height>>B);w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?e.texImage3D(w,B,F,W,X,S.depth,0,k,L,null):e.texImage2D(w,B,F,W,X,0,k,L,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),_t(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,w,C.__webglTexture,0,ge(S)):(w===n.TEXTURE_2D||w>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,w,C.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(R,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let ut=S.depthTexture,w=ut&&ut.isDepthTexture?ut.type:null,B=_(S.stencilBuffer,w),k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(S),B,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(S),B,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,B,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,R)}else{let ut=S.textures;for(let w=0;w<ut.length;w++){let B=ut[w],k=r.convert(B.format,B.colorSpace),L=r.convert(B.type),F=T(B.internalFormat,k,L,B.normalized,B.colorSpace);_t(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge(S),F,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge(S),F,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,F,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ft(R,S,q){let ut=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let w=i.get(S.depthTexture);w.__renderTarget=S;let B=ut?S.depthTexture.image[0]:S.depthTexture.image;(!w.__webglTexture||B.width!==S.width||B.height!==S.height)&&(B.width=S.width,B.height=S.height,S.depthTexture.needsUpdate=!0),ut?St(S.depthTexture,0):Mt(S.depthTexture,0);let k=w.__webglTexture,L=ge(S),F=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,tt=S.depthTexture.format===pi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===li)_t(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,F,k,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,tt,F,k,0);else if(S.depthTexture.format===pi)_t(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,F,k,0,L):n.framebufferTexture2D(n.FRAMEBUFFER,tt,F,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let S=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ut=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){let w=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",w)};ut.addEventListener("dispose",w),S.__depthDisposeCallback=w}S.__boundDepthTexture=ut}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let ut=0;ut<6;ut++)Ft(S.__webglFramebuffer[ut],R,ut);else R.texture.mipmaps.length>0?Ft(S.__webglFramebuffer[0],R,0):Ft(S.__webglFramebuffer,R,0);else if(q){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=n.createRenderbuffer(),Zt(S.__webglDepthbuffer[ut],R,!1);else{let w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,B)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Zt(S.__webglDepthbuffer,R,!1);else{let w=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,B)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,S,q){let ut=i.get(R);S!==void 0&&xt(ut.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ne(R)}function he(R){let S=R.texture,q=i.get(R),ut=i.get(S);R.addEventListener("dispose",H),N(R);let w=R.textures,B=R.isWebGLCubeRenderTarget===!0,k=w.length>1;if(k||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=S.version,a.memory.textures++),B){q.__webglFramebuffer=[];for(let L=0;L<6;L++)if(S.mipmaps.length>0){q.__webglFramebuffer[L]=[];for(let F=0;F<S.mipmaps.length;F++)q.__webglFramebuffer[L][F]=n.createFramebuffer()}else q.__webglFramebuffer[L]=n.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let L=0;L<S.mipmaps.length;L++)q.__webglFramebuffer[L]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(k)for(let L=0,F=w.length;L<F;L++){let tt=i.get(w[L]);tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&_t(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let L=0;L<w.length;L++){let F=w[L];q.__webglColorRenderbuffer[L]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[L]);let tt=r.convert(F.format,F.colorSpace),C=r.convert(F.type),W=T(F.internalFormat,tt,C,F.normalized,F.colorSpace,R.isXRRenderTarget===!0),X=ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,X,W,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+L,n.RENDERBUFFER,q.__webglColorRenderbuffer[L])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),jt(n.TEXTURE_CUBE_MAP,S);for(let L=0;L<6;L++)if(S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)xt(q.__webglFramebuffer[L][F],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,F);else xt(q.__webglFramebuffer[L],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0);M(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(k){for(let L=0,F=w.length;L<F;L++){let tt=w[L],C=i.get(tt),W=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(W=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(W,C.__webglTexture),jt(W,tt),xt(q.__webglFramebuffer,R,tt,n.COLOR_ATTACHMENT0+L,W,0),M(tt)&&v(W)}e.unbindTexture()}else{let L=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(L=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(L,ut.__webglTexture),jt(L,S),S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)xt(q.__webglFramebuffer[F],R,S,n.COLOR_ATTACHMENT0,L,F);else xt(q.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,L,0);M(S)?v(L):S.mipmaps.length>0&&n.texParameteri(L,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ne(R)}function z(R){let S=R.textures;for(let q=0,ut=S.length;q<ut;q++){let w=S[q];if(M(w)&&w.mipmapsAutoUpdate===!0){let B=A(R),k=i.get(w).__webglTexture;e.bindTexture(B,k),v(B),e.unbindTexture()}}}let Te=[];function te(R){if(R.samples>0){if(_t(R)===!1){let S=R.textures,q=R.width,ut=R.height,w=n.COLOR_BUFFER_BIT,B=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=i.get(R),L=S.length>1;if(L)for(let tt=0;tt<S.length;tt++)e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let tt=0;tt<S.length;tt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(w|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(w|=n.STENCIL_BUFFER_BIT)),L){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);let C=i.get(S[tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,q,ut,0,0,q,ut,w,n.NEAREST),l===!0&&(Te.length=0,Te.push(n.COLOR_ATTACHMENT0+tt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Te.push(B),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),L)for(let tt=0;tt<S.length;tt++){e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.RENDERBUFFER,k.__webglColorRenderbuffer[tt]);let C=i.get(S[tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+tt,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function ge(R){return Math.min(s.maxSamples,R.samples)}function _t(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Wt(R,S){let q=R.colorSpace,ut=R.format,w=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==fr&&q!==mi&&(oe.getTransfer(q)===de?(ut!==kn||w!==mn)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",q)),S}function Xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=kt,this.resetTextureUnits=it,this.getTextureUnits=rt,this.setTextureUnits=Tt,this.setTexture2D=Mt,this.setTexture2DArray=Rt,this.setTexture3D=Vt,this.setTextureCube=St,this.rebindTextures=ae,this.setupRenderTarget=he,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=_t,this.dispose=G}function Sx(n,t){function e(i,s=mi){let r,a=oe.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===Oo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Bo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Oc)return n.BYTE;if(i===Bc)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===Fo)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===gn)return n.FLOAT;if(i===He)return n.HALF_FLOAT;if(i===Hc)return n.ALPHA;if(i===Gc)return n.RGB;if(i===kn)return n.RGBA;if(i===li)return n.DEPTH_COMPONENT;if(i===pi)return n.DEPTH_STENCIL;if(i===zo)return n.RED;if(i===ko)return n.RED_INTEGER;if(i===Oi)return n.RG;if(i===Ho)return n.RG_INTEGER;if(i===Go)return n.RGBA_INTEGER;if(i===Kr||i===Qr||i===jr||i===ta)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Wo||i===Xo||i===qo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===ea||i===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yo||i===Zo)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$o)return r.COMPRESSED_R11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===Qo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jo||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===fl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===il)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===al)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ll)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ul)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fl)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===pl||i===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gl||i===_l||i===na||i===xl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`,dh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Tr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:bx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new Ae(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ph=class extends Xn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,p=null,y=typeof XRWebGLBinding<"u",m=new dh,g={},x=e.getContextAttributes(),M=null,v=null,A=[],T=[],_=new lt,b=null,N=null,P=new on;P.viewport=new Pe;let U=new on;U.viewport=new Pe;let H=[P,U],Y=new Io,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Cs,A[nt]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Cs,A[nt]=Mt),Mt.getGripSpace()},this.getHand=function(nt){let Mt=A[nt];return Mt===void 0&&(Mt=new Cs,A[nt]=Mt),Mt.getHandSpace()};function K(nt){let Mt=T.indexOf(nt.inputSource);if(Mt===-1)return;let Rt=A[Mt];Rt!==void 0&&(Rt.update(nt.inputSource,nt.frame,c||a),Rt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function V(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<A.length;nt++){let Mt=T[nt];Mt!==null&&(T[nt]=null,A[nt].disconnect(Mt))}I=null,G=null,m.reset();for(let nt in g)delete g[nt];if(t.setRenderTarget(M),d=null,u=null,f=null,s=null,v=null,kt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),N!==null){let nt=N.camera;nt.fov=N.fov,nt.zoom=N.zoom,nt.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(nt){c=nt},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ht),x.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Rt=null,Vt=null,St=null;x.depth&&(St=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Rt=x.stencil?pi:li,Vt=x.stencil?as:zn);let Dt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Fe(u.textureWidth,u.textureHeight,{format:kn,type:mn,depthTexture:new Bn(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fe(d.framebufferWidth,d.framebufferHeight,{format:kn,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ht(nt){for(let Mt=0;Mt<nt.removed.length;Mt++){let Rt=nt.removed[Mt],Vt=T.indexOf(Rt);Vt>=0&&(T[Vt]=null,A[Vt].disconnect(Rt))}for(let Mt=0;Mt<nt.added.length;Mt++){let Rt=nt.added[Mt],Vt=T.indexOf(Rt);if(Vt===-1){for(let Dt=0;Dt<A.length;Dt++)if(Dt>=T.length){T.push(Rt),Vt=Dt;break}else if(T[Dt]===null){T[Dt]=Rt,Vt=Dt;break}if(Vt===-1)break}let St=A[Vt];St&&St.connect(Rt)}}function $(nt,Mt){Mt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(Mt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let Mt=nt.near,Rt=nt.far;m.texture!==null&&(m.depthNear>0&&(Mt=m.depthNear),m.depthFar>0&&(Rt=m.depthFar)),Y.near=U.near=P.near=Mt,Y.far=U.far=P.far=Rt,(I!==Y.near||G!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),I=Y.near,G=Y.far),Y.layers.mask=nt.layers.mask|6,P.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let Vt=nt.parent,St=Y.cameras;$(Y,Vt);for(let Dt=0;Dt<St.length;Dt++)$(St[Dt],Vt);Y.projectionMatrix.copy(P.projectionMatrix),Y.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&nt.isPerspectiveCamera&&(N={camera:nt,fov:nt.fov,zoom:nt.zoom}),it(nt,Y,Vt)};function it(nt,Mt,Rt){Rt===null?nt.matrix.copy(Mt.matrixWorld):(nt.matrix.copy(Rt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(Mt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(Mt.projectionMatrix),nt.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=ro*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(nt){l=nt,u!==null&&(u.fixedFoveation=nt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=nt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(nt){return g[nt]};let rt=null;function Tt(nt,Mt){if(h=Mt.getViewerPose(c||a),p=Mt,h!==null){let Rt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Vt=!1;Rt.length!==Y.cameras.length&&(Y.cameras.length=0,Vt=!0);for(let Ut=0;Ut<Rt.length;Ut++){let jt=Rt[Ut],ee=null;if(d!==null)ee=d.getViewport(jt);else{let gt=f.getViewSubImage(u,jt);ee=gt.viewport,Ut===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let at=H[Ut];at===void 0&&(at=new on,at.layers.enable(Ut),at.viewport=new Pe,H[Ut]=at),at.matrix.fromArray(jt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(jt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ee.x,ee.y,ee.width,ee.height),Ut===0&&(Y.matrix.copy(at.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Vt===!0&&Y.cameras.push(at)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let Ut=f.getDepthInformation(Rt[0]);Ut&&Ut.isValid&&Ut.texture&&m.init(Ut,s.renderState)}if(St&&St.includes("camera-access")&&y){t.state.unbindTexture(),f=i.getBinding();for(let Ut=0;Ut<Rt.length;Ut++){let jt=Rt[Ut].camera;if(jt){let ee=g[jt];ee||(ee=new Tr,g[jt]=ee);let at=f.getCameraImage(jt);ee.sourceTexture=at}}}}for(let Rt=0;Rt<A.length;Rt++){let Vt=T[Rt],St=A[Rt];Vt!==null&&St!==void 0&&St.update(Vt,Mt,c||a)}rt&&rt(nt,Mt),Mt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Mt}),p=null}let kt=new Vf;kt.setAnimationLoop(Tt),this.setAnimationLoop=function(nt){rt=nt},this.dispose=function(){}}},Tx=new ve,jf=new $t;jf.set(-1,0,0,0,1,0,0,0,1);function wx(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,$c(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,M,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),f(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,x,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Je&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Je&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let x=t.get(g),M=x.envMap,v=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(Tx.makeRotationFromEuler(v)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jf),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,x){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Je&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Ax(n,t,e,i){let s={},r={};function a(x,M){let v=M.program;i.uniformBlockBinding(x,v,s[x.id])}function o(x,M){let v=s[x.id];v===void 0&&(p(x),v=l(x),s[x.id]=v,x.addEventListener("dispose",m));let A=M.program;i.updateUBOMapping(x,A);let T=t.render.frame;r[x.id]!==T&&(c(x),r[x.id]=T)}function l(x){let M=n.createBuffer(),v=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),M}function c(x){let M=s[x.id],v=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let T=0,_=v.length;T<_;T++){let b=v[T];if(Array.isArray(b))for(let N=0,P=b.length;N<P;N++)h(b[N],T,N,A);else h(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(x,M,v,A){if(u(x,M,v,A)===!0){let T=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let N=0;N<_.length;N++){let P=_[N],U=y(P,!0);f(P,x.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,x.__data)}}function f(x,M,v){typeof x=="number"||typeof x=="boolean"?M[v]=x:x.isMatrix3?(M[v]=x.elements[0],M[v+1]=x.elements[1],M[v+2]=x.elements[2],M[v+3]=0,M[v+4]=x.elements[3],M[v+5]=x.elements[4],M[v+6]=x.elements[5],M[v+7]=0,M[v+8]=x.elements[6],M[v+9]=x.elements[7],M[v+10]=x.elements[8],M[v+11]=0):ArrayBuffer.isView(x)?M.set(x.subarray(0,M.length-v),v):x.toArray(M,v)}function u(x,M,v,A){let T=x.value,_=M+"_"+v;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);let b=A[_],N=!1;for(let P=0;P<T.length;P++)d(T[P],b,P)===!0&&(N=!0);return N}return d(T,A,_)}function d(x,M,v){if(M[v]===void 0)return typeof x=="number"||typeof x=="boolean"?M[v]=x:ArrayBuffer.isView(x)?M[v]=x.slice():M[v]=x.clone(),!0;{let A=M[v];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return M[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function p(x){let M=x.uniforms,v=0,A=16;for(let _=0,b=M.length;_<b;_++){let N=Array.isArray(M[_])?M[_]:[M[_]];for(let P=0,U=N.length;P<U;P++){let H=N[P],Y=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(M[_])||Array.isArray(H.value),G=v;for(let V=0,ht=Y.length;V<ht;V++){let $=Y[V],it=y($,I),rt=v%A,Tt=rt%it.boundary,kt=rt+Tt;v+=Tt,kt!==0&&A-kt<it.storage&&(v+=A-kt),V===0&&(G=v),v+=it.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((v-G)/Float32Array.BYTES_PER_ELEMENT),H.__offset=G}}let T=v%A;return T>0&&(v+=A-T),x.__size=v,x.__cache={},this}function y(x,M){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",x),M===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(x){let M=x.target;M.removeEventListener("dispose",m),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(let x in s)n.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:g}}var Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function Cx(){return Jn===null&&(Jn=new Mr(Rx,16,16,Oi,He),Jn.name="DFG_LUT",Jn.minFilter=ln,Jn.magFilter=ln,Jn.wrapS=Wn,Jn.wrapT=Wn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Sl=class{constructor(t={}){let{canvas:e=hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=mn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=d,m=new Set([Go,Ho,ko]),g=new Set([mn,zn,Gs,as,Oo,Bo]),x=new Uint32Array(4),M=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,T=null,_=[],b=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,H=null,Y=null,I=null,G=null;this._outputColorSpace=Ne;let K=0,V=0,ht=null,$=-1,it=null,rt=new Pe,Tt=new Pe,kt=null,nt=new Pt(0),Mt=0,Rt=e.width,Vt=e.height,St=1,Dt=null,fe=null,Ut=new Pe(0,0,Rt,Vt),jt=new Pe(0,0,Rt,Vt),ee=!1,at=new Ci,gt=new co,mt=!1,At=!1,xt=new ve,Zt=new D,Ft=new Pe,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function he(){return ht===null?St:1}let z=i;function Te(E,O){return e.getContext(E,O)}let te,ge,_t,Ce,Wt,Xt,R,S,q,ut,w,B,k,L,F,tt,C,W,X,ot,Q,st,dt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),z===null){let O="webgl2";if(z=Te(O,E),z===null)throw Te(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(E){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Yt("WebGLRenderer: "+E.message),E}function Ht(){te=new k0(z),te.init(),Q=new Sx(z,te),ge=new C0(z,te,t,Q),_t=new yx(z,te),ge.reversedDepthBuffer&&u&&_t.buffers.depth.setReversed(!0),Y=z.createFramebuffer(),I=z.createFramebuffer(),G=z.createFramebuffer(),Ce=new V0(z),Wt=new ax,Xt=new Mx(z,te,_t,Wt,ge,Q,Ce),R=new z0(P),S=new Xp(z),st=new A0(z,S),q=new H0(z,S,Ce,st),ut=new X0(z,q,S,st,Ce),W=new W0(z,ge,Xt),F=new P0(Wt),w=new rx(P,R,te,ge,st,F),B=new wx(P,Wt),k=new lx,L=new px(te),C=new w0(P,R,_t,ut,p,l),tt=new vx(P,ut,ge),dt=new Ax(z,Ce,ge,_t),X=new R0(z,te,Ce),ot=new G0(z,te,Ce),Ce.programs=w.programs,P.capabilities=ge,P.extensions=te,P.properties=Wt,P.renderLists=k,P.shadowMap=tt,P.state=_t,P.info=Ce}y!==mn&&(N=new Y0(y,e.width,e.height,o,s,r));let ct=new ph(P,z);this.xr=ct,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(E){E!==void 0&&(St=E,this.setSize(Rt,Vt,!1))},this.getSize=function(E){return E.set(Rt,Vt)},this.setSize=function(E,O,j=!0){if(ct.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Rt=E,Vt=O,e.width=Math.floor(E*St),e.height=Math.floor(O*St),j===!0&&(e.style.width=E+"px",e.style.height=O+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(Rt*St,Vt*St).floor()},this.setDrawingBufferSize=function(E,O,j){Rt=E,Vt=O,St=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(y===mn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(rt)},this.getViewport=function(E){return E.copy(Ut)},this.setViewport=function(E,O,j,Z){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,O,j,Z),_t.viewport(rt.copy(Ut).multiplyScalar(he()).round())},this.getScissor=function(E){return E.copy(jt)},this.setScissor=function(E,O,j,Z){E.isVector4?jt.set(E.x,E.y,E.z,E.w):jt.set(E,O,j,Z),_t.scissor(Tt.copy(jt).multiplyScalar(he()).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(E){_t.setScissorTest(ee=E)},this.setOpaqueSort=function(E){Dt=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,j=!0){let Z=0;if(E){let J=!1;if(ht!==null){let yt=ht.texture.format;J=m.has(yt)}if(J){let yt=ht.texture.type,Ct=g.has(yt),vt=C.getClearColor(),Et=C.getClearAlpha(),Ot=vt.r,Qt=vt.g,le=vt.b;Ct?(x[0]=Ot,x[1]=Qt,x[2]=le,x[3]=Et,z.clearBufferuiv(z.COLOR,0,x)):(M[0]=Ot,M[1]=Qt,M[2]=le,M[3]=Et,z.clearBufferiv(z.COLOR,0,M))}else Z|=z.COLOR_BUFFER_BIT}O&&(Z|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Z|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&z.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),k.dispose(),L.dispose(),Xt.dispose(),Wt.dispose(),R.dispose(),ut.dispose(),q.dispose(),st.dispose(),dt.dispose(),w.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",Hh),ct.removeEventListener("sessionend",Gh),Gi.stop()};function Gt(E){E.preventDefault(),Yc("WebGLRenderer: Context Lost."),U=!0}function Jt(){Yc("WebGLRenderer: Context Restored."),U=!1;let E=Ce.autoReset,O=tt.enabled,j=tt.autoUpdate,Z=tt.needsUpdate,J=tt.type;Ht(),Ce.autoReset=E,tt.enabled=O,tt.autoUpdate=j,tt.needsUpdate=Z,tt.type=J}function pt(E){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _e(E){let O=E.target;O.removeEventListener("dispose",_e),Ue(O)}function Ue(E){Pn(E),Wt.remove(E)}function Pn(E){let O=Wt.get(E).programs;O!==void 0&&(O.forEach(function(j){w.releaseProgram(j)}),E.isShaderMaterial&&w.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,Z,J,yt){O===null&&(O=ne);let Ct=J.isMesh&&J.matrixWorld.determinantAffine()<0,vt=Ed(E,O,j,Z,J);_t.setMaterial(Z,Ct);let Et=j.index,Ot=1;if(Z.wireframe===!0){if(Et=q.getWireframeAttribute(j),Et===void 0)return;Ot=2}let Qt=j.drawRange,le=j.attributes.position,It=Qt.start*Ot,ce=(Qt.start+Qt.count)*Ot;yt!==null&&(It=Math.max(It,yt.start*Ot),ce=Math.min(ce,(yt.start+yt.count)*Ot)),Et!==null?(It=Math.max(It,0),ce=Math.min(ce,Et.count)):le!=null&&(It=Math.max(It,0),ce=Math.min(ce,le.count));let Be=ce-It;if(Be<0||Be===1/0)return;st.setup(J,Z,vt,j,Et);let Ee,Se=X;if(Et!==null&&(Ee=S.get(Et),Se=ot,Se.setIndex(Ee)),J.isMesh)Z.wireframe===!0?(_t.setLineWidth(Z.wireframeLinewidth*he()),Se.setMode(z.LINES)):Se.setMode(z.TRIANGLES);else if(J.isLine){let Qe=Z.linewidth;Qe===void 0&&(Qe=1),_t.setLineWidth(Qe*he()),J.isLineSegments?Se.setMode(z.LINES):J.isLineLoop?Se.setMode(z.LINE_LOOP):Se.setMode(z.LINE_STRIP)}else J.isPoints?Se.setMode(z.POINTS):J.isSprite&&Se.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Se.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Qe=J._multiDrawStarts,Lt=J._multiDrawCounts,an=J._multiDrawCount,me=Et?S.get(Et).bytesPerElement:1,Vi=Wt.get(Z).currentProgram.getUniforms();for(let je=0;je<an;je++)Vi.setValue(z,"_gl_DrawID",je),Se.render(Qe[je]/me,Lt[je])}else if(J.isInstancedMesh)Se.renderInstances(It,Be,J.count);else if(j.isInstancedBufferGeometry){let Qe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Lt=Math.min(j.instanceCount,Qe);Se.renderInstances(It,Be,Lt)}else Se.render(It,Be)};function kh(E,O,j,Z){H!==null&&E.isNodeMaterial&&H.setObject(Z,E),mt===!0&&F.setState(E,j,!1),E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Je,E.needsUpdate=!0,er(E,O,Z),E.side=Ui,E.needsUpdate=!0,er(E,O,Z),E.side=pn):er(E,O,Z)}this.compile=function(E,O,j=null){j===null&&(j=E),H!==null&&H.renderStart(E,O,j),T=L.get(j),T.init(O),b.push(T),j.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),E!==j&&E.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),H!==null&&H.updateLights(T.state.lightsArray),At=this.localClippingEnabled,mt=F.init(this.clippingPlanes,At),mt===!0&&F.setGlobalState(this.clippingPlanes,O),H!==null&&tt.render(T.state.shadowsArray,j,O);let Z=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let yt=J.material;if(yt)if(Array.isArray(yt))for(let Ct=0;Ct<yt.length;Ct++){let vt=yt[Ct];kh(vt,j,O,J),Z.add(vt)}else kh(yt,j,O,J),Z.add(yt)}),T=b.pop(),H!==null&&H.renderEnd(),Z},this.compileAsync=function(E,O,j=null){let Z=this.compile(E,O,j);return new Promise(J=>{function yt(){if(Z.forEach(function(Ct){let Et=Wt.get(Ct).currentProgram;(Et===void 0||Et.isReady())&&Z.delete(Ct)}),Z.size===0){J(E);return}setTimeout(yt,10)}te.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let ql=null;function Sd(E){ql&&ql(E)}function Hh(){Gi.stop()}function Gh(){Gi.start()}let Gi=new Vf;Gi.setAnimationLoop(Sd),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(E){ql=E,ct.setAnimationLoop(E),E===null?Gi.stop():Gi.start()},ct.addEventListener("sessionstart",Hh),ct.addEventListener("sessionend",Gh),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,O);let j=ct.enabled===!0&&ct.isPresenting===!0,Z=N!==null&&(ht===null||j)&&N.begin(P,ht);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,O,ht),T=L.get(E,b.length),T.init(O),T.state.textureUnits=Xt.getTextureUnits(),b.push(T),xt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?gt.setFromArrayCamera(O):at.setFromProjectionMatrix(xt,Rn,O.reversedDepth),At=this.localClippingEnabled,mt=F.init(this.clippingPlanes,At),A=k.get(E,_.length),A.init(),_.push(A),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let Ct=P.xr.getDepthSensingMesh();Ct!==null&&Yl(Ct,O,-1/0,P.sortObjects)}Yl(E,O,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(T.state.lightsArray),P.sortObjects===!0&&A.sort(Dt,fe),ae=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,ae&&C.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),mt===!0&&F.beginShadows();let J=T.state.shadowsArray;if(tt.render(J,E,O),mt===!0&&F.endShadows(),(Z&&N.hasRenderPass())===!1){let Ct=A.opaque,vt=A.transmissive;if(T.setupLights(),O.isArrayCamera){let Et=O.cameras;if(vt.length>0)for(let Ot=0,Qt=Et.length;Ot<Qt;Ot++){let le=Et[Ot];Wh(Ct,vt,E,le)}ae&&C.render(E);for(let Ot=0,Qt=Et.length;Ot<Qt;Ot++){let le=Et[Ot];Vh(A,E,le,le.viewport)}}else vt.length>0&&Wh(Ct,vt,E,O),ae&&C.render(E),Vh(A,E,O)}ht!==null&&V===0&&(Xt.updateMultisampleRenderTarget(ht),Xt.updateRenderTargetMipmap(ht)),Z&&N.end(P),E.isScene===!0&&E.onAfterRender(P,E,O),st.resetDefaultState(),$=-1,it=null,b.pop(),b.length>0?(T=b[b.length-1],Xt.setTextureUnits(T.state.textureUnits),mt===!0&&F.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,H!==null&&H.renderEnd()};function Yl(E,O,j,Z){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){let Ct=O.isArrayCamera?gt:at;if(!E.frustumCulled||E.intersectsFrustum(Ct)){Z&&Ft.setFromMatrixPosition(E.matrixWorld).applyMatrix4(xt);let vt=ut.update(E),Et=E.material;Et.visible&&A.push(E,vt,Et,j,Ft.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Ct=O.isArrayCamera?gt:at;if(!E.frustumCulled||E.intersectsFrustum(Ct)){let vt=ut.update(E),Et=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ft.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ft.copy(vt.boundingSphere.center)),Ft.applyMatrix4(E.matrixWorld).applyMatrix4(xt)),Array.isArray(Et)){let Ot=vt.groups;for(let Qt=0,le=Ot.length;Qt<le;Qt++){let It=Ot[Qt],ce=Et[It.materialIndex];ce&&ce.visible&&A.push(E,vt,ce,j,Ft.z,It,O)}}else Et.visible&&A.push(E,vt,Et,j,Ft.z,null,O)}}}let yt=E.children;for(let Ct=0,vt=yt.length;Ct<vt;Ct++)Yl(yt[Ct],O,j,Z)}function Vh(E,O,j,Z){let{opaque:J,transmissive:yt,transparent:Ct}=E;T.setupLightsView(j),mt===!0&&F.setGlobalState(P.clippingPlanes,j),Z&&_t.viewport(rt.copy(Z)),J.length>0&&Ma(J,O,j),yt.length>0&&Ma(yt,O,j),Ct.length>0&&Ma(Ct,O,j),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function Wh(E,O,j,Z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Z.id]===void 0){let It=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Z.id]=new Fe(1,1,{generateMipmaps:!0,type:It?He:mn,minFilter:di,samples:Math.max(4,ge.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let yt=T.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||rt;yt.setSize(Ct.z*P.transmissionResolutionScale,Ct.w*P.transmissionResolutionScale);let vt=P.getRenderTarget(),Et=P.getActiveCubeFace(),Ot=P.getActiveMipmapLevel();P.setRenderTarget(yt),P.getClearColor(nt),Mt=P.getClearAlpha(),Mt<1&&P.setClearColor(16777215,.5),P.clear(),ae&&C.render(j);let Qt=P.toneMapping;P.toneMapping=Zn;let le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),T.setupLightsView(Z),mt===!0&&F.setGlobalState(P.clippingPlanes,Z),Ma(E,j,Z),Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt),te.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let ce=0,Be=O.length;ce<Be;ce++){let Ee=O[ce],{object:Se,geometry:Qe,material:Lt,group:an}=Ee;if(Lt.side===pn&&Se.layers.test(Z.layers)){let me=Lt.side;Lt.side=Je,Lt.needsUpdate=!0,Xh(Se,j,Z,Qe,Lt,an),Lt.side=me,Lt.needsUpdate=!0,It=!0}}It===!0&&(Xt.updateMultisampleRenderTarget(yt),Xt.updateRenderTargetMipmap(yt))}P.setRenderTarget(vt,Et,Ot),P.setClearColor(nt,Mt),le!==void 0&&(Z.viewport=le),P.toneMapping=Qt}function Ma(E,O,j){let Z=O.isScene===!0?O.overrideMaterial:null;for(let J=0,yt=E.length;J<yt;J++){let Ct=E[J],{object:vt,geometry:Et,group:Ot}=Ct,Qt=Ct.material;Qt.allowOverride===!0&&Z!==null&&(Qt=Z),vt.layers.test(j.layers)&&Xh(vt,O,j,Et,Qt,Ot)}}function Xh(E,O,j,Z,J,yt){H!==null&&J.isNodeMaterial&&H.setObject(E,J),E.onBeforeRender(P,O,j,Z,J,yt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(P,O,j,Z,E,yt),J.transparent===!0&&J.side===pn&&J.forceSinglePass===!1?(J.side=Je,J.needsUpdate=!0,P.renderBufferDirect(j,O,Z,J,E,yt),J.side=Ui,J.needsUpdate=!0,P.renderBufferDirect(j,O,Z,J,E,yt),J.side=pn):P.renderBufferDirect(j,O,Z,J,E,yt),E.onAfterRender(P,O,j,Z,J,yt)}function qh(E){let O=0;for(let j of E)j.texture!==null&&O++;return O}function er(E,O,j){O.isScene!==!0&&(O=ne);let Z=Wt.get(E),J=T.state.lights,yt=T.state.shadowsArray,Ct=J.state.version,vt=w.getParameters(E,J.state,yt,O,j,T.state.lightProbeGridArray),Et=w.getProgramCacheKey(vt),Ot=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;let Qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=R.get(E.envMap||Z.environment,Qt),Z.envMapRotation=Z.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",_e),Ot=new Map,Z.programs=Ot,Z.programVariants=new Map);let le=Ot.get(Et);if(le!==void 0){if(Z.currentProgram===le&&Z.lightsStateVersion===Ct)return Zh(E,vt),le}else vt.uniforms=w.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,j,vt),E.onBeforeCompile(vt,P),le=w.acquireProgram(vt,Et),Ot.set(Et,le),Z.uniforms=vt.uniforms;let It=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=F.uniform),Zh(E,vt),Z.needsLights=wd(E),Z.lightsStateVersion=Ct,Z.needsLights&&(It.ambientLightColor.value=J.state.ambient,It.lightProbe.value=J.state.probe,It.sunLights.value=J.state.sun,It.sunLightShadows.value=J.state.sunShadow,It.directionalLights.value=J.state.directional,It.directionalLightShadows.value=J.state.directionalShadow,It.spotLights.value=J.state.spot,It.spotLightShadows.value=J.state.spotShadow,It.rectAreaLights.value=J.state.rectArea,It.ltc_1.value=J.state.rectAreaLTC1,It.ltc_2.value=J.state.rectAreaLTC2,It.pointLights.value=J.state.point,It.pointLightShadows.value=J.state.pointShadow,It.hemisphereLights.value=J.state.hemi,It.sunShadowMatrix.value=J.state.sunShadowMatrix,It.sunShadowCascade.value=J.state.sunShadowCascade,It.directionalShadowMatrix.value=J.state.directionalShadowMatrix,It.spotLightMatrix.value=J.state.spotLightMatrix,It.spotLightMap.value=J.state.spotLightMap,It.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.numLightProbeGrids=qh(T.state.lightProbeGridArray),Z.currentProgram=le,Z.uniformsList=null,le}function bd(E,O,j,Z,J){let yt=Wt.get(E),Ct=yt.currentProgram.id+","+Z+","+J,vt=yt.programVariants.get(Ct);return vt===void 0?(vt=er(E,O,j),yt.programVariants.set(Ct,vt)):(yt.currentProgram=vt,yt.uniformsList=null,yt.outputColorSpace=Z,yt.toneMapping=J),vt}function Yh(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Xs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Zh(E,O){let j=Wt.get(E);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Ed(E,O,j,Z,J){O.isScene!==!0&&(O=ne),Xt.resetTextureUnits();let yt=O.fog,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,vt=ht===null?P.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:oe.workingColorSpace,Et=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ot=R.get(Z.envMap||Ct,Et),Qt=Z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,le=!!j.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),It=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,Be=!!j.morphAttributes.color,Ee=Zn;Z.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Ee=P.toneMapping);let Se=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=Se!==void 0?Se.length:0,Lt=Wt.get(Z),an=T.state.lights;if(mt===!0&&(At===!0||E!==it)){let Ie=E===it&&Z.id===$;F.setState(Z,E,Ie)}let me=!1,Vi=!1;Z.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==an.state.version||J.isBatchedMesh&&Lt.batching===!1||!J.isBatchedMesh&&Lt.batching===!0||J.isBatchedMesh&&Lt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Lt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Lt.instancing===!1||!J.isInstancedMesh&&Lt.instancing===!0||J.isSkinnedMesh&&Lt.skinning===!1||!J.isSkinnedMesh&&Lt.skinning===!0||J.isInstancedMesh&&Lt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Lt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Lt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Lt.instancingMorph===!1&&J.morphTexture!==null||Lt.envMap!==Ot||Z.fog===!0&&Lt.fog!==yt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==F.numPlanes||Lt.numIntersection!==F.numIntersection)||Lt.vertexAlphas!==Qt||Lt.vertexTangents!==le||Lt.morphTargets!==It||Lt.morphNormals!==ce||Lt.morphColors!==Be||Lt.morphTargetsCount!==Qe||Lt.numLightProbeGrids!==qh(T.state.lightProbeGridArray)?me=!0:(Lt.outputColorSpace!==vt||Lt.toneMapping!==Ee)&&(Vi=!0):(me=!0,Lt.__version=Z.version);let je=Lt.currentProgram;(me===!0||Vi===!0)&&(je=Vi===!0?bd(Z,O,J,vt,Ee):er(Z,O,J),H&&Z.isNodeMaterial&&H.onUpdateProgram(Z,je,Lt));let Sa=!1,Mi=!1,Wi=!1,ue=je.getUniforms(),Ze=Lt.uniforms;if(_t.useProgram(je.program)&&(Sa=!0,Mi=!0,Wi=!0),Z.id!==$&&($=Z.id,Mi=!0),Sa||it!==E){_t.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ue.setValue(z,"projectionMatrix",E.projectionMatrix),ue.setValue(z,"viewMatrix",E.matrixWorldInverse);let We=ue.map.cameraPosition;We!==void 0&&We.setValue(z,Zt.setFromMatrixPosition(E.matrixWorld)),ge.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ue.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),it!==E&&(it=E,Mi=!0,Wi=!0)}if(Lt.needsLights&&(an.state.sunShadowMap.length>0&&ue.setValue(z,"sunShadowMap",an.state.sunShadowMap,Xt),an.state.directionalShadowMap.length>0&&ue.setValue(z,"directionalShadowMap",an.state.directionalShadowMap,Xt),an.state.spotShadowMap.length>0&&ue.setValue(z,"spotShadowMap",an.state.spotShadowMap,Xt),an.state.pointShadowMap.length>0&&ue.setValue(z,"pointShadowMap",an.state.pointShadowMap,Xt)),J.isSkinnedMesh){ue.setOptional(z,J,"bindMatrix"),ue.setOptional(z,J,"bindMatrixInverse");let Ie=J.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),ue.setValue(z,"boneTexture",Ie.boneTexture,Xt))}J.isBatchedMesh&&(ue.setOptional(z,J,"batchingTexture"),ue.setValue(z,"batchingTexture",J._matricesTexture,Xt),ue.setOptional(z,J,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",J._indirectTexture,Xt),ue.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",J._colorsTexture,Xt));let In=j.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&W.update(J,j,je),(Mi||Lt.receiveShadow!==J.receiveShadow)&&(Lt.receiveShadow=J.receiveShadow,ue.setValue(z,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(Ze.envMapIntensity.value=O.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Cx()),Mi){if(ue.setValue(z,"toneMappingExposure",P.toneMappingExposure),Lt.needsLights&&Td(Ze,Wi),yt&&Z.fog===!0&&B.refreshFogUniforms(Ze,yt),B.refreshMaterialUniforms(Ze,Z,St,Vt,T.state.transmissionRenderTarget[E.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Ie=v,We=0;for(let ei of T.state.lightProbeGridArray)ei.texture!==null&&(Ie.textures[We]=ei.texture,Ie.min[We]=ei.boundingBox.min,Ie.max[We]=ei.boundingBox.max,Ie.resolution[We]=ei.resolution,We++);for(let ei in Ie)Ie[ei].length=We;Ze.probesSH.value=Ie.textures,Ze.probesMin.value=Ie.min,Ze.probesMax.value=Ie.max,Ze.probesResolution.value=Ie.resolution}Xs.upload(z,Yh(Lt),Ze,Xt)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Xs.upload(z,Yh(Lt),Ze,Xt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ue.setValue(z,"center",J.center),ue.setValue(z,"modelViewMatrix",J.modelViewMatrix),ue.setValue(z,"normalMatrix",J.normalMatrix),ue.setValue(z,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let Ie=Z.uniformsGroups;for(let We=0,ei=Ie.length;We<ei;We++){let $h=Ie[We];dt.update($h,je),dt.bind($h,je)}}return je}function Td(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function wd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ht},this.setRenderTargetTextures=function(E,O,j){let Z=Wt.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Wt.get(E.texture).__webglTexture=O,Wt.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:j,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let j=Wt.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){ht=E,K=O,V=j;let Z=null,J=!1,yt=!1;if(E){let vt=Wt.get(E);if(vt.__useDefaultFramebuffer!==void 0){_t.bindFramebuffer(z.FRAMEBUFFER,vt.__webglFramebuffer),rt.copy(E.viewport),Tt.copy(E.scissor),kt=E.scissorTest,_t.viewport(rt),_t.scissor(Tt),_t.setScissorTest(kt),$=-1;return}else if(vt.__webglFramebuffer===void 0)Xt.setupRenderTarget(E);else if(vt.__hasExternalTextures)Xt.rebindTextures(E,Wt.get(E.texture).__webglTexture,Wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qt=E.depthTexture;if(vt.__boundDepthTexture!==Qt){if(Qt!==null&&Wt.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(E)}}let Et=E.texture;(Et.isData3DTexture||Et.isDataArrayTexture||Et.isCompressedArrayTexture)&&(yt=!0);let Ot=Wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[O])?Z=Ot[O][j]:Z=Ot[O],J=!0):E.samples>0&&Xt.useMultisampledRTT(E)===!1?Z=Wt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?Z=Ot[j]:Z=Ot,rt.copy(E.viewport),Tt.copy(E.scissor),kt=E.scissorTest}else rt.copy(Ut).multiplyScalar(St).floor(),Tt.copy(jt).multiplyScalar(St).floor(),kt=ee;if(j!==0&&(Z=Y),_t.bindFramebuffer(z.FRAMEBUFFER,Z)&&_t.drawBuffers(E,Z),_t.viewport(rt),_t.scissor(Tt),_t.setScissorTest(kt),J){let vt=Wt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,vt.__webglTexture,j)}else if(yt){let vt=O;for(let Et=0;Et<E.textures.length;Et++){let Ot=Wt.get(E.textures[Et]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Et,Ot.__webglTexture,j,vt)}}else if(E!==null&&j!==0){let vt=Wt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vt.__webglTexture,j)}$=-1};function Jh(E){let O=Wt.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=ge.textureFormatReadable(E.format),O.__typeReadable=ge.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,j,Z,J,yt,Ct,vt=0){if(!(E&&E.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Et=Et[Ct],Array.isArray(Et)&&(Et=Et[0])),Et){_t.bindFramebuffer(z.FRAMEBUFFER,Et);try{let Ot=E.textures[vt],Qt=Ot.format,le=Ot.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let It=Jh(Ot);if(It.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Z&&j>=0&&j<=E.height-J&&z.readPixels(O,j,Z,J,Q.convert(Qt),Q.convert(le),yt)}finally{let Ot=ht!==null?Wt.get(ht).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,O,j,Z,J,yt,Ct,vt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Et=Et[Ct],Array.isArray(Et)&&(Et=Et[0])),Et)if(O>=0&&O<=E.width-Z&&j>=0&&j<=E.height-J){_t.bindFramebuffer(z.FRAMEBUFFER,Et);let Ot=E.textures[vt],Qt=Ot.format,le=Ot.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+vt);let It=Jh(Ot);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,yt.byteLength,z.STREAM_READ),z.readPixels(O,j,Z,J,Q.convert(Qt),Q.convert(le),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Be=ht!==null?Wt.get(ht).__webglFramebuffer:null;_t.bindFramebuffer(z.FRAMEBUFFER,Be);let Ee=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ff(z,Ee,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,yt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ce),z.deleteSync(Ee),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,j=0){let Z=Math.pow(2,-j),J=Math.floor(E.image.width*Z),yt=Math.floor(E.image.height*Z),Ct=O!==null?O.x:0,vt=O!==null?O.y:0;Xt.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Ct,vt,J,yt),_t.unbindTexture()},this.copyTextureToTexture=function(E,O,j=null,Z=null,J=0,yt=0){let Ct,vt,Et,Ot,Qt,le,It,ce,Be,Ee=E.isCompressedTexture?E.mipmaps[yt]:E.image;if(j!==null)Ct=j.max.x-j.min.x,vt=j.max.y-j.min.y,Et=j.isBox3?j.max.z-j.min.z:1,Ot=j.min.x,Qt=j.min.y,le=j.isBox3?j.min.z:0;else{let ue=Math.pow(2,-J);Ct=Math.floor(Ee.width*ue),vt=Math.floor(Ee.height*ue),E.isDataArrayTexture?Et=Ee.depth:E.isData3DTexture?Et=Math.floor(Ee.depth*ue):Et=1,Ot=0,Qt=0,le=0}Z!==null?(It=Z.x,ce=Z.y,Be=Z.z):(It=0,ce=0,Be=0);let Se=Q.convert(O.format),Qe=Q.convert(O.type),Lt;O.isData3DTexture?(Xt.setTexture3D(O,0),Lt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Xt.setTexture2DArray(O,0),Lt=z.TEXTURE_2D_ARRAY):(Xt.setTexture2D(O,0),Lt=z.TEXTURE_2D),_t.activeTexture(z.TEXTURE0),_t.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),_t.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_t.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let an=_t.getParameter(z.UNPACK_ROW_LENGTH),me=_t.getParameter(z.UNPACK_IMAGE_HEIGHT),Vi=_t.getParameter(z.UNPACK_SKIP_PIXELS),je=_t.getParameter(z.UNPACK_SKIP_ROWS),Sa=_t.getParameter(z.UNPACK_SKIP_IMAGES);_t.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,Ot),_t.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let Mi=E.isDataArrayTexture||E.isData3DTexture,Wi=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let ue=Wt.get(E),Ze=Wt.get(O),In=Wt.get(ue.__renderTarget),Ie=Wt.get(Ze.__renderTarget);_t.bindFramebuffer(z.READ_FRAMEBUFFER,In.__webglFramebuffer),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<Et;We++)Mi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(E).__webglTexture,J,le+We),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(O).__webglTexture,yt,Be+We)),z.blitFramebuffer(Ot,Qt,Ot+Ct,Qt+vt,It,ce,It+Ct,ce+vt,z.DEPTH_BUFFER_BIT,z.NEAREST);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||Wt.has(E)){let ue=Wt.get(E),Ze=Wt.get(O);_t.bindFramebuffer(z.READ_FRAMEBUFFER,I),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let In=0;In<Et;In++)Mi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ue.__webglTexture,J,le+In):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ue.__webglTexture,J),Wi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ze.__webglTexture,yt,Be+In):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ze.__webglTexture,yt),J!==0?z.blitFramebuffer(Ot,Qt,Ot+Ct,Qt+vt,It,ce,It+Ct,ce+vt,z.COLOR_BUFFER_BIT,z.NEAREST):Wi?z.copyTexSubImage3D(Lt,yt,It,ce,Be+In,Ot,Qt,Ct,vt):z.copyTexSubImage2D(Lt,yt,It,ce,Ot,Qt,Ct,vt);_t.bindFramebuffer(z.READ_FRAMEBUFFER,null),_t.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Wi?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Lt,yt,It,ce,Be,Ct,vt,Et,Se,Qe,Ee.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Lt,yt,It,ce,Be,Ct,vt,Et,Se,Ee.data):z.texSubImage3D(Lt,yt,It,ce,Be,Ct,vt,Et,Se,Qe,Ee):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,yt,It,ce,Ct,vt,Se,Qe,Ee.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,yt,It,ce,Ee.width,Ee.height,Se,Ee.data):z.texSubImage2D(z.TEXTURE_2D,yt,It,ce,Ct,vt,Se,Qe,Ee);_t.pixelStorei(z.UNPACK_ROW_LENGTH,an),_t.pixelStorei(z.UNPACK_IMAGE_HEIGHT,me),_t.pixelStorei(z.UNPACK_SKIP_PIXELS,Vi),_t.pixelStorei(z.UNPACK_SKIP_ROWS,je),_t.pixelStorei(z.UNPACK_SKIP_IMAGES,Sa),yt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Lt),_t.unbindTexture()},this.initRenderTarget=function(E){Wt.get(E).__webglFramebuffer===void 0&&Xt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xt.setTextureCube(E,0):E.isData3DTexture?Xt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xt.setTexture2DArray(E,0):Xt.setTexture2D(E,0),_t.unbindTexture()},this.resetState=function(){K=0,V=0,ht=null,_t.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var Zs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Px=new es(-1,1,1,-1,0,1),gh=class extends pe{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}},Ix=new gh,Bi=class{constructor(t){this._mesh=new Nt(Ix,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Px)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Tl=class extends bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gi.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Bi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oa=class extends bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wl=class extends bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Al=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new lt);this._width=i.width,this._height=i.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:He}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tl(Zs),this.copyPass.material.blending=ui,this.timer=new Vr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(a instanceof oa?i=!0:a instanceof wl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Rl=class extends bn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var td={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Js=class n extends bn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,a,{type:He,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Fe(r,a,{type:He,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Fe(r,a,{type:He,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=td;this.highPassUniforms=gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(Zs.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:Zs.vertexShader,fragmentShader:Zs.fragmentShader,premultipliedAlpha:!0,blending:fi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new hn,this._fsQuad=new Bi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Js.BlurDirectionX=new lt(1,0);Js.BlurDirectionY=new lt(0,1);var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Cl=class extends bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=gi.clone(la.uniforms),this.material=new Os({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new Bi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===de&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===qr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Yr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function En(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new pe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0,d=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let p=0;p<d.count;++p)f.push(d.getX(p)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=ed(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let y=0;y<a[h].length;++y)d.push(a[h][y][u]);let p=ed(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function ed(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ke(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/e;for(let u=0,d=h.count;u<d;u++)for(let p=0;p<e;p++){let y=h.getComponent(u,p);o.setComponent(u+f,p,y)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Qn=[{id:"jk",name:"JK Racing",driver:"J. Koppanalil",code:"JKO",num:7,paint:"#0d0f0d",accent:"#b8f36b",helmet:"#b8f36b"},{id:"rossa",name:"Scuderia Rossa",driver:"L. Ferraro",code:"FER",num:16,paint:"#c8102e",accent:"#f6d200",helmet:"#f6d200"},{id:"silver",name:"Silver Arrow",driver:"H. Weber",code:"WEB",num:44,paint:"#b9c2c9",accent:"#00d2be",helmet:"#7a1fd0"},{id:"bull",name:"Blue Bull",driver:"M. Vos",code:"VOS",num:1,paint:"#14214d",accent:"#ff2740",helmet:"#ffd21f"},{id:"papaya",name:"Papaya GP",driver:"O. Prior",code:"PRI",num:81,paint:"#ff8000",accent:"#1e2a3a",helmet:"#ff8000"},{id:"verde",name:"Verde F1",driver:"F. Alvarez",code:"ALV",num:14,paint:"#00594f",accent:"#cedc00",helmet:"#00a3e0"},{id:"azure",name:"Azure Alpine",driver:"P. Garnier",code:"GAR",num:10,paint:"#1572d9",accent:"#ff87bc",helmet:"#ffffff"},{id:"steel",name:"Steel Works",driver:"N. Holm",code:"HOL",num:27,paint:"#e8e8e8",accent:"#b6000e",helmet:"#222222"},{id:"oxford",name:"Oxford Racing",driver:"A. Albion",code:"ALB",num:23,paint:"#0a1e6e",accent:"#e8e8e8",helmet:"#00a0de"},{id:"neon",name:"Neon Bulls",driver:"Y. Tanaka",code:"TAN",num:22,paint:"#e8e8f8",accent:"#2b4bff",helmet:"#ff2740"}],Lx={jk:[0,"#ffffff","KOPPA ENERGY"],rossa:[2,"#ffffff","APEX OIL"],silver:[3,"#111111","HELIX"],bull:[1,"#ffd21f","ORBIT"],papaya:[1,"#00a0de","ZEPHYR"],verde:[0,"#ffffff","QUANTA"],azure:[1,"#ffffff","SUMMIT AIR"],steel:[3,"#111111","VELOCITY"],oxford:[2,"#d4141f","LIME TELECOM"],neon:[0,"#ff2740","NOVA"]};Qn.forEach((n,t)=>{let e=Lx[n.id];n.pat=e[0],n.third=e[1],n.sponsor=e[2],n.tcam=t%2?"#ffe600":"#0b0b0b"});var nd={soft:"#e8202a",medium:"#f3d11a",hard:"#f2f2f2"};function Pl(n,t=18,e=2.5){let i=[],s=[],r=n.length;for(let l of n){let c=l.n||e;for(let h=0;h<t;h++){let f=h/t*Math.PI*2,u=Math.cos(f),d=Math.sin(f);i.push((l.x||0)+Math.sign(u)*Math.abs(u)**(2/c)*l.w/2,l.y+Math.sign(d)*Math.abs(d)**(2/c)*l.h/2,l.z)}}for(let l=0;l<r-1;l++)for(let c=0;c<t;c++){let h=l*t+c,f=l*t+(c+1)%t,u=h+t,d=f+t;s.push(h,u,f,f,u,d)}let a=(l,c)=>{let h=i.length/3,f=n[l];i.push(f.x||0,f.y,f.z);for(let u=0;u<t;u++){let d=l*t+u,p=l*t+(u+1)%t;c?s.push(h,p,d):s.push(h,d,p)}};a(0,n[0].z<n[1].z),a(r-1,n[r-1].z>n[r-2].z);let o=new pe;return o.setAttribute("position",new Bt(i,3)),o.setIndex(s),o.computeVertexNormals(),_n(o)}function _n(n){let t=n.index?n.toNonIndexed():n;for(let e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t}var Tn=(n,t,e,i,s,r,a=0,o=0,l=0)=>_n(new ye(n,t,e).rotateX(a).rotateY(o).rotateZ(l).translate(i,s,r));function ca(n,t,e=.018){let i=new D(...n),s=new D(...t),r=s.clone().sub(i),a=new un(e,e,r.length(),6);return a.applyQuaternion(new dn().setFromUnitVectors(new D(0,1,0),r.clone().normalize())),a.translate((i.x+s.x)/2,(i.y+s.y)/2,(i.z+s.z)/2),_n(a)}var Nx=n=>{let t=n.clone().scale(-1,1,1),e=t.attributes.position;for(let i=0;i<e.count;i+=3)for(let s of["position","normal"]){let r=t.attributes[s];if(r)for(let a=0;a<3;a++){let o=r.getComponent(i+1,a);r.setComponent(i+1,a,r.getComponent(i+2,a)),r.setComponent(i+2,a,o)}}return t.computeVertexNormals(),t},Cn=n=>[n,Nx(n)],Kn={front:1.85,rear:-1.75,r:.36},Il=null;function Dx(){if(Il)return Il;let n=[],t=[],e=[],i=[],s=[],r=[],a=[];n.push(Pl([{z:3,w:.13,h:.09,y:.26},{z:2.88,w:.2,h:.14,y:.27},{z:2.5,w:.28,h:.2,y:.31},{z:2,w:.37,h:.27,y:.37},{z:1.5,w:.47,h:.33,y:.42},{z:1,w:.57,h:.4,y:.47},{z:.5,w:.66,h:.44,y:.5},{z:.1,w:.7,h:.44,y:.5},{z:-.38,w:.72,h:.46,y:.5},{z:-.6,w:.7,h:.44,y:.5}],20,2.4)),t.push(Pl([{z:3.02,w:.1,h:.07,y:.26},{z:2.95,w:.16,h:.12,y:.265},{z:2.84,w:.215,h:.15,y:.272}],16,2.4)),i.push(_n(new Yn(.5,24).scale(.42,.82,1).rotateX(-Math.PI/2).translate(0,.727,-.02))),e.push(_n(new ts(.5,.025,6,28).scale(.44,.86,1).rotateX(-Math.PI/2).translate(0,.73,-.02))),n.push(Pl([{z:-.3,w:.3,h:.06,y:.95},{z:-.31,w:.42,h:.46,y:.8},{z:-.4,w:.44,h:.48,y:.8},{z:-.6,w:.5,h:.54,y:.77},{z:-1.1,w:.52,h:.44,y:.7},{z:-1.7,w:.36,h:.32,y:.62},{z:-2.2,w:.2,h:.2,y:.55},{z:-2.36,w:.1,h:.1,y:.5}],18,2.6)),i.push(_n(new Yn(.5,18).scale(.2,.13,1).translate(0,.955,-.295))),n.push(Pl([{z:.5,w:1.3,h:.08,y:.46},{z:.47,w:1.5,h:.4,y:.43},{z:.1,w:1.56,h:.43,y:.42},{z:-.5,w:1.44,h:.4,y:.41},{z:-1.1,w:1.04,h:.34,y:.41},{z:-1.65,w:.62,h:.3,y:.43},{z:-2.1,w:.32,h:.22,y:.46}],22,3.2)),Cn(Tn(.3,.17,.02,.55,.47,.495)).forEach(u=>i.push(u)),Cn(_n(new Ae(.09,1.7).rotateX(-Math.PI/2).translate(.52,.64,-.45))).forEach(u=>t.push(u));let o=new Qi;o.moveTo(-.45,1),o.lineTo(-.8,.45),o.lineTo(-.8,-1.3),o.lineTo(-.52,-1.42),o.lineTo(-.52,-2.15),o.lineTo(.52,-2.15),o.lineTo(.52,-1.42),o.lineTo(.8,-1.3),o.lineTo(.8,.45),o.lineTo(.45,1),o.closePath(),e.push(_n(new Us(o,{depth:.03,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,.1,0))),Cn(Tn(.03,.1,1.75,.8,.13,-.43)).forEach(u=>t.push(u)),e.push(Tn(1,.02,.45,0,.16,-2.3,-.35));for(let u=-2;u<=2;u++)e.push(Tn(.015,.14,.4,u*.2,.15,-2.3,-.35));[[2.86,.085,.22,-.06,"c"],[2.72,.12,.17,-.25,"a"],[2.62,.165,.13,-.45,"a"]].forEach(([u,d,p,y,m])=>(m==="c"?e:t).push(Tn(1.94,.018,p,0,d,u,y))),Cn(Tn(.016,.24,.52,.975,.15,2.72)).forEach(u=>e.push(u)),Cn(Tn(.012,.17,.28,.25,.17,2.75)).forEach(u=>e.push(u)),Cn(Tn(.02,.58,.62,.5,.83,-2.42)).forEach(u=>e.push(u)),n.push(Tn(1,.025,.32,0,.9,-2.4,.18)),e.push(Tn(.9,.02,.14,0,.45,-2.38,.25)),e.push(Tn(.04,.46,.1,0,.65,-2.26)),r.push(Tn(.12,.06,.03,0,.38,-2.5));let l=new Qi;l.moveTo(-.6,.9),l.lineTo(-2.2,.6),l.lineTo(-2.3,1.14),l.lineTo(-1.25,1.06),l.closePath(),n.push(_n(new Us(l,{depth:.012,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.006,0,0)));let c=[[-.29,.72,-.3],[-.31,.84,-.05],[-.22,.91,.24],[0,.93,.35],[.22,.91,.24],[.31,.84,-.05],[.29,.72,-.3]].map(u=>new D(...u));e.push(_n(new Or(new Pi(c),24,.032,8))),e.push(ca([0,.93,.35],[0,.74,.55],.028)),Cn(Tn(.15,.07,.045,.46,.83,.3)).forEach(u=>n.push(u)),Cn(_n(new Ae(.13,.055).rotateY(Math.PI).translate(.46,.83,.274))).forEach(u=>a.push(u)),Cn(ca([.34,.68,.28],[.44,.81,.3],.012)).forEach(u=>e.push(u));let h=(u,d,p,y)=>{[[.46,.3],[.31,.25]].forEach(([m,g])=>{Cn(ca([d,m,y+.18],[p,g+.12,u])).forEach(x=>e.push(x)),Cn(ca([d,m,y-.18],[p,g+.12,u])).forEach(x=>e.push(x))}),Cn(ca([d,.42,y],[p,.3,u+.02],.012)).forEach(m=>e.push(m))};h(Kn.front,.22,.66,Kn.front),h(Kn.rear,.3,.6,Kn.rear+.05),s.push(_n(new Ii(.14,18,12).scale(1,1.04,1.13).translate(0,.84,-.07))),i.push(_n(new Ii(.142,16,8,Math.PI/2-.85,1.7,1.15,.45).scale(1,1.04,1.13).translate(0,.84,-.07))),i.push(_n(new un(.08,.1,.1,10).translate(0,.73,-.07)));let f=u=>En(u.map(d=>d.index?d.toNonIndexed():d));return Il={paint:f(n),accent:f(t),carbon:f(e),black:f(i),helmet:f(s),glow:f(r),chrome:f(a)},Il}var _h={};function Ux(n,t){let e=n+t;if(_h[e])return _h[e];let i=Kn.r,s=n,r=s/2,a=[[.229,-r],[.285,-r],[.29,-r-.001],[.312,-r-.001],[.318,-r],[.335,-r+.008],[.354,-r+.03],i,[.354,r-.03],[.335,r-.008],[.318,r],[.312,r+.001],[.29,r+.001],[.285,r],[.229,r]],o=[];a.forEach(m=>{m===i?o.push(new lt(i,-r+.065),new lt(i,r-.065)):o.push(new lt(m[0],m[1]))});let l=new Fr(o,36).toNonIndexed(),c=[],h=new Pt("#141416"),f=new Pt(nd[t]),u=l.attributes.position;for(let m=0;m<u.count;m+=3){let g=!0;for(let M=0;M<3;M++){let v=u.getX(m+M),A=u.getZ(m+M),T=Math.hypot(v,A),_=u.getY(m+M);T>.287&&T<.316&&Math.abs(_)>r-.002||(g=!1)}let x=g?f:h;for(let M=0;M<3;M++)c.push(x.r,x.g,x.b)}l.setAttribute("color",new Bt(c,3));let d=(m,g)=>{m=m.index?m.toNonIndexed():m;for(let v of Object.keys(m.attributes))v!=="position"&&v!=="normal"&&m.deleteAttribute(v);let x=new Pt(g),M=[];for(let v=0;v<m.attributes.position.count;v++)M.push(x.r,x.g,x.b);return m.setAttribute("color",new Bt(M,3)),m};for(let m of Object.keys(l.attributes))["position","normal","color"].includes(m)||l.deleteAttribute(m);let p=[l,d(new un(.228,.228,s-.03,24,1,!0),"#26272b"),d(new un(.2,.2,.01,24).translate(0,r-.02,0),"#18191c"),d(new un(.2,.2,.01,24).translate(0,-r+.02,0),"#18191c")];for(let m=0;m<5;m++)[1,-1].forEach(g=>p.push(d(new ye(.035,.012,.19).translate(0,g*(r-.012),.1).rotateY(m/5*Math.PI*2),"#9a9ea6")));[1,-1].forEach(m=>p.push(d(new un(.045,.045,.02,12).translate(0,m*(r-.008),0),"#d8b23a")));let y=En(p).rotateZ(Math.PI/2);return _h[e]=y,y}var _i={};function Fx(){if(_i.carbon)return _i;_i.carbon=new Kt({color:"#2a2c30",roughness:.42,metalness:.35}),_i.black=new Kt({color:"#060607",roughness:.25,metalness:.2}),_i.chrome=new Kt({color:"#cfd8e0",roughness:.05,metalness:1}),_i.wheel=new Kt({vertexColors:!0,roughness:.78,metalness:.1});let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,4,64,64,64);return e.addColorStop(0,"rgba(0,0,0,.75)"),e.addColorStop(.6,"rgba(0,0,0,.4)"),e.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),_i.blob=new hn({map:new On(n),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),_i.blobGeo=new Ae(2.6,6.4).rotateX(-Math.PI/2),_i}function Ox(n){let t=new Bs({color:n.paint,roughness:.32,metalness:.12,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.8}),e={uB:{value:new Pt(n.accent)},uC:{value:new Pt(n.third)},uPat:{value:n.pat}};return t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP; uniform vec3 uB; uniform vec3 uC; uniform float uPat;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float y = vLP.y, z = vLP.z, x = abs(vLP.x), m = 0.;
        if (uPat < .5) m = 1. - smoothstep(.43 + z * .035, .45 + z * .035, y);
        else if (uPat < 1.5) m = 1. - smoothstep(.05, .065, abs(y - (.56 + z * .085)));
        else if (uPat < 2.5) m = smoothstep(1.5, 1.9, z) + (1. - smoothstep(-1.6, -1.15, z)) * step(.6, y);
        else m = 1. - smoothstep(.08, .095, x);
        float pin = (1. - smoothstep(.008, .014, abs(y - (.6 + z * .03)))) * step(-1.7, z) * step(z, 1.1) * step(.3, x);
        diffuseColor.rgb = mix(mix(diffuseColor.rgb, uB, clamp(m, 0., 1.)), uC, pin); }`)},t.customProgramCacheKey=()=>"livery",t}function Bx(n){let t=new Pt(n);return .3*t.r+.59*t.g+.11*t.b}function zx(n){let t=document.createElement("canvas");t.width=512,t.height=96;let e=t.getContext("2d"),i=Bx(n.paint)>.45;e.font="900 italic 64px Arial",e.textAlign="center",e.textBaseline="middle",e.lineWidth=6,e.strokeStyle=i?"rgba(255,255,255,.6)":"rgba(0,0,0,.5)",e.strokeText(n.sponsor,256,50),e.fillStyle=i?"#111":"#fff",e.fillText(n.sponsor,256,50);let s=new On(t);return s.colorSpace=Ne,s.anisotropy=4,s}var xh={};function kx(n){if(xh[n])return xh[n];let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=128/.335;e.strokeStyle=nd[n],e.lineWidth=7,[0,Math.PI].forEach(r=>{e.beginPath(),e.arc(128,128,.301*i,r+.55,r+2.6),e.stroke()}),e.fillStyle="#f2f2f2",e.font="bold 19px Arial",e.textAlign="center",e.textBaseline="middle",[0,Math.PI].forEach(r=>{let a="NOVA",o=.262*i;[...a].forEach((l,c)=>{let h=r-.32+c*.21;e.save(),e.translate(128+Math.cos(h-Math.PI/2)*o,128+Math.sin(h-Math.PI/2)*o),e.rotate(h),e.fillText(l,0,0),e.restore()})});let s=new On(t);return s.colorSpace=Ne,s.anisotropy=4,xh[n]=new Kt({map:s,transparent:!0,alphaTest:.3,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1})}var vh={};function Hx(n){if(vh[n])return vh[n];let t=n/2+.003;return vh[n]=En([new Fs(.23,.335,40).rotateY(Math.PI/2).translate(t,0,0),new Fs(.23,.335,40).rotateY(-Math.PI/2).translate(-t,0,0)])}function Gx(n){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle=n.paint,e.fillRect(0,0,256,64),e.fillStyle=n.accent,e.fillRect(0,50,256,14),e.font="900 italic 44px Arial",e.textBaseline="middle",e.fillStyle="#fff",e.strokeStyle="rgba(0,0,0,.55)",e.lineWidth=4,e.strokeText(String(n.num),14,28),e.fillText(String(n.num),14,28),e.font="800 22px Arial",e.fillStyle=n.accent,e.fillText(n.name.toUpperCase(),90,28);let i=new On(t);return i.colorSpace=Ne,i.anisotropy=4,i}function yh(n,t="soft",e={}){let i=Dx(),s=Fx(),r=new qe,a=new qe;r.add(a);let o=(I,G=.32)=>new Bs({color:I,roughness:G,metalness:.12,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.8}),l={paint:Ox(n),accent:o(n.accent,.32),helmet:o(n.helmet,.25),glow:new Kt({color:"#400",emissive:"#ff2020",emissiveIntensity:1})},c=(I,G)=>{let K=new Nt(I,G);return K.castShadow=!0,K.receiveShadow=!0,a.add(K),K};c(i.paint,l.paint),c(i.accent,l.accent),c(i.carbon,s.carbon),c(i.black,s.black);let h=c(i.helmet,l.helmet);c(i.glow,l.glow),c(i.chrome,s.chrome);let f=new Kt({map:Gx(n),roughness:.4,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1});[1,-1].forEach(I=>{let G=new Nt(new Ae(.8,.1),f);G.position.set(I*.008,1.01,-1.6),G.rotation.y=I*Math.PI/2,a.add(G)});let u=new Nt(new Ae(.3,.075).rotateZ(Math.PI/2).rotateX(-Math.PI/2).rotateX(.16),f);u.position.set(0,.588,1.6),a.add(u);let d=new Kt({map:zx(n),alphaTest:.45,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-2});[1,-1].forEach(I=>{let G=new Nt(new Ae(.95,.18),d);G.position.set(I*.768,.47,-.22),G.rotation.y=I*(Math.PI/2+.08),a.add(G)});let p=new Nt(new Ae(.94,.2).rotateZ(Math.PI).rotateX(-Math.PI/2).rotateX(.18).translate(0,.914,-2.398),d);a.add(p);let y=new Nt(new ye(.1,.055,.15),new Kt({color:n.tcam,roughness:.4}));y.position.set(0,1.065,-.47),y.castShadow=!0,a.add(y);let m=new qe;m.position.set(0,1.02,-2.28);let g=new Nt(new ye(1,.022,.22).translate(0,0,-.11),l.accent);g.castShadow=!0,m.add(g),m.rotation.x=.55,a.add(m);let x=[],M=[];[[Kn.front,.82,.3],[Kn.rear,.78,.4]].forEach(([I,G,K],V)=>[1,-1].forEach(ht=>{let $=new qe;$.position.set(ht*G,Kn.r,I);let it=new Nt(Ux(K,t),s.wheel);it.castShadow=!0,it.add(new Nt(Hx(K),kx(t))),$.add(it),r.add($),x.push(it),V||M.push($)}));let v=new qe;v.position.set(0,.7,.34),v.rotation.x=-.5;let A=new Nt(new ye(.3,.13,.04),s.carbon);v.add(A),[-1,1].forEach(I=>{let G=new Nt(new ye(.06,.17,.06),s.black);G.position.set(I*.15,-.01,0),v.add(G)});let T=document.createElement("canvas");T.width=128,T.height=48;let _=new On(T);_.colorSpace=Ne;let b=new Nt(new Ae(.13,.05),new hn({map:_,toneMapped:!1}));b.position.set(0,.01,.021),v.add(b);let N=new hn({vertexColors:!0,toneMapped:!1}),P=[];for(let I=0;I<10;I++){let G=new ye(.012,.01,.005).translate(-.055+I*.0122,.05,.022);P.push(G)}let U=new Nt(En(P),N),H=new Float32Array(U.geometry.attributes.position.count*3);U.geometry.setAttribute("color",new ke(H,3)),v.add(U),v.visible=!1,a.add(v);let Y=new Nt(s.blobGeo,s.blob);return Y.position.y=.03,Y.renderOrder=1,r.add(Y),r.userData={team:n,body:a,helm:h,wheels:x,steer:M,flap:m,mats:l,glow:l.glow,sw:v,swCanvas:T,swTex:_,leds:U,blob:Y},r}function id(n,t,e){let i=n.userData.leds,s=i.geometry.attributes.color,r=s.count/10;for(let a=0;a<10;a++){let o=t*10>a,l=e?[.2,.4,1]:a<4?[.1,1,.2]:a<7?[1,.1,.1]:[.4,.2,1];for(let c=0;c<r;c++)s.setXYZ(a*r+c,...o?l:[.05,.05,.05])}s.needsUpdate=!0}var Mh={dune:{name:"Dune Valley GP",blurb:"Fast sweepers into a desert sunset",time:"sunset",width:15,pts:[[0,0],[700,0],[1050,60],[1180,300],[1050,520],[760,540],[600,700],[700,930],[560,1120],[240,1120],[60,920],[-200,880],[-380,700],[-330,450],[-500,260],[-380,30]]},harbor:{name:"Harbor Night Circuit",blurb:"Tight street circuit under the floodlights",time:"night",width:13,pts:[[0,0],[760,0],[880,60],[870,380],[700,430],[680,600],[880,640],[920,900],[540,930],[470,720],[220,700],[170,930],[-220,940],[-250,520],[-60,470],[-130,70]]},alpine:{name:"Alpine Ring",blurb:"Flowing climb through pine forest",time:"day",width:14,pts:[[0,0],[520,-30],[900,60],[1200,320],[1160,620],[900,720],[700,570],[470,650],[390,900],[110,1010],[-200,870],[-270,570],[-110,390],[-330,210],[-270,40]]}},Ll={day:{sky:["#2f6fcf","#9cc4ee","#dde9f3"],fog:"#bcd2e6",sun:"#fff4e2",sunI:3,hemi:["#d6e8ff","#5d6b45",1.1],dir:[-.4,.75,-.5],exp:1,lamps:0,grass:"#4f7d36"},sunset:{sky:["#2b3a78","#e57b5a","#ffc27a"],fog:"#e7a982",sun:"#ffb56b",sunI:2.6,hemi:["#ffc79a","#4d4636",.75],dir:[-.85,.28,-.35],exp:1.05,lamps:.4,grass:"#8a7a45"},night:{sky:["#02040b","#08142c","#1b2d52"],fog:"#0e1830",sun:"#a8bdf0",sunI:.7,hemi:["#5470b0","#141414",.55],dir:[.3,.8,.4],exp:1.15,lamps:1,grass:"#2f4a2a"}},Vx=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function Wx(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Xx(n){let t=new Pt(n);return .3*t.r+.59*t.g+.11*t.b}function fn(n,t,e,i,s=8){let r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);let a=new On(r);return a.colorSpace=Ne,a.anisotropy=s,i&&(a.wrapS=a.wrapT=Ri,a.repeat.set(...i)),a}function Sh(n,t){return new Nt(new Ii(5e3,32,16),new De({side:Je,depthWrite:!1,fog:!1,uniforms:{a:{value:new Pt(n.sky[0])},b:{value:new Pt(n.sky[1])},c:{value:new Pt(n.sky[2])},sun:{value:new D(...n.dir).normalize()},night:{value:t?1:0}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 a,b,c,sun; uniform float night; varying vec3 vP; float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
        void main(){ float y=max(vP.y,0.); vec3 col=mix(c,b,smoothstep(0.,.25,y)); col=mix(col,a,smoothstep(.2,.9,y)); float s=max(dot(vP,sun),0.); col+=vec3(1.,.85,.6)*(pow(s,700.)*3.+pow(s,10.)*.3)*(1.-night*.8);
          if(night>.5){ vec3 q=floor(vP*400.); col+=vec3(step(.997,h(q)))*smoothstep(.05,.3,y); } gl_FragColor=vec4(col,1.); }`}))}var ha=class{constructor(t){let e=Mh[t];this.id=t,this.def=e,this.W=e.width;let i=new Pi(e.pts.map(([u,d])=>new D(u,0,d)),!0,"centripetal",.5),s=i.getLength(),r=Math.round(s/2);this.L=s,this.N=r,this.ds=s/r;let a=new Float32Array(r),o=new Float32Array(r),l=new Float32Array(r),c=new Float32Array(r),h=i.getSpacedPoints(r);for(let u=0;u<r;u++)a[u]=h[u].x,o[u]=h[u].z;for(let u=0;u<r;u++){let d=(u-1+r)%r,p=(u+1)%r,y=a[p]-a[d],m=o[p]-o[d],g=Math.hypot(y,m);l[u]=y/g,c[u]=m/g}let f=new Float32Array(r);for(let u=0;u<r;u++){let d=(u-4+r)%r,p=(u+4)%r,y=l[d]*c[p]-c[d]*l[p],m=l[d]*l[p]+c[d]*c[p];f[u]=Math.atan2(y,m)/(8*this.ds)}Object.assign(this,{X:a,Z:o,TX:l,TZ:c,K:f}),this.racingLine(),this.speedProfile(),this.zones()}nx(t){return this.TZ[t]}nz(t){return-this.TX[t]}idx(t){let e=this.N;return(Math.floor(t/this.ds)%e+e)%e}pos(t,e,i){let s=this.N,r=t/this.ds,a=(Math.floor(r)%s+s)%s,o=(a+1)%s,l=r-Math.floor(r),c=this.X[a]+(this.X[o]-this.X[a])*l,h=this.Z[a]+(this.Z[o]-this.Z[a])*l,f=this.TX[a]+(this.TX[o]-this.TX[a])*l,u=this.TZ[a]+(this.TZ[o]-this.TZ[a])*l,d=Math.hypot(f,u);return i.x=c+u/d*e,i.z=h+-f/d*e,i.tx=f/d,i.tz=u/d,i}locate(t,e,i=-1){let s=this.N,r=0,a=1e18;if(i<0){for(let f=0;f<s;f+=3){let u=(t-this.X[f])**2+(e-this.Z[f])**2;u<a&&(a=u,r=f)}i=r}for(let f=-40;f<=40;f++){let u=(i+f+s)%s,d=(t-this.X[u])**2+(e-this.Z[u])**2;d<a&&(a=d,r=u)}let o=t-this.X[r],l=e-this.Z[r],c=o*this.TX[r]+l*this.TZ[r],h=o*this.nx(r)+l*this.nz(r);return{i:r,s:((r*this.ds+c)%this.L+this.L)%this.L,lat:h}}racingLine(){let t=this.N,e=this.W/2-1.6,i=new Float32Array(t),s=new Float32Array(t),r=new Float32Array(t);for(let a=0;a<260;a++){for(let l=0;l<t;l++)s[l]=this.X[l]+this.nx(l)*i[l],r[l]=this.Z[l]+this.nz(l)*i[l];let o=a<120?14:6;for(let l=0;l<t;l++){let c=(l-o+t)%t,h=(l+o)%t,f=(s[c]+s[h])/2,u=(r[c]+r[h])/2,d=(f-this.X[l])*this.nx(l)+(u-this.Z[l])*this.nz(l);i[l]=Math.max(-e,Math.min(e,i[l]+(d-i[l])*.5))}}this.RL=i}speedProfile(){let t=this.N,e=new Float32Array(t),i=this.ds,s=a=>this.X[a]+this.nx(a)*this.RL[a],r=a=>this.Z[a]+this.nz(a)*this.RL[a];for(let a=0;a<t;a++){let o=(a-8+t)%t,l=(a+8)%t,c=s(o),h=r(o),f=s(a),u=r(a),d=s(l),p=r(l),y=Math.hypot(f-c,u-h),m=Math.hypot(d-f,p-u),g=Math.hypot(d-c,p-h),x=Math.abs((f-c)*(p-h)-(u-h)*(d-c))/2,M=x<.001?1e5:y*m*g/(4*x);e[a]=Math.min(92,Math.sqrt(30*M))}for(let a=0;a<2;a++)for(let o=0;o<t;o++){let l=t-1-o,c=(l+1)%t;e[l]=Math.min(e[l],Math.sqrt(e[c]*e[c]+72*i))}for(let a=0;a<2;a++)for(let o=0;o<t;o++){let l=(o+1)%t,c=12*(1-e[o]/95)+2;e[l]=Math.min(e[l],Math.sqrt(e[o]*e[o]+2*c*i))}this.VP=e}zones(){let t=this.N,e=this.K;this.kerb=new Uint8Array(t),this.runoff=new Float32Array(t),this.drs=new Uint8Array(t);for(let a=0;a<t;a++)if(Math.abs(e[a])>.0055)for(let l=-14;l<=14;l++)this.kerb[(a+l+t)%t]=1;for(let a=0;a<t;a++){let o=0;for(let l=-40;l<=40;l+=4)o=Math.max(o,Math.abs(e[(a+l+t)%t]));this.runoff[a]=9+Vx(.003,.014,o)*16}let i=-1,s=0,r=[];for(let a=0;a<t*2;a++){let o=a%t;if(Math.abs(e[o])<.0022?(i<0&&(i=a),s++):(s*this.ds>380&&r.push([i,a]),i=-1,s=0),a>t&&i<0)break}r.forEach(([a,o])=>{for(let l=a+25;l<o-45;l++)this.drs[l%t]=1})}wall(t){return this.W/2+this.runoff[t]}build(t){let e=Ll[this.def.time],i=new qe,s=this.N,r=this.W,a=Wx(this.id.length*99+7),o=(w,B,k,L,F=10,tt=1,C=1,W)=>{let X=[],ot=[],Q=[],st=0,dt=!1,Ht=0;for(let Jt=0;Jt<=s;Jt+=C){let pt=Jt%s;if(!(!W||W(pt))){dt=!1;continue}let Ue=typeof w=="function"?w(pt):w,Pn=typeof B=="function"?B(pt):B;X.push(this.X[pt]+this.nx(pt)*Ue,k,this.Z[pt]+this.nz(pt)*Ue,this.X[pt]+this.nx(pt)*Pn,k,this.Z[pt]+this.nz(pt)*Pn),Ht=Jt*this.ds/F,ot.push(0,Ht,tt,Ht),dt&&Q.push(st-2,st,st-1,st-1,st,st+1),st+=2,dt=!0}let ct=new pe;ct.setAttribute("position",new Bt(X,3)),ct.setAttribute("uv",new Bt(ot,2)),ct.setIndex(Q),ct.computeVertexNormals();let Gt=new Nt(ct,L);return Gt.receiveShadow=!0,i.add(Gt),Gt},l=fn(256,256,(w,B,k)=>{w.fillStyle=e.grass,w.fillRect(0,0,B,k);for(let L=0;L<3e3;L++)w.fillStyle=`rgba(${a()<.5?"255,255,220":"0,20,0"},${.04+a()*.05})`,w.fillRect(a()*B,a()*k,2,2+a()*3);for(let L=0;L<6;L++)w.fillStyle="rgba(0,0,0,.05)",w.fillRect(0,L*42,B,21)},[300,300]),c=new Nt(new Ae(6e3,6e3),new Kt({map:l,roughness:1}));c.rotation.x=-Math.PI/2,c.position.set(400,-.15,500),c.receiveShadow=!0,i.add(c);let h=fn(512,512,(w,B,k)=>{w.fillStyle="#3b3d42",w.fillRect(0,0,B,k);for(let L=0;L<26e3;L++){let F=a();w.fillStyle=F<.5?`rgba(255,255,255,${.03+a()*.05})`:`rgba(0,0,0,${.06+a()*.1})`,w.fillRect(a()*B,a()*k,1+a()*2,1+a()*2)}},[3,1]);h.repeat.set(2,1);let f=10,u=[],d=[],p=[],y=[];for(let w=0;w<=s;w++){let B=w%s;for(let k=0;k<=f;k++){let L=-r/2+r*k/f,F=this.X[B]+this.nx(B)*L,tt=this.Z[B]+this.nz(B)*L;u.push(F,.02,tt),d.push(k/f*2,w*this.ds/12);let C=Math.abs(L-this.RL[B]),W=Math.max(0,1-C/2.4)*.35,X=1-W;p.push(X,X,X)}if(w<s)for(let k=0;k<f;k++){let L=w*(f+1)+k,F=L+f+1;y.push(L,F,L+1,F,F+1,L+1)}}let m=new pe;m.setAttribute("position",new Bt(u,3)),m.setAttribute("uv",new Bt(d,2)),m.setAttribute("color",new Bt(p,3)),m.setIndex(y),m.computeVertexNormals();let g=new Nt(m,new Kt({map:h,vertexColors:!0,roughness:.82,metalness:0}));g.receiveShadow=!0,i.add(g);let x=new Kt({color:"#cfd0cc",roughness:.85});o(r/2-.45,r/2-.2,.05,x),o(-r/2+.2,-r/2+.45,.05,x);let M=fn(64,256,(w,B,k)=>{for(let L=0;L<8;L++)w.fillStyle=L%2?"#f4f4f0":"#d4141f",w.fillRect(0,L*32,B,32);w.fillStyle="rgba(0,0,0,.15)",w.fillRect(0,0,6,k)},[1,1]),v=new Kt({map:M,roughness:.55});o(r/2-.2,r/2+1.5,.075,v,8,1,1,w=>this.kerb[w]),o(-r/2-1.5,-r/2+.2,.075,v,8,1,1,w=>this.kerb[w]);let A=fn(256,256,(w,B,k)=>{w.fillStyle="#c9b48a",w.fillRect(0,0,B,k);for(let L=0;L<9e3;L++)w.fillStyle=`rgba(${a()<.5?"255,250,230":"90,70,40"},${.15+a()*.2})`,w.fillRect(a()*B,a()*k,2,2)},[1,1]),T=new Kt({map:A,roughness:1}),_=new Kt({color:"#4f6f8f",roughness:.85});o(r/2+1.5,w=>this.wall(w)-.5,.012,T,10,2,1,w=>this.runoff[w]>13),o(w=>-this.wall(w)+.5,-r/2-1.5,.012,T,10,2,1,w=>this.runoff[w]>13),o(r/2+1.5,r/2+4,.015,_,10,1,1,w=>this.runoff[w]<=13),o(-r/2-4,-r/2-1.5,.015,_,10,1,1,w=>this.runoff[w]<=13);let b=["JK RACING","KOPPA ENERGY","NOVA TYRES","APEX OIL","LIME TELECOM","ORBIT WATCHES","VELOCITY","SUMMIT AIR"],N=fn(1024,64,(w,B,k)=>{b.forEach((L,F)=>{let tt=F*B/b.length;w.fillStyle=["#111","#b8f36b","#14378a","#d4141f","#f4f4f0","#ff8000","#202020","#00a0de"][F],w.fillRect(tt,0,B/b.length,k),w.fillStyle=["#b8f36b","#111","#fff","#fff","#111","#fff","#ffd21f","#fff"][F],w.font="900 30px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText(L,tt+B/b.length/2,k/2+2)})},[1,1]);N.wrapS=Ri;let P=new Kt({map:N,roughness:.6,side:pn}),U=w=>{let B=[],k=[],L=[],F=0;for(let C=0;C<=s;C++){let W=C%s,X=w*this.wall(W),ot=this.X[W]+this.nx(W)*X,Q=this.Z[W]+this.nz(W)*X;B.push(ot,0,Q,ot,1.25,Q);let st=w*C*this.ds/64;k.push(st,0,st,1),C&&L.push(F-2,F,F-1,F-1,F,F+1),F+=2}let tt=new pe;return tt.setAttribute("position",new Bt(B,3)),tt.setAttribute("uv",new Bt(k,2)),tt.setIndex(L),tt.computeVertexNormals(),tt};[1,-1].forEach(w=>{let B=new Nt(U(w),P);B.castShadow=B.receiveShadow=!0,i.add(B)});let H=[],Y=new ts(.38,.2,6,10).rotateX(Math.PI/2);for(let w=0;w<s;w+=3){if(this.runoff[w]<18)continue;let B=this.K[w]>0?1:-1,k=B*(this.wall(w)-.45);for(let L=0;L<3;L++)H.push(Y.clone().translate(this.X[w]+this.nx(w)*k,.2+L*.38,this.Z[w]+this.nz(w)*k))}if(H.length){let w=new Nt(En(H),new Kt({color:"#1b1c1e",roughness:.9}));w.castShadow=!0,i.add(w)}let I=fn(256,32,(w,B,k)=>{for(let L=0;L<32;L++)for(let F=0;F<4;F++)w.fillStyle=(L+F)%2?"#111":"#f2f2f2",w.fillRect(L*8,F*8,8,8)}),G=new Nt(new Ae(r,2),new Kt({map:I,roughness:.7}));G.rotation.x=-Math.PI/2,G.rotation.z=Math.atan2(-this.TZ[0],this.TX[0])+Math.PI/2,G.position.set(this.X[0],.06,this.Z[0]),i.add(G);let K=[];for(let w=0;w<10;w++){let B=this.L-12-w*9,k=w%2?-3:3,L=this.pos(B,k,{}),F=new Ae(2.4,.25).rotateX(-Math.PI/2).rotateY(Math.atan2(-L.tz,L.tx)+Math.PI/2);F.translate(L.x+L.tx*2.5,.06,L.z+L.tz*2.5),K.push(F)}i.add(new Nt(En(K),x));let V=this.pos(6,0,{}),ht=Math.atan2(V.tx,V.tz),$=new qe;$.position.set(V.x,0,V.z),$.rotation.y=ht;let it=new Kt({color:"#2a2d33",roughness:.4,metalness:.7});[-1,1].forEach(w=>{let B=new Nt(new ye(.6,8,.6),it);B.position.set(w*(r/2+2),4,0),B.castShadow=!0,$.add(B)});let rt=new Nt(new ye(r+5,1.6,.8),it);rt.position.y=7.4,$.add(rt);let Tt=[];for(let w=0;w<5;w++){let B=new Nt(new ye(1.1,1.1,.3),new Kt({color:"#111"}));B.position.set((w-2)*1.5,7.4,-.5),$.add(B);let k=new Kt({color:"#300",emissive:"#ff1a1a",emissiveIntensity:0});[-.25,.25].forEach(L=>{let F=new Nt(new Yn(.22,16),k);F.position.set((w-2)*1.5,7.4+L,-.66),F.rotation.y=Math.PI,$.add(F)}),Tt.push(k)}let kt=new Nt(new Ae(r+4,1.5),new Kt({map:fn(512,48,(w,B,k)=>{w.fillStyle="#b8f36b",w.fillRect(0,0,B,k),w.fillStyle="#0c0d0c",w.font="900 34px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText("JK GRAND PRIX",B/2,k/2+2)}),side:pn}));kt.position.set(0,9.2,0),$.add(kt),i.add($),this.lights=Tt;let nt=fn(512,128,(w,B,k)=>{w.fillStyle="#2a2c30",w.fillRect(0,0,B,k);for(let L=0;L<k;L+=8){w.fillStyle="rgba(255,255,255,.06)",w.fillRect(0,L,B,1);for(let F=0;F<B;F+=5)w.fillStyle=`hsl(${a()*360},${50+a()*40}%,${40+a()*40}%)`,w.fillRect(F+a()*2,L+2+a()*2,3,4)}},[6,1]),Mt=new Kt({map:nt,roughness:.9}),Rt=new Kt({color:"#d8dade",roughness:.5,metalness:.4}),Vt=(w,B,k,L)=>{let F=this.pos(w,k*L,{}),tt=this.pos(B,k*L,{}),C=Math.hypot(tt.x-F.x,tt.z-F.z),W=(F.x+tt.x)/2,X=(F.z+tt.z)/2,ot=Math.atan2(tt.x-F.x,tt.z-F.z),Q=new qe;Q.position.set(W,0,X),Q.rotation.y=ot;for(let dt=0;dt<6;dt++){let Ht=new Nt(new ye(2.2,1,C),Mt);Ht.position.set(k*(dt*2.2),dt*1.1+.5,0),Ht.castShadow=Ht.receiveShadow=!0,Q.add(Ht)}let st=new Nt(new ye(15,.4,C+2),Rt);st.position.set(k*5.5,10,0),st.rotation.z=k*.08,st.castShadow=!0,Q.add(st);for(let dt=-1;dt<=1;dt++){let Ht=new Nt(new un(.25,.25,10,8),Rt);Ht.position.set(k*12,5,dt*C*.4),Q.add(Ht)}i.add(Q)};Vt(80,330,-1,r/2+13),Vt(380,620,-1,r/2+13);let St=new Kt({color:"#e8e9ec",roughness:.5,metalness:.2}),Dt=this.pos(60,r/2+26,{}),fe=this.pos(640,r/2+26,{}),Ut=new Nt(new ye(14,9,Math.hypot(fe.x-Dt.x,fe.z-Dt.z)),St);Ut.position.set((Dt.x+fe.x)/2,4.5,(Dt.z+fe.z)/2),Ut.rotation.y=Math.atan2(fe.x-Dt.x,fe.z-Dt.z),Ut.castShadow=Ut.receiveShadow=!0,i.add(Ut);let jt=new Nt(new ye(14.2,2.2,Ut.geometry.parameters.depth+.2),new Kt({color:"#203040",roughness:.1,metalness:.8,emissive:e.lamps?"#4a6a90":"#000",emissiveIntensity:.6}));jt.position.copy(Ut.position).setY(7),jt.rotation.copy(Ut.rotation),i.add(jt);let ee=[],at=(w,B)=>Math.atan2(B?-w.tx:w.tx,B?-w.tz:w.tz),gt=fn(64,64,(w,B,k)=>{w.clearRect(0,0,B,k),w.strokeStyle="rgba(205,210,215,1)",w.lineWidth=2.2,w.beginPath(),w.moveTo(0,0),w.lineTo(B,k),w.moveTo(B,0),w.lineTo(0,k),w.stroke()},[1,1]),mt=new Kt({map:gt,alphaTest:.4,side:pn,roughness:.5,metalness:.6}),At=w=>{let B=[],k=[],L=[],F=0;for(let C=0;C<=s;C++){let W=C%s,X=w*(this.wall(W)+.05),ot=this.X[W]+this.nx(W)*X,Q=this.Z[W]+this.nz(W)*X;B.push(ot,1.25,Q,ot,4.6,Q);let st=C*this.ds/.9;k.push(st,0,st,3.6),C&&L.push(F-2,F,F-1,F-1,F,F+1),F+=2}let tt=new pe;return tt.setAttribute("position",new Bt(B,3)),tt.setAttribute("uv",new Bt(k,2)),tt.setIndex(L),tt.computeVertexNormals(),tt};[1,-1].forEach(w=>i.add(new Nt(At(w),mt)));let xt=[];for(let w=0;w<s;w+=4)[1,-1].forEach(B=>{let k=B*(this.wall(w)+.12);xt.push(new ye(.1,4.7,.1).translate(this.X[w]+this.nx(w)*k,2.35,this.Z[w]+this.nz(w)*k))});let Zt=new Kt({color:"#7d8288",roughness:.45,metalness:.8});i.add(new Nt(En(xt),Zt));let Ft=new Kt({color:"#33353a",roughness:.85});o(r/2+9.4,r/2+18.9,.03,Ft,10,1,1,w=>w*this.ds>50&&w*this.ds<660&&this.runoff[w]<10.5),o(r/2+13.9,r/2+14.1,.045,x,10,1,1,w=>w*this.ds>50&&w*this.ds<660&&this.runoff[w]<10.5);let ne=fn(256,128,(w,B,k)=>{let L=w.createLinearGradient(0,0,0,k);L.addColorStop(0,"#2a2d33"),L.addColorStop(1,"#14161a"),w.fillStyle=L,w.fillRect(0,0,B,k),w.fillStyle="#e9eef5";for(let F=0;F<6;F++)w.fillRect(14+F*40,8,26,4);w.fillStyle="#3a3e46";for(let F=0;F<5;F++)w.fillRect(10+F*50,40,36,60);w.fillStyle="#5c616b",w.fillRect(0,108,B,20)}),ae=new Kt({map:ne,emissiveMap:ne,emissive:"#ffffff",emissiveIntensity:.55,roughness:.8});Qn.forEach((w,B)=>{let k=190+B*22,L=this.pos(k,r/2+18.95,{}),F=Math.atan2(-L.tz,L.tx)+0,tt=Math.atan2(-this.TZ[this.idx(k)],this.TX[this.idx(k)]),C=Math.atan2(-this.nx(this.idx(k)),-this.nz(this.idx(k))),W=new Nt(new Ae(18,5.6),ae);W.position.set(L.x,2.8,L.z),W.rotation.y=C,i.add(W);let X=fn(512,64,(dt,Ht,ct)=>{dt.fillStyle=w.paint,dt.fillRect(0,0,Ht,ct),dt.fillStyle=w.accent,dt.fillRect(0,ct-8,Ht,8),dt.font="900 italic 34px Arial",dt.textAlign="center",dt.textBaseline="middle",dt.fillStyle=Xx(w.paint)>.5?"#111":"#fff",dt.fillText(w.name.toUpperCase(),Ht/2,ct/2-2)}),ot=new Nt(new Ae(18,1.6),new Kt({map:X,roughness:.5,emissiveMap:X,emissive:"#fff",emissiveIntensity:e.lamps?.5:.1}));ot.position.set(L.x,6.6,L.z),ot.rotation.y=C,i.add(ot);let Q=this.pos(k,r/2+this.wall(this.idx(k))-r/2+1.3,{}),st=new Nt(new ye(4.5,2.6,1.8),new Kt({color:w.paint,roughness:.4,metalness:.3}));st.position.set(Q.x,1.3,Q.z),st.rotation.y=Math.atan2(Q.tx,Q.tz)+Math.PI/2,st.castShadow=!0,i.add(st)});let he=w=>fn(128,104,(B,k,L)=>{B.fillStyle="#f4f4f2",B.fillRect(0,0,k,L),B.strokeStyle="#111",B.lineWidth=6,B.strokeRect(3,3,k-6,L-6),B.fillStyle="#111",B.font="900 56px Arial",B.textAlign="center",B.textBaseline="middle",B.fillText(w,k/2,L/2+3)}),z={150:[],100:[],50:[]},Te=[],te=[],ge=-1e9;for(let w=0;w<s;w++){let B=this.VP[w];if(!(B<this.VP[(w-1+s)%s]&&B<=this.VP[(w+1)%s]))continue;let k=0;for(let tt=1;tt<220;tt++)k=Math.max(k,this.VP[(w-tt+s)%s]);if(k-B<16)continue;let L=w*this.ds;if(L-ge<140)continue;ge=L,te.push([L,k-B,this.K[w]>0?1:-1]);let F=this.K[w]>0?1:-1;[150,100,50].forEach(tt=>{let C=this.pos(L-35-tt,F*(r/2+3.2),{}),W=at(C,!0);z[tt].push(new Ae(1.15,.95).rotateY(W).translate(C.x,1.5,C.z)),Te.push(new ye(.08,1.1,.08).translate(C.x-C.tx*.05,.55,C.z-C.tz*.05))})}Object.entries(z).forEach(([w,B])=>{B.length&&i.add(new Nt(En(B),new Kt({map:he(w),roughness:.6})))});let _t=[];for(let w=0;w<s;w++)if(this.drs[w]&&!this.drs[(w-1+s)%s]){let B=this.pos(w*this.ds-4,-(r/2+3.4),{});_t.push(new Ae(2.4,1).rotateY(at(B,!0)).translate(B.x,2.1,B.z)),Te.push(new ye(.1,1.7,.1).translate(B.x,.85,B.z));let k=this.pos(w*this.ds,0,{});i.add(Object.assign(new Nt(new Ae(r,.3).rotateX(-Math.PI/2).rotateY(Math.atan2(k.tx,k.tz)+Math.PI/2).translate(k.x,.05,k.z),x)))}_t.length&&i.add(new Nt(En(_t),new Kt({map:fn(256,104,(w,B,k)=>{w.fillStyle="#0c0d0c",w.fillRect(0,0,B,k),w.fillStyle="#2ee66b",w.font="900 italic 64px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText("DRS",B/2,k/2+3),w.fillRect(0,k-10,B,10)}),emissive:"#2ee66b",emissiveIntensity:e.lamps?.25:0,roughness:.5}))),Te.length&&i.add(new Nt(En(Te),Zt));{let w=this.L-135,B=this.idx(w),k=this.wall(B)+2,L=this.wall(B)+2,F=this.pos(w,(k-L)/2,{}),tt=new qe;tt.position.set(F.x,0,F.z),tt.rotation.y=Math.atan2(F.tx,F.tz);let C=fn(1024,128,(Q,st,dt)=>{Q.fillStyle="#0d2b1e",Q.fillRect(0,0,st,dt),Q.fillStyle="#d8b23a",Q.fillRect(0,0,st,6),Q.fillRect(0,dt-6,st,6),Q.font="900 64px Georgia",Q.textAlign="center",Q.textBaseline="middle",Q.fillStyle="#f2e6c4",Q.fillText("ORBIT",st*.3,dt/2+2),Q.fillText("ORBIT",st*.78,dt/2+2),Q.beginPath(),Q.arc(st*.54,dt/2,46,0,7),Q.fillStyle="#f7f3e8",Q.fill(),Q.strokeStyle="#d8b23a",Q.lineWidth=5,Q.stroke(),Q.strokeStyle="#111",Q.lineWidth=4,Q.beginPath(),Q.moveTo(st*.54,dt/2),Q.lineTo(st*.54+20,dt/2-22),Q.moveTo(st*.54,dt/2),Q.lineTo(st*.54-30,dt/2+4),Q.stroke()}),W=new Kt({color:"#0d2b1e",roughness:.5}),X=new Kt({map:C,roughness:.5,emissiveMap:C,emissive:"#fff",emissiveIntensity:e.lamps?.45:.05}),ot=new Nt(new ye(k+L+2,2.4,1.4),[W,W,W,W,X,X]);ot.position.y=8.2,ot.castShadow=!0,tt.add(ot),[-1,1].forEach(Q=>{let st=new Nt(new ye(1,9.4,1),Zt);st.position.set(Q*((k+L)/2+.5),4.7,0),st.castShadow=!0,tt.add(st)}),i.add(tt)}te.sort((w,B)=>B[1]-w[1]).filter(w=>w[0]>800&&w[0]<this.L-300).slice(0,2).forEach(([w,,B])=>{let k=this.idx(w),L=this.wall(k)+16;Vt(w-30,w+30,B,L);for(let F=-40;F<=40;F+=10){let tt=this.pos(w+F,B*(L+6),{});ee.push([tt.x,tt.z])}});let Ce=new un(.25,.35,3,6).translate(0,1.5,0),Wt=this.def.time==="day"?new Ls(2.4,7,7).translate(0,6,0):new Ur(2.8,0).translate(0,4.5,0),Xt=ee;for(let w=0;w<760;w+=20)[-1,1].forEach(B=>{let k=this.pos(w,B*(r/2+30),{});Xt.push([k.x,k.z])});let R=[];for(let w=0;w<2600&&R.length<900;w++){let B=-900+a()*2700,k=-700+a()*2600,L=!Xt.some(([F,tt])=>(B-F)**2+(k-tt)**2<1600);for(let F=0;L&&F<s;F+=6)if((B-this.X[F])**2+(k-this.Z[F])**2<(this.wall(F)+14)**2){L=!1;break}L&&R.push([B,k,.7+a()*.7])}let S=(w,B)=>{let k=new Ki(w,B,R.length),L=new Oe;R.forEach(([F,tt,C],W)=>{L.position.set(F,0,tt),L.scale.setScalar(C),L.rotation.y=C*9,L.updateMatrix(),k.setMatrixAt(W,L.matrix)}),k.castShadow=!0,i.add(k)};S(Ce,new Kt({color:"#5b4330",roughness:.95})),S(Wt,new Kt({color:this.def.time==="sunset"?"#5e6b2c":"#2f5d2c",roughness:.9,flatShading:!0}));let q=[];for(let w=0;w<40;w++){let B=w/40*Math.PI*2,k=2600+a()*600,L=120+a()*380;q.push(new Ls(300+a()*300,L,6).translate(400+Math.cos(B)*k,L/2-20,500+Math.sin(B)*k))}if(i.add(new Nt(En(q),new Kt({color:this.def.time==="sunset"?"#9a6a4c":this.def.time==="night"?"#141c2c":"#5f7a8a",roughness:1,flatShading:!0,fog:!0}))),e.lamps){let w=[];for(let W=0;W<s;W+=24){let X=W/24%2?1:-1,ot=X*(this.wall(W)+1.2);w.push([this.X[W]+this.nx(W)*ot,this.Z[W]+this.nz(W)*ot,Math.atan2(-this.nx(W)*X,-this.nz(W)*X)])}let B=new un(.12,.16,12,6).translate(0,6,0),k=new ye(.6,.3,2.6).translate(0,12,1.1),L=(W,X)=>{let ot=new Ki(W,X,w.length),Q=new Oe;w.forEach(([st,dt,Ht],ct)=>{Q.position.set(st,0,dt),Q.rotation.y=Ht,Q.updateMatrix(),ot.setMatrixAt(ct,Q.matrix)}),i.add(ot)};L(B,it),L(k,new Kt({color:"#fff",emissive:"#fff4d8",emissiveIntensity:3*e.lamps}));let F=fn(128,128,(W,X)=>{let ot=W.createRadialGradient(X/2,X/2,0,X/2,X/2,X/2);ot.addColorStop(0,"rgba(255,255,255,1)"),ot.addColorStop(.5,"rgba(255,255,255,.35)"),ot.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=ot,W.fillRect(0,0,X,X)}),tt=new Ki(new Ae(26,26).rotateX(-Math.PI/2),new hn({map:F,color:"#ffe6b8",transparent:!0,opacity:.32*e.lamps,blending:fi,depthWrite:!1}),w.length),C=new Oe;w.forEach(([W,X,ot],Q)=>{C.position.set(W+Math.sin(ot)*4,.1,X+Math.cos(ot)*4),C.updateMatrix(),tt.setMatrixAt(Q,C.matrix)}),i.add(tt)}let ut=Sh(e,this.def.time==="night");return ut.renderOrder=-1,i.add(ut),i.userData.sky=ut,i}minimap(t=220){let e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),s=1e9,r=-1e9,a=1e9,o=-1e9;for(let p=0;p<this.N;p++)s=Math.min(s,this.X[p]),r=Math.max(r,this.X[p]),a=Math.min(a,this.Z[p]),o=Math.max(o,this.Z[p]);let l=(t-30)/Math.max(r-s,o-a),c=(t-(r-s)*l)/2,h=(t-(o-a)*l)/2;this.mm={sc:l,ox:c,oz:h,x0:s,z0:a};let f=p=>[c+(this.X[p]-s)*l,h+(this.Z[p]-a)*l];i.lineJoin="round",i.lineCap="round",[[10,"rgba(0,0,0,.6)"],[6,"#e8e8e8"]].forEach(([p,y])=>{i.strokeStyle=y,i.lineWidth=p,i.beginPath();for(let m=0;m<=this.N;m+=2){let[g,x]=f(m%this.N);m?i.lineTo(g,x):i.moveTo(g,x)}i.closePath(),i.stroke()}),i.strokeStyle="#2ee66b",i.lineWidth=6;for(let p=0;p<this.N;p+=2){if(!this.drs[p])continue;let[y,m]=f(p),[g,x]=f((p+2)%this.N);i.beginPath(),i.moveTo(y,m),i.lineTo(g,x),i.stroke()}let[u,d]=f(0);return i.fillStyle="#fff",i.fillRect(u-2,d-7,4,14),e}toMap(t,e){let i=this.mm;return[i.ox+(t-i.x0)*i.sc,i.oz+(e-i.z0)*i.sc]}};var se=(()=>{let n=null,t,e=null,i=null,s=null,r=null,a=null,o=!0;try{o=localStorage.getItem("jkgp-sound")!=="0"}catch{}let l=(()=>{let M=new Float32Array(1024);for(let v=0;v<1024;v++){let A=v/1024*2-1;M[v]=Math.tanh(A*2.4)}return M})();function c(x){let M=n.createGain();M.gain.value=0;let v=n.createWaveShaper();v.curve=l,v.oversample="2x";let A=n.createBiquadFilter();A.type="lowpass",A.frequency.value=2e3,A.Q.value=3;let T=n.createGain();T.gain.value=x,T.connect(v),v.connect(A),A.connect(M);let _=n.createOscillator(),b=n.createOscillator(),N=n.createOscillator(),P=n.createOscillator();_.type="sawtooth",b.type="square",N.type="sawtooth",P.type="sine",N.detune.value=9;let U=n.createGain(),H=n.createGain();U.gain.value=.35,H.gain.value=.5;let Y=n.createGain();return Y.gain.value=.6,_.connect(T),b.connect(U),U.connect(T),N.connect(Y),Y.connect(T),P.connect(H),H.connect(T),[_,b,N,P].forEach(I=>I.start()),{o1:_,o2:b,o3:N,o4:P,bp:A,out:M}}function h(){if(n){n.state==="suspended"&&n.resume();return}let x=window.AudioContext||window.webkitAudioContext;if(!x)return;n=new x,t=n.createGain(),t.gain.value=o?.5:0,t.connect(n.destination);let M=n.createDynamicsCompressor();M.threshold.value=-14,M.ratio.value=4,M.connect(t),e=c(.5),e.out.connect(M);let v=n.createOscillator(),A=n.createGain();v.type="sine",A.gain.value=0,v.connect(A),A.connect(M),v.start(),e.turbo={o:v,g:A},i=c(.4);let T=n.createStereoPanner?n.createStereoPanner():n.createGain();i.out.connect(T),T.connect(M),i.pan=T;let _=n.createBuffer(1,n.sampleRate*2,n.sampleRate),b=_.getChannelData(0);for(let P=0;P<b.length;P++)b[P]=Math.random()*2-1;se.noise=_;let N=(P,U,H)=>{let Y=n.createBufferSource();Y.buffer=_,Y.loop=!0;let I=n.createBiquadFilter();I.type=P,I.frequency.value=U,I.Q.value=H;let G=n.createGain();return G.gain.value=0,Y.connect(I),I.connect(G),G.connect(M),Y.start(),{g:G,f:I}};s=N("bandpass",1500,5),r=N("lowpass",700,.7),a=N("lowpass",120,2)}let f=x=>x/60*3;function u(x,M,v,A,T=1){let _=n.currentTime,b=f(M)*T;x.o1.frequency.setTargetAtTime(b,_,.03),x.o2.frequency.setTargetAtTime(b/2,_,.03),x.o3.frequency.setTargetAtTime(b*1.5,_,.03),x.o4.frequency.setTargetAtTime(b*2,_,.03),x.bp.frequency.setTargetAtTime(700+v*2600+M*.15,_,.05),x.out.gain.setTargetAtTime(A,_,.06)}function d(x,M,v){if(!e)return;u(e,x,M,v?.05+M*.07:0);let A=n.currentTime;e.turbo.o.frequency.setTargetAtTime(2400+x*.25,A,.1),e.turbo.g.gain.setTargetAtTime(v?.004+M*.006:0,A,.2)}function p(x,M,v,A){if(!i)return;let T=x<160?Math.min(.09,6/(x+20)):0,_=Math.max(.7,Math.min(1.4,343/(343-M)));u(i,v,.8,T,_),i.pan.pan&&i.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,A)),n.currentTime,.05)}function y(x,M,v){if(!s)return;let A=n.currentTime;s.g.gain.setTargetAtTime(Math.min(.25,x*.06),A,.04),s.f.frequency.setTargetAtTime(1100+M*9,A,.1),r.g.gain.setTargetAtTime(Math.min(.2,M*M*3e-5),A,.2),a.g.gain.setTargetAtTime(v?.5:0,A,.03),a.f.frequency.setTargetAtTime(80+M*1.5,A,.05)}function m(x=880,M=.12,v="sine",A=.25,T=0){if(!n||!o)return;let _=n.currentTime,b=n.createOscillator(),N=n.createGain();b.type=v,b.frequency.setValueAtTime(x,_),T&&b.frequency.exponentialRampToValueAtTime(Math.max(30,x*T),_+M),N.gain.setValueAtTime(A,_),N.gain.exponentialRampToValueAtTime(.001,_+M),b.connect(N),N.connect(t),b.start(_),b.stop(_+M+.02)}function g(x,M,v,A){if(!n||!o)return;let T=n.currentTime,_=n.createBufferSource();_.buffer=se.noise;let b=n.createBiquadFilter();b.type="bandpass",b.frequency.value=x,b.Q.value=M;let N=n.createGain();N.gain.setValueAtTime(A,T),N.gain.exponentialRampToValueAtTime(.001,T+v),_.connect(b),b.connect(N),N.connect(t),_.start(T),_.stop(T+v)}return{init:h,engine:d,rivals:p,surface:y,get on(){return o},toggle(){o=!o;try{localStorage.setItem("jkgp-sound",o?"1":"0")}catch{}return t&&t.gain.setTargetAtTime(o?.5:0,n.currentTime,.05),o},stopLoops(){if(!n)return;let x=n.currentTime;[e&&e.out,i&&i.out,e&&e.turbo.g,s&&s.g,r&&r.g,a&&a.g].forEach(M=>M&&M.gain.setTargetAtTime(0,x,.05))},light(){m(520,.22,"square",.14)},go(){m(1040,.5,"square",.16)},shift(x){m(x?180:120,.06,"sawtooth",.1,.5),g(2400,1.5,.05,.12)},crash(x){g(260,.7,.4,Math.min(1,x*.03)),m(80,.25,"triangle",Math.min(.6,x*.02),.4)},touch(){g(500,1,.15,.3)},drs(){m(900,.07,"square",.08),setTimeout(()=>m(1350,.09,"square",.08),60)},click(){m(1100,.04,"square",.05)},lap(){m(880,.1,"triangle",.14),setTimeout(()=>m(1320,.16,"triangle",.14),90)},purple(){[988,1319,1661].forEach((x,M)=>setTimeout(()=>m(x,.14,"triangle",.14),M*70))},win(){[523,659,784,1046,1318].forEach((x,M)=>setTimeout(()=>m(x,.3,"triangle",.2),M*120))}}})();var zt=n=>document.getElementById(n),Ke=(n,t,e)=>Math.max(t,Math.min(e,n)),xi=(n,t,e)=>n+(t-n)*e,Lh=(n,t)=>{let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},js=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,wn=n=>{if(!isFinite(n)||n<=0)return"\u2013:\u2013\u2013.\u2013\u2013\u2013";let t=Math.floor(n/60),e=n-t*60;return t+":"+(e<10?"0":"")+e.toFixed(3)},zl=n=>(n>=0?"+":"\u2212")+Math.abs(n).toFixed(3),qx={track:"dune",mode:"race",laps:3,diff:"pro",team:"jk",grid:"mid",cam:"chase",line:!0,brake:js,steer:js,autoDrs:js,quality:"auto"},wt={...qx};try{Object.assign(wt,JSON.parse(localStorage.getItem("jkgp-settings")||"{}"))}catch{}var cs=()=>{try{localStorage.setItem("jkgp-settings",JSON.stringify(wt))}catch{}},Hi={races:0,wins:0,podiums:0};try{Object.assign(Hi,JSON.parse(localStorage.getItem("jkgp-stats")||"{}"))}catch{}var pa=n=>{try{return+localStorage.getItem("jkgp-best-"+n)||0}catch{return 0}},yi=wt.quality==="auto"?js?"medium":"high":wt.quality,Yx={rookie:[.84,.89],pro:[.9,.945],legend:[.955,.995]},sd={bull:1,rossa:.993,silver:.99,papaya:.988,jk:.985,verde:.978,neon:.975,azure:.972,steel:.968,oxford:.965},Zx=[25,18,15,12,10,8,6,4,2,1],Jx=zt("gl"),rn=new Sl({canvas:Jx,antialias:yi!=="low",powerPreference:"high-performance"}),Ah=Math.min(devicePixelRatio||1,yi==="high"?2:yi==="medium"?1.5:1),jn=1;rn.setPixelRatio(Ah);rn.setSize(innerWidth,innerHeight,!1);rn.toneMapping=ss;rn.outputColorSpace=Ne;rn.shadowMap.enabled=yi!=="low";rn.shadowMap.type=ns;var sn=new Ps,be=new on(62,innerWidth/innerHeight,.1,7e3),$x=new qs(rn),md={};for(let[n,t]of Object.entries(Ll)){let e=new Ps,i=Sh(t,n==="night");i.scale.setScalar(.01),e.add(i);let s=new Nt(new Yn(40,24).rotateX(-Math.PI/2),new hn({color:new Pt(t.grass).multiplyScalar(.35)}));s.position.y=-2,e.add(s),md[n]=$x.fromScene(e,.02,.1,200).texture,e.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()})}var Fl=new kr("#fff","#444",1);sn.add(Fl);var Gn=new Gr("#fff",3);Gn.castShadow=yi!=="low";var rd=yi==="high"?2048:1024;Gn.shadow.mapSize.set(rd,rd);Object.assign(Gn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:500});Gn.shadow.bias=-4e-4;Gn.shadow.normalBias=.03;sn.add(Gn,Gn.target);var Ol=new D(0,1,0),vi=null,fa=null;if(yi==="high"){let n=new Fe(1,1,{type:He,samples:4});n.depthTexture=new Bn(1,1),n.depthTexture.type=gn,vi=new Al(rn,n),vi.addPass(new Rl(sn,be)),fa=new Js(new lt(innerWidth/2,innerHeight/2),.3,.55,.88),vi.addPass(fa),vi.addPass(new Cl)}function Nh(){let n=innerWidth,t=innerHeight;be.aspect=n/t,be.updateProjectionMatrix(),rn.setPixelRatio(Ah*jn),rn.setSize(n,t,!1),vi&&(vi.setPixelRatio(Ah*jn),vi.setSize(n,t))}addEventListener("resize",Nh);Nh();function Kx(n){sn.fog=new _r(n.fog,450,3400),sn.background=new Pt(n.fog),Fl.color.set(n.hemi[0]),Fl.groundColor.set(n.hemi[1]),Fl.intensity=n.hemi[2],Gn.color.set(n.sun),Gn.intensity=n.sunI,Ol.set(...n.dir).normalize(),rn.toneMappingExposure=n.exp,sn.environmentIntensity=n.lamps>=1?.9:1,fa&&(fa.strength=n.lamps>=1?.7:n.lamps?.3:.22,fa.threshold=n.lamps>=1?.85:1.35)}function Qx(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})})}var kl=class{constructor(t,e){this.max=t,this.i=0,this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.c=new Float32Array(t*3),this.sz=new Float32Array(t),this.al=new Float32Array(t),this.age=new Float32Array(t).fill(1e9),this.life=new Float32Array(t).fill(1),this.s0=new Float32Array(t),this.gr=new Float32Array(t),this.a0=new Float32Array(t),this.drag=new Float32Array(t),this.grav=new Float32Array(t);let i=new pe;i.setAttribute("position",new ke(this.p,3).setUsage(Vs)),i.setAttribute("color",new ke(this.c,3).setUsage(Vs)),i.setAttribute("size",new ke(this.sz,1).setUsage(Vs)),i.setAttribute("alpha",new ke(this.al,1).setUsage(Vs)),i.boundingSphere=new Fn(new D,1e6),this.mat=new De({transparent:!0,depthWrite:!1,blending:e?fi:Fi,uniforms:{scale:{value:500}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(size*scale/-mv.z,420.); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vC; varying float vA; void main(){ float r=length(gl_PointCoord-.5); if(r>.5||vA<.004) discard; gl_FragColor=vec4(vC, vA*smoothstep(.5,.0,r)); }"}),this.pts=new Sr(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=3,sn.add(this.pts),this.g=i}emit(t,e,i,s,r,a,o,l,c,h,f,u=1,d=0){let p=this.i;this.i=(p+1)%this.max,this.p.set([t,e,i],p*3),this.v.set([s,r,a],p*3),this.c.set(h,p*3),this.age[p]=0,this.life[p]=o,this.s0[p]=l,this.gr[p]=c,this.a0[p]=f,this.drag[p]=u,this.grav[p]=d}update(t){for(let e=0;e<this.max;e++){let i=this.age[e]+=t,s=this.life[e];if(i>s){this.al[e]=0;continue}let r=e*3,a=Math.pow(this.drag[e],t);this.v[r]*=a,this.v[r+1]=this.v[r+1]*a-this.grav[e]*t,this.v[r+2]*=a,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.p[r+1]<.02&&(this.p[r+1]=.02,this.v[r+1]*=-.3);let o=i/s;this.sz[e]=this.s0[e]*(1+this.gr[e]*i),this.al[e]=this.a0[e]*(1-o)*Math.min(1,i*12)}for(let e of["position","color","size","alpha"])this.g.attributes[e].needsUpdate=!0}},ma=new kl(yi==="low"?500:1400,!1),xa=new kl(500,!0),gd=[.82,.82,.84],jx=[.62,.52,.38],tv=[.4,.45,.28],Dh=[1,.55,.15],ft=null,zi=null,ga=null,Hl={};function ev(){let n=ft.N,t=[],e=[],i=[],s=.45;for(let o=0;o<=n;o++){let l=o%n,c=ft.RL[l],h=ft.X[l]+ft.nx(l)*c,f=ft.Z[l]+ft.nz(l)*c;t.push(h+ft.nx(l)*s,.07,f+ft.nz(l)*s,h-ft.nx(l)*s,.07,f-ft.nz(l)*s);let u=ft.VP[(l+18)%n]-ft.VP[l],d=u<-3?[1,.15,.12]:ft.VP[l]<86&&u<3?[1,.8,.1]:[.2,1,.35];if(e.push(...d,...d),o<n){let p=o*2;i.push(p,p+2,p+1,p+1,p+2,p+3)}}let r=new pe;r.setAttribute("position",new Bt(t,3)),r.setAttribute("color",new Bt(e,3)),r.setIndex(i);let a=new Nt(r,new hn({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,fog:!0}));return a.renderOrder=2,a}var bh=zt("mmBase"),Rh=zt("mmDots");function Wl(n){if(ft&&ft.id===n)return;zi&&(sn.remove(zi),Qx(zi)),ft=Hl[n]||(Hl[n]=new ha(n)),zi=ft.build(rn),sn.add(zi),Kx(Ll[ft.def.time]),sn.environment=md[ft.def.time],ga=ev(),zi.add(ga);let t=ft.minimap(200),e=bh.getContext("2d");bh.width=bh.height=Rh.width=Rh.height=200,e.clearRect(0,0,200,200),e.drawImage(t,0,0)}var Re=[],Me=null,xe=null;function ad(n,t){let e=yh(n,t?"soft":["soft","medium","hard"][Math.floor(Math.random()*3)]);return sn.add(e),{team:n,mesh:e,ai:!t,isPlayer:t,s:0,lat:0,v:0,x:0,z:0,yaw:0,idx:-1,lap:0,prevS:0,lapStart:0,last:0,best:0,done:!1,finishT:0,cp:new Map,cpK:-1,lane:0,laneT:0,laneTimer:0,drsOpen:!1,drsAvail:!1,inDrs:!1,ers:1,ersOn:!1,slip:!1,mistake:0,react:0,steerA:0,latV:0,wheel:0,gear:1,rpm:4e3,pitch:0,roll:0,grip:1,surface:"road",slideAmt:0,harvest:!1,skill:1,prog:0,pos:0,inval:!1,wrong:0}}function Ch(n,t,e){let i=ft.pos(t,e,{});n.s=t,n.prevS=t,n.lat=e,n.x=i.x,n.z=i.z,n.yaw=Math.atan2(i.tx,i.tz),n.idx=ft.idx(t),n.v=0}function nv(){Re.forEach(n=>{sn.remove(n.mesh),n.mesh.traverse(t=>{t.material&&!t.material.vertexColors&&t.material.map&&t.material.map.dispose()})}),Re=[],xe&&(sn.remove(xe.mesh),xe=null)}function _a(n){nv();let t=Qn.find(a=>a.id===wt.team)||Qn[0];if(wt.mode==="tt"&&!n){Me=ad(t,!0),Re=[Me],Ch(Me,ft.L-170,ft.RL[ft.idx(ft.L-170)]),Me.v=55,iv(t);return}let e=Qn.filter(a=>a!==t).map(a=>({t:a,q:sd[a.id]+(Math.random()-.5)*.02})).sort((a,o)=>o.q-a.q).map(a=>a.t),i=n?0:{pole:0,mid:5,back:9}[wt.grid];e.splice(i,0,t);let[s,r]=Yx[wt.diff];e.forEach((a,o)=>{let l=ad(a,a===t);a===t&&(Me=l),l.skill=xi(s,r,(sd[a.id]-.96)/.04)+(Math.random()-.5)*.01,l.react=.18+Math.random()*(wt.diff==="rookie"?.5:.3),Ch(l,ft.L-12-o*9,o%2?-3:3),Re.push(l)})}function iv(n){xe={rec:[],best:null,t:0,mesh:yh(n,"soft")},xe.mesh.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=.28,t.material.depthWrite=!1,t.castShadow=!1)}),xe.mesh.visible=!1,sn.add(xe.mesh);try{let t=JSON.parse(localStorage.getItem("jkgp-ghost-"+ft.id)||"null");t&&t.length&&(xe.best=t)}catch{}}var $e={},ki={},Qs=null;addEventListener("keydown",n=>{if(!(n.repeat&&!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code))){if($e[n.code]=!0,se.init(),et.phase==="menu"){n.code==="Enter"&&va();return}(n.code==="Escape"||n.code==="KeyP")&&ya(),n.code==="KeyC"&&Oh(),n.code==="KeyM"&&(zt("snd").textContent=se.toggle()?"\u{1F50A}":"\u{1F507}"),n.code==="KeyR"&&!et.paused&&et.phase==="race"&&ov(),n.code==="KeyL"&&(wt.line=!wt.line,cs(),ga.visible=wt.line,xn(wt.line?"RACING LINE ON":"RACING LINE OFF","",1)),["Space","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>{$e[n.code]=!1});addEventListener("blur",()=>{for(let n in $e)$e[n]=!1});document.querySelectorAll("[data-k]").forEach(n=>{let t=n.dataset.k,e=s=>{s.preventDefault(),se.init(),ki[t]=!0,n.classList.add("on"),t==="cam"&&Oh(),t==="pause"&&ya()},i=s=>{s.preventDefault(),ki[t]=!1,n.classList.remove("on")};n.addEventListener("pointerdown",e),["pointerup","pointercancel","pointerleave"].forEach(s=>n.addEventListener(s,i))});function sv(){Qs=null;let n=navigator.getGamepads?navigator.getGamepads():[];for(let t of n)if(t&&t.connected){Qs=t;break}}var od={};function rv(){let n=$e.KeyW||$e.ArrowUp||ki.gas?1:0,t=$e.KeyS||$e.ArrowDown||ki.brake?1:0,e=($e.KeyD||$e.ArrowRight||ki.right?1:0)-($e.KeyA||$e.ArrowLeft||ki.left?1:0),i=!1,s=$e.Space||ki.drs,r=$e.ShiftLeft||$e.ShiftRight||$e.KeyE||ki.ers;if(Qs){let a=Qs.axes[0]||0;Math.abs(a)>.08&&(e=Math.sign(a)*((Math.abs(a)-.08)/.92)**1.4,i=!0);let o=c=>Qs.buttons[c]?Qs.buttons[c].value:0;n=Math.max(n,o(7)),t=Math.max(t,o(6)),s=s||o(0)>.5,r=r||o(1)>.5||o(5)>.5;let l=c=>{let h=o(c)>.5,f=od[c];return od[c]=h,h&&!f};l(3)&&Oh(),l(9)&&ya()}return{thr:n,brk:t,st:e,analog:i,drs:s,ers:r}}var et={phase:"menu",paused:!1,t:0,lt:0,lights:0,hold:0,order:[],fast:{t:0,c:null},finishAt:0,resultsShown:!1,camMode:"orbit",orbitT:0,shake:0,laps:3},Eh=1/120;function Uh(n,t){let e=ft.L;return((t-n)%e+e*1.5)%e-e/2}function ti(n){return(n.lap-1)*ft.L+n.s}var Ks={};function ld(n,t=1){let e=n.s+7+n.v*.32,i=ft.pos(e,ft.RL[ft.idx(e)]+(n.lane||0),Ks),s=Math.atan2(i.x-n.x,i.z-n.z),r=Lh(s,n.yaw),a=ft.VP[ft.idx(n.s+n.v*.22)]*t;return{st:Ke(-r*3.2,-1,1),thr:n.v<a?1:0,brk:n.v>a+1?Ke((n.v-a)/5,0,1):0}}var ls=[0,21,32,43,53,63,72,82,95];function av(n,t,e){let i=n.idx,s=ft.locate(n.x,n.z,n.idx);n.idx=s.i,n.s=s.s,n.lat=s.lat;let r=s.i,a=ft.W/2,o=Math.abs(n.lat),l="road";o>a+.3&&(ft.kerb[r]&&o<a+1.6?l="kerb":ft.runoff[r]>13?l="gravel":l=o<a+4?"runoff":"grass"),n.surface=l;let c={road:1,kerb:.93,runoff:.9,grass:.55,gravel:.5}[l],{thr:h,brk:f,st:u}=e;if(n.auto){let V=ld(n,n.done?.82:1);h=V.thr,f=V.brk,u=V.st}else{if(wt.brake){let V=ft.VP[ft.idx(n.s+n.v*.18)];n.v>V*1.03&&(f=Math.max(f,Ke((n.v-V)/4,.3,1)),h=0)}if(wt.steer){let V=ld(n);u=Ke(u+(V.st-u)*(e.analog?.3:.5),-1,1)}}if(et.phase==="lights"){n.rpm=xi(n.rpm,4e3+h*8e3,1-Math.exp(-t*8)),n.thr=h;return}n.inDrs=!!ft.drs[r],n.inDrs&&!ft.drs[i]&&(n.drsAvail=wt.mode==="tt"||n.lap>=2&&_d(n)<1),n.inDrs||(n.drsAvail=!1),n.drsAvail&&(e.drs||wt.autoDrs||n.auto)&&!n.drsOpen&&f<.1&&(n.drsOpen=!0,se.drs()),n.drsOpen&&(f>.1||!n.inDrs)&&(n.drsOpen=!1),n.ersOn=!!(e.ers&&n.ers>0&&h>.5&&n.v>8),n.ers=Ke(n.ers+(n.ersOn?-.14:0)*t+(f*.1+(h<.1?.025:.006))*t,0,1),n.harvest=f>.2||h<.1,n.slip=xd(n);let d=91*(n.drsOpen?1.055:1)*(n.ersOn?1.03:1)*(n.slip?1.025:1),p=h*(14.5*(1-(Math.max(0,n.v)/d)**2)+(n.ersOn?2.5:0))-(h<.05?.9+n.v*n.v*6e-4:0);p-=f*(18+.26*Math.abs(n.v))*(l==="grass"||l==="gravel"?.55:1)*Math.sign(n.v||1),l==="grass"&&(p-=(3+.025*n.v*n.v/10)*Math.sign(n.v)),l==="gravel"&&(p-=(10+.12*n.v)*Math.sign(n.v));let y=n.v;n.v+=p*t,y>0&&n.v<0&&!(f&&h<.05&&y<.5)&&(n.v=0),n.v<=.3&&f>.5&&h<.05?(n.rev=(n.rev||0)+t,n.rev>.4&&(n.v=Math.max(-6,n.v-6*t))):n.rev=0,n.lockup=f>.85&&n.v>25&&!wt.brake&&Math.random()<.5;let m=e.analog||n.auto?1:u===0?9:5;n.steerA=n.auto||e.analog?u:xi(n.steerA,u,1-Math.exp(-t*m));let g=n.v,x=.42/(1+Math.abs(g)/22),M=n.steerA*x,v=g*Math.tan(M)/3.6,A=(28+.0011*g*g)*c,T=A/Math.max(Math.abs(g),2),_=Math.abs(v)/T;n.slideAmt=Math.max(0,_-1);let b=Ke(v,-T*1.08,T*1.08);n.slideAmt>0&&(n.v-=Math.min(n.slideAmt,1.5)*7*t*Math.sign(g)),n.yaw-=b*t,n.yawRate=-b,n.x+=Math.sin(n.yaw)*n.v*t,n.z+=Math.cos(n.yaw)*n.v*t;let N=ft.wall(r)-1.05,P=ft.nx(r),U=ft.nz(r);if(Math.abs(n.lat)>N){let V=Math.sign(n.lat),ht=Math.abs(n.lat)-N;n.x-=P*V*ht,n.z-=U*V*ht;let $=Math.sin(n.yaw)*n.v,it=Math.cos(n.yaw)*n.v,rt=($*P+it*U)*V;if(rt>0){let Tt=$-P*V*rt*1.3,kt=it-U*V*rt*1.3,nt=Math.hypot(Tt,kt);n.yaw=Math.atan2(Tt,kt),n.v=nt*(rt>20?.55:.86)*Math.sign(n.v||1),n.v<0&&(n.yaw+=Math.PI,n.v=-n.v),rt>3&&lv(n,rt,n.x+P*V,n.z+U*V)}}let H=Math.abs(n.v),Y=1;for(;Y<8&&H>ls[Y]*.985;)Y++;Y!==n.gear&&(se.shift(Y>n.gear),n.gear=Y);let I=ls[Y-1],G=ls[Y];n.rpm=H<2?4e3+h*3e3:Ke(5200+7300*(H-I*.85)/(G-I*.85),4500,12500),n.thr=h,n.brk=f,Math.abs(n.lat)>a+2.2&&!n.done?(n.offT||(n.offT=et.t),wt.mode==="tt"&&!n.inval&&n.lap>=1&&(n.inval=!0,xn("TRACK LIMITS","warn",1.4,"Lap invalidated"))):n.offT=0;let K=Math.sin(n.yaw)*ft.TX[r]+Math.cos(n.yaw)*ft.TZ[r];n.wrong=K<-.4&&n.v>3?n.wrong+t:0,n.wrong>1.2&&!et.wrongShown&&(et.wrongShown=!0,xn("WRONG WAY","warn",1.6,"Press R to reset")),n.wrong||(et.wrongShown=!1)}function ov(){let n=Me,t=n.s,e=ft.RL[ft.idx(t)];Ch(n,t,e),n.v=0,n.steerA=0,xn("RESET","",.8)}function lv(n,t,e,i){let s=t>14;for(let r=0;r<(s?40:14);r++)xa.emit(e,.3+Math.random()*.4,i,(Math.random()-.5)*10,Math.random()*6,(Math.random()-.5)*10,.4+Math.random()*.4,.09,0,Dh,1,.2,9);n.isPlayer&&(se.crash(t),et.shake=Math.min(1.2,t*.05),s&&xn("CRASH!","warn",1))}function _d(n){let t=1e9;for(let e of Re){if(e===n)continue;let i=ti(e)-ti(n);i>0&&i<t&&(t=i)}return t/Math.max(n.v,20)}function xd(n){if(n.v<45)return!1;for(let t of Re){if(t===n)continue;let e=Uh(n.s,t.s);if(e>3&&e<38&&Math.abs(t.lat-n.lat)<2.2)return!0}return!1}function cv(n,t){if(et.phase==="lights"){n.rpm=5e3+Math.random()*4e3;return}if(n.react>0){n.react-=t;return}let e=ft.idx(n.s);n.inDrs=!!ft.drs[e],n.inDrs&&!n.wasDrs&&(n.drsAvail=n.lap>=2&&_d(n)<1),n.inDrs||(n.drsAvail=!1),n.wasDrs=n.inDrs,n.drsOpen=n.drsAvail,n.slip=xd(n);let i=1;if(Me&&wt.diff!=="legend"&&!Me.done&&wt.mode!=="tt"){let p=ti(n)-ti(Me),y=wt.diff==="rookie"?1:.5;p>120?i-=.025*y:p<-160&&(i+=.02*y)}let s=ft.VP[ft.idx(n.s+n.v*.12)]*n.skill*i*(n.drsOpen?1.05:1)*(n.slip?1.02:1);Math.abs(n.lane)>1.2&&ft.VP[e]<75&&(s*=.975),n.mistake>0?(n.mistake-=t,s*=.78,Math.random()<.3&&ma.emit(n.x,.25,n.z,0,.5,0,1.2,.7,2.2,gd,.35,.5)):Math.random()<t*(wt.diff==="rookie"?.012:wt.diff==="pro"?.006:.002)&&ft.VP[e]<60&&n.v>40&&(n.mistake=.8+Math.random()*.8);let r=null,a=1e9;for(let p of Re){if(p===n)continue;let y=Uh(n.s,p.s);y>0&&y<a&&Math.abs(p.lat-n.lat)<2.4&&(a=y,r=p)}if(n.laneTimer-=t,n.laneTimer<=0)if(n.laneTimer=.3+Math.random()*.3,r&&a<26&&r.v<n.v+2){let p=ft.RL[e],y=r.lat-p>0?-1:1,m=y>0?ft.W/2-1.2-p:ft.W/2-1.2+p;n.laneT=y*Math.min(3.4,m)}else(!r||a>40)&&(n.laneT=0);r&&a<8.5&&(s=Math.min(s,r.v-(8.5-a)*.8));let o=(13*(1-(n.v/95)**2)+1.5)*(n.skill*n.skill),l=n.v;n.v=n.v<s?Math.min(s,n.v+o*t):Math.max(s,n.v-38*t),n.v=Math.max(0,n.v),n.harvest=n.v<l-.01,n.lane+=Ke(n.laneT-n.lane,-3.2*t,3.2*t);let c=ft.W/2-1.15,h=Ke(ft.RL[e]+n.lane,-c,c),f=n.lat;n.lat+=(h-n.lat)*Math.min(1,t*2.4),n.latV=(n.lat-f)/t,n.s+=n.v*t,n.s>=ft.L&&(n.s-=ft.L),ft.pos(n.s,n.lat,Ks),n.x=Ks.x,n.z=Ks.z,n.yaw=Math.atan2(Ks.tx,Ks.tz)+Math.atan2(n.latV,Math.max(n.v,3)),n.yawRate=-ft.K[e]*n.v,n.steerA=Ke(ft.K[e]*30,-1,1);let u=n.v,d=1;for(;d<8&&u>ls[d]*.985;)d++;n.gear=d,n.rpm=Ke(5200+7300*(u-ls[d-1]*.85)/(ls[d]-ls[d-1]*.85),4500,12500),n.thr=n.v>=l?1:0}function hv(){for(let n=0;n<Re.length;n++)for(let t=n+1;t<Re.length;t++){let e=Re[n],i=Re[t],s=Uh(e.s,i.s),r=i.lat-e.lat;if(Math.abs(s)>5.3||Math.abs(r)>1.95)continue;let a=1.95-Math.abs(r),o=5.3-Math.abs(s),l=s>0?i:e,c=s>0?e:i;if(a<o*.45){let h=Math.sign(r)||1;cd(e,-h*a*.5),cd(i,h*a*.5),e.v*=.999,i.v*=.999,(e.isPlayer||i.isPlayer)&&(et.touchCd||(se.touch(),et.touchCd=.4,et.shake=.25))}else{let h=c.v-l.v;if(h>0&&(c.v-=h*.6,l.v+=h*.35),uv(c,-o*.6),h>4){let f=(e.x+i.x)/2,u=(e.z+i.z)/2;for(let d=0;d<12;d++)xa.emit(f,.3,u,(Math.random()-.5)*8,Math.random()*4,(Math.random()-.5)*8,.5,.08,0,Dh,1,.2,9);(e.isPlayer||i.isPlayer)&&(se.crash(h),et.shake=Math.min(1,h*.06)),h>12&&l.ai&&(l.mistake=1.2)}}}}function cd(n,t){if(n.ai){n.lat+=t;return}n.x+=ft.nx(n.idx)*t,n.z+=ft.nz(n.idx)*t}function uv(n,t){if(n.ai){n.s=(n.s+t+ft.L)%ft.L;return}n.x+=ft.TX[n.idx]*t,n.z+=ft.TZ[n.idx]*t}function fv(n){let t=ft.L,e=n.prevS>t*.75&&n.s<t*.25,i=n.prevS<t*.25&&n.s>t*.75;if(n.prevS=n.s,i){n.lap--;return}if(e){if(n.lap>=1&&!(n.isPlayer&&n.lapsDeleted)){let s=et.t-n.lapStart;n.last=s;let r=!n.inval;r&&(!n.best||s<n.best)&&(n.best=s),r&&wt.mode!=="tt"&&(!et.fast.t||s<et.fast.t)?(et.fast={t:s,c:n},n.isPlayer?(xn("FASTEST LAP","purple",2,wn(s)),se.purple()):et.t>5&&Vl(`Fastest lap \xB7 ${n.team.code} ${wn(s)}`)):n.isPlayer&&(xn(r?"LAP "+n.lap:"LAP DELETED",r?"":"warn",1.6,wn(s)),se.lap()),n.isPlayer&&wt.mode==="tt"&&r&&pv(s)}n.lap++,n.lapStart=et.t,n.inval=!1,n.cpK=-1,n.isPlayer&&xe&&(xe.rec=[]),wt.mode!=="tt"&&n.lap>et.laps&&!n.done?(n.done=!0,n.finishT=et.t,n.isPlayer&&mv()):n.isPlayer&&wt.mode!=="tt"&&n.lap===et.laps&&et.laps>1&&setTimeout(()=>xn("FINAL LAP","final",2),1700)}if(n.lap>=1){let s=ft.L/3,r=n.s<s?0:n.s<2*s?1:2;n.sk===void 0?(n.sk=r,n.secStart=et.t):r!==n.sk&&(r===(n.sk+1)%3&&dv(n,n.sk,et.t-n.secStart),n.sk=r,n.secStart=et.t)}if(n.lap>=1){let s=Math.floor(n.s/100);s!==n.cpK&&(n.cpK=s,n.cp.set(n.lap*1e3+s,et.t),n.lastKey=n.lap*1e3+s)}}function dv(n,t,e){n.bestSec=n.bestSec||[];let i="y";!et.bestSec[t]||e<et.bestSec[t]?(et.bestSec[t]=e,i="p"):(!n.bestSec[t]||e<n.bestSec[t])&&(i="g"),(!n.bestSec[t]||e<n.bestSec[t])&&(n.bestSec[t]=e),n.isPlayer&&(t===0&&(et.sec=[null,null,null]),et.sec[t]=[i,e],vd())}function vd(){for(let n=0;n<3;n++){let t=zt("s"+(n+1)),e=et.sec[n];t.className=e?e[0]:"",t.textContent=e?e[1].toFixed(3):"S"+(n+1)}}function pv(n){let t=pa(ft.id);if(!t||n<t){try{localStorage.setItem("jkgp-best-"+ft.id,n.toFixed(3))}catch{}if(xn("NEW RECORD","purple",2.2,wn(n)),se.purple(),xe&&xe.rec.length){xe.best=xe.rec.slice();try{localStorage.setItem("jkgp-ghost-"+ft.id,JSON.stringify(xe.best.map(e=>Math.round(e*100)/100)))}catch{}}}}function yd(n){if(et.touchCd>0&&(et.touchCd-=n),et.phase==="lights"){et.lt+=n;let e=Math.min(5,Math.floor(et.lt));e>et.lights&&(et.lights=e,se.light(),Ih()),et.lt>=5+et.hold&&(et.phase="race",et.lights=0,Ih(),se.go(),xn("LIGHTS OUT","go",1.4,"Go go go!"),Re.forEach(i=>i.lapStart=0))}else et.t+=n;let t=et.inp||{thr:0,brk:0,st:0};for(let e of Re)e.ai?cv(e,n):av(e,n,t);if(et.phase!=="lights"){hv();for(let e of Re)fv(e)}xe&&et.phase==="race"&&Me.lap>=1&&(xe.rec.length===0&&(xe.t=0),xe.t++%6===0&&xe.rec.push(Me.x,Me.z,Me.yaw))}function va(){se.init(),cs(),Wl(wt.track),et.laps=wt.mode==="tt"?999:wt.laps,_a(!1),Object.assign(et,{phase:wt.mode==="tt"?"race":"lights",paused:!1,t:0,lt:0,lights:0,hold:.4+Math.random()*1.6,bestSec:[],sec:[null,null,null],lastPos:0,fast:{t:0,c:null},finishAt:0,resultsShown:!1,camMode:wt.cam,shake:0}),Re.forEach(n=>{n.lap=0,n.lapStart=0}),wt.mode==="tt"&&(Me.lap=0),ga.visible=wt.line,xv(),document.body.className="playing"+(js?" touch":"")+(wt.mode==="tt"?" tt":""),zt("menu").classList.remove("on"),zt("results").classList.remove("on"),zt("pause").classList.remove("on"),zt("hud").classList.add("on"),zt("lapsTot").textContent=wt.mode==="tt"?"":"/"+et.laps,Gl=!1,tr(),wt.mode==="tt"?xn("TIME TRIAL","",2,pa(ft.id)?"Record "+wn(pa(ft.id)):"Set a lap time"):xn(ft.def.name.toUpperCase(),"",2.4,`${et.laps} lap${et.laps>1?"s":""} \xB7 ${wt.diff.toUpperCase()}`),Ih(),vd(),da=performance.now()}function mv(){Me.auto=!0;let n=Xl().indexOf(Me)+1;et.finishAt=et.t,Hi.races++,n===1&&Hi.wins++,n<=3&&Hi.podiums++;try{localStorage.setItem("jkgp-stats",JSON.stringify(Hi))}catch{}xn(n===1?"VICTORY!":"P"+n,n===1?"purple":n<=3?"go":"",3,n===1?"You win the "+ft.def.name:n<=3?"Podium finish!":"Chequered flag"),n<=3?se.win():se.lap(),setTimeout(()=>{et.camMode="orbit",Bh()},3800)}function Xl(){return Re.slice().sort((n,t)=>n.done&&t.done?n.finishT-t.finishT:n.done?-1:t.done?1:ti(t)-ti(n))}function Fh(){et.phase="menu",et.paused=!1,se.stopLoops(),document.body.className=js?"touch":"",zt("hud").classList.remove("on"),zt("results").classList.remove("on"),zt("pause").classList.remove("on"),zt("menu").classList.add("on"),Wl(wt.track),_a(!0),et.camMode="orbit",ga.visible=!1,tr(),zh()}function ya(n){et.phase==="menu"||et.resultsShown||(et.paused=n!==void 0?n:!et.paused,zt("pause").classList.toggle("on",et.paused),et.paused&&se.stopLoops(),da=performance.now())}document.addEventListener("visibilitychange",()=>{document.hidden&&et.phase!=="menu"&&ya(!0)});function Oh(){if(et.phase==="menu"||et.resultsShown)return;let n=["chase","far","tcam","cockpit"];wt.cam=n[(n.indexOf(wt.cam)+1)%n.length],et.camMode=wt.cam,cs(),tr(),Gl=!1,xn({chase:"CHASE CAM",far:"FAR CHASE",tcam:"T-CAM",cockpit:"COCKPIT"}[wt.cam],"",.8)}function tr(){Re.forEach(n=>{let t=n.mesh.userData,e=n.isPlayer&&et.camMode==="cockpit";t.sw.visible=e,t.helm.visible=!e}),be.near=et.camMode==="cockpit"||et.camMode==="tcam"?.05:.25,be.updateProjectionMatrix()}var Nl=new D,hd=new dn;function gv(n){for(let t of Re){let e=t.mesh,i=e.userData;e.position.set(t.x,0,t.z),e.rotation.y=t.yaw;let s=t.lastV!==void 0?(t.v-t.lastV)/Math.max(n,.001):0;t.lastV=t.v,t.pitch=xi(t.pitch,Ke(-s*.0012,-.025,.02),1-Math.exp(-n*6)),t.roll=xi(t.roll,Ke((t.yawRate||0)*t.v*7e-4,-.03,.03),1-Math.exp(-n*6));let r=t.surface==="kerb"?(Math.random()-.5)*.012:t.surface==="gravel"||t.surface==="grass"?(Math.random()-.5)*.02:0;i.body.rotation.set(t.pitch,0,t.roll),i.body.position.y=r-Math.min(.03,t.v*t.v*4e-6),t.wheel+=t.v*n/Kn.r,i.wheels.forEach(h=>h.rotation.x=t.wheel),i.steer.forEach(h=>h.rotation.y=-t.steerA*.3),i.flap.rotation.x=xi(i.flap.rotation.x,t.drsOpen?.06:.55,1-Math.exp(-n*14)),i.glow.emissiveIntensity=t.harvest&&t.v>15?Math.sin(performance.now()*.025)>0?4:.3:.6;let a=Math.sin(t.yaw),o=Math.cos(t.yaw),l=t.x-a*1.8,c=t.z-o*1.8;if(t.isPlayer&&((t.slideAmt>.12||t.lockup)&&t.v>8&&Math.random()<.9&&[1,-1].forEach(f=>ma.emit(l+o*.8*f,.3,c-a*.8*f,(Math.random()-.5)*2,.6,(Math.random()-.5)*2,1.4,.8,2.4,gd,.3,.5)),(t.surface==="gravel"||t.surface==="grass")&&t.v>6))for(let f=0;f<2;f++)ma.emit(l+(Math.random()-.5)*1.8,.3,c,-a*t.v*.15+(Math.random()-.5)*3,1+Math.random()*2,-o*t.v*.15+(Math.random()-.5)*3,1.3,.9,2,t.surface==="gravel"?jx:tv,.45,.4,2);if(t.v>72&&Math.random()<n*(t.isPlayer?6:2)&&yi!=="low")for(let h=0;h<6;h++)xa.emit(l+(Math.random()-.5)*.8,.05,c,-a*t.v*.5+(Math.random()-.5)*4,Math.random()*2.5,-o*t.v*.5+(Math.random()-.5)*4,.25+Math.random()*.25,.06,0,Dh,1,.3,9);i.blob.visible=!0}if(xe){let t=xe.best,e=xe.mesh;if(t&&et.phase==="race"&&Me.lap>=1&&wt.mode==="tt"){let i=(et.t-Me.lapStart)/.05,s=Math.floor(i)*3;if(s+5<t.length){let r=i-Math.floor(i);e.visible=!0,e.position.set(xi(t[s],t[s+3],r),0,xi(t[s+1],t[s+4],r)),e.rotation.y=t[s+2]+Lh(t[s+5],t[s+2])*r,e.position.distanceToSquared(Me.mesh.position)<30&&(e.visible=!1)}else e.visible=!1}else e.visible=!1}}var Gl=!1,ud=new D,hb=new D,ua=0;function _v(n){let t=Me;if(!t)return;let e=62;if(et.camMode==="debug"){window.__dbg&&window.__dbg();return}if(et.camMode==="orbit"){et.orbitT+=n*.12;let s=et.phase==="menu"?7.4:11,r=et.orbitT+(et.phase==="menu"?2.4:0),a=t.x+Math.sin(r)*s,o=t.z+Math.cos(r)*s;et.phase==="menu"?(be.position.set(a,1.55+Math.sin(et.orbitT*.7)*.3,o),be.lookAt(t.x,.55,t.z)):(ud.lerp(Nl.set(a,3.2,o),1-Math.exp(-n*2)),be.position.copy(ud),be.lookAt(t.x,.6,t.z)),e=et.phase==="menu"?40:50}else if(et.camMode==="chase"||et.camMode==="far"){let s=et.camMode==="far",r=(s?9.6:6)+t.v*.012,a=s?3.1:1.8;Gl||(ua=t.yaw,Gl=!0),ua+=Lh(t.yaw,ua)*(1-Math.exp(-n*(s?5:7)));let o=Math.sin(ua),l=Math.cos(ua);be.position.set(t.x-o*r,a,t.z-l*r),be.lookAt(t.x+Math.sin(t.yaw)*5,s?1:.95,t.z+Math.cos(t.yaw)*5),e=60+Math.max(0,t.v)*.16+(t.ersOn?2:0)}else{let s=et.camMode==="cockpit",r=t.mesh;r.updateMatrixWorld(!0);let a=r.userData.body;Nl.set(0,s?.9:1.22,s?-.08:-.62),a.localToWorld(Nl),be.position.copy(Nl),a.getWorldQuaternion(hd),be.quaternion.copy(hd),be.rotateY(Math.PI),be.rotateX(s?-.06:-.1),e=(s?70:66)+Math.max(0,t.v)*.1}if(et.shake>0){et.shake=Math.max(0,et.shake-n*2);let s=et.shake*.12;be.position.x+=(Math.random()-.5)*s,be.position.y+=(Math.random()-.5)*s}et.camMode!=="orbit"&&(t.surface==="kerb"||t.surface==="gravel")&&t.v>5&&(be.position.y+=(Math.random()-.5)*.025),be.fov=Ke(xi(be.fov,e,1-Math.exp(-n*4)),30,100),be.updateProjectionMatrix(),Gn.position.set(t.x+Ol.x*200,Ol.y*200,t.z+Ol.z*200),Gn.target.position.set(t.x,0,t.z),zi&&zi.userData.sky.position.set(be.position.x,0,be.position.z);let i=rn.domElement.height/(2*Math.tan(be.fov*Math.PI/360));ma.mat.uniforms.scale.value=xa.mat.uniforms.scale.value=i}var Ph=[],Th=0;function xv(){let n=zt("tower");n.innerHTML="",Ph.length=0,Re.forEach(t=>{let e=document.createElement("div");e.className="tr"+(t.isPlayer?" me":""),e.innerHTML=`<b></b><i style="background:${t.team.paint};box-shadow:inset -3px 0 ${t.team.accent}"></i><span>${t.team.code}</span><em></em>`,n.appendChild(e),Ph.push({c:t,d:e,b:e.children[0],em:e.children[3]})}),n.style.height=Re.length*26+"px"}function vv(){let n=Xl();et.order=n;let t=n[0];if(Me&&wt.mode!=="tt"&&et.phase==="race"&&et.t>4&&!Me.done){let e=n.indexOf(Me)+1;if(et.lastPos&&e!==et.lastPos){let i=e<et.lastPos,s=zt("posW");s.classList.remove("up","dn"),s.offsetWidth,s.classList.add(i?"up":"dn"),i&&Vl("\u25B2 Overtake \xB7 P"+e)}et.lastPos=e}n.forEach((e,i)=>{e.pos=i+1}),Ph.forEach(e=>{let i=e.c,s=i.pos-1;e.d.style.transform=`translateY(${s*26}px)`,e.b.textContent=i.pos;let r="";if(wt.mode==="tt")r=i.best?wn(i.best):"";else if(et.phase==="lights"||et.t<3)r="";else if(s===0)r=i.done?"FINISH":"LAP "+Math.max(1,Math.min(i.lap,et.laps));else if(i.done&&t.done)r=zl(i.finishT-t.finishT);else{let a=Math.floor((ti(t)-ti(i))/ft.L);if(a>=1)r="+"+a+" LAP";else{let o=t.cp.get(i.lastKey),l=i.cp.get(i.lastKey);r=o!==void 0&&l!==void 0?zl(l-o):""}}et.fast.c===i&&wt.mode!=="tt"?e.d.classList.add("fl"):e.d.classList.remove("fl"),e.em.textContent=r})}var fd=[...document.querySelectorAll("#rpm i")],dd={};function Hn(n,t){dd[n]!==t&&(dd[n]=t,zt(n).textContent=t)}function yv(n){let t=Me;if(!t||et.phase==="menu")return;Th-=n,Th<=0&&(Th=.2,vv()),Hn("spd",Math.round(Math.abs(t.v)*3.6)),Hn("gear",t.v<-.5?"R":et.phase==="lights"?"N":t.gear);let e=Ke((t.rpm-5e3)/7300,0,1),i=t.rpm>12300;fd.forEach((c,h)=>{let f=e*fd.length>h;c.className=f?i?"b":h<5?"g":h<10?"r":"p":""}),id(t.mesh,e,i);let s=t.pos||1;if(Hn("pos",wt.mode==="tt"?"TT":"P"+s),Hn("posOf",wt.mode==="tt"?"":"/"+Re.length),Hn("lapN",Math.max(1,Math.min(t.lap,et.laps))),zt("thrB").style.transform=`scaleY(${(t.thr||0).toFixed(2)})`,zt("brkB").style.transform=`scaleY(${(t.brk||0).toFixed(2)})`,Hn("tLap","LAP "+Math.max(1,Math.min(t.lap,et.laps))+(wt.mode==="tt"?"":" / "+et.laps)),Hn("tCur",t.lap>=1&&et.phase!=="lights"?wn(et.t-t.lapStart):wn(0)),Hn("tLast",wn(t.last)),Hn("tBest",wn(wt.mode==="tt"&&pa(ft.id)||t.best)),zt("tCur").classList.toggle("inv",!!t.inval),wt.mode==="tt"&&xe&&xe.best&&t.lap>=1){let c=xe.best,h=0,f=1e18,u=et.t-t.lapStart,d=Math.max(0,Math.floor(u/.05)-60);for(let y=d;y<Math.min(c.length/3,d+140);y++){let m=(c[y*3]-t.x)**2+(c[y*3+1]-t.z)**2;m<f&&(f=m,h=y)}let p=u-h*.05;Hn("tDelta",zl(p)),zt("tDelta").className=p>0?"up":"dn"}else Hn("tDelta","");let r=zt("drs");r.className=t.drsOpen?"open":t.drsAvail?"avail":"",zt("ersBar").style.width=(t.ers*100).toFixed(1)+"%",zt("ers").classList.toggle("on",t.ersOn),zt("slip").classList.toggle("on",!!t.slip),zt("vig").style.opacity=Ke((t.v-55)/50,0,.9)+(t.ersOn?.15:0);let a=Rh.getContext("2d");a.clearRect(0,0,200,200);for(let c of Re){if(c===t)continue;let[h,f]=ft.toMap(c.x,c.z);a.fillStyle=c.team.paint,a.strokeStyle=c.team.accent,a.lineWidth=2,a.beginPath(),a.arc(h,f,4.2,0,7),a.fill(),a.stroke()}if(xe&&xe.mesh.visible){let[c,h]=ft.toMap(xe.mesh.position.x,xe.mesh.position.z);a.fillStyle="rgba(255,255,255,.45)",a.beginPath(),a.arc(c,h,4,0,7),a.fill()}let[o,l]=ft.toMap(t.x,t.z);if(a.fillStyle="#b8f36b",a.strokeStyle="#000",a.lineWidth=2.5,a.beginPath(),a.arc(o,l,6,0,7),a.fill(),a.stroke(),!et.paused&&!et.resultsShown){se.engine(t.rpm,t.thr||0,!0);let c=1e9,h=null;for(let f of Re){if(f===t)continue;let u=Math.hypot(f.x-t.x,f.z-t.z);u<c&&(c=u,h=f)}if(h){let f=h.x-t.x,u=h.z-t.z,d=((t.v*Math.sin(t.yaw)-h.v*Math.sin(h.yaw))*f+(t.v*Math.cos(t.yaw)-h.v*Math.cos(h.yaw))*u)/Math.max(c,1),p=-(f*Math.cos(t.yaw)-u*Math.sin(t.yaw))/Math.max(c,1);se.rivals(c,d,h.rpm,p)}se.surface(t.slideAmt*3+(t.lockup?1.5:0),t.v,t.surface==="kerb"&&t.v>5)}}function Ih(){document.querySelectorAll("#lights i").forEach((n,t)=>n.classList.toggle("on",et.lights>t)),zt("lights").classList.toggle("on",et.phase==="lights"),Re.length&&ft&&ft.lights.forEach((n,t)=>n.emissiveIntensity=et.phase==="lights"&&et.lights>t?6:0)}var Bl=0;function xn(n,t,e=1.5,i=""){let s=zt("msg");s.className="on"+(t?" m-"+t:""),zt("msgT").textContent=n,zt("msgS").textContent=i,s.offsetWidth,s.classList.add("pop"),Bl=e}function Vl(n){let t=zt("note");t.textContent=n,t.classList.add("on"),clearTimeout(Vl.tm),Vl.tm=setTimeout(()=>t.classList.remove("on"),2600)}function Bh(){et.resultsShown=!0,se.stopLoops();let n=Xl(),t=n[0],e=n.indexOf(Me)+1;zt("resTitle").textContent=e===1?"Victory":"P"+e+(e<=3?" \xB7 Podium":""),zt("resSub").textContent=`${ft.def.name} \xB7 ${et.laps} lap${et.laps>1?"s":""} \xB7 ${wt.diff[0].toUpperCase()+wt.diff.slice(1)}`,zt("resRows").innerHTML=n.map((i,s)=>{let r;if(s===0)r=wn(i.finishT);else if(i.done)r=zl(i.finishT-t.finishT);else{let a=Math.floor((ti(t)-ti(i))/ft.L+(t.done,0));r=a>=1?"+"+a+" lap"+(a>1?"s":""):"on track"}return`<div class="rr${i.isPlayer?" me":""}"><b>${s+1}</b><i style="background:${i.team.paint};box-shadow:inset -4px 0 ${i.team.accent}"></i><span><strong>${i.team.driver}</strong><small>${i.team.name}</small></span><em>${r}</em><em class="${et.fast.c===i?"fl":""}">${wn(i.best)}</em><u>${Zx[s]||0}</u></div>`}).join(""),zt("results").classList.add("on")}zt("resAgain").onclick=()=>{se.click(),va()};zt("resMenu").onclick=()=>{se.click(),Fh()};zt("pResume").onclick=()=>ya(!1);zt("pRestart").onclick=()=>va();zt("pMenu").onclick=()=>Fh();zt("snd").onclick=()=>{se.init(),zt("snd").textContent=se.toggle()?"\u{1F50A}":"\u{1F507}"};zt("snd").textContent=se.on?"\u{1F50A}":"\u{1F507}";function $s(n,t,e,i){let s=zt(n);s.innerHTML="",t.forEach(([r,a])=>{let o=document.createElement("button");o.className="chip"+(wt[e]===r?" on":""),o.textContent=a,o.onclick=()=>{se.init(),se.click(),wt[e]=r,cs(),[...s.children].forEach(l=>l.classList.remove("on")),o.classList.add("on"),i&&i(r)},s.appendChild(o)})}function Mv(n,t){let e=zt(n);e.innerHTML="",t.forEach(([i,s])=>{let r=document.createElement("button");r.className="chip"+(wt[i]?" on":""),r.textContent=s,r.onclick=()=>{se.init(),se.click(),wt[i]=!wt[i],cs(),r.classList.toggle("on",wt[i])},e.appendChild(r)})}function zh(){let n=zt("mTracks");n.innerHTML="",Object.entries(Mh).forEach(([e,i])=>{let s=document.createElement("button");s.className="tcard"+(wt.track===e?" on":"");let r=pa(e);s.innerHTML=`<canvas width="88" height="88"></canvas><div><b>${i.name}</b><small>${i.blurb}</small><span>${{day:"Day",sunset:"Sunset",night:"Night"}[i.time]} \xB7 ${r?"Record "+wn(r):"No record yet"}</span></div>`;let a=e===(ft&&ft.id)?ft:Hl[e]||(Hl[e]=new ha(e));s.querySelector("canvas").getContext("2d").drawImage(a.minimap(88),0,0),s.onclick=()=>{wt.track!==e&&(se.init(),se.click(),wt.track=e,cs(),zt("loading").classList.add("on"),setTimeout(()=>{Wl(e),_a(!0),tr(),zt("loading").classList.remove("on"),zh()},30))},n.appendChild(s)}),$s("mMode",[["race","Grand Prix"],["tt","Time Trial"]],"mode",()=>zt("menu").classList.toggle("tt",wt.mode==="tt")),zt("menu").classList.toggle("tt",wt.mode==="tt"),$s("mLaps",[[1,"1"],[3,"3"],[5,"5"],[10,"10"]],"laps"),$s("mDiff",[["rookie","Rookie"],["pro","Pro"],["legend","Legend"]],"diff"),$s("mGrid",[["pole","Pole"],["mid","Midfield"],["back","Back row"]],"grid");let t=zt("mTeams");t.innerHTML="",Qn.forEach(e=>{let i=document.createElement("button");i.className="sw"+(wt.team===e.id?" on":""),i.title=e.name,i.style.background=`linear-gradient(135deg,${e.paint} 0 55%,${e.accent} 55%)`,i.onclick=()=>{se.init(),se.click(),wt.team=e.id,cs(),[...t.children].forEach(s=>s.classList.remove("on")),i.classList.add("on"),pd(),_a(!0),tr()},t.appendChild(i)}),pd(),Mv("mAssist",[["line","Racing line"],["brake","Brake assist"],["steer","Steer assist"],["autoDrs","Auto DRS"]]),$s("mCam",[["chase","Chase"],["far","Far"],["tcam","T-Cam"],["cockpit","Cockpit"]],"cam"),$s("mQual",[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]],"quality",()=>location.reload()),zt("mStats").innerHTML=`<span>Races <b>${Hi.races}</b></span><span>Wins <b>${Hi.wins}</b></span><span>Podiums <b>${Hi.podiums}</b></span>`}function pd(){let n=Qn.find(t=>t.id===wt.team)||Qn[0];zt("mTeamName").innerHTML=`<b>#${n.num} ${n.driver}</b> \xB7 ${n.name}`}zt("go").onclick=()=>{se.init(),se.click(),va()};var da=performance.now(),Dl=0,Ul=0,wh=0;function Md(n){requestAnimationFrame(Md);let t=Ke((n-da)/1e3,0,.05);if(da=Math.max(da,n),sv(),et.inp=rv(),et.phase!=="menu"&&!et.paused){Dl+=t;let e=0;for(;Dl>=Eh&&e<12;)yd(Eh),Dl-=Eh,e++;e>=12&&(Dl=0)}if(et.phase==="menu"&&Me&&(Me.v=0),et.paused||(gv(et.phase==="menu"?0:t),ma.update(t),xa.update(t)),_v(t),yv(t),Bl>0&&(Bl-=t,Bl<=0&&(zt("msg").className="")),et.resultsShown&&et.phase!=="menu"&&Math.random()<.05&&Sv(),vi&&!window.__direct?vi.render():rn.render(sn,be),Ul+=t,wh++,Ul>2){let e=wh/Ul;Ul=0,wh=0;let i=jn;e<42&&jn>.6?jn=Math.max(.6,jn-.1):e>57&&jn<1&&(jn=Math.min(1,jn+.05)),i!==jn&&Nh()}}function Sv(){zt("results").classList.contains("on")&&Bh()}Wl(wt.track);_a(!0);tr();zh();et.camMode="orbit";rn.compile(sn,be);zt("menu").classList.add("on");zt("loading").classList.remove("on");requestAnimationFrame(Md);window.__gp={S:wt,R:et,get cars(){return Re},get player(){return Me},get track(){return ft},step:yd,startRace:va,toMenu:Fh,cam:be,renderer:rn,keys:$e,order:Xl,showResults:Bh};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
