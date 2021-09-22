"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[5172],{84552:(e,t,r)=>{r.d(t,{Z:()=>c});var i,s=r(43697),n=r(10736),o=r(35463),a=r(5600),l=(r(80442),r(75215),r(92604),r(52525)),u=r(78981);let p=i=class extends n.wq{constructor(e){super(e),this.value=0,this.unit="milliseconds"}toMilliseconds(){return(0,o.rJ)(this.value,this.unit,"milliseconds")}clone(){return new i({value:this.value,unit:this.unit})}};(0,s._)([(0,a.Cb)({type:Number,json:{write:!0},nonNullable:!0})],p.prototype,"value",void 0),(0,s._)([(0,a.Cb)({type:u.v.apiValues,json:{type:u.v.jsonValues,read:u.v.read,write:u.v.write},nonNullable:!0})],p.prototype,"unit",void 0),p=i=(0,s._)([(0,l.j)("esri.TimeInterval")],p);var c=p},61247:(e,t,r)=>{r.d(t,{Z:()=>p});var i=r(43697),s=r(18855),n=r(81049),o=r(70586),a=r(5600),l=r(52525);let u=class extends s.Z{constructor(e){super(e),this._groups=new Map}destroy(){this.removeAll()}get size(){let e=0;return this._groups.forEach((t=>{e+=t.length})),e}add(e,t){if(!this._isHandle(e)&&!Array.isArray(e)&&!n.Z.isCollection(e))return this;const r=this._getOrCreateGroup(t);return Array.isArray(e)||n.Z.isCollection(e)?e.forEach((e=>this._isHandle(e)&&r.push(e))):r.push(e),this.notifyChange("size"),this}forEach(e,t){if("function"==typeof e)this._groups.forEach((t=>t.forEach(e)));else{const r=this._getGroup(e);r&&t&&r.forEach(t)}}has(e){return this._groups.has(this._ensureGroupKey(e))}remove(e){if(Array.isArray(e)||n.Z.isCollection(e))return e.forEach(this.remove,this),this;if(!this.has(e))return this;const t=this._getGroup(e);for(let e=0;e<t.length;e++)t[e].remove();return this._deleteGroup(e),this.notifyChange("size"),this}removeAll(){return this._groups.forEach((e=>{for(let t=0;t<e.length;t++)e[t].remove()})),this._groups.clear(),this.notifyChange("size"),this}_isHandle(e){return e&&!!e.remove}_getOrCreateGroup(e){if(this.has(e))return this._getGroup(e);const t=[];return this._groups.set(this._ensureGroupKey(e),t),t}_getGroup(e){return(0,o.j0)(this._groups.get(this._ensureGroupKey(e)))}_deleteGroup(e){return this._groups.delete(this._ensureGroupKey(e))}_ensureGroupKey(e){return e||"_default_"}};(0,i._)([(0,a.Cb)({readOnly:!0})],u.prototype,"size",null),u=(0,i._)([(0,l.j)("esri.core.Handles")],u);var p=u},68668:(e,t,r)=>{r.d(t,{GZ:()=>a,wF:()=>l});var i=r(66643),s=r(81049),n=r(83379),o=r(70586);async function a(e,t){return await e.load(),l(e,t)}async function l(e,t){const r=[],a=(...e)=>{for(const t of e)(0,o.Wi)(t)||(Array.isArray(t)?a(...t):s.Z.isCollection(t)?t.forEach((e=>a(e))):n.Z.isLoadable(t)&&r.push(t))};t(a);let l=null;if(await(0,i.UI)(r,(async e=>{!1!==(await(0,i.q6)(function(e){return"loadAll"in e&&"function"==typeof e.loadAll}(e)?e.loadAll():e.load())).ok||l||(l=e)})),l)throw l.loadError;return e}},43050:(e,t,r)=>{r.d(t,{S1:()=>o,on:()=>c,OY:()=>p,cm:()=>l,N1:()=>a,LR:()=>u,tH:()=>y});var i=r(91460),s=(r(22974),r(95330));const n=/\?(\.|$)/g;function o(e,t,r,i){const s=Array.isArray(t)?t:t.indexOf(",")>-1?t.split(","):[t],o=function(e,t,r,i){return e.watch(t,r,i)}(e,t,r,i);for(const t of s){const i=t.trim().replace(n,"$1"),s=e.get(i);r.call(e,s,s,i,e)}return o}function a(e,t,r,i){return y(e,t,d,r,i)}function l(e,t,r,i){return y(e,t,h,r,i)}function u(e,t,r,i){return y(e,t,m,r,i)}function p(e,t,r,i){return y(e,t,f,r,i)}function c(e,t,r,s,n,a,l){const u={};function p(t){const i=u[t];i&&(a&&a(i.target,t,e,r),i.handle.remove(),delete u[t])}const c=o(e,t,((t,o,a)=>{p(a),(0,i.vT)(t)&&(u[a]={handle:(0,i.on)(t,r,s),target:t},n&&n(t,a,e,r))}),l);return{remove(){c.remove();for(const e in u)p(e)}}}function y(e,t,r,i,n){const o="function"==typeof i?i:null,a="object"==typeof i?i:null;"boolean"==typeof i&&(n=i);let l,u=!1;function p(){l&&(l.remove(),l=null)}const c=(0,s.dD)();(0,s.fu)(a,(()=>{p(),c.reject((0,s.zE)())}));const y={then:c.promise.then.bind(c.promise),catch:c.promise.catch.bind(c.promise),remove:p};return Object.freeze(y),l=function(e,t,r,i,s){const n=e.watch(t,((t,s,n,o)=>{r&&!r(t)||null==i||i.call(e,t,s,n,o)}),s);if(Array.isArray(t))for(const s of t){const n=e.get(s);r&&r(n)&&(null==i||i.call(e,n,n,t,e))}else{const s=e.get(t);r&&r(s)&&(null==i||i.call(e,s,s,t,e))}return n}(e,t,r,((t,r,i,s)=>{u=!0,p(),o&&o.call(e,t,r,i,s),c.resolve({value:t,oldValue:r,propertyName:i,target:s})}),n),u&&p(),y}function d(e){return!!e}function h(e){return!e}function m(e){return!0===e}function f(e){return!1===e}},91040:(e,t,r)=>{r.d(t,{yZ:()=>s});var i=r(67900);function s(e,t){const r=t||e.extent,s=e.width,n=(0,i.c9)(r&&r.spatialReference);return r&&s?r.width/s*n*i.hd*96:0}},75823:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var i=r(43697),s=r(3172),n=r(92835),o=r(20102),a=r(3920),l=r(68668),u=r(70586),p=r(16453),c=r(95330),y=r(5600),d=(r(80442),r(75215)),h=(r(92604),r(71715)),m=r(52525),f=r(30556),v=r(31263),g=r(6570),b=r(91040),w=r(29600),_=r(54295),x=r(7944),S=r(17287),C=r(78096),O=r(17017),I=r(38009),T=r(16859),E=r(34760),j=r(72965),D=r(10343),L=r(28294),N=r(21506),U=r(18855),F=r(32073),Z=r(410);const A={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let M=class extends((0,a.p)(U.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,Z.ff)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,F.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(A[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){var e;const t=!(null==(e=this.floors)||!e.length),r=this.visibleSublayers.filter((e=>null!=e.definitionExpression||t&&null!=e.floorInfo));return r.length?JSON.stringify(r.reduce(((e,t)=>{const r=(0,Z.ff)(this.floors,t),i=(0,u.pC)(r)?(0,Z.Hp)(r,t):t.definitionExpression;return e[t.id]=i,e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const i=this.scale,s=0===i,n=0===t.minScale||i<=t.minScale,o=0===t.maxScale||i>=t.maxScale;t.visible&&(s||n&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"dynamicLayers",null),(0,i._)([(0,y.Cb)()],M.prototype,"floors",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"hasDynamicLayers",null),(0,i._)([(0,y.Cb)()],M.prototype,"layer",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"layers",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"layerDefs",null),(0,i._)([(0,y.Cb)({type:Number})],M.prototype,"scale",void 0),(0,i._)([(0,y.Cb)(N.qG)],M.prototype,"timeExtent",void 0),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"version",null),(0,i._)([(0,y.Cb)({readOnly:!0})],M.prototype,"visibleSublayers",null),M=(0,i._)([(0,m.j)("esri.layers.mixins.ExportImageParameters")],M);var R=r(49867);let G=class extends((0,C.h)((0,L.n)((0,j.M)((0,D.x)((0,x.O)((0,S.Y)((0,I.q)((0,T.I)((0,p.R)((0,E.Q)((0,_.V)((0,O.N)((0,a.p)(w.Z)))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,u.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(c.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const s=e.slice().reverse().flatten((({sublayers:e})=>e&&e.toArray().reverse())).toArray();let n=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,v.M9)(i.origin);if(3===e){const e=this.createSublayersForOrigin("service").sublayers;n=(0,F.QV)(s,e,2)}else if(e>3){const e=this.createSublayersForOrigin("portal-item");n=(0,F.QV)(s,e.sublayers,(0,v.M9)(e.origin))}}const o=[],a={writeSublayerStructure:n,...i};let l=n;s.forEach((e=>{const t=e.write({},a);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=s.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,i){const s=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const n=new M({layer:this,floors:null==i?void 0:i.floors,scale:(0,b.yZ)({extent:e,width:t})*s}),o=n.toJSON();n.destroy();const a=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},l=e&&e.spatialReference,u=l.wkid||JSON.stringify(l.toJSON());o.dpi*=s;const p={};if(null!=i&&i.timeExtent){const{start:e,end:t}=i.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${null==e?"null":e},${null==t?"null":t}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:u,imageSR:u,size:t+","+r,...o,...a,...p}}async fetchImage(e,t,r,i){var n;const a={responseType:"image",signal:null!=(n=null==i?void 0:i.signal)?n:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(e,t,r,i),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";return null==a.query.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(0,s.default)(l,a).then((e=>e.data)).catch((e=>{if((0,c.D_)(e))throw e;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:e})})):Promise.reject(new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query}))}async fetchRecomputedExtents(e={}){const t={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:r}=await(0,s.default)(this.url,t),{extent:i,fullExtent:o,timeExtent:a}=r,l=i||o;return{fullExtent:l&&g.Z.fromJSON(l),timeExtent:a&&n.Z.fromJSON({start:a[0],end:a[1]})}}loadAll(){return(0,l.GZ)(this,(e=>{e(this.allSublayers)}))}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,s.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,i._)([(0,y.Cb)({type:Boolean})],G.prototype,"datesInUnknownTimezone",void 0),(0,i._)([(0,y.Cb)()],G.prototype,"dpi",void 0),(0,i._)([(0,y.Cb)()],G.prototype,"gdbVersion",void 0),(0,i._)([(0,y.Cb)()],G.prototype,"imageFormat",void 0),(0,i._)([(0,h.r)("imageFormat",["supportedImageFormatTypes"])],G.prototype,"readImageFormat",null),(0,i._)([(0,y.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],G.prototype,"imageMaxHeight",void 0),(0,i._)([(0,y.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],G.prototype,"imageMaxWidth",void 0),(0,i._)([(0,y.Cb)()],G.prototype,"imageTransparency",void 0),(0,i._)([(0,y.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],G.prototype,"isReference",void 0),(0,i._)([(0,y.Cb)({json:{read:!1,write:!1}})],G.prototype,"labelsVisible",void 0),(0,i._)([(0,y.Cb)({type:["ArcGISMapServiceLayer"]})],G.prototype,"operationalLayerType",void 0),(0,i._)([(0,y.Cb)({json:{read:!1,write:!1}})],G.prototype,"popupEnabled",void 0),(0,i._)([(0,y.Cb)()],G.prototype,"sourceJSON",void 0),(0,i._)([(0,y.Cb)({json:{write:{ignoreOrigin:!0}}})],G.prototype,"sublayers",void 0),(0,i._)([(0,f.c)("sublayers",{layers:{type:[R.Z]},visibleLayers:{type:[d.z8]}})],G.prototype,"writeSublayers",null),(0,i._)([(0,y.Cb)({type:["show","hide","hide-children"]})],G.prototype,"listMode",void 0),(0,i._)([(0,y.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],G.prototype,"type",void 0),(0,i._)([(0,y.Cb)(N.HQ)],G.prototype,"url",void 0),G=(0,i._)([(0,m.j)("esri.layers.MapImageLayer")],G);var P=G},28294:(e,t,r)=>{r.d(t,{n:()=>y});var i=r(43697),s=r(92835),n=r(84552),o=r(5600),a=(r(80442),r(75215),r(92604),r(71715)),l=r(52525),u=r(30547),p=r(69165),c=r(78981);const y=e=>{let t=class extends e{constructor(){super(...arguments),this.timeExtent=null,this.timeOffset=null,this.useViewTime=!0}readOffset(e,t){const r=t.timeInfo.exportOptions;if(!r)return null;const i=r.timeOffset,s=c.v.fromJSON(r.timeOffsetUnits);return i&&s?new n.Z({value:i,unit:s}):null}set timeInfo(e){(0,p.UF)(e,this.fieldsIndex),this._set("timeInfo",e)}};return(0,i._)([(0,o.Cb)({type:s.Z,json:{write:!1}})],t.prototype,"timeExtent",void 0),(0,i._)([(0,o.Cb)({type:n.Z})],t.prototype,"timeOffset",void 0),(0,i._)([(0,a.r)("service","timeOffset",["timeInfo.exportOptions"])],t.prototype,"readOffset",null),(0,i._)([(0,o.Cb)({value:null,type:u.Z,json:{write:!0,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"timeInfo",null),(0,i._)([(0,o.Cb)({type:Boolean,json:{read:{source:"timeAnimation"},write:{target:"timeAnimation"},origins:{"web-scene":{read:!1,write:!1}}}})],t.prototype,"useViewTime",void 0),t=(0,i._)([(0,l.j)("esri.layers.mixins.TemporalLayer")],t),t}},30547:(e,t,r)=>{r.d(t,{Z:()=>b});var i,s=r(43697),n=r(92835),o=r(84552),a=r(10736),l=r(22974),u=r(70586),p=r(5600),c=(r(75215),r(80442),r(92604),r(71715)),y=r(52525),d=r(30556);let h=i=class extends a.wq{constructor(e){super(e),this.respectsDaylightSaving=!1,this.timezone=null}readRespectsDaylightSaving(e,t){return void 0!==t.respectsDaylightSaving?t.respectsDaylightSaving:void 0!==t.respectDaylightSaving&&t.respectDaylightSaving}clone(){const{respectsDaylightSaving:e,timezone:t}=this;return new i({respectsDaylightSaving:e,timezone:t})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],h.prototype,"respectsDaylightSaving",void 0),(0,s._)([(0,c.r)("respectsDaylightSaving",["respectsDaylightSaving","respectDaylightSaving"])],h.prototype,"readRespectsDaylightSaving",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"timeZone"},write:{target:"timeZone"}}})],h.prototype,"timezone",void 0),h=i=(0,s._)([(0,y.j)("esri.layers.support.TimeReference")],h);var m,f=h,v=r(78981);let g=m=class extends a.wq{constructor(e){super(e),this.cumulative=!1,this.endField=null,this.fullTimeExtent=null,this.hasLiveData=!1,this.interval=null,this.startField=null,this.timeReference=null,this.trackIdField=null,this.useTime=!0}readFullTimeExtent(e,t){if(!t.timeExtent||!Array.isArray(t.timeExtent)||2!==t.timeExtent.length)return null;const r=new Date(t.timeExtent[0]),i=new Date(t.timeExtent[1]);return new n.Z({start:r,end:i})}writeFullTimeExtent(e,t){e&&(0,u.pC)(e.start)&&(0,u.pC)(e.end)?t.timeExtent=[e.start.getTime(),e.end.getTime()]:t.timeExtent=null}readInterval(e,t){return t.timeInterval&&t.timeIntervalUnits?new o.Z({value:t.timeInterval,unit:v.v.fromJSON(t.timeIntervalUnits)}):t.defaultTimeInterval&&t.defaultTimeIntervalUnits?new o.Z({value:t.defaultTimeInterval,unit:v.v.fromJSON(t.defaultTimeIntervalUnits)}):null}writeInterval(e,t){if(e){const r=e.toJSON();t.timeInterval=r.value,t.timeIntervalUnits=r.unit}else t.timeInterval=null,t.timeIntervalUnits=null}clone(){const{cumulative:e,endField:t,hasLiveData:r,interval:i,startField:s,timeReference:n,fullTimeExtent:o,trackIdField:a,useTime:u}=this;return new m({cumulative:e,endField:t,hasLiveData:r,interval:i,startField:s,timeReference:(0,l.d9)(n),fullTimeExtent:(0,l.d9)(o),trackIdField:a,useTime:u})}};(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.timeDataCumulative"},write:{target:"exportOptions.timeDataCumulative"}}})],g.prototype,"cumulative",void 0),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"endTimeField"},write:{target:"endTimeField",allowNull:!0}}})],g.prototype,"endField",void 0),(0,s._)([(0,p.Cb)({type:n.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"fullTimeExtent",void 0),(0,s._)([(0,c.r)("fullTimeExtent",["timeExtent"])],g.prototype,"readFullTimeExtent",null),(0,s._)([(0,d.c)("fullTimeExtent")],g.prototype,"writeFullTimeExtent",null),(0,s._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],g.prototype,"hasLiveData",void 0),(0,s._)([(0,p.Cb)({type:o.Z,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"interval",void 0),(0,s._)([(0,c.r)("interval",["timeInterval","timeIntervalUnits","defaultTimeInterval","defaultTimeIntervalUnits"])],g.prototype,"readInterval",null),(0,s._)([(0,d.c)("interval")],g.prototype,"writeInterval",null),(0,s._)([(0,p.Cb)({type:String,json:{read:{source:"startTimeField"},write:{target:"startTimeField",allowNull:!0}}})],g.prototype,"startField",void 0),(0,s._)([(0,p.Cb)({type:f,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"timeReference",void 0),(0,s._)([(0,p.Cb)({type:String,json:{write:{enabled:!0,allowNull:!0}}})],g.prototype,"trackIdField",void 0),(0,s._)([(0,p.Cb)({type:Boolean,json:{read:{source:"exportOptions.useTime"},write:{target:"exportOptions.useTime"}}})],g.prototype,"useTime",void 0),g=m=(0,s._)([(0,y.j)("esri.layers.support.TimeInfo")],g);var b=g},66677:(e,t,r)=>{r.d(t,{ld:()=>h,B5:()=>c,M8:()=>f,G:()=>w,Qc:()=>y,DR:()=>d,Nm:()=>v,XG:()=>g,a7:()=>m,wH:()=>b});var i=r(70586),s=r(17452),n=r(25929);const o={mapserver:"MapServer",imageserver:"ImageServer",featureserver:"FeatureServer",sceneserver:"SceneServer",streamserver:"StreamServer",vectortileserver:"VectorTileServer"},a=Object.values(o),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${a.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),p=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function c(e){return!!l.test(e)}function y(e){const t=(0,s.mN)(e),r=t.path.match(l)||t.path.match(u);if(!r)return null;const[,i,n,a,p]=r,c=n.indexOf("/");return{title:h(-1!==c?n.slice(c+1):n),serverType:o[a.toLowerCase()],sublayer:null!=p&&""!==p?parseInt(p,10):null,url:{path:i}}}function d(e){const t=(0,s.mN)(e).path.match(p);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function h(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function m(e,t){const r=[];if(e){const t=y(e);(0,i.pC)(t)&&t.title&&r.push(t.title)}if(t){const e=h(t);r.push(e)}if(2===r.length){if(-1!==r[0].toLowerCase().indexOf(r[1].toLowerCase()))return r[0];if(-1!==r[1].toLowerCase().indexOf(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function f(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),r=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&r}function v(e,t){return e?(0,s.Qj)((0,s.Hu)(e,t)):e}function g(e){let{url:t}=e;if(!t)return{url:t};t=(0,s.Hu)(t,e.logger);const r=(0,s.mN)(t),n=y(r.path);let o;if((0,i.pC)(n))null!=n.sublayer&&null==e.layer.layerId&&(o=n.sublayer),t=n.url.path;else if(e.nonStandardUrlAllowed){const e=d(r.path);(0,i.pC)(e)&&(t=e.serviceUrl,o=e.sublayerId)}return{url:(0,s.Qj)(t),layerId:o}}function b(e,t,r,i,o){(0,n.w)(t,i,"url",o),i.url&&null!=e.layerId&&(i.url=(0,s.v_)(i.url,r,e.layerId.toString()))}function w(e){if(!e)return!1;const t=e.toLowerCase(),r=-1!==t.indexOf("/services/"),i=-1!==t.indexOf("/mapserver/wmsserver"),s=-1!==t.indexOf("/imageserver/wmsserver"),n=-1!==t.indexOf("/wmsserver");return r&&(i||s||n)}},78981:(e,t,r)=>{r.d(t,{v:()=>i});const i=(0,r(35454).wY)()({esriTimeUnitsMilliseconds:"milliseconds",esriTimeUnitsSeconds:"seconds",esriTimeUnitsMinutes:"minutes",esriTimeUnitsHours:"hours",esriTimeUnitsDays:"days",esriTimeUnitsWeeks:"weeks",esriTimeUnitsMonths:"months",esriTimeUnitsYears:"years",esriTimeUnitsDecades:"decades",esriTimeUnitsCenturies:"centuries",esriTimeUnitsUnknown:void 0})}}]);