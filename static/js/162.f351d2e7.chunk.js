(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[162],{972:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return A}));var r=n(690),a=n(597),i=n(624),l=n(867),s=n(898),o=n(568),c=n(869),u=n(826),f=n(828),d=n(871),b=n(830),m=n(872),p=n(829),y=n(575),O=n(650),h=n(799),g=n(12),j=n(448),F=n(207),I=n(206);function E(e,t,n){const r=e.getVariables();if(r.length>0){const a=[];for(let e=0;e<r.length;e++){const i={name:r[e]};a.push(t.evaluateIdentifier(n,i))}return Object(g.b)(a).then(t=>{const n={};for(let e=0;e<r.length;e++)n[r[e]]=t[e];return e.parameters=n,e})}return Object(g.t)(e)}function D(e,t,n=null){for(const r in e)if(r.toLowerCase()===t.toLowerCase())return e[r];return n}function w(e){if(null===e)return null;const t={type:D(e,"type",""),name:D(e,"name","")};if("range"===t.type)t.range=D(e,"range",[]);else{t.codedValues=[];for(const n of D(e,"codedValues",[]))t.codedValues.push({name:D(n,"name",""),code:D(n,"code",null)})}return t}function x(e){if(null===e)return null;const t={},n=D(e,"wkt",null);null!==n&&(t.wkt=n);const r=D(e,"wkid",null);return null!==r&&(t.wkid=r),t}function N(e){if(null===e)return null;const t={hasZ:D(e,"hasz",!1),hasM:D(e,"hasm",!1)},n=D(e,"spatialreference",null);n&&(t.spatialReference=x(n));const r=D(e,"x",null);if(null!==r)return t.x=r,t.y=D(e,"y",null),t;const a=D(e,"rings",null);if(null!==a)return t.rings=a,t;const i=D(e,"paths",null);if(null!==i)return t.paths=i,t;const l=D(e,"points",null);if(null!==l)return t.points=l,t;for(const s of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=D(e,s,null);null!==n&&(t[s]=n)}return t}function A(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,(e,n,i)=>{Object(o.J)(i,1,2);let l=Object(o.c)(i[1],""),c=!0===l;if(l=!0===l||!1===l?"":Object(o.x)(l),i[0]instanceof r.a){let e=null;return t.services&&t.services.portal&&(e=t.services.portal),e=Object(s.getPortal)(i[0],e),Object(s.lookupUser)(e,l,c).then(e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.a.convertObjectToArcadeDictionary(t)}return null})}let u=null;if(Object(o.I)(i[0])&&(u=i[0]),u)return c=!1,l?null:u.load().then(()=>u.getOwningSystemUrl()).then(e=>{if(!e)return l?null:u.getIdentityUser().then(e=>e?a.a.convertObjectToArcadeDictionary({username:e}):null);let n=null;return t.services&&t.services.portal&&(n=t.services.portal),n=Object(s.getPortal)(new r.a(e),n),Object(s.lookupUser)(n,l,c).then(e=>{if(e){const t=JSON.parse(JSON.stringify(e));for(const e of["lastLogin","created","modified"])void 0!==t[e]&&null!==t[e]&&(t[e]=new Date(t[e]));return a.a.convertObjectToArcadeDictionary(t)}return null})});throw new Error("Invalid Parameter")})},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(o.J)(n,2,4),n[0]instanceof l.a){const e=Object(o.x)(n[1]);let t=Object(o.c)(n[2],null);const r=Object(o.O)(Object(o.c)(n[3],!0));if(null===t&&(t=["*"]),!1===Object(o.u)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.getfeatureset=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{if(Object(o.J)(r,1,2),r[0]instanceof i.a){let e=Object(o.c)(r[1],"datasource");return null===e&&(e="datasource"),e=Object(o.x)(e).toLowerCase(),Object(s.convertToFeatureSet)(r[0]._layer,e,t.lrucache,t.interceptor,t.spatialReference)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"getfeatureset",min:"1",max:"2"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(e,n,a)=>{if(Object(o.J)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof r.a){const e=Object(o.x)(a[1]),n=Object(o.x)(a[2]);let r=Object(o.c)(a[3],null);const i=Object(o.O)(Object(o.c)(a[4],!0));if(null===r&&(r=["*"]),!1===Object(o.u)(r))throw new Error("Invalid Parameter");let l=null;return t.services&&t.services.portal&&(l=t.services.portal),l=Object(s.getPortal)(a[0],l),Object(s.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,r,i,l,t.lrucache,t.interceptor)}if(!1===Object(o.z)(a[0]))throw new Error("Portal is required");const i=Object(o.x)(a[0]),l=Object(o.x)(a[1]);let c=Object(o.c)(a[2],null);const u=Object(o.O)(Object(o.c)(a[3],!0));if(null===c&&(c=["*"]),!1===Object(o.u)(c))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return Object(s.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,c,u,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")})},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(o.J)(n,2,4),n[0]instanceof l.a){const e=Object(o.x)(n[1]);let t=Object(o.c)(n[2],null);const r=Object(o.O)(Object(o.c)(n[3],!0));if(null===t&&(t=["*"]),!1===Object(o.u)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(e,n,r)=>{Object(o.J)(r,1,1);let i=r[0];const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Object(o.z)(i))i=JSON.parse(i),void 0!==i.layerDefinition?(l.layerDefinition=i.layerDefinition,l.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(l.featureSet.features=i.features,l.featureSet.geometryType=i.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=i.objectIdFieldName,l.layerDefinition.typeIdField=i.typeIdFieldName,l.layerDefinition.globalIdField=i.globalIdFieldName,l.layerDefinition.fields=i.fields,i.spatialReference&&(l.layerDefinition.spatialReference=i.spatialReference));else{if(!(r[0]instanceof a.a))throw new Error("Invalid Parameter");{i=JSON.parse(r[0].castToText());const e=D(i,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=D(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=D(e,"globalidfield",""),l.layerDefinition.objectIdField=D(e,"objectidfield",""),l.layerDefinition.typeIdField=D(e,"typeidfield","");const t=D(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=x(t));for(const r of D(e,"fields",[])){const e={name:D(r,"name",""),alias:D(r,"alias",""),type:D(r,"type",""),nullable:D(r,"nullable",!0),editable:D(r,"editable",!0),length:D(r,"length",null),domain:w(D(r,"domain"))};l.layerDefinition.fields.push(e)}const n=D(i,"featureset",null);if(n){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of D(n,"features",[])){const n={},r=D(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];l.featureSet.features.push({attributes:n,geometry:N(D(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=D(i,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=D(i,"objectidfieldname",""),l.layerDefinition.typeIdField=D(i,"typeidfieldname","");const e=D(i,"spatialreference",null);e&&(l.layerDefinition.spatialReference=x(e));for(const n of D(i,"fields",[])){const e={name:D(n,"name",""),alias:D(n,"alias",""),type:D(n,"type",""),nullable:D(n,"nullable",!0),editable:D(n,"editable",!0),length:D(n,"length",null),domain:w(D(n,"domain"))};l.layerDefinition.fields.push(e)}const t={};for(const n of l.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of D(i,"features",[])){const e={},r=D(n,"attributes",{});for(const n in r)e[t[n.toLowerCase()]]=r[n];l.featureSet.features.push({attributes:e,geometry:N(D(n,"geometry",null))})}}}}if(!1===function(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){for(const n of t)if(n===e)return!0;return!1}(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==Object(o.u)(e.layerDefinition.fields)&&!1!==Object(o.u)(e.featureSet.features)}(l))throw new Error("Invalid Parameter");return m.a.create(l,t.spatialReference)})},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(n,r,a)=>(Object(o.J)(a,2,2),Object(o.I)(a[0])?a[0].load().then(n=>{const r=j.WhereClause.create(a[1],n.getFieldsIndex()),i=r.getVariables();if(i.length>0){const n=[];for(let r=0;r<i.length;r++){const a={name:i[r]};n.push(e.evaluateIdentifier(t,a))}return Object(g.b)(n).then(e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return r.parameters=t,new u.a({parentfeatureset:a[0],whereclause:r})})}return Object(g.t)(new u.a({parentfeatureset:a[0],whereclause:r}))}):e.failDefferred("Filter cannot accept this parameter type")))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(t,n,r)=>{if(Object(o.J)(r,2,2),Object(o.I)(r[0])){const e=new p.a(r[1]);return Object(g.t)(new f.a({parentfeatureset:r[0],orderbyclause:e}))}return e.failDefferred("Order cannot accept this parameter type")})},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(t,n,r)=>(Object(o.J)(r,2,2),Object(o.I)(r[0])?Object(g.t)(new d.a({parentfeatureset:r[0],topnum:r[1]})):Object(o.u)(r[0])?Object(o.N)(r[1])>=r[0].length?r[0].slice(0):r[0].slice(0,Object(o.N)(r[1])):Object(o.v)(r[0])?Object(o.N)(r[1])>=r[0].length()?r[0].slice(0):r[0].slice(0,Object(o.N)(r[1])):e.failDefferred("Top cannot accept this parameter type")))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>(Object(o.J)(n,1,1),Object(o.I)(n[0])?n[0].first(e.abortSignal).then(e=>{if(null!==e){const t=i.a.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e}):Object(o.u)(n[0])?0===n[0].length?Object(g.t)(null):Object(g.t)(n[0][0]):Object(o.v)(n[0])?0===n[0].length()?Object(g.t)(null):Object(g.t)(n[0].get(0)):null))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(o.J)(r,1,2);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(r.length>1)if(r[1]instanceof a.a){if(r[1].hasField("minsize")&&(l.minsize=Object(o.N)(r[1].field("minsize"))),r[1].hasField("metadata")&&(l.returnMetadata=Object(o.O)(r[1].field("metadata"))),r[1].hasField("maxsize")&&(l.maxsize=Object(o.N)(r[1].field("maxsize"))),r[1].hasField("types")){const e=Object(o.t)(r[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==r[1])throw new Error("Invalid Parameter");if(r[0]instanceof i.a){let e=r[0]._layer;return e instanceof F.default&&(e=Object(s.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===e||!1===Object(o.I)(e)?[]:e.load().then(()=>e.queryAttachments(r[0].field(e.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===r[0])return[];throw new Error("Invalid Parameter")})},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(o.J)(r,2,4);const a=r[0],l=Object(o.x)(r[1]);let c=Object(o.c)(r[2],null);const u=Object(o.O)(Object(o.c)(r[3],!0));if(null===c&&(c=["*"]),!1===Object(o.u)(c))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(r[0]instanceof i.a))throw new Error("Invalid Parameter");let f=a._layer;return f instanceof F.default&&(f=Object(s.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f||!1===Object(o.I)(f)?null:f.load().then(e=>{const n=e.relationshipMetaData().filter(e=>e.name===l);if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return Object(s.constructFeatureSetFromRelationship)(e,n[0],a.field(e.objectIdField),e.spatialReference,c,u,t.lrucache,t.interceptor);let r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),Object(s.constructFeatureSetFromUrl)(r,e.spatialReference,c,u,t.lrucache,t.interceptor).then(t=>t.load().then(()=>t.relationshipMetaData()).then(r=>{if(r=r.filter(e=>e.id===n[0].id),!1===a.hasField(n[0].keyField)||null===a.field(n[0].keyField))return e.getFeatureByObjectId(a.field(e.objectIdField),[n[0].keyField]).then(e=>{if(e){const a=j.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:e.attributes[n[0].keyField]},t.filter(a)}return new b.a({parentfeatureset:t})});const i=j.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:a.field(n[0].keyField)},t.filter(i)}))):null})})},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(o.J)(r,2,3);const a=r[0],l=Object(o.x)(Object(o.c)(r[1],"")).toLowerCase(),u=Object(o.z)(r[2])?Object(o.x)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof i.a))throw new Error("Invalid Parameter");let f=a._layer;return f instanceof F.default&&(f=Object(s.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f||!1===Object(o.I)(f)?null:f.load().then(()=>{const e=f.serviceUrl();return Object(s.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)}).then(e=>{let t=null,n=null,r=!1;if(null!==u&&""!==u&&void 0!==u){for(const t of e.terminals)t.terminalName===u&&(n=t.terminalId);null===n&&(r=!0)}const i=e.associations.getFieldsIndex(),s=i.get("TOGLOBALID").name,d=i.get("FROMGLOBALID").name,b=i.get("TOTERMINALID").name,m=i.get("FROMTERMINALID").name,p=i.get("FROMNETWORKSOURCEID").name,O=i.get("TONETWORKSOURCEID").name,h=i.get("ASSOCIATIONTYPE").name,g=i.get("ISCONTENTVISIBLE").name,F=i.get("OBJECTID").name;for(const l of f.fields)if("global-id"===l.type){t=a.field(l.name);break}let E=null,D=new c.d(new I.a({name:"percentalong",alias:"percentalong",type:"double"}),j.WhereClause.create("0",e.associations.getFieldsIndex())),w=new c.d(new I.a({name:"side",alias:"side",type:"string"}),j.WhereClause.create("''",e.associations.getFieldsIndex()));const x="globalid",N="globalId",A={};for(const a in e.lkp)A[a]=e.lkp[a].sourceId;const S=new c.e(new I.a({name:"classname",alias:"classname",type:"string"}),null,A);let v="";switch(l){case"midspan":{v=`((${s}='${t}') OR ( ${d}='${t}')) AND (${h} IN (5))`,S.codefield=j.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${p} ELSE ${O} END`,e.associations.getFieldsIndex());const n=Object(y.c)(c.a.findField(e.associations.fields,d));n.name=x,n.alias=x,E=new c.d(n,j.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),D=e.unVersion>=4?new c.c(c.a.findField(e.associations.fields,i.get("PERCENTALONG").name)):new c.d(new I.a({name:"percentalong",alias:"percentalong",type:"double"}),j.WhereClause.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{v=`((${s}='${t}') OR ( ${d}='${t}')) AND (${h} IN (4,6))`,S.codefield=j.WhereClause.create(`CASE WHEN (${s}='${t}') THEN ${p} ELSE ${O} END`,e.associations.getFieldsIndex());const n=Object(y.c)(c.a.findField(e.associations.fields,d));n.name=x,n.alias=x,E=new c.d(n,j.WhereClause.create(`CASE WHEN (${d}='${t}') THEN ${s} ELSE ${d} END`,e.associations.getFieldsIndex())),w=new c.d(new I.a({name:"side",alias:"side",type:"string"}),j.WhereClause.create(`CASE WHEN (${h}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=s+"='@T'",a=d+"='@T'";null!==n&&(r+=` AND ${b}=@A`,a+=` AND ${m}=@A`),v="(("+r+") OR ("+a+"))",v=Object(o.m)(v,"@T",t),r=Object(o.m)(r,"@T",t),null!==n&&(r=Object(o.m)(r,"@A",n.toString()),v=Object(o.m)(v,"@A",n.toString())),S.codefield=j.WhereClause.create("CASE WHEN "+r+` THEN ${p} ELSE ${O} END`,e.associations.getFieldsIndex());const i=Object(y.c)(c.a.findField(e.associations.fields,d));i.name=x,i.alias=x,E=new c.d(i,j.WhereClause.create("CASE WHEN "+r+` THEN ${d} ELSE ${s} END`,e.associations.getFieldsIndex()));break}case"container":v=`${s}='${t}' AND ${h} = 2`,null!==n&&(v+=` AND ${b} = `+n.toString()),S.codefield=p,v="( "+v+" )",E=new c.b(c.a.findField(e.associations.fields,d),x,x);case"content":v=`(${d}='${t}' AND ${h} = 2)`,null!==n&&(v+=` AND ${m} = `+n.toString()),S.codefield=O,v="( "+v+" )",E=new c.b(c.a.findField(e.associations.fields,s),x,x);break;case"structure":v=`(${s}='${t}' AND ${h} = 3)`,null!==n&&(v+=` AND ${b} = `+n.toString()),S.codefield=p,v="( "+v+" )",E=new c.b(c.a.findField(e.associations.fields,d),x,N);break;case"attached":v=`(${d}='${t}' AND ${h} = 3)`,null!==n&&(v+=` AND ${m} = `+n.toString()),S.codefield=O,v="( "+v+" )",E=new c.b(c.a.findField(e.associations.fields,s),x,N);break;default:throw new Error("Invalid Parameter")}return r&&(v="1 <> 1"),new c.a({parentfeatureset:e.associations,adaptedFields:[new c.c(c.a.findField(e.associations.fields,F)),new c.c(c.a.findField(e.associations.fields,g)),E,w,S,D],extraFilter:v?j.WhereClause.create(v,e.associations.getFieldsIndex()):null})})})},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(n,r,i)=>(Object(o.J)(i,3,3),Object(o.I)(i[0])?i[0].load().then(n=>{const r=[],l=[];let s=!1,c=[];if(Object(o.z)(i[1]))c.push(i[1]);else if(i[1]instanceof a.a)c.push(i[1]);else if(Object(o.u)(i[1]))c=i[1];else{if(!Object(o.v)(i[1]))return e.failDefferred("Illegal Value: GroupBy");c=i[1].toArray()}for(const t of c)if(Object(o.z)(t)){const e=j.WhereClause.create(Object(o.x)(t),n.getFieldsIndex()),a=!0===Object(O.c)(e)?Object(o.x)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.a))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:j.WhereClause.create(i||a,n.getFieldsIndex())})}}if(c=[],Object(o.z)(i[2]))c.push(i[2]);else if(Object(o.u)(i[2]))c=i[2];else if(Object(o.v)(i[2]))c=i[2].toArray();else{if(!(i[2]instanceof a.a))return e.failDefferred("Illegal Value: GroupBy");c.push(i[2])}for(const t of c){if(!(t instanceof a.a))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"",a=t.hasField("statistic")?t.field("statistic"):"",i=t.hasField("expression")?t.field("expression"):"";if(!r||!a||!i)return e.failDefferred("Illegal Value: GroupBy");l.push({name:r,statistic:a.toLowerCase(),expression:j.WhereClause.create(i,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of l)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const u=[];for(const a of r)u.push(E(a.expression,e,t));for(const a of l)u.push(E(a.expression,e,t));return u.length>0?Object(g.b)(u).then(()=>Object(g.t)(i[0].groupby(r,l))):Object(g.t)(i[0].groupby(r,l))}):e.failDefferred("Illegal Value: GroupBy")))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(n,r,i)=>Object(o.I)(i[0])?(Object(o.J)(i,2,2),i[0].load().then(n=>{const r=[];let l=[];if(Object(o.z)(i[1]))l.push(i[1]);else if(i[1]instanceof a.a)l.push(i[1]);else if(Object(o.u)(i[1]))l=i[1];else{if(!Object(o.v)(i[1]))return e.failDefferred("Illegal Value: GroupBy");l=i[1].toArray()}let s=!1;for(const t of l)if(Object(o.z)(t)){const e=j.WhereClause.create(Object(o.x)(t),n.getFieldsIndex()),a=!0===Object(O.c)(e)?Object(o.x)(t):"%%%%FIELDNAME";r.push({name:a,expression:e}),"%%%%FIELDNAME"===a&&(s=!0)}else{if(!(t instanceof a.a))return e.failDefferred("Illegal Value: GroupBy");{const a=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",i=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===a&&(s=!0),!a)return e.failDefferred("Illegal Value: GroupBy");r.push({name:a,expression:j.WhereClause.create(i||a,n.getFieldsIndex())})}}if(s){const e={};for(const r of n.fields)e[r.name.toLowerCase()]=1;for(const n of r)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of r)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const c=[];for(const a of r)c.push(E(a.expression,e,t));return c.length>0?Object(g.b)(c).then(()=>Object(g.t)(i[0].groupby(r,[]))):Object(g.t)(i[0].groupby(r,[]))})):function(e,t,n,r){if(1===r.length){if(Object(o.u)(r[0]))return Object(h.a)(e,r[0],-1);if(Object(o.v)(r[0]))return Object(h.a)(e,r[0].toArray(),-1)}return Object(h.a)(e,r,-1)}("distinct",0,0,i))})}}}]);
//# sourceMappingURL=162.f351d2e7.chunk.js.map