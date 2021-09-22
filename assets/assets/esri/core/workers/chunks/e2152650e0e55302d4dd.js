"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8536,3172],{7301:(e,t,r)=>{r.r(t),r.d(t,{registerFunctions:()=>h});var n=r(77286),o=r(61363),s=r(53073),a=r(75148),i=r(95330),l=r(9361),u=r(8667);function c(e){return e instanceof l.Z}function d(e,t,r,d,h){return h(e,t,(function(e,t,h){if(h.length<2)return d(new Error("Missing Parameters"));if(null===(h=(0,o.H)(h))[0]&&null===h[1])return(0,i.DB)(!1);if((0,o.o)(h[0]))return h[1]instanceof l.Z?(0,i.DB)(new s.Z({parentfeatureset:h[0],relation:r,relationGeom:h[1]})):null===h[1]?(0,i.DB)(new a.Z({parentfeatureset:h[0]})):d("Spatial Relation cannot accept this parameter type");if(c(h[0])){if(c(h[1])){let e=null;switch(r){case"esriSpatialRelEnvelopeIntersects":e=(0,u.kK)((0,n.SV)(h[0]),(0,n.SV)(h[1]));break;case"esriSpatialRelIntersects":e=(0,u.kK)(h[0],h[1]);break;case"esriSpatialRelContains":e=(0,u.r3)(h[0],h[1]);break;case"esriSpatialRelOverlaps":e=(0,u.Nm)(h[0],h[1]);break;case"esriSpatialRelWithin":e=(0,u.uh)(h[0],h[1]);break;case"esriSpatialRelTouches":e=(0,u.W4)(h[0],h[1]);break;case"esriSpatialRelCrosses":e=(0,u.jU)(h[0],h[1])}return null!==e?e:(0,i.d1)(new Error("Unrecognised Relationship"))}return(0,o.o)(h[1])?(0,i.DB)(new s.Z({parentfeatureset:h[1],relation:r,relationGeom:h[0]})):null===h[1]?(0,i.DB)(!1):d("Spatial Relation cannot accept this parameter type")}return null!==h[0]?d("Spatial Relation cannot accept this parameter type"):(0,o.o)(h[1])?(0,i.DB)(new a.Z({parentfeatureset:h[1]})):h[1]instanceof l.Z||null===h[1]?(0,i.DB)(!1):void 0}))}function h(e){"async"===e.mode&&(e.functions.intersects=function(t,r){return d(t,r,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(t,r){return d(t,r,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(t,r){return d(t,r,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(t,r){return d(t,r,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(t,r){return d(t,r,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(t,r){return d(t,r,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(t,r){return d(t,r,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,r){return e.standardFunctionAsync(t,r,(function(e,t,r){if(r=(0,o.H)(r),(0,o.p)(r,3,3),c(r[0])&&c(r[1]))return(0,u.LV)(r[0],r[1],(0,o.d)(r[2]));if(r[0]instanceof l.Z&&null===r[1])return!1;if(r[1]instanceof l.Z&&null===r[0])return!1;if((0,o.o)(r[0])&&null===r[1])return new a.Z({parentfeatureset:r[0]});if((0,o.o)(r[1])&&null===r[0])return new a.Z({parentfeatureset:r[1]});if((0,o.o)(r[0])&&r[1]instanceof l.Z)return r[0].relate(r[1],(0,o.d)(r[2]));if((0,o.o)(r[1])&&r[0]instanceof l.Z)return r[1].relate(r[0],(0,o.d)(r[2]));if(null===r[0]&&null===r[1])return!1;throw new Error("Illegal Argument")}))})}},99880:(e,t,r)=>{r.d(t,{V:()=>l});var n=r(68773),o=(r(3172),r(20102)),s=r(92604),a=r(17452);const i=s.Z.getLogger("esri.assets");function l(e){if(!n.Z.assetsPath)throw i.errorOnce("The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50"),new o.Z("assets:path-not-set","config.assetsPath is not set");return(0,a.v_)(n.Z.assetsPath,e)}},2587:(e,t,r)=>{r(90344),r(18848),r(940),r(70171);var n=r(94443),o=r(3172),s=r(20102),a=r(16358),i=r(70586);async function l(e){if((0,i.pC)(u.fetchBundleAsset))return u.fetchBundleAsset(e);const t=await(0,o.default)(e,{responseType:"text"});return JSON.parse(t.data)}const u={};var c,d=r(99880);(0,n.tz)((c={pattern:"esri/",location:d.V},new class{constructor({base:e="",pattern:t,location:r=new URL(window.location.href)}){let n;n="string"==typeof r?e=>new URL(e,new URL(r,a.Z.location)).href:r instanceof URL?e=>new URL(e,r).href:r,this.pattern="string"==typeof t?new RegExp(`^${t}`):t,this.getAssetUrl=n,e=e?e.endsWith("/")?e:e+"/":"",this.matcher=new RegExp(`^${e}(?:(.*)/)?(.*)$`)}fetchMessageBundle(e,t){return async function(e,t,r,o){const a=t.exec(r);if(!a)throw new s.Z("esri-intl:invalid-bundle",`Bundle id "${r}" is not compatible with the pattern "${t}"`);const i=a[1]?`${a[1]}/`:"",u=a[2],c=(0,n.Su)(o),d=`${i}${u}.json`,h=c?`${i}${u}_${c}.json`:d;let m;try{m=await l(e(h))}catch(t){if(h===d)throw new s.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:t});try{m=await l(e(d))}catch(e){throw new s.Z("intl:unknown-bundle",`Bundle "${r}" cannot be loaded`,{error:e})}}return m}(this.getAssetUrl,this.matcher,e,t)}}(c)))},90344:(e,t,r)=>{r.d(t,{Ze:()=>g,p6:()=>y});var n=r(35454),o=r(70171);const s={year:"numeric",month:"numeric",day:"numeric"},a={year:"numeric",month:"long",day:"numeric"},i={year:"numeric",month:"short",day:"numeric"},l={year:"numeric",month:"long",weekday:"long",day:"numeric"},u={hour:"numeric",minute:"numeric"},c={...u,second:"numeric"},d={"short-date":s,"short-date-short-time":{...s,...u},"short-date-short-time-24":{...s,...u,hour12:!1},"short-date-long-time":{...s,...c},"short-date-long-time-24":{...s,...c,hour12:!1},"short-date-le":s,"short-date-le-short-time":{...s,...u},"short-date-le-short-time-24":{...s,...u,hour12:!1},"short-date-le-long-time":{...s,...c},"short-date-le-long-time-24":{...s,...c,hour12:!1},"long-month-day-year":a,"long-month-day-year-short-time":{...a,...u},"long-month-day-year-short-time-24":{...a,...u,hour12:!1},"long-month-day-year-long-time":{...a,...c},"long-month-day-year-long-time-24":{...a,...c,hour12:!1},"day-short-month-year":i,"day-short-month-year-short-time":{...i,...u},"day-short-month-year-short-time-24":{...i,...u,hour12:!1},"day-short-month-year-long-time":{...i,...c},"day-short-month-year-long-time-24":{...i,...c,hour12:!1},"long-date":l,"long-date-short-time":{...l,...u},"long-date-short-time-24":{...l,...u,hour12:!1},"long-date-long-time":{...l,...c},"long-date-long-time-24":{...l,...c,hour12:!1},"long-month-year":{month:"long",year:"numeric"},"short-month-year":{month:"short",year:"numeric"},year:{year:"numeric"},"short-time":u,"long-time":c},h=(0,n.wY)()({shortDate:"short-date",shortDateShortTime:"short-date-short-time",shortDateShortTime24:"short-date-short-time-24",shortDateLongTime:"short-date-long-time",shortDateLongTime24:"short-date-long-time-24",shortDateLE:"short-date-le",shortDateLEShortTime:"short-date-le-short-time",shortDateLEShortTime24:"short-date-le-short-time-24",shortDateLELongTime:"short-date-le-long-time",shortDateLELongTime24:"short-date-le-long-time-24",longMonthDayYear:"long-month-day-year",longMonthDayYearShortTime:"long-month-day-year-short-time",longMonthDayYearShortTime24:"long-month-day-year-short-time-24",longMonthDayYearLongTime:"long-month-day-year-long-time",longMonthDayYearLongTime24:"long-month-day-year-long-time-24",dayShortMonthYear:"day-short-month-year",dayShortMonthYearShortTime:"day-short-month-year-short-time",dayShortMonthYearShortTime24:"day-short-month-year-short-time-24",dayShortMonthYearLongTime:"day-short-month-year-long-time",dayShortMonthYearLongTime24:"day-short-month-year-long-time-24",longDate:"long-date",longDateShortTime:"long-date-short-time",longDateShortTime24:"long-date-short-time-24",longDateLongTime:"long-date-long-time",longDateLongTime24:"long-date-long-time-24",longMonthYear:"long-month-year",shortMonthYear:"short-month-year",year:"year"}),m=(h.apiValues,h.toJSON.bind(h),h.fromJSON.bind(h),{ar:"ar-u-nu-latn-ca-gregory"});let f=new WeakMap,p=d["short-date-short-time"];function g(e){return d[e]||null}function y(e,t){return function(e){const t=e||p;if(!f.has(t)){const e=(0,o.Kd)(),r=m[(0,o.Kd)()]||e;f.set(t,new Intl.DateTimeFormat(r,t))}return f.get(t)}(t).format(e)}(0,o.Ze)((()=>{f=new WeakMap,p=d["short-date-short-time"]}))},94443:(e,t,r)=>{r.d(t,{ME:()=>m,Su:()=>f,tz:()=>h});var n=r(20102),o=r(95330),s=r(70171);const a=/^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,i={ar:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,es:!0,et:!0,fi:!0,fr:!0,he:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,"pt-BR":!0,"pt-PT":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,"zh-CN":!0,"zh-HK":!0,"zh-TW":!0};function l(e){var t;return null!=(t=i[e])&&t}const u=[],c=new Map;function d(e){for(const t of c.keys())p(e.pattern,t)&&c.delete(t)}function h(e){return u.includes(e)||(d(e),u.unshift(e)),{remove(){const t=u.indexOf(e);t>-1&&(u.splice(t,1),d(e))}}}async function m(e){const t=(0,s.Kd)();c.has(e)||c.set(e,async function(e,t){const r=[];for(const n of u)if(p(n.pattern,e))try{return await n.fetchMessageBundle(e,t)}catch(e){r.push(e)}if(r.length)throw new n.Z("intl:message-bundle-error",`Errors occurred while loading "${e}"`,{errors:r});throw new n.Z("intl:no-message-bundle-loader",`No loader found for message bundle "${e}"`)}(e,t));const r=c.get(e);return await g.add(r),r}function f(e){if(!a.test(e))return null;const[,t,r]=a.exec(e),n=t+(r?"-"+r.toUpperCase():"");return l(n)?n:l(t)?t:null}function p(e,t){return"string"==typeof e?t.startsWith(e):e.test(t)}(0,s.Ze)((()=>{c.clear()}));const g=new class{constructor(){this._numLoading=0}async waitForAll(){this._dfd&&await this._dfd.promise}add(e){return this._increase(),e.then((()=>this._decrease()),(()=>this._decrease())),this.waitForAll()}_increase(){this._numLoading++,this._dfd||(this._dfd=(0,o.dD)())}_decrease(){this._numLoading=Math.max(this._numLoading-1,0),this._dfd&&0===this._numLoading&&(this._dfd.resolve(),this._dfd=null)}}},18848:(e,t,r)=>{r.d(t,{sh:()=>l,uf:()=>u});var n=r(70586),o=r(70171);const s={ar:"ar-u-nu-latn"};let a=new WeakMap,i={};function l(e={}){const t={};return null!=e.digitSeparator&&(t.useGrouping=e.digitSeparator),null!=e.places&&(t.minimumFractionDigits=t.maximumFractionDigits=e.places),t}function u(e,t){return function(e){const t=e||i;if(!a.has(t)){const r=(0,o.Kd)(),n=s[(0,o.Kd)()]||r;a.set(t,new Intl.NumberFormat(n,e))}return(0,n.j0)(a.get(t))}(t).format(e)}(0,o.Ze)((()=>{a=new WeakMap,i={}}))},940:(e,t,r)=>{r.d(t,{n:()=>u});var n=r(92604),o=r(78286),s=r(19153),a=r(90344),i=r(18848);const l=n.Z.getLogger("esri.intl");function u(e,t,r={}){const{format:n={}}=r;return(0,s.gx)(e,(e=>function(e,t,r){let n,s;const a=e.indexOf(":");if(-1===a?n=e.trim():(n=e.slice(0,a).trim(),s=e.slice(a+1).trim()),!n)return"";const i=(0,o.hS)(n,t);if(null==i)return"";const l=r[s]||r[n];return l?c(i,l):s?d(i,s):h(i)}(e,t,n)))}function c(e,t){switch(t.type){case"date":return(0,a.p6)(e,t.intlOptions);case"number":return(0,i.uf)(e,t.intlOptions);default:return l.warn("missing format descriptor for key {key}"),h(e)}}function d(e,t){switch(t.toLowerCase()){case"dateformat":return(0,a.p6)(e);case"numberformat":return(0,i.uf)(e);default:return l.warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?(0,a.p6)(e):/^numberformat/i.test(t)?(0,i.uf)(e):h(e)}}function h(e){switch(typeof e){case"string":return e;case"number":return(0,i.uf)(e);case"boolean":return""+e;default:return e instanceof Date?(0,a.p6)(e):""}}},99514:(e,t,r)=>{function n(e){return"date"===e.type||"esriFieldTypeDate"===e.type}r.d(t,{Z:()=>o});class o{constructor(e){if(this.fields=e,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],!e)return;const t=[];for(const r of e){const e=r&&r.name;if(e){const o=s(e);this._fieldsMap.set(e,r),this._fieldsMap.set(o,r),t.push(o),n(r)&&(this.dateFields.push(r),this._dateFieldsSet.add(r))}}t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(s(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name}}function s(e){return e.toLowerCase().trim()}},3172:(e,t,r)=>{r.r(t),r.d(t,{default:()=>f});var n=r(68773),o=r(40330),s=r(20102),a=r(16358),i=r(80442),l=r(22974),u=r(70586),c=r(95330),d=r(17452),h=r(71058),m=r(85958);async function f(e,t){const l=(0,d.HK)(e),m=(0,d.jc)(e);m||l||(e=(0,d.Fv)(e));const w={url:e,requestOptions:{...(0,u.Wg)(t)}};let b=(0,d.oh)(e);if(b){const e=await async function(e,t){if(null!=e.responseData)return e.responseData;if(e.headers&&(t.requestOptions.headers={...t.requestOptions.headers,...e.headers}),e.query&&(t.requestOptions.query={...t.requestOptions.query,...e.query}),e.before){let r,n;try{n=await e.before(t)}catch(e){r=L("request:interceptor",e,t)}if((n instanceof Error||n instanceof s.Z)&&(r=L("request:interceptor",n,t)),r)throw e.error&&e.error(r),r;return n}}(b,w);if(null!=e)return{data:e,getHeader:T,requestOptions:w.requestOptions,url:w.url};b.after||b.error||(b=null)}if(e=w.url,"image"===(t=w.requestOptions).responseType){if((0,i.Z)("host-webworker")||(0,i.Z)("host-node"))throw L("request:invalid-parameters",new Error("responseType 'image' is not supported in Web Workers or Node environment"),w)}else if(l)throw L("request:invalid-parameters",new Error("Data URLs are not supported for responseType = "+t.responseType),w);if("head"===t.method){if(t.body)throw L("request:invalid-parameters",new Error("body parameter cannot be set when method is 'head'"),w);if(l||m)throw L("request:invalid-parameters",new Error("data and blob URLs are not supported for method 'head'"),w)}if(await async function(){(0,i.Z)("host-webworker")?p||(p=await r.e(9884).then(r.bind(r,29884))):f._abortableFetch||(f._abortableFetch=a.Z.fetch.bind(a.Z))}(),p)return p.execute(e,t);const S=(0,c.yi)();(0,c.fu)(t,(()=>S.abort()));const k={controller:S,credential:null,credentialToken:null,fetchOptions:null,hasToken:!1,interceptor:b,params:w,redoRequest:!1,useIdentity:g.useIdentity,useProxy:!1,useSSL:!1,withCredentials:!1},v=await async function(e){var t,r;let s,i;await async function(e){const t=e.params.url,r=e.params.requestOptions,s=e.controller.signal,i=r.body;let l=null,u=null,d=null;if(y&&"HTMLFormElement"in a.Z&&(i instanceof FormData?l=i:i instanceof HTMLFormElement&&(u=i,l=new FormData(u))),"string"==typeof i&&(d=i),e.fetchOptions={cache:r.cacheBust&&!f._abortableFetch.polyfill?"no-cache":"default",credentials:"same-origin",headers:r.headers||{},method:"head"===r.method?"HEAD":"GET",mode:"cors",redirect:"follow",signal:s},(l||d)&&(e.fetchOptions.body=l||d),"anonymous"===r.authMode&&(e.useIdentity=!1),e.hasToken=!!(/token=/i.test(t)||r.query&&r.query.token||l&&l.get&&l.get("token")||u&&u.elements.token),!e.hasToken&&n.Z.apiKey&&(0,h.r)(t)&&(r.query||(r.query={}),r.query.token=n.Z.apiKey,e.hasToken=!0),e.useIdentity&&!e.hasToken&&!e.credentialToken&&!E(t)&&!(0,c.Hc)(s)){let n;"immediate"===r.authMode?(await D(),n=await o.id.getCredential(t,{signal:s}),e.credential=n):"no-prompt"===r.authMode?(await D(),n=await o.id.getCredential(t,{prompt:!1,signal:s}).catch((()=>{})),e.credential=n):o.id&&(n=o.id.findCredential(t)),n&&(e.credentialToken=n.token,e.useSSL=!!n.ssl)}}(e);try{do{[s,i]=await O(e)}while(!await Z(e,s,i))}catch(t){const r=L("request:server",t,e.params,s);throw r.details.ssl=e.useSSL,e.interceptor&&e.interceptor.error&&e.interceptor.error(r),r}const l=e.params.url;if(/\/sharing\/rest\/(accounts|portals)\/self/i.test(l)&&!e.hasToken&&!e.credentialToken&&null!=(t=i)&&null!=(r=t.user)&&r.username&&!(0,d.kl)(l)){const e=(0,d.P$)(l,!0);e&&g.trustedServers.push(e)}const u=e.credential;if(u&&o.id){const e=o.id.findServerInfo(u.server);let t=e&&e.owningSystemUrl;if(t){t=t.replace(/\/?$/,"/sharing");const e=o.id.findCredential(t,u.userId);e&&-1===o.id._getIdenticalSvcIdx(t,e)&&e.resources.unshift(t)}}return{data:i,getHeader:s?e=>s.headers.get(e):T,requestOptions:e.params.requestOptions,ssl:e.useSSL,url:e.params.url}}(k);return b&&b.after&&b.after(v),v}let p;const g=n.Z.request,y="FormData"in a.Z,w=[499,498,403,401],b=["COM_0056","COM_0057","SB_0008"],S=[/\/arcgis\/tokens/i,/\/sharing(\/rest)?\/generatetoken/i,/\/rest\/info/i],T=()=>null,k=Symbol();function v(e){const t=(0,d.P$)(e);return!t||t.endsWith(".arcgis.com")||f._corsServers.includes(t)||(0,d.kl)(t)}function L(e,t,r,n){let o="Error";const a={url:r.url,requestOptions:r.requestOptions,getHeader:T,ssl:!1};if(t instanceof s.Z)return t.details?(t.details=(0,l.d9)(t.details),t.details.url=r.url,t.details.requestOptions=r.requestOptions):t.details=a,t;if(t){const e=n&&(e=>n.headers.get(e)),r=n&&n.status,s=t.message;s&&(o=s),e&&(a.getHeader=e),a.httpStatus=(null!=t.httpCode?t.httpCode:t.code)||r||0,a.subCode=t.subcode,a.messageCode=t.messageCode,"string"==typeof t.details?a.messages=[t.details]:a.messages=t.details,a.raw=k in t?t[k]:t}return(0,c.D_)(t)?(0,c.zE)():new s.Z(e,o,a)}async function D(){o.id||await Promise.all([r.e(7824),r.e(7304),r.e(5472),r.e(9625)]).then(r.bind(r,79339))}function E(e){return S.some((t=>t.test(e)))}async function O(e){let t=e.params.url;const r=e.params.requestOptions,n=e.fetchOptions,s=(0,d.jc)(t)||(0,d.HK)(t),a=r.responseType||"json",l=s?0:null!=r.timeout?r.timeout:g.timeout;let u=!1;if(!s){e.useSSL&&(t=(0,d.hO)(t)),r.cacheBust&&"default"===n.cache&&(t=(0,d.ZN)(t,"request.preventCache",Date.now()));let s={...r.query};e.credentialToken&&(s.token=e.credentialToken);let a=(0,d.B7)(s);(0,i.Z)("esri-url-encodes-apostrophe")&&(a=a.replace(/'/g,"%27"));const l=t.length+1+a.length;let c;u="delete"===r.method||"post"===r.method||"put"===r.method||!!r.body||l>g.maxUrlLength;const h=r.useProxy||!!(0,d.ed)(t);if(h){const e=(0,d.b7)(t);c=e.path,!u&&c.length+1+l>g.maxUrlLength&&(u=!0),e.query&&(s={...e.query,...s})}if("HEAD"===n.method&&(u||h)){if(u){if(l>g.maxUrlLength)throw L("request:invalid-parameters",new Error("URL exceeds maximum length"),e.params);throw L("request:invalid-parameters",new Error("cannot use POST request when method is 'head'"),e.params)}if(h)throw L("request:invalid-parameters",new Error("cannot use proxy when method is 'head'"),e.params)}if(u?(n.method="delete"===r.method?"DELETE":"put"===r.method?"PUT":"POST",r.body?t=(0,d.fl)(t,s):(n.body=(0,d.B7)(s),n.headers["Content-Type"]="application/x-www-form-urlencoded")):t=(0,d.fl)(t,s),h&&(e.useProxy=!0,t=`${c}?${t}`),s.token&&y&&n.body instanceof FormData){const e=n.body;e.set?e.set("token",s.token):e.append("token",s.token)}if(r.hasOwnProperty("withCredentials"))e.withCredentials=r.withCredentials;else if(!(0,d.D6)(t,d.Gd))if((0,d.kl)(t))e.withCredentials=!0;else if(o.id){const r=o.id.findServerInfo(t);r&&r.webTierAuth&&(e.withCredentials=!0)}e.withCredentials&&(n.credentials="include")}let h,m,p=0,w=!1;l>0&&(p=setTimeout((()=>{w=!0,e.controller.abort()}),l));try{if("native-request-init"===r.responseType)m=n,m.url=t;else if("image"!==r.responseType||"default"!==n.cache||"GET"!==n.method||u||function(e){if(e)for(const t of Object.getOwnPropertyNames(e))if(e[t])return!0;return!1}(r.headers)||!s&&!e.useProxy&&g.proxyUrl&&!v(t)){if(h=await f._abortableFetch(t,n),e.useProxy||function(e){const t=(0,d.P$)(e);t&&!f._corsServers.includes(t)&&f._corsServers.push(t)}(t),"native"===r.responseType)m=h;else if("HEAD"!==n.method)if(h.ok){switch(a){case"array-buffer":m=await h.arrayBuffer();break;case"blob":case"image":m=await h.blob();break;default:m=await h.text()}if(p&&(clearTimeout(p),p=0),"json"===a||"xml"===a||"document"===a)if(m)switch(a){case"json":m=JSON.parse(m);break;case"xml":m=q(m,"application/xml");break;case"document":m=q(m,"text/html")}else m=null;if(m){if("array-buffer"===a||"blob"===a){const e=h.headers.get("Content-Type");if(/application\/json|text\/plain/i.test(e)&&m["blob"===a?"size":"byteLength"]<=750)try{const e=await new Response(m).json();e.error&&(m=e)}catch{}}"image"===a&&m instanceof Blob&&(m=await x(URL.createObjectURL(m),e,!0))}}else m=await h.text()}else m=await x(t,e)}catch(n){if("AbortError"===n.name){if(w)throw new Error("Timeout exceeded");throw(0,c.zE)("Request canceled")}if(!(!h&&n instanceof TypeError&&g.proxyUrl)||r.body||"delete"===r.method||"head"===r.method||"post"===r.method||"put"===r.method||e.useProxy||v(t))throw n;e.redoRequest=!0,(0,d.tD)({proxyUrl:g.proxyUrl,urlPrefix:(0,d.P$)(t)})}finally{p&&clearTimeout(p)}return[h,m]}function q(e,t){let r;try{r=(new DOMParser).parseFromString(e,t)}catch{}if(!r||r.getElementsByTagName("parsererror").length)throw new SyntaxError("XML Parse error");return r}async function Z(e,t,r){if(e.redoRequest)return e.redoRequest=!1,!1;const n=e.params.requestOptions;if(!t||"native"===n.responseType||"native-request-init"===n.responseType)return!0;let s,a,i,l;if(!t.ok)throw s=new Error(`Unable to load ${t.url} status: ${t.status}`),s[k]=r,s;null!=r&&r.error&&(s=r.error),s&&(a=Number(s.code),i=s.hasOwnProperty("subcode")?Number(s.subcode):null,l=s.messageCode,l=l&&l.toUpperCase());const u=n.authMode;if(403===a&&(4===i||s.message&&s.message.toLowerCase().indexOf("ssl")>-1&&-1===s.message.toLowerCase().indexOf("permission"))){if(!e.useSSL)return e.useSSL=!0,!1}else if(!e.hasToken&&e.useIdentity&&("no-prompt"!==u||498===a)&&-1!==w.indexOf(a)&&!E(e.params.url)&&(403!==a||-1===b.indexOf(l)&&(null==i||2===i&&e.credentialToken))){await D();try{const t=await o.id.getCredential(e.params.url,{error:L("request:server",s,e.params),prompt:"no-prompt"!==u,signal:e.controller.signal,token:e.credentialToken});return e.credential=t,e.credentialToken=t.token,e.useSSL=e.useSSL||t.ssl,!1}catch(t){if("no-prompt"===u)return e.credential=null,e.credentialToken=null,!1;s=t}}if(s)throw s;return!0}function x(e,t,r=!1){const n=t.controller.signal,o=new Image;return t.withCredentials?o.crossOrigin="use-credentials":o.crossOrigin="anonymous",o.alt="",o.src=e,(0,m.f)(o,e,r,n)}f._abortableFetch=null,f._corsServers=["https://server.arcgisonline.com","https://services.arcgisonline.com"]},71058:(e,t,r)=>{r.d(t,{r:()=>s});var n=r(17452);const o=["elevation3d.arcgis.com","js.arcgis.com","jsdev.arcgis.com","jsqa.arcgis.com","static.arcgis.com"];function s(e){const t=(0,n.P$)(e,!0);return t&&t.endsWith(".arcgis.com")&&!o.includes(t)&&!e.endsWith("/sharing/rest/generateToken")}},85958:(e,t,r)=>{r.d(t,{f:()=>a});var n=r(80442),o=r(70586),s=r(95330);function a(e,t,r=!1,a){return new Promise(((l,u)=>{if((0,s.Hc)(a))return void u(i());let c=()=>{m(),u(new Error(`Unable to load ${t}`))},d=()=>{const t=e;m(),l(t)},h=()=>{if(!e)return;const t=e;m(),t.src="",u(i())};const m=()=>{(0,n.Z)("esri-image-decode")||(e.removeEventListener("error",c),e.removeEventListener("load",d)),c=null,d=null,e=null,(0,o.pC)(a)&&a.removeEventListener("abort",h),h=null,r&&URL.revokeObjectURL(t)};(0,o.pC)(a)&&a.addEventListener("abort",h),(0,n.Z)("esri-image-decode")?e.decode().then(d,c):(e.addEventListener("error",c),e.addEventListener("load",d))}))}function i(){try{return new DOMException("Aborted","AbortError")}catch{const e=new Error;return e.name="AbortError",e}}}}]);