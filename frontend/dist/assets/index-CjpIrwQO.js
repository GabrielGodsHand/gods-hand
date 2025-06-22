import{_ as di}from"./index-C4cZbB3R.js";var Xc={};/*! For license information please see index.js.LICENSE.txt */var mi={742:(B,T)=>{T.byteLength=_,T.toByteArray=I,T.fromByteArray=U;for(var x=[],A=[],L=typeof Uint8Array<"u"?Uint8Array:Array,z="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y=0,$=z.length;y<$;++y)x[y]=z[y],A[z.charCodeAt(y)]=y;A[45]=62,A[95]=63;function F(C){var M=C.length;if(M%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var X=C.indexOf("=");X===-1&&(X=M);var de=X===M?0:4-X%4;return[X,de]}function _(C){var M=F(C),X=M[0],de=M[1];return(X+de)*3/4-de}function O(C,M,X){return(M+X)*3/4-X}function I(C){var M,X=F(C),de=X[0],se=X[1],Q=new L(O(C,de,se)),ue=0,_e=se>0?de-4:de,we;for(we=0;we<_e;we+=4)M=A[C.charCodeAt(we)]<<18|A[C.charCodeAt(we+1)]<<12|A[C.charCodeAt(we+2)]<<6|A[C.charCodeAt(we+3)],Q[ue++]=M>>16&255,Q[ue++]=M>>8&255,Q[ue++]=M&255;return se===2&&(M=A[C.charCodeAt(we)]<<2|A[C.charCodeAt(we+1)]>>4,Q[ue++]=M&255),se===1&&(M=A[C.charCodeAt(we)]<<10|A[C.charCodeAt(we+1)]<<4|A[C.charCodeAt(we+2)]>>2,Q[ue++]=M>>8&255,Q[ue++]=M&255),Q}function D(C){return x[C>>18&63]+x[C>>12&63]+x[C>>6&63]+x[C&63]}function V(C,M,X){for(var de,se=[],Q=M;Q<X;Q+=3)de=(C[Q]<<16&16711680)+(C[Q+1]<<8&65280)+(C[Q+2]&255),se.push(D(de));return se.join("")}function U(C){for(var M,X=C.length,de=X%3,se=[],Q=16383,ue=0,_e=X-de;ue<_e;ue+=Q)se.push(V(C,ue,ue+Q>_e?_e:ue+Q));return de===1?(M=C[X-1],se.push(x[M>>2]+x[M<<4&63]+"==")):de===2&&(M=(C[X-2]<<8)+C[X-1],se.push(x[M>>10]+x[M>>4&63]+x[M<<2&63]+"=")),se.join("")}},764:(B,T,x)=>{const A=x(742),L=x(645),z=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;T.lW=_,T.h2=50;const y=2147483647;_.TYPED_ARRAY_SUPPORT=$(),!_.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function $(){try{const u=new Uint8Array(1),i={foo:function(){return 42}};return Object.setPrototypeOf(i,Uint8Array.prototype),Object.setPrototypeOf(u,i),u.foo()===42}catch{return!1}}Object.defineProperty(_.prototype,"parent",{enumerable:!0,get:function(){if(_.isBuffer(this))return this.buffer}}),Object.defineProperty(_.prototype,"offset",{enumerable:!0,get:function(){if(_.isBuffer(this))return this.byteOffset}});function F(u){if(u>y)throw new RangeError('The value "'+u+'" is invalid for option "size"');const i=new Uint8Array(u);return Object.setPrototypeOf(i,_.prototype),i}function _(u,i,o){if(typeof u=="number"){if(typeof i=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return V(u)}return O(u,i,o)}_.poolSize=8192;function O(u,i,o){if(typeof u=="string")return U(u,i);if(ArrayBuffer.isView(u))return M(u);if(u==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u);if(Ae(u,ArrayBuffer)||u&&Ae(u.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ae(u,SharedArrayBuffer)||u&&Ae(u.buffer,SharedArrayBuffer)))return X(u,i,o);if(typeof u=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const p=u.valueOf&&u.valueOf();if(p!=null&&p!==u)return _.from(p,i,o);const m=de(u);if(m)return m;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof u[Symbol.toPrimitive]=="function")return _.from(u[Symbol.toPrimitive]("string"),i,o);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof u)}_.from=function(u,i,o){return O(u,i,o)},Object.setPrototypeOf(_.prototype,Uint8Array.prototype),Object.setPrototypeOf(_,Uint8Array);function I(u){if(typeof u!="number")throw new TypeError('"size" argument must be of type number');if(u<0)throw new RangeError('The value "'+u+'" is invalid for option "size"')}function D(u,i,o){return I(u),u<=0?F(u):i!==void 0?typeof o=="string"?F(u).fill(i,o):F(u).fill(i):F(u)}_.alloc=function(u,i,o){return D(u,i,o)};function V(u){return I(u),F(u<0?0:se(u)|0)}_.allocUnsafe=function(u){return V(u)},_.allocUnsafeSlow=function(u){return V(u)};function U(u,i){if((typeof i!="string"||i==="")&&(i="utf8"),!_.isEncoding(i))throw new TypeError("Unknown encoding: "+i);const o=Q(u,i)|0;let p=F(o);const m=p.write(u,i);return m!==o&&(p=p.slice(0,m)),p}function C(u){const i=u.length<0?0:se(u.length)|0,o=F(i);for(let p=0;p<i;p+=1)o[p]=u[p]&255;return o}function M(u){if(Ae(u,Uint8Array)){const i=new Uint8Array(u);return X(i.buffer,i.byteOffset,i.byteLength)}return C(u)}function X(u,i,o){if(i<0||u.byteLength<i)throw new RangeError('"offset" is outside of buffer bounds');if(u.byteLength<i+(o||0))throw new RangeError('"length" is outside of buffer bounds');let p;return i===void 0&&o===void 0?p=new Uint8Array(u):o===void 0?p=new Uint8Array(u,i):p=new Uint8Array(u,i,o),Object.setPrototypeOf(p,_.prototype),p}function de(u){if(_.isBuffer(u)){const i=se(u.length)|0,o=F(i);return o.length===0||u.copy(o,0,0,i),o}if(u.length!==void 0)return typeof u.length!="number"||Ye(u.length)?F(0):C(u);if(u.type==="Buffer"&&Array.isArray(u.data))return C(u.data)}function se(u){if(u>=y)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+y.toString(16)+" bytes");return u|0}_.isBuffer=function(i){return i!=null&&i._isBuffer===!0&&i!==_.prototype},_.compare=function(i,o){if(Ae(i,Uint8Array)&&(i=_.from(i,i.offset,i.byteLength)),Ae(o,Uint8Array)&&(o=_.from(o,o.offset,o.byteLength)),!_.isBuffer(i)||!_.isBuffer(o))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(i===o)return 0;let p=i.length,m=o.length;for(let g=0,w=Math.min(p,m);g<w;++g)if(i[g]!==o[g]){p=i[g],m=o[g];break}return p<m?-1:m<p?1:0},_.isEncoding=function(i){switch(String(i).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},_.concat=function(i,o){if(!Array.isArray(i))throw new TypeError('"list" argument must be an Array of Buffers');if(i.length===0)return _.alloc(0);let p;if(o===void 0)for(o=0,p=0;p<i.length;++p)o+=i[p].length;const m=_.allocUnsafe(o);let g=0;for(p=0;p<i.length;++p){let w=i[p];if(Ae(w,Uint8Array))g+w.length>m.length?(_.isBuffer(w)||(w=_.from(w)),w.copy(m,g)):Uint8Array.prototype.set.call(m,w,g);else if(_.isBuffer(w))w.copy(m,g);else throw new TypeError('"list" argument must be an Array of Buffers');g+=w.length}return m};function Q(u,i){if(_.isBuffer(u))return u.length;if(ArrayBuffer.isView(u)||Ae(u,ArrayBuffer))return u.byteLength;if(typeof u!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof u);const o=u.length,p=arguments.length>2&&arguments[2]===!0;if(!p&&o===0)return 0;let m=!1;for(;;)switch(i){case"ascii":case"latin1":case"binary":return o;case"utf8":case"utf-8":return le(u).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return o*2;case"hex":return o>>>1;case"base64":return he(u).length;default:if(m)return p?-1:le(u).length;i=(""+i).toLowerCase(),m=!0}}_.byteLength=Q;function ue(u,i,o){let p=!1;if((i===void 0||i<0)&&(i=0),i>this.length||((o===void 0||o>this.length)&&(o=this.length),o<=0)||(o>>>=0,i>>>=0,o<=i))return"";for(u||(u="utf8");;)switch(u){case"hex":return pn(this,i,o);case"utf8":case"utf-8":return ln(this,i,o);case"ascii":return Un(this,i,o);case"latin1":case"binary":return fn(this,i,o);case"base64":return Et(this,i,o);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return zn(this,i,o);default:if(p)throw new TypeError("Unknown encoding: "+u);u=(u+"").toLowerCase(),p=!0}}_.prototype._isBuffer=!0;function _e(u,i,o){const p=u[i];u[i]=u[o],u[o]=p}_.prototype.swap16=function(){const i=this.length;if(i%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let o=0;o<i;o+=2)_e(this,o,o+1);return this},_.prototype.swap32=function(){const i=this.length;if(i%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let o=0;o<i;o+=4)_e(this,o,o+3),_e(this,o+1,o+2);return this},_.prototype.swap64=function(){const i=this.length;if(i%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let o=0;o<i;o+=8)_e(this,o,o+7),_e(this,o+1,o+6),_e(this,o+2,o+5),_e(this,o+3,o+4);return this},_.prototype.toString=function(){const i=this.length;return i===0?"":arguments.length===0?ln(this,0,i):ue.apply(this,arguments)},_.prototype.toLocaleString=_.prototype.toString,_.prototype.equals=function(i){if(!_.isBuffer(i))throw new TypeError("Argument must be a Buffer");return this===i?!0:_.compare(this,i)===0},_.prototype.inspect=function(){let i="";const o=T.h2;return i=this.toString("hex",0,o).replace(/(.{2})/g,"$1 ").trim(),this.length>o&&(i+=" ... "),"<Buffer "+i+">"},z&&(_.prototype[z]=_.prototype.inspect),_.prototype.compare=function(i,o,p,m,g){if(Ae(i,Uint8Array)&&(i=_.from(i,i.offset,i.byteLength)),!_.isBuffer(i))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof i);if(o===void 0&&(o=0),p===void 0&&(p=i?i.length:0),m===void 0&&(m=0),g===void 0&&(g=this.length),o<0||p>i.length||m<0||g>this.length)throw new RangeError("out of range index");if(m>=g&&o>=p)return 0;if(m>=g)return-1;if(o>=p)return 1;if(o>>>=0,p>>>=0,m>>>=0,g>>>=0,this===i)return 0;let w=g-m,Y=p-o;const J=Math.min(w,Y),K=this.slice(m,g),re=i.slice(o,p);for(let oe=0;oe<J;++oe)if(K[oe]!==re[oe]){w=K[oe],Y=re[oe];break}return w<Y?-1:Y<w?1:0};function we(u,i,o,p,m){if(u.length===0)return-1;if(typeof o=="string"?(p=o,o=0):o>2147483647?o=2147483647:o<-2147483648&&(o=-2147483648),o=+o,Ye(o)&&(o=m?0:u.length-1),o<0&&(o=u.length+o),o>=u.length){if(m)return-1;o=u.length-1}else if(o<0)if(m)o=0;else return-1;if(typeof i=="string"&&(i=_.from(i,p)),_.isBuffer(i))return i.length===0?-1:He(u,i,o,p,m);if(typeof i=="number")return i=i&255,typeof Uint8Array.prototype.indexOf=="function"?m?Uint8Array.prototype.indexOf.call(u,i,o):Uint8Array.prototype.lastIndexOf.call(u,i,o):He(u,[i],o,p,m);throw new TypeError("val must be string, number or Buffer")}function He(u,i,o,p,m){let g=1,w=u.length,Y=i.length;if(p!==void 0&&(p=String(p).toLowerCase(),p==="ucs2"||p==="ucs-2"||p==="utf16le"||p==="utf-16le")){if(u.length<2||i.length<2)return-1;g=2,w/=2,Y/=2,o/=2}function J(re,oe){return g===1?re[oe]:re.readUInt16BE(oe*g)}let K;if(m){let re=-1;for(K=o;K<w;K++)if(J(u,K)===J(i,re===-1?0:K-re)){if(re===-1&&(re=K),K-re+1===Y)return re*g}else re!==-1&&(K-=K-re),re=-1}else for(o+Y>w&&(o=w-Y),K=o;K>=0;K--){let re=!0;for(let oe=0;oe<Y;oe++)if(J(u,K+oe)!==J(i,oe)){re=!1;break}if(re)return K}return-1}_.prototype.includes=function(i,o,p){return this.indexOf(i,o,p)!==-1},_.prototype.indexOf=function(i,o,p){return we(this,i,o,p,!0)},_.prototype.lastIndexOf=function(i,o,p){return we(this,i,o,p,!1)};function Rt(u,i,o,p){o=Number(o)||0;const m=u.length-o;p?(p=Number(p),p>m&&(p=m)):p=m;const g=i.length;p>g/2&&(p=g/2);let w;for(w=0;w<p;++w){const Y=parseInt(i.substr(w*2,2),16);if(Ye(Y))return w;u[o+w]=Y}return w}function Xe(u,i,o,p){return pt(le(i,u.length-o),u,o,p)}function Je(u,i,o,p){return pt(tt(i),u,o,p)}function ut(u,i,o,p){return pt(he(i),u,o,p)}function Qe(u,i,o,p){return pt(xe(i,u.length-o),u,o,p)}_.prototype.write=function(i,o,p,m){if(o===void 0)m="utf8",p=this.length,o=0;else if(p===void 0&&typeof o=="string")m=o,p=this.length,o=0;else if(isFinite(o))o=o>>>0,isFinite(p)?(p=p>>>0,m===void 0&&(m="utf8")):(m=p,p=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const g=this.length-o;if((p===void 0||p>g)&&(p=g),i.length>0&&(p<0||o<0)||o>this.length)throw new RangeError("Attempt to write outside buffer bounds");m||(m="utf8");let w=!1;for(;;)switch(m){case"hex":return Rt(this,i,o,p);case"utf8":case"utf-8":return Xe(this,i,o,p);case"ascii":case"latin1":case"binary":return Je(this,i,o,p);case"base64":return ut(this,i,o,p);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Qe(this,i,o,p);default:if(w)throw new TypeError("Unknown encoding: "+m);m=(""+m).toLowerCase(),w=!0}},_.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Et(u,i,o){return i===0&&o===u.length?A.fromByteArray(u):A.fromByteArray(u.slice(i,o))}function ln(u,i,o){o=Math.min(u.length,o);const p=[];let m=i;for(;m<o;){const g=u[m];let w=null,Y=g>239?4:g>223?3:g>191?2:1;if(m+Y<=o){let J,K,re,oe;switch(Y){case 1:g<128&&(w=g);break;case 2:J=u[m+1],(J&192)===128&&(oe=(g&31)<<6|J&63,oe>127&&(w=oe));break;case 3:J=u[m+1],K=u[m+2],(J&192)===128&&(K&192)===128&&(oe=(g&15)<<12|(J&63)<<6|K&63,oe>2047&&(oe<55296||oe>57343)&&(w=oe));break;case 4:J=u[m+1],K=u[m+2],re=u[m+3],(J&192)===128&&(K&192)===128&&(re&192)===128&&(oe=(g&15)<<18|(J&63)<<12|(K&63)<<6|re&63,oe>65535&&oe<1114112&&(w=oe))}}w===null?(w=65533,Y=1):w>65535&&(w-=65536,p.push(w>>>10&1023|55296),w=56320|w&1023),p.push(w),m+=Y}return Ut(p)}const un=4096;function Ut(u){const i=u.length;if(i<=un)return String.fromCharCode.apply(String,u);let o="",p=0;for(;p<i;)o+=String.fromCharCode.apply(String,u.slice(p,p+=un));return o}function Un(u,i,o){let p="";o=Math.min(u.length,o);for(let m=i;m<o;++m)p+=String.fromCharCode(u[m]&127);return p}function fn(u,i,o){let p="";o=Math.min(u.length,o);for(let m=i;m<o;++m)p+=String.fromCharCode(u[m]);return p}function pn(u,i,o){const p=u.length;(!i||i<0)&&(i=0),(!o||o<0||o>p)&&(o=p);let m="";for(let g=i;g<o;++g)m+=mn[u[g]];return m}function zn(u,i,o){const p=u.slice(i,o);let m="";for(let g=0;g<p.length-1;g+=2)m+=String.fromCharCode(p[g]+p[g+1]*256);return m}_.prototype.slice=function(i,o){const p=this.length;i=~~i,o=o===void 0?p:~~o,i<0?(i+=p,i<0&&(i=0)):i>p&&(i=p),o<0?(o+=p,o<0&&(o=0)):o>p&&(o=p),o<i&&(o=i);const m=this.subarray(i,o);return Object.setPrototypeOf(m,_.prototype),m};function ge(u,i,o){if(u%1!==0||u<0)throw new RangeError("offset is not uint");if(u+i>o)throw new RangeError("Trying to access beyond buffer length")}_.prototype.readUintLE=_.prototype.readUIntLE=function(i,o,p){i=i>>>0,o=o>>>0,p||ge(i,o,this.length);let m=this[i],g=1,w=0;for(;++w<o&&(g*=256);)m+=this[i+w]*g;return m},_.prototype.readUintBE=_.prototype.readUIntBE=function(i,o,p){i=i>>>0,o=o>>>0,p||ge(i,o,this.length);let m=this[i+--o],g=1;for(;o>0&&(g*=256);)m+=this[i+--o]*g;return m},_.prototype.readUint8=_.prototype.readUInt8=function(i,o){return i=i>>>0,o||ge(i,1,this.length),this[i]},_.prototype.readUint16LE=_.prototype.readUInt16LE=function(i,o){return i=i>>>0,o||ge(i,2,this.length),this[i]|this[i+1]<<8},_.prototype.readUint16BE=_.prototype.readUInt16BE=function(i,o){return i=i>>>0,o||ge(i,2,this.length),this[i]<<8|this[i+1]},_.prototype.readUint32LE=_.prototype.readUInt32LE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),(this[i]|this[i+1]<<8|this[i+2]<<16)+this[i+3]*16777216},_.prototype.readUint32BE=_.prototype.readUInt32BE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),this[i]*16777216+(this[i+1]<<16|this[i+2]<<8|this[i+3])},_.prototype.readBigUInt64LE=Ue(function(i){i=i>>>0,et(i,"offset");const o=this[i],p=this[i+7];(o===void 0||p===void 0)&&ft(i,this.length-8);const m=o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24,g=this[++i]+this[++i]*2**8+this[++i]*2**16+p*2**24;return BigInt(m)+(BigInt(g)<<BigInt(32))}),_.prototype.readBigUInt64BE=Ue(function(i){i=i>>>0,et(i,"offset");const o=this[i],p=this[i+7];(o===void 0||p===void 0)&&ft(i,this.length-8);const m=o*2**24+this[++i]*2**16+this[++i]*2**8+this[++i],g=this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+p;return(BigInt(m)<<BigInt(32))+BigInt(g)}),_.prototype.readIntLE=function(i,o,p){i=i>>>0,o=o>>>0,p||ge(i,o,this.length);let m=this[i],g=1,w=0;for(;++w<o&&(g*=256);)m+=this[i+w]*g;return g*=128,m>=g&&(m-=Math.pow(2,8*o)),m},_.prototype.readIntBE=function(i,o,p){i=i>>>0,o=o>>>0,p||ge(i,o,this.length);let m=o,g=1,w=this[i+--m];for(;m>0&&(g*=256);)w+=this[i+--m]*g;return g*=128,w>=g&&(w-=Math.pow(2,8*o)),w},_.prototype.readInt8=function(i,o){return i=i>>>0,o||ge(i,1,this.length),this[i]&128?(255-this[i]+1)*-1:this[i]},_.prototype.readInt16LE=function(i,o){i=i>>>0,o||ge(i,2,this.length);const p=this[i]|this[i+1]<<8;return p&32768?p|4294901760:p},_.prototype.readInt16BE=function(i,o){i=i>>>0,o||ge(i,2,this.length);const p=this[i+1]|this[i]<<8;return p&32768?p|4294901760:p},_.prototype.readInt32LE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),this[i]|this[i+1]<<8|this[i+2]<<16|this[i+3]<<24},_.prototype.readInt32BE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),this[i]<<24|this[i+1]<<16|this[i+2]<<8|this[i+3]},_.prototype.readBigInt64LE=Ue(function(i){i=i>>>0,et(i,"offset");const o=this[i],p=this[i+7];(o===void 0||p===void 0)&&ft(i,this.length-8);const m=this[i+4]+this[i+5]*2**8+this[i+6]*2**16+(p<<24);return(BigInt(m)<<BigInt(32))+BigInt(o+this[++i]*2**8+this[++i]*2**16+this[++i]*2**24)}),_.prototype.readBigInt64BE=Ue(function(i){i=i>>>0,et(i,"offset");const o=this[i],p=this[i+7];(o===void 0||p===void 0)&&ft(i,this.length-8);const m=(o<<24)+this[++i]*2**16+this[++i]*2**8+this[++i];return(BigInt(m)<<BigInt(32))+BigInt(this[++i]*2**24+this[++i]*2**16+this[++i]*2**8+p)}),_.prototype.readFloatLE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),L.read(this,i,!0,23,4)},_.prototype.readFloatBE=function(i,o){return i=i>>>0,o||ge(i,4,this.length),L.read(this,i,!1,23,4)},_.prototype.readDoubleLE=function(i,o){return i=i>>>0,o||ge(i,8,this.length),L.read(this,i,!0,52,8)},_.prototype.readDoubleBE=function(i,o){return i=i>>>0,o||ge(i,8,this.length),L.read(this,i,!1,52,8)};function ye(u,i,o,p,m,g){if(!_.isBuffer(u))throw new TypeError('"buffer" argument must be a Buffer instance');if(i>m||i<g)throw new RangeError('"value" argument is out of bounds');if(o+p>u.length)throw new RangeError("Index out of range")}_.prototype.writeUintLE=_.prototype.writeUIntLE=function(i,o,p,m){if(i=+i,o=o>>>0,p=p>>>0,!m){const Y=Math.pow(2,8*p)-1;ye(this,i,o,p,Y,0)}let g=1,w=0;for(this[o]=i&255;++w<p&&(g*=256);)this[o+w]=i/g&255;return o+p},_.prototype.writeUintBE=_.prototype.writeUIntBE=function(i,o,p,m){if(i=+i,o=o>>>0,p=p>>>0,!m){const Y=Math.pow(2,8*p)-1;ye(this,i,o,p,Y,0)}let g=p-1,w=1;for(this[o+g]=i&255;--g>=0&&(w*=256);)this[o+g]=i/w&255;return o+p},_.prototype.writeUint8=_.prototype.writeUInt8=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,1,255,0),this[o]=i&255,o+1},_.prototype.writeUint16LE=_.prototype.writeUInt16LE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,2,65535,0),this[o]=i&255,this[o+1]=i>>>8,o+2},_.prototype.writeUint16BE=_.prototype.writeUInt16BE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,2,65535,0),this[o]=i>>>8,this[o+1]=i&255,o+2},_.prototype.writeUint32LE=_.prototype.writeUInt32LE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,4,4294967295,0),this[o+3]=i>>>24,this[o+2]=i>>>16,this[o+1]=i>>>8,this[o]=i&255,o+4},_.prototype.writeUint32BE=_.prototype.writeUInt32BE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,4,4294967295,0),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4};function Ne(u,i,o,p,m){Ot(i,p,m,u,o,7);let g=Number(i&BigInt(4294967295));u[o++]=g,g=g>>8,u[o++]=g,g=g>>8,u[o++]=g,g=g>>8,u[o++]=g;let w=Number(i>>BigInt(32)&BigInt(4294967295));return u[o++]=w,w=w>>8,u[o++]=w,w=w>>8,u[o++]=w,w=w>>8,u[o++]=w,o}function $e(u,i,o,p,m){Ot(i,p,m,u,o,7);let g=Number(i&BigInt(4294967295));u[o+7]=g,g=g>>8,u[o+6]=g,g=g>>8,u[o+5]=g,g=g>>8,u[o+4]=g;let w=Number(i>>BigInt(32)&BigInt(4294967295));return u[o+3]=w,w=w>>8,u[o+2]=w,w=w>>8,u[o+1]=w,w=w>>8,u[o]=w,o+8}_.prototype.writeBigUInt64LE=Ue(function(i,o=0){return Ne(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),_.prototype.writeBigUInt64BE=Ue(function(i,o=0){return $e(this,i,o,BigInt(0),BigInt("0xffffffffffffffff"))}),_.prototype.writeIntLE=function(i,o,p,m){if(i=+i,o=o>>>0,!m){const J=Math.pow(2,8*p-1);ye(this,i,o,p,J-1,-J)}let g=0,w=1,Y=0;for(this[o]=i&255;++g<p&&(w*=256);)i<0&&Y===0&&this[o+g-1]!==0&&(Y=1),this[o+g]=(i/w>>0)-Y&255;return o+p},_.prototype.writeIntBE=function(i,o,p,m){if(i=+i,o=o>>>0,!m){const J=Math.pow(2,8*p-1);ye(this,i,o,p,J-1,-J)}let g=p-1,w=1,Y=0;for(this[o+g]=i&255;--g>=0&&(w*=256);)i<0&&Y===0&&this[o+g+1]!==0&&(Y=1),this[o+g]=(i/w>>0)-Y&255;return o+p},_.prototype.writeInt8=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,1,127,-128),i<0&&(i=255+i+1),this[o]=i&255,o+1},_.prototype.writeInt16LE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,2,32767,-32768),this[o]=i&255,this[o+1]=i>>>8,o+2},_.prototype.writeInt16BE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,2,32767,-32768),this[o]=i>>>8,this[o+1]=i&255,o+2},_.prototype.writeInt32LE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,4,2147483647,-2147483648),this[o]=i&255,this[o+1]=i>>>8,this[o+2]=i>>>16,this[o+3]=i>>>24,o+4},_.prototype.writeInt32BE=function(i,o,p){return i=+i,o=o>>>0,p||ye(this,i,o,4,2147483647,-2147483648),i<0&&(i=4294967295+i+1),this[o]=i>>>24,this[o+1]=i>>>16,this[o+2]=i>>>8,this[o+3]=i&255,o+4},_.prototype.writeBigInt64LE=Ue(function(i,o=0){return Ne(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),_.prototype.writeBigInt64BE=Ue(function(i,o=0){return $e(this,i,o,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function dn(u,i,o,p,m,g){if(o+p>u.length)throw new RangeError("Index out of range");if(o<0)throw new RangeError("Index out of range")}function ke(u,i,o,p,m){return i=+i,o=o>>>0,m||dn(u,i,o,4),L.write(u,i,o,p,23,4),o+4}_.prototype.writeFloatLE=function(i,o,p){return ke(this,i,o,!0,p)},_.prototype.writeFloatBE=function(i,o,p){return ke(this,i,o,!1,p)};function hn(u,i,o,p,m){return i=+i,o=o>>>0,m||dn(u,i,o,8),L.write(u,i,o,p,52,8),o+8}_.prototype.writeDoubleLE=function(i,o,p){return hn(this,i,o,!0,p)},_.prototype.writeDoubleBE=function(i,o,p){return hn(this,i,o,!1,p)},_.prototype.copy=function(i,o,p,m){if(!_.isBuffer(i))throw new TypeError("argument should be a Buffer");if(p||(p=0),!m&&m!==0&&(m=this.length),o>=i.length&&(o=i.length),o||(o=0),m>0&&m<p&&(m=p),m===p||i.length===0||this.length===0)return 0;if(o<0)throw new RangeError("targetStart out of bounds");if(p<0||p>=this.length)throw new RangeError("Index out of range");if(m<0)throw new RangeError("sourceEnd out of bounds");m>this.length&&(m=this.length),i.length-o<m-p&&(m=i.length-o+p);const g=m-p;return this===i&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(o,p,m):Uint8Array.prototype.set.call(i,this.subarray(p,m),o),g},_.prototype.fill=function(i,o,p,m){if(typeof i=="string"){if(typeof o=="string"?(m=o,o=0,p=this.length):typeof p=="string"&&(m=p,p=this.length),m!==void 0&&typeof m!="string")throw new TypeError("encoding must be a string");if(typeof m=="string"&&!_.isEncoding(m))throw new TypeError("Unknown encoding: "+m);if(i.length===1){const w=i.charCodeAt(0);(m==="utf8"&&w<128||m==="latin1")&&(i=w)}}else typeof i=="number"?i=i&255:typeof i=="boolean"&&(i=Number(i));if(o<0||this.length<o||this.length<p)throw new RangeError("Out of range index");if(p<=o)return this;o=o>>>0,p=p===void 0?this.length:p>>>0,i||(i=0);let g;if(typeof i=="number")for(g=o;g<p;++g)this[g]=i;else{const w=_.isBuffer(i)?i:_.from(i,m),Y=w.length;if(Y===0)throw new TypeError('The value "'+i+'" is invalid for argument "value"');for(g=0;g<p-o;++g)this[g+o]=w[g%Y]}return this};const Oe={};function zt(u,i,o){Oe[u]=class extends o{constructor(){super(),Object.defineProperty(this,"message",{value:i.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${u}]`,this.stack,delete this.name}get code(){return u}set code(m){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:m,writable:!0})}toString(){return`${this.name} [${u}]: ${this.message}`}}}zt("ERR_BUFFER_OUT_OF_BOUNDS",function(u){return u?`${u} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),zt("ERR_INVALID_ARG_TYPE",function(u,i){return`The "${u}" argument must be of type number. Received type ${typeof i}`},TypeError),zt("ERR_OUT_OF_RANGE",function(u,i,o){let p=`The value of "${u}" is out of range.`,m=o;return Number.isInteger(o)&&Math.abs(o)>2**32?m=Nt(String(o)):typeof o=="bigint"&&(m=String(o),(o>BigInt(2)**BigInt(32)||o<-(BigInt(2)**BigInt(32)))&&(m=Nt(m)),m+="n"),p+=` It must be ${i}. Received ${m}`,p},RangeError);function Nt(u){let i="",o=u.length;const p=u[0]==="-"?1:0;for(;o>=p+4;o-=3)i=`_${u.slice(o-3,o)}${i}`;return`${u.slice(0,o)}${i}`}function Nn(u,i,o){et(i,"offset"),(u[i]===void 0||u[i+o]===void 0)&&ft(i,u.length-(o+1))}function Ot(u,i,o,p,m,g){if(u>o||u<i){const w=typeof i=="bigint"?"n":"";let Y;throw i===0||i===BigInt(0)?Y=`>= 0${w} and < 2${w} ** ${(g+1)*8}${w}`:Y=`>= -(2${w} ** ${(g+1)*8-1}${w}) and < 2 ** ${(g+1)*8-1}${w}`,new Oe.ERR_OUT_OF_RANGE("value",Y,u)}Nn(p,m,g)}function et(u,i){if(typeof u!="number")throw new Oe.ERR_INVALID_ARG_TYPE(i,"number",u)}function ft(u,i,o){throw Math.floor(u)!==u?(et(u,o),new Oe.ERR_OUT_OF_RANGE("offset","an integer",u)):i<0?new Oe.ERR_BUFFER_OUT_OF_BOUNDS:new Oe.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${i}`,u)}const E=/[^+/0-9A-Za-z-_]/g;function be(u){if(u=u.split("=")[0],u=u.trim().replace(E,""),u.length<2)return"";for(;u.length%4!==0;)u=u+"=";return u}function le(u,i){i=i||1/0;let o;const p=u.length;let m=null;const g=[];for(let w=0;w<p;++w){if(o=u.charCodeAt(w),o>55295&&o<57344){if(!m){if(o>56319){(i-=3)>-1&&g.push(239,191,189);continue}else if(w+1===p){(i-=3)>-1&&g.push(239,191,189);continue}m=o;continue}if(o<56320){(i-=3)>-1&&g.push(239,191,189),m=o;continue}o=(m-55296<<10|o-56320)+65536}else m&&(i-=3)>-1&&g.push(239,191,189);if(m=null,o<128){if((i-=1)<0)break;g.push(o)}else if(o<2048){if((i-=2)<0)break;g.push(o>>6|192,o&63|128)}else if(o<65536){if((i-=3)<0)break;g.push(o>>12|224,o>>6&63|128,o&63|128)}else if(o<1114112){if((i-=4)<0)break;g.push(o>>18|240,o>>12&63|128,o>>6&63|128,o&63|128)}else throw new Error("Invalid code point")}return g}function tt(u){const i=[];for(let o=0;o<u.length;++o)i.push(u.charCodeAt(o)&255);return i}function xe(u,i){let o,p,m;const g=[];for(let w=0;w<u.length&&!((i-=2)<0);++w)o=u.charCodeAt(w),p=o>>8,m=o%256,g.push(m),g.push(p);return g}function he(u){return A.toByteArray(be(u))}function pt(u,i,o,p){let m;for(m=0;m<p&&!(m+o>=i.length||m>=u.length);++m)i[m+o]=u[m];return m}function Ae(u,i){return u instanceof i||u!=null&&u.constructor!=null&&u.constructor.name!=null&&u.constructor.name===i.name}function Ye(u){return u!==u}const mn=function(){const u="0123456789abcdef",i=new Array(256);for(let o=0;o<16;++o){const p=o*16;for(let m=0;m<16;++m)i[p+m]=u[o]+u[m]}return i}();function Ue(u){return typeof BigInt>"u"?nt:u}function nt(){throw new Error("BigInt not supported")}},227:(B,T,x)=>{T.formatArgs=L,T.save=z,T.load=y,T.useColors=A,T.storage=$(),T.destroy=(()=>{let _=!1;return()=>{_||(_=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),T.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function A(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function L(_){if(_[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+_[0]+(this.useColors?"%c ":" ")+"+"+B.exports.humanize(this.diff),!this.useColors)return;const O="color: "+this.color;_.splice(1,0,O,"color: inherit");let I=0,D=0;_[0].replace(/%[a-zA-Z%]/g,V=>{V!=="%%"&&(I++,V==="%c"&&(D=I))}),_.splice(D,0,O)}T.log=console.debug||console.log||(()=>{});function z(_){try{_?T.storage.setItem("debug",_):T.storage.removeItem("debug")}catch{}}function y(){let _;try{_=T.storage.getItem("debug")}catch{}return!_&&typeof process<"u"&&"env"in process&&(_=Xc.DEBUG),_}function $(){try{return localStorage}catch{}}B.exports=x(447)(T);const{formatters:F}=B.exports;F.j=function(_){try{return JSON.stringify(_)}catch(O){return"[UnexpectedJSONParseError]: "+O.message}}},447:(B,T,x)=>{function A(L){y.debug=y,y.default=y,y.coerce=D,y.disable=_,y.enable=F,y.enabled=O,y.humanize=x(824),y.destroy=V,Object.keys(L).forEach(U=>{y[U]=L[U]}),y.names=[],y.skips=[],y.formatters={};function z(U){let C=0;for(let M=0;M<U.length;M++)C=(C<<5)-C+U.charCodeAt(M),C|=0;return y.colors[Math.abs(C)%y.colors.length]}y.selectColor=z;function y(U){let C,M=null,X,de;function se(...Q){if(!se.enabled)return;const ue=se,_e=Number(new Date),we=_e-(C||_e);ue.diff=we,ue.prev=C,ue.curr=_e,C=_e,Q[0]=y.coerce(Q[0]),typeof Q[0]!="string"&&Q.unshift("%O");let He=0;Q[0]=Q[0].replace(/%([a-zA-Z%])/g,(Xe,Je)=>{if(Xe==="%%")return"%";He++;const ut=y.formatters[Je];if(typeof ut=="function"){const Qe=Q[He];Xe=ut.call(ue,Qe),Q.splice(He,1),He--}return Xe}),y.formatArgs.call(ue,Q),(ue.log||y.log).apply(ue,Q)}return se.namespace=U,se.useColors=y.useColors(),se.color=y.selectColor(U),se.extend=$,se.destroy=y.destroy,Object.defineProperty(se,"enabled",{enumerable:!0,configurable:!1,get:()=>M!==null?M:(X!==y.namespaces&&(X=y.namespaces,de=y.enabled(U)),de),set:Q=>{M=Q}}),typeof y.init=="function"&&y.init(se),se}function $(U,C){const M=y(this.namespace+(typeof C>"u"?":":C)+U);return M.log=this.log,M}function F(U){y.save(U),y.namespaces=U,y.names=[],y.skips=[];let C;const M=(typeof U=="string"?U:"").split(/[\s,]+/),X=M.length;for(C=0;C<X;C++)M[C]&&(U=M[C].replace(/\*/g,".*?"),U[0]==="-"?y.skips.push(new RegExp("^"+U.slice(1)+"$")):y.names.push(new RegExp("^"+U+"$")))}function _(){const U=[...y.names.map(I),...y.skips.map(I).map(C=>"-"+C)].join(",");return y.enable(""),U}function O(U){if(U[U.length-1]==="*")return!0;let C,M;for(C=0,M=y.skips.length;C<M;C++)if(y.skips[C].test(U))return!1;for(C=0,M=y.names.length;C<M;C++)if(y.names[C].test(U))return!0;return!1}function I(U){return U.toString().substring(2,U.toString().length-2).replace(/\.\*\?$/,"*")}function D(U){return U instanceof Error?U.stack||U.message:U}function V(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return y.enable(y.load()),y}B.exports=A},645:(B,T)=>{T.read=function(x,A,L,z,y){var $,F,_=y*8-z-1,O=(1<<_)-1,I=O>>1,D=-7,V=L?y-1:0,U=L?-1:1,C=x[A+V];for(V+=U,$=C&(1<<-D)-1,C>>=-D,D+=_;D>0;$=$*256+x[A+V],V+=U,D-=8);for(F=$&(1<<-D)-1,$>>=-D,D+=z;D>0;F=F*256+x[A+V],V+=U,D-=8);if($===0)$=1-I;else{if($===O)return F?NaN:(C?-1:1)*(1/0);F=F+Math.pow(2,z),$=$-I}return(C?-1:1)*F*Math.pow(2,$-z)},T.write=function(x,A,L,z,y,$){var F,_,O,I=$*8-y-1,D=(1<<I)-1,V=D>>1,U=y===23?Math.pow(2,-24)-Math.pow(2,-77):0,C=z?0:$-1,M=z?1:-1,X=A<0||A===0&&1/A<0?1:0;for(A=Math.abs(A),isNaN(A)||A===1/0?(_=isNaN(A)?1:0,F=D):(F=Math.floor(Math.log(A)/Math.LN2),A*(O=Math.pow(2,-F))<1&&(F--,O*=2),F+V>=1?A+=U/O:A+=U*Math.pow(2,1-V),A*O>=2&&(F++,O/=2),F+V>=D?(_=0,F=D):F+V>=1?(_=(A*O-1)*Math.pow(2,y),F=F+V):(_=A*Math.pow(2,V-1)*Math.pow(2,y),F=0));y>=8;x[L+C]=_&255,C+=M,_/=256,y-=8);for(F=F<<y|_,I+=y;I>0;x[L+C]=F&255,C+=M,F/=256,I-=8);x[L+C-M]|=X*128}},824:B=>{var T=1e3,x=T*60,A=x*60,L=A*24,z=L*7,y=L*365.25;B.exports=function(I,D){D=D||{};var V=typeof I;if(V==="string"&&I.length>0)return $(I);if(V==="number"&&isFinite(I))return D.long?_(I):F(I);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(I))};function $(I){if(I=String(I),!(I.length>100)){var D=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(I);if(D){var V=parseFloat(D[1]),U=(D[2]||"ms").toLowerCase();switch(U){case"years":case"year":case"yrs":case"yr":case"y":return V*y;case"weeks":case"week":case"w":return V*z;case"days":case"day":case"d":return V*L;case"hours":case"hour":case"hrs":case"hr":case"h":return V*A;case"minutes":case"minute":case"mins":case"min":case"m":return V*x;case"seconds":case"second":case"secs":case"sec":case"s":return V*T;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return V;default:return}}}}function F(I){var D=Math.abs(I);return D>=L?Math.round(I/L)+"d":D>=A?Math.round(I/A)+"h":D>=x?Math.round(I/x)+"m":D>=T?Math.round(I/T)+"s":I+"ms"}function _(I){var D=Math.abs(I);return D>=L?O(I,D,L,"day"):D>=A?O(I,D,A,"hour"):D>=x?O(I,D,x,"minute"):D>=T?O(I,D,T,"second"):I+" ms"}function O(I,D,V,U){var C=D>=V*1.5;return Math.round(I/V)+" "+U+(C?"s":"")}},477:B=>{B.exports=function(T,x,A,L){var z=self||window;try{try{var y;try{y=new z.Blob([T])}catch{var $=z.BlobBuilder||z.WebKitBlobBuilder||z.MozBlobBuilder||z.MSBlobBuilder;y=new $,y.append(T),y=y.getBlob()}var F=z.URL||z.webkitURL,_=F.createObjectURL(y),O=new z[x](_,A);return F.revokeObjectURL(_),O}catch{return new z[x]("data:application/javascript,".concat(encodeURIComponent(T)),A)}}catch{if(!L)throw Error("Inline worker is not supported");return new z[x](L,A)}}}},hi={};function H(B){var T=hi[B];if(T!==void 0)return T.exports;var x=hi[B]={exports:{}};return mi[B](x,x.exports,H),x.exports}H.m=mi;H.n=B=>{var T=B&&B.__esModule?()=>B.default:()=>B;return H.d(T,{a:T}),T};(()=>{var B=Object.getPrototypeOf?x=>Object.getPrototypeOf(x):x=>x.__proto__,T;H.t=function(x,A){if(A&1&&(x=this(x)),A&8||typeof x=="object"&&x&&(A&4&&x.__esModule||A&16&&typeof x.then=="function"))return x;var L=Object.create(null);H.r(L);var z={};T=T||[null,B({}),B([]),B(B)];for(var y=A&2&&x;typeof y=="object"&&!~T.indexOf(y);y=B(y))Object.getOwnPropertyNames(y).forEach($=>z[$]=()=>x[$]);return z.default=()=>x,H.d(L,z),L}})();H.d=(B,T)=>{for(var x in T)H.o(T,x)&&!H.o(B,x)&&Object.defineProperty(B,x,{enumerable:!0,get:T[x]})};H.f={},H.e=B=>Promise.all(Object.keys(H.f).reduce((T,x)=>(H.f[x](B,T),T),[]));H.u=B=>""+B+".6386c00ebfb22619e11b.js";H.o=(B,T)=>Object.prototype.hasOwnProperty.call(B,T);(()=>{var B={},T="@aztec/bb.js:";H.l=(x,A,L,z)=>{if(B[x]){B[x].push(A);return}var y,$;if(L!==void 0)for(var F=document.getElementsByTagName("script"),_=0;_<F.length;_++){var O=F[_];if(O.getAttribute("src")==x||O.getAttribute("data-webpack")==T+L){y=O;break}}y||($=!0,y=document.createElement("script"),y.type="module",y.charset="utf-8",y.timeout=120,H.nc&&y.setAttribute("nonce",H.nc),y.setAttribute("data-webpack",T+L),y.src=x),B[x]=[A];var I=(V,U)=>{y.onerror=y.onload=null,clearTimeout(D);var C=B[x];if(delete B[x],y.parentNode&&y.parentNode.removeChild(y),C&&C.forEach(M=>M(U)),V)return V(U)},D=setTimeout(I.bind(null,void 0,{type:"timeout",target:y}),12e4);y.onerror=I.bind(null,y.onerror),y.onload=I.bind(null,y.onload),$&&document.head.appendChild(y)}})();H.r=B=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(B,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(B,"__esModule",{value:!0})};(()=>{var B;if(typeof import.meta.url=="string"&&(B=import.meta.url),!B)throw new Error("Automatic publicPath is not supported in this browser");B=B.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),H.p=B})();(()=>{var B={826:0};H.f.j=(A,L)=>{var z=H.o(B,A)?B[A]:void 0;if(z!==0)if(z)L.push(z[2]);else{var y=new Promise((O,I)=>z=B[A]=[O,I]);L.push(z[2]=y);var $=H.p+H.u(A),F=new Error,_=O=>{if(H.o(B,A)&&(z=B[A],z!==0&&(B[A]=void 0),z)){var I=O&&(O.type==="load"?"missing":O.type),D=O&&O.target&&O.target.src;F.message="Loading chunk "+A+` failed.
(`+I+": "+D+")",F.name="ChunkLoadError",F.type=I,F.request=D,z[1](F)}};H.l($,_,"chunk-"+A,A)}};var T=(A,L)=>{var[z,y,$]=L,F,_,O=0;if(z.some(D=>B[D]!==0)){for(F in y)H.o(y,F)&&(H.m[F]=y[F]);if($)var I=$(H)}for(A&&A(L);O<z.length;O++)_=z[O],H.o(B,_)&&B[_]&&B[_][0](),B[_]=0},x=globalThis.webpackChunk_aztec_bb_js=globalThis.webpackChunk_aztec_bb_js||[];x.forEach(T.bind(null,0)),x.push=T.bind(null,x.push.bind(x))})();var De={};(()=>{H.d(De,{Dv:()=>$c,Zh:()=>bt,AL:()=>Dn,tD:()=>kc,i2:()=>I,Fr:()=>g,pS:()=>D,ld:()=>ke,yh:()=>Hc,_7:()=>jc,H2:()=>gr,ly:()=>mr});function*B(){const e=[1,1,1,2,4,8,16,32,64];let n=0;for(;;)yield e[Math.min(n++,e.length-1)]}function*T(e){for(const n of e)yield n}async function x(e,n=B()){for(;;)try{return await e()}catch(t){const r=n.next().value;if(r===void 0)throw t;await new Promise(a=>setTimeout(a,r*1e3));continue}}class A{constructor(n){this.numPoints=n}async init(){await this.downloadG1Data(),await this.downloadG2Data()}async streamG1Data(){return(await this.fetchG1Data()).body}async streamG2Data(){return(await this.fetchG2Data()).body}async downloadG1Data(){const n=await this.fetchG1Data();return this.data=new Uint8Array(await n.arrayBuffer())}async downloadG2Data(){const n=await this.fetchG2Data();return this.g2Data=new Uint8Array(await n.arrayBuffer())}getG1Data(){return this.data}getG2Data(){return this.g2Data}async fetchG1Data(){if(this.numPoints===0)return new Response(new Uint8Array([]));const n=this.numPoints*64-1;return await x(()=>fetch("https://aztec-ignition.s3.amazonaws.com/MAIN%20IGNITION/flat/g1.dat",{headers:{Range:`bytes=0-${n}`},cache:"force-cache"}),T([5,5,5]))}async fetchG2Data(){return await x(()=>fetch("https://aztec-ignition.s3.amazonaws.com/MAIN%20IGNITION/flat/g2.dat",{cache:"force-cache"}),T([5,5,5]))}}class L{constructor(n){this.numPoints=n}async init(){await this.downloadG1Data()}async downloadG1Data(){const n=await this.fetchG1Data();return this.data=new Uint8Array(await n.arrayBuffer())}async streamG1Data(){return(await this.fetchG1Data()).body}getG1Data(){return this.data}async fetchG1Data(){if(this.numPoints===0)return new Response(new Uint8Array([]));const n=28,t=n+(this.numPoints*64-1);return await fetch("https://aztec-ignition.s3.amazonaws.com/TEST%20GRUMPKIN/monomial/transcript00.dat",{headers:{Range:`bytes=${n}-${t}`},cache:"force-cache"})}}function z(e){return new Promise((n,t)=>{e.oncomplete=e.onsuccess=()=>n(e.result),e.onabort=e.onerror=()=>t(e.error)})}function y(e,n){const t=indexedDB.open(e);t.onupgradeneeded=()=>t.result.createObjectStore(n);const r=z(t);return(a,s)=>r.then(c=>s(c.transaction(n,a).objectStore(n)))}let $;function F(){return $||($=y("keyval-store","keyval")),$}function _(e,n=F()){return n("readonly",t=>z(t.get(e)))}function O(e,n,t=F()){return t("readwrite",r=>(r.put(n,e),z(r.transaction)))}class I{constructor(n){this.numPoints=n}static async new(n){const t=new I(n);return await t.init(),t}async init(){const n=await _("g1Data"),t=await _("g2Data"),r=new A(this.numPoints),a=this.numPoints*64;!n||n.length<a?(this.g1Data=await r.downloadG1Data(),await O("g1Data",this.g1Data)):this.g1Data=n,t?this.g2Data=t:(this.g2Data=await r.downloadG2Data(),await O("g2Data",this.g2Data))}getG1Data(){return this.g1Data}getG2Data(){return this.g2Data}}class D{constructor(n){this.numPoints=n}static async new(n){const t=new D(n);return await t.init(),t}async init(){const n=await _("grumpkinG1Data"),t=new L(this.numPoints),r=this.numPoints*64;!n||n.length<r?(this.g1Data=await t.downloadG1Data(),await O("grumpkinG1Data",this.g1Data)):this.g1Data=n}getG1Data(){return this.g1Data}}const V=Symbol("Comlink.proxy"),U=Symbol("Comlink.endpoint"),C=Symbol("Comlink.releaseProxy"),M=Symbol("Comlink.finalizer"),X=Symbol("Comlink.thrown"),de=e=>typeof e=="object"&&e!==null||typeof e=="function",se={canHandle:e=>de(e)&&e[V],serialize(e){const{port1:n,port2:t}=new MessageChannel;return we(e,n),[t,[t]]},deserialize(e){return e.start(),Xe(e)}},Q={canHandle:e=>de(e)&&X in e,serialize({value:e}){let n;return e instanceof Error?n={isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:n={isError:!1,value:e},[n,[]]},deserialize(e){throw e.isError?Object.assign(new Error(e.value.message),e.value):e.value}},ue=new Map([["proxy",se],["throw",Q]]);function _e(e,n){for(const t of e)if(n===t||t==="*"||t instanceof RegExp&&t.test(n))return!0;return!1}function we(e,n=globalThis,t=["*"]){n.addEventListener("message",function r(a){if(!a||!a.data)return;if(!_e(t,a.origin)){console.warn(`Invalid origin '${a.origin}' for comlink proxy`);return}const{id:s,type:c,path:l}=Object.assign({path:[]},a.data),d=(a.data.argumentList||[]).map(Ne);let f;try{const h=l.slice(0,-1).reduce((v,b)=>v[b],e),k=l.reduce((v,b)=>v[b],e);switch(c){case"GET":f=k;break;case"SET":h[l.slice(-1)[0]]=Ne(a.data.value),f=!0;break;case"APPLY":f=k.apply(h,d);break;case"CONSTRUCT":{const v=new k(...d);f=ge(v)}break;case"ENDPOINT":{const{port1:v,port2:b}=new MessageChannel;we(e,b),f=zn(v,[v])}break;case"RELEASE":f=void 0;break;default:return}}catch(h){f={value:h,[X]:0}}Promise.resolve(f).catch(h=>({value:h,[X]:0})).then(h=>{const[k,v]=ye(h);n.postMessage(Object.assign(Object.assign({},k),{id:s}),v),c==="RELEASE"&&(n.removeEventListener("message",r),Rt(n),M in e&&typeof e[M]=="function"&&e[M]())}).catch(h=>{const[k,v]=ye({value:new TypeError("Unserializable return value"),[X]:0});n.postMessage(Object.assign(Object.assign({},k),{id:s}),v)})}),n.start&&n.start()}function He(e){return e.constructor.name==="MessagePort"}function Rt(e){He(e)&&e.close()}function Xe(e,n){return Ut(e,[],n)}function Je(e){if(e)throw new Error("Proxy has been released and is not useable")}function ut(e){return $e(e,{type:"RELEASE"}).then(()=>{Rt(e)})}const Qe=new WeakMap,Et="FinalizationRegistry"in globalThis&&new FinalizationRegistry(e=>{const n=(Qe.get(e)||0)-1;Qe.set(e,n),n===0&&ut(e)});function ln(e,n){const t=(Qe.get(n)||0)+1;Qe.set(n,t),Et&&Et.register(e,n,e)}function un(e){Et&&Et.unregister(e)}function Ut(e,n=[],t=function(){}){let r=!1;const a=new Proxy(t,{get(s,c){if(Je(r),c===C)return()=>{un(a),ut(e),r=!0};if(c==="then"){if(n.length===0)return{then:()=>a};const l=$e(e,{type:"GET",path:n.map(d=>d.toString())}).then(Ne);return l.then.bind(l)}return Ut(e,[...n,c])},set(s,c,l){Je(r);const[d,f]=ye(l);return $e(e,{type:"SET",path:[...n,c].map(h=>h.toString()),value:d},f).then(Ne)},apply(s,c,l){Je(r);const d=n[n.length-1];if(d===U)return $e(e,{type:"ENDPOINT"}).then(Ne);if(d==="bind")return Ut(e,n.slice(0,-1));const[f,h]=fn(l);return $e(e,{type:"APPLY",path:n.map(k=>k.toString()),argumentList:f},h).then(Ne)},construct(s,c){Je(r);const[l,d]=fn(c);return $e(e,{type:"CONSTRUCT",path:n.map(f=>f.toString()),argumentList:l},d).then(Ne)}});return ln(a,e),a}function Un(e){return Array.prototype.concat.apply([],e)}function fn(e){const n=e.map(ye);return[n.map(t=>t[0]),Un(n.map(t=>t[1]))]}const pn=new WeakMap;function zn(e,n){return pn.set(e,n),e}function ge(e){return Object.assign(e,{[V]:!0})}function ye(e){for(const[n,t]of ue)if(t.canHandle(e)){const[r,a]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},a]}return[{type:"RAW",value:e},pn.get(e)||[]]}function Ne(e){switch(e.type){case"HANDLER":return ue.get(e.name).deserialize(e.value);case"RAW":return e.value}}function $e(e,n,t){return new Promise(r=>{const a=dn();e.addEventListener("message",function s(c){!c.data||!c.data.id||c.data.id!==a||(e.removeEventListener("message",s),r(c.data))}),e.start&&e.start(),e.postMessage(Object.assign({id:a},n),t)})}function dn(){return new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-")}class ke extends Uint8Array{}function hn(e){const n=new Uint8Array(1);return n[0]=e?1:0,n}function Oe(e,n=4){const t=new Uint8Array(n);return new DataView(t.buffer).setUint32(t.byteLength-4,e,!1),t}function zt(e,n=4){const t=new Uint8Array(n);return new DataView(t.buffer).setInt32(t.byteLength-4,e,!1),t}function Nt(e){const n=e.reduce((a,s)=>a+s.length,0),t=new Uint8Array(n);let r=0;for(const a of e)t.set(a,r),r+=a.length;return t}function Nn(e){return e.reduce((n,t)=>n+t.toString(16).padStart(2,"0"),"")}function Ot(e){return Nt([zt(e.length),e])}function et(e,n=32){const t=new Uint8Array(n);for(let r=0;r<n;r++)t[n-r-1]=Number(e>>BigInt(r*8)&0xffn);return t}function ft(e){return Nt([Oe(e.length),...e.flat()])}function E(e){return Array.isArray(e)?ft(e.map(E)):e instanceof ke?e:e instanceof Uint8Array?Ot(e):typeof e=="boolean"?hn(e):typeof e=="number"?Oe(e):typeof e=="bigint"?et(e):typeof e=="string"?Ot(new TextEncoder().encode(e)):e.toBuffer()}class be{constructor(n,t=0){this.buffer=n,this.index=t}static asReader(n){return n instanceof be?n:new be(n)}readNumber(){const n=new DataView(this.buffer.buffer,this.buffer.byteOffset+this.index,4);return this.index+=4,n.getUint32(0,!1)}readBoolean(){return this.index+=1,!!this.buffer.at(this.index-1)}readBytes(n){return this.index+=n,this.buffer.slice(this.index-n,this.index)}readNumberVector(){return this.readVector({fromBuffer:n=>n.readNumber()})}readVector(n){const t=this.readNumber(),r=new Array(t);for(let a=0;a<t;a++)r[a]=n.fromBuffer(this);return r}readArray(n,t){const r=new Array(n);for(let a=0;a<n;a++)r[a]=t.fromBuffer(this);return r}readObject(n){return n.fromBuffer(this)}peekBytes(n){return this.buffer.subarray(this.index,n?this.index+n:void 0)}readString(){return new TextDecoder().decode(this.readBuffer())}readBuffer(){const n=this.readNumber();return this.readBytes(n)}readMap(n){const t=this.readNumber(),r={};for(let a=0;a<t;a++){const s=this.readString(),c=this.readObject(n);r[s]=c}return r}}function le(){return{SIZE_IN_BYTES:1,fromBuffer:e=>be.asReader(e).readBoolean()}}function tt(){return{SIZE_IN_BYTES:4,fromBuffer:e=>be.asReader(e).readNumber()}}function xe(e){return{fromBuffer:n=>be.asReader(n).readVector(e)}}function he(){return{fromBuffer:e=>be.asReader(e).readBuffer()}}function pt(){return{fromBuffer:e=>be.asReader(e).readString()}}class Ae{constructor(n){this.value=n}static fromBuffer(n){const t=be.asReader(n);return new this(t.readBytes(this.SIZE_IN_BYTES))}toBuffer(){return this.value}}Ae.SIZE_IN_BYTES=4;const Ye=e=>{const t=(()=>{if(typeof window<"u"&&window.crypto)return window.crypto;if(typeof globalThis<"u"&&globalThis.crypto)return globalThis.crypto})();if(!t)throw new Error("randomBytes UnsupportedEnvironment");const r=new Uint8Array(e),a=65536;if(e>a)for(let s=0;s<e;s+=a)t.getRandomValues(r.subarray(s,s+a));else t.getRandomValues(r);return r};var mn=H(764).lW;function Ue(e){return(e.readBigUInt64BE(0)<<192n)+(e.readBigUInt64BE(8)<<128n)+(e.readBigUInt64BE(16)<<64n)+e.readBigUInt64BE(24)}function nt(e){const n=mn.from(e);return Ue(n)}function u(e,n=32){if(n!=32)throw new Error(`Only 32 bytes supported for conversion from bigint to buffer, attempted byte length: ${n}`);const t=mn.alloc(n);return t.writeBigUInt64BE(e>>192n,0),t.writeBigUInt64BE(e>>128n&0xffffffffffffffffn,8),t.writeBigUInt64BE(e>>64n&0xffffffffffffffffn,16),t.writeBigUInt64BE(e&0xffffffffffffffffn,24),t}function i(e,n=32){return new Uint8Array(u(e,n))}var o=H(764).lW,p,m;class g{constructor(n){const t=typeof n=="bigint"?n:n instanceof o?Ue(n):nt(n);if(t>p.MAX_VALUE)throw new Error(`Value 0x${t.toString(16)} is greater or equal to field modulus.`);this.value=typeof n=="bigint"?i(n):n instanceof o?new Uint8Array(n):n}static random(){const n=nt(Ye(64))%p.MODULUS;return new this(n)}static fromBuffer(n){const t=be.asReader(n);return new this(t.readBytes(this.SIZE_IN_BYTES))}static fromBufferReduce(n){const t=be.asReader(n);return new this(nt(t.readBytes(this.SIZE_IN_BYTES))%p.MODULUS)}static fromString(n){return this.fromBuffer(o.from(n.replace(/^0x/i,""),"hex"))}toBuffer(){return this.value}toString(){return"0x"+Nn(this.toBuffer())}equals(n){return this.value.every((t,r)=>t===n.value[r])}isZero(){return this.value.every(n=>n===0)}}p=g,g.ZERO=new p(0n),g.MODULUS=0x30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001n,g.MAX_VALUE=p.MODULUS-1n,g.SIZE_IN_BYTES=32;class w{constructor(n){if(this.value=n,n>m.MAX_VALUE)throw new Error(`Fq out of range ${n}.`)}static random(){const n=nt(Ye(64))%m.MODULUS;return new this(n)}static fromBuffer(n){const t=be.asReader(n);return new this(nt(t.readBytes(this.SIZE_IN_BYTES)))}static fromBufferReduce(n){const t=be.asReader(n);return new this(nt(t.readBytes(this.SIZE_IN_BYTES))%g.MODULUS)}static fromString(n){return this.fromBuffer(o.from(n.replace(/^0x/i,""),"hex"))}toBuffer(){return u(this.value,m.SIZE_IN_BYTES)}toString(){return"0x"+this.value.toString(16)}equals(n){return this.value===n.value}isZero(){return this.value===0n}}m=w,w.MODULUS=0x30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47n,w.MAX_VALUE=m.MODULUS-1n,w.SIZE_IN_BYTES=32;var Y=H(764).lW;class J{constructor(n,t){this.x=n,this.y=t}static random(){return new J(g.random(),g.random())}static fromBuffer(n){const t=be.asReader(n);return new this(g.fromBuffer(t),g.fromBuffer(t))}static fromString(n){return J.fromBuffer(Y.from(n.replace(/^0x/i,""),"hex"))}toBuffer(){return Y.concat([this.x.toBuffer(),this.y.toBuffer()])}toString(){return"0x"+this.toBuffer().toString("hex")}equals(n){return this.x.equals(n.x)&&this.y.equals(n.y)}}J.SIZE_IN_BYTES=64,J.EMPTY=new J(g.ZERO,g.ZERO);class K{constructor(n){this.buffer=n}static fromBuffer(n){const t=be.asReader(n);return new K(t.readBytes(this.SIZE_IN_BYTES))}static random(){return new K(Ye(this.SIZE_IN_BYTES))}toBuffer(){return this.buffer}}K.SIZE_IN_BYTES=32;class re{constructor(n){this.buffer=n}static fromBuffer(n){const t=be.asReader(n);return new re(t.readBytes(this.SIZE_IN_BYTES))}static random(){return new re(Ye(this.SIZE_IN_BYTES))}toBuffer(){return this.buffer}}re.SIZE_IN_BYTES=128;function oe(e,n=!1){const t=new DataView(e.buffer,e.byteOffset,e.byteLength);let r=0,a=e.byteLength>>>2;n&&(a=t.getUint32(0,!1),r=4);const s=new Array(a);for(let c=0;c<a;c++)s[c]=t.getUint32(r,!1),r+=4;return s}class gi{constructor(n){this.wasm=n}async pedersenCommit(n,t){const r=[n,t].map(E),a=[J];return(await this.wasm.callWasmExport("pedersen_commit",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async pedersenHash(n,t){const r=[n,t].map(E),a=[g];return(await this.wasm.callWasmExport("pedersen_hash",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async pedersenHashes(n,t){const r=[n,t].map(E),a=[g];return(await this.wasm.callWasmExport("pedersen_hashes",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async pedersenHashBuffer(n,t){const r=[n,t].map(E),a=[g];return(await this.wasm.callWasmExport("pedersen_hash_buffer",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async poseidon2Hash(n){const t=[n].map(E),r=[g];return(await this.wasm.callWasmExport("poseidon2_hash",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async poseidon2HashAccumulate(n){const t=[n].map(E),r=[g];return(await this.wasm.callWasmExport("poseidon2_hash_accumulate",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async poseidon2Hashes(n){const t=[n].map(E),r=[g];return(await this.wasm.callWasmExport("poseidon2_hashes",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async poseidon2Permutation(n){const t=[n].map(E),r=[xe(g)];return(await this.wasm.callWasmExport("poseidon2_permutation",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async blake2s(n){const t=[n].map(E),r=[K];return(await this.wasm.callWasmExport("blake2s",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async blake2sToField(n){const t=[n].map(E),r=[g];return(await this.wasm.callWasmExport("blake2s_to_field_",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async schnorrComputePublicKey(n){const t=[n].map(E),r=[J];return(await this.wasm.callWasmExport("schnorr_compute_public_key",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async schnorrNegatePublicKey(n){const t=[n].map(E),r=[J];return(await this.wasm.callWasmExport("schnorr_negate_public_key",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async schnorrConstructSignature(n,t){const r=[n,t].map(E),a=[K,K];return(await this.wasm.callWasmExport("schnorr_construct_signature",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))}async schnorrVerifySignature(n,t,r,a){const s=[n,t,r,a].map(E),c=[le()];return(await this.wasm.callWasmExport("schnorr_verify_signature",s,c.map(f=>f.SIZE_IN_BYTES))).map((f,h)=>c[h].fromBuffer(f))[0]}async schnorrMultisigCreateMultisigPublicKey(n){const t=[n].map(E),r=[re];return(await this.wasm.callWasmExport("schnorr_multisig_create_multisig_public_key",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async schnorrMultisigValidateAndCombineSignerPubkeys(n){const t=[n].map(E),r=[J,le()];return(await this.wasm.callWasmExport("schnorr_multisig_validate_and_combine_signer_pubkeys",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))}async schnorrMultisigConstructSignatureRound1(){const n=[].map(E),t=[re,re];return(await this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_1",n,t.map(s=>s.SIZE_IN_BYTES))).map((s,c)=>t[c].fromBuffer(s))}async schnorrMultisigConstructSignatureRound2(n,t,r,a,s){const c=[n,t,r,a,s].map(E),l=[w,le()];return(await this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_2",c,l.map(h=>h.SIZE_IN_BYTES))).map((h,k)=>l[k].fromBuffer(h))}async schnorrMultisigCombineSignatures(n,t,r,a){const s=[n,t,r,a].map(E),c=[K,K,le()];return(await this.wasm.callWasmExport("schnorr_multisig_combine_signatures",s,c.map(f=>f.SIZE_IN_BYTES))).map((f,h)=>c[h].fromBuffer(f))}async aesEncryptBufferCbc(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return(await this.wasm.callWasmExport("aes_encrypt_buffer_cbc",s,c.map(f=>f.SIZE_IN_BYTES))).map((f,h)=>c[h].fromBuffer(f))[0]}async aesDecryptBufferCbc(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return(await this.wasm.callWasmExport("aes_decrypt_buffer_cbc",s,c.map(f=>f.SIZE_IN_BYTES))).map((f,h)=>c[h].fromBuffer(f))[0]}async srsInitSrs(n,t,r){const a=[n,t,r].map(E),s=[];(await this.wasm.callWasmExport("srs_init_srs",a,s.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>s[d].fromBuffer(l))}async srsInitGrumpkinSrs(n,t){const r=[n,t].map(E),a=[];(await this.wasm.callWasmExport("srs_init_grumpkin_srs",r,a.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>a[l].fromBuffer(c))}async examplesSimpleCreateAndVerifyProof(){const n=[].map(E),t=[le()];return(await this.wasm.callWasmExport("examples_simple_create_and_verify_proof",n,t.map(s=>s.SIZE_IN_BYTES))).map((s,c)=>t[c].fromBuffer(s))[0]}async testThreads(n,t){const r=[n,t].map(E),a=[tt()];return(await this.wasm.callWasmExport("test_threads",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async commonInitSlabAllocator(n){const t=[n].map(E),r=[];(await this.wasm.callWasmExport("common_init_slab_allocator",t,r.map(s=>s.SIZE_IN_BYTES))).map((s,c)=>r[c].fromBuffer(s))}async acirGetCircuitSizes(n,t,r){const a=[n,t,r].map(E),s=[tt(),tt()];return(await this.wasm.callWasmExport("acir_get_circuit_sizes",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))}async acirGatesAztecClient(n){const t=[n].map(E),r=[he()],a=await this.wasm.callWasmExport("acir_gates_aztec_client",t,r.map(s=>s.SIZE_IN_BYTES));return oe(a[0],!0)}async acirNewAcirComposer(n){const t=[n].map(E),r=[Ae];return(await this.wasm.callWasmExport("acir_new_acir_composer",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async acirDeleteAcirComposer(n){const t=[n].map(E),r=[];(await this.wasm.callWasmExport("acir_delete_acir_composer",t,r.map(s=>s.SIZE_IN_BYTES))).map((s,c)=>r[c].fromBuffer(s))}async acirInitProvingKey(n,t,r){const a=[n,t,r].map(E),s=[];(await this.wasm.callWasmExport("acir_init_proving_key",a,s.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>s[d].fromBuffer(l))}async acirCreateProof(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return(await this.wasm.callWasmExport("acir_create_proof",s,c.map(f=>f.SIZE_IN_BYTES))).map((f,h)=>c[h].fromBuffer(f))[0]}async acirProveAndVerifyUltraHonk(n,t,r){const a=[n,t,r].map(E),s=[le()];return(await this.wasm.callWasmExport("acir_prove_and_verify_ultra_honk",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirProveAndVerifyMegaHonk(n,t,r){const a=[n,t,r].map(E),s=[le()];return(await this.wasm.callWasmExport("acir_prove_and_verify_mega_honk",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirFoldAndVerifyProgramStack(n,t,r){const a=[n,t,r].map(E),s=[le()];return(await this.wasm.callWasmExport("acir_fold_and_verify_program_stack",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirLoadVerificationKey(n,t){const r=[n,t].map(E),a=[];(await this.wasm.callWasmExport("acir_load_verification_key",r,a.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>a[l].fromBuffer(c))}async acirInitVerificationKey(n){const t=[n].map(E),r=[];(await this.wasm.callWasmExport("acir_init_verification_key",t,r.map(s=>s.SIZE_IN_BYTES))).map((s,c)=>r[c].fromBuffer(s))}async acirGetVerificationKey(n){const t=[n].map(E),r=[he()];return(await this.wasm.callWasmExport("acir_get_verification_key",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async acirGetProvingKey(n,t,r){const a=[n,t,r].map(E),s=[he()];return(await this.wasm.callWasmExport("acir_get_proving_key",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirVerifyProof(n,t){const r=[n,t].map(E),a=[le()];return(await this.wasm.callWasmExport("acir_verify_proof",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirGetSolidityVerifier(n){const t=[n].map(E),r=[pt()];return(await this.wasm.callWasmExport("acir_get_solidity_verifier",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async acirSerializeProofIntoFields(n,t,r){const a=[n,t,r].map(E),s=[xe(g)];return(await this.wasm.callWasmExport("acir_serialize_proof_into_fields",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirSerializeVerificationKeyIntoFields(n){const t=[n].map(E),r=[xe(g),g];return(await this.wasm.callWasmExport("acir_serialize_verification_key_into_fields",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))}async acirProveAndVerifyAztecClient(n,t){const r=[n,t].map(E),a=[le()];return(await this.wasm.callWasmExport("acir_prove_and_verify_aztec_client",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirProveAztecClient(n,t){const r=[n,t].map(E),a=[he(),he()],c=(await this.wasm.callWasmExport("acir_prove_aztec_client",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l));return[c[0],c[1]]}async acirVerifyAztecClient(n,t){const r=[n,t].map(E),a=[le()];return(await this.wasm.callWasmExport("acir_verify_aztec_client",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirProveUltraHonk(n,t,r){const a=[n,t,r].map(E),s=[he()];return(await this.wasm.callWasmExport("acir_prove_ultra_honk",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirProveUltraKeccakHonk(n,t,r){const a=[n,t,r].map(E),s=[he()];return(await this.wasm.callWasmExport("acir_prove_ultra_keccak_honk",a,s.map(d=>d.SIZE_IN_BYTES))).map((d,f)=>s[f].fromBuffer(d))[0]}async acirVerifyUltraHonk(n,t){const r=[n,t].map(E),a=[le()];return(await this.wasm.callWasmExport("acir_verify_ultra_honk",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirVerifyUltraKeccakHonk(n,t){const r=[n,t].map(E),a=[le()];return(await this.wasm.callWasmExport("acir_verify_ultra_keccak_honk",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirWriteVkUltraHonk(n,t){const r=[n,t].map(E),a=[he()];return(await this.wasm.callWasmExport("acir_write_vk_ultra_honk",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirWriteVkUltraKeccakHonk(n,t){const r=[n,t].map(E),a=[he()];return(await this.wasm.callWasmExport("acir_write_vk_ultra_keccak_honk",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirHonkSolidityVerifier(n,t){const r=[n,t].map(E),a=[he()];return(await this.wasm.callWasmExport("acir_honk_solidity_verifier",r,a.map(l=>l.SIZE_IN_BYTES))).map((l,d)=>a[d].fromBuffer(l))[0]}async acirProofAsFieldsUltraHonk(n){const t=[n].map(E),r=[xe(g)];return(await this.wasm.callWasmExport("acir_proof_as_fields_ultra_honk",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async acirVkAsFieldsUltraHonk(n){const t=[n].map(E),r=[xe(g)];return(await this.wasm.callWasmExport("acir_vk_as_fields_ultra_honk",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}async acirVkAsFieldsMegaHonk(n){const t=[n].map(E),r=[xe(g)];return(await this.wasm.callWasmExport("acir_vk_as_fields_mega_honk",t,r.map(c=>c.SIZE_IN_BYTES))).map((c,l)=>r[l].fromBuffer(c))[0]}}class _i{constructor(n){this.wasm=n}pedersenCommit(n,t){const r=[n,t].map(E),a=[J];return this.wasm.callWasmExport("pedersen_commit",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}pedersenHash(n,t){const r=[n,t].map(E),a=[g];return this.wasm.callWasmExport("pedersen_hash",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}pedersenHashes(n,t){const r=[n,t].map(E),a=[g];return this.wasm.callWasmExport("pedersen_hashes",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}pedersenHashBuffer(n,t){const r=[n,t].map(E),a=[g];return this.wasm.callWasmExport("pedersen_hash_buffer",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}poseidon2Hash(n){const t=[n].map(E),r=[g];return this.wasm.callWasmExport("poseidon2_hash",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}poseidon2HashAccumulate(n){const t=[n].map(E),r=[g];return this.wasm.callWasmExport("poseidon2_hash_accumulate",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}poseidon2Hashes(n){const t=[n].map(E),r=[g];return this.wasm.callWasmExport("poseidon2_hashes",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}poseidon2Permutation(n){const t=[n].map(E),r=[xe(g)];return this.wasm.callWasmExport("poseidon2_permutation",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}blake2s(n){const t=[n].map(E),r=[K];return this.wasm.callWasmExport("blake2s",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}blake2sToField(n){const t=[n].map(E),r=[g];return this.wasm.callWasmExport("blake2s_to_field_",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}schnorrComputePublicKey(n){const t=[n].map(E),r=[J];return this.wasm.callWasmExport("schnorr_compute_public_key",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}schnorrNegatePublicKey(n){const t=[n].map(E),r=[J];return this.wasm.callWasmExport("schnorr_negate_public_key",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}schnorrConstructSignature(n,t){const r=[n,t].map(E),a=[K,K];return this.wasm.callWasmExport("schnorr_construct_signature",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))}schnorrVerifySignature(n,t,r,a){const s=[n,t,r,a].map(E),c=[le()];return this.wasm.callWasmExport("schnorr_verify_signature",s,c.map(f=>f.SIZE_IN_BYTES)).map((f,h)=>c[h].fromBuffer(f))[0]}schnorrMultisigCreateMultisigPublicKey(n){const t=[n].map(E),r=[re];return this.wasm.callWasmExport("schnorr_multisig_create_multisig_public_key",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}schnorrMultisigValidateAndCombineSignerPubkeys(n){const t=[n].map(E),r=[J,le()];return this.wasm.callWasmExport("schnorr_multisig_validate_and_combine_signer_pubkeys",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))}schnorrMultisigConstructSignatureRound1(){const n=[].map(E),t=[re,re];return this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_1",n,t.map(s=>s.SIZE_IN_BYTES)).map((s,c)=>t[c].fromBuffer(s))}schnorrMultisigConstructSignatureRound2(n,t,r,a,s){const c=[n,t,r,a,s].map(E),l=[w,le()];return this.wasm.callWasmExport("schnorr_multisig_construct_signature_round_2",c,l.map(h=>h.SIZE_IN_BYTES)).map((h,k)=>l[k].fromBuffer(h))}schnorrMultisigCombineSignatures(n,t,r,a){const s=[n,t,r,a].map(E),c=[K,K,le()];return this.wasm.callWasmExport("schnorr_multisig_combine_signatures",s,c.map(f=>f.SIZE_IN_BYTES)).map((f,h)=>c[h].fromBuffer(f))}aesEncryptBufferCbc(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return this.wasm.callWasmExport("aes_encrypt_buffer_cbc",s,c.map(f=>f.SIZE_IN_BYTES)).map((f,h)=>c[h].fromBuffer(f))[0]}aesDecryptBufferCbc(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return this.wasm.callWasmExport("aes_decrypt_buffer_cbc",s,c.map(f=>f.SIZE_IN_BYTES)).map((f,h)=>c[h].fromBuffer(f))[0]}srsInitSrs(n,t,r){const a=[n,t,r].map(E),s=[];this.wasm.callWasmExport("srs_init_srs",a,s.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>s[d].fromBuffer(l))}srsInitGrumpkinSrs(n,t){const r=[n,t].map(E),a=[];this.wasm.callWasmExport("srs_init_grumpkin_srs",r,a.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>a[l].fromBuffer(c))}examplesSimpleCreateAndVerifyProof(){const n=[].map(E),t=[le()];return this.wasm.callWasmExport("examples_simple_create_and_verify_proof",n,t.map(s=>s.SIZE_IN_BYTES)).map((s,c)=>t[c].fromBuffer(s))[0]}testThreads(n,t){const r=[n,t].map(E),a=[tt()];return this.wasm.callWasmExport("test_threads",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}commonInitSlabAllocator(n){const t=[n].map(E),r=[];this.wasm.callWasmExport("common_init_slab_allocator",t,r.map(s=>s.SIZE_IN_BYTES)).map((s,c)=>r[c].fromBuffer(s))}acirGetCircuitSizes(n,t,r){const a=[n,t,r].map(E),s=[tt(),tt()];return this.wasm.callWasmExport("acir_get_circuit_sizes",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))}acirNewAcirComposer(n){const t=[n].map(E),r=[Ae];return this.wasm.callWasmExport("acir_new_acir_composer",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}acirDeleteAcirComposer(n){const t=[n].map(E),r=[];this.wasm.callWasmExport("acir_delete_acir_composer",t,r.map(s=>s.SIZE_IN_BYTES)).map((s,c)=>r[c].fromBuffer(s))}acirInitProvingKey(n,t,r){const a=[n,t,r].map(E),s=[];this.wasm.callWasmExport("acir_init_proving_key",a,s.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>s[d].fromBuffer(l))}acirCreateProof(n,t,r,a){const s=[n,t,r,a].map(E),c=[he()];return this.wasm.callWasmExport("acir_create_proof",s,c.map(f=>f.SIZE_IN_BYTES)).map((f,h)=>c[h].fromBuffer(f))[0]}acirProveAndVerifyUltraHonk(n,t,r){const a=[n,t,r].map(E),s=[le()];return this.wasm.callWasmExport("acir_prove_and_verify_ultra_honk",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirProveAndVerifyMegaHonk(n,t,r){const a=[n,t,r].map(E),s=[le()];return this.wasm.callWasmExport("acir_prove_and_verify_mega_honk",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirFoldAndVerifyProgramStack(n,t,r){const a=[n,t,r].map(E),s=[le()];return this.wasm.callWasmExport("acir_fold_and_verify_program_stack",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirLoadVerificationKey(n,t){const r=[n,t].map(E),a=[];this.wasm.callWasmExport("acir_load_verification_key",r,a.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>a[l].fromBuffer(c))}acirInitVerificationKey(n){const t=[n].map(E),r=[];this.wasm.callWasmExport("acir_init_verification_key",t,r.map(s=>s.SIZE_IN_BYTES)).map((s,c)=>r[c].fromBuffer(s))}acirGetVerificationKey(n){const t=[n].map(E),r=[he()];return this.wasm.callWasmExport("acir_get_verification_key",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}acirGetProvingKey(n,t,r){const a=[n,t,r].map(E),s=[he()];return this.wasm.callWasmExport("acir_get_proving_key",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirVerifyProof(n,t){const r=[n,t].map(E),a=[le()];return this.wasm.callWasmExport("acir_verify_proof",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}acirGetSolidityVerifier(n){const t=[n].map(E),r=[pt()];return this.wasm.callWasmExport("acir_get_solidity_verifier",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}acirSerializeProofIntoFields(n,t,r){const a=[n,t,r].map(E),s=[xe(g)];return this.wasm.callWasmExport("acir_serialize_proof_into_fields",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirSerializeVerificationKeyIntoFields(n){const t=[n].map(E),r=[xe(g),g];return this.wasm.callWasmExport("acir_serialize_verification_key_into_fields",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))}acirProveUltraHonk(n,t,r){const a=[n,t,r].map(E),s=[he()];return this.wasm.callWasmExport("acir_prove_ultra_honk",a,s.map(d=>d.SIZE_IN_BYTES)).map((d,f)=>s[f].fromBuffer(d))[0]}acirVerifyUltraHonk(n,t){const r=[n,t].map(E),a=[le()];return this.wasm.callWasmExport("acir_verify_ultra_honk",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}acirWriteVkUltraHonk(n,t){const r=[n,t].map(E),a=[he()];return this.wasm.callWasmExport("acir_write_vk_ultra_honk",r,a.map(l=>l.SIZE_IN_BYTES)).map((l,d)=>a[d].fromBuffer(l))[0]}acirProofAsFieldsUltraHonk(n){const t=[n].map(E),r=[xe(g)];return this.wasm.callWasmExport("acir_proof_as_fields_ultra_honk",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}acirVkAsFieldsUltraHonk(n){const t=[n].map(E),r=[xe(g)];return this.wasm.callWasmExport("acir_vk_as_fields_ultra_honk",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}acirVkAsFieldsMegaHonk(n){const t=[n].map(E),r=[xe(g)];return this.wasm.callWasmExport("acir_vk_as_fields_mega_honk",t,r.map(c=>c.SIZE_IN_BYTES)).map((c,l)=>r[l].fromBuffer(c))[0]}}var wi=H(227),Pe=H.n(wi),yi=H(477),Ar=H.n(yi);function bi(){return Ar()(`/*! For license information please see main.worker.worker.js.LICENSE.txt */
var __webpack_modules__ = {
    227: (module, exports, __webpack_require__) => {
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        exports.destroy = (() => {
            let warned = false;
            return () => {
                if (!warned) {
                    warned = true;
                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
                }
            };
        })();
        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
        function useColors() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
                return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {
                return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);
        }
        function formatArgs(args) {
            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
            if (!this.useColors) {
                return;
            }
            const c = "color: " + this.color;
            args.splice(1, 0, c, "color: inherit");
            let index = 0;
            let lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, (match => {
                if (match === "%%") {
                    return;
                }
                index++;
                if (match === "%c") {
                    lastC = index;
                }
            }));
            args.splice(lastC, 0, c);
        }
        exports.log = console.debug || console.log || (() => {});
        function save(namespaces) {
            try {
                if (namespaces) {
                    exports.storage.setItem("debug", namespaces);
                } else {
                    exports.storage.removeItem("debug");
                }
            } catch (error) {}
        }
        function load() {
            let r;
            try {
                r = exports.storage.getItem("debug");
            } catch (error) {}
            if (!r && typeof process !== "undefined" && "env" in process) {
                r = process.env.DEBUG;
            }
            return r;
        }
        function localstorage() {
            try {
                return localStorage;
            } catch (error) {}
        }
        module.exports = __webpack_require__(447)(exports);
        const {formatters} = module.exports;
        formatters.j = function(v) {
            try {
                return JSON.stringify(v);
            } catch (error) {
                return "[UnexpectedJSONParseError]: " + error.message;
            }
        };
    },
    447: (module, __unused_webpack_exports, __webpack_require__) => {
        function setup(env) {
            createDebug.debug = createDebug;
            createDebug.default = createDebug;
            createDebug.coerce = coerce;
            createDebug.disable = disable;
            createDebug.enable = enable;
            createDebug.enabled = enabled;
            createDebug.humanize = __webpack_require__(824);
            createDebug.destroy = destroy;
            Object.keys(env).forEach((key => {
                createDebug[key] = env[key];
            }));
            createDebug.names = [];
            createDebug.skips = [];
            createDebug.formatters = {};
            function selectColor(namespace) {
                let hash = 0;
                for (let i = 0; i < namespace.length; i++) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0;
                }
                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
            }
            createDebug.selectColor = selectColor;
            function createDebug(namespace) {
                let prevTime;
                let enableOverride = null;
                let namespacesCache;
                let enabledCache;
                function debug(...args) {
                    if (!debug.enabled) {
                        return;
                    }
                    const self = debug;
                    const curr = Number(new Date);
                    const ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    args[0] = createDebug.coerce(args[0]);
                    if (typeof args[0] !== "string") {
                        args.unshift("%O");
                    }
                    let index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                        if (match === "%%") {
                            return "%";
                        }
                        index++;
                        const formatter = createDebug.formatters[format];
                        if (typeof formatter === "function") {
                            const val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    }));
                    createDebug.formatArgs.call(self, args);
                    const logFn = self.log || createDebug.log;
                    logFn.apply(self, args);
                }
                debug.namespace = namespace;
                debug.useColors = createDebug.useColors();
                debug.color = createDebug.selectColor(namespace);
                debug.extend = extend;
                debug.destroy = createDebug.destroy;
                Object.defineProperty(debug, "enabled", {
                    enumerable: true,
                    configurable: false,
                    get: () => {
                        if (enableOverride !== null) {
                            return enableOverride;
                        }
                        if (namespacesCache !== createDebug.namespaces) {
                            namespacesCache = createDebug.namespaces;
                            enabledCache = createDebug.enabled(namespace);
                        }
                        return enabledCache;
                    },
                    set: v => {
                        enableOverride = v;
                    }
                });
                if (typeof createDebug.init === "function") {
                    createDebug.init(debug);
                }
                return debug;
            }
            function extend(namespace, delimiter) {
                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
                newDebug.log = this.log;
                return newDebug;
            }
            function enable(namespaces) {
                createDebug.save(namespaces);
                createDebug.namespaces = namespaces;
                createDebug.names = [];
                createDebug.skips = [];
                let i;
                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\s,]+/);
                const len = split.length;
                for (i = 0; i < len; i++) {
                    if (!split[i]) {
                        continue;
                    }
                    namespaces = split[i].replace(/\\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
                    } else {
                        createDebug.names.push(new RegExp("^" + namespaces + "$"));
                    }
                }
            }
            function disable() {
                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                createDebug.enable("");
                return namespaces;
            }
            function enabled(name) {
                if (name[name.length - 1] === "*") {
                    return true;
                }
                let i;
                let len;
                for (i = 0, len = createDebug.skips.length; i < len; i++) {
                    if (createDebug.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = createDebug.names.length; i < len; i++) {
                    if (createDebug.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function toNamespace(regexp) {
                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\.\\*\\?$/, "*");
            }
            function coerce(val) {
                if (val instanceof Error) {
                    return val.stack || val.message;
                }
                return val;
            }
            function destroy() {
                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
            }
            createDebug.enable(createDebug.load());
            return createDebug;
        }
        module.exports = setup;
    },
    824: module => {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var y = d * 365.25;
        module.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
                return parse(val);
            } else if (type === "number" && isFinite(val)) {
                return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
            str = String(str);
            if (str.length > 100) {
                return;
            }
            var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
            if (!match) {
                return;
            }
            var n = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * y;

              case "weeks":
              case "week":
              case "w":
                return n * w;

              case "days":
              case "day":
              case "d":
                return n * d;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * h;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * m;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * s;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;

              default:
                return undefined;
            }
        }
        function fmtShort(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return Math.round(ms / d) + "d";
            }
            if (msAbs >= h) {
                return Math.round(ms / h) + "h";
            }
            if (msAbs >= m) {
                return Math.round(ms / m) + "m";
            }
            if (msAbs >= s) {
                return Math.round(ms / s) + "s";
            }
            return ms + "ms";
        }
        function fmtLong(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return plural(ms, msAbs, d, "day");
            }
            if (msAbs >= h) {
                return plural(ms, msAbs, h, "hour");
            }
            if (msAbs >= m) {
                return plural(ms, msAbs, m, "minute");
            }
            if (msAbs >= s) {
                return plural(ms, msAbs, s, "second");
            }
            return ms + " ms";
        }
        function plural(ms, msAbs, n, name) {
            var isPlural = msAbs >= n * 1.5;
            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
        }
    },
    477: module => {
        module.exports = function(content, workerConstructor, workerOptions, url) {
            var globalScope = self || window;
            try {
                try {
                    var blob;
                    try {
                        blob = new globalScope.Blob([ content ]);
                    } catch (e) {
                        var BlobBuilder = globalScope.BlobBuilder || globalScope.WebKitBlobBuilder || globalScope.MozBlobBuilder || globalScope.MSBlobBuilder;
                        blob = new BlobBuilder;
                        blob.append(content);
                        blob = blob.getBlob();
                    }
                    var URL = globalScope.URL || globalScope.webkitURL;
                    var objectURL = URL.createObjectURL(blob);
                    var worker = new globalScope[workerConstructor](objectURL, workerOptions);
                    URL.revokeObjectURL(objectURL);
                    return worker;
                } catch (e) {
                    return new globalScope[workerConstructor]("data:application/javascript,".concat(encodeURIComponent(content)), workerOptions);
                }
            } catch (e) {
                if (!url) {
                    throw Error("Inline worker is not supported");
                }
                return new globalScope[workerConstructor](url, workerOptions);
            }
        };
    }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}

(() => {
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module["default"] : () => module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();

(() => {
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };
})();

(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

var __webpack_exports__ = {};

(() => {
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const finalizer = Symbol("Comlink.finalizer");
    const throwMarker = Symbol("Comlink.thrown");
    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";
    const proxyTransferHandler = {
        canHandle: val => isObject(val) && val[proxyMarker],
        serialize(obj) {
            const {port1, port2} = new MessageChannel;
            expose(obj, port1);
            return [ port2, [ port2 ] ];
        },
        deserialize(port) {
            port.start();
            return wrap(port);
        }
    };
    const throwTransferHandler = {
        canHandle: value => isObject(value) && throwMarker in value,
        serialize({value}) {
            let serialized;
            if (value instanceof Error) {
                serialized = {
                    isError: true,
                    value: {
                        message: value.message,
                        name: value.name,
                        stack: value.stack
                    }
                };
            } else {
                serialized = {
                    isError: false,
                    value
                };
            }
            return [ serialized, [] ];
        },
        deserialize(serialized) {
            if (serialized.isError) {
                throw Object.assign(new Error(serialized.value.message), serialized.value);
            }
            throw serialized.value;
        }
    };
    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);
    function isAllowedOrigin(allowedOrigins, origin) {
        for (const allowedOrigin of allowedOrigins) {
            if (origin === allowedOrigin || allowedOrigin === "*") {
                return true;
            }
            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
                return true;
            }
        }
        return false;
    }
    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {
        ep.addEventListener("message", (function callback(ev) {
            if (!ev || !ev.data) {
                return;
            }
            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
                console.warn(\`Invalid origin '\${ev.origin}' for comlink proxy\`);
                return;
            }
            const {id, type, path} = Object.assign({
                path: []
            }, ev.data);
            const argumentList = (ev.data.argumentList || []).map(fromWireValue);
            let returnValue;
            try {
                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);
                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);
                switch (type) {
                  case "GET":
                    {
                        returnValue = rawValue;
                    }
                    break;

                  case "SET":
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;

                  case "APPLY":
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;

                  case "CONSTRUCT":
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;

                  case "ENDPOINT":
                    {
                        const {port1, port2} = new MessageChannel;
                        expose(obj, port2);
                        returnValue = transfer(port1, [ port1 ]);
                    }
                    break;

                  case "RELEASE":
                    {
                        returnValue = undefined;
                    }
                    break;

                  default:
                    return;
                }
            } catch (value) {
                returnValue = {
                    value,
                    [throwMarker]: 0
                };
            }
            Promise.resolve(returnValue).catch((value => ({
                value,
                [throwMarker]: 0
            }))).then((returnValue => {
                const [wireValue, transferables] = toWireValue(returnValue);
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
                if (type === "RELEASE") {
                    ep.removeEventListener("message", callback);
                    closeEndPoint(ep);
                    if (finalizer in obj && typeof obj[finalizer] === "function") {
                        obj[finalizer]();
                    }
                }
            })).catch((error => {
                const [wireValue, transferables] = toWireValue({
                    value: new TypeError("Unserializable return value"),
                    [throwMarker]: 0
                });
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
            }));
        }));
        if (ep.start) {
            ep.start();
        }
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function closeEndPoint(endpoint) {
        if (isMessagePort(endpoint)) endpoint.close();
    }
    function wrap(ep, target) {
        return createProxy(ep, [], target);
    }
    function throwIfProxyReleased(isReleased) {
        if (isReleased) {
            throw new Error("Proxy has been released and is not useable");
        }
    }
    function releaseEndpoint(ep) {
        return requestResponseMessage(ep, {
            type: "RELEASE"
        }).then((() => {
            closeEndPoint(ep);
        }));
    }
    const proxyCounter = new WeakMap;
    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    }));
    function registerProxy(proxy, ep) {
        const newCount = (proxyCounter.get(ep) || 0) + 1;
        proxyCounter.set(ep, newCount);
        if (proxyFinalizers) {
            proxyFinalizers.register(proxy, ep, proxy);
        }
    }
    function unregisterProxy(proxy) {
        if (proxyFinalizers) {
            proxyFinalizers.unregister(proxy);
        }
    }
    function createProxy(ep, path = [], target = function() {}) {
        let isProxyReleased = false;
        const proxy = new Proxy(target, {
            get(_target, prop) {
                throwIfProxyReleased(isProxyReleased);
                if (prop === releaseProxy) {
                    return () => {
                        unregisterProxy(proxy);
                        releaseEndpoint(ep);
                        isProxyReleased = true;
                    };
                }
                if (prop === "then") {
                    if (path.length === 0) {
                        return {
                            then: () => proxy
                        };
                    }
                    const r = requestResponseMessage(ep, {
                        type: "GET",
                        path: path.map((p => p.toString()))
                    }).then(fromWireValue);
                    return r.then.bind(r);
                }
                return createProxy(ep, [ ...path, prop ]);
            },
            set(_target, prop, rawValue) {
                throwIfProxyReleased(isProxyReleased);
                const [value, transferables] = toWireValue(rawValue);
                return requestResponseMessage(ep, {
                    type: "SET",
                    path: [ ...path, prop ].map((p => p.toString())),
                    value
                }, transferables).then(fromWireValue);
            },
            apply(_target, _thisArg, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const last = path[path.length - 1];
                if (last === createEndpoint) {
                    return requestResponseMessage(ep, {
                        type: "ENDPOINT"
                    }).then(fromWireValue);
                }
                if (last === "bind") {
                    return createProxy(ep, path.slice(0, -1));
                }
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "APPLY",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            },
            construct(_target, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "CONSTRUCT",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            }
        });
        registerProxy(proxy, ep);
        return proxy;
    }
    function myFlat(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function processArguments(argumentList) {
        const processed = argumentList.map(toWireValue);
        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];
    }
    const transferCache = new WeakMap;
    function transfer(obj, transfers) {
        transferCache.set(obj, transfers);
        return obj;
    }
    function proxy(obj) {
        return Object.assign(obj, {
            [proxyMarker]: true
        });
    }
    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
        return {
            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
            addEventListener: context.addEventListener.bind(context),
            removeEventListener: context.removeEventListener.bind(context)
        };
    }
    function toWireValue(value) {
        for (const [name, handler] of transferHandlers) {
            if (handler.canHandle(value)) {
                const [serializedValue, transferables] = handler.serialize(value);
                return [ {
                    type: "HANDLER",
                    name,
                    value: serializedValue
                }, transferables ];
            }
        }
        return [ {
            type: "RAW",
            value
        }, transferCache.get(value) || [] ];
    }
    function fromWireValue(value) {
        switch (value.type) {
          case "HANDLER":
            return transferHandlers.get(value.name).deserialize(value.value);

          case "RAW":
            return value.value;
        }
    }
    function requestResponseMessage(ep, msg, transfers) {
        return new Promise((resolve => {
            const id = generateUUID();
            ep.addEventListener("message", (function l(ev) {
                if (!ev.data || !ev.data.id || ev.data.id !== id) {
                    return;
                }
                ep.removeEventListener("message", l);
                resolve(ev.data);
            }));
            if (ep.start) {
                ep.start();
            }
            ep.postMessage(Object.assign({
                id
            }, msg), transfers);
        }));
    }
    function generateUUID() {
        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");
    }
    var browser = __webpack_require__(227);
    var browser_default = __webpack_require__.n(browser);
    function getSharedMemoryAvailable() {
        const globalScope = typeof window !== "undefined" ? window : globalThis;
        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;
    }
    function getRemoteBarretenbergWasm(worker) {
        return wrap(worker);
    }
    function getNumCpu() {
        return navigator.hardwareConcurrency;
    }
    function threadLogger() {
        return undefined;
    }
    function killSelf() {
        self.close();
    }
    var inline = __webpack_require__(477);
    var inline_default = __webpack_require__.n(inline);
    function Worker_fn() {
        return inline_default()('/*! For license information please see thread.worker.worker.worker.js.LICENSE.txt */\\nvar __webpack_modules__ = {\\n    227: (module, exports, __webpack_require__) => {\\n        exports.formatArgs = formatArgs;\\n        exports.save = save;\\n        exports.load = load;\\n        exports.useColors = useColors;\\n        exports.storage = localstorage();\\n        exports.destroy = (() => {\\n            let warned = false;\\n            return () => {\\n                if (!warned) {\\n                    warned = true;\\n                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");\\n                }\\n            };\\n        })();\\n        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];\\n        function useColors() {\\n            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {\\n                return true;\\n            }\\n            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\\\/(\\\\d+)/)) {\\n                return false;\\n            }\\n            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\\\/(\\\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\\\/(\\\\d+)/);\\n        }\\n        function formatArgs(args) {\\n            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);\\n            if (!this.useColors) {\\n                return;\\n            }\\n            const c = "color: " + this.color;\\n            args.splice(1, 0, c, "color: inherit");\\n            let index = 0;\\n            let lastC = 0;\\n            args[0].replace(/%[a-zA-Z%]/g, (match => {\\n                if (match === "%%") {\\n                    return;\\n                }\\n                index++;\\n                if (match === "%c") {\\n                    lastC = index;\\n                }\\n            }));\\n            args.splice(lastC, 0, c);\\n        }\\n        exports.log = console.debug || console.log || (() => {});\\n        function save(namespaces) {\\n            try {\\n                if (namespaces) {\\n                    exports.storage.setItem("debug", namespaces);\\n                } else {\\n                    exports.storage.removeItem("debug");\\n                }\\n            } catch (error) {}\\n        }\\n        function load() {\\n            let r;\\n            try {\\n                r = exports.storage.getItem("debug");\\n            } catch (error) {}\\n            if (!r && typeof process !== "undefined" && "env" in process) {\\n                r = process.env.DEBUG;\\n            }\\n            return r;\\n        }\\n        function localstorage() {\\n            try {\\n                return localStorage;\\n            } catch (error) {}\\n        }\\n        module.exports = __webpack_require__(447)(exports);\\n        const {formatters} = module.exports;\\n        formatters.j = function(v) {\\n            try {\\n                return JSON.stringify(v);\\n            } catch (error) {\\n                return "[UnexpectedJSONParseError]: " + error.message;\\n            }\\n        };\\n    },\\n    447: (module, __unused_webpack_exports, __webpack_require__) => {\\n        function setup(env) {\\n            createDebug.debug = createDebug;\\n            createDebug.default = createDebug;\\n            createDebug.coerce = coerce;\\n            createDebug.disable = disable;\\n            createDebug.enable = enable;\\n            createDebug.enabled = enabled;\\n            createDebug.humanize = __webpack_require__(824);\\n            createDebug.destroy = destroy;\\n            Object.keys(env).forEach((key => {\\n                createDebug[key] = env[key];\\n            }));\\n            createDebug.names = [];\\n            createDebug.skips = [];\\n            createDebug.formatters = {};\\n            function selectColor(namespace) {\\n                let hash = 0;\\n                for (let i = 0; i < namespace.length; i++) {\\n                    hash = (hash << 5) - hash + namespace.charCodeAt(i);\\n                    hash |= 0;\\n                }\\n                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];\\n            }\\n            createDebug.selectColor = selectColor;\\n            function createDebug(namespace) {\\n                let prevTime;\\n                let enableOverride = null;\\n                let namespacesCache;\\n                let enabledCache;\\n                function debug(...args) {\\n                    if (!debug.enabled) {\\n                        return;\\n                    }\\n                    const self = debug;\\n                    const curr = Number(new Date);\\n                    const ms = curr - (prevTime || curr);\\n                    self.diff = ms;\\n                    self.prev = prevTime;\\n                    self.curr = curr;\\n                    prevTime = curr;\\n                    args[0] = createDebug.coerce(args[0]);\\n                    if (typeof args[0] !== "string") {\\n                        args.unshift("%O");\\n                    }\\n                    let index = 0;\\n                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {\\n                        if (match === "%%") {\\n                            return "%";\\n                        }\\n                        index++;\\n                        const formatter = createDebug.formatters[format];\\n                        if (typeof formatter === "function") {\\n                            const val = args[index];\\n                            match = formatter.call(self, val);\\n                            args.splice(index, 1);\\n                            index--;\\n                        }\\n                        return match;\\n                    }));\\n                    createDebug.formatArgs.call(self, args);\\n                    const logFn = self.log || createDebug.log;\\n                    logFn.apply(self, args);\\n                }\\n                debug.namespace = namespace;\\n                debug.useColors = createDebug.useColors();\\n                debug.color = createDebug.selectColor(namespace);\\n                debug.extend = extend;\\n                debug.destroy = createDebug.destroy;\\n                Object.defineProperty(debug, "enabled", {\\n                    enumerable: true,\\n                    configurable: false,\\n                    get: () => {\\n                        if (enableOverride !== null) {\\n                            return enableOverride;\\n                        }\\n                        if (namespacesCache !== createDebug.namespaces) {\\n                            namespacesCache = createDebug.namespaces;\\n                            enabledCache = createDebug.enabled(namespace);\\n                        }\\n                        return enabledCache;\\n                    },\\n                    set: v => {\\n                        enableOverride = v;\\n                    }\\n                });\\n                if (typeof createDebug.init === "function") {\\n                    createDebug.init(debug);\\n                }\\n                return debug;\\n            }\\n            function extend(namespace, delimiter) {\\n                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);\\n                newDebug.log = this.log;\\n                return newDebug;\\n            }\\n            function enable(namespaces) {\\n                createDebug.save(namespaces);\\n                createDebug.namespaces = namespaces;\\n                createDebug.names = [];\\n                createDebug.skips = [];\\n                let i;\\n                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\\\s,]+/);\\n                const len = split.length;\\n                for (i = 0; i < len; i++) {\\n                    if (!split[i]) {\\n                        continue;\\n                    }\\n                    namespaces = split[i].replace(/\\\\*/g, ".*?");\\n                    if (namespaces[0] === "-") {\\n                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));\\n                    } else {\\n                        createDebug.names.push(new RegExp("^" + namespaces + "$"));\\n                    }\\n                }\\n            }\\n            function disable() {\\n                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");\\n                createDebug.enable("");\\n                return namespaces;\\n            }\\n            function enabled(name) {\\n                if (name[name.length - 1] === "*") {\\n                    return true;\\n                }\\n                let i;\\n                let len;\\n                for (i = 0, len = createDebug.skips.length; i < len; i++) {\\n                    if (createDebug.skips[i].test(name)) {\\n                        return false;\\n                    }\\n                }\\n                for (i = 0, len = createDebug.names.length; i < len; i++) {\\n                    if (createDebug.names[i].test(name)) {\\n                        return true;\\n                    }\\n                }\\n                return false;\\n            }\\n            function toNamespace(regexp) {\\n                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\\\.\\\\*\\\\?$/, "*");\\n            }\\n            function coerce(val) {\\n                if (val instanceof Error) {\\n                    return val.stack || val.message;\\n                }\\n                return val;\\n            }\\n            function destroy() {\\n                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");\\n            }\\n            createDebug.enable(createDebug.load());\\n            return createDebug;\\n        }\\n        module.exports = setup;\\n    },\\n    824: module => {\\n        var s = 1e3;\\n        var m = s * 60;\\n        var h = m * 60;\\n        var d = h * 24;\\n        var w = d * 7;\\n        var y = d * 365.25;\\n        module.exports = function(val, options) {\\n            options = options || {};\\n            var type = typeof val;\\n            if (type === "string" && val.length > 0) {\\n                return parse(val);\\n            } else if (type === "number" && isFinite(val)) {\\n                return options.long ? fmtLong(val) : fmtShort(val);\\n            }\\n            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));\\n        };\\n        function parse(str) {\\n            str = String(str);\\n            if (str.length > 100) {\\n                return;\\n            }\\n            var match = /^(-?(?:\\\\d+)?\\\\.?\\\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);\\n            if (!match) {\\n                return;\\n            }\\n            var n = parseFloat(match[1]);\\n            var type = (match[2] || "ms").toLowerCase();\\n            switch (type) {\\n              case "years":\\n              case "year":\\n              case "yrs":\\n              case "yr":\\n              case "y":\\n                return n * y;\\n\\n              case "weeks":\\n              case "week":\\n              case "w":\\n                return n * w;\\n\\n              case "days":\\n              case "day":\\n              case "d":\\n                return n * d;\\n\\n              case "hours":\\n              case "hour":\\n              case "hrs":\\n              case "hr":\\n              case "h":\\n                return n * h;\\n\\n              case "minutes":\\n              case "minute":\\n              case "mins":\\n              case "min":\\n              case "m":\\n                return n * m;\\n\\n              case "seconds":\\n              case "second":\\n              case "secs":\\n              case "sec":\\n              case "s":\\n                return n * s;\\n\\n              case "milliseconds":\\n              case "millisecond":\\n              case "msecs":\\n              case "msec":\\n              case "ms":\\n                return n;\\n\\n              default:\\n                return undefined;\\n            }\\n        }\\n        function fmtShort(ms) {\\n            var msAbs = Math.abs(ms);\\n            if (msAbs >= d) {\\n                return Math.round(ms / d) + "d";\\n            }\\n            if (msAbs >= h) {\\n                return Math.round(ms / h) + "h";\\n            }\\n            if (msAbs >= m) {\\n                return Math.round(ms / m) + "m";\\n            }\\n            if (msAbs >= s) {\\n                return Math.round(ms / s) + "s";\\n            }\\n            return ms + "ms";\\n        }\\n        function fmtLong(ms) {\\n            var msAbs = Math.abs(ms);\\n            if (msAbs >= d) {\\n                return plural(ms, msAbs, d, "day");\\n            }\\n            if (msAbs >= h) {\\n                return plural(ms, msAbs, h, "hour");\\n            }\\n            if (msAbs >= m) {\\n                return plural(ms, msAbs, m, "minute");\\n            }\\n            if (msAbs >= s) {\\n                return plural(ms, msAbs, s, "second");\\n            }\\n            return ms + " ms";\\n        }\\n        function plural(ms, msAbs, n, name) {\\n            var isPlural = msAbs >= n * 1.5;\\n            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");\\n        }\\n    }\\n};\\n\\nvar __webpack_module_cache__ = {};\\n\\nfunction __webpack_require__(moduleId) {\\n    var cachedModule = __webpack_module_cache__[moduleId];\\n    if (cachedModule !== undefined) {\\n        return cachedModule.exports;\\n    }\\n    var module = __webpack_module_cache__[moduleId] = {\\n        exports: {}\\n    };\\n    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\\n    return module.exports;\\n}\\n\\n(() => {\\n    __webpack_require__.n = module => {\\n        var getter = module && module.__esModule ? () => module["default"] : () => module;\\n        __webpack_require__.d(getter, {\\n            a: getter\\n        });\\n        return getter;\\n    };\\n})();\\n\\n(() => {\\n    __webpack_require__.d = (exports, definition) => {\\n        for (var key in definition) {\\n            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\\n                Object.defineProperty(exports, key, {\\n                    enumerable: true,\\n                    get: definition[key]\\n                });\\n            }\\n        }\\n    };\\n})();\\n\\n(() => {\\n    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);\\n})();\\n\\nvar __webpack_exports__ = {};\\n\\n(() => {\\n    const proxyMarker = Symbol("Comlink.proxy");\\n    const createEndpoint = Symbol("Comlink.endpoint");\\n    const releaseProxy = Symbol("Comlink.releaseProxy");\\n    const finalizer = Symbol("Comlink.finalizer");\\n    const throwMarker = Symbol("Comlink.thrown");\\n    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";\\n    const proxyTransferHandler = {\\n        canHandle: val => isObject(val) && val[proxyMarker],\\n        serialize(obj) {\\n            const {port1, port2} = new MessageChannel;\\n            expose(obj, port1);\\n            return [ port2, [ port2 ] ];\\n        },\\n        deserialize(port) {\\n            port.start();\\n            return comlink_wrap(port);\\n        }\\n    };\\n    const throwTransferHandler = {\\n        canHandle: value => isObject(value) && throwMarker in value,\\n        serialize({value}) {\\n            let serialized;\\n            if (value instanceof Error) {\\n                serialized = {\\n                    isError: true,\\n                    value: {\\n                        message: value.message,\\n                        name: value.name,\\n                        stack: value.stack\\n                    }\\n                };\\n            } else {\\n                serialized = {\\n                    isError: false,\\n                    value\\n                };\\n            }\\n            return [ serialized, [] ];\\n        },\\n        deserialize(serialized) {\\n            if (serialized.isError) {\\n                throw Object.assign(new Error(serialized.value.message), serialized.value);\\n            }\\n            throw serialized.value;\\n        }\\n    };\\n    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);\\n    function isAllowedOrigin(allowedOrigins, origin) {\\n        for (const allowedOrigin of allowedOrigins) {\\n            if (origin === allowedOrigin || allowedOrigin === "*") {\\n                return true;\\n            }\\n            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {\\n                return true;\\n            }\\n        }\\n        return false;\\n    }\\n    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {\\n        ep.addEventListener("message", (function callback(ev) {\\n            if (!ev || !ev.data) {\\n                return;\\n            }\\n            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {\\n                console.warn(\`Invalid origin \\'\${ev.origin}\\' for comlink proxy\`);\\n                return;\\n            }\\n            const {id, type, path} = Object.assign({\\n                path: []\\n            }, ev.data);\\n            const argumentList = (ev.data.argumentList || []).map(fromWireValue);\\n            let returnValue;\\n            try {\\n                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);\\n                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);\\n                switch (type) {\\n                  case "GET":\\n                    {\\n                        returnValue = rawValue;\\n                    }\\n                    break;\\n\\n                  case "SET":\\n                    {\\n                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);\\n                        returnValue = true;\\n                    }\\n                    break;\\n\\n                  case "APPLY":\\n                    {\\n                        returnValue = rawValue.apply(parent, argumentList);\\n                    }\\n                    break;\\n\\n                  case "CONSTRUCT":\\n                    {\\n                        const value = new rawValue(...argumentList);\\n                        returnValue = proxy(value);\\n                    }\\n                    break;\\n\\n                  case "ENDPOINT":\\n                    {\\n                        const {port1, port2} = new MessageChannel;\\n                        expose(obj, port2);\\n                        returnValue = transfer(port1, [ port1 ]);\\n                    }\\n                    break;\\n\\n                  case "RELEASE":\\n                    {\\n                        returnValue = undefined;\\n                    }\\n                    break;\\n\\n                  default:\\n                    return;\\n                }\\n            } catch (value) {\\n                returnValue = {\\n                    value,\\n                    [throwMarker]: 0\\n                };\\n            }\\n            Promise.resolve(returnValue).catch((value => ({\\n                value,\\n                [throwMarker]: 0\\n            }))).then((returnValue => {\\n                const [wireValue, transferables] = toWireValue(returnValue);\\n                ep.postMessage(Object.assign(Object.assign({}, wireValue), {\\n                    id\\n                }), transferables);\\n                if (type === "RELEASE") {\\n                    ep.removeEventListener("message", callback);\\n                    closeEndPoint(ep);\\n                    if (finalizer in obj && typeof obj[finalizer] === "function") {\\n                        obj[finalizer]();\\n                    }\\n                }\\n            })).catch((error => {\\n                const [wireValue, transferables] = toWireValue({\\n                    value: new TypeError("Unserializable return value"),\\n                    [throwMarker]: 0\\n                });\\n                ep.postMessage(Object.assign(Object.assign({}, wireValue), {\\n                    id\\n                }), transferables);\\n            }));\\n        }));\\n        if (ep.start) {\\n            ep.start();\\n        }\\n    }\\n    function isMessagePort(endpoint) {\\n        return endpoint.constructor.name === "MessagePort";\\n    }\\n    function closeEndPoint(endpoint) {\\n        if (isMessagePort(endpoint)) endpoint.close();\\n    }\\n    function comlink_wrap(ep, target) {\\n        return createProxy(ep, [], target);\\n    }\\n    function throwIfProxyReleased(isReleased) {\\n        if (isReleased) {\\n            throw new Error("Proxy has been released and is not useable");\\n        }\\n    }\\n    function releaseEndpoint(ep) {\\n        return requestResponseMessage(ep, {\\n            type: "RELEASE"\\n        }).then((() => {\\n            closeEndPoint(ep);\\n        }));\\n    }\\n    const proxyCounter = new WeakMap;\\n    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {\\n        const newCount = (proxyCounter.get(ep) || 0) - 1;\\n        proxyCounter.set(ep, newCount);\\n        if (newCount === 0) {\\n            releaseEndpoint(ep);\\n        }\\n    }));\\n    function registerProxy(proxy, ep) {\\n        const newCount = (proxyCounter.get(ep) || 0) + 1;\\n        proxyCounter.set(ep, newCount);\\n        if (proxyFinalizers) {\\n            proxyFinalizers.register(proxy, ep, proxy);\\n        }\\n    }\\n    function unregisterProxy(proxy) {\\n        if (proxyFinalizers) {\\n            proxyFinalizers.unregister(proxy);\\n        }\\n    }\\n    function createProxy(ep, path = [], target = function() {}) {\\n        let isProxyReleased = false;\\n        const proxy = new Proxy(target, {\\n            get(_target, prop) {\\n                throwIfProxyReleased(isProxyReleased);\\n                if (prop === releaseProxy) {\\n                    return () => {\\n                        unregisterProxy(proxy);\\n                        releaseEndpoint(ep);\\n                        isProxyReleased = true;\\n                    };\\n                }\\n                if (prop === "then") {\\n                    if (path.length === 0) {\\n                        return {\\n                            then: () => proxy\\n                        };\\n                    }\\n                    const r = requestResponseMessage(ep, {\\n                        type: "GET",\\n                        path: path.map((p => p.toString()))\\n                    }).then(fromWireValue);\\n                    return r.then.bind(r);\\n                }\\n                return createProxy(ep, [ ...path, prop ]);\\n            },\\n            set(_target, prop, rawValue) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const [value, transferables] = toWireValue(rawValue);\\n                return requestResponseMessage(ep, {\\n                    type: "SET",\\n                    path: [ ...path, prop ].map((p => p.toString())),\\n                    value\\n                }, transferables).then(fromWireValue);\\n            },\\n            apply(_target, _thisArg, rawArgumentList) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const last = path[path.length - 1];\\n                if (last === createEndpoint) {\\n                    return requestResponseMessage(ep, {\\n                        type: "ENDPOINT"\\n                    }).then(fromWireValue);\\n                }\\n                if (last === "bind") {\\n                    return createProxy(ep, path.slice(0, -1));\\n                }\\n                const [argumentList, transferables] = processArguments(rawArgumentList);\\n                return requestResponseMessage(ep, {\\n                    type: "APPLY",\\n                    path: path.map((p => p.toString())),\\n                    argumentList\\n                }, transferables).then(fromWireValue);\\n            },\\n            construct(_target, rawArgumentList) {\\n                throwIfProxyReleased(isProxyReleased);\\n                const [argumentList, transferables] = processArguments(rawArgumentList);\\n                return requestResponseMessage(ep, {\\n                    type: "CONSTRUCT",\\n                    path: path.map((p => p.toString())),\\n                    argumentList\\n                }, transferables).then(fromWireValue);\\n            }\\n        });\\n        registerProxy(proxy, ep);\\n        return proxy;\\n    }\\n    function myFlat(arr) {\\n        return Array.prototype.concat.apply([], arr);\\n    }\\n    function processArguments(argumentList) {\\n        const processed = argumentList.map(toWireValue);\\n        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];\\n    }\\n    const transferCache = new WeakMap;\\n    function transfer(obj, transfers) {\\n        transferCache.set(obj, transfers);\\n        return obj;\\n    }\\n    function proxy(obj) {\\n        return Object.assign(obj, {\\n            [proxyMarker]: true\\n        });\\n    }\\n    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {\\n        return {\\n            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),\\n            addEventListener: context.addEventListener.bind(context),\\n            removeEventListener: context.removeEventListener.bind(context)\\n        };\\n    }\\n    function toWireValue(value) {\\n        for (const [name, handler] of transferHandlers) {\\n            if (handler.canHandle(value)) {\\n                const [serializedValue, transferables] = handler.serialize(value);\\n                return [ {\\n                    type: "HANDLER",\\n                    name,\\n                    value: serializedValue\\n                }, transferables ];\\n            }\\n        }\\n        return [ {\\n            type: "RAW",\\n            value\\n        }, transferCache.get(value) || [] ];\\n    }\\n    function fromWireValue(value) {\\n        switch (value.type) {\\n          case "HANDLER":\\n            return transferHandlers.get(value.name).deserialize(value.value);\\n\\n          case "RAW":\\n            return value.value;\\n        }\\n    }\\n    function requestResponseMessage(ep, msg, transfers) {\\n        return new Promise((resolve => {\\n            const id = generateUUID();\\n            ep.addEventListener("message", (function l(ev) {\\n                if (!ev.data || !ev.data.id || ev.data.id !== id) {\\n                    return;\\n                }\\n                ep.removeEventListener("message", l);\\n                resolve(ev.data);\\n            }));\\n            if (ep.start) {\\n                ep.start();\\n            }\\n            ep.postMessage(Object.assign({\\n                id\\n            }, msg), transfers);\\n        }));\\n    }\\n    function generateUUID() {\\n        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");\\n    }\\n    function getSharedMemoryAvailable() {\\n        const globalScope = typeof window !== "undefined" ? window : globalThis;\\n        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;\\n    }\\n    function getRemoteBarretenbergWasm(worker) {\\n        return wrap(worker);\\n    }\\n    function getNumCpu() {\\n        return navigator.hardwareConcurrency;\\n    }\\n    function threadLogger() {\\n        return undefined;\\n    }\\n    function killSelf() {\\n        self.close();\\n    }\\n    var browser = __webpack_require__(227);\\n    var browser_default = __webpack_require__.n(browser);\\n    const randomBytes = len => {\\n        const getWebCrypto = () => {\\n            if (typeof window !== "undefined" && window.crypto) return window.crypto;\\n            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;\\n            return undefined;\\n        };\\n        const crypto = getWebCrypto();\\n        if (!crypto) {\\n            throw new Error("randomBytes UnsupportedEnvironment");\\n        }\\n        const buf = new Uint8Array(len);\\n        const MAX_BYTES = 65536;\\n        if (len > MAX_BYTES) {\\n            for (let generated = 0; generated < len; generated += MAX_BYTES) {\\n                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));\\n            }\\n        } else {\\n            crypto.getRandomValues(buf);\\n        }\\n        return buf;\\n    };\\n    class BarretenbergWasmBase {\\n        constructor() {\\n            this.memStore = {};\\n            this.logger = browser_default()("bb.js:bb_wasm_base");\\n        }\\n        getImportObj(memory) {\\n            const importObj = {\\n                wasi_snapshot_preview1: {\\n                    random_get: (out, length) => {\\n                        out = out >>> 0;\\n                        const randomData = randomBytes(length);\\n                        const mem = this.getMemory();\\n                        mem.set(randomData, out);\\n                    },\\n                    clock_time_get: (a1, a2, out) => {\\n                        out = out >>> 0;\\n                        const ts = BigInt((new Date).getTime()) * 1000000n;\\n                        const view = new DataView(this.getMemory().buffer);\\n                        view.setBigUint64(out, ts, true);\\n                    },\\n                    proc_exit: () => {\\n                        this.logger("PANIC: proc_exit was called.");\\n                        throw new Error;\\n                    }\\n                },\\n                env: {\\n                    logstr: addr => {\\n                        const str = this.stringFromAddress(addr);\\n                        const m = this.getMemory();\\n                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;\\n                        this.logger(str2);\\n                    },\\n                    get_data: (keyAddr, outBufAddr) => {\\n                        const key = this.stringFromAddress(keyAddr);\\n                        outBufAddr = outBufAddr >>> 0;\\n                        const data = this.memStore[key];\\n                        if (!data) {\\n                            this.logger(\`get_data miss \${key}\`);\\n                            return;\\n                        }\\n                        this.writeMemory(outBufAddr, data);\\n                    },\\n                    set_data: (keyAddr, dataAddr, dataLength) => {\\n                        const key = this.stringFromAddress(keyAddr);\\n                        dataAddr = dataAddr >>> 0;\\n                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);\\n                    },\\n                    memory\\n                }\\n            };\\n            return importObj;\\n        }\\n        exports() {\\n            return this.instance.exports;\\n        }\\n        call(name, ...args) {\\n            if (!this.exports()[name]) {\\n                throw new Error(\`WASM function \${name} not found.\`);\\n            }\\n            try {\\n                return this.exports()[name](...args) >>> 0;\\n            } catch (err) {\\n                const message = \`WASM function \${name} aborted, error: \${err}\`;\\n                this.logger(message);\\n                this.logger(err.stack);\\n                throw err;\\n            }\\n        }\\n        memSize() {\\n            return this.getMemory().length;\\n        }\\n        getMemorySlice(start, end) {\\n            return this.getMemory().subarray(start, end).slice();\\n        }\\n        writeMemory(offset, arr) {\\n            const mem = this.getMemory();\\n            mem.set(arr, offset);\\n        }\\n        getMemory() {\\n            return new Uint8Array(this.memory.buffer);\\n        }\\n        stringFromAddress(addr) {\\n            addr = addr >>> 0;\\n            const m = this.getMemory();\\n            let i = addr;\\n            for (;m[i] !== 0; ++i) ;\\n            const textDecoder = new TextDecoder("ascii");\\n            return textDecoder.decode(m.slice(addr, i));\\n        }\\n    }\\n    class BarretenbergWasmThread extends BarretenbergWasmBase {\\n        async initThread(module, memory) {\\n            this.logger = threadLogger() || this.logger;\\n            this.memory = memory;\\n            this.instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));\\n        }\\n        destroy() {\\n            killSelf();\\n        }\\n        getImportObj(memory) {\\n            const baseImports = super.getImportObj(memory);\\n            return {\\n                ...baseImports,\\n                wasi: {\\n                    "thread-spawn": () => {\\n                        this.logger("PANIC: threads cannot spawn threads!");\\n                        this.logger((new Error).stack);\\n                        killSelf();\\n                    }\\n                },\\n                env: {\\n                    ...baseImports.env,\\n                    env_hardware_concurrency: () => 1\\n                }\\n            };\\n        }\\n    }\\n    self.onmessage = function(e) {\\n        if (e.data.debug) {\\n            browser_default().enable(e.data.debug);\\n        }\\n    };\\n    expose(new BarretenbergWasmThread);\\n    self.postMessage({\\n        ready: true\\n    });\\n    const thread_worker = null;\\n})();', "Worker", undefined, undefined);
    }
    function createThreadWorker() {
        const worker = new Worker_fn;
        const debugStr = browser_default().disable();
        browser_default().enable(debugStr);
        worker.postMessage({
            debug: debugStr
        });
        return worker;
    }
    const randomBytes = len => {
        const getWebCrypto = () => {
            if (typeof window !== "undefined" && window.crypto) return window.crypto;
            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;
            return undefined;
        };
        const crypto = getWebCrypto();
        if (!crypto) {
            throw new Error("randomBytes UnsupportedEnvironment");
        }
        const buf = new Uint8Array(len);
        const MAX_BYTES = 65536;
        if (len > MAX_BYTES) {
            for (let generated = 0; generated < len; generated += MAX_BYTES) {
                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));
            }
        } else {
            crypto.getRandomValues(buf);
        }
        return buf;
    };
    class BarretenbergWasmBase {
        constructor() {
            this.memStore = {};
            this.logger = browser_default()("bb.js:bb_wasm_base");
        }
        getImportObj(memory) {
            const importObj = {
                wasi_snapshot_preview1: {
                    random_get: (out, length) => {
                        out = out >>> 0;
                        const randomData = randomBytes(length);
                        const mem = this.getMemory();
                        mem.set(randomData, out);
                    },
                    clock_time_get: (a1, a2, out) => {
                        out = out >>> 0;
                        const ts = BigInt((new Date).getTime()) * 1000000n;
                        const view = new DataView(this.getMemory().buffer);
                        view.setBigUint64(out, ts, true);
                    },
                    proc_exit: () => {
                        this.logger("PANIC: proc_exit was called.");
                        throw new Error;
                    }
                },
                env: {
                    logstr: addr => {
                        const str = this.stringFromAddress(addr);
                        const m = this.getMemory();
                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;
                        this.logger(str2);
                    },
                    get_data: (keyAddr, outBufAddr) => {
                        const key = this.stringFromAddress(keyAddr);
                        outBufAddr = outBufAddr >>> 0;
                        const data = this.memStore[key];
                        if (!data) {
                            this.logger(\`get_data miss \${key}\`);
                            return;
                        }
                        this.writeMemory(outBufAddr, data);
                    },
                    set_data: (keyAddr, dataAddr, dataLength) => {
                        const key = this.stringFromAddress(keyAddr);
                        dataAddr = dataAddr >>> 0;
                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);
                    },
                    memory
                }
            };
            return importObj;
        }
        exports() {
            return this.instance.exports;
        }
        call(name, ...args) {
            if (!this.exports()[name]) {
                throw new Error(\`WASM function \${name} not found.\`);
            }
            try {
                return this.exports()[name](...args) >>> 0;
            } catch (err) {
                const message = \`WASM function \${name} aborted, error: \${err}\`;
                this.logger(message);
                this.logger(err.stack);
                throw err;
            }
        }
        memSize() {
            return this.getMemory().length;
        }
        getMemorySlice(start, end) {
            return this.getMemory().subarray(start, end).slice();
        }
        writeMemory(offset, arr) {
            const mem = this.getMemory();
            mem.set(arr, offset);
        }
        getMemory() {
            return new Uint8Array(this.memory.buffer);
        }
        stringFromAddress(addr) {
            addr = addr >>> 0;
            const m = this.getMemory();
            let i = addr;
            for (;m[i] !== 0; ++i) ;
            const textDecoder = new TextDecoder("ascii");
            return textDecoder.decode(m.slice(addr, i));
        }
    }
    class HeapAllocator {
        constructor(wasm) {
            this.wasm = wasm;
            this.allocs = [];
            this.inScratchRemaining = 1024;
            this.outScratchRemaining = 1024;
        }
        getInputs(buffers) {
            return buffers.map((bufOrNum => {
                if (typeof bufOrNum === "object") {
                    if (bufOrNum.length <= this.inScratchRemaining) {
                        const ptr = this.inScratchRemaining -= bufOrNum.length;
                        this.wasm.writeMemory(ptr, bufOrNum);
                        return ptr;
                    } else {
                        const ptr = this.wasm.call("bbmalloc", bufOrNum.length);
                        this.wasm.writeMemory(ptr, bufOrNum);
                        this.allocs.push(ptr);
                        return ptr;
                    }
                } else {
                    return bufOrNum;
                }
            }));
        }
        getOutputPtrs(outLens) {
            return outLens.map((len => {
                const size = len || 4;
                if (size <= this.outScratchRemaining) {
                    return this.outScratchRemaining -= size;
                } else {
                    const ptr = this.wasm.call("bbmalloc", size);
                    this.allocs.push(ptr);
                    return ptr;
                }
            }));
        }
        addOutputPtr(ptr) {
            if (ptr >= 1024) {
                this.allocs.push(ptr);
            }
        }
        freeAll() {
            for (const ptr of this.allocs) {
                this.wasm.call("bbfree", ptr);
            }
        }
    }
    class BarretenbergWasmMain extends BarretenbergWasmBase {
        constructor() {
            super(...arguments);
            this.workers = [];
            this.remoteWasms = [];
            this.nextWorker = 0;
            this.nextThreadId = 1;
        }
        getNumThreads() {
            return this.workers.length + 1;
        }
        async init(module, threads = Math.min(getNumCpu(), BarretenbergWasmMain.MAX_THREADS), logger = browser_default()("bb.js:bb_wasm"), initial = 32, maximum = 2 ** 16) {
            this.logger = logger;
            const initialMb = initial * 2 ** 16 / (1024 * 1024);
            const maxMb = maximum * 2 ** 16 / (1024 * 1024);
            const shared = getSharedMemoryAvailable();
            this.logger(\`Initializing bb wasm: initial memory \${initial} pages \${initialMb}MiB; \` + \`max memory: \${maximum} pages, \${maxMb}MiB; \` + \`threads: \${threads}; shared memory: \${shared}\`);
            this.memory = new WebAssembly.Memory({
                initial,
                maximum,
                shared
            });
            const instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));
            this.instance = instance;
            this.call("_initialize");
            if (threads > 1) {
                this.logger(\`Creating \${threads} worker threads\`);
                this.workers = await Promise.all(Array.from({
                    length: threads - 1
                }).map(createThreadWorker));
                this.remoteWasms = await Promise.all(this.workers.map(getRemoteBarretenbergWasm));
                await Promise.all(this.remoteWasms.map((w => w.initThread(module, this.memory))));
            }
        }
        async destroy() {
            await Promise.all(this.workers.map((w => w.terminate())));
        }
        getImportObj(memory) {
            const baseImports = super.getImportObj(memory);
            return {
                ...baseImports,
                wasi: {
                    "thread-spawn": arg => {
                        arg = arg >>> 0;
                        const id = this.nextThreadId++;
                        const worker = this.nextWorker++ % this.remoteWasms.length;
                        this.remoteWasms[worker].call("wasi_thread_start", id, arg).catch(this.logger);
                        return id;
                    }
                },
                env: {
                    ...baseImports.env,
                    env_hardware_concurrency: () => this.remoteWasms.length + 1
                }
            };
        }
        callWasmExport(funcName, inArgs, outLens) {
            const alloc = new HeapAllocator(this);
            const inPtrs = alloc.getInputs(inArgs);
            const outPtrs = alloc.getOutputPtrs(outLens);
            this.call(funcName, ...inPtrs, ...outPtrs);
            const outArgs = this.getOutputArgs(outLens, outPtrs, alloc);
            alloc.freeAll();
            return outArgs;
        }
        getOutputArgs(outLens, outPtrs, alloc) {
            return outLens.map(((len, i) => {
                if (len) {
                    return this.getMemorySlice(outPtrs[i], outPtrs[i] + len);
                }
                const slice = this.getMemorySlice(outPtrs[i], outPtrs[i] + 4);
                const ptr = new DataView(slice.buffer, slice.byteOffset, slice.byteLength).getUint32(0, true);
                alloc.addOutputPtr(ptr);
                const lslice = this.getMemorySlice(ptr, ptr + 4);
                const length = new DataView(lslice.buffer, lslice.byteOffset, lslice.byteLength).getUint32(0, false);
                return this.getMemorySlice(ptr + 4, ptr + 4 + length);
            }));
        }
    }
    BarretenbergWasmMain.MAX_THREADS = 32;
    self.onmessage = function(e) {
        if (e.data.debug) {
            browser_default().enable(e.data.debug);
        }
    };
    expose(new BarretenbergWasmMain);
    self.postMessage({
        ready: true
    });
    const main_worker = null;
})();`,"Worker",void 0,void 0)}function vi(){const e=new bi,n=Pe().disable();return Pe().enable(n),e.postMessage({debug:n}),e}function Sr(){const e=typeof window<"u"?window:globalThis;return typeof SharedArrayBuffer<"u"&&e.crossOriginIsolated}function Ir(e){return Xe(e)}function Ei(){return navigator.hardwareConcurrency}function ki(){return Ar()(`/*! For license information please see thread.worker.worker.js.LICENSE.txt */
var __webpack_modules__ = {
    227: (module, exports, __webpack_require__) => {
        exports.formatArgs = formatArgs;
        exports.save = save;
        exports.load = load;
        exports.useColors = useColors;
        exports.storage = localstorage();
        exports.destroy = (() => {
            let warned = false;
            return () => {
                if (!warned) {
                    warned = true;
                    console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
                }
            };
        })();
        exports.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ];
        function useColors() {
            if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
                return true;
            }
            if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\\/(\\d+)/)) {
                return false;
            }
            return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\\/(\\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\\/(\\d+)/);
        }
        function formatArgs(args) {
            args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
            if (!this.useColors) {
                return;
            }
            const c = "color: " + this.color;
            args.splice(1, 0, c, "color: inherit");
            let index = 0;
            let lastC = 0;
            args[0].replace(/%[a-zA-Z%]/g, (match => {
                if (match === "%%") {
                    return;
                }
                index++;
                if (match === "%c") {
                    lastC = index;
                }
            }));
            args.splice(lastC, 0, c);
        }
        exports.log = console.debug || console.log || (() => {});
        function save(namespaces) {
            try {
                if (namespaces) {
                    exports.storage.setItem("debug", namespaces);
                } else {
                    exports.storage.removeItem("debug");
                }
            } catch (error) {}
        }
        function load() {
            let r;
            try {
                r = exports.storage.getItem("debug");
            } catch (error) {}
            if (!r && typeof process !== "undefined" && "env" in process) {
                r = process.env.DEBUG;
            }
            return r;
        }
        function localstorage() {
            try {
                return localStorage;
            } catch (error) {}
        }
        module.exports = __webpack_require__(447)(exports);
        const {formatters} = module.exports;
        formatters.j = function(v) {
            try {
                return JSON.stringify(v);
            } catch (error) {
                return "[UnexpectedJSONParseError]: " + error.message;
            }
        };
    },
    447: (module, __unused_webpack_exports, __webpack_require__) => {
        function setup(env) {
            createDebug.debug = createDebug;
            createDebug.default = createDebug;
            createDebug.coerce = coerce;
            createDebug.disable = disable;
            createDebug.enable = enable;
            createDebug.enabled = enabled;
            createDebug.humanize = __webpack_require__(824);
            createDebug.destroy = destroy;
            Object.keys(env).forEach((key => {
                createDebug[key] = env[key];
            }));
            createDebug.names = [];
            createDebug.skips = [];
            createDebug.formatters = {};
            function selectColor(namespace) {
                let hash = 0;
                for (let i = 0; i < namespace.length; i++) {
                    hash = (hash << 5) - hash + namespace.charCodeAt(i);
                    hash |= 0;
                }
                return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
            }
            createDebug.selectColor = selectColor;
            function createDebug(namespace) {
                let prevTime;
                let enableOverride = null;
                let namespacesCache;
                let enabledCache;
                function debug(...args) {
                    if (!debug.enabled) {
                        return;
                    }
                    const self = debug;
                    const curr = Number(new Date);
                    const ms = curr - (prevTime || curr);
                    self.diff = ms;
                    self.prev = prevTime;
                    self.curr = curr;
                    prevTime = curr;
                    args[0] = createDebug.coerce(args[0]);
                    if (typeof args[0] !== "string") {
                        args.unshift("%O");
                    }
                    let index = 0;
                    args[0] = args[0].replace(/%([a-zA-Z%])/g, ((match, format) => {
                        if (match === "%%") {
                            return "%";
                        }
                        index++;
                        const formatter = createDebug.formatters[format];
                        if (typeof formatter === "function") {
                            const val = args[index];
                            match = formatter.call(self, val);
                            args.splice(index, 1);
                            index--;
                        }
                        return match;
                    }));
                    createDebug.formatArgs.call(self, args);
                    const logFn = self.log || createDebug.log;
                    logFn.apply(self, args);
                }
                debug.namespace = namespace;
                debug.useColors = createDebug.useColors();
                debug.color = createDebug.selectColor(namespace);
                debug.extend = extend;
                debug.destroy = createDebug.destroy;
                Object.defineProperty(debug, "enabled", {
                    enumerable: true,
                    configurable: false,
                    get: () => {
                        if (enableOverride !== null) {
                            return enableOverride;
                        }
                        if (namespacesCache !== createDebug.namespaces) {
                            namespacesCache = createDebug.namespaces;
                            enabledCache = createDebug.enabled(namespace);
                        }
                        return enabledCache;
                    },
                    set: v => {
                        enableOverride = v;
                    }
                });
                if (typeof createDebug.init === "function") {
                    createDebug.init(debug);
                }
                return debug;
            }
            function extend(namespace, delimiter) {
                const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
                newDebug.log = this.log;
                return newDebug;
            }
            function enable(namespaces) {
                createDebug.save(namespaces);
                createDebug.namespaces = namespaces;
                createDebug.names = [];
                createDebug.skips = [];
                let i;
                const split = (typeof namespaces === "string" ? namespaces : "").split(/[\\s,]+/);
                const len = split.length;
                for (i = 0; i < len; i++) {
                    if (!split[i]) {
                        continue;
                    }
                    namespaces = split[i].replace(/\\*/g, ".*?");
                    if (namespaces[0] === "-") {
                        createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
                    } else {
                        createDebug.names.push(new RegExp("^" + namespaces + "$"));
                    }
                }
            }
            function disable() {
                const namespaces = [ ...createDebug.names.map(toNamespace), ...createDebug.skips.map(toNamespace).map((namespace => "-" + namespace)) ].join(",");
                createDebug.enable("");
                return namespaces;
            }
            function enabled(name) {
                if (name[name.length - 1] === "*") {
                    return true;
                }
                let i;
                let len;
                for (i = 0, len = createDebug.skips.length; i < len; i++) {
                    if (createDebug.skips[i].test(name)) {
                        return false;
                    }
                }
                for (i = 0, len = createDebug.names.length; i < len; i++) {
                    if (createDebug.names[i].test(name)) {
                        return true;
                    }
                }
                return false;
            }
            function toNamespace(regexp) {
                return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\\.\\*\\?$/, "*");
            }
            function coerce(val) {
                if (val instanceof Error) {
                    return val.stack || val.message;
                }
                return val;
            }
            function destroy() {
                console.warn("Instance method \`debug.destroy()\` is deprecated and no longer does anything. It will be removed in the next major version of \`debug\`.");
            }
            createDebug.enable(createDebug.load());
            return createDebug;
        }
        module.exports = setup;
    },
    824: module => {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var w = d * 7;
        var y = d * 365.25;
        module.exports = function(val, options) {
            options = options || {};
            var type = typeof val;
            if (type === "string" && val.length > 0) {
                return parse(val);
            } else if (type === "number" && isFinite(val)) {
                return options.long ? fmtLong(val) : fmtShort(val);
            }
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
            str = String(str);
            if (str.length > 100) {
                return;
            }
            var match = /^(-?(?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
            if (!match) {
                return;
            }
            var n = parseFloat(match[1]);
            var type = (match[2] || "ms").toLowerCase();
            switch (type) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return n * y;

              case "weeks":
              case "week":
              case "w":
                return n * w;

              case "days":
              case "day":
              case "d":
                return n * d;

              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return n * h;

              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return n * m;

              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return n * s;

              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return n;

              default:
                return undefined;
            }
        }
        function fmtShort(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return Math.round(ms / d) + "d";
            }
            if (msAbs >= h) {
                return Math.round(ms / h) + "h";
            }
            if (msAbs >= m) {
                return Math.round(ms / m) + "m";
            }
            if (msAbs >= s) {
                return Math.round(ms / s) + "s";
            }
            return ms + "ms";
        }
        function fmtLong(ms) {
            var msAbs = Math.abs(ms);
            if (msAbs >= d) {
                return plural(ms, msAbs, d, "day");
            }
            if (msAbs >= h) {
                return plural(ms, msAbs, h, "hour");
            }
            if (msAbs >= m) {
                return plural(ms, msAbs, m, "minute");
            }
            if (msAbs >= s) {
                return plural(ms, msAbs, s, "second");
            }
            return ms + " ms";
        }
        function plural(ms, msAbs, n, name) {
            var isPlural = msAbs >= n * 1.5;
            return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
        }
    }
};

var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
        return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
}

(() => {
    __webpack_require__.n = module => {
        var getter = module && module.__esModule ? () => module["default"] : () => module;
        __webpack_require__.d(getter, {
            a: getter
        });
        return getter;
    };
})();

(() => {
    __webpack_require__.d = (exports, definition) => {
        for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            }
        }
    };
})();

(() => {
    __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
})();

var __webpack_exports__ = {};

(() => {
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const finalizer = Symbol("Comlink.finalizer");
    const throwMarker = Symbol("Comlink.thrown");
    const isObject = val => typeof val === "object" && val !== null || typeof val === "function";
    const proxyTransferHandler = {
        canHandle: val => isObject(val) && val[proxyMarker],
        serialize(obj) {
            const {port1, port2} = new MessageChannel;
            expose(obj, port1);
            return [ port2, [ port2 ] ];
        },
        deserialize(port) {
            port.start();
            return comlink_wrap(port);
        }
    };
    const throwTransferHandler = {
        canHandle: value => isObject(value) && throwMarker in value,
        serialize({value}) {
            let serialized;
            if (value instanceof Error) {
                serialized = {
                    isError: true,
                    value: {
                        message: value.message,
                        name: value.name,
                        stack: value.stack
                    }
                };
            } else {
                serialized = {
                    isError: false,
                    value
                };
            }
            return [ serialized, [] ];
        },
        deserialize(serialized) {
            if (serialized.isError) {
                throw Object.assign(new Error(serialized.value.message), serialized.value);
            }
            throw serialized.value;
        }
    };
    const transferHandlers = new Map([ [ "proxy", proxyTransferHandler ], [ "throw", throwTransferHandler ] ]);
    function isAllowedOrigin(allowedOrigins, origin) {
        for (const allowedOrigin of allowedOrigins) {
            if (origin === allowedOrigin || allowedOrigin === "*") {
                return true;
            }
            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
                return true;
            }
        }
        return false;
    }
    function expose(obj, ep = globalThis, allowedOrigins = [ "*" ]) {
        ep.addEventListener("message", (function callback(ev) {
            if (!ev || !ev.data) {
                return;
            }
            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
                console.warn(\`Invalid origin '\${ev.origin}' for comlink proxy\`);
                return;
            }
            const {id, type, path} = Object.assign({
                path: []
            }, ev.data);
            const argumentList = (ev.data.argumentList || []).map(fromWireValue);
            let returnValue;
            try {
                const parent = path.slice(0, -1).reduce(((obj, prop) => obj[prop]), obj);
                const rawValue = path.reduce(((obj, prop) => obj[prop]), obj);
                switch (type) {
                  case "GET":
                    {
                        returnValue = rawValue;
                    }
                    break;

                  case "SET":
                    {
                        parent[path.slice(-1)[0]] = fromWireValue(ev.data.value);
                        returnValue = true;
                    }
                    break;

                  case "APPLY":
                    {
                        returnValue = rawValue.apply(parent, argumentList);
                    }
                    break;

                  case "CONSTRUCT":
                    {
                        const value = new rawValue(...argumentList);
                        returnValue = proxy(value);
                    }
                    break;

                  case "ENDPOINT":
                    {
                        const {port1, port2} = new MessageChannel;
                        expose(obj, port2);
                        returnValue = transfer(port1, [ port1 ]);
                    }
                    break;

                  case "RELEASE":
                    {
                        returnValue = undefined;
                    }
                    break;

                  default:
                    return;
                }
            } catch (value) {
                returnValue = {
                    value,
                    [throwMarker]: 0
                };
            }
            Promise.resolve(returnValue).catch((value => ({
                value,
                [throwMarker]: 0
            }))).then((returnValue => {
                const [wireValue, transferables] = toWireValue(returnValue);
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
                if (type === "RELEASE") {
                    ep.removeEventListener("message", callback);
                    closeEndPoint(ep);
                    if (finalizer in obj && typeof obj[finalizer] === "function") {
                        obj[finalizer]();
                    }
                }
            })).catch((error => {
                const [wireValue, transferables] = toWireValue({
                    value: new TypeError("Unserializable return value"),
                    [throwMarker]: 0
                });
                ep.postMessage(Object.assign(Object.assign({}, wireValue), {
                    id
                }), transferables);
            }));
        }));
        if (ep.start) {
            ep.start();
        }
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function closeEndPoint(endpoint) {
        if (isMessagePort(endpoint)) endpoint.close();
    }
    function comlink_wrap(ep, target) {
        return createProxy(ep, [], target);
    }
    function throwIfProxyReleased(isReleased) {
        if (isReleased) {
            throw new Error("Proxy has been released and is not useable");
        }
    }
    function releaseEndpoint(ep) {
        return requestResponseMessage(ep, {
            type: "RELEASE"
        }).then((() => {
            closeEndPoint(ep);
        }));
    }
    const proxyCounter = new WeakMap;
    const proxyFinalizers = "FinalizationRegistry" in globalThis && new FinalizationRegistry((ep => {
        const newCount = (proxyCounter.get(ep) || 0) - 1;
        proxyCounter.set(ep, newCount);
        if (newCount === 0) {
            releaseEndpoint(ep);
        }
    }));
    function registerProxy(proxy, ep) {
        const newCount = (proxyCounter.get(ep) || 0) + 1;
        proxyCounter.set(ep, newCount);
        if (proxyFinalizers) {
            proxyFinalizers.register(proxy, ep, proxy);
        }
    }
    function unregisterProxy(proxy) {
        if (proxyFinalizers) {
            proxyFinalizers.unregister(proxy);
        }
    }
    function createProxy(ep, path = [], target = function() {}) {
        let isProxyReleased = false;
        const proxy = new Proxy(target, {
            get(_target, prop) {
                throwIfProxyReleased(isProxyReleased);
                if (prop === releaseProxy) {
                    return () => {
                        unregisterProxy(proxy);
                        releaseEndpoint(ep);
                        isProxyReleased = true;
                    };
                }
                if (prop === "then") {
                    if (path.length === 0) {
                        return {
                            then: () => proxy
                        };
                    }
                    const r = requestResponseMessage(ep, {
                        type: "GET",
                        path: path.map((p => p.toString()))
                    }).then(fromWireValue);
                    return r.then.bind(r);
                }
                return createProxy(ep, [ ...path, prop ]);
            },
            set(_target, prop, rawValue) {
                throwIfProxyReleased(isProxyReleased);
                const [value, transferables] = toWireValue(rawValue);
                return requestResponseMessage(ep, {
                    type: "SET",
                    path: [ ...path, prop ].map((p => p.toString())),
                    value
                }, transferables).then(fromWireValue);
            },
            apply(_target, _thisArg, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const last = path[path.length - 1];
                if (last === createEndpoint) {
                    return requestResponseMessage(ep, {
                        type: "ENDPOINT"
                    }).then(fromWireValue);
                }
                if (last === "bind") {
                    return createProxy(ep, path.slice(0, -1));
                }
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "APPLY",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            },
            construct(_target, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const [argumentList, transferables] = processArguments(rawArgumentList);
                return requestResponseMessage(ep, {
                    type: "CONSTRUCT",
                    path: path.map((p => p.toString())),
                    argumentList
                }, transferables).then(fromWireValue);
            }
        });
        registerProxy(proxy, ep);
        return proxy;
    }
    function myFlat(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function processArguments(argumentList) {
        const processed = argumentList.map(toWireValue);
        return [ processed.map((v => v[0])), myFlat(processed.map((v => v[1]))) ];
    }
    const transferCache = new WeakMap;
    function transfer(obj, transfers) {
        transferCache.set(obj, transfers);
        return obj;
    }
    function proxy(obj) {
        return Object.assign(obj, {
            [proxyMarker]: true
        });
    }
    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
        return {
            postMessage: (msg, transferables) => w.postMessage(msg, targetOrigin, transferables),
            addEventListener: context.addEventListener.bind(context),
            removeEventListener: context.removeEventListener.bind(context)
        };
    }
    function toWireValue(value) {
        for (const [name, handler] of transferHandlers) {
            if (handler.canHandle(value)) {
                const [serializedValue, transferables] = handler.serialize(value);
                return [ {
                    type: "HANDLER",
                    name,
                    value: serializedValue
                }, transferables ];
            }
        }
        return [ {
            type: "RAW",
            value
        }, transferCache.get(value) || [] ];
    }
    function fromWireValue(value) {
        switch (value.type) {
          case "HANDLER":
            return transferHandlers.get(value.name).deserialize(value.value);

          case "RAW":
            return value.value;
        }
    }
    function requestResponseMessage(ep, msg, transfers) {
        return new Promise((resolve => {
            const id = generateUUID();
            ep.addEventListener("message", (function l(ev) {
                if (!ev.data || !ev.data.id || ev.data.id !== id) {
                    return;
                }
                ep.removeEventListener("message", l);
                resolve(ev.data);
            }));
            if (ep.start) {
                ep.start();
            }
            ep.postMessage(Object.assign({
                id
            }, msg), transfers);
        }));
    }
    function generateUUID() {
        return new Array(4).fill(0).map((() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))).join("-");
    }
    function getSharedMemoryAvailable() {
        const globalScope = typeof window !== "undefined" ? window : globalThis;
        return typeof SharedArrayBuffer !== "undefined" && globalScope.crossOriginIsolated;
    }
    function getRemoteBarretenbergWasm(worker) {
        return wrap(worker);
    }
    function getNumCpu() {
        return navigator.hardwareConcurrency;
    }
    function threadLogger() {
        return undefined;
    }
    function killSelf() {
        self.close();
    }
    var browser = __webpack_require__(227);
    var browser_default = __webpack_require__.n(browser);
    const randomBytes = len => {
        const getWebCrypto = () => {
            if (typeof window !== "undefined" && window.crypto) return window.crypto;
            if (typeof globalThis !== "undefined" && globalThis.crypto) return globalThis.crypto;
            return undefined;
        };
        const crypto = getWebCrypto();
        if (!crypto) {
            throw new Error("randomBytes UnsupportedEnvironment");
        }
        const buf = new Uint8Array(len);
        const MAX_BYTES = 65536;
        if (len > MAX_BYTES) {
            for (let generated = 0; generated < len; generated += MAX_BYTES) {
                crypto.getRandomValues(buf.subarray(generated, generated + MAX_BYTES));
            }
        } else {
            crypto.getRandomValues(buf);
        }
        return buf;
    };
    class BarretenbergWasmBase {
        constructor() {
            this.memStore = {};
            this.logger = browser_default()("bb.js:bb_wasm_base");
        }
        getImportObj(memory) {
            const importObj = {
                wasi_snapshot_preview1: {
                    random_get: (out, length) => {
                        out = out >>> 0;
                        const randomData = randomBytes(length);
                        const mem = this.getMemory();
                        mem.set(randomData, out);
                    },
                    clock_time_get: (a1, a2, out) => {
                        out = out >>> 0;
                        const ts = BigInt((new Date).getTime()) * 1000000n;
                        const view = new DataView(this.getMemory().buffer);
                        view.setBigUint64(out, ts, true);
                    },
                    proc_exit: () => {
                        this.logger("PANIC: proc_exit was called.");
                        throw new Error;
                    }
                },
                env: {
                    logstr: addr => {
                        const str = this.stringFromAddress(addr);
                        const m = this.getMemory();
                        const str2 = \`\${str} (mem: \${(m.length / (1024 * 1024)).toFixed(2)}MiB)\`;
                        this.logger(str2);
                    },
                    get_data: (keyAddr, outBufAddr) => {
                        const key = this.stringFromAddress(keyAddr);
                        outBufAddr = outBufAddr >>> 0;
                        const data = this.memStore[key];
                        if (!data) {
                            this.logger(\`get_data miss \${key}\`);
                            return;
                        }
                        this.writeMemory(outBufAddr, data);
                    },
                    set_data: (keyAddr, dataAddr, dataLength) => {
                        const key = this.stringFromAddress(keyAddr);
                        dataAddr = dataAddr >>> 0;
                        this.memStore[key] = this.getMemorySlice(dataAddr, dataAddr + dataLength);
                    },
                    memory
                }
            };
            return importObj;
        }
        exports() {
            return this.instance.exports;
        }
        call(name, ...args) {
            if (!this.exports()[name]) {
                throw new Error(\`WASM function \${name} not found.\`);
            }
            try {
                return this.exports()[name](...args) >>> 0;
            } catch (err) {
                const message = \`WASM function \${name} aborted, error: \${err}\`;
                this.logger(message);
                this.logger(err.stack);
                throw err;
            }
        }
        memSize() {
            return this.getMemory().length;
        }
        getMemorySlice(start, end) {
            return this.getMemory().subarray(start, end).slice();
        }
        writeMemory(offset, arr) {
            const mem = this.getMemory();
            mem.set(arr, offset);
        }
        getMemory() {
            return new Uint8Array(this.memory.buffer);
        }
        stringFromAddress(addr) {
            addr = addr >>> 0;
            const m = this.getMemory();
            let i = addr;
            for (;m[i] !== 0; ++i) ;
            const textDecoder = new TextDecoder("ascii");
            return textDecoder.decode(m.slice(addr, i));
        }
    }
    class BarretenbergWasmThread extends BarretenbergWasmBase {
        async initThread(module, memory) {
            this.logger = threadLogger() || this.logger;
            this.memory = memory;
            this.instance = await WebAssembly.instantiate(module, this.getImportObj(this.memory));
        }
        destroy() {
            killSelf();
        }
        getImportObj(memory) {
            const baseImports = super.getImportObj(memory);
            return {
                ...baseImports,
                wasi: {
                    "thread-spawn": () => {
                        this.logger("PANIC: threads cannot spawn threads!");
                        this.logger((new Error).stack);
                        killSelf();
                    }
                },
                env: {
                    ...baseImports.env,
                    env_hardware_concurrency: () => 1
                }
            };
        }
    }
    self.onmessage = function(e) {
        if (e.data.debug) {
            browser_default().enable(e.data.debug);
        }
    };
    expose(new BarretenbergWasmThread);
    self.postMessage({
        ready: true
    });
    const thread_worker = null;
})();`,"Worker",void 0,void 0)}function Ci(){const e=new ki,n=Pe().disable();return Pe().enable(n),e.postMessage({debug:n}),e}class xi{constructor(){this.memStore={},this.logger=Pe()("bb.js:bb_wasm_base")}getImportObj(n){return{wasi_snapshot_preview1:{random_get:(r,a)=>{r=r>>>0;const s=Ye(a);this.getMemory().set(s,r)},clock_time_get:(r,a,s)=>{s=s>>>0;const c=BigInt(new Date().getTime())*1000000n;new DataView(this.getMemory().buffer).setBigUint64(s,c,!0)},proc_exit:()=>{throw this.logger("PANIC: proc_exit was called."),new Error}},env:{logstr:r=>{const a=this.stringFromAddress(r),s=this.getMemory(),c=`${a} (mem: ${(s.length/(1024*1024)).toFixed(2)}MiB)`;this.logger(c)},get_data:(r,a)=>{const s=this.stringFromAddress(r);a=a>>>0;const c=this.memStore[s];if(!c){this.logger(`get_data miss ${s}`);return}this.writeMemory(a,c)},set_data:(r,a,s)=>{const c=this.stringFromAddress(r);a=a>>>0,this.memStore[c]=this.getMemorySlice(a,a+s)},memory:n}}}exports(){return this.instance.exports}call(n,...t){if(!this.exports()[n])throw new Error(`WASM function ${n} not found.`);try{return this.exports()[n](...t)>>>0}catch(r){const a=`WASM function ${n} aborted, error: ${r}`;throw this.logger(a),this.logger(r.stack),r}}memSize(){return this.getMemory().length}getMemorySlice(n,t){return this.getMemory().subarray(n,t).slice()}writeMemory(n,t){this.getMemory().set(t,n)}getMemory(){return new Uint8Array(this.memory.buffer)}stringFromAddress(n){n=n>>>0;const t=this.getMemory();let r=n;for(;t[r]!==0;++r);return new TextDecoder("ascii").decode(t.slice(n,r))}}class Ai{constructor(n){this.wasm=n,this.allocs=[],this.inScratchRemaining=1024,this.outScratchRemaining=1024}getInputs(n){return n.map(t=>{if(typeof t=="object")if(t.length<=this.inScratchRemaining){const r=this.inScratchRemaining-=t.length;return this.wasm.writeMemory(r,t),r}else{const r=this.wasm.call("bbmalloc",t.length);return this.wasm.writeMemory(r,t),this.allocs.push(r),r}else return t})}getOutputPtrs(n){return n.map(t=>{const r=t||4;if(r<=this.outScratchRemaining)return this.outScratchRemaining-=r;{const a=this.wasm.call("bbmalloc",r);return this.allocs.push(a),a}})}addOutputPtr(n){n>=1024&&this.allocs.push(n)}freeAll(){for(const n of this.allocs)this.wasm.call("bbfree",n)}}class gn extends xi{constructor(){super(...arguments),this.workers=[],this.remoteWasms=[],this.nextWorker=0,this.nextThreadId=1}getNumThreads(){return this.workers.length+1}async init(n,t=Math.min(Ei(),gn.MAX_THREADS),r=Pe()("bb.js:bb_wasm"),a=32,s=2**16){this.logger=r;const c=a*2**16/(1024*1024),l=s*2**16/(1024*1024),d=Sr();this.logger(`Initializing bb wasm: initial memory ${a} pages ${c}MiB; max memory: ${s} pages, ${l}MiB; threads: ${t}; shared memory: ${d}`),this.memory=new WebAssembly.Memory({initial:a,maximum:s,shared:d});const f=await WebAssembly.instantiate(n,this.getImportObj(this.memory));this.instance=f,this.call("_initialize"),t>1&&(this.logger(`Creating ${t} worker threads`),this.workers=await Promise.all(Array.from({length:t-1}).map(Ci)),this.remoteWasms=await Promise.all(this.workers.map(Ir)),await Promise.all(this.remoteWasms.map(h=>h.initThread(n,this.memory))))}async destroy(){await Promise.all(this.workers.map(n=>n.terminate()))}getImportObj(n){const t=super.getImportObj(n);return{...t,wasi:{"thread-spawn":r=>{r=r>>>0;const a=this.nextThreadId++,s=this.nextWorker++%this.remoteWasms.length;return this.remoteWasms[s].call("wasi_thread_start",a,r).catch(this.logger),a}},env:{...t.env,env_hardware_concurrency:()=>this.remoteWasms.length+1}}}callWasmExport(n,t,r){const a=new Ai(this),s=a.getInputs(t),c=a.getOutputPtrs(r);this.call(n,...s,...c);const l=this.getOutputArgs(r,c,a);return a.freeAll(),l}getOutputArgs(n,t,r){return n.map((a,s)=>{if(a)return this.getMemorySlice(t[s],t[s]+a);const c=this.getMemorySlice(t[s],t[s]+4),l=new DataView(c.buffer,c.byteOffset,c.byteLength).getUint32(0,!0);r.addOutputPtr(l);const d=this.getMemorySlice(l,l+4),f=new DataView(d.buffer,d.byteOffset,d.byteLength).getUint32(0,!1);return this.getMemorySlice(l+4,l+4+f)})}}gn.MAX_THREADS=32;const Si=4,Br=0,Tr=1,Ii=2;function kt(e){let n=e.length;for(;--n>=0;)e[n]=0}const Bi=0,Fr=1,Ti=2,Fi=3,Di=258,On=29,Pt=256,Lt=Pt+1+On,Ct=30,Pn=19,Dr=2*Lt+1,dt=15,Ln=16,Mi=7,Wn=256,Mr=16,Rr=17,Ur=18,Zn=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),_n=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Ri=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),zr=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ui=512,Ge=new Array((Lt+2)*2);kt(Ge);const Wt=new Array(Ct*2);kt(Wt);const Zt=new Array(Ui);kt(Zt);const Vt=new Array(Di-Fi+1);kt(Vt);const Vn=new Array(On);kt(Vn);const wn=new Array(Ct);kt(wn);function jn(e,n,t,r,a){this.static_tree=e,this.extra_bits=n,this.extra_base=t,this.elems=r,this.max_length=a,this.has_stree=e&&e.length}let Nr,Or,Pr;function Hn(e,n){this.dyn_tree=e,this.max_code=0,this.stat_desc=n}const Lr=e=>e<256?Zt[e]:Zt[256+(e>>>7)],jt=(e,n)=>{e.pending_buf[e.pending++]=n&255,e.pending_buf[e.pending++]=n>>>8&255},Se=(e,n,t)=>{e.bi_valid>Ln-t?(e.bi_buf|=n<<e.bi_valid&65535,jt(e,e.bi_buf),e.bi_buf=n>>Ln-e.bi_valid,e.bi_valid+=t-Ln):(e.bi_buf|=n<<e.bi_valid&65535,e.bi_valid+=t)},Le=(e,n,t)=>{Se(e,t[n*2],t[n*2+1])},Wr=(e,n)=>{let t=0;do t|=e&1,e>>>=1,t<<=1;while(--n>0);return t>>>1},zi=e=>{e.bi_valid===16?(jt(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)},Ni=(e,n)=>{const t=n.dyn_tree,r=n.max_code,a=n.stat_desc.static_tree,s=n.stat_desc.has_stree,c=n.stat_desc.extra_bits,l=n.stat_desc.extra_base,d=n.stat_desc.max_length;let f,h,k,v,b,R,ce=0;for(v=0;v<=dt;v++)e.bl_count[v]=0;for(t[e.heap[e.heap_max]*2+1]=0,f=e.heap_max+1;f<Dr;f++)h=e.heap[f],v=t[t[h*2+1]*2+1]+1,v>d&&(v=d,ce++),t[h*2+1]=v,!(h>r)&&(e.bl_count[v]++,b=0,h>=l&&(b=c[h-l]),R=t[h*2],e.opt_len+=R*(v+b),s&&(e.static_len+=R*(a[h*2+1]+b)));if(ce!==0){do{for(v=d-1;e.bl_count[v]===0;)v--;e.bl_count[v]--,e.bl_count[v+1]+=2,e.bl_count[d]--,ce-=2}while(ce>0);for(v=d;v!==0;v--)for(h=e.bl_count[v];h!==0;)k=e.heap[--f],!(k>r)&&(t[k*2+1]!==v&&(e.opt_len+=(v-t[k*2+1])*t[k*2],t[k*2+1]=v),h--)}},Zr=(e,n,t)=>{const r=new Array(dt+1);let a=0,s,c;for(s=1;s<=dt;s++)a=a+t[s-1]<<1,r[s]=a;for(c=0;c<=n;c++){let l=e[c*2+1];l!==0&&(e[c*2]=Wr(r[l]++,l))}},Oi=()=>{let e,n,t,r,a;const s=new Array(dt+1);for(t=0,r=0;r<On-1;r++)for(Vn[r]=t,e=0;e<1<<Zn[r];e++)Vt[t++]=r;for(Vt[t-1]=r,a=0,r=0;r<16;r++)for(wn[r]=a,e=0;e<1<<_n[r];e++)Zt[a++]=r;for(a>>=7;r<Ct;r++)for(wn[r]=a<<7,e=0;e<1<<_n[r]-7;e++)Zt[256+a++]=r;for(n=0;n<=dt;n++)s[n]=0;for(e=0;e<=143;)Ge[e*2+1]=8,e++,s[8]++;for(;e<=255;)Ge[e*2+1]=9,e++,s[9]++;for(;e<=279;)Ge[e*2+1]=7,e++,s[7]++;for(;e<=287;)Ge[e*2+1]=8,e++,s[8]++;for(Zr(Ge,Lt+1,s),e=0;e<Ct;e++)Wt[e*2+1]=5,Wt[e*2]=Wr(e,5);Nr=new jn(Ge,Zn,Pt+1,Lt,dt),Or=new jn(Wt,_n,0,Ct,dt),Pr=new jn(new Array(0),Ri,0,Pn,Mi)},Vr=e=>{let n;for(n=0;n<Lt;n++)e.dyn_ltree[n*2]=0;for(n=0;n<Ct;n++)e.dyn_dtree[n*2]=0;for(n=0;n<Pn;n++)e.bl_tree[n*2]=0;e.dyn_ltree[Wn*2]=1,e.opt_len=e.static_len=0,e.sym_next=e.matches=0},jr=e=>{e.bi_valid>8?jt(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},Hr=(e,n,t,r)=>{const a=n*2,s=t*2;return e[a]<e[s]||e[a]===e[s]&&r[n]<=r[t]},$n=(e,n,t)=>{const r=e.heap[t];let a=t<<1;for(;a<=e.heap_len&&(a<e.heap_len&&Hr(n,e.heap[a+1],e.heap[a],e.depth)&&a++,!Hr(n,r,e.heap[a],e.depth));)e.heap[t]=e.heap[a],t=a,a<<=1;e.heap[t]=r},$r=(e,n,t)=>{let r,a,s=0,c,l;if(e.sym_next!==0)do r=e.pending_buf[e.sym_buf+s++]&255,r+=(e.pending_buf[e.sym_buf+s++]&255)<<8,a=e.pending_buf[e.sym_buf+s++],r===0?Le(e,a,n):(c=Vt[a],Le(e,c+Pt+1,n),l=Zn[c],l!==0&&(a-=Vn[c],Se(e,a,l)),r--,c=Lr(r),Le(e,c,t),l=_n[c],l!==0&&(r-=wn[c],Se(e,r,l)));while(s<e.sym_next);Le(e,Wn,n)},Yn=(e,n)=>{const t=n.dyn_tree,r=n.stat_desc.static_tree,a=n.stat_desc.has_stree,s=n.stat_desc.elems;let c,l,d=-1,f;for(e.heap_len=0,e.heap_max=Dr,c=0;c<s;c++)t[c*2]!==0?(e.heap[++e.heap_len]=d=c,e.depth[c]=0):t[c*2+1]=0;for(;e.heap_len<2;)f=e.heap[++e.heap_len]=d<2?++d:0,t[f*2]=1,e.depth[f]=0,e.opt_len--,a&&(e.static_len-=r[f*2+1]);for(n.max_code=d,c=e.heap_len>>1;c>=1;c--)$n(e,t,c);f=s;do c=e.heap[1],e.heap[1]=e.heap[e.heap_len--],$n(e,t,1),l=e.heap[1],e.heap[--e.heap_max]=c,e.heap[--e.heap_max]=l,t[f*2]=t[c*2]+t[l*2],e.depth[f]=(e.depth[c]>=e.depth[l]?e.depth[c]:e.depth[l])+1,t[c*2+1]=t[l*2+1]=f,e.heap[1]=f++,$n(e,t,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Ni(e,n),Zr(t,d,e.bl_count)},Yr=(e,n,t)=>{let r,a=-1,s,c=n[0*2+1],l=0,d=7,f=4;for(c===0&&(d=138,f=3),n[(t+1)*2+1]=65535,r=0;r<=t;r++)s=c,c=n[(r+1)*2+1],!(++l<d&&s===c)&&(l<f?e.bl_tree[s*2]+=l:s!==0?(s!==a&&e.bl_tree[s*2]++,e.bl_tree[Mr*2]++):l<=10?e.bl_tree[Rr*2]++:e.bl_tree[Ur*2]++,l=0,a=s,c===0?(d=138,f=3):s===c?(d=6,f=3):(d=7,f=4))},Gr=(e,n,t)=>{let r,a=-1,s,c=n[0*2+1],l=0,d=7,f=4;for(c===0&&(d=138,f=3),r=0;r<=t;r++)if(s=c,c=n[(r+1)*2+1],!(++l<d&&s===c)){if(l<f)do Le(e,s,e.bl_tree);while(--l!==0);else s!==0?(s!==a&&(Le(e,s,e.bl_tree),l--),Le(e,Mr,e.bl_tree),Se(e,l-3,2)):l<=10?(Le(e,Rr,e.bl_tree),Se(e,l-3,3)):(Le(e,Ur,e.bl_tree),Se(e,l-11,7));l=0,a=s,c===0?(d=138,f=3):s===c?(d=6,f=3):(d=7,f=4)}},Pi=e=>{let n;for(Yr(e,e.dyn_ltree,e.l_desc.max_code),Yr(e,e.dyn_dtree,e.d_desc.max_code),Yn(e,e.bl_desc),n=Pn-1;n>=3&&e.bl_tree[zr[n]*2+1]===0;n--);return e.opt_len+=3*(n+1)+5+5+4,n},Li=(e,n,t,r)=>{let a;for(Se(e,n-257,5),Se(e,t-1,5),Se(e,r-4,4),a=0;a<r;a++)Se(e,e.bl_tree[zr[a]*2+1],3);Gr(e,e.dyn_ltree,n-1),Gr(e,e.dyn_dtree,t-1)},Wi=e=>{let n=4093624447,t;for(t=0;t<=31;t++,n>>>=1)if(n&1&&e.dyn_ltree[t*2]!==0)return Br;if(e.dyn_ltree[9*2]!==0||e.dyn_ltree[10*2]!==0||e.dyn_ltree[13*2]!==0)return Tr;for(t=32;t<Pt;t++)if(e.dyn_ltree[t*2]!==0)return Tr;return Br};let qr=!1;const Zi=e=>{qr||(Oi(),qr=!0),e.l_desc=new Hn(e.dyn_ltree,Nr),e.d_desc=new Hn(e.dyn_dtree,Or),e.bl_desc=new Hn(e.bl_tree,Pr),e.bi_buf=0,e.bi_valid=0,Vr(e)},Kr=(e,n,t,r)=>{Se(e,(Bi<<1)+(r?1:0),3),jr(e),jt(e,t),jt(e,~t),t&&e.pending_buf.set(e.window.subarray(n,n+t),e.pending),e.pending+=t},Vi=e=>{Se(e,Fr<<1,3),Le(e,Wn,Ge),zi(e)},ji=(e,n,t,r)=>{let a,s,c=0;e.level>0?(e.strm.data_type===Ii&&(e.strm.data_type=Wi(e)),Yn(e,e.l_desc),Yn(e,e.d_desc),c=Pi(e),a=e.opt_len+3+7>>>3,s=e.static_len+3+7>>>3,s<=a&&(a=s)):a=s=t+5,t+4<=a&&n!==-1?Kr(e,n,t,r):e.strategy===Si||s===a?(Se(e,(Fr<<1)+(r?1:0),3),$r(e,Ge,Wt)):(Se(e,(Ti<<1)+(r?1:0),3),Li(e,e.l_desc.max_code+1,e.d_desc.max_code+1,c+1),$r(e,e.dyn_ltree,e.dyn_dtree)),Vr(e),r&&jr(e)},Hi=(e,n,t)=>(e.pending_buf[e.sym_buf+e.sym_next++]=n,e.pending_buf[e.sym_buf+e.sym_next++]=n>>8,e.pending_buf[e.sym_buf+e.sym_next++]=t,n===0?e.dyn_ltree[t*2]++:(e.matches++,n--,e.dyn_ltree[(Vt[t]+Pt+1)*2]++,e.dyn_dtree[Lr(n)*2]++),e.sym_next===e.sym_end);var $i=Zi,Yi=Kr,Gi=ji,qi=Hi,Ki=Vi,Xi={_tr_init:$i,_tr_stored_block:Yi,_tr_flush_block:Gi,_tr_tally:qi,_tr_align:Ki},Ht=(e,n,t,r)=>{let a=e&65535|0,s=e>>>16&65535|0,c=0;for(;t!==0;){c=t>2e3?2e3:t,t-=c;do a=a+n[r++]|0,s=s+a|0;while(--c);a%=65521,s%=65521}return a|s<<16|0};const Ji=()=>{let e,n=[];for(var t=0;t<256;t++){e=t;for(var r=0;r<8;r++)e=e&1?3988292384^e>>>1:e>>>1;n[t]=e}return n},Qi=new Uint32Array(Ji());var ve=(e,n,t,r)=>{const a=Qi,s=r+t;e^=-1;for(let c=r;c<s;c++)e=e>>>8^a[(e^n[c])&255];return e^-1},ht={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},$t={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:es,_tr_stored_block:Gn,_tr_flush_block:ts,_tr_tally:rt,_tr_align:ns}=Xi,{Z_NO_FLUSH:at,Z_PARTIAL_FLUSH:rs,Z_FULL_FLUSH:as,Z_FINISH:Me,Z_BLOCK:Xr,Z_OK:Ee,Z_STREAM_END:Jr,Z_STREAM_ERROR:We,Z_DATA_ERROR:is,Z_BUF_ERROR:qn,Z_DEFAULT_COMPRESSION:ss,Z_FILTERED:os,Z_HUFFMAN_ONLY:yn,Z_RLE:cs,Z_FIXED:ls,Z_DEFAULT_STRATEGY:us,Z_UNKNOWN:fs,Z_DEFLATED:bn}=$t,ps=9,ds=15,hs=8,Kn=256+1+29,ms=30,gs=19,_s=2*Kn+1,ws=15,ee=3,it=258,Ze=it+ee+1,ys=32,xt=42,Xn=57,Jn=69,Qn=73,er=91,tr=103,mt=113,Yt=666,Ce=1,At=2,gt=3,St=4,bs=3,_t=(e,n)=>(e.msg=ht[n],n),Qr=e=>e*2-(e>4?9:0),st=e=>{let n=e.length;for(;--n>=0;)e[n]=0},vs=e=>{let n,t,r,a=e.w_size;n=e.hash_size,r=n;do t=e.head[--r],e.head[r]=t>=a?t-a:0;while(--n);n=a,r=n;do t=e.prev[--r],e.prev[r]=t>=a?t-a:0;while(--n)};let ot=(e,n,t)=>(n<<e.hash_shift^t)&e.hash_mask;const Ie=e=>{const n=e.state;let t=n.pending;t>e.avail_out&&(t=e.avail_out),t!==0&&(e.output.set(n.pending_buf.subarray(n.pending_out,n.pending_out+t),e.next_out),e.next_out+=t,n.pending_out+=t,e.total_out+=t,e.avail_out-=t,n.pending-=t,n.pending===0&&(n.pending_out=0))},Be=(e,n)=>{ts(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,n),e.block_start=e.strstart,Ie(e.strm)},ae=(e,n)=>{e.pending_buf[e.pending++]=n},Gt=(e,n)=>{e.pending_buf[e.pending++]=n>>>8&255,e.pending_buf[e.pending++]=n&255},nr=(e,n,t,r)=>{let a=e.avail_in;return a>r&&(a=r),a===0?0:(e.avail_in-=a,n.set(e.input.subarray(e.next_in,e.next_in+a),t),e.state.wrap===1?e.adler=Ht(e.adler,n,a,t):e.state.wrap===2&&(e.adler=ve(e.adler,n,a,t)),e.next_in+=a,e.total_in+=a,a)},ea=(e,n)=>{let t=e.max_chain_length,r=e.strstart,a,s,c=e.prev_length,l=e.nice_match;const d=e.strstart>e.w_size-Ze?e.strstart-(e.w_size-Ze):0,f=e.window,h=e.w_mask,k=e.prev,v=e.strstart+it;let b=f[r+c-1],R=f[r+c];e.prev_length>=e.good_match&&(t>>=2),l>e.lookahead&&(l=e.lookahead);do if(a=n,!(f[a+c]!==R||f[a+c-1]!==b||f[a]!==f[r]||f[++a]!==f[r+1])){r+=2,a++;do;while(f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&f[++r]===f[++a]&&r<v);if(s=it-(v-r),r=v-it,s>c){if(e.match_start=n,c=s,s>=l)break;b=f[r+c-1],R=f[r+c]}}while((n=k[n&h])>d&&--t!==0);return c<=e.lookahead?c:e.lookahead},It=e=>{const n=e.w_size;let t,r,a;do{if(r=e.window_size-e.lookahead-e.strstart,e.strstart>=n+(n-Ze)&&(e.window.set(e.window.subarray(n,n+n-r),0),e.match_start-=n,e.strstart-=n,e.block_start-=n,e.insert>e.strstart&&(e.insert=e.strstart),vs(e),r+=n),e.strm.avail_in===0)break;if(t=nr(e.strm,e.window,e.strstart+e.lookahead,r),e.lookahead+=t,e.lookahead+e.insert>=ee)for(a=e.strstart-e.insert,e.ins_h=e.window[a],e.ins_h=ot(e,e.ins_h,e.window[a+1]);e.insert&&(e.ins_h=ot(e,e.ins_h,e.window[a+ee-1]),e.prev[a&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=a,a++,e.insert--,!(e.lookahead+e.insert<ee)););}while(e.lookahead<Ze&&e.strm.avail_in!==0)},ta=(e,n)=>{let t=e.pending_buf_size-5>e.w_size?e.w_size:e.pending_buf_size-5,r,a,s,c=0,l=e.strm.avail_in;do{if(r=65535,s=e.bi_valid+42>>3,e.strm.avail_out<s||(s=e.strm.avail_out-s,a=e.strstart-e.block_start,r>a+e.strm.avail_in&&(r=a+e.strm.avail_in),r>s&&(r=s),r<t&&(r===0&&n!==Me||n===at||r!==a+e.strm.avail_in)))break;c=n===Me&&r===a+e.strm.avail_in?1:0,Gn(e,0,0,c),e.pending_buf[e.pending-4]=r,e.pending_buf[e.pending-3]=r>>8,e.pending_buf[e.pending-2]=~r,e.pending_buf[e.pending-1]=~r>>8,Ie(e.strm),a&&(a>r&&(a=r),e.strm.output.set(e.window.subarray(e.block_start,e.block_start+a),e.strm.next_out),e.strm.next_out+=a,e.strm.avail_out-=a,e.strm.total_out+=a,e.block_start+=a,r-=a),r&&(nr(e.strm,e.strm.output,e.strm.next_out,r),e.strm.next_out+=r,e.strm.avail_out-=r,e.strm.total_out+=r)}while(c===0);return l-=e.strm.avail_in,l&&(l>=e.w_size?(e.matches=2,e.window.set(e.strm.input.subarray(e.strm.next_in-e.w_size,e.strm.next_in),0),e.strstart=e.w_size,e.insert=e.strstart):(e.window_size-e.strstart<=l&&(e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,e.insert>e.strstart&&(e.insert=e.strstart)),e.window.set(e.strm.input.subarray(e.strm.next_in-l,e.strm.next_in),e.strstart),e.strstart+=l,e.insert+=l>e.w_size-e.insert?e.w_size-e.insert:l),e.block_start=e.strstart),e.high_water<e.strstart&&(e.high_water=e.strstart),c?St:n!==at&&n!==Me&&e.strm.avail_in===0&&e.strstart===e.block_start?At:(s=e.window_size-e.strstart,e.strm.avail_in>s&&e.block_start>=e.w_size&&(e.block_start-=e.w_size,e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,s+=e.w_size,e.insert>e.strstart&&(e.insert=e.strstart)),s>e.strm.avail_in&&(s=e.strm.avail_in),s&&(nr(e.strm,e.window,e.strstart,s),e.strstart+=s,e.insert+=s>e.w_size-e.insert?e.w_size-e.insert:s),e.high_water<e.strstart&&(e.high_water=e.strstart),s=e.bi_valid+42>>3,s=e.pending_buf_size-s>65535?65535:e.pending_buf_size-s,t=s>e.w_size?e.w_size:s,a=e.strstart-e.block_start,(a>=t||(a||n===Me)&&n!==at&&e.strm.avail_in===0&&a<=s)&&(r=a>s?s:a,c=n===Me&&e.strm.avail_in===0&&r===a?1:0,Gn(e,e.block_start,r,c),e.block_start+=r,Ie(e.strm)),c?gt:Ce)},rr=(e,n)=>{let t,r;for(;;){if(e.lookahead<Ze){if(It(e),e.lookahead<Ze&&n===at)return Ce;if(e.lookahead===0)break}if(t=0,e.lookahead>=ee&&(e.ins_h=ot(e,e.ins_h,e.window[e.strstart+ee-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),t!==0&&e.strstart-t<=e.w_size-Ze&&(e.match_length=ea(e,t)),e.match_length>=ee)if(r=rt(e,e.strstart-e.match_start,e.match_length-ee),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=ee){e.match_length--;do e.strstart++,e.ins_h=ot(e,e.ins_h,e.window[e.strstart+ee-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=ot(e,e.ins_h,e.window[e.strstart+1]);else r=rt(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(Be(e,!1),e.strm.avail_out===0))return Ce}return e.insert=e.strstart<ee-1?e.strstart:ee-1,n===Me?(Be(e,!0),e.strm.avail_out===0?gt:St):e.sym_next&&(Be(e,!1),e.strm.avail_out===0)?Ce:At},Bt=(e,n)=>{let t,r,a;for(;;){if(e.lookahead<Ze){if(It(e),e.lookahead<Ze&&n===at)return Ce;if(e.lookahead===0)break}if(t=0,e.lookahead>=ee&&(e.ins_h=ot(e,e.ins_h,e.window[e.strstart+ee-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=ee-1,t!==0&&e.prev_length<e.max_lazy_match&&e.strstart-t<=e.w_size-Ze&&(e.match_length=ea(e,t),e.match_length<=5&&(e.strategy===os||e.match_length===ee&&e.strstart-e.match_start>4096)&&(e.match_length=ee-1)),e.prev_length>=ee&&e.match_length<=e.prev_length){a=e.strstart+e.lookahead-ee,r=rt(e,e.strstart-1-e.prev_match,e.prev_length-ee),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=a&&(e.ins_h=ot(e,e.ins_h,e.window[e.strstart+ee-1]),t=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=ee-1,e.strstart++,r&&(Be(e,!1),e.strm.avail_out===0))return Ce}else if(e.match_available){if(r=rt(e,0,e.window[e.strstart-1]),r&&Be(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return Ce}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(r=rt(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<ee-1?e.strstart:ee-1,n===Me?(Be(e,!0),e.strm.avail_out===0?gt:St):e.sym_next&&(Be(e,!1),e.strm.avail_out===0)?Ce:At},Es=(e,n)=>{let t,r,a,s;const c=e.window;for(;;){if(e.lookahead<=it){if(It(e),e.lookahead<=it&&n===at)return Ce;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=ee&&e.strstart>0&&(a=e.strstart-1,r=c[a],r===c[++a]&&r===c[++a]&&r===c[++a])){s=e.strstart+it;do;while(r===c[++a]&&r===c[++a]&&r===c[++a]&&r===c[++a]&&r===c[++a]&&r===c[++a]&&r===c[++a]&&r===c[++a]&&a<s);e.match_length=it-(s-a),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=ee?(t=rt(e,1,e.match_length-ee),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(t=rt(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),t&&(Be(e,!1),e.strm.avail_out===0))return Ce}return e.insert=0,n===Me?(Be(e,!0),e.strm.avail_out===0?gt:St):e.sym_next&&(Be(e,!1),e.strm.avail_out===0)?Ce:At},ks=(e,n)=>{let t;for(;;){if(e.lookahead===0&&(It(e),e.lookahead===0)){if(n===at)return Ce;break}if(e.match_length=0,t=rt(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,t&&(Be(e,!1),e.strm.avail_out===0))return Ce}return e.insert=0,n===Me?(Be(e,!0),e.strm.avail_out===0?gt:St):e.sym_next&&(Be(e,!1),e.strm.avail_out===0)?Ce:At};function Ve(e,n,t,r,a){this.good_length=e,this.max_lazy=n,this.nice_length=t,this.max_chain=r,this.func=a}const qt=[new Ve(0,0,0,0,ta),new Ve(4,4,8,4,rr),new Ve(4,5,16,8,rr),new Ve(4,6,32,32,rr),new Ve(4,4,16,16,Bt),new Ve(8,16,32,32,Bt),new Ve(8,16,128,128,Bt),new Ve(8,32,128,256,Bt),new Ve(32,128,258,1024,Bt),new Ve(32,258,258,4096,Bt)],Cs=e=>{e.window_size=2*e.w_size,st(e.head),e.max_lazy_match=qt[e.level].max_lazy,e.good_match=qt[e.level].good_length,e.nice_match=qt[e.level].nice_length,e.max_chain_length=qt[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=ee-1,e.match_available=0,e.ins_h=0};function xs(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=bn,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(_s*2),this.dyn_dtree=new Uint16Array((2*ms+1)*2),this.bl_tree=new Uint16Array((2*gs+1)*2),st(this.dyn_ltree),st(this.dyn_dtree),st(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(ws+1),this.heap=new Uint16Array(2*Kn+1),st(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*Kn+1),st(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const Kt=e=>{if(!e)return 1;const n=e.state;return!n||n.strm!==e||n.status!==xt&&n.status!==Xn&&n.status!==Jn&&n.status!==Qn&&n.status!==er&&n.status!==tr&&n.status!==mt&&n.status!==Yt?1:0},na=e=>{if(Kt(e))return _t(e,We);e.total_in=e.total_out=0,e.data_type=fs;const n=e.state;return n.pending=0,n.pending_out=0,n.wrap<0&&(n.wrap=-n.wrap),n.status=n.wrap===2?Xn:n.wrap?xt:mt,e.adler=n.wrap===2?0:1,n.last_flush=-2,es(n),Ee},ra=e=>{const n=na(e);return n===Ee&&Cs(e.state),n},As=(e,n)=>Kt(e)||e.state.wrap!==2?We:(e.state.gzhead=n,Ee),aa=(e,n,t,r,a,s)=>{if(!e)return We;let c=1;if(n===ss&&(n=6),r<0?(c=0,r=-r):r>15&&(c=2,r-=16),a<1||a>ps||t!==bn||r<8||r>15||n<0||n>9||s<0||s>ls||r===8&&c!==1)return _t(e,We);r===8&&(r=9);const l=new xs;return e.state=l,l.strm=e,l.status=xt,l.wrap=c,l.gzhead=null,l.w_bits=r,l.w_size=1<<l.w_bits,l.w_mask=l.w_size-1,l.hash_bits=a+7,l.hash_size=1<<l.hash_bits,l.hash_mask=l.hash_size-1,l.hash_shift=~~((l.hash_bits+ee-1)/ee),l.window=new Uint8Array(l.w_size*2),l.head=new Uint16Array(l.hash_size),l.prev=new Uint16Array(l.w_size),l.lit_bufsize=1<<a+6,l.pending_buf_size=l.lit_bufsize*4,l.pending_buf=new Uint8Array(l.pending_buf_size),l.sym_buf=l.lit_bufsize,l.sym_end=(l.lit_bufsize-1)*3,l.level=n,l.strategy=s,l.method=t,ra(e)},Ss=(e,n)=>aa(e,n,bn,ds,hs,us),Is=(e,n)=>{if(Kt(e)||n>Xr||n<0)return e?_t(e,We):We;const t=e.state;if(!e.output||e.avail_in!==0&&!e.input||t.status===Yt&&n!==Me)return _t(e,e.avail_out===0?qn:We);const r=t.last_flush;if(t.last_flush=n,t.pending!==0){if(Ie(e),e.avail_out===0)return t.last_flush=-1,Ee}else if(e.avail_in===0&&Qr(n)<=Qr(r)&&n!==Me)return _t(e,qn);if(t.status===Yt&&e.avail_in!==0)return _t(e,qn);if(t.status===xt&&t.wrap===0&&(t.status=mt),t.status===xt){let a=bn+(t.w_bits-8<<4)<<8,s=-1;if(t.strategy>=yn||t.level<2?s=0:t.level<6?s=1:t.level===6?s=2:s=3,a|=s<<6,t.strstart!==0&&(a|=ys),a+=31-a%31,Gt(t,a),t.strstart!==0&&(Gt(t,e.adler>>>16),Gt(t,e.adler&65535)),e.adler=1,t.status=mt,Ie(e),t.pending!==0)return t.last_flush=-1,Ee}if(t.status===Xn){if(e.adler=0,ae(t,31),ae(t,139),ae(t,8),t.gzhead)ae(t,(t.gzhead.text?1:0)+(t.gzhead.hcrc?2:0)+(t.gzhead.extra?4:0)+(t.gzhead.name?8:0)+(t.gzhead.comment?16:0)),ae(t,t.gzhead.time&255),ae(t,t.gzhead.time>>8&255),ae(t,t.gzhead.time>>16&255),ae(t,t.gzhead.time>>24&255),ae(t,t.level===9?2:t.strategy>=yn||t.level<2?4:0),ae(t,t.gzhead.os&255),t.gzhead.extra&&t.gzhead.extra.length&&(ae(t,t.gzhead.extra.length&255),ae(t,t.gzhead.extra.length>>8&255)),t.gzhead.hcrc&&(e.adler=ve(e.adler,t.pending_buf,t.pending,0)),t.gzindex=0,t.status=Jn;else if(ae(t,0),ae(t,0),ae(t,0),ae(t,0),ae(t,0),ae(t,t.level===9?2:t.strategy>=yn||t.level<2?4:0),ae(t,bs),t.status=mt,Ie(e),t.pending!==0)return t.last_flush=-1,Ee}if(t.status===Jn){if(t.gzhead.extra){let a=t.pending,s=(t.gzhead.extra.length&65535)-t.gzindex;for(;t.pending+s>t.pending_buf_size;){let l=t.pending_buf_size-t.pending;if(t.pending_buf.set(t.gzhead.extra.subarray(t.gzindex,t.gzindex+l),t.pending),t.pending=t.pending_buf_size,t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a)),t.gzindex+=l,Ie(e),t.pending!==0)return t.last_flush=-1,Ee;a=0,s-=l}let c=new Uint8Array(t.gzhead.extra);t.pending_buf.set(c.subarray(t.gzindex,t.gzindex+s),t.pending),t.pending+=s,t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a)),t.gzindex=0}t.status=Qn}if(t.status===Qn){if(t.gzhead.name){let a=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a)),Ie(e),t.pending!==0)return t.last_flush=-1,Ee;a=0}t.gzindex<t.gzhead.name.length?s=t.gzhead.name.charCodeAt(t.gzindex++)&255:s=0,ae(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a)),t.gzindex=0}t.status=er}if(t.status===er){if(t.gzhead.comment){let a=t.pending,s;do{if(t.pending===t.pending_buf_size){if(t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a)),Ie(e),t.pending!==0)return t.last_flush=-1,Ee;a=0}t.gzindex<t.gzhead.comment.length?s=t.gzhead.comment.charCodeAt(t.gzindex++)&255:s=0,ae(t,s)}while(s!==0);t.gzhead.hcrc&&t.pending>a&&(e.adler=ve(e.adler,t.pending_buf,t.pending-a,a))}t.status=tr}if(t.status===tr){if(t.gzhead.hcrc){if(t.pending+2>t.pending_buf_size&&(Ie(e),t.pending!==0))return t.last_flush=-1,Ee;ae(t,e.adler&255),ae(t,e.adler>>8&255),e.adler=0}if(t.status=mt,Ie(e),t.pending!==0)return t.last_flush=-1,Ee}if(e.avail_in!==0||t.lookahead!==0||n!==at&&t.status!==Yt){let a=t.level===0?ta(t,n):t.strategy===yn?ks(t,n):t.strategy===cs?Es(t,n):qt[t.level].func(t,n);if((a===gt||a===St)&&(t.status=Yt),a===Ce||a===gt)return e.avail_out===0&&(t.last_flush=-1),Ee;if(a===At&&(n===rs?ns(t):n!==Xr&&(Gn(t,0,0,!1),n===as&&(st(t.head),t.lookahead===0&&(t.strstart=0,t.block_start=0,t.insert=0))),Ie(e),e.avail_out===0))return t.last_flush=-1,Ee}return n!==Me?Ee:t.wrap<=0?Jr:(t.wrap===2?(ae(t,e.adler&255),ae(t,e.adler>>8&255),ae(t,e.adler>>16&255),ae(t,e.adler>>24&255),ae(t,e.total_in&255),ae(t,e.total_in>>8&255),ae(t,e.total_in>>16&255),ae(t,e.total_in>>24&255)):(Gt(t,e.adler>>>16),Gt(t,e.adler&65535)),Ie(e),t.wrap>0&&(t.wrap=-t.wrap),t.pending!==0?Ee:Jr)},Bs=e=>{if(Kt(e))return We;const n=e.state.status;return e.state=null,n===mt?_t(e,is):Ee},Ts=(e,n)=>{let t=n.length;if(Kt(e))return We;const r=e.state,a=r.wrap;if(a===2||a===1&&r.status!==xt||r.lookahead)return We;if(a===1&&(e.adler=Ht(e.adler,n,t,0)),r.wrap=0,t>=r.w_size){a===0&&(st(r.head),r.strstart=0,r.block_start=0,r.insert=0);let d=new Uint8Array(r.w_size);d.set(n.subarray(t-r.w_size,t),0),n=d,t=r.w_size}const s=e.avail_in,c=e.next_in,l=e.input;for(e.avail_in=t,e.next_in=0,e.input=n,It(r);r.lookahead>=ee;){let d=r.strstart,f=r.lookahead-(ee-1);do r.ins_h=ot(r,r.ins_h,r.window[d+ee-1]),r.prev[d&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=d,d++;while(--f);r.strstart=d,r.lookahead=ee-1,It(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=ee-1,r.match_available=0,e.next_in=c,e.input=l,e.avail_in=s,r.wrap=a,Ee};var Fs=Ss,Ds=aa,Ms=ra,Rs=na,Us=As,zs=Is,Ns=Bs,Os=Ts,Ps="pako deflate (from Nodeca project)",Xt={deflateInit:Fs,deflateInit2:Ds,deflateReset:Ms,deflateResetKeep:Rs,deflateSetHeader:Us,deflate:zs,deflateEnd:Ns,deflateSetDictionary:Os,deflateInfo:Ps};const Ls=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var Ws=function(e){const n=Array.prototype.slice.call(arguments,1);for(;n.length;){const t=n.shift();if(t){if(typeof t!="object")throw new TypeError(t+"must be non-object");for(const r in t)Ls(t,r)&&(e[r]=t[r])}}return e},Zs=e=>{let n=0;for(let r=0,a=e.length;r<a;r++)n+=e[r].length;const t=new Uint8Array(n);for(let r=0,a=0,s=e.length;r<s;r++){let c=e[r];t.set(c,a),a+=c.length}return t},vn={assign:Ws,flattenChunks:Zs};let ia=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{ia=!1}const Jt=new Uint8Array(256);for(let e=0;e<256;e++)Jt[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;Jt[254]=Jt[254]=1;var Vs=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let n,t,r,a,s,c=e.length,l=0;for(a=0;a<c;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<c&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),l+=t<128?1:t<2048?2:t<65536?3:4;for(n=new Uint8Array(l),s=0,a=0;s<l;a++)t=e.charCodeAt(a),(t&64512)===55296&&a+1<c&&(r=e.charCodeAt(a+1),(r&64512)===56320&&(t=65536+(t-55296<<10)+(r-56320),a++)),t<128?n[s++]=t:t<2048?(n[s++]=192|t>>>6,n[s++]=128|t&63):t<65536?(n[s++]=224|t>>>12,n[s++]=128|t>>>6&63,n[s++]=128|t&63):(n[s++]=240|t>>>18,n[s++]=128|t>>>12&63,n[s++]=128|t>>>6&63,n[s++]=128|t&63);return n};const js=(e,n)=>{if(n<65534&&e.subarray&&ia)return String.fromCharCode.apply(null,e.length===n?e:e.subarray(0,n));let t="";for(let r=0;r<n;r++)t+=String.fromCharCode(e[r]);return t};var Hs=(e,n)=>{const t=n||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,n));let r,a;const s=new Array(t*2);for(a=0,r=0;r<t;){let c=e[r++];if(c<128){s[a++]=c;continue}let l=Jt[c];if(l>4){s[a++]=65533,r+=l-1;continue}for(c&=l===2?31:l===3?15:7;l>1&&r<t;)c=c<<6|e[r++]&63,l--;if(l>1){s[a++]=65533;continue}c<65536?s[a++]=c:(c-=65536,s[a++]=55296|c>>10&1023,s[a++]=56320|c&1023)}return js(s,a)},$s=(e,n)=>{n=n||e.length,n>e.length&&(n=e.length);let t=n-1;for(;t>=0&&(e[t]&192)===128;)t--;return t<0||t===0?n:t+Jt[e[t]]>n?t:n},Qt={string2buf:Vs,buf2string:Hs,utf8border:$s};function Ys(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var sa=Ys;const oa=Object.prototype.toString,{Z_NO_FLUSH:Gs,Z_SYNC_FLUSH:qs,Z_FULL_FLUSH:Ks,Z_FINISH:Xs,Z_OK:En,Z_STREAM_END:Js,Z_DEFAULT_COMPRESSION:Qs,Z_DEFAULT_STRATEGY:eo,Z_DEFLATED:to}=$t;function en(e){this.options=vn.assign({level:Qs,method:to,chunkSize:16384,windowBits:15,memLevel:8,strategy:eo},e||{});let n=this.options;n.raw&&n.windowBits>0?n.windowBits=-n.windowBits:n.gzip&&n.windowBits>0&&n.windowBits<16&&(n.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new sa,this.strm.avail_out=0;let t=Xt.deflateInit2(this.strm,n.level,n.method,n.windowBits,n.memLevel,n.strategy);if(t!==En)throw new Error(ht[t]);if(n.header&&Xt.deflateSetHeader(this.strm,n.header),n.dictionary){let r;if(typeof n.dictionary=="string"?r=Qt.string2buf(n.dictionary):oa.call(n.dictionary)==="[object ArrayBuffer]"?r=new Uint8Array(n.dictionary):r=n.dictionary,t=Xt.deflateSetDictionary(this.strm,r),t!==En)throw new Error(ht[t]);this._dict_set=!0}}en.prototype.push=function(e,n){const t=this.strm,r=this.options.chunkSize;let a,s;if(this.ended)return!1;for(n===~~n?s=n:s=n===!0?Xs:Gs,typeof e=="string"?t.input=Qt.string2buf(e):oa.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;;){if(t.avail_out===0&&(t.output=new Uint8Array(r),t.next_out=0,t.avail_out=r),(s===qs||s===Ks)&&t.avail_out<=6){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(a=Xt.deflate(t,s),a===Js)return t.next_out>0&&this.onData(t.output.subarray(0,t.next_out)),a=Xt.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===En;if(t.avail_out===0){this.onData(t.output);continue}if(s>0&&t.next_out>0){this.onData(t.output.subarray(0,t.next_out)),t.avail_out=0;continue}if(t.avail_in===0)break}return!0},en.prototype.onData=function(e){this.chunks.push(e)},en.prototype.onEnd=function(e){e===En&&(this.result=vn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function ar(e,n){const t=new en(n);if(t.push(e,!0),t.err)throw t.msg||ht[t.err];return t.result}function no(e,n){return n=n||{},n.raw=!0,ar(e,n)}function ro(e,n){return n=n||{},n.gzip=!0,ar(e,n)}var ao=en,io=ar,so=no,oo=ro,co={Deflate:ao,deflate:io,deflateRaw:so,gzip:oo};const kn=16209,lo=16191;var uo=function(n,t){let r,a,s,c,l,d,f,h,k,v,b,R,ce,G,j,ne,W,S,te,me,N,ie,q,Z;const P=n.state;r=n.next_in,q=n.input,a=r+(n.avail_in-5),s=n.next_out,Z=n.output,c=s-(t-n.avail_out),l=s+(n.avail_out-257),d=P.dmax,f=P.wsize,h=P.whave,k=P.wnext,v=P.window,b=P.hold,R=P.bits,ce=P.lencode,G=P.distcode,j=(1<<P.lenbits)-1,ne=(1<<P.distbits)-1;e:do{R<15&&(b+=q[r++]<<R,R+=8,b+=q[r++]<<R,R+=8),W=ce[b&j];t:for(;;){if(S=W>>>24,b>>>=S,R-=S,S=W>>>16&255,S===0)Z[s++]=W&65535;else if(S&16){te=W&65535,S&=15,S&&(R<S&&(b+=q[r++]<<R,R+=8),te+=b&(1<<S)-1,b>>>=S,R-=S),R<15&&(b+=q[r++]<<R,R+=8,b+=q[r++]<<R,R+=8),W=G[b&ne];n:for(;;){if(S=W>>>24,b>>>=S,R-=S,S=W>>>16&255,S&16){if(me=W&65535,S&=15,R<S&&(b+=q[r++]<<R,R+=8,R<S&&(b+=q[r++]<<R,R+=8)),me+=b&(1<<S)-1,me>d){n.msg="invalid distance too far back",P.mode=kn;break e}if(b>>>=S,R-=S,S=s-c,me>S){if(S=me-S,S>h&&P.sane){n.msg="invalid distance too far back",P.mode=kn;break e}if(N=0,ie=v,k===0){if(N+=f-S,S<te){te-=S;do Z[s++]=v[N++];while(--S);N=s-me,ie=Z}}else if(k<S){if(N+=f+k-S,S-=k,S<te){te-=S;do Z[s++]=v[N++];while(--S);if(N=0,k<te){S=k,te-=S;do Z[s++]=v[N++];while(--S);N=s-me,ie=Z}}}else if(N+=k-S,S<te){te-=S;do Z[s++]=v[N++];while(--S);N=s-me,ie=Z}for(;te>2;)Z[s++]=ie[N++],Z[s++]=ie[N++],Z[s++]=ie[N++],te-=3;te&&(Z[s++]=ie[N++],te>1&&(Z[s++]=ie[N++]))}else{N=s-me;do Z[s++]=Z[N++],Z[s++]=Z[N++],Z[s++]=Z[N++],te-=3;while(te>2);te&&(Z[s++]=Z[N++],te>1&&(Z[s++]=Z[N++]))}}else if(S&64){n.msg="invalid distance code",P.mode=kn;break e}else{W=G[(W&65535)+(b&(1<<S)-1)];continue n}break}}else if(S&64)if(S&32){P.mode=lo;break e}else{n.msg="invalid literal/length code",P.mode=kn;break e}else{W=ce[(W&65535)+(b&(1<<S)-1)];continue t}break}}while(r<a&&s<l);te=R>>3,r-=te,R-=te<<3,b&=(1<<R)-1,n.next_in=r,n.next_out=s,n.avail_in=r<a?5+(a-r):5-(r-a),n.avail_out=s<l?257+(l-s):257-(s-l),P.hold=b,P.bits=R};const Tt=15,ca=852,la=592,ua=0,ir=1,fa=2,fo=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),po=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),ho=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),mo=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var tn=(e,n,t,r,a,s,c,l)=>{const d=l.bits;let f=0,h=0,k=0,v=0,b=0,R=0,ce=0,G=0,j=0,ne=0,W,S,te,me,N,ie=null,q;const Z=new Uint16Array(Tt+1),P=new Uint16Array(Tt+1);let je=null,Mn,Ft,vt;for(f=0;f<=Tt;f++)Z[f]=0;for(h=0;h<r;h++)Z[n[t+h]]++;for(b=d,v=Tt;v>=1&&Z[v]===0;v--);if(b>v&&(b=v),v===0)return a[s++]=1<<24|64<<16|0,a[s++]=1<<24|64<<16|0,l.bits=1,0;for(k=1;k<v&&Z[k]===0;k++);for(b<k&&(b=k),G=1,f=1;f<=Tt;f++)if(G<<=1,G-=Z[f],G<0)return-1;if(G>0&&(e===ua||v!==1))return-1;for(P[1]=0,f=1;f<Tt;f++)P[f+1]=P[f]+Z[f];for(h=0;h<r;h++)n[t+h]!==0&&(c[P[n[t+h]]++]=h);if(e===ua?(ie=je=c,q=20):e===ir?(ie=fo,je=po,q=257):(ie=ho,je=mo,q=0),ne=0,h=0,f=k,N=s,R=b,ce=0,te=-1,j=1<<b,me=j-1,e===ir&&j>ca||e===fa&&j>la)return 1;for(;;){Mn=f-ce,c[h]+1<q?(Ft=0,vt=c[h]):c[h]>=q?(Ft=je[c[h]-q],vt=ie[c[h]-q]):(Ft=96,vt=0),W=1<<f-ce,S=1<<R,k=S;do S-=W,a[N+(ne>>ce)+S]=Mn<<24|Ft<<16|vt|0;while(S!==0);for(W=1<<f-1;ne&W;)W>>=1;if(W!==0?(ne&=W-1,ne+=W):ne=0,h++,--Z[f]===0){if(f===v)break;f=n[t+c[h]]}if(f>b&&(ne&me)!==te){for(ce===0&&(ce=b),N+=k,R=f-ce,G=1<<R;R+ce<v&&(G-=Z[R+ce],!(G<=0));)R++,G<<=1;if(j+=1<<R,e===ir&&j>ca||e===fa&&j>la)return 1;te=ne&me,a[te]=b<<24|R<<16|N-s|0}}return ne!==0&&(a[N+ne]=f-ce<<24|64<<16|0),l.bits=b,0};const go=0,pa=1,da=2,{Z_FINISH:ha,Z_BLOCK:_o,Z_TREES:Cn,Z_OK:wt,Z_STREAM_END:wo,Z_NEED_DICT:yo,Z_STREAM_ERROR:Re,Z_DATA_ERROR:ma,Z_MEM_ERROR:ga,Z_BUF_ERROR:bo,Z_DEFLATED:_a}=$t,xn=16180,wa=16181,ya=16182,ba=16183,va=16184,Ea=16185,ka=16186,Ca=16187,xa=16188,Aa=16189,An=16190,qe=16191,sr=16192,Sa=16193,or=16194,Ia=16195,Ba=16196,Ta=16197,Fa=16198,Sn=16199,In=16200,Da=16201,Ma=16202,Ra=16203,Ua=16204,za=16205,cr=16206,Na=16207,Oa=16208,pe=16209,Pa=16210,La=16211,vo=852,Eo=592,ko=15,Wa=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function Co(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const yt=e=>{if(!e)return 1;const n=e.state;return!n||n.strm!==e||n.mode<xn||n.mode>La?1:0},Za=e=>{if(yt(e))return Re;const n=e.state;return e.total_in=e.total_out=n.total=0,e.msg="",n.wrap&&(e.adler=n.wrap&1),n.mode=xn,n.last=0,n.havedict=0,n.flags=-1,n.dmax=32768,n.head=null,n.hold=0,n.bits=0,n.lencode=n.lendyn=new Int32Array(vo),n.distcode=n.distdyn=new Int32Array(Eo),n.sane=1,n.back=-1,wt},Va=e=>{if(yt(e))return Re;const n=e.state;return n.wsize=0,n.whave=0,n.wnext=0,Za(e)},ja=(e,n)=>{let t;if(yt(e))return Re;const r=e.state;return n<0?(t=0,n=-n):(t=(n>>4)+5,n<48&&(n&=15)),n&&(n<8||n>15)?Re:(r.window!==null&&r.wbits!==n&&(r.window=null),r.wrap=t,r.wbits=n,Va(e))},Ha=(e,n)=>{if(!e)return Re;const t=new Co;e.state=t,t.strm=e,t.window=null,t.mode=xn;const r=ja(e,n);return r!==wt&&(e.state=null),r},xo=e=>Ha(e,ko);let $a=!0,lr,ur;const Ao=e=>{if($a){lr=new Int32Array(512),ur=new Int32Array(32);let n=0;for(;n<144;)e.lens[n++]=8;for(;n<256;)e.lens[n++]=9;for(;n<280;)e.lens[n++]=7;for(;n<288;)e.lens[n++]=8;for(tn(pa,e.lens,0,288,lr,0,e.work,{bits:9}),n=0;n<32;)e.lens[n++]=5;tn(da,e.lens,0,32,ur,0,e.work,{bits:5}),$a=!1}e.lencode=lr,e.lenbits=9,e.distcode=ur,e.distbits=5},Ya=(e,n,t,r)=>{let a;const s=e.state;return s.window===null&&(s.wsize=1<<s.wbits,s.wnext=0,s.whave=0,s.window=new Uint8Array(s.wsize)),r>=s.wsize?(s.window.set(n.subarray(t-s.wsize,t),0),s.wnext=0,s.whave=s.wsize):(a=s.wsize-s.wnext,a>r&&(a=r),s.window.set(n.subarray(t-r,t-r+a),s.wnext),r-=a,r?(s.window.set(n.subarray(t-r,t),0),s.wnext=r,s.whave=s.wsize):(s.wnext+=a,s.wnext===s.wsize&&(s.wnext=0),s.whave<s.wsize&&(s.whave+=a))),0},So=(e,n)=>{let t,r,a,s,c,l,d,f,h,k,v,b,R,ce,G=0,j,ne,W,S,te,me,N,ie;const q=new Uint8Array(4);let Z,P;const je=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(yt(e)||!e.output||!e.input&&e.avail_in!==0)return Re;t=e.state,t.mode===qe&&(t.mode=sr),c=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,r=e.input,l=e.avail_in,f=t.hold,h=t.bits,k=l,v=d,ie=wt;e:for(;;)switch(t.mode){case xn:if(t.wrap===0){t.mode=sr;break}for(;h<16;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(t.wrap&2&&f===35615){t.wbits===0&&(t.wbits=15),t.check=0,q[0]=f&255,q[1]=f>>>8&255,t.check=ve(t.check,q,2,0),f=0,h=0,t.mode=wa;break}if(t.head&&(t.head.done=!1),!(t.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",t.mode=pe;break}if((f&15)!==_a){e.msg="unknown compression method",t.mode=pe;break}if(f>>>=4,h-=4,N=(f&15)+8,t.wbits===0&&(t.wbits=N),N>15||N>t.wbits){e.msg="invalid window size",t.mode=pe;break}t.dmax=1<<t.wbits,t.flags=0,e.adler=t.check=1,t.mode=f&512?Aa:qe,f=0,h=0;break;case wa:for(;h<16;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(t.flags=f,(t.flags&255)!==_a){e.msg="unknown compression method",t.mode=pe;break}if(t.flags&57344){e.msg="unknown header flags set",t.mode=pe;break}t.head&&(t.head.text=f>>8&1),t.flags&512&&t.wrap&4&&(q[0]=f&255,q[1]=f>>>8&255,t.check=ve(t.check,q,2,0)),f=0,h=0,t.mode=ya;case ya:for(;h<32;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.head&&(t.head.time=f),t.flags&512&&t.wrap&4&&(q[0]=f&255,q[1]=f>>>8&255,q[2]=f>>>16&255,q[3]=f>>>24&255,t.check=ve(t.check,q,4,0)),f=0,h=0,t.mode=ba;case ba:for(;h<16;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.head&&(t.head.xflags=f&255,t.head.os=f>>8),t.flags&512&&t.wrap&4&&(q[0]=f&255,q[1]=f>>>8&255,t.check=ve(t.check,q,2,0)),f=0,h=0,t.mode=va;case va:if(t.flags&1024){for(;h<16;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.length=f,t.head&&(t.head.extra_len=f),t.flags&512&&t.wrap&4&&(q[0]=f&255,q[1]=f>>>8&255,t.check=ve(t.check,q,2,0)),f=0,h=0}else t.head&&(t.head.extra=null);t.mode=Ea;case Ea:if(t.flags&1024&&(b=t.length,b>l&&(b=l),b&&(t.head&&(N=t.head.extra_len-t.length,t.head.extra||(t.head.extra=new Uint8Array(t.head.extra_len)),t.head.extra.set(r.subarray(s,s+b),N)),t.flags&512&&t.wrap&4&&(t.check=ve(t.check,r,b,s)),l-=b,s+=b,t.length-=b),t.length))break e;t.length=0,t.mode=ka;case ka:if(t.flags&2048){if(l===0)break e;b=0;do N=r[s+b++],t.head&&N&&t.length<65536&&(t.head.name+=String.fromCharCode(N));while(N&&b<l);if(t.flags&512&&t.wrap&4&&(t.check=ve(t.check,r,b,s)),l-=b,s+=b,N)break e}else t.head&&(t.head.name=null);t.length=0,t.mode=Ca;case Ca:if(t.flags&4096){if(l===0)break e;b=0;do N=r[s+b++],t.head&&N&&t.length<65536&&(t.head.comment+=String.fromCharCode(N));while(N&&b<l);if(t.flags&512&&t.wrap&4&&(t.check=ve(t.check,r,b,s)),l-=b,s+=b,N)break e}else t.head&&(t.head.comment=null);t.mode=xa;case xa:if(t.flags&512){for(;h<16;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(t.wrap&4&&f!==(t.check&65535)){e.msg="header crc mismatch",t.mode=pe;break}f=0,h=0}t.head&&(t.head.hcrc=t.flags>>9&1,t.head.done=!0),e.adler=t.check=0,t.mode=qe;break;case Aa:for(;h<32;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}e.adler=t.check=Wa(f),f=0,h=0,t.mode=An;case An:if(t.havedict===0)return e.next_out=c,e.avail_out=d,e.next_in=s,e.avail_in=l,t.hold=f,t.bits=h,yo;e.adler=t.check=1,t.mode=qe;case qe:if(n===_o||n===Cn)break e;case sr:if(t.last){f>>>=h&7,h-=h&7,t.mode=cr;break}for(;h<3;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}switch(t.last=f&1,f>>>=1,h-=1,f&3){case 0:t.mode=Sa;break;case 1:if(Ao(t),t.mode=Sn,n===Cn){f>>>=2,h-=2;break e}break;case 2:t.mode=Ba;break;case 3:e.msg="invalid block type",t.mode=pe}f>>>=2,h-=2;break;case Sa:for(f>>>=h&7,h-=h&7;h<32;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",t.mode=pe;break}if(t.length=f&65535,f=0,h=0,t.mode=or,n===Cn)break e;case or:t.mode=Ia;case Ia:if(b=t.length,b){if(b>l&&(b=l),b>d&&(b=d),b===0)break e;a.set(r.subarray(s,s+b),c),l-=b,s+=b,d-=b,c+=b,t.length-=b;break}t.mode=qe;break;case Ba:for(;h<14;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(t.nlen=(f&31)+257,f>>>=5,h-=5,t.ndist=(f&31)+1,f>>>=5,h-=5,t.ncode=(f&15)+4,f>>>=4,h-=4,t.nlen>286||t.ndist>30){e.msg="too many length or distance symbols",t.mode=pe;break}t.have=0,t.mode=Ta;case Ta:for(;t.have<t.ncode;){for(;h<3;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.lens[je[t.have++]]=f&7,f>>>=3,h-=3}for(;t.have<19;)t.lens[je[t.have++]]=0;if(t.lencode=t.lendyn,t.lenbits=7,Z={bits:t.lenbits},ie=tn(go,t.lens,0,19,t.lencode,0,t.work,Z),t.lenbits=Z.bits,ie){e.msg="invalid code lengths set",t.mode=pe;break}t.have=0,t.mode=Fa;case Fa:for(;t.have<t.nlen+t.ndist;){for(;G=t.lencode[f&(1<<t.lenbits)-1],j=G>>>24,ne=G>>>16&255,W=G&65535,!(j<=h);){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(W<16)f>>>=j,h-=j,t.lens[t.have++]=W;else{if(W===16){for(P=j+2;h<P;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(f>>>=j,h-=j,t.have===0){e.msg="invalid bit length repeat",t.mode=pe;break}N=t.lens[t.have-1],b=3+(f&3),f>>>=2,h-=2}else if(W===17){for(P=j+3;h<P;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}f>>>=j,h-=j,N=0,b=3+(f&7),f>>>=3,h-=3}else{for(P=j+7;h<P;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}f>>>=j,h-=j,N=0,b=11+(f&127),f>>>=7,h-=7}if(t.have+b>t.nlen+t.ndist){e.msg="invalid bit length repeat",t.mode=pe;break}for(;b--;)t.lens[t.have++]=N}}if(t.mode===pe)break;if(t.lens[256]===0){e.msg="invalid code -- missing end-of-block",t.mode=pe;break}if(t.lenbits=9,Z={bits:t.lenbits},ie=tn(pa,t.lens,0,t.nlen,t.lencode,0,t.work,Z),t.lenbits=Z.bits,ie){e.msg="invalid literal/lengths set",t.mode=pe;break}if(t.distbits=6,t.distcode=t.distdyn,Z={bits:t.distbits},ie=tn(da,t.lens,t.nlen,t.ndist,t.distcode,0,t.work,Z),t.distbits=Z.bits,ie){e.msg="invalid distances set",t.mode=pe;break}if(t.mode=Sn,n===Cn)break e;case Sn:t.mode=In;case In:if(l>=6&&d>=258){e.next_out=c,e.avail_out=d,e.next_in=s,e.avail_in=l,t.hold=f,t.bits=h,uo(e,v),c=e.next_out,a=e.output,d=e.avail_out,s=e.next_in,r=e.input,l=e.avail_in,f=t.hold,h=t.bits,t.mode===qe&&(t.back=-1);break}for(t.back=0;G=t.lencode[f&(1<<t.lenbits)-1],j=G>>>24,ne=G>>>16&255,W=G&65535,!(j<=h);){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(ne&&!(ne&240)){for(S=j,te=ne,me=W;G=t.lencode[me+((f&(1<<S+te)-1)>>S)],j=G>>>24,ne=G>>>16&255,W=G&65535,!(S+j<=h);){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}f>>>=S,h-=S,t.back+=S}if(f>>>=j,h-=j,t.back+=j,t.length=W,ne===0){t.mode=za;break}if(ne&32){t.back=-1,t.mode=qe;break}if(ne&64){e.msg="invalid literal/length code",t.mode=pe;break}t.extra=ne&15,t.mode=Da;case Da:if(t.extra){for(P=t.extra;h<P;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.length+=f&(1<<t.extra)-1,f>>>=t.extra,h-=t.extra,t.back+=t.extra}t.was=t.length,t.mode=Ma;case Ma:for(;G=t.distcode[f&(1<<t.distbits)-1],j=G>>>24,ne=G>>>16&255,W=G&65535,!(j<=h);){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(!(ne&240)){for(S=j,te=ne,me=W;G=t.distcode[me+((f&(1<<S+te)-1)>>S)],j=G>>>24,ne=G>>>16&255,W=G&65535,!(S+j<=h);){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}f>>>=S,h-=S,t.back+=S}if(f>>>=j,h-=j,t.back+=j,ne&64){e.msg="invalid distance code",t.mode=pe;break}t.offset=W,t.extra=ne&15,t.mode=Ra;case Ra:if(t.extra){for(P=t.extra;h<P;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}t.offset+=f&(1<<t.extra)-1,f>>>=t.extra,h-=t.extra,t.back+=t.extra}if(t.offset>t.dmax){e.msg="invalid distance too far back",t.mode=pe;break}t.mode=Ua;case Ua:if(d===0)break e;if(b=v-d,t.offset>b){if(b=t.offset-b,b>t.whave&&t.sane){e.msg="invalid distance too far back",t.mode=pe;break}b>t.wnext?(b-=t.wnext,R=t.wsize-b):R=t.wnext-b,b>t.length&&(b=t.length),ce=t.window}else ce=a,R=c-t.offset,b=t.length;b>d&&(b=d),d-=b,t.length-=b;do a[c++]=ce[R++];while(--b);t.length===0&&(t.mode=In);break;case za:if(d===0)break e;a[c++]=t.length,d--,t.mode=In;break;case cr:if(t.wrap){for(;h<32;){if(l===0)break e;l--,f|=r[s++]<<h,h+=8}if(v-=d,e.total_out+=v,t.total+=v,t.wrap&4&&v&&(e.adler=t.check=t.flags?ve(t.check,a,v,c-v):Ht(t.check,a,v,c-v)),v=d,t.wrap&4&&(t.flags?f:Wa(f))!==t.check){e.msg="incorrect data check",t.mode=pe;break}f=0,h=0}t.mode=Na;case Na:if(t.wrap&&t.flags){for(;h<32;){if(l===0)break e;l--,f+=r[s++]<<h,h+=8}if(t.wrap&4&&f!==(t.total&4294967295)){e.msg="incorrect length check",t.mode=pe;break}f=0,h=0}t.mode=Oa;case Oa:ie=wo;break e;case pe:ie=ma;break e;case Pa:return ga;case La:default:return Re}return e.next_out=c,e.avail_out=d,e.next_in=s,e.avail_in=l,t.hold=f,t.bits=h,(t.wsize||v!==e.avail_out&&t.mode<pe&&(t.mode<cr||n!==ha))&&Ya(e,e.output,e.next_out,v-e.avail_out),k-=e.avail_in,v-=e.avail_out,e.total_in+=k,e.total_out+=v,t.total+=v,t.wrap&4&&v&&(e.adler=t.check=t.flags?ve(t.check,a,v,e.next_out-v):Ht(t.check,a,v,e.next_out-v)),e.data_type=t.bits+(t.last?64:0)+(t.mode===qe?128:0)+(t.mode===Sn||t.mode===or?256:0),(k===0&&v===0||n===ha)&&ie===wt&&(ie=bo),ie},Io=e=>{if(yt(e))return Re;let n=e.state;return n.window&&(n.window=null),e.state=null,wt},Bo=(e,n)=>{if(yt(e))return Re;const t=e.state;return t.wrap&2?(t.head=n,n.done=!1,wt):Re},To=(e,n)=>{const t=n.length;let r,a,s;return yt(e)||(r=e.state,r.wrap!==0&&r.mode!==An)?Re:r.mode===An&&(a=1,a=Ht(a,n,t,0),a!==r.check)?ma:(s=Ya(e,n,t,t),s?(r.mode=Pa,ga):(r.havedict=1,wt))};var Fo=Va,Do=ja,Mo=Za,Ro=xo,Uo=Ha,zo=So,No=Io,Oo=Bo,Po=To,Lo="pako inflate (from Nodeca project)",Ke={inflateReset:Fo,inflateReset2:Do,inflateResetKeep:Mo,inflateInit:Ro,inflateInit2:Uo,inflate:zo,inflateEnd:No,inflateGetHeader:Oo,inflateSetDictionary:Po,inflateInfo:Lo};function Wo(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Zo=Wo;const Ga=Object.prototype.toString,{Z_NO_FLUSH:Vo,Z_FINISH:jo,Z_OK:nn,Z_STREAM_END:fr,Z_NEED_DICT:pr,Z_STREAM_ERROR:Ho,Z_DATA_ERROR:qa,Z_MEM_ERROR:$o}=$t;function rn(e){this.options=vn.assign({chunkSize:1024*64,windowBits:15,to:""},e||{});const n=this.options;n.raw&&n.windowBits>=0&&n.windowBits<16&&(n.windowBits=-n.windowBits,n.windowBits===0&&(n.windowBits=-15)),n.windowBits>=0&&n.windowBits<16&&!(e&&e.windowBits)&&(n.windowBits+=32),n.windowBits>15&&n.windowBits<48&&(n.windowBits&15||(n.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new sa,this.strm.avail_out=0;let t=Ke.inflateInit2(this.strm,n.windowBits);if(t!==nn)throw new Error(ht[t]);if(this.header=new Zo,Ke.inflateGetHeader(this.strm,this.header),n.dictionary&&(typeof n.dictionary=="string"?n.dictionary=Qt.string2buf(n.dictionary):Ga.call(n.dictionary)==="[object ArrayBuffer]"&&(n.dictionary=new Uint8Array(n.dictionary)),n.raw&&(t=Ke.inflateSetDictionary(this.strm,n.dictionary),t!==nn)))throw new Error(ht[t])}rn.prototype.push=function(e,n){const t=this.strm,r=this.options.chunkSize,a=this.options.dictionary;let s,c,l;if(this.ended)return!1;for(n===~~n?c=n:c=n===!0?jo:Vo,Ga.call(e)==="[object ArrayBuffer]"?t.input=new Uint8Array(e):t.input=e,t.next_in=0,t.avail_in=t.input.length;;){for(t.avail_out===0&&(t.output=new Uint8Array(r),t.next_out=0,t.avail_out=r),s=Ke.inflate(t,c),s===pr&&a&&(s=Ke.inflateSetDictionary(t,a),s===nn?s=Ke.inflate(t,c):s===qa&&(s=pr));t.avail_in>0&&s===fr&&t.state.wrap>0&&e[t.next_in]!==0;)Ke.inflateReset(t),s=Ke.inflate(t,c);switch(s){case Ho:case qa:case pr:case $o:return this.onEnd(s),this.ended=!0,!1}if(l=t.avail_out,t.next_out&&(t.avail_out===0||s===fr))if(this.options.to==="string"){let d=Qt.utf8border(t.output,t.next_out),f=t.next_out-d,h=Qt.buf2string(t.output,d);t.next_out=f,t.avail_out=r-f,f&&t.output.set(t.output.subarray(d,d+f),0),this.onData(h)}else this.onData(t.output.length===t.next_out?t.output:t.output.subarray(0,t.next_out));if(!(s===nn&&l===0)){if(s===fr)return s=Ke.inflateEnd(this.strm),this.onEnd(s),this.ended=!0,!0;if(t.avail_in===0)break}}return!0},rn.prototype.onData=function(e){this.chunks.push(e)},rn.prototype.onEnd=function(e){e===nn&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=vn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function dr(e,n){const t=new rn(n);if(t.push(e),t.err)throw t.msg||ht[t.err];return t.result}function Yo(e,n){return n=n||{},n.raw=!0,dr(e,n)}var Go=rn,qo=dr,Ko=Yo,Xo=dr,Jo={Inflate:Go,inflate:qo,inflateRaw:Ko,ungzip:Xo};const{Deflate:Qo,deflate:ec,deflateRaw:tc,gzip:nc}=co,{Inflate:rc,inflate:ac,inflateRaw:ic,ungzip:sc}=Jo;var oc=Qo,cc=ec,lc=tc,uc=nc,fc=rc,pc=ac,dc=ic,hc=sc,mc=$t,gc={Deflate:oc,deflate:cc,deflateRaw:lc,gzip:uc,Inflate:fc,inflate:pc,inflateRaw:dc,ungzip:hc,constants:mc};async function _c(e,n){let t;if(n){const l=e?"-threads":"",d=n.split("/").slice(0,-1).join("/"),f=n.split("/").pop(),[h,...k]=f.split(".");t=`${d}/${h}${l}.${k.join(".")}`}else t=e?(await di(async()=>{const{default:l}=await import("./barretenberg-threads-Cg83TIXa.js");return{default:l}},[])).default:(await di(async()=>{const{default:l}=await import("./barretenberg-BP4ocdmL.js");return{default:l}},[])).default;const a=await(await fetch(t)).arrayBuffer(),s=new Uint8Array(a);return s[0]===31&&s[1]===139&&s[2]===8?gc.ungzip(s).buffer:s}async function Ka(e=32,n,t=Pe()("bb.js:fetch_mat")){const r=Sr(),a=r?await wc(t):1,s=Math.min(e,a,32);t(`Fetching bb wasm from ${n??"default location"}`);const c=await _c(r,n);t(`Compiling bb wasm of ${c.byteLength} bytes`);const l=await WebAssembly.compile(c);return t("Compilation of bb wasm complete"),{module:l,threads:s}}async function wc(e){if(typeof navigator<"u"&&navigator.hardwareConcurrency)return navigator.hardwareConcurrency;try{return(await H.e(522).then(H.t.bind(H,522,23))).cpus().length}catch(n){return e(`Could not detect environment to query number of threads. Falling back to one thread. Error: ${n.message??n}`),1}}const yc=4,hr=32;function mr(e,n){const t=e.slice(yc),r=t.slice(0,n*hr);return{proof:t.slice(n*hr),publicInputs:r}}function gr(e,n){const t=Oe((e.length+n.length)/hr);return Uint8Array.from([...t,...e,...n])}function _r(e){const n=wr(e.publicInputs);return Uint8Array.from([...n,...e.proof])}function Bn(e){const t=[];for(let r=0;r<e.length;r+=32){const a=e.slice(r,r+32);t.push(a)}return t.map(vc)}function wr(e){const n=e.map(Ec);return bc(n)}function bc(e){const n=e.reduce((a,s)=>a+s.length,0),t=new Uint8Array(n);let r=0;for(const a of e)t.set(a,r),r+=a.length;return t}function vc(e){const n=[];return e.forEach(function(t){let r=t.toString(16);r.length%2&&(r="0"+r),n.push(r)}),"0x"+n.join("")}function Ec(e){const n=BigInt(e).toString(16).padStart(64,"0"),t=n.length/2,r=new Uint8Array(t);let a=0,s=0;for(;a<t;)r[a]=parseInt(n.slice(s,s+2),16),a+=1,s+=2;return r}class kc{constructor(n={threads:1}){this.options=n}async instantiate(){if(!this.api){const n=await bt.new(this.options);await n.initSRSForCircuitSize(0),this.acirComposer=await n.acirNewAcirComposer(0),this.api=n}}async verifyUltraPlonkProof(n,t){await this.instantiate(),await this.api.acirLoadVerificationKey(this.acirComposer,new ke(t));const r=_r(n);return await this.api.acirVerifyProof(this.acirComposer,r)}async verifyUltraHonkProof(n,t){await this.instantiate();const r=gr(wr(n.publicInputs),n.proof);return await this.api.acirVerifyUltraHonk(r,new ke(t))}async destroy(){this.api&&await this.api.destroy()}}var Te=Uint8Array,an=Uint16Array,Cc=Int32Array,Xa=new Te([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ja=new Te([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),xc=new Te([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qa=function(e,n){for(var t=new an(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var a=new Cc(t[30]),r=1;r<30;++r)for(var s=t[r];s<t[r+1];++s)a[s]=s-t[r]<<5|r;return{b:t,r:a}},ei=Qa(Xa,2),ti=ei.b,Ac=ei.r;ti[28]=258,Ac[258]=28;for(var Sc=Qa(Ja,0),Ic=Sc.b,ni=new an(32768),fe=0;fe<32768;++fe){var ct=(fe&43690)>>1|(fe&21845)<<1;ct=(ct&52428)>>2|(ct&13107)<<2,ct=(ct&61680)>>4|(ct&3855)<<4,ni[fe]=((ct&65280)>>8|(ct&255)<<8)>>1}for(var sn=function(e,n,t){for(var r=e.length,a=0,s=new an(n);a<r;++a)e[a]&&++s[e[a]-1];var c=new an(n);for(a=1;a<n;++a)c[a]=c[a-1]+s[a-1]<<1;var l;{l=new an(1<<n);var d=15-n;for(a=0;a<r;++a)if(e[a])for(var f=a<<4|e[a],h=n-e[a],k=c[e[a]-1]++<<h,v=k|(1<<h)-1;k<=v;++k)l[ni[k]>>d]=f}return l},on=new Te(288),fe=0;fe<144;++fe)on[fe]=8;for(var fe=144;fe<256;++fe)on[fe]=9;for(var fe=256;fe<280;++fe)on[fe]=7;for(var fe=280;fe<288;++fe)on[fe]=8;for(var ri=new Te(32),fe=0;fe<32;++fe)ri[fe]=5;var Bc=sn(on,9),Tc=sn(ri,5),yr=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},ze=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},br=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Fc=function(e){return(e+7)/8|0},Dc=function(e,n,t){return(t==null||t>e.length)&&(t=e.length),new Te(e.subarray(n,t))},Mc=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fe=function(e,n,t){var r=new Error(n||Mc[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Fe),!t)throw r;return r},vr=function(e,n,t,r){var a=e.length,s=0;if(!a||n.f&&!n.l)return t||new Te(0);var c=!t,l=c||n.i!=2,d=n.i;c&&(t=new Te(a*3));var f=function(ui){var fi=t.length;if(ui>fi){var pi=new Te(Math.max(fi*2,ui));pi.set(t),t=pi}},h=n.f||0,k=n.p||0,v=n.b||0,b=n.l,R=n.d,ce=n.m,G=n.n,j=a*8;do{if(!b){h=ze(e,k,1);var ne=ze(e,k+1,3);if(k+=3,ne)if(ne==1)b=Bc,R=Tc,ce=9,G=5;else if(ne==2){var me=ze(e,k,31)+257,N=ze(e,k+10,15)+4,ie=me+ze(e,k+5,31)+1;k+=14;for(var q=new Te(ie),Z=new Te(19),P=0;P<N;++P)Z[xc[P]]=ze(e,k+P*3,7);k+=N*3;for(var je=yr(Z),Mn=(1<<je)-1,Ft=sn(Z,je),P=0;P<ie;){var vt=Ft[ze(e,k,Mn)];k+=vt&15;var W=vt>>4;if(W<16)q[P++]=W;else{var Dt=0,Rn=0;for(W==16?(Rn=3+ze(e,k,3),k+=2,Dt=q[P-1]):W==17?(Rn=3+ze(e,k,7),k+=3):W==18&&(Rn=11+ze(e,k,127),k+=7);Rn--;)q[P++]=Dt}}var si=q.subarray(0,me),lt=q.subarray(me);ce=yr(si),G=yr(lt),b=sn(si,ce),R=sn(lt,G)}else Fe(1);else{var W=Fc(k)+4,S=e[W-4]|e[W-3]<<8,te=W+S;if(te>a){d&&Fe(0);break}l&&f(v+S),t.set(e.subarray(W,te),v),n.b=v+=S,n.p=k=te*8,n.f=h;continue}if(k>j){d&&Fe(0);break}}l&&f(v+131072);for(var Gc=(1<<ce)-1,qc=(1<<G)-1,kr=k;;kr=k){var Dt=b[br(e,k)&Gc],Mt=Dt>>4;if(k+=Dt&15,k>j){d&&Fe(0);break}if(Dt||Fe(2),Mt<256)t[v++]=Mt;else if(Mt==256){kr=k,b=null;break}else{var oi=Mt-254;if(Mt>264){var P=Mt-257,cn=Xa[P];oi=ze(e,k,(1<<cn)-1)+ti[P],k+=cn}var Cr=R[br(e,k)&qc],xr=Cr>>4;Cr||Fe(3),k+=Cr&15;var lt=Ic[xr];if(xr>3){var cn=Ja[xr];lt+=br(e,k)&(1<<cn)-1,k+=cn}if(k>j){d&&Fe(0);break}l&&f(v+131072);var ci=v+oi;if(v<lt){var li=s-lt,Kc=Math.min(lt,ci);for(li+v<0&&Fe(3);v<Kc;++v)t[v]=r[li+v]}for(;v<ci;++v)t[v]=t[v-lt]}}n.l=b,n.p=kr,n.b=v,n.f=h,b&&(h=1,n.m=ce,n.d=R,n.n=G)}while(!h);return v!=t.length&&c?Dc(t,0,v):t.subarray(0,v)},Rc=new Te(0),Uc=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&Fe(6,"invalid gzip data");var n=e[3],t=10;n&4&&(t+=(e[10]|e[11]<<8)+2);for(var r=(n>>3&1)+(n>>4&1);r>0;r-=!e[t++]);return t+(n&2)},zc=function(e){var n=e.length;return(e[n-4]|e[n-3]<<8|e[n-2]<<16|e[n-1]<<24)>>>0},Nc=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Fe(6,"invalid zlib data"),(e[1]>>5&1)==1&&Fe(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function Oc(e,n){return vr(e,{i:2},n,n)}function Pc(e,n){var t=Uc(e);return t+8>e.length&&Fe(6,"invalid gzip data"),vr(e.subarray(t,-8),{i:2},new Te(zc(e)),n)}function Lc(e,n){return vr(e.subarray(Nc(e),-4),{i:2},n,n)}function Tn(e,n){return e[0]==31&&e[1]==139&&e[2]==8?Pc(e,n):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?Oc(e,n):Lc(e,n)}typeof TextEncoder<"u"&&new TextEncoder;var Wc=typeof TextDecoder<"u"&&new TextDecoder,Zc=0;try{Wc.decode(Rc,{stream:!0}),Zc=1}catch{}var ai=H(764).lW;class Vc extends Error{constructor(n){super(n)}}class jc{constructor(n,t={threads:1},r={recursive:!1}){this.backendOptions=t,this.circuitOptions=r,this.acirUncompressedBytecode=ii(n)}async instantiate(){if(!this.api){const n=await bt.new(this.backendOptions),t=!1,[r,a]=await n.acirGetCircuitSizes(this.acirUncompressedBytecode,this.circuitOptions.recursive,t);await n.initSRSForCircuitSize(a),this.acirComposer=await n.acirNewAcirComposer(a),await n.acirInitProvingKey(this.acirComposer,this.acirUncompressedBytecode,this.circuitOptions.recursive),this.api=n}}async generateProof(n){await this.instantiate();const t=await this.api.acirCreateProof(this.acirComposer,this.acirUncompressedBytecode,this.circuitOptions.recursive,Tn(n)),a=t.length-2144,s=t.slice(0,a),c=t.slice(a),l=Bn(s);return{proof:c,publicInputs:l}}async generateRecursiveProofArtifacts(n,t=0){await this.instantiate();const r=_r(n),a=(await this.api.acirSerializeProofIntoFields(this.acirComposer,r,t)).slice(t);await this.api.acirInitVerificationKey(this.acirComposer);const s=await this.api.acirSerializeVerificationKeyIntoFields(this.acirComposer);return{proofAsFields:a.map(c=>c.toString()),vkAsFields:s[0].map(c=>c.toString()),vkHash:s[1].toString()}}async verifyProof(n){await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer);const t=_r(n);return await this.api.acirVerifyProof(this.acirComposer,t)}async getVerificationKey(){return await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer),await this.api.acirGetVerificationKey(this.acirComposer)}async getSolidityVerifier(){return await this.instantiate(),await this.api.acirInitVerificationKey(this.acirComposer),await this.api.acirGetSolidityVerifier(this.acirComposer)}async destroy(){this.api&&await this.api.destroy()}}class Hc{constructor(n,t={threads:1},r={recursive:!1}){this.backendOptions=t,this.circuitOptions=r,this.acirUncompressedBytecode=ii(n)}async instantiate(){if(!this.api){const n=await bt.new(this.backendOptions);await n.acirInitSRS(this.acirUncompressedBytecode,this.circuitOptions.recursive,!0),this.api=n}}async generateProof(n,t){await this.instantiate();const a=await(t!=null&&t.keccak?this.api.acirProveUltraKeccakHonk.bind(this.api):this.api.acirProveUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive,Tn(n)),c=await(t!=null&&t.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive),l=await this.api.acirVkAsFieldsUltraHonk(new ke(c)),d=Number(l[1].toString()),{proof:f,publicInputs:h}=mr(a,d),k=Bn(h);return{proof:f,publicInputs:k}}async generateProofForRecursiveAggregation(n,t){await this.instantiate();const a=await(t!=null&&t.keccak?this.api.acirProveUltraKeccakHonk.bind(this.api):this.api.acirProveUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive,Tn(n)),c=await(t!=null&&t.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api))(this.acirUncompressedBytecode,this.circuitOptions.recursive),l=await this.api.acirVkAsFieldsUltraHonk(new ke(c)),h=Number(l[1].toString())-16,{proof:k,publicInputs:v}=mr(a,h),b=Bn(v);return{proof:Bn(k),publicInputs:b}}async verifyProof(n,t){await this.instantiate();const r=gr(wr(n.publicInputs),n.proof),a=t!=null&&t.keccak?this.api.acirWriteVkUltraKeccakHonk.bind(this.api):this.api.acirWriteVkUltraHonk.bind(this.api),s=t!=null&&t.keccak?this.api.acirVerifyUltraKeccakHonk.bind(this.api):this.api.acirVerifyUltraHonk.bind(this.api),c=await a(this.acirUncompressedBytecode,this.circuitOptions.recursive);return await s(r,new ke(c))}async getVerificationKey(n){return await this.instantiate(),n!=null&&n.keccak?await this.api.acirWriteVkUltraKeccakHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive):await this.api.acirWriteVkUltraHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive)}async getSolidityVerifier(n){await this.instantiate();const t=n??await this.api.acirWriteVkUltraHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive);return await this.api.acirHonkSolidityVerifier(this.acirUncompressedBytecode,new ke(t))}async generateRecursiveProofArtifacts(n,t){await this.instantiate();const r=await this.api.acirWriteVkUltraHonk(this.acirUncompressedBytecode,this.circuitOptions.recursive),a=await this.api.acirVkAsFieldsUltraHonk(r);return{proofAsFields:[],vkAsFields:a.map(s=>s.toString()),vkHash:""}}async destroy(){this.api&&await this.api.destroy()}}class $c{constructor(n,t={threads:1}){this.acirMsgpack=n,this.options=t}async instantiate(){if(!this.api){const n=await bt.new(this.options);await n.initSRSClientIVC(),this.api=n}}async prove(n){await this.instantiate();const t=await this.api.acirProveAztecClient(this.acirMsgpack,n),[r,a]=t;if(!await this.verify(r,a))throw new Vc("Failed to verify the private (ClientIVC) transaction proof!");return t}async verify(n,t){return await this.instantiate(),this.api.acirVerifyAztecClient(n,t)}async proveAndVerify(n){return await this.instantiate(),this.api.acirProveAndVerifyAztecClient(this.acirMsgpack,n)}async gates(){return await this.instantiate(),this.api.acirGatesAztecClient(this.acirMsgpack)}async destroy(){this.api&&await this.api.destroy()}}function ii(e){const n=Yc(e);return Tn(n)}function Yc(e){if(typeof ai<"u"){const n=ai.from(e,"base64");return new Uint8Array(n.buffer,n.byteOffset,n.byteLength)}else{if(typeof atob=="function")return Uint8Array.from(atob(e),n=>n.charCodeAt(0));throw new Error("No implementation found for base64 decoding.")}}class bt extends gi{constructor(n,t,r){super(t),this.worker=n,this.options=r}static async new(n={}){var c,l;const t=vi(),r=Ir(t),{module:a,threads:s}=await Ka(n.threads,n.wasmPath,n.logger);return await r.init(a,s,ge(n.logger??Pe()("bb.js:bb_wasm_async")),(c=n.memory)==null?void 0:c.initial,(l=n.memory)==null?void 0:l.maximum),new bt(t,r,n)}async getNumThreads(){return await this.wasm.getNumThreads()}async initSRSForCircuitSize(n){const t=await I.new(n+1,this.options.crsPath,this.options.logger);await this.srsInitSrs(new ke(t.getG1Data()),t.numPoints,new ke(t.getG2Data()))}async initSRSClientIVC(){const n=await I.new(1048577,this.options.crsPath,this.options.logger),t=await D.new(2**16+1,this.options.crsPath,this.options.logger);await this.srsInitSrs(new ke(n.getG1Data()),n.numPoints,new ke(n.getG2Data())),await this.srsInitGrumpkinSrs(new ke(t.getG1Data()),t.numPoints)}async acirInitSRS(n,t,r){const[a,s]=await this.acirGetCircuitSizes(n,t,r);return this.initSRSForCircuitSize(s)}async destroy(){await this.wasm.destroy(),await this.worker.terminate()}}let Er,Fn;class Dn extends _i{constructor(n){super(n)}static async new(n,t=Pe()("bb.js:bb_wasm_sync")){const r=new gn,{module:a,threads:s}=await Ka(1,n,t);return await r.init(a,s,t),new Dn(r)}static async initSingleton(n,t=Pe()("bb.js:bb_wasm_sync")){return Er||(Er=Dn.new(n,t)),Fn=await Er,Fn}static getSingleton(){if(!Fn)throw new Error("First call BarretenbergSync.initSingleton() on @aztec/bb.js module.");return Fn}getWasm(){return this.wasm}}})();De.Dv;De.Zh;De.AL;var ol=De.tD;De.i2;De.Fr;De.pS;De.ld;De.yh;De._7;De.H2;De.ly;export{ol as BarretenbergVerifier};
