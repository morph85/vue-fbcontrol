!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("vue-fbcontrol",[],n):"object"==typeof exports?exports["vue-fbcontrol"]=n():e["vue-fbcontrol"]=n()}(this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(i,o){try{var a=n[i](o),u=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}Object.defineProperty(n,"__esModule",{value:!0}),function(e,n,t){var r,i=e.getElementsByTagName(n)[0];e.getElementById(t)||(r=e.createElement(n),r.id=t,r.src="//connect.facebook.net/en_US/sdk.js",i.parentNode.insertBefore(r,i))}(document,"script","facebook-jssdk");var i={install:function(e,n){var t=this;n&&n.awaitAsyncTime&&(this.awaitAsyncTime=n.awaitAsyncTime),n&&n.appId&&(this.appId=n.appId),n&&n.version&&(this.version=n.version),window.FB?this.init(this.appId,this.version):window.fbAsyncInit=function(){t.init(t.appId,t.version)}},awaitAsyncTime:100,init:function(e,n){return FB.init({appId:e,xfbml:!0,version:n}),window.FB=FB,Object.defineProperty(Vue.prototype,"$FB",{value:FB}),FB},getFB:function(){function e(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise(function(e,t){var r=100,i=setInterval(function(){void 0!==Vue.$FB?(e(Vue.$FB),clearInterval(i)):void 0!==window.FB&&(e(window.FB),clearInterval(i)),--r<=0&&clearInterval(i)},n.awaitAsyncTime)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return e}(),logEvent:function(){function e(e){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===Vue.$FB){e.next=4;break}Vue.$FB.AppEvents.logEvent(n),e.next=13;break;case 4:if(void 0===window.FB){e.next=8;break}window.FB.AppEvents.logEvent(n),e.next=13;break;case 8:if(this.awaitAsyncTime){e.next=11;break}return console.error("Invalid await async time"),e.abrupt("return");case 11:return e.next=13,this.getFB().then(function(e){e.AppEvents.logEvent(n)}).catch(function(e){console.error("Internal error in FBControl failsafe",e)});case 13:case"end":return e.stop()}},e,this)}));return e}(),logPageView:function(){function e(){return n.apply(this,arguments)}var n=r(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===Vue.$FB){e.next=4;break}Vue.$FB.AppEvents.logPageView(),e.next=13;break;case 4:if(void 0===window.FB){e.next=8;break}window.FB.AppEvents.logPageView(),e.next=13;break;case 8:if(this.awaitAsyncTime){e.next=11;break}return console.error("Invalid await async time"),e.abrupt("return");case 11:return e.next=13,this.getFB().then(function(e){e.AppEvents.logPageView()}).catch(function(e){console.error("Internal error in FBControl failsafe",e)});case 13:case"end":return e.stop()}},e,this)}));return e}()};n.default=i}])});