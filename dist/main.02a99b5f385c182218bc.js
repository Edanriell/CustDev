!function(){"use strict";var e,t={5178:function(e,t,n){var r=n(4774);function o(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}var a=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-type":"application/json"},body:n});case 2:return r=e.sent,e.next=5,r.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function s(e){o(i,r,a,s,c,"next",e)}function c(e){o(i,r,a,s,c,"throw",e)}s(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),i=a;function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function l(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var d=new WeakSet,u=new WeakSet,m=new WeakSet,f=function(){function e(t){var n=t.triggerForm,r=t.databaseName,o=t.spinnerSrc;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,m),c(this,u),c(this,d),this.forms=document.querySelectorAll(n),this.database=r,this.spinner=o,this.sendDataBtn=document.querySelector(".modal-btn_green")}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.forms.forEach((function(t){l(e,d,p).call(e,t,e.database)}))}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){var n=this;e.addEventListener("submit",(function(r){r.preventDefault(),l(n,u,h).call(n,e),l(n,m,v).call(n,".modal-btn_green");var o=new FormData(e),a=JSON.stringify(Object.fromEntries(o.entries()));i("http://localhost:3000/".concat(t),a).then((function(e){console.log(e),document.querySelector(".loader").remove(),n.sendDataBtn.insertAdjacentHTML("beforebegin","<p style='color:#00960a; padding-bottom: 6px; font-size: 10px;'>Успех</p>")})).catch((function(e){console.log(e),document.querySelector(".loader").remove(),n.sendDataBtn.insertAdjacentHTML("beforebegin","<p style='color:#a10000; padding-bottom: 6px; font-size: 10px;'>Ошибка сервера</p>")})).finally((function(){l(n,m,v).call(n,".modal-btn_green"),e.reset()}))}))}function h(e){var t=document.createElement("img");t.classList.add("loader"),t.src=this.spinner,t.style.cssText="\n        position: absolute;\n        height: 52px;\n        top: 551px;\n        left: 315px;\n      ",e.insertAdjacentElement("afterend",t)}function v(e){var t=document.querySelector(e);"transparent"===t.style.color?t.style.color="white":t.style.color="transparent"}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function g(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var w=new WeakSet,_=new WeakSet,E=new WeakSet,S=function(){function e(t){var n=t.triggerBtns,r=t.modalParent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,E),b(this,_),b(this,w),this.trigger=document.querySelectorAll(n),this.parent=document.querySelector(r)}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.trigger.forEach((function(t){t.addEventListener("click",(function(t){return g(e,_,L).call(e,t)}))}))}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e){var t=document.createElement("div"),n=document.body.clientWidth,o=document.createElement("div");document.body.style.paddingRight="".concat(n-e,"px"),t.classList.add("modal","fade-in"),o.classList.add("modal__body","modal-fade-in"),o.innerHTML='\n      <form id="form" class="modal-form" action="#" method="post">\n        <div class="modal-form__username">\n          <label class="visually-hidden" for="name">Ваше имя</label>\n          <input class="modal-form__username-input" id="name" name="name" type="text" placeholder="Имя" required>\n        </div>\n        <div class="modal-form__usersurname">\n          <label class="visually-hidden" for="surname">Ваша фамилия</label>\n          <input class="modal-form__usersurname-input" id="surname" name="surname" type="text" placeholder="Фамилия" required>\n        </div>\n        <div class="modal-form__user-address">\n          <label class="visually-hidden" for="address">Ваш адрес</label>\n          <input class="modal-form__user-address-input" id="address" name="address" type="text" placeholder="Фактический адрес проживания" required>\n        </div>\n        <div class="modal-form__user-phone">\n          <label class="visually-hidden" for="phone">Ваш номер телефона</label>\n          <input class="modal-form__user-phone-input" id="phone" name="phone" type="tel" placeholder="Номер телефона" required>\n        </div>\n        <div class="modal-form__user-email">\n          <label class="visually-hidden" for="email">Ваш почтовый ящик</label>\n          <input class="modal-form__user-email-input" id="email" name="email" type="email" placeholder="Электронная почта" required>\n        </div>\n        <div class="modal-btn-wrapper">\n          <button class="modal-btn modal-btn_green" type="submit">Отправить</button>\n        </div>\n      </form> \n      <div class="modal-main-text">\n        <p>С Вами свяжутся в течение 2 рабочих дней.</p>\n      </div>\n      <div>\n        <button class="modal-btn modal-btn_red" type="button">Закрыть окно</button>\n      </div>\n      ',t.append(o),this.parent.append(t),new f({triggerForm:"#form",databaseName:"requests",spinnerSrc:r}).init()}function L(){var e=document.body.clientWidth;document.body.style.overflow="hidden",g(this,w,x).call(this,e),g(this,E,k).call(this)}function k(){var e=document.querySelector(".modal"),t=document.querySelector(".modal-btn_red"),n=document.querySelector(".modal__body");e.addEventListener("click",(function(r){r.target!==e&&r.target!==t||(n.classList.add("modal-fade-out"),setTimeout((function(){e.classList.add("fade-out"),e.classList.remove("fade-in"),setTimeout((function(){e.remove(),document.body.style.overflow=null,document.body.style.position=null,document.body.style.paddingRight=0}),200)}),250))}))}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function j(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var O=new WeakSet,A=new WeakSet,P=new WeakSet,I=function(){function e(t){var n=t.scrollParent;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),q(this,P),q(this,A),q(this,O),this.container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;j(this,O,W).call(this);var t=document.querySelector(".pageup");j(this,P,B).call(this,t),t.addEventListener("click",(function(t){j(e,A,C).call(e,t)}))}}])&&T(t.prototype,n),r&&T(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function W(){var e=document.createElement("a");e.setAttribute("href","#up"),e.classList.add("pageup"),this.container.append(e)}function C(e){e.preventDefault();var t=document.documentElement.scrollTop,n=document.querySelector("header").hash,r=document.querySelector("header","#up").getBoundingClientRect().top,o=null;requestAnimationFrame((function e(a){null===o&&(o=a);var i=a-o,s=r<0?Math.max(t-i/.01,t+r):Math.min(t+i/.01,t+r);document.documentElement.scrollTo(0,s),s!==t+r?requestAnimationFrame(e):location.hash=n}))}function B(e){window.addEventListener("scroll",(function(){document.documentElement.scrollTop>1200&&!e.classList.contains("button-fade-in")?(e.classList.add("button-fade-in"),e.classList.remove("button-fade-out")):document.documentElement.scrollTop<1200&&e.classList.contains("button-fade-in")&&(e.classList.remove("button-fade-in"),e.classList.add("button-fade-out"))}))}function D(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function F(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}var N=new WeakSet,$=new WeakSet,H=new WeakSet,J=new WeakSet,U=function(){function e(t){var n=t.trigger,r=t.container;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),z(this,J),z(this,H),z(this,$),z(this,N),this.images=document.querySelectorAll(n),this.container=document.querySelector(r),this.totalImages=this.images.length,this.imageIndex=null}var t,n,r;return t=e,(n=[{key:"init",value:function(){var e=this;this.images.forEach((function(t){t.addEventListener("click",(function(t){return F(e,N,G).call(e,t)}))}))}}])&&R(t.prototype,n),r&&R(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){var t=document.body.clientWidth,n=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),a=document.createElement("div"),i=document.createElement("button"),s=document.createElement("button"),c=document.createElement("button"),l=D(this.images);this.imageIndex=l.indexOf(e.target),o.setAttribute("src",this.images[this.imageIndex].src),n.classList.add("gallery-window","fade-in"),r.classList.add("gallery-window__body","fade-in"),o.classList.add("gallery-window__image"),a.classList.add(".gallery-window__image-wrapper","fade-in-fwd-element"),s.classList.add("gallery-window__btnPrev"),i.classList.add("gallery-window__btnNext"),c.classList.add("gallery-window__btnClose"),a.append(o),r.append(a),n.append(r,c,s,i),this.container.append(n),F(this,J,V).call(this,t),F(this,$,K).call(this),F(this,H,Q).call(this,n,r)}function K(){var e=this,t=document.querySelector(".gallery-window__btnNext"),n=document.querySelector(".gallery-window__btnPrev"),r=document.querySelector(".gallery-window__image");t.addEventListener("click",(function(){r.removeAttribute("src"),0===e.imageIndex&&(e.imageIndex=e.totalImages),e.imageIndex--,r.setAttribute("src",e.images[e.imageIndex].src)})),n.addEventListener("click",(function(){r.removeAttribute("src"),e.imageIndex++,e.imageIndex===e.totalImages&&(e.imageIndex=0),r.setAttribute("src",e.images[e.imageIndex].src)}))}function Q(e){document.querySelector(".gallery-window__btnClose").addEventListener("click",(function(){setTimeout((function(){e.classList.remove("fade-in"),e.classList.add("fade-out"),setTimeout((function(){e.remove(),document.body.style.overflow=null,document.body.style.paddingRight=0}),350)}),300)}))}function V(e){document.body.style.overflow="hidden";var t=document.body.clientWidth;document.body.style.paddingRight="".concat(t-e,"px")}window.addEventListener("DOMContentLoaded",(function(){var e=new S({triggerBtns:".button",modalParent:"body"}),t=new I({scrollParent:"main"}),n=new U({trigger:".gallery__image",container:"body"});e.init(),t.init(),n.init()}))},4774:function(e,t,n){e.exports=n.p+"assets/svgs/7880463405ab9689b527.svg"}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],a=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,o,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e}(),function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],c=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(d)},n=self.webpackChunkcustdev=self.webpackChunkcustdev||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.O(void 0,[981],(function(){return r(6981)}));var o=r.O(void 0,[981],(function(){return r(5178)}));o=r.O(o)}();