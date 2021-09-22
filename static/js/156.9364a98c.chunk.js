(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[156],{473:function(t,e,a){"use strict";a.r(e),a.d(e,"calcite_flow",(function(){return f}));var n=a(299),i=a(554),r=function(t,e,a,n){function i(t){return t instanceof a?t:new a((function(e){e(t)}))}return new(a||(a=Promise))((function(a,r){function o(t){try{l(n.next(t))}catch(t){r(t)}}function s(t){try{l(n.throw(t))}catch(t){r(t)}}function l(t){t.done?a(t.value):i(t.value).then(o,s)}l((n=n.apply(t,e||[])).next())}))},o=function(t,e){var a,n,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return l([t,e])}}function l(r){if(a)throw new TypeError("Generator is already executing.");for(;o;)try{if(a=1,n&&(i=2&r[0]?n.return:r[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,r[1])).done)return i;switch(n=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,n=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=e.call(t,o)}catch(t){r=[6,t],n=0}finally{a=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},s="frame",l="frame--advancing",c="frame--retreating",f=function(){function t(t){var e=this;Object(n.j)(this,t),this.panelCount=0,this.flowDirection=null,this.panels=[],this.getFlowDirection=function(t,e){return t&&e>1||t>1?e<t?"retreating":"advancing":null},this.updateFlowProps=function(){var t=e.panels,a=Array.from(e.el.querySelectorAll("calcite-panel")),n=t.length,i=a.length,r=a[i-1],o=a[i-2];if(i&&r&&a.forEach((function(t){t.showBackButton=i>1,t.hidden=t!==r})),o&&(o.menuOpen=!1),e.panels=a,n!==i){var s=e.getFlowDirection(n,i);e.panelCount=i,e.flowDirection=s}},this.panelItemMutationObserver=Object(i.a)("mutation",this.updateFlowProps)}return t.prototype.back=function(){return r(this,void 0,void 0,(function(){var t;return o(this,(function(e){return(t=this.el.querySelector("calcite-panel:last-child"))?[2,(t.beforeBack?t.beforeBack:function(){return Promise.resolve()}).call(t).then((function(){return t.remove(),t}))]:[2]}))}))},t.prototype.connectedCallback=function(){var t;null===(t=this.panelItemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()},t.prototype.disconnectedCallback=function(){var t;null===(t=this.panelItemMutationObserver)||void 0===t||t.disconnect()},t.prototype.handleCalcitePanelBackClick=function(){this.back()},t.prototype.render=function(){var t,e=this.flowDirection,a=this.panelCount,i=((t={})[s]=!0,t[l]="advancing"===e,t[c]="retreating"===e,t);return Object(n.h)("div",{class:i,key:a},Object(n.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),t}();f.style="@-webkit-keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:300ms}.calcite-animate{opacity:0;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:var(--calcite-animation-timing);animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{-webkit-animation-name:in;animation-name:in}.calcite-animate__in-down{-webkit-animation-name:in-down;animation-name:in-down}.calcite-animate__in-up{-webkit-animation-name:in-up;animation-name:in-up}.calcite-animate__in-scale{-webkit-animation-name:in-scale;animation-name:in-scale}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;width:100%;overflow:hidden;position:relative}:host .frame{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;-ms-flex-direction:column;flex-direction:column;position:relative}:host ::slotted(calcite-panel){height:100%}:host ::slotted(.calcite-match-height:last-child){display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;overflow:hidden}:host .frame--advancing{-webkit-animation:calcite-frame-advance 150ms ease-in-out;animation:calcite-frame-advance 150ms ease-in-out}:host .frame--retreating{-webkit-animation:calcite-frame-retreat 150ms ease-in-out;animation:calcite-frame-retreat 150ms ease-in-out}@-webkit-keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{--bg-opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--bg-opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{--bg-opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}"},554:function(t,e,a){"use strict";function n(t,e,a){return new(function(t){return"intersection"===t?IntersectionObserver:"mutation"===t?MutationObserver:ResizeObserver}(t))(e,a)}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=156.9364a98c.chunk.js.map