(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[34],{117:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return h}));var r=Array.prototype.slice,i=function(t){return t};function o(t){return"translate("+(t+.5)+",0)"}function a(t){return"translate(0,"+(t+.5)+")"}function c(t){return function(e){return+t(e)}}function s(t){var e=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}function u(){return!this.__axis}function f(t,e){var n=[],f=null,l=null,h=6,d=6,v=3,p=1===t||4===t?-1:1,g=4===t||2===t?"x":"y",b=1===t||3===t?o:a;function m(r){var o=null==f?e.ticks?e.ticks.apply(e,n):e.domain():f,a=null==l?e.tickFormat?e.tickFormat.apply(e,n):i:l,m=Math.max(h,0)+v,x=e.range(),w=+x[0]+.5,y=+x[x.length-1]+.5,E=(e.bandwidth?s:c)(e.copy()),T=r.selection?r.selection():r,z=T.selectAll(".domain").data([null]),S=T.selectAll(".tick").data(o,e).order(),k=S.exit(),M=S.enter().append("g").attr("class","tick"),O=S.select("line"),B=S.select("text");z=z.merge(z.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),S=S.merge(M),O=O.merge(M.append("line").attr("stroke","currentColor").attr(g+"2",p*h)),B=B.merge(M.append("text").attr("fill","currentColor").attr(g,p*m).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),r!==T&&(z=z.transition(r),S=S.transition(r),O=O.transition(r),B=B.transition(r),k=k.transition(r).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=E(t))?b(t):this.getAttribute("transform")})),M.attr("opacity",1e-6).attr("transform",(function(t){var e=this.parentNode.__axis;return b(e&&isFinite(e=e(t))?e:E(t))}))),k.remove(),z.attr("d",4===t||2==t?d?"M"+p*d+","+w+"H0.5V"+y+"H"+p*d:"M0.5,"+w+"V"+y:d?"M"+w+","+p*d+"V0.5H"+y+"V"+p*d:"M"+w+",0.5H"+y),S.attr("opacity",1).attr("transform",(function(t){return b(E(t))})),O.attr(g+"2",p*h),B.attr(g,p*m).text(a),T.filter(u).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),T.each((function(){this.__axis=E}))}return m.scale=function(t){return arguments.length?(e=t,m):e},m.ticks=function(){return n=r.call(arguments),m},m.tickArguments=function(t){return arguments.length?(n=null==t?[]:r.call(t),m):n.slice()},m.tickValues=function(t){return arguments.length?(f=null==t?null:r.call(t),m):f&&f.slice()},m.tickFormat=function(t){return arguments.length?(l=t,m):l},m.tickSize=function(t){return arguments.length?(h=d=+t,m):h},m.tickSizeInner=function(t){return arguments.length?(h=+t,m):h},m.tickSizeOuter=function(t){return arguments.length?(d=+t,m):d},m.tickPadding=function(t){return arguments.length?(v=+t,m):v},m}function l(t){return f(2,t)}function h(t){return f(3,t)}},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(t){t.BORDER_BOX="border-box",t.CONTENT_BOX="content-box",t.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var a,c=function(){function t(t,e,n,r){return this.x=t,this.y=e,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return t.prototype.toJSON=function(){var t=this;return{x:t.x,y:t.y,top:t.top,right:t.right,bottom:t.bottom,left:t.left,width:t.width,height:t.height}},t.fromRect=function(e){return new t(e.x,e.y,e.width,e.height)},t}(),s=function(t){return t instanceof SVGElement&&"getBBox"in t},u=function(t){if(s(t)){var e=t.getBBox(),n=e.width,r=e.height;return!n&&!r}var i=t,o=i.offsetWidth,a=i.offsetHeight;return!(o||a||t.getClientRects().length)},f=function(t){var e,n,r=null===(n=null===(e=t)||void 0===e?void 0:e.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&t instanceof r.Element)},l="undefined"!==typeof window?window:{},h=new WeakMap,d=/auto|scroll/,v=/^tb|vertical/,p=/msie|trident/i.test(l.navigator&&l.navigator.userAgent),g=function(t){return parseFloat(t||"0")},b=function(t,e,n){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?e:t)||0,blockSize:(n?t:e)||0})},m=Object.freeze({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new c(0,0,0,0)}),x=function(t,e){if(void 0===e&&(e=!1),h.has(t)&&!e)return h.get(t);if(u(t))return h.set(t,m),m;var n=getComputedStyle(t),r=s(t)&&t.ownerSVGElement&&t.getBBox(),i=!p&&"border-box"===n.boxSizing,o=v.test(n.writingMode||""),a=!r&&d.test(n.overflowY||""),f=!r&&d.test(n.overflowX||""),l=r?0:g(n.paddingTop),x=r?0:g(n.paddingRight),w=r?0:g(n.paddingBottom),y=r?0:g(n.paddingLeft),E=r?0:g(n.borderTopWidth),T=r?0:g(n.borderRightWidth),z=r?0:g(n.borderBottomWidth),S=y+x,k=l+w,M=(r?0:g(n.borderLeftWidth))+T,O=E+z,B=f?t.offsetHeight-O-t.clientHeight:0,R=a?t.offsetWidth-M-t.clientWidth:0,C=i?S+M:0,F=i?k+O:0,N=r?r.width:g(n.width)-C-R,_=r?r.height:g(n.height)-F-B,V=N+S+R+M,A=_+k+B+O,P=Object.freeze({devicePixelContentBoxSize:b(Math.round(N*devicePixelRatio),Math.round(_*devicePixelRatio),o),borderBoxSize:b(V,A,o),contentBoxSize:b(N,_,o),contentRect:new c(y,l,N,_)});return h.set(t,P),P},w=function(t,e,n){var i=x(t,n),o=i.borderBoxSize,a=i.contentBoxSize,c=i.devicePixelContentBoxSize;switch(e){case r.DEVICE_PIXEL_CONTENT_BOX:return c;case r.BORDER_BOX:return o;default:return a}},y=function(t){var e=x(t);this.target=t,this.contentRect=e.contentRect,this.borderBoxSize=[e.borderBoxSize],this.contentBoxSize=[e.contentBoxSize],this.devicePixelContentBoxSize=[e.devicePixelContentBoxSize]},E=function(t){if(u(t))return 1/0;for(var e=0,n=t.parentNode;n;)e+=1,n=n.parentNode;return e},T=function(){var t=1/0,e=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(e){var n=new y(e.target),i=E(e.target);r.push(n),e.lastReportedSize=w(e.target,e.observedBox),i<t&&(t=i)})),e.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=e;n<r.length;n++){(0,r[n])()}return t},z=function(t){i.forEach((function(e){e.activeTargets.splice(0,e.activeTargets.length),e.skippedTargets.splice(0,e.skippedTargets.length),e.observationTargets.forEach((function(n){n.isActive()&&(E(n.target)>t?e.activeTargets.push(n):e.skippedTargets.push(n))}))}))},S=function(){var t=0;for(z(t);i.some((function(t){return t.activeTargets.length>0}));)t=T(),z(t);return i.some((function(t){return t.skippedTargets.length>0}))&&function(){var t;"function"===typeof ErrorEvent?t=new ErrorEvent("error",{message:o}):((t=document.createEvent("Event")).initEvent("error",!1,!1),t.message=o),window.dispatchEvent(t)}(),t>0},k=[],M=function(t){if(!a){var e=0,n=document.createTextNode("");new MutationObserver((function(){return k.splice(0).forEach((function(t){return t()}))})).observe(n,{characterData:!0}),a=function(){n.textContent=""+(e?e--:e++)}}k.push(t),a()},O=0,B={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],C=function(t){return void 0===t&&(t=0),Date.now()+t},F=!1,N=new(function(){function t(){var t=this;this.stopped=!0,this.listener=function(){return t.schedule()}}return t.prototype.run=function(t){var e=this;if(void 0===t&&(t=250),!F){F=!0;var n,r=C(t);n=function(){var n=!1;try{n=S()}finally{if(F=!1,t=r-C(),!O)return;n?e.run(1e3):t>0?e.run(t):e.start()}},M((function(){requestAnimationFrame(n)}))}},t.prototype.schedule=function(){this.stop(),this.run()},t.prototype.observe=function(){var t=this,e=function(){return t.observer&&t.observer.observe(document.body,B)};document.body?e():l.addEventListener("DOMContentLoaded",e)},t.prototype.start=function(){var t=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(e){return l.addEventListener(e,t.listener,!0)})))},t.prototype.stop=function(){var t=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(e){return l.removeEventListener(e,t.listener,!0)})),this.stopped=!0)},t}()),_=function(t){!O&&t>0&&N.start(),!(O+=t)&&N.stop()},V=function(){function t(t,e){this.target=t,this.observedBox=e||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return t.prototype.isActive=function(){var t,e=w(this.target,this.observedBox,!0);return t=this.target,s(t)||function(t){switch(t.tagName){case"INPUT":if("image"!==t.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(t)||"inline"!==getComputedStyle(t).display||(this.lastReportedSize=e),this.lastReportedSize.inlineSize!==e.inlineSize||this.lastReportedSize.blockSize!==e.blockSize},t}(),A=function(t,e){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=t,this.callback=e},P=new WeakMap,D=function(t,e){for(var n=0;n<t.length;n+=1)if(t[n].target===e)return n;return-1},X=function(){function t(){}return t.connect=function(t,e){var n=new A(t,e);P.set(t,n)},t.observe=function(t,e,n){var r=P.get(t),o=0===r.observationTargets.length;D(r.observationTargets,e)<0&&(o&&i.push(r),r.observationTargets.push(new V(e,n&&n.box)),_(1),N.schedule())},t.unobserve=function(t,e){var n=P.get(t),r=D(n.observationTargets,e),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),_(-1))},t.disconnect=function(t){var e=this,n=P.get(t);n.observationTargets.slice().forEach((function(n){return e.unobserve(t,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},t}(),j=function(){function t(t){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!==typeof t)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");X.connect(this,t)}return t.prototype.observe=function(t,e){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");X.observe(this,t,e)},t.prototype.unobserve=function(t){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!f(t))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");X.unobserve(this,t)},t.prototype.disconnect=function(){X.disconnect(this)},t.toString=function(){return"function ResizeObserver () { [polyfill code] }"},t}()},167:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return p}));var r=n(294),i=n(317),o=n(122),a=n(106),c=n(100);function s(t){return Math.log(t)}function u(t){return Math.exp(t)}function f(t){return-Math.log(-t)}function l(t){return-Math.exp(-t)}function h(t){return isFinite(t)?+("1e"+t):t<0?0:t}function d(t){return function(e){return-t(-e)}}function v(t){var e,n,a=t(s,u),c=a.domain,v=10;function p(){return e=function(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(e){return Math.log(e)/t})}(v),n=function(t){return 10===t?h:t===Math.E?Math.exp:function(e){return Math.pow(t,e)}}(v),c()[0]<0?(e=d(e),n=d(n),t(f,l)):t(s,u),a}return a.base=function(t){return arguments.length?(v=+t,p()):v},a.domain=function(t){return arguments.length?(c(t),p()):c()},a.ticks=function(t){var i,o=c(),a=o[0],s=o[o.length-1];(i=s<a)&&(h=a,a=s,s=h);var u,f,l,h=e(a),d=e(s),p=null==t?10:+t,g=[];if(!(v%1)&&d-h<p){if(h=Math.floor(h),d=Math.ceil(d),a>0){for(;h<=d;++h)for(f=1,u=n(h);f<v;++f)if(!((l=u*f)<a)){if(l>s)break;g.push(l)}}else for(;h<=d;++h)for(f=v-1,u=n(h);f>=1;--f)if(!((l=u*f)<a)){if(l>s)break;g.push(l)}2*g.length<p&&(g=Object(r.a)(a,s,p))}else g=Object(r.a)(h,d,Math.min(d-h,p)).map(n);return i?g.reverse():g},a.tickFormat=function(t,r){if(null==r&&(r=10===v?".0e":","),"function"!==typeof r&&(r=Object(i.a)(r)),t===1/0)return r;null==t&&(t=10);var o=Math.max(1,v*t/a.ticks().length);return function(t){var i=t/n(Math.round(e(t)));return i*v<v-.5&&(i*=v),i<=o?r(t):""}},a.nice=function(){return c(Object(o.a)(c(),{floor:function(t){return n(Math.floor(e(t)))},ceil:function(t){return n(Math.ceil(e(t)))}}))},a}function p(){var t=v(Object(a.d)()).domain([1,10]);return t.copy=function(){return Object(a.a)(t,p()).base(t.base())},c.b.apply(t,arguments),t}},329:function(t,e,n){"use strict";var r=n(165);e.a=function(t){var e=function(){for(var t,e=r.b;t=e.sourceEvent;)e=t;return e}();return e.changedTouches&&(e=e.changedTouches[0]),function(t,e){var n=t.ownerSVGElement||t;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=e.clientX,r.y=e.clientY,[(r=r.matrixTransform(t.getScreenCTM().inverse())).x,r.y]}var i=t.getBoundingClientRect();return[e.clientX-i.left-t.clientLeft,e.clientY-i.top-t.clientTop]}(t,e)}}}]);
//# sourceMappingURL=34.9691754a.chunk.js.map