var Vd=0,Ph=1,Wd=2;var Ss=1,Xd=2,xr=3,di=0,$t=1,Tn=2,bs=0,Qi=1,Gt=2,Ih=3,Lh=4,qd=5;var Es=100,Yd=101,Zd=102,$d=103,Jd=104,Kd=200,jd=201,Qd=202,ef=203,Dh=204,Nh=205,tf=206,nf=207,sf=208,rf=209,af=210,of=211,lf=212,cf=213,hf=214,Oo=0,Bo=1,zo=2,ir=3,ko=4,Ho=5,Go=6,Vo=7,_l=0,uf=1,df=2,fi=0,Uh=1,Fh=2,Oh=3,wa=4,Bh=5,zh=6,kh=7;var Hh=300,Ts=301,_r=302,yl=303,vl=304,ei=1e3,li=1001,Wo=1002,sn=1003,ff=1004;var Aa=1005;var bn=1006,Ml=1007;var Ni=1008;var Cn=1009,Gh=1010,Vh=1011,yr=1012,Sl=1013,ni=1014,Wn=1015,ii=1016,bl=1017,El=1018,ws=1020,Wh=35902,Xh=35899,qh=1021,Yh=1022,si=1023,Ci=1026,Ui=1027,Tl=1028,wl=1029,es=1030,Al=1031;var Rl=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,Cl=35840,Pl=35841,Il=35842,Ll=35843,Dl=36196,Nl=37492,Ul=37496,Fl=37488,Ol=37489,La=37490,Bl=37491,zl=37808,kl=37809,Hl=37810,Gl=37811,Vl=37812,Wl=37813,Xl=37814,ql=37815,Yl=37816,Zl=37817,$l=37818,Jl=37819,Kl=37820,jl=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,Da=36285,sc=36286;var Xr=2300,Xo=2301,Uo=2302,_h=2303,yh=2400,vh=2401,Mh=2402;var pf=3200;var Na=0,mf=1,Fi="",Et="srgb",qr="srgb-linear",Yr="linear",_t="srgb";var Fo=7680;var gf=519,xf=512,_f=513,yf=514,Zh=515,vf=516,Mf=517,$h=518,Jh=519,Kh=35044,As=35048;var jh="300 es",Gn=2e3,sr=2001;function dm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sf(){let n=Zr("canvas");return n.style.display="block",n}var od={},rr=null;function $r(...n){let e="THREE."+n.shift();rr?rr("log",e,...n):console.log(e,...n)}function bf(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function We(...n){n=bf(n);let e="THREE."+n.shift();if(rr)rr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Xe(...n){n=bf(n);let e="THREE."+n.shift();if(rr)rr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ms(...n){let e=n.join(" ");e in od||(od[e]=!0,We(...n))}function Ef(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Tf={[Oo]:Oo,[zo]:Go,[ko]:ko,[ir]:Ho,[Bo]:Bo,[Go]:zo,[Vo]:Vo,[Ho]:ir},ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var qc=Math.PI/180,qo=180/Math.PI;function ts(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function pm(n,e){return(n%e+e)%e}function Yc(n,e,t){return(1-t)*n+t*e}function wf(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rc(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Af(n,e){if(e.constructor===Float32Array)return n;let t=rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Rf(n,e){if(e.constructor===Float32Array)return n;let t=rc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var su=class su{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};su.prototype.isVector2=!0;var se=su,Ot=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],p=r[a+2],y=r[a+3];if(d!==y||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*y;m<0&&(h=-h,f=-f,p=-p,y=-y,m=-m);let g=1-o;if(m<.9995){let _=Math.acos(m),S=Math.sin(_);g=Math.sin(g*_)/S,o=Math.sin(o*_)/S,l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+y*o}else{l=l*g+h*o,c=c*g+f*o,u=u*g+p*o,d=d*g+y*o;let _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],p=r[a+3];return e[t]=o*p+u*d+l*f-c*h,e[t+1]=l*p+u*h+c*d-o*f,e[t+2]=c*p+u*f+o*h-l*d,e[t+3]=u*p-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(r/2),h=l(i/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ru=class ru{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ru.prototype.isVector3=!0;var I=ru,Zc=new I,ld=new Ot,au=class au{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],p=i[8],y=s[0],m=s[3],g=s[6],_=s[1],S=s[4],v=s[7],A=s[2],T=s[5],x=s[8];return r[0]=a*y+o*_+l*A,r[3]=a*m+o*S+l*T,r[6]=a*g+o*v+l*x,r[1]=c*y+u*_+d*A,r[4]=c*m+u*S+d*T,r[7]=c*g+u*v+d*x,r[2]=h*y+f*_+p*A,r[5]=h*m+f*S+p*T,r[8]=h*g+f*v+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,p=t*d+i*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(s*c-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=h*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var Ze=au,$c=new Ze,cd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mm(){let n={enabled:!0,workingColorSpace:qr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fi?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qr]:{primaries:e,whitePoint:i,transfer:Yr,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:cd,fromXYZ:hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),n}var ft=mm();function Ri(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bs,Yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Bs===void 0&&(Bs=Zr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Bs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Zr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ri(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ri(t[i]/255)*255):t[i]=Ri(t[i]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,ar=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Jc(s[a].image)):r.push(Jc(s[a]))}else r=Jc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Jc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var xm=0,Kc=new I,En=class n extends ci{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=li,s=li,r=bn,a=Ni,o=si,l=Cn,c=n.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=ts(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ei:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ei:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Hh;En.DEFAULT_ANISOTROPY=1;var ou=class ou{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,A=(g+1)/2,T=(u+h)/4,x=(d+y)/4,b=(p+m)/4;return S>v&&S>A?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=b/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=x/r,s=b/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-p)*(m-p)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(d-y)/_,this.z=(h-u)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ou.prototype.isVector4=!0;var wt=ou,Zo=class extends ci{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new En({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends Zo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jr=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends En{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var xl=class xl{constructor(e,t,i,s,r,a,o,l,c,u,d,h,f,p,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,d,h,f,p,y,m)}set(e,t,i,s,r,a,o,l,c,u,d,h,f,p,y,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xl().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,p=o*u,y=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+p*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,p=c*u,y=c*d;t[0]=h+y*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=y+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,p=c*u,y=c*d;t[0]=h-y*o,t[4]=-a*d,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=y-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,f=a*d,p=o*u,y=o*d;t[0]=l*u,t[4]=p*c-f,t[8]=h*c+y,t[1]=l*d,t[5]=y*c+h,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*u,t[4]=y-h*d,t[8]=p*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+p,t[10]=h-y*d}else if(e.order==="XZY"){let h=a*l,f=a*c,p=o*l,y=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+y,t[5]=a*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=o*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,ym)}lookAt(e,t,i){let s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Hi.crossVectors(i,Ln),Hi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Hi.crossVectors(i,Ln)),Hi.normalize(),ao.crossVectors(Ln,Hi),s[0]=Hi.x,s[4]=ao.x,s[8]=Ln.x,s[1]=Hi.y,s[5]=ao.y,s[9]=Ln.y,s[2]=Hi.z,s[6]=ao.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],p=i[2],y=i[6],m=i[10],g=i[14],_=i[3],S=i[7],v=i[11],A=i[15],T=s[0],x=s[4],b=s[8],L=s[12],C=s[1],D=s[5],z=s[9],G=s[13],R=s[2],O=s[6],U=s[10],F=s[14],Y=s[3],H=s[7],J=s[11],te=s[15];return r[0]=a*T+o*C+l*R+c*Y,r[4]=a*x+o*D+l*O+c*H,r[8]=a*b+o*z+l*U+c*J,r[12]=a*L+o*G+l*F+c*te,r[1]=u*T+d*C+h*R+f*Y,r[5]=u*x+d*D+h*O+f*H,r[9]=u*b+d*z+h*U+f*J,r[13]=u*L+d*G+h*F+f*te,r[2]=p*T+y*C+m*R+g*Y,r[6]=p*x+y*D+m*O+g*H,r[10]=p*b+y*z+m*U+g*J,r[14]=p*L+y*G+m*F+g*te,r[3]=_*T+S*C+v*R+A*Y,r[7]=_*x+S*D+v*O+A*H,r[11]=_*b+S*z+v*U+A*J,r[15]=_*L+S*G+v*F+A*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],y=e[7],m=e[11],g=e[15],_=l*f-c*h,S=o*f-c*d,v=o*h-l*d,A=a*f-c*u,T=a*h-l*u,x=a*d-o*u;return t*(y*_-m*S+g*v)-i*(p*_-m*A+g*T)+s*(p*S-y*A+g*x)-r*(p*v-y*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],y=e[13],m=e[14],g=e[15],_=t*o-i*a,S=t*l-s*a,v=t*c-r*a,A=i*l-s*o,T=i*c-r*o,x=s*c-r*l,b=u*y-d*p,L=u*m-h*p,C=u*g-f*p,D=d*m-h*y,z=d*g-f*y,G=h*g-f*m,R=_*G-S*z+v*D+A*C-T*L+x*b;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(o*G-l*z+c*D)*O,e[1]=(s*z-i*G-r*D)*O,e[2]=(y*x-m*T+g*A)*O,e[3]=(h*T-d*x-f*A)*O,e[4]=(l*C-a*G-c*L)*O,e[5]=(t*G-s*C+r*L)*O,e[6]=(m*v-p*x-g*S)*O,e[7]=(u*x-h*v+f*S)*O,e[8]=(a*z-o*C+c*b)*O,e[9]=(i*C-t*z-r*b)*O,e[10]=(p*T-y*v+g*_)*O,e[11]=(d*v-u*T-f*_)*O,e[12]=(o*L-a*D-l*b)*O,e[13]=(t*D-i*L+s*b)*O,e[14]=(y*S-p*A-m*_)*O,e[15]=(u*A-d*S+h*_)*O,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,p=r*d,y=a*u,m=a*d,g=o*d,_=l*c,S=l*u,v=l*d,A=i.x,T=i.y,x=i.z;return s[0]=(1-(y+g))*A,s[1]=(f+v)*A,s[2]=(p-S)*A,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(h+g))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(p+S)*x,s[9]=(m-_)*x,s[10]=(1-(h+y))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Jn.copy(this);let c=1/a,u=1/o,d=1/l;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,t.setFromRotationMatrix(Jn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,u=2*r/(t-e),d=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),p,y;if(l)p=r/(a-r),y=a*r/(a-r);else if(o===Gn)p=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===sr)p=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Gn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),p,y;if(l)p=1/(a-r),y=a/(a-r);else if(o===Gn)p=-2/(a-r),y=-(a+r)/(a-r);else if(o===sr)p=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};xl.prototype.isMatrix4=!0;var ct=xl,zs=new I,Jn=new ct,_m=new I(0,0,0),ym=new I(1,1,1),Hi=new I,ao=new I,Ln=new I,ud=new ct,dd=new Ot,ln=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ud.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ud,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dd.setFromEuler(this),this.setFromQuaternion(dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ln.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vm=0,fd=new I,ks=new Ot,Si=new ct,oo=new I,Dr=new I,Mm=new I,Sm=new Ot,pd=new I(1,0,0),md=new I(0,1,0),gd=new I(0,0,1),xd={type:"added"},bm={type:"removed"},Hs={type:"childadded",child:null},jc={type:"childremoved",child:null},Lt=class n extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new ln,i=new Ot,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ze}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?oo.copy(e):oo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Dr,oo,this.up):Si.lookAt(oo,Dr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Si),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Xe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Xe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bm),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xd),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dr,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new I(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pt=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Em={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Qc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Pe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=pm(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Qc(a,r,e+1/3),this.g=Qc(a,r,e),this.b=Qc(a,r,e-1/3)}return ft.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function i(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){let i=Cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return ft.workingToColorSpace(pn.copy(this),e),Math.round(st(pn.r*255,0,255))*65536+Math.round(st(pn.g*255,0,255))*256+Math.round(st(pn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(pn.copy(this),t);let i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Et){ft.workingToColorSpace(pn.copy(this),e);let t=pn.r,i=pn.g,s=pn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(lo);let i=Yc(Gi.h,lo.h,t),s=Yc(Gi.s,lo.s,t),r=Yc(Gi.l,lo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Pe;Pe.NAMES=Cf;var jr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gs=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Kn=new I,bi=new I,eh=new I,Ei=new I,Gs=new I,Vs=new I,_d=new I,th=new I,nh=new I,ih=new I,sh=new wt,rh=new wt,ah=new wt,Ai=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Kn.subVectors(s,t),bi.subVectors(i,t),eh.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(bi),l=Kn.dot(eh),c=bi.dot(bi),u=bi.dot(eh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,p=(a*u-o*l)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return sh.setScalar(0),rh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(e,t),rh.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(sh,r.x),a.addScaledVector(rh,r.y),a.addScaledVector(ah,r.z),a}static isFrontFacing(e,t,i,s){return Kn.subVectors(i,t),bi.subVectors(e,t),Kn.cross(bi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),Kn.cross(bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,i),Vs.subVectors(r,i),th.subVectors(e,i);let l=Gs.dot(th),c=Vs.dot(th);if(l<=0&&c<=0)return t.copy(i);nh.subVectors(e,s);let u=Gs.dot(nh),d=Vs.dot(nh);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(i).addScaledVector(Gs,a);ih.subVectors(e,r);let f=Gs.dot(ih),p=Vs.dot(ih);if(p>=0&&f<=p)return t.copy(r);let y=f*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Vs,o);let m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return _d.subVectors(r,s),o=(d-u)/(d-u+(f-p)),t.copy(s).addScaledVector(_d,o);let g=1/(m+y+h);return a=y*g,o=h*g,t.copy(i).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hi=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),co.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),co.copy(i.boundingBox)),co.applyMatrix4(e.matrixWorld),this.union(co)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),ho.subVectors(this.max,Nr),Ws.subVectors(e.a,Nr),Xs.subVectors(e.b,Nr),qs.subVectors(e.c,Nr),Vi.subVectors(Xs,Ws),Wi.subVectors(qs,Xs),hs.subVectors(Ws,qs);let t=[0,-Vi.z,Vi.y,0,-Wi.z,Wi.y,0,-hs.z,hs.y,Vi.z,0,-Vi.x,Wi.z,0,-Wi.x,hs.z,0,-hs.x,-Vi.y,Vi.x,0,-Wi.y,Wi.x,0,-hs.y,hs.x,0];return!oh(t,Ws,Xs,qs,ho)||(t=[1,0,0,0,1,0,0,0,1],!oh(t,Ws,Xs,qs,ho))?!1:(uo.crossVectors(Vi,Wi),t=[uo.x,uo.y,uo.z],oh(t,Ws,Xs,qs,ho))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ti=[new I,new I,new I,new I,new I,new I,new I,new I],jn=new I,co=new hi,Ws=new I,Xs=new I,qs=new I,Vi=new I,Wi=new I,hs=new I,Nr=new I,ho=new I,uo=new I,us=new I;function oh(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){us.fromArray(n,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),l=e.dot(us),c=t.dot(us),u=i.dot(us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xt=new I,fo=new se,Tm=0,It=class extends ci{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=Wn,this.version=0,this._normalizationScale=e!==void 0?rc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.array)}};var Qr=class extends It{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ea=class extends It{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var qe=class extends It{constructor(e,t,i){super(new Float32Array(e),t,i)}},wm=new hi,Ur=new I,lh=new I,Pi=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):wm.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);let t=Ur.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(lh)),this.expandByPoint(Ur.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Am=0,Hn=new ct,ch=new Lt,Ys=new I,Dn=new hi,Fr=new hi,nn=new I,yt=class n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?ea:Qr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,i){return Hn.makeTranslation(e,t,i),this.applyMatrix4(Hn),this}scale(e,t,i){return Hn.makeScale(e,t,i),this.applyMatrix4(Hn),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qe(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Dn.min,Fr.min),Dn.expandByPoint(nn),nn.addVectors(Dn.max,Fr.max),Dn.expandByPoint(nn)):(Dn.expandByPoint(Fr.min),Dn.expandByPoint(Fr.max))}Dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),nn.add(Ys)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new It(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let L=0;L<i.count;L++)o[L]=new I,l[L]=new I;let u=new I,d=new I,h=new I,f=new se,p=new se,y=new se,m=new I,g=new I;function _(L,C,D){c[L]=c[C]=c[D]=1,u.fromBufferAttribute(i,L),d.fromBufferAttribute(i,C),h.fromBufferAttribute(i,D),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,C),y.fromBufferAttribute(r,D),d.sub(u),h.sub(u),p.sub(f),y.sub(f);let z=1/(p.x*y.y-y.x*p.y);isFinite(z)&&(m.copy(d).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(z),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(z),o[L].add(m),o[C].add(m),o[D].add(m),l[L].add(g),l[C].add(g),l[D].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,C=S.length;L<C;++L){let D=S[L],z=D.start,G=D.count;for(let R=z,O=z+G;R<O;R+=3)_(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let v=new I,A=new I,T=new I,x=new I;function b(L){T.fromBufferAttribute(s,L),x.copy(T);let C=o[L];v.copy(C),v.sub(T.multiplyScalar(T.dot(C))).normalize(),A.crossVectors(x,C);let z=A.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,z)}for(let L=0,C=i.count;L<C;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,f=e.count;h<f;h+=3){let p=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,p=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new It(h,u,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ta=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=ts()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yd(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function yd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=ts()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var Sn=new I,lr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?rc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){$r("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$r("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Af(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Rf(e,this.data.array)}},hh=new I,Rm=new I,Cm=new Ze,Qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=hh.subVectors(i,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(hh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cm.getNormalMatrix(e),s=this.coplanarPoint(hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Pm=0,ti=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Qi,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Nh,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Qn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new se().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new se().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vn=class extends ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Or=new I,$s=new I,Js=new I,Ks=new se,Br=new se,Pf=new ct,po=new I,zr=new I,mo=new I,vd=new se,uh=new se,Md=new se,ui=class extends Lt{constructor(e=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new yt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ta(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new lr(i,3,0,!1)),Zs.setAttribute("uv",new lr(i,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new se(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Xe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Pf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Js.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;go(po.set(-.5,-.5,0),Js,a,$s,s,r),go(zr.set(.5,-.5,0),Js,a,$s,s,r),go(mo.set(.5,.5,0),Js,a,$s,s,r),vd.set(0,0),uh.set(1,0),Md.set(1,1);let o=e.ray.intersectTriangle(po,zr,mo,!1,Or);if(o===null&&(go(zr.set(-.5,.5,0),Js,a,$s,s,r),uh.set(0,1),o=e.ray.intersectTriangle(po,mo,zr,!1,Or),o===null))return;let l=e.ray.origin.distanceTo(Or);l<e.near||l>e.far||t.push({distance:l,point:Or.clone(),uv:Ai.getInterpolation(Or,po,zr,mo,vd,uh,Md,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function go(n,e,t,i,s,r){Ks.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Br.x=r*Ks.x-s*Ks.y,Br.y=s*Ks.x+r*Ks.y):Br.copy(Ks),n.copy(e),n.x+=Br.x,n.y+=Br.y,n.applyMatrix4(Pf)}var wi=new I,dh=new I,xo=new I,_o=new I,na=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,t),wi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){dh.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),_o.copy(this.origin).sub(dh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=_o.dot(this.direction),l=-_o.dot(xo),c=_o.lengthSq(),u=Math.abs(1-a*a),d,h,f,p;if(u>0)if(d=a*l-o,h=a*o-l,p=r*u,d>=0)if(h>=-p)if(h<=p){let y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dh).addScaledVector(xo,h),f}intersectSphere(e,t){if(e.radius<0)return null;wi.subVectors(e.center,this.origin);let i=wi.dot(this.direction),s=wi.dot(wi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,p=t.x-a.x,y=t.y-a.y,m=t.z-a.z,g=i.x-a.x,_=i.y-a.y,S=i.z-a.z,v=Math.abs(l),A=Math.abs(c),T=Math.abs(u),x,b,L,C,D,z,G,R,O,U,F,Y;if(v>=A&&v>=T?(L=l,z=d,O=p,Y=g,l>=0?(x=c,b=u,C=h,D=f,G=y,R=m,U=_,F=S):(x=u,b=c,C=f,D=h,G=m,R=y,U=S,F=_)):A>=T?(L=c,z=h,O=y,Y=_,c>=0?(x=u,b=l,C=f,D=d,G=m,R=p,U=S,F=g):(x=l,b=u,C=d,D=f,G=p,R=m,U=g,F=S)):(L=u,z=f,O=m,Y=S,u>=0?(x=l,b=c,C=d,D=h,G=p,R=y,U=g,F=_):(x=c,b=l,C=h,D=d,G=y,R=p,U=_,F=g)),L===0)return null;let H=x/L,J=b/L,te=1/L,be=C-H*z,Oe=D-J*z,K=G-H*O,ye=R-J*O,Ae=U-H*Y,ze=F-J*Y,ve=Ae*ye-ze*K,ke=be*ze-Oe*Ae,Rt=K*Oe-ye*be;if(s){if(ve<0||ke<0||Rt<0)return null}else if((ve<0||ke<0||Rt<0)&&(ve>0||ke>0||Rt>0))return null;let Ve=ve+ke+Rt;if(Ve===0)return null;let it=te*(ve*z+ke*O+Rt*Y);return(Ve>0?it<0:it>0)?null:this.at(it/Ve,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bt=class extends ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Sd=new ct,ds=new na,yo=new Pi,bd=new I,vo=new I,Mo=new I,So=new I,fh=new I,bo=new I,Ed=new I,Eo=new I,Ge=class extends Lt{constructor(e=new yt,t=new Bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(fh.fromBufferAttribute(d,e),a?bo.addScaledVector(fh,u):bo.addScaledVector(fh.sub(t),u))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(yo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(yo,bd)===null||ds.origin.distanceToSquared(bd)>(e.far-e.near)**2))&&(Sd.copy(r).invert(),ds.copy(e.ray).applyMatrix4(Sd),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,A=S;v<A;v+=3){let T=o.getX(v),x=o.getX(v+1),b=o.getX(v+2);s=To(this,g,e,i,c,u,d,T,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=To(this,a,e,i,c,u,d,_,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=h.length;p<y;p++){let m=h[p],g=a[m.materialIndex],_=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,A=S;v<A;v+=3){let T=v,x=v+1,b=v+2;s=To(this,g,e,i,c,u,d,T,x,b),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=p,g=y;m<g;m+=3){let _=m,S=m+1,v=m+2;s=To(this,a,e,i,c,u,d,_,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Im(n,e,t,i,s,r,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;Eo.copy(o),Eo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Eo);return c<t.near||c>t.far?null:{distance:c,point:Eo.clone(),object:n}}function To(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,vo),n.getVertexPosition(l,Mo),n.getVertexPosition(c,So);let u=Im(n,e,t,i,vo,Mo,So,Ed);if(u){let d=new I;Ai.getBarycoord(Ed,vo,Mo,So,d),s&&(u.uv=Ai.getInterpolatedAttribute(s,o,l,c,d,new se)),r&&(u.uv1=Ai.getInterpolatedAttribute(r,o,l,c,d,new se)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Ai.getNormal(vo,Mo,So,h.normal),u.face=h,u.barycoord=d}return u}var ia=class extends En{constructor(e=null,t=1,i=1,s,r,a,o,l,c=sn,u=sn,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends It{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new ct,Td=new ct,wo=[],wd=new hi,Lm=new ct,kr=new Ge,Hr=new Pi,Ii=class extends Ge{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Lm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),wd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(wd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,js),Hr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(kr.geometry=this.geometry,kr.material=this.material,kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(i),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),Td.multiplyMatrices(i,js),kr.matrixWorld=Td,kr.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){let l=wo[a];l.instanceId=r,l.object=this,t.push(l)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(s*this.count),s,this.count,Tl,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fs=new Pi,Dm=new se(.5,.5),Ao=new I,qi=class{constructor(e=new Qn,t=new Qn,i=new Qn,s=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],y=r[9],m=r[10],g=r[11],_=r[12],S=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,g-p,A-_).normalize(),s[1].setComponents(c+a,f+u,g+p,A+_).normalize(),s[2].setComponents(c+o,f+d,g+y,A+S).normalize(),s[3].setComponents(c-o,f-d,g-y,A-S).normalize(),i)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,f-h,g-m,A-v).normalize();else if(s[4].setComponents(c-l,f-h,g-m,A-v).normalize(),t===Gn)s[5].setComponents(c+l,f+h,g+m,A+v).normalize();else if(t===sr)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);let t=Dm.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ao.x=s.normal.x>0?e.max.x:e.min.x,Ao.y=s.normal.y>0?e.max.y:e.min.y,Ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ad=new ct,Jo=class n{constructor(){this.coordinateSystem=Gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ad.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new qi),i[s].setFromProjectionMatrix(Ad,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new qi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Ko=class extends ti{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Rd=new ct,Sh=new na,Ro=new Pi,Co=new I,xs=class extends Lt{constructor(e=new yt,t=new Ko){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,e.ray.intersectsSphere(Ro)===!1)return;Rd.copy(s).invert(),Sh.copy(e.ray).applyMatrix4(Rd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=h,y=f;p<y;p++){let m=c.getX(p);Co.fromBufferAttribute(d,m),Cd(Co,m,l,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=h,y=f;p<y;p++)Co.fromBufferAttribute(d,p),Cd(Co,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Cd(n,e,t,i,s,r,a){let o=Sh.distanceSqToPoint(n);if(o<t){let l=new I;Sh.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var sa=class extends En{constructor(e=[],t=Ts,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},kt=class extends En{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Li=class extends En{constructor(e,t,i=ni,s,r,a,o=sn,l=sn,c,u=Ci,d=1){if(u!==Ci&&u!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ra=class extends Li{constructor(e,t=ni,i=Ts,s,r,a=sn,o=sn,l,c=Ci){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},aa=class extends En{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},mt=class n extends yt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2));function p(y,m,g,_,S,v,A,T,x,b,L){let C=v/x,D=A/b,z=v/2,G=A/2,R=T/2,O=x+1,U=b+1,F=0,Y=0,H=new I;for(let J=0;J<U;J++){let te=J*D-G;for(let be=0;be<O;be++){let Oe=be*C-z;H[y]=Oe*_,H[m]=te*S,H[g]=R,c.push(H.x,H.y,H.z),H[y]=0,H[m]=0,H[g]=T>0?1:-1,u.push(H.x,H.y,H.z),d.push(be/x),d.push(1-J/b),F+=1}}for(let J=0;J<b;J++)for(let te=0;te<x;te++){let be=h+te+O*J,Oe=h+te+O*(J+1),K=h+(te+1)+O*(J+1),ye=h+(te+1)+O*J;l.push(be,Oe,ye),l.push(Oe,K,ye),Y+=6}o.addGroup(f,Y,L),f+=Y,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Yi=class n extends yt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,p=i*2+r,y=s+1,m=new I,g=new I;for(let _=0;_<=p;_++){let S=0,v=0,A=0,T=0;if(_<=i){let L=_/i,C=L*Math.PI/2;v=-u-e*Math.cos(C),A=e*Math.sin(C),T=-e*Math.cos(C),S=L*d}else if(_<=i+r){let L=(_-i)/r;v=-u+L*t,A=e,T=0,S=d+L*h}else{let L=(_-i-r)/i,C=L*Math.PI/2;v=u+e*Math.sin(C),A=e*Math.cos(C),T=e*Math.sin(C),S=d+h+L*d}let x=Math.max(0,Math.min(1,S/f)),b=0;_===0?b=.5/s:_===p&&(b=-.5/s);for(let L=0;L<=s;L++){let C=L/s,D=C*Math.PI*2,z=Math.sin(D),G=Math.cos(D);g.x=-A*G,g.y=v,g.z=A*z,o.push(g.x,g.y,g.z),m.set(-A*G,T,A*z),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+b,x)}if(_>0){let L=(_-1)*y;for(let C=0;C<s;C++){let D=L+C,z=L+C+1,G=_*y+C,R=_*y+C+1;a.push(D,z,G),a.push(z,R,G)}}}this.setIndex(a),this.setAttribute("position",new qe(o,3)),this.setAttribute("normal",new qe(l,3)),this.setAttribute("uv",new qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Zi=class n extends yt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new se;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("normal",new qe(o,3)),this.setAttribute("uv",new qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class n extends yt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],p=0,y=[],m=i/2,g=0;_(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function _(){let v=new I,A=new I,T=0,x=(t-e)/i;for(let b=0;b<=r;b++){let L=[],C=b/r,D=C*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,R=G*l+o,O=Math.sin(R),U=Math.cos(R);A.x=D*O,A.y=-C*i+m,A.z=D*U,d.push(A.x,A.y,A.z),v.set(O,x,U).normalize(),h.push(v.x,v.y,v.z),f.push(G,1-C),L.push(p++)}y.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let C=y[L][b],D=y[L+1][b],z=y[L+1][b+1],G=y[L][b+1];(e>0||L!==0)&&(u.push(C,D,G),T+=3),(t>0||L!==r-1)&&(u.push(D,z,G),T+=3)}c.addGroup(g,T,0),g+=T}function S(v){let A=p,T=new se,x=new I,b=0,L=v===!0?e:t,C=v===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,m*C,0),h.push(0,C,0),f.push(.5,.5),p++;let D=p;for(let z=0;z<=s;z++){let R=z/s*l+o,O=Math.cos(R),U=Math.sin(R);x.x=L*U,x.y=m*C,x.z=L*O,d.push(x.x,x.y,x.z),h.push(0,C,0),T.x=O*.5+.5,T.y=U*.5*C+.5,f.push(T.x,T.y),p++}for(let z=0;z<s;z++){let G=A+z,R=D+z;v===!0?u.push(R,R+1,G):u.push(R+1,R,G),b+=3}c.addGroup(g,b,v===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},$i=class n extends qt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oa=class n extends yt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],a=[];o(s),c(i),u(),this.setAttribute("position",new qe(r,3)),this.setAttribute("normal",new qe(r.slice(),3)),this.setAttribute("uv",new qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let S=new I,v=new I,A=new I;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],v),f(t[T+2],A),l(S,v,A,_)}function l(_,S,v,A){let T=A+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let L=_.clone().lerp(v,b/T),C=S.clone().lerp(v,b/T),D=T-b;for(let z=0;z<=D;z++)z===0&&b===T?x[b][z]=L:x[b][z]=L.clone().lerp(C,z/D)}for(let b=0;b<T;b++)for(let L=0;L<2*(T-b)-1;L++){let C=Math.floor(L/2);L%2===0?(h(x[b][C+1]),h(x[b+1][C]),h(x[b][C])):(h(x[b][C+1]),h(x[b+1][C+1]),h(x[b+1][C]))}}function c(_){let S=new I;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(_),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function u(){let _=new I;for(let S=0;S<r.length;S+=3){_.x=r[S+0],_.y=r[S+1],_.z=r[S+2];let v=m(_)/2/Math.PI+.5,A=g(_)/Math.PI+.5;a.push(v,1-A)}p(),d()}function d(){for(let _=0;_<a.length;_+=6){let S=a[_+0],v=a[_+2],A=a[_+4],T=Math.max(S,v,A),x=Math.min(S,v,A);T>.9&&x<.1&&(S<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),A<.2&&(a[_+4]+=1))}}function h(_){r.push(_.x,_.y,_.z)}function f(_,S){let v=_*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function p(){let _=new I,S=new I,v=new I,A=new I,T=new se,x=new se,b=new se;for(let L=0,C=0;L<r.length;L+=9,C+=6){_.set(r[L+0],r[L+1],r[L+2]),S.set(r[L+3],r[L+4],r[L+5]),v.set(r[L+6],r[L+7],r[L+8]),T.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),b.set(a[C+4],a[C+5]),A.copy(_).add(S).add(v).divideScalar(3);let D=m(A);y(T,C+0,_,D),y(x,C+2,S,D),y(b,C+4,v,D)}}function y(_,S,v,A){A<0&&_.x===1&&(a[S]=_.x-1),v.x===0&&v.z===0&&(a[S]=A/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function g(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.detail)}},la=class n extends oa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){We("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new se:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new ct;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(st(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(st(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},hr=class extends Un{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new se){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},jo=class extends hr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Pd=new I,Id=new I,ph=new Qh,mh=new Qh,gh=new Qh,_s=class extends Un{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Id.subVectors(s[0],s[1]).add(s[0]),c=Id);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Pd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);y<1e-4&&(y=1),p<1e-4&&(p=y),m<1e-4&&(m=y),ph.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,y,m),mh.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,y,m),gh.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,y,m)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),mh.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),gh.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ph.calc(l),mh.calc(l),gh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ld(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Nm(n,e){let t=1-n;return t*t*e}function Um(n,e){return 2*(1-n)*n*e}function Fm(n,e){return n*n*e}function Vr(n,e,t,i){return Nm(n,e)+Um(n,t)+Fm(n,i)}function Om(n,e){let t=1-n;return t*t*t*e}function Bm(n,e){let t=1-n;return 3*t*t*n*e}function zm(n,e){return 3*(1-n)*n*n*e}function km(n,e){return n*n*n*e}function Wr(n,e,t,i,s){return Om(n,e)+Bm(n,t)+zm(n,i)+km(n,s)}var ca=class extends Un{constructor(e=new se,t=new se,i=new se,s=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends Un{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(e,s.x,r.x,a.x,o.x),Wr(e,s.y,r.y,a.y,o.y),Wr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ha=class extends Un{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},el=class extends Un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ua=class extends Un{constructor(e=new se,t=new se,i=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new se){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends Un{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Vr(e,s.x,r.x,a.x),Vr(e,s.y,r.y,a.y),Vr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Ld(o,l.x,c.x,u.x,d.x),Ld(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new se().fromArray(s))}return this}},tl=Object.freeze({__proto__:null,ArcCurve:jo,CatmullRomCurve3:_s,CubicBezierCurve:ca,CubicBezierCurve3:Qo,EllipseCurve:hr,LineCurve:ha,LineCurve3:el,QuadraticBezierCurve:ua,QuadraticBezierCurve3:da,SplineCurve:fa}),nl=class extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new tl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new tl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},pa=class extends nl{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ha(this.currentPoint.clone(),new se(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new ua(this.currentPoint.clone(),new se(e,t),new se(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ca(this.currentPoint.clone(),new se(e,t),new se(i,s),new se(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new fa(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new hr(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ys=class extends pa{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new pa().fromJSON(s))}return this}};function Hm(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=If(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=qm(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=n[h],p=n[h+1];f<o&&(o=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ma(r,a,t,o,l,c,0),a}function If(n,e,t,i,s){let r;if(s===i0(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Dd(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Dd(a/i|0,n[a],n[a+1],r);return r&&ur(r,r.next)&&(xa(r),r=r.next),r}function vs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ur(t,t.next)||Nt(t.prev,t,t.next)===0)){if(xa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ma(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Km(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Vm(n,i,s,r):Gm(n)){e.push(l.i,n.i,c.i),xa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Wm(vs(n),e),ma(n,e,t,i,s,r,2)):a===2&&Xm(n,e,t,i,s,r):ma(vs(n),e,t,i,s,r,1);break}}}function Gm(n){let e=n.prev,t=n,i=n.next;if(Nt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&Gr(s,o,r,l,a,c,p.x,p.y)&&Nt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Vm(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Nt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),p=Math.min(u,d,h),y=Math.max(o,l,c),m=Math.max(u,d,h),g=bh(f,p,e,t,i),_=bh(y,m,e,t,i),S=n.prevZ,v=n.nextZ;for(;S&&S.z>=g&&v&&v.z<=_;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Gr(o,u,l,d,c,h,S.x,S.y)&&Nt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Gr(o,u,l,d,c,h,v.x,v.y)&&Nt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=y&&S.y>=p&&S.y<=m&&S!==s&&S!==a&&Gr(o,u,l,d,c,h,S.x,S.y)&&Nt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=y&&v.y>=p&&v.y<=m&&v!==s&&v!==a&&Gr(o,u,l,d,c,h,v.x,v.y)&&Nt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Wm(n,e){let t=n;do{let i=t.prev,s=t.next.next;!ur(i,s)&&Df(i,t,t.next,s)&&ga(i,s)&&ga(s,i)&&(e.push(i.i,t.i,s.i),xa(t),xa(t.next),t=n=s),t=t.next}while(t!==n);return vs(t)}function Xm(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&e0(a,o)){let l=Nf(a,o);a=vs(a,a.next),l=vs(l,l.next),ma(a,e,t,i,s,r,0),ma(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function qm(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=If(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Qm(c))}s.sort(Ym);for(let r=0;r<s.length;r++)t=Zm(s[r],t);return t}function Ym(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Zm(n,e){let t=$m(n,e);if(!t)return e;let i=Nf(t,n);return vs(i,i.next),vs(t,t.next)}function $m(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(ur(n,t))return t;do{if(ur(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Lf(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);ga(t,n)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&Jm(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function Jm(n,e){return Nt(n.prev,n,e.prev)<0&&Nt(e.next,n,n.next)<0}function Km(n,e,t,i){let s=n;do s.z===0&&(s.z=bh(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,jm(s)}function jm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function bh(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Qm(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lf(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Gr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Lf(n,e,t,i,s,r,a,o)}function e0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!t0(n,e)&&(ga(n,e)&&ga(e,n)&&n0(n,e)&&(Nt(n.prev,n,e.prev)||Nt(n,e.prev,e))||ur(n,e)&&Nt(n.prev,n,n.next)>0&&Nt(e.prev,e,e.next)>0)}function Nt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ur(n,e){return n.x===e.x&&n.y===e.y}function Df(n,e,t,i){let s=Io(Nt(n,e,t)),r=Io(Nt(n,e,i)),a=Io(Nt(t,i,n)),o=Io(Nt(t,i,e));return!!(s!==r&&a!==o||s===0&&Po(n,t,e)||r===0&&Po(n,i,e)||a===0&&Po(t,n,i)||o===0&&Po(t,e,i))}function Po(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function t0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Df(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ga(n,e){return Nt(n.prev,n,n.next)<0?Nt(n,e,n.next)>=0&&Nt(n,n.prev,e)>=0:Nt(n,e,n.prev)<0||Nt(n,n.next,e)<0}function n0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Nf(n,e){let t=Eh(n.i,n.x,n.y),i=Eh(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Dd(n,e,t,i){let s=Eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Eh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Th=class{static triangulate(e,t,i=2){return Hm(e,t,i)}},ps=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Nd(e),Ud(i,e);let a=e.length;t.forEach(Nd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ud(i,t[l]);let o=Th.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Nd(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Ud(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var dr=class n extends yt{constructor(e=new ys([new se(.5,.5),new se(-.5,.5),new se(-.5,-.5),new se(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new qe(s,3)),this.setAttribute("uv",new qe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,_=t.UVGenerator!==void 0?t.UVGenerator:s0,S,v=!1,A,T,x,b;if(g){S=g.getSpacedPoints(u),v=!0,h=!1;let ie=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(u,ie),T=new I,x=new I,b=new I}h||(m=0,f=0,p=0,y=0);let L=o.extractPoints(c),C=L.shape,D=L.holes;if(!ps.isClockWise(C)){C=C.reverse();for(let ie=0,ue=D.length;ie<ue;ie++){let le=D[ie];ps.isClockWise(le)&&(D[ie]=le.reverse())}}function G(ie){let le=10000000000000001e-36,we=ie[0];for(let _e=1;_e<=ie.length;_e++){let Ke=_e%ie.length,Ue=ie[Ke],lt=Ue.x-we.x,ht=Ue.y-we.y,gt=lt*lt+ht*ht,k=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(we.x),Math.abs(we.y)),Vt=le*k*k;if(gt<=Vt){ie.splice(Ke,1),_e--;continue}we=Ue}}G(C),D.forEach(G);let R=D.length,O=C;for(let ie=0;ie<R;ie++){let ue=D[ie];C=C.concat(ue)}function U(ie,ue,le){return ue||Xe("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ue,le)}let F=C.length;function Y(ie,ue,le){let we,_e,Ke,Ue=ie.x-ue.x,lt=ie.y-ue.y,ht=le.x-ie.x,gt=le.y-ie.y,k=Ue*Ue+lt*lt,Vt=Ue*gt-lt*ht;if(Math.abs(Vt)>Number.EPSILON){let at=Math.sqrt(k),St=Math.sqrt(ht*ht+gt*gt),me=ue.x-lt/at,Ft=ue.y+Ue/at,He=le.x-gt/St,Ye=le.y+ht/St,P=((He-me)*gt-(Ye-Ft)*ht)/(Ue*gt-lt*ht);we=me+Ue*P-ie.x,_e=Ft+lt*P-ie.y;let E=we*we+_e*_e;if(E<=2)return new se(we,_e);Ke=Math.sqrt(E/2)}else{let at=!1;Ue>Number.EPSILON?ht>Number.EPSILON&&(at=!0):Ue<-Number.EPSILON?ht<-Number.EPSILON&&(at=!0):Math.sign(lt)===Math.sign(gt)&&(at=!0),at?(we=-lt,_e=Ue,Ke=Math.sqrt(k)):(we=Ue,_e=lt,Ke=Math.sqrt(k/2))}return new se(we/Ke,_e/Ke)}let H=[];for(let ie=0,ue=O.length,le=ue-1,we=ie+1;ie<ue;ie++,le++,we++)le===ue&&(le=0),we===ue&&(we=0),H[ie]=Y(O[ie],O[le],O[we]);let J=[],te,be=H.concat();for(let ie=0,ue=R;ie<ue;ie++){let le=D[ie];te=[];for(let we=0,_e=le.length,Ke=_e-1,Ue=we+1;we<_e;we++,Ke++,Ue++)Ke===_e&&(Ke=0),Ue===_e&&(Ue=0),te[we]=Y(le[we],le[Ke],le[Ue]);J.push(te),be=be.concat(te)}let Oe;if(m===0)Oe=ps.triangulateShape(O,D);else{let ie=[],ue=[];for(let le=0;le<m;le++){let we=le/m,_e=f*Math.cos(we*Math.PI/2),Ke=p*Math.sin(we*Math.PI/2)+y;for(let Ue=0,lt=O.length;Ue<lt;Ue++){let ht=U(O[Ue],H[Ue],Ke);ke(ht.x,ht.y,-_e),we===0&&ie.push(ht)}for(let Ue=0,lt=R;Ue<lt;Ue++){let ht=D[Ue];te=J[Ue];let gt=[];for(let k=0,Vt=ht.length;k<Vt;k++){let at=U(ht[k],te[k],Ke);ke(at.x,at.y,-_e),we===0&&gt.push(at)}we===0&&ue.push(gt)}}Oe=ps.triangulateShape(ie,ue)}let K=Oe.length,ye=p+y;for(let ie=0;ie<F;ie++){let ue=h?U(C[ie],be[ie],ye):C[ie];v?(x.copy(A.normals[0]).multiplyScalar(ue.x),T.copy(A.binormals[0]).multiplyScalar(ue.y),b.copy(S[0]).add(x).add(T),ke(b.x,b.y,b.z)):ke(ue.x,ue.y,0)}for(let ie=1;ie<=u;ie++)for(let ue=0;ue<F;ue++){let le=h?U(C[ue],be[ue],ye):C[ue];v?(x.copy(A.normals[ie]).multiplyScalar(le.x),T.copy(A.binormals[ie]).multiplyScalar(le.y),b.copy(S[ie]).add(x).add(T),ke(b.x,b.y,b.z)):ke(le.x,le.y,d/u*ie)}for(let ie=m-1;ie>=0;ie--){let ue=ie/m,le=f*Math.cos(ue*Math.PI/2),we=p*Math.sin(ue*Math.PI/2)+y;for(let _e=0,Ke=O.length;_e<Ke;_e++){let Ue=U(O[_e],H[_e],we);ke(Ue.x,Ue.y,d+le)}for(let _e=0,Ke=D.length;_e<Ke;_e++){let Ue=D[_e];te=J[_e];for(let lt=0,ht=Ue.length;lt<ht;lt++){let gt=U(Ue[lt],te[lt],we);v?ke(gt.x,gt.y+S[u-1].y,S[u-1].x+le):ke(gt.x,gt.y,d+le)}}}Ae(),ze();function Ae(){let ie=s.length/3;if(h){let ue=0,le=F*ue;for(let we=0;we<K;we++){let _e=Oe[we];Rt(_e[2]+le,_e[1]+le,_e[0]+le)}ue=u+m*2,le=F*ue;for(let we=0;we<K;we++){let _e=Oe[we];Rt(_e[0]+le,_e[1]+le,_e[2]+le)}}else{for(let ue=0;ue<K;ue++){let le=Oe[ue];Rt(le[2],le[1],le[0])}for(let ue=0;ue<K;ue++){let le=Oe[ue];Rt(le[0]+F*u,le[1]+F*u,le[2]+F*u)}}i.addGroup(ie,s.length/3-ie,0)}function ze(){let ie=s.length/3,ue=0;ve(O,ue),ue+=O.length;for(let le=0,we=D.length;le<we;le++){let _e=D[le];ve(_e,ue),ue+=_e.length}i.addGroup(ie,s.length/3-ie,1)}function ve(ie,ue){let le=ie.length;for(;--le>=0;){let we=le,_e=le-1;_e<0&&(_e=ie.length-1);for(let Ke=0,Ue=u+m*2;Ke<Ue;Ke++){let lt=F*Ke,ht=F*(Ke+1),gt=ue+we+lt,k=ue+_e+lt,Vt=ue+_e+ht,at=ue+we+ht;Ve(gt,k,Vt,at)}}}function ke(ie,ue,le){l.push(ie),l.push(ue),l.push(le)}function Rt(ie,ue,le){it(ie),it(ue),it(le);let we=s.length/3,_e=_.generateTopUV(i,s,we-3,we-2,we-1);ot(_e[0]),ot(_e[1]),ot(_e[2])}function Ve(ie,ue,le,we){it(ie),it(ue),it(we),it(ue),it(le),it(we);let _e=s.length/3,Ke=_.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);ot(Ke[0]),ot(Ke[1]),ot(Ke[3]),ot(Ke[1]),ot(Ke[2]),ot(Ke[3])}function it(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function ot(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return r0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new tl[s.type]().fromJSON(s)),new n(i,e.options)}},s0={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],u=e[s*3+1];return[new se(r,a),new se(o,l),new se(c,u)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],u=e[i*3+1],d=e[i*3+2],h=e[s*3],f=e[s*3+1],p=e[s*3+2],y=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new se(a,1-l),new se(c,1-d),new se(h,1-p),new se(y,1-g)]:[new se(o,1-l),new se(u,1-d),new se(f,1-p),new se(m,1-g)]}};function r0(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var _a=class n extends oa{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},fr=class n extends yt{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=st(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new I,h=new se,f=new I,p=new I,y=new I,m=0,g=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[_+1].x-e[_].x,g=e[_+1].y-e[_].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(p)}for(let _=0;_<=t;_++){let S=i+_*u*s,v=Math.sin(S),A=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*v,d.y=e[T].y,d.z=e[T].x*A,a.push(d.x,d.y,d.z),h.x=_/t,h.y=T/(e.length-1),o.push(h.x,h.y);let x=l[3*T+0]*v,b=l[3*T+1],L=l[3*T+0]*A;c.push(x,b,L)}}for(let _=0;_<t;_++)for(let S=0;S<e.length-1;S++){let v=S+_*e.length,A=v,T=v+e.length,x=v+e.length+1,b=v+1;r.push(A,T,b),r.push(x,b,T)}this.setIndex(r),this.setAttribute("position",new qe(a,3)),this.setAttribute("uv",new qe(o,2)),this.setAttribute("normal",new qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Ht=class n extends yt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],p=[],y=[],m=[];for(let g=0;g<u;g++){let _=g*h-a;for(let S=0;S<c;S++){let v=S*d-r;p.push(v,-_,0),y.push(0,0,1),m.push(S/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<o;_++){let S=_+c*g,v=_+c*(g+1),A=_+1+c*(g+1),T=_+1+c*g;f.push(S,v,T),f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Yt=class n extends yt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],p=[],y=[],m=[];for(let g=0;g<=i;g++){let _=[],S=g/i,v=a+S*o,A=e*Math.cos(v),T=Math.sqrt(e*e-A*A),x=0;g===0&&a===0?x=.5/t:g===i&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let L=b/t,C=s+L*r;d.x=-T*Math.cos(C),d.y=A,d.z=T*Math.sin(C),p.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(L+x,1-S),_.push(c++)}u.push(_)}for(let g=0;g<i;g++)for(let _=0;_<t;_++){let S=u[g][_+1],v=u[g][_],A=u[g+1][_],T=u[g+1][_+1];(g!==0||a>0)&&f.push(S,v,T),(g!==i-1||l<Math.PI)&&f.push(v,A,T)}this.setIndex(f),this.setAttribute("position",new qe(p,3)),this.setAttribute("normal",new qe(y,3)),this.setAttribute("uv",new qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fn=class n extends yt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,p=new I;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let g=0;g<=s;g++){let _=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(g/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let g=(s+1)*y+m-1,_=(s+1)*(y-1)+m-1,S=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(g,_,v),l.push(_,S,v)}this.setIndex(l),this.setAttribute("position",new qe(c,3)),this.setAttribute("normal",new qe(u,3)),this.setAttribute("uv",new qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pr=class n extends yt{constructor(e=new da(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new se,u=new I,d=[],h=[],f=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new qe(d,3)),this.setAttribute("normal",new qe(h,3)),this.setAttribute("uv",new qe(f,2));function y(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),_(),g()}function m(S){u=e.getPointAt(S/t,u);let v=a.normals[S],A=a.binormals[S];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,b=Math.sin(x),L=-Math.cos(x);l.x=L*v.x+b*A.x,l.y=L*v.y+b*A.y,l.z=L*v.z+b*A.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+i*l.x,o.y=u.y+i*l.y,o.z=u.z+i*l.z,d.push(o.x,o.y,o.z)}}function g(){for(let S=1;S<=t;S++)for(let v=1;v<=s;v++){let A=(s+1)*(S-1)+(v-1),T=(s+1)*S+(v-1),x=(s+1)*S+v,b=(s+1)*(S-1)+v;p.push(A,T,b),p.push(T,x,b)}}function _(){for(let S=0;S<=t;S++)for(let v=0;v<=s;v++)c.x=S/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Rs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Fd(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function gn(n){let e={};for(let t=0;t<n.length;t++){let i=Rs(n[t]);for(let s in i)e[s]=i[s]}return e}function Fd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function a0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Uf={clone:Rs,merge:gn},o0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=o0,this.fragmentShader=l0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rs(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Pe().setHex(s.value);break;case"v2":this.uniforms[i].value=new se().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ze().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},il=class extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Di=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ya=class extends ti{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Na,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=_l,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sl=class extends ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Qs(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Lo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},al=class extends Ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yh,endingEnd:yh}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vh:r=e,o=2*t-i;break;case Mh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:a=e,l=2*i-t;break;case Mh:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(i-t)/(s-t),y=p*p,m=y*p,g=-h*m+2*h*y-h*p,_=(1+h)*m+(-1.5-2*h)*y+(-.5+h)*p+1,S=(-1-f)*m+(1.5+f)*y+.5*p,v=f*m-f*y;for(let A=0;A!==o;++A)r[A]=g*a[u+A]+_*a[c+A]+S*a[l+A]+v*a[d+A];return r}},ol=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},ll=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},cl=class extends Ji{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(i-t)/(s-t),y=1-p;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*p;return r}let h=o*2,f=e-1;for(let p=0;p!==o;++p){let y=a[c+p],m=a[l+p],g=f*h+p*2,_=d[g],S=d[g+1],v=e*h+p*2,A=u[v],T=u[v+1],x=h0(i,t,_,A,s);r[p]=Ff(x,y,S,T,m)}return r}};function Ff(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function c0(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function h0(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Ff(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=c0(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var On=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Lo(e.settings)&&(i.settings={inTangents:Qs(e.settings.inTangents,Array),outTangents:Qs(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new cl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case Xo:t=this.InterpolantFactoryMethodLinear;break;case Uo:t=this.InterpolantFactoryMethodSmooth;break;case _h:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return We("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return Xo;case this.InterpolantFactoryMethodSmooth:return Uo;case this.InterpolantFactoryMethodBezier:return _h}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Lo(this.settings)&&(Od(this.settings.inTangents,e),Od(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Lo(this.settings)&&(Bd(this.settings.inTangents,e),Bd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Xe("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Xe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Xe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Xe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&fm(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Xe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Uo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let p=0;p!==i;++p){let y=t[d+p];if(y!==t[h+p]||y!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Lo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Od(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Bd(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Xo;var Ki=class extends On{constructor(e,t,i){super(e,t,i)}};Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Xr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};hl.prototype.ValueTypeName="color";var ul=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};ul.prototype.ValueTypeName="number";var dl=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Ot.slerpFlat(r,0,a,c-o,a,c,l);return r}},va=class extends On{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}};va.prototype.ValueTypeName="quaternion";va.prototype.InterpolantFactoryMethodSmooth=void 0;var ji=class extends On{constructor(e,t,i){super(e,t,i)}};ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=Xr;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends On{constructor(e,t,i,s){super(e,t,i,s)}};fl.prototype.ValueTypeName="vector";var pl=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Of=new pl,ml=class{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ml.DEFAULT_MATERIAL_NAME="__DEFAULT";var mr=class extends Lt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ma=class extends mr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new ct,zd=new I,kd=new I,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){xh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(xh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===sr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Do=new I,No=new Ot,oi=new I,ba=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Do,No,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Do,No,oi),oi.x===1&&oi.y===1&&oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Do,No,oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Xi=new I,Hd=new se,Gd=new se,mn=class extends ba{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=qo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Hd,Gd),t.subVectors(Gd,Hd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wh=class extends Sa{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Ms=class extends mr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ea=class extends ba{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ah=class extends Sa{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var er=-90,tr=1,gr=class extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(er,tr,e,t);s.layers=this.layers,this.add(s);let r=new mn(er,tr,e,t);r.layers=this.layers,this.add(r);let a=new mn(er,tr,e,t);a.layers=this.layers,this.add(a);let o=new mn(er,tr,e,t);o.layers=this.layers,this.add(o);let l=new mn(er,tr,e,t);l.layers=this.layers,this.add(l);let c=new mn(er,tr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},gl=class extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var tu="\\[\\]\\.:\\/",u0=new RegExp("["+tu+"]","g"),nu="[^"+tu+"]",d0="[^"+tu.replace("\\.","")+"]",f0=/((?:WC+[\/:])*)/.source.replace("WC",nu),p0=/(WCOD+)?/.source.replace("WCOD",d0),m0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nu),g0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nu),x0=new RegExp("^"+f0+p0+m0+g0+"$"),_0=["material","materials","bones","map"],Rh=class{constructor(e,t,i){let s=i||Ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Ct=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(u0,"")}static parseTrackName(e){let t=x0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);_0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Xe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Xe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Xe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Xe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Xe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Xe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Xe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Xe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ct.Composite=Rh;Ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ct.prototype.GetterByBindingType=[Ct.prototype._getValue_direct,Ct.prototype._getValue_array,Ct.prototype._getValue_arrayElement,Ct.prototype._getValue_toArray];Ct.prototype.SetterByBindingTypeAndVersioning=[[Ct.prototype._setValue_direct,Ct.prototype._setValue_direct_setNeedsUpdate,Ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_array,Ct.prototype._setValue_array_setNeedsUpdate,Ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_arrayElement,Ct.prototype._setValue_arrayElement_setNeedsUpdate,Ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ct.prototype._setValue_fromArray,Ct.prototype._setValue_fromArray_setNeedsUpdate,Ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SM=new Float32Array(1);var lu=class lu{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};lu.prototype.isMatrix2=!0;var Ch=lu;function iu(n,e,t,i){let s=y0(i);switch(t){case qh:return n*e;case Tl:return n*e/s.components*s.byteLength;case wl:return n*e/s.components*s.byteLength;case es:return n*e*2/s.components*s.byteLength;case Al:return n*e*2/s.components*s.byteLength;case Yh:return n*e*3/s.components*s.byteLength;case si:return n*e*4/s.components*s.byteLength;case Rl:return n*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Ll:return Math.max(n,16)*Math.max(e,8)/4;case Cl:case Il:return Math.max(n,8)*Math.max(e,8)/2;case Dl:case Nl:case Fl:case Ol:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ul:case La:case Bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $l:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Da:case sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function y0(n){switch(n){case Cn:case Gh:return{byteLength:1,components:1};case yr:case Vh:case ii:return{byteLength:2,components:1};case bl:case El:return{byteLength:2,components:4};case ni:case Sl:case Wn:return{byteLength:4,components:1};case Wh:case Xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function rp(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function T0(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){let p=d[h],y=d[f];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){let y=d[f];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var w0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,A0=`#ifdef USE_ALPHAHASH
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
#endif`,R0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,I0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L0=`#ifdef USE_AOMAP
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
#endif`,D0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N0=`#ifdef USE_BATCHING
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
#endif`,U0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z0=`#ifdef USE_IRIDESCENCE
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
#endif`,k0=`#ifdef USE_BUMPMAP
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
#endif`,H0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$0=`#define PI 3.141592653589793
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
} // validated`,J0=`vec3 transformedNormal = objectNormal;
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
#endif`,K0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ng=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ug=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,fg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
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
#endif`,_g=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sg=`PhysicalMaterial material;
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
#endif`,bg=`uniform sampler2D dfgLUT;
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
}`,Eg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ag=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
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
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
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
#endif`,$g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dx=`#ifdef USE_SKINNING
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
#endif`,fx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`uniform float backgroundBlurriness;
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`#include <common>
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
}`,Lx=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`uniform float scale;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Gx=`#define LAMBERT
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
}`,Vx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,Zx=`#define PHONG
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
}`,$x=`#define STANDARD
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
}`,Jx=`#define STANDARD
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
}`,Kx=`#define TOON
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
}`,jx=`#define TOON
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
}`,Qx=`uniform float size;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 color;
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
}`,i_=`uniform float rotation;
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
}`,s_=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:w0,alphahash_pars_fragment:A0,alphamap_fragment:R0,alphamap_pars_fragment:C0,alphatest_fragment:P0,alphatest_pars_fragment:I0,aomap_fragment:L0,aomap_pars_fragment:D0,batching_pars_vertex:N0,batching_vertex:U0,begin_vertex:F0,beginnormal_vertex:O0,bsdfs:B0,iridescence_fragment:z0,bumpmap_pars_fragment:k0,clipping_planes_fragment:H0,clipping_planes_pars_fragment:G0,clipping_planes_pars_vertex:V0,clipping_planes_vertex:W0,color_fragment:X0,color_pars_fragment:q0,color_pars_vertex:Y0,color_vertex:Z0,common:$0,defaultnormal_vertex:J0,displacementmap_pars_vertex:K0,displacementmap_vertex:j0,emissivemap_fragment:Q0,emissivemap_pars_fragment:eg,colorspace_fragment:tg,colorspace_pars_fragment:ng,envmap_fragment:ig,envmap_common_pars_fragment:sg,envmap_pars_fragment:rg,envmap_pars_vertex:ag,envmap_physical_pars_fragment:xg,envmap_vertex:og,fog_vertex:lg,fog_pars_vertex:cg,fog_fragment:hg,fog_pars_fragment:ug,gradientmap_pars_fragment:dg,lightmap_pars_fragment:fg,lights_lambert_fragment:pg,lights_lambert_pars_fragment:mg,lights_pars_begin:gg,lights_toon_fragment:_g,lights_toon_pars_fragment:yg,lights_phong_fragment:vg,lights_phong_pars_fragment:Mg,lights_physical_fragment:Sg,lights_physical_pars_fragment:bg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:wg,lightprobes_pars_fragment:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Ig,map_fragment:Lg,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Og,morphinstance_vertex:Bg,morphcolor_vertex:zg,morphnormal_vertex:kg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Gg,normal_fragment_begin:Vg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:$g,clearcoat_normal_fragment_maps:Jg,clearcoat_pars_fragment:Kg,iridescence_pars_fragment:jg,opaque_fragment:Qg,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ax,shadowmap_pars_fragment:ox,shadowmap_pars_vertex:lx,shadowmap_vertex:cx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:dx,skinning_vertex:fx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:_x,transmission_fragment:yx,transmission_pars_fragment:vx,uv_pars_fragment:Mx,uv_pars_vertex:Sx,uv_vertex:bx,worldpos_vertex:Ex,background_vert:Tx,background_frag:wx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Ix,depth_frag:Lx,distance_vert:Dx,distance_frag:Nx,equirect_vert:Ux,equirect_frag:Fx,linedashed_vert:Ox,linedashed_frag:Bx,meshbasic_vert:zx,meshbasic_frag:kx,meshlambert_vert:Hx,meshlambert_frag:Gx,meshmatcap_vert:Vx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:Zx,meshphysical_vert:$x,meshphysical_frag:Jx,meshtoon_vert:Kx,meshtoon_frag:jx,points_vert:Qx,points_frag:e_,shadow_vert:t_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},Se={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},mi={basic:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:gn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:gn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:gn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Pe(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:gn([Se.points,Se.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:gn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:gn([Se.common,Se.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:gn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:gn([Se.sprite,Se.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:gn([Se.common,Se.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:gn([Se.lights,Se.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};mi.physical={uniforms:gn([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ze},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var ac={r:0,b:0,g:0},r_=new ct,ap=new Ze;ap.set(-1,0,0,0,1,0,0,0,1);function a_(n,e,t,i,s,r){let a=new Pe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let v=_.backgroundBlurriness>0;S=e.get(S,v)}return S}function p(_){let S=!1,v=f(_);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(_,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new Ge(new mt(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Rs(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ap),c.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,(u!==v||d!==v.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ge(new Ht(2,2),new cn({name:"BackgroundMaterial",uniforms:Rs(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==_t,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,S){_.getRGB(ac,eu(n)),t.buffers.color.setClear(ac.r,ac.g,ac.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:p,addToRenderList:y,dispose:g}}function o_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(D,z,G,R,O){let U=!1,F=d(D,R,G,z);r!==F&&(r=F,c(r.object)),U=f(D,R,G,O),U&&p(D,R,G,O),O!==null&&e.update(O,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(D,z,G,R),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function d(D,z,G,R){let O=R.wireframe===!0,U=i[z.id];U===void 0&&(U={},i[z.id]=U);let F=D.isInstancedMesh===!0?D.id:0,Y=U[F];Y===void 0&&(Y={},U[F]=Y);let H=Y[G.id];H===void 0&&(H={},Y[G.id]=H);let J=H[O];return J===void 0&&(J=h(l()),H[O]=J),J}function h(D){let z=[],G=[],R=[];for(let O=0;O<t;O++)z[O]=0,G[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:R,object:D,attributes:{},index:null}}function f(D,z,G,R){let O=r.attributes,U=z.attributes,F=0,Y=G.getAttributes();for(let H in Y)if(Y[H].location>=0){let te=O[H],be=U[H];if(be===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(be=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(be=D.instanceColor)),te===void 0||te.attribute!==be||be&&te.data!==be.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function p(D,z,G,R){let O={},U=z.attributes,F=0,Y=G.getAttributes();for(let H in Y)if(Y[H].location>=0){let te=U[H];te===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(te=D.instanceColor));let be={};be.attribute=te,te&&te.data&&(be.data=te.data),O[H]=be,F++}r.attributes=O,r.attributesNum=F,r.index=R}function y(){let D=r.newAttributes;for(let z=0,G=D.length;z<G;z++)D[z]=0}function m(D){g(D,0)}function g(D,z){let G=r.newAttributes,R=r.enabledAttributes,O=r.attributeDivisors;G[D]=1,R[D]===0&&(n.enableVertexAttribArray(D),R[D]=1),O[D]!==z&&(n.vertexAttribDivisor(D,z),O[D]=z)}function _(){let D=r.newAttributes,z=r.enabledAttributes;for(let G=0,R=z.length;G<R;G++)z[G]!==D[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function S(D,z,G,R,O,U,F){F===!0?n.vertexAttribIPointer(D,z,G,O,U):n.vertexAttribPointer(D,z,G,R,O,U)}function v(D,z,G,R){y();let O=R.attributes,U=G.getAttributes(),F=z.defaultAttributeValues;for(let Y in U){let H=U[Y];if(H.location>=0){let J=O[Y];if(J===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){let te=J.normalized,be=J.itemSize,Oe=e.get(J);if(Oe===void 0)continue;let K=Oe.buffer,ye=Oe.type,Ae=Oe.bytesPerElement,ze=ye===n.INT||ye===n.UNSIGNED_INT||J.gpuType===Sl;if(J.isInterleavedBufferAttribute){let ve=J.data,ke=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Rt=J.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let Ve=0;Ve<H.locationSize;Ve++)g(H.location+Ve,ve.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ve=0;Ve<H.locationSize;Ve++)m(H.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,K);for(let Ve=0;Ve<H.locationSize;Ve++)S(H.location+Ve,be/H.locationSize,ye,te,ke*Ae,(Rt+be/H.locationSize*Ve)*Ae,ze)}else{if(J.isInstancedBufferAttribute){for(let ve=0;ve<H.locationSize;ve++)g(H.location+ve,J.meshPerAttribute);D.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ve=0;ve<H.locationSize;ve++)m(H.location+ve);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ve=0;ve<H.locationSize;ve++)S(H.location+ve,be/H.locationSize,ye,te,be*Ae,be/H.locationSize*ve*Ae,ze)}}else if(F!==void 0){let te=F[Y];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(H.location,te);break;case 3:n.vertexAttrib3fv(H.location,te);break;case 4:n.vertexAttrib4fv(H.location,te);break;default:n.vertexAttrib1fv(H.location,te)}}}}_()}function A(){L();for(let D in i){let z=i[D];for(let G in z){let R=z[G];for(let O in R){let U=R[O];for(let F in U)u(U[F].object),delete U[F];delete R[O]}}delete i[D]}}function T(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let G in z){let R=z[G];for(let O in R){let U=R[O];for(let F in U)u(U[F].object),delete U[F];delete R[O]}}delete i[D.id]}function x(D){for(let z in i){let G=i[z];for(let R in G){let O=G[R];if(O[D.id]===void 0)continue;let U=O[D.id];for(let F in U)u(U[F].object),delete U[F];delete O[D.id]}}}function b(D){for(let z in i){let G=i[z],R=D.isInstancedMesh===!0?D.id:0,O=G[R];if(O!==void 0){for(let U in O){let F=O[U];for(let Y in F)u(F[Y].object),delete F[Y];delete O[U]}delete G[R],Object.keys(G).length===0&&delete i[z]}}}function L(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function l_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function c_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==si&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Cn&&x!==Wn&&!b&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:v,maxSamples:A,samples:T}}function h_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Qn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let p=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,g=n.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let _=r?0:i,S=_*4,v=g.clippingState||null;l.value=v,v=u(p,h,S,f);for(let A=0;A!==S;++A)v[A]=t[A];g.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,p){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,p!==!0||m===null){let g=f+y*4,_=h.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==y;++S,v+=4)a.copy(d[S]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Oa=class extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new cn({name:"CubemapFromEquirect",uniforms:Rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:bs});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===Ni&&(t.minFilter=bn),new gr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Bf=256,u_=3,d_=20,op=256,lp=16,f_=3,p_=new I,m_=new Pe,Mr=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new gr(1,10,null),this._boxMesh=new Ge(new mt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=p_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,h=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(m_));let m=new gr(i,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=d,l.autoClearColor=h,l.autoClearDepth=f,l.autoClearStencil=p,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Bf,wf(e))}_fromTexture(e,t){e.mapping===Ts||e.mapping===_r?this._setSize(e.image.length===0?Bf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=zf(e,!1,!1),i=Math.log2(e)-u_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zf(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ts||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kf()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=g_(),this._integrationMaterial=x_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/lp);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-f_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(op*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=__());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function zf(n,e,t){return new Oa(n,{minFilter:Ni,generateMipmaps:e,type:ii,colorSpace:qr,depthBuffer:t})}function Ba(n,e,t){return new cn({name:n,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:$t,blending:bs,depthTest:!1,depthWrite:!1})}function g_(){return Ba("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${op}u

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
	`)}function x_(){return Ba("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:lp}},`

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
	`)}function __(){return Ba("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${d_}
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
	`)}function kf(){return Ba("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Hf(){return Ba("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function y_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===yl||f===vl)if(e.has(h)){let p=e.get(h).texture;return o(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let y=new Oa(p.height);return y.fromEquirectangularTexture(n,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){let f=h.mapping,p=f===yl||f===vl,y=f===Ts||f===_r;if(p||y){let m=t.get(h),g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return i===null&&(i=new Mr(n)),m=p?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let _=h.image;return p&&_&&_.height>0||y&&_&&l(_)?(i===null&&(i=new Mr(n)),m=p?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===yl?h.mapping=Ts:f===vl&&(h.mapping=_r),h}function l(h){let f=0,p=6;for(let y=0;y<p;y++)h[y]!==void 0&&f++;return f===p}function c(h){let f=h.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function v_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&ms("WebGLRenderer: "+i+" extension not supported."),s}}}function M_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let y=r.get(p);y&&(e.remove(y),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(p){let y=p.attributes;for(let m in y)e.update(y[m],n.ARRAY_BUFFER)}function d(p){let y=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let _=y!==null?y.array.length:m.array.length/3-1,S=m.count>=65535?ea:Qr,v=new S(Math.ceil(_/3)*6,1),A=v.array;if(y!==null){let x=y.array;g=y.version;for(let b=0,L=0;b<_;b+=3){let C=x[b+0],D=x[b+1],z=x[b+2];A[L++]=C,A[L++]=D,A[L++]=D,A[L++]=z,A[L++]=z,A[L++]=C}}else{g=m.version;for(let x=0,b=0;x<_;x+=3){let L=x+0,C=x+1,D=x+2;A[b++]=L,A[b++]=C,A[b++]=C,A[b++]=D,A[b++]=D,A[b++]=L}}v.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,v)}function h(p){let y=r.get(p);if(y){let m=p.index;m!==null&&y.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let y=s[p].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:h,dispose:f}}function S_(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){n.drawElements(i,h,r,d*a),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=h[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function b_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Xe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function E_(n,e,t){let i=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),y===!0&&(S=3);let v=o.attributes.position.count*S,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*A*4*d),x=new Jr(T,v,A,d);x.type=Wn,x.needsUpdate=!0;let b=S*4;for(let C=0;C<d;C++){let D=m[C],z=g[C],G=_[C],R=v*A*4*C;for(let O=0;O<D.count;O++){let U=O*b;f===!0&&(s.fromBufferAttribute(D,O),T[R+U+0]=s.x,T[R+U+1]=s.y,T[R+U+2]=s.z,T[R+U+3]=0),p===!0&&(s.fromBufferAttribute(z,O),T[R+U+4]=s.x,T[R+U+5]=s.y,T[R+U+6]=s.z,T[R+U+7]=0),y===!0&&(s.fromBufferAttribute(G,O),T[R+U+8]=s.x,T[R+U+9]=s.y,T[R+U+10]=s.z,T[R+U+11]=G.itemSize===4?s.w:1)}}h={count:d,texture:x,size:new se(v,A)},i.set(o,h),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function T_(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var w_={[Uh]:"LINEAR_TONE_MAPPING",[Fh]:"REINHARD_TONE_MAPPING",[Oh]:"CINEON_TONE_MAPPING",[wa]:"ACES_FILMIC_TONE_MAPPING",[zh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Bh]:"CUSTOM_TONE_MAPPING"};function A_(n,e,t,i,s,r){let a=new Nn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new yt;u.setAttribute("position",new qe([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qe([0,2,0,0,2,0],2));let d=new il({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Ge(u,d),f=new Ea(-1,1,1,-1,0,1),p=null,y=null,m=!1,g,_=null,S=[],v=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let x=0;x<S.length;x++){let b=S[x];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){S=A,v=S.length>0&&S[0].isRenderPass===!0;let T=a.width,x=a.height;S.length>0&&o===null&&(o=new Nn(T,x,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(T,x,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&S.some(L=>L.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Li(T,x),r===!0&&(c.format=Ui,c.type=ws)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let L=0;L<S.length;L++){let C=S[L];C.setSize&&C.setSize(T,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===fi&&S.length===0)return!1;if(_=T,T!==null){let x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return v===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=fi,!0},this.hasRenderPass=function(){return v},this.end=function(A,T){A.toneMapping=g,m=!0;let x=a,b=o;for(let L=0;L<S.length;L++){let C=S[L];C.enabled!==!1&&(C.render(A,b,x,T),C.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(p!==A.outputColorSpace||y!==A.toneMapping){p=A.outputColorSpace,y=A.toneMapping,d.defines={},ft.getTransfer(p)===_t&&(d.defines.SRGB_TRANSFER="");let L=w_[y];L&&(d.defines[L]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(_),A.render(h,f),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}var cp=new En,hp=new Li(1,1),up=new ra(1),dp=new Jr,fp=new $o,pp=new sa,Gf=[],Vf=[],Wf=new Float32Array(16),Xf=new Float32Array(9),qf=new Float32Array(4);function Sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Gf[s];if(r===void 0&&(r=new Float32Array(s),Gf[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Jt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function cc(n,e){let t=Vf[e];t===void 0&&(t=new Int32Array(e),Vf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function R_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function C_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2fv(this.addr,e),Kt(t,e)}}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;n.uniform3fv(this.addr,e),Kt(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4fv(this.addr,e),Kt(t,e)}}function L_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;qf.set(i),n.uniformMatrix2fv(this.addr,!1,qf),Kt(t,i)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;Xf.set(i),n.uniformMatrix3fv(this.addr,!1,Xf),Kt(t,i)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Jt(t,i))return;Wf.set(i),n.uniformMatrix4fv(this.addr,!1,Wf),Kt(t,i)}}function U_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function F_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2iv(this.addr,e),Kt(t,e)}}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3iv(this.addr,e),Kt(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4iv(this.addr,e),Kt(t,e)}}function z_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function k_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;n.uniform2uiv(this.addr,e),Kt(t,e)}}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;n.uniform3uiv(this.addr,e),Kt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;n.uniform4uiv(this.addr,e),Kt(t,e)}}function hc(n){return n.version===0&&(n.compareFunction=Jh,n.needsUpdate=!0),n}function V_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=hc(hp):r=cp,t.setTexture2D(e||r,s)}function W_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fp,s)}function X_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=hc(up):r=pp,t.setTextureCube(e||r,s)}function q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dp,s)}function Y_(n){switch(n){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return k_;case 36295:return H_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return V_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function Z_(n,e){n.uniform1fv(this.addr,e)}function $_(n,e){let t=Sr(e,this.size,2);n.uniform2fv(this.addr,t)}function J_(n,e){let t=Sr(e,this.size,3);n.uniform3fv(this.addr,t)}function K_(n,e){let t=Sr(e,this.size,4);n.uniform4fv(this.addr,t)}function j_(n,e){let t=Sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q_(n,e){let t=Sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ey(n,e){let t=Sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ty(n,e){n.uniform1iv(this.addr,e)}function ny(n,e){n.uniform2iv(this.addr,e)}function iy(n,e){n.uniform3iv(this.addr,e)}function sy(n,e){n.uniform4iv(this.addr,e)}function ry(n,e){n.uniform1uiv(this.addr,e)}function ay(n,e){n.uniform2uiv(this.addr,e)}function oy(n,e){n.uniform3uiv(this.addr,e)}function ly(n,e){n.uniform4uiv(this.addr,e)}function cy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=hc(hp):a=cp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function hy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fp,r[a])}function uy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=hc(up):a=pp;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function dy(n,e,t){let i=this.cache,s=e.length,r=cc(t,s);Jt(i,r)||(n.uniform1iv(this.addr,r),Kt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dp,r[a])}function fy(n){switch(n){case 5126:return Z_;case 35664:return $_;case 35665:return J_;case 35666:return K_;case 35674:return j_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return hy;case 35680:case 36300:case 36308:case 36293:return uy;case 36289:case 36303:case 36311:case 36292:return dy}}var uu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}},du=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=fy(t.type)}},fu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},cu=/(\w+)(\])?(\[|\.)?/g;function Yf(n,e){n.seq.push(e),n.map[e.id]=e}function py(n,e,t){let i=n.name,s=i.length;for(cu.lastIndex=0;;){let r=cu.exec(i),a=cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Yf(t,c===void 0?new uu(o,n,e):new du(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new fu(o),Yf(t,d)),t=d}}}var vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);py(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Zf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var my=37297,gy=0;function xy(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var $f=new Ze;function _y(n){ft._getMatrix($f,ft.workingColorSpace,n);let e=`mat3( ${$f.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(n)){case Yr:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Jf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xy(n.getShaderSource(e),o)}else return r}function yy(n,e){let t=_y(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var vy={[Uh]:"Linear",[Fh]:"Reinhard",[Oh]:"Cineon",[wa]:"ACESFilmic",[zh]:"AgX",[kh]:"Neutral",[Bh]:"Custom"};function My(n,e){let t=vy[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new I;function Sy(){ft.getLuminanceCoefficients(oc);let n=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function by(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function Ey(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ty(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Fa(n){return n!==""}function Kf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pu(n){return n.replace(wy,Ay)}function Ay(n,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pu(t)}var Ry=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qf(n){return n.replace(Ry,Cy)}function Cy(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ep(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var Py={[Ss]:"SHADOWMAP_TYPE_PCF",[xr]:"SHADOWMAP_TYPE_VSM"};function Iy(n){return Py[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ly={[_r]:"ENVMAP_MODE_REFRACTION"};function Dy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Ly[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ny={[_l]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[df]:"ENVMAP_BLENDING_ADD"};function Uy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ny[n.combine]||"ENVMAP_BLENDING_NONE"}function Fy(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Iy(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Dy(t),d=Uy(t),h=by(t),f=Ey(r),p=s.createProgram(),y,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fa).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Fa).join(`
`),m.length>0&&(m+=`
`)):(y=[ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),m=[ep(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?nt.tonemapping_pars_fragment:"",t.toneMapping!==fi?My("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,yy("linearToOutputTexel",t.outputColorSpace),Sy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fa).join(`
`)),a=pu(a),a=Kf(a,t),a=jf(a,t),o=pu(o),o=Kf(o,t),o=jf(o,t),a=Qf(a),o=Qf(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,y=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=g+y+a,S=g+m+o,v=Zf(s,s.VERTEX_SHADER,_),A=Zf(s,s.FRAGMENT_SHADER,S);s.attachShader(p,v),s.attachShader(p,A),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(p)||"",z=s.getShaderInfoLog(v)||"",G=s.getShaderInfoLog(A)||"",R=D.trim(),O=z.trim(),U=G.trim(),F=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(F=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,v,A);else{let H=Jf(s,v,"vertex"),J=Jf(s,A,"fragment");Xe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+R+`
`+H+`
`+J)}else R!==""?We("WebGLProgram: Program Info Log:",R):(O===""||U==="")&&(Y=!1);Y&&(C.diagnostics={runnable:F,programLog:R,vertexShader:{log:O,prefix:y},fragmentShader:{log:U,prefix:m}})}s.deleteShader(v),s.deleteShader(A),x=new vr(s,p),b=Ty(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,my)),L},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=gy++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=v,this.fragmentShader=A,this}var Oy=0,mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new gu(e),t.set(e,i)),i}},gu=class{constructor(e){this.id=Oy++,this.code=e,this.usedTimes=0}};function By(n){return n===es||n===La||n===Da}function zy(n,e,t,i,s,r){let a=new Kr,o=new mu,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,L,C,D,z){let G=C.fog,R=D.geometry,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=e.get(x.envMap||O,U),Y=h[x.type],H=i.precision;x.precision!==null&&(H=i.getMaxPrecision(x.precision),H!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,te=J!==void 0?J.length:0,be=0;R.morphAttributes.position!==void 0&&(be=1),R.morphAttributes.normal!==void 0&&(be=2),R.morphAttributes.color!==void 0&&(be=3);let Oe,K,ye,Ae;if(Y){let Me=mi[Y];Oe=Me.vertexShader,K=Me.fragmentShader}else{Oe=x.vertexShader,K=x.fragmentShader;let Me=o.getVertexShaderStage(x),Mt=o.getFragmentShaderStage(x);o.update(x,Me,Mt),ye=Me.id,Ae=Mt.id}let ze=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,Rt=D.isBatchedMesh===!0,Ve=!!x.map,it=!!x.matcap,ot=!!F,ie=ot&&F.isPMREMTexture===!0,ue=!!x.aoMap,le=!!x.lightMap,we=!!x.bumpMap&&x.wireframe===!1,_e=!!x.normalMap,Ke=!!x.displacementMap,Ue=!!x.emissiveMap,lt=!!x.metalnessMap,ht=!!x.roughnessMap,gt=x.anisotropy>0,k=x.clearcoat>0,Vt=x.diffuseRoughness>0,at=x.dispersion>0,St=x.retroreflectivity>0,me=x.iridescence>0,Ft=x.sheen>0,He=x.transmission>0,Ye=gt&&!!x.anisotropyMap,P=k&&!!x.clearcoatMap,E=k&&!!x.clearcoatNormalMap,W=k&&!!x.clearcoatRoughnessMap,re=Vt&&!!x.diffuseRoughnessMap,ne=me&&!!x.iridescenceMap,ce=me&&!!x.iridescenceThicknessMap,ge=Ft&&!!x.sheenColorMap,j=Ft&&!!x.sheenRoughnessMap,Q=!!x.specularMap,de=!!x.specularColorMap,N=!!x.specularIntensityMap,ee=He&&!!x.transmissionMap,$=He&&!!x.thicknessMap,fe=!!x.gradientMap,oe=!!x.alphaMap,he=x.alphaTest>0,Fe=!!x.alphaHash,et=!!x.extensions,ae=fi;x.toneMapped&&(ze===null||ze.isXRRenderTarget===!0)&&(ae=n.toneMapping);let Be=ie?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,Qe={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:Oe,fragmentShader:K,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:Rt,batchingColor:Rt&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:ze===null?n.outputColorSpace:ze.isXRRenderTarget===!0?ze.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:it,envMap:ot,envMapMode:ot&&F.mapping,envMapPMREM:ie,envMapMaxLod:ie?Be.length-1:null,envMapSize:ie?Be[0].width:null,aoMap:ue,lightMap:le,bumpMap:we,normalMap:_e,displacementMap:Ke,emissiveMap:Ue,normalMapObjectSpace:_e&&x.normalMapType===mf,normalMapTangentSpace:_e&&x.normalMapType===Na,packedNormalMap:_e&&x.normalMapType===Na&&By(x.normalMap.format),metalnessMap:lt,roughnessMap:ht,anisotropy:gt,anisotropyMap:Ye,clearcoat:k,clearcoatMap:P,clearcoatNormalMap:E,clearcoatRoughnessMap:W,diffuseRoughness:Vt,diffuseRoughnessMap:re,dispersion:at,retroreflection:St,iridescence:me,iridescenceMap:ne,iridescenceThicknessMap:ce,sheen:Ft,sheenColorMap:ge,sheenRoughnessMap:j,specularMap:Q,specularColorMap:de,specularIntensityMap:N,transmission:He,transmissionMap:ee,thicknessMap:$,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Qi&&x.alphaToCoverage===!1,alphaMap:oe,alphaTest:he,alphaHash:Fe,combine:x.combine,mapUv:Ve&&f(x.map.channel),aoMapUv:ue&&f(x.aoMap.channel),lightMapUv:le&&f(x.lightMap.channel),bumpMapUv:we&&f(x.bumpMap.channel),normalMapUv:_e&&f(x.normalMap.channel),displacementMapUv:Ke&&f(x.displacementMap.channel),emissiveMapUv:Ue&&f(x.emissiveMap.channel),metalnessMapUv:lt&&f(x.metalnessMap.channel),roughnessMapUv:ht&&f(x.roughnessMap.channel),anisotropyMapUv:Ye&&f(x.anisotropyMap.channel),clearcoatMapUv:P&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:E&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:re&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&f(x.sheenRoughnessMap.channel),specularMapUv:Q&&f(x.specularMap.channel),specularColorMapUv:de&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:ee&&f(x.transmissionMap.channel),thicknessMapUv:$&&f(x.thicknessMap.channel),alphaMapUv:oe&&f(x.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(_e||gt),vertexNormals:!!R.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!R.attributes.uv&&(Ve||oe),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||R.attributes.normal===void 0&&_e===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(Me=>Me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===_t,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===_t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:et&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&x.extensions.multiDraw===!0||Rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(n.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){let b=h[x.type],L;if(b){let C=mi[b];L=Uf.clone(C.uniforms)}else L=x.uniforms;return L}function S(x,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new Fy(n,b,x,s),c.push(L),u.set(b,L)),L}function v(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:y,getUniforms:_,acquireProgram:S,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:T}}function ky(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Hy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function tp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function np(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,p,y,m,g){let _=n[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},n[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.materialVariant=a(h),_.groupOrder=y,_.renderOrder=h.renderOrder,_.z=m,_.group=g),e++,_}function l(h,f,p,y,m,g,_){_.reversedDepth===!0&&(m=-m);let S=o(h,f,p,y,m,g);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(h,f,p,y,m,g){let _=o(h,f,p,y,m,g);p.transmission>0?i.unshift(_):p.transparent===!0?s.unshift(_):t.unshift(_)}function u(h,f){t.length>1&&t.sort(h||Hy),i.length>1&&i.sort(f||tp),s.length>1&&s.sort(f||tp)}function d(){for(let h=e,f=n.length;h<f;h++){let p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Gy(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new np,n.set(i,[a])):s>=r.length?(a=new np,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Pe};break;case"SpotLight":t={position:new I,direction:new I,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function Wy(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Xy=0;function qy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Yy(n){let e=new Vy,t=Wy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new ct,a=new ct;function o(c){let u=0,d=0,h=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,p=0,y=0,m=0,g=0,_=0,S=0,v=0,A=0,T=0,x=0,b=0,L=0,C=0;c.sort(qy);for(let z=0,G=c.length;z<G;z++){let R=c[z],O=R.color,U=R.intensity,F=R.distance,Y=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===es?Y=R.shadow.map.texture:Y=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*U,d+=O.g*U,h+=O.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(R.sh.coefficients[H],U);C++}else if(R.isSunLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[p]=te,i.sunShadowMap[p]=Y;let be=J.getViewportCount();for(let Oe=0;Oe<be;Oe++)i.sunShadowMatrix[y+Oe]=J.getMatrix(Oe),i.sunShadowCascade[y+Oe]=J._cascadeData[Oe];y+=be,p++}i.sun[f]=H,f++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.directionalShadow[m]=te,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=R.shadow.matrix,A++}i.directional[m]=H,m++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(U),H.distance=F,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,i.spot[_]=H;let J=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,J.updateMatrices(R),R.castShadow&&L++),i.spotLightMatrix[_]=J.matrix,R.castShadow){let te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,i.spotShadow[_]=te,i.spotShadowMap[_]=Y,x++}_++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(O).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),i.rectArea[S]=H,S++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let J=R.shadow,te=t.get(R);te.shadowIntensity=J.intensity,te.shadowBias=J.bias,te.shadowNormalBias=J.normalBias,te.shadowRadius=J.radius,te.shadowMapSize=J.mapSize,te.shadowCameraNear=J.camera.near,te.shadowCameraFar=J.camera.far,i.pointShadow[g]=te,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=H,g++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),i.hemi[v]=H,v++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==v||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=_,i.rectArea.length=S,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+b-L,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=v,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=C,i.version=Xy++)}function l(c,u){let d=0,h=0,f=0,p=0,y=0,m=0,g=u.matrixWorldInverse;for(let _=0,S=c.length;_<S;_++){let v=c[_];if(v.isSunLight){let A=i.sun[d];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),d++}else if(v.isDirectionalLight){let A=i.directional[h];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),h++}else if(v.isSpotLight){let A=i.spot[p];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let A=i.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=i.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){let A=i.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:l,state:i}}function ip(n){let e=new Yy(n),t=[],i=[],s=[];function r(d){u.camera=d,t.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){i.push(d)}function l(){e.setup(t),s.sort((d,h)=>d.priority-h.priority||d.id-h.id)}function c(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zy(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ip(n),e.set(s,[o])):r>=a.length?(o=new ip(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var $y=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jy=`uniform sampler2D shadow_pass;
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
}`,Ky=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],jy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],sp=new ct,Ua=new I,hu=new I;function Qy(n,e,t){let i=new qi,s=new se,r=new se,a=new wt,o=new sl,l=new rl,c={},u=t.maxTextureSize,d={[di]:$t,[$t]:di,[Tn]:Tn},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:$y,fragmentShader:Jy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let p=new yt;p.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ge(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ss;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Xd&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ss);let L=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(bs),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=T.length;R<O;R++){let U=T[R],F=U.shadow;if(F===void 0){We("WebGLShadowMap:",U,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let Y=F.getFrameExtents();s.multiply(Y),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y));let H=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||G===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===xr){if(U.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Nn(s.x,s.y,{format:es,type:ii,minFilter:bn,magFilter:bn,generateMipmaps:!1}),F.map.texture.name=U.name+".shadowMap",F.map.depthTexture=new Li(s.x,s.y,Wn),F.map.depthTexture.name=U.name+".shadowMapDepth",F.map.depthTexture.format=Ci,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn}else U.isPointLight?(F.map=new Oa(s.x),F.map.depthTexture=new ra(s.x,ni)):(F.map=new Nn(s.x,s.y),F.map.depthTexture=new Li(s.x,s.y,ni)),F.map.depthTexture.name=U.name+".shadowMap",F.map.depthTexture.format=Ci,this.type===Ss?(F.map.depthTexture.compareFunction=H?$h:Zh,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=sn,F.map.depthTexture.magFilter=sn);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);let J=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();U.isPointLight!==!0&&F.updateMatrices(U,b);let te=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:b.layers;for(let be=0;be<J;be++){let Oe=F.getCamera(be);if(U.isPointLight){let K=F.camera,ye=F.matrix,Ae=U.distance||K.far;Ae!==K.far&&(K.far=Ae,K.updateProjectionMatrix()),Ua.setFromMatrixPosition(U.matrixWorld),K.position.copy(Ua),hu.copy(K.position),hu.add(Ky[be]),K.up.copy(jy[be]),K.lookAt(hu),K.updateMatrixWorld(),ye.makeTranslation(-Ua.x,-Ua.y,-Ua.z),sp.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),F._frustum.setFromProjectionMatrix(sp,K.coordinateSystem,K.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,be),n.clear();else{be===0&&(n.setRenderTarget(F.map),n.clear());let K=F.getViewport(be);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),z.viewport(a)}i=F.getFrustum(be),v(x,b,Oe,U,te,this.type)}F.isPointLightShadow!==!0&&this.type===xr&&_(F,b),F.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(L,C,D)};function _(T,x){let b=e.update(y);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Nn(s.x,s.y,{format:es,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,b,h,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,b,f,y,null)}function S(T,x,b,L){let C=null,D=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)C=D;else if(C=b.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let z=C.uuid,G=x.uuid,R=c[z];R===void 0&&(R={},c[z]=R);let O=R[G];O===void 0&&(O=C.clone(),R[G]=O,x.addEventListener("dispose",A)),C=O}if(C.visible=x.visible,C.wireframe=x.wireframe,L===xr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let z=n.properties.get(C);z.light=b}return C}function v(T,x,b,L,C,D){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===xr)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let R=e.update(T),O=T.material;if(Array.isArray(O)){let U=R.groups;for(let F=0,Y=U.length;F<Y;F++){let H=U[F],J=O[H.materialIndex];if(J&&J.visible){let te=S(T,J,L,D);T.onBeforeShadow(n,T,x,b,R,te,H),n.renderBufferDirect(b,null,R,te,T,H),T.onAfterShadow(n,T,x,b,R,te,H)}}}else if(O.visible){let U=S(T,O,L,D);T.onBeforeShadow(n,T,x,b,R,U,null),n.renderBufferDirect(b,null,R,U,T,null),T.onAfterShadow(n,T,x,b,R,U,null)}}let G=T.children;for(let R=0,O=G.length;R<O;R++)v(G[R],x,b,L,C,D)}function A(T){T.target.removeEventListener("dispose",A);for(let b in c){let L=c[b],C=T.target.uuid;C in L&&(L[C].dispose(),delete L[C])}}}function ev(n,e){function t(){let N=!1,ee=new wt,$=null,fe=new wt(0,0,0,0);return{setMask:function(oe){$!==oe&&!N&&(n.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){N=oe},setClear:function(oe,he,Fe,et,ae){ae===!0&&(oe*=et,he*=et,Fe*=et),ee.set(oe,he,Fe,et),fe.equals(ee)===!1&&(n.clearColor(oe,he,Fe,et),fe.copy(ee))},reset:function(){N=!1,$=null,fe.set(-1,0,0,0)}}}function i(){let N=!1,ee=!1,$=null,fe=null,oe=null;return{setReversed:function(he){if(ee!==he){let Fe=e.get("EXT_clip_control");he?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),ee=he;let et=oe;oe=null,this.setClear(et)}},getReversed:function(){return ee},setTest:function(he){he?ve(n.DEPTH_TEST):ke(n.DEPTH_TEST)},setMask:function(he){$!==he&&!N&&(n.depthMask(he),$=he)},setFunc:function(he){if(ee&&(he=Tf[he]),fe!==he){switch(he){case Oo:n.depthFunc(n.NEVER);break;case Bo:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case Ho:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case Vo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=he}},setLocked:function(he){N=he},setClear:function(he){oe!==he&&(oe=he,ee&&(he=1-he),n.clearDepth(he))},reset:function(){N=!1,$=null,fe=null,oe=null,ee=!1}}}function s(){let N=!1,ee=null,$=null,fe=null,oe=null,he=null,Fe=null,et=null,ae=null;return{setTest:function(Be){N||(Be?ve(n.STENCIL_TEST):ke(n.STENCIL_TEST))},setMask:function(Be){ee!==Be&&!N&&(n.stencilMask(Be),ee=Be)},setFunc:function(Be,Qe,Me){($!==Be||fe!==Qe||oe!==Me)&&(n.stencilFunc(Be,Qe,Me),$=Be,fe=Qe,oe=Me)},setOp:function(Be,Qe,Me){(he!==Be||Fe!==Qe||et!==Me)&&(n.stencilOp(Be,Qe,Me),he=Be,Fe=Qe,et=Me)},setLocked:function(Be){N=Be},setClear:function(Be){ae!==Be&&(n.clearStencil(Be),ae=Be)},reset:function(){N=!1,ee=null,$=null,fe=null,oe=null,he=null,Fe=null,et=null,ae=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,u={},d={},h={},f=new WeakMap,p=[],y=null,m=!1,g=null,_=null,S=null,v=null,A=null,T=null,x=null,b=new Pe(0,0,0),L=0,C=!1,D=null,z=null,G=null,R=null,O=null,U=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,Y=0,H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(H)[1]),F=Y>=1):H.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),F=Y>=2);let J=null,te={},be=n.getParameter(n.SCISSOR_BOX),Oe=n.getParameter(n.VIEWPORT),K=new wt().fromArray(be),ye=new wt().fromArray(Oe);function Ae(N,ee,$,fe){let oe=new Uint8Array(4),he=n.createTexture();n.bindTexture(N,he),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<$;Fe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ee,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,oe):n.texImage2D(ee+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,oe);return he}let ze={};ze[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ze[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ze[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ze[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(ir),we(!1),_e(Ph),ve(n.CULL_FACE),ue(bs);function ve(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function ke(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Rt(N,ee){return h[N]!==ee?(n.bindFramebuffer(N,ee),h[N]=ee,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ee),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ve(N,ee){let $=p,fe=!1;if(N){$=f.get(ee),$===void 0&&($=[],f.set(ee,$));let oe=N.textures;if($.length!==oe.length||$[0]!==n.COLOR_ATTACHMENT0){for(let he=0,Fe=oe.length;he<Fe;he++)$[he]=n.COLOR_ATTACHMENT0+he;$.length=oe.length,fe=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,fe=!0);fe&&n.drawBuffers($)}function it(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let ot={[Es]:n.FUNC_ADD,[Yd]:n.FUNC_SUBTRACT,[Zd]:n.FUNC_REVERSE_SUBTRACT};ot[$d]=n.MIN,ot[Jd]=n.MAX;let ie={[Kd]:n.ZERO,[jd]:n.ONE,[Qd]:n.SRC_COLOR,[Dh]:n.SRC_ALPHA,[af]:n.SRC_ALPHA_SATURATE,[sf]:n.DST_COLOR,[tf]:n.DST_ALPHA,[ef]:n.ONE_MINUS_SRC_COLOR,[Nh]:n.ONE_MINUS_SRC_ALPHA,[rf]:n.ONE_MINUS_DST_COLOR,[nf]:n.ONE_MINUS_DST_ALPHA,[of]:n.CONSTANT_COLOR,[lf]:n.ONE_MINUS_CONSTANT_COLOR,[cf]:n.CONSTANT_ALPHA,[hf]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(N,ee,$,fe,oe,he,Fe,et,ae,Be){if(N===bs){m===!0&&(ke(n.BLEND),m=!1);return}if(m===!1&&(ve(n.BLEND),m=!0),N!==qd){if(N!==g||Be!==C){if((_!==Es||A!==Es)&&(n.blendEquation(n.FUNC_ADD),_=Es,A=Es),Be)switch(N){case Qi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFunc(n.ONE,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Xe("WebGLState: Invalid blending: ",N);break}else switch(N){case Qi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ih:Xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:Xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xe("WebGLState: Invalid blending: ",N);break}S=null,v=null,T=null,x=null,b.set(0,0,0),L=0,g=N,C=Be}return}oe=oe||ee,he=he||$,Fe=Fe||fe,(ee!==_||oe!==A)&&(n.blendEquationSeparate(ot[ee],ot[oe]),_=ee,A=oe),($!==S||fe!==v||he!==T||Fe!==x)&&(n.blendFuncSeparate(ie[$],ie[fe],ie[he],ie[Fe]),S=$,v=fe,T=he,x=Fe),(et.equals(b)===!1||ae!==L)&&(n.blendColor(et.r,et.g,et.b,ae),b.copy(et),L=ae),g=N,C=!1}function le(N,ee){N.side===Tn?ke(n.CULL_FACE):ve(n.CULL_FACE);let $=N.side===$t;ee&&($=!$),we($),N.blending===Qi&&N.transparent===!1?ue(bs):ue(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let fe=N.stencilWrite;o.setTest(fe),fe&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):ke(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(N){D!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),D=N)}function _e(N){N!==Vd?(ve(n.CULL_FACE),N!==z&&(N===Ph?n.cullFace(n.BACK):N===Wd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ke(n.CULL_FACE),z=N}function Ke(N){N!==G&&(F&&n.lineWidth(N),G=N)}function Ue(N,ee,$){N?(ve(n.POLYGON_OFFSET_FILL),(R!==ee||O!==$)&&(R=ee,O=$,a.getReversed()&&(ee=-ee,$=-$),n.polygonOffset(ee,$))):ke(n.POLYGON_OFFSET_FILL)}function lt(N){N?ve(n.SCISSOR_TEST):ke(n.SCISSOR_TEST)}function ht(N){N===void 0&&(N=n.TEXTURE0+U-1),J!==N&&(n.activeTexture(N),J=N)}function gt(N,ee,$){$===void 0&&(J===null?$=n.TEXTURE0+U-1:$=J);let fe=te[$];fe===void 0&&(fe={type:void 0,texture:void 0},te[$]=fe),(fe.type!==N||fe.texture!==ee)&&(J!==$&&(n.activeTexture($),J=$),n.bindTexture(N,ee||ze[N]),fe.type=N,fe.texture=ee)}function k(){let N=te[J];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Vt(){try{n.compressedTexImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function at(){try{n.compressedTexImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function St(){try{n.texSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function me(){try{n.texSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ft(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function He(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function Ye(){try{n.texStorage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function P(){try{n.texStorage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function E(){try{n.texImage2D(...arguments)}catch(N){Xe("WebGLState:",N)}}function W(){try{n.texImage3D(...arguments)}catch(N){Xe("WebGLState:",N)}}function re(N){return d[N]!==void 0?d[N]:n.getParameter(N)}function ne(N,ee){d[N]!==ee&&(n.pixelStorei(N,ee),d[N]=ee)}function ce(N){K.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),K.copy(N))}function ge(N){ye.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ye.copy(N))}function j(N,ee){let $=c.get(ee);$===void 0&&($=new WeakMap,c.set(ee,$));let fe=$.get(N);fe===void 0&&(fe=n.getUniformBlockIndex(ee,N.name),n.uniformBlockBinding(ee,fe,fe),$.set(N,fe))}function Q(N,ee,$){let oe=c.get(ee).get(N);l[oe]!==$&&(n.bindBufferBase(n.UNIFORM_BUFFER,oe,$),l[oe]=$)}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},J=null,te={},h={},l={},f=new WeakMap,p=[],y=null,m=!1,g=null,_=null,S=null,v=null,A=null,T=null,x=null,b=new Pe(0,0,0),L=0,C=!1,D=null,z=null,G=null,R=null,O=null,K.set(0,0,n.canvas.width,n.canvas.height),ye.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:ke,bindFramebuffer:Rt,drawBuffers:Ve,useProgram:it,setBlending:ue,setMaterial:le,setFlipSided:we,setCullFace:_e,setLineWidth:Ke,setPolygonOffset:Ue,setScissorTest:lt,activeTexture:ht,bindTexture:gt,unbindTexture:k,compressedTexImage2D:Vt,compressedTexImage3D:at,texImage2D:E,texImage3D:W,pixelStorei:ne,getParameter:re,updateUBOMapping:j,uniformBlockBinding:Q,texStorage2D:Ye,texStorage3D:P,texSubImage2D:St,texSubImage3D:me,compressedTexSubImage2D:Ft,compressedTexSubImage3D:He,scissor:ce,viewport:ge,reset:de}}function tv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap,d=new Set,h,f=new WeakMap,p=new Set,y=new FinalizationRegistry(P=>p.delete(P)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return m?new OffscreenCanvas(P,E):Zr("canvas")}function _(P,E,W){let re=1,ne=Ye(P);if((ne.width>W||ne.height>W)&&(re=W/Math.max(ne.width,ne.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ce=Math.floor(re*ne.width),ge=Math.floor(re*ne.height);h===void 0&&(h=g(ce,ge));let j=E?g(ce,ge):h;return j.width=ce,j.height=ge,j.getContext("2d").drawImage(P,0,0,ce,ge),We("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ce+"x"+ge+")."),j}else return"data"in P&&We("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){n.generateMipmap(P)}function A(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(P,E,W,re,ne,ce=!1){if(P!==null){if(n[P]!==void 0)return n[P];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ge;re&&(ge=e.get("EXT_texture_norm16"),ge||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=E;if(E===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.R16_EXT),W===n.SHORT&&ge&&(j=ge.R16_SNORM_EXT)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),E===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.RG16_EXT),W===n.SHORT&&ge&&(j=ge.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),E===n.RGB&&(W===n.UNSIGNED_SHORT&&ge&&(j=ge.RGB16_EXT),W===n.SHORT&&ge&&(j=ge.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),E===n.RGBA){let Q=ce?Yr:ft.getTransfer(ne);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=Q===_t?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ge&&(j=ge.RGBA16_EXT),W===n.SHORT&&ge&&(j=ge.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(P,E){let W;return P?E===null||E===ni||E===ws?W=n.DEPTH24_STENCIL8:E===Wn?W=n.DEPTH32F_STENCIL8:E===yr&&(W=n.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ni||E===ws?W=n.DEPTH_COMPONENT24:E===Wn?W=n.DEPTH_COMPONENT32F:E===yr&&(W=n.DEPTH_COMPONENT16),W}function b(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==sn&&P.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){let E=new WeakRef(P);i.get(P).__ref=E,p.add(E),y.register(P,E,E)}function C(P){let E=i.get(P).__ref;E!==void 0&&(p.delete(E),y.unregister(E))}function D(P){G(P.target)}function z(P){R(P.target)}function G(P){P.removeEventListener("dispose",D),C(P),U(P),P.isVideoTexture&&u.delete(P),P.isHTMLTexture&&d.delete(P)}function R(P){P.removeEventListener("dispose",z),C(P),Y(P)}function O(){for(let P of p){let E=P.deref();E!==void 0&&(E.isRenderTarget===!0?R(E):G(E))}p.clear(),d.clear()}function U(P){let E=i.get(P);if(E.__webglInit===void 0)return;let W=P.source,re=f.get(W);if(re){let ne=re[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&F(P),Object.keys(re).length===0&&f.delete(W)}i.remove(P)}function F(P){let E=i.get(P);n.deleteTexture(E.__webglTexture);let W=P.source,re=f.get(W);delete re[E.__cacheKey],a.memory.textures--}function Y(P){let E=i.get(P);E.__depthDisposeCallback&&E.__depthDisposeCallback();let W=P.depthTexture;if(W&&W.renderTarget===P&&G(W),P.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let ce=0;ce<E.__webglFramebuffer[ne].length;ce++)n.deleteFramebuffer(E.__webglFramebuffer[ne][ce]);else n.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)n.deleteFramebuffer(E.__webglFramebuffer[ne]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let re=P.textures;for(let ne=0,ce=re.length;ne<ce;ne++){let ge=i.get(re[ne]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),a.memory.textures--),i.remove(re[ne])}i.remove(P)}let H=0;function J(){H=0}function te(){return H}function be(P){H=P}function Oe(){let P=H;return P>=s.maxTextures&&We("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,P}function K(P){let E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.mipmapsAutoUpdate),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function ye(P,E){let W=i.get(P);if(P.isVideoTexture&&Ft(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&W.__version!==P.version){let re=P.image;if(re===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{le(W,P,E);return}}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function Ae(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){le(W,P,E);return}else P.isExternalTexture&&(W.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function ze(P,E){let W=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&W.__version!==P.version){le(W,P,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function ve(P,E){let W=i.get(P);if(P.version>0&&W.__version!==P.version){we(W,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}let ke={[ei]:n.REPEAT,[li]:n.CLAMP_TO_EDGE,[Wo]:n.MIRRORED_REPEAT},Rt={[sn]:n.NEAREST,[ff]:n.NEAREST_MIPMAP_NEAREST,[Aa]:n.NEAREST_MIPMAP_LINEAR,[bn]:n.LINEAR,[Ml]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Ve={[xf]:n.NEVER,[Jh]:n.ALWAYS,[_f]:n.LESS,[Zh]:n.LEQUAL,[yf]:n.EQUAL,[$h]:n.GEQUAL,[vf]:n.GREATER,[Mf]:n.NOTEQUAL};function it(P,E){if(E.type===Wn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bn||E.magFilter===Ml||E.magFilter===Aa||E.magFilter===Ni||E.minFilter===bn||E.minFilter===Ml||E.minFilter===Aa||E.minFilter===Ni)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,ke[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,ke[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,ke[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,Rt[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,Rt[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ve[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===sn||E.minFilter!==Aa&&E.minFilter!==Ni||E.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ot(P,E){let W=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",D),L(E));let re=E.source,ne=f.get(re);ne===void 0&&(ne={},f.set(re,ne));let ce=K(E);if(ce!==P.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[ce].usedTimes++;let ge=ne[P.__cacheKey];ge!==void 0&&(ne[P.__cacheKey].usedTimes--,ge.usedTimes===0&&F(E)),P.__cacheKey=ce,P.__webglTexture=ne[ce].texture}return W}function ie(P,E,W){return Math.floor(Math.floor(P/W)/E)}function ue(P,E,W,re){let ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,W,re,E.data);else{ce.sort((N,ee)=>N.start-ee.start);let ge=0;for(let N=1;N<ce.length;N++){let ee=ce[ge],$=ce[N],fe=ee.start+ee.count,oe=ie($.start,E.width,4),he=ie(ee.start,E.width,4);$.start<=fe+1&&oe===he&&ie($.start+$.count-1,E.width,4)===oe?ee.count=Math.max(ee.count,$.start+$.count-ee.start):(++ge,ce[ge]=$)}ce.length=ge+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),Q=t.getParameter(n.UNPACK_SKIP_PIXELS),de=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let N=0,ee=ce.length;N<ee;N++){let $=ce[N],fe=Math.floor($.start/4),oe=Math.ceil($.count/4),he=fe%E.width,Fe=Math.floor(fe/E.width),et=oe,ae=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,he),t.pixelStorei(n.UNPACK_SKIP_ROWS,Fe),t.texSubImage2D(n.TEXTURE_2D,0,he,Fe,et,ae,W,re,E.data)}P.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Q),t.pixelStorei(n.UNPACK_SKIP_ROWS,de)}}function le(P,E,W){let re=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=n.TEXTURE_3D);let ne=ot(P,E),ce=E.source;t.bindTexture(re,P.__webglTexture,n.TEXTURE0+W);let ge=i.get(ce);if(ce.version!==ge.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let ae=ft.getPrimaries(ft.workingColorSpace),Be=E.colorSpace===Fi?null:ft.getPrimaries(E.colorSpace),Qe=E.colorSpace===Fi||ae===Be?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let Q=_(E.image,!1,s.maxTextureSize);Q=He(E,Q);let de=r.convert(E.format,E.colorSpace),N=r.convert(E.type),ee=T(E.internalFormat,de,N,E.normalized,E.colorSpace,E.isVideoTexture);it(re,E);let $,fe=E.mipmaps,oe=E.isVideoTexture!==!0,he=ge.__version===void 0||ne===!0,Fe=ce.dataReady,et=b(E,Q);if(E.isDepthTexture)ee=x(E.format===Ui,E.type),he&&(oe?t.texStorage2D(n.TEXTURE_2D,1,ee,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,de,N,null));else if(E.isDataTexture)if(fe.length>0){oe&&he&&t.texStorage2D(n.TEXTURE_2D,et,ee,fe[0].width,fe[0].height);for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,de,N,$.data):t.texImage2D(n.TEXTURE_2D,ae,ee,$.width,$.height,0,de,N,$.data);E.generateMipmaps=!1}else oe?(he&&t.texStorage2D(n.TEXTURE_2D,et,ee,Q.width,Q.height),Fe&&ue(E,Q,de,N)):t.texImage2D(n.TEXTURE_2D,0,ee,Q.width,Q.height,0,de,N,Q.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){oe&&he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ee,fe[0].width,fe[0].height,Q.depth);for(let ae=0,Be=fe.length;ae<Be;ae++)if($=fe[ae],E.format!==si)if(de!==null)if(oe){if(Fe)if(E.layerUpdates.size>0){let Qe=iu($.width,$.height,E.format,E.type);for(let Me of E.layerUpdates){let Mt=$.data.subarray(Me*Qe/$.data.BYTES_PER_ELEMENT,(Me+1)*Qe/$.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,Me,$.width,$.height,1,de,Mt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Q.depth,de,$.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ee,$.width,$.height,Q.depth,0,$.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?Fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,$.width,$.height,Q.depth,de,N,$.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ee,$.width,$.height,Q.depth,0,de,N,$.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{oe&&he&&t.texStorage2D(n.TEXTURE_2D,et,ee,fe[0].width,fe[0].height);for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],E.format!==si?de!==null?oe?Fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,de,$.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ee,$.width,$.height,0,$.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,$.width,$.height,de,N,$.data):t.texImage2D(n.TEXTURE_2D,ae,ee,$.width,$.height,0,de,N,$.data)}else if(E.isDataArrayTexture)if(oe){if(he&&t.texStorage3D(n.TEXTURE_2D_ARRAY,et,ee,Q.width,Q.height,Q.depth),Fe)if(E.layerUpdates.size>0){let ae=iu(Q.width,Q.height,E.format,E.type);for(let Be of E.layerUpdates){let Qe=Q.data.subarray(Be*ae/Q.data.BYTES_PER_ELEMENT,(Be+1)*ae/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Be,Q.width,Q.height,1,de,N,Qe)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,N,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ee,Q.width,Q.height,Q.depth,0,de,N,Q.data);else if(E.isData3DTexture)oe?(he&&t.texStorage3D(n.TEXTURE_3D,et,ee,Q.width,Q.height,Q.depth),Fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,N,Q.data)):t.texImage3D(n.TEXTURE_3D,0,ee,Q.width,Q.height,Q.depth,0,de,N,Q.data);else if(E.isFramebufferTexture){if(he)if(oe)t.texStorage2D(n.TEXTURE_2D,et,ee,Q.width,Q.height);else{let ae=Q.width,Be=Q.height;for(let Qe=0;Qe<et;Qe++)t.texImage2D(n.TEXTURE_2D,Qe,ee,ae,Be,0,de,N,null),ae>>=1,Be>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){let ae=n.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),d.add(E),ae.onpaint=Be=>{let Qe=Be.changedElements;for(let Me of d)Qe.includes(Me.image)&&(Me.needsUpdate=!0)},ae.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Q);else{let Qe=n.RGBA,Me=n.RGBA,Mt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Qe,Me,Mt,Q)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(fe.length>0){if(oe&&he){let ae=Ye(fe[0]);t.texStorage2D(n.TEXTURE_2D,et,ee,ae.width,ae.height)}for(let ae=0,Be=fe.length;ae<Be;ae++)$=fe[ae],oe?Fe&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,de,N,$):t.texImage2D(n.TEXTURE_2D,ae,ee,de,N,$);E.generateMipmaps=!1}else if(oe){if(he){let ae=Ye(Q);t.texStorage2D(n.TEXTURE_2D,et,ee,ae.width,ae.height)}Fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,N,Q)}else t.texImage2D(n.TEXTURE_2D,0,ee,de,N,Q);S(E)&&E.mipmapsAutoUpdate===!0&&v(re),ge.__version=ce.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function we(P,E,W){if(E.image.length!==6)return;let re=ot(P,E),ne=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+W);let ce=i.get(ne);if(ne.version!==ce.__version||re===!0){t.activeTexture(n.TEXTURE0+W);let ge=ft.getPrimaries(ft.workingColorSpace),j=E.colorSpace===Fi?null:ft.getPrimaries(E.colorSpace),Q=E.colorSpace===Fi||ge===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let de=E.isCompressedTexture||E.image[0].isCompressedTexture,N=E.image[0]&&E.image[0].isDataTexture,ee=[];for(let Me=0;Me<6;Me++)!de&&!N?ee[Me]=_(E.image[Me],!0,s.maxCubemapSize):ee[Me]=N?E.image[Me].image:E.image[Me],ee[Me]=He(E,ee[Me]);let $=ee[0],fe=r.convert(E.format,E.colorSpace),oe=r.convert(E.type),he=T(E.internalFormat,fe,oe,E.normalized,E.colorSpace),Fe=E.isVideoTexture!==!0,et=ce.__version===void 0||re===!0,ae=ne.dataReady,Be=b(E,$);it(n.TEXTURE_CUBE_MAP,E);let Qe;if(E.isDepthTexture){if(he=x(E.format===Ui,E.type),et)if(Fe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,he,$.width,$.height);else for(let Me=0;Me<6;Me++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,$.width,$.height,0,fe,oe,null)}else if(de){Fe&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,he,$.width,$.height);for(let Me=0;Me<6;Me++){Qe=ee[Me].mipmaps;for(let Mt=0;Mt<Qe.length;Mt++){let en=Qe[Mt];E.format!==si?fe!==null?Fe?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,0,0,en.width,en.height,fe,en.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,he,en.width,en.height,0,en.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,0,0,en.width,en.height,fe,oe,en.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt,he,en.width,en.height,0,fe,oe,en.data)}}}else{if(Qe=E.mipmaps,Fe&&et){Qe.length>0&&Be++;let Me=Ye(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Be,he,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(N){Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ee[Me].width,ee[Me].height,fe,oe,ee[Me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,ee[Me].width,ee[Me].height,0,fe,oe,ee[Me].data);for(let Mt=0;Mt<Qe.length;Mt++){let zi=Qe[Mt].image[Me].image;Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,0,0,zi.width,zi.height,fe,oe,zi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,he,zi.width,zi.height,0,fe,oe,zi.data)}}else{Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,fe,oe,ee[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,he,fe,oe,ee[Me]);for(let Mt=0;Mt<Qe.length;Mt++){let en=Qe[Mt];Fe?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,0,0,fe,oe,en.image[Me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Mt+1,he,fe,oe,en.image[Me])}}}S(E)&&E.mipmapsAutoUpdate===!0&&v(n.TEXTURE_CUBE_MAP),ce.__version=ne.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,W,re,ne,ce){let ge=r.convert(W.format,W.colorSpace),j=r.convert(W.type),Q=T(W.internalFormat,ge,j,W.normalized,W.colorSpace),de=i.get(E),N=i.get(W);if(N.__renderTarget=E,!de.__hasExternalTextures){let ee=Math.max(1,E.width>>ce),$=Math.max(1,E.height>>ce);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,ce,Q,ee,$,E.depth,0,ge,j,null):t.texImage2D(ne,ce,Q,ee,$,0,ge,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,ne,N.__webglTexture,0,St(E)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,re,ne,N.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(P,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){let re=E.depthTexture,ne=re&&re.isDepthTexture?re.type:null,ce=x(E.stencilBuffer,ne),ge=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(E),ce,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(E),ce,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ce,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,P)}else{let re=E.textures;for(let ne=0;ne<re.length;ne++){let ce=re[ne],ge=r.convert(ce.format,ce.colorSpace),j=r.convert(ce.type),Q=T(ce.internalFormat,ge,j,ce.normalized,ce.colorSpace);me(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(E),Q,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(E),Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ue(P,E,W){let re=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(E.depthTexture);ne.__renderTarget=E;let ce=re?E.depthTexture.image[0]:E.depthTexture.image;(!ne.__webglTexture||ce.width!==E.width||ce.height!==E.height)&&(ce.width=E.width,ce.height=E.height,E.depthTexture.needsUpdate=!0),re?ve(E.depthTexture,0):ye(E.depthTexture,0);let ge=ne.__webglTexture,j=St(E),Q=re?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,de=E.depthTexture.format===Ui?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ci)me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,ge,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,ge,0);else if(E.depthTexture.format===Ui)me(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,de,Q,ge,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,de,Q,ge,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function lt(P){let E=i.get(P),W=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){let re=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),re){let ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,re.removeEventListener("dispose",ne)};re.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=re}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let re=0;re<6;re++)Ue(E.__webglFramebuffer[re],P,re);else P.texture.mipmaps.length>0?Ue(E.__webglFramebuffer[0],P,0):Ue(E.__webglFramebuffer,P,0);else if(W){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]===void 0)E.__webglDepthbuffer[re]=n.createRenderbuffer(),Ke(E.__webglDepthbuffer[re],P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[re];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ke(E.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(P,E,W){let re=i.get(P);E!==void 0&&_e(re.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&lt(P)}function gt(P){let E=P.texture,W=i.get(P),re=i.get(E);P.addEventListener("dispose",z),L(P);let ne=P.textures,ce=P.isWebGLCubeRenderTarget===!0,ge=ne.length>1;if(ge||(re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture()),re.__version=E.version,a.memory.textures++),ce){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(E.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let Q=0;Q<E.mipmaps.length;Q++)W.__webglFramebuffer[j][Q]=n.createFramebuffer()}else W.__webglFramebuffer[j]=n.createFramebuffer()}else{if(E.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<E.mipmaps.length;j++)W.__webglFramebuffer[j]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ge)for(let j=0,Q=ne.length;j<Q;j++){let de=i.get(ne[j]);de.__webglTexture===void 0&&(de.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&me(P)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<ne.length;j++){let Q=ne[j];W.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let de=r.convert(Q.format,Q.colorSpace),N=r.convert(Q.type),ee=T(Q.internalFormat,de,N,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),$=St(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,$,ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,W.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Ke(W.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),it(n.TEXTURE_CUBE_MAP,E);for(let j=0;j<6;j++)if(E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)_e(W.__webglFramebuffer[j][Q],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,Q);else _e(W.__webglFramebuffer[j],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);S(E)?v(n.TEXTURE_CUBE_MAP):E.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}else if(ge){for(let j=0,Q=ne.length;j<Q;j++){let de=ne[j],N=i.get(de),ee=n.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ee=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),it(ee,de),_e(W.__webglFramebuffer,P,de,n.COLOR_ATTACHMENT0+j,ee,0),S(de)&&v(ee)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,re.__webglTexture),it(j,E),E.mipmaps.length>0)for(let Q=0;Q<E.mipmaps.length;Q++)_e(W.__webglFramebuffer[Q],P,E,n.COLOR_ATTACHMENT0,j,Q);else _e(W.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,j,0);S(E)?v(j):E.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,E.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&lt(P)}function k(P){let E=P.textures;for(let W=0,re=E.length;W<re;W++){let ne=E[W];if(S(ne)&&ne.mipmapsAutoUpdate===!0){let ce=A(P),ge=i.get(ne).__webglTexture;t.bindTexture(ce,ge),v(ce),t.unbindTexture()}}}let Vt=[];function at(P){if(P.samples>0){if(me(P)===!1){let E=P.textures,W=P.width,re=P.height,ne=n.COLOR_BUFFER_BIT,ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=i.get(P),j=E.length>1;if(j)for(let de=0;de<E.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let de=0;de<E.length;de++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(E[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,N,0)}n.blitFramebuffer(0,0,W,re,0,0,W,re,ne,n.NEAREST),l===!0&&(Vt.length=0,Vt.push(n.COLOR_ATTACHMENT0+de),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Vt.push(ce),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<E.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,ge.__webglColorRenderbuffer[de]);let N=i.get(E[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,N,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function St(P){return Math.min(s.maxSamples,P.samples)}function me(P){let E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(P){let E=a.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function He(P,E){let W=P.colorSpace,re=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||W!==qr&&W!==Fi&&(ft.getTransfer(W)===_t?(re!==si||ne!==Cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xe("WebGLTextures: Unsupported texture color space:",W)),E}function Ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Oe,this.resetTextureUnits=J,this.getTextureUnits=te,this.setTextureUnits=be,this.setTexture2D=ye,this.setTexture2DArray=Ae,this.setTexture3D=ze,this.setTextureCube=ve,this.rebindTextures=ht,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=me,this.dispose=O}function nv(n,e){function t(i,s=Fi){let r,a=ft.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===El)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Wh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Xh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gh)return n.BYTE;if(i===Vh)return n.SHORT;if(i===yr)return n.UNSIGNED_SHORT;if(i===Sl)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===Wn)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===qh)return n.ALPHA;if(i===Yh)return n.RGB;if(i===si)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ui)return n.DEPTH_STENCIL;if(i===Tl)return n.RED;if(i===wl)return n.RED_INTEGER;if(i===es)return n.RG;if(i===Al)return n.RG_INTEGER;if(i===Rl)return n.RGBA_INTEGER;if(i===Ra||i===Ca||i===Pa||i===Ia)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cl||i===Pl||i===Il||i===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl||i===Ol||i===La||i===Bl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Dl||i===Nl)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ul)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fl)return r.COMPRESSED_R11_EAC;if(i===Ol)return r.COMPRESSED_SIGNED_R11_EAC;if(i===La)return r.COMPRESSED_RG11_EAC;if(i===Bl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===zl||i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Jl||i===Kl||i===jl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Vl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ql)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$l)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jl)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ql||i===ec||i===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Ql)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nc||i===ic||i===Da||i===sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Da)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var iv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sv=`
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

}`,xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new aa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new cn({vertexShader:iv,fragmentShader:sv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends ci{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null,y=typeof XRWebGLBinding<"u",m=new xu,g={},_=t.getContextAttributes(),S=null,v=null,A=[],T=[],x=new se,b=null,L=null,C=new mn;C.viewport=new wt;let D=new mn;D.viewport=new wt;let z=[C,D],G=new gl,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ye=A[K];return ye===void 0&&(ye=new or,A[K]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(K){let ye=A[K];return ye===void 0&&(ye=new or,A[K]=ye),ye.getGripSpace()},this.getHand=function(K){let ye=A[K];return ye===void 0&&(ye=new or,A[K]=ye),ye.getHandSpace()};function U(K){let ye=T.indexOf(K.inputSource);if(ye===-1)return;let Ae=A[ye];Ae!==void 0&&(Ae.update(K.inputSource,K.frame,c||a),Ae.dispatchEvent({type:K.type,data:K.inputSource}))}function F(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",Y);for(let K=0;K<A.length;K++){let ye=T[K];ye!==null&&(T[K]=null,A[K].disconnect(ye))}R=null,O=null,m.reset();for(let K in g)delete g[K];if(e.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),L!==null){let K=L.camera;K.fov=L.fov,K.zoom=L.zoom,K.updateProjectionMatrix(),L=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",F),s.addEventListener("inputsourceschange",Y),_.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,ve=null;_.depth&&(ve=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=_.stencil?Ui:Ci,ze=_.stencil?ws:ni);let ke={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(ke),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Nn(h.textureWidth,h.textureHeight,{format:si,type:Cn,depthTexture:new Li(h.textureWidth,h.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Nn(f.framebufferWidth,f.framebufferHeight,{format:si,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(K){for(let ye=0;ye<K.removed.length;ye++){let Ae=K.removed[ye],ze=T.indexOf(Ae);ze>=0&&(T[ze]=null,A[ze].disconnect(Ae))}for(let ye=0;ye<K.added.length;ye++){let Ae=K.added[ye],ze=T.indexOf(Ae);if(ze===-1){for(let ke=0;ke<A.length;ke++)if(ke>=T.length){T.push(Ae),ze=ke;break}else if(T[ke]===null){T[ke]=Ae,ze=ke;break}if(ze===-1)break}let ve=A[ze];ve&&ve.connect(Ae)}}function H(K,ye){ye===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ye.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ye=K.near,Ae=K.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),G.near=D.near=C.near=ye,G.far=D.far=C.far=Ae,(R!==G.near||O!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),R=G.near,O=G.far),G.layers.mask=K.layers.mask|6,C.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let ze=K.parent,ve=G.cameras;H(G,ze);for(let ke=0;ke<ve.length;ke++)H(ve[ke],ze);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),L===null&&K.isPerspectiveCamera&&(L={camera:K,fov:K.fov,zoom:K.zoom}),J(K,G,ze)};function J(K,ye,Ae){Ae===null?K.matrix.copy(ye.matrixWorld):(K.matrix.copy(Ae.matrixWorld),K.matrix.invert(),K.matrix.multiply(ye.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ye.projectionMatrix),K.projectionMatrixInverse.copy(ye.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=qo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(K){return g[K]};let te=null;function be(K,ye){if(u=ye.getViewerPose(c||a),p=ye,u!==null){let Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ze=!1;Ae.length!==G.cameras.length&&(G.cameras.length=0,ze=!0);for(let Ve=0;Ve<Ae.length;Ve++){let it=Ae[Ve],ot=null;if(f!==null)ot=f.getViewport(it);else{let ue=d.getViewSubImage(h,it);ot=ue.viewport,Ve===0&&(e.setRenderTargetTextures(v,ue.colorTexture,ue.depthStencilTexture),e.setRenderTarget(v))}let ie=z[Ve];ie===void 0&&(ie=new mn,ie.layers.enable(Ve),ie.viewport=new wt,z[Ve]=ie),ie.matrix.fromArray(it.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(it.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(ot.x,ot.y,ot.width,ot.height),Ve===0&&(G.matrix.copy(ie.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),ze===!0&&G.cameras.push(ie)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let Ve=d.getDepthInformation(Ae[0]);Ve&&Ve.isValid&&Ve.texture&&m.init(Ve,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ve=0;Ve<Ae.length;Ve++){let it=Ae[Ve].camera;if(it){let ot=g[it];ot||(ot=new aa,g[it]=ot);let ie=d.getCameraImage(it);ot.sourceTexture=ie}}}}for(let Ae=0;Ae<A.length;Ae++){let ze=T[Ae],ve=A[Ae];ze!==null&&ve!==void 0&&ve.update(ze,ye,c||a)}te&&te(K,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),p=null}let Oe=new rp;Oe.setAnimationLoop(be),this.setAnimationLoop=function(K){te=K},this.dispose=function(){}}},rv=new ct,mp=new Ze;mp.set(-1,0,0,0,1,0,0,0,1);function av(n,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,eu(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,_,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),y(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,_,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$t&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$t&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let _=e.get(g),S=_.envMap,v=_.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(rv.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(mp),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,_,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*_,m.scale.value=S*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,_){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$t&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){let _=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ov(n,e,t,i){let s={},r={};function a(_,S){let v=S.program;i.uniformBlockBinding(_,v,s[_.id])}function o(_,S){let v=s[_.id];v===void 0&&(p(_),v=l(_),s[_.id]=v,_.addEventListener("dispose",m));let A=S.program;i.updateUBOMapping(_,A);let T=e.render.frame;r[_.id]!==T&&(c(_),r[_.id]=T)}function l(_){let S=n.createBuffer(),v=_.__size,A=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,v,A),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(_){let S=s[_.id],v=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=v.length;T<x;T++){let b=v[T];if(Array.isArray(b))for(let L=0,C=b.length;L<C;L++)u(b[L],T,L,A);else u(b,T,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(_,S,v,A){if(h(_,S,v,A)===!0){let T=_.__offset,x=_.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let C=x[L],D=y(C,!0);d(C,_.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,_.__data)}}function d(_,S,v){typeof _=="number"||typeof _=="boolean"?S[v]=_:_.isMatrix3?(S[v]=_.elements[0],S[v+1]=_.elements[1],S[v+2]=_.elements[2],S[v+3]=0,S[v+4]=_.elements[3],S[v+5]=_.elements[4],S[v+6]=_.elements[5],S[v+7]=0,S[v+8]=_.elements[6],S[v+9]=_.elements[7],S[v+10]=_.elements[8],S[v+11]=0):ArrayBuffer.isView(_)?S.set(_.subarray(0,S.length-v),v):_.toArray(S,v)}function h(_,S,v,A){let T=_.value,x=S+"_"+v;if(Array.isArray(T)){A[x]===void 0&&(A[x]=[]);let b=A[x],L=!1;for(let C=0;C<T.length;C++)f(T[C],b,C)===!0&&(L=!0);return L}return f(T,A,x)}function f(_,S,v){if(S[v]===void 0)return typeof _=="number"||typeof _=="boolean"?S[v]=_:ArrayBuffer.isView(_)?S[v]=_.slice():S[v]=_.clone(),!0;{let A=S[v];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return S[v]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function p(_){let S=_.uniforms,v=0,A=16;for(let x=0,b=S.length;x<b;x++){let L=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,D=L.length;C<D;C++){let z=L[C],G=Array.isArray(z.value)?z.value:[z.value],R=Array.isArray(S[x])||Array.isArray(z.value),O=v;for(let F=0,Y=G.length;F<Y;F++){let H=G[F],J=y(H,R),te=v%A,be=te%J.boundary,Oe=te+be;v+=be,Oe!==0&&A-Oe<J.storage&&(v+=A-Oe),F===0&&(O=v),v+=J.storage}let U=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new U((v-O)/Float32Array.BYTES_PER_ELEMENT),z.__offset=O}}let T=v%A;return T>0&&(v+=A-T),_.__size=v,_.__cache={},this}function y(_,S){let v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=16,v.storage=48):_.isMatrix4?(v.boundary=16,v.storage=64):_.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):We("WebGLRenderer: Unsupported uniform value type.",_),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(_){let S=_.target;S.removeEventListener("dispose",m),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(let _ in s)n.deleteBuffer(s[_]);s={},r={}}return{bind:a,update:o,dispose:g}}var lv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),pi=null;function cv(){return pi===null&&(pi=new ia(lv,16,16,es,ii),pi.name="DFG_LUT",pi.minFilter=bn,pi.magFilter=bn,pi.wrapS=li,pi.wrapT=li,pi.generateMipmaps=!1,pi.needsUpdate=!0),pi}var lc=class{constructor(e={}){let{canvas:t=Sf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=f,m=new Set([Rl,Al,wl]),g=new Set([Cn,ni,yr,ws,bl,El]),_=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,T=null,x=[],b=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,z=null,G=null,R=null,O=null;this._outputColorSpace=Et;let U=0,F=0,Y=null,H=-1,J=null,te=new wt,be=new wt,Oe=null,K=new Pe(0),ye=0,Ae=t.width,ze=t.height,ve=1,ke=null,Rt=null,Ve=new wt(0,0,Ae,ze),it=new wt(0,0,Ae,ze),ot=!1,ie=new qi,ue=new Jo,le=!1,we=!1,_e=new ct,Ke=new I,Ue=new wt,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ht=!1;function gt(){return Y===null?ve:1}let k=i;function Vt(w,B){return t.getContext(w,B)}let at,St,me,Ft,He,Ye,P,E,W,re,ne,ce,ge,j,Q,de,N,ee,$,fe,oe,he,Fe;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",Me,!1),k===null){let B="webgl2";if(k=Vt(B,w),k===null)throw Vt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(w){throw t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Xe("WebGLRenderer: "+w.message),w}function et(){at=new v_(k),at.init(),oe=new nv(k,at),St=new c_(k,at,e,oe),me=new ev(k,at),St.reversedDepthBuffer&&h&&me.buffers.depth.setReversed(!0),G=k.createFramebuffer(),R=k.createFramebuffer(),O=k.createFramebuffer(),Ft=new b_(k),He=new ky,Ye=new tv(k,at,me,He,St,oe,Ft),P=new y_(C),E=new T0(k),he=new o_(k,E),W=new M_(k,E,Ft,he),re=new T_(k,W,E,he,Ft),ee=new E_(k,St,Ye),Q=new h_(He),ne=new zy(C,P,at,St,he,Q),ce=new av(C,He),ge=new Gy,j=new Zy(at),N=new a_(C,P,me,re,p,l),de=new Qy(C,re,St),Fe=new ov(k,Ft,St,me),$=new l_(k,at,Ft),fe=new S_(k,at,Ft),Ft.programs=ne.programs,C.capabilities=St,C.extensions=at,C.properties=He,C.renderLists=ge,C.shadowMap=de,C.state=me,C.info=Ft}y!==Cn&&(L=new A_(y,t.width,t.height,o,s,r));let ae=new _u(C,k);this.xr=ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let w=at.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=at.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(w){w!==void 0&&(ve=w,this.setSize(Ae,ze,!1))},this.getSize=function(w){return w.set(Ae,ze)},this.setSize=function(w,B,q=!0){if(ae.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=w,ze=B,t.width=Math.floor(w*ve),t.height=Math.floor(B*ve),q===!0&&(t.style.width=w+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,w,B)},this.getDrawingBufferSize=function(w){return w.set(Ae*ve,ze*ve).floor()},this.setDrawingBufferSize=function(w,B,q){Ae=w,ze=B,ve=q,t.width=Math.floor(w*q),t.height=Math.floor(B*q),this.setViewport(0,0,w,B)},this.setEffects=function(w){if(y===Cn){Xe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let B=0;B<w.length;B++)if(w[B].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(te)},this.getViewport=function(w){return w.copy(Ve)},this.setViewport=function(w,B,q,V){w.isVector4?Ve.set(w.x,w.y,w.z,w.w):Ve.set(w,B,q,V),me.viewport(te.copy(Ve).multiplyScalar(gt()).round())},this.getScissor=function(w){return w.copy(it)},this.setScissor=function(w,B,q,V){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,B,q,V),me.scissor(be.copy(it).multiplyScalar(gt()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(w){me.setScissorTest(ot=w)},this.setOpaqueSort=function(w){ke=w},this.setTransparentSort=function(w){Rt=w},this.getClearColor=function(w){return w.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(w=!0,B=!0,q=!0){let V=0;if(w){let X=!1;if(Y!==null){let xe=Y.texture.format;X=m.has(xe)}if(X){let xe=Y.texture.type,Ce=g.has(xe),pe=N.getClearColor(),Ee=N.getClearAlpha(),Ne=pe.r,$e=pe.g,ut=pe.b;Ce?(_[0]=Ne,_[1]=$e,_[2]=ut,_[3]=Ee,k.clearBufferuiv(k.COLOR,0,_)):(S[0]=Ne,S[1]=$e,S[2]=ut,S[3]=Ee,k.clearBufferiv(k.COLOR,0,S))}else V|=k.COLOR_BUFFER_BIT}B&&(V|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&k.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),z=w},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),N.dispose(),ge.dispose(),j.dispose(),Ye.dispose(),He.dispose(),P.dispose(),re.dispose(),W.dispose(),he.dispose(),Fe.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ku),ae.removeEventListener("sessionend",ju),os.stop()};function Be(w){w.preventDefault(),$r("WebGLRenderer: Context Lost."),D=!0}function Qe(){$r("WebGLRenderer: Context Restored."),D=!1;let w=Ft.autoReset,B=de.enabled,q=de.autoUpdate,V=de.needsUpdate,X=de.type;et(),Ft.autoReset=w,de.enabled=B,de.autoUpdate=q,de.needsUpdate=V,de.type=X}function Me(w){Xe("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Mt(w){let B=w.target;B.removeEventListener("dispose",Mt),en(B)}function en(w){zi(w),He.remove(w)}function zi(w){let B=He.get(w).programs;B!==void 0&&(B.forEach(function(q){ne.releaseProgram(q)}),w.isShaderMaterial&&ne.releaseShaderCache(w))}this.renderBufferDirect=function(w,B,q,V,X,xe){B===null&&(B=lt);let Ce=X.isMesh&&X.matrixWorld.determinantAffine()<0,pe=cm(w,B,q,V,X);me.setMaterial(V,Ce);let Ee=q.index,Ne=1;if(V.wireframe===!0){if(Ee=W.getWireframeAttribute(q),Ee===void 0)return;Ne=2}let $e=q.drawRange,ut=q.attributes.position,Ie=$e.start*Ne,dt=($e.start+$e.count)*Ne;xe!==null&&(Ie=Math.max(Ie,xe.start*Ne),dt=Math.min(dt,(xe.start+xe.count)*Ne)),Ee!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,Ee.count)):ut!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,ut.count));let Wt=dt-Ie;if(Wt<0||Wt===1/0)return;he.setup(X,V,pe,q,Ee);let Tt,bt=$;if(Ee!==null&&(Tt=E.get(Ee),bt=fe,bt.setIndex(Tt)),X.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*gt()),bt.setMode(k.LINES)):bt.setMode(k.TRIANGLES);else if(X.isLine){let un=V.linewidth;un===void 0&&(un=1),me.setLineWidth(un*gt()),X.isLineSegments?bt.setMode(k.LINES):X.isLineLoop?bt.setMode(k.LINE_LOOP):bt.setMode(k.LINE_STRIP)}else X.isPoints?bt.setMode(k.POINTS):X.isSprite&&bt.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(at.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let un=X._multiDrawStarts,Le=X._multiDrawCounts,Mn=X._multiDrawCount,xt=Ee?E.get(Ee).bytesPerElement:1,ls=He.get(V).currentProgram.getUniforms();for(let dn=0;dn<Mn;dn++)ls.setValue(k,"_gl_DrawID",dn),bt.render(un[dn]/xt,Le[dn])}else if(X.isInstancedMesh)bt.renderInstances(Ie,Wt,X.count);else if(q.isInstancedBufferGeometry){let un=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Le=Math.min(q.instanceCount,un);bt.renderInstances(Ie,Wt,Le)}else bt.render(Ie,Wt)};function Ju(w,B,q,V){z!==null&&w.isNodeMaterial&&z.setObject(V,w),le===!0&&Q.setState(w,q,!1),w.transparent===!0&&w.side===Tn&&w.forceSinglePass===!1?(w.side=$t,w.needsUpdate=!0,Lr(w,B,V),w.side=di,w.needsUpdate=!0,Lr(w,B,V),w.side=Tn):Lr(w,B,V)}this.compile=function(w,B,q=null){q===null&&(q=w),z!==null&&z.renderStart(w,B,q),T=j.get(q),T.init(B),b.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),w!==q&&w.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),we=this.localClippingEnabled,le=Q.init(this.clippingPlanes,we),le===!0&&Q.setGlobalState(this.clippingPlanes,B),z!==null&&de.render(T.state.shadowsArray,q,B);let V=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let xe=X.material;if(xe)if(Array.isArray(xe))for(let Ce=0;Ce<xe.length;Ce++){let pe=xe[Ce];Ju(pe,q,B,X),V.add(pe)}else Ju(xe,q,B,X),V.add(xe)}),T=b.pop(),z!==null&&z.renderEnd(),V},this.compileAsync=function(w,B,q=null){let V=this.compile(w,B,q);return new Promise(X=>{function xe(){if(V.forEach(function(Ce){let Ee=He.get(Ce).currentProgram;(Ee===void 0||Ee.isReady())&&V.delete(Ce)}),V.size===0){X(w);return}setTimeout(xe,10)}at.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Wc=null;function om(w){Wc&&Wc(w)}function Ku(){os.stop()}function ju(){os.start()}let os=new rp;os.setAnimationLoop(om),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(w){Wc=w,ae.setAnimationLoop(w),w===null?os.stop():os.start()},ae.addEventListener("sessionstart",Ku),ae.addEventListener("sessionend",ju),this.render=function(w,B){if(B!==void 0&&B.isCamera!==!0){Xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(w,B);let q=ae.enabled===!0&&ae.isPresenting===!0,V=L!==null&&(Y===null||q)&&L.begin(C,Y);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,B,Y),T=j.get(w,b.length),T.init(B),T.state.textureUnits=Ye.getTextureUnits(),b.push(T),_e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?ue.setFromArrayCamera(B):ie.setFromProjectionMatrix(_e,Gn,B.reversedDepth),we=this.localClippingEnabled,le=Q.init(this.clippingPlanes,we),A=ge.get(w,x.length),A.init(),x.push(A),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){let Ce=C.xr.getDepthSensingMesh();Ce!==null&&Xc(Ce,B,-1/0,C.sortObjects)}Xc(w,B,0,C.sortObjects),A.finish(),z!==null&&z.updateLights(T.state.lightsArray),C.sortObjects===!0&&A.sort(ke,Rt),ht=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ht&&N.addToRenderList(A,w),this.info.autoReset===!0&&this.info.reset(),le===!0&&Q.beginShadows();let X=T.state.shadowsArray;if(de.render(X,w,B),le===!0&&Q.endShadows(),(V&&L.hasRenderPass())===!1){let Ce=A.opaque,pe=A.transmissive;if(T.setupLights(),B.isArrayCamera){let Ee=B.cameras;if(pe.length>0)for(let Ne=0,$e=Ee.length;Ne<$e;Ne++){let ut=Ee[Ne];ed(Ce,pe,w,ut)}ht&&N.render(w);for(let Ne=0,$e=Ee.length;Ne<$e;Ne++){let ut=Ee[Ne];Qu(A,w,ut,ut.viewport)}}else pe.length>0&&ed(Ce,pe,w,B),ht&&N.render(w),Qu(A,w,B)}Y!==null&&F===0&&(Ye.updateMultisampleRenderTarget(Y),Ye.updateRenderTargetMipmap(Y)),V&&L.end(C),w.isScene===!0&&w.onAfterRender(C,w,B),he.resetDefaultState(),H=-1,J=null,b.pop(),b.length>0?(T=b[b.length-1],Ye.setTextureUnits(T.state.textureUnits),le===!0&&Q.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,z!==null&&z.renderEnd()};function Xc(w,B,q,V){if(w.visible===!1)return;if(w.layers.test(B.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(B);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){let Ce=B.isArrayCamera?ue:ie;if(!w.frustumCulled||w.intersectsFrustum(Ce)){V&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);let pe=re.update(w),Ee=w.material;Ee.visible&&A.push(w,pe,Ee,q,Ue.z,null,B)}}else if(w.isMesh||w.isLine||w.isPoints){let Ce=B.isArrayCamera?ue:ie;if(!w.frustumCulled||w.intersectsFrustum(Ce)){let pe=re.update(w),Ee=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ue.copy(pe.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Ee)){let Ne=pe.groups;for(let $e=0,ut=Ne.length;$e<ut;$e++){let Ie=Ne[$e],dt=Ee[Ie.materialIndex];dt&&dt.visible&&A.push(w,pe,dt,q,Ue.z,Ie,B)}}else Ee.visible&&A.push(w,pe,Ee,q,Ue.z,null,B)}}}let xe=w.children;for(let Ce=0,pe=xe.length;Ce<pe;Ce++)Xc(xe[Ce],B,q,V)}function Qu(w,B,q,V){let{opaque:X,transmissive:xe,transparent:Ce}=w;T.setupLightsView(q),le===!0&&Q.setGlobalState(C.clippingPlanes,q),V&&me.viewport(te.copy(V)),X.length>0&&so(X,B,q),xe.length>0&&so(xe,B,q),Ce.length>0&&so(Ce,B,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function ed(w,B,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Ie=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Nn(1,1,{generateMipmaps:!0,type:Ie?ii:Cn,minFilter:Ni,samples:Math.max(4,St.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}let xe=T.state.transmissionRenderTarget[V.id],Ce=V.viewport||te;xe.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Ee=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(xe),C.getClearColor(K),ye=C.getClearAlpha(),ye<1&&C.setClearColor(16777215,.5),C.clear(),ht&&N.render(q);let $e=C.toneMapping;C.toneMapping=fi;let ut=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),le===!0&&Q.setGlobalState(C.clippingPlanes,V),so(w,q,V),Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,Wt=B.length;dt<Wt;dt++){let Tt=B[dt],{object:bt,geometry:un,material:Le,group:Mn}=Tt;if(Le.side===Tn&&bt.layers.test(V.layers)){let xt=Le.side;Le.side=$t,Le.needsUpdate=!0,td(bt,q,V,un,Le,Mn),Le.side=xt,Le.needsUpdate=!0,Ie=!0}}Ie===!0&&(Ye.updateMultisampleRenderTarget(xe),Ye.updateRenderTargetMipmap(xe))}C.setRenderTarget(pe,Ee,Ne),C.setClearColor(K,ye),ut!==void 0&&(V.viewport=ut),C.toneMapping=$e}function so(w,B,q){let V=B.isScene===!0?B.overrideMaterial:null;for(let X=0,xe=w.length;X<xe;X++){let Ce=w[X],{object:pe,geometry:Ee,group:Ne}=Ce,$e=Ce.material;$e.allowOverride===!0&&V!==null&&($e=V),pe.layers.test(q.layers)&&td(pe,B,q,Ee,$e,Ne)}}function td(w,B,q,V,X,xe){z!==null&&X.isNodeMaterial&&z.setObject(w,X),w.onBeforeRender(C,B,q,V,X,xe),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(C,B,q,V,w,xe),X.transparent===!0&&X.side===Tn&&X.forceSinglePass===!1?(X.side=$t,X.needsUpdate=!0,C.renderBufferDirect(q,B,V,X,w,xe),X.side=di,X.needsUpdate=!0,C.renderBufferDirect(q,B,V,X,w,xe),X.side=Tn):C.renderBufferDirect(q,B,V,X,w,xe),w.onAfterRender(C,B,q,V,X,xe)}function nd(w){let B=0;for(let q of w)q.texture!==null&&B++;return B}function Lr(w,B,q){B.isScene!==!0&&(B=lt);let V=He.get(w),X=T.state.lights,xe=T.state.shadowsArray,Ce=X.state.version,pe=ne.getParameters(w,X.state,xe,B,q,T.state.lightProbeGridArray),Ee=ne.getProgramCacheKey(pe),Ne=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,V.fog=B.fog;let $e=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=P.get(w.envMap||V.environment,$e),V.envMapRotation=V.environment!==null&&w.envMap===null?B.environmentRotation:w.envMapRotation,Ne===void 0&&(w.addEventListener("dispose",Mt),Ne=new Map,V.programs=Ne,V.programVariants=new Map);let ut=Ne.get(Ee);if(ut!==void 0){if(V.currentProgram===ut&&V.lightsStateVersion===Ce)return sd(w,pe),ut}else pe.uniforms=ne.getUniforms(w),z!==null&&w.isNodeMaterial&&z.build(w,q,pe),w.onBeforeCompile(pe,C),ut=ne.acquireProgram(pe,Ee),Ne.set(Ee,ut),V.uniforms=pe.uniforms;let Ie=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=Q.uniform),sd(w,pe),V.needsLights=um(w),V.lightsStateVersion=Ce,V.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.sunLights.value=X.state.sun,Ie.sunLightShadows.value=X.state.sunShadow,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.sunShadowMatrix.value=X.state.sunShadowMatrix,Ie.sunShadowCascade.value=X.state.sunShadowCascade,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=nd(T.state.lightProbeGridArray),V.currentProgram=ut,V.uniformsList=null,ut}function lm(w,B,q,V,X){let xe=He.get(w),Ce=xe.currentProgram.id+","+V+","+X,pe=xe.programVariants.get(Ce);return pe===void 0?(pe=Lr(w,B,q),xe.programVariants.set(Ce,pe)):(xe.currentProgram=pe,xe.uniformsList=null,xe.outputColorSpace=V,xe.toneMapping=X),pe}function id(w){if(w.uniformsList===null){let B=w.currentProgram.getUniforms();w.uniformsList=vr.seqWithValue(B.seq,w.uniforms)}return w.uniformsList}function sd(w,B){let q=He.get(w);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function cm(w,B,q,V,X){B.isScene!==!0&&(B=lt),Ye.resetTextureUnits();let xe=B.fog,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?B.environment:null,pe=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ft.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ne=P.get(V.envMap||Ce,Ee),$e=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ut=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!q.morphAttributes.position,dt=!!q.morphAttributes.normal,Wt=!!q.morphAttributes.color,Tt=fi;V.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Tt=C.toneMapping);let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,un=bt!==void 0?bt.length:0,Le=He.get(V),Mn=T.state.lights;if(le===!0&&(we===!0||w!==J)){let Dt=w===J&&V.id===H;Q.setState(V,w,Dt)}let xt=!1,ls=!1;V.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==Mn.state.version||X.isBatchedMesh&&Le.batching===!1||!X.isBatchedMesh&&Le.batching===!0||X.isBatchedMesh&&Le.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Le.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Le.instancing===!1||!X.isInstancedMesh&&Le.instancing===!0||X.isSkinnedMesh&&Le.skinning===!1||!X.isSkinnedMesh&&Le.skinning===!0||X.isInstancedMesh&&Le.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Le.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Le.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Le.instancingMorph===!1&&X.morphTexture!==null||Le.envMap!==Ne||V.fog===!0&&Le.fog!==xe||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Q.numPlanes||Le.numIntersection!==Q.numIntersection)||Le.vertexAlphas!==$e||Le.vertexTangents!==ut||Le.morphTargets!==Ie||Le.morphNormals!==dt||Le.morphColors!==Wt||Le.morphTargetsCount!==un||Le.numLightProbeGrids!==nd(T.state.lightProbeGridArray)?xt=!0:(Le.outputColorSpace!==pe||Le.toneMapping!==Tt)&&(ls=!0):(xt=!0,Le.__version=V.version);let dn=Le.currentProgram;(xt===!0||ls===!0)&&(dn=ls===!0?lm(V,B,X,pe,Tt):Lr(V,B,X),z&&V.isNodeMaterial&&z.onUpdateProgram(V,dn,Le));let ro=!1,ki=!1,cs=!1,pt=dn.getUniforms(),on=Le.uniforms;if(me.useProgram(dn.program)&&(ro=!0,ki=!0,cs=!0),V.id!==H&&(H=V.id,ki=!0),ro||J!==w){me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),pt.setValue(k,"projectionMatrix",w.projectionMatrix),pt.setValue(k,"viewMatrix",w.matrixWorldInverse);let tn=pt.map.cameraPosition;tn!==void 0&&tn.setValue(k,Ke.setFromMatrixPosition(w.matrixWorld)),St.logarithmicDepthBuffer&&pt.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pt.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),J!==w&&(J=w,ki=!0,cs=!0)}if(Le.needsLights&&(Mn.state.sunShadowMap.length>0&&pt.setValue(k,"sunShadowMap",Mn.state.sunShadowMap,Ye),Mn.state.directionalShadowMap.length>0&&pt.setValue(k,"directionalShadowMap",Mn.state.directionalShadowMap,Ye),Mn.state.spotShadowMap.length>0&&pt.setValue(k,"spotShadowMap",Mn.state.spotShadowMap,Ye),Mn.state.pointShadowMap.length>0&&pt.setValue(k,"pointShadowMap",Mn.state.pointShadowMap,Ye)),X.isSkinnedMesh){pt.setOptional(k,X,"bindMatrix"),pt.setOptional(k,X,"bindMatrixInverse");let Dt=X.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),pt.setValue(k,"boneTexture",Dt.boneTexture,Ye))}X.isBatchedMesh&&(pt.setOptional(k,X,"batchingTexture"),pt.setValue(k,"batchingTexture",X._matricesTexture,Ye),pt.setOptional(k,X,"batchingIdTexture"),pt.setValue(k,"batchingIdTexture",X._indirectTexture,Ye),pt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(k,"batchingColorTexture",X._colorsTexture,Ye));let $n=q.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&ee.update(X,q,dn),(ki||Le.receiveShadow!==X.receiveShadow)&&(Le.receiveShadow=X.receiveShadow,pt.setValue(k,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&B.environment!==null&&(on.envMapIntensity.value=B.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=cv()),ki){if(pt.setValue(k,"toneMappingExposure",C.toneMappingExposure),Le.needsLights&&hm(on,cs),xe&&V.fog===!0&&ce.refreshFogUniforms(on,xe),ce.refreshMaterialUniforms(on,V,ve,ze,T.state.transmissionRenderTarget[w.id]),Le.needsLights&&Le.numLightProbeGrids>0){let Dt=v,tn=0;for(let Mi of T.state.lightProbeGridArray)Mi.texture!==null&&(Dt.textures[tn]=Mi.texture,Dt.min[tn]=Mi.boundingBox.min,Dt.max[tn]=Mi.boundingBox.max,Dt.resolution[tn]=Mi.resolution,tn++);for(let Mi in Dt)Dt[Mi].length=tn;on.probesSH.value=Dt.textures,on.probesMin.value=Dt.min,on.probesMax.value=Dt.max,on.probesResolution.value=Dt.resolution}vr.upload(k,id(Le),on,Ye)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(vr.upload(k,id(Le),on,Ye),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pt.setValue(k,"center",X.center),pt.setValue(k,"modelViewMatrix",X.modelViewMatrix),pt.setValue(k,"normalMatrix",X.normalMatrix),pt.setValue(k,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Dt=V.uniformsGroups;for(let tn=0,Mi=Dt.length;tn<Mi;tn++){let ad=Dt[tn];Fe.update(ad,dn),Fe.bind(ad,dn)}}return dn}function hm(w,B){w.ambientLightColor.needsUpdate=B,w.lightProbe.needsUpdate=B,w.sunLights.needsUpdate=B,w.sunLightShadows.needsUpdate=B,w.directionalLights.needsUpdate=B,w.directionalLightShadows.needsUpdate=B,w.pointLights.needsUpdate=B,w.pointLightShadows.needsUpdate=B,w.spotLights.needsUpdate=B,w.spotLightShadows.needsUpdate=B,w.rectAreaLights.needsUpdate=B,w.hemisphereLights.needsUpdate=B}function um(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,B,q){let V=He.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),He.get(w.texture).__webglTexture=B,He.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,B){let q=He.get(w);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(w,B=0,q=0){Y=w,U=B,F=q;let V=null,X=!1,xe=!1;if(w){let pe=He.get(w);if(pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(k.FRAMEBUFFER,pe.__webglFramebuffer),te.copy(w.viewport),be.copy(w.scissor),Oe=w.scissorTest,me.viewport(te),me.scissor(be),me.setScissorTest(Oe),H=-1;return}else if(pe.__webglFramebuffer===void 0)Ye.setupRenderTarget(w);else if(pe.__hasExternalTextures)Ye.rebindTextures(w,He.get(w.texture).__webglTexture,He.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let $e=w.depthTexture;if(pe.__boundDepthTexture!==$e){if($e!==null&&He.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(w)}}let Ee=w.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(xe=!0);let Ne=He.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ne[B])?V=Ne[B][q]:V=Ne[B],X=!0):w.samples>0&&Ye.useMultisampledRTT(w)===!1?V=He.get(w).__webglMultisampledFramebuffer:Array.isArray(Ne)?V=Ne[q]:V=Ne,te.copy(w.viewport),be.copy(w.scissor),Oe=w.scissorTest}else te.copy(Ve).multiplyScalar(ve).floor(),be.copy(it).multiplyScalar(ve).floor(),Oe=ot;if(q!==0&&(V=G),me.bindFramebuffer(k.FRAMEBUFFER,V)&&me.drawBuffers(w,V),me.viewport(te),me.scissor(be),me.setScissorTest(Oe),X){let pe=He.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,q)}else if(xe){let pe=B;for(let Ee=0;Ee<w.textures.length;Ee++){let Ne=He.get(w.textures[Ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ee,Ne.__webglTexture,q,pe)}}else if(w!==null&&q!==0){let pe=He.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pe.__webglTexture,q)}H=-1};function rd(w){let B=He.get(w);return(B.__readFormat!==w.format||B.__readType!==w.type)&&(B.__readFormat=w.format,B.__readType=w.type,B.__formatReadable=St.textureFormatReadable(w.format),B.__typeReadable=St.textureTypeReadable(w.type)),B}this.readRenderTargetPixels=function(w,B,q,V,X,xe,Ce,pe=0){if(!(w&&w.isWebGLRenderTarget)){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee){me.bindFramebuffer(k.FRAMEBUFFER,Ee);try{let Ne=w.textures[pe],$e=Ne.format,ut=Ne.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Ie=rd(Ne);if(Ie.__formatReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){Xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=w.width-V&&q>=0&&q<=w.height-X&&k.readPixels(B,q,V,X,oe.convert($e),oe.convert(ut),xe)}finally{let Ne=Y!==null?He.get(Y).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(w,B,q,V,X,xe,Ce,pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=He.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ee=Ee[Ce],Array.isArray(Ee)&&(Ee=Ee[0])),Ee)if(B>=0&&B<=w.width-V&&q>=0&&q<=w.height-X){me.bindFramebuffer(k.FRAMEBUFFER,Ee);let Ne=w.textures[pe],$e=Ne.format,ut=Ne.type;w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+pe);let Ie=rd(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let dt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(B,q,V,X,oe.convert($e),oe.convert(ut),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Wt=Y!==null?He.get(Y).__webglFramebuffer:null;me.bindFramebuffer(k.FRAMEBUFFER,Wt);let Tt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Ef(k,Tt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,dt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(dt),k.deleteSync(Tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,B=null,q=0){let V=Math.pow(2,-q),X=Math.floor(w.image.width*V),xe=Math.floor(w.image.height*V),Ce=B!==null?B.x:0,pe=B!==null?B.y:0;Ye.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ce,pe,X,xe),me.unbindTexture()},this.copyTextureToTexture=function(w,B,q=null,V=null,X=0,xe=0){let Ce,pe,Ee,Ne,$e,ut,Ie,dt,Wt,Tt=w.isCompressedTexture?w.mipmaps[xe]:w.image;if(q!==null)Ce=q.max.x-q.min.x,pe=q.max.y-q.min.y,Ee=q.isBox3?q.max.z-q.min.z:1,Ne=q.min.x,$e=q.min.y,ut=q.isBox3?q.min.z:0;else{let pt=Math.pow(2,-X);Ce=Math.floor(Tt.width*pt),pe=Math.floor(Tt.height*pt),w.isDataArrayTexture?Ee=Tt.depth:w.isData3DTexture?Ee=Math.floor(Tt.depth*pt):Ee=1,Ne=0,$e=0,ut=0}V!==null?(Ie=V.x,dt=V.y,Wt=V.z):(Ie=0,dt=0,Wt=0);let bt=oe.convert(B.format),un=oe.convert(B.type),Le;B.isData3DTexture?(Ye.setTexture3D(B,0),Le=k.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ye.setTexture2DArray(B,0),Le=k.TEXTURE_2D_ARRAY):(Ye.setTexture2D(B,0),Le=k.TEXTURE_2D),me.activeTexture(k.TEXTURE0),me.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),me.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),me.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);let Mn=me.getParameter(k.UNPACK_ROW_LENGTH),xt=me.getParameter(k.UNPACK_IMAGE_HEIGHT),ls=me.getParameter(k.UNPACK_SKIP_PIXELS),dn=me.getParameter(k.UNPACK_SKIP_ROWS),ro=me.getParameter(k.UNPACK_SKIP_IMAGES);me.pixelStorei(k.UNPACK_ROW_LENGTH,Tt.width),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tt.height),me.pixelStorei(k.UNPACK_SKIP_PIXELS,Ne),me.pixelStorei(k.UNPACK_SKIP_ROWS,$e),me.pixelStorei(k.UNPACK_SKIP_IMAGES,ut);let ki=w.isDataArrayTexture||w.isData3DTexture,cs=B.isDataArrayTexture||B.isData3DTexture;if(w.isDepthTexture){let pt=He.get(w),on=He.get(B),$n=He.get(pt.__renderTarget),Dt=He.get(on.__renderTarget);me.bindFramebuffer(k.READ_FRAMEBUFFER,$n.__webglFramebuffer),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let tn=0;tn<Ee;tn++)ki&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(w).__webglTexture,X,ut+tn),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.get(B).__webglTexture,xe,Wt+tn)),k.blitFramebuffer(Ne,$e,Ne+Ce,$e+pe,Ie,dt,Ie+Ce,dt+pe,k.DEPTH_BUFFER_BIT,k.NEAREST);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||He.has(w)){let pt=He.get(w),on=He.get(B);me.bindFramebuffer(k.READ_FRAMEBUFFER,R),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,O);for(let $n=0;$n<Ee;$n++)ki?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pt.__webglTexture,X,ut+$n):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pt.__webglTexture,X),cs?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,xe,Wt+$n):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,xe),X!==0?k.blitFramebuffer(Ne,$e,Ne+Ce,$e+pe,Ie,dt,Ie+Ce,dt+pe,k.COLOR_BUFFER_BIT,k.NEAREST):cs?k.copyTexSubImage3D(Le,xe,Ie,dt,Wt+$n,Ne,$e,Ce,pe):k.copyTexSubImage2D(Le,xe,Ie,dt,Ne,$e,Ce,pe);me.bindFramebuffer(k.READ_FRAMEBUFFER,null),me.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else cs?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(Le,xe,Ie,dt,Wt,Ce,pe,Ee,bt,un,Tt.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,xe,Ie,dt,Wt,Ce,pe,Ee,bt,Tt.data):k.texSubImage3D(Le,xe,Ie,dt,Wt,Ce,pe,Ee,bt,un,Tt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,Ie,dt,Ce,pe,bt,un,Tt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,Ie,dt,Tt.width,Tt.height,bt,Tt.data):k.texSubImage2D(k.TEXTURE_2D,xe,Ie,dt,Ce,pe,bt,un,Tt);me.pixelStorei(k.UNPACK_ROW_LENGTH,Mn),me.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),me.pixelStorei(k.UNPACK_SKIP_PIXELS,ls),me.pixelStorei(k.UNPACK_SKIP_ROWS,dn),me.pixelStorei(k.UNPACK_SKIP_IMAGES,ro),xe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&k.generateMipmap(Le),me.unbindTexture()},this.initRenderTarget=function(w){He.get(w).__webglFramebuffer===void 0&&Ye.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ye.setTextureCube(w,0):w.isData3DTexture?Ye.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ye.setTexture2DArray(w,0):Ye.setTexture2D(w,0),me.unbindTexture()},this.resetState=function(){U=0,F=0,Y=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}};function uc(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new yt;l.morphTargetsRelative=o;let c=0;for(let u=0;u<n.length;++u){let d=n[u],h=0,f=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,d=[];for(let h=0;h<n.length;++h){let f=n[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=n[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=gp(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let y=0;y<a[u].length;++y)f.push(a[u][y][h]);let p=gp(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function gp(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new It(a,t,i),l=0;for(let c=0;c<n.length;++c){let u=n[c];if(u.isInterleavedBufferAttribute){let d=l/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){let y=u.getComponent(h,p);o.setComponent(h+d,p,y)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}var is={raptor:{name:"F-22 Raptor",blurb:"Stealthy all-rounder with thrust vectoring.",len:18.9,span:6.78,twinTail:!0,twinEngine:!0,canard:!1,hp:110,agility:1.08,speed:1.12,missiles:8,gun:1.1,style:"raptor"},viper:{name:"F-35 Lightning II",blurb:"Light and twitchy single-engine stealth jet.",len:15.7,span:5.35,twinTail:!0,twinEngine:!1,canard:!1,hp:90,agility:1.22,speed:1,missiles:6,gun:1,style:"viper"},striker:{name:"Su-57 Felon",blurb:"Heavy hitter. Tough, loads of missiles.",len:20.1,span:7,twinTail:!0,twinEngine:!0,canard:!1,hp:150,agility:.9,speed:1,missiles:12,gun:1.25,style:"striker"}},Ga={gray:["#9ea5ad","#737b84","Stealth gray","blob"],desert:["#b38f62","#7a5c3b","Desert camo","camo"],black:["#2b2e33","#1c1e21","Night ops","two"],navy:["#4a6687","#30455f","Navy blue","two"],red:["#3a3d42","#8f2a2f","Aggressor","splinter"]},yu={};function Sp(n){if(yu[n])return yu[n];let[e,t,,i]=Ga[n],s=1024,r=document.createElement("canvas");r.width=r.height=s;let a=r.getContext("2d"),o=n.length*977+13,l=()=>(o=o*16807%2147483647)/2147483647;if(a.fillStyle=e,a.fillRect(0,0,s,s),i==="camo")for(let u=0;u<40;u++){a.fillStyle=u%3?t:"#9a7b50",a.beginPath();let d=l()*s,h=l()*s;a.moveTo(d,h);for(let f=0;f<9;f++)a.quadraticCurveTo(d+(l()-.5)*260,h+(l()-.5)*260,d+(l()-.5)*220,h+(l()-.5)*220);a.closePath(),a.fill()}if(i==="splinter")for(let u=0;u<34;u++){a.fillStyle=u%2?t:"#24262a",a.beginPath();let d=l()*s,h=l()*s;a.moveTo(d,h),a.lineTo(d+(l()-.3)*300,h+(l()-.5)*120),a.lineTo(d+(l()-.5)*200,h+(l()-.2)*260),a.closePath(),a.fill()}if(i==="blob"){a.filter="blur(10px)";for(let u=0;u<26;u++){a.fillStyle=t,a.globalAlpha=.55+l()*.3,a.beginPath();let d=l()*s,h=l()*s,f=50+l()*120;for(let p=0;p<=10;p++){let y=p/10*Math.PI*2,m=f*(.6+l()*.6);a.lineTo(d+Math.cos(y)*m*1.4,h+Math.sin(y)*m)}a.closePath(),a.fill()}a.filter="none",a.globalAlpha=1}if(i==="two"){let u=a.createLinearGradient(0,0,0,s);u.addColorStop(0,t),u.addColorStop(.5,e),u.addColorStop(1,t),a.globalAlpha=.55,a.fillStyle=u,a.fillRect(0,0,s,s),a.globalAlpha=1}for(let u=0;u<2200;u++)a.fillStyle=`rgba(${l()<.5?"255,255,255":"0,0,0"},${.015+l()*.03})`,a.fillRect(l()*s,l()*s,2+l()*14,1+l()*3);a.strokeStyle="rgba(0,0,0,.28)",a.lineWidth=2;for(let u=0;u<=8;u++)a.beginPath(),a.moveTo(0,u*s/8+u%2*9),a.lineTo(s,u*s/8+u%2*9),a.stroke();for(let u=0;u<8;u++)for(let d=0;d<6;d++){if(l()<.25)continue;let h=(d+u%2*.5)*s/6;a.beginPath(),a.moveTo(h,u*s/8),a.lineTo(h,(u+1)*s/8),a.stroke()}for(let u=0;u<14;u++){let d=l()*s,h=l()*s,f=40+l()*90,p=30+l()*60;a.strokeStyle="rgba(0,0,0,.22)",a.strokeRect(d,h,f,p)}a.fillStyle="rgba(0,0,0,.25)";for(let u=0;u<900;u++)a.fillRect(Math.floor(l()*6)*s/6+(l()<.5?-4:4),l()*s,1.5,1.5);let c=new kt(r);return c.wrapS=c.wrapT=ei,c.colorSpace=Et,c.anisotropy=4,yu[n]=c}var vu=null;function hv(){if(vu)return vu;let n=1024,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=4242,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle="#808080",t.fillRect(0,0,n,n),t.strokeStyle="#3c3c3c",t.lineWidth=2.5;for(let a=0;a<=8;a++)t.beginPath(),t.moveTo(0,a*n/8+a%2*9),t.lineTo(n,a*n/8+a%2*9),t.stroke();for(let a=0;a<8;a++)for(let o=0;o<6;o++){if(s()<.2)continue;let l=(o+a%2*.5)*n/6;t.beginPath(),t.moveTo(l,a*n/8),t.lineTo(l,(a+1)*n/8),t.stroke()}t.lineWidth=2;for(let a=0;a<22;a++){let o=s()*n,l=s()*n,c=30+s()*110,u=24+s()*70;t.strokeStyle="#4a4a4a",t.strokeRect(o,l,c,u),t.fillStyle="#5a5a5a";for(let d=0;d<c;d+=9)t.fillRect(o+d,l-4,2,2),t.fillRect(o+d,l+u+3,2,2)}t.fillStyle="#5c5c5c";for(let a=0;a<8;a++)for(let o=0;o<n;o+=10)t.fillRect(o,a*n/8+6+a%2*9,2,2);let r=new kt(e);return r.wrapS=r.wrapT=ei,r.anisotropy=4,vu=r}function bp(n,e){return Au(is[n]?n:"viper",Ga[e]?e:"gray",!1).A.cock}var Mu={};function uv(n){let e=n?"e":"p";if(Mu[e])return Mu[e];let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(64,64),n){i.fillStyle="#c0262e",i.beginPath();for(let r=0;r<3;r++){let a=r*2.094-1.57;i.moveTo(0,0),i.lineTo(Math.cos(a-.35)*58,Math.sin(a-.35)*58),i.lineTo(Math.cos(a+.35)*58,Math.sin(a+.35)*58)}i.fill(),i.fillStyle="#16171a",i.beginPath(),i.arc(0,0,18,0,7),i.fill()}else i.strokeStyle="rgba(70,76,84,.8)",i.lineWidth=6,i.beginPath(),i.arc(0,0,50,0,7),i.stroke(),i.fillStyle="rgba(70,76,84,.75)",i.font="900 46px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("JK",0,3),i.fillRect(-62,-5,10,10),i.fillRect(52,-5,10,10);let s=new kt(t);return s.colorSpace=Et,Mu[e]=s}function xp(n,e,t=28,i=!0){let s=[],r=[],a=[],o=n.length;n.forEach(([c,u,d,h,f])=>{let p=-e/2+c*e;for(let y=0;y<=t;y++){let m=y/t*Math.PI*2,g=Math.cos(m),_=Math.sin(m),S=2/f;s.push(Math.sign(g)*Math.pow(Math.abs(g),S)*u,h+Math.sign(_)*Math.pow(Math.abs(_),S)*d,p),r.push(y/t*3,c*e/8)}});for(let c=0;c<o-1;c++)for(let u=0;u<t;u++){let d=c*(t+1)+u,h=d+t+1;a.push(d,d+1,h,h,d+1,h+1)}if(i){let c=s.length/3,u=n[o-1];s.push(0,u[3],-e/2+u[0]*e),r.push(.5,.5);let d=(o-1)*(t+1);for(let h=0;h<t;h++)a.push(d+h,d+h+1,c)}let l=new yt;return l.setAttribute("position",new qe(s,3)),l.setAttribute("uv",new qe(r,2)),l.setIndex(a),l.computeVertexNormals(),l}function _p(n,e,t=.05){let i=new ys;i.moveTo(n[0][0],-n[0][1]),n.slice(1).forEach(([r,a])=>i.lineTo(r,-a)),i.closePath();let s=new dr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:6});return s.translate(0,0,-e/2),s.rotateX(-Math.PI/2),Ep(s,1/8),s}function dv(n,e,t=.05){let i=new ys;i.moveTo(n[0][0],n[0][1]),n.slice(1).forEach(([r,a])=>i.lineTo(r,a)),i.closePath();let s=new dr(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:3});return s.translate(0,0,-e/2),s.rotateY(-Math.PI/2),Ep(s,1/8),s}function Ep(n,e){let t=n.attributes.uv;for(let i=0;i<t.count;i++)t.setXY(i,t.getX(i)*e,t.getY(i)*e)}var yp=new ct,fv=new Ot,pv=new ln,mv=new I,gv=new I;function jt(n,e=0,t=0,i=0,s=0,r=0,a=0,o=1,l=1,c=1){return yp.compose(mv.set(e,t,i),fv.setFromEuler(pv.set(s,r,a)),gv.set(o,l,c)),n.clone().applyMatrix4(yp)}function xv(n){let e=n.index?n.toNonIndexed():n;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new qe(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.clearGroups(),e}function wu(n){return n.length?uc(n.map(xv),!1):null}function Bn(n,e,t){let i=n.length;if(e<=n[0][0])return n[0][t];if(e>=n[i-1][0])return n[i-1][t];let s=0;for(;e>n[s+1][0];)s++;let r=d=>(n[d+1][t]-n[d][t])/(n[d+1][0]-n[d][0]),a=d=>{if(d===0)return r(0);if(d===i-1)return r(i-2);let h=r(d-1),f=r(d);return h*f<=0?0:2/(1/h+1/f)},o=n[s+1][0]-n[s][0],l=(e-n[s][0])/o,c=l*l,u=c*l;return(2*u-3*c+1)*n[s][t]+(u-2*c+l)*o*a(s)+(-2*u+3*c)*n[s+1][t]+(u-c)*o*a(s+1)}function _v(n,e,{rings:t=64,seg:i=40,x:s=0,t0:r=n[0][0],t1:a=n[n.length-1][0],bias:o=1.2}={}){let l=[],c=[];for(let d=0;d<=t;d++){let h=r+(a-r)*Math.pow(d/t,o),f=Bn(n,h,1),p=Bn(n,h,2),y=Bn(n,h,3),m=Bn(n,h,4),g=Bn(n,h,5),_=Bn(n,h,6),S=-e/2+h*e;for(let v=0;v<=i;v++){let A=v/i*Math.PI*2,T=Math.cos(A),x=Math.sin(A),b=x>=0,L=2/(b?g:_);l.push(s+Math.sign(T)*Math.pow(Math.abs(T),L)*f,m+Math.sign(x)*Math.pow(Math.abs(x),L)*(b?p:y),S),c.push(v/i*3,S/8)}}let u=[];for(let d=0;d<t;d++)for(let h=0;h<i;h++){let f=d*(i+1)+h,p=f+i+1;u.push(f,f+1,p,p,f+1,p+1)}return Tp(l,c,u)}function yv(n,e){let t=[],i=[],s=n.length;for(let r=0;r<s;r++){let a=n[r],o=n[(r+s-1)%s],l=n[(r+1)%s];e[r]?(t.push(a),i.push(!0)):(t.push([.75*a[0]+.25*o[0],.75*a[1]+.25*o[1]],[.75*a[0]+.25*l[0],.75*a[1]+.25*l[1]]),i.push(!1,!1))}return[t,i]}function dc(n,e,{rings:t=70,iters:i=2,sharp:s=[],mirror:r=!0,bias:a=1.15}={}){let o=n[0][1].length,l=[];for(let C=0;C<o;C++)l.push(n.map(([D,z])=>[D,z[C][0],z[C][1]]));let c=C=>r?[...C,...C.slice(1,-1).reverse().map(([D,z])=>[-D,z])]:C,u=r?[...Array(o).keys()].map(C=>s.includes(C)).concat([...Array(o-2).keys()].map(C=>s.includes(o-2-C))):[...Array(o).keys()].map(C=>s.includes(C)),d=[],h=[],f=[],p=[],y=[],m=[],g=n[0][0],_=n[n.length-1][0];for(let C=0;C<=t;C++){let D=g+(_-g)*Math.pow(C/t,a),z=-e/2+D*e,G=c(l.map(H=>[Bn(H,D,1),Bn(H,D,2)])),R=u;for(let H=0;H<i;H++)[G,R]=yv(G,R);let O=G.length,U=[],F=[],Y=0;for(let H=0;H<=O;H++){let J=G[H%O];H&&(Y+=Math.hypot(J[0]-G[H-1][0],J[1]-G[(H-1)%O][1]));let te=()=>(d.push(J[0],J[1],z),h.push(Y/8,z/8),d.length/3-1),be=te(),Oe=R[H%O]&&H>0&&H<O?te():be;U.push(be),F.push(Oe)}R[0]||m.push([F[0],U[O]]),p.push(U),y.push(F)}for(let C=0;C<t;C++)for(let D=0;D<p[C].length-1;D++){let z=y[C][D],G=p[C][D+1],R=y[C+1][D],O=p[C+1][D+1];f.push(z,G,R,R,G,O)}let S=new yt;S.setAttribute("position",new qe(d,3)),S.setAttribute("uv",new qe(h,2)),S.setIndex(f),S.computeVertexNormals();let v=y[t>>1],A=S.attributes.position,T=S.attributes.normal,x=0,b=0;v.forEach(C=>{x+=A.getX(C),b+=A.getY(C)}),x/=v.length,b/=v.length;let L=v[Math.floor(v.length/4)];if((A.getX(L)-x)*T.getX(L)+(A.getY(L)-b)*T.getY(L)<0){let C=S.index.array;for(let D=0;D<C.length;D+=3){let z=C[D+1];C[D+1]=C[D+2],C[D+2]=z}S.computeVertexNormals()}return m.forEach(([C,D])=>{if(C===D)return;let z=T.getX(C)+T.getX(D),G=T.getY(C)+T.getY(D),R=T.getZ(C)+T.getZ(D),O=Math.hypot(z,G,R)||1;T.setXYZ(C,z/O,G/O,R/O),T.setXYZ(D,z/O,G/O,R/O)}),S}function za(n,e,t=.9){let i=0,s=0;n.forEach(([l,c])=>{i+=l,s+=c}),i/=n.length,s/=n.length;let r=[i,s,e],a=[];n.forEach(([l,c])=>r.push(i+(l-i)*t,s+(c-s)*t,e));for(let l=0;l<n.length;l++)a.push(0,1+l,1+(l+1)%n.length);let o=new yt;if(o.setAttribute("position",new qe(r,3)),o.setAttribute("uv",new qe(new Array(r.length/3*2).fill(0),2)),o.setIndex(a),o.computeVertexNormals(),o.attributes.normal.getZ(0)>0){let l=o.index.array;for(let c=0;c<l.length;c+=3){let u=l[c+1];l[c+1]=l[c+2],l[c+2]=u}o.computeVertexNormals()}return o}var ka=(n,e,t,i,s)=>[[n+t-s,e+i],[n+t,e+i-s],[n+t,e-i+s],[n+t-s,e-i],[n-t+s,e-i],[n-t,e-i+s],[n-t,e+i-s],[n-t+s,e+i]];function Er(n,{nC:e=14,sub:t=1}={}){let i=[];for(let c=0;c<n.length-1;c++)for(let u=0;u<t;u++){let d=u/t;i.push(n[c].map((h,f)=>h*(1-d)+n[c+1][f]*d))}i.push(n[n.length-1]);let s=[],r=[],a=[],o=2*e,l=c=>5*(.2969*Math.sqrt(c)-.126*c-.3516*c*c+.2843*c**3-.1036*c**4);i.forEach(([c,u,d,h,f])=>{let p=h-d;for(let y=0;y<o;y++){let m=y<=e,g=m?y:o-y,_=(1-Math.cos(Math.PI*g/e))/2,S=Math.max(l(_)*f*p,.004);s.push(c,u+(m?S:-S),d+_*p),r.push(c/8,(d+_*p)/8)}});for(let c=0;c<i.length-1;c++)for(let u=0;u<o;u++){let d=c*o+u,h=c*o+(u+1)%o,f=d+o,p=h+o;a.push(d,f,h,h,f,p)}return[0,i.length-1].forEach(c=>{let u=s.length/3,d=0,h=0,f=0;for(let p=0;p<o;p++)d+=s[(c*o+p)*3],h+=s[(c*o+p)*3+1],f+=s[(c*o+p)*3+2];s.push(d/o,h/o,f/o),r.push(0,0);for(let p=0;p<o;p++)a.push(c*o+p,c*o+(p+1)%o,u)}),Tp(s,r,a)}function Tp(n,e,t){let i=new yt;return i.setAttribute("position",new qe(n,3)),i.setAttribute("uv",new qe(e,2)),i.setIndex(t),vv(i)}function vv(n){let e=n.attributes.position,t=n.index.array,i=new I,s=new I,r=new I,a=0;for(let o=0;o<t.length;o+=3)i.fromBufferAttribute(e,t[o]),s.fromBufferAttribute(e,t[o+1]),r.fromBufferAttribute(e,t[o+2]),a+=i.dot(s.cross(r));if(a<0)for(let o=0;o<t.length;o+=3){let l=t[o+1];t[o+1]=t[o+2],t[o+2]=l}return n.computeVertexNormals(),n}function Mv(n){let e=n.clone();e.scale(-1,1,1);let t=e.index.array;for(let i=0;i<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}return e.computeVertexNormals(),e}var ns=(n,e)=>{e.push(n,Mv(n))};function vp(n,e,t,i,s){let r=Er(n,s);return r.rotateZ(Math.PI/2-e),r.translate(t,i,0),r}function Mp(n,e){let[t,i]=[n[0],n[n.length-1]],s=t[0]+(i[0]-t[0])*e,r=0;for(;r<n.length-2&&s>n[r+1][0];)r++;let a=(s-n[r][0])/(n[r+1][0]-n[r][0]),o=n[r].map((l,c)=>l*(1-a)+n[r+1][c]*a);return{x:s,y:o[1],le:o[2],te:o[3],tr:o[4],c:o[3]-o[2]}}var Sv={raptor:{L0:18.9,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.14,.06],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.36],[.18,.33],[.36,.17],[.48,0],[.38,-.14],[.22,-.25],[.08,-.28],[0,-.29]]],[.18,[[0,.55],[.27,.5],[.52,.26],[.66,.02],[.55,-.2],[.36,-.36],[.12,-.41],[0,-.41]]],[.27,[[0,.64],[.32,.6],[.6,.34],[.76,.05],[.68,-.2],[.5,-.4],[.16,-.46],[0,-.46]]],[.36,[[0,.66],[.42,.64],[.86,.42],[1.2,.08],[1.12,-.14],[.95,-.4],[.3,-.48],[0,-.48]]],[.45,[[0,.6],[.56,.67],[1.08,.44],[1.66,.04],[1.52,-.14],[1.2,-.42],[.4,-.5],[0,-.5]]],[.58,[[0,.52],[.62,.66],[1.16,.44],[1.76,.03],[1.6,-.14],[1.25,-.42],[.4,-.48],[0,-.48]]],[.72,[[0,.46],[.6,.6],[1.1,.4],[1.6,.02],[1.48,-.13],[1.18,-.38],[.4,-.44],[0,-.44]]],[.85,[[0,.36],[.6,.52],[1,.34],[1.3,0],[1.22,-.12],[1,-.32],[.4,-.38],[0,-.38]]],[.95,[[0,.26],[.56,.42],[.92,.28],[1.08,0],[1.02,-.1],[.9,-.26],[.4,-.32],[0,-.32]]],[1,[[0,.24],[.55,.38],[.88,.26],[1,0],[.95,-.1],[.85,-.24],[.4,-.3],[0,-.3]]]],intake:[[.25,[[.6,.32],[1.2,.06],[1.1,-.48],[.58,-.5]]],[.32,[[.62,.34],[1.27,.08],[1.15,-.5],[.58,-.52]]],[.42,[[.7,.38],[1.4,.1],[1.24,-.5],[.6,-.52]]],[.52,[[.82,.42],[1.5,.07],[1.3,-.46],[.7,-.5]]]],W:[[1.5,.03,n=>n(.405),n=>n(.79),.035],[6.78,-.22,n=>n(.66),n=>n(.752),.03]],HS:[[1,0,n=>n(.8),n=>n(1),.035],[4.4,-.04,n=>n(.955),n=>n(1.02),.03]],VT:{x:1.25,y:.26,cant:.49,secs:[[0,0,n=>n(.615),n=>n(.865),.04],[2.65,0,n=>n(.755),n=>n(.84),.035]]},ex:[-.55,.55],ey:0,nr:.38,nozzle:"2d",canopy:[.09,.35],cw:1.2,ch:1.05,frame:!1,pyl:[.78,.56,.34,.14]},viper:{L0:15.7,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.15,.05],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.38],[.2,.34],[.38,.18],[.5,0],[.4,-.15],[.24,-.27],[.08,-.3],[0,-.31]]],[.19,[[0,.6],[.28,.55],[.55,.3],[.7,.02],[.6,-.22],[.4,-.4],[.14,-.46],[0,-.46]]],[.28,[[0,.74],[.36,.68],[.68,.4],[.86,.05],[.78,-.24],[.58,-.46],[.18,-.52],[0,-.52]]],[.38,[[0,.82],[.45,.76],[.9,.46],[1.3,.08],[1.22,-.2],[1,-.48],[.3,-.56],[0,-.56]]],[.5,[[0,.84],[.55,.78],[1.05,.48],[1.5,.06],[1.4,-.18],[1.1,-.48],[.35,-.58],[0,-.58]]],[.64,[[0,.78],[.55,.74],[1,.46],[1.45,.04],[1.35,-.16],[1.05,-.44],[.35,-.54],[0,-.54]]],[.78,[[0,.68],[.5,.64],[.88,.4],[1.2,.02],[1.12,-.14],[.9,-.38],[.35,-.48],[0,-.48]]],[.9,[[0,.58],[.42,.54],[.72,.34],[.92,0],[.86,-.12],[.72,-.32],[.3,-.42],[0,-.42]]],[.97,[[0,.52],[.38,.48],[.62,.3],[.74,0],[.7,-.12],[.6,-.28],[.3,-.38],[0,-.4]]],[1,[[0,.5],[.35,.46],[.58,.28],[.68,0],[.65,-.12],[.56,-.26],[.28,-.36],[0,-.38]]]],intake:[[.26,[[.58,.42],[1.1,.2],[1.02,-.4],[.55,-.42]]],[.33,[[.6,.44],[1.16,.2],[1.06,-.42],[.55,-.44]]],[.43,[[.7,.46],[1.3,.18],[1.16,-.42],[.6,-.44]]],[.52,[[.82,.5],[1.4,.12],[1.22,-.42],[.7,-.46]]]],W:[[1.4,.04,n=>n(.47),n=>n(.83),.04],[5.35,-.1,n=>n(.64),n=>n(.73),.035]],HS:[[.7,.02,n=>n(.84),n=>n(1.03),.035],[3.45,0,n=>n(.99),n=>n(1.045),.03]],VT:{x:.9,y:.46,cant:.44,secs:[[0,0,n=>n(.65),n=>n(.865),.045],[2.15,0,n=>n(.79),n=>n(.86),.04]]},ex:[0],ey:.05,nr:.52,nozzle:"round",canopy:[.1,.34],cw:1.05,ch:1,frame:!0,pyl:[.8,.55,.3]},striker:{L0:20.1,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.03,[[0,.12],[.06,.1],[.12,.04],[.16,0],[.12,-.05],[.06,-.1],[.02,-.11],[0,-.11]]],[.09,[[0,.36],[.18,.32],[.34,.16],[.44,0],[.36,-.14],[.2,-.25],[.07,-.28],[0,-.29]]],[.18,[[0,.58],[.26,.52],[.5,.28],[.64,.02],[.54,-.18],[.36,-.34],[.12,-.4],[0,-.4]]],[.28,[[0,.64],[.3,.6],[.62,.34],[1,.06],[.86,-.12],[.5,-.3],[.15,-.36],[0,-.36]]],[.38,[[0,.6],[.4,.57],[1.1,.3],[1.95,.05],[1.75,-.08],[1,-.2],[.3,-.28],[0,-.28]]],[.5,[[0,.52],[.5,.5],[1.3,.27],[2.2,.04],[2,-.06],[1.2,-.15],[.3,-.21],[0,-.21]]],[.65,[[0,.46],[.5,.45],[1.3,.25],[2.05,.03],[1.85,-.05],[1.1,-.13],[.3,-.19],[0,-.19]]],[.8,[[0,.36],[.42,.34],[1,.2],[1.45,.02],[1.32,-.04],[.9,-.11],[.25,-.15],[0,-.15]]],[.92,[[0,.24],[.25,.22],[.45,.12],[.56,0],[.5,-.06],[.4,-.1],[.15,-.12],[0,-.12]]],[1.06,[[0,.06],[.05,.05],[.1,.02],[.12,0],[.1,-.02],[.06,-.04],[.02,-.05],[0,-.05]]]],nacelle:[[.3,.46,.3,.04],[.42,.47,.34,.1],[.62,.47,.42,.24],[.85,.46,.45,.28],[1,.44,.44,.27]],nx:1.12,ny:-.4,W:[[1.9,.05,n=>n(.47),n=>n(.8),.035],[7,-.05,n=>n(.745),n=>n(.81),.03]],HS:[[1.55,-.12,n=>n(.82),n=>n(.995),.035],[4,-.14,n=>n(.95),n=>n(1),.03]],VT:{x:1.4,y:.14,cant:.45,secs:[[0,0,n=>n(.7),n=>n(.9),.04],[2.1,0,n=>n(.82),n=>n(.905),.035]]},ex:[-1.12,1.12],ey:-.4,nr:.42,nozzle:"round",canopy:[.1,.31],cw:1,ch:.95,frame:!0,irst:!0,pyl:[.84,.64,.44,.24]}};function bv(n){let e=n.len,t={paint:[],dark:[],metal:[],glass:[],light:[],decal:[],pilot:[],sill:[],helm:[]},i=n.style,s=Sv[i],r=R=>-e/2+R*e,a=e/s.L0,o=e/15,l=R=>R.map(([O,U])=>[O,U.map(([F,Y])=>[F*a,Y*a])]),c=l(s.body),u=c.map(([R,O])=>[R,O[0][1]]),d=c.map(([R,O])=>[R,O[O.length-1][1]]),h=R=>Bn(u,R,1),f=R=>Bn(d,R,1);t.paint.push(dc(c,e,{rings:80,iters:2,sharp:[3]}));{let[R,O]=c[c.length-1];t.dark.push(za([...O,...O.slice(1,-1).reverse().map(([U,F])=>[-U,F])],r(R)-.03,.99))}if(s.intake){let R=l(s.intake),O=dc(R,e,{rings:16,iters:1,mirror:!1,sharp:[0,1,2,3],bias:1});ns(O,t.paint),ns(za(R[0][1],r(R[0][0])+.08,.94),t.dark),ns(za([[R[0][1][0][0]-.05,R[0][1][0][1]],[R[0][1][0][0],R[0][1][0][1]],[R[0][1][3][0],R[0][1][3][1]],[R[0][1][3][0]-.05,R[0][1][3][1]]],r(R[0][0])+.25,1),t.dark)}if(s.nacelle){let R=s.nx*a,O=s.ny*a,U=s.nacelle.map(([Y,H,J,te])=>[Y,ka(R,O,H*a,J*a,te*a)]),F=dc(U,e,{rings:44,iters:2,mirror:!1,sharp:[],bias:1});ns(F,t.paint),ns(za(ka(R,O,s.nacelle[0][1]*a,s.nacelle[0][2]*a,s.nacelle[0][3]*a),r(s.nacelle[0][0])+.05,.92),t.dark)}s.irst&&t.glass.push(jt(new Yt(.13*a,14,10),.2*a,h(.1)+.03,r(.1)));let[p,y]=s.canopy,m=[[p,.02,.02],[p+.03,.17,.16],[p+.08,.3,.34],[(p+y)/2+.02,.35,.42],[y-.07,.3,.32],[y-.02,.16,.14],[y,.04,.03]].map(([R,O,U])=>[R,O*o*s.cw,U*o*s.ch,h(R)-.08*o,2]);t.glass.push(_v(m.map(([R,O,U,F])=>[R,O,U,U*.3,F,2.1,2]),e,{rings:40,seg:36,bias:1}));let g=R=>h(R)-.07*o,_=R=>Bn(m,R,1);[-1,1].forEach(R=>{let O=[];for(let U=0;U<=14;U++){let F=p+.03+(y-p-.06)*U/14;O.push(new I(R*_(F)*.97,g(F)+.02*o,r(F)))}t.sill.push(new pr(new _s(O),24,.035*o,6))}),t.dark.push(jt(new Yi(.15*o,.2*o,4,10),0,h(p+.2)+.02*o,r(p+.2),0,0,0,1,1,.45)),t.helm.push(jt(new Yt(.165*o,14,8,Math.PI*.25,Math.PI*.5,Math.PI*.3,Math.PI*.32),0,h(p+.14)+.14*o,r(p+.14),0,Math.PI,0));{let R=p+.15,O=[];for(let U=p+.02;U<=y-.02;U+=.01)O.push(h(U));t.cock={eyeY:h(R)+.13*o,eyeZ:r(R),z0:r(p+.025),z1:r(y-.025),w:Math.max(...m.map(U=>U[1]))*.9,y0:Math.min(...O)-.8*o,y1:Math.max(...O)+.2*o,k:o}}if(s.frame){let R=p+.2;t.dark.push(jt(new Fn(1,.045,6,28,Math.PI),0,h(R)-.08*o,r(R),.25,0,0,_(R)*1.02,Bn(m,R,2)*1.02,.3*o))}t.pilot.push(jt(new Yt(.16*o,12,10),0,h(p+.14)+.14*o,r(p+.14)));let S=s.W.map(([R,O,U,F,Y])=>[R*a,O*a,U(r),F(r),Y]),v=s.HS.map(([R,O,U,F,Y])=>[R*a,O*a,U(r),F(r),Y]);ns(Er(S,{nC:16,sub:3}),t.paint),ns(Er(v,{nC:12,sub:2}),t.paint);{let R=s.VT,O=vp(R.secs.map(([U,F,Y,H,J])=>[U*a,F,Y(r),H(r),J]),R.cant,0,0,{nC:14,sub:2});O.translate(R.x*a,R.y*a,0),ns(O,t.paint)}let A=S[S.length-1];[-1,1].forEach(R=>{t.light.push(jt(new Yt(.05*o,8,6),R*(A[0]-.05),A[1]+.03,A[3]-.15));let O=[];for(let F=.04;F<=.97;F+=.93/12){let Y=Mp(S,F);O.push(new I(R*Y.x,Y.y+.25*Y.tr*Y.c+.004,Y.te-Y.c*.2))}t.dark.push(new pr(new _s(O),16,.007,3));let U=Mp(S,.62);t.decal.push(jt(new Ht(1*o,1*o),R*U.x,U.y+.4*U.tr*U.c+.01,(U.le+U.te)/2+.1*U.c,-Math.PI/2,0,0))});let T=s.ex.map(R=>R*a),x=s.ey*a,b=s.nr*a,L=r(1);T.forEach(R=>{if(s.nozzle==="2d"){t.metal.push(dc([[.955,ka(R,x,.46*a,.3*a,.08*a)],[1,ka(R,x,.42*a,.25*a,.06*a)]],e,{rings:4,iters:1,mirror:!1,bias:1})),[1,-1].forEach(F=>t.metal.push(Er([[R-.4*a,x+F*.23*a,r(.998),r(1.045),.05],[R+.4*a,x+F*.2*a,r(.998),r(1.035),.05]],{nC:6}))),t.dark.push(za(ka(R,x,.4*a,.22*a,.05*a),r(1)-.05,1));return}let O=new fr([[b*.98,0],[b*1.02,.2],[b*.97,.7*o],[b*.86,1.15*o],[b*.82,1.22*o],[b*.74,1.18*o],[b*.76,.3]].map(([F,Y])=>new se(F,Y)),40),U=O.attributes.position;for(let F=0;F<U.count;F++){if(U.getY(F)<.6*o)continue;let Y=Math.atan2(U.getZ(F),U.getX(F)),H=1+.045*Math.max(0,Math.cos(Y*14));U.setX(F,U.getX(F)*H),U.setZ(F,U.getZ(F)*H)}O.computeVertexNormals(),t.metal.push(jt(O,R,x,L-.4*o,Math.PI/2)),t.dark.push(jt(new Zi(b*.74,28),R,x,L+.05*o)),t.dark.push(jt(new Fn(b*.5,b*.06,6,24),R,x,L))});let C=(R,O,U,F,Y=!1)=>{let H=vp([[0,0,r(U),r(U)+.35*o,.1],[F,0,r(U)+.14*o,r(U)+.32*o,.1]],0,0,0,{nC:6});Y&&H.rotateZ(Math.PI),t.dark.push(H.translate(R,O,0))};C(0,h(.52)-.02,.52,.18*o),C(0,f(.3)+.02,.3,.18*o,!0),t.light.push(jt(new mt(.03*o,.02*o,.45*o),0,h(.62)+.004,r(.62))),[-1,1].forEach(R=>t.light.push(jt(new mt(.02*o,.02*o,.5*o),R*c[4][1][2][0]*.9,Bn(c.map(([O,U])=>[O,U[2][1]]),.27,1)+.01,r(.27),0,R*.3,0)));let D=[],z=(f(.5)+.2*o)*.5;for(let R=0;R<6;R++)D.push([(.28+.19*R)*o,z,r(.47+R%2*.05)]);for(;D.length<6;)D.push(D[D.length-1]);let G=t.cock;return delete t.cock,{P:t,ex:T,ey:x,nr:b,tailZ:L,sp:A[0]-S[0][0],rx:S[0][0],wy:S[0][1],L:e,k:o,cock:G,pylons:D}}var Su={},wp=new $i(.5,6,16,1,!0).rotateX(Math.PI/2).translate(0,0,3),Ap=new $i(.3,3.4,12,1,!0).rotateX(Math.PI/2).translate(0,0,1.7),fc=null;function Ha(){if(fc)return fc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),fc=new kt(n),fc}function Au(n,e,t){let i=n+"|"+e+"|"+(t?1:0);if(Su[i])return Su[i];let s=is[n],r=bv(s),a={paint:new Di({map:Sp(t?"red":e),bumpMap:hv(),bumpScale:1.2,roughness:.46,metalness:.32,clearcoat:.3,clearcoatRoughness:.45,envMapIntensity:.9}),dark:new tt({color:"#25282d",roughness:.55,metalness:.45}),metal:new tt({color:"#6f7379",roughness:.32,metalness:.9,envMapIntensity:1.2}),glass:new Di({color:t?"#4a3418":"#7d6a3e",roughness:.03,metalness:.55,envMapIntensity:2.4,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.78}),light:new Bt({color:"#fff7e0"}),decal:new tt({map:uv(t),transparent:!0,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),pilot:new tt({color:"#e6e6e0",roughness:.4})};a.sill=a.dark,a.helm=a.dark;let o={};for(let c in r.P){let u=wu(r.P[c]);u&&(u.computeBoundingSphere(),o[c]=u)}let l=r.pylons;return Su[i]={J:s,A:r,mats:a,geos:o,pylons:l}}function Cs(n="viper",e="gray",t=!1){is[n]||(n="viper"),Ga[e]||(e="gray");let i=Au(n,e,t),{J:s,A:r}=i,a=new Pt,o=new Pt;a.add(o);for(let m in i.geos){let g=new Ge(i.geos[m],i.mats[m]);g.name=m,g.castShadow=m==="paint"||m==="dark"||m==="metal",g.receiveShadow=m==="paint",o.add(g)}let l=[];for(let m=0;m<Math.ceil(s.missiles/2);m++){let g=i.pylons[m%i.pylons.length];[-1,1].forEach(_=>{let S=pc();S.position.set(_*g[0],g[1],g[2]+(m>=i.pylons.length?1.2:0)),S.castShadow=!0,o.add(S),l.push(S)})}let c=(m,g)=>new Bt({color:m,transparent:!0,opacity:g,blending:Gt,depthWrite:!1}),u=t?i.fm||(i.fm=c("#ffa04a",.55)):c("#ffa04a",.6),d=t?i.cm||(i.cm=c("#a9e2ff",.8)):c("#a9e2ff",.85),h=t?i.gm||(i.gm=new Vn({map:Ha(),color:"#ffb066",opacity:.7,blending:Gt,depthWrite:!1})):new Vn({map:Ha(),color:"#ffb066",opacity:.8,blending:Gt,depthWrite:!1}),f=[],p=[];r.ex.forEach(m=>{let g=new Ge(wp,u),_=new Ge(Ap,d),S=new ui(h),v=r.nr/.5;g.scale.setScalar(v),_.scale.setScalar(v),g.position.set(m,r.ey,r.tailZ+.9*r.k),_.position.copy(g.position),S.position.set(m,r.ey,r.tailZ+.7*r.k),S.scale.setScalar(r.nr*4.5),o.add(g,_,S),f.push(g,_),p.push(S)});let y=new ui(i.sm||(i.sm=new Vn({map:Ha(),color:"#ffffff",blending:Gt,depthWrite:!1})));return y.scale.setScalar(2.4),y.position.set(0,-.5*r.k,-r.L*.05),o.add(y),a.userData={def:s,body:o,flames:f,glows:p,msls:l,strobe:y,len:r.L,flameMat:u,coreMat:d,glowMat:h},a}var bu=null,Eu=null;function Ev(){if(bu)return bu;let n=[[0,-1.66],[.085,-1.66],[.11,-1.6],[.11,1.15],[.1,1.32],[.075,1.5],[.04,1.62],[0,1.68]].map(([t,i])=>new se(t,i)),e=[new fr(n,16).rotateX(-Math.PI/2)];for(let t=0;t<4;t++){let i=t*Math.PI/2+Math.PI/4;e.push(Er([[.1,0,1.18,1.62,.06],[.32,0,1.42,1.62,.06]],{nC:5}).rotateZ(i),Er([[.1,0,-1,-.72,.06],[.24,0,-.9,-.76,.06]],{nC:5}).rotateZ(i))}return bu=wu(e)}function Tv(){if(Eu)return Eu;let n=document.createElement("canvas");n.width=64,n.height=8;let e=n.getContext("2d");e.fillStyle="#ececec",e.fillRect(0,0,64,8),e.fillStyle="#d9b43a",e.fillRect(10,0,3,8),e.fillStyle="#5b5e63",e.fillRect(0,0,6,8);let t=new kt(n);return t.colorSpace=Et,Eu=new tt({map:t,roughness:.4,metalness:.2})}function pc(){return new Ge(Ev(),Tv())}function Rp(){Object.keys(is).forEach(n=>Au(n,"red",!0))}var Tu={};function Va(n=!1){let e=n?"boss":"bomber";if(!Tu[e]){let d=n?58:44,h=d/44,f={paint:[],dark:[],metal:[],glass:[],light:[]},p=S=>-d/2+S*d;f.paint.push(xp([[0,.05,.05,0,2],[.03,1.2,1.3,.1,2],[.08,2.1,2.3,.3,2.1],[.16,2.5,2.7,.3,2.2],[.6,2.5,2.6,.3,2.2],[.85,1.8,2,.8,2.1],[1,.5,.6,1.6,2]].map(([S,v,A,T,x])=>[S,v*h,A*h,T*h,x]),d,28)),f.glass.push(xp([[.03,.3,.3,.9,2],[.06,1.3,.8,1.4,2.2],[.1,1.4,.7,1.7,2.2],[.13,.4,.2,1.9,2]].map(([S,v,A,T,x])=>[S,v*h,A*h,T*h,x]),d,18));let y=(n?31:24)*h;[-1,1].forEach(S=>{let v=_p([[S*2*h,p(.33)],[S*y,p(.45)],[S*y,p(.5)],[S*2*h,p(.52)]],.5*h,.15*h);v.translate(0,2.2*h,0),f.paint.push(v),[.35,.7].forEach(T=>{let x=S*y*T,b=p(.38+T*.1);f.paint.push(jt(new qt(.85*h,.7*h,6*h,14),x,1.1*h,b,Math.PI/2)),f.dark.push(jt(new Zi(.8*h,14),x,1.1*h,b-3*h-.02,0,Math.PI,0)),f.metal.push(jt(new qt(.6*h,.55*h,1*h,12,1,!0),x,1.1*h,b+3.3*h,Math.PI/2))});let A=_p([[S*.3*h,p(.88)],[S*8*h,p(.95)],[S*8*h,p(.98)],[S*.3*h,p(1)]],.25*h,.1*h);A.translate(0,7.2*h,0),f.paint.push(A),f.light.push(jt(new Yt(.25*h,6,5),S*y,2.2*h,p(.5)))}),f.paint.push(jt(dv([[0,0],[4*h,6.5*h],[6.5*h,6.5*h],[6.8*h,0]],.35*h,.12*h),0,1.4*h,p(.83))),[[0,2.9,.3],[0,-2.4,.55],[0,1.6,.98]].forEach(([S,v,A])=>{f.dark.push(jt(new Yt(.7*h,12,8,0,Math.PI*2,0,Math.PI/2),S,v*h,p(A),v<0?Math.PI:0)),f.metal.push(jt(new qt(.08*h,.08*h,2*h,6),S+.3*h,v*h+(v<0?-.4:.4)*h,p(A)-1*h,Math.PI/2))});let m={paint:new tt({map:Sp("red"),roughness:.55,metalness:.3}),dark:new tt({color:"#25282d",roughness:.55,metalness:.45}),metal:new tt({color:"#6f7379",roughness:.32,metalness:.9}),glass:new Di({color:"#3a2a12",roughness:.05,metalness:.8,transparent:!0,opacity:.85}),light:new Bt({color:"#ff3a3a"})},g={};for(let S in f){let v=wu(f[S]);v&&(g[S]=v)}let _=[];[-1,1].forEach(S=>[.35,.7].forEach(v=>_.push([S*y*v,1.1*h,p(.38+v*.1)+3.6*h]))),Tu[e]={geos:g,mats:m,L:d,k:h,engines:_}}let t=Tu[e],i=new Pt,s=new Pt;i.add(s);for(let d in t.geos){let h=new Ge(t.geos[d],t.mats[d]);h.castShadow=d!=="light"&&d!=="glass",s.add(h)}let r=t.fm||(t.fm=new Bt({color:"#ffa04a",transparent:!0,opacity:.5,blending:Gt,depthWrite:!1})),a=t.cm||(t.cm=new Bt({color:"#a9e2ff",transparent:!0,opacity:.7,blending:Gt,depthWrite:!1})),o=t.gm||(t.gm=new Vn({map:Ha(),color:"#ffb066",opacity:.7,blending:Gt,depthWrite:!1})),l=[],c=[];t.engines.forEach(([d,h,f])=>{let p=new Ge(wp,r),y=new Ge(Ap,a),m=new ui(o),g=1.2*t.k;p.scale.setScalar(g),y.scale.setScalar(g),p.position.set(d,h,f),y.position.set(d,h,f),m.position.set(d,h,f-.3),m.scale.setScalar(4*t.k),s.add(p,y,m),l.push(p,y),c.push(m)});let u=new ui(t.sm||(t.sm=new Vn({map:Ha(),color:"#ff4040",blending:Gt,depthWrite:!1})));return u.scale.setScalar(5),u.position.set(0,9*t.k,-t.L*.5+.9*t.L),s.add(u),i.userData={def:{len:t.L,span:24},body:s,flames:l,glows:c,msls:[],strobe:u,len:t.L,guns:[[0,2.9*t.k,-t.L/2+.3*t.L],[0,-2.4*t.k,-t.L/2+.55*t.L],[0,1.6*t.k,-t.L/2+.98*t.L]]},i}function Ru(n,e,t){let i=document.createElement("canvas");i.width=n,i.height=e,t(i.getContext("2d"),n,e);let s=new kt(i);return s.colorSpace=Et,s.anisotropy=8,s}function wv(){return Ru(1024,384,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#2f3338"),i.addColorStop(1,"#202327"),n.fillStyle=i,n.fillRect(0,0,e,t);for(let a=0;a<2500;a++)n.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},.035)`,n.fillRect(Math.random()*e,Math.random()*t,2,2);[[e*.22],[e*.78]].forEach(([a])=>{n.fillStyle="#16181b",n.fillRect(a-170,40,340,270),n.strokeStyle="#4a4f56",n.lineWidth=3,n.strokeRect(a-170,40,340,270),n.fillStyle="#3a3e44";for(let o=0;o<5;o++)n.fillRect(a-130+o*58,20,34,14),n.fillRect(a-130+o*58,316,34,14),n.fillRect(a-192,70+o*48,14,30),n.fillRect(a+178,70+o*48,14,30);n.fillStyle="#aab",n.font="10px monospace",["RDR","TGP","SMS","FCR","HSD"].forEach((o,l)=>n.fillText(o,a-130+l*58+4,15))});let s=e/2;[[s-62,92],[s+62,92],[s-62,214],[s+62,214]].forEach(([a,o],l)=>{n.fillStyle="#0d0e10",n.beginPath(),n.arc(a,o,48,0,7),n.fill(),n.strokeStyle="#5a5f66",n.lineWidth=4,n.stroke(),n.strokeStyle="#d8d8d0",n.lineWidth=2;for(let c=0;c<24;c++){let u=c%3?40:34,d=c/24*Math.PI*2;n.beginPath(),n.moveTo(a+Math.cos(d)*u,o+Math.sin(d)*u),n.lineTo(a+Math.cos(d)*44,o+Math.sin(d)*44),n.stroke()}l===0?(n.fillStyle="#3d6fb0",n.beginPath(),n.arc(a,o,30,Math.PI,0),n.fill(),n.fillStyle="#7a5a36",n.beginPath(),n.arc(a,o,30,0,Math.PI),n.fill(),n.strokeStyle="#ffcc33",n.beginPath(),n.moveTo(a-20,o),n.lineTo(a+20,o),n.stroke()):(n.strokeStyle="#ff8a3d",n.lineWidth=3,n.beginPath(),n.moveTo(a,o),n.lineTo(a+Math.cos(l*1.7)*32,o+Math.sin(l*1.7)*32),n.stroke())}),["MASTER CAUTION","FUEL","HYD","ENG","OXY","GEAR","TF FAIL","ECM"].forEach((a,o)=>{let l=s-105+o%4*53,c=300+Math.floor(o/4)*30;n.fillStyle=o===0?"#5a3a10":"#1d2a1d",n.fillRect(l,c,49,24),n.fillStyle=o===0?"#ffb347":"#6fae6f",n.font="bold 8px monospace",n.fillText(a.slice(0,8),l+3,c+15)}),n.fillStyle="#c9c9c0",n.font="bold 11px monospace",n.fillText("ARM",s-150,360),n.fillText("MASTER",s+110,360);for(let a=0;a<6;a++)n.fillStyle="#111",n.beginPath(),n.arc(s-160+a*64,372,6,0,7),n.fill()})}function Av(){return Ru(256,512,(n,e,t)=>{n.fillStyle="#2a2d31",n.fillRect(0,0,e,t);for(let i=0;i<7;i++){n.strokeStyle="#41464d",n.lineWidth=2,n.strokeRect(10,14+i*70,e-20,60),n.fillStyle="#d8d8d0",n.font="bold 10px monospace",n.fillText(["FUEL","ENG","LIGHTS","RADIO","IFF","ECS","ANTI-ICE"][i],18,30+i*70);for(let s=0;s<4;s++)n.fillStyle="#121315",n.beginPath(),n.arc(40+s*52,50+i*70,9,0,7),n.fill(),n.fillStyle="#9aa0a8",n.fillRect(38+s*52,36+i*70,4,12)}})}function Cp(n,e){let t=bp(n,e),i=new Pt,s=new Pt;i.add(s),s.position.set(0,-t.eyeY,-t.eyeZ);let r=Cs(n,e);s.add(r);let a={uC:{value:new wt(t.w,t.z0,t.z1,0)},uY:{value:new se(t.y0,t.y1)}};r.traverse(U=>{if(U.isMesh){if(U.castShadow=!1,U.name==="pilot"||U.name==="helm"||U.name==="sill")U.visible=!1;else if(U.name==="glass")U.material=new Bt({color:"#d8e6f0",transparent:!0,opacity:.05,side:Tn,depthWrite:!1}),U.renderOrder=5;else if(U.name==="paint"||U.name==="decal"){let F=U.material.clone();F.onBeforeCompile=Y=>{Object.assign(Y.uniforms,a),Y.vertexShader=Y.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLP = position;`),Y.fragmentShader=Y.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vLP; uniform vec4 uC; uniform vec2 uY;`).replace("void main() {",`void main() {
if (abs(vLP.x) < uC.x && vLP.z > uC.y && vLP.z < uC.z && vLP.y > uY.x && vLP.y < uY.y) discard;`)},F.customProgramCacheKey=()=>"fpcut-"+U.name,U.material=F}}});let o=(U,F,Y)=>new I(U,t.eyeY+F,t.eyeZ+Y),l=t.w,c=new tt({color:"#1b1d20",roughness:.85,metalness:.2}),u=new tt({color:"#33373c",roughness:.5,metalness:.6}),d=new tt({color:"#141517",roughness:1,map:Ru(128,128,(U,F)=>{U.fillStyle="#26282b",U.fillRect(0,0,F,F);for(let Y=0;Y<1600;Y++)U.fillStyle=`rgba(0,0,0,${Math.random()*.25})`,U.fillRect(Math.random()*F,Math.random()*F,1,1)})}),h=(U,F,Y,H=0,J=0,te=0)=>{let be=new Ge(U,F);return be.position.copy(Y),be.rotation.set(H,J,te),s.add(be),be},f=new tt({color:"#202327",roughness:.9,side:Tn}),p=t.z1-t.z0,y=Math.min(t.y1,t.eyeY-.26),m=y-t.y0;[-1,1].forEach(U=>h(new Ht(p,m),f,new I(U*l,(t.y0+y)/2,(t.z0+t.z1)/2),0,Math.PI/2)),h(new Ht(l*2,p),f,new I(0,t.y0,(t.z0+t.z1)/2),-Math.PI/2);let g=l*1.92,_=g*.375,S=h(new Ht(g,_),new tt({map:wv(),roughness:.8,emissive:"#ffffff",emissiveMap:null,emissiveIntensity:0}),o(0,-.34,-.6),-.3),v=U=>{let F=document.createElement("canvas");F.width=128,F.height=96;let Y=new kt(F);Y.colorSpace=Et;let H=new Ge(new Ht(g*.29,g*.22),new Bt({map:Y,toneMapped:!1}));return H.position.set(U*g,_*.04,.004),S.add(H),{c:F,g:F.getContext("2d"),t:Y}},A=[v(-.28),v(.28)];h(new mt(g*.9,.02,.16),d,o(0,-.232,-.64)),h(new qt(.011,.011,g*.9,12),d,o(0,-.23,-.56),0,0,Math.PI/2).scale.set(1,1,.6);let T=new Di({color:"#b8ffd8",transparent:!0,opacity:.1,roughness:0,metalness:.2,depthWrite:!1});h(new Ht(.16,.13),T,o(0,-.13,-.62),-.25).renderOrder=4,h(new Ht(.16,.12),T,o(0,-.12,-.65),-.2).renderOrder=4,[-1,1].forEach(U=>h(new mt(.007,.13,.007),u,o(U*.082,-.14,-.63),-.22)),h(new mt(.18,.025,.06),u,o(0,-.205,-.62));let x=new tt({map:Av(),roughness:.8});[-1,1].forEach(U=>{h(new mt(.13,.07,.6),[c,c,x,c,c,c],o(U*(l-.07),-.62,-.05))});let b=new Pt;b.position.copy(o(-(l-.08),-.56,-.14)),b.rotation.x=-.35,s.add(b),[[new mt(.025,.14,.025),u,0,.07,0],[new mt(.06,.05,.09),c,0,.155,-.01],[new Yt(.009,8,6),new Bt({color:"#c33"}),.02,.18,-.04]].forEach(([U,F,Y,H,J])=>{let te=new Ge(U,F);te.position.set(Y,H,J),b.add(te)});let L=new Pt;L.position.copy(o(0,-.95,-.42)),s.add(L);let C=new Ge(new $i(.06,.08,12),d);C.position.y=.04,L.add(C);let D=new Ge(new qt(.013,.016,.3,10),u);D.position.y=.19,L.add(D);let z=new Ge(new Yi(.024,.09,4,10),c);z.position.set(0,.38,.01),z.rotation.x=.15,L.add(z);let G=new Ge(new mt(.012,.02,.014),new Bt({color:"#c22"}));G.position.set(0,.42,-.024),L.add(G);let R=h(new Fn(.045,.008,6,16,Math.PI),new tt({color:"#e0b020",roughness:.5}),o(0,-.74,-.24),-.2);R.rotation.z=0;let O=new tt({color:"#4a5240",roughness:.95});return[-1,1].forEach(U=>{h(new Yi(.065,.32,4,12),O,o(U*.12,-.75,-.3),Math.PI/2-.45).scale.set(1,1,.9)}),i.userData={mfds:A,stick:L,msls:r.userData.msls,eyeY:t.eyeY,eyeZ:t.eyeZ},i}var mc=class extends gs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new mt;e.deleteAttribute("uv");let t=new tt({side:$t}),i=new tt,s=new Ms(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Ge(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Ii(e,i,6),o=new Lt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Ge(e,Tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ge(e,Tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Ge(e,Tr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Ge(e,Tr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Ge(e,Tr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Ge(e,Tr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Tr(n){return new ya({color:0,emissive:16777215,emissiveIntensity:n})}var Ps=14e3,ri=340,gc=Ps/2,Xn=4600,Cu=55;function xc(n,e){let t=n*374761393+e*668265263;return t=(t^t>>>13)*1274126177,((t^t>>>16)>>>0)/4294967295}function Rv(n,e){let t=Math.floor(n),i=Math.floor(e),s=n-t,r=e-i,a=s*s*(3-2*s),o=r*r*(3-2*r),l=xc(t,i),c=xc(t+1,i),u=xc(t,i+1),d=xc(t+1,i+1);return l+(c-l)*a+(u-l)*o+(l-c-u+d)*a*o}function _c(n,e,t=4){let i=0,s=.5,r=1,a=0;for(let o=0;o<t;o++)i+=Rv(n*r,e*r)*s,a+=s,s*=.5,r*=2.03;return i/a}var Is=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function Cv(n,e){let t=_c(n*.0011+3,e*.0011-7,4),i=Math.hypot(n,e),s=t*110+Math.sin(n*.0042+t*6)*Math.cos(e*.0017)*14,r=_c(n*42e-5+40,e*42e-5+11,3);s+=Is(.6,.625,r)*230+Is(.68,.7,r)*150+Is(.75,.765,r)*110,s+=Is(4300,6400,i)*(700+_c(n*9e-4,e*9e-4,3)*900);let a=Math.max(0,Math.abs(n)-1450),o=Math.hypot(a,e),l=Is(560,280,o);return s*(1-l)+Cu*l}var yc=class{constructor(){let e=ri+1;this.h=new Float32Array(e*e);for(let t=0;t<e;t++)for(let i=0;i<e;i++)this.h[t*e+i]=Cv(-gc+i*Ps/ri,-gc+t*Ps/ri)}height(e,t){let i=ri+1,s=(e+gc)/Ps*ri,r=(t+gc)/Ps*ri;if(s<0||r<0||s>=ri||r>=ri)return 800;let a=Math.floor(s),o=Math.floor(r),l=s-a,c=r-o,u=this.h,d=u[o*i+a],h=u[o*i+a+1],f=u[(o+1)*i+a],p=u[(o+1)*i+a+1];return l+c<1?d+(h-d)*l+(f-d)*c:p+(f-p)*(1-l)+(h-p)*(1-c)}mesh(e){let t=new Ht(Ps,Ps,ri,ri);t.rotateX(-Math.PI/2);let i=t.attributes.position,s=ri+1;for(let A=0;A<i.count;A++){let T=A%s,x=Math.floor(A/s);i.setY(A,this.h[x*s+T])}t.computeVertexNormals();let r=this.h,a=A=>{let T=A%s,x=Math.floor(A/s),b=0,L=0;for(let[C,D]of[[-4,0],[4,0],[0,-4],[0,4],[-3,-3],[3,3],[-3,3],[3,-3]]){let z=T+C,G=x+D;z<0||G<0||z>=s||G>=s||(b+=r[G*s+z],L++)}return Math.min(1.1,Math.max(.62,1-(b/L-r[A])/110))},o=t.attributes.normal,l=new Float32Array(i.count*3),c=new Pe,u=new Pe("#e3b97f"),d=new Pe("#d39c62"),h=new Pe("#a4583a"),f=new Pe("#7a3f2c"),p=new Pe("#c98a58"),y=new Pe("#b7896b");for(let A=0;A<i.count;A++){let T=i.getX(A),x=i.getY(A),b=i.getZ(A),L=o.getY(A),C=_c(T*.004,b*.004,2);c.copy(u).lerp(d,C*.9);let D=Is(.93,.72,L);c.lerp(x>120?h:f,D),x>180&&L>.95&&c.lerp(p,.55),x>500&&c.lerp(y,Is(500,900,x)*.6);let z=Math.sin(x*.12)*.5+.5;D>.4&&c.multiplyScalar(.88+z*.2),c.multiplyScalar(a(A)),l[A*3]=c.r,l[A*3+1]=c.g,l[A*3+2]=c.b}t.setAttribute("color",new It(l,3));let m=document.createElement("canvas");m.width=m.height=256;let g=m.getContext("2d");g.fillStyle="#808080",g.fillRect(0,0,256,256);for(let A=0;A<9e3;A++){let T=Math.random();g.fillStyle=`rgba(${T<.5?255:40},${T<.5?240:30},${T<.5?220:20},${.05+Math.random()*.08})`,g.fillRect(Math.random()*256,Math.random()*256,1+Math.random()*2,1+Math.random()*2)}for(let A=0;A<40;A++){g.strokeStyle="rgba(90,60,30,.08)",g.lineWidth=2,g.beginPath();let T=Math.random()*256;g.moveTo(0,T);for(let x=0;x<=256;x+=16)g.lineTo(x,T+Math.sin(x*.05+A)*4);g.stroke()}let _=new kt(m);_.wrapS=_.wrapT=ei,_.repeat.set(420,420),_.anisotropy=e.capabilities.getMaxAnisotropy(),_.colorSpace=Et;let S=new tt({vertexColors:!0,map:_,roughness:.95,metalness:0}),v=new Ge(t,S);return v.receiveShadow=!0,v}rocks(){let e=new la(1,0),t=new tt({color:"#8d5a3e",roughness:1,flatShading:!0}),i=700,s=new Ii(e,t,i),r=new Lt;for(let a=0;a<i;a++){let o=Math.sqrt(Math.random())*4200,l=Math.random()*7,c=Math.cos(l)*o,u=Math.sin(l)*o,d=4+Math.random()**3*30;r.position.set(c,this.height(c,u)+d*.2,u),r.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),r.scale.set(d,d*(.5+Math.random()*.5),d),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}return s.castShadow=!1,s.receiveShadow=!0,s}};function Pp(n){let e=new cn({side:$t,depthWrite:!1,fog:!1,uniforms:{sun:{value:n.clone().normalize()}},vertexShader:"varying vec3 vP; void main(){ vP=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform vec3 sun; varying vec3 vP;
      void main(){ float y=vP.y; vec3 hor=vec3(.93,.82,.66), mid=vec3(.62,.74,.86), top=vec3(.2,.42,.74);
        vec3 c=mix(hor,mid,smoothstep(-.02,.18,y)); c=mix(c,top,smoothstep(.15,.85,y)); if(y<0.) c=mix(hor,vec3(.85,.72,.55),smoothstep(0.,-.2,y));
        float s=max(dot(vP,sun),0.); c+=vec3(1.,.85,.6)*(pow(s,900.)*4.+pow(s,24.)*.35+pow(s,4.)*.08);
        gl_FragColor=vec4(c,1.); }`}),t=new Ge(new Yt(2e4,32,16),e);return t.renderOrder=-2,t}function Ip(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d");for(let u=0;u<30;u++){let d=28+Math.random()*72,h=40+Math.random()*46,f=12+Math.random()*24,p=e.createRadialGradient(d,h-f*.3,0,d,h,f);p.addColorStop(0,"rgba(255,255,255,.6)"),p.addColorStop(.6,"rgba(244,240,232,.35)"),p.addColorStop(1,"rgba(230,224,214,0)"),e.fillStyle=p,e.fillRect(0,0,128,128)}let t=new kt(n),i=170,s=new Float32Array(i*3),r=new Float32Array(i),a=new Float32Array(i);for(let u=0,d=0;u<34;u++){let h=600+Math.random()*5600,f=Math.random()*7,p=Math.cos(f)*h,y=Math.sin(f)*h,m=2700+Math.random()*1500,g=450+Math.random()*650;for(let _=0;_<5&&d<i;_++,d++)s.set([p+(Math.random()-.5)*g*1.4,m+(Math.random()-.5)*g*.18,y+(Math.random()-.5)*g*.8],d*3),r[d]=g*(.6+Math.random()*.6),a[d]=.45+Math.random()*.35}let o=new yt;o.setAttribute("position",new It(s,3)),o.setAttribute("size",new It(r,1)),o.setAttribute("alpha",new It(a,1));let l=new cn({transparent:!0,depthWrite:!1,uniforms:{map:{value:t},scale:{value:800},fogColor:{value:new Pe("#dcc8a6")}},vertexShader:"attribute float size; attribute float alpha; varying float vA; varying float vD; uniform float scale; void main(){ vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(900.,size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }",fragmentShader:"uniform sampler2D map; uniform vec3 fogColor; varying float vA; varying float vD; void main(){ vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(3000.,14000.,vD); float near=smoothstep(60.,420.,vD); gl_FragColor=vec4(mix(vec3(1.,.985,.96),fogColor,f*.7),t.a*vA*near); }"}),c=new xs(o,l);return c.frustumCulled=!1,c.renderOrder=1,c}var Lp=new ct,Pv=new Ot,Iv=new ln,Lv=new I,Dv=new I,Qt=(n,e=0,t=0,i=0,s=0,r=0,a=0,o=[1,1,1])=>{Lp.compose(Lv.set(e,t,i),Pv.setFromEuler(Iv.set(s,r,a)),Dv.set(...o));let l=n.clone().applyMatrix4(Lp);return l.index?l.toNonIndexed():l},vc=n=>(n.forEach(e=>{for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);e.clearGroups()}),uc(n,!1));function Dp(n,e,t,i){let s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);let r=new kt(s);return r.colorSpace=Et,r.anisotropy=8,i&&(r.wrapS=r.wrapT=ei,r.repeat.set(...i)),r}function Np(){let n=new Pt,e=Cu+.3,t=Dp(2048,64,(m,g,_)=>{m.fillStyle="#3a3c40",m.fillRect(0,0,g,_);for(let S=0;S<4e3;S++)m.fillStyle=`rgba(${Math.random()<.5?255:0},${Math.random()<.5?255:0},${Math.random()<.5?255:0},.05)`,m.fillRect(Math.random()*g,Math.random()*_,2,1);m.fillStyle="#e8e8e2";for(let S=120;S<g-120;S+=46)m.fillRect(S,_/2-1,26,2);[[10,1],[g-50,-1]].forEach(([S])=>{for(let v=0;v<8;v++)m.fillRect(S,6+v*7,40,4)}),m.fillRect(0,3,g,1.5),m.fillRect(0,_-4.5,g,1.5),m.fillStyle="rgba(20,20,20,.45)";for(let S=0;S<30;S++)m.fillRect(150+Math.random()*300,_/2-8+Math.random()*16,60,2)}),i=new Ge(new Ht(2900,60).rotateX(-Math.PI/2),new tt({map:t,roughness:.9}));i.position.set(0,e,0),i.receiveShadow=!0,n.add(i);let s=new tt({color:"#7f7a70",roughness:.95}),r=new Ge(new Ht(700,160).rotateX(-Math.PI/2),s);r.position.set(-200,e-.05,170),r.receiveShadow=!0,n.add(r);let a=new Ge(new Ht(26,90).rotateX(-Math.PI/2),s);a.position.set(-200,e-.04,70),n.add(a);let o=[],l=[],c=[],u=[],d=[];for(let m=0;m<4;m++){let g=new qt(22,22,50,20,1,!1,0,Math.PI);o.push(Qt(g,-460+m*90,e,210,0,Math.PI/2,Math.PI/2)),l.push(Qt(new Ht(34,18),-460+m*90,e+9,184.8,0,Math.PI,0))}o.push(Qt(new mt(14,30,14),160,e+15,210)),u.push(Qt(new mt(20,7,20),160,e+33,210)),l.push(Qt(new mt(22,1.2,22),160,e+37,210));for(let m=0;m<5;m++)d.push(Qt(new qt(9,9,12,18),300+m%3*24,e+6,190+Math.floor(m/3)*24));for(let m=0;m<40;m++)u.push(Qt(new Yt(.9,6,4),-1440+m*74,e+.5,m%2?34:-34));o.push(Qt(new mt(60,10,26),40,e+5,230)),l.push(Qt(new mt(62,1,28),40,e+10.5,230));let h={paint:new tt({color:"#b9ad97",roughness:.8}),dark:new tt({color:"#2d3036",roughness:.7}),metal:new tt({color:"#8c9097",roughness:.35,metalness:.8}),glow:new tt({color:"#8fd0ff",emissive:"#4aa8ff",emissiveIntensity:.6,roughness:.2,metalness:.5}),white:new tt({color:"#e7e4dc",roughness:.5,metalness:.2})};for(let[m,g]of Object.entries({paint:o,dark:l,metal:c,glow:u,white:d}))if(g.length){let _=new Ge(vc(g),h[m]);_.castShadow=_.receiveShadow=!0,n.add(_)}let f=new Pt;f.position.set(160,e+38,210);let p=new Ge(new mt(14,4,.8),h.metal);p.position.y=3,f.add(p),n.add(f);let y=new Ge(new Zi(30,40).rotateX(-Math.PI/2),new tt({map:Dp(256,256,m=>{m.fillStyle="#b8f36b",m.beginPath(),m.arc(128,128,120,0,7),m.fill(),m.fillStyle="#2b2e33",m.font="900 130px Arial",m.textAlign="center",m.textBaseline="middle",m.fillText("JK",128,136)}),transparent:!0,roughness:.8}));return y.position.set(-200,e,170),n.add(y),n.userData={radar:f,center:new I(0,e,0),hits:[[-460,210],[-280,210],[160,210],[320,200],[40,230],[-200,170],[500,0],[-700,0]]},n}var Pu={};function Nv(n){if(Pu[n])return Pu[n];let e=[],t=[],i=[];if(n==="sam"){e.push(Qt(new mt(5,2,11),0,2.2,0)),e.push(Qt(new mt(4.6,2.6,3),0,3.6,-4)),t.push(Qt(new mt(4.7,1.2,2.6),0,4.3,-5.4));for(let r=0;r<6;r++)t.push(Qt(new qt(.75,.75,2.2,10),(r%2-.5)*2.4,1.2,(Math.floor(r/2)-1)*3.4,0,0,Math.PI/2));for(let r=0;r<4;r++)i.push(Qt(new qt(.5,.5,7,10),(r%2-.5)*1.2,5.4+Math.floor(r/2)*1.1,1.5,-.75));i.push(Qt(new mt(3.4,2.2,.3),0,6.5,-1.5,.3))}else e.push(Qt(new Fn(5,1.4,6,18),0,.8,0,Math.PI/2)),e.push(Qt(new qt(2.2,2.6,2,14),0,1.6,0)),t.push(Qt(new mt(3,1.8,3),0,3.2,0)),[-1,1].forEach(r=>i.push(Qt(new qt(.18,.18,6,8),r*.7,4.2,-3,-1.1)));let s=[new tt({color:"#8a7a5a",roughness:.85}),new tt({color:"#3a3b36",roughness:.7}),new tt({color:"#5d6066",roughness:.4,metalness:.7})];return Pu[n]=[vc(e),vc(t),vc(i)].map((r,a)=>[r,s[a]])}function Mc(n){let e=new Pt;return Nv(n).forEach(([t,i])=>{let s=new Ge(t,i);s.castShadow=!0,e.add(s)}),e.userData={flames:[],glows:[],msls:[],body:e,strobe:{visible:!1}},e}var Sc=null;function Uv(){if(Sc)return Sc;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),Sc=new kt(n),Sc}var wr=class{constructor(e,t){this.max=e,this.n=0,this.i=0,this.density=1,this.hi=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.life=new Float32Array(e),this.maxL=new Float32Array(e),this.grow=new Float32Array(e),this.s0=new Float32Array(e),this.a0=new Float32Array(e),this.drag=new Float32Array(e),this.rise=new Float32Array(e),this.fade=new Float32Array(e);let i=new yt;i.setAttribute("position",new It(this.pos,3).setUsage(As)),i.setAttribute("color",new It(this.col,3).setUsage(As)),i.setAttribute("size",new It(this.size,1).setUsage(As)),i.setAttribute("alpha",new It(this.alpha,1).setUsage(As));let s=new cn({transparent:!0,depthWrite:!1,blending:t?Gt:Qi,uniforms:{map:{value:Uv()},scale:{value:800},fogColor:{value:new Pe},fogNear:{value:1},fogFar:{value:1}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; varying float vD; uniform float scale;
        void main(){ vA=alpha; vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vD=-mv.z; gl_PointSize=min(520., size*scale/max(1.,-mv.z)); gl_Position=projectionMatrix*mv; }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear, fogFar; varying float vA; varying vec3 vC; varying float vD;
        void main(){ if(vA<.004) discard; vec4 t=texture2D(map,gl_PointCoord); float f=smoothstep(fogNear,fogFar,vD); vec3 c=mix(vC,fogColor,${t?"0.":"f"}); gl_FragColor=vec4(c,t.a*vA*${t?"(1.-f)":"1."}); }`});this.points=new xs(i,s),this.points.frustumCulled=!1,this.g=i,this.mat=s}emit(e,t,i,s={}){if(this.density<1&&!s.must&&Math.random()>this.density)return;let r=this.i;r+1>this.hi&&(this.hi=r+1),this.i=(this.i+1)%this.max,this.n<this.max&&this.n++,this.pos[r*3]=e,this.pos[r*3+1]=t,this.pos[r*3+2]=i;let a=s.spread||0;this.vel[r*3]=(s.vx||0)+(Math.random()-.5)*a,this.vel[r*3+1]=(s.vy||0)+(Math.random()-.5)*a,this.vel[r*3+2]=(s.vz||0)+(Math.random()-.5)*a;let o=s.color||[1,1,1];this.col[r*3]=o[0],this.col[r*3+1]=o[1],this.col[r*3+2]=o[2],this.size[r]=this.s0[r]=s.size||4,this.grow[r]=s.grow??1.5,this.a0[r]=s.alpha??.6,this.alpha[r]=this.a0[r],this.life[r]=this.maxL[r]=s.life||2,this.drag[r]=s.drag??.5,this.rise[r]=s.rise??0,this.fade[r]=s.fadeIn?1:0}update(e,t,i){let s=0;for(let o=0;o<this.hi;o++){if(this.life[o]<=0){this.alpha[o]=0;continue}s++,this.life[o]-=e;let l=1-this.life[o]/this.maxL[o],c=Math.exp(-this.drag[o]*e);this.vel[o*3]*=c,this.vel[o*3+1]=this.vel[o*3+1]*c+this.rise[o]*e,this.vel[o*3+2]*=c,this.pos[o*3]+=this.vel[o*3]*e,this.pos[o*3+1]+=this.vel[o*3+1]*e,this.pos[o*3+2]+=this.vel[o*3+2]*e,this.size[o]=this.s0[o]*Math.max(.05,1+this.grow[o]*(this.maxL[o]-this.life[o])),this.alpha[o]=this.a0[o]*(1-l)*(this.fade[o]?Math.min(1,l*8):1)}let r=this.g.attributes,a=this.hi;this.g.setDrawRange(0,a);for(let o of[r.position,r.size,r.alpha,r.color])o.clearUpdateRanges(),o.addUpdateRange(0,a*o.itemSize),o.needsUpdate=!0;s||(this.hi=0,this.i=0),t&&(this.mat.uniforms.fogColor.value.copy(t.color),this.mat.uniforms.fogNear.value=t.near,this.mat.uniforms.fogFar.value=t.far),this.mat.uniforms.scale.value=i*.5}clear(){this.life.fill(0),this.alpha.fill(0)}},bc=class{constructor(e=400){this.max=e;let t=new mt(.35,.35,9);this.mesh=new Ii(t,new Bt({color:"#ffd27a",transparent:!0,opacity:.95,blending:Gt,depthWrite:!1}),e),this.mesh.instanceMatrix.setUsage(As),this.mesh.frustumCulled=!1,this.list=[],this.o=new Lt,this.mesh.setColorAt(0,new Pe("#fff")),this.mesh.count=0}add(e,t,i,s,r){this.list.length>=this.max&&this.list.shift(),this.list.push({p:e.clone(),v:t.clone(),life:1.6,owner:i,dmg:s,color:r})}draw(){let e=this.o,t=0;for(let i of this.list)e.position.copy(i.p),e.lookAt(i.p.x+i.v.x,i.p.y+i.v.y,i.p.z+i.v.z),e.updateMatrix(),this.mesh.setMatrixAt(t,e.matrix),this.mesh.setColorAt(t,i.color),t++;this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}},rt=(()=>{let n,e,t,i,s=!0,r;try{s=localStorage.getItem("jkstrike-sound")!=="0"}catch{}function a(){if(n){n.state==="suspended"&&n.resume();return}let d=window.AudioContext||window.webkitAudioContext;if(!d)return;n=new d,e=n.createGain(),e.gain.value=s?.6:0;let h=n.createDynamicsCompressor();e.connect(h),h.connect(n.destination),r=n.createBuffer(1,n.sampleRate*2,n.sampleRate);let f=r.getChannelData(0);for(let v=0;v<f.length;v++)f[v]=Math.random()*2-1;let p=(v,A,T)=>{let x=n.createBufferSource();x.buffer=r,x.loop=!0;let b=n.createBiquadFilter();b.type=v,b.frequency.value=A,b.Q.value=T;let L=n.createGain();return L.gain.value=0,x.connect(b),b.connect(L),L.connect(e),x.start(),{g:L,b}};t=p("lowpass",400,.8),i=p("bandpass",900,.5);let y=n.createOscillator();y.type="sawtooth",y.frequency.value=55;let m=n.createGain();m.gain.value=0;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=220,y.connect(g),g.connect(m),m.connect(e),y.start(),t.o=y,t.og=m;let _=n.createOscillator();_.type="sine",_.frequency.value=1200;let S=n.createGain();S.gain.value=0,_.connect(S),S.connect(e),_.start(),t.whine=_,t.wg=S}let o=()=>n.currentTime;function l(d,h,f,p){if(!t)return;let y=p?.55:1;t.g.gain.setTargetAtTime((.12+d*.2+(h?.25:0))*y,o(),.1),t.b.frequency.setTargetAtTime(250+d*600+(h?900:0),o(),.15),t.og.gain.setTargetAtTime((.05+d*.05)*y,o(),.1),t.o.frequency.setTargetAtTime(45+d*40,o(),.2),t.wg.gain.setTargetAtTime(.012+d*.02,o(),.2),t.whine.frequency.setTargetAtTime(900+d*900,o(),.3),i.g.gain.setTargetAtTime(Math.min(.25,f*f*1e-6)*(p?.5:1),o(),.2),i.b.frequency.setTargetAtTime(600+f*2,o(),.2)}function c(d,h,f,p,y="bandpass"){if(!n||!s)return;let m=n.createBufferSource();m.buffer=r;let g=n.createBiquadFilter();g.type=y,g.frequency.value=d,g.Q.value=h;let _=n.createGain();_.gain.setValueAtTime(p,o()),_.gain.exponentialRampToValueAtTime(.001,o()+f),m.connect(g),g.connect(_),_.connect(e),m.start(),m.stop(o()+f+.05)}function u(d,h,f="sine",p=.15,y){if(!n||!s)return;let m=n.createOscillator(),g=n.createGain();m.type=f,m.frequency.setValueAtTime(d,o()),y&&m.frequency.exponentialRampToValueAtTime(y,o()+h),g.gain.setValueAtTime(p,o()),g.gain.exponentialRampToValueAtTime(.001,o()+h),m.connect(g),g.connect(e),m.start(),m.stop(o()+h+.05)}return{init:a,engine:l,get on(){return s},toggle(){s=!s;try{localStorage.setItem("jkstrike-sound",s?"1":"0")}catch{}return e&&e.gain.setTargetAtTime(s?.6:0,o(),.05),s},silence(){t&&(t.g.gain.setTargetAtTime(0,o(),.05),t.og.gain.setTargetAtTime(0,o(),.05),t.wg.gain.setTargetAtTime(0,o(),.05),i.g.gain.setTargetAtTime(0,o(),.05))},gun(){c(1400,.7,.07,.22),c(180,1,.06,.25,"lowpass")},hit(){u(2200,.05,"square",.06)},launch(){c(700,.4,1.1,.45),u(180,.9,"sawtooth",.08,60)},boom(d=0){let h=Math.max(.08,1-d/3e3);c(120,.6,1.6,h),c(700,.5,.5,h*.5),u(55,1.2,"sine",h*.6,30)},flare(){c(2400,1.5,.25,.18),u(1600,.2,"square",.04,900)},lockTick(){u(1e3,.05,"square",.05)},locked(d){d&&u(1500,.12,"square",.06)},warn(){u(880,.12,"square",.1),setTimeout(()=>u(660,.12,"square",.1),140)},pullup(){u(520,.2,"triangle",.1)},win(){[523,659,784,1046].forEach((d,h)=>setTimeout(()=>u(d,.3,"triangle",.15),h*120))},click(){u(1200,.04,"square",.04)},damage(){c(400,.8,.25,.4),u(120,.2,"square",.1,60)}}})();var Te=n=>document.querySelector(n),Uc=n=>[...document.querySelectorAll(n)],Us={get(n,e){try{let t=localStorage.getItem(n);return t==null?e:JSON.parse(t)}catch{return e}},set(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}},vt=(n,e,t)=>Math.max(e,Math.min(t,n)),rs=(n,e,t)=>n+(e-n)*t,De=(n,e)=>n+Math.random()*(e-n),Fv=n=>n[Math.floor(Math.random()*n.length)],an=()=>new I,Yn=new I(0,1,0),Ut=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window;Ut&&document.body.classList.add("touchui");var Ya=Te("#gl"),vn=new lc({canvas:Ya,antialias:!0,powerPreference:"high-performance"}),Gp=Us.get("jkstrike-set",{}),Nu={auto:{max:Ut?1.25:1.5,shadow:Ut?1024:2048,density:Ut?.7:1},high:{max:2,shadow:2048,density:1},medium:{max:1.15,shadow:1024,density:.8},low:{max:.8,shadow:0,density:.55}},$a=Nu[Gp.quality]||Nu.auto,gi=Math.min(devicePixelRatio||1,$a.max);vn.setPixelRatio(gi);vn.toneMapping=wa;vn.toneMappingExposure=1.05;vn.outputColorSpace=Et;vn.shadowMap.enabled=$a.shadow>0;vn.shadowMap.type=Ss;var Je=new gs,Pc=new jr("#dcc8a6",1800,11e3);Je.fog=Pc;Je.background=new Pe("#dcc8a6");Je.environment=new Mr(vn).fromScene(new mc,.04).texture;Je.environmentIntensity=.55;var je=new mn(70,1,.1,3e4);Je.add(je);var Vp=new I(-.55,.62,-.45).normalize(),Bi=new Ta("#fff0d8",3.1);Bi.castShadow=!0;Bi.shadow.mapSize.set($a.shadow||512,$a.shadow||512);Object.assign(Bi.shadow.camera,{left:-120,right:120,top:120,bottom:-120,near:10,far:2400});Bi.shadow.bias=-5e-4;Bi.shadow.normalBias=.5;Je.add(Bi,Bi.target,new Ma("#bcd6f2","#c79a68",1));var yn=new yc;Je.add(yn.mesh(vn));Je.add(yn.rocks());var eo=Np();Je.add(eo);var Wp=Pp(Vp);Je.add(Wp);var Xp=Ip();Je.add(Xp);var hn=new wr(2200,!1),Rn=new wr(1500,!0),Pr=new wr(2400,!1);Je.add(hn.points,Rn.points,Pr.points);[hn,Rn,Pr].forEach(n=>n.density=$a.density);var Ja=Array.from({length:3},()=>{let n=new Ms("#ffb060",0,900,2);return Je.add(n),{l:n,t:0}}),qp=0,vi=new bc(600);Je.add(vi.mesh);var Re={jet:"raptor",paint:"gray",diff:"normal",view:"third",control:Ut?"stick":"aim",sens:"mid",invert:!1,assist:!0,quality:"auto",...Gp};is[Re.jet]||(Re.jet="raptor");Ut&&(Re.control="stick");var Ic=()=>Us.set("jkstrike-set",Re),Ir={easy:{turn:.7,acc:.4,msl:28,dmg:.55,name:"Rookie"},normal:{turn:.92,acc:.58,msl:19,dmg:.9,name:"Pilot"},ace:{turn:1.15,acc:.9,msl:12,dmg:1.3,name:"Ace"}},Fc={fighter:{hp:100,pts:100,label:""},ace:{hp:190,pts:250,label:"ACE"},bomber:{hp:420,pts:300,label:"BOMBER"},boss:{hp:2200,pts:1500,label:"GUNSHIP"},sam:{hp:160,pts:150,label:"SAM"},aa:{hp:90,pts:100,label:"AAA"}},Ov=[["gun","\u{1F525}","Heavy Rounds","+30% gun damage"],["lock","\u{1F3AF}","Rapid Lock","Missile lock 45% faster"],["pylon","\u{1F680}","Extra Pylons","+3 missiles and faster reloads"],["hull","\u{1F6E1}","Reinforced Hull","+35 max hull, fully repaired"],["flare","\u2728","Flare Pods","+6 flares, recharge twice as fast"],["engine","\u26A1","Hot Engines","+12% top speed"],["agile","\u{1F300}","Tight Turns","+15% turn rate"],["cool","\u2744\uFE0F","Cooled Barrels","Gun heats 40% slower"],["seeker","\u{1F9E0}","Smart Seekers","Missiles turn 35% harder"],["regen","\u{1F49A}","Field Repair","Hull regenerates 3\xD7 faster"],["scav","\u{1F985}","Scavenger","Each kill repairs 8 hull"],["salvo","\u{1F386}","Salvo","Fire two missiles at once"]],Z={mode:"menu"},M=null,At=[],In=[],yi=[],xi=[],ai=[],Bv=new Pe("#ffd27a"),Yp=new Pe("#ff6a4a"),zv=new Pe("#ff9c3a"),Rr={},Pn={x:0,y:0,l:!1,moved:!1},_i={x:0,y:0,gun:!1,ab:!1,brake:!1},_n={yaw:0,pitch:0,dir:new I(0,0,-1),locked:!1},Up={low:.0014,mid:.0022,high:.0032};addEventListener("keydown",n=>{if(!n.target.matches("input")){if(Rr[n.code]=!0,rt.init(),Z.mode==="perk"&&/Digit[123]/.test(n.code)){qu(+n.code.slice(5)-1);return}if(Z.mode==="play"||Z.mode==="paused"){if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(n.code)&&n.preventDefault(),n.repeat)return;if(n.code==="Escape"||n.code==="KeyP"){(Z.mode==="play"&&!_n.locked||Z.mode==="paused")&&Cr();return}if(Z.mode!=="play")return;n.code==="Space"&&Hc(),(n.code==="KeyF"||n.code==="KeyX")&&Wu(),(n.code==="KeyV"||n.code==="KeyC")&&Gc(),n.code==="KeyT"&&tM(),n.code==="KeyM"&&im()}}});addEventListener("keyup",n=>{Rr[n.code]=!1});addEventListener("blur",()=>{for(let n in Rr)Rr[n]=!1;Pn.l=!1});addEventListener("mousemove",n=>{if(Pn.x=(n.clientX/innerWidth-.5)*2,Pn.y=(n.clientY/innerHeight-.5)*2,Pn.moved=!0,Z.mode==="play"&&Re.control==="aim"&&(_n.locked||document.pointerLockElement)){let e=Up[Re.sens]||Up.mid;_n.yaw-=n.movementX*e,_n.pitch=vt(_n.pitch-n.movementY*e*(Re.invert?-1:1),-1.45,1.45)}});Ya.addEventListener("mousedown",n=>{if(rt.init(),Z.mode==="play"){if(Re.control==="aim"&&!document.pointerLockElement){to();return}n.button===0&&(Pn.l=!0),n.button===2&&Hc()}});addEventListener("mouseup",n=>{n.button===0&&(Pn.l=!1)});addEventListener("contextmenu",n=>{Z.mode==="play"&&n.preventDefault()});function to(){try{let n=Ya.requestPointerLock({unadjustedMovement:!0});n&&n.catch&&n.catch(()=>{try{Ya.requestPointerLock()}catch{}})}catch{try{Ya.requestPointerLock()}catch{}}}document.addEventListener("pointerlockerror",()=>{Z.mode==="play"&&Re.control==="aim"&&Te("#clickfly").classList.add("on")});document.addEventListener("pointerlockchange",()=>{_n.locked=!!document.pointerLockElement,Te("#clickfly").classList.toggle("on",Z.mode==="play"&&Re.control==="aim"&&!_n.locked),!_n.locked&&Z.mode==="play"&&Re.control==="aim"&&Cr()});var Oi=(...n)=>n.some(e=>Rr[e]);function kv(){let n=Re.invert?-1:1,e=((Oi("KeyS","ArrowDown")?1:0)-(Oi("KeyW","ArrowUp")?1:0))*n,t=(Oi("KeyD","ArrowRight")?1:0)-(Oi("KeyA","ArrowLeft")?1:0),i=(Oi("KeyQ")?1:0)-(Oi("KeyE")?1:0),s=e,r=t,a=i,o=!!(e||t||i);if(Ut||Re.control==="stick"){if(Ut)s+=-_i.y*n,r+=_i.x,o=!0;else if(Pn.moved){let l=c=>Math.abs(c)<.06?0:(c-Math.sign(c)*.06)/.94;s+=vt(-l(Pn.y)*1.9,-1,1)*n,r+=vt(l(Pn.x)*1.9,-1,1),o=!0}}return{pitch:vt(s,-1,1),roll:vt(r,-1,1),yaw:a,manual:o,gun:Pn.l||Oi("KeyJ","Enter")||_i.gun,ab:Oi("ShiftLeft","ShiftRight")||_i.ab,brake:Oi("KeyB")||_i.brake}}{let n=Te("#stick"),e=Te("#knob"),t=null,i=0,s=0;n.addEventListener("pointerdown",o=>{t=o.pointerId;let l=n.getBoundingClientRect();i=l.left+l.width/2,s=l.top+l.height/2,n.setPointerCapture(t),r(o),rt.init()});let r=o=>{if(o.pointerId!==t)return;let l=60,c=(o.clientX-i)/l,u=(o.clientY-s)/l,d=Math.hypot(c,u);d>1&&(c/=d,u/=d),_i.x=c,_i.y=u,e.style.transform=`translate(${c*l}px,${u*l}px)`};n.addEventListener("pointermove",r);let a=o=>{o.pointerId===t&&(t=null,_i.x=_i.y=0,e.style.transform="")};n.addEventListener("pointerup",a),n.addEventListener("pointercancel",a),Uc("#touch [data-b]").forEach(o=>{let l=o.dataset.b,c=u=>d=>{d.preventDefault(),o.classList.toggle("down",u),l==="gun"||l==="ab"||l==="brake"?_i[l]=u:u&&(rt.init(),l==="msl"&&Hc(),l==="flr"&&Wu(),l==="cam"&&Gc())};o.addEventListener("pointerdown",c(!0)),o.addEventListener("pointerup",c(!1)),o.addEventListener("pointercancel",c(!1)),o.addEventListener("pointerleave",c(!1))}),Te("#tPause").onclick=()=>Cr(),Te("#clickfly").onclick=()=>{to()}}var An=new Pt;je.add(An);An.visible=!1;function Hv(){An.clear();let n=Cp(Re.jet,Re.paint);An.add(n),An.userData=n.userData}var rn=null,zt=(n,e=an())=>e.set(0,0,-1).applyQuaternion(n),Zp=(n,e=an())=>e.set(0,1,0).applyQuaternion(n),as=(n,e=an())=>e.set(1,0,0).applyQuaternion(n);function Gv(n,e){let t=new cn({transparent:!0,depthWrite:!1,blending:Gt,side:di,uniforms:{uT:{value:0},uHit:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uT; uniform float uHit; varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ float f = pow(1. - abs(dot(vN, vV)), 2.6); float hex = smoothstep(.9,1.,sin(vP.x*1.4+uT*3.)*sin(vP.y*1.4)*sin(vP.z*1.4-uT*2.)); float a = f*.75 + hex*.12 + uHit*.4; gl_FragColor = vec4(mix(vec3(.25,1.,.6), vec3(1.), uHit) * a, a); }"}),i=new Ge(new Yt(e.len*.62,40,24),t);return i.scale.set(1.15,.6,1),i.visible=!1,n.add(i),i}function Vv(){M&&M.obj&&Je.remove(M.obj);let n=Cs(Re.jet,Re.paint);Je.add(n);let e=is[Re.jet];return{obj:n,J:e,pos:new I(-2600,700,300),q:new Ot,vel:an(),speed:240,thr:.65,hp:e.hp,maxHp:e.hp,msl:e.missiles,mslMax:e.missiles,mslT:0,mslCd:0,side:1,flares:12,flareMax:12,flareT:0,flareCd:0,heat:0,over:!1,gunCd:0,gunSide:1,rate:an(),alive:!0,lock:{t:null,k:0,locked:!1,tick:0},ab:!1,hitFlash:0,warnT:0,pullT:0,shake:0,camQ:new Ot,deadT:0,lastHit:0,perks:[],pw:{},shieldMesh:Gv(n,e),m:{gun:1,lock:1,reload:1,flare:1,speed:1,agile:1,heat:1,seeker:1,regen:1,scav:0,salvo:1}}}function Uu(){let n=zt(M.q);_n.pitch=Math.asin(vt(n.y,-1,1)),_n.yaw=Math.atan2(-n.x,-n.z)}function kc(){let n=Math.cos(_n.pitch);return _n.dir.set(-Math.sin(_n.yaw)*n,Math.sin(_n.pitch),-Math.cos(_n.yaw)*n)}function Wa(n,e,t){let i=Ir[Re.diff],s=Z.cycle,r=!["sam","aa"].includes(n),a=n==="bomber"?Va(!1):n==="boss"?Va(!0):r?Cs(n==="ace"?"raptor":Fv(["viper","striker","viper"]),"red",!0):Mc(n);Je.add(a),a.userData.msls.forEach(u=>u.visible=!1);let o=new Ot;t&&o.setFromRotationMatrix(new ct().lookAt(e,t,Yn));let l=Fc[n].hp*(1+s*.3)*(Re.diff==="easy"?.8:1),c={kind:n,air:r,obj:a,pos:e.clone(),q:o,vel:an(),speed:n==="boss"?150:n==="bomber"?175:250,hp:l,maxHp:l,state:n==="bomber"||n==="boss"?"run":"hunt",st:0,gunCd:De(1,3),burst:0,mslT:De(6,i.msl)*(n==="ace"?.6:1),cd:De(3,7),evadeDir:an(),dead:!1,deadT:0,spin:De(-2,2),id:Math.random(),hitT:0,wp:an(),gunT:[0,0,0]};return a.position.copy(c.pos),a.quaternion.copy(o),At.push(c),c}function Ec(n,e,t,i,s){let r=De(0,Math.PI*2),a=De(e,t),o=new I(n.x+Math.cos(r)*a,0,n.z+Math.sin(r)*a);return o.x=vt(o.x,-Xn+300,Xn-300),o.z=vt(o.z,-Xn+300,Xn-300),o.y=Math.max(yn.height(o.x,o.z)+400,De(i,s)),o}function $p(n){let e=Math.floor((n-1)/5),t=(n-1)%5;return[{name:"DOGFIGHT",obj:"Clear the skies of enemy fighters",fighter:2+e*2+(n>1?1:0)},{name:"INTERCEPT",obj:"Bombers are heading for the base. Stop them!",bomber:1+e,fighter:1+e},{name:"STRIKE",obj:"Destroy the SAM site. Watch for flak and missiles",sam:2+e,aa:2+e,fighter:e+1},{name:"ACE SQUADRON",obj:"Elite pilots inbound. They fly better than you think",ace:1+e,fighter:2+e},{name:"BOSS",obj:"A heavy gunship is attacking. Bring it down!",boss:1,fighter:2+e,ace:e}][t]}function Wv(n){Z.cycle=Math.floor((n-1)/5);let e=$p(n);Z.spec=e;let t=zt(M.q);t.y=0,t.normalize();let i=M.pos.clone().addScaledVector(t,3e3);for(let s=0;s<(e.fighter||0);s++)Wa("fighter",Ec(i,0,900,700,1700),M.pos);for(let s=0;s<(e.ace||0);s++)Wa("ace",Ec(i,300,1200,900,1900),M.pos);for(let s=0;s<(e.bomber||0);s++){let r=Ec(new I,3900,4300,850,950);r.y=Math.max(r.y,850+s*60),Wa("bomber",r,new I(0,r.y,0))}if(e.boss){let s=Ec(new I,3700,4e3,1150,1200);Wa("boss",s,new I(0,s.y,0))}if(e.sam||e.aa){let s=De(0,Math.PI*2),r=new I(Math.cos(s)*2700,0,Math.sin(s)*2700);Z.zone=r;let a=o=>{let l=r.clone().add(new I(De(-380,380),0,De(-380,380)));l.y=yn.height(l.x,l.z)+.5;let c=Wa(o,l);return c.obj.rotation.y=De(0,6),c.q.copy(c.obj.quaternion),c};for(let o=0;o<(e.sam||0);o++)a("sam");for(let o=0;o<(e.aa||0);o++)a("aa")}else Z.zone=null}var Oc=new Ot,Fs=new ct,Gu=an(),Xv=an(),qv=an(),Ka=an();function Jp(n,e,t,i=2.5){let s=zt(n.q,Gu),r=Xv.copy(e).addScaledVector(s,-e.dot(s)),a=qv.copy(Yn).addScaledVector(r,i).normalize();Oc.setFromRotationMatrix(Fs.lookAt(Ka,e,a)),n.q.rotateTowards(Oc,t)}function Yv(n,e){let t=Ir[Re.diff],i=M.pos.clone().sub(n.pos),s=i.length(),r=Z.cycle,a=vt(t.acc+r*.08+(n.kind==="ace"?.2:0),0,1);if(n.hitT=Math.max(0,n.hitT-e),n.dead){if(!n.air){n.remove=!0;return}n.deadT+=e,n.q.multiply(new Ot().setFromEuler(new ln(-.5*e,0,n.spin*e))),n.speed=Math.min(320,n.speed+30*e),n.pos.addScaledVector(zt(n.q),n.speed*e),n.pos.y-=(40+n.deadT*60)*e,Math.random()<.9&&(Rn.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:.6,color:[1,.55,.2],alpha:.9,spread:6,grow:1}),hn.emit(n.pos.x,n.pos.y,n.pos.z,{size:10,life:4,color:[.18,.16,.15],alpha:.7,spread:4,grow:1.8,rise:4})),(n.pos.y<yn.height(n.pos.x,n.pos.z)+5||n.deadT>6)&&(io(n.pos,n.kind==="boss"?3:n.kind==="bomber"?2:1.4),n.remove=!0);return}if(!n.air)return Jv(n,e,i,s,a);if(n.kind==="bomber"||n.kind==="boss")return Zv(n,e,i,s,a);let o=zt(n.q),l,c=n.pos.clone().addScaledVector(o,600),u=Math.min(n.pos.y-yn.height(n.pos.x,n.pos.z),c.y-yn.height(c.x,c.z)),d=Math.hypot(n.pos.x,n.pos.z);n.st-=e,u<280?l=o.clone().setY(0).normalize().setY(1.2).normalize():d>Xn-300?l=new I(-n.pos.x,0,-n.pos.z).normalize().setY(.1).normalize():n.state==="evade"&&n.st>0?l=n.evadeDir:(n.state="hunt",l=M.pos.clone().addScaledVector(M.vel,vt(s/1100,0,2)*a).sub(n.pos).normalize(),s<220&&o.dot(i)/s>.3&&(n.state="evade",n.st=2,n.evadeDir=new I(De(-1,1),De(.2,.6),De(-1,1)).normalize()),s>2400&&(l.y=vt(l.y,-.3,.4))),M.lock.locked&&M.lock.t===n&&n.state!=="evade"&&Math.random()<e*(n.kind==="ace"?.7:.25)*(Re.diff==="easy"?.4:1)&&(n.state="evade",n.st=De(1.6,3),n.evadeDir=as(n.q).multiplyScalar(Math.random()<.5?1:-1).addScaledVector(Yn,De(-.3,.4)).normalize()),Jp(n,l,t.turn*(1+r*.08)*(n.kind==="ace"?1.25:1)*(n.state==="evade"?1.3:1)*e);let h=(s>1600?300:245)*(n.state==="evade"?1.15:1)*(n.kind==="ace"?1.08:1);n.speed=rs(n.speed,h,e*.4),zt(n.q,o),n.vel.copy(o).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.6&&hn.emit(n.pos.x,n.pos.y,n.pos.z,{size:5,life:2.5,color:[.25,.24,.23],alpha:.45,spread:2,grow:1.4}),n.gunCd-=e;let f=o.angleTo(i);if(M.alive&&s<1150&&f<.05+(1-a)*.04&&n.gunCd<=0&&(n.burst=6+Math.floor(Math.random()*6),n.gunCd=De(1.4,2.8)/(1+r*.1)),n.burst>0&&(n.bt=(n.bt||0)-e)<=0){n.bt=.07,n.burst--;let p=(1-a)*.05+.006,y=o.clone().add(new I(De(-p,p),De(-p,p),De(-p,p))).normalize();vi.add(n.pos.clone().addScaledVector(o,10),y.multiplyScalar(1050).add(n.vel),"e",4*t.dmg,Yp),s<1500&&rt.gun()}n.mslT-=e,M.alive&&n.mslT<=0&&s>600&&s<2800&&f<.45&&Vu()<2+(Re.diff==="ace"?1:0)&&(n.mslT=De(t.msl*.8,t.msl*1.3)/(1+r*.1)*(n.kind==="ace"?.7:1),no(n,M,"e"))}var Vu=()=>In.filter(n=>n.owner==="e").length;function Zv(n,e,t,i,s){let r=Ir[Re.diff],a=n.kind==="boss",o=zt(n.q),l=a?1150:880,c;n.st-=e,n.state==="run"?(c=new I(-n.pos.x,(l-n.pos.y)*.002,-n.pos.z).normalize(),Math.hypot(n.pos.x,n.pos.z)<380&&($v(n),n.state="egress",n.wp.copy(n.pos).addScaledVector(o.clone().setY(0).normalize(),2600),n.wp.x=vt(n.wp.x,-Xn+500,Xn-500),n.wp.z=vt(n.wp.z,-Xn+500,Xn-500),n.st=16)):(c=new I(n.wp.x-n.pos.x,(l-n.pos.y)*.002,n.wp.z-n.pos.z).normalize(),(n.st<=0||Math.hypot(n.wp.x-n.pos.x,n.wp.z-n.pos.z)<400)&&(n.state="run")),Jp(n,c,(a?.28:.34)*e,1.2),n.vel.copy(zt(n.q,o)).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),n.hp<n.maxHp*.5&&Math.random()<.8&&hn.emit(n.pos.x,n.pos.y,n.pos.z,{size:9,life:3,color:[.22,.2,.2],alpha:.5,spread:4,grow:1.6}),M.alive&&i<(a?1300:1e3)&&n.obj.userData.guns.forEach((u,d)=>{if(n.gunT[d]-=e,n.gunT[d]>0||(n.gunT[d]=De(.09,.14)*(a?.8:1),Math.random()<.35))return;let h=Gu.set(...u).applyQuaternion(n.q).add(n.pos),f=M.pos.clone().addScaledVector(M.vel,i/1e3*s),p=(1-s)*.06+.015,y=f.sub(h).normalize().add(new I(De(-p,p),De(-p,p),De(-p,p))).normalize();vi.add(h.clone(),y.multiplyScalar(1e3).add(n.vel),"e",3*r.dmg,Yp),i<900&&Math.random()<.3&&rt.gun()}),a&&(n.mslT-=e,M.alive&&n.mslT<=0&&i<3200&&Vu()<3&&(n.mslT=De(7,10),no(n,M,"e")))}function $v(n){let e=n.kind==="boss",t=e?28:17;Z.baseHp=Math.max(0,Z.baseHp-t),kn(e?"GUNSHIP HIT THE BASE!":"BASE HIT BY BOMBER!",!0),mM(),eo.userData.hits.slice().sort(()=>Math.random()-.5).slice(0,e?5:3).forEach(([i,s],r)=>ai.push({t:.3+r*.35,f:()=>io(new I(i,yn.height(i,s)+4,s),1.3)})),Z.baseHp<=0&&ai.push({t:2.2,f:()=>nm("base")})}function Jv(n,e,t,i,s){let r=Ir[Re.diff];if(n.cd-=e,!!M.alive){if(n.kind==="sam"&&i<3300&&n.cd<=0&&Vu()<3){n.cd=De(9,13)/(1+Z.cycle*.12),n.q.setFromRotationMatrix(Fs.lookAt(n.pos,M.pos,Yn)),n.speed=120;let a=no(n,M,"e",34);a.pos.y+=6,hn.emit(n.pos.x,n.pos.y+4,n.pos.z,{size:30,life:4,color:[.85,.8,.72],alpha:.6,spread:20,grow:1.5,must:!0})}if(n.kind==="aa"&&i<1800&&(n.cd<=0&&(n.cd=De(2.2,3.4),n.burst=10),n.burst>0&&(n.bt=(n.bt||0)-e)<=0)){n.bt=.09,n.burst--;let a=n.pos.clone().setY(n.pos.y+5),o=M.pos.clone().addScaledVector(M.vel,i/900*s),l=(1-s)*.05+.02,c=o.sub(a).normalize().add(new I(De(-l,l),De(-l,l),De(-l,l))).normalize();vi.add(a,c.multiplyScalar(900),"e",3.5*r.dmg,zv),i<1200&&rt.gun()}}}function no(n,e,t,i){let s=zt(n.q),r=as(n.q),a=pc();Je.add(a);let o=n.pos.clone().addScaledVector(r,(n.side=-(n.side||1))*(n.air===!1?1:3)).addScaledVector(Zp(n.q),-1.2);t==="e"&&e===M&&wn("ghost")&&(e=null);let l={mesh:a,pos:o,dir:s.clone(),speed:n.speed,target:e,owner:t,life:t==="p"?8:9,armed:.25,dmg:i};return In.push(l),(t==="p"||o.distanceTo(M.pos)<3e3)&&rt.launch(),t==="e"&&kn("MISSILE INBOUND",!0),l}function Hc(){if(Z.mode!=="play"||!M.alive)return;if(M.msl<=0){kn("NO MISSILES",!0);return}if(M.mslCd>0)return;let n=M.lock.locked?M.lock.t:null,e=wn("barrage");for(let t=0;t<M.m.salvo+(e?1:0)&&M.msl>0;t++)e||M.msl--,no(M,n,"p"),Z.shots++;M.mslCd=e?.14:.4,Os(),n||kn("NO LOCK \u2014 DUMBFIRE")}function Wu(){if(Z.mode!=="play"||!M.alive||M.flares<=0||M.flareCd>0)return;M.flares--,M.flareCd=1.2,rt.flare();let n=zt(M.q),e=as(M.q),t=yi.length;for(let i=0;i<6;i++)yi.push({pos:M.pos.clone(),vel:M.vel.clone().multiplyScalar(.6).addScaledVector(e,(i%2?1:-1)*De(30,70)).addScaledVector(Yn,De(-40,10)).addScaledVector(n,-40),life:3.5});In.forEach(i=>{i.owner==="e"&&i.target===M&&Math.random()<.85&&(i.target=yi[t+Math.floor(Math.random()*6)])})}function Kv(n){let e=as(n.q);for(let t=0;t<4;t++)yi.push({pos:n.pos.clone(),vel:n.vel.clone().multiplyScalar(.5).addScaledVector(e,(t%2?1:-1)*50).addScaledVector(Yn,-20),life:3});return yi[yi.length-1]}function io(n,e=1,t){for(let r=0;r<28*e;r++)Rn.emit(n.x,n.y,n.z,{size:De(12,26)*e,life:De(.5,1.1),color:[1,De(.45,.75),De(.15,.3)],alpha:1,spread:120*e,drag:3,grow:1.2});for(let r=0;r<6;r++)Rn.emit(n.x,n.y,n.z,{size:50*e,life:.25,color:[1,.9,.7],alpha:1,spread:10,grow:3,must:!0});for(let r=0;r<26*e;r++)hn.emit(n.x,n.y,n.z,{size:De(14,28)*e,life:De(3,6),color:[.2,.18,.17],alpha:.65,spread:70*e,drag:1.5,grow:1.8,rise:6});for(let r=0;r<14*e;r++){let a=new I(De(-1,1),De(-.2,1),De(-1,1)).normalize().multiplyScalar(De(80,200));Rn.emit(n.x,n.y,n.z,{size:4,life:De(1,2),color:[1,.7,.3],alpha:1,vx:a.x,vy:a.y,vz:a.z,drag:.4,grow:-.2})}let i=M?n.distanceTo(M.pos):1e3;t||rt.boom(i),M&&i<600&&(M.shake=Math.max(M.shake,(1-i/600)*1.2));let s=Ja[qp++%Ja.length];s.l.position.copy(n),s.l.intensity=4e5*e,s.t=.6}function Fp(n){if(!(!M.alive||Z.mode!=="play")){if(wn("shield")){M.shieldHit=.35;return}M.hp-=n,M.lastHit=Z.t,M.hitFlash=Math.min(1,M.hitFlash+n/30),M.shake=Math.max(M.shake,.5),rt.damage(),M.hp<=0&&Kp()}}function ja(n,e,t){if(n.dead||(n.hp-=e,n.hitT=.15,t||(Z.hits++,rt.hit(),Lc=.15),n.hp>0))return;if(n.dead=!0,n.spin=De(-3,3),io(n.pos,n.kind==="boss"?2.4:n.kind==="bomber"?1.4:n.air?.8:1.2),!n.air)for(let r=0;r<20;r++)hn.emit(n.pos.x,n.pos.y+5,n.pos.z,{size:De(20,40),life:De(6,10),color:[.12,.11,.1],alpha:.6,spread:20,grow:1.5,rise:12,must:!0});Z.comboT>0?Z.combo++:Z.combo=1,Z.comboT=6;let i=Fc[n.kind].pts*Z.combo;Z.score+=i,Z.kills++,Z.multi=Z.t-Z.lastKill<4?Z.multi+1:1,Z.lastKill=Z.t;let s=Fc[n.kind].label||"BANDIT";if(kn(`${Z.multi>=2?["","","DOUBLE KILL! ","TRIPLE KILL! ","MULTI KILL! "][Math.min(4,Z.multi)]:""}${s} DOWN  +${i}${Z.combo>1?"  \xD7"+Z.combo:""}`),M.m.scav&&(M.hp=Math.min(M.maxHp,M.hp+8)),Math.random()<(n.kind==="boss"?1:n.kind==="ace"||n.kind==="bomber"?.6:.22)&&Zn.length<8){let r=n.pos.clone();ai.push({t:.4,f:()=>Xu(n.kind==="boss"?"emp":null,r)})}(n.air&&Z.slowCd<=0||n.kind==="boss"||Z.multi>=2)&&(Z.slow=n.kind==="boss"?1.4:.5,Z.slowCd=7),In.forEach(r=>{r.target===n&&(r.target=null)})}var Lc=0;function kn(n,e){if(xi[0]&&xi[0].t===n){xi[0].life=2.6;return}xi.unshift({t:n,life:2.6,warn:e}),xi=xi.slice(0,4)}var Xa=new Ot,jv=new ln;function Qv(n){let e=kv(),t=M.J,i=t.agility*M.m.agile*(wn("overdrive")?1.4:1),s=zt(M.q),r=as(M.q);wn("overdrive")&&(e.ab=!0),M.I=e;let a=Math.asin(vt(r.y,-1,1)),o=Math.abs(s.y)>.8,l=e.pitch,c=e.roll,u=e.yaw;if(Re.control==="aim"&&!Ut)if(e.manual)Uu();else{let T=kc(),x=T.clone().applyQuaternion(Xa.copy(M.q).invert()),b=Math.acos(vt(-x.z,-1,1));if(x.z>.2)l=1,c=Math.sign(x.x||1);else{l=vt(x.y*5,-1,1);let L=vt(x.x*5,-1,1),C=vt(r.y*2.2,-1,1),D=vt(b/.2,0,1);c=rs(C,L,D),u=-vt(x.x*3,-1,1)*.6}}M.pullUp=!1;let d=M.pos.clone().addScaledVector(M.vel,2.2),h=yn.height(d.x,d.z),f=yn.height(M.pos.x,M.pos.z);(d.y<h+60||M.pos.y-f<70)&&M.vel.y<5&&(M.pullUp=!0,Re.assist&&(l=1,c=vt(r.y*3,-1,1)));let p=new I(l*1.3*i,u*.5,c*2.7*i);Re.assist&&Re.control!=="aim"&&Math.abs(c)<.05&&!o&&Math.abs(a)<1.3&&(p.z+=a*1.4),M.input={...e,pitch:l,roll:c},M.rate.lerp(p,Math.min(1,n*7)),Xa.setFromEuler(jv.set(M.rate.x*n,M.rate.y*n,-M.rate.z*n,"XYZ")),M.q.multiply(Xa),o||(Xa.setFromAxisAngle(Yn,-Math.sin(a)*.38*i*n*vt(M.speed/250,.6,1.2)),M.q.premultiply(Xa));let y=Math.hypot(M.pos.x,M.pos.z);if(M.out=y>Xn,y>Xn+400){let T=new I(-M.pos.x,0,-M.pos.z).normalize();M.q.rotateTowards(Oc.setFromRotationMatrix(Fs.lookAt(Ka,T,Yn)),.9*n),Uu()}M.pos.y>4500&&M.q.rotateTowards(Oc.setFromRotationMatrix(Fs.lookAt(Ka,s.clone().setY(-.4).normalize(),Yn)),.5*n),M.q.normalize(),zt(M.q,s),M.ab=e.ab;let m=e.ab?1:e.brake?.15:.62;M.thr=rs(M.thr,m,n*1.6);let g=330*t.speed*M.m.speed*(e.ab?1.28:1)*(wn("overdrive")?1.45:1),_=rs(150,g,M.thr)*(e.brake?.8:1);M.speed+=(_-M.speed)*.45*n-s.y*60*n,e.brake&&(M.speed-=40*n),M.speed=vt(M.speed,95,wn("overdrive")?780:540),M.vel.copy(s).multiplyScalar(M.speed),M.pos.addScaledVector(M.vel,n);let S=yn.height(M.pos.x,M.pos.z),v=M.pos.y-S;if(M.alt=v,v<4){M.pos.y=S+4,Kp(!0);return}M.gunCd-=n,M.mslCd-=n,M.flareCd-=n,M.heat=Math.max(0,M.heat-n*.45),M.over&&M.heat<.3&&(M.over=!1);let A=wn("minigun");if(e.gun&&!wn("laser")&&!M.over&&M.gunCd<=0){M.gunCd=A?1/46:1/16,M.heat+=A?0:.032*M.m.heat,M.heat>=1&&(M.over=!0,kn("GUN OVERHEAT",!0)),M.gunSide*=-1;let T=.0035,x=s.clone().add(new I(De(-T,T),De(-T,T),De(-T,T))).normalize();M.lead&&s.angleTo(M.lead.clone().sub(M.pos))<.085&&x.lerp(M.lead.clone().sub(M.pos).normalize(),.9).normalize(),vi.add(M.pos.clone().addScaledVector(s,9).addScaledVector(as(M.q),M.gunSide*1.2),x.multiplyScalar(1250).add(M.vel),"p",9*t.gun*M.m.gun*(A?1.7:1),Bv),Z.shots++,rt.gun()}if(M.mslT+=n*M.m.reload,M.mslT>6&&M.msl<M.mslMax&&(M.mslT=0,M.msl++,Os()),M.flareT+=n*M.m.flare,M.flareT>9&&M.flares<M.flareMax&&(M.flareT=0,M.flares++),Z.t-M.lastHit>5&&M.hp<M.maxHp&&(M.hp=Math.min(M.maxHp,M.hp+n*1.2*M.m.regen)),M.rate.length()>1.1&&M.speed>200){let T=t.span;[-1,1].forEach(x=>{let b=M.pos.clone().addScaledVector(as(M.q),x*(T+1)).addScaledVector(s,t.len*.2);hn.emit(b.x,b.y,b.z,{size:1.6,life:.7,color:[1,1,1],alpha:.45,grow:1.2,drag:0})})}M.hp<M.maxHp*.4&&Math.random()<.7&&hn.emit(M.pos.x,M.pos.y,M.pos.z,{size:4,life:2,color:[.2,.2,.2],alpha:.5,spread:2,grow:1.6})}function Kp(n){M.alive&&(M.alive=!1,M.hp=0,io(M.pos,2),M.obj.visible=!1,M.deadT=0,rt.silence(),kn(n?"CRASHED":"SHOT DOWN",!0),Z.reason=n?"crash":"shot",Z.view==="first"&&Yu("third",!0))}function eM(n){let e=M.lock,t=Re.control==="aim"&&!Ut?kc().clone():zt(M.q),i=null,s=.5;if(e.t&&!e.t.dead&&!e.t.remove){let o=e.t.pos.clone().sub(M.pos),l=t.angleTo(o);if(l<.6&&o.length()<3600){i=e.t,s=-1;for(let c of At){if(c===e.t||c.dead)continue;let u=c.pos.clone().sub(M.pos),d=t.angleTo(u);if(u.length()<3600&&d<.12&&d<l*.4){i=c;break}}}}if(!i)for(let o of At){if(o.dead)continue;let l=o.pos.clone().sub(M.pos),c=l.length(),u=t.angleTo(l);c<3600&&u<s&&(s=u,i=o)}if(i!==e.t&&(e.t=i,e.k=0,e.locked=!1),e.t){let o=e.locked;e.k+=n*M.m.lock*(wn("barrage")?8:1),e.locked=e.k>.7,e.tick-=n,e.tick<=0&&(e.tick=e.locked?.5:.16,e.locked?rt.locked(!0):rt.lockTick()),!o&&e.locked&&kn("LOCKED \u2014 FIRE! [SPACE]")}M.lead=null;let r=1e9,a=zt(M.q);for(let o of At){if(o.dead)continue;let l=o.pos.clone().sub(M.pos),c=l.length();c>1600||a.angleTo(l)>.5||c<r&&(r=c,M.lead=o.pos.clone().addScaledVector(o.vel.clone().sub(M.vel),c/1250),M.leadT=o)}}function tM(){let n=zt(M.q),e=At.filter(i=>!i.dead&&n.angleTo(i.pos.clone().sub(M.pos))<.6&&i.pos.distanceTo(M.pos)<3600);if(!e.length)return;let t=e.indexOf(M.lock.t);M.lock.t=e[(t+1)%e.length],M.lock.k=0,M.lock.locked=!1,rt.click()}var Tc=an(),Op=an();function Fu(n,e,t){Tc.subVectors(t,e);let i=Tc.lengthSq(),s=i?Op.subVectors(n,e).dot(Tc)/i:0;return s=vt(s,0,1),Op.copy(e).addScaledVector(Tc,s).distanceTo(n)}var Bc=n=>n.kind==="boss"?34:n.kind==="bomber"?26:n.air?16:10,zn={overdrive:{icon:"\u26A1",name:"OVERDRIVE",sub:"Mach-melting speed + turn rate",col:"#4fd8ff",dur:15},minigun:{icon:"\u{1F525}",name:"MINIGUN",sub:"3\xD7 fire rate, no overheat, heavy rounds",col:"#ff8a2b",dur:14},laser:{icon:"\u{1F506}",name:"DEATH RAY",sub:"Hold fire to melt anything in front",col:"#ff3df2",dur:10},barrage:{icon:"\u{1F680}",name:"ENDLESS MISSILES",sub:"Unlimited missiles, instant lock",col:"#ffcf4a",dur:14},swarm:{icon:"\u{1F41D}",name:"SWARM",sub:"14 seeker missiles at every bandit",col:"#ffe25a",dur:0},shield:{icon:"\u{1F6E1}",name:"FORCE FIELD",sub:"Invulnerable \u2014 ram them out of the sky",col:"#5cff9d",dur:14},warp:{icon:"\u23F3",name:"TIME WARP",sub:"Everything else slows to a crawl",col:"#b58cff",dur:9},ghost:{icon:"\u{1F47B}",name:"STEALTH",sub:"Missiles can't track you, bullets miss",col:"#cfd6e0",dur:12},emp:{icon:"\u2622",name:"SHOCKWAVE",sub:"Wipes out everything nearby",col:"#ff4f5e",dur:0},repair:{icon:"\u{1F49A}",name:"FULL REPAIR",sub:"Hull, missiles and flares refilled",col:"#3dff8f",dur:0}},Ou=Object.keys(zn),Bp={overdrive:3,minigun:3,laser:2,barrage:3,swarm:3,shield:2,warp:2,ghost:2,emp:1,repair:2},Zn=[],wn=n=>M&&M.pw&&M.pw[n]>0,Iu={};function nM(n){if(Iu[n])return Iu[n];let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),i=zn[n];t.fillStyle="rgba(0,0,0,.35)",t.beginPath(),t.arc(64,64,54,0,7),t.fill(),t.strokeStyle=i.col,t.lineWidth=7,t.beginPath(),t.arc(64,64,54,0,7),t.stroke(),t.font='64px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(i.icon,64,70);let s=new kt(e);return s.colorSpace=Et,Iu[n]=new Vn({map:s,depthTest:!0,fog:!1})}var wc={ring:new Fn(22,2.2,8,40),core:new _a(9,1),halo:new Yt(30,20,14)};function iM(){let n=0;Ou.forEach(t=>n+=Bp[t]);let e=Math.random()*n;for(let t of Ou)if(e-=Bp[t],e<=0)return t;return"repair"}function Xu(n,e){n=n||iM();let t=new Pe(zn[n].col),i=new Pt,s=(c,u)=>{let d=new Ge(c,new Bt({color:t,transparent:!0,opacity:u,blending:Gt,depthWrite:!1,fog:!1}));return i.add(d),d},r=s(wc.ring,.95),a=s(wc.ring,.6);a.rotation.y=Math.PI/2;let o=s(wc.core,.85);s(wc.halo,.12);let l=new ui(nM(n));if(l.scale.set(34,34,1),l.position.y=0,i.add(l),!e){let c=zt(M.q);e=M.pos.clone().addScaledVector(c,De(900,1700)).add(new I(De(-700,700),De(-150,250),De(-700,700)))}e.y=Math.max(e.y,yn.height(e.x,e.z)+160),i.position.copy(e),Je.add(i),Zn.push({kind:n,obj:i,pos:i.position,life:40,r1:r,r2:a,core:o,t:De(0,6)})}function sM(n){let e=n.kind,t=zn[e];rt.locked(!0),setTimeout(()=>rt.locked(!0),90);for(let i=0;i<40;i++)Rn.emit(n.pos.x,n.pos.y,n.pos.z,{size:De(6,14),life:De(.4,.9),color:new Pe(t.col).toArray(),alpha:1,spread:160,drag:2,grow:1});if(Zu(`${t.icon} ${t.name}`,t.sub),kn(`${t.icon} ${t.name}!`),Z.score+=50,t.dur&&(M.pw[e]=Math.max(M.pw[e]||0,0)+t.dur),e==="repair"&&(M.hp=M.maxHp,M.msl=M.mslMax,M.flares=M.flareMax,M.heat=0,M.over=!1,Os()),e==="swarm"){let i=At.filter(s=>!s.dead).sort((s,r)=>s.pos.distanceTo(M.pos)-r.pos.distanceTo(M.pos));for(let s=0;s<14;s++){let r=i.length?i[s%i.length]:null;ai.push({t:s*.07,f:()=>{if(M.alive){let a=no(M,r&&!r.dead?r:null,"p");a.mesh.scale.setScalar(.7),a.swarm=!0}}})}}e==="emp"&&rM(),e==="barrage"&&(M.msl=M.mslMax,Os()),jp()}var Qa=[];function rM(){let n=M.pos.clone();rt.boom(0),M.shake=1.4,Z.slow=.8,Z.slowCd=4;let e=new Ge(new Fn(1,.06,8,64),new Bt({color:"#ffd0d6",transparent:!0,blending:Gt,depthWrite:!1,fog:!1}));e.rotation.x=Math.PI/2,e.position.copy(n);let t=new Ge(new Yt(1,32,20),new Bt({color:"#ff6a7a",transparent:!0,opacity:.35,blending:Gt,depthWrite:!1,side:Tn,fog:!1}));t.position.copy(n),Je.add(e,t),Qa.push({ring:e,ball:t,t:0});let i=Ja[qp++%Ja.length];i.l.position.copy(n),i.l.intensity=2e6,i.t=1,At.forEach(s=>{if(s.dead)return;let r=s.pos.distanceTo(n);r<2400&&ai.push({t:r/2400*.9,f:()=>ja(s,s.kind==="boss"?1100:99999,!0)})}),In.forEach(s=>{s.owner==="e"&&(s.life=0)})}var ss=null;function zc(n,e,t){if(!ss){ss=new Pt;let i=(s,r,a)=>{let o=new Ge(new qt(s,s,1,10,1,!0).rotateX(Math.PI/2).translate(0,0,.5),new Bt({color:r,transparent:!0,opacity:a,blending:Gt,depthWrite:!1,fog:!1}));ss.add(o)};i(.9,"#ffffff",1),i(2.4,"#ff3df2",.55),i(6,"#ff3df2",.18),Je.add(ss)}ss.visible=n,n&&(ss.position.copy(e),ss.lookAt(t),ss.scale.set(1+Math.random()*.3,1+Math.random()*.3,e.distanceTo(t)))}function aM(n,e){for(let s in M.pw)M.pw[s]>0&&(M.pw[s]-=n,M.pw[s]<=0&&(M.pw[s]=0,kn(`${zn[s].icon} ${zn[s].name} ENDED`,!0)));if(Z.pwT=(Z.pwT??6)-n,Z.pwT<=0&&Zn.length<5&&M.alive&&(Z.pwT=De(9,15),Xu()),Zn=Zn.filter(s=>(s.t+=n,s.life-=n,s.r1.rotation.x+=n*1.6,s.r1.rotation.y+=n*1.1,s.r2.rotation.z+=n*2.2,s.core.rotation.y+=n*2,s.core.scale.setScalar(1+Math.sin(s.t*5)*.12),s.obj.position.y+=Math.sin(s.t*1.5)*.25,s.life<5&&(s.obj.visible=Math.sin(s.t*20)>0),M.alive&&s.pos.distanceTo(M.pos)<55?(sM(s),Je.remove(s.obj),!1):s.life<=0?(Je.remove(s.obj),!1):!0)),Qa=Qa.filter(s=>{s.t+=n;let r=s.t*2700;return s.ring.scale.set(r,r,r*1.5),s.ball.scale.setScalar(r*.9),s.ring.material.opacity=Math.max(0,1-s.t/.95),s.ball.material.opacity=Math.max(0,.35*(1-s.t/.95)),s.t>1?(Je.remove(s.ring,s.ball),!1):!0}),wn("shield")){M.shieldMesh.visible=!0,M.shieldMesh.material.uniforms.uT.value=Z.t,M.shieldMesh.material.uniforms.uHit.value=M.shieldHit||0,M.shieldHit=Math.max(0,(M.shieldHit||0)-n*2);for(let s of At)!s.dead&&s.air&&s.pos.distanceTo(M.pos)<48+Bc(s)&&(ja(s,99999,!0),kn("RAMMED!"))}else M.shieldMesh&&(M.shieldMesh.visible=!1);let t=zt(M.q);if(wn("laser")&&e&&e.gun&&M.alive){let s=M.pos.clone().addScaledVector(t,10),r=M.pos.clone().addScaledVector(t,3200);for(let a=100;a<3200;a+=100){let o=M.pos.clone().addScaledVector(t,a);if(o.y<yn.height(o.x,o.z)){r.copy(o);break}}for(let a of At)!a.dead&&Fu(a.pos,s,r)<Bc(a)+10&&(ja(a,420*n,!0),Math.random()<.5&&Rn.emit(a.pos.x,a.pos.y,a.pos.z,{size:De(8,16),life:.3,color:[1,.5,1],alpha:1,spread:40}));Rn.emit(r.x,r.y,r.z,{size:De(10,20),life:.25,color:[1,.6,1],alpha:1,spread:30}),zc(!0,s,r),Math.random()<n*20&&rt.gun()}else zc(!1)}function jp(){let n=Te("#pw");if(!n||!M)return;let e=Ou.filter(t=>M.pw[t]>0);[...n.children].forEach(t=>{e.includes(t.dataset.k)||t.remove()}),e.forEach(t=>{let i=n.querySelector(`[data-k="${t}"]`);i||(i=document.createElement("div"),i.className="pwi",i.dataset.k=t,i.style.setProperty("--c",zn[t].col),i.innerHTML=`<b>${zn[t].icon}</b><span>${zn[t].name}</span><em></em><i></i>`,n.appendChild(i)),i.querySelector("i").style.width=Math.min(100,M.pw[t]/zn[t].dur*100).toFixed(1)+"%",i.querySelector("em").textContent=Math.ceil(M.pw[t])+"s",i.classList.toggle("low",M.pw[t]<3)})}function Qp(n){Z.t+=n,M.alive?(Qv(n),eM(n)):M.deadT+=n;let e=wn("warp")?n*.3:n;aM(n,M.I),wn("ghost")&&In.forEach(i=>{i.owner==="e"&&i.target===M&&(i.target=null)}),At.forEach(i=>Yv(i,e));let t=an();vi.list=vi.list.filter(i=>{let s=i.owner==="p"?n:e;if(i.life-=s,i.life<=0)return!1;if(t.copy(i.p).addScaledVector(i.v,s),i.owner==="p"){for(let r of At)if(!r.dead&&Math.abs(r.pos.x-i.p.x)<260&&Fu(r.pos,i.p,t)<Bc(r))return ja(r,i.dmg),Rn.emit(t.x,t.y,t.z,{size:6,life:.25,color:[1,.8,.4],alpha:1,spread:20}),!1}else if(M.alive&&Fu(M.pos,i.p,t)<(wn("ghost")?1.5:9))return Fp(i.dmg),!1;return t.y<yn.height(t.x,t.z)?(hn.emit(t.x,t.y+2,t.z,{size:6,life:1.4,color:[.82,.66,.45],alpha:.6,spread:6,grow:1.5,vy:8}),!1):(i.p.copy(t),!0)}),In=In.filter(i=>{let s=n;{let r=i.owner==="p"?s:e;i.life-=r,i.armed-=r,i.speed=Math.min(i.owner==="p"?780:560,i.speed+420*r);let a=i.target,o=null;if(a&&a.pos&&!a.remove&&(a.life===void 0||a.life>0)&&(o=a.pos.clone(),a.vel&&o.addScaledVector(a.vel,vt(o.distanceTo(i.pos)/i.speed,0,2)*.6)),o){let u=o.sub(i.pos).normalize(),d=i.dir.angleTo(u),h=(i.owner==="p"?2.7*M.m.seeker:1.5)*r;d>1e-4&&i.dir.lerp(u,Math.min(1,h/d)).normalize()}i.owner==="p"&&a&&a.obj&&a.air&&!a.dead&&!a.flared&&i.pos.distanceTo(a.pos)<900&&a.state==="evade"&&Math.random()<r*.6&&(i.target=Kv(a),a.flared=!0),i.pos.addScaledVector(i.dir,i.speed*r),i.mesh.position.copy(i.pos),i.mesh.quaternion.setFromRotationMatrix(Fs.lookAt(Ka,i.dir,Yn));let l=Gu.copy(i.pos).addScaledVector(i.dir,-2);Rn.emit(l.x,l.y,l.z,{size:3.2,life:.12,color:[1,.75,.4],alpha:1,grow:-2}),hn.emit(l.x,l.y,l.z,{size:2.6,life:3.2,color:[.9,.9,.88],alpha:.5,spread:1,grow:1.5,drag:1});let c=i.life<=0||i.pos.y<yn.height(i.pos.x,i.pos.z);if(!c&&i.armed<=0){if(i.owner==="p"){for(let u of At)if(!u.dead&&u.pos.distanceTo(i.pos)<Bc(u)+10){ja(u,u.kind==="boss"?320:u.kind==="bomber"?260:999,!0),c=!0;break}}else M.alive&&M.pos.distanceTo(i.pos)<20&&(Fp((i.dmg||42)*Ir[Re.diff].dmg),c=!0);!c&&a&&a.life!==void 0&&a.pos.distanceTo(i.pos)<15&&(c=!0)}return c?(io(i.pos,i.swarm?.45:.6),Je.remove(i.mesh),!1):!0}}),yi=yi.filter(i=>(i.life-=n,i.vel.y-=30*n,i.vel.multiplyScalar(Math.exp(-.6*n)),i.pos.addScaledVector(i.vel,n),Rn.emit(i.pos.x,i.pos.y,i.pos.z,{size:7,life:.15,color:[1,.9,.7],alpha:1,grow:-1}),hn.emit(i.pos.x,i.pos.y,i.pos.z,{size:3,life:1.6,color:[.95,.95,.95],alpha:.35,grow:1.4}),i.life>0)),At=At.filter(i=>i.remove?(Je.remove(i.obj),M.lock.t===i&&(M.lock.t=null),!1):!0),ai=ai.filter(i=>(i.t-=n,i.t<=0?(i.f(),!1):!0)),Z.comboT-=n,M.alive&&!At.length&&Z.mode==="play"&&!Z.clearing&&oM(),!M.alive&&M.deadT>3.2&&Z.mode==="play"&&nm(Z.reason)}function oM(){Z.clearing=!0;let n=250*Z.wave;Z.score+=n,Zu(`WAVE ${Z.wave} CLEAR`,`+${n} bonus`),rt.win(),M.hp=Math.min(M.maxHp,M.hp+M.maxHp*.35),M.msl=M.mslMax,M.flares=M.flareMax,Os(),Z.baseHp=Math.min(100,Z.baseHp+10),ai.push({t:2.4,f:lM})}function em(){Z.wave++,Z.clearing=!1,Wv(Z.wave);let n=Z.spec;Zu(`WAVE ${Z.wave}: ${n.name}`,n.obj),Te("#obj").textContent=n.obj}var Bu=[];function lM(){if(!M.alive)return;Z.mode="perk",document.pointerLockElement&&document.exitPointerLock(),rt.silence(),document.body.classList.remove("playing"),Bu=Ov.filter(e=>e[0]!=="salvo"||M.m.salvo<2).sort(()=>Math.random()-.5).slice(0,3),Te("#perkCards").innerHTML=Bu.map((e,t)=>`<button class="pcard" data-i="${t}" style="--d:${t*.08}s"><i>${e[1]}</i><b>${e[2]}</b><span>${e[3]}</span><small>${t+1}</small></button>`).join(""),Te("#perkWave").textContent=`Wave ${Z.wave+1}: ${$p(Z.wave+1).name}`,Te("#perk").classList.add("on")}function qu(n){let e=Bu[n];if(!e||Z.mode!=="perk")return;rt.click();let t=M.m;({gun:()=>t.gun*=1.3,lock:()=>t.lock*=1.8,pylon:()=>{M.mslMax+=3,M.msl=M.mslMax,t.reload*=1.4},hull:()=>{M.maxHp+=35,M.hp=M.maxHp},flare:()=>{M.flareMax+=6,M.flares=M.flareMax,t.flare*=2},engine:()=>t.speed*=1.12,agile:()=>t.agile*=1.15,cool:()=>t.heat*=.6,seeker:()=>t.seeker*=1.35,regen:()=>t.regen*=3,scav:()=>t.scav=1,salvo:()=>t.salvo=2})[e[0]](),M.perks.push(e),Os(),Te("#perks").innerHTML=M.perks.map(i=>`<i title="${i[2]}">${i[1]}</i>`).join(""),Te("#perk").classList.remove("on"),Z.mode="play",document.body.classList.add("playing"),Re.control==="aim"&&!Ut&&to(),kn(e[2].toUpperCase()+" EQUIPPED"),ai.push({t:1.5,f:em})}Te("#perkCards").onclick=n=>{let e=n.target.closest(".pcard");e&&qu(+e.dataset.i)};function Yu(n,e){Z.view=n,An.visible=n==="first"&&M&&M.alive,M&&(M.obj.visible=n!=="first"&&M.alive),e||(Re.view=n,Ic())}function Gc(){Yu(Z.view==="first"?"third":"first"),kn(Z.view==="first"?"COCKPIT VIEW":"CHASE VIEW")}function cM(n){if(window.__camFreeze)return;if(Z.mode==="menu"){innerWidth<=760?je.setViewOffset(innerWidth,innerHeight,0,innerHeight*.26,innerWidth,innerHeight):je.clearViewOffset();let i=performance.now()/1e3*.12,s=rn.position;je.position.set(s.x+Math.sin(i)*34,s.y+7+Math.sin(i*.7)*3,s.z+Math.cos(i)*34),je.up.set(0,1,0),je.lookAt(s.x+(innerWidth>900?-6:0),s.y,s.z),je.fov=innerWidth<=760?58:45,je.updateProjectionMatrix();return}if(je.view&&je.clearViewOffset(),!M.alive){let i=M.deadT*.4;je.position.lerp(M.pos.clone().add(new I(Math.sin(i)*160,70,Math.cos(i)*160)),n*2),je.up.set(0,1,0),je.lookAt(M.pos);return}let e=M.shake*(Z.view==="first"?.25:.9);M.shake*=Math.exp(-n*4);let t=vt(1.1/je.aspect,1,1.7);if(Z.view==="first")je.position.copy(M.pos).add(new I(0,An.userData.eyeY??1.25,An.userData.eyeZ??-M.J.len*.26).applyQuaternion(M.q)),je.quaternion.copy(M.q),je.fov=rs(je.fov,74+(M.ab?6:0),n*3);else if(Re.control==="aim"&&!Ut){let i=kc();M.camQ.setFromRotationMatrix(Fs.lookAt(Ka,i,Yn));let s=new I(0,(4.5+M.J.len*.12)*t,(19+M.J.len*.6)*t).applyQuaternion(M.camQ);je.position.copy(M.pos).add(s),je.quaternion.copy(M.camQ),je.rotateX(-.05),je.fov=rs(je.fov,64+vt((M.speed-250)*.05,0,12)+(M.ab?4:0),n*3)}else{M.camQ.slerp(M.q,Math.min(1,n*4.5));let i=new I(0,(5+M.J.len*.12)*t,(20+M.J.len*.55)*t).applyQuaternion(M.camQ);je.position.copy(M.pos).add(i),je.quaternion.copy(M.camQ),je.rotateX(-.09),je.fov=rs(je.fov,66+vt((M.speed-250)*.05,0,12)+(M.ab?4:0),n*3)}e>.01&&je.position.add(new I(De(-1,1),De(-1,1),De(-1,1)).multiplyScalar(e)),je.updateProjectionMatrix()}var Ds=Te("#hud"),tm=Ds.getContext("2d"),xn=0,Zt=0,Za=1,Ns="#3dff8f",qn="#ff4f5e",Ar="#ffcf4a",zu="#7fd0ff",Ac=an(),hM=new Ot;function Ls(n){return Ac.copy(n).project(je),{x:(Ac.x+1)/2*xn,y:(1-Ac.y)/2*Zt,front:Ac.z<1}}function Lu(n,e,t,i,s=1){let r=e.clone().sub(je.position).applyQuaternion(hM.copy(je.quaternion).invert()),a=Math.atan2(-r.y,r.x),o=xn/2,l=Zt/2;n.save(),n.translate(o+Math.cos(a)*i,l+Math.sin(a)*i),n.rotate(a),n.fillStyle=t,n.beginPath(),n.moveTo(12*s,0),n.lineTo(-8*s,-8*s),n.lineTo(-8*s,8*s),n.closePath(),n.fill(),n.restore()}function uM(n,e){let t=tm;if(t.setTransform(Za,0,0,Za,0,0),t.clearRect(0,0,xn,Zt),Z.mode!=="play"&&Z.mode!=="paused")return;t.lineWidth=2,t.font='600 12px "Share Tech Mono",monospace',t.textBaseline="middle";let i=zt(M.q),s=xn/2,r=Zt/2,a=Math.min(xn,Zt);if(M.alive){let o=Ls(M.pos.clone().addScaledVector(i,700));if(o.front){t.strokeStyle=M.over?qn:Ns,t.beginPath(),t.arc(o.x,o.y,16,0,7),t.stroke(),t.beginPath();for(let[h,f]of[[-28,-20],[20,28]])t.moveTo(o.x+h,o.y),t.lineTo(o.x+f,o.y),t.moveTo(o.x,o.y+h),t.lineTo(o.x,o.y+f);t.stroke(),t.fillStyle=t.strokeStyle,t.fillRect(o.x-1.5,o.y-1.5,3,3),Lc>0&&(t.strokeStyle="#fff",t.beginPath(),[[1,1],[1,-1],[-1,1],[-1,-1]].forEach(([h,f])=>{t.moveTo(o.x+h*8,o.y+f*8),t.lineTo(o.x+h*15,o.y+f*15)}),t.stroke())}if(Re.control==="aim"&&!Ut){let h=Ls(M.pos.clone().addScaledVector(kc(),2e3));h.front&&(t.strokeStyle="rgba(255,255,255,.9)",t.lineWidth=1.5,t.beginPath(),t.arc(h.x,h.y,7,0,7),t.stroke(),t.fillStyle="#fff",t.fillRect(h.x-1,h.y-1,2,2),o.front&&Math.hypot(h.x-o.x,h.y-o.y)>24&&(t.strokeStyle="rgba(255,255,255,.25)",t.setLineDash([2,6]),t.beginPath(),t.moveTo(h.x,h.y),t.lineTo(o.x,o.y),t.stroke(),t.setLineDash([])))}else if(Re.control==="stick"&&!Ut&&Pn.moved){let h=s+Pn.x*xn/2,f=r+Pn.y*Zt/2;t.strokeStyle="rgba(61,255,143,.5)",t.beginPath(),t.arc(h,f,6,0,7),t.stroke()}if(Z.view==="first"){let h=as(M.q),f=Math.atan2(-h.y,Zp(M.q).y),p=Math.asin(vt(i.y,-1,1)),y=Zt/(je.fov*Math.PI/180);t.save(),t.translate(s,r),t.rotate(f),t.strokeStyle="rgba(61,255,143,.75)",t.fillStyle="rgba(61,255,143,.75)",t.textAlign="left",t.lineWidth=1.5;for(let m=-60;m<=60;m+=10){let g=(p*180/Math.PI-m)*y*Math.PI/180;if(Math.abs(g)>Zt*.32)continue;let _=m===0?260:90;m<0&&t.setLineDash([8,6]),t.beginPath(),t.moveTo(-_,g),t.lineTo(-40,g),t.moveTo(40,g),t.lineTo(_,g),t.stroke(),t.setLineDash([]),m&&t.fillText(Math.abs(m),_+6,g)}t.restore()}Zn.forEach(h=>{let f=Ls(h.pos),p=h.pos.distanceTo(M.pos),y=zn[h.kind].col;if(!f.front||f.x<0||f.y<0||f.x>xn||f.y>Zt){p<2600&&Lu(t,h.pos,y,a*.38,.9);return}t.strokeStyle=y,t.lineWidth=2,t.beginPath(),t.arc(f.x,f.y,16,0,7),t.stroke(),t.fillStyle=y,t.textAlign="center",t.font='700 11px "Share Tech Mono",monospace',t.fillText(zn[h.kind].name+"  "+Math.round(p)+"m",f.x,f.y-26),t.font='600 12px "Share Tech Mono",monospace'});let l=eo.userData.center,c=Ls(l);if(c.front&&c.x>0&&c.x<xn&&c.y>0&&c.y<Zt&&(t.strokeStyle=zu,t.lineWidth=1.5,t.strokeRect(c.x-10,c.y-10,20,20),t.fillStyle=zu,t.textAlign="center",t.fillText("BASE",c.x,c.y-18)),At.forEach(h=>{if(h.dead)return;let f=Ls(h.pos),p=h.pos.distanceTo(M.pos),y=M.lock,m=y.t===h,g=h.kind==="bomber"||h.kind==="boss";if(!f.front||f.x<0||f.y<0||f.x>xn||f.y>Zt){Lu(t,h.pos,m?qn:g?Ar:"rgba(255,120,100,.8)",a*.42,g?1.4:1);return}let _=vt(1600/p*14*(g?1.8:1),12,g?60:36);if(t.strokeStyle=m?y.locked?qn:Ar:h.air?"rgba(255,255,255,.85)":"rgba(255,190,120,.9)",t.lineWidth=m?2.5:1.6,m&&!y.locked){t.save(),t.translate(f.x,f.y),t.rotate(e*4);let A=1.6-Math.min(1,y.k/.7)*.6;t.strokeRect(-_*A,-_*A,_*2*A,_*2*A),t.restore()}else m&&(t.beginPath(),t.moveTo(f.x,f.y-_*1.3),t.lineTo(f.x+_*1.3,f.y),t.lineTo(f.x,f.y+_*1.3),t.lineTo(f.x-_*1.3,f.y),t.closePath(),t.stroke(),t.fillStyle=qn,t.textAlign="center",t.fillText("LOCK",f.x,f.y-_*1.3-12));if(h.air){t.beginPath();for(let[A,T]of[[-1,-1],[1,-1],[1,1],[-1,1]])t.moveTo(f.x+A*_,f.y+T*_*.45),t.lineTo(f.x+A*_,f.y+T*_),t.lineTo(f.x+A*_*.45,f.y+T*_);t.stroke()}else t.beginPath(),t.moveTo(f.x,f.y-_),t.lineTo(f.x+_,f.y),t.lineTo(f.x,f.y+_),t.lineTo(f.x-_,f.y),t.closePath(),t.stroke();h.hitT>0&&(t.fillStyle="rgba(255,255,255,.5)",t.fillRect(f.x-_,f.y-_,_*2,_*2)),t.fillStyle="rgba(255,255,255,.85)",t.textAlign="left",t.fillText((p/1e3).toFixed(1)+"km",f.x+_+6,f.y+_-4);let S=Fc[h.kind].label;S&&(t.fillStyle=g||h.kind==="ace"?Ar:"rgba(255,190,120,.95)",t.fillText(S,f.x+_+6,f.y-_+6));let v=Math.max(0,h.hp)/h.maxHp;t.fillStyle="rgba(0,0,0,.4)",t.fillRect(f.x-_,f.y+_+5,_*2,3),t.fillStyle=v>.5?Ns:v>.25?Ar:qn,t.fillRect(f.x-_,f.y+_+5,_*2*v,3)}),M.lead){let h=Ls(M.lead);h.front&&(t.strokeStyle=Ns,t.lineWidth=2,t.beginPath(),t.arc(h.x,h.y,9,0,7),t.stroke(),t.beginPath(),t.arc(h.x,h.y,2,0,7),t.fillStyle=Ns,t.fill())}let u=In.filter(h=>h.owner==="e"&&h.target===M);u.length&&(M.warnT-=n,M.warnT<=0&&(M.warnT=.55,rt.warn()),Math.floor(e*4)%2&&(t.fillStyle=qn,t.font='700 22px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Ut?"\u26A0 MISSILE \u2014 HIT FLR":"\u26A0 MISSILE \u2014 PRESS F FOR FLARES",s,Zt*.26)),u.forEach(h=>{let f=Ls(h.pos);f.front&&f.x>0&&f.x<xn&&f.y>0&&f.y<Zt?(t.strokeStyle=qn,t.lineWidth=2,t.beginPath(),t.arc(f.x,f.y,14,0,7),t.stroke()):Lu(t,h.pos,qn,a*.3,1.4)})),M.pullUp&&(M.pullT-=n,M.pullT<=0&&(M.pullT=.7,rt.pullup()),Math.floor(e*3)%2&&(t.fillStyle=qn,t.font='700 26px "Orbitron",sans-serif',t.textAlign="center",t.fillText(Re.assist?"AUTO PULL-UP":"PULL UP",s,Zt*.68))),M.out&&(t.fillStyle=Ar,t.font='700 18px "Orbitron",sans-serif',t.textAlign="center",t.fillText("LEAVING COMBAT AREA \u2014 TURN BACK",s,Zt*.2)),t.font='600 12px "Share Tech Mono",monospace',t.lineWidth=1.5;let d=Math.min(340,xn*.5-92);zp(t,s-d,r,Math.round(M.speed*1.94),"KTS",-1),zp(t,s+d,r,Math.round(M.pos.y*3.28),"ALT",1,`R ${Math.round(M.alt*3.28)}`),(!Ut||xn>700)&&dM(t,s,74)}if(t.textAlign="center",xi.forEach((o,l)=>{o.life-=n||.016,!(o.life<=0)&&(t.globalAlpha=Math.min(1,o.life*2),t.fillStyle=o.warn?qn:"#fff",t.font=`700 ${l?15:20}px "Orbitron",sans-serif`,t.fillText(o.t,s,Zt*.36-l*24))}),t.globalAlpha=1,xi=xi.filter(o=>o.life>0),M.hitFlash>0){M.hitFlash=Math.max(0,M.hitFlash-n*1.4);let o=t.createRadialGradient(s,r,a*.3,s,r,a*.8);o.addColorStop(0,"rgba(255,40,40,0)"),o.addColorStop(1,`rgba(255,40,40,${M.hitFlash*.55})`),t.fillStyle=o,t.fillRect(0,0,xn,Zt)}Z.slow>0&&(t.fillStyle="rgba(255,255,255,.04)",t.fillRect(0,0,xn,Zt)),Lc=Math.max(0,Lc-n),fM(t),pM()}function zp(n,e,t,i,s,r,a){n.save(),n.translate(e,t),n.strokeStyle="rgba(61,255,143,.55)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign=r<0?"right":"left",n.beginPath(),n.rect(r<0?-66:0,-220/2,66,220),n.clip();let c=s==="ALT"?500:50,u=44;for(let h=Math.floor(i/c)-3;h<=Math.floor(i/c)+3;h++){let f=(i-h*c)/c*u;h<0||(n.beginPath(),n.moveTo(0,f),n.lineTo(r*12,f),n.stroke(),n.fillText(h*c,r*16,f))}n.restore(),n.save(),n.translate(e,t),n.fillStyle="rgba(8,10,8,.75)",n.strokeStyle=Ns,n.lineWidth=1.5;let d=r<0?-76:0;n.fillRect(d,-14,76,28),n.strokeRect(d,-14,76,28),n.fillStyle="#fff",n.font='700 15px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(i,d+76/2,0),n.fillStyle=Ns,n.font='600 10px "Share Tech Mono",monospace',n.fillText(s,d+76/2,-220/2-12),a&&n.fillText(a,d+76/2,220/2+12),n.restore()}function dM(n,e,t){let i=zt(M.q),s=(Math.atan2(i.x,-i.z)*180/Math.PI+360)%360,r=300,a=4;n.save(),n.translate(e,t),n.beginPath(),n.rect(-r/2,-16,r,40),n.clip(),n.strokeStyle="rgba(61,255,143,.6)",n.fillStyle="rgba(61,255,143,.85)",n.textAlign="center",n.lineWidth=1.5;for(let o=Math.floor((s-40)/5)*5;o<=s+40;o+=5){let l=(o-s)*a,c=(o+360)%360;n.beginPath(),n.moveTo(l,4),n.lineTo(l,c%10?9:13),n.stroke(),c%30===0&&n.fillText({0:"N",90:"E",180:"S",270:"W"}[c]||String(c/10).padStart(2,"0"),l,-6)}n.restore(),n.fillStyle="#fff",n.beginPath(),n.moveTo(e,t+15),n.lineTo(e-6,t+24),n.lineTo(e+6,t+24),n.fill(),n.font='700 12px "Share Tech Mono",monospace',n.textAlign="center",n.fillText(String(Math.round(s)).padStart(3,"0")+"\xB0",e,t+34)}function fM(n){let e=Ut?52:74,t=xn-e-18,i=Ut?e+70:Zt-e-18,s=5e3,r=zt(M.q),a=Math.atan2(r.x,-r.z);n.save(),n.translate(t,i),n.fillStyle="rgba(8,12,8,.62)",n.beginPath(),n.arc(0,0,e,0,7),n.fill(),n.strokeStyle="rgba(61,255,143,.35)",n.lineWidth=1,[1,.66,.33].forEach(d=>{n.beginPath(),n.arc(0,0,e*d,0,7),n.stroke()}),n.beginPath(),n.moveTo(-e,0),n.lineTo(e,0),n.moveTo(0,-e),n.lineTo(0,e),n.stroke();let o=performance.now()/1e3*2%(Math.PI*2);if(n.createConicGradient){let d=n.createConicGradient(o-.6,0,0);d.addColorStop(0,"rgba(61,255,143,0)"),d.addColorStop(.1,"rgba(61,255,143,.22)"),d.addColorStop(.1001,"rgba(61,255,143,0)"),n.fillStyle=d,n.beginPath(),n.arc(0,0,e,0,7),n.fill()}let l=d=>{let h=d.x-M.pos.x,f=d.z-M.pos.z,p=Math.atan2(h,-f)-a,y=Math.min(1,Math.hypot(h,f)/s)*e;return[Math.sin(p)*y,-Math.cos(p)*y]},[c,u]=l(eo.userData.center);n.fillStyle=zu,n.fillRect(c-4,u-4,8,8),Zn.forEach(d=>{let[h,f]=l(d.pos);n.fillStyle=zn[d.kind].col,n.beginPath(),n.moveTo(h,f-5),n.lineTo(h+5,f),n.lineTo(h,f+5),n.lineTo(h-5,f),n.fill()}),At.forEach(d=>{if(d.dead)return;let[h,f]=l(d.pos);n.fillStyle=d===M.lock.t?qn:d.air?"#ff8a6a":"#ffb070",d.air?(n.beginPath(),n.arc(h,f,d.kind==="boss"||d.kind==="bomber"?5.5:3.5,0,7),n.fill()):n.fillRect(h-3,f-3,6,6)}),In.forEach(d=>{let[h,f]=l(d.pos);n.fillStyle=d.owner==="e"?qn:Ar,n.beginPath(),n.arc(h,f,2,0,7),n.fill()}),n.fillStyle=Ns,n.beginPath(),n.moveTo(0,-7),n.lineTo(5,6),n.lineTo(0,3),n.lineTo(-5,6),n.closePath(),n.fill(),n.restore()}var kp=0;function pM(){let n=performance.now();if(n-kp<120)return;kp=n,jp(),Te("#sScore").textContent=Z.score.toLocaleString(),Te("#sWave").textContent=Z.wave,Te("#sLeft").textContent=At.filter(t=>!t.dead).length,Te("#sCombo").textContent=Z.combo>1&&Z.comboT>0?"\xD7"+Z.combo:"";let e=Math.max(0,M.hp/M.maxHp);Te("#hpBar").style.width=e*100+"%",Te("#hpBar").style.background=e>.5?"var(--acc)":e>.25?"#ffcf4a":"#ff4f5e",Te("#hpTxt").textContent=Math.round(e*100)+"%",Te("#heat").style.width=M.heat*100+"%",Te("#heat").style.background=M.over?"#ff4f5e":M.heat>.7?"#ffcf4a":"var(--acc)",Te("#flr").textContent=M.flares,Te("#thr").style.height=M.thr*100+"%",Te("#thr").classList.toggle("ab",!!M.ab),Te("#baseBar").style.width=Z.baseHp+"%",Te("#baseBar").style.background=Z.baseHp>50?"#7fd0ff":Z.baseHp>25?"#ffcf4a":"#ff4f5e",Te("#baseTxt").textContent=Math.round(Z.baseHp)+"%"}function Os(){Te("#msl").innerHTML=Array.from({length:M.mslMax},(n,e)=>`<i class="${e<M.msl?"on":""}"></i>`).join(""),M.obj.userData.msls.forEach((n,e)=>n.visible=e<Math.min(M.msl,M.obj.userData.msls.length)),(An.userData.msls||[]).forEach((n,e)=>n.visible=e<Math.min(M.msl,An.userData.msls.length))}function mM(){let n=Te("#baseWrap");n.classList.remove("hit"),n.offsetWidth,n.classList.add("hit")}function gM(n){if(!An.visible||(n*10|0)%2)return;let[e,t]=An.userData.mfds,i=e.g;i.fillStyle="#071007",i.fillRect(0,0,128,96),i.strokeStyle="#3f7a2a",i.beginPath(),i.arc(64,54,38,0,7),i.stroke(),i.fillStyle="#3dff8f",i.font="10px monospace",i.fillText("RDR",6,12);let s=zt(M.q),r=Math.atan2(s.x,-s.z);At.forEach(a=>{if(a.dead)return;let o=a.pos.x-M.pos.x,l=a.pos.z-M.pos.z,c=Math.atan2(o,-l)-r,u=Math.min(1,Math.hypot(o,l)/4500)*38;i.fillStyle="#ff6a4a",i.fillRect(64+Math.sin(c)*u-2,54-Math.cos(c)*u-2,4,4)}),e.t.needsUpdate=!0,i=t.g,i.fillStyle="#071007",i.fillRect(0,0,128,96),i.fillStyle="#3dff8f",i.font="11px monospace",i.fillText("SMS",6,12),i.fillText(`MSL ${M.msl}/${M.mslMax}`,10,34),i.fillText(`FLR ${M.flares}`,10,50),i.fillText(`HULL ${Math.round(M.hp/M.maxHp*100)}%`,10,66),i.fillStyle=M.over?"#ff4f5e":"#3dff8f",i.fillRect(10,76,108*M.heat,6),t.t.needsUpdate=!0,An.userData.stick.rotation.z=-(M.input?.roll||0)*.25,An.userData.stick.rotation.x=.3+(M.input?.pitch||0)*.2}function Zu(n,e){let t=Te("#banner");t.innerHTML=`<b>${n}</b><span>${e||""}</span>`,t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}var xM=["Move the mouse to aim. Your jet flies toward the white circle.","Hold LEFT CLICK to fire guns. Lead targets with the green pipper.","Keep a bandit near your aim until it says LOCK, then SPACE or RIGHT CLICK fires a missile.","Missile inbound? Press F to drop flares.","SHIFT is afterburner. V switches to the cockpit.","Defend the base in the middle of the map when bombers come."],_M=["Use the stick on the left to fly.","Hold GUN to shoot. Lead targets with the green pipper.","Keep a bandit in front until it says LOCK, then tap MSL.","Missile inbound? Tap FLR for flares.","Defend the base in the middle when bombers come."],ku=0,Dc=0;function yM(n){if(!Z.tips||(Dc-=n,Dc>0))return;let e=Ut||Re.control==="stick"?_M:xM;if(ku>=e.length){Z.tips=!1,Te("#tip").classList.remove("on"),Us.set("jkstrike-tut",1);return}Te("#tip").textContent=e[ku++],Te("#tip").classList.remove("on"),Te("#tip").offsetWidth,Te("#tip").classList.add("on"),Dc=6}function Vc(){Hv(),rt.init(),rn&&(Je.remove(rn),rn=null),At.forEach(n=>Je.remove(n.obj)),In.forEach(n=>Je.remove(n.mesh)),At=[],In=[],yi=[],vi.list=[],hn.clear(),Rn.clear(),Pr.clear(),xi=[],ai=[],Zn.forEach(n=>Je.remove(n.obj)),Zn=[],Qa.forEach(n=>Je.remove(n.ring,n.ball)),Qa=[],zc(!1),M=Vv(),M.q.setFromRotationMatrix(Fs.lookAt(M.pos,new I(0,800,0),Yn)),M.camQ.copy(M.q),Uu(),Z={mode:"play",wave:0,score:0,kills:0,shots:0,hits:0,combo:0,comboT:0,view:Re.view,t:0,baseHp:100,cycle:0,slow:0,slowCd:0,multi:0,lastKill:-9,clearing:!1,tips:!Us.get("jkstrike-tut",0)},Yu(Re.view,!0),Os(),Te("#perks").innerHTML="",em(),ku=0,Dc=1.5,Uc(".screen").forEach(n=>n.classList.remove("on")),Te("#play").classList.add("on"),document.body.classList.add("playing"),Te("#help").style.opacity=1,setTimeout(()=>Te("#help").style.opacity=0,9e3),Te("#clickfly").classList.remove("on"),Re.control==="aim"&&!Ut&&to()}function Cr(){Z.mode==="play"&&M.alive?(Z.mode="paused",Te("#pause").classList.add("on"),rt.silence(),document.body.classList.remove("playing"),Te("#pView").textContent=Z.view==="first"?"Cockpit":"Chase",document.pointerLockElement&&document.exitPointerLock()):Z.mode==="paused"&&(Z.mode="play",Te("#pause").classList.remove("on"),document.body.classList.add("playing"),Re.control==="aim"&&!Ut&&to())}function nm(n){if(Z.mode==="over")return;Z.mode="over",document.body.classList.remove("playing"),document.pointerLockElement&&document.exitPointerLock(),rt.silence();let e=Us.get("jkstrike-best",0),t=Z.score>e;t&&Us.set("jkstrike-best",Z.score),Te("#oScore").textContent=Z.score.toLocaleString(),Te("#oTitle").textContent=t&&Z.score>0?"New high score!":n==="base"?"Base destroyed":n==="crash"?"Crashed":"Shot down",Te("#oStats").innerHTML=`<div><b>${Z.wave}</b><span>Wave</span></div><div><b>${Z.kills}</b><span>Kills</span></div><div><b>${Z.shots?Math.round(Z.hits/Z.shots*100):0}%</b><span>Gun accuracy</span></div><div><b>${Math.max(e,Z.score).toLocaleString()}</b><span>Best</span></div>`,Te("#oPerks").innerHTML=M.perks.length?M.perks.map(i=>`<span>${i[1]} ${i[2]}</span>`).join(""):"",Te("#over").classList.add("on")}function $u(){Z={mode:"menu"},Zn.forEach(n=>Je.remove(n.obj)),Zn=[],zc(!1),At.forEach(n=>Je.remove(n.obj)),In.forEach(n=>Je.remove(n.mesh)),At=[],In=[],yi=[],vi.list=[],ai=[],M&&(Je.remove(M.obj),M=null),An.visible=!1,rt.silence(),Uc(".modal").forEach(n=>n.classList.remove("on")),Uc(".screen").forEach(n=>n.classList.remove("on")),Te("#menu").classList.add("on"),document.body.classList.remove("playing"),Te("#clickfly").classList.remove("on"),Hu(),sm()}Te("#pause").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(rt.click(),e==="resume"&&Cr(),e==="view"&&(Gc(),Te("#pView").textContent=Z.view==="first"?"Cockpit":"Chase"),e==="restart"&&(Te("#pause").classList.remove("on"),Vc()),e==="menu"&&$u())};Te("#over").onclick=n=>{let e=n.target.closest("[data-a]")?.dataset.a;e&&(rt.click(),Te("#over").classList.remove("on"),e==="again"?Vc():$u())};function im(){let n=rt.toggle();Te("#snd").textContent=n?"\u{1F50A}":"\u{1F507}"}Te("#snd").onclick=()=>{rt.init(),im()};Te("#snd").textContent=rt.on?"\u{1F50A}":"\u{1F507}";function Hu(){rn&&Je.remove(rn),rn=Cs(Re.jet,Re.paint),rn.position.set(-900,1150,1800),rn.rotation.y=.6,Je.add(rn),rn.userData.msls.forEach(n=>n.visible=!0)}function sm(){Te("#mJets").innerHTML=Object.entries(is).map(([n,e])=>`<button class="jcard ${Re.jet===n?"on":""}" data-jet="${n}"><b>${e.name}</b><small>${e.blurb}</small>
    <div class="mini"><span>SPD</span><i style="--v:${e.speed*80}%"></i><span>AGL</span><i style="--v:${e.agility*75}%"></i><span>ARM</span><i style="--v:${e.hp/1.6}%"></i><span>MSL</span><i style="--v:${e.missiles/.13}%"></i></div></button>`).join(""),Te("#mPaint").innerHTML=Object.entries(Ga).filter(([n])=>n!=="red").map(([n,e])=>`<button class="sw ${Re.paint===n?"on":""}" data-paint="${n}" title="${e[2]}" style="background:linear-gradient(135deg,${e[0]} 50%,${e[1]} 50%)"></button>`).join(""),Te("#mDiff").innerHTML=Object.entries(Ir).map(([n,e])=>`<button class="chip ${Re.diff===n?"on":""}" data-diff="${n}">${e.name}</button>`).join(""),Te("#mView").innerHTML=[["third","Chase"],["first","Cockpit"]].map(([n,e])=>`<button class="chip ${Re.view===n?"on":""}" data-view="${n}">${e}</button>`).join(""),Te("#mCtrl").innerHTML=Ut?'<span class="chip on">Touch stick</span>':[["aim","Mouse aim (easiest)"],["stick","Mouse joystick"]].map(([n,e])=>`<button class="chip ${Re.control===n?"on":""}" data-ctrl="${n}">${e}</button>`).join("")+[["low","Slow"],["mid","Normal"],["high","Fast"]].map(([n,e])=>`<button class="chip ${Re.sens===n?"on":""}" data-sens="${n}">${e}</button>`).join(""),Te("#mOpts").innerHTML=[["invert","Invert pitch"],["assist","Flight assist + auto pull-up"]].map(([n,e])=>`<button class="chip ${Re[n]?"on":""}" data-opt="${n}">${Re[n]?"\u2713 ":""}${e}</button>`).join(""),Te("#mQual").innerHTML=[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]].map(([n,e])=>`<button class="chip ${Re.quality===n?"on":""}" data-qual="${n}">${e}</button>`).join(""),Te("#mBest").textContent=Us.get("jkstrike-best",0).toLocaleString()}Te("#menu").onclick=n=>{let e=n.target.closest("button");if(!e)return;rt.init(),rt.click();let t=e.dataset;if(t.jet&&(Re.jet=t.jet,Hu()),t.paint&&(Re.paint=t.paint,Hu()),t.diff&&(Re.diff=t.diff),t.view&&(Re.view=t.view),t.opt&&(Re[t.opt]=!Re[t.opt]),t.ctrl&&(Re.control=t.ctrl),t.sens&&(Re.sens=t.sens),t.qual){Re.quality=t.qual,Ic(),location.reload();return}if(e.id==="mGo"){Ic(),Vc();return}Ic(),sm()};function rm(){let n=innerWidth,e=innerHeight;vn.setPixelRatio(gi),vn.setSize(n,e,!1),je.aspect=n/e,je.updateProjectionMatrix(),Za=Math.min(devicePixelRatio||1,1.5),xn=n,Zt=e,Ds.width=n*Za,Ds.height=e*Za,Ds.style.width=n+"px",Ds.style.height=e+"px"}addEventListener("resize",rm);document.addEventListener("visibilitychange",()=>{document.hidden&&Z.mode==="play"&&Cr()});function Du(n,e,t){let i=n.userData;i.flames.length&&(i.flames[0].userData.b===void 0&&i.flames.forEach(s=>s.userData.b=s.scale.x),i.flames.forEach((s,r)=>s.scale.set(s.userData.b,s.userData.b,s.userData.b*e*(r%2?1:1.12))),i.glowMat&&(i.glowMat.opacity=t?1:.6),i.flameMat&&M&&n===M.obj&&(i.flameMat.opacity=t?.9:.5,i.flameMat.color.set(t?"#ffb45e":"#ff9a4a")))}var Rc=16,Cc=0;function vM(n){if(Re.quality!=="auto"||(Rc=rs(Rc,n*1e3,.05),Cc-=n,Cc>0))return;let e=Math.min(devicePixelRatio||1,Nu.auto.max),t=gi;Rc>21&&gi>.6?t=Math.max(.6,gi-.15):Rc<14.5&&gi<e&&(t=Math.min(e,gi+.1)),t!==gi?(gi=t,vn.setPixelRatio(gi),vn.setSize(innerWidth,innerHeight,!1),Cc=2):Cc=.5}var qa=an(),Nc=0;function MM(){Nc++;let n=(e,t,i)=>{Nc%i||e.userData.glows.forEach(s=>{qa.copy(s.position),e.userData.body.localToWorld(qa),Pr.emit(qa.x,qa.y,qa.z,{size:2.6,life:5.5,color:[1,1,1],alpha:Math.min(.55,(t.y-1550)/900),grow:1.2,drag:0})})};if(M.alive&&M.pos.y>1600&&n(M.obj,M.pos,1),At.forEach(e=>{e.air&&!e.dead&&e.pos.y>1600&&e.pos.distanceTo(M.pos)<3500&&n(e.obj,e.pos,2)}),M.alive&&M.alt<90&&M.speed>120&&Nc%2===0){let e=zt(M.q),t=M.pos.x-e.x*25,i=M.pos.z-e.z*25,s=yn.height(t,i)+3;hn.emit(t,s,i,{size:10+Math.random()*8,life:2.6,color:[.86,.7,.5],alpha:.5*(1-M.alt/90),spread:14,grow:1.4,vy:10,drag:1.2})}}var Hp=performance.now();function am(n){requestAnimationFrame(am);let e=(n-Hp)/1e3,t=Math.min(.05,e);Hp=n;let i=n/1e3;if(e<.2&&vM(e),Z.mode==="play"){Z.slow>0&&(Z.slow-=t,t*=.3),Z.slowCd-=t;let a=Math.min(3,Math.ceil(t*60-.01));for(let o=0;o<a;o++)Qp(t/a);yM(t)}Z.mode==="over"&&M&&(M.deadT+=t);let s=M?M.pos:rn?rn.position:an();M&&(M.obj.position.copy(M.pos),M.obj.quaternion.copy(M.q),M.obj.userData.body.rotation.z=-(M.rate?.z||0)*.04,Du(M.obj,M.ab?1.35+Math.random()*.3:.3+M.thr*.45,M.ab),M.obj.userData.strobe.visible=i*1.4%1<.08),rn&&(rn.position.y=1150+Math.sin(i*.8)*2,rn.userData.body.rotation.z=Math.sin(i*.6)*.06,Du(rn,.45+Math.random()*.08,!1)),At.forEach(a=>{a.obj.position.copy(a.pos),a.obj.quaternion.copy(a.q),a.air&&(Du(a.obj,.55+Math.random()*.15,!1),a.obj.userData.strobe.visible=(i*1.2+a.id)%1<.08)}),eo.userData.radar.rotation.y=i*1.2,Ja.forEach(a=>{a.t<=0||(a.t-=t,a.l.intensity=a.t<=0?0:a.l.intensity*Math.exp(-t*9))}),cM(t),Bi.position.copy(s).addScaledVector(Vp,1200),Bi.target.position.copy(s),Wp.position.copy(je.position);let r=vn.domElement.height/(2*Math.tan(je.fov*Math.PI/360));hn.update(t,Pc,r*2),Rn.update(t,Pc,r*2),Pr.update(t,Pc,r*2),Xp.material.uniforms.scale.value=r,Z.mode==="play"&&MM(),vi.draw(),M&&Z.mode==="play"&&rt.engine(M.alive?M.thr:0,M.ab&&M.alive,M.alive?M.speed:0,Z.view==="first"),Z.mode==="play"&&Re.control==="aim"&&!Ut&&Nc%30===0&&Te("#clickfly").classList.toggle("on",!document.pointerLockElement),Z.mode==="play"||Z.mode==="paused"?(uM(Z.mode==="play"?t:0,i),gM(i)):tm.clearRect(0,0,Ds.width,Ds.height),vn.render(Je,je)}rm();$u();Rp();{let n=["viper","raptor","striker"].map(t=>Cs(t,"red",!0)).concat([Va(!1),Va(!0),Mc("sam"),Mc("aa")]),e=pc();n.forEach((t,i)=>{t.position.set(i*60,1200,0),Je.add(t)}),Je.add(e),Rn.emit(0,1200,0,{must:!0}),hn.emit(0,1200,0,{must:!0}),Pr.emit(0,1200,0,{must:!0});try{vn.compile(Je,je)}catch{}n.forEach(t=>Je.remove(t)),Je.remove(e)}requestAnimationFrame(am);setTimeout(()=>{let n=Te("#loading");n.style.opacity=0,n.style.pointerEvents="none",setTimeout(()=>n.remove(),600)},200);window.__jet={renderer:vn,scene:Je,cam:je,get menuJet(){return rn},get G(){return Z},get P(){return M},get enemies(){return At},step:Qp,startGame:Vc,fireMissile:Hc,dropFlares:Wu,toggleView:Gc,choosePerk:qu,S:Re,keys:Rr,mouse:Pn,aim:_n,spawnPickup:Xu,get pickups(){return Zn}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
