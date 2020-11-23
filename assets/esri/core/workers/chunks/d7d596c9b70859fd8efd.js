self.webpackChunkRemoteClient([9],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return c}));var i=r(18),a=r(20),s=r(19),n=r(25),l=r(79),o=r(243);const c=e=>{let t=class extends e{destroy(){this.destroyed||(this.handles.destroy(),this.updatingHandles.destroy())}get handles(){return this._get("handles")||new l.a}get updatingHandles(){return this._get("updatingHandles")||new o.a}};return Object(i.a)([Object(a.b)({readOnly:!0})],t.prototype,"handles",null),Object(i.a)([Object(a.b)({readOnly:!0})],t.prototype,"updatingHandles",null),t=Object(i.a)([Object(s.a)("esri.core.HandleOwner")],t),t};let d=class extends(c(n.a)){};d=Object(i.a)([Object(s.a)("esri.core.HandleOwner")],d)},170:function(e,t,r){"use strict";var i=r(18),a=r(20),s=r(19),n=r(62),l=r(79);let o=class extends n.a{constructor(e){super(e),this._handles=new l.a,this.root=null}initialize(){this._handles.add(this.rootCollectionNames.map(e=>this.watch("root."+e,()=>this.updateCollections(),!0))),this.updateCollections()}destroy(){this.root=null,this.refresh(),this._handles.destroy(),this._handles=null}updateCollections(){this._collections=this.rootCollectionNames.map(e=>this.get("root."+e)).filter(e=>null!=e),this.refresh()}refresh(){const e=this._handles;e.remove("collections");const t=new Array;let r=0;for(const e of this._collections)r=this._processCollection(t,r,e);this.splice(r,this.length);for(const r of t)e.add(r.on("after-changes",()=>this.refresh()),"collections")}_createNewInstance(e){return new n.a(e)}_processCollection(e,t,r){return r?(e.push(r),r.forEach(r=>{if(r){if(!this.itemFilterFunction||this.itemFilterFunction(r)){const e=this.indexOf(r,t);e>=0?e!==t&&this.reorder(r,t):this.add(r,t),++t}this.getChildrenFunction&&(t=this._processCollection(e,t,this.getChildrenFunction(r)))}}),t):t}};Object(i.a)([Object(a.b)()],o.prototype,"rootCollectionNames",void 0),Object(i.a)([Object(a.b)()],o.prototype,"root",void 0),Object(i.a)([Object(a.b)()],o.prototype,"getChildrenFunction",void 0),Object(i.a)([Object(a.b)()],o.prototype,"itemFilterFunction",void 0),o=Object(i.a)([Object(s.a)("esri.core.CollectionFlattener")],o);var c=o;t.a=c},243:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var i=r(18),a=r(8),s=r(20),n=r(19),l=r(38),o=r(33),c=r(25),d=r(79),u=r(36);let y=class extends c.a{constructor(){super(...arguments),this.updating=!1,this.handleId=0,this.handles=new d.a,this.scheduleHandleId=0,this.pendingPromises=new Set}destroy(){this.removeAll(),this.handles.destroy()}add(e,t,r,i=0){const a=0!=(1&i),s=++this.handleId;a||this.installSyncUpdatingWatch(e,t,s);const n=0!=(2&i)?Object(u.a)(e,t,r,a):e.watch(t,r,a);return this.handles.add(n,s),{remove:()=>{this.handles.remove(s)}}}addOnCollectionPropertyChange(e,t,r,i=0){const a=0!=(2&i),s=++this.handleId;return this.handles.add([Object(u.b)(e,t,"after-changes",this.createSyncUpdatingCallback()),Object(u.b)(e,t,"change",r,a?e=>{r({added:e.items,removed:[],moved:[],target:e})}:void 0)],s),{remove:()=>{this.handles.remove(s)}}}addOnCollectionChange(e,t,r=0){const i=0!=(2&r),a=++this.handleId;return this.handles.add([e.on("after-changes",this.createSyncUpdatingCallback()),e.on("change",t)],a),i&&t({added:e.items,removed:[],moved:[],target:e}),{remove:()=>{this.handles.remove(a)}}}addPromise(e){if(!e)return e;const t=++this.handleId;this.handles.add({remove:()=>{this.pendingPromises.delete(e)&&(0!==this.pendingPromises.size||this.handles.has(p)||this._set("updating",!1))}},t),this.pendingPromises.add(e),this._set("updating",!0);const r=()=>this.handles.remove(t);return e.then(r,r),e}removeAll(){this.pendingPromises.clear(),this.handles.removeAll(),this._set("updating",!1)}installSyncUpdatingWatch(e,t,r){const i=this.createSyncUpdatingCallback(),s=Object(o.a)(()=>Object(a.c)(e,t),i);return this.handles.add(s,r),s}createSyncUpdatingCallback(){return()=>{this.handles.remove(p),++this.scheduleHandleId;const e=this.scheduleHandleId;this._get("updating")||this._set("updating",!0),this.handles.add(Object(l.b)(()=>{e===this.scheduleHandleId&&(this._set("updating",this.pendingPromises.size>0),this.handles.remove(p))}),p)}}};Object(i.a)([Object(s.b)({readOnly:!0})],y.prototype,"updating",void 0),y=Object(i.a)([Object(n.a)("esri.views.support.WatchUpdatingTracking")],y);const p=-42},426:function(e,t,r){"use strict";var i,a=r(18),s=(r(7),r(5)),n=r(3),l=r(4),o=r(6),c=r(20),d=r(72),u=r(53),y=r(19),p=r(57),b=r(14),h=r(24),f=(r(34),r(26)),O=(r(35),r(2)),g=r(56),j=(r(58),r(62)),m=r(88),v=r(301),S=r(136),I=r(51),w=r(109),x=r(113),L=(r(144),r(149),r(158),r(216),r(236),r(238),r(218),r(219)),_=(r(220),r(81)),D=r(112),P=r(111),E=r(239),F=r(401),T=r(459),C=r(197),M=r(183),N=r(105),A=r(122);function V(e){return e&&"esriSMS"===e.type}function k(e,t,r){var i;return{ignoreOrigin:!0,enabled:!!r&&"map-image"===(null==(i=r.layer)?void 0:i.type)&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(f.d)(r.origin))}}function J(e,t,r){var i;return{enabled:!!r&&"tile"===(null==(i=r.layer)?void 0:i.type)&&this._isOverridden(t)}}function U(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function H(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=Object(f.d)(r.origin))}}const q=n.a.getLogger("esri.layers.support.Sublayer");let B=0;const $=new Set;$.add("layer"),$.add("parent"),$.add("loaded"),$.add("loadStatus"),$.add("loadError"),$.add("loadWarnings");let Q=i=class extends(Object(A.b)(Object(_.a)(Object(v.a)(w.a)))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null}async load(e){return this.addResolvingPromise((async()=>{var t;if(!this.layer&&!this.url)throw new b.a("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let r=null;if(!this.layer||this.originIdOf("url")>2||"data-layer"===(null==(t=this.source)?void 0:t.type))r=(await Object(I.default)(this.url,{responseType:"json",query:{f:"json"},...e})).data;else{var i;let t=this.id;"map-layer"===(null==(i=this.source)?void 0:i.type)&&(t=this.source.mapLayerId),r=await this.layer.fetchSublayerInfo(t,e)}r&&(this.sourceJSON=r,this.read({layerDefinition:r},{origin:"service"}))})()),this}readCapabilities(e,t){const r=(e=(t=t.layerDefinition||t).capabilities||e)?e.toLowerCase().split(",").map(e=>e.trim()):[];return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:-1!==r.indexOf("query")}}}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new P.a(this.fields||[])}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return null==e?B++:e}set id(e){this._get("id")!==e&&(!1!==this.get("layer.capabilities.exportMap.supportsDynamicLayers")?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(e=>e.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields)for(const e of t.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){const r=t.layerDefinition;return 1-.01*(null!=r.transparency?r.transparency:r.drawingInfo.transparency)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=Object(l.e)(this.parent.id):t.parentLayerId=-1}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){if(e)for(const t of e.getSymbols())if(Object(x.h)(t)){q.warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new T.a({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return Object(l.m)(j.a.ofType(i),e)}writeSublayers(e,t,r){this.get("sublayers.length")&&(t[r]=this.sublayers.map(e=>e.id).toArray().reverse())}readTypeIdField(e,t){const r=(t=t.layerDefinition||t).typeIdField;if(r){const e=Object(m.i)(t.fields,r);if(e)return e.name}return null}get url(){var e,t;const r=null!=(e=null==(t=this.layer)?void 0:t.parsedUrl)?e:this._lastParsedUrl,i=this.source;if(!r)return null;if(this._lastParsedUrl=r,"map-layer"===(null==i?void 0:i.type))return`${r.path}/${i.mapLayerId}`;const a={layer:JSON.stringify({source:this.source})};return`${r.path}/dynamicLayer?${Object(h.B)(a)}`}set url(e){e?this._override("url",e):this._clearOverride("url")}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=Object(o.a)(this),t=new i;return Object(o.a)(t).store=e.clone($),this.url,t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Object(M.a)(this,e)}createQuery(){return new N.a({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var e,t;if(this.hasOwnProperty("sublayers"))return null;const i=null==(e=this.layer)?void 0:e.parsedUrl,a=new(0,(await Promise.resolve().then(r.bind(null,116))).default)({url:i.path});return i&&this.source&&("map-layer"===this.source.type?a.layerId=this.source.mapLayerId:a.dynamicDataSource=this.source),null!=this.layer.refreshInterval&&(a.refreshInterval=this.layer.refreshInterval),this.definitionExpression&&(a.definitionExpression=this.definitionExpression),this.originIdOf("labelingInfo")>2&&(a.labelingInfo=Object(s.a)(this.labelingInfo)),this.originIdOf("labelsVisible")>0&&(a.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>0&&(a.legendEnabled=this.legendEnabled),this.originIdOf("visible")>0&&(a.visible=this.visible),this.originIdOf("minScale")>0&&(a.minScale=this.minScale),this.originIdOf("maxScale")>0&&(a.maxScale=this.maxScale),this.originIdOf("opacity")>0&&(a.opacity=this.opacity),this.originIdOf("popupTemplate")>0&&(a.popupTemplate=Object(s.a)(this.popupTemplate)),this.originIdOf("renderer")>2&&(a.renderer=Object(s.a)(this.renderer)),"data-layer"===(null==(t=this.source)?void 0:t.type)&&(a.dynamicDataSource=this.source.clone()),this.originIdOf("title")>0&&(a.title=this.title),a}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(null==i)return null;let a=null;return r.some(e=>{const{id:t}=e;return null!=t&&(t.toString()===i.toString()&&(a=e),!!a)}),a}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this._getLayerDomain(e)}queryFeatures(e=this.createQuery(),t){return this.load().then(()=>{if(!this.get("capabilities.operations.supportsQuery"))throw new b.a("Sublayer.queryFeatures","this layer doesn't support queries.");return Object(O.b)([Promise.resolve().then(r.bind(null,181)),Promise.resolve().then(r.bind(null,103))])}).then(([{executeQuery:r},{default:i}])=>r(this.url,N.a.from(e),this.layer?this.layer.spatialReference:null,{...t,query:{...this.layer.customParameters}}).then(e=>i.fromJSON(e.data))).then(e=>(e&&e.features&&e.features.forEach(e=>{e.sourceLayer=this}),e))}toExportImageJSON(){var e;const t={id:this.id,source:null==(e=this.source)?void 0:e.toJSON()};this.definitionExpression&&(t.definitionExpression=this.definitionExpression);const r=["renderer","labelingInfo","opacity","labelsVisible"].reduce((e,t)=>(e[t]=this.originIdOf(t),e),{});if(Object.keys(r).some(e=>r[e]>=2)){const e=t.drawingInfo={};r.renderer>=2&&(e.renderer=this.renderer?this.renderer.toJSON():null),r.labelsVisible>=2&&(e.showLabels=this.labelsVisible),this.labelsVisible&&r.labelingInfo>=2&&(e.labelingInfo=this.labelingInfo?this.labelingInfo.map(e=>e.write({},{origin:"service"})):null,e.showLabels=!0),r.opacity>=2&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){const r="uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[];for(const e of r)V(e.symbol)&&t(e.symbol);"symbol"in e&&V(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&V(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){const r=this.layer,i=this._get(e);let a,s;switch(e){case"definitionExpression":a="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":a="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":a="supportsDynamicLayers",s="supportsModification"}const n=Object(o.a)(this).getDefaultOrigin();if("service"!==n){if(a&&!1===this.get("layer.capabilities.exportMap."+a))return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${a}'`);if(s&&!1===this.get("capabilities.exportMap."+s))return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${s}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,t),"service"!==n&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.removeAll()),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null}),e.on("before-changes",e=>{const t=this.get("layer.capabilities.exportMap.supportsSublayersChanges");null==t||t||(q.error(new b.a("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())})]))}_logLockedError(e,t){q.error(new b.a("sublayer:locked",`Property '${e}' can't be changed on Sublayer from the layer '${this.layer.id}'`,{reason:t,sublayer:this,layer:this.layer}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};Q.test={isMapImageLayerOverridePolicy:e=>e===U||e===k,isTileImageLayerOverridePolicy:e=>e===J},Object(a.a)([Object(c.b)({readOnly:!0})],Q.prototype,"capabilities",void 0),Object(a.a)([Object(u.a)("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],Q.prototype,"readCapabilities",null),Object(a.a)([Object(c.b)({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression",overridePolicy:k}}})],Q.prototype,"definitionExpression",null),Object(a.a)([Object(c.b)({type:[D.a],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],Q.prototype,"fields",void 0),Object(a.a)([Object(c.b)({readOnly:!0,dependsOn:["fields"]})],Q.prototype,"fieldsIndex",null),Object(a.a)([Object(c.b)({type:g.a,json:{read:{source:"layerDefinition.extent"}}})],Q.prototype,"fullExtent",void 0),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"globalIdField",void 0),Object(a.a)([Object(u.a)("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Q.prototype,"readGlobalIdFieldFromService",null),Object(a.a)([Object(c.b)({type:l.a,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"id",null),Object(a.a)([Object(c.b)({value:null,type:[E.a],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:U}}})],Q.prototype,"labelingInfo",null),Object(a.a)([Object(p.a)("labelingInfo")],Q.prototype,"writeLabelingInfo",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:U}}})],Q.prototype,"labelsVisible",null),Object(a.a)([Object(c.b)({value:null})],Q.prototype,"layer",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:H}}})],Q.prototype,"legendEnabled",void 0),Object(a.a)([Object(c.b)({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],Q.prototype,"listMode",null),Object(a.a)([Object(c.b)({type:Number,value:0,json:{write:{overridePolicy:U}}})],Q.prototype,"minScale",null),Object(a.a)([Object(u.a)("minScale",["minScale","layerDefinition.minScale"])],Q.prototype,"readMinScale",null),Object(a.a)([Object(c.b)({type:Number,value:0,json:{write:{overridePolicy:U}}})],Q.prototype,"maxScale",null),Object(a.a)([Object(u.a)("maxScale",["maxScale","layerDefinition.maxScale"])],Q.prototype,"readMaxScale",null),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"objectIdField",void 0),Object(a.a)([Object(u.a)("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Q.prototype,"readObjectIdFieldFromService",null),Object(a.a)([Object(c.b)({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:U}}})],Q.prototype,"opacity",null),Object(a.a)([Object(u.a)("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],Q.prototype,"readOpacity",null),Object(a.a)([Object(p.a)("opacity")],Q.prototype,"writeOpacity",null),Object(a.a)([Object(c.b)({json:{type:l.a,write:{target:"parentLayerId",allowNull:!0,overridePolicy:U}}})],Q.prototype,"parent",void 0),Object(a.a)([Object(p.a)("parent")],Q.prototype,"writeParent",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:H,writer(e,t,r){t[r]=!e}}}})],Q.prototype,"popupEnabled",void 0),Object(a.a)([Object(c.b)({type:S.a,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:H}}})],Q.prototype,"popupTemplate",void 0),Object(a.a)([Object(c.b)({readOnly:!0,dependsOn:["fields","title"]})],Q.prototype,"defaultPopupTemplate",null),Object(a.a)([Object(c.b)({types:L.a,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U},origins:{"web-scene":{types:L.b,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:U}}}}})],Q.prototype,"renderer",null),Object(a.a)([Object(c.b)({types:{key:"type",base:null,typeMap:{"data-layer":C.a,"map-layer":T.a}},cast(e){if(e){if("mapLayerId"in e)return Object(l.d)(T.a,e);if("dataSource"in e)return Object(l.d)(C.a,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:U}}})],Q.prototype,"source",null),Object(a.a)([Object(c.b)()],Q.prototype,"sourceJSON",void 0),Object(a.a)([Object(c.b)({value:null,json:{type:[l.a],write:{target:"subLayerIds",allowNull:!0,overridePolicy:U}}})],Q.prototype,"sublayers",null),Object(a.a)([Object(d.a)("sublayers")],Q.prototype,"castSublayers",null),Object(a.a)([Object(p.a)("sublayers")],Q.prototype,"writeSublayers",null),Object(a.a)([Object(c.b)({type:String,json:{read:{source:"name"},write:{target:"name",allowNull:!0,overridePolicy:H}}})],Q.prototype,"title",void 0),Object(a.a)([Object(c.b)({type:String})],Q.prototype,"typeIdField",void 0),Object(a.a)([Object(u.a)("typeIdField",["layerDefinition.typeIdField"])],Q.prototype,"readTypeIdField",null),Object(a.a)([Object(c.b)({type:[F.a],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],Q.prototype,"types",void 0),Object(a.a)([Object(c.b)({type:String,dependsOn:["layer","source"],json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:J}}})],Q.prototype,"url",null),Object(a.a)([Object(c.b)({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:U}}})],Q.prototype,"visible",null),Object(a.a)([Object(p.a)("visible")],Q.prototype,"writeVisible",null),Q=i=Object(a.a)([Object(y.a)("esri.layers.support.Sublayer")],Q);var G=Q;t.a=G},427:function(e,t,r){"use strict";function i(e,t,r){return t.flatten(({sublayers:e})=>e).length!==e.length||(!!e.some(e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r)||!s(e,t))}function a(e,t,r){return!!e.some(e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(!t.gdbVersion||t.gdbVersion===r.gdbVersion))||e.originIdOf("renderer")>2||e.originIdOf("labelingInfo")>2||e.originIdOf("opacity")>2||e.originIdOf("labelsVisible")>2})||!s(e,t)}function s(e,t){if(!e||!e.length)return!0;const r=t.slice().reverse().flatten(({sublayers:e})=>e&&e.toArray().reverse()).map(e=>e.id).toArray();if(e.length>r.length)return!1;let i=0;const a=r.length;for(const{id:t}of e){for(;i<a&&r[i]!==t;)i++;if(i>=a)return!1}return!0}function n(e){return!!e&&e.some(e=>null!=e.minScale||e.layerDefinition&&null!=e.layerDefinition.minScale)}r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i}))},502:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(53),n=r(19),l=r(24),o=(r(34),r(35),r(2)),c=r(55),d=r(56),u=r(51),y=r(85);const p=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=null}readCapabilities(e,t){const r=t.capabilities&&t.capabilities.split(",").map(e=>e.toLowerCase().trim());if(!r)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const i=this.type,a=-1!==r.indexOf("query"),s=-1!==r.indexOf("map"),n=!!t.exportTilesAllowed,l=-1!==r.indexOf("tilemap"),o="tile"!==i&&!!t.supportsDynamicLayers,c="tile"!==i&&(!t.tileInfo||o),d="tile"!==i&&(!t.tileInfo||o);return{operations:{supportsQuery:a,supportsExportMap:s,supportsExportTiles:n,supportsTileMap:l},exportMap:s?{supportsSublayersChanges:"tile"!==i,supportsDynamicLayers:o,supportsSublayerVisibility:c,supportsSublayerDefinitionExpression:d}:null,exportTiles:n?{maxExportTilesCount:+t.maxExportTilesCount}:null}}readVersion(e,t){let r=t.currentVersion;return r||(r=t.hasOwnProperty("capabilities")||t.hasOwnProperty("tables")?10:t.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),r}async fetchSublayerInfo(e,t){return await this.fetchAllLayersAndTables(t),this._allLayersAndTablesMap.get(e)}async fetchAllLayersAndTables(e){await this.load(e),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=Object(u.default)(Object(l.H)(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters}}).then(e=>{this._allLayersAndTablesMap=new Map;for(const t of e.data.layers)this._allLayersAndTablesMap.set(t.id,t);return{result:e.data}},e=>({error:e})));const t=await this._allLayersAndTablesPromise;if(Object(o.u)(e),"result"in t)return t.result;throw t.error}};return Object(i.a)([Object(a.b)({readOnly:!0})],t.prototype,"capabilities",void 0),Object(i.a)([Object(s.a)("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),Object(i.a)([Object(a.b)({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),Object(i.a)([Object(a.b)({type:d.a})],t.prototype,"fullExtent",void 0),Object(i.a)([Object(a.b)({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],t.prototype,"id",void 0),Object(i.a)([Object(a.b)({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),Object(i.a)([Object(a.b)(y.g)],t.prototype,"popupEnabled",void 0),Object(i.a)([Object(a.b)({type:c.a})],t.prototype,"spatialReference",void 0),Object(i.a)([Object(a.b)()],t.prototype,"version",void 0),Object(i.a)([Object(s.a)("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=Object(i.a)([Object(n.a)("esri.layers.mixins.ArcGISMapService")],t),t}},503:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var i=r(18),a=(r(7),r(3),r(4),r(20)),s=r(19);r(24),r(34),r(35);const n=e=>{let t=class extends e{constructor(){super(...arguments),this.customParameters=null}};return Object(i.a)([Object(a.b)({json:{write:!0,origins:{"web-scene":{write:!1}}}})],t.prototype,"customParameters",void 0),t=Object(i.a)([Object(s.a)("esri.layers.mixins.CustomParametersMixin")],t),t}},504:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var i=r(18),a=(r(7),r(3)),s=(r(4),r(6)),n=r(20),l=r(19),o=r(14),c=(r(24),r(34),r(26)),d=(r(35),r(62)),u=r(170),y=r(426),p=r(427);const b=a.a.getLogger("esri.layers.TileLayer"),h=d.a.ofType(y.a);const f=e=>{let t=class extends e{constructor(...e){super(...e),this.allSublayers=new u.a({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={2:{},3:{},4:{},5:{}},this.watch("sublayers",(e,t)=>this._handleSublayersChange(e,t),!0)}readSublayers(e,t){if(!t||!e)return;const{sublayersSourceJSON:r}=this,i=Object(c.d)(t.origin);if(i<2)return;if(r[i]={context:t,visibleLayers:e.visibleLayers||r[i].visibleLayers,layers:e.layers||r[i].layers},i>2)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:a,origin:n}=this.createSublayersForOrigin("web-document"),l=Object(s.a)(this);l.setDefaultOrigin(n),this._set("sublayers",new h(a)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const t=Object(c.d)("web-document"===e?"web-map":e);let r=2,i=this.sublayersSourceJSON[2].layers,a=this.sublayersSourceJSON[2].context,s=null;const n=[3,4,5].filter(e=>e<=t);for(const e of n){const t=this.sublayersSourceJSON[e];Object(p.b)(t.layers)&&(r=e,i=t.layers,a=t.context,t.visibleLayers&&(s={visibleLayers:t.visibleLayers,context:t.context}))}const l=[3,4,5].filter(e=>e>r&&e<=t);let o=null;for(const e of l){const{layers:t,visibleLayers:r,context:i}=this.sublayersSourceJSON[e];t&&(o={layers:t,context:i}),r&&(s={visibleLayers:r,context:i})}const d=function(e,t){const r=[],i={};return e?(e.forEach(e=>{const a=new y.a;if(a.read(e,t),i[a.id]=a,null!=e.parentLayerId&&-1!==e.parentLayerId){const t=i[e.parentLayerId];t.sublayers||(t.sublayers=[]),t.sublayers.unshift(a)}else r.unshift(a)}),r):r}(i,a),u=new Map,b=new Set;if(o)for(const e of o.layers)u.set(e.id,e);if(s)for(const e of s.visibleLayers)b.add(e);return function e(t,r){t&&t.forEach(t=>{r(t),t.sublayers&&t.sublayers.length&&e(t.sublayers,r)})}(d,e=>{o&&e.read(u.get(e.id),o.context),s&&e.read({defaultVisibility:b.has(e.id)},s.context)}),{origin:Object(c.b)(r),sublayers:new h({items:d})}}read(e,t){super.read(e,t),this.readSublayers(e,t)}_handleSublayersChange(e,t){t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this.handles.remove("sublayers-owner")),e&&(e.forEach(e=>{e.parent=this,e.layer=this}),this.handles.add([e.on("after-add",({item:e})=>{e.parent=this,e.layer=this}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})],"sublayers-owner"),"tile"===this.type&&this.handles.add(e.on("before-changes",e=>{b.error(new o.a("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()}),"sublayers-owner"))}};return Object(i.a)([Object(n.b)({readOnly:!0})],t.prototype,"allSublayers",void 0),Object(i.a)([Object(n.b)({readOnly:!0,type:d.a.ofType(y.a)})],t.prototype,"serviceSublayers",void 0),Object(i.a)([Object(n.b)({value:null,type:h,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),Object(i.a)([Object(n.b)({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=Object(i.a)([Object(l.a)("esri.layers.mixins.SublayersOwner")],t),t}}});