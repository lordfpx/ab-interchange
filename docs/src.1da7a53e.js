parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tg39":[function(require,module,exports) {
!function(){if("function"==typeof window.CustomEvent)return!1;function o(o,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var t=document.createEvent("CustomEvent");return t.initCustomEvent(o,n.bubbles,n.cancelable,n.detail),t}o.prototype=window.Event.prototype,window.CustomEvent=o}(),function(){var o=function(o,n){var t=!1;window.addEventListener(o,function(){t||(t=!0,window.requestAnimationFrame(function(){window.dispatchEvent(new CustomEvent(n)),t=!1}))})};o("resize","ab-resize"),o("scroll","ab-scroll"),o("mousemove","ab-mousemove"),o("touchmove","ab-touchmove")}(),window.AB={extend:function(){var o={},n=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],t++);for(var i=function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n&&"[object Object]"===Object.prototype.toString.call(t[e])?o[e]=window.AB.extend(!0,o[e],t[e]):o[e]=t[e])};t<e;t++)i(arguments[t]);return o},isJson:function(o){try{JSON.parse(o)}catch(n){return!1}return!0},runUpdaters:function(o){if(window.AB.options[o])window.AB.plugins[o](window.AB.options[o]);else for(var n in AB.options)window.AB.options.hasOwnProperty(n)&&window.AB.plugins[n](window.AB.options[n])},plugins:{},options:{}},module.exports=window.AB;
},{}],"nJpS":[function(require,module,exports) {
"use strict";window.AB=require("another-brick");var n=function(n){window.AB.mediaQuery=function(){var e=n||{bp:{}};function r(){var n=[];for(var r in e.bp)e.bp.hasOwnProperty(r)&&window.matchMedia(e.bp[r]).matches&&n.push(r);return n}var i=r();return window.addEventListener("ab-resize",function(){var n=r();n.join("|")!==i.join("|")&&(i=n,window.dispatchEvent(new CustomEvent("changed.ab-mediaquery")))}),{get current(){return i},is:function(n){return!!e.bp[n]&&window.matchMedia(e.bp[n]).matches}}}()};window.AB.plugins.mediaQuery=n,module.exports=window.AB;
},{"another-brick":"tg39"}],"S3PC":[function(require,module,exports) {
"use strict";window.AB=require("ab-mediaquery");var t="abInterchange",e="data-ab-interchange",i=e+"-src",s={mode:"lazy-img",lazySettings:{offscreen:1.25,layout:"fluid"}};function n(){if(!this._replaced)switch(this.mode){case"lazy-img":l.call(this,!0);break;case"background":h.call(this);break;case"lazy-background":h.call(this,!0)}}function l(t){this._imgNode.src===this.currentPath||t&&!this.inView()||(this._imgNode.src=this.currentPath,this._imgNode.addEventListener("load",r.bind(this)),this._replaced=!0)}function h(t){this.el.style.backgroundImage==='url("'+this.currentPath+'")'||t&&!this.inView()||(this.el.style.backgroundImage=this.currentPath?"url("+this.currentPath+")":"none",this.el.addEventListener("load",r.bind(this)))}function a(){var t=document.createElement("div"),e=document.createElement("img"),i=this.el.getAttribute("alt"),s=u.call(this),n=s.width,l=s.height,h=!n||!l,a=document.createDocumentFragment();"lazy-img"!==this.mode||h||(this.el.innerHTML="",this.el.style.overflow="hidden",this.el.style.position="relative",this.el.classList.add("ab-interchange-loading"),"fixed"===this.settings.lazySettings.layout&&(this.el.style.height=l+"px",this.el.style.width=n+"px"),t.classList.add("ab-interchange-placeholder"),t.style.paddingTop=(l/n*100).toFixed(2)+"%",e.style.position="absolute",e.style.top=e.style.right=e.style.bottom=e.style.left=0,e.style.maxHeight=e.style.minHeight=e.style.maxWidth=e.style.minWidth="100%",e.style.height=0,e.alt=null===i?"":i,a.appendChild(t),a.appendChild(e),this.el.appendChild(a),this._imgNode=this.el.querySelector("img"))}function r(){this.el.classList.remove("ab-interchange-loading");var e=new CustomEvent(t+".replaced",{detail:{element:this.el}});window.dispatchEvent(e)}function o(){var t="";window.addEventListener("changed.ab-mediaquery",this.resetDisplay.bind(this)),"lazy-img"!==this.mode&&"lazy-background"!==this.mode||("IntersectionObserver"in window?(t=parseInt((this.settings.lazySettings.offscreen-1)*window.innerHeight)+"px",new IntersectionObserver(g.bind(this),{root:null,rootMargin:"0px 0px "+t+" 0px",threshold:0}).observe(this.el)):window.addEventListener("ab-scroll",g.bind(this)))}function d(){for(var t,s,n,l=[],h=(this.el.getAttribute(i)||this.el.getAttribute(e)).match(/\[[^\]]+\]/g),a=0,r=h.length;a<r;a++)s=(t=h[a].slice(1,-1).split(", ")).slice(0,-1).join(""),n=t[t.length-1],l.push({path:s,query:n});this.rules=l}function c(){for(var t="",e=this.rules,i=0,s=e.length;i<s;i++)window.AB.mediaQuery.is(e[i].query)&&(t=e[i].path);this.currentPath!==t&&(this.currentPath=t,n.call(this))}function g(){this.inView()&&!this._replaced&&n.call(this)}function u(){var t=this.el.getAttribute("width"),e=this.el.getAttribute("height"),i={},s={};if(window.AB.isJson(t)&&window.AB.isJson(e))for(var n in i=JSON.parse(t),s=JSON.parse(e),i)i.hasOwnProperty(n)&&window.AB.mediaQuery.is(n)&&(t=i[n],e=s[n]);return{width:t,height:e}}function w(){a.call(this),o.call(this),d.call(this),c.call(this)}var m=function(t,i){this.el=t;var n=window.AB.isJson(this.el.getAttribute(e))?JSON.parse(this.el.getAttribute(e)):{};this.settings=window.AB.extend(!0,s,i,n),this.rules=[],this.currentPath="",this.mode=this.settings.mode,this.replaced=!1,this._imgNode=this.el,("IMG"===this.el.tagName||"PICTURE"===this.el.parentNode.tagName||this.el.getAttribute("srcset"))&&window.HTMLPictureElement||w.call(this)};function p(i){for(var s=document.querySelectorAll("["+e+"]"),n=0,l=s.length;n<l;n++)s[n][t]||(s[n][t]=new m(s[n],i));window.AB.options[t]||(window.AB.options[t]=i)}m.prototype={resetDisplay:function(){this._replaced=!1,a.call(this),c.call(this)},inView:function(){var t=window.innerHeight,e=this.el.getBoundingClientRect(),i=-this.el.offsetHeight-t*(this.settings.lazySettings.offscreen-1),s=t+t*(this.settings.lazySettings.offscreen-1);return e.top>=i&&e.top<=s}},window.AB.plugins.interchange=p,module.exports=window.AB;
},{"ab-mediaquery":"nJpS"}]},{},["S3PC"], null)