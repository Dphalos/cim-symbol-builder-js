(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[58],{1016:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return v}));var s=i(0),r=i(9),a=i(4),n=i(12),o=i(1),h=(i(5),i(6),i(2)),c=i(34),l=i(619),d=i(550),p=i(667),u=i(549),b=i(605),y=i(91),g=i(817);const m=e=>{let t=class extends e{initialize(){this.exportImageParameters=new g.a({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){var e;return null==(e=this.exportImageParameters)||e.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(e){const{layer:t}=this;if(!e)return Promise.reject(new r.a("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:t}));const{popupEnabled:i}=t;if(!i)return Promise.reject(new r.a("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:i}));const s=this.createFetchPopupFeaturesQuery(e);if(!s)return Promise.resolve([]);const{extent:a,width:n,height:o,x:h,y:c}=s;if(!(a&&n&&o))throw new r.a("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:a,width:n,height:o});const l=t.fetchFeatureInfo(a,n,o,h,c);return Promise.resolve(l?[l]:[])}};return Object(s.a)([Object(o.b)()],t.prototype,"exportImageParameters",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],t.prototype,"exportImageVersion",null),Object(s.a)([Object(o.b)()],t.prototype,"layer",void 0),Object(s.a)([Object(o.b)(y.a)],t.prototype,"timeExtent",void 0),t=Object(s.a)([Object(h.a)("esri.layers.mixins.WMSLayerView")],t),t},O=a.a.getLogger("esri.views.2d.layers.WMSLayerView2D");let j=class extends(m(Object(b.a)(Object(d.a)(u.a)))){initialize(){const{layer:e,view:t}=this;e.supportsSpatialReference(t.spatialReference)||this.addResolvingPromise(Promise.reject(new r.a("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:e})))}hitTest(){return null}update(e){this.strategy.update(e).catch(e=>{Object(n.m)(e)||O.error(e)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:i}=e;this._bitmapContainer=new l.a,this.container.addChild(this._bitmapContainer),this.strategy=new p.a({container:this._bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(this.watch("exportImageVersion",()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t}=this,i=this._bitmapContainer,{x:s,y:r}=e,{spatialReference:a}=t;let n=null,o=0,h=0;if(i.children.some(e=>{const{width:t,height:i,resolution:l,x:d,y:p}=e,u=d+l*t,b=p-l*i;return s>=d&&s<=u&&r<=p&&r>=b&&(n=new c.a({xmin:d,ymin:b,xmax:u,ymax:p,spatialReference:a}),o=t,h=i,!0)}),!n)return null;const l=n.width/o,d=Math.round((s-n.xmin)/l),p=Math.round((n.ymax-r)/l);return{extent:n,width:o,height:h,x:d,y:p}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,i,s){return this.layer.fetchImage(e,t,i,{timeExtent:this.timeExtent,...s})}};Object(s.a)([Object(o.b)()],j.prototype,"strategy",void 0),Object(s.a)([Object(o.b)()],j.prototype,"updating",void 0),j=Object(s.a)([Object(h.a)("esri.views.2d.layers.WMSLayerView2D")],j);var v=j},549:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var s=i(0),r=i(19),a=i(81),n=i(101),o=i(249),h=i(4),c=i(3),l=i(140),d=i(1),p=(i(5),i(6),i(2));let u=class extends(Object(n.b)(Object(o.a)(Object(l.b)(a.a.EventedMixin(r.a))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";throw h.a.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e),e}})}get fullOpacity(){return Object(c.r)(this.get("layer.opacity"),1)*Object(c.r)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer.legendEnabled}get updating(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.get("layer.visible")}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};Object(s.a)([Object(d.b)()],u.prototype,"fullOpacity",null),Object(s.a)([Object(d.b)()],u.prototype,"layer",void 0),Object(s.a)([Object(d.b)()],u.prototype,"parent",void 0),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"suspended",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"suspendInfo",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"legendEnabled",null),Object(s.a)([Object(d.b)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),Object(s.a)([Object(d.b)({readOnly:!0})],u.prototype,"updatingProgress",null),Object(s.a)([Object(d.b)()],u.prototype,"visible",null),u=Object(s.a)([Object(p.a)("esri.views.layers.LayerView")],u);var b=u},550:function(e,t,i){"use strict";i.d(t,"a",(function(){return M}));var s=i(0),r=i(22),a=i(97),n=i(16),o=i(1),h=(i(5),i(6),i(4),i(2)),c=i(579),l=i(10);let d=class extends l.a{};d=Object(s.a)([Object(h.a)("esri.views.layers.support.ClipArea")],d);var p,u=d;let b=p=class extends u{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new p({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"left",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"right",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"top",void 0),Object(s.a)([Object(o.b)({type:[Number,String],json:{write:!0}})],b.prototype,"bottom",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],b.prototype,"version",null),b=p=Object(s.a)([Object(h.a)("esri.views.layers.support.ClipRect")],b);var y,g=b,m=(i(56),i(76)),O=i(17),j=i(34),v=i(86);const x={base:m.a,key:"type",typeMap:{extent:j.a,polygon:v.a}};let f=y=class extends u{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new y({geometry:this.geometry.clone()})}};Object(s.a)([Object(o.b)({types:x,json:{read:O.a,write:!0}})],f.prototype,"geometry",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],f.prototype,"version",null),f=y=Object(s.a)([Object(h.a)("esri.views.layers.support.Geometry")],f);var w=f;let _=class extends u{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};Object(s.a)([Object(o.b)({type:[[[Number]]],json:{write:!0}})],_.prototype,"path",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],_.prototype,"version",null),_=Object(s.a)([Object(h.a)("esri.views.layers.support.Path")],_);var R=_;const S=r.a.ofType({key:"type",base:u,typeMap:{rect:g,path:R,geometry:w}}),M=e=>{let t=class extends e{constructor(){super(...arguments),this.clips=new S,this.moving=!1,this.attached=!1,this.lastUpdateId=-1,this.updateRequested=!1}initialize(){var e;this.container||(this.container=new c.a),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([Object(n.a)(this,"suspended",e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()},!0),Object(n.a)(this,["layer.opacity","container"],()=>{var e,t;this.container&&(this.container.opacity=null!=(e=null==(t=this.layer)?void 0:t.opacity)?e:1)},!0),Object(n.a)(this,["layer.blendMode"],e=>{this.container&&(this.container.blendMode=e)},!0),Object(n.a)(this,["layer.effect"],e=>{this.container&&(this.container.effect=e)},!0),this.clips.on("change",()=>{this.container.clips=this.clips,this.notifyChange("clips")})]),null!=(e=this.view)&&e.whenLayerView?this.view.whenLayerView(this.layer).then(e=>{e!==this||this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{}):this.when().then(()=>{this.attached||this.destroyed||(this.attach(),this.requestUpdate(),this.attached=!0)},()=>{})}destroy(){this.attached&&(this.detach(),this.attached=!1),this.handles.remove("initialize"),this.updateRequested=!1}get updating(){return!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())}isVisibleAtScale(e){let t=!0;const i=this.layer,s=i.minScale,r=i.maxScale;if(null!=s&&null!=r){let i=!s,a=!r;!i&&e<=s&&(i=!0),!a&&e>=r&&(a=!0),t=i&&a}return t}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}isUpdating(){return!1}isRendering(){return!1}canResume(){return!!super.canResume()&&this.isVisibleAtScale(this.view.scale)}};return Object(s.a)([Object(o.b)({type:S,set(e){const t=Object(a.b)(e,this._get("clips"),S);this._set("clips",t)}})],t.prototype,"clips",void 0),Object(s.a)([Object(o.b)()],t.prototype,"moving",void 0),Object(s.a)([Object(o.b)()],t.prototype,"attached",void 0),Object(s.a)([Object(o.b)()],t.prototype,"container",void 0),Object(s.a)([Object(o.b)()],t.prototype,"suspended",void 0),Object(s.a)([Object(o.b)({readOnly:!0})],t.prototype,"updateParameters",void 0),Object(s.a)([Object(o.b)()],t.prototype,"updateRequested",void 0),Object(s.a)([Object(o.b)()],t.prototype,"updating",null),Object(s.a)([Object(o.b)()],t.prototype,"view",void 0),t=Object(s.a)([Object(h.a)("esri.views.2d.layers.LayerView2D")],t),t}},585:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(3);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return Object(s.j)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return Object(s.j)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if(Object(s.i)(t))return;const i=this.filter({pixelBlock:t});if(Object(s.i)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),a=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);a.data.set(r),e.putImageData(a,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return Object(s.i)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},590:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var s=i(3),r=i(183),a=i(246),n=i(298),o=(i(528),i(529),i(5),i(527),i(526),i(532),i(531),i(525)),h=(i(530),i(552)),c=i(585);function l(e,t,i){const s={target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071};return t&&i&&(s.width=t,s.height=i),new o.a(e,s)}class d extends h.a{constructor(e=null,t,i=!0){super(),this.requestRenderOnSourceChangedEnabled=i,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=t,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:Object(a.b)()}}setTransform(e){const t=Object(r.b)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),a=this.resolution/this.pixelRatio/e.resolution,o=a*this.width,h=a*this.height,c=Math.PI*this.rotation/180;Object(r.c)(t,t,Object(n.b)(i,s)),Object(r.c)(t,t,Object(n.b)(o/2,h/2)),Object(r.j)(t,t,-c),Object(r.c)(t,t,Object(n.b)(-o/2,-h/2)),Object(r.g)(t,t,Object(n.b)(o,h)),Object(r.h)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}updateTexture(e){var t;if(!this.stage)return null==(t=this._texture)||t.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this.source?this._texture=l(e,this.sourceWidth,this.sourceHeight):this._texture=l(e));const i=this.source;if(i){if(this._texture.resize(this.sourceWidth,this.sourceHeight),(r=i)&&"render"in r)if(i instanceof c.a){const e=i.getRenderedRasterPixels();this._texture.setData(Object(s.j)(e)?e.renderedRasterPixels:null)}else this._texture.setData(function(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}(i));else(function(e){return e&&!("render"in e)})(i)&&this._texture.setData(i);this.ready()}else this._texture.setData(null);var r}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},605:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(0),r=i(4),a=i(12),n=i(16),o=i(1),h=(i(5),i(6),i(2));const c=e=>{let t=class extends e{initialize(){this.handles.add(Object(n.b)(this,"layer","refresh",()=>{this.doRefresh().catch(e=>{Object(a.m)(e)||r.a.getLogger(this.declaredClass).error(e)})}),"RefreshableLayerView")}};return Object(s.a)([Object(o.b)()],t.prototype,"layer",void 0),t=Object(s.a)([Object(h.a)("esri.layers.mixins.RefreshableLayerView")],t),t}},619:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));var s=i(613),r=i(517),a=i(572);class n extends a.a{get requiresDedicatedFBO(){return this.children.some(e=>"additive"===e.blendFunction)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.a.bitmap],target:()=>this.children,drawPhase:r.c.MAP});return[...super.prepareRenderPasses(e),t]}}},667:function(e,t,i){"use strict";i.d(t,"a",(function(){return S}));var s=i(0),r=i(19),a=i(12),n=i(1),o=(i(5),i(6),i(4),i(2)),h=i(34),c=i(67),l=i(24),d=i(327);const p=Math.PI/180;function u(e,t){const i=t.rotation*p,s=Math.abs(Math.cos(i)),r=Math.abs(Math.sin(i)),[a,n]=t.size;return e[0]=Math.round(n*r+a*s),e[1]=Math.round(n*s+a*r),e}var b=i(590),y=i(334),g=i(124);const m=Object(c.g)(),O=[0,0],j=new g.a(0,0,0,0),v=2048,x=2048,f=!1,w=!1,_=!1;let R=class extends r.a{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=_,this.imageMaxWidth=v,this.imageMaxHeight=x,this.imageRotationSupported=f,this.imageNormalizationSupported=w,this.update=Object(a.i)(async(e,t)=>{if(!e.stationary||this.destroyed)return null;const i=e.state,s=Object(l.e)(i.spatialReference),r=this.hidpi?e.pixelRatio:1,a=this.imageNormalizationSupported&&i.worldScreenWidth&&i.worldScreenWidth<i.size[0];a?(O[0]=i.worldScreenWidth,O[1]=i.size[1]):this.imageRotationSupported?(O[0]=i.size[0],O[1]=i.size[1]):u(O,i);const n=Math.floor(O[0]*r)>this.imageMaxWidth||Math.floor(O[1]*r)>this.imageMaxHeight,o=s&&(i.extent.xmin<s.valid[0]||i.extent.xmax>s.valid[1]),h=!this.imageNormalizationSupported&&o,c=!n&&!h,d=this.imageRotationSupported?i.rotation:0;if(c){const e=a?i.paddedViewState.center:i.center;this._imagePromise=this._singleExport(i,O,e,i.resolution,d,r,t)}else{let e=Math.min(this.imageMaxWidth,this.imageMaxHeight);h&&(e=Math.min(i.worldScreenWidth,e)),this._imagePromise=this._tiledExport(i,e,d,r,t)}return this._imagePromise.then(async e=>{if(this._imagePromise=null,!this.destroyed){this.bitmaps=null!=e?e:[];for(const t of this.container.children)e.includes(t)||t.fadeOut().then(()=>{t.remove()});for(const t of e)this.container.addChild(t),t.fadeIn()}}).catch(e=>{throw this._imagePromise=null,e})},5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(e){for(const t of this.container.children){if(!t.visible||!t.stage)return;e(t),t.invalidateTexture(),t.requestRender()}}async _export(e,t,i,s,r,a){const n=await this.fetchSource(e,Math.floor(t*r),Math.floor(i*r),{rotation:s,pixelRatio:r,signal:a}),o=new b.a(n,"additive");return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=s,o.pixelRatio=r,o}async _singleExport(e,t,i,s,r,a,n){!function(e,t,i,s){const[r,a]=t,[n,o]=s,h=.5*i;e[0]=r-h*n,e[1]=a-h*o,e[2]=r+h*n,e[3]=a+h*o}(m,i,s,t);const o=new h.a(m[0],m[1],m[2],m[3],e.spatialReference);return[await this._export(o,t[0],t[1],r,a,n)]}_tiledExport(e,t,i,s,r){const a=d.a.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),n=new y.a(a),o=n.getTileCoverage(e);if(!o)return null;const c=[];return o.forEach((a,o,l,d)=>{j.set(a,o,l,d),n.getTileBounds(m,j);const p=new h.a(m[0],m[1],m[2],m[3],e.spatialReference);c.push(this._export(p,t,t,i,s,r))}),Promise.all(c)}};Object(s.a)([Object(n.b)()],R.prototype,"_imagePromise",void 0),Object(s.a)([Object(n.b)()],R.prototype,"bitmaps",void 0),Object(s.a)([Object(n.b)()],R.prototype,"container",void 0),Object(s.a)([Object(n.b)()],R.prototype,"fetchSource",void 0),Object(s.a)([Object(n.b)()],R.prototype,"hidpi",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageMaxWidth",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageMaxHeight",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageRotationSupported",void 0),Object(s.a)([Object(n.b)()],R.prototype,"imageNormalizationSupported",void 0),Object(s.a)([Object(n.b)()],R.prototype,"requestUpdate",void 0),Object(s.a)([Object(n.b)()],R.prototype,"updating",null),R=Object(s.a)([Object(o.a)("esri.views.2d.layers.support.ExportStrategy")],R);var S=R},817:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var s=i(0),r=i(19),a=i(101),n=i(1),o=(i(5),i(6),i(4),i(2));const h={visible:"visibleSublayers"};let c=class extends(Object(a.b)(r.a)){constructor(e){super(e),this.scale=0}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.sublayers.on("change",()=>this.notifyChange("visibleSublayers")),e.on("wms-sublayer-update",e=>this.notifyChange(h[e.propertyName]))],"layer"))}get layers(){const{visibleSublayers:e}=this;return e.filter(e=>e.name).map(e=>e.name).join(",")}get version(){this.commitProperty("layers");const e=this.layer;return e&&e.commitProperty("imageTransparency"),(this._get("version")||0)+1}get visibleSublayers(){const{layer:e,scale:t}=this,i=null==e?void 0:e.sublayers,s=[],r=e=>{const{minScale:i,maxScale:a,sublayers:n,visible:o}=e;o&&(0===t||(0===i||t<=i)&&(0===a||t>=a))&&(n?n.forEach(r):s.unshift(e))};return null==i||i.forEach(r),s}toJSON(){const{layer:e,layers:t}=this,{imageFormat:i,imageTransparency:s,version:r}=e;return{format:i,request:"GetMap",service:"WMS",styles:"",transparent:s,version:r,layers:t}}};Object(s.a)([Object(n.b)()],c.prototype,"layer",null),Object(s.a)([Object(n.b)({readOnly:!0})],c.prototype,"layers",null),Object(s.a)([Object(n.b)({type:Number})],c.prototype,"scale",void 0),Object(s.a)([Object(n.b)({readOnly:!0})],c.prototype,"version",null),Object(s.a)([Object(n.b)({readOnly:!0})],c.prototype,"visibleSublayers",null),c=Object(s.a)([Object(o.a)("esri.layers.support.ExportWMSImageParameters")],c)}}]);
//# sourceMappingURL=58.0ffbc68e.chunk.js.map