var Vu=0,kc=1,Wu=2;var rs=1,Xu=2,Xs=3,Oi=0,$e=1,xn=2,di=0,Bi=1,pi=2,Hc=3,Gc=4,qu=5;var as=100,Yu=101,Zu=102,Ju=103,$u=104,Ku=200,Qu=201,ju=202,tf=203,Vc=204,Wc=205,ef=206,nf=207,sf=208,rf=209,af=210,of=211,lf=212,cf=213,hf=214,to=0,eo=1,no=2,Is=3,io=4,so=5,ro=6,ao=7,Xc=0,uf=1,ff=2,Zn=0,Jr=1,$r=2,Kr=3,os=4,Qr=5,jr=6,ta=7;var qc=300,ls=301,qs=302,Oo=303,Bo=304,ci=1e3,Xn=1001,oo=1002,Ze=1003,df=1004;var ea=1005;var un=1006,zo=1007;var mi=1008;var _n=1009,Yc=1010,Zc=1011,Ys=1012,ko=1013,kn=1014,vn=1015,Ge=1016,Ho=1017,Go=1018,cs=1020,Jc=35902,$c=35899,Kc=1021,Qc=1022,Hn=1023,hi=1026,gi=1027,Vo=1028,Wo=1029,zi=1030,Xo=1031;var qo=1033,na=33776,ia=33777,sa=33778,ra=33779,Yo=35840,Zo=35841,Jo=35842,$o=35843,Ko=36196,Qo=37492,jo=37496,tl=37488,el=37489,aa=37490,nl=37491,il=37808,sl=37809,rl=37810,al=37811,ol=37812,ll=37813,cl=37814,hl=37815,ul=37816,fl=37817,dl=37818,pl=37819,ml=37820,gl=37821,xl=36492,_l=36494,vl=36495,yl=36283,Ml=36284,oa=36285,Sl=36286;var xr=2300,lo=2301,Qa=2302,Cc=2303,Pc=2400,Ic=2401,Lc=2402;var pf=3200;var bl=0,mf=1,xi="",Pe="srgb",_r="srgb-linear",vr="linear",pe="srgb";var ja=7680;var gf=519,xf=512,_f=513,vf=514,jc=515,yf=516,Mf=517,th=518,eh=519,Sf=35044,Zs=35048;var nh="300 es",Cn=2e3,Ls=2001;function Hd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Gd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bf(){let n=yr("canvas");return n.style.display="block",n}var hu={},Ns=null;function ih(...n){let t="THREE."+n.shift();Ns?Ns("log",t,...n):console.log(t,...n)}function Ef(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Ef(n);let t="THREE."+n.shift();if(Ns)Ns("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=Ef(n);let t="THREE."+n.shift();if(Ns)Ns("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function ji(...n){let t=n.join(" ");t in hu||(hu[t]=!0,qt(...n))}function Tf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var wf={[to]:to,[no]:ro,[io]:io,[Is]:so,[eo]:eo,[ro]:no,[ao]:ao,[so]:Is},qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sc=Math.PI/180,co=180/Math.PI;function Js(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function Vd(n,t){return(n%t+t)%t}function rc(n,t,e){return(1-e)*n+e*t}function Af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wd(n,t){if(t.constructor===Float32Array)return n;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Xd(n,t){if(t.constructor===Float32Array)return n;let e=sh(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var hh=class hh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hh.prototype.isVector2=!0;var ct=hh,an=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],M=r[a+3];if(u!==M||l!==f||c!==d||h!==p){let m=l*f+c*d+h*p+u*M;m<0&&(f=-f,d=-d,p=-p,M=-M,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),y=Math.sin(_);g=Math.sin(g*_)/y,o=Math.sin(o*_)/y,l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+M*o}else{l=l*g+f*o,c=c*g+d*o,h=h*g+p*o,u=u*g+M*o;let _=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=_,c*=_,h*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return t[e]=o*p+h*u+l*d-c*f,t[e+1]=l*p+h*f+c*u-o*d,t[e+2]=c*p+h*d+o*f-l*u,t[e+3]=h*p-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},uh=class uh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};uh.prototype.isVector3=!0;var D=uh,ac=new D,uu=new an,fh=class fh{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],M=s[0],m=s[3],g=s[6],_=s[1],y=s[4],v=s[7],A=s[2],w=s[5],x=s[8];return r[0]=a*M+o*_+l*A,r[3]=a*m+o*y+l*w,r[6]=a*g+o*v+l*x,r[1]=c*M+h*_+u*A,r[4]=c*m+h*y+u*w,r[7]=c*g+h*v+u*x,r[2]=f*M+d*_+p*A,r[5]=f*m+d*y+p*w,r[8]=f*g+d*v+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=e*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/p;return t[0]=u*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*a)*M,t[3]=f*M,t[4]=(h*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=d*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oc.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oc.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;var $t=fh,oc=new $t,fu=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qd(){let n={enabled:!0,workingColorSpace:_r,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=li(s.r),s.g=li(s.g),s.b=li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xi?vr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_r]:{primaries:t,whitePoint:i,transfer:vr,toXYZ:fu,fromXYZ:du,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:fu,fromXYZ:du,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),n}var oe=qd();function li(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var gs,ho=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{gs===void 0&&(gs=yr("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=yr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=li(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(li(e[i]/255)*255):e[i]=li(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yd=0,Ds=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lc(s[a].image)):r.push(lc(s[a]))}else r=lc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function lc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ho.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Zd=0,cc=new D,fn=class n extends qn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Xn,s=Xn,r=un,a=mi,o=Hn,l=_n,c=n.DEFAULT_ANISOTROPY,h=xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Js(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(cc).x}get height(){return this.source.getSize(cc).y}get depth(){return this.source.getSize(cc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ci:t.x=t.x-Math.floor(t.x);break;case Xn:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ci:t.y=t.y-Math.floor(t.y);break;case Xn:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=qc;fn.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],M=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-M)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+M)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,A=(g+1)/2,w=(h+f)/4,x=(u+M)/4,b=(p+m)/4;return y>v&&y>A?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=x/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,e),this}let _=Math.sqrt((m-p)*(m-p)+(u-M)*(u-M)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(u-M)/_,this.z=(f-h)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var Ie=dh,uo=class extends qn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new fn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fe=class extends uo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Mr=class extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fo=class extends fn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ze,this.minFilter=Ze,this.wrapR=Xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fo=class Fo{constructor(t,e,i,s,r,a,o,l,c,h,u,f,d,p,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,f,d,p,M,m)}set(t,e,i,s,r,a,o,l,c,h,u,f,d,p,M,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=M,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fo().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,d=a*u,p=o*h,M=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=f-M*c,e[9]=-o*l,e[2]=M-f*c,e[6]=p+d*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f+M*o,e[4]=p*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-p,e[6]=M+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,p=c*h,M=c*u;e[0]=f-M*o,e[4]=-a*u,e[8]=p+d*o,e[1]=d+p*o,e[5]=a*h,e[9]=M-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,d=a*u,p=o*h,M=o*u;e[0]=l*h,e[4]=p*c-d,e[8]=f*c+M,e[1]=l*u,e[5]=M*c+f,e[9]=d*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,d=a*c,p=o*l,M=o*c;e[0]=l*h,e[4]=M-f*u,e[8]=p*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+p,e[10]=f-M*u}else if(t.order==="XZY"){let f=a*l,d=a*c,p=o*l,M=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+M,e[5]=a*h,e[9]=d*u-p,e[2]=p*u-d,e[6]=o*h,e[10]=M*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,$d)}lookAt(t,e,i){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ei.crossVectors(i,yn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ei.crossVectors(i,yn)),Ei.normalize(),Aa.crossVectors(yn,Ei),s[0]=Ei.x,s[4]=Aa.x,s[8]=yn.x,s[1]=Ei.y,s[5]=Aa.y,s[9]=yn.y,s[2]=Ei.z,s[6]=Aa.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],M=i[6],m=i[10],g=i[14],_=i[3],y=i[7],v=i[11],A=i[15],w=s[0],x=s[4],b=s[8],L=s[12],P=s[1],U=s[5],H=s[9],$=s[13],I=s[2],X=s[6],K=s[10],G=s[14],rt=s[3],Z=s[7],et=s[11],at=s[15];return r[0]=a*w+o*P+l*I+c*rt,r[4]=a*x+o*U+l*X+c*Z,r[8]=a*b+o*H+l*K+c*et,r[12]=a*L+o*$+l*G+c*at,r[1]=h*w+u*P+f*I+d*rt,r[5]=h*x+u*U+f*X+d*Z,r[9]=h*b+u*H+f*K+d*et,r[13]=h*L+u*$+f*G+d*at,r[2]=p*w+M*P+m*I+g*rt,r[6]=p*x+M*U+m*X+g*Z,r[10]=p*b+M*H+m*K+g*et,r[14]=p*L+M*$+m*G+g*at,r[3]=_*w+y*P+v*I+A*rt,r[7]=_*x+y*U+v*X+A*Z,r[11]=_*b+y*H+v*K+A*et,r[15]=_*L+y*$+v*G+A*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],p=t[3],M=t[7],m=t[11],g=t[15],_=l*d-c*f,y=o*d-c*u,v=o*f-l*u,A=a*d-c*h,w=a*f-l*h,x=a*u-o*h;return e*(M*_-m*y+g*v)-i*(p*_-m*A+g*w)+s*(p*y-M*A+g*x)-r*(p*v-M*w+m*x)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],p=t[12],M=t[13],m=t[14],g=t[15],_=e*o-i*a,y=e*l-s*a,v=e*c-r*a,A=i*l-s*o,w=i*c-r*o,x=s*c-r*l,b=h*M-u*p,L=h*m-f*p,P=h*g-d*p,U=u*m-f*M,H=u*g-d*M,$=f*g-d*m,I=_*$-y*H+v*U+A*P-w*L+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/I;return t[0]=(o*$-l*H+c*U)*X,t[1]=(s*H-i*$-r*U)*X,t[2]=(M*x-m*w+g*A)*X,t[3]=(f*w-u*x-d*A)*X,t[4]=(l*P-a*$-c*L)*X,t[5]=(e*$-s*P+r*L)*X,t[6]=(m*v-p*x-g*y)*X,t[7]=(h*x-f*v+d*y)*X,t[8]=(a*H-o*P+c*b)*X,t[9]=(i*P-e*H-r*b)*X,t[10]=(p*w-M*v+g*_)*X,t[11]=(u*v-h*w-d*_)*X,t[12]=(o*L-a*U-l*b)*X,t[13]=(e*U-i*L+s*b)*X,t[14]=(M*y-p*A-m*_)*X,t[15]=(h*A-u*y+f*_)*X,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,M=a*h,m=a*u,g=o*u,_=l*c,y=l*h,v=l*u,A=i.x,w=i.y,x=i.z;return s[0]=(1-(M+g))*A,s[1]=(d+v)*A,s[2]=(p-y)*A,s[3]=0,s[4]=(d-v)*w,s[5]=(1-(f+g))*w,s[6]=(m+_)*w,s[7]=0,s[8]=(p+y)*x,s[9]=(m-_)*x,s[10]=(1-(f+M))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,h=1/o,u=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,e.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=Cn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),p,M;if(l)p=r/(a-r),M=a*r/(a-r);else if(o===Cn)p=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Ls)p=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Cn,l=!1){let c=this.elements,h=2/(e-t),u=2/(i-s),f=-(e+t)/(e-t),d=-(i+s)/(i-s),p,M;if(l)p=1/(a-r),M=a/(a-r);else if(o===Cn)p=-2/(a-r),M=-(a+r)/(a-r);else if(o===Ls)p=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Fo.prototype.isMatrix4=!0;var ye=Fo,xs=new D,Nn=new ye,Jd=new D(0,0,0),$d=new D(1,1,1),Ei=new D,Aa=new D,yn=new D,pu=new ye,mu=new an,On=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return pu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mu.setFromEuler(this),this.setFromQuaternion(mu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,gu=new D,_s=new an,ii=new ye,Ra=new D,lr=new D,Qd=new D,jd=new an,xu=new D(1,0,0),_u=new D(0,1,0),vu=new D(0,0,1),yu={type:"added"},tp={type:"removed"},vs={type:"childadded",child:null},hc={type:"childremoved",child:null},Oe=class n extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new On,i=new an,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new $t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(_u,t)}rotateZ(t){return this.rotateOnAxis(vu,t)}translateOnAxis(t,e){return gu.copy(t).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(_u,t)}translateZ(t){return this.translateOnAxis(vu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ra.copy(t):Ra.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(lr,Ra,this.up):ii.lookAt(Ra,lr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ii),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),vs.child=t,this.dispatchEvent(vs),vs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),p=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new D(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),g=this._getHandJoint(c,M);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function uc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var It=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Vd(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=uc(a,r,t+1/3),this.g=uc(a,r,t),this.b=uc(a,r,t-1/3)}return oe.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let i=Rf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return oe.workingToColorSpace(rn.copy(this),t),Math.round(re(rn.r*255,0,255))*65536+Math.round(re(rn.g*255,0,255))*256+Math.round(re(rn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(rn.copy(this),e);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(rn.copy(this),e),t.r=rn.r,t.g=rn.g,t.b=rn.b,t}getStyle(t=Pe){oe.workingToColorSpace(rn.copy(this),t);let e=rn.r,i=rn.g,s=rn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(Ca);let i=rc(Ti.h,Ca.h,e),s=rc(Ti.s,Ca.s,e),r=rc(Ti.l,Ca.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new It;It.NAMES=Rf;var br=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fs=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dn=new D,si=new D,fc=new D,ri=new D,ys=new D,Ms=new D,Mu=new D,dc=new D,pc=new D,mc=new D,gc=new Ie,xc=new Ie,_c=new Ie,Ci=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Dn.subVectors(t,e),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Dn.subVectors(s,e),si.subVectors(i,e),fc.subVectors(t,e);let a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(fc),c=si.dot(si),h=si.dot(fc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return gc.setScalar(0),xc.setScalar(0),_c.setScalar(0),gc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,i),_c.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(gc,r.x),a.addScaledVector(xc,r.y),a.addScaledVector(_c,r.z),a}static isFrontFacing(t,e,i,s){return Dn.subVectors(i,e),si.subVectors(t,e),Dn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,i),Ms.subVectors(r,i),dc.subVectors(t,i);let l=ys.dot(dc),c=Ms.dot(dc);if(l<=0&&c<=0)return e.copy(i);pc.subVectors(t,s);let h=ys.dot(pc),u=Ms.dot(pc);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(i).addScaledVector(ys,a);mc.subVectors(t,r);let d=ys.dot(mc),p=Ms.dot(mc);if(p>=0&&d<=p)return e.copy(r);let M=d*c-l*p;if(M<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(i).addScaledVector(Ms,o);let m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Mu.subVectors(r,s),o=(u-h)/(u-h+(d-p)),e.copy(s).addScaledVector(Mu,o);let g=1/(m+M+f);return a=M*g,o=f*g,e.copy(i).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Yn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(t.matrixWorld),this.union(Pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Ia.subVectors(this.max,cr),Ss.subVectors(t.a,cr),bs.subVectors(t.b,cr),Es.subVectors(t.c,cr),wi.subVectors(bs,Ss),Ai.subVectors(Es,bs),Zi.subVectors(Ss,Es);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!vc(e,Ss,bs,Es,Ia)||(e=[1,0,0,0,1,0,0,0,1],!vc(e,Ss,bs,Es,Ia))?!1:(La.crossVectors(wi,Ai),e=[La.x,La.y,La.z],vc(e,Ss,bs,Es,Ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ai=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,Pa=new Yn,Ss=new D,bs=new D,Es=new D,wi=new D,Ai=new D,Zi=new D,cr=new D,Ia=new D,La=new D,Ji=new D;function vc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ji.fromArray(n,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=i.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ze=new D,Na=new ct,np=0,ke=class extends qn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sf,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=t!==void 0?sh(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Na.fromBufferAttribute(this,e),Na.applyMatrix3(t),this.setXY(e,Na.x,Na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Wd(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Xd(t,this.array)}};var Er=class extends ke{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Tr=class extends ke{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var kt=class extends ke{constructor(t,e,i){super(new Float32Array(t),e,i)}},ip=new Yn,hr=new D,yc=new D,Bn=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(yc)),this.expandByPoint(hr.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sp=0,Rn=new ye,Mc=new Oe,Ts=new D,Mn=new Yn,ur=new Yn,Ye=new D,fe=class n extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hd(t)?Tr:Er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,i){return Rn.makeTranslation(t,e,i),this.applyMatrix4(Rn),this}scale(t,e,i){return Rn.makeScale(t,e,i),this.applyMatrix4(Rn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ye.addVectors(Mn.min,ur.min),Mn.expandByPoint(Ye),Ye.addVectors(Mn.max,ur.max),Mn.expandByPoint(Ye)):(Mn.expandByPoint(ur.min),Mn.expandByPoint(ur.max))}Mn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ye.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ye));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ye.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(t,c),Ye.add(Ts)),s=Math.max(s,i.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new ke(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new D,l[L]=new D;let h=new D,u=new D,f=new D,d=new ct,p=new ct,M=new ct,m=new D,g=new D;function _(L,P,U){c[L]=c[P]=c[U]=1,h.fromBufferAttribute(i,L),u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,L),p.fromBufferAttribute(r,P),M.fromBufferAttribute(r,U),u.sub(h),f.sub(h),p.sub(d),M.sub(d);let H=1/(p.x*M.y-M.x*p.y);isFinite(H)&&(m.copy(u).multiplyScalar(M.y).addScaledVector(f,-p.y).multiplyScalar(H),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-M.x).multiplyScalar(H),o[L].add(m),o[P].add(m),o[U].add(m),l[L].add(g),l[P].add(g),l[U].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let L=0,P=y.length;L<P;++L){let U=y[L],H=U.start,$=U.count;for(let I=H,X=H+$;I<X;I+=3)_(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let v=new D,A=new D,w=new D,x=new D;function b(L){w.fromBufferAttribute(s,L),x.copy(w);let P=o[L];v.copy(P),v.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(x,P);let H=A.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,H)}for(let L=0,P=i.count;L<P;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),M=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new ke(f,h,u)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,i);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sc=new D,rp=new D,ap=new $t,Fn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Sc.subVectors(i,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ap.getNormalMatrix(t),s=this.coplanarPoint(Sc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},op=0,ui=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=Bi,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Wc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ja,this.stencilZFail=ja,this.stencilZPass=ja,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Fn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var oi=new D,bc=new D,Da=new D,Ua=new D,wr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){bc.copy(t).add(e).multiplyScalar(.5),Da.copy(e).sub(t).normalize(),Ua.copy(this.origin).sub(bc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Da),o=Ua.dot(this.direction),l=-Ua.dot(Da),c=Ua.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let M=1/h;u*=M,f*=M,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(bc).addScaledVector(Da,f),d}intersectSphere(t,e){if(t.radius<0)return null;oi.subVectors(t.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=t.x-a.x,f=t.y-a.y,d=t.z-a.z,p=e.x-a.x,M=e.y-a.y,m=e.z-a.z,g=i.x-a.x,_=i.y-a.y,y=i.z-a.z,v=Math.abs(l),A=Math.abs(c),w=Math.abs(h),x,b,L,P,U,H,$,I,X,K,G,rt;if(v>=A&&v>=w?(L=l,H=u,X=p,rt=g,l>=0?(x=c,b=h,P=f,U=d,$=M,I=m,K=_,G=y):(x=h,b=c,P=d,U=f,$=m,I=M,K=y,G=_)):A>=w?(L=c,H=f,X=M,rt=_,c>=0?(x=h,b=l,P=d,U=u,$=m,I=p,K=y,G=g):(x=l,b=h,P=u,U=d,$=p,I=m,K=g,G=y)):(L=h,H=d,X=m,rt=y,h>=0?(x=l,b=c,P=u,U=f,$=p,I=M,K=g,G=_):(x=c,b=l,P=f,U=u,$=M,I=p,K=_,G=g)),L===0)return null;let Z=x/L,et=b/L,at=1/L,bt=P-Z*H,Lt=U-et*H,tt=$-Z*X,_t=I-et*X,At=K-Z*rt,Ht=G-et*rt,St=At*_t-Ht*tt,Ft=bt*Ht-Lt*At,de=tt*Lt-_t*bt;if(s){if(St<0||Ft<0||de<0)return null}else if((St<0||Ft<0||de<0)&&(St>0||Ft>0||de>0))return null;let Ot=St+Ft+de;if(Ot===0)return null;let jt=at*(St*H+Ft*X+de*rt);return(Ot>0?jt<0:jt>0)?null:this.at(jt/Ot,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class extends ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Su=new ye,$i=new wr,Fa=new Bn,bu=new D,Oa=new D,Ba=new D,za=new D,Ec=new D,ka=new D,Eu=new D,Ha=new D,Ct=class extends Oe{constructor(t=new fe,e=new dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){ka.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ec.fromBufferAttribute(u,t),a?ka.addScaledVector(Ec,h):ka.addScaledVector(Ec.sub(e),h))}e.add(ka)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(Fa.containsPoint($i.origin)===!1&&($i.intersectSphere(Fa,bu)===null||$i.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(Su.copy(r).invert(),$i.copy(t.ray).applyMatrix4(Su),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,M=f.length;p<M;p++){let m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=y;v<A;v+=3){let w=o.getX(v),x=o.getX(v+1),b=o.getX(v+2);s=Ga(this,g,t,i,c,h,u,w,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let m=p,g=M;m<g;m+=3){let _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=Ga(this,a,t,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,M=f.length;p<M;p++){let m=f[p],g=a[m.materialIndex],_=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=_,A=y;v<A;v+=3){let w=v,x=v+1,b=v+2;s=Ga(this,g,t,i,c,h,u,w,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let p=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=p,g=M;m<g;m+=3){let _=m,y=m+1,v=m+2;s=Ga(this,a,t,i,c,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function lp(n,t,e,i,s,r,a,o){let l;if(t.side===$e?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Oi,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ha);return c<e.near||c>e.far?null:{distance:c,point:Ha.clone(),object:n}}function Ga(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Oa),n.getVertexPosition(l,Ba),n.getVertexPosition(c,za);let h=lp(n,t,e,i,Oa,Ba,za,Eu);if(h){let u=new D;Ci.getBarycoord(Eu,Oa,Ba,za,u),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,l,c,u,new ct)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,u,new ct)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new D,materialIndex:0};Ci.getNormal(Oa,Ba,za,f.normal),h.face=f,h.barycoord=u}return h}var Ar=class extends fn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=Ze,h=Ze,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends ke{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new ye,Tu=new ye,Va=[],wu=new Yn,cp=new ye,fr=new Ct,dr=new Bn,ts=class extends Ct{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),wu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(wu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ws),dr.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(i),t.ray.intersectsSphere(dr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ws),Tu.multiplyMatrices(i,ws),fr.matrixWorld=Tu,fr.raycast(t,Va);for(let a=0,o=Va.length;a<o;a++){let l=Va[a];l.instanceId=r,l.object=this,e.push(l)}Va.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,Vo,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Bn,hp=new ct(.5,.5),Wa=new D,Pi=class{constructor(t=new Fn,e=new Fn,i=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Cn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],M=r[9],m=r[10],g=r[11],_=r[12],y=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,d-h,g-p,A-_).normalize(),s[1].setComponents(c+a,d+h,g+p,A+_).normalize(),s[2].setComponents(c+o,d+u,g+M,A+y).normalize(),s[3].setComponents(c-o,d-u,g-M,A-y).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,d-f,g-m,A-v).normalize();else if(s[4].setComponents(c-l,d-f,g-m,A-v).normalize(),e===Cn)s[5].setComponents(c+l,d+f,g+m,A+v).normalize();else if(e===Ls)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=hp.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Wa.x=s.normal.x>0?t.max.x:t.min.x,Wa.y=s.normal.y>0?t.max.y:t.min.y,Wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Au=new ye,po=class n{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Pi),i[s].setFromProjectionMatrix(Au,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Pi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var mo=class extends ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ru=new ye,Nc=new wr,Xa=new Bn,qa=new D,Rr=class extends Oe{constructor(t=new fe,e=new mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,t.ray.intersectsSphere(Xa)===!1)return;Ru.copy(s).invert(),Nc.copy(t.ray).applyMatrix4(Ru);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,M=d;p<M;p++){let m=c.getX(p);qa.fromBufferAttribute(u,m),Cu(qa,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,M=d;p<M;p++)qa.fromBufferAttribute(u,p),Cu(qa,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cu(n,t,e,i,s,r,a){let o=Nc.distanceSqToPoint(n);if(o<e){let l=new D;Nc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Cr=class extends fn{constructor(t=[],e=ls,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends fn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class extends fn{constructor(t,e,i=kn,s,r,a,o=Ze,l=Ze,c,h=hi,u=1){if(h!==hi&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Pr=class extends zn{constructor(t,e=kn,i=ls,s,r,a=Ze,o=Ze,l,c=hi){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ir=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class n extends fe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,a,r,0),p("z","y","x",1,-1,i,e,-t,a,r,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,r,4),p("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function p(M,m,g,_,y,v,A,w,x,b,L){let P=v/x,U=A/b,H=v/2,$=A/2,I=w/2,X=x+1,K=b+1,G=0,rt=0,Z=new D;for(let et=0;et<K;et++){let at=et*U-$;for(let bt=0;bt<X;bt++){let Lt=bt*P-H;Z[M]=Lt*_,Z[m]=at*y,Z[g]=I,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[g]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(bt/x),u.push(1-et/b),G+=1}}for(let et=0;et<b;et++)for(let at=0;at<x;at++){let bt=f+at+X*et,Lt=f+at+X*(et+1),tt=f+(at+1)+X*(et+1),_t=f+(at+1)+X*et;l.push(bt,Lt,_t),l.push(Lt,tt,_t),rt+=6}o.addGroup(d,rt,L),d+=rt,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Pn=class n extends fe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new D,h=new ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=i+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},pn=class n extends fe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,M=[],m=i/2,g=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function _(){let v=new D,A=new D,w=0,x=(e-t)/i;for(let b=0;b<=r;b++){let L=[],P=b/r,U=P*(e-t)+t;for(let H=0;H<=s;H++){let $=H/s,I=$*l+o,X=Math.sin(I),K=Math.cos(I);A.x=U*X,A.y=-P*i+m,A.z=U*K,u.push(A.x,A.y,A.z),v.set(X,x,K).normalize(),f.push(v.x,v.y,v.z),d.push($,1-P),L.push(p++)}M.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let P=M[L][b],U=M[L+1][b],H=M[L+1][b+1],$=M[L][b+1];(t>0||L!==0)&&(h.push(P,U,$),w+=3),(e>0||L!==r-1)&&(h.push(U,H,$),w+=3)}c.addGroup(g,w,0),g+=w}function y(v){let A=p,w=new ct,x=new D,b=0,L=v===!0?t:e,P=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*P,0),f.push(0,P,0),d.push(.5,.5),p++;let U=p;for(let H=0;H<=s;H++){let I=H/s*l+o,X=Math.cos(I),K=Math.sin(I);x.x=L*K,x.y=m*P,x.z=L*X,u.push(x.x,x.y,x.z),f.push(0,P,0),w.x=X*.5+.5,w.y=K*.5*P+.5,d.push(w.x,w.y),p++}for(let H=0;H<s;H++){let $=A+H,I=U+H;v===!0?h.push(I,I+1,$):h.push(I+1,I,$),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Bs=class n extends pn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},go=class n extends fe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new kt(r,3)),this.setAttribute("normal",new kt(r.slice(),3)),this.setAttribute("uv",new kt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new D,v=new D,A=new D;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],v),d(e[w+2],A),l(y,v,A,_)}function l(_,y,v,A){let w=A+1,x=[];for(let b=0;b<=w;b++){x[b]=[];let L=_.clone().lerp(v,b/w),P=y.clone().lerp(v,b/w),U=w-b;for(let H=0;H<=U;H++)H===0&&b===w?x[b][H]=L:x[b][H]=L.clone().lerp(P,H/U)}for(let b=0;b<w;b++)for(let L=0;L<2*(w-b)-1;L++){let P=Math.floor(L/2);L%2===0?(f(x[b][P+1]),f(x[b+1][P]),f(x[b][P])):(f(x[b][P+1]),f(x[b+1][P+1]),f(x[b+1][P]))}}function c(_){let y=new D;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new D;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(v,1-A)}p(),u()}function u(){for(let _=0;_<a.length;_+=6){let y=a[_+0],v=a[_+2],A=a[_+4],w=Math.max(y,v,A),x=Math.min(y,v,A);w>.9&&x<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function f(_){r.push(_.x,_.y,_.z)}function d(_,y){let v=_*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function p(){let _=new D,y=new D,v=new D,A=new D,w=new ct,x=new ct,b=new ct;for(let L=0,P=0;L<r.length;L+=9,P+=6){_.set(r[L+0],r[L+1],r[L+2]),y.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),w.set(a[P+0],a[P+1]),x.set(a[P+2],a[P+3]),b.set(a[P+4],a[P+5]),A.copy(_).add(y).add(v).divideScalar(3);let U=m(A);M(w,P+0,_,U),M(x,P+2,y,U),M(b,P+4,v,U)}}function M(_,y,v,A){A<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ct:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new ye;for(let d=0;d<=t;d++){let p=d/t;s[d]=this.getTangentAt(p,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},zs=class extends bn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xo=class extends zs{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function rh(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Pu=new D,Iu=new D,Tc=new rh,wc=new rh,Ac=new rh,fi=class extends bn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new D){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Iu.subVectors(s[0],s[1]).add(s[0]),c=Iu);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Pu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),M=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);M<1e-4&&(M=1),p<1e-4&&(p=M),m<1e-4&&(m=M),Tc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,M,m),wc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,M,m),Ac.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,M,m)}else this.curveType==="catmullrom"&&(Tc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Ac.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Tc.calc(l),wc.calc(l),Ac.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Lu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function up(n,t){let e=1-n;return e*e*t}function fp(n,t){return 2*(1-n)*n*t}function dp(n,t){return n*n*t}function mr(n,t,e,i){return up(n,t)+fp(n,e)+dp(n,i)}function pp(n,t){let e=1-n;return e*e*e*t}function mp(n,t){let e=1-n;return 3*e*e*n*t}function gp(n,t){return 3*(1-n)*n*n*t}function xp(n,t){return n*n*n*t}function gr(n,t,e,i,s){return pp(n,t)+mp(n,e)+gp(n,i)+xp(n,s)}var Lr=class extends bn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(gr(t,s.x,r.x,a.x,o.x),gr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends bn{constructor(t=new D,e=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(gr(t,s.x,r.x,a.x,o.x),gr(t,s.y,r.y,a.y,o.y),gr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nr=class extends bn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},vo=class extends bn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends bn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(mr(t,s.x,r.x,a.x),mr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ur=class extends bn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(mr(t,s.x,r.x,a.x),mr(t,s.y,r.y,a.y),mr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Lu(o,l.x,c.x,h.x,u.x),Lu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},yo=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:fi,CubicBezierCurve:Lr,CubicBezierCurve3:_o,EllipseCurve:zs,LineCurve:Nr,LineCurve3:vo,QuadraticBezierCurve:Dr,QuadraticBezierCurve3:Ur,SplineCurve:Fr}),Mo=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new yo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Or=class extends Mo{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Nr(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Dr(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Lr(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Fr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new zs(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ii=class extends Or{constructor(t){super(t),this.uuid=Js(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Or().fromJSON(s))}return this}};function _p(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Cf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=bp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,u=l;for(let f=e;f<s;f+=e){let d=n[f],p=n[f+1];d<o&&(o=d),p<l&&(l=p),d>h&&(h=d),p>u&&(u=p)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Br(r,a,e,o,l,c,0),a}function Cf(n,t,e,i,s){let r;if(s===Dp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Nu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Nu(a/i|0,n[a],n[a+1],r);return r&&ks(r,r.next)&&(kr(r),r=r.next),r}function es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ks(e,e.next)||Ne(e.prev,e,e.next)===0)){if(kr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Br(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Rp(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?yp(n,i,s,r):vp(n)){t.push(l.i,n.i,c.i),kr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Mp(es(n),t),Br(n,t,e,i,s,r,2)):a===2&&Sp(n,t,e,i,s,r):Br(es(n),t,e,i,s,r,1);break}}}function vp(n){let t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),d=Math.max(o,l,c),p=i.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&pr(s,o,r,l,a,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(Ne(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,d=Math.min(o,l,c),p=Math.min(h,u,f),M=Math.max(o,l,c),m=Math.max(h,u,f),g=Dc(d,p,t,e,i),_=Dc(M,m,t,e,i),y=n.prevZ,v=n.nextZ;for(;y&&y.z>=g&&v&&v.z<=_;){if(y.x>=d&&y.x<=M&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&pr(o,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=M&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&pr(o,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=g;){if(y.x>=d&&y.x<=M&&y.y>=p&&y.y<=m&&y!==s&&y!==a&&pr(o,h,l,u,c,f,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=M&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&pr(o,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mp(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ks(i,s)&&If(i,e,e.next,s)&&zr(i,s)&&zr(s,i)&&(t.push(i.i,e.i,s.i),kr(e),kr(e.next),e=n=s),e=e.next}while(e!==n);return es(e)}function Sp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ip(a,o)){let l=Lf(a,o);a=es(a,a.next),l=es(l,l.next),Br(a,t,e,i,s,r,0),Br(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function bp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=Cf(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(Ep);for(let r=0;r<s.length;r++)e=Tp(s[r],e);return e}function Ep(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Tp(n,t){let e=wp(n,t);if(!e)return t;let i=Lf(e,n);return es(i,i.next),es(e,e.next)}function wp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(ks(n,e))return e;do{if(ks(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=i&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&Pf(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let u=Math.abs(s-e.y)/(i-e.x);zr(e,n)&&(u<h||u===h&&(e.x>a.x||e.x===a.x&&Ap(a,e)))&&(a=e,h=u)}e=e.next}while(e!==o);return a}function Ap(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function Rp(n,t,e,i){let s=n;do s.z===0&&(s.z=Dc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cp(s)}function Cp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Dc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Pp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Pf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function pr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Pf(n,t,e,i,s,r,a,o)}function Ip(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Lp(n,t)&&(zr(n,t)&&zr(t,n)&&Np(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||ks(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ks(n,t){return n.x===t.x&&n.y===t.y}function If(n,t,e,i){let s=Za(Ne(n,t,e)),r=Za(Ne(n,t,i)),a=Za(Ne(e,i,n)),o=Za(Ne(e,i,t));return!!(s!==r&&a!==o||s===0&&Ya(n,e,t)||r===0&&Ya(n,i,t)||a===0&&Ya(e,n,i)||o===0&&Ya(e,t,i))}function Ya(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Za(n){return n>0?1:n<0?-1:0}function Lp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&If(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function zr(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function Np(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Lf(n,t){let e=Uc(n.i,n.x,n.y),i=Uc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Nu(n,t,e,i){let s=Uc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Uc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Dp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Fc=class{static triangulate(t,e,i=2){return _p(t,e,i)}},Qi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Du(t),Uu(i,t);let a=t.length;e.forEach(Du);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Uu(i,e[l]);let o=Fc.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Du(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Uu(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ns=class n extends fe{constructor(t=new Ii([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new kt(s,3)),this.setAttribute("uv",new kt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:d-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Up,y,v=!1,A,w,x,b;if(g){y=g.getSpacedPoints(h),v=!0,f=!1;let ot=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,ot),w=new D,x=new D,b=new D}f||(m=0,d=0,p=0,M=0);let L=o.extractPoints(c),P=L.shape,U=L.holes;if(!Qi.isClockWise(P)){P=P.reverse();for(let ot=0,gt=U.length;ot<gt;ot++){let mt=U[ot];Qi.isClockWise(mt)&&(U[ot]=mt.reverse())}}function $(ot){let mt=10000000000000001e-36,Rt=ot[0];for(let vt=1;vt<=ot.length;vt++){let Zt=vt%ot.length,Bt=ot[Zt],ie=Bt.x-Rt.x,ae=Bt.y-Rt.y,he=ie*ie+ae*ae,z=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(Rt.x),Math.abs(Rt.y)),Te=mt*z*z;if(he<=Te){ot.splice(Zt,1),vt--;continue}Rt=Bt}}$(P),U.forEach($);let I=U.length,X=P;for(let ot=0;ot<I;ot++){let gt=U[ot];P=P.concat(gt)}function K(ot,gt,mt){return gt||Yt("ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(gt,mt)}let G=P.length;function rt(ot,gt,mt){let Rt,vt,Zt,Bt=ot.x-gt.x,ie=ot.y-gt.y,ae=mt.x-ot.x,he=mt.y-ot.y,z=Bt*Bt+ie*ie,Te=Bt*he-ie*ae;if(Math.abs(Te)>Number.EPSILON){let ee=Math.sqrt(z),xe=Math.sqrt(ae*ae+he*he),xt=gt.x-ie/ee,Ce=gt.y+Bt/ee,Wt=mt.x-he/xe,Xt=mt.y+ae/xe,R=((Wt-xt)*he-(Xt-Ce)*ae)/(Bt*he-ie*ae);Rt=xt+Bt*R-ot.x,vt=Ce+ie*R-ot.y;let S=Rt*Rt+vt*vt;if(S<=2)return new ct(Rt,vt);Zt=Math.sqrt(S/2)}else{let ee=!1;Bt>Number.EPSILON?ae>Number.EPSILON&&(ee=!0):Bt<-Number.EPSILON?ae<-Number.EPSILON&&(ee=!0):Math.sign(ie)===Math.sign(he)&&(ee=!0),ee?(Rt=-ie,vt=Bt,Zt=Math.sqrt(z)):(Rt=Bt,vt=ie,Zt=Math.sqrt(z/2))}return new ct(Rt/Zt,vt/Zt)}let Z=[];for(let ot=0,gt=X.length,mt=gt-1,Rt=ot+1;ot<gt;ot++,mt++,Rt++)mt===gt&&(mt=0),Rt===gt&&(Rt=0),Z[ot]=rt(X[ot],X[mt],X[Rt]);let et=[],at,bt=Z.concat();for(let ot=0,gt=I;ot<gt;ot++){let mt=U[ot];at=[];for(let Rt=0,vt=mt.length,Zt=vt-1,Bt=Rt+1;Rt<vt;Rt++,Zt++,Bt++)Zt===vt&&(Zt=0),Bt===vt&&(Bt=0),at[Rt]=rt(mt[Rt],mt[Zt],mt[Bt]);et.push(at),bt=bt.concat(at)}let Lt;if(m===0)Lt=Qi.triangulateShape(X,U);else{let ot=[],gt=[];for(let mt=0;mt<m;mt++){let Rt=mt/m,vt=d*Math.cos(Rt*Math.PI/2),Zt=p*Math.sin(Rt*Math.PI/2)+M;for(let Bt=0,ie=X.length;Bt<ie;Bt++){let ae=K(X[Bt],Z[Bt],Zt);Ft(ae.x,ae.y,-vt),Rt===0&&ot.push(ae)}for(let Bt=0,ie=I;Bt<ie;Bt++){let ae=U[Bt];at=et[Bt];let he=[];for(let z=0,Te=ae.length;z<Te;z++){let ee=K(ae[z],at[z],Zt);Ft(ee.x,ee.y,-vt),Rt===0&&he.push(ee)}Rt===0&&gt.push(he)}}Lt=Qi.triangulateShape(ot,gt)}let tt=Lt.length,_t=p+M;for(let ot=0;ot<G;ot++){let gt=f?K(P[ot],bt[ot],_t):P[ot];v?(x.copy(A.normals[0]).multiplyScalar(gt.x),w.copy(A.binormals[0]).multiplyScalar(gt.y),b.copy(y[0]).add(x).add(w),Ft(b.x,b.y,b.z)):Ft(gt.x,gt.y,0)}for(let ot=1;ot<=h;ot++)for(let gt=0;gt<G;gt++){let mt=f?K(P[gt],bt[gt],_t):P[gt];v?(x.copy(A.normals[ot]).multiplyScalar(mt.x),w.copy(A.binormals[ot]).multiplyScalar(mt.y),b.copy(y[ot]).add(x).add(w),Ft(b.x,b.y,b.z)):Ft(mt.x,mt.y,u/h*ot)}for(let ot=m-1;ot>=0;ot--){let gt=ot/m,mt=d*Math.cos(gt*Math.PI/2),Rt=p*Math.sin(gt*Math.PI/2)+M;for(let vt=0,Zt=X.length;vt<Zt;vt++){let Bt=K(X[vt],Z[vt],Rt);Ft(Bt.x,Bt.y,u+mt)}for(let vt=0,Zt=U.length;vt<Zt;vt++){let Bt=U[vt];at=et[vt];for(let ie=0,ae=Bt.length;ie<ae;ie++){let he=K(Bt[ie],at[ie],Rt);v?Ft(he.x,he.y+y[h-1].y,y[h-1].x+mt):Ft(he.x,he.y,u+mt)}}}At(),Ht();function At(){let ot=s.length/3;if(f){let gt=0,mt=G*gt;for(let Rt=0;Rt<tt;Rt++){let vt=Lt[Rt];de(vt[2]+mt,vt[1]+mt,vt[0]+mt)}gt=h+m*2,mt=G*gt;for(let Rt=0;Rt<tt;Rt++){let vt=Lt[Rt];de(vt[0]+mt,vt[1]+mt,vt[2]+mt)}}else{for(let gt=0;gt<tt;gt++){let mt=Lt[gt];de(mt[2],mt[1],mt[0])}for(let gt=0;gt<tt;gt++){let mt=Lt[gt];de(mt[0]+G*h,mt[1]+G*h,mt[2]+G*h)}}i.addGroup(ot,s.length/3-ot,0)}function Ht(){let ot=s.length/3,gt=0;St(X,gt),gt+=X.length;for(let mt=0,Rt=U.length;mt<Rt;mt++){let vt=U[mt];St(vt,gt),gt+=vt.length}i.addGroup(ot,s.length/3-ot,1)}function St(ot,gt){let mt=ot.length;for(;--mt>=0;){let Rt=mt,vt=mt-1;vt<0&&(vt=ot.length-1);for(let Zt=0,Bt=h+m*2;Zt<Bt;Zt++){let ie=G*Zt,ae=G*(Zt+1),he=gt+Rt+ie,z=gt+vt+ie,Te=gt+vt+ae,ee=gt+Rt+ae;Ot(he,z,Te,ee)}}}function Ft(ot,gt,mt){l.push(ot),l.push(gt),l.push(mt)}function de(ot,gt,mt){jt(ot),jt(gt),jt(mt);let Rt=s.length/3,vt=_.generateTopUV(i,s,Rt-3,Rt-2,Rt-1);ne(vt[0]),ne(vt[1]),ne(vt[2])}function Ot(ot,gt,mt,Rt){jt(ot),jt(gt),jt(Rt),jt(gt),jt(mt),jt(Rt);let vt=s.length/3,Zt=_.generateSideWallUV(i,s,vt-6,vt-3,vt-2,vt-1);ne(Zt[0]),ne(Zt[1]),ne(Zt[3]),ne(Zt[1]),ne(Zt[2]),ne(Zt[3])}function jt(ot){s.push(l[ot*3+0]),s.push(l[ot*3+1]),s.push(l[ot*3+2])}function ne(ot){r.push(ot.x),r.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Fp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yo[s.type]().fromJSON(s)),new n(i,t.options)}},Up={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new ct(r,a),new ct(o,l),new ct(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],d=t[s*3+1],p=t[s*3+2],M=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ct(a,1-l),new ct(c,1-u),new ct(f,1-p),new ct(M,1-g)]:[new ct(o,1-l),new ct(h,1-u),new ct(d,1-p),new ct(m,1-g)]}};function Fp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Hr=class n extends go{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},Gr=class n extends fe{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=re(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new D,f=new ct,d=new D,p=new D,M=new D,m=0,g=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-m,d.z=g*0,M.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:M.normalize(),l.push(M.x,M.y,M.z);break;default:m=t[_+1].x-t[_].x,g=t[_+1].y-t[_].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=M.x,d.y+=M.y,d.z+=M.z,d.normalize(),l.push(d.x,d.y,d.z),M.copy(p)}for(let _=0;_<=e;_++){let y=i+_*h*s,v=Math.sin(y),A=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*A,a.push(u.x,u.y,u.z),f.x=_/e,f.y=w/(t.length-1),o.push(f.x,f.y);let x=l[3*w+0]*v,b=l[3*w+1],L=l[3*w+0]*A;c.push(x,b,L)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){let v=y+_*t.length,A=v,w=v+t.length,x=v+t.length+1,b=v+1;r.push(A,w,b),r.push(x,b,w)}this.setIndex(r),this.setAttribute("position",new kt(a,3)),this.setAttribute("uv",new kt(o,2)),this.setAttribute("normal",new kt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var Ae=class n extends fe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],p=[],M=[],m=[];for(let g=0;g<h;g++){let _=g*f-a;for(let y=0;y<c;y++){let v=y*u-r;p.push(v,-_,0),M.push(0,0,1),m.push(y/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let y=_+c*g,v=_+c*(g+1),A=_+1+c*(g+1),w=_+1+c*g;d.push(y,v,w),d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Hs=class n extends fe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,d=new D,p=new ct;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,h.push(p.x,p.y)}u+=f}for(let M=0;M<s;M++){let m=M*(i+1);for(let g=0;g<i;g++){let _=g+m,y=_,v=_+i+1,A=_+i+2,w=_+1;o.push(y,v,w),o.push(v,A,w)}}this.setIndex(o),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Li=class n extends fe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new D,f=new D,d=[],p=[],M=[],m=[];for(let g=0;g<=i;g++){let _=[],y=g/i,v=a+y*o,A=t*Math.cos(v),w=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===i&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let L=b/e,P=s+L*r;u.x=-w*Math.cos(P),u.y=A,u.z=w*Math.sin(P),p.push(u.x,u.y,u.z),f.copy(u).normalize(),M.push(f.x,f.y,f.z),m.push(L+x,1-y),_.push(c++)}h.push(_)}for(let g=0;g<i;g++)for(let _=0;_<e;_++){let y=h[g][_+1],v=h[g][_],A=h[g+1][_],w=h[g+1][_+1];(g!==0||a>0)&&d.push(y,v,w),(g!==i-1||l<Math.PI)&&d.push(v,A,w)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(M,3)),this.setAttribute("uv",new kt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ni=class n extends fe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new D,d=new D,p=new D;for(let M=0;M<=i;M++){let m=a+M/i*o;for(let g=0;g<=s;g++){let _=g/s*r;d.x=(t+e*Math.cos(m))*Math.cos(_),d.y=(t+e*Math.cos(m))*Math.sin(_),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(g/s),u.push(M/i)}}for(let M=1;M<=i;M++)for(let m=1;m<=s;m++){let g=(s+1)*M+m-1,_=(s+1)*(M-1)+m-1,y=(s+1)*(M-1)+m,v=(s+1)*M+m;l.push(g,_,v),l.push(_,y,v)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Gs=class n extends fe{constructor(t=new Ur(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ct,h=new D,u=[],f=[],d=[],p=[];M(),this.setIndex(p),this.setAttribute("position",new kt(u,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function M(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),_(),g()}function m(y){h=t.getPointAt(y/e,h);let v=a.normals[y],A=a.binormals[y];for(let w=0;w<=s;w++){let x=w/s*Math.PI*2,b=Math.sin(x),L=-Math.cos(x);l.x=L*v.x+b*A.x,l.y=L*v.y+b*A.y,l.z=L*v.z+b*A.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){let A=(s+1)*(y-1)+(v-1),w=(s+1)*y+(v-1),x=(s+1)*y+v,b=(s+1)*(y-1)+v;p.push(A,w,b),p.push(w,x,b)}}function _(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)c.x=y/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Fu(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Fu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function on(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function Fu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Op(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ah(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var _i={clone:hs,merge:on},Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new It().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[i].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Vs=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kt=class extends ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bl,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},is=class extends Kt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new It(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new It(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new It(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){ji('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var So=class extends ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},bo=class extends ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ja(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Di=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Eo=class extends Di{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pc,endingEnd:Pc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ic:r=t,o=2*e-i;break;case Lc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ic:a=t,l=2*i-e;break;case Lc:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(s-e),M=p*p,m=M*p,g=-f*m+2*f*M-f*p,_=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*p+1,y=(-1-d)*m+(1.5+d)*M+.5*p,v=d*m-d*M;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+_*a[c+A]+y*a[l+A]+v*a[u+A];return r}},To=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},wo=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ao=class extends Di{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(s-e),M=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*p;return r}let f=o*2,d=t-1;for(let p=0;p!==o;++p){let M=a[c+p],m=a[l+p],g=d*f+p*2,_=u[g],y=u[g+1],v=t*f+p*2,A=h[v],w=h[v+1],x=Hp(i,e,_,A,s);r[p]=Nf(x,M,y,w,m)}return r}};function Nf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function kp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Hp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Nf(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=kp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ja(t.settings)&&(i.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new wo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case lo:e=this.InterpolantFactoryMethodLinear;break;case Qa:e=this.InterpolantFactoryMethodSmooth;break;case Cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Qa;case this.InterpolantFactoryMethodBezier:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ja(this.settings)&&(Ou(this.settings.inTangents,t),Ou(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ja(this.settings)&&(Bu(this.settings.inTangents,t),Bu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Gd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let M=e[u+p];if(M!==e[f+p]||M!==e[d+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)e[f+d]=e[u+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ja(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ou(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Bu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}En.prototype.ValueTypeName="";En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=lo;var Ui=class extends En{constructor(t,e,i){super(t,e,i)}};Ui.prototype.ValueTypeName="bool";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=xr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Ro.prototype.ValueTypeName="color";var Co=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Co.prototype.ValueTypeName="number";var Po=class extends Di{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vr=class extends En{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends En{constructor(t,e,i){super(t,e,i)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=xr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends En{constructor(t,e,i,s){super(t,e,i,s)}};Io.prototype.ValueTypeName="vector";var Lo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Df=new Lo,No=class{constructor(t){this.manager=t!==void 0?t:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};No.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wr=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Xr=class extends Wr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rc=new ye,zu=new D,ku=new D,Do=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Rc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ls||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Rc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},$a=new D,Ka=new an,Wn=new D,qr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($a,Ka,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,Wn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose($a,Ka,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Ka,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ri=new D,Hu=new ct,Gu=new ct,hn=class extends qr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=co*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return co*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ri.x,Ri.y).multiplyScalar(-t/Ri.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Gu),e.subVectors(Gu,Hu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ss=class extends qr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oc=class extends Do{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Wr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Oc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Rs=-90,Cs=1,Ws=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(Rs,Cs,t,e);s.layers=this.layers,this.add(s);let r=new hn(Rs,Cs,t,e);r.layers=this.layers,this.add(r);let a=new hn(Rs,Cs,t,e);a.layers=this.layers,this.add(a);let o=new hn(Rs,Cs,t,e);o.layers=this.layers,this.add(o);let l=new hn(Rs,Cs,t,e);l.layers=this.layers,this.add(l);let c=new hn(Rs,Cs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.mipmapsAutoUpdate=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Uo=class extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}},Zr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Gp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Gp(){this._document.hidden===!1&&this.reset()}var oh="\\[\\]\\.:\\/",Vp=new RegExp("["+oh+"]","g"),lh="[^"+oh+"]",Wp="[^"+oh.replace("\\.","")+"]",Xp=/((?:WC+[\/:])*)/.source.replace("WC",lh),qp=/(WCOD+)?/.source.replace("WCOD",Wp),Yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),Zp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),Jp=new RegExp("^"+Xp+qp+Yp+Zp+"$"),$p=["material","materials","bones","map"],Bc=class{constructor(t,e,i){let s=i||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},we=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vp,"")}static parseTrackName(t){let e=Jp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$p.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Bc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Vv=new Float32Array(1);var ph=class ph{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ph.prototype.isMatrix2=!0;var zc=ph;function ch(n,t,e,i){let s=Kp(i);switch(e){case Kc:return n*t;case Vo:return n*t/s.components*s.byteLength;case Wo:return n*t/s.components*s.byteLength;case zi:return n*t*2/s.components*s.byteLength;case Xo:return n*t*2/s.components*s.byteLength;case Qc:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case qo:return n*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Zo:case $o:return Math.max(n,16)*Math.max(t,8)/4;case Yo:case Jo:return Math.max(n,8)*Math.max(t,8)/2;case Ko:case Qo:case tl:case el:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jo:case aa:case nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case xl:case _l:case vl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case yl:case Ml:return Math.ceil(n/4)*Math.ceil(t/4)*8;case oa:case Sl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kp(n){switch(n){case _n:case Yc:return{byteLength:1,components:1};case Ys:case Zc:case Ge:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case kn:case ko:case vn:return{byteLength:4,components:1};case Jc:case $c:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function nd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rm(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],M=u[d];M.start<=p.start+p.count+1?p.count=Math.max(p.count,M.start+M.count-p.start):(++f,u[f]=M)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let M=u[d];n.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,om=`#ifdef USE_ALPHAHASH
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
#endif`,lm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,um=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fm=`#ifdef USE_AOMAP
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
#endif`,dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pm=`#ifdef USE_BATCHING
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
#endif`,mm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_m=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,ym=`#ifdef USE_BUMPMAP
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
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Em=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Cm=`#define PI 3.141592653589793
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
} // validated`,Pm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Um="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,zm=`#ifdef USE_ENVMAP
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
#endif`,km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hm=`#ifdef USE_ENVMAP
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
#endif`,Gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qm=`#ifdef USE_GRADIENTMAP
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
}`,Ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Km=`#ifdef USE_ENVMAP
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
#endif`,Qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ng=`PhysicalMaterial material;
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
#endif`,ig=`uniform sampler2D dfgLUT;
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
}`,sg=`
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
#endif`,rg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,og=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,lg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ug=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mg=`#if defined( USE_POINTS_UV )
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
#endif`,gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_g=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vg=`#if defined( USE_MORPHCOLORS )
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
#endif`,yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mg=`#ifdef USE_MORPHTARGETS
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
#endif`,Sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ag=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Rg=`#ifdef USE_NORMALMAP
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
#endif`,Cg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ig=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ug=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wg=`float getShadowMask() {
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
}`,Xg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qg=`#ifdef USE_SKINNING
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
#endif`,Yg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,Jg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jg=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#ifdef USE_TRANSMISSION
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,r0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform float backgroundBlurriness;
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
}`,c0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`#include <common>
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
}`,f0=`#if DEPTH_PACKING == 3200
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
}`,d0=`#define DISTANCE
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
}`,p0=`#define DISTANCE
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
}`,m0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,y0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,S0=`#define LAMBERT
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
}`,b0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,T0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,A0=`#define PHONG
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
}`,R0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,P0=`#define STANDARD
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
}`,I0=`#define TOON
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
}`,L0=`#define TOON
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
}`,N0=`uniform float size;
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
}`,D0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,F0=`uniform vec3 color;
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
}`,O0=`uniform float rotation;
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
}`,B0=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:am,alphahash_pars_fragment:om,alphamap_fragment:lm,alphamap_pars_fragment:cm,alphatest_fragment:hm,alphatest_pars_fragment:um,aomap_fragment:fm,aomap_pars_fragment:dm,batching_pars_vertex:pm,batching_vertex:mm,begin_vertex:gm,beginnormal_vertex:xm,bsdfs:_m,iridescence_fragment:vm,bumpmap_pars_fragment:ym,clipping_planes_fragment:Mm,clipping_planes_pars_fragment:Sm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Em,color_fragment:Tm,color_pars_fragment:wm,color_pars_vertex:Am,color_vertex:Rm,common:Cm,defaultnormal_vertex:Pm,displacementmap_pars_vertex:Im,displacementmap_vertex:Lm,emissivemap_fragment:Nm,emissivemap_pars_fragment:Dm,colorspace_fragment:Um,colorspace_pars_fragment:Fm,envmap_fragment:Om,envmap_common_pars_fragment:Bm,envmap_pars_fragment:zm,envmap_pars_vertex:km,envmap_physical_pars_fragment:Km,envmap_vertex:Hm,fog_vertex:Gm,fog_pars_vertex:Vm,fog_fragment:Wm,fog_pars_fragment:Xm,gradientmap_pars_fragment:qm,lightmap_pars_fragment:Ym,lights_lambert_fragment:Zm,lights_lambert_pars_fragment:Jm,lights_pars_begin:$m,lights_toon_fragment:Qm,lights_toon_pars_fragment:jm,lights_phong_fragment:tg,lights_phong_pars_fragment:eg,lights_physical_fragment:ng,lights_physical_pars_fragment:ig,lights_fragment_begin:sg,lights_fragment_maps:rg,lights_fragment_end:ag,lightprobes_pars_fragment:og,logdepthbuf_fragment:lg,logdepthbuf_pars_fragment:cg,logdepthbuf_pars_vertex:hg,logdepthbuf_vertex:ug,map_fragment:fg,map_pars_fragment:dg,map_particle_fragment:pg,map_particle_pars_fragment:mg,metalnessmap_fragment:gg,metalnessmap_pars_fragment:xg,morphinstance_vertex:_g,morphcolor_vertex:vg,morphnormal_vertex:yg,morphtarget_pars_vertex:Mg,morphtarget_vertex:Sg,normal_fragment_begin:bg,normal_fragment_maps:Eg,normal_pars_fragment:Tg,normal_pars_vertex:wg,normal_vertex:Ag,normalmap_pars_fragment:Rg,clearcoat_normal_fragment_begin:Cg,clearcoat_normal_fragment_maps:Pg,clearcoat_pars_fragment:Ig,iridescence_pars_fragment:Lg,opaque_fragment:Ng,packing:Dg,premultiplied_alpha_fragment:Ug,project_vertex:Fg,dithering_fragment:Og,dithering_pars_fragment:Bg,roughnessmap_fragment:zg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Hg,shadowmap_pars_vertex:Gg,shadowmap_vertex:Vg,shadowmask_pars_fragment:Wg,skinbase_vertex:Xg,skinning_pars_vertex:qg,skinning_vertex:Yg,skinnormal_vertex:Zg,specularmap_fragment:Jg,specularmap_pars_fragment:$g,tonemapping_fragment:Kg,tonemapping_pars_fragment:Qg,transmission_fragment:jg,transmission_pars_fragment:t0,uv_pars_fragment:e0,uv_pars_vertex:n0,uv_vertex:i0,worldpos_vertex:s0,background_vert:r0,background_frag:a0,backgroundCube_vert:o0,backgroundCube_frag:l0,cube_vert:c0,cube_frag:h0,depth_vert:u0,depth_frag:f0,distance_vert:d0,distance_frag:p0,equirect_vert:m0,equirect_frag:g0,linedashed_vert:x0,linedashed_frag:_0,meshbasic_vert:v0,meshbasic_frag:y0,meshlambert_vert:M0,meshlambert_frag:S0,meshmatcap_vert:b0,meshmatcap_frag:E0,meshnormal_vert:T0,meshnormal_frag:w0,meshphong_vert:A0,meshphong_frag:R0,meshphysical_vert:C0,meshphysical_frag:P0,meshtoon_vert:I0,meshtoon_frag:L0,points_vert:N0,points_frag:D0,shadow_vert:U0,shadow_frag:F0,sprite_vert:O0,sprite_frag:B0},Et={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},$n={basic:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:on([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:on([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:on([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new It(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:on([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:on([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:on([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:on([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:on([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:on([Et.common,Et.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:on([Et.lights,Et.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};$n.physical={uniforms:on([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var El={r:0,b:0,g:0},z0=new ye,id=new $t;id.set(-1,0,0,0,1,0,0,0,1);function k0(n,t,e,i,s,r){let a=new It(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function p(_){let y=!1,v=d(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(_,y){let v=d(y);v&&v.isCubeTexture?(c===void 0&&(c=new Ct(new Me(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:hs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z0.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,(h!==v||u!==v.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ct(new Ae(2,2),new De({name:"BackgroundMaterial",uniforms:hs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==pe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,f=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,y){_.getRGB(El,ah(n)),e.buffers.color.setClear(El.r,El.g,El.b,y,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),o=y,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:M,dispose:g}}function H0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(U,H,$,I,X){let K=!1,G=u(U,I,$,H);r!==G&&(r=G,c(r.object)),K=d(U,I,$,X),K&&p(U,I,$,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(U,H,$,I),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(U){return n.bindVertexArray(U)}function h(U){return n.deleteVertexArray(U)}function u(U,H,$,I){let X=I.wireframe===!0,K=i[H.id];K===void 0&&(K={},i[H.id]=K);let G=U.isInstancedMesh===!0?U.id:0,rt=K[G];rt===void 0&&(rt={},K[G]=rt);let Z=rt[$.id];Z===void 0&&(Z={},rt[$.id]=Z);let et=Z[X];return et===void 0&&(et=f(l()),Z[X]=et),et}function f(U){let H=[],$=[],I=[];for(let X=0;X<e;X++)H[X]=0,$[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:$,attributeDivisors:I,object:U,attributes:{},index:null}}function d(U,H,$,I){let X=r.attributes,K=H.attributes,G=0,rt=$.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let at=X[Z],bt=K[Z];if(bt===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(bt=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(bt=U.instanceColor)),at===void 0||at.attribute!==bt||bt&&at.data!==bt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function p(U,H,$,I){let X={},K=H.attributes,G=0,rt=$.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let at=K[Z];at===void 0&&(Z==="instanceMatrix"&&U.instanceMatrix&&(at=U.instanceMatrix),Z==="instanceColor"&&U.instanceColor&&(at=U.instanceColor));let bt={};bt.attribute=at,at&&at.data&&(bt.data=at.data),X[Z]=bt,G++}r.attributes=X,r.attributesNum=G,r.index=I}function M(){let U=r.newAttributes;for(let H=0,$=U.length;H<$;H++)U[H]=0}function m(U){g(U,0)}function g(U,H){let $=r.newAttributes,I=r.enabledAttributes,X=r.attributeDivisors;$[U]=1,I[U]===0&&(n.enableVertexAttribArray(U),I[U]=1),X[U]!==H&&(n.vertexAttribDivisor(U,H),X[U]=H)}function _(){let U=r.newAttributes,H=r.enabledAttributes;for(let $=0,I=H.length;$<I;$++)H[$]!==U[$]&&(n.disableVertexAttribArray($),H[$]=0)}function y(U,H,$,I,X,K,G){G===!0?n.vertexAttribIPointer(U,H,$,X,K):n.vertexAttribPointer(U,H,$,I,X,K)}function v(U,H,$,I){M();let X=I.attributes,K=$.getAttributes(),G=H.defaultAttributeValues;for(let rt in K){let Z=K[rt];if(Z.location>=0){let et=X[rt];if(et===void 0&&(rt==="instanceMatrix"&&U.instanceMatrix&&(et=U.instanceMatrix),rt==="instanceColor"&&U.instanceColor&&(et=U.instanceColor)),et!==void 0){let at=et.normalized,bt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;let tt=Lt.buffer,_t=Lt.type,At=Lt.bytesPerElement,Ht=_t===n.INT||_t===n.UNSIGNED_INT||et.gpuType===ko;if(et.isInterleavedBufferAttribute){let St=et.data,Ft=St.isInterleavedBuffer===!0?St.stride:St.itemSize,de=et.offset;if(St.isInstancedInterleavedBuffer||St.isInstancedBufferAttribute){for(let Ot=0;Ot<Z.locationSize;Ot++)g(Z.location+Ot,St.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Ot=0;Ot<Z.locationSize;Ot++)m(Z.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ot=0;Ot<Z.locationSize;Ot++)y(Z.location+Ot,bt/Z.locationSize,_t,at,Ft*At,(de+bt/Z.locationSize*Ot)*At,Ht)}else{if(et.isInstancedBufferAttribute){for(let St=0;St<Z.locationSize;St++)g(Z.location+St,et.meshPerAttribute);U.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let St=0;St<Z.locationSize;St++)m(Z.location+St);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let St=0;St<Z.locationSize;St++)y(Z.location+St,bt/Z.locationSize,_t,at,bt*At,bt/Z.locationSize*St*At,Ht)}}else if(G!==void 0){let at=G[rt];if(at!==void 0)switch(at.length){case 2:n.vertexAttrib2fv(Z.location,at);break;case 3:n.vertexAttrib3fv(Z.location,at);break;case 4:n.vertexAttrib4fv(Z.location,at);break;default:n.vertexAttrib1fv(Z.location,at)}}}}_()}function A(){L();for(let U in i){let H=i[U];for(let $ in H){let I=H[$];for(let X in I){let K=I[X];for(let G in K)h(K[G].object),delete K[G];delete I[X]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let H=i[U.id];for(let $ in H){let I=H[$];for(let X in I){let K=I[X];for(let G in K)h(K[G].object),delete K[G];delete I[X]}}delete i[U.id]}function x(U){for(let H in i){let $=i[H];for(let I in $){let X=$[I];if(X[U.id]===void 0)continue;let K=X[U.id];for(let G in K)h(K[G].object),delete K[G];delete X[U.id]}}}function b(U){for(let H in i){let $=i[H],I=U.isInstancedMesh===!0?U.id:0,X=$[I];if(X!==void 0){for(let K in X){let G=X[K];for(let rt in G)h(G[rt].object),delete G[rt];delete X[K]}delete $[I],Object.keys($).length===0&&delete i[H]}}}function L(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:M,enableAttribute:m,disableUnusedAttributes:_}}function G0(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function V0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==Hn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Ge&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==_n&&x!==vn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&u===!1;e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&u===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:M,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:A,samples:w}}function W0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Fn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,M=u.clipIntersection,m=u.clipShadows,g=n.get(u);if(!s||p===null||p.length===0||r&&!m)r?h(null):c();else{let _=r?0:i,y=_*4,v=g.clippingState||null;l.value=v,v=h(p,f,y,d);for(let A=0;A!==y;++A)v[A]=e[A];g.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,p){let M=u!==null?u.length:0,m=null;if(M!==0){if(m=l.value,p!==!0||m===null){let g=d+M*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,v=d;y!==M;++y,v+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var ha=class extends Fe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$e,blending:di});r.uniforms.tEquirect.value=e;let a=new Ct(s,r),o=e.minFilter;return e.minFilter===mi&&(e.minFilter=un),new Ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Uf=256,X0=3,q0=20,sd=256,rd=16,Y0=3,Z0=new D,J0=new It,Ks=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ws(1,10,null),this._boxMesh=new Ct(new Me(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Z0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,M=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(t.background=l.getClearColor(J0));let m=new Ws(i,s,h);return m.position.copy(o),m.update(l,t),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Uf,Af(t))}_fromTexture(t,e){t.mapping===ls||t.mapping===qs?this._setSize(t.image.length===0?Uf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Ff(t,!1,!1),i=Math.log2(t)-X0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ff(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ls||t.mapping===qs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Of()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=$0(),this._integrationMaterial=K0());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rd);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-Y0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(sd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Q0());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Ff(n,t,e){return new ha(n,{minFilter:mi,generateMipmaps:t,type:Ge,colorSpace:_r,depthBuffer:e})}function ua(n,t,e){return new De({name:n,uniforms:t,vertexShader:se.cube_vert,fragmentShader:e,side:$e,blending:di,depthTest:!1,depthWrite:!1})}function $0(){return ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sd}u

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
	`)}function K0(){return ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rd}},`

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
	`)}function Q0(){return ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${q0}
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
	`)}function Of(){return ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bf(){return ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function j0(n){let t=new WeakMap,e=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Oo||d===Bo)if(t.has(f)){let p=t.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let M=new ha(p.height);return M.fromEquirectangularTexture(n,f),t.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Oo||d===Bo,M=d===ls||d===qs;if(p||M){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Ks(n)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let _=f.image;return p&&_&&_.height>0||M&&_&&l(_)?(i===null&&(i=new Ks(n)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,d){return d===Oo?f.mapping=ls:d===Bo&&(f.mapping=qs),f}function l(f){let d=0,p=6;for(let M=0;M<p;M++)f[M]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function tx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&ji("WebGLRenderer: "+i+" extension not supported."),s}}}function ex(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let M=r.get(p);M&&(t.remove(M),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(p){let M=p.attributes;for(let m in M)t.update(M[m],n.ARRAY_BUFFER)}function u(p){let M=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=M!==null?M.array.length:m.array.length/3-1,y=m.count>=65535?Tr:Er,v=new y(Math.ceil(_/3)*6,1),A=v.array;if(M!==null){let x=M.array;g=M.version;for(let b=0,L=0;b<_;b+=3){let P=x[b+0],U=x[b+1],H=x[b+2];A[L++]=P,A[L++]=U,A[L++]=U,A[L++]=H,A[L++]=H,A[L++]=P}}else{g=m.version;for(let x=0,b=0;x<_;x+=3){let L=x+0,P=x+1,U=x+2;A[b++]=L,A[b++]=P,A[b++]=P,A[b++]=U,A[b++]=U,A[b++]=L}}v.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,v)}function f(p){let M=r.get(p);if(M){let m=p.index;m!==null&&M.version<m.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let M=s[p].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function nx(n,t,e){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),e.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),e.update(f,i,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let M=0;for(let m=0;m<d;m++)M+=f[m];e.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ix(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function sx(n,t,e){let i=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;d===!0&&(y=1),p===!0&&(y=2),M===!0&&(y=3);let v=o.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*u),x=new Mr(w,v,A,u);x.type=vn,x.needsUpdate=!0;let b=y*4;for(let P=0;P<u;P++){let U=m[P],H=g[P],$=_[P],I=v*A*4*P;for(let X=0;X<U.count;X++){let K=X*b;d===!0&&(s.fromBufferAttribute(U,X),w[I+K+0]=s.x,w[I+K+1]=s.y,w[I+K+2]=s.z,w[I+K+3]=0),p===!0&&(s.fromBufferAttribute(H,X),w[I+K+4]=s.x,w[I+K+5]=s.y,w[I+K+6]=s.z,w[I+K+7]=0),M===!0&&(s.fromBufferAttribute($,X),w[I+K+8]=s.x,w[I+K+9]=s.y,w[I+K+10]=s.z,w[I+K+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new ct(v,A)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function rx(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var ax={[Jr]:"LINEAR_TONE_MAPPING",[$r]:"REINHARD_TONE_MAPPING",[Kr]:"CINEON_TONE_MAPPING",[os]:"ACES_FILMIC_TONE_MAPPING",[jr]:"AGX_TONE_MAPPING",[ta]:"NEUTRAL_TONE_MAPPING",[Qr]:"CUSTOM_TONE_MAPPING"};function ox(n,t,e,i,s,r){let a=new Fe(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new fe;h.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new kt([0,2,0,0,2,0],2));let u=new Vs({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Ct(h,u),d=new ss(-1,1,1,-1,0,1),p=null,M=null,m=!1,g,_=null,y=[],v=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let x=0;x<y.length;x++){let b=y[x];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){y=A,v=y.length>0&&y[0].isRenderPass===!0;let w=a.width,x=a.height;y.length>0&&o===null&&(o=new Fe(w,x,{type:Ge,depthBuffer:!1,stencilBuffer:!1}),l=new Fe(w,x,{type:Ge,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&y.some(L=>L.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new zn(w,x),r===!0&&(c.format=gi,c.type=cs)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let L=0;L<y.length;L++){let P=y[L];P.setSize&&P.setSize(w,x),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(A,w){if(m||A.toneMapping===Zn&&y.length===0)return!1;if(_=w,w!==null){let x=w.width,b=w.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return v===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=Zn,!0},this.hasRenderPass=function(){return v},this.end=function(A,w){A.toneMapping=g,m=!0;let x=a,b=o;for(let L=0;L<y.length;L++){let P=y[L];P.enabled!==!1&&(P.render(A,b,x,w),P.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(p!==A.outputColorSpace||M!==A.toneMapping){p=A.outputColorSpace,M=A.toneMapping,u.defines={},oe.getTransfer(p)===pe&&(u.defines.SRGB_TRANSFER="");let L=ax[M];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(_),A.render(f,d),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ad=new fn,od=new zn(1,1),ld=new Pr(1),cd=new Mr,hd=new fo,ud=new Cr,zf=[],kf=[],Hf=new Float32Array(16),Gf=new Float32Array(9),Vf=new Float32Array(4);function Qs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function We(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Al(n,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function lx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2fv(this.addr,t),We(e,t)}}function hx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;n.uniform3fv(this.addr,t),We(e,t)}}function ux(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4fv(this.addr,t),We(e,t)}}function fx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Vf.set(i),n.uniformMatrix2fv(this.addr,!1,Vf),We(e,i)}}function dx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Gf.set(i),n.uniformMatrix3fv(this.addr,!1,Gf),We(e,i)}}function px(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ve(e,i))return;Hf.set(i),n.uniformMatrix4fv(this.addr,!1,Hf),We(e,i)}}function mx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2iv(this.addr,t),We(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3iv(this.addr,t),We(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4iv(this.addr,t),We(e,t)}}function vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function yx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;n.uniform2uiv(this.addr,t),We(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;n.uniform3uiv(this.addr,t),We(e,t)}}function Sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;n.uniform4uiv(this.addr,t),We(e,t)}}function Rl(n){return n.version===0&&(n.compareFunction=eh,n.needsUpdate=!0),n}function bx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Rl(od):r=ad,e.setTexture2D(t||r,s)}function Ex(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hd,s)}function Tx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Rl(ld):r=ud,e.setTextureCube(t||r,s)}function wx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cd,s)}function Ax(n){switch(n){case 5126:return lx;case 35664:return cx;case 35665:return hx;case 35666:return ux;case 35674:return fx;case 35675:return dx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return yx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return wx}}function Rx(n,t){n.uniform1fv(this.addr,t)}function Cx(n,t){let e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function Px(n,t){let e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function Ix(n,t){let e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Lx(n,t){let e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Nx(n,t){let e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Dx(n,t){let e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ux(n,t){n.uniform1iv(this.addr,t)}function Fx(n,t){n.uniform2iv(this.addr,t)}function Ox(n,t){n.uniform3iv(this.addr,t)}function Bx(n,t){n.uniform4iv(this.addr,t)}function zx(n,t){n.uniform1uiv(this.addr,t)}function kx(n,t){n.uniform2uiv(this.addr,t)}function Hx(n,t){n.uniform3uiv(this.addr,t)}function Gx(n,t){n.uniform4uiv(this.addr,t)}function Vx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Rl(od):a=ad;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Wx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hd,r[a])}function Xx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Rl(ld):a=ud;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function qx(n,t,e){let i=this.cache,s=t.length,r=Al(e,s);Ve(i,r)||(n.uniform1iv(this.addr,r),We(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cd,r[a])}function Yx(n){switch(n){case 5126:return Rx;case 35664:return Cx;case 35665:return Px;case 35666:return Ix;case 35674:return Lx;case 35675:return Nx;case 35676:return Dx;case 5124:case 35670:return Ux;case 35667:case 35671:return Fx;case 35668:case 35672:return Ox;case 35669:case 35673:return Bx;case 5125:return zx;case 36294:return kx;case 36295:return Hx;case 36296:return Gx;case 35678:case 36198:case 36298:case 36306:case 35682:return Vx;case 35679:case 36299:case 36307:return Wx;case 35680:case 36300:case 36308:case 36293:return Xx;case 36289:case 36303:case 36311:case 36292:return qx}}var xh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ax(e.type)}},_h=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Yx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},mh=/(\w+)(\])?(\[|\.)?/g;function Wf(n,t){n.seq.push(t),n.map[t.id]=t}function Zx(n,t,e){let i=n.name,s=i.length;for(mh.lastIndex=0;;){let r=mh.exec(i),a=mh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Wf(e,c===void 0?new xh(o,n,t):new _h(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new vh(o),Wf(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Zx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Xf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Jx=37297,$x=0;function Kx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var qf=new $t;function Qx(n){oe._getMatrix(qf,oe.workingColorSpace,n);let t=`mat3( ${qf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case vr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Yf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Kx(n.getShaderSource(t),o)}else return r}function jx(n,t){let e=Qx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var t_={[Jr]:"Linear",[$r]:"Reinhard",[Kr]:"Cineon",[os]:"ACESFilmic",[jr]:"AgX",[ta]:"Neutral",[Qr]:"Custom"};function e_(n,t){let e=t_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Tl=new D;function n_(){oe.getLuminanceCoefficients(Tl);let n=Tl.x.toFixed(4),t=Tl.y.toFixed(4),e=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function s_(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function r_(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ca(n){return n!==""}function Zf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Jf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function yh(n){return n.replace(a_,o_)}function o_(n,t){let e=se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return yh(e)}var l_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(n){return n.replace(l_,c_)}function c_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var h_={[rs]:"SHADOWMAP_TYPE_PCF",[Xs]:"SHADOWMAP_TYPE_VSM"};function u_(n){return h_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var f_={[qs]:"ENVMAP_MODE_REFRACTION"};function d_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":f_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var p_={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[ff]:"ENVMAP_BLENDING_ADD"};function m_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":p_[n.combine]||"ENVMAP_BLENDING_NONE"}function g_(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=u_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=d_(e),u=m_(e),f=i_(e),d=s_(r),p=s.createProgram(),M,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ca).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(ca).join(`
`),m.length>0&&(m+=`
`)):(M=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?se.tonemapping_pars_fragment:"",e.toneMapping!==Zn?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,jx("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ca).join(`
`)),a=yh(a),a=Zf(a,e),a=Jf(a,e),o=yh(o),o=Zf(o,e),o=Jf(o,e),a=$f(a),o=$f(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",e.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+M+a,y=g+m+o,v=Xf(s,s.VERTEX_SHADER,_),A=Xf(s,s.FRAGMENT_SHADER,y);s.attachShader(p,v),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(P){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(p)||"",H=s.getShaderInfoLog(v)||"",$=s.getShaderInfoLog(A)||"",I=U.trim(),X=H.trim(),K=$.trim(),G=!0,rt=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,A);else{let Z=Yf(s,v,"vertex"),et=Yf(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+Z+`
`+et)}else I!==""?qt("WebGLProgram: Program Info Log:",I):(X===""||K==="")&&(rt=!1);rt&&(P.diagnostics={runnable:G,programLog:I,vertexShader:{log:X,prefix:M},fragmentShader:{log:K,prefix:m}})}s.deleteShader(v),s.deleteShader(A),x=new $s(s,p),b=r_(s,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let L=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,Jx)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$x++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=A,this}var x_=0,Mh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sh(t),e.set(t,i)),i}},Sh=class{constructor(t){this.id=x_++,this.code=t,this.usedTimes=0}};function __(n){return n===zi||n===aa||n===oa}function v_(n,t,e,i,s,r){let a=new Sr,o=new Mh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,L,P,U,H){let $=P.fog,I=U.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,K=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||X,K),rt=f[x.type],Z=i.precision;x.precision!==null&&(Z=i.getMaxPrecision(x.precision),Z!==x.precision&&qt("WebGLProgram.getParameters:",x.precision,"not supported, using",Z,"instead."));let et=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,at=et!==void 0?et.length:0,bt=0;I.morphAttributes.position!==void 0&&(bt=1),I.morphAttributes.normal!==void 0&&(bt=2),I.morphAttributes.color!==void 0&&(bt=3);let Lt,tt,_t,At;if(rt){let pt=$n[rt];Lt=pt.vertexShader,tt=pt.fragmentShader}else{Lt=x.vertexShader,tt=x.fragmentShader;let pt=o.getVertexShaderStage(x),_e=o.getFragmentShaderStage(x);o.update(x,pt,_e),_t=pt.id,At=_e.id}let Ht=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Ft=U.isInstancedMesh===!0,de=U.isBatchedMesh===!0,Ot=!!x.map,jt=!!x.matcap,ne=!!G,ot=ne&&G.isPMREMTexture===!0,gt=!!x.aoMap,mt=!!x.lightMap,Rt=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,Zt=!!x.displacementMap,Bt=!!x.emissiveMap,ie=!!x.metalnessMap,ae=!!x.roughnessMap,he=x.anisotropy>0,z=x.clearcoat>0,Te=x.diffuseRoughness>0,ee=x.dispersion>0,xe=x.retroreflectivity>0,xt=x.iridescence>0,Ce=x.sheen>0,Wt=x.transmission>0,Xt=he&&!!x.anisotropyMap,R=z&&!!x.clearcoatMap,S=z&&!!x.clearcoatNormalMap,q=z&&!!x.clearcoatRoughnessMap,ut=Te&&!!x.diffuseRoughnessMap,T=xt&&!!x.iridescenceMap,B=xt&&!!x.iridescenceThicknessMap,k=Ce&&!!x.sheenColorMap,N=Ce&&!!x.sheenRoughnessMap,F=!!x.specularMap,it=!!x.specularColorMap,C=!!x.specularIntensityMap,V=Wt&&!!x.transmissionMap,W=Wt&&!!x.thicknessMap,lt=!!x.gradientMap,Q=!!x.alphaMap,st=x.alphaTest>0,dt=!!x.alphaHash,Gt=!!x.extensions,ht=Zn;x.toneMapped&&(Ht===null||Ht.isXRRenderTarget===!0)&&(ht=n.toneMapping);let Vt=ot?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Jt={shaderID:rt,shaderType:x.type,shaderName:x.name,vertexShader:Lt,fragmentShader:tt,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Z,batching:de,batchingColor:de&&U._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&U.instanceColor!==null,instancingMorph:Ft&&U.morphTexture!==null,outputColorSpace:Ht===null?n.outputColorSpace:Ht.isXRRenderTarget===!0?Ht.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:jt,envMap:ne,envMapMode:ne&&G.mapping,envMapPMREM:ot,envMapMaxLod:ot?Vt.length-1:null,envMapSize:ot?Vt[0].width:null,aoMap:gt,lightMap:mt,bumpMap:Rt,normalMap:vt,displacementMap:Zt,emissiveMap:Bt,normalMapObjectSpace:vt&&x.normalMapType===mf,normalMapTangentSpace:vt&&x.normalMapType===bl,packedNormalMap:vt&&x.normalMapType===bl&&__(x.normalMap.format),metalnessMap:ie,roughnessMap:ae,anisotropy:he,anisotropyMap:Xt,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:S,clearcoatRoughnessMap:q,diffuseRoughness:Te,diffuseRoughnessMap:ut,dispersion:ee,retroreflection:xe,iridescence:xt,iridescenceMap:T,iridescenceThicknessMap:B,sheen:Ce,sheenColorMap:k,sheenRoughnessMap:N,specularMap:F,specularColorMap:it,specularIntensityMap:C,transmission:Wt,transmissionMap:V,thicknessMap:W,gradientMap:lt,opaque:x.transparent===!1&&x.blending===Bi&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:st,alphaHash:dt,combine:x.combine,mapUv:Ot&&d(x.map.channel),aoMapUv:gt&&d(x.aoMap.channel),lightMapUv:mt&&d(x.lightMap.channel),bumpMapUv:Rt&&d(x.bumpMap.channel),normalMapUv:vt&&d(x.normalMap.channel),displacementMapUv:Zt&&d(x.displacementMap.channel),emissiveMapUv:Bt&&d(x.emissiveMap.channel),metalnessMapUv:ie&&d(x.metalnessMap.channel),roughnessMapUv:ae&&d(x.roughnessMap.channel),anisotropyMapUv:Xt&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:S&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ut&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:T&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:B&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:k&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:N&&d(x.sheenRoughnessMap.channel),specularMapUv:F&&d(x.specularMap.channel),specularColorMapUv:it&&d(x.specularColorMap.channel),specularIntensityMapUv:C&&d(x.specularIntensityMap.channel),transmissionMapUv:V&&d(x.transmissionMap.channel),thicknessMapUv:W&&d(x.thicknessMap.channel),alphaMapUv:Q&&d(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(vt||he),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!I.attributes.uv&&(Ot||Q),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:St,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:bt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(pt=>pt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===pe,decodeVideoTextureEmissive:Bt&&x.emissiveMap.isVideoTexture===!0&&oe.getTransfer(x.emissiveMap.colorSpace)===pe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===xn,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Gt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&x.extensions.multiDraw===!0||de)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function M(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let b=f[x.type],L;if(b){let P=$n[b];L=_i.clone(P.uniforms)}else L=x.uniforms;return L}function y(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new g_(n,b,x,s),c.push(L),h.set(b,L)),L}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:_,acquireProgram:y,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:w}}function y_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function M_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Qf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jf(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,M,m,g){let _=n[t];return _===void 0?(_={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:m,group:g},n[t]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=p,_.materialVariant=a(f),_.groupOrder=M,_.renderOrder=f.renderOrder,_.z=m,_.group=g),t++,_}function l(f,d,p,M,m,g,_){_.reversedDepth===!0&&(m=-m);let y=o(f,d,p,M,m,g);p.transmission>0?i.push(y):p.transparent===!0?s.push(y):e.push(y)}function c(f,d,p,M,m,g){let _=o(f,d,p,M,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):e.unshift(_)}function h(f,d){e.length>1&&e.sort(f||M_),i.length>1&&i.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function u(){for(let f=t,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function S_(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new jf,n.set(i,[a])):s>=r.length?(a=new jf,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function b_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new D,color:new It};break;case"SpotLight":e={position:new D,direction:new D,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function E_(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var T_=0;function w_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function A_(n){let t=new b_,e=E_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ye,a=new ye;function o(c){let h=0,u=0,f=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let d=0,p=0,M=0,m=0,g=0,_=0,y=0,v=0,A=0,w=0,x=0,b=0,L=0,P=0;c.sort(w_);for(let H=0,$=c.length;H<$;H++){let I=c[H],X=I.color,K=I.intensity,G=I.distance,rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===zi?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*K,u+=X.g*K,f+=X.b*K;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],K);P++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,at=e.get(I);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[p]=at,i.sunShadowMap[p]=rt;let bt=et.getViewportCount();for(let Lt=0;Lt<bt;Lt++)i.sunShadowMatrix[M+Lt]=et.getMatrix(Lt),i.sunShadowCascade[M+Lt]=et._cascadeData[Lt];M+=bt,p++}i.sun[d]=Z,d++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,at=e.get(I);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.directionalShadow[m]=at,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=I.shadow.matrix,A++}i.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(X).multiplyScalar(K),Z.distance=G,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[_]=Z;let et=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,et.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[_]=et.matrix,I.castShadow){let at=e.get(I);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,i.spotShadow[_]=at,i.spotShadowMap[_]=rt,x++}_++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(X).multiplyScalar(K),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=Z,y++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let et=I.shadow,at=e.get(I);at.shadowIntensity=et.intensity,at.shadowBias=et.bias,at.shadowNormalBias=et.normalBias,at.shadowRadius=et.radius,at.shadowMapSize=et.mapSize,at.shadowCameraNear=et.camera.near,at.shadowCameraFar=et.camera.far,i.pointShadow[g]=at,i.pointShadowMap[g]=rt,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=Z,g++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(K),Z.groundColor.copy(I.groundColor).multiplyScalar(K),i.hemi[v]=Z,v++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let U=i.hash;(U.sunLength!==d||U.directionalLength!==m||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==y||U.hemiLength!==v||U.numSunShadows!==p||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==x||U.numSpotMaps!==b||U.numLightProbes!==P)&&(i.sun.length=d,i.directional.length=m,i.spot.length=_,i.rectArea.length=y,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,U.sunLength=d,U.directionalLength=m,U.pointLength=g,U.spotLength=_,U.rectAreaLength=y,U.hemiLength=v,U.numSunShadows=p,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=x,U.numSpotMaps=b,U.numLightProbes=P,i.version=T_++)}function l(c,h){let u=0,f=0,d=0,p=0,M=0,m=0,g=h.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let A=i.sun[u];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),u++}else if(v.isDirectionalLight){let A=i.directional[f];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),f++}else if(v.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(v.isPointLight){let A=i.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function td(n){let t=new A_(n),e=[],i=[],s=[];function r(u){h.camera=u,e.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):e.push(u)}function o(u){i.push(u)}function l(){t.setup(e),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function R_(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new td(n),t.set(s,[o])):r>=a.length?(o=new td(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var C_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P_=`uniform sampler2D shadow_pass;
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
}`,I_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],L_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ed=new ye,la=new D,gh=new D;function N_(n,t,e){let i=new Pi,s=new ct,r=new ct,a=new Ie,o=new So,l=new bo,c={},h=e.maxTextureSize,u={[Oi]:$e,[$e]:Oi,[xn]:xn},f=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:C_,fragmentShader:P_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new fe;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ct(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let g=this.type;this.render=function(w,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Xu&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let L=n.getRenderTarget(),P=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),H=n.state;H.setBlending(di),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let $=g!==this.type;$&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=w.length;I<X;I++){let K=w[I],G=K.shadow;if(G===void 0){qt("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let rt=G.getFrameExtents();s.multiply(rt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,G.mapSize.y=r.y));let Z=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=Z,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Xs){if(K.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Fe(s.x,s.y,{format:zi,type:Ge,minFilter:un,magFilter:un,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new zn(s.x,s.y,vn),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=hi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ze,G.map.depthTexture.magFilter=Ze}else K.isPointLight?(G.map=new ha(s.x),G.map.depthTexture=new Pr(s.x,kn)):(G.map=new Fe(s.x,s.y),G.map.depthTexture=new zn(s.x,s.y,kn)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=hi,this.type===rs?(G.map.depthTexture.compareFunction=Z?th:jc,G.map.depthTexture.minFilter=un,G.map.depthTexture.magFilter=un):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ze,G.map.depthTexture.magFilter=Ze);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let et=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,b);let at=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let bt=0;bt<et;bt++){let Lt=G.getCamera(bt);if(K.isPointLight){let tt=G.camera,_t=G.matrix,At=K.distance||tt.far;At!==tt.far&&(tt.far=At,tt.updateProjectionMatrix()),la.setFromMatrixPosition(K.matrixWorld),tt.position.copy(la),gh.copy(tt.position),gh.add(I_[bt]),tt.up.copy(L_[bt]),tt.lookAt(gh),tt.updateMatrixWorld(),_t.makeTranslation(-la.x,-la.y,-la.z),ed.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ed,tt.coordinateSystem,tt.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,bt),n.clear();else{bt===0&&(n.setRenderTarget(G.map),n.clear());let tt=G.getViewport(bt);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),H.viewport(a)}i=G.getFrustum(bt),v(x,b,Lt,K,at,this.type)}G.isPointLightShadow!==!0&&this.type===Xs&&_(G,b),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,P,U)};function _(w,x){let b=t.update(M);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Fe(s.x,s.y,{format:zi,type:Ge}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(x,null,b,f,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(x,null,b,d,M,null)}function y(w,x,b,L){let P=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=P.uuid,$=x.uuid,I=c[H];I===void 0&&(I={},c[H]=I);let X=I[$];X===void 0&&(X=P.clone(),I[$]=X,x.addEventListener("dispose",A)),P=X}if(P.visible=x.visible,P.wireframe=x.wireframe,L===Xs?P.side=x.shadowSide!==null?x.shadowSide:x.side:P.side=x.shadowSide!==null?x.shadowSide:u[x.side],P.alphaMap=x.alphaMap,P.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,P.map=x.map,P.clipShadows=x.clipShadows,P.clippingPlanes=x.clippingPlanes,P.clipIntersection=x.clipIntersection,P.displacementMap=x.displacementMap,P.displacementScale=x.displacementScale,P.displacementBias=x.displacementBias,P.wireframeLinewidth=x.wireframeLinewidth,P.linewidth=x.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=b}return P}function v(w,x,b,L,P,U){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Xs)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),X=w.material;if(Array.isArray(X)){let K=I.groups;for(let G=0,rt=K.length;G<rt;G++){let Z=K[G],et=X[Z.materialIndex];if(et&&et.visible){let at=y(w,et,L,U);w.onBeforeShadow(n,w,x,b,I,at,Z),n.renderBufferDirect(b,null,I,at,w,Z),w.onAfterShadow(n,w,x,b,I,at,Z)}}}else if(X.visible){let K=y(w,X,L,U);w.onBeforeShadow(n,w,x,b,I,K,null),n.renderBufferDirect(b,null,I,K,w,null),w.onAfterShadow(n,w,x,b,I,K,null)}}let $=w.children;for(let I=0,X=$.length;I<X;I++)v($[I],x,b,L,P,U)}function A(w){w.target.removeEventListener("dispose",A);for(let b in c){let L=c[b],P=w.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}function D_(n,t){function e(){let C=!1,V=new Ie,W=null,lt=new Ie(0,0,0,0);return{setMask:function(Q){W!==Q&&!C&&(n.colorMask(Q,Q,Q,Q),W=Q)},setLocked:function(Q){C=Q},setClear:function(Q,st,dt,Gt,ht){ht===!0&&(Q*=Gt,st*=Gt,dt*=Gt),V.set(Q,st,dt,Gt),lt.equals(V)===!1&&(n.clearColor(Q,st,dt,Gt),lt.copy(V))},reset:function(){C=!1,W=null,lt.set(-1,0,0,0)}}}function i(){let C=!1,V=!1,W=null,lt=null,Q=null;return{setReversed:function(st){if(V!==st){let dt=t.get("EXT_clip_control");st?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),V=st;let Gt=Q;Q=null,this.setClear(Gt)}},getReversed:function(){return V},setTest:function(st){st?St(n.DEPTH_TEST):Ft(n.DEPTH_TEST)},setMask:function(st){W!==st&&!C&&(n.depthMask(st),W=st)},setFunc:function(st){if(V&&(st=wf[st]),lt!==st){switch(st){case to:n.depthFunc(n.NEVER);break;case eo:n.depthFunc(n.ALWAYS);break;case no:n.depthFunc(n.LESS);break;case Is:n.depthFunc(n.LEQUAL);break;case io:n.depthFunc(n.EQUAL);break;case so:n.depthFunc(n.GEQUAL);break;case ro:n.depthFunc(n.GREATER);break;case ao:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}lt=st}},setLocked:function(st){C=st},setClear:function(st){Q!==st&&(Q=st,V&&(st=1-st),n.clearDepth(st))},reset:function(){C=!1,W=null,lt=null,Q=null,V=!1}}}function s(){let C=!1,V=null,W=null,lt=null,Q=null,st=null,dt=null,Gt=null,ht=null;return{setTest:function(Vt){C||(Vt?St(n.STENCIL_TEST):Ft(n.STENCIL_TEST))},setMask:function(Vt){V!==Vt&&!C&&(n.stencilMask(Vt),V=Vt)},setFunc:function(Vt,Jt,pt){(W!==Vt||lt!==Jt||Q!==pt)&&(n.stencilFunc(Vt,Jt,pt),W=Vt,lt=Jt,Q=pt)},setOp:function(Vt,Jt,pt){(st!==Vt||dt!==Jt||Gt!==pt)&&(n.stencilOp(Vt,Jt,pt),st=Vt,dt=Jt,Gt=pt)},setLocked:function(Vt){C=Vt},setClear:function(Vt){ht!==Vt&&(n.clearStencil(Vt),ht=Vt)},reset:function(){C=!1,V=null,W=null,lt=null,Q=null,st=null,dt=null,Gt=null,ht=null}}}let r=new e,a=new i,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],M=null,m=!1,g=null,_=null,y=null,v=null,A=null,w=null,x=null,b=new It(0,0,0),L=0,P=!1,U=null,H=null,$=null,I=null,X=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,rt=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=rt>=1):Z.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=rt>=2);let et=null,at={},bt=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),tt=new Ie().fromArray(bt),_t=new Ie().fromArray(Lt);function At(C,V,W,lt){let Q=new Uint8Array(4),st=n.createTexture();n.bindTexture(C,st),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<W;dt++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(V,0,n.RGBA,1,1,lt,0,n.RGBA,n.UNSIGNED_BYTE,Q):n.texImage2D(V+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Q);return st}let Ht={};Ht[n.TEXTURE_2D]=At(n.TEXTURE_2D,n.TEXTURE_2D,1),Ht[n.TEXTURE_CUBE_MAP]=At(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ht[n.TEXTURE_2D_ARRAY]=At(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ht[n.TEXTURE_3D]=At(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),St(n.DEPTH_TEST),a.setFunc(Is),Rt(!1),vt(kc),St(n.CULL_FACE),gt(di);function St(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function Ft(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function de(C,V){return f[C]!==V?(n.bindFramebuffer(C,V),f[C]=V,C===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=V),C===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=V),!0):!1}function Ot(C,V){let W=p,lt=!1;if(C){W=d.get(V),W===void 0&&(W=[],d.set(V,W));let Q=C.textures;if(W.length!==Q.length||W[0]!==n.COLOR_ATTACHMENT0){for(let st=0,dt=Q.length;st<dt;st++)W[st]=n.COLOR_ATTACHMENT0+st;W.length=Q.length,lt=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,lt=!0);lt&&n.drawBuffers(W)}function jt(C){return M!==C?(n.useProgram(C),M=C,!0):!1}let ne={[as]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[Zu]:n.FUNC_REVERSE_SUBTRACT};ne[Ju]=n.MIN,ne[$u]=n.MAX;let ot={[Ku]:n.ZERO,[Qu]:n.ONE,[ju]:n.SRC_COLOR,[Vc]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[ef]:n.DST_ALPHA,[tf]:n.ONE_MINUS_SRC_COLOR,[Wc]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function gt(C,V,W,lt,Q,st,dt,Gt,ht,Vt){if(C===di){m===!0&&(Ft(n.BLEND),m=!1);return}if(m===!1&&(St(n.BLEND),m=!0),C!==qu){if(C!==g||Vt!==P){if((_!==as||A!==as)&&(n.blendEquation(n.FUNC_ADD),_=as,A=as),Vt)switch(C){case Bi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pi:n.blendFunc(n.ONE,n.ONE);break;case Hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",C);break}else switch(C){case Bi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case pi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Hc:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gc:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",C);break}y=null,v=null,w=null,x=null,b.set(0,0,0),L=0,g=C,P=Vt}return}Q=Q||V,st=st||W,dt=dt||lt,(V!==_||Q!==A)&&(n.blendEquationSeparate(ne[V],ne[Q]),_=V,A=Q),(W!==y||lt!==v||st!==w||dt!==x)&&(n.blendFuncSeparate(ot[W],ot[lt],ot[st],ot[dt]),y=W,v=lt,w=st,x=dt),(Gt.equals(b)===!1||ht!==L)&&(n.blendColor(Gt.r,Gt.g,Gt.b,ht),b.copy(Gt),L=ht),g=C,P=!1}function mt(C,V){C.side===xn?Ft(n.CULL_FACE):St(n.CULL_FACE);let W=C.side===$e;V&&(W=!W),Rt(W),C.blending===Bi&&C.transparent===!1?gt(di):gt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let lt=C.stencilWrite;o.setTest(lt),lt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Bt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?St(n.SAMPLE_ALPHA_TO_COVERAGE):Ft(n.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(C){U!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),U=C)}function vt(C){C!==Vu?(St(n.CULL_FACE),C!==H&&(C===kc?n.cullFace(n.BACK):C===Wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ft(n.CULL_FACE),H=C}function Zt(C){C!==$&&(G&&n.lineWidth(C),$=C)}function Bt(C,V,W){C?(St(n.POLYGON_OFFSET_FILL),(I!==V||X!==W)&&(I=V,X=W,a.getReversed()&&(V=-V,W=-W),n.polygonOffset(V,W))):Ft(n.POLYGON_OFFSET_FILL)}function ie(C){C?St(n.SCISSOR_TEST):Ft(n.SCISSOR_TEST)}function ae(C){C===void 0&&(C=n.TEXTURE0+K-1),et!==C&&(n.activeTexture(C),et=C)}function he(C,V,W){W===void 0&&(et===null?W=n.TEXTURE0+K-1:W=et);let lt=at[W];lt===void 0&&(lt={type:void 0,texture:void 0},at[W]=lt),(lt.type!==C||lt.texture!==V)&&(et!==W&&(n.activeTexture(W),et=W),n.bindTexture(C,V||Ht[C]),lt.type=C,lt.texture=V)}function z(){let C=at[et];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Te(){try{n.compressedTexImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ee(){try{n.compressedTexImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function xe(){try{n.texSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function xt(){try{n.texSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Ce(){try{n.compressedTexSubImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Wt(){try{n.compressedTexSubImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function Xt(){try{n.texStorage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function R(){try{n.texStorage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function S(){try{n.texImage2D(...arguments)}catch(C){Yt("WebGLState:",C)}}function q(){try{n.texImage3D(...arguments)}catch(C){Yt("WebGLState:",C)}}function ut(C){return u[C]!==void 0?u[C]:n.getParameter(C)}function T(C,V){u[C]!==V&&(n.pixelStorei(C,V),u[C]=V)}function B(C){tt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),tt.copy(C))}function k(C){_t.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),_t.copy(C))}function N(C,V){let W=c.get(V);W===void 0&&(W=new WeakMap,c.set(V,W));let lt=W.get(C);lt===void 0&&(lt=n.getUniformBlockIndex(V,C.name),n.uniformBlockBinding(V,lt,lt),W.set(C,lt))}function F(C,V,W){let Q=c.get(V).get(C);l[Q]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,Q,W),l[Q]=W)}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},et=null,at={},f={},l={},d=new WeakMap,p=[],M=null,m=!1,g=null,_=null,y=null,v=null,A=null,w=null,x=null,b=new It(0,0,0),L=0,P=!1,U=null,H=null,$=null,I=null,X=null,tt.set(0,0,n.canvas.width,n.canvas.height),_t.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:St,disable:Ft,bindFramebuffer:de,drawBuffers:Ot,useProgram:jt,setBlending:gt,setMaterial:mt,setFlipSided:Rt,setCullFace:vt,setLineWidth:Zt,setPolygonOffset:Bt,setScissorTest:ie,activeTexture:ae,bindTexture:he,unbindTexture:z,compressedTexImage2D:Te,compressedTexImage3D:ee,texImage2D:S,texImage3D:q,pixelStorei:T,getParameter:ut,updateUBOMapping:N,uniformBlockBinding:F,texStorage2D:Xt,texStorage3D:R,texSubImage2D:xe,texSubImage3D:xt,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Wt,scissor:B,viewport:k,reset:it}}function U_(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,M=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):yr("canvas")}function _(R,S,q){let ut=1,T=Xt(R);if((T.width>q||T.height>q)&&(ut=q/Math.max(T.width,T.height)),ut<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let B=Math.floor(ut*T.width),k=Math.floor(ut*T.height);f===void 0&&(f=g(B,k));let N=S?g(B,k):f;return N.width=B,N.height=k,N.getContext("2d").drawImage(R,0,0,B,k),qt("WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+B+"x"+k+")."),N}else return"data"in R&&qt("WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),R;return R}function y(R){return R.generateMipmaps}function v(R){n.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(R,S,q,ut,T,B=!1){if(R!==null){if(n[R]!==void 0)return n[R];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let k;ut&&(k=t.get("EXT_texture_norm16"),k||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=S;if(S===n.RED&&(q===n.FLOAT&&(N=n.R32F),q===n.HALF_FLOAT&&(N=n.R16F),q===n.UNSIGNED_BYTE&&(N=n.R8),q===n.UNSIGNED_SHORT&&k&&(N=k.R16_EXT),q===n.SHORT&&k&&(N=k.R16_SNORM_EXT)),S===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(N=n.R8UI),q===n.UNSIGNED_SHORT&&(N=n.R16UI),q===n.UNSIGNED_INT&&(N=n.R32UI),q===n.BYTE&&(N=n.R8I),q===n.SHORT&&(N=n.R16I),q===n.INT&&(N=n.R32I)),S===n.RG&&(q===n.FLOAT&&(N=n.RG32F),q===n.HALF_FLOAT&&(N=n.RG16F),q===n.UNSIGNED_BYTE&&(N=n.RG8),q===n.UNSIGNED_SHORT&&k&&(N=k.RG16_EXT),q===n.SHORT&&k&&(N=k.RG16_SNORM_EXT)),S===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(N=n.RG8UI),q===n.UNSIGNED_SHORT&&(N=n.RG16UI),q===n.UNSIGNED_INT&&(N=n.RG32UI),q===n.BYTE&&(N=n.RG8I),q===n.SHORT&&(N=n.RG16I),q===n.INT&&(N=n.RG32I)),S===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(N=n.RGB8UI),q===n.UNSIGNED_SHORT&&(N=n.RGB16UI),q===n.UNSIGNED_INT&&(N=n.RGB32UI),q===n.BYTE&&(N=n.RGB8I),q===n.SHORT&&(N=n.RGB16I),q===n.INT&&(N=n.RGB32I)),S===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(N=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(N=n.RGBA16UI),q===n.UNSIGNED_INT&&(N=n.RGBA32UI),q===n.BYTE&&(N=n.RGBA8I),q===n.SHORT&&(N=n.RGBA16I),q===n.INT&&(N=n.RGBA32I)),S===n.RGB&&(q===n.UNSIGNED_SHORT&&k&&(N=k.RGB16_EXT),q===n.SHORT&&k&&(N=k.RGB16_SNORM_EXT),q===n.UNSIGNED_INT_5_9_9_9_REV&&(N=n.RGB9_E5),q===n.UNSIGNED_INT_10F_11F_11F_REV&&(N=n.R11F_G11F_B10F)),S===n.RGBA){let F=B?vr:oe.getTransfer(T);q===n.FLOAT&&(N=n.RGBA32F),q===n.HALF_FLOAT&&(N=n.RGBA16F),q===n.UNSIGNED_BYTE&&(N=F===pe?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT&&k&&(N=k.RGBA16_EXT),q===n.SHORT&&k&&(N=k.RGBA16_SNORM_EXT),q===n.UNSIGNED_SHORT_4_4_4_4&&(N=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(N=n.RGB5_A1)}return(N===n.R16F||N===n.R32F||N===n.RG16F||N===n.RG32F||N===n.RGBA16F||N===n.RGBA32F)&&t.get("EXT_color_buffer_float"),N}function x(R,S){let q;return R?S===null||S===kn||S===cs?q=n.DEPTH24_STENCIL8:S===vn?q=n.DEPTH32F_STENCIL8:S===Ys&&(q=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===kn||S===cs?q=n.DEPTH_COMPONENT24:S===vn?q=n.DEPTH_COMPONENT32F:S===Ys&&(q=n.DEPTH_COMPONENT16),q}function b(R,S){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ze&&R.minFilter!==un?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){let S=new WeakRef(R);i.get(R).__ref=S,p.add(S),M.register(R,S,S)}function P(R){let S=i.get(R).__ref;S!==void 0&&(p.delete(S),M.unregister(S))}function U(R){$(R.target)}function H(R){I(R.target)}function $(R){R.removeEventListener("dispose",U),P(R),K(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function I(R){R.removeEventListener("dispose",H),P(R),rt(R)}function X(){for(let R of p){let S=R.deref();S!==void 0&&(S.isRenderTarget===!0?I(S):$(S))}p.clear(),u.clear()}function K(R){let S=i.get(R);if(S.__webglInit===void 0)return;let q=R.source,ut=d.get(q);if(ut){let T=ut[S.__cacheKey];T.usedTimes--,T.usedTimes===0&&G(R),Object.keys(ut).length===0&&d.delete(q)}i.remove(R)}function G(R){let S=i.get(R);n.deleteTexture(S.__webglTexture);let q=R.source,ut=d.get(q);delete ut[S.__cacheKey],a.memory.textures--}function rt(R){let S=i.get(R);S.__depthDisposeCallback&&S.__depthDisposeCallback();let q=R.depthTexture;if(q&&q.renderTarget===R&&$(q),R.isWebGLCubeRenderTarget)for(let T=0;T<6;T++){if(Array.isArray(S.__webglFramebuffer[T]))for(let B=0;B<S.__webglFramebuffer[T].length;B++)n.deleteFramebuffer(S.__webglFramebuffer[T][B]);else n.deleteFramebuffer(S.__webglFramebuffer[T]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[T])}else{if(Array.isArray(S.__webglFramebuffer))for(let T=0;T<S.__webglFramebuffer.length;T++)n.deleteFramebuffer(S.__webglFramebuffer[T]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let T=0;T<S.__webglColorRenderbuffer.length;T++)S.__webglColorRenderbuffer[T]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[T]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let ut=R.textures;for(let T=0,B=ut.length;T<B;T++){let k=i.get(ut[T]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),a.memory.textures--),i.remove(ut[T])}i.remove(R)}let Z=0;function et(){Z=0}function at(){return Z}function bt(R){Z=R}function Lt(){let R=Z;return R>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Z+=1,R}function tt(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.mipmapsAutoUpdate),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function _t(R,S){let q=i.get(R);if(R.isVideoTexture&&Ce(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&q.__version!==R.version){let ut=R.image;if(ut===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{mt(q,R,S);return}}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+S)}function At(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){mt(q,R,S);return}else R.isExternalTexture&&(q.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+S)}function Ht(R,S){let q=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){mt(q,R,S);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+S)}function St(R,S){let q=i.get(R);if(R.version>0&&q.__version!==R.version){Rt(q,R,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+S)}let Ft={[ci]:n.REPEAT,[Xn]:n.CLAMP_TO_EDGE,[oo]:n.MIRRORED_REPEAT},de={[Ze]:n.NEAREST,[df]:n.NEAREST_MIPMAP_NEAREST,[ea]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[zo]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Ot={[xf]:n.NEVER,[eh]:n.ALWAYS,[_f]:n.LESS,[jc]:n.LEQUAL,[vf]:n.EQUAL,[th]:n.GEQUAL,[yf]:n.GREATER,[Mf]:n.NOTEQUAL};function jt(R,S){if(S.type===vn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===un||S.magFilter===zo||S.magFilter===ea||S.magFilter===mi||S.minFilter===un||S.minFilter===zo||S.minFilter===ea||S.minFilter===mi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Ft[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Ft[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Ft[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,de[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ot[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ze||S.minFilter!==ea&&S.minFilter!==mi||S.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ne(R,S){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",U),L(S));let ut=S.source,T=d.get(ut);T===void 0&&(T={},d.set(ut,T));let B=tt(S);if(B!==R.__cacheKey){T[B]===void 0&&(T[B]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),T[B].usedTimes++;let k=T[R.__cacheKey];k!==void 0&&(T[R.__cacheKey].usedTimes--,k.usedTimes===0&&G(S)),R.__cacheKey=B,R.__webglTexture=T[B].texture}return q}function ot(R,S,q){return Math.floor(Math.floor(R/q)/S)}function gt(R,S,q,ut){let B=R.updateRanges;if(B.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,q,ut,S.data);else{B.sort((C,V)=>C.start-V.start);let k=0;for(let C=1;C<B.length;C++){let V=B[k],W=B[C],lt=V.start+V.count,Q=ot(W.start,S.width,4),st=ot(V.start,S.width,4);W.start<=lt+1&&Q===st&&ot(W.start+W.count-1,S.width,4)===Q?V.count=Math.max(V.count,W.start+W.count-V.start):(++k,B[k]=W)}B.length=k+1;let N=e.getParameter(n.UNPACK_ROW_LENGTH),F=e.getParameter(n.UNPACK_SKIP_PIXELS),it=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let C=0,V=B.length;C<V;C++){let W=B[C],lt=Math.floor(W.start/4),Q=Math.ceil(W.count/4),st=lt%S.width,dt=Math.floor(lt/S.width),Gt=Q,ht=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt),e.texSubImage2D(n.TEXTURE_2D,0,st,dt,Gt,ht,q,ut,S.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,N),e.pixelStorei(n.UNPACK_SKIP_PIXELS,F),e.pixelStorei(n.UNPACK_SKIP_ROWS,it)}}function mt(R,S,q){let ut=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ut=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ut=n.TEXTURE_3D);let T=ne(R,S),B=S.source;e.bindTexture(ut,R.__webglTexture,n.TEXTURE0+q);let k=i.get(B);if(B.version!==k.__version||T===!0){if(e.activeTexture(n.TEXTURE0+q),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ht=oe.getPrimaries(oe.workingColorSpace),Vt=S.colorSpace===xi?null:oe.getPrimaries(S.colorSpace),Jt=S.colorSpace===xi||ht===Vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment);let F=_(S.image,!1,s.maxTextureSize);F=Wt(S,F);let it=r.convert(S.format,S.colorSpace),C=r.convert(S.type),V=w(S.internalFormat,it,C,S.normalized,S.colorSpace,S.isVideoTexture);jt(ut,S);let W,lt=S.mipmaps,Q=S.isVideoTexture!==!0,st=k.__version===void 0||T===!0,dt=B.dataReady,Gt=b(S,F);if(S.isDepthTexture)V=x(S.format===gi,S.type),st&&(Q?e.texStorage2D(n.TEXTURE_2D,1,V,F.width,F.height):e.texImage2D(n.TEXTURE_2D,0,V,F.width,F.height,0,it,C,null));else if(S.isDataTexture)if(lt.length>0){Q&&st&&e.texStorage2D(n.TEXTURE_2D,Gt,V,lt[0].width,lt[0].height);for(let ht=0,Vt=lt.length;ht<Vt;ht++)W=lt[ht],Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,W.width,W.height,it,C,W.data):e.texImage2D(n.TEXTURE_2D,ht,V,W.width,W.height,0,it,C,W.data);S.generateMipmaps=!1}else Q?(st&&e.texStorage2D(n.TEXTURE_2D,Gt,V,F.width,F.height),dt&&gt(S,F,it,C)):e.texImage2D(n.TEXTURE_2D,0,V,F.width,F.height,0,it,C,F.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Q&&st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,V,lt[0].width,lt[0].height,F.depth);for(let ht=0,Vt=lt.length;ht<Vt;ht++)if(W=lt[ht],S.format!==Hn)if(it!==null)if(Q){if(dt)if(S.layerUpdates.size>0){let Jt=ch(W.width,W.height,S.format,S.type);for(let pt of S.layerUpdates){let _e=W.data.subarray(pt*Jt/W.data.BYTES_PER_ELEMENT,(pt+1)*Jt/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,pt,W.width,W.height,1,it,_e)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,W.width,W.height,F.depth,it,W.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ht,V,W.width,W.height,F.depth,0,W.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?dt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ht,0,0,0,W.width,W.height,F.depth,it,C,W.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ht,V,W.width,W.height,F.depth,0,it,C,W.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Q&&st&&e.texStorage2D(n.TEXTURE_2D,Gt,V,lt[0].width,lt[0].height);for(let ht=0,Vt=lt.length;ht<Vt;ht++)W=lt[ht],S.format!==Hn?it!==null?Q?dt&&e.compressedTexSubImage2D(n.TEXTURE_2D,ht,0,0,W.width,W.height,it,W.data):e.compressedTexImage2D(n.TEXTURE_2D,ht,V,W.width,W.height,0,W.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,W.width,W.height,it,C,W.data):e.texImage2D(n.TEXTURE_2D,ht,V,W.width,W.height,0,it,C,W.data)}else if(S.isDataArrayTexture)if(Q){if(st&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Gt,V,F.width,F.height,F.depth),dt)if(S.layerUpdates.size>0){let ht=ch(F.width,F.height,S.format,S.type);for(let Vt of S.layerUpdates){let Jt=F.data.subarray(Vt*ht/F.data.BYTES_PER_ELEMENT,(Vt+1)*ht/F.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Vt,F.width,F.height,1,it,C,Jt)}S.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,F.width,F.height,F.depth,it,C,F.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,V,F.width,F.height,F.depth,0,it,C,F.data);else if(S.isData3DTexture)Q?(st&&e.texStorage3D(n.TEXTURE_3D,Gt,V,F.width,F.height,F.depth),dt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,F.width,F.height,F.depth,it,C,F.data)):e.texImage3D(n.TEXTURE_3D,0,V,F.width,F.height,F.depth,0,it,C,F.data);else if(S.isFramebufferTexture){if(st)if(Q)e.texStorage2D(n.TEXTURE_2D,Gt,V,F.width,F.height);else{let ht=F.width,Vt=F.height;for(let Jt=0;Jt<Gt;Jt++)e.texImage2D(n.TEXTURE_2D,Jt,V,ht,Vt,0,it,C,null),ht>>=1,Vt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in n){let ht=n.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),F.parentNode!==ht){ht.appendChild(F),u.add(S),ht.onpaint=Vt=>{let Jt=Vt.changedElements;for(let pt of u)Jt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,F);else{let Jt=n.RGBA,pt=n.RGBA,_e=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Jt,pt,_e,F)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(lt.length>0){if(Q&&st){let ht=Xt(lt[0]);e.texStorage2D(n.TEXTURE_2D,Gt,V,ht.width,ht.height)}for(let ht=0,Vt=lt.length;ht<Vt;ht++)W=lt[ht],Q?dt&&e.texSubImage2D(n.TEXTURE_2D,ht,0,0,it,C,W):e.texImage2D(n.TEXTURE_2D,ht,V,it,C,W);S.generateMipmaps=!1}else if(Q){if(st){let ht=Xt(F);e.texStorage2D(n.TEXTURE_2D,Gt,V,ht.width,ht.height)}dt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it,C,F)}else e.texImage2D(n.TEXTURE_2D,0,V,it,C,F);y(S)&&S.mipmapsAutoUpdate===!0&&v(ut),k.__version=B.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Rt(R,S,q){if(S.image.length!==6)return;let ut=ne(R,S),T=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+q);let B=i.get(T);if(T.version!==B.__version||ut===!0){e.activeTexture(n.TEXTURE0+q);let k=oe.getPrimaries(oe.workingColorSpace),N=S.colorSpace===xi?null:oe.getPrimaries(S.colorSpace),F=S.colorSpace===xi||k===N?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,F);let it=S.isCompressedTexture||S.image[0].isCompressedTexture,C=S.image[0]&&S.image[0].isDataTexture,V=[];for(let pt=0;pt<6;pt++)!it&&!C?V[pt]=_(S.image[pt],!0,s.maxCubemapSize):V[pt]=C?S.image[pt].image:S.image[pt],V[pt]=Wt(S,V[pt]);let W=V[0],lt=r.convert(S.format,S.colorSpace),Q=r.convert(S.type),st=w(S.internalFormat,lt,Q,S.normalized,S.colorSpace),dt=S.isVideoTexture!==!0,Gt=B.__version===void 0||ut===!0,ht=T.dataReady,Vt=b(S,W);jt(n.TEXTURE_CUBE_MAP,S);let Jt;if(S.isDepthTexture){if(st=x(S.format===gi,S.type),Gt)if(dt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,st,W.width,W.height);else for(let pt=0;pt<6;pt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,W.width,W.height,0,lt,Q,null)}else if(it){dt&&Gt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,st,W.width,W.height);for(let pt=0;pt<6;pt++){Jt=V[pt].mipmaps;for(let _e=0;_e<Jt.length;_e++){let Ue=Jt[_e];S.format!==Hn?lt!==null?dt?ht&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,0,0,Ue.width,Ue.height,lt,Ue.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,st,Ue.width,Ue.height,0,Ue.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,0,0,Ue.width,Ue.height,lt,Q,Ue.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e,st,Ue.width,Ue.height,0,lt,Q,Ue.data)}}}else{if(Jt=S.mipmaps,dt&&Gt){Jt.length>0&&Vt++;let pt=Xt(V[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Vt,st,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(C){dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,V[pt].width,V[pt].height,lt,Q,V[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,V[pt].width,V[pt].height,0,lt,Q,V[pt].data);for(let _e=0;_e<Jt.length;_e++){let In=Jt[_e].image[pt].image;dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,0,0,In.width,In.height,lt,Q,In.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,st,In.width,In.height,0,lt,Q,In.data)}}else{dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,lt,Q,V[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,st,lt,Q,V[pt]);for(let _e=0;_e<Jt.length;_e++){let Ue=Jt[_e];dt?ht&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,0,0,lt,Q,Ue.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,_e+1,st,lt,Q,Ue.image[pt])}}}y(S)&&S.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),B.__version=T.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function vt(R,S,q,ut,T,B){let k=r.convert(q.format,q.colorSpace),N=r.convert(q.type),F=w(q.internalFormat,k,N,q.normalized,q.colorSpace),it=i.get(S),C=i.get(q);if(C.__renderTarget=S,!it.__hasExternalTextures){let V=Math.max(1,S.width>>B),W=Math.max(1,S.height>>B);T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?e.texImage3D(T,B,F,V,W,S.depth,0,k,N,null):e.texImage2D(T,B,F,V,W,0,k,N,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ut,T,C.__webglTexture,0,xe(S)):(T===n.TEXTURE_2D||T>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&T<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ut,T,C.__webglTexture,B),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(R,S,q){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){let ut=S.depthTexture,T=ut&&ut.isDepthTexture?ut.type:null,B=x(S.stencilBuffer,T),k=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(S),B,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(S),B,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,B,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,R)}else{let ut=S.textures;for(let T=0;T<ut.length;T++){let B=ut[T],k=r.convert(B.format,B.colorSpace),N=r.convert(B.type),F=w(B.internalFormat,k,N,B.normalized,B.colorSpace);xt(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe(S),F,S.width,S.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe(S),F,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,F,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(R,S,q){let ut=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let T=i.get(S.depthTexture);T.__renderTarget=S;let B=ut?S.depthTexture.image[0]:S.depthTexture.image;(!T.__webglTexture||B.width!==S.width||B.height!==S.height)&&(B.width=S.width,B.height=S.height,S.depthTexture.needsUpdate=!0),ut?St(S.depthTexture,0):_t(S.depthTexture,0);let k=T.__webglTexture,N=xe(S),F=ut?n.TEXTURE_CUBE_MAP_POSITIVE_X+q:n.TEXTURE_2D,it=S.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(S.depthTexture.format===hi)xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,F,k,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,it,F,k,0);else if(S.depthTexture.format===gi)xt(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,F,k,0,N):n.framebufferTexture2D(n.FRAMEBUFFER,it,F,k,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let S=i.get(R),q=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let ut=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ut){let T=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ut.removeEventListener("dispose",T)};ut.addEventListener("dispose",T),S.__depthDisposeCallback=T}S.__boundDepthTexture=ut}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(q)for(let ut=0;ut<6;ut++)Bt(S.__webglFramebuffer[ut],R,ut);else R.texture.mipmaps.length>0?Bt(S.__webglFramebuffer[0],R,0):Bt(S.__webglFramebuffer,R,0);else if(q){S.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ut]),S.__webglDepthbuffer[ut]===void 0)S.__webglDepthbuffer[ut]=n.createRenderbuffer(),Zt(S.__webglDepthbuffer[ut],R,!1);else{let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer[ut];n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,T,n.RENDERBUFFER,B)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),Zt(S.__webglDepthbuffer,R,!1);else{let T=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,B=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,B),n.framebufferRenderbuffer(n.FRAMEBUFFER,T,n.RENDERBUFFER,B)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(R,S,q){let ut=i.get(R);S!==void 0&&vt(ut.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&ie(R)}function he(R){let S=R.texture,q=i.get(R),ut=i.get(S);R.addEventListener("dispose",H),L(R);let T=R.textures,B=R.isWebGLCubeRenderTarget===!0,k=T.length>1;if(k||(ut.__webglTexture===void 0&&(ut.__webglTexture=n.createTexture()),ut.__version=S.version,a.memory.textures++),B){q.__webglFramebuffer=[];for(let N=0;N<6;N++)if(S.mipmaps.length>0){q.__webglFramebuffer[N]=[];for(let F=0;F<S.mipmaps.length;F++)q.__webglFramebuffer[N][F]=n.createFramebuffer()}else q.__webglFramebuffer[N]=n.createFramebuffer()}else{if(S.mipmaps.length>0){q.__webglFramebuffer=[];for(let N=0;N<S.mipmaps.length;N++)q.__webglFramebuffer[N]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(k)for(let N=0,F=T.length;N<F;N++){let it=i.get(T[N]);it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&xt(R)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let N=0;N<T.length;N++){let F=T[N];q.__webglColorRenderbuffer[N]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[N]);let it=r.convert(F.format,F.colorSpace),C=r.convert(F.type),V=w(F.internalFormat,it,C,F.normalized,F.colorSpace,R.isXRRenderTarget===!0),W=xe(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,V,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,q.__webglColorRenderbuffer[N])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),Zt(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(B){e.bindTexture(n.TEXTURE_CUBE_MAP,ut.__webglTexture),jt(n.TEXTURE_CUBE_MAP,S);for(let N=0;N<6;N++)if(S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)vt(q.__webglFramebuffer[N][F],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,F);else vt(q.__webglFramebuffer[N],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);y(S)?v(n.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}else if(k){for(let N=0,F=T.length;N<F;N++){let it=T[N],C=i.get(it),V=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(V=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(V,C.__webglTexture),jt(V,it),vt(q.__webglFramebuffer,R,it,n.COLOR_ATTACHMENT0+N,V,0),y(it)&&v(V)}e.unbindTexture()}else{let N=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(N=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(N,ut.__webglTexture),jt(N,S),S.mipmaps.length>0)for(let F=0;F<S.mipmaps.length;F++)vt(q.__webglFramebuffer[F],R,S,n.COLOR_ATTACHMENT0,N,F);else vt(q.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,N,0);y(S)?v(N):S.mipmaps.length>0&&n.texParameteri(N,n.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&ie(R)}function z(R){let S=R.textures;for(let q=0,ut=S.length;q<ut;q++){let T=S[q];if(y(T)&&T.mipmapsAutoUpdate===!0){let B=A(R),k=i.get(T).__webglTexture;e.bindTexture(B,k),v(B),e.unbindTexture()}}}let Te=[];function ee(R){if(R.samples>0){if(xt(R)===!1){let S=R.textures,q=R.width,ut=R.height,T=n.COLOR_BUFFER_BIT,B=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=i.get(R),N=S.length>1;if(N)for(let it=0;it<S.length;it++)e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let it=0;it<S.length;it++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(T|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(T|=n.STENCIL_BUFFER_BIT)),N){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,k.__webglColorRenderbuffer[it]);let C=i.get(S[it]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,C,0)}n.blitFramebuffer(0,0,q,ut,0,0,q,ut,T,n.NEAREST),l===!0&&(Te.length=0,Te.push(n.COLOR_ATTACHMENT0+it),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Te.push(B),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),N)for(let it=0;it<S.length;it++){e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,k.__webglColorRenderbuffer[it]);let C=i.get(S[it]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,k.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.TEXTURE_2D,C,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function xe(R){return Math.min(s.maxSamples,R.samples)}function xt(R){let S=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ce(R){let S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Wt(R,S){let q=R.colorSpace,ut=R.format,T=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||q!==_r&&q!==xi&&(oe.getTransfer(q)===pe?(ut!==Hn||T!==_n)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",q)),S}function Xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Lt,this.resetTextureUnits=et,this.getTextureUnits=at,this.setTextureUnits=bt,this.setTexture2D=_t,this.setTexture2DArray=At,this.setTexture3D=Ht,this.setTextureCube=St,this.rebindTextures=ae,this.setupRenderTarget=he,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=xt,this.dispose=X}function F_(n,t){function e(i,s=xi){let r,a=oe.getTransfer(s);if(i===_n)return n.UNSIGNED_BYTE;if(i===Ho)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Go)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Jc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yc)return n.BYTE;if(i===Zc)return n.SHORT;if(i===Ys)return n.UNSIGNED_SHORT;if(i===ko)return n.INT;if(i===kn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Ge)return n.HALF_FLOAT;if(i===Kc)return n.ALPHA;if(i===Qc)return n.RGB;if(i===Hn)return n.RGBA;if(i===hi)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===Vo)return n.RED;if(i===Wo)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===Xo)return n.RG_INTEGER;if(i===qo)return n.RGBA_INTEGER;if(i===na||i===ia||i===sa||i===ra)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yo||i===Zo||i===Jo||i===$o)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ko||i===Qo||i===jo||i===tl||i===el||i===aa||i===nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ko||i===Qo)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===tl)return r.COMPRESSED_R11_EAC;if(i===el)return r.COMPRESSED_SIGNED_R11_EAC;if(i===aa)return r.COMPRESSED_RG11_EAC;if(i===nl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===il)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ll)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ul)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xl||i===_l||i===vl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===xl)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yl||i===Ml||i===oa||i===Sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===yl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B_=`
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

}`,bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:O_,fragmentShader:B_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Ae(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Eh=class extends qn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,M=typeof XRWebGLBinding<"u",m=new bh,g={},_=e.getContextAttributes(),y=null,v=null,A=[],w=[],x=new ct,b=null,L=null,P=new hn;P.viewport=new Ie;let U=new hn;U.viewport=new Ie;let H=[P,U],$=new Uo,I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let _t=A[tt];return _t===void 0&&(_t=new Us,A[tt]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(tt){let _t=A[tt];return _t===void 0&&(_t=new Us,A[tt]=_t),_t.getGripSpace()},this.getHand=function(tt){let _t=A[tt];return _t===void 0&&(_t=new Us,A[tt]=_t),_t.getHandSpace()};function K(tt){let _t=w.indexOf(tt.inputSource);if(_t===-1)return;let At=A[_t];At!==void 0&&(At.update(tt.inputSource,tt.frame,c||a),At.dispatchEvent({type:tt.type,data:tt.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",rt);for(let tt=0;tt<A.length;tt++){let _t=w[tt];_t!==null&&(w[tt]=null,A[tt].disconnect(_t))}I=null,X=null,m.reset();for(let tt in g)delete g[tt];if(t.setRenderTarget(y),d=null,f=null,u=null,s=null,v=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),L!==null){let tt=L.camera;tt.fov=L.fov,tt.zoom=L.zoom,tt.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&M&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",rt),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,Ht=null,St=null;_.depth&&(St=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,At=_.stencil?gi:hi,Ht=_.stencil?cs:kn);let Ft={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ft),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Fe(f.textureWidth,f.textureHeight,{format:Hn,type:_n,depthTexture:new zn(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let At={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,At),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Fe(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(tt){for(let _t=0;_t<tt.removed.length;_t++){let At=tt.removed[_t],Ht=w.indexOf(At);Ht>=0&&(w[Ht]=null,A[Ht].disconnect(At))}for(let _t=0;_t<tt.added.length;_t++){let At=tt.added[_t],Ht=w.indexOf(At);if(Ht===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=w.length){w.push(At),Ht=Ft;break}else if(w[Ft]===null){w[Ft]=At,Ht=Ft;break}if(Ht===-1)break}let St=A[Ht];St&&St.connect(At)}}function Z(tt,_t){_t===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(_t.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let _t=tt.near,At=tt.far;m.texture!==null&&(m.depthNear>0&&(_t=m.depthNear),m.depthFar>0&&(At=m.depthFar)),$.near=U.near=P.near=_t,$.far=U.far=P.far=At,(I!==$.near||X!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),I=$.near,X=$.far),$.layers.mask=tt.layers.mask|6,P.layers.mask=$.layers.mask&-5,U.layers.mask=$.layers.mask&-3;let Ht=tt.parent,St=$.cameras;Z($,Ht);for(let Ft=0;Ft<St.length;Ft++)Z(St[Ft],Ht);$.projectionMatrix.copy(P.projectionMatrix),$.projectionMatrixInverse.copy(P.projectionMatrixInverse),L===null&&tt.isPerspectiveCamera&&(L={camera:tt,fov:tt.fov,zoom:tt.zoom}),et(tt,$,Ht)};function et(tt,_t,At){At===null?tt.matrix.copy(_t.matrixWorld):(tt.matrix.copy(At.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(_t.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(_t.projectionMatrix),tt.projectionMatrixInverse.copy(_t.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=co*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(tt){return g[tt]};let at=null;function bt(tt,_t){if(h=_t.getViewerPose(c||a),p=_t,h!==null){let At=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ht=!1;At.length!==$.cameras.length&&($.cameras.length=0,Ht=!0);for(let Ot=0;Ot<At.length;Ot++){let jt=At[Ot],ne=null;if(d!==null)ne=d.getViewport(jt);else{let gt=u.getViewSubImage(f,jt);ne=gt.viewport,Ot===0&&(t.setRenderTargetTextures(v,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(v))}let ot=H[Ot];ot===void 0&&(ot=new hn,ot.layers.enable(Ot),ot.viewport=new Ie,H[Ot]=ot),ot.matrix.fromArray(jt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(jt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(ne.x,ne.y,ne.width,ne.height),Ot===0&&($.matrix.copy(ot.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ht===!0&&$.cameras.push(ot)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){u=i.getBinding();let Ot=u.getDepthInformation(At[0]);Ot&&Ot.isValid&&Ot.texture&&m.init(Ot,s.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),u=i.getBinding();for(let Ot=0;Ot<At.length;Ot++){let jt=At[Ot].camera;if(jt){let ne=g[jt];ne||(ne=new Ir,g[jt]=ne);let ot=u.getCameraImage(jt);ne.sourceTexture=ot}}}}for(let At=0;At<A.length;At++){let Ht=w[At],St=A[At];Ht!==null&&St!==void 0&&St.update(Ht,_t,c||a)}at&&at(tt,_t),_t.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_t}),p=null}let Lt=new nd;Lt.setAnimationLoop(bt),this.setAnimationLoop=function(tt){at=tt},this.dispose=function(){}}},z_=new ye,fd=new $t;fd.set(-1,0,0,0,1,0,0,0,1);function k_(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,ah(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,y,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),M(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,y):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=t.get(g),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(z_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(fd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=y*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function M(m,g){let _=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function H_(n,t,e,i){let s={},r={};function a(_,y){let v=y.program;i.uniformBlockBinding(_,v,s[_.id])}function o(_,y){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(_,A);let w=t.render.frame;r[_.id]!==w&&(c(_),r[_.id]=w)}function l(_){let y=n.createBuffer(),v=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function c(_){let y=s[_.id],v=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,x=v.length;w<x;w++){let b=v[w];if(Array.isArray(b))for(let L=0,P=b.length;L<P;L++)h(b[L],w,L,A);else h(b,w,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(_,y,v,A){if(f(_,y,v,A)===!0){let w=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let P=x[L],U=M(P,!0);u(P,_.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,w,_.__data)}}function u(_,y,v){typeof _=="number"||typeof _=="boolean"?y[v]=_:_.isMatrix3?(y[v]=_.elements[0],y[v+1]=_.elements[1],y[v+2]=_.elements[2],y[v+3]=0,y[v+4]=_.elements[3],y[v+5]=_.elements[4],y[v+6]=_.elements[5],y[v+7]=0,y[v+8]=_.elements[6],y[v+9]=_.elements[7],y[v+10]=_.elements[8],y[v+11]=0):ArrayBuffer.isView(_)?y.set(_.subarray(0,y.length-v),v):_.toArray(y,v)}function f(_,y,v,A){let w=_.value,x=y+"_"+v;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let b=A[x],L=!1;for(let P=0;P<w.length;P++)d(w[P],b,P)===!0&&(L=!0);return L}return d(w,A,x)}function d(_,y,v){if(y[v]===void 0)return typeof _=="number"||typeof _=="boolean"?y[v]=_:ArrayBuffer.isView(_)?y[v]=_.slice():y[v]=_.clone(),!0;{let A=y[v];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return y[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function p(_){let y=_.uniforms,v=0,A=16;for(let x=0,b=y.length;x<b;x++){let L=Array.isArray(y[x])?y[x]:[y[x]];for(let P=0,U=L.length;P<U;P++){let H=L[P],$=Array.isArray(H.value)?H.value:[H.value],I=Array.isArray(y[x])||Array.isArray(H.value),X=v;for(let G=0,rt=$.length;G<rt;G++){let Z=$[G],et=M(Z,I),at=v%A,bt=at%et.boundary,Lt=at+bt;v+=bt,Lt!==0&&A-Lt<et.storage&&(v+=A-Lt),G===0&&(X=v),v+=et.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((v-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}let w=v%A;return w>0&&(v+=A-w),_.__size=v,_.__cache={},this}function M(_,y){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",_),y===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let y=_.target;y.removeEventListener("dispose",m),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:g}}var G_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function V_(){return Jn===null&&(Jn=new Ar(G_,16,16,zi,Ge),Jn.name="DFG_LUT",Jn.minFilter=un,Jn.magFilter=un,Jn.wrapS=Xn,Jn.wrapT=Xn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var wl=class{constructor(t={}){let{canvas:e=bf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let M=d,m=new Set([qo,Xo,Wo]),g=new Set([_n,kn,Ys,cs,Ho,Go]),_=new Uint32Array(4),y=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],b=[],L=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,H=null,$=null,I=null,X=null;this._outputColorSpace=Pe;let K=0,G=0,rt=null,Z=-1,et=null,at=new Ie,bt=new Ie,Lt=null,tt=new It(0),_t=0,At=e.width,Ht=e.height,St=1,Ft=null,de=null,Ot=new Ie(0,0,At,Ht),jt=new Ie(0,0,At,Ht),ne=!1,ot=new Pi,gt=new po,mt=!1,Rt=!1,vt=new ye,Zt=new D,Bt=new Ie,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ae=!1;function he(){return rt===null?St:1}let z=i;function Te(E,O){return e.getContext(E,O)}let ee,xe,xt,Ce,Wt,Xt,R,S,q,ut,T,B,k,N,F,it,C,V,W,lt,Q,st,dt;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),z===null){let O="webgl2";if(z=Te(O,E),z===null)throw Te(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Gt()}catch(E){throw e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Yt("WebGLRenderer: "+E.message),E}function Gt(){ee=new tx(z),ee.init(),Q=new F_(z,ee),xe=new V0(z,ee,t,Q),xt=new D_(z,ee),xe.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),$=z.createFramebuffer(),I=z.createFramebuffer(),X=z.createFramebuffer(),Ce=new ix(z),Wt=new y_,Xt=new U_(z,ee,xt,Wt,xe,Q,Ce),R=new j0(P),S=new rm(z),st=new H0(z,S),q=new ex(z,S,Ce,st),ut=new rx(z,q,S,st,Ce),V=new sx(z,xe,Xt),F=new W0(Wt),T=new v_(P,R,ee,xe,st,F),B=new k_(P,Wt),k=new S_,N=new R_(ee),C=new k0(P,R,xt,ut,p,l),it=new N_(P,ut,xe),dt=new H_(z,Ce,xe,xt),W=new G0(z,ee,Ce),lt=new nx(z,ee,Ce),Ce.programs=T.programs,P.capabilities=xe,P.extensions=ee,P.properties=Wt,P.renderLists=k,P.shadowMap=it,P.state=xt,P.info=Ce}M!==_n&&(L=new ox(M,e.width,e.height,o,s,r));let ht=new Eh(P,z);this.xr=ht,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let E=ee.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ee.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return St},this.setPixelRatio=function(E){E!==void 0&&(St=E,this.setSize(At,Ht,!1))},this.getSize=function(E){return E.set(At,Ht)},this.setSize=function(E,O,j=!0){if(ht.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}At=E,Ht=O,e.width=Math.floor(E*St),e.height=Math.floor(O*St),j===!0&&(e.style.width=E+"px",e.style.height=O+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(At*St,Ht*St).floor()},this.setDrawingBufferSize=function(E,O,j){At=E,Ht=O,St=j,e.width=Math.floor(E*j),e.height=Math.floor(O*j),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(M===_n){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(at)},this.getViewport=function(E){return E.copy(Ot)},this.setViewport=function(E,O,j,Y){E.isVector4?Ot.set(E.x,E.y,E.z,E.w):Ot.set(E,O,j,Y),xt.viewport(at.copy(Ot).multiplyScalar(he()).round())},this.getScissor=function(E){return E.copy(jt)},this.setScissor=function(E,O,j,Y){E.isVector4?jt.set(E.x,E.y,E.z,E.w):jt.set(E,O,j,Y),xt.scissor(bt.copy(jt).multiplyScalar(he()).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){xt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){Ft=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,j=!0){let Y=0;if(E){let J=!1;if(rt!==null){let Mt=rt.texture.format;J=m.has(Mt)}if(J){let Mt=rt.texture.type,Pt=g.has(Mt),yt=C.getClearColor(),wt=C.getClearAlpha(),zt=yt.r,Qt=yt.g,le=yt.b;Pt?(_[0]=zt,_[1]=Qt,_[2]=le,_[3]=wt,z.clearBufferuiv(z.COLOR,0,_)):(y[0]=zt,y[1]=Qt,y[2]=le,y[3]=wt,z.clearBufferiv(z.COLOR,0,y))}else Y|=z.COLOR_BUFFER_BIT}O&&(Y|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(Y|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&z.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),C.dispose(),k.dispose(),N.dispose(),Xt.dispose(),Wt.dispose(),R.dispose(),ut.dispose(),q.dispose(),st.dispose(),dt.dispose(),T.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",tu),ht.removeEventListener("sessionend",eu),Xi.stop()};function Vt(E){E.preventDefault(),ih("WebGLRenderer: Context Lost."),U=!0}function Jt(){ih("WebGLRenderer: Context Restored."),U=!1;let E=Ce.autoReset,O=it.enabled,j=it.autoUpdate,Y=it.needsUpdate,J=it.type;Gt(),Ce.autoReset=E,it.enabled=O,it.autoUpdate=j,it.needsUpdate=Y,it.type=J}function pt(E){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function _e(E){let O=E.target;O.removeEventListener("dispose",_e),Ue(O)}function Ue(E){In(E),Wt.remove(E)}function In(E){let O=Wt.get(E).programs;O!==void 0&&(O.forEach(function(j){T.releaseProgram(j)}),E.isShaderMaterial&&T.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,j,Y,J,Mt){O===null&&(O=ie);let Pt=J.isMesh&&J.matrixWorld.determinantAffine()<0,yt=Bd(E,O,j,Y,J);xt.setMaterial(Y,Pt);let wt=j.index,zt=1;if(Y.wireframe===!0){if(wt=q.getWireframeAttribute(j),wt===void 0)return;zt=2}let Qt=j.drawRange,le=j.attributes.position,Nt=Qt.start*zt,ce=(Qt.start+Qt.count)*zt;Mt!==null&&(Nt=Math.max(Nt,Mt.start*zt),ce=Math.min(ce,(Mt.start+Mt.count)*zt)),wt!==null?(Nt=Math.max(Nt,0),ce=Math.min(ce,wt.count)):le!=null&&(Nt=Math.max(Nt,0),ce=Math.min(ce,le.count));let Be=ce-Nt;if(Be<0||Be===1/0)return;st.setup(J,Y,yt,j,wt);let Ee,be=W;if(wt!==null&&(Ee=S.get(wt),be=lt,be.setIndex(Ee)),J.isMesh)Y.wireframe===!0?(xt.setLineWidth(Y.wireframeLinewidth*he()),be.setMode(z.LINES)):be.setMode(z.TRIANGLES);else if(J.isLine){let en=Y.linewidth;en===void 0&&(en=1),xt.setLineWidth(en*he()),J.isLineSegments?be.setMode(z.LINES):J.isLineLoop?be.setMode(z.LINE_LOOP):be.setMode(z.LINE_STRIP)}else J.isPoints?be.setMode(z.POINTS):J.isSprite&&be.setMode(z.TRIANGLES);if(J.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))be.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let en=J._multiDrawStarts,Dt=J._multiDrawCounts,cn=J._multiDrawCount,ge=wt?S.get(wt).bytesPerElement:1,qi=Wt.get(Y).currentProgram.getUniforms();for(let nn=0;nn<cn;nn++)qi.setValue(z,"_gl_DrawID",nn),be.render(en[nn]/ge,Dt[nn])}else if(J.isInstancedMesh)be.renderInstances(Nt,Be,J.count);else if(j.isInstancedBufferGeometry){let en=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dt=Math.min(j.instanceCount,en);be.renderInstances(Nt,Be,Dt)}else be.render(Nt,Be)};function jh(E,O,j,Y){H!==null&&E.isNodeMaterial&&H.setObject(Y,E),mt===!0&&F.setState(E,j,!1),E.transparent===!0&&E.side===xn&&E.forceSinglePass===!1?(E.side=$e,E.needsUpdate=!0,or(E,O,Y),E.side=Oi,E.needsUpdate=!0,or(E,O,Y),E.side=xn):or(E,O,Y)}this.compile=function(E,O,j=null){j===null&&(j=E),H!==null&&H.renderStart(E,O,j),w=N.get(j),w.init(O),b.push(w),j.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),E!==j&&E.traverseVisible(function(J){J.isLight&&J.layers.test(O.layers)&&(w.pushLight(J),J.castShadow&&w.pushShadow(J))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),Rt=this.localClippingEnabled,mt=F.init(this.clippingPlanes,Rt),mt===!0&&F.setGlobalState(this.clippingPlanes,O),H!==null&&it.render(w.state.shadowsArray,j,O);let Y=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Mt=J.material;if(Mt)if(Array.isArray(Mt))for(let Pt=0;Pt<Mt.length;Pt++){let yt=Mt[Pt];jh(yt,j,O,J),Y.add(yt)}else jh(Mt,j,O,J),Y.add(Mt)}),w=b.pop(),H!==null&&H.renderEnd(),Y},this.compileAsync=function(E,O,j=null){let Y=this.compile(E,O,j);return new Promise(J=>{function Mt(){if(Y.forEach(function(Pt){let wt=Wt.get(Pt).currentProgram;(wt===void 0||wt.isReady())&&Y.delete(Pt)}),Y.size===0){J(E);return}setTimeout(Mt,10)}ee.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let nc=null;function Fd(E){nc&&nc(E)}function tu(){Xi.stop()}function eu(){Xi.start()}let Xi=new nd;Xi.setAnimationLoop(Fd),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(E){nc=E,ht.setAnimationLoop(E),E===null?Xi.stop():Xi.start()},ht.addEventListener("sessionstart",tu),ht.addEventListener("sessionend",eu),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,O);let j=ht.enabled===!0&&ht.isPresenting===!0,Y=L!==null&&(rt===null||j)&&L.begin(P,rt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,O,rt),w=N.get(E,b.length),w.init(O),w.state.textureUnits=Xt.getTextureUnits(),b.push(w),vt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?gt.setFromArrayCamera(O):ot.setFromProjectionMatrix(vt,Cn,O.reversedDepth),Rt=this.localClippingEnabled,mt=F.init(this.clippingPlanes,Rt),A=k.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Pt=P.xr.getDepthSensingMesh();Pt!==null&&ic(Pt,O,-1/0,P.sortObjects)}ic(E,O,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Ft,de),ae=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,ae&&C.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),mt===!0&&F.beginShadows();let J=w.state.shadowsArray;if(it.render(J,E,O),mt===!0&&F.endShadows(),(Y&&L.hasRenderPass())===!1){let Pt=A.opaque,yt=A.transmissive;if(w.setupLights(),O.isArrayCamera){let wt=O.cameras;if(yt.length>0)for(let zt=0,Qt=wt.length;zt<Qt;zt++){let le=wt[zt];iu(Pt,yt,E,le)}ae&&C.render(E);for(let zt=0,Qt=wt.length;zt<Qt;zt++){let le=wt[zt];nu(A,E,le,le.viewport)}}else yt.length>0&&iu(Pt,yt,E,O),ae&&C.render(E),nu(A,E,O)}rt!==null&&G===0&&(Xt.updateMultisampleRenderTarget(rt),Xt.updateRenderTargetMipmap(rt)),Y&&L.end(P),E.isScene===!0&&E.onAfterRender(P,E,O),st.resetDefaultState(),Z=-1,et=null,b.pop(),b.length>0?(w=b[b.length-1],Xt.setTextureUnits(w.state.textureUnits),mt===!0&&F.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,H!==null&&H.renderEnd()};function ic(E,O,j,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Pt=O.isArrayCamera?gt:ot;if(!E.frustumCulled||E.intersectsFrustum(Pt)){Y&&Bt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(vt);let yt=ut.update(E),wt=E.material;wt.visible&&A.push(E,yt,wt,j,Bt.z,null,O)}}else if(E.isMesh||E.isLine||E.isPoints){let Pt=O.isArrayCamera?gt:ot;if(!E.frustumCulled||E.intersectsFrustum(Pt)){let yt=ut.update(E),wt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Bt.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Bt.copy(yt.boundingSphere.center)),Bt.applyMatrix4(E.matrixWorld).applyMatrix4(vt)),Array.isArray(wt)){let zt=yt.groups;for(let Qt=0,le=zt.length;Qt<le;Qt++){let Nt=zt[Qt],ce=wt[Nt.materialIndex];ce&&ce.visible&&A.push(E,yt,ce,j,Bt.z,Nt,O)}}else wt.visible&&A.push(E,yt,wt,j,Bt.z,null,O)}}}let Mt=E.children;for(let Pt=0,yt=Mt.length;Pt<yt;Pt++)ic(Mt[Pt],O,j,Y)}function nu(E,O,j,Y){let{opaque:J,transmissive:Mt,transparent:Pt}=E;w.setupLightsView(j),mt===!0&&F.setGlobalState(P.clippingPlanes,j),Y&&xt.viewport(at.copy(Y)),J.length>0&&Ta(J,O,j),Mt.length>0&&Ta(Mt,O,j),Pt.length>0&&Ta(Pt,O,j),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function iu(E,O,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){let Nt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Fe(1,1,{generateMipmaps:!0,type:Nt?Ge:_n,minFilter:mi,samples:Math.max(4,xe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||at;Mt.setSize(Pt.z*P.transmissionResolutionScale,Pt.w*P.transmissionResolutionScale);let yt=P.getRenderTarget(),wt=P.getActiveCubeFace(),zt=P.getActiveMipmapLevel();P.setRenderTarget(Mt),P.getClearColor(tt),_t=P.getClearAlpha(),_t<1&&P.setClearColor(16777215,.5),P.clear(),ae&&C.render(j);let Qt=P.toneMapping;P.toneMapping=Zn;let le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),mt===!0&&F.setGlobalState(P.clippingPlanes,Y),Ta(E,j,Y),Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ce=0,Be=O.length;ce<Be;ce++){let Ee=O[ce],{object:be,geometry:en,material:Dt,group:cn}=Ee;if(Dt.side===xn&&be.layers.test(Y.layers)){let ge=Dt.side;Dt.side=$e,Dt.needsUpdate=!0,su(be,j,Y,en,Dt,cn),Dt.side=ge,Dt.needsUpdate=!0,Nt=!0}}Nt===!0&&(Xt.updateMultisampleRenderTarget(Mt),Xt.updateRenderTargetMipmap(Mt))}P.setRenderTarget(yt,wt,zt),P.setClearColor(tt,_t),le!==void 0&&(Y.viewport=le),P.toneMapping=Qt}function Ta(E,O,j){let Y=O.isScene===!0?O.overrideMaterial:null;for(let J=0,Mt=E.length;J<Mt;J++){let Pt=E[J],{object:yt,geometry:wt,group:zt}=Pt,Qt=Pt.material;Qt.allowOverride===!0&&Y!==null&&(Qt=Y),yt.layers.test(j.layers)&&su(yt,O,j,wt,Qt,zt)}}function su(E,O,j,Y,J,Mt){H!==null&&J.isNodeMaterial&&H.setObject(E,J),E.onBeforeRender(P,O,j,Y,J,Mt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(P,O,j,Y,E,Mt),J.transparent===!0&&J.side===xn&&J.forceSinglePass===!1?(J.side=$e,J.needsUpdate=!0,P.renderBufferDirect(j,O,Y,J,E,Mt),J.side=Oi,J.needsUpdate=!0,P.renderBufferDirect(j,O,Y,J,E,Mt),J.side=xn):P.renderBufferDirect(j,O,Y,J,E,Mt),E.onAfterRender(P,O,j,Y,J,Mt)}function ru(E){let O=0;for(let j of E)j.texture!==null&&O++;return O}function or(E,O,j){O.isScene!==!0&&(O=ie);let Y=Wt.get(E),J=w.state.lights,Mt=w.state.shadowsArray,Pt=J.state.version,yt=T.getParameters(E,J.state,Mt,O,j,w.state.lightProbeGridArray),wt=T.getProgramCacheKey(yt),zt=Y.programs;Y.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,Y.fog=O.fog;let Qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Y.envMap=R.get(E.envMap||Y.environment,Qt),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",_e),zt=new Map,Y.programs=zt,Y.programVariants=new Map);let le=zt.get(wt);if(le!==void 0){if(Y.currentProgram===le&&Y.lightsStateVersion===Pt)return ou(E,yt),le}else yt.uniforms=T.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,j,yt),E.onBeforeCompile(yt,P),le=T.acquireProgram(yt,wt),zt.set(wt,le),Y.uniforms=yt.uniforms;let Nt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=F.uniform),ou(E,yt),Y.needsLights=kd(E),Y.lightsStateVersion=Pt,Y.needsLights&&(Nt.ambientLightColor.value=J.state.ambient,Nt.lightProbe.value=J.state.probe,Nt.sunLights.value=J.state.sun,Nt.sunLightShadows.value=J.state.sunShadow,Nt.directionalLights.value=J.state.directional,Nt.directionalLightShadows.value=J.state.directionalShadow,Nt.spotLights.value=J.state.spot,Nt.spotLightShadows.value=J.state.spotShadow,Nt.rectAreaLights.value=J.state.rectArea,Nt.ltc_1.value=J.state.rectAreaLTC1,Nt.ltc_2.value=J.state.rectAreaLTC2,Nt.pointLights.value=J.state.point,Nt.pointLightShadows.value=J.state.pointShadow,Nt.hemisphereLights.value=J.state.hemi,Nt.sunShadowMatrix.value=J.state.sunShadowMatrix,Nt.sunShadowCascade.value=J.state.sunShadowCascade,Nt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Nt.spotLightMatrix.value=J.state.spotLightMatrix,Nt.spotLightMap.value=J.state.spotLightMap,Nt.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=ru(w.state.lightProbeGridArray),Y.currentProgram=le,Y.uniformsList=null,le}function Od(E,O,j,Y,J){let Mt=Wt.get(E),Pt=Mt.currentProgram.id+","+Y+","+J,yt=Mt.programVariants.get(Pt);return yt===void 0?(yt=or(E,O,j),Mt.programVariants.set(Pt,yt)):(Mt.currentProgram=yt,Mt.uniformsList=null,Mt.outputColorSpace=Y,Mt.toneMapping=J),yt}function au(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=$s.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function ou(E,O){let j=Wt.get(E);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.batchingColor=O.batchingColor,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.instancingMorph=O.instancingMorph,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Bd(E,O,j,Y,J){O.isScene!==!0&&(O=ie),Xt.resetTextureUnits();let Mt=O.fog,Pt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?O.environment:null,yt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:oe.workingColorSpace,wt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,zt=R.get(Y.envMap||Pt,wt),Qt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,le=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,Be=!!j.morphAttributes.color,Ee=Zn;Y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ee=P.toneMapping);let be=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,en=be!==void 0?be.length:0,Dt=Wt.get(Y),cn=w.state.lights;if(mt===!0&&(Rt===!0||E!==et)){let Le=E===et&&Y.id===Z;F.setState(Y,E,Le)}let ge=!1,qi=!1;Y.version===Dt.__version?Dt.needsLights&&Dt.lightsStateVersion!==cn.state.version||J.isBatchedMesh&&Dt.batching===!1||!J.isBatchedMesh&&Dt.batching===!0||J.isBatchedMesh&&Dt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Dt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Dt.instancing===!1||!J.isInstancedMesh&&Dt.instancing===!0||J.isSkinnedMesh&&Dt.skinning===!1||!J.isSkinnedMesh&&Dt.skinning===!0||J.isInstancedMesh&&Dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Dt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Dt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Dt.instancingMorph===!1&&J.morphTexture!==null||Dt.envMap!==zt||Y.fog===!0&&Dt.fog!==Mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==F.numPlanes||Dt.numIntersection!==F.numIntersection)||Dt.vertexAlphas!==Qt||Dt.vertexTangents!==le||Dt.morphTargets!==Nt||Dt.morphNormals!==ce||Dt.morphColors!==Be||Dt.morphTargetsCount!==en||Dt.numLightProbeGrids!==ru(w.state.lightProbeGridArray)?ge=!0:(Dt.outputColorSpace!==yt||Dt.toneMapping!==Ee)&&(qi=!0):(ge=!0,Dt.__version=Y.version);let nn=Dt.currentProgram;(ge===!0||qi===!0)&&(nn=qi===!0?Od(Y,O,J,yt,Ee):or(Y,O,J),H&&Y.isNodeMaterial&&H.onUpdateProgram(Y,nn,Dt));let wa=!1,bi=!1,Yi=!1,ue=nn.getUniforms(),Je=Dt.uniforms;if(xt.useProgram(nn.program)&&(wa=!0,bi=!0,Yi=!0),Y.id!==Z&&(Z=Y.id,bi=!0),wa||et!==E){xt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ue.setValue(z,"projectionMatrix",E.projectionMatrix),ue.setValue(z,"viewMatrix",E.matrixWorldInverse);let qe=ue.map.cameraPosition;qe!==void 0&&qe.setValue(z,Zt.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&ue.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),et!==E&&(et=E,bi=!0,Yi=!0)}if(Dt.needsLights&&(cn.state.sunShadowMap.length>0&&ue.setValue(z,"sunShadowMap",cn.state.sunShadowMap,Xt),cn.state.directionalShadowMap.length>0&&ue.setValue(z,"directionalShadowMap",cn.state.directionalShadowMap,Xt),cn.state.spotShadowMap.length>0&&ue.setValue(z,"spotShadowMap",cn.state.spotShadowMap,Xt),cn.state.pointShadowMap.length>0&&ue.setValue(z,"pointShadowMap",cn.state.pointShadowMap,Xt)),J.isSkinnedMesh){ue.setOptional(z,J,"bindMatrix"),ue.setOptional(z,J,"bindMatrixInverse");let Le=J.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ue.setValue(z,"boneTexture",Le.boneTexture,Xt))}J.isBatchedMesh&&(ue.setOptional(z,J,"batchingTexture"),ue.setValue(z,"batchingTexture",J._matricesTexture,Xt),ue.setOptional(z,J,"batchingIdTexture"),ue.setValue(z,"batchingIdTexture",J._indirectTexture,Xt),ue.setOptional(z,J,"batchingColorTexture"),J._colorsTexture!==null&&ue.setValue(z,"batchingColorTexture",J._colorsTexture,Xt));let Ln=j.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&V.update(J,j,nn),(bi||Dt.receiveShadow!==J.receiveShadow)&&(Dt.receiveShadow=J.receiveShadow,ue.setValue(z,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=V_()),bi){if(ue.setValue(z,"toneMappingExposure",P.toneMappingExposure),Dt.needsLights&&zd(Je,Yi),Mt&&Y.fog===!0&&B.refreshFogUniforms(Je,Mt),B.refreshMaterialUniforms(Je,Y,St,Ht,w.state.transmissionRenderTarget[E.id]),Dt.needsLights&&Dt.numLightProbeGrids>0){let Le=v,qe=0;for(let ni of w.state.lightProbeGridArray)ni.texture!==null&&(Le.textures[qe]=ni.texture,Le.min[qe]=ni.boundingBox.min,Le.max[qe]=ni.boundingBox.max,Le.resolution[qe]=ni.resolution,qe++);for(let ni in Le)Le[ni].length=qe;Je.probesSH.value=Le.textures,Je.probesMin.value=Le.min,Je.probesMax.value=Le.max,Je.probesResolution.value=Le.resolution}$s.upload(z,au(Dt),Je,Xt)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($s.upload(z,au(Dt),Je,Xt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(z,"center",J.center),ue.setValue(z,"modelViewMatrix",J.modelViewMatrix),ue.setValue(z,"normalMatrix",J.normalMatrix),ue.setValue(z,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let Le=Y.uniformsGroups;for(let qe=0,ni=Le.length;qe<ni;qe++){let cu=Le[qe];dt.update(cu,nn),dt.bind(cu,nn)}}return nn}function zd(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function kd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(E,O,j){let Y=Wt.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Wt.get(E.texture).__webglTexture=O,Wt.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let j=Wt.get(E);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,j=0){rt=E,K=O,G=j;let Y=null,J=!1,Mt=!1;if(E){let yt=Wt.get(E);if(yt.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(z.FRAMEBUFFER,yt.__webglFramebuffer),at.copy(E.viewport),bt.copy(E.scissor),Lt=E.scissorTest,xt.viewport(at),xt.scissor(bt),xt.setScissorTest(Lt),Z=-1;return}else if(yt.__webglFramebuffer===void 0)Xt.setupRenderTarget(E);else if(yt.__hasExternalTextures)Xt.rebindTextures(E,Wt.get(E.texture).__webglTexture,Wt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qt=E.depthTexture;if(yt.__boundDepthTexture!==Qt){if(Qt!==null&&Wt.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xt.setupDepthRenderbuffer(E)}}let wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(Mt=!0);let zt=Wt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?Y=zt[O][j]:Y=zt[O],J=!0):E.samples>0&&Xt.useMultisampledRTT(E)===!1?Y=Wt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?Y=zt[j]:Y=zt,at.copy(E.viewport),bt.copy(E.scissor),Lt=E.scissorTest}else at.copy(Ot).multiplyScalar(St).floor(),bt.copy(jt).multiplyScalar(St).floor(),Lt=ne;if(j!==0&&(Y=$),xt.bindFramebuffer(z.FRAMEBUFFER,Y)&&xt.drawBuffers(E,Y),xt.viewport(at),xt.scissor(bt),xt.setScissorTest(Lt),J){let yt=Wt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,j)}else if(Mt){let yt=O;for(let wt=0;wt<E.textures.length;wt++){let zt=Wt.get(E.textures[wt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+wt,zt.__webglTexture,j,yt)}}else if(E!==null&&j!==0){let yt=Wt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,yt.__webglTexture,j)}Z=-1};function lu(E){let O=Wt.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=xe.textureFormatReadable(E.format),O.__typeReadable=xe.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,j,Y,J,Mt,Pt,yt=0){if(!(E&&E.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt){xt.bindFramebuffer(z.FRAMEBUFFER,wt);try{let zt=E.textures[yt],Qt=zt.format,le=zt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+yt);let Nt=lu(zt);if(Nt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Nt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&j>=0&&j<=E.height-J&&z.readPixels(O,j,Y,J,Q.convert(Qt),Q.convert(le),Mt)}finally{let zt=rt!==null?Wt.get(rt).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(E,O,j,Y,J,Mt,Pt,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Wt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt],Array.isArray(wt)&&(wt=wt[0])),wt)if(O>=0&&O<=E.width-Y&&j>=0&&j<=E.height-J){xt.bindFramebuffer(z.FRAMEBUFFER,wt);let zt=E.textures[yt],Qt=zt.format,le=zt.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+yt);let Nt=lu(zt);if(Nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.bufferData(z.PIXEL_PACK_BUFFER,Mt.byteLength,z.STREAM_READ),z.readPixels(O,j,Y,J,Q.convert(Qt),Q.convert(le),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Be=rt!==null?Wt.get(rt).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Be);let Ee=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Tf(z,Ee,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ce),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Mt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ce),z.deleteSync(Ee),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,j=0){let Y=Math.pow(2,-j),J=Math.floor(E.image.width*Y),Mt=Math.floor(E.image.height*Y),Pt=O!==null?O.x:0,yt=O!==null?O.y:0;Xt.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Pt,yt,J,Mt),xt.unbindTexture()},this.copyTextureToTexture=function(E,O,j=null,Y=null,J=0,Mt=0){let Pt,yt,wt,zt,Qt,le,Nt,ce,Be,Ee=E.isCompressedTexture?E.mipmaps[Mt]:E.image;if(j!==null)Pt=j.max.x-j.min.x,yt=j.max.y-j.min.y,wt=j.isBox3?j.max.z-j.min.z:1,zt=j.min.x,Qt=j.min.y,le=j.isBox3?j.min.z:0;else{let ue=Math.pow(2,-J);Pt=Math.floor(Ee.width*ue),yt=Math.floor(Ee.height*ue),E.isDataArrayTexture?wt=Ee.depth:E.isData3DTexture?wt=Math.floor(Ee.depth*ue):wt=1,zt=0,Qt=0,le=0}Y!==null?(Nt=Y.x,ce=Y.y,Be=Y.z):(Nt=0,ce=0,Be=0);let be=Q.convert(O.format),en=Q.convert(O.type),Dt;O.isData3DTexture?(Xt.setTexture3D(O,0),Dt=z.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Xt.setTexture2DArray(O,0),Dt=z.TEXTURE_2D_ARRAY):(Xt.setTexture2D(O,0),Dt=z.TEXTURE_2D),xt.activeTexture(z.TEXTURE0),xt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,O.flipY),xt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),xt.pixelStorei(z.UNPACK_ALIGNMENT,O.unpackAlignment);let cn=xt.getParameter(z.UNPACK_ROW_LENGTH),ge=xt.getParameter(z.UNPACK_IMAGE_HEIGHT),qi=xt.getParameter(z.UNPACK_SKIP_PIXELS),nn=xt.getParameter(z.UNPACK_SKIP_ROWS),wa=xt.getParameter(z.UNPACK_SKIP_IMAGES);xt.pixelStorei(z.UNPACK_ROW_LENGTH,Ee.width),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ee.height),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,zt),xt.pixelStorei(z.UNPACK_SKIP_ROWS,Qt),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,le);let bi=E.isDataArrayTexture||E.isData3DTexture,Yi=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let ue=Wt.get(E),Je=Wt.get(O),Ln=Wt.get(ue.__renderTarget),Le=Wt.get(Je.__renderTarget);xt.bindFramebuffer(z.READ_FRAMEBUFFER,Ln.__webglFramebuffer),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let qe=0;qe<wt;qe++)bi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(E).__webglTexture,J,le+qe),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Wt.get(O).__webglTexture,Mt,Be+qe)),z.blitFramebuffer(zt,Qt,zt+Pt,Qt+yt,Nt,ce,Nt+Pt,ce+yt,z.DEPTH_BUFFER_BIT,z.NEAREST);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||Wt.has(E)){let ue=Wt.get(E),Je=Wt.get(O);xt.bindFramebuffer(z.READ_FRAMEBUFFER,I),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let Ln=0;Ln<wt;Ln++)bi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ue.__webglTexture,J,le+Ln):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ue.__webglTexture,J),Yi?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Je.__webglTexture,Mt,Be+Ln):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Je.__webglTexture,Mt),J!==0?z.blitFramebuffer(zt,Qt,zt+Pt,Qt+yt,Nt,ce,Nt+Pt,ce+yt,z.COLOR_BUFFER_BIT,z.NEAREST):Yi?z.copyTexSubImage3D(Dt,Mt,Nt,ce,Be+Ln,zt,Qt,Pt,yt):z.copyTexSubImage2D(Dt,Mt,Nt,ce,zt,Qt,Pt,yt);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Yi?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Dt,Mt,Nt,ce,Be,Pt,yt,wt,be,en,Ee.data):O.isCompressedArrayTexture?z.compressedTexSubImage3D(Dt,Mt,Nt,ce,Be,Pt,yt,wt,be,Ee.data):z.texSubImage3D(Dt,Mt,Nt,ce,Be,Pt,yt,wt,be,en,Ee):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Mt,Nt,ce,Pt,yt,be,en,Ee.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Mt,Nt,ce,Ee.width,Ee.height,be,Ee.data):z.texSubImage2D(z.TEXTURE_2D,Mt,Nt,ce,Pt,yt,be,en,Ee);xt.pixelStorei(z.UNPACK_ROW_LENGTH,cn),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,qi),xt.pixelStorei(z.UNPACK_SKIP_ROWS,nn),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,wa),Mt===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&z.generateMipmap(Dt),xt.unbindTexture()},this.initRenderTarget=function(E){Wt.get(E).__webglFramebuffer===void 0&&Xt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Xt.setTextureCube(E,0):E.isData3DTexture?Xt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Xt.setTexture2DArray(E,0):Xt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){K=0,G=0,rt=null,xt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},W_=new ss(-1,1,1,-1,0,1),Th=class extends fe{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},X_=new Th,ki=class{constructor(t){this._mesh=new Ct(X_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,W_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Pl=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_i.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ki(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var fa=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Il=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ll=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new ct);this._width=i.width,this._height=i.height,e=new Fe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ge}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pl(js),this.copyPass.material.blending=di,this.timer=new Zr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}fa!==void 0&&(a instanceof fa?i=!0:a instanceof Il&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Nl=class extends Tn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new It}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var dd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var tr=class n extends Tn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new It(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fe(r,a,{type:Ge,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new Fe(r,a,{type:Ge,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new Fe(r,a,{type:Ge,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=dd;this.highPassUniforms=_i.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_i.clone(js.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:js.vertexShader,fragmentShader:js.fragmentShader,premultipliedAlpha:!0,blending:pi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new It,this._oldClearAlpha=1,this._basic=new dn,this._fsQuad=new ki(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<t;a+=2){let o=e[a],l=a+1<t?e[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}};tr.BlurDirectionX=new ct(1,0);tr.BlurDirectionY=new ct(0,1);var da={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Dl=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=_i.clone(da.uniforms),this.material=new Vs({name:da.name,uniforms:this.uniforms,vertexShader:da.vertexShader,fragmentShader:da.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===$r?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===os?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function wn(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new fe;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=pd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let M=0;M<a[h].length;++M)d.push(a[h][M][f]);let p=pd(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function pd(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new ke(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<e;p++){let M=h.getComponent(f,p);o.setComponent(f+u,p,M)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var Kn=[{id:"jk",name:"JK Racing",driver:"J. Koppanalil",code:"JKO",num:7,paint:"#0d0f0d",accent:"#b8f36b",helmet:"#b8f36b"},{id:"rossa",name:"Scuderia Rossa",driver:"L. Ferraro",code:"FER",num:16,paint:"#c8102e",accent:"#f6d200",helmet:"#f6d200"},{id:"silver",name:"Silver Arrow",driver:"H. Weber",code:"WEB",num:44,paint:"#b9c2c9",accent:"#00d2be",helmet:"#7a1fd0"},{id:"bull",name:"Blue Bull",driver:"M. Vos",code:"VOS",num:1,paint:"#14214d",accent:"#ff2740",helmet:"#ffd21f"},{id:"papaya",name:"Papaya GP",driver:"O. Prior",code:"PRI",num:81,paint:"#ff8000",accent:"#1e2a3a",helmet:"#ff8000"},{id:"verde",name:"Verde F1",driver:"F. Alvarez",code:"ALV",num:14,paint:"#00594f",accent:"#cedc00",helmet:"#00a3e0"},{id:"azure",name:"Azure Alpine",driver:"P. Garnier",code:"GAR",num:10,paint:"#1572d9",accent:"#ff87bc",helmet:"#ffffff"},{id:"steel",name:"Steel Works",driver:"N. Holm",code:"HOL",num:27,paint:"#e8e8e8",accent:"#b6000e",helmet:"#222222"},{id:"oxford",name:"Oxford Racing",driver:"A. Albion",code:"ALB",num:23,paint:"#0a1e6e",accent:"#e8e8e8",helmet:"#00a0de"},{id:"neon",name:"Neon Bulls",driver:"Y. Tanaka",code:"TAN",num:22,paint:"#e8e8f8",accent:"#2b4bff",helmet:"#ff2740"}],q_={jk:[0,"#ffffff","KOPPA ENERGY"],rossa:[2,"#ffffff","APEX OIL"],silver:[3,"#111111","HELIX"],bull:[1,"#ffd21f","ORBIT"],papaya:[1,"#00a0de","ZEPHYR"],verde:[0,"#ffffff","QUANTA"],azure:[1,"#ffffff","SUMMIT AIR"],steel:[3,"#111111","VELOCITY"],oxford:[2,"#d4141f","LIME TELECOM"],neon:[0,"#ff2740","NOVA"]};Kn.forEach((n,t)=>{let e=q_[n.id];n.pat=e[0],n.third=e[1],n.sponsor=e[2],n.tcam=t%2?"#ffe600":"#0b0b0b"});var md={soft:"#e8202a",medium:"#f3d11a",hard:"#f2f2f2"};function Hi(n,t=18,e=2.5){let i=[],s=[],r=n.length;for(let l of n){let c=l.n||e;for(let h=0;h<t;h++){let u=h/t*Math.PI*2,f=Math.cos(u),d=Math.sin(u);i.push((l.x||0)+Math.sign(f)*Math.abs(f)**(2/c)*l.w/2,l.y+Math.sign(d)*Math.abs(d)**(2/c)*l.h/2,l.z)}}for(let l=0;l<r-1;l++)for(let c=0;c<t;c++){let h=l*t+c,u=l*t+(c+1)%t,f=h+t,d=u+t;s.push(h,f,u,u,f,d)}let a=(l,c)=>{let h=i.length/3,u=n[l];i.push(u.x||0,u.y,u.z);for(let f=0;f<t;f++){let d=l*t+f,p=l*t+(f+1)%t;c?s.push(h,p,d):s.push(h,d,p)}};a(0,n[0].z<n[1].z),a(r-1,n[r-1].z>n[r-2].z);let o=new fe;return o.setAttribute("position",new kt(i,3)),o.setIndex(s),o.computeVertexNormals(),Xe(o)}function Xe(n){let t=n.index?n.toNonIndexed():n;for(let e of Object.keys(t.attributes))e!=="position"&&e!=="normal"&&t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t}var Y_=(n,t,e,i,s,r,a=0,o=0,l=0)=>Xe(new Me(n,t,e).rotateX(a).rotateY(o).rotateZ(l).translate(i,s,r));function wh(n,t,e=.018){let i=new D(...n),s=new D(...t),r=s.clone().sub(i),a=new pn(e,e,r.length(),6);return a.applyQuaternion(new an().setFromUnitVectors(new D(0,1,0),r.clone().normalize())),a.translate((i.x+s.x)/2,(i.y+s.y)/2,(i.z+s.z)/2),Xe(a)}var mn={front:1.85,rear:-1.75,r:.36};function yi(n,t=10){let e=d=>5*(.2969*Math.sqrt(d)-.126*d-.3516*d*d+.2843*d**3-.1036*d**4),i=t*2,s=[],r=[];n.forEach(([d,p,M,m,g,_=0])=>{let y=Math.cos(_),v=Math.sin(_);for(let A=0;A<i;A++){let w=A<=t,x=w?A:i-A,b=(1-Math.cos(Math.PI*x/t))/2,L=Math.max(e(b)*g*m,.003)*(w?1:-1)+.05*m*Math.sin(Math.PI*b)*.4,P=-b*m,U=L;s.push(d,p+U*y-P*v,M+P*y+U*v)}});for(let d=0;d<n.length-1;d++)for(let p=0;p<i;p++){let M=d*i+p,m=d*i+(p+1)%i,g=M+i,_=m+i;r.push(M,g,m,m,g,_)}[0,n.length-1].forEach((d,p)=>{let M=s.length/3,m=0,g=0,_=0;for(let y=0;y<i;y++)m+=s[(d*i+y)*3],g+=s[(d*i+y)*3+1],_+=s[(d*i+y)*3+2];s.push(m/i,g/i,_/i);for(let y=0;y<i;y++)p?r.push(d*i+y,M,d*i+(y+1)%i):r.push(d*i+y,d*i+(y+1)%i,M)});let a=new fe;a.setAttribute("position",new kt(s,3)),a.setIndex(r),a.computeVertexNormals();let o=a.attributes.position,l=a.index.array,c=new D,h=new D,u=new D,f=0;for(let d=0;d<l.length;d+=3)c.fromBufferAttribute(o,l[d]),h.fromBufferAttribute(o,l[d+1]),u.fromBufferAttribute(o,l[d+2]),f+=c.dot(h.cross(u));if(f<0){for(let d=0;d<l.length;d+=3){let p=l[d+1];l[d+1]=l[d+2],l[d+2]=p}a.computeVertexNormals()}return Xe(a)}function Ah(n,t,e,i,s,r,a,o=12,l=1,c=0){let h=[];for(let u=-o;u<=o;u++){let f=u/o,d=Math.abs(f)**2.4;h.push([f*n,t+e*d,i+c*d,s*(1-(1-l)*d),r,a*(1-.4*d)])}return yi(h)}function Gi(n,t,e){let i=new Ii;return n.forEach(([s,r],a)=>a?i.lineTo(s,r):i.moveTo(s,r)),i.closePath(),Xe(new ns(i,{depth:t,bevelEnabled:!0,bevelThickness:t*.3,bevelSize:t*.3,bevelSegments:1,curveSegments:6}).rotateY(-Math.PI/2).translate(e+t/2,0,0))}var Ul=null;function Z_(){if(Ul)return Ul;let n={paint:[],accent:[],carbon:[],black:[],helmet:[],glow:[],chrome:[]},t={paint:[],accent:[],carbon:[]},e={paint:[],accent:[],carbon:[]};n.paint.push(Hi([{z:2.98,w:.12,h:.07,y:.2},{z:2.9,w:.17,h:.11,y:.215},{z:2.6,w:.24,h:.17,y:.26},{z:2.2,w:.31,h:.23,y:.32},{z:1.75,w:.38,h:.29,y:.38},{z:1.3,w:.46,h:.34,y:.43},{z:.9,w:.56,h:.4,y:.47},{z:.5,w:.64,h:.44,y:.5},{z:.1,w:.7,h:.45,y:.505},{z:-.38,w:.72,h:.46,y:.505},{z:-.6,w:.7,h:.44,y:.5}],32,2.3)),n.accent.push(Hi([{z:3,w:.08,h:.05,y:.2},{z:2.97,w:.12,h:.075,y:.203},{z:2.88,w:.175,h:.115,y:.217}],24,2.3)),n.black.push(Xe(new Pn(.5,32).scale(.42,.82,1).rotateX(-Math.PI/2).translate(0,.728,-.02))),n.carbon.push(Xe(new Ni(.5,.028,8,36).scale(.44,.86,1).rotateX(-Math.PI/2).translate(0,.73,-.02))),n.paint.push(Hi([{z:-.28,w:.26,h:.05,y:.99},{z:-.3,w:.36,h:.36,y:.86},{z:-.42,w:.44,h:.5,y:.81},{z:-.7,w:.5,h:.54,y:.77},{z:-1.1,w:.46,h:.44,y:.71},{z:-1.55,w:.34,h:.34,y:.64},{z:-1.95,w:.24,h:.25,y:.58},{z:-2.3,w:.13,h:.14,y:.52},{z:-2.42,w:.06,h:.07,y:.5}],28,2.4)),n.black.push(Xe(new Pn(.5,24).scale(.17,.12,1).translate(0,.945,-.275))),n.carbon.push(Xe(new Ni(.5,.02,6,24).scale(.18,.13,1).translate(0,.945,-.277))),[1,-1].forEach(c=>{let h=Hi([{z:.42,w:.42,h:.08,y:.52},{z:.4,w:.46,h:.32,y:.5},{z:.2,w:.5,h:.36,y:.5},{z:-.2,w:.48,h:.34,y:.5},{z:-.7,w:.42,h:.3,y:.49},{z:-1.2,w:.3,h:.24,y:.46},{z:-1.65,w:.16,h:.16,y:.42}].map(u=>({...u,x:c*(.36+u.w/2-.02)})),28,2.7);n.paint.push(h),n.black.push(Xe(new Pn(.5,24).scale(.4,.26,1).translate(c*.57,.5,.405))),n.carbon.push(Hi([{z:.38,w:.42,h:.06,y:.3},{z:-.4,w:.4,h:.06,y:.3},{z:-1.2,w:.26,h:.05,y:.3}].map(u=>({...u,x:c*(.36+u.w/2)})),12,3))}),[1,-1].forEach(c=>n.accent.push(Xe(new Ae(.06,1.5).rotateX(-Math.PI/2).rotateZ(c*.12).translate(c*.58,.677,-.38))));let i=new Ii;i.moveTo(-.38,1.05),i.bezierCurveTo(-.7,.9,-.86,.55,-.86,.2),i.lineTo(-.86,-1.1),i.bezierCurveTo(-.86,-1.35,-.6,-1.45,-.56,-1.6),i.lineTo(-.54,-2.2),i.lineTo(.54,-2.2),i.lineTo(.56,-1.6),i.bezierCurveTo(.6,-1.45,.86,-1.35,.86,-1.1),i.lineTo(.86,.2),i.bezierCurveTo(.86,.55,.7,.9,.38,1.05),i.closePath(),n.carbon.push(Xe(new ns(i,{depth:.025,bevelEnabled:!1,curveSegments:10}).rotateX(Math.PI/2).translate(0,.095,0))),[1,-1].forEach(c=>{n.accent.push(yi([[c*.83,.13,.5,.9,.06,-.05],[c*.88,.14,.4,.8,.06,-.05]].sort((h,u)=>h[0]-u[0]),6));for(let h=0;h<3;h++)n.carbon.push(Gi([[1,.095],[.98,.2],[.55,.16],[.5,.095]],.012,c*(.18+h*.07)))}),n.carbon.push(yi([[-.52,.26,-2.18,.32,.05,-.55],[.52,.26,-2.18,.32,.05,-.55]],8));for(let c=-2;c<=2;c++)n.carbon.push(Gi([[-2,.1],[-2.48,.28],[-2.48,.12],[-2.2,.095]],.012,c*.2));n.carbon.push(Hi([{z:-2.2,w:.22,h:.14,y:.38},{z:-2.5,w:.14,h:.1,y:.38},{z:-2.56,w:.08,h:.06,y:.38}],12,2.6)),n.glow.push(Y_(.12,.05,.025,0,.38,-2.565));let s=new Ii;s.moveTo(-.55,.98),s.bezierCurveTo(-1.2,.98,-1.9,.84,-2.2,.62),s.lineTo(-2.26,1.14),s.bezierCurveTo(-1.8,1.12,-1.2,1.08,-.55,.98),n.paint.push(Xe(new ns(s,{depth:.012,bevelEnabled:!1,curveSegments:10}).rotateY(-Math.PI/2).translate(.006,0,0)));let r=[[-.29,.72,-.3],[-.31,.84,-.05],[-.22,.91,.24],[0,.93,.35],[.22,.91,.24],[.31,.84,-.05],[.29,.72,-.3]].map(c=>new D(...c));n.carbon.push(Xe(new Gs(new fi(r),40,.033,10))),n.paint.push(Xe(new Gs(new fi(r.slice(1,6)),24,.038,10).scale(1,.9,1).translate(0,-.004,0))),n.carbon.push(wh([0,.93,.35],[0,.76,.55],.03)),[1,-1].forEach(c=>{n.paint.push(Hi([{z:.37,w:.16,h:.075,y:.845,x:c*.45},{z:.3,w:.17,h:.08,y:.845,x:c*.45},{z:.25,w:.15,h:.07,y:.845,x:c*.45}],16,3)),n.chrome.push(Xe(new Ae(.14,.06).rotateY(Math.PI).translate(c*.45,.845,.245))),n.carbon.push(wh([c*.3,.78,.3],[c*.44,.84,.3],.012))});let a=(c,h,u,f)=>{[[.46,.3],[.31,.24]].forEach(([d,p])=>[1,-1].forEach(M=>{n.carbon.push(yi([[M*h,d,f+.2,.05,.3],[M*u,p+.12,c+.02,.05,.3]].sort((m,g)=>m[0]-g[0]),4)),n.carbon.push(yi([[M*h,d,f-.14,.05,.3],[M*u,p+.12,c+.02,.05,.3]].sort((m,g)=>m[0]-g[0]),4))})),[1,-1].forEach(d=>n.carbon.push(wh([d*h,.26,f],[d*u,.5,c-.02],.013)))};a(mn.front,.2,.62,mn.front),a(mn.rear,.3,.56,mn.rear+.05),[1,-1].forEach(c=>{n.carbon.push(Hi([{z:mn.front+.2,w:.07,h:.16,y:.4,x:c*.6},{z:mn.front,w:.09,h:.2,y:.38,x:c*.62},{z:mn.front-.2,w:.07,h:.16,y:.38,x:c*.6}],12,3)),n.carbon.push(yi([[c*.66,.76,mn.front+.18,.32,.06,.1],[c*.98,.74,mn.front+.14,.26,.06,.1]].sort((h,u)=>h[0]-u[0]),6))}),n.helmet.push(Xe(new Li(.14,24,16).scale(1,1.04,1.13).translate(0,.84,-.07))),n.black.push(Xe(new Li(.142,20,8,Math.PI/2-.85,1.7,1.15,.45).scale(1,1.04,1.13).translate(0,.84,-.07))),n.black.push(Xe(new pn(.08,.1,.1,12).translate(0,.73,-.07))),t.carbon.push(Ah(.98,.085,.03,3,.3,.06,-.04,14,.9,-.06)),[[2.74,.125,.1,.16,-.32,"a"],[2.6,.17,.16,.13,-.5,"a"],[2.49,.215,.2,.1,-.7,"p"]].forEach(([c,h,u,f,d,p])=>(p==="a"?t.accent:t.paint).push(Ah(.96,h,u,c,f,.07,d,14,.7,-.12))),[1,-1].forEach(c=>{t.carbon.push(Gi([[3.04,.05],[3.04,.2],[2.86,.36],[2.5,.4],[2.38,.3],[2.38,.05]],.014,c*.975)),t.accent.push(Gi([[3,.06],[3,.1],[2.42,.1],[2.42,.06]],.016,c*.975))}),[1,-1].forEach(c=>t.carbon.push(Gi([[2.98,.1],[2.95,.23],[2.62,.26],[2.6,.1]],.012,c*.13))),e.paint.push(Ah(.5,.86,.06,-2.08,.3,.09,.22,12,.85,.04)),e.carbon.push(yi([[-.5,.44,-2.12,.2,.08,.3],[.5,.44,-2.12,.2,.08,.3]],8)),e.carbon.push(yi([[-.5,.38,-2.24,.14,.08,.35],[.5,.38,-2.24,.14,.08,.35]],8)),[1,-1].forEach(c=>{e.carbon.push(Gi([[-2,.36],[-1.98,.78],[-2.06,1.02],[-2.2,1.12],[-2.5,1.1],[-2.6,.92],[-2.6,.36]],.018,c*.5)),e.accent.push(Gi([[-2.06,1.02],[-2.2,1.12],[-2.5,1.1],[-2.52,1.06],[-2.2,1.07],[-2.08,.98]],.02,c*.5))}),e.carbon.push(Gi([[-2.12,.45],[-2.14,.86],[-2.26,.86],[-2.26,.45]],.04,0));let o=c=>c.length?wn(c.map(h=>h.index?h.toNonIndexed():h)):null,l=c=>Object.fromEntries(Object.entries(c).map(([h,u])=>[h,o(u)]).filter(([,h])=>h));return Ul={...l(n),fw:l(t),rw:l(e)},Ul}var Rh={};function J_(n,t){let e=n+t;if(Rh[e])return Rh[e];let i=mn.r,s=n,r=s/2,a=[[.229,-r],[.285,-r],[.29,-r-.001],[.312,-r-.001],[.318,-r],[.335,-r+.008],[.354,-r+.03],i,[.354,r-.03],[.335,r-.008],[.318,r],[.312,r+.001],[.29,r+.001],[.285,r],[.229,r]],o=[];a.forEach(m=>{m===i?o.push(new ct(i,-r+.065),new ct(i,r-.065)):o.push(new ct(m[0],m[1]))});let l=new Gr(o,36).toNonIndexed(),c=[],h=new It("#141416"),u=new It(md[t]),f=l.attributes.position;for(let m=0;m<f.count;m+=3){let g=!0;for(let y=0;y<3;y++){let v=f.getX(m+y),A=f.getZ(m+y),w=Math.hypot(v,A),x=f.getY(m+y);w>.287&&w<.316&&Math.abs(x)>r-.002||(g=!1)}let _=g?u:h;for(let y=0;y<3;y++)c.push(_.r,_.g,_.b)}l.setAttribute("color",new kt(c,3));let d=(m,g)=>{m=m.index?m.toNonIndexed():m;for(let v of Object.keys(m.attributes))v!=="position"&&v!=="normal"&&m.deleteAttribute(v);let _=new It(g),y=[];for(let v=0;v<m.attributes.position.count;v++)y.push(_.r,_.g,_.b);return m.setAttribute("color",new kt(y,3)),m};for(let m of Object.keys(l.attributes))["position","normal","color"].includes(m)||l.deleteAttribute(m);let p=[l,d(new pn(.228,.228,s-.03,24,1,!0),"#26272b"),d(new pn(.2,.2,.01,24).translate(0,r-.02,0),"#18191c"),d(new pn(.2,.2,.01,24).translate(0,-r+.02,0),"#18191c")];for(let m=0;m<5;m++)[1,-1].forEach(g=>p.push(d(new Me(.035,.012,.19).translate(0,g*(r-.012),.1).rotateY(m/5*Math.PI*2),"#9a9ea6")));[1,-1].forEach(m=>p.push(d(new pn(.045,.045,.02,12).translate(0,m*(r-.008),0),"#d8b23a")));let M=wn(p).rotateZ(Math.PI/2);return Rh[e]=M,M}var us=null;function $_(){if(us)return us;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.fillStyle="#1a1b1e",t.fillRect(0,0,64,64);for(let e=0;e<8;e++)for(let i=0;i<8;i++)t.fillStyle=(e+i)%2?"#24262a":"#141518",t.fillRect(e*8,i*8,8,4),t.fillStyle=(e+i)%2?"#141518":"#24262a",t.fillRect(e*8,i*8+4,8,4);return us=new Sn(n),us.wrapS=us.wrapT=ci,us.colorSpace=Pe,us}var vi={};function K_(){if(vi.carbon)return vi;let n=$_();n.repeat.set(6,6),vi.carbon=new is({color:"#3a3d42",map:n,roughness:.38,metalness:.3,clearcoat:.6,clearcoatRoughness:.2}),vi.black=new Kt({color:"#060607",roughness:.25,metalness:.2}),vi.chrome=new Kt({color:"#cfd8e0",roughness:.05,metalness:1}),vi.wheel=new Kt({vertexColors:!0,roughness:.78,metalness:.1});let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),i=e.createRadialGradient(64,64,4,64,64,64);return i.addColorStop(0,"rgba(0,0,0,.75)"),i.addColorStop(.6,"rgba(0,0,0,.4)"),i.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=i,e.fillRect(0,0,128,128),vi.blob=new dn({map:new Sn(t),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),vi.blobGeo=new Ae(2.6,6.4).rotateX(-Math.PI/2),vi}function Q_(n){let t=new is({color:n.paint,roughness:.32,metalness:.12,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.8}),e={uB:{value:new It(n.accent)},uC:{value:new It(n.third)},uPat:{value:n.pat}};return t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP; uniform vec3 uB; uniform vec3 uC; uniform float uPat;`).replace("#include <color_fragment>",`#include <color_fragment>
      { float y = vLP.y, z = vLP.z, x = abs(vLP.x), m = 0.;
        if (uPat < .5) m = 1. - smoothstep(.43 + z * .035, .45 + z * .035, y);
        else if (uPat < 1.5) m = 1. - smoothstep(.05, .065, abs(y - (.56 + z * .085)));
        else if (uPat < 2.5) m = smoothstep(1.5, 1.9, z) + (1. - smoothstep(-1.6, -1.15, z)) * step(.6, y);
        else m = 1. - smoothstep(.08, .095, x);
        float pin = (1. - smoothstep(.008, .014, abs(y - (.6 + z * .03)))) * step(-1.7, z) * step(z, 1.1) * step(.3, x);
        diffuseColor.rgb = mix(mix(diffuseColor.rgb, uB, clamp(m, 0., 1.)), uC, pin); }`)},t.customProgramCacheKey=()=>"livery",t}function j_(n){let t=new It(n);return .3*t.r+.59*t.g+.11*t.b}function tv(n){let t=document.createElement("canvas");t.width=512,t.height=96;let e=t.getContext("2d"),i=j_(n.paint)>.45;e.font="900 italic 64px Arial",e.textAlign="center",e.textBaseline="middle",e.lineWidth=6,e.strokeStyle=i?"rgba(255,255,255,.6)":"rgba(0,0,0,.5)",e.strokeText(n.sponsor,256,50),e.fillStyle=i?"#111":"#fff",e.fillText(n.sponsor,256,50);let s=new Sn(t);return s.colorSpace=Pe,s.anisotropy=4,s}var Ch={};function ev(n){if(Ch[n])return Ch[n];let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=128/.335;e.strokeStyle=md[n],e.lineWidth=7,[0,Math.PI].forEach(r=>{e.beginPath(),e.arc(128,128,.301*i,r+.55,r+2.6),e.stroke()}),e.fillStyle="#f2f2f2",e.font="bold 19px Arial",e.textAlign="center",e.textBaseline="middle",[0,Math.PI].forEach(r=>{let a="NOVA",o=.262*i;[...a].forEach((l,c)=>{let h=r-.32+c*.21;e.save(),e.translate(128+Math.cos(h-Math.PI/2)*o,128+Math.sin(h-Math.PI/2)*o),e.rotate(h),e.fillText(l,0,0),e.restore()})});let s=new Sn(t);return s.colorSpace=Pe,s.anisotropy=4,Ch[n]=new Kt({map:s,transparent:!0,alphaTest:.3,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-1})}var Ph={};function nv(n){if(Ph[n])return Ph[n];let t=n/2+.003;return Ph[n]=wn([new Hs(.23,.335,40).rotateY(Math.PI/2).translate(t,0,0),new Hs(.23,.335,40).rotateY(-Math.PI/2).translate(-t,0,0)])}function iv(n){let t=document.createElement("canvas");t.width=256,t.height=64;let e=t.getContext("2d");e.fillStyle=n.paint,e.fillRect(0,0,256,64),e.fillStyle=n.accent,e.fillRect(0,50,256,14),e.font="900 italic 44px Arial",e.textBaseline="middle",e.fillStyle="#fff",e.strokeStyle="rgba(0,0,0,.55)",e.lineWidth=4,e.strokeText(String(n.num),14,28),e.fillText(String(n.num),14,28),e.font="800 22px Arial",e.fillStyle=n.accent,e.fillText(n.name.toUpperCase(),90,28);let i=new Sn(t);return i.colorSpace=Pe,i.anisotropy=4,i}var pa={};function sv(){return pa.g||(pa.g=new Pn(.226,32))}function rv(n){if(pa[n.id])return pa[n.id];let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.fillStyle="#16171a",e.beginPath(),e.arc(64,64,64,0,7),e.fill(),e.strokeStyle=n.accent,e.lineWidth=7,e.beginPath(),e.arc(64,64,54,0,7),e.stroke(),e.fillStyle="#2b2d31",e.beginPath(),e.arc(64,64,16,0,7),e.fill(),e.fillStyle="#d8b23a",e.beginPath(),e.arc(64,64,7,0,7),e.fill();let i=new Sn(t);return i.colorSpace=Pe,pa[n.id]=new Kt({map:i,roughness:.45,metalness:.5,polygonOffset:!0,polygonOffsetFactor:-1})}function Ih(n,t="soft",e={}){let i=Z_(),s=K_(),r=new He,a=new He;r.add(a);let o=(G,rt=.32)=>new is({color:G,roughness:rt,metalness:.12,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:.8}),l={paint:Q_(n),accent:o(n.accent,.32),helmet:o(n.helmet,.25),glow:new Kt({color:"#400",emissive:"#ff2020",emissiveIntensity:1})},c=(G,rt)=>{let Z=new Ct(G,rt);return Z.castShadow=!0,Z.receiveShadow=!0,a.add(Z),Z};c(i.paint,l.paint),c(i.accent,l.accent),c(i.carbon,s.carbon),c(i.black,s.black);let h=c(i.helmet,l.helmet);c(i.glow,l.glow),c(i.chrome,s.chrome);let u=G=>{let rt=new He;return[["paint",l.paint],["accent",l.accent],["carbon",s.carbon]].forEach(([Z,et])=>{if(!G[Z])return;let at=new Ct(G[Z],et);at.castShadow=!0,rt.add(at)}),a.add(rt),rt},f=u(i.fw),d=u(i.rw),p=new Kt({map:iv(n),roughness:.4,metalness:.2,polygonOffset:!0,polygonOffsetFactor:-1});[1,-1].forEach(G=>{let rt=new Ct(new Ae(.8,.1),p);rt.position.set(G*.008,.99,-1.55),rt.rotation.y=G*Math.PI/2,a.add(rt)});let M=new Ct(new Ae(.3,.075).rotateZ(Math.PI/2).rotateX(-Math.PI/2).rotateX(.15),p);M.position.set(0,.558,1.6),a.add(M);let m=new Kt({map:tv(n),alphaTest:.45,roughness:.35,metalness:.1,polygonOffset:!0,polygonOffsetFactor:-2});[1,-1].forEach(G=>{let rt=new Ct(new Ae(.8,.16),m);rt.position.set(G*.865,.5,-.2),rt.rotation.y=G*(Math.PI/2+.1),a.add(rt)});let g=new Ct(new Ae(.9,.2).rotateZ(Math.PI).rotateX(-Math.PI/2).rotateX(.22).translate(0,.905,-2.21),m);d.add(g);let _=new Ct(new Me(.1,.055,.15),new Kt({color:n.tcam,roughness:.4}));_.position.set(0,1.065,-.47),_.castShadow=!0,a.add(_);let y=new He;y.position.set(0,.985,-2.36);let v=new Ct(yi([[-.49,0,0,.22,.1,0],[.49,0,0,.22,.1,0]],8),l.accent);v.castShadow=!0,y.add(v),y.rotation.x=.55,d.add(y);let A=[],w=[];[[mn.front,.82,.3],[mn.rear,.78,.4]].forEach(([G,rt,Z],et)=>[1,-1].forEach(at=>{let bt=new He;bt.position.set(at*rt,mn.r,G);let Lt=new Ct(J_(Z,t),s.wheel);Lt.castShadow=!0,Lt.add(new Ct(nv(Z),ev(t))),bt.add(Lt);let tt=new Ct(sv(Z),rv(n));tt.position.x=at*(Z/2+.004),tt.rotation.y=at>0?Math.PI/2:-Math.PI/2,bt.add(tt),r.add(bt),A.push(Lt),et||w.push(bt)}));let x=new He;x.position.set(0,.7,.34),x.rotation.x=-.5;let b=new Ct(new Me(.3,.13,.04),s.carbon);x.add(b),[-1,1].forEach(G=>{let rt=new Ct(new Me(.06,.17,.06),s.black);rt.position.set(G*.15,-.01,0),x.add(rt)});let L=document.createElement("canvas");L.width=128,L.height=48;let P=new Sn(L);P.colorSpace=Pe;let U=new Ct(new Ae(.13,.05),new dn({map:P,toneMapped:!1}));U.position.set(0,.01,.021),x.add(U);let H=new dn({vertexColors:!0,toneMapped:!1}),$=[];for(let G=0;G<10;G++){let rt=new Me(.012,.01,.005).translate(-.055+G*.0122,.05,.022);$.push(rt)}let I=new Ct(wn($),H),X=new Float32Array(I.geometry.attributes.position.count*3);I.geometry.setAttribute("color",new ke(X,3)),x.add(I),x.visible=!1,a.add(x);let K=new Ct(s.blobGeo,s.blob);return K.position.y=.03,K.renderOrder=1,r.add(K),r.userData={team:n,body:a,helm:h,wheels:A,steer:w,flap:y,fwing:f,rwing:d,mats:l,glow:l.glow,sw:x,swCanvas:L,swTex:P,leds:I,blob:K},r}function gd(n,t,e){let i=n.userData.leds,s=i.geometry.attributes.color,r=s.count/10;for(let a=0;a<10;a++){let o=t*10>a,l=e?[.2,.4,1]:a<4?[.1,1,.2]:a<7?[1,.1,.1]:[.4,.2,1];for(let c=0;c<r;c++)s.setXYZ(a*r+c,...o?l:[.05,.05,.05])}s.needsUpdate=!0}var Lh={dune:{name:"Dune Valley GP",blurb:"Fast sweepers into a desert sunset",time:"sunset",width:15,pts:[[0,0],[700,0],[1050,60],[1180,300],[1050,520],[760,540],[600,700],[700,930],[560,1120],[240,1120],[60,920],[-200,880],[-380,700],[-330,450],[-500,260],[-380,30]]},harbor:{name:"Harbor Night Circuit",blurb:"Tight street circuit under the floodlights",time:"night",width:13,pts:[[0,0],[760,0],[880,60],[870,380],[700,430],[680,600],[880,640],[920,900],[540,930],[470,720],[220,700],[170,930],[-220,940],[-250,520],[-60,470],[-130,70]]},alpine:{name:"Alpine Ring",blurb:"Flowing climb through pine forest",time:"day",width:14,pts:[[0,0],[520,-30],[900,60],[1200,320],[1160,620],[900,720],[700,570],[470,650],[390,900],[110,1010],[-200,870],[-270,570],[-110,390],[-330,210],[-270,40]]}},Fl={day:{sky:["#2f6fcf","#9cc4ee","#dde9f3"],fog:"#bcd2e6",sun:"#fff4e2",sunI:3,hemi:["#d6e8ff","#5d6b45",1.1],dir:[-.4,.75,-.5],exp:1,lamps:0,grass:"#4f7d36"},sunset:{sky:["#2b3a78","#e57b5a","#ffc27a"],fog:"#e7a982",sun:"#ffb56b",sunI:2.6,hemi:["#ffc79a","#4d4636",.75],dir:[-.85,.28,-.35],exp:1.05,lamps:.4,grass:"#8a7a45"},night:{sky:["#02040b","#08142c","#1b2d52"],fog:"#0e1830",sun:"#a8bdf0",sunI:.7,hemi:["#5470b0","#141414",.55],dir:[.3,.8,.4],exp:1.15,lamps:1,grass:"#2f4a2a"}},av=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function ov(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function lv(n){let t=new It(n);return .3*t.r+.59*t.g+.11*t.b}function gn(n,t,e,i,s=8){let r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);let a=new Sn(r);return a.colorSpace=Pe,a.anisotropy=s,i&&(a.wrapS=a.wrapT=ci,a.repeat.set(...i)),a}function Nh(n,t){return new Ct(new Li(5e3,32,16),new De({side:$e,depthWrite:!1,fog:!1,uniforms:{a:{value:new It(n.sky[0])},b:{value:new It(n.sky[1])},c:{value:new It(n.sky[2])},sun:{value:new D(...n.dir).normalize()},night:{value:t?1:0}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 a,b,c,sun; uniform float night; varying vec3 vP; float h(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}
        void main(){ float y=max(vP.y,0.); vec3 col=mix(c,b,smoothstep(0.,.25,y)); col=mix(col,a,smoothstep(.2,.9,y)); float s=max(dot(vP,sun),0.); col+=vec3(1.,.85,.6)*(pow(s,700.)*3.+pow(s,10.)*.3)*(1.-night*.8);
          if(night>.5){ vec3 q=floor(vP*400.); col+=vec3(step(.997,h(q)))*smoothstep(.05,.3,y); } gl_FragColor=vec4(col,1.); }`}))}var ma=class{constructor(t){let e=Lh[t];this.id=t,this.def=e,this.W=e.width;let i=new fi(e.pts.map(([f,d])=>new D(f,0,d)),!0,"centripetal",.5),s=i.getLength(),r=Math.round(s/2);this.L=s,this.N=r,this.ds=s/r;let a=new Float32Array(r),o=new Float32Array(r),l=new Float32Array(r),c=new Float32Array(r),h=i.getSpacedPoints(r);for(let f=0;f<r;f++)a[f]=h[f].x,o[f]=h[f].z;for(let f=0;f<r;f++){let d=(f-1+r)%r,p=(f+1)%r,M=a[p]-a[d],m=o[p]-o[d],g=Math.hypot(M,m);l[f]=M/g,c[f]=m/g}let u=new Float32Array(r);for(let f=0;f<r;f++){let d=(f-4+r)%r,p=(f+4)%r,M=l[d]*c[p]-c[d]*l[p],m=l[d]*l[p]+c[d]*c[p];u[f]=Math.atan2(M,m)/(8*this.ds)}Object.assign(this,{X:a,Z:o,TX:l,TZ:c,K:u}),this.racingLine(),this.speedProfile(),this.zones()}nx(t){return this.TZ[t]}nz(t){return-this.TX[t]}idx(t){let e=this.N;return(Math.floor(t/this.ds)%e+e)%e}pos(t,e,i){let s=this.N,r=t/this.ds,a=(Math.floor(r)%s+s)%s,o=(a+1)%s,l=r-Math.floor(r),c=this.X[a]+(this.X[o]-this.X[a])*l,h=this.Z[a]+(this.Z[o]-this.Z[a])*l,u=this.TX[a]+(this.TX[o]-this.TX[a])*l,f=this.TZ[a]+(this.TZ[o]-this.TZ[a])*l,d=Math.hypot(u,f);return i.x=c+f/d*e,i.z=h+-u/d*e,i.tx=u/d,i.tz=f/d,i}locate(t,e,i=-1){let s=this.N,r=0,a=1e18;if(i<0){for(let u=0;u<s;u+=3){let f=(t-this.X[u])**2+(e-this.Z[u])**2;f<a&&(a=f,r=u)}i=r}for(let u=-40;u<=40;u++){let f=(i+u+s)%s,d=(t-this.X[f])**2+(e-this.Z[f])**2;d<a&&(a=d,r=f)}let o=t-this.X[r],l=e-this.Z[r],c=o*this.TX[r]+l*this.TZ[r],h=o*this.nx(r)+l*this.nz(r);return{i:r,s:((r*this.ds+c)%this.L+this.L)%this.L,lat:h}}racingLine(){let t=this.N,e=this.W/2-1.6,i=new Float32Array(t),s=new Float32Array(t),r=new Float32Array(t);for(let a=0;a<260;a++){for(let l=0;l<t;l++)s[l]=this.X[l]+this.nx(l)*i[l],r[l]=this.Z[l]+this.nz(l)*i[l];let o=a<120?14:6;for(let l=0;l<t;l++){let c=(l-o+t)%t,h=(l+o)%t,u=(s[c]+s[h])/2,f=(r[c]+r[h])/2,d=(u-this.X[l])*this.nx(l)+(f-this.Z[l])*this.nz(l);i[l]=Math.max(-e,Math.min(e,i[l]+(d-i[l])*.5))}}this.RL=i}speedProfile(){let t=this.N,e=new Float32Array(t),i=this.ds,s=a=>this.X[a]+this.nx(a)*this.RL[a],r=a=>this.Z[a]+this.nz(a)*this.RL[a];for(let a=0;a<t;a++){let o=(a-8+t)%t,l=(a+8)%t,c=s(o),h=r(o),u=s(a),f=r(a),d=s(l),p=r(l),M=Math.hypot(u-c,f-h),m=Math.hypot(d-u,p-f),g=Math.hypot(d-c,p-h),_=Math.abs((u-c)*(p-h)-(f-h)*(d-c))/2,y=_<.001?1e5:M*m*g/(4*_);e[a]=Math.min(92,Math.sqrt(30*y))}for(let a=0;a<2;a++)for(let o=0;o<t;o++){let l=t-1-o,c=(l+1)%t;e[l]=Math.min(e[l],Math.sqrt(e[c]*e[c]+72*i))}for(let a=0;a<2;a++)for(let o=0;o<t;o++){let l=(o+1)%t,c=12*(1-e[o]/95)+2;e[l]=Math.min(e[l],Math.sqrt(e[o]*e[o]+2*c*i))}this.VP=e}zones(){let t=this.N,e=this.K;this.kerb=new Uint8Array(t),this.runoff=new Float32Array(t),this.drs=new Uint8Array(t);for(let a=0;a<t;a++)if(Math.abs(e[a])>.0055)for(let l=-14;l<=14;l++)this.kerb[(a+l+t)%t]=1;for(let a=0;a<t;a++){let o=0;for(let l=-40;l<=40;l+=4)o=Math.max(o,Math.abs(e[(a+l+t)%t]));this.runoff[a]=9+av(.003,.014,o)*16}let i=-1,s=0,r=[];for(let a=0;a<t*2;a++){let o=a%t;if(Math.abs(e[o])<.0022?(i<0&&(i=a),s++):(s*this.ds>380&&r.push([i,a]),i=-1,s=0),a>t&&i<0)break}r.forEach(([a,o])=>{for(let l=a+25;l<o-45;l++)this.drs[l%t]=1})}wall(t){return this.W/2+this.runoff[t]}build(t){let e=Fl[this.def.time],i=new He,s=this.N,r=this.W,a=ov(this.id.length*99+7),o=(T,B,k,N,F=10,it=1,C=1,V)=>{let W=[],lt=[],Q=[],st=0,dt=!1,Gt=0;for(let Jt=0;Jt<=s;Jt+=C){let pt=Jt%s;if(!(!V||V(pt))){dt=!1;continue}let Ue=typeof T=="function"?T(pt):T,In=typeof B=="function"?B(pt):B;W.push(this.X[pt]+this.nx(pt)*Ue,k,this.Z[pt]+this.nz(pt)*Ue,this.X[pt]+this.nx(pt)*In,k,this.Z[pt]+this.nz(pt)*In),Gt=Jt*this.ds/F,lt.push(0,Gt,it,Gt),dt&&Q.push(st-2,st,st-1,st-1,st,st+1),st+=2,dt=!0}let ht=new fe;ht.setAttribute("position",new kt(W,3)),ht.setAttribute("uv",new kt(lt,2)),ht.setIndex(Q),ht.computeVertexNormals();let Vt=new Ct(ht,N);return Vt.receiveShadow=!0,i.add(Vt),Vt},l=gn(256,256,(T,B,k)=>{T.fillStyle=e.grass,T.fillRect(0,0,B,k);for(let N=0;N<3e3;N++)T.fillStyle=`rgba(${a()<.5?"255,255,220":"0,20,0"},${.04+a()*.05})`,T.fillRect(a()*B,a()*k,2,2+a()*3);for(let N=0;N<6;N++)T.fillStyle="rgba(0,0,0,.05)",T.fillRect(0,N*42,B,21)},[300,300]),c=new Ct(new Ae(6e3,6e3),new Kt({map:l,roughness:1}));c.rotation.x=-Math.PI/2,c.position.set(400,-.15,500),c.receiveShadow=!0,i.add(c);let h=gn(512,512,(T,B,k)=>{T.fillStyle="#3b3d42",T.fillRect(0,0,B,k);for(let N=0;N<26e3;N++){let F=a();T.fillStyle=F<.5?`rgba(255,255,255,${.03+a()*.05})`:`rgba(0,0,0,${.06+a()*.1})`,T.fillRect(a()*B,a()*k,1+a()*2,1+a()*2)}},[3,1]);h.repeat.set(2,1);let u=10,f=[],d=[],p=[],M=[];for(let T=0;T<=s;T++){let B=T%s;for(let k=0;k<=u;k++){let N=-r/2+r*k/u,F=this.X[B]+this.nx(B)*N,it=this.Z[B]+this.nz(B)*N;f.push(F,.02,it),d.push(k/u*2,T*this.ds/12);let C=Math.abs(N-this.RL[B]),V=Math.max(0,1-C/2.4)*.35,W=1-V;p.push(W,W,W)}if(T<s)for(let k=0;k<u;k++){let N=T*(u+1)+k,F=N+u+1;M.push(N,F,N+1,F,F+1,N+1)}}let m=new fe;m.setAttribute("position",new kt(f,3)),m.setAttribute("uv",new kt(d,2)),m.setAttribute("color",new kt(p,3)),m.setIndex(M),m.computeVertexNormals();let g=new Ct(m,new Kt({map:h,vertexColors:!0,roughness:.82,metalness:0}));g.receiveShadow=!0,i.add(g);let _=new Kt({color:"#cfd0cc",roughness:.85});o(r/2-.45,r/2-.2,.05,_),o(-r/2+.2,-r/2+.45,.05,_);let y=gn(64,256,(T,B,k)=>{for(let N=0;N<8;N++)T.fillStyle=N%2?"#f4f4f0":"#d4141f",T.fillRect(0,N*32,B,32);T.fillStyle="rgba(0,0,0,.15)",T.fillRect(0,0,6,k)},[1,1]),v=new Kt({map:y,roughness:.55});o(r/2-.2,r/2+1.5,.075,v,8,1,1,T=>this.kerb[T]),o(-r/2-1.5,-r/2+.2,.075,v,8,1,1,T=>this.kerb[T]);let A=gn(256,256,(T,B,k)=>{T.fillStyle="#c9b48a",T.fillRect(0,0,B,k);for(let N=0;N<9e3;N++)T.fillStyle=`rgba(${a()<.5?"255,250,230":"90,70,40"},${.15+a()*.2})`,T.fillRect(a()*B,a()*k,2,2)},[1,1]),w=new Kt({map:A,roughness:1}),x=new Kt({color:"#4f6f8f",roughness:.85});o(r/2+1.5,T=>this.wall(T)-.5,.012,w,10,2,1,T=>this.runoff[T]>13),o(T=>-this.wall(T)+.5,-r/2-1.5,.012,w,10,2,1,T=>this.runoff[T]>13),o(r/2+1.5,r/2+4,.015,x,10,1,1,T=>this.runoff[T]<=13),o(-r/2-4,-r/2-1.5,.015,x,10,1,1,T=>this.runoff[T]<=13);let b=["JK RACING","KOPPA ENERGY","NOVA TYRES","APEX OIL","LIME TELECOM","ORBIT WATCHES","VELOCITY","SUMMIT AIR"],L=gn(1024,64,(T,B,k)=>{b.forEach((N,F)=>{let it=F*B/b.length;T.fillStyle=["#111","#b8f36b","#14378a","#d4141f","#f4f4f0","#ff8000","#202020","#00a0de"][F],T.fillRect(it,0,B/b.length,k),T.fillStyle=["#b8f36b","#111","#fff","#fff","#111","#fff","#ffd21f","#fff"][F],T.font="900 30px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText(N,it+B/b.length/2,k/2+2)})},[1,1]);L.wrapS=ci;let P=new Kt({map:L,roughness:.6,side:xn}),U=T=>{let B=[],k=[],N=[],F=0;for(let C=0;C<=s;C++){let V=C%s,W=T*this.wall(V),lt=this.X[V]+this.nx(V)*W,Q=this.Z[V]+this.nz(V)*W;B.push(lt,0,Q,lt,1.25,Q);let st=T*C*this.ds/64;k.push(st,0,st,1),C&&N.push(F-2,F,F-1,F-1,F,F+1),F+=2}let it=new fe;return it.setAttribute("position",new kt(B,3)),it.setAttribute("uv",new kt(k,2)),it.setIndex(N),it.computeVertexNormals(),it};[1,-1].forEach(T=>{let B=new Ct(U(T),P);B.castShadow=B.receiveShadow=!0,i.add(B)});let H=[],$=new Ni(.38,.2,6,10).rotateX(Math.PI/2);for(let T=0;T<s;T+=3){if(this.runoff[T]<18)continue;let B=this.K[T]>0?1:-1,k=B*(this.wall(T)-.45);for(let N=0;N<3;N++)H.push($.clone().translate(this.X[T]+this.nx(T)*k,.2+N*.38,this.Z[T]+this.nz(T)*k))}if(H.length){let T=new Ct(wn(H),new Kt({color:"#1b1c1e",roughness:.9}));T.castShadow=!0,i.add(T)}let I=gn(256,32,(T,B,k)=>{for(let N=0;N<32;N++)for(let F=0;F<4;F++)T.fillStyle=(N+F)%2?"#111":"#f2f2f2",T.fillRect(N*8,F*8,8,8)}),X=new Ct(new Ae(r,2),new Kt({map:I,roughness:.7}));X.rotation.x=-Math.PI/2,X.rotation.z=Math.atan2(-this.TZ[0],this.TX[0])+Math.PI/2,X.position.set(this.X[0],.06,this.Z[0]),i.add(X);let K=[];for(let T=0;T<10;T++){let B=this.L-12-T*9,k=T%2?-3:3,N=this.pos(B,k,{}),F=new Ae(2.4,.25).rotateX(-Math.PI/2).rotateY(Math.atan2(-N.tz,N.tx)+Math.PI/2);F.translate(N.x+N.tx*2.5,.06,N.z+N.tz*2.5),K.push(F)}i.add(new Ct(wn(K),_));let G=this.pos(6,0,{}),rt=Math.atan2(G.tx,G.tz),Z=new He;Z.position.set(G.x,0,G.z),Z.rotation.y=rt;let et=new Kt({color:"#2a2d33",roughness:.4,metalness:.7});[-1,1].forEach(T=>{let B=new Ct(new Me(.6,8,.6),et);B.position.set(T*(r/2+2),4,0),B.castShadow=!0,Z.add(B)});let at=new Ct(new Me(r+5,1.6,.8),et);at.position.y=7.4,Z.add(at);let bt=[];for(let T=0;T<5;T++){let B=new Ct(new Me(1.1,1.1,.3),new Kt({color:"#111"}));B.position.set((T-2)*1.5,7.4,-.5),Z.add(B);let k=new Kt({color:"#300",emissive:"#ff1a1a",emissiveIntensity:0});[-.25,.25].forEach(N=>{let F=new Ct(new Pn(.22,16),k);F.position.set((T-2)*1.5,7.4+N,-.66),F.rotation.y=Math.PI,Z.add(F)}),bt.push(k)}let Lt=new Ct(new Ae(r+4,1.5),new Kt({map:gn(512,48,(T,B,k)=>{T.fillStyle="#b8f36b",T.fillRect(0,0,B,k),T.fillStyle="#0c0d0c",T.font="900 34px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText("JK GRAND PRIX",B/2,k/2+2)}),side:xn}));Lt.position.set(0,9.2,0),Z.add(Lt),i.add(Z),this.lights=bt;let tt=gn(512,128,(T,B,k)=>{T.fillStyle="#2a2c30",T.fillRect(0,0,B,k);for(let N=0;N<k;N+=8){T.fillStyle="rgba(255,255,255,.06)",T.fillRect(0,N,B,1);for(let F=0;F<B;F+=5)T.fillStyle=`hsl(${a()*360},${50+a()*40}%,${40+a()*40}%)`,T.fillRect(F+a()*2,N+2+a()*2,3,4)}},[6,1]),_t=new Kt({map:tt,roughness:.9}),At=new Kt({color:"#d8dade",roughness:.5,metalness:.4}),Ht=(T,B,k,N)=>{let F=this.pos(T,k*N,{}),it=this.pos(B,k*N,{}),C=Math.hypot(it.x-F.x,it.z-F.z),V=(F.x+it.x)/2,W=(F.z+it.z)/2,lt=Math.atan2(it.x-F.x,it.z-F.z),Q=new He;Q.position.set(V,0,W),Q.rotation.y=lt;for(let dt=0;dt<6;dt++){let Gt=new Ct(new Me(2.2,1,C),_t);Gt.position.set(k*(dt*2.2),dt*1.1+.5,0),Gt.castShadow=Gt.receiveShadow=!0,Q.add(Gt)}let st=new Ct(new Me(15,.4,C+2),At);st.position.set(k*5.5,10,0),st.rotation.z=k*.08,st.castShadow=!0,Q.add(st);for(let dt=-1;dt<=1;dt++){let Gt=new Ct(new pn(.25,.25,10,8),At);Gt.position.set(k*12,5,dt*C*.4),Q.add(Gt)}i.add(Q)};Ht(80,330,-1,r/2+13),Ht(380,620,-1,r/2+13);let St=new Kt({color:"#e8e9ec",roughness:.5,metalness:.2}),Ft=this.pos(60,r/2+26,{}),de=this.pos(640,r/2+26,{}),Ot=new Ct(new Me(14,9,Math.hypot(de.x-Ft.x,de.z-Ft.z)),St);Ot.position.set((Ft.x+de.x)/2,4.5,(Ft.z+de.z)/2),Ot.rotation.y=Math.atan2(de.x-Ft.x,de.z-Ft.z),Ot.castShadow=Ot.receiveShadow=!0,i.add(Ot);let jt=new Ct(new Me(14.2,2.2,Ot.geometry.parameters.depth+.2),new Kt({color:"#203040",roughness:.1,metalness:.8,emissive:e.lamps?"#4a6a90":"#000",emissiveIntensity:.6}));jt.position.copy(Ot.position).setY(7),jt.rotation.copy(Ot.rotation),i.add(jt);let ne=[],ot=(T,B)=>Math.atan2(B?-T.tx:T.tx,B?-T.tz:T.tz),gt=gn(64,64,(T,B,k)=>{T.clearRect(0,0,B,k),T.strokeStyle="rgba(205,210,215,1)",T.lineWidth=2.2,T.beginPath(),T.moveTo(0,0),T.lineTo(B,k),T.moveTo(B,0),T.lineTo(0,k),T.stroke()},[1,1]),mt=new Kt({map:gt,alphaTest:.4,side:xn,roughness:.5,metalness:.6}),Rt=T=>{let B=[],k=[],N=[],F=0;for(let C=0;C<=s;C++){let V=C%s,W=T*(this.wall(V)+.05),lt=this.X[V]+this.nx(V)*W,Q=this.Z[V]+this.nz(V)*W;B.push(lt,1.25,Q,lt,4.6,Q);let st=C*this.ds/.9;k.push(st,0,st,3.6),C&&N.push(F-2,F,F-1,F-1,F,F+1),F+=2}let it=new fe;return it.setAttribute("position",new kt(B,3)),it.setAttribute("uv",new kt(k,2)),it.setIndex(N),it.computeVertexNormals(),it};[1,-1].forEach(T=>i.add(new Ct(Rt(T),mt)));let vt=[];for(let T=0;T<s;T+=4)[1,-1].forEach(B=>{let k=B*(this.wall(T)+.12);vt.push(new Me(.1,4.7,.1).translate(this.X[T]+this.nx(T)*k,2.35,this.Z[T]+this.nz(T)*k))});let Zt=new Kt({color:"#7d8288",roughness:.45,metalness:.8});i.add(new Ct(wn(vt),Zt));let Bt=new Kt({color:"#33353a",roughness:.85});o(r/2+9.4,r/2+18.9,.03,Bt,10,1,1,T=>T*this.ds>50&&T*this.ds<660&&this.runoff[T]<10.5),o(r/2+13.9,r/2+14.1,.045,_,10,1,1,T=>T*this.ds>50&&T*this.ds<660&&this.runoff[T]<10.5);let ie=gn(256,128,(T,B,k)=>{let N=T.createLinearGradient(0,0,0,k);N.addColorStop(0,"#2a2d33"),N.addColorStop(1,"#14161a"),T.fillStyle=N,T.fillRect(0,0,B,k),T.fillStyle="#e9eef5";for(let F=0;F<6;F++)T.fillRect(14+F*40,8,26,4);T.fillStyle="#3a3e46";for(let F=0;F<5;F++)T.fillRect(10+F*50,40,36,60);T.fillStyle="#5c616b",T.fillRect(0,108,B,20)}),ae=new Kt({map:ie,emissiveMap:ie,emissive:"#ffffff",emissiveIntensity:.55,roughness:.8});Kn.forEach((T,B)=>{let k=190+B*22,N=this.pos(k,r/2+18.95,{}),F=Math.atan2(-N.tz,N.tx)+0,it=Math.atan2(-this.TZ[this.idx(k)],this.TX[this.idx(k)]),C=Math.atan2(-this.nx(this.idx(k)),-this.nz(this.idx(k))),V=new Ct(new Ae(18,5.6),ae);V.position.set(N.x,2.8,N.z),V.rotation.y=C,i.add(V);let W=gn(512,64,(dt,Gt,ht)=>{dt.fillStyle=T.paint,dt.fillRect(0,0,Gt,ht),dt.fillStyle=T.accent,dt.fillRect(0,ht-8,Gt,8),dt.font="900 italic 34px Arial",dt.textAlign="center",dt.textBaseline="middle",dt.fillStyle=lv(T.paint)>.5?"#111":"#fff",dt.fillText(T.name.toUpperCase(),Gt/2,ht/2-2)}),lt=new Ct(new Ae(18,1.6),new Kt({map:W,roughness:.5,emissiveMap:W,emissive:"#fff",emissiveIntensity:e.lamps?.5:.1}));lt.position.set(N.x,6.6,N.z),lt.rotation.y=C,i.add(lt);let Q=this.pos(k,r/2+this.wall(this.idx(k))-r/2+1.3,{}),st=new Ct(new Me(4.5,2.6,1.8),new Kt({color:T.paint,roughness:.4,metalness:.3}));st.position.set(Q.x,1.3,Q.z),st.rotation.y=Math.atan2(Q.tx,Q.tz)+Math.PI/2,st.castShadow=!0,i.add(st)});let he=T=>gn(128,104,(B,k,N)=>{B.fillStyle="#f4f4f2",B.fillRect(0,0,k,N),B.strokeStyle="#111",B.lineWidth=6,B.strokeRect(3,3,k-6,N-6),B.fillStyle="#111",B.font="900 56px Arial",B.textAlign="center",B.textBaseline="middle",B.fillText(T,k/2,N/2+3)}),z={150:[],100:[],50:[]},Te=[],ee=[],xe=-1e9;for(let T=0;T<s;T++){let B=this.VP[T];if(!(B<this.VP[(T-1+s)%s]&&B<=this.VP[(T+1)%s]))continue;let k=0;for(let it=1;it<220;it++)k=Math.max(k,this.VP[(T-it+s)%s]);if(k-B<16)continue;let N=T*this.ds;if(N-xe<140)continue;xe=N,ee.push([N,k-B,this.K[T]>0?1:-1]);let F=this.K[T]>0?1:-1;[150,100,50].forEach(it=>{let C=this.pos(N-35-it,F*(r/2+3.2),{}),V=ot(C,!0);z[it].push(new Ae(1.15,.95).rotateY(V).translate(C.x,1.5,C.z)),Te.push(new Me(.08,1.1,.08).translate(C.x-C.tx*.05,.55,C.z-C.tz*.05))})}Object.entries(z).forEach(([T,B])=>{B.length&&i.add(new Ct(wn(B),new Kt({map:he(T),roughness:.6})))});let xt=[];for(let T=0;T<s;T++)if(this.drs[T]&&!this.drs[(T-1+s)%s]){let B=this.pos(T*this.ds-4,-(r/2+3.4),{});xt.push(new Ae(2.4,1).rotateY(ot(B,!0)).translate(B.x,2.1,B.z)),Te.push(new Me(.1,1.7,.1).translate(B.x,.85,B.z));let k=this.pos(T*this.ds,0,{});i.add(Object.assign(new Ct(new Ae(r,.3).rotateX(-Math.PI/2).rotateY(Math.atan2(k.tx,k.tz)+Math.PI/2).translate(k.x,.05,k.z),_)))}xt.length&&i.add(new Ct(wn(xt),new Kt({map:gn(256,104,(T,B,k)=>{T.fillStyle="#0c0d0c",T.fillRect(0,0,B,k),T.fillStyle="#2ee66b",T.font="900 italic 64px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText("DRS",B/2,k/2+3),T.fillRect(0,k-10,B,10)}),emissive:"#2ee66b",emissiveIntensity:e.lamps?.25:0,roughness:.5}))),Te.length&&i.add(new Ct(wn(Te),Zt));{let T=this.L-135,B=this.idx(T),k=this.wall(B)+2,N=this.wall(B)+2,F=this.pos(T,(k-N)/2,{}),it=new He;it.position.set(F.x,0,F.z),it.rotation.y=Math.atan2(F.tx,F.tz);let C=gn(1024,128,(Q,st,dt)=>{Q.fillStyle="#0d2b1e",Q.fillRect(0,0,st,dt),Q.fillStyle="#d8b23a",Q.fillRect(0,0,st,6),Q.fillRect(0,dt-6,st,6),Q.font="900 64px Georgia",Q.textAlign="center",Q.textBaseline="middle",Q.fillStyle="#f2e6c4",Q.fillText("ORBIT",st*.3,dt/2+2),Q.fillText("ORBIT",st*.78,dt/2+2),Q.beginPath(),Q.arc(st*.54,dt/2,46,0,7),Q.fillStyle="#f7f3e8",Q.fill(),Q.strokeStyle="#d8b23a",Q.lineWidth=5,Q.stroke(),Q.strokeStyle="#111",Q.lineWidth=4,Q.beginPath(),Q.moveTo(st*.54,dt/2),Q.lineTo(st*.54+20,dt/2-22),Q.moveTo(st*.54,dt/2),Q.lineTo(st*.54-30,dt/2+4),Q.stroke()}),V=new Kt({color:"#0d2b1e",roughness:.5}),W=new Kt({map:C,roughness:.5,emissiveMap:C,emissive:"#fff",emissiveIntensity:e.lamps?.45:.05}),lt=new Ct(new Me(k+N+2,2.4,1.4),[V,V,V,V,W,W]);lt.position.y=8.2,lt.castShadow=!0,it.add(lt),[-1,1].forEach(Q=>{let st=new Ct(new Me(1,9.4,1),Zt);st.position.set(Q*((k+N)/2+.5),4.7,0),st.castShadow=!0,it.add(st)}),i.add(it)}ee.sort((T,B)=>B[1]-T[1]).filter(T=>T[0]>800&&T[0]<this.L-300).slice(0,2).forEach(([T,,B])=>{let k=this.idx(T),N=this.wall(k)+16;Ht(T-30,T+30,B,N);for(let F=-40;F<=40;F+=10){let it=this.pos(T+F,B*(N+6),{});ne.push([it.x,it.z])}});let Ce=new pn(.25,.35,3,6).translate(0,1.5,0),Wt=this.def.time==="day"?new Bs(2.4,7,7).translate(0,6,0):new Hr(2.8,0).translate(0,4.5,0),Xt=ne;for(let T=0;T<760;T+=20)[-1,1].forEach(B=>{let k=this.pos(T,B*(r/2+30),{});Xt.push([k.x,k.z])});let R=[];for(let T=0;T<2600&&R.length<900;T++){let B=-900+a()*2700,k=-700+a()*2600,N=!Xt.some(([F,it])=>(B-F)**2+(k-it)**2<1600);for(let F=0;N&&F<s;F+=6)if((B-this.X[F])**2+(k-this.Z[F])**2<(this.wall(F)+14)**2){N=!1;break}N&&R.push([B,k,.7+a()*.7])}let S=(T,B)=>{let k=new ts(T,B,R.length),N=new Oe;R.forEach(([F,it,C],V)=>{N.position.set(F,0,it),N.scale.setScalar(C),N.rotation.y=C*9,N.updateMatrix(),k.setMatrixAt(V,N.matrix)}),k.castShadow=!0,i.add(k)};S(Ce,new Kt({color:"#5b4330",roughness:.95})),S(Wt,new Kt({color:this.def.time==="sunset"?"#5e6b2c":"#2f5d2c",roughness:.9,flatShading:!0}));let q=[];for(let T=0;T<40;T++){let B=T/40*Math.PI*2,k=2600+a()*600,N=120+a()*380;q.push(new Bs(300+a()*300,N,6).translate(400+Math.cos(B)*k,N/2-20,500+Math.sin(B)*k))}if(i.add(new Ct(wn(q),new Kt({color:this.def.time==="sunset"?"#9a6a4c":this.def.time==="night"?"#141c2c":"#5f7a8a",roughness:1,flatShading:!0,fog:!0}))),e.lamps){let T=[];for(let V=0;V<s;V+=24){let W=V/24%2?1:-1,lt=W*(this.wall(V)+1.2);T.push([this.X[V]+this.nx(V)*lt,this.Z[V]+this.nz(V)*lt,Math.atan2(-this.nx(V)*W,-this.nz(V)*W)])}let B=new pn(.12,.16,12,6).translate(0,6,0),k=new Me(.6,.3,2.6).translate(0,12,1.1),N=(V,W)=>{let lt=new ts(V,W,T.length),Q=new Oe;T.forEach(([st,dt,Gt],ht)=>{Q.position.set(st,0,dt),Q.rotation.y=Gt,Q.updateMatrix(),lt.setMatrixAt(ht,Q.matrix)}),i.add(lt)};N(B,et),N(k,new Kt({color:"#fff",emissive:"#fff4d8",emissiveIntensity:3*e.lamps}));let F=gn(128,128,(V,W)=>{let lt=V.createRadialGradient(W/2,W/2,0,W/2,W/2,W/2);lt.addColorStop(0,"rgba(255,255,255,1)"),lt.addColorStop(.5,"rgba(255,255,255,.35)"),lt.addColorStop(1,"rgba(255,255,255,0)"),V.fillStyle=lt,V.fillRect(0,0,W,W)}),it=new ts(new Ae(26,26).rotateX(-Math.PI/2),new dn({map:F,color:"#ffe6b8",transparent:!0,opacity:.32*e.lamps,blending:pi,depthWrite:!1}),T.length),C=new Oe;T.forEach(([V,W,lt],Q)=>{C.position.set(V+Math.sin(lt)*4,.1,W+Math.cos(lt)*4),C.updateMatrix(),it.setMatrixAt(Q,C.matrix)}),i.add(it)}let ut=Nh(e,this.def.time==="night");return ut.renderOrder=-1,i.add(ut),i.userData.sky=ut,i}minimap(t=220){let e=document.createElement("canvas");e.width=e.height=t;let i=e.getContext("2d"),s=1e9,r=-1e9,a=1e9,o=-1e9;for(let p=0;p<this.N;p++)s=Math.min(s,this.X[p]),r=Math.max(r,this.X[p]),a=Math.min(a,this.Z[p]),o=Math.max(o,this.Z[p]);let l=(t-30)/Math.max(r-s,o-a),c=(t-(r-s)*l)/2,h=(t-(o-a)*l)/2;this.mm={sc:l,ox:c,oz:h,x0:s,z0:a};let u=p=>[c+(this.X[p]-s)*l,h+(this.Z[p]-a)*l];i.lineJoin="round",i.lineCap="round",[[10,"rgba(0,0,0,.6)"],[6,"#e8e8e8"]].forEach(([p,M])=>{i.strokeStyle=M,i.lineWidth=p,i.beginPath();for(let m=0;m<=this.N;m+=2){let[g,_]=u(m%this.N);m?i.lineTo(g,_):i.moveTo(g,_)}i.closePath(),i.stroke()}),i.strokeStyle="#2ee66b",i.lineWidth=6;for(let p=0;p<this.N;p+=2){if(!this.drs[p])continue;let[M,m]=u(p),[g,_]=u((p+2)%this.N);i.beginPath(),i.moveTo(M,m),i.lineTo(g,_),i.stroke()}let[f,d]=u(0);return i.fillStyle="#fff",i.fillRect(f-2,d-7,4,14),e}toMap(t,e){let i=this.mm;return[i.ox+(t-i.x0)*i.sc,i.oz+(e-i.z0)*i.sc]}};var te=(()=>{let n=null,t,e=null,i=null,s=null,r=null,a=null,o=!0;try{o=localStorage.getItem("jkgp-sound")!=="0"}catch{}let l=(()=>{let y=new Float32Array(1024);for(let v=0;v<1024;v++){let A=v/1024*2-1;y[v]=Math.tanh(A*2.4)}return y})();function c(_){let y=n.createGain();y.gain.value=0;let v=n.createWaveShaper();v.curve=l,v.oversample="2x";let A=n.createBiquadFilter();A.type="lowpass",A.frequency.value=2e3,A.Q.value=3;let w=n.createGain();w.gain.value=_,w.connect(v),v.connect(A),A.connect(y);let x=n.createOscillator(),b=n.createOscillator(),L=n.createOscillator(),P=n.createOscillator();x.type="sawtooth",b.type="square",L.type="sawtooth",P.type="sine",L.detune.value=9;let U=n.createGain(),H=n.createGain();U.gain.value=.35,H.gain.value=.5;let $=n.createGain();return $.gain.value=.6,x.connect(w),b.connect(U),U.connect(w),L.connect($),$.connect(w),P.connect(H),H.connect(w),[x,b,L,P].forEach(I=>I.start()),{o1:x,o2:b,o3:L,o4:P,bp:A,out:y}}function h(){if(n){n.state==="suspended"&&n.resume();return}let _=window.AudioContext||window.webkitAudioContext;if(!_)return;n=new _,t=n.createGain(),t.gain.value=o?.5:0,t.connect(n.destination);let y=n.createDynamicsCompressor();y.threshold.value=-14,y.ratio.value=4,y.connect(t),e=c(.5),e.out.connect(y);let v=n.createOscillator(),A=n.createGain();v.type="sine",A.gain.value=0,v.connect(A),A.connect(y),v.start(),e.turbo={o:v,g:A},i=c(.4);let w=n.createStereoPanner?n.createStereoPanner():n.createGain();i.out.connect(w),w.connect(y),i.pan=w;let x=n.createBuffer(1,n.sampleRate*2,n.sampleRate),b=x.getChannelData(0);for(let P=0;P<b.length;P++)b[P]=Math.random()*2-1;te.noise=x;let L=(P,U,H)=>{let $=n.createBufferSource();$.buffer=x,$.loop=!0;let I=n.createBiquadFilter();I.type=P,I.frequency.value=U,I.Q.value=H;let X=n.createGain();return X.gain.value=0,$.connect(I),I.connect(X),X.connect(y),$.start(),{g:X,f:I}};s=L("bandpass",1500,5),r=L("lowpass",700,.7),a=L("lowpass",120,2)}let u=_=>_/60*3;function f(_,y,v,A,w=1){let x=n.currentTime,b=u(y)*w;_.o1.frequency.setTargetAtTime(b,x,.03),_.o2.frequency.setTargetAtTime(b/2,x,.03),_.o3.frequency.setTargetAtTime(b*1.5,x,.03),_.o4.frequency.setTargetAtTime(b*2,x,.03),_.bp.frequency.setTargetAtTime(700+v*2600+y*.15,x,.05),_.out.gain.setTargetAtTime(A,x,.06)}function d(_,y,v){if(!e)return;f(e,_,y,v?.05+y*.07:0);let A=n.currentTime;e.turbo.o.frequency.setTargetAtTime(2400+_*.25,A,.1),e.turbo.g.gain.setTargetAtTime(v?.004+y*.006:0,A,.2)}function p(_,y,v,A){if(!i)return;let w=_<160?Math.min(.09,6/(_+20)):0,x=Math.max(.7,Math.min(1.4,343/(343-y)));f(i,v,.8,w,x),i.pan.pan&&i.pan.pan.setTargetAtTime(Math.max(-1,Math.min(1,A)),n.currentTime,.05)}function M(_,y,v){if(!s)return;let A=n.currentTime;s.g.gain.setTargetAtTime(Math.min(.25,_*.06),A,.04),s.f.frequency.setTargetAtTime(1100+y*9,A,.1),r.g.gain.setTargetAtTime(Math.min(.2,y*y*3e-5),A,.2),a.g.gain.setTargetAtTime(v?.5:0,A,.03),a.f.frequency.setTargetAtTime(80+y*1.5,A,.05)}function m(_=880,y=.12,v="sine",A=.25,w=0){if(!n||!o)return;let x=n.currentTime,b=n.createOscillator(),L=n.createGain();b.type=v,b.frequency.setValueAtTime(_,x),w&&b.frequency.exponentialRampToValueAtTime(Math.max(30,_*w),x+y),L.gain.setValueAtTime(A,x),L.gain.exponentialRampToValueAtTime(.001,x+y),b.connect(L),L.connect(t),b.start(x),b.stop(x+y+.02)}function g(_,y,v,A){if(!n||!o)return;let w=n.currentTime,x=n.createBufferSource();x.buffer=te.noise;let b=n.createBiquadFilter();b.type="bandpass",b.frequency.value=_,b.Q.value=y;let L=n.createGain();L.gain.setValueAtTime(A,w),L.gain.exponentialRampToValueAtTime(.001,w+v),x.connect(b),b.connect(L),L.connect(t),x.start(w),x.stop(w+v)}return{init:h,engine:d,rivals:p,surface:M,get on(){return o},toggle(){o=!o;try{localStorage.setItem("jkgp-sound",o?"1":"0")}catch{}return t&&t.gain.setTargetAtTime(o?.5:0,n.currentTime,.05),o},stopLoops(){if(!n)return;let _=n.currentTime;[e&&e.out,i&&i.out,e&&e.turbo.g,s&&s.g,r&&r.g,a&&a.g].forEach(y=>y&&y.gain.setTargetAtTime(0,_,.05))},light(){m(520,.22,"square",.14)},go(){m(1040,.5,"square",.16)},shift(_){m(_?180:120,.06,"sawtooth",.1,.5),g(2400,1.5,.05,.12)},crash(_){g(260,.7,.4,Math.min(1,_*.03)),m(80,.25,"triangle",Math.min(.6,_*.02),.4)},touch(){g(500,1,.15,.3)},drs(){m(900,.07,"square",.08),setTimeout(()=>m(1350,.09,"square",.08),60)},click(){m(1100,.04,"square",.05)},lap(){m(880,.1,"triangle",.14),setTimeout(()=>m(1320,.16,"triangle",.14),90)},purple(){[988,1319,1661].forEach((_,y)=>setTimeout(()=>m(_,.14,"triangle",.14),y*70))},win(){[523,659,784,1046,1318].forEach((_,y)=>setTimeout(()=>m(_,.3,"triangle",.2),y*120))}}})();var cv=9.81,Ol=class{constructor(t){this.scene=t,this.list=[]}clear(){this.list.forEach(t=>this.scene.remove(t.obj)),this.list=[]}launch(t,e,i,s,r=6){t.updateMatrixWorld(!0);let a=t.clone(!0);t.matrixWorld.decompose(a.position,a.quaternion,a.scale),a.traverse(l=>{l.castShadow=!0}),this.scene.add(a);let o=new D((Math.random()-.5)*r,(Math.random()-.5)*r,(Math.random()-.5)*r);if(this.list.push({obj:a,v:new D(e,i,s),w:o,rest:0,life:0}),this.list.length>40){let l=this.list.shift();this.scene.remove(l.obj)}}step(t){let e=new an,i=new On;for(let s of this.list)s.rest>1||(s.life+=t,s.v.y-=cv*t,s.obj.position.addScaledVector(s.v,t),i.set(s.w.x*t,s.w.y*t,s.w.z*t),e.setFromEuler(i),s.obj.quaternion.premultiply(e),s.obj.position.y<.12&&(s.obj.position.y=.12,Math.abs(s.v.y)>1.2?(s.v.y*=-.32,s.v.x*=.7,s.v.z*=.7,s.w.multiplyScalar(.6)):(s.v.y=0,s.v.x*=Math.exp(-t*3),s.v.z*=Math.exp(-t*3),s.w.multiplyScalar(Math.exp(-t*4)),s.v.lengthSq()<.05&&(s.rest+=t))))}},Dh=n=>[Math.sin(n.yaw)*n.v+(n.kx||0),Math.cos(n.yaw)*n.v+(n.kz||0)];function _d(n,t,e){let i=t.x-n.x,s=t.z-n.z,r=Math.hypot(i,s)||1;i/=r,s/=r;let[a,o]=Dh(n),[l,c]=Dh(t),h=(a-l)*i+(o-c)*s;if(h<=0)return 0;let u=h*.62;return xd(n,-i*u,-s*u,t,e),xd(t,i*u,s*u,n,e),h}function xd(n,t,e,i,s){let r=Math.sin(n.yaw),a=Math.cos(n.yaw),o=t*r+e*a,l=t*a-e*r,c=i.x-n.x,h=i.z-n.z,u=c*r+h*a,f=c*a-h*r,d=Math.hypot(t,e);if(n.wr){n.wr.vx+=t,n.wr.vz+=e,n.wr.w+=-l*u*.35;return}n.v+=o,n.kx=(n.kx||0)+a*l,n.kz=(n.kz||0)-r*l,n.spin=(n.spin||0)+hv(-l*u*.32,-6,6),s.damage(n,d,u,f)}var hv=(n,t,e)=>Math.max(t,Math.min(e,n));function vd(n,t){if(n.wr)return;let[e,i]=Dh(n);n.wr={vx:e,vz:i,w:t??(n.spin||0)+(Math.random()-.5)*4,t:0,roll:(Math.random()-.5)*.25},n.kx=n.kz=0,n.spin=0}function Uh(n,t,e){let i=n.wr;i.t+=t;let s=Math.hypot(i.vx,i.vz),r=(n.offTrack?13:8)*t;s>r?(i.vx-=i.vx/s*r,i.vz-=i.vz/s*r):(i.vx=0,i.vz=0),i.w*=Math.exp(-t*1.6),n.x+=i.vx*t,n.z+=i.vz*t,n.yaw+=i.w*t,n.v=Math.hypot(i.vx,i.vz)*.2;let a=e.locate(n.x,n.z,n.idx<0?0:n.idx);n.idx=a.i,n.s=a.s,n.lat=a.lat;let o=e.wall(a.i)-1.05;if(n.offTrack=Math.abs(n.lat)>e.W/2+.5,Math.abs(n.lat)>o){let l=e.nx(a.i),c=e.nz(a.i),h=Math.sign(n.lat),u=Math.abs(n.lat)-o;n.x-=l*h*u,n.z-=c*h*u;let f=(i.vx*l+i.vz*c)*h;f>0&&(i.vx-=l*h*f*1.4,i.vz-=c*h*f*1.4,i.w*=-.5)}return s}var Ut=n=>document.getElementById(n),Qe=(n,t,e)=>Math.max(t,Math.min(e,n)),jn=(n,t,e)=>n+(t-n)*e,Yh=(n,t)=>{let e=n-t;for(;e>Math.PI;)e-=Math.PI*2;for(;e<-Math.PI;)e+=Math.PI*2;return e},ir=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,An=n=>{if(!isFinite(n)||n<=0)return"\u2013:\u2013\u2013.\u2013\u2013\u2013";let t=Math.floor(n/60),e=n-t*60;return t+":"+(e<10?"0":"")+e.toFixed(3)},Wl=n=>(n>=0?"+":"\u2212")+Math.abs(n).toFixed(3),uv={track:"dune",mode:"race",dmg:"arcade",laps:3,diff:"pro",team:"jk",grid:"mid",cam:"chase",line:!0,brake:ir,steer:ir,autoDrs:ir,quality:"auto"},Tt={...uv};try{Object.assign(Tt,JSON.parse(localStorage.getItem("jkgp-settings")||"{}"))}catch{}var ps=()=>{try{localStorage.setItem("jkgp-settings",JSON.stringify(Tt))}catch{}},ti={races:0,wins:0,podiums:0};try{Object.assign(ti,JSON.parse(localStorage.getItem("jkgp-stats")||"{}"))}catch{}var ya=n=>{try{return+localStorage.getItem("jkgp-best-"+n)||0}catch{return 0}},Si=Tt.quality==="auto"?ir?"medium":"high":Tt.quality,fv={rookie:[.84,.89],pro:[.9,.945],legend:[.955,.995]},yd={bull:1,rossa:.993,silver:.99,papaya:.988,jk:.985,verde:.978,neon:.975,azure:.972,steel:.968,oxford:.965},dv=[25,18,15,12,10,8,6,4,2,1],pv=Ut("gl"),ln=new wl({canvas:pv,antialias:Si!=="low",powerPreference:"high-performance"}),kh=Math.min(devicePixelRatio||1,Si==="high"?2:Si==="medium"?1.5:1),Qn=1;ln.setPixelRatio(kh);ln.setSize(innerWidth,innerHeight,!1);ln.toneMapping=os;ln.outputColorSpace=Pe;ln.shadowMap.enabled=Si!=="low";ln.shadowMap.type=rs;var je=new Fs,Se=new hn(62,innerWidth/innerHeight,.1,7e3),mv=new Ks(ln),Pd={};for(let[n,t]of Object.entries(Fl)){let e=new Fs,i=Nh(t,n==="night");i.scale.setScalar(.01),e.add(i);let s=new Ct(new Pn(40,24).rotateX(-Math.PI/2),new dn({color:new It(t.grass).multiplyScalar(.35)}));s.position.y=-2,e.add(s),Pd[n]=mv.fromScene(e,.02,.1,200).texture,e.traverse(r=>{r.geometry&&r.geometry.dispose(),r.material&&r.material.dispose()})}var Hl=new Xr("#fff","#444",1);je.add(Hl);var Vn=new Yr("#fff",3);Vn.castShadow=Si!=="low";var Md=Si==="high"?2048:1024;Vn.shadow.mapSize.set(Md,Md);Object.assign(Vn.shadow.camera,{left:-45,right:45,top:45,bottom:-45,near:1,far:500});Vn.shadow.bias=-4e-4;Vn.shadow.normalBias=.03;je.add(Vn,Vn.target);var Gl=new D(0,1,0),Mi=null,xa=null;if(Si==="high"){let n=new Fe(1,1,{type:Ge,samples:4});n.depthTexture=new zn(1,1),n.depthTexture.type=vn,Mi=new Ll(ln,n),Mi.addPass(new Nl(je,Se)),xa=new tr(new ct(innerWidth/2,innerHeight/2),.3,.55,.88),Mi.addPass(xa),Mi.addPass(new Dl)}function Zh(){let n=innerWidth,t=innerHeight;Se.aspect=n/t,Se.updateProjectionMatrix(),ln.setPixelRatio(kh*Qn),ln.setSize(n,t,!1),Mi&&(Mi.setPixelRatio(kh*Qn),Mi.setSize(n,t))}addEventListener("resize",Zh);Zh();function gv(n){je.fog=new br(n.fog,450,3400),je.background=new It(n.fog),Hl.color.set(n.hemi[0]),Hl.groundColor.set(n.hemi[1]),Hl.intensity=n.hemi[2],Vn.color.set(n.sun),Vn.intensity=n.sunI,Gl.set(...n.dir).normalize(),ln.toneMappingExposure=n.exp,je.environmentIntensity=n.lamps>=1?.9:1,xa&&(xa.strength=n.lamps>=1?.7:n.lamps?.3:.22,xa.threshold=n.lamps>=1?.85:1.35)}function xv(n){n.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&[].concat(t.material).forEach(e=>{e.map&&e.map.dispose(),e.dispose()})})}var Xl=class{constructor(t,e){this.max=t,this.i=0,this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.c=new Float32Array(t*3),this.sz=new Float32Array(t),this.al=new Float32Array(t),this.age=new Float32Array(t).fill(1e9),this.life=new Float32Array(t).fill(1),this.s0=new Float32Array(t),this.gr=new Float32Array(t),this.a0=new Float32Array(t),this.drag=new Float32Array(t),this.grav=new Float32Array(t);let i=new fe;i.setAttribute("position",new ke(this.p,3).setUsage(Zs)),i.setAttribute("color",new ke(this.c,3).setUsage(Zs)),i.setAttribute("size",new ke(this.sz,1).setUsage(Zs)),i.setAttribute("alpha",new ke(this.al,1).setUsage(Zs)),i.boundingSphere=new Bn(new D,1e6),this.mat=new De({transparent:!0,depthWrite:!1,blending:e?pi:Bi,uniforms:{scale:{value:500}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=min(size*scale/-mv.z,420.); gl_Position=projectionMatrix*mv; }",fragmentShader:"varying vec3 vC; varying float vA; void main(){ float r=length(gl_PointCoord-.5); if(r>.5||vA<.004) discard; gl_FragColor=vec4(vC, vA*smoothstep(.5,.0,r)); }"}),this.pts=new Rr(i,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=3,je.add(this.pts),this.g=i}emit(t,e,i,s,r,a,o,l,c,h,u,f=1,d=0){let p=this.i;this.i=(p+1)%this.max,this.p.set([t,e,i],p*3),this.v.set([s,r,a],p*3),this.c.set(h,p*3),this.age[p]=0,this.life[p]=o,this.s0[p]=l,this.gr[p]=c,this.a0[p]=u,this.drag[p]=f,this.grav[p]=d}update(t){for(let e=0;e<this.max;e++){let i=this.age[e]+=t,s=this.life[e];if(i>s){this.al[e]=0;continue}let r=e*3,a=Math.pow(this.drag[e],t);this.v[r]*=a,this.v[r+1]=this.v[r+1]*a-this.grav[e]*t,this.v[r+2]*=a,this.p[r]+=this.v[r]*t,this.p[r+1]+=this.v[r+1]*t,this.p[r+2]+=this.v[r+2]*t,this.p[r+1]<.02&&(this.p[r+1]=.02,this.v[r+1]*=-.3);let o=i/s;this.sz[e]=this.s0[e]*(1+this.gr[e]*i),this.al[e]=this.a0[e]*(1-o)*Math.min(1,i*12)}for(let e of["position","color","size","alpha"])this.g.attributes[e].needsUpdate=!0}},ms=new Xl(Si==="low"?500:1400,!1),ar=new Xl(500,!0),ql=new Ol(je),Yl=[.82,.82,.84],_v=[.62,.52,.38],vv=[.4,.45,.28],Ql=[1,.55,.15],ft=null,Vi=null,Ma=null,Zl={};function yv(){let n=ft.N,t=[],e=[],i=[],s=.45;for(let o=0;o<=n;o++){let l=o%n,c=ft.RL[l],h=ft.X[l]+ft.nx(l)*c,u=ft.Z[l]+ft.nz(l)*c;t.push(h+ft.nx(l)*s,.07,u+ft.nz(l)*s,h-ft.nx(l)*s,.07,u-ft.nz(l)*s);let f=ft.VP[(l+18)%n]-ft.VP[l],d=f<-3?[1,.15,.12]:ft.VP[l]<86&&f<3?[1,.8,.1]:[.2,1,.35];if(e.push(...d,...d),o<n){let p=o*2;i.push(p,p+2,p+1,p+1,p+2,p+3)}}let r=new fe;r.setAttribute("position",new kt(t,3)),r.setAttribute("color",new kt(e,3)),r.setIndex(i);let a=new Ct(r,new dn({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3,fog:!0}));return a.renderOrder=2,a}var Fh=Ut("mmBase"),Hh=Ut("mmDots");function jl(n){if(ft&&ft.id===n)return;Vi&&(je.remove(Vi),xv(Vi)),ft=Zl[n]||(Zl[n]=new ma(n)),Vi=ft.build(ln),je.add(Vi),gv(Fl[ft.def.time]),je.environment=Pd[ft.def.time],Ma=yv(),Vi.add(Ma);let t=ft.minimap(200),e=Fh.getContext("2d");Fh.width=Fh.height=Hh.width=Hh.height=200,e.clearRect(0,0,200,200),e.drawImage(t,0,0)}var Re=[],me=null,ve=null;function Sd(n,t){let e=Ih(n,t?"soft":["soft","medium","hard"][Math.floor(Math.random()*3)]);return je.add(e),{team:n,mesh:e,ai:!t,isPlayer:t,s:0,lat:0,v:0,x:0,z:0,yaw:0,idx:-1,lap:0,prevS:0,lapStart:0,last:0,best:0,done:!1,finishT:0,cp:new Map,cpK:-1,lane:0,laneT:0,laneTimer:0,drsOpen:!1,drsAvail:!1,inDrs:!1,ers:1,ersOn:!1,slip:!1,mistake:0,react:0,steerA:0,latV:0,wheel:0,gear:1,rpm:4e3,pitch:0,roll:0,grip:1,surface:"road",slideAmt:0,harvest:!1,skill:1,prog:0,pos:0,inval:!1,wrong:0,dmg:{fw:0,rw:0,susp:0},lost:{},wr:null,dnf:!1,kx:0,kz:0,spin:0}}function Gh(n,t,e){let i=ft.pos(t,e,{});n.s=t,n.prevS=t,n.lat=e,n.x=i.x,n.z=i.z,n.yaw=Math.atan2(i.tx,i.tz),n.idx=ft.idx(t),n.v=0}function Mv(){Re.forEach(n=>{je.remove(n.mesh),n.mesh.traverse(t=>{t.material&&!t.material.vertexColors&&t.material.map&&t.material.map.dispose()})}),Re=[],ve&&(je.remove(ve.mesh),ve=null)}function Sa(n){Mv();let t=Kn.find(a=>a.id===Tt.team)||Kn[0];if(Tt.mode==="tt"&&!n){me=Sd(t,!0),Re=[me],Gh(me,ft.L-170,ft.RL[ft.idx(ft.L-170)]),me.v=55,Sv(t);return}let e=Kn.filter(a=>a!==t).map(a=>({t:a,q:yd[a.id]+(Math.random()-.5)*.02})).sort((a,o)=>o.q-a.q).map(a=>a.t),i=n?0:{pole:0,mid:5,back:9}[Tt.grid];e.splice(i,0,t);let[s,r]=fv[Tt.diff];e.forEach((a,o)=>{let l=Sd(a,a===t);a===t&&(me=l),l.skill=jn(s,r,(yd[a.id]-.96)/.04)+(Math.random()-.5)*.01,l.react=.18+Math.random()*(Tt.diff==="rookie"?.5:.3),Gh(l,ft.L-12-o*9,o%2?-3:3),Re.push(l)})}function Sv(n){ve={rec:[],best:null,t:0,mesh:Ih(n,"soft")},ve.mesh.traverse(t=>{t.isMesh&&(t.material=t.material.clone(),t.material.transparent=!0,t.material.opacity=.28,t.material.depthWrite=!1,t.castShadow=!1)}),ve.mesh.visible=!1,je.add(ve.mesh);try{let t=JSON.parse(localStorage.getItem("jkgp-ghost-"+ft.id)||"null");t&&t.length&&(ve.best=t)}catch{}}var Ke={},Wi={},nr=null;addEventListener("keydown",n=>{if(!(n.repeat&&!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code))){if(Ke[n.code]=!0,te.init(),nt.phase==="menu"){n.code==="Enter"&&ba();return}(n.code==="Escape"||n.code==="KeyP")&&Ea(),n.code==="KeyC"&&Kh(),n.code==="KeyM"&&(Ut("snd").textContent=te.toggle()?"\u{1F50A}":"\u{1F507}"),n.code==="KeyR"&&!nt.paused&&nt.phase==="race"&&wv(),n.code==="KeyL"&&(Tt.line=!Tt.line,ps(),Ma.visible=Tt.line,tn(Tt.line?"RACING LINE ON":"RACING LINE OFF","",1)),["Space","ArrowUp","ArrowDown"].includes(n.code)&&n.preventDefault()}});addEventListener("keyup",n=>{Ke[n.code]=!1});addEventListener("blur",()=>{for(let n in Ke)Ke[n]=!1});document.querySelectorAll("[data-k]").forEach(n=>{let t=n.dataset.k,e=s=>{s.preventDefault(),te.init(),Wi[t]=!0,n.classList.add("on"),t==="cam"&&Kh(),t==="pause"&&Ea()},i=s=>{s.preventDefault(),Wi[t]=!1,n.classList.remove("on")};n.addEventListener("pointerdown",e),["pointerup","pointercancel","pointerleave"].forEach(s=>n.addEventListener(s,i))});function bv(){nr=null;let n=navigator.getGamepads?navigator.getGamepads():[];for(let t of n)if(t&&t.connected){nr=t;break}}var bd={};function Ev(){let n=Ke.KeyW||Ke.ArrowUp||Wi.gas?1:0,t=Ke.KeyS||Ke.ArrowDown||Wi.brake?1:0,e=(Ke.KeyD||Ke.ArrowRight||Wi.right?1:0)-(Ke.KeyA||Ke.ArrowLeft||Wi.left?1:0),i=!1,s=Ke.Space||Wi.drs,r=Ke.ShiftLeft||Ke.ShiftRight||Ke.KeyE||Wi.ers;if(nr){let a=nr.axes[0]||0;Math.abs(a)>.08&&(e=Math.sign(a)*((Math.abs(a)-.08)/.92)**1.4,i=!0);let o=c=>nr.buttons[c]?nr.buttons[c].value:0;n=Math.max(n,o(7)),t=Math.max(t,o(6)),s=s||o(0)>.5,r=r||o(1)>.5||o(5)>.5;let l=c=>{let h=o(c)>.5,u=bd[c];return bd[c]=h,h&&!u};l(3)&&Kh(),l(9)&&Ea()}return{thr:n,brk:t,st:e,analog:i,drs:s,ers:r}}var nt={phase:"menu",paused:!1,t:0,lt:0,lights:0,hold:0,order:[],fast:{t:0,c:null},finishAt:0,resultsShown:!1,camMode:"orbit",orbitT:0,shake:0,laps:3},Oh=1/120;function Jh(n,t){let e=ft.L;return((t-n)%e+e*1.5)%e-e/2}function ei(n){return(n.lap-1)*ft.L+n.s}var er={};function Ed(n,t=1){let e=n.s+7+n.v*.32,i=ft.pos(e,ft.RL[ft.idx(e)]+(n.lane||0),er),s=Math.atan2(i.x-n.x,i.z-n.z),r=Yh(s,n.yaw),a=ft.VP[ft.idx(n.s+n.v*.22)]*t;return{st:Qe(-r*3.2,-1,1),thr:n.v<a?1:0,brk:n.v>a+1?Qe((n.v-a)/5,0,1):0}}var ds=[0,21,32,43,53,63,72,82,95];function Tv(n,t,e){let i=n.idx,s=ft.locate(n.x,n.z,n.idx);n.idx=s.i,n.s=s.s,n.lat=s.lat;let r=s.i,a=ft.W/2,o=Math.abs(n.lat),l="road";o>a+.3&&(ft.kerb[r]&&o<a+1.6?l="kerb":ft.runoff[r]>13?l="gravel":l=o<a+4?"runoff":"grass"),n.surface=l;let c={road:1,kerb:.93,runoff:.9,grass:.55,gravel:.5}[l];(n.dmg.fw||n.dmg.rw)&&(c*=1-.22*Math.min(1,n.dmg.fw)-.16*Math.min(1,n.dmg.rw));let{thr:h,brk:u,st:f}=e;if(n.auto){let et=Ed(n,n.done?.82:1);h=et.thr,u=et.brk,f=et.st}else{if(Tt.brake){let et=ft.VP[ft.idx(n.s+n.v*.18)];n.v>et*1.03&&(u=Math.max(u,Qe((n.v-et)/4,.3,1)),h=0)}if(Tt.steer){let et=Ed(n);f=Qe(f+(et.st-f)*(e.analog?.3:.5),-1,1)}}if(nt.phase==="lights"){n.rpm=jn(n.rpm,4e3+h*8e3,1-Math.exp(-t*8)),n.thr=h;return}if(n.wr){Uh(n,t,ft),n.rpm=jn(n.rpm,3e3,t*2),n.thr=0,n.brk=0,n.slideAmt=n.v>1?1:0;return}let d=n.dmg,p=Tt.dmg==="real";n.inDrs=!!ft.drs[r],n.inDrs&&!ft.drs[i]&&(n.drsAvail=Tt.mode==="tt"||n.lap>=2&&Id(n)<1),n.inDrs||(n.drsAvail=!1),n.drsAvail&&(e.drs||Tt.autoDrs||n.auto)&&!n.drsOpen&&u<.1&&(n.drsOpen=!0,te.drs()),n.drsOpen&&(u>.1||!n.inDrs)&&(n.drsOpen=!1),n.ersOn=!!(e.ers&&n.ers>0&&h>.5&&n.v>8),n.ers=Qe(n.ers+(n.ersOn?-.14:0)*t+(u*.1+(h<.1?.025:.006))*t,0,1),n.harvest=u>.2||h<.1,n.slip=Ld(n);let M=91*(n.drsOpen?1.055:1)*(n.ersOn?1.03:1)*(n.slip?1.025:1),m=h*(14.5*(1-(Math.max(0,n.v)/M)**2)+(n.ersOn?2.5:0))-(h<.05?.9+n.v*n.v*6e-4:0);m-=u*(18+.26*Math.abs(n.v))*(l==="grass"||l==="gravel"?.55:1)*Math.sign(n.v||1),l==="grass"&&(m-=(3+.025*n.v*n.v/10)*Math.sign(n.v)),l==="gravel"&&(m-=(10+.12*n.v)*Math.sign(n.v));let g=n.v;n.v+=m*t,g>0&&n.v<0&&!(u&&h<.05&&g<.5)&&(n.v=0),n.v<=.3&&u>.5&&h<.05?(n.rev=(n.rev||0)+t,n.rev>.4&&(n.v=Math.max(-6,n.v-6*t))):n.rev=0,n.lockup=u>.85&&n.v>25&&!Tt.brake&&Math.random()<.5;let _=e.analog||n.auto?1:f===0?9:5;n.steerA=n.auto||e.analog?f:jn(n.steerA,f,1-Math.exp(-t*_));let y=n.v,v=.42/(1+Math.abs(y)/22)*(n.lost.fw?.78:1),A=p?d.susp*.06*(n.pullSide||1):0,w=(n.steerA+A)*v,x=y*Math.tan(w)/3.6,b=(28+.0011*y*y*(n.lost.rw?.45:1))*c,L=b/Math.max(Math.abs(y),2),P=Math.abs(x)/L;n.slideAmt=Math.max(0,P-1);let U=Qe(x,-L*1.08,L*1.08);if(n.slideAmt>0&&(n.v-=Math.min(n.slideAmt,1.5)*7*t*Math.sign(y)),n.yaw-=U*t,n.yawRate=-U,n.x+=Math.sin(n.yaw)*n.v*t,n.z+=Math.cos(n.yaw)*n.v*t,n.kx||n.kz){n.x+=n.kx*t,n.z+=n.kz*t;let et=Math.exp(-t*3.2);n.kx*=et,n.kz*=et,Math.abs(n.kx)+Math.abs(n.kz)<.05&&(n.kx=n.kz=0)}n.spin&&(n.yaw+=n.spin*t,n.slideAmt=Math.max(n.slideAmt,Math.abs(n.spin)*.4),n.v*=1-Math.min(.4,Math.abs(n.spin)*t*.5),n.spin*=Math.exp(-t*2.4),Math.abs(n.spin)<.05&&(n.spin=0));let H=ft.wall(r)-1.05,$=ft.nx(r),I=ft.nz(r);if(Math.abs(n.lat)>H){let et=Math.sign(n.lat),at=Math.abs(n.lat)-H;n.x-=$*et*at,n.z-=I*et*at;let bt=Math.sin(n.yaw)*n.v,Lt=Math.cos(n.yaw)*n.v,tt=(bt*$+Lt*I)*et;if(tt>0){let _t=bt-$*et*tt*1.3,At=Lt-I*et*tt*1.3,Ht=Math.hypot(_t,At);n.yaw=Math.atan2(_t,At),n.v=Ht*(tt>20?.55:.86)*Math.sign(n.v||1),n.v<0&&(n.yaw+=Math.PI,n.v=-n.v),tt>3&&Av(n,tt,n.x+$*et,n.z+I*et),p&&tt>15&&(Math.abs(Math.sin(n.yaw)*$+Math.cos(n.yaw)*I)>.5?_a(n,"fw",(tt-12)/10):_a(n,"susp",(tt-12)/14,et),tt>30&&Jl(n,(Math.random()-.5)*6))}}let X=Math.abs(n.v),K=1;for(;K<8&&X>ds[K]*.985;)K++;K!==n.gear&&(te.shift(K>n.gear),n.gear=K);let G=ds[K-1],rt=ds[K];n.rpm=X<2?4e3+h*3e3:Qe(5200+7300*(X-G*.85)/(rt-G*.85),4500,12500),n.thr=h,n.brk=u,Math.abs(n.lat)>a+2.2&&!n.done?(n.offT||(n.offT=nt.t),Tt.mode==="tt"&&!n.inval&&n.lap>=1&&(n.inval=!0,tn("TRACK LIMITS","warn",1.4,"Lap invalidated"))):n.offT=0;let Z=Math.sin(n.yaw)*ft.TX[r]+Math.cos(n.yaw)*ft.TZ[r];n.wrong=Z<-.4&&n.v>3?n.wrong+t:0,n.wrong>1.2&&!nt.wrongShown&&(nt.wrongShown=!0,tn("WRONG WAY","warn",1.6,"Press R to reset")),n.wrong||(nt.wrongShown=!1)}function wv(){let n=me;if(n.dnf)return;let t=n.s,e=ft.RL[ft.idx(t)];Gh(n,t,e),n.v=0,n.steerA=0,tn("RESET","",.8)}function Av(n,t,e,i){let s=t>14;for(let r=0;r<(s?40:14);r++)ar.emit(e,.3+Math.random()*.4,i,(Math.random()-.5)*10,Math.random()*6,(Math.random()-.5)*10,.4+Math.random()*.4,.09,0,Ql,1,.2,9);n.isPlayer&&(te.crash(t),nt.shake=Math.min(1.2,t*.05),s&&tn("CRASH!","warn",1))}function Id(n){let t=1e9;for(let e of Re){if(e===n)continue;let i=ei(e)-ei(n);i>0&&i<t&&(t=i)}return t/Math.max(n.v,20)}function Ld(n){if(n.v<45)return!1;for(let t of Re){if(t===n)continue;let e=Jh(n.s,t.s);if(e>3&&e<38&&Math.abs(t.lat-n.lat)<2.2)return!0}return!1}function Rv(n,t){if(nt.phase==="lights"){n.rpm=5e3+Math.random()*4e3;return}if(n.wr){Uh(n,t,ft)>3&&Math.random()<.5&&ms.emit(n.x,.3,n.z,(Math.random()-.5)*2,.8,(Math.random()-.5)*2,1.6,.9,2.6,Yl,.35,.5),n.rpm=3e3;return}if(n.react>0){n.react-=t;return}let e=ft.idx(n.s);n.inDrs=!!ft.drs[e],n.inDrs&&!n.wasDrs&&(n.drsAvail=n.lap>=2&&Id(n)<1),n.inDrs||(n.drsAvail=!1),n.wasDrs=n.inDrs,n.drsOpen=n.drsAvail,n.slip=Ld(n);let i=1;if(me&&Tt.diff!=="legend"&&!me.done&&Tt.mode!=="tt"){let p=ei(n)-ei(me),M=Tt.diff==="rookie"?1:.5;p>120?i-=.025*M:p<-160&&(i+=.02*M)}let s=ft.VP[ft.idx(n.s+n.v*.12)]*n.skill*i*(n.drsOpen?1.05:1)*(n.slip?1.02:1);Math.abs(n.lane)>1.2&&ft.VP[e]<75&&(s*=.975),n.mistake>0?(n.mistake-=t,s*=.78,Math.random()<.3&&ms.emit(n.x,.25,n.z,0,.5,0,1.2,.7,2.2,Yl,.35,.5)):Math.random()<t*(Tt.diff==="rookie"?.012:Tt.diff==="pro"?.006:.002)&&ft.VP[e]<60&&n.v>40&&(n.mistake=.8+Math.random()*.8);let r=null,a=1e9;for(let p of Re){if(p===n)continue;let M=Jh(n.s,p.s);M>0&&M<a&&Math.abs(p.lat-n.lat)<2.4&&(a=M,r=p)}if(n.laneTimer-=t,n.laneTimer<=0)if(n.laneTimer=.3+Math.random()*.3,r&&a<26&&r.v<n.v+2){let p=ft.RL[e],M=r.lat-p>0?-1:1,m=M>0?ft.W/2-1.2-p:ft.W/2-1.2+p;n.laneT=M*Math.min(3.4,m)}else(!r||a>40)&&(n.laneT=0);r&&a<8.5&&(s=Math.min(s,r.v-(8.5-a)*.8));let o=(13*(1-(n.v/95)**2)+1.5)*(n.skill*n.skill),l=n.v;n.v=n.v<s?Math.min(s,n.v+o*t):Math.max(s,n.v-38*t),n.v=Math.max(0,n.v),n.harvest=n.v<l-.01,n.lane+=Qe(n.laneT-n.lane,-3.2*t,3.2*t);let c=ft.W/2-1.15,h=Qe(ft.RL[e]+n.lane,-c,c),u=n.lat;n.lat+=(h-n.lat)*Math.min(1,t*2.4),n.latV=(n.lat-u)/t,n.s+=n.v*t,n.s>=ft.L&&(n.s-=ft.L),ft.pos(n.s,n.lat,er),n.x=er.x,n.z=er.z,n.yaw=Math.atan2(er.tx,er.tz)+Math.atan2(n.latV,Math.max(n.v,3)),n.yawRate=-ft.K[e]*n.v,n.steerA=Qe(ft.K[e]*30,-1,1);let f=n.v,d=1;for(;d<8&&f>ds[d]*.985;)d++;n.gear=d,n.rpm=Qe(5200+7300*(f-ds[d-1]*.85)/(ds[d]-ds[d-1]*.85),4500,12500),n.thr=n.v>=l?1:0}function Cv(){for(let n=0;n<Re.length;n++)for(let t=n+1;t<Re.length;t++){let e=Re[n],i=Re[t],s=Jh(e.s,i.s),r=i.lat-e.lat;if(Math.abs(s)>5.3||Math.abs(r)>1.95)continue;if(Tt.dmg==="real"&&nt.phase==="race"){Iv(e,i,s,r);continue}let a=1.95-Math.abs(r),o=5.3-Math.abs(s),l=s>0?i:e,c=s>0?e:i;if(a<o*.45){let h=Math.sign(r)||1;$l(e,-h*a*.5),$l(i,h*a*.5),e.v*=.999,i.v*=.999,(e.isPlayer||i.isPlayer)&&(nt.touchCd||(te.touch(),nt.touchCd=.4,nt.shake=.25))}else{let h=c.v-l.v;if(h>0&&(c.v-=h*.6,l.v+=h*.35),Wh(c,-o*.6),h>4){let u=(e.x+i.x)/2,f=(e.z+i.z)/2;for(let d=0;d<12;d++)ar.emit(u,.3,f,(Math.random()-.5)*8,Math.random()*4,(Math.random()-.5)*8,.5,.08,0,Ql,1,.2,9);(e.isPlayer||i.isPlayer)&&(te.crash(h),nt.shake=Math.min(1,h*.06)),h>12&&l.ai&&(l.mistake=1.2)}}}}var Pv={damage(n,t,e,i){t<3||(e>1.3?_a(n,"fw",t/9):e<-1.3?_a(n,"rw",t/12):_a(n,"susp",t/11,Math.sign(i)||1),n.ai&&(t>11||Math.abs(n.spin)>3.2)||n.isPlayer&&t>15?Jl(n):n.ai&&t>6&&(n.mistake=1+t*.1))}};function _a(n,t,e,i){let s=n.dmg;if(s[t]=Math.min(1.5,s[t]+e),i&&(n.pullSide=i),t!=="susp"&&s[t]>=1&&!n.lost[t]){n.lost[t]=!0;let r=n.mesh.userData,a=t==="fw"?r.fwing:r.rwing,[o,l]=[Math.sin(n.yaw)*n.v,Math.cos(n.yaw)*n.v];ql.launch(a,o*.7+(Math.random()-.5)*6,2+Math.random()*3,l*.7+(Math.random()-.5)*6,9),a.visible=!1,n.ai&&(n.skill*=t==="fw"?.94:.96),n.isPlayer?(tn(t==="fw"?"FRONT WING GONE":"REAR WING GONE","warn",1.8,t==="fw"?"Heavy understeer":"No rear grip in fast corners"),Vh()):n.mesh.position.distanceTo(Se.position)<120&&rr(`${n.team.code} lost the ${t==="fw"?"front":"rear"} wing`)}if(t==="susp"&&s.susp>=1&&!n.lost.wheel){n.lost.wheel=!0;let r=n.mesh.userData,a=i>0?Math.random()<.5?0:2:Math.random()<.5?1:3,o=r.wheels[a].parent;ql.launch(o,Math.sin(n.yaw)*n.v*.6+i*4,3+Math.random()*3,Math.cos(n.yaw)*n.v*.6,12),o.visible=!1,Jl(n)}n.isPlayer&&Vh()}function Jl(n,t){if(!n.dnf)if(vd(n,t),n.dnf=!0,n.dnfT=nt.t,n.done=!1,n.isPlayer){nt.shake=1.2,te.crash(30),tn("CRASHED OUT","warn",3.2,"Did not finish"),nt.finishAt=nt.t,ti.races++;try{localStorage.setItem("jkgp-stats",JSON.stringify(ti))}catch{}setTimeout(()=>{nt.phase!=="menu"&&(nt.camMode="orbit",ec())},3800)}else rr(`\u{1F7E1} Yellow flag \xB7 ${n.team.code} crashed out`)}function Iv(n,t,e,i){let s=1.95-Math.abs(i),r=5.3-Math.abs(e),a=e>0?t:n,o=e>0?n:t;if(s<r*.45){let f=Math.sign(i)||1;$l(n,-f*s*.5),$l(t,f*s*.5)}else Wh(o,-r*.5),Wh(a,r*.2);let l=_d(n,t,Pv);if(l<=0)return;let c=(n.x+t.x)/2,h=(n.z+t.z)/2,u=Math.min(60,6+l*4);for(let f=0;f<u;f++)ar.emit(c,.35,h,(Math.random()-.5)*(6+l),Math.random()*(2+l*.3),(Math.random()-.5)*(6+l),.4+Math.random()*.4,.09,0,Ql,1,.2,9);if(l>6)for(let f=0;f<8;f++)ms.emit(c,.4,h,(Math.random()-.5)*3,1,(Math.random()-.5)*3,1.4,.9,2.4,Yl,.4,.5);(n.isPlayer||t.isPlayer)&&(l>4?(te.crash(l*1.5),nt.shake=Math.min(1.2,l*.07),l>9&&tn("CONTACT!","warn",1)):nt.touchCd||(te.touch(),nt.touchCd=.4,nt.shake=.25))}function Vh(){let n=me&&me.dmg,t=Ut("dmgHud");t&&(t.classList.toggle("on",Tt.dmg==="real"&&Tt.mode!=="tt"),n&&[["dFW","fw"],["dRW","rw"],["dSU","susp"]].forEach(([e,i])=>{let s=me.lost[i==="susp"?"wheel":i]?2:n[i];Ut(e).className=s>=1?"x":s>.55?"r":s>.2?"y":""}))}function $l(n,t){if(n.ai&&!n.wr){n.lat+=t;return}n.x+=ft.nx(n.idx)*t,n.z+=ft.nz(n.idx)*t}function Wh(n,t){if(n.ai&&!n.wr){n.s=(n.s+t+ft.L)%ft.L;return}n.x+=ft.TX[n.idx]*t,n.z+=ft.TZ[n.idx]*t}function Lv(n){if(n.dnf)return;let t=ft.L,e=n.prevS>t*.75&&n.s<t*.25,i=n.prevS<t*.25&&n.s>t*.75;if(n.prevS=n.s,i){n.lap--;return}if(e){if(n.lap>=1&&!(n.isPlayer&&n.lapsDeleted)){let s=nt.t-n.lapStart;n.last=s;let r=!n.inval;r&&(!n.best||s<n.best)&&(n.best=s),r&&Tt.mode!=="tt"&&(!nt.fast.t||s<nt.fast.t)?(nt.fast={t:s,c:n},n.isPlayer?(tn("FASTEST LAP","purple",2,An(s)),te.purple()):nt.t>5&&rr(`Fastest lap \xB7 ${n.team.code} ${An(s)}`)):n.isPlayer&&(tn(r?"LAP "+n.lap:"LAP DELETED",r?"":"warn",1.6,An(s)),te.lap()),n.isPlayer&&Tt.mode==="tt"&&r&&Dv(s)}n.lap++,n.lapStart=nt.t,n.inval=!1,n.cpK=-1,n.isPlayer&&ve&&(ve.rec=[]),Tt.mode!=="tt"&&n.lap>nt.laps&&!n.done?(n.done=!0,n.finishT=nt.t,n.isPlayer&&Uv()):n.isPlayer&&Tt.mode!=="tt"&&n.lap===nt.laps&&nt.laps>1&&setTimeout(()=>tn("FINAL LAP","final",2),1700)}if(n.lap>=1){let s=ft.L/3,r=n.s<s?0:n.s<2*s?1:2;n.sk===void 0?(n.sk=r,n.secStart=nt.t):r!==n.sk&&(r===(n.sk+1)%3&&Nv(n,n.sk,nt.t-n.secStart),n.sk=r,n.secStart=nt.t)}if(n.lap>=1){let s=Math.floor(n.s/100);s!==n.cpK&&(n.cpK=s,n.cp.set(n.lap*1e3+s,nt.t),n.lastKey=n.lap*1e3+s)}}function Nv(n,t,e){n.bestSec=n.bestSec||[];let i="y";!nt.bestSec[t]||e<nt.bestSec[t]?(nt.bestSec[t]=e,i="p"):(!n.bestSec[t]||e<n.bestSec[t])&&(i="g"),(!n.bestSec[t]||e<n.bestSec[t])&&(n.bestSec[t]=e),n.isPlayer&&(t===0&&(nt.sec=[null,null,null]),nt.sec[t]=[i,e],Nd())}function Nd(){for(let n=0;n<3;n++){let t=Ut("s"+(n+1)),e=nt.sec[n];t.className=e?e[0]:"",t.textContent=e?e[1].toFixed(3):"S"+(n+1)}}function Dv(n){let t=ya(ft.id);if(!t||n<t){try{localStorage.setItem("jkgp-best-"+ft.id,n.toFixed(3))}catch{}if(tn("NEW RECORD","purple",2.2,An(n)),te.purple(),ve&&ve.rec.length){ve.best=ve.rec.slice();try{localStorage.setItem("jkgp-ghost-"+ft.id,JSON.stringify(ve.best.map(e=>Math.round(e*100)/100)))}catch{}}}}function Dd(n){if(nt.touchCd>0&&(nt.touchCd-=n),nt.phase==="lights"){nt.lt+=n;let e=Math.min(5,Math.floor(nt.lt));e>nt.lights&&(nt.lights=e,te.light(),qh()),nt.lt>=5+nt.hold&&(nt.phase="race",nt.lights=0,qh(),te.go(),tn("LIGHTS OUT","go",1.4,"Go go go!"),Re.forEach(i=>i.lapStart=0))}else nt.t+=n;let t=nt.inp||{thr:0,brk:0,st:0};for(let e of Re)e.ai?Rv(e,n):Tv(e,n,t);if(nt.phase!=="lights"){Cv();for(let e of Re)Lv(e)}ve&&nt.phase==="race"&&me.lap>=1&&(ve.rec.length===0&&(ve.t=0),ve.t++%6===0&&ve.rec.push(me.x,me.z,me.yaw))}function ba(){te.init(),ps(),jl(Tt.track),nt.laps=Tt.mode==="tt"?999:Tt.laps,ql.clear(),Sa(!1),Object.assign(nt,{phase:Tt.mode==="tt"?"race":"lights",paused:!1,t:0,lt:0,lights:0,hold:.4+Math.random()*1.6,bestSec:[],sec:[null,null,null],lastPos:0,fast:{t:0,c:null},finishAt:0,resultsShown:!1,camMode:Tt.cam,shake:0}),Re.forEach(n=>{n.lap=0,n.lapStart=0}),Tt.mode==="tt"&&(me.lap=0),Ma.visible=Tt.line,Bv(),document.body.className="playing"+(ir?" touch":"")+(Tt.mode==="tt"?" tt":""),Ut("menu").classList.remove("on"),Ut("results").classList.remove("on"),Ut("pause").classList.remove("on"),Ut("hud").classList.add("on"),Ut("lapsTot").textContent=Tt.mode==="tt"?"":"/"+nt.laps,Kl=!1,sr(),Vh(),Tt.mode==="tt"?tn("TIME TRIAL","",2,ya(ft.id)?"Record "+An(ya(ft.id)):"Set a lap time"):tn(ft.def.name.toUpperCase(),"",2.4,`${nt.laps} lap${nt.laps>1?"s":""} \xB7 ${Tt.diff.toUpperCase()}`),qh(),Nd(),va=performance.now()}function Uv(){me.auto=!0;let n=tc().indexOf(me)+1;nt.finishAt=nt.t,ti.races++,n===1&&ti.wins++,n<=3&&ti.podiums++;try{localStorage.setItem("jkgp-stats",JSON.stringify(ti))}catch{}tn(n===1?"VICTORY!":"P"+n,n===1?"purple":n<=3?"go":"",3,n===1?"You win the "+ft.def.name:n<=3?"Podium finish!":"Chequered flag"),n<=3?te.win():te.lap(),setTimeout(()=>{nt.camMode="orbit",ec()},3800)}function tc(){return Re.slice().sort((n,t)=>n.dnf!==t.dnf?n.dnf?1:-1:n.dnf?t.dnfT-n.dnfT:n.done&&t.done?n.finishT-t.finishT:n.done?-1:t.done?1:ei(t)-ei(n))}function $h(){nt.phase="menu",nt.paused=!1,te.stopLoops(),document.body.className=ir?"touch":"",Ut("hud").classList.remove("on"),Ut("results").classList.remove("on"),Ut("pause").classList.remove("on"),Ut("menu").classList.add("on"),jl(Tt.track),Sa(!0),nt.camMode="orbit",Ma.visible=!1,sr(),Qh()}function Ea(n){nt.phase==="menu"||nt.resultsShown||(nt.paused=n!==void 0?n:!nt.paused,Ut("pause").classList.toggle("on",nt.paused),nt.paused&&te.stopLoops(),va=performance.now())}document.addEventListener("visibilitychange",()=>{document.hidden&&nt.phase!=="menu"&&Ea(!0)});function Kh(){if(nt.phase==="menu"||nt.resultsShown)return;let n=["chase","far","tcam","cockpit"];Tt.cam=n[(n.indexOf(Tt.cam)+1)%n.length],nt.camMode=Tt.cam,ps(),sr(),Kl=!1,tn({chase:"CHASE CAM",far:"FAR CHASE",tcam:"T-CAM",cockpit:"COCKPIT"}[Tt.cam],"",.8)}function sr(){Re.forEach(n=>{let t=n.mesh.userData,e=n.isPlayer&&nt.camMode==="cockpit";t.sw.visible=e,t.helm.visible=!e}),Se.near=nt.camMode==="cockpit"||nt.camMode==="tcam"?.05:.25,Se.updateProjectionMatrix()}var Bl=new D,Td=new an;function Fv(n){for(let t of Re){let e=t.mesh,i=e.userData;e.position.set(t.x,0,t.z),e.rotation.y=t.yaw;let s=t.lastV!==void 0?(t.v-t.lastV)/Math.max(n,.001):0;t.lastV=t.v,t.pitch=jn(t.pitch,Qe(-s*.0012,-.025,.02),1-Math.exp(-n*6)),t.roll=jn(t.roll,Qe((t.yawRate||0)*t.v*7e-4,-.03,.03),1-Math.exp(-n*6));let r=t.surface==="kerb"?(Math.random()-.5)*.012:t.surface==="gravel"||t.surface==="grass"?(Math.random()-.5)*.02:0;i.body.rotation.set(t.pitch,0,t.roll+(t.wr?t.wr.roll:0)),i.body.position.y=r-Math.min(.03,t.v*t.v*4e-6),t.wheel+=t.v*n/mn.r,i.wheels.forEach(h=>h.rotation.x=t.wheel),i.steer.forEach(h=>h.rotation.y=-t.steerA*.3),i.flap.rotation.x=jn(i.flap.rotation.x,t.drsOpen?.06:.55,1-Math.exp(-n*14)),i.glow.emissiveIntensity=t.harvest&&t.v>15?Math.sin(performance.now()*.025)>0?4:.3:.6;let a=Math.sin(t.yaw),o=Math.cos(t.yaw),l=t.x-a*1.8,c=t.z-o*1.8;if(t.isPlayer&&((t.slideAmt>.12||t.lockup)&&t.v>8&&Math.random()<.9&&[1,-1].forEach(u=>ms.emit(l+o*.8*u,.3,c-a*.8*u,(Math.random()-.5)*2,.6,(Math.random()-.5)*2,1.4,.8,2.4,Yl,.3,.5)),(t.surface==="gravel"||t.surface==="grass")&&t.v>6))for(let u=0;u<2;u++)ms.emit(l+(Math.random()-.5)*1.8,.3,c,-a*t.v*.15+(Math.random()-.5)*3,1+Math.random()*2,-o*t.v*.15+(Math.random()-.5)*3,1.3,.9,2,t.surface==="gravel"?_v:vv,.45,.4,2);if(t.v>72&&Math.random()<n*(t.isPlayer?6:2)&&Si!=="low")for(let h=0;h<6;h++)ar.emit(l+(Math.random()-.5)*.8,.05,c,-a*t.v*.5+(Math.random()-.5)*4,Math.random()*2.5,-o*t.v*.5+(Math.random()-.5)*4,.25+Math.random()*.25,.06,0,Ql,1,.3,9);i.blob.visible=!0}if(ve){let t=ve.best,e=ve.mesh;if(t&&nt.phase==="race"&&me.lap>=1&&Tt.mode==="tt"){let i=(nt.t-me.lapStart)/.05,s=Math.floor(i)*3;if(s+5<t.length){let r=i-Math.floor(i);e.visible=!0,e.position.set(jn(t[s],t[s+3],r),0,jn(t[s+1],t[s+4],r)),e.rotation.y=t[s+2]+Yh(t[s+5],t[s+2])*r,e.position.distanceToSquared(me.mesh.position)<30&&(e.visible=!1)}else e.visible=!1}else e.visible=!1}}var Kl=!1,wd=new D,Lb=new D,ga=0;function Ov(n){let t=me;if(!t)return;let e=62;if(nt.camMode==="debug"){window.__dbg&&window.__dbg();return}if(nt.camMode==="orbit"){nt.orbitT+=n*.12;let s=nt.phase==="menu"?7.4:11,r=nt.orbitT+(nt.phase==="menu"?2.4:0),a=t.x+Math.sin(r)*s,o=t.z+Math.cos(r)*s;nt.phase==="menu"?(Se.position.set(a,1.55+Math.sin(nt.orbitT*.7)*.3,o),Se.lookAt(t.x,.55,t.z)):(wd.lerp(Bl.set(a,3.2,o),1-Math.exp(-n*2)),Se.position.copy(wd),Se.lookAt(t.x,.6,t.z)),e=nt.phase==="menu"?40:50}else if(nt.camMode==="chase"||nt.camMode==="far"){let s=nt.camMode==="far",r=(s?9.6:6)+t.v*.012,a=s?3.1:1.8;Kl||(ga=t.yaw,Kl=!0),ga+=Yh(t.yaw,ga)*(1-Math.exp(-n*(s?5:7)));let o=Math.sin(ga),l=Math.cos(ga);Se.position.set(t.x-o*r,a,t.z-l*r),Se.lookAt(t.x+Math.sin(t.yaw)*5,s?1:.95,t.z+Math.cos(t.yaw)*5),e=60+Math.max(0,t.v)*.16+(t.ersOn?2:0)}else{let s=nt.camMode==="cockpit",r=t.mesh;r.updateMatrixWorld(!0);let a=r.userData.body;Bl.set(0,s?.9:1.22,s?-.08:-.62),a.localToWorld(Bl),Se.position.copy(Bl),a.getWorldQuaternion(Td),Se.quaternion.copy(Td),Se.rotateY(Math.PI),Se.rotateX(s?-.06:-.1),e=(s?70:66)+Math.max(0,t.v)*.1}if(nt.shake>0){nt.shake=Math.max(0,nt.shake-n*2);let s=nt.shake*.12;Se.position.x+=(Math.random()-.5)*s,Se.position.y+=(Math.random()-.5)*s}nt.camMode!=="orbit"&&(t.surface==="kerb"||t.surface==="gravel")&&t.v>5&&(Se.position.y+=(Math.random()-.5)*.025),Se.fov=Qe(jn(Se.fov,e,1-Math.exp(-n*4)),30,100),Se.updateProjectionMatrix(),Vn.position.set(t.x+Gl.x*200,Gl.y*200,t.z+Gl.z*200),Vn.target.position.set(t.x,0,t.z),Vi&&Vi.userData.sky.position.set(Se.position.x,0,Se.position.z);let i=ln.domElement.height/(2*Math.tan(Se.fov*Math.PI/360));ms.mat.uniforms.scale.value=ar.mat.uniforms.scale.value=i}var Xh=[],Bh=0;function Bv(){let n=Ut("tower");n.innerHTML="",Xh.length=0,Re.forEach(t=>{let e=document.createElement("div");e.className="tr"+(t.isPlayer?" me":""),e.innerHTML=`<b></b><i style="background:${t.team.paint};box-shadow:inset -3px 0 ${t.team.accent}"></i><span>${t.team.code}</span><em></em>`,n.appendChild(e),Xh.push({c:t,d:e,b:e.children[0],em:e.children[3]})}),n.style.height=Re.length*26+"px"}function zv(){let n=tc();nt.order=n;let t=n[0];if(me&&Tt.mode!=="tt"&&nt.phase==="race"&&nt.t>4&&!me.done){let e=n.indexOf(me)+1;if(nt.lastPos&&e!==nt.lastPos){let i=e<nt.lastPos,s=Ut("posW");s.classList.remove("up","dn"),s.offsetWidth,s.classList.add(i?"up":"dn"),i&&rr("\u25B2 Overtake \xB7 P"+e)}nt.lastPos=e}n.forEach((e,i)=>{e.pos=i+1}),Xh.forEach(e=>{let i=e.c,s=i.pos-1;e.d.style.transform=`translateY(${s*26}px)`,e.b.textContent=i.pos;let r="";if(i.dnf)r="OUT";else if(Tt.mode==="tt")r=i.best?An(i.best):"";else if(nt.phase==="lights"||nt.t<3)r="";else if(s===0)r=i.done?"FINISH":"LAP "+Math.max(1,Math.min(i.lap,nt.laps));else if(i.done&&t.done)r=Wl(i.finishT-t.finishT);else{let a=Math.floor((ei(t)-ei(i))/ft.L);if(a>=1)r="+"+a+" LAP";else{let o=t.cp.get(i.lastKey),l=i.cp.get(i.lastKey);r=o!==void 0&&l!==void 0?Wl(l-o):""}}nt.fast.c===i&&Tt.mode!=="tt"?e.d.classList.add("fl"):e.d.classList.remove("fl"),e.em.textContent=r})}var Ad=[...document.querySelectorAll("#rpm i")],Rd={};function Gn(n,t){Rd[n]!==t&&(Rd[n]=t,Ut(n).textContent=t)}function kv(n){let t=me;if(!t||nt.phase==="menu")return;Bh-=n,Bh<=0&&(Bh=.2,zv()),Gn("spd",Math.round(Math.abs(t.v)*3.6)),Gn("gear",t.v<-.5?"R":nt.phase==="lights"?"N":t.gear);let e=Qe((t.rpm-5e3)/7300,0,1),i=t.rpm>12300;Ad.forEach((c,h)=>{let u=e*Ad.length>h;c.className=u?i?"b":h<5?"g":h<10?"r":"p":""}),gd(t.mesh,e,i);let s=t.pos||1;if(Gn("pos",Tt.mode==="tt"?"TT":"P"+s),Gn("posOf",Tt.mode==="tt"?"":"/"+Re.length),Gn("lapN",Math.max(1,Math.min(t.lap,nt.laps))),Ut("thrB").style.transform=`scaleY(${(t.thr||0).toFixed(2)})`,Ut("brkB").style.transform=`scaleY(${(t.brk||0).toFixed(2)})`,Gn("tLap","LAP "+Math.max(1,Math.min(t.lap,nt.laps))+(Tt.mode==="tt"?"":" / "+nt.laps)),Gn("tCur",t.lap>=1&&nt.phase!=="lights"?An(nt.t-t.lapStart):An(0)),Gn("tLast",An(t.last)),Gn("tBest",An(Tt.mode==="tt"&&ya(ft.id)||t.best)),Ut("tCur").classList.toggle("inv",!!t.inval),Tt.mode==="tt"&&ve&&ve.best&&t.lap>=1){let c=ve.best,h=0,u=1e18,f=nt.t-t.lapStart,d=Math.max(0,Math.floor(f/.05)-60);for(let M=d;M<Math.min(c.length/3,d+140);M++){let m=(c[M*3]-t.x)**2+(c[M*3+1]-t.z)**2;m<u&&(u=m,h=M)}let p=f-h*.05;Gn("tDelta",Wl(p)),Ut("tDelta").className=p>0?"up":"dn"}else Gn("tDelta","");let r=Ut("drs");r.className=t.drsOpen?"open":t.drsAvail?"avail":"",Ut("ersBar").style.width=(t.ers*100).toFixed(1)+"%",Ut("ers").classList.toggle("on",t.ersOn),Ut("slip").classList.toggle("on",!!t.slip),Ut("vig").style.opacity=Qe((t.v-55)/50,0,.9)+(t.ersOn?.15:0);let a=Hh.getContext("2d");a.clearRect(0,0,200,200);for(let c of Re){if(c===t)continue;let[h,u]=ft.toMap(c.x,c.z);a.fillStyle=c.team.paint,a.strokeStyle=c.team.accent,a.lineWidth=2,a.beginPath(),a.arc(h,u,4.2,0,7),a.fill(),a.stroke()}if(ve&&ve.mesh.visible){let[c,h]=ft.toMap(ve.mesh.position.x,ve.mesh.position.z);a.fillStyle="rgba(255,255,255,.45)",a.beginPath(),a.arc(c,h,4,0,7),a.fill()}let[o,l]=ft.toMap(t.x,t.z);if(a.fillStyle="#e10600",a.strokeStyle="#000",a.lineWidth=2.5,a.beginPath(),a.arc(o,l,6,0,7),a.fill(),a.stroke(),!nt.paused&&!nt.resultsShown){te.engine(t.rpm,t.thr||0,!0);let c=1e9,h=null;for(let u of Re){if(u===t)continue;let f=Math.hypot(u.x-t.x,u.z-t.z);f<c&&(c=f,h=u)}if(h){let u=h.x-t.x,f=h.z-t.z,d=((t.v*Math.sin(t.yaw)-h.v*Math.sin(h.yaw))*u+(t.v*Math.cos(t.yaw)-h.v*Math.cos(h.yaw))*f)/Math.max(c,1),p=-(u*Math.cos(t.yaw)-f*Math.sin(t.yaw))/Math.max(c,1);te.rivals(c,d,h.rpm,p)}te.surface(t.slideAmt*3+(t.lockup?1.5:0),t.v,t.surface==="kerb"&&t.v>5)}}function qh(){document.querySelectorAll("#lights i").forEach((n,t)=>n.classList.toggle("on",nt.lights>t)),Ut("lights").classList.toggle("on",nt.phase==="lights"),Re.length&&ft&&ft.lights.forEach((n,t)=>n.emissiveIntensity=nt.phase==="lights"&&nt.lights>t?6:0)}var Vl=0;function tn(n,t,e=1.5,i=""){let s=Ut("msg");s.className="on"+(t?" m-"+t:""),Ut("msgT").textContent=n,Ut("msgS").textContent=i,s.offsetWidth,s.classList.add("pop"),Vl=e}function rr(n){let t=Ut("note");t.textContent=n,t.classList.add("on"),clearTimeout(rr.tm),rr.tm=setTimeout(()=>t.classList.remove("on"),2600)}function ec(){nt.resultsShown=!0,te.stopLoops();let n=tc(),t=n[0],e=n.indexOf(me)+1;Ut("resTitle").textContent=me.dnf?"DNF \xB7 Crashed out":e===1?"Victory":"P"+e+(e<=3?" \xB7 Podium":""),Ut("resSub").textContent=`${ft.def.name} \xB7 ${nt.laps} lap${nt.laps>1?"s":""} \xB7 ${Tt.diff[0].toUpperCase()+Tt.diff.slice(1)}`,Ut("resRows").innerHTML=n.map((i,s)=>{let r;if(i.dnf)r="DNF";else if(s===0)r=An(i.finishT);else if(i.done)r=Wl(i.finishT-t.finishT);else{let a=Math.floor((ei(t)-ei(i))/ft.L+(t.done,0));r=a>=1?"+"+a+" lap"+(a>1?"s":""):"on track"}return`<div class="rr${i.isPlayer?" me":""}"><b>${s+1}</b><i style="background:${i.team.paint};box-shadow:inset -4px 0 ${i.team.accent}"></i><span><strong>${i.team.driver}</strong><small>${i.team.name}</small></span><em>${r}</em><em class="${nt.fast.c===i?"fl":""}">${An(i.best)}</em><u>${i.dnf?0:dv[s]||0}</u></div>`}).join(""),Ut("results").classList.add("on")}Ut("resAgain").onclick=()=>{te.click(),ba()};Ut("resMenu").onclick=()=>{te.click(),$h()};Ut("pResume").onclick=()=>Ea(!1);Ut("pRestart").onclick=()=>ba();Ut("pMenu").onclick=()=>$h();Ut("snd").onclick=()=>{te.init(),Ut("snd").textContent=te.toggle()?"\u{1F50A}":"\u{1F507}"};Ut("snd").textContent=te.on?"\u{1F50A}":"\u{1F507}";function fs(n,t,e,i){let s=Ut(n);s.innerHTML="",t.forEach(([r,a])=>{let o=document.createElement("button");o.className="chip"+(Tt[e]===r?" on":""),o.textContent=a,o.onclick=()=>{te.init(),te.click(),Tt[e]=r,ps(),[...s.children].forEach(l=>l.classList.remove("on")),o.classList.add("on"),i&&i(r)},s.appendChild(o)})}function Hv(n,t){let e=Ut(n);e.innerHTML="",t.forEach(([i,s])=>{let r=document.createElement("button");r.className="chip"+(Tt[i]?" on":""),r.textContent=s,r.onclick=()=>{te.init(),te.click(),Tt[i]=!Tt[i],ps(),r.classList.toggle("on",Tt[i])},e.appendChild(r)})}function Qh(){let n=Ut("mTracks");n.innerHTML="",Object.entries(Lh).forEach(([e,i])=>{let s=document.createElement("button");s.className="tcard"+(Tt.track===e?" on":"");let r=ya(e);s.innerHTML=`<canvas width="88" height="88"></canvas><div><b>${i.name}</b><small>${i.blurb}</small><span>${{day:"Day",sunset:"Sunset",night:"Night"}[i.time]} \xB7 ${r?"Record "+An(r):"No record yet"}</span></div>`;let a=e===(ft&&ft.id)?ft:Zl[e]||(Zl[e]=new ma(e));s.querySelector("canvas").getContext("2d").drawImage(a.minimap(88),0,0),s.onclick=()=>{Tt.track!==e&&(te.init(),te.click(),Tt.track=e,ps(),Ut("loading").classList.add("on"),setTimeout(()=>{jl(e),Sa(!0),sr(),Ut("loading").classList.remove("on"),Qh()},30))},n.appendChild(s)}),fs("mMode",[["race","Grand Prix"],["tt","Time Trial"]],"mode",()=>Ut("menu").classList.toggle("tt",Tt.mode==="tt")),Ut("menu").classList.toggle("tt",Tt.mode==="tt"),fs("mLaps",[[1,"1"],[3,"3"],[5,"5"],[10,"10"]],"laps"),fs("mDiff",[["rookie","Rookie"],["pro","Pro"],["legend","Legend"]],"diff"),fs("mGrid",[["pole","Pole"],["mid","Midfield"],["back","Back row"]],"grid"),fs("mDmg",[["arcade","Arcade"],["real","Realistic crashes"]],"dmg");let t=Ut("mTeams");t.innerHTML="",Kn.forEach(e=>{let i=document.createElement("button");i.className="sw"+(Tt.team===e.id?" on":""),i.title=e.name,i.style.background=`linear-gradient(135deg,${e.paint} 0 55%,${e.accent} 55%)`,i.onclick=()=>{te.init(),te.click(),Tt.team=e.id,ps(),[...t.children].forEach(s=>s.classList.remove("on")),i.classList.add("on"),Cd(),Sa(!0),sr()},t.appendChild(i)}),Cd(),Hv("mAssist",[["line","Racing line"],["brake","Brake assist"],["steer","Steer assist"],["autoDrs","Auto DRS"]]),fs("mCam",[["chase","Chase"],["far","Far"],["tcam","T-Cam"],["cockpit","Cockpit"]],"cam"),fs("mQual",[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]],"quality",()=>location.reload()),Ut("mStats").innerHTML=`<span>Races <b>${ti.races}</b></span><span>Wins <b>${ti.wins}</b></span><span>Podiums <b>${ti.podiums}</b></span>`}function Cd(){let n=Kn.find(t=>t.id===Tt.team)||Kn[0];Ut("mTeamName").innerHTML=`<b>#${n.num} ${n.driver}</b> \xB7 ${n.name}`}Ut("go").onclick=()=>{te.init(),te.click(),ba()};var va=performance.now(),zl=0,kl=0,zh=0;function Ud(n){requestAnimationFrame(Ud);let t=Qe((n-va)/1e3,0,.05);if(va=Math.max(va,n),bv(),nt.inp=Ev(),nt.phase!=="menu"&&!nt.paused){zl+=t;let e=0;for(;zl>=Oh&&e<12;)Dd(Oh),zl-=Oh,e++;e>=12&&(zl=0)}if(nt.phase==="menu"&&me&&(me.v=0),nt.paused||(Fv(nt.phase==="menu"?0:t),ms.update(t),ar.update(t),ql.step(t)),Ov(t),kv(t),Vl>0&&(Vl-=t,Vl<=0&&(Ut("msg").className="")),nt.resultsShown&&nt.phase!=="menu"&&Math.random()<.05&&Gv(),Mi&&!window.__direct?Mi.render():ln.render(je,Se),kl+=t,zh++,kl>2){let e=zh/kl;kl=0,zh=0;let i=Qn;e<42&&Qn>.6?Qn=Math.max(.6,Qn-.1):e>57&&Qn<1&&(Qn=Math.min(1,Qn+.05)),i!==Qn&&Zh()}}function Gv(){Ut("results").classList.contains("on")&&ec()}jl(Tt.track);Sa(!0);sr();Qh();nt.camMode="orbit";ln.compile(je,Se);Ut("menu").classList.add("on");Ut("loading").classList.remove("on");requestAnimationFrame(Ud);window.__gp={S:Tt,R:nt,get cars(){return Re},get player(){return me},get track(){return ft},step:Dd,startRace:ba,toMenu:$h,cam:Se,renderer:ln,keys:Ke,order:tc,showResults:ec};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
