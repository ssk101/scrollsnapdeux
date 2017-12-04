"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};exports.default=function(n,t){function o(n,t){var o=n,e=void 0;return e=null!==M[t]?o-M[t]:0,M[t]=o,h&&clearTimeout(h),h=setTimeout(function(){M[t]=null},50),e}function e(n){E=n===document?document.body:n,n.addEventListener("scroll",i,!1),function(n){n.snapLengthUnit=function(n){var t={y:{value:0,unit:"px"},x:{value:0,unit:"px"}},o=void 0;return null!==(o=/(\d+)(px|%|vw) (\d+)(px|%|vh)/g.exec(n))&&(t.x={value:o[1],unit:o[2]},t.y={value:o[3],unit:o[4]}),t}(d)}(E)}function i(){L=o(E.scrollLeft,"x"),w=o(E.scrollTop,"y"),T||0===L&&0===w||function(n){b=n,N=function(n){return n===document||n===window?document.documentElement.scrollTop>0||document.documentElement.scrollLeft>0?document.documentElement:document.querySelector("body"):n}(b),O&&(window.cancelAnimationFrame(O)||clearTimeout(O));v?clearTimeout(v):x={y:N.scrollTop,x:N.scrollLeft};v=setTimeout(r,f)}(E)}function r(){if(x.y!==N.scrollTop||x.x!==N.scrollLeft){var n=void 0;n=function(n,t,o){var e={y:l(o.y,function(n,t){return"vh"===t.unit?Math.max(document.documentElement.clientHeight,window.innerHeight||1)/100*t.value:"%"===t.unit?c(n)/100*t.value:c(n)/t.value}(t,t.snapLengthUnit.y)),x:l(o.x,function(n,t){return"vw"===t.unit?Math.max(document.documentElement.clientWidth,window.innerWidth||1)/100*t.value:"%"===t.unit?s(n)/100*t.value:s(n)/t.value}(t,t.snapLengthUnit.x))},i=n.scrollTop,r=n.scrollLeft,a={y:i/e.y||1,x:r/e.x||1},f={y:0,x:0};f.y=l(o.y,a.y),f.x=l(o.x,a.x);var m={y:f.y*e.y,x:f.x*e.x};return m.y=u(0,function(n){return n.scrollHeight}(n),m.y),m.x=u(0,function(n){return n.scrollWidth}(n),m.x),m}(N,b,{y:w>0?1:-1,x:L>0?1:-1}),b.removeEventListener("scroll",i,!1),T=!0,function(n,t,o){function e(c){u||(u=c);var s=c-u;if(isNaN(t.y)||(n.scrollTop=a(i.y,t.y,s,l)),isNaN(t.x)||(n.scrollLeft=a(i.x,t.x,s,l)),s<l)r(e);else if("function"==typeof o)return o(t)}var i={y:n.scrollTop,x:n.scrollLeft},r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(n){window.setTimeout(n,15)},l=function(n,t){return 0===n.x&&0===w||0===n.y&&0===L}(i)?0:m,u=null;O=r(e)}(N,n,function(){T=!1,b.addEventListener("scroll",i,!1),p()}),isNaN(n.x||!isNaN(n.y))||(x=n)}}function l(n,t){return y?Math.round(t):-1===n?Math.floor(t):Math.ceil(t)}function u(n,t,o){return Math.max(Math.min(o,t),n)}function c(n){return n.offsetHeight}function s(n){return n.offsetWidth}function a(n,t,o,e){return o>e?t:function(n,t,o,e){return o*(n/=e)*n*n+t}(o,n,t-n,e)}if(t.scrollTimeout&&(isNaN(t.scrollTimeout)||"boolean"==typeof t.scrollTimeout))throw new Error("Optional config property 'scrollTimeout' is not valid, expected NUMBER but found "+_typeof(t.scrollTimeout).toUpperCase());var f=t.scrollTimeout||SCROLL_TIMEOUT_DEFAULT;if(t.scrollTime&&(isNaN(t.scrollTime)||"boolean"==typeof t.scrollTime))throw new Error("Optional config property 'scrollTime' is not valid, expected NUMBER but found "+_typeof(t.scrollTime).toUpperCase());var m=t.scrollTime||SCROLL_TIME_DEFAULT;if(!t.scrollSnapDestination)throw new Error("Required config property scrollSnapDestination is not defined");var d=t.scrollSnapDestination,y=t.snapToNearest,p=void 0,v=null,x=null,T=!1,h=0,L=void 0,w=void 0,E=void 0,b=void 0,N=void 0,M={x:null,y:null},O=null;return this.bind=function(t){p="function"==typeof t?t:NOOP,e(n)},this.unbind=function(){!function(n){n.removeEventListener("scroll",i,!1)}(n)},this};var SCROLL_TIMEOUT_DEFAULT=300,SCROLL_TIME_DEFAULT=2,NOOP=function(){};