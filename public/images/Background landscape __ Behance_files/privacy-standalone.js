/*!
 * privacy-standalone v0.96.0 built on Mon, 22 Apr 2024 05:31:12 GMT
 *
 */!function(){"use strict";var e=["C0001","C0002","C0003","C0004"],t="#onetrust-banner-sdk",n="#onetrust-pc-sdk",o="#ot-cookie-settings",r={categories:e,categoriesDefault:e[0],configEndpoint:"https://cdn.cookielaw.org/consent/",id:"onetrust",location:"feds_location",locationURL:"https://geo2.adobe.com/json/?callback=",url:"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",events:{privacyConsent:"adobePrivacy:PrivacyConsent",privacyConsentCustom:"adobePrivacy:PrivacyCustom",privacyReject:"adobePrivacy:PrivacyReject",oneTrustReady:"feds.events.oneTrustReady"},cookies:{consent:"OptanonConsent",interaction:"OptanonAlertBoxClosed"},selectors:{banner:t,bannerAccept:"".concat(t," #onetrust-accept-btn-handler"),bannerClose:"#ot-banner-close",bannerCustomize:"".concat(t," #onetrust-pc-btn-handler"),bannerIcon:"#ot-cookie-button",bannerReject:"".concat(t," #onetrust-reject-all-handler"),buttonGroup:"".concat(t," #onetrust-button-group"),preferenceCenter:n,preferenceCenterAccept:"".concat(n," .enable-all-btn"),preferenceCenterAlwaysActive:"".concat(n," #first-party-cookies-domain"),preferenceCenterCheckboxes:"".concat(n," .switch-checkbox"),preferenceCenterClose:"".concat(n," .pc-close-button"),preferenceCenterConfirm:"".concat(n," .pc-save-and-close"),preferenceCenterFaqs:"".concat(n," .ot-general-question"),preferenceCenterReject:"".concat(n," .disable-all-btn"),holdBanner:"hold-banner",toastNotification:o,toastNotificationClose:"".concat(o," .cs-close"),toastNotificationManage:"".concat(o," .ot-sdk-show-settings"),wrapper:"#onetrust-consent-sdk"},restrictions:{imsTimeout:3e3,userTags:{age:["agegroup_under13","agegroup_13_15","agegroup_16_17"],edu:["edu","edu_k12","edu_hed","edu_student"]},modes:{gpc:"GPC",group:"User Group",user:"User Initiated"}}},i=function(e,t){var n;"function"==typeof window.CustomEvent?n=new window.CustomEvent(e,{detail:t}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,!1,!1,t),window.dispatchEvent(n)},a=function(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e},c=function(e,t){return!!((a(e)||Array.isArray(e))&&"string"==typeof t&&!!t.length)&&Object.prototype.hasOwnProperty.call(e,t)},s=function(e,t){var n,o,r,i;if(e&&"object"==typeof e&&!Array.isArray(e)&&"string"==typeof t&&Object.keys(e).length&&t.length)for(r=(n=t.split(".")).length,i=e,o=0;o<r;o+=1){if(!c(i,n[o]))return;i=i[n[o]]}return i},u=function(e){return!a(e)||0===Object.keys(e).length},l=function(e){return"function"==typeof e},d=function(e,t){var n=c(t,"target")&&"string"==typeof t.target&&!!t.target.length?t.target:"head",o=document.querySelector(n),r=e instanceof HTMLLinkElement,i=e instanceof HTMLScriptElement;o instanceof HTMLElement&&(r||i)&&o.appendChild(e)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h="fedsDebug",y="Debug mode",m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this;g(this,e);var o=new URLSearchParams(window.location.search);this.module=t.control,this.debug=o.getAll(h).some((function(e){return e===n.module||"*"===e})),this.debug&&this.log(y),window.feds=window.feds||{},window.feds.debug=window.feds.debug||[],window.feds.debug.push(this.module)}var t,n,o;return t=e,n=[{key:"message",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=["".concat(this.module,":")];return t.forEach((function(e){return o.push(e)})),o.concat()}},{key:"log",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.debug&&window.console.log.apply(null,this.message.apply(this,v(t)))}},{key:"warn",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.debug&&window.console.warn.apply(null,this.message.apply(this,v(t)))}},{key:"error",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.debug&&window.console.error.apply(null,this.message.apply(this,v(t)))}}],n&&p(t.prototype,n),o&&p(t,o),e}(),w={},b=new m({control:"createResourceLink"});w.scriptType="script",w.styleType="style",w.allowedTypes=[w.scriptType,w.styleType],w.isConfigValid=function(e){var t=!u(e),n=!!c(e,"path")&&("string"==typeof e.path&&!!e.path.length),o=w.allowedTypes.indexOf(e.type)>-1,r=!c(e,"async")||"boolean"==typeof e.async,i=!c(e,"crossorigin")||"boolean"==typeof e.crossorigin,a=!c(e,"data")||!u(e.data),s=!c(e,"successCallback")||l(e.successCallback),d=!c(e,"errorCallback")||l(e.errorCallback),f=!c(e,"id")||"string"==typeof e.id&&!!e.id.length,g=!c(e,"where")||"string"==typeof e.where&&!!e.where.length&&document.querySelector(e.where)instanceof HTMLElement,p=!c(e,"when")||"string"==typeof e.when&&!!e.when.length;return t&&n&&o&&r&&i&&a&&s&&d&&f&&g&&p},w.generateResource=function(e){var t;return e.type===w.scriptType?((t=document.createElement("script")).type="text/javascript",t.src=e.path,c(e,"async")&&(t.async=e.async),c(e,"crossorigin")&&!0===e.crossorigin&&t.setAttribute("crossorigin",e.crossorigin),c(e,"data")&&!u(e.data)&&Object.keys(e.data).forEach((function(n){t.setAttribute("data-".concat(n),e.data[n])}))):e.type===w.styleType&&((t=document.createElement("link")).type="text/css",t.rel="stylesheet",t.href=e.path),c(e,"id")&&(null===document.querySelector("#".concat(e.id))?t.id=e.id:b.error("element id is already used",t)),t};var C=function(e){if(!u(e)&&w.isConfigValid(e))return new Promise((function(t,n){var o=w.generateResource(e);o.addEventListener("load",(function(){t(o),c(e,"successCallback")&&e.successCallback(o)})),o.addEventListener("error",(function(t){n(t),c(e,"errorCallback")&&e.errorCallback(t)})),c(e,"when")?window.addEventListener(e.when,(function(){d(o,{target:e.where})})):d(o,{target:e.where})}))},k=function(){return new Promise((function(e){var t=function(){var e=window.sessionStorage.getItem(r.location);if(null!==e&&""!==e)try{e=JSON.parse(e),c(e,"country")&&""!==e.country||(e=null)}catch(t){e=null}return e}();if(null!==t)e(t);else{var n="privacy_".concat(Date.now()).concat(Math.round(1e5*Math.random()));window[n]=function(t){var o,i,a,c,s=(i={},a=(o=t).country,c=o.state,a&&(i.country=a),c&&(i.state=c),i);window.sessionStorage.setItem(r.location,JSON.stringify(s)),e(s),delete window[n]},C({path:"".concat(r.locationURL).concat(n),type:"script"}).catch((function(){e({})}))}}))};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var P=function(e,t){var n,o,r,i;if("string"==typeof e&&e.length&&"string"==typeof document.cookie)for(o=(n=document.cookie.split("; ")).length-1;o>=0;o-=1)if("string"==typeof(r=n[o])&&r.length&&e===(r=r.split(/=(.+)/))[0]){if("boolean"==typeof t&&t)return i=L(r,2)[1];i=window.decodeURIComponent(r[1])}return i},E=function(){var e;return!!(null===(e=window.navigator)||void 0===e?void 0:e.globalPrivacyControl)},T=function(){var e=document.querySelector('script[src*="/privacy-standalone.js"]')||document.querySelector('script[src$="/feds.js"]');if(e){var t=document.createElement("a");return t.href=e.src,"www.adobe.com"===t.host}return!1},A=function(e,t){for(t=e="";e++<36;t+=51*e&52?(15^e?8^Math.random()*(20^e?16:4):4).toString(16):"-");return t};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){O(e,t,n[t])}))}return e}var M=new m({control:"privacy"}),D=function(e,t){var n=!1;if("string"==typeof e&&""!==e){var o="11dd9af9-1455-4159-bb5e-0b1fdf039f76:".concat(T()?"prod":"dev"),r="https://sstats.adobe.com/ee/v1/interact?configId=".concat(o,"&requestId=").concat(A()),i="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),c={};l(s(window,"OneTrust.getGeolocationData"))&&(c=window.OneTrust.getGeolocationData());var u=s(window,"fedsConfig.privacy.otDomainId"),d={xdm:{web:{webPageDetails:{name:i,URL:i},webInteraction:{type:"other",name:e}},_adobe_corpnew:{consentTracking:{activeGroups:window.adobePrivacy.activeCookieGroups().toString(),activeGroupsArray:window.adobePrivacy.activeCookieGroups(),domainID:u,continent:c.continent||"",country:c.country||"",state:c.state||"",stateName:c.stateName||"",city:c.city||"",zipcode:c.zipcode||"",timezone:c.timezone||""}}}};try{d.xdm.timestamp=(new Date).toISOString()}catch(e){}void 0!==t&&(d.xdm._adobe_corpnew.consentTracking.type=t);var f=function(e){if(!n){e&&(d.xdm.identityMap={ECID:[{id:e}]});var t=new window.XMLHttpRequest;t.open("POST",r,!0),t.setRequestHeader("Content-Type","text/plain"),t.withCredentials=!1,t.send(JSON.stringify({events:[d]})),n=!0,M.log("analytics data",d)}};if(l(s(window,"_satellite.getVisitorId"))){var g=window._satellite.getVisitorId();if(a(g)&&l(g.getMarketingCloudVisitorID)){var p=g.getMarketingCloudVisitorID(f);p&&f(p)}else f()}else{var v=P("AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg");"string"==typeof v&&v.length&&"string"==typeof(v=(v=v.split("MCMID|"))[1])&&v.length?f(v=(v=v.split("|"))[0]):f()}}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!1;if(!u(e)&&e.eventName){var n=T()?"8d7bac14-04dd-47cb-9710-7d4b1358467a":"20b030dd-b713-45da-8ff7-0a7027d2da29",o="https://sstats.adobe.com/ee/v1/interact?configId=".concat(n,"&requestId=").concat(A()),i="".concat(window.location.protocol,"//").concat(window.location.host).concat(window.location.pathname),c=s(window,"fedsConfig.privacy.otDomainId"),d={};d=l(s(window,"OneTrust.getGeolocationData"))?window.OneTrust.getGeolocationData():k();var f=window.navigator.language||window.navigator.userLanguage;e.usePageLanguage&&(f=document.documentElement.lang);var g,p=e.source;p&&e.element&&(p+="|".concat(e.element));var v=document.querySelector(r.selectors.banner);v&&(g="Cookie banner");var h=document.querySelectorAll("".concat(r.selectors.buttonGroup," button"));h&&3===h.length&&(g="Cookie banner with opt-out button");var y={data:{eventType:"web.webInteraction.linkClicks",timestamp:(new Date).toISOString(),web:{webPageDetails:{name:i,URL:i},webInteraction:{type:"other",name:e.eventName,linkClicks:{value:1}}},_adobe_corpnew:{consentTracking:{activeGroups:window.adobePrivacy.activeCookieGroups().toString(),activeGroupsArray:window.adobePrivacy.activeCookieGroups(),group:e.userGroup||"unspecified",bannerDesign:g,city:d.city,continent:d.continent,country:d.country,customMode:e.customMode,domainID:c,gpc:E(),holdBanner:!!s(window,"fedsConfig.privacy.holdBanner"),interaction:p,language:f,modalLaunchMethod:e.modalLaunchMethod,state:d.state,stateName:d.stateName,timezone:d.timezone,type:e.choiceType,zipcode:d.zipcode}}}},m=function(e){if(!t){e&&(y.data.identityMap={ECID:[{id:e}]});var n=new window.XMLHttpRequest;n.open("POST",o,!0),n.setRequestHeader("Content-Type","text/plain"),n.withCredentials=!1,n.send(JSON.stringify({events:[y]})),t=!0,M.log("analytics data",y)}};if(l(s(window,"_satellite.getVisitorId"))){var w=window._satellite.getVisitorId();if(a(w)&&l(w.getMarketingCloudVisitorID)){var b=w.getMarketingCloudVisitorID(m);b&&m(b)}else m()}else{var C=P("AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg");"string"==typeof C&&C.length&&"string"==typeof(C=(C=C.split("MCMID|"))[1])&&C.length?m(C=(C=C.split("|"))[0]):m()}}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D("choice","custom"),x(I({eventName:"choice",choiceType:"custom"},e))},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D("choice","enable"),x(I({eventName:"choice",choiceType:"enable"},e))},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D("showBanner"),x(I({eventName:"showBanner"},e))},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D("closeModal"),x(I({eventName:"closeModal"},e))},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x(I({eventName:"showModal"},e))},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D("choice","disable"),x(I({eventName:"choice",choiceType:"disable"},e))},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};x(I({eventName:"choice"},e))},_=function(e,t){var n;if(!e||!t)return null;if(l(window.Element.prototype.matches))n=e.matches(t);else{n=(e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector||function(e){var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;do{n-=1}while(n>=0&&t.item(n)!==this);return n>-1}).apply(e,[t])}return n},z=function(e,t){var n,o=e;if(!o||!t)return null;if(l(window.Element.prototype.closest))n=o.closest(t);else for(;o&&1===o.nodeType;){if(_(o,t)){n=o;break}o=o.parentNode}return n},H=function(e){var t=e,n=t.split("."),o=n.length;return o>2&&(t="".concat(n[o-2],".").concat(n[o-1]),2===n[o-2].length&&2===n[o-1].length&&(t="".concat(n[o-3],".").concat(t))),t},V=function(e){return!!(e&&e instanceof HTMLElement&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).getPropertyValue("visibility"))},F=function(e){var t=e.filter((function(e){return r.restrictions.userTags.age.includes(e)}));if(t.length)return[!0,t];var n=e.filter((function(e){return r.restrictions.userTags.edu.includes(e)}));return n.length?e.includes("edu_teacher")?e.includes("edu_student")?[!0,n]:[!1]:[!0,n]:[!1]},J={ar:"تفضيلات Cookie",bg:"Предпочитания за бисквитки",cs:"Předvolby pro soubory cookie",da:"Cookie-indstillinger ",de:"Cookie-Einstellungen",en:"Cookie preferences",es:"Preferencias sobre cookies",et:"Cookie eelistused",fi:"Cookie-asetukset",fr:"Préférences en matière de cookies",he:"העדפות לקובצי Cookie",hu:"Cookie-beállítások",it:"Preferenze sui cookie",ja:"Cookieの環境設定",ko:"Cookie 환경 설정",lt:"Slapukų nuostatos",lv:"Cookie preferences",nb:"Cookie-innstillinger",nl:"Cookievoorkeuren",no:"Cookie-innstillinger",pl:"Preferencje dotyczące plików cookie",pt:"Preferencias sobre cookies","pt-br":"Preferências de cookies",ro:"Preferințe privind cookie-urile",ru:"Настройки cookie",sk:"Preferencie používania súborov cookie",sl:"Nastavitve piškotkov",sv:"Cookie-inställningar ",tr:"Çerez tercihleri",uk:"Налаштування файлів cookie",zh:"Cookie 偏好设置","zh-hk":"Cookie 偏好設定","zh-hans":"Cookie 偏好设置","zh-hant":"Cookie 偏好設定","zh-tw":"Cookie 偏好設定"};J.default=J.en;var $=J,K=function(e,t,n,o){var r,i,a,c,s="";"string"==typeof e&&e.length&&"string"==typeof document.cookie&&(s+="boolean"==typeof o&&o?"".concat(e,"=").concat(t):"".concat(window.encodeURIComponent(e),"=").concat(window.encodeURIComponent(t)),u(n)||("string"==typeof(r=n.path)&&r.length&&(s+="; path=".concat(r)),(i=n.expiration)instanceof Date&&(s+="; expires=".concat(i.toUTCString())),"string"==typeof(a=n.domain)&&a.length&&(s+="; domain=".concat(a)),"string"==typeof(c=n.sameSite)&&c.length&&(s+="; Samesite=".concat(c))),document.cookie=s)},X=!1,Y=function(){return new Promise((function(e,t){var n=setTimeout((function(){X||(X=!1,t())}),r.restrictions.imsTimeout),o=function(r){var i,a=null==r||null===(i=r.detail)||void 0===i?void 0:i.instance;a?(X=!0,window.removeEventListener("onImsLibInstance",o),clearTimeout(n),e(a)):t()};window.addEventListener("onImsLibInstance",o),i("getImsLibInstance",null)}))};function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Z,ee=new m({control:"privacy"}),te=function(){var e=[],t=P(r.cookies.consent);try{(t=(t=(t=(t=(t=t.split("groups="))[1]).split("&"))[0]).split(",")).forEach((function(t){if(-1!==t.indexOf(":1")){var n=t.replace(":1","");e.push(n)}}))}catch(e){ee.log("Could not parse consent cookie")}return e},ne=function(){var e=!1,t=P(r.cookies.interaction);t&&"number"==typeof Date.parse(t)&&(te().length&&(e=!0));return e},oe=function(){return new Promise((function(e){var t=s(window,"OneTrust.GetDomainData");if(l(t)&&t().isBannerLoaded)e();else{var n=document.querySelector("html");n.addEventListener("otloadbanner",(function t(){e(),n.removeEventListener("otloadbanner",t)}))}}))},re=function(){if(ne()){var e=te(),t=e.length&&e.length===r.categories.length,n=1===e.length&&-1!==e.indexOf(r.categoriesDefault),o=e.length&&e.length!==r.categories.length&&!n;t&&(i(r.events.privacyConsent),ee.log("".concat(r.events.privacyConsent," dispatched"))),o&&(i(r.events.privacyConsentCustom),ee.log("".concat(r.events.privacyConsentCustom," dispatched"))),t||o||(i(r.events.privacyReject),ee.log("".concat(r.events.privacyReject," dispatched")))}},ie=function(){if(Z)return Z;var e=s(window,"fedsConfig.privacy.otDomainId");return Z=window.fetch("".concat(r.configEndpoint).concat(e,"/").concat(e,".json")).then((function(e){return e.json()})).catch((function(){}))},ae=function(e,t,n){if(e&&t){var o=new Date((new Date).setFullYear((new Date).getFullYear()+1)),r=!0===s(n,"TenantFeatures.CookiesSameSiteNone")?"None; Secure":"Lax",i="TEST"===s(n,"ScriptType")?void 0:".".concat(H(window.location.hostname));K(e,t,{path:"/",domain:i,expiration:o,sameSite:r},!0)}},ce=function(){return document.querySelector("body > ".concat(r.selectors.toastNotification))},se=function(){var e=ce();e&&(e.blur(),e.classList.remove("show"),e.removeAttribute("tabindex"),e.style.removeProperty("outline"))},ue=function(){!function(){if(!(ce()instanceof HTMLElement)){var e=document.createElement("div");e.setAttribute("id",r.selectors.toastNotification.replace("#","")),e.classList.add(r.selectors.toastNotification.replace("#","")),e.appendChild(document.createRange().createContextualFragment('\n        <div class="cs-container">\n            <div class="cs-cols">\n                <div class="cs-check"></div>\n                <div class="cs-text"></div>\n            </div>\n            <div class="cs-cols">\n                <a href="#" class="ot-sdk-show-settings">\n                    <div class="cs-settings-text"></div>\n                </a>\n                <div class="cs-close">\n                    <span>x</span>\n                </div>\n            </div>\n        </div>')),document.body.appendChild(e)}}();var e=ce();e.setAttribute("tabindex",0),e.style.setProperty("outline",0),e.classList.add("show"),e.focus(),setTimeout((function(){se()}),1e4);var t=document.querySelector(r.selectors.bannerIcon);t&&t.parentNode.removeChild(t)},le=function(){document.querySelector(r.selectors.preferenceCenterConfirm).style.setProperty("display","none")},de=function(){return V(document.querySelector(r.selectors.preferenceCenter))},fe=function(){if(de())try{window.OneTrust.Close(),document.body.style.setProperty("overflow",""),document.documentElement.style.setProperty("overflow","")}catch(e){}},ge=function(e,t){if(e&&e!==r.categoriesDefault&&-1!==r.categories.indexOf(e)){var n=document.querySelector('input[data-optanongroupid="'.concat(e,'"]'));if(!document.querySelector(r.selectors.banner)){var o=document.createElement("div");o.id=r.selectors.banner.replace("#",""),o.style="display: none";var i=document.querySelector(r.selectors.wrapper);i instanceof HTMLElement&&i.appendChild(o)}n instanceof HTMLElement&&(t?n.checked||(n.click(),ee.log("Check category ".concat(e," programatically in Preference Center"))):n.checked&&(n.click(),ee.log("Uncheck category ".concat(e," programatically in Preference Center"))))}},pe=function(){var e=document&&document.documentElement&&document.documentElement.lang,t=!1;return e&&e.length&&!0===s(window,"fedsConfig.privacy.documentLanguage")&&(t=!0),t},ve=!1,he=function(){ve||(oe().then((function(){ne()||(!function(){var e=document.querySelector(r.selectors.banner),t=document.querySelector(r.selectors.bannerClose),n=document.querySelector(r.selectors.bannerIcon);e&&(t||e.insertAdjacentHTML("beforeend","<div id='".concat(r.selectors.bannerClose.replace("#",""),"'></div>")),(t=document.querySelector(r.selectors.bannerClose)).addEventListener("click",(function(){e.classList.remove("slide-up"),e.classList.add("slide-down"),n||(e.parentElement.insertAdjacentHTML("beforeend","<div id='".concat(r.selectors.bannerIcon.replace("#",""),"'></div>")),(n=document.querySelector(r.selectors.bannerIcon)).addEventListener("click",(function(){e.classList.remove("slide-down"),e.classList.add("slide-up"),n.classList.remove("show")}))),n.classList.add("show")})))}(),R({usePageLanguage:pe()}));var e=document.querySelector(r.selectors.bannerCustomize);e&&e.addEventListener("click",(function(){G({source:"Banner",element:"Cookie Settings",modalLaunchMethod:"Cookie Settings on Banner",usePageLanguage:pe()})}))})),window.addEventListener("click",(function(e){de()&&function(e){var t=document.querySelector(r.selectors.preferenceCenterAlwaysActive);if(t){t.innerHTML=window.location.hostname;var n=z(t,"li");if(n){n.classList.add("always-active");var o=z(e,".category-item");if(o){var i=o.querySelector(".category-header"),a=o.querySelector(".ot-cookie-description"),c=document.querySelector("#vendors-list-title");if(i&&c){var s=i.innerHTML;a&&(s+="<div class='ot-cookie-description'>".concat(a.innerHTML,"</div>")),c.innerHTML=s}}}}}(e.target),(z(e.target,r.selectors.bannerAccept)||z(e.target,r.selectors.preferenceCenterAccept))&&function(){fe(),le();var e=[];return r.categories.forEach((function(t){e.push("".concat(t,":1"))})),we(e,!0)}().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.customMode,o=t.userGroup;ue();var i=z(e.target,r.selectors.bannerAccept);q({source:i?"Banner":"Modal",element:"Enable all",usePageLanguage:pe(),customMode:n,userGroup:o})})),z(e.target,r.selectors.preferenceCenterConfirm)&&function(){fe(),le();var e=te(),t=[];return r.categories.forEach((function(n){t.push("".concat(n,":").concat(-1!==e.indexOf(n)?"1":"0"))})),we(t,!0)}(e.target).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.customMode,n=e.userGroup;ue(),j({source:"Modal",element:"Confirm my choices",usePageLanguage:pe(),customMode:t,userGroup:n})})),(z(e.target,r.selectors.bannerReject)||z(e.target,r.selectors.preferenceCenterReject))&&function(){fe(),le();var e=[];return r.categories.forEach((function(t){e.push("".concat(t,":").concat(t===r.categoriesDefault?"1":"0"))})),we(e,!0)}().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.customMode,o=t.userGroup;ue();var i=z(e.target,r.selectors.bannerReject);U({source:i?"Banner":"Modal",element:"Don't enable",usePageLanguage:pe(),customMode:n,userGroup:o})})),z(e.target,r.selectors.preferenceCenterFaqs)&&function(e){var t=function(e,t){try{var n=e.parentElement.querySelector("#".concat(e.getAttribute("aria-controls")));t?(e.parentElement.classList.add("opened"),e.setAttribute("aria-expanded","true"),n.setAttribute("aria-hidden","false"),n.style.setProperty("display","block")):(e.parentElement.classList.remove("opened"),e.setAttribute("aria-expanded","false"),n.setAttribute("aria-hidden","true"),n.style.setProperty("display","none"))}catch(e){ee.log("Could not find active item")}},n=document.querySelectorAll(r.selectors.preferenceCenterFaqs);Array.prototype.forEach.call(n,(function(n){if(n===e){var o="true"===n.getAttribute("aria-expanded");t(n,!o)}else t(n,!1)}))}(e.target),z(e.target,r.selectors.preferenceCenterCheckboxes)&&function(){var e=[],t=te().sort(),n=document.querySelectorAll(r.selectors.preferenceCenterCheckboxes);Array.prototype.forEach.call(n,(function(t){t.checked&&e.push(t.getAttribute("data-optanongroupid"))})),e=e.sort();var o=document.querySelector(r.selectors.preferenceCenterConfirm);JSON.stringify(e)!==JSON.stringify(t)?o.style.setProperty("display","inline-block"):o.style.setProperty("display","none")}(),z(e.target,r.selectors.preferenceCenterClose)&&N({usePageLanguage:pe()}),z(e.target,r.selectors.toastNotificationClose)&&se(),z(e.target,r.selectors.toastNotificationManage)&&(e.preventDefault(),se(),me({source:"Toast",element:"Manage Cookie Settings",modalLaunchMethod:"Cookie Settings on Toast",usePageLanguage:pe()})),z(e.target,r.selectors.bannerClose)&&B({source:"Banner",element:"Minimize banner",usePageLanguage:pe()})})),ve=!0)},ye=function(){var e=pe();ee.log("Use page language to render Banner and Preference Center",e),C({path:r.url,type:"script",id:r.id,crossorigin:!0,data:{"domain-script":s(window,"fedsConfig.privacy.otDomainId"),"document-language":e}})},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{modalLaunchMethod:"Programatically",usePageLanguage:pe()};he();var t=s(window,"OneTrust.ToggleInfoDisplay");l(t)?(t(),G(e),setTimeout((function(){document.body.style.setProperty("overflow","")}),0)):(ye(),oe().then((function(){var t=s(window,"OneTrust.ToggleInfoDisplay");l(t)&&(t(),G(e),setTimeout((function(){document.body.style.setProperty("overflow","")}),0))})))},we=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=[],o=[];if(e.forEach((function(e){var t=Q(e.split(":"),2),i=t[0],a=t[1];if(i===r.categoriesDefault&&"0"===a)return n.push("".concat(i,":1")),void o.push(i);-1!==r.categories.indexOf(i)&&(o.push(i),n.push(e))})),o.sort().toString()!==r.categories.toString())return ee.log("New consent does not include all categories, cannot update"),Promise.resolve();var i=function(){var e=P(r.cookies.consent),o=[];e&&e.length?(e=e.split("&")).forEach((function(e){var t=Q(e.split("="),2),r=t[0],i=t[1];"groups"===r&&(i=n.join(",")),"datestamp"===r&&(i=(new Date).toString()),o.push("".concat(r,"=").concat(encodeURIComponent(i).replace(/%20/g,"+")))})):o.push("groups=".concat(encodeURIComponent(n.join(",")).replace(/%20/g,"+")));var i=function(e){ae(r.cookies.consent,o.join("&"),e),ee.log("Setting consent",n),n.forEach((function(e){var t=Q(e.split(":"),2),n=t[0],o=t[1];ge(n,"1"===o)})),t&&re()};return ie().then(i).catch(i)},a=function(){return n.indexOf("C0004:1")},c=function(){return-1!==a()},s=function(e){var t=r.restrictions.userTags,n=t.edu,o=t.age;return e.find((function(e){return o.includes(e)}))?"age":e.find((function(e){return n.includes(e)}))?"edu":"unspecified"};return new Promise((function(e){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={customMode:t.customMode||r.restrictions.modes.user,userGroup:t.userGroup};i().then((function(){e(n)})).catch((function(){e(n)}))};c()?k().then((function(e){"us"===e.country.toLowerCase()?E()?(ee.log("User has Global Privacy Control ON - disabling C0004"),n[a()]="C0004:0",t({customMode:r.restrictions.modes.gpc})):Y().then((function(e){e.isSignedInUser()?e.getProfile().then((function(e){var o=Q(F(e.tags),2),i=o[0],c=o[1];i?(ee.log("User is part of sensitive group ".concat(c.join(",")," - disabling C0004")),n[a()]="C0004:0",t({customMode:r.restrictions.modes.group,userGroup:s(e.tags)})):t()})).catch((function(){t()})):t()})).catch((function(){t()})):t()})).catch((function(){t()})):t()}))},be={bindEvents:he,disableCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(ne()){var n=te(),o=[],i=[];r.categories.forEach((function(t){if(t===r.categoriesDefault)return o.push("".concat(t,":1")),void i.push(t);-1!==n.indexOf(t)&&-1===e.indexOf(t)?(o.push("".concat(t,":1")),i.push(t)):o.push("".concat(t,":0"))})),i.sort().toString()!==n.sort().toString()?we(o,t):ee.log("Consent has not changed, no need to update")}else ee.log("No existing consent, cannot disable categories")},enableCategories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(ne()){var n=te(),o=[],i=[];r.categories.forEach((function(t){return t===r.categoriesDefault||-1!==n.indexOf(t)?(o.push("".concat(t,":1")),void i.push(t)):void(-1!==e.indexOf(t)?(o.push("".concat(t,":1")),i.push(t)):o.push("".concat(t,":0")))})),i.sort().toString()!==n.sort().toString()?we(o,t):ee.log("Consent has not changed, no need to update")}else ee.log("No existing consent, cannot enable categories")},getConfiguration:ie,getConsent:te,hasExistingConsent:ne,hidePreferenceCenter:fe,injectCSS:function(){var e=document.createElement("style");document.head.appendChild(e);var t=e.sheet;t.insertRule("".concat(r.selectors.wrapper," ").concat(r.selectors.banner,".").concat(r.selectors.holdBanner," { display: none }")),t.insertRule("".concat(r.selectors.banner,".bottom { bottom: 0 !important }"))},loadOnClick:function(){window.addEventListener("click",(function(e){var t=s(window,"fedsConfig.privacy.footerLinkSelector");t&&z(e.target,t)&&(e.preventDefault(),me({modalLaunchMethod:"Footer link",usePageLanguage:pe()}))}))},loadSDK:ye,onBannerLoad:oe,refreshConsent:function(){var e=te(),t=[];r.categories.forEach((function(n){t.push("".concat(n,":").concat(-1!==e.indexOf(n)?"1":"0"))})),we(t,!0).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.customMode,n=e.userGroup;t&&t!==r.restrictions.modes.user&&j({source:"Custom",element:t,usePageLanguage:pe(),customMode:t,userGroup:n})}))},setButtonText:function(){var e=function(t){if(t){if($[t])return $[t];if(-1!==t.indexOf("-"))return e(t.substr(0,2))}return $.default},t=function(){var t=s(window,"fedsConfig.privacy.footerLinkSelector");if("string"==typeof t&&0!==t.length){var n=document.querySelector(t);if(n){var o=window.navigator.language||window.navigator.userLanguage;pe()&&(o=document.documentElement.lang),n.innerText=e(o.toLowerCase())}}};"loading"===document.readyState?document.addEventListener("readystatechange",(function e(){t(),document.removeEventListener("readystatechange",e)})):t()},setConsent:we,setImplicitConsent:function(e){var t=[];r.categories.forEach((function(e){t.push("".concat(e,":1"))})),ae(r.cookies.interaction,(new Date).toISOString(),e),we(t,!0).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.customMode,n=e.userGroup;t&&t!==r.restrictions.modes.user&&j({source:"Custom",element:t,usePageLanguage:pe(),customMode:t,userGroup:n})}))},showPreferenceCenter:me,triggerConsentEvent:re,usePageLanguage:pe};function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function ke(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);a=!0);}catch(e){c=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Se=new m({control:"privacy"}),Le=function(){return be.hasExistingConsent()?be.getConsent().sort():[r.categoriesDefault]},Pe=function(){var e=be.getConsent();return be.hasExistingConsent()&&e.length&&e.length===r.categories.length},Ee=function(){var e=be.getConsent(),t=1===e.length&&-1!==e.indexOf(r.categoriesDefault);return be.hasExistingConsent()&&e.length&&e.length!==r.categories.length&&!t},Te=function(){be.showPreferenceCenter()},Ae=function(){return new Promise((function(e){u(window.OneTrust)?(be.loadSDK(),e(be.onBannerLoad())):e()}))},Oe=function(){var e;return null===(e=document.querySelector(r.selectors.banner))||void 0===e?void 0:e.classList.remove(r.selectors.holdBanner)},Ie=function(){null!==new URLSearchParams(window.location.search).get("autoConsent")&&be.setImplicitConsent()},Me=function(){var e=new URLSearchParams(window.location.search).get("customOtDomainId");null!==e&&s(window,"fedsConfig.privacy.otDomainId")&&(window.fedsConfig.privacy.otDomainId=e,Se.log("Using custom domain id: ".concat(e)))},De=function(){var e=new URLSearchParams(window.location.search).get("customPrivacyLocation");null!==e&&(window.sessionStorage.setItem(r.location,JSON.stringify({country:e.toUpperCase()})),window.OneTrust=window.OneTrust||{},window.OneTrust.geolocationResponse={countryCode:e.toUpperCase(),stateCode:""},Se.log("Using custom privacy location",e))},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=s(window,"fedsConfig.privacy");if(u(t))Se.log("Configuration is missing, cannot initialize Privacy");else{(!c(e,"setButtonText")||c(e,"setButtonText")&&!0===e.setButtonText)&&be.setButtonText(),Ie(),Me(),De();var n=new URLSearchParams(window.location.search).get("skipConsent");if("true"===n)return i(r.events.privacyReject),Se.log("".concat(r.events.privacyReject," dispatched")),void Se.log("Stop execution for Privacy logic");be.hasExistingConsent()?(be.loadOnClick(),be.refreshConsent()):Promise.all([k(),be.getConfiguration()]).then((function(e){var t=ke(e,2),n=t[0],o=t[1];!function(e,t){if(u(e)||u(t))return Se.log("Location or configuration are empty, fallback to loading OneTrust"),!0;var n=s(t,"RuleSet");if(!n)return!1;var o=n.filter((function(t){return-1!==t.Countries.indexOf(e.country.toLowerCase())&&!t.Global})),r=!u(o[0]);return Se.log("Active rule:",o[0]),Se.log("Is GDPR enforced: ".concat(r)),r}(n,o)?be.setImplicitConsent(o):(be.injectCSS(),be.loadSDK(),be.bindEvents(),be.onBannerLoad().then((function(){var e,t,n;s(window,"fedsConfig.privacy.holdBanner")&&(null===(n=document.querySelector(r.selectors.banner))||void 0===n||n.classList.add(r.selectors.holdBanner));(null===(t=null===(e=window.Optanon)||void 0===e?void 0:e.GetDomainData())||void 0===t?void 0:t.ShowAlertNotice)||(Se.log("OneTrust location service: user is not GDPR enforced"),be.setImplicitConsent(o))}))),be.loadOnClick()})).catch((function(){}))}},je=(r.events,function(){return{events:r.events,activeCookieGroups:Le,disable:be.disableCategories,enable:be.enableCategories,hasUserProvidedConsent:Pe,hasUserProvidedCustomConsent:Ee,loadResource:C,loadOneTrust:Ae,showBanner:Oe,showConsentPopup:Te,showPreferenceCenter:be.showPreferenceCenter}});window.adobePrivacy=je(),xe()}();