(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[101],{449:function(e,t,a){"use strict";a.r(t),a.d(t,"getFirstLayerOrTableId",(function(){return h})),a.d(t,"getNumLayersAndTables",(function(){return b})),a.d(t,"load",(function(){return o})),a.d(t,"preprocessFSItemData",(function(){return f}));var n=a(9),l=a(625),r=a(68),i=a(653),u=a(351),s=a(654);async function o(e,t){const a=e.instance.portalItem;return a&&a.id?(await a.load(t),function(e){const t=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(t.type))throw new n.a("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:t.type,expectedType:e.supportedTypes.join(", ")})}(e),async function(e,t){const a=e.instance,n=a.portalItem,{url:l,title:r}=n,s=Object(i.a)(n);if("group"===a.type)return a.read({title:r},s),c(a,e);l&&a.read({url:l},s);const o=await p(e,t);return o&&a.read(o,s),a.resourceReferences={portalItem:n,paths:s.readResourcePaths},a.read({title:r},s),Object(u.a)(a,s)}(e,t)):Promise.resolve()}function c(e,t){let a;const r=e.portalItem.type;switch(r){case"Feature Service":a=l.a.FeatureLayer;break;case"Stream Service":a=l.a.StreamLayer;break;case"Scene Service":a=l.a.SceneLayer;break;case"Feature Collection":a=l.a.FeatureLayer;break;default:throw new n.a("portal:unsupported-item-type-as-group",`The item type '${r}' is not supported as a 'IGroupLayer'`)}let i;return a().then(e=>(i=e,p(t))).then(async t=>"Feature Service"===r?(t=await f(t,e.portalItem.url),d(e,i,t)):b(t)>0?d(e,i,t):function(e,t){return e.portalItem.url?Object(s.a)(e.portalItem.url).then(a=>{var n,l;function r(e){return{id:e.id,name:e.name}}a&&d(e,t,{layers:null==(n=a.layers)?void 0:n.map(r),tables:null==(l=a.tables)?void 0:l.map(r)})}):Promise.resolve()}(e,i))}function d(e,t,a){let n=a.layers||[];const l=a.tables||[];"Feature Collection"===e.portalItem.type&&(n.forEach(e=>{var t;"Table"===(null==e||null==(t=e.layerDefinition)?void 0:t.type)&&l.push(e)}),n=n.filter(e=>{var t;return"Table"!==(null==e||null==(t=e.layerDefinition)?void 0:t.type)})),n.reverse().forEach(n=>{const l=y(e,t,a,n);e.add(l)}),l.reverse().forEach(n=>{const l=y(e,t,a,n);e.tables.add(l)})}function y(e,t,a,n){const l=new t({portalItem:e.portalItem.clone(),layerId:n.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){const t={origin:"portal-item",portal:e.portalItem.portal||r.a.getDefault()};l.read(n,t);const i=a.showLegend;null!=i&&l.read({showLegend:i},t)}return l}function p(e,t){if(!1===e.supportsData)return Promise.resolve(void 0);const a=e.instance;return a.portalItem.fetchData("json",t).catch(()=>null).then(async e=>{if(function(e){return"stream"!==e.type&&"layerId"in e}(a)){let t,n=!0;return e&&b(e)>0&&(null==a.layerId&&(a.layerId=h(e)),t=function(e,t){const a=e.layers;if(a)for(let l=0;l<a.length;l++)if(a[l].id===t)return a[l];const n=e.tables;if(n)for(let l=0;l<n.length;l++)if(n[l].id===t)return n[l];return null}(e,a.layerId),t&&(1===b(e)&&(n=!1),null!=e.showLegend&&(t.showLegend=e.showLegend))),n&&"service-name"!==a.sublayerTitleMode&&(a.sublayerTitleMode="item-title-and-service-name"),t}return e})}async function f(e,t){var a,n;if(null==(null==(a=e)?void 0:a.layers)||null==(null==(n=e)?void 0:n.tables)){const a=await Object(s.a)(t);(e=e||{}).layers=e.layers||(null==a?void 0:a.layers),e.tables=e.tables||(null==a?void 0:a.tables)}return e}function h(e){const t=e.layers;if(t&&t.length)return t[0].id;const a=e.tables;return a&&a.length?a[0].id:null}function b(e){var t,a,n,l;return(null!=(t=null==e||null==(a=e.layers)?void 0:a.length)?t:0)+(null!=(n=null==e||null==(l=e.tables)?void 0:l.length)?n:0)}},625:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={BingMapsLayer:async()=>(await a.e(210).then(a.bind(null,778))).default,BuildingSceneLayer:async()=>(await Promise.all([a.e(25),a.e(211)]).then(a.bind(null,764))).default,CSVLayer:async()=>(await a.e(123).then(a.bind(null,779))).default,ElevationLayer:async()=>(await a.e(28).then(a.bind(null,773))).default,FeatureLayer:async()=>(await Promise.resolve().then(a.bind(null,207))).default,GroupLayer:async()=>(await a.e(34).then(a.bind(null,705))).default,GeoRSSLayer:async()=>(await a.e(212).then(a.bind(null,741))).default,ImageryLayer:async()=>(await Promise.all([a.e(1),a.e(13),a.e(22),a.e(213)]).then(a.bind(null,765))).default,ImageryTileLayer:async()=>(await Promise.all([a.e(1),a.e(13),a.e(22),a.e(87)]).then(a.bind(null,763))).default,IntegratedMeshLayer:async()=>(await a.e(73).then(a.bind(null,770))).default,KMLLayer:async()=>(await a.e(148).then(a.bind(null,780))).default,MapImageLayer:async()=>(await Promise.all([a.e(16),a.e(99)]).then(a.bind(null,706))).default,MapNotesLayer:async()=>(await a.e(149).then(a.bind(null,781))).default,OGCFeatureLayer:async()=>(await a.e(77).then(a.bind(null,782))).default,OpenStreetMapLayer:async()=>(await a.e(124).then(a.bind(null,749))).default,PointCloudLayer:async()=>(await a.e(57).then(a.bind(null,767))).default,RouteLayer:async()=>(await a.e(214).then(a.bind(null,750))).default,SceneLayer:async()=>(await Promise.all([a.e(25),a.e(215)]).then(a.bind(null,783))).default,StreamLayer:async()=>(await a.e(216).then(a.bind(null,784))).default,TileLayer:async()=>(await Promise.all([a.e(16),a.e(88)]).then(a.bind(null,751))).default,UnknownLayer:async()=>(await a.e(217).then(a.bind(null,752))).default,UnsupportedLayer:async()=>(await a.e(218).then(a.bind(null,753))).default,VectorTileLayer:async()=>(await Promise.all([a.e(27),a.e(67)]).then(a.bind(null,769))).default,VoxelLayer:async()=>(await a.e(219).then(a.bind(null,762))).default,WebTileLayer:async()=>(await a.e(150).then(a.bind(null,651))).default,WFSLayer:async()=>(await Promise.all([a.e(29),a.e(125)]).then(a.bind(null,785))).default,WMSLayer:async()=>(await a.e(122).then(a.bind(null,774))).default,WMTSLayer:async()=>(await a.e(100).then(a.bind(null,771))).default}},653:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(13),l=a(68);function r(e){return{origin:"portal-item",url:Object(n.K)(e.itemUrl),portal:e.portal||l.a.getDefault(),portalItem:e,readResourcePaths:[]}}},654:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(45);async function l(e){const{data:t}=await Object(n.default)(e,{responseType:"json",query:{f:"json"}});return t}}}]);
//# sourceMappingURL=101.ad3f822b.chunk.js.map