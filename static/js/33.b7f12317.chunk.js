(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[33],{987:function(t,e,n){"use strict";n.r(e),n.d(e,"loadGLTFMesh",(function(){return T}));var o=n(23),r=n(45),c=n(172),a=n(3),s=n(183),i=n(595),u=n(62),l=n(680),b=n(812),j=n(814),f=n(813),O=n(737),p=n(608),m=n(645),d=n(877),g=n(889),x=n(672),h=n(878),w=n(887),y=n(879),v=n(847),C=n(880),B=n(674),A=n(756),M=n(755);async function T(t,e,n){const s=new h.a(function(t){return null!=t&&t.resolveFile?{busy:!1,request:async(e,n,o)=>{const c=t.resolveFile(e),s="image"===n?"image":"binary"===n?"array-buffer":"json";return(await Object(r.default)(c,{responseType:s,signal:Object(a.j)(o)?o.signal:null})).data}}:null}(n)),i=(await Object(w.a)(s,e,n,!0)).model,b=i.lods.shift(),m=new Map,d=new Map;i.textures.forEach((t,e)=>m.set(e,function(t){return new f.a({data:t.data,wrap:E(t.parameters.wrap)})}(t))),i.materials.forEach((t,e)=>d.set(e,function(t,e){const n=new o.a(function(t,e){return Object(l.c)(R(t[0]),R(t[1]),R(t[2]),e)}(t.color,t.opacity)),r=t.emissiveFactor?new o.a(function(t){return Object(u.g)(R(t[0]),R(t[1]),R(t[2]))}(t.emissiveFactor)):null;return new j.a({color:n,colorTexture:Object(a.q)(Object(a.b)(t.textureColor,t=>e.get(t))),normalTexture:Object(a.q)(Object(a.b)(t.textureNormal,t=>e.get(t))),emissiveColor:r,emissiveTexture:Object(a.q)(Object(a.b)(t.textureEmissive,t=>e.get(t))),occlusionTexture:Object(a.q)(Object(a.b)(t.textureOcclusion,t=>e.get(t))),alphaMode:S(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:Object(a.q)(Object(a.b)(t.textureMetallicRoughness,t=>e.get(t)))})}(t,m)));const y=function(t){let e=0;const n={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,r=new Map,a=[];for(const s of t.parts){const{attributes:{position:t,normal:i,color:u,tangent:l,texCoord0:b}}=s,j=`\n      ${$(t,o)}/\n      ${$(i,o)}/\n      ${$(u,o)}/\n      ${$(l,o)}/\n      ${$(b,o)}/\n      ${q(s.transform)}\n    `;let f=!1;const O=Object(c.a)(r,j,()=>(f=!0,{start:e,length:t.count}));f&&(e+=t.count),i&&(n.normal=!0),u&&(n.color=!0),l&&(n.tangent=!0),b&&(n.texCoord0=!0),a.push({gltf:s,writeVertices:f,region:O})}return{vertexAttributes:{position:Object(g.a)(p.v,e),normal:n.normal?Object(g.a)(p.u,e):null,tangent:n.tangent?Object(g.a)(p.C,e):null,color:n.color?Object(g.a)(p.J,e):null,texCoord0:n.texCoord0?Object(g.a)(p.m,e):null},parts:a,components:[]}}(b);for(const o of y.parts)F(y,o,d);const{position:v,normal:C,tangent:B,color:A,texCoord0:M}=y.vertexAttributes,T={position:v.typedBuffer,normal:Object(a.j)(C)?C.typedBuffer:null,tangent:Object(a.j)(B)?B.typedBuffer:null,uv:Object(a.j)(M)?M.typedBuffer:null,color:Object(a.j)(A)?A.typedBuffer:null},J=Object(x.c)(T,t,n);return{transform:J.transform,components:y.components,spatialReference:t.spatialReference,vertexAttributes:new O.c({position:J.vertexAttributes.position,normal:J.vertexAttributes.normal,tangent:J.vertexAttributes.tangent,color:T.color,uv:T.uv})}}function $(t,e){if(Object(a.i)(t))return"-";const n=t.typedBuffer;return`${Object(c.a)(e,n.buffer,()=>e.size)}/${n.byteOffset}/${n.byteLength}`}function q(t){return Object(a.j)(t)?t.toString():"-"}function F(t,e,n){e.writeVertices&&function(t,e){const{position:n,normal:o,tangent:r,color:c,texCoord0:u}=t.vertexAttributes,l=e.region.start,{attributes:b,transform:j}=e.gltf,f=b.position.count;if(Object(m.e)(n.slice(l,f),b.position,j),Object(a.j)(b.normal)&&Object(a.j)(o)){const t=Object(s.a)(Object(i.b)(),j);Object(m.a)(o.slice(l,f),b.normal,t)}else Object(a.j)(o)&&Object(B.b)(o,0,0,1,{dstIndex:l,count:f});if(Object(a.j)(b.tangent)&&Object(a.j)(r)){const t=Object(s.a)(Object(i.b)(),j);Object(d.c)(r.slice(l,f),b.tangent,t)}else Object(a.j)(r)&&Object(A.b)(r,0,0,1,1,{dstIndex:l,count:f});if(Object(a.j)(b.texCoord0)&&Object(a.j)(u)?Object(M.b)(u.slice(l,f),b.texCoord0):Object(a.j)(u)&&Object(M.a)(u,0,0,{dstIndex:l,count:f}),Object(a.j)(b.color)&&Object(a.j)(c)){const t=b.color,e=c.slice(l,f);if(4===t.elementCount)t instanceof p.C?Object(d.b)(e,t,255):t instanceof p.J?Object(A.a)(e,t):t instanceof p.H&&Object(d.a)(e,t,8);else{Object(A.b)(e,255,255,255,255);const n=p.B.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof p.u?Object(m.d)(n,t,255):t instanceof p.B?Object(B.a)(n,t):t instanceof p.z&&Object(m.b)(n,t,8)}}else Object(a.j)(c)&&Object(A.b)(c.slice(l,f),255,255,255,255)}(t,e);const o=e.gltf,r=function(t,e){switch(e){case 4:return Object(y.c)(t,v.d);case 5:return Object(y.b)(t);case 6:return Object(y.a)(t)}}(o.indices||o.attributes.position.count,o.primitiveType),c=e.region.start;if(c)for(let a=0;a<r.length;a++)r[a]+=c;t.components.push(new b.a({faces:r,material:n.get(o.material),trustSourceNormals:!0}))}function S(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function E(t){return{horizontal:J(t.s),vertical:J(t.t)}}function J(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function R(t){return t**(1/C.a)*255}}}]);
//# sourceMappingURL=33.b7f12317.chunk.js.map