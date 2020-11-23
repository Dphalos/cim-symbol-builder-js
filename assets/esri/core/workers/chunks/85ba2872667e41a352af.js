self.webpackChunkRemoteClient([137],{554:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return A}));var r=n(2),a=n(95),i=n(135),s=n(260),l=n(112),o=n(107),c=n(160),u=n(412),f=n(496),d=n(129),b=n(194),m=n(420),p=n(498),y=n(423),h=n(422),O=n(424),g=n(500),j=n(116),I=n(501),F=n(539);function E(e,t,n){const a=e.getVariables();if(a.length>0){const i=[];for(let e=0;e<a.length;e++){const r={name:a[e]};i.push(t.evaluateIdentifier(n,r))}return Object(r.b)(i).then(t=>{const n={};for(let e=0;e<a.length;e++)n[a[e]]=t[e];return e.parameters=n,e})}return Object(r.s)(e)}function w(e,t,n=null){for(const n in e)if(n.toLowerCase()===t.toLowerCase())return e[n];return n}function D(e){if(null===e)return null;const t={type:w(e,"type",""),name:w(e,"name","")};if("range"===t.type)t.range=w(e,"range",[]);else{t.codedValues=[];for(const n of w(e,"codedValues",[]))t.codedValues.push({name:w(n,"name",""),code:w(n,"code",null)})}return t}function S(e){if(null===e)return null;const t={},n=w(e,"wkt",null);null!==n&&(t.wkt=n);const r=w(e,"wkid",null);return null!==r&&(t.wkid=r),t}function N(e){if(null===e)return null;const t={hasZ:w(e,"hasz",!1),hasM:w(e,"hasm",!1)},n=w(e,"spatialreference",null);n&&(t.spatialReference=S(n));const r=w(e,"x",null);if(null!==r)return t.x=r,t.y=w(e,"y",null),t;const a=w(e,"rings",null);if(null!==a)return t.rings=a,t;const i=w(e,"paths",null);if(null!==i)return t.paths=i,t;const s=w(e,"points",null);if(null!==s)return t.points=s,t;for(const n of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=w(e,n,null);null!==r&&(t[n]=r)}return t}function A(e){"async"===e.mode&&(e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(a.I)(n,2,4),n[0]instanceof f.a){const e=Object(a.w)(n[1]);let t=Object(a.R)(n[2],null);const r=Object(a.S)(Object(a.R)(n[3],!0));if(null===t&&(t=["*"]),!1===Object(a.t)(t))throw new Error("Invalid Parameter");return n[0].featureSetById(e,r,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{if(Object(a.I)(r,2,5),null===r[0])throw new Error("Portal is required");if(r[0]instanceof s.a){const e=Object(a.w)(r[1]),n=Object(a.w)(r[2]);let i=Object(a.R)(r[3],null);const s=Object(a.S)(Object(a.R)(r[4],!0));if(null===i&&(i=["*"]),!1===Object(a.t)(i))throw new Error("Invalid Parameter");let l=null;return t.services&&t.services.portal&&(l=t.services.portal),l=Object(F.getPortal)(r[0],l),Object(F.constructFeatureSetFromPortalItem)(e,n,t.spatialReference,i,s,l,t.lrucache)}if(!1===Object(a.z)(r[0]))throw new Error("Portal is required");const i=Object(a.w)(r[0]),l=Object(a.w)(r[1]);let o=Object(a.R)(r[2],null);const c=Object(a.S)(Object(a.R)(r[3],!0));if(null===o&&(o=["*"]),!1===Object(a.t)(o))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return Object(F.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,o,c,t.services.portal,t.lrucache);throw new Error("Portal is required")})},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>{if(Object(a.I)(n,2,4),n[0]instanceof f.a){const e=Object(a.w)(n[1]);let t=Object(a.R)(n[2],null);const r=Object(a.S)(Object(a.R)(n[3],!0));if(null===t&&(t=["*"]),!1===Object(a.t)(t))throw new Error("Invalid Parameter");return n[0].featureSetByName(e,r,t)}throw new Error("Invalid Parameter")})},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(e,n,r)=>{Object(a.I)(r,1,1);let s=r[0];const l={layerDefinition:{geometryType:"",objectIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Object(a.z)(s))s=JSON.parse(s),void 0!==s.layerDefinition?(l.layerDefinition=s.layerDefinition,l.featureSet=s.featureSet,s.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=s.layerDefinition.spatialReference)):(l.featureSet.features=s.features,l.featureSet.geometryType=s.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=s.objectIdFieldName,l.layerDefinition.typeIdField=s.typeIdFieldName,l.layerDefinition.fields=s.fields,s.spatialReference&&(l.layerDefinition.spatialReference=s.spatialReference));else{if(!(r[0]instanceof i.a))throw new Error("Invalid Parameter");{s=JSON.parse(r[0].castToText());const e=w(s,"layerdefinition");if(null!==e){l.layerDefinition.geometryType=w(e,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=w(e,"objectidfield",""),l.layerDefinition.typeIdField=w(e,"typeidfield","");const t=w(e,"spatialreference",null);t&&(l.layerDefinition.spatialReference=S(t));for(const t of w(e,"fields",[])){const e={name:w(t,"name",""),alias:w(t,"alias",""),type:w(t,"type",""),nullable:w(t,"nullable",!0),editable:w(t,"editable",!0),length:w(t,"length",null),domain:D(w(t,"domain"))};l.layerDefinition.fields.push(e)}const n=w(s,"featureset",null);if(n){const e={};for(const t of l.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of w(n,"features",[])){const n={},r=w(t,"attributes",{});for(const t in r)n[e[t.toLowerCase()]]=r[t];l.featureSet.features.push({attributes:n,geometry:N(w(t,"geometry",null))})}}}else{l.layerDefinition.geometryType=w(s,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=w(s,"objectidfieldname",""),l.layerDefinition.typeIdField=w(s,"typeidfieldname","");const e=w(s,"spatialreference",null);e&&(l.layerDefinition.spatialReference=S(e));for(const e of w(s,"fields",[])){const t={name:w(e,"name",""),alias:w(e,"alias",""),type:w(e,"type",""),nullable:w(e,"nullable",!0),editable:w(e,"editable",!0),length:w(e,"length",null),domain:D(w(e,"domain"))};l.layerDefinition.fields.push(t)}const t={};for(const e of l.layerDefinition.fields)t[e.name.toLowerCase()]=e.name;for(const e of w(s,"features",[])){const n={},r=w(e,"attributes",{});for(const e in r)n[t[e.toLowerCase()]]=r[e];l.featureSet.features.push({attributes:n,geometry:N(w(e,"geometry",null))})}}}}if(0==(!!(o=l).layerDefinition&&!!o.featureSet&&!1!==function(e,t){for(const t of["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])if(t===e)return!0;return!1}(o.layerDefinition.geometryType)&&null!==o.layerDefinition.objectIdField&&""!==o.layerDefinition.objectIdField&&!1!==Object(a.t)(o.layerDefinition.fields)&&!1!==Object(a.t)(o.featureSet.features)))throw new Error("Invalid Parameter");var o;return I.a.create(l,t.spatialReference)})},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(n,i,s)=>(Object(a.I)(s,2,2),Object(a.J)(s[0])?s[0].load().then(n=>{const a=d.WhereClause.create(s[1],n.getFieldsIndex()),i=a.getVariables();if(i.length>0){const n=[];for(let r=0;r<i.length;r++){const a={name:i[r]};n.push(e.evaluateIdentifier(t,a))}return Object(r.b)(n).then(e=>{const t={};for(let n=0;n<i.length;n++)t[i[n]]=e[n];return a.parameters=t,new m.a({parentfeatureset:s[0],whereclause:a})})}return Object(r.s)(new m.a({parentfeatureset:s[0],whereclause:a}))}):e.failDefferred("Filter cannot accept this parameter type")))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(t,n,i)=>{if(Object(a.I)(i,2,2),Object(a.J)(i[0])){const e=new y.a(i[1]);return Object(r.s)(new h.a({parentfeatureset:i[0],orderbyclause:e}))}return e.failDefferred("Order cannot accept this parameter type")})},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(t,n,i)=>(Object(a.I)(i,2,2),Object(a.J)(i[0])?Object(r.s)(new g.a({parentfeatureset:i[0],topnum:i[1]})):Object(a.t)(i[0])?Object(a.M)(i[1])>=i[0].length?i[0].slice(0):i[0].slice(0,Object(a.M)(i[1])):Object(a.u)(i[0])?Object(a.M)(i[1])>=i[0].length()?i[0].slice(0):i[0].slice(0,Object(a.M)(i[1])):e.failDefferred("Top cannot accept this parameter type")))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(e,t,n)=>(Object(a.I)(n,1,1),Object(a.J)(n[0])?n[0].first(e.abortSignal).then(e=>{if(null!==e){const t=c.a.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e}):Object(a.t)(n[0])?0===n[0].length?Object(r.s)(null):Object(r.s)(n[0][0]):Object(a.u)(n[0])?0===n[0].length()?Object(r.s)(null):Object(r.s)(n[0].get(0)):null))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(a.I)(r,1,2);const s={minsize:-1,maxsize:-1,types:null};if(r.length>1)if(r[1]instanceof i.a){if(r[1].hasField("minsize")&&(s.minsize=Object(a.M)(r[1].field("minsize"))),r[1].hasField("maxsize")&&(s.maxsize=Object(a.M)(r[1].field("maxsize"))),r[1].hasField("types")){const e=Object(a.q)(r[1].field("types"),!1);e.length>0&&(s.types=e)}}else if(null!==r[1])throw new Error("Invalid Parameter");if(r[0]instanceof c.a){let e=r[0]._layer;return e instanceof j.default&&(e=Object(F.constructFeatureSet)(e,t.spatialReference,["*"],!0,t.lrucache)),null===e||!1===Object(a.J)(e)?[]:e.load().then(()=>e.queryAttachments(r[0].field(e.objectIdField),s.minsize,s.maxsize,s.types))}if(null===r[0])return[];throw new Error("Invalid Parameter")})},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(a.I)(r,2,4);const i=r[0],s=Object(a.w)(r[1]);let l=Object(a.R)(r[2],null);const o=Object(a.S)(Object(a.R)(r[3],!0));if(null===l&&(l=["*"]),!1===Object(a.t)(l))throw new Error("Invalid Parameter");if(null===r[0])return null;if(!(r[0]instanceof c.a))throw new Error("Invalid Parameter");let u=i._layer;return u instanceof j.default&&(u=Object(F.constructFeatureSet)(u,t.spatialReference,["*"],!0,t.lrucache)),null===u||!1===Object(a.J)(u)?null:u.load().then(e=>{const n=e.relationshipMetaData().filter(e=>e.name===s);if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return Object(F.constructFeatureSetFromRelationship)(e,n[0],i.field(e.objectIdField),e.spatialReference,l,o,t.lrucache);let r=e.serviceUrl();return r?(r="/"===r.charAt(r.length-1)?r+n[0].relatedTableId.toString():r+"/"+n[0].relatedTableId.toString(),Object(F.constructFeatureSetFromUrl)(r,e.spatialReference,l,o,t.lrucache).then(t=>t.load().then(()=>t.relationshipMetaData()).then(r=>{if(r=r.filter(e=>e.id===n[0].id),!1===i.hasField(n[0].keyField)||null===i.field(n[0].keyField))return e.getFeatureByObjectId(i.field(e.objectIdField),[n[0].keyField]).then(e=>{if(e){const a=d.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:e.attributes[n[0].keyField]},t.filter(a)}return new O.a({parentfeatureset:t})});const a=d.WhereClause.create(r[0].keyField+"= @id",t.getFieldsIndex());return a.parameters={id:i.field(n[0].keyField)},t.filter(a)}))):null})})},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(e,n,r)=>{Object(a.I)(r,2,3);const i=r[0],s=Object(a.w)(Object(a.R)(r[1],"")).toLowerCase(),u=Object(a.z)(r[2])?Object(a.w)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof c.a))throw new Error("Invalid Parameter");let f=i._layer;return f instanceof j.default&&(f=Object(F.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache)),null===f||!1===Object(a.J)(f)?null:f.load().then(()=>{const e=f.serviceUrl();return Object(F.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)}).then(e=>{let t=null,n=null,r=!1;if(null!==u&&""!==u&&void 0!==u){for(const t of e.terminals)t.terminalName===u&&(n=t.terminalId);null===n&&(r=!0)}const c=e.associations.getFieldsIndex(),b=c.get("TOGLOBALID").name,m=c.get("FROMGLOBALID").name,y=c.get("TOTERMINALID").name,h=c.get("FROMTERMINALID").name,O=c.get("FROMNETWORKSOURCEID").name,g=c.get("TONETWORKSOURCEID").name,j=c.get("ASSOCIATIONTYPE").name,I=c.get("ISCONTENTVISIBLE").name,F=c.get("OBJECTID").name;for(const e of f.fields)if("global-id"===e.type){t=i.field(e.name);break}let E=null,w=new p.d(new l.a({name:"percentalong",alias:"percentalong",type:"double"}),d.WhereClause.create("0",e.associations.getFieldsIndex())),D=new p.d(new l.a({name:"side",alias:"side",type:"string"}),d.WhereClause.create("''",e.associations.getFieldsIndex()));const S="globalid",N="globalId",A={};for(const t in e.lkp)A[t]=e.lkp[t].sourceId;const x=new p.e(new l.a({name:"classname",alias:"classname",type:"string"}),null,A);let $="";switch(s){case"midspan":{$=`((${b}='${t}') OR ( ${m}='${t}')) AND (${j} IN (5))`,x.codefield=d.WhereClause.create(`CASE WHEN (${b}='${t}') THEN ${O} ELSE ${g} END`,e.associations.getFieldsIndex());const n=Object(o.c)(p.a.findField(e.associations.fields,m));n.name=S,n.alias=S,E=new p.d(n,d.WhereClause.create(`CASE WHEN (${m}='${t}') THEN ${b} ELSE ${m} END`,e.associations.getFieldsIndex())),w=e.unVersion>=4?new p.c(p.a.findField(e.associations.fields,c.get("PERCENTALONG").name)):new p.d(new l.a({name:"percentalong",alias:"percentalong",type:"double"}),d.WhereClause.create("0",e.associations.getFieldsIndex()));break}case"junctionedge":{$=`((${b}='${t}') OR ( ${m}='${t}')) AND (${j} IN (4,6))`,x.codefield=d.WhereClause.create(`CASE WHEN (${b}='${t}') THEN ${O} ELSE ${g} END`,e.associations.getFieldsIndex());const n=Object(o.c)(p.a.findField(e.associations.fields,m));n.name=S,n.alias=S,E=new p.d(n,d.WhereClause.create(`CASE WHEN (${m}='${t}') THEN ${b} ELSE ${m} END`,e.associations.getFieldsIndex())),D=new p.d(new l.a({name:"side",alias:"side",type:"string"}),d.WhereClause.create(`CASE WHEN (${j}=4) THEN 'from' ELSE 'to' END`,e.associations.getFieldsIndex()));break}case"connected":{let r=b+"='@T'",i=m+"='@T'";null!==n&&(r+=` AND ${y}=@A`,i+=` AND ${h}=@A`),$="(("+r+") OR ("+i+"))",$=Object(a.b)($,"@T",t),r=Object(a.b)(r,"@T",t),null!==n&&(r=Object(a.b)(r,"@A",n.toString()),$=Object(a.b)($,"@A",n.toString())),x.codefield=d.WhereClause.create("CASE WHEN "+r+` THEN ${O} ELSE ${g} END`,e.associations.getFieldsIndex());const s=Object(o.c)(p.a.findField(e.associations.fields,m));s.name=S,s.alias=S,E=new p.d(s,d.WhereClause.create("CASE WHEN "+r+` THEN ${m} ELSE ${b} END`,e.associations.getFieldsIndex()));break}case"container":$=`${b}='${t}' AND ${j} = 2`,null!==n&&($+=` AND ${y} = `+n.toString()),x.codefield=O,$="( "+$+" )",E=new p.b(p.a.findField(e.associations.fields,m),S,S);case"content":$=`(${m}='${t}' AND ${j} = 2)`,null!==n&&($+=` AND ${h} = `+n.toString()),x.codefield=g,$="( "+$+" )",E=new p.b(p.a.findField(e.associations.fields,b),S,S);break;case"structure":$=`(${b}='${t}' AND ${j} = 3)`,null!==n&&($+=` AND ${y} = `+n.toString()),x.codefield=O,$="( "+$+" )",E=new p.b(p.a.findField(e.associations.fields,m),S,N);break;case"attached":$=`(${m}='${t}' AND ${j} = 3)`,null!==n&&($+=` AND ${h} = `+n.toString()),x.codefield=g,$="( "+$+" )",E=new p.b(p.a.findField(e.associations.fields,b),S,N);break;default:throw new Error("Invalid Parameter")}return r&&($="1 <> 1"),new p.a({parentfeatureset:e.associations,adaptedFields:[new p.c(p.a.findField(e.associations.fields,F)),new p.c(p.a.findField(e.associations.fields,I)),E,D,x,w],extraFilter:$?d.WhereClause.create($,e.associations.getFieldsIndex()):null})})})},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(n,s,l)=>(Object(a.I)(l,3,3),Object(a.J)(l[0])?l[0].load().then(n=>{const s=[],o=[];let c=!1,u=[];if(Object(a.z)(l[1]))u.push(l[1]);else if(l[1]instanceof i.a)u.push(l[1]);else if(Object(a.t)(l[1]))u=l[1];else{if(!Object(a.u)(l[1]))return e.failDefferred("Illegal Value: GroupBy");u=l[1].toArray()}for(const t of u)if(Object(a.z)(t)){const e=d.WhereClause.create(Object(a.w)(t),n.getFieldsIndex()),r=!0===Object(b.c)(e)?Object(a.w)(t):"%%%%FIELDNAME";s.push({name:r,expression:e}),"%%%%FIELDNAME"===r&&(c=!0)}else{if(!(t instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",a=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===r&&(c=!0),!r)return e.failDefferred("Illegal Value: GroupBy");s.push({name:r,expression:d.WhereClause.create(a||r,n.getFieldsIndex())})}}if(u=[],Object(a.z)(l[2]))u.push(l[2]);else if(Object(a.t)(l[2]))u=l[2];else if(Object(a.u)(l[2]))u=l[2].toArray();else{if(!(l[2]instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");u.push(l[2])}for(const t of u){if(!(t instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"",a=t.hasField("statistic")?t.field("statistic"):"",i=t.hasField("expression")?t.field("expression"):"";if(!r||!a||!i)return e.failDefferred("Illegal Value: GroupBy");o.push({name:r,statistic:a.toLowerCase(),expression:d.WhereClause.create(i,n.getFieldsIndex())})}}if(c){const e={};for(const t of n.fields)e[t.name.toLowerCase()]=1;for(const t of s)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);for(const t of o)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const f=[];for(const n of s)f.push(E(n.expression,e,t));for(const n of o)f.push(E(n.expression,e,t));return f.length>0?Object(r.b)(f).then(()=>Object(r.s)(l[0].groupby(s,o))):Object(r.s)(l[0].groupby(s,o))}):e.failDefferred("Illegal Value: GroupBy")))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(n,s,l)=>Object(a.J)(l[0])?(Object(a.I)(l,2,2),l[0].load().then(n=>{const s=[];let o=[];if(Object(a.z)(l[1]))o.push(l[1]);else if(l[1]instanceof i.a)o.push(l[1]);else if(Object(a.t)(l[1]))o=l[1];else{if(!Object(a.u)(l[1]))return e.failDefferred("Illegal Value: GroupBy");o=l[1].toArray()}let c=!1;for(const t of o)if(Object(a.z)(t)){const e=d.WhereClause.create(Object(a.w)(t),n.getFieldsIndex()),r=!0===Object(b.c)(e)?Object(a.w)(t):"%%%%FIELDNAME";s.push({name:r,expression:e}),"%%%%FIELDNAME"===r&&(c=!0)}else{if(!(t instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");{const r=t.hasField("name")?t.field("name"):"%%%%FIELDNAME",a=t.hasField("expression")?t.field("expression"):"";if("%%%%FIELDNAME"===r&&(c=!0),!r)return e.failDefferred("Illegal Value: GroupBy");s.push({name:r,expression:d.WhereClause.create(a||r,n.getFieldsIndex())})}}if(c){const e={};for(const t of n.fields)e[t.name.toLowerCase()]=1;for(const t of s)"%%%%FIELDNAME"!==t.name&&(e[t.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString()}}const u=[];for(const n of s)u.push(E(n.expression,e,t));return u.length>0?Object(r.b)(u).then(()=>Object(r.s)(l[0].groupby(s,[]))):Object(r.s)(l[0].groupby(s,[]))})):function(e,t,n,r){if(1===r.length){if(Object(a.t)(r[0]))return Object(u.a)(e,r[0],-1);if(Object(a.u)(r[0]))return Object(u.a)(e,r[0].toArray(),-1)}return Object(u.a)(e,r,-1)}("distinct",0,0,l))})}}});