(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[234],{983:function(e,t,s){"use strict";s.r(t),s.d(t,"Opacity",(function(){return i}));s(528),s(529),s(5),s(527),s(526),s(532),s(531);var r=s(525);s(530);class i{constructor(){this._size=[0,0]}dispose(){this._layerFBOTexture&&(this._layerFBOTexture.dispose(),this._layerFBOTexture=null)}draw(e,t,s){const{width:r,height:i}=t;this._createOrResizeResources(e,r,i);const{context:a,painter:n}=e,{amount:l}=s,h=a.gl,o=this._layerFBOTexture;a.bindFramebuffer(t),t.copyToTexture(0,0,r,i,0,0,o),a.setBlendingEnabled(!0),a.setStencilTestEnabled(!1),a.setDepthTestEnabled(!1),a.setClearColor(0,0,0,0),a.clear(h.COLOR_BUFFER_BIT),n.blitTexture(a,o,9728,l)}_createOrResizeResources(e,t,s){const{context:i}=e;this._layerFBOTexture&&this._size[0]===t&&this._size[1]===s||(this._size[0]=t,this._size[1]=s,this._layerFBOTexture?this._layerFBOTexture.resize(t,s):this._layerFBOTexture=new r.a(i,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9728,flipped:!1,width:t,height:s}))}}}}]);
//# sourceMappingURL=234.1cfc5082.chunk.js.map