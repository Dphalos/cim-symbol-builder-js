(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[64],{617:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(98),i=n(3),o=n(208),a=n(352);class c{constructor(t=9,e){this.compareMinX=h,this.compareMinY=f,this.toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this.toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),y.prune(),x.prune(),A.prune(),M.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const r=this.toBBox;if(O(t,n))for(y.clear();n;){for(let i=0,o=n.children.length;i<o;i++){const o=n.children[i],a=n.leaf?r(o):o;O(t,a)&&(n.leaf?e(o):j(t,a)?this._all(o,e):y.push(o))}n=y.pop()}}collides(t){let e=this.data;const n=this.toBBox;if(!O(t,e))return!1;for(y.clear();e;){for(let r=0,i=e.children.length;r<i;r++){const i=e.children[r],o=e.leaf?n(i):i;if(O(t,o)){if(e.leaf||j(t,o))return!0;y.push(i)}}e=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new T([]),this}remove(t){if(!t)return this;let e,n=this.data,o=null,a=0,c=!1;const s=this.toBBox(t);for(A.clear(),M.clear();n||A.length>0;){var l;if(n||(n=Object(i.c)(A.pop()),o=A.data[A.length-1],a=null!=(l=M.pop())?l:0,c=!0),n.leaf&&(e=Object(r.e)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),A.push(n),this._condense(A),this;c||n.leaf||!j(n,s)?o?(a++,n=o.children[a],c=!1):n=null:(A.push(n),M.push(a),a=0,o=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(x.clear();n;){var r;if(!0===n.leaf)for(const t of n.children)e(t);else x.pushArray(n.children);n=null!=(r=x.pop())?r:null}}_build(t,e,n,r){const i=n-e+1;let o=this._maxEntries;if(i<=o){const r=new T(t.slice(e,n+1));return s(r,this.toBBox),r}r||(r=Math.ceil(Math.log(i)/Math.log(o)),o=Math.ceil(i/o**(r-1)));const a=new _([]);a.height=r;const c=Math.ceil(i/o),l=c*Math.ceil(Math.sqrt(o));g(t,e,n,l,this.compareMinX);for(let s=e;s<=n;s+=l){const e=Math.min(s+l-1,n);g(t,s,e,c,this.compareMinY);for(let n=s;n<=e;n+=c){const i=Math.min(n+c-1,e);a.children.push(this._build(t,n,i,r-1))}}return s(a,this.toBBox),a}_chooseSubtree(t,e,n,r){for(;r.push(e),!0!==e.leaf&&r.length-1!==n;){let n,r=1/0,i=1/0;for(let o=0,a=e.children.length;o<a;o++){const a=e.children[o],c=p(a),s=b(t,a)-c;s<i?(i=s,r=c<r?c:r,n=a):s===i&&c<r&&(r=c,n=a)}e=n||e.children[0]}return e}_insert(t,e,n){const r=this.toBBox,i=n?t:r(t);A.clear();const o=this._chooseSubtree(i,this.data,e,A);for(o.children.push(t),u(o,i);e>=0&&A.data[e].children.length>this._maxEntries;)this._split(A,e),e--;this._adjustParentBBoxes(i,A,e)}_split(t,e){const n=t.data[e],r=n.children.length,i=this._minEntries;this._chooseSplitAxis(n,i,r);const o=this._chooseSplitIndex(n,i,r);if(!o)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const a=n.children.splice(o,n.children.length-o),c=n.leaf?new T(a):new _(a);c.height=n.height,s(n,this.toBBox),s(c,this.toBBox),e?t.data[e-1].children.push(c):this._splitRoot(n,c)}_splitRoot(t,e){this.data=new _([t,e]),this.data.height=t.height+1,s(this.data,this.toBBox)}_chooseSplitIndex(t,e,n){let r,i,o;r=i=1/0;for(let a=e;a<=n-e;a++){const e=l(t,0,a,this.toBBox),c=l(t,a,n,this.toBBox),s=d(e,c),u=p(e)+p(c);s<r?(r=s,o=a,i=u<i?u:i):s===r&&u<i&&(i=u,o=a)}return o}_chooseSplitAxis(t,e,n){const r=t.leaf?this.compareMinX:h,i=t.leaf?this.compareMinY:f;this._allDistMargin(t,e,n,r)<this._allDistMargin(t,e,n,i)&&t.children.sort(r)}_allDistMargin(t,e,n,r){t.children.sort(r);const i=this.toBBox,o=l(t,0,e,i),a=l(t,n-e,n,i);let c=m(o)+m(a);for(let s=e;s<n-e;s++){const e=t.children[s];u(o,t.leaf?i(e):e),c+=m(o)}for(let s=n-e-1;s>=e;s--){const e=t.children[s];u(a,t.leaf?i(e):e),c+=m(a)}return c}_adjustParentBBoxes(t,e,n){for(let r=n;r>=0;r--)u(e.data[r],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const i=t.data[e-1],o=i.children;o.splice(Object(r.e)(o,n,o.length,i.indexHint),1)}else this.clear();else s(n,this.toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function s(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,r,i){i||(i=new T([])),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(let o,a=e;a<n;a++)o=t.children[a],u(i,t.leaf?r(o):o);return i}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function h(t,e){return t.minX-e.minX}function f(t,e){return t.minY-e.minY}function p(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function b(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function d(t,e){const n=Math.max(t.minX,e.minX),r=Math.max(t.minY,e.minY),i=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}function j(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function O(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function g(t,e,n,r,o){const c=[e,n];for(;c.length;){const e=Object(i.c)(c.pop()),n=Object(i.c)(c.pop());if(e-n<=r)continue;const s=n+Math.ceil((e-n)/r/2)*r;Object(a.a)(t,s,n,e,o),c.push(n,s,s,e)}}const y=new o.a,x=new o.a,A=new o.a,M=new o.a({deallocator:void 0});class v extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new r.a}}class T extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class _ extends v{constructor(t){super(),this.children=t,this.leaf=!1}}},656:function(t,e,n){"use strict";function r(t,e){var n;return t.isGeographic||t.isWebMercator&&(null==(n=null==e?void 0:e.geographic)||n)}n.d(e,"a",(function(){return r}))},672:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return j})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return g})),n.d(e,"e",(function(){return y}));var r=n(3),i=n(39),o=n(595),a=n(72),c=n(599),s=n(183),l=n(300),u=n(186),h=n(698),f=n(608),p=n(645),m=n(656),b=n(675);function d(t,e,n){return Object(m.a)(e.spatialReference,n)?function(t,e,n){const r=e.spatialReference,i=T(e,n,w),o=new Float64Array(t.position.length),a=function(t,e,n,r){Object(p.e)(f.v.fromTypedArray(r),f.v.fromTypedArray(t),e);const i=new Float64Array(t.length);return Object(b.a)(r,i,n)}(t.position,i,r,o),c=Object(s.a)(X,i);return{position:a,normal:x(a,o,t.normal,c,r),tangent:A(a,o,t.tangent,c,r)}}(t,e,n):function(t,e,n){const r=new Float64Array(t.position.length),i=t.position,o=e.x,a=e.y,c=e.z||0,{horizontal:s,vertical:l}=B(n?n.unit:null,e.spatialReference);for(let u=0;u<i.length;u+=3)r[u+0]=i[u+0]*s+o,r[u+1]=i[u+1]*s+a,r[u+2]=i[u+2]*l+c;return{position:r,normal:t.normal,tangent:t.tangent}}(t,e,n)}function j(t,e,n){const{position:i,normal:o,tangent:a}=t;if(Object(r.i)(e))return{position:i,normal:o,tangent:a};const c=e.localMatrix;return d({position:Object(b.h)(i,new Float64Array(i.length),c),normal:Object(r.j)(o)?Object(b.g)(o,new Float32Array(o.length),c):null,tangent:Object(r.j)(a)?Object(b.i)(a,new Float32Array(a.length),c):null},e.getOriginPoint(n),{geographic:e.geographic})}function O(t,e,n){if(null!=n&&n.useTransform){var r;const{position:i,normal:o,tangent:a}=t;return{vertexAttributes:{position:i,normal:o,tangent:a},transform:new h.a({origin:[e.x,e.y,null!=(r=e.z)?r:0],geographic:Object(m.a)(e.spatialReference,n)})}}return{vertexAttributes:d(t,e,n),transform:null}}function g(t,e,n){return Object(m.a)(e.spatialReference,n)?v(t,e,n):M(t,e,n)}function y(t,e,n,i){if(Object(r.i)(e))return g(t,n,i);const o=j(t,e,n.spatialReference);return n.equals(e.getOriginPoint(n.spatialReference))?M(o,n,i):Object(m.a)(n.spatialReference,i)?v(o,n,i):M(o,n,i)}function x(t,e,n,i,o){if(Object(r.i)(n))return null;const a=new Float32Array(n.length);return Object(p.a)(f.u.fromTypedArray(a),f.u.fromTypedArray(n),i),Object(b.b)(a,t,e,o,a),a}function A(t,e,n,i,o){if(Object(r.i)(n))return null;const a=new Float32Array(n.length);Object(p.a)(f.u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT),f.u.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),i);for(let r=3;r<a.length;r+=4)a[r]=n[r];return Object(b.d)(a,t,e,o,a),a}function M(t,e,n){const r=new Float64Array(t.position.length),i=t.position,o=e.x,a=e.y,c=e.z||0,{horizontal:s,vertical:l}=B(n?n.unit:null,e.spatialReference);for(let u=0;u<i.length;u+=3)r[u+0]=(i[u+0]-o)/s,r[u+1]=(i[u+1]-a)/s,r[u+2]=(i[u+2]-c)/l;return{position:r,normal:t.normal,tangent:t.tangent}}function v(t,e,n){const r=e.spatialReference;T(e,n,w);const i=Object(a.b)(E,w),o=new Float64Array(t.position.length),c=function(t,e,n,r){const i=Object(b.f)(t,e,r),o=f.v.fromTypedArray(i),a=new Float64Array(i.length),c=f.v.fromTypedArray(a);return Object(p.e)(c,o,n),a}(t.position,r,i,o),l=Object(s.a)(X,i);return{position:c,normal:_(t.normal,t.position,o,r,l),tangent:Y(t.tangent,t.position,o,r,l)}}function T(t,e,n){Object(l.b)(t.spatialReference,[t.x,t.y,t.z||0],n,Object(u.g)(t.spatialReference));const{horizontal:r,vertical:i}=B(e?e.unit:null,t.spatialReference);return Object(a.e)(n,n,[r,r,i]),n}function _(t,e,n,i,o){if(Object(r.i)(t))return null;const a=Object(b.c)(t,e,n,i,new Float32Array(t.length)),c=f.u.fromTypedArray(a);return Object(p.a)(c,c,o),a}function Y(t,e,n,i,o){if(Object(r.i)(t))return null;const a=Object(b.e)(t,e,n,i,new Float32Array(t.length)),c=f.u.fromTypedArray(a,4*Float32Array.BYTES_PER_ELEMENT);return Object(p.a)(c,c,o),a}function B(t,e){if(Object(r.i)(t))return F;const n=e.isGeographic?1:Object(i.c)(e),o=e.isGeographic?1:Object(i.e)(e),a=Object(i.b)(1,t,"meters");return{horizontal:a*n,vertical:a*o}}const w=Object(c.d)(),E=Object(c.d)(),X=Object(o.b)(),F={horizontal:1,vertical:1}},673:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return s}));var r=n(49),i=n(644),o=n(628),a=n(37);function c(t=f){return[t[0],t[1],t[2],t[3]]}function s(t,e,n=c()){return Object(a.h)(n,t),n[3]=e,n}function l(t,e,n=c()){return Object(i.f)(p,t,h(t)),Object(i.f)(m,e,h(e)),Object(i.e)(p,m,p),function(t,e){return t[3]=e,t}(n,Object(r.m)(Object(i.b)(n,p)))}function u(t){return t}function h(t){return Object(r.f)(t[3])}const f=[0,0,1,0],p=Object(o.b)(),m=Object(o.b)();c()},675:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return T})),n.d(e,"e",(function(){return v})),n.d(e,"f",(function(){return g})),n.d(e,"g",(function(){return A})),n.d(e,"h",(function(){return x})),n.d(e,"i",(function(){return M}));var r=n(4),i=n(3),o=n(183),a=n(595),c=n(599),s=n(37),l=n(62),u=n(300),h=n(186),f=n(24),p=n(38),m=n(608),b=n(645);const d=r.a.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(t,e,n,r,i){return Y(r)?(_(0,m.u.fromTypedArray(t),m.v.fromTypedArray(e),m.v.fromTypedArray(n),r,m.u.fromTypedArray(i)),i):(d.error("Cannot convert spatial reference to PCPF"),i)}function O(t,e,n,r,i){return Y(r)?(_(1,m.u.fromTypedArray(t),m.v.fromTypedArray(e),m.v.fromTypedArray(n),r,m.u.fromTypedArray(i)),i):(d.error("Cannot convert to spatial reference from PCPF"),i)}function g(t,e,n){return Object(u.i)(t,e,0,n,Object(h.g)(e),0,t.length/3),n}function y(t,e,n){return Object(u.i)(t,Object(h.g)(n),0,e,n,0,t.length/3),e}function x(t,e,n){if(Object(i.i)(t))return e;const r=m.v.fromTypedArray(t),o=m.v.fromTypedArray(e);return Object(b.e)(o,r,n),e}function A(t,e,n){if(Object(i.i)(t))return e;Object(o.a)(F,n);const r=m.u.fromTypedArray(t),a=m.u.fromTypedArray(e);return Object(b.a)(a,r,F),Object(o.f)(F)||Object(b.c)(a,a),e}function M(t,e,n){if(Object(i.i)(t))return e;Object(o.a)(F,n);const r=m.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),a=m.u.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT);if(Object(b.a)(a,r,F),Object(o.f)(F)||Object(b.c)(a,a),t!==e)for(let i=3;i<t.length;i+=4)e[i]=t[i];return e}function v(t,e,n,r,i){if(!Y(r))return d.error("Cannot convert spatial reference to PCPF"),i;_(0,m.u.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),m.v.fromTypedArray(e),m.v.fromTypedArray(n),r,m.u.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT));for(let o=3;o<t.length;o+=4)i[o]=t[o];return i}function T(t,e,n,r,i){if(!Y(r))return d.error("Cannot convert to spatial reference from PCPF"),i;_(1,m.u.fromTypedArray(t,16),m.v.fromTypedArray(e),m.v.fromTypedArray(n),r,m.u.fromTypedArray(i,16));for(let o=3;o<t.length;o+=4)i[o]=t[o];return i}function _(t,e,n,r,i,a){if(!e)return;const c=n.count,l=Object(h.g)(i);if(B(i))for(let h=0;h<c;h++)r.getVec(h,w),e.getVec(h,E),Object(u.b)(l,w,X,l),Object(o.e)(F,X),1===t&&Object(o.l)(F,F),Object(s.t)(E,E,F),a.setVec(h,E);else for(let h=0;h<c;h++){r.getVec(h,w),e.getVec(h,E),Object(u.b)(l,w,X,l),Object(o.e)(F,X);const i=Object(p.g)(n.get(h,1));let c=Math.cos(i);0===t&&(c=1/c),F[0]*=c,F[1]*=c,F[2]*=c,F[3]*=c,F[4]*=c,F[5]*=c,1===t&&Object(o.l)(F,F),Object(s.t)(E,E,F),Object(s.o)(E,E),a.setVec(h,E)}return a}function Y(t){return B(t)||function(t){return t.isWebMercator}(t)}function B(t){return t.isWGS84||Object(f.f)(t)||Object(f.i)(t)||Object(f.j)(t)}const w=Object(l.e)(),E=Object(l.e)(),X=Object(c.d)(),F=Object(a.b)()},698:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r,i=n(0),o=n(10),a=n(3),c=n(1),s=(n(5),n(6),n(4),n(2)),l=n(72),u=n(599),h=n(37),f=n(62),p=n(32),m=n(300),b=n(186),d=n(673),j=n(608),O=n(645),g=n(674);let y=r=class extends o.a{constructor(t){super(t),this.origin=Object(f.e)(),this.translation=Object(f.e)(),this.rotation=Object(d.d)(),this.scale=Object(f.g)(1,1,1),this.geographic=!0}get localMatrix(){const t=Object(u.d)();return Object(l.e)(t,t,this.scale),Object(l.c)(t,t,Object(d.a)(this.rotation),Object(d.b)(this.rotation)),Object(l.m)(t,t,this.translation),t}get localMatrixInverse(){return Object(l.b)(Object(u.d)(),this.localMatrix)}applyLocal(t,e){return Object(h.n)(e,t,this.localMatrix)}applyLocalInverse(t,e){return Object(h.n)(e,t,this.localMatrixInverse)}project(t,e){const n=new Float64Array(t.length),r=j.v.fromTypedArray(n),i=j.v.fromTypedArray(t);if(this.geographic){const t=Object(b.h)(Object(b.e)(e)),o=Object(u.d)();return Object(m.b)(e,this.origin,o,t),Object(l.i)(o,o,this.localMatrix),Object(O.e)(r,i,o),Object(m.i)(n,t,0,n,e,0,n.length/3),n}const{localMatrix:o,origin:a}=this;Object(l.f)(o,u.a)?Object(g.a)(r,i):Object(O.e)(r,i,o);for(let c=0;c<n.length;c+=3)n[c+0]+=a[0],n[c+1]+=a[1],n[c+2]+=a[2];return n}getOriginPoint(t){const[e,n,r]=this.origin;return new p.a({x:e,y:n,z:r,spatialReference:t})}equals(t){return Object(a.j)(t)&&this.geographic===t.geographic&&Object(h.l)(this.origin,t.origin)&&Object(l.g)(this.localMatrix,t.localMatrix)}clone(){const t={origin:Object(f.c)(this.origin),translation:Object(f.c)(this.translation),rotation:Object(d.d)(this.rotation),scale:Object(f.c)(this.scale),geographic:this.geographic};return new r(t)}};Object(i.a)([Object(c.b)({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"origin",void 0),Object(i.a)([Object(c.b)({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),Object(i.a)([Object(c.b)({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotation",void 0),Object(i.a)([Object(c.b)({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),Object(i.a)([Object(c.b)({type:Boolean,nonNullable:!0,json:{write:!0}})],y.prototype,"geographic",void 0),Object(i.a)([Object(c.b)()],y.prototype,"localMatrix",null),Object(i.a)([Object(c.b)()],y.prototype,"localMatrixInverse",null),y=r=Object(i.a)([Object(s.a)("esri.geometry.support.MeshTransform")],y);var x=y},903:function(t,e,n){"use strict";n.r(e),n.d(e,"ElevationSamplerWorker",(function(){return c})),n.d(e,"default",(function(){return c}));var r=n(5),i=n(3),o=n(617),a=n(672);class c{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new o.a;const r=this.createMeshData(t),a=Object(i.j)(e)?await e.invoke("createIndexThread",r,{transferList:n}):this.createIndexThread(r).result;return this.createPooledRBush().fromJSON(a)}createIndexThread(t){const e=new Float64Array(t.position),n=this.createPooledRBush();return t.components?this.createIndexComponentsThread(n,e,t.components.map(t=>new Uint32Array(t))):this.createIndexAllThread(n,e)}createIndexAllThread(t,e){const n=new Array(e.length/9);let r=0;for(let i=0;i<e.length;i+=9)n[r++]=s(e,i+0,i+3,i+6);return t.load(n),{result:t.toJSON()}}createIndexComponentsThread(t,e,n){let r=0;for(const a of n)r+=a.length/3;const i=new Array(r);let o=0;for(const a of n)for(let t=0;t<a.length;t+=3)i[o++]=s(e,3*a[t+0],3*a[t+1],3*a[t+2]);return t.load(i),{result:t.toJSON()}}createMeshData(t){const e=(t.transform?Object(a.b)({position:t.vertexAttributes.position,normal:null,tangent:null},t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(t=>!t.faces)?{position:e}:{position:e,components:t.components.map(t=>t.faces)}}createPooledRBush(){return new o.a(9,Object(r.a)("csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function s(t,e,n,r){return{minX:Math.min(t[e+0],t[n+0],t[r+0]),maxX:Math.max(t[e+0],t[n+0],t[r+0]),minY:Math.min(t[e+1],t[n+1],t[r+1]),maxY:Math.max(t[e+1],t[n+1],t[r+1]),p0:[t[e+0],t[e+1],t[e+2]],p1:[t[n+0],t[n+1],t[n+2]],p2:[t[r+0],t[r+1],t[r+2]]}}}}]);
//# sourceMappingURL=64.aab18875.chunk.js.map