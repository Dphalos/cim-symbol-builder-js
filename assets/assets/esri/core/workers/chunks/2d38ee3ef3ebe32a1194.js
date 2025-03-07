"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4470],{91460:(e,t,n)=>{function r(e){return e&&("function"==typeof e.on||"function"==typeof e.addEventListener)}function o(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("on"in e)return e.on(t,n);if(Array.isArray(t)){const r=t.slice();for(const t of r)e.addEventListener(t,n);return{remove(){for(const t of r)e.removeEventListener(t,n)}}}return e.addEventListener(t,n),{remove(){e.removeEventListener(t,n)}}}function i(e,t,n){if(!r(e))throw new TypeError("target is not a Evented or EventTarget object");if("once"in e)return e.once(t,n);const i=o(e,t,(t=>{i.remove(),n.call(e,t)}));return{remove(){i.remove()}}}n.d(t,{vT:()=>r,on:()=>o,IH:()=>i})},95330:(e,t,n)=>{n.d(t,{e4:()=>A,$6:()=>u,Ue:()=>a,zE:()=>c,dD:()=>S,hh:()=>C,vr:()=>b,Ds:()=>J,as:()=>I,WW:()=>T,R8:()=>_,D_:()=>O,Hc:()=>m,tI:()=>w,y8:()=>E,fu:()=>d,$F:()=>g,d1:()=>R,DB:()=>U,r9:()=>y,k_:()=>f,H9:()=>h,gx:()=>v,Hl:()=>N});const r=(o=n(16358).Z,{setTimeout:(e,t)=>{const n=o.setTimeout(e,t);return{remove:()=>o.clearTimeout(n)}}});var o,i=n(20102),s=n(91460),l=(n(92604),n(70586));function u(e){return Promise.all(e)}function a(e){return new Promise(((t,n)=>{try{e(t,n)}catch(e){Promise.resolve().then((()=>n(e)))}}))}function c(e="Aborted"){return new i.Z("AbortError",e)}function f(e,t="Aborted"){if(m(e))throw c(t)}function p(e){return(0,l.pC)(e)?"aborted"in e?e:e.signal:e}function m(e){const t=p(e);return(0,l.pC)(t)&&t.aborted}function y(e){if(O(e))throw e}function h(e){if(!O(e))throw e}function d(e,t){const n=p(e);if(!(0,l.Wi)(n)){if(!n.aborted)return(0,s.IH)(n,"abort",(()=>t()));t()}}function g(e,t){const n=p(e);if(!(0,l.Wi)(n))return f(n),(0,s.IH)(n,"abort",(()=>t(c())))}function N(e,t){const n=p(t);return(0,l.Wi)(n)?e:new Promise(((n,r)=>{let o=d(t,(()=>r(c())));const i=()=>o=(0,l.hw)(o);e.then(i,i),e.then(n,r)}))}function O(e){return e&&"AbortError"===e.name}function _(e){return e.catch((e=>{if(!O(e))throw e}))}function S(){let e=null;const t=new Promise(((t,n)=>{e={promise:void 0,resolve:t,reject:n}}));return e.promise=t,e}function I(e){if(!e)return;if("function"!=typeof e.forEach){const t=Object.keys(e);return I(t.map((t=>e[t]))).then((e=>{const n={};return t.forEach(((t,r)=>n[t]=e[r])),n}))}const t=e;return a((e=>{const n=[];let r=t.length;0===r&&e(n),t.forEach((t=>{const o={promise:t||Promise.resolve(t)};n.push(o),o.promise.then((e=>{o.value=e})).catch((e=>{o.error=e})).then((()=>{--r,0===r&&e(n)}))}))}))}function T(e){return I(e).then((e=>e.filter((e=>!!e.value)).map((e=>e.value))))}function R(e){return Promise.reject(e)}function U(e){return Promise.resolve(e)}function A(e,t,n){const r=new AbortController;return d(n,(()=>r.abort())),new Promise(((n,o)=>{let i=setTimeout((()=>{i=0,n(t)}),e);d(r,(()=>{i&&(clearTimeout(i),o(c()))}))}))}function E(e){return e&&"function"==typeof e.then}function v(e){return w(e)?e:Promise.resolve(e)}function w(e){return e&&"object"==typeof e&&"then"in e&&"function"==typeof e.then}function J(e,t=-1){let n,r,o,i,s=null;const u=(...a)=>{if(n){r=a,i&&i.reject(c()),i=S();const e=(0,l.j0)(i.promise);if(s){const e=s;s=null,e.abort()}return e}if(o=i||S(),i=null,t>0){const r=new AbortController;n=v(e(...a,r.signal));const o=n;A(t).then((()=>{n===o&&(i?r.abort():s=r)}))}else n=1,n=v(e(...a));const f=()=>{const e=r;r=o=n=s=null,null!=e&&u(...e)},p=n,m=o;return p.then(f,f),p.then(m.resolve,m.reject),(0,l.j0)(m.promise)};return u}function C(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r})),o=t=>{e(t)};return o.resolve=t=>e(t),o.reject=e=>t(e),o.timeout=(e,t)=>r.setTimeout((()=>o.reject(t)),e),o.promise=n,o}function b(e){let t=new AbortController;const n=e(t.signal);let r={promise:n,finished:!1,abort:()=>{t&&(t.abort(),t=null)}};const o=()=>{r&&(r.finished=!0,r=null),t=null};return n.then(o,o),r}},17452:(e,t,n)=>{n.d(t,{R9:()=>N,qg:()=>E,tD:()=>C,ZN:()=>ae,fl:()=>ce,AX:()=>S,Gd:()=>O,Ie:()=>se,sJ:()=>W,AH:()=>B,vt:()=>oe,oh:()=>q,P$:()=>k,Ml:()=>fe,ed:()=>b,b7:()=>A,D6:()=>L,tm:()=>j,YP:()=>Z,jc:()=>F,HK:()=>Y,$U:()=>V,oC:()=>X,kl:()=>D,v_:()=>H,hF:()=>M,_l:()=>Q,PF:()=>P,Fv:()=>$,B7:()=>U,u0:()=>T,Yd:()=>re,Hu:()=>ue,Qj:()=>ie,hO:()=>ee,mN:()=>I});var r=n(68773),o=n(20102),i=(n(16358),n(92604)),s=n(70586);const l=i.Z.getLogger("esri.core.urlUtils"),u=r.Z.request,a="esri/config: esriConfig.request.proxyUrl is not set.",c=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,f=/^\s*http:/i,p=/^\s*https:/i,m=/^\s*file:/i,y=/:\d+$/,h=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i,d=new RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$"),g=new RegExp("^((([^\\[:]+):)?([^@]+)@)?(\\[([^\\]]+)\\]|([^\\[:]*))(:([0-9]+))?$");class N{constructor(e=""){this.uri=e,this.scheme=null,this.authority=null,this.path=null,this.query=null,this.fragment=null,this.user=null,this.password=null,this.host=null,this.port=null;let t=(0,s.j0)(this.uri.match(d));this.scheme=t[2]||(t[1]?"":null),this.authority=t[4]||(t[3]?"":null),this.path=t[5],this.query=t[7]||(t[6]?"":null),this.fragment=t[9]||(t[8]?"":null),null!=this.authority&&(t=(0,s.j0)(this.authority.match(g)),this.user=t[3]||null,this.password=t[4]||null,this.host=t[6]||t[7],this.port=t[9]||null)}toString(){return this.uri}}const O=new N(r.Z.applicationUrl),_={},S=(()=>{const e=(0,s.j0)(O.path),t=e.substring(0,e.lastIndexOf(e.split("/")[e.split("/").length-1]));return`${O.scheme}://${O.host}${null!=O.port?`:${O.port}`:""}${t}`})();function I(e){const t={path:null,query:null},n=new N(e),r=e.indexOf("?");return null===n.query?t.path=e:(t.path=e.substring(0,r),t.query=T(n.query)),n.fragment&&(t.hash=n.fragment,null===n.query&&(t.path=t.path.substring(0,t.path.length-(n.fragment.length+1)))),t}function T(e){const t=e.split("&"),n={};for(const e of t){if(!e)continue;const t=e.indexOf("=");let r,o;t<0?(r=decodeURIComponent(e),o=""):(r=decodeURIComponent(e.slice(0,t)),o=decodeURIComponent(e.slice(t+1)));let i=n[r];"string"==typeof i&&(i=n[r]=[i]),Array.isArray(i)?i.push(o):n[r]=o}return n}function R(e){return e&&"object"==typeof e&&"toJSON"in e&&"function"==typeof e.toJSON}function U(e,t){return e?t&&"function"==typeof t?Object.keys(e).map((n=>encodeURIComponent(n)+"="+encodeURIComponent(t(n,e[n])))).join("&"):Object.keys(e).map((n=>{const r=e[n];if(null==r)return"";const o=encodeURIComponent(n)+"=",i=t&&t[n];return i?o+encodeURIComponent(i(r)):Array.isArray(r)?r.map((e=>R(e)?o+encodeURIComponent(JSON.stringify(e)):o+encodeURIComponent(e))).join("&"):R(r)?o+encodeURIComponent(JSON.stringify(r)):o+encodeURIComponent(r)})).filter((e=>e)).join("&"):""}function A(e=!1){let t,n=u.proxyUrl;if("string"==typeof e){t=V(e);const r=b(e);r&&(n=r.proxyUrl)}else t=!!e;if(!n)throw l.warn(a),new o.Z("urlutils:proxy-not-set",a);return t&&te()&&(n=ee(n)),I(n)}function E(e){const t=b(e);let n,r;if(t){const e=w(t.proxyUrl);n=e.path,r=e.query?T(e.query):null}if(n){const t=I(e);e=n+"?"+t.path;const o=U({...r,...t.query});o&&(e=`${e}?${o}`)}return e}const v={path:"",query:""};function w(e){const t=e.indexOf("?");return-1!==t?(v.path=e.slice(0,t),v.query=e.slice(t+1)):(v.path=e,v.query=null),v}function J(e){return(e=ne(e=function(e){return e&&"/"===e[e.length-1]?e:`${e}/`}(e=w(e).path),!0)).toLowerCase()}function C(e){const t={proxyUrl:e.proxyUrl,urlPrefix:J(e.urlPrefix)},n=u.proxyRules,r=t.urlPrefix;let o=n.length;for(let e=0;e<n.length;e++){const t=n[e].urlPrefix;if(0===r.indexOf(t)){if(r.length===t.length)return-1;o=e;break}0===t.indexOf(r)&&(o=e+1)}return n.splice(o,0,t),o}function b(e){const t=u.proxyRules,n=J(e);for(let e=0;e<t.length;e++)if(0===n.indexOf(t[e].urlPrefix))return t[e]}function j(e,t){return e=x(e),t=x(t),ne(e)===ne(t)}function x(e){const t=(e=$(e)).indexOf("/sharing");return t>0?e.substring(0,t):e.replace(/\/+$/,"")}function q(e){const t=t=>null==t||t instanceof RegExp&&t.test(e)||"string"==typeof t&&e.startsWith(t),n=u.interceptors;if(n)for(const e of n)if(Array.isArray(e.urls)){if(e.urls.some(t))return e}else if(t(e.urls))return e;return null}function L(e,t,n=!1){const r=le(e),o=le(t);return!(!n&&r.scheme!==o.scheme)&&null!=r.host&&null!=o.host&&r.host.toLowerCase()===o.host.toLowerCase()&&r.port===o.port}function D(e){if("string"==typeof e){if(!Z(e))return!0;e=le(e)}if(L(e,O))return!0;const t=u.trustedServers||[];for(let n=0;n<t.length;n++){const r=G(t[n]);for(let t=0;t<r.length;t++)if(L(e,r[t]))return!0}return!1}function G(e){return _[e]||(z(e)||X(e)?_[e]=[new N(M(e))]:_[e]=[new N(`http://${e}`),new N(`https://${e}`)]),_[e]}function M(e,t=S,n){return X(e)?n&&n.preserveProtocolRelative?e:"http"===O.scheme&&O.authority===k(e).slice(2)?`http:${e}`:`https:${e}`:z(e)?e:(0,s.j0)(H("/"===e[0]?function(e){const t=e.indexOf("//"),n=e.indexOf("/",t+2);return-1===n?e:e.slice(0,n)}(t):t,e))}function P(e,t=S,n){if(!Z(e))return e;const r=$(e),o=r.toLowerCase(),i=$(t).toLowerCase().replace(/\/+$/,""),s=n?$(n).toLowerCase().replace(/\/+$/,""):null;if(s&&0!==i.indexOf(s))return e;const l=(e,t,n)=>-1===(n=e.indexOf(t,n))?e.length:n;let u=l(o,"/",o.indexOf("//")+2),a=-1;for(;o.slice(0,u+1)===i.slice(0,u)+"/"&&(a=u+1,u!==o.length);)u=l(o,"/",u+1);if(-1===a)return e;if(s&&a<s.length)return e;e=r.slice(a);const c=i.slice(a-1).replace(/[^/]+/g,"").length;if(c>0)for(let t=0;t<c;t++)e=`../${e}`;else e=`./${e}`;return e}function $(e){return function(e){const t=u.httpsDomains;if(!function(e){return f.test(e)||"http"===O.scheme&&X(e)}(e))return e;const n=e.indexOf("/",7);let r;if(r=-1===n?e:e.slice(0,n),r=r.toLowerCase().slice(7),y.test(r)){if(!r.endsWith(":80"))return e;r=r.slice(0,-3),e=e.replace(":80","")}return"http"===O.scheme&&r===O.authority&&!h.test(e)||(te()&&r===O.authority||t&&t.some((e=>r===e||r.endsWith(`.${e}`)))||te()&&!b(e))&&(e=ee(e)),e}(e=function(e){return e.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2")}(e=function(e){if(/^https?:\/\//i.test(e)){const t=w(e);e=(e=t.path.replace(/\/{2,}/g,"/")).replace("/","//"),t.query&&(e+=`?${t.query}`)}return e}(e=M(e=e.trim()))))}function H(...e){const t=e.filter(s.pC);if(!t||!t.length)return;const n=[];if(Z(t[0])){const e=t[0],r=e.indexOf("//");-1!==r&&(n.push(e.slice(0,r+1)),function(e){return m.test(e)}(t[0])&&(n[0]+="/"),t[0]=e.slice(r+2))}else"/"===t[0][0]&&n.push("");const r=t.reduce(((e,t)=>t?e.concat(t.split("/")):e),[]);for(let e=0;e<r.length;e++){const t=r[e];".."===t&&n.length>0&&".."!==n[n.length-1]?n.pop():(!t&&e===r.length-1||t&&("."!==t||0===n.length))&&n.push(t)}return n.join("/")}function k(e,t=!1){if(F(e)||Y(e))return null;let n=e.indexOf("://");if(-1===n&&X(e))n=2;else{if(-1===n)return null;n+=3}const r=e.indexOf("/",n);return-1!==r&&(e=e.slice(0,r)),t&&(e=ne(e,!0)),e}function Z(e){return X(e)||z(e)}function F(e){return null!=e&&"blob:"===e.slice(0,5)}function Y(e){return"data:"===e.slice(0,5)}function B(e){const t=W(e);if(!t||!t.isBase64)return null;const n=atob(t.data),r=new Uint8Array(n.length);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return r.buffer}const K=/^data:(.*?)(;base64)?,(.*)$/;function W(e){const t=e.match(K);if(!t)return null;const[,n,r,o]=t;return{mediaType:n,isBase64:!!r,data:o}}function Q(e){return e.isBase64?`data:${e.mediaType};base64,${e.data}`:`data:${e.mediaType},${e.data}`}function X(e){return null!=e&&void 0!==e&&"/"===e[0]&&"/"===e[1]}function z(e){return c.test(e)}function V(e){return p.test(e)||"https"===O.scheme&&X(e)}function ee(e){return X(e)?`https:${e}`:e.replace(f,"https:")}function te(){return"https"===O.scheme}function ne(e,t=!1){return X(e)?e.slice(2):(e=e.replace(c,""),t&&e.length>1&&"/"===e[0]&&"/"===e[1]&&(e=e.slice(2)),e)}function re(e){let t=0;if(Z(e)){const n=e.indexOf("//");-1!==n&&(t=n+2)}const n=e.lastIndexOf("/");return n<t?e:e.slice(0,n+1)}function oe(e,t){if(!e)return"";const n=I(e).path.replace(/\/+$/,""),r=n.substring(n.lastIndexOf("/")+1);if(null==t||!t.length)return r;const o=new RegExp(`.(${t.join("|")})$`,"ig");return r.replace(o,"")}function ie(e){return e.replace(/\/+$/,"")}function se(e,t,n){if(!(t&&n&&e&&Z(e)))return e;const r=e.indexOf("//"),o=e.indexOf("/",r+2),i=e.indexOf(":",r+2),s=Math.min(o<0?e.length:o,i<0?e.length:i);return e.slice(r+2,s).toLowerCase()!==t.toLowerCase()?e:`${e.slice(0,r+2)}${n}${e.slice(s)}`}function le(e){return"string"==typeof e?new N(M(e)):(e.scheme||(e.scheme=O.scheme),e)}function ue(e,t){const n=I(e),r=Object.keys(n.query||{});return r.length>0&&t&&t.warn("removeQueryParameters()",`Url query parameters are not supported, the following parameters have been removed: ${r.join(", ")}.`),n.path}function ae(e,t,n){const r=I(e),o=r.query||{};return o[t]=String(n),`${r.path}?${U(o)}`}function ce(e,t){const n=I(e),r=n.query||{};for(const e in t)r[e]=t[e];const o=U(r);return o?`${n.path}?${o}`:n.path}function fe(e){if((0,s.Wi)(e))return null;const t=e.match(pe);return t?t[1]:null}const pe=/.*?\.([^\/]*)$/},66577:(e,t,n)=>{n.d(t,{qM:()=>c});var r=n(75215),o=n(6570),i=n(9361),s=n(65091),l=n(13473),u=n(17332),a=n(58901);n(82971),n(86973),n(33955);const c={base:i.Z,key:"type",typeMap:{extent:o.Z,multipoint:s.Z,point:l.Z,polyline:a.Z,polygon:u.Z}};(0,r.N7)(c)},33955:(e,t,n)=>{n.d(t,{im:()=>h,q9:()=>N,Ji:()=>d,YX:()=>c,aW:()=>f,wp:()=>p,oU:()=>y,l9:()=>m});var r=n(70586),o=n(6570),i=n(9361),s=n(65091),l=n(13473),u=n(17332),a=n(58901);function c(e){return void 0!==e.xmin&&void 0!==e.ymin&&void 0!==e.xmax&&void 0!==e.ymax}function f(e){return void 0!==e.points}function p(e){return void 0!==e.x&&void 0!==e.y}function m(e){return void 0!==e.paths}function y(e){return void 0!==e.rings}function h(e){return(0,r.Wi)(e)?null:e instanceof i.Z?e:p(e)?l.Z.fromJSON(e):m(e)?a.Z.fromJSON(e):y(e)?u.Z.fromJSON(e):f(e)?s.Z.fromJSON(e):c(e)?o.Z.fromJSON(e):null}function d(e){return e?p(e)?"esriGeometryPoint":m(e)?"esriGeometryPolyline":y(e)?"esriGeometryPolygon":c(e)?"esriGeometryEnvelope":f(e)?"esriGeometryMultipoint":null:null}const g={esriGeometryPoint:l.Z,esriGeometryPolyline:a.Z,esriGeometryPolygon:u.Z,esriGeometryEnvelope:o.Z,esriGeometryMultipoint:s.Z};function N(e){return e&&g[e]||null}},86973:(e,t,n)=>{n.d(t,{Mk:()=>o,P$:()=>i});var r=n(35454);const o=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon"}),i=(0,r.wY)()({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh"})},11282:(e,t,n)=>{n.d(t,{lA:()=>o,cv:()=>s,en:()=>i});var r=n(17452);function o(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function i(e){return"string"==typeof e?(0,r.mN)(e):e}function s(e,t,n){const r={};for(const o in e){if("declaredClass"===o)continue;const i=e[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){r[o]=[];for(let e=0;e<i.length;e++)r[o][e]=s(i[e])}else if("object"==typeof i)if(i.toJSON){const e=i.toJSON(n&&n[o]);r[o]=t?e:JSON.stringify(e)}else r[o]=t?i:JSON.stringify(i);else r[o]=i}return r}},29554:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Y});var r=n(43697),o=n(5600),i=(n(67676),n(80442),n(75215)),s=n(52011),l=n(3172),u=n(11282);n(66577);var a=n(33955);function c(e){return{geometryType:(0,a.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function f(e,t,n){const r=(0,a.q9)(t);return e.map((e=>{const t=r.fromJSON(e);return t.spatialReference=n,t}))}var p=n(17332);async function m(e,t,n,r){const o=t[0].spatialReference,i=(0,u.en)(e),s={...i.query,f:"json",sr:JSON.stringify(o.toJSON()),polygons:JSON.stringify(c(t).geometries),polylines:JSON.stringify(c(n).geometries)},a=(0,u.lA)(s,r);return(0,l.default)(i.path+"/autoComplete",a).then((({data:e})=>(e.geometries||[]).map((({rings:e})=>new p.Z({spatialReference:o,rings:e})))))}async function y(e,t,n){const r=t[0].spatialReference,o=(0,u.en)(e),i={...o.query,f:"json",sr:JSON.stringify(r.toJSON()),geometries:JSON.stringify(c(t))},s=(0,u.lA)(i,n);return(0,l.default)(o.path+"/convexHull",s).then((({data:e})=>(0,a.im)(e.geometry).set({spatialReference:r})))}async function h(e,t,n,r){const o=t[0].spatialReference,i=(0,u.en)(e);let s={query:{...i.query,f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify(c(t)),geometry:JSON.stringify({geometryType:(0,a.Ji)(n),geometry:n.toJSON()})}};return r&&(s={...r,...s}),(0,l.default)(i.path+"/difference",s).then((({data:e})=>(e.geometries||[]).map((e=>(0,a.im)(e).set({spatialReference:o})))))}var d=n(35454);const g=new d.Xn({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"});var N=n(10736);let O=class extends N.wq{constructor(e){super(e),this.deviationUnit=null,this.geometries=null,this.maxDeviation=null}};(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],O.prototype,"deviationUnit",void 0),(0,r._)([(0,o.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],O.prototype,"geometries",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],O.prototype,"maxDeviation",void 0),O=(0,r._)([(0,s.j)("esri.rest.support.GeneralizeParameters")],O),O.from=(0,i.se)(O);const _=O,S=new d.Xn({109006:"centimeters",9102:"decimal-degrees",109005:"decimeters",9002:"feet",109009:"inches",9036:"kilometers",9001:"meters",9035:"miles",109007:"millimeters",109012:"nautical-miles",9096:"yards"});async function I(e,t,n,r){const o=t[0].spatialReference,i=(0,u.en)(e),s={...i.query,f:"json",sr:JSON.stringify(o.toJSON()),geometries:JSON.stringify(c(t)),geometry:JSON.stringify({geometryType:(0,a.Ji)(n),geometry:n.toJSON()})},f=(0,u.lA)(s,r);return(0,l.default)(i.path+"/intersect",f).then((({data:e})=>(e.geometries||[]).map((e=>(0,a.im)(e).set({spatialReference:o})))))}var T=n(58901);let R=class extends N.wq{constructor(e){super(e),this.calculationType=null,this.geodesic=null,this.lengthUnit=null,this.polylines=null}};(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],R.prototype,"calculationType",void 0),(0,r._)([(0,o.Cb)({type:Boolean,json:{write:!0}})],R.prototype,"geodesic",void 0),(0,r._)([(0,o.Cb)({json:{write:!0}})],R.prototype,"lengthUnit",void 0),(0,r._)([(0,o.Cb)({type:[T.Z],json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],R.prototype,"polylines",void 0),R=(0,r._)([(0,s.j)("esri.rest.support.LengthsParameters")],R),R.from=(0,i.se)(R);const U=R,A=new d.Xn({preserveShape:"preserve-shape"});function E(e){const{polylines:t,lengthUnit:n,geodesic:r,calculationType:o}=e.toJSON(),i={};i.polylines=JSON.stringify(t);const s=e.polylines[0].spatialReference;return i.sr=s.wkid?s.wkid:JSON.stringify(s.toJSON()),n&&(i.lengthUnit=n),r&&(i.geodesic=r),o&&(i.calculationType=A.toJSON(o)),i}let v=class extends N.wq{constructor(e){super(e),this.bevelRatio=null,this.geometries=null,this.offsetDistance=null,this.offsetHow=null,this.offsetUnit=null}};(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"bevelRatio",void 0),(0,r._)([(0,o.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.geometries=e.map((e=>e.toJSON()))}}}})],v.prototype,"geometries",void 0),(0,r._)([(0,o.Cb)({type:Number,json:{write:!0}})],v.prototype,"offsetDistance",void 0),(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],v.prototype,"offsetHow",void 0),(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],v.prototype,"offsetUnit",void 0),v=(0,r._)([(0,s.j)("esri.rest.support.OffsetParameters")],v),v.from=(0,i.se)(v);const w=v,J=new d.Xn({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),C=new d.Xn({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});let b=class extends N.wq{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],n={};return n.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),n.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),n.geometries=JSON.stringify({geometryType:(0,a.Ji)(t),geometries:e}),this.transformation&&(n.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(n.transformForward=this.transformForward),n}};(0,r._)([(0,o.Cb)()],b.prototype,"geometries",void 0),(0,r._)([(0,o.Cb)({json:{read:{source:"outSR"}}})],b.prototype,"outSpatialReference",void 0),(0,r._)([(0,o.Cb)()],b.prototype,"transformation",void 0),(0,r._)([(0,o.Cb)()],b.prototype,"transformForward",void 0),b=(0,r._)([(0,s.j)("esri.rest.support.ProjectParameters")],b);const j=b,x=(0,i.se)(j);let q=class extends N.wq{constructor(e){super(e),this.geometries1=null,this.geometries2=null,this.relation=null,this.relationParameter=null}};(0,r._)([(0,o.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.geometries1=e.map((e=>e.toJSON()))}}}})],q.prototype,"geometries1",void 0),(0,r._)([(0,o.Cb)({json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.geometries2=e.map((e=>e.toJSON()))}}}})],q.prototype,"geometries2",void 0),(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],q.prototype,"relation",void 0),(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],q.prototype,"relationParameter",void 0),q=(0,r._)([(0,s.j)("esri.rest.support.RelationParameters")],q),q.from=(0,i.se)(q);const L=q,D=new d.Xn({esriGeometryRelationCross:"cross",esriGeometryRelationDisjoint:"disjoint",esriGeometryRelationIn:"in",esriGeometryRelationInteriorIntersection:"interior-intersection",esriGeometryRelationIntersection:"intersection",esriGeometryRelationLineCoincidence:"line-coincidence",esriGeometryRelationLineTouch:"line-touch",esriGeometryRelationOverlap:"overlap",esriGeometryRelationPointTouch:"point-touch",esriGeometryRelationTouch:"touch",esriGeometryRelationWithin:"within",esriGeometryRelationRelation:"relation"});var G=n(17452);async function M(e,t,n){const r="string"==typeof e?(0,G.mN)(e):e,o=t[0].spatialReference,i=(0,a.Ji)(t[0]),s={...n,query:{...r.query,f:"json",sr:o.wkid?o.wkid:JSON.stringify(o),geometries:JSON.stringify(c(t))}},{data:u}=await(0,l.default)(r.path+"/simplify",s);return f(u.geometries,i,o)}let P=class extends N.wq{constructor(e){super(e),this.extendHow="default-curve-extension",this.polylines=null,this.trimExtendTo=null}};(0,r._)([(0,o.Cb)({type:String,json:{write:!0}})],P.prototype,"extendHow",void 0),(0,r._)([(0,o.Cb)({type:[T.Z],json:{read:{reader:e=>e?e.map((e=>(0,a.im)(e))):null},write:{writer:(e,t)=>{t.polylines=e.map((e=>e.toJSON()))}}}})],P.prototype,"polylines",void 0),(0,r._)([(0,o.Cb)({json:{read:{reader:e=>e?(0,a.im)(e):null},write:{writer:(e,t)=>{t.trimExtendTo=e.toJSON()}}}})],P.prototype,"trimExtendTo",void 0),P=(0,r._)([(0,s.j)("esri.rest.support.TrimExtendParameters")],P),P.from=(0,i.se)(P);const $=P,H=new d.Xn({0:"default-curve-extension",1:"relocate-ends",2:"keep-end-attributes",4:"no-end-attributes",8:"no-extend-at-from",16:"no-extend-at-to"});async function k(e,t,n){const r=t[0].spatialReference,o=(0,u.en)(e),i={...o.query,f:"json",sr:JSON.stringify(r.toJSON()),geometries:JSON.stringify(c(t))},s=(0,u.lA)(i,n);return(0,l.default)(o.path+"/union",s).then((({data:e})=>(0,a.im)(e.geometry).set({spatialReference:r})))}var Z=n(59633);let F=class extends Z.Z{constructor(e){super(e),this.url=null}areasAndLengths(e,t){return async function(e,t,n){const r=(0,u.en)(e),o={...r.query,f:"json",...t.toJSON()},i=(0,u.lA)(o,n);return(0,l.default)(r.path+"/areasAndLengths",i).then((e=>e.data))}(this.url,e,t)}autoComplete(e,t,n){return m(this.url,e,t,n)}buffer(e,t){return async function(e,t,n){const r=(0,u.en)(e),o={...r.query,f:"json",...t.toJSON()},i=t.outSpatialReference||t.geometries[0].spatialReference,s=(0,u.lA)(o,n);return(0,l.default)(r.path+"/buffer",s).then((e=>(e.data.geometries||[]).map((({rings:e})=>new p.Z({spatialReference:i,rings:e})))))}(this.url,e,t)}convexHull(e,t){return y(this.url,e,t)}cut(e,t,n){return async function(e,t,n,r){const o=(0,u.en)(e),i=t[0].spatialReference,s={...r,query:{...o.query,f:"json",sr:JSON.stringify(i),target:JSON.stringify({geometryType:(0,a.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(n)}},c=await(0,l.default)(o.path+"/cut",s),{cutIndexes:f,geometries:p=[]}=c.data;return{cutIndexes:f,geometries:p.map((e=>{const t=(0,a.im)(e);return t.spatialReference=i,t}))}}(this.url,e,t,n)}densify(e,t){return async function(e,t,n){const r=t.geometries[0].spatialReference,o=(0,u.en)(e),i={...o.query,f:"json",...t.toJSON()},s=(0,u.lA)(i,n);return(0,l.default)(o.path+"/densify",s).then((({data:e})=>(e.geometries||[]).map((e=>(0,a.im)(e).set({spatialReference:r})))))}(this.url,e,t)}difference(e,t,n){return h(this.url,e,t,n)}distance(e,t){return async function(e,t,n){const r=(0,u.en)(e),o={...r.query,f:"json",...t.toJSON()},i=(0,u.lA)(o,n);return(0,l.default)(r.path+"/distance",i).then((({data:e})=>e&&e.distance))}(this.url,e,t)}fromGeoCoordinateString(e,t){return async function(e,t,n){const r={};null!=t.sr&&"object"==typeof t.sr?r.sr=t.sr.wkid||JSON.stringify(t.sr):r.sr=t.sr,r.strings=JSON.stringify(t.strings);const o=t.conversionType||"mgrs";r.conversionType=g.toJSON(o),r.conversionMode=t.conversionMode;const i=(0,u.en)(e),s={...i.query,f:"json",...r},a=(0,u.lA)(s,n);return(0,l.default)(i.path+"/fromGeoCoordinateString",a).then((({data:e})=>e.coordinates))}(this.url,e,t)}generalize(e,t){return async function(e,t,n){const r=(t=_.from(t)).toJSON(),o=function(e){const{geometries:t,deviationUnit:n,maxDeviation:r}=e.toJSON(),o={maxDeviation:r};return t&&t.length&&(o.geometries=JSON.stringify({geometryType:(0,a.Ji)(t[0]),geometries:t}),o.sr=JSON.stringify(t[0].spatialReference)),S.write(n,o,"deviationUnit"),o}(t),i=(0,u.en)(e),s={...i.query,f:"json",...o},c=r.geometries[0].spatialReference,f=(0,u.lA)(s,n);return(0,l.default)(i.path+"/generalize",f).then((({data:e})=>(e.geometries||[]).map((e=>(0,a.im)(e).set({spatialReference:c})))))}(this.url,e,t)}intersect(e,t,n){return I(this.url,e,t,n)}labelPoints(e,t){return function(e,t,n){const r=t.map((e=>e.toJSON())),o=t[0].spatialReference,i=(0,u.en)(e),s={...i.query,f:"json",sr:o.wkid?o.wkid:JSON.stringify(o.toJSON()),polygons:JSON.stringify(r)},c=(0,u.lA)(s,n);return(0,l.default)(i.path+"/labelPoints",c).then((({data:e})=>(e.labelPoints||[]).map((e=>(0,a.im)(e).set({spatialReference:o})))))}(this.url,e,t)}lengths(e,t){return async function(e,t,n){const r=E(t=U.from(t)),o=(0,u.en)(e),i={...o.query,f:"json",...r},s=(0,u.lA)(i,n);return(0,l.default)(o.path+"/lengths",s).then((({data:e})=>e))}(this.url,e,t)}offset(e,t){return async function(e,t,n){const r=function(e){const{geometries:t,bevelRatio:n,offsetDistance:r,offsetHow:o,offsetUnit:i}=e.toJSON(),s={bevelRatio:n,offsetDistance:r};return t&&t.length&&(s.geometries=JSON.stringify({geometryType:(0,a.Ji)(t[0]),geometries:t}),s.sr=JSON.stringify(t[0].spatialReference)),o&&(s.offsetHow=J.toJSON(o)),i&&(s.offsetUnit=C.toJSON(i)),s}(t=w.from(t)),o=(0,u.en)(e),i={...o.query,f:"json",...r},s=t.geometries[0].spatialReference,c=(0,u.lA)(i,n);return(0,l.default)(o.path+"/offset",c).then((({data:e})=>(e.geometries||[]).map((e=>(0,a.im)(e).set({spatialReference:s})))))}(this.url,e,t)}project(e,t){return async function(e,t,n){t=x(t);const r=(0,u.en)(e),o={...r.query,f:"json",...t.toJSON()},i=t.outSpatialReference,s=(0,a.Ji)(t.geometries[0]),c=(0,u.lA)(o,n);return(0,l.default)(r.path+"/project",c).then((({data:{geometries:e}})=>f(e,s,i)))}(this.url,e,t)}relation(e,t){return async function(e,t,n){const r=function(e){const{geometries1:t,geometries2:n,relation:r,relationParameter:o}=e.toJSON(),i={};if(t&&t.length){i.geometries1=JSON.stringify({geometryType:(0,a.Ji)(t[0]),geometries:t});const e=t[0].spatialReference;i.sr=e.wkid?e.wkid:JSON.stringify(e)}return n&&n.length>0&&(i.geometries2=JSON.stringify({geometryType:(0,a.Ji)(n[0]),geometries:n})),r&&(i.relation=D.toJSON(r)),o&&(i.relationParam=o),i}(t=L.from(t)),o=(0,u.en)(e),i={...o.query,f:"json",...r},s=(0,u.lA)(i,n);return(0,l.default)(o.path+"/relation",s).then((({data:e})=>e.relations))}(this.url,e,t)}reshape(e,t,n){return async function(e,t,n,r){const o=t.spatialReference,i=(0,u.en)(e),s={...i.query,f:"json",sr:JSON.stringify(o.toJSON()),target:JSON.stringify({geometryType:(0,a.Ji)(t),geometry:t.toJSON()}),reshaper:JSON.stringify(n.toJSON())},c=(0,u.lA)(s,r);return(0,l.default)(i.path+"/reshape",c).then((({data:e})=>(0,a.im)(e.geometry).set({spatialReference:o})))}(this.url,e,t,n)}simplify(e,t){return M(this.url,e,t)}toGeoCoordinateString(e,t){return async function(e,t,n){const r={};null!=t.sr&&"object"==typeof t.sr?r.sr=t.sr.wkid||JSON.stringify(t.sr):r.sr=t.sr,r.coordinates=JSON.stringify(t.coordinates);const o=t.conversionType||"mgrs";r.conversionType=g.toJSON(o),r.conversionMode=t.conversionMode,r.numOfDigits=t.numOfDigits,r.rounding=t.rounding,r.addSpaces=t.addSpaces;const i=(0,u.en)(e),s={...i.query,f:"json",...r},a=(0,u.lA)(s,n);return(0,l.default)(i.path+"/toGeoCoordinateString",a).then((({data:e})=>e.strings))}(this.url,e,t)}trimExtend(e,t){return async function(e,t,n){const r=function(e){const{extendHow:t,polylines:n,trimExtendTo:r}=e.toJSON(),o={};return o.extendHow=H.toJSON(t),n&&n.length&&(o.polylines=JSON.stringify(n),o.sr=JSON.stringify(n[0].spatialReference)),r&&(o.trimExtendTo=JSON.stringify(r)),o}(t=$.from(t)),o=(0,u.en)(e),i={...o.query,f:"json",...r},s=t.sr,a=(0,u.lA)(i,n);return(0,l.default)(o.path+"/trimExtend",a).then((({data:e})=>(e.geometries||[]).map((({paths:e})=>new T.Z({spatialReference:s,paths:e})))))}(this.url,e,t)}union(e,t){return k(this.url,e,t)}};F.UNIT_METER=9001,F.UNIT_GERMAN_METER=9031,F.UNIT_FOOT=9002,F.UNIT_SURVEY_FOOT=9003,F.UNIT_CLARKE_FOOT=9005,F.UNIT_FATHOM=9014,F.UNIT_NAUTICAL_MILE=9030,F.UNIT_SURVEY_CHAIN=9033,F.UNIT_SURVEY_LINK=9034,F.UNIT_SURVEY_MILE=9035,F.UNIT_KILOMETER=9036,F.UNIT_CLARKE_YARD=9037,F.UNIT_CLARKE_CHAIN=9038,F.UNIT_CLARKE_LINK=9039,F.UNIT_SEARS_YARD=9040,F.UNIT_SEARS_FOOT=9041,F.UNIT_SEARS_CHAIN=9042,F.UNIT_SEARS_LINK=9043,F.UNIT_BENOIT_1895A_YARD=9050,F.UNIT_BENOIT_1895A_FOOT=9051,F.UNIT_BENOIT_1895A_CHAIN=9052,F.UNIT_BENOIT_1895A_LINK=9053,F.UNIT_BENOIT_1895B_YARD=9060,F.UNIT_BENOIT_1895B_FOOT=9061,F.UNIT_BENOIT_1895B_CHAIN=9062,F.UNIT_BENOIT_1895B_LINK=9063,F.UNIT_INDIAN_FOOT=9080,F.UNIT_INDIAN_1937_FOOT=9081,F.UNIT_INDIAN_1962_FOOT=9082,F.UNIT_INDIAN_1975_FOOT=9083,F.UNIT_INDIAN_YARD=9084,F.UNIT_INDIAN_1937_YARD=9085,F.UNIT_INDIAN_1962_YARD=9086,F.UNIT_INDIAN_1975_YARD=9087,F.UNIT_FOOT_1865=9070,F.UNIT_RADIAN=9101,F.UNIT_DEGREE=9102,F.UNIT_ARCMINUTE=9103,F.UNIT_ARCSECOND=9104,F.UNIT_GRAD=9105,F.UNIT_GON=9106,F.UNIT_MICRORADIAN=9109,F.UNIT_ARCMINUTE_CENTESIMAL=9112,F.UNIT_ARCSECOND_CENTESIMAL=9113,F.UNIT_MIL6400=9114,F.UNIT_BRITISH_1936_FOOT=9095,F.UNIT_GOLDCOAST_FOOT=9094,F.UNIT_INTERNATIONAL_CHAIN=109003,F.UNIT_INTERNATIONAL_LINK=109004,F.UNIT_INTERNATIONAL_YARD=109001,F.UNIT_STATUTE_MILE=9093,F.UNIT_SURVEY_YARD=109002,F.UNIT_50KILOMETER_LENGTH=109030,F.UNIT_150KILOMETER_LENGTH=109031,F.UNIT_DECIMETER=109005,F.UNIT_CENTIMETER=109006,F.UNIT_MILLIMETER=109007,F.UNIT_INTERNATIONAL_INCH=109008,F.UNIT_US_SURVEY_INCH=109009,F.UNIT_INTERNATIONAL_ROD=109010,F.UNIT_US_SURVEY_ROD=109011,F.UNIT_US_NAUTICAL_MILE=109012,F.UNIT_UK_NAUTICAL_MILE=109013,F.UNIT_SQUARE_INCHES="esriSquareInches",F.UNIT_SQUARE_FEET="esriSquareFeet",F.UNIT_SQUARE_YARDS="esriSquareYards",F.UNIT_ACRES="esriAcres",F.UNIT_SQUARE_MILES="esriSquareMiles",F.UNIT_SQUARE_MILLIMETERS="esriSquareMillimeters",F.UNIT_SQUARE_CENTIMETERS="esriSquareCentimeters",F.UNIT_SQUARE_DECIMETERS="esriSquareDecimeters",F.UNIT_SQUARE_METERS="esriSquareMeters",F.UNIT_ARES="esriAres",F.UNIT_HECTARES="esriHectares",F.UNIT_SQUARE_KILOMETERS="esriSquareKilometers",(0,r._)([(0,o.Cb)()],F.prototype,"url",void 0),F=(0,r._)([(0,s.j)("esri.tasks.GeometryService")],F);const Y=F},59633:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(43697),o=n(15923),i=n(17452),s=n(5600),l=(n(67676),n(80442),n(75215),n(52011));let u=class extends o.Z{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?(0,i.mN)(e):null}_encode(e,t,n){const r={};for(const o in e){if("declaredClass"===o)continue;const i=e[o];if(null!=i&&"function"!=typeof i)if(Array.isArray(i)){r[o]=[];for(let e=0;e<i.length;e++)r[o][e]=this._encode(i[e])}else if("object"==typeof i)if(i.toJSON){const e=i.toJSON(n&&n[o]);r[o]=t?e:JSON.stringify(e)}else r[o]=t?i:JSON.stringify(i);else r[o]=i}return r}};(0,r._)([(0,s.Cb)({readOnly:!0})],u.prototype,"parsedUrl",null),(0,r._)([(0,s.Cb)()],u.prototype,"requestOptions",void 0),(0,r._)([(0,s.Cb)({type:String})],u.prototype,"url",void 0),u=(0,r._)([(0,l.j)("esri.tasks.Task")],u);const a=u}}]);