self.webpackChunkRemoteClient([43,194],{189:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(52),i=r(19),n=(r(24),r(34),r(35),r(50));const l=new a.a({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends n.a{constructor(e){super(e),this.description=null,this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.GPMessage")],c);var u=c;t.a=u},262:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));class s{constructor(e={}){this._options=e}toQueryParams(e){if(!e)return null;const t=e.toJSON(),r={};return Object.keys(t).forEach(e=>{const s=this._options[e];if(s){const o="boolean"!=typeof s&&s.name?s.name:e,a="boolean"!=typeof s&&s.getter?s.getter(t):t[e];null!=a&&(r[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(a)?a.join(","):"object"==typeof a?JSON.stringify(a):a)}else r[e]=t[e]},this),r}}function o(e){return new s(e)}},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var s=r(18),o=(r(7),r(9)),a=r(1),i=(r(3),r(4),r(20),r(19)),n=r(14),l=r(24),c=(r(34),r(35),r(51)),u=r(96);const p=e=>{let t=class extends e{async getServiceDescription(){return this._serviceDescriptionPromise||(this._serviceDescriptionPromise=this._fetchServiceDescription()),this._serviceDescriptionPromise}async _fetchServiceDescription(){if(!this.url||!this.parsedUrl)throw new n.a("network-service:missing-url","Url to Network service is missing");const e=this.url,{data:t}=await Object(c.default)(e,{query:{f:"json"}});t.supportedTravelModes||(t.supportedTravelModes=[]);for(let e=0;e<t.supportedTravelModes.length;e++)t.supportedTravelModes[e].id||(t.supportedTravelModes[e].id=t.supportedTravelModes[e].itemId);const r=t.currentVersion>=10.4?async function(e){try{const{data:{supportedTravelModes:t,defaultTravelMode:r}}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"retrieveTravelModes",{query:{f:"json"}});return{supportedTravelModes:t,defaultTravelMode:r}}catch(e){throw new n.a("network-service:retrieveTravelModes","Could not get to the NAServer's retrieveTravelModes.",{error:e})}}(e):async function(e){const{data:t}=await Object(c.default)(e.substring(0,e.indexOf("/rest/")+6)+"info",{query:{f:"json"}});if(!t||!t.owningSystemUrl)return{supportedTravelModes:[],defaultTravelMode:null};e=t.owningSystemUrl;const{data:r}=await Object(c.default)(e+("/"===e[e.length-1]?"":"/")+"sharing/rest/portals/self",{query:{f:"json"}}),s=Object(o.b)("helperServices.routingUtilities.url",r);if(!s)return{supportedTravelModes:[],defaultTravelMode:null};const a=Object(l.H)(e),i=/\/solveClosestFacility$/.test(a.path)?"Route":/\/solveClosestFacility$/.test(a.path)?"ClosestFacility":"ServiceAreas",n=await Object(c.default)(s+("/"===s[s.length-1]?"":"/")+"GetTravelModes/execute",{query:{f:"json",serviceName:i}}),u=[];let p=null;if(n&&n.data&&n.data.results&&n.data.results.length){const e=n.data.results;for(const t of e)if("supportedTravelModes"===t.paramName){if(t.value&&t.value.features)for(const{attributes:e}of t.value.features)if(e){const t=JSON.parse(e.TravelMode);u.push(t)}}else"defaultTravelMode"===t.paramName&&(p=t.value)}return{supportedTravelModes:u,defaultTravelMode:p}}(e),{defaultTravelMode:s,supportedTravelModes:a}=await r;return t.defaultTravelMode=s,t.supportedTravelModes=a,t}_isInputGeometryZAware(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)if(Object(a.g)(e)&&e.hasZ)return!0}return!1}_dropZValuesOffInputGeometry(e,t){for(let r=0;r<t.length;r++){const s=e[t[r]];if(s&&s.length)for(const e of s)e.z=void 0}console.log("The remote Network Analysis service is powered by a network dataset which is not Z-aware.\nZ-coordinates of the input geometry are ignored.")}};return t=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],t),t};let d=class extends(p(u.a)){};d=Object(s.a)([Object(i.a)("esri.tasks.mixins.NAServiceDescription")],d)},264:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(52),i=r(19),n=(r(24),r(34),r(35),r(189));const l=new a.a({0:"informative",1:"process-definition",2:"process-start",3:"process-stop",50:"warning",100:"error",101:"empty",200:"abort"});let c=class extends n.a{constructor(e){super(e),this.type=null}};Object(s.a)([Object(o.b)({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(s.a)([Object(i.a)("esri.tasks.support.NAMessage")],c);var u=c;t.a=u},677:function(e,t,r){"use strict";r.r(t);var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(19),i=(r(24),r(34),r(35),r(2)),n=r(51),l=r(175),c=r(96),u=r(262),p=r(263),d=r(1),f=r(53),y=r(50),b=r(55),v=r(60),O=r(82),j=r(78),h=r(59),g=(r(58),r(94)),m=r(264);function M(e){return e.features.map(t=>{const r=b.a.fromJSON(e.spatialReference),s=g.a.fromJSON(t);return Object(d.m)(s.geometry).spatialReference=r,s})}function T(e){return e.features.map(t=>(t.geometry.spatialReference=e.spatialReference,Object(h.a)(t.geometry)))}let S=class extends y.a{constructor(e){super(e),this.facilities=null,this.messages=null,this.pointBarriers=null,this.polylineBarriers=null,this.polygonBarriers=null,this.serviceAreaPolylines=null,this.serviceAreaPolygons=null}readFacilities(e){return T(e)}readPointBarriers(e,t){return T(t.barriers)}readPolylineBarriers(e){return T(e)}readPolygonBarriers(e){return T(e)}readIncidents(e,t){return M(t.saPolylines)}readServiceAreaPolygons(e,t){return M(t.saPolygons)}};Object(s.a)([Object(o.b)({type:[v.a]})],S.prototype,"facilities",void 0),Object(s.a)([Object(f.a)("facilities")],S.prototype,"readFacilities",null),Object(s.a)([Object(o.b)({type:[m.a]})],S.prototype,"messages",void 0),Object(s.a)([Object(o.b)({type:[v.a]})],S.prototype,"pointBarriers",void 0),Object(s.a)([Object(f.a)("pointBarriers",["barriers"])],S.prototype,"readPointBarriers",null),Object(s.a)([Object(o.b)({type:[j.a]})],S.prototype,"polylineBarriers",void 0),Object(s.a)([Object(f.a)("polylineBarriers")],S.prototype,"readPolylineBarriers",null),Object(s.a)([Object(o.b)({type:[O.a]})],S.prototype,"polygonBarriers",void 0),Object(s.a)([Object(f.a)("polygonBarriers")],S.prototype,"readPolygonBarriers",null),Object(s.a)([Object(o.b)({type:[g.a]})],S.prototype,"serviceAreaPolylines",void 0),Object(s.a)([Object(f.a)("serviceAreaPolylines",["saPolylines"])],S.prototype,"readIncidents",null),Object(s.a)([Object(o.b)({type:[g.a]})],S.prototype,"serviceAreaPolygons",void 0),Object(s.a)([Object(f.a)("serviceAreaPolygons",["saPolygons"])],S.prototype,"readServiceAreaPolygons",null),S=Object(s.a)([Object(a.a)("esri.tasks.support.ServiceAreaSolveResult")],S);var w=S;const B=Object(u.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:e=>e.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});let A=class extends(Object(p.a)(c.a)){constructor(e){super(e),this.url=null}solve(e,t){const r=[],s=[],o={},a={};return e.facilities&&e.facilities.features&&this._collectGeometries(e.facilities.features,s,"facilities.features",o),e.pointBarriers&&e.pointBarriers.features&&this._collectGeometries(e.pointBarriers.features,s,"pointBarriers.features",o),e.polylineBarriers&&e.polylineBarriers.features&&this._collectGeometries(e.polylineBarriers.features,s,"polylineBarriers.features",o),e.polygonBarriers&&e.polygonBarriers.features&&this._collectGeometries(e.polygonBarriers.features,s,"polygonBarriers.features",o),Object(l.a)(s).then(e=>{for(const t in o){const s=o[t];r.push(t),a[t]=e.slice(s[0],s[1])}return this._isInputGeometryZAware(a,r)?this.getServiceDescription():Object(i.s)({dontCheck:!0})}).then(s=>{("dontCheck"in s?s.dontCheck:s.hasZ)||this._dropZValuesOffInputGeometry(a,r);for(const t in a)a[t].forEach((r,s)=>{e.get(t)[s].geometry=r});let o={query:{...this.parsedUrl.query,f:"json",...B.toQueryParams(e)}};return(this.requestOptions||t)&&(o={...this.requestOptions,...t,...o}),Object(n.default)(this.parsedUrl.path+"/solveServiceArea",o)}).then(e=>w.fromJSON(e.data))}_collectGeometries(e,t,r,s){s[r]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}};Object(s.a)([Object(o.b)()],A.prototype,"url",void 0),A=Object(s.a)([Object(a.a)("esri.tasks.ServiceAreaTask")],A);var P=A;t.default=P},96:function(e,t,r){"use strict";var s=r(18),o=(r(7),r(3),r(4),r(20)),a=r(19),i=r(24),n=(r(34),r(35),r(25));let l=class extends n.a{constructor(...e){super(...e),this.requestOptions=null,this.url=null}normalizeCtorArgs(e,t){return"string"!=typeof e?e:{url:e,...t}}get parsedUrl(){return this._parseUrl(this.url)}_parseUrl(e){return e?Object(i.H)(e):null}_encode(e,t,r){const s={};for(const o in e){if("declaredClass"===o)continue;const a=e[o];if(null!=a&&"function"!=typeof a)if(Array.isArray(a)){s[o]=[];for(let e=0;e<a.length;e++)s[o][e]=this._encode(a[e])}else if("object"==typeof a)if(a.toJSON){const e=a.toJSON(r&&r[o]);s[o]=t?e:JSON.stringify(e)}else s[o]=t?a:JSON.stringify(a);else s[o]=a}return s}};Object(s.a)([Object(o.b)({readOnly:!0,dependsOn:["url"]})],l.prototype,"parsedUrl",null),Object(s.a)([Object(o.b)()],l.prototype,"requestOptions",void 0),Object(s.a)([Object(o.b)({type:String})],l.prototype,"url",void 0),l=Object(s.a)([Object(a.a)("esri.tasks.Task")],l);var c=l;t.a=c}});