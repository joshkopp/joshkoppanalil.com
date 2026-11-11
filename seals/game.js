var td=0,qc=1,nd=2;var ds=1,id=2,js=3,Vi=0,Xt=1,jn=2,Si=0,Wi=1,gn=2,Yc=3,Zc=4,sd=5;var fs=100,rd=101,ad=102,od=103,ld=104,cd=200,hd=201,ud=202,dd=203,Jc=204,$c=205,fd=206,pd=207,md=208,gd=209,xd=210,_d=211,vd=212,yd=213,Md=214,mo=0,go=1,xo=2,zs=3,_o=4,vo=5,yo=6,Mo=7,Kc=0,Sd=1,bd=2,ei=0,ra=1,aa=2,oa=3,ps=4,la=5,ca=6,ha=7;var Qc=300,ms=301,er=302,Ko=303,Qo=304,_i=1e3,Zn=1001,So=1002,zt=1003,Ed=1004;var ua=1005;var nn=1006,jo=1007;var bi=1008;var on=1009,jc=1010,eh=1011,tr=1012,el=1013,zn=1014,xn=1015,It=1016,tl=1017,nl=1018,gs=1020,th=35902,nh=35899,ih=1021,sh=1022,kn=1023,vi=1026,Ei=1027,rh=1028,il=1029,Xi=1030,sl=1031;var rl=1033,da=33776,fa=33777,pa=33778,ma=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37488,pl=37489,ga=37490,ml=37491,gl=37808,xl=37809,_l=37810,vl=37811,yl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,Tl=37817,wl=37818,Al=37819,Rl=37820,Cl=37821,Pl=36492,Il=36494,Ll=36495,Dl=36283,Nl=36284,xa=36285,Ul=36286;var Ur=2300,bo=2301,fo=2302,Oc=2303,Bc=2400,zc=2401,kc=2402;var Td=3200;var Fl=0,wd=1,Ti="",St="srgb",Fr="srgb-linear",Or="linear",it="srgb";var po=7680;var Ad=519,Rd=512,Cd=513,Pd=514,ah=515,Id=516,Ld=517,oh=518,lh=519,ch=35044,hh=35048;var uh="300 es",An=2e3,ks=2001;function hp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function up(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dd(){let n=Br("canvas");return n.style.display="block",n}var bu={},Hs=null;function zr(...n){let e="THREE."+n.shift();Hs?Hs("log",e,...n):console.log(e,...n)}function Nd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=Nd(n);let e="THREE."+n.shift();if(Hs)Hs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ke(...n){n=Nd(n);let e="THREE."+n.shift();if(Hs)Hs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function rs(...n){let e=n.join(" ");e in bu||(bu[e]=!0,Oe(...n))}function Ud(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Fd={[mo]:mo,[xo]:yo,[_o]:_o,[zs]:vo,[go]:go,[yo]:xo,[Mo]:Mo,[vo]:zs},Jn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eu=1234567,Ir=Math.PI/180,Gs=180/Math.PI;function qi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function dh(n,e){return(n%e+e)%e}function dp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function fp(n,e,t){return n!==e?(t-n)/(e-n):0}function Lr(n,e,t){return(1-t)*n+t*e}function pp(n,e,t,i){return Lr(n,e,1-Math.exp(-t*i))}function mp(n,e=1){return e-Math.abs(dh(n,e*2)-e)}function gp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function _p(n,e){return n+Math.floor(Math.random()*(e-n+1))}function vp(n,e){return n+Math.random()*(e-n)}function yp(n){return n*(.5-Math.random())}function Mp(n){n!==void 0&&(Eu=n);let e=Eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sp(n){return n*Ir}function bp(n){return n*Gs}function Ep(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Tp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function wp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*p,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*p,o*c);break;case"ZYZ":n.set(l*p,l*d,o*h,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ol(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ph(n,e){if(e.constructor===Float32Array)return n;let t=Ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function mh(n,e){if(e.constructor===Float32Array)return n;let t=Ol(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var _a={DEG2RAD:Ir,RAD2DEG:Gs,generateUUID:qi,clamp:Ze,euclideanModulo:dh,mapLinear:dp,inverseLerp:fp,lerp:Lr,damp:pp,pingpong:mp,smoothstep:gp,smootherstep:xp,randInt:_p,randFloat:vp,randFloatSpread:yp,seededRandom:Mp,degToRad:Sp,radToDeg:bp,isPowerOfTwo:Ep,ceilPowerOfTwo:Tp,floorPowerOfTwo:fh,setQuaternionFromProperEuler:wp,normalize:mh,denormalize:ph},Mh=class Mh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Mh.prototype.isVector2=!0;var ce=Mh,an=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(u!==_||l!==f||c!==d||h!==p){let g=l*f+c*d+h*p+u*_;g<0&&(f=-f,d=-d,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+_*o}else{l=l*m+f*o,c=c*m+d*o,h=h*m+p*o,u=u*m+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),d=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>u){let d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){let d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Sh=class Sh{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Sh.prototype.isVector3=!0;var P=Sh,fc=new P,Tu=new an,bh=class bh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],_=s[0],g=s[3],m=s[6],v=s[1],S=s[4],M=s[7],w=s[2],T=s[5],x=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*g+o*S+l*T,r[6]=a*m+o*M+l*x,r[1]=c*_+h*v+u*w,r[4]=c*g+h*S+u*T,r[7]=c*m+h*M+u*x,r[2]=f*_+d*v+p*w,r[5]=f*g+d*S+p*T,r[8]=f*m+d*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+i*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=u*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pc.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};bh.prototype.isMatrix3=!0;var Ge=bh,pc=new Ge,wu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Au=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ap(){let n={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ti?Or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Fr]:{primaries:e,whitePoint:i,transfer:Or,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:i,transfer:it,toXYZ:wu,fromXYZ:Au,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),n}var $e=Ap();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ms,Eo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=Br("canvas")),Ms.width=e.width,Ms.height=e.height;let s=Ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Rp=0,Vs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(mc(s[a].image)):r.push(mc(s[a]))}else r=mc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function mc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Eo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Cp=0,gc=new P,sn=class n extends Jn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=nn,a=bi,o=kn,l=on,c=n.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=qi(),this.name="",this.source=new Vs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _i:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case So:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _i:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case So:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Qc;sn.DEFAULT_ANISOTROPY=1;var Eh=class Eh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(d+1)/2,w=(m+1)/2,T=(h+f)/4,x=(u+_)/4,E=(p+g)/4;return S>M&&S>w?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=T/i,r=x/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=E/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=x/r,s=E/r),this.set(i,s,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eh.prototype.isVector4=!0;var gt=Eh,To=class extends Jn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new sn({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Vs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends To{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},kr=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wo=class extends sn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $o=class $o{constructor(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,g)}set(e,t,i,s,r,a,o,l,c,h,u,f,d,p,_,g){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){let f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pp,e,Ip)}lookAt(e,t,i){let s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Pi.crossVectors(i,dn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Pi.crossVectors(i,dn)),Pi.normalize(),Ha.crossVectors(dn,Pi),s[0]=Pi.x,s[4]=Ha.x,s[8]=dn.x,s[1]=Pi.y,s[5]=Ha.y,s[9]=dn.y,s[2]=Pi.z,s[6]=Ha.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],_=i[6],g=i[10],m=i[14],v=i[3],S=i[7],M=i[11],w=i[15],T=s[0],x=s[4],E=s[8],N=s[12],C=s[1],L=s[5],O=s[9],H=s[13],A=s[2],F=s[6],z=s[10],k=s[14],ee=s[3],X=s[7],te=s[11],ie=s[15];return r[0]=a*T+o*C+l*A+c*ee,r[4]=a*x+o*L+l*F+c*X,r[8]=a*E+o*O+l*z+c*te,r[12]=a*N+o*H+l*k+c*ie,r[1]=h*T+u*C+f*A+d*ee,r[5]=h*x+u*L+f*F+d*X,r[9]=h*E+u*O+f*z+d*te,r[13]=h*N+u*H+f*k+d*ie,r[2]=p*T+_*C+g*A+m*ee,r[6]=p*x+_*L+g*F+m*X,r[10]=p*E+_*O+g*z+m*te,r[14]=p*N+_*H+g*k+m*ie,r[3]=v*T+S*C+M*A+w*ee,r[7]=v*x+S*L+M*F+w*X,r[11]=v*E+S*O+M*z+w*te,r[15]=v*N+S*H+M*k+w*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15],v=l*d-c*f,S=o*d-c*u,M=o*f-l*u,w=a*d-c*h,T=a*f-l*h,x=a*u-o*h;return t*(_*v-g*S+m*M)-i*(p*v-g*w+m*T)+s*(p*S-_*w+m*x)-r*(p*M-_*T+g*x)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=t*o-i*a,S=t*l-s*a,M=t*c-r*a,w=i*l-s*o,T=i*c-r*o,x=s*c-r*l,E=h*_-u*p,N=h*g-f*p,C=h*m-d*p,L=u*g-f*_,O=u*m-d*_,H=f*m-d*g,A=v*H-S*O+M*L+w*C-T*N+x*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/A;return e[0]=(o*H-l*O+c*L)*F,e[1]=(s*O-i*H-r*L)*F,e[2]=(_*x-g*T+m*w)*F,e[3]=(f*T-u*x-d*w)*F,e[4]=(l*C-a*H-c*N)*F,e[5]=(t*H-s*C+r*N)*F,e[6]=(g*M-p*x-m*S)*F,e[7]=(h*x-f*M+d*S)*F,e[8]=(a*O-o*C+c*E)*F,e[9]=(i*C-t*O-r*E)*F,e[10]=(p*T-_*M+m*v)*F,e[11]=(u*M-h*T-d*v)*F,e[12]=(o*N-a*L-l*E)*F,e[13]=(t*L-i*N+s*E)*F,e[14]=(_*S-p*w-g*v)*F,e[15]=(h*w-u*S+f*v)*F,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,_=a*h,g=a*u,m=o*u,v=l*c,S=l*h,M=l*u,w=i.x,T=i.y,x=i.z;return s[0]=(1-(_+m))*w,s[1]=(d+M)*w,s[2]=(p-S)*w,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+m))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(p+S)*x,s[9]=(g-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Ss.set(s[0],s[1],s[2]).length(),o=Ss.set(s[4],s[5],s[6]).length(),l=Ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Nn.copy(this);let c=1/a,h=1/o,u=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=h,Nn.elements[5]*=h,Nn.elements[6]*=h,Nn.elements[8]*=u,Nn.elements[9]*=u,Nn.elements[10]*=u,t.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),d=(i+s)/(i-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===An)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===ks)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-s),f=-(t+e)/(t-e),d=-(i+s)/(i-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===An)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===ks)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};$o.prototype.isMatrix4=!0;var rt=$o,Ss=new P,Nn=new rt,Pp=new P(0,0,0),Ip=new P(1,1,1),Pi=new P,Ha=new P,dn=new P,Ru=new rt,Cu=new an,On=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Lp=0,Pu=new P,bs=new an,ui=new rt,Ga=new P,Er=new P,Dp=new P,Np=new an,Iu=new P(1,0,0),Lu=new P(0,1,0),Du=new P(0,0,1),Nu={type:"added"},Up={type:"removed"},Es={type:"childadded",child:null},xc={type:"childremoved",child:null},kt=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new On,i=new an,s=new P(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new Ge}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(Iu,e)}rotateY(e){return this.rotateOnAxis(Lu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Iu,e)}translateY(e){return this.translateOnAxis(Lu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ga.copy(e):Ga.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Er,Ga,this.up):ui.lookAt(Ga,Er,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nu),Es.child=e,this.dispatchEvent(Es),Es.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nu),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,e,Dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Np,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new P(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fp={type:"move"},Ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Vt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Va={h:0,s:0,l:0};function _c(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ne=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=dh(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=_c(a,r,e+1/3),this.g=_c(a,r,e),this.b=_c(a,r,e-1/3)}return $e.colorSpaceToWorking(this,s),this}setStyle(e,t=St){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){let i=Od[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return $e.workingToColorSpace(Jt.copy(this),e),Math.round(Ze(Jt.r*255,0,255))*65536+Math.round(Ze(Jt.g*255,0,255))*256+Math.round(Ze(Jt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(Jt.copy(this),t);let i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=St){$e.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,s=Jt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Va);let i=Lr(Ii.h,Va.h,t),s=Lr(Ii.s,Va.s,t),r=Lr(Ii.l,Va.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ne;Ne.NAMES=Od;var Gr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},as=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new P,di=new P,vc=new P,fi=new P,Ts=new P,ws=new P,Uu=new P,yc=new P,Mc=new P,Sc=new P,bc=new gt,Ec=new gt,Tc=new gt,gi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Un.subVectors(s,t),di.subVectors(i,t),vc.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(di),l=Un.dot(vc),c=di.dot(di),h=di.dot(vc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return bc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),bc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,i),Tc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(Tc,r.z),a}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),di.subVectors(e,t),Un.cross(di).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Un.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Ts.subVectors(s,i),ws.subVectors(r,i),yc.subVectors(e,i);let l=Ts.dot(yc),c=ws.dot(yc);if(l<=0&&c<=0)return t.copy(i);Mc.subVectors(e,s);let h=Ts.dot(Mc),u=ws.dot(Mc);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(Ts,a);Sc.subVectors(e,r);let d=Ts.dot(Sc),p=ws.dot(Sc);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(ws,o);let g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return Uu.subVectors(r,s),o=(u-h)/(u-h+(d-p)),t.copy(s).addScaledVector(Uu,o);let m=1/(g+_+f);return a=_*m,o=f*m,t.copy(i).addScaledVector(Ts,a).addScaledVector(ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ui=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wa.copy(i.boundingBox)),Wa.applyMatrix4(e.matrixWorld),this.union(Wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Xa.subVectors(this.max,Tr),As.subVectors(e.a,Tr),Rs.subVectors(e.b,Tr),Cs.subVectors(e.c,Tr),Li.subVectors(Rs,As),Di.subVectors(Cs,Rs),ts.subVectors(As,Cs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ts.z,ts.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ts.z,0,-ts.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ts.y,ts.x,0];return!wc(t,As,Rs,Cs,Xa)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,As,Rs,Cs,Xa))?!1:(qa.crossVectors(Li,Di),t=[qa.x,qa.y,qa.z],wc(t,As,Rs,Cs,Xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Wa=new Ui,As=new P,Rs=new P,Cs=new P,Li=new P,Di=new P,ts=new P,Tr=new P,Xa=new P,qa=new P,ns=new P;function wc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ns.fromArray(n,r);let o=s.x*Math.abs(ns.x)+s.y*Math.abs(ns.y)+s.z*Math.abs(ns.z),l=e.dot(ns),c=t.dot(ns),h=i.dot(ns);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var At=new P,Ya=new ce,Op=0,Bt=class extends Jn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Op++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=xn,this.version=0,this._normalizationScale=e!==void 0?Ol(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ya.fromBufferAttribute(this,t),Ya.applyMatrix3(e),this.setXY(t,Ya.x,Ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ph(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mh(e,this.array)}};var Vr=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Wr=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Bp=new Ui,wr=new P,Ac=new P,yi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Bp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(wr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(Ac)),this.expandByPoint(wr.copy(e.center).sub(Ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},zp=0,wn=new rt,Rc=new kt,Ps=new P,fn=new Ui,Ar=new Ui,Ot=new P,et=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?Wr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ar.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(fn.min,Ar.min),fn.expandByPoint(Ot),Ot.addVectors(fn.max,Ar.max),fn.expandByPoint(Ot)):(fn.expandByPoint(Ar.min),fn.expandByPoint(Ar.max))}fn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ot.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(e,c),Ot.add(Ps)),s=Math.max(s,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Bt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new P,l[N]=new P;let h=new P,u=new P,f=new P,d=new ce,p=new ce,_=new ce,g=new P,m=new P;function v(N,C,L){c[N]=c[C]=c[L]=1,h.fromBufferAttribute(i,N),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,L),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),u.sub(h),f.sub(h),p.sub(d),_.sub(d);let O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(O),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(O),o[N].add(g),o[C].add(g),o[L].add(g),l[N].add(m),l[C].add(m),l[L].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,C=S.length;N<C;++N){let L=S[N],O=L.start,H=L.count;for(let A=O,F=O+H;A<F;A+=3)v(e.getX(A+0),e.getX(A+1),e.getX(A+2))}let M=new P,w=new P,T=new P,x=new P;function E(N){T.fromBufferAttribute(s,N),x.copy(T);let C=o[N];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(x,C);let O=w.dot(l[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,O)}for(let N=0,C=i.count;N<C;++N)c[N]&&E(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new Bt(f,h,u)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fu(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Fu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=qi()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var en=new P,Xs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?Ol(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){zr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){zr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ph(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):mh(e,this.data.array)}},Cc=new P,kp=new P,Hp=new Ge,tn=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Cc.subVectors(i,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Cc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Hp.getNormalMatrix(e),s=this.coplanarPoint(Cc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Gp=0,$n=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Wi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=$c,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new tn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ce().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kn=class extends $n{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Is,Rr=new P,Ls=new P,Ds=new P,Ns=new ce,Cr=new ce,Bd=new rt,Za=new P,Pr=new P,Ja=new P,Ou=new ce,Pc=new ce,Bu=new ce,Fi=class extends kt{constructor(e=new Kn){if(super(),this.isSprite=!0,this.type="Sprite",Is===void 0){Is=new et;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Xr(t,5);Is.setIndex([0,1,2,0,2,3]),Is.setAttribute("position",new Xs(i,3,0,!1)),Is.setAttribute("uv",new Xs(i,2,3,!1))}this.geometry=Is,this.material=e,this.center=new ce(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ls.setFromMatrixScale(this.matrixWorld),Bd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ls.multiplyScalar(-Ds.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;$a(Za.set(-.5,-.5,0),Ds,a,Ls,s,r),$a(Pr.set(.5,-.5,0),Ds,a,Ls,s,r),$a(Ja.set(.5,.5,0),Ds,a,Ls,s,r),Ou.set(0,0),Pc.set(1,0),Bu.set(1,1);let o=e.ray.intersectTriangle(Za,Pr,Ja,!1,Rr);if(o===null&&($a(Pr.set(-.5,.5,0),Ds,a,Ls,s,r),Pc.set(0,1),o=e.ray.intersectTriangle(Za,Ja,Pr,!1,Rr),o===null))return;let l=e.ray.origin.distanceTo(Rr);l<e.near||l>e.far||t.push({distance:l,point:Rr.clone(),uv:gi.getInterpolation(Rr,Za,Pr,Ja,Ou,Pc,Bu,new ce),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function $a(n,e,t,i,s,r){Ns.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*Ns.x-s*Ns.y,Cr.y=s*Ns.x+r*Ns.y):Cr.copy(Ns),n.copy(e),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(Bd)}var mi=new P,Ic=new P,Ka=new P,Qa=new P,os=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ic.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Qa.copy(this.origin).sub(Ic);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ka),o=Qa.dot(this.direction),l=-Qa.dot(Ka),c=Qa.lengthSq(),h=Math.abs(1-a*a),u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){let _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ic).addScaledVector(Ka,f),d}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let i=mi.dot(this.direction),s=mi.dot(mi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,d=e.z-a.z,p=t.x-a.x,_=t.y-a.y,g=t.z-a.z,m=i.x-a.x,v=i.y-a.y,S=i.z-a.z,M=Math.abs(l),w=Math.abs(c),T=Math.abs(h),x,E,N,C,L,O,H,A,F,z,k,ee;if(M>=w&&M>=T?(N=l,O=u,F=p,ee=m,l>=0?(x=c,E=h,C=f,L=d,H=_,A=g,z=v,k=S):(x=h,E=c,C=d,L=f,H=g,A=_,z=S,k=v)):w>=T?(N=c,O=f,F=_,ee=v,c>=0?(x=h,E=l,C=d,L=u,H=g,A=p,z=S,k=m):(x=l,E=h,C=u,L=d,H=p,A=g,z=m,k=S)):(N=h,O=d,F=g,ee=S,h>=0?(x=l,E=c,C=u,L=f,H=p,A=_,z=m,k=v):(x=c,E=l,C=f,L=u,H=_,A=p,z=v,k=m)),N===0)return null;let X=x/N,te=E/N,ie=1/N,be=C-X*O,He=L-te*O,K=H-X*F,_e=A-te*F,Ee=z-X*ee,Ue=k-te*ee,ye=Ee*_e-Ue*K,Xe=be*Ue-He*Ee,Tt=K*He-_e*be;if(s){if(ye<0||Xe<0||Tt<0)return null}else if((ye<0||Xe<0||Tt<0)&&(ye>0||Xe>0||Tt>0))return null;let ze=ye+Xe+Tt;if(ze===0)return null;let ot=ie*(ye*O+Xe*F+Tt*ee);return(ze>0?ot<0:ot>0)?null:this.at(ot/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},zu=new rt,is=new os,ja=new yi,ku=new P,eo=new P,to=new P,no=new P,Lc=new P,io=new P,Hu=new P,so=new P,nt=class extends kt{constructor(e=new et,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){io.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Lc.fromBufferAttribute(u,e),a?io.addScaledVector(Lc,h):io.addScaledVector(Lc.sub(t),h))}t.add(io)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(r),is.copy(e.ray).recast(e.near),!(ja.containsPoint(is.origin)===!1&&(is.intersectSphere(ja,ku)===null||is.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(zu.copy(r).invert(),is.copy(e.ray).applyMatrix4(zu),!(i.boundingBox!==null&&is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,is)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,w=S;M<w;M+=3){let T=o.getX(M),x=o.getX(M+1),E=o.getX(M+2);s=ro(this,m,e,i,c,h,u,T,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let v=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);s=ro(this,a,e,i,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let M=v,w=S;M<w;M+=3){let T=M,x=M+1,E=M+2;s=ro(this,m,e,i,c,h,u,T,x,E),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){let v=g,S=g+1,M=g+2;s=ro(this,a,e,i,c,h,u,v,S,M),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Vp(n,e,t,i,s,r,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Vi,o),l===null)return null;so.copy(o),so.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(so);return c<t.near||c>t.far?null:{distance:c,point:so.clone(),object:n}}function ro(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,eo),n.getVertexPosition(l,to),n.getVertexPosition(c,no);let h=Vp(n,e,t,i,eo,to,no,Hu);if(h){let u=new P;gi.getBarycoord(Hu,eo,to,no,u),s&&(h.uv=gi.getInterpolatedAttribute(s,o,l,c,u,new ce)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,l,c,u,new ce)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};gi.getNormal(eo,to,no,f.normal),h.face=f,h.barycoord=u}return h}var Ao=class extends sn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=zt,h=zt,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ss=new yi,Wp=new ce(.5,.5),ao=new P,Oi=class{constructor(e=new tn,t=new tn,i=new tn,s=new tn,r=new tn,a=new tn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],g=r[10],m=r[11],v=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,m-p,w-v).normalize(),s[1].setComponents(c+a,d+h,m+p,w+v).normalize(),s[2].setComponents(c+o,d+u,m+_,w+S).normalize(),s[3].setComponents(c-o,d-u,m-_,w-S).normalize(),i)s[4].setComponents(l,f,g,M).normalize(),s[5].setComponents(c-l,d-f,m-g,w-M).normalize();else if(s[4].setComponents(c-l,d-f,m-g,w-M).normalize(),t===An)s[5].setComponents(c+l,d+f,m+g,w+M).normalize();else if(t===ks)s[5].setComponents(l,f,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){ss.center.set(0,0,0);let t=Wp.distanceTo(e.center);return ss.radius=.7071067811865476+t,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Gu=new rt,Ro=class n{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Gu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Oi),i[s].setFromProjectionMatrix(Gu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Oi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var Co=class extends $n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vu=new rt,Hc=new os,oo=new yi,lo=new P,qr=class extends kt{constructor(e=new et,t=new Co){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;Vu.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Vu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,_=d;p<_;p++){let g=c.getX(p);lo.fromBufferAttribute(u,g),Wu(lo,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)lo.fromBufferAttribute(u,p),Wu(lo,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wu(n,e,t,i,s,r,a){let o=Hc.distanceSqToPoint(n);if(o<t){let l=new P;Hc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Yr=class extends sn{constructor(e=[],t=ms,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},pn=class extends sn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bn=class extends sn{constructor(e,t,i=zn,s,r,a,o=zt,l=zt,c,h=vi,u=1){if(h!==vi&&h!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zr=class extends Bn{constructor(e,t=zn,i=ms,s,r,a=zt,o=zt,l,c=vi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jr=class extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wt=class n extends et{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,s,a,2),p("x","z","y",1,-1,e,i,-t,s,a,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function p(_,g,m,v,S,M,w,T,x,E,N){let C=M/x,L=w/E,O=M/2,H=w/2,A=T/2,F=x+1,z=E+1,k=0,ee=0,X=new P;for(let te=0;te<z;te++){let ie=te*L-H;for(let be=0;be<F;be++){let He=be*C-O;X[_]=He*v,X[g]=ie*S,X[m]=A,c.push(X.x,X.y,X.z),X[_]=0,X[g]=0,X[m]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(be/x),u.push(1-te/E),k+=1}}for(let te=0;te<E;te++)for(let ie=0;ie<x;ie++){let be=f+ie+F*te,He=f+ie+F*(te+1),K=f+(ie+1)+F*(te+1),_e=f+(ie+1)+F*te;l.push(be,He,_e),l.push(He,K,_e),ee+=6}o.addGroup(d,ee,N),d+=ee,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Bi=class n extends et{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,p=i*2+r,_=s+1,g=new P,m=new P;for(let v=0;v<=p;v++){let S=0,M=0,w=0,T=0;if(v<=i){let N=v/i,C=N*Math.PI/2;M=-h-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),S=N*u}else if(v<=i+r){let N=(v-i)/r;M=-h+N*t,w=e,T=0,S=u+N*f}else{let N=(v-i-r)/i,C=N*Math.PI/2;M=h+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),S=u+f+N*u}let x=Math.max(0,Math.min(1,S/d)),E=0;v===0?E=.5/s:v===p&&(E=-.5/s);for(let N=0;N<=s;N++){let C=N/s,L=C*Math.PI*2,O=Math.sin(L),H=Math.cos(L);m.x=-w*H,m.y=M,m.z=w*O,o.push(m.x,m.y,m.z),g.set(-w*H,T,w*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(C+E,x)}if(v>0){let N=(v-1)*_;for(let C=0;C<s;C++){let L=N+C,O=N+C+1,H=v*_+C,A=v*_+C+1;a.push(L,O,H),a.push(O,A,H)}}}this.setIndex(a),this.setAttribute("position",new Ie(o,3)),this.setAttribute("normal",new Ie(l,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ls=class n extends et{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,h=new ce;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=i+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mi=class n extends et{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],p=0,_=[],g=i/2,m=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function v(){let M=new P,w=new P,T=0,x=(t-e)/i;for(let E=0;E<=r;E++){let N=[],C=E/r,L=C*(t-e)+e;for(let O=0;O<=s;O++){let H=O/s,A=H*l+o,F=Math.sin(A),z=Math.cos(A);w.x=L*F,w.y=-C*i+g,w.z=L*z,u.push(w.x,w.y,w.z),M.set(F,x,z).normalize(),f.push(M.x,M.y,M.z),d.push(H,1-C),N.push(p++)}_.push(N)}for(let E=0;E<s;E++)for(let N=0;N<r;N++){let C=_[N][E],L=_[N+1][E],O=_[N+1][E+1],H=_[N][E+1];(e>0||N!==0)&&(h.push(C,L,H),T+=3),(t>0||N!==r-1)&&(h.push(L,O,H),T+=3)}c.addGroup(m,T,0),m+=T}function S(M){let w=p,T=new ce,x=new P,E=0,N=M===!0?e:t,C=M===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*C,0),f.push(0,C,0),d.push(.5,.5),p++;let L=p;for(let O=0;O<=s;O++){let A=O/s*l+o,F=Math.cos(A),z=Math.sin(A);x.x=N*z,x.y=g*C,x.z=N*F,u.push(x.x,x.y,x.z),f.push(0,C,0),T.x=F*.5+.5,T.y=z*.5*C+.5,d.push(T.x,T.y),p++}for(let O=0;O<s;O++){let H=w+O,A=L+O;M===!0?h.push(A,A+1,H):h.push(A+1,A,H),E+=3}c.addGroup(m,E,M===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},zi=class n extends Mi{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,d=(a-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],r=[],a=[],o=new P,l=new rt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},$r=class extends Cn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Po=class extends $r{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function gh(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,s(a,o,f,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Xu=new P,qu=new P,Dc=new gh,Nc=new gh,Uc=new gh,cs=class extends Cn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(qu.subVectors(s[0],s[1]).add(s[0]),c=qu);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Dc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,g),Nc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,g),Uc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Dc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Nc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Uc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(Dc.calc(l),Nc.calc(l),Uc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Xp(n,e){let t=1-n;return t*t*e}function qp(n,e){return 2*(1-n)*n*e}function Yp(n,e){return n*n*e}function Dr(n,e,t,i){return Xp(n,e)+qp(n,t)+Yp(n,i)}function Zp(n,e){let t=1-n;return t*t*t*e}function Jp(n,e){let t=1-n;return 3*t*t*n*e}function $p(n,e){return 3*(1-n)*n*n*e}function Kp(n,e){return n*n*n*e}function Nr(n,e,t,i,s){return Zp(n,e)+Jp(n,t)+$p(n,i)+Kp(n,s)}var Io=class extends Cn{constructor(e=new ce,t=new ce,i=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Nr(e,s.x,r.x,a.x,o.x),Nr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lo=class extends Cn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Nr(e,s.x,r.x,a.x,o.x),Nr(e,s.y,r.y,a.y,o.y),Nr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Do=class extends Cn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},No=class extends Cn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uo=class extends Cn{constructor(e=new ce,t=new ce,i=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ce){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends Cn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Dr(e,s.x,r.x,a.x),Dr(e,s.y,r.y,a.y),Dr(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fo=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Yu(o,l.x,c.x,h.x,u.x),Yu(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},Qp=Object.freeze({__proto__:null,ArcCurve:Po,CatmullRomCurve3:cs,CubicBezierCurve:Io,CubicBezierCurve3:Lo,EllipseCurve:$r,LineCurve:Do,LineCurve3:No,QuadraticBezierCurve:Uo,QuadraticBezierCurve3:Kr,SplineCurve:Fo});var qs=class n extends et{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,f=new ce,d=new P,p=new P,_=new P,g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){let S=i+v*h*s,M=Math.sin(S),w=Math.cos(S);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*M,u.y=e[T].y,u.z=e[T].x*w,a.push(u.x,u.y,u.z),f.x=v/t,f.y=T/(e.length-1),o.push(f.x,f.y);let x=l[3*T+0]*M,E=l[3*T+1],N=l[3*T+0]*w;c.push(x,E,N)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let M=S+v*e.length,w=M,T=M+e.length,x=M+e.length+1,E=M+1;r.push(w,T,E),r.push(x,E,T)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var hs=class n extends et{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let v=m*f-a;for(let S=0;S<c;S++){let M=S*u-r;p.push(M,-v,0),_.push(0,0,1),g.push(S/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let S=v+c*m,M=v+c*(m+1),w=v+1+c*(m+1),T=v+1+c*m;d.push(S,M,T),d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Qn=class n extends et{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,f=new P,d=[],p=[],_=[],g=[];for(let m=0;m<=i;m++){let v=[],S=m/i,M=a+S*o,w=e*Math.cos(M),T=Math.sqrt(e*e-w*w),x=0;m===0&&a===0?x=.5/t:m===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let N=E/t,C=s+N*r;u.x=-T*Math.cos(C),u.y=w,u.z=T*Math.sin(C),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(N+x,1-S),v.push(c++)}h.push(v)}for(let m=0;m<i;m++)for(let v=0;v<t;v++){let S=h[m][v+1],M=h[m][v],w=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&d.push(S,M,T),(m!==i-1||l<Math.PI)&&d.push(M,w,T)}this.setIndex(d),this.setAttribute("position",new Ie(p,3)),this.setAttribute("normal",new Ie(_,3)),this.setAttribute("uv",new Ie(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ys=class n extends et{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],u=[],f=new P,d=new P,p=new P;for(let _=0;_<=i;_++){let g=a+_/i*o;for(let m=0;m<=s;m++){let v=m/s*r;d.x=(e+t*Math.cos(g))*Math.cos(v),d.y=(e+t*Math.cos(g))*Math.sin(v),d.z=t*Math.sin(g),c.push(d.x,d.y,d.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),p.subVectors(d,f).normalize(),h.push(p.x,p.y,p.z),u.push(m/s),u.push(_/i)}}for(let _=1;_<=i;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,S=(s+1)*(_-1)+g,M=(s+1)*_+g;l.push(m,v,M),l.push(v,S,M)}this.setIndex(l),this.setAttribute("position",new Ie(c,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Zs=class n extends et{constructor(e=new Kr(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ce,h=new P,u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(f,3)),this.setAttribute("uv",new Ie(d,2));function _(){for(let S=0;S<t;S++)g(S);g(r===!1?t:0),v(),m()}function g(S){h=e.getPointAt(S/t,h);let M=a.normals[S],w=a.binormals[S];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,E=Math.sin(x),N=-Math.cos(x);l.x=N*M.x+E*w.x,l.y=N*M.y+E*w.y,l.z=N*M.z+E*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let w=(s+1)*(S-1)+(M-1),T=(s+1)*S+(M-1),x=(s+1)*S+M,E=(s+1)*(S-1)+M;p.push(w,T,E),p.push(T,x,E)}}function v(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Qp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function xs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Zu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Zu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Kt(n){let e={};for(let t=0;t<n.length;t++){let i=xs(n[t]);for(let s in i)e[s]=i[s]}return e}function Zu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jp(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Hn={clone:xs,merge:Kt},em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mt=class extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=em,this.fragmentShader=tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=jp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[i].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new gt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new rt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Js=class extends Mt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vt=class extends $n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fl,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$s=class extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){rs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Oo=class extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bo=class extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Us(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function co(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ki=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zo=class extends ki{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bc,endingEnd:Bc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zc:r=e,o=2*t-i;break;case kc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:a=e,l=2*i-t;break;case kc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,S=(-1-d)*g+(1.5+d)*_+.5*p,M=d*g-d*_;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+v*a[c+w]+S*a[l+w]+M*a[u+w];return r}},ko=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},Ho=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Go=class extends ki{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-t)/(s-t),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}let f=o*2,d=e-1;for(let p=0;p!==o;++p){let _=a[c+p],g=a[l+p],m=d*f+p*2,v=u[m],S=u[m+1],M=e*f+p*2,w=h[M],T=h[M+1],x=im(i,t,v,w,s);r[p]=zd(x,_,S,T,g)}return r}};function zd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function nm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function im(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=zd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=nm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Us(t,this.TimeBufferType),this.values=Us(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Us(e.times,Array),values:Us(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),co(e.settings)&&(i.settings={inTangents:Us(e.settings.inTangents,Array),outTangents:Us(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Go(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ur:t=this.InterpolantFactoryMethodDiscrete;break;case bo:t=this.InterpolantFactoryMethodLinear;break;case fo:t=this.InterpolantFactoryMethodSmooth;break;case Oc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return bo;case this.InterpolantFactoryMethodSmooth:return fo;case this.InterpolantFactoryMethodBezier:return Oc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;co(this.settings)&&(Ju(this.settings.inTangents,e),Ju(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;co(this.settings)&&($u(this.settings.inTangents,e),$u(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&up(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===fo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){let _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,co(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ju(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function $u(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=bo;var Hi=class extends mn{constructor(e,t,i){super(e,t,i)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=Ur;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Vo.prototype.ValueTypeName="color";var Wo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};Wo.prototype.ValueTypeName="number";var Xo=class extends ki{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Qr=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};Qr.prototype.ValueTypeName="quaternion";Qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends mn{constructor(e,t,i){super(e,t,i)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Ur;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var qo=class extends mn{constructor(e,t,i,s){super(e,t,i,s)}};qo.prototype.ValueTypeName="vector";var Yo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kd=new Yo,Zo=class{constructor(e){this.manager=e!==void 0?e:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ks=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},jr=class extends Ks{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Fc=new rt,Ku=new P,Qu=new P,ea=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=on,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Oi,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ku.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ku),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ks||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},ho=new P,uo=new an,Yn=new P,ta=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ho,uo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(ho,uo,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ho,uo,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ni=new P,ju=new ce,ed=new ce,$t=class extends ta{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,ju,ed),t.subVectors(ed,ju)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Gc=class extends ea{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},na=class extends Ks{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},us=class extends ta{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Vc=class extends ea{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ia=class extends Ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Vc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fs=-90,Os=1,Qs=class extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $t(Fs,Os,e,t);s.layers=this.layers,this.add(s);let r=new $t(Fs,Os,e,t);r.layers=this.layers,this.add(r);let a=new $t(Fs,Os,e,t);a.layers=this.layers,this.add(a);let o=new $t(Fs,Os,e,t);o.layers=this.layers,this.add(o);let l=new $t(Fs,Os,e,t);l.layers=this.layers,this.add(l);let c=new $t(Fs,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ks)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},sa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sm.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sm(){this._document.hidden===!1&&this.reset()}var _h="\\[\\]\\.:\\/",rm=new RegExp("["+_h+"]","g"),vh="[^"+_h+"]",am="[^"+_h.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",vh),lm=/(WCOD+)?/.source.replace("WCOD",am),cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",vh),hm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",vh),um=new RegExp("^"+om+lm+cm+hm+"$"),dm=["material","materials","bones","map"],Wc=class{constructor(e,t,i){let s=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ft=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rm,"")}static parseTrackName(e){let t=um.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);dm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ft.Composite=Wc;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ey=new Float32Array(1);var Th=class Th{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Th.prototype.isMatrix2=!0;var Xc=Th;function yh(n,e,t,i){let s=fm(i);switch(t){case ih:return n*e;case rh:return n*e/s.components*s.byteLength;case il:return n*e/s.components*s.byteLength;case Xi:return n*e*2/s.components*s.byteLength;case sl:return n*e*2/s.components*s.byteLength;case sh:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case rl:return n*e*4/s.components*s.byteLength;case da:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(n,16)*Math.max(e,8)/4;case al:case ll:return Math.max(n,8)*Math.max(e,8)/2;case hl:case ul:case fl:case pl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dl:case ga:case ml:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case yl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Pl:case Il:case Ll:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dl:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xa:case Ul:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fm(n){switch(n){case on:case jc:return{byteLength:1,components:1};case tr:case eh:case It:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case zn:case el:case xn:return{byteLength:4,components:1};case th:case nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function cf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Mm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){let p=u[f],_=u[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){let _=u[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Fm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,Ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jm=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
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
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,h0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_0=`PhysicalMaterial material;
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
#endif`,v0=`uniform sampler2D dfgLUT;
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
}`,y0=`
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
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
#endif`,S0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,E0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,T0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,L0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,U0=`#if defined( USE_MORPHCOLORS )
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
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,q0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ag=`float getShadowMask() {
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
}`,og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hg=`#ifdef USE_SKINNING
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
#endif`,ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#ifdef USE_TRANSMISSION
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sg=`uniform sampler2D t2D;
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eg=`uniform float backgroundBlurriness;
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
}`,Tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`#include <common>
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
}`,Rg=`#if DEPTH_PACKING == 3200
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`#define DISTANCE
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`uniform float scale;
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#define LAMBERT
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
}`,Bg=`#define LAMBERT
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
}`,zg=`#define MATCAP
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
}`,kg=`#define MATCAP
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
}`,Hg=`#define NORMAL
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
}`,Gg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Wg=`#define PHONG
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define STANDARD
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
}`,Yg=`#define TOON
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
}`,Zg=`#define TOON
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
}`,Jg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Kg=`#include <common>
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
}`,Qg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,ex=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:Sm,alphahash_pars_fragment:bm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:wm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Im,begin_vertex:Lm,beginnormal_vertex:Dm,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Fm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:km,color_fragment:Hm,color_pars_fragment:Gm,color_pars_vertex:Vm,color_vertex:Wm,common:Xm,defaultnormal_vertex:qm,displacementmap_pars_vertex:Ym,displacementmap_vertex:Zm,emissivemap_fragment:Jm,emissivemap_pars_fragment:$m,colorspace_fragment:Km,colorspace_pars_fragment:Qm,envmap_fragment:jm,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:h0,lights_lambert_pars_fragment:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:x0,lights_physical_fragment:_0,lights_physical_pars_fragment:v0,lights_fragment_begin:y0,lights_fragment_maps:M0,lights_fragment_end:S0,lightprobes_pars_fragment:b0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:T0,logdepthbuf_pars_vertex:w0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:I0,metalnessmap_fragment:L0,metalnessmap_pars_fragment:D0,morphinstance_vertex:N0,morphcolor_vertex:U0,morphnormal_vertex:F0,morphtarget_pars_vertex:O0,morphtarget_vertex:B0,normal_fragment_begin:z0,normal_fragment_maps:k0,normal_pars_fragment:H0,normal_pars_vertex:G0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:q0,clearcoat_pars_fragment:Y0,iridescence_pars_fragment:Z0,opaque_fragment:J0,packing:$0,premultiplied_alpha_fragment:K0,project_vertex:Q0,dithering_fragment:j0,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:sg,shadowmap_vertex:rg,shadowmask_pars_fragment:ag,skinbase_vertex:og,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:hg,specularmap_fragment:ug,specularmap_pars_fragment:dg,tonemapping_fragment:fg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:gg,uv_pars_fragment:xg,uv_pars_vertex:_g,uv_vertex:vg,worldpos_vertex:yg,background_vert:Mg,background_frag:Sg,backgroundCube_vert:bg,backgroundCube_frag:Eg,cube_vert:Tg,cube_frag:wg,depth_vert:Ag,depth_frag:Rg,distance_vert:Cg,distance_frag:Pg,equirect_vert:Ig,equirect_frag:Lg,linedashed_vert:Dg,linedashed_frag:Ng,meshbasic_vert:Ug,meshbasic_frag:Fg,meshlambert_vert:Og,meshlambert_frag:Bg,meshmatcap_vert:zg,meshmatcap_frag:kg,meshnormal_vert:Hg,meshnormal_frag:Gg,meshphong_vert:Vg,meshphong_frag:Wg,meshphysical_vert:Xg,meshphysical_frag:qg,meshtoon_vert:Yg,meshtoon_frag:Zg,points_vert:Jg,points_frag:$g,shadow_vert:Kg,shadow_frag:Qg,sprite_vert:jg,sprite_frag:ex},xe={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ni={basic:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Kt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Kt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Kt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Kt([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Kt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Kt([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Kt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Kt([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:Kt([xe.common,xe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:Kt([xe.lights,xe.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};ni.physical={uniforms:Kt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var Bl={r:0,b:0,g:0},tx=new rt,hf=new Ge;hf.set(-1,0,0,0,1,0,0,0,1);function nx(n,e,t,i,s,r){let a=new Ne(0),o=s===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let M=v.backgroundBlurriness>0;S=e.get(S,M)}return S}function p(v){let S=!1,M=d(v);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){let M=d(S);M&&M.isCubeTexture?(c===void 0&&(c=new nt(new Wt(1,1,1),new Mt({name:"BackgroundCubeMaterial",uniforms:xs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tx.makeRotationFromEuler(S.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(hf),c.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,(h!==M||u!==M.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new nt(new hs(2,2),new Mt({name:"BackgroundMaterial",uniforms:xs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=$e.getTransfer(M.colorSpace)!==it,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||u!==M.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,u=M.version,f=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(Bl,xh(n)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:_,dispose:m}}function ix(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(L,O,H,A,F){let z=!1,k=u(L,A,H,O);r!==k&&(r=k,c(r.object)),z=d(L,A,H,F),z&&p(L,A,H,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,M(L,O,H,A),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function u(L,O,H,A){let F=A.wireframe===!0,z=i[O.id];z===void 0&&(z={},i[O.id]=z);let k=L.isInstancedMesh===!0?L.id:0,ee=z[k];ee===void 0&&(ee={},z[k]=ee);let X=ee[H.id];X===void 0&&(X={},ee[H.id]=X);let te=X[F];return te===void 0&&(te=f(l()),X[F]=te),te}function f(L){let O=[],H=[],A=[];for(let F=0;F<t;F++)O[F]=0,H[F]=0,A[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:A,object:L,attributes:{},index:null}}function d(L,O,H,A){let F=r.attributes,z=O.attributes,k=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let ie=F[X],be=z[X];if(be===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(be=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(be=L.instanceColor)),ie===void 0||ie.attribute!==be||be&&ie.data!==be.data)return!0;k++}return r.attributesNum!==k||r.index!==A}function p(L,O,H,A){let F={},z=O.attributes,k=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let ie=z[X];ie===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor));let be={};be.attribute=ie,ie&&ie.data&&(be.data=ie.data),F[X]=be,k++}r.attributes=F,r.attributesNum=k,r.index=A}function _(){let L=r.newAttributes;for(let O=0,H=L.length;O<H;O++)L[O]=0}function g(L){m(L,0)}function m(L,O){let H=r.newAttributes,A=r.enabledAttributes,F=r.attributeDivisors;H[L]=1,A[L]===0&&(n.enableVertexAttribArray(L),A[L]=1),F[L]!==O&&(n.vertexAttribDivisor(L,O),F[L]=O)}function v(){let L=r.newAttributes,O=r.enabledAttributes;for(let H=0,A=O.length;H<A;H++)O[H]!==L[H]&&(n.disableVertexAttribArray(H),O[H]=0)}function S(L,O,H,A,F,z,k){k===!0?n.vertexAttribIPointer(L,O,H,F,z):n.vertexAttribPointer(L,O,H,A,F,z)}function M(L,O,H,A){_();let F=A.attributes,z=H.getAttributes(),k=O.defaultAttributeValues;for(let ee in z){let X=z[ee];if(X.location>=0){let te=F[ee];if(te===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),te!==void 0){let ie=te.normalized,be=te.itemSize,He=e.get(te);if(He===void 0)continue;let K=He.buffer,_e=He.type,Ee=He.bytesPerElement,Ue=_e===n.INT||_e===n.UNSIGNED_INT||te.gpuType===el;if(te.isInterleavedBufferAttribute){let ye=te.data,Xe=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Tt=te.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let ze=0;ze<X.locationSize;ze++)m(X.location+ze,ye.meshPerAttribute);L.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let ze=0;ze<X.locationSize;ze++)g(X.location+ze);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ze=0;ze<X.locationSize;ze++)S(X.location+ze,be/X.locationSize,_e,ie,Xe*Ee,(Tt+be/X.locationSize*ze)*Ee,Ue)}else{if(te.isInstancedBufferAttribute){for(let ye=0;ye<X.locationSize;ye++)m(X.location+ye,te.meshPerAttribute);L.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ye=0;ye<X.locationSize;ye++)g(X.location+ye);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ye=0;ye<X.locationSize;ye++)S(X.location+ye,be/X.locationSize,_e,ie,be*Ee,be/X.locationSize*ye*Ee,Ue)}}else if(k!==void 0){let ie=k[ee];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(X.location,ie);break;case 3:n.vertexAttrib3fv(X.location,ie);break;case 4:n.vertexAttrib4fv(X.location,ie);break;default:n.vertexAttrib1fv(X.location,ie)}}}}v()}function w(){N();for(let L in i){let O=i[L];for(let H in O){let A=O[H];for(let F in A){let z=A[F];for(let k in z)h(z[k].object),delete z[k];delete A[F]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let H in O){let A=O[H];for(let F in A){let z=A[F];for(let k in z)h(z[k].object),delete z[k];delete A[F]}}delete i[L.id]}function x(L){for(let O in i){let H=i[O];for(let A in H){let F=H[A];if(F[L.id]===void 0)continue;let z=F[L.id];for(let k in z)h(z[k].object),delete z[k];delete F[L.id]}}}function E(L){for(let O in i){let H=i[O],A=L.isInstancedMesh===!0?L.id:0,F=H[A];if(F!==void 0){for(let z in F){let k=F[z];for(let ee in k)h(k[ee].object),delete k[ee];delete F[z]}delete H[A],Object.keys(H).length===0&&delete i[O]}}}function N(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function sx(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];t.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function rx(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==kn&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===It&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==on&&x!==xn&&!E&&i.convert(x)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),T=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:T}}function ax(n){let e=this,t=null,i=0,s=!1,r=!1,a=new tn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=n.get(u);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:i,S=v*4,M=m.clippingState||null;l.value=M,M=h(p,f,S,d);for(let w=0;w!==S;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,M=d;S!==_;++S,M+=4)a.copy(u[S]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ma=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new Mt({name:"CubemapFromEquirect",uniforms:xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Si});r.uniforms.tEquirect.value=t;let a=new nt(s,r),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=nn),new Qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Hd=256,ox=3,lx=20,uf=256,df=16,cx=3,hx=new P,ux=new Ne,ir=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qs(1,10,null),this._boxMesh=new nt(new Wt(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=hx}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(ux));let g=new Qs(i,s,h);return g.position.copy(o),g.update(l,e),l.autoClear=u,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Hd,fh(e))}_fromTexture(e,t){e.mapping===ms||e.mapping===er?this._setSize(e.image.length===0?Hd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Gd(e,!1,!1),i=Math.log2(e)-ox;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Gd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ms||e.mapping===er?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Vd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=dx(),this._integrationMaterial=fx());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/df);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-cx)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(uf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=px());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Gd(n,e,t){return new Ma(n,{minFilter:bi,generateMipmaps:e,type:It,colorSpace:Fr,depthBuffer:t})}function Sa(n,e,t){return new Mt({name:n,uniforms:e,vertexShader:Je.cube_vert,fragmentShader:t,side:Xt,blending:Si,depthTest:!1,depthWrite:!1})}function dx(){return Sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${uf}u

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
	`)}function fx(){return Sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

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
	`)}function px(){return Sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${lx}
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
	`)}function Vd(){return Sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Wd(){return Sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function mx(n){let e=new WeakMap,t=new WeakMap,i=null;function s(f,d=!1){return f==null?null:d?a(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===Ko||d===Qo)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Ma(p.height);return _.fromEquirectangularTexture(n,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===Ko||d===Qo,_=d===ms||d===er;if(p||_){let g=t.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new ir(n)),g=p?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new ir(n)),g=p?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,d){return d===Ko?f.mapping=ms:d===Qo&&(f.mapping=er),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function gx(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&rs("WebGLRenderer: "+i+" extension not supported."),s}}}function xx(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(p){let _=p.attributes;for(let g in _)e.update(_[g],n.ARRAY_BUFFER)}function u(p){let _=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,S=g.count>=65535?Wr:Vr,M=new S(Math.ceil(v/3)*6,1),w=M.array;if(_!==null){let x=_.array;m=_.version;for(let E=0,N=0;E<v;E+=3){let C=x[E+0],L=x[E+1],O=x[E+2];w[N++]=C,w[N++]=L,w[N++]=L,w[N++]=O,w[N++]=O,w[N++]=C}}else{m=g.version;for(let x=0,E=0;x<v;x+=3){let N=x+0,C=x+1,L=x+2;w[E++]=N,w[E++]=C,w[E++]=C,w[E++]=L,w[E++]=L,w[E++]=N}}M.version=m;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function f(p){let _=r.get(p);if(_){let g=p.index;g!==null&&_.version<g.version&&u(p)}else u(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:f,dispose:d}}function _x(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,d){d!==0&&(n.drawElementsInstanced(i,f,r,u*a,d),t.update(f,i,d))}function h(u,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vx(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function yx(n,e,t){let i=new WeakMap,s=new gt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==u){let N=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",N)};f!==void 0&&f.texture.dispose();let d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;d===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let M=o.attributes.position.count*S,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*w*4*u),x=new kr(T,M,w,u);x.type=xn,x.needsUpdate=!0;let E=S*4;for(let C=0;C<u;C++){let L=g[C],O=m[C],H=v[C],A=M*w*4*C;for(let F=0;F<L.count;F++){let z=F*E;d===!0&&(s.fromBufferAttribute(L,F),T[A+z+0]=s.x,T[A+z+1]=s.y,T[A+z+2]=s.z,T[A+z+3]=0),p===!0&&(s.fromBufferAttribute(O,F),T[A+z+4]=s.x,T[A+z+5]=s.y,T[A+z+6]=s.z,T[A+z+7]=0),_===!0&&(s.fromBufferAttribute(H,F),T[A+z+8]=s.x,T[A+z+9]=s.y,T[A+z+10]=s.z,T[A+z+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:x,size:new ce(M,w)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function Mx(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return f}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Sx={[ra]:"LINEAR_TONE_MAPPING",[aa]:"REINHARD_TONE_MAPPING",[oa]:"CINEON_TONE_MAPPING",[ps]:"ACES_FILMIC_TONE_MAPPING",[ca]:"AGX_TONE_MAPPING",[ha]:"NEUTRAL_TONE_MAPPING",[la]:"CUSTOM_TONE_MAPPING"};function bx(n,e,t,i,s,r){let a=new bt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new et;h.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let u=new Js({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new nt(h,u),d=new us(-1,1,1,-1,0,1),p=null,_=null,g=!1,m,v=null,S=[],M=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){S=w,M=S.length>0&&S[0].isRenderPass===!0;let T=a.width,x=a.height;S.length>0&&o===null&&(o=new bt(T,x,{type:It,depthBuffer:!1,stencilBuffer:!1}),l=new bt(T,x,{type:It,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(N=>N.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Bn(T,x),r===!0&&(c.format=Ei,c.type=gs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let N=0;N<S.length;N++){let C=S[N];C.setSize&&C.setSize(T,x),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(g||w.toneMapping===ei&&S.length===0)return!1;if(v=T,T!==null){let x=T.width,E=T.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return M===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=ei,!0},this.hasRenderPass=function(){return M},this.end=function(w,T){w.toneMapping=m,g=!0;let x=a,E=o;for(let N=0;N<S.length;N++){let C=S[N];C.enabled!==!1&&(C.render(w,E,x,T),C.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(p!==w.outputColorSpace||_!==w.toneMapping){p=w.outputColorSpace,_=w.toneMapping,u.defines={},$e.getTransfer(p)===it&&(u.defines.SRGB_TRANSFER="");let N=Sx[_];N&&(u.defines[N]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(f,d),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var ff=new sn,pf=new Bn(1,1),mf=new Zr(1),gf=new kr,xf=new wo,_f=new Yr,Xd=[],qd=[],Yd=new Float32Array(16),Zd=new Float32Array(9),Jd=new Float32Array(4);function sr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xd[s];if(r===void 0&&(r=new Float32Array(s),Xd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hl(n,e){let t=qd[e];t===void 0&&(t=new Int32Array(e),qd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Ex(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function wx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function Ax(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Rx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Jd.set(i),n.uniformMatrix2fv(this.addr,!1,Jd),Dt(t,i)}}function Cx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Zd.set(i),n.uniformMatrix3fv(this.addr,!1,Zd),Dt(t,i)}}function Px(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Yd.set(i),n.uniformMatrix4fv(this.addr,!1,Yd),Dt(t,i)}}function Ix(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Lx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function Dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function Nx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function Ux(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Fx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function Ox(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function Bx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Gl(n){return n.version===0&&(n.compareFunction=lh,n.needsUpdate=!0),n}function zx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Gl(pf):r=ff,t.setTexture2D(e||r,s)}function kx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||xf,s)}function Hx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Gl(mf):r=_f,t.setTextureCube(e||r,s)}function Gx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gf,s)}function Vx(n){switch(n){case 5126:return Ex;case 35664:return Tx;case 35665:return wx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Px;case 5124:case 35670:return Ix;case 35667:case 35671:return Lx;case 35668:case 35672:return Dx;case 35669:case 35673:return Nx;case 5125:return Ux;case 36294:return Fx;case 36295:return Ox;case 36296:return Bx;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Hx;case 36289:case 36303:case 36311:case 36292:return Gx}}function Wx(n,e){n.uniform1fv(this.addr,e)}function Xx(n,e){let t=sr(e,this.size,2);n.uniform2fv(this.addr,t)}function qx(n,e){let t=sr(e,this.size,3);n.uniform3fv(this.addr,t)}function Yx(n,e){let t=sr(e,this.size,4);n.uniform4fv(this.addr,t)}function Zx(n,e){let t=sr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Jx(n,e){let t=sr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $x(n,e){let t=sr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Kx(n,e){n.uniform1iv(this.addr,e)}function Qx(n,e){n.uniform2iv(this.addr,e)}function jx(n,e){n.uniform3iv(this.addr,e)}function e_(n,e){n.uniform4iv(this.addr,e)}function t_(n,e){n.uniform1uiv(this.addr,e)}function n_(n,e){n.uniform2uiv(this.addr,e)}function i_(n,e){n.uniform3uiv(this.addr,e)}function s_(n,e){n.uniform4uiv(this.addr,e)}function r_(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Gl(pf):a=ff;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function a_(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xf,r[a])}function o_(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Gl(mf):a=_f;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function l_(n,e,t){let i=this.cache,s=e.length,r=Hl(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gf,r[a])}function c_(n){switch(n){case 5126:return Wx;case 35664:return Xx;case 35665:return qx;case 35666:return Yx;case 35674:return Zx;case 35675:return Jx;case 35676:return $x;case 5124:case 35670:return Kx;case 35667:case 35671:return Qx;case 35668:case 35672:return jx;case 35669:case 35673:return e_;case 5125:return t_;case 36294:return n_;case 36295:return i_;case 36296:return s_;case 35678:case 36198:case 36298:case 36306:case 35682:return r_;case 35679:case 36299:case 36307:return a_;case 35680:case 36300:case 36308:case 36293:return o_;case 36289:case 36303:case 36311:case 36292:return l_}}var Rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Vx(t.type)}},Ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=c_(t.type)}},Ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},wh=/(\w+)(\])?(\[|\.)?/g;function $d(n,e){n.seq.push(e),n.map[e.id]=e}function h_(n,e,t){let i=n.name,s=i.length;for(wh.lastIndex=0;;){let r=wh.exec(i),a=wh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$d(t,c===void 0?new Rh(o,n,e):new Ch(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new Ph(o),$d(t,u)),t=u}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);h_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Kd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var u_=37297,d_=0;function f_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Qd=new Ge;function p_(n){$e._getMatrix(Qd,$e.workingColorSpace,n);let e=`mat3( ${Qd.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Or:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function jd(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+f_(n.getShaderSource(e),o)}else return r}function m_(n,e){let t=p_(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var g_={[ra]:"Linear",[aa]:"Reinhard",[oa]:"Cineon",[ps]:"ACESFilmic",[ca]:"AgX",[ha]:"Neutral",[la]:"Custom"};function x_(n,e){let t=g_[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new P;function __(){$e.getLuminanceCoefficients(zl);let n=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function y_(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function M_(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ya(n){return n!==""}function ef(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function tf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(n){return n.replace(S_,b_)}function b_(n,e){let t=Je[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ih(t)}var E_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nf(n){return n.replace(E_,T_)}function T_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var w_={[ds]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function A_(n){return w_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var R_={[er]:"ENVMAP_MODE_REFRACTION"};function C_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":R_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P_={[Kc]:"ENVMAP_BLENDING_MULTIPLY",[Sd]:"ENVMAP_BLENDING_MIX",[bd]:"ENVMAP_BLENDING_ADD"};function I_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":P_[n.combine]||"ENVMAP_BLENDING_NONE"}function L_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=C_(t),u=I_(t),f=v_(t),d=y_(r),p=s.createProgram(),_,g,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ya).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(ya).join(`
`),g.length>0&&(g+=`
`)):(_=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),g=[sf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ei?"#define TONE_MAPPING":"",t.toneMapping!==ei?Je.tonemapping_pars_fragment:"",t.toneMapping!==ei?x_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,m_("linearToOutputTexel",t.outputColorSpace),__(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Ih(a),a=ef(a,t),a=tf(a,t),o=Ih(o),o=ef(o,t),o=tf(o,t),a=nf(a),o=nf(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+_+a,S=m+g+o,M=Kd(s,s.VERTEX_SHADER,v),w=Kd(s,s.FRAGMENT_SHADER,S);s.attachShader(p,M),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(M)||"",H=s.getShaderInfoLog(w)||"",A=L.trim(),F=O.trim(),z=H.trim(),k=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,M,w);else{let X=jd(s,M,"vertex"),te=jd(s,w,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+A+`
`+X+`
`+te)}else A!==""?Oe("WebGLProgram: Program Info Log:",A):(F===""||z==="")&&(ee=!1);ee&&(C.diagnostics={runnable:k,programLog:A,vertexShader:{log:F,prefix:_},fragmentShader:{log:z,prefix:g}})}s.deleteShader(M),s.deleteShader(w),x=new nr(s,p),E=M_(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(p,u_)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d_++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=w,this}var D_=0,Lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Dh(e),t.set(e,i)),i}},Dh=class{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}};function N_(n){return n===Xi||n===ga||n===xa}function U_(n,e,t,i,s,r){let a=new Hr,o=new Lh,l=new Set,c=[],h=new Map,u=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,E,N,C,L,O){let H=C.fog,A=L.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,k=e.get(x.envMap||F,z),ee=f[x.type],X=i.precision;x.precision!==null&&(X=i.getMaxPrecision(x.precision),X!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let te=A.morphAttributes.position||A.morphAttributes.normal||A.morphAttributes.color,ie=te!==void 0?te.length:0,be=0;A.morphAttributes.position!==void 0&&(be=1),A.morphAttributes.normal!==void 0&&(be=2),A.morphAttributes.color!==void 0&&(be=3);let He,K,_e,Ee;if(ee){let ge=ni[ee];He=ge.vertexShader,K=ge.fragmentShader}else{He=x.vertexShader,K=x.fragmentShader;let ge=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,ge,lt),_e=ge.id,Ee=lt.id}let Ue=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Xe=L.isInstancedMesh===!0,Tt=L.isBatchedMesh===!0,ze=!!x.map,ot=!!x.matcap,ct=!!k,Ke=ct&&k.isPMREMTexture===!0,Ht=!!x.aoMap,Ct=!!x.lightMap,rn=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,qn=!!x.displacementMap,Nt=!!x.emissiveMap,Sn=!!x.metalnessMap,bn=!!x.roughnessMap,En=x.anisotropy>0,B=x.clearcoat>0,Tn=x.diffuseRoughness>0,pt=x.dispersion>0,mt=x.retroreflectivity>0,me=x.iridescence>0,Pt=x.sheen>0,Fe=x.transmission>0,Ve=En&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,y=B&&!!x.clearcoatNormalMap,V=B&&!!x.clearcoatRoughnessMap,se=Tn&&!!x.diffuseRoughnessMap,ne=me&&!!x.iridescenceMap,oe=me&&!!x.iridescenceThicknessMap,fe=Pt&&!!x.sheenColorMap,J=Pt&&!!x.sheenRoughnessMap,$=!!x.specularMap,he=!!x.specularColorMap,I=!!x.specularIntensityMap,Q=Fe&&!!x.transmissionMap,Z=Fe&&!!x.thicknessMap,ue=!!x.gradientMap,ae=!!x.alphaMap,le=x.alphaTest>0,Pe=!!x.alphaHash,Ye=!!x.extensions,re=ei;x.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(re=n.toneMapping);let De=Ke?k.isCompressedCubeTexture?k.image[0].mipmaps:k.mipmaps:null,qe={shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:K,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:Tt,batchingColor:Tt&&L._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&L.instanceColor!==null,instancingMorph:Xe&&L.morphTexture!==null,outputColorSpace:Ue===null?n.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:ot,envMap:ct,envMapMode:ct&&k.mapping,envMapPMREM:Ke,envMapMaxLod:Ke?De.length-1:null,envMapSize:Ke?De[0].width:null,aoMap:Ht,lightMap:Ct,bumpMap:rn,normalMap:xt,displacementMap:qn,emissiveMap:Nt,normalMapObjectSpace:xt&&x.normalMapType===wd,normalMapTangentSpace:xt&&x.normalMapType===Fl,packedNormalMap:xt&&x.normalMapType===Fl&&N_(x.normalMap.format),metalnessMap:Sn,roughnessMap:bn,anisotropy:En,anisotropyMap:Ve,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:y,clearcoatRoughnessMap:V,diffuseRoughness:Tn,diffuseRoughnessMap:se,dispersion:pt,retroreflection:mt,iridescence:me,iridescenceMap:ne,iridescenceThicknessMap:oe,sheen:Pt,sheenColorMap:fe,sheenRoughnessMap:J,specularMap:$,specularColorMap:he,specularIntensityMap:I,transmission:Fe,transmissionMap:Q,thicknessMap:Z,gradientMap:ue,opaque:x.transparent===!1&&x.blending===Wi&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:Pe,combine:x.combine,mapUv:ze&&d(x.map.channel),aoMapUv:Ht&&d(x.aoMap.channel),lightMapUv:Ct&&d(x.lightMap.channel),bumpMapUv:rn&&d(x.bumpMap.channel),normalMapUv:xt&&d(x.normalMap.channel),displacementMapUv:qn&&d(x.displacementMap.channel),emissiveMapUv:Nt&&d(x.emissiveMap.channel),metalnessMapUv:Sn&&d(x.metalnessMap.channel),roughnessMapUv:bn&&d(x.roughnessMap.channel),anisotropyMapUv:Ve&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:se&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(x.sheenRoughnessMap.channel),specularMapUv:$&&d(x.specularMap.channel),specularColorMapUv:he&&d(x.specularColorMap.channel),specularIntensityMapUv:I&&d(x.specularIntensityMap.channel),transmissionMapUv:Q&&d(x.transmissionMap.channel),thicknessMapUv:Z&&d(x.thicknessMap.channel),alphaMapUv:ae&&d(x.alphaMap.channel),vertexTangents:!!A.attributes.tangent&&(xt||En),vertexNormals:!!A.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!A.attributes.color&&A.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!A.attributes.uv&&(ze||ae),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||A.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:A.attributes.position!==void 0,morphTargets:A.morphAttributes.position!==void 0,morphNormals:A.morphAttributes.normal!==void 0,morphColors:A.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:be,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.filter(ge=>ge.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&$e.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:Nt&&x.emissiveMap.isVideoTexture===!0&&$e.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===Xt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ye&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&x.extensions.multiDraw===!0||Tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function _(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(g(E,x),m(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function g(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function m(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let E=f[x.type],N;if(E){let C=ni[E];N=Hn.clone(C.uniforms)}else N=x.uniforms;return N}function S(x,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new L_(n,E,x,s),c.push(N),h.set(E,N)),N}function M(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function T(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function F_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function O_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function af(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,p,_,g,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=m),e++,v}function l(f,d,p,_,g,m,v){v.reversedDepth===!0&&(g=-g);let S=o(f,d,p,_,g,m);p.transmission>0?i.push(S):p.transparent===!0?s.push(S):t.push(S)}function c(f,d,p,_,g,m){let v=o(f,d,p,_,g,m);p.transmission>0?i.unshift(v):p.transparent===!0?s.unshift(v):t.unshift(v)}function h(f,d){t.length>1&&t.sort(f||O_),i.length>1&&i.sort(d||rf),s.length>1&&s.sort(d||rf)}function u(){for(let f=e,d=n.length;f<d;f++){let p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function B_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new af,n.set(i,[a])):s>=r.length?(a=new af,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function z_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function k_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var H_=0;function G_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function V_(n){let e=new z_,t=k_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,r=new rt,a=new rt;function o(c){let h=0,u=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,S=0,M=0,w=0,T=0,x=0,E=0,N=0,C=0;c.sort(G_);for(let O=0,H=c.length;O<H;O++){let A=c[O],F=A.color,z=A.intensity,k=A.distance,ee=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Xi?ee=A.shadow.map.texture:ee=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)h+=F.r*z,u+=F.g*z,f+=F.b*z;else if(A.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(A.sh.coefficients[X],z);C++}else if(A.isSunLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let te=A.shadow,ie=t.get(A);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),i.sunShadow[p]=ie,i.sunShadowMap[p]=ee;let be=te.getViewportCount();for(let He=0;He<be;He++)i.sunShadowMatrix[_+He]=te.getMatrix(He),i.sunShadowCascade[_+He]=te._cascadeData[He];_+=be,p++}i.sun[d]=X,d++}else if(A.isDirectionalLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let te=A.shadow,ie=t.get(A);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.directionalShadow[g]=ie,i.directionalShadowMap[g]=ee,i.directionalShadowMatrix[g]=A.shadow.matrix,w++}i.directional[g]=X,g++}else if(A.isSpotLight){let X=e.get(A);X.position.setFromMatrixPosition(A.matrixWorld),X.color.copy(F).multiplyScalar(z),X.distance=k,X.coneCos=Math.cos(A.angle),X.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),X.decay=A.decay,i.spot[v]=X;let te=A.shadow;if(A.map&&(i.spotLightMap[E]=A.map,E++,te.updateMatrices(A),A.castShadow&&N++),i.spotLightMatrix[v]=te.matrix,A.castShadow){let ie=t.get(A);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,i.spotShadow[v]=ie,i.spotShadowMap[v]=ee,x++}v++}else if(A.isRectAreaLight){let X=e.get(A);X.color.copy(F).multiplyScalar(z),X.halfWidth.set(A.width*.5,0,0),X.halfHeight.set(0,A.height*.5,0),i.rectArea[S]=X,S++}else if(A.isPointLight){let X=e.get(A);if(X.color.copy(A.color).multiplyScalar(A.intensity),X.distance=A.distance,X.decay=A.decay,A.castShadow){let te=A.shadow,ie=t.get(A);ie.shadowIntensity=te.intensity,ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,i.pointShadow[m]=ie,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=A.shadow.matrix,T++}i.point[m]=X,m++}else if(A.isHemisphereLight){let X=e.get(A);X.skyColor.copy(A.color).multiplyScalar(z),X.groundColor.copy(A.groundColor).multiplyScalar(z),i.hemi[M]=X,M++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;let L=i.hash;(L.sunLength!==d||L.directionalLength!==g||L.pointLength!==m||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==M||L.numSunShadows!==p||L.numDirectionalShadows!==w||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==E||L.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=M,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+E-N,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=C,L.sunLength=d,L.directionalLength=g,L.pointLength=m,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=M,L.numSunShadows=p,L.numDirectionalShadows=w,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=E,L.numLightProbes=C,i.version=H_++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let M=c[v];if(M.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),u++}else if(M.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(M.isSpotLight){let w=i.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=i.rectArea[_];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function of(n){let e=new V_(n),t=[],i=[],s=[];function r(u){h.camera=u,t.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){i.push(u)}function l(){e.setup(t),s.sort((u,f)=>u.priority-f.priority||u.id-f.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new of(n),e.set(s,[o])):r>=a.length?(o=new of(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var X_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q_=`uniform sampler2D shadow_pass;
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
}`,Y_=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Z_=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],lf=new rt,va=new P,Ah=new P;function J_(n,e,t){let i=new Oi,s=new ce,r=new ce,a=new gt,o=new Oo,l=new Bo,c={},h=t.maxTextureSize,u={[Vi]:Xt,[Xt]:Vi,[jn]:jn},f=new Mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:X_,fragmentShader:q_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new et;p.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new nt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ds;let m=this.type;this.render=function(T,x,E){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===id&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ds);let N=n.getRenderTarget(),C=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Si),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=m!==this.type;H&&x.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(F=>F.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,F=T.length;A<F;A++){let z=T[A],k=z.shadow;if(k===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let ee=k.getFrameExtents();s.multiply(ee),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,k.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=X,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===js){if(z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new bt(s.x,s.y,{format:Xi,type:It,minFilter:nn,magFilter:nn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Bn(s.x,s.y,xn),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=vi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt}else z.isPointLight?(k.map=new Ma(s.x),k.map.depthTexture=new Zr(s.x,zn)):(k.map=new bt(s.x,s.y),k.map.depthTexture=new Bn(s.x,s.y,zn)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=vi,this.type===ds?(k.map.depthTexture.compareFunction=X?oh:ah,k.map.depthTexture.minFilter=nn,k.map.depthTexture.magFilter=nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=zt,k.map.depthTexture.magFilter=zt);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let te=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,E);let ie=(k.camera.layers.mask&4294967294)!==0?k.camera.layers:E.layers;for(let be=0;be<te;be++){let He=k.getCamera(be);if(z.isPointLight){let K=k.camera,_e=k.matrix,Ee=z.distance||K.far;Ee!==K.far&&(K.far=Ee,K.updateProjectionMatrix()),va.setFromMatrixPosition(z.matrixWorld),K.position.copy(va),Ah.copy(K.position),Ah.add(Y_[be]),K.up.copy(Z_[be]),K.lookAt(Ah),K.updateMatrixWorld(),_e.makeTranslation(-va.x,-va.y,-va.z),lf.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k._frustum.setFromProjectionMatrix(lf,K.coordinateSystem,K.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,be),n.clear();else{be===0&&(n.setRenderTarget(k.map),n.clear());let K=k.getViewport(be);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),O.viewport(a)}i=k.getFrustum(be),M(x,E,He,z,ie,this.type)}k.isPointLightShadow!==!0&&this.type===js&&v(k,E),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(N,C,L)};function v(T,x){let E=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new bt(s.x,s.y,{format:Xi,type:It}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(x,null,E,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(x,null,E,d,_,null)}function S(T,x,E,N){let C=null,L=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=E.isPointLight===!0?l:o,n.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=C.uuid,H=x.uuid,A=c[O];A===void 0&&(A={},c[O]=A);let F=A[H];F===void 0&&(F=C.clone(),A[H]=F,x.addEventListener("dispose",w)),C=F}if(C.visible=x.visible,C.wireframe=x.wireframe,N===js?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:u[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=n.properties.get(C);O.light=E}return C}function M(T,x,E,N,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===js)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let A=e.update(T),F=T.material;if(Array.isArray(F)){let z=A.groups;for(let k=0,ee=z.length;k<ee;k++){let X=z[k],te=F[X.materialIndex];if(te&&te.visible){let ie=S(T,te,N,L);T.onBeforeShadow(n,T,x,E,A,ie,X),n.renderBufferDirect(E,null,A,ie,T,X),T.onAfterShadow(n,T,x,E,A,ie,X)}}}else if(F.visible){let z=S(T,F,N,L);T.onBeforeShadow(n,T,x,E,A,z,null),n.renderBufferDirect(E,null,A,z,T,null),T.onAfterShadow(n,T,x,E,A,z,null)}}let H=T.children;for(let A=0,F=H.length;A<F;A++)M(H[A],x,E,N,C,L)}function w(T){T.target.removeEventListener("dispose",w);for(let E in c){let N=c[E],C=T.target.uuid;C in N&&(N[C].dispose(),delete N[C])}}}function $_(n,e){function t(){let I=!1,Q=new gt,Z=null,ue=new gt(0,0,0,0);return{setMask:function(ae){Z!==ae&&!I&&(n.colorMask(ae,ae,ae,ae),Z=ae)},setLocked:function(ae){I=ae},setClear:function(ae,le,Pe,Ye,re){re===!0&&(ae*=Ye,le*=Ye,Pe*=Ye),Q.set(ae,le,Pe,Ye),ue.equals(Q)===!1&&(n.clearColor(ae,le,Pe,Ye),ue.copy(Q))},reset:function(){I=!1,Z=null,ue.set(-1,0,0,0)}}}function i(){let I=!1,Q=!1,Z=null,ue=null,ae=null;return{setReversed:function(le){if(Q!==le){let Pe=e.get("EXT_clip_control");le?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Q=le;let Ye=ae;ae=null,this.setClear(Ye)}},getReversed:function(){return Q},setTest:function(le){le?ye(n.DEPTH_TEST):Xe(n.DEPTH_TEST)},setMask:function(le){Z!==le&&!I&&(n.depthMask(le),Z=le)},setFunc:function(le){if(Q&&(le=Fd[le]),ue!==le){switch(le){case mo:n.depthFunc(n.NEVER);break;case go:n.depthFunc(n.ALWAYS);break;case xo:n.depthFunc(n.LESS);break;case zs:n.depthFunc(n.LEQUAL);break;case _o:n.depthFunc(n.EQUAL);break;case vo:n.depthFunc(n.GEQUAL);break;case yo:n.depthFunc(n.GREATER);break;case Mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=le}},setLocked:function(le){I=le},setClear:function(le){ae!==le&&(ae=le,Q&&(le=1-le),n.clearDepth(le))},reset:function(){I=!1,Z=null,ue=null,ae=null,Q=!1}}}function s(){let I=!1,Q=null,Z=null,ue=null,ae=null,le=null,Pe=null,Ye=null,re=null;return{setTest:function(De){I||(De?ye(n.STENCIL_TEST):Xe(n.STENCIL_TEST))},setMask:function(De){Q!==De&&!I&&(n.stencilMask(De),Q=De)},setFunc:function(De,qe,ge){(Z!==De||ue!==qe||ae!==ge)&&(n.stencilFunc(De,qe,ge),Z=De,ue=qe,ae=ge)},setOp:function(De,qe,ge){(le!==De||Pe!==qe||Ye!==ge)&&(n.stencilOp(De,qe,ge),le=De,Pe=qe,Ye=ge)},setLocked:function(De){I=De},setClear:function(De){re!==De&&(n.clearStencil(De),re=De)},reset:function(){I=!1,Q=null,Z=null,ue=null,ae=null,le=null,Pe=null,Ye=null,re=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},u={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,S=null,M=null,w=null,T=null,x=null,E=new Ne(0,0,0),N=0,C=!1,L=null,O=null,H=null,A=null,F=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ee=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ee>=2);let te=null,ie={},be=n.getParameter(n.SCISSOR_BOX),He=n.getParameter(n.VIEWPORT),K=new gt().fromArray(be),_e=new gt().fromArray(He);function Ee(I,Q,Z,ue){let ae=new Uint8Array(4),le=n.createTexture();n.bindTexture(I,le),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<Z;Pe++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(Q+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return le}let Ue={};Ue[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Ue[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ue[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ue[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ye(n.DEPTH_TEST),a.setFunc(zs),rn(!1),xt(qc),ye(n.CULL_FACE),Ht(Si);function ye(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Xe(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Tt(I,Q){return f[I]!==Q?(n.bindFramebuffer(I,Q),f[I]=Q,I===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Q),I===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function ze(I,Q){let Z=p,ue=!1;if(I){Z=d.get(Q),Z===void 0&&(Z=[],d.set(Q,Z));let ae=I.textures;if(Z.length!==ae.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let le=0,Pe=ae.length;le<Pe;le++)Z[le]=n.COLOR_ATTACHMENT0+le;Z.length=ae.length,ue=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Z)}function ot(I){return _!==I?(n.useProgram(I),_=I,!0):!1}let ct={[fs]:n.FUNC_ADD,[rd]:n.FUNC_SUBTRACT,[ad]:n.FUNC_REVERSE_SUBTRACT};ct[od]=n.MIN,ct[ld]=n.MAX;let Ke={[cd]:n.ZERO,[hd]:n.ONE,[ud]:n.SRC_COLOR,[Jc]:n.SRC_ALPHA,[xd]:n.SRC_ALPHA_SATURATE,[md]:n.DST_COLOR,[fd]:n.DST_ALPHA,[dd]:n.ONE_MINUS_SRC_COLOR,[$c]:n.ONE_MINUS_SRC_ALPHA,[gd]:n.ONE_MINUS_DST_COLOR,[pd]:n.ONE_MINUS_DST_ALPHA,[_d]:n.CONSTANT_COLOR,[vd]:n.ONE_MINUS_CONSTANT_COLOR,[yd]:n.CONSTANT_ALPHA,[Md]:n.ONE_MINUS_CONSTANT_ALPHA};function Ht(I,Q,Z,ue,ae,le,Pe,Ye,re,De){if(I===Si){g===!0&&(Xe(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),I!==sd){if(I!==m||De!==C){if((v!==fs||w!==fs)&&(n.blendEquation(n.FUNC_ADD),v=fs,w=fs),De)switch(I){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gn:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ke("WebGLState: Invalid blending: ",I);break}else switch(I){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yc:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zc:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",I);break}S=null,M=null,T=null,x=null,E.set(0,0,0),N=0,m=I,C=De}return}ae=ae||Q,le=le||Z,Pe=Pe||ue,(Q!==v||ae!==w)&&(n.blendEquationSeparate(ct[Q],ct[ae]),v=Q,w=ae),(Z!==S||ue!==M||le!==T||Pe!==x)&&(n.blendFuncSeparate(Ke[Z],Ke[ue],Ke[le],Ke[Pe]),S=Z,M=ue,T=le,x=Pe),(Ye.equals(E)===!1||re!==N)&&(n.blendColor(Ye.r,Ye.g,Ye.b,re),E.copy(Ye),N=re),m=I,C=!1}function Ct(I,Q){I.side===jn?Xe(n.CULL_FACE):ye(n.CULL_FACE);let Z=I.side===Xt;Q&&(Z=!Z),rn(Z),I.blending===Wi&&I.transparent===!1?Ht(Si):Ht(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let ue=I.stencilWrite;o.setTest(ue),ue&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Nt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Xe(n.SAMPLE_ALPHA_TO_COVERAGE)}function rn(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function xt(I){I!==td?(ye(n.CULL_FACE),I!==O&&(I===qc?n.cullFace(n.BACK):I===nd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Xe(n.CULL_FACE),O=I}function qn(I){I!==H&&(k&&n.lineWidth(I),H=I)}function Nt(I,Q,Z){I?(ye(n.POLYGON_OFFSET_FILL),(A!==Q||F!==Z)&&(A=Q,F=Z,a.getReversed()&&(Q=-Q,Z=-Z),n.polygonOffset(Q,Z))):Xe(n.POLYGON_OFFSET_FILL)}function Sn(I){I?ye(n.SCISSOR_TEST):Xe(n.SCISSOR_TEST)}function bn(I){I===void 0&&(I=n.TEXTURE0+z-1),te!==I&&(n.activeTexture(I),te=I)}function En(I,Q,Z){Z===void 0&&(te===null?Z=n.TEXTURE0+z-1:Z=te);let ue=ie[Z];ue===void 0&&(ue={type:void 0,texture:void 0},ie[Z]=ue),(ue.type!==I||ue.texture!==Q)&&(te!==Z&&(n.activeTexture(Z),te=Z),n.bindTexture(I,Q||Ue[I]),ue.type=I,ue.texture=Q)}function B(){let I=ie[te];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Tn(){try{n.compressedTexImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function pt(){try{n.compressedTexImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function mt(){try{n.texSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function me(){try{n.texSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function Pt(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function Ve(){try{n.texStorage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function R(){try{n.texStorage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function y(){try{n.texImage2D(...arguments)}catch(I){ke("WebGLState:",I)}}function V(){try{n.texImage3D(...arguments)}catch(I){ke("WebGLState:",I)}}function se(I){return u[I]!==void 0?u[I]:n.getParameter(I)}function ne(I,Q){u[I]!==Q&&(n.pixelStorei(I,Q),u[I]=Q)}function oe(I){K.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),K.copy(I))}function fe(I){_e.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function J(I,Q){let Z=c.get(Q);Z===void 0&&(Z=new WeakMap,c.set(Q,Z));let ue=Z.get(I);ue===void 0&&(ue=n.getUniformBlockIndex(Q,I.name),n.uniformBlockBinding(Q,ue,ue),Z.set(I,ue))}function $(I,Q,Z){let ae=c.get(Q).get(I);l[ae]!==Z&&(n.bindBufferBase(n.UNIFORM_BUFFER,ae,Z),l[ae]=Z)}function he(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},u={},te=null,ie={},f={},l={},d=new WeakMap,p=[],_=null,g=!1,m=null,v=null,S=null,M=null,w=null,T=null,x=null,E=new Ne(0,0,0),N=0,C=!1,L=null,O=null,H=null,A=null,F=null,K.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ye,disable:Xe,bindFramebuffer:Tt,drawBuffers:ze,useProgram:ot,setBlending:Ht,setMaterial:Ct,setFlipSided:rn,setCullFace:xt,setLineWidth:qn,setPolygonOffset:Nt,setScissorTest:Sn,activeTexture:bn,bindTexture:En,unbindTexture:B,compressedTexImage2D:Tn,compressedTexImage3D:pt,texImage2D:y,texImage3D:V,pixelStorei:ne,getParameter:se,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:Ve,texStorage3D:R,texSubImage2D:mt,texSubImage3D:me,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Fe,scissor:oe,viewport:fe,reset:he}}function K_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,y){return g?new OffscreenCanvas(R,y):Br("canvas")}function v(R,y,V){let se=1,ne=Ve(R);if((ne.width>V||ne.height>V)&&(se=V/Math.max(ne.width,ne.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let oe=Math.floor(se*ne.width),fe=Math.floor(se*ne.height);f===void 0&&(f=m(oe,fe));let J=y?m(oe,fe):f;return J.width=oe,J.height=fe,J.getContext("2d").drawImage(R,0,0,oe,fe),Oe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+oe+"x"+fe+")."),J}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function S(R){return R.generateMipmaps}function M(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(R,y,V,se,ne,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;se&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===n.RED&&(V===n.FLOAT&&(J=n.R32F),V===n.HALF_FLOAT&&(J=n.R16F),V===n.UNSIGNED_BYTE&&(J=n.R8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.R16_EXT),V===n.SHORT&&fe&&(J=fe.R16_SNORM_EXT)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.R8UI),V===n.UNSIGNED_SHORT&&(J=n.R16UI),V===n.UNSIGNED_INT&&(J=n.R32UI),V===n.BYTE&&(J=n.R8I),V===n.SHORT&&(J=n.R16I),V===n.INT&&(J=n.R32I)),y===n.RG&&(V===n.FLOAT&&(J=n.RG32F),V===n.HALF_FLOAT&&(J=n.RG16F),V===n.UNSIGNED_BYTE&&(J=n.RG8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.RG16_EXT),V===n.SHORT&&fe&&(J=fe.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RG8UI),V===n.UNSIGNED_SHORT&&(J=n.RG16UI),V===n.UNSIGNED_INT&&(J=n.RG32UI),V===n.BYTE&&(J=n.RG8I),V===n.SHORT&&(J=n.RG16I),V===n.INT&&(J=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGB8UI),V===n.UNSIGNED_SHORT&&(J=n.RGB16UI),V===n.UNSIGNED_INT&&(J=n.RGB32UI),V===n.BYTE&&(J=n.RGB8I),V===n.SHORT&&(J=n.RGB16I),V===n.INT&&(J=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),V===n.UNSIGNED_INT&&(J=n.RGBA32UI),V===n.BYTE&&(J=n.RGBA8I),V===n.SHORT&&(J=n.RGBA16I),V===n.INT&&(J=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_SHORT&&fe&&(J=fe.RGB16_EXT),V===n.SHORT&&fe&&(J=fe.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),y===n.RGBA){let $=oe?Or:$e.getTransfer(ne);V===n.FLOAT&&(J=n.RGBA32F),V===n.HALF_FLOAT&&(J=n.RGBA16F),V===n.UNSIGNED_BYTE&&(J=$===it?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&fe&&(J=fe.RGBA16_EXT),V===n.SHORT&&fe&&(J=fe.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(R,y){let V;return R?y===null||y===zn||y===gs?V=n.DEPTH24_STENCIL8:y===xn?V=n.DEPTH32F_STENCIL8:y===tr&&(V=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===zn||y===gs?V=n.DEPTH_COMPONENT24:y===xn?V=n.DEPTH_COMPONENT32F:y===tr&&(V=n.DEPTH_COMPONENT16),V}function E(R,y){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function N(R){let y=new WeakRef(R);i.get(R).__ref=y,p.add(y),_.register(R,y,y)}function C(R){let y=i.get(R).__ref;y!==void 0&&(p.delete(y),_.unregister(y))}function L(R){H(R.target)}function O(R){A(R.target)}function H(R){R.removeEventListener("dispose",L),C(R),z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&u.delete(R)}function A(R){R.removeEventListener("dispose",O),C(R),ee(R)}function F(){for(let R of p){let y=R.deref();y!==void 0&&(y.isRenderTarget===!0?A(y):H(y))}p.clear(),u.clear()}function z(R){let y=i.get(R);if(y.__webglInit===void 0)return;let V=R.source,se=d.get(V);if(se){let ne=se[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&k(R),Object.keys(se).length===0&&d.delete(V)}i.remove(R)}function k(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let V=R.source,se=d.get(V);delete se[y.__cacheKey],a.memory.textures--}function ee(R){let y=i.get(R);y.__depthDisposeCallback&&y.__depthDisposeCallback();let V=R.depthTexture;if(V&&V.renderTarget===R&&H(V),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(y.__webglFramebuffer[ne]))for(let oe=0;oe<y.__webglFramebuffer[ne].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[ne][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[ne]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[ne])}else{if(Array.isArray(y.__webglFramebuffer))for(let ne=0;ne<y.__webglFramebuffer.length;ne++)n.deleteFramebuffer(y.__webglFramebuffer[ne]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ne=0;ne<y.__webglColorRenderbuffer.length;ne++)y.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[ne]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let se=R.textures;for(let ne=0,oe=se.length;ne<oe;ne++){let fe=i.get(se[ne]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(se[ne])}i.remove(R)}let X=0;function te(){X=0}function ie(){return X}function be(R){X=R}function He(){let R=X;return R>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,R}function K(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.mipmapsAutoUpdate),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function _e(R,y){let V=i.get(R);if(R.isVideoTexture&&Pt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let se=R.image;if(se===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(V,R,y);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function Ee(R,y){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ct(V,R,y);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function Ue(R,y){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Ct(V,R,y);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function ye(R,y){let V=i.get(R);if(R.version>0&&V.__version!==R.version){rn(V,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}let Xe={[_i]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[So]:n.MIRRORED_REPEAT},Tt={[zt]:n.NEAREST,[Ed]:n.NEAREST_MIPMAP_NEAREST,[ua]:n.NEAREST_MIPMAP_LINEAR,[nn]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},ze={[Rd]:n.NEVER,[lh]:n.ALWAYS,[Cd]:n.LESS,[ah]:n.LEQUAL,[Pd]:n.EQUAL,[oh]:n.GEQUAL,[Id]:n.GREATER,[Ld]:n.NOTEQUAL};function ot(R,y){if(y.type===xn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===jo||y.magFilter===ua||y.magFilter===bi||y.minFilter===nn||y.minFilter===jo||y.minFilter===ua||y.minFilter===bi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Xe[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Xe[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Xe[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Tt[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Tt[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===zt||y.minFilter!==ua&&y.minFilter!==bi||y.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",L),N(y));let se=y.source,ne=d.get(se);ne===void 0&&(ne={},d.set(se,ne));let oe=K(y);if(oe!==R.__cacheKey){ne[oe]===void 0&&(ne[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[oe].usedTimes++;let fe=ne[R.__cacheKey];fe!==void 0&&(ne[R.__cacheKey].usedTimes--,fe.usedTimes===0&&k(y)),R.__cacheKey=oe,R.__webglTexture=ne[oe].texture}return V}function Ke(R,y,V){return Math.floor(Math.floor(R/V)/y)}function Ht(R,y,V,se){let oe=R.updateRanges;if(oe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,se,y.data);else{oe.sort((I,Q)=>I.start-Q.start);let fe=0;for(let I=1;I<oe.length;I++){let Q=oe[fe],Z=oe[I],ue=Q.start+Q.count,ae=Ke(Z.start,y.width,4),le=Ke(Q.start,y.width,4);Z.start<=ue+1&&ae===le&&Ke(Z.start+Z.count-1,y.width,4)===ae?Q.count=Math.max(Q.count,Z.start+Z.count-Q.start):(++fe,oe[fe]=Z)}oe.length=fe+1;let J=t.getParameter(n.UNPACK_ROW_LENGTH),$=t.getParameter(n.UNPACK_SKIP_PIXELS),he=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let I=0,Q=oe.length;I<Q;I++){let Z=oe[I],ue=Math.floor(Z.start/4),ae=Math.ceil(Z.count/4),le=ue%y.width,Pe=Math.floor(ue/y.width),Ye=ae,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,le),t.pixelStorei(n.UNPACK_SKIP_ROWS,Pe),t.texSubImage2D(n.TEXTURE_2D,0,le,Pe,Ye,re,V,se,y.data)}R.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,J),t.pixelStorei(n.UNPACK_SKIP_PIXELS,$),t.pixelStorei(n.UNPACK_SKIP_ROWS,he)}}function Ct(R,y,V){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);let ne=ct(R,y),oe=y.source;t.bindTexture(se,R.__webglTexture,n.TEXTURE0+V);let fe=i.get(oe);if(oe.version!==fe.__version||ne===!0){if(t.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let re=$e.getPrimaries($e.workingColorSpace),De=y.colorSpace===Ti?null:$e.getPrimaries(y.colorSpace),qe=y.colorSpace===Ti||re===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let $=v(y.image,!1,s.maxTextureSize);$=Fe(y,$);let he=r.convert(y.format,y.colorSpace),I=r.convert(y.type),Q=T(y.internalFormat,he,I,y.normalized,y.colorSpace,y.isVideoTexture);ot(se,y);let Z,ue=y.mipmaps,ae=y.isVideoTexture!==!0,le=fe.__version===void 0||ne===!0,Pe=oe.dataReady,Ye=E(y,$);if(y.isDepthTexture)Q=x(y.format===Ei,y.type),le&&(ae?t.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,he,I,null));else if(y.isDataTexture)if(ue.length>0){ae&&le&&t.texStorage2D(n.TEXTURE_2D,Ye,Q,ue[0].width,ue[0].height);for(let re=0,De=ue.length;re<De;re++)Z=ue[re],ae?Pe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Z.width,Z.height,he,I,Z.data):t.texImage2D(n.TEXTURE_2D,re,Q,Z.width,Z.height,0,he,I,Z.data);y.generateMipmaps=!1}else ae?(le&&t.texStorage2D(n.TEXTURE_2D,Ye,Q,$.width,$.height),Pe&&Ht(y,$,he,I)):t.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,he,I,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ae&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Q,ue[0].width,ue[0].height,$.depth);for(let re=0,De=ue.length;re<De;re++)if(Z=ue[re],y.format!==kn)if(he!==null)if(ae){if(Pe)if(y.layerUpdates.size>0){let qe=yh(Z.width,Z.height,y.format,y.type);for(let ge of y.layerUpdates){let lt=Z.data.subarray(ge*qe/Z.data.BYTES_PER_ELEMENT,(ge+1)*qe/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ge,Z.width,Z.height,1,he,lt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,$.depth,he,Z.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,Q,Z.width,Z.height,$.depth,0,Z.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Pe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,Z.width,Z.height,$.depth,he,I,Z.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,Q,Z.width,Z.height,$.depth,0,he,I,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ae&&le&&t.texStorage2D(n.TEXTURE_2D,Ye,Q,ue[0].width,ue[0].height);for(let re=0,De=ue.length;re<De;re++)Z=ue[re],y.format!==kn?he!==null?ae?Pe&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,Z.width,Z.height,he,Z.data):t.compressedTexImage2D(n.TEXTURE_2D,re,Q,Z.width,Z.height,0,Z.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Pe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,Z.width,Z.height,he,I,Z.data):t.texImage2D(n.TEXTURE_2D,re,Q,Z.width,Z.height,0,he,I,Z.data)}else if(y.isDataArrayTexture)if(ae){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,Q,$.width,$.height,$.depth),Pe)if(y.layerUpdates.size>0){let re=yh($.width,$.height,y.format,y.type);for(let De of y.layerUpdates){let qe=$.data.subarray(De*re/$.data.BYTES_PER_ELEMENT,(De+1)*re/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,$.width,$.height,1,he,I,qe)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,I,$.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,he,I,$.data);else if(y.isData3DTexture)ae?(le&&t.texStorage3D(n.TEXTURE_3D,Ye,Q,$.width,$.height,$.depth),Pe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,I,$.data)):t.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,he,I,$.data);else if(y.isFramebufferTexture){if(le)if(ae)t.texStorage2D(n.TEXTURE_2D,Ye,Q,$.width,$.height);else{let re=$.width,De=$.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(n.TEXTURE_2D,qe,Q,re,De,0,he,I,null),re>>=1,De>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),$.parentNode!==re){re.appendChild($),u.add(y),re.onpaint=De=>{let qe=De.changedElements;for(let ge of u)qe.includes(ge.image)&&(ge.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let qe=n.RGBA,ge=n.RGBA,lt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qe,ge,lt,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(ue.length>0){if(ae&&le){let re=Ve(ue[0]);t.texStorage2D(n.TEXTURE_2D,Ye,Q,re.width,re.height)}for(let re=0,De=ue.length;re<De;re++)Z=ue[re],ae?Pe&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,he,I,Z):t.texImage2D(n.TEXTURE_2D,re,Q,he,I,Z);y.generateMipmaps=!1}else if(ae){if(le){let re=Ve($);t.texStorage2D(n.TEXTURE_2D,Ye,Q,re.width,re.height)}Pe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,I,$)}else t.texImage2D(n.TEXTURE_2D,0,Q,he,I,$);S(y)&&y.mipmapsAutoUpdate===!0&&M(se),fe.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function rn(R,y,V){if(y.image.length!==6)return;let se=ct(R,y),ne=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let oe=i.get(ne);if(ne.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+V);let fe=$e.getPrimaries($e.workingColorSpace),J=y.colorSpace===Ti?null:$e.getPrimaries(y.colorSpace),$=y.colorSpace===Ti||fe===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let he=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,Q=[];for(let ge=0;ge<6;ge++)!he&&!I?Q[ge]=v(y.image[ge],!0,s.maxCubemapSize):Q[ge]=I?y.image[ge].image:y.image[ge],Q[ge]=Fe(y,Q[ge]);let Z=Q[0],ue=r.convert(y.format,y.colorSpace),ae=r.convert(y.type),le=T(y.internalFormat,ue,ae,y.normalized,y.colorSpace),Pe=y.isVideoTexture!==!0,Ye=oe.__version===void 0||se===!0,re=ne.dataReady,De=E(y,Z);ot(n.TEXTURE_CUBE_MAP,y);let qe;if(y.isDepthTexture){if(le=x(y.format===Ei,y.type),Ye)if(Pe)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,le,Z.width,Z.height);else for(let ge=0;ge<6;ge++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,Z.width,Z.height,0,ue,ae,null)}else if(he){Pe&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,le,Z.width,Z.height);for(let ge=0;ge<6;ge++){qe=Q[ge].mipmaps;for(let lt=0;lt<qe.length;lt++){let Ut=qe[lt];y.format!==kn?ue!==null?Pe?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt,0,0,Ut.width,Ut.height,ue,Ut.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt,le,Ut.width,Ut.height,0,Ut.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt,0,0,Ut.width,Ut.height,ue,ae,Ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt,le,Ut.width,Ut.height,0,ue,ae,Ut.data)}}}else{if(qe=y.mipmaps,Pe&&Ye){qe.length>0&&De++;let ge=Ve(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,le,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(I){Pe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Q[ge].width,Q[ge].height,ue,ae,Q[ge].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,Q[ge].width,Q[ge].height,0,ue,ae,Q[ge].data);for(let lt=0;lt<qe.length;lt++){let Ri=qe[lt].image[ge].image;Pe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt+1,0,0,Ri.width,Ri.height,ue,ae,Ri.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt+1,le,Ri.width,Ri.height,0,ue,ae,Ri.data)}}else{Pe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ue,ae,Q[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,le,ue,ae,Q[ge]);for(let lt=0;lt<qe.length;lt++){let Ut=qe[lt];Pe?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt+1,0,0,ue,ae,Ut.image[ge]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,lt+1,le,ue,ae,Ut.image[ge])}}}S(y)&&y.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),oe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function xt(R,y,V,se,ne,oe){let fe=r.convert(V.format,V.colorSpace),J=r.convert(V.type),$=T(V.internalFormat,fe,J,V.normalized,V.colorSpace),he=i.get(y),I=i.get(V);if(I.__renderTarget=y,!he.__hasExternalTextures){let Q=Math.max(1,y.width>>oe),Z=Math.max(1,y.height>>oe);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,oe,$,Q,Z,y.depth,0,fe,J,null):t.texImage2D(ne,oe,$,Q,Z,0,fe,J,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),me(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ne,I.__webglTexture,0,mt(y)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ne,I.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function qn(R,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let se=y.depthTexture,ne=se&&se.isDepthTexture?se.type:null,oe=x(y.stencilBuffer,ne),fe=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;me(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),oe,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),oe,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,oe,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,R)}else{let se=y.textures;for(let ne=0;ne<se.length;ne++){let oe=se[ne],fe=r.convert(oe.format,oe.colorSpace),J=r.convert(oe.type),$=T(oe.internalFormat,fe,J,oe.normalized,oe.colorSpace);me(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt(y),$,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt(y),$,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,$,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(R,y,V){let se=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=i.get(y.depthTexture);ne.__renderTarget=y;let oe=se?y.depthTexture.image[0]:y.depthTexture.image;(!ne.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),se?ye(y.depthTexture,0):_e(y.depthTexture,0);let fe=ne.__webglTexture,J=mt(y),$=se?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,he=y.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===vi)me(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,$,fe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,he,$,fe,0);else if(y.depthTexture.format===Ei)me(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,he,$,fe,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,he,$,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Sn(R){let y=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let se=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",ne)};se.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=se}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let se=0;se<6;se++)Nt(y.__webglFramebuffer[se],R,se);else R.texture.mipmaps.length>0?Nt(y.__webglFramebuffer[0],R,0):Nt(y.__webglFramebuffer,R,0);else if(V){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),qn(y.__webglDepthbuffer[se],R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,oe)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),qn(y.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function bn(R,y,V){let se=i.get(R);y!==void 0&&xt(se.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Sn(R)}function En(R){let y=R.texture,V=i.get(R),se=i.get(y);R.addEventListener("dispose",O),N(R);let ne=R.textures,oe=R.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),oe){V.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){V.__webglFramebuffer[J]=[];for(let $=0;$<y.mipmaps.length;$++)V.__webglFramebuffer[J][$]=n.createFramebuffer()}else V.__webglFramebuffer[J]=n.createFramebuffer()}else{if(y.mipmaps.length>0){V.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)V.__webglFramebuffer[J]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(fe)for(let J=0,$=ne.length;J<$;J++){let he=i.get(ne[J]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&me(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){let $=ne[J];V.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[J]);let he=r.convert($.format,$.colorSpace),I=r.convert($.type),Q=T($.internalFormat,he,I,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),Z=mt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,Q,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,V.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),qn(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ot(n.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)xt(V.__webglFramebuffer[J][$],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else xt(V.__webglFramebuffer[J],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);S(y)?M(n.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}else if(fe){for(let J=0,$=ne.length;J<$;J++){let he=ne[J],I=i.get(he),Q=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),ot(Q,he),xt(V.__webglFramebuffer,R,he,n.COLOR_ATTACHMENT0+J,Q,0),S(he)&&M(Q)}t.unbindTexture()}else{let J=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,se.__webglTexture),ot(J,y),y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)xt(V.__webglFramebuffer[$],R,y,n.COLOR_ATTACHMENT0,J,$);else xt(V.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,J,0);S(y)?M(J):y.mipmaps.length>0&&n.texParameteri(J,n.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Sn(R)}function B(R){let y=R.textures;for(let V=0,se=y.length;V<se;V++){let ne=y[V];if(S(ne)&&ne.mipmapsAutoUpdate===!0){let oe=w(R),fe=i.get(ne).__webglTexture;t.bindTexture(oe,fe),M(oe),t.unbindTexture()}}}let Tn=[];function pt(R){if(R.samples>0){if(me(R)===!1){let y=R.textures,V=R.width,se=R.height,ne=n.COLOR_BUFFER_BIT,oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),J=y.length>1;if(J)for(let he=0;he<y.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let he=0;he<y.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let I=i.get(y[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,V,se,0,0,V,se,ne,n.NEAREST),l===!0&&(Tn.length=0,Tn.push(n.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Tn.push(oe),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tn))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<y.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,fe.__webglColorRenderbuffer[he]);let I=i.get(y[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,I,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function mt(R){return Math.min(s.maxSamples,R.samples)}function me(R){let y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Pt(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Fe(R,y){let V=R.colorSpace,se=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Fr&&V!==Ti&&($e.getTransfer(V)===it?(se!==kn||ne!==on)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",V)),y}function Ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=te,this.getTextureUnits=ie,this.setTextureUnits=be,this.setTexture2D=_e,this.setTexture2DArray=Ee,this.setTexture3D=Ue,this.setTextureCube=ye,this.rebindTextures=bn,this.setupRenderTarget=En,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Sn,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=me,this.dispose=F}function Q_(n,e){function t(i,s=Ti){let r,a=$e.getTransfer(s);if(i===on)return n.UNSIGNED_BYTE;if(i===tl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===nh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===jc)return n.BYTE;if(i===eh)return n.SHORT;if(i===tr)return n.UNSIGNED_SHORT;if(i===el)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===It)return n.HALF_FLOAT;if(i===ih)return n.ALPHA;if(i===sh)return n.RGB;if(i===kn)return n.RGBA;if(i===vi)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===rh)return n.RED;if(i===il)return n.RED_INTEGER;if(i===Xi)return n.RG;if(i===sl)return n.RG_INTEGER;if(i===rl)return n.RGBA_INTEGER;if(i===da||i===fa||i===pa||i===ma)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===al||i===ol||i===ll||i===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hl||i===ul||i===dl||i===fl||i===pl||i===ga||i===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hl||i===ul)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===dl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===fl)return r.COMPRESSED_R11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ga)return r.COMPRESSED_RG11_EAC;if(i===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml||i===Sl||i===bl||i===El||i===Tl||i===wl||i===Al||i===Rl||i===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_l)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ml)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===El)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Al)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cl)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pl||i===Il||i===Ll)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Pl)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ll)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dl||i===Nl||i===xa||i===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Dl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var j_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ev=`
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

}`,Nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Jr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Mt({vertexShader:j_,fragmentShader:ev,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nt(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uh=class extends Jn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",g=new Nh,m={},v=t.getContextAttributes(),S=null,M=null,w=[],T=[],x=new ce,E=null,N=null,C=new $t;C.viewport=new gt;let L=new $t;L.viewport=new gt;let O=[C,L],H=new Jo,A=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let _e=w[K];return _e===void 0&&(_e=new Ws,w[K]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(K){let _e=w[K];return _e===void 0&&(_e=new Ws,w[K]=_e),_e.getGripSpace()},this.getHand=function(K){let _e=w[K];return _e===void 0&&(_e=new Ws,w[K]=_e),_e.getHandSpace()};function z(K){let _e=T.indexOf(K.inputSource);if(_e===-1)return;let Ee=w[_e];Ee!==void 0&&(Ee.update(K.inputSource,K.frame,c||a),Ee.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",ee);for(let K=0;K<w.length;K++){let _e=T[K];_e!==null&&(T[K]=null,w[K].disconnect(_e))}A=null,F=null,g.reset();for(let K in m)delete m[K];if(e.setRenderTarget(S),d=null,f=null,u=null,s=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),N!==null){let K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",ee),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=v.stencil?Ei:vi,Ue=v.stencil?gs:zn);let Xe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Xe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new bt(f.textureWidth,f.textureHeight,{format:kn,type:on,depthTexture:new Bn(f.textureWidth,f.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ee={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new bt(d.framebufferWidth,d.framebufferHeight,{format:kn,type:on,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ee(K){for(let _e=0;_e<K.removed.length;_e++){let Ee=K.removed[_e],Ue=T.indexOf(Ee);Ue>=0&&(T[Ue]=null,w[Ue].disconnect(Ee))}for(let _e=0;_e<K.added.length;_e++){let Ee=K.added[_e],Ue=T.indexOf(Ee);if(Ue===-1){for(let Xe=0;Xe<w.length;Xe++)if(Xe>=T.length){T.push(Ee),Ue=Xe;break}else if(T[Xe]===null){T[Xe]=Ee,Ue=Xe;break}if(Ue===-1)break}let ye=w[Ue];ye&&ye.connect(Ee)}}function X(K,_e){_e===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(_e.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let _e=K.near,Ee=K.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Ee=g.depthFar)),H.near=L.near=C.near=_e,H.far=L.far=C.far=Ee,(A!==H.near||F!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),A=H.near,F=H.far),H.layers.mask=K.layers.mask|6,C.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Ue=K.parent,ye=H.cameras;X(H,Ue);for(let Xe=0;Xe<ye.length;Xe++)X(ye[Xe],Ue);H.projectionMatrix.copy(C.projectionMatrix),H.projectionMatrixInverse.copy(C.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),te(K,H,Ue)};function te(K,_e,Ee){Ee===null?K.matrix.copy(_e.matrixWorld):(K.matrix.copy(Ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(_e.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(_e.projectionMatrix),K.projectionMatrixInverse.copy(_e.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(K){return m[K]};let ie=null;function be(K,_e){if(h=_e.getViewerPose(c||a),p=_e,h!==null){let Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let Ue=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Ue=!0);for(let ze=0;ze<Ee.length;ze++){let ot=Ee[ze],ct=null;if(d!==null)ct=d.getViewport(ot);else{let Ht=u.getViewSubImage(f,ot);ct=Ht.viewport,ze===0&&(e.setRenderTargetTextures(M,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(M))}let Ke=O[ze];Ke===void 0&&(Ke=new $t,Ke.layers.enable(ze),Ke.viewport=new gt,O[ze]=Ke),Ke.matrix.fromArray(ot.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ot.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ct.x,ct.y,ct.width,ct.height),ze===0&&(H.matrix.copy(Ke.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ue===!0&&H.cameras.push(Ke)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=i.getBinding();let ze=u.getDepthInformation(Ee[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=i.getBinding();for(let ze=0;ze<Ee.length;ze++){let ot=Ee[ze].camera;if(ot){let ct=m[ot];ct||(ct=new Jr,m[ot]=ct);let Ke=u.getCameraImage(ot);ct.sourceTexture=Ke}}}}for(let Ee=0;Ee<w.length;Ee++){let Ue=T[Ee],ye=w[Ee];Ue!==null&&ye!==void 0&&ye.update(Ue,_e,c||a)}ie&&ie(K,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),p=null}let He=new cf;He.setAnimationLoop(be),this.setAnimationLoop=function(K){ie=K},this.dispose=function(){}}},tv=new rt,vf=new Ge;vf.set(-1,0,0,0,1,0,0,0,1);function nv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,xh(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,S,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Xt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Xt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=e.get(m),S=v.envMap,M=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(M)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=S*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iv(n,e,t,i){let s={},r={};function a(v,S){let M=S.program;i.uniformBlockBinding(v,M,s[v.id])}function o(v,S){let M=s[v.id];M===void 0&&(p(v),M=l(v),s[v.id]=M,v.addEventListener("dispose",g));let w=S.program;i.updateUBOMapping(v,w);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let S=n.createBuffer(),M=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,M,w),n.bindBuffer(n.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],M=v.uniforms,w=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,x=M.length;T<x;T++){let E=M[T];if(Array.isArray(E))for(let N=0,C=E.length;N<C;N++)h(E[N],T,N,w);else h(E,T,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(v,S,M,w){if(f(v,S,M,w)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let E=0;for(let N=0;N<x.length;N++){let C=x[N],L=_(C,!0);u(C,v.__data,E),E+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,v.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,T,v.__data)}}function u(v,S,M){typeof v=="number"||typeof v=="boolean"?S[M]=v:v.isMatrix3?(S[M]=v.elements[0],S[M+1]=v.elements[1],S[M+2]=v.elements[2],S[M+3]=0,S[M+4]=v.elements[3],S[M+5]=v.elements[4],S[M+6]=v.elements[5],S[M+7]=0,S[M+8]=v.elements[6],S[M+9]=v.elements[7],S[M+10]=v.elements[8],S[M+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-M),M):v.toArray(S,M)}function f(v,S,M,w){let T=v.value,x=S+"_"+M;if(Array.isArray(T)){w[x]===void 0&&(w[x]=[]);let E=w[x],N=!1;for(let C=0;C<T.length;C++)d(T[C],E,C)===!0&&(N=!0);return N}return d(T,w,x)}function d(v,S,M){if(S[M]===void 0)return typeof v=="number"||typeof v=="boolean"?S[M]=v:ArrayBuffer.isView(v)?S[M]=v.slice():S[M]=v.clone(),!0;{let w=S[M];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return S[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function p(v){let S=v.uniforms,M=0,w=16;for(let x=0,E=S.length;x<E;x++){let N=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,L=N.length;C<L;C++){let O=N[C],H=Array.isArray(O.value)?O.value:[O.value],A=Array.isArray(S[x])||Array.isArray(O.value),F=M;for(let k=0,ee=H.length;k<ee;k++){let X=H[k],te=_(X,A),ie=M%w,be=ie%te.boundary,He=ie+be;M+=be,He!==0&&w-He<te.storage&&(M+=w-He),k===0&&(F=M),M+=te.storage}let z=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new z((M-F)/Float32Array.BYTES_PER_ELEMENT),O.__offset=F}}let T=M%w;return T>0&&(M+=w-T),v.__size=M,v.__cache={},this}function _(v,S){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=16,M.storage=48):v.isMatrix4?(M.boundary=16,M.storage=64):v.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function g(v){let S=v.target;S.removeEventListener("dispose",g),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let v in s)n.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function rv(){return ti===null&&(ti=new Ao(sv,16,16,Xi,It),ti.name="DFG_LUT",ti.minFilter=nn,ti.magFilter=nn,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var kl=class{constructor(e={}){let{canvas:t=Dd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=on}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let _=d,g=new Set([rl,sl,il]),m=new Set([on,zn,tr,gs,tl,nl]),v=new Uint32Array(4),S=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,T=null,x=[],E=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,O=null,H=null,A=null,F=null;this._outputColorSpace=St;let z=0,k=0,ee=null,X=-1,te=null,ie=new gt,be=new gt,He=null,K=new Ne(0),_e=0,Ee=t.width,Ue=t.height,ye=1,Xe=null,Tt=null,ze=new gt(0,0,Ee,Ue),ot=new gt(0,0,Ee,Ue),ct=!1,Ke=new Oi,Ht=new Ro,Ct=!1,rn=!1,xt=new rt,qn=new P,Nt=new gt,Sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bn=!1;function En(){return ee===null?ye:1}let B=i;function Tn(b,U){return t.getContext(b,U)}let pt,mt,me,Pt,Fe,Ve,R,y,V,se,ne,oe,fe,J,$,he,I,Q,Z,ue,ae,le,Pe;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ge,!1),B===null){let U="webgl2";if(B=Tn(U,b),B===null)throw Tn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(b){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ke("WebGLRenderer: "+b.message),b}function Ye(){pt=new gx(B),pt.init(),ae=new Q_(B,pt),mt=new rx(B,pt,e,ae),me=new $_(B,pt),mt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),H=B.createFramebuffer(),A=B.createFramebuffer(),F=B.createFramebuffer(),Pt=new vx(B),Fe=new F_,Ve=new K_(B,pt,me,Fe,mt,ae,Pt),R=new mx(C),y=new Mm(B),le=new ix(B,y),V=new xx(B,y,Pt,le),se=new Mx(B,V,y,le,Pt),Q=new yx(B,mt,Ve),$=new ax(Fe),ne=new U_(C,R,pt,mt,le,$),oe=new nv(C,Fe),fe=new B_,J=new W_(pt),I=new nx(C,R,me,se,p,l),he=new J_(C,se,mt),Pe=new iv(B,Pt,mt,me),Z=new sx(B,pt,Pt),ue=new _x(B,pt,Pt),Pt.programs=ne.programs,C.capabilities=mt,C.extensions=pt,C.properties=Fe,C.renderLists=fe,C.shadowMap=he,C.state=me,C.info=Pt}_!==on&&(N=new bx(_,t.width,t.height,o,s,r));let re=new Uh(C,B);this.xr=re,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(b){b!==void 0&&(ye=b,this.setSize(Ee,Ue,!1))},this.getSize=function(b){return b.set(Ee,Ue)},this.setSize=function(b,U,q=!0){if(re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ee=b,Ue=U,t.width=Math.floor(b*ye),t.height=Math.floor(U*ye),q===!0&&(t.style.width=b+"px",t.style.height=U+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ee*ye,Ue*ye).floor()},this.setDrawingBufferSize=function(b,U,q){Ee=b,Ue=U,ye=q,t.width=Math.floor(b*q),t.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===on){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ie)},this.getViewport=function(b){return b.copy(ze)},this.setViewport=function(b,U,q,G){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,U,q,G),me.viewport(ie.copy(ze).multiplyScalar(En()).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,U,q,G){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,U,q,G),me.scissor(be.copy(ot).multiplyScalar(En()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){me.setScissorTest(ct=b)},this.setOpaqueSort=function(b){Xe=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let G=0;if(b){let W=!1;if(ee!==null){let pe=ee.texture.format;W=g.has(pe)}if(W){let pe=ee.texture.type,Se=m.has(pe),de=I.getClearColor(),Me=I.getClearAlpha(),Re=de.r,We=de.g,Qe=de.b;Se?(v[0]=Re,v[1]=We,v[2]=Qe,v[3]=Me,B.clearBufferuiv(B.COLOR,0,v)):(S[0]=Re,S[1]=We,S[2]=Qe,S[3]=Me,B.clearBufferiv(B.COLOR,0,S))}else G|=B.COLOR_BUFFER_BIT}U&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),O=b},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),I.dispose(),fe.dispose(),J.dispose(),Ve.dispose(),Fe.dispose(),R.dispose(),se.dispose(),V.dispose(),le.dispose(),Pe.dispose(),ne.dispose(),re.dispose(),re.removeEventListener("sessionstart",fu),re.removeEventListener("sessionend",pu),Qi.stop()};function De(b){b.preventDefault(),zr("WebGLRenderer: Context Lost."),L=!0}function qe(){zr("WebGLRenderer: Context Restored."),L=!1;let b=Pt.autoReset,U=he.enabled,q=he.autoUpdate,G=he.needsUpdate,W=he.type;Ye(),Pt.autoReset=b,he.enabled=U,he.autoUpdate=q,he.needsUpdate=G,he.type=W}function ge(b){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){let U=b.target;U.removeEventListener("dispose",lt),Ut(U)}function Ut(b){Ri(b),Fe.remove(b)}function Ri(b){let U=Fe.get(b).programs;U!==void 0&&(U.forEach(function(q){ne.releaseProgram(q)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,G,W,pe){U===null&&(U=Sn);let Se=W.isMesh&&W.matrixWorld.determinantAffine()<0,de=op(b,U,q,G,W);me.setMaterial(G,Se);let Me=q.index,Re=1;if(G.wireframe===!0){if(Me=V.getWireframeAttribute(q),Me===void 0)return;Re=2}let We=q.drawRange,Qe=q.attributes.position,Te=We.start*Re,je=(We.start+We.count)*Re;pe!==null&&(Te=Math.max(Te,pe.start*Re),je=Math.min(je,(pe.start+pe.count)*Re)),Me!==null?(Te=Math.max(Te,0),je=Math.min(je,Me.count)):Qe!=null&&(Te=Math.max(Te,0),je=Math.min(je,Qe.count));let wt=je-Te;if(wt<0||wt===1/0)return;le.setup(W,G,de,q,Me);let dt,ht=Z;if(Me!==null&&(dt=y.get(Me),ht=ue,ht.setIndex(dt)),W.isMesh)G.wireframe===!0?(me.setLineWidth(G.wireframeLinewidth*En()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(W.isLine){let qt=G.linewidth;qt===void 0&&(qt=1),me.setLineWidth(qt*En()),W.isLineSegments?ht.setMode(B.LINES):W.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else W.isPoints?ht.setMode(B.POINTS):W.isSprite&&ht.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let qt=W._multiDrawStarts,we=W._multiDrawCounts,jt=W._multiDrawCount,st=Me?y.get(Me).bytesPerElement:1,ji=Fe.get(G).currentProgram.getUniforms();for(let Yt=0;Yt<jt;Yt++)ji.setValue(B,"_gl_DrawID",Yt),ht.render(qt[Yt]/st,we[Yt])}else if(W.isInstancedMesh)ht.renderInstances(Te,wt,W.count);else if(q.isInstancedBufferGeometry){let qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,we=Math.min(q.instanceCount,qt);ht.renderInstances(Te,wt,we)}else ht.render(Te,wt)};function du(b,U,q,G){O!==null&&b.isNodeMaterial&&O.setObject(G,b),Ct===!0&&$.setState(b,q,!1),b.transparent===!0&&b.side===jn&&b.forceSinglePass===!1?(b.side=Xt,b.needsUpdate=!0,br(b,U,G),b.side=Vi,b.needsUpdate=!0,br(b,U,G),b.side=jn):br(b,U,G)}this.compile=function(b,U,q=null){q===null&&(q=b),O!==null&&O.renderStart(b,U,q),T=J.get(q),T.init(U),E.push(T),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),b!==q&&b.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),rn=this.localClippingEnabled,Ct=$.init(this.clippingPlanes,rn),Ct===!0&&$.setGlobalState(this.clippingPlanes,U),O!==null&&he.render(T.state.shadowsArray,q,U);let G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pe=W.material;if(pe)if(Array.isArray(pe))for(let Se=0;Se<pe.length;Se++){let de=pe[Se];du(de,q,U,W),G.add(de)}else du(pe,q,U,W),G.add(pe)}),T=E.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(b,U,q=null){let G=this.compile(b,U,q);return new Promise(W=>{function pe(){if(G.forEach(function(Se){let Me=Fe.get(Se).currentProgram;(Me===void 0||Me.isReady())&&G.delete(Se)}),G.size===0){W(b);return}setTimeout(pe,10)}pt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let uc=null;function rp(b){uc&&uc(b)}function fu(){Qi.stop()}function pu(){Qi.start()}let Qi=new cf;Qi.setAnimationLoop(rp),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(b){uc=b,re.setAnimationLoop(b),b===null?Qi.stop():Qi.start()},re.addEventListener("sessionstart",fu),re.addEventListener("sessionend",pu),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(b,U);let q=re.enabled===!0&&re.isPresenting===!0,G=N!==null&&(ee===null||q)&&N.begin(C,ee);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,ee),T=J.get(b,E.length),T.init(U),T.state.textureUnits=Ve.getTextureUnits(),E.push(T),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ht.setFromArrayCamera(U):Ke.setFromProjectionMatrix(xt,An,U.reversedDepth),rn=this.localClippingEnabled,Ct=$.init(this.clippingPlanes,rn),w=fe.get(b,x.length),w.init(),x.push(w),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let Se=C.xr.getDepthSensingMesh();Se!==null&&dc(Se,U,-1/0,C.sortObjects)}dc(b,U,0,C.sortObjects),w.finish(),O!==null&&O.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(Xe,Tt),bn=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,bn&&I.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),Ct===!0&&$.beginShadows();let W=T.state.shadowsArray;if(he.render(W,b,U),Ct===!0&&$.endShadows(),(G&&N.hasRenderPass())===!1){let Se=w.opaque,de=w.transmissive;if(T.setupLights(),U.isArrayCamera){let Me=U.cameras;if(de.length>0)for(let Re=0,We=Me.length;Re<We;Re++){let Qe=Me[Re];gu(Se,de,b,Qe)}bn&&I.render(b);for(let Re=0,We=Me.length;Re<We;Re++){let Qe=Me[Re];mu(w,b,Qe,Qe.viewport)}}else de.length>0&&gu(Se,de,b,U),bn&&I.render(b),mu(w,b,U)}ee!==null&&k===0&&(Ve.updateMultisampleRenderTarget(ee),Ve.updateRenderTargetMipmap(ee)),G&&N.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),le.resetDefaultState(),X=-1,te=null,E.pop(),E.length>0?(T=E[E.length-1],Ve.setTextureUnits(T.state.textureUnits),Ct===!0&&$.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,O!==null&&O.renderEnd()};function dc(b,U,q,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let Se=U.isArrayCamera?Ht:Ke;if(!b.frustumCulled||b.intersectsFrustum(Se)){G&&Nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);let de=se.update(b),Me=b.material;Me.visible&&w.push(b,de,Me,q,Nt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){let Se=U.isArrayCamera?Ht:Ke;if(!b.frustumCulled||b.intersectsFrustum(Se)){let de=se.update(b),Me=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Nt.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Nt.copy(de.boundingSphere.center)),Nt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(Me)){let Re=de.groups;for(let We=0,Qe=Re.length;We<Qe;We++){let Te=Re[We],je=Me[Te.materialIndex];je&&je.visible&&w.push(b,de,je,q,Nt.z,Te,U)}}else Me.visible&&w.push(b,de,Me,q,Nt.z,null,U)}}}let pe=b.children;for(let Se=0,de=pe.length;Se<de;Se++)dc(pe[Se],U,q,G)}function mu(b,U,q,G){let{opaque:W,transmissive:pe,transparent:Se}=b;T.setupLightsView(q),Ct===!0&&$.setGlobalState(C.clippingPlanes,q),G&&me.viewport(ie.copy(G)),W.length>0&&za(W,U,q),pe.length>0&&za(pe,U,q),Se.length>0&&za(Se,U,q),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function gu(b,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Te=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new bt(1,1,{generateMipmaps:!0,type:Te?It:on,minFilter:bi,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let pe=T.state.transmissionRenderTarget[G.id],Se=G.viewport||ie;pe.setSize(Se.z*C.transmissionResolutionScale,Se.w*C.transmissionResolutionScale);let de=C.getRenderTarget(),Me=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(pe),C.getClearColor(K),_e=C.getClearAlpha(),_e<1&&C.setClearColor(16777215,.5),C.clear(),bn&&I.render(q);let We=C.toneMapping;C.toneMapping=ei;let Qe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),Ct===!0&&$.setGlobalState(C.clippingPlanes,G),za(b,q,G),Ve.updateMultisampleRenderTarget(pe),Ve.updateRenderTargetMipmap(pe),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let je=0,wt=U.length;je<wt;je++){let dt=U[je],{object:ht,geometry:qt,material:we,group:jt}=dt;if(we.side===jn&&ht.layers.test(G.layers)){let st=we.side;we.side=Xt,we.needsUpdate=!0,xu(ht,q,G,qt,we,jt),we.side=st,we.needsUpdate=!0,Te=!0}}Te===!0&&(Ve.updateMultisampleRenderTarget(pe),Ve.updateRenderTargetMipmap(pe))}C.setRenderTarget(de,Me,Re),C.setClearColor(K,_e),Qe!==void 0&&(G.viewport=Qe),C.toneMapping=We}function za(b,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,pe=b.length;W<pe;W++){let Se=b[W],{object:de,geometry:Me,group:Re}=Se,We=Se.material;We.allowOverride===!0&&G!==null&&(We=G),de.layers.test(q.layers)&&xu(de,U,q,Me,We,Re)}}function xu(b,U,q,G,W,pe){O!==null&&W.isNodeMaterial&&O.setObject(b,W),b.onBeforeRender(C,U,q,G,W,pe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,U,q,G,b,pe),W.transparent===!0&&W.side===jn&&W.forceSinglePass===!1?(W.side=Xt,W.needsUpdate=!0,C.renderBufferDirect(q,U,G,W,b,pe),W.side=Vi,W.needsUpdate=!0,C.renderBufferDirect(q,U,G,W,b,pe),W.side=jn):C.renderBufferDirect(q,U,G,W,b,pe),b.onAfterRender(C,U,q,G,W,pe)}function _u(b){let U=0;for(let q of b)q.texture!==null&&U++;return U}function br(b,U,q){U.isScene!==!0&&(U=Sn);let G=Fe.get(b),W=T.state.lights,pe=T.state.shadowsArray,Se=W.state.version,de=ne.getParameters(b,W.state,pe,U,q,T.state.lightProbeGridArray),Me=ne.getProgramCacheKey(de),Re=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let We=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=R.get(b.envMap||G.environment,We),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",lt),Re=new Map,G.programs=Re,G.programVariants=new Map);let Qe=Re.get(Me);if(Qe!==void 0){if(G.currentProgram===Qe&&G.lightsStateVersion===Se)return yu(b,de),Qe}else de.uniforms=ne.getUniforms(b),O!==null&&b.isNodeMaterial&&O.build(b,q,de),b.onBeforeCompile(de,C),Qe=ne.acquireProgram(de,Me),Re.set(Me,Qe),G.uniforms=de.uniforms;let Te=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Te.clippingPlanes=$.uniform),yu(b,de),G.needsLights=cp(b),G.lightsStateVersion=Se,G.needsLights&&(Te.ambientLightColor.value=W.state.ambient,Te.lightProbe.value=W.state.probe,Te.sunLights.value=W.state.sun,Te.sunLightShadows.value=W.state.sunShadow,Te.directionalLights.value=W.state.directional,Te.directionalLightShadows.value=W.state.directionalShadow,Te.spotLights.value=W.state.spot,Te.spotLightShadows.value=W.state.spotShadow,Te.rectAreaLights.value=W.state.rectArea,Te.ltc_1.value=W.state.rectAreaLTC1,Te.ltc_2.value=W.state.rectAreaLTC2,Te.pointLights.value=W.state.point,Te.pointLightShadows.value=W.state.pointShadow,Te.hemisphereLights.value=W.state.hemi,Te.sunShadowMatrix.value=W.state.sunShadowMatrix,Te.sunShadowCascade.value=W.state.sunShadowCascade,Te.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Te.spotLightMatrix.value=W.state.spotLightMatrix,Te.spotLightMap.value=W.state.spotLightMap,Te.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=_u(T.state.lightProbeGridArray),G.currentProgram=Qe,G.uniformsList=null,Qe}function ap(b,U,q,G,W){let pe=Fe.get(b),Se=pe.currentProgram.id+","+G+","+W,de=pe.programVariants.get(Se);return de===void 0?(de=br(b,U,q),pe.programVariants.set(Se,de)):(pe.currentProgram=de,pe.uniformsList=null,pe.outputColorSpace=G,pe.toneMapping=W),de}function vu(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=nr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function yu(b,U){let q=Fe.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function op(b,U,q,G,W){U.isScene!==!0&&(U=Sn),Ve.resetTextureUnits();let pe=U.fog,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,de=ee===null?C.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Re=R.get(G.envMap||Se,Me),We=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color,dt=ei;G.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(dt=C.toneMapping);let ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=ht!==void 0?ht.length:0,we=Fe.get(G),jt=T.state.lights;if(Ct===!0&&(rn===!0||b!==te)){let _t=b===te&&G.id===X;$.setState(G,b,_t)}let st=!1,ji=!1;G.version===we.__version?we.needsLights&&we.lightsStateVersion!==jt.state.version||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Re||G.fog===!0&&we.fog!==pe||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==$.numPlanes||we.numIntersection!==$.numIntersection)||we.vertexAlphas!==We||we.vertexTangents!==Qe||we.morphTargets!==Te||we.morphNormals!==je||we.morphColors!==wt||we.morphTargetsCount!==qt||we.numLightProbeGrids!==_u(T.state.lightProbeGridArray)?st=!0:(we.outputColorSpace!==de||we.toneMapping!==dt)&&(ji=!0):(st=!0,we.__version=G.version);let Yt=we.currentProgram;(st===!0||ji===!0)&&(Yt=ji===!0?ap(G,U,W,de,dt):br(G,U,W),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Yt,we));let ka=!1,Ci=!1,es=!1,tt=Yt.getUniforms(),Gt=we.uniforms;if(me.useProgram(Yt.program)&&(ka=!0,Ci=!0,es=!0),G.id!==X&&(X=G.id,Ci=!0),ka||te!==b){me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),tt.setValue(B,"projectionMatrix",b.projectionMatrix),tt.setValue(B,"viewMatrix",b.matrixWorldInverse);let Ft=tt.map.cameraPosition;Ft!==void 0&&Ft.setValue(B,qn.setFromMatrixPosition(b.matrixWorld)),mt.logarithmicDepthBuffer&&tt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,Ci=!0,es=!0)}if(we.needsLights&&(jt.state.sunShadowMap.length>0&&tt.setValue(B,"sunShadowMap",jt.state.sunShadowMap,Ve),jt.state.directionalShadowMap.length>0&&tt.setValue(B,"directionalShadowMap",jt.state.directionalShadowMap,Ve),jt.state.spotShadowMap.length>0&&tt.setValue(B,"spotShadowMap",jt.state.spotShadowMap,Ve),jt.state.pointShadowMap.length>0&&tt.setValue(B,"pointShadowMap",jt.state.pointShadowMap,Ve)),W.isSkinnedMesh){tt.setOptional(B,W,"bindMatrix"),tt.setOptional(B,W,"bindMatrixInverse");let _t=W.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),tt.setValue(B,"boneTexture",_t.boneTexture,Ve))}W.isBatchedMesh&&(tt.setOptional(B,W,"batchingTexture"),tt.setValue(B,"batchingTexture",W._matricesTexture,Ve),tt.setOptional(B,W,"batchingIdTexture"),tt.setValue(B,"batchingIdTexture",W._indirectTexture,Ve),tt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&tt.setValue(B,"batchingColorTexture",W._colorsTexture,Ve));let Dn=q.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Q.update(W,q,Yt),(Ci||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,tt.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Gt.envMapIntensity.value=U.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=rv()),Ci){if(tt.setValue(B,"toneMappingExposure",C.toneMappingExposure),we.needsLights&&lp(Gt,es),pe&&G.fog===!0&&oe.refreshFogUniforms(Gt,pe),oe.refreshMaterialUniforms(Gt,G,ye,Ue,T.state.transmissionRenderTarget[b.id]),we.needsLights&&we.numLightProbeGrids>0){let _t=M,Ft=0;for(let hi of T.state.lightProbeGridArray)hi.texture!==null&&(_t.textures[Ft]=hi.texture,_t.min[Ft]=hi.boundingBox.min,_t.max[Ft]=hi.boundingBox.max,_t.resolution[Ft]=hi.resolution,Ft++);for(let hi in _t)_t[hi].length=Ft;Gt.probesSH.value=_t.textures,Gt.probesMin.value=_t.min,Gt.probesMax.value=_t.max,Gt.probesResolution.value=_t.resolution}nr.upload(B,vu(we),Gt,Ve)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(B,vu(we),Gt,Ve),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tt.setValue(B,"center",W.center),tt.setValue(B,"modelViewMatrix",W.modelViewMatrix),tt.setValue(B,"normalMatrix",W.normalMatrix),tt.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let _t=G.uniformsGroups;for(let Ft=0,hi=_t.length;Ft<hi;Ft++){let Su=_t[Ft];Pe.update(Su,Yt),Pe.bind(Su,Yt)}}return Yt}function lp(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function cp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(b,U,q){let G=Fe.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),Fe.get(b.texture).__webglTexture=U,Fe.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let q=Fe.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){ee=b,z=U,k=q;let G=null,W=!1,pe=!1;if(b){let de=Fe.get(b);if(de.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(B.FRAMEBUFFER,de.__webglFramebuffer),ie.copy(b.viewport),be.copy(b.scissor),He=b.scissorTest,me.viewport(ie),me.scissor(be),me.setScissorTest(He),X=-1;return}else if(de.__webglFramebuffer===void 0)Ve.setupRenderTarget(b);else if(de.__hasExternalTextures)Ve.rebindTextures(b,Fe.get(b.texture).__webglTexture,Fe.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let We=b.depthTexture;if(de.__boundDepthTexture!==We){if(We!==null&&Fe.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(b)}}let Me=b.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let Re=Fe.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?G=Re[U][q]:G=Re[U],W=!0):b.samples>0&&Ve.useMultisampledRTT(b)===!1?G=Fe.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?G=Re[q]:G=Re,ie.copy(b.viewport),be.copy(b.scissor),He=b.scissorTest}else ie.copy(ze).multiplyScalar(ye).floor(),be.copy(ot).multiplyScalar(ye).floor(),He=ct;if(q!==0&&(G=H),me.bindFramebuffer(B.FRAMEBUFFER,G)&&me.drawBuffers(b,G),me.viewport(ie),me.scissor(be),me.setScissorTest(He),W){let de=Fe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,q)}else if(pe){let de=U;for(let Me=0;Me<b.textures.length;Me++){let Re=Fe.get(b.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,Re.__webglTexture,q,de)}}else if(b!==null&&q!==0){let de=Fe.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,de.__webglTexture,q)}X=-1};function Mu(b){let U=Fe.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=mt.textureFormatReadable(b.format),U.__typeReadable=mt.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,G,W,pe,Se,de=0){if(!(b&&b.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me){me.bindFramebuffer(B.FRAMEBUFFER,Me);try{let Re=b.textures[de],We=Re.format,Qe=Re.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let Te=Mu(Re);if(Te.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&q>=0&&q<=b.height-W&&B.readPixels(U,q,G,W,ae.convert(We),ae.convert(Qe),pe)}finally{let Re=ee!==null?Fe.get(ee).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,G,W,pe,Se,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Fe.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Me=Me[Se],Array.isArray(Me)&&(Me=Me[0])),Me)if(U>=0&&U<=b.width-G&&q>=0&&q<=b.height-W){me.bindFramebuffer(B.FRAMEBUFFER,Me);let Re=b.textures[de],We=Re.format,Qe=Re.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+de);let Te=Mu(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(U,q,G,W,ae.convert(We),ae.convert(Qe),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let wt=ee!==null?Fe.get(ee).__webglFramebuffer:null;me.bindFramebuffer(B.FRAMEBUFFER,wt);let dt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Ud(B,dt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(je),B.deleteSync(dt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){let G=Math.pow(2,-q),W=Math.floor(b.image.width*G),pe=Math.floor(b.image.height*G),Se=U!==null?U.x:0,de=U!==null?U.y:0;Ve.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,Se,de,W,pe),me.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,G=null,W=0,pe=0){let Se,de,Me,Re,We,Qe,Te,je,wt,dt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(q!==null)Se=q.max.x-q.min.x,de=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,We=q.min.y,Qe=q.isBox3?q.min.z:0;else{let tt=Math.pow(2,-W);Se=Math.floor(dt.width*tt),de=Math.floor(dt.height*tt),b.isDataArrayTexture?Me=dt.depth:b.isData3DTexture?Me=Math.floor(dt.depth*tt):Me=1,Re=0,We=0,Qe=0}G!==null?(Te=G.x,je=G.y,wt=G.z):(Te=0,je=0,wt=0);let ht=ae.convert(U.format),qt=ae.convert(U.type),we;U.isData3DTexture?(Ve.setTexture3D(U,0),we=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ve.setTexture2DArray(U,0),we=B.TEXTURE_2D_ARRAY):(Ve.setTexture2D(U,0),we=B.TEXTURE_2D),me.activeTexture(B.TEXTURE0),me.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let jt=me.getParameter(B.UNPACK_ROW_LENGTH),st=me.getParameter(B.UNPACK_IMAGE_HEIGHT),ji=me.getParameter(B.UNPACK_SKIP_PIXELS),Yt=me.getParameter(B.UNPACK_SKIP_ROWS),ka=me.getParameter(B.UNPACK_SKIP_IMAGES);me.pixelStorei(B.UNPACK_ROW_LENGTH,dt.width),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt.height),me.pixelStorei(B.UNPACK_SKIP_PIXELS,Re),me.pixelStorei(B.UNPACK_SKIP_ROWS,We),me.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);let Ci=b.isDataArrayTexture||b.isData3DTexture,es=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let tt=Fe.get(b),Gt=Fe.get(U),Dn=Fe.get(tt.__renderTarget),_t=Fe.get(Gt.__renderTarget);me.bindFramebuffer(B.READ_FRAMEBUFFER,Dn.__webglFramebuffer),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Ft=0;Ft<Me;Ft++)Ci&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(b).__webglTexture,W,Qe+Ft),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.get(U).__webglTexture,pe,wt+Ft)),B.blitFramebuffer(Re,We,Re+Se,We+de,Te,je,Te+Se,je+de,B.DEPTH_BUFFER_BIT,B.NEAREST);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||Fe.has(b)){let tt=Fe.get(b),Gt=Fe.get(U);me.bindFramebuffer(B.READ_FRAMEBUFFER,A),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,F);for(let Dn=0;Dn<Me;Dn++)Ci?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.__webglTexture,W,Qe+Dn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,tt.__webglTexture,W),es?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gt.__webglTexture,pe,wt+Dn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gt.__webglTexture,pe),W!==0?B.blitFramebuffer(Re,We,Re+Se,We+de,Te,je,Te+Se,je+de,B.COLOR_BUFFER_BIT,B.NEAREST):es?B.copyTexSubImage3D(we,pe,Te,je,wt+Dn,Re,We,Se,de):B.copyTexSubImage2D(we,pe,Te,je,Re,We,Se,de);me.bindFramebuffer(B.READ_FRAMEBUFFER,null),me.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else es?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(we,pe,Te,je,wt,Se,de,Me,ht,qt,dt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(we,pe,Te,je,wt,Se,de,Me,ht,dt.data):B.texSubImage3D(we,pe,Te,je,wt,Se,de,Me,ht,qt,dt):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,Te,je,Se,de,ht,qt,dt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,Te,je,dt.width,dt.height,ht,dt.data):B.texSubImage2D(B.TEXTURE_2D,pe,Te,je,Se,de,ht,qt,dt);me.pixelStorei(B.UNPACK_ROW_LENGTH,jt),me.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st),me.pixelStorei(B.UNPACK_SKIP_PIXELS,ji),me.pixelStorei(B.UNPACK_SKIP_ROWS,Yt),me.pixelStorei(B.UNPACK_SKIP_IMAGES,ka),pe===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&B.generateMipmap(we),me.unbindTexture()},this.initRenderTarget=function(b){Fe.get(b).__webglFramebuffer===void 0&&Ve.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ve.setTextureCube(b,0):b.isData3DTexture?Ve.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ve.setTexture2DArray(b,0):Ve.setTexture2D(b,0),me.unbindTexture()},this.resetState=function(){z=0,k=0,ee=null,me.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},av=new us(-1,1,1,-1,0,1),Fh=class extends et{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}},ov=new Fh,Yi=class{constructor(e){this._mesh=new nt(ov,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,av)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wl=class extends _n{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hn.clone(e.uniforms),this.material=new Mt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yi(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ba=class extends _n{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Xl=class extends _n{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ql=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ce);this._width=i.width,this._height=i.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:It}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wl(rr),this.copyPass.material.blending=Si,this.timer=new sa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ba!==void 0&&(a instanceof ba?i=!0:a instanceof Xl&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ce);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yl=class extends _n{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ne}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var yf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ar=class n extends _n{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ce(e.x,e.y):new ce(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new bt(r,a,{type:It,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new bt(r,a,{type:It,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new bt(r,a,{type:It,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=yf;this.highPassUniforms=Hn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ce(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hn.clone(rr.uniforms),this.blendMaterial=new Mt({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,premultipliedAlpha:!0,blending:gn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new Rn,this._fsQuad=new Yi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ce(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(i*i))/i);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Mt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ce(.5,.5)},direction:{value:new ce(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ar.BlurDirectionX=new ce(1,0);ar.BlurDirectionY=new ce(0,1);var Ea={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Zl=class extends _n{constructor(){super(),this.isOutputPass=!0,this.uniforms=Hn.clone(Ea.uniforms),this.material=new Js({name:Ea.name,uniforms:this.uniforms,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader}),this._fsQuad=new Yi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===it&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ra?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ps?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ca?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ha?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===la&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var or=class n extends nt{constructor(){let e=n.SkyShader,t=new Mt({name:e.name,uniforms:Hn.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new Wt(1,1,1),t),this.isSky=!0}};or.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new P},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Mf=[[.35,140,.95],[1.15,76,.55],[-.45,41,.26]],Oh=Mf.map(([n,e,t])=>{let i=Math.PI*2/e;return{dx:Math.cos(n),dz:Math.sin(n),k:i,c:Math.sqrt(9.81/i),A:t,Q:.55/(i*t*Mf.length)}});function ln(n,e,t){let i=0;for(let s of Oh)i+=s.A*Math.sin(s.k*(s.dx*n+s.dz*e-s.c*t));return i}var Sf=`
const int NW = ${Oh.length};
uniform float uT;
vec3 gerstner(vec2 p, out vec3 nrm){ vec3 o = vec3(0.); vec3 n = vec3(0., 1., 0.);
  ${Oh.map((n,e)=>`{ vec2 d = vec2(${n.dx.toFixed(5)}, ${n.dz.toFixed(5)}); float k = ${n.k.toFixed(6)}, A = ${n.A.toFixed(4)}, Q = ${n.Q.toFixed(5)}, f = k * (dot(d, p) - ${n.c.toFixed(5)} * uT);
    o.x += Q * A * d.x * cos(f); o.z += Q * A * d.y * cos(f); o.y += A * sin(f); n.x -= d.x * k * A * cos(f); n.z -= d.y * k * A * cos(f); n.y -= Q * k * A * sin(f); }`).join(`
  `)}
  nrm = normalize(n); return o; }`;function Ef(n){let e=n==="low"?80:n==="medium"?110:150,t=[],i=[],s=6e3,r=2.3;for(let h=0;h<=e;h++)for(let u=0;u<=e;u++){let f=u/e*2-1,d=h/e*2-1;t.push(Math.sign(f)*Math.abs(f)**r*s,0,Math.sign(d)*Math.abs(d)**r*s)}for(let h=0;h<e;h++)for(let u=0;u<e;u++){let f=h*(e+1)+u,d=f+1,p=f+e+1,_=p+1;i.push(f,p,d,d,p,_)}let a=new et;a.setAttribute("position",new Ie(t,3)),a.setAttribute("normal",new Ie(new Array(t.length).fill(0).map((h,u)=>u%3===1?1:0),3)),a.setIndex(i);let o={uT:{value:0}},l=new vt({color:"#0b3346",roughness:.09,metalness:0,envMapIntensity:.9});l.onBeforeCompile=h=>{h.uniforms.uT=o.uT,h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
`+Sf+`
varying vec3 vWP; varying float vH;`).replace("#include <beginnormal_vertex>","vec3 wp0 = (modelMatrix * vec4(position, 1.)).xyz; vec3 gn; vec3 gd = gerstner(wp0.xz, gn); vec3 objectNormal = gn;").replace("#include <begin_vertex>","vec3 transformed = position + gd; vH = gd.y; vWP = wp0 + gd;"),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
      ${Sf}
      varying vec3 vWP; varying float vH;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f); return mix(mix(h21(i), h21(i + vec2(1, 0)), f.x), mix(h21(i + vec2(0, 1)), h21(i + vec2(1, 1)), f.x), f.y); }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      { vec3 gn; gerstner(vWP.xz, gn); vec2 p = vWP.xz; float e = .35;
        vec2 q1 = p * .11 + vec2(uT * .35, uT * .2), q2 = p * .37 - vec2(uT * .5, -uT * .3), q3 = p * 1.3 + vec2(uT * .9, uT * .4);
        float n0 = vn(q1) * .6 + vn(q2) * .4;
        float nx = (vn(q1 + vec2(e, 0.)) * .6 + vn(q2 + vec2(e, 0.)) * .4) - n0;
        float nz = (vn(q1 + vec2(0., e)) * .6 + vn(q2 + vec2(0., e)) * .4) - n0;
        float dist = length(vWP - cameraPosition), fade = 1. - smoothstep(150., 2500., dist);
        vec3 wn = normalize(gn + vec3(-nx, 0., -nz) * 1.6 * fade);
        normal = normalize((viewMatrix * vec4(wn, 0.)).xyz); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float crest = smoothstep(.7, 1.6, vH); float fn = vn(vWP.xz * .25 + uT * .1);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.12, .32, .36), smoothstep(-.6, 1.2, vH) * .45);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.85, .9, .92), clamp(crest * fn * 1.6, 0., .7));`)};let c=new nt(a,l);return c.frustumCulled=!1,c.receiveShadow=n==="high",c.userData.uni=o,c}var bf=n=>(n.material.fragmentShader=n.material.fragmentShader.replace("gl_FragColor = vec4( texColor, 1.0 );","gl_FragColor = vec4( min( texColor, vec3( 2.2 ) ), 1.0 );"),n.material.needsUpdate=!0,n);function Tf(n,e,t=7,i=200){let s=bf(new or);s.scale.setScalar(4e4);let r=s.material.uniforms;r.turbidity.value=3.5,r.rayleigh.value=2.2,r.mieCoefficient.value=.005,r.mieDirectionalG.value=.85;let a=new P().setFromSphericalCoords(1,_a.degToRad(90-t),_a.degToRad(i));r.sunPosition.value.copy(a);let o=new ir(n),l=new as,c=bf(new or);return c.scale.setScalar(100),c.material.uniforms.sunPosition.value.copy(a),c.material.uniforms.turbidity.value=3.5,c.material.uniforms.rayleigh.value=2.2,l.add(c),e.environment=o.fromScene(l,0,.1,1e3).texture,{sky:s,sun:a}}var _s=[[-2600,-3400,520,110],[3100,-1500,700,160],[-500,2600,420,70],[4200,3900,560,120],[-4600,1400,380,90],[700,-5200,460,100]];function wf(){let n=new Vt,e=new vt({vertexColors:!0,roughness:.95,flatShading:!0});return _s.forEach(([t,i,s,r],a)=>{let o=new ls(s*1.25,64,0,Math.PI*2),l=o.attributes.position,c=[],h=a*17.3,u=(v,S)=>Math.sin(v*1.7+h)*Math.cos(S*1.3-h)*.5+Math.sin(v*4.1+S*3.3+h)*.25,f=14,d=64,p=[],_=[];for(let v=0;v<=f;v++)for(let S=0;S<d;S++){let M=S/d*Math.PI*2,w=v/f,T=s*1.25*w*(1+u(Math.cos(M)*2,Math.sin(M)*2)*.25),x=(w<.78?r*Math.pow(1-w/.78,1.6)*(1+u(M*2,w*5)*.35):-12*(w-.78)/.22)+2;p.push(Math.cos(M)*T,x,Math.sin(M)*T);let E=x<5?[.76,.68,.5]:x<r*.55?[.24+u(M,w)*.05,.36,.17]:[.42,.4,.38];c.push(...E)}for(let v=0;v<f;v++)for(let S=0;S<d;S++){let M=v*d+S,w=v*d+(S+1)%d,T=M+d,x=w+d;_.push(M,w,T,w,x,T)}o.dispose();let g=new et;g.setAttribute("position",new Ie(p,3)),g.setAttribute("color",new Ie(c,3)),g.setIndex(_),g.computeVertexNormals();let m=new nt(g,e);m.position.set(t,-1.5,i),m.castShadow=m.receiveShadow=!0,n.add(m)}),n}function Zi(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new et;l.morphTargetsRelative=o;let c=0;for(let h=0;h<n.length;++h){let u=n[h],f=0,d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(u.morphAttributes[p].length!==n[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let f=0;f<n.length;++f){let d=n[f].index;for(let p=0;p<d.count;++p)u.push(d.getX(p)+h);h+=n[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Af(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][f]);let p=Af(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Af(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Bt(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let p=0;p<t;p++){let _=h.getComponent(f,p);o.setComponent(f+u,p,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var vs={dd:{id:"dd",name:"Destroyer",L:118,B:12.5,F:5.5,D:4.2,speed:19.5,accel:.85,turn:.07,hp:2400,cal:127,barrels:1,v0:800,range:9500,reload:3.4,dmg:230,spread:.009,torp:4,camDist:120,turrets:[[.34,0,1],[.24,1,1],[-.27,1,-1],[-.37,0,-1]],desc:"Fast and agile. Quick-firing 127 mm guns and torpedoes."},ca:{id:"ca",name:"Heavy Cruiser",L:186,B:19,F:7.5,D:6.4,speed:16.5,accel:.5,turn:.045,hp:5600,cal:203,barrels:3,v0:770,range:13500,reload:8.5,dmg:620,spread:.008,torp:3,camDist:170,turrets:[[.33,0,1],[.24,1,1],[-.3,0,-1]],desc:"Balanced. Nine 203 mm guns, decent armour, torpedoes."},bb:{id:"bb",name:"Battleship",L:252,B:33,F:9.5,D:10,speed:13.5,accel:.3,turn:.03,hp:12500,cal:406,barrels:3,v0:790,range:17500,reload:22,dmg:2250,spread:.0075,torp:0,camDist:230,turrets:[[.3,0,1],[.2,1,1],[-.28,0,-1]],desc:"Slow and enormous. 406 mm guns that can delete a cruiser."}},lv={ddg:{id:"ddg",name:"Guided-missile Destroyer",L:155,B:20,F:7,D:6.5,speed:15,accel:.5,turn:.04,hp:9e3,cal:127,barrels:1,v0:800,range:14e3,reload:3,dmg:300,spread:.008,torp:0,camDist:190,turrets:[[.35,0,1]],modern:!0},ffg:{id:"ffg",name:"Missile Frigate",L:128,B:15.5,F:6,D:5,speed:14,accel:.5,turn:.045,hp:6e3,cal:100,barrels:1,v0:800,range:12e3,reload:3,dmg:200,spread:.008,torp:0,camDist:160,turrets:[[.36,0,1]],modern:!0},cv:{id:"cv",name:"Aircraft Carrier",L:320,B:40,F:15,D:11,speed:12,accel:.2,turn:.02,hp:4e4,cal:127,barrels:1,v0:800,range:1,reload:99,dmg:0,spread:.01,torp:0,camDist:420,turrets:[],modern:!0,deckY:22.4}};Object.assign(vs,lv);var Jl=n=>{n=n.index?n.toNonIndexed():n;for(let e of Object.keys(n.attributes))e!=="position"&&e!=="normal"&&n.deleteAttribute(e);return n};function $l(n,e){let t=n.B/2;return e<.14?t*(.58+.42*Math.sqrt(e/.14)):e>.6?t*Math.pow(Math.cos((e-.6)/.4*Math.PI/2),.85):t}function Kl(n,e){return n.F*(1+.4*Math.max(0,(e-.72)/.28)**2)}function cv(n){let t=[],i=[],s=[],r=[],a=[],o={g:[.3,.32,.35],k:[.06,.06,.07],r:[.42,.12,.1]},l=0;for(let f=0;f<=44;f++){let d=f/44,p=(d-.5)*n.L,_=Math.max(.05,$l(n,d)),g=Kl(n,d),m=n.D*(d>.9?1-(d-.9)/.1*.65:1),v=[[_,g,"g"],[_,g*.5,"g"],[_*.995,.9,"g"],[_*.99,.35,"k"],[_*.985,-.3,"r"],[_*.9,-.45*m,"r"],[_*.62,-.85*m,"r"],[0,-m,"r"]],S=[...v,...v.slice().reverse().map(([M,w,T])=>[-M,w,T])];l=S.length,S.forEach(([M,w,T])=>{t.push(M,w,p),i.push(...o[T])}),r.push(-_,g,p,_,g,p)}for(let f=0;f<44;f++)for(let d=0;d<l-1;d++){let p=f*l+d,_=p+1,g=p+l,m=g+1;s.push(p,g,_,_,g,m)}let c=t.length/3;t.push(0,n.F*.4,-n.L/2),i.push(...o.g);for(let f=0;f<l-1;f++)s.push(c,f,f+1);let h=new et;h.setAttribute("position",new Ie(t,3)),h.setAttribute("color",new Ie(i,3)),h.setIndex(s),h.computeVertexNormals();for(let f=0;f<44;f++){let d=f*2;a.push(d,d+2,d+1,d+1,d+2,d+3)}let u=new et;return u.setAttribute("position",new Ie(r,3)),u.setIndex(a),u.computeVertexNormals(),{hull:h,deck:u}}var Ce=(n,e,t,i,s,r,a=0)=>Jl(new Wt(n,e,t).rotateY(a).translate(i,s,r)),Rt=(n,e,t,i,s,r,a=14,o=0)=>Jl(new Mi(n,e,t,a).rotateX(o).translate(i,s,r));function hv(n){let e=n.L,t=n.B,i=n.F,s=[],r=[],a=[],o=[],l=h=>(h-.5)*e,c=h=>Kl(n,h);if(n.id==="dd"?(s.push(Ce(t*.55,5,13,0,i+2.5,l(.68)),Ce(t*.4,3.2,8,0,i+6.6,l(.69)),Ce(t*.5,3,22,0,i+1.5,l(.36))),a.push(Ce(t*.41,.9,8.1,0,i+7.4,l(.69))),[.55,.45].forEach(h=>{o.push([0,i+9,l(h)]),s.push(Rt(1.9,2.1,7,0,i+4.2,l(h),16,-.08)),r.push(Rt(1.95,1.95,.8,0,i+7.9,l(h)-.3,16,-.08))}),s.push(Rt(.35,.45,16,0,i+12,l(.63)),Ce(7,.3,.3,0,i+16,l(.63))),r.push(Ce(2.6,.9,.9,0,i+18.4,l(.63))),[-1,1].forEach(h=>r.push(...[0,1,2].map(u=>Rt(.3,.3,6,h*.8+(u-1)*.65,i+1.2,l(.5),8,Math.PI/2))))):n.id==="ca"?(s.push(Ce(t*.62,6,24,0,i+3,l(.6)),Ce(t*.48,5,14,0,i+8.5,l(.62)),Ce(t*.36,4,9,0,i+13,l(.63)),Ce(t*.6,5,22,0,i+2.5,l(.33)),Ce(t*.4,4,10,0,i+7,l(.32))),a.push(Ce(t*.37,1,9.1,0,i+13.8,l(.63))),[.5,.43].forEach(h=>{o.push([0,i+15,l(h)]),s.push(Rt(2.8,3.2,11,0,i+7,l(h),18,-.06)),r.push(Rt(2.85,2.85,1,0,i+12.5,l(h)-.4,18,-.06))}),s.push(Rt(.5,.7,22,0,i+20,l(.57)),Ce(10,.4,.4,0,i+25,l(.57))),r.push(Ce(3.4,1.2,1.2,0,i+31.6,l(.57)))):(s.push(Ce(t*.62,7,40,0,i+3.5,l(.56)),Ce(t*.5,7,26,0,i+10.5,l(.6)),Ce(t*.4,7,16,0,i+17.5,l(.62)),Ce(t*.3,6,10,0,i+24,l(.63)),Ce(t*.22,5,7,0,i+29.5,l(.635)),Ce(t*.55,6,30,0,i+3,l(.37)),Ce(t*.36,5,12,0,i+8.5,l(.36))),a.push(Ce(t*.31,1.2,10.1,0,i+25.5,l(.63)),Ce(t*.23,1,7.1,0,i+30.5,l(.635))),o.push([0,i+22,l(.47)]),s.push(Rt(4.5,5.2,15,0,i+12,l(.47),20,-.05)),r.push(Rt(4.55,4.55,1.4,0,i+19.4,l(.47)-.4,20,-.05)),s.push(Rt(.7,1,18,0,i+40,l(.62)),Ce(12,.5,.5,0,i+44,l(.62))),[-1,1].forEach(h=>[.6,.5,.4].forEach(u=>{s.push(Rt(2.2,2.4,1.4,h*t*.36,i+7.7,l(u),12)),s.push(Ce(3.2,1.6,3.6,h*t*.36,i+9,l(u))),r.push(Rt(.18,.18,6,h*t*.36,i+9.2,l(u)+3,6,Math.PI/2))}))),n.id==="ddg")s.push(Ce(t*.72,9,30,0,i+4.5,l(.62)),Ce(t*.5,6,18,0,i+12,l(.63)),Ce(t*.3,5,8,0,i+17.5,l(.62)),Ce(t*.62,7,30,0,i+3.5,l(.27)),Ce(3.2,6,6,0,i+10,l(.45)),Ce(3.2,6,6,0,i+9.5,l(.36))),s.push(Rt(.5,.9,20,0,i+29,l(.6)),Ce(9,.35,.35,0,i+34,l(.6)),Ce(6,.3,.3,0,i+30,l(.6))),r.push(Ce(t*.5,.4,9,0,i+.2,l(.77)),Ce(t*.5,.4,8,0,i+.2,l(.12)),Ce(3.4,.6,3.4,0,i+13.3,l(.45)),Ce(3.4,.6,3.4,0,i+12.8,l(.36))),r.push(Ce(.25,4.2,4.2,t*.36,i+6,l(.62),0),Ce(.25,4.2,4.2,-t*.36,i+6,l(.62),0),Ce(4.2,4.2,.25,0,i+6.5,l(.62)+15.1)),a.push(Ce(t*.51,1.1,.3,0,i+13.2,l(.63)+9)),[[.3,i+7.5],[.66,i+9.6]].forEach(([h,u])=>{s.push(Rt(1.3,1.5,2.2,0,u,l(h),14)),s.push(Jl(new Qn(1.3,14,8,0,Math.PI*2,0,Math.PI/2).translate(0,u+1.1,l(h))))}),o.push([0,i+13.5,l(.45)],[0,i+13,l(.36)]);else if(n.id==="ffg")s.push(Ce(t*.7,8,34,0,i+4,l(.55)),Ce(t*.45,5,14,0,i+10.5,l(.6)),Rt(.01,3.2,14,0,i+20,l(.58),4),Ce(t*.55,6,20,0,i+3,l(.24))),r.push(Ce(t*.48,1,6,0,i+13.4,l(.6)),Rt(.6,.6,6,0,i+28,l(.58),8)),a.push(Ce(t*.46,1,.3,0,i+11.6,l(.6)+7.1)),[-1,1].forEach(h=>[0,1].forEach(u=>r.push(Jl(new Wt(1.1,1.1,7).rotateX(-.35).translate(h*(2+u*1.3),i+1.6,l(.42)))))),o.push([0,i+9,l(.45)]),s.push(Ce(4,4,5,0,i+7,l(.45)));else if(n.id==="cv"){let h=l(.6);s.push(Ce(11,14,34,t*.62,n.deckY+7,h),Ce(9,8,22,t*.62,n.deckY+18,h-2),Ce(6,5,10,t*.62,n.deckY+24.5,h-3),Rt(.6,.9,18,t*.62,n.deckY+34,h-3),Ce(10,.4,.4,t*.62,n.deckY+38,h-3)),a.push(Ce(9.2,1.2,22.2,t*.62,n.deckY+20.5,h-2)),r.push(Ce(.3,4,4,t*.62-5.6,n.deckY+16,h),Ce(.3,4,4,t*.62+5.6,n.deckY+16,h),Ce(3.4,3,3.4,t*.62,n.deckY+28.5,h-3)),o.push([t*.62,n.deckY+22,h-8]),s.push(Ce(t*1.55,n.deckY-i-1,e*.86,-t*.05,(n.deckY+i)/2-.5,l(.52)))}return{gray:Zi(s),dark:Zi(r),glass:Zi(a),funnels:o}}function uv(){let n=document.createElement("canvas");n.width=256,n.height=1024;let e=n.getContext("2d");e.fillStyle="#3a3d40",e.fillRect(0,0,256,1024);for(let i=0;i<4e3;i++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"0,0,0"},.05)`,e.fillRect(Math.random()*256,Math.random()*1024,2,2);e.strokeStyle="#e8e8e2",e.lineWidth=3,e.strokeRect(6,6,244,1012),e.setLineDash([22,18]),e.beginPath(),e.moveTo(150,1010),e.lineTo(150,20),e.stroke(),e.strokeStyle="#f2c94c",e.beginPath(),e.moveTo(40,1010),e.lineTo(150,520),e.stroke(),e.setLineDash([]),e.strokeStyle="#e8e8e2",e.beginPath(),e.moveTo(20,980),e.lineTo(120,500),e.stroke(),e.fillStyle="#e8e8e2",e.font="900 90px Arial",e.textAlign="center",e.save(),e.translate(128,120),e.fillText("77",0,30),e.restore();let t=new pn(n);return t.colorSpace=St,t.anisotropy=8,t}var Bh={};function dv(n){if(Bh[n.id])return Bh[n.id];let e=cv(n),t=hv(n);return Bh[n.id]={...e,...t}}function fv(n){let e=n.cal/406,t=2+e*5.4,i=n.cal/1e3*46,s=Zi([Rt(t*.95,t,1.6,0,.8,0,20),Ce(t*1.9,t*.78,t*2.1,0,1.6+t*.39,-t*.1),Ce(t*1.6,.3,t*1.4,0,1.6+t*.8,-t*.3)]),r=[];for(let a=0;a<n.barrels;a++){let o=(a-(n.barrels-1)/2)*t*.55;r.push(Rt(.09+e*.32,.12+e*.42,i,o,0,i/2,10,Math.PI/2))}return{house:s,bar:Zi(r),r:t,len:i,by:1.6+t*.4,bz:t*.9}}var Rf={};function Cf(n,e){let t=vs[n],i=dv(t),s=Rf[n]||(Rf[n]=fv(t)),r=new Vt,a=new Vt;r.add(a);let o=t.modern?e==="enemy"?"#5b6066":"#8b949c":e==="enemy"?"#585c62":"#6f7884",l={hull:new vt({vertexColors:!0,roughness:.62,metalness:.25}),deck:new vt({color:e==="enemy"?"#4a4540":"#5e5244",roughness:.9}),gray:new vt({color:o,roughness:.55,metalness:.3}),dark:new vt({color:"#1f2226",roughness:.6,metalness:.4}),glass:new vt({color:"#0b0e12",roughness:.1,metalness:.6})},c=(u,f)=>{let d=new nt(u,f);return d.castShadow=!0,d.receiveShadow=!0,a.add(d),d};if(c(i.hull,l.hull),c(i.deck,l.deck),c(i.gray,l.gray),c(i.dark,l.dark),c(i.glass,l.glass),t.id==="cv"){let u=new nt(new Wt(t.B*1.75,1.2,t.L*1.03),[l.gray,l.gray,new vt({map:uv(),roughness:.8}),l.gray,l.gray,l.gray]);u.position.set(-t.B*.08,t.deckY-.6,t.L*.01),u.castShadow=u.receiveShadow=!0,a.add(u)}let h=t.turrets.map(([u,f,d])=>{let p=u*t.L,_=Kl(t,u+.5)+(f?s.r*.9+1.4:0),g=new Vt;g.position.set(0,_,p),g.rotation.y=d>0?0:Math.PI;let m=new nt(s.house,l.gray);if(m.castShadow=!0,g.add(m),f){let M=new nt(Rt(s.r*1.05,s.r*1.1,s.r*.9+1.4,0,-(s.r*.9+1.4)/2,0,20),l.gray);g.add(M)}let v=new Vt;v.position.set(0,s.by,s.bz);let S=new nt(s.bar,l.dark);return S.castShadow=!0,v.add(S),g.add(v),a.add(g),{g,piv:v,z:p,y:_,face:d,yaw:g.rotation.y,elev:0,reload:0,broken:0,len:s.len}});return r.userData={C:t,body:a,turrets:h,mats:l,funnels:i.funnels},r}function zh(n,e,t,i){let s=i/n.L+.5;if(s<0||s>1)return!1;let r=Kl(n,s)+(Math.abs(s-.5)<.2?n.F*1.8:1);return t>-n.D&&t<r&&Math.abs(e)<$l(n,s)+.4}var Le=(()=>{let n=null,e,t,i,s,r=!0;try{r=localStorage.getItem("jkn-sound")!=="0"}catch{}function a(){if(n){n.state==="suspended"&&n.resume();return}let c=window.AudioContext||window.webkitAudioContext;if(!c)return;n=new c,e=n.createGain(),e.gain.value=r?.6:0,e.connect(n.destination),t=n.createDynamicsCompressor(),t.threshold.value=-18,t.ratio.value=5,t.connect(e);let h=n.createBuffer(1,n.sampleRate*3,n.sampleRate),u=h.getChannelData(0),f=0;for(let w=0;w<u.length;w++){let T=Math.random()*2-1;f=(f+.02*T)/1.02,u[w]=f*3.5}Le.brown=h;let d=n.createBuffer(1,n.sampleRate*2,n.sampleRate),p=d.getChannelData(0);for(let w=0;w<p.length;w++)p[w]=Math.random()*2-1;Le.white=d;let _=n.createBufferSource();_.buffer=h,_.loop=!0;let g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let m=n.createGain();m.gain.value=0,_.connect(g),g.connect(m),m.connect(t),_.start(),i={g:m,lp:g};let v=n.createOscillator(),S=n.createGain(),M=n.createBiquadFilter();v.type="sawtooth",v.frequency.value=38,M.type="lowpass",M.frequency.value=140,S.gain.value=0,v.connect(M),M.connect(S),S.connect(t),v.start(),s={o:v,g:S}}function o(c,h,u,f,d,p=0,_="lowpass"){if(!n||!r)return;let g=n.currentTime+p,m=n.createBufferSource();m.buffer=c;let v=n.createBiquadFilter();v.type=_,v.frequency.value=h,v.Q.value=u;let S=n.createGain();S.gain.setValueAtTime(d,g),S.gain.exponentialRampToValueAtTime(.001,g+f),m.connect(v),v.connect(S),S.connect(t),m.start(g,Math.random()),m.stop(g+f)}function l(c,h,u,f,d=0,p=0){if(!n||!r)return;let _=n.currentTime+p,g=n.createOscillator(),m=n.createGain();g.type=u,g.frequency.setValueAtTime(c,_),d&&g.frequency.exponentialRampToValueAtTime(Math.max(20,c*d),_+h),m.gain.setValueAtTime(f,_),m.gain.exponentialRampToValueAtTime(.001,_+h),g.connect(m),m.connect(t),g.start(_),g.stop(_+h+.02)}return{init:a,get on(){return r},toggle(){r=!r;try{localStorage.setItem("jkn-sound",r?"1":"0")}catch{}return e&&e.gain.setTargetAtTime(r?.6:0,n.currentTime,.05),r},ambient(c,h){if(!i)return;let u=n.currentTime;i.g.gain.setTargetAtTime(h?.1+c*.006:0,u,.3),i.lp.frequency.setTargetAtTime(380+c*22,u,.3),s.g.gain.setTargetAtTime(h?.03+c*.002:0,u,.3),s.o.frequency.setTargetAtTime(30+c*1.4,u,.5)},stopLoops(){if(!n)return;let c=n.currentTime;i.g.gain.setTargetAtTime(0,c,.1),s.g.gain.setTargetAtTime(0,c,.1)},gun(c,h=0){let u=c/406,f=Math.max(.05,1-h/9e3),d=h/343*.25;o(Le.brown,120+500*(1-u),.7,.6+u*1.6,(.5+u*.6)*f,d),o(Le.white,900,.6,.12+u*.2,.35*f,d,"bandpass"),l(55+30*(1-u),.5+u,"sine",.5*f,.5,d)},whistle(c){l(1800,1.1,"sine",.05*c,.35)},splash(c,h){let u=Math.max(.03,1-h/6e3),f=c/406;o(Le.white,700+900*(1-f),.5,.5+f*.8,.4*u),o(Le.brown,160,.8,.7+f,.3*u)},hit(c,h){let u=Math.max(.05,1-h/7e3),f=c/406;o(Le.brown,220,.8,.8+f,.7*u),o(Le.white,2600,1,.25,.4*u,0,"bandpass"),l(90,.4,"square",.12*u,.4)},boom(c){let h=Math.max(.1,1-c/12e3);o(Le.brown,90,.7,3.2,1*h),o(Le.white,400,.5,1.6,.6*h,.05),l(40,2,"sine",.7*h,.5)},jet(c){let h=Math.max(.08,1-c/2500);o(Le.white,900,.4,4,.5*h,0,"lowpass"),o(Le.brown,160,.6,4.5,.6*h)},launch(c){let h=Math.max(.08,1-c/4e3);o(Le.white,1500,.5,2.5,.55*h,0,"lowpass"),o(Le.brown,120,.6,2,.6*h),l(140,1.6,"sawtooth",.06*h,2.2)},ciws(c){let h=Math.max(.1,1-c/2500);for(let u=0;u<6;u++)o(Le.white,2200,1.5,.05,.25*h,u*.05,"bandpass")},torp(){o(Le.white,600,1,.5,.3),l(300,.4,"sine",.1,.5)},alarm(){[0,.35].forEach(c=>l(880,.25,"square",.08,1,c))},ding(){l(1320,.12,"triangle",.12),l(1760,.16,"triangle",.1,1,.06)},click(){l(1100,.04,"square",.05)},win(){[523,659,784,1046].forEach((c,h)=>l(c,.35,"triangle",.16,1,h*.12))},lose(){[392,311,233].forEach((c,h)=>l(c,.45,"triangle",.16,1,h*.18))}}})();var Df={raptor:{name:"F-22 Raptor",blurb:"Stealthy all-rounder with thrust vectoring.",len:18.9,span:6.78,twinTail:!0,twinEngine:!0,canard:!1,hp:110,agility:1.08,speed:1.12,missiles:8,gun:1.1,style:"raptor"},viper:{name:"F-35 Lightning II",blurb:"Light and twitchy single-engine stealth jet.",len:15.7,span:5.35,twinTail:!0,twinEngine:!1,canard:!1,hp:90,agility:1.22,speed:1,missiles:6,gun:1,style:"viper"},striker:{name:"Su-57 Felon",blurb:"Heavy hitter. Tough, loads of missiles.",len:20.1,span:7,twinTail:!0,twinEngine:!0,canard:!1,hp:150,agility:.9,speed:1,missiles:12,gun:1.25,style:"striker"}},Nf={gray:["#9ea5ad","#737b84","Stealth gray","blob"],desert:["#b38f62","#7a5c3b","Desert camo","camo"],black:["#2b2e33","#1c1e21","Night ops","two"],navy:["#4a6687","#30455f","Navy blue","two"],red:["#3a3d42","#8f2a2f","Aggressor","splinter"]},kh={};function pv(n){if(kh[n])return kh[n];let[e,t,,i]=Nf[n],s=1024,r=document.createElement("canvas");r.width=r.height=s;let a=r.getContext("2d"),o=n.length*977+13,l=()=>(o=o*16807%2147483647)/2147483647;if(a.fillStyle=e,a.fillRect(0,0,s,s),i==="camo")for(let h=0;h<40;h++){a.fillStyle=h%3?t:"#9a7b50",a.beginPath();let u=l()*s,f=l()*s;a.moveTo(u,f);for(let d=0;d<9;d++)a.quadraticCurveTo(u+(l()-.5)*260,f+(l()-.5)*260,u+(l()-.5)*220,f+(l()-.5)*220);a.closePath(),a.fill()}if(i==="splinter")for(let h=0;h<34;h++){a.fillStyle=h%2?t:"#24262a",a.beginPath();let u=l()*s,f=l()*s;a.moveTo(u,f),a.lineTo(u+(l()-.3)*300,f+(l()-.5)*120),a.lineTo(u+(l()-.5)*200,f+(l()-.2)*260),a.closePath(),a.fill()}if(i==="blob"){a.filter="blur(10px)";for(let h=0;h<26;h++){a.fillStyle=t,a.globalAlpha=.55+l()*.3,a.beginPath();let u=l()*s,f=l()*s,d=50+l()*120;for(let p=0;p<=10;p++){let _=p/10*Math.PI*2,g=d*(.6+l()*.6);a.lineTo(u+Math.cos(_)*g*1.4,f+Math.sin(_)*g)}a.closePath(),a.fill()}a.filter="none",a.globalAlpha=1}if(i==="two"){let h=a.createLinearGradient(0,0,0,s);h.addColorStop(0,t),h.addColorStop(.5,e),h.addColorStop(1,t),a.globalAlpha=.55,a.fillStyle=h,a.fillRect(0,0,s,s),a.globalAlpha=1}for(let h=0;h<2200;h++)a.fillStyle=`rgba(${l()<.5?"255,255,255":"0,0,0"},${.015+l()*.03})`,a.fillRect(l()*s,l()*s,2+l()*14,1+l()*3);a.strokeStyle="rgba(0,0,0,.28)",a.lineWidth=2;for(let h=0;h<=8;h++)a.beginPath(),a.moveTo(0,h*s/8+h%2*9),a.lineTo(s,h*s/8+h%2*9),a.stroke();for(let h=0;h<8;h++)for(let u=0;u<6;u++){if(l()<.25)continue;let f=(u+h%2*.5)*s/6;a.beginPath(),a.moveTo(f,h*s/8),a.lineTo(f,(h+1)*s/8),a.stroke()}for(let h=0;h<14;h++){let u=l()*s,f=l()*s,d=40+l()*90,p=30+l()*60;a.strokeStyle="rgba(0,0,0,.22)",a.strokeRect(u,f,d,p)}a.fillStyle="rgba(0,0,0,.25)";for(let h=0;h<900;h++)a.fillRect(Math.floor(l()*6)*s/6+(l()<.5?-4:4),l()*s,1.5,1.5);let c=new pn(r);return c.wrapS=c.wrapT=_i,c.colorSpace=St,c.anisotropy=4,kh[n]=c}var Hh=null;function mv(){if(Hh)return Hh;let n=1024,e=document.createElement("canvas");e.width=e.height=n;let t=e.getContext("2d"),i=4242,s=()=>(i=i*16807%2147483647)/2147483647;t.fillStyle="#808080",t.fillRect(0,0,n,n),t.strokeStyle="#3c3c3c",t.lineWidth=2.5;for(let a=0;a<=8;a++)t.beginPath(),t.moveTo(0,a*n/8+a%2*9),t.lineTo(n,a*n/8+a%2*9),t.stroke();for(let a=0;a<8;a++)for(let o=0;o<6;o++){if(s()<.2)continue;let l=(o+a%2*.5)*n/6;t.beginPath(),t.moveTo(l,a*n/8),t.lineTo(l,(a+1)*n/8),t.stroke()}t.lineWidth=2;for(let a=0;a<22;a++){let o=s()*n,l=s()*n,c=30+s()*110,h=24+s()*70;t.strokeStyle="#4a4a4a",t.strokeRect(o,l,c,h),t.fillStyle="#5a5a5a";for(let u=0;u<c;u+=9)t.fillRect(o+u,l-4,2,2),t.fillRect(o+u,l+h+3,2,2)}t.fillStyle="#5c5c5c";for(let a=0;a<8;a++)for(let o=0;o<n;o+=10)t.fillRect(o,a*n/8+6+a%2*9,2,2);let r=new pn(e);return r.wrapS=r.wrapT=_i,r.anisotropy=4,Hh=r}var Gh={};function gv(n){let e=n?"e":"p";if(Gh[e])return Gh[e];let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(i.translate(64,64),n){i.fillStyle="#c0262e",i.beginPath();for(let r=0;r<3;r++){let a=r*2.094-1.57;i.moveTo(0,0),i.lineTo(Math.cos(a-.35)*58,Math.sin(a-.35)*58),i.lineTo(Math.cos(a+.35)*58,Math.sin(a+.35)*58)}i.fill(),i.fillStyle="#16171a",i.beginPath(),i.arc(0,0,18,0,7),i.fill()}else i.strokeStyle="rgba(70,76,84,.8)",i.lineWidth=6,i.beginPath(),i.arc(0,0,50,0,7),i.stroke(),i.fillStyle="rgba(70,76,84,.75)",i.font="900 46px Arial",i.textAlign="center",i.textBaseline="middle",i.fillText("JK",0,3),i.fillRect(-62,-5,10,10),i.fillRect(52,-5,10,10);let s=new pn(t);return s.colorSpace=St,Gh[e]=s}var Pf=new rt,xv=new an,_v=new On,vv=new P,yv=new P;function Pn(n,e=0,t=0,i=0,s=0,r=0,a=0,o=1,l=1,c=1){return Pf.compose(vv.set(e,t,i),xv.setFromEuler(_v.set(s,r,a)),yv.set(o,l,c)),n.clone().applyMatrix4(Pf)}function Mv(n){let e=n.index?n.toNonIndexed():n;for(let t of Object.keys(e.attributes))["position","normal","uv"].includes(t)||e.deleteAttribute(t);return e.attributes.uv||e.setAttribute("uv",new Ie(new Float32Array(e.attributes.position.count*2),2)),e.attributes.normal||e.computeVertexNormals(),e.clearGroups(),e}function Uf(n){return n.length?Zi(n.map(Mv),!1):null}function vn(n,e,t){let i=n.length;if(e<=n[0][0])return n[0][t];if(e>=n[i-1][0])return n[i-1][t];let s=0;for(;e>n[s+1][0];)s++;let r=u=>(n[u+1][t]-n[u][t])/(n[u+1][0]-n[u][0]),a=u=>{if(u===0)return r(0);if(u===i-1)return r(i-2);let f=r(u-1),d=r(u);return f*d<=0?0:2/(1/f+1/d)},o=n[s+1][0]-n[s][0],l=(e-n[s][0])/o,c=l*l,h=c*l;return(2*h-3*c+1)*n[s][t]+(h-2*c+l)*o*a(s)+(-2*h+3*c)*n[s+1][t]+(h-c)*o*a(s+1)}function Sv(n,e,{rings:t=64,seg:i=40,x:s=0,t0:r=n[0][0],t1:a=n[n.length-1][0],bias:o=1.2}={}){let l=[],c=[];for(let u=0;u<=t;u++){let f=r+(a-r)*Math.pow(u/t,o),d=vn(n,f,1),p=vn(n,f,2),_=vn(n,f,3),g=vn(n,f,4),m=vn(n,f,5),v=vn(n,f,6),S=-e/2+f*e;for(let M=0;M<=i;M++){let w=M/i*Math.PI*2,T=Math.cos(w),x=Math.sin(w),E=x>=0,N=2/(E?m:v);l.push(s+Math.sign(T)*Math.pow(Math.abs(T),N)*d,g+Math.sign(x)*Math.pow(Math.abs(x),N)*(E?p:_),S),c.push(M/i*3,S/8)}}let h=[];for(let u=0;u<t;u++)for(let f=0;f<i;f++){let d=u*(i+1)+f,p=d+i+1;h.push(d,d+1,p,p,d+1,p+1)}return Ff(l,c,h)}function bv(n,e){let t=[],i=[],s=n.length;for(let r=0;r<s;r++){let a=n[r],o=n[(r+s-1)%s],l=n[(r+1)%s];e[r]?(t.push(a),i.push(!0)):(t.push([.75*a[0]+.25*o[0],.75*a[1]+.25*o[1]],[.75*a[0]+.25*l[0],.75*a[1]+.25*l[1]]),i.push(!1,!1))}return[t,i]}function Ql(n,e,{rings:t=70,iters:i=2,sharp:s=[],mirror:r=!0,bias:a=1.15}={}){let o=n[0][1].length,l=[];for(let C=0;C<o;C++)l.push(n.map(([L,O])=>[L,O[C][0],O[C][1]]));let c=C=>r?[...C,...C.slice(1,-1).reverse().map(([L,O])=>[-L,O])]:C,h=r?[...Array(o).keys()].map(C=>s.includes(C)).concat([...Array(o-2).keys()].map(C=>s.includes(o-2-C))):[...Array(o).keys()].map(C=>s.includes(C)),u=[],f=[],d=[],p=[],_=[],g=[],m=n[0][0],v=n[n.length-1][0];for(let C=0;C<=t;C++){let L=m+(v-m)*Math.pow(C/t,a),O=-e/2+L*e,H=c(l.map(X=>[vn(X,L,1),vn(X,L,2)])),A=h;for(let X=0;X<i;X++)[H,A]=bv(H,A);let F=H.length,z=[],k=[],ee=0;for(let X=0;X<=F;X++){let te=H[X%F];X&&(ee+=Math.hypot(te[0]-H[X-1][0],te[1]-H[(X-1)%F][1]));let ie=()=>(u.push(te[0],te[1],O),f.push(ee/8,O/8),u.length/3-1),be=ie(),He=A[X%F]&&X>0&&X<F?ie():be;z.push(be),k.push(He)}A[0]||g.push([k[0],z[F]]),p.push(z),_.push(k)}for(let C=0;C<t;C++)for(let L=0;L<p[C].length-1;L++){let O=_[C][L],H=p[C][L+1],A=_[C+1][L],F=p[C+1][L+1];d.push(O,H,A,A,H,F)}let S=new et;S.setAttribute("position",new Ie(u,3)),S.setAttribute("uv",new Ie(f,2)),S.setIndex(d),S.computeVertexNormals();let M=_[t>>1],w=S.attributes.position,T=S.attributes.normal,x=0,E=0;M.forEach(C=>{x+=w.getX(C),E+=w.getY(C)}),x/=M.length,E/=M.length;let N=M[Math.floor(M.length/4)];if((w.getX(N)-x)*T.getX(N)+(w.getY(N)-E)*T.getY(N)<0){let C=S.index.array;for(let L=0;L<C.length;L+=3){let O=C[L+1];C[L+1]=C[L+2],C[L+2]=O}S.computeVertexNormals()}return g.forEach(([C,L])=>{if(C===L)return;let O=T.getX(C)+T.getX(L),H=T.getY(C)+T.getY(L),A=T.getZ(C)+T.getZ(L),F=Math.hypot(O,H,A)||1;T.setXYZ(C,O/F,H/F,A/F),T.setXYZ(L,O/F,H/F,A/F)}),S}function Ta(n,e,t=.9){let i=0,s=0;n.forEach(([l,c])=>{i+=l,s+=c}),i/=n.length,s/=n.length;let r=[i,s,e],a=[];n.forEach(([l,c])=>r.push(i+(l-i)*t,s+(c-s)*t,e));for(let l=0;l<n.length;l++)a.push(0,1+l,1+(l+1)%n.length);let o=new et;if(o.setAttribute("position",new Ie(r,3)),o.setAttribute("uv",new Ie(new Array(r.length/3*2).fill(0),2)),o.setIndex(a),o.computeVertexNormals(),o.attributes.normal.getZ(0)>0){let l=o.index.array;for(let c=0;c<l.length;c+=3){let h=l[c+1];l[c+1]=l[c+2],l[c+2]=h}o.computeVertexNormals()}return o}var wa=(n,e,t,i,s)=>[[n+t-s,e+i],[n+t,e+i-s],[n+t,e-i+s],[n+t-s,e-i],[n-t+s,e-i],[n-t,e-i+s],[n-t,e+i-s],[n-t+s,e+i]];function lr(n,{nC:e=14,sub:t=1}={}){let i=[];for(let c=0;c<n.length-1;c++)for(let h=0;h<t;h++){let u=h/t;i.push(n[c].map((f,d)=>f*(1-u)+n[c+1][d]*u))}i.push(n[n.length-1]);let s=[],r=[],a=[],o=2*e,l=c=>5*(.2969*Math.sqrt(c)-.126*c-.3516*c*c+.2843*c**3-.1036*c**4);i.forEach(([c,h,u,f,d])=>{let p=f-u;for(let _=0;_<o;_++){let g=_<=e,m=g?_:o-_,v=(1-Math.cos(Math.PI*m/e))/2,S=Math.max(l(v)*d*p,.004);s.push(c,h+(g?S:-S),u+v*p),r.push(c/8,(u+v*p)/8)}});for(let c=0;c<i.length-1;c++)for(let h=0;h<o;h++){let u=c*o+h,f=c*o+(h+1)%o,d=u+o,p=f+o;a.push(u,d,f,f,d,p)}return[0,i.length-1].forEach(c=>{let h=s.length/3,u=0,f=0,d=0;for(let p=0;p<o;p++)u+=s[(c*o+p)*3],f+=s[(c*o+p)*3+1],d+=s[(c*o+p)*3+2];s.push(u/o,f/o,d/o),r.push(0,0);for(let p=0;p<o;p++)a.push(c*o+p,c*o+(p+1)%o,h)}),Ff(s,r,a)}function Ff(n,e,t){let i=new et;return i.setAttribute("position",new Ie(n,3)),i.setAttribute("uv",new Ie(e,2)),i.setIndex(t),Ev(i)}function Ev(n){let e=n.attributes.position,t=n.index.array,i=new P,s=new P,r=new P,a=0;for(let o=0;o<t.length;o+=3)i.fromBufferAttribute(e,t[o]),s.fromBufferAttribute(e,t[o+1]),r.fromBufferAttribute(e,t[o+2]),a+=i.dot(s.cross(r));if(a<0)for(let o=0;o<t.length;o+=3){let l=t[o+1];t[o+1]=t[o+2],t[o+2]=l}return n.computeVertexNormals(),n}function Tv(n){let e=n.clone();e.scale(-1,1,1);let t=e.index.array;for(let i=0;i<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}return e.computeVertexNormals(),e}var Ji=(n,e)=>{e.push(n,Tv(n))};function If(n,e,t,i,s){let r=lr(n,s);return r.rotateZ(Math.PI/2-e),r.translate(t,i,0),r}function Lf(n,e){let[t,i]=[n[0],n[n.length-1]],s=t[0]+(i[0]-t[0])*e,r=0;for(;r<n.length-2&&s>n[r+1][0];)r++;let a=(s-n[r][0])/(n[r+1][0]-n[r][0]),o=n[r].map((l,c)=>l*(1-a)+n[r+1][c]*a);return{x:s,y:o[1],le:o[2],te:o[3],tr:o[4],c:o[3]-o[2]}}var wv={raptor:{L0:18.9,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.14,.06],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.36],[.18,.33],[.36,.17],[.48,0],[.38,-.14],[.22,-.25],[.08,-.28],[0,-.29]]],[.18,[[0,.55],[.27,.5],[.52,.26],[.66,.02],[.55,-.2],[.36,-.36],[.12,-.41],[0,-.41]]],[.27,[[0,.64],[.32,.6],[.6,.34],[.76,.05],[.68,-.2],[.5,-.4],[.16,-.46],[0,-.46]]],[.36,[[0,.66],[.42,.64],[.86,.42],[1.2,.08],[1.12,-.14],[.95,-.4],[.3,-.48],[0,-.48]]],[.45,[[0,.6],[.56,.67],[1.08,.44],[1.66,.04],[1.52,-.14],[1.2,-.42],[.4,-.5],[0,-.5]]],[.58,[[0,.52],[.62,.66],[1.16,.44],[1.76,.03],[1.6,-.14],[1.25,-.42],[.4,-.48],[0,-.48]]],[.72,[[0,.46],[.6,.6],[1.1,.4],[1.6,.02],[1.48,-.13],[1.18,-.38],[.4,-.44],[0,-.44]]],[.85,[[0,.36],[.6,.52],[1,.34],[1.3,0],[1.22,-.12],[1,-.32],[.4,-.38],[0,-.38]]],[.95,[[0,.26],[.56,.42],[.92,.28],[1.08,0],[1.02,-.1],[.9,-.26],[.4,-.32],[0,-.32]]],[1,[[0,.24],[.55,.38],[.88,.26],[1,0],[.95,-.1],[.85,-.24],[.4,-.3],[0,-.3]]]],intake:[[.25,[[.6,.32],[1.2,.06],[1.1,-.48],[.58,-.5]]],[.32,[[.62,.34],[1.27,.08],[1.15,-.5],[.58,-.52]]],[.42,[[.7,.38],[1.4,.1],[1.24,-.5],[.6,-.52]]],[.52,[[.82,.42],[1.5,.07],[1.3,-.46],[.7,-.5]]]],W:[[1.5,.03,n=>n(.405),n=>n(.79),.035],[6.78,-.22,n=>n(.66),n=>n(.752),.03]],HS:[[1,0,n=>n(.8),n=>n(1),.035],[4.4,-.04,n=>n(.955),n=>n(1.02),.03]],VT:{x:1.25,y:.26,cant:.49,secs:[[0,0,n=>n(.615),n=>n(.865),.04],[2.65,0,n=>n(.755),n=>n(.84),.035]]},ex:[-.55,.55],ey:0,nr:.38,nozzle:"2d",canopy:[.09,.35],cw:1.2,ch:1.05,frame:!1,pyl:[.78,.56,.34,.14]},viper:{L0:15.7,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.04,[[0,.14],[.07,.12],[.15,.05],[.2,0],[.15,-.06],[.08,-.11],[.03,-.13],[0,-.13]]],[.1,[[0,.38],[.2,.34],[.38,.18],[.5,0],[.4,-.15],[.24,-.27],[.08,-.3],[0,-.31]]],[.19,[[0,.6],[.28,.55],[.55,.3],[.7,.02],[.6,-.22],[.4,-.4],[.14,-.46],[0,-.46]]],[.28,[[0,.74],[.36,.68],[.68,.4],[.86,.05],[.78,-.24],[.58,-.46],[.18,-.52],[0,-.52]]],[.38,[[0,.82],[.45,.76],[.9,.46],[1.3,.08],[1.22,-.2],[1,-.48],[.3,-.56],[0,-.56]]],[.5,[[0,.84],[.55,.78],[1.05,.48],[1.5,.06],[1.4,-.18],[1.1,-.48],[.35,-.58],[0,-.58]]],[.64,[[0,.78],[.55,.74],[1,.46],[1.45,.04],[1.35,-.16],[1.05,-.44],[.35,-.54],[0,-.54]]],[.78,[[0,.68],[.5,.64],[.88,.4],[1.2,.02],[1.12,-.14],[.9,-.38],[.35,-.48],[0,-.48]]],[.9,[[0,.58],[.42,.54],[.72,.34],[.92,0],[.86,-.12],[.72,-.32],[.3,-.42],[0,-.42]]],[.97,[[0,.52],[.38,.48],[.62,.3],[.74,0],[.7,-.12],[.6,-.28],[.3,-.38],[0,-.4]]],[1,[[0,.5],[.35,.46],[.58,.28],[.68,0],[.65,-.12],[.56,-.26],[.28,-.36],[0,-.38]]]],intake:[[.26,[[.58,.42],[1.1,.2],[1.02,-.4],[.55,-.42]]],[.33,[[.6,.44],[1.16,.2],[1.06,-.42],[.55,-.44]]],[.43,[[.7,.46],[1.3,.18],[1.16,-.42],[.6,-.44]]],[.52,[[.82,.5],[1.4,.12],[1.22,-.42],[.7,-.46]]]],W:[[1.4,.04,n=>n(.47),n=>n(.83),.04],[5.35,-.1,n=>n(.64),n=>n(.73),.035]],HS:[[.7,.02,n=>n(.84),n=>n(1.03),.035],[3.45,0,n=>n(.99),n=>n(1.045),.03]],VT:{x:.9,y:.46,cant:.44,secs:[[0,0,n=>n(.65),n=>n(.865),.045],[2.15,0,n=>n(.79),n=>n(.86),.04]]},ex:[0],ey:.05,nr:.52,nozzle:"round",canopy:[.1,.34],cw:1.05,ch:1,frame:!0,pyl:[.8,.55,.3]},striker:{L0:20.1,body:[[0,[[0,.006],[.003,.005],[.006,.002],[.008,0],[.006,-.002],[.003,-.004],[.001,-.005],[0,-.005]]],[.03,[[0,.12],[.06,.1],[.12,.04],[.16,0],[.12,-.05],[.06,-.1],[.02,-.11],[0,-.11]]],[.09,[[0,.36],[.18,.32],[.34,.16],[.44,0],[.36,-.14],[.2,-.25],[.07,-.28],[0,-.29]]],[.18,[[0,.58],[.26,.52],[.5,.28],[.64,.02],[.54,-.18],[.36,-.34],[.12,-.4],[0,-.4]]],[.28,[[0,.64],[.3,.6],[.62,.34],[1,.06],[.86,-.12],[.5,-.3],[.15,-.36],[0,-.36]]],[.38,[[0,.6],[.4,.57],[1.1,.3],[1.95,.05],[1.75,-.08],[1,-.2],[.3,-.28],[0,-.28]]],[.5,[[0,.52],[.5,.5],[1.3,.27],[2.2,.04],[2,-.06],[1.2,-.15],[.3,-.21],[0,-.21]]],[.65,[[0,.46],[.5,.45],[1.3,.25],[2.05,.03],[1.85,-.05],[1.1,-.13],[.3,-.19],[0,-.19]]],[.8,[[0,.36],[.42,.34],[1,.2],[1.45,.02],[1.32,-.04],[.9,-.11],[.25,-.15],[0,-.15]]],[.92,[[0,.24],[.25,.22],[.45,.12],[.56,0],[.5,-.06],[.4,-.1],[.15,-.12],[0,-.12]]],[1.06,[[0,.06],[.05,.05],[.1,.02],[.12,0],[.1,-.02],[.06,-.04],[.02,-.05],[0,-.05]]]],nacelle:[[.3,.46,.3,.04],[.42,.47,.34,.1],[.62,.47,.42,.24],[.85,.46,.45,.28],[1,.44,.44,.27]],nx:1.12,ny:-.4,W:[[1.9,.05,n=>n(.47),n=>n(.8),.035],[7,-.05,n=>n(.745),n=>n(.81),.03]],HS:[[1.55,-.12,n=>n(.82),n=>n(.995),.035],[4,-.14,n=>n(.95),n=>n(1),.03]],VT:{x:1.4,y:.14,cant:.45,secs:[[0,0,n=>n(.7),n=>n(.9),.04],[2.1,0,n=>n(.82),n=>n(.905),.035]]},ex:[-1.12,1.12],ey:-.4,nr:.42,nozzle:"round",canopy:[.1,.31],cw:1,ch:.95,frame:!0,irst:!0,pyl:[.84,.64,.44,.24]}};function Av(n){let e=n.len,t={paint:[],dark:[],metal:[],glass:[],light:[],decal:[],pilot:[],sill:[],helm:[]},i=n.style,s=wv[i],r=A=>-e/2+A*e,a=e/s.L0,o=e/15,l=A=>A.map(([F,z])=>[F,z.map(([k,ee])=>[k*a,ee*a])]),c=l(s.body),h=c.map(([A,F])=>[A,F[0][1]]),u=c.map(([A,F])=>[A,F[F.length-1][1]]),f=A=>vn(h,A,1),d=A=>vn(u,A,1);t.paint.push(Ql(c,e,{rings:80,iters:2,sharp:[3]}));{let[A,F]=c[c.length-1];t.dark.push(Ta([...F,...F.slice(1,-1).reverse().map(([z,k])=>[-z,k])],r(A)-.03,.99))}if(s.intake){let A=l(s.intake),F=Ql(A,e,{rings:16,iters:1,mirror:!1,sharp:[0,1,2,3],bias:1});Ji(F,t.paint),Ji(Ta(A[0][1],r(A[0][0])+.08,.94),t.dark),Ji(Ta([[A[0][1][0][0]-.05,A[0][1][0][1]],[A[0][1][0][0],A[0][1][0][1]],[A[0][1][3][0],A[0][1][3][1]],[A[0][1][3][0]-.05,A[0][1][3][1]]],r(A[0][0])+.25,1),t.dark)}if(s.nacelle){let A=s.nx*a,F=s.ny*a,z=s.nacelle.map(([ee,X,te,ie])=>[ee,wa(A,F,X*a,te*a,ie*a)]),k=Ql(z,e,{rings:44,iters:2,mirror:!1,sharp:[],bias:1});Ji(k,t.paint),Ji(Ta(wa(A,F,s.nacelle[0][1]*a,s.nacelle[0][2]*a,s.nacelle[0][3]*a),r(s.nacelle[0][0])+.05,.92),t.dark)}s.irst&&t.glass.push(Pn(new Qn(.13*a,14,10),.2*a,f(.1)+.03,r(.1)));let[p,_]=s.canopy,g=[[p,.02,.02],[p+.03,.17,.16],[p+.08,.3,.34],[(p+_)/2+.02,.35,.42],[_-.07,.3,.32],[_-.02,.16,.14],[_,.04,.03]].map(([A,F,z])=>[A,F*o*s.cw,z*o*s.ch,f(A)-.08*o,2]);t.glass.push(Sv(g.map(([A,F,z,k])=>[A,F,z,z*.3,k,2.1,2]),e,{rings:40,seg:36,bias:1}));let m=A=>f(A)-.07*o,v=A=>vn(g,A,1);[-1,1].forEach(A=>{let F=[];for(let z=0;z<=14;z++){let k=p+.03+(_-p-.06)*z/14;F.push(new P(A*v(k)*.97,m(k)+.02*o,r(k)))}t.sill.push(new Zs(new cs(F),24,.035*o,6))}),t.dark.push(Pn(new Bi(.15*o,.2*o,4,10),0,f(p+.2)+.02*o,r(p+.2),0,0,0,1,1,.45)),t.helm.push(Pn(new Qn(.165*o,14,8,Math.PI*.25,Math.PI*.5,Math.PI*.3,Math.PI*.32),0,f(p+.14)+.14*o,r(p+.14),0,Math.PI,0));{let A=p+.15,F=[];for(let z=p+.02;z<=_-.02;z+=.01)F.push(f(z));t.cock={eyeY:f(A)+.13*o,eyeZ:r(A),z0:r(p+.025),z1:r(_-.025),w:Math.max(...g.map(z=>z[1]))*.9,y0:Math.min(...F)-.8*o,y1:Math.max(...F)+.2*o,k:o}}if(s.frame){let A=p+.2;t.dark.push(Pn(new Ys(1,.045,6,28,Math.PI),0,f(A)-.08*o,r(A),.25,0,0,v(A)*1.02,vn(g,A,2)*1.02,.3*o))}t.pilot.push(Pn(new Qn(.16*o,12,10),0,f(p+.14)+.14*o,r(p+.14)));let S=s.W.map(([A,F,z,k,ee])=>[A*a,F*a,z(r),k(r),ee]),M=s.HS.map(([A,F,z,k,ee])=>[A*a,F*a,z(r),k(r),ee]);Ji(lr(S,{nC:16,sub:3}),t.paint),Ji(lr(M,{nC:12,sub:2}),t.paint);{let A=s.VT,F=If(A.secs.map(([z,k,ee,X,te])=>[z*a,k,ee(r),X(r),te]),A.cant,0,0,{nC:14,sub:2});F.translate(A.x*a,A.y*a,0),Ji(F,t.paint)}let w=S[S.length-1];[-1,1].forEach(A=>{t.light.push(Pn(new Qn(.05*o,8,6),A*(w[0]-.05),w[1]+.03,w[3]-.15));let F=[];for(let k=.04;k<=.97;k+=.93/12){let ee=Lf(S,k);F.push(new P(A*ee.x,ee.y+.25*ee.tr*ee.c+.004,ee.te-ee.c*.2))}t.dark.push(new Zs(new cs(F),16,.007,3));let z=Lf(S,.62);t.decal.push(Pn(new hs(1*o,1*o),A*z.x,z.y+.4*z.tr*z.c+.01,(z.le+z.te)/2+.1*z.c,-Math.PI/2,0,0))});let T=s.ex.map(A=>A*a),x=s.ey*a,E=s.nr*a,N=r(1);T.forEach(A=>{if(s.nozzle==="2d"){t.metal.push(Ql([[.955,wa(A,x,.46*a,.3*a,.08*a)],[1,wa(A,x,.42*a,.25*a,.06*a)]],e,{rings:4,iters:1,mirror:!1,bias:1})),[1,-1].forEach(k=>t.metal.push(lr([[A-.4*a,x+k*.23*a,r(.998),r(1.045),.05],[A+.4*a,x+k*.2*a,r(.998),r(1.035),.05]],{nC:6}))),t.dark.push(Ta(wa(A,x,.4*a,.22*a,.05*a),r(1)-.05,1));return}let F=new qs([[E*.98,0],[E*1.02,.2],[E*.97,.7*o],[E*.86,1.15*o],[E*.82,1.22*o],[E*.74,1.18*o],[E*.76,.3]].map(([k,ee])=>new ce(k,ee)),40),z=F.attributes.position;for(let k=0;k<z.count;k++){if(z.getY(k)<.6*o)continue;let ee=Math.atan2(z.getZ(k),z.getX(k)),X=1+.045*Math.max(0,Math.cos(ee*14));z.setX(k,z.getX(k)*X),z.setZ(k,z.getZ(k)*X)}F.computeVertexNormals(),t.metal.push(Pn(F,A,x,N-.4*o,Math.PI/2)),t.dark.push(Pn(new ls(E*.74,28),A,x,N+.05*o)),t.dark.push(Pn(new Ys(E*.5,E*.06,6,24),A,x,N))});let C=(A,F,z,k,ee=!1)=>{let X=If([[0,0,r(z),r(z)+.35*o,.1],[k,0,r(z)+.14*o,r(z)+.32*o,.1]],0,0,0,{nC:6});ee&&X.rotateZ(Math.PI),t.dark.push(X.translate(A,F,0))};C(0,f(.52)-.02,.52,.18*o),C(0,d(.3)+.02,.3,.18*o,!0),t.light.push(Pn(new Wt(.03*o,.02*o,.45*o),0,f(.62)+.004,r(.62))),[-1,1].forEach(A=>t.light.push(Pn(new Wt(.02*o,.02*o,.5*o),A*c[4][1][2][0]*.9,vn(c.map(([F,z])=>[F,z[2][1]]),.27,1)+.01,r(.27),0,A*.3,0)));let L=[],O=(d(.5)+.2*o)*.5;for(let A=0;A<6;A++)L.push([(.28+.19*A)*o,O,r(.47+A%2*.05)]);for(;L.length<6;)L.push(L[L.length-1]);let H=t.cock;return delete t.cock,{P:t,ex:T,ey:x,nr:E,tailZ:N,sp:w[0]-S[0][0],rx:S[0][0],wy:S[0][1],L:e,k:o,cock:H,pylons:L}}var Vh={},Rv=new zi(.5,6,16,1,!0).rotateX(Math.PI/2).translate(0,0,3),Cv=new zi(.3,3.4,12,1,!0).rotateX(Math.PI/2).translate(0,0,1.7),jl=null;function Aa(){if(jl)return jl;let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.3,"rgba(255,255,255,.5)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),jl=new pn(n),jl}function Pv(n,e,t){let i=n+"|"+e+"|"+(t?1:0);if(Vh[i])return Vh[i];let s=Df[n],r=Av(s),a={paint:new $s({map:pv(t?"red":e),bumpMap:mv(),bumpScale:1.2,roughness:.46,metalness:.32,clearcoat:.3,clearcoatRoughness:.45,envMapIntensity:.9}),dark:new vt({color:"#25282d",roughness:.55,metalness:.45}),metal:new vt({color:"#6f7379",roughness:.32,metalness:.9,envMapIntensity:1.2}),glass:new $s({color:t?"#4a3418":"#7d6a3e",roughness:.03,metalness:.55,envMapIntensity:2.4,clearcoat:1,clearcoatRoughness:.02,transparent:!0,opacity:.78}),light:new Rn({color:"#fff7e0"}),decal:new vt({map:gv(t),transparent:!0,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2,depthWrite:!1}),pilot:new vt({color:"#e6e6e0",roughness:.4})};a.sill=a.dark,a.helm=a.dark;let o={};for(let c in r.P){let h=Uf(r.P[c]);h&&(h.computeBoundingSphere(),o[c]=h)}let l=r.pylons;return Vh[i]={J:s,A:r,mats:a,geos:o,pylons:l}}function qh(n="viper",e="gray",t=!1){Df[n]||(n="viper"),Nf[e]||(e="gray");let i=Pv(n,e,t),{J:s,A:r}=i,a=new Vt,o=new Vt;a.add(o);for(let g in i.geos){let m=new nt(i.geos[g],i.mats[g]);m.name=g,m.castShadow=g==="paint"||g==="dark"||g==="metal",m.receiveShadow=g==="paint",o.add(m)}let l=[];for(let g=0;g<Math.ceil(s.missiles/2);g++){let m=i.pylons[g%i.pylons.length];[-1,1].forEach(v=>{let S=Dv();S.position.set(v*m[0],m[1],m[2]+(g>=i.pylons.length?1.2:0)),S.castShadow=!0,o.add(S),l.push(S)})}let c=(g,m)=>new Rn({color:g,transparent:!0,opacity:m,blending:gn,depthWrite:!1}),h=t?i.fm||(i.fm=c("#ffa04a",.55)):c("#ffa04a",.6),u=t?i.cm||(i.cm=c("#a9e2ff",.8)):c("#a9e2ff",.85),f=t?i.gm||(i.gm=new Kn({map:Aa(),color:"#ffb066",opacity:.7,blending:gn,depthWrite:!1})):new Kn({map:Aa(),color:"#ffb066",opacity:.8,blending:gn,depthWrite:!1}),d=[],p=[];r.ex.forEach(g=>{let m=new nt(Rv,h),v=new nt(Cv,u),S=new Fi(f),M=r.nr/.5;m.scale.setScalar(M),v.scale.setScalar(M),m.position.set(g,r.ey,r.tailZ+.9*r.k),v.position.copy(m.position),S.position.set(g,r.ey,r.tailZ+.7*r.k),S.scale.setScalar(r.nr*4.5),o.add(m,v,S),d.push(m,v),p.push(S)});let _=new Fi(i.sm||(i.sm=new Kn({map:Aa(),color:"#ffffff",blending:gn,depthWrite:!1})));return _.scale.setScalar(2.4),_.position.set(0,-.5*r.k,-r.L*.05),o.add(_),a.userData={def:s,body:o,flames:d,glows:p,msls:l,strobe:_,len:r.L,flameMat:h,coreMat:u,glowMat:f},a}var Wh=null,Xh=null;function Iv(){if(Wh)return Wh;let n=[[0,-1.66],[.085,-1.66],[.11,-1.6],[.11,1.15],[.1,1.32],[.075,1.5],[.04,1.62],[0,1.68]].map(([t,i])=>new ce(t,i)),e=[new qs(n,16).rotateX(-Math.PI/2)];for(let t=0;t<4;t++){let i=t*Math.PI/2+Math.PI/4;e.push(lr([[.1,0,1.18,1.62,.06],[.32,0,1.42,1.62,.06]],{nC:5}).rotateZ(i),lr([[.1,0,-1,-.72,.06],[.24,0,-.9,-.76,.06]],{nC:5}).rotateZ(i))}return Wh=Uf(e)}function Lv(){if(Xh)return Xh;let n=document.createElement("canvas");n.width=64,n.height=8;let e=n.getContext("2d");e.fillStyle="#ececec",e.fillRect(0,0,64,8),e.fillStyle="#d9b43a",e.fillRect(10,0,3,8),e.fillStyle="#5b5e63",e.fillRect(0,0,6,8);let t=new pn(n);return t.colorSpace=St,Xh=new vt({map:t,roughness:.4,metalness:.2})}function Dv(){return new nt(Iv(),Lv())}var ve=n=>document.getElementById(n),Mn=(n,e,t)=>Math.max(e,Math.min(t,n)),Vn=(n,e,t)=>n+(e-n)*t,Y=(n,e)=>n+Math.random()*(e-n),Ai=(n,e)=>{let t=n-e;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;return t},ai=()=>{let n=0,e=0;for(;!n;)n=Math.random();return e=Math.random(),Math.sqrt(-2*Math.log(n))*Math.cos(2*Math.PI*e)},_r=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window,Nv=1.944,Ia=9.81,nc=12500,Et={ship:"ca",shellCam:!0,quality:"auto",sens:1};try{Object.assign(Et,JSON.parse(localStorage.getItem("jkn-settings")||"{}"))}catch{}var La=()=>{try{localStorage.setItem("jkn-settings",JSON.stringify(Et))}catch{}},cr=0;try{cr=+localStorage.getItem("jkn-best")||0}catch{}var In=Et.quality==="auto"?_r?"medium":"high":Et.quality,un=new kl({canvas:ve("gl"),antialias:In!=="low",powerPreference:"high-performance",logarithmicDepthBuffer:!1}),Of=Math.min(devicePixelRatio||1,In==="high"?2:In==="medium"?1.5:1),ii=1;un.toneMapping=ps;un.toneMappingExposure=.55;un.outputColorSpace=St;un.shadowMap.enabled=In==="high";un.shadowMap.type=ds;var at=new as,Ae=new $t(60,innerWidth/innerHeight,1,6e4),{sky:Gf,sun:Vf}=Tf(un,at,9,205);at.add(Gf);at.fog=new Gr("#b9a993",2500,26e3);var ci=new ia("#ffd9a8",2.1);ci.position.copy(Vf).multiplyScalar(1e3);ci.castShadow=In==="high";ci.shadow.mapSize.set(2048,2048);Object.assign(ci.shadow.camera,{left:-180,right:180,top:180,bottom:-180,near:10,far:3e3});ci.shadow.bias=-5e-4;ci.shadow.normalBias=.5;at.add(ci,ci.target);at.add(new jr("#bcd2ec","#3a4650",.55));var ru=Ef(In);at.add(ru);at.add(wf());var wi=null,Qh=null;if(In!=="low"){let n=new bt(1,1,{type:It,samples:In==="high"?4:0});n.depthTexture=new Bn(1,1),n.depthTexture.type=xn,wi=new ql(un,n),wi.addPass(new Yl(at,Ae)),Qh=new ar(new ce(256,256),.22,.25,2.4),wi.addPass(Qh),wi.addPass(new Zl)}function au(){let n=innerWidth,e=innerHeight;Ae.aspect=n/e,Ae.updateProjectionMatrix(),un.setPixelRatio(Of*ii),un.setSize(n,e,!1),wi&&(wi.setPixelRatio(Of*ii),wi.setSize(n,e),Qh.resolution.set(n/2,e/2))}addEventListener("resize",au);au();var gr=class{constructor(e,t,i=!0){this.max=e,this.i=0,this.p=new Float32Array(e*3),this.v=new Float32Array(e*3),this.c=new Float32Array(e*3),this.sz=new Float32Array(e),this.al=new Float32Array(e),this.age=new Float32Array(e).fill(1e9),this.life=new Float32Array(e).fill(1),this.s0=new Float32Array(e),this.gr=new Float32Array(e),this.a0=new Float32Array(e),this.drag=new Float32Array(e),this.grav=new Float32Array(e);let s=new et;for(let[r,a,o]of[["position",this.p,3],["color",this.c,3],["size",this.sz,1],["alpha",this.al,1]])s.setAttribute(r,new Bt(a,o).setUsage(hh));s.boundingSphere=new yi(new P,1e7),this.mat=new Mt({transparent:!0,depthWrite:!1,blending:t?gn:Wi,uniforms:{scale:{value:500}},vertexShader:"attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC=color; vec4 mv=modelViewMatrix*vec4(position,1.); vA=alpha*smoothstep(size*.6,size*2.5+8.,-mv.z); gl_PointSize=clamp(size*scale/-mv.z,1.5,500.); gl_Position=projectionMatrix*mv; }",fragmentShader:`varying vec3 vC; varying float vA; void main(){ vec2 q=gl_PointCoord-.5; float r=length(q); if(r>.5||vA<.004) discard; float n=fract(sin(dot(floor(gl_PointCoord*6.),vec2(12.9,78.2)))*43758.5); gl_FragColor=vec4(vC*(${i?".85+.3*n":"1."}), vA*smoothstep(.5,.0,r)); }`}),this.pts=new qr(s,this.mat),this.pts.frustumCulled=!1,this.pts.renderOrder=3,at.add(this.pts),this.g=s}emit(e,t,i,s,r,a,o,l,c,h,u,f=1,d=0){let p=this.i;this.i=(p+1)%this.max,this.p[p*3]=e,this.p[p*3+1]=t,this.p[p*3+2]=i,this.v[p*3]=s,this.v[p*3+1]=r,this.v[p*3+2]=a,this.c[p*3]=h[0],this.c[p*3+1]=h[1],this.c[p*3+2]=h[2],this.age[p]=0,this.life[p]=o,this.s0[p]=l,this.gr[p]=c,this.a0[p]=u,this.drag[p]=f,this.grav[p]=d}update(e){for(let t=0;t<this.max;t++){let i=this.age[t]+=e,s=this.life[t];if(i>s){this.al[t]=0;continue}let r=t*3,a=Math.pow(this.drag[t],e);this.v[r]*=a,this.v[r+1]=this.v[r+1]*a-this.grav[t]*e,this.v[r+2]*=a,this.p[r]+=this.v[r]*e,this.p[r+1]+=this.v[r+1]*e,this.p[r+2]+=this.v[r+2]*e,this.sz[t]=this.s0[t]*(1+this.gr[t]*i),this.al[t]=this.a0[t]*(1-i/s)*Math.min(1,i*10)}for(let t of["position","color","size","alpha"])this.g.attributes[t].needsUpdate=!0}},$i=new gr(In==="low"?1500:In==="medium"?2500:4e3,!1),Ln=new gr(In==="low"?1200:In==="medium"?2e3:3e3,!1),Xn=new gr(1500,!0,!1),ac=new gr(1500,!1),Da=[.93,.95,.97],Uv=[.8,.85,.88],vr=[.1,.1,.11],Fv=[.42,.43,.45],yr=[1,.55,.15],ou=[1,.8,.45],Ov=[.75,.75,.76],pr={},Bf=18*Math.PI/180,Bv={dd:9,ca:12,bb:15};for(let n of Object.values(vs).filter(e=>!e.modern)){let e=n.F+4,t=Bv[n.id],i=15e-6,s=(l,c,h)=>{let u=0,f=e,d=h*Math.cos(l),p=h*Math.sin(l),_=0;for(;f>0&&_<60;){let g=Math.hypot(d,p);d+=-i*g*d*.01,p+=(-i*g*p-c)*.01,u+=d*.01,f+=p*.01,_+=.01}return[u,_]},r=n.range/(1.539*t*t),a=r*t/.618;for(let l=0;l<25;l++){let[c]=s(Bf,r,a);r*=Math.sqrt(c/n.range)**-1*1,a=r*t/.618;let[h]=s(Bf,r,a);if(Math.abs(h-n.range)<5)break}let o=[];for(let l=0;l<=18.001;l+=.1){let[c,h]=s(l*Math.PI/180,r,a);o.push([l*Math.PI/180,c,h])}pr[n.id]={k:i,g:r,v0:a,tab:o,y0:e}}function Oa(n,e){let t=pr[n.id].tab;if(e<=t[0][1])return{elev:t[0][0],tof:t[0][2]*e/Math.max(1,t[0][1]),ok:!0};for(let s=1;s<t.length;s++)if(t[s][1]>=e){let r=t[s-1],a=t[s],o=(e-r[1])/(a[1]-r[1]);return{elev:Vn(r[0],a[0],o),tof:Vn(r[2],a[2],o),ok:!0}}let i=t[t.length-1];return{elev:i[0],tof:i[2],ok:!1}}var ut=[],Be=null,Wf=[-.3,0,.35,.7,1],Na=["ASTERN","STOP","\u2153 AHEAD","\u2154 AHEAD","FULL AHEAD"],zv={ally:["Resolute","Valiant","Audacious","Tempest","Defiant","Sentinel","Intrepid"],enemy:["Kaiser","Drakon","Varyag","Hydra","Basilisk","Gorgon","Leviathan","Kraken","Manticore"]};function mr(n,e,t,i,s,r=1){let a=Cf(n,e==="enemy"?"enemy":"ally");at.add(a);let o=vs[n],l={cls:n,C:o,team:e,mesh:a,x:t,z:i,h:s,v:o.speed*.7,tel:4,rudder:0,rudderCmd:0,yawRate:0,hp:o.hp*r,maxHp:o.hp*r,alive:!0,sinking:0,fires:[],floods:[],dc:0,torpCd:0,roll:0,pitch:0,heave:0,name:e==="player"?"HMS Koppanalil":(e==="enemy"?"SMS ":"HMS ")+zv[e==="enemy"?"enemy":"ally"][Math.floor(Math.random()*7)],turrets:a.userData.turrets,ai:e==="player"?null:{ex:ai(),ez:ai(),zig:0,side:Math.random()<.5?1:-1,err:1,lastH:0,tgt:null,fireCd:Y(2,6),dir:s},dealt:0,kills:0,wake:[],wakeT:0,smokeT:0,engine:1,deto:!1};return l.turrets.forEach(c=>{c.reload=Y(0,o.reload*.5),c.tYaw=c.yaw}),Gv(l),ut.push(l),l}function oc(n){at.remove(n.mesh),at.remove(n.wakeMesh),n.wakeMesh.geometry.dispose(),Object.values(n.mesh.userData.mats).forEach(e=>e.dispose()),ut.splice(ut.indexOf(n),1)}var Wn=n=>[Math.sin(n.h),Math.cos(n.h)];function Ua(n,e,t,i){let s=e-n.x,r=i-n.z,a=Math.cos(n.h),o=Math.sin(n.h);return[s*a-r*o,t-n.heave,s*o+r*a]}function hn(n,e,t,i){let s=Math.cos(n.h),r=Math.sin(n.h);return[n.x+e*s+i*r,t+n.heave,n.z-e*r+i*s]}var kv=(()=>{let n=document.createElement("canvas");n.width=64,n.height=256;let e=n.getContext("2d");for(let s=0;s<900;s++)e.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,e.fillRect(Math.random()*64,Math.random()*256,2+Math.random()*4,2+Math.random()*4);let t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"rgba(0,0,0,1)"),t.addColorStop(.25,"rgba(0,0,0,0)"),t.addColorStop(.75,"rgba(0,0,0,0)"),t.addColorStop(1,"rgba(0,0,0,1)"),e.globalCompositeOperation="destination-out",e.fillStyle=t,e.fillRect(0,0,64,256);let i=new pn(n);return i.wrapT=_i,i})(),Hv=new Rn({map:kv,transparent:!0,depthWrite:!1,vertexColors:!0,fog:!0}),hr=70;function Gv(n){let e=new et,t=new Float32Array(hr*2*3),i=new Float32Array(hr*2*3),s=new Float32Array(hr*2*2),r=[];for(let o=0;o<hr-1;o++){let l=o*2;r.push(l,l+1,l+2,l+1,l+3,l+2)}e.setAttribute("position",new Bt(t,3)),e.setAttribute("color",new Bt(i,3)),e.setAttribute("uv",new Bt(s,2)),e.setIndex(r);let a=new nt(e,Hv);a.frustumCulled=!1,a.renderOrder=1,at.add(a),n.wakeMesh=a}function Vv(n,e,t){n.wakeT+=e;let i=Wn(n),s=n.x-i[0]*n.C.L*.48,r=n.z-i[1]*n.C.L*.48;n.wakeT>.5||!n.wake.length?(n.wakeT=0,n.wake.unshift({x:s,z:r,rx:i[1],rz:-i[0],age:0,v:Math.abs(n.v)}),n.wake.length>hr&&n.wake.pop()):(n.wake[0].x=s,n.wake[0].z=r);let a=n.wakeMesh.geometry,o=a.attributes.position.array,l=a.attributes.color.array,c=a.attributes.uv.array;for(let h=0;h<hr;h++){let u=n.wake[Math.min(h,n.wake.length-1)];h<n.wake.length&&(u.age+=e/Math.max(1,n.wake.length)*0);let f=h*.5,d=n.C.B*.45+f*1.8,p=Math.max(0,1-f/34)*Math.min(1,u.v/6)*(h<n.wake.length?1:0);for(let _=0;_<2;_++){let g=(_?1:-1)*d,m=u.x+u.rx*g,v=u.z+u.rz*g,S=(h*2+_)*3;o[S]=m,o[S+1]=ln(m,v,t)+.35,o[S+2]=v,l[S]=l[S+1]=l[S+2]=p*.85,c[(h*2+_)*2]=_,c[(h*2+_)*2+1]=h*.25}}a.attributes.position.needsUpdate=a.attributes.color.needsUpdate=a.attributes.uv.needsUpdate=!0}var oi=[],li=[],Wv=new Rn({color:new Ne(4,2.2,.8),toneMapped:!1}),Xv=new Bi(.4,6,2,6).rotateX(Math.PI/2),qv=new vt({color:"#1b1d20",roughness:.4}),Yv=new Bi(.4,6,2,8).rotateX(Math.PI/2);function Xf(n,e,t,i){let s=n.C,r=n.mesh.userData;e.reload=s.reload*(n.team==="player"?1:1.3),r.body.updateMatrixWorld(!0);let a=[],o=Math.hypot(t[0]-n.x,t[1]-n.z),l=o*s.spread*.45,c=o*s.spread*1.1;for(let u=0;u<s.barrels;u++){let f=(u-(s.barrels-1)/2)*(2+s.cal/406*5.4)*.55,d=new P(f,0,e.len).applyMatrix4(e.piv.matrixWorld),p=t[0]-d.x,_=t[1]-d.z,g=Math.hypot(p,_),m=p/g,v=_/g,S=t[0]+v*ai()*l+m*ai()*c,M=t[1]-m*ai()*l+v*ai()*c,w=Math.hypot(S-d.x,M-d.z),T=Oa(s,w),x=pr[s.id].v0*Y(.997,1.003),E=(S-d.x)/w,N=(M-d.z)/w,C={x:d.x,y:d.y,z:d.z,vx:E*x*Math.cos(T.elev),vy:x*Math.sin(T.elev),vz:N*x*Math.cos(T.elev),k:pr[s.id].k,g:pr[s.id].g,C:s,owner:n,team:n.team==="enemy"?"enemy":"ally",t:0,mesh:null,cam:!1,player:i,whistled:!1},L=new nt(Xv,Wv);L.scale.setScalar(.6+s.cal/406*1.4),L.position.set(C.x,C.y,C.z),at.add(L),C.mesh=L,oi.push(C),a.push(C);let O=s.cal/406;for(let H=0;H<6+O*14;H++)Xn.emit(d.x,d.y,d.z,E*Y(20,70)*(1+O)+Y(-6,6),Y(-2,8),N*Y(20,70)*(1+O)+Y(-6,6),.18+O*.25,4+O*12,3,ou,1,.05);for(let H=0;H<5+O*12;H++)Ln.emit(d.x,d.y,d.z,E*Y(5,25)*(1+O),Y(0,6),N*Y(5,25)*(1+O),3+O*5,4+O*10,1.5,Fv,.45,.5,-.6)}e.recoil=1;let h=Ae.position.distanceTo(new P(n.x,10,n.z));return Le.gun(s.cal,n===Be?0:h),n===Be&&(D.shake=Math.min(1.5,D.shake+.25+s.cal/406*.8)),a}function qf(n,e){let t=n.C.torp;if(!t||n.torpCd>0)return!1;n.torpCd=n.C.id==="dd"?28:40;let i=Wn(n),s=Math.sign(Math.sin(Ai(e,n.h)))||1;for(let r=0;r<t;r++){let a=e+(r-(t-1)/2)*.045,[o,,l]=hn(n,s*n.C.B*.5,0,0),c=new nt(Yv,qv);at.add(c),li.push({x:o,z:l,h:a,v:24,left:8e3,owner:n,team:n.team==="enemy"?"enemy":"ally",mesh:c,warned:!1,arm:1.2})}return n===Be&&(Le.torp(),hc("TORPEDOES AWAY","")),!0}var Zv=(n,e,t,i)=>{let s=0,r=1;for(let a=0;a<3;a++){let o=e[a]-n[a];if(Math.abs(o)<1e-9){if(n[a]<t[a]||n[a]>i[a])return-1;continue}let l=(t[a]-n[a])/o,c=(i[a]-n[a])/o;if(l>c&&([l,c]=[c,l]),s=Math.max(s,l),r=Math.min(r,c),s>r)return-1}return s};function Jv(n,e){for(let t=oi.length-1;t>=0;t--){let i=oi[t],s=n,r=!1;for(;s>0&&!r;){let a=Math.min(.01,s);s-=a;let o=Math.hypot(i.vx,i.vy,i.vz),l=i.x,c=i.y,h=i.z;i.vx+=-i.k*o*i.vx*a,i.vy+=(-i.k*o*i.vy-i.g)*a,i.vz+=-i.k*o*i.vz*a,i.x+=i.vx*a,i.y+=i.vy*a,i.z+=i.vz*a,i.t+=a;for(let u of ut){if(!u.alive&&u.sinking>6||u.team==="enemy"==(i.team==="enemy"))continue;let f=i.x-u.x,d=i.z-u.z;if(f*f+d*d>(u.C.L*.6+60)**2)continue;let p=Ua(u,l,c,h),_=Ua(u,i.x,i.y,i.z),g=u.C,m=Zv(p,_,[-g.B/2-.5,-g.D,-g.L/2],[g.B/2+.5,g.F*3.4,g.L/2]);if(m>=0){for(let v=m;v<=1;v+=.05){let S=Vn(p[0],_[0],v),M=Vn(p[1],_[1],v),w=Vn(p[2],_[2],v);if(zh(g,S,M,w)){let[T,x,E]=hn(u,S,M,w);i.x=T,i.y=x,i.z=E,Kv(i,u,S,M,w),r=!0;break}}if(r)break}}if(r)break;for(let[u,f,d,p]of _s){let _=Math.hypot(i.x-u,i.z-f);if(_<d*1.05&&i.y<p*Math.max(0,1-_/(d*.95))**1.2+2){lu(i.x,Math.max(i.y,1),i.z,i.C.cal,!0),r=!0;break}}if(r)break;if(i.y<ln(i.x,i.z,e)){Yf(i.x,i.z,i.C.cal,e),r=!0,$v(i);break}}if(!r&&i.t>100&&(r=!0),r)at.remove(i.mesh),oi.splice(t,1),i.cam&&(D.camImpact={x:i.x,y:Math.max(i.y,2),z:i.z,t:1.1},D.shellCam=null,D.slow=1);else if(i.mesh.position.set(i.x,i.y,i.z),i.mesh.lookAt(i.x+i.vx,i.y+i.vy,i.z+i.vz),Math.random()<.6&&ac.emit(i.x,i.y,i.z,0,0,0,1.4,1.2+i.C.cal/406*2,2,Ov,.18,1,0),!i.whistled&&Be&&i.team==="enemy"&&i.vy<0){let a=Math.hypot(i.x-Be.x,i.z-Be.z);a<600&&i.y<900&&(i.whistled=!0,Le.whistle(1-a/600))}}}function $v(n){n.player&&D.target&&Math.hypot(n.x-D.target.x,n.z-D.target.z)<120&&(D.straddle=(D.straddle||0)+1)}function Yf(n,e,t,i){let s=t/406,r=ln(n,e,i),a=30+s*90,o=22+s*70;for(let c=0;c<a;c++){let h=Math.random()*Math.PI*2,u=Math.random()*(2+s*6);$i.emit(n+Math.cos(h)*u,r,e+Math.sin(h)*u,Math.cos(h)*Y(1,6),Math.sqrt(2*Ia*o)*Y(.5,1.05),Math.sin(h)*Y(1,6),Y(2.5,4)+s*2,3+s*7,.9,Da,.85,.8,Ia)}for(let c=0;c<12+s*20;c++)$i.emit(n+Y(-5,5),r+Y(0,o*.6),e+Y(-5,5),Y(-4,4),Y(0,4),Y(-4,4),Y(4,7),10+s*24,1.2,Uv,.3,.7,-.3);let l=Ae.position.distanceTo(new P(n,0,e));Le.splash(t,l)}function lu(n,e,t,i,s){let r=i/406;for(let a=0;a<30+r*60;a++)Xn.emit(n,e,t,Y(-1,1)*(12+r*30),Y(0,1)*(12+r*30),Y(-1,1)*(12+r*30),Y(.3,.9),4+r*12,2.5,yr,1,.2,4);for(let a=0;a<20+r*40;a++)Ln.emit(n+Y(-3,3),e+Y(0,4),t+Y(-3,3),Y(-4,4),Y(3,10),Y(-4,4),Y(4,9),8+r*16,1,s?[.45,.4,.32]:vr,.65,.7,-.5);Le.hit(i,Ae.position.distanceTo(new P(n,e,t)))}function Kv(n,e,t,i,s){let r=e.C,a=n.C.cal/406;lu(n.x,n.y,n.z,n.C.cal,!1);let o=Y(.8,1.2),l="HIT";Math.abs(s)<r.L*.22&&i<r.F*.45&&n.C.cal>=203&&(o*=2.3,l="CITADEL"),n.C.cal>=300&&e.cls==="dd"&&(o*=.45,l="OVER-PEN");let c=n.C.dmg*o*(e===Be?.65:1);xr(e,c,n.owner,l),e.alive&&Math.random()<.1+a*.06&&e.fires.length<3&&(e.fires.push({lx:Y(-r.B*.3,r.B*.3),lz:s,t:30}),n.owner===Be&&hc("FIRE STARTED","fire"),e===Be&&Qt("FIRE ON BOARD \u2014 R for damage control"));for(let h of e.turrets)Math.abs(h.z-s)<9&&Math.random()<.18&&!h.broken&&(h.broken=22,e===Be&&Qt("TURRET KNOCKED OUT"));e.alive&&l==="CITADEL"&&Math.random()<.035&&(e.deto=!0,xr(e,e.hp+1,n.owner,"DETONATED"))}function xr(n,e,t,i){n.alive&&(n.hp-=e,t&&(t.dealt+=e,n.lastHit=t),t===Be&&n.team==="enemy"&&(D.dealt+=e,hc(i+" "+Math.round(e),i==="CITADEL"?"cit":i==="DETONATED"?"kill":""),Le.ding()),n===Be&&(ly(),D.shake=Math.min(1.5,D.shake+.3)),n.hp<=0&&Zf(n,t,i==="DETONATED"))}function Zf(n,e,t){if(n.alive=!1,n.hp=0,n.sinking=.001,n.rollTo=(Math.random()<.5?-1:1)*Y(.25,.5),n.pitchTo=Y(-.12,.12),n.tel=1,e&&e.kills++,e===Be&&(D.kills++,hc(t?"DETONATION!":"SUNK","kill")),ay(`${e?e.name:"The sea"} ${t?"detonated":"sank"} ${n.name}`,n.team==="enemy"),t){for(let s=0;s<260;s++)Xn.emit(n.x+Y(-20,20),Y(2,20),n.z+Y(-20,20),Y(-1,1)*60*1.5,Y(10,120),Y(-1,1)*60*1.5,Y(.6,2),18,3,yr,1,.25,6);for(let s=0;s<160;s++)Ln.emit(n.x+Y(-30,30),Y(5,60),n.z+Y(-30,30),Y(-10,10),Y(10,40),Y(-10,10),Y(8,16),30,1.4,vr,.7,.6,-.2);Le.boom(Ae.position.distanceTo(new P(n.x,0,n.z)))}n===Be?(D.camMode="death",setTimeout(()=>zf(!1),5500)):D.phase==="battle"&&!ut.some(i=>i.team==="enemy"&&i.alive)&&setTimeout(()=>zf(!0),3500)}function Qv(n,e){for(let t=li.length-1;t>=0;t--){let i=li[t];i.x+=Math.sin(i.h)*i.v*n,i.z+=Math.cos(i.h)*i.v*n,i.left-=i.v*n,i.arm-=n;let s=i.left<=0;i.mesh.position.set(i.x,ln(i.x,i.z,e)-.6,i.z),i.mesh.rotation.y=i.h,Math.random()<.7&&$i.emit(i.x-Math.sin(i.h)*4,ln(i.x,i.z,e)+.2,i.z-Math.cos(i.h)*4,0,.6,0,7,2.5,.8,Da,.5,.5,0);for(let r of ut){if(s||!r.alive||r.team==="enemy"==(i.team==="enemy")||i.arm>0)continue;let[a,,o]=Ua(r,i.x,0,i.z);if(Math.abs(o)<r.C.L/2&&Math.abs(a)<$l(r.C,o/r.C.L+.5)+1){s=!0;for(let l=0;l<160;l++)$i.emit(i.x+Y(-6,6),0,i.z+Y(-6,6),Y(-6,6),Y(20,55),Y(-6,6),Y(3,5),8,1,Da,.9,.8,Ia);lu(i.x,2,i.z,406,!1),xr(r,r.C.hp*.22+900,i.owner,"TORPEDO"),r.alive&&Math.random()<.5&&(r.floods.push({t:25}),r===Be&&Qt("FLOODING \u2014 R for damage control"))}}for(let[r,a,o]of _s)Math.hypot(i.x-r,i.z-a)<o*1.05&&(s=!0);!s&&Be&&Be.alive&&i.team==="enemy"&&!i.warned&&Math.hypot(i.x-Be.x,i.z-Be.z)<1800&&(i.warned=!0,D.torpWarn=3,Le.alarm()),s&&(at.remove(i.mesh),li.splice(t,1))}}function jv(n,e,t){let i=n.C,s=n.engine*(n.floods.length?.8:1);if(n.alive){let p=i.speed*Wf[n.tel]*s;n.v+=Mn(p-n.v,-i.accel*1.3*e,i.accel*e),n.rudder+=Mn(n.rudderCmd-n.rudder,-.7*e,.7*e);let _=-n.rudder*i.turn*Mn(Math.abs(n.v)/i.speed,.3,1)*Math.sign(n.v||1);n.yawRate+=(_-n.yawRate)*Math.min(1,e*.8),n.v*=1-Math.abs(n.rudder)*.03*e}else n.v*=1-.25*e,n.yawRate*=1-e,n.sinking+=e;n.h+=n.yawRate*e;let r=Wn(n);n.x+=r[0]*n.v*e,n.z+=r[1]*n.v*e;for(let[p,_,g]of _s)for(let m of[-.4,0,.4]){let v=n.x+r[0]*i.L*m,S=n.z+r[1]*i.L*m,M=v-p,w=S-_,T=Math.hypot(M,w),x=g*.95+i.B/2;T<x&&(n.x+=M/T*(x-T),n.z+=w/T*(x-T),Math.abs(n.v)>3&&n.alive&&xr(n,Math.abs(n.v)*8*e*10,null,"GROUNDED"),n.v*=.9)}let a=Math.hypot(n.x,n.z);if(a>nc&&(n.x*=nc/a,n.z*=nc/a),n.alive){for(let p of n.fires)p.t-=e,n.hp-=n.maxHp*.0016*e;for(let p of n.floods)p.t-=e,n.hp-=n.maxHp*.0024*e;n.fires=n.fires.filter(p=>p.t>0),n.floods=n.floods.filter(p=>p.t>0),n.dc>0&&(n.dc-=e),n.hp<=0&&Zf(n,n.lastHit||null,!1)}for(let p of n.turrets)p.reload>0&&(p.reload-=e),p.broken>0&&(p.broken-=e),p.recoil>0&&(p.recoil=Math.max(0,p.recoil-e*1.5));n.torpCd>0&&(n.torpCd-=e);let o=i.L*.42,l=i.B*.45,c=ln(n.x+r[0]*o,n.z+r[1]*o,t),h=ln(n.x-r[0]*o,n.z-r[1]*o,t),u=ln(n.x-r[1]*l,n.z+r[0]*l,t),f=ln(n.x+r[1]*l,n.z-r[0]*l,t),d=n.alive?0:Math.min(1,n.sinking/(n.deto?9:24));n.heave=Vn(n.heave,(c+h+u+f)/4*.8-d*(i.F+i.D)*2.2,1-Math.exp(-e*2)),n.pitch=Vn(n.pitch,Math.atan2(c-h,i.L*.84)*.9+(n.pitchTo||0)*d*(n.deto?3:1),1-Math.exp(-e*1.5)),n.roll=Vn(n.roll,Math.atan2(u-f,i.B)*.6+n.yawRate*n.v*.02+(n.rollTo||0)*d+n.floods.length*.03,1-Math.exp(-e*1.2))}function ey(){for(let n=0;n<ut.length;n++)for(let e=n+1;e<ut.length;e++){let t=ut[n],i=ut[e],s=Wn(t),r=Wn(i);if(!(Math.hypot(t.x-i.x,t.z-i.z)>(t.C.L+i.C.L)/2+10))for(let a of[-.38,-.13,.13,.38])for(let o of[-.38,-.13,.13,.38]){let l=t.x+s[0]*t.C.L*a,c=t.z+s[1]*t.C.L*a,h=i.x+r[0]*i.C.L*o,u=i.z+r[1]*i.C.L*o,f=l-h,d=c-u,p=Math.hypot(f,d),_=(t.C.B+i.C.B)/2;if(p>=_||p<.001)continue;let g=f/p,m=d/p,v=_-p,S=t.C.hp,M=i.C.hp;t.x+=g*v*M/(S+M),t.z+=m*v*M/(S+M),i.x-=g*v*S/(S+M),i.z-=m*v*S/(S+M);let w=Math.abs(t.v-i.v)+2;t.alive&&i.alive&&(!t.ramCd||t.ramCd<D.t)&&(t.ramCd=D.t+1,xr(t,w*M/600,i,"RAM"),xr(i,w*S/600,t,"RAM")),t.v*=.97,i.v*=.97}}}function ty(n){return ut.filter(e=>e.alive&&e.team==="enemy"!=(n.team==="enemy"))}function cu(n,e){let t=e.x,i=e.z,s=0,r=Wn(e);for(let a=0;a<4;a++){let o=Math.hypot(t-n.x,i-n.z);s=Oa(n.C,o).tof,t=e.x+r[0]*e.v*s,i=e.z+r[1]*e.v*s}return[t,i,s]}function ny(n,e){let t=n.ai,i=n.C;if(!n.alive)return;let s=ty(n);if(!s.length){n.rudderCmd=0;return}if(!t.tgt||!t.tgt.alive||Math.random()<e*.02){let v=1e9;for(let S of s){let M=Math.hypot(S.x-n.x,S.z-n.z)*(S===Be?1.05:1)*Y(.85,1.15);M<v&&(v=M,t.tgt=S)}t.err=1}let r=t.tgt,a=r.x-n.x,o=r.z-n.z,l=Math.hypot(a,o),c=Math.atan2(a,o),h=i.range*(i.id==="dd"?.45:.62);t.zig-=e,t.zig<=0&&(t.zig=Y(18,40),t.zo=Y(-.3,.3),Math.random()<.3&&(t.side*=-1));let u=l>h+1800?c+t.side*.35:l<h-1500?c+Math.PI-t.side*.5:c+t.side*1.25;u+=t.zo||0;let f=Wn(n);for(let[v,S,M]of _s)for(let w of[600,1200]){let T=n.x+f[0]*w,x=n.z+f[1]*w;Math.hypot(T-v,x-S)<M+i.L*.6+200&&(u=Math.atan2(n.x-v,n.z-S)+t.side*1.2)}Math.hypot(n.x,n.z)>nc-2500&&(u=Math.atan2(-n.x,-n.z)),n.rudderCmd=Mn(-Ai(u,n.h)*2.2,-1,1),n.tel=4;let[d,p]=cu(n,r);Math.abs(Ai(r.h,t.lastH))>.3&&(t.err=Math.min(1,t.err+.4));let g=t.err*l*.05,m=[d+t.ex*g,p+t.ez*g];if(Jf(n,m,e),t.fireCd-=e,l<i.range*.98&&t.fireCd<=0){let v=!1;for(let S of n.turrets)S.ready&&(Xf(n,S,m,!1),v=!0);v&&(t.fireCd=Y(.5,2.5),t.err=Math.max(.35,t.err*.72),t.lastH=r.h,t.ex=ai(),t.ez=ai())}if(t.ex===void 0&&(t.ex=ai(),t.ez=ai()),i.torp&&n.torpCd<=0&&l<5500&&l>900){let v=Wn(r),S=l/24,M=r.x+v[0]*r.v*S,w=r.z+v[1]*r.v*S,T=Math.atan2(M-n.x,w-n.z);Math.abs(Math.abs(Ai(T,n.h))-Math.PI/2)<.9&&qf(n,T)}n.fires.length>=2&&n.dc<=0&&(n.fires=[],n.floods=[],n.dc=60)}function Jf(n,e,t){let i=n.C,s=(i.id==="dd"?28:i.id==="ca"?14:7)*Math.PI/180,[r,,a]=Ua(n,e[0],0,e[1]);for(let o of n.turrets){let l=r,c=a-o.z,h=Math.atan2(l,c),u=o.face>0?0:Math.PI,f=Ai(h,u),d=Math.abs(f)<2.55,p=u+Mn(f,-2.55,2.55);o.yaw+=Mn(Ai(p,o.yaw),-s*t,s*t),o.g.rotation.y=o.yaw;let _=Math.hypot(l,c),g=Oa(i,_);o.elev=Vn(o.elev,g.elev,Math.min(1,t*3)),o.piv.rotation.x=-o.elev,o.piv.position.z=(o.piv.userData.z0??(o.piv.userData.z0=o.piv.position.z))-(o.recoil||0)*1.4,o.canBear=d,o.aligned=Math.abs(Ai(p,o.yaw))<.02,o.ready=d&&o.aligned&&o.reload<=0&&!(o.broken>0)&&n.alive}}var D={phase:"menu",t:0,battle:1,kills:0,dealt:0,score:0,shake:0,camMode:"orbit",camYaw:0,camPitch:.18,camDist:1,zoom:!1,target:null,shellCam:null,camImpact:null,slow:1,torpWarn:0,paused:!1,wins:0},Yh=n=>n===1?["dd","dd","ca"]:n===2?["ca","ca","dd","dd"]:n===3?["bb","ca","dd","dd"]:["bb","bb","ca","ca","dd"];function Ba(n){Le.init(),La();for(let i of ut.slice())oc(i);oi.forEach(i=>at.remove(i.mesh)),oi.length=0,li.forEach(i=>at.remove(i.mesh)),li.length=0,Object.assign(D,{phase:"battle",battle:n,t:0,shellCam:null,camImpact:null,slow:1,torpWarn:0,camMode:"orbit",target:null,paused:!1,shake:0}),Be=mr(Et.ship,"player",0,-5200,0),Be.v=Be.C.speed*.8,(n>=3?["bb","ca"]:["ca","dd"]).forEach((i,s)=>mr(i,"ally",(s?1:-1)*900,-5600-s*300,0));let t=1+Math.max(0,n-4)*.15;Yh(n).forEach((i,s)=>mr(i,"enemy",(s-(Yh(n).length-1)/2)*1100+Y(-200,200),5200+Y(-400,400),Math.PI+Y(-.2,.2),t)),D.camYaw=0,D.camPitch=.12,document.body.className="playing"+(_r?" touch":""),ve("menu").classList.remove("on"),ve("over").classList.remove("on"),ve("hud").classList.add("on"),ry(),tu("BATTLE "+n,`${Yh(n).length} enemy ships \xB7 ${vs[Et.ship].name}`,""),oy(),Pa=performance.now()}function zf(n){if(D.phase!=="battle")return;D.phase="over";let e=Math.round(D.dealt+D.kills*1500+(n?3e3*D.battle:0));D.score+=e,n?(D.wins++,Le.win()):Le.lose();let t=D.score>cr;if(t){cr=D.score;try{localStorage.setItem("jkn-best",cr)}catch{}}ve("ovT").textContent=n?"Victory":"Ship lost",ve("ovT").className=n?"good":"bad",ve("ovS").textContent=n?`Battle ${D.battle} won \u2014 the enemy fleet is at the bottom of the sea.`:`Battle ${D.battle} \u2014 ${Be.name} has been sunk.`,ve("ovStats").innerHTML=[["Ships sunk",D.kills],["Damage dealt",Math.round(D.dealt).toLocaleString()],["Battles won",D.wins],["Total score",D.score.toLocaleString()]].map(([i,s])=>`<div><span>${i}</span><b>${s}</b></div>`).join("")+(t?'<p class="nb">New best!</p>':`<p>Best ${cr.toLocaleString()}</p>`),ve("ovNext").style.display=n?"":"none",ve("ovRetry").textContent=n?"Change ship":"Try again",ve("over").classList.add("on"),Le.stopLoops(),document.pointerLockElement&&document.exitPointerLock()}ve("ovNext").onclick=()=>{Le.click(),Ba(D.battle+1)};ve("ovRetry").onclick=()=>{Le.click(),ve("ovRetry").textContent==="Try again"?(D.score=0,D.kills=0,D.dealt=0,D.wins=0,Ba(1)):Sr()};ve("ovMenu").onclick=()=>Sr();var ur={},sc={};var Mr=ve("gl");function lc(){if(!(_r||D.phase!=="battle"))try{let n=Mr.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}Mr.addEventListener("mousedown",n=>{if(Le.init(),!(D.phase!=="battle"||D.paused)){if(!document.pointerLockElement){lc();return}n.button===0&&hu(),n.button===2&&(D.zoom=!0)}});addEventListener("mouseup",n=>{n.button===2&&(D.zoom=!1)});Mr.addEventListener("contextmenu",n=>n.preventDefault());addEventListener("mousemove",n=>{if(!document.pointerLockElement||D.phase!=="battle")return;let e=.0024*Et.sens*(D.zoom?.22:1);D.camYaw-=n.movementX*e,D.camPitch=Mn(D.camPitch+n.movementY*e,-.04,1.25)});addEventListener("wheel",n=>{D.phase==="battle"&&(D.camDist=Mn(D.camDist*(n.deltaY>0?1.1:.9),.45,2.4))},{passive:!0});document.addEventListener("pointerlockchange",()=>{ve("clickfly").classList.toggle("on",D.phase==="battle"&&!document.pointerLockElement&&!_r&&!D.paused)});addEventListener("keydown",n=>{if(ur[n.code]=!0,Le.init(),D.phase==="cine"){n.code==="Escape"&&Sr(),(n.code==="Space"||n.code==="ArrowRight")&&(n.preventDefault(),Fa()),n.code==="KeyM"&&(ve("snd").textContent=Le.toggle()?"\u{1F50A}":"\u{1F507}");return}if(D.phase!=="battle")return;let e=Be;e&&e.alive&&((n.code==="KeyW"||n.code==="ArrowUp")&&(e.tel=Math.min(4,e.tel+1),Qt(Na[e.tel])),(n.code==="KeyS"||n.code==="ArrowDown")&&(e.tel=Math.max(0,e.tel-1),Qt(Na[e.tel])),n.code==="KeyT"&&$f(),n.code==="KeyR"&&Kf()),(n.code==="KeyF"||n.code==="KeyV")&&(D.shellCam||D.camImpact?(D.shellCam=null,D.camImpact=null):(Et.shellCam=!Et.shellCam,La(),Qt(Et.shellCam?"SHELL CAM ON":"SHELL CAM OFF"))),n.code==="Space"&&(n.preventDefault(),D.shellCam||D.camImpact?(D.shellCam=null,D.camImpact=null):iy()),n.code==="ShiftLeft"&&(D.zoom=!D.zoom),n.code==="KeyM"&&(ve("snd").textContent=Le.toggle()?"\u{1F50A}":"\u{1F507}"),(n.code==="Escape"||n.code==="KeyP")&&cc()});addEventListener("keyup",n=>{ur[n.code]=!1});document.querySelectorAll("[data-k]").forEach(n=>{let e=n.dataset.k;n.addEventListener("pointerdown",t=>{t.preventDefault(),t.stopPropagation(),Le.init(),sc[e]=!0,n.classList.add("on");let i=Be;e==="fire"&&hu(),e==="zoom"&&(D.zoom=!D.zoom),e==="torp"&&$f(),e==="dc"&&Kf(),e==="up"&&i&&(i.tel=Math.min(4,i.tel+1),Qt(Na[i.tel])),e==="down"&&i&&(i.tel=Math.max(0,i.tel-1),Qt(Na[i.tel])),e==="cam"&&(D.shellCam||D.camImpact?(D.shellCam=null,D.camImpact=null):(Et.shellCam=!Et.shellCam,La(),Qt(Et.shellCam?"SHELL CAM ON":"SHELL CAM OFF"))),e==="pause"&&cc()}),["pointerup","pointercancel","pointerleave"].forEach(t=>n.addEventListener(t,()=>{sc[e]=!1,n.classList.remove("on")}))});var ri=null;Mr.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&(ri={id:n.pointerId,x:n.clientX,y:n.clientY})});Mr.addEventListener("pointermove",n=>{if(!ri||n.pointerId!==ri.id)return;let e=.005*Et.sens*(D.zoom?.25:1);D.camYaw-=(n.clientX-ri.x)*e,D.camPitch=Mn(D.camPitch+(n.clientY-ri.y)*e,-.04,1.25),ri.x=n.clientX,ri.y=n.clientY});["pointerup","pointercancel"].forEach(n=>Mr.addEventListener(n,e=>{ri&&e.pointerId===ri.id&&(ri=null)}));function cc(n){D.phase==="battle"&&(D.paused=n!==void 0?n:!D.paused,ve("pause").classList.toggle("on",D.paused),D.paused?(Le.stopLoops(),document.pointerLockElement&&document.exitPointerLock()):lc(),Pa=performance.now())}document.addEventListener("visibilitychange",()=>{document.hidden&&cc(!0)});ve("pResume").onclick=()=>cc(!1);ve("pRestart").onclick=()=>{D.score=0,D.kills=0,D.dealt=0,Ba(D.battle)};ve("pMenu").onclick=()=>Sr();ve("clickfly").onclick=()=>lc();function hu(){let n=Be;if(!n||!n.alive||D.phase!=="battle")return;let e=[];for(let t of n.turrets)t.ready&&(e=e.concat(Xf(n,t,D.aim,!0)));if(!e.length){let t=Math.min(...n.turrets.filter(i=>!(i.broken>0)).map(i=>Math.max(0,i.reload)));Qt(n.turrets.every(i=>!i.canBear)?"GUNS CAN'T BEAR":t>0?"RELOADING "+t.toFixed(1)+"s":"TURRETS TRAVERSING");return}if(Et.shellCam&&!D.shellCam){let t=e[Math.floor(e.length/2)];t.cam=!0,D.shellCam=t,D.camImpact=null,D.straddle=0}}function $f(){let n=Be;if(!n||!n.alive||!n.C.torp)return;if(n.torpCd>0){Qt("TORPEDOES RELOADING "+Math.ceil(n.torpCd)+"s");return}let e=Math.atan2(D.aim[0]-n.x,D.aim[1]-n.z);if(Math.abs(Math.abs(Ai(e,n.h))-Math.PI/2)>1.1){Qt("TURN BROADSIDE TO FIRE TORPEDOES");return}qf(n,e)}function Kf(){let n=Be;if(!(!n||!n.alive)){if(n.dc>0){Qt("DAMAGE CONTROL READY IN "+Math.ceil(n.dc)+"s");return}if(!n.fires.length&&!n.floods.length){Qt("NO FIRES OR FLOODING");return}n.fires=[],n.floods=[],n.dc=50,Qt("DAMAGE CONTROL \u2014 FIRES OUT"),Le.ding()}}function iy(){let n=null,e=1e9;for(let t of ut){if(t.team!=="enemy"||!t.alive||(yt.set(t.x,15,t.z).project(Ae),yt.z>1))continue;let i=Math.hypot(yt.x,yt.y);i<e&&(e=i,n=t)}n&&(D.target=n,D.manual=!0,Qt("TARGET: "+n.name.toUpperCase()))}var yt=new P,Gn=new os,sy=new tn(new P(0,1,0),0),Zh=new P;function jh(n){D.t+=n;let e=D.t;if(Be&&Be.alive){let t=(ur.KeyD||ur.ArrowRight||sc.right?1:0)-(ur.KeyA||ur.ArrowLeft||sc.left?1:0);Be.rudderCmd=t}for(let t of ut)t.ai&&ny(t,n);Be&&D.aim&&Jf(Be,D.aim,n);for(let t of ut.slice())jv(t,n,e),!t.alive&&t.sinking>32&&t!==Be&&oc(t);ey(),Jv(n,e),Qv(n,e)}function Qf(){Ae.updateMatrixWorld(),Gn.origin.copy(Ae.position),Gn.direction.set(0,0,-1).applyQuaternion(Ae.quaternion);let n=null;Gn.intersectPlane(sy,Zh)&&(n=[Zh.x,Zh.z]);for(let e of ut){if(e.team!=="enemy"||!e.alive)continue;if(yt.set(e.x,10,e.z),Gn.distanceToPoint(yt)<e.C.L*.5){let i=yt.sub(Gn.origin).dot(Gn.direction);if(i>0){let s=Gn.at(i,new P);n=[s.x,s.z]}}}if(!n){let e=Gn.direction.x,t=Gn.direction.z,i=Math.hypot(e,t)||1;n=[Be.x+e/i*Be.C.range*1.05,Be.z+t/i*Be.C.range*1.05]}if(!D.manual||!D.target||!D.target.alive){D.manual=!1;let e=.35;D.target=null;for(let t of ut){if(t.team!=="enemy"||!t.alive||(yt.set(t.x,12,t.z).project(Ae),yt.z>1))continue;let i=Math.hypot(yt.x,yt.y*innerHeight/innerWidth);i<e&&(e=i,D.target=t)}}if(D.target&&D.target.alive){let[e,t]=cu(Be,D.target),i=Gn.direction.x,s=Gn.direction.z,r=Math.hypot(i,s)||1,a=Math.hypot(e-Ae.position.x,t-Ae.position.z);n=[Ae.position.x+i/r*a,Ae.position.z+s/r*a]}D.aim=n}var ec=!1,Jh=new P,kf=new P;function jf(n){let e=Be,t=55,i=D.t;if(!e&&D.phase!=="cine")return;if(D.phase==="cine")t=by(n);else if(D.phase==="menu"){D.camYaw+=n*.04;let r=e.C.L*1.5;Ae.position.set(e.x+Math.sin(D.camYaw)*r,e.C.L*.22+10,e.z+Math.cos(D.camYaw)*r),Ae.lookAt(e.x,e.C.F*2,e.z),t=40}else if(D.camMode==="death"){D.camYaw+=n*.08;let r=e.C.L*1.4;Ae.position.set(e.x+Math.sin(D.camYaw)*r,70,e.z+Math.cos(D.camYaw)*r),Ae.lookAt(e.x,0,e.z),t=50}else if(D.shellCam){let r=D.shellCam,a=Math.hypot(r.vx,r.vy,r.vz),o=r.vx/a,l=r.vy/a,c=r.vz/a,h=26+r.C.cal/406*30,u=Math.hypot(o,c)||1;Ae.position.set(r.x-o*h-c/u*4,r.y-l*h+6,r.z-c*h+o/u*4),Jh.set(r.x+o*220,r.y+l*220-10,r.z+c*220),ec||(D.camL=Jh.clone(),ec=!0),D.camL.lerp(Jh,1-Math.exp(-n*6)),Ae.lookAt(D.camL),t=46,r.mesh.scale.setScalar(3);let f=D.target;if(f){let d=Math.hypot(r.x-f.x,r.z-f.z);D.slow=d<700&&r.vy<0&&r.y<400?.35:1}else D.slow=r.vy<0&&r.y<150?.4:1}else if(D.camImpact){let r=D.camImpact;r.t-=n,D.slow=1;let a=i*.25;kf.set(r.x+Math.sin(a)*140,r.y+45,r.z+Math.cos(a)*140),Ae.position.lerp(kf,1-Math.exp(-n*3)),Ae.lookAt(r.x,r.y+8,r.z),t=48,r.t<=0&&(D.camImpact=null,ec=!1)}else{D.slow=1,ec=!1;let r=e.C.camDist*D.camDist,a=D.camYaw,o=D.camPitch,l=e.C.F*3+12+e.C.L*.22*D.camDist,c=new P(Math.sin(a)*Math.cos(o),-Math.sin(o),Math.cos(a)*Math.cos(o));D.zoom?(Ae.position.set(e.x,l+e.C.F*2+14,e.z),t=11):(Ae.position.set(e.x,l,e.z).addScaledVector(c,-r),t=55),Ae.position.y=Math.max(Ae.position.y,ln(Ae.position.x,Ae.position.z,i)+3),Ae.lookAt(Ae.position.clone().add(c))}if(D.shake>0){D.shake=Math.max(0,D.shake-n*2);let r=D.shake*.9;Ae.position.x+=(Math.random()-.5)*r,Ae.position.y+=(Math.random()-.5)*r}Ae.fov=D.zoom&&!D.shellCam?t:Mn(Vn(Ae.fov,t,1-Math.exp(-n*6)),8,90),D.phase==="menu"&&innerWidth>760?Ae.setViewOffset(innerWidth,innerHeight,-innerWidth*.17,0,innerWidth,innerHeight):Ae.clearViewOffset(),Ae.updateProjectionMatrix(),ru.position.set(Ae.position.x,0,Ae.position.z),Gf.position.copy(Ae.position);let s=D.phase==="cine"||!e?new P(Ae.position.x,0,Ae.position.z):D.shellCam?new P(D.shellCam.x,0,D.shellCam.z):new P(e.x,0,e.z);ci.position.copy(s).addScaledVector(Vf,1500),ci.target.position.copy(s);for(let r of[$i,Ln,Xn,ac])r.mat.uniforms.scale.value=un.domElement.height/(2*Math.tan(Ae.fov*Math.PI/360))}function ep(n,e){ru.userData.uni.uT.value=e;for(let t of ut){let i=t.mesh,s=i.userData;i.position.set(t.x,t.heave,t.z),i.rotation.set(0,t.h,0),t.broken||s.body.rotation.set(-t.pitch,0,t.roll),Vv(t,n,e);let r=Wn(t),a=t.C;if(t.v>6&&Math.random()<t.v/30){let[o,,l]=hn(t,Y(-1,1)*2,0,a.L*.48);$i.emit(o,ln(o,l,e)+1,l,r[1]*Y(-3,3)+r[0]*t.v*.5,Y(2,5),-r[0]*Y(-3,3)+r[1]*t.v*.5,1.6,3+a.B*.2,1.2,Da,.5,.7,Ia)}if(t.smokeT-=n,t.smokeT<=0&&t.alive){t.smokeT=.12;for(let[o,l,c]of s.funnels){let[h,u,f]=hn(t,o,l+2,c);Ln.emit(h,u,f,-r[0]*t.v*.3+2,Y(2,4),-r[1]*t.v*.3+1,Y(6,10),3+a.B*.2,1.6,[.22,.22,.24],.35,.8,-.4)}}for(let o of t.fires.concat(t.alive?[]:[{lx:0,lz:0},{lx:3,lz:a.L*.2},{lx:-3,lz:-a.L*.2}]))if(Math.random()<.6){let[l,c,h]=hn(t,o.lx,a.F+1,o.lz);Xn.emit(l+Y(-2,2),c,h+Y(-2,2),Y(-1,1),Y(3,7),Y(-1,1),Y(.5,1),4+a.B*.15,1.2,yr,.9,.7,-2),Ln.emit(l,c+3,h,Y(-1,1)+2,Y(4,8),Y(-1,1)+1,Y(7,12),6+a.B*.2,1.6,vr,.5,.85,-.5)}}for(let t of li)t.mesh.visible=!0}var eu=new Map;function ry(){let n=ve("tags");n.innerHTML="",eu.clear();for(let e of ut){if(e===Be)continue;let t=document.createElement("div");t.className="tag "+(e.team==="enemy"?"en":"al"),t.innerHTML=`<b>${e.name}</b><span>${e.C.name}</span><i><u></u></i><em></em>`,n.appendChild(t),eu.set(e,{d:t,u:t.querySelector("u"),em:t.querySelector("em")})}}function Qt(n){let e=ve("toast");e.textContent=n,e.classList.remove("on"),e.offsetWidth,e.classList.add("on")}function hc(n,e){let t=ve("ribbons"),i=document.createElement("div");for(i.className="rb "+(e||""),i.textContent=n,t.prepend(i);t.children.length>4;)t.lastChild.remove();setTimeout(()=>i.remove(),2600)}function tu(n,e,t){ve("bigT").textContent=n,ve("bigS").textContent=e;let i=ve("big");i.className="on "+(t||""),clearTimeout(tu.tm),tu.tm=setTimeout(()=>i.className="",3200)}function ay(n,e){let t=ve("feed"),i=document.createElement("div");for(i.className=e?"g":"b",i.textContent=n,t.prepend(i);t.children.length>5;)t.lastChild.remove();setTimeout(()=>i.remove(),9e3)}function oy(){ve("feed").innerHTML=""}function ly(){let n=ve("hitfx");n.classList.remove("on"),n.offsetWidth,n.classList.add("on")}var nu={};function yn(n,e){nu[n]!==e&&(nu[n]=e,ve(n).textContent=e)}var cy=ve("radar").getContext("2d");function hy(n){let e=Be;if(!e||D.phase==="menu")return;let t=innerWidth,i=innerHeight,s=e.C,r=Math.hypot(D.aim[0]-e.x,D.aim[1]-e.z),a=Oa(s,r);yn("rng",(r/1e3).toFixed(2)+" km"),yn("tof",a.ok?a.tof.toFixed(1)+" s":"OUT OF RANGE"),ve("xh").classList.toggle("out",!a.ok);let o=D.target,l=ve("lead"),c=ve("tbox");if(o&&o.alive&&!D.shellCam&&!D.camImpact){let[m,v,S]=cu(e,o);yt.set(m,6,v).project(Ae);let M=yt.z<1;l.style.display=M?"block":"none",M&&(l.style.transform=`translate(${(yt.x*.5+.5)*t}px,${(-yt.y*.5+.5)*i}px)`),ve("tinfo").style.display="block",yn("tName",o.name),yn("tCls",o.C.name+" \xB7 "+(Math.hypot(o.x-e.x,o.z-e.z)/1e3).toFixed(1)+" km"),ve("tHp").style.width=o.hp/o.maxHp*100+"%",yt.set(o.x,o.C.F*2,o.z).project(Ae),c.style.display=yt.z<1?"block":"none",c.style.transform=`translate(${(yt.x*.5+.5)*t}px,${(-yt.y*.5+.5)*i}px)`}else l.style.display="none",c.style.display="none",ve("tinfo").style.display=D.shellCam?"none":o?"block":"none";ve("xh").style.display=D.shellCam||D.camImpact||D.camMode==="death"?"none":"block",ve("scam").style.display=D.shellCam||D.camImpact?"block":"none",D.shellCam&&yn("scamT","SHELL CAM \xB7 "+D.shellCam.t.toFixed(1)+" s \xB7 "+Math.round(Math.hypot(D.shellCam.vx,D.shellCam.vy,D.shellCam.vz))+" m/s"),ve("hpBar").style.width=e.hp/e.maxHp*100+"%",yn("hpT",Math.max(0,Math.round(e.hp)).toLocaleString()+" / "+Math.round(e.maxHp).toLocaleString()),yn("spd",Math.round(Math.abs(e.v)*Nv)+" kn"),yn("tel",Na[e.tel]),ve("rud").style.left=50+e.rudder*45+"%",yn("fires",e.fires.length?"\u{1F525} "+e.fires.length:""),yn("flood",e.floods.length?"\u{1F4A7} "+e.floods.length:""),ve("dcB").style.setProperty("--p",e.dc>0?1-e.dc/50:1),ve("dcB").classList.toggle("ready",e.dc<=0&&e.fires.length+e.floods.length>0);let h=ve("turrets");h.children.length!==e.turrets.length&&(h.innerHTML=e.turrets.map(()=>"<i></i>").join("")),e.turrets.forEach((m,v)=>{let S=h.children[v];S.className=m.broken>0?"x":m.canBear?m.ready?"r":"l":"n",S.style.setProperty("--p",m.reload>0?1-m.reload/s.reload:1)}),ve("torpB").style.display=s.torp?"":"none",ve("torpB").style.setProperty("--p",e.torpCd>0?1-e.torpCd/(s.id==="dd"?28:40):1),ve("torpB").classList.toggle("ready",e.torpCd<=0);let u=ut.filter(m=>m.team==="enemy"),f=ut.filter(m=>m.team!=="enemy");yn("bInfoT",`BATTLE ${D.battle} \xB7 ENEMIES ${u.filter(m=>m.alive).length} \xB7 ALLIES ${f.filter(m=>m.alive).length}`),yn("score",(D.score+Math.round(D.dealt+D.kills*1500)).toLocaleString()),D.torpWarn>0&&(D.torpWarn-=n),ve("torpW").classList.toggle("on",D.torpWarn>0);for(let[m,v]of eu){if(!ut.includes(m)||!m.alive||D.shellCam){v.d.style.display="none";continue}if(yt.set(m.x,m.C.F*3+30,m.z).project(Ae),yt.z>1){v.d.style.display="none";continue}let S=Math.hypot(m.x-e.x,m.z-e.z);v.d.style.display="block",v.d.style.transform=`translate(${(yt.x*.5+.5)*t}px,${(-yt.y*.5+.5)*i}px)`,v.u.style.width=m.hp/m.maxHp*100+"%",v.em.textContent=(S/1e3).toFixed(1)+" km",v.d.classList.toggle("tg",m===D.target)}let d=cy,p=100,_=p/14e3;d.clearRect(0,0,200,200),d.save(),d.translate(100,100),d.fillStyle="rgba(10,30,40,.75)",d.beginPath(),d.arc(0,0,p,0,7),d.fill(),d.strokeStyle="rgba(160,220,255,.18)",[.33,.66,1].forEach(m=>{d.beginPath(),d.arc(0,0,p*m,0,7),d.stroke()}),d.rotate(Math.PI-D.camYaw),d.strokeStyle="rgba(255,255,255,.25)",d.beginPath(),d.arc(0,0,s.range*_,0,7),d.stroke();let g=(m,v)=>[-(m-e.x)*_,(v-e.z)*_];d.fillStyle="rgba(190,170,120,.8)";for(let[m,v,S]of _s){let[M,w]=g(m,v);d.beginPath(),d.arc(M,w,Math.max(2,S*_),0,7),d.fill()}for(let m of ut){if(!m.alive)continue;let[v,S]=g(m.x,m.z);d.save(),d.translate(v,S),d.rotate(m.h),d.fillStyle=m===e?"#ffb547":m.team==="enemy"?"#ff4d4d":"#5fb3ff",d.beginPath(),d.moveTo(0,5),d.lineTo(3.5,-4),d.lineTo(-3.5,-4),d.closePath(),d.fill(),d.restore()}d.fillStyle="rgba(255,255,255,.7)";for(let m of oi){let[v,S]=g(m.x,m.z);d.fillRect(v-.8,S-.8,1.6,1.6)}d.restore(),d.strokeStyle="rgba(255,255,255,.5)",d.beginPath(),d.moveTo(100,100),d.lineTo(70,30),d.moveTo(100,100),d.lineTo(130,30),d.stroke()}var j={ships:{},jets:[],missiles:[],parked:[],shots:[],shotI:-1,shotT:0,hold:0,ciws:null,flash:null},iu=new P(0,1,0),su=new P,dr=new rt,Ki=new P,cn=new P,_b=new an,uy=new Kn({map:Aa(),color:new Ne(5,3,1.4),blending:gn,depthWrite:!1,transparent:!0,toneMapped:!1}),dy=(()=>{let n=[new Mi(.22,.22,5.2,10).rotateX(Math.PI/2),new zi(.22,.9,10).rotateX(-Math.PI/2).translate(0,0,-3.05)];for(let e=0;e<4;e++){let t=e*Math.PI/2;n.push(new Wt(.04,.7,.6).translate(0,.45,2.2).rotateZ(t))}return fy(n)})();function fy(n){let e=n.map(r=>{let a=r.index?r.toNonIndexed():r;for(let o of Object.keys(a.attributes))o!=="position"&&o!=="normal"&&a.deleteAttribute(o);return a}),t=[],i=[];e.forEach(r=>{t.push(...r.attributes.position.array),i.push(...r.attributes.normal.array)});let s=new et;return s.setAttribute("position",new Ie(t,3)),s.setAttribute("normal",new Ie(i,3)),s}var py=new vt({color:"#e8e8e4",roughness:.45,metalness:.3}),ys=new na("#ffb070",0,3e3,1.2);at.add(ys);function tp(){for(let n of ut.slice())oc(n);for(let n of j.jets)at.remove(n.mesh);for(let n of j.missiles)at.remove(n.mesh);for(let n of j.parked)at.remove(n.mesh);j.jets=[],j.missiles=[],j.parked=[],ys.intensity=0}function my(){Le.init(),D.phase="cine",D.paused=!1,un.localClippingEnabled=!0,document.body.className="cine"+(_r?" touch":""),ve("menu").classList.remove("on"),ve("hud").classList.remove("on"),np()}function np(){tp(),Be=null,D.t=0;let n=(t,i,s,r,a,o,l=3)=>{let c=mr(t,i,s,r,a);return c.ai=null,c.tel=l,c.name=o,c.v=c.C.speed*Wf[l],c},e=j.ships={cv:n("cv","ally",0,-2600,0,"USS Koppanalil (CVN-77)"),d1:n("ddg","ally",-700,-1900,0,"USS Resolute (DDG-118)"),d2:n("ddg","ally",760,-2050,0,"USS Valiant (DDG-121)"),f1:n("ffg","enemy",-500,1900,Math.PI,"Corvette Hydra"),f2:n("ffg","enemy",650,2300,Math.PI,"Frigate Basilisk"),e3:n("ddg","enemy",40,3100,Math.PI,"Destroyer Leviathan")};for(let t=0;t<6;t++){let i=qh(t%3?"viper":"raptor","gray");at.add(i),j.parked.push({mesh:i,lx:10+t%2*13,lz:-40-Math.floor(t/2)*24,rot:Math.PI*.75})}j.shotI=-1,Fa()}function Hf(n,e,t,i="viper"){let s=qh(i,"gray");at.add(s);let r={mesh:s,pos:new P,vel:new P,lx:n,lz:e,delay:t,phase:"deck",dv:0,goal:null,speed:230,bank:0,lastH:0};return j.jets.push(r),r}function gy(n,e){let t=j.ships.cv,i=Wn(t);if(n.phase==="deck"){n.delay>0?n.delay-=e:(n.dv+=19*e,n.lz+=n.dv*e,Math.random()<.9&&Xn.emit(n.pos.x-i[0]*9,n.pos.y+.4,n.pos.z-i[1]*9,-i[0]*30,1,-i[1]*30,.25,3,1,yr,.8,.2),n.dv>0&&!n.sound&&(n.sound=1,Le.jet(Ae.position.distanceTo(n.pos))));let[d,p,_]=hn(t,n.lx,t.C.deckY+1.9,n.lz);n.pos.set(d,p,_),n.vel.set(i[0]*(n.dv+t.v),0,i[1]*(n.dv+t.v)),n.lz>t.C.L*.52&&(n.phase="fly",n.vel.y=6),dr.lookAt(su,Ki.set(i[0],0,i[1]),iu),n.mesh.quaternion.setFromRotationMatrix(dr),n.mesh.position.copy(n.pos);return}let s=n.goal?n.goal():cn.copy(n.pos).addScaledVector(n.vel,3),r=Ki.copy(s).sub(n.pos);n.pos.y<40&&(r.y=Math.max(r.y,r.length()*.2)),r.normalize();let a=n.vel.length(),o=n.vel.clone().normalize(),l=o.angleTo(r),c=Math.min(1,.75*e/Math.max(l,1e-4));o.lerp(r,c).normalize();let h=a+Mn(n.speed-a,-25*e,22*e);n.vel.copy(o).multiplyScalar(h),n.pos.addScaledVector(n.vel,e);let u=Math.atan2(o.x,o.z),f=Ai(u,n.lastH)/Math.max(e,.001);n.lastH=u,n.bank=Vn(n.bank,Mn(f*1.8,-1.2,1.2),1-Math.exp(-e*3)),dr.lookAt(su,o,iu),n.mesh.quaternion.setFromRotationMatrix(dr),n.mesh.rotateZ(n.bank),n.mesh.position.copy(n.pos),Math.random()<.7&&ac.emit(n.pos.x-o.x*9,n.pos.y-o.y*9,n.pos.z-o.z*9,0,0,0,1.2,1.2,2.5,[.85,.85,.87],.14,1,0)}function Ra(n,e,t){let i=new nt(dy,py);at.add(i);let s=new Fi(uy);s.scale.setScalar(2.2),i.add(s),s.position.z=3.4,i.scale.setScalar(1.5);let r=n.pos?n.pos.clone().add(new P(0,-2,0)):new P(...hn(n,0,n.C.F+1,n.C.L*.27)),a=n.vel?n.vel.clone():new P(0,40,0),o={mesh:i,pos:r,vel:a,speed:a.length(),target:e,vertical:t,t:0,dead:!1,from:n,intercept:0};j.missiles.push(o);for(let l=0;l<(t?60:16);l++)Ln.emit(r.x+Y(-3,3),r.y+Y(0,4),r.z+Y(-3,3),Y(-4,4),Y(2,12),Y(-4,4),Y(3,6),8,1.6,[.85,.84,.82],.55,.7,-.3);return Le.launch(Ae.position.distanceTo(r)),o}function xy(n,e,t){if(n.dead)return;n.t+=e;let i=n.target,s=cn.set(i.x,i.C.F+3+i.heave,i.z),r=Math.hypot(s.x-n.pos.x,s.z-n.pos.z),a=r>1500?24:r>650?170:s.y,o;if(n.vertical&&n.t<1.1)o=Ki.set(0,1,0);else{let p=Math.min(r,r>650?600:r);o=Ki.set((s.x-n.pos.x)/Math.max(r,1)*p,a-n.pos.y,(s.z-n.pos.z)/Math.max(r,1)*p).normalize()}let l=n.vel.clone().normalize(),c=n.vertical&&n.t<2?1.8:r<650?3.2:1.3,h=l.angleTo(o);if(l.lerp(o,Math.min(1,c*e/Math.max(h,1e-4))).normalize(),n.speed=Math.min(330,n.speed+160*e),n.vel.copy(l).multiplyScalar(n.speed),n.pos.addScaledVector(n.vel,e),dr.lookAt(su,l,iu),n.mesh.quaternion.setFromRotationMatrix(dr),n.mesh.position.copy(n.pos),Ln.emit(n.pos.x-l.x*4,n.pos.y-l.y*4,n.pos.z-l.z*4,Y(-1,1),Y(0,1.5),Y(-1,1),Y(2.5,4),2.2,2.4,[.86,.86,.85],.5,.9,-.2),n.intercept&&n.from&&Math.hypot(n.pos.x-n.intercept.x,n.pos.z-n.intercept.z)<n.intercept.r){n.dead=!0,_y(n.pos);return}let[u,f,d]=Ua(i,n.pos.x,n.pos.y,n.pos.z);if(zh(i.C,u,f,d)||r<i.C.B&&n.pos.y<i.C.F*2.5){n.dead=!0,vy(n);return}n.pos.y<ln(n.pos.x,n.pos.z,t)&&(n.dead=!0,Yf(n.pos.x,n.pos.z,406,t))}function _y(n){for(let e=0;e<90;e++)Xn.emit(n.x,n.y,n.z,Y(-1,1)*40,Y(-1,1)*40,Y(-1,1)*40,Y(.3,.8),7,2.5,yr,1,.2,3);for(let e=0;e<50;e++)Ln.emit(n.x+Y(-4,4),n.y+Y(-4,4),n.z+Y(-4,4),Y(-6,6),Y(-3,5),Y(-6,6),Y(5,9),12,1.4,vr,.55,.7,-.2);ys.position.copy(n),ys.intensity=4e5,Le.hit(406,Ae.position.distanceTo(n)),D.shake=Math.min(1.5,D.shake+.6)}function vy(n){let e=n.target,t=n.pos;for(let i=0;i<200;i++)Xn.emit(t.x+Y(-6,6),t.y+Y(0,6),t.z+Y(-6,6),Y(-1,1)*70,Y(-.2,1)*90,Y(-1,1)*70,Y(.5,1.6),Y(8,18),2.2,Math.random()<.2?ou:[1,.42,.1],.55,.25,5);for(let i=0;i<220;i++)Ln.emit(t.x+Y(-20,20),t.y+Y(0,40),t.z+Y(-20,20),Y(-12,12),Y(8,45),Y(-12,12),Y(9,18),Y(18,34),1.3,vr,.7,.65,-.25);for(let i=0;i<160;i++){let s=Math.random()*Math.PI*2;$i.emit(t.x+Math.cos(s)*20,0,t.z+Math.sin(s)*20,Math.cos(s)*Y(20,60),Y(10,40),Math.sin(s)*Y(20,60),Y(2,4),10,1,Da,.8,.6,Ia)}ys.position.copy(t).setY(t.y+20),ys.intensity=6e5,Le.boom(Ae.position.distanceTo(t)),D.shake=1.6,yy(e)}function yy(n){if(n.broken)return;n.alive=!1,n.sinking=.001,n.deto=!1,n.v*=.3;let e=n.mesh.userData.body,t=e.clone(!0);n.mesh.add(t);let i=new tn,s=new tn;e.traverse(r=>{r.isMesh&&[].concat(r.material).forEach(a=>{a.clippingPlanes=[i],a.clipShadows=!0})}),t.traverse(r=>{r.isMesh&&(r.material=Array.isArray(r.material)?r.material.map(a=>{let o=a.clone();return o.clippingPlanes=[s],o}):Object.assign(r.material.clone(),{clippingPlanes:[s]}))}),n.broken={t:0,A:e,B:t,pA:i,pB:s}}function My(n,e){let t=n.broken;t.t+=e;let i=Math.min(.42,t.t*.05),s=Math.min(7,t.t*1.4);t.A.rotation.set(-i,0,n.roll*.5),t.A.position.set(0,0,s),t.B.rotation.set(i*.8,0,-n.roll*.4),t.B.position.set(0,0,-s),n.mesh.updateMatrixWorld(!0);for(let[r,a,o]of[[t.A,t.pA,1],[t.B,t.pB,-1]])Ki.set(0,0,o).transformDirection(r.matrixWorld),cn.setFromMatrixPosition(r.matrixWorld),a.setFromNormalAndCoplanarPoint(Ki,cn);if(Math.random()<.8){let[r,a,o]=hn(n,Y(-4,4),n.C.F,Y(-8,8));Xn.emit(r,a+2,o,Y(-2,2),Y(5,12),Y(-2,2),Y(.6,1.2),9,1.3,yr,.9,.7,-2),Ln.emit(r,a+8,o,Y(-2,2)+3,Y(6,12),Y(-2,2),Y(10,16),14,1.5,vr,.55,.85,-.4)}}function Sy(n,e,t){if(!e||e.dead)return;let[i,s,r]=hn(n,0,n.C.F+11,n.C.L*.16);for(let a=0;a<3;a++){let o=Ki.set(e.pos.x-i+Y(-8,8),e.pos.y-s+Y(-8,8),e.pos.z-r+Y(-8,8)).normalize();Xn.emit(i,s,r,o.x*1100,o.y*1100,o.z*1100,.7,1.4,0,ou,1,1,0)}j.ciwsT=(j.ciwsT||0)-t,j.ciwsT<=0&&(j.ciwsT=.35,Le.ciws(Ae.position.distanceTo(cn.set(i,s,r))))}var si={pos:new P,look:new P,init:!1};function fr(n,e,t,i,s,r,a,o=3,l=4){si.init||(si.pos.set(n,e,t),si.look.set(i,s,r),si.init=!0),si.pos.lerp(Ki.set(n,e,t),o>=99?1:1-Math.exp(-a*o)),si.look.lerp(cn.set(i,s,r),l>=99?1:1-Math.exp(-a*l)),Ae.position.copy(si.pos),Ae.position.y=Math.max(Ae.position.y,ln(Ae.position.x,Ae.position.z,D.t)+2.5),Ae.lookAt(si.look)}function Ca(n,e,t,i,s){let r=j.shotT*i+(j.orbitA||0);fr(n.x+Math.sin(r)*e,t,n.z+Math.cos(r)*e,n.x,n.C.F*2,n.z,s,2.5,4)}function ic(n,e,t,i,s=99){let r=n.vel.clone().normalize();fr(n.pos.x-r.x*e+r.z*e*.15,n.pos.y-r.y*e+t,n.pos.z-r.z*e-r.x*e*.15,n.pos.x+r.x*80,n.pos.y+r.y*80,n.pos.z+r.z*80,i,s,6)}var $h=(n,e,t)=>({title:e,sub:t,start(){j.mf=null},until:()=>j[n]&&j[n].dead,hold:2.6,cam(i){let s=j[n];if(s)if(s.dead){D.slow=j.hold>1.6?.35:1;let r=s.target;Ae.lookAt(si.look.lerp(cn.set(r.x,r.C.F*2,r.z),.05))}else{ic(s,16,3.5,i);let r=Math.hypot(s.pos.x-s.target.x,s.pos.z-s.target.z);D.slow=r<380?.3:1,yn("cineS",t+" \xB7 "+(r/1e3).toFixed(1)+" km")}}});j.shots=[{title:"IRON SEAS",sub:"Present day \xB7 a carrier strike group on patrol",dur:9,start(){j.orbitA=2.2},cam(n){Ca(j.ships.cv,640,170,.07,n)}},{title:"FLIGHT OPS",sub:"Strike fighters launching from USS Koppanalil",start(){let n=j.ships.cv;j.j1=Hf(-8,-110,.6),j.j2=Hf(8,-140,3.2,"raptor");let e=(t,i)=>()=>{let s=Wn(n);return cn.set(n.x+s[0]*t,i,n.z+s[1]*t)};j.j1.goal=e(2600,260),j.j2.goal=()=>{let t=D.t*.12;return cn.set(n.x+Math.sin(t)*1500,520,n.z+1600+Math.cos(t)*1500)}},until:()=>j.j1&&j.j1.phase==="fly"&&j.shotT>6.2,hold:1.4,cam(n){let e=j.ships.cv,t=j.j1,[i,s,r]=hn(e,-30,e.C.deckY+5,95);fr(i,s,r,t.pos.x,t.pos.y+1,t.pos.z,n,99,7)}},{title:"WEAPONS FREE",sub:"Viper 1 inbound on Corvette Hydra",dur:7,start(){let n=j.ships.f1;j.j1.goal=()=>cn.set(n.x,140,n.z),j.j1.speed=260},end(){j.m1=Ra(j.j1,j.ships.f1,!1);let n=j.ships.cv;j.j1.goal=()=>cn.set(n.x-1200,400,n.z)},cam(n){ic(j.j1,30,7,n,6)}},$h("m1","MISSILE AWAY","Anti-ship missile, sea-skimming"),{title:"DIRECT HIT",sub:"Corvette Hydra breaks in two",dur:7,start(){j.orbitA=0},cam(n){Ca(j.ships.f1,300,70,.09,n)}},{title:"VERTICAL LAUNCH",sub:"USS Resolute fires on Frigate Basilisk",start(){j.m2=null},until:()=>j.m2&&j.m2.t>3,cam(n){let e=j.ships.d1;!j.m2&&j.shotT>1.4&&(j.m2=Ra(e,j.ships.f2,!0));let[t,i,s]=hn(e,70,e.C.F+22,e.C.L*.05),[r,a,o]=hn(e,0,e.C.F+10,e.C.L*.27);j.m2?fr(t,i,s,j.m2.pos.x,j.m2.pos.y,j.m2.pos.z,n,99,5):fr(t,i,s,r,a,o,n,99,99)}},$h("m2","TRACKING","Missile on Frigate Basilisk"),{title:"TARGET DESTROYED",sub:"Frigate Basilisk is going down",dur:6,start(){j.orbitA=1.5},cam(n){Ca(j.ships.f2,280,60,-.1,n)}},{title:"INCOMING",sub:"Destroyer Leviathan returns fire",dur:5.5,start(){let n=j.ships.e3,e=j.ships.d2,t=i=>({get x(){return e.x},get z(){return e.z},r:i});j.e1=Ra(n,e,!0),j.e1.intercept=t(950),j.e2=null,j.icpt=t},cam(n){let e=j.ships.e3,t=j.ships.d2;!j.e2&&j.shotT>.9&&(j.e2=Ra(e,t,!0),j.e2.intercept=j.icpt(560)),j.e1&&!j.e1.dead&&ic(j.e1,18,4,n)}},{title:"CIWS ENGAGING",sub:"USS Valiant defends the fleet",start(){},until:()=>(!j.e1||j.e1.dead)&&(!j.e2||j.e2.dead),hold:2.2,cam(n){let e=j.ships.d2,t=[j.e1,j.e2].find(a=>a&&!a.dead)||j.e1,[i,s,r]=hn(e,-12,e.C.F+18,-10);t&&(fr(i,s,r,t.pos.x,t.pos.y,t.pos.z,n,99,3),!t.dead&&Math.hypot(t.pos.x-e.x,t.pos.z-e.z)<2200&&Sy(e,t,n))}},{title:"FINAL STRIKE",sub:"Raptor 2 on Destroyer Leviathan",dur:7,start(){let n=j.ships.e3;j.j2.goal=()=>cn.set(n.x,160,n.z),j.j2.speed=280},end(){j.m3=Ra(j.j2,j.ships.e3,!1);let n=j.ships.cv;j.j2.goal=()=>cn.set(n.x+1200,450,n.z-500)},cam(n){ic(j.j2,32,8,n,6)}},$h("m3","IMPACT IMMINENT","Missile on Destroyer Leviathan"),{title:"ENEMY FLEET DESTROYED",sub:"Destroyer Leviathan is sinking",dur:7,start(){j.orbitA=.6},cam(n){Ca(j.ships.e3,340,85,.08,n)}},{title:"THE SEA IS OURS",sub:"Iron Seas \xB7 cinematic mode",dur:9,start(){let n=j.ships.cv;j.jets.forEach((e,t)=>{e.speed=210,e.goal=()=>{let i=D.t*.25+t*.6;return cn.set(n.x+Math.sin(i)*700,220+t*30,n.z+Math.cos(i)*700)}}),j.orbitA=4},cam(n){Ca(j.ships.cv,900,120,.05,n)}}];function Fa(){let n=j.shots[j.shotI];if(n&&n.end&&n.end(),j.shotI++,D.slow=1,j.shotI>=j.shots.length){np();return}let e=j.shots[j.shotI];j.shotT=0,j.hold=0,si.init=!1,nu.cineS=null,e.start&&e.start(),ve("cineT").textContent=e.title,ve("cineS").textContent=e.sub;let t=ve("lower");t.classList.remove("on"),t.offsetWidth,t.classList.add("on")}function ip(n){let e=D.t;for(let s of j.jets)gy(s,n);for(let s of j.missiles)xy(s,n,e),s.dead&&s.mesh.parent&&at.remove(s.mesh);let t=j.ships.cv;for(let s of j.parked){let[r,a,o]=hn(t,s.lx,t.C.deckY+1.9,s.lz);s.mesh.position.set(r,a,o),s.mesh.rotation.set(0,t.h+s.rot,0)}for(let s of ut)s.broken&&My(s,n);ys.intensity*=Math.exp(-n*6);let i=j.shots[j.shotI];i&&(j.shotT+=n,i.dur&&j.shotT>i.dur?Fa():i.until&&i.until()&&(j.hold+=n/Math.max(D.slow,.3),j.hold>(i.hold||0)&&Fa()))}function by(n){let e=j.shots[j.shotI];return e&&e.cam(n),50}function rc(){ve("mShips").innerHTML=Object.values(vs).filter(e=>!e.modern).map(e=>`<button class="scard${Et.ship===e.id?" on":""}" data-id="${e.id}"><b>${e.name}</b><p>${e.desc}</p><div class="st"><span>SPEED <i style="--v:${e.speed/20}"></i></span><span>GUNS <i style="--v:${e.cal/406}"></i></span><span>HULL <i style="--v:${e.hp/12500}"></i></span><span>RANGE <i style="--v:${e.range/17500}"></i></span></div></button>`).join(""),document.querySelectorAll(".scard").forEach(e=>e.onclick=()=>{Le.init(),Le.click(),Et.ship=e.dataset.id,La(),rc(),uu()});let n=(e,t,i,s)=>{let r=ve(e);r.innerHTML="",t.forEach(([a,o])=>{let l=document.createElement("button");l.className="chip"+(Et[i]===a?" on":""),l.textContent=o,l.onclick=()=>{Le.click(),Et[i]=a,La(),rc(),s&&s()},r.appendChild(l)})};n("mCam",[[!0,"Follow shells"],[!1,"Stay on ship"]],"shellCam"),n("mSens",[[.6,"Low"],[1,"Medium"],[1.6,"High"]],"sens"),n("mQual",[["auto","Auto"],["high","High"],["medium","Medium"],["low","Low"]],"quality",()=>location.reload()),ve("best").textContent=cr.toLocaleString()}function uu(){for(let n of ut.slice())oc(n);Be=mr(Et.ship,"player",0,0,.6),Be.tel=3,mr("dd","ally",-600,-900,.6).tel=3}function Sr(){tp(),document.body.classList.remove("cine"),D.phase="menu",D.paused=!1,Le.stopLoops(),oi.forEach(n=>at.remove(n.mesh)),oi.length=0,li.forEach(n=>at.remove(n.mesh)),li.length=0,D.score=0,D.kills=0,D.dealt=0,D.wins=0,D.shellCam=null,D.camImpact=null,document.body.className=_r?"touch":"",ve("hud").classList.remove("on"),ve("over").classList.remove("on"),ve("pause").classList.remove("on"),ve("menu").classList.add("on"),ve("clickfly").classList.remove("on"),uu(),rc(),document.pointerLockElement&&document.exitPointerLock()}ve("cineGo").onclick=()=>{Le.click(),my()};ve("cineX").onclick=()=>Sr();ve("cineN").onclick=()=>Fa();ve("go").onclick=()=>{Le.init(),Le.click(),D.score=0,D.kills=0,D.dealt=0,D.wins=0,Ba(1),lc()};ve("snd").onclick=()=>{Le.init(),ve("snd").textContent=Le.toggle()?"\u{1F50A}":"\u{1F507}"};ve("snd").textContent=Le.on?"\u{1F50A}":"\u{1F507}";var Pa=performance.now(),tc=0,Kh=0;function sp(n){requestAnimationFrame(sp);let e=Mn((n-Pa)/1e3,0,.05);Pa=Math.max(Pa,n);let t=e*D.slow;if(!D.paused){if(D.phase==="battle"||D.phase==="over"||D.phase==="menu"||D.phase==="cine"){D.phase==="cine"&&ip(t);let i=t;for(;i>0;){let s=Math.min(.016666666666666666,i);jh(s),i-=s}}ep(t,D.t);for(let i of[$i,Ln,Xn,ac])i.update(t)}if(jf(e),D.phase==="battle"&&Be&&(Qf(),hy(e)),Be&&!D.paused&&Le.ambient(Math.abs(Be.v),D.phase==="battle"),wi&&!window.__direct?wi.render():un.render(at,Ae),tc+=e,Kh++,tc>2){let i=Kh/tc;tc=0,Kh=0;let s=ii;i<40&&ii>.6?ii=Math.max(.6,ii-.1):i>57&&ii<1&&(ii=Math.min(1,ii+.05)),s!==ii&&au()}}uu();rc();un.compile(at,Ae);ve("menu").classList.add("on");ve("loading").classList.remove("on");requestAnimationFrame(sp);window.__nv={cineStep(n){let e=n*D.slow;jh(e),ip(e),ep(e,D.t),jf(n)},S:Et,R:D,get ships(){return ut},get player(){return Be},shells:oi,torps:li,step:jh,startBattle:Ba,toMenu:Sr,cam:Ae,renderer:un,playerFire:hu,computeAim:Qf,solve:Oa,BAL:pr};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
