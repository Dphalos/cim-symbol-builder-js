(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[2],{516:function(t,e,i){"use strict";i.d(e,"a",(function(){return S})),i.d(e,"b",(function(){return A})),i.d(e,"c",(function(){return u})),i.d(e,"d",(function(){return U})),i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return y})),i.d(e,"g",(function(){return b})),i.d(e,"h",(function(){return L})),i.d(e,"i",(function(){return O})),i.d(e,"j",(function(){return o})),i.d(e,"k",(function(){return M})),i.d(e,"l",(function(){return C})),i.d(e,"m",(function(){return n})),i.d(e,"n",(function(){return N})),i.d(e,"o",(function(){return r})),i.d(e,"p",(function(){return V})),i.d(e,"q",(function(){return f})),i.d(e,"r",(function(){return p})),i.d(e,"s",(function(){return _})),i.d(e,"t",(function(){return v})),i.d(e,"u",(function(){return d})),i.d(e,"v",(function(){return l})),i.d(e,"w",(function(){return g})),i.d(e,"x",(function(){return m})),i.d(e,"y",(function(){return T})),i.d(e,"z",(function(){return E})),i.d(e,"A",(function(){return h})),i.d(e,"B",(function(){return c})),i.d(e,"C",(function(){return I})),i.d(e,"D",(function(){return s})),i.d(e,"E",(function(){return x})),i.d(e,"F",(function(){return w})),i.d(e,"G",(function(){return R}));const n=1e-30,r=4294967295,s=512,a=8,o=29,c=8,u={metrics:{width:15,height:17,left:0,top:-7,advance:14}},h=0,l=0,d=0,f=1,p=2,_=3,v=4,g=5,m=6,T=5,E=6,S=1,A=2,M=2,L=1,b=2,y=4,I=1.05,O=6,R=5,w=6,x=1.15,V=2,U=8,N=500,C=10},517:function(t,e,i){"use strict";var n,r,s,a,o,c,u;i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"d",(function(){return n})),i.d(e,"e",(function(){return o})),i.d(e,"f",(function(){return c})),function(t){t[t.FILL=0]="FILL",t[t.LINE=1]="LINE",t[t.MARKER=2]="MARKER",t[t.TEXT=3]="TEXT",t[t.LABEL=4]="LABEL"}(n||(n={})),function(t){t[t.SUCCEEDED=0]="SUCCEEDED",t[t.FAILED_OUT_OF_MEMORY=1]="FAILED_OUT_OF_MEMORY"}(r||(r={})),function(t){t[t.NONE=0]="NONE",t[t.MAP=1]="MAP",t[t.LABEL=2]="LABEL",t[t.LABEL_ALPHA=4]="LABEL_ALPHA",t[t.HITTEST=8]="HITTEST",t[t.HIGHLIGHT=16]="HIGHLIGHT",t[t.CLIP=32]="CLIP",t[t.DEBUG=64]="DEBUG",t[t.NUM_DRAW_PHASES=9]="NUM_DRAW_PHASES"}(s||(s={})),function(t){t[t.SIZE=0]="SIZE",t[t.COLOR=1]="COLOR",t[t.OPACITY=2]="OPACITY",t[t.ROTATION=3]="ROTATION"}(a||(a={})),function(t){t[t.NONE=0]="NONE",t[t.OPACITY=1]="OPACITY",t[t.COLOR=2]="COLOR",t[t.ROTATION=4]="ROTATION",t[t.SIZE_MINMAX_VALUE=8]="SIZE_MINMAX_VALUE",t[t.SIZE_SCALE_STOPS=16]="SIZE_SCALE_STOPS",t[t.SIZE_FIELD_STOPS=32]="SIZE_FIELD_STOPS",t[t.SIZE_UNIT_VALUE=64]="SIZE_UNIT_VALUE"}(o||(o={})),function(t){t[t.MINMAX_TARGETS_OUTLINE=128]="MINMAX_TARGETS_OUTLINE",t[t.SCALE_TARGETS_OUTLINE=256]="SCALE_TARGETS_OUTLINE",t[t.FIELD_TARGETS_OUTLINE=512]="FIELD_TARGETS_OUTLINE",t[t.UNIT_TARGETS_OUTLINE=1024]="UNIT_TARGETS_OUTLINE"}(c||(c={})),function(t){t[t.SPRITE=0]="SPRITE",t[t.GLYPH=1]="GLYPH"}(u||(u={}))},519:function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r}));const n=new Float32Array(1);new Uint32Array(n.buffer);function r(t){return[255&t,(65280&t)>>>8,(16711680&t)>>>16,(4278190080&t)>>>24]}function s(t,e){return 65535&t|e<<16}function a(t,e,i,n){return 255&t|(255&e)<<8|(255&i)<<16|n<<24}},520:function(t,e,i){"use strict";i.d(e,"a",(function(){return p})),i.d(e,"b",(function(){return m})),i.d(e,"c",(function(){return v})),i.d(e,"d",(function(){return _})),i.d(e,"e",(function(){return u})),i.d(e,"f",(function(){return g})),i.d(e,"g",(function(){return o})),i.d(e,"h",(function(){return c}));var n=i(9),r=i(517),s=i(615);function a(t,e=!1){const i=r.e.SIZE_FIELD_STOPS|r.e.SIZE_MINMAX_VALUE|r.e.SIZE_SCALE_STOPS|r.e.SIZE_UNIT_VALUE,n=(t&(r.f.FIELD_TARGETS_OUTLINE|r.f.MINMAX_TARGETS_OUTLINE|r.f.SCALE_TARGETS_OUTLINE|r.f.UNIT_TARGETS_OUTLINE))>>>4;return e?i&n:i&~n}function o(t,e,i,n,s){switch(t){case r.d.FILL:return p.from(e,n);case r.d.LINE:return v.from(e,i);case r.d.MARKER:return _.from(e);case r.d.TEXT:return g.from(e);case r.d.LABEL:return m.from(e,s);default:throw new Error("Unable to createMaterialKey for unknown geometryType "+t)}}function c(t){switch(u.load(t).geometryType){case r.d.MARKER:return new _(t);case r.d.FILL:return new p(t);case r.d.LINE:return new v(t);case r.d.TEXT:return new g(t);case r.d.LABEL:return new m(t)}}class u{constructor(t){this._data=0,this._data=t}static load(t){const e=this.shared;return e.data=t,e}set data(t){this._data=t}get data(){return this._data}get geometryType(){return this.bits(8,11)}set geometryType(t){this.setBits(t,8,11)}get mapAligned(){return!!this.bit(20)}set mapAligned(t){this.setBit(20,t)}get sdf(){return!!this.bit(11)}set sdf(t){this.setBit(11,t)}get pattern(){return!!this.bit(12)}set pattern(t){this.setBit(12,t)}get textureBinding(){return this.bits(0,8)}set textureBinding(t){this.setBits(t,0,8)}get geometryTypeString(){switch(this.geometryType){case r.d.FILL:return"fill";case r.d.MARKER:return"marker";case r.d.LINE:return"line";case r.d.TEXT:return"text";case r.d.LABEL:return"label";default:throw new n.a("Unable to handle unknown geometryType: "+this.geometryType)}}setBit(t,e){const i=1<<t;e?this._data|=i:this._data&=~i}bit(t){return(this._data&1<<t)>>t}setBits(t,e,i){for(let n=e,r=0;n<i;n++,r++)this.setBit(n,0!=(t&1<<r))}bits(t,e){let i=0;for(let n=t,r=0;n<e;n++,r++)i|=this.bit(n)<<r;return i}hasVV(){return!1}setVV(t,e){}getVariation(){return{mapAligned:this.mapAligned,pattern:this.pattern,sdf:this.sdf}}getVariationHash(){return this._data&~(7&this.textureBinding)}}u.shared=new u(0);const h=t=>class extends t{get vvSizeMinMaxValue(){return 0!==this.bit(16)}set vvSizeMinMaxValue(t){this.setBit(16,t)}get vvSizeScaleStops(){return 0!==this.bit(17)}set vvSizeScaleStops(t){this.setBit(17,t)}get vvSizeFieldStops(){return 0!==this.bit(18)}set vvSizeFieldStops(t){this.setBit(18,t)}get vvSizeUnitValue(){return 0!==this.bit(19)}set vvSizeUnitValue(t){this.setBit(19,t)}hasVV(){return super.hasVV()||this.vvSizeMinMaxValue||this.vvSizeScaleStops||this.vvSizeFieldStops||this.vvSizeUnitValue}setVV(t,e){super.setVV(t,e);const i=a(t,e)&t;this.vvSizeMinMaxValue=!!(i&r.e.SIZE_MINMAX_VALUE),this.vvSizeFieldStops=!!(i&r.e.SIZE_FIELD_STOPS),this.vvSizeUnitValue=!!(i&r.e.SIZE_UNIT_VALUE),this.vvSizeScaleStops=!!(i&r.e.SIZE_SCALE_STOPS)}},l=t=>class extends t{get vvRotation(){return 0!==this.bit(15)}set vvRotation(t){this.setBit(15,t)}hasVV(){return super.hasVV()||this.vvRotation}setVV(t,e){super.setVV(t,e),this.vvRotation=!e&&!!(t&r.e.ROTATION)}},d=t=>class extends t{get vvColor(){return 0!==this.bit(13)}set vvColor(t){this.setBit(13,t)}hasVV(){return super.hasVV()||this.vvColor}setVV(t,e){super.setVV(t,e),this.vvColor=!e&&!!(t&r.e.COLOR)}},f=t=>class extends t{get vvOpacity(){return 0!==this.bit(14)}set vvOpacity(t){this.setBit(14,t)}hasVV(){return super.hasVV()||this.vvOpacity}setVV(t,e){super.setVV(t,e),this.vvOpacity=!e&&!!(t&r.e.OPACITY)}};class p extends(d(f(u))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=r.d.FILL,e?i.dotDensity=!0:i.setVV(t,!1),i.data}getVariation(){return{...super.getVariation(),dotDensity:this.dotDensity,vvColor:this.vvColor,vvOpacity:this.vvOpacity}}get dotDensity(){return!!this.bit(15)}set dotDensity(t){this.setBit(15,t)}}p.shared=new p(0);class _ extends(d(f(l(h(u))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(0);return e.geometryType=r.d.MARKER,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvRotation:this.vvRotation,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}_.shared=new _(0);class v extends(d(f(h(u)))){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=r.d.LINE,i.setVV(t,e),i.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}v.shared=new v(0);class g extends(d(f(l(h(u))))){static load(t){const e=this.shared;return e.data=t,e}static from(t){const e=this.load(t);return e.geometryType=r.d.TEXT,e.setVV(t,!1),e.data}getVariation(){return{...super.getVariation(),vvColor:this.vvColor,vvOpacity:this.vvOpacity,vvRotation:this.vvRotation,vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}g.shared=new g(0);class m extends(h(u)){static load(t){const e=this.shared;return e.data=t,e}static from(t,e){const i=this.load(0);return i.geometryType=r.d.LABEL,i.setVV(t,!1),i.mapAligned=Object(s.a)(e),i.data}getVariation(){return{...super.getVariation(),vvSizeFieldStops:this.vvSizeFieldStops,vvSizeMinMaxValue:this.vvSizeMinMaxValue,vvSizeScaleStops:this.vvSizeScaleStops,vvSizeUnitValue:this.vvSizeUnitValue}}}m.shared=new m(0)},521:function(t,e,i){"use strict";i.d(e,"a",(function(){return F})),i.d(e,"b",(function(){return w})),i.d(e,"c",(function(){return x})),i.d(e,"d",(function(){return D})),i.d(e,"e",(function(){return z})),i.d(e,"f",(function(){return Y})),i.d(e,"g",(function(){return Z})),i.d(e,"h",(function(){return N})),i.d(e,"i",(function(){return C})),i.d(e,"j",(function(){return X})),i.d(e,"k",(function(){return G})),i.d(e,"l",(function(){return A})),i.d(e,"m",(function(){return P})),i.d(e,"n",(function(){return V})),i.d(e,"o",(function(){return U})),i.d(e,"p",(function(){return R}));var n=i(9),r=i(4),s=(i(49),i(18),i(523),i(517)),a=i(105);class o{constructor(){this.color=[0,0,0,0],this.haloColor=[0,0,0,0],this.haloSize=0,this.size=12,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}acquire(t,e,i,n,r,s,a,o,c){this.color=t,this.haloColor=e,this.haloSize=i,this.size=n,this.angle=r,this.offsetX=s,this.offsetY=a,this.hAnchor=o,this.vAnchor=c}release(){this.color[0]=this.color[1]=this.color[2]=this.color[3]=0,this.haloColor[0]=this.haloColor[1]=this.haloColor[2]=this.haloColor[3]=0,this.haloSize=0,this.size=0,this.angle=0,this.offsetX=0,this.offsetY=0,this.hAnchor=0,this.vAnchor=0}}o.pool=new a.a(o);i(525);const c=r.a.getLogger("esri.views.2d.engine.webgl.Utils"),u="geometry",h=[{name:u,strideInBytes:36,divisor:0}],l=[{name:u,strideInBytes:12,divisor:0}],d=[{name:u,strideInBytes:40,divisor:0}],f=[{name:u,strideInBytes:36,divisor:0}],p=[{name:u,strideInBytes:36,divisor:0}];function _(t){const e={};for(const i of t)e[i.name]=i.strideInBytes;return e}const v=_([{name:u,strideInBytes:36,divisor:0}]),g=_(h),m=_(l),T=_(d),E=_(f),S=_(p);function A(t,e){switch(t){case s.d.MARKER:return v;case s.d.FILL:return e?m:g;case s.d.LINE:return T;case s.d.TEXT:return E;case s.d.LABEL:return S}}const M=[u],L=[u],b=[u],y=[u],I=[u];function O(t){switch(t){case s.d.MARKER:return M;case s.d.FILL:return L;case s.d.LINE:return b;case s.d.TEXT:return y;case s.d.LABEL:return I}}function R(t){switch(t%4){case 0:case 2:return 4;case 1:case 3:return 1}}function w(t,e){switch(e%4){case 0:case 2:return new Uint32Array(Math.floor(t*e/4));case 1:case 3:return new Uint8Array(t*e)}}function x(t,e){switch(e%4){case 0:case 2:return new Uint32Array(t);case 1:case 3:return new Uint8Array(t)}}function V(t){return null!=t}function U(t){return"number"==typeof t}function N(t){switch(t){case"butt":return 0;case"round":return 1;case"square":return 2;default:return c.error(new n.a("mapview-invalid-type",`Cap type ${t} is not a valid option. Defaulting to round`)),1}}function C(t){switch(t){case"miter":return 2;case"bevel":return 0;case"round":return 1;default:return c.error(new n.a("mapview-invalid-type",`Join type ${t} is not a valid option. Defaulting to round`)),1}}function P(t){switch(t){case"opacity":return s.b.OPACITY;case"color":return s.b.COLOR;case"rotation":return s.b.ROTATION;case"size":return s.b.SIZE;default:return c.error("Cannot interpret unknown vv: "+t),null}}function D(t,e,i,n,r,s,a){for(const c in s){const e=s[c].stride,n=R(e),a=s[c].data,o=i[c].data,u=e*r.vertexCount/n,h=e*t/n,l=e*r.vertexFrom/n;for(let t=0;t<u;++t)o[t+h]=a[t+l]}const o=r.indexCount;for(let c=0;c<o;++c)n[c+e]=a[c+r.indexFrom]-r.vertexFrom+t}const F={[u]:35044};function z(t,e){const i=[];for(let n=0;n<5;++n){const r=O(n),s={};for(const t of r)s[t]={data:e(n,t)};i.push({data:t(n),buffers:s})}return i}function B(t){switch(t){case 5120:case 5121:return 1;case 5122:case 5123:return 2;case 5126:case 5124:case 5125:return 4}}function G(t){switch(t){case 5121:return 1;case 32819:return 2;case 5126:return 4;default:return void c.error(new n.a("webgl-utils","Unable to handle type "+t))}}function X(t){switch(t){case 5121:return Uint8Array;case 32819:return Uint16Array;case 5126:return Float32Array;default:return void c.error(new n.a("webgl-utils","Unable to handle type "+t))}}const j=t=>{const e=new Map;for(const i in t)for(const n of t[i])e.set(n.name,n.location);return e},H=t=>{const e={};for(const i in t){const n=t[i];e[i]=n.length?n[0].stride:0}return e},W=new Map,Y=(t,e)=>{if(!W.has(t)){const i=function(t){const e={};for(const i in t){const n=t[i];let r=0;e[i]=n.map(t=>{const e={...t,normalized:t.normalized||!1,divisor:t.divisor||0,offset:r,stride:0};return r+=t.count*B(t.type),e}),e[i].forEach(t=>t.stride=r)}return e}(e),n={strides:H(i),bufferLayouts:i,attributes:j(e)};W.set(t,n)}return W.get(t)};function Z(t){t(s.d.FILL),t(s.d.LINE),t(s.d.MARKER),t(s.d.TEXT),t(s.d.LABEL)}},523:function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return c}));var n=i(519);function r(t,e){return Array.isArray(e)?(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]):(t[0]=e.r,t[1]=e.g,t[2]=e.b,t[3]=e.a),t}function s(t,e=0,i=!1){const n=t[e+3];return t[e+0]*=n,t[e+1]*=n,t[e+2]*=n,i||(t[e+3]*=255),t}function a(t){return s(r([],t))}function o(t){if(!t)return 0;const{r:e,g:i,b:r,a:s}=t;return Object(n.b)(e*s,i*s,r*s,255*s)}function c(t){if(!t)return 0;const[e,i,r,s]=t;return Object(n.b)(e*(s/255),i*(s/255),r*(s/255),s)}},525:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i(49),r=i(3),s=i(527),a=i(526),o=i(573);class c{constructor(t,e,i=null){this._context=t,this.type="texture",this._glName=null,this._descriptor=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,t.instanceCounter.increment(a.c.Texture,this),this._descriptor={target:3553,samplingMode:9729,wrapMode:10497,flipped:!1,hasMipmap:!1,isOpaque:!1,unpackAlignment:4,preMultiplyAlpha:!1,...e},34067===this._descriptor.target?this.setDataCubeMap(i):this.setData(i)}get glName(){return this._glName}get descriptor(){return this._descriptor}dispose(){this._context.gl&&this._glName&&(this._context.unbindTextureAllUnits(this),this._context.gl.deleteTexture(this._glName),this._glName=null,this._context.instanceCounter.decrement(a.c.Texture,this))}release(){this.dispose()}resize(t,e){const i=this._descriptor;i.width===t&&i.height===e||(i.width=t,i.height=e,34067===this._descriptor.target?this.setDataCubeMap(null):this.setData(null))}setDataCubeMap(t=null){for(let e=34069;e<=34074;e++)this.setData(t,e)}setData(t,e=3553){if(!this._context||!this._context.gl)return;const i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._descriptor.width=this._descriptor.width||4,this._descriptor.height=this._descriptor.height||4);const n=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES),a=this._descriptor;c._validateTexture(this._context,a),i.pixelStorei(i.UNPACK_ALIGNMENT,a.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,a.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.preMultiplyAlpha?1:0);const o=a.pixelFormat;let u=a.internalFormat?a.internalFormat:this._deriveInternalFormat(o,a.dataType);if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement){let n=t.width,r=t.height;t instanceof HTMLVideoElement&&(n=t.videoWidth,r=t.videoHeight),a.width&&a.height,i.texImage2D(e,0,u,o,a.dataType,t),Object(s.a)(i),a.hasMipmap&&this.generateMipmap(),void 0===a.width&&(a.width=n),void 0===a.height&&(a.height=r)}else{null!=a.width&&null!=a.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&u===i.DEPTH_STENCIL&&(u=i.DEPTH24_STENCIL8);let n=a.width,c=a.height;if(function(t){return Object(r.j)(t)&&"type"in t&&"compressed"===t.type}(t)){const r=Math.round(Math.log(Math.max(n,c))/Math.LN2)+1;a.hasMipmap=a.hasMipmap&&r===t.levels.length;for(let s=0;;++s){const r=t.levels[Math.min(s,t.levels.length-1)];if(i.compressedTexImage2D(e,s,u,n,c,0,r),1===n&&1===c||!a.hasMipmap)break;n=Math.max(1,n>>1),c=Math.max(1,c>>1)}}else if(Object(r.j)(t))i.texImage2D(e,0,u,n,c,0,o,a.dataType,t),Object(s.a)(i),a.hasMipmap&&this.generateMipmap();else for(let t=0;i.texImage2D(e,t,u,n,c,0,o,a.dataType,null),Object(s.a)(i),(1!==n||1!==c)&&a.hasMipmap;++t)n=Math.max(1,n>>1),c=Math.max(1,c>>1)}c._applySamplingMode(i,this._descriptor),c._applyWrapMode(i,this._descriptor),c._applyAnisotropicFilteringParameters(this._context,this._descriptor),Object(s.a)(i),this._context.bindTexture(n,c.TEXTURE_UNIT_FOR_UPDATES)}updateData(t,e,i,n,r,s,a=3553){s||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const o=this._context.gl,u=this._descriptor,h=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);(e<0||i<0||n>u.width||r>u.height||e+n>u.width||i+r>u.height)&&console.error("An attempt to update out of bounds of the texture!"),o.pixelStorei(o.UNPACK_ALIGNMENT,u.unpackAlignment),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,u.flipped?1:0),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.preMultiplyAlpha?1:0),s instanceof ImageData||s instanceof HTMLImageElement||s instanceof HTMLCanvasElement||s instanceof HTMLVideoElement?o.texSubImage2D(a,t,e,i,u.pixelFormat,u.dataType,s):o.texSubImage2D(a,t,e,i,n,r,u.pixelFormat,u.dataType,s),this._context.bindTexture(h,c.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const t=this._descriptor;t.hasMipmap||(t.hasMipmap=!0,this._samplingModeDirty=!0,c._validateTexture(this._context,t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);const e=this._context.bindTexture(this,c.TEXTURE_UNIT_FOR_UPDATES);this._context.gl.generateMipmap(t.target),this._context.bindTexture(e,c.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,c._validateTexture(this._context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._context.gl,e=this._descriptor;this._samplingModeDirty&&(c._applySamplingMode(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(c._applyWrapMode(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(t,e){if("webgl"===this._context.webglVersion)return t;if(5126===e)switch(t){case 6408:return 34836;case 6407:return 34837;default:throw new Error("Unable to derive format")}return t}static _validateTexture(t,e){(e.width<0||e.height<0)&&console.error("Negative dimension parameters are not allowed!");const i=Object(n.h)(e.width)&&Object(n.h)(e.height);Object(o.a)(t.gl)||i||("number"==typeof e.wrapMode?33071!==e.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===e.wrapMode.s&&33071===e.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}static _applySamplingMode(t,e){let i=e.samplingMode,n=e.samplingMode;9985===i||9987===i?(i=9729,e.hasMipmap||(n=9729)):9984!==i&&9986!==i||(i=9728,e.hasMipmap||(n=9728)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,n)}static _applyWrapMode(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}static _applyAnisotropicFilteringParameters(t,e){var i;const n=t.capabilities.textureFilterAnisotropic;n&&t.gl.texParameterf(e.target,n.TEXTURE_MAX_ANISOTROPY,null!=(i=e.maxAnisotropy)?i:1)}}c.TEXTURE_UNIT_FOR_UPDATES=0},526:function(t,e,i){"use strict";i.d(e,"a",(function(){return n})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return r}));const n=33984;var r;!function(t){t[t.Texture=0]="Texture",t[t.Buffer=1]="Buffer",t[t.VAO=2]="VAO",t[t.Program=3]="Program",t[t.Framebuffer=4]="Framebuffer",t[t.Renderbuffer=5]="Renderbuffer",t[t.COUNT=6]="COUNT"}(r||(r={}));const s=33306},527:function(t,e,i){"use strict";i.d(e,"a",(function(){return u})),i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return c}));var n=i(9),r=i(5);const s=i(4).a.getLogger("esri/views/webgl");const a=!!Object(r.a)("enable-feature:webgl-debug");function o(){return a}function c(){return a}function u(t){if(o()){const e=t.getError();if(e){const i=function(t,e){switch(e){case t.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case t.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case t.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case t.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case t.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case t.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}(t,e),r=(new Error).stack;s.error(new n.a("webgl-error","WebGL error occured",{message:i,stack:r}))}}}},552:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i(81),r=i(5),s=i(3),a=i(12);const o=1/Object(r.a)("mapview-transitions-duration");class c extends n.a{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const e=this._stage;this._stage=t,t?this._stage.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):e.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return Object(s.i)(this._transforms)&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this.requestRender())}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=Object(a.g)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=Object(a.g)(),this.requestRender()),this._fadeOutResolver.promise}beforeRender(t){this.updateTransitionProperties(t.deltaTime,t.state.scale)}afterRender(t){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){var t;null==(t=this.parent)||t.removeChild(this)}setTransform(t){}processRender(t){this.stage&&this.computedVisible&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.onDetach(),this.emit("detach")}updateTransitionProperties(t,e){if(this.fadeTransitionEnabled){const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const n=t*o;this.computedOpacity=i>e?Math.max(e,i-n):Math.min(e,i+n),this.computedVisible=this.computedOpacity>0;const r=e===this.computedOpacity;this.inFadeTransition=!r,r||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}},573:function(t,e,i){"use strict";function n(t){return window.WebGL2RenderingContext&&t instanceof window.WebGL2RenderingContext}i.d(e,"a",(function(){return n}))},579:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var n=i(5),r=i(246),s=i(858),a=i(552);const o=Object(n.a)("mapview-transitions-duration");class c extends a.a{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach(e=>e.clips=t)}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new s.a(o)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;this._needsSort=!0;const i=t.parent;return i&&i!==this&&i.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;this._needsSort=!0;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){this._needsSort&&(this.children.sort(t),this._needsSort=!1)}_createTransforms(){return{dvs:Object(r.b)()}}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}},615:function(t,e,i){"use strict";function n(t){switch(t){case"above-along":case"below-along":case"center-along":case"esriServerLinePlacementAboveAlong":case"esriServerLinePlacementBelowAlong":case"esriServerLinePlacementCenterAlong":return!0;default:return!1}}i.d(e,"a",(function(){return n}))},858:function(t,e,i){"use strict";i.d(e,"a",(function(){return u}));var n=i(197),r=i(9),s=i(7),a=i(4),o=i(204),c=i(319);class u{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect===t)return;this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=Object(c.a)(t);return e.error?e.error:[{scale:-1,effects:e.effects}]}const e=[];for(const i of t){if(!isFinite(i.scale)||i.scale<=0)return new r.a("effect:invalid-scale","scale must be finite and greater than 0",{stop:i});const t=Object(c.a)(i.value);if(t.error)return t.error;e.push({scale:i.scale,effects:t.effects})}e.sort((t,e)=>e.effects.length-t.effects.length);for(let i=0;i<e.length-1;i++){if(!l(e[i].effects,e[i+1].effects))return new r.a("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[i].effects,b:e[i+1].effects});d(e[i].effects,e[i+1].effects)}return e.sort((t,e)=>e.scale-t.scale),e}(t);Array.isArray(e)?this._transitionTo(e):(this._transitionTo([]),a.a.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:e}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(t){this.scale>0&&function(t,e,i){var n,r,s,a;return null==(n=t[0])||!n.effects||null==(r=e[0])||!r.effects||!((-1===(null==(s=t[0])?void 0:s.scale)||-1===(null==(a=e[0])?void 0:a.scale))&&(t.length>1||e.length>1)&&i<=0)&&l(t[0].effects,e[0].effects)}(this._current,t,this.scale)?(this._final=t,this._to=Object(s.a)(t),function(t,e,i){var n,r;const s=t.length>e.length?t:e,a=t.length>e.length?e:t,o=a[a.length-1],c=null!=(n=null==o?void 0:o.scale)?n:i,u=null!=(r=null==o?void 0:o.effects)?r:[];for(let h=a.length;h<s.length;h++)a.push({scale:c,effects:[...u]});for(let h=0;h<s.length;h++)a[h].scale=-1===a[h].scale?i:a[h].scale,s[h].scale=-1===s[h].scale?i:s[h].scale,d(a[h].effects,s[h].effects)}(this._current,this._to,this.scale),this._from=Object(s.a)(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=t),this._effects=this._current[0]?Object(s.a)(this._current[0].effects):[]}_applyTimeTransition(t){if(!this._to)return;this._time+=t;const e=Math.min(1,this._time/this.duration);for(let i=0;i<this._current.length;i++){const t=this._current[i],n=this._from[i],r=this._to[i];t.scale=f(n.scale,r.scale,e);for(let i=0;i<t.effects.length;i++){const s=t.effects[i],a=n.effects[i],o=r.effects[i];s.interpolate(a,o,e)}}1===e&&(this._current=this._final,this._effects=this._current[0]?Object(s.a)(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,i=this._current.length-1;let n,r,s=1;if(1===e.length||t>=e[0].scale)r=n=e[0].effects;else if(t<=e[i].scale)r=n=e[i].effects;else for(let a=0;a<i;a++){const i=e[a],o=e[a+1];if(i.scale>=t&&o.scale<=t){s=(t-i.scale)/(o.scale-i.scale),n=i.effects,r=o.effects;break}}for(let a=0;a<this._effects.length;a++)this._effects[a].interpolate(n[a],r[a],s)}}function h(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new o.c(t.type,0);case"saturate":case"brightness":case"contrast":return new o.c(t.type,1);case"opacity":return new o.f(1);case"hue-rotate":return new o.e(0);case"blur":return new o.b(0);case"drop-shadow":return new o.d(0,0,0,[...Object(n.a)("transparent")]);case"bloom":return new o.a(0,0,0)}}function l(t,e){const i=t.length>e.length?t:e;return(t.length>e.length?e:t).every((t,e)=>t.type===i[e].type)}function d(t,e){const i=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let r=n.length;r<i.length;r++)n.push(h(i[r]))}function f(t,e,i){return t+(e-t)*i}}}]);
//# sourceMappingURL=2.03f9ef1b.chunk.js.map